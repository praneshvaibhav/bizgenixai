import styles from './WhyCustomSolutions.module.css';

const benefits = [
  { icon: '⚙', title: 'Your workflow. Your rules.', copy: 'Fit the system to your workflow instead of changing your workflow for the system.' },
  { icon: '☁', title: 'One connected environment', copy: 'Connect departments, data and tools into one controlled environment.' },
  { icon: '◎', title: 'Less follow-up. More progress.', copy: 'Automate repetitive work and reduce dependency on manual follow-ups.' },
  { icon: '▥', title: 'Clarity at every level', copy: 'Create management visibility through real-time dashboards and reports.' },
  { icon: '✦', title: 'Room for what comes next', copy: 'Scale features, users and integrations as the business grows.' },
  { icon: '◇', title: 'More control, long term', copy: 'Protect business logic and retain greater control over your technology.' },
] as const;

export default function WhyCustomSolutions() {
  return <section className={styles.section} id="why-custom-solutions" aria-labelledby="why-title">
    <div className={styles.backdrop} aria-hidden="true" />
    <div className={styles.layout}>
      <div className={styles.intro}>
        <p className={styles.eyebrow}>Built around your business</p>
        <h2 id="why-title">A better fit.<br /><em>A stronger foundation.</em></h2>
        <p className={styles.description}>A custom solution gives your organization the flexibility to build exactly what it needs, integrate existing systems and create a long-term technology foundation.</p>
      </div>

      <div className={styles.diagram} aria-label="Six advantages connected to your business foundation">
        <div className={styles.signalField} aria-hidden="true" />
        <div className={styles.benefitGrid}>
          {benefits.map((benefit, index) => <article className={styles.card} key={benefit.title}>
            <div className={styles.cardTop}><span className={styles.number}>0{index + 1}</span><span className={styles.icon} aria-hidden="true">{benefit.icon}</span></div>
            <h3>{benefit.title}</h3>
            <p>{benefit.copy}</p>
          </article>)}

          <div className={styles.core} aria-label="Your business supported by people, process and technology">
            <div className={styles.coreHalo} aria-hidden="true" />
            <div className={styles.floatPanelOne} aria-hidden="true">▥</div>
            <div className={styles.floatPanelTwo} aria-hidden="true">☁</div>
            <div className={styles.stack}>
              <div className={styles.business}><span className={styles.businessMark} aria-hidden="true">↗</span><strong>Your<br />Business</strong></div>
              <div className={`${styles.layer} ${styles.people}`}><span>People</span><span>Process</span></div>
              <div className={`${styles.layer} ${styles.technology}`}>Technology</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p className={styles.foundation}><span />Built to grow with you<span /></p>
  </section>;
}
