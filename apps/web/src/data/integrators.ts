/**
 * Public directory of companies that install and maintain Dentalpin.
 * New entries are added by hand after an integrator writes in through the
 * contact form (reason=partner). Order inside a country is alphabetical.
 */
export type Service = 'install' | 'migration' | 'support' | 'training' | 'custom';
export const SERVICES: Service[] = ['install', 'migration', 'support', 'training', 'custom'];

export interface Integrator {
  slug: string;
  /** Name shown on the card. */
  name: string;
  /** Registered company name, for the JSON-LD. */
  legalName: string;
  /** Headquarters city, in countries[0]. */
  city?: string;
  /**
   * ISO 3166-1 alpha-2, headquarters first; the card shows under each.
   * Names are localised with Intl.DisplayNames.
   */
  countries: string[];
  /** ISO 639-1 languages the integrator works in. */
  languages: string[];
  services: Service[];
  website?: string;
  email?: string;
  /** Digits only, E.164 without the plus: used for wa.me and tel: links. */
  whatsapp?: string;
  /** Landline for integrators without WhatsApp, same digits-only format. */
  phone?: string;
  logo?: string;
  /** Month the integrator joined the directory, YYYY-MM. */
  since: string;
}

export const INTEGRATORS: Integrator[] = [
  {
    slug: 'thl',
    name: 'THL Desenvolvimento',
    legalName: 'THL DESENVOLVIMENTO DE SOFTWARES LTDA',
    city: 'Curitiba',
    countries: ['BR'],
    languages: ['pt'],
    services: ['install', 'migration', 'support', 'training', 'custom'],
    website: 'https://thldesenvolvimentoltda.com.br',
    email: 'thldesenvolvimentoltda@gmail.com',
    whatsapp: '5541987838730',
    logo: '/integrators/thl.png',
    since: '2026-11',
  },
  {
    slug: '323-it',
    name: '323 IT & Networking',
    legalName: '323 IT & Networking Española SL',
    city: 'Ontinyent',
    countries: ['ES'],
    languages: ['es'],
    services: ['install', 'migration', 'support'],
    website: 'https://www.323-it.es',
    email: 'info@323-it.es',
    phone: '34960038120',
    logo: '/integrators/323-it.png',
    since: '2026-11',
  },
  {
    slug: 'piecyfer',
    name: 'PieCyfer',
    legalName: 'PieCyfer',
    city: 'San Mateo',
    countries: ['US', 'CA', 'GB', 'AU', 'ES'],
    languages: ['en', 'es'],
    services: ['install', 'migration', 'support', 'training', 'custom'],
    website: 'https://piecyfer.com',
    email: 'info@piecyfer.com',
    logo: '/integrators/piecyfer.png',
    since: '2026-11',
  },
];

/** 🇧🇷 from 'BR': each letter maps to its regional indicator symbol. */
export const flag = (cc: string) =>
  String.fromCodePoint(...[...cc.toUpperCase()].map((c) => 0x1f1a5 + c.charCodeAt(0)));

/** +55 41 98783-8730 style is country specific; a spaced E.164 reads fine everywhere. */
export const prettyPhone = (digits: string) =>
  digits.startsWith('55') && digits.length === 13
    ? `+55 (${digits.slice(2, 4)}) ${digits.slice(4, 9)}-${digits.slice(9)}`
    : digits.startsWith('34') && digits.length === 11
      ? `+34 ${digits.slice(2, 5)} ${digits.slice(5, 8)} ${digits.slice(8)}`
      : `+${digits}`;
