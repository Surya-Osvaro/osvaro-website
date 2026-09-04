import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';
import { ArrowRight, Eye, Brain, Handshake } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Osvaro',
  description: 'Osvaro builds AI-powered operating systems for UK Immigration firms.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F4] flex flex-col">
      <Navbar />
      
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto w-full flex-grow">
        <h1 className="font-serif text-5xl md:text-6xl text-[#1A1A1A] mb-12">About Osvaro</h1>
        
        <div className="prose prose-lg max-w-3xl mb-24">
          <p className="text-xl text-[#4A4A4A] leading-relaxed mb-6 font-medium">
            Osvaro was built with a simple conviction: UK immigration firms deserve better operational infrastructure.
          </p>
          <p className="text-[#6B6B6B] leading-relaxed mb-6">
            Most firms are stuck between outdated case management systems and manual processes. They rely heavily on spreadsheets, endless email chains, and administrative heavy lifting to push matters forward. This creates operational friction that limits scale and eats into margins.
          </p>
          <p className="text-[#6B6B6B] leading-relaxed">
            Osvaro bridges this gap with AI-powered operating systems tailored to immigration workflows. We help immigration firms turn high-volume, repetitive casework into controlled, measurable, continuously improving operations.
          </p>
        </div>

        <div className="mb-24">
          <h2 className="font-serif text-3xl text-[#1A1A1A] mb-10">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F5F0E8] p-8 rounded-xl border border-[#E5DFD3]">
              <Eye className="size-8 text-[#6B7F4E] mb-6" weight="duotone" />
              <h3 className="font-serif text-2xl text-[#1A1A1A] mb-3">Operational Clarity</h3>
              <p className="text-[#6B6B6B] text-sm leading-relaxed">
                Every workflow should be visible, measurable, and improvable. We build systems that bring order to chaos.
              </p>
            </div>
            
            <div className="bg-[#F5F0E8] p-8 rounded-xl border border-[#E5DFD3]">
              <Brain className="size-8 text-[#6B7F4E] mb-6" weight="duotone" />
              <h3 className="font-serif text-2xl text-[#1A1A1A] mb-3">Human Judgment First</h3>
              <p className="text-[#6B6B6B] text-sm leading-relaxed">
                AI handles the operational friction. Legal decisions remain exactly where they belong: with qualified professionals.
              </p>
            </div>
            
            <div className="bg-[#F5F0E8] p-8 rounded-xl border border-[#E5DFD3]">
              <Handshake className="size-8 text-[#6B7F4E] mb-6" weight="duotone" />
              <h3 className="font-serif text-2xl text-[#1A1A1A] mb-3">Continuous Partnership</h3>
              <p className="text-[#6B6B6B] text-sm leading-relaxed">
                We don't install and disappear. We maintain, optimise, and evolve your systems alongside your firm.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#1A1A1A] rounded-2xl p-12 text-center text-[#FAF8F4]">
          <h2 className="font-serif text-4xl mb-6">Ready to optimise your operations?</h2>
          <p className="text-[#D1D1D1] mb-8 max-w-lg mx-auto">
            Discover how Osvaro can help your firm scale efficiently with purpose-built AI workflows.
          </p>
          <Link
            href="mailto:surya@osvaro.co.uk"
            className="inline-flex items-center gap-2 bg-[#FAF8F4] text-[#1A1A1A] px-6 py-3 rounded-lg font-medium hover:bg-white transition-colors"
          >
            Book a Workflow Diagnostic <ArrowRight weight="bold" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
