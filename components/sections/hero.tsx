import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-4 py-24 text-center">
      <Badge variant="secondary">Next.js 16 · React 19</Badge>
      <h1 className="max-w-2xl font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
        빠르게 시작하는 모던 웹 스타터킷
      </h1>
      <p className="max-w-xl text-lg text-muted-foreground">
        TypeScript, Tailwind CSS v4, shadcn/ui가 미리 구성되어 있어 아이디어를
        곧바로 화면으로 옮길 수 있습니다.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button
          size="lg"
          nativeButton={false}
          render={<Link href="/showcase" />}
        >
          컴포넌트 둘러보기
          <ArrowRightIcon />
        </Button>
        <Button
          size="lg"
          variant="outline"
          nativeButton={false}
          render={<Link href="/" />}
        >
          더 알아보기
        </Button>
      </div>
    </section>
  );
}
