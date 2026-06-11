# Archilya.com — Kapsamlı SEO Durum Raporu ve İyileştirme Planı

**Hazırlayan:** Sisyphus AI Agent
**Tarih:** 11 Haziran 2026
**Site:** https://archilya.com
**Platform:** Vite 7 + React 19 SPA (Single Page Application)

---

## 1. Mevcut Durum Analizi

### 1.1 Yapılan Doğru Şeyler ✅

| Alan | Durum | Detay |
|------|-------|-------|
| **Temel Meta Tag'ler** | ✅ Mevcut | Title, description, keywords, robots, viewport doğru konumlandırılmış |
| **OpenGraph (OG)** | ✅ Kapsamlı | og:type, og:locale, og:site_name, og:title, og:description, og:url, og:image (1200x630) |
| **Twitter Cards** | ✅ Mevcut | summary_large_image, title, description, image |
| **Canonical URL** | ✅ Mevcut | `<link rel="canonical">` aktif |
| **Favicon & Manifest** | ✅ Mevcut | favicon.png, apple-touch-icon, site.webmanifest |
| **Google Verification** | ✅ Mevcut | google-site-verification meta tag mevcut |
| **robots.txt** | ✅ Doğru | `Allow: /` + sitemap referansı |
| **XML Sitemap** | ✅ Kapsamlı | 20 URL, priority ve changefreq değerleri atanmış |
| **Structured Data** | ✅ Zengin | Organization, SoftwareApplication, FAQPage, Service, Article schema'ları mevcut |
| **Lazy Loading** | ✅ Kullanılmış | React.lazy ile route ve section bazlı lazy loading |
| **Code Splitting** | ✅ Kullanılmış | Framer-motion ve vendor chunk'ları ayrılmış |
| **SEO Utility** | ✅ Mevcut | `setPageMeta()` fonksiyonu ile dinamik title/description güncellemesi |
| **Rehber İçerikleri** | ✅ Mevcut | 3 adet SEO odaklı rehber sayfası (/rehber/...) |
| **Landing Pages** | ✅ Mevcut | 6 adet sektöre özel landing page |
| **Analytics** | ✅ Mevcut | Firebase Analytics entegrasyonu |
| **Cloudflare** | ✅ Mevcut | Cloudflare Insights beacon yüklü |

### 1.2 Mevcut Sitemap Yapısı

```
Priority 1.0: /
Priority 0.9: /ai-studio, /vr-sunum, /fiyatlandirma
Priority 0.8: /mimarlik-ofisleri, /emlak-vr-sunum, /emlak-pixel-streaming-sunum, /muteahhit-proje-sunumu
Priority 0.7: /rehber/vr-sunum-satis, /rehber/ai-render-revizyon, /rehber/emlak-360-vr
Priority 0.6: /hakkimizda
Priority 0.4: /gizlilik-politikasi, /kvkk, /kullanim-kosullari, /iptal-iade, /mesafeli-satis
```

---

## 2. Kritik Eksiklikler ve Sorunlar 🔴

### 2.1 TEKNİK SEO — KRİTİK SORUNLAR

#### A) SPA (Single Page Application) Problemi — EN KRİTİK

**Sorun:**
React SPA olduğu için tüm sayfa içeriği JavaScript çalıştıktan sonra oluşuyor. Google botu JavaScript çalıştırabilir ancak:
- İlk crawl'da boş `<div id="root"></div>` görür
- İkinci crawl'da JS render edilmiş içeriği indeksler (gecikmeli)
- Diğer arama motorları (Bing, Yandex, DuckDuckGo) JS çalıştıramaz
- Sosyal medya botları (Facebook, LinkedIn, Twitter) JS çalıştıramaz — preview bozuk

**Etki:**
- Indexlenme gecikmesi (haftalar sürebilir)
- Eksik veya hatalı indeksleme
- Sosyal medya paylaşımlarında preview gözükmez
- Arama motorları içeriği tam olarak anlayamaz

**Çözüm:**
```
1. Prerendering / SSR implementasyonu
   - @prerenderer/rollup-plugin ile build sırasında statik HTML oluşturma
   - Veya Next.js migration (büyük değişiklik)
   - Veya prerender.io servisi kullanma

2. Eğer prerendering yapılamazsa:
   - Rendertron veya Puppeteer tabanlı dinamik rendering
   - Netlify/Vercel prerendering özelliği
```

