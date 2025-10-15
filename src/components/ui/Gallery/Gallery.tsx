import ImageCarousel from "../ImageCarousel/ImageCarousel";

const firstCarouselImages = [
  { src: "/images/cafe-food.jpg", alt: "Cafe food" },
  { src: "/images/coffee-mug-merch.jpg", alt: "Coffee mug" },
  { src: "/images/island-coffee-hero.jpg", alt: "Island coffee" },
  { src: "/images/coffee-shop-atmosphere-1.jpg", alt: "Island coffee" },
  { src: "/images/espresso-machine.jpg", alt: "Island coffee" },
];

const secondCarouselImages = [
  { src: "/images/cafe-food.jpg", alt: "Cafe food" },
  { src: "/images/cafe-sea-side-table.jpg", alt: "Coffee mug" },
  { src: "/images/coffee-by-the-sea-1.jpg", alt: "Island coffee" },
  { src: "/images/coffee-cup-1.jpg", alt: "Island coffee" },
  {
    src: "/images/pancakes-breakfast.jpg",
    alt: "Island coffee",
    hover: {
      header: "Almond Macadamia Pancakes",
      content:
        "One of our most popular breakfast items, served with a side of our signature maple syrup.",
    },
  },
];

export default function Gallery() {
  return (
    <section className="w-full bg-background my-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Gallery
        </h2>{" "}
      </div>
      <div>
        <ImageCarousel
          images={firstCarouselImages}
          autoPlay={true}
          aspectRatio="video"
          showArrows={false}
          imagesPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
        />
        <ImageCarousel
          images={secondCarouselImages}
          autoPlay={true}
          direction="rtl"
          aspectRatio="video"
          showArrows={false}
          imagesPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
        />
      </div>
    </section>
  );
}
