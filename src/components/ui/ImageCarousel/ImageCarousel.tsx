"use client";

import * as React from "react";
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

export interface ImageCarouselItem {
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
}

const getBasisClass = (count: number): string => {
  const basisMap: Record<number, string> = {
    1: "full",
    2: "1/2",
    3: "1/3",
    4: "1/4",
    5: "1/5",
    6: "1/6",
  };
  return `basis-${basisMap[count] || "full"}`;
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
}: ImageCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const autoplayPlugin = React.useRef(
    Autoplay({
      delay: autoPlayInterval,
      stopOnInteraction: true,
    })
  );

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Build responsive basis classes
  const mobileBasis = getBasisClass(imagesPerView.mobile || 1);
  const tabletBasis = getBasisClass(imagesPerView.tablet || 2);
  const desktopBasis = getBasisClass(imagesPerView.desktop || 3);
  const basisClasses = `${mobileBasis} md:${tabletBasis} lg:${desktopBasis}`;

  const handleMouseEnter = () => {
    if (autoPlay) {
      autoplayPlugin.current.stop();
    }
  };

  const handleMouseLeave = () => {
    if (autoPlay) {
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
    >
      <Carousel
        opts={{
          align: "start",
          loop: true,
          slidesToScroll: 1,
        }}
        plugins={autoPlay ? [autoplayPlugin.current] : []}
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
