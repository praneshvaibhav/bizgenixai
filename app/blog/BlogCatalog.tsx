'use client';

import { useState } from 'react';
import Link from 'next/link';
import { categories, industries, insights, topics } from './content';
import InsightArt from './InsightArt';
import styles from './page.module.css';

export default function BlogCatalog() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All topics');
  const [industry, setIndustry] = useState('All industries');
  const [type, setType] = useState('All formats');
  const [sort, setSort] = useState('Featured first');
  const [limit, setLimit] = useState(6);
  const [topic, setTopic] = useState('');
  const reset = () => { setQuery(''); setCategory('All topics'); setIndustry('All industries'); setType('All formats'); setTopic(''); setLimit(6); };
  const filtered = insights.filter(item => (category === 'All topics' || item.category === category)
    && (industry === 'All industries' || item.industry === industry)
    && (type === 'All formats' || item.type === type)
    && (!topic || item.tags.includes(topic))
    && `${item.title} ${item.summary} ${item.category} ${item.tags.join(' ')}`.toLowerCase().includes(query.trim().toLowerCase()));
  if (sort === 'Title A–Z') filtered.sort((a, b) => a.title.localeCompare(b.title));
  const selectedDescription = categories.find(([name]) => name === category)?.[1];

  return <>
    <div className={styles.catalogControls}>
      <div className={styles.searchRow}><label className={styles.search}><span aria-hidden="true">⌕</span><span className={styles.srOnly}>Search articles by title or keyword</span><input type="search" placeholder="What would you like to explore?" value={query} onChange={event => { setQuery(event.target.value); setLimit(6); }} /></label><span className={styles.searchHint}>A little curiosity. A practical next step.</span></div>
      <div className={styles.filters} aria-label="Filter insights by category">{['All topics', ...categories.map(([name]) => name)].map(name => <button key={name} type="button" aria-pressed={category === name} onClick={() => { setCategory(name); setTopic(''); setLimit(6); }}>{name}</button>)}</div>
      {selectedDescription && <p className={styles.categoryDescription}>{selectedDescription}</p>}
      <div className={styles.filterBar}><p role="status" aria-live="polite">{filtered.length} {filtered.length === 1 ? 'insight' : 'insights'}{topic && <> / <strong>{topic}</strong></>}</p><div>
        <label><span className={styles.srOnly}>Filter by industry</span><select value={industry} onChange={event => { setIndustry(event.target.value); setLimit(6); }}><option>All industries</option>{industries.map(([name]) => <option key={name}>{name}</option>)}</select></label>
        <label><span className={styles.srOnly}>Filter by format</span><select value={type} onChange={event => { setType(event.target.value); setLimit(6); }}>{['All formats', 'Article', 'Guide', 'Case study', 'Video', 'Event'].map(value => <option key={value}>{value}</option>)}</select></label>
        <label><span className={styles.srOnly}>Sort insights</span><select value={sort} onChange={event => setSort(event.target.value)}><option>Featured first</option><option>Title A–Z</option></select></label>
      </div></div>
    </div>
    <div className={styles.articleGrid}>{filtered.slice(0, limit).map(item => <article className={styles.articleCard} key={item.slug}>
      <Link href={`/blog/${item.slug}`} className={styles.artLink} tabIndex={-1} aria-hidden="true"><InsightArt kind={item.art} /></Link>
      <div className={styles.cardContent}><div className={styles.cardMeta}><span>{item.category}</span><span>{item.type} preview</span></div><h3><Link href={`/blog/${item.slug}`}>{item.title}</Link></h3><p>{item.summary}</p><div className={styles.cardFooter}><span>Bizgenix Insights Team</span><Link href={`/blog/${item.slug}`} aria-label={`Read preview: ${item.title}`}>Read preview <span aria-hidden="true">↗</span></Link></div></div>
    </article>)}</div>
    {filtered.length === 0 && <div className={styles.empty}><span aria-hidden="true">⌕</span><h3>No previews match just yet.</h3><p>Try another topic or reset the filters to explore all insights.</p><button className={styles.primary} type="button" onClick={reset}>Reset filters <span aria-hidden="true">↻</span></button></div>}
    {filtered.length > limit && <div className={styles.loadMore}><button className={styles.secondary} type="button" onClick={() => setLimit(value => value + 6)}>Explore more insights <span aria-hidden="true">↓</span></button><span>Showing {Math.min(limit, filtered.length)} of {filtered.length}</span></div>}
    <div className={styles.topics}><p className={styles.eyebrow}>POPULAR TOPICS</p><div>{topics.map(name => <button type="button" key={name} aria-pressed={topic === name} onClick={() => { reset(); setTopic(topic === name ? '' : name); document.getElementById('latest-insights')?.scrollIntoView({ block: 'start' }); }}>{name}<span aria-hidden="true">↗</span></button>)}</div></div>
  </>;
}
