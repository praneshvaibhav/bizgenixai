'use client';

import { useState, type CSSProperties } from 'react';
import { useAnimationViewport } from '../useAnimationViewport';
import styles from './WindLeaves.module.css';

// Fixed variations keep server/client rendering identical and distribute the breeze.
const leaves = [
  { top: 18, size: 25, duration: 19, delay: -4, sway: 23, flutter: 4.8 },
  { top: 39, size: 19, duration: 23, delay: -15, sway: 34, flutter: 5.6 },
  { top: 63, size: 30, duration: 18, delay: -10, sway: 28, flutter: 4.2 },
  { top: 84, size: 22, duration: 21, delay: -3, sway: 20, flutter: 5.1 },
  { top: 50, size: 27, duration: 25, delay: -20, sway: 40, flutter: 6.3 },
  { top: 72, size: 17, duration: 17, delay: -12, sway: 26, flutter: 4.6 },
  { top: 29, size: 21, duration: 22, delay: -8, sway: 30, flutter: 5.8 },
  { top: 91, size: 29, duration: 26, delay: -18, sway: 18, flutter: 6.5 },
  { top: 57, size: 16, duration: 20, delay: -6, sway: 36, flutter: 4.4 },
  { top: 10, size: 18, duration: 24, delay: -19, sway: 22, flutter: 5.3 },
  { top: 78, size: 24, duration: 19, delay: -16, sway: 32, flutter: 5.9 },
  { top: 45, size: 20, duration: 27, delay: -2, sway: 25, flutter: 6.1 },
];

export default function WindLeaves() {
  const { ref, visible } = useAnimationViewport();
  const [paused, setPaused] = useState(false);

  return <div className={styles.wind} ref={ref} data-playing={visible && !paused}>
    <div className={styles.field} aria-hidden="true">
      {leaves.map((leaf, index) => <span className={styles.traveler} key={index} style={{
        '--top': `${leaf.top}%`,
        '--size': `${leaf.size}px`,
        '--duration': `${leaf.duration}s`,
        '--delay': `${leaf.delay}s`,
        '--sway': `${leaf.sway}px`,
        '--flutter': `${leaf.flutter}s`,
      } as CSSProperties}>
        <span className={styles.sway}><span className={styles.leaf} /></span>
      </span>)}
    </div>
    <button className={styles.control} type="button" onClick={() => setPaused(value => !value)} aria-label={paused ? 'Resume leaf animation' : 'Pause leaf animation'}>
      <span aria-hidden="true">{paused ? '▷' : 'Ⅱ'}</span>
      {paused ? 'Resume leaves' : 'Pause leaves'}
    </button>
  </div>;
}
