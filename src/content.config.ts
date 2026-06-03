import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    // Drives the colored status chip; see the `status` palette in the MUI theme.
    status: z.enum(['live', 'in progress', 'idea', 'dead']),
    caption: z.string(),
    link: z.string().url().optional(),
    repo: z.string().url().optional(),
    // Transform the frontmatter string into a Date object.
    date: z.coerce.date(),
  }),
});

const snippets = defineCollection({
  loader: glob({ base: './src/content/snippets', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    caption: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = { projects, snippets };
