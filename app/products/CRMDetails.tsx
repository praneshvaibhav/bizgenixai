'use client';

import Image from 'next/image';
import { products } from './content';
import styles from './ProductDetails.module.css';

export default function CRMDetails({}: { active: boolean }) {
  const product = products.find(item => item.id === 'crm')!;

  return <div>
    <div className={styles.lead}>
      <div className={styles.intro}>
        <p className={styles.eyebrow}>{product.category}</p>
        <h3>Every lead visible.<br /><em>Every follow-up on time.</em></h3>
        <p className={styles.description}>{product.description}</p>
        <a className={styles.demo} href="/contact#contact-form">Discuss Bizgenix CRM <span aria-hidden="true">→</span></a>
        <ul className={styles.traits}><li>One customer view</li><li>Clear ownership</li><li>Stronger conversion</li></ul>
      </div>
      <div className={styles.dashboardScene} role="img" aria-label="Bizgenix CRM sidebar customization dashboard">
        <div className={styles.dashboardLaptop}>
          <div className={styles.dashboardLid}><span className={styles.dashboardCamera} /><div className={styles.dashboardScreen}><Image src="/products/crm-dashboard-screen.png" alt="" width={1821} height={864} unoptimized loading="eager" className={styles.dashboardScreenshot} /></div></div>
          <div className={styles.dashboardBase}><span /></div>
          <div className={styles.dashboardShadow} />
        </div>
      </div>
    </div>
    <div className={styles.columns}>
      <div><h4>Key capabilities</h4><p className={styles.columnCaption}>BUILT FOR SALES VISIBILITY</p><ul>{product.capabilities.map(item => <li key={item}>{item}</li>)}</ul></div>
      <div><h4>Common use cases</h4><p className={styles.columnCaption}>ACROSS CUSTOMER WORKFLOWS</p><ul>{product.useCases.map(item => <li key={item}>{item}</li>)}</ul></div>
      <div className={styles.benefits}><h4>What changes</h4><p className={styles.columnCaption}>MEASURABLE BUSINESS IMPACT</p><ul>{product.benefits.map(item => <li key={item}>{item}</li>)}</ul></div>
    </div>
  </div>;
}
