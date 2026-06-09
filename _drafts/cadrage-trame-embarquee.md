# Cadrage — Trame « Système embarqué » (réalisation du sous-système embarqué)

> Brief de production (session dédiée). Décidé le 09/06 en clôture de la
> relecture des trames du V. Document de travail privé (hors site).

## Décision

Ajouter une **trame de méthodologie de réalisation** côté Système embarqué,
en **restructurant `content/fiches/eee/index.md`** (le hub de la branche
« Système embarqué ») pour qu'il *devienne* une colonne linéaire — comme
`hub/index` *est* la trame du cycle en V pour la branche Conduite de projet.

- **Nature** : méthodo de réalisation. La trame répond à « où j'en suis » et
  « quoi faire ensuite » quand l'étudiant construit le sous-système embarqué
  de son projet. Pas un cours d'apprentissage projet-agnostique.
- **Fil rouge** : **bras 3 axes** (le même projet que les trames du V — deux
  lentilles sur un seul projet).
- **Placement** : **restructuration de `eee/index`**. Le catalogue actuel des
  familles MCU + notions devient une **section** (ou sous-page) du hub ; la
  colonne linéaire passe au premier plan.

## Principe directeur — orthogonalité au cycle en V

Le piège à éviter : refaire un 2ᵉ cycle de vie projet (revues, jalons, BOM,
validation) → duplication du V, confusion « deux projets ». La trame embarquée
**délègue TOUT le management au V par liens** et reste un « comment faire
l'ingénierie embarquée ».

- Cycle en V (`hub/index`) = colonne **gestion de projet** — axe temporel.
- Trame embarquée (`eee/index`) = colonne **ingénierie embarquée** — axe
  technique.

Discipline : si la trame se met à porter des revues / BOM / jalons, elle clone
le V en moins bien. Tenir la frontière.

## Colonne candidate (7 étapes) — enfile les fiches existantes

1. **Cadrer le besoin embarqué** — quelles fonctions techniques l'élec/info
   doit assurer. ↗ `decomposition-fonctionnelle`, `concept` (V).
2. **Choisir le matériel** — MCU vs SBC, famille. ↗ `microcontroleur`, les
   hubs familles (`arduino`/`esp32`/`stm32`/`teensy`/`esp8266`/`pic`),
   `raspberry-pi`, `alimentation-electronique`.
3. **Concevoir l'électronique** — schéma, niveaux, alim, PCB. ↗
   `analyse-de-schema-electronique`, `niveaux-de-tension`, `pcb`,
   `simulation-electronique`.
4. **Programmer** — langage + périphériques. ↗ `cpp` / `micropython-langage`,
   GPIO / ADC / PWM, `firmware`.
5. **Faire communiquer** — bus & sans-fil. ↗ `bus-de-communication`,
   `techno-sans-fil`.
6. **Fiabiliser & déboguer** — interruptions, timers, watchdog, deep-sleep. ↗
   fiches ingénieur des familles + `instruments-de-mesure`,
   `debugger-embarque`.
7. **Intégrer & tester** — banc, validation. ↗ `integration-et-tests` (V).

Mapping sur les phases du V : 1 ↔ concept, 3-6 ↔ dossier technique,
7 ↔ intégration.

## Sous-questions à trancher au démarrage de la session de production

- **Forme des 7 étapes** : H2 dans `eee/index` avec liens (comme les 5 phases
  du hub Conduite) — *a priori* oui — ou fiches-étapes dédiées ?
- **Sort du catalogue familles** : section « Choisir sa plateforme » à
  l'étape 2, ou sous-page séparée laissée en référence ?
- **Jonction avec le V** : comment matérialiser les renvois (callout `[!info]`
  « ce volet est piloté par la phase X », liens en tête / pied) sans réécrire
  le management ?
- **Fil rouge** : où injecter le bras 3 axes (un fil continu d'étape en étape,
  ou un exemple par étape) ?
- **AA** : la trame porte-t-elle un critère (PROJ/5 ?) ou reste-t-elle
  `aa: []` (méta-structure, comme `hub/index`) ?
- **Nom / titre de branche** : garder « Système embarqué », ajuster le
  sous-titre pour signaler la colonne.

## Conventions mobilisées

C60 (3 branches), C61 (callout livrable à lien intégré — transposable),
C18 (mini-hub), C20 (multi-couverture), C47 (parcours autonome). Production
hors relecture (tâche neuve) — cadrage D déjà validé, donc exécution possible
en A / D au fil.
