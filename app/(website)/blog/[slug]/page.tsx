import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { getBlogPost, getBlogPosts } from '../../../../lib/sanity';

type BlogPostPageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.id }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return { title: 'Article not found' };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.id}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.image, alt: post.title }],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: { '@type': 'Person', name: post.author },
    publisher: { '@type': 'Organization', name: 'PEC Media Production' },
  }).replaceAll('<', '\\u003c');

  return (
    <article className="bg-white pb-24 dark:bg-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <div className="bg-slate-900 px-4 py-20 text-white">
        <div className="mx-auto max-w-4xl">
          <Link href="/blog" className="inline-flex items-center text-blue-300 hover:text-blue-200">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to blog
          </Link>
          <p className="mt-10 font-semibold text-blue-400">{post.category}</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-6xl">{post.title}</h1>
          <p className="mt-6 text-xl text-slate-300">{post.excerpt}</p>
          <div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-300">
            <span className="flex items-center">
              <User className="mr-2 h-4 w-4" />
              {post.author}
            </span>
            <span className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              {new Date(post.date).toLocaleDateString()}
            </span>
            <span className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-4xl px-4 pt-12">
        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={675}
          priority
          sizes="(min-width: 896px) 896px, 100vw"
          className="aspect-video w-full rounded-2xl object-cover shadow-xl"
        />
        <div className="mt-12 space-y-6 text-lg leading-8 text-slate-700 dark:text-slate-300">
          {post.content.split(/\n{2,}/).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
