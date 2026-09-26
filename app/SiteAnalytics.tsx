'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

function eventName(target: HTMLElement) {
  const anchor = target.closest<HTMLAnchorElement>('a');
  if (!anchor) return null;
  if (anchor.dataset.analyticsEvent) return anchor.dataset.analyticsEvent;
  const href = anchor.getAttribute('href') ?? '';
  if (href.startsWith('https://wa.me/') || href.includes('whatsapp')) return 'whatsapp_click';
  if (href.startsWith('tel:')) return 'phone_click';
  if (/demo/i.test(anchor.textContent ?? '')) return 'demo_click';
  if (href.includes('rzp.io')) return 'course_pay_click';
  return null;
}

export default function SiteAnalytics() {
  useEffect(() => {
    const send = (name: string, details: Record<string, string> = {}) => {
      window.gtag?.('event', name, details);
      window.clarity?.('event', name);
    };
    const click = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      const name = eventName(target);
      if (name) send(name, { page_path: window.location.pathname });
    };
    const submit = (event: SubmitEvent) => {
      const form = event.target;
      if (form instanceof HTMLFormElement) send('form_submit', { form_id: form.id || 'contact-form', page_path: window.location.pathname });
    };
    document.addEventListener('click', click);
    document.addEventListener('submit', submit);
    return () => {
      document.removeEventListener('click', click);
      document.removeEventListener('submit', submit);
    };
  }, []);
  return null;
}
