import { type SchemaTypeDefinition } from "sanity";
import { serviceCardType } from "./serviceCardType";
import { contentBlockType } from "./contentBlockType";
import { heroType } from "./heroType";
import { galleryType } from "./galleryType";
import { siteSettingsType } from "./siteSettingsType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    serviceCardType,
    contentBlockType,
    heroType,
    galleryType,
    siteSettingsType,
  ],
};
