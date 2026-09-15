import { sites } from '@openai/sites-vite-plugin';
import tailwindcss from '@tailwindcss/postcss';
import vinext from 'vinext';
import { nitro } from 'nitro/vite';
import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  resolve: {
    alias: [{ find: /^tailwindcss$/, replacement: fileURLToPath(import.meta.resolve('tailwindcss/index.css')) }],
  },
  css: { postcss: { plugins: [tailwindcss()] } },
  plugins: [
    vinext(),
    sites(),
    nitro({ preset: 'vercel' }),
  ],
});
