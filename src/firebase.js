import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);
let analytics = null;

function ensureAnalytics() {
  if (analytics || !firebaseConfig.measurementId) return;
  if (!window.__ARCHILYA_ANALYTICS_CONSENT__) return;
  try {
    analytics = getAnalytics(app);
  } catch {
    analytics = null;
  }
}

if (typeof window !== 'undefined') {
  window.addEventListener('analytics-consent-granted', () => {
    ensureAnalytics();
  });
}

function sanitizeAnalyticsParams(params = {}) {
  return Object.fromEntries(
    Object.entries(params)
      .filter(([, value]) => value !== undefined && value !== null && value !== '')
      .map(([key, value]) => [key, typeof value === 'boolean' ? Number(value) : value]),
  );
}

export function logAnalyticsEvent(name, params = {}) {
  if (!window.__ARCHILYA_ANALYTICS_CONSENT__) return;

  ensureAnalytics();
  if (!analytics) return;

  try {
    logEvent(analytics, name, sanitizeAnalyticsParams(params));
  } catch {
    // Analytics should never block UX flows.
  }
}

export { analytics };

export default app;
