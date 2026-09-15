import { demoUrl, reasons } from './content';
import styles from './ProductDifference.module.css';

/** Reuse artwork from the supplied reference without baking the page copy into an image. */
function Artwork({ x, y, width, height, className }: { x: number; y: number; width: number; height: number; className: string }) {
  return <span aria-hidden="true" className={`${styles.artwork} ${className}`} style={{
    backgroundSize: `${1855 / width * 100}% ${848 / height * 100}%`,
    backgroundPosition: `${x / (1855 - width) * 100}% ${y / (848 - height) * 100}%`,
    aspectRatio: `${width} / ${height}`,
  }} />;
}

const titles = [
  <>Built around<br />business outcomes</>,
  <>Configurable<br />for your business</>,
  <>Integration-ready</>,
  <>India-first<br />experience</>,
  <>End-to-end<br />support</>,
  <>Proof before<br />a large commitment</>,
];
const links = [
  { href: '#product-suite', label: 'Explore products built around business outcomes' },
  { href: '/custom-solutions', label: 'Explore custom solutions for your business' },
  { href: '#product-integrations', label: 'Explore supported business integrations' },
  { href: '#product-integrations', label: 'Explore India-first workflows' },
  { href: '#implementation-journey', label: 'Explore implementation, training and support' },
  { href: demoUrl(), label: 'Discuss a prototype with Bizgenix', external: true },
];

function CardIllustration({ index }: { index: number }) {
  if (index === 0) return <div className={styles.bars} aria-hidden="true"><i /><i /><i /><i /><i /></div>;
  if (index === 1) return <div className={styles.settings} aria-hidden="true"><span><i /></span><span><b /><i /></span><span><b /><i /></span></div>;
  if (index === 2) return <Artwork x={1628} y={457} width={159} height={121} className={styles.integrations} />;
  if (index === 3) return <Artwork x={483} y={665} width={147} height={130} className={styles.india} />;
  if (index === 4) return <div className={styles.support} aria-hidden="true"><span>Implement</span><span>Train</span><span>Support</span></div>;
  return <div className={styles.proof} aria-hidden="true"><div className={styles.paper}><i /><i /><span><b>✓</b><i /></span><span><b>✓</b><i /></span></div><strong>Try &amp; Scale</strong></div>;
}

export default function ProductDifference() {
  return <section className={styles.section} aria-labelledby="reasons-title">
    <div className={styles.container}>
      <div className={styles.heading}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>03 / THE BIZGENIX DIFFERENCE</p>
          <h2 id="reasons-title">Built to deliver.<br /><em>Supported to grow.</em></h2>
          <p className={styles.description}>Practical products, configurable workflows and support throughout your implementation journey.</p>
        </div>
        <Artwork x={850} y={97} width={970} height={302} className={styles.heroArtwork} />
      </div>
      <div className={styles.grid}>{reasons.map(([name, copy], index) => <article className={`${styles.card} ${styles[`card${index}`]}`} key={name}>
        <span className={styles.number}>0{index + 1}</span>
        <Artwork x={[137, 716, 1295][index % 3]} y={index < 3 ? 418 : 619} width={72} height={72} className={styles.icon} />
        <div className={styles.copy}><h3>{titles[index]}</h3><p>{copy}</p></div>
        <CardIllustration index={index} />
        <a className={styles.arrow} href={links[index].href} aria-label={links[index].label} target={links[index].external ? '_blank' : undefined} rel={links[index].external ? 'noopener noreferrer' : undefined}><span aria-hidden="true">→</span></a>
      </article>)}</div>
    </div>
  </section>;
}
