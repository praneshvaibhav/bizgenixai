import type { Metadata } from 'next';
import './globals.css';
import FloatingWhatsApp from './FloatingWhatsApp';
import SiteAnalytics from './SiteAnalytics';

const siteUrl = 'https://www.bizgenix.ai';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Bizgenix AI | AI Systems for Indian Businesses', template: '%s' },
  description: 'Custom AI systems, ready products and practical AI learning for Indian businesses.',
  applicationName: 'Bizgenix AI',
  openGraph: {
    type: 'website',
    siteName: 'Bizgenix AI',
    title: 'Bizgenix AI - AI Products, Automation & Custom Solutions',
    description: 'Practical AI products, automation and custom systems built around how Indian businesses work.',
    images: [{ url: '/og.png', width: 1792, height: 1024, alt: 'Bizgenix AI systems built around how your business really works' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bizgenix AI - AI Products, Automation & Custom Solutions',
    description: 'Practical AI products, automation and custom systems built around how Indian businesses work.',
    images: ['/og.png'],
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: 'Bizgenix AI Solutions Pvt. Ltd.', url: siteUrl, email: 'info@bizgenix.com', telephone: '+91 87806 71906' },
    { '@type': 'LocalBusiness', '@id': `${siteUrl}/#localbusiness`, name: 'Bizgenix AI Solutions Pvt. Ltd.', url: siteUrl, telephone: '+91 87806 71906', address: { '@type': 'PostalAddress', streetAddress: 'G-13, Silver Radiance 2, Science City Road', addressLocality: 'Ahmedabad', addressRegion: 'Gujarat', postalCode: '380060', addressCountry: 'IN' } },
    { '@type': 'Person', '@id': `${siteUrl}/#umang-ratani`, name: 'Dr. CA Umang Ratani', jobTitle: 'Founder', worksFor: { '@id': `${siteUrl}/#organization` } },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const ga4Id = process.env.NEXT_PUBLIC_GA4_ID;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;
  return <html lang="en"><body>
    {children}
    <FloatingWhatsApp />
    <SiteAnalytics />
    {ga4Id && <><script async src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`} /><script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${ga4Id}');` }} /></>}
    {clarityId && <script dangerouslySetInnerHTML={{ __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,'clarity','script','${clarityId}');` }} />}
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
  </body></html>;
}
