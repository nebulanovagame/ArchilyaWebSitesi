import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MonitorPlay, Sparkles, Globe } from 'lucide-react';
import { SEO_PAGES, setPageMeta } from '../utils/seo';
import { logAnalyticsEvent } from '../firebase';

function RehberShell({ children, title, desc }) {
  useEffect(() => { setPageMeta(title, desc); }, [title, desc]);

  return (
    <section className="relative min-h-screen py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]"
        style={{ backgroundImage: 'radial-gradient(circle, #c6a87c 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          {children}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Rehber 1: VR Sunum Satış Kararı ──────────────────────── */

export function VrSunumRehber() {
  return (
    <RehberShell
      title={SEO_PAGES.VR_SUNUM_REHBER.title}
      desc={SEO_PAGES.VR_SUNUM_REHBER.desc}
    >
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-3 px-5 py-2 border border-amber-400/20 rounded-sm bg-amber-400/5 mb-8">
          <MonitorPlay className="w-4 h-4 text-amber-400" />
          <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-400">Rehber</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-serif text-white italic mb-6 leading-tight">
          Mimari Projelerde VR Sunum<br />
          <span className="text-amber-400/80">Satış Kararını Nasıl Hızlandırır?</span>
        </h1>

        <div className="text-gray-400 text-sm font-sans leading-relaxed space-y-6">
          <p>
            Geleneksel mimari sunumlarda müşteri, 2D çizimler ve statik render görselleri üzerinden
            karar vermek zorundadır. Bu süreç genellikle haftalar süren revizyon döngülerine,
            yanlış anlaşılmalara ve gecikmiş onaylara yol açar.
          </p>

          <h2 className="text-2xl font-serif text-white italic mt-10 mb-4">VR Sunumun Getirdiği Değişim</h2>
          <p>
            VR sunum, müşterinin projeyi 1:1 ölçekte deneyimlemesini sağlar. Kapıları açmak,
            malzeme değiştirmek ve mekanda yürümek gibi etkileşimler, soyut çizimleri somut
            bir deneyime dönüştürür. Bu, karar süresini ortalama %40 oranında kısaltır.
          </p>

          <h2 className="text-2xl font-serif text-white italic mt-10 mb-4">Pixel Streaming ile Donanımsız Sunum</h2>
          <p>
            Archilya'nın Pixel Streaming teknolojisi, VR kalitesinde 3D sahneleri doğrudan web
            tarayıcısına aktarır. Müşterinizin güçlü bir bilgisayara veya özel bir yazılıma
            ihtiyacı yoktur. Tek bir linkle, tabletinden veya telefonundan projenin içine girer.
          </p>

          <h2 className="text-2xl font-serif text-white italic mt-10 mb-4">Adım Adım VR Sunum Süreci</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-400 pl-4">
            <li><strong className="text-white">Hazırlık:</strong> CAD modeli veya 3D sahne Archilya'ya aktarılır.</li>
            <li><strong className="text-white">Optimizasyon:</strong> Premium Studio ile render kalitesi yükseltilir, materyaller atanır.</li>
            <li><strong className="text-white">Sunum Linki:</strong> Pixel Streaming ile web üzerinden erişilebilir bağlantı oluşturulur.</li>
            <li><strong className="text-white">Müşteri Deneyimi:</strong> Müşteri linke tıklar, mekanı keşfeder, malzemeleri dener.</li>
            <li><strong className="text-white">Karar:</strong> Toplantı bitmeden seçimler netleşir, revizyon döngüsü kısalır.</li>
          </ol>

          <h2 className="text-2xl font-serif text-white italic mt-10 mb-4">Ölçülebilir Sonuçlar</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-400 pl-4">
            <li>İlk toplantıda onay oranında belirgin artış</li>
            <li>Revizyon döngüsünde %50'ye varan azalma</li>
            <li>Müşteri memnuniyetinde ve referans potansiyelinde yükseliş</li>
            <li>Rekabet avantajı: VR sunum yapan ofisler projeleri daha hızlı kapatıyor</li>
          </ul>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
          <Link to="/#contact" onClick={() => logAnalyticsEvent('cta_click', { label: 'rehber_vr_cta', location: 'RehberPages' })} className="group inline-flex items-center gap-3 bg-primary text-black px-8 py-4 rounded-sm font-sans text-[11px] font-bold uppercase tracking-widest hover:bg-white transition-all">
            Demo Talep Et <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/vr-sunum" className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-sm font-sans text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            VR Sunum Özellikleri
          </Link>
        </div>
      </div>
    </RehberShell>
  );
}

/* ─── Rehber 2: Premium Render Revizyon ─────────────────────────── */

export function AiRenderRehber() {
  return (
    <RehberShell
      title={SEO_PAGES.AI_RENDER_REHBER.title}
      desc={SEO_PAGES.AI_RENDER_REHBER.desc}
    >
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-3 px-5 py-2 border border-primary/20 rounded-sm bg-primary/5 mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-primary">Rehber</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-serif text-white italic mb-6 leading-tight">
          Premium Render ile<br />
          <span className="text-primary/80">Revizyon Süresini Nasıl Azaltırsınız?</span>
        </h1>

        <div className="text-gray-400 text-sm font-sans leading-relaxed space-y-6">
          <p>
            Mimari projelerde en fazla zaman kaybı render revizyonlarında yaşanır. Müşteriden gelen
            "zemin rengini değiştirelim", "ışığı biraz daha yumuşatalım" gibi geri bildirimler,
            saatler süren bekleme sürelerine ve teslim gecikmelerine yol açar.
          </p>

          <h2 className="text-2xl font-serif text-white italic mt-10 mb-4">Premium Studio ile Anında Revizyon</h2>
          <p>
            Archilya Premium Studio, geleneksel yöntemlerin aksine, her revizyon için başa
            dönmez. Referans stil, atmosfer ve malzeme dilini koruyarak kontrollü
            düzenlemeler yapar. Bu, tek bir revizyonu saatlerden dakikalara indirir.
          </p>

          <h2 className="text-2xl font-serif text-white italic mt-10 mb-4">Temel Araçlar</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-400 pl-4">
            <li><strong className="text-white">Premium Render:</strong> SketchUp veya ham görseli fotorealistik çıktıya dönüştürün.</li>
            <li><strong className="text-white">Revizyon Düzenleyici:</strong> Müşteri notlarını kontrollü revizyon olarak uygulayın.</li>
            <li><strong className="text-white">3D Kat Planı:</strong> Boyanmış kat planınızı 3 boyutlu perspektif görüntüye dönüştürün.</li>
            <li><strong className="text-white">Tasarım Analizi:</strong> Malzeme, ışık, kompozisyon ve sunum kalitesini analiz edin.</li>
            <li><strong className="text-white">Doku Üretici:</strong> Malzeme fotoğrafından sonsuz tekrarlanabilir doku üretin.</li>
          </ul>

          <h2 className="text-2xl font-serif text-white italic mt-10 mb-4">İş Akışı Dönüşümü</h2>
          <p>
            Premium Studio ile mimari ofisler, dış kaynak bağımlılığını azaltır, birden fazla
            konsepti aynı gün içinde üretebilir ve müşteri geri bildirimlerine anında yanıt
            verebilir. Bu hem maliyet avantajı hem de rekabet gücü sağlar.
          </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
          <Link to="/#contact" onClick={() => logAnalyticsEvent('cta_click', { label: 'rehber_render_cta', location: 'RehberPages' })} className="group inline-flex items-center gap-3 bg-primary text-black px-8 py-4 rounded-sm font-sans text-[11px] font-bold uppercase tracking-widest hover:bg-white transition-all">
            Premium Studio'yu Dene <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/ai-studio" className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-sm font-sans text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            Premium Studio Özellikleri
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
    >
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-3 px-5 py-2 border border-amber-400/20 rounded-sm bg-amber-400/5 mb-8">
          <Globe className="w-4 h-4 text-amber-400" />
          <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-400">Rehber</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-serif text-white italic mb-6 leading-tight">
          Emlak Projelerinde 360 ve VR Sunum<br />
          <span className="text-amber-400/80">Kullanımı ve Avantajları</span>
        </h1>

        <div className="text-gray-400 text-sm font-sans leading-relaxed space-y-6">
          <p>
            Gayrimenkul sektöründe alıcılar, satın alma kararı vermeden önce projeyi
            deneyimlemek ister. Geleneksel yöntemlerde bu, fiziksel showroom ziyareti veya
            statik fotoğraflarla sınırlı kalır. 360 sanal tur ve VR sunum bu sınırı ortadan kaldırır.
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
            <li><strong className="text-white">Lansman:</strong> Proje lansmanında VR ve 360 tur ile yatırımcı çekme</li>
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
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
          <Link to="/#contact" onClick={() => logAnalyticsEvent('cta_click', { label: 'rehber_360vr_cta', location: 'RehberPages' })} className="group inline-flex items-center gap-3 bg-amber-400 text-black px-8 py-4 rounded-sm font-sans text-[11px] font-bold uppercase tracking-widest hover:bg-white transition-all">
            Demo Talep Et <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/emlak-vr-sunum" className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-sm font-sans text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            Emlak Çözümleri
          </Link>
        </div>
      </div>
    </RehberShell>
  );
}
