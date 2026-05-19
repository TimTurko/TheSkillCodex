# BACKLOG — TheSkillCodex

> Fichier privé (non publié). Idées et notions à traiter "un jour".
> Pas d'ordre, pas de priorité. On y déverse, on y pioche selon l'inspiration.

## Fiches-trame à rédiger (phases du cycle en V)

Ces fiches forment l'épine dorsale du parcours étudiant. Voir le hub `content/hub/index.md` pour la trame complète.

- [ ] `hub/specification-technique` — phase 1 du V
- [ ] `hub/concept` — phase 2 du V
- [ ] `hub/preuve-de-concept` — phase 3 du V (point pivot du V)
- [ ] `hub/dossier-technique` — phase 4 du V
- [ ] `hub/integration-et-tests` — phase 5 du V
- [ ] `hub/gestion-de-projet` — fil transverse
- [ ] `hub/ecoconception` — fil transverse
- [ ] `hub/securite-et-qualite` — fil transverse

À noter : l'emplacement exact (`hub/` ou `fiches/proj/`) reste à arbitrer une fois les premières fiches-trame écrites.

## Fiches à rédiger — par domaine

### EEE — Électronique
- [ ] PWM (modulation de largeur d'impulsion)
- [ ] PID (régulateur proportionnel-intégral-dérivé)
- [ ] Asservissement
- [ ] Microcontrôleur (vs contrôleur générique)
- [ ] Alimentation d'un système embarqué
- [ ] Pull-up / pull-down
- [ ] Niveau logique (3.3V, 5V, compatibilité)
- [ ] ADC / DAC
- [ ] Filtrage analogique de base
- [ ] Masse électrique, plan de masse
- [ ] Découplage (condensateurs)

### MIA — Informatique embarquée
- [ ] Architecture logicielle d'un objet connecté
- [ ] Boucle principale (`loop()`) vs interruptions
- [ ] Lecture capteur (polling vs interrupt)
- [ ] Communication série (UART, I2C, SPI)
- [ ] MQTT pour IoT
- [ ] Versionning du code embarqué
- [ ] Structuration d'un projet Arduino / PlatformIO
- [ ] Debug embarqué (sortie série, LED de status)

### PROJ — Démarche projet
- [ ] Cahier des charges fonctionnel (mentionné 3 fois dans le hub, prioritaire)
- [ ] Analyse fonctionnelle (FAST, SADT, bête à cornes)
- [ ] Frontière du système
- [ ] Revue de projet
- [ ] Jalons et livrables
- [ ] Gestion des risques projet
- [ ] Approche-test / itération
- [ ] Critères de comparaison de solutions
- [ ] État de l'art (méthodologie)
- [ ] Schéma cinématique
- [ ] Chaîne d'énergie
- [ ] Pré-dimensionnement (méthodologie)
- [ ] Nomenclature / BOM
- [ ] Plan de qualification produit
- [ ] Retour d'expérience (REX)

### MEO — Méthodes et organisation
- [ ] Outils collaboratifs (ODJ, CR, planning)
- [ ] Outils de créativité (brainstorm, SCAMPER, etc.)
- [ ] Prise de décision collective
- [ ] Gamme de fabrication

### MME — Matériaux / mécanique (interface collègues)
- [ ] Liens vers cours mécanique
- [ ] Liens vers cours fabrication

### ESE — Écoconception
- [ ] ACV (analyse cycle de vie) — principes
- [ ] Liens vers cours dédié

## Idées de fiches transversales / méta

- [ ] Glossaire d'acronymes (PWM, PID, PCB, etc.) — à décider : fiche unique ou fiches courtes ?
- [ ] FAQ projet mécatronique
- [ ] "Premiers pas" (page d'onboarding pour étudiant qui arrive sur le site)
- [ ] Mode d'emploi du site (popovers, recherche, graph)

## Idées d'illustrations / médias à produire

- [ ] Schéma annoté d'une couveuse réelle (référencé dans schema-bloc-fonctionnel)
- [ ] Illustration des conventions de flèches (info / énergie / matière)
- [ ] Photos de projets étudiants antérieurs avec accord (anonymisées si besoin)
- [ ] Capture d'écran de schéma Fritzing / KiCad type
- [ ] Vidéo courte de démo (intégration via embed ?)
- [ ] Schéma cycle en V v2 avec boucles de retour itératives (enrichissement du `cycle-v-projet.svg` actuel)

## Améliorations site / Quartz

- [ ] Charte couleur / identité visuelle complète (au-delà de la palette callouts v1)
- [ ] Thème couleur école / ICAM
- [ ] Page personnalisée 404
- [ ] Favicon custom
- [ ] Logo en haut à gauche
- [ ] Tester l'export PDF académique (Pandoc + xelatex)
- [ ] Tester l'export HTML pour Moodle
- [ ] Ajouter un bouton "Suggérer une amélioration" (lien vers GitHub Issues ?)
- [ ] Lien permanent vers la version PDF de chaque fiche
- [ ] Sitemap publié pour SEO

## Idées éditoriales

- [ ] Mini-séries thématiques (ex: "tout pour piloter un moteur DC en 5 fiches")
- [ ] Parcours guidé : "Tu démarres ton projet ?" → suite logique de fiches
- [ ] Encadré "Vu en projet" (callout terrain) systématisé
- [ ] Page "ressources externes recommandées" (datasheets utiles, sites de référence)
- [ ] Version anglaise des fiches (très long terme, après stabilisation du contenu français)

## Discussions / décisions en attente

- [ ] Convention des tags AA (séparer domaine vs code complet)
- [ ] Faut-il un glossaire séparé pour les acronymes ?
- [ ] Quoi faire des fiches MME / ESE : pages très courtes pointant vers les collègues, ou ne rien créer du tout ?
- [ ] Pliage des callouts (`[!example]-` replié par défaut ?) — à trancher après quelques fiches rédigées
- [ ] Sort du flowchart Mermaid dans la fiche hub si jamais on veut le réintroduire un jour (actuellement remplacé par un sommaire textuel)
