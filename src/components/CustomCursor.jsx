import { useEffect, useRef, useState, useMemo } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';

function getIsFinePointer() {
  if (typeof window === 'undefined') return true;
  return window.matchMedia('(pointer: fine)').matches;
}

function getPrefersReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorLabel, setCursorLabel] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(getIsFinePointer);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(getPrefersReducedMotion);

  const dotRef = useRef(null);
  const rafRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });

  const ringX = useMotionValue(0);
  const ringY = useMotionValue(0);
  const springX = useSpring(ringX, { stiffness: 150, damping: 15, mass: 0.5 });
  const springY = useSpring(ringY, { stiffness: 150, damping: 15, mass: 0.5 });

  // Subscribe to media query changes (only for changes after mount)
  useEffect(() => {
    const pointerQuery = window.matchMedia('(pointer: fine)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const onPointerChange = (e) => setIsFinePointer(e.matches);
    const onMotionChange = (e) => setPrefersReducedMotion(e.matches);
    pointerQuery.addEventListener('change', onPointerChange);
    motionQuery.addEventListener('change', onMotionChange);
    return () => {
      pointerQuery.removeEventListener('change', onPointerChange);
      motionQuery.removeEventListener('change', onMotionChange);
    };
  }, []);

  useEffect(() => {
    if (!isFinePointer || prefersReducedMotion) return;

    const updateMousePosition = (e) => {
      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;

      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(() => {
          rafRef.current = null;
          const { x, y } = posRef.current;
          if (dotRef.current) {
            dotRef.current.style.transform = `translate(${x - 4}px, ${y - 4}px)`;
          }
          ringX.set(x);
          ringY.set(y);
        });
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const interactive = target.closest('a, button, [data-cursor], input, textarea, [role="button"]');
      if (interactive) {
        setIsHovering(true);
        const label = interactive.getAttribute('data-cursor') ||
          interactive.closest('[data-cursor]')?.getAttribute('data-cursor') || '';
        setCursorLabel(label);
      } else {
        setIsHovering(false);
        setCursorLabel('');
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isFinePointer, prefersReducedMotion, ringX, ringY]);

  const dotStyle = useMemo(() => ({
    opacity: isVisible ? 1 : 0,
    willChange: 'transform',
  }), [isVisible]);

  const ringStyle = useMemo(() => ({
    x: springX,
    y: springY,
    translateX: -24,
    translateY: -24,
    opacity: isVisible ? 1 : 0,
  }), [springX, springY, isVisible]);

  if (!isFinePointer || prefersReducedMotion) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9998] hidden md:block"
        style={dotStyle}
      />

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] hidden md:flex items-center justify-center"
        style={ringStyle}
      >
        <motion.div
          animate={{
            width: isHovering && cursorLabel ? 80 : 48,
            height: isHovering && cursorLabel ? 80 : 48,
            backgroundColor: isHovering
              ? cursorLabel
                ? 'rgba(198, 168, 124, 0.92)'
                : 'rgba(198, 168, 124, 0.1)'
              : 'transparent',
            borderColor: isHovering
              ? 'rgba(198, 168, 124, 0.9)'
              : 'rgba(198, 168, 124, 0.3)',
            borderRadius: '50%',
          }}
          transition={{ type: 'spring', stiffness: 220, damping: 18 }}
          className="border flex items-center justify-center"
        >
          <AnimatePresence>
            {isHovering && cursorLabel && (
              <motion.span
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.15 }}
                className="text-black font-sans font-bold text-[9px] uppercase tracking-wider leading-none text-center px-1"
              >
                {cursorLabel}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </>
  );
}
