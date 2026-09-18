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
 * Ana sayfa SSS seti — statik HTML'e gömülür, aynı zamanda FAQPage
 * şemasına dönüştürülür. Seo/AI crawler'ları JS çalıştırmadan görür.
 */
const HOME_FAQ = [
  {
    q: 'Archilya hangi hizmetleri sunar?',
    a: 'Konsept tasarım, iç mekan, peyzaj, 3D modelleme, mimari görselleştirme ve ruhsat & uygulama olmak üzere altı mimari destek hizmetini tek ekipten sunar.',
  },
  {
    q: 'Mimari destek hizmeti kimler için uygundur?',
    a: 'Mimarlık ofisleri, müteahhitler, emlak profesyonelleri, proje sahipleri ve kurumsal markalar için uygundur.',
  },
  {
    q: 'Mimari görselleştirmeyi ne kadar sürede teslim ediyorsunuz?',
    a: 'Süre; kapsam, revizyon sayısı ve sahne karmaşıklığına göre değişir. İlk görseller genellikle birkaç iş günü içinde hazırlanır ve kesin takvim teklif aşamasında netleştirilir.',
  },
  {
    q: 'Canlı sunum için müşterinin özel bir kurulum yapması gerekir mi?',
    a: 'Hayır. Canlı sunum (Pixel Streaming) ve 360 sanal tur tarayıcı üzerinden çalışır. Müşteri herhangi bir uygulama veya güçlü bir bilgisayar olmadan bağlantıyı açar ve projeyi inceler.',
  },
  {
    q: 'Ruhsat ve uygulama süreçlerini de yönetiyor musunuz?',
    a: 'Evet. İmar durumundan iskâna kadar ruhsat, LİHKAB, TESKİ, İtfaiye ve Belediye adımları uçtan uca takip edilir.',
  },
  {
    q: 'Revizyon süreci nasıl işliyor?',
    a: 'Geri bildirimler tek bir proje bağlamında toplanır, her revizyon kayıt altına alınır ve süreç kontrollü ilerler. Bu yaklaşım revizyon süresini ve tekrar toplantı ihtiyacını azaltır.',
  },
  {
    q: 'Fiyatlandırma nasıl belirlenir?',
    a: 'Fiyat; hizmet kapsamı, proje büyüklüğü ve teslim süresine göre projeye özel olarak belirlenir. Teklif, ihtiyaçlar netleştirildikten sonra oluşturulur.',
  },
  {
    q: 'Hangi bölgelere hizmet veriyorsunuz?',
    a: 'Hizmet Türkiye genelinde verilir. Ruhsat ve uygulama süreçlerinde Trakya (Tekirdağ, Edirne, Kırklareli), İstanbul ve Çanakkale bölgelerinde uzmanlaşmış saha deneyimi bulunur.',
  },
];

/**
 * Route meta verisi. `/` hariç her rota için `dist/<path>/index.html` üretilir.
 * Böylece JS çalıştırmayan crawler'lar (Bing, AI botları, sosyal önizleme)
 * doğru title/description/canonical + H1 + içerik + iç linkleri görür.
 * `serve` (serve-handler) `cleanUrls: true` ile `/path` isteğini `/path.html`
 * dosyasına çözer.
 */
