# Magic by Geo — `new-geomagic`

Mobile-first marketing site for **Geo**, a close-up magician (Surrey / Greater Vancouver). Built with **Astro 6**, **Tailwind CSS 4**, and **TypeScript**. Optimized for **SEO** (meta, Open Graph, JSON-LD, sitemap) and **Netlify** (static deploy + Forms).

## Quick start

```bash
cd ~/projects/new-geomagic
npm install
npm run dev
```

- **Local:** [http://localhost:4321](http://localhost:4321)
- **Production URL (canonical):** [https://www.geomagic.ca](https://www.geomagic.ca). The apex `geomagic.ca` redirects to `www`. Canonical URL is set in [`astro.config.mjs`](astro.config.mjs) and [`src/data/site.ts`](src/data/site.ts).

## Design

The site uses a single **Cinematic** dark theme — full-bleed hero photo, restrained editorial typography, near-black surfaces, white accents. Defined in [`src/styles/global.css`](src/styles/global.css) (`--color-cin-*` variables) and applied via `theme="cinematic"` on each page.

## Deploy to Netlify

1. Push this folder to GitHub/GitLab/Bitbucket **or** drag-and-drop the `dist` output in the Netlify UI (CLI also works).
2. Build settings (already in [`netlify.toml`](netlify.toml)):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. **Forms:** the booking form posts to `/thank-you/` with `data-netlify="true"`. Submissions appear in **Netlify → Forms**. Test after first deploy (spam filters may delay the first submission).
4. **Domain:** Site → Domain settings → add `geomagic.ca` and follow DNS instructions.

## Content you should customize

| What | Where |
|------|--------|
| Business email, phone, social URLs | [`src/data/site.ts`](src/data/site.ts) |
| FAQ copy | [`src/data/faq.ts`](src/data/faq.ts) |
| Testimonial placeholders | [`src/components/Testimonials.astro`](src/components/Testimonials.astro) |
| Gallery images | [`src/components/Gallery.astro`](src/components/Gallery.astro) |
| Homepage hero photo | [`src/components/Hero.astro`](src/components/Hero.astro) (`/images/photo-8.png`) |
| Service-page hero photos | [`src/pages/weddings.astro`](src/pages/weddings.astro), [`corporate-events.astro`](src/pages/corporate-events.astro), [`private-parties.astro`](src/pages/private-parties.astro) |
| Open Graph image | [`public/social-card.svg`](public/social-card.svg) (replace with 1200×630 PNG if you prefer) |

## SEO notes

- Unique `<title>` / meta description per route in each page frontmatter.
- JSON-LD: `EntertainmentBusiness`, `Person`, optional `BreadcrumbList` + `FAQPage` (FAQ route), `Service` on service pages.
- `robots.txt` + `@astrojs/sitemap` → `sitemap-index.xml` at deploy root.
- `trailingSlash: 'always'` in Astro for consistent canonical URLs.

## Project structure (high level)

```
src/
  components/     # Nav, Footer, heroes, sections, booking form
  data/           # site.ts, faq.ts
  layouts/        # BaseLayout.astro (SEO + schema)
  pages/          # Routes
  styles/         # global.css (Tailwind + base)
public/           # robots.txt, _headers, social-card.svg, favicon
```

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Dev server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build locally |

---

Built as **new-geomagic** in `~/projects/new-geomagic`.
