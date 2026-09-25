'use client';

import { useEffect, useRef, useState } from 'react';
import { observeVisibility } from './observeVisibility';
import styles from './CountUp.module.css';

export default function CountUp({ value, suffix = '+', duration = 2200 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const element = ref.current;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!element || motion.matches) {
      setShown(value);
      return;
    }
    let frame = 0;
    let elapsed = 0;
    let last: number | null = null;
    let complete = false;

    const tick = (now: number) => {
      if (last !== null) elapsed += now - last;
      last = now;
      const progress = Math.min(elapsed / duration, 1);
      setShown(Math.round(value * (1 - (1 - progress) ** 3)));
      complete = progress === 1;
      if (!complete) frame = requestAnimationFrame(tick);
    };
    const stop = observeVisibility(element, visible => {
      cancelAnimationFrame(frame);
      last = null;
      if (visible && !complete) frame = requestAnimationFrame(tick);
    });
    const onMotionChange = () => {
      if (!motion.matches) return;
      cancelAnimationFrame(frame);
      complete = true;
      setShown(value);
    };
    motion.addEventListener('change', onMotionChange);
    return () => {
      stop();
      cancelAnimationFrame(frame);
      motion.removeEventListener('change', onMotionChange);
    };
  }, [value, duration]);

  return (
    <strong ref={ref} className={styles.counter}>
      <span className={styles.value} aria-hidden="true">{shown.toLocaleString('en-IN')}{suffix}</span>
      <span className={styles.accessible}>{value.toLocaleString('en-IN')}{suffix}</span>
    </strong>
  );
}
