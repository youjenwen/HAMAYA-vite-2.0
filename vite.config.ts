import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteSvgr from 'vite-plugin-svgr';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteSvgr()],
  base: '/HAMAYA-vite-2.0',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@Component': path.resolve(__dirname, './src/components'),
      '@Styles': path.resolve(__dirname, './src/styles'),
      '@Stories_modules': path.resolve(__dirname, './src/stories/modules'),
      // '@Stories_components': path.resolve(__dirname, './src/stories/components'),
      '@Images': path.resolve(__dirname, './public/images')
    }
  }
});
