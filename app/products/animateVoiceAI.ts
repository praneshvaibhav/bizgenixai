import { observeVisibility } from '../observeVisibility';

/** A single paused timeline keeps the phone, screen and pop-ups in order. */
export function animateVoiceAI(root: HTMLElement) {
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motion.matches || typeof Element.prototype.animate !== 'function') return () => {};

  const animations: Animation[] = [];
  let finished = false;
  const reveal = (selector: string, delay: number, duration: number, transform = 'translateY(18px) scale(.9)') => {
    root.querySelectorAll(selector).forEach(element => {
      const animation = element.animate([
        { opacity: 0, transform },
        { opacity: 1, transform: 'none' },
      ], { duration, delay, fill: 'both', easing: 'cubic-bezier(.16,1,.3,1)' });
      animation.pause();
      animations.push(animation);
    });
  };

  // Finish each main stage before the next begins; pop-ups originate at the phone.
  reveal('[data-voice-reveal="phone"]', 0, 800, 'translateY(55px) scale(.87)');
  reveal('[data-voice-reveal="screen"]', 900, 650, 'scale(.98)');
  reveal('[data-voice-reveal="halo"]', 1550, 750, 'scale(.7)');
  reveal('[data-voice-reveal="wave"]', 1650, 650, 'scaleX(.3)');
  reveal('[data-voice-reveal="hello"]', 1800, 550, 'translate(75px, 45px) scale(.55)');
  reveal('[data-voice-reveal="reply"]', 2400, 550, 'translate(75px, 0) scale(.55)');
  reveal('[data-voice-reveal="booking"]', 3000, 550, 'translate(75px, -45px) scale(.55)');
  reveal('[data-voice-reveal="workflow"]', 3550, 600, 'translateX(-40px) scale(.94)');
  root.querySelectorAll('[data-voice-reveal="workflow"] li').forEach((row, index) => {
    const animation = row.animate([
      { opacity: 0, transform: 'translateX(-14px)' },
      { opacity: 1, transform: 'none' },
    ], { duration: 350, delay: 3900 + index * 260, fill: 'both', easing: 'ease-out' });
    animation.pause();
    animations.push(animation);
  });
  // Animate a wrapper so the handwritten note keeps its CSS rotation.
  reveal('[data-voice-reveal="signature"]', 5250, 550, 'translateY(12px)');

  const showAll = () => {
    finished = true;
    animations.forEach(animation => { animation.onfinish = null; animation.cancel(); });
  };
  animations[animations.length - 1].onfinish = showAll;
  const stopObserving = observeVisibility(root, visible => {
    root.dataset.voicePlaying = String(visible);
    if (finished) return;
    animations.forEach(animation => {
      if (visible && animation.playState !== 'finished') animation.play();
      else if (!visible && animation.playState !== 'finished') animation.pause();
    });
  });
  const onMotionChange = () => { if (motion.matches) showAll(); };
  motion.addEventListener('change', onMotionChange);
  return () => {
    stopObserving();
    showAll();
    delete root.dataset.voicePlaying;
    motion.removeEventListener('change', onMotionChange);
  };
}
