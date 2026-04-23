import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const site = process.env.PUBLIC_SITE_URL ?? 'https://docs.dentalpin.com';

export default defineConfig({
  site,
  output: 'static',
  server: { host: '0.0.0.0', port: 4322 },
  integrations: [
    starlight({
      title: 'Dentalpin Docs',
      description:
        'Documentación técnica y guías de producto de Dentalpin, el software de gestión para clínicas dentales.',
      logo: { src: './src/assets/logo.svg', replacesTitle: false },
      customCss: [
        '@fontsource-variable/inter',
        '@dentalpin/tokens/tokens.css',
        '@dentalpin/tokens/typography.css',
        './src/styles/starlight-theme.css',
      ],
      defaultLocale: 'es',
      locales: {
        es: { label: 'Español', lang: 'es' },
        en: { label: 'English', lang: 'en' },
      },
      sidebar: [
        {
          label: 'Empezar',
          translations: { 'en-US': 'Get started' },
          items: [
            { label: 'Introducción', translations: { 'en-US': 'Introduction' }, slug: 'guia/introduccion' },
            { label: 'Instalación', translations: { 'en-US': 'Installation' }, slug: 'guia/instalacion' },
          ],
        },
        {
          label: 'Clínica',
          translations: { 'en-US': 'Clinic' },
          items: [
            { label: 'Agenda', slug: 'guia/agenda' },
            { label: 'Odontograma', slug: 'guia/odontograma' },
            { label: 'Facturación', translations: { 'en-US': 'Billing' }, slug: 'guia/facturacion' },
          ],
        },
        {
          label: 'Referencia',
          translations: { 'en-US': 'Reference' },
          autogenerate: { directory: 'referencia' },
        },
      ],
    }),
  ],
});
