import es from './es.json';
import en from './en.json';
import fr from './fr.json';
import pt from './pt.json';
import de from './de.json';
import it from './it.json';
import pl from './pl.json';
import ptBrOverrides from './pt-br.overrides.json';
import esMxOverrides from './es-mx.overrides.json';
import { MODULES, moduleSlug } from '~/data/modules';

/**
 * `pt-br` and `es-mx` are regional variants, not new translations: they
 * inherit their parent's dictionary and override only what actually differs
 * in that market (currency, tax vocabulary, head terms). Duplicating 914
 * strings to change forty of them is a copy that rots on the first edit.
 */
export const REGIONAL_PARENT = { 'pt-br': 'pt', 'es-mx': 'es' } as const;

export const LOCALES = ['es', 'en', 'fr', 'pt', 'de', 'it', 'pl', 'pt-br', 'es-mx'] as const;
export type Locale = (typeof LOCALES)[number];
export type RegionalLocale = keyof typeof REGIONAL_PARENT;
/** Locales a translation is written in. Regional variants read their parent's. */
export type ContentLocale = Exclude<Locale, RegionalLocale>;
export const DEFAULT_LOCALE: Locale = 'es';

export function isRegional(locale: Locale): locale is RegionalLocale {
  return locale in REGIONAL_PARENT;
}

/** The locale whose content a page reads: itself, or its parent for a variant. */
export function contentLocale(locale: Locale): ContentLocale {
  return isRegional(locale) ? REGIONAL_PARENT[locale] : locale;
}

type Dict = typeof es;

/**
 * Overrides are flat dotted paths (`pricing.faq.items[4].a`) so a variant
 * file lists only the strings it changes. A nested partial cannot address one
 * item of an array without restating the whole array.
 */
function withOverrides(base: Dict, overrides: Record<string, string>): Dict {
  const out = structuredClone(base) as unknown as Record<string, unknown>;
  for (const [path, value] of Object.entries(overrides)) {
    const keys = [...path.matchAll(/([^.[\]]+)|\[(\d+)\]/g)].map((m) =>
      m[1] !== undefined ? m[1] : Number(m[2])
    );
    let node = out as Record<string | number, unknown>;
    for (const key of keys.slice(0, -1)) {
      node = node[key] as Record<string | number, unknown>;
      if (node === undefined) throw new Error(`Unknown override path: ${path}`);
    }
    const last = keys[keys.length - 1]!;
    if (node[last] === undefined) throw new Error(`Unknown override path: ${path}`);
    // An override equal to its parent is dead weight that outlives the reason it
    // was added, so it fails the build instead of rotting quietly.
    if (node[last] === value) throw new Error(`Override identical to parent: ${path}`);
    node[last] = value;
  }
  return out as unknown as Dict;
}

const DICTS: Record<Locale, Dict> = {
  es,
  en: en as unknown as Dict,
  fr: fr as unknown as Dict,
  pt: pt as unknown as Dict,
  de: de as unknown as Dict,
  it: it as unknown as Dict,
  pl: pl as unknown as Dict,
  'pt-br': withOverrides(pt as unknown as Dict, ptBrOverrides),
  'es-mx': withOverrides(es, esMxOverrides),
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
  'pt-br': 'pt-BR',
  'es-mx': 'es-MX',
};

/**
 * hreflang per locale, plus the extra country tags that point at a page we
 * already have. `pt` stays generic so Portugal and every other Portuguese
 * market keeps it while Brazil gets `pt-BR`; Spanish-speaking Latin America
 * is sent to the Mexican page, whose currency and vocabulary are closer than
 * Spain's. Google only accepts ISO 3166-1 alpha-2 regions, so `es-419` is
 * not an option and the countries are listed one by one.
 */
export const HREFLANG: Record<Locale, string> = {
  es: 'es',
  en: 'en',
  fr: 'fr',
  pt: 'pt',
  de: 'de',
  it: 'it',
  pl: 'pl',
  'pt-br': 'pt-BR',
  'es-mx': 'es-MX',
};
export const HREFLANG_ALIASES: Partial<Record<Locale, string[]>> = {
  'es-mx': ['es-AR', 'es-CL', 'es-CO', 'es-PE'],
};
export const OG_LOCALE: Record<Locale, string> = {
  es: 'es_ES',
  en: 'en_US',
  fr: 'fr_FR',
  pt: 'pt_PT',
  de: 'de_DE',
  it: 'it_IT',
  pl: 'pl_PL',
  'pt-br': 'pt_BR',
  'es-mx': 'es_MX',
};
export const DATE_LOCALE: Record<Locale, string> = {
  es: 'es-ES',
  en: 'en-GB',
  fr: 'fr-FR',
  pt: 'pt',
  de: 'de-DE',
  it: 'it-IT',
  pl: 'pl-PL',
  'pt-br': 'pt-BR',
  'es-mx': 'es-MX',
};

