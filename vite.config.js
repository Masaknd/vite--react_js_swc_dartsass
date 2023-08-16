import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import sass from 'sass';

export default defineConfig({
  base: `./`,
  publicDir: 'public',
  server: {
    host: true,
    port: 7000,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      output: {
        entryFileNames: `assets/js/[name].js`,
        chunkFileNames: `assets/js/[name].js`,
        assetFileNames: (assetFile) => {
          if (/\.( gif|jpeg|jpg|png|svg|webp| )$/.test(assetFile.name)) {
            return `assets/images/[name].[ext]`;
          }
          if (/\.css$/.test(assetFile.name)) {
            return `assets/css/[name].[ext]`;
          }
          if (/ttf|otf|eot|woff|woff2/i.test(assetFile.name)) {
            return `assets/font/[name].[ext]`;
          }
          return 'assets/[name].[ext]';
        },
      },
    },
  },

  plugins: [
    react(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
});
