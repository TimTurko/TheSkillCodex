import fs from "fs"
import { FilePath, FullSlug, joinSegments } from "../../util/path"
import { QuartzEmitterPlugin } from "../types"
import { write } from "./helpers"

// Bloc A1 du chantier « site exploitable par une IA » (31/08).
//
// Emet, a cote de chaque page HTML, la source Markdown telle qu'elle est sur
// le disque : `public/<slug>.md`. C'est la lecture la moins couteuse et la
// plus fidele pour un assistant, et elle est annoncee par la balise
// `<link rel="alternate" type="text/markdown">` de Head.tsx (bloc A3).
//
// Le front matter est CONSERVE : il porte le titre, le type, les phases, et
// pour une fiche EN le `source_fr` de sa jumelle. Les commentaires HTML sont
// RETIRES : ils portent des notes de redaction destinees a nous, jamais au
// lecteur, et un assistant les lirait comme du contenu.
//
// Les brouillons (`draft: true`) ne sont pas dans `content` : le filtre
// RemoveDrafts a deja fait son travail quand cet emetteur recoit la liste.

const COMMENTAIRE_HTML = /<!--[\s\S]*?-->/g

const retirerCommentaires = (source: string): string => source.replace(COMMENTAIRE_HTML, "")

const emettre = async (ctx: Parameters<typeof write>[0]["ctx"], relativePath: FilePath, slug: FullSlug) => {
  const chemin = joinSegments(ctx.argv.directory, relativePath) as FilePath
  const source = await fs.promises.readFile(chemin, "utf8")
  return write({ ctx, content: retirerCommentaires(source), slug, ext: ".md" })
}

export const RawMarkdown: QuartzEmitterPlugin = () => ({
  name: "RawMarkdown",
  async *emit(ctx, content) {
    for (const [_tree, file] of content) {
      const relativePath = file.data.relativePath
      const slug = file.data.slug
      if (!relativePath || !slug) continue
      yield emettre(ctx, relativePath, slug)
    }
  },
  async *partialEmit(ctx, _content, _resources, changeEvents) {
    for (const changeEvent of changeEvents) {
      const relativePath = changeEvent.file?.data.relativePath
      const slug = changeEvent.file?.data.slug
      if (!relativePath || !slug) continue
      if (changeEvent.type === "add" || changeEvent.type === "change") {
        yield emettre(ctx, relativePath, slug)
      }
    }
  },
})
