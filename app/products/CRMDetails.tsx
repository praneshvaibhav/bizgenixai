'use client';

import { products } from './content';
import ProductWorkflow from './ProductWorkflow';
import styles from './ProductDetails.module.css';

export default function CRMDetails({ active }: { active: boolean }) {
  const product = products.find(item => item.id === 'crm')!;

  return <div>
    <div className={styles.lead}>
      <div className={styles.intro}>
        <p className={styles.eyebrow}>{product.category}</p>
        <h3>Every lead visible.<br /><em>Every follow-up on time.</em></h3>
        <p className={styles.description}>{product.description}</p>
        <a className={styles.demo} href={product.externalUrl} target="_blank" rel="noopener noreferrer">Open Bizgenix CRM <span aria-hidden="true">→</span></a>
        <ul className={styles.traits}><li>One customer view</li><li>Clear ownership</li><li>Stronger conversion</li></ul>
      </div>
      <ProductWorkflow product={product} active={active} />
    </div>
    <div className={styles.columns}>
      <div><h4>Key capabilities</h4><p className={styles.columnCaption}>BUILT FOR SALES VISIBILITY</p><ul>{product.capabilities.map(item => <li key={item}>{item}</li>)}</ul></div>
      <div><h4>Common use cases</h4><p className={styles.columnCaption}>ACROSS CUSTOMER WORKFLOWS</p><ul>{product.useCases.map(item => <li key={item}>{item}</li>)}</ul></div>
      <div className={styles.benefits}><h4>What changes</h4><p className={styles.columnCaption}>MEASURABLE BUSINESS IMPACT</p><ul>{product.benefits.map(item => <li key={item}>{item}</li>)}</ul></div>
    </div>
  </div>;
}
