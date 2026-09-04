'use client';

import * as React from 'react';
import Link from 'next/link';
import { List, X } from '@phosphor-icons/react';
import * as Dialog from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/lib/constants';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="w-full bg-[#FAF8F4] border-b border-[#E8E2D6]/60 sticky top-0 z-50">
      <div className="max-w-[1360px] mx-auto flex h-[76px] items-center justify-between px-6 lg:px-12">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-1.5 group">
          <span className="font-serif text-[26px] font-normal tracking-tight text-[#1A1A1A]">
            Osvaro<span className="text-[#1A1A1A]">.</span>
          </span>
        </Link>

        {/* Center Nav Links - Clean Lexa Style */}
        <nav className="hidden md:flex items-center gap-9">
          {siteConfig.nav.map((item) => {
            const isMailto = item.href.startsWith('mailto:');
            return isMailto ? (
              <a
                key={item.label}
                href={item.href}
                className="text-[13.5px] tracking-wide text-[#333333] transition-colors hover:text-[#1A1A1A]"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="text-[13.5px] tracking-wide text-[#333333] transition-colors hover:text-[#1A1A1A]"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA - Lexa Pill Button */}
        <div className="hidden md:block">
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[42px] items-center justify-center rounded-full bg-[#1A1A1A] px-6 text-[13.5px] font-medium text-[#FAF8F4] transition-all hover:bg-[#2E2E2E] hover:shadow-sm"
          >
            Book a workflow diagnostic
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center md:hidden">
          <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
            <Dialog.Trigger asChild>
              <button
                className="inline-flex size-10 items-center justify-center rounded-full text-[#1A1A1A] hover:bg-[#EDE7DA] transition-colors"
                aria-label="Open menu"
              >
                <List className="size-6" weight="regular" />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" />
              <Dialog.Content className="fixed inset-y-0 right-0 z-50 w-full max-w-xs border-l border-[#E8E2D6] bg-[#FAF8F4] p-6 shadow-2xl transition ease-in-out duration-300">
                <VisuallyHidden>
                  <Dialog.Title>Navigation Menu</Dialog.Title>
                  <Dialog.Description>Navigation links for Osvaro</Dialog.Description>
                </VisuallyHidden>

                <div className="flex items-center justify-between mb-8">
                  <span className="font-serif text-2xl tracking-tight text-[#1A1A1A]">
                    Osvaro.
                  </span>
                  <Dialog.Close asChild>
                    <button
                      className="inline-flex size-9 items-center justify-center rounded-full text-[#1A1A1A] hover:bg-[#EDE7DA] transition-colors"
                      aria-label="Close menu"
                    >
                      <X className="size-5" weight="bold" />
                    </button>
                  </Dialog.Close>
                </div>

                <div className="flex flex-col gap-6">
                  <nav className="flex flex-col gap-4">
                    {siteConfig.nav.map((item) => {
                      const isMailto = item.href.startsWith('mailto:');
                      return isMailto ? (
                        <a
                          key={item.label}
                          href={item.href}
                          className="text-base font-normal text-[#2A2A2A] hover:text-[#1A1A1A] transition-colors"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="text-base font-normal text-[#2A2A2A] hover:text-[#1A1A1A] transition-colors"
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </nav>
                  <div className="mt-4 pt-4 border-t border-[#E8E2D6]">
                    <a
                      href={siteConfig.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 w-full items-center justify-center rounded-full bg-[#1A1A1A] px-5 text-sm font-medium text-[#FAF8F4] hover:bg-[#2E2E2E] transition-colors"
                    >
                      Book a workflow diagnostic
                    </a>
                  </div>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
