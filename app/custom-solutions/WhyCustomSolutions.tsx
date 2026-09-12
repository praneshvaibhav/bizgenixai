import styles from './WhyCustomSolutions.module.css';

const benefits = [
  { title: 'Your workflow. Your rules.', copy: 'Fit the system to your workflow instead of changing your workflow for the system.', enquiry: 'a system built around my workflow' },
  { title: 'One connected environment', copy: 'Connect departments, data and tools into one controlled environment.', enquiry: 'connecting my departments, data and tools' },
  { title: 'Less follow-up. More progress.', copy: 'Automate repetitive work and reduce dependency on manual follow-ups.', enquiry: 'automating repetitive work and follow-ups' },
  { title: 'Clarity at every level', copy: 'Create management visibility through real-time dashboards and reports.', enquiry: 'real-time dashboards and reporting' },
  { title: 'Room for what comes next', copy: 'Scale features, users and integrations as the business grows.', enquiry: 'scaling my business systems' },
  { title: 'More control, long term', copy: 'Protect business logic and retain greater control over your technology.', enquiry: 'greater control over my business technology' },
];

export default function WhyCustomSolutions() {
  return <section className={styles.section} id="why-custom-solutions" aria-labelledby="why-title">
    <div className={styles.inner}>
      <div className={styles.header}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>01 / WHY CUSTOM SOLUTIONS?</p>
          <h2 id="why-title">A better fit.<br /><em>A stronger foundation.</em></h2>
        </div>
        <div className={styles.intro}>
          <p>Ready-made software is useful when your processes are standard. But growing businesses often have unique approval chains, reporting needs, customer journeys, data sources and operating rules that generic tools cannot handle properly.</p>
          <p>A custom solution gives your organization the flexibility to build exactly what it needs, integrate existing systems and create a long-term technology foundation instead of <strong>adding more disconnected tools.</strong></p>
        </div>
        <p className={styles.note} aria-hidden="true">Built<span>for Your</span><span>Way</span></p>
      </div>

      <div className={styles.cards}>
        {benefits.map((benefit, index) => <article className={styles.card} key={benefit.title}>
          <div className={styles.illustration} style={{ backgroundPosition: `${(index % 3) * 50}% ${Math.floor(index / 3) * 100}%` }} aria-hidden="true" />
          <div className={styles.content}>
            <span className={styles.number}>0{index + 1}</span>
            <h3>{benefit.title}</h3>
            <p>{benefit.copy}</p>
          </div>
          <a className={styles.arrow} href={`https://wa.me/918200858674?text=${encodeURIComponent(`Hi Bizgenix, I'd like to discuss ${benefit.enquiry}.`)}`} target="_blank" rel="noopener noreferrer" aria-label={`Discuss ${benefit.enquiry}`}><span aria-hidden="true">→</span></a>
        </article>)}
      </div>

      <div className={styles.footer}><p><span>Flexible</span><i aria-hidden="true">/</i><span>Scalable</span><i aria-hidden="true">/</i><span>Built for what’s next</span></p><span className={styles.rule} aria-hidden="true" /></div>
    </div>
  </section>;
}
