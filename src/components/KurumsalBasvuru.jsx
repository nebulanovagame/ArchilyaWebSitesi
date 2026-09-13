import { motion } from 'framer-motion';
import { ArrowRight, Building2, Sparkles, Globe, BarChart3, ShieldHalf, CheckCircle } from 'lucide-react';

function scrollToContact() {
  const el = document.getElementById('contact');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      const inp = el.querySelector('input[type="text"]');
      if (inp) inp.focus();
    }, 700);
  }
}

export default function KurumsalBasvuru() {
  return (
    <section id="kurumsal" className="py-20 md:py-32 bg-background relative overflow-clip">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">Kurumsal Çözümler</p>
          <h2 className="text-4xl md:text-5xl font-serif text-white italic mb-4">
            Kurumsal Başvuru / Teklif Al
          </h2>
          <p className="text-gray-400 text-sm font-sans max-w-2xl mx-auto leading-relaxed">
            Mimarlık ofisiniz, emlak girişiminiz veya müteahhit firmanız için
            özel teklif, entegrasyon ve kurumsal çözüm talebi oluşturun.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: Building2,
              title: 'Mimarlık Ofisleri',
              desc: 'Konsept, modelleme, görselleştirme ve ruhsat süreçlerini tek ekip olarak yönetin; ofisinizin üretim hattını dijitalleştirin.',
            },
            {
              icon: Globe,
              title: 'Emlak & Müteahhit',
              desc: 'Proje lansmanı, satış ofisi ve dijital showroom için görselleştirme, canlı sunum ve 360 tur paketleri. Toplu proje ve daire stoğu çözümleri.',
            },
            {
              icon: BarChart3,
              title: 'Kurumsal İş Ortaklığı',
              desc: 'Özel API entegrasyonu, dedicce sunucu, teknik danışmanlık ve yıllık kurumsal anlaşma seçenekleri ile projelerinizi ölçeklendirin.',
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: '-40px' }}
                className="rounded-sm border border-white/[0.06] bg-white/[0.015] backdrop-blur-2xl p-8 text-center hover:border-primary/20 hover:-translate-y-1 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-sm border border-primary/20 bg-primary/[0.08] flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif text-white italic mb-3">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="rounded-sm border border-primary/20 bg-gradient-to-b from-primary/[0.04] to-transparent backdrop-blur-xl p-8 md:p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(198,168,124,0.15)]">
              <ShieldHalf className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-serif text-white italic mb-4">
              Size Özel Teklif Oluşturalım
            </h3>
            <p className="text-gray-400 text-sm font-sans max-w-xl mx-auto leading-relaxed mb-8">
              Proje ölçeğiniz, ekip büyüklüğünüz ve ihtiyaçlarınıza göre
              şekillenen kurumsal teklif için aşağıdaki butona tıklayarak
              başvuru formunu doldurabilirsiniz.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              {[
                'Özel fiyatlandırma',
                'Beyaz etiket seçeneği',
                'Dedike destek ekibi',
                'API entegrasyonu',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-gray-500 text-xs">
                  <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={scrollToContact}
              className="group inline-flex items-center gap-3 bg-primary text-black px-10 py-5 rounded-sm font-sans text-[13px] font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(198,168,124,0.3)] hover:shadow-[0_0_50px_rgba(198,168,124,0.5)]"
            >
              Teklif Al
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center"
        >
          {[
            { value: '7/24', label: 'Teknik Destek' },
            { value: '%20', label: 'Kurumsal İndirim' },
            { value: 'Hızlı', label: 'Entegrasyon Süreci' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-sm border border-white/[0.04] bg-white/[0.01] p-5">
              <p className="text-2xl font-serif text-primary italic mb-1">{stat.value}</p>
              <p className="text-[10px] text-gray-600 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
