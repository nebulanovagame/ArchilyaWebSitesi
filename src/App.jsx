import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { logAnalyticsEvent } from './firebase';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
const ArchilyaAIAssistant = lazy(() => import('./components/ArchilyaAIAssistant'));
import CookieConsent from './components/CookieConsent';
import { SEO_PAGES, setPageMeta } from './utils/seo';

/* Lazy-loaded route’lar */
const ComingSoon = lazy(() => import('./components/ComingSoon'));

/* Lazy-loaded route bileşenleri (legal, landing, rehber) */
const GizlilikPolitikasi = lazy(() => import('./pages/LegalPages').then(m => ({ default: m.GizlilikPolitikasi })));
const KVKK = lazy(() => import('./pages/LegalPages').then(m => ({ default: m.KVKK })));
const KullanimKosullari = lazy(() => import('./pages/LegalPages').then(m => ({ default: m.KullanimKosullari })));
const IptalIade = lazy(() => import('./pages/LegalPages').then(m => ({ default: m.IptalIade })));
const MesafeliSatis = lazy(() => import('./pages/LegalPages').then(m => ({ default: m.MesafeliSatis })));
const CerezPolitikasi = lazy(() => import('./pages/LegalPages').then(m => ({ default: m.CerezPolitikasi })));
const TicariElektronikIletiOnayi = lazy(() => import('./pages/LegalPages').then(m => ({ default: m.TicariElektronikIletiOnayi })));
const GizlilikKosullari = lazy(() => import('./pages/LegalPages').then(m => ({ default: m.GizlilikKosullari })));
const Hakkimizda = lazy(() => import('./pages/LegalPages').then(m => ({ default: m.Hakkimizda })));
const MimarlikHizmetSozlesmesi = lazy(() => import('./pages/LegalPages').then(m => ({ default: m.MimarlikHizmetSozlesmesi })));
function PanelRedirect() {
  useEffect(() => {
    window.location.href = 'https://panel.archilya.com';
  }, []);
  return null;
}

const AiStudioLanding = lazy(() => import('./pages/LandingPages').then(m => ({ default: m.AiStudioLanding })));
const VrSunumLanding = lazy(() => import('./pages/LandingPages').then(m => ({ default: m.VrSunumLanding })));
const MimarlikOfisleriLanding = lazy(() => import('./pages/LandingPages').then(m => ({ default: m.MimarlikOfisleriLanding })));
const EmlakVrLanding = lazy(() => import('./pages/LandingPages').then(m => ({ default: m.EmlakVrLanding })));
const EmlakPixelStreamingLanding = lazy(() => import('./pages/LandingPages').then(m => ({ default: m.EmlakPixelStreamingLanding })));
const MuteahhitLanding = lazy(() => import('./pages/LandingPages').then(m => ({ default: m.MuteahhitLanding })));
const FranchisePartnerLanding = lazy(() => import('./pages/LandingPages').then(m => ({ default: m.FranchisePartnerLanding })));
const TrakyaRuhsatIsTakibi = lazy(() => import('./pages/TrakyaRuhsatIsTakibi'));
const HizmetlerPage = lazy(() => import('./pages/HizmetlerPage'));
const VrSunumRehber = lazy(() => import('./pages/RehberPages').then(m => ({ default: m.VrSunumRehber })));
const AiRenderRehber = lazy(() => import('./pages/RehberPages').then(m => ({ default: m.AiRenderRehber })));
const Emlak360Rehber = lazy(() => import('./pages/RehberPages').then(m => ({ default: m.Emlak360Rehber })));

/* Lazy-loaded ana sayfa bölümleri — scroll ile yüklenir */
const ProductFeatures = lazy(() => import('./components/ProductFeatures'));
const Services = lazy(() => import('./components/Services'));
const Features = lazy(() => import('./components/Features'));
const BeforeAfter = lazy(() => import('./components/BeforeAfter'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const KurumsalBasvuru = lazy(() => import('./components/KurumsalBasvuru'));
const BranchesPartners = lazy(() => import('./components/BranchesPartners'));
const Contact = lazy(() => import('./components/Contact'));

function PageFallback() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-6 h-6 border border-primary/30 border-t-primary rounded-full animate-spin" />
        <p className="text-[10px] text-gray-600 uppercase tracking-widest">Yükleniyor</p>
      </div>
    </div>
  );
}

function HomePage() {
  useEffect(() => {
    setPageMeta(SEO_PAGES.HOME.title, SEO_PAGES.HOME.desc);
  }, []);

  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-screen" />}><Services /></Suspense>
        <Suspense fallback={<div className="h-screen" />}><ProductFeatures /></Suspense>
        <Suspense fallback={<div className="h-[400px]" />}><Features /></Suspense>
        <Suspense fallback={<div className="h-[300px]" />}><BeforeAfter /></Suspense>
        <Suspense fallback={<div className="h-screen" />}><Portfolio /></Suspense>
        <Suspense fallback={<div className="h-screen" />}><BranchesPartners /></Suspense>
        <Suspense fallback={<div className="h-screen" />}><KurumsalBasvuru /></Suspense>
        <Suspense fallback={<div className="h-[300px]" />}><Contact /></Suspense>
      </main>
      <Footer />
    </div>
  );
}

function RouteAnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    const pagePath = `${location.pathname}${location.search || ''}${location.hash || ''}`;
    logAnalyticsEvent('page_view', {
      page_path: pagePath,
      page_title: typeof document !== 'undefined' ? document.title : 'Archilya',
      page_location: typeof window !== 'undefined' ? window.location.href : pagePath,
    });
  }, [location]);

  return null;
}

