import type { Metadata } from 'next';
import { pageMeta, SITE_URL } from '../../seo';

const title = 'Growth Intelligence | Business Analytics Software for Tally';
const description = "Growth Intelligence turns Tally data into clear answers on cash, receivables, payables and stock, with the next action for each. A virtual CFO's view for owners.";

export const metadata: Metadata = pageMeta({ title, description, path: '/products/growth-intelligence' });

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Growth Intelligence',
  alternateName: 'GI by Bizgenix AI',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description,
  url: `${SITE_URL}/products/growth-intelligence`,
  sameAs: ['https://gi.bizgenix.ai/'],
  publisher: { '@id': `${SITE_URL}/#organization` },
};

export default function GrowthIntelligenceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /></>;
}
