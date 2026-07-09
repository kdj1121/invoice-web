import type { Post } from "@/lib/notion/types";

/**
 * TODO(docs/PRD.md 7절 "Posts DB"):
 * getNotionClient()로 `NOTION_POSTS_DATABASE_ID`를 쿼리해 게시 상태(Status)가
 * `Published`인 글만 날짜 역순으로 반환한다.
 */
export async function getPosts(): Promise<Post[]> {
  return [];
}

/**
 * TODO(docs/PRD.md 7절 "게시 상태 처리"):
 * 슬러그로 단일 글을 조회한다. 상태가 `Draft`이거나 존재하지 않으면 null을
 * 반환하고, 호출 측(app/blog/[slug]/page.tsx)에서 notFound()를 호출한다.
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  void slug;
  return null;
}
