# tools/ — Scripts de maintenance TheSkillCodex

Scripts hors MCP, exécutés manuellement (ou via git hook) sur le poste de travail.

---

## normalize-pilotage.js

Nettoie les fichiers de pilotage privés (TODO, JOURNAL, conventions, BACKLOG, couverture) des caractères invisibles qui font échouer les anchors `edit_file` des outils MCP filesystem.

### Origine du problème

Obsidian applique automatiquement la typographie française : il insère des NBSPs fines (U+202F) devant `:` `;` `!` `?` `%` `»` et autour des flèches `→`. Ces caractères sont **invisibles à l'œil** mais distincts d'un espace normal. Combinés à des line endings mixtes (CRLF Windows / LF de MCP) sur des fichiers édités alternativement par Obsidian et par MCP, ils créent des anchors `edit_file` qui paraissent matcher visuellement mais échouent en réalité.

Les fichiers de pilotage ne sont jamais publiés (privés, hors Quartz). La typo française n'a aucune utilité dessus.

### Caractères traités

| Caractère | Code | Action |
|---|---|---|
| NBSP fin | U+202F | → espace normal |
| NBSP normal | U+00A0 | → espace normal |
| ZWSP | U+200B | retiré |
| BOM | U+FEFF | retiré (en tête uniquement) |
| CRLF / CR isolé | — | → LF |

### Fichiers ciblés (codés en dur dans le script)

- `TODO.md`
- `BACKLOG.md`
- `JOURNAL.md`
- `JOURNAL-archive.md`
- `conventions.md`
- `_drafts/referentiel/couverture-en-cours.md`

Pour ajouter un fichier : éditer la constante `TARGETS` en tête du script.

### Ce que le script ne touche PAS

Les fiches publiables (`content/**.md`) : elles gardent leur typo française pour le rendu Quartz.

### Usage

```bash
# Corrige les fichiers et reporte ce qui a été modifié
node tools/normalize-pilotage.js

# Rapport seul, sans modification (exit 1 si invisibles trouvés)
node tools/normalize-pilotage.js --check
```

Idempotent : relancer sans changement = 0 modification.

---

## audit-medias.mjs

Audite les embeds de medias de `content/` contre le systeme de fichiers reel.

### Origine du problème

Deux défauts sont **invisibles en local et fatals en production** : un embed qui pointe un fichier absent, et un embed dont la **casse** diffère du nom réel du fichier. Windows est insensible à la casse, GitHub Pages sert sous Linux qui ne l'est pas — `circuit-RC.gif` s'affiche en local et renvoie un 404 en ligne. Le piège s'est manifesté 4 fois sur le projet, dont une sans aucune erreur remontée.

La détection ne peut donc pas reposer sur `fs.existsSync()`, qui répondrait « vrai » sous Windows. L'index est construit par `readdir()`, qui renvoie les noms réels, et la comparaison se fait par égalité stricte de chaînes.

### Statuts

| Statut | Signification |
|---|---|
| `ABSENT` | aucun fichier correspondant |
| `CASSE` | fichier trouvé à la casse près → 404 en ligne |
| `HORS-GABARIT` | chemin ne commençant pas par `/ressources/`, ou embed `![[...]]` Obsidian |
| `EXTERNE` | URL http(s), non vérifiée |
| `OK` | conforme |

Le script liste en outre les **orphelins** — fichiers de `content/ressources/` référencés par aucune fiche. **Il ne supprime jamais rien** : la liste est arbitrable.

### Usage

```bash
# Rapport complet, trié par fiche
node tools/audit-medias.mjs

# Ne montrer que les défauts
node tools/audit-medias.mjs --quiet
```

Exit 1 si au moins un `ABSENT` ou un `CASSE` est trouvé.

---

## audit-wikilinks.mjs

Extrait tous les `[[...]]` de `content/` et vérifie que leur cible existe.

### Résolution

Un lien est résolu s'il correspond à un chemin de fiche complet (`[[embarque/mcu/gpio]]`), à un nom de fichier sans extension (`[[gpio]]`), ou à un **alias** déclaré en front matter (`[[xiao]]` → `xiao-esp32-s3`). Un alias n'est pas un lien mort : il est reporté séparément.

### Statuts

| Statut | Signification |
|---|---|
| `MORT` | aucune cible, aucun alias → lien rouge en production |
| `CASSE` | cible trouvée à la casse près |
| `AMBIGU` | le nom court désigne plusieurs fiches |
| `ALIAS` | résolu par un alias front matter |

La distinction **mort** vs **volontairement rouge** (approche A : le rouge sert de TODO list) n'est pas mécanisable et reste à l'arbitrage.

### Usage

```bash
# Liens non résolus + alias, groupés par cible avec les fiches sources
node tools/audit-wikilinks.mjs

# Ajoute la liste des liens sains
node tools/audit-wikilinks.mjs --tout
```

Exit 1 si au moins un `MORT` ou un `CASSE` est trouvé.

---

## git-hooks/pre-commit

Hook pré-commit qui bloque tout commit introduisant des caractères invisibles dans les fichiers de pilotage.

### Activation (à faire une fois par poste)

```bash
git config core.hooksPath tools/git-hooks
```

Après activation, chaque `git commit` lance le check. Si invisibles détectés, le commit est refusé. Lancer `node tools/normalize-pilotage.js` pour corriger, puis recommit.

### Désactivation

```bash
git config --unset core.hooksPath
```

### Bypass ponctuel (déconseillé)

```bash
git commit --no-verify
```

À n'utiliser qu'en cas d'urgence (le problème NBSP reviendra à la session suivante).

---

## Notes Windows

- Git for Windows fournit Git Bash, donc le hook `#!/bin/sh` fonctionne sur les deux PC (pro et perso).
- Le script Node tourne sous Windows sans adaptation (chemins via `path.join`).
- Sur PC perso (chemin `C:\Users\turko\Documents\TheSkillCodex\`) comme sur PC pro (chemin `C:\Users\timothe.turko.ICAMAD\Documents\TheSkillCodex\`), l'activation est à faire indépendamment.
