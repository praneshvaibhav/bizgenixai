import HeroAnimation from './HeroAnimation';
import styles from './Hero.module.css';

export default function Hero() {
  return <section className={styles.hero} aria-labelledby="custom-title">
    <div className={styles.layout}>
      <div className={styles.copy}>
        <p className={styles.eyebrow}><span aria-hidden="true" />Your business. Your blueprint.</p>
        <h1 id="custom-title"><span>Custom AI Solutions </span><span>Built Around </span><em>Your Business.</em></h1>
        <p className={styles.lead}>Your business is unique, so your technology should not force you into a generic workflow.</p>
        <p className={styles.description}>Bizgenix designs and develops custom AI systems, enterprise applications and business automations that match your processes, teams, customers and growth goals.</p>
        <dl className={styles.metrics} aria-label="Custom solution approach">
          <div><dt>Project Scope</dt><dd>Tailored</dd></div>
          <div><dt>Workflow Design</dt><dd>Business-led</dd></div>
          <div><dt>Success Criteria</dt><dd>Agreed</dd></div>
        </dl>
      </div>
      <div className={styles.visual}>
        <HeroAnimation />
      </div>
    </div>
  </section>;
}
