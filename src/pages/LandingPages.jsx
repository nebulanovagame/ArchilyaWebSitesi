import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, MonitorPlay, BarChart3, Building2, Home, Globe } from 'lucide-react';
import { setPageMeta, SEO_PAGES } from '../utils/seo';
import { logAnalyticsEvent } from '../firebase';

/* ─── Base Layout ─────────────────────────────────────────── */

function PageShell({ children, id }) {
  return (
    <section id={id} className="relative min-h-screen py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: 'radial-gradient(circle, #c6a87c 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          {children}
        </motion.div>
      </div>
    </section>
  );
}

function CTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
      <Link to="/#contact" onClick={() => logAnalyticsEvent('cta_click', { label: 'landing_demo_talep', location: 'LandingPages' })} className="group inline-flex items-center gap-3 bg-primary text-black px-8 py-4 rounded-sm font-sans text-[11px] font-bold uppercase tracking-widest hover:bg-white transition-all duration-300">
        Ücretsiz Demo Talep Et
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
      <Link to="/" className="inline-flex items-center gap-2 bg-transparent border border-white/20 text-white px-8 py-4 rounded-sm font-sans text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
        Ana Sayfaya Dön
      </Link>
    </div>
  );
}

/* ─── AI Studio Landing ────────────────────────────────────── */