#### B) Sitemap Eksik URL'ler

**Sorun:**
Sitemap'de olmayan ama site içinde bulunan sayfalar:
- `/cerez-politikasi` — sitemap yok ❌
- `/ticari-elektronik-ileti-onayi` — sitemap yok ❌
- `/gizlilik-kosullari` — sitemap yok ❌
- `/404` sayfası — robots noindex ile işaretlenmeli

**Çözüm:**
```xml
<!-- Eksik URL'ler eklenecek -->
<url><loc>https://archilya.com/cerez-politikasi</loc><changefreq>yearly</changefreq><priority>0.4</priority></url>
<url><loc>https://archilya.com/ticari-elektronik-ileti-onayi</loc><changefreq>yearly</changefreq><priority>0.4</priority></url>
<url><loc>https://archilya.com/gizlilik-kosullari</loc><changefreq>yearly</changefreq><priority>0.4</priority></url>
```

#### C) Sitemap Lastmod Eksik

**Sorun:**
`<lastmod>` etiketi hiçbir URL'de yok. Google, içeriğin ne zaman güncellendiğini bilemiyor.

**Çözüm:**
```xml
<url>
  <loc>https://archilya.com/</loc>
  <lastmod>2026-06-11</lastmod>
  <changefreq>weekly</changefreq>
  <priority>1.0</priority>
</url>
```

#### D) Noindex Yönetimi Eksik

**Sorun:**
Legal sayfalar ve 404 sayfası için meta robots kontrolü yetersiz.

**Çözüm:**
```javascript
// 404 sayfası için (zaten var ama tüm legal sayfalarda da olmalı)
<meta name="robots" content="noindex,follow">
```

### 2.2 PERFORMANS SORUNLARI

#### A) Bundle Boyutu

**Mevcut Durum:**
- Vendor chunk: ~200-300 KB (react, react-dom, react-router-dom)
- Framer Motion chunk: ~150-200 KB
- Ana bundle: ~400-500 KB
- Toplam: ~800-1000 KB (gzipped ~300-400 KB)

**Hedef:**
- Ana bundle < 200 KB
- Total < 500 KB (gzipped < 150 KB)
- Lighthouse Performance skoru > 90

**Çözüm:**
```javascript
// vite.config.js — daha agresif code splitting
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        'react-vendor': ['react', 'react-dom'],
        'router': ['react-router-dom'],
        'animation': ['framer-motion'],
        'icons': ['lucide-react'],
        'firebase': ['firebase'],
      }
    }
  }
}
```

#### B) Font Yükleme Optimizasyonu

**Sorun:**
Google Fonts sync olarak yükleniyor. Render blocking.

**Mevcut:**
```html
<link href="https://fonts.googleapis.com/css2?family=..." rel="stylesheet">
```

**Çözüm:**
```html
<!-- Font display swap ile -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=...&display=swap" rel="stylesheet">

<!-- Veya fontları self-host et -->
```

#### C) Preloader Blocking

**Sorun:**
`HomePage` bileşeninde `Preloader` kullanılıyor. Kullanıcı içeriği görmek için preloader'ın bitmesini bekliyor.

**Etki:**
- LCP (Largest Contentful Paint) artar
- Kullanıcı deneyimi kötüleşir
- Google hız puanı düşer

**Çözüm:**
```javascript
// Preloader'ı kaldır veya:
// 1. Daha kısa süreli yap (max 1 saniye)
// 2. İlk ziyaretçiler için göster, returning users için atla (localStorage)
// 3. Hero section'ı hemen göster, preloader overlay olarak kalabilir ama içeriği bloklama
```

### 2.3 İÇERİK SEO SORUNLARI

#### A) Heading Hiyerarşisi Bozuk

**Sorun:**
Bazı section başlıkları `<p>` veya `<span>` içinde. Google hiyerarşiyi doğru okuyamaz.

**Mevcut Hatalar:**
| Component | Mevcut | Olması Gereken |
|-----------|--------|----------------|
| ProductFeatures intro | `<p>Platform Yetenekleri</p>` | `<h2>Platform Yetenekleri</h2>` |
| ProductFeatures katman başlıkları | `<span>AI Studio</span>` | `<h2>AI Studio</h2>` |
| Landing page card başlıkları | `<h2>{item.title}</h2>` (doğru) | ✅ Tamam |
| Rehber sayfaları alt başlıklar | `<h2>` doğru kullanılmış | ✅ Tamam |

