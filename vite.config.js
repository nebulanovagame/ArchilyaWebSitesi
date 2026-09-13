import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Üretim HTML'ine CSS'i satır içi (inline) gömer → ayrı, render-blocking
 * stylesheet isteğini kaldırır (FCP/LCP iyileşir). Harici bağımlılık yoktur.
 */
function inlineCss() {
  return {
    name: 'archilya-inline-css',
    apply: 'build',
    enforce: 'post',
    generateBundle(_options, bundle) {
      const htmlKey = Object.keys(bundle).find((k) => k.endsWith('.html'));
      const cssKeys = Object.keys(bundle).filter((k) => k.endsWith('.css'));
      if (!htmlKey || !cssKeys.length) return;

      const htmlAsset = bundle[htmlKey];
      let html = htmlAsset.source;

      for (const key of cssKeys) {
        const cssAsset = bundle[key];
        const file = cssAsset.fileName;
        const escaped = file.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const linkRe = new RegExp(`<link[^>]+rel="stylesheet"[^>]+href="[^"]*${escaped}"[^>]*>`);
        if (linkRe.test(html)) {
          html = html.replace(linkRe, `<style>${cssAsset.source}</style>`);
          delete bundle[key];
        }
      }

      htmlAsset.source = html;
    },
  };
}

export default defineConfig({
  plugins: [react(), inlineCss()],
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
