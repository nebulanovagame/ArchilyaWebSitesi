import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Palette, BarChart3, Sun, GitBranch, MonitorPlay, Check, Sparkles, Wand2, ScanLine,
  Image, Maximize, Globe, Grid3X3, Layers, FileEdit,
} from 'lucide-react';
import clsx from 'clsx';

const AI_STUDIO_FEATURES = [
  {
    id: 'render',
    icon: Sparkles,
    title: 'Premium Render & Stil Transferi',
    subtitle: 'AI Üretim Motoru',
    tag: 'Archilya AI Studio',
    desc: 'Görseli yükleyin. Referans stil, atmosfer ve malzeme diliyle profesyonel render seviyesine çıksın.',
    details: [
      'Premium Render ve Referans Stil Render',
      'İç Mekan, Dış Cephe ve Peyzaj Premium Araçları',
      'Çok Açılı Render ile Tutarlı Mekan Dili',
      'Render Kalite Analizi ve İyileştirme Önerileri',
    ],
    media: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80&auto=format&fit=crop',
    mediaAlt: 'AI Studio — Premium Render Demo',
    mediaType: 'image',
  },
  {
    id: 'revision',
    icon: Wand2,
    title: 'Kontrollü Revizyon & Konsept İlhamı',
    subtitle: 'Müşteri Notundan Görsele',
    tag: 'Archilya AI Studio',
    desc: 'Render sürecini başa sarmayın. Sahne düzenleme, malzeme revizyonu ve konsept ilhamıyla karar döngüsünü hızlandırın.',
    details: [
      'Revizyon Düzenleyici ve Sahne Düzenleme',
      'İç Mekan İlham ve Konsept Alternatifleri',
      'Malzeme, Işık, Mobilya ve Zemin Revizyonları',
      'Prompt Kütüphanesi ve İş Akışı Devam Ettirme',
    ],
    media: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=900&q=80&auto=format&fit=crop',
    mediaAlt: 'AI Studio — Revizyon Demo',
    mediaType: 'image',
  },
  {
    id: 'presentation-ai',
    icon: ScanLine,
    title: 'Plan, Analiz ve Sunuma Hazırlık',
    subtitle: 'Çizimden Paftaya',
    tag: 'Archilya AI Studio',
    desc: 'Kat planı, analiz, doku ve malzeme çıktılarıyla sunum dosyanızı tek platformda zenginleştirin.',
    details: [
      'Premium Kat Planı ve Plan Boyama',
      'Tasarım Analizi ve Mimari Rapor Altyapısı',
      'Doku Üretici ve Malzeme Listesi Yol Haritası',
      '360 Panorama ve Video Generator Beta Hattı',
    ],
    media: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format&fit=crop',
    mediaAlt: 'AI Studio — Plan ve Analiz Demo',
    mediaType: 'image',
  },
];

const AI_TOOLS_GRID = [
  { id: 'premium-render', icon: Image, label: 'Premium Render', credit: 15, active: true },
  { id: 'revision-edit', icon: FileEdit, label: 'Revizyon Düzenleyici', credit: 25, active: true },
  { id: 'plan-color', icon: Palette, label: 'Premium Kat Planı', credit: 15, active: true },
  { id: 'analysis', icon: ScanLine, label: 'Tasarım Analizi', credit: 5, active: true },
  { id: 'multi-angle', icon: Layers, label: 'Çok Açılı Render', credit: 15, active: true },
  { id: 'texture', icon: Grid3X3, label: 'Doku Üretici', credit: 15, active: false, badge: 'Beta' },
  { id: 'panorama', icon: Globe, label: '360 Panorama', credit: 25, active: false, badge: 'Beta' },
  { id: 'upscale', icon: Maximize, label: '4K İyileştirme', credit: 10, active: false, badge: 'Beta' },
];

