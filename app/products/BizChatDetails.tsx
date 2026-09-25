'use client';

import { useEffect, useRef } from 'react';
import { products } from './content';
import { animateBizChat } from './animateBizChat';
import common from './ProductDetails.module.css';
import styles from './BizChatDetails.module.css';

const features = [
  ['chat', 'Customer Enquiries'], ['settings', 'Automated Responses'],
  ['calendar', 'Bookings & Reminders'], ['team', 'Team Assignment'],
  ['chart', 'Track Conversations'], ['link', 'Integrate with your Tools'],
] as const;

const paths = {
  chat: 'M21 11.5a8.5 8.5 0 0 1-8.5 8.5H5l-3 2 1.5-5A8.5 8.5 0 1 1 21 11.5ZM8 10h.01M12 10h.01M16 10h.01',
  settings: 'm10 3-1 3-3 1-2 3 2 2-1 3 3 2 3-1 2 2 3-1 1-3 3-1v-4l-3-1-1-3h-4ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
  calendar: 'M5 5h14v16H5ZM8 2v6M16 2v6M5 10h14M8 14h2M14 14h2M8 17h2M14 17h2',
  team: 'M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM4 21v-3a8 8 0 0 1 16 0v3ZM18 4a3 3 0 0 1 0 6M21 14l1 6M6 4a3 3 0 0 0 0 6M3 14l-1 6',
  chart: 'M4 21V12h3v9ZM11 21V7h3v14ZM18 21V3h3v18Z',
  link: 'm9 15 6-6M8 17l-1 1a4 4 0 0 1-6-6l5-5a4 4 0 0 1 6 0M16 7l1-1a4 4 0 0 1 6 6l-5 5a4 4 0 0 1-6 0',
  bolt: 'm14 2-9 12h6l-1 8 9-12h-6Z',
  briefcase: 'M3 7h18v14H3ZM8 7V3h8v4M3 12l9 4 9-4M10 13h4',
  phone: 'M6 3 3 6c0 7 8 15 15 15l3-3-5-4-3 3-6-6 3-3Z',
} as const;
function Icon({ name }: { name: keyof typeof paths }) {
  return <svg viewBox="0 0 26 26" fill="none" aria-hidden="true"><path d={paths[name]} stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function PhoneScreen() {
  return <div className={styles.phoneFrame}>
    <div className={styles.phoneHeader}><span className={styles.chatLogo}><Icon name="phone" /></span><div><strong>BizChat <span>✹</span></strong><small>Online</small></div></div>
    <div className={styles.messages}>
      <div className={styles.incoming}>Hi! I&apos;d like to know more<br />about your services.<small>10:24</small></div>
      <div className={styles.outgoing}>Thanks for reaching out!<br />Here are our services:<small>10:24 ✓✓</small>
        <div className={styles.chatOptions}><span>View Services <b>›</b></span><span>Book a Demo <b>›</b></span><span>Talk to Support <b>›</b></span></div>
      </div>
      <div className={styles.incoming}>Great! I&apos;d like to book a demo.<small>10:25</small></div>
      <div className={styles.outgoing}>Perfect! Here&apos;s a time slot<br />that works for you:<small>10:25 ✓✓</small></div>
    </div>
    <div className={styles.composer}><span>＋</span><div>Type a message...<span>☺</span></div><b>➤</b></div>
  </div>;
}

export default function BizChatDetails({ active }: { active: boolean }) {
  const product = products.find(product => product.id === 'bizchat')!;
  const sceneRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (active && sceneRef.current) return animateBizChat(sceneRef.current);
  }, [active]);

  return <div className={styles.experience}>
    <div className={styles.lead}>
      <div className={styles.intro}>
        <p className={styles.eyebrow}>{product.category}</p>
        <h3>Every conversation <br />moves your<br /><em>business forward.</em></h3>
        <p className={styles.description}>{product.description}</p>
        <a className={styles.cta} href="/contact#contact-form">{product.action}<span aria-hidden="true">→</span></a>
        <ul className={styles.traits}><li>Automate at scale</li><li>Improve response time</li><li>Turn conversations into results</li></ul>
      </div>
      <figure className={styles.figure}>
        <div className={styles.scene} ref={sceneRef} aria-hidden="true">
          <svg className={styles.connections} viewBox="0 0 600 500" fill="none" preserveAspectRatio="none">
            {['M180 170C135 170 180 100 120 100','M180 260C135 260 170 245 120 245','M180 335C145 335 175 395 120 395','M420 215C455 215 435 145 480 145','M420 280C455 280 445 280 480 280','M420 350C455 350 440 415 480 415'].map(d => <path key={d} d={d} data-message-line />)}
          </svg>
          <div className={styles.phone} data-phone>
            <div className={styles.phoneTop} data-phone-half><PhoneScreen /></div>
            <div className={styles.phoneBottom} data-phone-half><PhoneScreen /></div>
          </div>
          <div className={styles.featureCards}>{features.map(([icon, label], index) => <div className={`${styles.featureCard} ${styles[`feature${index}`]}`} key={label} data-message-card><span><Icon name={icon} /></span><p>{label}</p></div>)}</div>
          <span className={styles.signature}>More conversations.<br />More opportunities.</span>
        </div>
        <figcaption className={styles.caption}>Example BizChat conversation: a customer enquiry becomes a demo booking, with automated responses, reminders, team assignment, conversation tracking and tool integrations.</figcaption>
      </figure>
    </div>
    <div className={`${common.columns} ${styles.columns}`}>
      <div><div className={styles.columnHeading}><span><Icon name="bolt" /></span><div><h4>Key capabilities</h4><p className={common.columnCaption}>BUILT FOR REAL BUSINESS USE</p></div><b>{product.capabilities.length}</b></div><ul>{product.capabilities.map(item => <li key={item}>{item}</li>)}</ul></div>
      <div><div className={styles.columnHeading}><span><Icon name="briefcase" /></span><div><h4>Common use cases</h4><p className={common.columnCaption}>ACROSS INDUSTRIES</p></div></div><ul>{product.useCases.map(item => <li key={item}>{item}</li>)}</ul></div>
      <div><div className={styles.columnHeading}><span><Icon name="chart" /></span><div><h4>What changes for your business</h4><p className={common.columnCaption}>MEASURABLE IMPACT</p></div></div><ul>{product.benefits.map(item => <li key={item}>{item}</li>)}</ul><a className={styles.growthCta} href="/contact#contact-form">Real conversations.<br />Real business growth.<span aria-hidden="true">→</span></a></div>
    </div>
  </div>;
}
