'use client';

import { useEffect, useRef } from 'react';
import styles from './OurProcess.module.css';
import { observeVisibility } from './observeVisibility';

const steps = [
  'Discover the business and workflow',
  'Identify the operational or revenue leak',
  'Prioritize the highest-ROI use case',
  'Build and demonstrate a working prototype',
  'Develop the complete solution and integrations',
  'Deploy, train the team and document the process',
  'Measure adoption, results and next opportunities',
];

export default function OurProcess() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const viewport = viewportRef.current;
    const line = lineRef.current;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!viewport || !line || motion.matches || !('IntersectionObserver' in window) || !('animate' in Element.prototype)) return;

    const stops: (() => void)[] = [];
    const animations = Array.from(viewport.querySelectorAll<HTMLElement>('li')).map((step, index) => {
      const animation = step.animate([
        { opacity: 0, translate: '-28px 0' },
        { opacity: 1, translate: '0 0' },
      ], { duration: 600, delay: index * 300, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'both' });
      animation.pause();
      let finished = false;
      animation.onfinish = () => { finished = true; animation.cancel(); };
      stops.push(observeVisibility(step, visible => {
        if (finished) return;
        if (visible) animation.play();
        else animation.pause();
      }));
      return animation;
    });
    const lineAnimation = line.animate([
      { transform: 'scaleX(0)' },
      { transform: 'scaleX(1)' },
    ], { duration: (steps.length - 1) * 300, delay: 100, easing: 'linear', fill: 'both' });
    lineAnimation.pause();
    let lineFinished = false;
    lineAnimation.onfinish = () => { lineFinished = true; lineAnimation.cancel(); };
    animations.push(lineAnimation);

    stops.push(observeVisibility(viewport, visible => {
      if (lineFinished) return;
      if (visible) lineAnimation.play();
      else lineAnimation.pause();
    }));
    const showAll = () => { stops.forEach(stop => stop()); animations.forEach(animation => animation.cancel()); };
    const onMotionChange = () => { if (motion.matches) showAll(); };
    motion.addEventListener('change', onMotionChange);
    return () => { showAll(); motion.removeEventListener('change', onMotionChange); };
  }, []);

  return (
    <section className={styles.section} id="implementation-path" aria-labelledby="process-title">
      <h2 id="process-title">Our Process</h2>
      <div className={styles.viewport} ref={viewportRef} tabIndex={0} role="region" aria-label="Our seven-step process. Scroll horizontally to see all steps.">
        <div className={styles.track}>
          <div className={styles.line} aria-hidden="true"><span ref={lineRef} /></div>
          <ol className={styles.steps}>
            {steps.map((step, index) => <li key={step}>
              <span className={styles.number} aria-hidden="true">0{index + 1}</span>
              <p>{step}</p>
            </li>)}
          </ol>
        </div>
      </div>
      <p className={styles.hint}>Swipe or scroll to follow the process <span aria-hidden="true">→</span></p>
    </section>
  );
}
