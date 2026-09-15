'use client';

import styles from './ContactSection.module.css';

const footerGroups = [
  { title: 'Solutions', items: [['Products', '/products'], ['Custom Solutions', '/custom-solutions'], ['Automation', '#automation'], ['Industries', '#industries']] },
  { title: 'Learn & Grow', items: [['Courses', '/courses'], ['Scale With AI', '#programs'], ['Speaking', null], ['Blog', '/blog']] },
  { title: 'Company', items: [['About', '/about'], ['Founder', '/about#founder'], ['Case Studies', null], ['Contact Us', '/contact']] },
] as const;

export default function ContactSection({
  homeHref = '',
  footerOnly = false,
  bookingHref = 'https://api.whatsapp.com/send/?phone=918780671906&text=Hi%21+I%27d+like+to+book+a+Free+AI+Strategy+Session+including+details.&type=phone_number&app_absent=0',
}: { homeHref?: string; footerOnly?: boolean; bookingHref?: string }) {
  return <>
    {!footerOnly && <section className={styles.section} id="contact" aria-labelledby="contact-title">
      <div className={styles.layout}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>CONTACT</span>
          <h2 id="contact-title">Ready to put AI to work inside <em>your business?</em></h2>
          <p className={styles.description}>Tell us where your business is losing time, leads, cash or visibility. We will help you identify the right first AI use case and the fastest practical path to implementation.</p>
          <div className={styles.actions}>
            <a className={styles.primary} href={bookingHref} target="_blank" rel="noopener noreferrer">Book a Free AI Strategy Session <span aria-hidden="true">⟶</span></a>
          </div>
        </div>

      </div>
    </section>}

    <footer className={styles.footer} role="contentinfo">
      <div className={styles.footerInner}>
        <div className={styles.footerMain}>
          <div className={styles.brand}>
            <a href={`${homeHref}#top`} className={styles.brandName} aria-label="Bizgenix AI home">Bizgenix <span>AI</span></a>
            <span className={styles.tagline}>PEOPLE &middot; AI &middot; REAL IMPACT</span>
            <p className={styles.brandLine}><strong>AI that works inside Indian businesses.</strong><span>Custom systems, ready products and education for the 63 million MSMEs Silicon Valley forgot.</span></p>
            <address className={styles.footerContact}>
              <a href="mailto:info@bizgenix.ai">info@bizgenix.ai</a>
              <a href="tel:+918200858674">+91 82008 58674</a>
              <span>Ahmedabad, India</span>
            </address>
          </div>
          {footerGroups.map(group => <nav className={styles.linkGroup} key={group.title} aria-label={`${group.title} footer navigation`}>
            <h2>{group.title}</h2>
            <ul>{group.items.map(([label, href]) => <li key={label}>{href ? <a href={href.startsWith('#') ? `${homeHref}${href}` : href}>{label}</a> : <span>{label}</span>}</li>)}</ul>
          </nav>)}
        </div>
        <div className={styles.trusted}>
          <span className={styles.trustedLabel}>TRUSTED BY BUSINESS LEADERS</span>
          <ul className={styles.trustNames} aria-label="Trusted stages and institutions"><li>ICAI</li><li>CMAI</li><li>JITO</li><li>TEDx</li><li>BNI</li><li>Skillathon Pune</li></ul>
        </div>
        <div className={styles.bottom}>
          <span>&copy; 2026 Bizgenix AI. All rights reserved.</span>
          <div className={styles.legal} aria-label="Legal information"><span>Privacy Policy</span><span>Terms</span></div>
        </div>
      </div>
    </footer>
  </>;
}
