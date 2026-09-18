/**
 * Hata izleme — Sentry SDK'sı TEMBEL (lazy) yüklenir.
 *
 * ÖNEMLİ: Bu modül Sentry'yi ilk bundle'a SOKMAZ. SDK yalnızca
 *   (a) `initErrorTracking()` çağrıldığında (tarayıcı boşta kalınca) veya
 *   (b) `captureException()` çağrıldığında
 * dinamik `import()` ile indirilir. Böylece ilk yüklemede ~50 KiB
 * kullanılmayan JavaScript indirilmez (Lighthouse "unused JavaScript").
 *
 * Hata sınırı (ErrorBoundary) Sentry'ye bağımlı değildir; `AppErrorBoundary`
 * bileşeni kullanılır. SDK hazır olduğunda hatayı oraya da iletir.
 */

const SENTRY_DSN = import.meta.env.VITE_SENTRY_DSN;

const IGNORE_ERRORS = [
  'Script error.',
  'ResizeObserver loop',
  'ERR_BLOCKED_BY_CLIENT',
];

let sentryPromise = null;
let initialized = false;

function loadSentry() {
  if (!SENTRY_DSN) return Promise.resolve(null);
  if (!sentryPromise) {
    sentryPromise = import('@sentry/react').catch(() => null);
  }
  return sentryPromise;
}

export function initErrorTracking() {
  if (initialized) return;

  loadSentry().then((Sentry) => {
    if (!Sentry || initialized) return;

    const isProd = import.meta.env.PROD;

    Sentry.init({
      dsn: SENTRY_DSN,
      environment: isProd ? 'production' : 'development',
      tracesSampleRate: isProd ? 0.1 : 0,
      ignoreErrors: IGNORE_ERRORS,
      beforeSend(event) {
        if (!window.__ARCHILYA_ANALYTICS_CONSENT__) {
          return null;
        }
        if (event.exception?.values) {
          const msg = event.exception.values[0]?.value || '';
          if (IGNORE_ERRORS.some((pattern) => msg.includes(pattern))) {
            return null;
          }
          if (/4\d{2}/.test(msg) && /fetch|network|load/i.test(msg)) {
            return null;
          }
        }
        return event;
      },
    });

    initialized = true;
  });
}

export function captureException(error, context = {}) {
  if (!error) return;

  loadSentry().then((Sentry) => {
    if (!Sentry) return;
    try {
      if (Object.keys(context).length > 0) {
        Sentry.withScope((scope) => {
          Object.entries(context).forEach(([key, value]) => {
            if (value !== undefined && value !== null && value !== '') {
              scope.setExtra(key, value);
            }
          });
          Sentry.captureException(error);
        });
        return;
      }

      Sentry.captureException(error);
    } catch {
      // Hata izleme asla UX akışını bloke etmez.
    }
  });
}
