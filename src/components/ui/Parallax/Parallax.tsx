import ParallaxSection, { ParallaxSectionProps } from "./ParallaxSection";
interface ParallaxProps {
  sections: ParallaxSectionProps[];
}

export default function Parallax({ sections }: ParallaxProps) {
  return (
    <div>
      {sections.map((section) => (
        <ParallaxSection
          key={section.title}
          title={section.title}
          description={section.description}
          image={section.image}
        />
      ))}
    </div>
  );
}
