import type { Metadata } from 'next';
import Image from 'next/image';
import Navigation from './custom-solutions/Navigation';
import HeroIntro from './HeroIntro';
import SplashIntro from './SplashIntro';
import ScrollAnimations from './ScrollAnimations';
import GrowthDashboard from './GrowthDashboard';
import featured from './FeaturedProduct.module.css';

import BusinessProblems from './BusinessProblems';
import ServicesSection from './ServicesSection';
import CaseStudiesPreview from './CaseStudiesPreview';
import SolutionsSection from './SolutionsSection';
import IndustriesSection from './IndustriesSection';
import WhyBizgenix from './WhyBizgenix';
import FounderSection from './FounderSection';
import OurProcess from './OurProcess';
import ContactSection from './ContactSection';

const title = 'Bizgenix AI | AI That Takes Work Off Your Desk';
const description = 'Custom AI systems, ready products and business automation for Indian businesses.';
export const metadata: Metadata = { title, description, alternates: { canonical: '/' }, openGraph: { title, description, type: 'website' }, twitter: { card: 'summary', title, description } };
const institutions=[
  ['ICAI','Institute of Chartered Accountants of India','icai','/institution-icai.webp'],
  ['CMAI','The Clothing Manufacturers Association of India','cmai','/institution-cmai.webp'],
  ['JITO Ladies','JITO Ladies','jito','/institution-jito-ladies.webp'],
  ['TEDx','TEDx','tedx'],
  ['BNI','Business Network International','bni','/institution-bni.webp'],
  ['Skillathon','Skillathon Pune','skillthon','/institution-skillthon.webp'],
  ['Kalamandir','Kalamandir Jewellers Limited','kalamandir','/institutions/kalamandir.webp'],
  ['Lilac Insights','Lilac Insights Private Limited','lilac','/institutions/lilac-insights.webp'],
  ['Ruby Print N Pack','Ruby Print N Pack','ruby','/institutions/ruby-print-n-pack.webp'],
  ['SJ Sangath','SJ Sangath','sangath','/institutions/sj-sangath.webp'],
];
const Arrow=()=> <span className="arrow">↗</span>;
export default function Home(){return <SplashIntro><main><ScrollAnimations/>
<Navigation activePath="/" heroBlend />
<section className="hero section" id="top"><video className="heroVideo" autoPlay muted loop playsInline preload="metadata" aria-hidden="true"><source src="/smart-city-hero.mp4" type="video/mp4" /></video><div className="heroVideoOverlay" aria-hidden="true"/><div className="heroCopy"><HeroIntro/></div></section>
<section className="trust section" id="about"><div className="institutions"><div className="institutionCopy"><i>◈</i> Trusted stages and institutions</div><div className="institutionLogos" aria-label="Trusted stages and institutions"><div className="institutionTrack">{[0,1].map(sequence=><div className="institutionSequence" key={sequence} aria-hidden={sequence===1}>{institutions.map(([shortName,fullName,style,logo])=><span className={'institutionLogo '+style} key={shortName} title={fullName} aria-label={sequence===0?fullName:undefined}>{logo?<Image src={logo} alt={sequence===0?fullName:''} width={132} height={74} sizes="132px"/>:shortName}</span>)}</div>)}</div></div></div></section>
<ServicesSection/>
<IndustriesSection/>
<BusinessProblems/>
<CaseStudiesPreview/>
<SolutionsSection/>
<section className={`${featured.section} section`} id="growth-intelligence" aria-labelledby="growth-intelligence-title">
  <div className={featured.inner}>
    <div className={featured.copy}>
      <p className={featured.eyebrow}>Growth Intelligence by Bizgenix AI</p>
      <h2 id="growth-intelligence-title">Know Faster. Decide Smarter. Grow Stronger.</h2>
      <p className={featured.intro}>Tally already knows where your money is stuck. Growth Intelligence shows cash, receivables, payables and stock, with the next action for each.</p>
      <div className={featured.capabilities} aria-label="Growth Intelligence capabilities">
        <div>See clearly</div>
        <div>Ask GI</div>
        <div>Decide with Virtual CFO guidance</div>
        <div>Follow up with an AI employee, with approval</div>
      </div>
      <p className={featured.note}>Tally remains the source. Connection setup and data refresh timing are confirmed during the demo.</p>
    </div>
    <div className={featured.visual}>
      <GrowthDashboard/>
      <div className={featured.actions}>
        <a className={featured.demoLink} href="/contact#contact-form">Book a GI Demo</a>
        <a className={featured.exploreLink} href="https://gi.bizgenix.ai/" target="_blank" rel="noopener noreferrer">Explore GI</a>
      </div>
    </div>
  </div>
</section>
<WhyBizgenix/>

<OurProcess/>
<FounderSection/>
<ContactSection compactTop/>
</main></SplashIntro>}
