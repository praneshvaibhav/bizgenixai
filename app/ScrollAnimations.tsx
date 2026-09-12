'use client';

import { useEffect } from 'react';
import { observeVisibility } from './observeVisibility';

export default function ScrollAnimations() {
  useEffect(() => {
    const cleanups = Array.from(document.querySelectorAll<HTMLElement>('[data-scroll-animation]')).map(element => {
      const stop = observeVisibility(element, visible => {
        element.dataset.animationVisible = String(visible);
      });
      return () => { stop(); delete element.dataset.animationVisible; };
    });
    return () => cleanups.forEach(cleanup => cleanup());
  }, []);
  return null;
}
