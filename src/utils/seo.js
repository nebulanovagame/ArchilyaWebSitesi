/**
 * SEO yardımcısı — sayfa bazında title, meta description ve canonical günceller.
 * Kullanım: useEffect içinde setPageMeta('Başlık', 'Açıklama')
 */

const SITE_URL = 'https://archilya.com';
const DEFAULT_TITLE = 'Archilya Design Studio | Profesyonel Görselleştirme ve VR Sunum';

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

export const SEO_PAGES = {
  HOME: {
    title: 'Profesyonel Görselleştirme ve VR Sunum Platformu',
    desc: 'Mimarlık ofisleri, emlak ve müteahhit projeleri için premium görselleştirme, pixel streaming, VR sunum ve 360 sanal tur ile satış sunumlarını hızlandırın.',
  },
  AI_STUDIO: {
    title: 'Mimarlık İçin Profesyonel Görselleştirme',
    desc: 'Premium render, revizyon, plan boyama ve analiz ile mimarlık projelerinizi en yüksek kalitede görselleştirin; plan boyama ve fotogerçekçi görsel üretimi.',
  },
  VR_SUNUM: {
    title: 'VR Sunum ve Pixel Streaming Çözümleri',
    desc: 'Mimari projeleri pixel streaming ile web tarayıcısında VR sunum ve 360 sanal tur olarak paylaşın; müşteri onayını hızlandırın.',
  },
  MIMARLIK_OFISLERI: {
    title: 'Mimarlık Ofisleri İçin Premium Görselleştirme',
    desc: 'Mimarlık ofisleri için premium görselleştirme, VR sunum ve pixel streaming ile tasarım sunumlarını güçlendirin; revizyonu azaltıp onayı hızlandırın.',
  },
  EMLAK_VR: {
    title: 'Emlak İçin VR Sunum ve 360 Sanal Tur',
    desc: 'Emlak projelerinde VR sunum, 360 sanal tur ve pixel streaming ile dijital satış ofisi kurun; alıcı deneyimini ve ön satışı artırın.',
  },
  EMLAK_PIXEL: {
    title: 'Emlak Pixel Streaming ile 4K Proje Sunumu',
    desc: 'Emlak projelerini pixel streaming ile webden 4K sunun; kurulum yok. Daire tipleri, VR sunum ve 360 sanal tur linkle anında açılsın.',
  },
  MUTEAHHIT: {
    title: 'Müteahhitler İçin VR Sunum ve Satış',
    desc: 'Müteahhit projelerinde VR sunum, pixel streaming ve 360 sanal tur ile lansman, yatırımcı görüşmesi ve satış ofisi deneyimini dijitalleştirin.',
  },
  VR_SUNUM_REHBER: {
    title: 'VR Sunum ile Satış Kararını Hızlandırma Rehberi',
    desc: 'Mimari VR sunum, pixel streaming ve 360 sanal tur ile mimarlık projelerinde müşteri onayını hızlandırma faydalarını öğrenin.',
  },
  AI_RENDER_REHBER: {
    title: 'Premium Render ve Revizyon Rehberi',
    desc: 'Premium render ve revizyon süreçleri ile mimarlık ofislerinde görsel üretim, plan boyama ve müşteri geri bildirimini hızlandırın.',
  },
  FRANCHISE_PARTNER: {
    title: 'Archilya Franchise ve Partnerlik Fırsatları',
    desc: 'Premium görselleştirme ve VR sunum platformu Archilya Design Studio\'nun franchise ve iş ortaklığı fırsatlarını keşfedin; kendi şehrinizde yenilikçi çözümleri temsil edin.',
  },
  EMLAK_360_REHBER: {
    title: 'Emlak 360 VR Sanal Tur Rehberi',
    desc: 'Emlakta 360 sanal tur, VR sunum ve pixel streaming ile alıcı deneyimini geliştirin; emlak ve müteahhit satış süreçlerini hızlandırın.',
  },
  TRAKYA_IS_TAKIBI: {
    title: 'Trakya & Marmara Ruhsat İş Takibi',
    desc: 'İmar durumundan iskâna; Trakya geneli (Tekirdağ, Edirne, Kırklareli), İstanbul, Çanakkale, Bursa, Balıkesir, Sakarya ve Yalova\'daki LİHKAB, TESKİ, İtfaiye ve Belediye süreçlerinizi uzman mimar kadromuzla uçtan uca yönetiyoruz. Bölgenin ruhsat süreç uzmanı.',
  },
};
