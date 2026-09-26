import type { Metadata } from 'next';
import Navigation from '../custom-solutions/Navigation';
import ContactSection from '../ContactSection';
import { functions } from './content';
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
  alternates: { canonical: '/products' },
  openGraph: { title, description, type: 'website' },
  twitter: { card: 'summary', title, description },
};

export default function ProductsPage() {
  return <div className={styles.page} id="top">
    <a href="#main-content" className={styles.skipLink}>Skip to content</a>
    <Navigation activePath="/products" theme="light" />
    <main id="main-content">
      <ProductHero />
      <section className={`${styles.suite} ${styles.container}`} id="product-suite" aria-label="Bizgenix product details">
        <ProductShowcase />
      </section>
      <section className={`${styles.functionSection} ${styles.container}`} aria-labelledby="function-title">
        <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>02 / FIND YOUR STARTING POINT</p><h2 id="function-title">Start with the problem.<br /><em>Find your product.</em></h2></div><p>Choose a focused business function, then connect more workflows as your needs grow.</p></div>
        <div className={styles.tableWrapper}><table className={styles.functionTable}><caption className={styles.srOnly}>Recommended products by business function</caption><thead><tr><th scope="col">Business function</th><th scope="col">Recommended product</th><th scope="col">The outcome</th></tr></thead><tbody>{functions.map(([name, product, outcome, id]) => <tr key={name}><th scope="row">{name}</th><td><a href={id === 'custom-solutions' ? '/custom-solutions' : `#${id}`}>{product} <span aria-hidden="true">↗</span></a></td><td>{outcome}</td></tr>)}</tbody></table></div>
      </section>
      <ProductDifference />
      <ProductJourney />
      <ProductFAQ />
      <section className={styles.finalCta} id="contact" aria-labelledby="contact-title"><div className={styles.container}><p className={styles.eyebrow}>YOUR NEXT CHAPTER STARTS HERE</p><h2 id="contact-title">Choose the right AI product<br /><em>for your business.</em></h2><p>Tell us where your business is losing time, leads, visibility or revenue. Our team will help you identify the most suitable Bizgenix product and implementation path.</p><div className={styles.actions}><a className={styles.exploreLink} href="/contact#contact-form">Send Your Requirement</a></div></div></section>
      <ContactSection homeHref="/" footerOnly />
    </main>
  </div>;
}
