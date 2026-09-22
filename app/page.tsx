'use client';
import Navigation from './custom-solutions/Navigation';
import DeferredScene from './DeferredScene';
import HeroIntro from './HeroIntro';
import SplashIntro from './SplashIntro';
import GrowthDashboard from './GrowthDashboard';
import ScrollAnimations from './ScrollAnimations';

import BusinessProblems from './BusinessProblems';
import ServicesSection from './ServicesSection';
import SolutionsSection from './SolutionsSection';
import IndustriesSection from './IndustriesSection';
import WhyBizgenix from './WhyBizgenix';
import FounderSection from './FounderSection';
import OurProcess from './OurProcess';
import ContactSection from './ContactSection';
const institutions=[['ICAI','Institute of Chartered Accountants of India','icai','/institution-icai.webp'],['CMAI','The Clothing Manufacturers Association of India','cmai','/institution-cmai.webp'],['JITO Ladies','JITO Ladies','jito','/institution-jito-ladies.webp'],['TEDx','TEDx','tedx'],['BNI','Business Network International','bni','/institution-bni.webp'],['Skillathon','Skillathon Pune','skillthon','/institution-skillthon.webp']];
const Arrow=()=> <span className="arrow">↗</span>;
export default function Home(){return <SplashIntro><main><ScrollAnimations/>
<Navigation activePath="/" />
<section className="hero section" id="top"><div className="heroCopy"><HeroIntro/></div><DeferredScene kind="particles"/></section>
<section className="trust section" id="about"><div className="institutions"><div className="institutionCopy"><i>◈</i> Trusted stages and institutions</div><div className="institutionLogos" aria-label="Trusted stages and institutions">{institutions.map(([shortName,fullName,style,logo])=><span data-scroll-animation className={'institutionLogo '+style} key={shortName} title={fullName} aria-label={fullName}>{logo?<img src={logo} alt={fullName} loading="lazy" decoding="async"/>:shortName}</span>)}</div></div></section>
<ServicesSection/>
<BusinessProblems/>
<SolutionsSection/>
<section className="intelligence section" id="growth-intelligence"><div><p className="eyebrow light">FEATURED PRODUCT — GROWTH INTELLIGENCE</p><h2>See what is happening in your business — before it becomes a problem.</h2><p>Growth Intelligence is a business analytics application designed to convert accounting and operational data into practical decision-making insights.</p><p>It helps owners move beyond static reports and understand where cash, profitability and working capital are getting affected.</p><div className="points"><span>Business performance & KPI overview</span><span>Receivables & overdue amounts</span><span>Cash movement & bank visibility</span><span>Management alerts & action-oriented insights</span><span>Payables and upcoming financial obligations</span><span>Sales, purchase and expense trends</span><span>Month-on-month and period comparisons</span><span>Inventory and closing-stock visibility</span></div><p>Not another dashboard — <b>a decision-support system for business owners.</b></p><div className="growthActions"><a className="button white" href="https://gi.bizgenix.ai/" target="_blank" rel="noopener noreferrer">Explore Growth Intelligence <Arrow/></a><a className="outline" href="https://api.whatsapp.com/send/?phone=918780671906&text=Hi%21+I%27d+like+to+book+a+Analytic+demo+for+the+Growth+Intelligence.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">Request a Analytic demo <Arrow/></a></div></div><GrowthDashboard/></section>
<IndustriesSection/>
<WhyBizgenix/>

<FounderSection/>
<OurProcess/>
<ContactSection/>
</main></SplashIntro>}
