'use client';

import { useState } from 'react';
import Image from 'next/image';
import { categories, insights, topics, formatPublishDate } from './newsletter';
import styles from './BlogListing.module.css';

const pageSize = 8;

export default function BlogCatalog() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [topic, setTopic] = useState('');
  const [page, setPage] = useState(1);
  const filtered = insights.filter(item => (category === 'All' || item.category === category)
    && (!topic || item.tags.includes(topic))
    && `${item.title} ${item.summary} ${item.category} ${item.tags.join(' ')}`.toLowerCase().includes(query.trim().toLowerCase()));
  const totalPages = Math.ceil(filtered.length / pageSize);
  const hasFilters = category !== 'All' || Boolean(topic) || Boolean(query);

  function selectCategory(name: string) {
    setCategory(name); setTopic(''); setQuery(''); setPage(1);
  }

  function selectTopic(name: string) {
    setTopic(topic === name ? '' : name); setCategory('All'); setQuery(''); setPage(1);
  }

  function goToPage(next: number) {
    setPage(next);
    document.getElementById('results-heading')?.focus({ preventScroll: true });
    document.getElementById('latest-insights')?.scrollIntoView({ block: 'start' });
  }

  return <div className={styles.layout}>
    <section className={styles.catalog} id="latest-insights" aria-labelledby="results-heading">
      <div className={styles.categories} aria-label="Filter posts by category">
        {['All', ...categories.map(([name]) => name)].map(name => <button key={name} type="button" aria-pressed={category === name && !topic} onClick={() => selectCategory(name)}>{name}</button>)}
      </div>
      <h2 className={styles.srOnly} id="results-heading" tabIndex={-1}>Blog insights</h2>
      <div className={styles.resultBar}>
        <p role="status">{filtered.length} {filtered.length === 1 ? 'insight' : 'insights'}{topic ? ` · ${topic}` : category !== 'All' ? ` · ${category}` : ''}</p>
        {hasFilters ? <button type="button" onClick={() => selectCategory('All')}>Clear filters <span aria-hidden="true">×</span></button> : <span>The CEO’s Playbook · Latest first</span>}
      </div>
      <div className={styles.grid}>
        {filtered.slice((page - 1) * pageSize, page * pageSize).map((item, index) => <article className={styles.card} key={item.slug}>
          <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" className={styles.cover} tabIndex={-1} aria-hidden="true">
            <Image src={item.cover} alt="" fill sizes="(max-width: 640px) 92vw, (max-width: 1000px) 44vw, 440px" priority={page === 1 && index < 2} />
          </a>
          <div className={styles.author}><span className={styles.avatar}><Image src="/founder-umang-ratani.webp" alt="" fill sizes="52px" /></span><span>{item.author}</span></div>
          <div className={styles.cardBody}>
            <h3><a href={item.sourceUrl} target="_blank" rel="noopener noreferrer">{item.title}</a></h3>
            <p>{item.summary}</p>
            <a className={styles.readMore} href={item.sourceUrl} target="_blank" rel="noopener noreferrer" aria-label={`Read ${item.title} on LinkedIn (opens in a new tab)`}>Read on LinkedIn <span aria-hidden="true">↗</span></a>
          </div>
          <div className={styles.cardFooter}><time dateTime={item.publishedAt}>{formatPublishDate(item.publishedAt)}</time><span>{item.category}</span></div>
        </article>)}
      </div>
      {!filtered.length && <div className={styles.empty}><h3>No insights found.</h3><p>Try a different search or explore another topic.</p><button type="button" onClick={() => selectCategory('All')}>View all insights</button></div>}
      {totalPages > 1 && <nav className={styles.pagination} aria-label="Blog pages">
        <button type="button" aria-label="Previous page" disabled={page === 1} onClick={() => goToPage(page - 1)}>←</button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => <button key={number} type="button" aria-label={`Page ${number}`} aria-current={page === number ? 'page' : undefined} onClick={() => goToPage(number)}>{number}</button>)}
        <button type="button" aria-label="Next page" disabled={page === totalPages} onClick={() => goToPage(page + 1)}>→</button>
      </nav>}
    </section>
    <aside className={styles.sidebar} aria-label="Explore the blog">
      <label className={styles.search}><span className={styles.srOnly}>Search blog posts</span><input type="search" placeholder="Search insights…" value={query} onChange={event => { setQuery(event.target.value); setPage(1); }} /><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 4 4" /></svg></label>
      <section className={styles.sideSection} aria-labelledby="categories-title"><h2 id="categories-title">Categories</h2><ul className={styles.categoryList}>{categories.map(([name]) => <li key={name}><button type="button" aria-pressed={category === name} onClick={() => selectCategory(name)}><span>{name}</span><span>{insights.filter(item => item.category === name).length}</span></button></li>)}</ul></section>
      <section className={styles.sideSection} aria-labelledby="tags-title"><h2 id="tags-title">Tags</h2><div className={styles.tags}>{topics.map(name => <button key={name} type="button" aria-pressed={topic === name} onClick={() => selectTopic(name)}>{name}</button>)}</div></section>
      <section className={styles.sideSection} aria-labelledby="posts-title"><h2 id="posts-title">Latest Posts</h2><ul className={styles.recentPosts}>{insights.slice(0, 4).map(item => <li key={item.slug}><a href={item.sourceUrl} target="_blank" rel="noopener noreferrer"><span className={styles.recentImage}><Image src={item.cover} alt="" fill sizes="64px" /></span><span><small>{item.category}</small>{item.title}</span></a></li>)}</ul></section>
    </aside>
  </div>;
}
