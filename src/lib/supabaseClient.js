/**
 * Supabase client.
 * Environment variables: VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY
 * If not set, all queries return null (graceful fallback to static data).
 */

let _client = null;

function getClient() {
  if (_client !== null) return _client;
  if (_client === undefined) {
    _client = false; // mark as attempted
    const url = import.meta.env.VITE_SUPABASE_URL;
    const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
    if (url && anonKey) {
      // Dynamic import: only load when env vars are available
      import('@supabase/supabase-js').then(({ createClient }) => {
        _client = createClient(url, anonKey);
      }).catch(() => {
        _client = false;
      });
    }
  }
  return _client || null;
}

let _pendingPromise = null;

export async function fetchActivePartnerFirms() {
  if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
    return null;
  }

  // Use cached promise to avoid repeated initialization
  if (!_pendingPromise) {
    _pendingPromise = (async () => {
      const { createClient } = await import('@supabase/supabase-js');
      return createClient(
        import.meta.env.VITE_SUPABASE_URL,
        import.meta.env.VITE_SUPABASE_ANON_KEY,
      );
    })();
  }

  let supabase;
  try {
    supabase = await _pendingPromise;
  } catch {
    return null;
  }

  const { data, error } = await supabase
    .from('partner_firms')
    .select('*')
    .eq('is_active', true)
    .order('order_index', { ascending: true });

  if (error) {
    console.warn('Supabase fetch failed, using fallback:', error.message);
    return null;
  }

  return data.map((f) => ({
    id: f.id,
    name: f.name,
    type: f.type,
    category: f.category,
    address: f.address,
    city: f.city,
    country: f.country || 'Türkiye',
    latitude: f.latitude,
    longitude: f.longitude,
    phone: f.phone,
    email: f.email,
    website: f.website,
    socialMedia: f.social_media || {},
    logoUrl: f.logo_url,
    description: f.description,
  }));
}
