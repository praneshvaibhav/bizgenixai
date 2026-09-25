'use client';

import { useEffect, useRef, useState } from 'react';
import { observeVisibility } from '../observeVisibility';

export default function PriceCountdown({ from = 35000, to = 14999, duration = 1600 }: { from?: number; to?: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(from);

  useEffect(() => {
    const element = ref.current;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!element || motion.matches) {
      setShown(to);
      return;
    }
    let frame = 0;
    let start: number | null = null;
    let complete = false;
    const tick = (now: number) => {
      if (start === null) start = now;
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setShown(Math.round(from + (to - from) * eased));
      complete = progress === 1;
      if (!complete) frame = requestAnimationFrame(tick);
    };
    const stop = observeVisibility(element, visible => {
      if (!visible || complete) return;
      cancelAnimationFrame(frame);
      start = null;
      frame = requestAnimationFrame(tick);
    });
    return () => {
      stop();
      cancelAnimationFrame(frame);
    };
  }, [duration, from, to]);

  return <span ref={ref}>
    <span aria-hidden="true">{shown.toLocaleString('en-IN')}</span>
    <span style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clipPath: 'inset(50%)', whiteSpace: 'nowrap' }}>{to.toLocaleString('en-IN')}</span>
  </span>;
}
