import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { ArrowRight, Building2, MapPin, Phone, Mail, FileText, ChevronDown, Workflow, FileCheck, Timer, ClipboardCheck, Map, Droplets, Flame, Zap, ScrollText, CheckCircle } from 'lucide-react';
import { setPageMeta, SEO_PAGES } from '../utils/seo';
import { logAnalyticsEvent } from '../firebase';
import toast from 'react-hot-toast';
import { constructionDrawing, heroBg, trakyaHaritasi } from '../assets/images/index';

/* ─── WhatsApp Icon ─────────────────────────────────────────── */

function WhatsAppIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ─── Local Header ──────────────────────────────────────────── */

function LocalHeader() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (latest) => setScrolled(latest > 50));

  const navLinks = [
    { label: 'Ana Sayfa', to: '/' },
    { label: 'Franchise/Partner', to: '/franchise-partner' },
    { label: 'İletişim', href: '#teklif' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'bg-[#0f1115]/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex flex-col items-center group">
          <span className="font-serif text-2xl text-white tracking-wider italic">Archilya</span>
          <span className="text-[8px] text-primary uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity">Premium Studio</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            item.to ? (
              <Link key={item.label} to={item.to} className="text-xs font-sans font-medium text-gray-300 hover:text-primary uppercase tracking-widest transition-colors">{item.label}</Link>
            ) : (
              <a key={item.label} href={item.href} className="text-xs font-sans font-medium text-gray-300 hover:text-primary uppercase tracking-widest transition-colors">{item.label}</a>
            )
          ))}
          <a href="https://wa.me/902826060639" target="_blank" rel="noopener noreferrer"
            onClick={() => logAnalyticsEvent('cta_click', { label: 'whatsapp_header', location: 'trakya-ruhsat-is-takibi' })}
            className="inline-flex items-center gap-2 bg-emerald-500 text-black px-6 py-2 rounded-sm font-sans text-[11px] font-bold uppercase tracking-widest hover:bg-emerald-400 transition-all duration-300">
            <WhatsAppIcon className="w-4 h-4" />
            WhatsApp'tan Yazın
          </a>
        </div>

        {/* Mobile: brand + WhatsApp icon */}
        <a href="https://wa.me/902826060639" target="_blank" rel="noopener noreferrer" className="md:hidden bg-emerald-500 text-black p-2 rounded-sm hover:bg-emerald-400 transition-colors">
          <WhatsAppIcon className="w-5 h-5" />
        </a>
      </div>
    </nav>
  );
}

/* ─── Local Shell ──────────────────────────────────────────── */

