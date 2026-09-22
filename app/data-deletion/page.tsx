import type { Metadata } from 'next';
import Navigation from '../custom-solutions/Navigation';
import SiteFooter from '../SiteFooter';
import styles from '../privacy-policy/page.module.css';

const title = 'User Data Deletion | Bizgenix AI';
const description = 'Request deletion of personal information associated with Bizgenix AI services, website forms, or WhatsApp communication.';
export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: 'website' },
  twitter: { card: 'summary', title, description },
};

// Content sourced from https://www.bizgenix.ai/data-deletion on 17 September 2026.
// Phone updated to the company number supplied by the site owner.
export default function DataDeletionPage() {
  return (
    <div className={styles.page} id="top">
      <a href="#deletion-content" className={styles.skipLink}>Skip to data deletion instructions</a>
      <Navigation activePath="/data-deletion" />
      <main id="deletion-content">
        <header className={styles.hero}>
          <p className={styles.eyebrow}>Privacy</p>
          <h1 id="deletion-title">User Data Deletion</h1>
          <p>{description}</p>
        </header>
        <div className={styles.content}>
          <article className={styles.policy} aria-labelledby="deletion-title">
            <p>At Bizgenix Ai Solution Pvt Ltd, we respect your privacy and your right to control your personal data.</p>
            <p>If you would like to request deletion of your personal information associated with our website, WhatsApp communication, or any services provided by Bizgenix Ai Solution Pvt Ltd, please contact us using the details below.</p>
            <h2>How to Request Data Deletion</h2>
            <p>Please send your request with the following details:</p>
            <ul><li>Full Name</li><li>Registered Mobile Number</li><li>Email Address (if applicable)</li><li>Reason for Data Deletion Request</li></ul>
            <h2>Contact Information</h2>
            <p>Bizgenix Ai Solution Pvt Ltd<br/>G 13, SILVER RADIENCE-2, Science City Rd,<br/>Sola, Ahmedabad, Gujarat 380060</p>
            <p>Email: <a href="mailto:info@bizgenix.com?subject=Data%20Deletion%20Request">info@bizgenix.com</a><br/>Phone: <a href="tel:+918780671906">+91 87806 71906</a></p>
            <h2>Processing Time</h2>
            <p>After verifying your identity, we will process your request within 7 business days.</p>
          </article>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
