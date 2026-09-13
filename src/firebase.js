/**
 * Firebase Analytics — tembel (lazy) yüklenir.
 *
 * ÖNEMLİ: Bu modül Firebase SDK'sını ilk bundle'a sokmaz. SDK yalnızca
 *   (a) kullanıcı analitik çerez onayı verdiyse VE
 *   (b) ilk analitik olayı tetiklendiğinde
 * dinamik olarak yüklenir. Bu, ilk yüklemedeki JS parse/exec yükünü ciddi azaltır.
 */

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

let analyticsPromise = null;

function loadAnalytics() {
  if (analyticsPromise) return analyticsPromise;
  if (!firebaseConfig.measurementId) return Promise.resolve(null);

  analyticsPromise = Promise.all([
    import('firebase/app'),
    import('firebase/analytics'),
  ])
    .then(([appMod, analyticsMod]) => {
      try {
        const app = appMod.initializeApp(firebaseConfig);
        const analytics = analyticsMod.getAnalytics(app);
        return { analytics, logEvent: analyticsMod.logEvent };
      } catch {
        return null;
      }
    })
    .catch(() => null);

  return analyticsPromise;
}

if (typeof window !== 'undefined') {
  window.addEventListener('analytics-consent-granted', () => {
    loadAnalytics();
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
  if (typeof window === 'undefined' || !window.__ARCHILYA_ANALYTICS_CONSENT__) return;

  loadAnalytics().then((res) => {
    if (!res) return;
    try {
      res.logEvent(res.analytics, name, sanitizeAnalyticsParams(params));
    } catch {
      // Analytics should never block UX flows.
    }
  });
}

export default null;
