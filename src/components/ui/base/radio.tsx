import * as React from "react";

import { cn } from "@/lib/utils";

const Radio = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, ...props }, ref) => {
    return (
      <input
        type="radio"
        className={cn(
          "peer h-4 w-4 shrink-0 rounded-full border border-input bg-background transition-all cursor-pointer focus-visible:outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 checked:bg-primary checked:border-primary checked:text-primary-foreground aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Radio.displayName = "Radio";

export { Radio };
