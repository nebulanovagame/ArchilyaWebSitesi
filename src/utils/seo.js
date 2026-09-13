/**
 * SEO yardımcısı — sayfa bazında title, meta description ve canonical günceller.
 * Kullanım: useEffect içinde setPageMeta('Başlık', 'Açıklama')
 *
 * Ayrıca sayfa bazlı JSON-LD (Article vb.) eklemek/kaldırmak için
 * setPageJsonLd / clearPageJsonLd yardımcıları burada tanımlıdır.
 */

const SITE_URL = 'https://archilya.com';
const DEFAULT_TITLE = 'Archilya | Mimari Destek Platformu';

function canonicalUrlFor(pathname) {
  const path = pathname || (typeof window !== 'undefined' ? window.location.pathname : '/');
  const normalizedPath = path === '/' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}`;
  return `${SITE_URL}${normalizedPath === '/' ? '/' : normalizedPath}`;
}

function updateMetaTag(selector, content) {
  if (!content) return;
  const tag = document.querySelector(selector);
  if (tag) tag.setAttribute('content', content);
}

function updateCanonical(canonicalUrl) {
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', canonicalUrl);
}

export function setPageMeta(title, description, options = {}) {
  if (typeof document === 'undefined') return;

  const pageTitle = title ? `${title} | Archilya` : DEFAULT_TITLE;
  const canonicalUrl = options.canonicalUrl || canonicalUrlFor(options.pathname);

  document.title = pageTitle;

  updateMetaTag('meta[name="description"]', description);
  updateMetaTag('meta[name="robots"]', options.robots || 'index,follow');

  updateMetaTag('meta[property="og:title"]', pageTitle);
  updateMetaTag('meta[property="og:description"]', description);
  updateMetaTag('meta[property="og:url"]', canonicalUrl);

  updateMetaTag('meta[name="twitter:title"]', pageTitle);
  updateMetaTag('meta[name="twitter:description"]', description);

  updateCanonical(canonicalUrl);
}

/**
 * Sayfa bazlı JSON-LD ekler/günceller. Aynı id ile var olan script kaldırılır.
 * obj falsy ise yalnızca temizlik yapılır.
 */
export function setPageJsonLd(id, obj) {
  if (typeof document === 'undefined' || !id) return;
  const selector = `script[data-seo-id="${id}"]`;
  const existing = document.querySelector(selector);
  if (existing) existing.remove();
  if (!obj) return;

  const script = document.createElement('script');
  script.setAttribute('type', 'application/ld+json');
  script.setAttribute('data-seo-id', id);
  script.textContent = JSON.stringify(obj);
  document.head.appendChild(script);
}

/**
 * setPageJsonLd ile eklenen sayfa bazlı JSON-LD bloğunu kaldırır.
 * (İstemci tarafı gezinmede bir rotanın verisi diğerine sızmasın diye.)
 */
export function clearPageJsonLd(id) {
  if (typeof document === 'undefined' || !id) return;
  const existing = document.querySelector(`script[data-seo-id="${id}"]`);
  if (existing) existing.remove();
}

export const SEO_PAGES = {
  HOME: {
    title: 'Mimari Destek Platformu',
    desc: 'Mimari destek platformu Archilya; konsept tasarım, iç mekan, peyzaj, modelleme, görselleştirme ve ruhsat & uygulama hizmetleriyle projenizi ilk toplantıda karara taşır. Tasarımınıza sadık. Kararınıza hızlı.',
  },
  HIZMETLER: {
    title: 'Mimari Destek Hizmetleri',
    desc: 'Konsept tasarım, iç mekan, peyzaj, modelleme, görselleştirme ve ruhsat & uygulama — uçtan uca mimari destek hizmetleri tek platformda.',
  },
  AI_STUDIO: {
    title: 'Mimari Görselleştirme ve Revizyon',
    desc: 'Fotogerçekçi görselleştirme, revizyon ve plan renklendirme ile mimari projelerinizi hızlıca sunuma hazırlayın; tasarım kararlarını netleştirin.',
  },
  VR_SUNUM: {
    title: 'Canlı Sunum ve Pixel Streaming',
    desc: 'Mimari projelerinizi canlı sunum ve pixel streaming ile tarayıcıdan paylaşın; 360 sanal tur ve VR ile müşteri onayını hızlandırın.',
  },
  MIMARLIK_OFISLERI: {
    title: 'Mimarlık Ofisleri İçin Mimari Destek',
    desc: 'Mimarlık ofisleri için konsept tasarım, 3D modelleme, görselleştirme ve ruhsat desteğiyle üretim kapasitenizi ve sunum gücünüzü artırın.',
  },
  EMLAK_VR: {
    title: 'Emlak İçin Sanal Tur ve Canlı Sunum',
    desc: 'Emlak projelerinde 360 sanal tur, canlı sunum ve pixel streaming ile dijital satış ofisi kurun; alıcı deneyimini ve ön satışı güçlendirin.',
  },
  EMLAK_PIXEL: {
    title: 'Emlak Pixel Streaming ile 4K Sunum',
    desc: 'Emlak projelerini pixel streaming ile webden 4K sunun; kurulum yok. Daire tipleri ve 360 sanal tur linkle anında açılsın.',
  },
  MUTEAHHIT: {
    title: 'Müteahhitler İçin Proje Sunumu ve Görselleştirme',
    desc: 'Müteahhit projelerinde görselleştirme, canlı sunum ve 360 sanal tur ile lansman, yatırımcı görüşmesi ve satış ofisi deneyimini dijitalleştirin.',
  },
  VR_SUNUM_REHBER: {
    title: 'Canlı Sunum ile Satış Kararını Hızlandırma Rehberi',
    desc: 'Mimari canlı sunum, pixel streaming ve 360 sanal tur ile projelerde müşteri onayını hızlandırmanın yollarını anlatan rehber.',
  },
  AI_RENDER_REHBER: {
    title: 'Görselleştirme ve Revizyon Rehberi',
    desc: 'Mimari görselleştirme ve revizyon süreçleriyle ofislerde görsel üretimi, plan renklendirmeyi ve müşteri geri bildirimini hızlandırın.',
  },
  FRANCHISE_PARTNER: {
    title: 'Franchise ve İş Ortaklığı Fırsatları',
    desc: 'Mimari destek platformu Archilya ile franchise ve iş ortaklığı fırsatlarını keşfedin; kendi şehrinizde mimari destek hizmetlerini temsil edin.',
  },
  EMLAK_360_REHBER: {
    title: 'Emlak 360 Sanal Tur Rehberi',
    desc: 'Emlakta 360 sanal tur ve canlı sunum ile alıcı deneyimini geliştirin; emlak ve müteahhit satış süreçlerini hızlandırın.',
  },
  TRAKYA_IS_TAKIBI: {
    title: 'Trakya & Marmara Ruhsat İş Takibi',
    desc: 'İmar durumundan iskâna; Trakya geneli (Tekirdağ, Edirne, Kırklareli), İstanbul ve Çanakkale\'deki LİHKAB, TESKİ, İtfaiye ve Belediye süreçlerinizi uzman mimar kadromuzla uçtan uca yönetiyoruz. Bölgenin ruhsat süreç uzmanı.',
  },
};
