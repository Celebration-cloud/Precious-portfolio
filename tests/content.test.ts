import { describe, expect, it } from 'vitest';
import * as fallback from '../data/content';
import { parseContentOrFallback } from '../lib/content-validation';
import {
  blogPostsSchema,
  businessInfoSchema,
  portfolioProjectsSchema,
  servicesSchema,
  siteSettingsSchema,
  testimonialsSchema,
} from '../schemas/content';

describe('fallback content', () => {
  it('matches every public content contract', () => {
    expect(businessInfoSchema.safeParse(fallback.businessInfo).success).toBe(true);
    expect(servicesSchema.safeParse(fallback.services).success).toBe(true);
    expect(portfolioProjectsSchema.safeParse(fallback.portfolioProjects).success).toBe(true);
    expect(testimonialsSchema.safeParse(fallback.testimonials).success).toBe(true);
    expect(blogPostsSchema.safeParse(fallback.blogPosts).success).toBe(true);
    expect(
      siteSettingsSchema.safeParse({
        targetAudience: fallback.targetAudience,
        brandPersonality: fallback.brandPersonality,
        whyChooseUs: fallback.whyChooseUs,
      }).success,
    ).toBe(true);
  });

  it('uses fallback content when remote content is invalid', () => {
    const result = parseContentOrFallback(servicesSchema, [], fallback.services);
    expect(result).toBe(fallback.services);
  });
});
