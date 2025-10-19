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
      name: "imageCarousels",
      title: "Image Carousels",
      type: "array",
      of: [
        {
          type: "object",
          name: "imageCarousel",
          title: "Image Carousel",
          fields: [
            {
              name: "carouselName",
              title: "Carousel Name (for organization)",
              type: "string",
              description: "Optional name to help you organize carousels",
            },
            {
              name: "images",
              title: "Carousel Images",
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
                      name: "hoverHeader",
                      title: "Hover Header (optional)",
                      type: "string",
                    },
                    {
                      name: "hoverContent",
                      title: "Hover Content (optional)",
                      type: "string",
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
            },
            {
              name: "autoPlay",
              title: "Auto Play",
              type: "boolean",
              initialValue: true,
              description: "Enable automatic carousel rotation",
            },
            {
              name: "autoPlayInterval",
              title: "Auto Play Interval (ms)",
              type: "number",
              initialValue: 4000,
              description: "Time in milliseconds between slide transitions",
              hidden: ({ parent }) => !parent?.autoPlay,
            },
            {
              name: "aspectRatio",
              title: "Image Aspect Ratio",
              type: "string",
              options: {
                list: [
                  { title: "Square (1:1)", value: "square" },
                  { title: "Video (16:9)", value: "video" },
                  { title: "Portrait (3:4)", value: "portrait" },
                ],
                layout: "radio",
              },
              initialValue: "video",
            },
            {
              name: "showDots",
              title: "Show Navigation Dots",
              type: "boolean",
              initialValue: true,
            },
            {
              name: "showArrows",
              title: "Show Navigation Arrows",
              type: "boolean",
              initialValue: false,
            },
            {
              name: "direction",
              title: "Carousel Direction",
              type: "string",
              options: {
                list: [
                  { title: "Left to Right", value: "ltr" },
                  { title: "Right to Left", value: "rtl" },
                ],
                layout: "radio",
              },
              initialValue: "ltr",
            },
          ],
          preview: {
            select: {
              title: "carouselName",
              images: "images",
            },
            prepare({ title, images }) {
              const imageCount = images?.length || 0;
              return {
                title: title || "Unnamed Carousel",
                subtitle: `${imageCount} images`,
                media: images?.[0]?.image,
              };
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
      imageCarousels: "imageCarousels",
    },
    prepare({ title, imageCarousels }) {
      const carouselCount = imageCarousels?.length || 0;
      const totalImages = imageCarousels?.reduce(
        (sum: number, carousel: any) => sum + (carousel.images?.length || 0),
        0
      );
      return {
        title,
        subtitle: `${carouselCount} carousel${carouselCount !== 1 ? "s" : ""}, ${totalImages} total images`,
        media: imageCarousels?.[0]?.images?.[0]?.image,
      };
    },
  },
});
