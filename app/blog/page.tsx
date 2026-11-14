import type { Metadata } from 'next';
import { pageMeta } from '../seo';
import Navigation from '../custom-solutions/Navigation';
import ContactSection from '../ContactSection';
import BlogCatalog from './BlogCatalog';
import { newsletterUrl } from './newsletter';
import styles from './BlogListing.module.css';

const title = "AI for Business Insights | The CEO's Playbook | Bizgenix AI";
const description = 'Articles by Dr. CA Umang Ratani on AI for business: automation, AI agents, implementation plans, hiring versus automating, and the decisions owners face.';
export const metadata: Metadata = pageMeta({ title, description, path: '/blog' });

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
