import es from './es.json';
import en from './en.json';

export const LOCALES = ['es', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'es';

type Dict = typeof es;

const DICTS: Record<Locale, Dict> = { es, en: en as unknown as Dict };

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

export function altLocale(locale: Locale): Locale {
  return locale === 'es' ? 'en' : 'es';
}

export function localisedPath(locale: Locale, path: string = ''): string {
  const clean = path.replace(/^\/+/, '');
  return clean ? `/${locale}/${clean}` : `/${locale}/`;
}

export const LOCALE_PATHS = {
  manifesto: { es: 'manifiesto', en: 'manifesto' },
  features: { es: 'funcionalidades', en: 'features' },
  pricing: { es: 'precios', en: 'pricing' },
  contact: { es: 'contacto', en: 'contact' },
  legalPrivacy: { es: 'legal/privacidad', en: 'legal/privacy' },
  legalTerms: { es: 'legal/terminos', en: 'legal/terms' },
  legalCookies: { es: 'legal/cookies', en: 'legal/cookies' },
} as const;

export type PagePathKey = keyof typeof LOCALE_PATHS;

export function pagePath(locale: Locale, key: PagePathKey, extra?: string): string {
  const slug = LOCALE_PATHS[key][locale];
  const tail = extra ? `/${extra.replace(/^\/+|\/+$/g, '')}` : '';
  return `/${locale}/${slug}${tail}/`;
}

export function moduleTitle(locale: Locale, title: { es: string; en: string }): string {
  return title[locale];
}
