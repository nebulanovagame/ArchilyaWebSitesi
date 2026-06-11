# Archilya.com — SEO İyileştirme Planı

## Zayıflık 1: Vite SPA → Google indeksler ama SSR kadar hızlı değil

### Sorun
React SPA olduğu için içerik JavaScript çalıştıktan sonra oluşuyor. Google botu JS çalıştırabilir ama gecikmeli ve eksik indexleme riski var.

### Çözüm: Prerendering (Statik HTML ön-derleme)

**Ne yapılmalı:**
1. `vite-plugin-prerender` veya `@prerenderer/rollup-plugin` eklenmeli
2. Build sırasında tüm route'lar (`/`, `/ai-studio`, `/vr-sunum`, `/mimarlik-ofisleri`, `/emlak-vr-sunum`, `/emlak-pixel-streaming-sunum`, `/muteahhit-proje-sunumu`, `/fiyatlandirma`, `/rehber/vr-sunum-satis`, `/rehber/ai-render-revizyon`, `/rehber/emlak-360-vr`) için statik HTML oluşturulmalı
3. Google botu bu statik HTML'leri görür, JS beklemez

**Paket:** `npm install -D @prerenderer/rollup-plugin @prerenderer/renderer-puppeteer`

**vite.config.js değişikliği:**
```js
import prerender from '@prerenderer/rollup-plugin';

plugins: [
  prerender({
    routes: [
      '/', '/ai-studio', '/vr-sunum', '/mimarlik-ofisleri',
      '/emlak-vr-sunum', '/emlak-pixel-streaming-sunum',
      '/muteahhit-proje-sunumu', '/fiyatlandirma',
      '/rehber/vr-sunum-satis', '/rehber/ai-render-revizyon',
      '/rehber/emlak-360-vr'
    ],
    renderer: '@prerenderer/renderer-puppeteer'
  })
]
```

**Öncelik:** Yüksek — Google görünürlüğüne doğrudan etki eder.
**Tahmini süre:** 2-3 saat.

---

## Zayıflık 2: Bundle 605 kB — ana sayfa tüm section'ları aynı anda yüklüyor

### Sorun
Ana sayfadaki `ProductFeatures`, `Features`, `BeforeAfter`, `Portfolio`, `Workflow`, `Services`, `PricingCalculator` gibi section'ların hepsi aynı anda yükleniyor. Oysa kullanıcı scroll yapana kadar görünmeyen bölümler hemen gerekli değil.

### Çözüm: Section-level lazy loading + Vendor chunk split

**Ne yapılmalı:**

**A) Section'ları lazy load (IntersectionObserver + React.lazy)**
Ana sayfada scroll ile görünen section'ları ayrı chunk'lara böl:

```jsx
// App.jsx veya HomePage içinde
const ProductFeatures = lazy(() => import('./components/ProductFeatures'));
const Features = lazy(() => import('./components/Features'));
const BeforeAfter = lazy(() => import('./components/BeforeAfter'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Workflow = lazy(() => import('./components/Workflow'));
const Services = lazy(() => import('./components/Services'));
const PricingCalculator = lazy(() => import('./components/PricingCalculator'));
const Contact = lazy(() => import('./components/Contact'));
```

Her section'ı `Suspense` + görünürlük bazlı tetikleme ile yüklemek.

**B) Framer Motion ayrı chunk**
```js
// vite.config.js
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        'framer-motion': ['framer-motion'],
        'vendor': ['react', 'react-dom', 'react-router-dom'],
      }
    }
  }
}
```

**C) react-router-dom chunk**
Router'ı lazy import edilebilir hale getirmek.

**Öncelik:** Orta — kullanıcı deneyimini ve Lighthouse skorunu iyileştirir.
**Tahmini süre:** 2-3 saat.

---

## Zayıflık 3: Unsplash görseller — WebP/AVIF değil, alt text zayıf

### Sorun
Tüm görseller Unsplash CDN'sinden yükleniyor. Google Görsel'de sıralanmaz, sayfa hızını düşürür, alt text'ler anlamsız.

### Çözüm: Yerel WebP görseller + anlamlı alt text'ler

**Ne yapılmalı:**

**A) Unsplash → Yerel WebP dönüşümü**
1. Mevcut Unsplash görsellerini indir
2. `public/images/` klasörüne koy
3. WebP formatına çevir (squoosh CLI veya online araç)
4. Tüm `src` referanslarını `/images/ornek-ad.webp` olarak değiştir

**B) Alt text'leri düzelt**
Her `<img>` etiketine açıklayıcı, anahtar kelime içeren alt text:

| Mevcut | Hedef |
|---|---|
| `alt="Archilya Hero Background"` | `alt="Archilya AI Studio ve VR sunum platformu mimari ofis görseli"` |
| `alt="Fotorealistik VR Render"` | `alt="Archilya AI ile hazırlanmış fotorealistik mimari render örneği"` |
| `alt="Yaşayan Mekan — Canlı Tasarım Demo"` | `alt="Archilya VR ile yaşayan mekan canlı tasarım ve malzeme değişimi"` |

**C) Görsel structured data ekle**
Her büyük görsel için ImageObject schema (opsiyonel).

