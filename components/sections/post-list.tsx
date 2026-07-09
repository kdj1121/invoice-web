import Link from "next/link";

import type { Post } from "@/lib/notion/types";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type PostListProps = {
  posts: Post[];
};

/**
 * TODO(docs/PRD.md 5절 "블로그 목록 페이지", 9절 "화면/UX 요구사항"):
 * Notion "Posts" DB에서 조회한 Published 글을 날짜 역순 목록으로 표시한다.
 * 커버 이미지/제목/요약/태그(Badge)/날짜를 노출하고 상세 페이지(/blog/[slug])로 링크한다.
 * 항목이 없을 때의 빈 상태 UI도 이 컴포넌트에서 처리한다.
 */
export function PostList({ posts }: PostListProps) {
  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
          <Card className="transition-shadow hover:shadow-md">
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.publishedAt}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <CardDescription>{post.summary}</CardDescription>
              <div className="flex flex-wrap gap-1">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
