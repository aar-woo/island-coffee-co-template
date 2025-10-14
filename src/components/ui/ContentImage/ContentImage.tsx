import Image from "next/image";
import { cn } from "@/lib/utils";

interface ContentImageProps {
  src: string;
  alt: string;
  aspectRatio?: "square" | "video" | "portrait";
  objectPosition?: "center" | "top" | "bottom" | "left" | "right";
  className?: string;
  priority?: boolean;
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
}: ContentImageProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-lg",
        aspectRatioClasses[aspectRatio],
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={cn("object-cover", objectPositionClasses[objectPosition])}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
