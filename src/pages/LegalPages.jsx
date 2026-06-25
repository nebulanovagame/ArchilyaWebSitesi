import { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { ArrowLeft, FileText } from 'lucide-react';
import { setPageMeta } from '../utils/seo';

const LEGAL_LAST_UPDATED = '11 Haziran 2026';

function LegalLayout({ title, children }) {
  useEffect(() => {
    setPageMeta(title, `Archilya ${title} sayfası.`);
  }, [title]);

  return (
    <div className="min-h-screen bg-background text-white">
      <div className="container mx-auto px-6 py-16 max-w-3xl">
        <Motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors text-xs uppercase tracking-widest mb-10">
            <ArrowLeft className="w-3.5 h-3.5" />
            Ana Sayfaya Dön
          </Link>
          <p className="text-primary text-[10px] uppercase tracking-[0.25em] mb-3">Yasal</p>
          <h1 className="font-serif text-4xl text-white italic mb-10">{title}</h1>
          <div className="prose prose-invert prose-sm max-w-none space-y-6 text-gray-400 font-sans text-sm leading-relaxed">
            {children}
          </div>
          <div className="mt-16 pt-8 border-t border-white/5 text-xs text-gray-700 font-sans">
            <p>NEBULA NOVA GAMES DIŞ TİCARET LİMİTED ŞİRKETİ</p>
            <p>Silahtar&#x131;ağa Mah. Üniversite 1. Sk. No:13/1 İç Kapı No:Z109, 59000 Çorlu / TEKİRDAĞ</p>
            <p>Tel: 0 (282) 606 06 39 | E-posta: info@nebulanovagames.com | MERSİS: 0630135919700001</p>
          </div>
        </Motion.div>
      </div>
    </div>
  );
}

export function Hakkimizda() {
  return (
    <LegalLayout title="Hakkımızda">
      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">Biz Kimiz?</h2>
        <p>
          Archilya, mimarlık ve inşaat sektörüne özel olarak geliştirilmiş bulut tabanlı bir proje yönetim ve yapay zeka entegreli tasarım platformudur. <strong>NEBULA NOVA GAMES DIŞ TİCARET LİMİTED ŞİRKETİ</strong> çatısı altında, mimari süreçleri dijitalleştirerek daha verimli ve modern hale getirmek vizyonuyla kurulmuştur.
        </p>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">Misyonumuz</h2>
        <p>
          Mimarlık ofislerinin, bağımsız mimarların ve mühendislerin karmaşık projeleri tek bir merkezden güvenle yönetmelerini sağlamak; aynı zamanda entegre yapay zeka araçları ve sanal gerçeklik (VR) çözümleri ile tasarım süreçlerinde zaman tasarrufu yaratarak yenilikçi iş modellerinin önünü açmaktır.
        </p>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">Vizyonumuz</h2>
        <p>
          Mimari tasarımda geleceğin teknolojilerini günümüze taşımak, sürdürülebilir ve verimlilik odaklı yazılımlarımızla sektörde dijital dönüşümün öncüsü ve Türkiye merkezli global bir marka olmaktır.
        </p>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">Şirket Bilgileri</h2>
        <ul className="list-none space-y-1 mt-2 text-gray-300">
          <li><strong>Unvan:</strong> NEBULA NOVA GAMES DIŞ TİCARET LİMİTED ŞİRKETİ</li>
          <li><strong>Adres:</strong> Silahtarağa Mah. Üniversite 1. Sk. No:13/1 İç Kapı No:Z109, 59000 Çorlu / TEKİRDAĞ</li>
          <li><strong>Telefon:</strong> 0 (282) 606 06 39</li>
          <li><strong>E-posta:</strong> info@nebulanovagames.com</li>
          <li><strong>MERSİS No:</strong> 0630135919700001</li>
        </ul>
      </section>
    </LegalLayout>
  );
}

export function GizlilikPolitikasi() {
  return (
    <LegalLayout title="Gizlilik Politikası">
      <p><strong className="text-gray-200">Son Güncelleme:</strong> {LEGAL_LAST_UPDATED}</p>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">1. Veri Sorumlusu</h2>
        <p>Bu Gizlilik Politikası, Archilya platformunu işleten NEBULA NOVA GAMES DIŞ TİCARET LİMİTED ŞİRKETİ ("Şirket") tarafından hazırlanmıştır. Kişisel verilerinizin işlenmesinde veri sorumlusu sıfatıyla hareket etmekteyiz.</p>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">2. Toplanan Veriler</h2>
        <p>Platformumuzu kullandığınızda aşağıdaki kişisel veriler toplanabilir:</p>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
          <li>Ad, soyad ve e-posta adresi (kayıt ve iletişim için)</li>
          <li>IP adresi ve tarayıcı bilgileri (güvenlik ve analiz için)</li>
          <li>Platform kullanım verileri (oturum bilgileri, tıklamalar)</li>
          <li>Yüklenen görseller ve proje dosyaları (hizmet sunumu için)</li>
          <li>Ödeme bilgileri (kart bilgileri Iyzico tarafından işlenir, Şirketimizde saklanmaz)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">3. Verilerin Kullanım Amaçları</h2>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
          <li>Hizmetlerin sunulması ve geliştirilmesi</li>
          <li>Kullanıcı hesabının yönetimi</li>
          <li>Ödeme işlemlerinin gerçekleştirilmesi</li>
          <li>Yasal yükümlülüklerin yerine getirilmesi</li>
          <li>Güvenlik ve dolandırıcılık önleme</li>
          <li>Rıza alınması halinde pazarlama iletişimi</li>
        </ul>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">4. Üçüncü Taraflarla Paylaşım</h2>
        <p>Kişisel verileriniz; hizmet sağlayıcılar (Supabase, Iyzico, Google Gemini, OpenAI, Cloudflare R2, Sentry), yasal zorunluluk halinde yetkili kamu kuruluşları ile paylaşılabilir. Verileriniz üçüncü taraflara ticari amaçla satılmaz veya kiralanmaz.</p>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">5. Çerezler (Cookies)</h2>
        <p>Platformumuz, oturum yönetimi ve kullanıcı deneyimini iyileştirmek için zorunlu çerezler kullanmaktadır. Tarayıcı ayarlarınızdan çerezleri yönetebilirsiniz; ancak bazı işlevler kısıtlanabilir.</p>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">6. Veri Güvenliği</h2>
        <p>Kişisel verileriniz 256-bit SSL şifrelemesi, Row-Level Security (RLS) politikaları ve sıkı erişim kontrolleri ile korunmaktadır. Veri ihlali durumunda yasal süre içinde ilgili makamlar ve kullanıcılar bilgilendirilir.</p>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">7. Haklarınız</h2>
        <p>6698 sayılı KVKK kapsamında; verilerinize erişim, düzeltme, silme, işlemeyi kısıtlama ve itiraz etme haklarına sahipsiniz. Taleplerinizi <strong className="text-gray-300">info@nebulanovagames.com</strong> adresine iletebilirsiniz.</p>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">8. İletişim</h2>
        <p>Gizlilik politikamıza ilişkin sorularınız için: <strong className="text-gray-300">info@nebulanovagames.com</strong></p>
      </section>
    </LegalLayout>
  );
}

export function KVKK() {
  return (
    <LegalLayout title="KVKK Aydınlatma Metni">
      <p><strong className="text-gray-200">Son Güncelleme:</strong> {LEGAL_LAST_UPDATED}</p>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">Veri Sorumlusu</h2>
        <p>6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca kişisel verileriniz; veri sorumlusu sıfatıyla <strong className="text-gray-300">NEBULA NOVA GAMES DIŞ TİCARET LİMİTED ŞİRKETİ</strong> tarafından aşağıda açıklanan kapsamda işlenmektedir.</p>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">İşlenen Kişisel Veriler</h2>
        <p>Kimlik (ad, soyad), iletişim (e-posta, telefon), işlem güvenliği (IP adresi, oturum bilgileri), finansal (ödeme bilgileri — Iyzico üzerinden) ve kullanım verileri (platform davranışları) işlenmektedir.</p>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">Kişisel Verilerin İşlenme Amaçları</h2>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
          <li>Sözleşmenin ifası (KVKK Madde 5/2-c)</li>
          <li>Yasal yükümlülüklerin yerine getirilmesi (KVKK Madde 5/2-ç)</li>
          <li>Meşru menfaat kapsamında güvenlik ve dolandırıcılık önleme (KVKK Madde 5/2-f)</li>
          <li>Açık rızanıza dayalı pazarlama iletişimi (KVKK Madde 5/1)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">Aktarım</h2>
        <p>Verileriniz; hizmet alınan yurt içi ve yurt dışı teknoloji sağlayıcıları (Supabase, Iyzico, Google Gemini, OpenAI, Cloudflare R2, Sentry) ile yasal zorunluluk halinde kamu kuruluşlarıyla paylaşılabilir.</p>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">KVKK Kapsamındaki Haklarınız</h2>
        <p>KVKK'nın 11. maddesi uyarınca aşağıdaki haklarınızı kullanabilirsiniz:</p>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
          <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
          <li>İşlenmişse bilgi talep etme</li>
          <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
          <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
          <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
          <li>Kanun'un 7. maddesinde öngörülen şartlar çerçevesinde silinmesini isteme</li>
          <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
          <li>Kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
        </ul>
        <p className="mt-3">Başvurularınızı <strong className="text-gray-300">info@nebulanovagames.com</strong> adresine yazılı olarak iletebilirsiniz.</p>
      </section>
    </LegalLayout>
  );
}

export function KullanimKosullari() {
  return (
    <LegalLayout title="Kullanım Koşulları">
      <p><strong className="text-gray-200">Son Güncelleme:</strong> {LEGAL_LAST_UPDATED}</p>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">1. Kabul</h2>
        <p>Archilya platformunu ("Platform") kullanarak bu Kullanım Koşulları'nı kabul etmiş sayılırsınız. Koşulları kabul etmiyorsanız platformu kullanmayınız.</p>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">2. Hizmetin Tanımı</h2>
        <p>Archilya; mimari proje yönetimi, yapay zeka destekli görsel üretim (AI Stüdyo) ve profesyonel mimarlık danışmanlığı hizmetleri sunan bir SaaS platformudur. Platform, NEBULA NOVA GAMES DIŞ TİCARET LİMİTED ŞİRKETİ tarafından işletilmektedir.</p>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">3. Hesap Sorumluluğu</h2>
        <p>Hesabınızın güvenliğinden siz sorumlusunuz. Şifrenizi kimseyle paylaşmamalı, yetkisiz erişim durumunda derhal bize bildirmelisiniz. 18 yaşın altındaysanız platform hizmetlerini kullanamazsınız.</p>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">4. AI Hizmetleri ve Çıktılar</h2>
        <p>Platform, yapay zeka tabanlı mimari görsel üretimi, analiz ve düzenleme hizmetleri sunar. AI Hizmetlerinin kullanımı şu koşullara tabidir:</p>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
          <li><strong className="text-gray-300">Çıktı Mülkiyeti:</strong> AI Hizmetleri sonucu oluşan çıktıların (render, analiz raporu, doku, video vb.) tüm fikri mülkiyet hakları size aittir.</li>
          <li><strong className="text-gray-300">Girdi Sorumluluğu:</strong> Yüklediğiniz görsellerin size ait olduğunu veya kullanım hakkına sahip olduğunuzu taahhüt edersiniz.</li>
          <li><strong className="text-gray-300">Yasaklı İçerik:</strong> Yasa dışı, müstehcen, nefret söylemi içeren veya üçüncü kişilerin haklarını ihlal eden görsellerin yüklenmesi ve işlenmesi yasaktır.</li>
          <li><strong className="text-gray-300">AI Sınırlamaları:</strong> AI çıktıları olasılıksal modeller tarafından üretilir. Çıktıların mimari doğruluğu veya yapısal uygunluğu garanti edilmez.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">5. Kredi ve Ödeme</h2>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
          <li>Satın alınan işlem hakları, aktif plan modeline göre bireysel hesaba veya workspace havuzuna tanımlanır; bu haklar kullanıcılar arasında keyfi olarak devredilemez.</li>
          <li>Kullanılmış işlem haklarının iadesi yapılmaz; hiç kullanılmamış işlem hakları ve paketlerde iade değerlendirmesi ilgili iade politikasına göre yapılır.</li>
          <li>Plan ve kota ödemeleri satın alma akışında gösterilen bedel üzerinden tahsil edilir; aktifleşme ödeme doğrulamasından sonra hesabınıza tanımlanır.</li>
          <li>Fiyatlar KDV hariç TL cinsinden belirtilmiştir. KDV oranı %20 olarak uygulanır ve fatura kesilirken ayrıca tahsil edilir.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">6. Kabul Edilemez Kullanım</h2>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
          <li>Platformun güvenliğini tehdit eden eylemler</li>
          <li>Telif hakkı ihlali oluşturacak içerik yüklemek</li>
          <li>Spam, kötü amaçlı yazılım veya yanıltıcı içerik yaymak</li>
          <li>Platformun kaynaklarını aşırı ve haksız şekilde tüketmek</li>
        </ul>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">7. Fikri Mülkiyet</h2>
        <p>Platform üzerinde ürettiğiniz görseller size aittir. Platformun tasarımı, kodu ve marka unsurları NEBULA NOVA GAMES DIŞ TİCARET LİMİTED ŞİRKETİ'ne aittir; izinsiz kopyalanamaz veya dağıtılamaz.</p>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">8. Sorumluluğun Sınırlandırılması</h2>
        <p>Platform "olduğu gibi" sunulmaktadır. Hizmet kesintileri, veri kayıpları veya üçüncü taraf hizmetlerinden kaynaklanan sorunlar için azami sorumluluğumuz, son 3 ay içinde ödediğiniz ücretle sınırlıdır.</p>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">9. Değişiklikler ve Fesih</h2>
        <p>Bu koşulları önceden bildirmeksizin değiştirme hakkımız saklıdır. Devam eden kullanım, güncel koşulların kabulü anlamına gelir. İhlal durumunda hesabınızı askıya alma veya sonlandırma hakkımız mevcuttur.</p>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">10. Uygulanacak Hukuk</h2>
        <p>Bu koşullar Türkiye Cumhuriyeti hukuku kapsamında yorumlanır. Uyuşmazlıklarda Tekirdağ Mahkemeleri yetkilidir.</p>
      </section>
    </LegalLayout>
  );
}

export function IptalIade() {
  return (
    <LegalLayout title="İptal ve İade Koşulları">
      <p><strong className="text-gray-200">Son Güncelleme:</strong> {LEGAL_LAST_UPDATED}</p>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">1. Dijital Hizmetler ve Krediler</h2>
        <p>6502 sayılı Tüketicinin Korunması Hakkında Kanun'un 49. maddesi uyarınca; dijital içerik ve hizmetlerde, tüketicinin onayı ile teslimat başladıktan sonra cayma hakkı kullanılamaz.</p>
        <p className="mt-2">Bu çerçevede:</p>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
          <li><strong className="text-gray-300">AI İşlem Hakları:</strong> Satın alınan ve kullanılmış işlem hakları iade edilmez. Teknik hata nedeniyle harcanan işlem hakları otomatik olarak iade edilir.</li>
          <li><strong className="text-gray-300">Kullanılmamış İşlem Hakları:</strong> Satın alım tarihinden itibaren 14 gün içinde hiç kullanılmamış işlem hakları için iade talep edilebilir.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">2. Abonelik İptali</h2>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
          <li><strong className="text-gray-300">Abonelik iptali:</strong> Aboneliğinizi istediğiniz zaman iptal edebilirsiniz. İptal talebiniz bir sonraki fatura döneminden itibaren geçerli olur; mevcut fatura döneminin sonuna kadar hizmet devam eder. İptal sonrası hesabınızdaki kalan işlem hakları, aktif fatura dönemi sonunda kullanılabilir durumda kalır.</li>
          <li><strong className="text-gray-300">Plan düşürme/yükseltme:</strong> Plan değişikliği talebiniz, içinde bulunduğunuz fatura dönemine bağlı olarak bir sonraki dönemden itibaren geçerli olur. Yükseltme durumunda fark ücreti anında yansıtılır; düşürmede fark iadesi yapılmaz.</li>
          <li>Plan değişikliği sonrası hesabınızın hangi pakete döneceği, aktif haklar ve depolama durumu destek ekibi tarafından yazılı olarak teyit edilir.</li>
          <li>Bu konudaki talepler için Dashboard destek kanalı veya info@nebulanovagames.com kullanılabilir.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">3. Mimari Danışmanlık Hizmetleri</h2>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
          <li>Proje başlangıcından önce yapılan ödemeler, tarafların mutabık kaldığı durumlarda iade edilebilir.</li>
          <li>Proje süreci başladıktan sonra (çizim, render veya ruhsat süreci) gerçekleşen harcamalar düşülerek kalan tutar iade edilir.</li>
          <li>Tamamlanmış ve teslim edilmiş hizmetlerin bedeli iade edilmez.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">4. İade Süreci</h2>
        <p>Geçerli iade taleplerinizi <strong className="text-gray-300">info@nebulanovagames.com</strong> adresine sipariş numaranızla birlikte iletebilirsiniz. İadeler 5-10 iş günü içinde ödeme yönteminize gerçekleştirilir.</p>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">5. İletişim</h2>
        <p>İptal ve iade talepleriniz için: <strong className="text-gray-300">info@nebulanovagames.com</strong> veya 0 (282) 606 06 39</p>
      </section>
    </LegalLayout>
  );
}

export function MesafeliSatis() {
  return (
    <LegalLayout title="Mesafeli Satış Sözleşmesi">
      <p><strong className="text-gray-200">Son Güncelleme:</strong> {LEGAL_LAST_UPDATED}</p>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">Madde 1 — Taraflar</h2>
        <div className="space-y-3">
          <div>
            <p className="text-gray-300 font-bold mb-1">Satıcı:</p>
            <p>NEBULA NOVA GAMES DIŞ TİCARET LİMİTED ŞİRKETİ</p>
            <p>Silahtar&#x131;ağa Mah. Üniversite 1. Sk. No:13/1 İç Kapı No:Z109, 59000 Çorlu / TEKİRDAĞ</p>
            <p>Tel: 0 (282) 606 06 39 | E-posta: info@nebulanovagames.com | MERSİS: 0630135919700001</p>
          </div>
          <div>
            <p className="text-gray-300 font-bold mb-1">Alıcı (Tüketici):</p>
            <p>Platforma kayıtlı kullanıcı (ad, e-posta ve ödeme bilgileri kayıt sırasında belirtilmiştir).</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">Madde 2 — Sözleşmenin Konusu</h2>
        <p>Bu sözleşme; Alıcı'nın Archilya platformu üzerinden satın aldığı dijital hizmetleri (Ek İşlem Paketleri, Keşif / Solo / Pro / Studio Abonelik Planları) ile mimari danışmanlık hizmetleri (Konsept Tasarım, İç Mekan Tasarımı, Peyzaj ve Çevre Düzenleme, Profesyonel Modelleme, Görselleştirme, Ruhsat ve Uygulama) ve Archilya VR hizmetlerini (Materyalsiz Aktarma, Materyalli 4K Aktarma, Full Etkileşimli 4K Aktarma, Materyalsiz Modelleme, Materyalli Modelleme, Full Etkileşimli Materyalli Modelleme, VR Aktarma — Emlak, VR Modelleme — Emlak) kapsamaktadır.</p>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">Madde 3 — Ürün / Hizmet Bilgileri ve Fiyat</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse mt-2">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 pr-4 text-gray-400 font-bold uppercase tracking-wider">Hizmet</th>
                <th className="text-left py-2 pr-4 text-gray-400 font-bold uppercase tracking-wider">Fiyat (KDV Hariç)</th>
              </tr>
            </thead>
            <tbody className="space-y-2">
              {[
                ['Keşif Abonelik', 'Ücretsiz (150 İşlem/ay)'],
                ['Solo Abonelik', '₺699 / ay (1.000 İşlem/ay) · Yıllık kurumsal teklif ayrıca sunulur'],
                ['Pro Abonelik', '₺1.599 / ay (3.000 İşlem/ay) · Yıllık kurumsal teklif ayrıca sunulur'],
                ['Studio Abonelik', '₺4.999 / ay (12.000 İşlem/ay) · Yıllık kurumsal teklif ayrıca sunulur'],
                ['500 Ek İşlem — Akış Takviyesi', '₺450'],
                ['1.500 Ek İşlem — Proje Hızı', '₺1.200'],
                ['4.000 Ek İşlem — İhale Sprinti', '₺3.000'],
                ['Konsept Tasarım (100m² baz)', '₺18.000 · Abonelere: ₺14.400'],
                ['İç Mekan Tasarımı (100m² baz)', '₺18.000 · Abonelere: ₺14.400'],
                ['Peyzaj ve Çevre Düzenleme (100m² baz)', '₺8.000 · Abonelere: ₺6.400'],
                ['Profesyonel Modelleme (100m² baz)', '₺14.000 · Abonelere: ₺11.200'],
                ['Görselleştirme / Render (100m² baz)', '₺15.000 · Abonelere: ₺12.000'],
                ['Ruhsat ve Uygulama (100m² baz)', '₺10.000 · Abonelere: ₺8.000'],
                ['Materyalsiz Aktarma', 'Normal: ₺6.000 · Abone: ₺4.800'],
                ['Materyalli 4K Aktarma', 'Normal: ₺12.000 · Abone: ₺9.600'],
                ['Full Etkileşimli 4K Aktarma', 'Temel: ₺22.000 · Orta: ₺32.000 · Geniş: ₺45.000+ · Abone: %20 indirim'],
                ['Materyalsiz Modelleme', 'Normal: ₺8.000 · Abone: ₺6.400'],
                ['Materyalli Modelleme', 'Normal: ₺18.000 · Abone: ₺14.400'],
                ['Full Etkileşimli Materyalli Modelleme', 'Temel: ₺32.000 · Orta: ₺48.000 · Geniş: ₺65.000+ · Abone: %20 indirim'],
                ['VR Aktarma — Emlak', '₺5.500–₺9.000 / daire · Abone: ek %20 indirim'],
                ['VR Modelleme — Emlak', '₺11.000–₺18.000 / daire · Abone: ek %20 indirim'],
              ].map(([hizmet, fiyat]) => (
                <tr key={hizmet} className="border-b border-white/5">
                  <td className="py-2 pr-4 text-gray-300">{hizmet}</td>
                  <td className="py-2 text-primary font-bold">{fiyat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-gray-600 text-xs">*KDV oranı %20 olarak uygulanır. Fatura kesilirken KDV ayrıca tahsil edilir.</p>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">Madde 4 — Ödeme Koşulları</h2>
        <p>Ödemeler Iyzico altyapısı üzerinden güvenli şekilde Türk Lirası cinsinden tek çekim olarak alınır. Ödeme bilgileri Şirketimizde saklanmaz; Iyzico'nun PCI-DSS uyumlu altyapısında güvence altında tutulur.</p>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">Madde 5 — Teslimat</h2>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
          <li><strong className="text-gray-300">AI Kredileri ve Abonelik:</strong> Ödeme onayından sonra anlık olarak hesabınıza tanımlanır.</li>
          <li><strong className="text-gray-300">Mimari Danışmanlık Hizmetleri:</strong> Proje kapsamı ve taraflarca belirlenen takvime göre teslim edilir. Teslimat süresi sözleşme imzalanmasını takip eden en geç 90 iş günüdür.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">Madde 6 — Cayma Hakkı</h2>
        <p>6502 sayılı Kanun ve Mesafeli Sözleşmeler Yönetmeliği uyarınca; dijital içerik ve hizmetlerde alıcının onayı ile teslimat/ifaya başlandığından cayma hakkı kullanılamaz. Fiziksel danışmanlık hizmetleri için hizmet ifasına başlanmadan önce 14 gün cayma hakkı mevcuttur.</p>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">Madde 7 — Uyuşmazlık Çözümü</h2>
        <p>Uyuşmazlıklarda T.C. Ticaret Bakanlığı tarafından belirlenen değer sınırları dahilinde Tüketici Hakem Heyeti veya Tüketici Mahkemeleri yetkilidir.</p>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">Madde 8 — Yürürlük</h2>
        <p>İşbu sözleşme, Alıcı'nın ödeme işlemini tamamlaması ve "Ödemeyi Onayla" butonuna tıklaması ile elektronik ortamda kurulmuş ve yürürlüğe girmiş sayılır.</p>
      </section>
    </LegalLayout>
  );
}

export function CerezPolitikasi() {
  return (
    <LegalLayout title="Çerez Politikası">
      <p><strong className="text-gray-200">Son Güncelleme:</strong> {LEGAL_LAST_UPDATED}</p>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">1. Çerez Nedir?</h2>
        <p>Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınıza kaydedilen küçük metin dosyalarıdır. siteyi daha verimli çalıştırmak ve kullanıcı deneyimini iyileştirmek için kullanılır.</p>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">2. Kullandığımız Çerez Türleri</h2>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
          <li><strong className="text-gray-300">Zorunlu Çerezler:</strong> Oturum yönetimi ve güvenlik için gereklidir. Devre dışı bırakılamaz.</li>
          <li><strong className="text-gray-300">Tercih Çerezleri:</strong> Dil ve çerez onayı gibi tercihlerinizi hatırlar.</li>
          <li><strong className="text-gray-300">Analitik Çerezler:</strong> Hata izleme ve performans takibi için Sentry kullanılır.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">3. Çerez Yönetimi</h2>
        <p>Tarayıcı ayarlarınızdan çerezleri yönetebilir, silebilir veya engelleyebilirsiniz. Zorunlu çerezlerin devre dışı bırakılması platformun bazı işlevlerini etkileyebilir.</p>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">4. İletişim</h2>
        <p>Çerez politikamız hakkında sorularınız için: <strong className="text-gray-300">info@nebulanovagames.com</strong></p>
      </section>
    </LegalLayout>
  );
}

export function TicariElektronikIletiOnayi() {
  return (
    <LegalLayout title="Ticari Elektronik İleti Onayı">
      <p><strong className="text-gray-200">Son Güncelleme:</strong> {LEGAL_LAST_UPDATED}</p>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">1. Onay Kapsamı</h2>
        <p>6563 sayılı Elektronik Ticaretin Düzenlenmesi Hakkında Kanun uyarınca, tarafınıza ticari elektronik ileti gönderilebilmesi için açık rızanız gerekmektedir. Bu onayı vererek NEBULA NOVA GAMES DIŞ TİCARET LİMİTED ŞİRKETİ tarafından ticari elektronik ileti almayı kabul edersiniz.</p>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">2. İleti İçerikleri</h2>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
          <li>Abonelik yenileme ve ödeme hatırlatmaları</li>
          <li>Yeni özellik ve ürün duyuruları</li>
          <li>Kampanya, indirim ve özel teklifler</li>
          <li>Kullanıcı anketleri ve etkinlik davetleri</li>
        </ul>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">3. Onay Geri Çekme</h2>
        <p>Onayınızı istediğiniz zaman e-posta altındaki "Abonelikten Ayrıl" bağlantısını kullanarak veya <strong className="text-gray-300">info@nebulanovagames.com</strong> adresine talep göndererek geri çekebilirsiniz.</p>
      </section>
    </LegalLayout>
  );
}

export function GizlilikKosullari() {
  return (
    <LegalLayout title="Gizlilik Koşulları">
      <p><strong className="text-gray-200">Son Güncelleme:</strong> {LEGAL_LAST_UPDATED}</p>
      <p className="text-gray-500 text-sm">Bu sayfa, Gizlilik Politikamızın ayrılmaz bir parçasıdır.</p>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">1. Veri İşleme Koşulları</h2>
        <p>Kişisel verileriniz, 6698 sayılı KVKK kapsamında, hukuka ve dürüstlük kurallarına uygun olarak, yalnızca belirtilen amaçlarla ve ölçülü bir şekilde işlenir.</p>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">2. Veri Sahibinin Hakları</h2>
        <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
          <li>Verilerinizin işlenip işlenmediğini öğrenme</li>
          <li>İşlenmişse bilgi talep etme</li>
          <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
          <li>Kanun kapsamında silinmesini isteme</li>
          <li>İşleme itiraz etme ve zararın giderilmesini talep etme</li>
        </ul>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">3. İletişim</h2>
        <p>Talepleriniz için: <strong className="text-gray-300">info@nebulanovagames.com</strong></p>
      </section>
    </LegalLayout>
  );
}

export function MimarlikHizmetSozlesmesi() {
  const handleDownloadWord = useCallback(() => {
    const el = document.getElementById('sozlesme-icerik');
    if (!el) return;
    const style = document.createElement('style');
    style.textContent = `
      body { font-family: 'Calibri', 'Arial', sans-serif; font-size: 11pt; color: #1a1a1a; line-height: 1.7; max-width: 800px; margin: auto; padding: 40px; }
      h1 { font-size: 20pt; color: #8b6f4c; border-bottom: 2px solid #c6a87c; padding-bottom: 8px; }
      h2 { font-size: 14pt; color: #8b6f4c; margin-top: 24px; }
      strong { color: #1a1a1a; }
      ul { margin: 8px 0; padding-left: 20px; }
      li { margin-bottom: 4px; }
      .imza-blok { display: flex; gap: 20px; margin-top: 30px; }
      .imza-kart { flex: 1; border: 1px solid #ccc; padding: 16px; border-radius: 4px; }
      .imza-cizgi { border-bottom: 1px solid #999; margin: 16px 0; }
    `;
    const html = `<!DOCTYPE html>
<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
<head><meta charset="utf-8"><title>Archilya - Mimarlık Hizmet Sözleşmesi</title>${style.outerHTML}</head>
<body>
  <div style="text-align:center;margin-bottom:32px">
    <p style="font-size:16pt;font-weight:bold;color:#8b6f4c;margin:0">ARCHİLYA</p>
    <p style="font-size:10pt;color:#666;margin:4px 0 0 0">Mimarlık Hizmet Sözleşmesi</p>
  </div>
  ${el.innerHTML.replace(/class="[^"]*"/g, '').replace(/<style[\s\S]*?<\/style>/g, '').replace(/<svg[\s\S]*?<\/svg>/g, '').replace(/<img[^>]*>/g, '')}
  <p style="text-align:center;margin-top:40px;font-size:9pt;color:#999;border-top:1px solid #ddd;padding-top:12px">
    Archilya &mdash; NEBULA NOVA GAMES DIŞ TİCARET LİMİTED ŞİRKETİ &mdash; Bu belge dijital ortamda hazırlanmıştır.
  </p>
</body></html>`;
    const blob = new Blob([html], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Archilya-Mimarlik-Hizmet-Sozlesmesi.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, []);

  return (
    <>
      {/* Floating action buttons */}
      <div className="fixed top-20 right-4 z-50 print:hidden">
        <button
          onClick={handleDownloadWord}
          className="flex items-center gap-2 px-4 py-2.5 rounded-sm border border-primary/30 bg-surface/80 backdrop-blur-md text-[10px] font-bold uppercase tracking-[0.25em] text-primary hover:bg-primary/20 transition-all cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
          title="Word belgesi olarak indir"
        >
          <FileText className="h-3.5 w-3.5" />
          Word
        </button>
      </div>

    <LegalLayout title="Mimarlık Hizmet Sözleşmesi">
      <div id="sozlesme-icerik">
      <p><strong className="text-gray-200">Son Güncelleme:</strong> {LEGAL_LAST_UPDATED}</p>
      <p className="text-gray-500 text-sm">
        Bu sözleşme, Archilya platformu üzerinden sunulan mimarlık ve görselleştirme hizmetlerine ilişkin
        hüküm ve koşulları düzenler. Ödemenin gerçekleştirilmesiyle birlikte taraflar aşağıdaki koşulları
        kabul etmiş sayılır.
      </p>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">1. Taraflar</h2>
        <div className="rounded-sm border border-white/10 bg-white/[0.03] p-4 space-y-2 text-sm">
          <p><strong className="text-gray-200">Hizmet Sağlayıcı (Archilya):</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-2 text-gray-400">
            <li>Unvan: NEBULA NOVA GAMES DIŞ TİCARET LİMİTED ŞİRKETİ</li>
            <li>Adres: Silahtarağa Mah. Üniversite 1. Sk. No:13/1 İç Kapı No:Z109, 59000 Çorlu / TEKİRDAĞ</li>
            <li>Vergi Dairesi: Çorlu Vergi Dairesi</li>
            <li>Vergi Numarası: 0630135919</li>
            <li>MERSİS Numarası: 0630135919700001</li>
            <li>Ticari İletişim: info@archilya.com — 0 (282) 606 06 39</li>
          </ul>
        </div>
        <div className="mt-3 rounded-sm border border-white/10 bg-white/[0.03] p-4 space-y-2 text-sm">
          <p><strong className="text-gray-200">Müşteri:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-2 text-gray-400">
            <li>Ad / Unvan: ................................................</li>
            <li>Adres: ................................................</li>
            <li>T.C. Kimlik / Vergi Numarası: ................................................</li>
            <li>Telefon / E-posta: ................................................</li>
          </ul>
        </div>
        <p className="mt-3">
          Taraflar, işbu sözleşme hükümlerini kabul ederek aşağıda belirtilen şartlar çerçevesinde
          mimarlık hizmetinin ifası konusunda anlaşmışlardır.
        </p>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">2. Sözleşmenin Konusu ve Kapsamı</h2>
        <p>
          İşbu sözleşme, Archilya platformu üzerinden Müşteri tarafından seçilen hizmet veya hizmet
          setinin (konsept tasarım, iç mekan tasarımı, peyzaj düzenleme, profesyonel modelleme,
          görselleştirme, ruhsat ve uygulama çizimleri, VR/dijital sunum hizmetleri ve benzeri)
          kapsamını, bedelini, teslim koşullarını ve tarafların hak ile yükümlülüklerini düzenler.
        </p>
        <p className="mt-2">
          Hizmet kapsamı, Archilya tarafından Müşteri'ye sunulan fiyat teklifinde (teklif sunumu)
          belirtilen hizmetler, alan büyüklükleri, fiyatlandırma ve varsa özel koşullar ile sınırlıdır.
        </p>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">3. Hizmet Bedeli ve Ödeme Koşulları</h2>
        <p>
          <strong className="text-gray-200">3.1.</strong> Hizmet bedeli, Archilya tarafından Müşteri'ye sunulan
          fiyat teklifinde belirtilen toplam tutardır. Tüm fiyatlar Türk Lirası (TL) olarak ifade
          edilmiştir ve KDV dahil değildir.
        </p>
        <p className="mt-2">
          <strong className="text-gray-200">3.2.</strong> Ödeme aşağıdaki şekilde yapılır:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-1 ml-2">
          <li>Toplam bedelin <strong className="text-gray-200">%50'si</strong>, sipariş onayında ön ödeme olarak tahsil edilir.</li>
          <li>Kalan <strong className="text-gray-200">%50 bakiye</strong>, işin teslimi sırasında tahsil edilir.</li>
        </ul>
        <p className="mt-2">
          <strong className="text-gray-200">3.3.</strong> Ödemeler, banka havalesi veya EFT yoluyla Archilya
          tarafından bildirilecek banka hesabına yapılır. Ödemenin gecikmesi durumunda teslim tarihi
          de gecikme süresi kadar ertelenir.
        </p>
        <p className="mt-2">
          <strong className="text-gray-200">3.4.</strong> Ödemenin gerçekleştirilmesiyle birlikte Müşteri,
          işbu sözleşme hükümlerini okumuş, anlamış ve kabul etmiş sayılır.
        </p>
        <p className="mt-2">
          <strong className="text-gray-200">3.5.</strong> Hizmet bedeli, TMMOB Mimarlar Odası tarafından
          belirlenen <strong className="text-gray-200">En Az Bedel Tarifesi</strong>'nin altında
          belirlenemez. Bedel tespitinde Mimarlar Odası'nın yürürlükteki tarifesi esas alınır.
        </p>
        <p className="mt-2">
          <strong className="text-gray-200">3.6.</strong> İşbu sözleşmeye ilişkin
          <strong className="text-gray-200"> Damga Vergisi</strong> ve diğer yasal yükümlülükler
          Müşteri tarafından karşılanır.
        </p>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">4. Teslim ve Süreç</h2>
        <p>
          <strong className="text-gray-200">4.1.</strong> Teslim süresi, ön ödemenin alınmasını takiben
          başlar. Standart teslim süresi <strong className="text-gray-200">3 (üç) haftadır</strong>.
          Revizyon süreçleri bu süreye dahil değildir.
        </p>
        <p className="mt-2">
          <strong className="text-gray-200">4.2.</strong> Teslimat, dijital ortamda (e-posta, bulut depolama
          bağlantısı veya Archilya platformu üzerinden) yapılır. Fiziksel bir teslimat yapılmaz.
        </p>
        <p className="mt-2">
          <strong className="text-gray-200">4.3.</strong> Müşteri, teslim edilen işi teslim tarihinden
          itibaren 7 (yedi) iş günü içinde incelemeli ve varsayılan ayıp veya uygunsuzlukları
          Archilya'ya bildirmelidir. Bu süre içinde bildirilmeyen ayıplardan Archilya sorumlu tutulamaz.
        </p>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">5. Revizyon ve Değişiklik Hakları</h2>
        <p>
          <strong className="text-gray-200">5.1.</strong> Her hizmet kapsamında 2 (iki) adet kapsamlı revizyon
          hakkı ücretsizdir. Küçük rötuşlar (renk, malzeme, obje değişikliği) ücretsizdir ve revizyon
          hakkından düşülmez.
        </p>
        <p className="mt-2">
          <strong className="text-gray-200">5.2.</strong> 2 (iki) ücretsiz revizyon hakkı aşıldığında,
          sonraki her kapsamlı revizyon için fiyat teklifinde belirtilen revizyon ücreti yansıtılır.
        </p>
        <p className="mt-2">
          <strong className="text-gray-200">5.3.</strong> Revizyon talepleri, teslim edilen işin kapsamını
          aşan veya sözleşme konusu hizmetin niteliğini değiştiren talepler olması durumunda ayrıca
          fiyatlandırılır.
        </p>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">6. Cayma ve Fesih Hakkı</h2>
        <p>
          <strong className="text-gray-200">6.1.</strong> Müşteri, ön ödemeyi yaptıktan sonra 14 (on dört)
          gün içinde hiçbir gerekçe göstermeksizin cayma hakkına sahiptir. Bu durumda, henüz işe
          başlanmamışsa ön ödeme iade edilir. İşe başlanmışsa, yapılan işin karşılığı düşüldükten sonra
          kalan tutar iade edilir.
        </p>
        <p className="mt-2">
          <strong className="text-gray-200">6.2.</strong> Archilya, Müşteri'nin sözleşme hükümlerine aykırı
          davranması veya işbirliği yükümlülüğünü yerine getirmemesi durumunda sözleşmeyi tek taraflı
          feshetme hakkına sahiptir. Bu durumda, o ana kadar yapılan işin bedeli Müşteri'ye yansıtılır
          ve kalan tutar iade edilmez.
        </p>
        <p className="mt-2">
          <strong className="text-gray-200">6.3.</strong> %50 iade garantisi bulunan hizmetlerde, Müşteri
          teslim edilen işten memnun kalmazsa koşulsuz olarak ödediği toplam bedelin %50'sini iade
          alma hakkına sahiptir. Bu hak, teslim tarihinden itibaren 7 (yedi) gün içinde kullanılmalıdır.
        </p>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">7. İkametgah ve Bildirimler</h2>
        <p>
          <strong className="text-gray-200">7.1.</strong> Tarafların işbu sözleşmede belirtilen adresleri,
          yasal ikametgahları olup taraflarca yapılacak tüm bildirimler bu adreslere yazılı olarak
          yapılır.
        </p>
        <p className="mt-2">
          <strong className="text-gray-200">7.2.</strong> Adres değişiklikleri, değişiklik tarihinden
          itibaren <strong className="text-gray-200">7 (yedi) gün</strong> içinde karşı tarafa yazılı
          olarak bildirilir. Bildirilmeyen adres değişikliklerinden doğan sorumluluk değişikliği
          yapmayan tarafa aittir.
        </p>
        <p className="mt-2">
          <strong className="text-gray-200">7.3.</strong> Bildirimler, taahhütlü mektupla veya noter
          aracılığıyla yapılır. Bildirimin karşı tarafa ulaştığı tarih, tebliğ tarihi olarak kabul
          edilir. Bildirimin ulaşmaması halinde, gönderim tarihinden itibaren 5 (beş) iş günü sonunda
          bildirim yapılmış sayılır.
        </p>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">8. Gizlilik</h2>
        <p>
          Taraflar, işbu sözleşme kapsamında birbirlerinden edindikleri ticari, teknik ve kişisel
          bilgileri üçüncü kişilerle paylaşmayacaklarını, yalnızca sözleşmenin ifası amacıyla
          kullanacaklarını ve sözleşmenin sona ermesinden sonra da gizlilik yükümlülüğünün devam
          edeceğini kabul eder.
        </p>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">9. Fikri Mülkiyet ve Yasal Dayanak</h2>
        <p>
          <strong className="text-gray-200">9.1.</strong> Teslim edilen tüm dijital içeriklerin (render
          görselleri, 3D modeller, VR ortamları, çizimler ve diğer materyaller) kullanım hakkı,
          bedelin tamamının ödenmesi koşuluyla Müşteri'ye devredilir.
        </p>
        <p className="mt-2">
          <strong className="text-gray-200">9.2.</strong> Archilya, teslim edilen işleri portföy amaçlı
          kullanma hakkına sahiptir. Müşteri'nin açık yazılı izni olmadan ticari amaçlı kullanılamaz.
        </p>
        <p className="mt-2">
          <strong className="text-gray-200">9.3.</strong> Archilya'ya ait yazılım, altyapı, materyal
          kütüphanesi ve tescilli araçlar üzerindeki tüm fikri mülkiyet hakları Archilya'ya aittir.
        </p>
        <p className="mt-2">
          <strong className="text-gray-200">9.4.</strong> İşbu sözleşme kapsamında tarafların hak ve
          yükümlülükleri aşağıda belirtilen yasal düzenlemelere tabidir:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-1 ml-2">
          <li><strong className="text-gray-200">3194 sayılı İmar Kanunu</strong> ve ilgili yönetmelikler</li>
          <li><strong className="text-gray-200">5846 sayılı Fikir ve Sanat Eserleri Kanunu (FSEK)</strong></li>
          <li><strong className="text-gray-200">6235/7303 sayılı TMMOB Kanunu</strong></li>
          <li><strong className="text-gray-200">3458 sayılı Mühendislik ve Mimarlık Hakkında Kanun</strong></li>
          <li>TMMOB Mimarlar Odası Serbest Mimarlık Hizmetlerini Uygulama, Tescil ve Mesleki Denetim Yönetmeliği</li>
          <li>Mimarlık Hizmetleri Şartnamesi ve En Az Bedel Tarifesi</li>
        </ul>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">10. Sorumluluk ve Garanti</h2>
        <p>
          <strong className="text-gray-200">10.1.</strong> Archilya, hizmeti özen ve sadakat yükümlülüğü
          çerçevesinde, mesleki standartlara uygun olarak ifa etmeyi taahhüt eder.
        </p>
        <p className="mt-2">
          <strong className="text-gray-200">10.2.</strong> Archilya'nın sorumluluğu, Müşteri'nin ödediği
          toplam hizmet bedelini aşamaz. Archilya, dolaylı veya tali zararlardan sorumlu tutulamaz.
        </p>
        <p className="mt-2">
          <strong className="text-gray-200">10.3.</strong> Müşteri tarafından sağlanan kaynak dosyaların
          (CAD, PDF, görsel, referans vb.) doğruluğundan Müşteri sorumludur. Hatalı kaynak dosyalarından
          kaynaklanan revizyon talepleri ek ücrete tabidir.
        </p>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">11. Uyuşmazlık Çözümü</h2>
        <p>
          İşbu sözleşmeden doğan veya sözleşmeyle ilgili uyuşmazlıkların çözümünde Türkiye Cumhuriyeti
          kanunları uygulanır. Uyuşmazlık durumunda öncelikle <strong className="text-gray-200">arabuluculuk</strong>
          yoluna başvurulur. Arabuluculuktan sonuç alınamaması halinde taraflar,
          <strong className="text-gray-200">TMMOB Mimarlar Odası hakemliğine</strong> başvurabilir.
          Anlaşma sağlanamaması halinde <strong className="text-gray-200">Tekirdağ Mahkemeleri ve İcra
          Daireleri</strong> yetkilidir.
        </p>
      </section>

      <section>
        <h2 className="text-white font-serif text-xl italic mb-3">12. Yürürlük ve İmza</h2>
        <p>
          <strong className="text-gray-200">12.1.</strong> İşbu sözleşme, Müşteri'nin ön ödemeyi
          gerçekleştirdiği tarihte yürürlüğe girer ve tarafların tüm edimlerini yerine getirmesiyle
          veya sözleşmenin feshiyle sona erer.
        </p>
        <p className="mt-2">
          <strong className="text-gray-200">12.2.</strong> İşbu sözleşme 12 (on iki) maddeden ibaret
          olup taraflarca okunup anlaşılarak imzalanmıştır. Sözleşmenin bir nüshası
          <strong className="text-gray-200"> TMMOB Mimarlar Odası</strong>'na teslim edilmek üzere
          Archilya nezdinde, bir nüshası Müşteri nezdinde saklanır.
        </p>

        {/* İmza Blokları */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-sm border border-primary/20 bg-primary/[0.04] p-5">
            <p className="text-[9px] uppercase tracking-[0.2em] text-primary font-bold mb-3">Hizmet Sağlayıcı (Archilya)</p>
            <p className="text-xs text-gray-400">NEBULA NOVA GAMES DIŞ TİCARET LİMİTED ŞİRKETİ</p>
            <div className="mt-6 mb-6 border-b border-white/10" />
            <p className="text-xs text-gray-500">Adı Soyadı / Yetkili: ................................................</p>
            <div className="mt-6 mb-6 border-b border-white/10" />
            <p className="text-xs text-gray-500">İmza: ................................................</p>
            <p className="mt-4 text-xs text-gray-500">Tarih: ....../....../......</p>
          </div>
          <div className="rounded-sm border border-primary/20 bg-primary/[0.04] p-5">
            <p className="text-[9px] uppercase tracking-[0.2em] text-primary font-bold mb-3">Müşteri</p>
            <p className="text-xs text-gray-400">Müşteri Adı / Unvanı</p>
            <div className="mt-6 mb-6 border-b border-white/10" />
            <p className="text-xs text-gray-500">Adı Soyadı / Yetkili: ................................................</p>
            <div className="mt-6 mb-6 border-b border-white/10" />
            <p className="text-xs text-gray-500">İmza: ................................................</p>
            <p className="mt-4 text-xs text-gray-500">Tarih: ....../....../......</p>
          </div>
        </div>
      </section>
      </div>{/* #sozlesme-icerik */}
    </LegalLayout>

    </>
  );
}
