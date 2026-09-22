'use client';

import styles from './ContactSection.module.css';
import SiteFooter from './SiteFooter';

export default function ContactSection({
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

    <SiteFooter />
  </>;
}
