import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MonitorPlay, Sparkles, Globe } from 'lucide-react';
import { SEO_PAGES, setPageMeta, setPageJsonLd, clearPageJsonLd } from '../utils/seo';
import { logAnalyticsEvent } from '../firebase';
import Breadcrumb from '../components/Breadcrumb';
import RelatedLinks from '../components/RelatedLinks';
import { SectionHeading, CardGrid, StepList } from '../components/ContentSection';
import FaqSection from '../components/FaqSection';

function RehberShell({ children, title, desc, crumbs, related }) {
  useEffect(() => { setPageMeta(title, desc); }, [title, desc]);

  return (
    <section className="relative min-h-screen py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]"
        style={{ backgroundImage: 'radial-gradient(circle, #c6a87c 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        {crumbs && <Breadcrumb items={crumbs} className="mb-10" />}
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          {children}
        </motion.div>
        {related && <RelatedLinks title="Benzer Rehberler ve Çözümler" links={related} />}
      </div>
    </section>
  );
}

/* ─── Rehber 1: VR Sunum Satış Kararı ──────────────────────── */

export function VrSunumRehber() {
  useEffect(() => {
    setPageJsonLd('guide-article', {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Mimari Projelerde Canlı Sunum Satış Kararını Nasıl Hızlandırır?',
      description: 'Canlı sunum, pixel streaming ve 360 deneyimlerin mimari projelerde müşteri kararını nasıl hızlandırdığını anlatan rehber.',
      url: 'https://archilya.com/rehber/vr-sunum-satis',
      author: { '@type': 'Organization', name: 'Archilya', url: 'https://archilya.com' },
      publisher: {
        '@type': 'Organization',
        name: 'Archilya',
        url: 'https://archilya.com',
        logo: { '@type': 'ImageObject', url: 'https://archilya.com/favicon.png' },
      },
      datePublished: '2025-01-15',
      dateModified: '2026-09-13',
    });
    return () => clearPageJsonLd('guide-article');
  }, []);

  return (
    <RehberShell
      title={SEO_PAGES.VR_SUNUM_REHBER.title}
      desc={SEO_PAGES.VR_SUNUM_REHBER.desc}
      crumbs={[{ label: 'Rehber' }, { label: 'Canlı Sunum ile Satış' }]}
      related={[
        { to: '/rehber/ai-render-revizyon', label: 'Görselleştirme ve Revizyon Rehberi' },
        { to: '/rehber/emlak-360-vr', label: 'Emlak 360 Sanal Tur Rehberi' },
        { to: '/vr-sunum', label: 'Canlı Sunum Hizmeti' },
      ]}
    >
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-3 px-5 py-2 border border-amber-400/20 rounded-sm bg-amber-400/5 mb-8">
          <MonitorPlay className="w-4 h-4 text-amber-400" />
          <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-400">Rehber</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-serif text-white italic mb-6 leading-tight">
          Mimari Projelerde Canlı Sunum<br />
          <span className="text-amber-400/80">Satış Kararını Nasıl Hızlandırır?</span>
        </h1>

        <div className="text-gray-400 text-sm font-sans leading-relaxed space-y-6">
          <p>
            Geleneksel mimari sunumlarda müşteri, 2D çizimler ve statik render görselleri üzerinden
            karar vermek zorundadır. Bu süreç genellikle haftalar süren revizyon döngülerine,
            yanlış anlaşılmalara ve gecikmiş onaylara yol açar.
          </p>

          <h2 className="text-2xl font-serif text-white italic mt-10 mb-4">Canlı Sunumun Getirdiği Değişim</h2>
          <p>
            Canlı sunum, müşterinin projeyi 1:1 ölçekte deneyimlemesini sağlar. Kapıları açmak,
            malzeme değiştirmek ve mekanda yürümek gibi etkileşimler, soyut çizimleri somut
            bir deneyime dönüştürür. Bu, karar süresini ortalama %40 oranında kısaltır.
          </p>

          <h2 className="text-2xl font-serif text-white italic mt-10 mb-4">Pixel Streaming ile Donanımsız Sunum</h2>
          <p>
            Archilya'nın Pixel Streaming teknolojisi, VR kalitesinde 3D sahneleri doğrudan web
            tarayıcısına aktarır. Müşterinizin güçlü bir bilgisayara veya özel bir yazılıma
            ihtiyacı yoktur. Tek bir linkle, tabletinden veya telefonundan projenin içine girer.
          </p>

          <h2 className="text-2xl font-serif text-white italic mt-10 mb-4">Adım Adım Canlı Sunum Süreci</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-400 pl-4">
            <li><strong className="text-white">Hazırlık:</strong> CAD modeli veya 3D sahne Archilya'ya aktarılır.</li>
            <li><strong className="text-white">Optimizasyon:</strong> Mimari Destek ile render kalitesi yükseltilir, materyaller atanır.</li>
            <li><strong className="text-white">Sunum Linki:</strong> Pixel Streaming ile web üzerinden erişilebilir bağlantı oluşturulur.</li>
            <li><strong className="text-white">Müşteri Deneyimi:</strong> Müşteri linke tıklar, mekanı keşfeder, malzemeleri dener.</li>
            <li><strong className="text-white">Karar:</strong> Toplantı bitmeden seçimler netleşir, revizyon döngüsü kısalır.</li>
          </ol>

          <h2 className="text-2xl font-serif text-white italic mt-10 mb-4">Ölçülebilir Sonuçlar</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-400 pl-4">
            <li>İlk toplantıda onay oranında belirgin artış</li>
            <li>Revizyon döngüsünde %50'ye varan azalma</li>
            <li>Müşteri memnuniyetinde ve referans potansiyelinde yükseliş</li>
            <li>Rekabet avantajı: canlı sunum yapan ofisler projeleri daha hızlı kapatıyor</li>
          </ul>

          <h2 className="text-2xl font-serif text-white italic mt-10 mb-4">Canlı Sunumun Ölçülebilir Faydaları</h2>
          <p>
            Canlı sunumun etkisi yalnızca sunum anıyla sınırlı değildir; projenin tüm karar sürecine
            yayılır. İlk toplantıda alınan net kararlar, sonraki haftalarda tekrarlanan toplantı
            ihtiyacını azaltır. Müşterinin mekânı deneyimlemesi, sözlü anlatıma kıyasla çok daha az
            yanlış anlaşılmaya yol açar.
          </p>
          <p>
            Ölçüm yapmak isteyen ekipler için bu etki birkaç başlıkta takip edilebilir: onaya kadar geçen
            süre, revizyon sayısı, toplantı süresi ve müşteri geri bildiriminin netliği. Projelerin
            çoğunda ilk ikisinde belirgin bir düşüş görülür.
          </p>

          <h2 className="text-2xl font-serif text-white italic mt-10 mb-4">Nereden Başlamalı?</h2>
          <p>
            Canlı sunuma geçiş için tüm projeyi bir anda dönüştürmek gerekmez. En yaygın yaklaşım,
            satışa en yakın tek bir proje veya tek bir daire tipiyle pilot uygulama yapmaktır. Böylece
            ekip teknolojiyi tanır, müşteri tepkisini ölçer ve yatırım kararını veriye dayandırır.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-400 pl-4">
            <li>Pilot için yüksek ilgi gören tek bir örnek proje seçin</li>
            <li>Sunumu satış ekibinin gerçek bir müşteri toplantısında kullanın</li>
            <li>Toplantı süresi ve geri bildirim netliğini not edin</li>
            <li>Sonuçları değerlendirip yaygınlaştırma kararı verin</li>
          </ul>
        </div>

        <div className="mt-20">
          <SectionHeading
            accent="amber"
            eyebrow="Kimler İçin"
            title="Hangi Projeler Canlı Sunumdan En Çok Kazanır?"
            intro="Canlı sunum her projede işe yarar; ancak karar karmaşıklığı arttıkça etkisi belirginleşir."
          />
          <CardGrid
            items={[
              { title: 'Karmaşık Konut Projeleri', desc: 'Çok sayıda daire tipi, kat ve manzara alternatifi olan projelerde karşılaştırma canlı sunumla netleşir.' },
              { title: 'Ticari ve Karma Kullanım', desc: 'Mağaza, ofis ve sosyal alanların bir arada olduğu projelerde mekân ilişkileri deneyimlenerek anlaşılır.' },
              { title: 'Uzaktaki Paydaşlar', desc: 'Şehir dışı ve yurt dışı yatırımcılar için fiziksel toplantı zorunluluğu ortadan kalkar.' },
            ]}
          />
        </div>

        <div className="mt-20">
          <SectionHeading accent="amber" eyebrow="Karşılaştırma" title="Geleneksel Sunum ile Canlı Sunum" />
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="rounded-sm border border-white/[0.08] bg-white/[0.015] p-6">
              <h3 className="text-gray-300 font-serif italic text-base mb-3">Geleneksel Sunum</h3>
              <ul className="space-y-2 text-gray-500 text-xs leading-relaxed">
                <li>Statik render ve 2D çizimlerle sınırlı anlatım</li>
                <li>Haftalar süren revizyon ve onay döngüsü</li>
                <li>Uzaktan katılımda kopuk deneyim</li>
                <li>Soyut kararlar, yanlış anlaşılma riski</li>
              </ul>
            </div>
            <div className="rounded-sm border border-amber-400/20 bg-amber-400/[0.03] p-6">
              <h3 className="text-amber-400 font-serif italic text-base mb-3">Canlı Sunum</h3>
              <ul className="space-y-2 text-gray-300 text-xs leading-relaxed">
                <li>1:1 ölçekte deneyim, gerçek mekân hissi</li>
                <li>Toplantı sırasında netleşen kararlar</li>
                <li>Tek linkle her yerden erişim</li>
                <li>Kontrollü etkileşim: malzeme, ışık, dolaşım</li>
              </ul>
            </div>
          </div>
        </div>

        <FaqSection
          accent="amber"
          items={[
            { q: 'Canlı sunum için bizim tarafımızda neye ihtiyaç var?', a: 'Yalnızca mevcut 3D modeliniz veya mimari çizimleriniz yeterlidir. Sunucu, yazılım ve bağlantı altyapısı tarafımızdan sağlanır.' },
            { q: 'Sunum ne kadar sürede hazırlanır?', a: 'Hazır bir model varsa genellikle birkaç iş günü içinde sunum linki oluşturulur. Sıfırdan modelleme gerekiyorsa takvim kapsama göre uzar.' },
            { q: 'Müşteri sunumu kendi başına gezebilir mi?', a: 'Evet. Bağlantıya sahip herkes tarayıcıdan sunuma girip projeyi gezebilir. İsterseniz erişimi belirli kişilerle ve süreyle sınırlayabiliriz.' },
            { q: 'İnternet bağlantısı kesilirse ne olur?', a: 'Sunum, bağlantı durumuna göre çözünürlüğü otomatik uyarlar. Bağlantı tamamen kesilirse oturum duraklar, bağlantı döndüğünde kaldığı yerden devam eder.' },
            { q: 'Maliyet neye göre belirlenir?', a: 'Maliyet; sahne karmaşıklığı, eşzamanlı izleyici sayısı ve sunum süresine göre belirlenir. Kapsam görüşmesinden sonra net teklif sunulur.' },
            { q: 'Statik görsel sunumdan farkı nedir?', a: 'Statik görseller tek bir açıyı gösterir. Canlı sunumda müşteri mekânda dolaşır, malzeme ve ışığı değiştirir; karar deneyime dayanır.' },
          ]}
        />

        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
          <Link to="/#contact" onClick={() => logAnalyticsEvent('cta_click', { label: 'rehber_vr_cta', location: 'RehberPages' })} className="group inline-flex items-center gap-3 bg-primary text-black px-8 py-4 rounded-sm font-sans text-[11px] font-bold uppercase tracking-widest hover:bg-white transition-all">
            Teklif Al <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/hizmetler" className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-sm font-sans text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            Hizmetleri İncele
          </Link>
        </div>
      </div>
    </RehberShell>
  );
}

/* ─── Rehber 2: Görselleştirme ve Revizyon ─────────────────────────── */

export function AiRenderRehber() {
  return (
    <RehberShell
      title={SEO_PAGES.AI_RENDER_REHBER.title}
      desc={SEO_PAGES.AI_RENDER_REHBER.desc}
      crumbs={[{ label: 'Rehber' }, { label: 'Görselleştirme ve Revizyon' }]}
      related={[
        { to: '/rehber/vr-sunum-satis', label: 'Canlı Sunum Satış Rehberi' },
        { to: '/rehber/emlak-360-vr', label: 'Emlak 360 Sanal Tur Rehberi' },
        { to: '/ai-studio', label: 'AI Studio Görselleştirme' },
      ]}
    >
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-3 px-5 py-2 border border-primary/20 rounded-sm bg-primary/5 mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-primary">Rehber</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-serif text-white italic mb-6 leading-tight">
          Görselleştirme ve Revizyon ile<br />
          <span className="text-primary/80">Revizyon Süresini Nasıl Azaltırsınız?</span>
        </h1>

        <div className="text-gray-400 text-sm font-sans leading-relaxed space-y-6">
          <p>
            Mimari projelerde en fazla zaman kaybı render revizyonlarında yaşanır. Müşteriden gelen
            "zemin rengini değiştirelim", "ışığı biraz daha yumuşatalım" gibi geri bildirimler,
            saatler süren bekleme sürelerine ve teslim gecikmelerine yol açar.
          </p>

          <h2 className="text-2xl font-serif text-white italic mt-10 mb-4">Mimari Destek ile Anında Revizyon</h2>
          <p>
            Archilya Mimari Destek, geleneksel yöntemlerin aksine, her revizyon için başa
            dönmez. Referans stil, atmosfer ve malzeme dilini koruyarak kontrollü
            düzenlemeler yapar. Bu, tek bir revizyonu saatlerden dakikalara indirir.
          </p>

          <h2 className="text-2xl font-serif text-white italic mt-10 mb-4">Temel Araçlar</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-400 pl-4">
            <li><strong className="text-white">Görselleştirme:</strong> SketchUp veya ham görseli fotogerçekçi çıktıya dönüştürün.</li>
            <li><strong className="text-white">Revizyon Düzenleyici:</strong> Müşteri notlarını kontrollü revizyon olarak uygulayın.</li>
            <li><strong className="text-white">3D Kat Planı:</strong> Boyanmış kat planınızı 3 boyutlu perspektif görüntüye dönüştürün.</li>
            <li><strong className="text-white">Tasarım Analizi:</strong> Malzeme, ışık, kompozisyon ve sunum kalitesini analiz edin.</li>
            <li><strong className="text-white">Doku Üretici:</strong> Malzeme fotoğrafından sonsuz tekrarlanabilir doku üretin.</li>
          </ul>

          <h2 className="text-2xl font-serif text-white italic mt-10 mb-4">İş Akışı Dönüşümü</h2>
          <p>
            Mimari Destek ile mimari ofisler, dış kaynak bağımlılığını azaltır, birden fazla
            konsepti aynı gün içinde üretebilir ve müşteri geri bildirimlerine anında yanıt
            verebilir. Bu hem maliyet avantajı hem de rekabet gücü sağlar.
          </p>

          <h2 className="text-2xl font-serif text-white italic mt-10 mb-4">Revizyon Süresini Etkileyen Faktörler</h2>
          <p>
            Revizyonun ne kadar hızlı döneceği yalnızca ekip hızına bağlı değildir; talep kalitesi de
            belirleyicidir. &quot;Zemin rengini biraz daha sıcak yapalım&quot; gibi net bir talep saatler
            içinde uygulanabilir. Buna karşılık &quot;atmosferi değiştirelim&quot; gibi muğlak bir istek,
            önce yorumlanmayı gerektirir ve süreci uzatır.
          </p>
          <p>
            Bu nedenle etkili revizyon yönetimi, geri bildirimin toplanmasıyla başlar. Müşteri
            notlarının tek bir listede toplanması, öncelik sırasının belirlenmesi ve referans görsellerin
            paylaşılması, üretim hızını doğrudan artırır.
          </p>

          <h2 className="text-2xl font-serif text-white italic mt-10 mb-4">Kaliteyi Koruyarak Hızlanmak</h2>
          <p>
            Hız, kaliteden ödün vermek anlamına gelmez. Kontrollü revizyon yaklaşımında referans stil,
            malzeme dili ve ışık kurgusu sabit tutulur; yalnızca istenen öğe değişir. Bu sayede yapılan
            düzenleme görselin bütünlüğünü bozmaz ve sunum seti tutarlı kalır.
          </p>
          <p>
            Zamanla bu yaklaşım ofis içinde bir standarda dönüşür: ekipler hangi işin kaç günde döneceğini
            öngörebilir, proje takvimi daha güvenilir hale gelir ve müşteriye verilen teslim sözleri
            tutulur.
          </p>
        </div>

        <div className="mt-20">
          <SectionHeading
            eyebrow="Hangi İşler"
            title="Hangi Revizyonlar Hızlı Döner?"
            intro="Revizyonun hızlı dönmesi için yapının değişmemesi gerekir. Aşağıdaki işler genellikle aynı gün içinde teslim edilir."
          />
          <CardGrid
            items={[
              { title: 'Malzeme ve Doku Değişimi', desc: 'Zemin, duvar ve cephe malzemelerini referans stile uygun biçimde değiştirin.' },
              { title: 'Işık ve Atmosfer', desc: 'Gündüz/gece, sıcak/soğuk ışık ve gölge ayarlarıyla atmosferi yeniden kurgulayın.' },
              { title: 'Kompozisyon ve Açı', desc: 'Kamera açısı, kadraj ve odak düzenlemeleriyle sunumun etkisini artırın.' },
              { title: 'Plan Renklendirme', desc: 'Kat planlarını sunuma hazır, okunabilir ve tutarlı renklerle teslim alın.' },
            ]}
            columns={4}
          />
        </div>

        <div className="mt-20">
          <SectionHeading eyebrow="İş Akışı" title="Ofis İçi Süreç Nasıl Dönüşür?" />
          <StepList
            steps={[
              { title: 'Talep Toplama', desc: 'Müşteri geri bildirimleri tek listede toplanır; öncelik sırası belirlenir.' },
              { title: 'Hızlı Üretim', desc: 'Revizyonlar referans stile sadık kalınarak uygulanır; yapı ve oranlar bozulmaz.' },
              { title: 'Sunum', desc: 'Güncellenen görseller müşteriye aynı gün içinde sunulur.' },
              { title: 'Onay', desc: 'Geri bildirim döngüsü kısalır; proje takvimi korunur.' },
            ]}
          />
        </div>

        <FaqSection
          items={[
            { q: 'Hangi dosya formatlarıyla çalışıyorsunuz?', a: 'SketchUp, Revit, AutoCAD, Rhino ve ArchiCAD dosyalarıyla çalışabiliriz. Model paylaşamıyorsanız ham render görseli üzerinden de revizyon yapılabilir.' },
            { q: 'Bir görsel için kaç revizyon yapılabilir?', a: 'Yapıyı bozmayan kontrollü revizyonlar dahildir. Revizyon sayısı ve kapsamı teklif aşamasında net olarak belirtilir; ek paketler tanımlanabilir.' },
            { q: 'Model değişirse süreç nasıl işler?', a: 'Küçük model güncellemeleri hızlıca yansıtılır. Kapsamlı tasarım değişikliklerinde kapsam yeniden değerlendirilir ve takvim güncellenir.' },
            { q: 'Teslim süresi neye bağlı?', a: 'Görsel adedi, karmaşıklık ve revizyon sayısına bağlıdır. Tek görsel için genellikle 1-2 iş günü, kapsamlı setler için 3-5 iş günü öngörülür.' },
            { q: 'Sadece SketchUp ile mi çalışıyorsunuz?', a: 'Hayır. SketchUp en yaygın kaynak olsa da Revit, AutoCAD, Rhino ve ArchiCAD tabanlı projelerle de çalışıyoruz.' },
            { q: 'Proje dosyalarımın gizliliği nasıl korunuyor?', a: 'Dosyalar yalnızca atanan ekip tarafından görülür ve üçüncü taraflarla paylaşılmaz. Talep halinde gizlilik sözleşmesi imzalanır.' },
          ]}
        />

        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
          <Link to="/#contact" onClick={() => logAnalyticsEvent('cta_click', { label: 'rehber_render_cta', location: 'RehberPages' })} className="group inline-flex items-center gap-3 bg-primary text-black px-8 py-4 rounded-sm font-sans text-[11px] font-bold uppercase tracking-widest hover:bg-white transition-all">
            Teklif Al <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/hizmetler" className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-sm font-sans text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            Hizmetleri İncele
          </Link>
        </div>
      </div>
    </RehberShell>
  );
}

/* ─── Rehber 3: Emlak 360 ve VR Sunum ──────────────────────── */

export function Emlak360Rehber() {
  return (
    <RehberShell
      title={SEO_PAGES.EMLAK_360_REHBER.title}
      desc={SEO_PAGES.EMLAK_360_REHBER.desc}
      crumbs={[{ label: 'Rehber' }, { label: 'Emlak 360 Sanal Tur' }]}
      related={[
        { to: '/rehber/vr-sunum-satis', label: 'Canlı Sunum Satış Rehberi' },
        { to: '/rehber/ai-render-revizyon', label: 'Görselleştirme ve Revizyon Rehberi' },
        { to: '/emlak-vr-sunum', label: 'Emlak VR ve Sanal Tur' },
      ]}
    >
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-3 px-5 py-2 border border-amber-400/20 rounded-sm bg-amber-400/5 mb-8">
          <Globe className="w-4 h-4 text-amber-400" />
          <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-400">Rehber</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-serif text-white italic mb-6 leading-tight">
          Emlak Projelerinde 360 ve Canlı Sunum<br />
          <span className="text-amber-400/80">Kullanımı ve Avantajları</span>
        </h1>

        <div className="text-gray-400 text-sm font-sans leading-relaxed space-y-6">
          <p>
            Gayrimenkul sektöründe alıcılar, satın alma kararı vermeden önce projeyi
            deneyimlemek ister. Geleneksel yöntemlerde bu, fiziksel showroom ziyareti veya
            statik fotoğraflarla sınırlı kalır. 360 sanal tur ve canlı sunum bu sınırı ortadan kaldırır.
          </p>

          <h2 className="text-2xl font-serif text-white italic mt-10 mb-4">360 Sanal Tur ile Uzaktan Keşif</h2>
          <p>
            360 panorama teknolojisi, daire veya proje alanlarını kuş bakışı değil, mekanın
            içindeymiş gibi gösterir. Alıcılar telefon veya bilgisayarlarından odayı 360 derece
            tarayabilir, farklı açılardan inceleyebilir. Bu, fiziksel ziyaret öncesi ön eleme
            sürecini hızlandırır.
          </p>

          <h2 className="text-2xl font-serif text-white italic mt-10 mb-4">Pixel Streaming ile Canlı Sunum</h2>
          <p>
            Archilya'nın Pixel Streaming teknolojisi, emlak projelerini web tarayıcısında 4K
            kalitesinde canlı olarak sunar. Alıcılar linke tıklar, projeyi gezer, daire tiplerini
            karşılaştırır ve hatta malzeme seçeneklerini canlı dener. Kurulum gerektirmez,
            her cihazdan erişilebilir.
          </p>

          <h2 className="text-2xl font-serif text-white italic mt-10 mb-4">Emlak Projelerinde Kullanım Senaryoları</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-400 pl-4">
            <li><strong className="text-white">Satış Ofisi:</strong> Dijital showroom ile tüm daire tiplerini tek ekranda karşılaştırma</li>
            <li><strong className="text-white">Lansman:</strong> Proje lansmanında canlı sunum ve 360 tur ile yatırımcı çekme</li>
            <li><strong className="text-white">Uzaktan Satış:</strong> Yurt dışı veya şehir dışı alıcılara link üzerinden canlı sunum</li>
            <li><strong className="text-white">Toplu Projeler:</strong> A/B/C daire tiplerinde tekrar kullanılabilir sunum altyapısı</li>
          </ul>

          <h2 className="text-2xl font-serif text-white italic mt-10 mb-4">Emlakçılar İçin Avantajlar</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-400 pl-4">
            <li>Fiziksel ziyaret öncesi alıcı ön elemesi — zaman tasarrufu</li>
            <li>Tek linkle sınırsız sayıda potansiyel alıcıya ulaşım</li>
            <li>Rakiplerden farklılaşan premium sunum deneyimi</li>
            <li>Proje bitmeden ön satış yapabilme imkanı</li>
          </ul>

          <h2 className="text-2xl font-serif text-white italic mt-10 mb-4">360 Turun Ölçülebilir Faydaları</h2>
          <p>
            360 turun asıl değeri, fiziksel ziyaret öncesi yaptığı ön elemedir. Alıcı, saatler süren bir
            yolculuk yerine birkaç dakikada projeyi tanır; beğenmezse elenir, beğenirse fiziksel
            ziyarete motive olarak gelir. Bu, satış ekibinin zamanını gerçekten dönüşme potansiyeli olan
            görüşmelere ayırmasını sağlar.
          </p>
          <p>
            Ölçülebilir göstergeler arasında ziyaret süresi, turu tamamlama oranı ve ilgilenilen daire
            tipleri yer alır. Bu veriler, hangi tiplerin pazarlamada öne çıkarılacağına dair somut bir yol
            haritası sunar.
          </p>

          <h2 className="text-2xl font-serif text-white italic mt-10 mb-4">Emlakta Doğru Teknolojiyi Seçmek</h2>
          <p>
            Her proje için doğru teknoloji farklı olabilir. Erken aşamadaki veya hızlı tanıtılması gereken
            projelerde 360 tur yeterli olabilir. Satışa yakın, kararın netleşmesi gereken projelerde ise
            canlı sunum belirgin fark yaratır.
          </p>
          <p>
            Doğru karar, projenin hedef kitlesi ve satış stratejisine göre verilir. Archilya kapsam
            görüşmesinde hangi teknolojinin hangi aşamada değer üreteceğini birlikte değerlendirir ve
            gereksiz yatırım yapmanızı önler.
          </p>
        </div>

        <div className="mt-20">
          <SectionHeading
            accent="amber"
            eyebrow="Kimler İçin"
            title="Kimler 360 Tur ve Canlı Sunum Kullanıyor?"
          />
          <CardGrid
            items={[
              { title: 'Emlak Ofisleri', desc: 'Portföydeki projeleri tek linkle alıcıya ulaştırın; fiziksel ziyaret öncesi ön eleme yapın.' },
              { title: 'Müteahhitler', desc: 'Lansman ve satış ofisinde projeyi deneyimletirken basılı materyal bağımlılığını azaltın.' },
              { title: 'Yatırımcılar', desc: 'Yurt dışı ve şehir dışı yatırımcıya projeyi yerinde gibi gösterin.' },
              { title: 'Pazarlama Ekipleri', desc: 'Kampanya ve ilan görsellerini etkileşimli deneyimle destekleyin.' },
            ]}
            columns={4}
          />
        </div>

        <div className="mt-20">
          <SectionHeading
            accent="amber"
            eyebrow="Birlikte Kullanım"
            title="360 Tur ve Canlı Sunum Nasıl Birlikte Çalışır?"
            intro="İki teknoloji birbirini tamamlar: biri keşif, diğeri etkileşim sunar."
          />
          <StepList
            steps={[
              { title: 'Ön Keşif', desc: 'Alıcı 360 tur ile projeyi genel hatlarıyla gezer ve ilgisini test eder.' },
              { title: 'Derinlemesine İnceleme', desc: 'İlgilenen alıcı canlı sunumda mekânda serbest dolaşır, malzeme ve tipleri inceler.' },
              { title: 'Karşılaştırma', desc: 'Farklı daire tipleri ve kat alternatifleri aynı oturumda karşılaştırılır.' },
              { title: 'Karar', desc: 'Alıcı fiziksel ziyaret öncesinde bilinçli bir seçim yapar.' },
            ]}
          />
        </div>

        <FaqSection
          accent="amber"
          items={[
            { q: '360 tur için özel kamera gerekiyor mu?', a: 'Hayır. 360 panoramalar mevcut 3D modelinizden üretilebildiği gibi, saha çekimi gerekiyorsa uygun ekipmanla tarafımızdan oluşturulur.' },
            { q: 'Mobil cihazlarda sorunsuz çalışır mı?', a: 'Evet. 360 tur ve canlı sunum mobil tarayıcılarda çalışır; alıcılar telefonlarından projeyi rahatça gezebilir.' },
            { q: 'Sunumları web sitemize ekleyebilir miyiz?', a: 'Evet. Sunum bağlantısı veya gömme kodu sitenize, ilan sayfalarınıza ve pazarlama e-postalarınıza eklenebilir.' },
            { q: 'Mevcut projelerimiz için hemen başlayabilir miyiz?', a: 'Mevcut 3D model veya mimari çizimleriniz varsa hızlıca başlayabiliriz. Model yoksa 3D modelleme hizmetimiz de kapsama eklenir.' },
            { q: 'Alıcı davranışını ölçebiliyor muyuz?', a: 'Sunum kullanımına ilişkin temel veriler toplanabilir; hangi proje ve daire tipinin daha çok ilgi gördüğünü anlayabilirsiniz.' },
            { q: 'Emlak portalı ilanlarıyla nasıl birleşir?', a: 'Deneyim bağlantısı ilan metnine veya görseline eklenebilir; ilgilenen alıcı doğrudan etkileşimli sunuma yönlendirilir.' },
          ]}
        />

        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
          <Link to="/#contact" onClick={() => logAnalyticsEvent('cta_click', { label: 'rehber_360vr_cta', location: 'RehberPages' })} className="group inline-flex items-center gap-3 bg-amber-400 text-black px-8 py-4 rounded-sm font-sans text-[11px] font-bold uppercase tracking-widest hover:bg-white transition-all">
            Teklif Al <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/hizmetler" className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-sm font-sans text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            Hizmetleri İncele
          </Link>
        </div>
      </div>
    </RehberShell>
  );
}
