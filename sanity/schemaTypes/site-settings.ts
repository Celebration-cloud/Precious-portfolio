import { defineField, defineType } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Settings Title',
      type: 'string',
      initialValue: 'Global Site Settings',
      readOnly: true,
    }),
    defineField({
      name: 'targetAudience',
      title: 'Target Audience List',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Used in the About page (e.g. Corporate organizations, SMEs)',
    }),
    defineField({
      name: 'brandPersonality',
      title: 'Brand Personality Traits',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Used in the About page (e.g. Professional, Creative, Innovative)',
    }),
    defineField({
      name: 'whyChooseUs',
      title: 'Why Choose Us Highlights',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'highlight',
          title: 'Highlight Card',
          fields: [
            { name: 'title', title: 'Highlight Title', type: 'string' },
            { name: 'description', title: 'Highlight Description', type: 'text', rows: 2 },
            {
              name: 'icon',
              title: 'Highlight Icon Name (Lucide)',
              type: 'string',
              description: 'e.g. Award, Star, Zap, Shield',
            },
          ],
        },
      ],
      description: 'Used on the Home and About pages for agency features.',
    }),
  ],
});
