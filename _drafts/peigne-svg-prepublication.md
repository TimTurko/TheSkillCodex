# Peigne SVG — pré-publication

> Fichier de travail privé (hors `content/`, non publié). Checklist **jetable** pour
> la passe de peigne visuel des SVG avant ouverture aux élèves. À supprimer une fois
> la passe close — les items résolus seront cochés dans `BACKLOG.md`
> § « Reprise visuelle des images SVG ».
> Source : 81 SVG dans `content/ressources/img/` (hors dossier `archive/`), listés au 07/06.

## Méthode — deux niveaux à ne pas confondre

- **Rendu (BLOQUANT pour publier).** Sur github.io **et** smartphone, chaque image :
  (a) **s'affiche** — l'embed `/ressources/img/....svg` est résolu (c'est le **risque n°1** :
  le base path Quartz ; le sweep liens rouges ne couvrait **pas** les embeds `![]()`,
  seulement les `[[wikilinks]]`) ;
  (b) reste **lisible en clair ET en sombre** (pas de noir-sur-noir, pas de trait invisible).
- **Affinage (NON bloquant — juste avant ouverture).** Alignements, gaps aux bords,
  homogénéité des traits, lisibilité fine smartphone. Contenu pédagogique figé :
  polissage esthétique uniquement.

**Sanity check à faire en premier.** Ouvrir 3 fiches de profondeurs/domaines différents
(ex. `jalons`, `gpio`, `raspberry-pi-gpio`) et confirmer que les images **se chargent**.
Si toute une catégorie ne charge pas → problème de chemin global, à corriger avant de
peigner le reste.

**Angle mort dark mode à vérifier.** Le bouton dark de Quartz est *piloté par classe*
(`[saved-theme="dark"]` sur la page), alors que nos SVG basculent via
`@media (prefers-color-scheme: dark)` (*réglage OS*). Conséquence possible : un SVG ne
suit **pas** le bouton Quartz, seulement le thème de l'OS. Tester en **changeant le thème
de l'OS** (pas seulement le toggle Quartz), et regarder le cas croisé *OS clair + page
sombre*. Si c'est confirmé comme gênant, c'est un correctif **global** (passer les blocs
`<style>` des SVG sur un sélecteur de classe, ou laisser tel quel) — me le signaler, je
traite en une passe.

**Partage du travail.** Tu peignes au rendu et notes ce qui cloche ; je corrige le SVG
(je ne vois pas le rendu github.io).

## Déjà validés — NE PAS repeigner (11)

`cycle-v-projet` · `bete-a-cornes-generique` / `-bras-bon` / `-bras-mauvais` / `-bras-moyen`
· `pieuvre-generique` / `-bras-3-axes` · `schema-cinematique-generique` / `-bras-3-axes`
· `chaine-energie-generique` / `-bras-3-axes` (relus/corrigés en séance le 06/06).

## À peigner — par page

