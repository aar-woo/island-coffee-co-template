"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavMenu from "@/components/NavMenu";
import { type MenuItemData } from "@/components/NavMenuItem";
import Link from "next/link";

interface NavBarProps {
  brandName?: string;
  brandHref?: string;
  menuItems: MenuItemData[];
  className?: string;
}

export default function NavBar({
  brandName = "Brand",
  brandHref = "/",
  menuItems,
  className = "",
}: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${className}`}
    >
      <div className="flex h-16 items-center justify-between px-4">
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
                className="w-full"
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
