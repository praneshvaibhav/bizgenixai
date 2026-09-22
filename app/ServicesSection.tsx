import Link from 'next/link';
import type { CSSProperties } from 'react';
import styles from './ServicesSection.module.css';

const services = [
  {
    title: 'Custom Solution',
    description: 'AI systems and automations built around your business, processes and team.',
    href: '/custom-solutions',
    action: 'Explore custom solutions',
  },
  {
    title: 'Product',
    description: 'Ready-to-use AI products that simplify work and help your business grow.',
    href: '/products',
    action: 'Explore products',
  },
  {
    title: 'Learning',
    description: 'Practical AI courses and workshops for professionals and business teams.',
    href: '/courses',
    action: 'Explore Learning',
  },
];

export default function ServicesSection() {
  return (
    <section className={`section ${styles.section}`} id="services" aria-labelledby="services-title">
      <div className={styles.inner}>
        <h2 id="services-title">Services we provide</h2>
        <div className={styles.cards}>
          {services.map((service, index) => (
            <Link
              className={styles.card}
              href={service.href}
              key={service.href}
              data-scroll-animation
              style={{ '--service-delay': `${index * 160}ms` } as CSSProperties}
            >
              <span className={styles.number} aria-hidden="true">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className={styles.action}>{service.action}<span aria-hidden="true">↗</span></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
