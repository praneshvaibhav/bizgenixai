'use client';

import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';
import { demoUrl, products } from './content';
import { animateGrowthIntelligence } from './animateGrowthIntelligence';
import styles from './GrowthIntelligenceDetails.module.css';

type IconName = 'chart' | 'people' | 'target' | 'bolt' | 'eye' | 'shield';
function Icon({ name }: { name: IconName }) {
  return <span className={`${styles.icon} ${styles[name]}`} aria-hidden="true">{name === 'bolt' ? 'ϟ' : name === 'shield' ? '✓' : <><i /><i /><i /></>}</span>;
}

const insights: { icon: IconName; title: string; detail: string }[] = [
  { icon: 'chart', title: 'Unified Business View', detail: 'Tally + Operations + Teams' },
  { icon: 'people', title: 'Real-time Insights', detail: 'Know what’s happening' },
  { icon: 'target', title: 'Identify Risks', detail: 'Act before it’s critical' },
  { icon: 'bolt', title: 'Faster Decision Making', detail: 'From data to action' },
];
const metrics: { icon: IconName; value: string; label: string }[] = [
  { icon: 'chart', value: '90%', label: 'Faster Reporting' },
  { icon: 'eye', value: 'Real-time', label: 'Business Visibility' },
  { icon: 'people', value: 'Data Driven', label: 'Better Decisions' },
  { icon: 'shield', value: 'Built for Scale', label: 'Growing Businesses' },
];

export default function GrowthIntelligenceDetails({ active }: { active: boolean }) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const product = products.find(product => product.id === 'growth-intelligence')!;
  useLayoutEffect(() => {
    if (active && sceneRef.current && imageRef.current) return animateGrowthIntelligence(sceneRef.current, imageRef.current);
  }, [active]);

  return <div className={styles.experience}>
    <div className={styles.layout}>
      <div className={styles.copy}>
        <p className={styles.eyebrow}>{product.category}</p>
        <h3>See where <em>growth<br />and cash are stuck.</em></h3>
        <p className={styles.description}>{product.description}</p>
        <a className={styles.cta} href={demoUrl(product.name)} target="_blank" rel="noopener noreferrer">{product.action}<span aria-hidden="true">→</span></a>
      </div>
      <div className={styles.scene} ref={sceneRef}>
        <div className={styles.glow} data-growth-reveal="glow" aria-hidden="true" />
        <figure className={styles.laptop} aria-label="Growth Intelligence dashboard with a unified business workspace and Tally data connection">
          <div className={styles.lid}>
            <span className={styles.camera} aria-hidden="true" />
            <div className={styles.screen}>
              <div className={styles.dashboard} data-growth-reveal="screen">
                <Image ref={imageRef} src="/products/growth-interface-reference.png" alt="Growth Intelligence dashboard: Your operating picture starts with one clean sync." width={1855} height={848} unoptimized loading="eager" className={styles.dashboardImage} />
              </div>
              <span className={styles.reflection} aria-hidden="true" />
            </div>
          </div>
          <div className={styles.base} aria-hidden="true"><span /></div>
          <div className={styles.laptopShadow} aria-hidden="true" />
        </figure>
        <div className={styles.orbit} data-growth-reveal="orbit" aria-hidden="true" />
        <ul className={styles.insights} aria-label="Growth Intelligence benefits">
          {insights.map(insight => <li className={styles.insight} key={insight.title} data-growth-reveal="card"><span className={styles.node} aria-hidden="true" /><Icon name={insight.icon} /><div><strong>{insight.title}</strong><p>{insight.detail}</p></div></li>)}
        </ul>
      </div>
    </div>
    <div className={styles.bottomRow}>
      <dl className={styles.metrics}>{metrics.map(metric => <div key={metric.value}><dt>{metric.label}</dt><dd><Icon name={metric.icon} /><strong>{metric.value}</strong></dd></div>)}</dl>
      <figure className={styles.testimonial}><span aria-hidden="true">“</span><div><blockquote>“Clear data, sharper insights, faster decisions.<br />That’s the difference Growth Intelligence makes.”</blockquote><figcaption>— &nbsp; Bizgenix AI</figcaption></div></figure>
    </div>
  </div>;
}
