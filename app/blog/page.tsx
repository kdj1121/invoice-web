import { PostList } from "@/components/sections/post-list";

// TODO(docs/PRD.md 7절 "갱신 전략"): ISR 재검증 주기 1시간.
export const revalidate = 3600;

/**
 * TODO(docs/PRD.md 5절 "블로그 목록 페이지", 8절 "정보 구조 및 라우팅"):
 * lib/notion/posts.ts의 getPosts()로 Published 글을 날짜 역순으로 조회해
 * PostList에 전달한다. 노션 API 호출 실패 시 폴백 처리(7절)도 고려한다.
 */
export default function BlogPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-12">
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="font-heading text-3xl font-semibold tracking-tight">
          블로그
        </h1>
        {/* TODO: 소개 문구 */}
      </div>
      <PostList posts={[]} />
    </div>
  );
}
