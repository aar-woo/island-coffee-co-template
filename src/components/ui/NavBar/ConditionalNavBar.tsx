"use client";

import { usePathname } from "next/navigation";
import NavBar from "./NavBar";

interface ConditionalNavBarProps {
  brandName: string;
}

export default function ConditionalNavBar({
  brandName,
}: ConditionalNavBarProps) {
  const pathname = usePathname();

  if (pathname?.startsWith("/studio")) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50">
      <NavBar brandName={brandName} />
    </header>
  );
}
