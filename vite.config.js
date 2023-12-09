import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
  plugins: [
    laravel({
      manifest: true,
      entry: 'resources/js/app.jsx',
      input: 'resources/js/app.jsx',
    }),
  ],

  server: {
    proxy: {
      '/': {
        target: 'http://143.198.157.55/',  // Adjust this to match your Laravel development server
        changeOrigin: true,
      },
    },
  },

  build: {
    outDir: 'public/build',
    manifest: true,
    rollupOptions: {
      output: {
        entryFileNames: '.vite/manifest.json',
      },
    },
  },
});
