import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    // Encadre "Signaler une erreur" : site entier, sauf la 404 et la page
    // /ia/, adressee aux assistants et hors du parcours etudiant.
    Component.ConditionalRender({
      component: Component.SignalerErreur(),
      condition: (page) => page.fileData.slug !== "404" && page.fileData.slug !== "ia/index",
    }),
  ],
  footer: Component.Footer({
    // Le depot est prive : un lien GitHub serait un 404 pour l'etudiant.
    links: {},
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
      filterFn: (node) =>
        node.slugSegment !== "tags" &&
        node.slugSegment !== "templates" &&
        node.slugSegment !== "ressources" &&
        node.slugSegment !== "ia",
    }),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
      filterFn: (node) =>
        node.slugSegment !== "tags" &&
        node.slugSegment !== "templates" &&
        node.slugSegment !== "ressources" &&
        node.slugSegment !== "ia",
    }),
  ],
  right: [],
}
