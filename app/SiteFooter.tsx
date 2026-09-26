/* eslint-disable @next/next/no-html-link-for-pages -- Site-wide document navigation. */
/* eslint-disable @next/next/no-img-element -- Small local logo and icon assets. */
import styles from './SiteFooter.module.css';

const services = [
  ['Custom Solutions', '/custom-solutions'], ['Products', '/products'], ['Courses & Training', '/courses'], ['Case Studies', '/case-studies'], ['Insights', '/blog'],
] as const;
const founderSocials = [
  { name: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/umangratani/' },
  { name: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/umangratani.ai/' },
  { name: 'YouTube', icon: 'youtube', href: 'https://www.youtube.com/@umangratani' },
] as const;
const companySocials = [
  { name: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/company/bizgenix-ai-solutions/posts/' },
  { name: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/bizgenix.ai/' },
] as const;
const mapUrl = 'https://www.google.com/maps/place/Bizgenix+AI+Solutions+Pvt+Ltd/@23.0767474,72.5054583,17z';

export default function SiteFooter() {
  return <footer className={styles.footer}>
    <div className={styles.inner}>
      <div className={styles.grid}>
        <div className={styles.brand}><a href="/" className={styles.brandLink} aria-label="Bizgenix AI home"><img src="/bizgenixlogo.webp" alt="Bizgenix AI" className={styles.brandLogo} width={640} height={240} loading="lazy" /></a><p className={styles.description}>Bizgenix AI builds AI products, custom systems and practical AI learning that help Indian businesses work faster and decide better. Led by Dr. CA Umang Ratani · Ahmedabad.</p></div>
        <details className={styles.footerGroup} open><summary><h2 className={styles.heading}>Explore</h2><span className={styles.groupArrow} aria-hidden="true">⌄</span></summary><nav className={styles.linkGroup} aria-label="Footer navigation"><ul>{services.map(([label, href]) => <li key={label}><a href={href}>{label}</a></li>)}</ul></nav></details>
        <details className={styles.footerGroup} open><summary><h2 className={styles.heading}>Contact</h2><span className={styles.groupArrow} aria-hidden="true">⌄</span></summary><address className={styles.contactList}><a href="mailto:info@bizgenix.com"><span className={styles.contactIcon}><img src="/footer/mail.svg" alt="" width={20} height={20} /></span><span>info@bizgenix.com</span></a><a href="tel:+918780671906"><span className={styles.contactIcon}><img src="/footer/phone.svg" alt="" width={20} height={20} /></span><span>+91 87806 71906</span></a><a href={mapUrl} target="_blank" rel="noopener noreferrer"><span className={styles.contactIcon}><img src="/footer/map-pin.svg" alt="" width={20} height={20} /></span><span>G-13, Silver Radiance 2, Science City Road, Sola, Ahmedabad, Gujarat 380060</span></a></address></details>
        <details className={`${styles.footerGroup} ${styles.follow}`} open><summary><h2 className={styles.heading}>Company</h2><span className={styles.groupArrow} aria-hidden="true">⌄</span></summary><ul className={styles.socials}>{companySocials.map(item => <li key={item.name}><a className={styles.social} href={item.href} target="_blank" rel="noopener noreferrer"><img src={`/footer/${item.icon}.svg`} alt="" width={20} height={20} /><span>{item.name}</span></a></li>)}</ul></details>
        <details className={`${styles.footerGroup} ${styles.follow}`} open><summary><h2 className={styles.heading}>Founder</h2><span className={styles.groupArrow} aria-hidden="true">⌄</span></summary><ul className={styles.socials}>{founderSocials.map(item => <li key={item.name}><a className={styles.social} href={item.href} target="_blank" rel="noopener noreferrer"><img src={`/footer/${item.icon}.svg`} alt="" width={20} height={20} /><span>{item.name}</span></a></li>)}</ul></details>
      </div>
      <div className={styles.bottom}><p className={styles.copyright}>© {new Date().getFullYear()} Bizgenix AI Solutions Pvt. Ltd. All rights reserved.</p><nav className={styles.legal} aria-label="Legal information"><a href="/privacy-policy">Privacy Policy</a><span aria-hidden="true">•</span><a href="/terms">Terms of Service</a><span aria-hidden="true">•</span><a href="/data-deletion">Data deletion</a></nav></div>
    </div>
  </footer>;
}
