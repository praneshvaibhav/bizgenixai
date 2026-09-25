import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL('https://bizgenix.ai'),
  title: { default: 'Bizgenix AI | AI That Takes Work Off Your Desk', template: '%s' },
  description: 'Custom AI systems, ready products and business automation for Indian businesses.',
  applicationName: 'Bizgenix AI',
  openGraph: {
    type: 'website',
    siteName: 'Bizgenix AI',
    title: 'Bizgenix AI — AI Products, Automation & Custom Solutions',
    description: 'Practical AI products, automation, and custom solutions built to help businesses scale.',
    images: [{
      url: '/custom-solutions-hero.webp',
      width: 1450,
      height: 1088,
      alt: 'Bizgenix AI business transformation platform',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bizgenix AI — AI Products, Automation & Custom Solutions',
    description: 'Practical AI products, automation, and custom solutions built to help businesses scale.',
    images: ['/custom-solutions-hero.webp'],
  },
  icons: { icon: [{ url: '/favicon.jpg', type: 'image/jpeg' }] },
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
