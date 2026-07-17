import { getBlogPosts } from '../../../lib/sanity';
import BlogClient from '../../../features/blog/BlogClient';

export const metadata = {
  title: 'Blog & Insights',
  description:
    'Insights, tips, and industry news from the world of creative media production, corporate filmmaking, and design.',
};

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();

  return <BlogClient blogPosts={blogPosts} />;
}
