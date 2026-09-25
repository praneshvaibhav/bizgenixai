'use client';

import { useEffect, useState } from 'react';
import { useSplashComplete } from './SplashIntro';
import styles from './HeroIntro.module.css';

const headline = ['AI That Takes Work', 'Off Your Desk.'];
const description = 'Bizgenix builds AI systems, business automations and intelligent applications that help Indian businesses reduce repetitive work, respond faster, improve visibility and scale without unnecessary operational complexity.';
const headlineLength = headline.join('').length;
const totalLength = headlineLength + description.length;
const headlineSpeed = 48;
const descriptionSpeed = 11;
const descriptionDelay = headlineLength * headlineSpeed + 180;

function TypedText({ text, count, cursor }: { text: string; count: number; cursor: boolean }) {
  const visible = Math.max(0, Math.min(text.length, count));
  return <>{text.slice(0, visible)}{cursor && <span className={styles.caret} />}<span className={styles.untyped}>{text.slice(visible)}</span></>;
}

export default function HeroIntro() {
  const splashComplete = useSplashComplete();
  const [visibleCharacters, setVisibleCharacters] = useState(0);

  useEffect(() => {
    if (!splashComplete) return;

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let startedAt: number | undefined;
    const tick = (now: number) => {
      if (motion.matches) {
        setVisibleCharacters(totalLength);
        return;
      }
      startedAt ??= now;
      const elapsed = now - startedAt;
      const headingCount = Math.min(headlineLength, Math.floor(elapsed / headlineSpeed));
      const descriptionCount = Math.max(0, Math.floor((elapsed - descriptionDelay) / descriptionSpeed));
      const nextCount = Math.min(totalLength, headingCount + descriptionCount);
      setVisibleCharacters(nextCount);
      if (nextCount < totalLength) frame = requestAnimationFrame(tick);
    };
    const onMotionChange = () => {
      if (!motion.matches) return;
      cancelAnimationFrame(frame);
      setVisibleCharacters(totalLength);
    };

    frame = requestAnimationFrame(tick);
    motion.addEventListener('change', onMotionChange);
    return () => {
      cancelAnimationFrame(frame);
      motion.removeEventListener('change', onMotionChange);
    };
  }, [splashComplete]);

  const typingHeading = splashComplete && visibleCharacters < headlineLength;
  const typingDescription = splashComplete && visibleCharacters >= headlineLength && visibleCharacters < totalLength;

  return (
    <>
      <noscript><style>{`.${styles.untyped}{visibility:visible!important}.${styles.caret}{display:none!important}`}</style></noscript>
      <h1>
        <span className={styles.srOnly}>{headline.join(' ')}</span>
        <span aria-hidden="true">
          <TypedText text={headline[0]} count={visibleCharacters} cursor={typingHeading && visibleCharacters < headline[0].length} /><br />
          <TypedText text={headline[1]} count={visibleCharacters - headline[0].length} cursor={typingHeading && visibleCharacters >= headline[0].length} />
        </span>
      </h1>
      <p className="lead">
        <span className={styles.srOnly}>{description}</span>
        <span aria-hidden="true"><TypedText text={description} count={visibleCharacters - headlineLength} cursor={typingDescription} /></span>
      </p>
    </>
  );
}
