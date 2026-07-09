/**
 * 노션 API 클라이언트 초기화 스텁.
 *
 * TODO(docs/PRD.md 12절 "기술 스택 및 아키텍처 정합성"):
 * 신규 의존성 `@notionhq/client`를 설치한 뒤(현재 미설치 상태) 아래 주석을
 * 실제 구현으로 교체한다. 서버 컴포넌트에서만 호출되어야 하며, 토큰은
 * `NOTION_TOKEN` 환경변수(.env.local / 배포 플랫폼 환경변수)로 관리한다.
 *
 * ```ts
 * import { Client } from "@notionhq/client";
 *
 * export function getNotionClient() {
 *   const token = process.env.NOTION_TOKEN;
 *   if (!token) {
 *     throw new Error("NOTION_TOKEN 환경변수가 설정되지 않았습니다.");
 *   }
 *   return new Client({ auth: token });
 * }
 * ```
 */
export function getNotionClient(): never {
  throw new Error(
    "getNotionClient가 아직 구현되지 않았습니다. lib/notion/client.ts의 TODO를 참고하세요."
  );
}
