import type { Metadata } from 'next';
import { PageIntro } from '@/app/components/page-intro';

export const metadata: Metadata = { title: '신뢰와 접근성' };
const standards = [
  '자기결정권을 우선하는 경험 설계',
  '당사자·보호자·기관의 목소리를\n반영하는 현장 기반 설계',
  '쉽게 이해하고 사용할 수 있는 접근성',
  '개인정보와 민감한 생활 데이터를\n신중하게 다루는 운영 원칙',
];

export default function TrustPage() {
  return (
    <>
      <PageIntro
        eyebrow="TRUST & ACCESSIBILITY"
        title={
          <>
            기술은 더 쉽게,&nbsp;
            <br className="md:hidden" />
            선택은 더 넓게
          </>
        }
        description={
          <>
            여온앤컴퍼니는 기능을 늘리는 것보다&nbsp;
            <br />
            이용자의 선택과 존엄을
            <br className="md:hidden" />
            지키는 방법을 먼저 고민합니다.
          </>
        }
      />
      <section className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
        <ol className="divide-y divide-black/10 border-y border-black/10">
          {standards.map((standard, index) => (
            <li
              key={standard}
              className="flex gap-4 md:gap-6 py-4 md:py-6 text-lg font-bold tracking-[-0.04em] text-[#403F43] md:text-2xl"
            >
              <span className="text-lg md:text-2xl text-[#B87810]">0{index + 1}</span>
              <span className="whitespace-pre-line md:whitespace-normal">{standard}</span>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
