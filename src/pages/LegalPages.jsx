import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { setPageMeta } from '../utils/seo';

/* ─── LegalLayout — ortak hukuki sayfa kabuğu ─────────────────── */

function LegalLayout({ children, title, description, date }) {
  useEffect(() => { setPageMeta(title, description); }, [title, description]);

  return (
    <div className="min-h-screen bg-background text-white">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors text-xs uppercase tracking-widest mb-10">
            <ArrowLeft className="w-3.5 h-3.5" />
            Ana Sayfaya Dön
          </Link>
          <p className="text-primary text-[10px] uppercase tracking-[0.25em] mb-3">Archilya</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white italic mb-2">{title}</h1>
          {date && <p className="text-gray-500 text-xs mb-8">Yürürlük Tarihi: {date}</p>}

          <div className="space-y-8">
            {children}
          </div>

          <div className="mt-16 pt-8 border-t border-white/[0.06]">
            <p className="text-gray-500 text-xs leading-relaxed">
              <strong className="text-gray-400">NEBULA NOVA GAMES DIŞ TİCARET LİMİTED ŞİRKETİ</strong><br />
              Silahtarağa Mah. Üniversite 1. Sk. No:13/1 İç Kapı No:Z109, 59000 Çorlu / TEKİRDAĞ<br />
              Telefon: 0 (282) 606 06 39 · E-posta: info@nebulanovagames.com · MERSİS: 0630135919700001
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ─── Gizlilik Politikası ───────────────────────────────────── */




/* ─── Gizlilik Politikası ───────────────────────────────────── */

export function GizlilikPolitikasi() {
  return (
    <LegalLayout
      title="Gizlilik Politikası"
      description="Archilya ve NEBULA NOVA GAMES DIŞ TİCARET LİMİTED ŞİRKETİ gizlilik politikası — kişisel verilerinizin işlenmesi, saklanması ve korunması hakkında bilgiler."
      date="1 Mart 2025"
    >
      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">1. Giriş</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          Archilya (bundan sonra "Platform" olarak anılacaktır) olarak, kullanıcılarımızın ve
          ziyaretçilerimizin gizliliğine büyük önem vermekteyiz. İşbu Gizlilik Politikası,
          Platform üzerinden toplanan kişisel verilerin işlenme amaçlarını, kapsamını, saklama
          sürelerini ve haklarınızı açıklamaktadır.
        </p>
        <p className="text-gray-400 text-sm leading-relaxed">
          Veri sorumlusu sıfatıyla hareket eden <strong className="text-white">NEBULA NOVA GAMES DIŞ TİCARET LİMİTED ŞİRKETİ</strong>,
          6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") ve ilgili mevzuat kapsamında
          kişisel verilerinizi hukuka ve dürüstlük kurallarına uygun olarak işlemekte, saklamakta
          ve üçüncü kişilerle yalnızca açık rızanız veya kanuni zorunluluk hallerinde paylaşmaktadır.
        </p>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">2. Toplanan Kişisel Veriler</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          Platformumuzu kullanmanız sırasında aşağıdaki kategorilerde kişisel verileriniz toplanabilir:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm leading-relaxed pl-4">
          <li><strong className="text-white">Kimlik Verileri:</strong> Ad, soyad, TC kimlik numarası (faturalama gerektiren durumlarda).</li>
          <li><strong className="text-white">İletişim Verileri:</strong> E-posta adresi, telefon numarası, adres.</li>
          <li><strong className="text-white">Müşteri İşlem Verileri:</strong> Satın alınan hizmetler, sipariş bilgileri, fatura detayları.</li>
          <li><strong className="text-white">İşlem Güvenliği Verileri:</strong> IP adresi, cihaz bilgileri, oturum kayıtları, log kayıtları.</li>
          <li><strong className="text-white">Pazarlama Verileri:</strong> Çerezler aracılığıyla toplanan kullanım alışkanlıkları, tercihler.</li>
          <li><strong className="text-white">Görsel Veriler:</strong> Yüklemiş olduğunuz proje dosyaları, render görselleri ve 3D modeller.</li>
        </ul>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">3. Verilerin İşlenme Amaçları</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          Kişisel verileriniz aşağıda belirtilen amaçlar doğrultusunda işlenmektedir:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm leading-relaxed pl-4">
          <li>Platform üzerinden sunduğumuz hizmetlerin ifası ve sözleşme yükümlülüklerinin yerine getirilmesi,</li>
          <li>Kullanıcı hesabı oluşturulması, yönetilmesi ve doğrulanması,</li>
          <li>Faturalandırma ve ödeme işlemlerinin gerçekleştirilmesi,</li>
          <li>Müşteri hizmetleri ve destek taleplerinin yanıtlanması,</li>
          <li>Platformun teknik güvenliğinin sağlanması, hata ve kötüye kullanımın tespiti,</li>
          <li>Yasal düzenlemelerden kaynaklanan yükümlülüklerin yerine getirilmesi,</li>
          <li>Pazarlama ve reklam faaliyetleri (açık rızanız olması halinde),</li>
          <li>Kullanıcı deneyiminin iyileştirilmesi ve analitik çalışmaları.</li>
        </ul>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">4. Verilerin Aktarılması</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Kişisel verileriniz, KVKK'nın 8. ve 9. maddelerinde öngörülen düzenlemelere uygun olarak,
          yalnızca aşağıdaki durumlarda üçüncü kişilere aktarılabilir:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm leading-relaxed mt-4 pl-4">
          <li>Kanunen yetkili kamu kurum ve kuruluşları ile talep edilmesi halinde,</li>
          <li>Hizmet sağlayıcılarımız (bulut altyapısı, ödeme hizmetleri, e-posta servisleri) ile sınırlı kapsamda,</li>
          <li>Açık rızanız bulunması durumunda yurt dışındaki hizmet sağlayıcılara,</li>
          <li>Şirket birleşmesi, devralma veya satış durumunda hukuki halefimize.</li>
        </ul>
        <p className="text-gray-400 text-sm leading-relaxed mt-4">
          Verilerinizin aktarıldığı üçüncü taraflar, veri güvenliği standartlarına uygun olarak
          seçilmekte ve gerekli sözleşmelerle koruma altına alınmaktadır.
        </p>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">5. Veri Saklama Süreleri</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Kişisel verileriniz, işlenme amaçlarının gerektirdiği süre boyunca ve her halükarda
          yasal mevzuatta öngörülen zamanaşımı süreleri (genel olarak 10 yıl) kadar saklanmaktadır.
          Süre sonunda verileriniz periyodik imha politikamız kapsamında silinmekte, yok edilmekte
          veya anonim hale getirilmektedir.
        </p>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">6. Veri Sahibinin Hakları</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          KVKK'nın 11. maddesi uyarınca, kişisel verilerinizin işlenmesine ilişkin olarak
          aşağıdaki haklara sahipsiniz:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm leading-relaxed pl-4">
          <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
          <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
          <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
          <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,</li>
          <li>Eksik veya yanlış işlenmiş olması halinde düzeltilmesini isteme,</li>
          <li>KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme,</li>
          <li>Aktarıldığı üçüncü kişilere yukarıdaki işlemlerin bildirilmesini isteme,</li>
          <li>İtiraz etme ve aleyhinize sonuç doğuran otomatik işlemlere itiraz etme,</li>
          <li>Kanuna aykırı işleme sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme.</li>
        </ul>
        <p className="text-gray-400 text-sm leading-relaxed mt-4">
          Bu haklarınızı kullanmak için <strong className="text-white">info@nebulanovagames.com</strong> adresine
          başvurabilirsiniz. Başvurularınız en geç 30 gün içinde ücretsiz olarak yanıtlanacaktır.
        </p>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">7. Değişiklikler</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          İşbu Gizlilik Politikası, yasal düzenlemelere ve Platform'un ihtiyaçlarına göre
          güncellenebilir. Değişiklikler, güncel politikanın Platform'da yayınlanmasıyla
          birlikte yürürlüğe girer. Önemli değişiklikler durumunda kullanıcılarımıza e-posta
          yoluyla bildirim yapılabilir.
        </p>
      </section>
    </LegalLayout>
  );
}


/* ─── KVKK Aydınlatma Metni ────────────────────────────────── */

export function KVKK() {
  return (
    <LegalLayout
      title="KVKK Aydınlatma Metni"
      description="6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında Archilya veri sorumlusu aydınlatma metni."
      date="1 Mart 2025"
    >
      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">Veri Sorumlusunun Kimliği</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel verileriniz
          <strong className="text-white"> NEBULA NOVA GAMES DIŞ TİCARET LİMİTED ŞİRKETİ</strong> tarafından
          veri sorumlusu sıfatıyla aşağıda açıklanan kapsamda işlenmektedir.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-400">
          <div>
            <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">Firma Ünvanı</p>
            <p className="text-white">NEBULA NOVA GAMES DIŞ TİCARET LİMİTED ŞİRKETİ</p>
          </div>
          <div>
            <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">Adres</p>
            <p className="text-white">Silahtarağa Mah. Üniversite 1. Sk. No:13/1 İç Kapı No:Z109, 59000 Çorlu / TEKİRDAĞ</p>
          </div>
          <div>
            <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">Telefon</p>
            <p className="text-white">0 (282) 606 06 39</p>
          </div>
          <div>
            <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">E-posta</p>
            <p className="text-white">info@nebulanovagames.com</p>
          </div>
          <div>
            <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">MERSİS No</p>
            <p className="text-white">0630135919700001</p>
          </div>
        </div>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">Kişisel Verilerin Hangi Amaçla İşleneceği</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Kişisel verileriniz, Platform üzerinden sunulan hizmetlerin ifası, kullanıcı kayıt
          işlemleri, faturalandırma, müşteri desteği, platform güvenliği, kullanıcı deneyiminin
          iyileştirilmesi ve yasal yükümlülüklerin yerine getirilmesi amaçlarıyla işlenmektedir.
        </p>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">İşlenen Kişisel Veriler</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          Aşağıdaki kategorilerde kişisel verileriniz işlenebilmektedir:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm leading-relaxed pl-4">
          <li>Kimlik bilgileri (ad, soyad, TCKN)</li>
          <li>İletişim bilgileri (e-posta, telefon, adres)</li>
          <li>Müşteri işlem bilgileri (sipariş, fatura, ödeme kayıtları)</li>
          <li>İşlem güvenliği bilgileri (IP adresi, log kayıtları, oturum bilgileri)</li>
          <li>Görsel ve dijital dosyalar (proje görselleri, 3D modeller)</li>
        </ul>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">Verilerin Toplanma Yöntemi ve Hukuki Sebebi</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Kişisel verileriniz, Platform üzerinden elektronik ortamda, çerezler, kayıt formları,
          hizmet kullanım verileri ve e-posta yoluyla toplanmaktadır. Verileriniz, KVKK'nın
          5. ve 6. maddelerinde belirtilen aşağıdaki hukuki sebeplere dayanarak işlenmektedir:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm leading-relaxed mt-4 pl-4">
          <li>Kanunlarda açıkça öngörülmesi,</li>
          <li>Sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması,</li>
          <li>Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi,</li>
          <li>İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla meşru menfaatlerimiz,</li>
          <li>Açık rızanız (gerekli olan hallerde).</li>
        </ul>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">Haklarınız</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-400 text-sm leading-relaxed pl-4">
          <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
          <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
          <li>İşlenme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme,</li>
          <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,</li>
          <li>Eksik veya yanlış işlenmesi halinde düzeltilmesini isteme,</li>
          <li>KVKK 7. madde kapsamında silinmesini veya yok edilmesini isteme,</li>
          <li>Aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
          <li>İşlenmesine itiraz etme,</li>
          <li>Kanuna aykırı işleme sebebiyle zararın giderilmesini talep etme.</li>
        </ol>
        <p className="text-gray-400 text-sm leading-relaxed mt-4">
          Başvurularınızı <strong className="text-white">info@nebulanovagames.com</strong> adresine iletebilirsiniz.
          Başvurular 30 gün içinde ücretsiz olarak sonuçlandırılır.
        </p>
      </section>
    </LegalLayout>
  );
}


/* ─── Kullanım Koşulları ───────────────────────────────────── */

export function KullanimKosullari() {
  return (
    <LegalLayout
      title="Kullanım Koşulları"
      description="Archilya platformu kullanım koşulları — haklar, yükümlülükler, fikri mülkiyet ve sorumluluk sınırlamaları."
      date="1 Mart 2025"
    >
      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">1. Taraflar ve Kapsam</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          İşbu Kullanım Koşulları ("Koşullar"), Archilya platformunu ("Platform")
          kullanan gerçek veya tüzel kişi ("Kullanıcı") ile <strong className="text-white">NEBULA NOVA GAMES
          DIŞ TİCARET LİMİTED ŞİRKETİ</strong> ("Şirket") arasındaki ilişkiyi düzenler.
          Platformu kullanarak Kullanıcı, bu Koşulları kabul etmiş sayılır.
        </p>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">2. Tanımlar</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm leading-relaxed pl-4">
          <li><strong className="text-white">Platform:</strong> Archilya web sitesi (archilya.com) ve alt alan adları.</li>
          <li><strong className="text-white">Hizmet:</strong> Platform üzerinden sunulan premium render, VR sunum, pixel streaming, 360 sanal tur ve ilgili tüm dijital hizmetler.</li>
          <li><strong className="text-white">Kullanıcı:</strong> Platform'a kayıt olan veya ziyaret eden gerçek/tüzel kişi.</li>
          <li><strong className="text-white">İçerik:</strong> Kullanıcı tarafından yüklenen dosyalar, görseller, metinler ve diğer veriler.</li>
        </ul>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">3. Hesap Kaydı ve Güvenlik</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Kullanıcı, Platform'a kayıt olurken doğru, güncel ve eksiksiz bilgi vermekle
          yükümlüdür. Hesap bilgilerinin gizliliği ve hesap altında gerçekleşen tüm işlemlerden
          Kullanıcı sorumludur. Şirket, güvenlik ihlali durumunda hesabı askıya alma veya
          sonlandırma hakkını saklı tutar.
        </p>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">4. Hizmet Kullanımı</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          Kullanıcı, Platform'u yalnızca yasal amaçlarla ve bu Koşullara uygun şekilde
          kullanmayı kabul eder. Kullanıcı aşağıdaki faaliyetlerde bulunamaz:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm leading-relaxed pl-4">
          <li>Platform'un güvenlik önlemlerini aşmaya veya bypass etmeye çalışmak,</li>
          <li>Platform üzerinden yasa dışı, tehdit edici, taciz edici veya iftira niteliğinde içerik paylaşmak,</li>
          <li>Platform'un altyapısına aşırı yük bindirecek faaliyetlerde bulunmak,</li>
          <li>Başka kullanıcıların hesaplarına yetkisiz erişim sağlamaya çalışmak,</li>
          <li>Platform'u tersine mühendislik, kaynak kodu analizi veya kopyalama amacıyla kullanmak.</li>
        </ul>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">5. Fikri Mülkiyet Hakları</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          Platform'un tüm kod, tasarım, logo, içerik, yazılım ve diğer unsurları Şirket'e
          aittir ve fikri mülkiyet mevzuatı kapsamında korunmaktadır. Kullanıcı tarafından
          Platform'a yüklenen içeriklerin mülkiyeti Kullanıcı'ya ait olmaya devam eder.
          Kullanıcı, yüklediği içeriklerin hizmetin sunumu amacıyla Şirket tarafından işlenmesine
          ve saklanmasına izin verir.
        </p>
        <p className="text-gray-400 text-sm leading-relaxed">
          Kullanıcı, Platform'a yüklediği içeriklerin üçüncü kişilerin fikri mülkiyet
          haklarını ihlal etmediğini beyan ve taahhüt eder. Aksi durumda doğacak tüm hukuki
          sorumluluk Kullanıcı'ya aittir.
        </p>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">6. Ücretlendirme ve Ödeme</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Platform üzerinde sunulan hizmetlerin ücretlendirmesi, Platform'da belirtilen fiyat
          listesine tabidir. Ödemeler, belirtilen ödeme yöntemleri aracılığıyla peşin olarak
          tahsil edilir. Şirket, fiyatlandırmada önceden bildirim yapmak kaydıyla değişiklik
          yapma hakkını saklı tutar. Vergi, resim ve harçlar Kullanıcı'ya aittir.
        </p>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">7. Garanti ve Sorumluluk Reddi</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Platform hizmetleri "olduğu gibi" ve "mevcut olduğu kadarıyla" sunulmaktadır.
          Şirket, Platform'un kesintisiz, hatasız veya güvenli olacağını garanti etmez.
          Yürürlükteki yasaların izin verdiği en geniş ölçüde, Şirket'in sorumluluğu,
          Kullanıcı'nın son 12 ay içinde Şirket'e ödediği toplam ücret ile sınırlıdır.
          Şirket, dolaylı, arızi veya sonuç olarak ortaya çıkan zararlardan sorumlu değildir.
        </p>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">8. Fesih</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Kullanıcı, hesabını dilediği zaman sonlandırabilir. Şirket, bu Koşullar'ın ihlali
          halinde Kullanıcı'nın hesabını önceden bildirim yapmaksızın askıya alma veya
          sonlandırma hakkına sahiptir. Fesih durumunda, Kullanıcı'nın önceden ödediği
          ücretler iade edilmez.
        </p>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">9. Uygulanacak Hukuk ve Yetki</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          İşbu Koşullar, Türkiye Cumhuriyeti yasalarına tabidir ve yorumlanmasında Türk hukuku
          uygulanır. Uyuşmazlıklarda İstanbul Mahkemeleri ve İcra Daireleri yetkilidir.
        </p>
      </section>
    </LegalLayout>
  );
}


/* ─── İptal ve İade Politikası ─────────────────────────────── */

export function IptalIade() {
  return (
    <LegalLayout
      title="İptal ve İade Politikası"
      description="Archilya dijital hizmetlerine ilişkin iptal, iade ve cayma hakkı koşulları."
      date="1 Mart 2025"
    >
      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">1. Genel Hükümler</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          İşbu İptal ve İade Politikası, <strong className="text-white">NEBULA NOVA GAMES DIŞ TİCARET LİMİTED
          ŞİRKETİ</strong> tarafından <strong className="text-white">Archilya</strong> platformu üzerinden sunulan
          dijital hizmetlerin iptali, iadesi ve cayma hakkının kullanımına ilişkin
          usul ve esasları belirlemektedir.
        </p>
        <p className="text-gray-400 text-sm leading-relaxed">
          Kullanıcı, satın alma işlemi gerçekleştirmeden önce işbu politikayı dikkatlice
          okumalıdır. Satın alma işleminin tamamlanması, politikanın okunduğu ve kabul
          edildiği anlamına gelir.
        </p>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">2. Hizmet Kategorileri</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          Platform üzerinde sunulan hizmetler aşağıdaki kategorilere ayrılmaktadır:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm leading-relaxed pl-4">
          <li><strong className="text-white">Premium Render Kredileri:</strong> Tek kullanımlık render işleme kredileri.</li>
          <li><strong className="text-white">Premium Studio Aboneliği:</strong> Aylık/yıllık abonelik bazlı hizmet paketleri.</li>
          <li><strong className="text-white">VR Sunum ve Pixel Streaming:</strong> Proje bazlı sunum hizmetleri.</li>
          <li><strong className="text-white">Franchise Başvuru ve Lisans:</strong> İş ortaklığı ve lisans ücretleri.</li>
        </ul>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">3. Cayma Hakkı</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği
          uyarınca tüketici, siparişin teslim tarihinden itibaren <strong className="text-white">14 (on dört) gün</strong>
          içinde cayma hakkına sahiptir. Ancak, aşağıdaki istisnalar geçerlidir:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm leading-relaxed pl-4">
          <li>Dijital içerikler ve anında ifa edilen hizmetler (tüketicinin onayıyla başlatılan işlemler),</li>
          <li>Kullanıcının talebiyle hazırlanan özelleştirilmiş hizmetler,</li>
          <li>Teslim edildikten sonra iade edilemeyecek nitelikteki dijital ürünler.</li>
        </ul>
        <p className="text-gray-400 text-sm leading-relaxed mt-4">
          Cayma hakkının kullanılması için Kullanıcı'nın bu yöndeki iradesini açık bir şekilde
          <strong className="text-white">info@nebulanovagames.com</strong> adresine iletmesi gerekmektedir.
        </p>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">4. İade Koşulları</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          İade taleplerinde aşağıdaki koşullar uygulanır:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm leading-relaxed pl-4">
          <li>Premium render kredileri, kullanılmamış olmaları kaydıyla 14 gün içinde iade edilebilir.</li>
          <li>Abonelik iadeleri, abonelik döneminin kalan kısmıyla orantılı olarak hesaplanır.</li>
          <li>VR sunum ve pixel streaming hizmetleri, teslim edilmiş çıktılar için iade edilemez.</li>
          <li>Franchise başvuru ücretleri, başvuru değerlendirmeye alındıktan sonra iade edilmez.</li>
        </ul>
        <p className="text-gray-400 text-sm leading-relaxed mt-4">
          İade onaylandığında, ödemenin yapıldığı kanala bağlı olarak 7-14 iş günü içinde
          iade işlemi gerçekleştirilir.
        </p>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">5. İptal Politikası</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Kullanıcı, abonelik hizmetlerini dilediği zaman iptal edebilir. İptal durumunda
          abonelik, mevcut fatura döneminin sonunda geçerliliğini yitirir ve bir sonraki
          dönem için ücret tahsil edilmez. Kısmi dönemler için ücret iadesi yapılmaz.
        </p>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">6. İletişim</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          İptal ve iade talepleriniz için <strong className="text-white">info@nebulanovagames.com</strong> adresine
          e-posta gönderebilir veya <strong className="text-white">0 (282) 606 06 39</strong> numaralı telefondan
          bizimle iletişime geçebilirsiniz.
        </p>
      </section>
    </LegalLayout>
  );
}


/* ─── Mesafeli Satış Sözleşmesi ────────────────────────────── */

export function MesafeliSatis() {
  return (
    <LegalLayout
      title="Mesafeli Satış Sözleşmesi"
      description="Archilya platformu üzerinden sunulan dijital hizmetlere ilişkin mesafeli satış sözleşmesi — tüketici hakları, ödeme, teslimat ve cayma hakkı."
      date="1 Mart 2025"
    >
      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">Madde 1 — Taraflar</h2>
        <div className="text-gray-400 text-sm leading-relaxed space-y-2">
          <p><strong className="text-white">Satıcı:</strong> NEBULA NOVA GAMES DIŞ TİCARET LİMİTED ŞİRKETİ</p>
          <p><strong className="text-white">Adres:</strong> Silahtarağa Mah. Üniversite 1. Sk. No:13/1 İç Kapı No:Z109, 59000 Çorlu / TEKİRDAĞ</p>
          <p><strong className="text-white">MERSİS No:</strong> 0630135919700001</p>
          <p><strong className="text-white">E-posta:</strong> info@nebulanovagames.com</p>
          <p><strong className="text-white">Telefon:</strong> 0 (282) 606 06 39</p>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mt-4">
          <strong className="text-white">Alıcı:</strong> Platform üzerinden satın alma işlemi gerçekleştiren kullanıcı.
        </p>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">Madde 2 — Sözleşmenin Konusu</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          İşbu sözleşme, Alıcı'nın Satıcı'ya ait Archilya platformu üzerinden elektronik
          ortamda sipariş verdiği dijital hizmetlerin satışı, teslimi, ödeme koşulları ve
          tarafların hak ve yükümlülüklerini düzenlemektedir.
        </p>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">Madde 3 — Sipariş ve Kabul</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Alıcı, Platform üzerinde seçtiği hizmet için sipariş oluşturur ve ödeme işlemini
          gerçekleştirir. Siparişin onaylanması ve hizmetin ifası, ödemenin başarıyla
          tamamlanmasına bağlıdır. Alıcı, sipariş onayını e-posta yoluyla alır. Siparişin
          onaylanmasıyla birlikte işbu sözleşme yürürlüğe girer.
        </p>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">Madde 4 — Hizmetin İfası ve Teslim</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          Dijital hizmetlerin ifası, siparişin onaylanmasını takiben belirtilen süre içinde
          gerçekleştirilir:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm leading-relaxed pl-4">
          <li><strong className="text-white">Premium Render:</strong> Sipariş onayı sonrası kredi hesaba tanımlanır.</li>
          <li><strong className="text-white">Premium Studio Aboneliği:</strong> Anında aktifleşir, kullanıma hazırdır.</li>
          <li><strong className="text-white">VR Sunum / Pixel Streaming:</strong> Proje teslimi sonrası 1-5 iş günü içinde hazırlanır.</li>
        </ul>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">Madde 5 — Ödeme</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Ödeme, Platform üzerinde belirtilen ödeme yöntemleri (kredi kartı, banka kartı,
          banka havalesi) aracılığıyla peşin olarak yapılır. Kredi kartı ile ödemelerde
          taksit seçenekleri varsa, bu seçenekler ödeme sayfasında belirtilir. Alıcı'nın
          kullandığı kredi kartının yetkisiz kullanımından doğan zararlardan Satıcı sorumlu
          değildir.
        </p>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">Madde 6 — Cayma Hakkı</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          Alıcı, 6502 sayılı Kanun ve Mesafeli Sözleşmeler Yönetmeliği kapsamında, hizmetin
          ifasına ilişkin onay vermediği sürece 14 gün içinde cayma hakkına sahiptir.
          Dijital hizmetlerin, Alıcı'nın açık onayı ile ifasına başlanması halinde cayma
          hakkı kullanılamaz.
        </p>
        <p className="text-gray-400 text-sm leading-relaxed">
          Cayma hakkının kullanılması için Alıcı, durumu açıkça belirten bir bildirimi
          <strong className="text-white">info@nebulanovagames.com</strong> adresine iletmelidir.
        </p>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">Madde 7 — Yetki</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          İşbu sözleşmeden doğan uyuşmazlıklarda Türkiye Cumhuriyeti yasaları uygulanır.
          Tüketici uyuşmazlıklarında, Tüketici Hakem Heyetleri ve Tüketici Mahkemeleri yetkilidir.
        </p>
      </section>
    </LegalLayout>
  );
}


/* ─── Çerez Politikası ─────────────────────────────────────── */

export function CerezPolitikasi() {
  return (
    <LegalLayout
      title="Çerez Politikası"
      description="Archilya internet sitesinde kullanılan çerezler ve benzer teknolojilere ilişkin politika."
      date="1 Mart 2025"
    >
      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">1. Çerez Nedir?</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Çerez ("cookie"), bir web sitesini ziyaret ettiğinizde tarayıcınız aracılığıyla
          cihazınıza kaydedilen küçük metin dosyalarıdır. Çerezler, web sitesinin düzgün
          çalışması, kullanıcı tercihlerinin hatırlanması, site trafiğinin analiz edilmesi
          ve kişiselleştirilmiş içerik sunulması gibi amaçlarla kullanılır.
        </p>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">2. Kullanılan Çerez Türleri</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          Platformumuzda aşağıdaki kategorilerde çerezler kullanılmaktadır:
        </p>
        <ul className="list-disc list-inside space-y-3 text-gray-400 text-sm leading-relaxed pl-4">
          <li>
            <strong className="text-white">Zorunlu Çerezler:</strong> Platform'un temel işlevlerini yerine getirebilmesi
            için gerekli olan çerezlerdir. Oturum yönetimi, güvenlik ve sayfa navigasyonu
            bu çerezler sayesinde sağlanır. Bu çerezler olmadan Platform düzgün çalışmayabilir.
          </li>
          <li>
            <strong className="text-white">Analitik Çerezler:</strong> Ziyaretçi sayısı, sayfa görüntüleme sayısı,
            trafik kaynağı gibi istatistiksel verileri toplamak için kullanılır. Google Analytics
            tarafından yerleştirilen bu çerezler, Platform'un performansını ölçmemize ve
            kullanıcı deneyimini iyileştirmemize yardımcı olur.
          </li>
          <li>
            <strong className="text-white">İşlevsellik Çerezleri:</strong> Kullanıcı tercihlerini (dil seçimi,
            oturum bilgileri) hatırlayarak daha kişisel bir deneyim sunulmasını sağlar.
          </li>
          <li>
            <strong className="text-white">Pazarlama ve Reklam Çerezleri:</strong> Kullanıcıların ilgi alanlarına
            göre hedeflenmiş reklamlar göstermek için kullanılır. Bu çerezler, üçüncü taraf
            reklam ağları tarafından yerleştirilebilir.
          </li>
        </ul>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">3. Çerez Yönetimi</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Çerez tercihlerinizi, tarayıcı ayarlarınızdan dilediğiniz zaman değiştirebilirsiniz.
          Çoğu web tarayıcısı, çerezleri varsayılan olarak kabul edecek şekilde ayarlanmıştır.
          Ancak, tarayıcı ayarlarınızı değiştirerek çerezleri reddedebilir veya belirli çerez
          türlerini engelleyebilirsiniz. Çerezleri devre dışı bırakmanız durumunda,
          Platform'un bazı özellikleri düzgün çalışmayabilir.
        </p>
        <p className="text-gray-400 text-sm leading-relaxed mt-4">
          Popüler tarayıcılarda çerez ayarlarını yönetmek için:
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm leading-relaxed mt-2 pl-4">
          <li>Google Chrome: Ayarlar &gt; Gizlilik ve Güvenlik &gt; Çerezler</li>
          <li>Mozilla Firefox: Seçenekler &gt; Gizlilik & Güvenlik &gt; Çerezler</li>
          <li>Safari: Tercihler &gt; Gizlilik &gt; Çerezler</li>
          <li>Microsoft Edge: Ayarlar &gt; Çerezler ve Site İzinleri</li>
        </ul>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">4. Google Analytics</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Platformumuz, kullanım istatistiklerini analiz etmek amacıyla Google Analytics
          hizmetini kullanmaktadır. Google Analytics tarafından toplanan verilerin nasıl
          işlendiği hakkında detaylı bilgiye Google'ın Gizlilik Politikası'ndan
          ulaşabilirsiniz. Google Analytics'i devre dışı bırakmak için
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">Google Analytics Opt-out</a>
          eklentisini kullanabilirsiniz.
        </p>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">5. Güncellemeler</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          İşbu Çerez Politikası, zaman zaman güncellenebilir. Güncellemeler, politikanın
          Platform'da yayınlanmasıyla birlikte yürürlüğe girer. Çerez kullanımımız
          hakkında sorularınız varsa, <strong className="text-white">info@nebulanovagames.com</strong> adresinden
          bizimle iletişime geçebilirsiniz.
        </p>
      </section>
    </LegalLayout>
  );
}


/* ─── Ticari Elektronik İleti Onayı ────────────────────────── */

export function TicariElektronikIletiOnayi() {
  return (
    <LegalLayout
      title="Ticari Elektronik İleti Onayı"
      description="Archilya tarafından gönderilecek ticari elektronik iletilere ilişkin açık rıza metni."
      date="1 Mart 2025"
    >
      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">Açık Rıza Beyanı</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          6563 sayılı Elektronik Ticaretin Düzenlenmesi Hakkında Kanun ve Ticari Elektronik
          İletiler Hakkında Yönetmelik kapsamında, aşağıda belirtilen içeriklerde ticari
          elektronik ileti almak üzere açık rızamı beyan ederim.
        </p>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">İleti İçerikleri</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          Tarafıma aşağıdaki amaçlarla ticari elektronik ileti gönderilmesine onay veriyorum:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm leading-relaxed pl-4">
          <li>Platform hizmetleri ve ürünleri hakkında tanıtım ve pazarlama mesajları,</li>
          <li>Kampanya, indirim, promosyon ve fırsat bildirimleri,</li>
          <li>Yeni özellikler, güncellemeler ve hizmet duyuruları,</li>
          <li>Etkinlik, webinar ve içerik önerileri,</li>
          <li>Anket, memnuniyet ölçümü ve geri bildirim talepleri,</li>
          <li>Franchise ve iş ortaklığı fırsat duyuruları.</li>
        </ul>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">İleti Kanalları</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Ticari elektronik iletiler; e-posta, SMS, telefon araması ve benzeri elektronik
          iletişim kanalları aracılığıyla gönderilebilir. İletişim bilgilerimin bu amaçla
          işlenmesine ve yukarıda belirtilen kanallar aracılığıyla tarafıma ticari elektronik
          ileti gönderilmesine açık rıza gösteriyorum.
        </p>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">Geri Çekme Hakkı</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Bu onayımı dilediğim zaman, herhangi bir gerekçe göstermeksizin geri çekme hakkına
          sahibim. Onayımı geri çekmek için her ileti altında yer alan "Abonelikten Ayrıl"
          bağlantısını kullanabilir veya <strong className="text-white">info@nebulanovagames.com</strong> adresine
          e-posta gönderebilirim. Onayın geri çekilmesi, geri çekme öncesinde yapılan
          iletişim faaliyetlerinin hukukiliğini etkilemez.
        </p>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">Veri İşleme</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Ticari elektronik ileti gönderimi kapsamında işlenen kişisel verilerim (ad, soyad,
          e-posta adresi, telefon numarası), KVKK Aydınlatma Metni'nde belirtilen esaslar
          çerçevesinde korunacaktır. Verilerim, yalnızca bu onay kapsamında belirtilen
          amaçlarla kullanılacak ve üçüncü kişilerle paylaşılmayacaktır.
        </p>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">Veri Sorumlusu</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          NEBULA NOVA GAMES DIŞ TİCARET LİMİTED ŞİRKETİ<br />
          Silahtarağa Mah. Üniversite 1. Sk. No:13/1 İç Kapı No:Z109, 59000 Çorlu / TEKİRDAĞ<br />
          E-posta: info@nebulanovagames.com
        </p>
      </section>
    </LegalLayout>
  );
}


