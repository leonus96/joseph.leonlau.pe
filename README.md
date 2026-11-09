# leonlau — Joseph León

Personal site (Astro 5 + Tailwind 4). Pixel-art style, ES/EN.

## Routes

| ES | EN |
| --- | --- |
| `/` | `/en/` |
| `/popback/` | `/en/popback/` |
| `/popback/privacidad/` | `/en/popback/privacy/` |
| `/yoadv/` | `/en/yoadv/` |

## Commands

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

The domain defaults to `https://joseph.leonlau.pe` (canonical, hreflang, OG, sitemap). Override with `SITE_URL` for another host:

```bash
SITE_URL=https://staging.example.com npm run build
```

## Before publishing

Fill the remaining `TODO`s in `src/data/site.ts`: yo.adv handle and videos, Popback beta link. Review the Popback privacy draft in `src/views/PopbackPrivacy.astro`.

## Where things are

- Tokens and components (`jp-*`): `src/styles/global.css` — from the "Joseph León" design system.
- Projects: `src/data/projects.ts`. Pages: `src/views/*` (one view per page, `lang` prop), thin route files in `src/pages/`.
- Photo: `public/joseph-pixel.png` (72×96, 16 colors, ×10). Source variants in `design/`.
