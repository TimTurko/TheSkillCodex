# JOURNAL — TheSkillCodex

> Mémoire du projet. Ce qui a été fait, daté, avec les décisions prises et leur justification.
> Nouvelles entrées en HAUT (ordre antichronologique).
> Sessions antichronologiques antérieures au 22/05/2026 archivées dans `JOURNAL-archive.md`
> (mise en place initiale du dépôt, installation PC perso, trame projet cycle
> en V, flowcharts de phase). Session **24/05 (suite 2)** également migrée vers
> l'archive (25/05 suite 7).

> ⚠️ **Archivage 22/05 → 24/05 partiellement réalisé** — sessions encore
> présentes ici. Finalisation via Obsidian (couper depuis `## 2026-05-24 (suite)`
> jusqu'à la fin de la session `22/05`, coller dans `JOURNAL-archive.md` juste
> avant `## 2026-05-21 (suite 2)`). Voir TODO et conventions.md § 7 — leçon
> méthodo seuil pratique MCP write_file/edit_file ~30 ko payload.

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

## 2026-05-25 (suite 8) — Dossier technique : approfondissement complet + leçon méthodo MCP seuil 30 ko

### Périmètre de session
Approfondissement complet de `dossier-technique.md` (phase 4 du V) sur session de démarrage PC perso. Tâche annexe initiale (archivage JOURNAL 22-24/05) résolue partiellement via MCP (résorption duplication 24/05 suite 2) + report en finalisation manuelle pour le reste. Surprise structurante : **étape 3 trouvée pré-rédigée** dans le fichier au moment d'attaquer la rédaction de fond — hypothèse plus probable : autre instance Claude Desktop lancée en parallèle (brief utilisateur multi-appareil §2). Cohérence vérifiée et préservée.

### Cadrage en début de session — 5 questions tranchées en bloc
1. **Fil rouge local** : aligner sur PoC final (articulation **usinée alu 6061** suite à marge négative en PoC), pas l'ajustement local PLA 60→80 % du squelette. Cohérence inter-fiches PoC ↔ dossier-technique recherchée. Refonte des 5 `[!example]`.
2. **Étape pivot = étape 4** (multi-validation à 3 interlocuteurs). Rythme H4 : 2/2/3/3/2 (étape 5 = cas inédit sortie matérielle, ni clôture documentaire ni étape économe).
3. **Convention 10 (matrice incarnée) — épreuve 3/3** : 4 contextes ciblés (ajustements PoC→dossier étape 1 / BOM matricielle étape 3 / 3 validateurs matriciels étape 4 / structure 3 bons commande étape 5).
4. **Convention 13 (relire amont) — 1ʳᵉ épreuve formelle** : passe rapide sur Posture + Objectif + Conclusion avant chaque section avale.
5. **Découpage** : session complète calque PoC suite 7, **niveau A en autonomie accordé par l'utilisateur**.

**Info ajoutée par l'utilisateur en cours** : les commandes doivent être réalisées sur une liste de **fournisseurs partenaires** (catalogue restreint, pas de libre choix marché). Intégrée comme contrainte structurante en étapes 3 et 5.

### Archivage JOURNAL 22-24/05 — résolu partiellement
- Tentative `write_file` ~50 ko payload pour reconstruire JOURNAL : **échec silencieux** (taille fichier inchangée, date modification inchangée). 2ᵉ occurrence du symptôme après 25/05 suite 3.
- Décision : abandon de l'approche massive. Action MCP minimale + procédure manuelle pour le reste.
- **Action MCP** : suppression session 24/05 suite 2 du JOURNAL (résorption duplication avec archive). JOURNAL passé de 144 → 135 ko (−8,8 ko). Préambule patché pour pointer vers la finalisation manuelle.
- **Action documentaire** : ajout au TODO d'une tâche *Finaliser archivage 22-24/05* en *Manipulations manuelles* (procédure Obsidian détaillée), nouvelle convention 14 capitalisée dans `conventions.md` § 7.

### Convention 14 acquise — Seuil pratique MCP write_file/edit_file ≈ 30 ko payload
Toute opération MCP `write_file` ou `edit_file` avec payload > 30 ko a une probabilité non négligeable d'échouer silencieusement (sans message d'erreur). Symptôme : tool call qui semble réussir mais `get_file_info` montre fichier inchangé. **Discipline acquise** : (a) `get_file_info` systématique après tout write/edit lourd, (b) opérations massives en édition manuelle Obsidian + Git ou script Node CLI hors MCP.

### Phase 1 — Alignement v2.1 du squelette (11 patches batch)
5× `[!example] Sur le bras 3 axes` → `Exemple : projet bras 3 axes` (désambiguïsation par première ligne du corps), 5× `[!livrable] Livrable de l'étape N` → `Livrable N/5 — Dossier technique` (et `Livrables 3/5` pluriel pour étape 3), 1× `[!warning] Trois interlocuteurs distincts, trois disponibilités` → titre fixe `Attention` + phrase-clé en gras. Diff propre.