/* ─── Gizlilik Koşulları ───────────────────────────────────── */

export function GizlilikKosullari() {
  return (
    <LegalLayout
      title="Gizlilik Koşulları"
      description="Archilya platformunun kullanımı sırasında uyulması gereken gizlilik taahhütleri ve veri güvenliği kuralları."
      date="1 Mart 2025"
    >
      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">1. Amaç ve Kapsam</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          İşbu Gizlilik Koşulları, Archilya platformu üzerinden sunulan hizmetler kapsamında
          kullanıcı bilgilerinin toplanması, işlenmesi, saklanması ve paylaşılmasına ilişkin
          esasları belirlemektedir. Bu koşullar, Platform'u ziyaret eden tüm kullanıcılar
          için geçerlidir.
        </p>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">2. Bilgi Toplama</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          Platformumuz, kullanıcılarından aşağıdaki yöntemlerle bilgi toplamaktadır:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm leading-relaxed pl-4">
          <li>Kayıt formları aracılığıyla kullanıcının sağladığı bilgiler,</li>
          <li>Hizmet kullanımı sırasında otomatik olarak toplanan teknik veriler,</li>
          <li>Çerezler ve benzer izleme teknolojileri,</li>
          <li>İletişim ve destek talepleri sırasında sağlanan bilgiler,</li>
          <li>Ödeme işlemleri sırasında toplanan finansal bilgiler.</li>
        </ul>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">3. Bilgi Kullanımı</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          Toplanan bilgiler aşağıdaki amaçlarla kullanılmaktadır:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm leading-relaxed pl-4">
          <li>Hizmetlerin sağlanması, yönetilmesi ve geliştirilmesi,</li>
          <li>Kullanıcı hesaplarının oluşturulması ve güvenliğinin sağlanması,</li>
          <li>Ödeme işlemlerinin gerçekleştirilmesi ve faturalandırma,</li>
          <li>Kullanıcı taleplerinin yanıtlanması ve müşteri desteği,</li>
          <li>Platform performansının analiz edilmesi ve iyileştirilmesi,</li>
          <li>Yasal yükümlülüklerin yerine getirilmesi.</li>
        </ul>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">4. Veri Güvenliği</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Kişisel verilerinizin güvenliğini sağlamak amacıyla, KVKK ve ilgili mevzuata uygun
          olarak gerekli teknik ve idari tedbirler alınmaktadır. Bu tedbirler arasında veri
          şifreleme, erişim kontrolleri, güvenlik duvarları ve düzenli güvenlik denetimleri
          yer almaktadır. Ancak, internet üzerinden veri iletiminin tam güvenliğinin
          sağlanamayacağını kabul etmekteyiz.
        </p>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">5. Kullanıcı Hakları</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Kullanıcılar, kişisel verilerine ilişkin olarak KVKK kapsamında tanınan tüm haklara
          sahiptir. Bu haklar arasında verilere erişim, düzeltme, silme, işlemeyi kısıtlama,
          veri taşınabilirliği ve itiraz etme hakları bulunmaktadır. Haklarınızı kullanmak
          için <strong className="text-white">info@nebulanovagames.com</strong> adresine başvurabilirsiniz.
        </p>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">6. Güncelleme ve İletişim</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Gizlilik Koşulları, ihtiyaç duyulması halinde güncellenebilir. Güncel koşullar
          Platform'da yayınlandığı tarihte yürürlüğe girer. Sorularınız için
          <strong className="text-white">info@nebulanovagames.com</strong> adresinden bizimle iletişime geçebilirsiniz.
        </p>
      </section>
    </LegalLayout>
  );
}


