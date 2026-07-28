import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { LOCALES, useTranslations, type Locale } from '~/i18n';
import { localeOf, slugOf, postPath, isPublished } from '~/lib/blog';

export function getStaticPaths() {
  return LOCALES.map((lang) => ({ params: { lang } }));
}

export const GET: APIRoute = async ({ params, site }) => {
  const locale = params.lang as Locale;
  const t = useTranslations(locale);

  const posts = (await getCollection('blog'))
    .filter((p) => localeOf(p.id) === locale && isPublished(p))
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

  return rss({
    title: `Dentalpin · ${t('blog.title')}`,
    description: t('blog.subtitle'),
    site: site ?? 'https://www.dentalpin.com',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: postPath(locale, slugOf(post.id)),
      categories: post.data.tags,
    })),
  });
};
