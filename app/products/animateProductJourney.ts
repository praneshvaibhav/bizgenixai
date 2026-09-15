import { observeVisibility } from '../observeVisibility';

export function animateProductJourney(flow: HTMLElement) {
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motion.matches || typeof Element.prototype.animate !== 'function') return () => {};

  const animations: Animation[] = [];
  const cards = Array.from(flow.querySelectorAll('[data-journey-card]'));
  if (!cards.length) return () => {};
  const start = 250;
  const duration = cards.length * 1000;
  let finished = false;
  const animate = (element: Element | null, frames: Keyframe[], delay: number, length: number, easing = 'cubic-bezier(.16,1,.3,1)') => {
    if (!element) return;
    const animation = element.animate(frames, { delay, duration: length, easing, fill: 'both' });
    animation.playbackRate = 2;
    animation.pause();
    animations.push(animation);
  };

  animate(flow.querySelector('[data-journey-liquid]'), [
    { clipPath: 'inset(0 100% 0 0 round 20px)' },
    { clipPath: 'inset(0 0% 0 0 round 20px)' },
  ], start, duration, 'linear');

  const points = flow.querySelectorAll('[data-journey-point]');
  const numbers = flow.querySelectorAll('[data-journey-number]');
  const stems = flow.querySelectorAll('[data-journey-stem]');
  cards.forEach((card, index) => {
    // Equal grid columns place each point at its column's midpoint.
    // Every reveal derives from the same line travel time, avoiding timer drift.
    const arrival = start + duration * (index + .5) / cards.length;
    animate(points[index], [
      { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)' },
    ], arrival - 100, 220, 'linear');
    animate(numbers[index], [{ color: '#4c8b66' }, { color: '#ffffff' }], arrival, 180);
    animate(stems[index], [{ transform: 'scaleY(0)' }, { transform: 'scaleY(1)' }], arrival + 100, 200, 'linear');
    animate(card, [
      { opacity: 0, transform: 'translateY(20px) scale(.96)' },
      { opacity: 1, transform: 'none' },
    ], arrival + 340, 450);
  });

  const showAll = () => {
    finished = true;
    flow.dataset.flowRunning = 'false';
    animations.forEach(animation => { animation.onfinish = null; animation.cancel(); });
  };
  animations[animations.length - 1].onfinish = showAll;
  const stopObserving = observeVisibility(flow, visible => {
    if (finished) return;
    flow.dataset.flowRunning = String(visible);
    animations.forEach(animation => {
      if (animation.playState === 'finished') return;
      if (visible) animation.play();
      else animation.pause();
    });
  });
  const onMotionChange = () => { if (motion.matches) showAll(); };
  motion.addEventListener('change', onMotionChange);
  return () => {
    stopObserving();
    showAll();
    delete flow.dataset.flowRunning;
    motion.removeEventListener('change', onMotionChange);
  };
}
