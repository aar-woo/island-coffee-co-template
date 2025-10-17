import NavBar from "@/components/ui/NavBar/NavBar";
import Hero from "@/components/ui/Hero/Hero";
import ServicesSection from "@/components/ui/Services/ServicesSection";
import Footer from "@/components/ui/Footer/Footer";
import AboutSection from "@/components/ui/About/AboutSection";
import Parallax from "@/components/ui/Parallax/Parallax";
import ImageCarousel from "@/components/ui/ImageCarousel/ImageCarousel";
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
  fallbackGalleryImages,
} from "@/fallbackContent";

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
  const galleryImages = galleryContent?.images || fallbackGalleryImages;
  const galleryTitle = galleryContent?.title || "Gallery";

  return (
    <div className="font-sans">
      <header className="sticky top-0 z-50">
        <NavBar brandName={brandName} />
      </header>
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
          <div className="max-w-7xl mx-auto flex justify-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {galleryTitle}
            </h2>
          </div>
          <div>
            <ImageCarousel
              images={galleryImages.slice(0, 5)}
              autoPlay={true}
              aspectRatio="video"
              showArrows={false}
              imagesPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
            />
            {galleryImages.length > 5 && (
              <ImageCarousel
                images={galleryImages.slice(5)}
                autoPlay={true}
                direction="rtl"
                aspectRatio="video"
                showArrows={false}
                imagesPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
              />
            )}
          </div>
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
      />
    </div>
  );
}
