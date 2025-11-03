import AboutSection from "@/components/ui/About/AboutSection";
import { fetchContentBlocks } from "@/sanity/lib/sanityQueries";

export default async function AboutPage() {
  const contentBlocks = await fetchContentBlocks("about");
  return (
    <div>
      <AboutSection
        title="About Us"
        description="We are a small team of coffee lovers who are passionate about coffee and the community"
        contentBlocks={contentBlocks}
      />
    </div>
  );
}
