'use client';

import styles from './ContactSection.module.css';

const footerItems = [
  ['Products', '#products'], ['Custom Solutions', '/custom-solutions'],
  ['Automation', '#automation'], ['Industries', '#industries'],
  ['Case Studies', null], ['Scale With AI', '#programs'],
  ['Speaking', null], ['About', '#about'], ['Founder', '#founder'],
  ['Insights', null], ['Contact', '#contact'],
  ['Privacy Policy', null], ['Terms', null],
] as const;

export default function ContactSection({ homeHref = '' }: { homeHref?: string }) {
  return <>
    <section className={styles.section} id="contact" aria-labelledby="contact-title">
      <div className={styles.layout}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>CONTACT</span>
          <h2 id="contact-title">Ready to put AI to work inside <em>your business?</em></h2>
          <p className={styles.description}>Tell us where your business is losing time, leads, cash or visibility. We will help you identify the right first AI use case and the fastest practical path to implementation.</p>
          <div className={styles.actions}>
            <a className={styles.primary} href="https://api.whatsapp.com/send/?phone=918200858674&text=Hi%21+I%27d+like+to+book+a+Free+AI+Strategy+Session+including+details.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">Book a Free AI Strategy Session <span aria-hidden="true">⟶</span></a>
            <a className={`${styles.primary} ${styles.secondary}`} href="tel:+918200858674">Talk to Bizgenix Team <span aria-hidden="true">↗</span></a>
          </div>
        </div>

      </div>
    </section>

    <footer className={styles.footer}>
      <nav className={styles.footerNavigation} aria-label="Footer navigation">
        {footerItems.map(([label, href]) => href ? <a key={label} href={href.startsWith('#') && href !== '#contact' ? `${homeHref}${href}` : href}>{label}</a> : <span key={label}>{label}</span>)}
      </nav>
      <div className={styles.footerGrid}>
        <div className={styles.brand}>
          <a href={`${homeHref}#top`} className={styles.brandName}>Bizgenix <span>AI</span></a>
          <span className={styles.tagline}>PEOPLE · AI · REAL IMPACT</span>
          <p className={styles.brandLine}><strong>AI that works inside Indian businesses.</strong><br/>Custom systems, ready products and education for the 63 million MSMEs Silicon Valley forgot.</p>
          <address className={styles.footerContact}><a href="mailto:info@bizgenix.ai">info@bizgenix.ai</a><a href="tel:+918200858674">+91 82008 58674</a><span>Ahmedabad, India</span></address>
        </div>
        <div className={styles.trusted}>
          <span className={styles.trustedLabel}>TRUSTED BY BUSINESS LEADERS</span>
          <div className={styles.trustNames}><b>ICAI</b><b>CMAI</b><b>JITO</b><b>TED<sup>x</sup></b><b>BNI</b><b>Skillathon Pune</b></div>
        </div>
      </div>
      <div className={styles.bottom}><span>© 2026 Bizgenix AI. All rights reserved.</span></div>
    </footer>
  </>;
}
