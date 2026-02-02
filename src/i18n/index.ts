import es from './es.json';
import en from './en.json';

const translations: Record<string, any> = { es, en };

export type Lang = 'es' | 'en';

export function t(key: string, lang: Lang = 'es'): string {
  const keys = key.split('.');
  let value: any = translations[lang];
  for (const k of keys) {
    value = value?.[k];
  }
  return value ?? key;
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return 'es';
}

export function getLocalizedPath(path: string, lang: Lang): string {
  if (lang === 'en') return `/en${path}`;
  return path;
}
