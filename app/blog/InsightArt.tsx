import type { Insight } from './content';
import styles from './page.module.css';

export default function InsightArt({ kind, large = false }: { kind: Insight['art']; large?: boolean }) {
  return <div className={`${styles.art} ${styles[kind]} ${large ? styles.largeArt : ''}`} aria-hidden="true">
    <span className={styles.artLabel}>BIZGENIX / FIELD NOTES</span>
    {kind === 'voice' ? <div className={styles.wave}>{[20, 37, 55, 30, 78, 100, 63, 38, 90, 65, 30, 50, 23].map((height, i) => <i key={i} style={{ height: `${height}%` }} />)}</div>
      : kind === 'analytics' ? <div className={styles.chart}>{[27, 45, 36, 62, 53, 78, 96].map((height, i) => <i key={i} style={{ height: `${height}%` }} />)}</div>
      : kind === 'whatsapp' ? <div className={styles.messages}><span>New enquiry <b>↗</b></span><span>Follow-up, handled. <b>✓✓</b></span><span>Next step? Connected. <b>✓</b></span></div>
      : kind === 'industry' ? <div className={styles.factory}>{['PLAN', 'BUILD', 'IMPROVE'].map((label, i) => <span key={label}><i>{String(i + 1).padStart(2, '0')}</i>{label}</span>)}</div>
      : kind === 'automation' ? <div className={styles.flowArt}><span>Enquiry</span><b>→</b><span className={styles.aiNode}>AI</span><b>→</b><span>Action</span></div>
      : <div className={styles.orbit}><div className={styles.orbitInner} /><span className={styles.orbitCore}>AI<span>OPPORTUNITY</span></span><span className={styles.orbitTag}>Business need</span><span className={styles.orbitTag}>Measurable impact</span><i /></div>}
    <span className={styles.artBottom}>{({ strategy: 'A CLEARER WAY FORWARD', automation: 'LESS REPETITION. MORE POSSIBILITY.', voice: 'CONVERSATIONS THAT MOVE BUSINESS', whatsapp: 'EVERY FOLLOW-UP COUNTS', analytics: 'FROM DATA TO DIRECTION', industry: 'INTELLIGENCE ON THE GROUND' })[kind]}<b>↗</b></span>
  </div>;
}
