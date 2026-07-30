import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { rehypeTableChips } from './src/lib/rehype-table-chips.mjs';

const site = process.env.PUBLIC_SITE_URL ?? 'https://www.dentalpin.com';

export default defineConfig({
  site,
  output: 'static',
  adapter: node({ mode: 'standalone' }),
  server: { host: '0.0.0.0', port: 4321 },
  redirects: {
    '/': '/es/',
  },
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
  markdown: {
    rehypePlugins: [rehypeTableChips],
  },
  // i18n handled via [lang] dynamic routes + getStaticPaths.
  // Keeping `locales` here gives us Astro.currentLocale for free.
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'fr', 'pt', 'de', 'it'],
  },
  integrations: [
    // No `i18n` block on purpose. The integration pairs locales by matching
    // the path after the locale prefix, and our slugs are translated, so
    // /es/funcionalidades/ paired with /pt/funcionalidades/ while
    // /en/features/ and /fr/fonctionnalites/ were left with no alternates at
    // all — 62 of 105 URLs had none. BaseLayout emits the full set from
    // `translatePath`, which knows the slug table, so the sitemap listing the
    // URLs is all we need from it here.
    sitemap({
      // Legal pages are noindex. Listing them says "index this" from one
      // place while the page says the opposite from another.
      filter: (page) => !page.includes('/legal/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    ssr: { noExternal: ['@dentalpin/ui', '@dentalpin/tokens'] },
  },
});
