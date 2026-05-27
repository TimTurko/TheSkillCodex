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
