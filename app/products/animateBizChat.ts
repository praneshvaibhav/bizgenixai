import { observeVisibility } from '../observeVisibility';

export function animateBizChat(scene: HTMLElement) {
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const phone = scene.querySelector<HTMLElement>('[data-phone]');
  if (!phone || motion.matches || typeof Element.prototype.animate !== 'function') return () => {};
  const origin = phone.getBoundingClientRect();
  const cards = Array.from(scene.querySelectorAll<HTMLElement>('[data-message-card]'));
  // Read every destination before applying transforms, including the mobile grid.
  const destinations = cards.map(card => card.getBoundingClientRect());
  const animations: Animation[] = [];
  scene.querySelectorAll<HTMLElement>('[data-phone-half]').forEach((half, index) => {
    animations.push(half.animate([
      { opacity: 0, clipPath: index === 0 ? 'inset(100% 0 0 0)' : 'inset(0 0 100% 0)', transform: `translateY(${index === 0 ? 40 : -40}px)` },
      { opacity: 1, clipPath: 'inset(0 0 0 0)', transform: 'translateY(0)' },
    ], { duration: 850, delay: 100, fill: 'both', easing: 'cubic-bezier(.22,1,.36,1)' }));
  });
  const lines = scene.querySelectorAll<SVGPathElement>('[data-message-line]');
  cards.forEach((card, index) => {
    const bounds = destinations[index];
    const x = origin.left + origin.width / 2 - bounds.left - bounds.width / 2;
    const y = origin.top + origin.height / 2 - bounds.top - bounds.height / 2;
    const delay = 1050 + index * 400;
    if (lines[index]) animations.push(lines[index].animate([{ opacity: 0 }, { opacity: 1 }], { duration: 450, delay, fill: 'both' }));
    animations.push(card.animate([
      { opacity: 0, transform: `translate(${x}px, ${y}px) scale(.45)` },
      { opacity: 1, transform: 'translate(0, 0) scale(1)' },
    ], { duration: 500, delay, fill: 'both', easing: 'cubic-bezier(.22,1,.36,1)' }));
  });
  animations.forEach(animation => animation.pause());
  let done = false;
  const showAll = () => {
    done = true;
    animations.forEach(animation => { animation.onfinish = null; animation.cancel(); });
  };
  animations[animations.length - 1].onfinish = showAll;
  const stop = observeVisibility(scene, visible => {
    if (done) return;
    animations.forEach(animation => {
      if (animation.playState === 'finished') return;
      if (visible) animation.play();
      else animation.pause();
    });
  });
  const onMotionChange = () => { if (motion.matches) showAll(); };
  let width = scene.clientWidth;
  const onResize = () => {
    if (scene.clientWidth !== width) { width = scene.clientWidth; showAll(); }
  };
  window.addEventListener('resize', onResize);
  scene.addEventListener('focusin', showAll);
  motion.addEventListener('change', onMotionChange);
  return () => {
    stop();
    showAll();
    window.removeEventListener('resize', onResize);
    scene.removeEventListener('focusin', showAll);
    motion.removeEventListener('change', onMotionChange);
  };
}
