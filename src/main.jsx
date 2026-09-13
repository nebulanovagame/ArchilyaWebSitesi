import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import './index.css';
import App from './App.jsx';
import { Sentry, initErrorTracking } from './services/errorTracking.js';

try {
  window.__ARCHILYA_ANALYTICS_CONSENT__ = localStorage.getItem('archilya-cookie-consent') === 'accepted';
} catch {
  window.__ARCHILYA_ANALYTICS_CONSENT__ = false;
}

// Hata izlemeyi ilk boyamayı bloklamamak için tarayıcı boşta kalınca başlat.
if ('requestIdleCallback' in window) {
  window.requestIdleCallback(() => initErrorTracking(), { timeout: 3000 });
} else {
  window.setTimeout(() => initErrorTracking(), 1200);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sentry.ErrorBoundary fallback={<div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-4 p-8"><div className="text-[#c6a87c] font-serif text-3xl tracking-[0.2em] uppercase">Archilya</div><p className="text-gray-400 text-sm">Sayfa yüklenirken bir hata oluştu. Lütfen sayfayı yenileyin.</p><button onClick={() => window.location.reload()} className="mt-2 px-6 py-2 bg-[#c6a87c] text-black text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-white transition-colors">Sayfayı Yenile</button></div>}>
      <App />
    </Sentry.ErrorBoundary>
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: '#1a1c23',
          color: '#e2e2e2',
          border: '1px solid rgba(255,255,255,0.08)',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '14px',
          borderRadius: '2px',
        },
        success: {
          iconTheme: {
            primary: '#c6a87c',
            secondary: '#1a1c23',
          },
        },
        error: {
          iconTheme: {
            primary: '#ef4444',
            secondary: '#1a1c23',
          },
        },
      }}
    />
  </StrictMode>,
);
