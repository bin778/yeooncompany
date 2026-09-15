import type { ReactNode } from 'react';
import Link from 'next/link';

const principles: [string, ReactNode][] = [
  ['자기결정권', '도움이 필요한 순간에도,\n이용자가 직접 선택하고\n실행할 수 있도록 설계합니다.'],
  ['안전과 신뢰', '일상과 소비 데이터가 다뤄지는 만큼,\n신뢰할 수 있는 운영 기준을 만듭니다.'],
  ['접근 가능한 기술', '당사자·보호자·기관 모두가 이해하고\n사용할 수 있는 경험을 고민합니다.'],
];

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden bg-[#F2B13E]">
        <div className="mx-auto grid max-w-7xl items-end px-5 py-16 sm:py-24 lg:grid-cols-[1.3fr_0.7fr] lg:px-8">
          <div className="pb-2">
            <p className="text-sm md:text-base font-bold tracking-[0.16em] text-[#403F43]/70">YEOON & COMPANY</p>
            <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[1.08] tracking-[-0.075em] text-[#403F43] md:text-6xl lg:text-7xl">
              스스로 선택하는
              <br />
              하루가 되도록
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-[#403F43]/85 md:text-lg">
              여온앤컴퍼니는 누구나 안전한 일상을 만들고,
              <br />
              스스로 선택할 수 있도록 돕는 기술을 만듭니다.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/solutions/"
                className="rounded-full bg-[#403F43] px-6 py-3.5 text-sm font-bold text-white transition md:text-base hover:bg-[#29282B]"
              >
                솔루션 알아보기
              </Link>
              <Link
                href="/partnership/"
                className="rounded-full border border-[#403F43]/30 px-6 py-3.5 text-sm font-bold text-[#403F43] transition md:text-base hover:bg-white/30"
              >
                협력 제안하기
              </Link>
            </div>
          </div>
          <div className="mt-14 hidden justify-self-end lg:block" aria-hidden>
            <div className="grid h-64 w-64 place-items-center rounded-full border-[18px] border-[#403F43]/15 bg-[#FFF9EE] text-center text-3xl font-extrabold leading-tight tracking-[-0.06em] text-[#403F43]">
              일상의 자립
              <br />
              경제생활의 자립
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-sm md:text-base font-bold tracking-[0.16em] text-[#B87810]">OUR WHY</p>
          <h2 className="mt-5 max-w-4xl text-3xl font-extrabold leading-tight tracking-[-0.06em] text-[#403F43] sm:text-5xl">
            자립은 혼자 남겨두는 일이 아니라&nbsp;
            <br className="hidden md:block" />
            스스로 선택할 수&nbsp;
            <br className="md:hidden" />
            있도록 돕는 일입니다
          </h2>
        </div>
      </section>

      <section className="bg-[#F2F1EF] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm md:text-base font-bold tracking-[0.16em] text-[#B87810]">SOLUTIONS</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.06em] text-[#403F43] sm:text-4xl">
                자립을 위한 두 가지 기술
              </h2>
            </div>
            <Link
              href="/solutions/"
              className="hidden text-sm md:text-base font-bold text-[#403F43] underline sm:block"
            >
              전체 보기
            </Link>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <article className="rounded-3xl bg-white p-8 sm:p-10">
              <p className="text-sm md:text-base font-bold text-[#B87810]">운영 중</p>
              <h3 className="mt-2 text-3xl font-extrabold tracking-[-0.06em] text-[#403F43]">보통의 하루</h3>
              <p className="mt-2 max-w-md leading-7 text-[#626064]">
                AI 기반 루틴 지원으로,
                <br />
                일상생활의 작은 실천을&nbsp;
                <br className="md:hidden" />
                스스로 이어갈 수 있도록 돕습니다.
              </p>
            </article>
            <article className="rounded-3xl bg-[#403F43] p-8 text-white sm:p-10">
              <p className="text-sm md:text-base font-bold text-[#F2B13E]">개발·검증 추진 중</p>
              <h3 className="mt-2 text-3xl font-extrabold tracking-[-0.06em]">소비·자산보호 플랫폼</h3>
              <p className="mt-2 max-w-md leading-7 text-white/70">
                안전한 소비와 경제적 자기결정권을
                <br />
                지원하는 디지털 소비관리 플랫폼을 준비합니다.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-sm md:text-base font-bold tracking-[0.16em] text-[#B87810]">PRINCIPLES</p>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {principles.map(([title, description], index) => (
              <article key={title} className="border-t-2 border-[#403F43] py-6">
                <p className="text-sm text-xl md:text-2xl font-bold text-[#B87810]">0{index + 1}</p>
                <h3 className="mt-2 text-xl md:text-2xl font-extrabold tracking-[-0.05em] text-[#403F43]">{title}</h3>
                <p className="mt-2 leading-7 whitespace-pre-line text-[#626064]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FFF9EE] py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
          <p className="text-sm md:text-base font-bold tracking-[0.16em] text-[#B87810]">PARTNERSHIP</p>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-[-0.06em] text-[#403F43] md:text-5xl">
            자립생활의 다음 장면을
            <br />
            함께 만들어요
          </h2>
          <Link
            href="/contact/"
            className="mt-9 inline-flex rounded-full bg-[#403F43] px-6 py-3.5 text-sm font-bold text-white transition md:text-base hover:bg-[#29282B]"
          >
            협력 문의하기
          </Link>
        </div>
      </section>
    </>
  );
}
