import type { Metadata } from 'next';
import Link from 'next/link';
import { PageIntro } from '@/app/components/page-intro';

export const metadata: Metadata = { title: '솔루션' };

export default function SolutionsPage() {
  return (
    <>
      <PageIntro
        eyebrow="SOLUTIONS"
        title={
          <>
            일상과 경제생활의&nbsp;
            <br className="md:hidden" />
            자립을 지원합니다
          </>
        }
        description={
          <>
            여온앤컴퍼니는 당사자의 선택을 넓히고&nbsp;
            <br className="md:hidden" />
            부담을 줄이는 솔루션을 만들고 있습니다.
          </>
        }
      />
      <section className="mx-auto grid max-w-7xl gap-6 px-3 py-20 md:grid-cols-2 lg:px-6">
        <article className="rounded-xl bg-[#F2B13E] p-5 md:p-10">
          <p className="text-sm md:text-base font-bold text-[#403F43]/70">운영 중</p>
          <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold tracking-[-0.06em] text-[#403F43]">보통의 하루</h2>
          <p className="mt-3 text-base lg:text-lg leading-8 text-[#403F43]/85">
            AI 기반 루틴 지원으로 기상, 위생, 복약처럼&nbsp;
            <br />
            필요한 일상을 스스로 이어갈 수 있게 합니다.
          </p>
          <a
            className="mt-6 inline-flex text-sm md:text-base font-bold underline"
            href="https://www.commonday.co.kr/"
            target="_blank"
            rel="noreferrer"
          >
            앱 소개 사이트 보기
          </a>
        </article>
        <article className="rounded-xl bg-[#403F43] p-5 text-white md:p-10">
          <p className="text-sm md:text-base font-bold text-[#F2B13E]">개발·검증 추진 중</p>
          <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold tracking-[-0.06em]">소비·자산보호 플랫폼</h2>
          <p className="mt-3 text-base lg:text-lg leading-8 text-white/75">
            예산 안에서의 안전한 소비 및 내역 확인,&nbsp;
            <br />
            보호자·기관의 모니터링 부담 완화를 위한&nbsp;
            <br className="md:hidden" />
            플랫폼을 준비합니다.
          </p>
          <Link
            className="mt-6 inline-flex text-sm md:text-base font-bold text-[#F2B13E] underline"
            href="/partnership/"
          >
            협력 방향 보기
          </Link>
        </article>
      </section>
    </>
  );
}
