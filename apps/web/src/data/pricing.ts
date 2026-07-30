import type { Locale } from '~/i18n';

/*
 * Every figure here is a string already written in its market's currency.
 * Publishing a visible conversion of the European price is exactly what we
 * do not want, so there is no arithmetic in this file on purpose: no rates,
 * no Intl, no rounding rules. Amounts carry no "per month" suffix either —
 * that word is copy, and copy lives in the dictionaries.
 *
 * `price: null` is a market whose tariff is not published yet. It is a state,
 * not a hole: the page renders "let's talk" wherever a figure would go, and
 * opening the market later is filling in one object.
 */
export type Price = {
  monthly: string;
  /** Paying yearly costs ten months instead of twelve. */
  annual: string;
  /** What those twelve months would have been, so the saving is visible. */
  annualInstead: string;
  setup: string;
  migration: string;
  /** Service + server + backups. Buyers add this up themselves, and badly. */
  total: string;
};

export type Market = {
  price: Price | null;
  /** Charged by Hetzner straight to the clinic. True in every market. */
  server: string;
  backups: string;
  /** A closed migration price exists only where dental-bridge covers the source. */
  migration: 'flat' | 'quote';
  /** Invoicing wired to the tax authority. Where it is not, the page says so. */
  fiscal: 'verifactu' | null;
  datacenter: 'nuremberg' | 'ashburn';
};

/** Hetzner's European tariff, same for every market served from Nuremberg. */
const EU_INFRA = { server: '12-15 €', backups: '4 €' } as const;

/** A market we serve but have not priced publicly yet. */
const UNPRICED: Market = {
  price: null,
  ...EU_INFRA,
  migration: 'quote',
  fiscal: null,
  datacenter: 'nuremberg',
};

export const MARKET: Record<Locale, Market> = {
  es: {
    price: {
      monthly: '89 €',
      annual: '890 €',
      annualInstead: '1.068 €',
      setup: '490 €',
      migration: '490 €',
      total: '105 €',
    },
    ...EU_INFRA,
    migration: 'flat',
    fiscal: 'verifactu',
    datacenter: 'nuremberg',
  },
  'es-mx': {
    price: {
      monthly: 'MXN 899',
      annual: 'MXN 8.990',
      annualInstead: 'MXN 10.788',
      setup: 'MXN 4.900',
      migration: '',
      total: 'MXN 1.300',
    },
    // Hetzner bills its US datacenter in dollars; these are that tariff carried
    // to pesos so the total adds up in one currency. Approximate on purpose.
    server: 'MXN 300-350',
    backups: 'MXN 70',
    migration: 'quote',
    fiscal: null,
    datacenter: 'ashburn',
  },
  en: UNPRICED,
  fr: UNPRICED,
  pt: UNPRICED,
  de: UNPRICED,
  it: UNPRICED,
  pl: UNPRICED,
  'pt-br': UNPRICED,
};
