import 'server-only';

import { createClient, type SanityClient } from '@sanity/client';
import { cacheLife, cacheTag } from 'next/cache';
import { z } from 'zod';
import * as fallback from '../data/content';
import { parseContentOrFallback } from './content-validation';
import { CONTENT_TAGS } from './content-tags';
import { getServerEnv } from './env';
import {
  blogPostSchema,
  blogPostsSchema,
  businessInfoSchema,
  portfolioProjectsSchema,
  servicesSchema,
  siteSettingsSchema,
  testimonialsSchema,
  type BlogPost,
  type BusinessInfo,
  type PortfolioProject,
  type Service,
  type SiteSettings,
  type Testimonial,
} from '../schemas/content';

export { CONTENT_TAGS } from './content-tags';

const fallbackSettings = siteSettingsSchema.parse({
  targetAudience: fallback.targetAudience,
  brandPersonality: fallback.brandPersonality,
  whyChooseUs: fallback.whyChooseUs,
});

let sanityClient: SanityClient | null | undefined;
const SANITY_FETCH_TIMEOUT_MS = 5_000;

function createFetchSignal(): AbortSignal {
  return AbortSignal.timeout(SANITY_FETCH_TIMEOUT_MS);
}

function getSanityClient(): SanityClient | null {
  if (sanityClient !== undefined) return sanityClient;

  const env = getServerEnv();
  if (!env.SANITY_PROJECT_ID) {
    sanityClient = null;
    return sanityClient;
  }

  sanityClient = createClient({
    projectId: env.SANITY_PROJECT_ID,
    dataset: env.SANITY_DATASET,
    apiVersion: env.SANITY_API_VERSION,
    token: env.SANITY_API_TOKEN,
    useCdn: true,
    perspective: 'published',
  });

  return sanityClient;
}

async function fetchValidated<T>(
  query: string,
  schema: z.ZodType<T>,
  fallbackValue: T,
  params: Record<string, unknown> = {},
): Promise<T> {
  const client = getSanityClient();
  if (!client) return fallbackValue;

  try {
    const result: unknown = await client.fetch(query, params, {
      signal: createFetchSignal(),
    });
    const parsed = parseContentOrFallback(schema, result, fallbackValue);
    if (parsed !== fallbackValue) return parsed;

    console.warn('Sanity content failed validation; using local fallback.');
  } catch (error) {
    console.error('Sanity content request failed; using local fallback.', error);
  }

  return fallbackValue;
}

const businessInfoQuery = `*[_type == "businessInfo"][0]{
  name, "logo": coalesce(logo.asset->url, logo), tagline, description, clientName,
  contactPerson, email, phone, phoneHref, whatsappUrl, address, youtubePlaylist,
  graphicsDrive, socialMedia{youtube, instagram, facebook, tiktok, linkedin}
}`;

const servicesQuery = `*[_type == "service"] | order(order asc){
  "id": id.current, title, shortDescription, fullDescription, icon, features, tools
}`;

const projectsQuery = `*[_type == "project"] | order(createdAt desc){
  "id": id.current, title, category, description, challenge, solution, results,
  "thumbnail": coalesce(thumbnailImage.asset->url, thumbnail), imageUrl, videoUrl, technologies
}`;

const testimonialsQuery = `*[_type == "testimonial"] | order(_createdAt desc){
  "id": _id, name, role, company, content, rating, service
}`;

const postsQuery = `*[_type == "post"] | order(date desc){
  "id": id.current, title, excerpt, content, date, author, category,
  "image": coalesce(uploadImage.asset->url, image), readTime
}`;

const settingsQuery = `*[_type == "siteSettings"][0]{targetAudience, brandPersonality, whyChooseUs}`;

export async function getBusinessInfo(): Promise<BusinessInfo> {
  'use cache';
  cacheLife('minutes');
  cacheTag(CONTENT_TAGS.businessInfo);
  return fetchValidated(
    businessInfoQuery,
    businessInfoSchema,
    businessInfoSchema.parse(fallback.businessInfo),
  );
}

export async function getServices(): Promise<Service[]> {
  'use cache';
  cacheLife('minutes');
  cacheTag(CONTENT_TAGS.services);
  return fetchValidated(servicesQuery, servicesSchema, servicesSchema.parse(fallback.services));
}

export async function getPortfolioProjects(): Promise<PortfolioProject[]> {
  'use cache';
  cacheLife('minutes');
  cacheTag(CONTENT_TAGS.projects);
  return fetchValidated(
    projectsQuery,
    portfolioProjectsSchema,
    portfolioProjectsSchema.parse(fallback.portfolioProjects),
  );
}

export async function getTestimonials(): Promise<Testimonial[]> {
  'use cache';
  cacheLife('minutes');
  cacheTag(CONTENT_TAGS.testimonials);
  return fetchValidated(
    testimonialsQuery,
    testimonialsSchema,
    testimonialsSchema.parse(fallback.testimonials),
  );
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  'use cache';
  cacheLife('minutes');
  cacheTag(CONTENT_TAGS.posts);
  return fetchValidated(postsQuery, blogPostsSchema, blogPostsSchema.parse(fallback.blogPosts));
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  'use cache';
  cacheLife('minutes');
  cacheTag(CONTENT_TAGS.posts);

  const fallbackPost = fallback.blogPosts.find((post) => post.id === slug) ?? null;
  const client = getSanityClient();
  if (!client) return fallbackPost ? blogPostSchema.parse(fallbackPost) : null;

  const query = `*[_type == "post" && id.current == $slug][0]{
    "id": id.current, title, excerpt, content, date, author, category,
    "image": coalesce(uploadImage.asset->url, image), readTime
  }`;

  try {
    const result: unknown = await client.fetch(query, { slug }, { signal: createFetchSignal() });
    const parsed = blogPostSchema.safeParse(result);
    if (parsed.success) return parsed.data;
  } catch (error) {
    console.error('Sanity blog post request failed; using local fallback.', error);
  }

  return fallbackPost ? blogPostSchema.parse(fallbackPost) : null;
}

export async function getSiteSettings(): Promise<SiteSettings> {
  'use cache';
  cacheLife('minutes');
  cacheTag(CONTENT_TAGS.siteSettings);
  return fetchValidated(settingsQuery, siteSettingsSchema, fallbackSettings);
}

export async function getTargetAudience(): Promise<string[]> {
  return (await getSiteSettings()).targetAudience;
}

export async function getBrandPersonality(): Promise<string[]> {
  return (await getSiteSettings()).brandPersonality;
}

export async function getWhyChooseUs(): Promise<SiteSettings['whyChooseUs']> {
  return (await getSiteSettings()).whyChooseUs;
}
