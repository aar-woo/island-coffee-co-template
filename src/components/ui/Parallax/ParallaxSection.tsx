"use client";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import ContentImage, {
  ContentImageProps,
} from "@/components/ui/ContentImage/ContentImage";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export interface ParallaxSectionProps {
  title: string;
  description: string;
  image: ContentImageProps;
}

export default function ParallaxSection({
  title,
  description,
  image,
}: ParallaxSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useParallax(scrollYProgress, 250);

  return (
    <section className="snap-center flex justify-center items-center px-4">
      <div
        ref={ref}
        className="w-full m-3 bg-gray-100 overflow-hidden rounded-sm"
      >
        <ContentImage
          src={image.src}
          alt={image.alt}
          aspectRatio="portrait"
          className="brightness-60"
        />
      </div>
      <motion.div
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        style={{ y }}
        className="text-white max-w-1/3 font-mono tracking-[-2px] absolute left-[50%] sm:left-[calc(50%)] md:left-[calc(50%+120px)]"
      >
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold">{title}</h2>
        <p className="text-sm sm:text-base md:text-lg max-w-3/4">
          {description}
        </p>
      </motion.div>
    </section>
  );
}
