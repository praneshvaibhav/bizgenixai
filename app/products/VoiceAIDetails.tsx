'use client';

import { useEffect, useRef, type CSSProperties } from 'react';
import { products } from './content';
import ProductWorkflow from './ProductWorkflow';
import { animateVoiceAI } from './animateVoiceAI';
import styles from './VoiceAIDetails.module.css';

const voiceProduct = products.find(product => product.id === 'voice-ai')!;
const results = [['3x', 'More Conversions'], ['60%', 'Lower Call Costs'], ['100%', 'Consistent Messaging'], ['24/7', 'Customer Support']];

function Waveform({ screen = false }: { screen?: boolean }) {
  return <div className={screen ? styles.screenWave : styles.wave} aria-hidden="true">{Array.from({ length: screen ? 35 : 57 }, (_, index) => <i key={index} style={{ height: `${12 + Math.pow(Math.sin(index * .37), 2) * (screen ? 68 : 125) * Math.sin(Math.PI * (index + 1) / (screen ? 36 : 58))}px`, '--wave-delay': `${index * -73}ms` } as CSSProperties} />)}</div>;
}

export default function VoiceAIDetails({ active }: { active: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (active && ref.current) return animateVoiceAI(ref.current);
  }, [active]);

  return <div className={styles.experience} ref={ref}>
    <div className={styles.layout}>
      <div className={styles.copy}>
        <p className={styles.eyebrow}>VOICE AI</p>
        <h3>Every call a<br /><em>business opportunity.</em></h3>
        <p className={styles.description}>AI Voice handles your inbound and outbound calls, talks naturally with customers, captures key information, qualifies leads and triggers the next action — 24/7, without manual effort.</p>
        <ul className={styles.features}>
          <li><span aria-hidden="true">ϟ</span><p><strong>24/7</strong>Always On</p></li>
          <li><span className={styles.globe} aria-hidden="true"><i /></span><p><strong>Works in</strong>Multiple Languages</p></li>
          <li><span className={styles.sliders} aria-hidden="true"><i /><i /><i /></span><p><strong>Integrates with</strong>your CRM &amp; Systems</p></li>
        </ul>
        <a className={styles.cta} href="/contact#contact-form">Schedule a Live Demo <span aria-hidden="true">→</span></a>
      </div>
      <div className={styles.scene} aria-hidden="true">
        <div className={styles.halo} data-voice-reveal="halo" />
        <div className={styles.outerWave} data-voice-reveal="wave"><Waveform /></div>
        <div className={styles.phoneEntrance} data-voice-reveal="phone">
          <div className={styles.phone}>
            <div className={styles.screen}>
              <div className={styles.wallpaper} data-voice-reveal="screen">
                <div className={styles.callRing}><span>☎</span></div>
                <strong className={styles.caller}>AI Voice Assistant</strong><span className={styles.speaking}>Speaking...</span>
                <Waveform screen />
                <div className={styles.controls}>
                  <div><span><i className={styles.microphone} /></span><small>Mute</small></div>
                  <div><span className={styles.endCall}>☎</span><small>End Call</small></div>
                  <div><span>◖))</span><small>Speaker</small></div>
                </div>
              </div>
              <div className={styles.statusBar}><span>9:41</span><span className={styles.signal}>▂▃▅ ▰</span></div>
              <div className={styles.island} /><div className={styles.homeIndicator} />
            </div>
          </div>
        </div>
        <div className={`${styles.bubble} ${styles.hello}`} data-voice-reveal="hello"><span>✦</span><p>Hello!<br />How can I help you today?</p></div>
        <div className={`${styles.bubble} ${styles.reply}`} data-voice-reveal="reply"><span>•••</span><p>Let me check that<br />for you...</p></div>
        <div className={`${styles.bubble} ${styles.booking}`} data-voice-reveal="booking"><span>✓</span><p>I’ve found the details.<br />Shall I book a site visit<br />for you?</p></div>
        <div className={styles.signaturePosition} data-voice-reveal="signature"><div className={styles.signature}><span className={styles.noteArrow}>⤴</span>Sounds like<br />your best team member.</div></div>
      </div>
      <div className={styles.workflowWrap} data-voice-reveal="workflow"><ProductWorkflow product={voiceProduct} active={false} /></div>
      <dl className={styles.results}>{results.map(([value, label]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
    </div>
  </div>;
}
