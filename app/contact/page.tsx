import type { Metadata } from 'next';
import ContactExperience from './ContactExperience';

import { pageMeta } from '../seo';
const title = 'Contact Bizgenix AI | AI Consulting & Automation, Ahmedabad';
const description = 'Talk to Bizgenix AI about AI consulting, automation or custom software. Office on Science City Road, Ahmedabad. Call or WhatsApp +91 87806 71906.';
export const metadata: Metadata = pageMeta({ title, description, path: '/contact' });

export default function ContactPage() {
  return <ContactExperience />;
}