const VR_FEATURES = [
  {
    id: 'living',
    icon: Palette,
    title: 'Yaşayan Mekan',
    subtitle: 'Canlı Tasarım & Mekanik Etkileşimler',
    tag: 'Archilya VR',
    desc: 'Görsel dili sunum sahnesine taşıyın. Kapılar açılır, malzeme değişir, karar anında verilir.',
    details: [
      'Kapı, Işık ve Mobilya Mekanik Etkileşimleri',
      'Tasarım Modu: Anlık Materyal & Zemin Değişimi',
      'Nesne Bazlı Bilgi Ekranları (Object Info)',
      'Toplu Tasarım Şemaları (Design Schemes)',
    ],
    media: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80&auto=format&fit=crop',
    mediaAlt: 'Yaşayan Mekan — Canlı Tasarım Demo',
    mediaType: 'image',
  },
  {
    id: 'budget',
    icon: BarChart3,
    title: 'Eşzamanlı ve İnteraktif Bütçe Yönetimi',
    subtitle: 'Canlı Maliyet Takibi & Raporlama',
    tag: 'Archilya VR Pro',
    desc: 'Her malzeme değişikliği maliyet barına anında yansır. Tek tıkla HTML, CSV veya JSON raporu oluşturun.',
    details: [
      'Seçimlere Göre Eşzamanlı Maliyet Barı',
      'Bütçe Sınırı Uyarı Sistemi',
      'HTML, CSV, JSON Formatında Maliyet Raporu',
      'Malzeme Karşılaştırma ve Varyasyon Tablosu',
    ],
    media: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format&fit=crop',
    mediaAlt: 'Eşzamanlı Bütçe Yönetimi Demo',
    mediaType: 'image',
  },
  {
    id: 'scenarios',
    icon: Sun,
    title: 'Dinamik Senaryolar & Mevsim Döngüsü',
    subtitle: 'Zaman & Aydınlatma Şovu',
    tag: 'Archilya VR Pro',
    desc: 'Güneşi oynatın, mevsimi değiştirin. Işık ve yerleşim senaryoları arasında geçişle unutulmaz bir şov yaratın.',
    details: [
      'Gerçek Zamanlı Gün Işığı, Saat & Güneş Döngüsü',
      'Mevsim Senaryoları (Yaz / Kış / Sisli / Gece)',
      'Aydınlatma & Yerleşim Senaryoları Arası Geçiş',
      'Sinematik Kamera ile Yüksek Çözünürlüklü Çıktı',
    ],
    media: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80&auto=format&fit=crop',
    mediaAlt: 'Dinamik Senaryolar & Mevsim Döngüsü Demo',
    mediaType: 'image',
  },
];

const PANEL_FEATURES = [
  {
    id: 'sync',
    icon: GitBranch,
    title: 'Dosya Senkronizasyonu & Sürüm Kontrolü',
    subtitle: 'Revizyon Yönetimi',
    tag: 'Archilya Panel',
    desc: 'Revizyon geçmişiniz bulutta, ekibiniz senkronize. İstediğiniz an önceki tasarıma dönün, hiçbir dosya kaybolmasın.',
    details: [
      'Bulut Tabanlı Sürüm Geçmişi & Anlık Senkronizasyon',
      '5 Kayıt Yuvası + Varsayılan Profil (Save Slots)',
      'Ekip İçi Revizyon Takibi ve Geri Dönüş',
      'Güvenli & Şifrelenmiş Bulut Depolama',
    ],
    media: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=900&q=80&auto=format&fit=crop',
    mediaAlt: 'Dosya Senkronizasyonu & Sürüm Kontrolü Demo',
    mediaType: 'image',
  },
  {
    id: 'platform',
    icon: MonitorPlay,
    title: 'Çoklu Platform & Sunum Esnekliği',
    subtitle: 'Her Cihazdan Erişim',
    tag: 'Archilya Panel',
    desc: 'Web tarayıcı, dokunmatik, gamepad, VR başlık. Projeniz her cihazda aynı premium deneyimi sunsun.',
    details: [
      'Klavye / Mouse / Gamepad / Dokunmatik Kontrol',
      'Çoklu Platform Desteği (Windows & Uyumlu Cihazlar)',
      'Bulut Altyapısıyla Veri & Kullanıcı Yönetimi',
      'Çoklu Ünite (Multi-Unit) Proje Desteği',
    ],
    media: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=900&q=80&auto=format&fit=crop',
    mediaAlt: 'Çoklu Platform Desteği Demo',
    mediaType: 'image',
  },
];

function MediaBlock({ feature, accent }) {
  const borderCls = accent === 'amber' ? 'border-amber-400/20 hover:border-amber-400/40' : 'border-primary/20 hover:border-primary/40';
  const cornerCls = accent === 'amber' ? 'border-amber-400/40' : 'border-primary/40';
  const tagCls = accent === 'amber' ? 'bg-amber-400/15 text-amber-400 border-amber-400/25' : 'bg-primary/15 text-primary border-primary/25';

  return (
    <div className={clsx('relative w-full aspect-video rounded-sm border overflow-hidden transition-all duration-500 group', borderCls)}>
      <img
        src={feature.media}
        alt={feature.mediaAlt}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-[1.02] transition-all duration-700"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className={`absolute inset-0 bg-gradient-to-br ${accent === 'amber' ? 'from-amber-400/5' : 'from-primary/5'} to-transparent`} />

      <div className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 ${cornerCls}`} />
      <div className={`absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 ${cornerCls}`} />
      <div className={`absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 ${cornerCls}`} />
      <div className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 ${cornerCls}`} />

      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        <span className={clsx('text-[9px] font-bold uppercase tracking-[0.25em] px-2.5 py-1 rounded-sm border backdrop-blur-sm', tagCls)}>
          {feature.tag}
        </span>
        <span className="text-[9px] text-white/30 uppercase tracking-widest font-sans">
          Demo / Placeholder
        </span>
      </div>
    </div>
  );
}

