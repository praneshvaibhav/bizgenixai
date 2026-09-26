import type { Metadata } from 'next';
import Image from 'next/image';
import Link from './InternalLink';
import Navigation from './custom-solutions/Navigation';
import SiteFooter from './SiteFooter';
import HomeEnquiry from './HomeEnquiry';
import styles from './LaunchHome.module.css';

const title = 'Bizgenix AI | AI Systems Built Around Your Business';
const description = 'Led by Dr. CA Umang Ratani, Bizgenix finds where Indian businesses lose time and money, then builds practical AI systems around Tally, WhatsApp and existing tools.';
export const metadata: Metadata = { title, description, alternates: { canonical: '/' }, openGraph: { title, description, type: 'website', images: ['/og.png'] }, twitter: { card: 'summary_large_image', title, description, images: ['/og.png'] } };

const faqs = [
  ['Do we need new software?', 'Not always. We check what your current tools can do first.'],
  ['Do you work with Tally and WhatsApp?', 'Yes. We confirm access and scope before building.'],
  ['Can we start with one process?', 'Yes. Most clients do.'],
  ['How are cost and time decided?', 'After the free review we send a written scope, price and milestones before any work starts.'],
] as const;

const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) };

export default function Home() {
  return <div className={styles.page} id="top">
    <a className={styles.skipLink} href="#main-content">Skip to content</a>
    <Navigation activePath="/" theme="light" />
    <main id="main-content">
      <section className={`${styles.section} ${styles.hero}`} aria-labelledby="home-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>AI PRODUCTS · CUSTOM SYSTEMS · PRACTICAL LEARNING</p>
          <h1 id="home-title">We find where your business is losing time and money - and build the AI system that fixes it.</h1>
          <p>Led by Dr. CA Umang Ratani, Bizgenix builds AI products and custom systems around how your business really runs - on Tally, WhatsApp and the tools you already use. See a working prototype before you commit to the full build.</p>
          <div className={styles.actions}><Link className={styles.primary} href="/contact#contact-form">Book a Free Business Review</Link><Link className={styles.secondary} href="/case-studies">See What We&apos;ve Built</Link></div>
          <p className={styles.proofLine}>1,000+ businesses advised · 110+ AI systems built · 18 published case studies</p>
        </div>
        <figure className={styles.heroVisual}><Image src="/growth-intelligence-dashboard.jpeg" alt="Growth Intelligence sample dashboard in a laptop-style frame" width={1600} height={788} priority /><figcaption>Growth Intelligence · Sample data</figcaption></figure>
      </section>

      <section className={`${styles.section} ${styles.credibility}`} aria-labelledby="credibility-title">
        <Image src="/founder-umang-ratani.webp" alt="Dr. CA Umang Ratani, founder of Bizgenix AI" width={240} height={320} />
        <div><p className={styles.eyebrow}>BUSINESS UNDERSTANDING COMES FIRST</p><h2 id="credibility-title">13+ years of advisory, 1,000+ businesses guided, now building the AI systems they need.</h2><Link className={styles.textLink} href="/about">Meet the team →</Link></div>
        <div className={styles.logoRows}><p><strong>Client implementations</strong><span>Waffle Castle · Una Homes · Bhaskar Silk Mills</span></p><p><strong>Speaking &amp; training</strong><span>ICAI · CMAI · BNI · Skillathon</span></p></div>
      </section>

      <section className={`${styles.section} ${styles.routes}`} aria-labelledby="routes-title">
        <p className={styles.eyebrow}>START WITH WHAT NEEDS TO IMPROVE</p><h2 id="routes-title">What would you like to improve?</h2>
        <div className={styles.cardGrid}>
          <Link href="/custom-solutions"><h3>Fix a business problem</h3><p>Enquiries missed after 7 pm? MIS rebuilt in Excel every month? Payments nobody chased? We map the workflow and build around it.</p><span>Discuss your workflow →</span></Link>
          <Link href="/products"><h3>Use a ready AI product</h3><p>Growth Intelligence for Tally visibility, plus CRM, ScaleOS, Voice AI and BizChat.</p><span>Explore products →</span></Link>
          <Link href="/courses"><h3>Build your team&apos;s AI skills</h3><p>Live events, the 12-week programme and corporate training.</p><span>Explore learning →</span></Link>
        </div>
      </section>

      <section className={`${styles.section} ${styles.caseStudies}`} aria-labelledby="work-title">
        <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>CLIENT IMPLEMENTATIONS</p><h2 id="work-title">See what we&apos;ve built for businesses like yours.</h2></div><Link className={styles.secondary} href="/case-studies">View all 18 case studies</Link></div>
        <div className={styles.cardGrid}>
          <article><Image src="/case-studies/cards/una-homes-field.jpg" alt="Una Homes real estate project" width={700} height={440} /><div><small>UNA HOMES · CONTRACTOR BILLS</small><h3>Bill verification from 5-7 days to under one hour</h3><p>AI document extraction, 36-rule checks and an approval trail.</p><Link href="/case-studies/una-homes">View case study →</Link></div></article>
          <article><Image src="/case-studies/cards/bhaskar-silk-mills-field.jpg" alt="Textile products at Bhaskar Silk Mills" width={700} height={440} /><div><small>BHASKAR SILK MILLS · OPERATIONS</small><h3>80+ spreadsheets replaced by one operating system</h3><p>Production, CRM, payments and follow-ups in one system.</p><Link href="/case-studies/bhaskar-silk-mills">View case study →</Link></div></article>
          <article><Image src="/case-studies/cards/waffle-castle-logo.png" alt="Waffle Castle logo" width={700} height={440} /><div><small>WAFFLE CASTLE · FRANCHISE OPERATIONS</small><h3>Every franchise operation in one view</h3><p>Store openings, handoffs and ad-fund collection in one control tower.</p><Link href="/case-studies/waffle-castle">View case study →</Link></div></article>
        </div>
        <p className={styles.sourceNote}>Results are documented in the Bizgenix AI Case Study Booklet, 2026, for each implementation.</p>
      </section>

      <section className={`${styles.section} ${styles.growth}`} id="growth-intelligence" aria-labelledby="growth-title">
        <div><p className={styles.eyebrow}>GROWTH INTELLIGENCE BY BIZGENIX AI</p><h2 id="growth-title">Know Faster. Act Smarter. Grow Stronger.</h2><p>Tally already knows where your money is stuck. Growth Intelligence shows cash, receivables, payables and stock, with the next action for each.</p><div className={styles.capabilities}><span>See clearly</span><span>Ask GI</span><span>Decide with Virtual CFO guidance</span><span>Follow up with an AI employee, with approval</span></div><p className={styles.dataNote}>Tally remains the source. Connection setup and data refresh timing are confirmed during the demo.</p><div className={styles.actions}><Link className={styles.primary} href="/contact?interest=Growth%20Intelligence#contact-form">Book a GI Demo</Link><a className={styles.secondary} href="https://gi.bizgenix.ai/" target="_blank" rel="noopener noreferrer">Explore GI</a></div></div>
        <figure className={styles.sampleDashboard}><Image src="/growth-intelligence-dashboard.jpeg" alt="Growth Intelligence demonstration screen with sample data" width={1600} height={788} loading="lazy" /><figcaption>Sample data · Demonstration company</figcaption></figure>
      </section>

      <section className={`${styles.section} ${styles.process}`} aria-labelledby="process-title">
        <div><p className={styles.eyebrow}>HOW WE WORK</p><h2 id="process-title">Find the leak. Prove the fix. Build the system.</h2></div>
        <ol><li><strong>Find the leak</strong><span>We map the process and show where time, leads or cash are lost.</span></li><li><strong>Prove the fix</strong><span>A working prototype on your real workflow, before you commit to the full build.</span></li><li><strong>Build the system</strong><span>We build, connect Tally, WhatsApp and your tools, train the team and review adoption.</span></li></ol>
        <div className={styles.reasons}><span>CA-led</span><span>India-first: Tally, WhatsApp, Hinglish</span><span>The same team teaches and builds</span></div>
      </section>

      <section className={`${styles.section} ${styles.founder}`} aria-labelledby="founder-title">
        <div className={styles.founderImages}><Image src="/founder-umang-ratani.webp" alt="Dr. CA Umang Ratani" width={800} height={1100} /><Image src="/corporate training/ICAI AICA, Gandhinagar.png" alt="Bizgenix AI workshop with professionals in Gandhinagar" width={900} height={1200} /></div>
        <div><p className={styles.eyebrow}>BUSINESS EXPERIENCE BEHIND EVERY BUILD</p><h2 id="founder-title">Dr. CA Umang Ratani</h2><p className={styles.credentials}>CA · CS · MBA · LLB · PhD</p><p>Dr. CA Umang Ratani has spent 13+ years advising 1,000+ businesses. Bizgenix turns that experience into AI systems your team uses every day.</p><Link className={styles.primary} href="/about">Meet the Founder &amp; Team</Link></div>
      </section>

      <section className={`${styles.section} ${styles.finalSection}`} aria-labelledby="faq-title">
        <div className={styles.faq}><p className={styles.eyebrow}>BEFORE WE START</p><h2 id="faq-title">Clear answers before you commit.</h2>{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
        <div className={styles.enquiry}><p className={styles.eyebrow}>FREE BUSINESS REVIEW</p><h2>Which part of your business should work better?</h2><p>Tell us what your team keeps chasing, repeating or struggling to see. You don&apos;t need a technical brief.</p><HomeEnquiry/><a className={styles.whatsapp} href="https://wa.me/918780671906?text=Hello%20Bizgenix%2C%20I%20would%20like%20a%20free%20business%20review." target="_blank" rel="noopener noreferrer">Or discuss it on WhatsApp</a><p className={styles.nextSteps}>Free review call → written scope → working prototype</p></div>
      </section>
    </main>
    <SiteFooter />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
  </div>;
}
