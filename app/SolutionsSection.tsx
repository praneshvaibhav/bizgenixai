'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import type { KeyboardEvent, PointerEvent as ReactPointerEvent } from 'react';
import styles from './SolutionsSection.module.css';

const testimonials = [
  {
    name: 'Kaushk Savla',
    company: 'MYKRAFT Apparels',
    service: 'Garment workflow automation',
    image: '/client-profiles/kaushk-savla.webp',
    quote: "Workflow focus: garment order updates, handoffs and routine follow-up. Scope and operating results depend on the configured process.",
  },
  {
    name: 'Ashok Sanghvi',
    company: 'Mahavir Traders',
    service: 'Inventory management system',
    image: '/client-profiles/ashok-sanghvi.webp',
    quote: "Workflow focus: inventory receipts, movements and availability records. Stock answers need to be checked against the owning records.",
  },
  {
    name: 'Bhavya',
    company: 'VS Associate',
    service: 'AI debt recovery voice agent',
    image: '/client-profiles/bhavya.webp',
    quote: "Workflow focus: initial payment reminders, response capture and routing to a team member. Collection results depend on the underlying accounts and follow-up.",
  },
  {
    name: 'Chintan Shah',
    company: 'Linq Corporate Solutions',
    service: 'AI sales call analysis',
    image: '/client-profiles/chintan-shah.webp',
    quote: "Workflow focus: call transcription and structured review against agreed criteria. Human review remains important when using scores for coaching.",
  },
  {
    name: 'Dhaval Ukani',
    company: 'Aavkar Corporation',
    service: 'Email, WhatsApp & cheque automation',
    image: '/client-profiles/dhaval-ukani.webp',
    quote: "Workflow focus: email classification, WhatsApp communication and cheque reminders. Exceptions and successful actions need to be recorded.",
  },
  {
    name: 'Prachetan Bansal',
    company: 'Spectrum Dyes and Chemical Private Limited',
    service: 'Industry knowledge RAG model',
    image: '/client-profiles/prachetan-bansal.webp',
    quote: "Workflow focus: retrieving relevant information from approved industry documents with source references for review.",
  },
  {
    name: 'Varun Shrivastava',
    company: 'Kailash Veda Infra',
    service: 'Project coordination system',
    image: '/client-profiles/varun-shrivastava.webp',
    quote: "Workflow focus: responsibilities, progress and pending decisions across site and office teams.",
  },
];

function TestimonialCard({ testimonial, featured = false }: { testimonial: typeof testimonials[number]; featured?: boolean }) {
  return (
    <figure className={`${styles.card} ${featured ? styles.featured : ''}`}>
      <div className={styles.cardHeader}>
        <span className={styles.service}>
          <small>Solution type</small>
          <strong>{testimonial.service}</strong>
        </span>
      </div>
      <span className={styles.quoteMark} aria-hidden="true">·</span>
      <div><p>{testimonial.quote}</p></div>
      <figcaption className={styles.client}>
        <span className={styles.avatar} aria-hidden="true"><Image src={testimonial.image} alt="" fill sizes="52px" /></span>
        <div><strong>{testimonial.name}</strong><span>{testimonial.company}</span></div>
      </figcaption>
    </figure>
  );
}

export default function SolutionsSection() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dragRef = useRef({ active: false, startX: 0, startScroll: 0 });

  const resumeLater = () => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => { pausedRef.current = false; }, 1200);
  };

  useEffect(() => {
    const cards = cardsRef.current;
    if (!cards || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;
    let previous = performance.now();
    const animate = (now: number) => {
      const elapsed = Math.min(now - previous, 50);
      previous = now;
      if (!pausedRef.current) {
        cards.scrollLeft += elapsed * 0.025;
        const loopPoint = cards.scrollWidth / 2;
        if (cards.scrollLeft >= loopPoint) cards.scrollLeft -= loopPoint;
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    const cards = cardsRef.current;
    if (!cards) return;
    pausedRef.current = true;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    dragRef.current = { active: true, startX: event.clientX, startScroll: cards.scrollLeft };
    cards.dataset.dragging = 'true';
    cards.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const cards = cardsRef.current;
    if (!cards || !dragRef.current.active) return;
    cards.scrollLeft = dragRef.current.startScroll - (event.clientX - dragRef.current.startX);
  };

  const endDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    const cards = cardsRef.current;
    if (!cards || !dragRef.current.active) return;
    dragRef.current.active = false;
    delete cards.dataset.dragging;
    if (cards.hasPointerCapture(event.pointerId)) cards.releasePointerCapture(event.pointerId);
    resumeLater();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const cards = cardsRef.current;
    if (!cards || (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight')) return;
    event.preventDefault();
    pausedRef.current = true;
    cards.scrollBy({ left: event.key === 'ArrowRight' ? 340 : -340, behavior: 'smooth' });
    resumeLater();
  };

  return (
    <section className={styles.section} id="products" aria-labelledby="solutions-title">
      <div className={styles.inner}>
        <div className={styles.hero}>
          <div className={styles.copy}>
            <h2 id="solutions-title">Business <em>workflow examples</em></h2>
            <p>Editorial descriptions of workflow areas associated with the supplied project profiles. These summaries are not verbatim client testimonials or measured outcome claims.</p>
          </div>
        </div>
        <div
          ref={cardsRef}
          className={styles.cards}
          id="solution-options"
          role="region"
          aria-label="Client experiences"
          aria-roledescription="carousel"
          tabIndex={0}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onKeyDown={handleKeyDown}
          onFocus={() => { pausedRef.current = true; }}
          onBlur={resumeLater}
        >
          <div className={styles.track}>
            <div className={styles.group}>
              {testimonials.map((testimonial, index) => <TestimonialCard key={testimonial.name} testimonial={testimonial} featured={index === 1 || index === 4} />)}
            </div>
            <div className={`${styles.group} ${styles.duplicate}`} aria-hidden="true">
              {testimonials.map((testimonial, index) => <TestimonialCard key={`${testimonial.name}-duplicate`} testimonial={testimonial} featured={index === 1 || index === 4} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
