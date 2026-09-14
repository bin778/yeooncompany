import type { Metadata } from 'next';
import Link from 'next/link';
import { PageIntro } from '@/app/components/page-intro';

export const metadata: Metadata = { title: '파트너십' };

export default function PartnershipPage() {
  return (
    <>
      <PageIntro
        eyebrow="PARTNERSHIP"
        title="현장과 기술이 만날 때, 자립은 이어집니다"
        description="당사자·보호자·기관·기업의 경험을 연결해 실제 생활에서 작동하는 자립 지원 모델을 만들고자 합니다."
      />
      <section className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-3">
          {['복지·공공기관', '금융·카드·신탁 파트너', '당사자·보호자 단체'].map(partner => (
            <article key={partner} className="rounded-2xl bg-[#F2F1EF] p-6">
              <h2 className="text-xl font-extrabold tracking-[-0.04em] text-[#403F43]">{partner}</h2>
              <p className="mt-3 text-sm leading-6 text-[#626064]">
                현장 의견과 운영 경험을 바탕으로 서비스의 실효성을 함께 검토합니다.
              </p>
            </article>
          ))}
        </div>
        <Link
          href="/contact/"
          className="mt-10 inline-flex rounded-full bg-[#403F43] px-6 py-3.5 text-sm font-bold text-white"
        >
          협력 문의하기
        </Link>
      </section>
    </>
  );
}
