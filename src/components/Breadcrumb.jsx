import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { setPageJsonLd, clearPageJsonLd } from '../utils/seo';

const SITE_URL = 'https://archilya.com';

/**
 * Sayfa içi breadcrumb navigasyonu.
 * İlk öğe her zaman "Ana Sayfa" olarak otomatik eklenir.
 * items: [{ label, to? }] — son öğe link içermez.
 * Ayrıca schema.org BreadcrumbList JSON-LD'yi setPageJsonLd ile ekler.
 */
export default function Breadcrumb({ items = [], className = '' }) {
  const itemsKey = JSON.stringify(items);

  useEffect(() => {
    const parsed = JSON.parse(itemsKey);
    const all = [{ label: 'Ana Sayfa', to: '/' }, ...parsed];
    const fallbackPath = typeof window !== 'undefined' ? window.location.pathname : '/';

    setPageJsonLd('breadcrumb', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: all.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.label,
        item: `${SITE_URL}${crumb.to || fallbackPath}`,
      })),
    });

    return () => clearPageJsonLd('breadcrumb');
  }, [itemsKey]);

  const crumbs = [{ label: 'Ana Sayfa', to: '/' }, ...items];

  return (
    <nav
      aria-label="Breadcrumb"
      className={`text-[10px] font-sans uppercase tracking-[0.22em] text-gray-600 ${className}`}
    >
      <ol className="flex flex-wrap items-center justify-center gap-2">
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;
          return (
            <li key={`${crumb.label}-${index}`} className="flex items-center gap-2">
              {crumb.to && !isLast ? (
                <Link to={crumb.to} className="hover:text-primary transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className={isLast ? 'text-gray-400' : ''} aria-current={isLast ? 'page' : undefined}>
                  {crumb.label}
                </span>
              )}
              {!isLast && <ChevronRight className="w-3 h-3 text-gray-700" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
