// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://OwaisUghratdar.github.io',
  base: '/portfolio', // Use your actual repo name
  vite: {
    plugins: [tailwindcss()]
  }
});