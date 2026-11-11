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
  city: string;
  /** ISO 3166-1 alpha-2. Country names are localised with Intl.DisplayNames. */
  country: string;
  /** ISO 639-1 languages the integrator works in. */
  languages: string[];
  services: Service[];
  website?: string;
  email?: string;
  /** Digits only, E.164 without the plus: used for wa.me and tel: links. */
  whatsapp?: string;
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
    country: 'BR',
    languages: ['pt'],
    services: ['install', 'migration', 'support', 'training', 'custom'],
    website: 'https://thldesenvolvimentoltda.com.br',
    email: 'thldesenvolvimentoltda@gmail.com',
    whatsapp: '5541987838730',
    logo: '/integrators/thl.png',
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
    : `+${digits}`;
