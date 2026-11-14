import type { Metadata } from 'next';
import { pageMeta } from '../../seo';
import ServicePage, { type ServiceContent } from '../../services/ServicePage';

const title = 'AI and Automation for Real Estate and Construction | Bizgenix AI';
const description = 'How developers, contractors and architects use Bizgenix AI: RA bill verification, delayed-payment interest, cheque reminders, valuation workflows and lead follow-up.';

export const metadata: Metadata = pageMeta({ title, description, path: '/industries/real-estate-construction' });

const content: ServiceContent = {
  path: '/industries/real-estate-construction',
  eyebrow: 'AI for Real Estate & Construction',
  serviceType: 'AI and automation for real estate and construction',
  h1: 'AI and automation for developers, contractors and architects.',
  lead: 'In real estate and construction the money leaks in bill verification, delayed payments and follow-ups nobody owns. These are the systems we have built for developers, architects and valuers, each with a published case study.',
  primaryCta: 'Discuss your project workflow',
  whatTitle: 'What we build for real estate and construction.',
  whatIntro: 'Each item below is a published implementation.',
  items: [
    { title: 'RA bill verification', text: 'AI document extraction and a 36-rule verification engine check contractor running-account bills before approval, with every approval logged.' },
    { title: 'Delayed-payment interest', text: 'Milestone-based balances, delayed interest and a customer-ready certificate generated in one system.' },
    { title: 'Cheque reminders', text: 'A central tracker for post-dated cheques sends WhatsApp reminders before the deposit date.' },
    { title: 'Valuation workflow', text: 'Bank requests flow from email into a tracker, with overdue flags and WhatsApp completion updates.' },
    { title: 'Email intelligence', text: 'Priority enquiries and quotations surfaced in daily and weekly reports.' },
    { title: 'Leads and site visits', text: 'Bizgenix AI CRM and Voice AI for property enquiry, qualification and site-visit scheduling.' },
  ],
  proofTitle: 'Real estate and construction case studies.',
  proofIntro: 'Published implementations for developers, architects and valuers.',
  proof: [
    { label: 'Una Homes: AI-powered RA bill verification', slug: 'una-homes' },
    { label: 'SJ Sangath: delayed payment interest calculator', slug: 'sj-sangath-interest-calculator' },
    { label: 'Automated cheque reminder system', slug: 'cheque-reminder-system' },
    { label: 'Property valuation workflow automation', slug: 'aavkar-valuation-workflow' },
    { label: 'Daily and weekly email intelligence', slug: 'email-intelligence' },
  ],
  processTitle: 'How an engagement runs.',
  steps: [
    { title: 'Find the leak', text: 'Bills, collections or follow-ups: we look at where approvals wait and where arithmetic is checked by hand.' },
    { title: 'Prototype on your documents', text: 'You see the checks run on your own bills, schedules or emails before the full build.' },
    { title: 'Roll out with an audit trail', text: 'Every approval, reminder and change is recorded.' },
  ],
  faqs: [
    { q: 'How is AI used in real estate and construction?', a: 'In our published work: reading and verifying contractor bills, calculating delayed-payment interest, reminding parties about post-dated cheques, tracking valuation requests and surfacing priority emails. For sales, AI qualifies property enquiries and schedules site visits.' },
    { q: 'What is RA bill verification?', a: 'A running-account bill is a contractor’s periodic claim for work done. Verification checks measurements, rates and deductions before payment. For Una Homes, AI extraction and a 36-rule engine run these checks and log each approval.' },
    { q: 'Does it work with Tally and Excel?', a: 'Yes. The delayed-payment interest system replaced calculations spread across Tally and Excel. Integration depends on your setup.' },
    { q: 'Can it handle site-visit follow-up for sales?', a: 'Yes. Bizgenix AI CRM has a real-estate stage flow from property enquiry to site visit and follow-up, and Voice AI can qualify leads and schedule visits.' },
    { q: 'Can we start with one workflow?', a: 'Yes. Most firms begin with the one that costs them most, often bill verification or collections.' },
  ],
  related: [
    { label: 'Bizgenix AI CRM', href: '/products/ai-crm' },
    { label: 'Voice AI', href: '/products/voice-ai' },
    { label: 'AI automation', href: '/ai-automation' },
    { label: 'Custom AI solutions', href: '/custom-solutions' },
    { label: 'AI for textile manufacturers', href: '/industries/textile' },
  ],
};

export default function RealEstateIndustryPage() {
  return <ServicePage content={content} />;
}
