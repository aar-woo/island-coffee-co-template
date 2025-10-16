"use client";

import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import ContentImage from "@/components/ui/ContentImage/ContentImage";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function ParallaxImage({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useParallax(scrollYProgress, 100);

  return (
    <section className="snap-center flex justify-center items-center relative px-4">
      <div
        ref={ref}
        className="w-full m-3 bg-gray-100 overflow-hidden rounded-sm"
      >
        <ContentImage
          src={`/images/coffee-shop-atmosphere-1.jpg`}
          alt="A coffee shop atmosphere"
          aspectRatio="portrait"
        />
      </div>
      <motion.h2
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        style={{ y }}
        className="text-[#8df0cc] m-0 font-mono text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-3px] leading-[1.2] absolute inline-block top-[calc(50%-25px)] left-[55%] sm:left-[calc(50%+80px)] md:left-[calc(50%+120px)]"
      >{`#00${id}`}</motion.h2>
    </section>
  );
}

export default function Parallax() {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((image) => (
        <ParallaxImage key={image} id={image} />
      ))}
    </div>
  );
}
