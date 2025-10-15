import {
  HoverCard as HoverCardPrimitive,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/base/hover-card";
import { ReactNode } from "react";

interface HoverCardProps {
  header?: string;
  content?: string;
  children: ReactNode;
}

export default function HoverCard({
  header,
  content,
  children,
}: HoverCardProps) {
  return (
    <HoverCardPrimitive>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent className="space-y-2">
        {header && <h3 className="text-sm font-medium">{header}</h3>}
        {content && <p className="text-sm text-muted-foreground">{content}</p>}
      </HoverCardContent>
    </HoverCardPrimitive>
  );
}
