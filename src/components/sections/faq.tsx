'use client';

import * as React from 'react';
import { Minus, Plus } from '@phosphor-icons/react';
import { siteConfig } from '@/lib/constants';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How do you ensure UK GDPR compliance and data security?',
    answer:
      'Osvaro is built strictly to UK GDPR standards. All client and applicant data is encrypted both at rest (AES-256) and in transit (TLS 1.3) within dedicated UK-only data centres. We adhere strictly to data minimisation principles, ensuring only documentation required for active casework is ingested.',
  },
  {
    question: 'Will any of our firm’s casework data be processed without a signed DPA?',
    answer:
      'Absolutely not. No data is ever processed, stored, or routed through any Osvaro system until a legally binding Data Processing Agreement (DPA) and confidentiality agreement are signed by both parties. Your firm retains 100% data ownership and controller status at all times.',
  },
  {
    question: 'Is client or applicant data used to train public AI models?',
    answer:
      'Never. We maintain a zero-training architecture. Your matter records, client identity documents, and correspondence are never exposed to public models and are never used to train third-party foundation models. Your data remains strictly isolated to your firm.',
  },
  {
    question: 'Does Osvaro replace our qualified immigration caseworkers?',
    answer:
      'No. Osvaro eliminates the administrative grind — generating tailored checklists, chasing missing documents, verifying date windows, and detecting discrepancies. Qualified caseworkers and fee earners retain full control and make all strategic legal determinations.',
  },
  {
    question: 'How long does onboarding and workflow configuration take?',
    answer:
      'Initial deployment is fast and low-friction. We start with our Workflow Diagnostic to map your priority matter type (e.g., Skilled Worker or Sponsor Licence) and configure approved checklists within 7 to 14 business days, requiring minimal time from your fee earners.',
  },
  {
    question: 'How does Osvaro handle changes to UKVI immigration rules and sponsor guidance?',
    answer:
      'Our ongoing monthly retainer covers continuous system maintenance. When the Home Office updates Appendix Skilled Worker, salary thresholds, or sponsor reporting duties, our team updates your automated checklists and validation rules accordingly.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-20 bg-[#FAF8F4] border-b border-[#E8E2D6]">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left Column Heading & Action */}
          <div className="lg:col-span-4 flex flex-col items-start lg:sticky lg:top-28">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#6B7F4E] block mb-2">
              Governance & Security
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] text-[#1A1A1A] leading-[1.15] mb-4">
              Your answers to popular questions.
            </h2>
            <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-6">
              Everything you need to know about our operational systems, UK GDPR safeguards, and caseworker support.
            </p>
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[38px] items-center justify-center rounded-full border border-[#1A1A1A] px-5 text-xs font-medium text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#FAF8F4] transition-colors"
            >
              Book a workflow diagnostic
            </a>
          </div>

          {/* Right Column Accordion List */}
          <div className="lg:col-span-8 flex flex-col divide-y divide-[#E0D9CB] border-y border-[#E0D9CB]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="py-4 sm:py-5 transition-colors">
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between gap-4 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-lg sm:text-xl text-[#1A1A1A] group-hover:text-[#6B7F4E] transition-colors">
                      {faq.question}
                    </span>
                    <span className="size-7 rounded-full border border-[#D0C8B8] flex items-center justify-center shrink-0 text-[#1A1A1A] group-hover:border-[#1A1A1A] transition-colors">
                      {isOpen ? (
                        <Minus className="size-3.5" weight="bold" />
                      ) : (
                        <Plus className="size-3.5" weight="bold" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-3 pr-8 text-[#555555] text-xs sm:text-sm leading-relaxed animate-in">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
