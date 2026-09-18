import { motion } from 'framer-motion';
import { HOME_SEO_SECTIONS, HOME_FAQ, HOME_SEO_FAQ_TITLE } from '../data/homeSeoContent';
import FaqSection from './FaqSection';

/**
 * Ana sayfanın görünür mimari destek içeriği.
 *
 * Statik HTML fallback'i (`vite.config.js`) ile AYNI veri kaynağını
 * (`src/data/homeSeoContent.js`) kullanır. Böylece JS çalıştırmayan
 * crawler'ların gördüğü metin ile kullanıcının gördüğü metin aynıdır ve
 * FAQPage yapılandırılmış verisi görünür SSS içeriğini işaret eder.
 */
export default function HomeSeoContent() {
  return (
    <section id="mimari-destek-rehberi" className="relative overflow-hidden border-t border-white/5 bg-background py-16 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle, #c6a87c 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="container relative z-10 mx-auto max-w-4xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-[10px] uppercase tracking-[0.4em] text-primary"
        >
          Mimari Destek Rehberi
        </motion.p>

        <div className="space-y-16">
          {HOME_SEO_SECTIONS.map((section) => (
            <article key={section.heading}>
              <h2 className="mb-4 font-serif text-2xl italic leading-snug text-white md:text-3xl">
                {section.heading}
              </h2>

              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mb-4 text-sm leading-relaxed text-gray-400">
                  {paragraph}
                </p>
              ))}

              {section.subsections && section.subsections.length > 0 && (
                <div className="mt-6 space-y-6 border-l border-white/8 pl-5">
                  {section.subsections.map((sub) => (
                    <div key={sub.heading}>
                      <h3 className="mb-2 text-sm font-semibold tracking-wide text-white/90">
                        {sub.heading}
                      </h3>
                      {sub.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="text-sm leading-relaxed text-gray-500">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              )}

              {section.list && section.list.length > 0 && (
                <ul className="mt-5 space-y-2.5">
                  {section.list.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-gray-400">
                      <span aria-hidden="true" className="mt-0.5 text-primary">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>

        <FaqSection items={HOME_FAQ} title={HOME_SEO_FAQ_TITLE} />
      </div>
    </section>
  );
}
