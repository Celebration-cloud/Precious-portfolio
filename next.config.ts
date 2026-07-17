import type { NextConfig } from 'next';

const publicContentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://images.unsplash.com https://cdn.sanity.io",
  "font-src 'self' data:",
  "connect-src 'self' https://*.api.sanity.io https://*.apicdn.sanity.io",
  "media-src 'self' https:",
  'frame-src https://www.youtube.com https://www.youtube-nocookie.com',
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join('; ');

const studioContentSecurityPolicy = [
  "default-src 'self' https: data: blob:",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https:",
  "style-src 'self' 'unsafe-inline' https:",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data: https:",
  "connect-src 'self' https: wss:",
  "worker-src 'self' blob:",
  "frame-src 'self' https:",
  "object-src 'none'",
  'frame-ancestors https://*.sanity.io',
].join('; ');

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];

const publicSecurityHeaders = [{ key: 'X-Frame-Options', value: 'DENY' }, ...securityHeaders];

const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path((?!studio).*)',
        headers: [
          ...publicSecurityHeaders,
          { key: 'Content-Security-Policy', value: publicContentSecurityPolicy },
        ],
      },
      {
        source: '/studio/:path*',
        headers: [
          ...securityHeaders,
          { key: 'Content-Security-Policy', value: studioContentSecurityPolicy },
        ],
      },
    ];
  },
};

export default nextConfig;
