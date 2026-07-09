---
description: shadcn/ui 컴포넌트를 설치하고 실제 API로 쇼케이스 페이지에 등록합니다
argument-hint: [component-name]
---

`$ARGUMENTS`로 받은 컴포넌트 이름(예: `popover`, `slider`)에 대해 아래 순서를 **반드시 순서대로** 진행하세요. 중간 단계를 생략하거나 학습 데이터 속 예전 shadcn/Radix 지식으로 대체하지 마세요.

## 1. 설치
```bash
npx shadcn@latest add $ARGUMENTS
```
이미 설치되어 있다면(=`components/ui/$ARGUMENTS.tsx` 존재) 이 단계는 건너뛰고 2번부터 진행합니다.

## 2. 실제 API 확인 (건너뛰지 말 것)
```bash
npx shadcn@latest view @shadcn/$ARGUMENTS-example
```
이 프로젝트는 `base-nova` 스타일(`@base-ui/react` 기반)이라 Radix 시절 shadcn 지식(예: `asChild`)이 그대로 통하지 않습니다. 위 명령 출력과 방금 설치된 `components/ui/$ARGUMENTS.tsx`를 직접 Read해서:
- 실제 export되는 컴포넌트/서브컴포넌트 이름
- `render` prop을 써야 하는 자리 (Radix `asChild` 자리를 base-ui는 `render`로 대체)
- 필수 prop (예: `Select`의 `items` prop처럼 없으면 안 되는 것)

을 파악하세요. 확실하지 않으면 추측하지 말고 컴포넌트 소스 코드를 더 읽으세요.

## 3. 쇼케이스에 등록할 위치 결정
`app/showcase/page.tsx`를 Read하고, 기존 4개 탭(`buttons`, `forms`, `feedback`, `data`) 중 새 컴포넌트 성격에 가장 맞는 탭을 고르세요.
- 어느 탭에도 맞지 않으면 새 `TabsTrigger` + `TabsContent`를 추가하세요 (탭을 억지로 끼워 맞추지 마세요).

## 4. 쇼케이스 페이지 수정
선택한 `TabsContent` 안에 새 `Card`를 추가하고, 2번에서 확인한 실제 API 그대로 최소한의 동작 예제를 작성하세요. 상단 import 목록에 새 컴포넌트도 추가합니다. 기존 카드들의 스타일(`CardHeader` + `CardTitle` + `CardDescription` + `CardContent`)을 그대로 따르세요.

## 5. 검증
```bash
npm run lint
npm run build
```
둘 다 통과하는지 확인하고, 실패하면 원인을 고쳐서 다시 통과시키세요.

## 6. 요약 보고
설치한 컴포넌트, 등록한 탭/카드 위치, 검증 결과를 짧게 보고하세요.
