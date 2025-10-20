"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/base/button";
import { Input } from "@/components/ui/base/input";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { getIcon } from "@/lib/iconMapper";
import {
  fallbackBusinessInfo,
  fallbackLegalLinks,
  fallbackNavigationLinks,
  fallbackSocialLinks,
} from "@/fallbackContent";

interface FooterLink {
  label: string;
  href: string;
}

interface NavigationSection {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  platform: string;
  href: string;
  iconName: string;
}

interface BusinessInfo {
  address: string;
  phone: string;
  email: string;
  hours: string;
}

interface FooterProps {
  brandName?: string;
  brandHref?: string;
  tagline?: string;
  navigationLinks?: NavigationSection[];
  socialLinks?: SocialLink[];
  businessInfo?: BusinessInfo;
  showNewsletter?: boolean;
  showMap?: boolean;
  mapEmbedUrl?: string;
  copyrightText?: string;
  legalLinks?: FooterLink[];
  className?: string;
}

export default function Footer({
  brandName = "Brand",
  brandHref = "/",
  tagline,
  navigationLinks = fallbackNavigationLinks,
  socialLinks = fallbackSocialLinks,
  businessInfo = fallbackBusinessInfo,
  showNewsletter = false,
  showMap = false,
  mapEmbedUrl,
  copyrightText,
  legalLinks = fallbackLegalLinks,
  className = "",
}: FooterProps) {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    // Placeholder for newsletter signup logic
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setEmail("");
    setIsSubscribing(false);
  };

  const currentYear = new Date().getFullYear();
  const defaultCopyright = `© ${currentYear} ${brandName}. All rights reserved.`;

  return (
    <footer
      className={`w-full border-t bg-background text-foreground ${className}`}
    >
      <div className="my-10 px-4 sm:px-6 lg:px-8">
        {showMap && (
          <div>
            <h3 className="mb-4 text-center text-lg font-semibold">Visit Us</h3>
            <div className="w-full mx-auto bg-muted/80 rounded-lg p-4 mb-8 ">
              <div className="relative lg:max-w-3xl mx-auto aspect-video w-full overflow-hidden rounded-lg border bg-muted">
                {mapEmbedUrl ? (
                  <iframe
                    src={mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                    title="Location map"
                  />
                ) : (
                  <address className="flex h-full items-center justify-center">
                    <div className="text-center">
                      <MapPin className="mx-auto mb-2 h-12 w-12 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        Map coming soon
                      </p>
                    </div>
                  </address>
                )}
              </div>
            </div>
          </div>
        )}
        <div className="flex justify-between flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/2">
            <Link
              href={brandHref}
              className="text-xl font-bold hover:opacity-80"
            >
              {brandName}
            </Link>
            {tagline && (
              <p className="mt-2 text-sm text-muted-foreground">{tagline}</p>
            )}
            {businessInfo && (
              <div className="space-y-3 text-sm">
                <address className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    {businessInfo.address}
                  </span>
                </address>
                <address className="flex items-center gap-2">
                  <Phone className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                  <a
                    href={`tel:${businessInfo.phone}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {businessInfo.phone}
                  </a>
                </address>
                <address className="flex items-center gap-2">
                  <Mail className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                  <a
                    href={`mailto:${businessInfo.email}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {businessInfo.email}
                  </a>
                </address>
                <div className="flex items-start gap-2">
                  <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    {businessInfo.hours}
                  </span>
                </div>
                {socialLinks.length > 0 && (
                  <nav className="flex gap-3 pt-2" aria-label="Social links">
                    {socialLinks.map((social, index) => {
                      const Icon = getIcon(social.iconName);
                      if (!Icon) return null;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                          aria-label={social.platform}
                        >
                          <Icon className="h-5 w-5" />
                        </a>
                      );
                    })}
                  </nav>
                )}
              </div>
            )}
          </div>
          <div className="w-full lg:flex lg:flex-row-reverse lg:w-1/4 lg:justify-between lg:mr-20 space-y-4">
            {navigationLinks.map((section, index) => (
              <nav
                key={index}
                className="space-y-4"
                aria-label={`${section.title} navigation`}
              >
                <h3 className="text-sm font-semibold uppercase tracking-wider">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
          {showNewsletter && (
            <div className="space-y-4 w-full lg:w-1/4">
              <h3 className="text-sm font-semibold uppercase tracking-wider">
                Newsletter
              </h3>
              <p className="text-sm text-muted-foreground">
                Subscribe to get special offers and updates.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubscribing}
                  className="w-full"
                />
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubscribing}
                >
                  {isSubscribing ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>
            </div>
          )}
        </div>
      </div>

      <div className="border-t bg-muted/20">
        <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
            <p>{copyrightText || defaultCopyright}</p>
            {legalLinks.length > 0 && (
              <div className="flex flex-wrap justify-center gap-4">
                {legalLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

export type {
  FooterProps,
  FooterLink,
  NavigationSection,
  SocialLink,
  BusinessInfo,
};
