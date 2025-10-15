"use client";

import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import ContentImage from "@/components/ui/ContentImage/ContentImage";

function StyleSheet() {
  return (
    <style>{`
      html {
          scroll-snap-type: y mandatory;
      }

      .img-container {
          height: 100vh;
          scroll-snap-align: start;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
      }

      .img-container > div {
          width: 300px;
          height: 400px;
          margin: 20px;
          background: #f5f5f5;
          overflow: hidden;
      }

      .img-container img {
          width: 300px;
          height: 400px;
      }

      @media (max-width: 500px) {
          .img-container > div {
              width: 150px;
              height: 200px;
          }

          .img-container img {
              width: 150px;
              height: 200px;
          }
      }

      .img-container h2 {
          color: #8df0cc;
          margin: 0;
          font-family: "Azeret Mono", monospace;
          font-size: 50px;
          font-weight: 700;
          letter-spacing: -3px;
          line-height: 1.2;
          position: absolute;
          display: inline-block;
          top: calc(50% - 25px);
          left: calc(50% + 120px);
      }

      .progress {
          position: fixed;
          left: 0;
          right: 0;
          height: 5px;
          background: #8df0cc;
          bottom: 50px;
          transform: scaleX(0);
      }
  `}</style>
  );
}

function ParallaxImage({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="img-container">
      <div ref={ref}>
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
      >{`#00${id}`}</motion.h2>
    </section>
  );
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function Parallax() {
  return (
    <div id="example">
      {[1, 2, 3, 4, 5].map((image) => (
        <ParallaxImage key={image} id={image} />
      ))}
      <div className="progress" />
      <StyleSheet />
    </div>
  );
}
