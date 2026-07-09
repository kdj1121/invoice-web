"use client";

import { toast } from "sonner";
import { BellIcon, DownloadIcon, RocketIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ContactForm } from "@/components/sections/contact-form";

const frameworkItems = [
  { label: "Next.js", value: "next" },
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
];

export default function ShowcasePage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-12">
      <div className="mb-8 flex flex-col gap-2">
        <Badge variant="secondary" className="w-fit">
          컴포넌트 쇼케이스
        </Badge>
        <h1 className="font-heading text-3xl font-semibold tracking-tight">
          설치된 UI 컴포넌트
        </h1>
        <p className="text-muted-foreground">
          shadcn/ui로 설치된 컴포넌트를 카테고리별로 확인할 수 있습니다.
        </p>
      </div>

      <Tabs defaultValue="buttons">
        <TabsList>
          <TabsTrigger value="buttons">버튼</TabsTrigger>
          <TabsTrigger value="forms">폼</TabsTrigger>
          <TabsTrigger value="feedback">피드백</TabsTrigger>
          <TabsTrigger value="data">데이터 표시</TabsTrigger>
        </TabsList>

        {/* 버튼 */}
        <TabsContent value="buttons" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Button</CardTitle>
              <CardDescription>variant와 size 조합</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="link">Link</Button>
              </div>
              <Separator />
              <div className="flex flex-wrap items-center gap-3">
                <Button size="xs">Extra Small</Button>
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Tooltip>
                  <TooltipTrigger
                    render={<Button size="icon" variant="outline" />}
                  >
                    <RocketIcon />
                  </TooltipTrigger>
                  <TooltipContent>아이콘 버튼 + 툴팁</TooltipContent>
                </Tooltip>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 폼 */}
        <TabsContent value="forms" className="mt-6">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>기본 폼 요소</CardTitle>
                <CardDescription>
                  input, select, checkbox, switch, textarea
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="showcase-input">텍스트 입력</Label>
                  <Input id="showcase-input" placeholder="입력해보세요" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="showcase-select">선택</Label>
                  <Select items={frameworkItems} defaultValue="next">
                    <SelectTrigger id="showcase-select" className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {frameworkItems.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="showcase-textarea">여러 줄 입력</Label>
                  <Textarea
                    id="showcase-textarea"
                    placeholder="메시지를 입력하세요"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="showcase-checkbox" defaultChecked />
                  <Label htmlFor="showcase-checkbox">약관에 동의합니다</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Switch id="showcase-switch" defaultChecked />
                  <Label htmlFor="showcase-switch">알림 받기</Label>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>검증 폼 (react-hook-form + zod)</CardTitle>
                <CardDescription>
                  실제 동작하는 문의 폼 예제입니다.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* 피드백 */}
        <TabsContent value="feedback" className="mt-6">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Toast / Dialog</CardTitle>
                <CardDescription>알림과 모달</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                <Button
                  variant="outline"
                  onClick={() =>
                    toast.success("작업이 완료되었습니다.", {
                      icon: <BellIcon />,
                    })
                  }
                >
                  토스트 띄우기
                </Button>

                <Dialog>
                  <DialogTrigger render={<Button variant="outline" />}>
                    다이얼로그 열기
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>정말 진행할까요?</DialogTitle>
                      <DialogDescription>
                        이 작업은 되돌릴 수 없습니다.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <DialogClose render={<Button variant="outline" />}>
                        취소
                      </DialogClose>
                      <Button
                        onClick={() => toast.success("확인되었습니다.")}
                      >
                        <DownloadIcon />
                        확인
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Accordion</CardTitle>
                <CardDescription>펼침/접힘 콘텐츠</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>이 스타터킷은 무엇인가요?</AccordionTrigger>
                    <AccordionContent>
                      Next.js 16, Tailwind CSS v4, shadcn/ui가 미리 구성된
                      템플릿입니다.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>컴포넌트를 더 추가하려면?</AccordionTrigger>
                    <AccordionContent>
                      <code>npx shadcn@latest add [컴포넌트명]</code> 명령으로
                      추가할 수 있습니다.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* 데이터 표시 */}
        <TabsContent value="data" className="mt-6">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Avatar / Badge</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap items-center gap-4">
                <Avatar>
                  <AvatarFallback>SK</AvatarFallback>
                </Avatar>
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Skeleton</CardTitle>
                <CardDescription>로딩 플레이스홀더</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-20 w-full" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
