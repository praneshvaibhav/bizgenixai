import type { Metadata } from 'next';
import { pageMeta } from '../../seo';

const title = 'Growth Intelligence | Tally Analytics for Business Owners';
const description = "Growth Intelligence turns Tally data into clear answers on cash, receivables, payables and stock, with the next action for each. A virtual CFO's view for owners.";

export const metadata: Metadata = pageMeta({ title, description, path: '/products/growth-intelligence' });

export default function GrowthIntelligenceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
