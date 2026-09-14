import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { SEO_PAGES } from './src/utils/seo.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_URL = 'https://archilya.com';

/**
 * Üretim HTML'ine CSS'i satır içi (inline) gömer → ayrı, render-blocking
 * stylesheet isteğini kaldırır (FCP/LCP iyileşir). Harici bağımlılık yoktur.
 */
function inlineCss() {
  return {
    name: 'archilya-inline-css',
    apply: 'build',
    enforce: 'post',
    generateBundle(_options, bundle) {
      const htmlKey = Object.keys(bundle).find((k) => k.endsWith('.html'));
      const cssKeys = Object.keys(bundle).filter((k) => k.endsWith('.css'));
      if (!htmlKey || !cssKeys.length) return;

      const htmlAsset = bundle[htmlKey];
      let html = htmlAsset.source;

      for (const key of cssKeys) {
        const cssAsset = bundle[key];
        const file = cssAsset.fileName;
        const escaped = file.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const linkRe = new RegExp(`<link[^>]+rel="stylesheet"[^>]+href="[^"]*${escaped}"[^>]*>`);
        if (linkRe.test(html)) {
          html = html.replace(linkRe, `<style>${cssAsset.source}</style>`);
          delete bundle[key];
        }
      }

      htmlAsset.source = html;
    },
  };
}

/**
 * Route meta verisi. `/` hariç her rota için `dist/<path>/index.html` üretilir.
 * Böylece JS çalıştırmayan crawler'lar (Bing, AI botları, sosyal önizleme)
 * doğru title/description/canonical + H1 + iç linkleri görür.
 * Nginx `try_files $uri $uri/ /index.html` bu dosyaları doğrudan servis eder.
 */
