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
      name: "backgroundMedia",
      title: "Background Media",
      type: "object",
      description: "Background image or video for the hero section",
      fields: [
        {
          name: "mediaType",
          title: "Media Type",
          type: "string",
          options: {
            list: [
              { title: "Image", value: "image" },
              { title: "Video", value: "video" },
            ],
            layout: "radio",
          },
          initialValue: "image",
          validation: (rule) => rule.required(),
        },
        {
          name: "image",
          title: "Background Image",
          type: "image",
          options: {
            hotspot: true,
          },
          hidden: ({ parent }) => parent?.mediaType !== "image",
          validation: (rule) =>
            rule.custom((image, context) => {
              const parent = context.parent as { mediaType?: string };
              if (parent?.mediaType === "image" && !image) {
                return "Image is required when media type is Image";
              }
              return true;
            }),
        },
        {
          name: "video",
          title: "Background Video",
          type: "file",
          options: {
            accept: "video/*",
          },
          hidden: ({ parent }) => parent?.mediaType !== "video",
          validation: (rule) =>
            rule.custom((video, context) => {
              const parent = context.parent as { mediaType?: string };
              if (parent?.mediaType === "video" && !video) {
                return "Video is required when media type is Video";
              }
              return true;
            }),
        },
      ],
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
      media: "backgroundMedia.image",
      mediaType: "backgroundMedia.mediaType",
    },
    prepare(selection) {
      const { title, subtitle, media, mediaType } = selection;
      return {
        title,
        subtitle: `${subtitle} (${mediaType === "video" ? "Video" : "Image"})`,
        media,
      };
    },
  },
});
