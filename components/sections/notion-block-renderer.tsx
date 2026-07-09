import type { NotionBlock } from "@/lib/notion/types";

type NotionBlockRendererProps = {
  blocks: NotionBlock[];
};

/**
 * TODO(docs/PRD.md 7절 "커스텀 블록 렌더러 (MVP 범위)", 9절 "상세 페이지"):
 * paragraph, heading_1~3, image, code, bulleted_list_item, numbered_list_item,
 * quote 블록 타입만 렌더링한다. 그 외 타입은 텍스트로 폴백하거나 무시한다.
 * 이미지 블록에는 노션 캡션을 alt 텍스트로 사용한다(11절 접근성 요구사항).
 * 아래 컨테이너의 Tailwind 유틸리티를 다듬어 본문 타이포그래피 스타일을 완성한다.
 */
export function NotionBlockRenderer({ blocks }: NotionBlockRendererProps) {
  void blocks;

  return (
    <div className="flex flex-col gap-4 text-base leading-relaxed text-foreground">
      {/* TODO: blocks를 순회하며 타입별 JSX(문단/헤딩/이미지/코드/리스트/인용)를 렌더링한다. */}
    </div>
  );
}
