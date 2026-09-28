import Link from './InternalLink';
import type { CSSProperties } from 'react';
import styles from './ServicesSection.module.css';

const services = [
  {
    title: 'Fix a business problem',
    description: 'Enquiries missed after 7 pm? MIS rebuilt in Excel every month? Payments nobody chased? We map the workflow and build around it.',
    href: '/custom-solutions',
    action: 'Discuss your workflow',
  },
  {
    title: 'Use a ready AI product',
    description: 'Growth Intelligence for Tally visibility, plus CRM, ScaleOS, Voice AI and BizChat.',
    href: '/products',
    action: 'Explore products',
  },
  {
    title: "Build your team's AI skills",
    description: 'Live events, the 12-week programme and corporate training.',
    href: '/courses',
    action: 'Explore learning',
  },
];

export default function ServicesSection() {
  return (
    <section className={`section ${styles.section}`} id="services" aria-labelledby="services-title">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Start with what needs to improve</p>
        <h2 id="services-title">What would you like to improve?</h2>
        <div className={styles.cards}>
          {services.map((service, index) => (
            <Link
              className={styles.card}
              href={service.href}
              key={service.href}
              data-scroll-animation
              style={{ '--service-delay': `${index * 160}ms` } as CSSProperties}
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className={styles.action}>{service.action}<span aria-hidden="true">→</span></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
