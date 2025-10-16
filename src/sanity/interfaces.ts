export interface SanityServiceCard {
  _id: string;
  title: string;
  subtitle: string;
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt: string;
  };
  primaryCta?: {
    label: string;
    href: string;
    variant?: "default" | "outline" | "oval";
  };
  secondaryCta?: {
    label: string;
    href: string;
    variant?: "default" | "outline" | "oval";
  };
}
