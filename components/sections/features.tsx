import { LayersIcon, PaintBucketIcon, ShieldCheckIcon, ZapIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: LayersIcon,
    title: "App Router",
    description: "Next.js 16 App Router 기반 파일 시스템 라우팅과 서버 컴포넌트.",
  },
  {
    icon: ShieldCheckIcon,
    title: "타입 안전성",
    description: "TypeScript strict 모드와 zod 스키마 검증으로 런타임 오류를 예방.",
  },
  {
    icon: PaintBucketIcon,
    title: "Tailwind CSS v4",
    description: "CSS 변수 기반 디자인 토큰과 다크모드가 기본 구성.",
  },
  {
    icon: ZapIcon,
    title: "shadcn/ui",
    description: "재사용 가능한 컴포넌트를 코드로 소유하며 자유롭게 커스터마이징.",
  },
];

export function Features() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-16">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <feature.icon className="mb-2 size-6 text-primary" />
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
