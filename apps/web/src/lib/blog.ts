import type { CollectionEntry } from 'astro:content';
import { REGIONAL_PARENT, isRegional, type Locale } from '~/i18n';

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

/**
 * Posts a locale publishes. A regional variant serves its parent's posts under
 * its own URLs, which is what hreflang is for: same content, another country.
 * Its own directory overrides the parent post that shares a filename, so
 * writing `blog/pt-br/migrar-software-dentario.md` replaces that one post and
 * leaves the rest inherited.
 */
export function postsForLocale<T extends { id: string }>(posts: T[], locale: Locale): T[] {
  const own = posts.filter((p) => localeOf(p.id) === locale);
  if (!isRegional(locale)) return own;
  const overridden = new Set(own.map((p) => slugOf(p.id)));
  const parent = REGIONAL_PARENT[locale];
  return [
    ...own,
    ...posts.filter((p) => localeOf(p.id) === parent && !overridden.has(slugOf(p.id))),
  ];
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
