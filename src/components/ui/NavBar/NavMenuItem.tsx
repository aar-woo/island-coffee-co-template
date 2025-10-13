import {
  NavigationMenuContent,
  NavigationMenuItem as NavMenuItemPrimitive,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/base/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export interface MenuItemData {
  label: string;
  href?: string;
  icon?: LucideIcon;

  children?: {
    label: string;
    href: string;
    description?: string;
    icon?: LucideIcon;
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
    const Icon = item.icon;

    return (
      <NavMenuItemPrimitive className={cn(isVertical && "w-full")}>
        <NavigationMenuTrigger
          className={cn(
            "leading-none group/trigger",
            isVertical &&
              "w-full justify-start no-wrap items-center leading-none"
          )}
        >
          {Icon && (
            <Icon className="mr-2 h-4 w-4 text-muted-foreground transition-colors group-hover/trigger:text-foreground group-data-[state=open]/trigger:text-foreground" />
          )}
          {item.label}
        </NavigationMenuTrigger>
        <NavigationMenuContent className={cn(isVertical && "z-50 absolute")}>
          <ul
            className={cn(
              "flex flex-col wrap align-start gap-3 py-3 relative",
              isVertical ? "w-full" : "w-[250px]"
            )}
          >
            {item.children.map((child, childIndex) => {
              const ChildIcon = child.icon;
              return (
                <li key={childIndex} className="w-full">
                  <NavigationMenuLink asChild className="group/child-link">
                    <Link
                      href={child.href}
                      className="flex items-start gap-2 p-3 text-sm leading-none rounded-md hover:bg-accent transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 font-medium no-wrap text-sm leading-none">
                          {ChildIcon && (
                            <ChildIcon className="h-4 w-4 text-muted-foreground group-hover/child-link:text-foreground" />
                          )}
                          {child.label}
                        </div>
                        {child.description && (
                          <p className="mt-1 line-clamp-2 text-muted-foreground">
                            {child.description}
                          </p>
                        )}
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
              );
            })}
          </ul>
        </NavigationMenuContent>
      </NavMenuItemPrimitive>
    );
  }

  const Icon = item.icon;

  return (
    <NavMenuItemPrimitive className={cn(isVertical && "w-full")}>
      <NavigationMenuLink asChild>
        <Link
          href={item.href || "#"}
          className={cn(
            "group/link px-4 py-2 font-medium inline-flex no-wrap flex-row items-center leading-none gap-2",
            isVertical && "w-full justify-start"
          )}
        >
          {Icon && (
            <Icon className="h-4 w-4 text-muted-foreground transition-colors group-hover/link:text-foreground" />
          )}
          {item.label}
        </Link>
      </NavigationMenuLink>
    </NavMenuItemPrimitive>
  );
}
