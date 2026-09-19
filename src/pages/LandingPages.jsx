import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, MonitorPlay, BarChart3, Building2, Home, Globe, FileText, Phone, MapPin, CheckCircle, Star, Settings2, GraduationCap, MessageSquareHeart } from 'lucide-react';
import { setPageMeta, SEO_PAGES } from '../utils/seo';
import { logAnalyticsEvent } from '../firebase';
import FranchiseForm from '../components/FranchiseForm';
import Breadcrumb from '../components/Breadcrumb';
import RelatedLinks from '../components/RelatedLinks';
import { SectionHeading, CardGrid, StepList, ProseBlock } from '../components/ContentSection';
import FaqSection from '../components/FaqSection';

/* ─── Base Layout ─────────────────────────────────────────── */

function PageShell({ children, id, crumbs, related, relatedTitle }) {
  return (
    <section id={id} className="relative min-h-screen py-20 md:py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: 'radial-gradient(circle, #c6a87c 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        {crumbs && <Breadcrumb items={crumbs} className="mb-10" />}
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          {children}
        </motion.div>
        {related && <RelatedLinks title={relatedTitle} links={related} />}
      </div>
    </section>
  );
}

function CTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
      <Link to="/#contact" onClick={() => logAnalyticsEvent('cta_click', { label: 'landing_teklif', location: 'LandingPages' })} className="group inline-flex items-center gap-3 bg-primary text-black px-8 py-4 rounded-sm font-sans text-[11px] font-bold uppercase tracking-widest hover:bg-white transition-all duration-300">
        Teklif Al
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
      <Link to="/hizmetler" className="inline-flex items-center gap-2 bg-transparent border border-white/20 text-white px-8 py-4 rounded-sm font-sans text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
        Hizmetleri İncele
      </Link>
    </div>
  );
}

/* ─── AI Studio Landing ────────────────────────────────────── */

