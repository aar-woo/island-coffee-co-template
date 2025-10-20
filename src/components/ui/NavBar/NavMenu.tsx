import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/base/navigation-menu";
import NavMenuItem, {
  type MenuItemData,
} from "@/components/ui/NavBar/NavMenuItem";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface NavMenuProps {
  items: MenuItemData[];
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export default function NavMenu({
  items,
  orientation = "horizontal",
  className,
}: NavMenuProps) {
  const pathname = usePathname();

  return (
    <NavigationMenu
      orientation={orientation}
      viewport={orientation === "horizontal"}
      className={cn(
        orientation === "vertical" && "w-full !max-w-full block",
        className
      )}
    >
      <NavigationMenuList
        className={cn(
          orientation === "vertical" &&
            "w-full flex-col items-start space-x-0 space-y-2 justify-start"
        )}
      >
        {items?.map((item, index) => (
          <NavMenuItem
            key={index}
            item={item}
            orientation={orientation}
            isActive={pathname === item.href}
          />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
