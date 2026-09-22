'use client';

import { useState, type FormEvent } from 'react';
import { email, nextSteps, phone, queryTypes } from './content';
import styles from './page.module.css';
import SiteFooter from '../SiteFooter';
import Navigation from '../custom-solutions/Navigation';

export default function ContactExperience() {
  const [light, setLight] = useState(false);
  const [emailOpened, setEmailOpened] = useState(false);

  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (name: string) => String(data.get(name) ?? '').trim();
    const subject = `Website enquiry: ${value('projectType') || 'General enquiry'}`;
    const body = [`Name: ${value('firstName')} ${value('lastName')}`, `Email: ${value('email')}`, `Company: ${value('company') || 'Not provided'}`, `Query: ${value('projectType') || 'General enquiry'}`, '', value('message')].join('\n');
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setEmailOpened(true);
  }

  return (
    <div className={styles.page} data-theme={light ? 'light' : 'dark'} id="top">
      <a className={styles.skipLink} href="#main-content">Skip to content</a>
      <Navigation activePath="/contact" overlay light={light} onThemeToggle={() => setLight(value => !value)} />
      <main id="main-content" className={styles.main}>
        <section className={styles.hero} aria-labelledby="contact-title"><div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Start the Conversation</p>
          <h1 id="contact-title">Your AI Journey Starts Here</h1>
          <p className={styles.introduction}>Connect with our AI experts to explore your challenges, discover the right solutions, and turn your ideas into real-world AI applications.</p>
        </div></section>
        <section className={styles.contactSection} aria-label="Contact the Bizgenix team">
          <div className={styles.contactGrid}>
            <div className={styles.card}>
              <div className={styles.cardHeading}><h2>Begin Your Journey</h2><p>Ready to transform your business with AI ? Let&apos;s discuss your goals, challenges, and the right AI solution for your business.
</p></div>
              <form className={styles.form} onSubmit={sendMessage}>
                <div className={styles.nameRow}>
                  <div><label htmlFor="first-name">First Name<span>*</span></label><input id="first-name" name="firstName" autoComplete="given-name" placeholder="Your First Name" required maxLength={100} /></div>
                  <div><label htmlFor="last-name">Last Name<span>*</span></label><input id="last-name" name="lastName" autoComplete="family-name" placeholder="Your Last Name" required maxLength={100} /></div>
                </div>
                <div><label htmlFor="contact-email">Email<span>*</span></label><input id="contact-email" type="email" name="email" autoComplete="email" placeholder="your@email.com" required maxLength={254} /></div>
                <div><label htmlFor="company">Company</label><input id="company" name="company" autoComplete="organization" placeholder="Your Company Name" maxLength={200} /></div>
                <div><label htmlFor="query">Query</label><div className={styles.selectWrap}><select id="query" name="projectType" defaultValue=""><option value="">Select query type</option>{queryTypes.map(query => <option key={query}>{query}</option>)}</select></div></div>
                <div><label htmlFor="message">Message<span>*</span></label><textarea id="message" name="message" placeholder="Tell us about your project requirements, timeline, and any specific needs..." required maxLength={4000} /></div>
                <button className={styles.sendButton} type="submit" aria-describedby="email-help">Send Message <span aria-hidden="true">→</span></button>
                <p id="email-help" className={styles.formHelp}>Opens your email app with your message ready to send.</p>
                {emailOpened && <p className={styles.formStatus} role="status">Finish sending in your email app. If it did not open, email us directly at <a href={`mailto:${email}`}>{email}</a>. Your message has not been sent by this website.</p>}
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
