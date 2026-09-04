import Image from 'next/image';
import { siteConfig } from '@/lib/constants';

export function FinalCTA() {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 overflow-hidden bg-[#0A0D10] text-[#FAF8F4]">
      {/* Background Architectural Columns Photo with Luxury Scrim */}
      <Image
        src="/images/cta-bg.png"
        alt="Architectural columns of authority and governance"
        fill
        className="object-cover object-center select-none opacity-35"
        sizes="100vw"
      />

      {/* Atmospheric lighting gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0D10]/90 via-[#0A0D10]/60 to-[#0A0D10]/95 pointer-events-none" />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-[1360px] mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10px] font-medium tracking-widest uppercase text-[#FAF8F4]/90 mb-4">
            <span className="size-1.5 rounded-full bg-[#A3BA7B] animate-pulse" />
            Start Your Transformation
          </span>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#FAF8F4] mb-4 leading-[1.15] tracking-tight text-balance">
            Find the workflow slowing your firm down.
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[#D8D2C6] mb-7 leading-relaxed max-w-md mx-auto">
            Start with one process, one measurable outcome, and a system your caseworkers will actually love using. Engagements start from £1k/month.
          </p>

          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-full bg-[#E5D78E] hover:bg-[#F0E4A0] px-7 text-xs sm:text-sm font-semibold text-[#1A1A1A] transition-all shadow-lg hover:scale-[1.02]"
          >
            Book a workflow diagnostic
          </a>
        </div>
      </div>
    </section>
  );
}
