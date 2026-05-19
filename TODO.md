# TODO — TheSkillCodex

> Fichier privé (non publié). Listes courtes et actionnables.

## Prochaines sessions (ordre logique)

### 1. Cadrage pédagogique (suite)
- [ ] **Session "chronopédagogie"** : projeter le cycle en V à 5 phases sur les 15 semaines du semestre. Quelle phase à quel moment, combien de temps, quels jalons concrets ?
- [ ] **Format des compétences (AA)** : discussion sur la granularité et la convention de tag — en attente validation hiérarchie
- [ ] **Trame v2 — boucles itératives** : enrichir le schéma du cycle en V pour afficher honnêtement les retours arrière (PoC échec → revoir spec/concept, qualif échec → revoir dossier). À traiter après quelques fiches de phase rédigées.

### 2. Rédaction de fiches (parcours prioritaire)

Approche recommandée : remonter le cycle en V dans l'ordre des phases.

- [ ] **Fiche trame — `specification-technique`** : première fiche-trame de phase. Définit ce qu'est la phase 1, ses livrables, comment la mener.
- [ ] **Fiche notion — `cahier-des-charges-fonctionnel`** (`fiches/proj/`)
  - Notion fondatrice, mentionnée 3 fois dans le hub et 2 fois dans la fiche pilote
  - Couvre `AA-PROJ-C04-CFE3-02` (rédiger un CdCF) — sous réserve convention tags
- [ ] **Fiche trame — `concept`** : phase 2.
- [ ] **Fiche trame — `preuve-de-concept`** : phase 3. Insister sur la logique de dérisquage.
- [ ] (Puis fiches selon priorité — voir BACKLOG.md)

### 3. Templates à rédiger
- [ ] **Template fiche-trame** dans `_templates/fiche-trame.md` (structure spécifique aux fiches de phase)
- [ ] **Template fiche-tuto** dans `_templates/fiche-tuto.md`
- [ ] **Vérifier / mettre à jour `fiche-notion.md`** existant pour cohérence avec la typologie 3 types
- [ ] Formaliser le champ `type:` et `phases:` dans le front matter (documenter dans chaque template)

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
