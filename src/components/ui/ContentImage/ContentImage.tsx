import Image from "next/image";
import { cn } from "@/lib/utils";
import HoverCard from "../HoverCard/HoverCard";
import { HoverCardProps } from "../HoverCard/HoverCard";
import { Pointer } from "lucide-react";

export interface ContentImageProps {
  src: string;
  alt: string;
  aspectRatio?: "square" | "video" | "portrait";
  objectPosition?: "center" | "top" | "bottom" | "left" | "right";
  className?: string;
  priority?: boolean;
  hover?: HoverCardProps;
}

const aspectRatioClasses = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
};

const objectPositionClasses = {
  center: "object-center",
  top: "object-top",
  bottom: "object-bottom",
  left: "object-left",
  right: "object-right",
};

export default function ContentImage({
  src,
  alt,
  aspectRatio = "video",
  objectPosition = "center",
  className,
  priority = false,
  hover,
}: ContentImageProps) {
  const imageElement = (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      className={cn("object-cover", objectPositionClasses[objectPosition])}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-lg",
        aspectRatioClasses[aspectRatio],
        className
      )}
    >
      {hover ? (
        <HoverCard
          header={hover.header}
          content={hover.content}
          className={hover.className}
          side={hover.side}
          align={hover.align}
          sideOffset={hover.sideOffset}
          openDelay={hover.openDelay}
          closeDelay={hover.closeDelay}
        >
          <div
            tabIndex={0}
            role="button"
            aria-haspopup="dialog"
            aria-label={
              hover?.header
                ? `More info:
               ${hover?.header} - ${alt}`
                : alt
            }
            className="group relative h-full w-full cursor-pointer outline-none focus:ring-2 focus:ring-primary/50"
          >
            {imageElement}
            <span
              className="pointer-events-none absolute right-2 top-2 rounded-full bg-black/60 p-1 text-[10px] text-white opacity-30 transition-opacity delay-300 group-hover:opacity-100"
              aria-hidden="true"
            >
              <Pointer size={18} />
            </span>
          </div>
        </HoverCard>
      ) : (
        imageElement
      )}
    </div>
  );
}
