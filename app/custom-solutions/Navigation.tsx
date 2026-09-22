/* eslint-disable @next/next/no-html-link-for-pages -- Main navigation uses document loads so it does not depend on client router transitions. */
import styles from './Hero.module.css';
import navStyles from './Navigation.module.css';

const links = [
  ['Home', '/'], ['About', '/about'], ['Custom Solution', '/custom-solutions'],
  ['Product', '/products'], ['Learning', '/courses'], ['Blog', '/blog'], ['Contact Us', '/contact'],
] as const;

export default function Navigation({ activePath = '/custom-solutions' }: { activePath?: string }) {
  const navigationLinks = links.map(([label, href]) => <a key={href} href={href} aria-current={href === activePath ? 'page' : undefined}>{label}</a>);
  return <nav className={`nav ${activePath === '/' ? '' : styles.navigation} ${navStyles.navigation}`} aria-label="Main navigation">
    <a href="/" aria-label="Bizgenix AI home"><img src="/bizgenixlogo.webp" alt="Bizgenix AI" /></a>
    <div className={`links ${navStyles.desktopLinks}`}>{navigationLinks}</div>
    <details className={navStyles.mobileMenu}>
      <summary className={navStyles.menuToggle}><span aria-hidden="true">☰</span> Menu</summary>
      <div className={navStyles.mobileLinks}>{navigationLinks}</div>
    </details>
  </nav>;
}
