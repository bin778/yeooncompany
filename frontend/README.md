# 여온앤컴퍼니 홈페이지

여온앤컴퍼니의 회사·솔루션·협력 소식을 소개하는 정적 Next.js 사이트입니다.

## 기술 구성

- Next.js App Router / TypeScript / Tailwind CSS v4
- AWS Amplify Hosting용 정적 배포 (`npm run build` 결과물: `out/`)
- 서버·DB 없이 시작하고, 문의 폼과 뉴스 CMS는 필요 시 별도 API로 확장

## 시작하기

```bash
npm run dev
npm run lint
npm run build
```

## 콘텐츠 구조

- `/` - 회사 메시지와 두 솔루션
- `/company/` - 회사 소개
- `/solutions/` - 보통의 하루 및 소비·자산보호 플랫폼
- `/trust/` - 자기결정권·접근성·신뢰 원칙
- `/news/` - 협약·운영·언론 보도
- `/partnership/` - 기관·기업 협력 제안
- `/contact/` - 문의 안내

## 배포 전 확인

1. `.env.example`을 `.env.local`로 복사하고 실제 도메인을 입력합니다.
2. 회사 정보와 공식 연락처 표기값을 확정합니다.
3. `public/images/`에 사용 권한이 확보된 로고·제품 화면·협약식 사진만 넣습니다.
4. AWS Amplify에 GitHub 저장소를 연결하고 Build command는 `npm run build`, output directory는 `out`으로 설정합니다.
