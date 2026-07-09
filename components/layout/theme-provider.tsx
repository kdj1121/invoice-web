"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * next-themes 래퍼. globals.css가 `.dark` 클래스 기반 다크모드
 * (`@custom-variant dark (&:is(.dark *))`)를 사용하므로 attribute="class"로 맞춘다.
 */
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
