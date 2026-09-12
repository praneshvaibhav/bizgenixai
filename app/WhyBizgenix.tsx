'use client';

import { useEffect, useRef, type CSSProperties } from 'react';
import styles from './WhyBizgenix.module.css';

const features = [
  { title: 'Proof Before Payment', description: 'Validate the solution before committing to a full implementation.', icon: [72, 235] },
  { title: 'India-first AI', description: 'Designed for WhatsApp, Tally, Hinglish and MSME operating realities.', icon: [72, 409] },
  { title: 'Builders, not Slide-Readers', description: 'The same team teaches, develops and deploys commercial AI systems.', icon: [72, 583] },
  { title: 'Problem-first Approach', description: <>Find the Leak <span className={styles.stepArrow}>→</span> Prove the Fix <span className={styles.stepArrow}>→</span> Build the System.</>, icon: [989, 235] },
  { title: 'Custom Ownership', description: 'Solutions can be designed around your process, roles and integrations.', icon: [989, 409] },
  { title: 'Implementation Partnership', description: 'Discovery, development, deployment, training and optimization.', icon: [989, 583] },
];

// Reuse only the supplied illustration details; layout and copy remain native HTML.
function ReferenceIcon({ position, crop = 92 }: { position: number[]; crop?: number }) {
  return <span className={styles.icon} aria-hidden="true" style={{ '--x': position[0], '--y': position[1], '--crop': crop } as CSSProperties}>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src="/why-bizgenix-reference.webp" alt="" width={1536} height={1024} loading="lazy" decoding="async" />
  </span>;
}

export default function WhyBizgenix() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = cardsRef.current;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!container || motion.matches || !('IntersectionObserver' in window) || !('animate' in Element.prototype)) return;

    const animations = new Map<HTMLElement, Animation>();
    const distance = window.matchMedia('(max-width: 650px)').matches ? 48 : 100;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting || entry.intersectionRatio < .15) return;
        const card = entry.target as HTMLElement;
        animations.get(card)?.play();
        observer.unobserve(card);
      });
    }, { threshold: 0.15 });

    container.querySelectorAll<HTMLElement>('article').forEach((card, index) => {
      // Opposite columns enter together, followed by the next pair of cards.
      const offset = index < 3 ? -distance : distance;
      const animation = card.animate([
        { opacity: 0, translate: `${offset}px 0` },
        { opacity: 1, translate: '0 0' },
      ], {
        duration: 750,
        delay: (index % 3) * 150,
        easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
        fill: 'both',
      });
      animation.pause();
      animation.onfinish = () => animation.cancel();
      animations.set(card, animation);
      observer.observe(card);
    });

    const showAll = () => {
      observer.disconnect();
      animations.forEach(animation => animation.cancel());
    };
    const onMotionChange = () => { if (motion.matches) showAll(); };
    motion.addEventListener('change', onMotionChange);
    return () => {
      showAll();
      motion.removeEventListener('change', onMotionChange);
    };
  }, []);

  return (
    <section className={styles.section} id="why-bizgenix" aria-labelledby="why-bizgenix-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.eyebrow} id="why-bizgenix-title"><span>WHY BIZGENIX</span></h2>
        </header>


        <div className={styles.features} ref={cardsRef}>
          {features.map((feature, index) => (
            <article className={`${styles.feature} ${index < 3 ? styles.left : styles.right}`} key={feature.title} style={{ '--row': index % 3 + 1 } as CSSProperties}>
              <ReferenceIcon position={feature.icon} />
              <div className={styles.featureCopy}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
              <span className={styles.number}>0{index + 1}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
