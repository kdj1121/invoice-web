/**
 * 사이트 전역 설정 — 헤더/푸터/모바일 네비게이션이 공통으로 참조하는 단일 소스.
 * 네비게이션 항목을 추가/삭제할 때 이 파일만 수정하면 된다.
 */
export const siteConfig = {
  name: "Starter Kit",
  description:
    "Next.js 16 + TypeScript + Tailwind CSS v4 + shadcn/ui 기반 모던 웹 스타터킷",
  url: "https://example.com",
} as const;

export type NavItem = {
  title: string;
  href: string;
};

export const navItems: NavItem[] = [
  { title: "홈", href: "/" },
  { title: "컴포넌트", href: "/showcase" },
];