const PRERENDER_ROUTES = [
  {
    path: '/',
    title: 'Archilya | Mimari Destek Platformu',
    description: 'Mimari destek platformu Archilya: konsept tasarım, iç mekan, peyzaj, modelleme, görselleştirme ve ruhsat & uygulama. Tasarımınıza sadık, kararınıza hızlı.',
    h1: 'Projenizi yükleyin. Müşteriniz kararını ilk toplantıda versin.',
    intro: 'Archilya, mimari projelerde karar sürecini netleştiren bir mimari destek platformudur. Konsept tasarım, iç mekan, peyzaj, 3D modelleme, mimari görselleştirme ve ruhsat & uygulama süreçlerini tek ekipten sunar.',
    sections: [
      {
        heading: 'Mimari Destek Platformu Archilya Nedir?',
        paragraphs: [
          'Archilya; mimarlık ofisleri, proje sahipleri, müteahhitler ve emlak profesyonelleri için konsept tasarımdan ruhsata uzanan uçtan uca mimari destek sunar. Amaç, tasarım kararlarını erken aşamada netleştirmek ve projeyi tüm paydaşların ortak anlayışına taşımaktır.',
          'Platform; konsept tasarım, iç mekan, peyzaj, 3D modelleme, mimari görselleştirme ve ruhsat & uygulama olmak üzere altı hizmeti tek çatı altında birleştirir. Böylece disiplinler arası kopukluk azalır, revizyon süreçleri kısalır ve proje kararları daha hızlı alınır.',
        ],
        subsections: [
          {
            heading: 'Kimler için uygundur?',
            paragraphs: [
              'Yeni proje geliştiren mimarlık ofisleri, konut ve ticari proje üreten müteahhitler, projesini satışa hazır sunmak isteyen emlak profesyonelleri ve kendi projesini baştan sona takip etmek isteyen proje sahipleri Archilya’dan yararlanır.',
            ],
          },
          {
            heading: 'Hangi sorunları çözer?',
            paragraphs: [
              'Tasarım kararlarının geç netleşmesi, müşteri onayının uzaması, revizyon döngülerinin çoğalması, ruhsat süreçlerinde zaman kaybı ve bütçe belirsizliği; Archilya’nın çözmeyi hedeflediği temel sorunlardır.',
            ],
          },
        ],
      },
      {
        heading: 'Tek Ekipte Altı Mimari Destek Hizmeti',
        paragraphs: [
          'Mimari süreç, birbirini besleyen altı adımdan oluşur. Archilya bu adımların tamamını aynı ekip ve aynı proje hafızasıyla yürütür; böylece tasarım niyeti projenin her aşamasında korunur.',
        ],
        subsections: [
          {
            heading: 'Konsept Tasarım',
            paragraphs: [
              'Kütle, plan ve tasarım kararlarını erken aşamada olgunlaştırır; projenin ilk fikrini uygulanabilir bir konsepte dönüştürür.',
            ],
          },
          {
            heading: 'İç Mekan Tasarımı',
            paragraphs: [
              'Mekan kurgusu, malzeme seçimi ve atmosfer kararlarını birlikte ele alır; iç mekanın inşa edilmeden önce deneyimlenmesini sağlar.',
            ],
          },
          {
            heading: 'Peyzaj Tasarımı',
            paragraphs: [
              'Yapı ve çevre ilişkisini kurar; açık alan, dolaşım ve dış mekan kurgusunu projenin bütünüyle uyumlu hale getirir.',
            ],
          },
          {
            heading: '3D Modelleme ve BIM',
            paragraphs: [
              'Projeyi doğru ölçekte ve koordineli biçimde modeller; disiplinler arası çakışmaları erken yakalar, uygulama öncesi hataları azaltır.',
            ],
          },
          {
            heading: 'Mimari Görselleştirme',
            paragraphs: [
              'Fotogerçekçi görseller ve yüksek 3D render kalitesiyle tasarımı net biçimde anlatır; görsel üretim standartlarını hızlı teslim için kullanır.',
            ],
          },
          {
            heading: 'Ruhsat ve Uygulama',
            paragraphs: [
              'İmar durumundan iskâna; ruhsat, LİHKAB, TESKİ, İtfaiye ve Belediye süreçlerini uçtan uca takip eder.',
            ],
          },
        ],
      },
      {
        heading: 'Mimari Tasarım Süreci: Fikirden İskâna',
        paragraphs: [
          'Archilya’da her proje, kararların kademeli olarak netleştiği beş aşamalı bir akışla ilerler. Bu akış hem tasarım kalitesini hem de teslim sürelerini öngörülebilir kılar.',
        ],
        subsections: [
          {
            heading: '1. Keşif ve Brief',
            paragraphs: [
              'İhtiyaçlar, arsa verileri, imar durumu ve bütçe çerçevesi birlikte netleştirilir; projenin başarı kriterleri baştan tanımlanır.',
            ],
          },
          {
            heading: '2. Konsept ve Kütle',
            paragraphs: [
              'Alternatif kütle ve plan şemaları üretilir; en doğru tasarım yönü karşılaştırmalı olarak seçilir.',
            ],
          },
          {
            heading: '3. Modelleme ve Görselleştirme',
            paragraphs: [
              'Seçilen konsept 3D olarak modellenir ve fotogerçekçi görsellerle sunuma hazırlanır.',
            ],
          },
          {
            heading: '4. Revizyon ve Onay',
            paragraphs: [
              'Geri bildirimler kontrollü bir revizyon akışıyla toplanır; kararlar tek bir proje bağlamında kayıt altına alınır.',
            ],
          },
          {
            heading: '5. Ruhsat ve Uygulama Takibi',
            paragraphs: [
              'Resmi süreçler yürütülür ve uygulama aşamasında tasarım niyetinin korunması gözetilir.',
            ],
          },
        ],
      },
      {
        heading: 'Canlı Sunum, Pixel Streaming ve 360 Sanal Tur',
        paragraphs: [
          'Mimari projelerde en kritik an, müşterinin karar verdiği andır. Archilya; canlı sunum, pixel streaming ve 360 sanal tur ile projeyi tarayıcı üzerinden gezilebilir hale getirir. Müşteri kurulum yapmadan, güçlü bir bilgisayara ihtiyaç duymadan projeyi deneyimler.',
          'Sunum sırasında malzeme, zemin ve aydınlatma alternatifleri anında değiştirilebilir. Maliyet ve malzeme kararları eşzamanlı izlenebildiği için bütçe yönetimi şeffaflaşır; revizyon süreçleri günler yerine dakikalara iner.',
        ],
        subsections: [
          {
            heading: 'Müşteri onayı nasıl hızlanır?',
            paragraphs: [
              'Karar, soyut çizimlerin değil gerçek mekanın üzerinden verilir. Paydaşlar aynı sahneye aynı anda bakabildiği için yorum farklılıkları ve tekrar toplantı ihtiyacı azalır.',
            ],
          },
          {
            heading: 'Mimari proje yönetimi ve bütçe yönetimi',
            paragraphs: [
              'Seçimler kayıt altına alınır, alternatifler karşılaştırılır ve maliyet etkisi anında görülür. Böylece tasarım süreci optimizasyonu ile bütçe disiplini bir arada yürütülür.',
            ],
          },
        ],
      },
      {
        heading: 'Sektöre Özel Mimari Destek Çözümleri',
        paragraphs: [
          'Archilya, farklı sektörlerin farklı ihtiyaçlarını aynı platformda karşılar. Mimarlık ofisleri için üretim kapasitesini artırır; müteahhitler için lansman ve satış sunumunu güçlendirir; emlak profesyonelleri için projeyi dijital satış ofisine dönüştürür.',
        ],
        list: [
          'Mimarlık ofisleri için konsept tasarım, 3D modelleme, görselleştirme ve ruhsat desteği.',
          'Müteahhitler için proje lansmanı, yatırımcı sunumu ve satış ofisi deneyimi.',
          'Emlak için 360 sanal tur, pixel streaming ve web tabanlı 4K sunum.',
          'Kurumsal markalar için franchise ve iş ortaklığı modeli.',
        ],
      },
      {
        heading: 'Teknik Altyapı, Çıktı Kalitesi ve Sürdürülebilirlik',
        paragraphs: [
          'Teknik çizimler, model standartları ve görsel üretim; projenin uygulanabilirliğini belirler. Archilya, BIM/CAD temelli bir altyapıyla çalışır ve her çıktıyı teslim öncesi kontrol eder.',
        ],
        subsections: [
          {
            heading: '3D render kalitesi ve teknik çizimler',
            paragraphs: [
              'Sahne kurulumu, ışık, malzeme ve kamera ayarları standart bir kalite kontrolünden geçer. Teknik çizimler ölçekli ve koordineli üretilir.',
            ],
          },
          {
            heading: 'Sürdürülebilir mimari ve malzeme kararları',
            paragraphs: [
              'Malzeme ve enerji kararları erken aşamada tartışılır; uzun ömürlü ve sürdürülebilir mimari yaklaşımları projeye dahil edilir.',
            ],
          },
          {
            heading: 'Bilgi güvenliği ve gizlilik',
            paragraphs: [
              'Proje dosyaları gizlilik esaslarına göre işlenir; müşteri verileri KVKK kapsamında korunur.',
            ],
          },
        ],
      },
      {
        heading: 'Neden Archilya? Ekip, Deneyim ve Referanslar',
        paragraphs: [
          'Archilya, mimarlık ve görselleştirme alanında uzmanlaşmış bir ekip tarafından yürütülür. Ekip; konsept tasarım, 3D modelleme, mimari görselleştirme ve ruhsat süreçlerinde saha deneyimine sahiptir.',
          'Projeler sektör ayrımı gözetilmeden belirli bir kalite eşiğinde teslim edilir. Mimarlık ofisleri, müteahhitler ve emlak profesyonelleriyle yürütülen iş birlikleri; süreçlerin şeffaflığını ve müşteri memnuniyetini önceliklendirir.',
        ],
        list: [
          'Konseptten ruhsata tek ekipten hizmet; ek koordinasyon ihtiyacını azaltır.',
          'Kontrollü revizyon akışı; her karar kayıt altında ve izlenebilir.',
          'Kurumsal iş birlikleri ve referanslarla desteklenen saha deneyimi.',
          'Trakya ve Marmara bölgesinde ruhsat süreç uzmanlığı.',
        ],
      },
    ],
    faqTitle: 'Mimari Destek Hakkında Sık Sorulan Sorular',
    faq: HOME_FAQ,
    linkGroups: [
      {
        heading: 'Mimari Destek Hizmetleri',
        links: [
          { to: '/hizmetler', label: 'Tüm Mimari Destek Hizmetleri' },
          { to: '/ai-studio', label: 'Görselleştirme ve Revizyon' },
          { to: '/vr-sunum', label: 'Canlı Sunum (Pixel Streaming)' },
          { to: '/trakya-ruhsat-is-takibi', label: 'Ruhsat İş Takibi' },
          { to: '/franchise-partner', label: 'Franchise ve İş Ortaklığı' },
          { to: '/hakkimizda', label: 'Hakkımızda' },
        ],
      },
      {
        heading: 'Sektöre Özel Çözümler',
        links: [
          { to: '/mimarlik-ofisleri', label: 'Mimarlık Ofisleri İçin Mimari Destek' },
          { to: '/emlak-vr-sunum', label: 'Emlak İçin Sanal Tur ve Canlı Sunum' },
          { to: '/emlak-pixel-streaming-sunum', label: 'Emlak Pixel Streaming ile 4K Sunum' },
          { to: '/muteahhit-proje-sunumu', label: 'Müteahhitler İçin Proje Sunumu' },
        ],
      },
      {
        heading: 'Mimari Rehberler',
        links: [
          { to: '/rehber/vr-sunum-satis', label: 'Canlı Sunum ile Satış Kararını Hızlandırma' },
          { to: '/rehber/ai-render-revizyon', label: 'Görselleştirme ve Revizyon Rehberi' },
          { to: '/rehber/emlak-360-vr', label: 'Emlak 360 Sanal Tur Rehberi' },
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
    faqTitle: 'Mimari Destek Hizmetleri Hakkında SSS',
    faq: [
      { q: 'Hizmetleri ayrı ayrı alabilir miyim?', a: 'Evet. Konsept tasarım, görselleştirme veya ruhsat desteği gibi hizmetler tek başına da alınabilir; tüm süreç de tek ekipten yürütülebilir.' },
      { q: 'Bir proje için ortalama teslim süresi nedir?', a: 'Kapsam ve revizyon sayısına göre değişir. İlk çıktılar genellikle birkaç iş günü içinde teslim edilir; kesin takvim teklif aşamasında belirlenir.' },
      { q: 'Ruhsat süreçlerinde hangi kurumlarla çalışıyorsunuz?', a: 'Belediye, LİHKAB, TESKİ ve İtfaiye gibi ilgili kurumlarla yürütülen resmi süreçler uçtan uca takip edilir.' },
    ],
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
    faqTitle: 'Görselleştirme ve Revizyon Hakkında SSS',
    faq: [
      { q: 'Hangi dosya türleriyle çalışıyorsunuz?', a: 'SketchUp, Revit, ArchiCAD gibi model dosyaları, 2D planlar ve ham görsellerle çalışılır.' },
      { q: 'Revizyon hakkım kaç adet?', a: 'Revizyon sayısı proje kapsamına göre belirlenir ve teklifte netleştirilir; süreç kontrollü revizyon akışıyla yönetilir.' },
      { q: 'Plan renklendirme hizmeti veriyor musunuz?', a: 'Evet. Kat planları ve teknik çizimler okunabilir, sunuma hazır hale getirilerek renklendirilir.' },
    ],
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
    faqTitle: 'Canlı Sunum ve Pixel Streaming Hakkında SSS',
    faq: [
      { q: 'Müşteri tarafında kurulum gerekiyor mu?', a: 'Hayır. Pixel Streaming tarayıcı üzerinden çalışır; linke tıklayan müşteri projeyi anında inceler.' },
      { q: 'Mobil cihazlardan kullanılabilir mi?', a: 'Evet. Sunum; telefon, tablet ve bilgisayar gibi farklı cihazlardan erişilebilir.' },
      { q: 'Malzeme değişikliği canlı yapılabiliyor mu?', a: 'Evet. Zemin, duvar ve mobilya alternatifleri sunum sırasında değiştirilebilir; seçimler kayıt altına alınır.' },
    ],
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
    faqTitle: 'Mimarlık Ofisleri İçin Sık Sorulan Sorular',
    faq: [
      { q: 'Ofisimizin üretim kapasitesini nasıl artırıyor?', a: 'Yoğun dönemlerde modelleme, görselleştirme ve ruhsat iş yükü devredilebilir; ofis ana tasarım kararlarına odaklanır.' },
      { q: 'Beyaz etiket (white-label) çalışıyor musunuz?', a: 'Evet. Çıktılar ofis kimliğine uyarlanabilir; süreç ofis adına yürütülebilir.' },
      { q: 'Mevcut model dosyalarımızla devam edebilir miyiz?', a: 'Evet. Mevcut BIM/CAD dosyaları üzerinden çalışılabilir; standartlara uyum gözetilir.' },
    ],
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
    faqTitle: 'Emlak Sanal Tur ve Canlı Sunum SSS',
    faq: [
      { q: '360 sanal tur nasıl paylaşılır?', a: 'Tur bağlantısı web sitesine, ilan platformuna veya doğrudan müşteriye gönderilebilir; kurulum gerekmez.' },
      { q: 'Daire tiplerini ayrı ayrı sunabilir miyim?', a: 'Evet. Farklı daire tipleri ve kat planları ayrı sahneler veya seçenekler olarak sunulabilir.' },
      { q: 'Ön satışta nasıl fayda sağlar?', a: 'Alıcı projeyi yerinde görmeden deneyimler; karar süresi kısalır ve ön satış performansı güçlenir.' },
    ],
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
    faqTitle: 'Emlak Pixel Streaming SSS',
    faq: [
      { q: 'Pixel Streaming normal 360 turdan nasıl farklı?', a: 'Pixel Streaming, yüksek kaliteli 3D sahneyi sunucudan yayınlar; görsel kalite ve etkileşim seviyesi daha yüksektir.' },
      { q: 'İnternet hızı yeterli olmalı mı?', a: 'Standart bir geniş bant bağlantısı yeterlidir; ağır cihaz gereksinimi yoktur.' },
      { q: 'Mevcut proje görsellerim kullanılabilir mi?', a: 'Evet. Mevcut görseller ve modeller Pixel Streaming sahnelerine dönüştürülebilir.' },
    ],
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
    faqTitle: 'Müteahhit Proje Sunumu SSS',
    faq: [
      { q: 'Yatırımcı sunumları için nasıl kullanılır?', a: 'Proje, yatırımcıya canlı sunum veya 360 tur ile gösterilir; kütle, plan ve malzeme kararları birlikte incelenir.' },
      { q: 'Lansman öncesi kullanılabilir mi?', a: 'Evet. İnşaat tamamlanmadan önce proje görselleştirme ve canlı sunum ile tanıtılabilir.' },
      { q: 'Satış ofisinde nasıl konumlandırılır?', a: 'Satış ofisinde tablet veya ekran üzerinden proje gezilebilir; müşteri daireleri ve malzeme seçeneklerini anında görebilir.' },
    ],
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
    faqTitle: 'Franchise ve İş Ortaklığı SSS',
    faq: [
      { q: 'Kimler partner olabilir?', a: 'Mimarlık ofisleri, görselleştirme stüdyoları, emlak firmaları ve müteahhitlik yapan kurumlar partner olabilir.' },
      { q: 'Hangi destekler sağlanıyor?', a: 'Marka, teknik altyapı, süreç eğitimi ve operasyonel destek sağlanır.' },
      { q: 'Başvuru süreci nasıl işliyor?', a: 'Web sitesindeki kurumsal başvuru formu doldurulur; ardından uygunluk değerlendirmesi için iletişime geçilir.' },
    ],
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
    faqTitle: 'Ruhsat ve İş Takibi SSS',
    faq: [
      { q: 'Hangi bölgelerde hizmet veriyorsunuz?', a: 'Trakya geneli (Tekirdağ, Edirne, Kırklareli), İstanbul ve Çanakkale bölgelerinde ruhsat ve iş takibi hizmeti verilir.' },
      { q: 'İş takibi hangi aşamaları kapsar?', a: 'İmar durumu, ruhsat başvurusu, LİHKAB, TESKİ, İtfaiye ve Belediye süreçleri ile iskân aşamasına kadar takip edilir.' },
      { q: 'Süreçler ne kadar sürer?', a: 'Süre; belediyeye, proje niteliğine ve onay akışına göre değişir. Takip edilen her adım müşteriyle şeffaf biçimde paylaşılır.' },
    ],
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

/**
 * Rota bazlı JSON-LD: BreadcrumbList + (varsa) FAQPage.
 * FAQPage `data-seo-id="faq"` taşır; böylece istemci tarafındaki
 * FaqSection bileşeni aynı kaydı bulup günceller, çift şema oluşmaz.
 */
function buildRouteJsonLd(route, url) {
  const cleanTitle = route.title.replace(/\s*\|\s*Archilya\s*$/, '');
  const crumbs = route.path === '/'
    ? [{ name: 'Ana Sayfa', item: url }]
    : [
        { name: 'Ana Sayfa', item: `${SITE_URL}/` },
        { name: cleanTitle, item: url },
      ];

  const blocks = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: crumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.item,
      })),
    },
  ];

  if (route.faq && route.faq.length) {
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: route.faq.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    });
  }

  return blocks
    .map((block) => {
      const attr = block['@type'] === 'FAQPage' ? ' data-seo-id="faq"' : ' data-seo-id="breadcrumb"';
      return `<script type="application/ld+json"${attr}>\n${JSON.stringify(block, null, 2)}\n</script>`;
    })
    .join('\n    ');
}

