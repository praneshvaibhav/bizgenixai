import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navigation from '../../custom-solutions/Navigation';
import SiteFooter from '../../SiteFooter';
import { caseStudies } from '../content';
import styles from '../page.module.css';

type PageProps = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return caseStudies.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find(item => item.slug === slug);
  if (!study) return {};
  const title = `${study.client}: ${study.title} | Bizgenix AI`;
  const image = `https://bizgenix.ai${study.images[0].src}`;
  return { title, description: study.summary, openGraph: { title, description: study.summary, type: 'article', images: [{ url: image, alt: study.images[0].caption }] }, twitter: { card: 'summary_large_image', title, description: study.summary, images: [image] } };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find(item => item.slug === slug);
  if (!study) notFound();
  const related = caseStudies.filter(item => item.slug !== slug).sort((a, b) => Number(b.category === study.category) - Number(a.category === study.category)).slice(0, 3);
  return <div className={styles.page}>
    <a className={styles.skipLink} href="#main-content">Skip to content</a>
    <Navigation activePath="/case-studies" />
    <main className={styles.detailMain} id="main-content">
      <div className={styles.container}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/case-studies">All Case Studies</Link><span aria-hidden="true">/</span><span aria-current="page">{study.client}</span></nav>
        <article>
          <header className={styles.detailHero}><span className={styles.pill}>{study.category.toUpperCase()} · {study.kind.toUpperCase()}</span><h1>{study.title}</h1><p className={styles.detailClient}>{study.client}</p><p>{study.summary}</p></header>
          <div className={`${styles.stats} ${styles.detailStats}`} aria-label="Implementation results">{study.metrics.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
          <div className={styles.detailGrid}>
            <div className={styles.detailContent}>
              <section aria-labelledby="business-title"><p className={styles.eyebrow}>THE BUSINESS</p><h2 id="business-title">Built around a real operation.</h2><p>{study.business}</p></section>
              <section aria-labelledby="challenge-title"><p className={styles.eyebrow}>THE CHALLENGE</p><h2 id="challenge-title">What needed to change</h2><ul>{study.challenge.map(point => <li key={point}>{point}</li>)}</ul></section>
              <section className={styles.solution} aria-labelledby="solution-title"><p className={styles.eyebrow}>THE SOLUTION</p><h2 id="solution-title">What we built</h2><p>{study.solution}</p></section>
              <section aria-labelledby="workflow-title"><h2 id="workflow-title">How it works</h2><ol className={styles.workflow}>{study.steps.map(step => <li key={step}>{step}</li>)}</ol></section>
              <section aria-labelledby="outcomes-title"><p className={styles.eyebrow}>AFTER THE SYSTEM</p><h2 id="outcomes-title">What changed for the team</h2><ul>{study.outcomes.map(point => <li key={point}>{point}</li>)}</ul></section>
            </div>
            <aside className={styles.detailAside} aria-label="Project overview"><h2>At a glance</h2><dl><dt>Client</dt><dd>{study.client}</dd><dt>Industry</dt><dd>{study.industry}</dd><dt>Solution</dt><dd>{study.kind}</dd><dt>Source</dt><dd>Case Study Booklet · Page {study.sourcePage}</dd></dl><Link className={styles.primary} href="/contact">Discuss a Similar Solution <span aria-hidden="true">↗</span></Link><p>Results are reported in the supplied Bizgenix AI Case Study Booklet, 2026, for this implementation.</p></aside>
          </div>
          <section className={styles.gallery} aria-labelledby="gallery-title"><p className={styles.eyebrow}>INSIDE THE IMPLEMENTATION</p><h2 id="gallery-title">The working system.</h2><p>Actual screenshots from the project. Select an image to view it at full size.</p><div className={styles.galleryGrid}>{study.images.map(item => <figure key={item.src}><a href={item.src} target="_blank" rel="noopener noreferrer" aria-label={`Open screenshot: ${item.caption} (new tab)`}><Image src={item.src} alt={item.caption} width={item.width} height={item.height} sizes="(max-width: 600px) 85vw, 580px" /></a><figcaption>{item.caption}</figcaption></figure>)}</div></section>
        </article>
        <section className={styles.related} aria-labelledby="related-title"><h2 id="related-title">More work. More possibilities.</h2><div className={styles.relatedGrid}>{related.map(item => <Link className={styles.relatedCard} href={`/case-studies/${item.slug}`} key={item.slug}><span>{item.category}</span><strong>{item.client}</strong><p>{item.title}</p><b>Explore case study →</b></Link>)}</div></section>
      </div>
      <section className={`${styles.container} ${styles.cta}`} aria-labelledby="detail-cta-title"><div><p className={styles.eyebrow}>LET’S TALK ABOUT YOUR BUSINESS</p><h2 id="detail-cta-title">Your next chapter starts here.</h2><p>Find the process that could work better, and explore what a purpose-built AI system could change.</p><Link className={styles.primary} href="/contact">Get a Free AI Audit <span aria-hidden="true">→</span></Link></div><ul className={styles.ctaPoints}><li><span aria-hidden="true">◎</span>Business diagnosis before technology</li><li><span aria-hidden="true">▤</span>A working prototype before commitment</li><li><span aria-hidden="true">✓</span>Training and adoption built into the process</li></ul></section>
    </main>
    <SiteFooter />
  </div>;
}
