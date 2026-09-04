'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react';
import { siteConfig } from '@/lib/constants';
import { CRFrame1 } from '@/components/product-frames/case-readiness-frames';
import { SCFrame1 } from '@/components/product-frames/sponsor-compliance-frames';
import { OPFrame1 } from '@/components/product-frames/operations-frames';

const productPreviews = [
  {
    ...siteConfig.products[0],
    component: <CRFrame1 />,
    badge: 'Stage 1 — Matter Preparation',
  },
  {
    ...siteConfig.products[1],
    component: <SCFrame1 />,
    badge: 'Stage 2 — Continuous Compliance',
  },
  {
    ...siteConfig.products[2],
    component: <OPFrame1 />,
    badge: 'Stage 3 — Operational Control',
  },
];

export function ProductsPreview() {
  return (
    <section id="products" className="py-16 lg:py-20 bg-[#FAF8F4] border-b border-[#E8E2D6]">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-12">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#6B7F4E] block mb-2">
            Core Operating System Modules
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] leading-tight mb-3">
            Purpose-built for UK immigration operations
          </h2>
          <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
            Replace fragmented inboxes and manual checklists with structured workflow engines that prepare files, monitor compliance, and surface bottlenecks automatically.
          </p>
        </div>

        <div className="flex flex-col gap-14 lg:gap-20">
          {productPreviews.map((product, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}
              >
                {/* Product Description: 7 Columns for generous readable typography */}
                <div
                  className={`w-full flex flex-col items-start ${
                    isEven ? 'lg:col-span-7' : 'lg:col-span-7 lg:order-2'
                  }`}
                >
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE5D8] text-[11px] font-semibold text-[#6B7F4E] tracking-wider uppercase mb-3">
                    {product.badge}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-[32px] text-[#1A1A1A] leading-tight mb-3">
                    {product.name}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-[#555555] leading-relaxed mb-5 max-w-xl">
                    {product.description}
                  </p>

                  <div className="bg-[#F5F0E8] rounded-xl p-4 sm:p-5 mb-5 border border-[#E0D9CB] w-full max-w-xl">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#6B7F4E] block mb-1">
                      Target Outcome
                    </span>
                    <p className="font-serif text-lg sm:text-xl text-[#1A1A1A]">
                      {product.promise}
                    </p>
                  </div>

                  <Link
                    href={product.href}
                    className="inline-flex items-center gap-2 font-medium text-sm text-[#1A1A1A] hover:text-[#6B7F4E] transition-colors group"
                  >
                    Explore full workflow & interactive demo
                    <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Compact Product Visual Preview: 5 Columns with sleek height cap */}
                <div
                  className={`w-full ${
                    isEven ? 'lg:col-span-5' : 'lg:col-span-5 lg:order-1'
                  }`}
                >
                  <div className="w-full max-h-[360px] sm:max-h-[380px] overflow-hidden rounded-xl border border-[#E0D9CB] shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
                    <div className="transform scale-[0.88] sm:scale-[0.92] origin-top">
                      {product.component}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
