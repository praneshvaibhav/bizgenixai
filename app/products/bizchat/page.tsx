import type { Metadata } from 'next';
import { pageMeta } from '../../seo';
import ServicePage, { type ServiceContent } from '../../services/ServicePage';

const title = 'BizChat | WhatsApp Automation and Chatbot for Business';
const description = 'BizChat automates WhatsApp lead replies, follow-ups, payment reminders, support and broadcasts, and connects every conversation to your CRM or sheets.';

export const metadata: Metadata = pageMeta({ title, description, path: '/products/bizchat' });

const content: ServiceContent = {
  path: '/products/bizchat',
  eyebrow: 'BizChat',
  serviceType: 'BizChat',
  schemaType: 'SoftwareApplication',
  parent: {
    name: 'Products',
    href: '/products',
  },
  h1: 'WhatsApp automation that turns every conversation into a tracked action.',
  lead: 'BizChat helps organisations automate customer communication, lead follow-ups, reminders, support conversations and internal notifications through WhatsApp. It connects messaging with business workflows, so a conversation leads to an owner, a status and a next step.',
  primaryCta: 'Discuss your WhatsApp workflow',
  secondaryCta: {
    label: 'See WhatsApp automation case studies',
    href: '/case-studies',
  },
  whatTitle: 'What BizChat does.',
  whatIntro: 'A WhatsApp chatbot and automation layer for sales, support, collections and internal alerts, subject to your WhatsApp account and template setup.',
  items: [
    { title: 'Lead response and qualification', text: 'New enquiries get an immediate reply and the qualifying questions, so the team starts with the answers.' },
    { title: 'WhatsApp journeys', text: 'Template-based and conversational journeys for nurturing leads after ads, events or website enquiries.' },
    { title: 'Support and FAQs', text: 'Routine customer questions are answered on WhatsApp; the rest are assigned to a person with the history attached.' },
    { title: 'Reminders', text: 'Payment, appointment and document reminders sent on schedule and tracked.' },
    { title: 'Broadcasts and campaigns', text: 'Broadcast and campaign workflows to your approved lists.' },
    { title: 'Assignment, history and integrations', text: 'Team assignment and escalation, conversation history and status tracking, connected to your CRM or spreadsheets.' },
  ],
  extra: {
    title: 'Where businesses use it.',
    intro: 'Common WhatsApp workflows BizChat is set up for.',
    items: [
      { title: 'Lead nurturing', text: 'Follow-up after ads, events and website enquiries.' },
      { title: 'Order updates', text: 'Order status and customer notifications.' },
      { title: 'Collections', text: 'Payment collection reminders.' },
      { title: 'Onboarding', text: 'Document collection and customer onboarding.' },
      { title: 'Internal alerts', text: 'Alerts to employees and managers when something needs attention.' },
      { title: 'Feedback', text: 'Customer feedback and post-service follow-ups.' },
    ],
  },
  proofTitle: 'WhatsApp automation we have built.',
  proofIntro: 'Published implementations where WhatsApp carries the reminder, the alert or the customer follow-up.',
  proof: [
    { label: 'Automated cheque reminder system', slug: 'cheque-reminder-system' },
    { label: 'Dispatch OCR and customer follow-up', slug: 'dispatch-ocr-follow-up' },
    { label: 'Task visibility with WhatsApp automation', slug: 'kishor-pawar-task-visibility' },
    { label: 'Property valuation workflow automation', slug: 'aavkar-valuation-workflow' },
  ],
  processTitle: 'From enquiry to tracked follow-up.',
  steps: [
    { title: 'WhatsApp enquiry', text: 'A customer writes in, or a workflow triggers a message.' },
    { title: 'Automated response and assignment', text: 'The first reply goes out at once and the conversation is assigned to the right person.' },
    { title: 'Tracked follow-up', text: 'Reminders and next steps are sent and recorded until the matter is closed.' },
  ],
  faqs: [
    { q: 'What is WhatsApp automation?', a: 'WhatsApp automation sends and answers business messages by rule instead of by hand: replies to new enquiries, reminders, order updates and follow-ups, with each conversation recorded against a customer and an owner.' },
    { q: 'Can BizChat automate WhatsApp follow-ups?', a: 'Yes. It supports structured reminders, lead journeys, customer updates and workflow-triggered messages, subject to the WhatsApp account and template setup.' },
    { q: 'Do we need the WhatsApp Business API?', a: 'Automated journeys, templates and broadcasts run on a WhatsApp Business account set up for API use. We confirm the account and template requirements with you before the build.' },
    { q: 'Does it connect to our CRM or Google Sheets?', a: 'Yes. BizChat has CRM and spreadsheet integrations. Integration depends on the software, available APIs and workflow requirements.' },
    { q: 'Can several team members handle the same number?', a: 'Yes. Conversations can be assigned to team members and escalated, with the history visible to whoever picks them up.' },
    { q: 'Can we start with one workflow?', a: 'Yes. Many businesses begin with one use case, such as payment reminders or lead response, and expand after it proves its value.' },
  ],
  related: [
    { label: 'All products', href: '/products' },
    { label: 'Bizgenix AI CRM', href: '/products/ai-crm' },
    { label: 'Voice AI', href: '/products/voice-ai' },
    { label: 'AI automation', href: '/ai-automation' },
    { label: 'Read: Hire or automate? The 5-V test', href: '/blog/hire-or-automate-5v-test' },
  ],
};

export default function BizChatPage() {
  return <ServicePage content={content} />;
}
