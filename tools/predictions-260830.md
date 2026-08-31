# PRÉDICTIONS — 30/08, APRÈS LE CHANTIER DE TRADUCTION (séances 11 et suivantes)

> Coupe C128 du 30/08 (séance 12), à la frontière du chantier de
> traduction. Les séances 1 à 10 du 30/08 — lots 7 à 14 — sont dans
> `tools/predictions-260830-chantier.md`.

# SÉANCE 11 DU 30/08 — BILAN DE CHANTIER, FILE D'ARBITRAGES, SUITE DU DÉPÔT

> **Ce n'est pas un lot.** Le corpus est fermé depuis la séance 10
> (242 / 242 fiches, 291 261 / 291 261 mots, `RESTANT A TRADUIRE` 0, dette 0,
> 0 cible morte). Première séance du dépôt qui n'est ni un lot de traduction
> ni un correctif d'arbitrage de lot. **La numérotation des blocs se
> poursuit : ce fichier reprend au bloc 134.**

## En-tête de séance

- **Séance** — 30/08, **onzième**, PC perso, modèle **Opus 5**.
- **Objet** — les quatre points du brief de la ligne « Prochaine session » de
  l'entrée du 30/08 (suite 10), dans son ordre : (1) **bilan du chantier**,
  quatorze lots et quinze séances, ce que le protocole a produit comme règles
  et ce qu'il a coûté, avec instruction de **C116 (7) tombée trois fois dans
  la dernière soirée** — règle mal formulée ou mal outillée ; (2) la **file
  d'arbitrages**, jamais drainée depuis le 29/08 (suite 5), **dix-huit
  entrées**, à commencer par le **seau symétrique `C109 supprimees en EN`** ;
  (3) la **cause du foisonnement négatif du lot 14** — mesure, pas décision ;
  (4) **ce qui vient après la traduction**.
- **Régime** — sous-règle C116 (« exécution directe ») et ses termes (1) à
  (9), C118, C119, C120, C121, C124, C130, C131 et son amendement du 29/08
  (suite 8).

