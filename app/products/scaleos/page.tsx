import type { Metadata } from 'next';
import { pageMeta } from '../../seo';
import ServicePage, { type ServiceContent } from '../../services/ServicePage';

const title = 'ScaleOS | Task and Workflow Management Software for Growing Teams';
const description = 'ScaleOS brings tasks, people, processes, approvals and management reports into one system, with WhatsApp alerts. Request a workflow assessment.';

export const metadata: Metadata = pageMeta({ title, description, path: '/products/scaleos' });

const content: ServiceContent = {
  path: '/products/scaleos',
  eyebrow: 'ScaleOS',
  serviceType: 'ScaleOS',
  schemaType: 'SoftwareApplication',
  parent: {
    name: 'Products',
    href: '/products',
  },
  h1: 'One system for tasks, approvals and what is actually happening across your teams.',
  lead: 'ScaleOS is designed to help growing organisations bring tasks, people, processes, approvals and operational visibility into one connected system. It reduces scattered communication and gives management a clearer view of what is happening across teams.',
  primaryCta: 'Request a workflow assessment',
  secondaryCta: {
    label: 'Read the ScaleOS case study',
    href: '/case-studies/sanjay-jain-scaleos',
  },
  whatTitle: 'What ScaleOS does.',
  whatIntro: 'Task management and workflow management for owner-led businesses that have outgrown spreadsheets and WhatsApp groups.',
  items: [
    { title: 'Task and project management', text: 'Every task has an owner, a deadline and a status that the whole team can see.' },
    { title: 'Role-based dashboards', text: 'Each person sees their own work; managers see the team; the owner sees the business.' },
    { title: 'Process stages', text: 'Work moves through defined stages, so you can see where each job stands and where it is stuck.' },
    { title: 'Approvals, reminders and escalations', text: 'Approvals are requested and recorded in the system, with reminders and escalation when they wait too long.' },
    { title: 'WhatsApp notifications', text: 'Assignments, status changes and alerts reach people on WhatsApp.' },
    { title: 'Management reports and custom modules', text: 'Operational summaries for reviews, and custom modules for workflows specific to your company.' },
  ],
  extra: {
    title: 'Where businesses use it.',
    intro: 'Workflows ScaleOS is set up for.',
    items: [
      { title: 'Project delivery', text: 'Project execution and delivery tracking.' },
      { title: 'Task follow-up', text: 'Employee task assignment and follow-up.' },
      { title: 'Client onboarding', text: 'Client onboarding and stage management.' },
      { title: 'Approvals', text: 'Purchase, approval and operational workflows.' },
      { title: 'Management reviews', text: 'Daily, weekly and monthly reviews from the same numbers.' },
      { title: 'Multi-team coordination', text: 'Coordination across departments in a growing business.' },
    ],
  },
  proofTitle: 'ScaleOS in use.',
  proofIntro: 'Published implementations of one operating system and of task visibility with WhatsApp alerts.',
  proof: [
    { label: 'ScaleOS: one system for the whole business', slug: 'sanjay-jain-scaleos' },
    { label: 'One operating system replacing 80+ spreadsheets', slug: 'bhaskar-silk-mills' },
    { label: 'Task management with WhatsApp automation', slug: 'kbp-interior' },
    { label: 'Task visibility with WhatsApp automation', slug: 'kishor-pawar-task-visibility' },
  ],
  processTitle: 'From assignment to management visibility.',
  steps: [
    { title: 'Assign ownership', text: 'Each task and process step gets a named owner and a date.' },
    { title: 'Track, review and approve', text: 'Progress is tracked by stage; approvals happen in the system.' },
    { title: 'Management visibility', text: 'Delays and bottlenecks show up in reports before they become escalations.' },
  ],
  faqs: [
    { q: 'What is ScaleOS?', a: 'ScaleOS is a business operations system from Bizgenix AI that brings tasks, people, processes, approvals and management reporting into one place, with WhatsApp notifications.' },
    { q: 'Is ScaleOS suitable for multiple teams?', a: 'Yes. It supports role-based users, departments, projects, stages, approvals and management visibility.' },
    { q: 'How is it different from a task app?', a: 'A task app lists tasks. ScaleOS also carries your process stages, approvals, escalations and management reports, and can include custom modules for workflows specific to your company.' },
    { q: 'Can we start with one department?', a: 'Yes. Many businesses begin with one department or one focused use case and expand after proving value.' },
    { q: 'How long does implementation take?', a: 'It depends on integrations, data readiness and the amount of customisation. A scoped implementation plan is prepared after discovery.' },
    { q: 'Do you provide training and support?', a: 'Yes. Product onboarding, user training and ongoing support can be included in the engagement.' },
  ],
  related: [
    { label: 'All products', href: '/products' },
    { label: 'Growth Intelligence', href: '/products/growth-intelligence' },
    { label: 'Bizgenix AI CRM', href: '/products/ai-crm' },
    { label: 'Custom AI solutions', href: '/custom-solutions' },
    { label: 'Read: Clean your data before AI', href: '/blog/clean-business-data-before-ai-four-registers' },
  ],
};

export default function ScaleOsPage() {
  return <ServicePage content={content} />;
}
