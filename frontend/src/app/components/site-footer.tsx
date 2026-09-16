import Link from 'next/link';

import { navigation, siteConfig } from '@/app/lib/site';

export function SiteFooter() {
  return (
    <footer className="bg-[#403F43] text-white">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-12">
        <p className="text-lg font-extrabold tracking-[-0.04em]">{siteConfig.name}</p>
        <p className="mt-3 text-sm leading-6 text-white/70">
          일상에서 도움이 필요한 사람들이 스스로&nbsp;
          <br className="md:hidden" />
          선택할 수 있도록 돕는 디지털 서비스를 만듭니다.
        </p>
        <nav className="mt-8 flex flex-wrap gap-x-5 gap-y-3" aria-label="하단 메뉴">
          {navigation.map(item => (
            <Link key={item.href} href={item.href} className="text-sm text-white/80 transition hover:text-[#F2B13E]">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-10 border-t border-white/15 pt-5 text-xs leading-5 text-white/55">
          <p className="mt-1">© 2025 여온앤컴퍼니. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
