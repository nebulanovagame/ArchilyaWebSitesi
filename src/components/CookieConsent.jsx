import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

const CONSENT_KEY = 'archilya-cookie-consent';

function hasAnalyticsConsent() {
  try {
    return localStorage.getItem(CONSENT_KEY) === 'accepted';
  } catch {
    return false;
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(() => !hasAnalyticsConsent());

  useEffect(() => {
    window.__ARCHILYA_ANALYTICS_CONSENT__ = hasAnalyticsConsent();
  }, []);

  const handleAccept = useCallback(() => {
    try {
      localStorage.setItem(CONSENT_KEY, 'accepted');
    } catch {
      // Private browsing — ignore
    }
    window.__ARCHILYA_ANALYTICS_CONSENT__ = true;
    setVisible(false);
    window.dispatchEvent(new Event('analytics-consent-granted'));
  }, []);

  const handleReject = useCallback(() => {
    try {
      localStorage.setItem(CONSENT_KEY, 'rejected');
    } catch {
      // Private browsing — ignore
    }
    window.__ARCHILYA_ANALYTICS_CONSENT__ = false;
    setVisible(false);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#c6a87c]/20 bg-[#0f1115]/95 px-6 py-4 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-gray-300 font-sans">
          Bu web sitesi, size daha iyi bir deneyim sunmak için çerezleri kullanır.
          Detaylı bilgi için{' '}
          <Link to="/cerez-politikasi" className="text-[#c6a87c] underline hover:text-white transition-colors">
            Çerez Politikamızı
          </Link>{' '}
          inceleyebilirsiniz.
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={handleAccept}
            className="rounded-sm bg-[#c6a87c] px-5 py-2 text-xs font-bold uppercase tracking-widest text-black transition-colors hover:bg-white"
          >
            Kabul Et
          </button>
          <button
            onClick={handleReject}
            className="rounded-sm border border-white/20 px-5 py-2 text-xs font-bold uppercase tracking-widest text-gray-300 transition-colors hover:border-[#c6a87c]/40 hover:text-[#c6a87c]"
          >
            Reddet
          </button>
        </div>
      </div>
    </div>
  );
}
