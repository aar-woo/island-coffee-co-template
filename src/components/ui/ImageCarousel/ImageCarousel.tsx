"use client";

import { useState, useEffect, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import ContentImage from "@/components/ui/ContentImage/ContentImage";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/base/carousel";
import { HoverCardProps } from "@/components/ui/HoverCard/HoverCard";

export interface ImageCarouselItem {
  hover?: HoverCardProps;
  src: string;
  alt: string;
}

export interface ImagesPerView {
  mobile?: number;
  tablet?: number;
  desktop?: number;
}

export interface ImageCarouselProps {
  images: ImageCarouselItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
  aspectRatio?: "square" | "video" | "portrait";
  showDots?: boolean;
  showArrows?: boolean;
  imagesPerView?: ImagesPerView;
  direction?: "ltr" | "rtl";
}
// Responsive basis classes - complete strings for Tailwind detection
const BASIS_CLASSES = {
  mobile: [
    "basis-full",
    "basis-1/2",
    "basis-1/3",
    "basis-1/4",
    "basis-1/5",
    "basis-1/6",
  ],
  tablet: [
    "md:basis-full",
    "md:basis-1/2",
    "md:basis-1/3",
    "md:basis-1/4",
    "md:basis-1/5",
    "md:basis-1/6",
  ],
  desktop: [
    "lg:basis-full",
    "lg:basis-1/2",
    "lg:basis-1/3",
    "lg:basis-1/4",
    "lg:basis-1/5",
    "lg:basis-1/6",
  ],
};

export default function ImageCarousel({
  images,
  autoPlay = true,
  autoPlayInterval = 4000,
  className,
  aspectRatio = "video",
  showDots = true,
  showArrows = true,
  imagesPerView = { mobile: 1, tablet: 2, desktop: 3 },
  direction = "ltr",
}: ImageCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [currentImagesPerView, setCurrentImagesPerView] = useState(
    imagesPerView.desktop || 3
  );

  const autoplayPlugin = useRef(
    Autoplay({
      delay: autoPlayInterval,
      stopOnInteraction: true,
      stopOnMouseEnter: false,
      rootNode: (emblaRoot) => emblaRoot.parentElement,
    })
  );

  // Detect current breakpoint and update currentImagesPerView
  useEffect(() => {
    const updateImagesPerView = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        // lg breakpoint
        setCurrentImagesPerView(imagesPerView.desktop || 3);
      } else if (width >= 768) {
        // md breakpoint
        setCurrentImagesPerView(imagesPerView.tablet || 2);
      } else {
        setCurrentImagesPerView(imagesPerView.mobile || 1);
      }
    };

    // Set initial value
    updateImagesPerView();

    // Add resize listener
    window.addEventListener("resize", updateImagesPerView);
    return () => window.removeEventListener("resize", updateImagesPerView);
  }, [imagesPerView.mobile, imagesPerView.tablet, imagesPerView.desktop]);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const basisClasses = cn(
    BASIS_CLASSES.mobile[(imagesPerView.mobile || 1) - 1],
    BASIS_CLASSES.tablet[(imagesPerView.tablet || 2) - 1],
    BASIS_CLASSES.desktop[(imagesPerView.desktop || 3) - 1]
  );

  // Determine if autoplay should be enabled based on image count
  const shouldAutoPlay = autoPlay && images.length > currentImagesPerView;

  const handleMouseEnter = () => {
    if (shouldAutoPlay) {
      autoplayPlugin.current.stop();
    }
  };

  const handleMouseLeave = () => {
    if (shouldAutoPlay) {
      autoplayPlugin.current.play();
    }
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div
      className={cn("w-full my-10", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      dir={direction}
    >
      <Carousel
        opts={{
          loop: true,
          slidesToScroll: 1,
          direction: direction,
          watchDrag: true,
          skipSnaps: false,
        }}
        plugins={shouldAutoPlay ? [autoplayPlugin.current] : []}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem
              key={`${image.src}-${index}`}
              className={basisClasses}
            >
              <ContentImage
                src={image.src}
                alt={image.alt}
                aspectRatio={aspectRatio}
                priority={false}
                hover={image.hover}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        {showArrows && images.length > 1 && (
          <>
            <CarouselPrevious className="left-2 md:left-4" />
            <CarouselNext className="right-2 md:right-4" />
          </>
        )}
      </Carousel>

      {showDots && images.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                current === index
                  ? "w-8 bg-primary"
                  : "w-2 bg-primary/30 hover:bg-primary/50"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
