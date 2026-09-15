import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navigation from '../../custom-solutions/Navigation';
import ContactSection from '../../ContactSection';
import { categories, contactUrl, insights } from '../content';
import InsightArt from '../InsightArt';
import styles from '../page.module.css';

export function generateStaticParams() { return insights.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const insight = insights.find(item => item.slug === slug);
  if (!insight) return {};
  const title = `${insight.title} | Bizgenix Insights`;
  return { title, description: insight.summary, robots: { index: false, follow: true }, openGraph: { title, description: insight.summary, type: 'website', images: [] }, twitter: { card: 'summary', title, description: insight.summary, images: [] } };
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = insights.find(item => item.slug === slug);
  if (!insight) notFound();
  const related = insights.filter(item => item.slug !== slug).sort((a, b) => Number(b.category === insight.category) - Number(a.category === insight.category)).slice(0, 3);
  return <div className={styles.page} id="top"><a className={styles.skipLink} href="#main-content">Skip to content</a><Navigation activePath="/blog" /><main id="main-content">
    <div className={`${styles.container} ${styles.previewLayout}`}>
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/blog">Blog</Link><span aria-hidden="true">/</span><span aria-current="page">{insight.category} preview</span></nav>
      <article className={styles.previewArticle}><p className={styles.eyebrow}>{insight.category} / {insight.type.toUpperCase()} PREVIEW</p><h1>{insight.title}</h1><p className={styles.byline}>Bizgenix Insights Team <span>•</span> Full article coming soon</p><InsightArt kind={insight.art} large /><div className={styles.previewBody}><h2>About this insight</h2><p>{insight.summary}</p><div className={styles.takeaway}><span className={styles.eyebrow}>EXPLORE THE TOPIC</span><p>{categories.find(([name]) => name === insight.category)?.[1]}</p></div><p className={styles.previewNote}>This is an article preview. The full insight is coming soon. You can discuss the topic with our team today.</p><div className={styles.actions}><a className={styles.primary} href={contactUrl(insight.title)} target="_blank" rel="noopener noreferrer">Discuss this topic <span aria-hidden="true">↗</span></a><Link className={styles.secondary} href="/blog#latest-insights">Explore more insights</Link></div><div className={styles.contextLinks}><Link href="/products">Explore AI products ↗</Link><Link href="/custom-solutions">Custom AI solutions ↗</Link><Link href="/courses">Practical AI learning ↗</Link></div></div></article>
    </div>
    <section className={`${styles.container} ${styles.section}`} aria-labelledby="related-title"><div className={styles.sectionHeading}><div><p className={styles.eyebrow}>KEEP EXPLORING</p><h2 id="related-title">A little more<br /><em>food for thought.</em></h2></div><Link className={styles.textLink} href="/blog#latest-insights">View all insights ↗</Link></div><div className={styles.articleGrid}>{related.map(item => <article className={styles.articleCard} key={item.slug}><InsightArt kind={item.art} /><div className={styles.cardContent}><div className={styles.cardMeta}><span>{item.category}</span><span>Preview</span></div><h3><Link href={`/blog/${item.slug}`}>{item.title}</Link></h3><p>{item.summary}</p><Link className={styles.textLink} href={`/blog/${item.slug}`}>Read preview ↗</Link></div></article>)}</div></section>
    <section id="contact" className={styles.previewContact}><div className={styles.container}><h2>Have a use case in mind?</h2><a className={styles.primary} href={contactUrl('an AI strategy session')} target="_blank" rel="noopener noreferrer">Talk to our team ↗</a></div></section>
  </main><ContactSection homeHref="/" footerOnly /></div>;
}
