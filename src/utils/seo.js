/**
 * SEO yardımcısı — sayfa bazında title & meta description günceller.
 * Kullanım: useEffect içinde setPageMeta('Başlık', 'Açıklama')
 */

export function setPageMeta(title, description) {
  if (typeof document === 'undefined') return;

  document.title = title ? `${title} | Archilya` : 'Archilya | Mimarlık Ofisleri İçin AI Render ve VR Sunum Platformu';

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && description) {
    metaDesc.setAttribute('content', description);
  }

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle && title) {
    ogTitle.setAttribute('content', `${title} | Archilya`);
  }

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc && description) {
    ogDesc.setAttribute('content', description);
  }

  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle && title) {
    twitterTitle.setAttribute('content', `${title} | Archilya`);
  }

  const twitterDesc = document.querySelector('meta[name="twitter:description"]');
  if (twitterDesc && description) {
    twitterDesc.setAttribute('content', description);
  }
}

export const SEO_PAGES = {
  HOME: {
    title: 'Archilya | Mimarlık Ofisleri İçin AI Render ve VR Sunum Platformu',
    desc: 'Archilya ile CAD, SketchUp ve proje görsellerinizi AI ile premium render\'a dönüştürün. VR, Pixel Streaming ve 360 sunumlarla müşterinize projeyi yaşatın.',
  },
  AI_STUDIO: {
    title: 'AI Studio | AI Destekli Mimari Render, Revizyon ve Analiz',
    desc: 'Premium Render, kontrollü revizyon, plan boyama, tasarım analizi ve daha fazlası. Mimari üretim akışınızı AI ile hızlandırın.',
  },
  VR_SUNUM: {
    title: 'VR Sunum | Pixel Streaming ile Web Tarayıcısından 4K Sunum',
    desc: 'Pixel Streaming teknolojisiyle projelerinizi web tarayıcısına taşıyın. VR, 360 panorama ve etkileşimli sunumlarla müşteri deneyimini güçlendirin.',
  },
  MIMARLIK_OFISLERI: {
    title: 'Mimarlık Ofisleri İçin AI Render ve VR Sunum Çözümleri',
    desc: 'Mimarlık ofisleriniz için AI Studio ile render üretimi, Pixel Streaming ile web sunum ve workspace ile proje yönetimi. Revizyon süresini kısaltın, müşteri onayını hızlandırın.',
  },
  EMLAK_VR: {
    title: 'Emlak İçin VR Sunum ve Pixel Streaming Çözümleri',
    desc: 'Emlak projelerinizi VR ve Pixel Streaming ile dijital satış ofisine dönüştürün. Daire tipleri, 360 turlar ve interaktif sunumlarla satışı hızlandırın.',
  },
  EMLAK_PIXEL: {
    title: 'Emlak İçin Pixel Streaming | Web Tarayıcısından 4K Sunum',
    desc: 'Pixel Streaming ile emlak projelerinizi web üzerinden 4K kalitesinde sunun. Kurulum gerektirmez, linki paylaşın, müşteri anında projeyi gezsin.',
  },
  MUTEAHHIT: {
    title: 'Müteahhitler İçin Proje Sunum ve Lansman Çözümleri',
    desc: 'Müteahhitler için VR sunum, Pixel Streaming ve 360 görüntüleme. Proje lansmanı, yatırımcı sunumu ve satış ofisi deneyimlerini dijitalleştirin.',
  },
  FIYATLANDIRMA: {
    title: 'Fiyatlandırma | AI Studio ve VR Sunum Abonelik Planları',
    desc: 'Keşif, Solo, Pro ve Studio abonelik planları. AI işlem kredisi, bulut depolama ve ekip yönetimi seçeneklerini karşılaştırın.',
  },
};
