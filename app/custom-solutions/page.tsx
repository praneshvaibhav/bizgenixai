import type { Metadata } from 'next';
import Hero from './Hero';
import WhyCustomSolutions from './WhyCustomSolutions';
import ContactSection from '../ContactSection';
import Navigation from './Navigation';
import CapabilityReveal from './CapabilityReveal';
import styles from './page.module.css';

const title = 'Custom AI Solutions Built Around Your Business | Bizgenix AI';
const description = 'When standard software does not fit, Bizgenix builds around your process: from enquiry and follow-up to operations, approvals and reporting.';
export const metadata: Metadata = { title, description, alternates: { canonical: '/custom-solutions' }, openGraph: { title, description, type: 'website', images: ['/og.png'] }, twitter: { card: 'summary_large_image', title, description, images: ['/og.png'] } };

const capabilities = [
  { title: 'Sales & Service', tag: 'ENQUIRIES AND CUSTOMERS', build: 'CRM, lead routing, follow-ups, Voice AI and WhatsApp workflows', outcome: 'See Waffle Castle', symbol: 'S', href: '/case-studies/waffle-castle' },
  { title: 'Operations', tag: 'TASKS AND APPROVALS', build: 'Role-based workflows, tasks, approvals, field apps and operating systems', outcome: 'See Bhaskar Silk Mills', symbol: 'O', href: '/case-studies/bhaskar-silk-mills' },
  { title: 'Finance & MIS', tag: 'CASH AND REPORTING', build: 'Tally-connected reporting, receivables, bill checks and management views', outcome: 'See Una Homes', symbol: 'F', href: '/case-studies/una-homes' },
  { title: 'Integrations', tag: 'CONNECTED TOOLS', build: 'CRM, ERP, Tally, WhatsApp, APIs and existing internal systems', outcome: 'Browse all implementations', symbol: 'I', href: '/case-studies' },
];
const process = ['Discover the workflow', 'Find the leak', 'Scope the first use case', 'Build a working prototype', 'Develop and integrate', 'Deploy and train', 'Review adoption and results'];
const scope = ['Workflow and users', 'Integrations and data', 'Roles and ownership', 'Support and handover', 'Success measure'];

export default function CustomSolutionsPage() {
  return <div className={styles.page} id="top">
    <a className={styles.skipLink} href="#main-content">Skip to content</a>
    <Navigation theme="light" />
    <main id="main-content">
      <Hero />
      <div className={styles.overview}><div className={styles.container}><div className={styles.heroBottom}><span>PROCESS FIRST<br /><b>TECHNOLOGY SECOND.</b></span><p>We begin with how work moves through your business, then choose the smallest useful system to prove and build.</p><a href="#capabilities" aria-label="Explore custom solution capabilities">↓</a></div></div></div>
      <WhyCustomSolutions />
      <section className={styles.capabilities} id="capabilities" aria-labelledby="capabilities-title"><div className={styles.container}>
        <div className={styles.capabilitiesHeader}><div><p className={styles.eyebrow}>CUSTOM SOLUTION CAPABILITIES</p><h2 id="capabilities-title">Grouped around the work<br /><em>your team actually does.</em></h2></div><p>Each capability links to proof from a real implementation.</p></div>
        <CapabilityReveal className={styles.capabilityGrid}>{capabilities.map(capability => <article className={styles.capability} key={capability.title}><div className={styles.capabilityTop}><span className={styles.capabilityIcon} aria-hidden="true">{capability.symbol}</span><span>{capability.tag}</span></div><h3>{capability.title}</h3><p className={styles.build}>{capability.build}</p><div className={styles.outcome}><div><small>RELATED IMPLEMENTATION</small><p><a href={capability.href}>{capability.outcome} →</a></p></div></div></article>)}</CapabilityReveal>
        <div className={styles.capabilityCta}><p>Have a workflow that does not fit standard software?<br /><b>That is exactly where custom starts.</b></p><a className={styles.primary} href="/contact?interest=Custom%20solution#contact-form">Discuss Your Workflow <span aria-hidden="true">→</span></a></div>
      </div></section>
      <section className={`${styles.container} ${styles.delivery}`} aria-labelledby="delivery-title"><div><p className={styles.eyebrow}>HOW WE BUILD</p><h2 id="delivery-title">A clear path from workflow to adoption.</h2><ol>{process.map((step,index)=><li key={step}><span>{index+1}</span>{step}</li>)}</ol></div><aside><h3>What we scope with you</h3><ul>{scope.map(item=><li key={item}>{item}</li>)}</ul><a className={styles.primary} href="/contact?interest=Custom%20solution#contact-form">Book a Free Business Review</a></aside></section>
      <ContactSection homeHref="/" />
    </main>
  </div>;
}
