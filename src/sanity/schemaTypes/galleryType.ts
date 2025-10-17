import { defineField, defineType } from "sanity";

export const galleryType = defineType({
  name: "gallery",
  title: "Gallery",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Gallery Title",
      type: "string",
      initialValue: "Gallery",
    }),
    defineField({
      name: "images",
      title: "Gallery Images",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
              validation: (rule) => rule.required(),
            },
            {
              name: "alt",
              title: "Image Description",
              type: "string",
              validation: (rule) => rule.required(),
            },
            {
              name: "caption",
              title: "Caption (optional)",
              type: "string",
              description: "Shows when hovering over the image",
            },
          ],
          preview: {
            select: {
              title: "alt",
              media: "image",
            },
          },
        },
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: "title",
      images: "images",
    },
    prepare({ title, images }) {
      const imageCount = images?.length || 0;
      return {
        title,
        subtitle: `${imageCount} images`,
        media: images?.[0]?.image,
      };
    },
  },
});
