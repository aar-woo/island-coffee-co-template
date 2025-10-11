import Link from "next/link";
import { Button } from "@/components/ui/base/button";
import { FadeInScale } from "@/components/ui/animations/FadeInScale";

type BackgroundType =
  | { type: "image"; src: string }
  | { type: "video"; src: string; poster?: string }
  | { type: "gradient"; colors?: string[] };

interface HeroProps {
  title: string;
  subtitle: string;
  background: BackgroundType;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  overlayOpacity?: number;
}

export default function Hero({
  title,
  subtitle,
  background,
  primaryCta,
  secondaryCta,
  overlayOpacity = 0.5,
}: HeroProps) {
  const renderBackground = () => {
    switch (background.type) {
      case "image":
        return (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${background.src})` }}
          />
        );
      case "video":
        return (
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={background.poster}
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={background.src} type="video/mp4" />
          </video>
        );
      case "gradient":
        const colors = background.colors || ["#667eea", "#764ba2", "#00f2fe"];
        // Duplicate first color at end for seamless loop
        const seamlessColors = [...colors, colors[0]];
        return (
          <div
            className="absolute inset-0 animate-gradient bg-gradient-to-r"
            style={{
              backgroundImage: `linear-gradient(90deg, ${seamlessColors.join(
                ", "
              )})`,
              backgroundSize: "200% 100%",
            }}
          />
        );
    }
  };

  return (
    <section className="relative flex min-h-[75vh] w-full items-center justify-center overflow-hidden">
      {renderBackground()}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <FadeInScale>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg text-gray-200 sm:text-xl md:text-2xl">
            {subtitle}
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" variant="oval">
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            {secondaryCta && (
              <Button asChild size="lg" variant="oval">
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            )}
          </div>
        </FadeInScale>
      </div>
    </section>
  );
}
