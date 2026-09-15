import { observeVisibility } from '../observeVisibility';

export function animateWorkflow(card: HTMLElement) {
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motion.matches || typeof Element.prototype.animate !== 'function') return () => {};
  const animations: Animation[] = [];
  card.querySelectorAll<HTMLElement>('[data-workflow-check]').forEach((check, index) => {
    const tick = check.querySelector('path')!;
    animations.push(check.animate([
      { opacity: .25, transform: 'scale(.8)' },
      { opacity: 1, transform: 'scale(1.12)', offset: .7 },
      { opacity: 1, transform: 'scale(1)' },
    ], { duration: 400, delay: 300 + index * 650, fill: 'both', easing: 'ease-out' }));
    animations.push(tick.animate([
      { strokeDashoffset: 1 }, { strokeDashoffset: 0 },
    ], { duration: 320, delay: 440 + index * 650, fill: 'both', easing: 'ease-out' }));
  });
  animations.forEach(animation => animation.pause());
  let finished = false;
  const showAll = () => {
    finished = true;
    animations.forEach(animation => { animation.onfinish = null; animation.cancel(); });
  };
  if (animations.length) animations[animations.length - 1].onfinish = showAll;
  const stop = observeVisibility(card, visible => {
    if (finished) return;
    animations.forEach(animation => {
      if (visible && animation.playState !== 'finished') animation.play();
      else if (!visible && animation.playState !== 'finished') animation.pause();
    });
  });
  const onMotionChange = () => { if (motion.matches) showAll(); };
  motion.addEventListener('change', onMotionChange);
  card.addEventListener('focusin', showAll);
  return () => {
    stop();
    showAll();
    motion.removeEventListener('change', onMotionChange);
    card.removeEventListener('focusin', showAll);
  };
}
