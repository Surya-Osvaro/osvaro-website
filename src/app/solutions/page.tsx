import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';
import { siteConfig } from '@/lib/constants';
import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';

export const metadata: Metadata = {
  title: 'Solutions for UK Immigration Firms | Osvaro',
  description: 'AI-powered operating systems built for how immigration firms actually work.',
};

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F4] flex flex-col">
      <Navbar />
      
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full flex-grow">
        <div className="max-w-3xl mb-20">
          <h1 className="font-serif text-5xl md:text-6xl text-[#1A1A1A] mb-6 leading-tight">
            Solutions built for how immigration firms actually work
          </h1>
          <p className="text-xl text-[#6B6B6B] leading-relaxed">
            Standard legal tech is too generic. Immigration software is just a fancy database. We build operational systems that actually do the work—chasing documents, checking compliance, and moving matters forward.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {siteConfig.products.map((product) => (
            <div key={product.slug} className="bg-[#F5F0E8] rounded-2xl p-8 border border-[#E5DFD3] flex flex-col">
              <h2 className="font-serif text-2xl text-[#1A1A1A] mb-2">{product.name}</h2>
              <p className="text-[#6B7F4E] font-medium text-sm mb-6">{product.tagline}</p>
              
              <p className="text-[#6B6B6B] text-sm mb-8 flex-grow">
                {product.description}
              </p>
              
              <div className="bg-[#FAF8F4] p-4 rounded-lg mb-8 border border-[#E5DFD3]/50">
                <span className="block text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider mb-2">The Promise</span>
                <p className="text-[#4A4A4A] text-sm italic">"{product.promise}"</p>
              </div>
              
              <Link
                href={product.href}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#1A1A1A] hover:text-[#6B7F4E] transition-colors mt-auto"
              >
                Explore this solution <ArrowRight className="size-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-[#1A1A1A] rounded-2xl p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl md:text-4xl text-[#FAF8F4] mb-4">
              Not sure where to start?
            </h2>
            <p className="text-[#D1D1D1]">
              Book a workflow diagnostic. We'll map out your current operations and identify the highest-impact areas for automation.
            </p>
          </div>
          <Link
            href="mailto:surya@osvaro.co.uk"
            className="inline-flex shrink-0 items-center gap-2 bg-[#FAF8F4] text-[#1A1A1A] px-8 py-4 rounded-lg font-medium hover:bg-white transition-colors whitespace-nowrap"
          >
            Book a Workflow Diagnostic <ArrowRight weight="bold" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