const PRERENDER_ROUTES = [
  {
    path: '/',
    title: 'Archilya | Mimari Destek Platformu',
    description: 'Mimari destek platformu Archilya: konsept tasarım, iç mekan, peyzaj, modelleme, görselleştirme ve ruhsat & uygulama. Tasarımınıza sadık, kararınıza hızlı.',
    h1: 'Projenizi yükleyin. Müşteriniz kararını ilk toplantıda versin.',
    intro: 'Mimari destek platformu Archilya; konsept tasarım, iç mekan, peyzaj, modelleme, görselleştirme ve ruhsat & uygulama süreçlerini tek ekipten sunar.',
    sections: [
      {
        heading: 'Mimari projelerde karar sürecini netleştirin',
        paragraphs: [
          'Archilya; mimarlık ofisleri, proje sahipleri, müteahhitler ve emlak profesyonelleri için konsept tasarımdan uygulama aşamasına kadar mimari destek sunar. Her aşamada tasarım kararlarını görünür, anlaşılır ve uygulanabilir hale getirmeyi hedefler.',
          '3D modelleme, fotogerçekçi görselleştirme, canlı sunum ve kontrollü revizyon akışlarıyla projenizi paydaşlarınıza daha açık anlatmanıza yardımcı olur. Böylece ilk toplantıdan itibaren ihtiyaçları netleştirebilir, geri bildirimleri aynı proje bağlamında yönetebilirsiniz.',
        ],
      },
      {
        heading: 'Tek ekipte altı mimari destek hizmeti',
        paragraphs: [
          'Konsept tasarım; kütle, plan ve tasarım kararlarını erken aşamada olgunlaştırır. İç mekan ve peyzaj tasarımı; mekanın kullanımını, malzeme kararlarını ve yapı-çevre ilişkisini birlikte ele alır.',
          'Modelleme ve görselleştirme; projenin doğru ölçekte kurulmasını, tasarımın görsel olarak anlatılmasını ve revizyonların kontrollü ilerlemesini destekler. Ruhsat ve uygulama hizmeti ise imar durumundan iskâna uzanan resmi süreçlerde proje takibini tek akışta birleştirir.',
        ],
      },
      {
        heading: 'Sunuma hazır proje deneyimi',
        paragraphs: [
          'Canlı sunum ve Pixel Streaming ile yüksek kaliteli 3D sahneleri tarayıcı üzerinden paylaşabilir; müşterinizin kurulum yapmadan projeyi incelemesini sağlayabilirsiniz. Görselleştirme, sunum ve uygulama koordinasyonunu bir arada ele almak; proje anlatımını güçlendirirken sonraki adımları daha net planlamanıza yardımcı olur.',
        ],
      },
    ],
    links: [
      { to: '/hizmetler', label: 'Mimari Destek Hizmetleri' },
      { to: '/ai-studio', label: 'Görselleştirme ve Revizyon' },
      { to: '/vr-sunum', label: 'Canlı Sunum (Pixel Streaming)' },
    ],
  },
  {
    path: '/hizmetler',
    title: `${SEO_PAGES.HIZMETLER.title} | Archilya`,
    description: SEO_PAGES.HIZMETLER.desc,
    h1: 'Mimari Destek Hizmetleri',
    intro: 'Konsept tasarım, iç mekan, peyzaj, modelleme, görselleştirme ve ruhsat & uygulama; altı hizmetle mimari sürecin tamamını tek ekipten yönetin.',
    links: [
      { to: '/ai-studio', label: 'Görselleştirme ve Revizyon' },
      { to: '/trakya-ruhsat-is-takibi', label: 'Ruhsat İş Takibi' },
      { to: '/mimarlik-ofisleri', label: 'Mimarlık Ofisleri' },
    ],
  },
  {
    path: '/ai-studio',
    title: `${SEO_PAGES.AI_STUDIO.title} | Archilya`,
    description: SEO_PAGES.AI_STUDIO.desc,
    h1: 'Görselleştirme ve Revizyon Tek Akışta',
    intro: 'Fotogerçekçi görselleştirme, kontrollü revizyon ve plan renklendirme; mimari destek hizmetlerimizin bir parçası. SketchUp, Revit veya ham görselinizi iletin.',
    links: [
      { to: '/rehber/ai-render-revizyon', label: 'Görselleştirme ve Revizyon Rehberi' },
      { to: '/hizmetler', label: 'Tüm Hizmetler' },
      { to: '/vr-sunum', label: 'Canlı Sunum (Pixel Streaming)' },
    ],
  },
  {
    path: '/vr-sunum',
    title: `${SEO_PAGES.VR_SUNUM.title} | Archilya`,
    description: SEO_PAGES.VR_SUNUM.desc,
    h1: 'Canlı Sunum ile Projenizi Paylaşın',
    intro: 'Canlı sunum (Pixel Streaming) ile yüksek kaliteli 3D sahnelerinizi doğrudan web tarayıcısına aktarın. Kurulum gerekmez; linki paylaşın, müşteriniz projede gezsin.',
    links: [
      { to: '/rehber/vr-sunum-satis', label: 'Canlı Sunum Satış Rehberi' },
      { to: '/emlak-pixel-streaming-sunum', label: 'Emlak Pixel Streaming' },
      { to: '/hizmetler', label: 'Tüm Hizmetler' },
    ],
  },
  {
    path: '/mimarlik-ofisleri',
    title: `${SEO_PAGES.MIMARLIK_OFISLERI.title} | Archilya`,
    description: SEO_PAGES.MIMARLIK_OFISLERI.desc,
    h1: 'Mimarlık Ofisleri İçin Mimari Destek',
    intro: 'Archilya; konsept tasarım, modelleme, görselleştirme ve ruhsat süreçleriyle mimarlık ofislerinin üretim akışını hızlandırır, müşteri sunumlarını güçlendirir.',
    links: [
      { to: '/hizmetler', label: 'Mimari Destek Hizmetleri' },
      { to: '/ai-studio', label: 'Görselleştirme ve Revizyon' },
      { to: '/trakya-ruhsat-is-takibi', label: 'Ruhsat İş Takibi' },
    ],
  },
  {
    path: '/emlak-vr-sunum',
    title: `${SEO_PAGES.EMLAK_VR.title} | Archilya`,
    description: SEO_PAGES.EMLAK_VR.desc,
    h1: 'Emlak Projelerinizi Dijital Satış Ofisine Dönüştürün',
    intro: 'Canlı sunum, pixel streaming ve 360 turlarla daire, villa ve ticari projelerinizi uzaktan gezilebilir deneyime dönüştürün.',
    links: [
      { to: '/rehber/emlak-360-vr', label: 'Emlak 360 Sanal Tur Rehberi' },
      { to: '/emlak-pixel-streaming-sunum', label: 'Emlak Pixel Streaming' },
      { to: '/muteahhit-proje-sunumu', label: 'Müteahhit Proje Sunumu' },
    ],
  },
  {
    path: '/emlak-pixel-streaming-sunum',
    title: `${SEO_PAGES.EMLAK_PIXEL.title} | Archilya`,
    description: SEO_PAGES.EMLAK_PIXEL.desc,
    h1: 'Emlak Sunumlarınızı Web’de 4K Yaşatın',
    intro: 'Pixel Streaming ile emlak projelerinizi web tarayıcısına taşıyın. Kurulum gerektirmez, güçlü bilgisayar şartı yoktur; linki paylaşın, müşteri 4K kalitede gezsin.',
    links: [
      { to: '/emlak-vr-sunum', label: 'Emlak VR ve Sanal Tur' },
      { to: '/rehber/emlak-360-vr', label: 'Emlak 360 Sanal Tur Rehberi' },
      { to: '/vr-sunum', label: 'Canlı Sunum Hizmeti' },
    ],
  },
  {
    path: '/muteahhit-proje-sunumu',
    title: `${SEO_PAGES.MUTEAHHIT.title} | Archilya`,
    description: SEO_PAGES.MUTEAHHIT.desc,
    h1: 'Proje Lansmanı ve Satış Dijital Sunumla Güçlensin',
    intro: 'Müteahhitler için görselleştirme, canlı sunum ile web tabanlı lansman ve 360 görüntüleme çözümleri; yatırımcı ve satış ofisi deneyimini dijitalleştirin.',
    links: [
      { to: '/emlak-vr-sunum', label: 'Emlak Dijital Satış Ofisi' },
      { to: '/hizmetler', label: 'Mimari Destek Hizmetleri' },
      { to: '/franchise-partner', label: 'Franchise ve İş Ortaklığı' },
    ],
  },
  {
    path: '/franchise-partner',
    title: `${SEO_PAGES.FRANCHISE_PARTNER.title} | Archilya`,
    description: SEO_PAGES.FRANCHISE_PARTNER.desc,
    h1: 'Archilya ile Büyüyün: Franchise / Partner Olun',
    intro: 'Archilya’nın mimari destek ekosistemini kendi şehrinizde temsil edin. Mimarlık ofisleri, emlak firmaları ve müteahhitlere yönelik çözümler.',
    links: [
      { to: '/hizmetler', label: 'Mimari Destek Hizmetleri' },
      { to: '/hakkimizda', label: 'Hakkımızda' },
      { to: '/muteahhit-proje-sunumu', label: 'Müteahhit Çözümleri' },
    ],
  },
  {
    path: '/trakya-ruhsat-is-takibi',
    title: `${SEO_PAGES.TRAKYA_IS_TAKIBI.title} | Archilya`,
    description: SEO_PAGES.TRAKYA_IS_TAKIBI.desc,
    h1: 'Belediyelerde Vakit Kaybetmeyin. Süreçleri Bize Bırakın.',
    intro: 'İmar durumundan iskâna; Trakya (Tekirdağ, Edirne, Kırklareli), İstanbul ve Çanakkale’deki LİHKAB, TESKİ, İtfaiye ve Belediye süreçlerini uzman kadromuzla yönetiyoruz.',
    links: [
      { to: '/hizmetler', label: 'Ruhsat & Uygulama Hizmeti' },
      { to: '/mimarlik-ofisleri', label: 'Mimarlık Ofisleri' },
      { to: '/', label: 'Ana Sayfa' },
    ],
  },
  {
    path: '/rehber/vr-sunum-satis',
    title: `${SEO_PAGES.VR_SUNUM_REHBER.title} | Archilya`,
    description: SEO_PAGES.VR_SUNUM_REHBER.desc,
    h1: 'Mimari Projelerde Canlı Sunum Satış Kararını Nasıl Hızlandırır?',
    intro: 'Canlı sunum, pixel streaming ve 360 deneyimlerin mimari projelerde müşteri kararını nasıl hızlandırdığını anlatan rehber.',
    links: [
      { to: '/rehber/ai-render-revizyon', label: 'Görselleştirme ve Revizyon Rehberi' },
      { to: '/rehber/emlak-360-vr', label: 'Emlak 360 Sanal Tur Rehberi' },
      { to: '/vr-sunum', label: 'Canlı Sunum Hizmeti' },
    ],
  },
  {
    path: '/rehber/ai-render-revizyon',
    title: `${SEO_PAGES.AI_RENDER_REHBER.title} | Archilya`,
    description: SEO_PAGES.AI_RENDER_REHBER.desc,
    h1: 'Görselleştirme ve Revizyon ile Revizyon Süresini Nasıl Azaltırsınız?',
    intro: 'Mimari görselleştirme ve revizyon süreçleriyle ofislerde görsel üretimi, plan renklendirmeyi ve müşteri geri bildirimini hızlandırın.',
    links: [
      { to: '/rehber/vr-sunum-satis', label: 'Canlı Sunum Satış Rehberi' },
      { to: '/rehber/emlak-360-vr', label: 'Emlak 360 Sanal Tur Rehberi' },
      { to: '/ai-studio', label: 'AI Studio Görselleştirme' },
    ],
  },
  {
    path: '/rehber/emlak-360-vr',
    title: `${SEO_PAGES.EMLAK_360_REHBER.title} | Archilya`,
    description: SEO_PAGES.EMLAK_360_REHBER.desc,
    h1: 'Emlak Projelerinde 360 ve Canlı Sunum Kullanımı',
    intro: 'Emlakta 360 sanal tur ve canlı sunum ile alıcı deneyimini geliştirin; emlak ve müteahhit satış süreçlerini hızlandırın.',
    links: [
      { to: '/rehber/vr-sunum-satis', label: 'Canlı Sunum Satış Rehberi' },
      { to: '/rehber/ai-render-revizyon', label: 'Görselleştirme ve Revizyon Rehberi' },
      { to: '/emlak-vr-sunum', label: 'Emlak VR ve Sanal Tur' },
    ],
  },
  {
    path: '/hakkimizda',
    title: 'Hakkımızda | Archilya',
    description: 'Archilya; mimarlık ofisleri, müteahhitler ve proje sahipleri için konsept tasarımdan ruhsata uçtan uca mimari destek sunan bir platformdur.',
    h1: 'Hakkımızda',
    intro: 'Archilya, mimari projelerde tasarım kararlarını hızlandırmak için konsept tasarım, modelleme, görselleştirme, canlı sunum ve ruhsat süreçlerini tek ekipte birleştirir.',
    links: [
      { to: '/hizmetler', label: 'Hizmetler' },
      { to: '/trakya-ruhsat-is-takibi', label: 'Ruhsat İş Takibi' },
      { to: '/', label: 'Ana Sayfa' },
    ],
  },
];

