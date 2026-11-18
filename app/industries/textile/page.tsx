import type { Metadata } from 'next';
import { pageMeta } from '../../seo';
import ServicePage, { type ServiceContent } from '../../services/ServicePage';

const title = 'AI and Automation for Textile Manufacturers | Bizgenix AI';
const description = 'How textile mills and traders use Bizgenix AI: one operating system in place of spreadsheets, production and dispatch capture, payment follow-up and AI product imagery.';

export const metadata: Metadata = pageMeta({ title, description, path: '/industries/textile' });

const content: ServiceContent = {
  path: '/industries/textile',
  eyebrow: 'AI for Textile',
  serviceType: 'AI and automation for textile manufacturing',
  h1: 'AI and automation for textile mills, built from work inside real mills.',
  lead: 'Textile businesses run on production sheets, dispatch photos in WhatsApp groups and payment follow-ups from memory. We have replaced each of these with a system in working mills and trading firms, and the case studies below show what was built.',
  primaryCta: 'Discuss your mill or trading business',
  whatTitle: 'What we build for textile businesses.',
  whatIntro: 'Each item below is a published implementation, not a feature list.',
  items: [
    { title: 'One operating system', text: 'Production, CRM, payments and automated follow-ups on one platform for a 140-user silk mill in Surat, replacing 80+ spreadsheets.' },
    { title: 'Payment follow-up', text: 'Collection follows an automated flow, with follow-ups assigned, logged and auditable.' },
    { title: 'Production capture at the machine', text: 'Machine-level production entry with automatic balances and a one-click daily report.' },
    { title: 'Dispatch records from photos', text: 'Dispatch photos become structured records, WhatsApp confirmations and tracked customer responses.' },
    { title: 'AI product imagery', text: 'Fabric and saree photos become styled model imagery without booking a studio for every design.' },
    { title: 'Tally analytics', text: 'Growth Intelligence reads Tally data and shows cash, receivables, payables and stock with the next action.' },
  ],
  proofTitle: 'Textile case studies.',
  proofIntro: 'Published implementations in textile manufacturing and trading.',
  proof: [
    { label: 'Bhaskar Silk Mills: one operating system, replacing 80+ spreadsheets', slug: 'bhaskar-silk-mills' },
    { label: 'Stock keeping sheet system for a textile manufacturer', slug: 'stock-keeping-system' },
    { label: 'Dispatch OCR and customer follow-up', slug: 'dispatch-ocr-follow-up' },
    { label: 'AI product imagery at catalogue scale', slug: 'manoj-hirpara-ai-imagery' },
    { label: 'Dyes and chemicals: a knowledge copilot with source-backed answers', slug: 'spectrum-dyes' },
  ],
  processTitle: 'How a textile engagement runs.',
  steps: [
    { title: 'Walk the process', text: 'Order to production to dispatch to payment: we find where information is retyped or lost.' },
    { title: 'Fix one flow first', text: 'Usually dispatch, production reporting or payment follow-up, with a clear test for whether it worked.' },
    { title: 'Connect the rest', text: 'Once one flow is in daily use, the others join the same system.' },
  ],
  faqs: [
    { q: 'How is AI used in textile manufacturing?', a: 'In our published work: reading dispatch photos into records, automating payment and customer follow-ups on WhatsApp, capturing production at the machine, generating catalogue imagery from fabric photos, and reporting on Tally data.' },
    { q: 'Is this a textile ERP?', a: 'It is built around your process rather than sold as a fixed ERP. For Bhaskar Silk Mills it became one operating system for production, CRM and payments in place of 80+ spreadsheets.' },
    { q: 'Does it work with Tally?', a: 'Yes. Growth Intelligence connects to Tally through a connector, and custom systems can be integrated depending on your setup.' },
    { q: 'Do we have to replace everything at once?', a: 'No. Most businesses begin with one flow, such as dispatch or payment follow-up, and expand after it proves its value.' },
    { q: 'Can our staff use it without training?', a: 'Onboarding and user training are part of the engagement. Entry screens are designed for the people at the machine and the dispatch desk.' },
  ],
  related: [
    { label: 'Growth Intelligence for Tally', href: '/products/growth-intelligence' },
    { label: 'ScaleOS', href: '/products/scaleos' },
    { label: 'BizChat: WhatsApp automation', href: '/products/bizchat' },
    { label: 'Custom AI solutions', href: '/custom-solutions' },
    { label: 'AI for real estate and construction', href: '/industries/real-estate-construction' },
  ],
};

export default function TextileIndustryPage() {
  return <ServicePage content={content} />;
}