### Phase 2 — Étape 1 *Intégrer les retours de la preuve de concept* rédigée
2 paragraphes intro (pont depuis PoC avec 3 issues nominales, anti-pattern « rouvrir CAO directement »), 2 H4 économes :
- H4-1 « Du compte rendu PoC aux ajustements à intégrer » : 3 familles d'ajustements (composants confirmés / recalés / contraintes nouvelles) en liste numérotée + tip « Une page de synthèse, pas une réunion orale ».
- H4-2 « Propager les ajustements aux trois disciplines » : effet inter-discipline, exemples concrets + warning « Repartir des plans du concept revient à effacer la PoC ».

`[!example]` refondu sur articulation usinée alu 6061 : 3 familles d'ajustements instanciées. Wiki-links sémés : `[[microcontroleur]]`, `[[pla]]`, `[[usinage]]`, `[[retroplanning]]`, `[[ecoconception]]`.

### Phase 3 — Étape 2 *Détailler les plans par discipline* rédigée
2 paragraphes intro (transition étape 1, niveau précision supérieur, retour grille disciplinaire vs PoC), 2 H4 économes :
- H4-1 « Travailler en parallèle par discipline » : 3 disciplines en liste (élec/méca/info), outils typiques cités + tip « Reprenez le schéma bloc fonctionnel comme carte d'interfaces ».
- H4-2 « Vérifier la cohérence inter-disciplines avant les validateurs externes » : 3 familles d'interfaces (physiques / électriques / logicielles) en liste numérotée + warning « Une spécification d'interface n'est pas une spécification interne ».

`[!example]` instancié : 3 disciplines + revue interne tracée (2 conflits arbitrés sans rétroaction concept). Wiki-links nouveaux : `[[schema-bloc-fonctionnel]]`, `[[cahier-des-charges-fonctionnel|CdCF]]`, `[[matrice-de-decision]]`, `[[impression-3d]]`.

### Phase 4 — Étape 3 *Consolider la BOM et chiffrer l'environnement* : pré-rédigée (autre Claude)
Étape 3 trouvée déjà rédigée en pleine qualité au moment de l'attaquer. Hypothèse autre instance Claude lancée en parallèle (brief multi-appareil). Contenu trouvé : 3 H4 dense (BOM finale chiffrée / Quantifier l'écoconception / Planning + budget) + tip + warning + example matriciel avec **BOM 7 lignes 6 colonnes** (213,20 € HT sous enveloppe 250 €) + ACV simplifiée (steppers ~52 %, alu+usinage ~28 %) + livrable 3 items. Cohérence vérifiée avec mes étapes 1-2-4-5.

### Phase 5 — Étape 4 *Rédiger et faire valider* (PIVOT) rédigée
2 paragraphes intro (pont depuis étape 3, multi-validation à 3+1 comme miniature industrielle), 3 H4 dense :
- H4-1 « Préparer la multi-validation » : sous-dossier ciblé par validateur, 3 choses à figer.
- H4-2 « Mener les trois validations disciplinaires » : 3 RDV séparés 1-2 semaines, ordre logique.
- H4-3 « Faire valider l'ensemble en revue globale » : encadrant vérifie cohérence inter-parties + qualité argumentation + lisibilité tiers.

Warning existant + tip nouveau « Ouvrez chaque RDV par les livrables-clés ». `[!example]` refondu : **tableau matriciel 3 validateurs × 5 colonnes** — 3ᵉ contexte fort de convention 10. Wiki-links de la table échappés avec `\|` pour pipe.

### Phase 6 — Étape 5 *Émettre les commandes* rédigée (cas inédit)
2 paragraphes intro (point de non-retour matériel, rôle équipe vs responsable projet), 2 H4 :
- H4-1 « Préparer les bons de commande » : 1 bon par fournisseur partenaire, 4 contenus attendus.
- H4-2 « Émettre et tracer » : émission par resp projet, traçabilité, vérification conformité à réception.

Warning nouveau « Émettre avant la validation d'ensemble est un échec d'étape ». Tip nouveau « Suivi par tableau partagé ». `[!example]` structuré en 3 bons de commande (partenaire élec / matière / fablab-atelier) — 4ᵉ contexte de convention 10.

### Phase 7 — Pièges + Équipe refondus
- **Pièges fréquents** : refonte de 5 puces du squelette en **11 entrées format gras court + explication** (calque concept 8 / PoC 11). ~5/11 pièges émergés a posteriori des étapes 2-5 (≈ 45 %, ratio aligné PoC) — éprouve C12.
- **Équipe** : 4 paragraphes thématiques (Interfaces métiers / Gestion de projet / Écoconception / Sécurité et qualité), calque concept/PoC. Wiki-links sémés : `[[gestion-de-projet]]`, `[[retroplanning]]`, `[[acv-simplifiee]]`, `[[securite-et-qualite]]`.

