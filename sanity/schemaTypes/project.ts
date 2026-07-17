import { defineField, defineType } from 'sanity';

export const project = defineType({
  name: 'project',
  title: 'Portfolio Project',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'Project ID / Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description:
        'e.g., Video Production, Motion Graphics, Graphics Design, Photography, Colour Grading',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'challenge',
      title: 'The Challenge',
      type: 'text',
    }),
    defineField({
      name: 'solution',
      title: 'The Solution',
      type: 'text',
    }),
    defineField({
      name: 'results',
      title: 'The Results',
      type: 'text',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail Image URL',
      type: 'string',
      description: 'Image URL path (e.g. from Unsplash or local folder), or we can upload a file.',
    }),
    defineField({
      name: 'thumbnailImage',
      title: 'Upload Thumbnail Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'imageUrl',
      title: 'External Image/Drive Link',
      type: 'string',
    }),
    defineField({
      name: 'videoUrl',
      title: 'External Video Link (YouTube)',
      type: 'string',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies / Tools Used',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'createdAt',
      title: 'Created Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
});
