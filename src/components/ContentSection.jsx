/**
 * Landing ve rehber sayfalarında kullanılan ortak içerik blokları.
 * Site tasarım diliyle (dark palette, font-serif italic başlıklar) uyumludur.
 */

const ACCENT_TEXT = {
  primary: 'text-primary',
  amber: 'text-amber-400',
  emerald: 'text-emerald-400',
};

export function SectionHeading({ eyebrow, title, intro, accent = 'primary' }) {
  return (
    <div className="text-center mb-12">
      {eyebrow && (
        <p className={`text-[10px] uppercase tracking-[0.4em] mb-3 ${ACCENT_TEXT[accent] || ACCENT_TEXT.primary}`}>
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-serif text-white italic leading-tight">{title}</h2>
      {intro && (
        <p className="text-gray-500 text-sm font-sans max-w-2xl mx-auto leading-relaxed mt-4">{intro}</p>
      )}
    </div>
  );
}

export function CardGrid({ items = [], columns = 3 }) {
  const cols = columns === 2 ? 'md:grid-cols-2' : columns === 4 ? 'grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3';

  return (
    <div className={`grid grid-cols-1 ${cols} gap-6 max-w-4xl mx-auto`}>
      {items.map((item) => (
        <div key={item.title} className="rounded-sm border border-white/[0.06] bg-white/[0.015] p-6 text-left hover:border-primary/20 transition-all">
          <h3 className="text-white font-serif italic text-base mb-2">{item.title}</h3>
          <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

export function StepList({ steps = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
      {steps.map((step, index) => (
        <div key={step.title} className="flex items-start gap-4 rounded-sm border border-white/[0.06] bg-white/[0.015] p-5">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold shrink-0">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div>
            <h3 className="text-white font-serif italic text-sm mb-1">{step.title}</h3>
            <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ProseBlock({ children }) {
  return (
    <div className="max-w-3xl mx-auto text-left text-gray-400 text-sm font-sans leading-relaxed space-y-5">
      {children}
    </div>
  );
}
