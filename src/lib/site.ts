import { BASE_PATH } from './basePath';

export const LOCALES = ['en', 'fr', 'zh'] as const;
export type Locale = (typeof LOCALES)[number];

export const SITE_ORIGIN = 'https://mammut001.github.io';
export const SITE_URL = `${SITE_ORIGIN}${BASE_PATH}`;

const OG_LOCALE: Record<Locale, string> = { en: 'en_US', fr: 'fr_FR', zh: 'zh_CN' };

/** Canonical + hreflang alternates for a path under each locale (e.g. '' or '/changelog'). */
export function localeAlternates(lang: Locale, subpath = '') {
  const languages: Record<string, string> = {};
  for (const l of LOCALES) languages[l === 'zh' ? 'zh-CN' : l] = `/${l}${subpath}/`;
  languages['x-default'] = `/en${subpath}/`;
  return { canonical: `/${lang}${subpath}/`, languages };
}

export function ogLocale(lang: Locale) {
  return OG_LOCALE[lang];
}
