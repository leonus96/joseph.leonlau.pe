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

Fill the remaining `TODO`s in `src/data/site.ts`: yo.adv handle, Popback beta link. Review the Popback privacy draft in `src/views/PopbackPrivacy.astro`.

## Where things are

- Tokens and components (`jp-*`): `src/styles/global.css` — from the "Joseph León" design system.
- Projects: `src/data/projects.ts`. Pages: `src/views/*` (one view per page, `lang` prop), thin route files in `src/pages/`.
- Portrait: `src/components/PortraitSwap.astro`. Pixel art `public/joseph-pixel.png` (124×124, no frame, transparent, pixel dissolve at the bottom; `joseph-pixel-dark.png` for dark mode; shown at ×4 / ×3 / ×2) turns into `public/joseph-photo.webp` (same framing) on hover, tap or Enter, de-pixelating in steps; fades only with reduced motion. Iterations in `design/`.
