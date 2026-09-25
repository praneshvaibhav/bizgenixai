'use client';

import styles from './ContactSection.module.css';
import SiteFooter from './SiteFooter';

export default function ContactSection({
  footerOnly = false,
  bookingHref = '/contact#contact-form',
}: { homeHref?: string; footerOnly?: boolean; bookingHref?: string }) {
  const opensNewTab = /^https?:\/\//.test(bookingHref);
  return <>
    {!footerOnly && <section className={styles.section} id="contact" aria-labelledby="contact-title">
      <div className={styles.layout}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>CONTACT</span>
          <h2 id="contact-title">Ready to put AI to work inside <em>your business?</em></h2>
          <p className={styles.description}>Tell us where your business is losing time, leads, cash or visibility. We will help you identify the right first AI use case and the fastest practical path to implementation.</p>
          <div className={styles.actions}>
            <a className={styles.primary} href={bookingHref} target={opensNewTab ? '_blank' : undefined} rel={opensNewTab ? 'noopener noreferrer' : undefined}>Book a Free AI Strategy Session <span aria-hidden="true">⟶</span></a>
          </div>
        </div>

      </div>
    </section>}

    <SiteFooter />
  </>;
}
