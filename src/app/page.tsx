"use client";
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
import ImageCarousel from "@/components/ui/ImageCarousel/ImageCarousel";
import Gallery from "@/components/ui/Gallery/Gallery";

const menuItems = [
  {
    label: "Home",
    href: "/",
    icon: HomeIcon,
  },
  { label: "About", href: "/about", icon: Info },
  {
    label: "Products",
    children: [
      {
        label: "Coffee Beans",
        href: "/products/beans",
        description: "Premium single-origin beans",
        icon: Coffee,
      },
      {
        label: "Brewing Equipment",
        href: "/products/equipment",
        description: "Quality brewing tools",
        icon: CupSoda,
      },
    ],
    icon: Package,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: Mail,
  },
];

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

export default function Home() {
  return (
    <div className="font-sans">
      <header>
        <NavBar menuItems={menuItems} brandName="Island Coffee Co." />
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
        <Gallery />
      </main>
      <Footer
        brandName="Island Coffee Co."
        brandHref="/"
        tagline="Premium coffee beans locally grown in Hawai'i"
        navigationLinks={[
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
        ]}
        socialLinks={[
          {
            platform: "Facebook",
            href: "https://facebook.com",
            icon: Facebook,
          },
          {
            platform: "Instagram",
            href: "https://instagram.com",
            icon: Instagram,
          },
          { platform: "Twitter", href: "https://twitter.com", icon: Twitter },
          {
            platform: "Email",
            href: "mailto:hello@islandcoffee.com",
            icon: Mail,
          },
        ]}
        businessInfo={{
          address: "123 Kona Coast Dr, Kailua-Kona, HI 96740",
          phone: "(808) 555-0123",
          email: "hello@islandcoffee.com",
          hours: "Mon-Sat: 6am-6pm, Sun: 7am-5pm",
        }}
        showNewsletter={true}
        showMap={true}
        legalLinks={[
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Service", href: "/terms" },
          { label: "Cookie Policy", href: "/cookies" },
        ]}
      />
    </div>
  );
}