const renderParagraphs = (list) => (list || []).map((text) => `<p>${esc(text)}</p>`).join('\n');

const renderSections = (sections) =>
  (sections || [])
    .map((section) => {
      const parts = ['<section>', `<h2>${esc(section.heading)}</h2>`, renderParagraphs(section.paragraphs)];
      for (const sub of section.subsections || []) {
        parts.push(`<h3>${esc(sub.heading)}</h3>`, renderParagraphs(sub.paragraphs));
      }
      if (section.list && section.list.length) {
        parts.push(`<ul>${section.list.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>`);
      }
      parts.push('</section>');
      return parts.join('\n');
    })
    .join('\n');

const renderFaq = (route) => {
  if (!route.faq || !route.faq.length) return '';
  return [
    '<section id="sss">',
    `<h2>${esc(route.faqTitle || 'Sık Sorulan Sorular')}</h2>`,
    ...route.faq.map((item) => `<details><summary>${esc(item.q)}</summary><p>${esc(item.a)}</p></details>`),
    '</section>',
  ].join('\n');
};

const renderLinkList = (links) =>
  `<ul>${(links || [])
    .map((link) => `<li><a href="${link.to}" title="${esc(link.label)}">${esc(link.label)}</a></li>`)
    .join('')}</ul>`;

