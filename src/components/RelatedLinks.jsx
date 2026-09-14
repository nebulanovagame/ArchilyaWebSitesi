import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/**
 * Sayfa sonunda ilgili sayfalara iç linkleme bloğu.
 * links: [{ to, label }]
 */
export default function RelatedLinks({ title = 'İlgili Sayfalar', links = [] }) {
  if (!links.length) return null;

  return (
    <section className="mt-16 border-t border-white/[0.06] pt-10">
      <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600 mb-6 text-center">{title}</p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {links.map((link) => (
          <Link
            key={`${link.to}-${link.label}`}
            to={link.to}
            className="inline-flex items-center gap-2 rounded-sm border border-white/10 bg-white/[0.015] px-4 py-3 text-[11px] font-sans text-gray-400 hover:text-primary hover:border-primary/30 transition-all"
          >
            {link.label}
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        ))}
      </div>
    </section>
  );
}
