import Link from "next/link";

import type { Project } from "@/lib/notion/types";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ProjectListProps = {
  projects: Project[];
};

/**
 * TODO(docs/PRD.md 5절 "프로젝트 목록 페이지", 9절 "화면/UX 요구사항"):
 * Notion "Projects" DB에서 조회한 Published 프로젝트를 카드 그리드로 표시한다.
 * 썸네일/제목/요약/기술 스택(Badge)을 노출하고 상세 페이지(/projects/[slug])로 링크한다.
 * 항목이 없을 때의 빈 상태 UI도 이 컴포넌트에서 처리한다.
 */
export function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Link
          key={project.slug}
          href={`/projects/${project.slug}`}
          className="block"
        >
          <Card className="h-full transition-shadow hover:shadow-md">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <CardDescription>{project.summary}</CardDescription>
              <div className="flex flex-wrap gap-1">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
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
