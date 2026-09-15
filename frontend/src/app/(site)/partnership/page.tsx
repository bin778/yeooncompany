import type { Metadata } from 'next';
import Link from 'next/link';
import { PageIntro } from '@/app/components/page-intro';

export const metadata: Metadata = { title: '파트너십' };

const partnerGroups = [
  {
    title: '복지·공공기관',
    description: (
      <>
        현장의 일상과 지원 체계를 이해하며,&nbsp;
        <br className="md:hidden" />
        실제 삶에 닿을 수 있도록 함께 고민합니다.
      </>
    ),
  },
  {
    title: '금융·카드·신탁 파트너',
    description: (
      <>
        안전한 소비와 자산 관리에 필요한&nbsp;
        <br className="md:hidden" />
        기준과 구조를 함께 설계합니다.
      </>
    ),
  },
  {
    title: '당사자·보호자 단체',
    description: (
      <>
        당사자와 가족의 경험을 듣고,&nbsp;
        <br className="md:hidden" />더 이해할 수 있도록 발전시킵니다.
      </>
    ),
  },
];

export default function PartnershipPage() {
  return (
    <>
      <PageIntro
        eyebrow="PARTNERSHIP"
        title={
          <>
            현장과 기술이 만날 때&nbsp;
            <br className="md:hidden" />
            자립은 이어집니다
          </>
        }
        description={
          <>
            당사자·보호자·기관의 경험을 연결해&nbsp;
            <br className="md:hidden" />
            실제 생활에서 작동하는 자립 지원 모델을&nbsp;
            <br className="md:hidden" />
            만들고자 합니다.
          </>
        }
      />
      <section className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-3">
          {partnerGroups.map(partner => (
            <article key={partner.title} className="rounded-2xl bg-[#F2F1EF] p-6">
              <h2 className="text-xl font-extrabold tracking-[-0.04em] text-[#403F43]">{partner.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#626064]">{partner.description}</p>
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
