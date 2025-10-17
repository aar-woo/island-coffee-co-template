import { type SchemaTypeDefinition } from "sanity";
import { postType } from "./postType";
import { serviceCardType } from "./serviceCardType";
import { contentBlockType } from "./contentBlockType";
import { heroType } from "./heroType";
import { galleryType } from "./galleryType";
import { siteSettingsType } from "./siteSettingsType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    postType,
    serviceCardType,
    contentBlockType,
    heroType,
    galleryType,
    siteSettingsType,
  ],
};
