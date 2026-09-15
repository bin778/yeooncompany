export const siteConfig = {
  name: '여온앤컴퍼니',
  description: '일상에서 도움이 필요한 사람들이 스스로 선택할 수 있도록 돕는 디지털 서비스를 만듭니다.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://yeooncompany.co.kr',
};

export const navigation = [
  { href: '/company/', label: '회사 소개' },
  { href: '/solutions/', label: '솔루션' },
  { href: '/trust/', label: '신뢰와 접근성' },
  { href: '/news/', label: '뉴스' },
  { href: '/partnership/', label: '파트너십' },
  { href: '/contact/', label: '문의' },
] as const;
