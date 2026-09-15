import type { ReactNode } from 'react';

type PageIntroProps = { eyebrow: string; title: ReactNode; description: ReactNode };

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="bg-[#FFF9EE] py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <p className="text-sm md:text-base font-bold tracking-[0.16em] text-[#B87810]">{eyebrow}</p>
        <h1 className="mt-5 text-4xl font-extrabold tracking-[-0.06em] text-[#403F43] lg:text-5xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[#626064] lg:text-lg">{description}</p>
      </div>
    </section>
  );
}
