import Image from 'next/image';
import Link from './InternalLink';
import styles from './CaseStudiesPreview.module.css';

const studies = [
  {
    client: 'Una Homes',
    context: 'Contractor bills',
    title: 'Bill verification from 5–7 days to under one hour',
    description: 'AI document extraction, 36-rule checks and an approval trail.',
    href: '/case-studies/una-homes',
    image: '/case-studies/cards/una-homes-field.jpg',
    alt: 'Contemporary luxury home built by a real-estate developer',
    kind: 'photo',
  },
  {
    client: 'Bhaskar Silk Mills',
    context: 'Operations',
    title: '80+ spreadsheets replaced by one operating system',
    description: 'Production, CRM, payments and follow-ups in one system.',
    href: '/case-studies/bhaskar-silk-mills',
    image: '/case-studies/cards/bhaskar-silk-mills-field.jpg',
    alt: 'Finished garments and textile products from a silk mill',
    kind: 'photo',
  },
  {
    client: 'Waffle Castle',
    context: 'Franchise operations',
    title: 'Every franchise operation in one view',
    description: 'Store openings, handoffs and ad-fund collection in one control tower.',
    href: '/case-studies/waffle-castle',
    image: '/case-studies/cards/waffle-castle-logo.png',
    alt: 'Waffle Castle logo',
    kind: 'logo',
  },
] as const;

export default function CaseStudiesPreview() {
  return (
    <section className={styles.section} aria-labelledby="case-studies-preview-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="case-studies-preview-title">See what we&apos;ve built for businesses like yours.</h2>
          <Link className={styles.allStudies} href="/case-studies">View all 18 case studies</Link>
        </header>

        <div className={styles.grid}>
          {studies.map(study => (
            <article className={styles.card} key={study.href}>
              <Link className={`${styles.visual} ${study.kind === 'logo' ? styles.logoVisual : ''}`} href={study.href} tabIndex={-1} aria-hidden="true">
                <Image src={study.image} alt="" fill sizes="(max-width: 820px) 92vw, 31vw" />
              </Link>
              <div className={styles.content}>
                <p className={styles.meta}>{study.client} <span aria-hidden="true">·</span> {study.context}</p>
                <h3><Link href={study.href}>{study.title}</Link></h3>
                <p className={styles.description}>{study.description}</p>
                <Link className={styles.caseLink} href={study.href} aria-label={`View ${study.client} case study`}>View case study <span aria-hidden="true">→</span></Link>
              </div>
            </article>
          ))}
        </div>

        <p className={styles.note}>Results are documented in the Bizgenix AI Case Study Booklet, 2026, for each implementation.</p>
      </div>
    </section>
  );
}