const renderLinkGroups = (groups) =>
  (groups || [])
    .map((group) => [
      `<nav aria-label="${esc(group.heading)}">`,
      `<h2>${esc(group.heading)}</h2>`,
      renderLinkList(group.links),
      '</nav>',
    ].join('\n'))
    .join('\n');

function buildRouteHtml(baseHtml, route) {
  const url = `${SITE_URL}${route.path === '/' ? '/' : route.path}`;
  const fullTitle = route.title.includes('Archilya') ? route.title : `${route.title} | Archilya`;
  const t = esc(fullTitle);
  const d = esc(route.description);

  let html = baseHtml;
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${t}</title>`);
  html = html.replace(/(<meta name="description" content=")[^"]*(")/, `$1${d}$2`);
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
  html = html.replace(/(<link rel="alternate" hreflang="tr" href=")[^"]*(")/, `$1${url}$2`);
  html = html.replace(/(<link rel="alternate" hreflang="x-default" href=")[^"]*(")/, `$1${url}$2`);
  html = html.replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${t}$2`);
  html = html.replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${d}$2`);
  html = html.replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`);
  html = html.replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${t}$2`);
  html = html.replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${d}$2`);

  // Hero preload yalnızca ana sayfada gerekli; alt rotalarda boşa indirme yapar.
  if (route.path !== '/') {
    html = html.replace(/\s*<link rel="preload" as="image"[^>]*>\s*/, '\n    ');
  }

  // Rota bazlı JSON-LD (BreadcrumbList + FAQPage)
  html = html.replace('<!--PRERENDER_ROUTE_JSONLD-->', buildRouteJsonLd(route, url));

  const fallback = [
    '<div class="archilya-prerender">',
    '<header>',
    `<h1>${esc(route.h1)}</h1>`,
    `<p>${esc(route.intro)}</p>`,
    '</header>',
    renderSections(route.sections),
    renderFaq(route),
    renderLinkGroups(route.linkGroups),
    route.links && route.links.length
      ? `<nav aria-label="İlgili sayfalar">\n<h2>İlgili Sayfalar</h2>\n${renderLinkList(route.links)}\n</nav>`
      : '',
    `<p><a href="/" title="Archilya — Mimari Destek Platformu ana sayfa">Archilya — Mimari Destek Platformu</a></p>`,
    '</div>',
  ]
    .filter(Boolean)
    .join('\n    ');

  // React açıldığında createRoot bu içeriği kendi arayüzüyle değiştirir. JavaScript
  // çalışmayan istemciler ve HTML'i ilk yanıt üzerinden değerlendiren tarayıcılar ise
  // sayfanın gerçek konu ve iç bağlantılarını zengin bir HTML yapısında görür.
  html = html.replace('<div id="root"></div>', `<div id="root">${fallback}</div>`);
  return html;
}

/**
 * Build sonrası her rota için `dist/<path>.html` üretir.
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
