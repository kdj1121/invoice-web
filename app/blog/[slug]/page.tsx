import type { Metadata } from "next";

import { NotionBlockRenderer } from "@/components/sections/notion-block-renderer";

// TODO(docs/PRD.md 7절 "갱신 전략"): ISR 재검증 주기 1시간.
export const revalidate = 3600;

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

/**
 * TODO(docs/PRD.md 10절 "SEO 및 메타데이터 요구사항"):
 * lib/notion/posts.ts의 getPostBySlug(slug)로 조회한 글의 제목/요약을
 * title/description으로, 커버 이미지를 OG 이미지로 사용한다.
 */
export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  void slug;
  return {};
}

/**
 * TODO(docs/PRD.md 5절 "블로그 상세 페이지", 7절 "게시 상태 처리"):
 * - getPostBySlug(slug)로 조회, 없거나 Draft면 next/navigation의 notFound() 호출
 * - 본문은 NotionBlockRenderer로 렌더링
 */
export default async function BlogDetailPage({
  params,
}: BlogDetailPageProps) {
  const { slug } = await params;
  void slug;

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-12">
      {/* TODO: 글 제목/날짜/태그 헤더 영역 */}
      <NotionBlockRenderer blocks={[]} />
    </div>
  );
}