function FeatureBlock({ features, accent }) {
  const [active, setActive] = useState(0);
  const cur = features[active];

  const A = accent === 'amber' ? {
    activeBorder: 'border-amber-400/40',
    glow: 'shadow-[0_0_24px_rgba(251,191,36,0.10)]',
    iconActive: 'bg-amber-400 text-black',
    iconIdle: 'bg-white/5 text-gray-500 group-hover:text-white',
    tag: 'text-amber-400',
    glowGrad: 'from-amber-400/8',
    check: 'bg-amber-400/15 text-amber-400',
    detailBorder: 'border-amber-400/20',
    lineBottom: 'from-amber-400/30',
  } : {
    activeBorder: 'border-primary/40',
    glow: 'shadow-[0_0_24px_rgba(198,168,124,0.10)]',
    iconActive: 'bg-primary text-black',
    iconIdle: 'bg-white/5 text-gray-500 group-hover:text-white',
    tag: 'text-primary',
    glowGrad: 'from-primary/8',
    check: 'bg-primary/15 text-primary',
    detailBorder: 'border-primary/20',
    lineBottom: 'from-primary/30',
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      <div className="lg:col-span-4 space-y-2">
        {features.map((f, i) => (
          <button
            key={f.id}
            onClick={() => setActive(i)}
            className={clsx(
              'w-full text-left p-5 rounded-sm border transition-all duration-300 group relative overflow-hidden',
              active === i
                ? `bg-surface ${A.activeBorder} ${A.glow}`
                : 'bg-transparent border-white/5 hover:bg-white/3 hover:border-white/12',
            )}
          >
            <div className="flex items-start gap-3 relative z-10">
              <div className={clsx('p-2.5 rounded-sm transition-colors shrink-0', active === i ? A.iconActive : A.iconIdle)}>
                <f.icon className="w-4 h-4" />
              </div>
              <div>
                <p className={clsx('text-[9px] font-bold uppercase tracking-widest mb-1 opacity-80', A.tag)}>{f.tag}</p>
                <p className={clsx('text-sm font-serif leading-snug transition-colors', active === i ? 'text-white' : 'text-gray-400 group-hover:text-gray-200')}>
                  {f.title}
                </p>
              </div>
            </div>
            {active === i && (
              <motion.div layoutId={`glow-${accent}`} className={`absolute inset-0 bg-gradient-to-r ${A.glowGrad} to-transparent pointer-events-none`} />
            )}
          </button>
        ))}
      </div>

      <div className="lg:col-span-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={cur.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={clsx('rounded-sm border bg-surface/50 backdrop-blur-sm p-5 md:p-7 relative overflow-hidden', A.activeBorder)}
          >
            <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r ${A.lineBottom} to-transparent`} />

            <div className="mb-7">
              <MediaBlock feature={cur} accent={accent} />
            </div>

            <p className={clsx('text-[10px] font-bold uppercase tracking-[0.25em] mb-1', A.tag)}>{cur.subtitle}</p>
            <h3 className="text-xl font-serif text-white italic mb-3">{cur.title}</h3>
            <p className="text-gray-500 text-xs leading-relaxed mb-6 border-l-2 border-white/8 pl-4">{cur.desc}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {cur.details.map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.06 }}
                  className="flex items-start gap-2.5 bg-black/20 border border-white/5 rounded-sm px-3.5 py-2.5"
                >
                  <div className={clsx('w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5', A.check)}>
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span className="text-xs text-gray-300 leading-relaxed">{d}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="vr-sunum" className="py-16 md:py-32 bg-background relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#c6a87c 1px, transparent 1px), linear-gradient(90deg, #c6a87c 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-amber-400/4 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-primary/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-20"
        >
          <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">Ekosistem</p>
          <h2 className="text-3xl md:text-5xl font-serif text-white italic mb-4">Özellikler</h2>
          <p className="text-gray-500 text-sm font-sans max-w-xl mx-auto leading-relaxed">
            Archilya, mimari ofislere üç bütünleşik güç sunar: üretimi hızlandıran AI Studio,
            müşteriyi ikna eden VR/Web sunum ve arka planda ofisi yöneten workspace.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, margin: '-60px' }} className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-3 px-5 py-2 border border-primary/20 rounded-sm bg-primary/5 shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-primary">Archilya AI Studio — Üretim Motoru</span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
          </div>

          <FeatureBlock features={AI_STUDIO_FEATURES} accent="primary" />
        </motion.div>

        {/* AI Tool Grid Vitrini */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: '-60px' }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-primary/70">
              AI Studio Araç Seti
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {AI_TOOLS_GRID.map((tool) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={tool.id}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="group relative rounded-sm border border-white/[0.06] bg-white/[0.015] p-3 md:p-4 text-center transition-all duration-200 hover:border-white/[0.14] hover:bg-white/[0.025]"
                >
                  <div className="flex flex-col items-center gap-2.5">
                    <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-sm border border-primary/15 bg-primary/[0.06] text-primary transition-colors group-hover:bg-primary/[0.12]">
                      <Icon className="h-4 w-4 md:h-5 md:w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-sans font-semibold text-white/70 group-hover:text-white transition-colors leading-tight">
                        {tool.label}
                      </p>
                      <p className="mt-1 text-[7px] text-gray-600 font-sans">
                        {tool.active ? `${tool.credit} işlem hakkı` : '\u00A0'}
                      </p>
                    </div>
                  </div>
                  {tool.badge && (
                    <span className="absolute top-1.5 right-1.5 rounded-sm bg-amber-500/10 px-1.5 py-0.5 text-[6px] font-bold uppercase tracking-wider text-amber-400">
                      {tool.badge}
                    </span>
                  )}
                  {tool.active && (
                    <span className="absolute top-1.5 left-1.5 flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </span>
                  )}
                </motion.div>
              );
            })}
          </div>

          <p className="text-[9px] text-gray-600 text-center mt-4 uppercase tracking-widest">
            Aktif araçlar · Beta araçlar · Yakında 4+ yeni modül
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, margin: '-60px' }}>
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-3 px-5 py-2 border border-amber-400/20 rounded-sm bg-amber-400/5 shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-400">Archilya VR — Sunum Şovu</span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-amber-400/20 to-transparent" />
          </div>

          <FeatureBlock features={VR_FEATURES} accent="amber" />
        </motion.div>

        {/* VR / Pixel Streaming Deneyim Akışı */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-60px' }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-amber-400/70">
              Müşteri Deneyim Akışı
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-amber-400/20 to-transparent" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                step: '01',
                icon: MonitorPlay,
                title: 'Linki Paylaşın',
                desc: 'Pixel Streaming veya VR sunum bağlantısını müşterinize iletin. Kurulum, kayıt veya uygulama gerekmez.',
              },
              {
                step: '02',
                icon: Globe,
                title: 'Müşteri Tıklar, Görür',
                desc: 'Linke tıklayan müşteri, projenin içinde anında belirir. Telefon, tablet veya VR başlık fark etmez.',
              },
              {
                step: '03',
                icon: Palette,
                title: 'Malzeme Değiştirir',
                desc: 'Zemin, duvar, mobilya seçeneklerini canlı dener. Bütçe ve süre anında güncellenir.',
              },
              {
                step: '04',
                icon: BarChart3,
                title: 'Karar Verir',
                desc: 'Toplantı bitmeden kombinasyon netleşir. Revizyon döngüsü günler değil, dakikalar sürer.',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="group relative rounded-sm border border-white/[0.06] bg-white/[0.015] p-6 text-center transition-all duration-200 hover:border-amber-400/20 hover:bg-amber-400/[0.03]"
                >
                  <div className="flex flex-col items-center gap-4">
                    <span className="text-[40px] font-serif font-bold italic text-amber-400/20 leading-none select-none">
                      {item.step}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-amber-400/20 bg-amber-400/[0.06] text-amber-400 transition-colors group-hover:bg-amber-400/[0.12]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-serif text-white italic mb-2">{item.title}</p>
                      <p className="text-[11px] text-gray-500 font-sans leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 hidden lg:block text-amber-400/30">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <p className="text-[10px] text-gray-600 text-center mt-5 uppercase tracking-widest">
            Tek link · Dört adım · Sıfır kurulum
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="flex items-center gap-5 my-20">
          <div className="h-px flex-1 bg-white/5" />
          <span className="text-[9px] font-bold text-gray-700 uppercase tracking-[0.35em] px-4">Archilya Ekosistemi</span>
          <div className="h-px flex-1 bg-white/5" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, margin: '-60px' }}>
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-3 px-5 py-2 border border-primary/20 rounded-sm bg-primary/5 shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-primary">Archilya Panel — Bulut Yönetimi</span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
          </div>

          <FeatureBlock features={PANEL_FEATURES} accent="primary" />
        </motion.div>
      </div>
    </section>
  );
}