/* ─── Mimarlık Hizmet Sözleşmesi ───────────────────────────── */

export function MimarlikHizmetSozlesmesi() {
  return (
    <LegalLayout
      title="Mimarlık Hizmet Sözleşmesi"
      description="Archilya premium görselleştirme ve VR sunum hizmetlerine ilişkin mimarlık hizmet sözleşmesi."
      date="1 Mart 2025"
    >
      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">Madde 1 — Taraflar</h2>
        <div className="text-gray-400 text-sm leading-relaxed space-y-2">
          <p><strong className="text-white">İş Sahibi:</strong> Archilya platformu üzerinden hizmet satın alan kullanıcı.</p>
          <p><strong className="text-white">Yüklenici:</strong> NEBULA NOVA GAMES DIŞ TİCARET LİMİTED ŞİRKETİ</p>
          <p><strong className="text-white">Adres:</strong> Silahtarağa Mah. Üniversite 1. Sk. No:13/1 İç Kapı No:Z109, 59000 Çorlu / TEKİRDAĞ</p>
          <p><strong className="text-white">E-posta:</strong> info@nebulanovagames.com</p>
          <p><strong className="text-white">Telefon:</strong> 0 (282) 606 06 39</p>
        </div>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">Madde 2 — Sözleşmenin Konusu</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          İşbu sözleşme, İş Sahibi tarafından Archilya platformu üzerinden talep edilen
          premium görselleştirme (render), VR sunum, pixel streaming, 360 sanal tur ve
          diğer dijital hizmetlerin Yüklenici tarafından sağlanmasına ilişkin koşulları
          düzenlemektedir.
        </p>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">Madde 3 — İşin Kapsamı</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          Hizmetin kapsamı, İş Sahibi tarafından Platform üzerinden seçilen hizmet türüne
          ve belirtilen teknik gereksinimlere göre belirlenir. İşin kapsamına giren
          hizmetler şunlardır:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm leading-relaxed pl-4">
          <li>Premium fotorealistik render üretimi,</li>
          <li>3D model ve sahne optimizasyonu,</li>
          <li>VR sunum ve pixel streaming altyapısı,</li>
          <li>360 sanal tur hazırlama,</li>
          <li>Plan boyama ve görselleştirme,</li>
          <li>Doku ve malzeme üretimi.</li>
        </ul>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">Madde 4 — Teslimat ve Süre</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          Teslimat süreleri, hizmet türüne ve işin karmaşıklığına göre Platform üzerinde
          belirtilir. Teslimat, dijital dosyaların İş Sahibi'ne iletilmesi veya Platform
          üzerinden erişime açılması ile gerçekleşir.
        </p>
        <p className="text-gray-400 text-sm leading-relaxed">
          Revizyon talepleri, ilk teslimatı takiben belirtilen revizyon hakkı kapsamında
          değerlendirilir. Ek revizyonlar ek ücrete tabidir.
        </p>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">Madde 5 — Ödeme Koşulları</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Hizmet bedeli, sipariş anında peşin olarak tahsil edilir. Ödeme yöntemleri
          Platform üzerinde belirtilmiştir. İş Sahibi, ödeme yükümlülüğünü zamanında
          yerine getirmediği takdirde, Yüklenici hizmeti askıya alma hakkına sahiptir.
          Tüm ücretlere KDV ve diğer yasal yükümlülükler dahildir.
        </p>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">Madde 6 — Fikri Mülkiyet</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          İş Sahibi tarafından sağlanan tüm girdi dosyalarının (3D modeller, planlar,
          referans görseller) mülkiyeti İş Sahibi'ne aittir. Yüklenici tarafından
          üretilen çıktı dosyalarının (render görselleri, VR sunumlar) kullanım hakkı,
          bedelin tamamının ödenmesi koşuluyla İş Sahibi'ne devredilir.
        </p>
        <p className="text-gray-400 text-sm leading-relaxed">
          Yüklenici, üretilen çalışmaları portföy ve tanıtım amaçlı kullanma hakkına
          sahiptir. İş Sahibi'nin gizlilik talebi olması halinde bu hak kullanılmaz.
        </p>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">Madde 7 — Gizlilik</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Yüklenici, İş Sahibi'ne ait proje dosyalarını, görselleri ve diğer tüm
          bilgileri üçüncü kişilerle paylaşmayacağını, yalnızca hizmetin ifası amacıyla
          kullanacağını ve sözleşme sona erdikten sonra da gizlilik yükümlülüğünün devam
          edeceğini kabul eder.
        </p>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">Madde 8 — Sorumluluk</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Yüklenici, hizmeti özenle ve profesyonel standartlara uygun olarak sunmayı
          taahhüt eder. Ancak, İş Sahibi'nin sağladığı hatalı girdilerden veya
          beklenti farklılıklarından kaynaklanan uyuşmazlıklarda Yüklenici'nin
          sorumluluğu, hizmet bedelini aşamaz. Mücbir sebepler nedeniyle gecikme veya
          ifa imkansızlığı durumunda Yüklenici sorumlu tutulamaz.
        </p>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">Madde 9 — Sözleşmenin Feshi</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Taraflar, sözleşmeyi karşılıklı mutabakat ile her zaman feshedebilir. Yüklenici,
          İş Sahibi'nin sözleşme hükümlerine aykırı davranması halinde sözleşmeyi
          tek taraflı feshetme hakkına sahiptir. Fesih durumunda, ifa edilmeyen hizmet
          bedelleri İş Sahibi'ne iade edilir.
        </p>
      </section>

      <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
        <h2 className="font-serif text-2xl text-white italic mb-4">Madde 10 — Uyuşmazlık Çözümü</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          İşbu sözleşmeden doğan uyuşmazlıklarda Türkiye Cumhuriyeti yasaları uygulanır.
          Uyuşmazlıkların çözümünde İstanbul Mahkemeleri ve İcra Daireleri yetkilidir.
          Tüketici işlemlerinde Tüketici Hakem Heyetleri ve Tüketici Mahkemeleri'nin
          yetkisi saklıdır.
        </p>
      </section>
    </LegalLayout>
  );
}


