'use client';

import { useEffect } from 'react';

export default function LearningPageAnimator() {
  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motion.matches || !('IntersectionObserver' in window) || !('animate' in Element.prototype)) return;
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-learning-reveal]'));
    elements.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(28px)';
      element.style.willChange = 'opacity, transform';
    });
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const element = entry.target as HTMLElement;
        const animation = element.animate([
          { opacity: 0, transform: 'translateY(28px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ], { duration: 720, easing: 'cubic-bezier(.2,.7,.3,1)', fill: 'forwards' });
        animation.onfinish = () => {
          element.style.opacity = '1';
          element.style.transform = 'none';
          element.style.willChange = 'auto';
          animation.cancel();
        };
        observer.unobserve(element);
      });
    }, { threshold: 0, rootMargin: '0px 0px -18% 0px' });
    elements.forEach(element => observer.observe(element));
    return () => {
      observer.disconnect();
      elements.forEach(element => {
        element.style.opacity = '';
        element.style.transform = '';
        element.style.willChange = '';
      });
    };
  }, []);

  return null;
}
