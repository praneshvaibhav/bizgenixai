'use client';

import { useRef, useState } from 'react';
import { faqs } from './content';
import styles from './ProductFAQ.module.css';

// Lead with integrations as in the reference, while retaining all existing FAQs.
const questions = [faqs[1], faqs[0], ...faqs.slice(2)].map(([question, answer], index) => ({
  question, answer, number: String(index + 1).padStart(2, '0'), id: `product-faq-${index + 1}`,
}));
const matchingQuestions = (query: string) => {
  const term = query.trim().toLocaleLowerCase();
  return questions.filter(item => `${item.question} ${item.answer}`.toLocaleLowerCase().includes(term));
};

export default function ProductFAQ() {
  const [query, setQuery] = useState('');
  const [openQuestion, setOpenQuestion] = useState<string | null>(questions[0].id);
  const listRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const filtered = matchingQuestions(query);
  const search = (value: string) => {
    setQuery(value);
    setOpenQuestion(matchingQuestions(value)[0]?.id ?? null);
    if (listRef.current) listRef.current.scrollTop = 0;
  };

  return <section className={styles.section} id="product-faq" aria-labelledby="faq-title">
    <div className={styles.layout}>
      <div className={styles.intro}>
        <p className={styles.eyebrow}>A FEW THINGS YOU MAY BE WONDERING</p>
        <h2 id="faq-title">Good questions.<br /><em>Clear answers.</em></h2>
        <p className={styles.description}>Need to discuss your specific workflow?</p>
        <a className={styles.cta} href="/contact#contact-form">Talk to our team <span aria-hidden="true">↗</span></a>
      </div>

      <div className={styles.panel}>
        <div className={styles.searchRow}>
          <div className={styles.searchField}>
            <span className={styles.searchIcon} aria-hidden="true" />
            <label className={styles.srOnly} htmlFor="product-faq-search">Search questions and answers</label>
            <input ref={searchRef} id="product-faq-search" type="search" placeholder="Search a question..." value={query} onChange={event => search(event.target.value)} aria-controls="product-faq-results" autoComplete="off" />
            {query && <button type="button" className={styles.clear} aria-label="Clear search" onClick={() => { search(''); searchRef.current?.focus(); }}>×</button>}
          </div>
          <p className={styles.count} role="status" aria-live="polite" aria-atomic="true"><span className={styles.listIcon} aria-hidden="true">☷</span>{filtered.length} {filtered.length === 1 ? 'question' : 'questions'}</p>
        </div>
        <div className={styles.questions} id="product-faq-results" ref={listRef} tabIndex={0} role="region" aria-label="Frequently asked questions">
          {filtered.map(item => {
            const expanded = openQuestion === item.id;
            return <article key={item.id} className={styles.question} data-open={expanded}>
              <h3><button type="button" id={`${item.id}-button`} aria-expanded={expanded} aria-controls={`${item.id}-answer`} onClick={() => setOpenQuestion(expanded ? null : item.id)}>
                <span className={styles.number} aria-hidden="true">{item.number}</span><span className={styles.questionText}>{item.question}</span><span className={styles.toggle} aria-hidden="true">{expanded ? '−' : '+'}</span>
              </button></h3>
              <div className={styles.answer} id={`${item.id}-answer`} aria-labelledby={`${item.id}-button`} hidden={!expanded}><p>{item.answer}</p></div>
            </article>;
          })}
          {filtered.length === 0 && <div className={styles.empty}><strong>No matching questions</strong><p>Try a different word, such as “Tally”, “languages” or “support”.</p><button type="button" onClick={() => { search(''); searchRef.current?.focus(); }}>Show all questions <span aria-hidden="true">→</span></button></div>}
        </div>
      </div>

      <aside className={styles.support} aria-label="More help from Bizgenix">
        <div className={styles.noteScene}>
          <span className={styles.questionMark} aria-hidden="true">?</span>
          <a className={styles.note} href="/contact#contact-form">
            <span className={styles.bulb} aria-hidden="true"><i /><i /><i /></span>
            <strong>Still have<br />questions?</strong><span>We’re here to help.</span>
          </a>
          <span className={styles.noteArrow} aria-hidden="true" />
        </div>
        <ul className={styles.supportList}>
          <li><span className={`${styles.supportIcon} ${styles.chat}`} aria-hidden="true"><i>•••</i></span><div><strong>Talk to a real person</strong><p>Get expert guidance</p></div></li>
          <li><span className={`${styles.supportIcon} ${styles.bolt}`} aria-hidden="true">ϟ</span><div><strong>Solutions for your workflow</strong><p>Tailored to your needs</p></div></li>
          <li><span className={`${styles.supportIcon} ${styles.shield}`} aria-hidden="true">✓</span><div><strong>No obligation</strong><p>Just a conversation</p></div></li>
        </ul>
      </aside>
    </div>
  </section>;
}
