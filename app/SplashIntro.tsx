'use client';

import { createContext, useContext, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import styles from './SplashIntro.module.css';

const SplashCompleteContext = createContext(true);

export const useSplashComplete = () => useContext(SplashCompleteContext);

export default function SplashIntro({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(true);
  const splashRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    // Each intro leads to the beginning, including reloads from a section link.
    if (window.location.hash) {
      window.history.replaceState(window.history.state, '', window.location.pathname + window.location.search);
    }
    return () => { window.history.scrollRestoration = previousRestoration; };
  }, []);

  useEffect(() => {
    if (!active) return;
    const splash = splashRef.current;
    if (!splash) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const animations: Animation[] = [];
    let disposed = false;
    const finish = () => {
      if (!disposed) setActive(false);
    };
    // Never leave the homepage blocked by an unavailable image or animation API.
    const timeout = window.setTimeout(finish, 5000);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') finish();
    };
    const onMotionChange = () => {
      if (motion.matches) finish();
    };
    document.addEventListener('keydown', onKeyDown);
    motion.addEventListener('change', onMotionChange);

    const play = async () => {
      const symbol = splash.querySelector<HTMLImageElement>('[data-logo-symbol]');
      const wordmark = splash.querySelector<HTMLImageElement>('[data-logo-wordmark]');
      if (motion.matches || !symbol || !wordmark || typeof splash.animate !== 'function') {
        finish();
        return;
      }
      try {
        await Promise.all([symbol.decode(), wordmark.decode()]);
        if (disposed) return;
        if (motion.matches) { finish(); return; }
        animations.push(symbol.animate([
          { opacity: 0, transform: 'translateX(28.5%) scale(.72)', offset: 0 },
          { opacity: 1, transform: 'translateX(28.5%) scale(1)', offset: .4 },
          { opacity: 1, transform: 'translateX(28.5%) scale(1)', offset: .55 },
          { opacity: 1, transform: 'translateX(0) scale(1)', offset: 1 },
        ], { duration: 1100, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'forwards' }));
        animations.push(wordmark.animate([
          { clipPath: 'inset(25% 66% 25% 34%)' },
          { clipPath: 'inset(25% 8% 25% 34%)' },
        ], { delay: 1100, duration: 950, easing: 'linear', fill: 'forwards' }));
        const exit = splash.animate([{ opacity: 1 }, { opacity: 0 }], {
          delay: 2450, duration: 450, easing: 'ease-in-out', fill: 'forwards',
        });
        animations.push(exit);
        await exit.finished;
        finish();
      } catch {
        finish();
      }
    };
    // Defer the reduced-motion bypass as well as animation setup until mount.
    const frame = requestAnimationFrame(() => { void play(); });
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
      animations.forEach(animation => animation.cancel());
      document.removeEventListener('keydown', onKeyDown);
      motion.removeEventListener('change', onMotionChange);
    };
  }, [active]);

  useLayoutEffect(() => {
    if (active) return;
    // Reset before paint; bypass the site's smooth scrolling and saved position.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    const frame = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    });
    return () => cancelAnimationFrame(frame);
  }, [active]);

  return (
    <>
      <noscript><style>{`.${styles.splash}{display:none!important}.${styles.content}{display:block!important}`}</style></noscript>
      {active && (
        <div className={styles.splash} ref={splashRef}>
          <div className={styles.logo} role="img" aria-label="Welcome to Bizgenix AI">
            {/* Clip two copies of the original asset to preserve the exact brand artwork. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img data-logo-symbol className={styles.symbol} src="/bizgenixlogo.webp" width="640" height="233" alt="" fetchPriority="high" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img data-logo-wordmark className={styles.wordmark} src="/bizgenixlogo.webp" width="640" height="233" alt="" />
          </div>
          <button className={styles.skip} onClick={() => setActive(false)}>Skip intro</button>
        </div>
      )}
      {/* No layout while the intro plays, so viewport animations wait for the homepage. */}
      <SplashCompleteContext.Provider value={!active}>
        <div className={styles.content} data-intro-active={active}>{children}</div>
      </SplashCompleteContext.Provider>
    </>
  );
}
