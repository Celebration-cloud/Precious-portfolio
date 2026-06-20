import { defineField, defineType } from 'sanity';

export const post = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'Post ID / Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'title',
      title: 'Post Title',
      type: 'string',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'content',
      title: 'Article Content',
      type: 'text',
      rows: 10,
    }),
    defineField({
      name: 'date',
      title: 'Publish Date',
      type: 'date',
      initialValue: () => new Date().toISOString().split('T')[0],
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'Edemu Precious',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image URL',
      type: 'string',
    }),
    defineField({
      name: 'uploadImage',
      title: 'Upload Post Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time (e.g. 5 min read)',
      type: 'string',
    }),
  ],
});
