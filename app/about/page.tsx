import type { Metadata } from 'next';
import Image from 'next/image';
import Link from '../InternalLink';
import Navigation from '../custom-solutions/Navigation';
import ContactSection from '../ContactSection';
import { directors, impact } from './content';
import JourneyTimeline from './JourneyTimeline';
import ScrollReveal from './ScrollReveal';
import styles from './page.module.css';

const title = 'About Bizgenix | Practical AI, Automation and Business Impact';
const description = 'Meet Bizgenix, an AI implementation and business automation company building intelligent products, custom solutions and practical AI education for Indian businesses.';
export const metadata: Metadata = { title, description, alternates: { canonical: '/about' }, openGraph: { title, description, type: 'website', images: ['/og.png'] }, twitter: { card: 'summary_large_image', title, description, images: ['/og.png'] } };

const journey = [
  ['2021', 'The idea took shape', 'A practical vision for connecting business expertise with intelligent technology.'],
  ['2022', 'First systems deployed', 'Automation and analytics moved from concepts into day-to-day business operations.'],
  ['2023', 'AI learning expanded', 'Workshops and programs helped owners and professionals apply AI with confidence.'],
  ['2024', 'Products took form', 'Focused platforms for conversations, operations and business intelligence emerged.'],
  ['Today', 'Building what comes next', 'Products, custom solutions and education now work together as one ecosystem.'],
] as const;

export default function AboutPage() {
  return <div className={styles.page} id="top">
    <a className={styles.skipLink} href="#main-content">Skip to content</a>
    <Navigation activePath="/about" theme="light" />
    <main id="main-content">
      <section className={`${styles.container} ${styles.intro}`} aria-labelledby="intro-title"><div><h1 id="intro-title">We bring business advisory, AI development and practical learning together, so the systems we build are ones your team actually uses.</h1><div className={styles.introCopy}><p>We work closely with every client to understand the process, identify the costly bottleneck and build the smallest useful system first.</p><p><Link className={styles.secondary} href="/case-studies">See Our Work</Link> <Link className={styles.secondary} href="/contact#contact-form">Talk to Our Team</Link></p></div></div></section>

      <section className={styles.purpose} aria-label="Our vision and mission"><ScrollReveal className={`${styles.container} ${styles.purposeGrid}`}><article><span>01</span><div><p className={styles.eyebrow}>VISION</p><h2>Make the future of business <em>more intelligent.</em></h2><p>To become India’s most trusted AI implementation partner by delivering scalable, secure solutions that create lasting business value.</p></div></article><article><span>02</span><div><p className={styles.eyebrow}>MISSION</p><h2>Make AI practical.<br /><em>Make progress measurable.</em></h2><p>To make artificial intelligence accessible and useful—automating routine work, empowering people and supporting sustainable growth.</p></div></article></ScrollReveal></section>

      <section className={`${styles.container} ${styles.journey}`} aria-labelledby="team-work-title"><header><p className={styles.eyebrow}>HOW OUR TEAM WORKS</p><h2 id="team-work-title">Business advisory, development and adoption - together.</h2></header><div className={styles.teamWork}><article><h3>Understand the business</h3><p>Advisory experience shapes the workflow and the success measure.</p></article><article><h3>Build the system</h3><p>Product and engineering turn the agreed workflow into working software.</p></article><article><h3>Help the team use it</h3><p>Training, documentation and review are part of implementation.</p></article></div></section>

      <section className={`${styles.container} ${styles.journey}`} aria-labelledby="journey-title"><header><p className={styles.eyebrow}>OUR JOURNEY</p><h2 id="journey-title">Verified milestones.</h2></header><JourneyTimeline items={journey} /></section>

      <section className={`${styles.container} ${styles.founder}`} id="leadership" aria-labelledby="founder-title"><div className={styles.founderImage}><Image src="/founder-umang-ratani.webp" alt="Dr. CA Umang Ratani" fill sizes="(max-width: 900px) 90vw, 40vw" /></div><div className={styles.founderCopy}><p className={styles.eyebrow}>FOUNDER &amp; LEADER</p><h2 id="founder-title">Dr. CA<br /><em>Umang Ratani</em></h2><h3>Helping Indian businesses adopt AI in a practical and results-driven way.</h3><p>By combining business strategy, financial expertise and technology, Dr. CA Umang Ratani has guided organizations toward smarter operations and sustainable growth.</p><ScrollReveal className={styles.founderTags}><span>Business strategy</span><span>Financial expertise</span><span>Technology</span></ScrollReveal></div></section>

      <section className={styles.directors} id="directors" aria-labelledby="directors-title"><div className={styles.container}><header><p className={styles.eyebrow}>OUR DIRECTORS</p><h2 id="directors-title">The people helping shape<br /><em>our direction.</em></h2></header><ScrollReveal className={styles.directorGrid}>{directors.map((director, index) => <article key={director.id}><div className={styles.directorPhoto}><Image src={director.image} alt={director.imageAlt} fill sizes="(max-width: 760px) 86vw, 36vw" style={{ objectPosition: director.imagePosition }} /></div><div className={styles.directorInfo}><span>0{index + 1} / DIRECTOR</span><h3>{director.name}</h3><p className={styles.directorFocus}>{director.focus}</p><p>{director.paragraphs[0]}</p><ul>{director.expertise.map(item => <li key={item}>{item}</li>)}</ul></div></article>)}</ScrollReveal></div></section>

      <section className={`${styles.container} ${styles.results}`} aria-labelledby="results-title"><header><p className={styles.eyebrow}>WHAT WE CREATE</p><h2 id="results-title">All that matters is<br /><em>real business impact.</em></h2></header><div>{impact.slice(0, 4).map(([name, copy], index) => <article key={name}><span>0{index + 1}</span><h3>{name}</h3><p>{copy}</p></article>)}</div></section>

      <section className={styles.cta} aria-labelledby="cta-title"><div className={styles.container}><p className={styles.eyebrow}>LET’S BUILD WHAT COMES NEXT</p><h2 id="cta-title">Bring us the challenge.<br /><em>We’ll build the intelligent way forward.</em></h2><div><Link className={styles.secondary} href="/contact#contact-form">Contact our team</Link></div></div></section>
    </main>
    <ContactSection homeHref="/" footerOnly />
  </div>;
}
