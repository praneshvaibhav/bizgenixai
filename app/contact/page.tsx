import type { Metadata } from 'next';
import ContactExperience from './ContactExperience';

const title = 'Contact Us | Bizgenix AI';
const description = 'Connect with the Bizgenix team to discuss your AI, automation and custom software needs.';
export const metadata: Metadata = { title, description, openGraph: { title, description, type: 'website' }, twitter: { card: 'summary', title, description } };

export default function ContactPage() {
  return <ContactExperience />;
}