**Öncelik:** Yüksek — performans + görsel arama trafiği için kritik.
**Tahmini süre:** 4-5 saat (görsel işleme + kod değişikliği).

---

## Zayıflık 4: Sayfa içi başlık hiyerarşisi bozuk

### Sorun
Section başlıkları `<p>` veya `<span>` içinde. Google hiyerarşiyi doğru okuyamaz.

### Çözüm: Doğru heading hiyerarşisi

**Ne yapılmalı:**

| Component | Mevcut | Olması gereken |
|---|---|---|
| `Hero.jsx` | `<h1>` var ✅ | `<h1>` — tamam |
| `ProductFeatures.jsx` intro | `Platform Yetenekleri` → `<p>` | `<h2>Platform Yetenekleri</h2>` |
| `ProductFeatures.jsx` katman başlıkları | `AI Studio` → `<span>` | `<h2>AI Studio</h2>` (slogan `<h3>`) |
| `Features.jsx` | `Özellikler` → `<h2>` ✅ | Tamam ama `Archilya AI Studio — Üretim Motoru` → `<h3>` |
| `Services.jsx` | `Ofisiniz İçin Somut Getiri` → `<h2>` ✅ | Kart başlıkları `<h3>` veya `<h4>` |
| `PricingCalculator.jsx` | `Fiyatlandırma` → `<h2>` ✅ | Plan isimleri `<h3>` |

**Öncelik:** Düşük — Google yine de anlar ama iyi practice.
**Tahmini süre:** 1-2 saat.

---

## Zayıflık 5: Backlink ve otorite eksik

### Sorun
Yeni site, hiçbir dış kaynaktan link yok. Google güvenmiyor.

### Çözüm: Dijital PR + sektör iş birlikleri

**Yapılabilecekler (teknik değil, stratejik):**

| Aksiyon | Detay |
|---|---|
| **Mimarlık portalları** | Arkitera, Yapı-Endüstri Merkezi, Mimdap gibi sitelere basın bülteni / rehber yazısı gönder |
| **Emlak platformları** | Emlak Kulisi, Emlak Haber gibi platformlarda "Emlakta VR Sunum" makalesi |
| **LinkedIn içerikleri** | Haftada 2-3 teknik içerik paylaş, Archilya.com'a link ver |
| **Google My Business** | İşletme kaydı oluştur, web sitesi linki ekle |
| **Medium / Blogger** | Archilya blogu aç, rehber içerikleri yayınla, ana siteye link ver |
| **Sektör haber bültenleri** | Mimarlık ve gayrimenkul bültenlerine sponsorlu/ücretsiz tanıtım |

**Öncelik:** Stratejik — teknik değil, pazarlama ekibi ilgilenmeli.
**Tahmini süre:** Sürekli aksiyon.

---

## Zayıflık 6: Rehber sayfaları yeni, indexlenmesi zaman alır

### Sorun
İçerik var ama Google henüz keşfetmedi.

### Çözüm: Index hızlandırma

**Ne yapılmalı:**

1. **Google Search Console'a ekle** — site haritası gönder
2. **RSS/XML site haritası oluştur** — `vite-plugin-sitemap` ile otomatik
3. **İç linking** — Ana sayfadan rehber sayfalarına link ver
4. **Sosyal medya paylaşımı** — Her rehber sayfasını LinkedIn/Twitter'da paylaş
5. **Düzenli güncelleme** — Ayda 1 yeni rehber içeriği ekle

**vite.config.js sitemap örneği:**
```js
import sitemap from 'vite-plugin-sitemap';

plugins: [
  sitemap({
    hostname: 'https://archilya.com',
    routes: [
      '/', '/ai-studio', '/vr-sunum', '/mimarlik-ofisleri',
      '/emlak-vr-sunum', '/emlak-pixel-streaming-sunum',
      '/muteahhit-proje-sunumu', '/fiyatlandirma',
      '/rehber/vr-sunum-satis', '/rehber/ai-render-revizyon',
      '/rehber/emlak-360-vr'
    ]
  })
]
```

**Öncelik:** Yüksek — Search Console + sitemap hemen yapılmalı.
**Tahmini süre:** 1 saat.

---

## Uygulama Sırası (Önceliklendirme)

| Sıra | Aksiyon | Etki | Süre |
|------|---------|------|------|
| 1 | **Sitemap + Search Console** | Hemen index başlar | 1 saat |
| 2 | **Section-level code splitting** | Bundle küçülür, Lighthouse artar | 2-3 saat |
| 3 | **Prerendering** | Google statik HTML görür | 2-3 saat |
| 4 | **Görseller: WebP + alt text** | Görsel trafiği + hız | 4-5 saat |
| 5 | **Heading hiyerarşisi düzeltmesi** | Semantic SEO | 1-2 saat |
| 6 | **Backlink stratejisi** | Otorite | Sürekli |

---

## Kim ne yapmalı?

| Rol | Sorumluluk |
|---|---|
| **Geliştirici (ben/Sisyphus)** | 1, 2, 3, 4, 5 — teknik maddeler |
| **Pazarlama ekibi / siz** | 6 — backlink, sosyal medya, Search Console kaydı, içerik üretimi |

---

Teknik maddeleri (1-5) uygulamaya hazırım. Başlamak istediğiniz maddeyi söyleyin.
