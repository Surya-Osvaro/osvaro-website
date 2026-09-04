import Link from 'next/link';
import { Check } from '@phosphor-icons/react/dist/ssr';
import { siteConfig } from '@/lib/constants';

const features = [
  "Process mapping",
  "One priority workflow",
  "Custom checklist",
  "Email & reminder workflows",
  "Matter dashboard",
  "Weekly exception report",
  "Firm-approved templates",
  "Escalation logic",
  "Monthly optimisation call"
];

export function StarterOffer() {
  const midpoint = Math.ceil(features.length / 2);
  const leftFeatures = features.slice(0, midpoint);
  const rightFeatures = features.slice(midpoint);

  return (
    <section className="py-16 lg:py-20 bg-background border-b border-[#E8E2D6]">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#6B7F4E] block mb-2">
            Low-Risk Implementation
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[36px] text-foreground leading-tight">
            Start with one workflow. See the difference.
          </h2>
        </div>

        <div className="max-w-3xl mx-auto bg-sand-50 rounded-2xl p-6 sm:p-9 border border-charcoal-200 shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="font-sans font-semibold text-lg sm:text-xl text-charcoal-900 mb-6 border-b border-charcoal-200 pb-4">
              Immigration Workflow Diagnostic + First Automation
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 mb-8">
              <ul className="flex flex-col gap-3">
                {leftFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2.5">
                    <Check className="size-4 text-olive-600 shrink-0" weight="bold" />
                    <span className="text-xs sm:text-sm text-charcoal-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-3">
                {rightFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2.5">
                    <Check className="size-4 text-olive-600 shrink-0" weight="bold" />
                    <span className="text-xs sm:text-sm text-charcoal-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-charcoal-200 pt-6">
              <div className="bg-olive-100 text-olive-800 px-3.5 py-1.5 rounded-full font-medium text-xs">
                Engagements start from £1k/month
              </div>
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-charcoal-900 text-sand-50 px-6 py-2.5 rounded-full hover:bg-charcoal-800 transition-colors font-medium text-xs sm:text-sm w-full sm:w-auto text-center"
              >
                Book a workflow diagnostic
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
