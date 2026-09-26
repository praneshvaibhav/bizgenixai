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
          <h2 id="contact-title">Which part of your business should <em>work better?</em></h2>
          <p className={styles.description}>Tell us what your team keeps chasing, repeating or struggling to see. You do not need a technical brief.</p>
          <div className={styles.actions}>
            <a className={styles.primary} href={bookingHref} target={opensNewTab ? '_blank' : undefined} rel={opensNewTab ? 'noopener noreferrer' : undefined}>Book a Free Business Review <span aria-hidden="true">→</span></a>
          </div>
        </div>

      </div>
    </section>}

    <SiteFooter />
  </>;
}
