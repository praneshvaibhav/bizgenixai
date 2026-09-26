'use client';

import { usePathname } from 'next/navigation';

export default function FloatingWhatsApp() {
  const pathname = usePathname();
  const page = pathname === '/' ? 'the Bizgenix AI website' : pathname.replaceAll('-', ' ').replaceAll('/', ' ').trim();
  const message = `Hello Bizgenix, I would like to discuss ${page}.`;
  const href = `https://wa.me/918780671906?text=${encodeURIComponent(message)}`;
  return <a className="floatingWhatsApp" href={href} target="_blank" rel="noopener noreferrer" aria-label="Chat with Bizgenix on WhatsApp" data-analytics-event="whatsapp_click">WhatsApp</a>;
}
