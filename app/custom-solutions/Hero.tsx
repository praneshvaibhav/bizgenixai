import HeroAnimation from './HeroAnimation';
import styles from './Hero.module.css';

const requirementUrl = `https://wa.me/918780671906?text=${encodeURIComponent("Hi Bizgenix, I'd like to discuss a custom AI solution for my business.")}`;
export const strategyUrl = 'https://api.whatsapp.com/send/?phone=918780671906&text=Hi+Bizgenix%2C+I%27d+like+to+have+a+AI+Session+with+Umang+Sir.&type=phone_number&app_absent=0';

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
        <HeroAnimation />
      </div>
    </div>
  </section>;
}
