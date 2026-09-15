import type { Metadata } from 'next';
import { PageIntro } from '@/app/components/page-intro';

export const metadata: Metadata = { title: '회사 소개' };

export default function CompanyPage() {
  return (
    <>
      <PageIntro
        eyebrow="COMPANY"
        title={
          <>
            스스로 일어설 수&nbsp;
            <br className="md:hidden" />
            있도록 합니다
          </>
        }
        description={
          <>
            여온앤컴퍼니는 일상과 경제생활에서&nbsp;
            <br className="md:hidden" />
            더 많은 선택이 가능하도록,&nbsp;
            <br className="md:hidden" />
            사람 중심의 디지털 서비스를 설계합니다.
          </>
        }
      />
      <section className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-[-0.05em] text-[#403F43]">
          누구나 안전한 일상을&nbsp;
          <br className="md:hidden" />
          만들 수 있도록
        </h2>

        <p className="mt-5 max-w-3xl text-base leading-8 text-[#626064] md:text-lg">
          여온앤컴퍼니는 도움을 필요로 하는 사람들이&nbsp;
          <br className="md:hidden" />
          자신의 속도로 삶을 설계해&nbsp;
          <br className="md:hidden" />
          갈 수 있도록 돕는 기술을 만듭니다.
          <br />
          <br />
          우리는 누군가를 대신해 결정하는 기술보다,&nbsp;
          <br className="md:hidden" />
          필요한 순간에 이해하기 쉬운 도움을 건네고,&nbsp;
          <br />
          스스로 선택을 이어 갈 수 있도록 합니다.
          <br />
          보통의 하루를 통해 일상의 루틴을 함께&nbsp;
          <br className="md:hidden" />
          풀어가고 앞으로는 안전한 소비와 자산 관리의
          <br />
          영역에서도 더 단단하게 지원하고자 합니다.
        </p>
      </section>
    </>
  );
}
