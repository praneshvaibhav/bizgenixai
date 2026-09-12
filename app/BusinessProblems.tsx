'use client';

import { useEffect, useRef } from 'react';
import styles from './BusinessProblems.module.css';
import { observeVisibility } from './observeVisibility';

const problems = [
  'Missed enquiries and delayed follow-ups',
  'Teams repeating the same manual work every day',
  'Payment delays and weak receivable visibility',
  'Data scattered across Tally, Excel, WhatsApp and separate tools',
  'Business owners depending on people for routine approvals and updates',
  'Slow reporting and decisions based on outdated information',
];

export default function BusinessProblems() {
  const diagramRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const revealedCards = useRef(problems.map(() => true));
  const revealedAt = useRef(problems.map(() => -Infinity));

  useEffect(() => {
    const diagram = diagramRef.current;
    if (!diagram) return;
    const cards = Array.from(diagram.querySelectorAll<HTMLElement>(`.${styles.card}`));
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motion.matches || !('IntersectionObserver' in window) || !('animate' in Element.prototype)) return;

    const animations: Animation[] = [];
    let cancelled = false;
    const visible = new Set<Element>();
    const waiting = new Map<Element, () => void>();
    const playing = new Map<Element, Animation>();
    const stops = [diagram, ...cards].map(element => observeVisibility(element, inView => {
      if (inView) {
        visible.add(element);
        waiting.get(element)?.();
        waiting.delete(element);
        const animation = playing.get(element);
        if (animation?.playState === 'paused') animation.play();
      } else {
        visible.delete(element);
        const animation = playing.get(element);
        if (animation?.playState === 'running') animation.pause();
      }
    }));
    const waitUntilVisible = (element: Element) => visible.has(element) ? Promise.resolve() : new Promise<void>(resolve => waiting.set(element, resolve));
    revealedCards.current = problems.map(() => false);
    revealedAt.current = problems.map(() => Infinity);
    cards.forEach(card => { card.dataset.reveal = 'pending'; });

    const playSequence = async () => {
      try {
        // Wait for each complete box to pop before starting the next one.
        for (const [index, card] of cards.entries()) {
          await waitUntilVisible(card);
          if (cancelled) return;
          delete card.dataset.reveal;
          revealedCards.current[index] = true;
          revealedAt.current[index] = performance.now();
          const pop = card.animate([
            { opacity: 0, transform: 'translateY(12px) scale(.88)', offset: 0 },
            { opacity: 1, transform: 'translateY(0) scale(1.035)', offset: .65 },
            { opacity: 1, transform: 'translateY(0) scale(1)', offset: 1 },
          ], { duration: 450, easing: 'ease-out' });
          animations.push(pop);
          playing.set(card, pop);
          await pop.finished;
        }
        await waitUntilVisible(diagram);
        if (cancelled) return;
        const group = diagram.querySelector<HTMLElement>(`.${styles.cards}`);
        if (!group) return;
        // Opacity on the group blinks every complete card, including its
        // background, border and shadow, at precisely the same time.
        const blink = group.animate([
          { opacity: 1, offset: 0 },
          { opacity: 0, offset: .2 },
          { opacity: 1, offset: .4 },
          { opacity: 0, offset: .65 },
          { opacity: 1, offset: .85 },
          { opacity: 1, offset: 1 },
        ], { duration: 800, easing: 'ease-in-out' });
        animations.push(blink);
        playing.set(diagram, blink);
      } catch {
        // Cancelling on unmount or a reduced-motion change rejects finished.
      }
    };

    void playSequence();

    const showAll = () => {
      cancelled = true;
      stops.forEach(stop => stop());
      waiting.forEach(resolve => resolve());
      waiting.clear();
      animations.forEach(animation => animation.cancel());
      cards.forEach(card => { delete card.dataset.reveal; });
      revealedCards.current = problems.map(() => true);
      revealedAt.current = problems.map(() => -Infinity);
    };
    const onMotionChange = () => { if (motion.matches) showAll(); };
    motion.addEventListener('change', onMotionChange);
    return () => {
      showAll();
      motion.removeEventListener('change', onMotionChange);
    };
  }, []);

  useEffect(() => {
    const diagram = diagramRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!diagram || !canvas || !context) return;

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let disposed = false;
    let visible = false;
    let width = 0;
    let height = 0;
    type Point = { x: number; y: number };
    let paths: [Point, Point, Point, Point][] = [];

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);
      paths.forEach(([start, first, second, end], index) => {
        if (!revealedCards.current[index]) return;
        const elapsed = time - revealedAt.current[index];
        const progress = motion.matches ? 1 : Math.min(1, Math.max(0, elapsed / 450));
        const pointAt = (t: number) => {
          const u = 1 - t;
          return {
            x: u ** 3 * start.x + 3 * u * u * t * first.x + 3 * u * t * t * second.x + t ** 3 * end.x,
            y: u ** 3 * start.y + 3 * u * u * t * first.y + 3 * u * t * t * second.y + t ** 3 * end.y,
          };
        };
        context.beginPath();
        context.moveTo(start.x, start.y);
        // Draw the connection from its box toward the object during the pop.
        for (let step = 1; step <= 48; step++) {
          const point = pointAt(progress * step / 48);
          context.lineTo(point.x, point.y);
        }
        context.strokeStyle = '#388a5f88';
        context.lineWidth = 1.25;
        context.setLineDash([4, 6]);
        context.stroke();
        context.setLineDash([]);

        context.fillStyle = '#278255';
        context.beginPath();
        context.arc(start.x, start.y, 3, 0, Math.PI * 2);
        context.fill();

        // Every dot travels from its card into the central artwork.
        const flowTime = Number.isFinite(elapsed) ? Math.max(0, elapsed - 450) : time;
        const t = motion.matches ? .55 : progress < 1 ? progress : (flowTime / 2900) % 1;
        const { x, y } = pointAt(t);
        context.beginPath();
        context.arc(x, y, 8, 0, Math.PI * 2);
        context.fillStyle = '#35c97825';
        context.fill();
        context.beginPath();
        context.arc(x, y, 3.5, 0, Math.PI * 2);
        context.fillStyle = '#168a57';
        context.fill();
      });
      if (visible && !motion.matches && !disposed) frame = requestAnimationFrame(draw);
    };

    const measure = () => {
      cancelAnimationFrame(frame);
      const bounds = diagram.getBoundingClientRect();
      const artwork = diagram.querySelector<HTMLElement>(`.${styles.artwork}`)?.getBoundingClientRect();
      if (!artwork || !bounds.width || !bounds.height) return;
      width = bounds.width;
      height = bounds.height;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const center = { x: artwork.left - bounds.left + artwork.width / 2, y: artwork.top - bounds.top + artwork.height / 2 };
      paths = Array.from(diagram.querySelectorAll<HTMLElement>(`.${styles.card}`)).map<[Point, Point, Point, Point]>((card, index) => {
        // Measure layout coordinates so the pop transform cannot shift the flow paths.
        let left = 0;
        let top = 0;
        let element: HTMLElement | null = card;
        while (element && element !== diagram) {
          left += element.offsetLeft;
          top += element.offsetTop;
          element = element.offsetParent as HTMLElement | null;
        }
        const rect = { width: card.offsetWidth, height: card.offsetHeight };
        const cardCenter = { x: left + rect.width / 2, y: top + rect.height / 2 };
        const dx = center.x - cardCenter.x;
        const dy = center.y - cardCenter.y;
        const edge = Math.min((rect.width / 2 + 2) / Math.max(Math.abs(dx), .001), (rect.height / 2 + 2) / Math.max(Math.abs(dy), .001));
        const start = { x: cardCenter.x + dx * edge, y: cardCenter.y + dy * edge };
        const radius = 1 / Math.hypot(dx / (artwork.width * .36), dy / (artwork.height * .36));
        const end = { x: center.x - dx * radius, y: center.y - dy * radius };
        const bend = index % 2 ? -.2 : .2;
        const vx = end.x - start.x;
        const vy = end.y - start.y;
        return [start, { x: start.x + vx * .35 - vy * bend, y: start.y + vy * .35 + vx * bend }, { x: start.x + vx * .7 - vy * bend, y: start.y + vy * .7 + vx * bend }, end];
      });
      if (visible) frame = requestAnimationFrame(draw);
    };

    const observer = new ResizeObserver(measure);
    observer.observe(diagram);
    diagram.querySelectorAll<HTMLElement>(`.${styles.card}, .${styles.artwork}`).forEach(element => observer.observe(element));
    window.addEventListener('resize', measure);
    motion.addEventListener('change', measure);
    const stop = observeVisibility(diagram, inView => {
      visible = inView;
      cancelAnimationFrame(frame);
      if (visible) measure();
    });
    measure();
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      stop();
      window.removeEventListener('resize', measure);
      motion.removeEventListener('change', measure);
    };
  }, []);

  return (
    <section id="solutions" className={styles.section} aria-labelledby="business-problems-title">
      <div className={styles.layout}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}><span aria-hidden="true" />03 / BUSINESS PROBLEMS WE SOLVE</p>
          <h2 id="business-problems-title" className={styles.title}>Business Problems<br />We Solve</h2>
          <h3 className={styles.statement}>Your business may not need more software. It may need fewer leaks.</h3>
          <p className={styles.description}>We identify where time, leads, money and management attention are getting lost, then build the right AI system around that problem.</p>
        </div>
        <div className={styles.diagram} ref={diagramRef}>
          <div className={styles.halo} aria-hidden="true" />
          <canvas ref={canvasRef} className={styles.connections} aria-hidden="true" />
          {/* Display only the central artwork from the supplied reference, without altering the source image. */}
          <div className={styles.artwork} role="img" aria-label="A stack of business documents with a warning sign labelled Business Leaks" />
          <ul className={styles.cards}>
            {problems.map((problem, index) => (
              <li key={problem} className={`${styles.card} ${styles[`card${index}`]}`}>{problem}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
