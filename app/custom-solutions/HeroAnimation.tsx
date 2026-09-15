'use client';

import { useEffect, useRef } from 'react';
import { observeVisibility } from '../observeVisibility';
import styles from './HeroAnimation.module.css';

const WIDTH = 1448;
const HEIGHT = 1086;
const DURATION = 4750;
const cubeOutline = [[708, 269], [886, 322], [900, 341], [900, 568], [879, 606], [729, 651], [693, 651], [532, 600], [514, 572], [514, 342], [532, 324]];
const platformOutline = [[198, 797], [252, 746], [384, 665], [387, 642], [472, 591], [563, 557], [862, 552], [1009, 600], [1013, 638], [1189, 680], [1220, 708], [1214, 740], [1034, 829], [1025, 905], [953, 950], [689, 986], [490, 957], [245, 887], [198, 847]];

// Masks follow the existing artwork; every layer uses the same cached WebP.
const cards = [
  [[349, 166], [647, 126], [668, 143], [669, 250], [645, 275], [376, 304], [349, 284]],
  [[863, 148], [1143, 174], [1166, 194], [1163, 291], [1142, 307], [879, 279], [857, 255]],
  [[192, 446], [468, 486], [491, 508], [490, 612], [475, 634], [207, 582], [186, 562]],
  [[936, 533], [1231, 498], [1255, 515], [1257, 624], [1235, 642], [959, 668], [935, 646]],
  [[258, 758], [395, 710], [508, 742], [522, 767], [477, 863], [445, 891], [263, 851], [249, 826]],
  [[528, 763], [725, 781], [749, 805], [720, 914], [694, 940], [516, 918], [498, 892]],
  [[794, 780], [976, 748], [1000, 767], [1027, 884], [1004, 918], [831, 941], [806, 919]],
  [[94, 94], [112, 89], [271, 128], [279, 153], [277, 294], [109, 254], [94, 235]],
  [[1186, 151], [1368, 96], [1389, 108], [1388, 280], [1374, 304], [1188, 303]],
  [[1265, 635], [1282, 625], [1416, 676], [1429, 696], [1425, 836], [1279, 785], [1264, 763]],
];
const satellites = [
  [[146, 341], [194, 317], [241, 339], [241, 395], [195, 422], [147, 395]],
  [[1205, 390], [1259, 363], [1318, 388], [1319, 448], [1264, 478], [1207, 451]],
  [[168, 686], [198, 668], [231, 684], [232, 719], [200, 737], [169, 720]],
];

function polygon(points: number[][]) {
  const path = new Path2D();
  points.forEach(([x, y], index) => index ? path.lineTo(x, y) : path.moveTo(x, y));
  path.closePath();
  return path;
}

const progress = (time: number, start: number, duration: number) => Math.max(0, Math.min(1, (time - start) / duration));
const easeOut = (value: number) => 1 - (1 - value) ** 3;

