'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import styles from './ScaleWithAI.module.css';
import CountUp from './CountUp';

const stories = [
  { image: 'cohort-group.webp', title: 'A live Scale With AI session', note: 'Members build alongside the faculty, not after him.' },
  { image: 'ahmedabad.webp', title: 'Ahmedabad', note: '' },
  { image: 'surat.webp', title: 'Surat', note: '' },
  { image: 'mumbai.webp', title: 'Mumbai', note: '' },
  { image: 'vadodra.webp', title: 'Vadodra', note: '' },
];

// Keep the source's stacked-photo animation and final overview, with equal
// scroll time for every photo as new cities are added.
export default function ScaleWithAI() {
  const sectionRef = useRef<HTMLElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const [step, setStep] = useState(0);
  const overview = step === stories.length;
  const activeIndex = Math.min(step, stories.length - 1);

  useEffect(() => {
    const section = sectionRef.current;
    const scene = sceneRef.current;
    if (!section || !scene) return;
    const desktop = window.matchMedia('(min-width: 1024px)');
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;

    const update = () => {
      frame = 0;
      if (!desktop.matches || motion.matches) return;
      const bounds = scene.getBoundingClientRect();
      const travel = bounds.height - window.innerHeight;
      const progress = travel > 0 ? Math.max(0, Math.min(1, -bounds.top / travel)) : 0;
      const next = progress > 0.82 ? stories.length : Math.min(stories.length - 1, Math.floor(progress / (0.82 / stories.length)));
      setStep(current => current === next ? current : next);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const configure = () => {
      if (desktop.matches && !motion.matches) section.dataset.animated = 'true';
      else delete section.dataset.animated;
      schedule();
    };
    configure();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    desktop.addEventListener('change', configure);
    motion.addEventListener('change', configure);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      desktop.removeEventListener('change', configure);
      motion.removeEventListener('change', configure);
      delete section.dataset.animated;
    };
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!header || motion.matches || !('IntersectionObserver' in window) || !('animate' in Element.prototype)) return;
    const animations = Array.from(header.querySelectorAll<HTMLElement>('[data-reveal]')).map((element, index) => {
      const animation = element.animate(index === 0 ? [
        { opacity: 0, transform: 'translateY(12px)' }, { opacity: 1, transform: 'translateY(0)' },
      ] : [
        { transform: 'translateY(108%)' }, { transform: 'translateY(0)' },
      ], { duration: index === 0 ? 500 : 850, delay: index * 60, easing: 'cubic-bezier(.21,.47,.32,.98)', fill: 'both' });
      animation.pause();
      animation.onfinish = () => animation.cancel();
      return animation;
    });
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting && entry.intersectionRatio >= .2)) return;
      animations.forEach(animation => animation.play());
      observer.disconnect();
    }, { threshold: 0.2 });
    observer.observe(header);
    const cleanup = () => { observer.disconnect(); animations.forEach(animation => animation.cancel()); };
    const onMotionChange = () => { if (motion.matches) cleanup(); };
    motion.addEventListener('change', onMotionChange);
    return () => { cleanup(); motion.removeEventListener('change', onMotionChange); };
  }, []);

  return (
    <section className={styles.section} id="programs" ref={sectionRef} aria-labelledby="scale-stories-title">
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.scrollScene} ref={sceneRef} style={{ '--scene-height': `${100 + stories.length * 55}vh` } as CSSProperties}>
        <div className={styles.sticky}>
          <div className={styles.container}>
            <div className={styles.split}>
              <div className={styles.copy}>
                <header className={styles.header} ref={headerRef}>
                  <div data-reveal><span className={styles.eyebrow}>Scale With AI</span></div>
                  <h2 id="scale-stories-title"><span className={styles.titleClip}><span data-reveal>India’s hands-on AI movement <em>for business owners.</em></span></span></h2>
                </header>
                <p className={styles.description}>Scale With AI brings business owners into a live, practical environment where they build AI agents, no-code apps and automation blueprints instead of only watching presentations.</p>
                <ul className={styles.cities}>
                  <li><strong>Ahmedabad</strong><span>sold out, 100+ owners</span></li>
                  <li><strong>Surat</strong><span>sold out, 200+ owners</span></li>
                  <li><strong>Mumbai</strong><span>300+ participants, full house</span></li>
                  <li><strong>Vadodara</strong><span>300+ participants, full house</span></li>
                </ul>
                <div className={styles.stats}>
                  <p><CountUp value={2000} /><span>owners trained across the movement</span></p>
                  <p><CountUp value={1000} /><span>member community</span></p>
                </div>
              </div>
              <div className={styles.visual}>
              <div className={styles.deck} data-overview={overview || undefined}
                onPointerMove={event => {
                  const bounds = event.currentTarget.getBoundingClientRect();
                  event.currentTarget.style.setProperty('--light-x', `${(event.clientX - bounds.left) / bounds.width * 100}%`);
                  event.currentTarget.style.setProperty('--light-y', `${(event.clientY - bounds.top) / bounds.height * 100}%`);
                }}>
                {stories.map((story, index) => {
                  const depth = index - activeIndex;
                  const columns = Math.ceil(Math.sqrt(stories.length));
                  const rows = Math.ceil(stories.length / columns);
                  const row = Math.floor(index / columns);
                  const itemsInRow = Math.min(columns, stories.length - row * columns);
                  const x = (index % columns - (itemsInRow - 1) / 2) * (100 / columns);
                  const y = (row - (rows - 1) / 2) * (100 / columns);
                  const transform = overview
                    ? `translate(${x}%, ${y}%) scale(${1 / columns - .013}) rotate(0deg)`
                    : `translate(0, ${depth < 0 ? -7 : 2.5 * depth}%) scale(${depth < 0 ? .93 : 1 - .05 * depth}) rotate(${depth < 0 ? -2.5 : 1.5 * depth}deg)`;
                  return <figure className={styles.card} key={story.image} data-active={!overview && depth === 0 || undefined} aria-hidden={!overview && depth !== 0 ? true : undefined}
                    style={{ transform, opacity: overview ? 1 : depth < 0 ? 0 : 1 - .16 * depth, zIndex: overview ? 10 + index : 40 - Math.abs(depth) } as CSSProperties}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`/scale-with-ai/${story.image}`} alt={`Scale With AI — ${story.title}`} width={2000} height={1333} loading="lazy" decoding="async" />
                    <div className={styles.spotlight} aria-hidden="true" />
                    <div className={styles.shade} aria-hidden="true" />
                    <figcaption>{story.title}</figcaption>
                  </figure>;
                })}
              </div>
              <div className={styles.photoMeta}>
                <p className={styles.counter}>{overview ? 'Every room so far' : `${String(activeIndex + 1).padStart(2, '0')} / ${String(stories.length).padStart(2, '0')}`}</p>
                <ol className={styles.progress} aria-label="Photo sequence">
                  {stories.map((story, index) => <li key={story.title} aria-label={story.title} aria-current={!overview && activeIndex === index ? 'step' : undefined}><span /></li>)}
                </ol>
              </div>
              <ul className={styles.gallery} aria-label="Scale With AI sessions">
                {stories.map(story => <li key={story.image}><figure>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/scale-with-ai/${story.image}`} alt={`Scale With AI — ${story.title}`} width={2000} height={1333} loading="lazy" decoding="async" />
                  <div className={styles.shade} aria-hidden="true" />
                  <figcaption>{story.title}</figcaption>
                </figure></li>)}
              </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.actions}>
          <a className={styles.exploreButton} href="https://scalewithai.in/" target="_blank" rel="noopener noreferrer">Explore Scale with AI <span aria-hidden="true">↗</span></a>
          <a className={styles.trainingLink} href="https://api.whatsapp.com/send/?phone=918200858674&text=Hi%21+I%27d+like+to+know+more+about+the+Corporate+Training+Program+%E2%80%94+including+the+program+fee+and+enrolment+details.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">Enquire about Corporate Training <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
  );
}
