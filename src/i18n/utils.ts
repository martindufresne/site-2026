import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    if (path.startsWith('http://') || path.startsWith('https://')) {
      return path;
    }
    // Remove existing language prefix if any
    const cleanPath = path.replace(/^\/(fr|en)/, '');
    const prefix = l === defaultLang ? '' : `/${l}`;
    const result = `${prefix}${cleanPath.startsWith('/') ? '' : '/'}${cleanPath}`;
    return result === '' ? '/' : result;
  };
}
