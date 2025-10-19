import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import {
  SanityServiceCard,
  SanityContentBlock,
  SanityHero,
  SanityGallery,
  SanitySiteSettings,
  SanityGalleryImage,
} from "../interfaces";
import { Service } from "@/components/ui/Services/ServiceCard";
import { ContentBlockData } from "@/components/ui/About/AboutSection";
import type { ParallaxSectionProps } from "@/components/ui/Parallax/ParallaxSection";

const SERVICE_CARDS_QUERY = `*[_type == "serviceCard"] | order(order asc) {
  _id,
  title,
  subtitle,
  image {
    asset,
    alt
  },
  buttonLabel,
  buttonLink
}`;

export async function fetchServiceCardContent(): Promise<Service[]> {
  try {
    const sanityServiceCards: SanityServiceCard[] = await client.fetch(
      SERVICE_CARDS_QUERY,
      {},
      {
        next: { revalidate: 60 },
      }
    );
    if (sanityServiceCards && sanityServiceCards.length > 0) {
      return sanityServiceCards.map((card) => ({
        image: {
          src: urlFor(card.image.asset).width(800).height(600).url(),
          alt: card.image.alt,
        },
        title: card.title,
        subtitle: card.subtitle,
        primaryCta:
          card.buttonLabel && card.buttonLink
            ? {
                label: card.buttonLabel,
                href: card.buttonLink,
                variant: "default" as const,
              }
            : undefined,
      }));
    }

    return [];
  } catch (error) {
    console.error("Failed to fetch service cards from Sanity:", error);
    return [];
  }
}

// Content Blocks Query
const CONTENT_BLOCKS_QUERY = `*[_type == "contentBlock"] | order(order asc) {
  _id,
  title,
  description,
  image {
    asset,
    alt
  },
  buttonLabel,
  buttonLink,
  order,
  type
}`;

export async function fetchContentBlocks(
  type?: "about" | "parallax"
): Promise<ContentBlockData[]> {
  try {
    const query = type
      ? `*[_type == "contentBlock" && type == "${type}"] | order(order asc) {
  _id,
  title,
  description,
  image {
    asset,
    alt
  },
  buttonLabel,
  buttonLink,
  order,
  type
}`
      : CONTENT_BLOCKS_QUERY;

    const sanityContentBlocks: SanityContentBlock[] = await client.fetch(
      query,
      {},
      {
        next: { revalidate: 60 },
      }
    );

    if (sanityContentBlocks && sanityContentBlocks.length > 0) {
      return sanityContentBlocks.map((block) => ({
        image: {
          src: urlFor(block.image.asset).width(800).height(600).url(),
          alt: block.image.alt,
          aspectRatio: "video" as const,
          objectPosition: "center" as const,
        },
        title: block.title,
        description: block.description,
        primaryCta:
          block.buttonLabel && block.buttonLink
            ? {
                label: block.buttonLabel,
                href: block.buttonLink,
                variant: "default" as const,
              }
            : undefined,
      }));
    }

    return [];
  } catch (error) {
    console.error("Failed to fetch content blocks from Sanity:", error);
    return [];
  }
}

// Parallax sections
export async function fetchParallaxSections(): Promise<ParallaxSectionProps[]> {
  try {
    const query = `*[_type == "contentBlock" && type == "parallax"] | order(order asc) {
  _id,
  title,
  description,
  image {
    asset,
    alt
  },
  buttonLabel,
  buttonLink,
  order,
  type
}`;

    const sanityContentBlocks: SanityContentBlock[] = await client.fetch(
      query,
      {},
      {
        next: { revalidate: 60 },
      }
    );

    if (sanityContentBlocks && sanityContentBlocks.length > 0) {
      return sanityContentBlocks.map((block) => ({
        image: {
          src: urlFor(block.image.asset).width(800).height(600).url(),
          alt: block.image.alt,
        },
        title: block.title,
        description: block.description,
      }));
    }

    return [];
  } catch (error) {
    console.error("Failed to fetch parallax sections from Sanity:", error);
    return [];
  }
}

// Hero Query
const HERO_QUERY = `*[_type == "hero"][0] {
  _id,
  title,
  subtitle,
  backgroundMedia {
    mediaType,
    image {
      asset
    },
    video {
      asset-> {
        url
      }
    }
  },
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink
}`;

