# invoice-web

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + shadcn/ui(`base-nova`, `@base-ui/react` 기반) + lucide-react 기반 웹 프로젝트입니다.

Notion을 CMS로 활용해 프로젝트/블로그 콘텐츠를 관리하는 개발자 포트폴리오 사이트로 개발 중이며, 현재는 shadcn/ui 스타터킷 기반 골격 위에 기능을 얹는 단계입니다. 제품 요구사항은 [`docs/PRD.md`](./docs/PRD.md)를, PRD 작성에 사용한 메타 프롬프트는 [`docs/PRD_PROMPT.md`](./docs/PRD_PROMPT.md)를 참고하세요.

## 시작하기

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000)에서 랜딩 페이지를, [http://localhost:3000/showcase](http://localhost:3000/showcase)에서 설치된 UI 컴포넌트를 카테고리별로 확인할 수 있습니다.

## 기술 스택

- **Next.js 16** (App Router)
- **TypeScript** (strict)
- **Tailwind CSS v4** (CSS 변수 기반 디자인 토큰, `app/globals.css`에서 CSS-first로 설정)
- **shadcn/ui** — `base-nova` 스타일, Radix 대신 `@base-ui/react` 프리미티브 기반
- **lucide-react** — 아이콘
- **next-themes** — 다크모드 토글 (`.dark` 클래스 방식)
- **react-hook-form + zod + @hookform/resolvers** — 폼 상태 관리와 스키마 검증 (직접 구현 대신 검증된 라이브러리 사용)

## 폴더 구조 (컴포넌트 계층)

UI를 4개 계층으로 나눠 관리합니다. 아래에서 위로 조합됩니다.

```
config/
  site.ts               사이트 메타·네비게이션 단일 소스 (헤더/푸터/모바일 네비가 참조)

components/
  ui/                   L1. shadcn CLI로 설치되는 원자적 프리미티브. 직접 수정하지 않는다.
    button.tsx, card.tsx, input.tsx, field.tsx, dialog.tsx, ...

  layout/               L2. primitive를 조합한 레이아웃 골격
    site-header.tsx      상단 헤더 (로고 + 네비 + 테마 토글 + 모바일 메뉴)
    site-footer.tsx      하단 푸터
    mobile-nav.tsx        Sheet 기반 모바일 네비게이션
    theme-provider.tsx    next-themes 래퍼
    theme-toggle.tsx      라이트/다크/시스템 전환 드롭다운

  sections/             L3. 랜딩 페이지 섹션 블록
    hero.tsx, features.tsx, cta.tsx
    contact-form.tsx     react-hook-form + zod 검증 폼 예제 (레퍼런스용)

app/
  layout.tsx            ThemeProvider + SiteHeader + SiteFooter + Toaster 조립
  page.tsx              랜딩 페이지 (Hero + Features + Cta)
  showcase/page.tsx      설치된 L1 컴포넌트를 탭으로 분류해 보여주는 쇼케이스
```

## 컴포넌트 추가하기

L1 프리미티브가 더 필요하면 shadcn CLI로 추가합니다.

```bash
npx shadcn@latest add [컴포넌트명]
```

사용 가능한 컴포넌트 목록은 다음 명령으로 확인할 수 있습니다.

```bash
npx shadcn@latest search @shadcn
```

> 참고: 이 프로젝트는 `base-nova` 스타일이라 컴포넌트가 Radix가 아닌 `@base-ui/react` 기반으로 설치됩니다. 일부 컴포넌트(예: `form`)는 신버전 shadcn에서 `field`로 대체되었으니, CLI 결과로 실제 생성된 파일을 확인하세요.

## Next.js 16 주의사항

이 프로젝트는 최신 Next.js 버전을 사용합니다. AI 에이전트로 작업할 경우 코드 작성 전 `node_modules/next/dist/docs/`의 문서를 참고하세요 (`AGENTS.md` 참고).

## 스크립트

```bash
npm run dev      # 개발 서버
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버 실행
npm run lint     # ESLint
```
