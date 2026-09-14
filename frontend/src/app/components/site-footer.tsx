import Link from 'next/link';

import { navigation, siteConfig } from '@/app/lib/site';

export function SiteFooter() {
  return (
    <footer className="bg-[#403F43] text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <p className="text-lg font-extrabold tracking-[-0.04em]">{siteConfig.name}</p>
        <p className="mt-3 max-w-md text-sm leading-6 text-white/70">{siteConfig.description}</p>
        <nav className="mt-8 flex flex-wrap gap-x-5 gap-y-3" aria-label="하단 메뉴">
          {navigation.map(item => <Link key={item.href} href={item.href} className="text-sm text-white/80 transition hover:text-[#F2B13E]">{item.label}</Link>)}
        </nav>
        <div className="mt-10 border-t border-white/15 pt-5 text-xs leading-5 text-white/55">
          <p>회사 정보와 공식 연락처는 오픈 전 최종 확인 후 기재합니다.</p>
          <p className="mt-1">© {new Date().getFullYear()} 여온앤컴퍼니. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
