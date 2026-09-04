import Link from 'next/link';
import { LinkedinLogo, LockSimple, ShieldCheck, Buildings, Scales } from '@phosphor-icons/react/dist/ssr';
import { siteConfig } from '@/lib/constants';

const footerLinks = {
  products: [
    { label: 'Case Readiness Engine', href: '/products/case-readiness-engine' },
    { label: 'Sponsor Compliance', href: '/products/sponsor-compliance' },
    { label: 'Operations Control Tower', href: '/products/operations-control-tower' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: 'mailto:surya@osvaro.co.uk' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
};

const assuranceBoxes = [
  {
    title: 'Data Security',
    description:
      'All client data encrypted at rest and in transit. No shared environments. Client data is never used to train AI models.',
    icon: LockSimple,
    badge: 'AES-256 / TLS 1.3',
  },
  {
    title: 'UK GDPR',
    description:
      'Osvaro operates under a full Data Processing Agreement. A signed DPA is required before any client data is processed.',
    icon: ShieldCheck,
    badge: 'DPA Required',
  },
  {
    title: 'Business Continuity',
    description:
      'Every system built on documented, industry-standard infrastructure. Architecture fully transferable — your team owns the workflow documentation from day one.',
    icon: Buildings,
    badge: '100% Client Owned',
  },
  {
    title: 'Decision Support Only',
    description:
      'Osvaro outputs are operational tools for review by qualified solicitors. All legal determinations remain with your team. We do not provide immigration or legal advice.',
    icon: Scales,
    badge: 'Human in the Loop',
  },
];

export function Footer() {
  return (
    <footer className="bg-[#14181B] text-[#FAF8F4] border-t border-white/10 pt-10 sm:pt-14 pb-6">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
        {/* Top Section: Navigation Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="inline-block mb-3">
              <span className="font-serif text-2xl tracking-tight text-[#FAF8F4]">
                Osvaro.
              </span>
            </Link>
            <p className="text-[#A7A197] text-xs sm:text-[13px] leading-relaxed max-w-sm mb-4 font-sans">
              AI-powered operating systems for UK Immigration law firms. We build and manage workflows that collect evidence, maintain compliance, and surface operational bottlenecks.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-xs sm:text-sm font-medium text-[#FAF8F4] hover:text-[#A3BA7B] transition-colors"
            >
              {siteConfig.email}
            </a>
          </div>

          {/* Products Col */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-semibold uppercase tracking-widest text-[#A3BA7B] mb-3.5">
              Products
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.products.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-[13px] text-[#A7A197] hover:text-[#FAF8F4] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Col */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-semibold uppercase tracking-widest text-[#A3BA7B] mb-3.5">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.company.map((item) => {
                const isMailto = item.href.startsWith('mailto:');
                return (
                  <li key={item.label}>
                    {isMailto ? (
                      <a
                        href={item.href}
                        className="text-xs sm:text-[13px] text-[#A7A197] hover:text-[#FAF8F4] transition-colors"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-xs sm:text-[13px] text-[#A7A197] hover:text-[#FAF8F4] transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Legal Col */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-semibold uppercase tracking-widest text-[#A3BA7B] mb-3.5">
              Legal & Governance
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.legal.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-[13px] text-[#A7A197] hover:text-[#FAF8F4] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Middle Section: 4-Column Boxed Governance & Security Cards (Lexa Divider Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10 border-b border-white/10 py-8 lg:py-10">
          {assuranceBoxes.map((box, idx) => {
            const Icon = box.icon;
            return (
              <div
                key={idx}
                className="flex flex-col justify-between p-4 sm:p-5 first:pl-0 last:pr-0 lg:px-6"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="font-serif text-base text-[#FAF8F4] font-medium">
                      {box.title}
                    </span>
                    <Icon className="size-4 text-[#A3BA7B]" weight="regular" />
                  </div>
                  <p className="text-xs text-[#A7A197] leading-relaxed mb-4 font-sans">
                    {box.description}
                  </p>
                </div>
                <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-wider font-semibold text-[#A3BA7B]">
                    {box.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Bar: Clean Copyright + LinkedIn Button */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-[#7B756C]">
            © {new Date().getFullYear()} Osvaro Ltd. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/osvaro/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-8 items-center justify-center rounded-full bg-white/10 text-[#FAF8F4] hover:bg-[#A3BA7B] hover:text-[#14181B] transition-all"
              aria-label="Osvaro LinkedIn"
            >
              <LinkedinLogo className="size-3.5" weight="fill" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
