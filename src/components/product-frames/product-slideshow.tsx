'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProductSlideshowProps {
  frames: React.ReactNode[];
  labels: string[];
  interval?: number;
  className?: string;
}

export function ProductSlideshow({
  frames,
  labels,
  interval = 3000,
  className,
}: ProductSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % frames.length);
  }, [frames.length]);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [isPaused, prefersReducedMotion, interval, nextSlide]);

  if (prefersReducedMotion) {
    return (
      <div className={cn('flex flex-col gap-6', className)}>
        {frames.map((frame, i) => (
          <div key={i}>
            <p className="mb-3 font-sans text-body-sm font-medium text-charcoal-500">
              {labels[i]}
            </p>
            {frame}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn('relative', className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      role="region"
      aria-label="Product workflow demonstration"
      aria-roledescription="carousel"
    >
      {/* Frame label */}
      <div className="mb-4 flex items-center justify-between">
        <p className="font-sans text-body-sm font-medium text-charcoal-500">
          {labels[currentIndex]}
        </p>
        <p className="font-sans text-caption text-charcoal-400">
          {currentIndex + 1} / {frames.length}
        </p>
      </div>

      {/* Slideshow container */}
      <div className="relative overflow-hidden rounded-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            {frames[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation dots */}
      <div className="mt-6 flex items-center justify-center gap-2" role="tablist">
        {frames.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={cn(
              'size-2.5 rounded-full transition-all duration-300',
              i === currentIndex
                ? 'w-8 bg-olive-500'
                : 'bg-sand-400 hover:bg-charcoal-400'
            )}
            role="tab"
            aria-selected={i === currentIndex}
            aria-label={`Show frame ${i + 1}: ${labels[i]}`}
          />
        ))}
      </div>
    </div>
  );
}
