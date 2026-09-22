import type { Metadata } from 'next';
import Navigation from '../custom-solutions/Navigation';
import SiteFooter from '../SiteFooter';
import styles from './page.module.css';

const title = 'Privacy Policy | Bizgenix AI';
const description = 'Learn how Bizgenix AI collects, uses, protects, and manages your information across our website and communication channels.';
export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: 'website' },
  twitter: { card: 'summary', title, description },
};

// Policy wording copied from https://bizgenix.ai/privacy-policy on 17 September 2026.
export default function PrivacyPolicyPage() {
  return (
    <div className={styles.page} id="top">
      <a href="#privacy-content" className={styles.skipLink}>Skip to privacy policy</a>
      <Navigation activePath="/privacy-policy" />
      <main id="privacy-content">
        <header className={styles.hero}>
          <p className={styles.eyebrow}>Privacy</p>
          <h1 id="privacy-title">Privacy Policy</h1>
          <p>{description}</p>
        </header>
        <div className={styles.content}>
          <article className={styles.policy} aria-labelledby="privacy-title">
            <p><strong>Effective Date:</strong> 1 April 2026<br/><strong>Company Name:</strong> Bizgenix Ai Solution Pvt Ltd<br/><strong>Website:</strong> https://bizgenix.ai/</p>
            <h2>1. Introduction</h2>
            <p>Bizgenix Ai Solution Pvt Ltd (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect information when you interact with our website, services, and communication channels including WhatsApp Business.</p>
            <p>By using our website or communicating with us through WhatsApp, phone, email, or any other platform, you agree to the terms outlined in this Privacy Policy.</p>
            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <h3>Personal Information</h3>
            <ul><li>Full name</li><li>Phone number</li><li>Email address</li><li>Business or project details</li><li>Address or location details</li><li>Any information voluntarily submitted through forms, WhatsApp, email, or direct communication</li></ul>
            <h3>Technical Information</h3>
            <ul><li>IP address</li><li>Browser type</li><li>Device information</li><li>Website usage data</li><li>Cookies and analytics data</li></ul>
            <h2>3. How We Use Your Information</h2>
            <ul><li>To respond to inquiries and project requests</li><li>To provide architecture, design, and related services</li><li>To communicate updates and project-related information</li><li>To improve our website and customer experience</li><li>To provide support through WhatsApp Business and other communication channels</li><li>To send promotional or informational messages (only where permitted)</li><li>To comply with legal obligations</li></ul>
            <h2>4. WhatsApp Communication</h2>
            <p>By contacting Bizgenix Ai Solution Pvt Ltd through WhatsApp, you consent to receive:</p>
            <ul><li>Project-related updates</li><li>Customer support messages</li><li>Appointment confirmations</li><li>Service-related notifications</li><li>Promotional communications (if opted in)</li></ul>
            <p>Users may opt out of promotional communications at any time by replying with &quot;STOP&quot; or by contacting us directly.</p>
            <h2>5. Sharing of Information</h2>
            <p>We do not sell, rent, or trade personal information to third parties.</p>
            <p>We may share information only with:</p>
            <ul><li>Trusted service providers assisting in operations</li><li>Legal authorities when required by law</li><li>Platforms necessary for communication and service delivery, including Meta and WhatsApp</li></ul>
            <h2>6. Data Security</h2>
            <p>We implement reasonable administrative, technical, and physical safeguards to protect your information against unauthorized access, misuse, or disclosure.</p>
            <p>However, no method of internet transmission or electronic storage is completely secure, and we cannot guarantee absolute security.</p>
            <h2>7. Cookies and Tracking Technologies</h2>
            <p>Our website may use cookies and analytics tools to improve user experience, monitor website traffic, and analyze performance.</p>
            <p>Users can disable cookies through their browser settings.</p>
            <h2>8. Data Retention</h2>
            <p>We retain personal information only for as long as necessary to fulfill business, legal, and operational requirements.</p>
            <h2>9. Your Rights</h2>
            <ul><li>Access their personal information</li><li>Request correction of inaccurate data</li><li>Request deletion of personal data</li><li>Withdraw consent for marketing communications</li></ul>
            <p>To exercise these rights, please contact us using the information below.</p>
            <h2>10. Third-Party Services</h2>
            <p>Our website or communications may contain links to third-party platforms or services. We are not responsible for the privacy practices of those external platforms.</p>
            <h2>11. Children&#x27;s Privacy</h2>
            <p>Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from minors.</p>
            <h2>12. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.</p>
            <h2>13. Contact Information</h2>
            <p>Bizgenix Ai Solution Pvt Ltd<br/>G 13, SILVER RADIENCE-2, Science City Rd,<br/>Sola, Ahmedabad, Gujarat 380060<br/> Email: info@bizgenix.com<br/>Phone: +91 87806 71906<br/>Website: https://bizgenix.ai/</p>
          </article>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
