'use client';

import { useForm, ValidationError } from '@formspree/react';
import type { FormEvent } from 'react';
import styles from './LaunchHome.module.css';

export default function HomeEnquiry() {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
  const [state, handleSubmit] = useForm(formId || 'form-not-configured');
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    if (!formId) { event.preventDefault(); return; }
    await handleSubmit(event);
  };
  return <form className={styles.enquiryForm} onSubmit={submit}>
    <input type="hidden" name="source" value="Homepage enquiry block" />
    <label>Name *<input name="name" autoComplete="name" required maxLength={200} /></label>
    <label>WhatsApp number *<input name="whatsapp" type="tel" autoComplete="tel" required inputMode="tel" maxLength={30} /></label>
    <label>What should work better? *<textarea name="message" required maxLength={4000} rows={4} /></label>
    <button type="submit" disabled={state.submitting}>{state.submitting ? 'Sending…' : 'Send My Requirement'}</button>
    {state.succeeded && <p role="status">Thank you. Your requirement has been sent to the Bizgenix team.</p>}
    {!formId && <p role="alert">The enquiry form is temporarily unavailable. Please use WhatsApp.</p>}
    {state.errors && <p role="alert">Your message was not sent. Your entries are still here; please try again or use WhatsApp.</p>}
    <ValidationError errors={state.errors} />
  </form>;
}
