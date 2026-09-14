import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { setPageJsonLd, clearPageJsonLd } from '../utils/seo';

const ACCENTS = {
  primary: {
    label: 'text-primary',
    openBorder: 'open:border-primary/25 open:bg-primary/[0.02]',
    plus: 'text-primary',
  },
  amber: {
    label: 'text-amber-400',
    openBorder: 'open:border-amber-400/25 open:bg-amber-400/[0.02]',
    plus: 'text-amber-400',
  },
  emerald: {
    label: 'text-emerald-400',
    openBorder: 'open:border-emerald-400/25 open:bg-emerald-400/[0.02]',
    plus: 'text-emerald-400',
  },
};

/**
 * Sayfa sonu SSS (FAQ) bölümü.
 * items: [{ q, a }] — ayrıca schema.org FAQPage JSON-LD ekler.
 */
export default function FaqSection({ items = [], title = 'Sık Sorulan Sorular', eyebrow = 'SSS', accent = 'primary', className = '' }) {
  const itemsKey = JSON.stringify(items);

  useEffect(() => {
    const parsed = JSON.parse(itemsKey);
    if (!parsed.length) return undefined;

    setPageJsonLd('faq', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: parsed.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    });

    return () => clearPageJsonLd('faq');
  }, [itemsKey]);

  if (!items.length) return null;

  const A = ACCENTS[accent] || ACCENTS.primary;

  return (
    <div className={`mt-24 text-left ${className}`}>
      <div className="text-center mb-12">
        <p className={`text-[10px] uppercase tracking-[0.4em] mb-3 ${A.label}`}>{eyebrow}</p>
        <h2 className="text-3xl md:text-4xl font-serif text-white italic">{title}</h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {items.map((item, index) => (
          <motion.details
            key={item.q}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
            className={`rounded-sm border border-white/[0.06] bg-white/[0.015] group transition-all ${A.openBorder}`}
          >
            <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer text-sm text-white font-sans hover:text-primary transition-colors [&::-webkit-details-marker]:hidden">
              {item.q}
              <span className={`text-lg group-open:rotate-45 transition-transform ${A.plus}`}>+</span>
            </summary>
            <p className="px-6 pb-5 text-gray-500 text-xs leading-relaxed">{item.a}</p>
          </motion.details>
        ))}
      </div>
    </div>
  );
}
