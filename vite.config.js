import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
//import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  plugins: [
    laravel([
      'resources/js/app.jsx',
    ]),
  //  reactRefresh(), // Remove the array brackets around reactRefresh
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
