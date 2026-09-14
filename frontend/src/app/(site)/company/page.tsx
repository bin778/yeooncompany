import type { Metadata } from 'next';
import { PageIntro } from '@/app/components/page-intro';

export const metadata: Metadata = { title: '회사 소개' };

export default function CompanyPage() {
  return <><PageIntro eyebrow="COMPANY" title="자립을 돕는 기술을 만듭니다." description="여온앤컴퍼니는 일상과 경제생활에서 더 많은 선택이 가능하도록, 사람 중심의 디지털 서비스를 설계합니다." /><section className="mx-auto max-w-5xl px-5 py-20 lg:px-8"><h2 className="text-2xl font-extrabold tracking-[-0.05em] text-[#403F43]">이곳에 회사의 시작과 팀의 이야기를 담습니다.</h2><p className="mt-5 max-w-2xl leading-8 text-[#626064]">대표의 문제의식, 회사의 미션, 실제 팀 소개는 공개 범위를 확정한 뒤 추가합니다. 초기에는 확인되지 않은 수치나 연혁을 채우지 않는 것을 원칙으로 합니다.</p></section></>;
}
