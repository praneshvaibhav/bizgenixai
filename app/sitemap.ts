import type { MetadataRoute } from 'next';
import { caseStudies } from './case-studies/content';
import { articles } from './blog/articles';

const BASE = 'https://bizgenix.ai';

const routes: { path: string; priority: number }[] = [
  { path: '', priority: 1 },
  { path: '/ai-automation', priority: 0.9 },
  { path: '/ai-consulting', priority: 0.9 },
  { path: '/custom-solutions', priority: 0.9 },
  { path: '/courses', priority: 0.9 },
  { path: '/products', priority: 0.8 },
  { path: '/products/growth-intelligence', priority: 0.8 },
  { path: '/case-studies', priority: 0.8 },
  { path: '/blog', priority: 0.7 },
  { path: '/about', priority: 0.6 },
  { path: '/contact', priority: 0.6 },
  { path: '/privacy-policy', priority: 0.2 },
  { path: '/terms', priority: 0.2 },
  { path: '/data-deletion', priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = routes.map(({ path, priority }) => ({ url: `${BASE}${path}`, priority }));
  const studies = caseStudies.map(study => ({ url: `${BASE}/case-studies/${study.slug}`, priority: 0.6 }));
  const posts = articles.map(article => ({ url: `${BASE}/blog/${article.slug}`, lastModified: new Date(article.date), priority: 0.7 }));
  return [...pages, ...posts, ...studies];
}
