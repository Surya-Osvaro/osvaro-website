import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';
import { EnvelopeSimple, ArrowRight } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Osvaro',
  description: "Let's talk about your workflow.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F4] flex flex-col">
      <Navbar />
      
      <section className="pt-32 pb-24 px-6 md:px-12 flex-grow flex items-center justify-center">
        <div className="max-w-2xl w-full text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-[#1A1A1A] mb-6">
            Let's talk about your workflow
          </h1>
          <p className="text-xl text-[#6B6B6B] mb-12">
            Whether you're managing 50 or 500 matters a year, we'll help you find the operational friction worth solving first.
          </p>
          
          <div className="bg-[#F5F0E8] p-10 rounded-2xl border border-[#E5DFD3] max-w-md mx-auto mb-8 shadow-sm">
            <div className="w-16 h-16 bg-[#FAF8F4] rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-[#E5DFD3]">
              <EnvelopeSimple className="size-8 text-[#6B7F4E]" weight="duotone" />
            </div>
            
            <a 
              href="mailto:surya@osvaro.co.uk"
              className="text-2xl font-medium text-[#1A1A1A] hover:text-[#6B7F4E] transition-colors block mb-8"
            >
              surya@osvaro.co.uk
            </a>
            
            <Link
              href="mailto:surya@osvaro.co.uk"
              className="inline-flex w-full items-center justify-center gap-2 bg-[#1A1A1A] text-[#FAF8F4] px-6 py-4 rounded-lg font-medium hover:bg-black transition-colors"
            >
              Book a Workflow Diagnostic <ArrowRight weight="bold" />
            </Link>
          </div>
          
          <p className="text-sm text-[#8C8C8C] font-medium">
            Note: Engagements start from £1k/month
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
