'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Navigation({ activePath = '/custom-solutions' }: { activePath?: string }) {
  const [open, setOpen] = useState(false);
  return <nav className={`nav ${styles.navigation}`} aria-label="Main navigation">
    <Link href="/" aria-label="Bizgenix AI home"><img src="/bizgenixlogo.webp" alt="Bizgenix AI" /></Link>
    <button className="menu" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="custom-navigation" onClick={() => setOpen(!open)}>☰</button>
    <div id="custom-navigation" className={open ? 'links open' : 'links'} onKeyDown={event => { if (event.key === 'Escape') setOpen(false); }}>
      {[
        ['Home', '/'], ['About', '/about'], ['Custom Solution', '/custom-solutions'],
        ['Product', '/products'], ['Learning', '/courses'], ['Blog', '/blog'], ['Contact Us', '/contact'],
      ].map(([label, href]) => <Link key={label} href={href} aria-current={href === activePath ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</Link>)}
    </div>
  </nav>;
}