*(Cocher = page vue au rendu, OK chargement + clair + sombre. ⚠ = point d'attention hérité du suivi.)*

### PROJ — outils méthodo *(premiers jets 25/05 ; vérifier le mode sombre des 12 SVG)*
- [ ] `jalons` — `jalons-generique`, `jalons-station-meteo`
- [ ] `wbs` — `wbs-generique`, `wbs-station-meteo`
- [ ] `retroplanning` — `retroplanning-generique`, `retroplanning-station-meteo`
- [ ] `gantt` — `gantt-generique`, `gantt-station-meteo` ⚠ densité 6×15 sem. sur mobile
- [ ] `matrice-de-risques` — `matrice-de-risques-generique`, `-station-meteo` ⚠ légende station-meteo
- [ ] `matrice-de-decision` — `matrice-de-decision-generique`, `-station-meteo` ⚠ densité du tableau

### PROJ — analyse fonctionnelle
- [ ] `fast` — `fast-generique`, `fast-bras-3-axes`
- [ ] `mind-map` — `mind-map-generique`, `mind-map-bras-3-axes`
- [ ] `decomposition-fonctionnelle` — `-generique`, `-bras-3-axes`, `-bras-mauvais`, `-bras-moyen` ⚠ arbo 3-axes 920×500 (vigilance mobile) + triptyque côte à côte

### MME
- [ ] `optimisation-mecanique` — `optimisation-mecanique-generique`

### EEE — alimentation
- [ ] `alimentation-electronique` — `-regulation`, `-masses`, `-bras-3-axes`

### EEE — mesure / PCB
- [ ] `multimetre` — `multimetre-serie-parallele` ⚠ **géométrie du circuit série/parallèle EN PRIORITÉ**, lisibilité smartphone
- [ ] `instruments-de-mesure` — `instruments-de-mesure-confrontation`
- [ ] `pcb` — `pcb-flux`

### EEE — datasheet / schéma / tension
- [ ] `lire-une-datasheet` — `-generique`, `-l298n` ⚠ **sens des 2 flèches de rotation moteur** sur le L298N
- [ ] `analyse-de-schema-electronique` — `analyse-de-schema-generique`, `-exemple`
- [ ] `niveaux-de-tension` — `-generique`, `-adaptation` ⚠ rouge danger `#B23A2E` → vérifier la variante sombre `#E0705F` lisible

### EEE — microcontroleur / bus / sans-fil
- [ ] `microcontroleur` — `microcontroleur-architecture`
- [ ] `bus-de-communication` — `bus-de-communication-topologies`
- [ ] `techno-sans-fil` — `techno-sans-fil-comparaison`

### EEE — GPIO & concepts MCU
- [ ] `gpio` — `gpio-modes`, `gpio-flottant`, `gpio-courant-max` ⚠ `#B23A2E` en sombre
- [ ] `interruption` — `interruption-chronogramme`
- [ ] `timer` — `timer-compteur`
- [ ] `programmation-non-bloquante` — `programmation-non-bloquante`

### EEE — algorithme *(générique + triptyques)*
- [ ] `logigramme` — `logigramme-generique` + `-thermostat-bon` / `-mauvais` / `-moyen`
- [ ] `machine-a-etats` — `machine-a-etats-generique` + `-portail-bon` / `-mauvais` / `-moyen`
- [ ] `grafcet` — `grafcet-generique`, `grafcet-percage`
- [ ] `chronogramme` — `chronogramme-generique`, `chronogramme-pwm`

### EEE — langage / firmware / bits
- [ ] `cpp-execution` — `cpp-execution-cycle`
- [ ] `cpp-portee` — `cpp-portee-locale-globale`
- [ ] `firmware` — `firmware-architectures`
- [ ] `manipulation-de-bits` — `manipulation-de-bits-masquage`

### EEE — simulation
- [ ] `simulation-electronique` — `simulation-electronique-cycle`, `-lecture-courbe`

### EEE — familles MCU
- [ ] `esp32-deep-sleep` — `esp32-deep-sleep-reveil`
- [ ] `esp32-freertos` — `esp32-freertos-ordonnancement`
- [ ] `stm32` (hub) — `stm32-abstraction-couches` ⚠ lisibilité des axes/boîtes sur mobile
- [ ] `stm32-cubemx` — `stm32-cubemx-flux`
- [ ] `teensy-audio` — `teensy-audio-flux` ⚠ chaîne/fan-out sur mobile
- [ ] `teensy-usb` — `teensy-usb-personnalites` ⚠ fan-out sur mobile
- [ ] `raspberry-pi` (hub) — `raspberry-pi-mcu-vs-sbc`
- [ ] `raspberry-pi-gpio` — `raspberry-pi-gpio-pile`
- [ ] `raspberry-pi-projet` — `raspberry-pi-architecture-bicephale`

### MicroPython
- [ ] `micropython` (hub, section ## Pourquoi) — `micropython-modele-execution`
