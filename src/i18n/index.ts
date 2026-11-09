export const languages = { es: 'Español', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

/** Route keys shared by both languages. Each maps to its path in each language. */
export const routes = {
  home: { es: '/', en: '/en/' },
  popback: { es: '/popback/', en: '/en/popback/' },
  popbackPrivacy: { es: '/popback/privacidad/', en: '/en/popback/privacy/' },
  yoadv: { es: '/yoadv/', en: '/en/yoadv/' },
} as const;
export type RouteKey = keyof typeof routes;

export const path = (key: RouteKey, lang: Lang) => routes[key][lang];
