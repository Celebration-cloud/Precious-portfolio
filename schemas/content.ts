import { z } from 'zod';

const requiredText = z.string().trim().min(1);
const url = z.string().url();

export const businessInfoSchema = z.object({
  name: requiredText,
  logo: requiredText,
  tagline: requiredText,
  description: requiredText,
  clientName: requiredText,
  contactPerson: requiredText,
  email: z.string().email(),
  phone: requiredText,
  phoneHref: requiredText,
  whatsappUrl: url,
  address: requiredText,
  youtubePlaylist: url,
  graphicsDrive: url,
  socialMedia: z.object({
    youtube: url,
    instagram: url,
    facebook: url,
    tiktok: url,
    linkedin: url,
  }),
});

export const serviceSchema = z.object({
  id: requiredText,
  title: requiredText,
  shortDescription: requiredText,
  fullDescription: requiredText,
  icon: requiredText,
  features: z.array(requiredText).min(1),
  tools: z.array(requiredText).min(1),
});

export const portfolioProjectSchema = z.object({
  id: requiredText,
  title: requiredText,
  category: requiredText,
  description: requiredText,
  challenge: requiredText,
  solution: requiredText,
  results: requiredText,
  thumbnail: url,
  imageUrl: url.optional(),
  videoUrl: url.optional(),
  technologies: z.array(requiredText).default([]),
});

export const testimonialSchema = z.object({
  id: z.union([z.string(), z.number()]),
  name: requiredText,
  role: requiredText,
  company: requiredText,
  content: requiredText,
  rating: z.number().int().min(1).max(5),
  service: requiredText,
});

export const blogPostSchema = z.object({
  id: requiredText,
  title: requiredText,
  excerpt: requiredText,
  content: requiredText,
  date: requiredText,
  author: requiredText,
  category: requiredText,
  image: url,
  readTime: requiredText,
});

export const whyChooseUsItemSchema = z.object({
  title: requiredText,
  description: requiredText,
  icon: requiredText,
});

export const siteSettingsSchema = z.object({
  targetAudience: z.array(requiredText).min(1),
  brandPersonality: z.array(requiredText).min(1),
  whyChooseUs: z.array(whyChooseUsItemSchema).min(1),
});

export const servicesSchema = z.array(serviceSchema).min(1);
export const portfolioProjectsSchema = z.array(portfolioProjectSchema).min(1);
export const testimonialsSchema = z.array(testimonialSchema).min(1);
export const blogPostsSchema = z.array(blogPostSchema).min(1);

export type BusinessInfo = z.infer<typeof businessInfoSchema>;
export type Service = z.infer<typeof serviceSchema>;
export type PortfolioProject = z.infer<typeof portfolioProjectSchema>;
export type Testimonial = z.infer<typeof testimonialSchema>;
export type BlogPost = z.infer<typeof blogPostSchema>;
export type WhyChooseUsItem = z.infer<typeof whyChooseUsItemSchema>;
export type SiteSettings = z.infer<typeof siteSettingsSchema>;
