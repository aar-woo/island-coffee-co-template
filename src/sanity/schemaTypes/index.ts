import { type SchemaTypeDefinition } from "sanity";
import { postType } from "./postType";
import { serviceCardType } from "./serviceCardType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, serviceCardType],
};
