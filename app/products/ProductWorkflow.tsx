'use client';

import { useEffect, useRef } from 'react';
import { animateWorkflow } from './animateWorkflow';
import { products } from './content';
import styles from './ProductDetails.module.css';

export default function ProductWorkflow({ product, active }: { product: typeof products[number]; active: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (active && product.id === 'voice-ai' && ref.current) return animateWorkflow(ref.current);
  }, [active, product.id]);

  return <div className={styles.workflow} ref={ref}>
    <div className={styles.workflowHeading}>
      <span className={styles.mark} aria-hidden="true">{product.initial}</span>
      <div><strong>{product.name}</strong><small>AN EXAMPLE WORKFLOW</small></div>
      <span className={styles.status}><i />ACTIVE</span>
    </div>
    <ol>{product.workflow.map((step, index) => <li key={step}>
      <span className={styles.stepNumber}>0{index + 1}</span>
      <div className={styles.stepBody}><p>{step}</p><span className={styles.check} data-workflow-check aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none"><path d="m6 12 4 4 8-9" pathLength="1" strokeDasharray="1" strokeDashoffset="0" /></svg>
      </span></div>
    </li>)}</ol>
    <p className={styles.workflowNote}>Configured around your business rules.</p>
  </div>;
}
