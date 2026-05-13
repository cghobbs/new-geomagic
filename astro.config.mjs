// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const site = 'https://www.geomagic.ca';

// https://astro.build/config
export default defineConfig({
  site,
  trailingSlash: 'always',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      filter: (page) => !page.includes('/thank-you'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        const url = item.url;
        if (url === `${site}/` || url === site) {
          return { ...item, priority: 1, changefreq: 'weekly' };
        }
        if (
          url === `${site}/weddings/` ||
          url === `${site}/corporate-events/` ||
          url === `${site}/private-parties/`
        ) {
          return { ...item, priority: 0.9, changefreq: 'monthly' };
        }
        if (url === `${site}/faq/` || url === `${site}/about/`) {
          return { ...item, priority: 0.8, changefreq: 'monthly' };
        }
        return item;
      },
    }),
  ]
});