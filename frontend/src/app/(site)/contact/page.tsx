import type { Metadata } from 'next';
import { PageIntro } from '@/app/components/page-intro';

export const metadata: Metadata = { title: '문의' };

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="CONTACT"
        title={
          <>
            함께 만들 수 있는&nbsp;
            <br className="md:hidden" />
            방법을 들려주세요
          </>
        }
        description={
          <>
            기관 협력, 실증사업,&nbsp;
            <br className="md:hidden" />
            제품·미디어·채용 문의를 받습니다.&nbsp;
          </>
        }
      />
      <section className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
        <div className="rounded-3xl bg-[#F2B13E] p-8 md:p-10">
          <h2 className="text-2xl font-extrabold tracking-[-0.05em] text-[#403F43]">문의 채널 준비 중</h2>
          <p className="mt-4 leading-8 text-[#403F43]/80">
            개인정보 수집 항목, 수신 담당자, 회신 절차가 확정된 뒤 안전한 문의 폼 또는 공식 이메일을 연결합니다.
          </p>
        </div>
      </section>
    </>
  );
}
