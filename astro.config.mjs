// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Final domain (canonical, hreflang, OG, sitemap). Override with SITE_URL if needed.
const site = process.env.SITE_URL ?? 'https://joseph.leonlau.pe';

export default defineConfig({
  site,
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({ i18n: { defaultLocale: 'es', locales: { es: 'es', en: 'en' } } }),
  ],
  vite: { plugins: [tailwindcss()] },
});
