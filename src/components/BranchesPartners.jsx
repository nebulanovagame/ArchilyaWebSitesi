import { useState, useEffect, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe, Instagram, Linkedin, ArrowRight, Building2, Store, Navigation } from 'lucide-react';
import { getPartnerFirms } from '../services/partnerService';
import { PARTNER_FIRMS as STATIC_FIRMS, FIRM_CATEGORIES } from '../data/partnerData';

const BranchesMap = lazy(() => import('./BranchesMap'));

const TYPE_CONFIG = {
  merkez: { icon: Store, label: 'Merkez', color: 'text-primary', border: 'border-primary/30', bg: 'bg-primary/10' },
  branch: { icon: Building2, label: 'Şube', color: 'text-amber-400', border: 'border-amber-400/30', bg: 'bg-amber-400/10' },
  partner: { icon: Building2, label: 'İş Ortağı', color: 'text-amber-400', border: 'border-amber-400/30', bg: 'bg-amber-400/10' },
};

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

export default function BranchesPartners() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [firms, setFirms] = useState(STATIC_FIRMS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPartnerFirms().then((data) => {
      if (data && data.length > 0) setFirms(data);
    }).catch(() => {}).finally(() => setLoading(false));
  }, []);

  const filtered = activeFilter === 'all'
    ? firms
    : firms.filter((f) => f.type === activeFilter);

  return (
    <section id="subeler" className="py-20 md:py-32 bg-background relative overflow-clip">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-400/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">Şubeler & İş Ortakları</p>
          <h2 className="text-4xl md:text-5xl font-serif text-white italic mb-4">
            Neredeyiz, Kimlerle Çalışıyoruz
          </h2>
          <p className="text-gray-400 text-sm font-sans max-w-2xl mx-auto leading-relaxed">
            Archilya şubeleri ve iş birliği yaptığımız mimarlık ofisleri, müteahhitler
            ve emlak firmaları.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {FIRM_CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveFilter(cat.key)}
              className={`px-6 py-2.5 rounded-sm text-[10px] font-bold uppercase tracking-[0.25em] transition-all duration-300 ${
                activeFilter === cat.key
                  ? 'bg-primary text-black shadow-[0_0_20px_rgba(198,168,124,0.3)]'
                  : 'bg-white/[0.03] border border-white/10 text-gray-400 hover:text-white hover:border-white/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 rounded-sm overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
        >
          <div className="h-[300px] md:h-[400px] w-full">
            <Suspense fallback={<div className="h-full w-full bg-[#0f1115] flex items-center justify-center"><span className="text-[10px] text-gray-500 uppercase tracking-widest">Harita yükleniyor...</span></div>}>
              <BranchesMap firms={firms} />
            </Suspense>
          </div>
        </motion.div>

        {/* Firm Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filtered.map((firm, idx) => {
            const config = TYPE_CONFIG[firm.type];
            const Icon = config.icon;
            return (
              <motion.div
                key={firm.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                viewport={{ once: true, margin: '-40px' }}
                className="rounded-sm border border-white/[0.06] bg-white/[0.015] backdrop-blur-2xl p-6 hover:border-white/15 hover:-translate-y-1 transition-all duration-500"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-10 h-10 rounded-sm border ${config.border} ${config.bg} flex items-center justify-center shrink-0`}>
                    <Icon className={`w-5 h-5 ${config.color}`} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-serif text-white italic leading-snug">{firm.name}</h3>
                    <span className={`text-[9px] font-bold uppercase tracking-widest ${config.color}`}>{config.label}</span>
                  </div>
                </div>

                <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">{firm.description}</p>

                <div className="space-y-2 mb-4">
                  {firm.city && (
                    <div className="flex items-center gap-2 text-gray-500">
                      <MapPin className="w-3 h-3 shrink-0" />
                      <span className="text-[11px]">{firm.city}, {firm.country}</span>
                    </div>
                  )}
                  {firm.phone && (
                    <div className="flex items-center gap-2 text-gray-500">
                      <Phone className="w-3 h-3 shrink-0" />
                      <a href={`tel:${firm.phone}`} className="text-[11px] hover:text-primary transition-colors">{firm.phone}</a>
                    </div>
                  )}
                  {firm.email && (
                    <div className="flex items-center gap-2 text-gray-500">
                      <Mail className="w-3 h-3 shrink-0" />
                      <a href={`mailto:${firm.email}`} className="text-[11px] hover:text-primary transition-colors">{firm.email}</a>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                  {firm.website && (
                    <a href={firm.website} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-primary hover:text-white transition-colors">
                      <Globe className="w-3 h-3" /> Site
                    </a>
                  )}
                  {firm.latitude && firm.longitude && (
                    <a href={`https://www.google.com/maps/search/${encodeURIComponent(firm.name + ' ' + firm.city)}/@${firm.latitude},${firm.longitude},17z`} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-emerald-400 hover:text-white transition-colors">
                      <Navigation className="w-3 h-3" /> Yol Tarifi
                    </a>
                  )}
                  {firm.socialMedia?.instagram && (
                    <a href={firm.socialMedia.instagram} target="_blank" rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary transition-colors">
                      <Instagram className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {firm.socialMedia?.linkedin && (
                    <a href={firm.socialMedia.linkedin} target="_blank" rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary transition-colors">
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 text-xs font-sans mb-6 uppercase tracking-widest">
            İş birliği için bize ulaşın
          </p>
          <button
            onClick={scrollToContact}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-black font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-white transition-all duration-300"
          >
            İletişime Geç
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
