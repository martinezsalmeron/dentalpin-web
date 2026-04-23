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

export function moduleTitle(locale: Locale, title: { es: string; en: string }): string {
  return title[locale];
}