function PageShell({ children, id, className = '' }) {
  return (
    <section id={id} className={`relative py-20 md:py-32 bg-background overflow-hidden scroll-mt-28 ${className}`}>
      <div className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: 'radial-gradient(circle, #c6a87c 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}>
          {children}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Main Page ────────────────────────────────────────────── */

export default function TrakyaRuhsatIsTakibi() {
  useEffect(() => { setPageMeta(SEO_PAGES.TRAKYA_IS_TAKIBI.title, SEO_PAGES.TRAKYA_IS_TAKIBI.desc); }, []);

  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary/30 selection:text-white">
      <LocalHeader />

      {/* 1 ─ Hero + Konumlandırma */}
      <section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center justify-center py-20 md:py-32 bg-background overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: 'radial-gradient(circle, #c6a87c 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/4 rounded-full blur-[140px] pointer-events-none" />
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" width="1920" height="1080" loading="eager" decoding="async" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-3 px-5 py-2 border border-primary/20 rounded-sm bg-primary/5 mb-8">
              <Building2 className="w-4 h-4 text-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-primary">Trakya &amp; İstanbul Bölgesi Ruhsat / Süreç Yönetimi</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-white italic mb-6 leading-tight">
              Belediyelerde Vakit Kaybetmeyin.<br />
              <span className="text-primary/80">Süreçleri Bize Bırakın.</span>
            </h1>
            <p className="text-gray-400 text-sm font-sans max-w-2xl mx-auto leading-relaxed mb-6">
              İmar durumundan iskân sürecine kadar, Tekirdağ ve İstanbul bölgesindeki tüm resmi kurum süreçlerinizi — LİHKAB, TESKİ, İtfaiye, Belediye — uzman mimar kadromuzla uçtan uca yönetiyoruz. Siz projenize odaklanın, resmi süreçler bizim işimiz.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
              <a href="#teklif"
                onClick={() => logAnalyticsEvent('cta_click', { label: 'teklif_al', location: 'trakya-ruhsat-is-takibi' })}
                className="group inline-flex items-center gap-3 bg-primary text-black px-8 py-4 rounded-sm font-sans text-[11px] font-bold uppercase tracking-widest hover:bg-white transition-all duration-300">
                Teklif Al
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="tel:+902826060639"
                onClick={() => logAnalyticsEvent('cta_click', { label: 'bizi_ariyin', location: 'trakya-ruhsat-is-takibi' })}
                className="inline-flex items-center gap-2 bg-transparent border border-white/20 text-white px-8 py-4 rounded-sm font-sans text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                Bizi Arayın
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mt-16">
              {[
                { label: 'Uzman Mimar Kadrosu', desc: 'Tecrübeli ekip' },
                { label: 'Uçtan Uca Takip', desc: 'Baştan sona yönetim' },
                { label: 'Tekirdağ + İstanbul', desc: 'Bölge uzmanlığı' },
              ].map((item) => (
                <div key={item.label} className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-5 text-center">
                  <p className="text-white text-sm font-serif italic mb-1">{item.label}</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2 ─ Neden Archilya */}
      <section id="neden" className="relative py-20 md:py-32 bg-background overflow-hidden scroll-mt-28">
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: 'radial-gradient(circle, #c6a87c 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}>

            <div className="max-w-5xl mx-auto text-center mb-16">
              <p className="text-primary text-[10px] uppercase tracking-[0.3em] mb-3">Neden Archilya</p>
              <h2 className="text-3xl md:text-4xl font-serif text-white italic mb-4">
                Bölgenin Ruhsat Süreç Uzmanı,<br />Tek Elden Yönetim.
              </h2>
              <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
                Tekirdağ ve İstanbul&apos;da imar durumundan iskâna kadar tüm resmi süreçleri tek çatı altında topluyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Building2, title: 'Bölge Uzmanlığı', desc: 'Hangi belediye hangi evrakı ister, hangi kurum ne kadar sürer — önceden biliriz. Tekirdağ ve İstanbul Avrupa yakasını sahada tanıyoruz.' },
                { icon: Workflow, title: 'Tek Elden Yönetim', desc: 'Mimari projeden kurum onayına, ruhsat başvurusundan iskâna kadar her süreç tek sorumluda toplanır; siz tek muhatap tanırsınız.' },
                { icon: FileCheck, title: 'Şeffaf Takip', desc: 'Hangi evrak nerede, hangi aşama ne zaman tamamlanacak — her adım size raporlanır, sürpriz yok.' },
                { icon: Timer, title: 'Hız & Öncelik', desc: 'Eksiksiz evrak ve kurumlarla kurulu ilişkiler, bekleme sürelerini ciddi ölçüde kısaltır.' },
                { icon: MapPin, title: 'Uzaktan Çalışma Dostu', desc: 'Samsun\'dan, Bursa\'dan çalışın; saha ve kurum işlerini biz yürütürüz, yüz yüze görüşme şart değil.' },
                { icon: ClipboardCheck, title: 'Evrak & Proje Tamamlama', desc: 'Eksik belge mi var? Proje mi gerekiyor? Biz tamamlar, koordine eder, onaya hazır hale getiririz.' },
              ].map((item) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  className="rounded-sm border border-white/[0.06] bg-white/[0.015] backdrop-blur-2xl p-6 hover:border-white/15 transition-all">
                  <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-white font-serif italic text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Stats Band */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
              {[
                { num: '11', label: 'İlçe' },
                { num: '6', label: 'Resmi Kurum' },
                { num: '21', label: 'Evrak Kalemi' },
                { num: '5', label: 'Aşamalı Süreç' },
              ].map((stat) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  className="text-center py-6 rounded-sm border border-white/[0.06] bg-white/[0.015] backdrop-blur-2xl">
                  <p className="text-4xl font-serif text-primary italic mb-1">{stat.num}</p>
                  <p className="text-gray-500 text-[10px] uppercase tracking-[0.3em]">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3 ─ Kapsanan Kurumlar */}
      <PageShell id="kurumlar">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <p className="text-primary text-[10px] uppercase tracking-[0.3em] mb-3">Resmi Kurum Süreçleri</p>
          <h2 className="text-3xl md:text-4xl font-serif text-white italic mb-4">
            Tüm Kurum Süreçlerini,<br />Tek Elden Yönetiyoruz.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: Building2, title: 'Belediye', desc: 'İmar durumu, yapı ruhsatı başvurusu ve iskân (yapı kullanma izni) süreçlerinin tamamı.' },
            { icon: Map, title: 'LİHKAB', desc: 'Güncel aplikasyon krokisi ve harita işlemleri.' },
            { icon: Droplets, title: 'TESKİ', desc: 'Kanal kotu tutanağı, sıhhi tesisat onayı ve kanal bağlantı işlemleri.' },
            { icon: Flame, title: 'İtfaiye', desc: 'Yangın güvenlik önlemleri ve itfaiye uygunluk süreçleri.' },
            { icon: Zap, title: 'TREDAŞ', desc: 'Elektrik tesisatı proje onayı ve bağlantı süreçleri.' },
            { icon: ScrollText, title: 'Tapu Müdürlüğü', desc: 'Güncel tapu, ifraz, tevhit ve yol terk işlemleri.' },
          ].map((item) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="rounded-sm border border-white/[0.06] bg-white/[0.015] backdrop-blur-2xl p-6 hover:border-white/15 transition-all">
              <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-white font-serif italic text-lg mb-2">{item.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </PageShell>

      {/* 4 ─ Süreç Adımları */}
      <PageShell id="surec">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <p className="text-primary text-[10px] uppercase tracking-[0.3em] mb-3">Nasıl Çalışıyoruz</p>
          <h2 className="text-3xl md:text-4xl font-serif text-white italic mb-4">
            İmar Durumundan İskâna,<br />Uçtan Uca Takip.
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {[
            { num: '01', title: 'İmar Durumu & Arazi Analizi', desc: 'Tapu, imar durumu, LİHKAB aplikasyon krokisi ve arazi ön incelemesi.' },
            { num: '02', title: 'Proje Hazırlığı', desc: 'Mimari, statik, elektrik, sıhhi tesisat ve ısıtma projeleri; zemin etüdü ve hesap raporları.' },
            { num: '03', title: 'Kurum Onayları', desc: 'TESKİ, TREDAŞ, İtfaiye ve diğer kurum onay süreçlerinin takibi.' },
            { num: '04', title: 'Ruhsat Başvurusu', desc: 'Belediye başvurusu, eksik evrak takibi ve ruhsatın teslim alınması.' },
            { num: '05', title: 'İskân & Kapanış', desc: 'Yapı kullanma izni (iskân) süreci ve son kontroller.' },
          ].map((step) => (
            <motion.div key={step.num} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="flex items-start gap-5 p-6 rounded-sm border border-white/[0.06] bg-white/[0.015] backdrop-blur-2xl hover:border-white/15 transition-all">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 border border-primary/20 text-primary shrink-0">
                <span className="text-sm font-bold">{step.num}</span>
              </div>
              <div>
                <h3 className="text-lg font-serif text-white italic mb-1">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </PageShell>

      {/* 5 ─ Örnek Vaka */}
      <section id="vaka" className="relative py-20 md:py-32 bg-background overflow-hidden scroll-mt-28">
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: 'radial-gradient(circle, #c6a87c 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}>

            <div className="max-w-4xl mx-auto text-center mb-16">
              <p className="text-primary text-[10px] uppercase tracking-[0.3em] mb-3">Örnek Proje</p>
              <h2 className="text-3xl md:text-4xl font-serif text-white italic mb-4">
                Ruhsat Süreci Nasıl İşler?<br />Bir Vaka.
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="rounded-sm border border-white/[0.06] bg-white/[0.015] backdrop-blur-2xl p-8">
                <h3 className="text-xl font-serif text-white italic mb-10">Çerkezköy — Prefabrik Üretim Tesisi (2.500 m²)</h3>

                <div className="relative border-l border-primary/20 ml-5 space-y-10">
                  {[
                    { num: '01', title: 'İmar Durumu & Arazi Analizi', desc: 'Tapu ve imar durumu alındı, LİHKAB aplikasyon krokisi çıkarıldı, arazi ön incelemesi tamamlandı.', dur: 'Hafta 1–2' },
                    { num: '02', title: 'Proje Hazırlığı', desc: 'Mimari ve statik projeler hazırlandı, zemin etüdü ve hesap raporları tamamlandı.', dur: 'Hafta 3–6' },
                    { num: '03', title: 'Kurum Onayları', desc: 'TESKİ, TREDAŞ ve İtfaiye onay süreçleri eksiksiz evrakla yürütüldü.', dur: 'Hafta 7–8' },
                    { num: '04', title: 'Ruhsat Başvurusu', desc: 'Belediye başvurusu yapıldı; eksik evrak yaşanmadan ruhsat onaylandı.', dur: 'Hafta 9' },
                    { num: '05', title: 'İskân & Kapanış', desc: 'İnşaat sonrası yapı kullanma izni (iskân) süreci uçtan uca yönetildi.', dur: 'İnşaat sonrası' },
                  ].map((step) => (
                    <motion.div key={step.num} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                      className="relative pl-10">
                      {/* Dot on the line */}
                      <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-primary border-2 border-background" />
                      {/* Card */}
                      <div className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-5 hover:border-white/15 transition-all">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-primary text-sm font-bold">{step.num}</span>
                          <h4 className="text-base font-serif text-white italic">{step.title}</h4>
                          <span className="text-[10px] uppercase tracking-widest text-primary/80 border border-primary/20 bg-primary/5 px-2 py-0.5 rounded-sm ml-auto shrink-0">{step.dur}</span>
                        </div>
                        <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Result callout */}
                <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  className="mt-10 ml-5 pl-10 relative">
                  <div className="absolute -left-[21px] top-2 w-3 h-3 rounded-full bg-emerald-500 border-2 border-background" />
                  <div className="rounded-sm border border-emerald-500/20 bg-emerald-500/5 p-5 flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-gray-300 text-sm leading-relaxed">
                      <span className="font-bold text-white">Sonuç:</span> Ruhsat süreci eksiksiz evrakla, kurum ziyareti sayısı en aza indirilerek tamamlandı.
                    </p>
                  </div>
                </motion.div>

                <p className="text-gray-600 text-xs mt-8 leading-relaxed">
                  İsimler ve süreler örnek niteliğindedir; her proje kendi koşullarında değerlendirilir.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6 ─ Hizmet Bölgesi */}
      <PageShell id="bolge">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <p className="text-primary text-[10px] uppercase tracking-[0.3em] mb-3">Hizmet Bölgesi</p>
          <h2 className="text-3xl md:text-4xl font-serif text-white italic mb-4">
            Tekirdağ Geneli<br />ve İstanbul.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
          <div className="rounded-sm border border-white/[0.06] bg-surface p-3 hover:border-white/15 transition-all">
            <img src={trakyaHaritasi} alt="Trakya ve İstanbul bölgesi idari haritası" className="w-full h-auto object-contain rounded-sm [filter:invert(0.9)_hue-rotate(180deg)_saturate(0.7)_brightness(0.95)_contrast(1.05)]" width="1200" height="886" loading="lazy" decoding="async" />
          </div>
          <div className="space-y-6">
            <div className="rounded-sm border border-white/[0.06] bg-white/[0.015] backdrop-blur-2xl p-6 hover:border-white/15 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <h3 className="text-white font-serif italic text-lg">Tekirdağ</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Süleymanpaşa, Çorlu, Çerkezköy, Kapaklı, Ergene, Muratlı, Malkara, Hayrabolu, Saray, Şarköy, Marmara Ereğlisi
              </p>
            </div>
            <div className="rounded-sm border border-white/[0.06] bg-white/[0.015] backdrop-blur-2xl p-6 hover:border-white/15 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <h3 className="text-white font-serif italic text-lg">İstanbul (Avrupa Yakası)</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Silivri, Çatalca, Büyükçekmece, Arnavutköy, Beylikdüzü, Esenyurt ve tüm ilçeler
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <a href="tel:+902826060639" className="inline-block rounded-sm border border-primary/20 bg-primary/5 px-5 py-2 text-[10px] font-bold text-primary uppercase tracking-[0.28em] hover:bg-primary/10 transition-all">
            Listede olmayan bir bölge mi? Bizi arayın, değerlendirelim.
          </a>
        </div>
      </PageShell>

      {/* 7 ─ Belge ve Projeler (21 madde) */}
      <PageShell id="belgeler">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-primary text-[10px] uppercase tracking-[0.3em] mb-3">Ruhsat Evrak Listesi</p>
          <h2 className="text-3xl md:text-4xl font-serif text-white italic mb-4">
            Başvuru İçin Gereken<br />Belge ve Projeler.
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Tekirdağ belediyelerinin güncel ruhsat evrak şartlarına göre hazırlanmıştır; proje türüne göre değişiklik gösterebilir. Elektrik ve sıhhi tesisat projeleri ile kanal kotu tutanağı, ruhsat başvurusundan sonra da teslim edilebilir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {/* Belgeler 1-11 */}
          <div className="col-span-1 md:col-span-2 mb-2">
            <p className="text-[10px] uppercase tracking-[0.3em] text-primary mb-2">Başvuru Dosyası</p>
            <h3 className="text-white font-serif italic text-lg">Belgeler</h3>
          </div>
          {[
            { num: 1, title: 'Dilekçe', note: 'mülkiyet sahibi veya kanuni vekili tarafından' },
            { num: 2, title: 'Tapu', note: 'yol terk, ifraz, tevhit vb. işlemleri yapılmış, güncel, tüm malikleri içeren' },
            { num: 3, title: 'Hissedar Muvafakatnamesi', note: 'hissedar varsa, tüm maliklerin noter onaylı muvafakatnamesi' },
            { num: 4, title: 'İmar Durumu' },
            { num: 5, title: 'LİHKAB Aplikasyon Krokisi', note: '6 ayı geçmemiş' },
            { num: 6, title: 'Yapı Aplikasyon Krokisi' },
            { num: 7, title: 'Kotlu Kroki', note: 'arazinin tabii zemin kotlarını gösteren' },
            { num: 8, title: 'Yol Kotu Tutanağı', note: 'onaylı' },
            { num: 9, title: 'İstikamet Rölövesi', note: 'sadece yol ve komşu yaklaşma mesafeleri belirtilmeyen imar adalarında ve kamusal alanlara komşu imar parsellerinde düzenlenir' },
            { num: 10, title: 'Kanal Kotu Tutanağı', note: 'TESKİ onaylı; ruhsat yazımı aşamasında teslim edilebilir; kanal bağlantısı belirtilir (TESKİ kontrol aşamasında)' },
            { num: 11, title: 'Fotoğraf Paftası', note: 'mimari proje müellifi onaylı, arazinin mevcut durumunu gösteren' },
          ].map((item) => (
            <motion.div key={item.num} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="flex items-start gap-3 p-4 rounded-sm border border-white/[0.06] bg-white/[0.015] backdrop-blur-2xl hover:border-white/15 transition-all">
              <span className="text-primary text-xs font-bold mt-0.5 shrink-0">{item.num}.</span>
              <div>
                <span className="text-white text-sm font-sans">{item.title}</span>
                {item.note && <span className="text-gray-500 text-xs ml-1">— {item.note}</span>}
              </div>
            </motion.div>
          ))}

          {/* Projeler & Raporlar 12-21 */}
          <div className="col-span-1 md:col-span-2 mt-6 mb-2">
            <p className="text-[10px] uppercase tracking-[0.3em] text-primary mb-2">Teknik Dosya</p>
            <h3 className="text-white font-serif italic text-lg">Proje & Raporlar</h3>
          </div>
          {[
            { num: 12, title: 'Mimari Proje' },
            { num: 13, title: 'Statik Proje' },
            { num: 14, title: 'Statik Proje Hesap Raporu' },
            { num: 15, title: 'Zemin Etüt Raporu' },
            { num: 16, title: 'Elektrik Tesisatı Projeleri', note: 'TREDAŞ onaylı; ruhsat başvurusundan sonra teslim edilebilir' },
            { num: 17, title: 'Sıhhi Tesisat Projesi', note: 'TESKİ onaylı; ruhsat başvurusundan sonra teslim edilebilir' },
            { num: 18, title: 'Isıtma Tesisatı Projesi' },
            { num: 19, title: 'Isı Yalıtım Raporu' },
            { num: 20, title: 'Akustik Proje veya Akustik Performans Raporu', note: 'gereklilik koşulları projesine göre belirlenir' },
            { num: 21, title: 'Asansör Tesisatı Projesi', note: 'gereklilik koşulları projesine göre belirlenir' },
          ].map((item) => (
            <motion.div key={item.num} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="flex items-start gap-3 p-4 rounded-sm border border-white/[0.06] bg-white/[0.015] backdrop-blur-2xl hover:border-white/15 transition-all">
              <span className="text-primary text-xs font-bold mt-0.5 shrink-0">{item.num}.</span>
              <div>
                <span className="text-white text-sm font-sans">{item.title}</span>
                {item.note && <span className="text-gray-500 text-xs ml-1">— {item.note}</span>}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#teklif" className="inline-flex items-center gap-2 bg-primary text-black px-8 py-4 rounded-sm font-sans text-[11px] font-bold uppercase tracking-widest hover:bg-white transition-all duration-300">
            Evrak listeniz eksik mi? Biz tamamlarız.
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </PageShell>

      {/* 8 ─ Mid-page CTA Band */}
      <section id="cta" className="relative py-20 md:py-28 bg-background overflow-hidden scroll-mt-28">
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: 'radial-gradient(circle, #c6a87c 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}>
            <div className="max-w-3xl mx-auto text-center rounded-sm border border-white/[0.06] bg-white/[0.015] backdrop-blur-2xl p-12 md:p-16">
              <p className="text-primary text-[10px] uppercase tracking-[0.3em] mb-3">Hemen Başlayalım</p>
              <h2 className="text-3xl md:text-4xl font-serif text-white italic mb-4">
                İlk Görüşme Ücretsiz.<br />24 Saatte Dönüş.
              </h2>
              <p className="text-gray-400 text-sm max-w-lg mx-auto leading-relaxed mb-10">
                Projenizi anlatın, süreci birlikte planlayalım.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="https://wa.me/902826060639" target="_blank" rel="noopener noreferrer"
                  onClick={() => logAnalyticsEvent('cta_click', { label: 'whatsapp_cta_band', location: 'trakya-ruhsat-is-takibi' })}
                  className="inline-flex items-center gap-2.5 bg-emerald-500 text-black px-8 py-4 rounded-sm font-sans text-[11px] font-bold uppercase tracking-widest hover:bg-emerald-400 transition-all duration-300">
                  <WhatsAppIcon className="w-4 h-4" />
                  WhatsApp'tan Yazın
                </a>
                <a href="tel:+902826060639"
                  onClick={() => logAnalyticsEvent('cta_click', { label: 'bizi_ariyin_cta', location: 'trakya-ruhsat-is-takibi' })}
                  className="inline-flex items-center gap-2 bg-transparent border border-white/20 text-white px-8 py-4 rounded-sm font-sans text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                  Bizi Arayın
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9 ─ Teklif Formu */}
      <PageShell id="teklif">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="mb-10">
                <p className="text-primary text-[10px] uppercase tracking-[0.3em] mb-3">İletişim</p>
                <h2 className="text-3xl md:text-4xl font-serif text-white italic mb-4">
                  Projenizi Anlatın,<br />Süreci Biz Yönetelim.
                </h2>
              </div>
              <TrakyaForm />
            </div>

            {/* Yan bilgi */}
            <div className="lg:col-span-2">
              <div className="rounded-sm border border-white/[0.06] bg-white/[0.015] backdrop-blur-2xl p-8 sticky top-28">
                <h3 className="text-white font-serif italic text-lg mb-6">İletişim Bilgileri</h3>
                <div className="space-y-5">
                  <a href="https://wa.me/902826060639" target="_blank" rel="noopener noreferrer"
                    onClick={() => logAnalyticsEvent('cta_click', { label: 'whatsapp', location: 'trakya-ruhsat-is-takibi' })}
                    className="flex items-center justify-center gap-2.5 w-full bg-emerald-500 text-black px-6 py-3.5 rounded-sm font-sans text-[11px] font-bold uppercase tracking-widest hover:bg-emerald-400 transition-all duration-300">
                    <WhatsAppIcon />
                    WhatsApp'tan Yazın
                  </a>
                  <a href="tel:+902826060639" className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors group">
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm">+90 282 606 06 39</span>
                  </a>
                  <a href="mailto:info@archilya.com" className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors group">
                    <Mail className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm">info@archilya.com</span>
                  </a>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <img src={constructionDrawing} alt="İmar projesi" className="w-full h-40 object-cover rounded-sm opacity-40" width="400" height="160" loading="lazy" decoding="async" />
                </div>
                <p className="text-gray-600 text-xs mt-6 leading-relaxed">
                  Tüm projeler gizlilik ilkesiyle yürütülür.{' '}
                  <Link to="/kvkk" className="text-primary/60 hover:text-primary underline transition-colors">KVKK</Link>{' '}
                  ve{' '}
                  <Link to="/gizlilik-politikasi" className="text-primary/60 hover:text-primary underline transition-colors">Gizlilik Politikası</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageShell>

      {/* 10 ─ SSS */}
      <PageShell id="sss">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary text-[10px] uppercase tracking-[0.3em] mb-3">SSS</p>
          <h2 className="text-3xl md:text-4xl font-serif text-white italic mb-4">Sık Sorulan<br />Sorular.</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { q: 'Ruhsat süreci ne kadar sürer?', a: 'Proje türüne ve kurum yoğunluğuna göre değişir. Evrak tamlığı ve imar durumu netleştiğinde tahmini süreyi ilk görüşmede söyleriz; süreç boyunca her aşamayı size raporlarız.' },
            { q: 'Uzaktaki bir firmayız, saha işlerini nasıl yürüteceksiniz?', a: 'Bölgedeki tüm saha ve kurum işlerini biz yürütürüz; sizden yalnızca evrak ve onaylar gelir. Samsun\'dan, Bursa\'dan çalışan firmalarımız var — yüz yüze görüşme zorunluluğu yoktur.' },
            { q: 'Hangi bölgelerde hizmet veriyorsunuz?', a: 'Tekirdağ geneli ve İstanbul, özellikle Avrupa yakası. Kapsam dışı bir bölge için bizi arayın, değerlendirelim.' },
            { q: 'Evrak listesi her projede aynı mı?', a: 'Hayır; proje türüne ve belediyeye göre değişir. Sizin projeniz için gerekli listeyi başvuru öncesinde netleştirip size bildiririz.' },
            { q: 'Projeleri de siz mi hazırlıyorsunuz?', a: 'Evet; mimari projeden statik, elektrik, sıhhi tesisat ve zemin etüdüne kadar tüm proje ve raporları koordine eder, eksikleri tamamlarız.' },
            { q: 'İskân (yapı kullanma izni) sürecini de yönetiyor musunuz?', a: 'Evet; ruhsattan iskâna kadar tüm süreç uçtan uca yönetim kapsamındadır.' },
          ].map((item) => (
            <motion.details key={item.q} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="rounded-sm border border-white/[0.06] bg-white/[0.015] backdrop-blur-2xl group open:border-primary/20 open:bg-primary/[0.02] transition-all">
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer text-sm text-white font-sans hover:text-primary transition-colors [&::-webkit-details-marker]:hidden">
                {item.q}
                <ChevronDown className="w-4 h-4 text-primary group-open:rotate-180 transition-transform shrink-0" />
              </summary>
              <p className="px-6 pb-4 text-gray-500 text-xs leading-relaxed">{item.a}</p>
            </motion.details>
          ))}
        </div>
      </PageShell>

      {/* ── Local Footer */}
      <footer className="bg-[#0a0c0f] border-t border-white/5 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] bg-primary/3 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-white/5">
            {/* Brand + Company (5 cols) */}
            <div className="md:col-span-5">
              <Link to="/" className="inline-flex flex-col mb-4">
                <span className="font-serif text-3xl text-white italic tracking-wide">Archilya</span>
                <span className="text-[9px] text-primary uppercase tracking-[0.3em] mt-0.5">Premium Studio</span>
              </Link>
              <p className="text-xs text-gray-600 font-sans leading-relaxed mt-4 mb-6 max-w-[320px]">
                Tekirdağ ve İstanbul bölgesinde imar durumundan iskâna tüm resmi kurum süreçlerini tek elden yönetiyoruz.
              </p>
              <div className="space-y-3">
                <p className="text-[10px] text-gray-500 font-sans uppercase tracking-[0.2em] mb-3">
                  NEBULA NOVA GAMES DIŞ TİCARET LİMİTED ŞİRKETİ
                </p>
                <div className="flex items-start gap-2 text-gray-600">
                  <MapPin className="w-3.5 h-3.5 text-primary/60 shrink-0 mt-0.5" />
                  <span className="text-[11px] font-sans leading-relaxed">
                    Silahtarağa Mah. Üniversite 1. Sk. No:13/1 İç Kapı No:Z109<br />
                    59000 Çorlu / TEKİRDAĞ
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-3.5 h-3.5 text-primary/60 shrink-0" />
                  <a href="tel:+902826060639" className="text-[11px] font-sans hover:text-primary transition-colors">
                    0 (282) 606 06 39
                  </a>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-3.5 h-3.5 text-primary/60 shrink-0" />
                  <a href="mailto:info@archilya.com" className="text-[11px] font-sans hover:text-primary transition-colors">
                    info@archilya.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <WhatsAppIcon className="w-3.5 h-3.5 text-primary/60 shrink-0" />
                  <a href="https://wa.me/902826060639" target="_blank" rel="noopener noreferrer" className="text-[11px] font-sans hover:text-primary transition-colors">
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links (3 cols) */}
            <div className="md:col-span-3">
              <p className="text-[10px] font-sans font-bold text-gray-500 uppercase tracking-[0.25em] mb-5">Hızlı Bağlantılar</p>
              <ul className="space-y-3">
                {[
                  { label: 'Ana Sayfa', to: '/' },
                  { label: 'Franchise/Partner', to: '/franchise-partner' },
                  { label: 'Ruhsat Takibi', to: '/trakya-ruhsat-is-takibi' },
                  { label: 'SSS', href: '#sss' },
                  { label: 'KVKK', to: '/kvkk' },
                  { label: 'Gizlilik Politikası', to: '/gizlilik-politikasi' },
                ].map((item) => (
                  <li key={item.label}>
                    {item.to ? (
                      <Link to={item.to} className="text-[11px] font-sans text-gray-600 hover:text-primary transition-colors">{item.label}</Link>
                    ) : (
                      <a href={item.href} className="text-[11px] font-sans text-gray-600 hover:text-primary transition-colors">{item.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Ruhsat Hizmeti panel (4 cols) */}
            <div className="md:col-span-4">
              <p className="text-[10px] font-sans font-bold text-gray-500 uppercase tracking-[0.25em] mb-5">Ruhsat Hizmeti</p>
              <p className="text-xs text-gray-600 font-sans leading-relaxed mb-6">
                Tekirdağ ve İstanbul'da imar durumundan iskâna tüm resmi süreçleri tek elden yönetiyoruz.
              </p>
              <div className="flex flex-col gap-3">
                <a href="https://wa.me/902826060639" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-black px-6 py-2.5 rounded-sm font-sans text-[11px] font-bold uppercase tracking-widest hover:bg-emerald-400 transition-all duration-300">
                  <WhatsAppIcon className="w-4 h-4" />
                  WhatsApp'tan Yazın
                </a>
                <a href="tel:+902826060639"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border border-white/15 text-white px-6 py-2.5 rounded-sm font-sans text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                  Bizi Arayın
                </a>
              </div>
            </div>
          </div>

          {/* Bottom strip */}
          <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-[11px] text-gray-700 font-sans">
              © {new Date().getFullYear()} Archilya · Nebula Nova Games Dış Ticaret Ltd. Şti. Tüm hakları saklıdır.
            </p>
            <Link to="/" className="inline-flex items-center gap-2 text-primary text-[11px] font-bold uppercase tracking-widest border-b border-primary/30 pb-1 hover:text-white hover:border-white transition-all">
              Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ─── Contact Form ─────────────────────────────────────────── */

function TrakyaForm() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    projectType: '',
    message: '',
    website: '', // honeypot
  });

  function update(field, value) {
    setForm((p) => ({ ...p, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (form.website) return; // honeypot
    if (!form.name || !form.phone || !form.email) {
      toast.error('Lütfen zorunlu alanları doldurun.');
      return;
    }

    // Form verilerinden WhatsApp mesajı hazırla
    const lines = [
      'Merhaba, Trakya Ruhsat İş Takibi sayfanızdan teklif talebinde bulunuyorum.',
      '',
      `Ad Soyad: ${form.name}`,
    ];
    if (form.company) lines.push(`Firma: ${form.company}`);
    lines.push(`Telefon: ${form.phone}`);
    lines.push(`E-posta: ${form.email}`);
    if (form.projectType) lines.push(`Proje Türü: ${form.projectType}`);
    if (form.message) lines.push(`Mesaj: ${form.message}`);

    const url = `https://wa.me/902826060639?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener,noreferrer');

    logAnalyticsEvent('form_submit', { label: 'teklif_form_whatsapp', location: 'trakya-ruhsat-is-takibi' });
    toast.success('WhatsApp açıldı — mesajınız hazırlandı, göndermek için son adımı tamamlayın.');
    setForm({ name: '', company: '', phone: '', email: '', projectType: '', message: '', website: '' });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot */}
      <input type="text" name="website" value={form.website} onChange={(e) => update('website', e.target.value)} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-gray-500 mb-1.5">Ad Soyad *</label>
          <input value={form.name} onChange={(e) => update('name', e.target.value)} required
            className="w-full rounded-sm border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-gray-700 focus:border-primary/40 focus:outline-none" />
        </div>
        <div>
          <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-gray-500 mb-1.5">Firma</label>
          <input value={form.company} onChange={(e) => update('company', e.target.value)}
            className="w-full rounded-sm border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-gray-700 focus:border-primary/40 focus:outline-none" />
        </div>
        <div>
          <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-gray-500 mb-1.5">Telefon *</label>
          <input type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} required
            className="w-full rounded-sm border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-gray-700 focus:border-primary/40 focus:outline-none" />
        </div>
        <div>
          <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-gray-500 mb-1.5">E-posta *</label>
          <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} required
            className="w-full rounded-sm border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-gray-700 focus:border-primary/40 focus:outline-none" />
        </div>
      </div>

      <div>
        <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-gray-500 mb-1.5">Proje Türü</label>
        <select value={form.projectType} onChange={(e) => update('projectType', e.target.value)}
          className="w-full rounded-sm border border-white/10 bg-[#1a1c23] px-3 py-2.5 text-sm text-gray-300 focus:border-primary/40 focus:outline-none">
          <option value="" className="bg-[#1a1c23] text-gray-500">Seçiniz</option>
          <option value="Konut" className="bg-[#1a1c23] text-gray-300">Konut</option>
          <option value="Prefabrik" className="bg-[#1a1c23] text-gray-300">Prefabrik</option>
          <option value="Ticari" className="bg-[#1a1c23] text-gray-300">Ticari</option>
          <option value="Sanayi" className="bg-[#1a1c23] text-gray-300">Sanayi</option>
          <option value="Diğer" className="bg-[#1a1c23] text-gray-300">Diğer</option>
        </select>
      </div>

      <div>
        <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-gray-500 mb-1.5">Mesaj</label>
        <textarea value={form.message} onChange={(e) => update('message', e.target.value)} rows={4}
          className="w-full rounded-sm border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-gray-700 focus:border-primary/40 focus:outline-none"
          placeholder="Projeniz hakkında bilgi verin..." />
      </div>

      <button type="submit"
        className="w-full flex items-center justify-center gap-2.5 bg-emerald-500 text-black px-8 py-4 rounded-sm font-sans text-[11px] font-bold uppercase tracking-widest hover:bg-emerald-400 transition-all duration-300">
        <WhatsAppIcon />
        WhatsApp'tan Gönder
      </button>
    </form>
  );
}
