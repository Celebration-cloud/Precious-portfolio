import type { MetadataRoute } from 'next';
import { getServerEnv } from '../lib/env';
import { getBlogPosts } from '../lib/sanity';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getServerEnv().SITE_URL;
  const posts = await getBlogPosts();
  const routes = ['', '/about', '/services', '/portfolio', '/testimonials', '/blog', '/contact'];

  return [
    ...routes.map((route) => ({
      url: `${siteUrl}${route}`,
      changeFrequency: route === '' ? ('weekly' as const) : ('monthly' as const),
      priority: route === '' ? 1 : 0.8,
    })),
    ...posts.map((post) => ({
      url: `${siteUrl}/blog/${post.id}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
