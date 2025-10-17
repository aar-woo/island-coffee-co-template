import { defineField, defineType } from "sanity";

export const contentBlockType = defineType({
  name: "contentBlock",
  title: "Content Block",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Image Description (for accessibility)",
          validation: (rule) => rule.required(),
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "buttonLabel",
      title: "Button Text (optional)",
      type: "string",
      description: "Leave empty if you don't want a button",
    }),
    defineField({
      name: "buttonLink",
      title: "Button Link (optional)",
      type: "string",
      description: "Where the button should go (e.g., /about, /contact)",
      hidden: ({ parent }) => !parent?.buttonLabel,
    }),
    defineField({
      name: "type",
      title: "Section Type",
      type: "string",
      options: {
        list: [
          { title: "About Section", value: "about" },
          { title: "Parallax Section", value: "parallax" },
        ],
      },
      initialValue: "about",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first (e.g., 1, 2, 3)",
      validation: (rule) => rule.required().min(0),
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "type",
      media: "image",
    },
  },
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
