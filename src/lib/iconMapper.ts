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
  home: Home,
  info: Info,
  package: Package,
  coffee: Coffee,
  cupSoda: CupSoda,
  mail: Mail,
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
  phone: Phone,
  mapPin: MapPin,
  clock: Clock,
};

/**
 * Maps an icon name string to a Lucide icon component
 * @param iconName - The name of the icon (e.g., "Home", "Coffee")
 * @returns The Lucide icon component or undefined if not found
 */
export function getIcon(iconName?: string): LucideIcon | undefined {
  if (!iconName) return undefined;
  return iconMap[iconName.toLowerCase()];
}
