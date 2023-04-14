import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/HAMAYA-vite-2.0',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
      // '@/component': path.resolve(__dirname, './src/components'),
      // '@/styles': path.resolve(__dirname, './src/styles'),
      // '@/stories_modules': path.resolve(__dirname, './src/stories/modules')
    }
  }
});
