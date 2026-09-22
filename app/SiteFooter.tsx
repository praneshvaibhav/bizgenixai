/* eslint-disable @next/next/no-html-link-for-pages -- Match the site's document navigation. */
/* eslint-disable @next/next/no-img-element -- Small local logo and icon assets. */
import styles from './SiteFooter.module.css';

const services = [
  ['AI Strategy Consulting', '/contact'],
  ['Business Process Automation', '/custom-solutions#capabilities'],
  ['AI Training & Workshops', '/courses'],
  ['Intelligent AI Agents', '/products'],
  ['Data Analytics', '/#growth-intelligence'],
] as const;

const socials: readonly { name: string; icon: string; href: string }[] = [
  { name: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/caumangratani' },
  { name: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/umangratani.ai/?utm_source=qr&r=nametag' },
  { name: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/umangratani/' },
  { name: 'YouTube', icon: 'youtube', href: 'https://www.youtube.com/@umangratani' },
  { name: 'X', icon: 'x', href: 'https://x.com/umangratani' },
  { name: 'WhatsApp', icon: 'whatsapp', href: 'https://api.whatsapp.com/send?phone=918780671906&text=Hi%21+I+would+like+to+have+some+queries.&type=phone_number&app_absent=0' },
  { name: 'Threads', icon: 'threads', href: 'https://www.threads.com/@umangratani.ai?__pwa=1' },
];

const mapUrl = 'https://www.google.com/maps/place/Bizgenix+AI+Solutions+Pvt+Ltd/@23.0767474,72.5054583,17z/data=!3m1!4b1!4m6!3m5!1s0xb21a53f2c4da69d:0x5ba37ae89bf70d3d!8m2!3d23.0767474!4d72.5080332!16s%2Fg%2F11z38y6rxt?hl=en-US';

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <a href="/" className={styles.brandLink} aria-label="Bizgenix AI home">
              <img src="/bizgenixlogo.webp" alt="Bizgenix AI" className={styles.brandLogo} width={640} height={240} loading="lazy" />
            </a>
            <p className={styles.description}>India&apos;s trusted AI business consultant — delivering AI automation, AI strategy, AI training, and digital transformation to enterprises and SMEs nationwide.</p>
          </div>

          <nav className={styles.linkGroup} aria-label="Footer services">
            <h2 className={styles.heading}>Services</h2>
            <ul>{services.map(([label, href]) => <li key={label}><a href={href}>{label}</a></li>)}</ul>
          </nav>

          <div className={styles.contact}>
            <h2 className={styles.heading}>Contact</h2>
            <address className={styles.contactList}>
              <a href="mailto:info@bizgenix.com"><span className={styles.contactIcon}><img src="/footer/mail.svg" alt="" width={20} height={20} /></span><span>info@bizgenix.com</span></a>
              <a href="tel:+918780671906"><span className={styles.contactIcon}><img src="/footer/phone.svg" alt="" width={20} height={20} /></span><span>+91 87806 71906</span></a>
              <a href={mapUrl} target="_blank" rel="noopener noreferrer"><span className={styles.contactIcon}><img src="/footer/map-pin.svg" alt="" width={20} height={20} /></span><span>G 13, Silver Radience-2, Science City Rd, Sola, Ahmedabad, Gujarat 380060</span></a>
            </address>
          </div>

          <section className={styles.follow} aria-labelledby="footer-follow-title">
            <h2 className={styles.heading} id="footer-follow-title">Follow us on</h2>
            <ul className={styles.socials}>
              {socials.map(social => <li key={social.icon}>
                <a className={styles.social} href={social.href} target="_blank" rel="noopener noreferrer">
                  <img src={`/footer/${social.icon}.svg`} alt="" width={20} height={20} />
                  <span>{social.name}</span>
                </a>
              </li>)}
            </ul>
          </section>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>© {new Date().getFullYear()} Bizgenix AI Solutions Pvt. Ltd. All rights reserved.</p>
          <nav className={styles.legal} aria-label="Legal information">
            <a href="/privacy-policy">Privacy Policy</a><span aria-hidden="true">•</span>
            <a href="/terms">Terms of Service</a><span aria-hidden="true">•</span>
            <a href="/data-deletion">Data deletion</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
