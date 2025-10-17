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
  buttonLabel?: string;
  buttonLink?: string;
}

export interface SanityContentBlock {
  _id: string;
  title: string;
  description: string;
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt: string;
  };
  buttonLabel?: string;
  buttonLink?: string;
  order: number;
  type: "about" | "parallax";
}

export interface SanityHero {
  _id: string;
  title: string;
  subtitle: string;
  backgroundImage: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export interface SanityGalleryImage {
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  alt: string;
  hoverHeader?: string;
  hoverContent?: string;
}

export interface SanityGallery {
  _id: string;
  title?: string;
  images: SanityGalleryImage[];
}

export interface SanityBusinessInfo {
  address: string;
  phone: string;
  email: string;
  hours: string;
}

export interface SanitySocialLinks {
  facebook?: string;
  instagram?: string;
  twitter?: string;
}

export interface SanitySiteSettings {
  _id: string;
  brandName: string;
  tagline?: string;
  businessInfo?: SanityBusinessInfo;
  socialLinks?: SanitySocialLinks;
  showNewsletter: boolean;
}
