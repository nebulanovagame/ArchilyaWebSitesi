import { fetchActivePartnerFirms } from '../lib/supabaseClient';
import { PARTNER_FIRMS as STATIC_FIRMS } from '../data/partnerData';

let cachedFirms = null;
let cacheTime = 0;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

/**
 * Fetch partner firms from Supabase, fallback to static data.
 * Results are cached for 5 minutes to avoid excessive calls.
 */
export async function getPartnerFirms() {
  // Return cache if fresh
  if (cachedFirms && Date.now() - cacheTime < CACHE_TTL) {
    return cachedFirms;
  }

  try {
    const liveData = await fetchActivePartnerFirms();
    if (liveData && liveData.length > 0) {
      cachedFirms = liveData;
      cacheTime = Date.now();
      return liveData;
    }
  } catch {
    // Silently fall through to static data
  }

  return STATIC_FIRMS;
}
