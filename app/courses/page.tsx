import type { Metadata } from 'next';
import Image from 'next/image';
import Navigation from '../custom-solutions/Navigation';
import ContactSection from '../ContactSection';
import ScaleWithAI from '../ScaleWithAI';
import CountUp from '../CountUp';
import CourseProgramSection from './CourseProgramSection';
import LearningMap from './LearningMap';
import LearningPageAnimator from './LearningPageAnimator';
import { communityUrl, corporateUrl, corporateTopics, courseFaqs, enquire } from './content';
import styles from './page.module.css';

const title = 'Practical AI Courses, Workshops & Corporate Training | Bizgenix';
const description = 'Learn AI, prompt engineering, automation, AI agents, Voice AI and business intelligence through practical Bizgenix courses for owners, professionals, students and corporate teams.';
export const metadata: Metadata = { title, description, alternates: { canonical: '/courses' }, openGraph: { title, description, type: 'website' }, twitter: { card: 'summary', title, description } };

const corporateTrainingGallery = [
  { file: 'SJ Sangath, Gift city.jpeg', title: 'Corporate AI Enablement', location: 'GIFT City', format: 'Team workshop' },
  { file: 'AICA, Surat.png', title: 'AICA Level 1', location: 'Surat', format: 'Full-day AI workshop' },
  { file: 'ICAI AICA, Gandhinagar.png', title: 'ICAI AICA', location: 'Gandhinagar', format: 'Professional learning' },
  { file: 'CMAI.png', title: 'AI Leadership Session', location: 'CMAI', format: 'Industry workshop' },
  { file: 'AI for CAs, jamnagar.png', title: 'AI for Chartered Accountants', location: 'Jamnagar', format: 'Professional training' },
  { file: 'Amog group.png', title: 'AI Business Summit', location: 'Gurugram', format: 'Leadership forum' },
  { file: 'Lialac Insight group .png', title: 'Applied AI at Work', location: 'Lilac Insights', format: 'Team training' },
];

export default function CoursesPage() {
  return <div className={styles.page} id="top">
    <a className={styles.skipLink} href="#courses-main">Skip to content</a>
    <Navigation activePath="/courses" theme="light" />
    <main id="courses-main">
      <LearningPageAnimator />
      <section className={styles.hero} aria-labelledby="courses-title"><div className={`${styles.container} ${styles.heroLayout}`} data-learning-reveal>
        <div className={styles.heroCopy}><h1 id="courses-title">Learn AI that solves <em>real business problems.</em></h1><p className={styles.heroLead}>Practical skills. Real tools. Possibilities you can put to work.</p><p className={styles.description}>Build practical AI, automation and business transformation skills through hands-on courses designed for business owners, professionals, students and corporate teams.</p></div>
        <LearningMap />
      </div></section>
      <section className={styles.proof} aria-label="Bizgenix learning in numbers"><dl className={styles.container} data-learning-reveal><div><dt>Professionals & business owners trained</dt><dd><CountUp value={2000} /></dd></div><div><dt>AI community members</dt><dd><CountUp value={1000} /></dd></div><div><dt>Live AI systems built</dt><dd><CountUp value={110} /></dd></div><div><dt>Ahmedabad, Surat, Mumbai · Vadodara upcoming</dt><dd>Multiple cities</dd></div></dl></section>
      <ScaleWithAI />
      <CourseProgramSection />
      <section className={`${styles.section} ${styles.container}`} id="corporate-training" aria-labelledby="corporate-title"><h2 className={styles.majorSectionTitle} id="corporate-title" data-learning-reveal>Corporate Training</h2><div className={styles.corporatePanel} data-learning-reveal><div className={styles.splitHeading}><p className={styles.eyebrow}>CORPORATE AI TRAINING</p><h3>Stronger teams.<br /><em>Smarter ways to work.</em></h3><p>Customized training that helps your organization improve productivity, accelerate AI adoption and build common standards across teams.</p><div className={styles.formatTags}><span>Online</span><span>At your office</span><span>Hybrid</span></div><a className={styles.primary} href={corporateUrl} target="_blank" rel="noopener noreferrer">Discuss your team’s training <span aria-hidden="true">↗</span></a></div><div className={styles.corporateTopics}><p>BUILT AROUND YOUR BUSINESS</p><ul className={styles.checkList}>{corporateTopics.map(point => <li key={point}><span aria-hidden="true">✓</span>{point}</li>)}</ul></div></div></section>
      <section className={styles.corporateGallerySection} aria-labelledby="training-gallery-title"><div className={`${styles.galleryIntro} ${styles.container}`} data-learning-reveal><div><p className={styles.eyebrow}>TRAINING IN ACTION</p><h2 id="training-gallery-title">Real teams. Real rooms.<br /><em>Practical AI learning.</em></h2></div><p>From focused team sessions to large professional forums, our programs turn AI awareness into confident, practical application.</p></div><div className={styles.galleryViewport}><div className={styles.corporateGallery}>{[false, true].map(clone => <div className={styles.galleryGroup} aria-hidden={clone || undefined} key={clone ? 'duplicate' : 'original'}>{corporateTrainingGallery.map(item => <figure className={styles.trainingCard} key={`${clone ? 'duplicate-' : ''}${item.file}`}><Image src={`/corporate training/${item.file}`} alt={clone ? '' : `${item.title} corporate AI training session in ${item.location}`} width={900} height={1200} sizes="(max-width: 600px) 75vw, (max-width: 900px) 42vw, 22vw" /><figcaption><span>{item.format}</span><div><strong>{item.title}</strong><small>{item.location}</small></div></figcaption></figure>)}</div>)}</div></div></section>
      <section className={styles.softSection} id="course-faqs" aria-labelledby="faq-title"><div className={`${styles.section} ${styles.container} ${styles.faqLayout}`} data-learning-reveal><div className={styles.splitHeading}><p className={styles.eyebrow}>A FEW THINGS YOU MAY BE WONDERING</p><h2 id="faq-title">Good questions.<br /><em>Clear answers.</em></h2><p>Need help choosing a course or planning training for your team?</p><a className={styles.primary} href={enquire('Bizgenix AI courses and learning paths')} target="_blank" rel="noopener noreferrer">Talk to our team <span aria-hidden="true">↗</span></a></div><div className={styles.faqList}>{courseFaqs.map(([question, answer], index) => <details key={question} name="course-questions" open={index === 0}><summary><span className={styles.faqNumber}>0{index + 1}</span>{question}<span className={styles.faqToggle} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></div></section>
      <section className={styles.finalCta} id="contact" aria-labelledby="course-contact-title"><div className={styles.container} data-learning-reveal><p className={styles.eyebrow}>YOUR NEXT CHAPTER STARTS HERE</p><h2 id="course-contact-title">Start your<br /><em>practical AI journey.</em></h2><p>Whether you want to automate your business, improve professional productivity, prepare for the future or train your team, Bizgenix has a practical learning path for you.</p><div className={styles.actions}><a className={styles.secondary} href={communityUrl} target="_blank" rel="noopener noreferrer">Join the AI Community <span aria-hidden="true">↗</span></a><a className={styles.textLink} href={corporateUrl} target="_blank" rel="noopener noreferrer">Book Corporate Training <span aria-hidden="true">↗</span></a></div></div></section>
    </main><ContactSection homeHref="/" footerOnly />
  </div>;
}
