import ImageCarousel from "../ImageCarousel/ImageCarousel";
import { ImageCarouselConfig } from "@/sanity/lib/sanityQueries";

interface GalleryProps {
  title?: string;
  imageCarousels: ImageCarouselConfig[];
}

export default function Gallery({ title, imageCarousels }: GalleryProps) {
  return (
    <section className="w-full bg-background my-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Gallery
        </h2>
      </div>
      <div>
        {imageCarousels.map((carousel, index) => (
          <ImageCarousel
            key={index}
            images={carousel.images}
            autoPlay={true}
            aspectRatio={carousel.aspectRatio}
            showArrows={false}
            direction={carousel.direction}
          />
        ))}
      </div>
    </section>
  );
}
