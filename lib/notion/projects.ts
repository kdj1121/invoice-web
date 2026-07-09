import type { Project } from "@/lib/notion/types";

/**
 * TODO(docs/PRD.md 7절 "Projects DB", 11절 "성능/레이트리밋"):
 * getNotionClient()로 `NOTION_PROJECTS_DATABASE_ID`를 쿼리해 게시 상태(Status)가
 * `Published`인 항목만, 정렬 순서(없으면 생성일 역순)로 반환한다.
 */
export async function getProjects(): Promise<Project[]> {
  return [];
}

/**
 * TODO(docs/PRD.md 7절 "게시 상태 처리"):
 * 슬러그로 단일 프로젝트를 조회한다. 상태가 `Draft`이거나 존재하지 않으면
 * null을 반환하고, 호출 측(app/projects/[slug]/page.tsx)에서 notFound()를 호출한다.
 */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  void slug;
  return null;
}
