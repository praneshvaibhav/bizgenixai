'use client';

import { useEffect, useRef, useState } from 'react';
import { observeVisibility } from './observeVisibility';
import { dashboardMetrics, formatDashboardMetric } from './growthDashboardMetrics';
import styles from './GrowthDashboard.module.css';

export default function GrowthDashboard() {
  const ref = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [progress, setProgress] = useState<number | null>(null);

  useEffect(() => {
    const frameElement = ref.current;
    const image = imageRef.current;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!frameElement || !image || motion.matches) return;
    let frame = 0;
    let elapsed = 0;
    let last: number | null = null;
    let visible = false;
    let decoded = image.complete && image.naturalWidth > 0;
    let decoding = false;
    let complete = false;
    let disposed = false;

    const tick = (now: number) => {
      if (disposed || !visible || complete) return;
      if (last !== null) elapsed += now - last;
      last = now;
      const amount = Math.min(elapsed / 2600, 1);
      complete = amount === 1;
      setProgress(1 - (1 - amount) ** 3);
      if (!complete) frame = requestAnimationFrame(tick);
    };
    const start = () => {
      if (!disposed && visible && decoded && !complete) frame = requestAnimationFrame(tick);
    };
    const stop = observeVisibility(frameElement, inView => {
      visible = inView;
      cancelAnimationFrame(frame);
      last = null;
      if (!visible || complete) return;
      if (decoded) start();
      else if (!decoding) {
        decoding = true;
        image.decode().then(() => { decoded = true; start(); }).catch(() => {
          // Keep the original image if it cannot be decoded for the overlay.
          complete = true;
        });
      }
    });
    const onMotionChange = () => {
      if (!motion.matches) return;
      complete = true;
      cancelAnimationFrame(frame);
      setProgress(null);
    };
    motion.addEventListener('change', onMotionChange);
    return () => {
      disposed = true;
      stop();
      cancelAnimationFrame(frame);
      motion.removeEventListener('change', onMotionChange);
    };
  }, []);

  return (
    <figure ref={ref} className={`growthDashboard ${styles.frame}`}>
      {/* The supplied screenshot stays intact underneath the temporary counters. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img ref={imageRef} src="/growth-intelligence-dashboard.jpeg" alt="Growth Intelligence dashboard showing business decisions and financial metrics" width={1600} height={788} loading="lazy" decoding="async" />
      {progress !== null && progress < 1 && (
        <div className={styles.overlays} aria-hidden="true">
          {dashboardMetrics.map(metric => (
            <span key={metric.label} className={styles.metric} style={{
              left: `${metric.x / 16}%`, top: `${metric.y / 7.88}%`,
              width: `${metric.width / 16}%`, height: `${metric.height / 7.88}%`,
              fontSize: `${metric.fontSize / 16}cqw`,
              fontFamily: metric.font ?? '"Courier New", monospace',
              fontWeight: metric.weight ?? 700,
              color: metric.color ?? '#000000', background: metric.background ?? '#FFFFFF',
            }}>{formatDashboardMetric(metric, progress)}</span>
          ))}
        </div>
      )}
      <figcaption className={styles.accessible}>
        {dashboardMetrics.map(metric => `${metric.label}: ${formatDashboardMetric(metric, 1)}`).join('. ')}.
      </figcaption>
    </figure>
  );
}
