import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      ...S.documentTypeListItems().filter(
        (listItem) => listItem.getId() !== "contentBlock"
      ),

      S.listItem()
        .title("About Section")
        .child(
          S.documentList()
            .title("About Content Blocks")
            .filter('_type == "contentBlock" && type == "about"')
            .defaultOrdering([{ field: "order", direction: "asc" }])
            .canHandleIntent((intentName, params) => {
              return intentName === "create" && params.type === "contentBlock";
            })
            .initialValueTemplates([
              S.initialValueTemplateItem("contentBlock-about"),
            ])
        ),

      S.listItem()
        .title("Parallax Section")
        .child(
          S.documentList()
            .title("Parallax Content Blocks")
            .filter('_type == "contentBlock" && type == "parallax"')
            .defaultOrdering([{ field: "order", direction: "asc" }])
            .canHandleIntent((intentName, params) => {
              return intentName === "create" && params.type === "contentBlock";
            })
            .initialValueTemplates([
              S.initialValueTemplateItem("contentBlock-parallax"),
            ])
        ),
    ]);
