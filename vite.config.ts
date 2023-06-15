import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteSvgr from 'vite-plugin-svgr';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteSvgr({ include: '**/*.svg' })],
  base: '/HAMAYA-vite-2.0',
  resolve: {
    alias: {
      '@Components': path.resolve(__dirname, './src/components'),
      '@Hook': path.resolve(__dirname, './src/hook'),
      '@Interface': path.resolve(__dirname, './src/interface'),
      '@Pages': path.resolve(__dirname, './src/pages'),
      '@Redux': path.resolve(__dirname, './src/redux'),
      '@Redux_slice': path.resolve(__dirname, './src/redux/slice'),
      '@Redux_saga': path.resolve(__dirname, './src/redux/saga'),
      '@Styles': path.resolve(__dirname, './src/styles'),
      '@Stories_modules': path.resolve(__dirname, './src/stories/modules'),
      '@Stories_components': path.resolve(__dirname, './src/stories/components'),
      '@Images': path.resolve(__dirname, './src/stories/assets'),
      '@Utils': path.resolve(__dirname, './src/utils'),
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  }
});
