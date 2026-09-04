import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ProductSlideshow } from '@/components/product-frames/product-slideshow';
import { WindowFrame } from '@/components/product-frames/window-frame';
import {
  OPFrame1,
  OPFrame2,
  OPFrame3,
  OPFrame4,
} from '@/components/product-frames/operations-frames';
import { ChartLineUp } from '@phosphor-icons/react/dist/ssr';

export const metadata: Metadata = {
  title: 'Immigration Operations Control Tower',
  description:
    'Monitor matters, track bottlenecks, understand capacity, and release 30–50% more capacity from the same team.',
};

const slideLabels = [
  'A complete view of every matter, stage, and blockers across your firm.',
  'Understand workload distribution and identify capacity constraints in real time.',
  'Track ageing cases and exception volumes to catch problems before they escalate.',
  'Weekly operational summaries that drive better staffing and process decisions.',
];

export default function OperationsControlTowerPage() {
  const slideFrames = [
    <OPFrame1 key="f1" />,
    <OPFrame2 key="f2" />,
    <OPFrame3 key="f3" />,
    <OPFrame4 key="f4" />,
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
                  Immigration Operations Control Tower
                </h1>
                <p className="text-body-lg text-charcoal-500 mb-4 max-w-lg">
                  Know which files are blocked, who owns the next action, and
                  where capacity is leaking — before clients complain.
                </p>
                <p className="text-body text-charcoal-500 mb-8 max-w-lg">
                  The Control Tower provides an operational view across your
                  firm — monitoring matters, tracking bottlenecks, identifying
                  ownership gaps, and surfacing the data you need to make
                  better staffing and process decisions.
                </p>

                <div className="bg-sand-50 border border-sand-400 rounded-xl p-6 mb-8">
                  <p className="text-body-sm font-medium text-charcoal-500 mb-1">
                    Expected outcome
                  </p>
                  <p className="font-serif text-heading-3 text-charcoal-900">
                    Stop hiring blindly. Identify bottlenecks and release
                    approximately 30–50% more capacity from the same team
                  </p>
                </div>

                <ul className="flex flex-col gap-4 mb-10">
                  {[
                    'Full matter pipeline visibility across all stages',
                    'Team workload and capacity monitoring',
                    'Ageing case detection and bottleneck alerts',
                    'Approved client status updates and operational summaries',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <ChartLineUp
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
