"use client";

import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import ContentImage, {
  ContentImageProps,
} from "@/components/ui/ContentImage/ContentImage";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

interface ParallaxImageProps {
  header: string;
  description: string;
  image: ContentImageProps;
}

function ParallaxImage({ header, description, image }: ParallaxImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="snap-center flex justify-center items-center px-4">
      <div
        ref={ref}
        className="w-full m-3 bg-gray-100 overflow-hidden rounded-sm"
      >
        <ContentImage src={image.src} alt={image.alt} aspectRatio="portrait" />
      </div>
      <motion.div
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        style={{ y }}
        className="text-white break-words max-w-1/3 font-mono text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-2px] absolute  left-[55%] sm:left-[calc(50%)] md:left-[calc(50%+120px)]"
      >
        <h2>{header}</h2>
        <p className="text-sm sm:text-base md:text-lg max-w-3/4">
          {description}
        </p>
      </motion.div>
    </section>
  );
}

const parallaxImages = [
  {
    header: "Farm to Cup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: {
      src: "/images/coffee-farm.jpg",
      alt: "A coffee farm and truck of beans",
    },
  },
  {
    header: "Roasted in House",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: {
      src: "/images/coffee-roasting-machine.jpg",
      alt: "A pair of cafe workers, one male and one female",
    },
  },
  {
    header: "Local Community",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: {
      src: "/images/cafe-workers.jpg",
      alt: "A pair of cafe workers, one male and one female",
    },
  },
];

export default function Parallax() {
  return (
    <div>
      {parallaxImages.map((image) => (
        <ParallaxImage
          key={image.header}
          header={image.header}
          description={image.description}
          image={image.image}
        />
      ))}
    </div>
  );
}
