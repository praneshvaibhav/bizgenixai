'use client';

import { useEffect, useRef } from 'react';
import styles from './SolutionsSection.module.css';
import { observeVisibility } from './observeVisibility';

const solutions = [
  { title: 'In-House Products', description: 'Ready solutions built by Bizgenix for real business use cases.', items: ['Voice AI', 'BizChat – WhatsApp AI', 'ScaleOS', 'Growth Intelligence – Business Analytics'], action: 'View Products', href: '/products' },
  { title: 'Custom AI Solutions', description: 'Purpose-built systems designed around your process, team and data.', items: ['AI ERP and CRM systems', 'Enterprise AI applications', 'AI web and mobile applications', 'Business intelligence systems', 'Tally, WhatsApp, CRM integrations'], action: 'Build Your Solution', href: '/custom-solutions' },
  { title: 'Automation Solutions', description: 'Automations that remove repetitive operational work.', items: ['Lead capture and follow-up automation', 'WhatsApp and customer communication', 'Finance, receivables and reminders', 'HR, approval and task workflows', 'Inventory, reporting and operational automation'], action: 'See Automations', href: '#contact' },
];

function CardArt({ index }: { index: number }) {
  if (index === 0) return (
    <div className={styles.productsArt} aria-hidden="true">
      <div className={styles.appTiles}><span>♧</span><span>▣</span><span>◉</span><span>▥</span></div>
      <div className={styles.productBase}>Bizgenix<small>Products</small></div>
    </div>
  );
  if (index === 1) return (
    <div className={styles.stackArt} aria-hidden="true">
      {['Your Process', 'Your Data', 'Our AI', 'Your Growth'].map(label => <div key={label}><span>{label}</span></div>)}
    </div>
  );
  return (
    <div className={styles.automationArt} aria-hidden="true">
      <div className={styles.sources}><span>☎</span><span>✉</span><span>▤</span><span>♧</span></div>
      <div className={styles.processor}><b>⚙</b><small>Automation</small></div>
      <div className={styles.outputs}>{['Capture', 'Process', 'Notify', 'Save Time'].map(label => <span key={label}>{label}</span>)}</div>
    </div>
  );
}

export default function SolutionsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = section?.querySelector<HTMLElement>(`.${styles.cards}`);
    if (!section || !cards) return;
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    if (motion.matches || !('IntersectionObserver' in window) || !('animate' in Element.prototype)) return;
    const boxes = Array.from(section.querySelectorAll<HTMLElement>('[data-solution-pop]'));
    const animations: Animation[] = [];
    section.dataset.popReady = '';
    boxes.forEach(box => { box.dataset.popPending = ''; });
    // Each card waits for its own viewport entry, including stacked mobile cards.
    const stops = boxes.map((box, index) => {
      let animation: Animation | undefined;
      let finished = false;
      return observeVisibility(box, visible => {
        if (finished) return;
        if (animation) {
          if (visible) animation.play();
          else animation.pause();
          return;
        }
        if (!visible) return;
        delete box.dataset.popPending;
        const delay = index * 300;
        animation = box.animate([
          { opacity: 0, scale: '.88', translate: '0 12px', offset: 0 },
          { opacity: 1, scale: '1.035', translate: '0 0', offset: .7 },
          { opacity: 1, scale: '1', translate: '0 0', offset: 1 },
        ], { duration: 550, delay, easing: 'ease-out', fill: 'backwards' });
        animation.onfinish = () => { finished = true; animation?.cancel(); };
        animations.push(animation);
      });
    });
    const showAll = () => {
      stops.forEach(stop => stop());
      animations.forEach(animation => animation.cancel());
      boxes.forEach(box => { delete box.dataset.popPending; });
      delete section.dataset.popReady;
    };
    const onMotionChange = () => { if (motion.matches) showAll(); };
    motion.addEventListener('change', onMotionChange);
    return () => { showAll(); motion.removeEventListener('change', onMotionChange); };
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} id="products" aria-labelledby="solutions-title">
      <div className={styles.inner}>
        <div className={styles.hero}>
          <div className={styles.copy}>
            <h2 id="solutions-title">AI <em>Solutions</em></h2>
            <p>One partner for products, custom systems and automation.</p>
          </div>

        </div>
        <div className={styles.cards} id="solution-options">
          {solutions.map((solution, index) => (
            <article key={solution.title} id={index === 1 ? 'solutions' : index === 2 ? 'automation' : undefined} data-solution-pop className={`${styles.card} ${index === 1 ? styles.featured : ''}`}>
              <div className={styles.cardHeader}>
                <span className={styles.number}>0{index + 1}</span>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
                <CardArt index={index} />
              </div>
              <ul>{solution.items.map(item => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul>
              <a href={solution.href}>{solution.action} <span aria-hidden="true">→</span></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