export default function HeroAnimation() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cubeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    const source = imageRef.current;
    const canvas = canvasRef.current;
    const cube = cubeRef.current;
    if (!scene || !source || !canvas || !cube) return;
    const context = canvas.getContext('2d');
    if (!context) { scene.dataset.state = 'complete'; return; }
    const ctx = context;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let disposed = false;
    let ready = false;
    let visible = false;
    let complete = false;
    let elapsed = 0;
    let last: number | null = null;
    let frame = 0;

    const finish = () => {
      complete = true;
      cancelAnimationFrame(frame);
      frame = 0;
      scene.dataset.state = 'complete';
    };
    const cubeMask = polygon(cubeOutline);
    const platformMask = polygon(platformOutline);
    const cardMasks = cards.map(polygon);
    const satelliteMasks = satellites.map(polygon);
    const exclusions = new Path2D();
    exclusions.rect(0, 0, WIDTH, HEIGHT);
    [cubeMask, ...cardMasks, ...satelliteMasks].forEach(path => exclusions.addPath(path));

    function layer(mask: Path2D, alpha: number, offset = 0, excludeObjects = false) {
      if (alpha <= 0) return;
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.translate(0, offset);
      ctx.clip(mask);
      if (excludeObjects) ctx.clip(exclusions, 'evenodd');
      ctx.drawImage(source!, 0, 0, WIDTH, HEIGHT);
      ctx.restore();
    }

    function thread(time: number, front: boolean) {
      const reveal = easeOut(progress(time, 2700, 850));
      if (!reveal) return;
      ctx.save();
      ctx.beginPath();
      // Split the ellipse so the thread passes behind and in front of the cube.
      ctx.ellipse(700, 419, 416, 198, .13, front ? 0 : Math.PI, (front ? 0 : Math.PI) + Math.PI * reveal);
      ctx.strokeStyle = '#24dba4';
      ctx.lineWidth = 2.5;
      ctx.shadowColor = '#4df4b5';
      ctx.shadowBlur = 9;
      ctx.globalAlpha = reveal * .8;
      ctx.stroke();
      for (const fraction of [.12, .46, .82]) {
        if (fraction > reveal) continue;
        const angle = (front ? 0 : Math.PI) + Math.PI * fraction;
        const x = 416 * Math.cos(angle);
        const y = 198 * Math.sin(angle);
        const px = 700 + x * Math.cos(.13) - y * Math.sin(.13);
        const py = 419 + x * Math.sin(.13) + y * Math.cos(.13);
        const glow = ctx.createRadialGradient(px - 3, py - 4, 1, px, py, 14);
        glow.addColorStop(0, '#effff9');
        glow.addColorStop(.35, '#a2ffdb');
        glow.addColorStop(1, '#28c98a');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(px, py, 13, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }

    function draw(time: number) {
      ctx.clearRect(0, 0, WIDTH, HEIGHT);
      const base = easeOut(progress(time, 0, 650));
      // Continue the glass surface beneath the card cutouts until they arrive.
      ctx.save();
      ctx.globalAlpha = base;
      ctx.translate(0, (1 - base) * 48);
      const glass = ctx.createLinearGradient(300, 550, 800, 985);
      glass.addColorStop(0, '#d9f7ea');
      glass.addColorStop(.5, '#a3e5c9');
      glass.addColorStop(1, '#9cddc3');
      ctx.fillStyle = glass;
      ctx.fill(platformMask);
      ctx.restore();
      layer(platformMask, base, (1 - base) * 48, true);
      thread(time, false);

      const appear = easeOut(progress(time, 650, 400));
      const spin = easeOut(progress(time, 1050, 1600));
      const handoff = progress(time, 2650, 300);
      cube!.style.opacity = String(appear * (1 - handoff));
      cube!.style.transform = `translateY(${(1 - appear) * 18}%) scale(${.8 + appear * .2}) rotateX(-24deg) rotateY(${-135 + spin * 810}deg)`;
      layer(cubeMask, handoff);

      thread(time, true);
      cardMasks.forEach((mask, index) => {
        const reveal = easeOut(progress(time, 3050 + index * 75, 420));
        layer(mask, reveal, (1 - reveal) * 22);
      });
      satelliteMasks.forEach((mask, index) => {
        const reveal = easeOut(progress(time, 3620 + index * 100, 420));
        layer(mask, reveal, (1 - reveal) * 15);
      });

      // Seamlessly return to the exact complete artwork once every card is in place.
      if (time > 4350) {
        ctx.save();
        ctx.globalAlpha = progress(time, 4350, 400);
        ctx.drawImage(source!, 0, 0, WIDTH, HEIGHT);
        ctx.restore();
      }
    }

    const tick = (now: number) => {
      frame = 0;
      if (disposed || complete || !visible || !ready) return;
      if (last !== null) elapsed += Math.min(now - last, 100);
      last = now;
      draw(elapsed);
      if (elapsed >= DURATION) finish();
      else frame = requestAnimationFrame(tick);
    };
    const schedule = () => {
      if (disposed || complete || !visible || !ready || frame) return;
      scene.dataset.state = 'playing';
      frame = requestAnimationFrame(tick);
    };
    const resize = () => {
      const scale = Math.min(2, window.devicePixelRatio || 1) * scene.clientWidth / WIDTH;
      canvas.width = Math.max(1, Math.round(WIDTH * scale));
      canvas.height = Math.max(1, Math.round(HEIGHT * scale));
      ctx.setTransform(canvas.width / WIDTH, 0, 0, canvas.height / HEIGHT, 0, 0);
      if (ready && !complete) draw(elapsed);
    };
    const resizeObserver = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(resize);
    resizeObserver?.observe(scene);
    resize();
    const stop = observeVisibility(scene, isVisible => {
      visible = isVisible;
      last = null;
      if (!visible) { cancelAnimationFrame(frame); frame = 0; }
      else schedule();
    });
    const onMotionChange = () => { if (motion.matches) finish(); };
    motion.addEventListener('change', onMotionChange);
    if (motion.matches) finish();
    void source.decode().then(() => {
      if (disposed) return;
      ready = true;
      schedule();
    }).catch(() => { if (!disposed) finish(); });

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      stop();
      resizeObserver?.disconnect();
      motion.removeEventListener('change', onMotionChange);
    };
  }, []);

  return <div className={styles.scene} ref={sceneRef} data-state="pending" role="img" aria-label="A glass platform appears, a green business cube rises and spins to a stop, then a glowing thread connects cards for your people, processes, data, customers, Custom AI, CRM and ERP, and automation.">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img className={styles.artwork} ref={imageRef} src="/custom-solutions-hero.webp" alt="" width={WIDTH} height={HEIGHT} fetchPriority="high" decoding="async" />
    <canvas className={styles.canvas} ref={canvasRef} aria-hidden="true" />
    <div className={styles.cubePosition} aria-hidden="true">
      <div className={styles.cube} ref={cubeRef}>
        {['front', 'right', 'back', 'left', 'top', 'bottom'].map(face => <div className={`${styles.face} ${styles[face]}`} key={face}>
          {face !== 'top' && face !== 'bottom' && <div className={styles.cubeLabel}><span>✳</span>Your<br />Business</div>}
        </div>)}
      </div>
    </div>
    <noscript><style>{`.${styles.scene} .${styles.artwork}{opacity:1!important}`}</style></noscript>
  </div>;
}
