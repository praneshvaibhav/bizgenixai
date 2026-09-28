import Image from 'next/image';
import styles from './loading.module.css';

export default function Loading() {
  return (
    <div className={styles.loading} role="status" aria-live="polite" aria-label="Loading page">
      <div className={styles.mark} aria-hidden="true">
        <span className={styles.ring} />
        <span className={styles.ring} />
        <span className={styles.core}><Image src="/bizgenixlogo.webp" alt="" width={640} height={233} priority /></span>
      </div>
      <p>Preparing your next view</p>
      <span className={styles.srOnly}>Loading page</span>
    </div>
  );
}
