'use client';

import * as React from 'react';
import { ArrowRight, Calculator } from '@phosphor-icons/react';
import { siteConfig } from '@/lib/constants';

export function RoiCalculator() {
  const [feeEarners, setFeeEarners] = React.useState<number>(3);
  const [hoursPerCase, setHoursPerCase] = React.useState<number>(3);
  const [casesPerMonth, setCasesPerMonth] = React.useState<number>(20);

  const HOURLY_RATE = 65;
  const totalHoursWasted = feeEarners * casesPerMonth * hoursPerCase;
  const monthlyCost = totalHoursWasted * HOURLY_RATE;
  const annualCost = monthlyCost * 12;
  const hoursSavedPerMonth = Math.round(totalHoursWasted * 0.65);

  return (
    <section id="calculator" className="py-16 lg:py-20 bg-[#F5F0E8] border-b border-[#E8E2D6]">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#6B7F4E] block mb-2">
            Calculate Your Cost
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[36px] text-[#1A1A1A] leading-[1.15] mb-3">
            See Exactly What Manual Document Checking Costs Your Firm Each Month.
          </h2>
          <p className="text-xs sm:text-sm text-[#555555] max-w-xl mx-auto leading-relaxed">
            Every hour your qualified fee earners spend chasing bank statements and verifying passport dates is billable strategic capacity lost.
          </p>
        </div>

        {/* Calculator Card with 3 Inputs and Result Area */}
        <div className="max-w-2xl mx-auto bg-[#FAF8F4] rounded-[24px] border border-[#E0D9CB] p-6 sm:p-10 shadow-lg">
          <div className="flex flex-col gap-4 mb-8">
            {/* Input 1 */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 bg-white/80 rounded-xl border border-[#E8E2D6]">
              <label htmlFor="feeEarners" className="text-xs sm:text-sm font-medium text-[#1A1A1A]">
                Fee earners or paralegals handling document checking
              </label>
              <input
                id="feeEarners"
                type="number"
                min={1}
                max={100}
                value={feeEarners}
                onChange={(e) => setFeeEarners(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-20 h-9 text-center font-serif text-base font-semibold text-[#1A1A1A] bg-white rounded-lg border border-[#D0C8B8] focus:border-[#6B7F4E] focus:outline-none shadow-inner"
              />
            </div>

            {/* Input 2 */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 bg-white/80 rounded-xl border border-[#E8E2D6]">
              <label htmlFor="hoursPerCase" className="text-xs sm:text-sm font-medium text-[#1A1A1A]">
                Average hours spent per case on document validation
              </label>
              <input
                id="hoursPerCase"
                type="number"
                min={1}
                max={40}
                value={hoursPerCase}
                onChange={(e) => setHoursPerCase(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-20 h-9 text-center font-serif text-base font-semibold text-[#1A1A1A] bg-white rounded-lg border border-[#D0C8B8] focus:border-[#6B7F4E] focus:outline-none shadow-inner"
              />
            </div>

            {/* Input 3 */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 bg-white/80 rounded-xl border border-[#E8E2D6]">
              <label htmlFor="casesPerMonth" className="text-xs sm:text-sm font-medium text-[#1A1A1A]">
                Cases processed per month
              </label>
              <input
                id="casesPerMonth"
                type="number"
                min={1}
                max={1000}
                value={casesPerMonth}
                onChange={(e) => setCasesPerMonth(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-20 h-9 text-center font-serif text-base font-semibold text-[#1A1A1A] bg-white rounded-lg border border-[#D0C8B8] focus:border-[#6B7F4E] focus:outline-none shadow-inner"
              />
            </div>
          </div>

          {/* Green-themed Result Box matching Osvaro's brand palette */}
          <div className="bg-[#EFF4E8] border border-[#D4E2C4] rounded-2xl p-6 sm:p-8 text-center mb-6">
            <span className="text-xs font-semibold text-[#566840] uppercase tracking-wider block mb-1.5">
              Your firm spends approximately
            </span>
            <div className="font-serif text-3xl sm:text-4xl lg:text-[46px] text-[#435133] font-bold tracking-tight mb-1.5">
              £{monthlyCost.toLocaleString()}
            </div>
            <span className="text-xs sm:text-sm text-[#566840] font-medium">
              per month on document validation admin.
            </span>
          </div>

          {/* Visibility of What They Are Losing Breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-white/80 rounded-xl border border-[#E8E2D6] mb-6 text-left">
            <div className="flex flex-col">
              <span className="text-[10px] text-[#777777] uppercase tracking-wider mb-0.5">
                Hours Lost Each Month
              </span>
              <span className="font-serif text-xl text-[#A8453A] font-semibold">
                {totalHoursWasted} hours
              </span>
              <span className="text-[11px] text-[#666666]">
                Time drained on checklists & chasing
              </span>
            </div>

            <div className="flex flex-col sm:border-l sm:border-[#E8E2D6] sm:pl-4">
              <span className="text-[10px] text-[#777777] uppercase tracking-wider mb-0.5">
                Annual Operational Drain
              </span>
              <span className="font-serif text-xl text-[#1A1A1A] font-semibold">
                £{annualCost.toLocaleString()} / year
              </span>
              <span className="text-[11px] text-[#666666]">
                Capacity recoverable: ~{hoursSavedPerMonth} hrs/mo
              </span>
            </div>
          </div>

          {/* Pricing anchor and CTA */}
          <div className="text-center pt-1">
            <p className="text-xs sm:text-sm font-medium text-[#1A1A1A] mb-1">
              Osvaro engagements start from <span className="font-semibold text-[#6B7F4E]">£1,000/month</span>.
            </p>
            <p className="text-[11px] text-[#777777] mb-5">
              Estimate based on standard paralegal billing rates.
            </p>

            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#1A1A1A] hover:bg-[#2E2E2E] px-7 text-xs sm:text-sm font-semibold text-[#FAF8F4] transition-all shadow-md"
            >
              Recover this capacity — Book a diagnostic
              <ArrowRight className="size-3.5" weight="bold" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
