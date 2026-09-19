import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, Sparkles, Palette, Sun, Settings2, MonitorPlay, ShieldCheck,
  Building2, Zap, Wrench, Flame, Thermometer, Volume2, Leaf,
} from 'lucide-react';
import { setPageMeta, SEO_PAGES } from '../utils/seo';
import { logAnalyticsEvent } from '../firebase';
import { AI_ORNEKLER } from '../data/aiOrnekler';
import Breadcrumb from '../components/Breadcrumb';
import RelatedLinks from '../components/RelatedLinks';

const SERVICES = [
  {
    id: 'konsept-tasarim',
    icon: Sparkles,
    title: 'Konsept Tasarım',
    desc: 'Projenin ilk fikrinden uygulanabilir konsepte; kütle, plan ve tasarım kararlarını hızla olgunlaştırırız.',
    includes: ['Kütle ve plan kurgusu', 'Tasarım alternatifleri', 'Erken aşama karar desteği'],
    to: '/#contact',
    cta: 'Teklif Al',
  },
  {
    id: 'ic-mekan',
    icon: Palette,
    title: 'İç Mekan',
    desc: 'İç mekan kurgusu, malzeme ve atmosfer kararlarıyla mekanı daha inşa edilmeden deneyimlenebilir kılarız.',
    includes: ['İç mekan konsepti', 'Malzeme ve atmosfer', 'Mobilya / yerleşim kurgusu'],
    to: '/#contact',
    cta: 'Teklif Al',
  },
  {
    id: 'peyzaj',
    icon: Sun,
    title: 'Peyzaj',
    desc: 'Yapı ve çevre ilişkisini kuran peyzaj ve dış mekan kurgusuyla projenin bütününü sunarız.',
    includes: ['Peyzaj tasarımı', 'Dış mekan kurgusu', 'Yapı–çevre ilişkisi'],
    to: '/#contact',
    cta: 'Teklif Al',
  },
  {
    id: 'modelleme',
    icon: Settings2,
    title: 'Modelleme',
    desc: 'BIM/CAD altyapısıyla projeyi doğru, ölçekli ve koordineli biçimde modelleriz.',
    includes: ['3D model üretimi', 'BIM/CAD koordinasyonu', 'Disiplinler arası kontrol'],
    to: '/mimarlik-ofisleri',
    cta: 'Mimarlık Ofisleri',
  },
  {
    id: 'gorsellestirme',
    icon: MonitorPlay,
    title: 'Görselleştirme',
    desc: 'Fotogerçekçi görseller, canlı sunum ve kontrollü revizyonlarla tasarımı müşteriye net aktarırız.',
    includes: ['Fotogerçekçi görseller', 'Canlı sunum (pixel streaming)', 'Kontrollü revizyon'],
    to: '/ai-studio',
    cta: 'Görselleştirme Çözümleri',
  },
  {
    id: 'ruhsat-uygulama',
    icon: ShieldCheck,
    title: 'Ruhsat & Uygulama',
    desc: 'İmar durumundan iskâna; ruhsat ve resmi süreçleri uçtan uca yönetiriz.',
    includes: ['İmar durumu ve ruhsat', 'LİHKAB / TESKİ / İtfaiye süreçleri', 'İskân ve uygulama takibi'],
    to: '/trakya-ruhsat-is-takibi',
    cta: 'Ruhsat İş Takibi',
  },
  {
    id: 'statik-betonarme',
    icon: Building2,
    title: 'Statik Betonarme Proje',
    desc: 'Betonarme taşıyıcı sistem hesabı ve statik proje çizimini mimari tasarımla uyumlu biçimde DWG olarak hazırlarız.',
    includes: ['Taşıyıcı sistem hesabı', 'Statik proje çizimi (DWG)', 'Mimariyle uyumlu kurgu'],
    to: '/#contact',
    cta: 'Teklif Al',
  },
  {
    id: 'elektrik-tesisat',
    icon: Zap,
    title: 'Elektrik Tesisat Projesi',
    desc: 'Kuvvetli ve zayıf akım tesisat projelerini mimari planla koordineli biçimde DWG olarak hazırlarız.',
    includes: ['Kuvvetli akım tesisatı', 'Zayıf akım tesisatı', 'Proje çizimi (DWG)'],
    to: '/#contact',
    cta: 'Teklif Al',
  },
  {
    id: 'mekanik-tesisat',
    icon: Wrench,
    title: 'Mekanik Tesisat Projesi',
    desc: 'Sıhhi tesisat, ısıtma ve havalandırma projelerini tek kapsamda, koordineli çizimlerle sunarız.',
    includes: ['Sıhhi tesisat', 'Isıtma ve havalandırma', 'Proje çizimi (DWG)'],
    to: '/#contact',
    cta: 'Teklif Al',
  },
  {
    id: 'yangin-guvenligi',
    icon: Flame,
    title: 'Yangın Güvenliği Projesi',
    desc: 'Yangın algılama, söndürme ve kaçış güzergâhı kurgusunu projenize özel biçimde planlar, çizeriz.',
    includes: ['Yangın algılama kurgusu', 'Söndürme ve kaçış güzergâhı', 'Tesisatla koordineli yerleşim'],
    to: '/#contact',
    cta: 'Teklif Al',
  },
  {
    id: 'isi-yalitim',
    icon: Thermometer,
    title: 'Isı Yalıtım Projesi',
    desc: 'TS 825 esaslı ısı yalıtım hesabı ve detay çizimlerini projenize özel biçimde hazırlarız.',
    includes: ['TS 825 esaslı hesap', 'Isı yalıtım detay çizimleri', 'Malzeme ve kalınlık kurgusu'],
    to: '/#contact',
    cta: 'Teklif Al',
  },
  {
    id: 'akustik-rapor',
    icon: Volume2,
    title: 'Akustik Rapor',
    desc: 'Gürültü ve akustik performans raporunu projenizin ihtiyaçlarına özel biçimde hazırlarız.',
    includes: ['Gürültü değerlendirmesi', 'Akustik performans raporu', 'İyileştirme önerileri'],
    to: '/#contact',
    cta: 'Teklif Al',
  },
  {
    id: 'enerji-ekb',
    icon: Leaf,
    title: 'Enerji Performansı ve EKB Hazırlığı',
    desc: 'BEP-TR esaslı enerji performansı hesabıyla EKB hazırlık sürecinize sağlam bir altyapı oluştururuz.',
    includes: ['BEP-TR enerji hesabı', 'EKB hazırlık dosyası', 'Performans iyileştirme önerileri'],
    to: '/#contact',
    cta: 'Teklif Al',
  },
];

