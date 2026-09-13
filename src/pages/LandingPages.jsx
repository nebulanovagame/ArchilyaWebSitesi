import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, MonitorPlay, BarChart3, Building2, Home, Globe, FileText, Phone, MapPin, CheckCircle, Star, Settings2, GraduationCap, MessageSquareHeart } from 'lucide-react';
import { setPageMeta, SEO_PAGES } from '../utils/seo';
import { logAnalyticsEvent } from '../firebase';
import FranchiseForm from '../components/FranchiseForm';

/* ─── Base Layout ─────────────────────────────────────────── */

function PageShell({ children, id }) {
  return (
    <section id={id} className="relative min-h-screen py-20 md:py-32 bg-background overflow-hidden">
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
    <PageShell id="premium-studio-landing">
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
    </>
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

        <CTAButtons />
      </div>
    </PageShell>
  );
}

