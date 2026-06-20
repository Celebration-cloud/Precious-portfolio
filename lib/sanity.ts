import { createClient } from '@sanity/client';
import * as staticData from '../src/data/content';

export const sanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID || '71wqvxpw',
  dataset: process.env.SANITY_DATASET || 'production',
  apiVersion: process.env.SANITY_API_VERSION || '2024-01-01',
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
});

export async function getBusinessInfo() {
  try {
    if (!process.env.SANITY_PROJECT_ID) return staticData.businessInfo;
    const query = `*[_type == "businessInfo"][0]`;
    const data = await sanityClient.fetch(query);
    return data || staticData.businessInfo;
  } catch (error) {
    console.error('Error fetching business info from Sanity:', error);
    return staticData.businessInfo;
  }
}

export async function getServices() {
  try {
    if (!process.env.SANITY_PROJECT_ID) return staticData.services;
    const query = `*[_type == "service"] | order(order asc)`;
    const data = await sanityClient.fetch(query);
    return data && data.length > 0 ? data : staticData.services;
  } catch (error) {
    console.error('Error fetching services from Sanity:', error);
    return staticData.services;
  }
}

export async function getPortfolioProjects() {
  try {
    if (!process.env.SANITY_PROJECT_ID) return staticData.portfolioProjects;
    const query = `*[_type == "project"] | order(createdAt desc)`;
    const data = await sanityClient.fetch(query);
    return data && data.length > 0 ? data : staticData.portfolioProjects;
  } catch (error) {
    console.error('Error fetching projects from Sanity:', error);
    return staticData.portfolioProjects;
  }
}

export async function getTestimonials() {
  try {
    if (!process.env.SANITY_PROJECT_ID) return staticData.testimonials;
    const query = `*[_type == "testimonial"]`;
    const data = await sanityClient.fetch(query);
    return data && data.length > 0 ? data : staticData.testimonials;
  } catch (error) {
    console.error('Error fetching testimonials from Sanity:', error);
    return staticData.testimonials;
  }
}

export async function getBlogPosts() {
  try {
    if (!process.env.SANITY_PROJECT_ID) return staticData.blogPosts;
    const query = `*[_type == "post"] | order(date desc)`;
    const data = await sanityClient.fetch(query);
    return data && data.length > 0 ? data : staticData.blogPosts;
  } catch (error) {
    console.error('Error fetching blog posts from Sanity:', error);
    return staticData.blogPosts;
  }
}

export async function getTargetAudience() {
  try {
    if (!process.env.SANITY_PROJECT_ID) return staticData.targetAudience;
    const query = `*[_type == "siteSettings"][0].targetAudience`;
    const data = await sanityClient.fetch(query);
    return data && data.length > 0 ? data : staticData.targetAudience;
  } catch (error) {
    console.error('Error fetching target audience from Sanity:', error);
    return staticData.targetAudience;
  }
}

export async function getBrandPersonality() {
  try {
    if (!process.env.SANITY_PROJECT_ID) return staticData.brandPersonality;
    const query = `*[_type == "siteSettings"][0].brandPersonality`;
    const data = await sanityClient.fetch(query);
    return data && data.length > 0 ? data : staticData.brandPersonality;
  } catch (error) {
    console.error('Error fetching brand personality from Sanity:', error);
    return staticData.brandPersonality;
  }
}

export async function getWhyChooseUs() {
  try {
    if (!process.env.SANITY_PROJECT_ID) return staticData.whyChooseUs;
    const query = `*[_type == "siteSettings"][0].whyChooseUs`;
    const data = await sanityClient.fetch(query);
    return data && data.length > 0 ? data : staticData.whyChooseUs;
  } catch (error) {
    console.error('Error fetching why choose us from Sanity:', error);
    return staticData.whyChooseUs;
  }
}
