'use client';

import { useState } from 'react';
import styles from './page.module.css';

const learningOptions = [
  {
    number: '01',
    name: 'Scale with AI — Live Event',
    detail: 'Immersive live sessions where business owners and professionals discover practical AI tools, workflows and implementation ideas together.',
    href: 'https://scalewithai.in/',
    action: 'Explore the live event',
    external: true,
  },
  {
    number: '02',
    name: 'Courses',
    detail: 'Hands-on learning paths for AI foundations, prompt engineering, automation, agents and real business applications.',
    href: '#featured-courses',
    action: 'Explore courses',
    external: false,
  },
  {
    number: '03',
    name: 'Corporate Training',
    detail: 'Customized programs that help teams adopt AI responsibly, improve productivity and build shared ways of working.',
    href: '#corporate-training',
    action: 'Explore team training',
    external: false,
  },
];

export default function LearningMap() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.learningMap} aria-label="Choose a way to learn with Bizgenix">
      <svg className={styles.learningPath} viewBox="0 0 1000 120" preserveAspectRatio="none" aria-hidden="true">
        <path className={styles.pathBase} d="M 155 55 H 845" />
        <path className={`${styles.pathActive} ${activeIndex === 0 || activeIndex === 1 ? styles.visiblePath : ''}`} d="M 155 55 H 500" />
        <path className={`${styles.pathActive} ${activeIndex === 1 || activeIndex === 2 ? styles.visiblePath : ''}`} d="M 500 55 H 845" />
      </svg>

      {learningOptions.map((option, index) => {
        const isActive = activeIndex === index;

        return (
          <article
            className={`${styles.learningPoint} ${styles[`learningPoint${index + 1}`]} ${isActive ? styles.activePoint : ''}`}
            key={option.name}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <button
              className={styles.learningNode}
              type="button"
              aria-label={`Show details for ${option.name}`}
              aria-controls={`learning-option-${index}`}
              aria-expanded={isActive}
              onClick={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
            >
              <span>{option.number}</span>
            </button>

            <h2>{option.name}</h2>

            <div
              className={`${styles.learningCard} ${isActive ? styles.activeCard : ''}`}
              id={`learning-option-${index}`}
            >
              <span>{option.number}</span>
              <h3>{option.name}</h3>
              <p>{option.detail}</p>
              <a
                href={option.href}
                target={option.external ? '_blank' : undefined}
                rel={option.external ? 'noopener noreferrer' : undefined}
              >
                {option.action} <span aria-hidden="true">{option.external ? '↗' : '→'}</span>
              </a>
            </div>
          </article>
        );
      })}
    </div>
  );
}
