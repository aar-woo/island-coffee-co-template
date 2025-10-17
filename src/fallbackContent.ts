import { ContentBlockData } from "@/components/ui/About/AboutSection";
import { HeroContent } from "./sanity/lib/sanityQueries";

export const fallbackContentBlocks: ContentBlockData[] = [
  {
    image: {
      src: "/images/coffee-farm.jpg",
      alt: "Our coffee farm in Hawaii",
      aspectRatio: "video",
      objectPosition: "center",
    },
    title: "Our Story",
    description:
      "Founded in 2010, Island Coffee Co. started as a small family farm with a passion for growing exceptional coffee. Today, we maintain that same dedication to quality while sharing our love of Hawaiian coffee with the world.",
    primaryCta: {
      label: "Learn More",
      href: "/our-story",
      variant: "default",
    },
  },
  {
    image: {
      src: "/images/coffee-roasting-machine.jpg",
      alt: "Coffee roasting process",
      aspectRatio: "video",
      objectPosition: "center",
    },
    title: "Farm to Cup",
    description:
      "We control every step of the process - from carefully cultivating our coffee plants to roasting the beans to perfection. This hands-on approach ensures the highest quality in every cup.",
    primaryCta: {
      label: "Our Process",
      href: "/process",
      variant: "default",
    },
  },
  {
    image: {
      src: "/images/cafe-workers.jpg",
      alt: "Coffee shop community",
      aspectRatio: "video",
      objectPosition: "center",
    },
    title: "Community First",
    description:
      "More than just a coffee company, we're proud to be part of the local Hawaiian community. We work closely with local farmers and businesses, creating sustainable partnerships that benefit our entire island.",
    primaryCta: {
      label: "Join Us",
      href: "/community",
      variant: "default",
    },
  },
];

export const fallbackGalleryImages = [
  { src: "/images/cafe-food.jpg", alt: "Cafe food" },
  { src: "/images/coffee-mug-merch.jpg", alt: "Coffee mug" },
  { src: "/images/island-coffee-hero.jpg", alt: "Island coffee" },
  {
    src: "/images/coffee-shop-atmosphere-1.jpg",
    alt: "Coffee shop atmosphere",
  },
  { src: "/images/espresso-machine.jpg", alt: "Espresso machine" },
  { src: "/images/cafe-sea-side-table.jpg", alt: "Seaside table" },
  { src: "/images/coffee-by-the-sea-1.jpg", alt: "Coffee by the sea" },
  {
    src: "/images/coffee-cup-1.jpg",
    alt: "Island coffee",
    hover: {
      header: "Coffee",
      content: "Island Coffee Co. signature blend",
      className: "text-center flex flex-col items-center",
    },
  },
  {
    src: "/images/pancakes-breakfast.jpg",
    alt: "Pancake breakfast",
    hover: {
      header: "Almond Macadamia Pancakes",
      content:
        "One of our most popular breakfast items, served with a side of our signature maple syrup.",
    },
  },
];

export const fallbackHeroContent: HeroContent = {
  title: "Welcome to Island Coffee Co.",
  subtitle: "Discover premium coffee beans locally grown in Hawai'i",
  background: {
    type: "video" as const,
    src: "/videos/coffee-shop.mp4",
  },
  primaryCta: { label: "Shop Now", href: "/shop" },
  secondaryCta: { label: "Learn More", href: "/about" },
  overlayOpacity: 0.5,
};