export interface HeroContent {
  title: string;
  subtitle: string;
  background: { type: "image" | "video"; src: string };
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  overlayOpacity?: number;
}

export async function fetchHeroContent(): Promise<HeroContent | null> {
  try {
    const sanityHero: SanityHero = await client.fetch(
      HERO_QUERY,
      {},
      {
        next: { revalidate: 60 },
      }
    );

    if (!sanityHero || !sanityHero.backgroundMedia) {
      return null;
    }

    const { backgroundMedia } = sanityHero;
    let backgroundSrc: string = "";

    if (backgroundMedia.mediaType === "image" && backgroundMedia.image?.asset) {
      backgroundSrc = urlFor(backgroundMedia.image.asset).width(1920).url();
    } else if (
      backgroundMedia.mediaType === "video" &&
      backgroundMedia.video?.asset
    ) {
      backgroundSrc = backgroundMedia.video.asset.url;
    }

    if (!backgroundSrc) {
      return null;
    }

    return {
      title: sanityHero.title,
      subtitle: sanityHero.subtitle,
      background: {
        type: backgroundMedia.mediaType,
        src: backgroundSrc,
      },
      primaryCta: {
        label: sanityHero.primaryButtonText,
        href: sanityHero.primaryButtonLink,
      },
      secondaryCta:
        sanityHero.secondaryButtonText && sanityHero.secondaryButtonLink
          ? {
              label: sanityHero.secondaryButtonText,
              href: sanityHero.secondaryButtonLink,
            }
          : undefined,
      overlayOpacity: 0.5,
    };
  } catch (error) {
    console.error("Failed to fetch hero content from Sanity:", error);
    return null;
  }
}

// Gallery Query
const GALLERY_QUERY = `*[_type == "gallery"] {
  _id,
  title,
  imageCarousels[] {
    carouselName,
    images[] {
      image {
        asset
      },
      alt,
      hoverHeader,
      hoverContent
    },
    autoPlay,
    autoPlayInterval,
    aspectRatio,
    showDots,
    showArrows,
    direction,
  }
}`;

export interface GalleryImage {
  src: string;
  alt: string;
  hover?: {
    header?: string;
    content?: string;
  };
}

export interface ImageCarouselConfig {
  images: GalleryImage[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  aspectRatio?: "square" | "video" | "portrait";
  showDots?: boolean;
  showArrows?: boolean;
  direction?: "ltr" | "rtl";
}

export interface GalleryContent {
  title?: string;
  imageCarousels: ImageCarouselConfig[];
}

export async function fetchGalleryContent(): Promise<GalleryContent[]> {
  try {
    const sanityGalleries: SanityGallery[] = await client.fetch(
      GALLERY_QUERY,
      {},
      {
        next: { revalidate: 60 },
      }
    );

    if (!sanityGalleries || sanityGalleries.length === 0) {
      return [];
    }

    return sanityGalleries.map((gallery) => ({
      title: gallery.title,
      imageCarousels: gallery.imageCarousels?.map((carousel) => ({
        images: carousel.images.map((img: SanityGalleryImage) => ({
          src: urlFor(img.image.asset).width(800).height(600).url(),
          alt: img.alt,
          hover:
            img.hoverHeader || img.hoverContent
              ? {
                  header: img.hoverHeader || undefined,
                  content: img.hoverContent || undefined,
                }
              : undefined,
        })),
        autoPlay: carousel.autoPlay ?? true,
        autoPlayInterval: carousel.autoPlayInterval ?? 4000,
        aspectRatio: carousel.aspectRatio ?? "video",
        showDots: carousel.showDots ?? true,
        showArrows: carousel.showArrows ?? false,
        direction: carousel.direction ?? "ltr",
      })),
    }));
  } catch (error) {
    console.error("Failed to fetch gallery content from Sanity:", error);
    return [];
  }
}

// Site Settings Query
const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0] {
  _id,
  brandName,
  tagline,
  businessInfo,
  socialLinks,
  showNewsletter
}`;

export async function fetchSiteSettings(): Promise<SanitySiteSettings | null> {
  try {
    const settings: SanitySiteSettings = await client.fetch(
      SITE_SETTINGS_QUERY,
      {},
      {
        next: { revalidate: 300 },
      }
    );

    return settings || null;
  } catch (error) {
    console.error("Failed to fetch site settings from Sanity:", error);
    return null;
  }
}
