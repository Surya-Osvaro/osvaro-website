import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ProductSlideshow } from '@/components/product-frames/product-slideshow';
import { WindowFrame } from '@/components/product-frames/window-frame';
import {
  CRFrame1,
  CRFrame2,
  CRFrame3,
  CRFrame4,
} from '@/components/product-frames/case-readiness-frames';
import { CheckCircle } from '@phosphor-icons/react/dist/ssr';

export const metadata: Metadata = {
  title: 'Case Readiness Engine',
  description:
    'Automate evidence collection, document checking, and file preparation for UK immigration matters. Reduce document-chasing time by 50–70%.',
};

const slideLabels = [
  'A tailored evidence checklist is created for every matter.',
  'Clients always know what to upload, what is missing, and what happens next.',
  'The system detects missing, inconsistent, expired, or unusable evidence before legal review.',
  'Caseworkers receive a clear, review-ready file instead of spending hours preparing it.',
];

export default function CaseReadinessPage() {
  const slideFrames = [
    <CRFrame1 key="f1" />,
    <CRFrame2 key="f2" />,
    <CRFrame3 key="f3" />,
    <CRFrame4 key="f4" />,
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="section-padding">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-olive-500 font-medium text-body-sm mb-4 uppercase tracking-wider">
                  Product
                </p>
                <h1 className="font-serif text-display leading-tight mb-6">
                  Case Readiness Engine
                </h1>
                <p className="text-body-lg text-charcoal-500 mb-4 max-w-lg">
                  Every Skilled Worker and sponsor-licence file becomes
                  case-ready before a fee earner touches it.
                </p>
                <p className="text-body text-charcoal-500 mb-8 max-w-lg">
                  The Case Readiness Engine handles the repetitive operational
                  work that usually happens before legal review — generating
                  checklists, collecting documents, detecting exceptions, and
                  delivering a review-ready brief to your caseworkers.
                </p>

                <div className="bg-sand-50 border border-sand-400 rounded-xl p-6 mb-8">
                  <p className="text-body-sm font-medium text-charcoal-500 mb-1">
                    Expected outcome
                  </p>
                  <p className="font-serif text-heading-3 text-charcoal-900">
                    Reduce document-chasing and file-preparation time by
                    approximately 50–70%
                  </p>
                </div>

                <ul className="flex flex-col gap-4 mb-10">
                  {[
                    'Generate tailored evidence checklists per matter',
                    'Branded client portal for document uploads',
                    'Automated exception detection and escalation',
                    'Review-ready caseworker briefs with audit trail',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle
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