### Phase 8 — Cohérence finale 4 passes : **0 patch sur les 4 passes** (pattern PoC confirmé)
- Passe 1 (terminologie) : 0 patch.
- Passe 2 (fil rouge bras 3 axes) : 0 patch — articulation usinée alu 6061 cohérente sur les 5 étapes (lead time 3 semaines / 15 j, masse +35 %, ISO 2768 m + Ra ≤ 1,6).
- Passe 3 (ponts inter-étapes) : 0 patch — chaque intro d'étape ouvre par un pont rétro-arrière propre.
- Passe 4 (wiki-links exhaustif) : 0 patch — convention 6 tenue au fil. **2ᵉ confirmation après PoC suite 7** que la discipline est acquise quand internalisée.

### Round 2 utilisateur — 2 points tranchés
1. **Cohérence PCB-BOM** : tranché par information utilisateur — PCB monoface gravé en interne sur **machine de gravure à l'anglaise** de l'école. Donc PCB jamais commandé, pas de ligne BOM nécessaire, **fiche-tuto PCB à créer** avec mention spécifique. 3 patches en cascade appliqués : étape 2 H4 (production interne possible), étape 2 example (5×7 cm monoface gravé en interne), étape 5 example (PCB non commandé + remplacement par 3 condensateurs 100 nF céramique pour le découplage + chiffre ajusté ≈ 98 € HT au lieu de 122 €).
2. **Cohérence chiffrée étape 5** : ajustée automatiquement par patch 1. Désormais 98 + 21 + 95 = 214 € HT cohérent avec BOM étape 3 (213,20 €) + connecteur coudé étape 4 (+1,80 €) = 215 € HT.

### Conventions éprouvées sur dossier-technique
- **Convention 10 (matrice incarnée)** : **épreuve 3/3 réussie**, 4 contextes incarnés. Cumul total 8+ contextes (4 sur concept + 4 sur PoC + 4 sur dossier-tech). **Promotion vers § 2 envisageable** (à acter à froid).
- **Convention 11 (rythme H4)** : promotion § 6 déjà actée en suite 7. Cas inédit nouveau éprouvé sur étape 5 (2 H4 sortie matérielle, ni clôture ni économe). Pattern stable.
- **Convention 12 (Pièges a posteriori)** : **épreuve 3/3 réussie** (concept 37 %, PoC 45 %, dossier-tech 45 %). **Promotion vers § 6 envisageable**.
- **Convention 13 (relire amont)** : **1ʳᵉ épreuve formelle réussie** — aucun round 2 sur sections amont, fiche cohérente. À éprouver sur `integration-et-tests` (5ᵉ trame) avant promotion.
- **Convention 14 (seuil pratique MCP ~30 ko)** : nouvelle, acquise et capitalisée § 7.

### Nouvelles dépendances posées
- Fiche-tuto `[[pcb]]` à créer avec mention **machine de gravure à l'anglaise + monoface en interne école** (procédé spécifique projet école, pas une commande). Ajout BACKLOG.

### Décisions reportées
- Toutes celles des sessions précédentes (sauf cohérence inter-fiches concept↔PoC partiellement levée via fil rouge articulation usinée traversant les 5 étapes dossier-tech).
- Promotion C10 vers § 2 : à acter à froid.
- Promotion C12 vers § 6 : à acter à froid.
- C13 à éprouver sur `integration-et-tests`.
- Finalisation archivage 22-24/05 manuel à faire à la maison.

---

## 2026-05-25 (suite 7) — PoC : approfondissement v1 complet

### Périmètre de session
1ère session d'approfondissement de `preuve-de-concept.md` (squelette du 22/05). Calque méthodo 25/05 suite 4-5-6 sur `concept.md`. Geste de cette session : appliquer le mode d'application proposé pour la convention 6 (passe dédiée en sortie de fiche) et éprouver les conventions 10 / 11 / 12 sur la trame du V suivante. PC perso, préfixe MCP `filesystem:*`.

