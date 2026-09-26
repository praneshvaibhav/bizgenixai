import type { Metadata } from 'next';
import ContactExperience from './ContactExperience';

const title = 'Contact Us | Bizgenix AI';
const description = 'Connect with the Bizgenix team to discuss your AI, automation and custom software needs.';
export const metadata: Metadata = { title, description, alternates: { canonical: '/contact' }, openGraph: { title, description, type: 'website', images: ['/og.png'] }, twitter: { card: 'summary_large_image', title, description, images: ['/og.png'] } };

export default function ContactPage() {
  return <ContactExperience />;
}
