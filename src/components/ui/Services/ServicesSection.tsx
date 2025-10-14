import ServiceCard from "./ServiceCard";
import { FadeInScale } from "@/components/ui/animations/FadeInScale";

interface Service {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  subtitle: string;
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
    <section className="w-full bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {(title || description) && (
          <FadeInScale>
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
          </FadeInScale>
        )}
        <div className="flex flex-col gap-12 md:flex-row md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              subtitle={service.subtitle}
              primaryCta={service.primaryCta}
              secondaryCta={service.secondaryCta}
              className="flex-1"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