/**
 * A string authored per language. Regional variants inherit their parent's
 * value unless they list their own, which only a handful of head terms do
 * ("prontuário eletrônico" in Brazil, "expediente clínico" in Mexico).
 */
export type Localised = Record<ContentLocale, string> & Partial<Record<RegionalLocale, string>>;

export function localised(map: Localised, locale: Locale): string {
  return map[locale] ?? map[contentLocale(locale)];
}

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
    'pt-br': 'manifesto',
    'es-mx': 'manifiesto',
  },
  features: {
    es: 'funcionalidades',
    en: 'features',
    fr: 'fonctionnalites',
    pt: 'funcionalidades',
    de: 'funktionen',
    it: 'funzionalita',
    pl: 'funkcje',
    'pt-br': 'funcionalidades',
    'es-mx': 'funcionalidades',
  },
  technology: {
    es: 'tecnologia',
    en: 'technology',
    fr: 'technologie',
    pt: 'tecnologia',
    de: 'technologie',
    it: 'tecnologia',
    pl: 'technologia',
    'pt-br': 'tecnologia',
    'es-mx': 'tecnologia',
  },
  pricing: {
    es: 'precios',
    en: 'pricing',
    fr: 'tarifs',
    pt: 'precos',
    de: 'preise',
    it: 'prezzi',
    pl: 'cennik',
    'pt-br': 'precos',
    'es-mx': 'precios',
  },
  contact: {
    es: 'contacto',
    en: 'contact',
    fr: 'contact',
    pt: 'contacto',
    de: 'kontakt',
    it: 'contatti',
    pl: 'kontakt',
    // Brazil writes "contato", Portugal "contacto". The one slug that splits.
    'pt-br': 'contato',
    'es-mx': 'contacto',
  },
  blog: {
    es: 'blog',
    en: 'blog',
    fr: 'blog',
    pt: 'blog',
    de: 'blog',
    it: 'blog',
    pl: 'blog',
    'pt-br': 'blog',
    'es-mx': 'blog',
  },
  legalPrivacy: {
    es: 'legal/privacidad',
    en: 'legal/privacy',
    fr: 'legal/confidentialite',
    pt: 'legal/privacidade',
    de: 'legal/datenschutz',
    it: 'legal/privacy',
    pl: 'legal/prywatnosc',
    'pt-br': 'legal/privacidade',
    'es-mx': 'legal/privacidad',
  },
  legalTerms: {
    es: 'legal/terminos',
    en: 'legal/terms',
    fr: 'legal/conditions',
    pt: 'legal/termos',
    de: 'legal/nutzungsbedingungen',
    it: 'legal/termini',
    pl: 'legal/regulamin',
    'pt-br': 'legal/termos',
    'es-mx': 'legal/terminos',
  },
  legalCookies: {
    es: 'legal/cookies',
    en: 'legal/cookies',
    fr: 'legal/cookies',
    pt: 'legal/cookies',
    de: 'legal/cookies',
    it: 'legal/cookies',
    pl: 'legal/cookies',
    'pt-br': 'legal/cookies',
    'es-mx': 'legal/cookies',
  },
} as const;

export type PagePathKey = keyof typeof LOCALE_PATHS;

export function pagePath(locale: Locale, key: PagePathKey, extra?: string): string {
  const slug = LOCALE_PATHS[key][locale];
  const tail = extra ? `/${extra.replace(/^\/+|\/+$/g, '')}` : '';
  return `/${locale}/${slug}${tail}/`;
}

// Longest first: `pt` would otherwise shadow `pt-br` in the alternation.
const LOCALE_PREFIX = new RegExp(
  `^/(${[...LOCALES].sort((a, b) => b.length - a.length).join('|')})(?=/|$)`
);
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

export function moduleTitle(locale: Locale, title: Localised): string {
  return localised(title, locale);
}
