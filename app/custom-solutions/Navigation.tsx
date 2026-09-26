'use client';

/* eslint-disable @next/next/no-img-element -- Local company logo. */
import Link from '../InternalLink';
import { useRef } from 'react';
import styles from './Navigation.module.css';

const links = [
  ['About', '/about'],
  ['Custom Solutions', '/custom-solutions'],
  ['Products', '/products'],
  ['Courses & Training', '/courses'],
  ['Case Studies', '/case-studies'],
  ['Insights', '/blog'],
] as const;

type NavigationProps = { activePath?: string; overlay?: boolean; heroBlend?: boolean; theme?: 'dark' | 'light' };

export default function Navigation({ activePath = '/custom-solutions', overlay = false, heroBlend = false, theme = 'dark' }: NavigationProps) {
  const menuRef = useRef<HTMLDetailsElement>(null);
  const toggleRef = useRef<HTMLElement>(null);
  const closeMenu = (returnFocus = false) => {
    if (!menuRef.current) return;
    menuRef.current.open = false;
    if (returnFocus) toggleRef.current?.focus();
  };

  return <div className={overlay ? styles.overlay : styles.space}>
    <header className={styles.header} data-theme={theme} data-hero-blend={heroBlend || undefined} onKeyDown={event => {
      if (event.key === 'Escape' && menuRef.current?.open) closeMenu(true);
    }}>
      <nav className={styles.navigation} aria-label="Main navigation">
        <Link href="/" className={styles.logo} aria-label="Bizgenix AI home"><img src="/bizgenixlogo.webp" alt="Bizgenix AI" width={640} height={233} /></Link>
        <div className={styles.desktopLinks}>{links.map(([label, href]) => <Link key={href} href={href} aria-current={href === activePath ? 'page' : undefined}>{label}</Link>)}</div>
        <Link className={styles.reviewButton} href="/contact#contact-form">Book a Free Review</Link>
        <details className={styles.mobileMenu} ref={menuRef}>
          <summary ref={toggleRef} className={styles.menuToggle} aria-label="Open navigation menu"><span aria-hidden="true">☰</span></summary>
          <div className={styles.mobileLinks}>
            <button type="button" className={styles.closeButton} onClick={() => closeMenu(true)} aria-label="Close navigation menu">Close ×</button>
            {links.map(([label, href]) => <Link key={href} href={href} aria-current={href === activePath ? 'page' : undefined} onClick={() => window.setTimeout(() => closeMenu(), 0)}>{label}</Link>)}
            <Link className={styles.mobileReview} href="/contact#contact-form" onClick={() => window.setTimeout(() => closeMenu(), 0)}>Book a Free Review</Link>
          </div>
        </details>
      </nav>
    </header>
  </div>;
}
