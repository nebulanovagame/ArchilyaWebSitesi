# public/ai-ornekler — Kaynak Manifesti

Bu klasördeki görseller **ArchilyaWebPanel AI Studio**'nun gerçek üretim örneklerinden
(`ArchilyaWebPanel/public/ai-studio/ai-konsept/`) seçilmiş ve **optimize edilmiş**
WebP kopyalarıdır.

> **Önemli:** Bunlar elle alınmış birer **snapshot**'tır; otomatik senkronizasyon (auto-sync) **yoktur**.
> WebPanel'deki kaynak görseller güncellenirse bu klasör elle yeniden üretilmelidir.

## Optimizasyon

- ~1600px genişliğe küçültme (`withoutEnlargement`)
- WebP, kalite 78
- Toplam boyut < 2 MB
- Araç: bir kerelik `node` script'i (ArchilyaWebPanel `node_modules/sharp` üzerinden).
  WebSitesi'ne bağımlılık eklenmedi; WebPanel dosyaları değiştirilmedi.

## Eşleme

| Çıktı (bu klasör) | Kaynak (ArchilyaWebPanel/public/ai-studio/ai-konsept) | toolId | Hizmet |
|---|---|---|---|
| `konsept-tasarim-1.webp` | `kutle-ilham/ornek-1-sonrasi.png` | kutle-ilham | Konsept Tasarım |
| `modelleme-1.webp` | `kutle-ilham/ornek-2-sonrasi.png` | kutle-ilham | Modelleme |
| `ic-mekan-1.webp` | `interior-premium/ornek-1-sonrasi.png` | interior-premium | İç Mekan |
| `ic-mekan-2.webp` | `interior-premium/ornek-2-sonrasi.png` | interior-premium | İç Mekan |
| `peyzaj-1.webp` | `landscape-premium/ornek-1-sonrasi.png` | landscape-premium | Peyzaj |
| `peyzaj-2.webp` | `landscape-premium/ornek-2-sonrasi.png` | landscape-premium | Peyzaj |
| `gorsellestirme-1.webp` | `exterior-premium/ornek-1-sonrasi.png` | exterior-premium | Görselleştirme |
| `ruhsat-uygulama-1.webp` | `plan-color-concept/ornek-1-sonrasi.jpg` | plan-color-concept | Ruhsat & Uygulama |

Yalnızca "sonrasi" (after) görselleri seçilmiştir; before görselleri avif/webp karışık
olduğundan ve bu bölümde before+after çifti gerekmediğinden kullanılmamıştır.

Bu görseller arayüzde **"Gerçek üretim örneği"** etiketiyle gösterilir. Örnek vaka
senaryolarındaki ("Temsili Kullanım Senaryoları") işaretler bundan bağımsız olarak korunur.
