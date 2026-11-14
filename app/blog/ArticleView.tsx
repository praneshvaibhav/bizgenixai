import Image from 'next/image';
import Link from '../InternalLink';
import Navigation from '../custom-solutions/Navigation';
import ContactSection from '../ContactSection';
import { SITE_URL } from '../seo';
import { articles, type Article } from './articles';
import { contactUrl } from './content';
import { formatPublishDate } from './newsletter';
import styles from './page.module.css';
import body from './article.module.css';

export default function ArticleView({ article }: { article: Article }) {
  const url = `${SITE_URL}/blog/${article.slug}`;
  const index = articles.findIndex(item => item.slug === article.slug);
  const related = [1, 2, 3].map(step => articles[(index + step) % articles.length]);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: article.h1,
        alternativeHeadline: article.originalHeadline,
        description: article.description,
        image: `${SITE_URL}${article.cover ?? '/custom-solutions-hero.webp'}`,
        datePublished: `${article.date}T09:00:00+05:30`,
        author: { '@id': `${SITE_URL}/#founder` },
        publisher: { '@id': `${SITE_URL}/#organization` },
        mainEntityOfPage: url,
        wordCount: article.words,
        inLanguage: 'en-IN',
        keywords: article.tags.join(', '),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Insights', item: `${SITE_URL}/blog` },
          { '@type': 'ListItem', position: 3, name: article.title, item: url },
        ],
      },
    ],
  };

  return <div className={styles.page} id="top">
    <a className={styles.skipLink} href="#main-content">Skip to content</a>
    <Navigation activePath="/blog" theme="light" />
    <main id="main-content">
      <div className={`${styles.container} ${styles.previewLayout}`}>
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/blog">Insights</Link><span aria-hidden="true">/</span><span aria-current="page">{article.tags[0]}</span></nav>
        <article className={styles.previewArticle}>
          <p className={styles.eyebrow}>{article.tags.join(' · ')}</p>
          <h1>{article.h1}</h1>
          <p className={body.standfirst}>{article.originalHeadline}</p>
          <p className={styles.byline}>By Dr. CA Umang Ratani <span>•</span> <time dateTime={article.date}>{formatPublishDate(article.date)}</time> <span>•</span> {article.minutes} min read</p>
          {article.cover && <div className={body.cover}><Image src={article.cover} alt={article.h1} fill priority sizes="(max-width: 960px) 92vw, 900px" /></div>}
          <div className={body.body} dangerouslySetInnerHTML={{ __html: article.html }} />
          <aside className={body.cta} aria-labelledby="article-cta-title">
            <p className={styles.eyebrow}>WORK WITH BIZGENIX AI</p>
            <h2 id="article-cta-title">Want this built inside your business?</h2>
            <p>Tell us the one task you want off your desk. We start with a working prototype on your own data.</p>
            <div className={styles.actions}>
              <Link className={styles.primary} href={contactUrl}>Book a free AI strategy session <span aria-hidden="true">→</span></Link>
              <Link className={styles.secondary} href="/ai-automation">See what we automate</Link>
            </div>
          </aside>
        </article>
      </div>
      <section className={`${styles.container} ${styles.section}`} aria-labelledby="related-title">
        <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>KEEP READING</p><h2 id="related-title">More from<br /><em>The CEO’s Playbook.</em></h2></div><Link className={styles.textLink} href="/blog">View all insights ↗</Link></div>
        <div className={styles.articleGrid}>{related.map(item => <article className={styles.articleCard} key={item.slug}>
          <div className={styles.cardContent}>
            <div className={styles.cardMeta}><span>{item.tags[0]}</span><span>{item.minutes} min read</span></div>
            <h3><Link href={`/blog/${item.slug}`}>{item.h1}</Link></h3>
            <p>{item.description}</p>
            <Link className={styles.textLink} href={`/blog/${item.slug}`}>Read article ↗</Link>
          </div>
        </article>)}</div>
      </section>
    </main>
    <ContactSection homeHref="/" footerOnly />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  </div>;
}
