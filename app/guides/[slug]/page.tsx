import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from '../../InternalLink';
import Navigation from '../../custom-solutions/Navigation';
import ContactSection from '../../ContactSection';
import { pageMeta, SITE_URL } from '../../seo';
import { formatPublishDate } from '../../blog/newsletter';
import styles from '../../blog/page.module.css';
import body from '../../blog/article.module.css';
import { guides } from '../content';

// Only the guides listed in content.ts exist; anything else is a real 404.
export const dynamicParams = false;
export function generateStaticParams() { return guides.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find(item => item.slug === slug);
  if (!guide) return {};
  return pageMeta({ title: `${guide.title} | Bizgenix AI`, description: guide.description, path: `/guides/${guide.slug}`, type: 'article', publishedTime: `${guide.date}T09:00:00+05:30` });
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guides.find(item => item.slug === slug);
  if (!guide) notFound();
  const url = `${SITE_URL}/guides/${guide.slug}`;
  const others = guides.filter(item => item.slug !== guide.slug);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: guide.h1,
        description: guide.description,
        abstract: guide.answer,
        image: `${SITE_URL}/custom-solutions-hero.webp`,
        datePublished: `${guide.date}T09:00:00+05:30`,
        dateModified: `${guide.updated}T09:00:00+05:30`,
        author: { '@id': `${SITE_URL}/#organization` },
        publisher: { '@id': `${SITE_URL}/#organization` },
        mainEntityOfPage: url,
        inLanguage: 'en-IN',
        keywords: guide.tags.join(', '),
      },
      {
        '@type': 'FAQPage',
        mainEntity: guide.faqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE_URL}/guides` },
          { '@type': 'ListItem', position: 3, name: guide.title, item: url },
        ],
      },
    ],
  };

  return <div className={styles.page} id="top">
    <a className={styles.skipLink} href="#main-content">Skip to content</a>
    <Navigation activePath="/blog" theme="light" />
    <main id="main-content">
      <div className={`${styles.container} ${styles.previewLayout}`}>
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/guides">Guides</Link><span aria-hidden="true">/</span><span aria-current="page">{guide.tags[0]}</span></nav>
        <article className={styles.previewArticle}>
          <p className={styles.eyebrow}>{guide.tags.join(' · ')}</p>
          <h1>{guide.h1}</h1>
          <p className={styles.byline}>By the Bizgenix AI team <span>•</span> Updated <time dateTime={guide.updated}>{formatPublishDate(guide.updated)}</time> <span>•</span> {guide.minutes} min read</p>
          <div className={body.body}>
            <blockquote><strong>Short answer.</strong> {guide.answer}</blockquote>
            <div dangerouslySetInnerHTML={{ __html: guide.html }} />
            <h2 id="questions">Common questions</h2>
            {guide.faqs.map(([question, answer]) => <div key={question}><h3>{question}</h3><p>{answer}</p></div>)}
          </div>
          <aside className={body.cta} aria-labelledby="guide-cta-title">
            <p className={styles.eyebrow}>{guide.next.eyebrow}</p>
            <h2 id="guide-cta-title">{guide.next.title}</h2>
            <p>{guide.next.text}</p>
            <div className={styles.actions}>
              <Link className={styles.primary} href={guide.next.primary.href}>{guide.next.primary.label} <span aria-hidden="true">→</span></Link>
              <Link className={styles.secondary} href={guide.next.secondary.href}>{guide.next.secondary.label}</Link>
            </div>
          </aside>
        </article>
      </div>
      <section className={`${styles.container} ${styles.section}`} aria-labelledby="more-guides-title">
        <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>KEEP READING</p><h2 id="more-guides-title">More <em>guides.</em></h2></div><Link className={styles.textLink} href="/guides">View all guides ↗</Link></div>
        <div className={styles.articleGrid}>{others.map(item => <article className={styles.articleCard} key={item.slug}>
          <div className={styles.cardContent}>
            <div className={styles.cardMeta}><span>{item.tags[0]}</span><span>{item.minutes} min read</span></div>
            <h3><Link href={`/guides/${item.slug}`}>{item.title}</Link></h3>
            <p>{item.description}</p>
            <Link className={styles.textLink} href={`/guides/${item.slug}`}>Read guide ↗</Link>
          </div>
        </article>)}</div>
      </section>
    </main>
    <ContactSection homeHref="/" footerOnly />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  </div>;
}
