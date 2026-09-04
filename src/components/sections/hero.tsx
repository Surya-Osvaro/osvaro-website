import Image from 'next/image';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';
import { siteConfig } from '@/lib/constants';

export function Hero() {
  return (
    <section className="relative w-full bg-[#FAF8F4] pt-4 pb-12 lg:pb-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-[1360px] mx-auto">
        {/* Single-frame hero container with rounded corners and background photo */}
        <div className="relative w-full min-h-[560px] lg:min-h-[620px] rounded-[28px] lg:rounded-[36px] overflow-hidden shadow-2xl flex flex-col justify-between p-8 sm:p-12 lg:p-16">
          {/* Background Image & Editorial Lighting Gradient */}
          <Image
            src="/images/hero-bg.png"
            alt="UK Immigration Lawyer reviewing case documents with focused attention"
            fill
            priority
            className="object-cover object-right lg:object-center select-none"
            sizes="(max-width: 1400px) 100vw, 1360px"
          />

          {/* Luxury contrast scrim overlay ensuring text readability on left side */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C1217]/95 via-[#0C1217]/75 to-[#0C1217]/20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C1217]/70 via-transparent to-transparent pointer-events-none" />

          {/* Top category chip / pill */}
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-medium tracking-widest uppercase text-[#FAF8F4]/90">
              <span className="size-1.5 rounded-full bg-[#A3BA7B] animate-pulse" />
              AI Operating Systems for UK Immigration Firms
            </span>
          </div>

          {/* Center-to-Bottom Split Hero Content */}
          <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-end pt-12 lg:pt-20">
            {/* Left Headline */}
            <div className="lg:col-span-7">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[60px] text-[#FAF8F4] leading-[1.08] tracking-tight text-balance">
                Legal casework that used to take hours. Done in minutes.
              </h1>
            </div>

            {/* Right Positioning & CTA */}
            <div className="lg:col-span-5 flex flex-col items-start lg:pl-6">
              <p className="text-[#D8D2C6] text-sm sm:text-base leading-relaxed mb-6 max-w-md font-sans">
                Osvaro is the operational AI system built for UK immigration law firms — not generic chat. Collect evidence checklists, detect compliance risks, and move files to case-ready without chasing clients.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <a
                  href={siteConfig.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#E5D78E] hover:bg-[#F0E4A0] px-7 text-sm font-semibold text-[#1A1A1A] transition-all shadow-md group"
                >
                  Book a Workflow Diagnostic
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" weight="bold" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Credibility proof metrics strip directly below hero card */}
        <div className="mt-8 pt-6 pb-2 border-b border-[#E8E2D6] grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          <div className="flex flex-col sm:border-r border-[#E8E2D6] sm:pr-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7F4E] mb-1">
              Casework Preparation
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-3xl lg:text-4xl text-[#1A1A1A]">50–70%</span>
              <span className="text-xs text-[#666666]">faster file-readiness</span>
            </div>
          </div>

          <div className="flex flex-col sm:border-r border-[#E8E2D6] sm:px-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7F4E] mb-1">
              Sponsor Compliance
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-3xl lg:text-4xl text-[#1A1A1A]">100%</span>
              <span className="text-xs text-[#666666]">continuously audit-ready</span>
            </div>
          </div>

          <div className="flex flex-col sm:pl-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7F4E] mb-1">
              Team Capacity
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-3xl lg:text-4xl text-[#1A1A1A]">30–50%</span>
              <span className="text-xs text-[#666666]">more matters per fee earner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
