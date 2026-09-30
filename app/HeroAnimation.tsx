import styles from './HeroAnimation.module.css';

export default function HeroAnimation() {
  return (
    <div
      className={styles.visual}
      role="img"
      aria-label="Business signals flowing into the Bizgenix intelligence core"
    >
      <video
        className={styles.desktopVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-animation/desktop-poster.jpg"
        aria-hidden="true"
      >
        <source src="/hero-animation/desktop.webm" type="video/webm" />
        <source src="/hero-animation/desktop.mp4" type="video/mp4" />
      </video>
      <video
        className={styles.mobileVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-animation/mobile-poster.jpg"
        aria-hidden="true"
      >
        <source src="/hero-animation/mobile.webm" type="video/webm" />
        <source src="/hero-animation/mobile.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
