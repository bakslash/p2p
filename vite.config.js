import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
  plugins: [
    laravel({
      manifest: true,
      entry: 'resources/js/app.jsx',
      input: 'resources/js/app.jsx', // Add this line with the correct entry file
    }),
  ],

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
