/**
 * 노션 CMS 연동 관련 타입 정의 스텁.
 *
 * TODO(docs/PRD.md 7절 "노션 연동 설계"): 실제 Notion API 응답을 매핑하며
 * 아래 필드/타입을 확정한다. 현재는 PRD의 DB 스키마 표를 기준으로 한 가정치다.
 */

/** Notion "Projects" DB 한 항목을 도메인 모델로 매핑한 타입. */
export type Project = {
  /** URL 경로(`/projects/[slug]`)에 사용되는 고유 슬러그 */
  slug: string;
  title: string;
  /** 카드/메타 description에 사용되는 요약 */
  summary: string;
  /** 예: "2024.03 - 2024.06" */
  period: string;
  role: string;
  /** multi-select 속성 매핑 */
  techStack: string[];
  thumbnailUrl: string | null;
  link: string | null;
};

/** Notion "Posts" DB 한 항목을 도메인 모델로 매핑한 타입. */
export type Post = {
  /** URL 경로(`/blog/[slug]`)에 사용되는 고유 슬러그 */
  slug: string;
  title: string;
  summary: string;
  /** 목록 정렬 기준(날짜 역순) */
  publishedAt: string;
  tags: string[];
  coverImageUrl: string | null;
};

/**
 * 노션 페이지 본문 블록 스텁 타입.
 *
 * TODO(docs/PRD.md 7절 "커스텀 블록 렌더러 (MVP 범위)"):
 * paragraph, heading_1~3, image, code, bulleted_list_item, numbered_list_item,
 * quote만 지원한다. 그 외 타입은 텍스트 폴백 또는 무시 처리한다.
 * 실제 Notion API의 BlockObjectResponse 타입으로 교체될 예정이다.
 */
export type NotionBlock = {
  id: string;
  type:
    | "paragraph"
    | "heading_1"
    | "heading_2"
    | "heading_3"
    | "image"
    | "code"
    | "bulleted_list_item"
    | "numbered_list_item"
    | "quote";
  // TODO: 블록 타입별 실제 페이로드(rich_text, caption, language 등)를 정의한다.
  [key: string]: unknown;
};
