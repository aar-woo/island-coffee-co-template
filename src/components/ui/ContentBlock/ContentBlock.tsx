import Link from "next/link";
import { Button } from "@/components/ui/base/button";
import ContentImage from "@/components/ui/ContentImage/ContentImage";
import { cn } from "@/lib/utils";

interface CtaButton {
  label: string;
  href: string;
  variant?: "default" | "outline" | "oval";
}

interface ContentBlockProps {
  image: {
    src: string;
    alt: string;
    aspectRatio?: "square" | "video" | "portrait";
    objectPosition?: "center" | "top" | "bottom" | "left" | "right";
  };
  title: string;
  description: string;
  primaryCta?: CtaButton;
  secondaryCta?: CtaButton;
  imagePosition: "left" | "right";
  index: number;
  className?: string;
  TextAnimationWrapper?: React.ComponentType<{
    children: React.ReactNode;
    i: number;
    [key: string]: any;
  }>;
}

export default function ContentBlock({
  image,
  title,
  description,
  primaryCta,
  secondaryCta,
  imagePosition,
  index,
  className,
  TextAnimationWrapper,
}: ContentBlockProps) {
  const hasCtas = primaryCta || secondaryCta;
  const isImageLeft = imagePosition === "left";

  const imageElement = (
    <ContentImage
      src={image.src}
      alt={image.alt}
      aspectRatio={image.aspectRatio}
      objectPosition={image.objectPosition}
    />
  );
  // Render text content inline with conditional animation wrapper
  const renderTextContent = () => (
    <div className="flex flex-col justify-center">
      <h3 className="text-2xl font-bold text-foreground mb-4">{title}</h3>
      <p className="text-base text-muted-foreground mb-6">{description}</p>
      {hasCtas && (
        <div className="flex flex-wrap gap-3">
          {primaryCta && (
            <Button asChild variant={primaryCta.variant || "default"}>
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
          )}
          {secondaryCta && (
            <Button asChild variant={secondaryCta.variant || "outline"}>
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          )}
        </div>
      )}
    </div>
  );

  return (
    <div className={cn("w-full", className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {isImageLeft ? (
          <>
            <div className="order-1">
              <ContentImage
                src={image.src}
                alt={image.alt}
                aspectRatio={image.aspectRatio}
                objectPosition={image.objectPosition}
              />
            </div>
            <div className="order-2">
              {TextAnimationWrapper ? (
                <TextAnimationWrapper i={index}>
                  {renderTextContent()}
                </TextAnimationWrapper>
              ) : (
                renderTextContent()
              )}
            </div>
          </>
        ) : (
          <>
            <div className="order-2 md:order-1">
              {TextAnimationWrapper ? (
                <TextAnimationWrapper i={index}>
                  {renderTextContent()}
                </TextAnimationWrapper>
              ) : (
                renderTextContent()
              )}
            </div>
            <div className="order-1 md:order-2">
              <ContentImage
                src={image.src}
                alt={image.alt}
                aspectRatio={image.aspectRatio}
                objectPosition={image.objectPosition}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
