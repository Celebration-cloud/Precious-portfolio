import type { MetadataRoute } from 'next';
import { getServerEnv } from '../lib/env';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getServerEnv().SITE_URL;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/studio/'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
