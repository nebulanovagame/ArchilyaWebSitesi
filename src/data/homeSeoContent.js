/**
 * Ana sayfa SEO içeriği — TEK KAYNAK.
 *
 * Bu veri hem build zamanında statik HTML fallback'ine (`vite.config.js`)
 * hem de istemci tarafında görünür React bölümüne (`HomeSeoContent.jsx`)
 * beslenir. Böylece JS çalıştırmayan crawler'ların gördüğü içerik ile
 * kullanıcının gördüğü içerik aynıdır (içerik parity) ve FAQPage
 * yapılandırılmış verisi görünür içeriği işaretler.
 */

export const HOME_SEO_SECTIONS = [
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
];

export const HOME_FAQ = [
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

export const HOME_LINK_GROUPS = [
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
];

export const HOME_SEO_FAQ_TITLE = 'Mimari Destek Hakkında Sık Sorulan Sorular';
