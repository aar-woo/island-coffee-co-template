import Link from "next/link";
import { Button } from "@/components/ui/base/button";
import ContentImage from "@/components/ui/ContentImage/ContentImage";
import { cn } from "@/lib/utils";

interface CtaButton {
  label: string;
  href: string;
  variant?: "default" | "outline" | "oval";
}

interface ServiceCardProps {
  image: {
    src: string;
    alt: string;
    aspectRatio?: "square" | "video" | "portrait";
    objectPosition?: "center" | "top" | "bottom" | "left" | "right";
  };
  title: string;
  subtitle: string;
  primaryCta?: CtaButton;
  secondaryCta?: CtaButton;
  className?: string;
}

export default function ServiceCard({
  image,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  className,
}: ServiceCardProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <ContentImage
        src={image.src}
        alt={image.alt}
        aspectRatio={image.aspectRatio}
        objectPosition={image.objectPosition}
      />
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
    </div>
  );
}
