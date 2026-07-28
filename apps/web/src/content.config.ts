import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Posts live at src/content/blog/<locale>/<slug>.md — the directory
// carries the language, the filename is the URL. Translations do not
// share a filename on purpose: an English post reached through a
// Spanish slug is a page Google has no reason to rank.
const blog = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    ogImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
