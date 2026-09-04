import {
  FileMagnifyingGlass,
  EnvelopeSimple,
  ClockCountdown,
  Folders,
  CalendarCheck,
  ChartLineDown,
  ArrowRight,
  CheckCircle,
} from '@phosphor-icons/react/dist/ssr';
import { siteConfig } from '@/lib/constants';

const painPoints = [
  {
    title: 'Document Chasing & Client Inaction',
    description:
      'Fee earners spend 60% of their workday sending WhatsApps and reminder emails for missing bank statements and passport scans.',
    icon: FileMagnifyingGlass,
    solution: 'Automated branded portal with structured document checklists and automatic escalations.',
  },
  {
    title: 'Surprise Expiries & Discrepancies',
    description:
      'Name spellings don’t match across certificates, bank statements miss the 28-day window, or passports expire right before submission.',
    icon: ClockCountdown,
    solution: 'Real-time document classification and automated exception detection before fee earner review.',
  },
  {
    title: 'Sponsor Compliance Audit Anxiety',
    description:
      'Scrambling through shared drives and spreadsheets when Home Office UKVI announces an unannounced audit visit.',
    icon: CalendarCheck,
    solution: 'Continuous audit-ready sponsor profiles with automated RAG risk indicators and one-click audit packs.',
  },
  {
    title: 'Unclear Next Action & Bottlenecks',
    description:
      'Casework stalls in inboxes because nobody knows whose turn it is to draft, review, or advance the matter.',
    icon: ChartLineDown,
    solution: 'Central operations control tower tracking matter cycle times and blocked files across the firm.',
  },
];

export function Problem() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F4] border-b border-[#E8E2D6]">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
        {/* Section Header: Sharp Pain vs Solution Angle */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#6B7F4E] block mb-3">
            The Operational Reality
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#1A1A1A] leading-tight mb-5">
            Your immigration lawyers are brilliant. Your operational systems are slowing them down.
          </h2>
          <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
            The bottleneck isn't legal expertise. It’s the endless manual administrative friction required to get files ready for review and keep sponsor licences in compliance.
          </p>
        </div>

        {/* 2x2 Pain vs Solution Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {painPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#F5F0E8] rounded-2xl p-7 lg:p-9 border border-[#E0D9CB] flex flex-col justify-between hover:border-[#6B7F4E]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="size-11 rounded-xl bg-[#EDE5D8] text-[#1A1A1A] flex items-center justify-center">
                      <Icon className="size-6 text-[#1A1A1A]" weight="regular" />
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#1A1A1A]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-[15px] text-[#555555] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Direct Solution Callout */}
                <div className="pt-4 border-t border-[#E5DFD1] flex items-start gap-3">
                  <CheckCircle className="size-5 text-[#6B7F4E] shrink-0 mt-0.5" weight="fill" />
                  <p className="text-xs sm:text-sm font-medium text-[#1A1A1A]">
                    <span className="text-[#6B7F4E]">Osvaro Solution: </span>
                    {item.solution}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Diagnostic Offer Bar */}
        <div className="bg-[#1A1A1A] text-[#FAF8F4] rounded-2xl p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="text-xs font-semibold tracking-wider text-[#A3BA7B] uppercase block mb-1">
              Fixed-Fee Diagnostic
            </span>
            <h3 className="font-serif text-2xl lg:text-3xl text-[#FAF8F4]">
              Identify the exact bottleneck costing your firm 15+ hours per week.
            </h3>
            <p className="text-xs sm:text-sm text-[#C8C2B7] mt-1">
              We map your current casework workflow, test one automated intake sequence, and deliver actionable results. Engagements start from £1k/month.
            </p>
          </div>
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#E5D78E] hover:bg-[#F0E4A0] px-7 text-sm font-semibold text-[#1A1A1A] transition-all"
          >
            Book a workflow diagnostic
            <ArrowRight className="size-4" weight="bold" />
          </a>
        </div>
      </div>
    </section>
  );
}