const LEGAL_ROUTES = [
  { path: '/gizlilik-politikasi', title: 'Gizlilik Politikası', desc: 'Archilya gizlilik politikası: kişisel verilerin toplanması, kullanımı ve korunmasına ilişkin esaslar.' },
  { path: '/kvkk', title: 'KVKK Aydınlatma Metni', desc: '6698 sayılı KVKK kapsamında Archilya aydınlatma metni ve veri sahibi hakları.' },
  { path: '/kullanim-kosullari', title: 'Kullanım Koşulları', desc: 'Archilya platformu kullanım koşulları, hesap güvenliği ve hizmet kapsamı.' },
  { path: '/iptal-iade', title: 'İptal ve İade Koşulları', desc: 'Archilya hizmetlerinde iptal, cayma hakkı ve iade koşulları.' },
  { path: '/mesafeli-satis', title: 'Mesafeli Satış Sözleşmesi', desc: 'Archilya mesafeli satış sözleşmesi; taraflar, sipariş, ödeme ve cayma hakkı.' },
  { path: '/cerez-politikasi', title: 'Çerez Politikası', desc: 'Archilya çerez politikası: kullanılan çerez türleri, amaçları ve yönetimi.' },
  { path: '/ticari-elektronik-ileti-onayi', title: 'Ticari Elektronik İleti Onayı', desc: 'Archilya ticari elektronik ileti onay beyanı ve geri çekme hakkı.' },
  { path: '/gizlilik-kosullari', title: 'Gizlilik Koşulları', desc: 'Archilya gizlilik koşulları: bilgi toplama, kullanım, veri güvenliği ve kullanıcı hakları.' },
  { path: '/mimarlik-hizmet-sozlesmesi', title: 'Mimarlık Hizmet Sözleşmesi', desc: 'Archilya mimarlık hizmet sözleşmesi: kapsam, teslimat, ödeme, fikri mülkiyet ve gizlilik.' },
];

