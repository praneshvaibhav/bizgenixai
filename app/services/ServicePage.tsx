import Link from '../InternalLink';
import Navigation from '../custom-solutions/Navigation';
import ContactSection from '../ContactSection';
import { SITE_URL } from '../seo';
import styles from './service.module.css';

export type ServiceContent = {
  path: string;
  eyebrow: string;
  h1: string;
  lead: string;
  primaryCta: string;
  whatTitle: string;
  whatIntro: string;
  items: { title: string; text: string }[];
  /** Second card grid, e.g. example workflows by industry. */
  extra?: { title: string; intro: string; items: { title: string; text: string }[] };
  proofTitle?: string;
  proofIntro?: string;
  /** Links to proof: a case-study slug, or any href. */
  proof?: { label: string; slug?: string; href?: string }[];
  secondaryCta?: { label: string; href: string };
  schemaType?: 'Service' | 'SoftwareApplication';
  /** Breadcrumb parent, e.g. Products. */
  parent?: { name: string; href: string };
  /** City served, for local pages. Defaults to India. */
  areaServedCity?: string;
  processTitle: string;
  steps: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  related: { label: string; href: string }[];
  serviceType: string;
};

export default function ServicePage({ content }: { content: ServiceContent }) {
  const contactHref = content.path.startsWith('/products/')
    ? `/contact?intent=product&product=${encodeURIComponent(content.path.split('/').pop() || '')}#contact-form`
    : '/contact?intent=custom#contact-form';
  const url = `${SITE_URL}${content.path}`;
  const secondary = content.secondaryCta ?? { label: 'See 18 implementations', href: '/case-studies' };
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      content.schemaType === 'SoftwareApplication'
        ? {
          '@type': 'SoftwareApplication',
          name: content.serviceType,
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          description: content.lead,
          url,
          publisher: { '@id': `${SITE_URL}/#organization` },
        }
        : {
          '@type': 'Service',
          name: content.h1,
          serviceType: content.serviceType,
          description: content.lead,
          url,
          provider: { '@id': `${SITE_URL}/#organization` },
          areaServed: content.areaServedCity ? { '@type': 'City', name: content.areaServedCity } : { '@type': 'Country', name: 'India' },
        },
      {
        '@type': 'FAQPage',
        mainEntity: content.faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          ...(content.parent ? [{ '@type': 'ListItem', position: 2, name: content.parent.name, item: `${SITE_URL}${content.parent.href}` }] : []),
          { '@type': 'ListItem', position: content.parent ? 3 : 2, name: content.eyebrow, item: url },
        ],
      },
    ],
  };

  return <div className={styles.page} id="top">
    <a className={styles.skipLink} href="#main-content">Skip to content</a>
    <Navigation activePath={content.path} theme="light" />
    <main id="main-content">
      <header className={styles.hero}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>{content.eyebrow}</p>
          <h1>{content.h1}</h1>
          <p className={styles.lead}>{content.lead}</p>
          <div className={styles.actions}>
            <Link className={styles.primary} href={contactHref}>{content.primaryCta} <span aria-hidden="true">→</span></Link>
            <Link className={styles.secondary} href={secondary.href} target={secondary.href.startsWith('http') ? '_blank' : undefined} rel={secondary.href.startsWith('http') ? 'noopener noreferrer' : undefined}>{secondary.label}</Link>
          </div>
        </div>
      </header>

      <section className={styles.section} aria-labelledby="what-title">
        <div className={styles.container}>
          <div className={styles.sectionHead}><h2 id="what-title">{content.whatTitle}</h2><p>{content.whatIntro}</p></div>
          <div className={styles.grid}>{content.items.map((item, index) => <article className={styles.card} key={item.title}>
            <span className={styles.cardIndex}>{String(index + 1).padStart(2, '0')}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>)}</div>
        </div>
      </section>

      {content.extra && <section className={`${styles.section} ${styles.ruled}`} aria-labelledby="extra-title">
        <div className={styles.container}>
          <div className={styles.sectionHead}><h2 id="extra-title">{content.extra.title}</h2><p>{content.extra.intro}</p></div>
          <div className={styles.grid}>{content.extra.items.map((item, index) => <article className={styles.card} key={item.title}>
            <span className={styles.cardIndex}>{String(index + 1).padStart(2, '0')}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>)}</div>
        </div>
      </section>}

      {content.proof && content.proof.length > 0 && <section className={`${styles.section} ${styles.ruled}`} aria-labelledby="proof-title">
        <div className={styles.container}>
          <div className={styles.sectionHead}><h2 id="proof-title">{content.proofTitle}</h2><p>{content.proofIntro}</p></div>
          <ul className={styles.proofList}>{content.proof.map(item => <li key={item.label}><Link href={item.href ?? `/case-studies/${item.slug}`}><span>{item.label}</span><span aria-hidden="true">↗</span></Link></li>)}</ul>
        </div>
      </section>}

      <section className={styles.section} aria-labelledby="process-title">
        <div className={styles.container}>
          <div className={styles.sectionHead}><h2 id="process-title">{content.processTitle}</h2></div>
          <ol className={styles.steps}>{content.steps.map((step, index) => <li key={step.title}>
            <span className={styles.stepNumber}>{index + 1}</span>
            <div><h3>{step.title}</h3><p>{step.text}</p></div>
          </li>)}</ol>
        </div>
      </section>

      <section className={`${styles.section} ${styles.ruled}`} aria-labelledby="faq-title">
        <div className={`${styles.container} ${styles.faqLayout}`}>
          <h2 id="faq-title">Questions owners ask</h2>
          <div className={styles.faqList}>{content.faqs.map(({ q, a }) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
        </div>
      </section>

      <section className={styles.section} aria-label="Related pages">
        <div className={`${styles.container} ${styles.related}`}>{content.related.map(item => <Link key={item.href} href={item.href}>{item.label} <span aria-hidden="true">↗</span></Link>)}</div>
      </section>

      <ContactSection homeHref="/" />
    </main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  </div>;
}
