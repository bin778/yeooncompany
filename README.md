# 여온앤컴퍼니

여온앤컴퍼니의 제품·회사 소개 사이트와 향후 백엔드를 함께 관리하는 저장소입니다.

```text
yeooncompany/
├── frontend/    # Next.js 회사 소개 사이트
└── backend/     # 추후 문의·뉴스 CMS·외부 연동 API를 추가할 위치
```

## 프론트엔드 실행

```bash
cd frontend
npm run dev
```

AWS Amplify를 연결할 때 앱의 루트 디렉터리는 `frontend`, 빌드 명령은 `npm run build`, 배포 디렉터리는 `out`으로 설정합니다.
