import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
const tsconfigPaths = require('vite-tsconfig-paths').default;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/Component': path.resolve(__dirname, './src/components'),
      '@/Styles': path.resolve(__dirname, './src/styles'),
      '@/Stories_modules': path.resolve(__dirname, './src/stories/modules')
    }
  }
});
