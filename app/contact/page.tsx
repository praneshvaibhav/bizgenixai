import type { Metadata } from 'next';
import ContactExperience from './ContactExperience';

import { pageMeta } from '../seo';
const title = 'Contact Bizgenix AI | AI Consulting & Automation, Ahmedabad';
const description = 'Talk to Bizgenix AI about AI consulting, automation or custom software. Office on Science City Road, Ahmedabad. Call or WhatsApp +91 87806 71906.';
export const metadata: Metadata = pageMeta({ title, description, path: '/contact' });

export default async function ContactPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams;
  const intent = typeof params.intent === 'string' ? params.intent : '';
  const product = typeof params.product === 'string' ? params.product : '';
  return <ContactExperience key={`${intent}:${product}`} initialIntent={intent} initialProduct={product} />;
}
