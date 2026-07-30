import es from './es.json';
import en from './en.json';
import fr from './fr.json';
import pt from './pt.json';
import de from './de.json';
import it from './it.json';
import pl from './pl.json';
import { MODULES, moduleSlug } from '~/data/modules';

export const LOCALES = ['es', 'en', 'fr', 'pt', 'de', 'it', 'pl'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'es';

type Dict = typeof es;

const DICTS: Record<Locale, Dict> = {
  es,
  en: en as unknown as Dict,
  fr: fr as unknown as Dict,
  pt: pt as unknown as Dict,
  de: de as unknown as Dict,
  it: it as unknown as Dict,
  pl: pl as unknown as Dict,
};

/**
 * BCP-47 tags: `<html lang>`, og:locale and Intl date formatting.
 * Portuguese carries no region on purpose — one Portuguese for every
 * market, so `hreflang="pt"` targets the language rather than a country.
 * og:locale is the exception: the format requires a territory.
 */
export const HTML_LANG: Record<Locale, string> = {
  es: 'es-ES',
  en: 'en-US',
  fr: 'fr-FR',
  pt: 'pt',
  de: 'de-DE',
  it: 'it-IT',
  pl: 'pl-PL',
};
export const OG_LOCALE: Record<Locale, string> = {
  es: 'es_ES',
  en: 'en_US',
  fr: 'fr_FR',
  pt: 'pt_PT',
  de: 'de_DE',
  it: 'it_IT',
  pl: 'pl_PL',
};
export const DATE_LOCALE: Record<Locale, string> = {
  es: 'es-ES',
  en: 'en-GB',
  fr: 'fr-FR',
  pt: 'pt',
  de: 'de-DE',
  it: 'it-IT',
  pl: 'pl-PL',
};

export function isLocale(value: string | undefined): value is Locale {
  return value !== undefined && (LOCALES as readonly string[]).includes(value);
}

export function useDict(locale: Locale): Dict {
  return DICTS[locale];
}

export function useTranslations(locale: Locale) {
  const dict = DICTS[locale] as unknown as Record<string, unknown>;
  return function t(path: string): string {
    const out = path.split('.').reduce<unknown>((acc, key) => {
      if (acc && typeof acc === 'object' && key in (acc as object)) {
        return (acc as Record<string, unknown>)[key];
      }
      return undefined;
    }, dict);
    if (typeof out !== 'string') {
      return path;
    }
    return out;
  };
}

export function otherLocales(locale: Locale): Locale[] {
  return LOCALES.filter((l) => l !== locale);
}

export function localisedPath(locale: Locale, path: string = ''): string {
  const clean = path.replace(/^\/+/, '');
  return clean ? `/${locale}/${clean}` : `/${locale}/`;
}

export const LOCALE_PATHS = {
  manifesto: {
    es: 'manifiesto',
    en: 'manifesto',
    fr: 'manifeste',
    pt: 'manifesto',
    de: 'manifest',
    it: 'manifesto',
    pl: 'manifest',
  },
  features: {
    es: 'funcionalidades',
    en: 'features',
    fr: 'fonctionnalites',
    pt: 'funcionalidades',
    de: 'funktionen',
    it: 'funzionalita',
    pl: 'funkcje',
  },
  technology: {
    es: 'tecnologia',
    en: 'technology',
    fr: 'technologie',
    pt: 'tecnologia',
    de: 'technologie',
    it: 'tecnologia',
    pl: 'technologia',
  },
  pricing: {
    es: 'precios',
    en: 'pricing',
    fr: 'tarifs',
    pt: 'precos',
    de: 'preise',
    it: 'prezzi',
    pl: 'cennik',
  },
  contact: {
    es: 'contacto',
    en: 'contact',
    fr: 'contact',
    pt: 'contacto',
    de: 'kontakt',
    it: 'contatti',
    pl: 'kontakt',
  },
  blog: { es: 'blog', en: 'blog', fr: 'blog', pt: 'blog', de: 'blog', it: 'blog', pl: 'blog' },
  legalPrivacy: {
    es: 'legal/privacidad',
    en: 'legal/privacy',
    fr: 'legal/confidentialite',
    pt: 'legal/privacidade',
    de: 'legal/datenschutz',
    it: 'legal/privacy',
    pl: 'legal/prywatnosc',
  },
  legalTerms: {
    es: 'legal/terminos',
    en: 'legal/terms',
    fr: 'legal/conditions',
    pt: 'legal/termos',
    de: 'legal/nutzungsbedingungen',
    it: 'legal/termini',
    pl: 'legal/regulamin',
  },
  legalCookies: {
    es: 'legal/cookies',
    en: 'legal/cookies',
    fr: 'legal/cookies',
    pt: 'legal/cookies',
    de: 'legal/cookies',
    it: 'legal/cookies',
    pl: 'legal/cookies',
  },
} as const;

export type PagePathKey = keyof typeof LOCALE_PATHS;

export function pagePath(locale: Locale, key: PagePathKey, extra?: string): string {
  const slug = LOCALE_PATHS[key][locale];
  const tail = extra ? `/${extra.replace(/^\/+|\/+$/g, '')}` : '';
  return `/${locale}/${slug}${tail}/`;
}

const LOCALE_PREFIX = new RegExp(`^/(${LOCALES.join('|')})(?=/|$)`);
// Longest first so `legal/privacidad` wins over a shorter slug that shares its head.
const PATH_KEYS = (Object.keys(LOCALE_PATHS) as PagePathKey[]).sort(
  (a, b) => LOCALE_PATHS[b].es.length - LOCALE_PATHS[a].es.length
);

/**
 * Rewrite a URL into another locale, translating the localised slugs on the way:
 * `/es/funcionalidades/odontograma/` → `/fr/fonctionnalites/odontogramme/`.
 * A blog post has no counterpart under another slug, so it falls back to that
 * locale's blog index rather than pointing at a page that does not exist.
 */
export function translatePath(pathname: string, target: Locale): string {
  const rest = pathname.replace(LOCALE_PREFIX, '').replace(/^\/+|\/+$/g, '');
  if (!rest) return `/${target}/`;

  const key = PATH_KEYS.find((k) =>
    LOCALES.some((l) => rest === LOCALE_PATHS[k][l] || rest.startsWith(`${LOCALE_PATHS[k][l]}/`))
  );
  if (!key) return `/${target}/${rest}/`;

  const matched = LOCALES.map((l) => LOCALE_PATHS[key][l]).find(
    (slug) => rest === slug || rest.startsWith(`${slug}/`)
  )!;
  const tail = rest.slice(matched.length).replace(/^\/+/, '');
  if (!tail || key === 'blog') return pagePath(target, key);

  if (key === 'features') {
    const mod = MODULES.find((m) => [m.slug, m.slugEn, m.slugFr, m.slugPt, m.slugDe, m.slugIt, m.slugPl].includes(tail));
    if (mod) return pagePath(target, key, moduleSlug(mod, target));
  }
  return pagePath(target, key, tail);
}

export function moduleTitle(locale: Locale, title: Record<Locale, string>): string {
  return title[locale];
}
