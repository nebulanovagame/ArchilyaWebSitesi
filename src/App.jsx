import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { logAnalyticsEvent } from './firebase';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import ArchilyaAIAssistant from './components/ArchilyaAIAssistant';

/* Lazy-loaded route’lar */
const ComingSoon = lazy(() => import('./components/ComingSoon'));

/* Lazy-loaded route bileşenleri (legal, landing, rehber) */
const GizlilikPolitikasi = lazy(() => import('./pages/LegalPages').then(m => ({ default: m.GizlilikPolitikasi })));
const KVKK = lazy(() => import('./pages/LegalPages').then(m => ({ default: m.KVKK })));
const KullanimKosullari = lazy(() => import('./pages/LegalPages').then(m => ({ default: m.KullanimKosullari })));
const IptalIade = lazy(() => import('./pages/LegalPages').then(m => ({ default: m.IptalIade })));
const MesafeliSatis = lazy(() => import('./pages/LegalPages').then(m => ({ default: m.MesafeliSatis })));
const Hakkimizda = lazy(() => import('./pages/LegalPages').then(m => ({ default: m.Hakkimizda })));
const AiStudioLanding = lazy(() => import('./pages/LandingPages').then(m => ({ default: m.AiStudioLanding })));
const VrSunumLanding = lazy(() => import('./pages/LandingPages').then(m => ({ default: m.VrSunumLanding })));
const MimarlikOfisleriLanding = lazy(() => import('./pages/LandingPages').then(m => ({ default: m.MimarlikOfisleriLanding })));
const EmlakVrLanding = lazy(() => import('./pages/LandingPages').then(m => ({ default: m.EmlakVrLanding })));
const EmlakPixelStreamingLanding = lazy(() => import('./pages/LandingPages').then(m => ({ default: m.EmlakPixelStreamingLanding })));
const MuteahhitLanding = lazy(() => import('./pages/LandingPages').then(m => ({ default: m.MuteahhitLanding })));
const FiyatlandirmaLanding = lazy(() => import('./pages/LandingPages').then(m => ({ default: m.FiyatlandirmaLanding })));
const VrSunumRehber = lazy(() => import('./pages/RehberPages').then(m => ({ default: m.VrSunumRehber })));
const AiRenderRehber = lazy(() => import('./pages/RehberPages').then(m => ({ default: m.AiRenderRehber })));
const Emlak360Rehber = lazy(() => import('./pages/RehberPages').then(m => ({ default: m.Emlak360Rehber })));

/* Lazy-loaded ana sayfa bölümleri — scroll ile yüklenir */
const ProductFeatures = lazy(() => import('./components/ProductFeatures'));
const Features = lazy(() => import('./components/Features'));
const BeforeAfter = lazy(() => import('./components/BeforeAfter'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Workflow = lazy(() => import('./components/Workflow'));
const Services = lazy(() => import('./components/Services'));
const PricingCalculator = lazy(() => import('./components/PricingCalculator'));
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary/30 selection:text-white">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <Suspense fallback={<div className="h-screen" />}><ProductFeatures /></Suspense>
            <Suspense fallback={<div className="h-[400px]" />}><Features /></Suspense>
            <Suspense fallback={<div className="h-[300px]" />}><BeforeAfter /></Suspense>
            <Suspense fallback={<div className="h-[400px]" />}><Services /></Suspense>
            <Suspense fallback={<div className="h-screen" />}><Portfolio /></Suspense>
            <Suspense fallback={<div className="h-[400px]" />}><Workflow /></Suspense>
            <Suspense fallback={<div className="h-screen" />}><PricingCalculator /></Suspense>
            <Suspense fallback={<div className="h-[300px]" />}><Contact /></Suspense>
          </main>
          <Footer />
        </>
      )}
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
          <Link
            to="/panel"
            className="inline-flex min-w-[220px] items-center justify-center rounded-sm border border-white/15 bg-white/[0.02] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.28em] text-white transition-colors hover:border-primary/40 hover:text-primary"
          >
            Panel Girişine Git
          </Link>
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
        <Route path="/panel" element={
          <Suspense fallback={<PageFallback />}><ComingSoon /></Suspense>
        } />
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
        <Route path="/fiyatlandirma" element={
          <Suspense fallback={<PageFallback />}><FiyatlandirmaLanding /></Suspense>
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
        <Route path="/hakkimizda" element={
          <Suspense fallback={<PageFallback />}><Hakkimizda /></Suspense>
        } />
        <Route path="*" element={<SiteNotFound />} />
      </Routes>
      <ArchilyaAIAssistant />
    </BrowserRouter>
  );
}

export default App;
