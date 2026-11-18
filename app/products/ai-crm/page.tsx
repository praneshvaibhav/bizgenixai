import type { Metadata } from 'next';
import { pageMeta } from '../../seo';
import ServicePage, { type ServiceContent } from '../../services/ServicePage';

const title = 'AI CRM Software for Indian Sales Teams | Bizgenix AI CRM';
const description = 'Evaluate Bizgenix AI CRM for lead ownership, sales stages and follow-up. Confirm supported lead sources, WhatsApp setup and pilot requirements in a demo.';

export const metadata: Metadata = pageMeta({ title, description, path: '/products/ai-crm' });

const content: ServiceContent = {
  path: '/products/ai-crm',
  eyebrow: 'Bizgenix AI CRM',
  serviceType: 'Bizgenix AI CRM',
  schemaType: 'SoftwareApplication',
  parent: { name: 'Products', href: '/products' },
  h1: 'AI CRM for lead ownership, sales stages and follow-up.',
  lead: 'Leads arrive from ads, IndiaMART, Justdial, WhatsApp and email. Bizgenix AI CRM brings them into one workspace, scores them, assigns an owner and keeps the next action visible, so enquiries stop slipping between people and spreadsheets.',
  primaryCta: 'Book a free CRM demo',
  secondaryCta: { label: 'Open Bizgenix AI CRM', href: 'https://crm.bizgenix.ai/' },
  whatTitle: 'What the CRM does.',
  whatIntro: 'Lead management, sales pipeline and follow-up in one place, with AI doing the parts that get skipped when the team is busy.',
  items: [
    { title: 'Lead capture from every source', text: 'Facebook and Instagram ad leads, IndiaMART and Justdial enquiries, and enquiry emails read by AI arrive in the CRM without copy-paste.' },
    { title: 'Lead scoring and assignment', text: 'Each new lead is checked for duplicates, scored Hot, Warm or Cold, and assigned to a salesperson, so the team knows whom to call first.' },
    { title: 'Sales pipeline and follow-ups', text: 'See every opportunity by stage. Callbacks and next actions stay visible to the whole team, not in one person’s notebook.' },
    { title: 'WhatsApp CRM', text: 'A shared WhatsApp inbox, campaigns, product catalogue and orders, where the WhatsApp integration is enabled for your account.' },
    { title: 'AI calling', text: 'AI voice agents can call new leads or send payment reminders and log the outcome, where enabled in your setup.' },
    { title: 'Invoices and agreements', text: 'GST-ready proforma and tax invoices with a payment link, and service agreements signed electronically, tracked alongside the deal.' },
  ],
  extra: {
    title: 'Set up around how you sell.',
    intro: 'Example stage flows by industry. Your own stages, fields and rules are configured to your process during setup.',
    items: [
      { title: 'Real estate', text: 'Property enquiry → Qualification → Site visit → Follow-up.' },
      { title: 'B2B services', text: 'Client enquiry → Discovery call → Proposal → Decision.' },
      { title: 'Education and training', text: 'Admission enquiry → Counselling → Follow-up → Admission.' },
      { title: 'Manufacturing and distribution', text: 'Dealer enquiry → Quotation → Follow-up → Order.' },
      { title: 'Team and access', text: 'Each member’s role, department and login access managed in one place.' },
      { title: 'Reports', text: 'Reports on leads, AI calls and team performance, so reviews start from the same numbers.' },
    ],
  },
  processTitle: 'From first enquiry to the next right action.',
  steps: [
    { title: 'Capture', text: 'Connect your lead sources once. Every enquiry lands in the CRM with its source.' },
    { title: 'Qualify and assign', text: 'Leads are scored and given an owner, so nothing waits in a shared inbox.' },
    { title: 'Follow up and convert', text: 'Reminders, conversations and next actions are tracked until the deal is won or closed.' },
  ],
  faqs: [
    { q: 'What should we bring to a CRM demo?', a: 'Bring your team size, lead sources, current stages and one missed-follow-up example. Use anonymised sample records. Confirm supported integrations and access requirements before connecting production accounts.' },
    { q: 'How do we know a pilot is working?', a: 'Test source capture, duplicate handling, assignment, next actions and failed-message recovery. Compare unassigned enquiries and review effort with your baseline. Count qualified opportunities separately from messages or submissions.' },
    { q: 'Who is behind Bizgenix AI CRM?', a: 'Bizgenix AI is founded by Umang Ratani. The team provides AI consulting, custom solutions, products and training; discuss the delivery and support scope for your proposed CRM configuration.' },
    { q: 'What is an AI CRM?', a: 'An AI CRM is a customer relationship management system that uses AI for the steps people skip when busy: reading enquiry emails, scoring leads and, where enabled, calling new leads and logging the outcome.' },
    { q: 'Who is Bizgenix AI CRM for?', a: 'Sales teams in Indian businesses that want enquiries, sales stages and follow-up activity organised in one place instead of across spreadsheets and chats.' },
    { q: 'Does it capture IndiaMART and Justdial leads?', a: 'Yes. Once connected, enquiries from IndiaMART and Justdial and leads from Facebook and Instagram ads arrive in the CRM automatically.' },
    { q: 'Does it work with WhatsApp?', a: 'Yes, where the WhatsApp integration is enabled for your account: a shared inbox, campaigns, your product catalogue and orders.' },
    { q: 'Is AI calling included?', a: 'Availability, activation and usage charges depend on the confirmed configuration. Our team clarifies this before purchase.' },
    { q: 'How is it priced?', a: 'Plans are by team size: 5 users, 10 users and unlimited users. Ask for plan details and we will share the current terms for your use case.' },
    { q: 'Can I see the CRM before buying?', a: 'Yes. Book a free live walkthrough and we will show a workflow based on your team size and sales process.' },
    { q: 'Can our workflow be customised?', a: 'Share your requirements. Our team reviews scope, feasibility and commercial terms before any commitment.' },
  ],
  related: [
    { label: 'WhatsApp CRM buyer guide', href: '/guides/whatsapp-crm-for-indian-sales-teams' },
    { label: 'AI pilot acceptance checklist', href: '/guides/evaluate-ai-automation-pilot' },
    { label: 'All products', href: '/products' },
    { label: 'Growth Intelligence', href: '/products/growth-intelligence' },
    { label: 'AI automation', href: '/ai-automation' },
    { label: 'Custom AI solutions', href: '/custom-solutions' },
    { label: 'Read: Hire or automate? The 5-V test', href: '/blog/hire-or-automate-5v-test' },
  ],
};

export default function AiCrmPage() {
  return <ServicePage content={content} />;
}
