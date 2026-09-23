import type { Metadata } from 'next';
import Navigation from '../custom-solutions/Navigation';
import ContactSection from '../ContactSection';
import BlogCatalog from './BlogCatalog';
import { newsletterUrl } from './newsletter';
import styles from './BlogListing.module.css';

const title = "The CEO's Playbook: AI and Business Insights | Bizgenix";
const description = "Explore Dr. CA Umang Ratani's LinkedIn newsletter articles on AI adoption, automation, business intelligence and growth.";
export const metadata: Metadata = { title, description, openGraph: { title, description, type: 'website' }, twitter: { card: 'summary', title, description } };

export default function BlogPage() {
  return <div className={styles.page} id="top">
    <a className={styles.skipLink} href="#main-content">Skip to content</a>
    <Navigation activePath="/blog" theme="light" />
    <main id="main-content" className={styles.main}>
      <header className={styles.hero}>
        <p className={styles.eyebrow}>THE BIZGENIX BLOG</p>
        <h1>Insights From<br />Our Experts<span>.</span></h1>
        <p>Business and AI insights from Dr. CA Umang Ratani’s <a href={newsletterUrl} target="_blank" rel="noopener noreferrer">The CEO’s Playbook</a>.</p>
      </header>
      <BlogCatalog />
    </main>
    <ContactSection homeHref="/" footerOnly />
  </div>;
}
