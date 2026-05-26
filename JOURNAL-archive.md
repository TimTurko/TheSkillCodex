# JOURNAL — Archive (sessions du 2026-05-19 au 2026-05-24)

> Archive des sessions antérieures au 25/05/2026, déplacées hors du JOURNAL
> principal lors des nettoyages documentaires successifs : 25/05 suite 3
> pour les sessions 19→21/05 (mise en place initiale, flowcharts de phase),
> puis 25/05 suite 7 pour les sessions 22→24/05 (squelettes du V, charte
> callouts v2, rédaction complète de `specification-technique.md`).
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
>
> Le JOURNAL principal reprend à partir du 25/05.

---

<!-- DEBUT DES SESSIONS 22/05 → 24/05 — ARCHIVEES LE 25/05 SUITE 7 -->

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

<!-- ARCHIVE_INSERT_MARKER -->
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
