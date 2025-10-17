import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "brandName",
      title: "Brand Name",
      type: "string",
      description: "Your company/site name",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "text",
      description: "Short description shown in footer",
    }),

    // Business Information
    defineField({
      name: "businessInfo",
      title: "Business Information",
      type: "object",
      fields: [
        {
          name: "address",
          title: "Address",
          type: "text",
          validation: (rule) => rule.required(),
        },
        {
          name: "phone",
          title: "Phone",
          type: "string",
          validation: (rule) => rule.required(),
        },
        {
          name: "email",
          title: "Email",
          type: "string",
          validation: (rule) => rule.required().email(),
        },
        {
          name: "hours",
          title: "Business Hours",
          type: "string",
          placeholder: "Mon-Fri: 9am-5pm",
          validation: (rule) => rule.required(),
        },
      ],
    }),

    // Social Links
    defineField({
      name: "socialLinks",
      title: "Social Media Links",
      type: "object",
      fields: [
        {
          name: "facebook",
          title: "Facebook URL",
          type: "url",
        },
        {
          name: "instagram",
          title: "Instagram URL",
          type: "url",
        },
        {
          name: "twitter",
          title: "Twitter URL",
          type: "url",
        },
      ],
    }),

    // Newsletter Settings
    defineField({
      name: "showNewsletter",
      title: "Show Newsletter Signup",
      type: "boolean",
      description: "Display newsletter signup form in footer",
      initialValue: false,
    }),
  ],
});