/* ─── Hakkımızda ───────────────────────────────────────────── */


export function Hakkimizda() {
  useEffect(() => { setPageMeta("Hakkımızda", "Archilya — premium görselleştirme ve VR sunum çözümleri sunan teknoloji platformu."); }, []);

  return (
    <div className="min-h-screen bg-background text-white">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors text-xs uppercase tracking-widest mb-10">
            <ArrowLeft className="w-3.5 h-3.5" />
            Ana Sayfaya Dön
          </Link>
          <p className="text-primary text-[10px] uppercase tracking-[0.25em] mb-3">Archilya</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white italic mb-6">Hakkımızda</h1>

          <div className="space-y-12">
            <section>
              <p className="text-gray-300 text-base leading-relaxed">
                Archilya, profesyonel görselleştirme, VR sunum ve dijital sunum çözümleri sunan bir teknoloji platformudur.
                <strong className="text-white"> NEBULA NOVA GAMES DIŞ TİCARET LİMİTED ŞİRKETİ</strong> çatısı altında,
                mimari projelerin dijital dönüşümünü sağlamak vizyonuyla kurulmuştur.
              </p>
            </section>

            <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
              <h2 className="font-serif text-2xl text-white italic mb-4">Hikayemiz</h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Archilya, mimarlık ve emlak sektöründe sunum kalitesinin karar süreçlerindeki kritik rolünü
                fark eden bir ekip tarafından kuruldu. Geleneksel render süreçlerinin haftalar süren
                teslim süreleri ve yüksek maliyetleri, müşteri memnuniyetini ve proje akışını olumsuz
                etkiliyordu.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Bu sorunu çözmek için yola çıktık. Premium görselleştirme araçlarımız ve VR sunum
                teknolojimizle, projelerin müşteriye etkileyici bir deneyim olarak sunulmasını sağlıyoruz.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Franchise modelimizle, bu başarıyı daha geniş bir iş ağına yayarak, yerel pazarlarda
                premium hizmet standardını temsil edecek iş ortaklarıyla büyümeye devam ediyoruz.
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <section className="rounded-sm border border-primary/10 bg-primary/[0.02] p-8">
                <h2 className="font-serif text-2xl text-white italic mb-4">Misyonumuz</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Mimarlık ve emlak sektöründe sunum kalitesini yeniden tanımlamak. VR ve dijital
                  görselleştirme çözümlerimizle, projelerin müşteriye aktarımını hızlandırmak ve
                  karar süreçlerini iyileştirmek.
                </p>
              </section>
              <section className="rounded-sm border border-amber-400/10 bg-amber-400/[0.02] p-8">
                <h2 className="font-serif text-2xl text-white italic mb-4">Vizyonumuz</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Türkiye merkezli global bir marka olarak, premium görselleştirme ve VR sunum
                  alanında dünya çapında tanınan bir franchise ağı oluşturmak.
                </p>
              </section>
            </div>

            <section className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-8">
              <h2 className="font-serif text-2xl text-white italic mb-4">Künye</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                {[
                  { label: 'Firma Ünvanı', value: 'NEBULA NOVA GAMES DIŞ TİCARET LİMİTED ŞİRKETİ' },
                  { label: 'Adres', value: 'Silahtarağa Mah. Üniversite 1. Sk. No:13/1 İç Kapı No:Z109, 59000 Çorlu / TEKİRDAĞ' },
                  { label: 'Telefon', value: '0 (282) 606 06 39' },
                  { label: 'E-posta', value: 'info@nebulanovagames.com' },
                  { label: 'MERSİS No', value: '0630135919700001' },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
