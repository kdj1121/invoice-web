# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # 개발 서버 (Turbopack)
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버 실행
npm run lint     # ESLint
```

No test runner is configured in this repo.

To add a new shadcn/ui primitive:

```bash
npx shadcn@latest add [컴포넌트명]
```

To check what's actually available/generated (don't trust older shadcn knowledge — see below):

```bash
npx shadcn@latest search @shadcn
npx shadcn@latest view @shadcn/<component>-example
```

## Architecture

Next.js 16 App Router + TypeScript + Tailwind CSS v4 + shadcn/ui (`base-nova` style) + lucide-react.

### ⚠️ This is not the Next.js / shadcn you know

- Next.js 16 has breaking API/convention changes vs. training data. Read `node_modules/next/dist/docs/` before writing Next.js code (see `AGENTS.md`).
- This project's shadcn/ui style (`base-nova`, configured in `components.json`) is built on **`@base-ui/react`, not Radix**. Standard Radix-era shadcn knowledge does not apply:
  - Composition uses base-ui's `render` prop instead of Radix's `asChild`. Pattern: pass a **childless element** to `render` (e.g. `<Button variant="outline" />`), and put the actual visible content as children of the outer component (e.g. `<DialogTrigger render={<Button ... />}>실제 내용</DialogTrigger>`).
  - The `form` component is a stub in this shadcn version; use **`field`** instead (`Field`, `FieldLabel`, `FieldError`, `FieldGroup`, RHF-agnostic). Install via `npx shadcn add field`.
  - `Select` needs an `items` prop (value→label array) on `Select` itself for the closed-state label to render — children alone aren't enough.
  - When unsure about a component's API, verify with `npx shadcn@latest view @shadcn/<component>-example` rather than assuming.
- This repo's ESLint config flags the common next-themes "mounted" pattern (`useState` + `useEffect(() => setMounted(true))`) via `react-hooks/set-state-in-effect`. Use `useSyncExternalStore` with a no-op subscribe instead to read a server/client snapshot without triggering the rule (see `components/layout/theme-toggle.tsx`).

### Component layering

UI is organized into layers, composed bottom-up:

```
config/
  site.ts               사이트 메타·네비게이션 단일 소스 (헤더/푸터/모바일 네비가 참조)

components/
  ui/                   L1. shadcn CLI로 설치되는 원자적 프리미티브. 직접 수정하지 않는다.
  layout/               L2. primitive를 조합한 레이아웃 골격 (site-header, site-footer, mobile-nav, theme-provider, theme-toggle)
  sections/             L3. 랜딩 페이지 섹션 블록 (hero, features, cta, contact-form)

app/
  layout.tsx            ThemeProvider + SiteHeader + SiteFooter + Toaster 조립
  page.tsx              랜딩 페이지 (Hero + Features + Cta)
  showcase/page.tsx      설치된 L1 컴포넌트를 탭으로 분류해 보여주는 쇼케이스
```

- `components/ui/*` files are shadcn-CLI-managed primitives — treat as generated, don't hand-edit; re-run the CLI instead.
- `config/site.ts` is the single source of truth for site metadata/nav, consumed by the header, footer, and mobile nav.
- Tailwind v4 is configured CSS-first in `app/globals.css` (no `tailwind.config.*`); design tokens live there as CSS variables.
- Path aliases (see `components.json`): `@/components`, `@/components/ui`, `@/lib`, `@/hooks`.
