import type { CollectionEntry } from 'astro:content';
import type { Locale } from '~/i18n';

// Collection ids are "<locale>/<slug>" — the loader's glob is `*/*.md`
// rooted at src/content/blog, so the directory carries the language and
// the filename becomes the URL, in that language.
export function localeOf(id: string): string {
  return id.split('/')[0] ?? '';
}

export function slugOf(id: string): string {
  return id.split('/').slice(1).join('/');
}

export function postPath(locale: Locale, slug: string): string {
  return `/${locale}/blog/${slug}/`;
}

// Drafts are visible while developing and dropped from real builds, so
// an unfinished post can be previewed without it reaching the feed.
export function isPublished(post: CollectionEntry<'blog'>): boolean {
  return import.meta.env.DEV || !post.data.draft;
}
