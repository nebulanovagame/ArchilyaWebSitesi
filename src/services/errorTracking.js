import * as Sentry from '@sentry/react';

const SENTRY_DSN = import.meta.env.VITE_SENTRY_DSN;
let initialized = false;

const IGNORE_ERRORS = [
  'Script error.',
  'ResizeObserver loop',
  'ERR_BLOCKED_BY_CLIENT',
];

export function initErrorTracking() {
  if (initialized || !SENTRY_DSN) return;

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
}

export function captureException(error, context = {}) {
  if (!error) return;

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
}

export { Sentry };