### Cadrage en début de session — 4 questions tranchées en bloc (niveau C)
1. **Découpage en 5 étapes** (pas 4 du squelette) : 1) Définir / 2) Préparer / 3) Mener / 4) Analyser et trancher (pivot) / 5) Rédiger et faire valider (clôture documentaire). Rythme H4 selon convention 11 : 2/2/2/3/3.
2. **Étape pivot = 4** (Analyser et trancher), clôture documentaire = étape 5. Justification : le pivot du V se joue au moment de la décision (go / ajustement / retour amont), pas au moment de la mesure.
3. **Fil rouge local PoC = articulation 3D imprimée PLA 60 %** (incertitude locale cohérente avec le fil rouge global, pas alignement strict sur I1/I2 sortis de l'étape 4 concept). Décision tranchée : le callout exemple sert d'incarnation locale, pas de continuité narrative inter-fiches stricte. À surveiller si la cohérence inter-fiches devient un fil rouge structurant.
4. **Boucle rétroactive marge négative incarnée (α)** : la preuve articulation 3D conclut marge négative → retour amont structurant vers concept étape 3 (renégociation à 3 disciplines). Matérialisée dans `[!example]` étape 4 + closure dans `[!example]` étape 5 (revue PoC validée sous conditions après reprise concept aboutie sur articulation usinée).

### Phase 1 — Alignement v2.1 du squelette + restructuration 4→5 étapes (9 patches en batch)
Niveau B annoncé. 3× `[!example]` titre fixe « Exemple : projet bras 3 axes » ; 3× `[!livrable]` titre format « Livrable N/5 — Preuve de concept » ; 1× `[!warning]` étape 2 titre fixe Attention + phrase-clé gras ; 1× renommage étape 3 (« Mener les preuves » → « Mener les essais ») ; 1× refonte massive étape 4 originale → étape 4 (placeholder pivot avec 3 sorties + warning + example + livrable) + nouvelle étape 5 (clôture documentaire, placeholders à rédiger).

### Phase 2 — Étape 1 *Définir chaque preuve* (1 patch)
Niveau B annoncé puis niveau A demandé par l'utilisateur pour la suite. Structure 2 H4 : *D'une incertitude à un énoncé testable* / *Le triplet hypothèse / critère / protocole*. `[!warning]` Un énoncé non écrit n'est pas un énoncé. `[!tip]` Formuler le critère en miroir d'une exigence chiffrée du CdCF. `[!example]` enrichi (triplet posé + revue encadrant traçée 3 corrections demandées). 1 pitié méthodo dryRun-rattrapée (1ère tentative astérisques parasites + duplication `[!livrable]`).

**Round 2 utilisateur — 1 correction** : doublon « on a le matos, on monte, on verra ce que ça donne » présent dans Posture amont ET dans H4-1 étape 1. Patch correctif appliqué (refonte du paragraphe : 3 conséquences en miroir des 3 éléments du triplet — sans hypothèse / sans critère / sans protocole). **Leçon méthodo : extension de la leçon ±2 phrases (25/05 suite 6)** — relire les sections amont de la fiche elle-même (Posture, Objectif) avant de rédiger une section avale, même quand elles ont été rédigées en session antérieure. Convention candidate à pousser en § 7 conventions.

### Phase 3 — Étape 2 *Préparer les moyens* (1 patch, niveau A)
2 H4 économes : *Du protocole aux ressources* / *Trois sources, dans l'ordre*. `[!warning]` Pas d'achat à titre personnel (conservé). `[!tip]` Demander tôt le stock divers. `[!example]` enrichi liste à puces des 3 sources, rattachement traçable + lien rétroactif vers correction étape 1 (couple appliqué à la balance + pied à coulisse).

### Phase 4 — Étape 3 *Mener les essais par incertitude* (1 patch, niveau A)
2 H4 économes : *Monter le banc* (caractérisation préalable) / *Exécuter et tracer les mesures*. `[!warning]` Caractériser le banc avant de mesurer. `[!tip]` Noter les anomalies, pas seulement les valeurs. `[!example]` enrichi : caractérisation banc + relevés 5 points 1000 cycles montrant dépassement critère 0,5° entre 480-550 cycles (profil sur 3 articulations).

### Phase 5 — Étape 4 *Analyser et trancher* (PIVOT, 1 patch, niveau A)
3 H4 dense (convention 11 éprouvée une 2ᵉ fois) : *Confronter au critère* / *Synchroniser entre preuves* / *Statuer*. 3 sorties nominales numérotées : Validé / Ajustement local / Retour amont structurant + mises à jour amont dans la même séance ([[matrice-de-risques|matrice de risques]] + éco + matrices décision concept). `[!warning]` Une preuve non concluante n'est pas un échec. `[!tip]` Synchroniser avant de statuer. `[!example]` enrichi avec tableau de statut (incarnation α) + décision traçée retour concept étape 3 + mises à jour matrice de risques + écoconception révisée (PLA 60 % défavorable).

### Phase 6 — Étape 5 *Rédiger et faire valider* (CLÔTURE DOCUMENTAIRE, 1 patch, niveau A)
3 H4 calque concept étape 5 (convention 11 sous-règle clôture documentaire éprouvée 2/2) : *Structurer le rapport* / *Rédiger chaque section* / *Faire valider en revue PoC*. TdM type 5 sections numérotée. 4 issues nominales calque concept étape 5 (sans réserve / sous conditions / reprise locale / rétroaction amont). `[!warning]` Compiler n'est pas rédiger. `[!tip]` Faire la revue à blanc en équipe. `[!example]` avec TdM type instanciée sur cas bras 3 axes + revue PoC traçée *validé sous conditions* après reprise concept aboutie (articulation usinée).

### Phase 7 — Pièges + Équipe (1 patch)
**Pièges fréquents** : refonte 6 puces simples → 11 entrées format gras court + explication (convention 12 confirmée). **5/11 pièges issus a posteriori des étapes 3-4-5 (~45 %)**, supérieur à concept (3/8 ≈ 37 %) — indicateur que la convention 12 généralise.
**Pendant cette phase, côté équipe** : 4 paragraphes thématiques (Interfaces métiers / Gestion de projet / Écoconception / Sécurité et qualité), calque concept.

### Phase 8 — Cohérence finale d'ensemble (4 passes calque concept 25/05 suite 6, 1 batch de 3 patches)
- **Passe 1 (terminologie)** : 2 corrections (« troisième étape » → « troisième phase » intro ; typo « enchâine » → « enchaîne » étape 3).
- **Passe 2 (fil rouge bras 3 axes)** : 1 correction (« section 5 du dossier concept » ambigu en étape 5 → « bilan écoconception du dossier concept »).
- **Passe 3 (ponts inter-étapes)** : 0 patch. Pattern stylistique déjà internalisé (annonces aval N→N+1 portées par intro étape suivante, calque concept).
- **Passe 4 (wiki-links / popovers)** : 0 patch. **Résultat majeur** : la convention 6 a été appliquée correctement au fil de la rédaction sur PoC (vs 74 % des patches concentrés en passe finale sur concept). Audit final n'a révélé aucun oubli significatif. **Confirme partiellement** la leçon méthodo 25/05 suite 6 : la convention 6 est applicable au fil quand on a la discipline acquise, la passe dédiée devient plutôt un filet de sécurité.

### Phase 9 — Round 2 utilisateur sur les wiki-links
Demande utilisateur niveau A : ajouter wiki-links sur 4 outils tuto (multimètre, oscilloscope, alimentation stabilisée, Arduino) et 2 instruments notion (pied à coulisse, comparateur). 6 nouvelles cibles de wiki-links posées (1 batch de 7 patches sur 6 contextes : étape 2 H4-1, étape 2 H4-2, étape 2 example, étape 3 warning, étape 3 example, étape 5 example). Convention 6 (1ère occurrence par contexte) respectée.

**Correction factuelle process fablab** : reformulation étape 2 H4-2 et example pour refléter la réalité école — l'équipe ne reçoit pas de filament en propre, elle transmet des fichiers STL au responsable fablab impression 3D qui prend en charge l'impression. Information de cadrage importante pour la PoC, transposable à d'autres fiches mentionnant l'impression 3D à surveiller.

**Mini-patch final** : disjonction `[[microcontroleur|microcontrôleurs]]` et `[[arduino|Arduino]]` dans l'énumération Stock standard (après remarque utilisateur). **Plan long terme à matérialiser** : la fiche `microcontroleur` deviendra une page d'aiguillage vers tutoriels par famille (STM32, ESP32, MicroPython, Arduino, Teensy, etc.). Poussé au BACKLOG.

### État de `preuve-de-concept.md` en fin de session
- Démarche complète : 5 étapes rédigées et alignées sur les 4 dimensions auditées.
- Sections transverses : *Pièges fréquents* (11 entrées) et *Pendant cette phase, côté équipe* (4 paragraphes thématiques) rédigées.
- Front matter + Posture + Objectif + Conclusion + Voir aussi : posés et alignés.
- Wiki-links : 6 nouvelles cibles ajoutées au réseau (multimetre / oscilloscope / alimentation-stabilisee / arduino / pied-a-coulisse / comparateur).
- **Fiche complète et alignée v2.1. Phase 3 du cycle en V close.**

### Leçons méthodo de la session
- **Leçon 1 (extension leçon ±2 phrases du 25/05 suite 6)** : relire les sections amont de la fiche (Posture, Objectif) avant de rédiger une section avale, même quand elles ont été rédigées en session antérieure. Coût 1 round 2 sur PoC étape 1. Convention candidate → `conventions.md` § 7.
- **Leçon 2 (confirmation partielle du 25/05 suite 6)** : la convention 6 (wiki-link 1ère occurrence par section/sous-section/callout) s'applique correctement au fil quand la discipline est acquise. Sur PoC, 0 patch en passe finale (vs 74 % sur concept). La passe dédiée en sortie de fiche devient un filet de sécurité, pas le mode principal d'application.
- **Leçon 3 (généralité convention 12)** : la section *Pièges fréquents* se nourrit a posteriori des étapes aval à ~45 % sur PoC (5/11), supérieur au ratio concept (3/8). Convention 12 confirmée, promotion possible vers § 6.

### État des conventions à éprouver — sortie session
- **Convention 6** (wiki-link 1ère occurrence par contexte) : confirmée en audit final exhaustif PoC. Mode d'application affiné (au fil + filet passe dédiée). MAJ note méthodo dans `conventions.md` § 7.
- **Convention 10** (matrice incarnée dans `[!example]`) : éprouvée sur **4 contextes PoC** (liste à puces 3 sources étape 2, relevés 5 points étape 3, tableau de statut étape 4, TdM type instanciée étape 5). Indicateur de généralité renforcé. Promotion possible vers § 2 si confirmée sur dossier-technique.
- **Convention 11** (rythme H4 selon densité d'étape) : éprouvée 2/2 trames consécutives (concept + PoC). Règle tripartite validée : pivot → 3 H4 / hors pivot non-clôture → 2 H4 / clôture documentaire → 3 H4 calque. **Promotion proposée** vers `conventions.md` § 6 (Structure des fiches-trame).
- **Convention 12** (Pièges nourris a posteriori) : confirmée (~45 % sur PoC vs ~37 % sur concept). Promotion possible vers § 6 si confirmée sur dossier-technique.

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes.
- **Cohérence inter-fiches concept ↔ PoC** : la rétroaction marge négative incarnée dans PoC étape 4 renvoie vers concept étape 3, et la rétroaction articulation usinée revient dans PoC étape 5. Ces ponts sont posés côté PoC mais pas instanciés côté concept (l'`[!example]` concept étape 3 connaissait déjà ses 2 conflits propres). Question reportée à une session dédiée « cohérence inter-fiches » après rendu 2-3 trames supplémentaires.
- **`microcontroleur` page d'aiguillage par famille** : posé au BACKLOG. À décider quand on tackle la fiche notion.
- **6 nouvelles fiches notion/tuto au réseau** (multimetre, oscilloscope, alimentation-stabilisee, arduino, pied-a-coulisse, comparateur) : poussées au BACKLOG.
- **Prochaine session** : objectif à discuter en début de session suivante (cf. propositions ci-dessous).

---

## 2026-05-25 (suite 6) — Concept : cohérence finale d'ensemble (4 passes de relecture critique)

### Périmètre de session
Session de clôture phase 2 sur `concept.md`. Démarche complète rédigée (5 étapes + Pièges 8 entrées + Équipe 4 paragraphes, faits 25/05 suite 4 et suite 5). Geste de cette session : relecture critique progressive de l'ensemble sur 4 dimensions, calque méthodo 24/05 suite 2 sur spec-tech (11 patches en 3 passes successives auto-critiques). Session courte attendue, **résultat 27 patches** sur les 4 passes — plus volumineux que prévu en raison de la passe 4 (wiki-links) qui concentre 20 patches. PC perso, préfixe MCP `filesystem:*`.

### Cadrage en début de session — 3 arbitrages tranchés en bloc (niveau C)
1. **Ordre des 4 passes** : terminologie → fil rouge → ponts inter-étapes → wiki-links. Justification : terminologie mécanique (grep) dégage le bruit avant les passes sémantiques ; le fil rouge nourrit la décision FC démontabilité qui peut créer des ponts à ajuster ; les wiki-links arrivent en dernier sur texte stabilisé.
2. **Seuil d'arrêt** : 1 passe sans nouvel écart par dimension, max 2 passes par dimension. Plus strict que spec-tech 24/05 suite 2 (qui a tourné jusqu'à 3 passes), parce que `concept.md` a déjà bénéficié de 5 round 2 sans correction.
3. **Profondeur audit wiki-links** : exhaustif sur les 5 étapes (et pas Pièges/Équipe/Conclusion qui ont leur propre logique). Audit ciblé mais complet.

### Passe 1 — Terminologie (5 + 1 = 6 patches)
Grep sur les 6 termes du brief : pas de « point dur », pas de « dérisquer », pas de « soutenance intermédiaire », pas d'extension `.md`, `incertitude(s)` employé au bon endroit partout, `semaine n°X` cohérent (n°5 revue de concept, n°6 engagement PoC).

**5 écarts initiaux** :
1. Posture : « Cette **étape** ne demande pas… » → « Cette **phase** » (désigne la phase concept entière)
2. Posture : « la première **étape** où l'écoconception devient un critère » → « première **phase** »
3. Section Équipe / Écoconception : « Le concept est l'**étape** où l'écoconception devient un critère d'arbitrage » → « la **phase** »
4. Étape 5 intro : « elle **agrège** » → verbe isolé en gras (conflit convention 25/05) → « elle **agrège les quatre livrables précédents** »
5. Étape 5 H4-3 : « La revue **valide** le dossier » → verbe isolé en gras → « La revue **valide sans réserve** » (homogénéise les 4 issues nominales : sans réserve / sous conditions / demande une reprise / rétroaction CdCF)

**1 patch correctif effet de bord** : le patch 4 (« agrège les quatre livrables précédents ») a introduit un doublon avec la phrase suivante (« Les quatre livrables précédents… sont assemblés… »). Correction par fusion des 2 phrases : « elle agrège les quatre livrables précédents (décomposition, matrices, architecture, pré-dim et incertitudes) dans un dossier concept unique ».

### Passe 2 — Fil rouge bras 3 axes (1 patch)
Reconstitution de la chaîne d'éléments instanciés étape par étape. Chaînage propre vérifié sur 4 axes (solutions stepper+driver retenues étape 2 → reprises étape 3 → mesurées étape 4 → consolidées étape 5 ; I1/I2 étape 4 rattachées F0/F1 → reprises section 5 dossier étape 5 ; compromis offset court étape 3 → architecture étape 5 ; 2 conflits étape 3 → tableau conflits arbitrés étape 5).

**Point A — FC démontabilité (point du brief)** : l'étape 5 mentionnait « ajout d'une FC liée à la démontabilité (rétroaction CdCF signalée et tracée en cours de phase) », mais l'étape 1 ne l'instanciait pas (le `[!warning]` reste générique, l'`[!example]` étape 1 ne racontait aucune rétroaction). Option (a) retenue : instanciation rétroactive dans l'`[!example]` étape 1, paragraphe ajouté (~4 lignes) : « Pendant cette décomposition, l'équipe identifie qu'aucune fonction de service du CdCF ne porte explicitement le remplacement d'un moteur en cas de panne… une FC liée à la démontabilité est ajoutée au CdCF avec son numéro de version mis à jour. » Wiki-links re-déclenchés selon convention 6 ([[cahier-des-charges-fonctionnel|CdCF]] et [[FC]]). Cohérence narrative 1→5 désormais propre.

**Point B — réserve étape 2 → étape 3 vs annonce étape 4 (mineur)** : l'`[!example]` étape 2 dit « réserve à lever à l'étape 4 sur la consommation au maintien » mais l'étape 3 débloque concrètement via le compromis lookup table. Inconsistance narrative ténue, lecture continue tient. Laissé tel quel.

### Passe 3 — Ponts inter-étapes (0 patch)
Vérification des renvois explicites dans les deux sens (annonce N→N+1 et référence N+1→N). Tous les ponts amont OK (étape 3 → étape 2 matrices d'origine ; étape 4 → étape 3 retour si marge négative ; étape 5 → étapes 1-4 agrégation ; Conclusion → preuve de concept).

**Pattern stylistique stable détecté** : les annonces aval N→N+1 sont systématiquement portées par l'**intro de l'étape suivante**, jamais par la sortie de l'étape courante. Cohérent sur les 4 transitions. Choix de fluidité narrative défendable.

**Saut étape 3→5** (sortie étape 3 mentionne étape 5 « le dossier concept rédigé à l'étape 5 pourra s'appuyer sur cette traçabilité ») : déroge légèrement au pattern mais sémantiquement justifié (la traçabilité des matrices d'origine sert effectivement la section 3 du dossier étape 5). Option (a) retenue, laissé tel quel.

### Passe 4 — Wiki-links / popovers (20 patches en batch)
Audit exhaustif strict (option α) de la convention 6 (wiki-link à la 1ère occurrence par section/sous-section/callout). Profondeur sur les 5 étapes uniquement.

**1 doublon détecté** : étape 2 H4 « Construire la matrice et arbitrer » → `[[ecoconception|écoconception]]` wiki-linkée 3 fois dans le même H4 (1 puce critère + 2 paragraphes suivants). Wiki-links 2 et 3 retirés.

**19 oublis détectés** (1ère occurrence dans nouveau contexte sans wiki-link) :
- `[!warning]` étape 1 H4-1 : [[cahier-des-charges-fonctionnel|CdCF]]
- `[!example]` étape 1 ¶2 : [[fast|FAST]]
- Étape 2 H4-2 puce Encombrement : [[pieuvre]] + [[cahier-des-charges-fonctionnel|CdCF]]
- `[!example]` étape 2 tableau : [[ecoconception|Écoconception]]
- Étape 3 H4-3 levier 1 : [[matrice-de-decision|matrice de décision]]
- Étape 3 H4-3 levier 3 : [[cahier-des-charges-fonctionnel|CdCF]]
- `[!example]` étape 3 : [[usinage]] + [[impression-3d|impression 3D]]
- `[!warning]` étape 4 : [[preuve-de-concept|preuve de concept]]
- `[!tip]` étape 4 : [[preuve-de-concept|preuve de concept]]
- `[!example]` étape 4 : [[cahier-des-charges-fonctionnel|CdCF]]
- Étape 5 intro : [[specification-technique|spécification technique]]
- Étape 5 H4-2 « Rédiger » : [[cahier-des-charges-fonctionnel|CdCF]]
- Étape 5 H4-3 « Faire valider » : [[preuve-de-concept|preuve de concept]]
- `[!example]` étape 5 : [[cahier-des-charges-fonctionnel|CdCF]], [[FC]], [[fast|FAST]], [[ecoconception|écoconception]], [[schema-bloc-fonctionnel|schéma bloc]], [[preuve-de-concept|preuve de concept]]

20 patches passés en un seul appel `filesystem:edit_file` (array d'edits, méthodo calque 25/05 suite 4). Diff propre.

Cohérence aliases FP/FS/FC vérifiée : FC wiki-linké à 4 endroits (warning étape 1, puce étape 2 H4-2, `[!example]` étape 1 par patch passe 2, `[!example]` étape 5 par patch passe 4), FP wiki-linké 1 fois (warning étape 1), FS jamais mentionné. Aucun écart sur cet axe.

### Round 2 utilisateur — validé sans correction
6ᵉ round 2 successif validé sans correction sur `concept.md` depuis le 25/05 suite 4 (étapes 1+2 / étape 3 / étape 4 / étape 5 / Pièges+Équipe / cohérence finale 4 passes). Pattern de régularité maintenu. Signal renforcé : les conventions sont désormais internalisées dans la rédaction, mais la convention 6 fait exception (cf. leçon méthodo ci-dessous).

### Leçon méthodo 1 — relire ±2 phrases avant de proposer une reformulation
Le patch 4 de la passe 1 (verbe isolé « agrège » → morceau de phrase « agrège les quatre livrables précédents ») a introduit un doublon stylistique avec la phrase suivante (« Les quatre livrables précédents sont assemblés… »). Cause : reformulation proposée sans relecture du contexte aval. Discipline acquise : pour tout patch de gras / reformulation, lire ±2 phrases avant de figer la proposition. Coût : 1 patch correctif supplémentaire. Surface d'application : toutes les passes de relecture critique où Claude propose une reformulation locale.

### Leçon méthodo 2 — convention 6 plus efficace en passe dédiée qu'en continu
La passe 4 a généré 20 patches sur 27 de la session (74 %). Signal fort : la convention 6 (wiki-link à la 1ère occurrence par section/sous-section/callout) n'avait pas été appliquée stricte au fur et à mesure de la rédaction des étapes 1-5 (faits 25/05 suite 4 et suite 5), alors qu'elle est en éprouvage depuis 25/05 suite. Hypothèse : la convention 6 demande une vigilance constante difficile à tenir en continu pendant la production de fond, mais s'applique très efficacement en **passe dédiée en sortie de fiche** (20 patches en batch en une passe, audit exhaustif tenable). Mode d'application proposé : ne pas chercher à appliquer la convention 6 au fil de la rédaction ; faire une passe wiki-links systématique en sortie de fiche. À confirmer sur `preuve-de-concept` : si le ratio passe wiki-links / total reste similaire (~70-80 %), formaliser la convention dans `conventions.md` § 7 avec mode d'application explicite. MAJ légère effectuée ce jour sur convention 6.

### État de `concept.md` en fin de session
- Démarche complète : 5 étapes rédigées et alignées sur les 4 dimensions auditées.
- Sections transverses : *Pièges fréquents* (8 entrées) et *Pendant cette phase, côté équipe* (4 paragraphes thématiques) rédigées et cohérentes.
- Front matter + Posture + Objectif + Conclusion + Voir aussi : posés et alignés.
- Wiki-links : audit exhaustif convention 6 appliqué, 1 doublon + 19 oublis corrigés.
- **Fiche complète et alignée v2.1. Phase 2 du cycle en V close.**

### Décisions reportées (toujours en attente)
- Toutes celles des sessions précédentes.
- **Prochaine session** posée : approfondissement de `preuve-de-concept` (fiche-trame phase 3 du V, point pivot du V, squelette fait 22/05). À chaque approfondissement, appliquer le mode d'application proposé pour la convention 6 (passe dédiée en sortie).
- **Conventions 10 et 11 affinées** à éprouver sur preuve-de-concept et dossier-technique pour confirmation avant promotion vers les sections fixes du fichier `conventions.md`.
- **Cohérence inter-fiches (spec-tech ↔ concept)** : hors champ pour cette session (annoncé brief). Vérification à conduire ultérieurement, possible session dédiée si désynchros détectées.

---

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

Cette clarif résoud la tension du TODO qui marquait certaines fiches en « fiche-tuto détaillée » tout en les traitant en stub aujourd'hui : pour les outils qui n'ont pas encore leurs captures d'écran, on pose la **notion** d'abord (court), on construit le **tuto** ensuite. Répartition appliquée : 5 notion + 2 tuto sur les 7 fiches du jour.

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

<!-- Sessions antérieures (21/05 et avant) déplacées dans `JOURNAL-archive.md` lors du nettoyage documentaire du 25/05. -->
