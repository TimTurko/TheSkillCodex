# JOURNAL — Archive (sessions du 2026-05-19 au 2026-05-27 suite 2)

> Archive des sessions antérieures au 27/05 suite 3, déplacées hors du JOURNAL
> principal lors des nettoyages documentaires successifs : 25/05 suite 3
> pour les sessions 19→21/05 (mise en place initiale, flowcharts de phase),
> 26/05 suite pour les sessions 22→24/05 (squelettes du V, charte
> callouts v2, rédaction complète de `specification-technique.md`),
> 26/05 suite 4 pour les sessions 25/05 → 25/05 suite 4 (première vague de
> trames transverses, fiches-notion + SVG, nettoyage documentaire, concept
> étapes 1-2), puis 27/05 suite 2 pour les sessions 26/05 → 26/05 suite 2
> (livraison `integration-et-tests` trame 5, livraison `securite-et-qualite`
> trame transverse 3 + cadrage session AA, cartographie AA passe B 8 fiches +
> catégorie Hors scope), puis 27/05 suite 4 pour les sessions 27/05 → 27/05
> suite 2 (nettoyage documentaire infrastructure + tooling normalisation,
> livraison `decomposition-fonctionnelle` + diagnostic bug SVG, mini-session
> bug SVG résolu + migration globale 10 fiches).
>
> Périmètre couvert par cette archive :
> - **19-20/05** : mise en place du dépôt et du site (Quartz, conventions,
>   fiche pilote `specification-technique` étape 1 v1, installation PC perso).
> - **20-21/05** : trame projet cycle en V (SVG macro) + flowcharts Mermaid
>   des 5 phases + vue d'ensemble macro avec rétroactions inter-phases.
> - **22/05** : squelettes des 4 fiches-trame du cycle en V (`concept`,
>   `preuve-de-concept`, `dossier-technique`, `integration-et-tests`). Fil
>   rouge unique bras 3 axes acté. Lexique étudiant figé (« dérisquer » et
>   « point dur » bannis, noms de phases en toutes lettres).
> - **22/05 (suite)** : charte callouts v2 (palette 8 callouts) + templates
>   `fiche-trame.md` et `fiche-notion.md` (refonte v1 → v2). Conventions de
>   titres de callouts figées. Renommage `_templates/` → `templates/`.
> - **23/05** : refonte spec-tech étape 1 + révision conventions callouts
>   v2.1 (titres `[!example]` / `[!livrable]` reformulés, titres fixes pour
>   `[!warning]` / `[!tip]` + phrase-clé en gras dans le corps).
> - **23/05 (suite)** : approfondissement spec-tech étapes 2-3 (étude
>   existant + pieuvre + FP/FS/FC). Alias Quartz introduit pour facettes
>   indissociables. Nouvelles dépendances : `bom`, `mind-map`, `fast`.
> - **23/05 (suite 2)** : approfondissement spec-tech étape 4 (caractériser
>   les fonctions). Décision majeure : 1 fiche `caracteriser-une-exigence`
>   unique avec alias `[critere, niveau, flexibilite]` (au lieu de 3 fiches
>   séparées). Convention « popovers seulement sur sigles génériques »
>   (FP/FS/FC, pas FP1/FS1/...).
> - **24/05** : clôture phase 1 partie 1 — étape 5 spec-tech (Planifier le
>   projet : WBS, Gantt, jalons, rétroplanning, matrice de risques) +
>   refonte Pièges fréquents (6 pièges format gras court + explication).
>   Vocabulaire « revue de CdCF » acté (au lieu de « soutenance
>   intermédiaire »).
> - **24/05 (suite)** : clôture phase 1 partie 2 — étape 6 spec-tech
>   (Rédiger le CdCF) + section Équipe (4 paragraphes thématiques) +
>   template Word `cdcf-ecole-template.docx` produit. Limite MCP filesystem
>   sur les binaires identifiée.
> - **24/05 (suite 2)** : clôture phase 1 partie 3 — cohérence finale
>   spec-tech (11 patches terminologiques en 3 passes) + refonte
>   architecture `fonction` / `pieuvre` (séparation actée : `fonction.md`
>   nouveau avec aliases FP/FS/FC, `pieuvre.md` refondu) + SVG pieuvre
>   générique et bras 3 axes. Convention `draft: false` par défaut actée.
> - **27/05** : nettoyage documentaire infrastructure (TODO Fait + script
>   `tools/normalize-pilotage.js` + hook pre-commit) + convention
>   *Hygiène des fichiers de pilotage* § 6. Pas d'entrée JOURNAL en
>   clôture, rattrapée a posteriori en 27/05 suite.
> - **27/05 (suite)** : ouverture Phase 0 — livraison fiche
>   `decomposition-fonctionnelle` (14 ko, 4 SVG, triptyque
>   mauvais/moyen/bon) + diagnostic bug SVG base path Quartz (chemins
>   `../../` perdent base path github.io). Convention candidate fil
>   rouge bras 3 axes pour fiches-tuto pivot phase 1.
> - **27/05 (suite 2)** : mini-session technique — bug SVG résolu
>   (solution chemin absolu `/ressources/img/...`), migration globale
>   10 fiches publiables, convention C21 *Chemin des images — racine
>   absolue* promue § 6.
>
> Le JOURNAL principal reprend à partir du 27/05 suite 3.

---

<!-- DEBUT DES SESSIONS 27/05 — ARCHIVEES LE 27/05 SUITE 4 -->

## 2026-05-27 (suite 2) — Mini-session bug SVG base path Quartz résolu + migration globale 10 fiches

### Périmètre de session
Mini-session technique pure, dédiée à la résolution du bug SVG diagnostiqué en clôture 27/05 suite (les chemins `../../ressources/img/...` perdent le base path `/TheSkillCodex/` sur github.io). PC pro, MCP `theskillcodex`. Procédure pré-cadrée par l'utilisateur en briefing : test isolé sur `pieuvre.md` avec solution candidate A (format Obsidian-natif `![[fichier.svg]]`), puis solution B (chemin absolu `/ressources/img/...`) si A KO, puis solution C (investigation conf Quartz) si B KO. Migration globale niveau A en cas de succès, puis clôture documentaire.

### Test isolé sur `pieuvre.md` — 2 itérations

**Itération 1 — Solution A `![[fichier.svg]]`** (format Obsidian-natif). Patch des 2 lignes `![alt](../../ressources/img/foo.svg)` → `![[foo.svg]]` (alt text supprimé, accessibilité préservée via `<title>` + `<desc>` internes des SVG vérifiés en sortie : les SVG `pieuvre-generique.svg` et `pieuvre-bras-3-axes.svg` portent bien les attributs `role="img" aria-labelledby` requis). Commit + push utilisateur. **Vérification utilisateur sur smartphone : KO github.io.** Hypothèse confirmée : Quartz perd également le base path en mode wikilink-embed Obsidian-natif quand le chemin n'est pas explicite.

**Itération 2 — Solution B chemin absolu** `/ressources/img/fichier.svg`. Patch des 2 lignes vers format markdown standard avec chemin absolu site, alt text restauré. Commit + push. **Vérification utilisateur : OK github.io, KO Obsidian preview.** Arbitrage utilisateur immédiat : compromis assumé (github.io = cible prioritaire publication étudiants, édition markdown reste fonctionnelle, Obsidian preview dégradé acceptable).

### Migration globale — 10 fiches publiables

Niveau A mécanique, batch en 8 appels `edit_file` (1 par fiche, anchors sur le chemin `(../../ressources/img/...)` uniquement, robustes aux NBSP éventuels des alt texts). 25 substitutions au total :

| Fiche | Substitutions |
|---|---|
| `pieuvre` | 2 (test) |
| `bete-a-cornes` | 4 |
| `decomposition-fonctionnelle` | 4 |
| `specification-technique` | 3 |
| `gantt`, `jalons`, `retroplanning`, `wbs`, `matrice-de-decision`, `matrice-de-risques` | 2 chacune |
| **Total** | **25** |

