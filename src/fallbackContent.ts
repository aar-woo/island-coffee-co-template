import { ContentBlockData } from "@/components/ui/About/AboutSection";
import { HeroContent, ImageCarouselConfig } from "./sanity/lib/sanityQueries";
import {
  BusinessInfo,
  FooterLink,
  NavigationSection,
  SocialLink,
} from "./components/ui/Footer/Footer";

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

// Default data objects
export const fallbackNavigationLinks: NavigationSection[] = [
  {
    title: "Products",
    links: [
      { label: "Coffee Beans", href: "/products/beans" },
      { label: "Brewing Equipment", href: "/products/equipment" },
      { label: "Merchandise", href: "/products/merch" },
      { label: "Gift Sets", href: "/products/gifts" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Story", href: "/story" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const fallbackSocialLinks: SocialLink[] = [
  {
    platform: "Facebook",
    href: "https://facebook.com",
    iconName: "Facebook",
  },
  {
    platform: "Instagram",
    href: "https://instagram.com",
    iconName: "Instagram",
  },
  { platform: "Twitter", href: "https://twitter.com", iconName: "Twitter" },
  {
    platform: "Email",
    href: "mailto:hello@islandcoffee.com",
    iconName: "Mail",
  },
];

export const fallbackBusinessInfo: BusinessInfo = {
  address: "123 Kona Coast Dr, Kailua-Kona, HI 96740",
  phone: "(808) 555-0123",
  email: "hello@islandcoffee.com",
  hours: "Mon-Sat: 6am-6pm, Sun: 7am-5pm",
};

export const fallbackLegalLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];

export const fallbackGalleryCarousels: ImageCarouselConfig[] = [
  {
    images: [
      { src: "/images/cafe-food.jpg", alt: "Cafe food" },
      { src: "/images/coffee-mug-merch.jpg", alt: "Coffee mug" },
      { src: "/images/island-coffee-hero.jpg", alt: "Island coffee" },
      {
        src: "/images/coffee-shop-atmosphere-1.jpg",
        alt: "Coffee shop atmosphere",
      },
      { src: "/images/espresso-machine.jpg", alt: "Espresso machine" },
    ],
    autoPlay: true,
    aspectRatio: "video",
    showDots: false,
    showArrows: false,
    direction: "ltr",
  },
  {
    images: [
      { src: "/images/cafe-food.jpg", alt: "Cafe food" },
      { src: "/images/cafe-sea-side-table.jpg", alt: "Seaside table" },
      { src: "/images/coffee-by-the-sea-1.jpg", alt: "Coffee by the sea" },
      {
        src: "/images/coffee-cup-1.jpg",
        alt: "Coffee cup",
        hover: {
          header: "Coffee",
          content: "Island Coffee Co. signature blend",
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
    ],
    autoPlay: true,
    aspectRatio: "video",
    showDots: false,
    showArrows: false,
    direction: "rtl",
  },
];
