# TODO — TheSkillCodex

> Fichier privé (non publié). Listes courtes et actionnables.

## Prochaines sessions (ordre logique)

### 1. Cadrage pédagogique (suite)
- [ ] **Session "chronopédagogie"** : projeter le cycle en V à 5 phases sur les 15 semaines du semestre. Quelle phase à quel moment, combien de temps, quels jalons concrets ?
- [ ] **Format des compétences (AA)** : discussion sur la granularité et la convention de tag — en attente validation hiérarchie
- [ ] **Trame v2 — boucles itératives** : enrichir le schéma du cycle en V pour afficher honnêtement les retours arrière (PoC échec → revoir spec/concept, qualif échec → revoir dossier). À traiter après quelques fiches de phase rédigées.

### 2. Rédaction de fiches (parcours prioritaire)

Approche recommandée : remonter le cycle en V dans l'ordre des phases.

- [ ] **Fiche trame `specification-technique` — étapes 2 à 6** : poursuivre la rédaction (étape 1 déjà rédigée en session du 20/05). Prochaine en tête : étape 2 état de l'art.
- [ ] **Fiche notion `bete-a-cornes`** (`fiches/proj/`) — référencée 5 fois dans `specification-technique`, prioritaire. Inclure exemples bon/moyen/mauvais.
- [ ] **Produire le SVG de la bête à cornes** en même temps que la fiche-notion, puis revenir compléter `specification-technique.md` étape 1 (placeholder image actuellement).
- [ ] **Fiche notion `cahier-des-charges-fonctionnel`** (`fiches/proj/`)
  - Notion fondatrice, mentionnée 3 fois dans le hub et 2 fois dans la fiche pilote
  - Couvre `AA-PROJ-C04-CFE3-02` (rédiger un CdCF) — sous réserve convention tags
- [ ] **Fiche trame `concept`** : phase 2.
- [ ] **Fiche trame `preuve-de-concept`** : phase 3. Insister sur la logique de dérisquage.
- [ ] (Puis fiches selon priorité — voir BACKLOG.md)

### 3. Templates à rédiger
- [ ] **Template fiche-trame** dans `_templates/fiche-trame.md` — à extraire **après** rédaction d'une 2ème fiche-trame (`preuve-de-concept` probablement), pour que le template repose sur 2 cas réels et pas un seul. La fiche `specification-technique.md` sert de modèle de travail en attendant.
- [ ] **Template fiche-tuto** dans `_templates/fiche-tuto.md`
- [ ] **Vérifier / mettre à jour `fiche-notion.md`** existant pour cohérence avec la typologie 3 types
- [ ] Formaliser le champ `type:` et `phases:` dans le front matter (documenter dans chaque template) — première vraie utilisation dans `specification-technique.md`

## Décisions à valider avec la hiérarchie
- [ ] Convention de tags AA (granularité, syntaxe)
- [ ] Niveau d'écart accepté entre référentiel et contenu produit (peut-on aller au-delà ?)
- [ ] Couleurs / charte graphique : faut-il aligner sur la charte école ?

## Tâches techniques en suspens
- [ ] Commit + push de la session du 19/05 (suite et suite 2) pour voir hub + SVG + callouts en ligne
- [ ] Vérifier le rendu de la fiche hub sur smartphone (vrai test responsive)
- [ ] Vérifier le rendu de la fiche `_templates/callouts.md` (panorama des callouts) en ligne et sur mobile
- [ ] Configurer le plugin Templates d'Obsidian (`content/_templates`)
- [ ] Installer **Pandoc + MiKTeX** pour export PDF académique (pas urgent)
- [ ] Produire le schéma d'illustration des conventions de flèches (mentionné dans `schema-bloc-fonctionnel`)
- [ ] Produire / trouver une photo de couveuse annotée (mentionné dans `schema-bloc-fonctionnel`)

## Décisions éditoriales en attente
- [ ] **Charte couleur / identité visuelle complète** du site (au-delà de la palette callouts v1) — à traiter quand on aura plus de matière
- [ ] **Pliage des callouts** : faut-il replier `[!example]` par défaut ? À trancher après quelques fiches rédigées
- [ ] Stratégie pour fiches MME/ESE : pages courtes pointant vers collègues, ou ne rien créer ?
- [ ] Glossaire séparé pour acronymes ou fiches courtes individuelles ?

## Fait

*Voir `JOURNAL.md` pour l'historique détaillé.*

### Session 2026-05-20 (Fiche-trame `specification-technique` — étape 1)
- [x] Cadrer la structure type d'une fiche-trame (front matter + 7 sections)
- [x] Découper la phase 1 en 6 étapes (analyser le besoin / étudier l'existant / formaliser / caractériser / planifier / rédiger CdCF)
- [x] Cadrage méthodo : NF X50-151 (AFNOR), enrichissement FAST reporté en phase 2
- [x] Décision : un seul callout `[!livrable]` groupé par étape (vs un par sous-étape)
- [x] Décision : fiche-stub pour `afnor-nfx50-151` (popover natif) plutôt que lien externe direct
- [x] Créer `content/fiches/proj/specification-technique.md` avec étape 1 entièrement rédigée et étapes 2-6 en placeholders
- [x] Créer la stub `content/fiches/proj/afnor-nfx50-151.md`
- [x] Poser les popovers (`mecatronique`, `ecoconception`, `relation-client`, `bete-a-cornes`, `pcb`, `ppm`)

### Session 2026-05-19 (suite 2 — Trame projet)
- [x] Cadrer le cycle en V : 5 phases retenues, PoC remonté avant dossier technique
- [x] Typologie de fiches formalisée : trame / tuto / notion
- [x] Arborescence : décision actée (par domaine + champ `phases:` en front matter)
- [x] Politique d'images actée : `content/ressources/img/`
- [x] Créer le schéma SVG du cycle en V (`content/ressources/img/cycle-v-projet.svg`)
- [x] Rédiger la fiche hub (fusion dans `content/hub/index.md`)
- [x] Supprimer `content/hub/parcours-projet.md` (transitoire)
- [x] Restyler les 5 callouts natifs avec palette alignée sur le V
- [x] Créer la fiche de doc des callouts (`content/_templates/callouts.md`)

### Session 2026-05-19 (suite — PC perso)
- [x] Installer Git for Windows sur PC perso (déjà présent — `git clone` a fonctionné)
- [x] Installer Node.js v22 LTS sur PC perso (déjà présent)
- [x] Configurer Git (user.name = TimTurko, user.email = turko.tim@gmail.com)
- [x] Cloner le dépôt TheSkillCodex sur PC perso
- [x] Installer Obsidian sur PC perso
- [x] Configurer Obsidian Git (auto-rapatrié via `.obsidian/` versionné)
- [x] Tester un cycle complet : pull → édit test → commit-and-sync → vérifié sur GitHub
