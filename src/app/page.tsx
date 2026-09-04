import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/sections/hero';
import { Problem } from '@/components/sections/problem';
import { ProductsPreview } from '@/components/sections/products-preview';
import { HowItWorks } from '@/components/sections/how-it-works';
import { RoiCalculator } from '@/components/sections/roi-calculator';
import { FAQ } from '@/components/sections/faq';
import { StarterOffer } from '@/components/sections/starter-offer';
import { FinalCTA } from '@/components/sections/final-cta';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Compact, Single-Frame Hero with Background Image & Visible CTA */}
        <Hero />

        {/* Straight to the Pain & Solution Angle */}
        <Problem />

        {/* Product Showcase Previews with Outcrowd macOS Window Sequences */}
        <ProductsPreview />

        {/* Practical 6-Step Implementation Roadmap */}
        <HowItWorks />

        {/* Interactive ROI Cost Calculator (3 Inputs + Visibility of What Firms Lose) */}
        <RoiCalculator />

        {/* FAQs Under How It Works (6 Questions with GDPR & DPA requirements) */}
        <FAQ />

        {/* Transparent Starter Offer (£1k/mo) */}
        <StarterOffer />

        {/* High-Converting Final Diagnostic CTA */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
