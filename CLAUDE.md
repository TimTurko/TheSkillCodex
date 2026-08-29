# CLAUDE.md — Amorçage Claude Code (pilote, séance annexe du 29/08)

**Dépôt : TheSkillCodex** — wiki pédagogique mécatronique (Quartz/Obsidian),
corpus FR + chantier de traduction EN. Ce fichier amorce les sessions
Claude Code ; il **pointe** vers les références, il ne les remplace pas.

## Lecture d'ouverture (obligatoire, dans cet ordre)

1. `conventions.md` — head **et** tail (fichier long ; les conventions
   récentes et la section « En cours d'éprouvage » vivent en queue).
2. `JOURNAL.md` — head 250. La ligne **« Prochaine session »** de la
   dernière entrée est le brief de référence ; tout prompt de lancement se
   recoupe contre elle **avant** exécution.
3. Garde de péremption :
   `powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase garde`
   — horloge, HEAD git, fichiers non commités, dates d'écriture. Un état
   inattendu (fichiers modifiés inexpliqués, dates postérieures au dernier
   relevé) ⇒ **s'arrêter et le remonter**, ne rien écrire.

## Règles non négociables

- **C116, sous-règle « exécution directe »** (§ En cours d'éprouvage de
  `conventions.md`) : avant **chaque** bloc d'exécution, appendre les
  prédictions chiffrées à `tools/predictions-AAMMJJ.md`. Une prédiction sans
  nombre ni forme exacte est réputée absente. Chaque gate se ferme sur un
  bilan prédictions/constats.
- **C118 / C119** : aucun chiffre sans mesure du jour, aucune arithmétique
  dérivée — on relance l'outil. Tout volume de mots sort de
  `tools/compter-mots.mjs` et se cite par le nom du script.
- **C110** : tout motif (regex, joker, taux) se teste sur un **échantillon
  nommé** avant de compter.
- **Éditions** : petites, une intention par édition ; **remesure immédiate**
  après chaque passe ; `git diff` présenté à chaque gate. **Jamais** de
  `git commit` ni `git push` (Tim les passe lui-même, C121), jamais de
  suppression de fichier, jamais de coupe d'un fichier non lu **en entier**
  (règle du 28/08).
- **Shell** : appeler `node` directement (`node tools/xxx.mjs …`).
  **Pas de PowerShell inline** ; les scripts `.ps1` s'invoquent par fichier
  uniquement (`powershell -ExecutionPolicy Bypass -File …`).
- **Fichiers de pilotage** (TODO / JOURNAL / conventions / BACKLOG) :
  lancer `node tools/normalize-pilotage.js` avant tout diff proposé dessus.
- **Gates** (arrêt + revue Tim) : fin de cadrage (prédictions publiées),
  fin de chaque passe (diff + métriques), avant génération, avant rédaction,
  clôture. Entre les gates : enchaîner sans go (C120), **sauf** les six
  topics du §8 du prompt projet, un arbitrage bloquant, ou une contrainte
  de ressource.
- Toute sortie de mesure destinée à comparaison se sauvegarde **datée**
  (C124) — la batterie le fait seule pour ses propres sorties.

## Outils de mesure

`tools/batterie.ps1 -Phase garde|cadrage|etat` (paramètres en tête du
fichier) ; outils node individuels : `compter-mots.mjs`,
`creer-fiche-en.mjs` (`--controle` `--style` `--recette` `--anneau`
`--libelles` `--recaler`), `audit-wikilinks.mjs`, `audit-medias.mjs
--quiet`, `mesure-chevron.mjs`, `mesure-inline.mjs`,
`derive-traduction.mjs`, `normalize-pilotage.js`. Bornes connues au
`tools/README.md` — mais *une phrase de README décrit une intention, seul
le code décrit un comportement* (règle du 29/08).

## Langue

Travail, prédictions et livrables de pilotage en **français**. Fiches EN :
règles du chantier de traduction (C109, C113, C123, C125, C127 et les
décisions de lot consignées au JOURNAL).
