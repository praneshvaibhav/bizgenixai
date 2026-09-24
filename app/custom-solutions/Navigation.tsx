'use client';

/* eslint-disable @next/next/no-img-element -- Use the existing local company logo. */
import Link from '../InternalLink';
import { useRef } from 'react';
import styles from './Navigation.module.css';

const links = [
  ['About', '/about'], ['Custom Solution', '/custom-solutions'],
  ['Product', '/products'], ['Learning', '/courses'], ['Case Study', '/case-studies'], ['Blog', '/blog'], ['Contact Us', '/contact'],
] as const;

type NavigationProps = {
  activePath?: string;
  overlay?: boolean;
  heroBlend?: boolean;
  theme?: 'dark' | 'light';
};

export default function Navigation({ activePath = '/custom-solutions', overlay = false, heroBlend = false, theme = 'dark' }: NavigationProps) {
  const menuRef = useRef<HTMLDetailsElement>(null);
  const closeMenu = () => { if (menuRef.current) menuRef.current.open = false; };
  const desktopLinks = links.map(([label, href]) => (
    <Link key={href} href={href} aria-current={href === activePath ? 'page' : undefined}>{label}</Link>
  ));
  const mobileLinks = links.map(([label, href]) => (
    <Link
      key={href}
      href={href}
      aria-current={href === activePath ? 'page' : undefined}
      onClick={() => {
        // iOS Safari can cancel an anchor's default action when its parent
        // <details> is closed synchronously during the same tap.
        window.setTimeout(closeMenu, 0);
      }}
    >
      {label}
    </Link>
  ));

  return (
    <div className={overlay ? styles.overlay : styles.space}>
      <header className={styles.header} data-theme={theme} data-hero-blend={heroBlend || undefined} onKeyDown={event => {
        if (event.key === 'Escape' && menuRef.current?.open) {
          closeMenu();
          menuRef.current.querySelector('summary')?.focus();
        }
      }}>
        <nav className={styles.navigation} aria-label="Main navigation">
          <Link href="/" className={styles.logo} aria-label="Bizgenix AI home"><img src="/bizgenixlogo.webp" alt="Bizgenix AI" width={640} height={233} /></Link>
          <div className={styles.desktopLinks}>{desktopLinks}</div>
          <div className={styles.actions}>
            <details className={styles.mobileMenu} ref={menuRef}>
              <summary className={styles.menuToggle} aria-label="Toggle navigation menu"><span aria-hidden="true">☰</span></summary>
              <div className={styles.mobileLinks}>{mobileLinks}</div>
            </details>
          </div>
        </nav>
      </header>
    </div>
  );
}
