import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        author: z.string(),
        image: z.string().optional(),
        description: z.string(),
        tags: z.array(z.string()).default([]),
        category: z.string().optional(),
    }),
});

export const collections = {
    posts: postsCollection,
};
