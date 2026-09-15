import { observeVisibility } from '../observeVisibility';

/** Pop each card into place when its stable grid slot enters the viewport. */
export function animateSuiteCards(grid: HTMLElement) {
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const slots = Array.from(grid.querySelectorAll<HTMLElement>('[data-suite-slot]'));
  if (motion.matches || !slots.length || typeof Element.prototype.animate !== 'function') return () => {};

  const items = slots.map((slot, index) => {
    const card = slot.querySelector<HTMLElement>('article')!;
    const animation = card.animate([
      { opacity: 0, transform: 'translateY(24px) scale(.88)', offset: 0 },
      { opacity: 1, transform: 'translateY(-3px) scale(1.025)', offset: .72 },
      { opacity: 1, transform: 'translateY(0) scale(1)', offset: 1 },
    ], { duration: 550, delay: index * 90, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'both' });
    animation.pause();
    return { animation, done: false };
  });
  let disposed = false;

  const finish = (index: number) => {
    const item = items[index];
    item.done = true;
    item.animation.onfinish = null;
    item.animation.cancel();
  };
  items.forEach((item, index) => {
    item.animation.onfinish = () => finish(index);
  });
  const stopObservers = slots.map((slot, index) => observeVisibility(slot, visible => {
    const item = items[index];
    if (disposed || item.done) return;
    if (visible) item.animation.play();
    else item.animation.pause();
  }));
  const showAll = () => items.forEach((_, index) => finish(index));
  const onMotionChange = () => { if (motion.matches) showAll(); };
  grid.addEventListener('focusin', showAll);
  motion.addEventListener('change', onMotionChange);
  return () => {
    disposed = true;
    stopObservers.forEach(stop => stop());
    showAll();
    grid.removeEventListener('focusin', showAll);
    motion.removeEventListener('change', onMotionChange);
  };
}