#### B) Alt Text'ler Zayıf

**Sorun:**
Görsellerin bazılarında alt text yetersiz veya anahtar kelime içermiyor.

**Örnekler:**
```
❌ "Archilya Hero Background"
✅ "Archilya AI Studio ile hazırlanmış mimari render görseli"

❌ "Fotorealistik VR Render"
✅ "AI destekli fotorealistik mimari render örneği - Archilya"

❌ "Yaşayan Mekan — Canlı Tasarım Demo"
✅ "VR ile yaşayan mekan deneyimi - malzeme değişimi ve 3D gezinti"
```

#### C) İç Linkleme Yetersiz

**Sorun:**
- Landing page'lerden rehber sayfalarına link yok
- Rehber sayfalarından diğer rehberlere link yok
- Ana sayfadan landing page'lere footer dışında link yok
- Breadcrumb navigation yok

**Çözüm:**
```
Her landing page'in sonunda:
- İlgili rehber sayfalarına link
- Diğer landing page'lere link
- Ana sayfaya dönüş linki

Her rehber sayfasında:
- İlgili landing page'e link
- Diğer rehberlere link ("Benzer Rehberler")
- Ana sayfaya dönüş linki

Breadcrumb örneği:
Ana Sayfa > Rehber > VR Sunum ile Satış Kararını Hızlandırma
```

#### D) İçerik Uzunluğu

**Sorun:**
Landing page'ler çok kısa (sadece hero section + birkaç kart). Google bunları "thin content" olarak değerlendirebilir.

**Hedef Uzunluklar:**
| Sayfa Türü | Mevcut | Hedef |
|-----------|--------|-------|
| Landing Pages | 300-500 kelime | 800-1500 kelime |
| Rehber Sayfaları | 600-800 kelime | 1500-2500 kelime |
| Ana Sayfa | 500-800 kelime | 1000-1500 kelime |

**Çözüm:**
```
Her landing page'e eklenecek:
- Detaylı özellik açıklamaları
- Kullanım senaryoları
- SSS (FAQ) bölümü
- Müşteri yorumları / Case studies
- Karşılaştırma tabloları
- CTA butonları arası daha fazla bilgilendirici içerik
```

### 2.4 GÖRSEL SEO SORUNLARI

#### A) Görseller Unsplash CDN'den Yükleniyor

**Sorun:**
- Harici CDN bağımlılığı
- Google Görsel Arama'da görseller sizin domain'inizden indekslenmez
- WebP/AVIF formatı yok
- Görseller optimize edilmemiş

**Çözüm:**
```
1. Tüm görselleri indir ve public/images/ klasörüne koy
2. WebP formatına çevir (squoosh, sharp, veya online araçlar)
3. Responsive görseller için srcset kullan
4. Lazy loading ekle (zaten var ama native lazy loading de eklenebilir)
5. Anlamlı dosya isimleri kullan:
   ❌ "photo-1234567890.jpg"
   ✅ "ai-render-mimari-proje-ornegi.webp"
```

#### B) OG Image Kontrolü

**Durum:** `https://archilya.com/og-image.jpg` mevcut.
**Kontrol Edilmesi Gereken:**
- Boyut: 1200x630 px (doğru)
- Dosya boyutu: < 200 KB
- Format: JPG veya PNG (WebP değil — sosyal medya desteği düşük)
- İçerik: Marka adı, tagline, temsilci görsel

### 2.5 STRUKTÜREL VERİ (SCHEMA) EKSİKLİKLERİ

#### A) Eksik Schema Tipleri

**Mevcut:** Organization, SoftwareApplication, FAQPage, Service, Article

**Eksik:**
- **BreadcrumbList** — Sayfa hiyerarşisi için kritik
- **WebSite** — Site içi arama için (SearchAction)
- **Product** — Fiyatlandırma planları için
- **Review / AggregateRating** — Müşteri yorumları varsa
- **HowTo** — Rehber içerikleri için (şu an Article kullanılmış)
- **VideoObject** — Eğer video içerik varsa
- **LocalBusiness** — Yerel SEO için (mevcut Organization yerine)

