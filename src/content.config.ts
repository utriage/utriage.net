import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { liquidGlob } from './utils/liquid-loader';

const posts = defineCollection({
  loader: liquidGlob({ pattern: '[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]-*.md', base: './_posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    author: z.string().default('Ultimate Triage'),
    tag: z.array(z.string()).or(z.string().transform((s) => [s])).optional().default(['blog']),
    tags: z.array(z.string()).optional(),
    excerpt: z.string().optional(),
    image: z.string().optional(),
    permalink: z.string().optional(),
  }),
});

const pages = defineCollection({
  loader: liquidGlob({ pattern: '[!_]*.md', base: './_pages' }),
  schema: z.object({
    title: z.string().optional(),
    date: z.coerce.date().optional(),
    author: z.string().default('Ultimate Triage'),
    tag: z.array(z.string()).or(z.string().transform((s) => [s])).optional().default(['blog']),
    tags: z.array(z.string()).optional(),
    excerpt: z.string().optional(),
    image: z.string().optional(),
    permalink: z.string().optional(),
    sitemap: z.boolean().optional(),
  }),
});

export const collections = { posts, pages };
