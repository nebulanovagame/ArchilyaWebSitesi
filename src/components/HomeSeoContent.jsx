import { HOME_SEO_SECTIONS, HOME_FAQ, HOME_SEO_FAQ_TITLE } from '../data/homeSeoContent';

/**
 * Ana sayfanın görünür mimari destek içeriği.
 *
 * Statik HTML fallback'i (`vite.config.js`) ile AYNI veri kaynağını
 * (`src/data/homeSeoContent.js`) kullanır. Böylece JS çalıştırmayan
 * crawler'ların gördüğü metin ile kullanıcının gördüğü metin aynıdır.
 *
 * SSS içeriği görünür HTML olarak render edilir; `FAQPage` şeması
 * bilinçli olarak eklenmez (Google FAQ zengin sonuçlarını kaldırdı).
 *
 * Bilinçli olarak framer-motion kullanılmaz: bu bölüm her zaman DOM'dadır
 * (içerik parity) ve animasyon kütüphanesi yükü TBT'yi artırırdı.
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
        <p className="mb-10 text-[10px] uppercase tracking-[0.4em] text-primary">
          Mimari Destek Rehberi
        </p>

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

        <div className="mt-24 text-center">
          <p className="mb-3 text-[10px] uppercase tracking-[0.4em] text-primary">SSS</p>
          <h2 className="mb-10 font-serif text-2xl italic text-white md:text-3xl">
            {HOME_SEO_FAQ_TITLE}
          </h2>

          <div className="mx-auto max-w-3xl space-y-3 text-left">
            {HOME_FAQ.map((item) => (
              <details
                key={item.q}
                className="group rounded-sm border border-white/[0.06] bg-white/[0.015] px-6 py-4 open:border-primary/25"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm text-white transition-colors hover:text-primary [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="text-lg text-primary transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="pb-1 pt-3 text-xs leading-relaxed text-gray-500">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
