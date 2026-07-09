import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-16">
      <div className="flex flex-col items-center gap-4 rounded-xl bg-muted px-6 py-16 text-center">
        <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
          지금 바로 시작해보세요
        </h2>
        <p className="max-w-md text-muted-foreground">
          이 페이지의 소스를 그대로 복제해 다음 프로젝트의 기반으로 사용하세요.
        </p>
        <Button
          size="lg"
          nativeButton={false}
          render={<Link href="/showcase" />}
        >
          컴포넌트 쇼케이스 보기
        </Button>
      </div>
    </section>
  );
}
