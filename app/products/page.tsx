import type { Metadata } from 'next';
import Navigation from '../custom-solutions/Navigation';
import ContactSection from '../ContactSection';
import { demoUrl, functions } from './content';
import ProductShowcase from './ProductShowcase';
import ProductHero from './ProductHero';
import ProductDifference from './ProductDifference';
import ProductFAQ from './ProductFAQ';
import ProductJourney from './ProductJourney';
import styles from './page.module.css';

const title = 'AI Products for Business Automation, Voice and Analytics | Bizgenix';
const description = 'Explore Bizgenix AI products including Voice AI, BizChat, ScaleOS and Growth Intelligence for customer communication, business automation, operations and analytics.';
export const metadata: Metadata = {
  title, description,
  openGraph: { title, description, type: 'website' },
  twitter: { card: 'summary', title, description },
};

export default function ProductsPage() {
  return <div className={styles.page} id="top">
    <a href="#main-content" className={styles.skipLink}>Skip to content</a>
    <Navigation activePath="/products" />
    <main id="main-content">
      <ProductHero />
      <section className={`${styles.suite} ${styles.container}`} id="product-suite" aria-labelledby="suite-title">
        <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>01 / EXPLORE THE SUITE</p><h2 id="suite-title">A product for the work<br /><em>that matters most.</em></h2></div><p>Every Bizgenix product solves a specific business problem—from customer communication to operational control and decision-ready intelligence.</p></div>
        <ProductShowcase />
      </section>
      <section className={`${styles.functionSection} ${styles.container}`} aria-labelledby="function-title">
        <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>02 / FIND YOUR STARTING POINT</p><h2 id="function-title">Start with the problem.<br /><em>Find your product.</em></h2></div><p>Choose a focused business function, then connect more workflows as your needs grow.</p></div>
        <div className={styles.tableWrapper}><table className={styles.functionTable}><caption className={styles.srOnly}>Recommended products by business function</caption><thead><tr><th scope="col">Business function</th><th scope="col">Recommended product</th><th scope="col">The outcome</th></tr></thead><tbody>{functions.map(([name, product, outcome, id]) => <tr key={name}><th scope="row">{name}</th><td><a href={`#${id}`}>{product} <span aria-hidden="true">↗</span></a></td><td>{outcome}</td></tr>)}</tbody></table></div>
      </section>
      <ProductDifference />
      <ProductJourney />
      <ProductFAQ />
      <section className={styles.finalCta} id="contact" aria-labelledby="contact-title"><div className={styles.container}><p className={styles.eyebrow}>YOUR NEXT CHAPTER STARTS HERE</p><h2 id="contact-title">Choose the right AI product<br /><em>for your business.</em></h2><p>Tell us where your business is losing time, leads, visibility or revenue. Our team will help you identify the most suitable Bizgenix product and implementation path.</p><div className={styles.actions}><a className={styles.primary} href={demoUrl()} target="_blank" rel="noopener noreferrer">Book a Product Demo <span aria-hidden="true">↗</span></a><a className={styles.secondary} href="tel:+918780671906">Talk to an AI Expert</a><a className={styles.exploreLink} href="#product-suite">Explore Products</a></div></div></section>
      <ContactSection homeHref="/" footerOnly />
    </main>
  </div>;
}
