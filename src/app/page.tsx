"use client";
import Image from "next/image";
import NavBar from "@/components/ui/NavBar/NavBar";
import {
  Home as HomeIcon,
  Package,
  Info,
  Coffee,
  CupSoda,
  Mail,
} from "lucide-react";
import Hero from "@/components/ui/Hero/Hero";

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
      </main>
      <footer className="flex gap-6 flex-wrap items-center justify-center py-8">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
