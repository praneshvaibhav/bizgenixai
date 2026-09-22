'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { caseStudies, filters } from './content';
import styles from './page.module.css';

const companyProfiles: Record<string, { src: string; alt: string; kind: 'logo' | 'photo' }> = {
  'waffle-castle': { src: '/case-studies/cards/waffle-castle-logo.png', alt: 'Waffle Castle official logo', kind: 'logo' },
  'una-homes': { src: '/case-studies/cards/una-homes-field.jpg', alt: 'Contemporary luxury home and landscaped garden', kind: 'photo' },
  'bhaskar-silk-mills': { src: '/case-studies/cards/bhaskar-silk-mills-field.jpg', alt: 'Finished textile garments and fabric products', kind: 'photo' },
  'mahavir-traders': { src: '/case-studies/cards/mahavir-traders-field.jpg', alt: 'Infrastructure engineering and construction project', kind: 'photo' },
  'spectrum-dyes': { src: '/case-studies/cards/spectrum-dyes-field.jpg', alt: 'Laboratory testing for dyes and chemical products', kind: 'photo' },
  'sanjay-jain-scaleos': { src: '/case-studies/cards/sanjay-jain-field.jpg', alt: 'Team collaborating across business operations', kind: 'photo' },
  'manoj-hirpara-ai-imagery': { src: '/case-studies/cards/manoj-hirpara-field.jpg', alt: 'Fashion and e-commerce catalog customer', kind: 'photo' },
  'cheque-reminder-system': { src: '/case-studies/cards/dhaval-cheque-field.jpg', alt: 'Architect reviewing a construction plan', kind: 'photo' },
  'email-intelligence': { src: '/case-studies/cards/dhaval-email-field.jpg', alt: 'Professional reviewing information on a laptop', kind: 'photo' },
  'kishor-pawar-task-visibility': { src: '/case-studies/cards/kishor-task-field.jpg', alt: 'Project team coordinating work on site', kind: 'photo' },
  'aavkar-valuation-workflow': { src: '/case-studies/cards/aavkar-field.jpg', alt: 'Home model representing property valuation', kind: 'photo' },
  'sales-call-analysis': { src: '/case-studies/cards/sales-call-field.jpg', alt: 'Customer service professional handling a sales call', kind: 'photo' },
  'sj-sangath-interest-calculator': { src: '/case-studies/cards/sj-sangath-field.jpg', alt: 'Modern commercial real-estate development', kind: 'photo' },
  'stock-keeping-system': { src: '/case-studies/cards/sk-stock-field.jpg', alt: 'Textile fabric stock detail', kind: 'photo' },
  'dispatch-ocr-follow-up': { src: '/case-studies/cards/sk-dispatch-field.jpg', alt: 'Warehouse dispatch and logistics operation', kind: 'photo' },
  'arihant-support-automation': { src: '/case-studies/cards/arihant-field.jpg', alt: 'Software support and IT services workspace', kind: 'photo' },
  'kbp-interior': { src: '/case-studies/cards/kbp-interior-field.jpg', alt: 'Designed contemporary interior space', kind: 'photo' },
  'just-roofing': { src: '/case-studies/cards/just-roofing-field.jpg', alt: 'Specialists installing a metal roofing system', kind: 'photo' },
};

export default function CaseStudyCatalog() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');
  const [limit, setLimit] = useState(6);
  const filtered = caseStudies.filter(item => (filter === 'All' || item.category === filter || item.kind === filter)
    && [item.client, item.title, item.industry, item.category, item.summary, item.solution].join(' ').toLowerCase().includes(query.trim().toLowerCase()));
  function reset() { setQuery(''); setFilter('All'); setLimit(6); }
  return <>
    <div className={styles.catalogHeading}><div><h2 id="catalog-title">All Case Studies</h2><p>Real challenges. Working systems. Documented outcomes.</p></div><label className={styles.search}><span className={styles.srOnly}>Search case studies by company, industry or solution</span><input type="search" placeholder="Search by company, industry or solution…" value={query} onChange={event => { setQuery(event.target.value); setLimit(6); }} /><span aria-hidden="true">⌕</span></label></div>
    <div className={styles.filters} aria-label="Filter case studies">{filters.map(name => <button key={name} type="button" aria-pressed={filter === name} onClick={() => { setFilter(name); setLimit(6); }}>{name}</button>)}</div>
    <div className={styles.catalogStatus}><p role="status">Showing {Math.min(limit, filtered.length)} of {filtered.length} case studies{filter !== 'All' ? ` · ${filter}` : ''}</p>{(query || filter !== 'All') && <button type="button" onClick={reset}>Clear filters ×</button>}</div>
    <div className={styles.cardGrid}>{filtered.slice(0, limit).map(item => { const profile = companyProfiles[item.slug]; return <article className={styles.card} key={item.slug}>
      <Link href={`/case-studies/${item.slug}`} className={`${styles.cardImage} ${profile.kind === 'logo' ? styles.logoImage : ''}`} tabIndex={-1}><Image src={profile.src} alt={profile.alt} fill sizes="(max-width: 600px) 90vw, (max-width: 1000px) 44vw, 400px" /><span>{item.category}</span></Link>
      <div className={styles.cardContent}><h3><Link href={`/case-studies/${item.slug}`}>{item.client}</Link></h3><p className={styles.cardTitle}>{item.title}</p><p className={styles.cardSummary}>{item.summary}</p><div className={styles.cardMetrics}>{item.metrics.slice(0, 2).map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div><Link className={styles.readLink} href={`/case-studies/${item.slug}`} aria-label={`Read case study: ${item.client} — ${item.title}`}>Read Case Study <span aria-hidden="true">→</span></Link></div>
    </article>})}</div>
    {!filtered.length && <div className={styles.empty}><h3>No matching case studies</h3><p>Try a different company, industry or solution.</p><button type="button" className={styles.secondary} onClick={reset}>View All Case Studies</button></div>}
    {limit < filtered.length && <div className={styles.loadMore}><button className={styles.secondary} type="button" onClick={() => setLimit(value => value + 6)}>Load More Case Studies <span aria-hidden="true">↓</span></button></div>}
    <p className={styles.sourceNote}>Project results and system screenshots from the Bizgenix AI Case Study Booklet, 2026. Figures describe their respective implementations; portfolio totals cover the wider business.</p>
  </>;
}
