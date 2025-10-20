import { defineField, defineType } from "sanity";

export const serviceCardType = defineType({
  name: "serviceCard",
  title: "Service Cards",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
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
          title: "Alternative text",
          validation: (rule) => rule.required(),
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "primaryCta",
      title: "Primary Call to Action",
      type: "object",
      fields: [
        {
          name: "label",
          title: "Button Label",
          type: "string",
          validation: (rule) => rule.required(),
        },
        {
          name: "href",
          title: "Link URL",
          type: "string",
          validation: (rule) => rule.required(),
        },
        {
          name: "variant",
          title: "Button Variant",
          type: "string",
          options: {
            list: [
              { title: "Default", value: "default" },
              { title: "Outline", value: "outline" },
              { title: "Oval", value: "oval" },
            ],
          },
          initialValue: "default",
        },
      ],
    }),
    defineField({
      name: "secondaryCta",
      title: "Secondary Call to Action",
      type: "object",
      fields: [
        {
          name: "label",
          title: "Button Label",
          type: "string",
          validation: (rule) => rule.required(),
        },
        {
          name: "href",
          title: "Link URL",
          type: "string",
          validation: (rule) => rule.required(),
        },
        {
          name: "variant",
          title: "Button Variant",
          type: "string",
          options: {
            list: [
              { title: "Default", value: "default" },
              { title: "Outline", value: "outline" },
              { title: "Oval", value: "oval" },
            ],
          },
          initialValue: "outline",
        },
      ],
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      validation: (rule) => rule.required().min(0),
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
