import fs from "fs"
import { styleText } from "util"
import { FilePath, FullSlug, joinSegments, simplifySlug } from "../../util/path"
import { QuartzPluginData } from "../vfile"
import { QuartzEmitterPlugin } from "../types"
import { write } from "./helpers"

// Bloc A2 du chantier « site exploitable par une IA » (31/08).
//
// Emet `/llms.txt` : le preambule (le corps de `content/ia/index.md`, qui dit
// comment le site s'utilise) suivi de la carte du corpus, une ligne par PAIRE
// FR/EN.
//
// L'appariement se lit sur le champ `source_fr` des fiches EN, JAMAIS sur le
// slug : la regle du suffixe `-en` rate les sept `index.md` de `content/en`,
// dont la racine anglaise.

const FRONT_MATTER = /^---\r?\n[\s\S]*?\r?\n---\r?\n?/
const COMMENTAIRE_HTML = /<!--[\s\S]*?-->/g
// Balises d'enveloppe du bloc anglais de `/ia/` : ce sont des balises de mise
// en page, pas du texte. Elles ne servent a rien dans un fichier destine a
// une machine, et elles ne doivent pas etre confondues avec du contenu.
const BALISE_SECTION = /^<\/?section\b[^>]*>\s*$/gm

const corpsDe = (source: string): string =>
  source.replace(FRONT_MATTER, "").replace(COMMENTAIRE_HTML, "").replace(BALISE_SECTION, "").trim()

// `[[cible|libelle]]` -> `libelle`, `[[cible]]` -> `cible`, gras et italique
// retires. Une definition part dans un fichier lu par une machine : aucune
// syntaxe de wiki-link n'y est resolue, elle y arriverait telle quelle.
const nettoyer = (texte: string): string =>
  texte
    .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, "$2")
    .replace(/\[\[([^\]]+)\]\]/g, "$1")
    .replace(/\*\*/g, "")
    .replace(/\*/g, "")
    .trim()

// Premier paragraphe UTILE : la convention du popover (19/05) veut que la
// premiere phrase d'une fiche en soit la definition, et c'est vrai des 476
// fiches mesurees le 31/08 — SAUF sur les hubs, qui ouvrent sur un titre H1
// ou sur un callout. On saute donc ce qui n'est pas de la prose.
const estProse = (ligne: string): boolean =>
  !ligne.startsWith("#") && !ligne.startsWith(">") && !ligne.startsWith("![") && !ligne.startsWith("<")

const definitionDe = (corps: string): string => {
  const lignes = corps.split(/\r?\n/)
  let paragraphe: string[] = []
  for (const ligne of lignes) {
    if (ligne.trim() === "") {
      if (paragraphe.length > 0 && estProse(paragraphe[0])) break
      paragraphe = []
      continue
    }
    paragraphe.push(ligne.trim())
  }
  if (paragraphe.length === 0 || !estProse(paragraphe[0])) return ""
  const texte = nettoyer(paragraphe.join(" "))
  const point = texte.indexOf(". ")
  return point === -1 ? texte : texte.slice(0, point + 1)
}

const dossierDe = (relativePath: string): string => {
  const coupe = relativePath.lastIndexOf("/")
  return coupe === -1 ? "" : relativePath.slice(0, coupe)
}

