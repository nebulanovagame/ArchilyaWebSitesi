import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 5174,
  },
  preview: {
    port: 4174,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'framer-motion': ['framer-motion'],
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
});
