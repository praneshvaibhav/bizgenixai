'use client';

import { useEffect, useRef } from 'react';
import styles from './SolutionsSection.module.css';
import { observeVisibility } from './observeVisibility';

const testimonials = [
  {
    name: 'Aarav Mehta',
    role: 'Founder, Example Retail Co.',
    initials: 'AM',
    service: 'AI Products',
    quote: 'We used to spend hours pulling reports from different systems. Now our team has a clear view of the business in one place, and our meetings focus on decisions instead of spreadsheets.',
  },
  {
    name: 'Neha Shah',
    role: 'Operations Head, Example Manufacturing Co.',
    initials: 'NS',
    service: 'Custom Solution',
    quote: 'The team took time to understand how we work before building anything. Our custom solution connects the steps that used to happen across calls, emails and spreadsheets, making everyday work much simpler.',
  },
  {
    name: 'Rohan Patel',
    role: 'Director, Example Services Co.',
    initials: 'RP',
    service: 'Business Automation',
    quote: 'Following up with every enquiry was a daily challenge. With a connected workflow, our team knows who needs a response and what comes next. We can give customers more attention with less manual tracking.',
  },
];

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
            <h2 id="solutions-title">Solution on which <em>client trusted</em></h2>
            <p>Demo client testimonials — names, companies and quotes below are illustrative.</p>
          </div>

        </div>
        <div className={styles.cards} id="solution-options">
          {testimonials.map((testimonial, index) => (
            <figure key={testimonial.name} id={index === 1 ? 'solutions' : index === 2 ? 'automation' : undefined} data-solution-pop className={`${styles.card} ${index === 1 ? styles.featured : ''}`}>
              <div className={styles.cardHeader}>
                <span className={styles.service}>{testimonial.service}</span>
                <span className={styles.demo}>Demo</span>
              </div>
              <span className={styles.quoteMark} aria-hidden="true">“</span>
              <blockquote><p>{testimonial.quote}</p></blockquote>
              <figcaption className={styles.client}>
                <span className={styles.avatar} aria-hidden="true">{testimonial.initials}</span>
                <div><strong>{testimonial.name}</strong><span>{testimonial.role}</span></div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
