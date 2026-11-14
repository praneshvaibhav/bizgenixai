import type { NextConfig } from 'next';

const securityHeaders = [
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,

  typescript: {
   ignoreBuildErrors: true,
 },
  async redirects() {
    return [
      // One hostname: www goes to the apex domain.
      { source: '/:path*', has: [{ type: 'host', value: 'www.bizgenix.ai' }], destination: 'https://bizgenix.ai/:path*', permanent: true },
      // Old URLs that Google still shows under the brand result.
      { source: '/solutions', destination: '/custom-solutions', permanent: true },
      { source: '/services', destination: '/custom-solutions', permanent: true },
      { source: '/careers', destination: '/about', permanent: true },
      { source: '/ai-course-india', destination: '/courses', permanent: true },
      { source: '/ai-training', destination: '/courses', permanent: true },
      { source: '/corporate-training', destination: '/courses', permanent: true },
      { source: '/learning', destination: '/courses', permanent: true },
      { source: '/learning/:path*', destination: '/courses', permanent: true },
      { source: '/corporate-ai-training', destination: '/courses', permanent: true },
      // Short names people type for products and local pages.
      { source: '/products/crm', destination: '/products/ai-crm', permanent: true },
      { source: '/products/whatsapp-automation', destination: '/products/bizchat', permanent: true },
      { source: '/ai-consulting-ahmedabad', destination: '/ai-consultant-ahmedabad', permanent: true },
      { source: '/industries', destination: '/#industries', permanent: false },
    ];
  },
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }];
  },
};

export default nextConfig;
