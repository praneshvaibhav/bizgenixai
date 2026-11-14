import type { Metadata } from 'next';

export const SITE_URL = 'https://bizgenix.ai';
export const DEFAULT_OG_IMAGE = { url: '/custom-solutions-hero.webp', width: 1450, height: 1088, alt: 'Bizgenix AI: AI automation and custom AI solutions' };

type PageMetaInput = {
  title: string;
  description: string;
  /** Path beginning with "/", e.g. "/about". */
  path: string;
  type?: 'website' | 'article';
  image?: { url: string; width?: number; height?: number; alt?: string };
  publishedTime?: string;
  index?: boolean;
};

/**
 * One place for per-page metadata. A page-level `openGraph` object replaces the
 * root one, so every page must carry its own image and URL or shared links lose
 * their preview.
 */
export function pageMeta({ title, description, path, type = 'website', image = DEFAULT_OG_IMAGE, publishedTime, index = true }: PageMetaInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: index ? undefined : { index: false, follow: true },
    openGraph: {
      title,
      description,
      type,
      url: path,
      siteName: 'Bizgenix AI',
      locale: 'en_IN',
      images: [image],
      ...(type === 'article' && publishedTime ? { publishedTime, authors: ['Dr. CA Umang Ratani'] } : {}),
    },
    twitter: { card: 'summary_large_image', title, description, images: [image.url] },
  };
}

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': `${SITE_URL}/#organization`,
      name: 'Bizgenix AI Solutions Pvt Ltd',
      legalName: 'Bizgenix AI Solutions Private Limited',
      alternateName: ['Bizgenix AI', 'Bizgenix'],
      taxID: '24AANCB9672M1ZX',
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/bizgenixlogo.webp`,
      image: `${SITE_URL}/custom-solutions-hero.webp`,
      description: 'AI automation and AI development company in Ahmedabad building AI agents, workflow and WhatsApp automation, CRM, voice AI, custom AI solutions and corporate AI training for Indian businesses.',
      email: 'info@bizgenix.ai',
      telephone: '+91-87806-71906',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'G-13, Silver Radiance-2, Science City Road, Sola',
        addressLocality: 'Ahmedabad',
        addressRegion: 'Gujarat',
        postalCode: '380060',
        addressCountry: 'IN',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 23.0767474, longitude: 72.5080332 },
      hasMap: 'https://www.google.com/maps/place/Bizgenix+AI+Solutions+Pvt+Ltd/@23.0767474,72.5080332,17z',
      areaServed: { '@type': 'Country', name: 'India' },
      founder: { '@id': `${SITE_URL}/#founder` },
      sameAs: ['https://www.linkedin.com/company/bizgenix-ai-solutions/', 'https://www.instagram.com/bizgenix.ai/'],
      knowsAbout: ['AI automation', 'Custom AI solutions', 'AI consulting', 'AI agents', 'WhatsApp automation', 'Voice AI', 'AI CRM', 'Corporate AI training', 'Business analytics on Tally data', 'AI for textile manufacturing', 'AI for real estate and construction'],
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#founder`,
      name: 'Dr. CA Umang Ratani',
      jobTitle: 'Founder, Bizgenix AI',
      worksFor: { '@id': `${SITE_URL}/#organization` },
      url: 'https://www.umangratani.com/',
      sameAs: ['https://www.linkedin.com/in/umangratani/', 'https://www.umangratani.com/'],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: 'Bizgenix AI',
      url: `${SITE_URL}/`,
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'en-IN',
    },
  ],
};
