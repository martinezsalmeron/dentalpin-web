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

// Rounded up so nothing ever reads "0 min". 200 wpm is the usual figure for
// prose; these posts carry tables and code, which people scan rather than
// read, so a word count slightly overstates the real time — that error is
// in the right direction for an estimate shown before someone commits.
export function readingMinutes(markdown: string): number {
  const words = markdown.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}