**Affinement du scope initial briefing utilisateur (11 fiches) à 10 utiles** : `caracteriser-une-exigence` ne contient pas d'image SVG externe (triptyque réalisé en tableaux markdown, cohérent avec convention C7 triptyque pour outils textuels), `schema-bloc-fonctionnel` ne contient pas d'image markdown classique (uniquement un bloc Mermaid + 2 TODO HTML pour SVG d'illustration à produire ultérieurement).

**Ajout du scope par audit complet** : `specification-technique.md` non listée par l'utilisateur dans le scope initial mais révélée par lecture du contenu — 3 occurrences à l'étape 1 (`bete-a-cornes-generique.svg`) et à l'étape 3 (`pieuvre-generique.svg` + `pieuvre-bras-3-axes.svg`), réutilisation des SVG en illustration dans la trame. Patch appliqué.

### Audit exhaustif du contenu `content/`

6 fiches lourdes auditées en complément (lecture batch + grep dans la sortie via bash sur le tool result stocké en `/mnt/user-data/tool_results/`) : `preuve-de-concept`, `dossier-technique`, `integration-et-tests`, `ecoconception`, `gestion-de-projet`, `securite-et-qualite`. **Aucune image SVG externe** dans aucune : pattern callouts + tableaux markdown uniquement, cohérent avec l'inventaire « Vérifier le rendu » du TODO qui ne mentionne aucun SVG pour ces 6 fiches. Plusieurs sub-indices (`fiches/ese/`, `meo/`, `mia/`, `mme/`, `proj/`, `eee/`) et `content/index.md` également vérifiés : aucune image. Hub à 1 niveau de remontée déjà fonctionnel par diagnostic 27/05 suite — pas de migration nécessaire. **Inventaire bug SVG clôturé.**

### Convention C21 *Chemin des images — racine absolue* — promotion directe en § 6

Convention née opérationnelle après le test + arbitrage. Pas d'épreuve en attente (la convention découle d'un fait technique avéré, pas d'une intuition à valider) : promotion directe en `conventions.md` § 6 *Publication / Quartz*, entre *Hygiène des fichiers de pilotage* et *Noms de fichiers*. **Pas d'entrée § 8 en éprouvage** — la convention n'est pas en cours d'éprouvage, elle est acquise.

Contenu : justification technique (Quartz perd le base path quand chemin remonte de 2 niveaux ou plus, bug structurel reproductible), tests négatifs documentés (Obsidian-natif `![[...]]` KO github.io), compromis assumé (preview Obsidian dégradée, github.io prioritaire), exception explicite pour depth ≤ 1 (hub/index.md et content/index.md conservent leurs chemins relatifs car la perte de base path n'affecte pas les chemins à 1 niveau ou moins), prescription `Pour Claude` (convention à appliquer en niveau A sur toute nouvelle fiche).

### Acquis méthodo

**L'audit complet du contenu vaut la peine quand le scope déclaré est étroit.** L'utilisateur avait listé 11 fiches dans le briefing initial. Après lecture systématique des 10 fiches du scope + 6 trames/transverses hors scope + 8 fiches notion/support, l'inventaire effectif est passé à : 10 fiches affectées (dont `specification-technique` non listée initialement), 2 fiches du scope écartées par audit (sans image), 6 fiches lourdes hors scope confirmées sans image. Le coût de l'audit (lecture batch de ~10 ko de fiches supplémentaires) est très inférieur au coût d'avoir laissé une fiche cassée sur le site déployé. À retenir pour les prochaines passes mécaniques globales.

**`search_files` (MCP `theskillcodex`) matche les noms, pas le contenu**. Pour un grep récursif sur le contenu, il faut soit lire les fichiers et grep dans la sortie via `bash_tool` sur le résultat stocké en `/mnt/user-data/tool_results/` (cas où `read_multiple_files` dépasse le contexte et stocke automatiquement), soit lire chaque fichier individuellement. Stratégie efficace cette session : lecture batch de 6 fichiers en un appel `read_multiple_files`, puis `grep -nE '\]\(\.\./\.\./ressources/img/'` dans le fichier de sortie. À retenir comme procédure standard pour les audits de contenu sur les fiches lourdes.

### Conventions

- **C21 promue § 6** (voir ci-dessus). Pas d'éprouvage § 8.
- **C17 patch flèche TODO post-arbitrage** : épreuve 3/N réussie cette session. Flèche patchée vers `etat-de-l-art-technique` (Phase 0 reprise) conformément à l'anticipation du briefing utilisateur (succès = phase 0 reprise). À éprouver 1 session supplémentaire avant promotion vers § 5 ou § 8.
- **C20 mapping AA multi-couverture** : inchangée, aucune épreuve cette session (mini-session technique sans rédaction de fiche). Reste 1/N en éprouvage § 8.
- **C14 segmentation MARKER + N segments** : mobilisée en clôture pour l'archivage JOURNAL (~26 ko à déplacer en 1-2 segments). Confirme la robustesse du pattern déjà acté.

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes.
- **3 décisions niveau D en attente hiérarchie** : catégorie Hors scope par délégation pour 3 critères design, statut des 4 critères MME effleurés sans fiche centrale, statut `schema-cinematique` wiki vs délégation MME.
- **C17 épreuve restante** (1/N) avant promotion vers § 5 ou § 8.
- **C18 + C19 à éprouver** sur Phase 1 elec/info.
- **C20 candidate à éprouver** sur Phase 0.
- **Convention candidate fil rouge fiches-tuto pivot phase 1** : reformulation à acter (élargir aux notions ? reclasser carac-exigence en tuto ?).
- **Dette restructuration `decomposition-fonctionnelle.md`** en format fiche-tuto une fois template figé (probablement sur `etat-de-l-art-technique`).
- **Prochaine session** = Phase 0 reprise (`etat-de-l-art-technique` + figeage template `fiche-tuto.md`).
- **Commit + push** : workflow fin de session utilisateur.

### Tailles fichiers en fin de session
- 10 fiches publiables migrées : taille globalement inchangée (substitutions de quelques caractères chacune, 25 substitutions au total sur 10 fichiers).
- `conventions.md` : ~20 → ~22 ko (ajout convention C21 § 6, ~1,5 ko de contenu).
- `TODO.md` : ~23 → ~25 ko après rotation glissante (ajout session 27/05 suite 2, suppression session 26/05 suite 5).
- `JOURNAL.md` : ~108 → ~125 ko après ajout entrée 27/05 suite 2 (~17 ko brut, au-dessus du seuil 100 ko). **Archivage à proposer** en clôture : sessions 26/05 + 26/05 suite + 26/05 suite 2 vers `JOURNAL-archive.md` (~26 ko à déplacer, JOURNAL → ~99 ko).
- `BACKLOG.md` : ~25 ko, inchangé (aucune émergence d'idée nouvelle cette session, aucun item à cocher).

---

## 2026-05-27 (suite) — Phase 0 ouverte : fiche `decomposition-fonctionnelle` + diagnostic bug SVG base path Quartz

### Périmètre de session
Ouverture Phase 0 (clôture phase 1 GP) avec la première fiche-tuto outil natif phase concept étape 1. Cadrage niveau C en 4 questions tranchées, rédaction niveau A en autonomie. En cours de clôture : découverte fortuite d'un bug structurel SVG sur le site déployé, ouverte comme mini-session prochaine. PC pro, MCP `theskillcodex`.

### Livraison `decomposition-fonctionnelle.md` (14 ko, `type: tuto`)

4 questions méthodo tranchées en cadrage niveau C en début de session :
- **Q1 — Calque** : bete-a-cornes complet, cible 18-22 ko (livré économe à 14 ko, matrice de la fiche tient sans extension).
- **Q2 — Forme graphique** : arborescence descendante (système → sous-systèmes → fonctions techniques), pas diagramme bloc. SADT/IDEF0 mention en alternative formelle.
- **Q3 — Articulation `schema-bloc-fonctionnel`** : recadrage utilisateur déterminant — *« décomposition fonctionnelle = gestion de projet, schéma bloc fonctionnel = elec+info »*. Distinction séquentielle, pas concurrente : décomp = analyse amont GP (FT abstraites) ; schema bloc = réalisation aval elec/info (blocs concrets). Articulation explicite à réciproquer entre les deux fiches en clôture.
- **Q4 — Fil rouge** : bras 3 axes retenu, deuxième épreuve potentielle de la convention candidate fil rouge fiches-tuto pivot phase 1 (après caracteriser-une-exigence, qui est typé notion donc épreuve formelle 1/N seulement).

**Structure livrée** : popover → À quoi ça sert (3 rôles : structurer le travail équipe / préparer l'exploration solutions / révéler les trous du CdCF) → Comment décomposer (intro + 2 H3 *Du système aux sous-systèmes* + *Des sous-systèmes aux fonctions techniques* + H3 *Où s'arrêter*) → Exemple bras 3 axes avec **triptyque mauvais/moyen/bon** en 4 SVG arborescences → 6 pièges (gras court + explication) → Cas particulier *reconception et reverse engineering* → Voir aussi avec articulation explicite vers schema-bloc-fonctionnel.

**4 SVG produits** dans `content/ressources/img/` : `-generique` (760×480), `-bras-mauvais` (découpage par discipline = anti-pattern), `-bras-moyen` (déséquilibre Articulations 5 leaves / Pilotage 1 / Énergie 1), `-bras-3-axes` (Mobilité articulaire 4 leaves / Interface utilisateur 2 / Alimentation et sécurité 3, format 920×500 plus large). Palette ambre/gris alignée wbs-generique, dark mode, conventions C3 SVG respectées.

**Choix structurels assumés** :
- Triptyque mauvais/moyen/bon repris depuis bete-a-cornes + caracteriser-une-exigence → épreuve 3/N de la convention candidate du § 4 conventions. **Promotion vers § 2 *Mise en forme* appliquée en clôture**.
- Cas particulier *reverse engineering* assumé (léger écart au calque bete-a-cornes qui traitait *projet école sans client réel*) car plus pertinent pédagogiquement pour la décomp.
- Aucune image *exemple incarné avec valeurs concrètes après méthode* (convention C7) : ici les 3 SVG du triptyque tiennent ce rôle — incarnation = qualité d'écriture du même cas, pas un cas supplémentaire.

### Patches connexes

- **`concept.md` étape 1** : retrait `schema-bloc-fonctionnel` des outils de viz de la décomposition (recadrage utilisateur Q3). Remplacement par *« La représentation directe est l'arborescence descendante (système global en racine, sous-systèmes au niveau 1, fonctions techniques au niveau 2). Les diagrammes SADT/IDEF0 restent une alternative plus formelle... »*. SADT/IDEF0 conservés en alternative.
- **`schema-bloc-fonctionnel.md` *Voir aussi*** : ajout `decomposition-fonctionnelle` en première position avec libellé d'articulation explicite (*« analyse amont côté gestion de projet, qui produit les fonctions techniques que ce schéma vient concrétiser en blocs matériels »*).

### Reclassification `type: notion` → `type: tuto`

Arbitrage utilisateur explicite en cours de session (point 2 de mon récap intermédiaire). La fiche était initialement livrée en `type: notion` (calque bete-a-cornes), reclassée `type: tuto` après décision. La structure interne reste celle d'une notion approfondie — **dette à TODO** : restructurer au format fiche-tuto attendu (sections *Procédure pas à pas*, *Captures d'écran*, *Raccrochage projet*) une fois le template `fiche-tuto.md` figé (probablement sur `etat-de-l-art-technique`, qui sera la 2e fiche-tuto pour stabiliser les conventions).

### Mapping AA explicite (consigne utilisateur)

Deux critères Couvert mappés en multi-couverture assumée (sur consigne utilisateur « n'hésite pas à mapper quand un AA peut être en lien ») :
- **`RA-PROJET-C04-4/PROJ/1`** *« Effectuer une analyse fonctionnelle du système »* → multi-couverture avec `bete-a-cornes` (analyse fonctionnelle externe vs interne descendante). Illustre pédagogiquement la transversalité du critère.
- **`RA-PROJET-C04-4/PROJ/6`** *« Définir les interactions entre blocs à partir d'un cahier des charges »* → traité explicitement dans la section *Du système aux sous-systèmes* avec le critère « interfaces nettes » et le parcours « parcourir les interfaces deux à deux ». Multi-couverture avec `concept.md` qui pointe désormais vers la fiche pour le détail.

Non mappés (effleurements seulement) : `RA-PROJET-C04-4/PROJ/4` (schema bloc fonctionnel, couvert par la fiche aval), `RA-MME-C02-1/MME/1` (choix matériaux, mention disciplines mais pas central).

### Diagnostic bug SVG base path Quartz

L'utilisateur signale en cours de clôture *« les images ne s'affichent pas sur github.io »*. Investigation immédiate :

- **Symptomatologie** : les SVG des fiches s'affichent en local Quartz mais l'icône d'image cassée est rendue sur le site déployé timturko.github.io/TheSkillCodex.
- **Diagnostic par fetch direct** sur le HTML rendu :
  - `hub/index.md` (chemin `../ressources/img/cycle-v-projet.svg`) → URL résolue `https://timturko.github.io/TheSkillCodex/ressources/img/cycle-v-projet.svg` → **affiché OK**.
  - `pieuvre.md` (chemin `../../ressources/img/pieuvre-generique.svg`) → URL résolue `https://timturko.github.io/ressources/img/pieuvre-generique.svg` → **404 KO**. Le base path `/TheSkillCodex/` est perdu.
- **Cause** : Quartz perd le segment de base path quand le chemin relatif remonte de 2 niveaux (`../../`). 1 niveau (`../`) fonctionne. Bug structurel.
- **Scope** : toutes les fiches à `content/fiches/<domaine>/` ont leurs images cassées sur le site déployé. Seules les images du hub fonctionnent. ~11 fiches concernées (bete-a-cornes, pieuvre, gantt, jalons, retroplanning, wbs, matrice-de-decision, matrice-de-risques, schema-bloc-fonctionnel, caracteriser-une-exigence, decomposition-fonctionnelle).
- **Solutions candidates** par ordre de préférence : (a) **format Obsidian-natif `![[fichier.svg]]`** (Quartz résout par nom de fichier, marche dans les deux outils) ; (b) chemin absolu site `/ressources/img/...` (risque : ne marche pas dans Obsidian preview) ; (c) investigation conf Quartz (`baseUrl`, plugin CrawlLinks) pour cause racine.
- **Décision** : mini-session test prochaine session sur `pieuvre.md` (1 fichier, 2 images) avec format `![[fichier.svg]]`, push, vérification rendu github.io, migration globale si OK. **Bloque toutes les vérifs visuelles en attente.**

### Conventions

- **Triptyque mauvais/moyen/bon (`[!failure]` / `[!warning]` / `[!example]`) promu vers `conventions.md` § 2** après épreuve 3/N réussie : `bete-a-cornes` (25/05 suite 2) + `caracteriser-une-exigence` (26/05 suite 5) + `decomposition-fonctionnelle` (27/05 suite). Patron stable : 3 callouts côte à côte avec SVG ou tableau markdown selon nature de la notion (graphique vs textuelle), chaque callout suivi de paragraphes *Pourquoi c'est ...* + parfois *Coût réel de cette erreur* pour le mauvais.
- **Convention candidate C20 — mapping AA pertinent en multi-couverture** acquise sur consigne utilisateur. À éprouver sur prochaines fiches Phase 0 (`etat-de-l-art-technique`, `bom`, `mind-map`, `fast`, `amdec`, `matrice-eat`, `ecodesign`) avant promotion vers `conventions.md` § 7. Décision niveau D explicite (rapport au référentiel AA).
- **Convention candidate fil rouge fiches-tuto pivot phase 1 = bras 3 axes** : épreuve formelle 1/N seulement (decomposition-fonctionnelle, car caracteriser-une-exigence est typé `notion` malgré l'usage du fil rouge). Reformulation possible : *« fiches-tuto pivot phase 1 ET fiches-notion outils pivots étape 1 phase concept = fil rouge »* ou bien reclasser carac-exigence en tuto aussi. À trancher prochaine session de stabilisation template fiche-tuto.

### Rattrapage entrée JOURNAL 27/05

Dette signalée en briefing utilisateur en début de session : *« la session précédente (27/05) a été 100 % nettoyage documentaire et tooling »* mais aucune entrée JOURNAL correspondante. Entrée rattrapée a posteriori en clôture (juste au-dessous), périmètre reconstruit depuis briefing + livrables visibles dans le dépôt (`tools/`, `conventions.md` § 6) + TODO Fait.

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes.
- **3 décisions niveau D en attente hiérarchie** : catégorie Hors scope par délégation pour 3 critères design, statut des 4 critères MME effleurés sans fiche centrale, statut `schema-cinematique` wiki vs délégation MME.
- **C17 épreuve restante** avant promotion vers `conventions.md` § 5 ou § 8.
- **C18 + C19 à éprouver** sur Phase 1 elec/info.
- **C20 candidate à éprouver** sur Phase 0.
- **Convention candidate fil rouge fiches-tuto pivot phase 1** : reformulation à acter (élargir aux notions ? reclasser carac-exigence ?).
- **Dette restructuration `decomposition-fonctionnelle.md`** en format fiche-tuto une fois template figé.
- **Bug SVG base path Quartz** : mini-session test prochaine session.
- **Prochaine session** = mini-session bug SVG, puis Phase 0 reprise (`etat-de-l-art-technique` + figeage template `fiche-tuto.md`).
- **Commit + push** : workflow fin de session utilisateur.

### Tailles fichiers en fin de session
- `decomposition-fonctionnelle.md` : 14 ko (livré).
- 4 SVG decomposition-fonctionnelle : ~3 ko chacun.
- `concept.md` : 42 ko (patch étape 1 mineur).
- `schema-bloc-fonctionnel.md` : ~7 ko (patch *Voir aussi* mineur).
- `TODO.md` : ~23 ko après rotation glissante.
- `JOURNAL.md` : ~93 → ~108 ko après ajout 2 entrées 27/05 (sous le seuil 100 ko dépassé — archivage à envisager prochaines sessions).
- `conventions.md` : ~18 → ~20 ko après promotion triptyque + ajout C20.

---

## 2026-05-27 — Nettoyage documentaire infrastructure + tooling normalisation

> *Entrée rattrapée a posteriori en clôture 27/05 suite. Périmètre reconstruit depuis le briefing utilisateur de début de session 27/05 suite, les livrables visibles dans le dépôt (`tools/`, `conventions.md` § 6) et le TODO Fait. Précision et exhaustivité limitées par cette reconstitution.*

### Périmètre de session
Session 100 % infrastructure : nettoyage de dette héritée dans TODO + mise en place d'un système de normalisation des fichiers de pilotage (script Node ESM + hook pre-commit Git) pour prévenir les échecs récurrents d'anchor `edit_file` liés aux caractères invisibles (NBSP, ZWSP, BOM, CRLF). PC pro selon log de l'utilisateur en début de session 27/05 suite.

### Livrables
- **Nettoyage TODO Fait** : suppression de la session 26/05 suite 2 (dette héritée du 26/05 suite 5 sur anchor C14 récalcitrant, 4 sessions Fait au lieu de 3). Rotation glissante 3 sessions Fait rétablie.
- **`tools/normalize-pilotage.js`** : script Node ESM sans dépendance, mode FIX par défaut + mode `--check` pour audit (exit 1 si invisibles trouvés). Caractères nettoyés : U+202F (NBSP fine), U+00A0 (NBSP), U+200B (ZWSP), U+FEFF (BOM), CRLF → LF. Fichiers ciblés : `TODO.md`, `JOURNAL.md`, `JOURNAL-archive.md`, `conventions.md`, `BACKLOG.md`, `_drafts/referentiel/couverture-en-cours.md`. Fiches publiables `content/**.md` hors scope (gardent typo française pour rendu Quartz).
- **`tools/git-hooks/pre-commit`** : hook bloquant tout commit qui réintroduit des invisibles dans les fichiers ciblés. Activation par poste via `git config core.hooksPath tools/git-hooks` (PC pro fait ; PC perso = tâche TODO ouverte).
- **`tools/README.md`** : doc complète d'usage.
- **Convention `conventions.md` § 6 *Hygiène des fichiers de pilotage*** : nouvelle section consolidant la garantie + procédure de diagnostic en cas d'anchor récalcitrant (suggérer `node tools/normalize-pilotage.js --check` avant bisection, etc.).

### Acquis méthodo

Capitalisation du complément C14 (27/05) : NBSPs et CRLF identifiés comme causes récurrentes d'échec d'anchor sur les fichiers de pilotage. Le script + hook constituent une solution infrastructure pérenne, indépendante de la discipline anchor-court (qui reste utile pour les fiches publiables non normalisées). Documentation rappelle que ces fichiers de pilotage normalisés tolèrent désormais les anchors longs sans NBSP, mais que les fiches publiables `content/**.md` (typo française active pour Quartz) restent sensibles à la discipline historique.

### Dette de clôture
**Entrée JOURNAL non rédigée en fin de session** — dette identifiée et remontée en briefing par la session 27/05 suite. Rattrapée immédiatement en clôture 27/05 suite (entrée courante).

---

<!-- DEBUT DES SESSIONS 26/05 — ARCHIVEES LE 27/05 SUITE 2 -->

## 2026-05-26 (suite 2) — Cartographie AA passe B sur 8 fiches phase 1 + nouvelle catégorie Hors scope + patch budget GP

### Périmètre de session
Session de cartographie AA déclenchée selon le cadrage de la session précédente. Tranchage des 3 questions méthodo Q1/Q2/Q3 en début, puis passe B (lecture en aveugle, fiche par fiche) sur les 8 fiches de la phase 1 du wiki (5 trames du V + 3 transverses). Acquisition d'une 4ᵉ catégorie de cartographie **Hors scope** en cours de session, propagée rétroactivement aux fiches déjà cartographiées. Patch structurel déclenché par cartographie : ajout du suivi budgétaire comme 6ᵉ outil canonique dans `gestion-de-projet.md`.

### Décisions méthodo Q1/Q2/Q3 tranchées en début de session
1. **Format cartographie** : option C — champ `aa:` dans front matter (source de vérité, codes courts) + table dérivée centralisée. La cartographie descend **jusqu'au critère** (pas juste l'AA).
2. **Granularité** : 3 niveaux initiaux + 1 acquis en session.
   - **Couvert** : objet central d'une fiche ou d'une section H2/H3.
   - **Effleuré** : mention H4, `[!example]`, wiki-link, posture/pièges.
   - **Non couvert** : pas du tout présent, identifie un trou à combler.
   - **Hors scope** (acquise C15) : critère hors périmètre wiki par décision éditoriale (évaluation transversale enseignants, pas contenu pédagogique).
3. **Ordre** : hybride B (fiche par fiche, lecture en aveugle) puis A (par domaine, check complétude).

### Codification critères validée
Format : `<Code_RA>/<AA_DOMAIN>/<N°critère>` (ex. `RA-PROJET-C03-3/EEE/1`). AA_DOMAIN nécessaire car un même RA porte parfois plusieurs AA dans des domaines différents.

### Normalisation du référentiel
Fichier source 62 lignes, 5 doublons supprimés → **57 critères distincts**, 12 AA, 5 domaines (PROJ 25, MME 12, EEE 10, MEO 10, ESE 5). **MIA n'existe plus** dans le référentiel — fusionné dans EEE et PROJ. Numérotation source conservée (trous explicites) pour traçabilité. Production du fichier `_drafts/referentiel/referentiel-normalise.md`.

Patches navigation MIA→EEE (3 fichiers) : `content/index.md`, `content/hub/index.md`, `content/fiches/eee/index.md` (titre + description élargis « EEE — Électronique et informatique embarquée », mention historique du basculement MIA→EEE le 26/05/2026). Suppression manuelle du dossier `content/fiches/mia/` reste en attente (limite MCP delete).

### Capitalisation des cartographies dans `_drafts/referentiel/couverture-en-cours.md`
Fichier de travail privé produit avec grille de lecture (3 niveaux + Hors scope, phase 1 vs phase 2, convention 1-fiche-par-critère EEE/info). 8 cartographies fiche par fiche écrites au format YAML couvert/effleure/hors_scope avec commentaires localisant chaque critère dans la fiche. Synthèse globale en placeholder, à compléter en fin de passe B+A.

### Bilans par fiche
| Fiche | Couvert | Effleuré | Hors scope | Total touché / 57 |
|---|---|---|---|---|
| specification-technique | 5 | 6 | 1 | 11 |
| concept | 7 | 9 | 1 | 16 |
| preuve-de-concept | 5 | 7 | 1 | 12 |
| dossier-technique | 10 | 7 | 1 | 17 |
| integration-et-tests | 7 | 6 | 3 | 13 |
| gestion-de-projet | 9 | 0 | 3 | 12 |
| ecoconception | 4 | 3 | 0 | 7 |
| securite-et-qualite | 0 | 5 | 0 | 5 |

### Découvertes structurantes
- **`RA-PROJET-C07-1/PROJ/3`** (gérer le budget) : vrai trou phase 1 identifié dans `gestion-de-projet.md` (5 outils canoniques mentionnés mais pas le budget). **Patché en session** : passage à 6 outils canoniques avec ajout du suivi budgétaire (« consolidation de la consommation projet vs enveloppe initiale, centralisé en dossier technique au moment des engagements matériels mais piloté en continu ») + mention dans le livrable 2/3 (sous-liste Continu).
- **`RA-MEO-C10-3/MEO/5`** (proposer outils de prise de décision collective) : précédemment trou phase 1 à vérifier sur `gestion-de-projet`, **vérifié présent** (bloc 3, 3 options + règle pour dépassement = outil structurant de décision).
- **`RA-PROJET-C03-3/PROJ/7`** (garantir la démontabilité du projet) : n'apparaissait dans aucune fiche cartographiée antérieurement. **Couvert dans ecoconception bloc 2** (démontabilité PCB / connectique JST / carte modulaire). Pas un trou, critère bien attribué.
- **`RA-PROJET-C03-3/EEE/2`** (analyser comportement sous-ensemble jusqu'au composant) : précédemment identifié trou phase 2 sur PoC. **Reclassé en Couvert** dans `integration-et-tests` étape 2. La fiche-tuto `analyse-de-schema-electronique` reste au TODO mais avec motivation reformulée : tuto pédagogique propre (popover depuis integration-et-tests étape 2), pas trou AA.
- **`securite-et-qualite.md` = 0 critère Couvert** : insight structurant. Cette trame ne porte pratiquement aucun critère AA central du référentiel école. Cohérent et attendu : c'est un domaine de **posture / culture professionnelle** (sécurité produit AMDEC + arrêt d'urgence, sécurité projet 3 règles + EPI, qualité documentaire Git tags + revue de code + sérigraphie PCB + plan de revues, normatif pointu CE/EMC/ISO 12100 délégué) non explicitement capturé par les AA techniques du référentiel I3.5/I3.6. La fiche conserve toute sa valeur pédagogique mais ne sert pas la cartographie AA. À noter en synthèse globale.

### Conventions acquises en session
- **C15 — catégorie Hors scope** : critère du référentiel école non traité par le projet TheSkillCodex par décision éditoriale (évaluation transversale des étudiants : soft skills, engagement, participation, terminologie professionnelle évaluée en revue par les enseignants). À distinguer de **Non couvert** : pas un trou, une décision éditoriale. Cas identifiés en session : `RA-PROJET-C04-4/PROJ/3` (terminologie technique écrit/oral), `RA-PROJET-C07-1/PROJ/4` (participer aux tâches), `RA-PROJET-C07-1/PROJ/5` (être force de proposition), `RA-PROJET-C07-1/PROJ/6` (participer aux événements).
- **C16 — 1 fiche-tuto par critère EEE/info embarquée (ou tutoriel gonflé multi-couverture)** : pour les critères EEE et info embarquée, une fiche-tuto par critère ou par groupe cohérent en phase 2. Pas de critère EEE qui reste en effleurage permanent — chacun doit avoir un endroit nommé dans le wiki phase 2. Quand un critère cite plusieurs solutions (ex. logigramme/MAE/grafcet/chronogramme pour `EEE/5`), **1 fiche par solution** plutôt qu'une fiche regroupante. **Un tutoriel gonflé peut couvrir plusieurs critères** — acquis 26/05 suite 2 sur décision utilisateur.

### Reclassement rétroactif Hors scope sur fiches déjà cartographiées
Après acquisition de C15 en session, le critère `RA-PROJET-C04-4/PROJ/3` (Effleuré dans spec-tech / concept / PoC / dossier-tech) a été déplacé vers la catégorie Hors scope dans les 4 cartographies concernées. Bilans normalisés en conséquence : spec-tech 12 → 11, concept 17 → 16, PoC 13 → 12, dossier-tech 18 → 17. Patch batch d'edits sur `couverture-en-cours.md`.

### Patches structurels en session
- **`content/fiches/proj/gestion-de-projet.md`** : 5 outils canoniques → 6 outils (ajout du suivi budgétaire dans le bloc 2) + livrable 2/3 enrichi (sous-liste Continu mentionne suivi budgétaire mis à jour à chaque revue de phase et engagement matériel majeur).
- **`content/index.md`**, **`content/hub/index.md`**, **`content/fiches/eee/index.md`** : MIA retiré de la navigation, EEE élargie sémantiquement (« Électronique et informatique embarquée »).
- **`TODO.md`** : 6 fiches phase 2 ajoutées à la liste *Notions à produire en parallèle* (ecodesign, analyse-de-schema-electronique, 4 méthodes commande logigramme/MAE/grafcet/chronogramme, optimisation-mecanique). Ajout manipulation manuelle suppression dossier `content/fiches/mia/`.

### Incident technique résolu en session
**GitHub Actions « Deploy quartz site to github page » avait échoué en 2s** d'après un mail reçu par l'utilisateur. Diagnostic initial : workflow `.github/workflows/deploy.yml` standard (Quartz vanilla, Node 22, `actions/deploy-pages@v4`). Aucun changement local poussé cette session à ce stade.

**Cause identifiée après remontée logs utilisateur** : `actions/upload-pages-artifact@v3` résolue par GitHub Actions vers le SHA `56afc609e74202658d3ffba0e8f6dda462b719fa`, non téléchargeable depuis `codeload.github.com` (« Failed to download archive after 1 attempts »). SHA pinné du tag v3 révoqué ou non servi.

**Fix appliqué en session** : bump `actions/upload-pages-artifact@v3` → `@v4` dans `.github/workflows/deploy.yml`. Patch d'une ligne, niveau C (modification d'infra validée). Push utilisateur → build redevenu OK. Compatibilité avec `actions/deploy-pages@v4` conservée (pas besoin de bumper deploy-pages).

**Leçon** : sur les actions GitHub officielles pinées par tag majeur, surveiller périodiquement les bumps majeurs. v3 → v4 d'`upload-pages-artifact` semble correspondre au passage de format d'artifact (suit la migration v3→v4 d'`actions/upload-artifact` plus largement, fin 2024-2025).

### Incident C14 vécu en session
- 2 typos de transcription dans anchors `oldText` sur le batch initial de `couverture-en-cours.md` (espacement 2 vs 3 espaces avant `#` dans les commentaires YAML selon fiche). Batch rejeté, anchors recopiés depuis lecture MCP. **Discipline C14 confirmée** : recopier `oldText` exactement, ne jamais retranscrire de mémoire.
- 1 erreur de routage : 2 edits sur 2 fichiers différents passés en un seul appel `edit_file` avec un seul path. Batch rejeté. **Discipline** : 1 appel `edit_file` = 1 fichier.
- 2 régressions typographiques introduites par patch GP (« Le » → « le » et « centralisé » → « centralé ») corrigées immédiatement.

### Estimation du restant pour boucler le traitement AA
- **12 fiches-notion/tuto + hub** à cartographier en passe B accélérée — 1-2 sessions niveau B
- **Passe A par domaine** (EEE, ESE, MEO, MME, PROJ) — 0.5 session
- **Écriture champ `aa:` dans front matter** sur ~22 fiches — 0.5 session
- **Synthèse globale dans `couverture-en-cours.md`** — 0.5 session

Total : **2-3 sessions** pour boucler. Reprise rédaction fiches phase 2 possible dès passe A finie.

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes.
- **Promotion C1-C6 § 7 → § 1-2** : épreuve 3/3 réussie, à acter à froid (niveau C requis).
- **Promotion C13** (relire amont) déjà acquise.
- **Promotions C15 + C16** : acquises 26/05 suite 2, à documenter en § 7 puis acter en § 6 après confirmation sur fiches-notion phase 2.
- **Vérification GitHub Pages** : résolu en session, voir paragraphe Incident technique ci-dessus.
- **Commit/push** : rattrapage depuis 19/05 (9+ sessions accumulées maintenant) + session courante.
- **Suppression manuelle dossier `content/fiches/mia/`** : limite MCP delete.

---

## 2026-05-26 (suite) — Sécurité-qualité (3e transverse) + finalisation archivage MCP + cadrage session AA

### Périmètre de session
Triple front : (1) rédaction complète de la fiche-trame `securite-et-qualite` (3e et dernière transverse, clôt la phase 1 du wiki avec 5/5 trames V + 3/3 transverses), (2) MAJ documentaire à chaud BACKLOG/TODO/conventions, (3) finalisation de l'archivage JOURNAL 22→24/05 (suite) via MCP segmenté (défi C14 relevé), (4) cadrage de la prochaine session sur la cartographie des 107 AA.

### Rédaction `securite-et-qualite.md`

Cadrage initial — 5 questions tranchées :

1. **Structure** : 3 blocs co-actifs (Sécurité produit / Sécurité projet / Qualité documentaire), pas N étapes. Convention transverses confirmée (3/3).
2. **Tressage** : sécu et qualité tressées dans chaque bloc (option a), pas séparées.
3. **Frontière ESE** : citer + déléguer le normatif pointu (marquage CE, basse tension, EMC, ISO 12100, EPI) — ne pas refaire le travail des collègues.
4. **Fil rouge bras 3 axes** : 3 axes méthodologiques + 3 règles ajoutées par l'utilisateur (pas de 230V sans encadrant, pas de machine sans formation, jamais seul).
5. **Articulation des 3 axes** : cadence projet / matrice de risques / piloter sans écraser.

Production : fiche complète (28 ko), 3 `[!example]` bras 3 axes avec semaines n°2-15 (cohérence chiffrée avec `integration-et-tests` et `dossier-technique` : alu 6061, PCB monoface gravé interne, 3 cond. 100 nF, 24 V, fusible 3 A, couple stepper 0.5 Nm), 3 `[!livrable]` format Continu/Jalonné, 1 `[!warning]` sécu projet + 1 `[!tip]` qualité doc, 11 pièges format gras court + explication (~45 % a posteriori, conforme C12).

Cohérence finale 4 passes : 0/0/N-A/3 patches wiki-links (Objectif + Bloc 3 + Équipe). Pattern stable post-promotion C6.

### MAJ documentaire à chaud

- **BACKLOG.md** (5 patches batch) : `hub/ecoconception` et `hub/securite-et-qualite` cochés → phase 1 wiki complète (5/5 trames V + 3/3 transverses). 7 nouvelles cibles wiki-links ajoutées : `revue-de-code` (MIA), `amdec` (PROJ), `marquage-ce` / `basse-tension` / `emc` / `iso-12100` / `epi` (ESE renommée « Écoconception, sécurité produit, normes »).
- **TODO.md** (5 patches en 2 batches) : flèche prochaine session refondue → cartographie AA OU fiche-notion prioritaire (PCB / AMDEC / caracteriser-une-exigence). Sécu-qualité cochée. Entry commit/push session ajoutée. Rotation glissante Fait : nouvelle session 2026-05-26 (suite) en tête (12 entrées capitalisation), session 25/05 suite 7 PoC retirée.
- **conventions.md** (1 patch) : bannière § 7 C1-C6 épreuve 3/3 réussie → promotion § 1-2 envisageable à acter à froid (niveau C requis).

Incident C14 vécu : typo de transcription arrow `➤` (U+27A4) vs `➔` (U+2794) → 1er patch TODO en échec, corrigé via `read_text_file head=10` puis re-batch OK. Discipline retenue : recopier `oldText` depuis lecture MCP plutôt que retranscrire.

### Finalisation archivage JOURNAL 22→24/05 (suite) via MCP — défi C14 relevé

Bloc à archiver = 7 sessions (22/05 + 22/05 suite + 23/05 + 23/05 suite + 23/05 suite 2 + 24/05 + 24/05 suite) = **~60 ko net**. Au-dessus du seuil C14 (~30 ko payload) → segmentation obligatoire.

**Stratégie validée : MARKER temporaire + N segments**. Pattern à acter comme procédure standard pour gros déplacements de blocs.

**Phase 1 — Insertion archive (5 étapes)** : pose marker `<!-- ARCHIVE_INSERT_MARKER -->` juste avant `## 2026-05-21 (suite 2)` dans `JOURNAL-archive.md` → insertion seg3 (22/05 ×2, ~20 ko) → seg2 (23/05 ×3, ~24 ko — payload le plus gros, sous seuil) → seg1 (24/05 ×2, ~17 ko) → retrait marker. Antichronologie respectée : 24/05 (suite 2) — 24/05 (suite) — 24/05 — 23/05 (suite 2) — 23/05 (suite) — 23/05 — 22/05 (suite) — 22/05 — 21/05 (suite 2).

**Phase 2 — Trim JOURNAL.md (5 étapes)** : T1 seg1 supprimé → T2 seg2 supprimé → **T3 bloqué EPERM** (verrou Windows, Obsidian focus sur JOURNAL.md) → T3 réussi après libération du verrou (changement d'onglet dans Obsidian) → T4 warning préambule supprimé + mise à jour de la phrase « antérieures au 25/05 » + résumé d'archive élargi → T5 séparateur orphelin nettoyé + commentaire HTML final mis à jour (mentionne les deux vagues d'archivage : 25/05 pour 19→21/05 + 24/05 suite 2, et 26/05 suite pour 22→24/05 suite).

**Bilan tailles** : JOURNAL.md 156 → 96 ko (−60 ko), JOURNAL-archive.md 60 → 119 ko (+59 ko). Cohérent.

### Leçons méthodo

**C14 seuil ~30 ko validé** : un `edit_file` de 24 ko net + 200 chars d'anchor passe sans souci. Marge confortable à 25 ko. La zone d'échec silencieux semble commencer plus haut que documenté initialement (à ré-éprouver à froid pour calibrage).

**Nouveau piège distinct du seuil C14 — verrou Windows EPERM** : quand Obsidian a le fichier focus ouvert, MCP `edit_file` réussit l'écriture du `.tmp` mais échoue au rename final avec `EPERM: operation not permitted, rename '*.tmp' -> 'file.md'`. C'est un problème d'OS, pas de payload. Remède : changer d'onglet dans Obsidian (libère le verrou, pas besoin de fermer Obsidian). À documenter dans `conventions.md` § 7 comme amendement C14.

**Pattern MARKER + N segments** : stratégie méthodo qui rend faisables les déplacements de blocs > 30 ko via MCP. À capitaliser comme procédure standard si la situation se reproduit (typiquement les archivages JOURNAL ultérieurs).

### Cadrage prochaine session — cartographie AA

Référentiel école à jour rangé dans `_drafts/referentiel/Compétences.xlsx` (sous-dossier `referentiel/` créé par l'utilisateur). Décision d'emplacement : cohérent avec `_drafts/flowcharts/`, hors site Quartz, document de pilotage interne. Également uploadé dans le projet Claude.ai pour accès `/mnt/project/` en début de session.

3 questions méthodo à trancher en début de session AA :
1. **Format de cartographie** : champ `aa: [...]` dans front matter (C9, jamais rempli) / table centralisée dans `hub/index.md` / les deux ?
2. **Granularité** : un AA effleuré compte-t-il comme couvert, ou faut-il un seuil (fiche dédiée OU section dédiée) ?
3. **Ordre de traitement** : par domaine du référentiel (EEE → MIA → MEO → PROJ → MME → ESE) ou par fiche existante (lecture en aveugle de chaque fiche, lister les AA couverts, recoupement) ?

Mode : niveau C jusqu'aux conventions stabilisées sur 2-3 fiches, puis niveau B sur l'exécution répétitive.

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes.
- **Promotion C1-C6 § 7 → § 1-2** : épreuve 3/3 réussie (`gestion-de-projet`, `ecoconception`, `securite-et-qualite`), à acter à froid (niveau C requis).
- **Amendement C14 — leçon EPERM Windows** : à intégrer dans `conventions.md` § 7 « En cours d'éprouvage ».
- **Cartographie 107 AA** : session dédiée à programmer (prochaine session, voir cadrage ci-dessus).
- **Convention emplacement référentiels** : `_drafts/referentiel/` pour les documents école externes — à documenter formellement si confirmé sur un 2e cas.
- **Re-calibrage seuil C14** : la valeur exacte du seuil pratique mérite éprouvage à froid (24 ko passe, 50 ko échoue le 25/05 suite 8 — zone intermédiaire 30-40 ko à explorer).
- **Commit/push** : rattrapage depuis 19/05 (8+ sessions accumulées) + session courante — à faire en fin de session.

---

## 2026-05-26 — Integration et tests : approfondissement complet voie C + 3 actes à froid + amendements conventions

### Périmètre de session
Approfondissement complet de `integration-et-tests.md` (5ᵉ et dernière trame du V) sur session démarrée sur PC pro. Session structurée en 3 actes à froid de capitalisation documentaire (rotation glissante TODO + promotions C10 et C12) puis cadrage voie C en 5 questions tranchées + arbitrage d'un conflit pédagogique détecté entre squelette 22/05 et demande Q1 utilisateur, puis rédaction complète en niveau A des 5 étapes (rythme 2/3/3/2/2 H4 dont 1 cas exception multi-disciplinaire et 1 cas pyramide compressée) + Pièges + Équipe + cohérence finale 4 passes.

### 3 actes à froid en début de session
1. **Rotation glissante TODO** : suite 5 retirée de la section Fait (4 sessions → 3 conformément à la règle § 9 du prompt projet).
2. **Promotion C10 vers § 2** (matrice incarnée dans `[!example]`) après épreuve 3/3 cumulant **12 contextes** : concept 4 (matrice de décision 3×5 / tableau conflits 4×2 / pré-dim 6×5 / TdM 5 sections) + PoC 4 (liste 3 sources / relevés 5 points 1000 cycles / tableau de statut / TdM type 5 sections) + dossier-technique 4 (ajustements 3 familles / BOM 7×6 213,20 € HT / 3 validateurs × 5 colonnes / 3 bons de commande). Bannière promotion ajoutée en § 7 avec marqueur « promue 26/05 », entrée 10 conservée intacte pour traçabilité.
3. **Promotion C12 vers § 6** (Pièges nourris a posteriori) après ratio stable 37-45 % sur 3 trames du V éprouvées (concept 37 %, PoC 45 %, dossier-tech 45 %). Bannière promotion ajoutée en § 7 avec marqueur « promue 26/05 », entrée 12 conservée pour traçabilité.

### Cadrage en début de session — 5 questions tranchées + conflit pédagogique détecté
5 questions tranchées en bloc, validées par utilisateur avec ajustements Q1 (sous-titres disciplinaires élec/méca/info avec wiki-links vers futurs tutos) et rappel Q3 (pas de temporel en prose, `semaine n°X` uniquement dans `[!example]`).

**Conflit pédagogique majeur détecté** au moment de lire le squelette existant : la structure 22/05 défend explicitement les tests **par fonction** (anti-pattern explicite « par discipline = incohérent mécatronique »), incompatible avec la demande Q1 utilisateur (sous-titres disciplinaires). **Voie C retenue par utilisateur** : conserver la structure squelette 22/05 (tests par fonction sur les niveaux 1+), appliquer 3 H4 disciplinaires UNIQUEMENT en étape 2 (validation niveau 0 = inspection d'artefacts physiques disciplinaires, légitime). Compatible avec anti-pattern + demande Q1.

**Rythme final 2/3/3/2/2 = 12 H4**, dont 2 cas inédits :
- Étape 2 = 3 H4 par discipline (élec / méca / info) — exception multi-disciplinaire à acter en C11.
- Étape 3 = 3 H4 dense pivot pour 4 niveaux (niveau 1 / niveaux 2-3 / niveau 4) — cas pyramide compressée à acter en C11.

### Niveau A en autonomie sur toute la fiche
Accordé par l'utilisateur après cadrage. Workflow A = clôture autonome avec récap synthétique en fin de phase 8.

### Phase 1 — Alignement v2.1 du squelette (11 patches batch)
5× titre example `Exemple : projet bras 3 axes`, 5× titre livrable `Livrable N/X — Intégration et tests` (singulier ou pluriel selon nombre d'items), 1× warning titre `Attention` + phrase-clé gras dans le corps. Squelette aligné conventions visuelles avant rédaction.

### Phases 2-6 — Rédaction des 5 étapes en niveau A

**Étape 1 *Approvisionner et fabriquer*** (2 H4 économes hors pivot) : intro 2 ¶ (pont depuis dossier-tech, propos parallélisme branche réception vs branche fabrication interne) + H4-1 *Recevoir les commandes externes au rythme des livraisons* (3 gestes simples à la réception) + tip Astuce traçabilité étiquette + H4-2 *Fabriquer en interne au rythme des moyens disponibles* (3 moyens : impression 3D / usinage / PCB gravure école) + warning Attention « Une pièce sortie de machine n'est pas une pièce validée » (pont vers étape 2 niveau 0). `[!example]` refondu sur fil rouge alu 6061 : 3 paragraphes structurés par branche + sortie d'étape sem. 15.

**Étape 2 *Valider les pièces fabriquées*** (**3 H4 disciplinaires**, 1ʳᵉ exception multi-disciplinaire C11) : intro 2 ¶ justifiant pourquoi disciplinaire ici vs multi-discipline étape 3 (artefacts physiques disciplinaires vs fonctions mécatroniques). H4-1 *Valider la chaîne électrique* (4 axes : continuité PCB / alim régulée / niveaux logiques MCU / réponse drivers bench). H4-2 *Valider les pièces mécaniques* (visuel + dimensionnel + essai à blanc). H4-3 *Valider le firmware et l'environnement de développement*. Tip Astuce traçabilité fiche dossier de tests + warning Attention « Sauter le niveau 0 contamine ». `[!example]` : 4 paragraphes structurés (chaîne élec / pièces méca / firmware / sortie d'étape) avec 1 condensateur 100 nF remplacé, 1 segment PLA délamination → réimpression.

**Étape 3 *Conduire la pyramide de tests*** (**3 H4 dense pivot, pyramide compressée** — cas particulier C11) : intro 2 ¶ (cœur de l'étape, tests par fonction multi-discipline, cascade ascendante avec rétroactions ciblées). H4-1 *Tester chaque fonction du CdCF isolément (niveau 1)*. H4-2 *Tester les compositions de fonctions, puis le système complet (niveaux 2 et 3)*. H4-3 *Qualifier le prototype contre le CdCF — refermer le V (niveau 4)* avec 3 sorties nominales (critères atteints / partiellement atteints / non atteints). Tip Astuce préparer fiche qualif niveau 4 en parallèle + warning Attention refondu sur « Au niveau 4, l'écart se documente, il ne se rattrape pas » (refonte pour éviter doublon avec H4-3 qui définit « le V se referme »). `[!example]` : 5 paragraphes structurés par niveau, qualification CdCF chiffrée (précision 8 mm vs 5 mm cible NON atteint, charge 100 g ATTEINT, vitesse 45 vs 50 mm/s PARTIELLEMENT atteint), statut « prototype qualifié avec écarts documentés », jeu articulaire identifié comme cause, articulations à roulements pistées.

**Étape 4 *Mener les bilans de clôture*** (2 H4 économes, ni pivot ni clôture documentaire pure) : intro 2 ¶ (3 bilans en parallèle par contrainte calendaire + REX réflexif distinct). H4-1 *Conduire les trois bilans en parallèle* (bilan technique : tableau qualif + analyse écarts ; bilan projet : planning vs rétroplanning, budget, matrice de risques ; bilan écoconception : ACV réelle vs estimée du dossier-tech). H4-2 *Capitaliser via le REX d'équipe* (3 questions canoniques, compétence MEO en propre). Tip Astuce REX en revue à blanc + warning Attention « bilan technique ≠ liste d'écarts ». `[!example]` : 4 paragraphes structurés (bilan technique reprend précision 8 mm + jeu articulaire / bilan projet retard 4 jours + budget 215 € HT + risque lead time confirmé / bilan éco ACV ≈50 % steppers + 30 % alu aligné estimé / REX bascule PLA→alu salvatrice + caractérisation jeu plus précoce + transmission STL anticipée bonne pratique).

**Étape 5 *Livrer le projet*** (2 H4 économes, livraison documentaire + orale) : intro 2 ¶ (rédiger d'abord, démontrer ensuite — rapport matrice de la soutenance). H4-1 *Rédiger le rapport final* (structure par phases du V, qualif + écarts les plus lus). H4-2 *Préparer et passer la soutenance* (3 moments : démo / écarts honnêtes / regard équipe). Tip Astuce rédiger rapport en commençant par les bilans + warning Attention « préparer soutenance avant rapport mauvaise idée ». `[!example]` : 3 paragraphes structurés (rapport remis dernier jour sem. 15 / soutenance lendemain avec démo trajectoire 3 points + jeu articulaire vidéo ralentie + REX transmission STL + répartition parole par bloc).

### Phase 7 — Pièges + Équipe refondus

**Pièges fréquents** : 6 puces simples du squelette refondues en **11 entrées format `**Piège court.** Phrase d'explication.`** (convention 12). Ratio a posteriori ~55 % (6/11 émergés pendant rédaction des étapes 2-5), cohérent avec range 37-45 % typique en légère augmentation. Pièges : sauter niveau 0 / confondre validation disciplinaire et tests fonctionnels / découper tests par discipline / banc vs pièce / fiche qualif en dernier / refaire cinématique en urgence / boucher au lieu documenter / bilans en série / énumérer sans positif / REX vs bilan projet / soutenance avant rapport.

**Pendant cette phase, côté équipe** : 4 ¶ thématiques (interfaces métiers méca/info/élec / gestion-de-projet / écoconception / sécurité-et-qualité). Wiki-links posés sur cibles existantes ou à créer (`firmware`, `gabarit`, `cable-management`, `niveau-logique`).

### Phase 8 — Cohérence finale 4 passes (3 patches)

- **Passe 1 terminologie** : 1 typo « écartoé » → « écarté » dans piège 4 (banc vs pièce).
- **Passe 2 fil rouge bras 3 axes** : 0 patch (cohérence chiffrée inter-étapes OK : précision 8 mm récurrente, budget 215 € HT, ACV 50 %/30 %, articulations alu en lead time long).
- **Passe 3 ponts inter-étapes** : 0 patch (sortie d'étape 2 example renvoie vers étape 3, étape 3 H4-1 rétroactive vers étape 2, étape 4 intro ponte depuis étape 3, étape 5 intro depuis étape 4 — pattern stable).
- **Passe 4 wiki-links exhaustif** : 2 doublons détectés (PCB ×2 dans étape 2 H4-1, CdCF ×2 dans étape 3 H4-1) → retirer le 2ᵉ wiki-link de chaque section. Pattern « 0 patch » du dossier-tech non atteint, mais corrections mineures (3 patches au total).

Total **27 patches** sur la session, fiche `integration-et-tests.md` 35 878 bytes.

### Round 2 utilisateur
Validé sans correction. Fiche close.

### Conventions éprouvées et acquises
- **C1** (temporel limité aux `[!example]`) : 5/5 `[!example]` contiennent `semaine n°X`, aucune prose générique.
- **C6** (wiki-links 1ʳᵉ occurrence par section/sous-section/callout) : audit passé en passe 4 avec 2 corrections de doublons (mode au fil + filet passe dédiée).
- **C10** (matrice incarnée) : 5/5 `[!example]` sont des objets structurés (3/4/5/4/3 paragraphes selon étape). Pattern stable post-promotion.
- **C11** (rythme H4) : 2 cas inédits acquis. **Convention amendée § 6** : exception multi-disciplinaire (3 H4 par discipline) + cas pyramide compressée (3 H4 dense pour 4 niveaux). Documenté en sortie de session.
- **C12** (Pièges a posteriori) : ratio 55 % (6/11), cohérent avec range 37-45 % en légère croissance.
- **C13** (relire amont) : 2ᵉ épreuve formelle réussie. **Convention promue § 5 (Collaboration)** en sortie de session après dossier-tech + integration-et-tests sans round 2 utilisateur sur sections amont.
- **C14** (seuil 30 ko payload MCP) : éprouvée en début de session sur les patches d'alignement v2.1 (batch 11 patches ~2 ko). **Convention enrichie § 7** : leçon NBSPs U+202F + typos de transcription dans anchors longs comme source d'échec silencieux du matching `oldText` (2 cas vécus en session : NBSPs présumés sur placeholder + typo « enchaîner » → « enchaâîner » dans anchor).

### Wiki-links nouveaux poussés au BACKLOG
- `firmware` (MIA) — popover posé étape 2 intro + H4-3 + section Équipe
- `gabarit` (MME) — popover posé étape 2 H4-2
- `cable-management` (EEE) — popover posé section Équipe
- `niveau-logique` (EEE) — transformation entrée existante en wiki-link explicite

### Leçons méthodo capitalisées dans `conventions.md` § 7
- **Typos de transcription dans anchors `edit_file`** : reconstituer un `oldText` de mémoire introduit des typos invisibles (cas vécu : « enchaâîner » au lieu de « enchaîner » dans anchor étape 3 example, mismatch silencieux). Discipline : recopier `oldText` directement depuis la sortie de `read_text_file` plutôt que retranscrire.
- **NBSPs fines U+202F** : la typo française pose des NBSPs invisibles devant `: ; ? ! % » €`. Anchors longs reconstitués visuellement → mismatch silencieux. Discipline : anchors courts privilégiés (1 phrase identifiante), `\u202f` explicite si traversée nécessaire.

### Tâches restantes en fin de session
1. Tâche manuelle utilisateur : finalisation archivage JOURNAL 22-24/05 dans Obsidian (rappelée en début de session, toujours pendante).
2. Commit + push session 26/05 (s'ajoute à la liste de rattrapage depuis 19/05).
3. Vérifications visuelles rendu Quartz mobile poussées au TODO (5 étapes + Pièges + Équipe d'integration-et-tests).

### Phase 1 du wiki = complète côté trames du V
Avec la clôture de `integration-et-tests`, les 5 trames du V sont approfondies (concept 25/05 suite 4-6, PoC 25/05 suite 7, dossier-technique 25/05 suite 8, integration-et-tests 26/05 ; specification-technique antérieure). Prochaine cible : `securite-et-qualite` (3ᵉ et dernier fil transverse, après `gestion-de-projet` 25/05 et `ecoconception`). Niveau A en autonomie déjà validé par l'utilisateur pour cette fiche.

### État JOURNAL.md
Taille actuelle estimée 140 ko (au-dessus du seuil 100 ko). Archivage 22-24/05 toujours pendant en tâche manuelle utilisateur (procédure dans TODO Manipulations manuelles, voir convention 14 sur le seuil pratique MCP).

---

<!-- DEBUT DES SESSIONS 25/05 — ARCHIVEES LE 26/05 SUITE 4 -->

## 2026-05-25 (suite 5) — Concept : approfondissement étapes 3-4-5 + Pièges + Équipe

### Périmètre de session
Approfondissement des 3 étapes restantes de `concept.md` (étapes 1-2 + alignement v2.1 faits 25/05 suite 4), puis refonte des sections *Pièges fréquents* et *Pendant cette phase, côté équipe*. Cohérence finale d'ensemble (relecture progressive des 5 étapes) reportée à session dédiée selon le découpage acquis 24/05 suite 2 (geste de relecture critique = tête reposée). PC perso, préfixe MCP `filesystem:*`.

### Cadrage étape 3 — 3 questions tranchées (niveau C)
1. **Intitulés des 3 H4** : *Confronter les solutions retenues* / *Caractériser les conflits inter-disciplines* / *Renégocier sans tout casser*. Reformulation de H4-2 par rapport au cadrage initial (*Identifier et arbitrer* → *Caractériser*) : l'identification est mécaniquement induite par H4-1, l'arbitrage est porté par H4-3, H4-2 sert spécifiquement à qualifier (nature / périmètre / opposabilité CdCF).
2. **Convention 10 (matrice incarnée) sur étape 3** : oui, sous forme de **tableau de conflits identifiés** (1 ligne = 1 conflit, colonnes : sous-systèmes impactés / nature / opposabilité CdCF) plutôt qu'une matrice 3×3 (élégante en apparence mais artificielle si peu de conflits réels — beaucoup de cellules vides ou symétriques). Scalable, narratif, et reste opposable.
3. **Profondeur du fil rouge bras 3 axes** : option B — cas développé en sortie d'étape (1 `[!example]` riche), aligné sur la convention « 1 `[!example]` par étape ». Micro-allusions au fil rouge possibles dans le corps des H4 mais récit principal concentré dans le `[!example]`.

### Production étape 3 (pivot dense) — 4 patches en batch
Niveau B. Structure : intro 2 paragraphes (pont depuis étape 2, annonce 3 temps, positionnement comme **pivot de la phase concept**) + 3 H4 :
- **Confronter les solutions retenues** — sortir des branches, parcourir les interfaces deux à deux (élec↔méca, élec↔info, méca↔info), rendre visibles les frictions sans trancher.
- **Caractériser les conflits inter-disciplines** — 3 axes de qualification (nature / périmètre / opposabilité CdCF) en liste numérotée (convention 4), sortie = tableau récapitulatif hiérarchisé.
- **Renégocier sans tout casser** — à toutes les disciplines impactées simultanément (jamais en bilatéral), 3 leviers ordonnés du moins au plus coûteux (revoir arbitrage local / modifier décomposition / assouplir exigence CdCF), anti-pattern « branche la plus avancée impose son arbitrage ».

Callouts : `[!warning]` Attention légèrement retouché pour éviter doublon avec l'intro (« moment pédagogique central » → « moment où l'équipe apprend ce qu'arbitrer veut dire ») + `[!tip]` Astuce nouveau (convocation à trois plutôt qu'en bilatéral) + `[!example]` enrichi avec tableau de conflits 4 colonnes × 2 lignes (Conflit / Sous-systèmes impactés / Nature / Opposabilité CdCF) + déroulé renégociation à trois sur conflit n°1 (méca articulations à axe unique ↔ info cinématique inverse à offset) avec 3 voies explorées et compromis retenu (offset court côté méca + lookup table côté info). Conflit n°2 retombe en partie par effet collatéral. `[!livrable]` enrichi d'une ligne sur le tableau des conflits arbitrés.

Round 2 validé sans correction.

### Production étape 4 (hors pivot) — niveau B, annonce + batch de 2 patches
Structure : intro 2 paragraphes (pont depuis étape 3, annonce 2 temps, distinction nette pré-dim ≠ dimensionnement définitif qui vient en dossier technique) + 2 H4 économes (éprouve convention 11 stricte) :
- **Pré-dimensionner par discipline** — grandeurs critiques par discipline (méca : couples/efforts/flèches ; élec : courants/tensions/dissipation ; info : ressources/latences), sortie uniforme (valeur calculée / valeur de spec / marge), seuils 30 %/10 %/négative qui orientent vers OK / incertitude / retour étape 3.
- **Identifier les incertitudes à lever en preuve de concept** — 4 catégories typiques (marge serrée à la limite du calcul / phénomène mal modélisé / couplage inter-disciplines / hypothèse d'usage non validée) en liste numérotée, sortie comme **liste de questions** rattachées au CdCF.

Callouts : `[!warning]` « Une marge serrée n'est pas une marge, c'est une incertitude » + `[!tip]` formuler chaque incertitude en question (test pratique : ça se teste ou non) + `[!example]` avec **tableau de pré-dim 6 colonnes × 5 lignes** sur la *mobilité articulaire* (verdicts : 2 OK, 2 marges serrées, 1 incertitude) + I1 et I2 formulées en question, rattachées à F0 et F1, avec protocole d'essai esquissé. Livrables existants conservés.

Round 2 validé sans correction.

### Cadrage étape 5 — 3 questions tranchées (niveau C léger)
1. **Structure 3 H4** — par analogie spec-tech étape 6 (Structurer / Rédiger / Faire valider). **Exception assumée à la convention 11 pour les étapes de clôture documentaire** — réformulation : « 2 H4 hors pivot, sauf clôture documentaire qui suit son propre miroir de spec-tech étape 6 ». Intitulés : *Structurer le dossier concept* / *Rédiger chaque section* / *Faire valider en revue de concept* (calque lexical de « revue de CdCF »).
2. **Convention 10 sur étape 5** : oui, sous forme de **TdM incarnée du dossier concept** dans l'`[!example]`, calque de la TdM CdCF de spec-tech étape 6 — 5 sections agrégeant les 5 livrables des étapes 1-4 dans l'ordre. Convention 10 éprouvée dans son 4ᵉ contexte au sein de concept (matrice décision / tableau de conflits / tableau de pré-dim / TdM).
3. **Template Word concept** : **non**, pas maintenant. Argument contre : le dossier concept agrège des productions hétérogènes (décomposition + matrices + architecture + pré-dim + incertitudes) là où le CdCF était plus normé. Un template Word figerait un format avant d'avoir du recul. Possibilité ouverte ultérieurement, pas en session.

### Production étape 5 (clôture documentaire) — niveau B, batch de 3 patches
Structure : intro 2 paragraphes (« l'étape 5 ne produit rien de nouveau, elle agrège » + équivalence directe avec rédaction du CdCF en fin de spec-tech) + 3 H4 :
- **Structurer le dossier concept** — narration *quoi → comment → ensemble → chiffrage → ce qui reste* + **TdM type 5 sections** en liste numérotée (Présentation et contexte / Décomposition fonctionnelle / Arbitrages disciplinaires / Architecture globale / Pré-dim et incertitudes) + mention section *Annexes* optionnelle.
- **Rédiger chaque section** — 3 soins (forme / cohérence inter-sections / traçabilité jusqu'au CdCF) avec mention explicite de la documentation des rétroactions CdCF intervenues en cours de phase (ne pas masquer).
- **Faire valider en revue de concept** — nature du jalon (équivalent go/no-go d'architecture) + préparation + **4 issues** (validé / validé sous conditions / reprise locale étape 3-4 / rétroaction vers spec-tech).

Callouts : `[!warning]` « Compiler n'est pas rédiger » + `[!tip]` revue à blanc en équipe avant le jour J + `[!example]` avec TdM type instanciée sur les 5 sections du dossier bras 3 axes (rappel rétroaction CdCF étape 1 = ajout FC démontabilité, 3 sous-systèmes, matrices, schéma bloc avec offset court, 2 incertitudes I1/I2 rattachées F0/F1) + issue de revue tracée (« validé sous conditions » + 2 compléments demandés) + engagement preuve de concept en semaine n°6. Livrable enrichi avec mention 5 sections + traçabilité CdCF + issue tracée.

Round 2 validé sans correction.

### Pièges fréquents — refonte 5 puces → 8 entrées gras court + explication
Niveau B sur le calque spec-tech 24/05 partie 1. Les 5 pièges existants reformulés au format **« Piège court. » + 1-2 phrases d'explication** (Choisir les composants définitifs trop tôt / Laisser chaque discipline finir sa matrice avant de confronter / Traiter l'écoconception comme une case à cocher / Confondre front de travail et répartition des rôles / Sauter le pré-dim). **3 nouveaux pièges émergés spontanément des étapes 3-4-5** : Renégocier en bilatéral (étape 3) / Habiller une marge serrée en certitude par un calcul plus fin (étape 4) / Compiler le dossier au lieu de le rédiger (étape 5). Total : 8 pièges. **Leçon méthodo** : la section *Pièges* se nourrit a posteriori des leçons rédactionnelles des étapes (3 pièges sur 8 émergés pendant la rédaction), pas a priori d'une checklist méthodo. Mode complémentaire à spec-tech 23/05 suite 2 (pièges identifiés en relecture critique) — les deux modes coexistent.

### Pendant cette phase, côté équipe — 4 paragraphes thématiques
Niveau B sur le calque spec-tech 24/05 partie 1. **Interfaces métiers** — méca, fabrication, info, mobilisation des cours collègues, dialogue calé en amont de la phase. **Gestion de projet** — arbitrages d'architecture comme décisions structurantes (mise à jour matrice de risques et rétroplanning), incertitudes étape 4 comme commande de la PoC, revue de concept inscrite au rétroplanning dès spec-tech, autorisation des chevauchements temporels mais pas dans l'ordre des livrables. **Écoconception** — graines réparties étapes 2-3-4-5, agrégées par le dossier concept. **Sécurité-qualité** — exigences réglementaires CE/RoHS/REACH/DEEE traduites en contraintes d'arbitrage dès la matrice de l'étape 2 (éliminer en amont, pas en fin de course). Wiki-links semerés en lien rouge sur les notions normatives (rohs, reach, deee) et procédés (usinage, impression-3d, soudure) — déjà inventoriés au TODO.

Round 2 validé sans correction.

### 5 round 2 successifs sans correction — signal méthodo
Les 5 étapes (étapes 1+2 du 25/05 suite 4, puis étapes 3+4+5 + Pièges + Équipe ce jour) ont toutes été validées en round 2 sans correction. Au-delà de l'indicateur « les conventions sont internalisées » déjà noté au 25/05 suite 4, signal renforcé : la régularité tient sur 5 étapes consécutives avec deux types d'étape (pivot vs hors pivot) et deux sections transverses (Pièges et Équipe). Discipline à maintenir : ne pas relâcher la rigueur du round 2 sous prétexte de régularité (l'absence de correction ne dispense pas de la relecture).

### Convention 10 — 4 contextes éprouvés au sein de concept
1. Matrice décision 3×5 + scores pondérés (étape 2, 25/05 suite 4) — forme matricielle classique.
2. Tableau de conflits 4×2 (étape 3) — forme narrative, scalable.
3. Tableau de pré-dim 6×5 (étape 4) — densité supérieure, point de vigilance mobile.
4. TdM type 5 sections + TdM instanciée (étape 5) — forme listée plutôt que tabulaire.

Quatre formes différentes du même pattern (« incarner par un objet structuré dans l'`[!example]` »). Indicateur de généralité solide. Convention 10 promotionnable de la section *En cours d'éprouvage* vers la section 2 (Mise en forme — Callouts) lors d'une session ultérieure si confirmée sur preuve-de-concept et au-delà. Pour l'instant, MAJ de l'entrée « En cours d'éprouvage » pour acter les 4 contextes.

### Convention 11 — affinée avec exception clôture documentaire
Formulation initiale : « 2 H4 hors pivot » (validation étapes 1 et 2). Étape 3 (pivot) conforme : 3 H4 dense. Étape 4 (hors pivot) conforme : 2 H4 économes. Étape 5 (hors pivot) ne suit pas la formulation initiale : 3 H4 par analogie spec-tech étape 6 (également clôture documentaire).

Reformulation : **2 H4 hors pivot, sauf clôture documentaire qui suit son propre miroir** (3 H4 calque Structurer / Rédiger / Faire valider). Le critère d'application est donc tripartite : pivot → 3 H4 dense ; hors pivot non-clôture → 2 H4 économes ; clôture documentaire → 3 H4 calque structurel. À éprouver sur preuve-de-concept et dossier-technique étape 5 (probable clôture documentaire similaire). Convention reformulée poussée dans `conventions.md` § 7.

### Leçon méthodo — nourriture a posteriori de la section *Pièges*
Les 3 nouveaux pièges du concept (Renégocier en bilatéral / Marge serrée habillée / Compiler au lieu de rédiger) ont émergé spontanément pendant la rédaction des étapes 3-4-5 (warning / tip / warning respectivement). Indicateur : la section *Pièges* d'une fiche-trame n'a pas vocation à être rempli a priori comme une checklist méthodo — elle se nourrit a posteriori des arbitrages rendus visibles par la rédaction des étapes. Mode complémentaire à celui de spec-tech 23/05 suite 2 (4 pièges identifiés en relecture critique à froid). Les deux modes coexistent : un « grand nettoyage » en fin de phase (relecture critique) + un « dépôt continu » en cours de rédaction (warnings/tips qui se transforment en pièges). Convention possible à dériver si pattern confirmé sur preuve-de-concept.

### État de `concept.md` en fin de session
- Démarche complète : 5 étapes rédigées (1+2 économes, 3 pivot dense, 4 économe, 5 clôture documentaire 3 H4).
- Sections transverses : *Pièges fréquents* (8 entrées) et *Pendant cette phase, côté équipe* (4 paragraphes thématiques) rédigées.
- Front matter + Posture + Objectif + Conclusion + Voir aussi : posés depuis le 22/05 ou les sessions intermédiaires.
- **Reste pour clôturer la fiche** : cohérence finale d'ensemble (relecture progressive des 5 étapes + recoupements terminologiques + vérification fil rouge entre étapes + alignement des wiki-links). Geste de relecture critique à part entière — session dédiée courte selon le découpage acquis 24/05 suite 2.

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes.
- **Cohérence finale concept** — prochain enchainement proposé, session courte.
- **Conventions 10 et 11 affinées** à éprouver sur preuve-de-concept et dossier-technique pour confirmation avant promotion vers les sections fixes du fichier `conventions.md`.
- **Rétroaction CdCF de l'étape 1** (ajout FC démontabilité instancié dans l'`[!example]` étape 5) : exemple placé dans la trame concept, pas à propager rétroactivement dans spec-tech. À surveiller : si l'exemple devient un fil de cohérence inter-trames, préparer une note au CdCF d'origine en spec-tech à l'occasion d'un approfondissement.

---

## 2026-05-25 (suite 4) — Concept : approfondissement étapes 1-2 + alignement callouts v2.1

### Périmètre de session
Première session d'approfondissement de la fiche-trame `concept.md` (squelette du 22/05). Le squelette portait 5 étapes en placeholder italique + callouts au format pré-v2.1. PC perso, préfixe MCP `filesystem:*`. Trois actions principales : alignement v2.1 des callouts du squelette entier (préalable mécanique), puis rédaction des étapes 1 et 2.

### Cadrage en début de session — 3 questions tranchées (niveau C)
1. **Profondeur par étape** : option (b) pondérée. Étape 3 (pivot) prévue dense avec sous-sections H4 sur la gestion du conflit inter-disciplines, étape 5 dense en miroir de spec-tech étape 6 (rédaction du dossier), étapes 1/2/4 plus économes (2 H4 chacune). Justification : structure de spec-tech inversée (là, étape 4 = pivot ; ici, étape 3 = pivot, étape 5 = clôture documentaire).
2. **Ordre de traitement** : 1→5 linéaire (lecture naturelle, cohérence directe).
3. **Popover `[[decomposition-fonctionnelle]]`** : laissé en lien rouge, fiche-notion en session dédiée. Focus session sur la trame.

### Phase 1 — Alignement v2.1 du squelette (12 patches en batch)
Application en un seul appel `filesystem:edit_file` avec array d'edits :
- 5 `[!example] Sur le bras 3 axes` → `Exemple : projet bras 3 axes` (désambiguïsation par 1ère ligne du corps de chaque callout)
- 5 `[!livrable] Livrable de l'étape N` → `Livrable N/5 — Concept` (et `Livrables 4/5 — Concept` pour étape 4 qui en a 2)
- 1 `[!warning] Le conflit inter-disciplines arrive presque toujours` → titre fixe `Attention` + phrase-clé en gras dans le corps
- 1 `[!tip] Branches ≠ rôles` → titre fixe `Astuce` + phrase-clé en gras dans le corps

Diff propre, 12/12 patches appliqués. Discipline confirmée : `edit_file` accepte un array d'edits, suffisant pour batches multi-patches tant que chaque `oldText` est unique au fichier.

### Phase 2 — Rédaction étape 1 « Décomposer le système »
Niveau B (texte rédigé). Structure : intro 2 paragraphes (transition CdCF validé / annonce 2 temps) + 2 H4 :
- **Du système aux sous-systèmes** — 3 paragraphes (interfaces nettes, autonomie technique, taille comparable / visualisations SADT-IDEF0 et schéma bloc fonctionnel / découpage non figé révisable post-étape 2) + `[!warning] Attention` sur rétroaction CdCF (trou révélé pendant décomposition, ne pas masquer, économie « quelques heures vs semaines »).
- **Des sous-systèmes aux fonctions techniques** — 3 paragraphes (FAST verbe + complément, distinction service/technique, profondeur d'arrêt = adressabilité par solution candidate) + `[!tip] Astuce` sur raffinement FAST en plusieurs passes (premier jet haut niveau, raffinement à mesure que l'étape 2 fait apparaître les manques).

`[!example]` enrichi : 3 sous-systèmes du bras (mobilité articulaire / IHM / alim & sécurité) + FAST premier jet sur mobilité articulaire (4 fonctions techniques en verbe + complément : générer un couple, mesurer position angulaire, asservir, synchroniser les axes). Note explicite : le découpage ne reflète pas une répartition par discipline.

Wiki-links semés (étape 1) : `cahier-des-charges-fonctionnel`, `specification-technique`, `decomposition-fonctionnelle`, `schema-bloc-fonctionnel`, `fast`, `pieuvre`, `dossier-technique`, alias `FC` / `FP`.

### Phase 3 — Rédaction étape 2 « Explorer les solutions par discipline »
Niveau B. Structure parallèle à étape 1 (convention émergente sur les étapes hors pivot) : intro 2 paragraphes + 2 H4 :
- **Recenser les solutions candidates** — 2-5 solutions par sous-système (pas plus = dilution, pas moins = justification a posteriori), 5 sources à parcourir (état de l'art technique / catalogues fabricants / open source / expérience disciplinaire / brainstorm équipe), ne pas filtrer trop tôt.
- **Construire la matrice et arbitrer** — croisement solutions × critères, 6 familles de critères (performance / coût / encombrement-masse / écoconception / faisabilité école / risque technique), pondération opposable au CdCF (F0/F1 = poids fort, F3 = poids faible), écoconception comme critère pondéré (pas case à cocher), « le score guide, l'arbitrage motivé tranche ».

Callouts : `[!warning] Attention` nouveau sur matrice cosmétique (notes 4/5 partout = pas de décision, habillage rétroactif). `[!tip] Astuce` existant sur branches ≠ rôles conservé, déplacé après le warning pour transition vers exemple.

`[!example]` enrichi : tableau matrice incarné 3 solutions × 5 critères + score pondéré sur la branche élec de la mobilité articulaire (CC + encodeur 3,35 / Stepper + driver 3,85 / Servomoteur 3,40). Décision tracée : stepper + driver retenu, réserve identifiée sur l'écoconception (conso continue au maintien) à lever étape 4 (mode économie ou commande coupée à l'arrêt). Ouverture explicite vers branches méca + info en parallèle.

Wiki-link nouveau semé : `etat-de-l-art-technique`.

### Round 2 validé sans correction
Garde-fou tenu : l'utilisateur a relu les étapes 1+2 et validé sans modification. Production tenue au pattern v2.1 et aux 9 conventions transverses (1-9) dès le premier jet, sur deux étapes consécutives. À surveiller : si la régularité se confirme sur les prochaines étapes, indicateur que les conventions sont désormais bien internalisées. Si exception, en revenir à un round 2 plus pointilleux.

### Conventions émergentes — 2 nouvelles poussées dans `conventions.md` § 7
10. **Matrice incarnée dans `[!example]`** des fiches-trame — pattern validé sur étape 2 concept : tableau dans le callout exemple, scores chiffrés, décision tracée et ouverture vers la suite. À éprouver sur étape 3 concept (tableau de compatibilité inter-disciplines ?), étape 4 (tableau de pré-dimensionnement ?), ou trame ultérieure. Convention de § 2 (Mise en forme — Callouts).
11. **Structure 2 H4 par étape hors pivot** dans les fiches-trame des phases du V — convention de proportionnalité : étape pivot = 3 H4 dense, étape hors pivot = 2 H4 économes. Validée sur étapes 1 et 2 concept (parallélisme). Étape 3 (pivot) prévue à 3 H4 dense, étape 5 (clôture documentaire) probablement à 3 H4 par analogie spec-tech étape 6, étape 4 à éprouver à 2 H4 économes. Ne s'applique pas aux fiches-trame transverses (structure 3 blocs co-actifs). Convention de § 6 (Publication / Quartz — Structure des fiches-trame).

### Leçon méthodo — batch d'edits via filesystem:edit_file
Confirmation : `edit_file` accepte un array d'edits passés en un seul appel, traités en séquence. Plus rapide qu'un patch par appel, plus sûr qu'un `write_file` long (cf. leçon méthodo palier 2 du 25/05 suite 3 sur la troncature silencieuse). Discipline : chaque `oldText` doit être unique au fichier. Quand un titre se répète (ex : 5 `[!example] Sur le bras 3 axes`), désambiguïser en incluant la 1ère ligne du corps de chaque callout — ça suffit. 12 patches en batch passés sans incident.

### État de `concept.md` en fin de session
- Étapes 1 et 2 rédigées et validées.
- Étapes 3, 4, 5 en placeholder italique avec callouts au format v2.1 désormais aligné.
- Pièges + Côté équipe en placeholder.
- Posture + Objectif + Conclusion + Voir aussi : rédigés depuis le 22/05 (squelette).

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes.
- **Étape 3 concept** (pivot dense) à approfondir en session suivante : 3 H4 prévues (Confronter les solutions retenues / Identifier et arbitrer les conflits / Renégocier sans tout casser), `[!warning]` enrichi + `[!example]` continuant le fil rouge bras 3 axes (conflit méca↔info sur articulations à axe unique vs cinématique inverse à offset, déjà esquissé dans le squelette).
- **Conventions émergentes 10 et 11** à éprouver — convention 10 sur étape 3 ou 4 (matrice incarnée si pertinent), convention 11 sur étape 4 (2 H4 économes).
- **Pattern matrice incarnée** — à surveiller en rendu Quartz mobile (tableau 6 lignes × 5 colonnes potentiellement chargé sur smartphone).

---

## 2026-05-25 (suite 3) — Nettoyage documentaire complet (paliers 1-6)

### Périmètre de session
Session dédiée à réduire le poids des fichiers lus au démarrage de chaque conversation Claude (prompt projet + TODO + JOURNAL + BACKLOG, total mesuré à ~55 k tokens en début de session). Cible : ~15-20 k tokens. Plan en 6 paliers exécuté intégralement dans la session. PC perso, préfixe MCP `filesystem:*`.

### Audit initial — mesure du poids
| Fichier | Poids | ~Tokens |
|---|---|---|
| Prompt projet | ~9 ko | ~2,5 k |
| JOURNAL.md | 138 ko | ~35-40 k |
| TODO.md | 51 ko | ~13-15 k |
| BACKLOG.md | 22 ko | ~5-6 k |
| **Total démarrage** | | **~55 k tokens** |

Redondances identifiées : TODO « Fait » ↔ JOURNAL (massif), JOURNAL pré-22/05, 17 entrées « Commit + push de la session du XX/XX » dans TODO, TODO « Décisions éditoriales » ↔ BACKLOG « Discussions/décisions en attente », prompt §7 (conventions de fiches) externalisable, prompt §1+§8+§9 chevauchements.

### 7 questions de cadrage tranchées (niveau C, validées en bloc)

1. **Externalisation des conventions** dans un fichier dédié à la racine → `conventions.md` créé au palier 1.
2. **Section « Fait » du TODO** → 3 dernières sessions seulement, avec **rotation glissante** (suppression auto session N-3 à chaque fin de session). Intégrée à §9 du prompt v2 au palier 5.
3. **17 « Commit + push » du TODO** → consolidés en checklist unique « Rattrapage commits/pushs en retard — voir JOURNAL pour détail ». Traité au palier 3.
4. **Archivage JOURNAL pré-22/05** dans `JOURNAL-archive.md` → fait au palier 2.
5. **Démarrage automatique** = TODO + conventions.md + 3 dernières entrées JOURNAL en `head` (le JOURNAL est antichronologique). Intégré à §8 du prompt v2 au palier 5, corrigé au palier 6 (cf. ci-dessous).
6. **Méthode** = (c) audit puis refonte ciblée du prompt, plutôt que réécriture intégrale.
7. **Conventions regroupées par thème** dans `conventions.md` (Rédaction / Mise en forme / Images & SVG / Cas d'illustration / Collaboration / Publication-Quartz / En cours d'éprouvage).

### Plan d'exécution en 6 paliers (validé, exécuté intégralement)
1. **Palier 1** — Création `conventions.md` (additif, non destructeur). ✅ Fait.
2. **Palier 2** — Archivage JOURNAL pré-22/05. ✅ Fait.
3. **Palier 3** — Compactage TODO (3 sous-paliers). ✅ Fait.
4. **Palier 4** — Compactage BACKLOG (léger). ✅ Fait.
5. **Palier 5** — Refonte v2 du prompt projet. ✅ Fait.
6. **Palier 6** — Test de démarrage post-refonte. ✅ Fait.

Discipline : commit + push utilisateur avant chaque palier destructeur (3, 4, 5), pratiquée en pratique.

### Palier 1 — Création `conventions.md` (14,6 ko)
Fichier privé (non publié) à la racine du dépôt, au même niveau que TODO/JOURNAL/BACKLOG. 7 sections thématiques + 1 section « En cours d'éprouvage » pour les conventions récentes (3 dernières 25/05 suite 2 : 2 images par fiche-notion d'outil, fil rouge station météo, niveau B = texte rédigé). Dates d'acquisition entre parenthèses pour traçabilité. Centralise les 9 conventions transverses + §7 + §7bis du prompt + conventions disséminées du JOURNAL.

### Palier 2 — Archivage JOURNAL pré-22/05
- `JOURNAL-archive.md` créé (49,7 ko, 8 sessions : 19/05 ×3, 20/05 ×2, 21/05 ×3). Préambule explicatif pointant vers le JOURNAL principal.
- `JOURNAL.md` truncaté (138 ko → 89 ko). Conserve les 11 sessions du 22/05 au 25/05 (suite 2) + nouveau préambule mentionnant l'archive + commentaire HTML de fin pointant vers `JOURNAL-archive.md`.
- Gain mesuré : ~12 k tokens sur le seul JOURNAL.

### Leçon méthodo — write_file long et edit_file matching exact
- Premier `write_file` de ~85 ko du nouveau JOURNAL tronqué par limite de réponse (échec silencieux : pas de soumission, fichier inchangé). Vérification systématique post-écriture via `get_file_info` est essentielle.
- `edit_file` MCP exige matching exact du `oldText` au caractère près ; bloc multi-ko expose à des désynchronisations subtiles (whitespace, retours à la ligne, NBSP). Stratégie retenue : truncate via `write_file` après lecture préalable (head=N lignes) pour identifier la frontière exacte. `dryRun: true` utile pour tester un edit avant exécution.

### Palier 3 — Compactage TODO (51 ko → 12,5 ko, gain ~75 %)
- **3a** — Section « Fait » réduite à 3 dernières sessions (25/05 suite 2 + 25/05 + 24/05 suite 2). 14 sessions antérieures supprimées (détail dans JOURNAL).
- **3b** — 16 lignes « Commit + push session du XX/XX » consolidées en une checklist unique « Rattrapage commits + pushs en retard depuis 19/05 — voir JOURNAL pour détail ».
- **3c** — Section « Décisions éditoriales en attente » quasi-vidée : ne reste qu'une entrée (les 6 conventions transverses à éprouver sur `securite-et-qualite`). Note explicite renvoie au BACKLOG (conventions à éprouver) et à `conventions.md` (conventions acquises). Pas de duplication.
- Réorganisations secondaires : « Tâches techniques en suspens » divisée en 3 sous-sections (Rattrapage / Manipulations manuelles / Vérifications visuelles). Section « Templates » réduite à la seule entrée restante (fiche-tuto).
- Écriture en `write_file` intégrale (TODO compact, pas de risque de troncature).

### Palier 4 — Compactage BACKLOG (22 ko → 20,2 ko, gain ~8 %)
- 5 items supprimés de « Discussions/décisions en attente » : 4 conventions à éprouver désormais portées par `conventions.md` (popovers sigles génériques, alias Quartz, 2 images, station météo) + item obsolète sur le flowchart Mermaid du hub.
- 2 notes ajoutées : pointeur vers `conventions.md` pour traçabilité + rattachement de la section « Points ouverts des flowcharts » à l'inventaire pré-publication.
- Édit ciblé via `filesystem:edit_file` (vs `write_file` réécriture intégrale) — plus sûr sur un fichier de 22 ko, applique la leçon méthodo du palier 2.
- Gain volumétrique modeste comme annoncé (palier léger). L'objectif principal du palier 4 était la cohérence : zero duplication entre BACKLOG et `conventions.md`.

### Palier 5 — Refonte v2 du prompt projet (~9 ko → ~5,5 ko, gain ~40 %)
- 13 sections → 9 sections après fusions (§3+§6+§10 / §8+§9) et externalisations (§7 + §7bis vers conventions.md, simple pointeur).
- §8 démarrage mis à jour : lit TODO + conventions.md + JOURNAL en mode `head` (3 dernières entrées en haut, JOURNAL antichronologique).
- §9 fin de session enrichi : rotation glissante session N-3 + seuil archivage JOURNAL ~100 ko.
- Note structurelle « niveau B = livraison en texte rédigé » intégrée directement dans le bloc Mode de collaboration (anciennement section 13 séparée).
- Chemins des deux PC mentionnés explicitement (pro + perso) avec consigne de fallback automatique.
- Production en chat, copie manuelle par l'utilisateur dans Claude Desktop.

### Palier 6 — Test de démarrage post-refonte
| Fichier lu au démarrage | Poids | ~Tokens |
|---|---|---|
| TODO.md | 12,5 ko | ~3 k |
| conventions.md | 14,6 ko | ~4 k |
| JOURNAL.md (head 3 entrées) | ~15-18 ko | ~4-5 k |
| **Total démarrage post-refonte** | | **~11-12 k tokens** |

Vs cible 15-20 k → **sous la cible**. Vs initial ~55 k → **réduction ~80 %**, mieux qu'estimé en début de palier 1 (objectif initial parlait de ~65 %).

### Patch §8 post-test — erreur tail/head détectée
- **Erreur dans la v2 livrée au palier 5** : §8 disait `tail` au sens sémantique (« 3 dernières entrées de session ») alors que le JOURNAL est antichronologique. Un `tail=N` technique aurait lu les sessions les plus ANCIENNES en bas du fichier — l'inverse de l'intention.
- Correction proposée : remplacement `tail` → `head` au §8 avec explicitation de l'antichronologie. Appliquée par l'utilisateur dans Claude Desktop.

### Leçon méthodo — éprouver le prompt avant de figer
Sans le palier 6 (test concret), le piège `tail` au lieu de `head` serait passé inaperçu jusqu'au prochain démarrage qui aurait chargé le mauvais contexte. Discipline acquise : intégrer un test de démarrage à toute refonte du prompt projet.

### État final des fichiers
- `conventions.md` : 14,6 ko (nouveau)
- `JOURNAL.md` : 89 ko (truncaté palier 2)
- `JOURNAL-archive.md` : 49,7 ko (nouveau palier 2)
- `TODO.md` : 12,5 ko (compactage palier 3)
- `BACKLOG.md` : 20,2 ko (compactage palier 4)
- Prompt projet : ~5,5 ko dans Claude Desktop (refonte palier 5)

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes.
- Prochaine session posée : **approfondissement de `concept`** (fiche-trame phase 2 du cycle en V, squelette fait 22/05). `securite-et-qualite` (3ème trame transverse) reste à faire mais n'est pas le prochain immédiat.

---

## 2026-05-25 (suite 2) — Batch de 7 fiches-notion prioritaires + 12 SVG + approfondissement complet de pieuvre

### Périmètre de session
Lot batch des 7 notions prioritaires sémées dans plusieurs trames (`cahier-des-charges-fonctionnel` + 6 outils méthodologiques planification/décision/risques) suivi de l'approfondissement complet de `pieuvre.md` en clôture. Première session à produire autant de fiches d'un coup (7) et autant de SVG (12). PC perso, préfixe MCP `filesystem:*`.

### Cadrage en début de session — 5 questions tranchées (niveau C)
1. **Modèle de référence pour CdCF** : hybride basé sur `bete-a-cornes.md` + section « Structure type du document école » pointant vers `cdcf-ecole-template.docx`. Rejet du modèle `fonction.md` (trop léger pour un pivot).
2. **Profondeur des stubs** : option (a), stubs légers maintenus sur les 6 fiches non-CdCF malgré le TODO qui marquait certaines en « fiche-tuto détaillée ». L'approfondissement détaillé reste pour une session ultérieure.
3. **Ordre** : 6 stubs d'abord (calibrage du format commun), CdCF en seconde moitié.
4. **Front matter `type:`** — **clarif structurante apportée par l'utilisateur** : notion = court (popover only) / tuto = long mais pas structurant (outils en général) / trame = structurante. Répartition : `cahier-des-charges-fonctionnel`, `wbs`, `jalons`, `matrice-de-risques`, `matrice-de-decision` en notion ; `retroplanning` et `gantt` en tuto.
5. **Popovers déjà sémés** : récupération comme base + micro-ajustements ciblés pour cohérence avec les 6 conventions transverses.

### Premier batch — dérive sur les placeholders italiques
Production des 7 fiches en mode « stub avec placeholders italiques entre crochets », en m'alignant littéralement sur `pieuvre.md` post-24/05 suite 2 (qui est lui-même un stub à finir). **Erreur d'interprétation** : pieuvre.md est un stub non terminé, pas un standard cible. Résultat livré inacceptable.

### Recadrage utilisateur — niveau B exige texte rédigé
« Le niveau d'autonomie requiert que tu fasses la fiche avec un texte complet avant validation ». **Convention transverse acquise** : un placeholder italique entre crochets est un aveu de travail non fait, pas une livraison niveau B. La forme italique n'est admissible qu'avec signalement explicite d'un manque de matière.

### Reprise complète des 6 stubs en texte rédigé
Modèle de référence basculé sur `fonction.md` (fiche-notion brève rédigée). Pour chaque fiche : popover + 3 sections en texte complet (À quoi ça sert / Comment construire / Pièges) + Voir aussi. Commentaires HTML « STUB » retirés. Réécriture en `filesystem:write_file` (6 appels).

### Production des 12 SVG — critique transverse de l'utilisateur
Une fois les 6 fiches rédigées, critique transverse : il manque les images. Niveau C : 4 questions tranchées.
1. **Production** : (a) Claude produit en premier jet + entrée backlog pour affinage utilisateur avant publication.
2. **Stratégie** : 1 image générique + 1 image avec valeurs concrètes non liées au bras 3 axes — 12 SVG au total.
3. **Emplacement** : générique après popover, exemple dans la section « Comment … ».
4. **Fil rouge alternatif** retenu : **station météo connectée** (projet école générique, cohérent inter-fiches sur 15 semaines avec mêmes jalons Sem. 2 / 5 / 9 / 12 / 15).

Production des 12 SVG en batch (palette ambre `#BA7517` / gris `#DDDBD3` alignée sur `pieuvre-generique.svg`, support `@media prefers-color-scheme: dark`, viewBox variables selon le type d'image). Patch des 6 fiches pour insertion des 2 images.

### Approfondissement complet de `pieuvre.md` (clôture)
Modèle de référence : `bete-a-cornes.md` (notion fondatrice, sections développées). Popover conservé, image générique conservée, image exemple bras 3 axes conservée (toutes existaient depuis 24/05 suite 2). Rédigé :
- **À quoi ça sert** : 3 rôles articulés (recenser milieux / formaliser sans dériver vers solution / matériau direct pour caractérisation).
- **Comment la construire** : méthode 3 temps + **tableau des 5 familles de milieux** (utilisateurs / matière d'œuvre / énergies / environnement physique / réglementaire) + **paragraphe topologie** (forme rayonnante AFNOR, distinction FP/FS/FC par topologie + numérotation, pas par style de trait).
- **Exemple bras 3 axes** : commentaire enrichi des 5 milieux et des 4 fonctions, chacune avec sa sémantique (FP relie deux milieux et justifie l'existence, FS relie deux milieux pour service complémentaire, FC sur un seul milieu pour contrainte d'adaptation).
- **Pièges** : 5 pièges en gras court, dont **« Confondre FP et FS » nouveau** (test pratique « si je retire cette fonction, le projet reste-t-il défendable ? ») et **« Diagramme rayonnant peu lisible »** (deux pistes : regrouper en familles, ou faire pieuvres locales par sous-système en concept).

Pas de section *Cas particulier* ni *Aller plus loin* (non pertinent ici). Pas de triptyque mauvais/moyen/bon (le triptyque pertinent pour FP/FS/FC est porté par `fonction.md`).

### Conventions transverses — compteur à 6 + 3 nouvelles
6 conventions transverses fixées 25/05 (éprouvées sur ecoconception 25/05 suite + sur les 7 fiches-notion 25/05 suite 2). Trois nouvelles conventions acquises cette session :
7. **2 images par fiche-notion d'outil méthodologique** : générique après popover + exemple valeurs concrètes dans « Comment … ». À confirmer sur 2-3 autres fiches-notion d'outils puis documenter dans `templates/fiche-notion.md`.
8. **Fil rouge alternatif « station météo connectée »** pour les exemples non-bras-3-axes des fiches-notion d'outils. À confirmer ou élargir (arrosage automatique, alarme connectée selon les besoins).
9. **Niveau B = livraison en texte rédigé, placeholders italiques inadmissibles** sauf signalement explicite de manque de matière. À intégrer aux instructions projet section 13.

### Typologie notion / tuto / trame — clarification structurante
Clarif apportée par l'utilisateur en cours de session :
- **notion** = fiche courte (popover-only). Exemple : `jalons`, `wbs`, `matrice-de-risques`.
- **tuto** = fiche longue mais pas structurante (outils méthodologiques détaillés, captures d'écran d'outils). Exemple : `retroplanning`, `gantt`.
- **trame** = fiche structurante (phases du V, fils transverses). Déjà acquis depuis le 22/05.

Cette clarif resoud la tension du TODO qui marquait certaines fiches en « fiche-tuto détaillée » tout en les traitant en stub aujourd'hui : pour les outils qui n'ont pas encore leurs captures d'écran, on pose la **notion** d'abord (court), on construit le **tuto** ensuite. Répartition appliquée : 5 notion + 2 tuto sur les 7 fiches du jour.

### Leçon méthodo — niveau B et fidélité au modèle
Une fiche stub existante (comme `pieuvre.md` post-24/05 suite 2) n'est **pas** un modèle cible ; c'est une fiche à finir, qu'on a marquée en stub pour la souligner. Prendre une fiche stub comme modèle littéral d'un autre stub revient à produire un travail non terminé sous couvert de cohérence. Modèle cible pour fiche-notion brève = `fonction.md` (brève mais rédigée). Modèle cible pour fiche-notion complète = `bete-a-cornes.md`.

### Nouvelles dépendances posées
Aucune nouvelle notion ajoutée au-delà de celles déjà inventoriées. Au contraire, 7 liens rouges résorbés sur l'ensemble du dépôt (`cahier-des-charges-fonctionnel` cité dans le hub + 4 trames + template CdCF + 3 stubs du jour).

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes.
- **Conventions transverses 7, 8, 9** : à éprouver sur les fiches à venir (notamment `caracteriser-une-exigence`, `microcontroleur`, `pla`) avant documentation formelle dans les templates.
- **Reprise visuelle des 12 SVG produits aujourd'hui** : premiers jets, affinage utilisateur attendu avant publication (BACKLOG enrichi en conséquence).
- **Densité du tableau matrice-de-decision générique** : double colonne brute/pondérée potentiellement chargeur visuel — à vérifier en relecture Quartz et simplifier le cas échéant.

---

## 2026-05-25 (suite) — Deuxième trame transverse : squelettisation + approfondissement direct de ecoconception (stresstest réussi)

### Périmètre de session
Deuxième fiche-trame transverse du projet : `ecoconception.md`. Stresstest volontaire de la capacité à rédiger un sujet complexe (interface disciplinaire + densité notionnelle plus forte) en passe unique avec round 2 ciblé, dans le format inauguré sur `gestion-de-projet.md` le matin même. PC perso, préfixe MCP `filesystem:*`.

### Cadrage en début de session — 4 questions tranchées (niveau C)

1. **Structure de la fiche-trame** : 3 blocs co-actifs **Évaluer / Réduire / Tracer** (option a). Rejet argumenté de (b) cycle de vie = territoire des collègues et (c) niveau d'intégration = trop méta. Alignement sur le pattern transverse `rythmer/outiller/tenir` de `gestion-de-projet`.
2. **Périmètre vs cours collègues** : frontière nette. Porté côté élec/info (sobriété énergétique, durée de vie composants, démontabilité PCB, sobriété logicielle). Délégué (cité sans approfondir) : ACV complète, recyclabilité matériaux, normes pointues.
3. **Outils canoniques** : 1 outil approfondi (`matrice-eat`), 1 cité + délégué (`acv-simplifiee`), reste en ressources.
4. **Articulation avec gestion-de-projet** : miroir asymétrique. La trame écoconception affirme qu'elle est pilotée par GdP, dans le bloc 3 « Tracer ».

### Squelette + approfondissement en passe unique
Squelette niveau B (front matter tag `transverse` seul, popover miroir GdP, 3 blocs en placeholder italique avec [!example] esquissé + [!livrable] Continu/Jalonné + callouts secondaires). Approfondissement complet enchaîné :
- **Bloc 1 Évaluer** : 4 paragraphes (pourquoi/outils/frontière chiffrable/cadence) + example étoffé avec re-passage en revue de PoC.
- **Bloc 2 Réduire** : 5 paragraphes (1 par front + 1 paragraphe délégation explicite) + warning sur l'optimisation à l'extrême.
- **Bloc 3 Tracer** : 5 paragraphes (opposabilité + pilotage GdP / 3 pratiques liste numérotée / restitution soutenance) + tip intégration diffusée.
- **Section côté équipe** : 3 articulations en gras (GdP miroir, SQ croisements RoHS/REACH/DEEE avec règle de non-redondance, délégation cours collègues).

### Round 2 — 4 remarques utilisateur → 9 patches via `filesystem:edit_file`
1. **MCU → microcontrôleur** avec popover : 5 patches (chaque section/callout).
2. **PLA, ABS, RoHS, REACH, DEEE → popovers** : 4 patches.
3. **usinage, impression 3D, soudure → wiki-links** : 2 patches.
4. **Gras isolé « opposable »** : 1 patch (extension à « la dimension qui rend l'écoconception opposable »).

### 6ème convention transverse fixée
6. **Wiki-link à la 1ère occurrence de chaque section, sous-section ou callout** ; mot complet ailleurs. À éprouver sur `securite-et-qualite` et à documenter dans `templates/fiche-trame.md` une fois confirmée. Compteur conventions transverses : 6.

### Nouvelles notions semées en lien rouge (inventoriées au TODO)
- `microcontroleur` (fiche-notion, popover essentiel, acronyme MCU en alias)
- `pla`, `abs` (fiches-notion matériaux)
- `rohs`, `reach`, `deee` (fiches-notion normes environnementales)
- `usinage`, `impression-3d`, `soudure` (fiches-tuto procédés, actées côté collègues)
- `matrice-eat` (outil canonique de la trame éco, doublement prioritaire)
- `acv-simplifiee` (citée et déléguée)

### Bilan stresstest
Format passe unique + round 2 ciblé tient sur sujet complexe. Pas de scission de session nécessaire malgré l'interface disciplinaire forte. Pattern applicable à `securite-et-qualite` avec prudence sur la matière notionnelle (CE, sécurité fonctionnelle, FMEA…) — risque de scission réel sur cette 3ème trame, à surveiller.

### Évolution du mode de collaboration
**Niveau B acté comme autonomie de base** pour la rédaction conventionnelle (cf. section 13 des instructions projet, paragraphe ajouté en fin de session). Niveau A réservé aux actions mécaniques (typo, formatage), niveaux C et D inchangés.

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes.
- **Conventions transverses** : à éprouver sur `securite-et-qualite` avant documentation formelle dans le template (6 conventions au compteur).
- **Format `[!livrable]` transverse Continu/Jalonné** : confirmé sur 2 trames sur 3, à formaliser après la 3ème.
- **Tag `transverse` seul vs `transverse` + `ese`** : tag seul retenu (alignement strict sur GdP), à arbitrer si besoin de classification par domaine émerge.

---

## 2026-05-25 — Première trame transverse : squelettisation + approfondissement direct de gestion-de-projet

### Périmètre de session
Première fiche-trame transverse du projet : `gestion-de-projet.md`. Session démarrée en mode squelettisation (cadre du TODO) puis basculée sur demande utilisateur en approfondissement complet dans la même session — soit un format inédit pour les transverses. PC perso, préfixe MCP `filesystem:*`.

### Cadrage en début de session — 5 questions tranchées

1. **Structure de la fiche-trame transverse** : option (a) thématique, contre chronologique et par compétence MEO. Trois blocs **co-actifs** (non séquentiels) retenus : Rythmer / Outiller / Tenir la posture.
2. **Articulation avec `specification-technique`** : principe acté — la trame transverse **ne redéveloppe aucun outil** (délégation aux notions/tutos dédiés : `wbs`, `gantt`, `jalons`, `retroplanning`, `matrice-de-risques`). La pilote enseigne à poser ; la trame enseigne à tenir.
3. **Fil rouge bras 3 axes** : 1 `[!example]` par bloc thématique (transposition v2.1 « au moins 1 par étape »), pas un panorama 15 semaines unique.
4. **Notions PROJ/MEO** : pointer sans redévelopper. Question secondaire (ajouter `revue-de-phase` / `point-hebdomadaire` au BACKLOG ?) reportée à l'approfondissement.
5. **Périmètre de session** : squelettisation seule au départ, **basculé en approfondissement direct** sur demande utilisateur en cours de session.

### Squelette produit (1ère version, niveau B)
Front matter avec **nouveau tag `transverse`** (en plus de `proj`/`trame`) ; section « Démarche » conservée mais ouverte par préambule qui pose la non-séquentialité ; 3 blocs avec callouts `[!example]` + `[!warning]` (bloc 2) + `[!tip]` (bloc 3) + `[!livrable]` en placeholder explicite (format à trancher : jalonné vs continu) ; section « Pendant cette phase, côté équipe » reconvertie de fait en panorama d'articulation avec les 2 autres transverses ; conclusion adaptée (pas de phase suivante, pont vers le hub).

### 4 décisions de niveau C validées
- **Tag `transverse`** acté (à propager aux 2 autres transverses).
- **Section « Démarche »** : conservée, variante « Mener la gestion de projet » jugée équivalente (arbitrable à l'usage).
- **Format `[!livrable]` transverse** : sous-listes explicites « Continu » et « Jalonné » dans chaque livrable, pour rendre visible le double régime de production.
- **Section « Pendant cette phase, côté équipe »** conservée, reconvertie en « articulation avec les autres transverses » (titre de section inchangé pour aligner template).

### Approfondissement complet en passe unique
Rédaction des 3 blocs en prose dense (3-4 paragraphes par bloc avant callouts), à densité comparable à la fiche pilote `specification-technique`. Format `[!livrable]` posé en sous-listes Continu/Jalonné (3 livrables uniformisés). Section « articulation avec les autres transverses » rédigée en 3 pratiques (intégrer dans la cadence / intégrer dans la matrice de risques / piloter sans écraser). Production initiale en `filesystem:write_file` (squelette de moi, structure connue).

### Round 2 — 9 remarques utilisateur → 14 patches ciblés via `filesystem:edit_file`
- Retrait de toute mention de durée projet chiffrée dans la prose générique (la trame doit servir à tous types de projet, pas seulement aux projets de 15 semaines).
- Conversion `SX` → `semaine n°X` dans les exemples bras 3 axes (la notation `SX` ne parle pas à un étudiant qui découvre).
- Retrait des extensions `.md` dans les conventions de nommage citées en prose (l'étudiant choisit son format).
- Conversion `(i)/(ii)/(iii)` → liste numérotée 1/2/3 pour les énumérations méritant une structure.
- Retrait d'un gras sur verbe isolé (`les **tenir**.`) — convention : gras sur morceau de phrase ou mot technique-clé.

### 5 conventions transverses fixées (à propager à `ecoconception` et `securite-et-qualite`)
1. **Pas de chiffrage de durée projet** dans la prose générique.
2. **Notation `semaine n°X`** dans les exemples bras 3 axes (pas `SX`).
3. **Pas d'extension de fichier** dans les conventions de nommage citées en prose.
4. **Listes numérotées** plutôt que `(i)/(ii)/(iii)`.
5. **Gras** sur morceau de phrase ou mot technique-clé, pas sur verbe isolé.

### Format date : compromis pédagogie vs technique
Demande utilisateur : `DD/MM/YYYY` (format FR). Application : `JJ-MM-AAAA` aux conventions de nommage de fichiers (`12-09-2025-revue-poc`). **Trade-off connu signalé** : la convention technique habituelle pour tri chronologique automatique est ISO 8601 `AAAA-MM-JJ` — décision à arbitrer si le besoin de tri auto émerge.

### Leçon méthodo — `str_replace` vs `filesystem:edit_file`
Confusion en début de round 2 : `str_replace` (outil sandbox de Claude) n'agit pas sur le filesystem MCP. Il faut `filesystem:edit_file` (MCP) pour éditer le dépôt. À retenir.

### Nouvelles dépendances posées
Aucune nouvelle notion ajoutée au-delà de celles déjà inventoriées au TODO/BACKLOG. La trame `gestion-de-projet` pointe vers les 5 outils canoniques (`wbs`, `jalons`, `retroplanning`, `gantt`, `matrice-de-risques`) et les 2 autres transverses (`ecoconception`, `securite-et-qualite`).

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes.
- **Conventions transverses** : à éprouver sur `ecoconception` et `securite-et-qualite` avant de les documenter formellement dans le template `fiche-trame.md`.
- **Format date noms de fichiers** : `JJ-MM-AAAA` retenu sur consigne FR ; bascule en ISO 8601 possible si le tri auto chronologique devient nécessaire.
- **Section « Pendant cette phase, côté équipe »** : titre de section conservé pour alignement template, mais sémantique réelle = « articulation avec les autres transverses » pour les fiches transverses. À documenter formellement quand le pattern aura été confirmé sur les 2 autres.

---

<!-- DEBUT DES SESSIONS 22/05 → 24/05 — ARCHIVEES LE 26/05 SUITE -->

## 2026-05-24 (suite 2) — Clôture phase 1 partie 3 : cohérence finale + refonte architecture pieuvre/fonction + SVG

### Périmètre de session
Clôture de la phase 1 partie 3 sur deux gestes consolidants : (1) cohérence finale des 6 étapes de `specification-technique.md` via 11 patches terminologiques (en 3 passes successives), (2) refonte structurelle de l'architecture des fiches-notion autour de la pieuvre et des fonctions FP/FS/FC, accompagnée de la production des 2 SVG correspondants. Session sur PC perso, préfixe MCP `filesystem:*`.

### Cadrage en début de session — 2 questions tranchées

1. **Méthode de relecture** : mixte avec dimension prioritaire — passe 1 = terminologie + fil rouge en lecture continue, passe 2 = ponts par paires.
2. **Stratégie d'enchaînement** : cohérence pure d'abord, puis résorption d'1-2 popovers majeurs si possible. Réalité : tout traité (cohérence + refonte architecture + 2 SVG).

### Cohérence finale — 11 patches sur `specification-technique.md` en 3 passes

Bilan par auto-critique progressive (leçon méthodo : une passe unique n'est jamais exhaustive sur ce type de relecture terminologique) :

**Passe 1** — 5 patches : pont arrière étape 2 ajouté (« **Le besoin est compris et validé.** Avant de chiffrer… »), 4 occurrences « phase 1 » corrigées (préambule étape 5, étape 6 H4 Faire valider, section Équipe / Interfaces métiers, section Équipe / Sécurité-qualité), refonte phrase finale example étape 6 (initialement avec récupération « deux réserves mineures » du JOURNAL, finalement remplacée par version sobre sur retour utilisateur : « validé par les enseignants », sans réserves — l'équipe enseignante n'émet pas de réserves en général).

**Passe 2** (occurrences résiduelles loupées) — 3 patches : « fin de phase 1 lance » → « fin de cette phase lance » (Gestion de projet), « s'ancre dès la phase 1 » → « s'ancre dès la spécification technique » (Écoconception), « ancrage écoconception en phase 1 » → « ancrage écoconception à ce stade » (même paragraphe).

**Passe 3** (finale exhaustive) — 2 patches : « commencent en phase 1 » → « commencent dès cette phase » (Sécurité-qualité, cohérence avec « le faire dès cette phase » du même paragraphe), « autoriser le passage en phase 2, [[concept|concept]] » → « autoriser le passage en [[concept|concept]] » (élision du raccourci numérique redondant avec le wiki-link).

### Refonte architecture `fonction` / `pieuvre` — décision structurante

**Constat utilisateur** : architecture initiale (aliases `[FP, FS, FC]` posés sur `pieuvre.md`, décision 23/05 suite 2) ne correspond pas à l'intention pédagogique. Un étudiant qui survole `[[FC]]` veut une définition de la catégorie « fonction contrainte », pas de l'outil « pieuvre ». Architecture repensée : `FP/FS/FC` → fiche dédiée aux **fonctions** → renvoi vers la pieuvre comme outil graphique de représentation.

**Décision actée** : **séparation `fonction` / `pieuvre`** :
- **`fonction.md`** (nouveau, aliases `[FP, FS, FC]`) : fiche-notion *courte* (lisible au survol) définissant la trichotomie FP/FS/FC, le format d'énoncé verbe + complément, et redirigeant vers `[[pieuvre]]` pour la représentation graphique. Option (b) retenue (fiche brève complète tout de suite) plutôt que stub minimal.
- **`pieuvre.md`** (refonte) : aliases retirés. Fiche-notion sur l'outil graphique, qui s'appuie sur `[[fonction]]` pour la typologie au lieu de la dupliquer. Sections « À quoi ça sert » / « Comment construire » / « Pièges » en placeholders explicites à approfondir en session dédiée.

**Conséquence sur les liens** dans `specification-technique.md` : `[[FP]]` / `[[FS]]` / `[[FC]]` pointent désormais vers `fonction.md` (via alias), `[[pieuvre]]` continue vers `pieuvre.md`. Pas de patch nécessaire dans la trame — les liens existants se résolvent automatiquement via les nouveaux aliases.

### Convention `draft: false` par défaut — actée

Décision déclenchée par un faux bug : popovers `[[FP]]` / `[[FS]]` / `[[FC]]` toujours rouges après création du stub `pieuvre.md` initial. Cause : `Plugin.RemoveDrafts()` actif dans `quartz.config.ts`, filtrant les fiches en `draft: true` du build. Le stub était inaccessible.

**Décision utilisateur** : **passer toutes les fiches en `draft: false` par défaut**. Justifications : (1) Quartz est encore privé, le filtre n'a pas d'utilité opérationnelle, (2) le pilotage de la maturité passera par le **BACKLOG** (inventaire systématique des stubs/placeholders avant publication aux élèves), (3) `draft: true` crée plus de friction (popovers cassés, tests visuels impossibles) que de bénéfice. Convention rétrospective : le template `fiche-trame.md` (déjà `draft: false`) avait préfiguré cette pratique.

### Production des 2 SVG pieuvre

Premier jet de `pieuvre-generique.svg` produit en cours de session (forme « traversante » avec distinction FP plein / FS pointillé / FC simple). **Remarque utilisateur** sur référence visuelle ECPI (5 milieux + système ECPI au centre, traits identiques étiquetés FC1 à FC7) : la convention dominante en France/AFNOR est **forme rayonnante avec tous les liens du même style**, étiquetés Fx.

**Refonte du SVG générique** : forme rayonnante adoptée. Distinction FP/FS/FC ne passe plus par le style du trait, elle passe par : (a) la **topologie** (FP/FS = 2 segments traversant le système entre 2 milieux ; FC = 1 segment vers 1 seul milieu), (b) les **étiquettes** Fx visibles sur les traits, (c) la **numérotation** dans l'énoncé. Composition : système ovale ambre au centre, 6 milieux gris autour, 1 FP traversante (verticale) + 1 FS traversante (horizontale) + 2 FC rayonnantes. Palette `bete-a-cornes-generique.svg` conservée (ambre #BA7517 / gris #DDDBD3, dark mode via `prefers-color-scheme`).

**Création de `pieuvre-bras-3-axes.svg`** (incarné fil rouge) : système « BRAS 3 AXES » au centre, 5 milieux gris (opérateur, objet à déplacer, poste informatique, alimentation 230V, environnement pédagogique), 4 fonctions (FP1 opérateur ↔ objet traversant, FS1 opérateur ↔ poste info traversant, FC1 vers alimentation, FC2 vers environnement pédagogique). Référencé dans l'`[!example]` étape 3 de `specification-technique.md` et dans la section Exemple de `pieuvre.md`.

### Patch collatéral : retrait « plan de travail » de la liste des milieux étape 3

La liste mentionnait 6 milieux mais les 4 fonctions n'en impliquaient que 5. Le plan de travail était listé sans fonction — sémantiquement faux pour une pieuvre qui formalise les fonctions de tous les milieux identifiés. **Décision actée** : retrait du plan de travail (option a). Modification mineure du texte qui assainit l'example et fait correspondre exactement liste textuelle et schéma. Probable héritage de mind map non nettoyé.

### Nouvelles dépendances posées
- `[[fonction]]` — fiche-notion brève complète produite ce jour (aliases FP/FS/FC).
- `[[pieuvre]]` — fiche-notion légère produite (stub méthodologique avec placeholders dans 4 sections).
- SVG `pieuvre-generique.svg` produit (forme rayonnante, convention AFNOR).
- SVG `pieuvre-bras-3-axes.svg` produit (incarnation fil rouge).

### Leçon méthodo — auto-critique en plusieurs passes pour relecture terminologique

En 1ère passe sur la cohérence terminologique « phase N en raccourci numérique », identification de 4 occurrences. En réalité, 9 résiduelles trouvées en passes 2 et 3. Discipline future : pour ce type de relecture exhaustive (substitutions terminologiques systématiques), **grep avant d'annoncer exhaustivité**. L'auto-critique progressive a fonctionné ici (identification spontanée d'occurrences loupées entre les passes), mais un outil de recherche aurait été plus efficace.

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes (sauf cohérence finale 6 étapes retombée).
- **Approfondir `pieuvre.md`** au standard `bete-a-cornes.md` : rédiger les 4 sections en placeholder (À quoi ça sert / Comment construire / Pièges / Exemple commenté).
- **Approfondir `fonction.md`** si besoin à l'usage (déjà brève complète, peut être enrichie au standard bete-a-cornes si la pratique le révèle nécessaire).
- **Inventaire systématique des fiches stub/placeholders avant publication aux élèves** : nouvelle tâche structurante pour la phase de pré-ouverture. Le BACKLOG est désormais le pilote de la maturité éditoriale (la convention `draft` ne joue plus ce rôle).
- **Reprise visuelle des images SVG** (pas du contenu) avant publication : à faire juste avant ouverture aux élèves.

---

## 2026-05-24 (suite) — Clôture phase 1 partie 2 : étape 6 + section Équipe + template CdCF

### Périmètre de session
Clôture de la phase 1 partie 2 sur trois fronts : rédaction de l'étape 6 « Rédiger le CdCF » de `specification-technique.md` (3 sous-sections H4 + 4 callouts), rédaction de la section « Pendant cette phase, côté équipe » (4 paragraphes par thème), production du template Word `cdcf-ecole-template.docx`. Session sur PC perso, préfixe MCP `filesystem:*`. Cohérence finale des 6 étapes acquise comme session ultérieure (découpage acté en début de session pour préserver le geste critique).

### Cadrage en début de session — 5 questions tranchées

1. **Stratégie d'enchaînement** : scission étape 6 + Équipe (cette session) / cohérence finale des 6 étapes (session suivante). L'étape 6 est l'agrégateur des 5 précédentes ; le geste de relecture critique mérite distance et tête reposée.

2. **TdM du CdCF école simplifié** : option C — agrégat avec sections explicitement labellisées (cœur NF X50-151 / complément école). Plan retenu en 5 sections suivant l'ordre des 5 étapes précédentes : Présentation / Besoin / Existant (complément école) / Analyse fonctionnelle (cœur NF X50-151) / Planification (complément école). Compromis : ni fidélité stricte NF X50-151 (qui se limite à 2 et 4) ni structure libre, mais agrégation reconnaissable.

3. **Granularité étape 6** : 3 H4 (Structurer le document / Rédiger chaque section / Faire valider en revue de CdCF). Étape 6 = travail d'agrégation et de mise en forme, pas de production nouvelle.

4. **Forme de l'encart « avec client réel »** : callout `[!info]` titré « À retenir », posé après l'introduction de la TdM dans la H4 « Structurer ». Évite le tableau (catalogue) et la prose noyée.

5. **Profondeur section Équipe** : 4 paragraphes courts par thème (Interfaces métiers / Gestion de projet / Écoconception / Sécurité-qualité). Pas de liste de rôles (renvoyée à la fiche-trame `gestion-de-projet`).

### Rédaction étape 6 — Rédiger le CdCF

Structure produite :
- **Préambule** (2 paragraphes) : pont depuis les 5 étapes (matériau déjà produit, reste à agréger), positionnement comme document de référence du projet, version école simplifiée comme dérivée reconnaissable de NF X50-151.
- **H4 « Structurer le document »** : présentation de la TdM en 5 sections avec labellisation explicite (cœur NF X50-151 / compléments école), suivie du paragraphe d'annonce du template Word.
- **H4 « Rédiger chaque section »** : trois soins à apporter — mise en forme, cohérence inter-sections, intégration transversale de l'écoconception (graines déjà semées aux étapes 1-5).
- **H4 « Faire valider en revue de CdCF »** : nature du jalon (validation enseignante équivalente d'une signature client), préparation (auto-relecture, vérification du chiffrage de chaque exigence, anticipation des questions), issues possibles (validé / à reprendre), engagement du projet par ce qui a été validé.

4 callouts :
- `[!info] À retenir` — *En contexte professionnel, le CdCF NF X50-151 strict se limite à l'analyse fonctionnelle.* Différenciation cœur normatif (sections 2 et 4) vs compléments école (3 et 5), avec mention que le « cadre de réponse » NF X50-151 n'a pas d'équivalent direct en école.
- `[!warning] Attention` — *Un CdCF n'est pas un copier-coller des livrables intermédiaires.* Le geste de l'étape 6 est précisément de relire l'ensemble et de réécrire ce qui doit l'être pour produire un récit cohérent.
- `[!example] Exemple : projet bras 3 axes` — Organisation des 5 sections sur le bras, écoconception intégrée transversalement (critère EAT + FC2 démontabilité + risque fablab), revue de CdCF en S3 du rétroplanning, validation avec deux réserves mineures levées en une semaine. Choix délibéré contre « validé sans réserve » : plus réaliste pédagogiquement, illustre le caractère itératif de la validation.
- `[!livrable] Livrable 6/6 — Spécification technique` — CdCF complet structuré en 5 sections, soigné en forme et cohérence inter-sections, présenté et validé en revue.

### Rédaction section « Pendant cette phase, côté équipe »

4 paragraphes courts en gras structurel + prose, alignés sur le format de la section Pièges fréquents (refonte 24/05 partie 1) :
- **Interfaces métiers — mécanique et fabrication** : dialogue précoce avec les enseignants de méca/fabrication pour caler des FC réalistes (fablab, tour CN, impression 3D), éviter de découvrir en dossier technique que l'architecture pré-dimensionnée n'est pas fabricable.
- **Gestion de projet** : la planification (étape 5) structure le travail de l'équipe au-delà du Gantt — qui suit quoi, qui actualise les risques. Premiers points hebdomadaires calés à ce moment.
- **Écoconception** : ancrage par des graines réparties dans les 5 livrables, pas un fil séparé à activer plus tard.
- **Sécurité et qualité** : repérage réglementaire en phase 1 (basse tension, conformité CE, public exposé), traduit en FC avec flexibilité F0 sur tout ce qui relève de la réglementation.

### Production du template CdCF école

Fichier `cdcf-ecole-template.docx` produit (8 pages, A4, validé docx schema). Composantes :
- Page de garde avec métadonnées projet (nom, équipe, encadrant, date de revue, version)
- Sommaire automatique (champ Word, à mettre à jour à l'ouverture)
- 5 sections suivant la TdM (Présentation / Besoin / Existant / Analyse fonctionnelle / Planification) + Annexes
- 4 tableaux pré-structurés : bête à cornes (3 colonnes), comparatif EAT (5 critères × 4 solutions, en-têtes pré-remplis), caractérisation des fonctions (4 colonnes × 4 fonctions FP1/FS1/FC1/FC2 en amorce), matrice de risques (4 colonnes × 5 lignes)
- Header + footer avec pagination « Page X / Y »
- Placeholders italiques en gris pour guider sans pré-remplir le contenu intellectuel
- Police Arial 11 pt, A4, hiérarchie visuelle H1/H2 en bleu

**Emplacement acté** : `content/ressources/templates/cdcf-ecole-template.docx`. Dossier `content/ressources/templates/` créé via MCP. Le fichier `.docx` (binaire) doit être copié manuellement par l'utilisateur — limite technique du MCP filesystem qui ne permet pas l'écriture binaire.

**Liens posés dans la fiche** :
- H4 « Structurer le document » : paragraphe d'annonce avec wiki-link
- « Voir aussi » : entrée dédiée avec mention « (document Word fourni) »

### Patches qualité post-rédaction (auto-critique sur 3 axes)

L'utilisateur a challengé la qualité de la rédaction sans donner ses remarques exactes. Auto-critique honnête sur 3 axes, suivie de patches :

- **Popovers manquants** : 3 ajouts dans l'étape 6 (`cahier-des-charges-fonctionnel` et `pieuvre` au préambule pour autoportance ; `jalons` dans la H4 « Faire valider »). Cas moins critiques notés au BACKLOG (`fablab`, `revue-de-cdcf`, conformité CE, basse tension).
- **Gras dérapé sur demi-phrases** : 4 cas resserrés (« vérifier que cette intégration est présente partout » → retirer le gras ; « autoriser le passage en phase 2 » → « autoriser le passage » ; « chaque exigence du tableau de fonctions est chiffrée » → « chaque exigence chiffrée » ; « valider les ordres de grandeur des matériaux et procédés disponibles » → « valider les ordres de grandeur »).
- **Redondances inter-paragraphes** : 2 doubles gras neutralisés (« agréger » et « intégrée transversalement », gras gardé à la 1ère occurrence seulement).
- **Exemple supplémentaire / template** : troisième axe de challenge — un template Word à compléter manquait vraiment. Production immédiate du `cdcf-ecole-template.docx` en lieu et place d'un simple exemple supplémentaire dans la fiche.

### Leçon méthodo — limite du MCP filesystem sur les binaires

Le serveur MCP filesystem expose `write_file(content: string)` mais pas d'écriture binaire. Conséquence pratique : Claude peut produire un `.docx` dans son sandbox et le présenter en téléchargement, mais ne peut pas le déposer directement dans le dépôt local. L'utilisateur fait la copie manuelle. À retenir pour les futurs templates et ressources binaires (images exportées, PDF, etc.).

### Nouvelles dépendances posées
- `[[gestion-de-projet]]` — fiche-trame fil transverse (lien posé dans la section Équipe).
- `[[securite-et-qualite]]` — fiche-trame fil transverse (lien posé dans la section Équipe).
- `[[cdcf-ecole-template.docx]]` — ressource Word fournie, à copier manuellement dans `content/ressources/templates/` (dossier créé en session).

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes.
- **Cohérence finale des 6 étapes** de `specification-technique.md` : relecture progressive à effectuer en session dédiée pour vérifier que les 6 étapes forment un récit progressif et non une juxtaposition. Geste de clôture phase 1 partie 3.
- **Notion `revue-de-cdcf`** : vocabulaire acté 24/05 partie 1, mais pas de fiche dédiée. À monitorer — si l'utilisation se répète au-delà de la phase 1, fiche-notion légère à produire.
- **Notion `fablab`** : utilisée 2 fois dans la section Équipe (et probablement réutilisée ailleurs), candidate fiche-notion légère.

---

## 2026-05-24 — Clôture phase 1 partie 1 : étape 5 + Pièges fréquents

### Périmètre de session
Clôture de la phase 1 sur deux fronts : rédaction de l'étape 5 « Planifier le projet » de `specification-technique.md` (3 sous-sections H4 + 4 callouts) et refonte de la section « Pièges fréquents » (6 pièges en gras court + explication). Session sur PC perso, préfixe MCP `filesystem:*`. Scission acquise en début de session : 5 + Pièges aujourd'hui, 6 + section Équipe + cohérence d'ensemble dans une session ultérieure.

### Cadrage en début de session — 5 questions tranchées

1. **Structure du CdCF (étape 6)** : version école **simplifiée** enseignée par défaut, avec encart « ce qui change avec un client réel ». Dérivée reconnaissable de la NF X50-151 (pas une structure inventée). Évite à l'étudiant de croire que la version qu'il rédige est la version pro. Décision opérationnelle pour la session suivante.
2. **Granularité étape 5** : **3 H4** (vs 4 initialement projetés). Regroupement `Gantt + jalons + rétroplanning` sous une H4 unique « Planifier dans le temps » qui reflète visuellement leur indissociabilité opérationnelle. WBS et risques en H4 dédiées plus courtes.
3. **Outils de planification** : mention sobre — Excel/papier + GanttProject + **Trello** (acté ici comme outil en ligne grand public). Pas de comparatif, pas de détail de fonctionnement, juste citer.
4. **Validation finale du CdCF** : pas « soutenance intermédiaire » comme initialement envisagé. Le vocabulaire correct est **revue de CdCF** (évaluation enseignante équivalente d'une signature client en contexte école). Reformulation à intégrer en étape 6 + retombée immédiate en étape 5 sur la formulation des jalons (« S3 — Revue de CdCF » dans l'exemple).
5. **Stratégie d'enchaînement** : scission **5 + Pièges** (cette session) / **6 + Équipe + cohérence finale** (session suivante). L'étape 6 (CdCF) est l'agrégateur des 5 précédentes, mérite d'être traitée à tête reposée. La cohérence d'ensemble (vérifier que les 6 étapes forment un récit progressif) est un geste à part entière.

### Vérification visuelle préalable — étapes 3 et 4 sous Quartz
Checklist passée avec utilisateur en début de session, **toute validée**. Étape 3 (note italique BàC/pieuvre, FS1 réécrite, définition FP, popovers FP/FS/FC sur sigles génériques seulement) et étape 4 (sous-liste F0/F1/F2/F3, 4 callouts côte à côte, popover `unite-si`, FP1 reformulée répercutée étapes 3 et 4) : OK. Aucun patch correctif nécessaire avant d'attaquer l'étape 5.

### Rédaction étape 5 — Planifier le projet

Structure produite :
- **Préambule** (2 paragraphes) : pont depuis étape 4 (le *quoi* est posé, reste le *quand* et le *qui*) + spécificité école (date de fin imposée → rétroplanning comme outil natif, pas optionnel)
- **H4 « Décomposer en WBS »** (forme courte) : popover `[[wbs]]` lien rouge. Profondeur 2-3 niveaux pour usage école.
- **H4 « Planifier dans le temps »** (forme longue) : 3 popovers liens rouges `[[jalons]]`, `[[retroplanning|rétroplanning]]`, `[[gantt|Gantt]]`. Trio indissociable présenté en cascade pédagogique (jalons posés → rétroplanning en remontant → Gantt qui matérialise). Paragraphe outils en clôture : Excel/papier, GanttProject, Trello, 1 phrase chacun, message « choisir un et s'y tenir ».
- **H4 « Maîtriser les risques »** (forme courte) : popover `[[matrice-de-risques]]` lien rouge. Identifier / coter (probabilité × gravité) / parade. 5-10 risques en école, **actualisation régulière** comme message clé.

4 callouts :
- `[!warning] Attention` — *Un planning qu'on ne met pas à jour ment.* La planification est un outil vivant, pas un livrable archivé.
- `[!tip] Astuce` — *Poser d'abord la date de soutenance, puis remonter à rebours en gardant une marge.* Au moins 2 semaines de marge avant la butoir.
- `[!example] Exemple : projet bras 3 axes` — 5 jalons sur un projet 15 semaines (S3 Revue de CdCF / S6 PoC / S11 Dossier technique / S14 Intégration / S15 Soutenance), WBS niveau 2 en prose sur 4 branches (Mécanique / Électronique / Informatique / Projet), 5 risques numérotés avec cote *probabilité × gravité* en italique et parade.
- `[!livrable] Livrables 5/6 — Spécification technique` — WBS + Gantt + matrice de risques.

### Refonte section Pièges fréquents

Fusion des 3 pièges génériques existants avec les 4 pièges identifiés au 23/05 suite 2. Résultat : **6 pièges** (et non 7), parce que l'ancien piège générique « Cahier des charges flou » faisait doublon avec les nouveaux « niveau non chiffré » et « critère subjectif » — fondu dans ces derniers, plus précis. Format adopté : **gras court en ouverture suivi d'une phrase d'explication concise** (1-2 phrases). Reformulation au passage des 2 pièges génériques préservés pour aligner le format.

Les 6 pièges :
- Sauter à la solution avant d'avoir formulé le besoin
- Confondre verrou technologique et difficulté d'équipe
- Niveau non chiffré (exigence non opposable)
- Critère subjectif ou non mesurable
- Sur-spécification
- Confondre F3 avec une absence d'exigence

### Vérification visuelle de la session
Checklist passée avec utilisateur en fin de session : étape 5 (préambule + 3 H4 + popovers liens rouges visibles + 4 callouts conformes) + section Pièges (format gras court + explication, popover `pcb` préservé). **Tout validé.** Le dernier geste documentaire (MAJ JOURNAL / TODO / BACKLOG) tenu dans la même session — discipline appliquée suite à la leçon méthodo du 23/05 suite.

### Nouvelles dépendances posées
- `[[wbs]]` — fiche-notion légère (niveau de détail tranché 23/05 suite 2). Découpage projet en éléments traçables, 2-3 niveaux.
- `[[jalons]]` — fiche-tuto détaillée. Points de validation rythmant le projet, conditionnent le passage à la phase suivante.
- `[[retroplanning]]` — fiche-tuto détaillée. Planification à rebours depuis la soutenance, marge ≥ 2 semaines.
- `[[gantt]]` — fiche-tuto détaillée. Matérialisation visuelle du rétroplanning. Outils : Excel/papier, GanttProject, Trello.
- `[[matrice-de-risques]]` — fiche-notion légère. Identification + cotation probabilité × gravité + parade. Actualisation à chaque revue de phase.

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes.
- **Étape 6 — Rédiger le CdCF** : version école simplifiée + encart « avec client réel » + démarche écoconception intégrée + revue de CdCF comme jalon de validation enseignante. À rédiger en session suivante.
- **Section « Pendant cette phase, côté équipe »** de `specification-technique.md` : toujours en placeholder. À rédiger en session suivante (interfaces méca/fabrication + ancrage phase 1 des fils transverses gestion-projet / écoconception / sécurité-qualité).
- **Cohérence d'ensemble des 6 étapes** : relecture progressive à effectuer en session suivante pour vérifier que les 6 étapes forment un récit progressif et non une juxtaposition. Geste de clôture phase 1.

---

## 2026-05-23 (suite 2) — Approfondissement specification-technique étape 4 (cœur structurant)

### Périmètre de session
Approfondissement de l'étape 4 « Caractériser les fonctions » de `specification-technique.md`, cœur structurant de la phase 1. Réalisé sur PC perso. Trois questions de cadrage tranchées en début de session, une décision méthodologique additionnelle introduite en cours de session (alias FP/FS/FC), trois patches collatéraux sur l'étape 3 acquis en cours de session.

### Cadrage en début de session — 3 questions tranchées

1. **Fiche unique vs 3 fiches séparées (critère/niveau/flexibilité)** : décision = **1 fiche-tuto unique `caracteriser-une-exigence`** avec mécanisme d'alias Quartz CrawlLinks (`aliases: [critere, niveau, flexibilite]` dans le front matter). Les 3 wiki-links `[[critere]]`, `[[niveau]]`, `[[flexibilite]]` se résolvent vers la fiche unique. Contrainte rédactionnelle induite : la première phrase de la fiche doit définir le triplet d'un coup pour que le popover ait du sens au survol de chacun des 3 sigles. Argument : critère/niveau/flexibilité ne s'écrivent jamais isolément en NF X50-151, ce sont 3 colonnes d'une même ligne de tableau d'exigence ; 3 fiches séparées dupliqueraient nécessairement l'exemple.

2. **Triptyque mauvais/moyen/bon dans la trame** : décision = **option (c)**, pas de triptyque dans la fiche-trame. Un seul `[!example]` bras 3 axes en mode « bon » sur FP1. Le triptyque vivra dans la future fiche-tuto `caracteriser-une-exigence` (pattern à transposer de `bete-a-cornes.md`). Argument : convention v2.1 « 1 `[!example]` fiche-trame = bras 3 axes » trop fraîchement figée pour la casser ici.

3. **Charte unités/niveaux** : décision = **mini-encart méthodo en prose** porté par un `[!tip]` Astuce dans l'étape 4 (forme légère). Charte typographique complète déléguée à une fiche-notion **`unite-si`** créée comme dépendance dans la session (popover en lien rouge dans le `[!tip]`).

### Décision méthodologique additionnelle — alias FP/FS/FC vers `pieuvre`

Question soulevée en cours de session par l'utilisateur : les sigles **FP**, **FS**, **FC** étaient en gras simple dans l'étape 3, sans popover. Un étudiant qui arrive à l'exemple par ancre n'avait pas la définition sous la main.

**Décision : option A — alias `[FP, FS, FC]` vers la future fiche `pieuvre`** (déjà au TODO doublement prioritaire). Contrainte rédactionnelle induite : l'intro de la fiche `pieuvre` doit énoncer les 3 catégories dès les premières phrases.

**Granularité du popover figée** : popovers **seulement** sur les sigles **génériques** (FP, FS, FC — préambule, définitions, livrable). **Pas** sur les **instances numérotées** (FP1, FS1, FC1, FC2 — alourdiraient visuellement sans rien apporter). Convention à documenter dans le template `fiche-trame.md` ou note méthodo dédiée.

### Élargissement méthodologique — alias comme alternative légère à la fiche-notion stub

La décision Q1 (alias `[critere, niveau, flexibilite]`) étend la typologie 3 types (trame/tuto/notion) avec un mode supplémentaire : la **« facette indissociable d'un outil plus large »** est servie par alias plutôt que par fiche-notion stub.

**Critère discriminant posé** :
- **Notion autoportante** (sens propre, mérite ses propres exemples choisis pour elle) → reste fiche-notion. Exemples : `pieuvre`, `mind-map`, `bete-a-cornes`.
- **Facette indissociable** d'un outil ou méthode plus large → alias suffit. Exemples : `critere`/`niveau`/`flexibilite` (3 colonnes d'une même ligne de tableau d'exigence), `FP`/`FS`/`FC` (3 catégories produites par la pieuvre).

Test pratique : « si je rédige une fiche-notion autonome sur cette notion, est-ce que je vais inévitablement re-rédiger le même exemple et la même prose que dans la fiche-mère ? » Si oui → alias. Si non → fiche-notion.

Convention à intégrer dans le commentaire HTML d'introduction de `templates/fiche-notion.md` une fois le mécanisme alias validé en pratique sous Quartz (à confirmer à la création de `caracteriser-une-exigence` ou `pieuvre`).

### Patches étape 3 — corrections collatérales et popovers FP/FS/FC

Trois corrections de fond identifiées par lecture critique :

- **Incohérence interne au fil rouge bras 3 axes** entre bête à cornes (étape 1, à-qui = enseignant, but = illustrer la démarche) et pieuvre (étape 3, FP1 = positionner un objet). Résolution : ajout d'une **note italique en tête du `[!example]` étape 3** explicitant que la pieuvre porte sur le système physique (le bras) tandis que la bête à cornes portait sur la commande pédagogique au-dessus (l'enseignant). Les deux niveaux coexistent dans la posture étudiant-client-de-lui-même, ne se contredisent pas.
- **FS1 limite sur la règle « deux milieux »** : *« Permettre à l'opérateur de visualiser le statut »* reliait l'opérateur à… l'information du système. Réécriture en *« Permettre à l'opérateur de programmer une séquence de mouvements depuis un poste informatique »* — relie opérateur + PC, deux milieux distincts. **Ajout corrélé** : `poste informatique` dans les milieux environnants identifiés.
- **Définition FP imprécise** : « Sans **FP1**, le système n'a pas lieu d'être » → « Sans **FP**, le système n'a pas lieu d'être » (le FP1 spécifique clouait artificiellement la règle à une seule fonction).

**Patches popovers FP/FS/FC** : 8 patches d'ajout (préambule, définitions, warning anti-pattern, exemple, paragraphe pivot étape 4, livrable). 6 patches inverses ensuite pour retirer les popovers des instances numérotées (granularité figée « génériques seulement »).

### Rédaction étape 4 — Caractériser les fonctions

Structure produite :
- Préambule (2 paragraphes) : pont avec étape 3, opposabilité comme enjeu central, renvoi à `caracteriser-une-exigence`
- 3 sous-sections H4 : **Énoncer le critère** / **Fixer le niveau** / **Définir la flexibilité**
- 4 callouts : `[!warning]` Attention « Niveau non chiffré = exigence non opposable » + `[!tip]` Astuce sur les unités SI + `[!example]` bras 3 axes (FP1 caractérisée + justification ancrée sur étape 2 + ouverture sur évaluation finale) + `[!livrable]` 4/6

**Décision structurelle option (3) sur la flexibilité** : présenter Fn (échelle qualitative NF X50-151 F0/F1/F2/F3) **et** tolérance numérique (± X mm, ± X %) comme **deux composantes complémentaires**. Le `Fn` dit la négociabilité, la tolérance numérique dit la marge concrète. Option défendue contre Fn seul (trop abstrait pour étudiant qui découvre) et contre tolérance numérique seule (perd la dimension négociabilité).

**Densité de callouts** : 4 callouts dans l'étape — borne haute, conforme à v2.1 puisque chacun porte un message distinct (opposabilité / forme d'écriture / illustration / livrable).

### Round 2 — 5 patches d'ajustement étape 4

- Phrase-clé `[!tip]` simplifiée : retrait de « avec un espace insécable entre la valeur et l'unité » — la convention typographique complète sera portée par la future fiche-notion `[[unite-si]]` (popover en lien rouge posé sur la phrase-clé).
- Phrase Obsidian `Ctrl+Maj+Espace` retirée (sera traitée par `unite-si`).
- **FP1 reformulée** : *« Permettre à l'opérateur de positionner un objet léger… »* → *« Permettre à l'opérateur de **manipuler le robot pour** positionner un objet léger… »* — plus précis (l'opérateur ne positionne pas directement, il manipule le bras qui positionne). **Répercuté étapes 3 ET 4** pour cohérence interne du fil rouge.
- Justification de l'exemple : « Moveo » → « le bras Moveo », « uArm Swift Pro » → « le bras uArm Swift Pro » (précision lexicale).

### Nouvelles dépendances posées
- `[[caracteriser-une-exigence]]` — **fiche-tuto à créer en priorité**, avec front matter `aliases: [critere, niveau, flexibilite]`. Embarquera le triptyque mauvais/moyen/bon, la méthode pratique, et l'échelle F0/F1/F2/F3 détaillée.
- `[[unite-si]]` — fiche-notion à créer (popover posé étape 4, lien rouge). Convention typographique des unités (espace insécable, format ± X mm, etc.).
- Future fiche `[[pieuvre]]` : aliases `[FP, FS, FC]` à poser dans son front matter. Intro à rédiger pour définir les 3 catégories d'un coup.

### Vérification visuelle étapes 2-3
Identifiée en début de session comme dette du JOURNAL 23/05 suite (« à faire en début de session suivante »), elle avait en réalité été faite en fin de session du 23/05 suite — c'est la MAJ documentaire qui n'a pas pris ce dernier geste. Correction : étapes 2-3 sous Quartz **vues et validées le 23/05 suite par l'utilisateur en fin de session**, dette tombée. Le on et le off de l'écriture documentaire en fin de session mérite vigilance — ne pas conclure tant que le dernier geste n'est pas écrit.

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes (sauf vérification visuelle étapes 2-3 retombée — voir ci-dessus).
- **Étape 5 — Planifier le projet** : orientations actées en fin de session pour la session de clôture phase 1.
  - **Gantt / rétroplanning / jalons** : niveau de détail élevé, fiches-tuto à créer.
  - **WBS / matrice de risques** : niveau de détail léger, fiches-notion à créer.
  - **Version pédagogique** : Excel ou papier, avec mention de quelques outils existants nommés (GanttProject, autres à compléter).
  - Pas de conflit attendu avec les fils transverses (gestion-projet, écoconception, sécurité-qualité), qui seront en tutos/notions distinctes.
- **Étape 6 — Rédiger le CdCF** : orientations actées en fin de session.
  - **Structure canonique NF X50-151** avec souplesse dans l'écriture.
  - **Intégration de la démarche écoconception** ✓.
- **Section « Pendant cette phase, côté équipe »** de `specification-technique.md` : toujours en placeholder.
- **Pièges fréquents** : 4 pièges identifiés ce soir à intégrer (niveau non chiffré / critère subjectif non mesurable / sur-spécification / confusion F3 ≠ absence d'exigence). À traiter à la session de clôture phase 1, conjointement aux étapes 5-6.
- **Convention « popovers seulement sur sigles génériques »** (FP/FS/FC, pas FP1/FS1/…) : à documenter formellement (template fiche-trame ou note méthodo dédiée).
- **Convention « alias = mécanisme léger pour facettes indissociables d'un outil »** : à documenter dans le commentaire HTML d'introduction de `templates/fiche-notion.md` une fois le mécanisme validé en pratique sous Quartz.

---

## 2026-05-23 (suite) — Approfondissement specification-technique étapes 2 et 3

### Périmètre de session
Approfondissement de l'étape 2 (« Étudier l'existant ») et de l'étape 3 (« Formaliser les fonctions ») de `specification-technique.md`. Découpage de l'approfondissement des étapes 2-6 acté en début de session : étapes 2-3 (cette session) / étape 4 dédiée (cœur structurant) / étapes 5-6 (clôture phase 1).

### Cadrage en début de session — 3 questions tranchées

1. **Fil rouge à partir de l'étape 2** : bras 3 axes seul. Retour à la convention « 1 `[!example]` fiche-trame = bras 3 axes ». La dualité couveuse/bras de l'étape 1 reste une exception assumée justifiée par la nature même de l'étape 1.
2. **Découpage en sessions** : option étapes 2-3 / étape 4 dédiée / étapes 5-6 retenue. L'étape 4 (caractérisation) mérite une session dédiée du fait du double triptyque (critère/niveau/flexibilité × mauvais/moyen/bon) et de la question méta « 3 fiches séparées vs 1 fiche unique ».
3. **Popovers en parallèle** : stratégie « liens rouges assumés, fiches-notion par lot ultérieurement » maintenue.

### Étape 2 — « Étudier l'existant »

Structure : préambule + 3 sous-sections H4 (Recenser les solutions / Définir les critères / Comparer en tableau) + 1 `[!warning]` + 1 `[!example]` avec tableau comparatif + 1 `[!livrable]` 2/6.

**Décisions de fond :**
- **Distinction structurante** entre revue bibliographique (lecture, production de notes) et état de l'art technique (recensement de ce qui marche, comparaison chiffrée orientée décision). Portée par un `[!warning]` — anti-pattern pédagogique typique.
- **Tableau comparatif chiffré** dans le `[!example]` bras 3 axes : Niryo One, uArm Swift Pro, BCN3D Moveo × coût, charge utile, répétabilité, ouverture. Conclusion : Moveo comme référence inspirante (ouvert, démontable, abordable), simplification 6→3 axes pour scope pédagogique.
- **Rigueur sur le livrable EAT** : option chiffrée seule retenue (pas d'échappatoire qualitative `--/-/=/+/++`) — la valeur chiffrée est la norme, « n.c. » documente l'inaccessible.

**Round 2 (6 patches de relecture) :**
- Gras retiré sur « votre » (préambule)
- « attaqué un problème proche » → « réalisé un projet similaire »
- Gras déplacé : « **discriminer** » → « **discriminer les solutions entre elles** »
- BOM passé en popover (nouveau lien rouge `[[bom|BOM]]`)
- Titre H4 « Comparer en tableau et conclure » → « Comparer en tableau »
- Phrase sur l'échelle qualitative supprimée

### Étape 3 — « Formaliser les fonctions »

Structure : préambule + image pieuvre (placeholder cassé temporairement) + 2 sous-sections H4 (Identifier les milieux / Énoncer FP/FS/FC) + 1 `[!warning]` + 1 `[!example]` + ouverture FAST en prose + 1 `[!livrable]` 3/6.

**Décisions de fond :**
- **Trio FP/FS/FC retenu** (vs duo FP/FC) : FP relie deux milieux et justifie l'existence du système ; FS relie deux milieux mais répond à un service complémentaire non essentiel ; FC relie le système à un seul milieu, contrainte d'adaptation.
- **Anti-pattern central** : « Une fonction exprime un besoin, jamais une solution. » Règle pratique : si on peut citer une marque, un composant ou une technologie dans l'énoncé, on a dérapé. Porté par `[!warning]`.
- **Illustration pieuvre dans la trame** (option α retenue, parallèle exact `bete-a-cornes`) : placeholder image dans la fiche-trame, SVG `pieuvre-generique.svg` à produire à la session pieuvre avec référence visuelle canonique sous les yeux (leçon méthodo du 20/05 sur les outils canoniques).
- **Ouverture FAST en prose** en fin d'étape : la pieuvre donne le *quoi*, FAST donnera le *comment* en phase concept.

**Round 2 (1 patch de relecture) :**
- « faire le tour mental » → « construire une [[mind-map|mind map]] du système en situation réelle » (nouveau lien rouge `[[mind-map]]`)

### Nouvelles dépendances posées
- `[[bom|BOM]]` — tuto (acronyme + structure d'un BOM : préliminaire en spec, consolidée en concept, finale en dossier technique). Popover posé étape 2.
- `[[mind-map|mind map]]` — notion (outil méthodo générique, mobilisable bien au-delà de la pieuvre). Popover posé étape 3.
- `[[fast|FAST]]` — tuto (popover posé en ouverture étape 3, fiche à créer en phase 2 concept).
- `[[pieuvre]]` — déjà au TODO, désormais doublement prioritaire (popover + image SVG).

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes.
- **Question méta étape 4** : 3 fiches `critere`/`niveau`/`flexibilite` séparées vs 1 fiche unique « Caractériser une exigence ». À trancher en début de session étape 4.
- **Image pieuvre cassée dans la trame** : assumé temporairement. À résoudre lors de la session pieuvre.

---

## 2026-05-23 — Refonte specification-technique étape 1 + révision conventions callouts

### Périmètre de session
Refonte ciblée de l'étape 1 de `specification-technique.md` pour alignement sur les conventions figées le 22/05 (suite), ajout de la section Conclusion absente, réordonnancement final. Au cours de la session, 5 remarques de relecture utilisateur ont déclenché une révision **structurante** des conventions de callouts — répercutée dans les templates `fiche-trame.md` et `callouts.md`.

### Cadrage en début de session — 3 questions tranchées

1. **Fil rouge bras 3 axes vs couveuse pour l'étape 1** : décision = **garder la couveuse** comme `[!example]` illustrant la démarche standard (client externe), et **ajouter** un `[!example]` bras 3 axes après le paragraphe « Cas particulier : projet école sans client réel » pour amorcer le fil rouge dès l'étape 1. Argument : l'étape 1 est structurellement particulière (traite des deux postures client externe / projet école), donc 2 `[!example]` côte à côte est pédagogiquement justifié. **Convention « 1 `[!example]` = bras 3 axes » assouplie pour cette seule étape** (exception assumée).

2. **Convention « 1 `[!example]` par étape »** : ré-interprétée comme « **au moins** 1 `[!example]` obligatoire » et non « **exactement** 1 ». L'étape 1 actuelle est conforme (4 callouts : warning + example + tip + livrable). Faux écart retiré du programme.

3. **Périmètre de session** : refonte étape 1 + Conclusion + réordonnancement final. L'approfondissement de l'étape 2 reporté à session dédiée pour éviter une étape 1 propre + une étape 2 bricolée.

### Refonte spec-technique étape 1 — round 1 (7 patches)

- **Lexique** : « Cette **phase** ne demande pas » → « Cette **étape** ne demande pas » (Posture attendue)
- **Coquille** : « passer a le corriger » → « passé à le corriger »
- **Callout `[!warning]`** : titre `Piège : verrou technologique ≠ difficulté personnelle` → `Attention`, phrase-clé `**Verrou technologique ≠ difficulté personnelle.**` portée par le corps en gras
- **Callout `[!example]` couveuse** : titre `Exemple — Couveuse à œufs de poule` → `Sur la couveuse` (round 1)
- **Nouveau callout `[!example]` bras 3 axes ajouté** après le bloc « Cas particulier » (illustration de la posture étudiant-client-de-lui-même, plante le fil rouge dès l'étape 1)
- **Callout `[!tip]`** : titre `Pourquoi la bête à cornes paraît triviale (et ne l'est pas)` → `Astuce`, phrase-clé `**La bête à cornes paraît triviale, et c'est précisément là sa puissance.**` portée par le corps en gras
- **Section `## Conclusion` ajoutée** entre Équipe et Voir aussi (pont explicite vers `[[concept|concept]]`)
- **Voir aussi** : `Phase suivante : [[concept|Concept]] *(à créer)*` → `Étape suivante : [[concept|Concept]]` (la fiche existe désormais)

### Révision des conventions callouts — round 2 (déclenchée par la relecture)

À la relecture du round 1, 5 remarques utilisateur ont déclenché une révision **structurante** des conventions :

1. **Popovers à ajouter** dans l'objectif de la phase : `[[critere|critère]]`, `[[niveau|niveau]]`, `[[flexibilite|flexibilité]]` (notions), `[[etat-de-l-art-technique|état de l'art technique]]` (tuto). Liens rouges assumés.
2. **Popover à retirer** : `[[relation-client|client ou commanditaire du projet]]` → texte simple sans wiki-link (la notion « client » est trop générique pour mériter un popover ; `relation-client` reste dans Voir aussi en tant que tuto).
3. **Convention titre `[!example]` révisée** : `Sur le bras 3 axes` → **`Exemple : projet bras 3 axes`** (fiche-trame). `Couveuse` → **`Exemple : couveuse`** (fiche-notion). Logique : préfixe `Exemple : ` partout, plus explicite, lecture-friendly.
4. **Convention titre `[!livrable]` révisée** : `Livrable de l'étape N` → **`Livrable N/X — <Nom de la phase>`** (singulier) ou **`Livrables N/X — <Nom de la phase>`** (pluriel selon le nombre d'items listés). N = numéro de l'étape, X = nombre total d'étapes de la phase. Nom de phase en toutes lettres. Logique : un lecteur qui tombe directement sur la fiche (recherche, lien externe) se situe immédiatement dans le cycle en V.
5. **Convention titre `[!warning]` / `[!tip]` confirmée** : titre **fixe** (`Attention` / `Astuce`), phrase-clé porteuse du message **obligatoirement** portée par le corps en gras, jamais par le titre. Confirme le revirement vs la pratique de `concept.md` et des 3 autres trames du 22/05 (qui utilisent encore des phrases-clés en titre).

### Application des nouvelles conventions — 3 fichiers patchés

- **`specification-technique.md`** étape 1 : 4 patches supplémentaires (objectif + 2 `[!example]` + 1 `[!livrable]`) en plus des 7 du round 1. Étape 1 désormais 100 % alignée sur les conventions v2.1.
- **`templates/fiche-trame.md`** : bloc « CONVENTIONS À RESPECTER » réécrit (points 1, 2, 3) + commentaire HTML de motif d'étape patché + 3 étapes-exemple alignées.
- **`templates/callouts.md`** : sections `[!warning]`, `[!tip]`, `[!example]` et `[!livrable]` mises à jour avec les nouvelles conventions et exemples cohérents.

### Conséquence — dette d'alignement des 4 trames du 22/05

`concept.md`, `preuve-de-concept.md`, `dossier-technique.md`, `integration-et-tests.md` utilisent encore les anciennes conventions (`Sur le bras 3 axes`, `Livrable de l'étape N`, phrases-clés en titre des `[!warning]`/`[!tip]`).

**Décision actée** : pas d'alignement rétroactif systématique en session dédiée. L'alignement se fera à l'approfondissement de chaque trame, naturellement. **Conséquence assumée** : `specification-technique` devient temporairement plus rigoureuse que les autres trames sur la convention callouts — acceptable, c'est la fiche pilote du parcours étudiant.

### Vérification visuelle

- **`specification-technique.md` étape 1** : vérification visuelle sous Quartz **OK** (utilisateur, fin de session).
- **`templates/fiche-trame.md`** et **`templates/callouts.md`** : vérification visuelle **à faire** en début de session suivante (modifications patchées n'ont pas été revérifiées visuellement post-round 2).

### Exception assumée — titre `[!terrain]`

Le titre `Vu dans une ancienne promo` reste **non fixe** (variantes possibles : `Vu dans la promo 2024`, etc.), contrairement aux autres callouts qui ont tous reçu un titre fixe. Cohérent avec la sémantique de retour d'expérience daté. Convention conservée en l'état.

### Leçon méthodo — chemin différent par poste pour MCP filesystem

Le contexte de session pointait vers `C:\Users\timothe.turko.ICAMAD\...` (PC pro), or la session s'est déroulée sur le PC perso (`C:\Users\turko\...`). Tentative initiale d'accès échouée (`path outside allowed directories`), résolue en pivotant sur le bon chemin. **À retenir** : le serveur MCP filesystem ne sert que les directories autorisées du poste courant ; vérifier `list_allowed_directories` (ou échec d'accès) pour pivoter sans tergiverser.

### Leçon méthodo — nom du serveur MCP variable par poste

Les consignes du projet pointaient vers les outils préfixés `theskillcodex:*`. Sur ce PC perso, le serveur MCP filesystem est exposé sous le préfixe **`filesystem:*`** (mêmes capacités, même sémantique d'écriture sur disque). Validation par lecture des fichiers à jour (JOURNAL cohérent avec le contexte de session). **À retenir** : le préfixe peut varier d'un poste à l'autre selon le nom donné au serveur dans la configuration MCP — vérifier les outils disponibles plutôt que se fier au nom attendu.

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes
- **Alignement rétroactif des 4 trames du 22/05** sur les conventions callouts v2.1 : à faire à l'approfondissement de chacune.
- **Vérification visuelle des 2 templates patchés** au round 2 : à faire en début de session suivante.
- **Acquisition des 4 nouvelles notions/tuto** (`critere`, `niveau`, `flexibilite`, `etat-de-l-art-technique`) : popovers posés, fiches à créer.

---

## 2026-05-22 (suite) — Charte callouts v2 + templates fiche-trame et fiche-notion

### Périmètre de session
Production du template `fiche-trame.md` à partir des 5 trames stabilisées du 22/05 matin (specification-technique étape 1 + les 4 squelettes du cycle en V). Introduction au passage d'une charte graphique des callouts (palette v2). Vérification + refonte du template `fiche-notion.md` en fin de session.

### Cadrage en début de session — 4 questions tranchées

1. **Format du template** : sections vides avec commentaires HTML inline + exemple intégré pour les seuls éléments structurellement non évidents (placeholder italique + callouts fil rouge). Argument : un template entièrement pré-rempli pousserait l'auteur à copier-paraphraser au lieu de réfléchir.

2. **Granularité des commentaires** : commentaires HTML inline, courts à moyens, pointant vers la charte callouts séparée. Pas de fiche méthodo séparée créée maintenant (option B retenue — elle viendra si le besoin se confirme).

3. **Fil rouge dans le template** : présenté (bras 3 axes) avec convention de titre `Sur le bras 3 axes` figée. Pour les transverses, mention explicite dans le guide que la structure « démarche en étapes » peut ne pas s'appliquer telle quelle.

4. **Fiche-notion en fin de session** : OK, traitée (voir section dédiée plus bas).

### Charte callouts v2 — décisions de fond

Proposition initiale utilisateur de palette pastel saturée (ambiance lecture longue) : `[!question]` `#85A2BD`, `[!info]`/`[!note]`/`[!example]`/`[!terrain]` fusionnés `#FAF6EC`, `[!tip]` `#C1D3BB`, `[!warning]` `#FFBD5B`, `[!danger]` `#F08A6A`, `[!livrable]` `#E2BDF9`. Critique constructive Claude + débat → 6 décisions structurantes :

1. **Fusion `[!info]`+`[!note]` maintenue**, mais **différenciation `[!example]`/`[!terrain]` vs `[!info]`/`[!note]`** : ne pas noyer le callout pédagogiquement le plus important (`[!example]`, 1 par étape obligatoire en trame) dans une couleur indistincte de `[!info]`. Résultat : `[!example]`/`[!terrain]` reçoivent une teinte pêche pâle `#F9E6D4` distincte du crème `#FAF6EC` des info/note.

2. **`[!warning]` désaturé** : `#FFBD5B` initial trop saturé par rapport au reste de la palette pastel. Bascule sur `#F5C77D` (ambre plus doux), puis éclairci en `#FADFAF` après la passe d'éclairement globale.

3. **`[!success]`/`[!check]`/`[!done]` créés avec la couleur de `[!tip]`** : sémantique proche, fusion acceptée.

4. **Mode sombre reporté** à une session ultérieure : les étudiants travaillent principalement en mode clair. Reporté dans TODO/BACKLOG, pas d'urgence.

5. **Approche `--color` sombre + `--bg` clair conservée** : la palette utilisateur définit les `--bg`, Claude propose des `--color`/`--border` plus profonds dérivés. Évite le piège « texte de même couleur que fond ». Approche A validée.

6. **Passe d'éclairement globale** sur 6 callouts (question, tip/success, warning, danger, example/terrain inchangé, livrable) après validation visuelle : palette trop saturée en V1.0 du SCSS. Interprétation A retenue (un cran plus pâle, sans aller jusqu'au quasi-blanc) pour préserver la gradation hiérarchique entre callouts.

### Charte callouts v2 — palette finale figée

| Callout | Fond (`--bg`) | Titre / filet (`--color`) |
|---|---|---|
| `[!question]` | `#B5C5D6` | `#3B5F7F` |
| `[!info]` / `[!note]` | `#FAF6EC` | `#8C7E5C` |
| `[!tip]` / `[!success]` / `[!check]` / `[!done]` | `#D8E3D3` | `#5C8556` |
| `[!warning]` | `#FADFAF` | `#A8761F` |
| `[!danger]` / `[!failure]` / `[!bug]` | `#F6B5A0` | `#A33A1F` |
| `[!example]` / `[!terrain]` | `#F9E6D4` | `#A86A3F` |
| `[!livrable]` | `#EED9FB` | `#6B3B96` |

Icônes natives Quartz/Obsidian conservées (option B) : pas d'emoji additionnel dans les titres pour `[!warning]` et `[!danger]`.

### Conventions de titres de callouts — figées

Observation des patterns réels dans les trames du 22/05 + décision utilisateur :

- `[!question]` : `Question : <la question posée>` (le titre EST la question)
- `[!info]` / `[!note]` : `Info` ou `À retenir`
- `[!tip]` / `[!success]` : `Astuce` ou `Succès`
- `[!warning]` : `Attention` (icône native suffisante)
- `[!danger]` : `Danger` (icône native suffisante)
- `[!example]` dans une **fiche-trame** : `Sur le bras 3 axes` (fil rouge unique du projet)
- `[!example]` dans une **fiche-notion** : nom court du cas d'illustration (`Couveuse`, `Bras 6 axes industriel`)
- `[!terrain]` : `Vu dans une ancienne promo`
- `[!livrable]` : `Livrable de l'étape N` (singulier) ou `Livrables de l'étape N` (pluriel)

### Convention de coexistence des cas d'illustration — figée (rappel)

Déjà actée le 22/05 matin, **inscrite dans les commentaires du template `fiche-notion.md`** :
- Fiches-trame → fil rouge unique du projet (bras 3 axes)
- Fiches-notion → cas autonome choisi pour la notion (varié : couveuse, bras 6 axes, etc.)

### Règle de densité callouts — révisée

Ancienne règle (palette v1) : « 0 à 3 callouts par fiche sauf cas justifié ». Révision v2 : **exception assumée pour les fiches-trame** (5-10 callouts par fiche est la norme, 1 `[!example]` + 1 `[!livrable]` par étape obligatoires, plus warnings/tips ponctuels). Inscrit dans `callouts.md`.

### Production des templates

#### `templates/callouts.md` (refonte complète v1 → v2)
Nouveau plan : Règle générale + Charte graphique (tableau) + 8 callouts documentés avec sémantique + convention de titre + exemple markdown + rendu Quartz. Note `quartz/styles/custom.scss` comme source des couleurs CSS. Décision pliage maintenue en attente. La v1 reste traçable dans Git.

#### `templates/fiche-trame.md` (nouveau)
Extrait des 5 trames stabilisées. Structure :
- Front matter complet (type/phase/phases/tags/prerequis/aa/draft)
- Popover
- ## Posture attendue
- ## Objectif de la phase
- ## Démarche (3 étapes d'exemple ; commentaire explicite « dupliquer pour ajouter, plafond pratique 5-6 étapes »)
- ## Pièges fréquents
- ## Pendant cette phase, côté équipe
- ## Conclusion
- ## Voir aussi

Commentaires HTML pédagogiques par section + 1 bloc « CONVENTIONS À RESPECTER » dans la Démarche (callouts obligatoires/optionnels, lexique étape vs phase N, incertitude vs point dur, noms de phases en toutes lettres). 3 étapes-exemples dans le squelette pour montrer le motif sans alourdir.

Test de reconstitution mentale sur `concept.md` : ✅ le template permet de reconstruire les 4 trames du 22/05.

#### `templates/fiche-notion.md` (refonte complète v1 → v2)
L'ancien template datait du 19/05, antérieur à la typologie 3 types. Manques principaux : pas de `type: notion`, pas de `phases:`, pas de tag `notion`, structure de corps trop générique. Refonte sur le modèle de `fiche-trame.md` (même esprit de commentaires HTML) + alignement sur la pratique observée dans `bete-a-cornes.md` (la seule fiche-notion réelle produite à ce jour).

Structure :
- Front matter complet (`type: notion`, `phases:`, `tags: [notion + domaine]`, `prerequis`, `aa`, `draft`)
- Popover (catégorie : outil/méthode/concept/norme...)
- ## À quoi ça sert ? (obligatoire)
- ## Comment \<verbe adapté\> ? (titre adaptatif : construire / câbler / calculer / appliquer / implémenter)
- ## Exemple — \<Nom court du cas\> (convention de titre incarné, cas autonome)
- ## Pièges (obligatoire, pièges en **gras court** suivis d'explication, pas de puces)
- ## Cas particulier — \<sujet\> (optionnel, à supprimer si non nécessaire)
- ## Aller plus loin (optionnel)
- ## Voir aussi (format `[[cible|texte]] — description`)

Test de reconstitution mentale sur `bete-a-cornes.md` : ✅ le template permet de reconstruire la fiche.

### Décisions structurelles annexes

#### `templates/fiche-trame.md` — réordonnancement des sections finales
Après première validation utilisateur, **réorganisation de l'ordre des sections post-Démarche** :
- Ancien : Démarche → Conclusion → `---` → Pièges → Équipe → Voir aussi
- Nouveau : Démarche → `---` → Pièges → Équipe → **Conclusion** → Voir aussi

Argument utilisateur : la Conclusion (pont vers la phase suivante) gagne à être la dernière section utile **avant** le « Voir aussi », plutôt qu'enclavée entre la Démarche et les Pièges. L'étudiant qui termine la lecture utile tombe sur la transition vers la phase suivante au bon moment.

**Conséquence sur les 4 trames du 22/05 + `specification-technique`** : décalage avec le template. **Décision : pas d'alignement rétroactif** (option B retenue). L'alignement se fera à l'approfondissement de chaque trame, naturellement.

#### `_templates/` renommé en `templates/`
Lors de la session, plusieurs frictions sur l'accès aux fiches du dossier `_templates/` :
1. Le dossier était dans `ignorePatterns` (`quartz.config.ts`) — ignoré par le build Quartz. **Retiré** : décision éditoriale « `templates/` public » actée.
2. Même après retrait, l'URL `localhost:8080/_templates/...` renvoyait 404. Cause probable : serveur HTTP de développement gère mal les URLs commençant par underscore. **Renommage** `_templates/` → `templates/` acté comme solution durable.
3. Références internes patchées dans `fiche-trame.md`. `templates/index.md` mis à jour pour lister les 3 fiches.

#### Templates passés en `draft: false`
Le `Plugin.RemoveDrafts()` filtrait les templates eux-mêmes à cause de leur `draft: true`. **Résolution** : le template est de la doc, pas un brouillon. Passés en `draft: false`. Note explicite ajoutée dans le guide HTML : « le template lui-même est `draft: false` ; les fiches que vous créerez à partir de lui doivent commencer en `draft: true` tant qu'elles ne sont pas relues ».

### Fiche-démo jetable `callouts-demo.md`
Fiche créée en cours de session pour valider visuellement la palette callouts v2 sous Quartz (Obsidian ignore le SCSS Quartz, le rendu navigateur était la seule façon de vérifier). Servi depuis `content/callouts-demo.md` (contournement temporaire du problème underscore qui a finalement été résolu par le renommage). **Mission accomplie**, fiche jetable. Suppression à faire à la main (le serveur MCP filesystem n'a pas d'outil delete par sécurité).

### Leçon méthodo — Obsidian vs Quartz
Les couleurs CSS définies dans `quartz/styles/custom.scss` ne sont **pas** lues par Obsidian. Obsidian a son propre moteur de rendu et son propre thème. Pour valider visuellement la palette : **Quartz local obligatoire** (`npx quartz build --serve`). Obsidian reste pertinent pour la rédaction (vitesse, popovers natifs, recherche) mais pas pour valider le rendu visuel du site. Possible d'aligner Obsidian via un snippet CSS dans `.obsidian/snippets/` mais doublon de maintenance — pas la peine.

### Leçon méthodo — modifications de `quartz.config.ts`
Les changements de `quartz.config.ts` (config TypeScript) ne sont **pas** pris en compte par le hot reload. Il faut `Ctrl+C` puis relancer `npx quartz build --serve`. À retenir comme réflexe quand une modif de config ne semble pas prise en compte (`ignorePatterns`, locale, etc.).

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes
- **Mode sombre des callouts** : non décliné en v2. À traiter dans une session ultérieure quand on aura du recul d'usage.
- **Pliage des callouts** : toujours pas tranché (`[!example]-` replié par défaut ?). Note ajoutée dans `callouts.md` v2 que la décision est en attente.
- **Alignement rétroactif des 5 trames** sur le nouvel ordre de sections : volontairement non fait. Se traitera à l'approfondissement de chaque trame.
- **Suppression de `content/callouts-demo.md`** : à faire à la main par l'utilisateur (pas d'outil delete MCP).

---

## 2026-05-22 — Squelettes des 4 fiches-trame du cycle en V

### Périmètre de session
Production des 4 squelettes manquants du cycle en V (`concept`, `preuve-de-concept`, `dossier-technique`, `integration-et-tests`), à partir du matériau des flowcharts de phase produits les 20-21/05. Squelettes transverses (`gestion-de-projet`, `ecoconception`, `securite-et-qualite`) reportés en session dédiée (les transverses ne se traitent pas comme des phases : pas de « démarche en étapes » au sens cycle en V, plutôt des « postures à tenir tout au long du projet »).

### Décisions de cadrage en début de session

4 questions ouvertes tranchées avant production :

1. **Ordre de production** : descendant strict du V (concept → PoC → dossier → intégration). Argument : la symétrie du V est déjà *montrée* par le SVG macro, pas besoin d'être *éprouvée* par l'ordre de rédaction. Cohérence narrative du parcours étudiant préservée.

2. **Niveau de détail des étapes** : transposition non linéaire des flowcharts vers les trames. Plafond pratique 5-6 étapes par trame ; au-delà la fiche devient illisible sur smartphone. Compression systématique : 9→10 étapes brutes des flowcharts → 4-5 mouvements pédagogiques. **Argument méthodo retenu** : les flowcharts sont des outils d'analyse, les trames sont des outils de progression pédagogique — leurs granularités optimales diffèrent.

3. **Popovers dès le squelette** : oui, sur popover/objectif/titres d'étapes. Coût zéro et fait émerger la liste des notions à créer pour tracking BACKLOG. Liens rouges assumés (décision du 20/05).

4. **« Voir aussi » dès le squelette** : oui, mais discipline — uniquement les liens structurels évidents (phase précédente/suivante, fils transverses, notions centrales). Pas de chasse aux liens.

### Périmètre revu en début de session

Programme initial : 4 phases + 3 transverses + extraction du template = 8 unités. **Acte de prudence méthodo** : ramené à 4 phases + extraction du template si temps. Argument : les transverses méritent une session dédiée (structure différente), les bâcler en fin de session du soir serait dommage. Extraction du template finalement reportée aussi (densité de session déjà forte avec 2 passes de patchs sur les 4 trames).

### Production des 4 squelettes

| Trame | Étapes brutes (flowchart) → étapes (trame) | Notes |
|---|---|---|
| `concept` | 9 → 5 | Étape pivot = arbitrage architecture globale |
| `preuve-de-concept` | 8 → 4 | 3 sorties de phase explicites (concluant/ajuster/intenable) |
| `dossier-technique` | 10 → 5 | Multi-validation à 3 visible dès l'étape 4 ; étape 5 = point de non-retour |
| `integration-et-tests` | 10 → 5 | Pyramide de tests à 4 niveaux fonctionnels condensée en étape 3 ; pas de rétroaction sortante |

### Relecture critique — 6 corrections de fond

Après relécture du squelette `concept`, 6 corrections demandées :

1. **« Dérisquer » banni** dans toute production étudiante → « lever une incertitude » / « valider le fonctionnement ». Reste utilisable dans les échanges méthodo internes (sessions de travail). Lexique étudiant : termes à proscrire → BACKLOG.

2. **Noms de phases en toutes lettres** : jamais « phase 1/2/3/4/5 » dans la prose ou les liens. Toujours « spécification technique », « concept », etc. Conv. rentrée dans les wiki-links : `[[specification-technique|spécification technique]]`.

3. **Notion `[[decomposition-fonctionnelle]]` à créer** : popover posé dans `concept.md` étape 1. Le `schema-bloc-fonctionnel` n'est qu'**un** outil de décomposition, il manque la notion-mère.

4. **Plus de callouts pédagogiques, moins de tout-livrable** : appliqué via un **fil rouge unique** — voir décision projet fil rouge ci-dessous.

5. **Paragraphes trop courts** : se régleront naturellement à l'approfondissement avec les exemples du fil rouge. Pas d'action immmédiate sur le squelette.

6. **« Point dur » → « incertitude »** : remplacement systématique. La phase 3 devient « lever les incertitudes du concept » plutôt que « dérisquer les points durs ». Sémantique cohérente avec correction 1.

### Décision structurante — projet fil rouge unique

L'hétérogénéité des cas d'illustration (`specification-technique` utilise une couveuse, `bete-a-cornes` utilise un bras 6 axes) pose un problème de charge cognitive : chaque fiche force l'étudiant à recharger un contexte projet.

**Choix acté** : **bras robotique pédagogique 3 axes** comme fil rouge unique pour les 4 trames produites. Trois raisons :
- Mécatronique canonique (élec + méca + info, conflits inter-disciplines naturels)
- Volontairement simple (3 axes vs 6, imaginé en 30 s)
- **Opportunité d'ancrage** : un étudiant de l'utilisateur travaille sur ce sujet et pourra servir de relecteur réel sur la cinématique

**Cadrage figé** :
- Client/contexte : enseignant en mécatronique souhaitant un bras pédagogique démontable et reproductible
- Architecture cible (à découvrir au fil des trames, pas spoilée) : 3 axes rotatifs, steppers + drivers, microcontrôleur unique, structure imprimée 3D, IHM PC
- Incertitudes plausibles : tenue mécanique articulations 3D, précision bout de bras, commande synchronisée des 3 steppers
- Critères CdCF chiffrables : précision ± 5 mm en bout, charge utile 100 g, vitesse 50 mm/s

**Coexistence avec `bete-a-cornes.md`** : la fiche conserve son cas illustratif autonome (bras 6 axes industriel) — c'est une fiche-notion d'outil méthodologique, son cas a vocation à illustrer la notion, pas à servir de fil rouge. **Convention actée** : les fiches-trame partagent un fil rouge unique, les fiches-notion ont leur propre cas d'illustration choisi pour la notion. Pas de retravail rétroactif sur `bete-a-cornes`.

### Incarnation du fil rouge — conventions de callouts

- **1 `[!example]` par étape**, court (3-5 lignes), incarne l'étape sur le bras 3 axes
- `[!warning]` et `[!tip]` optionnels selon situation : warnings pour anti-patterns ou messages forts (« conflit inter-disciplines arrive presque toujours », « pas d'achat à titre personnel », etc.), tips pour clarifications utiles
- Fil rouge se construit progressivement au fil des phases (incertitude identifiée au concept → testée en preuve → ajustement intégré en dossier technique → écart final documenté en intégration). C'est exactement le message pédagogique du cycle en V.

**Total après 2ᵉ passe de patchs** : 19 `[!example]` + 5 `[!warning]` + 1 `[!tip]` = 25 callouts pédagogiques sur les 4 trames.

### Ajout d'une section « Conclusion »

**Décision actée** sur retour utilisateur : ajouter en fin de démarche (après le dernier livrable, avant le séparateur `---`) une section `## Conclusion` courte qui :
- récapitule l'état à la sortie de l'étape
- pose le pont explicite vers la phase suivante (lien interne en prose)
- ferme sur le hub pour la dernière phase (pas de phase suivante)

**Argument** : avant cet ajout, le seul accès à la trame suivante était dans la section « Voir aussi » tout en bas, après les pièges et la section équipe. L'étudiant qui termine la lecture de la démarche n'avait aucun pont vers la suite. Pattern à répliquer sur `specification-technique` lors de son approfondissement.

### Convention rédactionnelle implicite

Dans la prose : **« étape »** (de la démarche, du projet) plutôt que **« phase »** lorsque le mot « phase » pourrait prêter à confusion avec « phase N du cycle en V ». Application : posture, objectif, transitions. Le mot « phase » reste utilisé dans les métadonnées structurelles (front matter `phase: 2`, hub) et les cas où il n'y a pas d'ambiguïté.

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes
- **Extraction du template `_templates/fiche-trame.md`** : reportée à la prochaine session. 5 trames stabilisées en main (specification-technique + les 4 nouvelles), conventions consolidées, c'est le bon moment pour figer la méthode.
- **Refonte `specification-technique.md` étape 1 + ajout Conclusion** : étape 1 ne suit pas la convention « 1 callout par étape » (3 callouts), et la fiche n'a pas de section Conclusion. À traiter lors de l'approfondissement des étapes 2-6.

---

## 2026-05-21 (suite 2) — Vue d'ensemble macro : V replié avec rétroactions

### Choix structurel : enrichir le SVG existant, pas un 6e flowchart Mermaid
Au lancement de la session, le programme prévoyait un flowchart Mermaid « vue d'ensemble macro » consolidant les rétroactions inter-phases. **Bascule en début de session** sur l'enrichissement du `cycle-v-projet.svg` existant. Trois raisons :
- Le V replié *montre* déjà les correspondances horizontales (« validée par », « guide », « éclaire ») — c'est exactement ce qu'on veut renforcer
- Mermaid+dagre aurait peiné sur un graphe à 5 nœuds + 6 arcs (cf. galère subgraph BRANCHES phase 2)
- Réutilisation d'un asset déjà validé et lisible, au lieu d'introduire une 6è représentation graphique

### Archivage discipliné
- Création du dossier `content/ressources/img/archive/`
- Ancien SVG renommé `cycle-v-projet-v1.svg`. Convention `-vN.svg` retenue pour les futures archives (plus claire que `-old`)
- Nouveau SVG `cycle-v-projet.svg` produit avec les rétroactions

### Sémantique des rétroactions
Quatre arcs pointillés ambrés (`#BA7517`, palette callouts v1), agrégés par couple (source, cible) avec étiquette explicite :
- **R1** ph3 → ph2 : *ajuster les solutions* (PoC partiel, solutions à revoir)
- **R2a** ph2 → ph1 : *trou dans le CdCF* (décomposition révèle un manque)
- **R2b** ph3 → ph1 : *concept intenable* (PoC échec radical)
- **R3** ph4 → ph2 : *interface impossible / écart BOM*

**Convention de routage** : tous les arcs passent par l'**extérieur du V**, jamais dans le creux central — préserve la lisibilité de la structure en V. R2b passe à gauche (arc le plus large, viewBox étendu de `0 0 680 560` à `-110 0 800 580`). R3 a d'abord été tracé par le bas, **repositionné par le haut** sur retour utilisateur (lisibilité bien meilleure, étiquette logée dans la zone vide entre les titres et la barre ph1↔ph5).

### Pointillé gris « guide » conservé malgré la présence de R3 entre ph2 et ph4
Question utilisateur en cours de session : faut-il supprimer le pointillé gris « guide » (relation nominale ph2 → ph4) maintenant que R3 (rétroaction ph4 → ph2) est dans la même zone ? **Décision : garder les deux**. Les éléments encodent deux choses différentes — relation permanente descendante (gris) vs événement exceptionnel remontant (ambré). Supprimer « guide » casserait la symétrie pédagogique du V (validée par / guide / éclaire). La gêne visuelle a été résolue en déplaçant R3 par le haut (cf. ci-dessus).

### Rupture pédagogique phase 5
Étiquette italique discrète positionnée à côté de ph5 : *« pas de retour : les écarts se documentent »*. Matérialise explicitement l'absence de rétroaction sortante (calendrier qui impose la livraison) plutôt que de la laisser deviner par l'absence de flèche.

### Décision : abandon des 3 flowcharts transverses
Le programme initial prévoyait, en seconde partie de session, les flowcharts `gestion-projet`, `ecoconception`, `securite-qualite`. **Décision actée en fin de session** : on les abandonne. Rationnel : les flowcharts sont des **outils de travail amont pour la rédaction des trames**, pas des livrables exhaustifs en eux-mêmes. Les fils transverses sont déjà mentionnés dans chaque flowchart de phase aux points d'ancrage clés (stratégie β+γ actée le 20/05), c'est suffisant pour passer aux squelettes de fiches-trame. **Conséquence sur le périmètre `_drafts/flowcharts/`** : la collection est considérée comme close. Les fiches-trame transverses (`gestion-de-projet.md`, `ecoconception.md`, `securite-et-qualite.md`) restent au programme — c'est uniquement leur cartographie graphique préalable qui est abandonnée.

### Incident méthodo — confusion outils sandbox vs MCP filesystem
Perdu un moment sur un faux positif silencieux : `create_file` (outil sandbox Claude) renvoie « Successfully created » mais écrit dans un filesystem éphémère qui n'est **pas** le disque utilisateur. Seuls les outils préfixés `theskillcodex:*` (write_file, edit_file, move_file) touchent le dépôt local. Le piège est doublement perfide : (a) les noms sont quasi identiques, (b) les retours « success » sont indistinguables, (c) `move_file` MCP a bien marché en début de session, ce qui a entretenu l'illusion. **Leçon méthodo** : pour toute écriture sur le dépôt, **toujours** vérifier que l'outil est préfixé `theskillcodex:`. C'est le pendant filesystem de l'incident `spawn EINVAL` d'hier (un piège silencieux qui mange du temps si on ne vérifie pas).

### Statut couverture du cycle en V
**Vue macro produite et validée**. Les 5 flowcharts de phase + la vue macro dans `cycle-v-projet.svg` constituent le matériau complet pour démarrer les squelettes de fiches-trame. La séquence flowcharts est close.

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes
- **Layout du subgraph BRANCHES (phase 2)** : reporté BACKLOG (résolu en pratique par contournement — phases suivantes ne souffrent pas du même problème grâce à la convention « grille carrée »)
- **3 flowcharts transverses (gestProjet, ESE, sécu)** : **abandonnés**, pas reportés. À ressortir uniquement si une trame transverse révèle un vrai besoin de cartographie graphique.

---

## 2026-05-21 (suite) — Flowcharts phases 3, 4 et 5

### Reprise de session
- PC pro. `git pull` propre, fast-forward sans conflit (récup du travail PC perso : flowcharts phase 1 et 2 + pipeline SVG).
- 3 questions ouvertes phase 3 tranchées en début de session.

### Flowchart phase 3 — preuve de concept

#### Décisions structurelles
- **Structure des branches = par point dur, pas par discipline**. Rationnel : le PoC dérisque les **incertitudes critiques**, qui sont rarement mono-disciplinaires (un capteur d'effort = élec + méca + info). Forcer la grille élec/méca/info créerait des branches artificielles. La convention 3 couleurs disciplines reste mobilisable au niveau du label si un point dur est dominant sur une discipline, mais n'est pas systématique. **Rupture de pattern visuel** avec phase 2 assumée — le flowchart reste document de travail interne, pas un livrable public.
- **Pas d'étape "acquisition matériel" séparée**. Le PoC se fait majoritairement avec du **matériel école standard + stock divers école**. Acquisition spécifique projet repoussée en phase 4 (BOM finale). Vocabulaire à retenir : **pas de composants "perso"** — interdit pour équité budgétaire et respect du cadre projet.
- **Étape E2 commune amont "identifier les ressources matérielles"** (stock standard / stock divers / acquisition exceptionnelle si vraiment critique) plutôt que de dupliquer dans chaque branche point dur.
- **Fusion D1 (énoncés validés) + S1 (revue énoncés)** → un seul nœud S1 "Revue des énoncés (validation encadrant)". La revue *est* la validation, un losange ne servirait à rien.
- **Banc de test = intrinsèque à la branche point dur** (et non étape séparée). Le banc système global appartient à la phase 5. Clarification utilisateur reçue : deux niveaux de bancs distincts dans le projet (banc PoC focalisé sur un point dur, banc système global en intégration).
- **3 sorties au losange D-PoC** (vs 2) : concluant / ajuster solutions (retour phase 2) / concept intenable (retour phase 1). Distinction pédagogiquement cruciale : un projet ne meurt pas pareil selon où le problème se situe.
- **Grille à 3 branches dans le subgraph BRANCHES** : nombre figé pour stabilité visuelle, mention dans la fiche que N = 2 à 4 typiquement selon le projet.

#### Rendu
- **Layout BRANCHES nettement meilleur qu'en phase 2**. À retenir comme convention : **Mermaid+dagre gère mieux les grilles carrées et régulières** (3×3 ici : 3 points durs × 3 étapes) **que les rectangulaires** (2×3 en phase 2). Pour les futurs sous-graphes à grille, privilégier la structure carrée ou symétrique.
- Validation utilisateur : *"très satisfait de la forme par rapport à la précédente"*.

#### Points ouverts tranchés en fin de séquence
- **Sécurité/qualité au PoC** : laissée pour le fil transverse propre (non matérialisée dans la phase). Évite la duplication entre phases.
- **L1 (PoC fonctionnels) et L2 (rapport)** : maintenus séparés. Distinction pédagogique : L1 = livrable physique (le matériel marche), L2 = livrable documentaire (la pensée est claire).
- **Protocole dans E1** : fusionné dans "formaliser l'énoncé". L'énoncé sans protocole n'est qu'une intention.
- **E2 ressources matérielles mono-nœud** : maintenu (pas de mini sous-graphe "stock ou achat").

### Flowchart phase 4 — dossier technique

#### Périmètre
- **Plans détaillés exécutables** (schémas élec finaux + routage PCB, plans méca cotés, architecture logicielle détaillée, BOM finale, bons de commande).
- **Achats projet finalisés ici** (confirmé par utilisateur).
- **Structure de branches = retour à élec/méca/info** (cohérence avec phase 2). Argument : on est sur du travail disciplinaire de fond, pas du dérisquage ciblé comme en phase 3.
- **Livrable agrégé multi-validé** : un seul dossier technique, mais en parties indépendamment validables par les profs concernés.

#### Multi-validation à 3 profs (correction utilisateur en cours de session)
Initialement envisagé 4 ou 5 validateurs (élec, méca, info, achats, éco). Correction : à l'école il y a **3 validateurs réels** :
- **Prof élec** (S2e) : valide élec **et** info (le prof élec porte les deux disciplines à l'école)
- **Prof méca** (S2m) : valide méca + fabrication
- **Responsable projet** (S2r) : valide achats + budget consolidé
- **Écoconception** : pas de validateur dédié, vérifiée transversalement par les 3 sur leur périmètre.

Matérialisation : **option 2 retenue (3 cercles parallèles + losange convergent D2)** plutôt que cercle unique. Pédagogiquement crucial de rendre visible le multi-validation, c'est l'enseignement central de cette phase sur les compétences MEO.

#### Décisions structurelles
- **3 décisions séquentielles** : D1 cohérence inter-disciplines (revue interne avant validation externe) → D2 validations disciplinaires obtenues (les 3 profs) → D3 dossier agrégé validé (validation transversale finale).
- **2 livrables séparés** : L1 dossier technique (validation de la pensée) + L2 BOM finalisée + commandes émises (matérialisation de l'engagement). Distinct pédagogiquement et administrativement.
- **Étape E7 "passer commandes" intérieure à la phase 4** (et non en sortie). Rationnel : sans commandes passées, le dossier n'a pas servi. Action concrète qui clôt la phase.
- **Écoconception en étape dédiée (E4)** plutôt qu'intégrée dans la consolidation BOM. C'est ici que l'éco devient **quantifiable** (ACV simplifiée sur BOM réelle vs estimations qualitatives phase 2). Mérite sa case.
- **Rétroactions sortantes** : D1 et D2 vers phase 2 (matrices à revoir si interface fondamentale impossible ou écart budgétaire majeur). Pas de rétroaction phase 1 ici : à ce stade le CdCF est gravé.

### Flowchart phase 5 — intégration et tests

#### Périmètre (option a)
Phase 5 inclut **fabrication + intégration + tests + clôture**. Cohérent avec décision du 19/05.

#### Pyramide de tests à 5 niveaux (cascade linéaire)
Décision utilisateur (vs proposition Claude de pyramide avec diagnostic multi-cible) : **système linéaire avec rétroactions ciblées vers le niveau précédent**.
- **Niveau 0** — validation fabrication (PCB, pièces imprimées, usinages) → retour fabrication si KO
- **Niveau 1** — tests unitaires par fonction → retour banc (test mal posé) OU pièce (défaillance)
- **Niveau 2** — tests d'intégration par fonction composée → retour niveau 1
- **Niveau 3** — tests système → retour niveau 2
- **Niveau 4** — qualification vs CdCF → écart documenté si non, **pas de retour**

#### Décision pédagogique forte : "par fonction" et non "par discipline"
Clarification utilisateur déterminante : **même les tests unitaires sont multi-disciplines**. Exemples donnés : *"faire avancer robot"* = élec + méca + info ; *"faire tourner roue"* = élec + info.

**Définition de la mécatronique qui en découle** : pas de sous-système isolable, tout est interface dès le niveau 1. Conséquence terminologique : on parle de **"par fonction"** plutôt que "par interface" (qui prête à confusion avec "interface" au sens API). Choix de découpage : structure variable selon le niveau de test (par pièce au N0, par fonction du N1 au N2, système global N3-N4).

#### V qui se referme — traçabilité CdCF
La qualification (niveau 4) confronte explicitement aux **fonctions caractérisées du CdCF** (phase 1). C'est le moment où la branche descendante du V est validée par la branche ascendante. **Matérialisation choisie : label clair sur l'étape de qualification** (sans flèche entrante depuis l'extérieur, jugée trop bricolage visuel).

#### Rupture pédagogique : pas de rétroaction sortante
C'est la première phase **sans rétroaction vers les phases amont**. Le calendrier de fin de semestre impose la livraison. Un échec en qualification (D4 non) ne renvoie pas en arrière, il **documente l'écart**. Message pédagogique : on n'est plus en cycle itératif, on est en cycle de production avec échéance immuable. L'évaluation se fait sur la **lucidité de l'analyse des écarts**, pas sur l'atteinte parfaite du CdCF.

#### Sous-graphe APPRO_FAB déséquilibré assumé
Deux branches (réception commandes / fabrication interne), pas trois. Pas d'équivalent info à fabriquer matériellement. **Déséquilibre assumé** plutôt que de bricoler une branche info artificielle.

#### Clôture
- **3 bilans en parallèle** : technique (E7t) / projet (E7p, transverse gestion projet) / écoconception (E7e, transverse, ACV réelle vs estimée phase 4).
- **Tous évalués** dans le rapport final (confirmation utilisateur).
- **REX d'équipe (E8)** : compétence MEO réflexive, distinct des bilans évalués.
- **3 livrables évalués** : L1 prototype qualifié + L2 rapport final + L3 soutenance.

### Statut couverture du cycle en V
**Les 5 phases ont leur flowchart**. Reste à produire la **vue d'ensemble macro** (`flowchart-overview`) qui consolidera les rétroactions inter-phases (D1 phase 2 → phase 1, D5 phase 2 → phase 1, D1 phase 3 → phase 2, D1 phase 3 → phase 1, D1 phase 4 → phase 2, D2 phase 4 → phase 2). C'est la prochaine étape avant de basculer sur les squelettes de fiches-trame.

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes
- **Layout du subgraph BRANCHES (phase 2)** : reporté BACKLOG, problème spécifique à la grille 2×3 rectangulaire. Confirmé par le succès du 3×3 carré en phase 3.
- **Sécurité/qualité non matérialisée dans les phases** : à porter par le flowchart transverse propre quand il sera produit.
- **Cohérence visuelle inter-phases** : phase 3 "par point dur" rompt avec phase 2/4 "par discipline". Acté comme document de travail. À revoir si jamais on publie.

---

## 2026-05-21 — Flowcharts phase 1 et 2 + pipeline Mermaid → SVG

### Création du dossier et structure
- `_drafts/flowcharts/` créé (dossier hors site, document de travail conformément à la décision du 20/05)
- Méthode d'inventaire actée : **B — par phase** (vs brut total ou par typologie). Permet de produire le matériau directement exploitable pour le flowchart de la phase, fait émerger les transverses naturellement.

### Pipeline de rendu Mermaid → SVG
- **Problème déclencheur** : le rendu Mermaid dans Obsidian devient illisible dès qu'un flowchart dépasse la largeur d'écran (pas de scroll horizontal pratique). Bascule sur SVG fichier pour pouvoir zoomer/dézoomer dans un visualiseur d'image.
- Choix : **install `@mermaid-js/mermaid-cli` en devDependency + script Node** qui parcourt `_drafts/flowcharts/`, extrait les blocs Mermaid des `.md`, génère un SVG par bloc dans le même dossier.
- Création de `scripts/render-flowcharts.mjs` + ajout du script `flowcharts` dans `package.json`.
- Cache mtime : SVG sauté si plus récent que `.md`. `npm run flowcharts -- --force` pour tout regen.
- Convention de nommage : 1 bloc Mermaid dans `foo.md` → `foo.svg`. N blocs → `foo-1.svg`, `foo-2.svg`, etc.
- Couleur de fond : transparent (`-b transparent`).

### Incident Windows — `spawn EINVAL`
- Premier lancement échoué : `spawn EINVAL` sur les deux fichiers `.md`.
- Cause : depuis Node 20, `child_process.execFile` n'autorise plus l'exécution directe de `.cmd` / `.bat` sans `shell: true`. Le binaire mmdc s'appelle `mmdc.cmd` sur Windows.
- **Résolution** : ajout `{ shell: true }` dans l'appel `execFileAsync`.
- **Leçon méthodo** : sur Windows, tout binaire installé via npm en mode wrapper (`.cmd`) nécessite `shell: true` avec Node ≥ 20. À retenir pour les futurs scripts qui appellent des CLI npm.

### Flowchart phase 1 — spécification technique

#### Inventaire produit
6 étapes (contextualiser → rencontre client + bête à cornes → étude existant → CdCF : formaliser fonctions + caractériser → planifier → rédiger), 4 décisions, 3 synchros, 2 livrables évalués.

#### Décisions structurelles
- **Boucle rencontre client ↔ formalisation bête à cornes** : aller-retour explicite jusqu'à stabilisation (D2). La bête à cornes est **un** outil, pas l'outil.
- **Étude de l'existant simplifiée** : initialement avec losange « solution existante répond directement ? » + bloc « Re-cadrer le projet ». **Supprimé** : en projet étudiant, on ne fait pas de recherche fondamentale, l'existant est presque toujours disponible. L'étude vise à identifier les briques réutilisables et le point de départ simple, pas à décider de pivoter.
- **Subgraph CdCF englobant** : formalisation des fonctions (FP/FC/FS), caractérisation et losange de validation regroupés dans un subgraph titré « Cahier des Charges Fonctionnel ». Matérialise visuellement que les deux étapes constituent un même livrable.
- **D-CdCF** : reformulé en **« CdCF défendable en soutenance ? »** (vs « caractérisation complète ? »). Plus projetant pédagogiquement, embarque implicitement couverture des fonctions + SMART des critères.
- **Pas de constitution d'équipe en tête de phase** : décision actée. Ne pas inciter à la répartition des rôles (les élèves doivent rester polyvalents).
- **Transverses intégrées au flowchart de phase** : nœud GP « jalons + risques » après le contexte, nœud ESE « première lecture environnementale » avant la rédaction du CdCF. Stratégie **β + γ** actée (transverses injectées aux points d'ancrage clés ET détaillées dans leurs propres flowcharts à venir).

#### Sémantique visuelle posée
- **Flèches pleines** : flux normal + boucles d'itération normales (« non, à retravailler »)
- **Flèches pointillées** : vraies rétroactions (remise en cause profonde d'un travail validé)

#### Validation
Rendu propre, subgraph CdCF lisible, validation utilisateur sans modification.

### Flowchart phase 2 — concept

#### Cadrage
- **Périmètre** : architecture + pré-dimensionnement. Les composants définitifs viendront en phase 4. « Solutions retenues » ≠ « composants finaux ».
- **Découpage disciplinaire visible** : 3 branches élec/méca/info dans le flowchart. Pédagogiquement crucial pour enseigner les **conflits inter-disciplines** (l'optimum local de chaque discipline n'est pas nécessairement compatible avec celui des autres).
- **Matrice de décision en phase 2** : une matrice par sous-système, critère écoconception intégré dans la matrice (pas traité à part). C'est le choix pédagogique fort : l'éco est embarqué dans la décision, pas plaqué à la fin.
- **FAST** : étape commune avant l'éclatement disciplinaire (vs un FAST par discipline).

#### Décisions structurelles
- **Synchro inter-disciplines (S2) + losange D-compat** : moment pédagogique central. Après les matrices, point de vérification que les solutions retenues sont compatibles entre elles. Si non, retour aux matrices avec contraintes mises à jour.
- **Pré-dimensionnement post-architecture** : par discipline (3 nœuds parallèles), décision D-predim à la sortie.
- **Rétroactions sortantes vers phase 1** : D1 (décomposition révélant un trou dans le CdCF) et D5 (remise en cause profonde à la présentation). Matérialisées par un nœud trapézoïde `FB_PHASE1` avec classe de style dédiée (`feedback`, fond ambré pointillé).

#### Renommages débattus
- **« Schéma bloc fonctionnel » → « Décomposition fonctionnelle du système »** : terme neutre disciplinairement (vs marqué élec/automatique). La fiche-tuto `schema-bloc-fonctionnel` reste **un** outil mobilisable, pas le seul. SADT/IDEF0 évoqués comme alternatives, fiches à créer plus tard.

#### Layout — difficultés persistantes
- **Bascule TD → LR** à mi-session : suite à la découverte que le flowchart dépasse la largeur d'écran Obsidian. Le SVG permet maintenant de s'étaler librement.
- **Convention `IO_LEFT`** : subgraph invisible (titre vide, `fill:none, stroke:none`) englobant `START` et `FB_PHASE1` en TB. Permet d'ancrer les deux nœuds en colonne gauche du graphe LR, START en haut, FB_PHASE1 en bas. À réutiliser sur les autres phases.
- **Subgraph PREDIM résolu** : 3 nœuds plats en TB — layout impeccable.
- **Subgraph BRANCHES non résolu** : malgré plusieurs stratégies (sous-subgraphs LR/TB, sous-subgraphs aplatis, liens invisibles `~~~` pour forcer la grille 2×3), Mermaid LR + dagre n'arrive pas à produire un layout propre des 6 nœuds (E3e/E4e/E3m/E4m/E3i/E4i). Tentative ELK (`%%{init: {'flowchart': {'defaultRenderer': 'elk'}} }%%`) abandonnée pour ne pas bloquer la session. **Reporté dans BACKLOG**. SVG actuel laid mais accepté comme « assez bon » pour passer à la phase suivante.

#### Conventions visuelles ajoutées
- **3 couleurs disciplines (ad-hoc)** : élec `#D6E8F5` / stroke `#3B6EA8` (bleu clair), méca `#F5E8D6` / stroke `#A87B3B` (ocre clair), info `#D6F5E0` / stroke `#3BA85A` (vert clair). Trois classDef dédiées : `elec`, `meca`, `info`.
- **Suffixe disciplinaire en bout de label** : `(élec)` / `(méca)` / `(info)`. À acter comme convention après plusieurs flowcharts produits.
- **À réutiliser** sur toutes les phases avec éclatement disciplinaire (concept, PoC, dossier technique, intégration probable). Harmonisation avec palette callouts v1 reportée dans BACKLOG.

### Cadrage phase 3 — preuve de concept (amorcé, reprise en nouvelle session)
Inventaire complet posé en fin de session :
- 8 étapes (énoncé PoC, choix composants représentatifs, acquisition matériel, banc de test, réalisation, mesure, analyse, rapport)
- 5 décisions, 4 synchros, 2 livrables évalués
- Transverses : GP (mise à jour risques), ESE (éco partielle = premières mesures réelles)
- Rétroactions sortantes : vers phase 2 ou phase 1 si concept intenable

**3 questions ouvertes** à trancher en début de prochaine session :
1. Structure des branches de réalisation (3 disciplines ? unifié ? « par point dur » ?)
2. Acquisition matériel comme étape distincte avec décision sortante ?
3. Nombre de sorties du losange D-PoC (2 ou 3 ?)

**Stratégie d'enchaînement** : phase 3 en nouvelle session pour fraîcheur cognitive (session du 21/05 déjà dense entre 2 flowcharts et la mise en place du pipeline SVG).

### Décisions reportées (toujours en attente)
- Toutes celles de la session précédente
- **Layout du subgraph BRANCHES (phase 2)** : voir BACKLOG. Pistes ELK / abandon de la grille / outil hors Mermaid.
- **Palette couleurs disciplines** : harmonisation avec callouts v1 — voir BACKLOG.

---

## 2026-05-20 (suite) — Fiche-notion `bete-a-cornes` + stratégie d'enchaînement

### Production de la fiche
- `content/fiches/proj/bete-a-cornes.md` rédigée intégralement (8 sections, popover de 3 phrases, exemples triptyque bon/moyen/mauvais)
- Cas support : **bras robotique pédagogique 6 axes** pour écoles d'ingénieurs (situation projet réaliste pour le public visé, alternative défendue à la couveuse)
- Format des exemples : callouts `[!failure]` / `[!warning]` / `[!example]` avec **image SVG dédiée par cas** (vs listes à puces). Bloc "Coût réel de cette erreur" ajouté sur le mauvais cas (anecdote vécue : choix prématuré de servomoteurs, bascule sur steppers après 2 mois)

### Production des SVG
- 4 SVG produits dans `content/ressources/img/` :
  - `bete-a-cornes-generique.svg` — schéma canonique (2 ovales en haut formant les "cornes", rectangle produit/service au centre, flèche vers rectangle FONCTION en bas)
  - `bete-a-cornes-bras-mauvais.svg`
  - `bete-a-cornes-bras-moyen.svg`
  - `bete-a-cornes-bras-bon.svg`
- Style cohérent avec `cycle-v-projet.svg` : palette amber (#BA7517), gestion native du mode sombre via `@media (prefers-color-scheme: dark)`, marker flèche réutilisé
- **Itération sur le générique** : première version partait du modèle "système central avec 3 branches" ; refait sur le modèle canonique "cornes vers le haut + flèche vers le bas" après référence visuelle apportée par l'utilisateur. **Retenir** : pour les outils canoniques (bête à cornes, pieuvre, FAST), partir d'une référence visuelle de la littérature plutôt que d'inventer une variante — les étudiants doivent reconnaître l'outil dans d'autres sources.

### Retour dans `specification-technique`
- Placeholder image étape 1 remplacé par l'image SVG réelle (edit ciblé via `edit_file`)

### Incident Dark Reader (à retenir)
- Faux bug de rendu : fond brun foncé `#221818` observé en mode clair sur les pages contenant des callouts
- Cause : extension navigateur **Dark Reader** active sur localhost, qui repère les `<blockquote class="callout">` et leur applique un fond sombre par-dessus le CSS Quartz
- Diagnostic : confirmé par traces `data-darkreader-inline-stroke` dans le HTML rendu
- Résolution : désactiver Dark Reader sur localhost et sur le site déployé (Quartz a son propre mode sombre natif, Dark Reader fait doublon et altère l'aperçu)
- **Leçon méthodo** : avant de chercher un bug CSS, vérifier les extensions navigateur actives (Dark Reader, Stylus, uBlock Origin, etc.).

### Stratégie d'enchaînement actée (deux temps)

**Première décision** :
- Ordre de production : fiches-trame (cycle en V dans l'ordre) → fiches-tuto associées → fiches-notion → glossaire
- Liens rouges pendant la rédaction des trames : assumés, tracking dans BACKLOG.md (option (a)). Pas de stubs systématiques.
- Profondeur : finaliser chaque trame avant la suivante (vs MVP bout en bout)

**Révision spontanée par l'utilisateur** : avant de plonger sur l'approfondissement de `specification-technique`, **fabriquer la trame complète bout en bout** pour avoir un guide cohérent avec les compétences à évaluer.

**Stratégie finale** :
1. Squelettes des 5 trames + 3 fils transverses (front matter complet + posture + objectif + démarche en titres d'étapes seulement + livrable principal + voir aussi). `draft: false` pour navigabilité.
2. Cartographie systématique des 107 AA → phases/transverses, identification des trous.
3. Validation cohérence d'ensemble (relecture bout en bout, ajustements de périmètre).
4. Approfondissement trame par trame dans l'ordre du V, en commençant par `specification-technique` étapes 2 à 6.

**Rationnel** : permet de positionner correctement chaque AA et chaque fil transverse avant de creuser, évite les retours en arrière sur les décisions de périmètre inter-phases.

### 2ᵉ révision (fin de session) : flowchart macroscopique avant squelettisation

Avant même de commencer la squelettisation, l'utilisateur propose une **étape zéro** : produire un flowchart macroscopique du parcours projet qui montre **les chemins réels** (pas seulement la séquence des phases).

**Rationnel utilisateur** : *« Le cycle en V n'a qu'une porte d'entrée (le CdCF), mais dès le PoC ou les choix de solutions, des embranchements se créent (tutos méca/élec/info), des boucles de rétroaction pour validation, des attentes inter-équipiers. »*

**Pourquoi c'est meilleur que la squelettisation séquentielle** :
- Honnêteté pédagogique : un projet mécatronique est un graphe, pas une ligne droite
- Inventaire structurel des fiches à produire (chaque nœud du graphe = fiche potentielle)
- Rend visibles les points de synchronisation inter-équipiers (compétence MEO concrète)
- Le flowchart devient outil d'auto-positionnement pour l'étudiant : *« où suis-je dans mon projet ? »*

**Stratégie définitive (au 20/05 fin)** :
1. **Étape zéro** : flowchart macroscopique du parcours projet (prochaine session)
2. Squelettes des trames + transverses (la liste sera potentiellement révisée à partir du flowchart)
3. Cartographie AA
4. Validation cohérence
5. Approfondissement trame par trame

**Éléments à trancher en début de prochaine session** — **TOUS TRANCHÉS EN FIN DE SESSION DU 20/05** :
- Granularité : **N3** (décisions + synchros visibles, zoom N4 local si besoin)
- Format : **Mermaid**, organisé en **5 flowcharts détaillés + 1 vue d'ensemble macro**. Les rétroactions inter-phases (PoC échec → retour spec/concept, qualif échec → retour dossier) seront portées par la vue d'ensemble macro, pas diluées dans les flowcharts détaillés.
- Sémantique visuelle validée : rectangles=étapes, losanges=décisions, cercles=synchros inter-équipiers, doubles cercles=livrables évalués, flèches pleines=flux normal, flèches pointillées=rétroactions, fond couleur=discipline (aligné palette callouts v1).
- Position : **hors site pour l'instant**, dans `_drafts/flowcharts/`. Mention explicite : « document de travail, on verra selon la qualité du résultat si on l'intègre au hub ». Choix d'un meilleur outil que Mermaid différé à d'éventuelle publication.
- Périmètre disciplinaire : **inflexion actée**. Initialement le tutoriel devait servir d'**interface** vers les cours collègues (méca, fabrication) sans refaire leur travail. Décision révisée : on **modélise complètement** la structure méca/fabrication dans le flowchart et on crée des **fiches vides** correspondantes. Rationnel utilisateur : *« avec un peu de chance j'arriverai à embarquer un collègue dans ce projet pour les compléter »*. C'est un pari raisonnable : la coquille existe, le collègue n'a plus qu'à remplir. Si le pari échoue, la coquille reste comme stub renvoyant vers le cours du collègue — statu quo de la posture initiale, sans perte.
- Périmètre prochaine session : **inventaire + construction des 6 flowcharts en Mermaid**. Le cadrage est déjà acquis en fin de cette session.

### Décisions reportées (toujours en attente)
- Toutes celles de la session précédente
- **Politique extensions navigateur pour validation visuelle** : recommander la désactivation de Dark Reader (et similaires) sur le domaine du site

---

## 2026-05-20 — Fiche-trame `specification-technique` (étape 1)

### Structure type d'une fiche-trame actée
Première fiche-trame du projet. Structure décidée par construction puis éprouvée sur le cas réel de la phase 1 :

- **Front matter spécifique** : `type: trame`, `phase: N`, `phases: [nom]`, en plus des champs standards.
- **7 sections de corps** :
  1. Définition popover (1-3 phrases en tête)
  2. **Posture attendue** — italique étudiant court, plante l'ambiance
  3. **Objectif de la phase** — la promesse de fin (3-5 lignes)
  4. **Démarche** — étapes ordonnées, callouts `[!livrable]` placés en fin d'étape
  5. **Pièges fréquents**
  6. **Pendant cette phase, côté équipe** — fusion interfaces métiers + fils transverses
  7. **Voir aussi**

### Décisions de structure
- **Fusion "interfaces métiers" + "fils transverses"** dans une seule section "Pendant cette phase, côté équipe". Rationnel : même registre cognitif pour l'étudiant (attention aux dépendances), et les fiches-trame ne portent pas l'évaluation (c'est le corps enseignant qui évalue, les fiches sont une aide à la création).
- **Pas de section "critères de fin de phase"** : les livrables au fil de la démarche jouent ce rôle.
- **Pas de "position dans le cycle"** : redondant avec le hub.
- **Pas de "durée estimée"** : effet repoussoir si la durée dépasse une heure de lecture.
- **Un callout `[!livrable]` groupé par étape** : préféré à un callout par sous-étape (dilution). Liste à puces à l'intérieur.

### Découpage de la phase 1 en 6 étapes
1. Analyser le besoin (contextualiser → bête à cornes → valider)
2. Étudier l'existant (état de l'art technique chiffré, comparaison N×M)
3. Formaliser les fonctions (pieuvre NF X50-151)
4. Caractériser les fonctions (étape **centrale**, exemples bon/moyen/mauvais)
5. Planifier le projet (WBS + rétroplanning depuis la soutenance)
6. Rédiger le CdCF (agrégation, intègre la démarche environnementale)

### Cadrage méthodologique
- **NF X50-151 (AFNOR)** retenue, avec mention explicite "norme française, payante".
- **Ouverture sur autres modèles** (INCOSE, ingénierie système, user stories anglo-saxonnes) prévue en fin de fiche pour les étudiants partant à l'étranger.
- **FAST reporté en phase 2 (concept)** : prématuré en phase 1 où le concept n'est pas encore choisi.
- **SMART non détaillé dans la fiche-trame** : sera traité dans une fiche-tuto dédiée `definir-un-objectif-smart` (MEO).
- **Grille d'évaluation CdCF transmise par l'utilisateur** : consultée pour calibrer la couverture, **mais pas mise en référence dans la fiche** (la grille passera bientôt à une évaluation par compétences, donc évolutive).

### Décisions éditoriales
- **Cas particulier "projet école sans client réel"** : encart dédié dans l'étape 1. Deux postures honnêtes proposées — étudiant-client-de-lui-même (acquisition de compétences ciblées, défendable en école mais pas en pro), ou client fictif crédible.
- **Exemples bon/moyen/mauvais** : approche pédagogique systématique pour les éléments les plus structurants (caractérisation, bête à cornes).
- **AFNOR NF X50-151** : pas de lien externe inline. Fiche-stub `afnor-nfx50-151.md` créée avec lien Wikipédia + mention payante, sert de popover propre.
- **Lien Wikipédia AFNOR** : article "Analyse fonctionnelle (conception)" — ressource pédagogique francophone plutôt que page d'achat AFNOR.
- **Traces écrites de validation client** : abordées ici mais méritent fiches-tuto dédiées à créer (`relation-client`, `archivage-projet`).

### Production de la fiche
- `content/fiches/proj/specification-technique.md` créée. **Étape 1 entièrement rédigée**, étapes 2-6 en placeholders explicites (titres + 2-3 lignes de cadrage).
- 4 callouts dans l'étape 1 : `[!warning]` (verrous), `[!example]` (couveuse), `[!tip]` (bête à cornes triviale), `[!livrable]` (groupé fin d'étape).
- Front matter avec `type: trame` et `phases: [specification]` — **première vraie utilisation** des champs actés la veille.
- Popovers posés : `mecatronique`, `ecoconception`, `relation-client`, `bete-a-cornes`, `pcb`, `ppm`, `pid` (existant), `cahier-des-charges-fonctionnel`, `afnor-nfx50-151`, `concept`, `archivage-projet`.

### Stub AFNOR
- `content/fiches/proj/afnor-nfx50-151.md` créée. Trois lignes de définition + callout `[!info]` avec lien Wikipédia et mention que la norme officielle est payante. Taggée `stub` pour la distinguer des vraies fiches-notion.

### À retenir méthode
- **Ne pas écraser le travail de l'utilisateur** : bascule de `write_file` (écrase tout) à `edit_file` (patches ciblés) actée en cours de session. Discipline : relire le fichier avant toute modification.

### Décisions reportées (toujours en attente)
- Toutes celles de la session précédente, plus :
- **Glossaire vs fiches courtes pour acronymes** : `ppm` ajouté comme prospect pour le glossaire (vs `pcb` qui aura sa fiche-tuto dédiée). À trancher quand la décision globale sera prise.
- **Template fiche-trame formel** : à extraire **après** une 2ème fiche-trame rédigée (probablement `preuve-de-concept`).

---

## 2026-05-19 (suite 2) — Trame projet : cycle en V

### Cadrage de la trame
- **Décision structurante : cycle en V à 5 phases** (vs séquence linéaire ou liste de livrables) :
  1. **Spécification technique** (besoin, état de l'art, cibles, intègre l'analyse du besoin)
  2. **Concept** (schémas, pré-dimensionnement)
  3. **Preuve de concept** (dérisquage des points durs)
  4. **Dossier technique** (plans, élec, soft, BOM intégré)
  5. **Intégration et tests** (prototype, qualif, clôture/REX intégrés)
- **PoC remonté avant le dossier technique** : choix pédagogiquement et techniquement plus sain que la version école initiale (PoC après dossier). Enseigne le **dérisquage amont** comme compétence ingénieur.
- **Fils transverses** (renommés "En parallèle de toutes les phases" pour clarté étudiant) : gestion de projet, écoconception, sécurité/qualité. Évalués transversalement, pas dans une phase dédiée.
- **Itératif différé** : la trame v1 est affichée en linéaire pour structurer la rédaction. Les boucles de retour seront ajoutées en v2.
- **Vocabulaire** : français pour tout le tutoriel. Version anglaise éventuelle hors scope (très long terme).

### Typologie de fiches formalisée
Trois types de fiches distincts, à indiquer en front matter (`type:` ou via les `tags`) :
- **Trame** — phases du cycle en V. Dense, détaillée. Livrable de phase évalué.
- **Tuto** — mise en œuvre d'un outil ou méthode (IDE, GPIO, PID numérique, etc.). Souvent évalué via livrable concret.
- **Notion** — rappels courts (tension, résistance, couple, force) faisant le pont avec d'autres cours. Non évaluée chez Tim.

**Statut `schema-bloc-fonctionnel`** : reclassée en **tuto** (méthode produisant un livrable évalué), pas en notion. Reste dans `fiches/eee/`, juste son `type:` change le moment venu.

### Arborescence : domaine + champ `phases:`
- **Décision actée** : on garde l'arborescence physique par domaine (cohérence référentiel, agréable enseignant) et on ajoute un champ `phases:` en front matter listant les phases où la fiche est mobilisée. L'étudiant aura deux entrées dans le site (par parcours, par domaine).
- Première utilisation : `hub/index.md` qui liste les 5 phases dans son front matter.
- À documenter dans les futurs templates de fiches.

### Production de la fiche hub
- Fiche **fusionnée dans `content/hub/index.md`** (l'ancien index par domaine est devenu le hub principal du site, avec une section "Entrée par domaine" qui récupère les liens d'origine).
- Ancien fichier `content/hub/parcours-projet.md` créé en cours de session puis supprimé après la fusion.
- Format spécifique fiche-hub (pas le template "1 notion = 1 fiche") : définition popover, schéma SVG, sommaire numéroté à ancres, une section par phase, fils transverses, typologie des fiches, entrée par domaine. **Pas de section "Voir aussi"** sur les fiches-hub (la fiche EST une page de liens).

### Schéma SVG du cycle en V
- **Décision politique d'images actée** : `content/ressources/img/` adopté pour toutes les images du site.
- Schéma `content/ressources/img/cycle-v-projet.svg` créé : V à 5 phases avec correspondances horizontales étiquetées ("validée par", "guide", "éclaire la conception détaillée") et bande "En parallèle" en bas.
- Couleurs : Purple (branche descendante 1-2), Amber (PoC, pivot), Teal (branche ascendante 4-5), Gray (fils transverses).
- Gestion native du mode sombre via `@media (prefers-color-scheme: dark)` dans le SVG.
- **Tentative initiale en SVG inline dans le markdown a échoué sous Quartz** (bloc vide). Bascule sur fichier externe — confirme la stratégie de stockage séparé.

### Mermaid abandonné dans la fiche hub
- Le flowchart Mermaid linéaire des 5 phases (sous le V) était redondant avec le SVG du V.
- **Remplacé par un sommaire textuel numéroté à liens-ancres** (`#1-spécification-technique`, etc.). Plus léger, plus lisible, sert de table des matières.
- Mermaid reste utilisable ailleurs sur le site (la fiche pilote `schema-bloc-fonctionnel` continue de l'utiliser pour le schéma vertical).

### Palette de callouts harmonisée
- **5 callouts natifs restylés** dans `quartz/styles/custom.scss` avec une palette alignée sur le SVG du V :
  - `[!question]` → Blue (informatif neutre)
  - `[!info]` / `[!note]` → Gray (complément discret)
  - `[!tip]` → Teal (astuce pratique)
  - `[!warning]` → Amber (piège fréquent)
  - `[!danger]` / `[!failure]` / `[!bug]` → Red (sécurité, risque réel)
  - `[!example]` → Purple light (exemple, démo)
- **2 callouts custom conservés** : `[!terrain]` (orange brûlé, aparté projet), `[!livrable]` (purple foncé, livrable évalué).
- Tous gèrent le mode sombre via `[saved-theme="dark"]`.

### Fiche de doc des callouts
- Créée à `content/_templates/callouts.md` : panorama de tous les callouts avec sémantique d'usage, exemples markdown et exemples rendus.
- **Règle générale** documentée : un callout n'est pas un effet de mise en page. Viser 0 à 3 callouts par fiche sauf cas justifié (fiche-trame avec un `[!livrable]` par phase). En abuser dilue leur force visuelle.
- **Usage strict de `[!livrable]`** : à utiliser uniquement pour les livrables qui correspondent à une compétence évaluée. À garder en tête lors de la rédaction des fiches.

### Décisions actées en cours de session
- **Trame projet** : cycle en V à 5 phases (vs cascade linéaire ou cycle en V école strict)
- **Typologie** : 3 types de fiches (trame, tuto, notion) déclarés en front matter
- **Arborescence** : par domaine + champ `phases:` pour double entrée parcours/domaine
- **Politique d'images** : `content/ressources/img/` pour tout
- **Hub principal** : `content/hub/index.md` (fusion), pas de fiche `parcours-projet.md` séparée
- **SVG hors markdown** : toujours en fichier externe (l'inline ne passe pas sous Quartz)
- **Vocabulaire** : 100 % français
- **Palette callouts v1** : 8 callouts alignés sur le V, première itération à raffiner avec l'usage

### Décisions reportées (toujours en attente)
- **Convention de tags AA** : session dédiée à programmer
- **Stratégie fiches MME/ESE** : pages courtes pointant vers collègues, ou rien ?
- **Glossaire vs fiches courtes** pour acronymes : à voir à l'usage
- **Charte couleur / identité visuelle complète** : nouvelle décision en attente, à traiter quand on aura plus de matière
- **Pliage des callouts** (`[!example]-` replié par défaut ?) : à trancher après quelques fiches rédigées
- **Sort du flowchart Mermaid commenté** dans hub : finalement supprimé, sommaire textuel suffit

---

## 2026-05-19 (suite) — Installation PC perso

### Outils installés et vérifiés
- Git for Windows : déjà présent (le `git clone` initial avait fonctionné avant début de session)
- Node.js v22 LTS : déjà présent
- Obsidian : installé + vault ouvert sur `C:\Users\turko\Documents\TheSkillCodex`

### Configuration Git PC perso
- `user.name` = `TimTurko`
- `user.email` = `turko.tim@gmail.com`
- Remote `origin` correctement branché en fetch + push sur `https://github.com/TimTurko/TheSkillCodex.git`
- Branche `main` synchro avec `origin/main`

### Obsidian Git
- Plugin auto-rapatrié via `.obsidian/` versionné — **validation du choix de versionner la config Obsidian** : zero reconfiguration manuelle sur le 2ème poste, gain de temps confirmé
- Cycle test pull → édit → commit-and-sync → vérif GitHub : OK

### Note ajoutée a posteriori (session du 2026-05-19 suite 2)
- `npm install` est obligatoire **une fois par poste** pour faire tourner `npx quartz build --serve` en local. Oublié à l'installation PC perso, identifié au moment du premier rendu local de la fiche hub.

### Bilan
- Workflow multi-poste opérationnel : PC pro + PC perso peuvent maintenant alterner sans friction
- Smartphone reste en consultation seule (décision précédente confirmée)
- Discipline Git à maintenir : pull à l'arrivée, push au départ sur chaque poste

---

## 2026-05-19 — Mise en place initiale

### Infrastructure
- Création dépôt GitHub `TimTurko/TheSkillCodex` (public)
- Git configuré sur PC pro
- PAT créé avec scope minimal (repo + workflows)
- Obsidian installé sur PC pro + plugin Obsidian Git
- Convention de discipline Git : pull à l'arrivée, push au départ

### Quartz
- Quartz v4 installé dans le dépôt (un seul dépôt, pas de submodule)
- Configuration personnalisée : titre "TheSkillCodex", locale fr-FR, baseUrl `timturko.github.io/TheSkillCodex`
- Pas d'analytique (choix de simplicité au démarrage)
- Workflow GitHub Actions `deploy.yml` créé sur branche `main`
- GitHub Pages activé avec source "GitHub Actions"
- **Site déployé** : https://timturko.github.io/TheSkillCodex/

### Structure de contenu
- Arborescence `content/` créée :
  - `hub/` (parcours pédagogique)
  - `fiches/{eee, mia, meo, proj, mme, ese}/` (6 domaines)
  - `ressources/` (médias, datasheets)
  - `_templates/` (modèles de fiches)
- 9 fichiers `index.md` créés, un par dossier
- `content/index.md` racine (page d'accueil du site)

### Conventions éditoriales fixées
- **Noms de fichiers** : kebab-case (`cahier-des-charges-fonctionnel.md`)
- **Front matter YAML** : title, tags, prerequis, aa, draft
- **Pas de H1 dans le corps** : Quartz génère le titre depuis le front matter
- **Définition popover** : premier paragraphe de la fiche, autoportant, 1-3 phrases
- **Structure de fiche** : sections suggérées en commentaires HTML, l'auteur garde ce qui sert
- **Sections type** : `À quoi ça sert ?` → `Comment le réaliser ?` → `Exemple` → `Cas particuliers` → `Pièges` → `Aller plus loin` → `Voir aussi` (toutes optionnelles sauf "Voir aussi")
- **Politique du gras** : uniquement sur concepts-clé en 1ère occurrence. Exception tolérée : gras "structurel" (têtes de paragraphes-pièges, mots de scan dans listes à puces)
- **Liens popovers** : approche A — liens directs `[[notion]]`, le rouge sert de TODO list
- **Apartés étudiants** : intégrés dans le texte en *italique* (pas de callout dédié)
- **Justification du texte** : justifié sur écran large avec césure auto, drapeau sur smartphone (<600px)

### Personnalisations CSS (`quartz/styles/custom.scss`)
- Justification des paragraphes d'article + césure auto (désactivée sous 600px)
- Centrage horizontal des diagrammes Mermaid
- Callout custom `[!terrain]` couleur orange brûlé (réservé pour usages futurs type avertissement, note méthodo)

### Fichiers de suivi de projet
- `TODO.md` — court terme, actionnable
- `BACKLOG.md` — long terme, idées en réserve, fiches à rédiger par domaine
- `JOURNAL.md` — mémoire datée (ce fichier)
- Méthode : mise à jour à la fin de chaque session

### Fiche pilote
- `fiches/eee/schema-bloc-fonctionnel.md` créée et raffinée en plusieurs itérations
- Validation : template, liens internes, rendu Mermaid (vertical, centré), conventions de gras minimal
- 10 popovers en liens directs (capteur, actionneur, effecteur, controleur, microcontroleur, frontiere-systeme, boucle-ouverte-boucle-fermee, pwm, asservissement, pid, cahier-des-charges-fonctionnel)
- 2 apartés étudiants intégrés en italique

### Décisions reportées
- **Convention de tags AA** : session dédiée à programmer (pas de décision rapide)
- **Politique de stockage des images** : à définir
- **Glossaire séparé vs fiches courtes** pour acronymes : à voir à l'usage
- **Stratégie fiches MME/ESE** : pages pointant vers collègues, ou rien du tout ?

### Référentiel
- Analyse de `Compétences.xlsx` : 107 dénominations regroupées en 27 codes-AA uniques, 6 domaines
- Note : `AA-PROJ-C03-CFE3-01` mélange MIA (objet connecté) et MME (fabrication) — anomalie référentiel à signaler à terme

### Décisions calées en fin de session
- **Smartphone en consultation seule** : pas d'install Obsidian mobile, le smartphone consulte directement le site déployé. Édition uniquement sur PC pro et PC perso. Cohérent avec le principe "écran vertical court = lecture, pas écriture". Évite aussi les conflits Git à 3 appareils.
- **Démarrage de session automatisé** : ajout aux instructions du projet Claude.ai des consignes pour lire JOURNAL.md et TODO.md au démarrage de chaque conversation, et pour proposer une mise à jour à la fin de session.
- **OS PC perso** : Windows 11 (cohérent avec PC pro). Le guide d'installation initial est directement réutilisable.

---
