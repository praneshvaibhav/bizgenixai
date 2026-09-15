'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { observeVisibility } from '../observeVisibility';

export default function CapabilityReveal({ children, className }: { children: ReactNode; className: string }) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!grid || motion.matches || typeof Element.prototype.animate !== 'function') return;

    let frame = 0;
    let nextStart = 0;
    let stopped = false;
    const cards = Array.from(grid.querySelectorAll('article')).map(card => {
      const animation = card.animate([
        { opacity: 0, transform: 'translateY(32px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ], { duration: 480, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'both' });
      animation.pause();
      return { card, animation, visible: false, started: false, complete: false };
    });

    // Batch intersection callbacks so cards in the same row reveal in DOM order.
    const playVisible = () => {
      frame = 0;
      if (stopped) return;
      const now = performance.now();
      cards.forEach(item => {
        if (item.complete || !item.visible) return;
        if (!item.started) {
          const start = Math.max(now, nextStart);
          item.animation.effect?.updateTiming({ delay: start - now });
          nextStart = start + 520;
          item.started = true;
        }
        item.animation.play();
      });
    };

    const cleanups = cards.map(item => {
      item.animation.onfinish = () => {
        item.complete = true;
        item.animation.cancel();
      };
      return observeVisibility(item.card, visible => {
        item.visible = visible;
        if (stopped || item.complete) return;
        if (!visible) item.animation.pause();
        else if (!frame) frame = requestAnimationFrame(playVisible);
      });
    });

    const finish = () => {
      stopped = true;
      cancelAnimationFrame(frame);
      cards.forEach(item => item.animation.cancel());
    };
    const onMotionChange = () => { if (motion.matches) finish(); };
    motion.addEventListener('change', onMotionChange);
    return () => {
      finish();
      cleanups.forEach(cleanup => cleanup());
      motion.removeEventListener('change', onMotionChange);
    };
  }, []);

  return <div className={className} ref={gridRef}>{children}</div>;
}
