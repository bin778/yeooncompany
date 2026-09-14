import type { Metadata } from 'next';
import { PageIntro } from '@/app/components/page-intro';

export const metadata: Metadata = { title: '뉴스' };
const news = [
  [
    '파트너십',
    '한국자폐인사랑협회와 경제적 자기결정권을 위한 디지털 플랫폼 협력',
    'https://www.esgchosun.com/news/articleView.html?idxno=558',
  ],
  [
    '운영 소식',
    '서울시복지재단 자립생활 현장에서 운영 중인 보통의 하루',
    'https://www.ablenews.co.kr/news/articleView.html?idxno=233046',
  ],
  [
    '미디어',
    '발달장애인의 자립을 돕는 AI 앱, 보통의 하루',
    'https://www.goodnews1.com/news/articleView.html?idxno=459140',
  ],
];

export default function NewsPage() {
  return (
    <>
      <PageIntro
        eyebrow="NEWS"
        title="함께 만든 변화의 기록"
        description="협약, 운영 현장, 제품 소식을 통해 여온앤컴퍼니가 만들어 가는 과정을 전합니다."
      />
      <section className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
        <div className="grid gap-4">
          {news.map(([category, title, href]) => (
            <a
              key={href}
              className="group rounded-2xl border border-black/10 p-6 transition hover:border-[#F2B13E] hover:bg-[#FFF9EE]"
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              <p className="text-sm font-bold text-[#B87810]">{category}</p>
              <h2 className="mt-3 text-xl font-extrabold tracking-[-0.04em] text-[#403F43] group-hover:underline">
                {title}
              </h2>
              <p className="mt-3 text-sm text-[#626064]">언론 보도 보기 ↗</p>
            </a>
          ))}
        </div>
        <p className="mt-8 text-sm leading-6 text-[#777579]">
          기사 본문과 이미지는 복제하지 않고, 사용 권한을 확보한 자체 사진·요약문으로 별도 게시합니다.
        </p>
      </section>
    </>
  );
}
