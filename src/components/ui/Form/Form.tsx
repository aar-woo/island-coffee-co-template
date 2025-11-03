"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface FormProps extends React.ComponentProps<"form"> {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
  className?: string;
}

export default function Form({
  onSubmit,
  children,
  className,
  ...props
}: FormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("w-full", className)}
      {...props}
    >
      {children}
    </form>
  );
}

export {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/base/field";

export { Input } from "@/components/ui/base/input";
export { Textarea } from "@/components/ui/base/textarea";
export { Select } from "@/components/ui/base/select";
export { Checkbox } from "@/components/ui/base/checkbox";
export { Radio } from "@/components/ui/base/radio";
