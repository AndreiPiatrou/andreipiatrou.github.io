import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://andreipiatrou.github.io',
  base: '/',
  outDir: './docs',
  build: {
    format: 'file'
  },
  image: {
    service: { entrypoint: 'astro/assets/services/noop' }
  }
});
