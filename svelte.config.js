import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-vercel';

/**
 * @type {import('@sveltejs/kit').Config}
 */
const config = {
  extensions: ['.svelte', '.md'],
  preprocess: [vitePreprocess()],
  kit: {
    adapter: adapter(),
  },
};

export default config;