export const LlmsTxt: QuartzEmitterPlugin = () => ({
  name: "LlmsTxt",
  async emit(ctx, content) {
    const cfg = ctx.cfg.configuration
    const base = cfg.baseUrl ?? ""
    const url = (slug: FullSlug) => `https://${joinSegments(base, encodeURI(simplifySlug(slug)))}`

    // Carte `source_fr` -> fiche EN, et liste des pages FR.
    const jumelles = new Map<string, QuartzPluginData>()
    const pagesFr: QuartzPluginData[] = []
    for (const [_tree, file] of content) {
      const data = file.data
      if (!data.relativePath || !data.slug) continue
      const source = data.frontmatter?.source_fr as string | undefined
      if (source) {
        jumelles.set(source, data)
      } else {
        pagesFr.push(data)
      }
    }

    // Titre de dossier : `index.md` d'abord, PUIS le hub en fichier nomme de
    // C18 (`<dossier>/<segment>.md`, la forme qui fait resoudre `[[theme]]`
    // par nom). Dix-sept des vingt-quatre dossiers FR n'ont pas d'`index.md`
    // et le § 8 presupposait qu'ils en avaient un ; sept gardent leur chemin,
    // leur hub portant un nom que le dossier ne donne pas.
    const titresDossier = new Map<string, string>()
    const hubNomme = new Map<string, string>()
    for (const page of pagesFr) {
      const chemin = page.relativePath!
      const dossier = dossierDe(chemin)
      const titre = page.frontmatter?.title ?? ""
      if (chemin.endsWith("index.md")) {
        titresDossier.set(dossier, titre)
      } else if (dossier !== "" && chemin === `${dossier}/${dossier.split("/").pop()}.md`) {
        hubNomme.set(dossier, titre)
      }
    }

    const groupes = new Map<string, QuartzPluginData[]>()
    for (const page of pagesFr) {
      const dossier = dossierDe(page.relativePath!)
      if (!groupes.has(dossier)) groupes.set(dossier, [])
      groupes.get(dossier)!.push(page)
    }

    let paires = 0
    let orphelines = 0
    const lignes: string[] = []

    for (const dossier of Array.from(groupes.keys()).sort()) {
      const pages = groupes.get(dossier)!
      pages.sort((a, b) => (a.frontmatter?.title ?? "").localeCompare(b.frontmatter?.title ?? ""))
      lignes.push("")
      lignes.push(
        "## " +
          (titresDossier.get(dossier) || hubNomme.get(dossier) || dossier || "TheSkillCodex"),
      )
      lignes.push("")
      for (const page of pages) {
        const titre = page.frontmatter?.title ?? page.slug!
        const jumelle = jumelles.get(page.relativePath!)
        if (jumelle) {
          paires = paires + 1
        } else {
          orphelines = orphelines + 1
        }
        const liens = jumelle
          ? `[${titre}](${url(page.slug!)}) · [${jumelle.frontmatter?.title ?? titre}](${url(jumelle.slug!)})`
          : `[${titre}](${url(page.slug!)})`
        const type = page.frontmatter?.type as string | undefined
        const phases = (page.frontmatter?.phases as string[] | undefined) ?? []
        const etiquettes = [type, ...phases].filter(Boolean).join(", ")

        const source = joinSegments(ctx.argv.directory, page.relativePath!) as FilePath
        const definition = definitionDe(corpsDe(await fs.promises.readFile(source, "utf8")))

        lignes.push(
          "- " + [liens, etiquettes, definition].filter((part) => part !== "").join(" — "),
        )
      }
    }

    // Preambule : le corps de `/ia/`, qui porte les regles d'usage du corpus.
    // Tant que la page n'existe pas, le fichier sort quand meme, et le build
    // le dit.
    let preambule = ""
    const cheminIa = joinSegments(ctx.argv.directory, "ia/index.md") as FilePath
    try {
      preambule = corpsDe(await fs.promises.readFile(cheminIa, "utf8"))
    } catch {
      console.warn(
        styleText("yellow", "llms.txt : content/ia/index.md absente, preambule vide"),
      )
    }

    const pied = [
      "",
      "---",
      "",
      "Toute page de ce site existe aussi en Markdown brut, a la meme adresse suffixee `.md`.",
      "Every page of this site also exists as raw Markdown, at the same address with a `.md` suffix.",
      "",
    ]

    const contenu = [preambule, ...lignes, ...pied].join("\n")
    console.log(`llms.txt : ${paires} paires, ${orphelines} sans jumelle`)

    return [await write({ ctx, content: contenu, slug: "llms" as FullSlug, ext: ".txt" })]
  },
  async *partialEmit() {},
})
