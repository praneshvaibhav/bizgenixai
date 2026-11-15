import type { Metadata } from 'next';
import { pageMeta } from '../seo';
import ServicePage, { type ServiceContent } from '../services/ServicePage';

const title = 'AI Consulting Services for Business Owners | Bizgenix AI';
const description = 'AI consulting in Ahmedabad and across India with Dr CA Umang Ratani and Bizgenix AI: assess use cases, compare products and custom builds, and plan implementation.';

export const metadata: Metadata = pageMeta({ title, description, path: '/ai-consulting' });

const content: ServiceContent = {
  path: '/ai-consulting',
  eyebrow: 'AI Consulting',
  serviceType: 'AI consulting services',
  h1: 'AI consulting for business owners, led by Dr CA Umang Ratani.',
  lead: 'Bizgenix AI provides AI consulting, custom AI solutions and team training for businesses in India. Founder Dr CA Umang Ratani and the Bizgenix team help you define a useful workflow, assess data and integration requirements, and choose a product, a custom build or a focused pilot.',
  primaryCta: 'Book a first conversation',
  whatTitle: 'What the engagement covers.',
  whatIntro: 'AI strategy and AI implementation for owner-led Indian businesses, led by Dr. CA Umang Ratani and delivered by the Bizgenix team.',
  items: [
    { title: 'Use-case assessment', text: 'We sort your tasks into what AI should do, what people should keep, and what is not worth touching yet.' },
    { title: 'Data readiness', text: 'Money, customers, products and knowledge: the four registers are cleaned before anything is built on them.' },
    { title: 'A phased implementation plan', text: 'Agree a pilot, acceptance criteria and a responsible owner before committing to a wider rollout. Timing depends on scope, data readiness and integrations.' },
    { title: 'Build or buy decisions', text: 'An independent view on whether a ready product, a custom build or no software at all is the right answer.' },
    { title: 'Vendor evaluation', text: 'One question for every AI vendor: show the smallest real outcome, with evidence, before the larger order.' },
    { title: 'Team adoption', text: 'The conversation with your team happens before the tools arrive, so the people who will use AI help shape it.' },
  ],
  proofTitle: 'What this looks like when it is built.',
  proofIntro: 'Explore our published project descriptions to understand the kinds of workflows the team works on. Confirm the relevant scope and evidence during your discussion.',
  proof: [
    { label: 'Textile operations and reporting', slug: 'bhaskar-silk-mills' },
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
    { q: 'Who leads AI consulting at Bizgenix?', a: 'Dr CA Umang Ratani is the founder of Bizgenix AI. Founder-led business assessment connects with the team delivering custom solutions, products and practical AI training.' },
    { q: 'How much does AI consulting cost?', a: 'Fees depend on the assessment, workflow, integrations, delivery scope and ongoing support. Share your current process and desired outcome for a scoped proposal; there is no single price for every project.' },
    { q: 'Should we buy an AI product or build a custom solution?', a: 'Evaluate a product when its workflow fits your requirements. Consider custom development when essential integrations, processes or controls need adaptation. Compare implementation, maintenance and human review as well as licence fees.' },
    { q: 'What should we prepare for the first conversation?', a: 'Bring one workflow, your current tools, the people who use it, the problem to resolve and your target timeline. Use anonymised examples initially and agree a secure process before sharing confidential records.' },
    { q: 'What does an AI consultant do?', a: 'An AI consultant identifies where AI will pay back in a business, checks whether the data and processes are ready, chooses between buying and building, and guides implementation until the system is in daily use.' },
    { q: 'How is this different from buying an AI tool?', a: 'A tool solves one task for everyone. Consulting starts from your business: which task matters most, what data it needs and who will own it. Sometimes the answer is a tool you already pay for.' },
    { q: 'Do we need clean data before we start?', a: 'Not before we start, but before anything is built. Data readiness is part of the engagement, and it is usually where the first results come from.' },
    { q: 'How long before we see something working?', a: 'Timing is agreed after reviewing the workflow, access, data and integration dependencies. Start with a bounded pilot and an acceptance test; a fixed delivery date is not promised before scoping.' },
    { q: 'Do you work with businesses outside Ahmedabad?', a: 'Yes. Our office is in Ahmedabad and we work with businesses across India, in person and remotely.' },
    { q: 'Can you train our team as part of the engagement?', a: 'Yes. Corporate AI workshops and the Scale With AI programme run alongside consulting when the team needs them.' },
  ],
  related: [
    { label: 'Guide: AI product or custom solution?', href: '/blog/custom-ai-vs-ready-made-software' },
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
