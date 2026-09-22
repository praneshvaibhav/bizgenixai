'use client';

/* eslint-disable @next/next/no-html-link-for-pages -- Match the site's document navigation. */
/* eslint-disable @next/next/no-img-element -- Use the existing local company logo. */
import { useRef, useState } from 'react';
import styles from './Navigation.module.css';

const links = [
  ['About', '/about'], ['Custom Solution', '/custom-solutions'],
  ['Product', '/products'], ['Learning', '/courses'], ['Case Study', '/case-studies'], ['Blog', '/blog'], ['Contact Us', '/contact'],
] as const;

type NavigationProps = {
  activePath?: string;
  overlay?: boolean;
  light?: boolean;
  heroBlend?: boolean;
  onThemeToggle?: () => void;
};

export default function Navigation({ activePath = '/custom-solutions', overlay = false, light, heroBlend = false, onThemeToggle }: NavigationProps) {
  const [localLight, setLocalLight] = useState(false);
  const isLight = light ?? localLight;
  const menuRef = useRef<HTMLDetailsElement>(null);
  const closeMenu = () => { if (menuRef.current) menuRef.current.open = false; };
  const navigationLinks = links.map(([label, href]) => (
    <a key={href} href={href} onClick={closeMenu} aria-current={href === activePath ? 'page' : undefined}>{label}</a>
  ));

  return (
    <div className={overlay ? styles.overlay : styles.space}>
      <header className={styles.header} data-theme={isLight ? 'light' : 'dark'} data-hero-blend={heroBlend || undefined} onKeyDown={event => {
        if (event.key === 'Escape' && menuRef.current?.open) {
          closeMenu();
          menuRef.current.querySelector('summary')?.focus();
        }
      }}>
        <nav className={styles.navigation} aria-label="Main navigation">
          <a href="/" className={styles.logo} aria-label="Bizgenix AI home"><img src="/bizgenixlogo.webp" alt="Bizgenix AI" width={640} height={233} /></a>
          <div className={styles.desktopLinks}>{navigationLinks}</div>
          <div className={styles.actions}>
            <button type="button" className={styles.themeToggle} onClick={onThemeToggle ?? (() => setLocalLight(value => !value))} aria-label={`Switch ${onThemeToggle ? '' : 'navigation ' }to ${isLight ? 'dark' : 'light'} mode`} aria-pressed={isLight}>
              <span aria-hidden="true">{isLight ? '☀' : '☾'}</span>
            </button>
            <details className={styles.mobileMenu} ref={menuRef}>
              <summary className={styles.menuToggle} aria-label="Toggle navigation menu"><span aria-hidden="true">☰</span></summary>
              <div className={styles.mobileLinks}>{navigationLinks}</div>
            </details>
          </div>
        </nav>
      </header>
    </div>
  );
}
