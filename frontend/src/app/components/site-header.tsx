'use client';

import Link from 'next/link';
import { useState } from 'react';

import { navigation, siteConfig } from '@/app/lib/site';

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        <Link
          href="/"
          className="text-lg md:text-xl font-extrabold tracking-[-0.04em] text-[#403F43]"
          onClick={() => setIsOpen(false)}
        >
          {siteConfig.name}
        </Link>
        <nav className="hidden items-center gap-12 lg:flex" aria-label="주요 메뉴">
          {navigation.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg font-bold text-[#403F43] transition hover:text-[#B87810]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center lg:hidden"
          aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(open => !open)}
        >
          <span className="text-2xl leading-none text-[#403F43]" aria-hidden>
            {isOpen ? '×' : '☰'}
          </span>
        </button>
      </div>
      {isOpen ? (
        <nav className="border-t border-black/10 bg-white px-5 py-4 lg:hidden" aria-label="모바일 주요 메뉴">
          <div className="mx-auto grid max-w-7xl gap-1">
            {navigation.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-4 py-3 text-base font-semibold text-[#403F43] hover:bg-[#FFF1CB]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
