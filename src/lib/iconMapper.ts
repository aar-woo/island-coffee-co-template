import {
  Home,
  Info,
  Package,
  Coffee,
  CupSoda,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Phone,
  MapPin,
  Clock,
  type LucideIcon,
} from "lucide-react";

// Map of icon names to Lucide icon components
const iconMap: Record<string, LucideIcon> = {
  Home,
  HomeIcon: Home,
  Info,
  Package,
  Coffee,
  CupSoda,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Phone,
  MapPin,
  Clock,
};

/**
 * Maps an icon name string to a Lucide icon component
 * @param iconName - The name of the icon (e.g., "Home", "Coffee")
 * @returns The Lucide icon component or undefined if not found
 */
export function getIcon(iconName?: string): LucideIcon | undefined {
  if (!iconName) return undefined;
  return iconMap[iconName];
}