#### B) Article Schema Hataları

**Sorun:**
index.html'deki Article schema sadece bir rehber için (vr-sunum-satis). Diğer rehberler ve landing page'ler için yok.

**Çözüm:**
```javascript
// Her rehber sayfasına özel Article schema ekle
// Veya tüm rehberleri kapsayan bir BlogPosting schema
```

### 2.6 TEKNİK YAPI SORUNLARI

#### A) URL Yapısı

**Mevcut Durum:**
```
✅ /ai-studio (kısa, anlamlı)
✅ /vr-sunum (kısa, anlamlı)
✅ /mimarlik-ofisleri (anlamlı, anahtar kelime içeriyor)
⚠️ /emlak-pixel-streaming-sunum (biraz uzun ama kabul edilebilir)
✅ /rehber/vr-sunum-satis (kategori/alt-sayfa yapısı iyi)
```

**Genel olarak URL yapısı iyi.**

#### B) Sayfa Hızı (Tahmini)

SPA yapısı ve büyük bundle nedeniyle:
- **LCP (Largest Contentful Paint):** Tahmini 3-5 saniye (hedef: < 2.5s)
- **FID (First Input Delay):** Tahmani 100-300ms (hedef: < 100ms)
- **CLS (Cumulative Layout Shift):** Bilinmiyor (hedef: < 0.1)
- **TTFB (Time to First Byte):** Cloudflare ile iyi olmalı (< 600ms)

---

## 3. Off-Page SEO ve Otorite Sorunları

### 3.1 Backlink Profili

**Durum:** Yeni site, muhtemelen hiç backlink yok.

**Etki:** Google domain otoritesi düşük olduğu için sıralamada zorlanır.

### 3.2 Google My Business

**Durum:** Kayıt olup olmadığı bilinmiyor.
**Öneri:** Çorlu, Tekirdağ adresi var — Google My Business kaydı yapılmalı.

### 3.3 Sosyal Medya Sinyalleri

**Kontrol Edilmesi Gereken:**
- LinkedIn şirket sayfası var mı?
- Twitter/X profili var mı?
- Instagram hesabı var mı?
- YouTube kanalı var mı? (ürün tanıtım videoları için)

### 3.4 Marka Sözü (Brand Mentions)

**Sorun:**
"Archilya" markası internette hiç geçmiyor olabilir. Google markayı tanımıyor.

---

## 4. Rekabet Analizi (Tahmini)

### 4.1 Anahtar Kelime Rekabeti

| Anahtar Kelime | Rekabet | Arama Hacmi (Tahmini) |
|----------------|---------|----------------------|
| "AI render mimarlık" | Orta-Yüksek | 500-1000/ay |
| "VR sunum mimari" | Orta | 300-600/ay |
| "pixel streaming mimarlık" | Düşük | 50-100/ay |
| "SketchUp AI render" | Orta | 200-400/ay |
| "emlak VR sunum" | Orta | 400-800/ay |
| "mimarlık ofisleri yapay zeka" | Düşük | 100-200/ay |
| "müteahhit proje sunumu" | Düşük | 100-200/ay |

### 4.2 Rekabet Avantajları

- **"Pixel Streaming"** — Türkiye'de çok az rakip
- **"AI Render + VR"** kombinasyonu — Benzersiz konumlandırma
- **Sektöre özel landing page'ler** — Çoğu rakip genel sayfalar kullanıyor

---

## 5. Uygulama Planı (Önceliklendirilmiş)

### FAZ 1: KRİTİK (Hemen Yapılmalı — 1-2 Hafta)

