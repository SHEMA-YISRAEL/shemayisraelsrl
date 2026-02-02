// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // username github or domain
  site: 'https://shemayisraelsrl.com',

  // name repo or root route
  base: '/',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});