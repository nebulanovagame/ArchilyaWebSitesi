import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Palette, BarChart3, Sun, MonitorPlay, Globe, Check,
} from 'lucide-react';
import clsx from 'clsx';
import {
  blueprintAnalysis, workspaceMeeting,
} from '../assets/images';

const VR_FEATURES = [
  {
    id: 'living',
    icon: Palette,
    title: 'Yaşayan Mekan',
    subtitle: 'Canlı Tasarım & Mekanik Etkileşimler',
    tag: 'Canlı Sunum',
    desc: 'Görsel dili sunum sahnesine taşıyın. Kapılar açılır, malzeme değişir, karar anında verilir.',
    details: [
      'Kapı, Işık ve Mobilya Mekanik Etkileşimleri',
      'Tasarım Modu: Anlık Materyal & Zemin Değişimi',
      'Nesne Bazlı Bilgi Ekranları (Object Info)',
      'Toplu Tasarım Şemaları (Design Schemes)',
    ],
    media: '/hero-bg.webp',
    mediaAlt: 'Yaşayan Mekan — Canlı Tasarım Demo',
    mediaType: 'image',
  },
  {
    id: 'budget',
    icon: BarChart3,
    title: 'Eşzamanlı ve İnteraktif Bütçe Yönetimi',
    subtitle: 'Canlı Maliyet Takibi & Raporlama',
    tag: 'Canlı Sunum',
    desc: 'Her malzeme değişikliği maliyet barına anında yansır. Tek tıkla HTML, CSV veya JSON raporu oluşturun.',
    details: [
      'Seçimlere Göre Eşzamanlı Maliyet Barı',
      'Bütçe Sınırı Uyarı Sistemi',
      'HTML, CSV, JSON Formatında Maliyet Raporu',
      'Malzeme Karşılaştırma ve Varyasyon Tablosu',
    ],
    media: blueprintAnalysis,
    mediaAlt: 'Eşzamanlı Bütçe Yönetimi Demo',
    mediaType: 'image',
  },
  {
    id: 'scenarios',
    icon: Sun,
    title: 'Dinamik Senaryolar & Mevsim Döngüsü',
    subtitle: 'Zaman & Aydınlatma Senaryoları',
    tag: 'Canlı Sunum',
    desc: 'Güneşi oynatın, mevsimi değiştirin. Işık ve yerleşim senaryoları arasında geçişle sunumunuzu güçlendirin.',
    details: [
      'Gerçek Zamanlı Gün Işığı, Saat & Güneş Döngüsü',
      'Mevsim Senaryoları (Yaz / Kış / Sisli / Gece)',
      'Aydınlatma & Yerleşim Senaryoları Arası Geçiş',
      'Sinematik Kamera ile Yüksek Çözünürlüklü Çıktı',
    ],
    media: workspaceMeeting,
    mediaAlt: 'Dinamik Senaryolar & Mevsim Döngüsü Demo',
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
        width="1600"
        height="900"
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
          <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">Canlı Sunum</p>
          <h2 className="text-3xl md:text-5xl font-serif text-white italic mb-4">Sunumu Deneyime Çevirin.</h2>
          <p className="text-gray-500 text-sm font-sans max-w-xl mx-auto leading-relaxed">
          Canlı sunum; mimari destek hizmetlerimizin bir parçasıdır. Projeyi tarayıcıdan paylaşın, malzeme ve senaryoları birlikte deneyin.
        </p>
      </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, margin: '-60px' }}>
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-3 px-5 py-2 border border-amber-400/20 rounded-sm bg-amber-400/5 shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-400">Archilya — Canlı Sunum</span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-amber-400/20 to-transparent" />
          </div>

          <FeatureBlock features={VR_FEATURES} accent="amber" />
        </motion.div>

        {/* Canlı sunum deneyim akışı */}
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
            Canlı sunum, mimari destek sürecinin bir parçası
          </p>
        </motion.div>

      </div>
    </section>
  );
}
