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
          className={cn(
            isVertical && "w-full justify-start flex items-center leading-none"
          )}
        >
          {item.label}
        </NavigationMenuTrigger>
        <NavigationMenuContent className={"z-50 absolute"}>
          <ul
            className={cn(
              "flex flex-col wrap align-start gap-3 py-3",
              isVertical ? "w-full" : "w-[250px] md:flex-row md:flex-wrap"
            )}
          >
            {item.children.map((child, childIndex) => (
              <li key={childIndex} className="w-full">
                <NavigationMenuLink asChild>
                  <Link href={child.href}>
                    <div className="text-sm font-medium leading-none">
                      {child.label}
                    </div>
                    {child.description && (
                      <p className="line-clamp-2 text-sm text-muted-foreground">
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
