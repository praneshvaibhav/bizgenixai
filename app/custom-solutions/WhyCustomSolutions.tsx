import styles from './WhyCustomSolutions.module.css';

import WindLeaves from './WindLeaves';

const benefits = [
  { title: 'Your workflow. Your rules.', copy: 'Fit the system to your workflow instead of changing your workflow for the system.' },
  { title: 'One connected environment', copy: 'Connect departments, data and tools into one controlled environment.' },
  { title: 'Less follow-up. More progress.', copy: 'Automate repetitive work and reduce dependency on manual follow-ups.' },
  { title: 'Clarity at every level', copy: 'Create management visibility through real-time dashboards and reports.' },
  { title: 'Room for what comes next', copy: 'Scale features, users and integrations as the business grows.' },
  { title: 'More control, long term', copy: 'Protect business logic and retain greater control over your technology.' },
];

export default function WhyCustomSolutions() {
  return <section className={styles.section} id="why-custom-solutions" aria-labelledby="why-title">
    {/* Preserve the supplied composition exactly, excluding its navigation bar.
        The semantic copy below provides accessible text and a readable mobile layout. */}
    <div className={styles.reference} aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/custom-solutions-leafy-reference.png" alt="" width="1815" height="866" decoding="async" />
    </div>
    <div className={styles.content}>
      <div className={styles.intro}>
        <p className={styles.eyebrow}>Built around your business</p>
        <h2 id="why-title">A better fit.<br /><em>A stronger<br />foundation.</em></h2>
        <p className={styles.description}>A custom solution gives your organization the flexibility to build exactly what it needs, integrate existing systems and create a long-term technology foundation.</p>
      </div>
      <div className={styles.cards}>
        {benefits.map((benefit, index) => <article className={styles.card} key={benefit.title}>
          <span className={styles.number}>0{index + 1}</span>
          <div><h3>{benefit.title}</h3><p>{benefit.copy}</p></div>
        </article>)}
      </div>
      <p className={styles.signature}>Stronger today.<br />Brighter tomorrow.</p>
      <p className={styles.foundation}>Built to grow with you</p>
    </div>
    <WindLeaves />
  </section>;
}
