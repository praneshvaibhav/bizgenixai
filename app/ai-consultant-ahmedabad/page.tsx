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
  h1: 'AI consulting and custom AI solutions in Ahmedabad.',
  lead: 'Bizgenix AI helps business owners in Ahmedabad assess AI use cases, choose suitable products or custom solutions, and train their teams. Led by founder Umang Ratani, our team works from Science City Road, Sola, with scope, data access and acceptance criteria agreed before implementation.',
  primaryCta: 'Book a first conversation',
  whatTitle: 'What we do for Ahmedabad businesses.',
  whatIntro: 'Consulting, building and training from one team, led by Dr. CA Umang Ratani.',
  items: [
    { title: 'AI consulting', text: 'A use-case assessment, data-readiness review and phased plan with agreed acceptance criteria. Timing depends on scope and integration requirements.' },
    { title: 'AI automation', text: 'WhatsApp workflows, reminders, document checking, email triage and reporting on the tools you already use.' },
    { title: 'Custom AI solutions', text: 'AI applications, CRM, ERP and business intelligence built around your process.' },
    { title: 'Ready products', text: 'Growth Intelligence for Tally data, Bizgenix AI CRM, Voice AI, BizChat and ScaleOS.' },
    { title: 'Corporate AI training', text: 'In-house workshops for your team and the Scale With AI programme for business owners.' },
    { title: 'Meet in person', text: 'G-13, Silver Radiance-2, Science City Road, Sola, Ahmedabad 380060. We also work remotely with businesses across India.' },
  ],
  extra: {
    title: 'Choose the right starting point.',
    intro: 'Start with the business problem and the people who will use the result.',
    items: [
      { title: 'You know the problem, but not the solution', text: 'Start with consulting. Bring one workflow, the current tools and the decision or task you want to improve. We assess whether AI is appropriate before selecting technology.' },
      { title: 'You need a defined business workflow', text: 'Evaluate a product demo against your requirements, data and integration prerequisites. Growth Intelligence, CRM, Voice AI, BizChat and ScaleOS serve different needs; availability is confirmed during scoping.' },
      { title: 'Your team needs practical AI skills', text: 'Discuss participant roles, experience, approved tools and delivery preferences. Plan exercises around real tasks using safe sample data, then agree how adoption will be reviewed.' },
    ],
  },
  proofTitle: 'Published work.',
  proofIntro: 'Explore published project descriptions relevant to your workflow. Confirm the scope and supporting evidence in your discussion with the team.',
  proof: [
    { label: 'Bhaskar Silk Mills, Surat: textile operations and reporting', slug: 'bhaskar-silk-mills' },
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
    { q: 'How do I choose an AI solutions company in Ahmedabad?', a: 'Ask for a relevant workflow demonstration, data and integration requirements, human review controls, acceptance criteria and an ongoing support plan. Compare the complete scope, not only a tool licence or a promised result.' },
    { q: 'What should I bring to an AI consulting meeting?', a: 'Bring your business objective, one current workflow, the tools involved, approximate team size and your target timeline. Begin with anonymised examples; agree access before sharing confidential records.' },
    { q: 'How much will an AI solution cost?', a: 'Cost depends on scope, data preparation, integrations, usage and support. A scoped proposal follows the requirements discussion. We do not quote a universal price or guaranteed return for every workflow.' },
    { q: 'Where is Bizgenix AI located in Ahmedabad?', a: 'G-13, Silver Radiance-2, Science City Road, Sola, Ahmedabad, Gujarat 380060.' },
    { q: 'What does an AI consultant do for a business?', a: 'An AI consultant identifies where AI will pay back, checks whether the data and processes are ready, chooses between buying and building, and guides implementation until the system is in daily use.' },
    { q: 'Who leads the work?', a: 'Dr. CA Umang Ratani, founder of Bizgenix AI and a Chartered Accountant, with the Bizgenix team delivering the build.' },
    { q: 'Which industries do you work with?', a: 'Our published work covers textile manufacturing, real estate and construction, dyes and chemicals, interiors, franchise operations and professional services.' },
    { q: 'Do you only work in Ahmedabad?', a: 'No. Our office is in Ahmedabad and we work with businesses across India, in person and remotely.' },
    { q: 'Do you run AI workshops for teams in Ahmedabad?', a: 'Yes. In-house corporate AI workshops are run for teams, and the Scale With AI programme is for business owners.' },
  ],
  related: [
    { label: 'Compare products and custom development', href: '/blog/custom-ai-vs-ready-made-software' },
    { label: 'Training for CA and accounting firms', href: '/guides/ai-training-for-ca-accounting-firms' },
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
