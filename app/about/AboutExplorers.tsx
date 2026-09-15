'use client';

import { useRef, useState, type KeyboardEvent } from 'react';
import Link from 'next/link';
import { approach, capabilities, cities, industries } from './content';
import styles from './page.module.css';

function useTabs(count: number) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % count;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + count) % count;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = count - 1;
    else return;
    event.preventDefault();
    setActive(next);
    refs.current[next]?.focus({ preventScroll: true });
  }
  return { active, setActive, refs, onKeyDown };
}

export function CapabilityExplorer() {
  const tabs = useTabs(capabilities.length);
  const selected = capabilities[tabs.active];
  return <div className={styles.capabilities}>
    <div className={styles.capabilityTabs} role="tablist" aria-label="Explore what Bizgenix does">{capabilities.map((item, index) => <button key={item.title} ref={node => { tabs.refs.current[index] = node; }} type="button" role="tab" id={`capability-tab-${index}`} aria-controls={`capability-panel-${index}`} aria-selected={tabs.active === index} tabIndex={tabs.active === index ? 0 : -1} onClick={() => tabs.setActive(index)} onKeyDown={event => tabs.onKeyDown(event, index)}><span>0{index + 1}</span>{item.title}<b aria-hidden="true">↗</b></button>)}</div>
    {capabilities.map((item, index) => <div key={item.title} role="tabpanel" id={`capability-panel-${index}`} aria-labelledby={`capability-tab-${index}`} hidden={tabs.active !== index} tabIndex={0} className={styles.capabilityPanel}><div><p className={styles.eyebrow}>BUILT TO FIT YOUR BUSINESS</p><h3>{item.headline}</h3><p>{item.description}</p><Link className={styles.primary} href={item.href}>{item.label}<span aria-hidden="true">↗</span></Link></div><ul>{item.items.map(([name, href], i) => <li key={name}><Link href={href}><span className={styles.itemIndex}>0{i + 1}</span>{name}<span aria-hidden="true">↗</span></Link></li>)}</ul></div>)}
    <p className={styles.explorerHint}>Currently exploring: <strong>{selected.title}</strong><span>Choose a tab to see how we can help.</span></p>
  </div>;
}

export function IndustryExplorer() {
  const tabs = useTabs(industries.length);
  const selected = industries[tabs.active];
  return <div className={styles.industryExplorer}>
    <div className={styles.industryTabs} role="tablist" aria-label="Choose your industry">{industries.map((industry, index) => <button key={industry.name} ref={node => { tabs.refs.current[index] = node; }} type="button" role="tab" id={`industry-tab-${index}`} aria-controls="about-industry-panel" aria-selected={tabs.active === index} tabIndex={tabs.active === index ? 0 : -1} onClick={() => tabs.setActive(index)} onKeyDown={event => tabs.onKeyDown(event, index)}>{industry.name}<span aria-hidden="true">↗</span></button>)}</div>
    <div className={styles.industryPanel} role="tabpanel" id="about-industry-panel" aria-labelledby={`industry-tab-${tabs.active}`} tabIndex={0}>

      <div className={styles.industryCopy} key={`copy-${selected.name}`}><p className={styles.eyebrow}>YOUR WORKFLOWS. UNDERSTOOD.</p><h3>{selected.name}</h3><p>{selected.description}</p><div className={styles.industryNote}><span aria-hidden="true">◎</span>Every industry has unique operational challenges. Our solutions are customized to match your business requirements.</div><a className={styles.textLink} href={`https://wa.me/918780671906?text=${encodeURIComponent(`Hi Bizgenix, I'd like to discuss AI solutions for ${selected.name}.`)}`} target="_blank" rel="noopener noreferrer">Discuss your industry <span aria-hidden="true">↗</span></a></div>
    </div>
  </div>;
}

export function ApproachExplorer() {
  const tabs = useTabs(approach.length);
  const selected = approach[tabs.active];
  return <div className={styles.approach}>
    <div className={styles.approachTabs} role="tablist" aria-label="Explore our implementation approach" aria-orientation="vertical">{approach.map(([name, summary], index) => <button key={name} ref={node => { tabs.refs.current[index] = node; }} role="tab" type="button" id={`approach-tab-${index}`} aria-controls="about-approach-panel" aria-selected={tabs.active === index} tabIndex={tabs.active === index ? 0 : -1} onClick={() => tabs.setActive(index)} onKeyDown={event => tabs.onKeyDown(event, index)}><span className={styles.stepNumber}>0{index + 1}</span><span><strong>{name}</strong><small>{summary}</small></span><b aria-hidden="true">↗</b></button>)}</div>
    <div className={styles.approachPanel} role="tabpanel" id="about-approach-panel" aria-labelledby={`approach-tab-${tabs.active}`} tabIndex={0}>
      <div className={styles.approachProgress} aria-hidden="true"><span>FROM IDEA TO EVERYDAY VALUE</span><span>0{tabs.active + 1} / 06</span></div>

      <div className={styles.stepCopy} aria-live="polite" aria-atomic="true"><p className={styles.eyebrow}>{selected[0]}</p><h3>{selected[2]}</h3><p>{selected[3]}</p></div>
      <div className={styles.stepControls}><div className={styles.stepDots} aria-hidden="true">{approach.map(([name], index) => <i key={name} data-active={index === tabs.active} />)}</div><button type="button" disabled={tabs.active === 0} onClick={() => tabs.setActive(value => value - 1)} aria-label="Previous implementation step">←</button><button type="button" disabled={tabs.active === approach.length - 1} onClick={() => tabs.setActive(value => value + 1)} aria-label="Next implementation step">→</button></div>
    </div>
  </div>;
}

export function CommunityExplorer() {
  const tabs = useTabs(cities.length);
  const selected = cities[tabs.active];
  return <div className={styles.gallery}>
    <div className={styles.galleryTabs} role="tablist" aria-label="Explore community events by city">{cities.map((city, index) => <button key={city.name} ref={node => { tabs.refs.current[index] = node; }} type="button" role="tab" id={`community-tab-${index}`} aria-controls="about-community-panel" aria-selected={tabs.active === index} tabIndex={tabs.active === index ? 0 : -1} onClick={() => tabs.setActive(index)} onKeyDown={event => tabs.onKeyDown(event, index)}>{city.name}<span aria-hidden="true">↗</span></button>)}</div>
    <div role="tabpanel" id="about-community-panel" aria-labelledby={`community-tab-${tabs.active}`} tabIndex={0}><div className={styles.communityCity} key={selected.name}><p className={styles.eyebrow}>LEARNING IN ACTION</p><h3>{selected.name}</h3><p>{selected.caption}</p></div></div>
  </div>;
}
