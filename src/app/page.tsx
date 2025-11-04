import Hero from "@/components/ui/Hero/Hero";
import ServicesSection from "@/components/ui/Services/ServicesSection";
import Footer from "@/components/ui/Footer/Footer";
import AboutSection from "@/components/ui/About/AboutSection";
import Parallax from "@/components/ui/Parallax/Parallax";
import {
  fetchServiceCardContent,
  fetchHeroContent,
  fetchContentBlocks,
  fetchParallaxSections,
  fetchGalleryContent,
  fetchSiteSettings,
} from "@/sanity/lib/sanityQueries";
import {
  fallbackHeroContent,
  fallbackContentBlocks,
  fallbackGalleryCarousels,
} from "@/fallbackContent";
import Gallery from "@/components/ui/Gallery/Gallery";

export default async function Home() {
  const [
    siteSettings,
    heroContent,
    serviceCards,
    aboutBlocks,
    parallaxSections,
    galleryContent,
  ] = await Promise.all([
    fetchSiteSettings(),
    fetchHeroContent(),
    fetchServiceCardContent(),
    fetchContentBlocks("about"),
    fetchParallaxSections(),
    fetchGalleryContent(),
  ]);

  const brandName = siteSettings?.brandName || "Island Coffee Co.";
  const tagline =
    siteSettings?.tagline || "Premium coffee beans locally grown in Hawai'i";
  const socialLinks = Object.entries(siteSettings?.socialLinks || {}).map(
    ([key, value]) => ({
      platform: key,
      href: value,
      iconName: key,
    })
  );

  if (siteSettings?.businessInfo?.email) {
    socialLinks.push({
      platform: "Email",
      href: `mailto:${siteSettings?.businessInfo?.email}`,
      iconName: "mail",
    });
  }

  const hero = heroContent || fallbackHeroContent;
  const contentBlocks =
    aboutBlocks.length > 0 ? aboutBlocks : fallbackContentBlocks;

  return (
    <div className="font-sans">
      <main>
        <Hero
          title={hero.title}
          subtitle={hero.subtitle}
          background={hero.background}
          primaryCta={hero.primaryCta}
          secondaryCta={hero.secondaryCta}
          overlayOpacity={hero.overlayOpacity}
        />
        <ServicesSection
          title="What We Offer"
          description="Discover our range of premium coffee products, delicious food, and unique merchandise"
          services={serviceCards}
        />
        <AboutSection
          title="About Us"
          description="We are a small team of coffee lovers who are passionate about coffee and the community"
          contentBlocks={contentBlocks}
        />
        {parallaxSections.length > 0 && (
          <Parallax sections={parallaxSections} />
        )}
        <section className="w-full bg-background my-10 px-4 sm:px-6 lg:px-8">
          {galleryContent.length > 0 && (
            <Gallery
              title={"Gallery"}
              imageCarousels={
                galleryContent[0].imageCarousels || fallbackGalleryCarousels
              }
            />
          )}
        </section>
      </main>
      <Footer
        brandName={brandName}
        brandHref="/"
        showMap={true}
        tagline={tagline}
        socialLinks={socialLinks.length > 0 ? socialLinks : undefined}
        businessInfo={siteSettings?.businessInfo}
        showNewsletter={siteSettings?.showNewsletter}
        mapEmbedUrl={`https://www.google.com/maps/embed/v1/place?q=Ala%20moana&key=${process.env.GOOGLE_MAPS_EMBED_API_KEY}`}
      />
    </div>
  );
}
