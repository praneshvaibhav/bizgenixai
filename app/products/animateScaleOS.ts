import { observeVisibility } from '../observeVisibility';

export function animateScaleOS(scene: HTMLElement) {
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motion.matches || typeof Element.prototype.animate !== 'function') return () => {};

  const animations: Animation[] = [];
  let finished = false;
  const animate = (element: Element | null, frames: Keyframe[], delay: number, duration: number) => {
    if (!element) return;
    const animation = element.animate(frames, {
      delay, duration, fill: 'both', easing: 'cubic-bezier(.16,1,.3,1)',
    });
    animation.pause();
    animations.push(animation);
  };
  const part = (name: string) => scene.querySelector(`[data-scale-reveal="${name}"]`);

  animate(part('laptop'), [
    { opacity: 0, transform: 'translateY(28px) scale(.96)' },
    { opacity: 1, transform: 'none' },
  ], 0, 700);
  // The physical laptop stays visible with its screen off for 700 ms.
  // Only the dashboard layer powers on; the bezel and reflection stay in place.
  animate(part('screen'), [
    { opacity: 0, filter: 'brightness(.2)' },
    { opacity: .35, filter: 'brightness(.65)', offset: .35 },
    { opacity: 1, filter: 'brightness(1)' },
  ], 1400, 1000);
  animate(part('glow'), [{ opacity: 0 }, { opacity: 1 }], 1500, 1100);
  animate(part('orbit'), [{ opacity: 0 }, { opacity: 1 }], 2400, 650);
  // Use individual translate/scale properties to preserve the cards' CSS offsets.
  scene.querySelectorAll('[data-scale-reveal="card"]').forEach((card, index) => {
    animate(card, [
      { opacity: 0, translate: '-24px 8px', scale: '.92' },
      { opacity: 1, translate: '0 0', scale: '1' },
    ], 2500 + index * 280, 500);
  });
  animate(part('signature'), [
    { opacity: 0, transform: 'translateY(12px)' },
    { opacity: 1, transform: 'none' },
  ], 3750, 500);

  const showAll = () => {
    finished = true;
    animations.forEach(animation => { animation.onfinish = null; animation.cancel(); });
  };
  if (animations.length) animations[animations.length - 1].onfinish = showAll;
  const stopObserving = observeVisibility(scene, visible => {
    if (finished) return;
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
    motion.removeEventListener('change', onMotionChange);
  };
}
