import type { Metadata } from 'next';
import Image from 'next/image';
import Link from '../InternalLink';
import Navigation from '../custom-solutions/Navigation';
import SiteFooter from '../SiteFooter';
import CaseStudyCatalog from './CaseStudyCatalog';
import { caseStudies, portfolioStats } from './content';
import styles from './page.module.css';

const title = 'AI Case Studies & Business Results | Bizgenix AI';
const description = 'Explore 18 real Bizgenix AI implementations, from franchise operations and bill verification to textile workflows and WhatsApp automation.';
export const metadata: Metadata = { title, description, alternates: { canonical: '/case-studies' }, openGraph: { title, description, type: 'website', images: [] }, twitter: { card: 'summary', title, description, images: [] } };

export default function CaseStudiesPage() {
  const featured = caseStudies[0];
  const una = caseStudies.find(item => item.slug === 'una-homes')!;
  return <div className={styles.page}>
    <a href="#main-content" className={styles.skipLink}>Skip to content</a>
    <Navigation activePath="/case-studies" theme="light" />
    <main id="main-content">
      <section className={styles.hero} aria-labelledby="case-studies-title">
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <span className={styles.pill}>CASE STUDIES</span>
            <h1 id="case-studies-title">Real businesses.<br />Real AI implementations.<br /><em>Real results.</em></h1>
            <p>Explore how we help businesses solve real problems, automate everyday work and turn AI into measurable business growth.</p>
            <div className={styles.actions}><a className={styles.primary} href="#all-case-studies">Explore All Case Studies <span aria-hidden="true">→</span></a><a className={styles.secondary} href="#featured-case">See the Work <span aria-hidden="true">↗</span></a></div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.visualOrbit} aria-hidden="true" />
            <div className={styles.photoCard}><Image src="/industries/construction.jpg" alt="Construction industry" fill sizes="(max-width: 640px) 65vw, 340px" priority /><span className={styles.imageLabel}>REAL ESTATE & CONSTRUCTION</span></div>
            <Link href="/case-studies/una-homes" className={styles.systemCard} aria-label="Explore the Una Homes bill verification system"><span className={styles.windowBar}><i /><i /><i /><span>Una Homes · Bill verification</span></span><Image src={una.images[0].src} alt={una.images[0].caption} width={una.images[0].width} height={una.images[0].height} sizes="(max-width: 640px) 65vw, 370px" priority /></Link>
            <div className={styles.heroMetric}><strong>95%</strong><span>Faster bill processing</span></div>
            <div className={styles.resultCard}><span className={styles.barIcon} aria-hidden="true"><i /><i /><i /></span><div><strong>110 hrs</strong><span>Saved every week</span></div><span className={styles.resultNote}>Una Homes · Results from the booklet</span></div>
            <p className={styles.handwritten}>Ideas implemented.<br />Impact delivered.</p>
          </div>
        </div>
      </section>

      <section className={`${styles.container} ${styles.stats}`} aria-label="Bizgenix portfolio at a glance">{portfolioStats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</section>

      <section className={`${styles.container} ${styles.featured}`} id="featured-case" aria-labelledby="featured-title">
        <div className={styles.featuredCopy}><span className={`${styles.pill} ${styles.solidPill}`}>FEATURED CASE STUDY</span><h2 id="featured-title">Waffle Castle</h2><p className={styles.featuredLead}>From manual coordination to a franchise control tower.</p><p>Store openings, department handoffs and ad-fund collection — connected in a custom AI-powered system built for a growing franchise network.</p><div className={styles.featuredMetrics}>{[featured.metrics[0], featured.metrics[2], featured.metrics[1]].map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div><Link className={styles.primary} href="/case-studies/waffle-castle">Read Full Case Study <span aria-hidden="true">→</span></Link></div>
        <div className={styles.featuredVisual}><div className={styles.featuredScreen}><span className={styles.windowBar}><i /><i /><i /><span>Waffle Castle · Operations</span></span><Image src={featured.images[0].src} alt={featured.images[0].caption} width={featured.images[0].width} height={featured.images[0].height} sizes="(max-width: 850px) 85vw, 550px" /></div><div className={styles.proofCard}><span className={styles.proofCheck} aria-hidden="true">✓</span><div><strong>One view. Every store.</strong><p>Live pipeline, clear ownership and automated handoffs across eight operational phases.</p><span>ACTUAL SYSTEM · FROM THE CASE BOOKLET</span></div></div></div>
      </section>

      <section className={`${styles.container} ${styles.catalogSection}`} id="all-case-studies" aria-labelledby="catalog-title"><CaseStudyCatalog /></section>

      <section className={`${styles.container} ${styles.cta}`} aria-labelledby="cta-title"><div><p className={styles.eyebrow}>YOUR INDUSTRY COULD BE NEXT</p><h2 id="cta-title">Let’s build your success story.</h2><p>Start with a free AI Business Leak Audit and discover what’s possible for your business.</p><div className={styles.actions}><Link className={styles.primary} href="/contact">Get a Free Audit <span aria-hidden="true">→</span></Link><a className={styles.secondary} href="https://wa.me/918780671906" target="_blank" rel="noopener noreferrer">Talk to Our Team</a></div></div><ul className={styles.ctaPoints}><li><span aria-hidden="true">◎</span>Find the opportunities specific to your business</li><li><span aria-hidden="true">▤</span>See a roadmap informed by real implementations</li><li><span aria-hidden="true">✓</span>Explore a working prototype before you commit</li></ul><p className={styles.ctaSignature}>From possibility<br />to progress.</p></section>
    </main>
    <SiteFooter />
  </div>;
}
