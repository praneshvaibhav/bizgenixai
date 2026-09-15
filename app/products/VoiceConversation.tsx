import styles from './ProductDetails.module.css';

/** Decorative conversation illustration; the product copy remains live text. */
export default function VoiceConversation() {
  return <div className={styles.conversation} aria-hidden="true">
    <div className={styles.conversationHalo} />
    <div className={styles.bubble}><span>✦</span><p>Hello!<br />How can I help you today?</p></div>
    <svg className={styles.wave} viewBox="0 0 300 160" fill="none">
      {Array.from({ length: 49 }, (_, index) => {
        const x = 6 + index * 6;
        const height = 12 + 110 * Math.pow(Math.sin(index * .19), 2) * (.6 + .4 * Math.sin(index * .37));
        return <line key={index} x1={x} x2={x} y1={80 - height / 2} y2={80 + height / 2} stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" opacity={.35 + .65 * Math.sin(Math.PI * index / 48)} />;
      })}
    </svg>
    <div className={`${styles.bubble} ${styles.reply}`}><span>◎</span><p>Let me check that<br />for you...</p></div>
  </div>;
}
