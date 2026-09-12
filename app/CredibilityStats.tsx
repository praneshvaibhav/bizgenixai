'use client';

import { useEffect, useState } from 'react';
import { useAnimationViewport } from './useAnimationViewport';

const items = [
  { value: 110, suffix: '+', label: 'Live AI systems behind the team' },
  { value: 2000, suffix: '+', label: 'Business owners trained' },
  { value: 1000, suffix: '+', label: 'Member AI community' },
  { value: 750, prefix: '\u20B9', suffix: '+ Cr', label: 'Cumulative business growth guided' },
  { value: 800, suffix: '+', label: 'Professionals trained in one CMAI session' },
];

// Preserve the reveal sequence for the five remaining cards.
const revealOrder = [1, 4, 0, 2, 3];
const CARD_STAGGER_MS = 90;
const COUNT_DURATION_MS = 2700;

type CounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  active: boolean;
  delay: number;
};

function Counter({ value, prefix = '', suffix = '', active, delay }: CounterProps) {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!active) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(value);
      return;
    }

    let frame = 0;
    let timer: ReturnType<typeof setTimeout>;

    timer = setTimeout(() => {
      const startedAt = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - startedAt) / COUNT_DURATION_MS, 1);
        // Smootherstep starts and finishes gently instead of jumping at either end.
        const eased = progress * progress * progress * (progress * (progress * 6 - 15) + 10);
        const nextValue = Math.round(value * eased);

        setShown((current) => (current === nextValue ? current : nextValue));

        if (progress < 1) frame = requestAnimationFrame(tick);
      };

      frame = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(frame);
    };
  }, [active, delay, value]);

  return <>{prefix}{shown.toLocaleString('en-IN')}{suffix}</>;
}

function StatCard({ item, index }: { item: (typeof items)[number]; index: number }) {
  const { ref, entered } = useAnimationViewport();
  const delay = revealOrder.indexOf(index) * CARD_STAGGER_MS;
  return (
    <div ref={ref} className={`animatedStat ${entered ? 'statStarted' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      <i aria-hidden="true" />
      <strong><Counter {...item} active={entered} delay={delay} /></strong>
      <span>{item.label}</span>
    </div>
  );
}

export default function CredibilityStats() {
  return (
    <div className="stats animatedStats">
      {items.map((item, index) => <StatCard key={item.label} item={item} index={index} />)}
    </div>
  );
}
