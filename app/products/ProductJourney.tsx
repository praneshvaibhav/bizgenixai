'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import { journey } from './content';
import { animateProductJourney } from './animateProductJourney';
import styles from './ProductJourney.module.css';

export default function ProductJourney() {
  const flowRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [replay, setReplay] = useState(0);
  useLayoutEffect(() => {
    if (flowRef.current) return animateProductJourney(flowRef.current);
  }, [replay]);

  return <section className={styles.section} id="implementation-journey" aria-labelledby="journey-title">
    <div className={styles.container}>
      <div className={styles.heading}>
        <div><p className={styles.eyebrow}>04 / FROM FIRST CONVERSATION TO EVERYDAY VALUE</p><h2 id="journey-title">A clear path<br /><em>from idea to impact.</em></h2></div>
        <p>Your implementation plan is scoped around the product, integrations, data readiness and customization you need.</p>
      </div>
      <div className={styles.flowToolbar}><span className={styles.scrollHint}>Swipe to follow the steps <span aria-hidden="true">→</span></span><button className={styles.replay} type="button" onClick={() => { if (scrollerRef.current) scrollerRef.current.scrollLeft = 0; setReplay(value => value + 1); }}><span aria-hidden="true">↻</span> Replay flow</button></div>
      <div className={styles.scroller} ref={scrollerRef} tabIndex={0} role="region" aria-label="Implementation journey, scroll horizontally to explore all seven steps">
        <div className={styles.flow} ref={flowRef}>
          <div className={styles.track} aria-hidden="true"><div className={styles.liquid} data-journey-liquid /></div>
          <ol className={styles.steps}>{journey.map(([name, copy], index) => <li key={name}>
            <div className={styles.point} aria-hidden="true"><span className={styles.pointLiquid} data-journey-point /><span className={styles.pointNumber} data-journey-number>0{index + 1}</span></div>
            <div className={styles.stem} aria-hidden="true"><span data-journey-stem /></div>
            <div className={styles.card} data-journey-card><span className={styles.cardStep}>STEP 0{index + 1}</span><h3>{name}</h3><p>{copy}</p><span className={styles.cardAccent} aria-hidden="true" /></div>
          </li>)}</ol>
        </div>
      </div>
    </div>
  </section>;
}
