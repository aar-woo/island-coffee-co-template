import * as motion from "motion/react-client";
import type { Variants } from "motion/react";

interface ContentProps {
  children: React.ReactNode;
  i: number;
  className?: string;
  viewportAmount?: number;
}

const cardVariants: Variants = {
  offscreen: {
    y: 50,
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
  viewportAmount = 0.8,
}: ContentProps) {
  return (
    <motion.div
      className={`card-container-${i} ${className}`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: viewportAmount }}
    >
      <motion.div variants={cardVariants}>{children}</motion.div>
    </motion.div>
  );
}
