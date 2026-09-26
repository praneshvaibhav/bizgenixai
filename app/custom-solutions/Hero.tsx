import HeroAnimation from './HeroAnimation';
import Link from '../InternalLink';
import styles from './Hero.module.css';

export default function Hero() {
  return <section className={styles.hero} aria-labelledby="custom-title">
    <div className={styles.layout}>
      <div className={styles.copy}>
        <p className={styles.eyebrow}><span aria-hidden="true" />Your business. Your blueprint.</p>
        <h1 id="custom-title"><span>When standard software </span><span>doesn&apos;t fit, </span><em>we build around you.</em></h1>
        <p className={styles.lead}>From enquiry and follow-up to operations, approvals and reporting.</p>
        <p className={styles.description}>We map how your business works, prove the highest-value fix with a working prototype, then build the agreed system around your people, data and tools.</p>
        <div className={styles.actions}><Link className={styles.primary} href="/contact?interest=Custom%20solution#contact-form">Discuss Your Workflow <span aria-hidden="true">→</span></Link><Link className={styles.secondary} href="/case-studies">See Client Implementations <span aria-hidden="true">→</span></Link></div>
        <dl className={styles.metrics} aria-label="Bizgenix business impact">
          <div><dt>AI systems built</dt><dd>110+</dd></div>
          <div><dt>Businesses implemented</dt><dd>60+</dd></div>
          <div><dt>Published case studies</dt><dd>18</dd></div>
        </dl>
      </div>
      <div className={styles.visual}>
        <HeroAnimation />
      </div>
    </div>
  </section>;
}
