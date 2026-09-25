'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import styles from './page.module.css';

type JourneyItem = readonly [year: string, name: string, detail: string];

export default function JourneyTimeline({ items }: { items: readonly JourneyItem[] }) {
  const listRef = useRef<HTMLOListElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotion.matches) return;
    if (typeof IntersectionObserver === 'undefined') {
      const frame = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setVisible(true);
      observer.disconnect();
    }, { threshold: 0.18 });

    observer.observe(list);
    return () => observer.disconnect();
  }, []);

  return (
    <ol ref={listRef} className={styles.journeyTimeline} data-visible={visible}>
      {items.map(([year, name, detail], index) => (
        <li key={year} style={{ '--journey-index': index } as CSSProperties}>
          <span className={styles.timelineIndex}>0{index + 1}</span>
          <strong>{year}</strong>
          <h3>{name}</h3>
          <p>{detail}</p>
        </li>
      ))}
    </ol>
  );
}