export function AiStudioLanding() {
  useEffect(() => { setPageMeta(SEO_PAGES.AI_STUDIO.title, SEO_PAGES.AI_STUDIO.desc); }, []);

  return (
    <PageShell
      id="premium-studio-landing"
      crumbs={[{ label: 'Hizmetler', to: '/hizmetler' }, { label: 'Görselleştirme ve Revizyon' }]}
      related={[
        { to: '/rehber/ai-render-revizyon', label: 'Görselleştirme ve Revizyon Rehberi' },
        { to: '/hizmetler', label: 'Tüm Hizmetler' },
        { to: '/vr-sunum', label: 'Canlı Sunum (Pixel Streaming)' },
      ]}
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-3 px-5 py-2 border border-primary/20 rounded-sm bg-primary/5 mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-primary">Archilya Mimari Destek</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif text-white italic mb-6 leading-tight">
          Görselleştirme ve Revizyon<br /><span className="text-primary/80">Tek Akışta.</span>
        </h1>
        <p className="text-gray-400 text-sm font-sans max-w-2xl mx-auto leading-relaxed mb-6">
          Fotogerçekçi görselleştirme, kontrollü revizyon ve plan renklendirme; mimari destek hizmetlerimizin bir parçası.
          SketchUp, Revit veya ham görselinizi bize iletin; profesyonel mimari çıktıya dönüşsün.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12">
          {[
            { label: 'Fotogerçekçi Görsel', desc: 'Yüksek kaliteli çıktı' },
            { label: 'Revizyon', desc: 'Kontrollü düzenleme' },
            { label: 'Plan Renklendirme', desc: 'Sunuma hazır pafta' },
            { label: 'Tasarım Analizi', desc: 'Kalite raporu' },
          ].map((item) => (
            <div key={item.label} className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-5 text-center">
              <p className="text-white text-sm font-serif italic mb-1">{item.label}</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link to="/hizmetler" className="inline-flex items-center gap-2 text-primary text-[11px] font-bold uppercase tracking-widest border-b border-primary/30 pb-1 hover:text-white hover:border-white transition-all">
            Hizmetleri İncele <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="mt-24">
          <SectionHeading
            eyebrow="Nasıl Çalışır"
            title="Görselden Sunuma Üç Adım."
            intro="Kapsamı netleştirir, üretir ve sunuma hazır teslim ederiz. Süreç boyunca tek bir mimari ekip yanınızda olur."
          />
          <StepList
            steps={[
              { title: 'Projeyi İletin', desc: 'SketchUp, Revit, CAD dosyanızı veya ham render görselinizi paylaşın; kapsamı ve teslim takvimini birlikte netleştirelim.' },
              { title: 'Üretim ve Kontrollü Revizyon', desc: 'Malzeme, ışık ve kompozisyon kararları referans stile sadık kalınarak uygulanır; revizyonlar hızlıca geri döner.' },
              { title: 'Sunuma Hazır Teslim', desc: 'Yüksek çözünürlüklü görseller, pafta düzeni ve isterseniz canlı sunum linkiyle projeyi doğrudan müşteri sunumuna taşıyın.' },
            ]}
          />
        </div>

        <div className="mt-24">
          <SectionHeading
            eyebrow="Kullanım Senaryoları"
            title="Kimler İçin Uygun?"
            intro="Görselleştirme ve revizyon desteği; üretim temposunu artırmak ve müşteriye hızlı dönmek isteyen her ölçekteki ekip için tasarlandı."
          />
          <CardGrid
            items={[
              { title: 'Mimarlık Ofisleri', desc: 'Yoğun teslim dönemlerinde render yükünü paylaşın; iç kaynağınızı tasarıma odaklı tutun.' },
              { title: 'Müteahhit ve Yatırımcı', desc: 'Satış ofisi ve lansman için tutarlı görsel dil üretin; yatırımcıya her seferinde aynı kalitede sunum yapın.' },
              { title: 'Emlak ve Pazarlama', desc: 'İlan ve kampanya görsellerini aynı marka diliyle çoğaltın; revizyonları hızla uygulayın.' },
              { title: 'İç Mimarlık', desc: 'Malzeme ve atmosfer denemelerini hızlıca görselleştirin, kararları müşteriyle birlikte netleştirin.' },
            ]}
            columns={4}
          />
        </div>

        <div className="mt-24">
          <SectionHeading
            eyebrow="Kapsam"
            title="Neleri Kapsar, Neleri Kapsamaz?"
            intro="Şeffaf kapsam, hızlı teslimin ön koşuludur. Ne aldığınızı baştan bilin."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
            <div className="rounded-sm border border-primary/15 bg-primary/[0.03] p-6">
              <h3 className="text-primary font-serif italic text-base mb-3">Kapsam İçinde</h3>
              <ul className="space-y-2 text-gray-400 text-xs leading-relaxed">
                <li>Fotogerçekçi görselleştirme ve kontrollü revizyon</li>
                <li>Malzeme, ışık ve kompozisyon iyileştirmesi</li>
                <li>Kat planı renklendirme ve pafta düzeni</li>
                <li>İsteğe bağlı canlı sunum (Pixel Streaming) bağlantısı</li>
              </ul>
            </div>
            <div className="rounded-sm border border-white/[0.08] bg-white/[0.015] p-6">
              <h3 className="text-gray-300 font-serif italic text-base mb-3">Kapsam Dışında</h3>
              <ul className="space-y-2 text-gray-500 text-xs leading-relaxed">
                <li>Statik görselden sıfırdan tasarım üretimi</li>
                <li>Ruhsat ve resmi kurum süreçleri (ayrı hizmetimizdir)</li>
                <li>Video kurgu, seslendirme ve reklam prodüksiyonu</li>
                <li>Üçüncü taraf yazılım lisansları</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <SectionHeading
            eyebrow="Derinlemesine"
            title="Neden Kontrollü Revizyon Fark Yaratır?"
          />
          <ProseBlock>
            <p>
              Mimari sunumda görsel, yalnızca estetik bir çıktı değil, bir karar aracıdır. Bu nedenle
              görselin güzel olması kadar doğru, tutarlı ve tekrar üretilebilir olması da gerekir.
              Geleneksel yöntemde her geri bildirim baştan bir render süreci başlatır; bu yaklaşım hem
              zaman hem de bütçe kaybına yol açar.
            </p>
            <p>
              Mimari destek yaklaşımında ise referans stil, malzeme dili ve ışık kurgusu korunur;
              yalnızca istenen öğe değiştirilir. Bu tutarlılık, müşterinin alternatifleri adil biçimde
              karşılaştırmasını sağlar. Böylece &quot;hangisi daha güzel&quot; sorusu, gerçek bir tasarım
              kararına dönüşür.
            </p>
            <p>
              Archilya ekibi, her projede teslim kalitesini aynı standarda bağlar. Projeniz birden fazla
              görselden oluşsa da görsel dili ve atmosfer bütünlüğü korunur; sunum seti tek elden çıkmış
              gibi görünür. Bu, özellikle farklı zamanlarda üretilen görsellerin bir arada kullanıldığı
              sunumlarda belirgin bir avantajdır.
            </p>
          </ProseBlock>
        </div>

        <FaqSection
          accent="primary"
          items={[
            { q: 'Hangi dosya formatlarıyla çalışıyorsunuz?', a: 'SketchUp, Revit, AutoCAD, Rhino ve ArchiCAD dosyalarının yanı sıra en az orta çözünürlüklü ham render görselleriyle de çalışabiliriz. Model gönderemiyorsanız görsel üzerinden ilerlenebilir.' },
            { q: 'Teslim süresi ne kadar?', a: 'Kapsam ve revizyon sayısına göre değişir. Tek görsel için genellikle 1-2 iş günü, kapsamlı bir set için 3-5 iş günü içinde ilk teslimi yapıyoruz. Acil işler için öncelikli takvim sunulabilir.' },
            { q: 'Kaç revizyon hakkım var?', a: 'Her teslimde yapı ve kompozisyonu bozmayan kontrollü revizyonlar dahildir. Kapsamlı revizyon paketi teklif aşamasında ayrıca belirtilir.' },
            { q: 'Görsellerin kullanım hakkı kime ait?', a: 'Ödeme tamamlandığında teslim edilen nihai görsellerin kullanım hakkı size aittir. Çalışma dosyaları bizde kalmak kaydıyla bu hak devredilir.' },
            { q: 'Ruhsat veya uygulama desteği de veriyor musunuz?', a: 'Evet. Görselleştirme hizmetimizden bağımsız olarak, imar durumundan iskâna kadar ruhsat ve resmi süreç yönetimi hizmetimiz mevcuttur.' },
            { q: 'Mevcut modelimi canlı sunuma dönüştürebilir misiniz?', a: 'Hazır model veya render çıktınız varsa, Pixel Streaming ile web üzerinden gezilebilir canlı sunuma dönüştürebiliriz. Detaylar canlı sunum hizmeti kapsamında planlanır.' },
          ]}
        />
      </div>
    </PageShell>
  );
}

/* ─── VR / Pixel Streaming Landing ────────────────────────── */

export function VrSunumLanding() {
  useEffect(() => { setPageMeta(SEO_PAGES.VR_SUNUM.title, SEO_PAGES.VR_SUNUM.desc); }, []);

  return (
    <PageShell
      id="vr-sunum-landing"
      crumbs={[{ label: 'Hizmetler', to: '/hizmetler' }, { label: 'Canlı Sunum' }]}
      related={[
        { to: '/rehber/vr-sunum-satis', label: 'Canlı Sunum Satış Rehberi' },
        { to: '/emlak-pixel-streaming-sunum', label: 'Emlak Pixel Streaming' },
        { to: '/hizmetler', label: 'Tüm Hizmetler' },
      ]}
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-3 px-5 py-2 border border-amber-400/20 rounded-sm bg-amber-400/5 mb-8">
          <MonitorPlay className="w-4 h-4 text-amber-400" />
          <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-400">Canlı Sunum Hizmeti</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif text-white italic mb-6 leading-tight">
          Canlı Sunum ile<br /><span className="text-amber-400/80">Projenizi Paylaşın.</span>
        </h1>
        <p className="text-gray-400 text-sm font-sans max-w-2xl mx-auto leading-relaxed mb-6">
          Canlı sunum (Pixel Streaming) ile yüksek kaliteli 3D sahnelerinizi doğrudan web tarayıcısına aktarın.
          Kurulum gerekmez; linki paylaşın, müşteriniz projenin içinde gezsin.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12">
          {[
            { label: 'Pixel Streaming', desc: 'Web’e 4K aktarım' },
            { label: '360 Panorama', desc: 'Sanal tur deneyimi' },
            { label: 'VR Yürüyüş', desc: '1:1 ölçek keşif' },
            { label: 'Etkileşim', desc: 'Malzeme değiştirme' },
          ].map((item) => (
            <div key={item.label} className="rounded-sm border border-amber-400/10 bg-white/[0.015] p-5 text-center">
              <p className="text-white text-sm font-serif italic mb-1">{item.label}</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link to="/#vr-sunum" className="inline-flex items-center gap-2 text-amber-400 text-[11px] font-bold uppercase tracking-widest border-b border-amber-400/30 pb-1 hover:text-white hover:border-white transition-all">
            Sunum Özelliklerini İncele <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="mt-24">
          <SectionHeading
            accent="amber"
            eyebrow="Nasıl Çalışır"
            title="Linki Paylaşın, Proje Açılsın."
            intro="Pixel Streaming, güçlü bir sunucuda işlenen 3D sahneyi görüntü akışı olarak izleyicinin tarayıcısına aktarır. İzleyicinin cihazı yalnızca görüntüyü oynatır."
          />
          <StepList
            steps={[
              { title: 'Sahne Hazırlanır', desc: 'Mevcut 3D modeliniz canlı sunuma optimize edilir; ışık, materyal ve kamera açıları ayarlanır.' },
              { title: 'Sunum Linki Üretilir', desc: 'Sahne bulut sunucuya alınır ve size özel, korumalı bir bağlantı oluşturulur.' },
              { title: 'Müşteri Keşfeder', desc: 'Müşteri linke tıklar; kurulum yapmadan projede gezinir, malzeme ve daire tiplerini dener.' },
              { title: 'Karar Hızlanır', desc: 'Toplantı sırasında seçimler netleşir; revizyon döngüsü ve onay süresi kısalır.' },
            ]}
          />
        </div>

        <div className="mt-24">
          <SectionHeading
            accent="amber"
            eyebrow="Kullanım Senaryoları"
            title="Hangi Durumlarda Kullanılır?"
          />
          <CardGrid
            items={[
              { title: 'Müşteri Toplantıları', desc: 'Ofiste veya uzaktan, aynı sahne üzerinde birlikte karar verin.' },
              { title: 'Satış Ofisi', desc: 'Ziyaretçinin kendi cihazından projeyi 4K kalitede gezmesini sağlayın.' },
              { title: 'Lansman ve Fuar', desc: 'Dizüstü veya tabletle, donanım kurulumu olmadan etkileyici sunum yapın.' },
              { title: 'Yurt Dışı Paydaşlar', desc: 'Şehir dışı ve yurt dışı paydaşlara tek linkle, zaman dilimi farkı gözetmeden ulaşın.' },
            ]}
            columns={4}
          />
        </div>

        <div className="mt-24">
          <SectionHeading
            accent="amber"
            eyebrow="Donanım ve Erişim"
            title="İzleyici Tarafında Ne Gerekiyor?"
            intro="Canlı sunumun en büyük avantajı: izleyen tarafta özel donanıma ihtiyaç duyulmamasıdır."
          />
          <CardGrid
            columns={2}
            items={[
              { title: 'İzleyici Tarafı', desc: 'Güncel bir tarayıcı yeterlidir. Güçlü ekran kartı, kurulum veya eklenti gerekmez; telefon ve tabletten de açılır.' },
              { title: 'Archilya Tarafı', desc: 'Sunucu altyapısı, sahne optimizasyonu ve bağlantı yönetimi tarafımızdan sağlanır; teknik yükü biz taşırız.' },
            ]}
          />
        </div>

        <div className="mt-24">
          <SectionHeading
            accent="amber"
            eyebrow="Derinlemesine"
            title="Bu Teknoloji Neden Fark Yaratır?"
          />
          <ProseBlock>
            <p>
              İyi bir sunumun amacı projeyi anlatmak değil, karar verdirmektir. Statik bir görselde
              izleyici yalnızca tasarımcının seçtiği tek açıyı görür; merak ettiği köşeyi, koridoru ya da
              cepheyi göremez. Bu eksiklik, toplantıdan sonraya taşınan sorular ve geciken onaylar üretir.
            </p>
            <p>
              Canlı sunumda ise izleyici mekânı kendi merakı doğrultusunda keşfeder. Sahne güçlü bir
              sunucuda işlendiği için izleyicinin cihaz donanımı önemsizleşir; sunum, ofisteki güçlü
              bilgisayarda da cep telefonunda da aynı kalitede açılır. Bu, sunum deneyimini standart hale
              getirir.
            </p>
            <p>
              Sonuç ölçülebilir: daha kısa toplantılar, daha net geri bildirim ve daha hızlı onay.
              Projenin soyut çizimlerden somut bir deneyime dönüşmesi, müşteriyle teknik detaylar yerine
              tasarımın kendisi üzerine konuşmayı mümkün kılar.
            </p>
          </ProseBlock>
        </div>

        <FaqSection
          accent="amber"
          items={[
            { q: 'İzleyici tarafında internet hızı ne olmalı?', a: 'Standart bir geniş bant veya 4G/5G bağlantı yeterlidir. Görüntü sunucudan aktarıldığı için izleyicinin cihaz gücü ve ekran kartı önemli değildir.' },
            { q: 'Projem ve modelim güvende mi?', a: 'Sahne erişimi yalnızca size özel, korumalı bağlantıyla açılır. Paylaşım kapsamı ve erişim süresi birlikte belirlenir; gerektiğinde gizlilik sözleşmesi imzalanır.' },
            { q: 'Aynı anda kaç kişi izleyebilir?', a: 'Eşzamanlı izleyici sayısı ihtiyaca göre planlanır. Az sayıda katılımcılı müşteri toplantılarından geniş lansman gruplarına kadar farklı senaryolar desteklenir.' },
            { q: 'Mobil cihazlarda çalışır mı?', a: 'Evet. Sunum mobil tarayıcılarda da çalışır; müşteri telefonundan veya tabletinden bağlantıya girip projeyi gezebilir.' },
            { q: 'Mevcut 3D modelim uygun mu?', a: 'SketchUp, Revit, 3ds Max, Unreal veya benzeri kaynaklardan gelen modeller genellikle uyarlanabilir. Uygunluk, kısa bir teknik değerlendirmeyle netleştirilir.' },
            { q: 'Sunumdan ekran görüntüsü veya kayıt alabilir miyim?', a: 'Toplantı sırasında ekran görüntüsü alınabilir. Yüksek çözünürlüklü statik çıktı gerekiyorsa görselleştirme hizmetimizle birlikte planlanabilir.' },
          ]}
        />
      </div>
    </PageShell>
  );
}

/* ─── Mimarlık Ofisleri Landing ────────────────────────────── */

export function MimarlikOfisleriLanding() {
  useEffect(() => { setPageMeta(SEO_PAGES.MIMARLIK_OFISLERI.title, SEO_PAGES.MIMARLIK_OFISLERI.desc); }, []);

  return (
    <PageShell
      id="mimarlik-landing"
      crumbs={[{ label: 'Çözümler' }, { label: 'Mimarlık Ofisleri' }]}
      related={[
        { to: '/hizmetler', label: 'Mimari Destek Hizmetleri' },
        { to: '/ai-studio', label: 'Görselleştirme ve Revizyon' },
        { to: '/trakya-ruhsat-is-takibi', label: 'Ruhsat İş Takibi' },
      ]}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-serif text-white italic mb-6 leading-tight">
          Mimarlık Ofisleri İçin<br /><span className="text-primary/80">Mimari Destek.</span>
        </h1>
        <p className="text-gray-400 text-sm font-sans max-w-2xl mx-auto leading-relaxed mb-8">
          Archilya; konsept tasarım, modelleme, görselleştirme ve ruhsat süreçleriyle mimarlık ofislerinin
          üretim akışını hızlandırır, müşteri sunumlarını güçlendirir.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-10">
          {[
            { icon: Sparkles, title: 'Konsept & Modelleme', desc: 'Konsept tasarım ve 3D modelleme ile üretim sürecinizi kısaltın.' },
            { icon: Globe, title: 'Görselleştirme & Canlı Sunum', desc: 'Fotogerçekçi görseller ve canlı sunumla müşteri onayını hızlandırın.' },
            { icon: BarChart3, title: 'Ruhsat & Uygulama', desc: 'İmar durumundan iskâna; ruhsat ve resmi süreçleri tek ekipten yönetin.' },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-6 text-center hover:border-primary/20 transition-all">
                <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <h2 className="text-white font-serif italic text-lg mb-2">{item.title}</h2>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-24">
          <SectionHeading
            eyebrow="Neden Archilya"
            title="Üretim Kapasitenizi Artırın."
            intro="Mimarlık ofisleri için mimari destek; kadro kurma maliyeti olmadan kapasiteyi esnek biçimde büyütmenin yoludur."
          />
          <CardGrid
            items={[
              { title: 'Dış Kaynak Yükünü Azaltın', desc: 'Render, modelleme ve sunum hazırlığını paylaşın; ekibinizi tasarım kararlarına odaklı tutun.' },
              { title: 'Teklif ve Sunum Hızı', desc: 'Konsept ve alternatifleri aynı gün görselleştirin; müşteriye rakiplerinizden önce dönün.' },
              { title: 'Ruhsat Süreç Desteği', desc: 'İmar durumundan iskâna resmi süreçleri tek muhataptan yönetin; sahada zaman kaybetmeyin.' },
              { title: 'Esnek Kapasite', desc: 'Proje yoğunluğuna göre kapasiteyi artırın ya da azaltın; sabit kadro maliyetine girmeyin.' },
            ]}
            columns={4}
          />
        </div>

        <div className="mt-24">
          <SectionHeading eyebrow="Çalışma Modeli" title="Birlikte Nasıl Çalışırız?" />
          <StepList
            steps={[
              { title: 'Kapsam ve Öncelik Görüşmesi', desc: 'İhtiyacınızı, teslim takvimini ve kalite beklentinizi birlikte netleştiririz.' },
              { title: 'Ekip Eşleştirme', desc: 'Projenize uygun mimari ekip atanır; iletişim ve onay akışı baştan tanımlanır.' },
              { title: 'Üretim ve Kalite Kontrol', desc: 'Üretim sürerken ara teslimlerle ilerleme paylaşılır; geri bildirimler kontrollü uygulanır.' },
              { title: 'Teslim ve Süreklilik', desc: 'Nihai dosyalar teslim edilir; devam eden projeler için aynı ekiple süreklilik sağlanır.' },
            ]}
          />
        </div>

        <div className="mt-24">
          <SectionHeading
            eyebrow="Derinlemesine"
            title="Kapasiteyi Kadro Kurmadan Büyütmek."
          />
          <ProseBlock>
            <p>
              Mimarlık ofislerinin en büyük darboğazı, talep dalgalıyken sabit kadro maliyetidir. Yoğun
              dönemde iş yetişmez, sakin dönemde ekip boş kalır. Mimari destek modeli, bu dengesizliği
              proje yoğunluğuna göre ölçeklenen bir üretim kapasitesiyle çözer.
            </p>
            <p>
              Dış kaynak kullanımının en yaygın endişesi, kalite standardının düşmesidir. Bu nedenle
              Archilya&apos;da teslim kalitesi ofisin kendi standardına bağlanır: dosya isimlendirme,
              katman düzeni, ölçek ve sunum dili ofisin alışkanlıklarına göre uyarlanır. Müşteri, sürecin
              dışarıdan desteklendiğini hissetmez.
            </p>
            <p>
              Uzun vadede bu model, ofisin daha fazla projeyi aynı çekirdek ekiple yönetmesini, teklif
              hazırlama hızını artırmasını ve yeni iş alırken kapasite tereddüdü yaşamamasını sağlar.
            </p>
          </ProseBlock>
        </div>

        <FaqSection
          items={[
            { q: 'Gizlilik ve NDA konusunda nasıl çalışıyorsunuz?', a: 'Proje dosyalarınız yalnızca atanan ekip tarafından görülür ve üçüncü taraflarla paylaşılmaz. Talep ettiğinizde gizlilik sözleşmesi (NDA) imzalanır.' },
            { q: 'Faturalama ve ödeme nasıl ilerliyor?', a: 'Kurumsal müşteriler için proje bazlı veya dönemsel faturalama yapılabilir. Ödeme planı teklif aşamasında iş kapsamına göre belirlenir.' },
            { q: 'Teslim süreleri nasıl belirleniyor?', a: 'Teslim süresi; proje kapsamı, görsel adedi ve revizyon sayısına göre teklifte net olarak taahhüt edilir. Acil projeler için öncelikli takvim sunulabilir.' },
            { q: 'Mevcut iş akışımıza entegre olabilir misiniz?', a: 'Evet. Kendi dosya isimlendirme, katman ve teslim standartlarınıza uyum sağlayabiliriz; süreklilik için ortak çalışma düzeni kurulur.' },
            { q: 'Hangi hizmetleri birlikte alabiliriz?', a: 'Konsept tasarım, modelleme, görselleştirme, canlı sunum, ruhsat süreç yönetimi ile mühendislik disiplin projelerini ihtiyaca göre tek kapsamda birleştirebiliriz.' },
            { q: 'Teklif almak için ne gerekiyor?', a: 'Proje kapsamını kısaca anlatmanız yeterli. İhtiyaç halinde dosyalarınızı inceleyip kapsam ve fiyatlandırma içeren bir teklif hazırlarız.' },
          ]}
        />
      </div>
    </PageShell>
  );
}

/* ─── Emlak VR Landing ─────────────────────────────────────── */

export function EmlakVrLanding() {
  useEffect(() => { setPageMeta(SEO_PAGES.EMLAK_VR.title, SEO_PAGES.EMLAK_VR.desc); }, []);

  return (
    <PageShell
      id="emlak-vr-landing"
      crumbs={[{ label: 'Emlak Çözümleri' }, { label: 'VR ve Canlı Sunum' }]}
      related={[
        { to: '/rehber/emlak-360-vr', label: 'Emlak 360 Sanal Tur Rehberi' },
        { to: '/emlak-pixel-streaming-sunum', label: 'Emlak Pixel Streaming' },
        { to: '/muteahhit-proje-sunumu', label: 'Müteahhit Proje Sunumu' },
      ]}
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-3 px-5 py-2 border border-amber-400/20 rounded-sm bg-amber-400/5 mb-8">
          <Building2 className="w-4 h-4 text-amber-400" />
          <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-400">Emlak Çözümleri</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif text-white italic mb-6 leading-tight">
          Emlak Projelerinizi<br /><span className="text-amber-400/80">Dijital Satış Ofisine Dönüştürün.</span>
        </h1>
        <p className="text-gray-400 text-sm font-sans max-w-2xl mx-auto leading-relaxed mb-6">
          Canlı sunum, pixel streaming ve 360 turlarla daire, villa ve ticari projelerinizi
          uzaktan gezilebilir deneyime dönüştürün. Alıcılar linke tıklar, projeyi keşfeder, karar verir.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mt-10">
          {[
            { title: 'Sanal Tur — Emlak', desc: 'Hazır 3D modeli canlı sunuma optimize edin, daire seçim ekranlı emlak sunumu oluşturun.' },
            { title: 'Modelden Sunuma — Emlak', desc: '2D plandan sıfırdan modelleyin, toplu daire tipleriyle satış ofisi kurun.' },
          ].map((item) => (
            <div key={item.title} className="rounded-sm border border-amber-400/10 bg-white/[0.015] p-6 text-left">
              <h2 className="text-white font-serif italic text-lg mb-2">{item.title}</h2>
              <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <SectionHeading
            accent="amber"
            eyebrow="Dijital Satış Ofisi"
            title="Proje Bitmeden Satışa Başlayın."
            intro="Emlak projelerinde dijital sunum; fiziksel showroom ve basılı broşür bağımlılığını azaltır, alıcıya projeyi her yerden deneyimletir."
          />
          <CardGrid
            items={[
              { title: 'Uzaktan Ön Eleme', desc: 'Alıcılar fiziksel ziyaret öncesi projeyi gezer; satış ekibiniz doğru müşteriyle zaman geçirir.' },
              { title: 'Tek Linkle Erişim', desc: 'Sınırsız sayıda potansiyel alıcıya aynı bağlantıyı paylaşın; ek kurulum gerekmez.' },
              { title: 'Daire Tipi Karşılaştırma', desc: 'A/B/C tiplerini ve kat/manzara alternatiflerini aynı ekranda karşılaştırın.' },
              { title: 'Ön Satış İmkanı', desc: 'Proje tamamlanmadan yatırımcı ve alıcıya somut bir deneyim sunun.' },
            ]}
            columns={4}
          />
        </div>

        <div className="mt-24">
          <SectionHeading accent="amber" eyebrow="Kullanım Senaryoları" title="Satış Sürecinde Nerede Kullanılır?" />
          <StepList
            steps={[
              { title: 'Lansman', desc: 'Yatırımcı ve basın lansmanında canlı sunum ve 360 tur ile projeyi etkileyici biçimde tanıtın.' },
              { title: 'Satış Ofisi', desc: 'Dijital showroom ile tüm daire tiplerini tek ekranda, tutarlı bir deneyimle sunun.' },
              { title: 'Uzaktan Satış', desc: 'Şehir dışı ve yurt dışı alıcılara canlı sunum yapın; mesafeyi satış engeli olmaktan çıkarın.' },
              { title: 'Kurumsal Yatırımcı', desc: 'Kurumsal yatırımcıya projeyi veri ve görsel bütünlüğüyle, hızlı ve net aktarın.' },
            ]}
          />
        </div>

        <div className="mt-24">
          <SectionHeading
            accent="amber"
            eyebrow="Derinlemesine"
            title="Dijital Satış Ofisi Nedir?"
          />
          <ProseBlock>
            <p>
              Geleneksel satış ofisi fiziksel bir mekân, basılı materyal ve sürekli personel gerektirir.
              Bu yapı hem maliyetlidir hem de erişimi, ofisin bulunduğu şehir ve çalışma saatleriyle
              sınırlar. Alıcı adayının ilgisini ölçmek için bile ciddi bir operasyon gerekir.
            </p>
            <p>
              Dijital satış ofisi ise projeyi tarayıcıya taşır. Alıcı, istediği an ve istediği yerden
              projeyi gezer; daire tiplerini karşılaştırır, manzara ve kat alternatiflerini inceler. Bu,
              ön eleme maliyetini belirgin biçimde düşürür ve satış ekibinin zamanını gerçekten ilgilenen
              müşteriye ayırmasını sağlar.
            </p>
            <p>
              En kritik kazanım ise zamandır: proje tamamlanmadan projeyi deneyimletmek, ön satışı
              mümkün kılar ve nakit akışını öne çeker. Bu yaklaşım, emlak projelerinde rekabet avantajını
              fiziksel ilerlemeden bağımsız hale getirir.
            </p>
          </ProseBlock>
        </div>

        <FaqSection
          accent="amber"
          items={[
            { q: 'Mevcut 3D modelimiz yoksa ne olur?', a: 'Kat planı ve mimari çizimlerden yola çıkarak sıfırdan modelleme yapabiliriz. Bu durumda 3D modelleme hizmetimiz de kapsama dahil edilir.' },
            { q: 'Alıcılar tek linkle birden fazla daireyi görebilir mi?', a: 'Evet. Aynı sunum içinde farklı daire tipleri ve kat alternatifleri arasında geçiş yapılacak şekilde kurgulanabilir.' },
            { q: 'Sunuma aynı anda kaç kişi katılabilir?', a: 'Müşteri toplantılarından geniş lansman gruplarına kadar farklı eşzamanlı katılımcı sayıları için planlama yapılabilir.' },
            { q: 'Mobil ve tablet uyumlu mu?', a: 'Evet. Alıcılar telefon ve tabletten bağlantıya girip projeyi gezebilir; ek uygulama kurmaları gerekmez.' },
            { q: 'İlan ve pazarlama kanallarıyla nasıl birleşir?', a: 'Sunum bağlantısı ilan ve kampanya kanallarınıza eklenebilir; ilgili alıcı doğrudan etkileşimli deneyime yönlendirilir.' },
            { q: 'Satış ekibimiz için eğitim veriyor musunuz?', a: 'Evet. Satış ekibinizin sunumu etkin kullanması için kısa bir eğitim ve kullanım rehberi sağlanır.' },
          ]}
        />
      </div>
    </PageShell>
  );
}

/* ─── Emlak Pixel Streaming Landing ────────────────────────── */

export function EmlakPixelStreamingLanding() {
  useEffect(() => { setPageMeta(SEO_PAGES.EMLAK_PIXEL.title, SEO_PAGES.EMLAK_PIXEL.desc); }, []);

  return (
    <PageShell
      id="emlak-pixel-landing"
      crumbs={[{ label: 'Emlak Çözümleri' }, { label: 'Pixel Streaming' }]}
      related={[
        { to: '/emlak-vr-sunum', label: 'Emlak VR ve Sanal Tur' },
        { to: '/rehber/emlak-360-vr', label: 'Emlak 360 Sanal Tur Rehberi' },
        { to: '/vr-sunum', label: 'Canlı Sunum Hizmeti' },
      ]}
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-3 px-5 py-2 border border-amber-400/20 rounded-sm bg-amber-400/5 mb-8">
          <MonitorPlay className="w-4 h-4 text-amber-400" />
          <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-400">Emlak Pixel Streaming</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif text-white italic mb-6 leading-tight">
          Emlak Sunumlarınızı<br /><span className="text-amber-400/80">Web’de 4K Yaşatın.</span>
        </h1>
        <p className="text-gray-400 text-sm font-sans max-w-2xl mx-auto leading-relaxed mb-6">
          Pixel Streaming ile emlak projelerinizi web tarayıcısına taşıyın. Kurulum gerektirmez, 
          güçlü bilgisayar şartı yoktur. Linki paylaşın, müşteri anında projeyi 4K kalitesinde gezsin.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mt-10">
          {[
            { label: 'Link Paylaş', desc: 'Tek tıkla sunum bağlantısı oluşturun' },
            { label: 'Anında Erişim', desc: 'Müşteri cihazından hemen açılır' },
            { label: '4K Kalite', desc: 'Yüksek çözünürlüklü görüntü aktarımı' },
          ].map((item) => (
            <div key={item.label} className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-5">
              <p className="text-white text-sm font-serif italic mb-1">{item.label}</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <SectionHeading
            accent="amber"
            eyebrow="Nasıl Çalışır"
            title="Kurulum Yok, İndirme Yok."
            intro="Görüntü güçlü bir sunucuda üretilir ve izleyiciye video akışı olarak ulaşır. Müşterinin cihazı yalnızca görüntüyü gösterir."
          />
          <StepList
            steps={[
              { title: 'Sunum Hazırlanır', desc: 'Projeniz sahne optimizasyonu ve materyal ayarlarıyla web sunumuna uygun hale getirilir.' },
              { title: 'Bağlantı Oluşturulur', desc: 'Size özel, korumalı bir sunum linki üretilir; erişim kapsamı birlikte belirlenir.' },
              { title: 'Müşteri Gezer', desc: 'Müşteri linke tıklar; tarayıcıda projeyi 4K kalitede gezer, daire tiplerini inceler.' },
            ]}
          />
        </div>

        <div className="mt-24">
          <SectionHeading accent="amber" eyebrow="Avantajlar" title="Emlak Sunumunda Neden Pixel Streaming?" />
          <CardGrid
            items={[
              { title: 'Cihazdan Bağımsız', desc: 'Alıcının bilgisayarı zayıf olsa bile sunum akıcı çalışır; karar kalitesi donanıma takılmaz.' },
              { title: 'Anında Güncelleme', desc: 'Model veya materyal değiştiğinde tüm bağlantılar otomatik olarak güncel sürümü gösterir.' },
              { title: 'İzlenebilir Sunum', desc: 'Hangi projenin ne kadar ilgi gördüğünü anlamak için kullanım verisi toplanabilir.' },
            ]}
          />
        </div>

        <div className="mt-24">
          <SectionHeading
            accent="amber"
            eyebrow="Derinlemesine"
            title="Neden 360 Tur Tek Başına Yetmez?"
          />
          <ProseBlock>
            <p>
              360 tur, sabit noktalardan panoramik bakış sunar. Kullanıcı belirlenen noktalar arasında
              geçiş yapar; mekânda serbestçe dolaşamaz, merdiven çıkamaz, farklı bir açıya geçemez.
              Projeyi genel hatlarıyla göstermek için etkilidir, ancak derinlemesine inceleme için
              yetersiz kalır.
            </p>
            <p>
              Pixel Streaming ise gerçek bir 3D sahnede serbest dolaşım sağlar. Alıcı koridorda yürür,
              bir daireye girer, pencereden bakar, malzeme seçeneklerini canlı olarak değiştirir. Emlakta
              bu fark, &quot;görmek&quot; ile &quot;yaşamak&quot; arasındaki farktır; ikincisi satışa çok
              daha yakındır.
            </p>
            <p>
              En verimli kurgu, iki teknolojiyi birlikte kullanmaktır: 360 tur ile hızlı ön keşif, canlı
              sunum ile derin inceleme. Böylece alıcı hem geniş bir tarama yapar hem de kararını somut
              bir deneyime dayandırır.
            </p>
          </ProseBlock>
        </div>

        <FaqSection
          accent="amber"
          items={[
            { q: 'Pixel Streaming ile 360 tur arasındaki fark nedir?', a: '360 tur sabit noktalardan panoramik gezinme sunar; Pixel Streaming ise gerçek 3D sahnede serbest dolaşım, malzeme değişimi ve canlı etkileşim sağlar.' },
            { q: 'Sunum bağlantısı kalıcı mı?', a: 'Bağlantı, sizinle belirlenen süre boyunca aktif kalır. Kampanya veya lansman süresince paylaşabilir, süre sonunda kapatabilirsiniz.' },
            { q: 'Yavaş internet bağlantısında çalışır mı?', a: 'Görüntü sunucudan akış olarak geldiği için makul bir geniş bant veya 4G/5G yeterlidir. Bağlantı kalitesi düşerse sistem çözünürlüğü otomatik uyarlar.' },
            { q: 'Aynı projede birden fazla daire tipi olabilir mi?', a: 'Evet. Tek sunum içinde farklı daire tipleri, katlar ve manzaralar arasında geçiş yapılacak şekilde kurgulanabilir.' },
            { q: 'Mevcut emlak sitemize gömülebilir mi?', a: 'Sunum bağlantısı sitenize veya pazarlama sayfalarınıza eklenebilir. Tam entegrasyon ihtiyacı ayrıca değerlendirilir.' },
            { q: 'Sunumun ölçüleri mimari olarak doğru mu?', a: 'Evet. Sunum, projenin gerçek ölçülerine göre hazırlanır; alıcı mekanları doğru oranlarda deneyimler.' },
          ]}
        />
      </div>
    </PageShell>
  );
}

/* ─── Franchise/Partner Landing ────────────────────────────── */

function FranchiseStep({ num, icon, title, desc }) {
  const Icon = icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative flex items-start gap-5 p-6 rounded-sm border border-white/[0.06] bg-white/[0.015]"
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 shrink-0">
        <span className="text-sm font-bold">{num}</span>
      </div>
      <div>
        <div className="w-10 h-10 rounded-sm bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center mb-3">
          <Icon className="w-5 h-5 text-emerald-400" />
        </div>
        <h3 className="text-lg font-serif text-white italic mb-1">{title}</h3>
        <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

export function FranchisePartnerLanding() {
  useEffect(() => { setPageMeta(SEO_PAGES.FRANCHISE_PARTNER.title, SEO_PAGES.FRANCHISE_PARTNER.desc); }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center justify-center py-20 md:py-32 bg-background overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-400/4 rounded-full blur-[140px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <Breadcrumb items={[{ label: 'Franchise & Partner' }]} className="mb-10" />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-3 px-5 py-2 border border-emerald-400/20 rounded-sm bg-emerald-400/5 mb-8">
              <Building2 className="w-4 h-4 text-emerald-400" />
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-emerald-400">Franchise & Partner</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-white italic mb-6 leading-tight">
              Archilya ile Büyüyün.<br /><span className="text-emerald-400/80">Franchise / Partner Olun.</span>
            </h1>
            <p className="text-gray-400 text-sm font-sans max-w-2xl mx-auto leading-relaxed mb-10">
              Archilya'nın mimari destek ekosistemini kendi şehrinizde temsil edin.
              Mimarlık ofisleri, emlak firmaları ve müteahhitlere yönelik çözümlerimizi geniş bir iş ağıyla buluşturuyoruz.
            </p>
            <a href="#franchise-form"
              className="inline-flex items-center gap-3 bg-emerald-500 text-white px-10 py-4 rounded-sm font-sans text-[11px] font-bold uppercase tracking-widest hover:bg-emerald-400 transition-all">
              Hemen Başvur <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Neden Archilya */}
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-16">
            <p className="text-emerald-400 text-[10px] uppercase tracking-[0.3em] mb-3">Neden Archilya</p>
            <h2 className="text-3xl md:text-4xl font-serif text-white italic mb-4">Franchise Ortağımıza Sunduklarımız</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: 'Kanıtlanmış Teknoloji', desc: 'Mimari destek hizmet altyapısıyla farklılaşın. Rakipsiz bir hizmet portföyü sunun.' },
              { title: 'Kapsamlı Eğitim', desc: 'Kurulum, teknik eğitim, pazarlama desteği ve sürekli danışmanlık ile işinizi hızla büyütün.' },
              { title: 'Marka & Pazarlama', desc: 'Archilya markası altında premium hizmet verin. Satış materyalleri, demo ortamları ve kurumsal kimlik desteği.' },
              { title: 'Operasyonel Altyapı', desc: 'Panel, işlem hakkı sistemi, müşteri yönetimi ve otomasyon araçlarıyla işinizi dijital yönetin.' },
              { title: 'Sürekli Güncelleme', desc: 'Yeni özellikler, araçlar ve pazar fırsatlarıyla franchise ağımız sürekli büyüyor.' },
              { title: 'Yüksek Talep', desc: 'Mimarlık, emlak ve müteahhit sektörlerinde mimari destek ve görselleştirmeye talep hızla artıyor.' },
            ].map((item) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-6 hover:border-emerald-400/20 transition-all">
                <h3 className="text-white font-serif italic text-base mb-2">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Entegrasyon Süreci */}
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[140px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-16">
            <p className="text-primary text-[10px] uppercase tracking-[0.3em] mb-3">Entegrasyon</p>
            <h2 className="text-3xl md:text-4xl font-serif text-white italic mb-4">Archilya\'ya Nasıl Başlarsınız?</h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">Ofisinizi dijital dünyaya taşımak için hazırladığımız 4 adımlık entegrasyon süreci.</p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { num: '01', icon: MonitorPlay, title: 'Panel Kurulumu & Bulut Entegrasyonu', desc: 'Aboneliğiniz başlar başlamaz ofisiniz Archilya Bulut Paneline entegre edilir. Size özel atanan Proje Yöneticisi, bir kickoff toplantısıyla donanım altyapınızı inceler ve ofisinizin ihtiyacına göre en verimli kurguyu belirler.' },
              { num: '02', icon: Settings2, title: 'Launcher & Cihaz Optimizasyonu', desc: 'Sunum yapacağınız cihazlara Archilya Launcher saniyeler içinde kurulur. Mevcut projeleriniz güvenli bulut sunucularımızla eşzamanlanmaya başlar. Tüm projeleriniz bulutta güvende ve versiyon kontrollüdür.' },
              { num: '03', icon: GraduationCap, title: 'Eğitim & Senaryo Kalibrasyonu', desc: 'Ekibiniz için canlı eğitim seansları düzenlenir. İnteraktif sunum, bütçe yönetimi ve görsel üretim araçları birebir öğretilir.' },
              { num: '04', icon: MessageSquareHeart, title: 'Canlı Sunum & Kesintisiz Destek', desc: 'Archilya sadece bir yazılım değil, çözüm ortağınızdır. İlk projenizi müşterinize sunduktan sonra yalnız değilsiniz. Panel üzerinden anlık destek ve sürekli güncellemeler.' },
            ].map((step) => (
              <motion.div key={step.num} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="flex items-start gap-5 p-6 rounded-sm border border-white/[0.06] bg-white/[0.015]">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 border border-primary/20 text-primary shrink-0">
                  <span className="text-sm font-bold">{step.num}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <step.icon className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-serif text-white italic">{step.title}</h3>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-center mt-10">
            <span className="inline-block rounded-sm border border-primary/20 bg-primary/5 px-5 py-2 text-[10px] font-bold text-primary uppercase tracking-[0.28em]">
              Kurumsal Abonelere Entegrasyon Süreci Ücretsizdir
            </span>
          </motion.div>
        </div>
      </section>

      {/* Süreç Akışı */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-16">
            <p className="text-emerald-400 text-[10px] uppercase tracking-[0.3em] mb-3">Süreç</p>
            <h2 className="text-3xl md:text-4xl font-serif text-white italic mb-4">Franchise Başvuru Süreci</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {[
              { num: '01', icon: FileText, title: 'Başvuru', desc: 'Formu doldurun, size dönüş yapalım.' },
              { num: '02', icon: Phone, title: 'Ön Görüşme', desc: 'Ekibimiz sizi arayıp detayları konuşsun.' },
              { num: '03', icon: MapPin, title: 'Değerlendirme', desc: 'Lokasyon ve pazar analizi yapalım.' },
              { num: '04', icon: CheckCircle, title: 'Sözleşme', desc: 'Şartları netleştirip anlaşmayı imzalayın.' },
              { num: '05', icon: Star, title: 'Eğitim & Açılış', desc: 'Kurulum, eğitim ve markanızla açılış.' },
            ].map((step) => (
              <FranchiseStep key={step.num} num={step.num} icon={step.icon} title={step.title} desc={step.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-16">
            <p className="text-emerald-400 text-[10px] uppercase tracking-[0.3em] mb-3">SSS</p>
            <h2 className="text-3xl md:text-4xl font-serif text-white italic mb-4">Sık Sorulan Sorular</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: 'Franchise yatırım tutarı nedir?', a: 'Yatırım tutarı şehir ve lokasyona göre değişiklik gösterir. Başvuru formunu doldurduktan sonra ekibimiz size özel bir fizibilite sunar.' },
              { q: 'Royalti ücreti var mı?', a: 'Evet, aylık ciro üzerinden belirlenmiş bir royalti ücreti uygulanır. Oranlar franchise sözleşmesinde detaylandırılır.' },
              { q: 'Eğitim süresi ne kadar?', a: 'Temel eğitim programımız 2 haftadır. Açılış sonrası 1 ay boyunca sahada destek ekibimiz yanınızda olur.' },
              { q: 'Teknik bilgi gerekiyor mu?', a: 'Temel bilgisayar kullanımı yeterlidir. Kapsamlı eğitim ve dokümantasyon desteği sağlıyoruz.' },
              { q: 'Kendi ekibimi kurabilir miyim?', a: 'Evet, franchise ortaklarımız kendi ekiplerini kurar. İşe alım ve eğitim konusunda danışmanlık desteği veriyoruz.' },
              { q: 'Münhasır bölge hakkı var mı?', a: 'Evet, her franchise ortağımıza belirli bir bölgede münhasır çalışma hakkı tanırız.' },
            ].map((item) => (
              <motion.details key={item.q} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="rounded-sm border border-white/[0.06] bg-white/[0.015] group open:border-emerald-400/20 open:bg-emerald-400/[0.02] transition-all">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer text-sm text-white font-sans hover:text-emerald-400 transition-colors [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="text-emerald-400 text-lg group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="px-6 pb-4 text-gray-500 text-xs leading-relaxed">{item.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Başvuru Formu */}
      <section id="franchise-form" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-400/4 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-12">
            <p className="text-emerald-400 text-[10px] uppercase tracking-[0.3em] mb-3">Başvuru</p>
            <h2 className="text-3xl md:text-4xl font-serif text-white italic mb-4">Franchise Başvuru Formu</h2>
            <p className="text-gray-500 text-sm max-w-lg mx-auto">Formu doldurun, ekibimiz en kısa sürede size dönüş yapacaktır.</p>
          </motion.div>
          <FranchiseForm />
        </div>
      </section>

      <section className="pb-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <RelatedLinks
            title="İlgili Sayfalar"
            links={[
              { to: '/hizmetler', label: 'Mimari Destek Hizmetleri' },
              { to: '/muteahhit-proje-sunumu', label: 'Müteahhit Proje Sunumu' },
              { to: '/hakkimizda', label: 'Hakkımızda' },
            ]}
          />
        </div>
      </section>
    </>
  );
}

/* ─── Müteahhit Proje Sunumu Landing ───────────────────────── */

export function MuteahhitLanding() {
  useEffect(() => { setPageMeta(SEO_PAGES.MUTEAHHIT.title, SEO_PAGES.MUTEAHHIT.desc); }, []);

  return (
    <PageShell
      id="muteahhit-landing"
      crumbs={[{ label: 'Müteahhit Çözümleri' }, { label: 'Proje Sunumu' }]}
      related={[
        { to: '/emlak-vr-sunum', label: 'Emlak Dijital Satış Ofisi' },
        { to: '/hizmetler', label: 'Mimari Destek Hizmetleri' },
        { to: '/franchise-partner', label: 'Franchise ve İş Ortaklığı' },
      ]}
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-3 px-5 py-2 border border-primary/20 rounded-sm bg-primary/5 mb-8">
          <Building2 className="w-4 h-4 text-primary" />
          <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-primary">Müteahhit Çözümleri</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif text-white italic mb-6 leading-tight">
          Proje Lansmanı ve Satış<br /><span className="text-primary/80">Dijital Sunumla Güçlensin.</span>
        </h1>
        <p className="text-gray-400 text-sm font-sans max-w-2xl mx-auto leading-relaxed mb-6">
          Müteahhitler için görselleştirme, canlı sunum ile web tabanlı lansman ve
          360 görüntüleme çözümleri. Yatırımcı sunumlarınızı ve satış ofisi deneyimlerinizi dijitalleştirin.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-10">
          {[
            { icon: MonitorPlay, title: 'Lansman Sunumu', desc: 'Projeyi web ve VR ile yatırımcılara canlı aktarın.' },
            { icon: Home, title: 'Satış Ofisi', desc: 'Dijital showroom ile daire tiplerini karşılaştırın.' },
            { icon: Globe, title: '360 Tanıtım', desc: 'Sanal turlarla projeyi her yerden gezdirin.' },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-6 text-center hover:border-primary/20 transition-all">
                <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <h2 className="text-white font-serif italic text-lg mb-2">{item.title}</h2>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-24">
          <SectionHeading
            eyebrow="Lansman ve Satış"
            title="Projeyi Her Ortamda Anlatın."
            intro="Müteahhit projelerinde satış; projeyi somut, tutarlı ve hızlı anlatmaya bağlıdır. Dijital sunum bu üçünü aynı anda mümkün kılar."
          />
          <CardGrid
            items={[
              { title: 'Yatırımcı Sunumu', desc: 'Kurumsal yatırımcıya projeyi veri, görsel ve ölçek bütünlüğüyle net aktarın.' },
              { title: 'Lansman Etkinliği', desc: 'Lansmanda canlı sunum ve 360 tur ile katılımcıyı projenin içine alın.' },
              { title: 'Satış Ofisi', desc: 'Dijital showroom ile daire tiplerini karşılaştırın; basılı materyal bağımlılığını azaltın.' },
              { title: 'Satış Sonrası', desc: 'Teslim sonrası kullanım ve pazarlama için paylaşılabilir sunum arşivi oluşturun.' },
            ]}
            columns={4}
          />
        </div>

        <div className="mt-24">
          <SectionHeading eyebrow="Süreç" title="Nasıl Başlarız?" />
          <StepList
            steps={[
              { title: 'Proje ve Hedef Görüşmesi', desc: 'Projenin ölçeği, hedef kitlesi ve lansman takvimi birlikte değerlendirilir.' },
              { title: 'Kapsam Belirleme', desc: 'Görselleştirme, canlı sunum ve 360 tur bileşenleri ihtiyaca göre seçilir.' },
              { title: 'Üretim', desc: 'Modeller hazırlanır, görseller üretilir ve sunum sahnesi kurgulanır.' },
              { title: 'Yayın ve Paylaşım', desc: 'Sunum linkleri satış ekibinizle paylaşılır; etkinlik ve online kanallara açılır.' },
            ]}
          />
        </div>

        <div className="mt-24">
          <SectionHeading
            eyebrow="Derinlemesine"
            title="Lansmandan Teslimata Dijital Süreklilik."
          />
          <ProseBlock>
            <p>
              Müteahhit projelerinde sunum, tek seferlik bir etkinlik değil sürekli bir ihtiyaçtır.
              Projenin her aşamasında farklı bir kitleye farklı bir hikâye anlatılır: lansmanda yatırımcıya
              getiri, satış ofisinde alıcıya yaşam, teslimde ise kullanıcıya mekân.
            </p>
            <p>
              Bu aşamaların her birinde ayrı görseller ve ayrı sunumlar üretmek, tutarsız bir marka algısı
              ve tekrarlayan maliyet yaratır. Dijital sunum ise aynı sahneden beslenir; aynı görsel dil,
              farklı kitlelere uyarlanarak kullanılır.
            </p>
            <p>
              Bu bütünlük, projeyi rakiplerinden ayırır ve güven üretir. Yatırımcı da alıcı da aynı kalitede
              bir temsil gördüğünde, projenin profesyonel yönetildiği izlenimi güçlenir.
            </p>
          </ProseBlock>
        </div>

        <FaqSection
          items={[
            { q: 'Sadece tek bir proje için de çalışıyor musunuz?', a: 'Evet. Tek proje bazlı çalışabildiğimiz gibi, sahada süreklilik isteyen müteahhitler için dönemsel iş ortaklığı da kuruyoruz.' },
            { q: 'Satış ofisi için donanım gerekiyor mu?', a: 'Canlı sunum için özel donanım gerekmez; mevcut bilgisayar veya tabletlerle çalışır. İsteğe bağlı olarak daha etkileyici bir kurulum önerilebilir.' },
            { q: 'Proje değişikliklerinde sunum güncellenir mi?', a: 'Evet. Tasarım değişikliklerinde model ve sunum güncellenir; paylaşılan bağlantılar otomatik olarak güncel sürümü gösterir.' },
            { q: 'Lansman tarihine yetişmesi mümkün mü?', a: 'Takvim, kapsam netleştikten sonra birlikte belirlenir. Kritik tarihler için öncelikli üretim planı yapılabilir.' },
            { q: 'Görselleştirme ile canlı sunumu birlikte alabilir miyiz?', a: 'Evet. İki hizmet birbirini besler; sabit görseller ve etkileşimli sunum tek kapsamda, tutarlı bir marka diliyle üretilir.' },
            { q: 'Fiyatlandırma nasıl belirlenir?', a: 'Fiyat; görsel adedi, model karmaşıklığı ve sunum bileşenlerine göre belirlenir. Kapsam görüşmesinden sonra net bir teklif sunulur.' },
          ]}
        />
      </div>
    </PageShell>
  );
}

