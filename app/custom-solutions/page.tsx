import type { Metadata } from 'next';
import Hero from './Hero';
import WhyCustomSolutions from './WhyCustomSolutions';
import ContactSection from '../ContactSection';
import Navigation from './Navigation';
import styles from './page.module.css';

const title = 'Custom AI Solutions Built Around Your Business | Bizgenix AI';
const description = 'Bizgenix builds custom AI applications, CRM, ERP, enterprise web and mobile platforms, business intelligence, integrations and workflow automation around your business.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: 'website' },
  twitter: { card: 'summary', title, description },
};

const requirementUrl = `https://wa.me/918200858674?text=${encodeURIComponent("Hi Bizgenix, I'd like to discuss a custom AI solution for my business.")}`;

const capabilities = [
  { title: 'Custom AI Applications', tag: 'INTELLIGENCE', build: 'AI-powered tools, assistants and decision systems', outcome: 'Faster work and smarter decisions', symbol: '✳' },
  { title: 'AI CRM', tag: 'CUSTOMER RELATIONSHIPS', build: 'Lead, follow-up, pipeline and customer management platforms', outcome: 'Better conversion and customer visibility', symbol: '◎' },
  { title: 'AI ERP', tag: 'BUSINESS OPERATIONS', build: 'Connected operations, finance, inventory and workflow systems', outcome: 'Process control and unified data', symbol: '▦' },
  { title: 'Enterprise Web Platforms', tag: 'DIGITAL WORKSPACES', build: 'Secure role-based portals and business applications', outcome: 'Scalable digital operations', symbol: '▤' },
  { title: 'Mobile Applications', tag: 'WORK FROM ANYWHERE', build: 'Customer, employee and field-force apps', outcome: 'Access and execution from anywhere', symbol: '▯' },
  { title: 'Business Intelligence', tag: 'DATA TO DECISIONS', build: 'Dashboards, analytics and automated reporting', outcome: 'Real-time management insights', symbol: '▥' },
  { title: 'System Integrations', tag: 'CONNECTED SYSTEMS', build: 'CRM, ERP, Tally, WhatsApp, APIs and internal tools', outcome: 'Connected workflows and reduced duplication', symbol: '⇄' },
  { title: 'Automation Solutions', tag: 'EVERYDAY EFFICIENCY', build: 'Workflow, approval, reminder and data-processing automation', outcome: 'Lower manual effort and faster execution', symbol: '↗' },
];

export default function CustomSolutionsPage() {
  return <div className={styles.page} id="top">
    <a className={styles.skipLink} href="#main-content">Skip to content</a>
    <Navigation />
    <main id="main-content">
      <Hero />
      <div className={styles.overview}><div className={styles.container}><div className={styles.heroBottom}><span>FROM COMPLEXITY<br /><b>TO POSSIBILITY.</b></span><p>From AI-powered CRM and ERP platforms to intelligent agents, analytics systems, workflow automation and integrated web applications, we turn complex business challenges into practical, scalable solutions.</p><a href="#capabilities" aria-label="Explore our custom solution capabilities">↓</a></div></div></div>

      <WhyCustomSolutions />

      <section className={styles.capabilities} id="capabilities" aria-labelledby="capabilities-title">
        <div className={styles.container}>
          <div className={styles.capabilitiesHeader}><div><p className={styles.eyebrow}>02 / OUR CUSTOM SOLUTION CAPABILITIES</p><h2 id="capabilities-title">What your business needs.<br /><em>What we build.</em></h2></div><p>From a single workflow to an integrated enterprise platform, built around the outcomes that matter to you.</p></div>
          <div className={styles.capabilityGrid}>{capabilities.map((capability, index) => <article className={styles.capability} key={capability.title}><div className={styles.capabilityTop}><span className={styles.capabilityIcon} aria-hidden="true">{capability.symbol}</span><span>{capability.tag}</span><small>0{index + 1}</small></div><h3>{capability.title}</h3><p className={styles.build}>{capability.build}</p><div className={styles.outcome}><span aria-hidden="true">↗</span><div><small>THE BUSINESS OUTCOME</small><p>{capability.outcome}</p></div></div></article>)}</div>
          <div className={styles.capabilityCta}><p>Have a requirement that doesn’t fit a category?<br /><b>That’s exactly where custom starts.</b></p><a className={styles.primary} href={requirementUrl} target="_blank" rel="noopener noreferrer">Discuss Your Requirement <span aria-hidden="true">↗</span></a></div>
        </div>
      </section>
      <ContactSection homeHref="/" />
    </main>
  </div>;
}
