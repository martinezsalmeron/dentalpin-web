import type { Locale } from '~/i18n';

/*
 * Every figure here is a string already written in its market's currency.
 * Publishing a visible conversion of the European price is exactly what we
 * do not want, so there is no arithmetic in this file on purpose: no rates,
 * no Intl, no rounding rules. Amounts carry no "per month" suffix either —
 * that word is copy, and copy lives in the dictionaries.
 *
 * The software is free everywhere. What is left is infrastructure, quoted at
 * Hetzner's tariff as a reference: the clinic or its integrator may pick any
 * other provider.
 */
export type Market = {
  /** The software itself, in the market's currency. */
  free: string;
  server: string;
  backups: string;
  /** Server + backups. Buyers add this up themselves, and badly. */
  total: string;
  /** Invoicing wired to the tax authority. Where it is not, the page says so. */
  fiscal: 'verifactu' | null;
  datacenter: 'nuremberg' | 'ashburn';
};

/** Hetzner's European tariff, same for every market served from Nuremberg. */
const EU: Market = {
  free: '0 €',
  server: '12-15 €',
  backups: '4 €',
  total: '16-19 €',
  fiscal: null,
  datacenter: 'nuremberg',
};

export const MARKET: Record<Locale, Market> = {
  es: { ...EU, fiscal: 'verifactu' },
  'es-mx': {
    free: 'MXN 0',
    // Hetzner bills its US datacenter in dollars; these are that tariff carried
    // to pesos so the total adds up in one currency. Approximate on purpose.
    server: 'MXN 300-350',
    backups: 'MXN 70',
    total: 'MXN 370-420',
    fiscal: null,
    datacenter: 'ashburn',
  },
  en: EU,
  fr: EU,
  pt: EU,
  de: EU,
  it: EU,
  pl: EU,
  'pt-br': EU,
};
