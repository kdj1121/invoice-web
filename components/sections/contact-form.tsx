"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

// react-hook-form + zod로 폼 상태와 검증을 직접 구현하지 않고 표준 라이브러리에 위임한다.
const contactFormSchema = z.object({
  name: z.string().min(2, "이름은 2자 이상 입력해주세요."),
  email: z.email("올바른 이메일 형식이 아닙니다."),
  message: z.string().min(10, "메시지는 10자 이상 입력해주세요."),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  function onSubmit(values: ContactFormValues) {
    toast.success("문의가 접수되었습니다.", {
      description: `${values.name}님, 곧 ${values.email}로 회신드리겠습니다.`,
    });
    form.reset();
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="w-full max-w-md"
      noValidate
    >
      <FieldGroup>
        <Field data-invalid={!!form.formState.errors.name}>
          <FieldLabel htmlFor="contact-name">이름</FieldLabel>
          <Input
            id="contact-name"
            placeholder="홍길동"
            aria-invalid={!!form.formState.errors.name}
            {...form.register("name")}
          />
          <FieldError errors={[form.formState.errors.name]} />
        </Field>

        <Field data-invalid={!!form.formState.errors.email}>
          <FieldLabel htmlFor="contact-email">이메일</FieldLabel>
          <Input
            id="contact-email"
            type="email"
            placeholder="you@example.com"
            aria-invalid={!!form.formState.errors.email}
            {...form.register("email")}
          />
          <FieldError errors={[form.formState.errors.email]} />
        </Field>

        <Field data-invalid={!!form.formState.errors.message}>
          <FieldLabel htmlFor="contact-message">메시지</FieldLabel>
          <Textarea
            id="contact-message"
            placeholder="문의 내용을 입력해주세요."
            aria-invalid={!!form.formState.errors.message}
            {...form.register("message")}
          />
          <FieldDescription>최소 10자 이상 작성해주세요.</FieldDescription>
          <FieldError errors={[form.formState.errors.message]} />
        </Field>

        <Button type="submit" disabled={form.formState.isSubmitting}>
          보내기
        </Button>
      </FieldGroup>
    </form>
  );
}
