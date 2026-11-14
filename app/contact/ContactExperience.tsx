'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { email, phone, queryTypes, productNames, intentTypes, productSlugs, enquiryPrompt, enquirySteps } from './content';
import styles from './page.module.css';
import SiteFooter from '../SiteFooter';
import Navigation from '../custom-solutions/Navigation';

export default function ContactExperience({ initialIntent = '', initialProduct = '' }: { initialIntent?: string; initialProduct?: string }) {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
  const formRef = useRef<HTMLFormElement>(null);
  const [configurationError, setConfigurationError] = useState(false);
  const [queryType, setQueryType] = useState(intentTypes[initialIntent] || '');
  const [product, setProduct] = useState(productSlugs[initialProduct] || '');
  const [draftOpened, setDraftOpened] = useState(false);
  const nextSteps = enquirySteps(queryType);
  const [state, handleSubmit] = useForm(formId || 'form-not-configured');

  useEffect(() => {
    if (state.succeeded) formRef.current?.reset();
  }, [state.succeeded]);

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    if (state.submitting) {
      event.preventDefault();
      return;
    }

    if (!formId) {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const body = ['Name: ' + data.get('name'), 'Email: ' + data.get('email'), 'Company: ' + (data.get('company') || ''), 'Enquiry: ' + queryType, ...(queryType === 'AI Product Demo' ? ['Product: ' + product] : []), '', String(data.get('message') || '')].join('\n');
      window.location.href = `mailto:${email}?subject=${encodeURIComponent('Bizgenix enquiry: ' + queryType)}&body=${encodeURIComponent(body)}`;
      setDraftOpened(true);
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
          <p className={styles.eyebrow}>Start the Conversation</p>
          <h1 id="contact-title">Let’s discuss your business need</h1>
          <p className={styles.introduction}>Choose a custom AI solution, a product demo or corporate AI training. Tell us what needs to change in your business.</p>
        </div></section>
        <section className={styles.contactSection} aria-label="Contact the Bizgenix team">
          <div className={styles.contactGrid}>
            <div className={styles.card}>
              <div className={styles.cardHeading}><h2>Tell us what you need</h2><p>Share a short brief so our team can prepare a relevant conversation.
</p></div>
              <form ref={formRef} id="contact-form" className={styles.form} onSubmit={submitForm}>
                <div><label htmlFor="name">Name<span>*</span></label><input id="name" name="name" autoComplete="name" placeholder="Your Name" required maxLength={200} /></div>
                <div><label htmlFor="contact-email">Email<span>*</span></label><input id="contact-email" type="email" name="email" autoComplete="email" placeholder="your@email.com" required maxLength={254} /></div>
                <div><label htmlFor="company">Company</label><input id="company" name="company" autoComplete="organization" placeholder="Your Company Name" maxLength={200} /></div>
                <div><label htmlFor="query">I’m interested in<span>*</span></label><div className={styles.selectWrap}><select id="query" name="queryType" value={queryType} onChange={event => { setQueryType(event.target.value); setDraftOpened(false); }} required><option value="">Select query type</option>{queryTypes.map(query => <option key={query}>{query}</option>)}</select></div></div>
                {queryType === 'AI Product Demo' && <div><label htmlFor="product">Product<span>*</span></label><div className={styles.selectWrap}><select id="product" name="product" required value={product} onChange={event => setProduct(event.target.value)}><option value="">Select a product</option>{productNames.map(name => <option key={name}>{name}</option>)}</select></div></div>}
                <div><label htmlFor="message">Your brief<span>*</span></label><textarea id="message" name="message" placeholder={enquiryPrompt(queryType)} aria-describedby="brief-help" required maxLength={4000} /></div>
                <p id="brief-help" className={styles.formHelp}>{enquiryPrompt(queryType)}</p>
                <button className={styles.sendButton} type="submit" disabled={state.submitting}>{state.submitting ? 'Sending...' : <>{formId ? 'Send Enquiry' : 'Prepare Email Enquiry'} <span aria-hidden="true">→</span></>}</button>
                <p className={styles.formHelp}>{formId ? 'Our team will review your enquiry and contact you about the next step.' : 'This opens a draft in your email app. Review it and press Send there to contact our team.'}</p>
                {draftOpened && <p className={styles.formStatus} role="status">Your email app was requested to open. This website has not sent your enquiry. If no draft opened, email <a href={`mailto:${email}`}>{email}</a> directly.</p>}
                <p className={styles.formHelp}>Prefer a conversation? <a href="https://wa.me/918780671906" target="_blank" rel="noopener noreferrer">Message the business on WhatsApp</a> or <a href="tel:+918780671906">call {phone}</a>.</p>
                {state.succeeded && <p className={styles.formStatus} role="status">Thank you! Your message has been sent successfully.</p>}
                {(configurationError || state.errors) && <p className={styles.formStatus} role="alert">Your enquiry could not be sent. Please try again or email info@bizgenix.ai. Your brief remains in this form.</p>}
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