for (const legal of LEGAL_ROUTES) {
  PRERENDER_ROUTES.push({
    path: legal.path,
    title: `${legal.title} | Archilya`,
    description: legal.desc,
    h1: legal.title,
    intro: legal.desc,
    links: [
      { to: '/', label: 'Ana Sayfa' },
      { to: '/hizmetler', label: 'Hizmetler' },
    ],
  });
}

const esc = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

function buildRouteHtml(baseHtml, route) {
  const url = `${SITE_URL}${route.path === '/' ? '/' : route.path}`;
  const fullTitle = route.title.includes('Archilya') ? route.title : `${route.title} | Archilya`;
  const t = esc(fullTitle);
  const d = esc(route.description);

  let html = baseHtml;
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${t}</title>`);
  html = html.replace(/(<meta name="description" content=")[^"]*(")/, `$1${d}$2`);
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
  html = html.replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${t}$2`);
  html = html.replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${d}$2`);
  html = html.replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`);
  html = html.replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${t}$2`);
  html = html.replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${d}$2`);

  // Hero preload yalnızca ana sayfada gerekli; alt rotalarda boşa indirme yapar.
  if (route.path !== '/') {
    html = html.replace(/\s*<link rel="preload" as="image"[^>]*>\s*/, '\n    ');
  }

  const linkItems = (route.links || [])
    .map((link) => `<li><a href="${link.to}">${esc(link.label)}</a></li>`)
    .join('');
  const contentSections = (route.sections || [])
    .map((section) => [
      '<section>',
      `<h2>${esc(section.heading)}</h2>`,
      ...section.paragraphs.map((paragraph) => `<p>${esc(paragraph)}</p>`),
      '</section>',
    ].join('\n'))
    .join('\n');
  const fallback = [
    '<main>',
    '<header>',
    `<h1>${esc(route.h1)}</h1>`,
    `<p>${esc(route.intro)}</p>`,
    '</header>',
    contentSections,
    linkItems ? `<nav aria-label="İlgili sayfalar"><ul>${linkItems}</ul></nav>` : '',
    `<p><a href="${SITE_URL}/">Archilya — Mimari Destek Platformu</a></p>`,
    '</main>',
  ].join('\n    ');

  // React açıldığında createRoot bu içeriği kendi arayüzüyle değiştirir. JavaScript
  // çalışmayan istemciler ve HTML'i ilk yanıt üzerinden değerlendiren tarayıcılar ise
  // sayfanın gerçek konu ve iç bağlantılarını anlamlı bir HTML yapısında görür.
  html = html.replace('<div id="root"></div>', `<div id="root">${fallback}</div>`);
  return html;
}

