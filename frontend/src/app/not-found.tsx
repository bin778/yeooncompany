import Link from 'next/link';

export default function NotFound() {
  return <section className="grid min-h-[60vh] place-items-center bg-[#FFF9EE] px-5 text-center"><div><p className="text-sm font-bold tracking-[0.16em] text-[#B87810]">404</p><h1 className="mt-4 text-3xl font-extrabold tracking-[-0.06em] text-[#403F43]">페이지를 찾을 수 없습니다.</h1><Link href="/" className="mt-8 inline-flex rounded-full bg-[#403F43] px-6 py-3.5 text-sm font-bold text-white">홈으로 돌아가기</Link></div></section>;
}
