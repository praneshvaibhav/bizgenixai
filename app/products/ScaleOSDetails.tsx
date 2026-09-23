'use client';

import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';
import { demoUrl, products } from './content';
import { animateScaleOS } from './animateScaleOS';
import styles from './ScaleOSDetails.module.css';

type IconName = 'check' | 'list' | 'people' | 'chart' | 'bolt' | 'eye';
function Icon({ name }: { name: IconName }) {
  return <span className={`${styles.icon} ${styles[name]}`} aria-hidden="true">{name === 'check' ? '✓' : name === 'bolt' ? 'ϟ' : <><i /><i /><i /></>}</span>;
}

const features: { icon: IconName; title: string; description: string }[] = [
  { icon: 'people', title: 'Bring teams together', description: 'People, tasks & processes in one place' },
  { icon: 'bolt', title: 'Reduce delays', description: 'Faster approvals and execution' },
  { icon: 'eye', title: 'Get real-time visibility', description: 'See what’s happening across teams' },
  { icon: 'chart', title: 'Built for growth', description: 'Scales with your business' },
];
const workflow: { icon: IconName; label: string }[] = [
  { icon: 'check', label: 'Assign Ownership' },
  { icon: 'list', label: 'Track Progress' },
  { icon: 'people', label: 'Review & Approve' },
  { icon: 'chart', label: 'Gain Visibility' },
];
const metrics = [['50%', 'Faster Approvals'], ['3x', 'Team Productivity'], ['100%', 'Operational Visibility'], ['Built to Scale', 'For Growing Businesses']];
const navGroups = [
  ['OVERVIEW', 'Home'], ['SALES', 'Pipeline', 'Proposals'], ['CLIENTS', 'Clients', 'Checklists'], ['WORK', 'Tasks', 'Boards', 'Approvals', 'Projects', 'Teams', 'Reports'],
];

/** A decorative, live-text dashboard inside the laptop, matching the supplied reference. */
function Dashboard() {
  return <div className={styles.dashboard}>
    <div className={styles.sidebar}>
      <div className={styles.brand}><span className={styles.brandMark}>S</span><div><strong>ScaleOS</strong><small>BIZGENIX AI</small></div></div>
      <div className={styles.addTask}>＋ Add task</div>
      {navGroups.map(([group, ...items]) => <div className={styles.navGroup} key={group}><small>{group}</small>{items.map(item => <div key={item} className={item === 'Home' ? styles.selectedNav : undefined}><span>▧</span>{item}</div>)}</div>)}
    </div>
    <div className={styles.desktop}>
      <div className={styles.topbar}><div><strong>My day</strong><small>YOUR WORKDAY AT A GLANCE</small></div><span className={styles.search}>⌕ &nbsp; Search clients, deals, work or people</span><span className={styles.notifications}>♧ &nbsp; ◉</span><span className={styles.avatar}>YN</span></div>
      <div className={styles.greeting}><div><small>YOUR OPERATING DAY</small><strong>Good afternoon, Your Name.</strong><p>0 tasks · 0 follow-ups · 0 checklist items today.</p></div><div className={styles.due}><small>ONE NUMBER TO WATCH</small><strong>0</strong><p>due today or earlier</p></div></div>
      <div className={styles.toolbar}><span>＋ Add task</span><span>◉ Break</span><span>◉ Check out</span><span>▣ Add follow-up</span><span>◉ WhatsApp reminder</span></div>
      <div className={styles.dashboardMetrics}>{[['Tasks due today', 'none overdue'], ['Follow-ups due', 'today or earlier'], ['Done this week', 'since Monday'], ['Active pipeline', 'opportunities']].map(([label, note]) => <div key={label}><span>◉</span><div><small>{label}</small><strong>0</strong><p>{note}</p></div></div>)}</div>
      <div className={styles.dashboardBottom}>
        <div className={styles.queue}><div className={styles.cardHeading}><strong>Your queue</strong><span>All my tasks →</span></div><small>Tasks and follow-ups due today or earlier</small><div className={styles.emptyQueue}><span>▤</span><p>Nothing due today. Plan ahead in <b>Tasks.</b></p></div></div>
        <div className={styles.activityColumn}><div className={styles.quickActions}><strong>Quick actions</strong><div>{[['＋', 'Add task'], ['▣', 'Add follow-up'], ['☎', 'Log call'], ['▤', 'Create note']].map(([symbol, label]) => <div key={label}><span>{symbol}</span><small>{label}</small></div>)}</div></div><div className={styles.activity}><div className={styles.cardHeading}><strong>Recent activity</strong><span>View all →</span></div><p>No recent activity yet.<br />Your updates will appear here.</p></div></div>
      </div>
    </div>
  </div>;
}

export default function ScaleOSDetails({ active }: { active: boolean }) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const product = products.find(product => product.id === 'scaleos')!;
  useLayoutEffect(() => {
    if (active && sceneRef.current) return animateScaleOS(sceneRef.current);
  }, [active]);

  return <div className={styles.experience}>
    <div className={styles.layout}>
      <div className={styles.copy}>
        <p className={styles.eyebrow}>{product.category}</p>
        <h3>One connected system.<br /><em>Clearer execution.</em></h3>
        <p className={styles.description}>{product.description}</p>
        <a className={styles.cta} href={demoUrl(product.name)} target="_blank" rel="noopener noreferrer">{product.action}<span aria-hidden="true">→</span></a>
      </div>
      <div className={styles.scene} ref={sceneRef} role="img" aria-label="ScaleOS laptop dashboard connecting task ownership, progress tracking, approvals and business visibility">
        <div className={styles.sceneContents} aria-hidden="true">
          <div className={styles.glow} data-scale-reveal="glow" />
          <div className={styles.orbit} data-scale-reveal="orbit" />
          <div className={styles.laptopEntrance} data-scale-reveal="laptop">
            <div className={styles.laptop}>
              <div className={styles.lid}><span className={styles.camera} /><div className={styles.screen}><div className={styles.screenContent} data-scale-reveal="screen"><Image src="/products/scaleos-dashboard-screen.png" alt="" width={1864} height={844} unoptimized loading="eager" className={styles.dashboardImage} /></div><div className={styles.reflection} /></div></div>
              <div className={styles.base}><span className={styles.notch} /><span className={styles.vents}>▪▪▪▪▪</span></div>
              <div className={styles.laptopShadow} />
            </div>
          </div>
          <div className={styles.workflow}>{workflow.map(item => <div className={styles.workflowCard} key={item.label} data-scale-reveal="card"><Icon name={item.icon} /><strong>{item.label}</strong></div>)}</div>
          <div className={styles.signaturePosition} data-scale-reveal="signature"><p className={styles.signature}><span>People</span>{' '}<span>Processes</span>{' '}<span>Progress</span></p></div>
        </div>
      </div>
      <ul className={styles.features}>{features.map(feature => <li key={feature.title}><Icon name={feature.icon} /><strong>{feature.title}</strong><p>{feature.description}</p></li>)}</ul>
    </div>
    <div className={styles.bottomRow}>
      <dl className={styles.metrics}>{metrics.map(([value, label]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
      <figure className={styles.testimonial}><span aria-hidden="true">“</span><div><blockquote>“From tasks to approvals, everything in one place.<br />ScaleOS keeps our business moving.”</blockquote><figcaption>— Growing Business, India</figcaption></div></figure>
    </div>
  </div>;
}
