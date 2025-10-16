"use client";
import { motion } from "motion/react";
import type { Variants } from "motion/react";

interface ContentProps {
  children: React.ReactNode;
  i: number;
  className?: string;
  initial?: "offscreen" | "hidden";
  viewportAmount?: number;
}

const cardVariants: Variants = {
  offscreen: {
    y: 30,
    opacity: 0.5,
  },
  hidden: {
    y: 30,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
};

export default function ScrollPopUp({
  children,
  i,
  className,
  viewportAmount = 0.4,
  initial = "hidden",
}: ContentProps) {
  return (
    <motion.div
      className={`card-container-${i} ${className}`}
      initial={initial}
      whileInView="onscreen"
      viewport={{ amount: viewportAmount }}
    >
      <motion.div variants={cardVariants}>{children}</motion.div>
    </motion.div>
  );
}
