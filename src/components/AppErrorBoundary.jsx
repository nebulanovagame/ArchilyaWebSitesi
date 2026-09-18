import { Component } from 'react';
import { captureException } from '../services/errorTracking';

/**
 * Sentry'ye bağımlı olmayan yerel hata sınırı.
 *
 * `@sentry/react`'in ErrorBoundary'si ilk bundle'a Sentry SDK'sını sokuyordu;
 * bu bileşen onun yerine geçer ve hatayı (SDK hazır olduğunda) `captureException`
 * üzerinden asenkron iletir.
 */
export default class AppErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    captureException(error, {
      componentStack: info ? info.componentStack : undefined,
    });
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || null;
    }
    return this.props.children;
  }
}
