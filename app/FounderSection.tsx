'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function FounderSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const portrait = section?.querySelector<HTMLElement>('.portrait');
    const signature = section?.querySelector<HTMLElement>('.founderSignature');
    const lettering = signature?.querySelector<HTMLElement>('.founderSignatureText');
    const stroke = signature?.querySelector<HTMLElement>('.founderSignatureStroke');
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!portrait || !signature || !lettering || !stroke || motion.matches ||
        !('IntersectionObserver' in window) || !('animate' in Element.prototype)) return;

    const reveal = portrait.animate([
      { opacity: 0, translate: '0 30px', scale: '.96' },
      { opacity: 1, translate: '0 0', scale: '1' },
    ], { duration: 850, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'both' });

    // Reveal the existing cursive lettering continuously, with brief pen pauses.
    const writing = lettering.animate([
      { clipPath: 'inset(0 100% 0 0)', offset: 0 },
      { clipPath: 'inset(0 76% 0 0)', offset: .22 },
      { clipPath: 'inset(0 52% 0 0)', offset: .43 },
      { clipPath: 'inset(0 52% 0 0)', offset: .5 },
      { clipPath: 'inset(0 23% 0 0)', offset: .76 },
      { clipPath: 'inset(0 0% 0 0)', offset: 1 },
    ], { duration: 900, delay: 100, easing: 'linear', fill: 'both' });
    const underline = stroke.animate([
      { transform: 'rotate(-2deg) scaleX(0)' },
      { transform: 'rotate(-2deg) scaleX(1)' },
    ], { duration: 250, delay: 1000, easing: 'ease-out', fill: 'both' });
    const animations = [reveal, writing, underline];
    animations.forEach(animation => {
      animation.pause();
      animation.onfinish = () => animation.cancel();
    });

    let disposed = false;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (disposed || !entry.isIntersecting || entry.intersectionRatio < .15) return;
        observer.unobserve(entry.target);
        if (entry.target === portrait) {
          const image = portrait.querySelector('img');
          // Wait for the lazy-loaded photo so the reveal shows the actual image.
          Promise.resolve(image?.decode()).catch(() => {}).then(() => {
            if (!disposed) reveal.play();
          });
        } else {
          writing.play();
          underline.play();
        }
      });
    }, { threshold: .15, rootMargin: '0px 0px -24px 0px' });
    observer.observe(portrait);
    observer.observe(signature);

    const showAll = () => {
      disposed = true;
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
    <section ref={sectionRef} className="founder section" id="founder">
      <div className="portrait">
        <Image src="/founder-umang-ratani.webp" alt="Dr. CA Umang Ratani, founder of Bizgenix AI" width={1024} height={1536} sizes="(max-width: 800px) 90vw, 45vw" />
        <span>THE BUSINESS LEADER&apos;S AI ARCHITECT</span>
      </div>
      <div>
        <p className="eyebrow">THE FOUNDER</p>
        <h2>Led by a business advisor who understands both numbers and AI.</h2>
        <h3>Dr. CA Umang Ratani</h3>
        <p className="credentials">CA &nbsp; CS &nbsp; MBA &nbsp; LLB &nbsp; PhD</p>
        <p>13+ years of business advisory experience. 1,000+ businesses advised. ₹750+ Cr cumulative growth guided.</p>
        <div className="founderSignature">
          <span className="founderSignatureText">Umang Ratani</span>
          <span className="founderSignatureStroke" aria-hidden="true" />
        </div>
        <a className="textBtn" href="https://www.umangratani.com/" target="_blank" rel="noopener noreferrer">Meet the Founder <span>→</span></a>
      </div>
    </section>
  );
}
