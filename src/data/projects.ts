import type { Lang } from '../i18n';

export type Status = 'live' | 'soon' | 'content';

export interface Project {
  id: string;
  name: string;
  tile: string; // CSS color (tile-* token)
  logo?: { src: string; width: number; height: number; kind: 'img' | 'popback' };
  status: Status;
  statusLabel: Record<Lang, string>;
  description: Record<Lang, string>;
  meta: Record<Lang, string>;
  /** External URL, or an internal route key resolved per language. */
  href: string | { route: 'popback' | 'yoadv' };
  linkLabel: string;
}

export const projects: Project[] = [
  {
    id: 'obsiva',
    name: 'Obsiva',
    tile: 'var(--tile-obsiva)',
    logo: { src: '/logos/obsiva-logo-dark.svg', width: 258, height: 48, kind: 'img' },
    status: 'live',
    statusLabel: { es: 'En vivo', en: 'Live' },
    description: {
      es: 'Informes de inspección con fotos, dictado e IA.',
      en: 'Inspection reports from photos, dictation and AI.',
    },
    meta: { es: 'iOS · Android · Web', en: 'iOS · Android · Web' },
    href: 'https://obsiva.app',
    linkLabel: 'obsiva.app ↗',
  },
  {
    id: 'ginesis',
    name: 'Ginesis',
    tile: 'var(--tile-ginesis)',
    logo: { src: '/logos/ginesis-logo-mono-white.svg', width: 200, height: 48, kind: 'img' },
    status: 'live',
    statusLabel: { es: 'En vivo', en: 'Live' },
    description: {
      es: 'Historia clínica para consultorios de ginecología y obstetricia.',
      en: 'Medical records for OB-GYN practices.',
    },
    meta: { es: 'Web · Perú', en: 'Web · Peru' },
    href: 'https://ginesis.app',
    linkLabel: 'ginesis.app ↗',
  },
  {
    id: 'popback',
    name: 'Popback',
    tile: 'var(--tile-popback)',
    logo: { src: '/logos/popback-logo.svg', width: 56, height: 56, kind: 'popback' },
    status: 'soon',
    statusLabel: { es: 'Beta dic 2026', en: 'Beta Dec 2026' },
    description: {
      es: 'Vuelve a los videos, links y capturas que guardas para después.',
      en: 'Get back to the videos, links and screenshots you save for later.',
    },
    meta: { es: 'iOS · Android', en: 'iOS · Android' },
    href: { route: 'popback' },
    linkLabel: '/popback',
  },
  {
    id: 'yoadv',
    name: 'yo.adv',
    tile: 'var(--tile-yoadv)',
    status: 'content',
    statusLabel: { es: 'Contenido', en: 'Content' },
    description: {
      es: 'Contenido cristiano en Instagram y TikTok.',
      en: 'Christian content on Instagram and TikTok.',
    },
    meta: { es: 'Instagram · TikTok', en: 'Instagram · TikTok' },
    href: { route: 'yoadv' },
    linkLabel: '/yoadv',
  },
];
