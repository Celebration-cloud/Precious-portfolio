export const CONTENT_TAGS = {
  businessInfo: 'business-info',
  services: 'services',
  projects: 'projects',
  testimonials: 'testimonials',
  posts: 'posts',
  siteSettings: 'site-settings',
} as const;

export type ContentTag = (typeof CONTENT_TAGS)[keyof typeof CONTENT_TAGS];
export const contentTags = new Set<ContentTag>(Object.values(CONTENT_TAGS));