| # | Görev | Etki | Süre | Sorumlu |
|---|-------|------|------|---------|
| 1.1 | **Prerendering implementasyonu** | 🟢🟢🟢 Çok Yüksek | 3-4 saat | Geliştirici |
| 1.2 | **Sitemap güncelleme** (eksik URL'ler + lastmod) | 🟢🟢 Yüksek | 30 dk | Geliştirici |
| 1.3 | **Google Search Console kaydı + sitemap submit** | 🟢🟢 Yüksek | 30 dk | Pazarlama |
| 1.4 | **404 ve legal sayfalara noindex ekleme** | 🟢🟢 Yüksek | 1 saat | Geliştirici |
| 1.5 | **Preloader optimizasyonu / kaldırma** | 🟢🟢 Yüksek | 1 saat | Geliştirici |
| 1.6 | **Heading hiyerarşisi düzeltme** | 🟢 Orta | 1-2 saat | Geliştirici |

### FAZ 2: PERFORMANS (2-3 Hafta)

| # | Görev | Etki | Süre | Sorumlu |
|---|-------|------|------|---------|
| 2.1 | **Görselleri WebP'ye çevirme ve optimize etme** | 🟢🟢 Yüksek | 4-5 saat | Geliştirici |
| 2.2 | **Alt text'leri güncelleme** | 🟢 Orta | 1-2 saat | Geliştirici |
| 2.3 | **Font display swap ekleme** | 🟢 Orta | 15 dk | Geliştirici |
| 2.4 | **Daha agresif code splitting** | 🟢 Orta | 1 saat | Geliştirici |
| 2.5 | **Breadcrumb navigation ekleme** | 🟢 Orta | 2-3 saat | Geliştirici |

### FAZ 3: İÇERİK (3-4 Hafta)

| # | Görev | Etki | Süre | Sorumlu |
|---|-------|------|------|---------|
| 3.1 | **Landing page'lere daha fazla içerik ekleme** | 🟢🟢 Yüksek | 4-6 saat | İçerik/Pazarlama |
| 3.2 | **Rehber sayfalarını genişletme** (1500+ kelime) | 🟢🟢 Yüksek | 6-8 saat | İçerik/Pazarlama |
| 3.3 | **İç linkleme stratejisi** | 🟢 Orta | 2-3 saat | Geliştirici |
| 3.4 | **SSS (FAQ) section ekleme** (her landing page'e) | 🟢 Orta | 2-3 saat | İçerik/Geliştirici |
| 3.5 | **Yeni rehber içerikleri üretme** (ayda 1-2 adet) | 🟢🟢 Yüksek | Sürekli | İçerik/Pazarlama |

### FAZ 4: SCHEMA ve TEKNİK (4-5 Hafta)

| # | Görev | Etki | Süre | Sorumlu |
|---|-------|------|------|---------|
| 4.1 | **BreadcrumbList schema ekleme** | 🟢 Orta | 1-2 saat | Geliştirici |
| 4.2 | **WebSite schema (SearchAction) ekleme** | 🟢 Düşük | 30 dk | Geliştirici |
| 4.3 | **Product schema (fiyatlandırma) ekleme** | 🟢 Orta | 1-2 saat | Geliştirici |
| 4.4 | **HowTo schema (rehberler için) ekleme** | 🟢 Orta | 1-2 saat | Geliştirici |
| 4.5 | **LocalBusiness schema ekleme** | 🟢 Orta | 30 dk | Geliştirici |

### FAZ 5: OFF-PAGE SEO (Sürekli)

| # | Görev | Etki | Süre | Sorumlu |
|---|-------|------|------|---------|
| 5.1 | **Google My Business kaydı** | 🟢🟢 Yüksek | 1 saat | Pazarlama |
| 5.2 | **LinkedIn şirket sayfası + düzenli paylaşım** | 🟢🟢 Yüksek | Sürekli | Pazarlama |
| 5.3 | **Mimarlık portallarında tanıtım yazıları** | 🟢🟢 Yüksek | Sürekli | Pazarlama |
| 5.4 | **Emlak platformlarında içerik paylaşımı** | 🟢 Orta | Sürekli | Pazarlama |
| 5.5 | **Medium / Blog açma** | 🟢 Orta | 2-3 saat + sürekli | Pazarlama |
| 5.6 | **Sektör haber bültenleri / sponsorluk** | 🟢 Orta | Sürekli | Pazarlama |
| 5.7 | **Backlink outreach** | 🟢🟢 Yüksek | Sürekli | Pazarlama |

---

## 6. Hedef Anahtar Kelime Stratejisi

### 6.1 Anahtar Kelime Grupları

**Grup 1: AI Render (Yüksek Dönüşüm)**
- ai render mimarlık
- ai mimari render
- sketchup ai render
- ai render revizyon
- yapay zeka mimari render
- kat planı renklendirme ai

**Grup 2: VR Sunum (Orta Dönüşüm)**
- vr mimari sunum
- pixel streaming mimarlık
- 360 sanal tur mimari
- vr sunum emlak
- web tabanlı vr sunum

**Grup 3: Sektörel Çözümler (Hedef Kitle)**
- mimarlık ofisleri için yazılım
- emlak dijital satış ofisi
- müteahhit proje sunumu
- inşaat projesi sunum aracı

### 6.2 Long-tail Anahtar Kelimeler

```
"sketchup görselini ai ile render alma"
"mimari proje için vr sunum hazırlama"
"emlak projesinde 360 sanal tur nasıl yapılır"
"pixel streaming ile web vr sunum"
"ai ile kat planı renklendirme online"
"mimarlık ofisinde render sürecini hızlandırma"
```

---

## 7. Ölçüm ve Takip

### 7.1 Kullanılması Gereken Araçlar

| Araç | Amaç | Maliyet |
|------|------|---------|
| **Google Search Console** | Index durumu, arama sorguları, hatalar | Ücretsiz |
| **Google Analytics 4** | Trafik, davranış, dönüşüm | Ücretsiz |
| **Google PageSpeed Insights** | Core Web Vitals, hız skoru | Ücretsiz |
| **Screaming Frog** | Teknik SEO taraması | Ücretsiz (500 URL) |
| **Ahrefs / SEMrush** | Backlink, anahtar kelime takibi | Ücretli |
| **GTmetrix** | Detaylı hız analizi | Ücretsiz |

### 7.2 Takip Edilecek Metrikler

**Teknik:**
- Core Web Vitals (LCP, FID, CLS)
- Lighthouse Performance skoru
- Bundle boyutu
- Sayfa yükleme süresi

**SEO:**
- Indexlenen sayfa sayısı
- Organik trafik (aylık)
- Anahtar kelime sıralamaları (top 10, top 3)
- Tıklama oranı (CTR)
- Backlink sayısı ve kalitesi

**İçerik:**
- Sayfa başına ortalama süre
- Hemen çıkma oranı (bounce rate)
- Dönüşüm oranı (demo talep, kayıt)

---

## 8. Hızlı Kazanımlar (Quick Wins)

Bu hafta içinde yapılabilecek, hemen etki gösterecek işlemler:

1. ✅ **Google Search Console'a kaydol ve sitemap submit et** (30 dk)
2. ✅ **Sitemap.xml'e lastmod ekle** (15 dk)
3. ✅ **Eksik URL'leri sitemap'e ekle** (15 dk)
4. ✅ **Font display=swap ekle** (5 dk)
5. ✅ **Heading hiyerarşisini düzelt** (1 saat)
6. ✅ **Alt text'leri güncelle** (1 saat)
7. ✅ **Preloader'ı optimize et veya kaldır** (1 saat)
8. ✅ **Google My Business kaydı yap** (1 saat)

---

## 9. Tahmini Sonuç Zaman Çizelgesi

| Zaman | Beklenen Sonuç |
|-------|----------------|
| **1 hafta sonra** | Google Search Console verileri gelmeye başlar, indexlenme hızlanır |
| **2-4 hafta sonra** | Prerendering etkisini gösterir, sayfalar daha hızlı indexlenir |
| **1-3 ay sonra** | Long-tail anahtar kelimelerde sıralama yükselişi |
| **3-6 ay sonra** | Anahtar kelimelerde top 10-20 sıralamalar |
| **6-12 ay sonra** | Otorite artışı, daha rekabetçi kelimelerde sıralama |

---

## 10. Sonuç

Archilya.com, **temel SEO altyapısını doğru kurmuş** bir site. Meta tag'ler, structured data, sitemap ve lazy loading gibi önemli öğeler mevcut.

**Ancak en kritik sorun:**

> **SPA (Single Page Application) yapısı nedeniyle Google ve diğer arama motorları içeriği tam olarak göremiyor.**

Bu sorun çözülmeden diğer tüm iyileştirmelerin etkisi sınırlı kalacaktır.

**Öncelik sırası:**
1. **Prerendering** — Teknik olarak en kritik
2. **İçerik genişletme** — SEO'nun temeli
3. **Performans optimizasyonu** — Kullanıcı deneyimi + Google sıralaması
4. **Backlink ve otorite** — Uzun vadeli sıralama için

Bu planı uygulamaya başlamak için hangi fazdan başlamak istersiniz?
