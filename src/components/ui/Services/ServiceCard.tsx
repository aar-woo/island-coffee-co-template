import Link from "next/link";
import { Button } from "@/components/ui/base/button";
import ContentImage, {
  ContentImageProps,
} from "@/components/ui/ContentImage/ContentImage";
import { cn } from "@/lib/utils";

export interface CtaButton {
  label: string;
  href: string;
  variant?: "default" | "outline" | "oval";
}

export interface ServiceImage {
  src: string;
  alt: string;
  aspectRatio?: "square" | "video" | "portrait";
  objectPosition?: "center" | "top" | "bottom" | "left" | "right";
}

export interface Service {
  image: ContentImageProps;
  title: string;
  subtitle: string;
  primaryCta?: CtaButton;
  secondaryCta?: CtaButton;
}

interface ServiceCardProps {
  image: ServiceImage;
  title: string;
  subtitle: string;
  primaryCta?: CtaButton;
  secondaryCta?: CtaButton;
  className?: string;
  index: number;
  TextAnimationWrapper?: React.ComponentType<{
    children: React.ReactNode;
    i: number;
  }>;
}

export default function ServiceCard({
  image,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  className,
  index,
  TextAnimationWrapper,
}: ServiceCardProps) {
  const content = (
    <div className="mt-4 flex flex-col">
      <h3 className="text-2xl font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-base text-muted-foreground">{subtitle}</p>
      {(primaryCta || secondaryCta) && (
        <div className="mt-4 flex flex-wrap gap-3">
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
    <div className={cn("flex flex-col", className)}>
      <ContentImage
        src={image.src}
        alt={image.alt}
        aspectRatio={image.aspectRatio}
        objectPosition={image.objectPosition}
      />
      {TextAnimationWrapper ? (
        <TextAnimationWrapper i={index}>{content}</TextAnimationWrapper>
      ) : (
        content
      )}
    </div>
  );
}
