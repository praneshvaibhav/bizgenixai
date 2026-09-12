'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  return <nav className={`nav ${styles.navigation}`} aria-label="Main navigation">
    <Link href="/" aria-label="Bizgenix AI home"><img src="/bizgenixlogo.webp" alt="Bizgenix AI" /></Link>
    <button className="menu" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="custom-navigation" onClick={() => setOpen(!open)}>☰</button>
    <div id="custom-navigation" className={open ? 'links open' : 'links'} onKeyDown={event => { if (event.key === 'Escape') setOpen(false); }}>
      {[
        ['Home', '/'], ['About', '/#about'], ['Custom Solution', '/custom-solutions'],
        ['Product', '/#products'], ['Programs', '/#programs'],
      ].map(([label, href]) => <Link key={label} href={href} aria-current={href === '/custom-solutions' ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</Link>)}
    </div>
    <a className={styles.navContact} href="#contact">Get in Touch <span aria-hidden="true">↗</span></a>
  </nav>;
}