/**
 * Build sonrası her rota için `dist/<path>/index.html` üretir.
 * Tarayıcı (puppeteer) gerektirmez; deterministik ve hızlıdır.
 * JS çalıştıran istemciler için davranış değişmez (SPA nasıl olsa render eder).
 */
function prerenderRoutes() {
  return {
    name: 'archilya-prerender-routes',
    apply: 'build',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const basePath = path.join(distDir, 'index.html');
      if (!fs.existsSync(basePath)) return;

      const baseHtml = fs.readFileSync(basePath, 'utf8');
      let count = 0;

      for (const route of PRERENDER_ROUTES) {
        const routeHtml = buildRouteHtml(baseHtml, route);
        if (route.path === '/') {
          fs.writeFileSync(basePath, routeHtml, 'utf8');
        } else {
          // Düz `<path>.html` üretilir; `serve` (serve-handler) `cleanUrls: true`
          // ile `/path` isteğini `/path.html` dosyasına çözer (dosya varsa rewrite uygulanmaz).
          const rel = route.path.replace(/^\//, '');
          const target = path.join(distDir, `${rel}.html`);
          fs.mkdirSync(path.dirname(target), { recursive: true });
          fs.writeFileSync(target, routeHtml, 'utf8');
        }
        count += 1;
      }

      this.info(`prerender: ${count} rota için statik HTML üretildi`);
    },
  };
}

export default defineConfig({
  plugins: [react(), inlineCss(), prerenderRoutes()],
  base: '/',
  server: {
    port: 5174,
  },
  preview: {
    port: 4174,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'framer-motion': ['framer-motion'],
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
});
