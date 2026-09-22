import type { Metadata } from 'next';
import Navigation from '../custom-solutions/Navigation';
import SiteFooter from '../SiteFooter';
import styles from '../privacy-policy/page.module.css';

const title = 'Terms of Service | Bizgenix AI';
const description = 'Please review the terms that govern your use of Bizgenix AI services, website, and communication channels.';
export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: 'website' },
  twitter: { card: 'summary', title, description },
};

// Terms wording copied from https://bizgenix.ai/terms on 17 September 2026.
export default function TermsPage() {
  return (
    <div className={styles.page} id="top">
      <a href="#terms-content" className={styles.skipLink}>Skip to terms of service</a>
      <Navigation activePath="/terms" />
      <main id="terms-content">
        <header className={styles.hero}>
          <p className={styles.eyebrow}>Legal</p>
          <h1 id="terms-title">Terms of Service</h1>
          <p>{description}</p>
        </header>
        <div className={styles.content}>
          <article className={styles.policy} aria-labelledby="terms-title">
            <p><strong>Effective Date:</strong> 1 April 2026<br/><strong>Company Name:</strong> Bizgenix Ai Solution Pvt Ltd<br/><strong>Website:</strong> https://bizgenix.ai/</p>
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using the website, services, or WhatsApp Business communication channels of Bizgenix Ai Solution Pvt Ltd, you agree to comply with and be bound by these Terms of Service.</p>
            <p>If you do not agree with these terms, please do not use our services.</p>
            <h2>2. Services</h2>
            <p>Bizgenix Ai Solution Pvt Ltd provides architecture, planning, design, interior, consultation, and related professional services.</p>
            <p>All services are subject to availability and may be modified or discontinued at our discretion.</p>
            <h2>3. User Responsibilities</h2>
            <p>Users agree:</p>
            <ul><li>To provide accurate and complete information</li><li>Not to misuse the website or communication platforms</li><li>Not to engage in fraudulent, abusive, or unlawful activity</li><li>Not to attempt unauthorized access to systems or data</li></ul>
            <h2>4. WhatsApp Business Usage</h2>
            <p>When communicating with us via WhatsApp Business, users agree:</p>
            <ul><li>To use respectful and lawful communication</li><li>Not to send spam, abusive content, or malicious files</li><li>That message delivery depends on third-party platforms including Meta and WhatsApp</li></ul>
            <p>We reserve the right to block or restrict communication from users violating these terms.</p>
            <h2>5. Intellectual Property</h2>
            <p>All website content including text, graphics, logos, designs, images, and branding are the property of Bizgenix Ai Solution Pvt Ltd unless otherwise stated.</p>
            <p>Users may not reproduce, distribute, or use any content without prior written permission.</p>
            <h2>6. Project Information and Estimates</h2>
            <p>Any quotations, timelines, or project estimates shared are subject to revision based on project scope, client requirements, and operational conditions.</p>
            <p>Final agreements and deliverables will be governed by separate project contracts where applicable.</p>
            <h2>7. Limitation of Liability</h2>
            <p>Bizgenix Ai Solution Pvt Ltd shall not be liable for:</p>
            <ul><li>Indirect or consequential damages</li><li>Delays caused by third-party services</li><li>Technical interruptions or communication failures</li><li>User misuse of information or services</li></ul>
            <p>Use of the website and communication platforms is at the user&#x27;s own risk.</p>
            <h2>8. Third-Party Platforms</h2>
            <p>Our services may rely on third-party platforms including WhatsApp, Meta, hosting providers, and analytics tools. We are not responsible for disruptions, policy changes, or technical issues caused by third-party services.</p>
            <h2>9. Termination</h2>
            <p>We reserve the right to suspend or terminate access to our services or communication channels for violations of these Terms.</p>
            <h2>10. Governing Law</h2>
            <p>These Terms shall be governed by and interpreted in accordance with the laws of India.</p>
            <p>Any disputes shall be subject to the jurisdiction of courts located in Surat, Gujarat.</p>
            <h2>11. Changes to Terms</h2>
            <p>We may modify these Terms of Service at any time. Updated versions will be posted on this page with the revised effective date.</p>
            <h2>12. Contact Information</h2>
            <p>Bizgenix Ai Solution Pvt Ltd<br/>G 13, Silver Radience-2, Science City Rd,<br/>Sola, Ahmedabad, Gujarat 380060<br/>Email: info@bizgenix.com<br/>Phone: +91 87806 71906<br/>Website: https://bizgenix.ai/</p>
          </article>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
