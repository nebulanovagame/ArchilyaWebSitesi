import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import {
  modernBuilding,
  interiorModern,
  creativeProcess,
  villaEstate,
  modernTower,
  constructionDrawing,
  blueprintAnalysis,
  techWorkspace,
  luxuryBuilding,
  culturalBuilding,
  workspaceMeeting,
  clientMeeting,
  laptopMockup,
} from '../assets/images';
import { AI_ORNEKLER } from '../data/aiOrnekler';

const services = [
  {
    id: '01',
    tag: 'Konsept & Fikir',
    title: 'Projenin İlk Fikrini Hızla Olgunlaştırın.',
    desc: 'Kütle, plan ve tasarım kararlarını erken aşamada netleştirin; konseptten uygulanabilir çözüme tek akışta ilerleyin. Belirsizliği azaltın, doğru kararı ilk toplantıda verin.',
    image: creativeProcess,
    accent: 'primary',
  },
  {
    id: '02',
    tag: 'İç Mekan',
    title: 'Mekanı Karar Anında Deneyimleyin.',
    desc: 'İç mekan kurgusu, malzeme ve atmosfer kararlarını görselleştirerek müşterinizin mekanı daha inşa edilmeden hissetmesini sağlayın.',
    image: interiorModern,
    accent: 'amber',
  },
  {
    id: '03',
    tag: 'Peyzaj',
    title: 'Yapıyı Çevresiyle Birlikte Tasarlayın.',
    desc: 'Yapı ve çevre ilişkisini kuran peyzaj ve dış mekan kurgusuyla projenin bütününü sunun; açık alan kararlarını erkenden kesinleştirin.',
    image: villaEstate,
    accent: 'primary',
  },
  {
    id: '04',
    tag: '3D Modelleme',
    title: 'Projeyi Doğru ve Koordineli Modelleyin.',
    desc: 'BIM/CAD altyapısıyla projeyi doğru, ölçekli ve koordineli biçimde modelleyin; disiplinler arası çakışmaları erken yakalayın.',
    image: modernTower,
    accent: 'amber',
  },
  {
    id: '05',
    tag: 'Görselleştirme',
    title: 'Tasarımınızı Fotogerçekçi Anlatın.',
    desc: 'Fotogerçekçi görseller, canlı sunum ve kontrollü revizyonlarla tasarımı müşteriye net aktarın; onay sürecini kısaltın.',
    image: modernBuilding,
    accent: 'primary',
  },
  {
    id: '06',
    tag: 'Ruhsat & Uygulama',
    title: 'İmar Durumundan İskâna Kadar Yanınızda.',
    desc: 'İmar durumu, ruhsat ve resmi süreçleri uçtan uca yönetin; LİHKAB, TESKİ, İtfaiye ve Belediye adımlarını tek ekipten takip edin.',
    image: constructionDrawing,
    accent: 'amber',
  },
  {
    id: '07',
    tag: 'Statik Betonarme',
    title: 'Taşıyıcı Sistemi Erken Aşamada Netleştirin.',
    desc: 'Betonarme taşıyıcı sistem hesabı ve statik proje çizimini mimari tasarımla uyumlu biçimde DWG olarak teslim edin.',
    image: blueprintAnalysis,
    accent: 'amber',
  },
  {
    id: '08',
    tag: 'Elektrik Tesisatı',
    title: 'Kuvvetli ve Zayıf Akımı Tek Çizimde Toplayın.',
    desc: 'Kuvvetli ve zayıf akım tesisat projelerini mimari planla koordineli biçimde DWG olarak hazırlayın.',
    image: techWorkspace,
    accent: 'primary',
  },
  {
    id: '09',
    tag: 'Mekanik Tesisat',
    title: 'Isıtma ve Havalandırmayı Projeyle Uyumlu Çözün.',
    desc: 'Sıhhi tesisat, ısıtma ve havalandırma projelerini tek kapsamda, koordineli çizimlerle ilerletin.',
    image: luxuryBuilding,
    accent: 'amber',
  },
  {
    id: '10',
    tag: 'Yangın Güvenliği',
    title: 'Algılama, Söndürme ve Kaçışı Birlikte Planlayın.',
    desc: 'Yangın algılama, söndürme ve kaçış güzergâhı kurgusunu projenize özel biçimde planlayın.',
    image: culturalBuilding,
    accent: 'primary',
  },
  {
    id: '11',
    tag: 'Isı Yalıtım',
    title: 'TS 825 Hesabını Detay Çizimle Tamamlayın.',
    desc: 'TS 825 esaslı ısı yalıtım hesabı ve detay çizimleriyle yalıtım kararlarını projenize özel netleştirin.',
    image: workspaceMeeting,
    accent: 'amber',
  },
  {
    id: '12',
    tag: 'Akustik Rapor',
    title: 'Gürültü Performansını Raporla Belgeleyin.',
    desc: 'Gürültü ve akustik performans raporunu projenizin ihtiyaçlarına özel biçimde hazırlayın.',
    image: clientMeeting,
    accent: 'primary',
  },
  {
    id: '13',
    tag: 'Enerji & EKB',
    title: 'Enerji Performansını BEP-TR ile Hesaplayın.',
    desc: 'BEP-TR esaslı enerji performansı hesabıyla EKB hazırlık sürecinize sağlam bir altyapı oluşturun.',
    image: laptopMockup,
    accent: 'amber',
  },
];

