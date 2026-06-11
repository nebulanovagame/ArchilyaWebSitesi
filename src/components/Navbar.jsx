import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import { logAnalyticsEvent } from '../firebase';
import { buildPanelUrl } from '../config/appUrls';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50);
  });

  const navItems = [
    { label: 'Platform', href: '#platform' },
    { label: 'AI Studio', href: '#ai-studio' },
    { label: 'AI Studio Sayfası', to: '/ai-studio' },
    { label: 'VR Sunum', href: '#vr-sunum' },
    { label: 'VR Sunum Sayfası', to: '/vr-sunum' },
    { label: 'Portfolyo', href: '#portfolio' },
    { label: 'Fiyatlandırma', href: '#pricing' },
  ];

  const guideItems = [
    { label: 'VR Sunum Satış', to: '/rehber/vr-sunum-satis' },
    { label: 'AI Render Revizyon', to: '/rehber/ai-render-revizyon' },
    { label: 'Emlak 360 VR', to: '/rehber/emlak-360-vr' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-700',
          scrolled
            ? 'bg-[#0f1115]/80 backdrop-blur-md py-4 border-b border-white/5'
            : 'bg-transparent py-8',
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="flex flex-col items-center group">
            <span className="font-serif text-2xl text-white tracking-wider italic">Archilya</span>
              <span className="text-[8px] text-primary uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity">AI Studio</span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              item.to ? (
                <Link
                  key={`${item.label}-${item.to}`}
                  to={item.to}
                  className="text-xs font-sans font-medium text-gray-300 hover:text-primary uppercase tracking-widest transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={`${item.label}-${item.href}`}
                  href={item.href}
                  className="text-xs font-sans font-medium text-gray-300 hover:text-primary uppercase tracking-widest transition-colors"
                >
                  {item.label}
                </a>
              )
            ))}

            <div className="relative group">
              <button className="text-xs font-sans font-medium text-gray-300 hover:text-primary uppercase tracking-widest transition-colors">
                Rehberler
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="bg-[#0f1115]/95 backdrop-blur-md border border-white/10 rounded-sm p-4 min-w-[220px] flex flex-col gap-3">
                  {guideItems.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="text-xs font-sans font-medium text-gray-300 hover:text-primary uppercase tracking-widest transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={buildPanelUrl('/giris')}
                onClick={() => logAnalyticsEvent('cta_click', { label: 'giris_yap', location: 'Navbar' })}
                className="text-xs font-sans font-medium text-gray-300 hover:text-primary uppercase tracking-widest transition-colors"
              >
                Giriş Yap
              </a>
              <a
                href="#contact"
                onClick={() => logAnalyticsEvent('cta_click', { label: 'demo_iste', location: 'Navbar' })}
                className="text-xs font-sans font-bold text-black bg-primary px-6 py-2 rounded-sm hover:bg-white transition-colors uppercase tracking-wider"
              >
                Demo İste
              </a>
            </div>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#0f1115] flex flex-col items-center justify-center md:hidden"
          >
            <div className="flex flex-col gap-8 text-center">
              {navItems.map((item) => (
                item.to ? (
                  <Link
                    key={`${item.label}-${item.to}`}
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className="font-serif text-4xl text-white hover:text-primary italic transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={`${item.label}-${item.href}`}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="font-serif text-4xl text-white hover:text-primary italic transition-colors"
                  >
                    {item.label}
                  </a>
                )
              ))}

              <div className="flex flex-col items-center gap-4 pt-4 border-t border-white/10">
                <p className="font-sans text-sm text-gray-300 uppercase tracking-widest">Rehberler</p>
                {guideItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className="font-serif text-3xl text-white hover:text-primary italic transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col items-center gap-4 pt-4 border-t border-white/10">
                <a
                  href={buildPanelUrl('/giris')}
                  onClick={() => {
                    logAnalyticsEvent('cta_click', { label: 'giris_yap', location: 'Navbar' });
                    setIsOpen(false);
                  }}
                  className="font-sans text-sm text-primary uppercase tracking-widest hover:text-white transition-colors"
                >
                  Giriş Yap
                </a>
                <a
                  href="/#contact"
                  onClick={() => {
                    logAnalyticsEvent('cta_click', { label: 'demo_iste', location: 'Navbar' });
                    setIsOpen(false);
                  }}
                  className="font-sans text-sm font-bold text-black bg-primary px-8 py-2.5 rounded-sm hover:bg-white transition-colors uppercase tracking-wider"
                >
                    Demo İste
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
