/**
 * SEO yardımcısı — sayfa bazında title, meta description ve canonical günceller.
 * Kullanım: useEffect içinde setPageMeta('Başlık', 'Açıklama')
 */

const SITE_URL = 'https://archilya.com';
const DEFAULT_TITLE = 'Archilya | Mimarlık Ofisleri İçin AI Render ve VR Sunum Platformu';

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
    title: 'AI Render ve VR Sunum Platformu',
    desc: 'Mimarlık ofisleri, emlak ve müteahhit projeleri için AI render, pixel streaming, VR sunum ve 360 sanal tur ile satış sunumlarını hızlandırın.',
  },
  AI_STUDIO: {
    title: 'Mimarlık İçin AI Render ve Revizyon',
    desc: 'AI render ile mimarlık ofislerinde render revizyonlarını dakikalara indirin; plan boyama, analiz ve fotogerçekçi görsel üretimini hızlandırın.',
  },
  VR_SUNUM: {
    title: 'VR Sunum ve Pixel Streaming Çözümleri',
    desc: 'Mimari projeleri pixel streaming ile web tarayıcısında VR sunum ve 360 sanal tur olarak paylaşın; müşteri onayını hızlandırın.',
  },
  MIMARLIK_OFISLERI: {
    title: 'Mimarlık Ofisleri İçin AI Render',
    desc: 'Mimarlık ofisleri için AI render, VR sunum ve pixel streaming ile tasarım sunumlarını güçlendirin; revizyonu azaltıp onayı hızlandırın.',
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
  FIYATLANDIRMA: {
    title: 'AI Render ve VR Sunum Fiyatlandırma',
    desc: 'AI işlem hakları, bulut depolama, ekip yönetimi, pixel streaming ve VR sunum planlarını karşılaştırın; mimarlık ve emlak için doğru paketi seçin.',
  },
  VR_SUNUM_REHBER: {
    title: 'VR Sunum ile Satış Kararını Hızlandırma Rehberi',
    desc: 'Mimari VR sunum, pixel streaming ve 360 sanal tur ile mimarlık projelerinde müşteri onayını hızlandırma faydalarını öğrenin.',
  },
  AI_RENDER_REHBER: {
    title: 'AI Render Revizyon Sürecini Kısaltma Rehberi',
    desc: 'AI ile render revizyonlarını dakikalara indirin; mimarlık ofislerinde görsel üretim, plan boyama ve müşteri geri bildirimini hızlandırın.',
  },
  EMLAK_360_REHBER: {
    title: 'Emlak 360 VR Sanal Tur Rehberi',
    desc: 'Emlakta 360 sanal tur, VR sunum ve pixel streaming ile alıcı deneyimini geliştirin; emlak ve müteahhit satış süreçlerini hızlandırın.',
  },
};
