import Image from "next/image";
import { cn } from "@/lib/utils";

interface ContentImageProps {
  src: string;
  alt: string;
  aspectRatio?: "square" | "video" | "portrait";
  className?: string;
  priority?: boolean;
}

export default function ContentImage({
  src,
  alt,
  aspectRatio = "square",
  className,
  priority = false,
}: ContentImageProps) {
  const aspectRatioClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
  };

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
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
