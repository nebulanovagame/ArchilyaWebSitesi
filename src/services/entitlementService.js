import { captureException } from './errorTracking';

/**
 * WebBackend contact form submission.
 *
 * The backend no longer hosts Firebase Functions — it is an Express API on
 * `https://api.archilya.com` exposing callables via `/call/:functionName`.
 * The handler expects `{ data: payload }` and answers with `{ data: result }`.
 */
const BACKEND_URL = (import.meta.env.VITE_BACKEND_URL || 'https://api.archilya.com').replace(/\/$/, '');

export async function submitContactFormSecure(payload) {
  try {
    const res = await fetch(`${BACKEND_URL}/call/submitContactFormSecure`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: payload }),
    });
    const json = await res.json().catch(() => null);

    if (!res.ok) {
      throw new Error(json?.error?.message || 'Iletisim formu gonderilemedi.');
    }

    return json?.data ?? { success: false };
  } catch (error) {
    captureException(error, { scope: 'site_contact_form' });
    throw error;
  }
}
