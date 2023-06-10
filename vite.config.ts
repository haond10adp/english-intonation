import { defineConfig } from 'vite';
import { sveltepress } from '@sveltepress/vite';
import { defaultTheme } from '@sveltepress/theme-default';
import sidebar from './config/sidebar';

const config = defineConfig({
  server: {
    fs: {
      allow: ['./config'],
    },
  },
  plugins: [
    sveltepress({
      theme: defaultTheme({
        navbar: [
          // Add your navbar configs here
        ],
        sidebar,
        logo: '/sveltepress.svg',
      }),
      siteConfig: {
        title: 'English Intonation',
        description: 'An introduction',
      },
    }),
  ],
});

export default config;
