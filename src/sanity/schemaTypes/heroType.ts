import { defineField, defineType } from "sanity";

export const heroType = defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Main Headline",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      description: "Large background image for the hero section",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "primaryButtonText",
      title: "Main Button Text",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "primaryButtonLink",
      title: "Main Button Link",
      type: "string",
      description: "Where the main button should go (e.g., /shop, /about)",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "secondaryButtonText",
      title: "Second Button Text (optional)",
      type: "string",
    }),
    defineField({
      name: "secondaryButtonLink",
      title: "Second Button Link (optional)",
      type: "string",
      hidden: ({ parent }) => !parent?.secondaryButtonText,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
      media: "backgroundImage",
    },
  },
});
