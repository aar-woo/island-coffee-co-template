import {
  NavigationMenuContent,
  NavigationMenuItem as NavMenuItemPrimitive,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface MenuItemData {
  label: string;
  href?: string;
  children?: {
    label: string;
    href: string;
    description?: string;
  }[];
}

interface NavMenuItemProps {
  item: MenuItemData;
  orientation?: "horizontal" | "vertical";
}

export default function NavMenuItem({
  item,
  orientation = "horizontal",
}: NavMenuItemProps) {
  const isVertical = orientation === "vertical";

  if (item.children) {
    return (
      <NavMenuItemPrimitive className={cn(isVertical && "w-full")}>
        <NavigationMenuTrigger
          className={cn(isVertical && "w-full justify-start")}
        >
          {item.label}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul
            className={cn(
              "gap-3 p-4",
              isVertical
                ? "w-full grid-cols-1"
                : "grid w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]"
            )}
          >
            {item.children.map((child, childIndex) => (
              <li key={childIndex}>
                <NavigationMenuLink asChild>
                  <Link
                    href={child.href}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">
                      {child.label}
                    </div>
                    {child.description && (
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {child.description}
                      </p>
                    )}
                  </Link>
                </NavigationMenuLink>
              </li>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavMenuItemPrimitive>
    );
  }

  return (
    <NavMenuItemPrimitive className={cn(isVertical && "w-full")}>
      <NavigationMenuLink asChild>
        <Link
          href={item.href || "#"}
          className={cn(
            "px-4 py-2 font-medium",
            isVertical && "w-full flex items-start "
          )}
        >
          {item.label}
        </Link>
      </NavigationMenuLink>
    </NavMenuItemPrimitive>
  );
}
