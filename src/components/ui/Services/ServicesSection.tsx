import ServiceCard, { Service } from "./ServiceCard";
import { FadeInScale } from "@/components/ui/animations/FadeInScale";
import ScrollPopUp from "@/components/ui/animations/ScrollPopUp";

interface ServicesSectionProps {
  title?: string;
  description?: string;
  services: Service[];
}

export default function ServicesSection({
  title,
  description,
  services,
}: ServicesSectionProps) {
  return (
    <section className="w-full bg-background my-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {(title || description) && (
          <FadeInScale>
            <div className="mb-8 text-center">
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
          </FadeInScale>
        )}
        <div className="flex flex-col flex-wrap justify-center gap-12 md:flex-row md:gap-8">
          {services.map((service, index) => (
            <ScrollPopUp
              className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2rem)]"
              key={index}
              i={index}
              viewportAmount={0.2}
            >
              <ServiceCard
                image={service.image}
                title={service.title}
                subtitle={service.subtitle}
                primaryCta={service.primaryCta}
                secondaryCta={service.secondaryCta}
                key={index}
                index={index}
                TextAnimationWrapper={ScrollPopUp}
              />
            </ScrollPopUp>
          ))}
        </div>
      </div>
    </section>
  );
}
