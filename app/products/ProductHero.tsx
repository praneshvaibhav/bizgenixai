'use client';

import { useEffect, useId, useRef } from 'react';
import { observeVisibility } from '../observeVisibility';
import { demoUrl, products } from './content';
import styles from './ProductHero.module.css';

const metrics = [
  { value: 110, label: 'Live AI systems built' },
  { value: 1000, label: 'Businesses advised' },
  { value: 2000, label: 'Professionals and owners trained' },
];

const desktopPaths = [
  'M230 258 C340 258 290 54 430 54',
  'M230 278 C365 278 300 177 430 177',
  'M230 296 C365 296 300 300 430 300',
  'M230 314 C365 314 300 423 430 423',
  'M230 334 C345 334 285 546 430 546',
];
const mobilePaths = [285, 400, 515, 630, 745].map(y => `M180 180 V207 Q180 226 161 226 H39 Q20 226 20 245 V${y - 14} Q20 ${y} 34 ${y} H44`);

export default function ProductHero() {
  const diagramRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLElement>(null);
  const gradientId = useId();

  useEffect(() => {
    const diagram = diagramRef.current;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!diagram || motion.matches || typeof Element.prototype.animate !== 'function') return;
    const animations: Animation[] = [];
    const completed = new Set<Animation>();
    let stopped = false;
    let heroComplete = false;
    let metricsVisible = false;
    let countComplete = false;
    let countFrame = 0;
    let elapsed = 0;
    let lastFrame: number | null = null;
    const counters = Array.from(metricsRef.current?.querySelectorAll<HTMLElement>('[data-count-to]') ?? []);
    counters.forEach(counter => { counter.textContent = '0'; });

    const count = (now: number) => {
      if (stopped) return;
      if (lastFrame !== null) elapsed += now - lastFrame;
      lastFrame = now;
      const progress = Math.min(elapsed / 1800, 1);
      const eased = 1 - (1 - progress) ** 3;
      counters.forEach(counter => {
        counter.textContent = Math.round(Number(counter.dataset.countTo) * eased).toLocaleString('en-IN');
      });
      countComplete = progress === 1;
      if (!countComplete) countFrame = requestAnimationFrame(count);
    };
    const updateCounters = () => {
      cancelAnimationFrame(countFrame);
      lastFrame = null;
      if (heroComplete && metricsVisible && !countComplete && !stopped) countFrame = requestAnimationFrame(count);
    };

    const animate = (element: Element, frames: Keyframe[], duration: number, delay = 0) => {
      const animation = element.animate(frames, { duration, delay, fill: 'both', easing: 'cubic-bezier(.22,1,.36,1)' });
      animation.pause();
      animation.onfinish = () => {
        completed.add(animation);
        animation.cancel();
        if (completed.size === animations.length) {
          heroComplete = true;
          updateCounters();
        }
      };
      animations.push(animation);
    };
    const hub = diagram.querySelector('[data-hub]');
    if (hub) animate(hub, [
      { opacity: 0, transform: 'translateY(22px) scale(.94)' },
      { opacity: 1, transform: 'translateY(0) scale(1)' },
    ], 600);

    products.forEach((_, index) => {
      const start = 800 + index * 1000;
      diagram.querySelectorAll(`[data-connection="${index}"]`).forEach(path => animate(path, [
        { strokeDashoffset: '1', opacity: 0 },
        { strokeDashoffset: '1', opacity: 1, offset: .01 },
        { strokeDashoffset: '0', opacity: 1 },
      ], 450, start));
      diagram.querySelectorAll(`[data-node="${index}"]`).forEach(node => animate(node, [
        { opacity: 0 }, { opacity: 1 },
      ], 180, start + 300));
      const card = diagram.querySelector(`[data-product="${index}"]`);
      if (card) animate(card, [
        { opacity: 0, transform: 'translateX(-20px) scale(.97)' },
        { opacity: 1, transform: 'translateX(0) scale(1)' },
      ], 450, start + 450);
    });

    const finish = () => {
      stopped = true;
      animations.forEach(animation => animation.cancel());
      cancelAnimationFrame(countFrame);
      counters.forEach(counter => { counter.textContent = Number(counter.dataset.countTo).toLocaleString('en-IN'); });
    };
    // Keep the sequence playing while either the diagram or its metrics are in view.
    const stopObserving = observeVisibility(experienceRef.current ?? diagram, visible => {
      if (stopped) return;
      animations.forEach(animation => {
        if (completed.has(animation)) return;
        if (visible) animation.play();
        else animation.pause();
      });
    });
    const stopMetrics = metricsRef.current ? observeVisibility(metricsRef.current, visible => {
      metricsVisible = visible;
      updateCounters();
    }) : () => {};
    // Keyboard users should never land on a visually hidden product link.
    const onFocus = () => finish();
    const onMotionChange = () => { if (motion.matches) finish(); };
    diagram.addEventListener('focusin', onFocus);
    motion.addEventListener('change', onMotionChange);
    return () => {
      finish();
      stopObserving();
      stopMetrics();
      diagram.removeEventListener('focusin', onFocus);
      motion.removeEventListener('change', onMotionChange);
    };
  }, []);

  return <div ref={experienceRef}><section className={styles.hero} aria-labelledby="products-title">
    <div className={styles.landscape} aria-hidden="true"><span /><span /><span /></div>
    <div className={styles.layout}>
      <div className={styles.copy}>
        <p className={styles.eyebrow}>Our product ecosystem</p>
        <h1 id="products-title">AI products built to<br /><em>run smarter<br />businesses.</em></h1>
        <p className={styles.description}>Communicate faster. Automate repetitive work. See your business clearly. Practical AI products built around real workflows, Indian operating environments and measurable outcomes.</p>
        <div className={styles.actions}><a className={styles.primary} href="#product-suite">Explore Our Products <span aria-hidden="true">→</span></a><a className={styles.secondary} href={demoUrl()} target="_blank" rel="noopener noreferrer">Book a Product Demo <span aria-hidden="true">→</span></a></div>
        <ul className={styles.trust}>{['Built for real workflows', 'Trusted by businesses', 'Designed for scale'].map(item => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul>
        <p className={styles.note}>One platform.<br />Many possibilities.</p>
      </div>
      <div className={styles.diagram} ref={diagramRef} role="group" aria-label="AI for real business connects five Bizgenix products">
        <div className={styles.hub} data-hub><h2>AI for<br /> real business</h2><span aria-hidden="true" /><p>A complete suite of AI products, built to work together for greater impact.</p></div>
        <svg className={styles.desktopConnections} viewBox="0 0 1000 600" preserveAspectRatio="none" aria-hidden="true">
          <defs><linearGradient id={gradientId}><stop stopColor="#5AAA6C" /><stop offset="1" stopColor="#FFFFFF" /></linearGradient></defs>
          {desktopPaths.map((path, index) => <g key={path}>
            <path d={path} pathLength="1" stroke={`url(#${gradientId})`} data-connection={index} />
            <g data-node={index}><circle cx="230" cy={[258, 278, 296, 314, 334][index]} r="6" /><circle cx="430" cy={54 + index * 123} r="6" /></g>
          </g>)}
        </svg>
        <svg className={styles.mobileConnections} viewBox="0 0 360 815" preserveAspectRatio="none" aria-hidden="true">
          {mobilePaths.map((path, index) => <g key={path}><path d={path} pathLength="1" data-connection={index} /><g data-node={index}><circle cx="180" cy="180" r="4" /><circle cx="44" cy={285 + index * 115} r="4" /></g></g>)}
        </svg>
        {products.map((product, index) => <a key={product.id} href={'externalUrl' in product ? product.externalUrl : `#${product.id}`} target={'externalUrl' in product ? '_blank' : undefined} rel={'externalUrl' in product ? 'noopener noreferrer' : undefined} className={`${styles.product} ${styles[`product${index}`]}`} data-product={index}>
          <span className={styles.number}>0{index + 1}</span><div><h2>{product.name}</h2><p>{product.summary}</p></div><span className={styles.arrow} aria-hidden="true">→</span>
        </a>)}
        <p className={styles.signature}>Tools<br />that work<br /><span>together.</span></p>
        <p className={styles.future}>Built<br />for what’s<br />next.</p>
      </div>
    </div>
  </section>
    <section className={styles.proof} aria-label="Bizgenix experience" ref={metricsRef}>
      <dl className={styles.metricsLayout}>
        {metrics.map(metric => <div key={metric.label}>
          <dt>{metric.label}</dt>
          <dd className={styles.metricValue}>
            <span aria-hidden="true"><span data-count-to={metric.value}>{metric.value.toLocaleString('en-IN')}</span>+</span>
            <span className={styles.accessibleValue}>{metric.value.toLocaleString('en-IN')}+</span>
          </dd>
        </div>)}
        <div><dt>Built for local workflows and tools</dt><dd>India-first</dd></div>
      </dl>
    </section>
  </div>;
}
