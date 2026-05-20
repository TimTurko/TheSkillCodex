#!/usr/bin/env node
/**
 * render-flowcharts.mjs
 *
 * Parcourt tous les fichiers .md de _drafts/flowcharts/, extrait les blocs
 * ```mermaid``` qu'ils contiennent et génère un SVG par bloc dans le même dossier.
 *
 * Conventions de nommage :
 *   - 1 bloc mermaid dans foo.md       → foo.svg
 *   - N blocs mermaid dans foo.md      → foo-1.svg, foo-2.svg, ...
 *
 * Cache : si le SVG existe déjà ET est plus récent que le .md source,
 * le rendu est sauté. Passer --force pour tout regénérer.
 *
 * Usage :
 *   npm run flowcharts
 *   npm run flowcharts -- --force
 */

import { execFile } from "node:child_process"
import { promisify } from "node:util"
import { readdir, readFile, writeFile, stat, mkdtemp, rm } from "node:fs/promises"
import { existsSync } from "node:fs"
import { join, resolve, dirname, basename } from "node:path"
import { tmpdir } from "node:os"
import { fileURLToPath } from "node:url"

const execFileAsync = promisify(execFile)

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const REPO_ROOT = resolve(__dirname, "..")
const FLOWCHARTS_DIR = join(REPO_ROOT, "_drafts", "flowcharts")

const FORCE = process.argv.includes("--force")

// Détection cross-plateforme de l'exécutable mmdc installé localement
const MMDC_BIN =
  process.platform === "win32"
    ? join(REPO_ROOT, "node_modules", ".bin", "mmdc.cmd")
    : join(REPO_ROOT, "node_modules", ".bin", "mmdc")

if (!existsSync(MMDC_BIN)) {
  console.error(
    `\n❌ mmdc introuvable à ${MMDC_BIN}\n` +
      `   Lance d'abord : npm install -D @mermaid-js/mermaid-cli\n`,
  )
  process.exit(1)
}

// Extrait tous les blocs ```mermaid d'un texte markdown
function extractMermaidBlocks(md) {
  const blocks = []
  const re = /```mermaid\s*\n([\s\S]*?)```/g
  let m
  while ((m = re.exec(md)) !== null) {
    blocks.push(m[1].trim())
  }
  return blocks
}

// Détermine le nom du SVG associé à un .md (et un index si plusieurs blocs)
function svgNameFor(mdFile, index, total) {
  const stem = basename(mdFile, ".md")
  if (total <= 1) return `${stem}.svg`
  return `${stem}-${index + 1}.svg`
}

// Détermine s'il faut régénérer le SVG (cache mtime)
async function shouldRender(mdPath, svgPath) {
  if (FORCE) return true
  if (!existsSync(svgPath)) return true
  const [mdStat, svgStat] = await Promise.all([stat(mdPath), stat(svgPath)])
  return mdStat.mtimeMs > svgStat.mtimeMs
}

// Rend un bloc Mermaid en SVG via mmdc
async function renderBlock(code, svgPath) {
  const tmpDir = await mkdtemp(join(tmpdir(), "mermaid-"))
  const tmpMmd = join(tmpDir, "input.mmd")
  try {
    await writeFile(tmpMmd, code, "utf8")
    await execFileAsync(MMDC_BIN, [
      "-i", tmpMmd,
      "-o", svgPath,
      "-b", "transparent",
    ], { shell: true })
  } finally {
    await rm(tmpDir, { recursive: true, force: true })
  }
}

async function main() {
  if (!existsSync(FLOWCHARTS_DIR)) {
    console.error(`❌ Dossier introuvable : ${FLOWCHARTS_DIR}`)
    process.exit(1)
  }

  const entries = await readdir(FLOWCHARTS_DIR)
  const mdFiles = entries.filter((f) => f.endsWith(".md")).sort()

  if (mdFiles.length === 0) {
    console.log(`Aucun .md trouvé dans ${FLOWCHARTS_DIR}`)
    return
  }

  let rendered = 0
  let skipped = 0
  let errored = 0

  for (const mdFile of mdFiles) {
    const mdPath = join(FLOWCHARTS_DIR, mdFile)
    const md = await readFile(mdPath, "utf8")
    const blocks = extractMermaidBlocks(md)

    if (blocks.length === 0) {
      console.log(`  ${mdFile} : pas de bloc mermaid, ignoré`)
      continue
    }

    for (let i = 0; i < blocks.length; i++) {
      const svgName = svgNameFor(mdFile, i, blocks.length)
      const svgPath = join(FLOWCHARTS_DIR, svgName)

      if (!(await shouldRender(mdPath, svgPath))) {
        console.log(`  ${svgName} : à jour, sauté`)
        skipped++
        continue
      }

      try {
        await renderBlock(blocks[i], svgPath)
        console.log(`✓ ${svgName}`)
        rendered++
      } catch (err) {
        console.error(`✗ ${svgName} : ${err.message?.split("\n")[0] ?? err}`)
        errored++
      }
    }
  }

  console.log(
    `\n${rendered} rendu(s), ${skipped} à jour, ${errored} erreur(s).`,
  )
  if (errored > 0) process.exit(1)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
