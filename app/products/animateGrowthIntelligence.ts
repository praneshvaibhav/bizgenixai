import { observeVisibility } from '../observeVisibility';

/** Screen off → loaded dashboard → four separate, non-overlapping card reveals. */
export function animateGrowthIntelligence(scene: HTMLElement, screenImage: HTMLImageElement) {
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motion.matches || typeof Element.prototype.animate !== 'function') return () => {};

  const animations: Animation[] = [];
  let visible = false;
  let imageReady = false;
  let finished = false;
  let disposed = false;
  const animate = (element: Element | null, frames: Keyframe[], delay: number, duration: number) => {
    if (!element) return;
    const animation = element.animate(frames, {
      delay, duration, fill: 'both', easing: 'cubic-bezier(.16,1,.3,1)',
    });
    animation.pause();
    animations.push(animation);
  };

  // Only the display changes; the physical laptop is visible from the first frame.
  animate(scene.querySelector('[data-growth-reveal="screen"]'), [
    { opacity: 0, filter: 'brightness(.25)' },
    { opacity: .45, filter: 'brightness(.7)', offset: .4 },
    { opacity: 1, filter: 'brightness(1)' },
  ], 1200, 900);
  animate(scene.querySelector('[data-growth-reveal="glow"]'), [
    { opacity: 0 }, { opacity: 1 },
  ], 1200, 1000);
  animate(scene.querySelector('[data-growth-reveal="orbit"]'), [
    { opacity: 0 }, { opacity: 1 },
  ], 2100, 350);
  scene.querySelectorAll('[data-growth-reveal="card"]').forEach((card, index) => {
    // CSS translate keeps each card's offset along the curved connection intact.
    animate(card, [
      { opacity: 0, transform: 'translateX(-22px) scale(.94)' },
      { opacity: 1, transform: 'none' },
    ], 2300 + index * 600, 450);
  });

  const showAll = () => {
    finished = true;
    animations.forEach(animation => { animation.onfinish = null; animation.cancel(); });
  };
  if (animations.length) animations[animations.length - 1].onfinish = showAll;
  const updatePlayback = () => {
    if (disposed || finished) return;
    animations.forEach(animation => {
      if (animation.playState === 'finished') return;
      if (visible && imageReady) animation.play();
      else animation.pause();
    });
  };
  const stopObserving = observeVisibility(scene, inView => {
    visible = inView;
    updatePlayback();
  });
  // Wait for decoding so a slow image request cannot reveal the cards first.
  const onImageLoad = () => {
    const decoded = typeof screenImage.decode === 'function' ? screenImage.decode() : Promise.resolve();
    void decoded.catch(() => {}).then(() => {
      if (disposed) return;
      imageReady = true;
      updatePlayback();
    });
  };
  const onImageError = () => showAll();
  screenImage.addEventListener('load', onImageLoad);
  screenImage.addEventListener('error', onImageError);
  if (screenImage.complete) {
    if (screenImage.naturalWidth > 0) onImageLoad();
    else showAll();
  }
  const onMotionChange = () => { if (motion.matches) showAll(); };
  motion.addEventListener('change', onMotionChange);
  return () => {
    disposed = true;
    stopObserving();
    showAll();
    screenImage.removeEventListener('load', onImageLoad);
    screenImage.removeEventListener('error', onImageError);
    motion.removeEventListener('change', onMotionChange);
  };
}
