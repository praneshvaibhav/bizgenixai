import Image from 'next/image';
import styles from './Hero.module.css';

const requirementUrl = `https://wa.me/918200858674?text=${encodeURIComponent("Hi Bizgenix, I'd like to discuss a custom AI solution for my business.")}`;
const strategyUrl = `https://wa.me/918200858674?text=${encodeURIComponent("Hi Bizgenix, I'd like to book a Free AI Strategy Session.")}`;

export default function Hero() {
  return <section className={styles.hero} aria-labelledby="custom-title">
    <div className={styles.layout}>
      <div className={styles.copy}>
        <p className={styles.eyebrow}><span aria-hidden="true" />Your business. Your blueprint.</p>
        <h1 id="custom-title"><span>Custom AI Solutions </span><span>Built Around </span><em>Your Business.</em></h1>
        <p className={styles.lead}>Your business is unique, so your technology should not force you into a generic workflow.</p>
        <p className={styles.description}>Bizgenix designs and develops custom AI systems, enterprise applications and business automations that match your processes, teams, customers and growth goals.</p>
        <div className={styles.actions}>
          <a className={styles.primary} href={requirementUrl} target="_blank" rel="noopener noreferrer">Discuss Your Requirement <span aria-hidden="true">↗</span></a>
          <a className={styles.secondary} href={strategyUrl} target="_blank" rel="noopener noreferrer">Book a Free AI Strategy Session <span aria-hidden="true">↗</span></a>
        </div>
        <dl className={styles.metrics} aria-label="Bizgenix business impact">
          <div><dt>Businesses Transformed</dt><dd>50+</dd></div>
          <div><dt>Average Productivity Gain</dt><dd>3x</dd></div>
          <div><dt>Client Satisfaction</dt><dd>95%</dd></div>
        </dl>
      </div>
      <div className={styles.visual}>
        <Image className={styles.artwork} src="/custom-solutions-hero.webp" alt="A green glass cube representing your business, connecting your people, processes, data and customers with Custom AI, CRM and ERP, and automation." width={1448} height={1086} sizes="(max-width: 900px) 100vw, 64vw" priority unoptimized />
      </div>
    </div>
  </section>;
}
