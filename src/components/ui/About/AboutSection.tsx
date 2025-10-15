import ContentBlock from "@/components/ui/ContentBlock/ContentBlock";
import { FadeInScale } from "@/components/ui/animations/FadeInScale";
import ScrollPopUp from "@/components/ui/animations/ScrollPopUp";

export interface ContentBlockData {
  image: {
    src: string;
    alt: string;
    aspectRatio?: "square" | "video" | "portrait";
    objectPosition?: "center" | "top" | "bottom" | "left" | "right";
  };
  title: string;
  description: string;
  primaryCta?: {
    label: string;
    href: string;
    variant?: "default" | "outline" | "oval";
  };
  secondaryCta?: {
    label: string;
    href: string;
    variant?: "default" | "outline" | "oval";
  };
}

interface AboutSectionProps {
  title?: string;
  description?: string;
  contentBlocks: ContentBlockData[];
}

export default function AboutSection({
  title,
  description,
  contentBlocks,
}: AboutSectionProps) {
  return (
    <section className="w-full bg-background my-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {(title || description) && (
          <div className="mb-12 text-center">
            {title && (
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-lg text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        )}
        <div className="space-y-16">
          {contentBlocks.map((block, index) => (
            <ScrollPopUp
              key={index}
              i={index}
              viewportAmount={0.2}
              initial="offscreen"
            >
              <ContentBlock
                image={block.image}
                title={block.title}
                description={block.description}
                primaryCta={block.primaryCta}
                secondaryCta={block.secondaryCta}
                imagePosition={index % 2 === 0 ? "left" : "right"}
                index={index}
              />
            </ScrollPopUp>
          ))}
        </div>
      </div>
    </section>
  );
}
