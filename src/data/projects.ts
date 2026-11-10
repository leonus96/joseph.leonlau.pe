import type { Lang } from '../i18n';

type Text = Record<Lang, string>;

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
  /** The project's own page on this site. */
  route: 'obsiva' | 'ginesis' | 'popback' | 'yoadv';
  linkLabel: string;
  /** Content of the generic project page (projects with their own landing view have none). */
  page?: {
    url: string;              // the product itself
    cta: Text;                // primary button
    tagline: Text;
    lead: Text;
    features: { h: Text; p: Text }[];
  };
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
    route: 'obsiva',
    linkLabel: '/obsiva',
    page: {
      url: 'https://obsiva.app',
      cta: { es: 'Ir a obsiva.app', en: 'Go to obsiva.app' },
      tagline: { es: 'Dicta en tu idioma. Entrega antes de irte.', en: 'Dictate in your language. Deliver before you leave.' },
      lead: {
        es: 'Reportes de inspección y de obra en PDF desde el celular. Tomas fotos, dictas lo que ves y la IA redacta el informe.',
        en: 'Inspection and site reports in PDF from your phone. Take photos, dictate what you see and AI writes the report.',
      },
      features: [
        { h: { es: 'Fotos y dictado', en: 'Photos and dictation' }, p: { es: 'Cada foto es una observación. La describes con tu voz.', en: 'Every photo is an observation. You describe it with your voice.' } },
        { h: { es: 'La IA redacta', en: 'AI writes it' }, p: { es: 'Título, severidad, responsable y acción recomendada. Tú revisas y firmas.', en: 'Title, severity, owner and recommended action. You review and sign.' } },
        { h: { es: 'Funciona sin señal', en: 'Works offline' }, p: { es: 'El PDF queda listo para compartir antes de irte.', en: 'The PDF is ready to share before you leave.' } },
      ],
    },
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
    route: 'ginesis',
    linkLabel: '/ginesis',
    page: {
      url: 'https://ginesis.app',
      cta: { es: 'Ir a ginesis.app', en: 'Go to ginesis.app' },
      tagline: { es: 'Todo en orden.', en: 'Everything in order.' },
      lead: {
        es: 'Historia clínica electrónica para consultorios de ginecología y obstetricia en Perú.',
        en: 'Electronic medical records for OB-GYN practices in Peru.',
      },
      features: [
        { h: { es: 'Control prenatal CLAP', en: 'CLAP prenatal care' }, p: { es: 'Edad gestacional, FPP y alertas según la Historia Clínica Perinatal.', en: 'Gestational age, due date and alerts based on the CLAP perinatal record.' } },
        { h: { es: 'Agenda y WhatsApp', en: 'Schedule and WhatsApp' }, p: { es: 'Citas del día y recordatorios con un clic.', en: "Today's appointments and one-click reminders." } },
        { h: { es: 'Partos y consultas', en: 'Births and visits' }, p: { es: 'Partograma, recién nacido y recetas con el logo del consultorio.', en: "Partograph, newborn data and prescriptions with the practice's logo." } },
      ],
    },
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
    route: 'popback',
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
    route: 'yoadv',
    linkLabel: '/yoadv',
  },
];
