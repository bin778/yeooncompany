type PageIntroProps = { eyebrow: string; title: string; description: string };

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="bg-[#FFF9EE] py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <p className="text-sm font-bold tracking-[0.16em] text-[#B87810]">{eyebrow}</p>
        <h1 className="mt-5 text-4xl font-extrabold tracking-[-0.06em] text-[#403F43] sm:text-5xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-[#626064] sm:text-lg">{description}</p>
      </div>
    </section>
  );
}
