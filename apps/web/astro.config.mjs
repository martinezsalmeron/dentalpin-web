import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const site = process.env.PUBLIC_SITE_URL ?? 'https://dentalpin.com';

export default defineConfig({
  site,
  output: 'static',
  adapter: node({ mode: 'standalone' }),
  server: { host: '0.0.0.0', port: 4321 },
  redirects: {
    '/': '/es/',
  },
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
  // i18n handled via [lang] dynamic routes + getStaticPaths.
  // Keeping `locales` here gives us Astro.currentLocale for free.
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-ES', en: 'en-US' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    ssr: { noExternal: ['@dentalpin/ui', '@dentalpin/tokens'] },
  },
});
