'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';

import { email, phone, queryTypes, productNames, intentTypes, productSlugs, enquiryPrompt, enquirySteps } from './content';
import styles from './page.module.css';
import SiteFooter from '../SiteFooter';
import Navigation from '../custom-solutions/Navigation';

export default function ContactExperience({ initialIntent = '', initialProduct = '' }: { initialIntent?: string; initialProduct?: string }) {

  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [receipt, setReceipt] = useState('');
  const idRef = useRef('');
  const started = useRef(false);
  const attribution = useRef<Record<string,string>>({});
  const [queryType, setQueryType] = useState(intentTypes[initialIntent] || '');
  const [product, setProduct] = useState(productSlugs[initialProduct] || '');

  const nextSteps = enquirySteps(queryType);
  function track(event: string) {
    void fetch('/api/metrics', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({event,segment:queryType,product,...attribution.current}), keepalive:true}).catch(() => {});
  }
  useEffect(() => {
    idRef.current = crypto.randomUUID();
    const params=new URLSearchParams(window.location.search);
    const source=params.get('utm_source') || (document.referrer ? new URL(document.referrer).hostname : 'direct');
    let saved:Record<string,string>={};try{saved=JSON.parse(sessionStorage.getItem('bizgenix-attribution')||'{}');}catch{}
    attribution.current=params.has('utm_source')?{source,medium:params.get('utm_medium')||'',campaign:params.get('utm_campaign')||''}:{source:saved.source||source,medium:saved.medium||'',campaign:saved.campaign||''};
    void fetch('/api/metrics',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({event:'contact_view',segment:intentTypes[initialIntent]||'',product:productSlugs[initialProduct]||'',...attribution.current}),keepalive:true}).catch(()=>{});
  }, [initialIntent, initialProduct]);
  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if(submitting||receipt)return;
    setSubmitting(true);setError('');
    const data=Object.fromEntries(new FormData(event.currentTarget));
    try {
      const response=await fetch('/api/enquiries',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...data,id:idRef.current,...attribution.current})});
      const result=await response.json();
      if(!response.ok||!result.accepted)throw new Error(result.error||'Unable to save your enquiry.');
      setReceipt(result.id);
    } catch(e) {setError(e instanceof Error?e.message:'Unable to save your enquiry.');track('enquiry_error');}
    finally{setSubmitting(false);}
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
              <form ref={formRef} id="contact-form" className={styles.form} onSubmit={submitForm} onFocus={() => {if(!started.current){started.current=true;track('form_start');}}}>
                <div><label htmlFor="name">Name<span>*</span></label><input id="name" name="name" autoComplete="name" placeholder="Your Name" required maxLength={200} /></div>
                <div><label htmlFor="contact-email">Email<span>*</span></label><input id="contact-email" type="email" name="email" autoComplete="email" placeholder="your@email.com" required maxLength={254} /></div>
                <div><label htmlFor="company">Company</label><input id="company" name="company" autoComplete="organization" placeholder="Your Company Name" maxLength={200} /></div>
                <div><label htmlFor="query">I’m interested in<span>*</span></label><div className={styles.selectWrap}><select id="query" name="queryType" value={queryType} onChange={event => { setQueryType(event.target.value);  }} required><option value="">Select query type</option>{queryTypes.map(query => <option key={query}>{query}</option>)}</select></div></div>
                {queryType === 'AI Product Demo' && <div><label htmlFor="product">Product<span>*</span></label><div className={styles.selectWrap}><select id="product" name="product" required value={product} onChange={event => setProduct(event.target.value)}><option value="">Select a product</option>{productNames.map(name => <option key={name}>{name}</option>)}</select></div></div>}
                <div><label htmlFor="message">Your brief<span>*</span></label><textarea id="message" name="message" placeholder={enquiryPrompt(queryType)} aria-describedby="brief-help" required minLength={15} maxLength={4000} /></div>
                <p id="brief-help" className={styles.formHelp}>{enquiryPrompt(queryType)}</p>
                <div aria-hidden="true" style={{position:'absolute',left:'-10000px'}}><label htmlFor="website">Leave this empty</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
                <button className={styles.sendButton} type="submit" disabled={submitting || Boolean(receipt)}>{submitting ? 'Saving enquiry…' : receipt ? 'Enquiry received' : <>Send Enquiry <span aria-hidden="true">→</span></>}</button>
                <p className={styles.formHelp}>Your brief is saved securely and sent to our business team. By submitting, you ask Bizgenix to contact you about this enquiry. <a href="/privacy-policy">Privacy policy</a></p>
                {receipt && <p className={styles.formStatus} role="status">Your enquiry has been received. Reference: {receipt}. Our team will review your brief and contact you about the next step.</p>}
                {error && <p className={styles.formStatus} role="alert">{error} You can also email <a href={`mailto:${email}`} onClick={()=>track('email_click')}>{email}</a>.</p>}
                <p className={styles.formHelp}>Prefer a conversation? <a href="https://wa.me/918780671906" target="_blank" rel="noopener noreferrer" onClick={()=>track('whatsapp_click')}>Message the business on WhatsApp</a>, <a href="tel:+918780671906" onClick={()=>track('phone_click')}>call {phone}</a> or <a href={`mailto:${email}`} onClick={()=>track('email_click')}>email us</a>.</p>
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
