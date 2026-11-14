import type { Metadata } from 'next';
import { pageMeta } from '../seo';
import ServicePage, { type ServiceContent } from '../services/ServicePage';

const title = 'AI Consultant in Ahmedabad | Bizgenix AI Consulting & Automation';
const description = 'Bizgenix AI is an AI consulting and AI development company on Science City Road, Ahmedabad. AI strategy, automation, custom AI systems and team training.';

export const metadata: Metadata = pageMeta({ title, description, path: '/ai-consultant-ahmedabad' });

const content: ServiceContent = {
  path: '/ai-consultant-ahmedabad',
  eyebrow: 'AI Consultant in Ahmedabad',
  serviceType: 'AI consulting and AI implementation',
  areaServedCity: 'Ahmedabad',
  h1: 'An AI consultant in Ahmedabad who also builds the system.',
  lead: 'Bizgenix AI works from Science City Road, Sola. Business owners in Ahmedabad and across Gujarat come to us to find where AI pays back in their business, and to have it built, tested on their own data and handed over to their team.',
  primaryCta: 'Book a first conversation',
  whatTitle: 'What we do for Ahmedabad businesses.',
  whatIntro: 'Consulting, building and training from one team, led by Dr. CA Umang Ratani.',
  items: [
    { title: 'AI consulting', text: 'A use-case assessment, a check on data readiness and a 90-day plan with pass or fail gates.' },
    { title: 'AI automation', text: 'WhatsApp workflows, reminders, document checking, email triage and reporting on the tools you already use.' },
    { title: 'Custom AI solutions', text: 'AI applications, CRM, ERP and business intelligence built around your process.' },
    { title: 'Ready products', text: 'Growth Intelligence for Tally data, Bizgenix AI CRM, Voice AI, BizChat and ScaleOS.' },
    { title: 'Corporate AI training', text: 'In-house workshops for your team and the Scale With AI programme for business owners.' },
    { title: 'Meet in person', text: 'G-13, Silver Radiance-2, Science City Road, Sola, Ahmedabad 380060. We also work remotely with businesses across India.' },
  ],
  proofTitle: 'Published work.',
  proofIntro: 'Case studies from our published implementations, including a 140-user silk mill in Surat.',
  proof: [
    { label: 'Bhaskar Silk Mills, Surat: one operating system replacing 80+ spreadsheets', slug: 'bhaskar-silk-mills' },
    { label: 'Una Homes: AI-powered RA bill verification', slug: 'una-homes' },
    { label: 'Spectrum Dyes & Chemicals: a knowledge copilot with source-backed answers', slug: 'spectrum-dyes' },
    { label: 'Just Roofing Solutions: ERP operations and analytics system', slug: 'just-roofing' },
    { label: 'All 18 implementations', href: '/case-studies' },
  ],
  processTitle: 'How it starts.',
  steps: [
    { title: 'A first conversation', text: 'At our office or on a call. You describe where time, cash or visibility is being lost.' },
    { title: 'Assessment and plan', text: 'We map the use cases, check the data they depend on and agree the first task, its owner and its test.' },
    { title: 'Prototype, then build', text: 'You see it working on your own data before the full build.' },
  ],
  faqs: [
    { q: 'Where is Bizgenix AI located in Ahmedabad?', a: 'G-13, Silver Radiance-2, Science City Road, Sola, Ahmedabad, Gujarat 380060.' },
    { q: 'What does an AI consultant do for a business?', a: 'An AI consultant identifies where AI will pay back, checks whether the data and processes are ready, chooses between buying and building, and guides implementation until the system is in daily use.' },
    { q: 'Who leads the work?', a: 'Dr. CA Umang Ratani, founder of Bizgenix AI and a Chartered Accountant, with the Bizgenix team delivering the build.' },
    { q: 'Which industries do you work with?', a: 'Our published work covers textile manufacturing, real estate and construction, dyes and chemicals, interiors, franchise operations and professional services.' },
    { q: 'Do you only work in Ahmedabad?', a: 'No. Our office is in Ahmedabad and we work with businesses across India, in person and remotely.' },
    { q: 'Do you run AI workshops for teams in Ahmedabad?', a: 'Yes. In-house corporate AI workshops are run for teams, and the Scale With AI programme is for business owners.' },
  ],
  related: [
    { label: 'AI consulting', href: '/ai-consulting' },
    { label: 'AI automation', href: '/ai-automation' },
    { label: 'AI training and workshops', href: '/courses' },
    { label: 'About Bizgenix AI', href: '/about' },
    { label: 'Contact and directions', href: '/contact' },
  ],
};

export default function AiConsultantAhmedabadPage() {
  return <ServicePage content={content} />;
}
