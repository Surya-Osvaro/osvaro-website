import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ProductSlideshow } from '@/components/product-frames/product-slideshow';
import { WindowFrame } from '@/components/product-frames/window-frame';
import {
  SCFrame1,
  SCFrame2,
  SCFrame3,
  SCFrame4,
} from '@/components/product-frames/sponsor-compliance-frames';
import { ShieldCheck } from '@phosphor-icons/react/dist/ssr';

export const metadata: Metadata = {
  title: 'Sponsor Compliance Command Centre',
  description:
    'Maintain continuous sponsor licence compliance and audit readiness. Reduce compliance-preparation labour by 40–60%.',
};

const slideLabels = [
  'Every sponsor, worker, deadline, and obligation in one controlled view.',
  'Compliance actions are automatically assigned, tracked, and escalated.',
  'The system identifies compliance risks early, while there is still time to resolve them.',
  'Stay audit-ready continuously instead of preparing for compliance reviews in a panic.',
];

export default function SponsorCompliancePage() {
  const slideFrames = [
    <SCFrame1 key="f1" />,
    <SCFrame2 key="f2" />,
    <SCFrame3 key="f3" />,
    <SCFrame4 key="f4" />,
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="section-padding">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-olive-500 font-medium text-body-sm mb-4 uppercase tracking-wider">
                  Product
                </p>
                <h1 className="font-serif text-display leading-tight mb-6">
                  Sponsor Compliance Command Centre
                </h1>
                <p className="text-body-lg text-charcoal-500 mb-4 max-w-lg">
                  Turn sponsor compliance from an audit panic into a
                  continuously maintained operating system.
                </p>
                <p className="text-body text-charcoal-500 mb-8 max-w-lg">
                  The Command Centre maintains sponsor profiles, tracks
                  obligations, assigns actions to the right people, collects
                  audit evidence, detects discrepancies, and prepares
                  audit-ready packs — continuously.
                </p>

                <div className="bg-sand-50 border border-sand-400 rounded-xl p-6 mb-8">
                  <p className="text-body-sm font-medium text-charcoal-500 mb-1">
                    Expected outcome
                  </p>
                  <p className="font-serif text-heading-3 text-charcoal-900">
                    Maintain a continuously audit-ready sponsor file and reduce
                    compliance-preparation labour by approximately 40–60%
                  </p>
                </div>

                <ul className="flex flex-col gap-4 mb-10">
                  {[
                    'Centralised sponsor profiles with compliance calendars',
                    'Automated action assignment and escalation',
                    'Continuous RAG risk detection and monitoring',
                    'One-click audit preparation packs',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <ShieldCheck
                        size={22}
                        className="text-olive-500 mt-0.5 flex-shrink-0"
                        weight="fill"
                      />
                      <span className="text-charcoal-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="mailto:surya@osvaro.co.uk"
                  className="inline-flex items-center justify-center bg-charcoal-900 text-sand-50 px-8 py-4 rounded-lg font-medium hover:bg-charcoal-800 transition-colors"
                >
                  Book a Workflow Diagnostic
                </a>
              </div>

              <div className="w-full">
                <ProductSlideshow
                  frames={slideFrames}
                  labels={slideLabels}
                  interval={3000}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
