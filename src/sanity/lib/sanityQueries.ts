import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { SanityServiceCard } from "../interfaces";
import { Service } from "@/components/ui/Services/ServiceCard";

const SERVICE_CARDS_QUERY = `*[_type == "serviceCard"] | order(order asc) {
  _id,
  title,
  subtitle,
  image {
    asset,
    alt
  },
  primaryCta,
  secondaryCta
}`;

export async function fetchServiceCardContent(): Promise<Service[]> {
  try {
    const sanityServiceCards: SanityServiceCard[] = await client.fetch(
      SERVICE_CARDS_QUERY,
      {},
      {
        next: { revalidate: 60 }, // Revalidate every 60 seconds
      }
    );
    if (sanityServiceCards && sanityServiceCards.length > 0) {
      return sanityServiceCards.map((card) => ({
        image: {
          src: urlFor(card.image.asset).width(800).height(600).url(),
          alt: card.image.alt,
        },
        title: card.title,
        subtitle: card.subtitle,
        primaryCta: card.primaryCta,
        secondaryCta: card.secondaryCta,
      }));
    }

    return [];
  } catch (error) {
    console.error("Failed to fetch service cards from Sanity:", error);
    return [];
  }
}
