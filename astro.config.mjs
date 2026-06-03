// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://alexoser.com',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'night-owl',
      wrap: false,
    },
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Raleway',
      cssVariable: '--font-raleway',
      fallbacks: ['Roboto', 'sans-serif'],
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/Raleway-VariableFont_wght.ttf'],
            // Variable font: declare the full weight axis range.
            weight: '100 900',
            style: 'normal',
            display: 'swap',
          },
          {
            src: ['./src/assets/fonts/Raleway-Italic-VariableFont_wght.ttf'],
            weight: '100 900',
            style: 'italic',
            display: 'swap',
          },
        ],
      },
    },
  ],
});
