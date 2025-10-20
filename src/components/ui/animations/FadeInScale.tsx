"use client";
import { motion, HTMLMotionProps } from "motion/react";
import { ReactNode } from "react";

interface FadeInScaleProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

export function FadeInScale({
  children,
  delay = 0,
  duration = 0.4,
  ...motionProps
}: FadeInScaleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration,
        delay,
        scale: {
          type: "spring",
          visualDuration: 0.4,
          bounce: 0.2,
        },
      }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
