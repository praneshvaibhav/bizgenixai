import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '../custom-solutions/Navigation';
import ContactSection from '../ContactSection';
import BlogCatalog from './BlogCatalog';
import InsightArt from './InsightArt';
import { contactUrl, faqs, industries, insights, resources } from './content';
import styles from './page.module.css';

const title = 'AI Insights, Automation Guides and Industry Use Cases | Bizgenix';
const description = 'Explore practical AI insights, business automation guides, Voice AI, WhatsApp automation, analytics, case studies and industry use cases from Bizgenix.';
export const metadata: Metadata = { title, description, openGraph: { title, description, type: 'website' }, twitter: { card: 'summary', title, description } };

export default function BlogPage() {
  const featured = insights[0];
  return <div className={styles.page} id="top">
    <a className={styles.skipLink} href="#main-content">Skip to content</a>
    <Navigation activePath="/blog" />
    <main id="main-content">
      <section className={styles.hero} aria-labelledby="blog-title"><div className={styles.container}>
        <div className={styles.heroTop}><p className={styles.eyebrow}><span className={styles.dot} />THE BIZGENIX JOURNAL</p><span>IDEAS. APPLICATIONS. IMPACT.</span></div>
        <div className={styles.heroCopy}><h1 id="blog-title">Practical AI insights for<br /><em>smarter business growth.</em></h1><div><p>Explore practical guides, expert perspectives, industry use cases and implementation ideas that help businesses understand and apply Artificial Intelligence, automation and analytics.</p><div className={styles.actions}><a className={styles.primary} href="#latest-insights">Explore Latest Insights <span aria-hidden="true">↓</span></a></div></div></div>
        <div className={styles.heroFoot}><p>For business owners, professionals, teams and learners ready to move beyond AI trends and improve real business outcomes.</p><span><b>01</b> / IDEAS INTO ACTION</span></div>
      </div></section>

      <section className={`${styles.container} ${styles.featuredSection}`} aria-labelledby="featured-title"><div className={styles.featured}>
        <div className={styles.featuredCopy}><p className={styles.eyebrow}>EDITOR’S PICK / FEATURED INSIGHT</p><div className={styles.featuredMeta}><span>AI Strategy</span><span>Guide preview</span></div><h2 id="featured-title"><Link href={`/blog/${featured.slug}`}>{featured.title}</Link></h2><p>{featured.summary}</p><Link className={styles.whiteButton} href={`/blog/${featured.slug}`}>Explore Featured Insight <span aria-hidden="true">↗</span></Link><span className={styles.featuredAuthor}>BIZGENIX INSIGHTS TEAM</span></div>
        <Link href={`/blog/${featured.slug}`} className={styles.featuredVisual} aria-label={`Preview: ${featured.title}`}><InsightArt kind="strategy" large /></Link>
      </div></section>

      <section className={`${styles.container} ${styles.editorialIntro}`} aria-label="About Bizgenix Insights"><p className={styles.eyebrow}>CLARITY FOR YOUR NEXT MOVE</p><div><p>Artificial Intelligence is evolving quickly, but businesses do not need more noise. They need <strong>clear, practical and reliable guidance.</strong> Bizgenix publishes content that connects AI technology with business problems, implementation decisions and measurable outcomes.</p><p>Our content covers strategy, automation, AI agents, business intelligence, industry applications, implementation frameworks and lessons from real-world projects.</p></div></section>

      <section className={`${styles.container} ${styles.section}`} id="latest-insights" aria-labelledby="latest-title"><div className={styles.sectionHeading}><div><p className={styles.eyebrow}>EXPLORE THE JOURNAL</p><h2 id="latest-title">Latest insights<br /><em>from Bizgenix.</em></h2></div><p>Stay informed with practical AI strategies, implementation guides and industry-specific ideas.<span className={styles.previewNote}>Explore the previews below. Full articles are coming soon.</span></p></div><BlogCatalog /></section>

      <section className={styles.softSection} id="industry-insights" aria-labelledby="industry-title"><div className={`${styles.container} ${styles.section}`}><div className={styles.sectionHeading}><div><p className={styles.eyebrow}>YOUR INDUSTRY. REAL POSSIBILITIES.</p><h2 id="industry-title">See AI through<br /><em>your business lens.</em></h2></div><p>Explore the workflows, challenges and opportunities that matter in your industry.</p></div><div className={styles.industryGrid}>{industries.map(([name, copy], index) => <article key={name}><span className={styles.index}>{String(index + 1).padStart(2, '0')}</span><h3>{name}</h3><p>{copy}</p><a href={contactUrl(`AI use cases for ${name}`)} target="_blank" rel="noopener noreferrer" aria-label={`Discuss AI use cases for ${name}`}>Discuss use cases <span aria-hidden="true">↗</span></a></article>)}</div></div></section>

      <section className={`${styles.container} ${styles.section}`} id="case-studies" aria-labelledby="case-title"><div className={styles.casePanel}><div><p className={styles.eyebrow}>BEHIND THE IMPLEMENTATION</p><h2 id="case-title">The problem.<br />The process.<br /><em>The practical result.</em></h2><p>Our case studies will look beyond the finished solution: the business context, existing limitations, technology and integrations, implementation process and measurable results.</p><a className={styles.primary} href={contactUrl('a solution for a business challenge')} target="_blank" rel="noopener noreferrer">Discuss a Similar Solution <span aria-hidden="true">↗</span></a></div><div className={styles.caseSteps}><p className={styles.eyebrow}>WHAT AN IMPLEMENTATION STORY SHOULD SHOW</p>{[['01', 'Understand the challenge', 'The industry, business problem and limitations of the existing process.'], ['02', 'Design around the business', 'The solution, technology, integrations and implementation approach.'], ['03', 'Look at what changed', 'Measurable outcomes, client perspectives and lessons from the project.']].map(([number, heading, copy]) => <div key={number}><span>{number}</span><div><h3>{heading}</h3><p>{copy}</p></div></div>)}</div></div></section>

      <section className={styles.founderSection} aria-labelledby="founder-title"><div className={`${styles.container} ${styles.founderLayout}`}><div className={styles.portrait}><Image src="/founder-umang-ratani.webp" alt="Dr. CA Umang Ratani, founder of Bizgenix" width={600} height={900} /><span>THE FOUNDER’S PERSPECTIVE</span></div><div><p className={styles.eyebrow}>EXPERIENCE THAT INFORMS THE INSIGHT</p><h2 id="founder-title">Insights from<br /><em>Dr. CA Umang Ratani</em></h2><p>Explore practical perspectives on AI adoption, business strategy, finance, automation and the future of intelligent enterprises.</p><div className={styles.expertise}><span>Business strategy</span><span>Finance & analytics</span><span>Practical AI adoption</span></div><Link className={styles.textLink} href="/#founder">Meet the founder <span aria-hidden="true">↗</span></Link></div></div></section>

      <section className={`${styles.container} ${styles.section}`} id="resources" aria-labelledby="resource-title"><div className={styles.sectionHeading}><div><p className={styles.eyebrow}>TAKE THE NEXT STEP</p><h2 id="resource-title">Practical resources.<br /><em>A place to start.</em></h2></div><p>Checklists, worksheets and guides for your next AI decision. Ask our team about the resources available for your business.</p></div><div className={styles.resourceGrid}>{resources.map((resource, index) => <a key={resource} href={contactUrl(resource)} target="_blank" rel="noopener noreferrer"><span className={styles.resourceIcon} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><div><h3>{resource}</h3><span>Request resource</span></div><b aria-hidden="true">↗</b></a>)}</div></section>

      <section className={styles.softSection} aria-labelledby="faq-title"><div className={`${styles.container} ${styles.section} ${styles.faqLayout}`}><div><p className={styles.eyebrow}>A FEW THINGS YOU MAY BE WONDERING</p><h2 id="faq-title">Good questions.<br /><em>Clear answers.</em></h2><p>Have a business challenge you’d like us to cover?</p><a className={styles.textLink} href={contactUrl('a topic suggestion for the Bizgenix Blog')} target="_blank" rel="noopener noreferrer">Suggest a topic <span aria-hidden="true">↗</span></a></div><div className={styles.faqList}>{faqs.map(([question, answer]) => <details key={question} name="blog-faq"><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>

      <section className={styles.finalCta} id="contact" aria-labelledby="contact-title"><div className={styles.container}><p className={styles.eyebrow}>READ. RETHINK. PUT IT TO WORK.</p><h2 id="contact-title">Turn AI insights<br />into <em>business action.</em></h2><p>Reading about AI is only the first step. If you have identified a process, challenge or opportunity in your business, Bizgenix can help you evaluate and implement the right solution.</p><div className={styles.actions}><a className={styles.primary} href={contactUrl('an AI strategy session')} target="_blank" rel="noopener noreferrer">Book an AI Strategy Session <span aria-hidden="true">↗</span></a><a className={styles.secondary} href="#latest-insights">Explore Latest Articles <span aria-hidden="true">↑</span></a></div></div></section>
    </main><ContactSection homeHref="/" footerOnly />
  </div>;
}
