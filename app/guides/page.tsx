import type { Metadata } from 'next';
import Link from '../InternalLink';
import Navigation from '../custom-solutions/Navigation';
import ContactSection from '../ContactSection';
import { pageMeta, SITE_URL } from '../seo';
import styles from '../blog/page.module.css';
import { guides } from './content';

const title = 'Business Guides: Tally MIS, Virtual CFO, WhatsApp Automation | Bizgenix AI';
const description = 'Plain, answer-first guides for Indian business owners on MIS reporting in Tally, virtual CFO services, WhatsApp automation and putting AI to work.';
export const metadata: Metadata = pageMeta({ title, description, path: '/guides' });

export default function GuidesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'CollectionPage', name: 'Bizgenix AI guides', url: `${SITE_URL}/guides`, description, hasPart: guides.map(guide => ({ '@type': 'Article', headline: guide.h1, url: `${SITE_URL}/guides/${guide.slug}` })) },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` }, { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE_URL}/guides` }] },
    ],
  };
  return <div className={styles.page} id="top">
    <a className={styles.skipLink} href="#main-content">Skip to content</a>
    <Navigation activePath="/blog" theme="light" />
    <main id="main-content">
      <div className={`${styles.container} ${styles.previewLayout}`}>
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Guides</span></nav>
        <div className={styles.previewArticle}>
          <p className={styles.eyebrow}>BIZGENIX GUIDES</p>
          <h1>Straight answers for business owners</h1>
          <p className={styles.byline}>Each guide starts with the answer, then shows the steps. Written by the Bizgenix AI team.</p>
        </div>
      </div>
      <section className={`${styles.container} ${styles.section}`} aria-label="All guides">
        <div className={styles.articleGrid}>{guides.map(guide => <article className={styles.articleCard} key={guide.slug}>
          <div className={styles.cardContent}>
            <div className={styles.cardMeta}><span>{guide.tags[0]}</span><span>{guide.minutes} min read</span></div>
            <h2 style={{ fontSize: 22, lineHeight: 1.3, margin: '0 0 12px', fontWeight: 500 }}><Link href={`/guides/${guide.slug}`}>{guide.title}</Link></h2>
            <p>{guide.answer}</p>
            <Link className={styles.textLink} href={`/guides/${guide.slug}`}>Read guide ↗</Link>
          </div>
        </article>)}</div>
        <div className={styles.contextLinks} style={{ marginTop: 40 }}><Link href="/blog">Articles by Dr. CA Umang Ratani ↗</Link><Link href="/products">AI products ↗</Link><Link href="/case-studies">Case studies ↗</Link></div>
      </section>
    </main>
    <ContactSection homeHref="/" footerOnly />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  </div>;
}
