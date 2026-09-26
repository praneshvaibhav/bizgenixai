'use client';

import { useState, type FormEvent } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useSearchParams } from 'next/navigation';
import { email, nextSteps, phone, queryTypes } from './content';
import styles from './page.module.css';
import SiteFooter from '../SiteFooter';
import Navigation from '../custom-solutions/Navigation';

export default function ContactExperience() {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
  const searchParams = useSearchParams();
  const [configurationError, setConfigurationError] = useState(false);
  const [state, handleSubmit] = useForm(formId || 'form-not-configured');
  const requested = searchParams.get('interest') || '';
  const interest = queryTypes.includes(requested) ? requested : '';
  const source = searchParams.get('source') || '/contact';

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    if (!formId) {
      event.preventDefault();
      setConfigurationError(true);
      return;
    }

    setConfigurationError(false);
    await handleSubmit(event);
  }

  return (
    <div className={styles.page} data-theme="light" id="top">
      <a className={styles.skipLink} href="#main-content">Skip to content</a>
      <Navigation activePath="/contact" overlay theme="light" />
      <main id="main-content" className={styles.main}>
        <section className={styles.hero} aria-labelledby="contact-title"><div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Free Business Review</p>
          <h1 id="contact-title">Tell us what should work better.</h1>
          <p className={styles.introduction}>Describe the process or problem. We&apos;ll review it and contact you to discuss the right first step.</p>
        </div></section>
        <section className={styles.contactSection} aria-label="Contact the Bizgenix team">
          <div className={styles.contactGrid}>
            <div className={styles.card}>
              <div className={styles.cardHeading}><h2>Send your requirement</h2><p>You do not need a technical brief. Tell us what is happening today.</p></div>
              <form id="contact-form" className={styles.form} onSubmit={submitForm}>
                <input type="hidden" name="source" value={source} />
                <div><label htmlFor="name">Name<span>*</span></label><input id="name" name="name" autoComplete="name" placeholder="Your Name" required maxLength={200} /></div>
                <div><label htmlFor="whatsapp">WhatsApp number<span>*</span></label><input id="whatsapp" type="tel" name="whatsapp" autoComplete="tel" inputMode="tel" placeholder="+91" required maxLength={30} /></div>
                <div><label htmlFor="contact-email">Email</label><input id="contact-email" type="email" name="email" autoComplete="email" placeholder="your@email.com" maxLength={254} /></div>
                <div><label htmlFor="company">Company</label><input id="company" name="company" autoComplete="organization" placeholder="Your Company Name" maxLength={200} /></div>
                <div><label htmlFor="query">What would you like help with?</label><div className={styles.selectWrap}><select id="query" name="queryType" defaultValue={interest}><option value="">Select an option</option>{queryTypes.map(query => <option key={query}>{query}</option>)}</select></div></div>
                <div><label htmlFor="message">What&apos;s happening today?<span>*</span></label><textarea id="message" name="message" placeholder="Describe what your team keeps chasing, repeating or struggling to see." required maxLength={4000} /></div>
                <button className={styles.sendButton} type="submit" disabled={state.submitting}>{state.submitting ? 'Sending...' : <>Send My Requirement <span aria-hidden="true">→</span></>}</button>
                <p className={styles.formHelp}>We use these details only to review and respond to your enquiry.</p>
                {state.succeeded && <p className={styles.formStatus} role="status">Thank you. Your requirement has been sent to the Bizgenix team.</p>}
                {(configurationError || state.errors) && <p className={styles.formStatus} role="alert">Your message was not sent. Your entries are still here; please try again or contact us by WhatsApp.</p>}
                <ValidationError errors={state.errors} className={styles.formStatus} />
              </form>
            </div>
            <div className={styles.sideCards}>
              <section className={styles.card} aria-labelledby="next-title"><div className={styles.cardHeading}><h2 id="next-title">Next Steps</h2><p>What happens after you submit the form?</p></div><ol className={styles.steps}>{nextSteps.map((step, index) => <li key={step.title}><span>{index + 1}</span><p><strong>{step.title}:</strong> {step.description}</p></li>)}</ol></section>
              <section className={styles.card} aria-labelledby="information-title">
                <div className={styles.cardHeading}><h2 id="information-title">Contact Information</h2><p>Get in touch with our team directly</p></div>
                <address className={styles.contactDetails}>
                  <div><span className={styles.pinIcon} aria-hidden="true" /><div><h3>Address</h3><p>G-13, Silver Radiance 2, Science City road, Ahmedabad, Gujarat, India</p></div></div>
                  <div><span className={styles.contactIcon} aria-hidden="true">✉</span><div><h3>Email</h3><a href={`mailto:${email}`}>{email}</a></div></div>
                  <div><span className={styles.contactIcon} aria-hidden="true">☎</span><div><h3>Phone</h3><a href="tel:+918780671906">{phone}</a></div></div>
                </address>
              </section>
            </div>
          </div>
          <section className={`${styles.card} ${styles.mapCard}`} aria-labelledby="location-title">
            <div className={styles.cardHeading}><h2 id="location-title">Our Location</h2><p>Visit Bizgenix AI Solutions Pvt Ltd in Ahmedabad</p></div>
            <iframe src="https://www.google.com/maps?q=Bizgenix+AI+Solutions+Pvt+Ltd,+G-13,+Silver+Radiance+2,+Ahmedabad&ll=23.0767474,72.5080332&z=17&hl=en&output=embed" title="Bizgenix AI Solutions Pvt Ltd — G-13, Silver Radiance 2, Ahmedabad" width="100%" height="300" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
            <a className={styles.mapLink} href="https://www.google.com/maps/place/Bizgenix+AI+Solutions+Pvt+Ltd/@23.0767474,72.5054583,17z/data=!3m1!4b1!4m6!3m5!1s0xb21a53f2c4da69d:0x5ba37ae89bf70d3d!8m2!3d23.0767474!4d72.5080332!16s%2Fg%2F11z38y6rxt?hl=en-US" target="_blank" rel="noopener noreferrer">View on Google Maps <span aria-hidden="true">→</span></a>
          </section>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