export function AiStudioLanding() {
  useEffect(() => { setPageMeta(SEO_PAGES.AI_STUDIO.title, SEO_PAGES.AI_STUDIO.desc); }, []);

  return (
    <PageShell id="ai-studio-landing">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-3 px-5 py-2 border border-primary/20 rounded-sm bg-primary/5 mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-primary">Archilya AI Studio</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif text-white italic mb-6 leading-tight">
          AI ile Mimari Üretim<br /><span className="text-primary/80">Yeniden Tanımlanıyor.</span>
        </h1>
        <p className="text-gray-400 text-sm font-sans max-w-2xl mx-auto leading-relaxed mb-6">
          Premium Render, kontrollü revizyon, plan boyama, tasarım analizi ve konsept üretimi. 
          SketchUp, Revit veya ham görselinizi yükleyin; AI Studio profesyonel mimari çıktıya dönüştürsün.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12">
          {[
            { label: 'Premium Render', desc: 'Fotorealistik çıktı' },
            { label: 'Revizyon', desc: 'Kontrollü düzenleme' },
            { label: 'Plan Boyama', desc: 'Sunuma hazır pafta' },
            { label: 'Tasarım Analizi', desc: 'Kalite raporu' },
          ].map((item) => (
            <div key={item.label} className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-5 text-center">
              <p className="text-white text-sm font-serif italic mb-1">{item.label}</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link to="/#ai-studio" className="inline-flex items-center gap-2 text-primary text-[11px] font-bold uppercase tracking-widest border-b border-primary/30 pb-1 hover:text-white hover:border-white transition-all">
            AI Studio'yu Keşfet <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </PageShell>
  );
}

/* ─── VR / Pixel Streaming Landing ────────────────────────── */

export function VrSunumLanding() {
  useEffect(() => { setPageMeta(SEO_PAGES.VR_SUNUM.title, SEO_PAGES.VR_SUNUM.desc); }, []);

  return (
    <PageShell id="vr-sunum-landing">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-3 px-5 py-2 border border-amber-400/20 rounded-sm bg-amber-400/5 mb-8">
          <MonitorPlay className="w-4 h-4 text-amber-400" />
          <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-400">Pixel Streaming & VR Sunum</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif text-white italic mb-6 leading-tight">
          Projenizi Web'e Taşıyın.<br /><span className="text-amber-400/80">4K, Kurulum Yok, Anında Erişim.</span>
        </h1>
        <p className="text-gray-400 text-sm font-sans max-w-2xl mx-auto leading-relaxed mb-6">
          Pixel Streaming teknolojisiyle yüksek kaliteli 3D sahnelerinizi doğrudan web tarayıcısına aktarın. 
          VR başlık, tablet veya telefon fark etmez. Linki paylaşın, müşteriniz projenin içinde yürüsün.
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
      </div>
    </PageShell>
  );
}

/* ─── Mimarlık Ofisleri Landing ────────────────────────────── */

export function MimarlikOfisleriLanding() {
  useEffect(() => { setPageMeta(SEO_PAGES.MIMARLIK_OFISLERI.title, SEO_PAGES.MIMARLIK_OFISLERI.desc); }, []);

  return (
    <PageShell id="mimarlik-landing">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-serif text-white italic mb-6 leading-tight">
          Mimarlık Ofisleri İçin<br /><span className="text-primary/80">AI + VR + Workspace.</span>
        </h1>
        <p className="text-gray-400 text-sm font-sans max-w-2xl mx-auto leading-relaxed mb-8">
          Archilya, mimarlık ofislerinin üretim akışını AI ile hızlandırır, Pixel Streaming ve VR ile 
          müşteri sunumlarını güçlendirir, workspace ile proje ve ekip yönetimini tek merkezde toplar.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-10">
          {[
            { icon: Sparkles, title: 'AI Üretim', desc: 'Render, revizyon, analiz ve plan boyama araçlarıyla üretim sürenizi kısaltın.' },
            { icon: Globe, title: 'Pixel Streaming & VR', desc: 'Projelerinizi web ve VR üzerinden müşteriye yaşanabilir deneyime dönüştürün.' },
            { icon: BarChart3, title: 'Workspace', desc: 'Proje dosyaları, ekip rolleri, işlem hakkı ve abonelik yönetimi tek panelde.' },
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

        <CTAButtons />
      </div>
    </PageShell>
  );
}

/* ─── Emlak VR Landing ─────────────────────────────────────── */

export function EmlakVrLanding() {
  useEffect(() => { setPageMeta(SEO_PAGES.EMLAK_VR.title, SEO_PAGES.EMLAK_VR.desc); }, []);

  return (
    <PageShell id="emlak-vr-landing">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-3 px-5 py-2 border border-amber-400/20 rounded-sm bg-amber-400/5 mb-8">
          <Building2 className="w-4 h-4 text-amber-400" />
          <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-400">Emlak Çözümleri</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif text-white italic mb-6 leading-tight">
          Emlak Projelerinizi<br /><span className="text-amber-400/80">Dijital Satış Ofisine Dönüştürün.</span>
        </h1>
        <p className="text-gray-400 text-sm font-sans max-w-2xl mx-auto leading-relaxed mb-6">
          VR sunum, Pixel Streaming ve 360 turlarla daire, villa ve ticari projelerinizi 
          uzaktan gezilebilir deneyime dönüştürün. Alıcılar linke tıklar, projeyi keşfeder, karar verir.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mt-10">
          {[
            { title: 'VR Aktarma — Emlak', desc: 'Hazır 3D modeli VR\'a optimize edin, daire seçim ekranlı emlak sunumu oluşturun.' },
            { title: 'VR Modelleme — Emlak', desc: '2D plandan sıfırdan modelleyin, toplu daire tipleriyle satış ofisi kurun.' },
          ].map((item) => (
            <div key={item.title} className="rounded-sm border border-amber-400/10 bg-white/[0.015] p-6 text-left">
              <h2 className="text-white font-serif italic text-lg mb-2">{item.title}</h2>
              <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <CTAButtons />
      </div>
    </PageShell>
  );
}

/* ─── Emlak Pixel Streaming Landing ────────────────────────── */

export function EmlakPixelStreamingLanding() {
  useEffect(() => { setPageMeta(SEO_PAGES.EMLAK_PIXEL.title, SEO_PAGES.EMLAK_PIXEL.desc); }, []);

  return (
    <PageShell id="emlak-pixel-landing">
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

        <CTAButtons />
      </div>
    </PageShell>
  );
}

/* ─── Müteahhit Proje Sunumu Landing ───────────────────────── */

export function MuteahhitLanding() {
  useEffect(() => { setPageMeta(SEO_PAGES.MUTEAHHIT.title, SEO_PAGES.MUTEAHHIT.desc); }, []);

  return (
    <PageShell id="muteahhit-landing">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-3 px-5 py-2 border border-primary/20 rounded-sm bg-primary/5 mb-8">
          <Building2 className="w-4 h-4 text-primary" />
          <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-primary">Müteahhit Çözümleri</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif text-white italic mb-6 leading-tight">
          Proje Lansmanı ve Satış<br /><span className="text-primary/80">Dijital Sunumla Güçlensin.</span>
        </h1>
        <p className="text-gray-400 text-sm font-sans max-w-2xl mx-auto leading-relaxed mb-6">
          Müteahhitler için VR proje sunumu, Pixel Streaming ile web tabanlı lansman ve 
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

        <CTAButtons />
      </div>
    </PageShell>
  );
}

/* ─── Fiyatlandırma Landing ────────────────────────────────── */

export function FiyatlandirmaLanding() {
  useEffect(() => { setPageMeta(SEO_PAGES.FIYATLANDIRMA.title, SEO_PAGES.FIYATLANDIRMA.desc); }, []);

  return (
    <PageShell id="fiyatlandirma-landing">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-serif text-white italic mb-6 leading-tight">
          Abonelik ve<br /><span className="text-primary/80">Premium Hizmet Planları.</span>
        </h1>
        <p className="text-gray-400 text-sm font-sans max-w-2xl mx-auto leading-relaxed mb-8">
          AI Studio abonelikleri işlem hakkıyla çalışır. Aşağıdaki Mimari Üretim Paketleri ise mimarlık ofisimizin kendi el emeği ile hazırladığı profesyonel proje hizmetleridir ve abonelere %20 indirim uygulanır.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-10">
          {[
            { name: 'Keşif', price: 'Ücretsiz', credits: '150 işlem/ay', color: 'text-gray-400' },
            { name: 'Solo', price: '₺699/ay', credits: '1.000 işlem/ay', color: 'text-sky-300' },
            { name: 'Pro', price: '₺1.599/ay', credits: '3.000 işlem/ay', color: 'text-primary', popular: true },
            { name: 'Studio', price: '₺4.999/ay', credits: '12.000 işlem/ay', color: 'text-amber-400' },
          ].map((plan) => (
            <div key={plan.name} className={`rounded-sm border ${plan.popular ? 'border-primary/30 bg-primary/[0.03]' : 'border-white/[0.06] bg-white/[0.015]'} p-5 text-center`}>
              {plan.popular && <span className="text-[8px] text-primary font-bold uppercase tracking-widest bg-primary/10 px-2 py-0.5 rounded-sm mb-2 inline-block">Popüler</span>}
              <p className={`${plan.color} text-[10px] font-bold uppercase tracking-widest mb-2`}>{plan.name}</p>
              <p className="text-white text-xl font-serif italic mb-1">{plan.price}</p>
              <p className="text-[10px] text-gray-500">{plan.credits}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link to="/#pricing" className="inline-flex items-center gap-2 text-primary text-[11px] font-bold uppercase tracking-widest border-b border-primary/30 pb-1 hover:text-white hover:border-white transition-all">
            Tüm Planları İncele <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
