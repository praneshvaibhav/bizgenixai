import type { MetadataRoute } from 'next';
import { caseStudies } from './case-studies/content';

const routes = [
  '', '/about', '/blog', '/case-studies', '/contact', '/courses',
  '/custom-solutions', '/data-deletion', '/privacy-policy', '/products', '/terms',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = routes.map(route => ({ url: `https://bizgenix.ai${route}` }));
  const studies = caseStudies.map(study => ({ url: `https://bizgenix.ai/case-studies/${study.slug}` }));
  return [...pages, ...studies];
}
