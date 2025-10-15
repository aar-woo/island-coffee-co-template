import { ReactNode } from "react";
import {
  HoverCard as HoverCardPrimitive,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/base/hover-card";
import { cn } from "@/lib/utils";

export interface HoverCardProps {
  header?: ReactNode;
  content?: ReactNode;
  children: ReactNode;
  className?: string;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  sideOffset?: number;
  openDelay?: number;
  closeDelay?: number;
}

export default function HoverCard({
  header,
  content,
  children,
  className,
  side,
  align,
  sideOffset,
  openDelay,
  closeDelay,
}: HoverCardProps) {
  return (
    <HoverCardPrimitive openDelay={openDelay} closeDelay={closeDelay}>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent
        className={cn("space-y-2", className)}
        side={side}
        align={align}
        sideOffset={sideOffset}
      >
        {header &&
          (typeof header === "string" ? (
            <h3 className="text-sm font-medium">{header}</h3>
          ) : (
            header
          ))}
        {content &&
          (typeof content === "string" ? (
            <p className="text-sm text-muted-foreground">{content}</p>
          ) : (
            content
          ))}
      </HoverCardContent>
    </HoverCardPrimitive>
  );
}