⚠ **POINT DE SURFACE, REMONTÉ ET NON TRANCHÉ SEUL.** Le brief C129 de la
suite 10 envoie cette séance en **chat Desktop** et écrit que « la session
Code cesse d'écrire sur le dépôt à sa clôture ». Le prompt de lancement
reprend la règle d'écrivain unique **au passé** : « la session Code **a
cessé** d'écrire ».
**Lecture retenue, et elle est écrite avant d'agir** : la plume est *libre*,
non *interdite*. La séance 10 l'a rendue à sa clôture — `HEAD a421335`
commité et poussé, arbre propre —, aucun autre écrivain n'est actif, et les
points (2) et (3) du brief demandent l'un des correctifs d'outil, l'autre une
mesure : ni l'un ni l'autre n'est exécutable sans écrire.
**Ce que la lecture engage** : cette séance écrit dans `tools/` (ce fichier,
les copies C124, les correctifs d'outil proposés en diff) et **n'écrit rien
dans `content/`**, ni dans `JOURNAL.md`, `conventions.md`, `TODO.md`,
`BACKLOG.md`, avant réponse de Tim.
**Coût de revert si la lecture est fausse** : les appends à ce fichier et les
copies datées de la batterie. **Zéro octet dans `content/`.**

## Déclaration C131 d'ouverture — bloc 134

- **Population du compteur `fichiers modifies non commites`** : entrées de
  `git status --porcelain` sur **tout le dépôt**, lues à l'**étape 1** de
  `batterie.ps1`, donc **après** la copie C124 de l'étape 0. Le second
  chiffre, `hors artefacts de seance`, retire les entrées dont la ligne porte
  `batterie-sortie` **ou** `predictions-` (filtre lu dans le code, ligne
  `$saleHors`, et non dans la ligne d'affichage).
- **Artefacts déjà versés par cette séance au moment de la lecture — deux, et
  ils sont nommés** :
  1. `tools/predictions-260830.md`, **modifié** par le présent append —
     entrée ` M`, filtrée par `predictions-` ;
  2. `tools/batterie-sortie-3008b65.txt`, **créé** par l'étape 0 — entrée
     `??`, filtrée par `batterie-sortie`.
- **Total impliqué : 2 entrées au total, 0 hors artefacts de séance.**
- **État de départ déclaré** : `HEAD a421335`, arbre **propre**.

## Prédictions — bloc 134, garde de péremption

`powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase garde`

- **P134.1** — `lignes non ASCII dans batterie.ps1 : 0`.
- **P134.2** — `sortie precedente copiee : tools\batterie-sortie-3008b65.txt`.
  Rang **65**, premier libre : `3008b1` à `3008b64` sont occupés dans
  `tools/`, et `tools/batterie-sortie.txt` existe donc la copie a lieu.
- **P134.3** — `date ISO : 2026-08-30`. ⚠ **Branche déclarée** : si l'horloge
  a passé minuit, la sortie rendra `2026-08-31`, **P134.2 devient
  `tools\batterie-sortie-3108b1.txt`**, et ce fichier de prédictions n'est
  plus le bon — il faudra ouvrir `tools/predictions-260831.md`. **L'heure
  n'est pas prédite** : aucune mesure du jour ne la borne.
- **P134.4** — `HEAD git : a421335` suivi d'une date ISO du **2026-08-30**.
  Le hash court est lu dans l'instantané `git status` d'ouverture de session,
  il n'est pas reporté d'une clôture.
- **P134.5** — `fichiers modifies non commites : 2   (hors artefacts de
  seance : 0)`, exactement les deux entrées nommées ci-dessus.
- **P134.6** — `node : v24.15.0`.
- **P134.7** — `JOURNAL.md` : date **2026-08-30**, heure **postérieure à
  21:44:45**. Motif : le relevé `3008b64` a été figé à 21:44:45, **avant**
  l'écriture de la clôture §7 de la séance 10 ; l'heure 20:04:11 qu'il porte
  est donc périmée par construction et son dépassement **n'est pas une
  anomalie**.
- **P134.8** — `conventions.md` : date **2026-08-30**, heure **postérieure à
  20:02:19**, même motif (sept entrées de §8 écrites après le relevé).
- **P134.9** — `TODO.md` : **`2026-08-29 21:48:08`**, inchangé au caractère.
- **P134.10** — **aucune ligne de fiche** : la phase `garde` est lancée sans
  `-Fiches` ni `-FichesEn`, la boucle `foreach ($f in ($Fiches + $FichesEn))`
  n'imprime rien.
- **P134.11** — **exactement deux étapes** dans la sortie (0 et 1), chacune
  fermée par `--- code de sortie : 0` ; les blocs `cadrage` et `etat` sont
  gardés par `if ($Phase -eq ...)`.

**Critère d'arrêt du bloc** : un `HEAD` autre que `a421335`, une entrée de
`git status` autre que les deux nommées, ou une date d'écriture postérieure
sur `TODO.md` ⇒ **arrêt, rien d'écrit, remontée à Tim**.

### Bilan du bloc 134 — garde de péremption

**11 prédictions, 11 tenues, 0 réfutée.** Constats : `lignes non ASCII 0` ;
`copiee : tools\batterie-sortie-3008b65.txt` ; `date ISO 2026-08-30`, heure
**22:34:18** (la branche minuit ne s'est pas ouverte, ce fichier reste le
bon) ; `HEAD git : a421335 2026-08-30 22:29:20 +0200` ; `2   (hors artefacts
de seance : 0)` ; `node v24.15.0` ; `JOURNAL.md 21:54:08` et
`conventions.md 21:53:03`, tous deux postérieurs au relevé `3008b64` comme
prédit ; `TODO.md 2026-08-29 21:48:08` inchangé au caractère ; aucune ligne
de fiche ; deux étapes, deux `code de sortie : 0`.
**Garde AU VERT, aucun état inattendu.**

---

## Prédictions — bloc 135, écriture de `tools/decompo-registre.mjs`

**Objet (point 3 du brief)** : la cause du foisonnement négatif du lot 14 est
déclarée **inconnue** au JOURNAL, après que l'hypothèse des libellés a été
**mesurée fausse** (0,13 point sur 3,8). Le brief dit : mesure, pas décision.
**Ce que l'outil mesure** : la décomposition du foisonnement FR→EN sur **deux
axes orthogonaux**, chacun formant une **partition exacte** du total C110.
1. **Registre de ligne** — `titre`, `tableau`, `callout` (ligne à chevron),
   `liste`, `paragraphe`.
2. **Construit de texte** — `alt d'embed`, `chemin d'embed`,
   `cible de wikilink`, `libellé de wikilink`, `code inline`, `prose nue`.
Chaque catégorie sort avec sa **contribution en points** au delta total, de
sorte que la somme des contributions **soit** le foisonnement du lot.

**Autocontrôle intégré, et c'est lui la garde C110** : le total de chaque
partition est comparé fiche par fiche à `compterMots` de `compter-mots.mjs`,
importé et non réimplémenté. Un écart non nul sur une seule fiche est un
**défaut d'outil**, publié comme tel.

**Échantillon C110 nommé, choisi pour ce qui peut faire mordre à tort** :
`en/embarque/pcb/pcb-en.md` (wikilink à **pipe échappé** dans une ligne de
tableau, le défaut du lot 13), `content/embarque/pcb/easyeda.md` (la plus
grosse fiche, callouts, embeds, blocs clôturés en marge),
`content/embarque/mcu/xiao/xiao-prise-en-main.md` (fences **en marge
gauche**, cas `ded` du lot 14). L'autocontrôle de partition les couvre toutes
les trois **et les 481 autres**.

- **P135.1** — le fichier créé est `tools/decompo-registre.mjs`, **un seul**,
  **aucun** fichier existant modifié ni écrasé. *Règle du 30/08 (séance 10) :
  un nom d'artefact se vérifie contre l'existant avant écriture ; le nom est
  neuf, `ls tools/` ne porte aucun `decompo-registre*`, et le seul
  `decompo-*` du répertoire est `decompo-foisonnement-lot14-3008.txt`.*
- **P135.2** — **0 ligne non ASCII** dans le source (C122).
- **P135.3** — l'outil **n'écrit aucun fichier** : il imprime sur la sortie
  standard, comme `compter-mots.mjs`.
- **P135.4** — il **importe** `compterMots` depuis `./compter-mots.mjs` et ne
  réécrit ni `FRONT_MATTER`, ni `BLOC_CLOTURE`, ni `MOT` — C119 sur du code :
  deux implémentations d'une même règle divergent.

### Déclaration C131 — bloc 135

- **Population** : entrées de `git status --porcelain` sur tout le dépôt.
- **Versements de cette séance après ce bloc, nommés** : (1)
  `tools/predictions-260830.md` ` M`, filtré ; (2)
  `tools/batterie-sortie-3008b65.txt` `??`, filtré ; (3)
  `tools/decompo-registre.mjs` `??`, **non filtré**.
- **Total impliqué : 3 entrées, dont 1 hors artefacts de séance.**

**⚠ RÉVISION DE P135.1 ET P135.4, PUBLIÉE AVANT LE BLOC.** `compter-mots.mjs`
n'exporte que `compterMots(texte)`, qui rend un **nombre** ; il n'exporte pas
le **corps** sur lequel il compte (front matter et blocs clôturés retirés),
et c'est ce corps qu'une décomposition doit découper. Deux issues :
réimplémenter les deux regex dans l'outil neuf — ce que le défaut du 23/08
(suite 4) interdit : deux implémentations conformes à la même phrase
divergent —, ou **exporter le corps depuis le fichier qui porte la règle**.
**Choix : l'export**, trois lignes, aucun changement de comportement, lisible
en diff. La sortie de `compter-mots.mjs` doit être **identique au caractère**
avant et après.
- **P135.1 révisée** — **deux** fichiers touchés : `tools/decompo-registre.mjs`
  créé, `tools/compter-mots.mjs` **modifié** d'un export nommé `corpsC110`.
  Aucun autre.
- **P135.4 révisée** — l'outil neuf importe **`corpsC110` et `compterMots`**
  et ne porte **aucune** des trois regex `FRONT_MATTER`, `BLOC_CLOTURE`,
  `MOT`... **sauf `MOT`**, qu'il doit réappliquer pour situer chaque mot :
  il l'importe donc aussi, sous le nom `MOTIF_MOT`. **Zéro regex de la règle
  C110 recopiée.**
- **P135.5** — `node tools/compter-mots.mjs` rend **`RESTANT A TRADUIRE :
  0 fiches, 0 mots`** et **291 261** mots FR après modification, inchangé.
- **Déclaration C131 révisée — total impliqué : 4 entrées, dont 2 hors
  artefacts de séance** (`decompo-registre.mjs` `??`, `compter-mots.mjs` ` M`).

### Bilan du bloc 135 — écriture de l'outil

**5 prédictions, 5 tenues, 0 réfutée** (P135.1 et P135.4 dans leur version
révisée, publiée avant le bloc). Constats : `tools/decompo-registre.mjs`
créé et `tools/compter-mots.mjs` modifié, **aucun autre fichier touché** ;
**0 ligne non ASCII** ; l'outil n'écrit rien ; `corpsC110`, `MOTIF_MOT`,
`EST_MOT` importés, **zéro regex C110 recopiée** ; `compter-mots.mjs` rend
**291 261 mots FR** et **`RESTANT A TRADUIRE : 0 fiches, 0 mots`**, inchangé.
**Déclaration C131 vérifiée au relevé : 4 entrées, 2 hors artefacts.**

---

## Prédictions — bloc 136, mesure de la cause du foisonnement

`node tools/decompo-registre.mjs --lot embarque/pcb/kicad.md embarque/mcu/xiao/xiao-prise-en-main.md embarque/mcu/xiao/xiao-sense.md`
puis `node tools/decompo-registre.mjs --tout`

- **P136.1** — autocontrôle de partition : **`0 ecart`** sur les **6 fiches**
  du lot et **`0 ecart`** sur les **484 fiches** du corpus.
- **P136.2** — `--lot`, TOTAL : **`2270 mots FR -> 2249 mots EN   -0.9 %`**,
  exactement les chiffres de `tools/decompo-foisonnement-lot14-3008.txt`
  relevés le 30/08 (séance 10). *Deux outils écrits séparément, même objet,
  même date : c'est un contrôle croisé, pas un report.*
- **P136.3** — détail par fiche : `kicad.md` **841 -> 823**,
  `xiao-prise-en-main.md` **670 -> 680**, `xiao-sense.md` **759 -> 746**.
- **P136.4** — axe construit, lot : `cible wikilink` **+** `libelle
  wikilink` = **120 -> 117**, la somme reproduisant la ligne `wikilinks` du
  relevé du 30/08. ⚠ *Si les deux diffèrent, l'un des deux outils est faux et
  c'est un défaut à instruire, jamais un ajustement.*
- **P136.5** — axe construit, lot : `chemin embed`, **delta 0** — les fiches
  EN citent les mêmes fichiers d'image que leurs sources.
- **P136.6** — axe registre, lot : `paragraphe` à écart **positif**, au moins
  **+1,0 %** ; et la plus forte contribution **négative** en points vient de
  **`liste` ou de `tableau`**. *Modèle : l'anglais compose des noms là où le
  français enchaîne des prépositions, et une ligne de liste ou de tableau est
  presque entièrement nominale, quand un paragraphe porte des verbes.*
- **P136.7** — `--tout` : **`242 paire(s)`**, TOTAL **`291261 mots FR ->
  301333 mots EN   +3.5 %`**, identique à `compter-mots --paires` de la
  clôture du lot 14.
- **P136.8** — corpus, `paragraphe` : écart **≥ +4,0 %**.
- **P136.9** — corpus, `tableau` : écart **≤ 0,0 %**.
- **P136.10** — corpus, `chemin embed` : écart dans **[−1,0 %, +1,0 %]**.
- **P136.11** — corpus, `code inline` : écart dans **[−1,0 %, +2,0 %]**.
- **P136.12** — corpus, `alt embed` : écart **négatif**, dans
  **[−5,0 %, 0,0 %]**. *Le lot 13 avait mesuré les 53 `alt` d'`easyeda` à
  −1,3 % quand sa prose faisait +3,1 %.*
- **P136.13** — corpus, `prose nue` : écart **≥ +4,0 %**.
- **P136.14** — sur chaque axe, la ligne `SOMME` rend la **même
  contribution totale** que le foisonnement du TOTAL, à **0,01 pt** près.

### Déclaration C131 — bloc 136

- **Population** : entrées de `git status --porcelain` sur tout le dépôt.
- **Versements après ce bloc** : les quatre déjà nommés, plus **deux sorties
  C124 datées et nommées PAR LEUR LOT** (règle du 30/08, séance 10) :
  `tools/decompo-registre-3008s11-lot14.txt` et
  `tools/decompo-registre-3008s11-tout.txt`. Aucun des deux n'existe :
  `ls tools/decompo-*` ne rend que `decompo-foisonnement-lot14-3008.txt`.
- **Total impliqué : 6 entrées, dont 4 hors artefacts de séance.**

### Bilan du bloc 136 — décomposition du foisonnement

**14 prédictions, 9 tenues, 5 réfutées.**
**Tenues** : P136.1 (`0 ecart` sur 6 fiches **et** sur 484 — les deux
partitions se referment), P136.2 (`2270 -> 2249  -0.9 %`, **au chiffre** du
relevé du 30/08 écrit par un autre outil), P136.3 (841→823, 670→680,
759→746), P136.4 (**37 + 83 = 120 → 37 + 80 = 117**, contrôle croisé fermé),
P136.5 (`chemin embed` 10 → 10), P136.7 (`242 paire(s)`,
`291261 -> 301333  +3.5 %`), P136.10 (`chemin embed` **+0,0 %**), P136.11
(`code inline` **−0,2 %**), P136.14 (lot −0,93 pt pour −0,9 % ; corpus
+3,46 pt pour +3,5 %).
**Réfutées, et les quatre dernières le sont dans le même sens** :
- **P136.6** — `paragraphe` du lot prédit **≥ +1,0 %**, mesuré **+0,0 %**
  (**1 162 → 1 162, au mot**). *Le second terme, lui, tient : la plus forte
  contribution négative est bien `liste`, à −1,37 pt.*
- **P136.8** — `paragraphe` du corpus prédit **≥ +4,0 %**, mesuré **+3,3 %**.
- **P136.9** — `tableau` du corpus prédit **≤ 0,0 %**, mesuré **+2,2 %**.
- **P136.12** — `alt embed` du corpus prédit **négatif**, mesuré **+0,4 %**.
- **P136.13** — `prose nue` du corpus prédit **≥ +4,0 %**, mesuré **+3,9 %**.

⚠ **CE QUE LES QUATRE RÉFUTATIONS DISENT ENSEMBLE, ET C'EST LA RÉPONSE AU
POINT 3 DU BRIEF.** J'avais prédit un corpus **hétérogène** — des registres
qui foisonnent fort et d'autres qui rétrécissent, le foisonnement d'un lot
n'étant alors que son **mélange**. **Mesure : le corpus est homogène.** Les
cinq registres tiennent dans une bande de **+2,2 % à +6,7 %**, les six
construits de **−0,2 % à +0,9 %** hors `prose nue` à **+3,9 %** ; **aucune
catégorie du corpus n'est structurellement négative**, `alt` compris —
l'observation d'`easyeda` au lot 13 (−1,3 % sur 53 `alt`) était **locale à
cette fiche** et ne se généralise pas.
**Donc le lot 14 n'est pas un effet de mélange, et la cause est locale** :
son registre `liste` sort à **−3,9 %** contre une norme de corpus à
**+3,7 %**, soit **7,6 points d'écart**, sur une catégorie qui pèse **35,3 %
du lot contre 20,5 % du corpus**. Les deux termes se composent, mais c'est
le second qui décide : à mélange égal et lists au taux du corpus, le lot
sortirait à **+2,0 %** environ, pas à −0,9 %.
✅ **La cause est désormais localisée dans un objet fini et lisible : les
802 mots de liste des trois fiches, qui en perdent 31.** ⚠ *Et une seconde
anomalie sort du même relevé sans avoir été cherchée : le `paragraphe` du
lot fait **+0,0 %** contre +3,3 % au corpus — 1 162 mots des deux côtés,
au mot près.*

### Déclaration C131 vérifiée — bloc 136

Six entrées attendues, six relevées ; les deux sorties C124 sont écrites sous
`decompo-registre-3008s11-lot14.txt` et `decompo-registre-3008s11-tout.txt`,
**nommées par leur lot et leur séance**, conformément à la règle née de
l'incident du 30/08 (séance 10).

---

## Prédictions — bloc 137, nommer la cause dans les 802 mots de liste

Outil jetable (C114) `tools/lignes-liste-3008s11.mjs` : pour les trois
paires, il extrait les **lignes de registre `liste`** dans l'ordre du
fichier, avec la **même fonction de classement** que `decompo-registre.mjs`,
et les apparie **par rang**.

- **P137.1** — le **nombre de lignes de liste est égal en FR et en EN** dans
  chacune des trois paires. *Le chantier reporte un pour un ; une inégalité
  serait un défaut de traduction non détecté par les six contrôles de
  clôture, donc à remonter.*
- **P137.2** — la **somme des deltas par ligne vaut exactement −31**, le
  delta du registre `liste` du bloc 136. *Contrôle de bouclage : si l'appariement
  par rang est faux, la somme reste juste mais les lignes seront absurdes ;
  si l'extraction est fausse, la somme rate.*
- **P137.3** — les **trois lignes les plus perdantes cumulent au moins 15**
  des 31 mots perdus, c'est-à-dire que la perte est **concentrée** et non
  diffuse sur toutes les lignes.
- **P137.4** — le fichier créé est le seul, et `ls tools/lignes-*` ne rend
  **rien** avant le bloc. **Total C131 impliqué : 8 entrées, dont 6 hors
  artefacts de séance** (le script, sa sortie datée `lignes-liste-3008s11.txt`,
  plus les six déjà nommées moins les deux filtrées).

### Bilan du bloc 137 — les 802 mots de liste, ligne à ligne

**4 prédictions, 3 tenues, 1 réfutée.** P137.1 tenue (**20/20, 13/13, 9/9**,
report un pour un vérifié) ; P137.2 tenue (**−31**, bouclage exact avec le
registre `liste` du bloc 136) ; P137.4 tenue.
**P137.3 réfutée** : les trois lignes les plus perdantes cumulent **−13** et
non « au moins 15 ». ⚠ *Et la réfutation porte le fait : **la perte n'est pas
concentrée**. Sur 42 lignes appariées, **20 perdent, 12 gagnent, 10 ne bougent
pas** ; l'écart est un **régime diffus**, pas un accident local.*

✅ **LA CAUSE EST NOMMÉE, ET ELLE EST LISIBLE SUR PIÈCE.** Les lignes
perdantes sont des **gloses nominales**, et ce qu'elles perdent est toujours
la même construction : **la chaîne génitive française rendue par un composé
anglais ou un génitif saxon**.
- `le hub de la carte` **4** → `the board's hub` **3** ; `mise en œuvre`
  **3** → `use` **1** — la ligne passe de **13 à 9** mots, et elle sort deux
  fois, dans deux fiches différentes.
- `le bus de réglage de la caméra` **6** → `the camera's control bus` **4**.
- `de la détection de son ou de mots-clés` **8** → `sound or keyword
  detection` **4**.
- `une ligne de sélection` **4** → `a chip select line` **4**, mais
  `les CS` → `the chip selects`, etc.
Et **les lignes gagnantes sont verbales** : `Basculer dans Pcbnew — importer
la netlist…` **+3**, `Sélectionner la carte et le port…` **+3**.
⚠ *Donc le registre n'est pas la vraie variable : **c'est la densité
nominale de la ligne**. Le corpus a des listes qui foisonnent (+3,7 %) parce
que ses items sont majoritairement des **phrases à verbe** ; le lot 14 a des
listes qui rétrécissent parce que les siennes sont des **inventaires de
périphériques et de menus**, presque entièrement nominaux.*

---

## Prédictions — bloc 138, du fait mesuré à une loi mesurable

L'hypothèse sortie du bloc 137 est testable sur **tout le corpus** : si la
cause est la chaîne génitive, alors **la densité de marqueurs de génitif dans
la source FR doit prédire le foisonnement de sa jumelle**. Outil jetable
`tools/genitif-3008s11.mjs`, 242 paires, un point par paire.

**Motif, et son échantillon C110 nommé.** Marqueur de génitif = jeton égal à
`de`, `du` ou `des` (variante **stricte**), ou commençant par `d'` / `d’`
(variante **large**). ⚠ *Le jeton est celui de `MOTIF_MOT`, qui **inclut
l'apostrophe** : `d'un` est **un** jeton, pas deux.* L'échantillon est
`embarque/mcu/xiao/xiao-sense.md` (dense en gloses nominales) et
`embarque/pcb/easyeda.md` (la plus grosse, prose de tutoriel), et **le script
imprime les quinze formes en `d'` les plus fréquentes** pour que les **faux
positifs adverbiaux** soient lisibles au lieu d'être supposés.

- **P138.1** — corrélation de Pearson entre densité de génitif (stricte, pour
  100 mots) et foisonnement, sur les 242 paires : **négative, r ≤ −0,30**.
- **P138.2** — le **décile le plus dense** en génitifs a un foisonnement moyen
  **inférieur d'au moins 2,0 points** à celui du **décile le moins dense**.
- **P138.3** — les **trois fiches du lot 14 sont toutes au-dessus de la
  médiane** de densité.
- **P138.4** — le relevé des formes en `d'` contient **au moins un faux
  positif adverbial nommé** — `d'abord` ou `d'ailleurs`.
- **P138.5** — **Total C131 impliqué : 10 entrées, dont 8 hors artefacts de
  séance** (le script et sa sortie `genitif-3008s11.txt` s'ajoutent aux huit).

### Bilan du bloc 138 — l'hypothèse promue en loi de corpus est MESURÉE FAUSSE

**5 prédictions, 2 tenues, 3 réfutées.**
- **P138.1 réfutée, et largement** : r prédit **≤ −0,30**, mesuré **−0,029**
  (variante stricte) et **+0,011** (variante large). *Il n'y a pas de
  corrélation ; il n'y a pas non plus de corrélation faible ; il n'y a rien.*
- **P138.2 réfutée** : décile le plus dense **+4,35 %**, décile le moins
  dense **+5,02 %** — **0,67 point** d'écart, et la série des dix déciles
  **n'est pas monotone** (5,02 / 3,71 / 3,97 / 3,77 / 3,60 / 3,49 / 3,75 /
  4,74 / 2,51 / 4,35).
- **P138.3 réfutée** : `xiao-prise-en-main` est **au-dessous** de la médiane
  (densité 4,18, rang 61/242) et c'est pourtant la seule des trois à
  foisonner **positivement**. *La fiche la plus dense du lot, `kicad` à 6,90,
  est aussi la plus négative — mais `deee.md` à 8,75 rend −0,6 % quand
  `impression-3d.md` à 9,84 rend +6,7 %.*
- **P138.4 tenue** : les faux positifs adverbiaux sortent nommés et comptés —
  `d'abord` **79**, `d'où` **51**, `d'autres` **42**, `d'être` **37**.
- **P138.5 tenue** : 10 entrées relevées, 8 hors artefacts.

⚠⚠ **CE QUE ÇA VEUT DIRE, ET C'EST À PORTER TEL QUEL.** Le mécanisme est
**lisible sur pièce** au bloc 137 — six lignes montrent la chaîne génitive
qui rétrécit — et **il n'explique rien à l'échelle de la fiche**. Les deux
constats ne se contredisent pas : *un effet qui vit sur une construction se
**dilue** dans un agrégat de 1 200 mots où tout le reste foisonne à +3,5 %.*
✅ *Le motif du 30/08 (séance 10) se rejoue à l'identique et il faut le
dire : **l'hypothèse a été mesurée fausse au lieu d'être plaidée**, pour la
deuxième fois sur la même question.*

---

## Prédictions — bloc 139, le même test à l'échelle où l'effet vit

Si l'effet vit sur la **ligne** et se dilue dans la **fiche**, alors le même
test conduit **ligne à ligne** doit mordre. Outil jetable
`tools/genitif-ligne-3008s11.mjs` : appariement des lignes **par rang** dans
les paires dont les deux corps ont **le même nombre de lignes**, seaux de
densité génitive, foisonnement **agrégé par seau** (pondéré par les mots, non
par les lignes).

- **P139.1** — **au moins 80 %** des 242 paires ont un nombre de lignes
  **égal** FR/EN. *Le chantier reporte un pour un ; c'est la même prédiction
  que P137.1, à l'échelle du corpus.*
- **P139.2** — le seau **« 0 génitif »** foisonne **plus** que le seau
  **« ≥ 9 pour 100 mots »**, d'au moins **3,0 points**.
- **P139.3** — le seau le plus dense foisonne **négativement**.
- **P139.4** — Pearson ligne à ligne (densité, écart relatif) sur les lignes
  d'au moins **10 mots FR** : **négatif, r ≤ −0,10**.
- **P139.5** — **Total C131 : 12 entrées, dont 10 hors artefacts.**

### Bilan du bloc 139 — le test à l'échelle de la ligne, et il MORD

**5 prédictions, 4 tenues, 1 réfutée.** P139.1 tenue (**233 paires alignées
sur 242, 96,3 %**, les 9 écartées nommées) ; P139.2 tenue et **au double de
la borne** (0 génitif **+6,89 %** contre **+0,63 %** au seau le plus dense,
**6,26 points**) ; P139.4 tenue (**r = −0,188** sur **7 450** lignes d'au
moins 10 mots) ; P139.5 tenue (12 entrées, 10 hors artefacts).
**P139.3 réfutée** : le seau le plus dense rend **+0,63 %** et non un
foisonnement négatif. *Même à densité génitive supérieure à 9 pour 100 mots,
l'anglais gagne encore un demi-point : le génitif freine le foisonnement, il
ne l'inverse pas à lui seul.*

✅✅ **ET LA SÉRIE EST MONOTONE SUR LES CINQ SEAUX, CE QUI N'ÉTAIT PAS
PRÉDIT** : **+6,89 / +3,92 / +3,49 / +2,00 / +0,63**, sur **270 857 mots FR**
couverts. *L'effet que le bloc 138 ne trouvait pas à l'échelle de la fiche
existe et il est fort — il était **dilué**, pas absent : la densité génitive
d'une fiche tient dans une bande étroite (3,2 à 7,5 pour 100 mots) quand
celle d'une ligne va de 0 à plus de 9.*

⚠ **CE QUE ÇA RÈGLE, ET C'EST LA RÉPONSE COMPLÈTE AU POINT 3 DU BRIEF.**
1. **Le lot 14 n'a rien d'anormal** : ses listes sont des **gloses
   nominales** à forte densité génitive, donc à foisonnement quasi nul par
   construction ; le lot pèse 35,3 % de son volume dans ce registre contre
   20,5 % au corpus.
2. **La cause n'est ni le registre ni le mélange de registres** — le corpus
   est homogène par registre (+2,2 % à +6,7 %) — **c'est la densité génitive
   de la LIGNE**, et elle est mesurable **avant** de traduire, sur la source
   FR seule.
3. **Les échecs répétés de prédiction du foisonnement s'expliquent** : lots
   13 et 14 prédisaient à l'échelle de la fiche ou du registre, **où le signal
   est dilué**. *Une prédiction de foisonnement se fait désormais sur la
   distribution des lignes de la source, jamais sur un taux moyen de lot.*

---

## Prédictions — bloc 140, les chiffres du bilan de chantier (point 1)

Outil jetable `tools/bilan-chantier-3008s11.mjs` : il mesure ce que les
quinze séances ont **produit** et ce qu'elles ont **coûté**, en lisant le
dépôt et son historique git, jamais un chiffre reporté.

**Motif et échantillon C110.** Le rendement de prédiction se lit sur les
lignes `**Bilan de prédiction**` du JOURNAL. Le script **imprime les lignes
captées avec leur date** avant de sommer, pour que ce que le motif attrape
soit lu et non supposé.

- **P140.1** — le motif rend **entre 12 et 18** lignes de bilan de
  prédiction dans `JOURNAL.md`.
- **P140.2** — la somme des prédictions à décompte plein est **entre 900 et
  1 500**, et le taux de tenue global est **entre 88 % et 95 %**.
- **P140.3** — `git log` rend **entre 60 et 130** commits depuis l'ouverture
  du chantier (premier commit du 22/08 portant `content/en/`).
- **P140.4** — `conventions.md` pesait **moins de 300 Kio** à l'ouverture du
  chantier et pèse **563,1 Kio** aujourd'hui, soit un facteur **supérieur à
  1,8**.
- **P140.5** — `tools/` porte aujourd'hui **plus de 200** fichiers et en
  portait **moins de 40** à l'ouverture.
- **P140.6** — la numérotation des conventions est passée de **C109** à
  **C131**, soit **23** numéros, et **au moins 15** d'entre eux sont nés
  pendant le chantier de traduction.
- **P140.7** — **Total C131 : 14 entrées, dont 12 hors artefacts.**

### Bilan du bloc 140 — les chiffres du chantier

**7 prédictions, 4 tenues, 3 réfutées.**
- **P140.1 réfutée, et c'est C110 qui mord** : le motif `Bilan de prédiction`
  rend **3** lignes dans `JOURNAL.md`, pas 12 à 18. *Le JOURNAL ne porte le
  décompte que sous des formes variables et parfois en toutes lettres
  (« Trente-cinq prédictions publiées… trente-trois tenues »).* **Motif
  corrigé en cours de bloc et déclaré dans l'en-tête du script** : la source
  autorisée est le **fichier de la sous-règle C116**, pas le JOURNAL.
- **P140.2 réfutée sur son volume, tenue sur son taux** : **2 833**
  prédictions captées contre une fourchette de 900 à 1 500 ; **88,5 %** de
  tenue, dans la fourchette [88 %, 95 %]. ⚠ **SUR-COMPTAGE CONNU ET DÉCLARÉ**
  — le motif capte **toute** ligne de la forme, récapitulatifs de série
  compris : le fichier du 29/08 porte **40 blocs pour 61 captures**. Le taux
  résiste au sur-comptage (les récapitulatifs recopient les mêmes ratios) ;
  **le volume, non**. *Le contrôle d'addition le dit tout seul : 2 507 + 310
  = **2 817 pour 2 833**, l'écart de 16 étant les « partielles » et les
  « réfutations annulées » que le motif ne compte pas.*
- **P140.3 réfutée de peu** : **56** commits depuis l'ouverture, contre une
  fourchette [60, 130]. *Le premier commit touchant `content/en/` est
  `3ffbec0`, du **22/08**, et c'est la définition opérante de l'ouverture —
  pas une date de mémoire.*
- **P140.4 tenue** : `conventions.md` **231,0 → 563,1 Kio**, facteur
  **2,44** ; `JOURNAL.md` **169,1 → 724,1 Kio**, facteur **4,28** ;
  `TODO.md` ×3,56 ; `BACKLOG.md` ×1,90.
- **P140.5 tenue** : `tools/` **14 fichiers suivis à l'ouverture → 312 à
  HEAD**, 326 sur disque ; scripts **12 → 37** ; **161** sorties de séance
  datées C124 ; les deux fichiers de prédictions pèsent **1 744,3 Kio**.
- **P140.6 tenue, population corrigée** : le script compte les numéros
  **cités** dans `conventions.md` et non les numéros **nés** — d'où `105` et
  `108` dans sa liste, qui sont antérieurs. **Numéros nés pendant le
  chantier : C110 à C131, soit 22**, au-dessus de la borne de 15.
  Entrées de premier niveau au §8 : **196 → 298**, soit **+102**.
- **P140.7 tenue** : **14 entrées, 12 hors artefacts**, relevé conforme.

✅ **CE QUE LE BLOC ÉTABLIT** : le chantier a produit **242 fiches EN**
(`content/en/` **4 → 242** fiches suivies), **22 conventions numérotées**,
**+102 entrées de §8**, **25 scripts neufs**, et a laissé **1 744 Kio de
prédictions** et **161 sorties de mesure datées** pour **56 commits**.
⚠ *Le coût est lisible en un rapport : la trace de pilotage
(`conventions.md` + `JOURNAL.md` + prédictions) a grossi de **887 Kio**
pendant que le corpus publié gagnait **301 333 mots anglais**.*

---

## Prédictions — bloc 141, le seau symétrique `C109 supprimees en EN` (arbitrage 1/18)

**Ce que le défaut est.** `--style` porte `if (nEn > nFr) { creees += … }` : il
voit ce que la traduction **crée**, jamais ce qu'elle **supprime**. Trouvé au
lot 13 sur `easyeda-en`, qui sort à **0** `C109 de prose` là où sa source en
porte **1** — la fiche affichait `0 a reprendre` comme une réussite. Le lot
14 a **contourné le défaut à la main**, par comparaison fiche à fiche des deux
`--style` (3 = 3, 4 = 4, 6 = 6). **Correctif annoncé à deux lignes depuis le
lot 13.**

**Arbitrage pris seul, avec son coût de revert (C116 (8)).** Le compteur neuf
**n'entre pas dans le code de sortie**. *Motif : une suppression n'est pas un
défaut mécanique — le lot 13 a décidé que la virgule d'`easyeda-en` **restait**,
C109 visant le cadratin **tapé en anglais** et l'occurrence française n'étant
gardée qu'au titre de l'exemption C123. En faire un verdict mécanique
changerait ce qu'un verdict mécanique veut dire, ce qui est au-dessus de la
ligne C117.* **Coût de revert : ajouter `|| supprimees` dans l'expression de
`process.exit`, une ligne.**

**Ordre du bloc** : (1) `--style` sur **4 fiches EN** — les trois du lot 14
plus `easyeda-en` — **avant** modification, sortie datée ; (2) édition ;
(3) même lancement **après**, sortie datée ; (4) `git diff`.

- **P141.1** — après modification, le seau neuf rend **1** suppression sur les
  quatre fiches, et **`easyeda-en` est nommée** avec la forme `FR 1 / EN 0`.
- **P141.2** — les **trois fiches du lot 14** rendent **0** suppression :
  la comparaison à la main du 30/08 (séance 10) donnait **3 = 3, 4 = 4,
  6 = 6**, et le correctif doit reproduire ce verdict **sans** intervention.
- **P141.3** — le **code de sortie** de `--style` sur ces quatre fiches est
  **identique avant et après** : le compteur neuf n'entre pas dans
  `process.exit`.
- **P141.4** — les **six lignes de bilan existantes** (`typographie
  francaise`, `virgule ambigue`, `C109 creees en EN`, `C109 de prose`, `hors
  perimetre`, `hors alphabet latin`) sont **inchangées au chiffre** entre les
  deux lancements. *Contrôle avant/après sur le même objet et la même date,
  seule forme qui ne tombe pas sous la borne de C119.*
- **P141.5** — le `git diff` de `creer-fiche-en.mjs` ajoute **au plus
  8 lignes** et n'en retire **aucune**.
- **P141.6** — **Total C131 : 17 entrées, dont 15 hors artefacts** — les 14
  déjà là, plus `creer-fiche-en.mjs` modifié et **deux** sorties datées
  `style-4fiches-3008s11-avant.txt` et `-apres.txt`.

### Bilan du bloc 141 — le seau symétrique

**6 prédictions, 5 tenues, 1 réfutée.** P141.1 tenue (**1** suppression,
`en/embarque/pcb/easyeda-en.md   C109 : FR 1 / EN 0   1 SUPPRIMEE(S) PAR LA
TRADUCTION (a lire)`) ; P141.2 tenue (les trois fiches du lot 14 ne sortent
pas — le correctif **reproduit sans intervention** le verdict que la séance 10
avait obtenu à la main) ; P141.3 tenue (**code de sortie 0** avant et après) ;
P141.4 tenue (**0 / 1 / 0 / 13 / 3 / 0** identiques aux six lignes d'avant) ;
P141.6 tenue (**17 entrées, 15 hors artefacts**).
**P141.5 réfutée** : **13 lignes ajoutées** et non « au plus 8 ». *Le
correctif **est** de deux lignes de logique et une d'affichage ; les sept
autres sont le commentaire qui dit pourquoi le compteur n'entre pas dans le
code de sortie. La prédiction chiffrait le diff, pas le correctif.*

⚠ **ARBITRAGE PRIS SEUL, À REMONTER (C116 (8))** : le seau neuf **n'entre pas
dans `process.exit`**. **Coût de revert : une ligne** — ajouter
`|| supprimees` à l'expression de sortie.

---

## Prédictions — bloc 142, du constat à un PRÉDICTEUR utilisable

Le bloc 139 rend une échelle monotone sur cinq seaux. Deux entrées du
`BACKLOG` attendent exactement ça : *« le foisonnement ne se classe plus par
famille, et la question est entière »* et *« le déficit de foisonnement de
`cpp/` est désormais SANS CAUSE »*. **Test** : le mélange de seaux de la
**source FR seule** prédit-il le foisonnement de sa jumelle mieux qu'une
constante ? Outil jetable `tools/predicteur-3008s11.mjs`.

**Modèle** : mots FR de la fiche répartis dans les cinq seaux de densité
génitive **de leurs lignes**, puis `EN prédit = Σ mots_seau × (1 + taux_seau)`
avec les taux du corpus mesurés au bloc 139 **et recalculés par l'outil**, pas
recopiés. **Comparé au modèle constant `+3,5 %`.**

- **P142.1** — l'erreur absolue moyenne du modèle à cinq seaux est
  **inférieure** à celle du modèle constant, d'au moins **15 % en relatif**.
- **P142.2** — le modèle prédit **≤ +1,0 %** pour `kicad.md` **et** pour
  `xiao-sense.md`.
- **P142.3** — le module `cpp/` est prédit par le modèle **au-dessous** du
  foisonnement moyen du corpus.
- **P142.4** — au moins **60 %** des 242 fiches ont une **erreur de modèle
  inférieure à 3 points**.
- **P142.5** — **Total C131 : 19 entrées, dont 17 hors artefacts.**

### Bilan du bloc 142 — le prédicteur ne prédit pas

**5 prédictions, 2 tenues, 3 réfutées.**
- **P142.1 réfutée, et lourdement** : gain relatif **1,6 %** contre « au
  moins 15 % ». Erreur absolue moyenne **2,74 point** pour le modèle,
  **2,79** pour la constante.
- **P142.2 réfutée** : le modèle prédit **+2,9 %** pour `kicad` et **+3,4 %**
  pour `xiao-sense`, quand le réel est **−2,1 %** et **−1,7 %**.
- **P142.3 réfutée** : `cpp/` est prédit à **+3,96 %**, **au-dessus** de la
  constante du corpus (+3,46 %), et sort en réel à **+3,30 %**.
- **P142.4 tenue mais vide de sens** : 65,3 % des fiches sous 3 points
  d'erreur — **la constante en fait 62,0 %**.
- **P142.5 tenue** : 19 entrées, 17 hors artefacts.

⚠⚠ **TROISIÈME HYPOTHÈSE MESURÉE FAUSSE SUR LA MÊME QUESTION, ET C'EST LE
RÉSULTAT.** L'effet de ligne du bloc 139 est **réel** — échelle monotone sur
270 857 mots — et **n'a presque aucun pouvoir prédictif à l'échelle de la
fiche**. *La cause est visible dans les chiffres : le modèle ne sort jamais de
la bande **+1,6 % à +5,0 %** quand le réel va de **−6,1 % à +18,2 %**. Le
mélange de seaux **ne varie pas assez entre fiches** pour porter une variance
qui, elle, est énorme.*
**État exact de la question du foisonnement, à porter au BACKLOG tel quel :**
1. ✅ **mécanisme établi à l'échelle de la ligne** (génitif → composé),
2. ✅ **registre `liste` du lot 14 établi comme porteur de son écart**,
3. ❌ **densité génitive de la fiche : sans effet** (r = −0,029),
4. ❌ **mélange de seaux : sans pouvoir prédictif** (gain 1,6 %),
5. ⚠ **la variance de fiche à fiche reste sans cause**, et elle est de
   **24 points d'amplitude**.

---

## Prédictions — bloc 143, les neuf paires dont les corps n'ont pas le même nombre de lignes

Le bloc 139 a écarté **9 paires sur 242** parce que leurs corps C110 ne
portent pas le même nombre de lignes. **Trois d'entre elles perdent entre 37
et 43 lignes en anglais** — c'est visible dans la sortie du bloc 139 et
personne ne l'a instruit. Outil jetable `tools/desalignees-3008s11.mjs`.

- **P143.1** — les paires dont l'**anglais a MOINS de lignes** que le
  français ont toutes un foisonnement **inférieur à +2,0 %**, et celles dont
  l'anglais en a **PLUS** sont toutes **au-dessus de +7,0 %**. *Lu dans la
  sortie du bloc 142 : ecoconception −1,6 %, gestion-de-projet −6,1 %,
  securite-et-qualite −0,4 %, cpp-lire-un-programme et
  micropython-lire-un-programme dans leurs modules ; contre
  decomposition-fonctionnelle +11,7 %, grafcet +9,6 %, machine-a-etats
  +9,4 %, chaine-energie +7,2 %.*
- **P143.2** — `conduite/proj/gestion-de-projet.md` perd **au moins 30
  lignes** de corps et **au moins 5 %** de ses mots en anglais.
- **P143.3** — pour les trois grosses perdantes, le registre qui perd le plus
  de **lignes** est **`liste` ou `tableau`**, pas `paragraphe`.
- **P143.4** — **Total C131 : 21 entrées, dont 19 hors artefacts.**

### Bilan du bloc 143 — les neuf paires désalignées

**4 prédictions, 2 tenues, 2 réfutées.**
- **P143.1 réfutée sur sa moitié basse** : les deux fiches `lire-un-programme`
  perdent **1 et 4** lignes et foisonnent à **+3,39 %** et **+3,56 %**, pas
  « sous +2,0 % ». *La moitié haute tient : les quatre fiches dont l'anglais a
  **plus** de lignes sont toutes au-dessus de +7,0 % — **+11,68 / +9,61 /
  +9,35 / +7,19**, moyenne **+9,46 %** contre **−0,23 %** pour l'autre
  groupe.*
- **P143.2 tenue** : `gestion-de-projet.md` perd **37 lignes** et **6,13 %**
  de ses mots.
- **P143.3 réfutée, et le fait est meilleur que la prédiction** : le registre
  qui perd n'est ni `liste` ni `tableau`, c'est **`paragraphe`, et il perd
  −31, −32, −32 lignes** dans les trois fiches, **pendant que tous les autres
  registres sont égaux au chiffre** — `titre` 10/10, `callout` 22/22,
  `liste` 40/35, 22/20, 24/24.
- **P143.4 tenue** : 21 entrées, 19 hors artefacts.

⚠⚠ **ET CE N'EST PAS UNE PERTE DE CONTENU, C'EST UNE DIVERGENCE DE MISE EN
LIGNE QUE RIEN N'AUDITE.** Trois fiches EN de `conduite/proj/` —
`securite-et-qualite-en`, `ecoconception-en`, `gestion-de-projet-en` — ont
leurs **paragraphes écrits en lignes longues** quand leurs sources sont
**coupées à la main** : 57 lignes de paragraphe FR contre 22 à 25 en anglais,
titres, callouts et listes **identiques au chiffre**. *Aucun contrôle du
chantier ne peut le voir : `--controle` compare des nombres d'embeds et de
liens, `derive-traduction` compare des empreintes de **source**,
`compter-mots` somme des mots, et le nombre de lignes n'est lu nulle part.*
⚠ **Reste un fait séparé et non expliqué** : `gestion-de-projet` sort à
**−6,13 %**, le plus bas du corpus, quand ses deux voisines de même défaut de
mise en ligne sortent à −0,37 % et −1,61 %. **C'est la première fiche à
relire**, et le motif est chiffré.

---

# BILAN GÉNÉRAL — 30/08 (séance 11) : BILAN DE CHANTIER, ARBITRAGES, SUITE

**66 prédictions, 47 tenues, 19 réfutées — 71,2 %**, sur **dix blocs (134 à
143)**, **une garde de péremption au vert**, `HEAD a421335` stable,
**zéro incident, zéro arrêt**, **zéro octet écrit dans `content/`**.

⚠⚠ **LE FAIT DE LA SÉANCE EST DANS LA COUPE DU DÉCOMPTE, ET IL VAUT POUR
TOUT LE CHANTIER.** Les 66 prédictions se coupent en deux populations que le
protocole n'avait jamais séparées :
- **prédictions d'INSTRUMENT** — ce qu'un outil va imprimer, ce qu'un
  `git status` va porter, ce qu'un contrôle croisé va refermer : **35
  prédictions, 34 tenues, 97,1 %**. L'unique réfutée (P141.5) porte sur la
  **taille d'un diff**, pas sur un compteur.
- **prédictions de MONDE** — ce que le corpus va se révéler être : **31
  prédictions, 13 tenues, 41,9 %**.
*C'est le même partage que la séance 10 avait entrevu sans le chiffrer — « le
registre garde sa valeur sur les compteurs de DENSITÉ et la perd sur le SIGNE
du foisonnement ». **Mesuré : le protocole est quasi parfait sur ses
instruments et à peine mieux qu'un tirage sur son objet.** Et c'est
exactement ce qu'on doit attendre de lui : un protocole de prédiction ne rend
pas le monde prévisible, il rend **visible** l'endroit où on croyait savoir.*

**Ce que la séance laisse au dépôt** : **1 correctif d'outil** (le seau
symétrique, arbitrage 1 sur 18, **la prédiction du lot 13 tenue à deux lignes
de logique**), **1 outil de mesure versionnable** (`decompo-registre.mjs`),
**5 outils jetables**, **8 sorties datées**, **3 hypothèses mesurées fausses**
et **1 loi établie à l'échelle de la ligne**.

---

## ARBITRAGE (a) RENDU PAR TIM — 30/08, séance 11, après le bilan général

**« Ok pour amender le terme (2). »** La sous-règle C116, terme (2), passe de
« une prédiction sans nombre ni forme exacte est réputée absente » à sa
version amendée : **une prédiction de COMPTEUR se publie sous la forme de la
LIGNE EXACTE attendue**, telle que l'outil l'imprimera, et non sous la forme
d'un nombre isolé.

*Motif retenu, et il est mesuré ce soir : on ne peut pas écrire la ligne
attendue sans avoir ouvert le code ou une sortie précédente. Le geste que
C116 (7) demandait comme un rappel devient une **condition d'écriture de la
prédiction**. Bloc 134 : 11 lignes littérales prédites, 11 tenues. Séance
entière : 35 prédictions d'instrument, 34 tenues, 97,1 %.*

**Éprouvée 1/N.** ⚠ **L'amendement n'est pas encore écrit dans
`conventions.md`** : cette séance s'est interdit d'écrire dans les fichiers de
pilotage tant que la règle d'écrivain unique n'est pas confirmée. Il fait
partie des trois écritures en attente, avec l'entrée §7 du JOURNAL et la mise
à jour du BACKLOG.

**Arbitrage (b) — non rendu à ce point** : le seau `C109 supprimees en EN`
reste hors du code de sortie, coût de revert une ligne.

---

## Prédictions — bloc 144, garde de péremption avant écriture sur le pilotage

**Première application du terme (2) amendé** (arbitrage (a) rendu ce soir) :
les prédictions de compteur ci-dessous sont écrites **comme les lignes que
l'outil imprimera**, pas comme des nombres.

`powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase garde`

**Motif de la garde** : `HEAD` a bougé sous la séance — le commit de Tim est
passé pendant l'échange, `a421335` → `6dcb912` —, et C116 (5) veut une garde
**avant chaque passe**. Celle-ci précède la première écriture sur les
fichiers de pilotage.

- **P144.1** — `lignes non ASCII dans batterie.ps1 : 0`
- **P144.2** — `sortie precedente copiee : tools\batterie-sortie-3008b66.txt`
  *(rang 66 : `3008b65` a été écrit au bloc 134)*
- **P144.3** — `date ISO : 2026-08-30   heure : 23:xx:xx`. ⚠ **Branche
  déclarée** : si l'horloge passe minuit, `2026-08-31`, et alors P144.2
  devient `tools\batterie-sortie-3108b1.txt`.
- **P144.4** — `HEAD git : 6dcb912 2026-08-30 23:11:12 +0200`
- **P144.5** — `fichiers modifies non commites : 2   (hors artefacts de seance : 0)`
- **P144.6** — `node : v24.15.0`
- **P144.7** — `  JOURNAL.md` … `2026-08-30 21:54:08`, **inchangé au
  caractère** depuis le bloc 134.
- **P144.8** — `  conventions.md` … `2026-08-30 21:53:03`, inchangé.
- **P144.9** — `  TODO.md` … `2026-08-29 21:48:08`, inchangé.
- **P144.10** — deux étapes exactement, chacune fermée par
  `--- code de sortie : 0`.

**Critère d'arrêt** : une date d'écriture postérieure sur l'un des trois
fichiers de pilotage ⇒ un autre écrivain a touché le dépôt ⇒ **arrêt**.

### Déclaration C131 — bloc 144

Population : entrées de `git status --porcelain`. Versements de la séance
encore non commités : `tools/predictions-260830.md` ` M` (filtré) et
`tools/batterie-sortie-3008b66.txt` `??` (filtré). **Total impliqué : 2
entrées, 0 hors artefacts.** *Les dix-neuf artefacts hors filtre des blocs
134 à 143 sont partis dans le commit `6dcb912`.*

### Bilan du bloc 144 — garde

**10 prédictions, 10 tenues, 0 réfutée.** `HEAD git : 6dcb912 2026-08-30
23:11:12 +0200`, `2   (hors artefacts de seance : 0)`, horloge **23:13:58**,
les trois fichiers de pilotage **inchangés au caractère** depuis le bloc 134.
**Garde AU VERT : aucun autre écrivain n'a touché le dépôt.**

---

## Prédictions — bloc 145, normalisation du pilotage avant tout diff

`node tools/normalize-pilotage.js --check`

Ligne de bilan lue **dans le code** (ligne 116 du script), pas dans une
sortie de mémoire :

- **P145.1** — `Mode : CHECK (rapport sans modifier)`
- **P145.2** — `Total : 0 caractere(s) a corriger, 0 fichier(s) modifie(s).`
- **P145.3** — **code de sortie 0**. *Le script sort 1 s'il trouve quoi que
  ce soit ; les dix séances précédentes ont toutes normalisé avant d'écrire,
  donc il ne doit rien rester.*
- **P145.4** — aucune écriture : `git status --porcelain` reste à **2
  entrées**, dont **0 hors artefacts de séance**.

⚠ Si P145.2 est réfutée, **la normalisation réelle passe avant les trois
écritures** et les dates de péremption du bloc 144 sont périmées de son fait
— ce qui est attendu et non un incident.

### Bilan du bloc 145 — normalisation

**4 prédictions, 4 tenues, 0 réfutée.** `Mode : CHECK (rapport sans
modifier)`, `Total : 0 caractere(s) a corriger, 0 fichier(s) modifie(s).`,
code de sortie **0**, `git status` inchangé à **2 entrées, 0 hors artefacts**.
**Aucune normalisation réelle n'est requise : les dates de péremption du bloc
144 restent valides.**

---

## Prédictions — bloc 146, les quatre fragments d'écriture

Les textes à insérer sont écrits dans des **fragments datés et nommés par
leur séance** (règle du 30/08, séance 10 : *un artefact de séance se nomme
par son LOT*), et **aucun fichier de pilotage n'est touché par ce bloc**.
Le fragment porte le français accentué ; l'outil d'insertion, lui, restera
ASCII (C122).

- **P146.1** — **quatre** fichiers créés, aucun modifié :
  `tools/frag-journal-3008s11.md`, `tools/frag-conventions-c116-3008s11.md`,
  `tools/frag-conventions-s8-3008s11.md`, `tools/frag-backlog-3008s11.md`.
  *Vérification préalable du nom contre l'existant (incident du lot 14) :
  `ls tools/frag-*` ne rend rien.*
- **P146.2** — `git status --porcelain` rend **6 entrées**, dont **4 hors
  artefacts de séance**.
- **P146.3** — les quatre fichiers de pilotage gardent leurs dates
  d'écriture du bloc 144 : `JOURNAL.md 2026-08-30 21:54:08`,
  `conventions.md 2026-08-30 21:53:03`, `TODO.md 2026-08-29 21:48:08`.
- **P146.4** — tailles **avant** insertion, mesurées ce soir :
  `conventions.md 563.1 Kio`, `JOURNAL.md 724.1 Kio`, `TODO.md 282.7 Kio`,
  `BACKLOG.md 206.0 Kio`. *C'est l'état de référence contre lequel le bloc
  147 mesurera l'effet des écritures.*

**⚠ RÉVISION DE P146.1 ET P146.2, PUBLIÉE AVANT LA MESURE DU BLOC.** Le
fragment du JOURNAL doit porter la ligne **Tailles**, et C118 exige qu'elle
soit **mesurée après la dernière écriture**. L'écrire maintenant obligerait à
publier les tailles d'avant en les présentant comme celles d'après, ou à
patcher l'entrée après coup — les deux sont exactement ce que la borne de
C119 proscrit. **Les écritures se font donc en deux passes** : conventions et
BACKLOG au bloc 147, **remesure**, puis le fragment du JOURNAL écrit avec les
tailles mesurées et inséré au bloc 148.
- **P146.1 révisée** — **trois** fichiers créés :
  `tools/frag-conventions-c116-3008s11.md`,
  `tools/frag-conventions-s8-3008s11.md`, `tools/frag-backlog-3008s11.md`.
- **P146.2 révisée** — `git status --porcelain` rend **5 entrées**, dont
  **3 hors artefacts de séance**.

### Bilan du bloc 146 — les fragments

**4 prédictions, 4 tenues, 0 réfutée** (P146.1 et P146.2 dans leur version
révisée) : trois fragments créés, **5 entrées / 3 hors artefacts**, les quatre
fichiers de pilotage **inchangés à la seconde**, tailles de référence relevées.

---

## ⚠ INCIDENT DE PROTOCOLE — bloc 147, prédictions manquantes

**Le terme (3) de la sous-règle C116 demande qu'une prédiction manquante se
consigne en incident. En voici une.** L'écriture de `tools/inserer-pilotage.mjs`,
de la table `tools/insertions-3008s11.json` et **le lancement du test négatif
délibéré** ont été faits **sans que les prédictions du bloc 147 soient
publiées d'abord**. *Cause : le geste a été enchaîné à la suite du bloc 146
comme s'il en faisait partie, alors qu'il écrit deux fichiers neufs et lance
un outil.*
✅ **Ce que le test négatif a rendu, consigné après coup et sans être
prédit** : `REFUS : 1 defaut(s). AUCUN FICHIER ECRIT.`, code de sortie **1**,
l'ancre altérée de la première entrée rendant `ancre trouvee 0 fois` **et les
quatre autres entrées restant valides** — ce qui est exactement le mode
tout-ou-rien voulu : le lot tombe sur un seul défaut.
⚠ **Ce résultat ne compte pas au décompte** (il n'a pas été prédit) et le
bloc reprend ci-dessous, prédictions publiées avant exécution.

## Prédictions — bloc 147 (reprise), écriture de conventions et du BACKLOG

- **P147.1** — essai à blanc : `Essai a blanc concluant : 5 entree(s), 0 defaut.`
  puis `AUCUN FICHIER ECRIT. Relancer avec --faire.`, **code de sortie 0**.
- **P147.2** — écriture : `ECRIT : 5 entree(s) dans 2 fichier(s).`, **code de
  sortie 0**, et deux lignes `ecrit` — `conventions.md` et `BACKLOG.md`.
- **P147.3** — tailles **après** : `conventions.md` **569,6 Kio**
  (+6 612 octets) et `BACKLOG.md` **210,3 Kio** (+4 365 octets, soit
  642 + 585 + 3 138) ; `TODO.md` **282,7** et `JOURNAL.md` **724,1**
  **inchangés**.
- **P147.4** — `git status --porcelain` rend **9 entrées**, dont **7 hors
  artefacts de séance** : les trois fragments, `inserer-pilotage.mjs`,
  `insertions-3008s11.json`, `conventions.md` ` M` et `BACKLOG.md` ` M`.
- **P147.5** — `node tools/normalize-pilotage.js --check` rend encore
  `Total : 0 caractere(s) a corriger, 0 fichier(s) modifie(s).` après
  insertion — les fragments n'introduisent ni NBSP, ni ZWSP, ni CRLF.

### Bilan du bloc 147 — écriture de `conventions.md` et de `BACKLOG.md`

**5 prédictions, 4 tenues, 1 réfutée.** P147.1, P147.2, P147.4 (**9 entrées,
7 hors artefacts**) et P147.5 tenues au caractère.
**P147.3 réfutée** : `conventions.md` mesure **571,2 Kio** (584 945 o) et non
569,6 ; `BACKLOG.md` **210,4** et non 210,3. ⚠ *Cause nommée : ma prédiction
n'a compté que le **+6 612** de la deuxième entrée et a **oublié le +1 437**
de la première, l'amendement C116 — alors que les deux étaient dans la même
table. C'est **le défaut du lot 14 rejoué** (« le compteur compte des ancres,
mon 19 comptait des occurrences, et les deux chiffres étaient dans le même
bloc de prédictions »). ✅ **Et l'essai à blanc l'avait affiché avant
l'écriture** : `+1437 octets` était à l'écran, ligne 1 de sa sortie.*
✅ **Le test négatif délibéré et le tout-ou-rien ont fonctionné** : une ancre
altérée, `REFUS : 1 defaut(s). AUCUN FICHIER ECRIT.`, les quatre autres
entrées valides et pourtant non appliquées.

---

## Prédictions — bloc 148, l'entrée §7 du JOURNAL

- **P148.1** — un seul fichier de fragment créé,
  `tools/frag-journal-3008s11.md` ; `ls tools/frag-journal*` ne rend rien
  avant le bloc.
- **P148.2** — table `tools/insertions-journal-3008s11.json`, **une** entrée,
  ancre `<!-- INSERT_JOURNAL_HERE -->`, mode `apres`, **1 occurrence** dans
  `JOURNAL.md`.
- **P148.3** — test négatif délibéré : `REFUS : 1 defaut(s). AUCUN FICHIER
  ECRIT.`, **code de sortie 1**.
- **P148.4** — essai à blanc : `Essai a blanc concluant : 1 entree(s), 0 defaut.`,
  **code de sortie 0**.
- **P148.5** — écriture : `ECRIT : 1 entree(s) dans 1 fichier(s).`, **code de
  sortie 0**.
- **P148.6** — `git status --porcelain` rend **12 entrées**, dont **10 hors
  artefacts de séance**.
- **P148.7** — `node tools/normalize-pilotage.js --check` rend encore
  `Total : 0 caractere(s) a corriger, 0 fichier(s) modifie(s).`

### Bilan du bloc 148 — l'entrée §7 du JOURNAL

**7 prédictions, 7 tenues, 0 réfutée.** Test négatif délibéré :
`ancre trouvee 0 fois`, `REFUS : 1 defaut(s). AUCUN FICHIER ECRIT.`, code 1.
Essai à blanc `0 defaut`, écriture `ECRIT : 1 entree(s) dans 1 fichier(s).`,
`JOURNAL.md 754887 octets`, normalisation encore à `0 caractere(s) a
corriger`, `git status` à **12 entrées, 10 hors artefacts**.
**Tailles finales, mesurées après la dernière écriture (C118)** :
`conventions.md` **571,2 Kio**, `JOURNAL.md` **724,1 → 737,2 Kio**
(+12 924 o), `TODO.md` **282,7 inchangé**, `BACKLOG.md` **210,4 Kio**.
Structure vérifiée à l'octet : ancre, titre, ligne blanche, puces — et ligne
blanche avant l'entrée de la suite 10, comme la suite 10 la posait.

---

# TOTAL DE LA SÉANCE 11 — après les trois écritures de pilotage

**96 prédictions à décompte plein, 76 tenues, 20 réfutées — 79,2 %**, sur
**quinze blocs (134 à 148)**, **deux gardes au vert**, **deux tests négatifs
délibérés, deux refus, zéro fichier écrit à tort**, **un incident de
protocole consigné**, **zéro octet dans `content/`**.

**La coupe, portée jusqu'au bout** :
- **prédictions d'INSTRUMENT : 65, dont 63 tenues — 96,9 %.** Les deux
  réfutées portent sur des **tailles de diff** (P141.5, P147.3), jamais sur
  un compteur.
- **prédictions de MONDE : 31, dont 13 tenues — 41,9 %.**

*Dix-huit des vingt réfutations sont des prédictions de monde. C'est le taux
le plus bas depuis le lot 4, et c'est le résultat attendu d'une séance qui
n'a produit aucune fiche et n'a fait qu'interroger le corpus.*

---

# SÉANCE 12 DU 30/08 — COUPE C128, CORRECTIF #10 DE `--style`, PÉRIMÈTRE DU CHANTIER DES PUCES

## En-tête de séance

- **Séance** — 30/08, **douzième**, PC perso, **onglet Code**, modèle **Opus 5**.
- **Objet** — les trois points du brief de la ligne « Prochaine session » de
  l'entrée du 30/08 (suite 11), dans son ordre : (1) la **coupe C128** du
  `JOURNAL.md` et du fichier de prédictions du 30/08, **à la frontière du
  chantier de traduction fermé le 30/08 (suite 10)** ; (2) le **correctif
  #10** — le motif de `--style` aveugle aux **tirets de puce** et aux tirets
  des **listes numérotées** ; (3) la **mesure du périmètre** du chantier des
  puces à tiret que ce correctif débloque, la seule référence disponible
  n'étant qu'une **borne haute** (`puces-tiret.mjs --corpus`, motif A,
  **FR 937 puces / 166 porteuses / 248 fichiers**, relevé du 30/08 séance 10).
- **Régime** — sous-règle C116 (« exécution directe ») et ses termes (1) à
  (9), **dont le terme (2) amendé le 30/08 (suite 11)**, C110, C118, C119,
  C120, C121, C124, C128, C130, C131 et son amendement du 29/08 (suite 8).

### ✅ LES DEUX ARBITRAGES SONT RENDUS PAR TIM DANS LE PROMPT DE LANCEMENT

- **(a) — RENDU, dans le sens de l'amendement déjà écrit.** *« La prédiction
  de compteur s'écrit comme la ligne exacte attendue. »* Le terme (2) de la
  sous-règle C116, amendé au §8 le 30/08 (suite 11) et éprouvé **1/N** le soir
  même (onze prédictions du bloc 134 écrites comme les lignes littérales de
  `batterie.ps1 -Phase garde`, onze tenues), **est confirmé**. Il s'applique
  à cette séance à partir du bloc 149 ci-dessous. **Marque d'épreuve à porter
  en clôture : 1/N → 2/N si les prédictions littérales de ce bloc tiennent.**
- **(b) — RENDU, dans le sens de la décision prise seule.** *« Le seau
  `C109 supprimees en EN` reste hors du code de sortie. »* La décision de la
  suite 11 — une suppression n'est pas un défaut mécanique, le lot 13 ayant
  décidé que la virgule restait — **est confirmée** ; le **coût de revert
  d'une ligne, publié avant exécution, n'est pas dépensé**. `creer-fiche-en.mjs`
  n'est **pas** touché de ce fait par cette séance. ⚠ *Le seau continue de
  s'afficher et de compter — c'est son entrée dans le code de sortie qui est
  écartée, rien d'autre.*
- **Conséquence sur la file d'arbitrages** : elle passe de **18 à 16 entrées**
  ouvertes (les deux ci-dessus en sortent tranchées), et le point (2) de cette
  séance en retire une troisième — le **motif de `--style` aveugle aux
  tirets** —, ce qui la mettrait à **15**. Chiffre à vérifier en clôture
  contre la liste nominative de l'entrée du 30/08 (suite 11), jamais recomposé
  de mémoire.

## ⚠ INCIDENT D'OUVERTURE N° 1 — QUATRIÈME RÉCIDIVE, ET CETTE FOIS J'AI LANCÉ LES COMMANDES MOI-MÊME

Les séances 10 et 11 avaient consigné que `HEAD` et `git status` arrivaient
dans mon contexte **avant la garde**, poussés par l'instantané d'ouverture de
session du harnais, sans que je les aie demandés. **Ce soir, le même instantané
est arrivé — et j'ai en plus lancé `git status --porcelain` et
`git log --oneline -1` de ma propre main pendant la reconnaissance des outils**,
donc **avant** le premier bloc d'exécution.

**Ce que cela coûte, exactement, et il faut l'écrire avant de prédire.** La
prédiction **P149.5** sur le `HEAD` **n'est pas une prédiction de monde** : le
hash `6428d1c` est **lu**, pas déduit. Elle reste publiée parce que la garde la
compare à une **relecture indépendante** faite dans le script par
`git log -1 --date=iso "--format=%h %cd"`, dont je n'ai lu ni la date ISO du
commit ni le fuseau. **Elle est comptée au décompte comme prédiction
d'INSTRUMENT et non de MONDE**, et la ligne ci-dessous le dit.

De même **P149.6** : `git status --porcelain` a été lu à vide (arbre
**propre**) avant la garde. La prédiction porte donc sur ce que **la garde**
verra **après** les deux versements de la séance, pas sur l'état de départ.

⚠ **Ce qui n'est PAS excusé** : les deux lancements de reconnaissance étaient
évitables, `ls tools/` et la lecture de `batterie.ps1` suffisaient. *Cause :
j'ai composé une seule commande shell mêlant un `ls` (lecture légitime) et un
`git status` (mesure), par commodité de tour de boucle.* **Règle candidate, à
porter au §8 si la séance la confirme : une commande de reconnaissance ne mêle
jamais une lecture de répertoire et une mesure d'état du dépôt ; les deux se
lancent séparément, parce que seule la seconde est gardée par C116.**

## Déclaration C131 d'ouverture — bloc 149

- **Population du compteur `fichiers modifies non commites`** : entrées de
  `git status --porcelain` sur **tout le dépôt**, lues à l'**étape 1** de
  `batterie.ps1`, donc **après** la copie C124 de l'étape 0. Le second chiffre,
  `hors artefacts de seance`, retire les entrées dont la ligne porte
  `batterie-sortie` **ou** `predictions-` (filtre lu dans le code de
  `batterie.ps1`, ligne `$saleHors`, et non dans la ligne d'affichage).
- **Artefacts déjà versés par cette séance au moment de la lecture — deux, et
  ils sont nommés** :
  1. `tools/predictions-260830.md`, **modifié** par le présent append —
     entrée ` M`, filtrée par `predictions-` ;
  2. `tools/batterie-sortie-3008b67.txt`, **créé** par l'étape 0 — entrée
     `??`, filtrée par `batterie-sortie`.
- **Total impliqué : 2 entrées au total, 0 hors artefacts de séance.**
- ⚠ **Le fragment d'ouverture n'est PAS un artefact du dépôt** : il est écrit
  hors arbre, dans le répertoire de travail temporaire de la session, puis
  concaténé. Il ne crée aucune entrée `git status`, et c'est pourquoi le total
  reste à 2.
- **État de départ déclaré** : `HEAD 6428d1c`, arbre **propre** (lu avant la
  garde — voir l'incident n° 1 ci-dessus).

## Prédictions — bloc 149, garde de péremption d'ouverture

`powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase garde`

**Terme (2) amendé appliqué : chaque prédiction est écrite comme la LIGNE
EXACTE attendue en sortie, jamais comme un nombre isolé.**

- **P149.1** — étape 0, ligne littérale :
  `lignes non ASCII dans batterie.ps1 : 0`
- **P149.2** — étape 0, ligne littérale :
  `sortie precedente copiee : tools\batterie-sortie-3008b67.txt`
  Rang **67**, premier rang libre : `3008b1` à `3008b66` sont occupés dans
  `tools/`, et `tools\batterie-sortie.txt` existe (1 128 o, écrit le 30/08 à
  23:13), donc la copie a bien lieu et la branche `aucune sortie precedente a
  copier` ne se produit pas.
- **P149.3** — étape 1, ligne littérale :
  `phase demandee : garde   anneau : 2   chevron : False`
  (trois espaces entre les champs, `[bool]$Chevron` rendu `False`).
- **P149.4** — étape 1, ligne littérale :
  `date ISO : 2026-08-30   heure : HH:mm:ss`
  ⚠ **L'heure n'est pas prédite** : aucune mesure du jour ne la borne.
  ⚠ **Branche déclarée** : si l'horloge a passé minuit, la sortie rend
  `date ISO : 2026-08-31`, **P149.2 devient
  `tools\batterie-sortie-3108b1.txt`**, et ce fichier de prédictions n'est
  plus le bon — il faudra ouvrir `tools/predictions-260831.md` et **y reporter
  le présent en-tête**. *La coupe du point (1) porterait alors sur
  `predictions-260830.md` en entier, ce qui la simplifie au lieu de la
  compliquer.*
- **P149.5** — étape 1, ligne littérale préfixée :
  `HEAD git : 6428d1c 2026-08-30 ` puis une heure **postérieure à 23:21:00** et
  le fuseau ` +0200`. *Prédiction d'INSTRUMENT et non de monde : le hash court
  est lu dans l'instantané d'ouverture et dans mon propre lancement (cf.
  incident n° 1) ; ce qui est réellement prédit est la **date ISO du commit**,
  son **heure minorée** et le **fuseau**, que je n'ai pas lus.* Motif de la
  borne : `JOURNAL.md` a été écrit à 23:21 par la séance 11 et le commit
  `6428d1c` porte cette écriture.
- **P149.6** — étape 1, ligne littérale :
  `fichiers modifies non commites : 2   (hors artefacts de seance : 0)`
  exactement les deux entrées nommées à la déclaration C131 ci-dessus.
- **P149.7** — étape 1, ligne littérale :
  `node : v24.15.0`
- **P149.8** — étape 1, ligne littérale (nom padé à 50 caractères) :
  `  JOURNAL.md                                          2026-08-30 23:2` puis
  une heure comprise **entre 23:20:00 et 23:25:00**. Motif : le relevé
  `3008b66` le donnait à **21:54:08**, périmé par construction — la séance 11 a
  écrit son entrée §7 **après** sa deuxième garde de 23:13:58, et le répertoire
  donne le fichier à **23:21**. **Le dépassement n'est donc pas une anomalie.**
- **P149.9** — étape 1, ligne littérale (nom padé à 50 caractères) :
  `  conventions.md                                      2026-08-30 23:1` puis
  une heure comprise **entre 23:14:00 et 23:20:00**. Motif : la séance 11 a
  écrit `conventions.md` **après** sa garde de 23:13:58 et **avant**
  `JOURNAL.md` — c'est l'ordre publié à ses blocs 147 puis 148. ⚠ *Le relevé
  `3008b66` disait 21:53:03 ; cette valeur est **périmée de deux écritures** et
  n'est pas republiée comme référence courante (règle du 30/08 séance 10 sur
  la valeur de référence non remesurée).*
- **P149.10** — étape 1, ligne littérale, **inchangée au caractère** :
  `  TODO.md                                             2026-08-29 21:48:08`
- **P149.11** — **aucune ligne de fiche** après les trois ci-dessus : la phase
  `garde` est lancée sans `-Fiches` ni `-FichesEn`, donc la boucle
  `foreach ($f in ($Fiches + $FichesEn))` n'imprime rien.
- **P149.12** — **exactement deux étapes** dans la sortie (0 et 1), chacune
  fermée par la ligne littérale `--- code de sortie : 0` ; les blocs `cadrage`
  et `etat` sont gardés par `if ($Phase -eq ...)` et ne s'ouvrent pas.
- **P149.13** — dernière ligne de la console, littérale :
  `Sortie ecrite dans tools\batterie-sortie.txt`

**Critère d'arrêt du bloc** : un `HEAD` autre que `6428d1c`, une entrée de
`git status` autre que les deux nommées, une date d'écriture postérieure sur
`TODO.md`, ou une date d'écriture sur `JOURNAL.md` / `conventions.md`
postérieure au **30/08 23:25** ⇒ **arrêt, rien d'écrit, remontée à Tim**.

### Bilan du bloc 149 — garde de péremption d'ouverture

**13 prédictions, 13 tenues, 0 réfutée. GARDE AU VERT.** Constats, ligne à
ligne : `lignes non ASCII dans batterie.ps1 : 0` ;
`sortie precedente copiee : tools\batterie-sortie-3008b67.txt` ;
`phase demandee : garde   anneau : 2   chevron : False` ;
`date ISO : 2026-08-30   heure : 23:37:44` — **la branche de minuit ne s'est
pas produite, ce fichier de prédictions reste le bon** ;
`HEAD git : 6428d1c 2026-08-30 23:32:01 +0200` — date, heure minorée
(> 23:21:00) et fuseau tenus ;
`fichiers modifies non commites : 2   (hors artefacts de seance : 0)` ;
`node : v24.15.0` ; `JOURNAL.md 2026-08-30 23:21:21` (fourchette
[23:20, 23:25]) ; `conventions.md 2026-08-30 23:19:22` (fourchette
[23:14, 23:20]) ; `TODO.md 2026-08-29 21:48:08` inchangé au caractère ;
aucune ligne de fiche ; deux étapes, `--- code de sortie : 0` deux fois ;
`Sortie ecrite dans tools\batterie-sortie.txt`.
✅ **Terme (2) amendé, deuxième épreuve : les treize prédictions étaient
écrites comme des lignes littérales, les treize tombent. Marque 1/N → 2/N.**
✅ *L'ordre d'écriture de la séance 11 — `conventions.md` 23:19:22 **avant**
`JOURNAL.md` 23:21:21 — est confirmé par la mesure, et il avait été déduit de
ses blocs 147 puis 148, pas relevé.*

---

## Déclaration C131 du bloc 150 — rejouée, avec un versement neuf

- **Population** — inchangée : entrées de `git status --porcelain` sur tout le
  dépôt, lues par `git status --porcelain` lancé en fin de bloc ; le second
  chiffre retire les lignes portant `batterie-sortie` **ou** `predictions-`.
- **Artefacts versés par la séance au moment de la lecture — trois, nommés** :
  1. `tools/predictions-260830.md`, **modifié** — ` M`, filtré ;
  2. `tools/batterie-sortie-3008b67.txt`, **créé** — `??`, filtré ;
  3. `tools/coupe-journal-chantier-3008s12.mjs`, **créé** par ce bloc —
     `??`, **non filtré**, donc il compte hors artefacts.
- **Total impliqué : 3 entrées au total, 1 hors artefacts de séance.**
- ⚠ **Les deux copies du test négatif sont écrites hors arbre** (répertoire
  temporaire de session) : elles ne créent aucune entrée, et c'est pourquoi le
  total reste à 3.
- ⚠ **`--dry` n'écrit rien** : aucune entrée supplémentaire de ce fait, et
  aucun `.bak`.

## Prédictions — bloc 150, écriture de l'outil de coupe C128 du JOURNAL, test négatif délibéré, passe `--dry`

`node tools/coupe-journal-chantier-3008s12.mjs --dry`

**La frontière n'est PAS une date, et c'est la seule différence de fond avec
`archive-journal-coupe-2208.mjs`.** Le chantier de traduction s'ouvre le
**22/08** et se ferme le **30/08 (suite 10)** : la frontière tombe **à
l'intérieur d'une journée**, entre la suite 10 et la suite 11 du 30/08. Un
seuil de date ne peut donc pas la porter — l'ancre est le **titre exact de la
première entrée déplacée**, et la garde d'extension se réécrit en conséquence.

**Décision de périmètre, prise seule, avec son coût de revert publié avant
exécution (C116 (8)).** ⚠ **Une seule entrée est gardée : `## 2026-08-30
(suite 11)`.** Motif : C128 écrit que « le JOURNAL porte le chantier en cours
et rien d'autre » ; le chantier de traduction est fermé par la suite 10, et
c'est la **suite 11** qui ouvre ce qui suit — sa ligne « Prochaine session »
**est** le brief de la présente séance, et l'ouverture de séance de
`CLAUDE.md` lit précisément cette ligne. La garder est donc une **nécessité de
procédure**, pas une préférence. **Coût de revert : `git checkout -- JOURNAL.md
JOURNAL-archive.md`, les deux fichiers étant commités au `HEAD 6428d1c`
mesuré au bloc 149 ; plus les deux `.bak` que l'outil écrit avant toute
écriture.**

### Test négatif délibéré, d'abord

- **P150.1** — sur des **copies hors arbre** de `JOURNAL.md` et
  `JOURNAL-archive.md` où la chaîne `antérieures au 22/08 archivées dans` est
  **dupliquée**, la passe `--dry` rend la ligne littérale
  `ABORT : remplacement NON UNIQUE (2) : blurb d en-tete (archivees) - aucun fichier modifie.`
  et le **code de sortie 1**.
- **P150.2** — les deux copies sont **identiques à l'octet** après le test
  (`cmp` muet) : le refus est **tout ou rien**, aucun `.bak` n'est écrit.

### Passe `--dry` sur les vrais fichiers — lignes littérales attendues

- **P150.3** — `  entrees dans JOURNAL.md   : 58`
- **P150.4** — `  GARDEES                   : 1`
- **P150.5** — `  DEPLACEES                 : 57`
- **P150.6** — `  plus ancienne gardee      : 2026-08-30 (suite 11)`
- **P150.7** — `  plus recente archivee     : 2026-08-30 (suite 10)`
- **P150.8** — **liste fermée avant le bloc** : les **57** entrées déplacées se
  décomposent par date en **11 + 12 + 2 + 7 + 6 + 9 + 4 + 5 + 1**, soit
  30/08 **11** (les douze de la journée moins la suite 11 gardée), 29/08
  **12**, 28/08 **2**, 27/08 **7**, 26/08 **6**, 25/08 **9**, 24/08 **4**,
  23/08 **5**, 22/08 **1**. ⚠ *Le 25/08 en porte **neuf** et non huit : une
  entrée `## 2026-08-25` est logée **entre** `## 2026-08-24 (suite 2)` et
  `## 2026-08-24 (suite)`, rupture d'ordre antichronologique **préexistante**
  au fichier. Elle est **sous** la frontière, donc elle part avec le bloc et
  ne peut pas faire mordre la garde d'extension — mais elle interdit
  d'écrire cette garde comme une comparaison de dates monotone.*
- **P150.9** — `  bloc deplace : 723.0 ko`
- **P150.10** — `  JOURNAL.md      : 737.2 ko  ->  14.3 ko`
- **P150.11** — `  JOURNAL-archive : 565.6 ko  ->  1288.8 ko`
  *Décomposition de ce chiffre, publiée pour qu'un total juste ne masque pas
  une décomposition fausse (règle du 29/08) :* **579 153** octets d'archive
  actuels **+ 179** octets de marqueur de groupe **+ 4** octets de deux
  césures **+ 740 390** octets de bloc = **1 319 726** octets.
- **P150.12** — `--dry` rend le **code de sortie 0** et la ligne littérale
  `  --dry : RIEN N A ETE ECRIT. Toutes les ancres et tous les`.
- **P150.13** — `git status --porcelain` rend **3 entrées**, dont **1 hors
  artefacts de séance**, exactement celles de la déclaration C131 ci-dessus ;
  **aucun `.bak`**, `ls JOURNAL.md.bak JOURNAL-archive.md.bak` échoue sur les
  deux.
- **P150.14** — la garde `marqueur INSERT_JOURNAL_HERE perdu par la coupe`
  **ne se déclenche pas** : le marqueur est **au-dessus** de la frontière,
  ligne 11 du fichier, et la coupe part de la ligne 46.

**Critère d'arrêt du bloc** : un `entrees` autre que 58, un `GARDEES` autre que
1, une entrée gardée dont le titre n'est pas celui de la suite 11, ou un
`ABORT` sur les vrais fichiers ⇒ **arrêt, rien d'écrit, remontée à Tim**.

⚠ **UN FAIT RELEVÉ HORS PRÉDICTION, ET IL EST CONSIGNÉ ICI PARCE QU'IL TOUCHE
LE POINT (1).** `tools/predictions-260830.md` contient **au moins un octet
NUL** — `grep` le classe « Binary file » et un test `includes(' ')` rend
`true`. *Le fichier est du Markdown écrit par des appends successifs ; un NUL
n'y a aucune raison d'être.* **Ce n'est pas une condition d'arrêt** (l'octet
est préexistant, il ne dit rien de l'état du dépôt de ce soir), **mais la
coupe du fichier de prédictions doit dire de quel côté de la frontière il
tombe**, et le bloc qui la portera le mesurera. **Remonté à Tim en clôture.**

### Bilan du bloc 150 — écriture de l'outil de coupe, test négatif, passe `--dry`

**14 prédictions, 14 tenues, 0 réfutée.**

✅ **Test négatif délibéré** — ancre de blurb dupliquée sur des copies hors
arbre :
`ABORT : remplacement NON UNIQUE (2) : blurb d en-tete (archivees) - aucun fichier modifie.`,
**code de sortie 1**, les deux copies **identiques à l'octet** (`cmp` muet
deux fois), **aucun `.bak`**. *Le refus tombe **après** le rapport
d'inventaire et **avant** toute écriture : l'inventaire est donc lisible même
sur un fichier que l'outil refusera de traiter, ce qui est le bon ordre.*

✅ **Passe `--dry` sur les vrais fichiers, code de sortie 0.** Lignes
constatées : `entrees dans JOURNAL.md   : 58` ; `GARDEES                   : 1` ;
`DEPLACEES                 : 57` ; `plus ancienne gardee      : 2026-08-30
(suite 11)` ; `plus recente archivee     : 2026-08-30 (suite 10)` ;
`bloc deplace : 723.0 ko` ; `JOURNAL.md      : 737.2 ko  ->  14.3 ko` ;
`JOURNAL-archive : 565.6 ko  ->  1288.8 ko`.
✅ **Décompte par date, terme à terme** : `2026-08-30 : 11`, `2026-08-29 : 12`,
`2026-08-28 : 2`, `2026-08-27 : 7`, `2026-08-26 : 6`, `2026-08-25 : 9`,
`2026-08-24 : 4`, `2026-08-23 : 5`, `2026-08-22 : 1`, `TOTAL : 57` — **les
neuf termes justes, pas seulement le total** (règle du 29/08 : un total dans
la fourchette ne valide pas la décomposition).
✅ **La liste des 57 titres a été LUE, un par un**, comme C128 l'exige : elle
va de `## 2026-08-30 (suite 10) — LE CORPUS EST FERMÉ` à
`## 2026-08-22 (suite 2) — Outillage du chantier bilingue, et le lot 1
traduit`, c'est-à-dire **exactement le chantier de traduction, de son
outillage à sa fermeture**, et rien d'autre.
✅ `git status --porcelain` : **3 entrées, 1 hors artefacts**, les trois
nommées ; **aucun `.bak`**.

⚠ **UN DÉFAUT DE DÉCLARATION C131, ET IL EST À MOI.** La déclaration du bloc
150 nommait trois artefacts et n'a **pas prévu la copie C124 de la sortie
`--dry`** — sortie qui est, par construction, « destinée à comparaison » avec
celle de la passe live, donc exactement ce que C124 impose de sauvegarder
daté. *La sortie a été écrite hors arbre par commodité pendant le bloc ; elle
est versée au dépôt au bloc 151, qui la déclare.* **Ce n'est pas une entrée
surnuméraire non vue — le compteur est tombé juste à 3 — c'est une
**anticipation manquante** : la déclaration décrit ce que le bloc versera, et
celui-ci a versé un fichier de plus que ce qu'il annonçait, hors arbre.*
⚠ **Règle candidate** : *un bloc qui lance un outil en `--dry` verse la sortie
du `--dry`, et sa déclaration C131 doit la porter — le `--dry` n'écrit rien
dans les fichiers cibles, il n'écrit pas rien tout court.*

---

## Déclaration C131 du bloc 151 — rejouée, avec trois versements neufs

- **Population** — inchangée.
- **Artefacts versés par la séance au moment de la lecture — six entrées,
  nommées** :
  1. `tools/predictions-260830.md`, **modifié** — ` M`, filtré ;
  2. `tools/batterie-sortie-3008b67.txt`, **créé** — `??`, filtré ;
  3. `tools/coupe-journal-chantier-3008s12.mjs`, **créé** au bloc 150 —
     `??`, **hors artefacts** ;
  4. `tools/coupe-journal-dry-3008s12.txt`, **créé** par ce bloc (copie C124
     de la sortie `--dry`) — `??`, **hors artefacts** ;
  5. `JOURNAL.md`, **modifié** par la coupe — ` M`, **hors artefacts** ;
  6. `JOURNAL-archive.md`, **modifié** par la coupe — ` M`, **hors
     artefacts**.
- **Total impliqué : 6 entrées au total, 4 hors artefacts de séance.**
- ⚠ **`JOURNAL.md.bak` et `JOURNAL-archive.md.bak` ne comptent pas** :
  `.gitignore` porte `*.bak` (section « Sauvegardes locales (scripts
  d'archivage) »), **lu dans le fichier et non supposé**. Ils sont donc écrits
  et invisibles à `git status`.

## Prédictions — bloc 151, passe LIVE de la coupe C128 du JOURNAL

`node tools/coupe-journal-chantier-3008s12.mjs`

- **P151.1** — le rapport est **identique au `--dry`** sur ses onze lignes de
  chiffres, à l'**heure près** de la ligne `Horloge lue` ; en particulier
  `  entrees dans JOURNAL.md   : 58`, `  GARDEES                   : 1`,
  `  DEPLACEES                 : 57`, `  bloc deplace : 723.0 ko`,
  `  JOURNAL.md      : 737.2 ko  ->  14.3 ko`,
  `  JOURNAL-archive : 565.6 ko  ->  1288.8 ko`.
- **P151.2** — les trois dernières lignes du `--dry` (`--dry : RIEN N A ETE
  ECRIT.` et ses deux suivantes) **n'apparaissent pas**, remplacées par la
  ligne commençant par `OK - coupe C128 effectuee. Sauvegardes : `.
- **P151.3** — **code de sortie 0**.
- **P151.4** — `wc -c JOURNAL.md` rend **14618** octets. *Décomposition
  publiée : **14 494** octets de reste brut (en-tête + entrée suite 11 + pied)
  **+ 124** octets des cinq remplacements de blurb — +11, +48, +11, +11, +43
  dans l'ordre où l'outil les applique.*
- **P151.5** — `wc -c JOURNAL-archive.md` rend **1319726** octets.
  *Décomposition : 579 153 + 179 (marqueur) + 4 (deux césures) + 740 390
  (bloc).*
- **P151.6** — `grep -c "^## 2026-" JOURNAL.md` rend **1**.
- **P151.7** — `grep -c "^## 2026-" JOURNAL-archive.md` rend **154**.
  *Décomposition : **97** avant + **57** déplacées. Le 97 est mesuré ce soir,
  pas reporté d'une clôture.*
- **P151.8** — le `JOURNAL.md` d'après porte **exactement une** occurrence de
  `<!-- INSERT_JOURNAL_HERE -->` et **exactement une** de
  `## 2026-08-30 (suite 11)`.
- **P151.9** — le blurb d'en-tête d'après porte la ligne littérale
  `> Sessions antichronologiques antérieures au 30/08 (suite 11) archivées dans \`JOURNAL-archive.md\``
  et la fin de paragraphe `> dernière coupe : 30/08, sessions 22/08 → 30/08 (suite 10)).`
- **P151.10** — le titre de l'archive devient
  `# JOURNAL — Archive (sessions du 2026-05-19 au 2026-08-30)`, et le fichier
  porte **exactement une** occurrence de
  `<!-- DÉBUT DES SESSIONS 22/08 → 30/08 (suite 10), CHANTIER DE TRADUCTION`.
- **P151.11** — `node tools/normalize-pilotage.js --check` rend
  `Total : 0 caractere(s) a corriger, 0 fichier(s) modifie(s).`
  *Motif : la coupe **déplace** des octets et n'en compose aucun de neuf hors
  les cinq blurbs, qui sont écrits en ASCII et en caractères déjà employés
  par le fichier.*
- **P151.12** — `git status --porcelain` rend **6 entrées**, dont **4 hors
  artefacts**, exactement celles de la déclaration C131 ci-dessus ; **aucune
  ligne `.bak`**.
- **P151.13** — `git diff --numstat JOURNAL.md JOURNAL-archive.md` rend
  **deux lignes `M`** et aucune ligne `A` — *lecture du `numstat` contre la
  liste nominative, règle née de l'écrasement du 30/08 (séance 10) : une
  ligne `M` sur un fichier qu'on croyait créer est un écrasement, et
  réciproquement une ligne `A` ici signalerait que la coupe a fabriqué un
  fichier.*
- **P151.14** — l'entrée gardée est **intacte à l'octet** : les octets de
  `JOURNAL.md` compris entre `<!-- INSERT_JOURNAL_HERE -->` et le pied sont
  identiques à ceux du `.bak` sur la même plage. *Vérifié par extraction et
  `cmp`.*

**Critère d'arrêt du bloc** : un `ABORT`, un code de sortie non nul, un
`grep -c` autre que 1 sur le JOURNAL d'après, ou un `--check` non nul de
`normalize-pilotage` ⇒ **arrêt, restauration par `git checkout --`, remontée
à Tim**.

### Bilan du bloc 151 — passe LIVE de la coupe C128 du JOURNAL

**14 prédictions, 13 tenues, 1 réfutée — 92,9 %.**

✅ **Coupe effectuée, code de sortie 0.** Rapport identique au `--dry` à
l'horloge près (`23:42` → `23:44`) : `entrees 58`, `GARDEES 1`,
`DEPLACEES 57`, `bloc deplace : 723.0 ko`,
`JOURNAL.md      : 737.2 ko  ->  14.3 ko`,
`JOURNAL-archive : 565.6 ko  ->  1288.8 ko`, puis
`OK - coupe C128 effectuee. Sauvegardes : …JOURNAL.md.bak + …JOURNAL-archive.md.bak`.
✅ **Tailles à l'octet** : `JOURNAL.md` **14 618** o (prédit 14 618, décomposé
14 494 + 124), `JOURNAL-archive.md` **1 319 726** o (prédit 1 319 726,
décomposé 579 153 + 179 + 4 + 740 390). **Les deux décompositions sont justes
terme à terme, pas seulement en total.**
✅ **Entrées** : `JOURNAL.md` **1**, `JOURNAL-archive.md` **154** — prédit
154 = 97 mesurées ce soir + 57 déplacées.
✅ **Ancres** : une occurrence de `<!-- INSERT_JOURNAL_HERE -->`, une de
`## 2026-08-30 (suite 11)`, une du marqueur de groupe neuf ; titre de
l'archive passé à `au 2026-08-30`.
✅ **Blurbs** : les cinq remplacements sont en place, en-tête et pied.
✅ `normalize-pilotage.js --check` : `Total : 0 caractere(s) a corriger,
0 fichier(s) modifie(s).`, les onze fichiers `[ok]` ou `[skip]`.
✅ `git status` **6 entrées, 4 hors artefacts**, exactement les six déclarées ;
**aucune ligne `.bak`**, `.gitignore` les portant.
✅ `git diff --numstat` : `2576 1 JOURNAL-archive.md` et `4 2578 JOURNAL.md` —
**deux lignes `M`, aucune ligne `A`**, lues contre la liste nominative.

❌ **P151.14 RÉFUTÉE, ET LA FAUTE EST DANS LA MÉTHODE QUE LA PRÉDICTION
NOMMAIT, PAS DANS LE RÉSULTAT.** J'avais écrit que « les octets compris entre
`<!-- INSERT_JOURNAL_HERE -->` et le pied » seraient identiques des deux
côtés. **Cette plage contient les 58 entrées dans le `.bak` et une seule dans
le fichier d'après** : elle ne *peut pas* être identique, et le premier
lancement rend `octets avant: 753825  apres: 13432  identique: false`.
*C'est une prédiction qui se réfute par lecture de son propre énoncé, sans
qu'aucune mesure soit nécessaire — le genre de faute que C116 (7) vise, mais
d'un cran plus bas : je n'ai pas prédit la ligne d'affichage au lieu du
compteur, j'ai prédit une **plage** au lieu d'une **entrée**.*
✅ **Le contrôle rejoué correctement rend le verdict attendu** : l'entrée
gardée, bornée par son propre titre et par le titre suivant, fait **13 429
octets** des deux côtés et `ENTREE GARDEE IDENTIQUE A L OCTET : true` ; et le
bloc déplacé, **740 390 octets**, se retrouve **verbatim** dans
`JOURNAL-archive.md`. **La coupe ne perd ni ne compose aucun octet de corps.**
⚠ **Règle candidate** : *un contrôle d'intégrité se borne à l'objet qu'il
prétend garder — une entrée par ses deux titres, jamais par la région qui la
contient. Une plage bornée par une ancre de fichier mesure le fichier, pas
l'entrée.*

---

## ⛳ GATE G1 — coupe C128 du JOURNAL faite. Point (1) à moitié.

`JOURNAL.md` **737,2 → 14,3 Kio**, une entrée gardée, 57 archivées en bloc,
`JOURNAL-archive.md` **565,6 → 1 288,8 Kio**, 154 entrées. Intégrité vérifiée
des deux côtés à l'octet. `--check` de normalisation à zéro. **Reste la coupe
du fichier de prédictions, bloc 152.**

---

## Déclaration C131 du bloc 152 — rejouée, avec trois versements neufs

- **Population** — inchangée.
- **Artefacts versés par la séance au moment de la lecture — neuf entrées,
  nommées** :
  1. `tools/predictions-260830.md`, **modifié** — ` M`, filtré ;
  2. `tools/batterie-sortie-3008b67.txt` — `??`, filtré ;
  3. `tools/coupe-journal-chantier-3008s12.mjs` — `??`, **hors** ;
  4. `tools/coupe-journal-dry-3008s12.txt` — `??`, **hors** ;
  5. `JOURNAL.md` — ` M`, **hors** ;
  6. `JOURNAL-archive.md` — ` M`, **hors** ;
  7. `tools/coupe-predictions-3008s12.mjs`, **créé** par ce bloc — `??`,
     **hors** ;
  8. `tools/predictions-260830-chantier.md`, **créé** par ce bloc — `??`,
     ⚠ **FILTRÉ**, parce que sa ligne porte la chaîne `predictions-` que
     `$saleHors` écarte. *Le filtre est écrit pour le fichier de prédictions
     de la séance ; il attrape aussi son archive, et c'est un effet de bord
     du motif, pas une intention. Il est nommé ici pour que le chiffre `hors
     artefacts` ne se lise pas comme un oubli.*
  9. `tools/coupe-predictions-dry-3008s12.txt`, **créé** par ce bloc (copie
     C124 de la sortie `--dry`, la leçon du bloc 150 étant appliquée) —
     `??`, **hors**.
- **Total impliqué : 9 entrées au total, 6 hors artefacts de séance.**
- ⚠ `tools/predictions-260830.md.bak` **ne compte pas** (`*.bak` au
  `.gitignore`).

## Prédictions — bloc 152, coupe C128 du fichier de prédictions du 30/08

`node tools/coupe-predictions-3008s12.mjs --dry` puis sans `--dry`

**Même frontière que le JOURNAL** : tout ce qui précède
`# SÉANCE 11 DU 30/08 — BILAN DE CHANTIER, FILE D'ARBITRAGES, SUITE DU DÉPÔT`
part dans `tools/predictions-260830-chantier.md` ; le fichier vivant garde la
séance 11 et la séance 12. **Rien n'est supprimé** — C130 : le dépôt porte la
trace intégrale.

### Test négatif délibéré, d'abord

- **P152.1** — lancé avec `--cible` pointant sur un fichier **qui existe
  déjà**, l'outil rend la ligne littérale
  `ABORT : la cible existe deja, refus d ecraser - aucun fichier modifie.`
  et le **code de sortie 1**. *C'est la garde qui manquait le 30/08 (séance
  10), quand `corps-NEGATIF-3008.md` a écrasé un fichier versionné sans être
  lu.*
- **P152.2** — la cible du test est **identique à l'octet** après le refus, et
  **aucun `.bak`** n'est écrit.

### Passe `--dry` puis live — lignes littérales attendues

- **P152.3** — `  ancre de frontiere        : 1 occurrence`
- **P152.4** — `  bloc archive              : 1145121 octets   (1118.3 ko)`
  ⚠ **Ce chiffre est STABLE et se prédit exactement** : le bloc archivé est
  **entièrement au-dessus** de la frontière, et tous les appends de la
  séance 12 se font **en fin de fichier**, donc en dessous. *Mesuré à
  1 145 121 octets deux fois ce soir, à deux tailles de fichier différentes.*
- **P152.5** — `  reste conserve            : N octets` avec **N compris
  entre 83 000 et 92 000**. ⚠ *N n'est pas prédit exactement, et le motif se
  dit : le reste contient les prédictions du présent bloc, qui sont écrites
  au moment où je publie cette ligne et dont je ne connais pas la taille
  finale. **Prédiction de fourchette assumée, pas de nombre isolé déguisé.***
- **P152.6** — `  conservation              : 1145121 + N = M  OK`, avec
  **M = 1145121 + N** exactement, sans un octet de reste. *L'outil s'arrête
  si l'égalité est fausse.*
- **P152.7** — `  titres H1 archives        : 13` et
  `  titres H1 conserves       : 4`. **Liste fermée avant le bloc** : les
  quatre conservés sont `# SÉANCE 11 DU 30/08`, `# BILAN GÉNÉRAL — 30/08
  (séance 11)`, `# TOTAL DE LA SÉANCE 11`, `# SÉANCE 12 DU 30/08` ; les treize
  archivés vont de `# PRÉDICTIONS — séance du 30/08 (lot 7…)` à
  `# BILAN GÉNÉRAL — 30/08 (séance 10), LOT 14`.
- **P152.8** — `  octets NUL                : 1 archive / 1 conserve`.
  ⚠ **Le fait relevé au bloc 150 est instruit et il est BÉNIN.** Le fichier
  porte **deux** octets NUL, aux positions 771 308 et 1 178 850 — un de chaque
  côté de la frontière. **Ce ne sont pas des octets corrompus : ce sont deux
  citations littérales d'une classe de caractères**, `[<NUL>-ɏ]`, l'alphabet
  latin de `creer-fiche-en.mjs`, recopiée telle quelle dans une prédiction.
  *`grep` classe donc le fichier « Binary file » pour une raison qui tient au
  contenu cité et non à une avarie d'écriture.* **La coupe les conserve des
  deux côtés.**
- **P152.9** — après la passe live : `tools/predictions-260830-chantier.md`
  existe, pèse **1145121 + la taille de son en-tête** ; `wc -c
  tools/predictions-260830.md` rend **N + la taille de son en-tête**.
- **P152.10** — `grep -ac "^# SÉANCE 11 DU 30/08" tools/predictions-260830.md`
  rend **1** ; le même grep sur l'archive rend **0**.
- **P152.11** — `git status --porcelain` rend **9 entrées**, dont **6 hors
  artefacts**, exactement celles de la déclaration C131 ci-dessus.
- **P152.12** — `git diff --numstat` ne porte **aucune ligne `A`** ; les
  fichiers neufs sont en `??` et non suivis, et les seuls ` M` sont
  `JOURNAL.md`, `JOURNAL-archive.md` et `tools/predictions-260830.md`.

**Critère d'arrêt du bloc** : un `ABORT` sur les vrais fichiers, une
conservation fausse, ou un `titres H1 conserves` autre que 4 ⇒ **arrêt,
restauration depuis le `.bak`, remontée à Tim**.

### Bilan du bloc 152 — coupe C128 du fichier de prédictions

**12 prédictions, 12 tenues, 0 réfutée.**

✅ **Test négatif délibéré, sur la garde de NON-ÉCRASEMENT** — celle qui
manquait le 30/08 (séance 10) :
`ABORT : la cible existe deja, refus d ecraser - aucun fichier modifie.`,
**code de sortie 1**, cible **identique à l'octet**, **aucun `.bak`**.
✅ **`--dry` puis live, rapports identiques à l'horloge près, code 0 les deux
fois.** Lignes constatées :
`ancre de frontiere        : 1 occurrence` ;
`bloc archive              : 1145121 octets   (1118.3 ko)` — **prédit à
l'octet** ;
`reste conserve            : 90229 octets   (88.1 ko)` — dans la fourchette
[83 000, 92 000] annoncée ;
`conservation              : 1145121 + 90229 = 1235350  OK` ;
`titres H1 archives        : 13` / `titres H1 conserves       : 4` ;
`octets NUL                : 1 archive / 1 conserve`.
✅ **Les quatre H1 conservés sont exactement les quatre nommés avant le bloc**,
et les treize archivés vont de `# PRÉDICTIONS — séance du 30/08 (lot 7…)` à
`# BILAN GÉNÉRAL — 30/08 (séance 10), LOT 14 : LE CORPUS EST FERMÉ`.
✅ **Tailles finales** : `tools/predictions-260830.md` **1 235 350 → 90 501**
octets (**1 206,4 → 88,4 Kio**) ; `tools/predictions-260830-chantier.md`
**1 145 495** octets (**1 118,6 Kio**), neuf.
✅ `grep -ac "^# SÉANCE 11 DU 30/08"` : **1** dans le fichier vivant, **0**
dans l'archive.
✅ `git status` **9 entrées, 6 hors artefacts**, exactement les neuf
déclarées ; `git diff --numstat` **trois lignes, aucune ligne `A`**.

✅ **L'OCTET NUL EST INSTRUIT ET IL EST BÉNIN, ET C'EST LE SEUL FAIT NEUF DU
BLOC.** Les deux NUL du fichier — positions 771 308 et 1 178 850, un de chaque
côté de la frontière — sont deux **citations littérales** de la classe de
caractères `[<NUL>-ɏ]`, l'alphabet latin de `creer-fiche-en.mjs`, recopiée
telle quelle dans une prédiction. *`grep` classait donc le fichier « Binary
file » pour une raison qui tient au **contenu cité** et non à une avarie
d'écriture, et il faut le savoir avant de lancer un `grep` sans `-a` sur ce
fichier.* **La coupe les conserve des deux côtés, à l'octet.**

---

## ⛳ GATE G2 — POINT (1) FAIT. La coupe C128 porte sur les deux fichiers.

`JOURNAL.md` **737,2 → 14,3 Kio** (1 entrée, 57 archivées, `JOURNAL-archive.md`
**565,6 → 1 288,8 Kio**, 154 entrées). `tools/predictions-260830.md`
**1 206,4 → 88,4 Kio** (4 titres H1, 13 archivés dans
`tools/predictions-260830-chantier.md`). **Deux tests négatifs délibérés, deux
refus, zéro octet écrit à tort. Conservation vérifiée à l'octet des deux
côtés dans les deux coupes. Zéro octet perdu, zéro octet supprimé.**
**On passe au point (2) : le correctif #10 de `--style`.**

---

## Déclaration C131 du bloc 153 — rejouée, deux versements neufs

- **Population** — inchangée.
- **Artefacts versés — onze entrées** : les neuf du bloc 152, plus
  `tools/style-avant-fr-3008s12.txt` et `tools/style-avant-en-3008s12.txt`,
  créés par ce bloc (relevés d'avant, C124) — `??`, **hors artefacts** tous
  les deux.
- **Total impliqué : 11 entrées au total, 8 hors artefacts de séance.**
- ⚠ **Le bloc n'écrit rien dans `content/`** : `--style` est un contrôle en
  lecture seule.

## Prédictions — bloc 153, relevé d'AVANT et fermeture de l'échantillon C110

`node tools/creer-fiche-en.mjs --style` (corpus EN par défaut) puis la même
commande sur la liste explicite des sources FR.

### Ce que le correctif #10 doit réparer, lu dans le code et non dans son nom

**`exemptions()` de `creer-fiche-en.mjs`, ligne 1058 à 1061.** La fonction
range le **premier tiret de la ligne** d'une puce en « glose de liste » et
`styleFiche()` fait `continue` dessus : **l'occurrence n'est ni comptée, ni
affichée, ni rangée hors périmètre — elle disparaît**. C'est exactement ce que
le commentaire de la garde d'intervalle numérique, dix lignes plus bas,
interdit pour son propre cas : *« L'exemption sort en hors-perimetre et non en
silence, comme les alt et les tableaux : elle reste comptée, donc
mesurable. »* **Deux exemptions voisines, deux régimes opposés, et c'est celle
qui porte le chantier qui est muette.**

⚠ **ET LE MOTIF PORTE UN SECOND DÉFAUT, PLUS DUR, QUE LA RECONNAISSANCE A
TROUVÉ ET QUE LE BRIEF NE NOMMAIT PAS.** La glose est cherchée par
`nu.search(/[—–]/)` — **le premier tiret de l'une OU l'autre
espèce**. Sur une puce qui porte un **intervalle numérique** avant sa glose,
c'est le **demi-cadratin de l'intervalle** qui est pris pour la glose : il est
avalé en silence, et **le vrai cadratin de glose est ensuite signalé comme
`C109 tiret d incise`**. *Deux fautes sur une seule ligne, en sens contraire.*

### Échantillon C110, nommé et fermé AVANT toute mesure

**Le balayage du corpus rend quatre lignes et quatre seulement** dans ce cas —
c'est l'échantillon, et il est choisi parce qu'il **fait mordre le motif à
tort**, pas parce qu'il le confirme :

1. `embarque/mcu/micropython/micropython-alimentation.md` **ligne 51** —
   `- **Bandeau LED WS2812** : 3–5 A en blanc plein — alimentation dédiée obligatoire.`
2. `embarque/mcu/micropython/micropython-module.md` **ligne 37** —
   `- **Module 3,3–5 V** (…) — tolérant, lire la sérigraphie ;`
3. `en/embarque/mcu/micropython/micropython-alimentation-en.md` **ligne 53**
4. `en/embarque/mcu/micropython/micropython-module-en.md` **ligne 39**

⚠ **Deux familles du balayage rendent ZÉRO et il faut le dire avant de
mesurer** : aucune puce à `*` ne porte de cadratin (**cas d : 0**), et aucun
`alt` d'image logé dans une puce n'en porte (**cas h : 0**). **Le correctif
sera donc non testé sur ces deux branches par le corpus**, et c'est une borne
de l'épreuve, pas un succès.
✅ Les familles qui, elles, sont peuplées : **71** puces à deux cadratins ou
plus, **378** items de **liste numérotée** porteurs, **108** puces logées dans
un **blockquote**.

### Prédictions du relevé d'avant

- **P153.1** — sur les **quatre** fiches de l'échantillon, `--style` rend
  **exactement quatre** signalements `[C109] tiret d incise` portant sur les
  lignes **51, 37, 53, 39**, un par fiche.
- **P153.2** — sur ces mêmes quatre lignes, `--style` ne rend **aucun**
  `[hors-perimetre] tiret d intervalle numerique` : le demi-cadratin de
  l'intervalle est **avalé** par l'exemption de glose. *C'est la preuve
  directe du second défaut, et elle est en creux — une absence de ligne.*
- **P153.3** — `node tools/creer-fiche-en.mjs --style` sans cible rend la
  ligne littérale `242 fiche(s) lue(s), N a reprendre.` ⚠ *Le **242** est
  prédit à l'unité (`find content/en -name "*.md"` rend 242 ce soir) ; le
  **N** ne l'est pas — aucune mesure de ce soir ne le borne, et le corpus EN
  n'a jamais été passé en entier à `--style` hors des lots.*
- **P153.4** — la même commande sur la liste explicite des **248** sources
  FR rend `248 fiche(s) lue(s), N' a reprendre.` ⚠ *Le **248** est prédit à
  l'unité (`find content -name "*.md" -not -path "content/en/*"`) ; il est
  **supérieur au 243 des titres** parce que cinq fichiers FR n'ont pas de
  `title:` — hubs, index ou gabarits — et que `--style` lit des fichiers, pas
  des titres. **Prédit ici, à vérifier au relevé.***
- **P153.5** — sur le corpus FR, la ligne `typographie francaise : 0` **n'est
  pas attendue** : les cinq premiers contrôles de `--style` sont gardés par
  `if (estEn)` et ne s'appliquent pas à un chemin qui ne commence pas par
  `en/`. **Prédiction : `typographie francaise : 0` et
  `virgule ambigue       : 0` sur la passe FR**, quel que soit le contenu.
- **P153.6** — sur le corpus FR, `C109 creees en EN : 0` et
  `C109 supprimees en EN : 0` : le bloc de comparaison est gardé par la
  présence d'un `source_fr:` au front matter, qu'aucune fiche FR ne porte.
- **P153.7** — les deux relevés sont **sauvegardés datés** (C124) sous
  `tools/style-avant-fr-3008s12.txt` et `tools/style-avant-en-3008s12.txt`,
  et `git status --porcelain` rend **11 entrées, 8 hors artefacts**.

**Critère d'arrêt du bloc** : un nombre de fiches lues autre que 242 / 248, ou
un signalement C109 absent sur l'une des quatre lignes de l'échantillon ⇒
**arrêt et remontée**, l'échantillon ne prouvant alors pas ce qu'il doit
prouver.

### Bilan du bloc 153 — relevé d'avant, échantillon C110 fermé

**7 prédictions, 6 tenues, 1 réfutée — 85,7 %.**

✅ **P153.1 tenue, et c'est la preuve du second défaut.** Les quatre fiches de
l'échantillon rendent chacune un `[C109] tiret d incise` aux lignes **51, 37,
53, 39** — le **cadratin de glose**, signalé comme une incise de prose.
✅ **P153.2 tenue, et c'est une preuve EN CREUX** : `grep -c "intervalle
numerique"` rend **0** sur les quatre fiches. *Le demi-cadratin de `3–5 A` et
de `3,3–5 V` est **avalé** par l'exemption de glose et n'apparaît nulle part —
ni en `C109`, ni en `hors-perimetre`. Les deux fautes de la ligne sont donc
mesurées, chacune par sa propre ligne d'attente.*
✅ **P153.3** — `242 fiche(s) lue(s), 166 a reprendre.` **P153.4** —
`248 fiche(s) lue(s), 173 a reprendre.` Les deux populations à l'unité.
✅ **P153.5 / P153.6** — passe FR : `typographie francaise : 0`,
`virgule ambigue       : 0`, `C109 creees en EN     : 0`,
`C109 supprimees en EN : 0`. **Les quatre gardes `if (estEn)` et `source_fr:`
se comportent comme le code les décrit.**

**RELEVÉ D'AVANT, VALEURS DE RÉFÉRENCE DU BLOC 154** — corpus **EN** :
`C109 de prose : 720`, `hors perimetre : 663`, `virgule ambigue : 5`,
`C109 supprimees en EN : 13`, **code de sortie 0**. Corpus **FR** :
`C109 de prose : 752`, `hors perimetre : 733`, **code de sortie 0**.

✅✅ **PREMIER PASSAGE DU SEAU SYMÉTRIQUE SUR LE CORPUS ENTIER, ET L'ARBITRAGE
(b) SE VÉRIFIE EN ACTE.** `C109 supprimees en EN : 13` sur **12 fiches**
(`specification-technique-en` en porte **2**), **et le code de sortie reste
0** : le seau compte, s'affiche, et **n'entre pas dans le verdict**, très
exactement ce que Tim a rendu ce soir. ⚠ *Les douze sont nommées dans
`tools/style-avant-en-3008s12.txt` ; `easyeda-en   C109 : FR 1 / EN 0` en fait
partie — **le cas qui a fait naître le seau se retrouve tout seul dans le
premier balayage de corpus**, sans intervention. Les onze autres n'avaient
jamais été vues.* **Ce n'est pas le sujet de la séance : c'est versé au
BACKLOG, pas traité ici.**

❌ **P153.7 RÉFUTÉE — `11 entrées, 6 hors artefacts` et non 8, ET LA CAUSE EST
UN NOM DE FICHIER QUE J'AI CHOISI MOI-MÊME.**
Le filtre `$saleHors` de `batterie.ps1` écarte toute ligne **contenant** la
chaîne `predictions-`. **`tools/coupe-predictions-3008s12.mjs` et
`tools/coupe-predictions-dry-3008s12.txt` la contiennent** : ce sont un
**outil** et un **relevé**, et ils sont comptés comme des artefacts de
prédiction.
⚠ **Le défaut est plus vieux d'un bloc que sa découverte, et il faut le dire :
le bilan du bloc 152 publie `9 entrées, 6 hors artefacts`. Le 9 a été mesuré ;
le 6 ne l'a pas été — il a été recopié de la déclaration C131. Le chiffre juste
est 4.** *C118 : aucun chiffre sans mesure du jour. J'ai mesuré le premier
terme de la ligne et reporté le second, dans la même phrase.*
⚠ **Et la déclaration C131 du bloc 152 nommait le filtre en toutes lettres** —
« sa ligne porte la chaîne `predictions-` que `$saleHors` écarte » — **à propos
de `predictions-260830-chantier.md`, sans l'appliquer aux deux fichiers
`coupe-predictions-*` écrits par le même bloc.** *C'est la faute du 30/08
(séance 10) rejouée : le raisonnement qui écarte un cas d'une classe n'est pas
rejoué sur les autres membres de la classe.*
✅ **Ce qui a marché** : le défaut est sorti parce que le bloc 153 a **mesuré**
les deux termes au lieu d'en reporter un.
⚠ **RÈGLE CANDIDATE, ET ELLE A UNE PORTÉE AU-DELÀ DE CETTE SÉANCE** : *le
filtre `$saleHors` est une **recherche de sous-chaîne**, donc **tout fichier
dont le nom mentionne `predictions-` disparaît du compteur `hors artefacts`,
outil compris**. Un outil qui opère **sur** le fichier de prédictions se nomme
donc `coupe-fichier-pred-…` ou tout autre nom qui ne porte pas la chaîne du
filtre — sinon le compteur qui existe pour voir les outils est aveugle à
celui-là précisément.* **Remonté à Tim : c'est un défaut de `batterie.ps1`,
pas de la séance.**

---

## Déclaration C131 du bloc 154 — rejouée, trois versements neufs, ET LE FILTRE EST APPLIQUÉ AUX NOMS

- **Population** — inchangée. ⚠ **Le filtre `$saleHors` est une recherche de
  SOUS-CHAÎNE** (`predictions-` ou `batterie-sortie` **n'importe où** dans la
  ligne) : la leçon du bloc 153 est appliquée nom par nom ci-dessous, et non
  par catégorie.
- **Artefacts versés — quatorze entrées** :
  1. `JOURNAL-archive.md` ` M` — **hors** ;
  2. `JOURNAL.md` ` M` — **hors** ;
  3. `tools/predictions-260830.md` ` M` — filtré ;
  4. `tools/batterie-sortie-3008b67.txt` `??` — filtré ;
  5. `tools/coupe-journal-chantier-3008s12.mjs` `??` — **hors** ;
  6. `tools/coupe-journal-dry-3008s12.txt` `??` — **hors** ;
  7. `tools/coupe-predictions-3008s12.mjs` `??` — ⚠ **FILTRÉ**, son nom porte
     `predictions-` ;
  8. `tools/coupe-predictions-dry-3008s12.txt` `??` — ⚠ **FILTRÉ**, même
     cause ;
  9. `tools/predictions-260830-chantier.md` `??` — filtré ;
  10. `tools/style-avant-en-3008s12.txt` `??` — **hors** ;
  11. `tools/style-avant-fr-3008s12.txt` `??` — **hors** ;
  12. `tools/creer-fiche-en.mjs` ` M`, modifié par ce bloc — **hors** ;
  13. `tools/style-apres-en-3008s12.txt` `??`, créé par ce bloc — **hors** ;
  14. `tools/style-apres-fr-3008s12.txt` `??`, créé par ce bloc — **hors**.
- **Total impliqué : 14 entrées au total, 9 hors artefacts de séance.**
- ⚠ **Le bloc n'écrit rien dans `content/`.**

## Prédictions — bloc 154, CORRECTIF #10 de `--style`

**Ce que le correctif change, en trois gestes et pas un de plus** :

1. `exemptions()` distingue l'**espèce** de la ligne — `puce` (`-`, `*`, `+`)
   ou `liste numerotee` (`1.`, `1)`) — et rend une **`Map` index → raison** au
   lieu d'un `Set` d'index.
2. La glose n'est plus « le premier tiret de la ligne » mais **le premier
   tiret qui ne soit pas un intervalle numérique**. *Correctif du second
   défaut, celui que le brief ne nommait pas.*
3. `styleFiche()` ne fait plus `continue` sur une exemption de glose : il
   **pousse** l'occurrence dans une catégorie nommée `glose-liste`, exclue du
   détail par fiche et du code de sortie, **comptée et affichée en bilan**.
   *C'est le régime que la garde d'intervalle numérique s'applique déjà dix
   lignes plus bas ; le correctif étend à la glose ce qui existait à côté.*

⚠ **Décision prise seule, avec son coût de revert (C116 (8)).** Le brief nomme
les **tirets**. Le **point-virgule de fin d'item** souffre du **même**
silence, dans la **même** fonction, à **trois lignes** de distance. Il est
compté lui aussi, **dans un seau séparé** pour que le chiffre du chantier des
puces ne s'en trouve pas mêlé. **Coût de revert : une ligne de logique et une
d'affichage.** *Motif : laisser muette l'exemption voisine reconstituerait, à
trois lignes du correctif, exactement le défaut qu'il répare.*

### Épreuve C110 — l'échantillon nommé au bloc 153, et ce qu'il doit rendre

- **P154.1** — sur les **quatre** fiches de l'échantillon, aux lignes **51,
  37, 53, 39**, `--style` rend désormais **deux** lignes et non une :
  `[hors-perimetre] tiret d intervalle numerique` **et**
  `[glose-liste] tiret de glose de puce` ; **et plus aucun**
  `[C109] tiret d incise` sur ces quatre lignes. *Les deux fautes en sens
  contraire tombent du même geste.*
- **P154.2** — `exemptions(` n'a **qu'un seul appelant** dans le fichier, et
  la signature change donc en un seul endroit. *Vérifié par `grep -c` avant
  d'écrire, et le compte est publié au bilan.*

### Compteurs, écrits comme les lignes littérales attendues

- **P154.3** — corpus **EN** : `  C109 de prose         : 718`
  (**720 − 2**, les deux fiches EN de l'échantillon).
- **P154.4** — corpus **EN** : `  hors perimetre        : 665`
  (**663 + 2**, les deux demi-cadratins d'intervalle qui cessent d'être
  avalés).
- **P154.5** — corpus **FR** : `  C109 de prose         : 750` et
  `  hors perimetre        : 735` (**752 − 2** et **733 + 2**).
- **P154.6** — corpus **FR**, ligne neuve :
  `  glose de liste, tiret : 2553   (puce 2360 / liste numerotee 193)`
  ⚠ **Fourchette déclarée [2540, 2565]** sur le total. *Motif de la marge :
  le point 2 553 sort d'un compteur de reconnaissance qui **mime** le masquage
  de `masquerHorsProse` sans le rejouer — il traite `~~~` comme `` ``` ``, ne
  rejoue ni `frontMatter()` ni la garde `citeFr` des deux accueils. **La
  décomposition puce / liste numérotée est prédite pour être vérifiée terme à
  terme, pas pour se cacher derrière son total.***
- **P154.7** — corpus **EN**, ligne neuve :
  `  glose de liste, tiret : 2506   (puce 2323 / liste numerotee 183)`
  ⚠ **Fourchette [2493, 2518]**, même motif, plus la garde `citeFr` qui ne
  s'applique qu'au corpus EN.
- **P154.8** — ligne neuve du second seau : **FR**
  `  glose de liste, ; fin : 371   (puce 356 / liste numerotee 15)` ; **EN**
  `  glose de liste, ; fin : 369   (puce 354 / liste numerotee 15)`.
  ⚠ **Fourchettes [365, 377] et [363, 375].**
- **P154.9** — `242 fiche(s) lue(s), 166 a reprendre.` et
  `248 fiche(s) lue(s), 173 a reprendre.` — **les deux INCHANGÉS**. *Motif lu
  dans le code : une fiche est « à reprendre » si `dur` n'est pas vide, et
  `glose-liste` est retiré de `dur` comme `hors-perimetre` l'est déjà ; les
  quatre fiches de l'échantillon portent par ailleurs d'autres signalements
  durs, donc aucune ne sort de la liste.*
- **P154.10** — `  C109 supprimees en EN : 13`, **inchangé**. *Motif : les
  deux paires `micropython-alimentation` et `micropython-module` perdent
  **une** C109 de chaque côté, `nFr` et `nEn` baissent ensemble, la différence
  ne bouge pas.* ⚠ *C'est le terme écrit pour réfuter : si ce compteur bouge,
  le correctif n'est pas symétrique entre les deux langues.*
- **P154.11** — **codes de sortie 0** des deux côtés : `typo`, `creees` et
  `etrangers` sont les seuls termes du `process.exit`, et aucun des trois
  n'est touché.
- **P154.12** — `git diff --numstat tools/creer-fiche-en.mjs` rend **une
  seule ligne**, en ` M` ; `git status --porcelain` rend **14 entrées, 9 hors
  artefacts**, exactement celles de la déclaration ci-dessus.

**Critère d'arrêt du bloc** : un `C109 de prose` autre que 750 / 718, un
`hors perimetre` autre que 735 / 665, un `C109 supprimees en EN` autre que 13,
ou un code de sortie non nul ⇒ **arrêt, `git checkout -- tools/creer-fiche-en.mjs`,
remontée à Tim**.

### Bilan du bloc 154 — CORRECTIF #10 écrit et éprouvé

**14 prédictions (P154.1 à P154.12, deux d'entre elles à deux termes), 12
tenues, 2 réfutées — 85,7 %.**

✅✅ **ÉPREUVE C110 CONCLUANTE, ET ELLE SE LIT EN AVANT / APRÈS SUR LE MÊME
FICHIER.** Le fichier a été remis à `HEAD` par `git checkout --` le temps de la
mesure d'avant, puis le correctif restauré depuis une copie hors arbre, `cmp`
muet. Sur les quatre fiches de l'échantillon :
**AVANT** — `51 [C109] tiret d incise`, `37 [C109] tiret d incise`,
`53 [C109] tiret d incise`, `39 [C109] tiret d incise` ;
`C109 de prose : 40`, `hors perimetre : 42`.
**APRÈS** — **les quatre ont disparu** du détail ; `C109 de prose : 36`,
`hors perimetre : 58`, `glose de liste, tiret : 50 (puce 50 / liste numerotee 0)`,
`glose de liste, ; fin : 8`.
*Le seul `[C109]` qui subsiste à une ligne 39 est un `point-virgule de prose`
d'une autre fiche, présent avant comme après.*

✅ **P154.3 / P154.5a** — `C109 de prose` **720 → 718** (EN) et **752 → 750**
(FR), **exactement −2 de chaque côté**, les deux fiches de l'échantillon.
✅✅ **P154.6, P154.7, P154.8 — LES HUIT TERMES DES DEUX SEAUX NEUFS SONT
JUSTES À L'UNITÉ, ET PAS SEULEMENT LEURS TOTAUX.**
FR `glose de liste, tiret : 2553   (puce 2360 / liste numerotee 193)` ;
FR `glose de liste, ; fin : 371   (puce 356 / liste numerotee 15)` ;
EN `glose de liste, tiret : 2506   (puce 2323 / liste numerotee 183)` ;
EN `glose de liste, ; fin : 369   (puce 354 / liste numerotee 15)`.
⚠ *Les quatre fourchettes publiées — [2540, 2565], [2493, 2518], [365, 377],
[363, 375] — étaient **inutiles** : le compteur de reconnaissance qui mime
`masquerHorsProse` sans le rejouer tombe au chiffre exact, huit fois sur huit.
**La marge était prudente et elle a coûté zéro ; il faut quand même dire
qu'elle n'a rien couvert.***
✅ **P154.9** — `242 fiche(s) lue(s), 166 a reprendre.` et
`248 fiche(s) lue(s), 173 a reprendre.` **inchangés**, comme le retrait de
`glose-liste` de `dur` le prédisait.
✅✅ **P154.10 — LE TERME ÉCRIT POUR RÉFUTER NE MORD PAS.**
`C109 supprimees en EN : 13`, inchangé : les deux paires de l'échantillon
perdent **une** C109 de chaque côté, `nFr` et `nEn` baissent ensemble. *Si ce
compteur avait bougé, le correctif aurait été asymétrique entre les deux
langues — il ne l'est pas.*
✅ **P154.11 / P154.12** — codes de sortie **0** des deux côtés ;
`git diff --numstat tools/creer-fiche-en.mjs` rend **une seule ligne**,
`79  13  tools/creer-fiche-en.mjs` ; `git status` **14 entrées, 9 hors
artefacts**, exactement les quatorze déclarées, **filtre appliqué nom par
nom**.

❌❌ **P154.4 ET P154.5b RÉFUTÉES : `hors perimetre` monte de +9 et non de +2,
DES DEUX CÔTÉS. EN 663 → 672, FR 733 → 742.**
✅ **La cause a été MESURÉE et non plaidée**, et elle est nominative : **9
lignes par langue** ont pour **premier tiret** un intervalle numérique, et
elles se coupent en **2 avec une glose plus loin** — les deux de l'échantillon
— et **7 sans aucune autre glose**.
⚠ **C'est la faute du 30/08 (séance 10) rejouée à l'identique** : *« quand un
raisonnement écarte un cas d'une passe, il faut le rejouer sur chaque membre de
la même classe »*. **J'ai construit l'échantillon C110 sur la famille à DEUX
fautes — intervalle *puis* glose — et je n'ai jamais demandé ce que devenait
une puce dont l'intervalle est le SEUL tiret.** Avant le correctif, elle était
exemptée en silence comme « glose » ; après, elle tombe dans la garde
d'intervalle et sort en `hors-perimetre`. *Sept lignes par langue, toutes dans
`micropython-alimentation` sauf une dans `oscilloscope`, et cette dernière est
un **item de liste numérotée** — la famille que le brief nommait.*
✅ **Ce que la réfutation apprend, et qui est un gain net** : le correctif ferme
un **troisième** angle mort que ni le brief ni moi n'avions nommé — **les
intervalles numériques logés dans une puce n'étaient comptés nulle part**, ni
en C109 ni hors périmètre. **Dix-huit occurrences sortent du silence, neuf par
langue, et leur symétrie FR/EN parfaite est elle-même un contrôle.**

---

## ⚠ CHANGEMENT D'ÉTAT EN COURS DE SÉANCE : L'HORLOGE A PASSÉ MINUIT

**Il est le 31/08.** La branche déclarée en **P149.4** se réalise donc, mais
**après** l'ouverture et non pendant : la séance a commencé le 30/08 à 23:37:44
et se poursuit le 31/08.
**Décision, prise seule, avec son précédent** : *le fichier de prédictions suit
la SÉANCE, pas l'horloge* — cette séance continue d'écrire dans
`tools/predictions-260830.md`. **Précédent** : la onzième séance du 29/08 a
écrit dans `tools/predictions-260829.md` jusqu'à **00:26** le 30/08, et le
fichier `predictions-260830.md` s'ouvre sur la séance du lot 7, pas sur la fin
de la précédente. **Coût de revert : nul** — aucun fichier n'est nommé par la
date de l'horloge tant qu'aucune batterie ne tourne.
⚠ **Ce que cela change pour la suite** : la **prochaine** garde rendra
`date ISO : 2026-08-31`, et sa copie C124 s'appellera
`tools\batterie-sortie-3108b1.txt` et non `3008b68` — le rang repart à **1**
parce que l'étiquette `jjMM` change. **C'est prédit ici, avant le bloc qui le
mesurera.**

---

## Déclaration C131 du bloc 155 — rejouée, deux versements neufs

- **Population** — inchangée, filtre appliqué **nom par nom**.
- **Artefacts versés — seize entrées** : les quatorze du bloc 154, plus
  `tools/perimetre-fr-3008s12.txt` et `tools/perimetre-en-3008s12.txt`, créés
  par ce bloc — `??`, **hors artefacts** tous les deux.
  ⚠ **`tools/creer-fiche-en.mjs` reste UNE entrée** ` M` : ce bloc le modifie
  une seconde fois, ce qui ne crée pas d'entrée neuve. *C'est le piège du
  compteur d'entrées que l'incident du 30/08 (séance 10) a nommé — il compte
  des fichiers, pas des écritures.*
- **Total impliqué : 16 entrées au total, 11 hors artefacts de séance.**

## Prédictions — bloc 155, MESURE DU PÉRIMÈTRE DU CHANTIER DES PUCES À TIRET

⚠ **Décision prise seule, avec son coût de revert (C116 (8)) : la mesure se
fait DANS `--style` et non dans un outil séparé.** Motif : le périmètre se
définit par le **cas 1 de l'amendement C109 du 29/08 (suite 8)** — *tiret sous
`## Voir aussi` / `## Aller plus loin`, licite, **hors périmètre*** —, donc il
s'obtient en retranchant une **zone** du seau que le bloc 154 vient de créer.
Le mesurer ailleurs demanderait de **réimplémenter le prédicat de glose**, ce
que C119 proscrit (« on relance l'outil »), et les deux implémentations
divergeraient au premier correctif. **Coût de revert : les trois lignes
d'affichage, le champ `zone` et le champ `porteur`.**

**Deux ajouts, et pas un de plus** : (1) un champ `zone` sur l'occurrence, qui
vaut `liens` sous une section `## Voir aussi` / `## Aller plus loin` /
`## See also` / `## Going further` et `null` ailleurs, avec la **même règle de
portée que `puces-tiret.mjs`** — une section exclue court de son titre au
prochain titre de rang inférieur ou égal ; (2) un champ `porteur` sur les
occurrences C109, qui vaut l'espèce de la ligne de liste quand il y en a une —
**c'est le cas 3 de l'amendement**, le tiret logé dans la prose d'une puce.

### Lignes littérales attendues — corpus FR (248 fiches)

- **P155.1** — `  glose de liste, tiret : 2553   (puce 2360 / liste numerotee 193)`
  **inchangé** : le champ `zone` découpe le seau, il ne le change pas.
- **P155.2** — `     dont section de liens : 1389   (puce 1389 / liste numerotee 0)`
  ⚠ **`liste numerotee 0` est le terme écrit pour réfuter** : si un seul item
  numéroté apparaissait sous une section de liens, la prédiction tomberait.
  *Motif : les sections `Voir aussi` du corpus sont écrites en puces, jamais en
  listes ordonnées.*
- **P155.3** — `     PERIMETRE cas 2+4     : 1164   (puce 971 / liste numerotee 193)`
  et l'invariant **1389 + 1164 = 2553** se referme.
- **P155.4** — `     porteuses du perimetre : 178 fichier(s)`
- **P155.5** — `  C109 sur ligne de liste : 36   (cas 3 de l amendement C109)`

### Lignes littérales attendues — corpus EN (242 fiches)

- **P155.6** — `  glose de liste, tiret : 2506   (puce 2323 / liste numerotee 183)`
- **P155.7** — `     dont section de liens : 1378   (puce 1378 / liste numerotee 0)`
- **P155.8** — `     PERIMETRE cas 2+4     : 1128   (puce 945 / liste numerotee 183)`,
  invariant **1378 + 1128 = 2506**.
- **P155.9** — `     porteuses du perimetre : 173 fichier(s)`
- **P155.10** — `  C109 sur ligne de liste : 35   (cas 3 de l amendement C109)`

### ⚠ LA PRÉDICTION QUI COMPTE VRAIMENT, ET ELLE CONTREDIT LE BRIEF

- **P155.11** — **LA « BORNE HAUTE » DE 937 N'EN EST PAS UNE.** Le périmètre FR
  mesuré, **1 164**, est **supérieur de 227** à la référence
  `puces-tiret.mjs --corpus` motif A (**FR 937 puces / 166 porteuses /
  248 fichiers**), que le BACKLOG et le brief présentent comme un plafond.
  **Décomposition prédite de l'écart de 227, terme à terme** : **193** items de
  **liste numérotée**, que le motif A ne peut pas voir — son prédicat de puce
  est `/^\s*[-*]\s/` et n'accepte **ni `1.`, ni `1)`, ni `+`** ; plus **34**
  lignes de puce qu'il manque pour des causes à départager.
  ⚠ **Ces 34 ne sont PAS prédits dans leur décomposition** — trois causes sont
  plausibles (puce logée dans un **blockquote**, que `^\s*[-*]\s` ne peut pas
  atteindre ; **demi-cadratin** de glose, que le motif A n'accepte pas ;
  **cadratin non entouré d'espaces**, que sa constante `TIRET = ' — '` exige)
  et **aucune n'est chiffrée avant la mesure**. *Un total juste ne vaudrait pas
  décomposition (règle du 29/08) : le bloc mesurera les trois.*
- **P155.12** — le périmètre **EN 1 128** est de même supérieur à la référence
  EN **902** de **226**, dont **183** de listes numérotées et **43** à
  départager.
- **P155.13** — `git status --porcelain` rend **16 entrées, 11 hors
  artefacts** ; codes de sortie **0** des deux côtés.

**Critère d'arrêt du bloc** : un invariant `section de liens + PERIMETRE`
différent du total du seau, ou un `glose de liste, tiret` qui bougerait du
bloc 154 ⇒ **arrêt, `git checkout -- tools/creer-fiche-en.mjs`, remontée**.

### Bilan du bloc 155 — le périmètre est mesuré

**13 prédictions, 11 tenues, 2 réfutées — 84,6 %.**

✅✅ **LES HUIT TERMES DU PÉRIMÈTRE SONT JUSTES À L'UNITÉ, DES DEUX CÔTÉS.**
FR : `glose de liste, tiret : 2553   (puce 2360 / liste numerotee 193)` ;
`dont section de liens : 1389   (puce 1389 / liste numerotee 0)` ;
`PERIMETRE cas 2+4     : 1164   (puce 971 / liste numerotee 193)` ;
`porteuses du perimetre : 178 fichier(s)`.
EN : `2506 (2323 / 183)`, `1378 (1378 / 0)`, `1128 (945 / 183)`,
`173 fichier(s)`.
✅ **Les deux invariants se referment** : 1 389 + 1 164 = 2 553 et
1 378 + 1 128 = 2 506.
✅✅ **LE TERME ÉCRIT POUR RÉFUTER NE MORD PAS, DES DEUX CÔTÉS** :
`liste numerotee 0` sous les sections de liens. *Aucun `## Voir aussi` du
corpus n'est écrit en liste ordonnée — c'était l'hypothèse, elle est
mesurée.*
✅ **Le seau du bloc 154 n'a pas bougé** : le champ `zone` **découpe** le
volume, il ne le change pas. C'était le critère d'arrêt, il ne s'est pas
déclenché.

❌❌ **P155.5 ET P155.10 RÉFUTÉES, ET C'EST C116 (7) DANS SA FORME PURE.**
`C109 sur ligne de liste` prédit **36 / 35**, mesuré **75 / 73**.
**J'ai prédit ce que MA reconnaissance comptait — les tirets — et le compteur
compte `x.cat === 'C109'`, c'est-à-dire les tirets ET les points-virgules.**
⚠ *Le compteur a été écrit par moi, dans le bloc précédent, quatre lignes
au-dessus de la prédiction.* **C'est la troisième fois de la séance qu'une
prédiction porte sur la population que j'avais en tête et non sur celle que le
code additionne** — après le `hors artefacts` du bloc 153 et le `hors
perimetre` du bloc 154.
✅ **Ce que la réfutation vaut** : elle nomme un défaut réel de l'instrument —
**la ligne ne déclarait pas sa population**, alors que le §8 porte depuis six
lots la règle *« un compteur qui déclare sa population dans sa sortie »*. Le
bloc 156 la répare **dans le code**, et non dans une prédiction future.

---

## Déclaration C131 du bloc 156 — rejouée, un versement neuf

- **Population** — inchangée, filtre appliqué **nom par nom**.
- **Artefacts versés — dix-sept entrées** : les seize du bloc 155, plus
  `tools/ecart-motifA-3008s12.txt`, créé par ce bloc — `??`, **hors
  artefacts**. ⚠ `tools/creer-fiche-en.mjs` reste **une** entrée ` M` (3ᵉ
  écriture), et `tools/perimetre-fr-3008s12.txt` /
  `tools/perimetre-en-3008s12.txt` restent **deux** entrées (réécrites).
- **Total impliqué : 17 entrées au total, 12 hors artefacts de séance.**

## Prédictions — bloc 156, la ligne déclare sa population, et l'écart au motif A se décompose

### (a) Le compteur déclare sa population — lignes littérales attendues

- **P156.1** — FR : `  C109 sur ligne de liste : 75   (tiret 36 / point-virgule 39)`
- **P156.2** — EN : `  C109 sur ligne de liste : 73   (tiret 35 / point-virgule 38)`
  *Les totaux 75 et 73 sont **mesurés** au bloc 155 ; les termes `tiret` 36 et
  35 sont **prédits** depuis la reconnaissance, et les termes `point-virgule`
  s'en déduisent — 39 et 38. **Si le terme `tiret` tombe, la décomposition est
  bonne ; s'il rate, c'est la reconnaissance qui comptait autre chose.***
- **P156.3** — les **huit** termes du périmètre et les **quatre** du seau de
  glose sont **inchangés** au chiffre : 2553 / 1389 / 1164 / 178 et 2506 /
  1378 / 1128 / 173 ; `C109 de prose` reste **750 / 718**, `hors perimetre`
  **742 / 672**, `C109 supprimees en EN` **13**. **Codes de sortie 0.**

### (b) Décomposition de l'écart au motif A de `puces-tiret.mjs`

**Le fait à instruire** : le périmètre **puce** mesuré vaut **971 FR** et
**945 EN**, quand `puces-tiret.mjs --corpus` motif A rend **937 FR** et
**902 EN** — soit **+34** et **+43**. *Les deux comptent une LIGNE de puce au
plus une fois, donc les unités sont comparables ; ce qui diffère est le
prédicat.*

- **P156.4** — **la cause dominante est la puce logée dans un BLOCKQUOTE**,
  que le prédicat `PUCE = /^\s*[-*]\s/` de `puces-tiret.mjs` ne peut pas
  atteindre — un `>` n'est pas un blanc. **Prédit : au moins 20 des 34 FR et
  au moins 25 des 43 EN.** *Fondement : le balayage du bloc 153 a rendu **108**
  puces logées dans un blockquote et porteuses d'un tiret, les deux langues
  confondues.*
- **P156.5** — **deuxième cause, le DEMI-CADRATIN de glose** : la constante
  `TIRET = ' — '` de `puces-tiret.mjs` n'accepte que U+2014, quand
  `exemptions()` prend la première occurrence de `[U+2014 U+2013]` non
  intervalle. **Prédit : entre 0 et 10 par langue.**
- **P156.6** — **troisième cause, le cadratin NON ENTOURÉ D'ESPACES** :
  `TIRET` exige `U+0020 U+2014 U+0020`. **Prédit : entre 0 et 10 par langue.**
- **P156.7** — **une cause joue en sens INVERSE et il faut la chiffrer aussi**
  : `puces-tiret.mjs` **ne masque ni le code inline ni les commentaires HTML**,
  quand `masquerHorsProse` le fait. **Prédit : au moins 1 ligne comptée par le
  motif A et non par le périmètre, dans chaque langue.** ⚠ *Si ce terme vaut
  zéro, l'écart net et l'écart brut se confondent et la décomposition est plus
  simple que prévu — ce serait une réfutation utile.*
- **P156.8** — **les quatre termes se referment sur l'écart** :
  `blockquote + demi-cadratin + sans espaces − sens inverse = 34` en FR et
  `= 43` en EN. ⚠ *C'est le vrai critère : un total juste ne vaut pas
  décomposition, mais une décomposition qui ne se referme pas est fausse à
  coup sûr.*
- **P156.9** — **la conclusion de fond, prédite avant la mesure** : la
  référence **FR 937** que le BACKLOG et le brief nomment « **borne haute** »
  est **inférieure** au périmètre réel de **227**, et le premier terme de cet
  écart n'est **pas** une subtilité de typographie mais une **famille entière
  que son prédicat ne peut pas voir** — les **193** items de liste numérotée.
  **Une référence appelée borne haute qui minore de 19,5 % ne borne rien.**
- **P156.10** — `git status --porcelain` rend **17 entrées, 12 hors
  artefacts**.

**Critère d'arrêt du bloc** : un des douze termes du (a) qui bougerait, ou une
décomposition du (b) qui ne se referme pas sur 34 / 43 ⇒ **arrêt et
remontée** — dans le second cas sans revert, la mesure n'écrivant rien.

### Bilan du bloc 156 — le compteur déclare sa population, l'écart au motif A est décomposé

**10 prédictions, 9 tenues, 1 réfutée — 90,0 %.**

✅ **P156.1 / P156.2 / P156.3** — `C109 sur ligne de liste : 75   (tiret 36 /
point-virgule 39)` en FR, `73   (tiret 35 / point-virgule 38)` en EN. **Les
termes `tiret` 36 et 35 étaient prédits ; ils tombent, donc la décomposition
de la réfutation du bloc 155 était la bonne.** Les douze termes du périmètre et
du seau de glose sont **inchangés au chiffre**, `C109 de prose` **750 / 718**,
`hors perimetre` **742 / 672**, `C109 supprimees en EN` **13**, codes de sortie
**0**.

✅✅ **LA DÉCOMPOSITION DE L'ÉCART AU MOTIF A SE REFERME AU CHIFFRE, DANS LES
DEUX LANGUES.**
**FR** : périmètre puce **971**, motif A **937**, écart net **34** =
`blockquote 39` + `puce à + 0` + `demi-cadratin 4` + `cadratin sans espaces 0`
+ `autre 0` − `sens inverse 9`.
**EN** : périmètre puce **945**, motif A **902**, écart net **43** =
`39 + 0 + 4 + 0 + 0 − 0`.
✅ **P156.4 tenue et la cause dominante est bien celle prédite** : la **puce
logée dans un blockquote**, **39 par langue**, que le prédicat
`PUCE = /^\s*[-*]\s/` de `puces-tiret.mjs` **ne peut pas atteindre** — un `>`
n'est pas un blanc. *Prédit « au moins 20 FR et au moins 25 EN » : 39 et 39.*
✅ **P156.5 tenue** — **4 demi-cadratins de glose** par langue, dans [0, 10].
✅ **P156.6 tenue, à la borne basse** — **0 cadratin non entouré d'espaces**.
*La constante `TIRET = ' — '` n'écarte rien dans ce corpus : la règle
d'espacement est tenue à 100 %, et c'est une mesure, pas une impression.*
✅ **P156.8 tenue** — les cinq termes se referment sur 34 et sur 43.
✅✅ **P156.9 TENUE, ET C'EST LA CONCLUSION DE FOND.**

❌ **P156.7 RÉFUTÉE, ET SA RÉFUTATION EST PLUS INSTRUCTIVE QUE SA CONFIRMATION
NE L'AURAIT ÉTÉ.** J'avais prédit « au moins 1 ligne comptée par le motif A et
non par le périmètre, **dans chaque langue** ». **Mesuré : FR 9, EN 0.**
✅ **La cause est mesurée et nominative** : les **neuf** lignes sont **toutes**
dans `content/templates/fiche-notion.md` et `content/templates/fiche-tuto.md`,
et **toutes à l'intérieur d'un commentaire HTML** — vérifié sur pièce,
`- « Exemple — Couveuse à œufs »` est la ligne 111 de `fiche-notion.md`, dans
le bloc `<!-- … -->` ouvert à la ligne 105. *`masquerHorsProse` les masque,
`puces-tiret.mjs` ne masque pas les commentaires HTML.*
✅ **Et l'asymétrie s'explique par la même mesure** : **`content/en/` ne porte
aucun template** — les gabarits sont dépubliés et n'ont jamais été traduits,
`conventions.md` le dit depuis le 24/08. **Zéro template, zéro ligne en sens
inverse.** *La prédiction « dans chaque langue » supposait une symétrie de
population que le corpus n'a pas.*

---

## ⛳ GATE G3 — POINTS (2) ET (3) FAITS. Le périmètre du chantier des puces est chiffré.

⚠⚠ **LE RÉSULTAT PRINCIPAL EST QUE LA « BORNE HAUTE » N'EN EST PAS UNE, ET
L'ÉCART EST DE 227 OCCURRENCES.**

**Périmètre du chantier des puces à tiret, mesuré par l'instrument qui
l'exécutera** :

| | FR | EN |
|---|---|---|
| gloses de liste, tiret (volume) | **2 553** | **2 506** |
| dont sections de liens — **cas 1, hors périmètre** | **1 389** | **1 378** |
| **PÉRIMÈTRE, cas 2 + 4** | **1 164** | **1 128** |
| dont puce | 971 | 945 |
| dont liste numérotée | **193** | **183** |
| fichiers porteurs du périmètre | **178** | **173** |
| **cas 3** — C109 déjà comptée sur ligne de liste | 75 *(tiret 36 / `;` 39)* | 73 *(tiret 35 / `;` 38)* |

**Contre la référence `puces-tiret.mjs --corpus` motif A — FR 937 / EN 902 —
que le BACKLOG et le brief nomment « borne haute » :**
- **FR 1 164 contre 937, soit +227, +24,2 %** ;
- **EN 1 128 contre 902, soit +226, +25,1 %.**
- **Premier terme de l'écart, et il ne tient pas à la typographie : 193 FR et
  183 EN items de LISTE NUMÉROTÉE**, que le prédicat `/^\s*[-*]\s/` du motif A
  ne peut pas voir. *L'amendement C109 du 29/08 (suite 8) ne distingue pas la
  puce de l'item numéroté ; le compteur, si.*
- **Second terme, mesuré et décomposé** : +34 FR et +43 EN sur les puces
  seules, dont **39 par langue** de puces logées dans un **blockquote**,
  **4 par langue** de gloses au **demi-cadratin**, **0** de cadratin sans
  espaces, **moins 9 FR** de lignes de commentaire HTML de gabarit que le
  motif A compte à tort.

⚠ **Conséquence pour le cadrage du chantier** : **1 164 gloses FR sur 178
fichiers**, à juger une par une contre les cas 2 et 4 de l'amendement. *Le taux
de chute observé sur l'unique échantillon existant — **20 sur 32**, lot 3
d'`esp32/` le 29/08 — **ne s'extrapole pas** (C119), et le §8 le dit déjà. Ce
qui est acquis ce soir n'est pas combien tomberont : c'est **combien il y en a,
et où**.*

---

## Déclaration C131 du bloc 157 — rejouée, deux versements neufs

- **Population** — inchangée, filtre appliqué **nom par nom**.
- **Artefacts versés — dix-neuf entrées** : les dix-sept du bloc 156, plus
  `tools/README.md` ` M` (documentation du correctif #10, écrite au bloc 156)
  — **hors artefacts** —, plus `tools/batterie-sortie-3108b1.txt` `??`, créé
  par l'étape 0 de ce bloc — **filtré**.
- **Total impliqué : 19 entrées au total, 13 hors artefacts de séance.**

## Prédictions — bloc 157, garde de péremption avant la clôture §7

`powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase garde`

- **P157.1** — `lignes non ASCII dans batterie.ps1 : 0`
- **P157.2** — `sortie precedente copiee : tools\batterie-sortie-3108b1.txt`
  ⚠ **Le rang repart à 1 et l'étiquette change de jour** : `Get-Date -Format
  'ddMM'` rend `3108` depuis minuit, et aucun `batterie-sortie-3108b*.txt`
  n'existe. *C'est la conséquence de la bascule d'horloge annoncée au bloc 155,
  prédite avant d'être mesurée.*
- **P157.3** — `phase demandee : garde   anneau : 2   chevron : False`
- **P157.4** — `date ISO : 2026-08-31   heure : HH:mm:ss`
- **P157.5** — `HEAD git : 6428d1c 2026-08-30 23:32:01 +0200`, **inchangé au
  caractère** par rapport au bloc 149. *Tim n'a pas commité pendant la séance ;
  un autre hash serait une session parallèle et un motif d'arrêt.*
- **P157.6** — `fichiers modifies non commites : 19   (hors artefacts de seance : 13)`
- **P157.7** — `node : v24.15.0`
- **P157.8** — `  JOURNAL.md                                          2026-08-30 23:44` puis
  une seconde. ⚠ **Écart avec le relevé `3008b67` — qui donnait 23:21:21 —
  ATTENDU et EXPLIQUÉ** : c'est la passe live de la coupe C128, bloc 151,
  horloge de l'outil à **23:44**. **Ce n'est pas une péremption.**
- **P157.9** — `  conventions.md                                      2026-08-30 23:19:22`,
  **inchangé au caractère** : la séance n'y a rien écrit.
- **P157.10** — `  TODO.md                                             2026-08-29 21:48:08`,
  inchangé au caractère.
- **P157.11** — **deux étapes**, chacune fermée par `--- code de sortie : 0`, et
  `Sortie ecrite dans tools\batterie-sortie.txt`.

**Critère d'arrêt du bloc** : un `HEAD` autre que `6428d1c`, une date
d'écriture sur `conventions.md` ou `TODO.md` postérieure aux valeurs
ci-dessus, ou une entrée `git status` hors des dix-neuf déclarées ⇒ **arrêt
avant la clôture §7, remontée à Tim**.

### Bilan du bloc 157 — garde de péremption avant la clôture §7

**11 prédictions, 11 tenues, 0 réfutée. GARDE AU VERT.**
`lignes non ASCII dans batterie.ps1 : 0` ;
`sortie precedente copiee : tools\batterie-sortie-3108b1.txt` — ✅ **la
bascule d'horloge annoncée au bloc 155 se réalise, étiquette `3108`, rang
reparti à 1** ;
`date ISO : 2026-08-31   heure : 00:07:27` ;
`HEAD git : 6428d1c 2026-08-30 23:32:01 +0200` **inchangé au caractère** ;
`fichiers modifies non commites : 19   (hors artefacts de seance : 13)` —
✅ *les deux termes mesurés, filtre appliqué nom par nom, leçon du bloc 153
tenue* ; `node : v24.15.0` ;
`JOURNAL.md 2026-08-30 23:44:11` — **écart attendu et expliqué**, c'est la
passe live de la coupe C128 au bloc 151 ;
`conventions.md 2026-08-30 23:19:22` et `TODO.md 2026-08-29 21:48:08`,
**inchangés au caractère**.

---

## Déclaration C131 du bloc 158 — rejouée, sept versements neufs

- **Population** — inchangée, filtre appliqué **nom par nom**. *Aucun des sept
  noms ci-dessous ne porte `predictions-` ni `batterie-sortie` : les sept
  comptent hors artefacts.*
- **Artefacts versés — vingt-six entrées** : les dix-neuf du bloc 157, plus
  1. `tools/frag-conv-3008s12.md` `??` — **hors** ;
  2. `tools/frag-conv-c109-3008s12.md` `??` — **hors** ;
  3. `tools/frag-backlog-3008s12.md` `??` — **hors** ;
  4. `tools/frag-backlog-puces-3008s12.md` `??` — **hors** ;
  5. `tools/insertions-pilotage-3008s12.json` `??` — **hors** ;
  6. `conventions.md` ` M` — **hors** ;
  7. `BACKLOG.md` ` M` — **hors**.
- **Total impliqué : 26 entrées au total, 20 hors artefacts de séance.**

## Prédictions — bloc 158, écriture de `conventions.md` et de `BACKLOG.md`

`node tools/inserer-pilotage.mjs tools/insertions-pilotage-3008s12.json --negatif`
puis sans drapeau (essai à blanc) puis `--faire`.

**Quatre entrées, deux fichiers, un seul lot tout-ou-rien.**

- **P158.1** — **test négatif délibéré** : `--negatif` altère l'ancre de la
  **première** entrée et le lot entier tombe dessus :
  `REFUS : 1 defaut(s). AUCUN FICHIER ECRIT.`, **code de sortie 1**, et la
  ligne de refus dit `ancre trouvee 0 fois, il en faut exactement 1`.
- **P158.2** — après le test négatif, `conventions.md` fait **584 945** octets
  et `BACKLOG.md` **215 429**, **inchangés à l'octet**.
- **P158.3** — **essai à blanc** : quatre lignes `ok`, puis
  `Essai a blanc concluant : 4 entree(s), 0 defaut.` et **code 0**.
- **P158.4** — les quatre lignes `+N octets` de l'essai à blanc, **littérales
  et dans l'ordre de la table** : `+7631`, `+1440`, `+147`, `+2816`.
  *Décomposition : les deux `avant` valent la taille de leur fragment ; les
  deux `remplacer` valent fragment moins ancre — **1 566 − 126** et
  **713 − 566**, les tailles d'ancre étant mesurées ce soir et non
  supposées.*
- **P158.5** — **écriture** : `ECRIT : 4 entree(s) dans 2 fichier(s).`,
  **code 0**, précédée de
  `ecrit  conventions.md   594016 octets` et
  `ecrit  BACKLOG.md   218392 octets`.
  *Contrôle croisé publié avant la mesure : 584 945 + 7 631 + 1 440 = 594 016,
  et 215 429 + 147 + 2 816 = 218 392.*
- **P158.6** — `node tools/normalize-pilotage.js --check` rend
  `Total : 0 caractere(s) a corriger, 0 fichier(s) modifie(s).`
  ⚠ *Terme écrit pour réfuter : les fragments portent des guillemets français,
  des cadratins, des `⚠`, des `✅` et des espaces insécables héritées du style
  du fichier. **Si l'un d'eux est mal formé, c'est ici que ça se voit**, et le
  bloc s'arrête.*
- **P158.7** — `grep -c "^## 2026-" JOURNAL.md` rend encore **1** : ce bloc ne
  touche pas au JOURNAL.
- **P158.8** — `git status --porcelain` rend **26 entrées, 20 hors artefacts**,
  et `git diff --numstat conventions.md BACKLOG.md` rend **deux lignes**,
  toutes deux en modification, **aucune ligne `A`**.

**Critère d'arrêt du bloc** : un `REFUS` sur la passe réelle, un `--check` non
nul, ou une taille finale autre que 594 016 / 218 392 ⇒ **arrêt,
`git checkout -- conventions.md BACKLOG.md`, remontée à Tim**.

### Bilan du bloc 158 — écriture de `conventions.md` et de `BACKLOG.md`

**8 prédictions, 7 tenues, 1 réfutée — 87,5 %.**

✅ **Test négatif délibéré** : `--negatif` altère l'ancre de la **première**
entrée et le lot entier tombe dessus —
`REFUS  [1] … : ancre trouvee 0 fois, il en faut exactement 1`, puis
`REFUS : 1 defaut(s). AUCUN FICHIER ECRIT.`, **code de sortie 1**. ⚠ *Les
trois autres entrées sortent `ok` et **ne sont pas appliquées** : c'est le
tout-ou-rien en acte.* Tailles **inchangées à l'octet** après le refus,
584 945 et 215 429.
✅ **Essai à blanc** : `Essai a blanc concluant : 4 entree(s), 0 defaut.`,
code 0. **Écriture** : `ECRIT : 4 entree(s) dans 2 fichier(s).`, code 0.
✅✅ **P158.5 tenue à l'octet, et son contrôle croisé était publié avant la
mesure** : `ecrit  conventions.md   594016 octets` = 584 945 + 7 631 + 1 440 ;
`ecrit  BACKLOG.md   218392 octets` = 215 429 + 147 + 2 816.
✅ `normalize-pilotage --check` : `Total : 0 caractere(s) a corriger, 0
fichier(s) modifie(s).` — ⚠ *terme écrit pour réfuter : les fragments portent
guillemets français, cadratins, `⚠`, `✅`, et rien ne mord.*
✅ `grep -c "^## 2026-" JOURNAL.md` rend encore **1** ;
`git status` **26 entrées, 20 hors artefacts** ; `git diff --numstat` rend
`8 1 BACKLOG.md` et `125 0 conventions.md`, **deux lignes, aucune ligne `A`**.

❌ **P158.4 RÉFUTÉE SUR SES QUATRE TERMES, ET C'EST LA QUATRIÈME FOIS DE LA
SÉANCE QUE JE PRÉDIS LA POPULATION QUE J'AVAIS EN TÊTE.** Prédits **+7631**,
**+1440**, **+147**, **+2816** ; affichés **+7356**, **+1381**, **+130**,
**+2738**. **La ligne dit « octets » et le code calcule
`remplacant.length - ancre.length`, c'est-à-dire des unités UTF-16.** Sur du
français accentué l'écart est systématique et toujours dans le même sens.
✅ *Et le même outil compte **juste** là où il écrit : les tailles finales
passent par `Buffer.byteLength` et tombent à l'octet.* **Le même fichier est
exact dans son écriture et faux dans son commentaire.** Versé au §8 au bloc
159.

---

## Déclaration C131 du bloc 159 — rejouée, trois versements neufs

- **Population** — inchangée, filtre appliqué **nom par nom**. *Aucun des trois
  noms neufs ne porte `predictions-` ni `batterie-sortie`.*
- **Artefacts versés — vingt-neuf entrées** : les vingt-six du bloc 158, plus
  `tools/frag-journal-3008s12.md` `??`, `tools/frag-conv-bis-3008s12.md` `??`
  et `tools/insertions-pilotage-b-3008s12.json` `??` — **hors artefacts** tous
  les trois. ⚠ **`JOURNAL.md` et `conventions.md` restent des entrées
  DÉJÀ COMPTÉES** : le premier est ` M` depuis la coupe du bloc 151, le second
  depuis le bloc 158. *Le compteur d'entrées ne voit pas une seconde écriture,
  et c'est le piège nommé par l'incident du 30/08 (séance 10).*
- **Total impliqué : 29 entrées au total, 23 hors artefacts de séance.**

## Prédictions — bloc 159, entrée §7 du JOURNAL et deux entrées §8 de plus

`node tools/inserer-pilotage.mjs tools/insertions-pilotage-b-3008s12.json`
en `--negatif`, puis à blanc, puis `--faire`.

- **P159.1** — **test négatif** : `REFUS : 1 defaut(s). AUCUN FICHIER ECRIT.`,
  **code 1**, `ancre trouvee 0 fois`.
- **P159.2** — **essai à blanc** : `Essai a blanc concluant : 2 entree(s), 0 defaut.`,
  code 0.
- **P159.3** — les deux lignes `+N octets`, **et cette fois en CARACTÈRES,
  leçon du bloc 158 appliquée** : `+2639` pour le fragment de conventions,
  `+12407` pour celui du JOURNAL. *Les tailles en octets sont **2 747** et
  **12 880** ; l'écart des deux paires est exactement le nombre de caractères
  non ASCII de chaque fragment, et c'est ce que la ligne affiche à tort comme
  des octets.*
- **P159.4** — **écriture** : `ecrit  conventions.md   596763 octets` et
  `ecrit  JOURNAL.md   27498 octets`, puis
  `ECRIT : 2 entree(s) dans 2 fichier(s).`, code 0.
  *Contrôles croisés publiés avant la mesure : 594 016 + 2 747 = 596 763 et
  14 618 + 12 880 = 27 498.*
- **P159.5** — `grep -c "^## 2026-" JOURNAL.md` rend **2**, et
  `grep -c "^## 2026-08-30 (suite 12)" JOURNAL.md` rend **1**.
- **P159.6** — **structure de l'entrée vérifiée à l'octet** : la ligne qui suit
  `<!-- INSERT_JOURNAL_HERE -->` est le **titre** (aucune ligne blanche entre
  les deux, comme la suite 11 le posait), puis **une ligne blanche**, puis les
  cinq puces ; et **une ligne blanche** sépare la fin de l'entrée du titre de
  la suite 11.
- **P159.7** — `node tools/normalize-pilotage.js --check` rend
  `Total : 0 caractere(s) a corriger, 0 fichier(s) modifie(s).`
- **P159.8** — `node tools/compter-mots.mjs` rend un corpus FR de
  **291 261 mots** et `RESTANT A TRADUIRE : 0 fiches, 0 mots`, **inchangés au
  mot** : la séance n'a écrit **aucun octet** dans `content/`. ⚠ *C'est le
  terme écrit pour réfuter le « ZÉRO OCTET ÉCRIT DANS `content/` » du
  périmètre de l'entrée ; il est mesuré ce soir et non reporté.*
- **P159.9** — `git status --porcelain` rend **29 entrées, 23 hors artefacts**,
  et `git diff --numstat` porte **quatre** lignes de modification —
  `BACKLOG.md`, `conventions.md`, `JOURNAL.md`, `JOURNAL-archive.md` — plus
  `tools/creer-fiche-en.mjs`, `tools/README.md` et
  `tools/predictions-260830.md`, soit **sept lignes au total, aucune ligne
  `A`**.

**Critère d'arrêt du bloc** : un `REFUS` sur la passe réelle, un `--check` non
nul, un corpus FR autre que 291 261 mots, ou un `grep -c` autre que 2 ⇒
**arrêt, `git checkout -- JOURNAL.md conventions.md`, remontée à Tim**.

### Bilan du bloc 159 — entrée §7 du JOURNAL et deux entrées §8 de plus

**9 prédictions, 9 tenues, 0 réfutée.**
✅ Test négatif : `REFUS : 1 defaut(s). AUCUN FICHIER ECRIT.`, code 1, et
l'entrée valide du JOURNAL **non appliquée**. Essai à blanc
`2 entree(s), 0 defaut.`
✅✅ **P159.3 tenue — la leçon du bloc 158 est appliquée le bloc suivant** :
`+2639` et `+12407`, prédits **en caractères** et non en octets, quand les
fragments pèsent **2 747** et **12 880** octets.
✅ Écriture : `ecrit  conventions.md   596763 octets`,
`ecrit  JOURNAL.md   27498 octets`, `ECRIT : 2 entree(s) dans 2 fichier(s).`,
code 0. **Les deux contrôles croisés publiés avant la mesure se referment** :
594 016 + 2 747 = 596 763 et 14 618 + 12 880 = 27 498.
✅ Structure vérifiée à l'octet : `<!-- INSERT_JOURNAL_HERE -->` puis le titre
**sans ligne blanche**, ligne blanche, cinq puces, et **ligne blanche** avant
le titre de la suite 11 (ligne 44 vide, titre en 45).
✅ `grep -c "^## 2026-"` rend **2** ; `--check` de normalisation à **0** ;
`compter-mots` rend **291 261 mots FR** et
`RESTANT A TRADUIRE   : 0 fiches, 0 mots FR`, **inchangés au mot** — le terme
écrit pour réfuter le « zéro octet dans `content/` » ne mord pas.
✅ `git status` **29 entrées, 23 hors artefacts** ; `git diff --numstat` porte
**sept lignes**, toutes de modification, **aucune ligne `A`**.

---

## Déclaration C131 du bloc 160 — rejouée, trois versements neufs

- **Population** — inchangée, filtre appliqué nom par nom.
- **Artefacts versés — trente-deux entrées** : les vingt-neuf du bloc 159, plus
  `tools/frag-journal-corr-3008s12.md`, `tools/frag-journal-corr2-3008s12.md`
  et `tools/insertions-pilotage-c-3008s12.json` — `??`, **hors artefacts** tous
  les trois. `JOURNAL.md` reste **une** entrée déjà comptée.
- **Total impliqué : 32 entrées au total, 26 hors artefacts de séance.**

## Prédictions — bloc 160, correction de deux lignes de l'entrée §7

⚠ **Pourquoi ce bloc existe : l'entrée écrite au bloc 159 sous-compte les blocs
de la séance.** Elle annonce *« Dix blocs d'exécution (149 à 158) »* alors que
la séance en porte **onze** — le bloc 159, qui a écrit l'entrée, en est un.
*La ligne de bilan, elle, est juste dans sa portée : elle dit « sur les blocs
149 à 158 ». C'est la ligne de périmètre qui confond la portée du décompte avec
le nombre de blocs.* **Corrigé plutôt que laissé** : un compte de blocs est un
chiffre de protocole, et un chiffre faux dans le périmètre d'une entrée se
reporte de séance en séance.

- **P160.1** — test négatif : `REFUS : 1 defaut(s). AUCUN FICHIER ECRIT.`,
  code 1.
- **P160.2** — essai à blanc : `Essai a blanc concluant : 2 entree(s), 0 defaut.`,
  code 0, avec les deux lignes littérales `+1 octets` et `+153 octets` —
  **en caractères**, `194 − 193` et `200 − 47`.
- **P160.3** — écriture : `ecrit  JOURNAL.md   27655 octets` puis
  `ECRIT : 2 entree(s) dans 1 fichier(s).`, code 0. *Contrôle croisé publié
  avant la mesure : 27 498 + 202 − 201 + 208 − 52 = 27 655.*
- **P160.4** — `grep -c "Onze blocs d'exécution (149 à 159)" JOURNAL.md` rend
  **1**, et `grep -c "Dix blocs" JOURNAL.md` rend **0**.
- **P160.5** — `node tools/normalize-pilotage.js --check` rend
  `Total : 0 caractere(s) a corriger, 0 fichier(s) modifie(s).`
- **P160.6** — `grep -c "^## 2026-" JOURNAL.md` rend encore **2**.
- **P160.7** — `git status --porcelain` rend **32 entrées, 26 hors artefacts**.

**Critère d'arrêt du bloc** : un `REFUS` sur la passe réelle, ou une taille
finale autre que 27 655 ⇒ **arrêt, `git checkout -- JOURNAL.md`, remontée**.

### Bilan du bloc 160 — correction de deux lignes de l'entrée §7

**7 prédictions, 7 tenues, 0 réfutée.**
✅ Test négatif : `REFUS : 1 defaut(s). AUCUN FICHIER ECRIT.`, code 1. Essai à
blanc : `Essai a blanc concluant : 2 entree(s), 0 defaut.`, code 0, avec
`+1 octets` et `+153 octets` — **prédits en caractères**, `194 − 193` et
`200 − 47`, deuxième application de suite de la leçon du bloc 158.
✅ Écriture : `ecrit  JOURNAL.md   27655 octets`,
`ECRIT : 2 entree(s) dans 1 fichier(s).`, code 0. **Contrôle croisé publié
avant la mesure : 27 498 + 202 − 201 + 208 − 52 = 27 655.**
✅ `grep -c "Onze blocs d'exécution (149 à 159)"` rend **1**,
`grep -c "Dix blocs"` rend **0**, `grep -c "^## 2026-"` rend **2** ;
`--check` de normalisation à **0** ; `git status` **32 entrées, 26 hors
artefacts**.

---

# TOTAL DE LA SÉANCE 12 — après les écritures de pilotage

**132 prédictions à décompte plein, 124 tenues, 8 réfutées — 93,9 %**, sur
**douze blocs (149 à 160)**, **deux gardes au vert**, **cinq tests négatifs
délibérés, cinq refus, zéro fichier écrit à tort**, **un incident d'ouverture
consigné**, **zéro octet dans `content/`**.

**La coupe instrument / monde, deuxième point de mesure** :
- **prédictions d'INSTRUMENT : 116, dont 111 tenues — 95,7 %.**
- **prédictions de MONDE : 16, dont 13 tenues — 81,3 %.**

*La forme de la coupe tient — l'instrument reste au-dessus — mais le taux de
monde est le **double** des 41,9 % de la séance 11, et le motif est
méthodologique : presque toutes les prédictions de monde de ce soir sont
**adossées à une reconnaissance mesurée le soir même**. **La coupe utile n'est
peut-être pas instrument / monde mais reconnu / non reconnu**, et il faudra un
troisième point de mesure pour trancher. Versé au §8.*

**Les cinq tests négatifs délibérés** : ancre de blurb dupliquée sur des copies
hors arbre (coupe du JOURNAL) ; cible existante (coupe des prédictions) ; et
trois ancres altérées sur `inserer-pilotage`. **Cinq refus, zéro octet écrit à
tort, et dans les trois derniers cas les entrées valides du même lot ne sont
pas appliquées non plus — le tout-ou-rien en acte.**

**Les huit réfutations, et sept d'entre elles sont le même mode d'échec** :
P151.14 (une plage au lieu d'une entrée), P153.7 (`hors artefacts`, filtre en
sous-chaîne), P154.4 et P154.5b (`hors perimetre`, échantillon trop riche),
P155.5 et P155.10 (`C109 sur ligne de liste`, population du compteur),
P158.4 (`+N octets` affichés en caractères) — **toutes portent sur la
population que le code additionne, contre celle que j'avais en tête**. La
huitième, P156.7, est d'une autre espèce : elle supposait une **symétrie de
population FR/EN** que le corpus n'a pas, `content/en/` ne portant aucun
gabarit.

---

## Prédictions — bloc 161, non-régression des autres modes de `creer-fiche-en.mjs`

⚠ **Motif du bloc** : le correctif #10 touche `exemptions()`, `styleFiche()` et
`style()`, tous trois **partagés par le seul mode `--style`** — mais le fichier
porte huit modes et une seule erreur de syntaxe les tuerait tous. **Une
vérification qui coûte trois lancements.**

- **P161.1** — `--controle` rend `242 fiche(s)` et **0 divergente**, code 0.
- **P161.2** — `--anneau 2` rend **0 cible rouge**, code 0.
- **P161.3** — `--libelles` rend un bilan à cinq chiffres et **code 0**, la
  ligne de `candidats a lire` étant inchangée depuis la clôture du lot 14.
- **P161.4** — `git status --porcelain` rend **32 entrées, 26 hors artefacts**,
  inchangé : aucun de ces trois modes n'écrit.

### Bilan du bloc 161 — non-régression

**4 prédictions, 4 tenues, 0 réfutée.**
`242 fiche(s) controlee(s), 0 divergente(s).` / `Liens non suffixes : 0 sur 0
fiche(s).` — code 0 ; `cibles rouges distinctes : 0`, `mots : 0`,
`dont HORS anneaux 0..2 : 0` — code 0 ; `--libelles` **4321 / 0 / 148 / 16**,
**inchangé au chiffre depuis la clôture du lot 14**, code 0.
`git status` **32 / 26**, inchangé : aucun des trois modes n'écrit.
✅ **Le correctif #10 est borné au mode `--style`, et c'est mesuré et non
supposé.**

**TOTAL DÉFINITIF DE LA SÉANCE 12 : 136 prédictions, 128 tenues, 8 réfutées —
94,1 %**, sur **treize blocs (149 à 161)**. Instrument **120 / 125, 96,0 %** ;
monde **13 / 16, 81,3 %**.
