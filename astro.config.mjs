import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://andreipiatrou.github.io',
  base: '/',
  image: {
    service: { entrypoint: 'astro/assets/services/noop' }
  }
});