export default function HizmetlerPage() {
  useEffect(() => {
    setPageMeta(SEO_PAGES.HIZMETLER.title, SEO_PAGES.HIZMETLER.desc);
  }, []);

  return (
    <section id="hizmetler-sayfasi" className="relative min-h-screen py-20 md:py-32 bg-background overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: 'radial-gradient(circle, #c6a87c 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <Breadcrumb items={[{ label: 'Hizmetler' }]} className="mb-10" />
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-2 border border-primary/20 rounded-sm bg-primary/5 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-primary">Mimari Destek Platformu</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-white italic mb-6 leading-tight">
            Mimari Destek<br /><span className="text-primary/80">Hizmetleri.</span>
          </h1>
          <p className="text-gray-400 text-sm font-sans max-w-2xl mx-auto leading-relaxed">
            Konsept tasarımdan ruhsata; mühendislik projeleri ve teknik raporlarla genişleyen on üç hizmetle mimari sürecin tamamını tek ekipten yönetin.
            Tasarımınıza sadık kalır, kararınızı hızlandırırız.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                viewport={{ once: true, margin: '-60px' }}
                className="flex flex-col rounded-sm border border-white/[0.06] bg-white/[0.015] backdrop-blur-2xl p-8 hover:border-primary/25 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-sm border border-primary/20 bg-primary/[0.08] flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-xl font-serif text-white italic mb-3">{service.title}</h2>
                <p className="text-gray-500 text-xs leading-relaxed mb-6">{service.desc}</p>

                <ul className="space-y-2 mb-8">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-400 text-[11px] font-sans">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-primary/70 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={service.to}
                  className="mt-auto group inline-flex items-center gap-2 text-primary text-[10px] font-bold uppercase tracking-widest border-b border-primary/30 pb-1 hover:text-white hover:border-white transition-all self-start"
                >
                  {service.cta}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="max-w-6xl mx-auto mt-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-primary text-[10px] uppercase tracking-[0.4em] mb-3">Gerçek Üretim Örnekleri</p>
              <h2 className="text-3xl md:text-4xl font-serif text-white italic leading-tight">Hizmetlerimizden örnek çıktılar.</h2>
            </div>
            <p className="text-gray-500 text-xs font-sans max-w-sm leading-relaxed">
              AI Studio ile üretilmiş gerçek örnekler; hizmetlerimize karşılık gelen çıktılar.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {AI_ORNEKLER.map((ex) => (
              <figure key={ex.src} className="group relative overflow-hidden rounded-sm border border-white/8 bg-white/[0.015]">
                <img
                  src={ex.src}
                  alt={ex.alt}
                  width="1600"
                  height="1200"
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm px-3 py-2 flex items-center justify-between gap-2">
                  <span className="text-[9px] uppercase tracking-widest text-primary/80 font-bold">Gerçek üretim örneği</span>
                  <span className="text-[9px] uppercase tracking-widest text-gray-400">{ex.label}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-20 rounded-sm border border-primary/20 bg-gradient-to-b from-primary/[0.04] to-transparent backdrop-blur-xl p-10 md:p-14 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-serif text-white italic mb-4">
            Hangi hizmete ihtiyacınız var?
          </h2>
          <p className="text-gray-400 text-sm font-sans max-w-xl mx-auto leading-relaxed mb-8">
            Projenizi bize iletin; ihtiyacınıza göre doğru kapsamı birlikte netleştirip size özel teklifimizi oluşturalım.
          </p>
          <Link
            to="/#contact"
            onClick={() => logAnalyticsEvent('cta_click', { label: 'hizmetler_teklif', location: 'HizmetlerPage' })}
            className="group inline-flex items-center gap-3 bg-primary text-black px-10 py-5 rounded-sm font-sans text-[12px] font-bold uppercase tracking-widest hover:bg-white transition-all duration-300"
          >
            Teklif Al
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <RelatedLinks
          title="İlgili Çözümler"
          links={[
            { to: '/ai-studio', label: 'Görselleştirme ve Revizyon' },
            { to: '/vr-sunum', label: 'Canlı Sunum (Pixel Streaming)' },
            { to: '/mimarlik-ofisleri', label: 'Mimarlık Ofisleri' },
            { to: '/trakya-ruhsat-is-takibi', label: 'Ruhsat İş Takibi' },
          ]}
        />
      </div>
    </section>
  );
}
