import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    tags: z.string().transform(str => str.split(' ').filter(Boolean)).or(z.array(z.string())).optional(),
  }),
});

export const collections = { blog };
