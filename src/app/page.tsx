import NavBar from "@/components/ui/NavBar/NavBar";
import {
  Home as HomeIcon,
  Package,
  Info,
  Coffee,
  CupSoda,
  Mail,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import Hero from "@/components/ui/Hero/Hero";
import ServicesSection from "@/components/ui/Services/ServicesSection";
import Footer from "@/components/ui/Footer/Footer";
import Gallery from "@/components/ui/Gallery/Gallery";
import AboutSection, {
  ContentBlockData,
} from "@/components/ui/About/AboutSection";
import Parallax from "@/components/ui/Parallax/Parallax";

const services = [
  {
    image: {
      src: "/images/island-coffee-hero.jpg",
      alt: "Specialty coffee being brewed",
    },
    title: "Specialty Coffee",
    subtitle:
      "Experience the finest locally-sourced Hawaiian coffee beans, roasted to perfection with rich flavors and aromas.",
  },
  {
    image: {
      src: "/images/cafe-food.jpg",
      alt: "Delicious pastries and food",
    },
    title: "Delicious Food",
    subtitle:
      "Pair your coffee with our selection of fresh pastries, sandwiches, and local Hawaiian treats made daily. You'll want to try everything on the menu.",
  },
  {
    image: {
      src: "/images/coffee-mug-merch.jpg",
      alt: "Coffee merchandise and brewing equipment",
    },
    title: "Merchandise",
    subtitle:
      "Take home our premium brewing equipment, branded merchandise, and gift sets for the coffee lover in your life.",
  },
];

const images = [
  { src: "/images/cafe-food.jpg", alt: "Cafe food" },
  { src: "/images/coffee-mug-merch.jpg", alt: "Coffee mug" },
  { src: "/images/island-coffee-hero.jpg", alt: "Island coffee" },
  { src: "/images/island-coffee-hero.jpg", alt: "Island coffee" },
];

const contentBlocks: ContentBlockData[] = [
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

const parallaxImages = [
  {
    image: {
      src: "/images/coffee-farm.jpg",
      alt: "Our coffee farm in Hawaii",
    },
    title: "Our Story",
    description:
      "Founded in 2010, Island Coffee Co. started as a small family farm with a passion for growing exceptional coffee. Today, we maintain that same dedication to quality while sharing our love of Hawaiian coffee with the world.",
  },
  {
    image: {
      src: "/images/coffee-roasting-machine.jpg",
      alt: "Coffee roasting process",
    },
    title: "Farm to Cup",
    description:
      "We control every step of the process - from carefully cultivating our coffee plants to roasting the beans to perfection. This hands-on approach ensures the highest quality in every cup.",
  },
  {
    image: {
      src: "/images/cafe-workers.jpg",
      alt: "Coffee shop community",
    },
    title: "Community First",
    description:
      "More than just a coffee company, we're proud to be part of the local Hawaiian community. We work closely with local farmers and businesses, creating sustainable partnerships that benefit our entire island.",
  },
];

export default async function Home() {
  return (
    <div className="font-sans">
      <header className="sticky top-0 z-50">
        <NavBar brandName="Island Coffee Co." />
      </header>
      <main>
        <Hero
          title="Welcome to Island Coffee Co."
          subtitle="Discover premium coffee beans locally grown in Hawai'i"
          background={{
            type: "video",
            src: "/videos/coffee-shop.mp4",
          }}
          primaryCta={{ label: "Shop Now", href: "/shop" }}
          secondaryCta={{ label: "Learn More", href: "/about" }}
        />
        <ServicesSection
          title="What We Offer"
          description="Discover our range of premium coffee products, delicious food, and unique merchandise"
          services={services}
        />
        <AboutSection
          title="About Us"
          description="We are a small team of coffee lovers who are passionate about coffee and the community"
          contentBlocks={contentBlocks}
        />
        <Parallax sections={parallaxImages} />
        <Gallery />
      </main>
      <Footer
        brandName="Island Coffee Co."
        brandHref="/"
        tagline="Premium coffee beans locally grown in Hawai'i"
      />
    </div>
  );
}
