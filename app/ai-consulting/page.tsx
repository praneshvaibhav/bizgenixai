import type { Metadata } from 'next';
import { pageMeta } from '../seo';
import ServicePage, { type ServiceContent } from '../services/ServicePage';

const title = 'AI Consulting Services for Business Owners | Bizgenix AI';
const description = 'AI consulting company in Ahmedabad. Bizgenix AI finds where AI pays back in your business, gets your data ready and builds it in 90 days with pass/fail gates.';

export const metadata: Metadata = pageMeta({ title, description, path: '/ai-consulting' });

const content: ServiceContent = {
  path: '/ai-consulting',
  eyebrow: 'AI Consulting',
  serviceType: 'AI consulting services',
  h1: 'AI consulting that ends in a working system, not a report.',
  lead: 'Owners come to us after one of two experiences: they tried AI tools and nothing stuck, or a vendor quoted for something they could not evaluate. As your AI consultant, Bizgenix AI starts by finding the one place AI pays back first, and stays until it is running.',
  primaryCta: 'Book a first conversation',
  whatTitle: 'What the engagement covers.',
  whatIntro: 'AI strategy and AI implementation for owner-led Indian businesses, led by Dr. CA Umang Ratani and delivered by the Bizgenix team.',
  items: [
    { title: 'Use-case assessment', text: 'We sort your tasks into what AI should do, what people should keep, and what is not worth touching yet.' },
    { title: 'Data readiness', text: 'Money, customers, products and knowledge: the four registers are cleaned before anything is built on them.' },
    { title: 'A 90-day plan with gates', text: 'Proof in the first month, a system in the second, handover in the third. Each gate has a pass or fail test.' },
    { title: 'Build or buy decisions', text: 'An independent view on whether a ready product, a custom build or no software at all is the right answer.' },
    { title: 'Vendor evaluation', text: 'One question for every AI vendor: show the smallest real outcome, with evidence, before the larger order.' },
    { title: 'Team adoption', text: 'The conversation with your team happens before the tools arrive, so the people who will use AI help shape it.' },
  ],
  proofTitle: 'What this looks like when it is built.',
  proofIntro: 'Consulting leads to implementation. These published case studies began with the same assessment.',
  proof: [
    { label: 'One operating system replacing 80+ spreadsheets', slug: 'bhaskar-silk-mills' },
    { label: 'AI-powered RA bill verification', slug: 'una-homes' },
    { label: 'A knowledge copilot with source-backed answers', slug: 'spectrum-dyes' },
    { label: 'Franchise operations control system', slug: 'waffle-castle' },
    { label: 'ERP operations and analytics system', slug: 'just-roofing' },
    { label: 'One system for the whole business', slug: 'sanjay-jain-scaleos' },
  ],
  processTitle: 'How we work with you.',
  steps: [
    { title: 'A first conversation', text: 'You describe where time, cash or visibility is being lost. We tell you plainly whether AI is the right tool for it.' },
    { title: 'Assessment and plan', text: 'We map the use cases, check the data they depend on and agree the first task, its owner and its test.' },
    { title: 'Prototype, then build', text: 'You see it working on your own data before the full build. The plan is revised from what the prototype shows.' },
  ],
  faqs: [
    { q: 'What does an AI consultant do?', a: 'An AI consultant identifies where AI will pay back in a business, checks whether the data and processes are ready, chooses between buying and building, and guides implementation until the system is in daily use.' },
    { q: 'How is this different from buying an AI tool?', a: 'A tool solves one task for everyone. Consulting starts from your business: which task matters most, what data it needs and who will own it. Sometimes the answer is a tool you already pay for.' },
    { q: 'Do we need clean data before we start?', a: 'Not before we start, but before anything is built. Data readiness is part of the engagement, and it is usually where the first results come from.' },
    { q: 'How long before we see something working?', a: 'The plan is built around a proof in the first month: one real task, done by AI, with evidence. The larger system follows only after that gate is passed.' },
    { q: 'Do you work with businesses outside Ahmedabad?', a: 'Yes. Our office is in Ahmedabad and we work with businesses across India, in person and remotely.' },
    { q: 'Can you train our team as part of the engagement?', a: 'Yes. Corporate AI workshops and the Scale With AI programme run alongside consulting when the team needs them.' },
  ],
  related: [
    { label: 'AI automation', href: '/ai-automation' },
    { label: 'Custom AI solutions', href: '/custom-solutions' },
    { label: 'AI training and workshops', href: '/courses' },
    { label: 'Read: The 90-day AI implementation plan', href: '/blog/90-day-ai-implementation-plan' },
    { label: 'Read: What AI can and cannot do', href: '/blog/what-ai-can-and-cannot-do-4r-framework' },
  ],
};

export default function AiConsultingPage() {
  return <ServicePage content={content} />;
}