const ACCENT = {
  primary: {
    tag: 'text-primary border-primary/25 bg-primary/5',
    num: 'text-primary/15',
    btn: 'text-primary border-primary',
    frame: 'group-hover:border-primary/40',
    line: 'bg-primary',
  },
  amber: {
    tag: 'text-amber-400 border-amber-400/25 bg-amber-400/5',
    num: 'text-amber-400/15',
    btn: 'text-amber-400 border-amber-400',
    frame: 'group-hover:border-amber-400/40',
    line: 'bg-amber-400',
  },
};

export default function Services() {
  return (
    <section id="hizmetler" className="py-16 md:py-32 bg-background relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle, #c6a87c 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col md:flex-row justify-between items-end gap-6"
        >
          <div>
            <p className="text-primary text-[10px] uppercase tracking-[0.4em] mb-4">Hizmetler</p>
            <h2 className="text-4xl md:text-6xl font-serif text-white italic leading-tight">
              Uçtan Uca<br />
              <span className="text-primary/80">Mimari Destek.</span>
            </h2>
          </div>
          <p className="text-gray-500 text-sm font-sans max-w-sm leading-relaxed md:text-right">
            Archilya; konsept tasarımdan ruhsata, modellemeden görselleştirmeye uzanan, mühendislik projeleri ve
            teknik raporlarla genişleyen hizmet yelpazesiyle mimari sürecin tamamını tek çatı altında toplar.
          </p>
        </motion.div>
      </div>

      <div className="space-y-28">
        {services.map((service, index) => {
          const A = ACCENT[service.accent];
          const isEven = index % 2 === 0;

          return (
            <div key={service.id} className="container mx-auto px-6">
              <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-14 lg:gap-20`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: '-60px' }}
                  className="lg:w-1/2 relative group"
                >
                  <div className={`absolute -inset-4 border border-white/6 -z-10 transition-colors duration-500 ${A.frame}`} />
                  <div className={`absolute bottom-0 left-0 h-0.5 ${A.line} w-0 group-hover:w-full transition-all duration-700 z-10`} />

                  <div className="aspect-[4/3] overflow-hidden rounded-sm relative">
                    <img
                      src={service.image}
                      alt={`Archilya ${service.tag} hizmeti`}
                      width="1600"
                      height="1200"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[40%] group-hover:grayscale-0"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-sm">
                      <span className="text-[8px] uppercase tracking-widest text-primary/80 font-bold">{service.tag}</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: isEven ? 36 : -36 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  viewport={{ once: true, margin: '-60px' }}
                  className="lg:w-1/2"
                >
                  <span className={`block text-[80px] font-serif font-bold leading-none select-none mb-2 ${A.num}`}>
                    {service.id}
                  </span>

                  <span className={`inline-block text-[10px] font-bold uppercase tracking-[0.3em] border px-3 py-1 rounded-sm mb-5 ${A.tag}`}>
                    {service.tag}
                  </span>

                  <h3 className="text-2xl md:text-3xl font-serif text-white italic mb-5 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-sm font-sans leading-relaxed mb-8">
                    {service.desc}
                  </p>

                  <a
                    href="#contact"
                    className={`group/btn inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-widest border-b pb-1 transition-colors ${A.btn}`}
                  >
                    Teklif Al
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="container mx-auto px-6 mt-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-primary text-[10px] uppercase tracking-[0.4em] mb-3">Gerçek Üretim Örnekleri</p>
            <h3 className="text-3xl md:text-4xl font-serif text-white italic leading-tight">Archilya çıktılarından örnekler.</h3>
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
    </section>
  );
}
