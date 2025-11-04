"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Coffee,
  CupSoda,
  HomeIcon,
  Info,
  Mail,
  Menu,
  Package,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/base/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/base/sheet";
import NavMenu from "@/components/ui/NavBar/NavMenu";
import { type MenuItemData } from "@/components/ui/NavBar/NavMenuItem";
import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const defaultMenuItems = [
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

const navBarVariants = cva("sticky top-0 z-50 w-full border-b transition-all", {
  variants: {
    variant: {
      default:
        "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
      solid: "bg-background",
      glass: "bg-transparent border-transparent backdrop-blur-sm",
      dark: "bg-slate-950 text-white backdrop-blur",
    },
    shadow: {
      none: "",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
    },
    bordered: {
      true: "border-b",
      false: "border-none",
    },
  },
  defaultVariants: {
    variant: "default",
    shadow: "none",
    bordered: false,
  },
});

interface NavBarProps extends VariantProps<typeof navBarVariants> {
  brandName?: string;
  brandHref?: string;
  menuItems?: MenuItemData[];
  className?: string;
}

export default function NavBar({
  brandName = "Brand",
  brandHref = "/",
  menuItems = defaultMenuItems,
  variant,
  shadow,
  bordered,
  className = "",
}: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={cn(navBarVariants({ variant, shadow, bordered }), className)}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href={brandHref} className="text-xl font-bold hover:opacity-80">
          {brandName}
        </Link>

        <div className="hidden md:block">
          <NavMenu items={menuItems} orientation="horizontal" />
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Toggle menu">
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[200px]"
            onOpenAutoFocus={(e) => e.preventDefault()}
          >
            <SheetHeader>
              <SheetTitle>{brandName}</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <NavMenu
                items={menuItems}
                orientation="vertical"
                className="w-ful"
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
