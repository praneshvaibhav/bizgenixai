'use client';

import { useRef, useSyncExternalStore, type KeyboardEvent } from 'react';
import { products } from './content';
import details from './ProductDetails.module.css';
import VoiceAIDetails from './VoiceAIDetails';
import BizChatDetails from './BizChatDetails';
import ScaleOSDetails from './ScaleOSDetails';
import GrowthIntelligenceDetails from './GrowthIntelligenceDetails';
import CRMDetails from './CRMDetails';

const tabDescriptions = ['Data to Decisions', 'Customer Relationships', 'Operations in One Place', 'Customer Conversations', 'WhatsApp Automation'];

function subscribe(callback: () => void) {
  window.addEventListener('hashchange', callback);
  return () => window.removeEventListener('hashchange', callback);
}
function currentProduct() {
  const id = window.location.hash.slice(1);
  return products.find(product => product.id === id)?.id ?? products[0].id;
}

export default function ProductShowcase() {
  const active = useSyncExternalStore(subscribe, currentProduct, () => products[0].id);
  const detailsRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  const select = (id: string) => {
    window.history.replaceState(null, '', `#${id}`);
    window.dispatchEvent(new Event('hashchange'));
  };
  const navigate = (event: KeyboardEvent<HTMLAnchorElement>, index: number) => {
    if (event.key === ' ') {
      event.preventDefault();
      select(products[index].id);
      return;
    }
    let next: number;
    if (event.key === 'ArrowRight') next = (index + 1) % products.length;
    else if (event.key === 'ArrowLeft') next = (index + products.length - 1) % products.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = products.length - 1;
    else return;
    event.preventDefault();
    select(products[next].id);
    tabsRef.current?.querySelectorAll<HTMLAnchorElement>('[role="tab"]')[next].focus();
  };

  return <>
    <div className={details.details} ref={detailsRef} id="product-details">
      <div className={details.tabs} role="tablist" aria-label="Explore a Bizgenix product" ref={tabsRef}>
        {products.map((product, index) => <a key={product.id} id={product.id} role="tab" href={`#${product.id}`} aria-selected={active === product.id} aria-controls={`${product.id}-panel`} tabIndex={active === product.id ? 0 : -1} onClick={event => { event.preventDefault(); select(product.id); }} onKeyDown={event => navigate(event, index)}>
          <span className={details.tabNumber} aria-hidden="true">0{index + 1}</span><span><strong>{product.name}</strong><small>{tabDescriptions[index]}</small></span>
        </a>)}
      </div>
      {products.map(product => <section key={product.id} id={`${product.id}-panel`} role="tabpanel" aria-labelledby={product.id} tabIndex={0} hidden={active !== product.id} className={details.panel}>
        {product.id === 'voice-ai' ? <VoiceAIDetails active={active === product.id} /> : product.id === 'bizchat' ? <BizChatDetails active={active === product.id} /> : product.id === 'scaleos' ? <ScaleOSDetails active={active === product.id} /> : product.id === 'crm' ? <CRMDetails active={active === product.id} /> : <GrowthIntelligenceDetails active={active === product.id} />}
      </section>)}
    </div>
  </>;
}
