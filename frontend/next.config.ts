import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 서버를 상시 운영하지 않는 정적 배포를 기본값으로 둡니다.
  // 문의·CMS가 필요해지면 이 옵션을 제거하고 Amplify의 Next.js SSR로 전환할 수 있습니다.
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