function SiteNotFound() {
  useEffect(() => {
    setPageMeta(
      '404 Sayfa Bulunamadı',
        'Aradığınız Archilya sayfası bulunamadı. Ana sayfadan mimari destek hizmetlerimize, hizmet kataloğumuza ve kurumsal çözümlerimize ulaşabilirsiniz.',
      { robots: 'noindex,follow' },
    );
    document.title = '404 | Sayfa Bulunamadı';
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background px-6 py-10 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(198,168,124,0.16),transparent_42%)]" />
        <div className="absolute left-1/2 top-24 h-56 w-56 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="relative mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-4xl flex-col items-center justify-center text-center"
      >
        <div className="mb-8 inline-flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-primary/80">Archilya</span>
          <span className="font-serif text-3xl italic tracking-[0.08em] text-white">Archilya</span>
        </div>

        <div className="mb-6 flex flex-col items-center">
          <p className="mb-4 text-[10px] uppercase tracking-[0.32em] text-primary/75">Sayfa Bulunamadı</p>
          <h1 className="font-serif text-[7rem] italic leading-none text-primary/22 sm:text-[9rem] md:text-[11rem]">404</h1>
        </div>

        <div className="max-w-xl space-y-4">
          <h2 className="font-serif text-3xl italic text-white sm:text-4xl">Aradığınız sayfa bulunamadı</h2>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex min-w-[220px] items-center justify-center rounded-sm bg-primary px-6 py-3 text-[10px] font-bold uppercase tracking-[0.28em] text-black transition-colors hover:bg-white"
          >
            Ana Sayfaya Dön
          </Link>
          <a
            href="https://panel.archilya.com"
            className="inline-flex min-w-[220px] items-center justify-center rounded-sm border border-white/15 bg-white/[0.02] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.28em] text-white transition-colors hover:border-primary/40 hover:text-primary"
          >
            Panel Girişine Git
          </a>
        </div>
      </motion.div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <RouteAnalyticsTracker />
      <CustomCursor />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/panel" element={<PanelRedirect />} />
        <Route path="/ai-studio" element={
          <Suspense fallback={<PageFallback />}><AiStudioLanding /></Suspense>
        } />
        <Route path="/vr-sunum" element={
          <Suspense fallback={<PageFallback />}><VrSunumLanding /></Suspense>
        } />
        <Route path="/mimarlik-ofisleri" element={
          <Suspense fallback={<PageFallback />}><MimarlikOfisleriLanding /></Suspense>
        } />
        <Route path="/emlak-vr-sunum" element={
          <Suspense fallback={<PageFallback />}><EmlakVrLanding /></Suspense>
        } />
        <Route path="/emlak-pixel-streaming-sunum" element={
          <Suspense fallback={<PageFallback />}><EmlakPixelStreamingLanding /></Suspense>
        } />
        <Route path="/muteahhit-proje-sunumu" element={
          <Suspense fallback={<PageFallback />}><MuteahhitLanding /></Suspense>
        } />
        <Route path="/fiyatlandirma" element={<Navigate to="/hizmetler" replace />} />
        <Route path="/franchise-partner" element={
          <Suspense fallback={<PageFallback />}><FranchisePartnerLanding /></Suspense>
        } />
        <Route path="/trakya-ruhsat-is-takibi" element={
          <Suspense fallback={<PageFallback />}><TrakyaRuhsatIsTakibi /></Suspense>
        } />
        <Route path="/hizmetler" element={
          <Suspense fallback={<PageFallback />}><HizmetlerPage /></Suspense>
        } />
        <Route path="/rehber/vr-sunum-satis" element={
          <Suspense fallback={<PageFallback />}><VrSunumRehber /></Suspense>
        } />
        <Route path="/rehber/ai-render-revizyon" element={
          <Suspense fallback={<PageFallback />}><AiRenderRehber /></Suspense>
        } />
        <Route path="/rehber/emlak-360-vr" element={
          <Suspense fallback={<PageFallback />}><Emlak360Rehber /></Suspense>
        } />
        <Route path="/gizlilik-politikasi" element={
          <Suspense fallback={<PageFallback />}><GizlilikPolitikasi /></Suspense>
        } />
        <Route path="/kvkk" element={
          <Suspense fallback={<PageFallback />}><KVKK /></Suspense>
        } />
        <Route path="/kullanim-kosullari" element={
          <Suspense fallback={<PageFallback />}><KullanimKosullari /></Suspense>
        } />
        <Route path="/iptal-iade" element={
          <Suspense fallback={<PageFallback />}><IptalIade /></Suspense>
        } />
        <Route path="/mesafeli-satis" element={
          <Suspense fallback={<PageFallback />}><MesafeliSatis /></Suspense>
        } />
        <Route path="/cerez-politikasi" element={
          <Suspense fallback={<PageFallback />}><CerezPolitikasi /></Suspense>
        } />
        <Route path="/ticari-elektronik-ileti-onayi" element={
          <Suspense fallback={<PageFallback />}><TicariElektronikIletiOnayi /></Suspense>
        } />
        <Route path="/gizlilik-kosullari" element={
          <Suspense fallback={<PageFallback />}><GizlilikKosullari /></Suspense>
        } />
        <Route path="/hakkimizda" element={
          <Suspense fallback={<PageFallback />}><Hakkimizda /></Suspense>
        } />
        <Route path="/mimarlik-hizmet-sozlesmesi" element={
          <Suspense fallback={<PageFallback />}><MimarlikHizmetSozlesmesi /></Suspense>
        } />
        <Route path="*" element={<SiteNotFound />} />
      </Routes>
      <Suspense fallback={null}>
        <ArchilyaAIAssistant />
      </Suspense>
      <CookieConsent />
    </BrowserRouter>
  );
}

export default App;
