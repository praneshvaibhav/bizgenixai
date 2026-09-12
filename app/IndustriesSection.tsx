'use client';

import { useEffect, useRef } from 'react';
import styles from './IndustriesSection.module.css';
import { observeVisibility } from './observeVisibility';

const industries = [
  { title: 'Manufacturing', description: 'Production planning, quality inspection, machine data, inventory and MIS automation.', image: 'manufacturing', alt: 'Machinery and production lines inside a manufacturing facility', tag: 'PRODUCTION & OPERATIONS' },
  { title: 'Textile', description: 'Fabric workflows, production tracking, payment recovery, order visibility and Tally integration.', image: 'textile', alt: 'Colorful fabric rolls arranged in a textile workshop', tag: 'ORDERS & MARGINS' },
  { title: 'Real Estate & Construction', description: 'Lead qualification, site-visit scheduling, CRM follow-ups, billing and project workflows.', image: 'construction', alt: 'Tower crane above a building under construction', tag: 'LEADS & PROJECTS' },
  { title: 'Healthcare', description: 'Appointment handling, patient communication, records, billing and operational reporting.', image: 'healthcare', alt: 'Doctor speaking with a patient at their hospital bedside', tag: 'PATIENTS & CARE' },
  { title: 'Education', description: 'Admissions, learning platforms, student support, course portals and reporting automation.', image: 'education', alt: 'Students learning together in a classroom', tag: 'ENQUIRIES & LEARNING' },
  { title: 'Finance & Professional Services', description: 'Tally analytics, client servicing, documentation, compliance and receivable tracking.', image: 'finance', alt: 'Business team collaborating around an office table', tag: 'CLIENTS & WORKFLOWS' },
  { title: 'Retail & E-commerce', description: 'Customer support, order workflows, inventory alerts, campaigns and sales analytics.', image: 'retail', alt: 'Clothing displays inside a retail store', tag: 'CUSTOMERS & COMMERCE' },
  { title: 'Hospitality & Travel', description: 'Enquiry management, booking support, guest communication and review automation.', image: 'hospitality', alt: 'Hotel pool surrounded by a tropical resort', tag: 'BOOKINGS & EXPERIENCES' },
];

export default function IndustriesSection() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const hoverRef = useRef(false);
  const focusRef = useRef(false);
  const touchingRef = useRef(false);
  const resumeAtRef = useRef(0);

  useEffect(() => {
    const viewport = viewportRef.current;
    const group = groupRef.current;
    if (!viewport || !group) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let visible = false;
    let frame = 0;
    let lastTime = 0;
    let position = viewport.scrollLeft;

    const tick = (time: number) => {
      const elapsed = Math.min(time - lastTime, 50);
      lastTime = time;
      if (visible && !motion.matches && !hoverRef.current && !focusRef.current && !touchingRef.current && time >= resumeAtRef.current && !document.hidden) {
        // Keep fractional pixels so slow movement stays smooth on high refresh displays.
        position += elapsed * 0.028;
        if (group.offsetWidth > 0) position %= group.offsetWidth;
        viewport.scrollLeft = position;
      } else {
        position = viewport.scrollLeft;
      }
      if (visible) frame = requestAnimationFrame(tick);
    };
    const stop = observeVisibility(viewport, inView => {
      visible = inView;
      cancelAnimationFrame(frame);
      lastTime = performance.now();
      if (visible) frame = requestAnimationFrame(tick);
    });
    const releasePointer = () => {
      if (!touchingRef.current) return;
      touchingRef.current = false;
      resumeAtRef.current = performance.now() + 700;
    };
    window.addEventListener('pointerup', releasePointer);
    window.addEventListener('pointercancel', releasePointer);
    return () => {
      cancelAnimationFrame(frame);
      stop();
      window.removeEventListener('pointerup', releasePointer);
      window.removeEventListener('pointercancel', releasePointer);
    };
  }, []);

  const move = (direction: number) => {
    const viewport = viewportRef.current;
    const group = groupRef.current;
    if (!viewport || !group) return;
    resumeAtRef.current = performance.now() + 700;
    const step = group.offsetWidth / industries.length;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduced && direction < 0 && viewport.scrollLeft < 1) viewport.scrollLeft = group.offsetWidth;
    if (!reduced && direction > 0 && viewport.scrollLeft >= group.offsetWidth) viewport.scrollLeft -= group.offsetWidth;
    viewport.scrollBy({ left: step * direction, behavior: reduced ? 'instant' : 'smooth' });
  };

  return (
    <section className={styles.section} id="industries" aria-labelledby="industries-title">
      <header className={styles.header}>
        <p className={styles.eyebrow}><span /> BUILT FOR THE WAY YOU WORK</p>
        <h2 id="industries-title">AI solutions built around how<br className={styles.desktopBreak} /> your industry <em>actually works.</em></h2>
        <p className={styles.intro}>Your workflows. Your challenges. AI that fits right in.</p>
      </header>

      <div className={styles.viewport} ref={viewportRef} id="industry-cards" role="region" aria-label="Industry solutions carousel" tabIndex={0}
        onPointerEnter={event => { if (event.pointerType !== 'touch') hoverRef.current = true; }}
        onPointerLeave={() => { hoverRef.current = false; }}
        onFocusCapture={event => { focusRef.current = event.target.matches(':focus-visible'); }}
        onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) focusRef.current = false; }}
        onPointerDown={() => { touchingRef.current = true; focusRef.current = false; }}
        onKeyDown={event => {
          if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
            event.preventDefault();
            move(event.key === 'ArrowRight' ? 1 : -1);
          }
        }}>
        <div className={styles.track}>
          {[0, 1].map(copy => (
            <div className={`${styles.group} ${copy ? styles.clone : ''}`} ref={copy === 0 ? groupRef : undefined} key={copy} aria-hidden={copy === 1 ? true : undefined}>
              {industries.map((industry, index) => (
                <a className={styles.card} href="#contact" key={industry.image} tabIndex={copy ? -1 : 0} aria-label={`Explore ${industry.title} AI solutions`}>
                  {/* Local, sized images keep the carousel independent of third-party image services. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className={styles.image} src={`/industries/${industry.image}.jpg`} alt={copy ? '' : industry.alt} width={640} height={800} loading="lazy" decoding="async" />
                  <div className={styles.shade} />
                  <div className={styles.cardTop}><span className={styles.tag}>{industry.tag}</span><span className={styles.number}>0{index + 1}</span></div>
                  <div className={styles.content}>
                    <h3>{industry.title}</h3>
                    <div className={styles.description}><div><p>{industry.description}</p></div></div>
                  </div>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bottom}>
        <p><span className={styles.statusDot} /> 8 industries. Endless possibilities.</p>
        <div className={styles.controls}>
          <button type="button" aria-label="Previous industry" aria-controls="industry-cards" onClick={() => move(-1)}>←</button>
          <button type="button" aria-label="Next industry" aria-controls="industry-cards" onClick={() => move(1)}>→</button>
        </div>
      </div>
    </section>
  );
}
