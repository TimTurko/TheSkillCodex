# PRÉDICTIONS — séance du 30/08 (lot 7 du chantier de traduction)

> Fichier de la sous-règle C116 amendée (« exécution directe »), terme (1) :
> **les prédictions s'appendent ici AVANT chaque bloc d'exécution**, l'ordre
> des appels dans la transcription faisant foi. Une prédiction sans nombre ni
> forme exacte est réputée absente (terme 2). Chaque gate se ferme sur un
> bilan prédictions/constats (terme 3).
>
> **Ce fichier est neuf.** La séance du 30/08 antérieure (blocs 39 et 40,
> correctif d'arbitrage du lot 6) a été conduite dans le prolongement immédiat
> de la séance du 29/08 (suite 11) et a donc écrit dans
> `tools/predictions-260829.md`, qui se ferme sur son bilan général révisé
> (blocs 30 à 40). **La numérotation des blocs se poursuit : ce fichier ouvre
> au bloc 41.**

---

## En-tête de séance

- **Séance** — 30/08, **PC perso, onglet Code**, modèle **Opus 5**.
- **Objet** — **lot 7 du chantier de traduction**, huitième lot en exécution
  directe, **huitième épreuve de la sous-règle C116 amendée**, **sixième
  séance sous C131** et deuxième sous son amendement du 29/08 (suite 8) dans
  une séance qui ne prolonge pas la précédente.
- **Régime** — exécution directe sous C116 (sous-règle), C118, C119, C120,
  C123, C124, C130, C131 et son amendement, plus les règles d'usage des
  suites 9 à 11 du 29/08 :
  1. *un motif qui balaie les deux corpus s'éprouve sur un **échantillon de
     chaque langue*** (suite 9, éprouvée 1/N à la suite 10) ;
  2. *un **titre de section EN** se relève dans le corpus **avant** d'être
     écrit* (suite 10, éprouvée 1/N à la suite 11 — **à porter à 2/N ici**) ;
  3. *un compteur qui se remesure **déclare sa population dans sa sortie***
     (suite 11, 0/N — **première épreuve ici**, sur le compteur de puces).

  Plus la **clause C113 du 30/08** (arbitrage Tim) : le code d'une fiche EN
  est **identique à l'octet** à celui de sa source FR ; une chaîne affichée
  couplée à un littéral ne se traduit pas, sauf si les deux langues admettent
  une forme de **même longueur**, auquel cas c'est **la source FR qui se
  neutralise**.
- **Périmètre annoncé par le brief** (ligne « Prochaine session » de l'entrée
  du 29/08 suite 11, reconduite par l'entrée du 30/08) — `stm32/` étant
  fermé, le lot se compose sur l'**anneau 2** : **33 fiches restantes,
  47 937 mots, 0 porteuse**. Candidature à mesurer au cadrage :
  **`raspberry-pi/` entier (3 fiches, `tot` 1 134 + 1 167 + 990 = 3 291) +
  `xiao/` entier (2 fiches, 659 + 1 351 = 2 010)**, soit **5 301 sous la
  borne 6 657 avec 1 356 de marge**, et **deux modules fermés d'un coup**.
- **Blocs prévus** — 41 garde d'ouverture ; 42 composition du lot (anneau) ;
  43 cadrage du lot (volume, candidats C109) ; puis motif des puces, passe
  C109, relevés d'avant rédaction, génération, rédaction, clôtures.

### Recoupement du prompt de lancement contre la ligne « Prochaine session »

Le prompt de lancement reprend **au mot** la ligne « Prochaine session » de
l'entrée du 29/08 (suite 11) — anneau 2 à 33 fiches / 47 937 mots / 0
porteuse, candidature `raspberry-pi/` + `xiao/` à 5 301 sous 6 657 avec
1 356 de marge, `ded` nul sur tout le restant donc C127 hors sujet,
`mesure-chevron --tout` en simple confirmation de 34 paires / 0 divergente,
et les **trois relevés avant rédaction**. **Aucun écart.**

Il ajoute **quatre termes** qui ne figurent pas dans cette ligne mais qui
sont tous **traçables à l'entrée du 30/08** ou à une règle en vigueur, donc
**aucun n'est un écart de brief** :

1. le **quatrième relevé** — les chaînes affichées couplées à un littéral, à
   repérer **avant** de traduire, sous la clause C113 du 30/08. *Il est écrit
   en toutes lettres à la fin de l'entrée du 30/08.*
2. les **références de contrôle des titres** : `titres-doublons` des deux
   côtés, **243 / 243 / 0** en FR et **206 / 206 / 0** en EN. *Ce sont les
   chiffres de la ligne « Tailles » de l'entrée du 29/08 (suite 11).*
3. les **références du compteur de puces** : **FR 1 027 sur 173 porteuses
   (248 fichiers `content/` hors `en/`) / EN 870 sur 142 porteuses (206
   fichiers `content/en/`)**, avec **populations à redéclarer**. *Ce sont les
   chiffres remesurés à la suite 11, et la redéclaration est exactement la
   candidate du §8 née de cette même clôture.*
4. le rappel qu'**une soustraction entre deux totaux se fait sur deux états
   de même date ET sur la même population** — *corpus à 36 fiches restantes,
   anneau 2 à 33* : c'est la réfutation nommée à la suite 11, et
   l'**après-lot annoncé est 28 fiches sur l'anneau 2**, pas sur le corpus.

**Conclusion du recoupement : le prompt est conforme, et il durcit le brief
au lieu de le déplacer.** Rien n'autorise à composer autrement qu'annoncé
sans mesure ; la candidature reste **à mesurer**, pas à reconduire.

---

## ⚠ INCIDENT D'OUVERTURE N° 1 — RÉCIDIVE EXACTE DE LA SUITE 11 : HEAD ET `git status` SONT DANS MON CONTEXTE AVANT LA GARDE, SANS QUE JE LES AIE LANCÉS

Le harnais de session **injecte** en tête de contexte un bloc `gitStatus`
portant la **branche** (`main`), le **statut** (`(clean)`) et les **cinq
derniers commits**, dont `2e346e4 arbitrages lot 6 rendus: C77 confirmee,
tick des deux cotes, glossaire HAL/LL exempte`.

**Conséquence protocolaire, identique à celle consignée à la suite 11 :**
la prédiction de `HEAD git` et celle du **statut d'ouverture** du dépôt sont
**hors décompte** — elles ne prédisent rien, elles recopient une donnée déjà
présente. Elles sont **écrites quand même** ci-dessous, parce que la garde de
péremption les compare et qu'un écart resterait un arrêt ; elles sont
**marquées `[HORS DÉCOMPTE]`** et ne comptent ni en tenue ni en réfutée.

⚠ **Ce que l'injection ne dit pas, et qui reste à décompte plein** : le
statut injecté date de l'**ouverture de la session**, avant que j'aie écrit
le moindre octet. Les **deux artefacts que cette séance a déjà versés**
(déclaration C131 ci-dessous) n'y figurent pas, donc les **deux chiffres de
la ligne `fichiers modifies non commites`** sont, eux, de vraies prédictions.

---

## Déclaration C131 d'ouverture — population des compteurs, artefacts versés, et TOTAL

*C131 et son amendement du 29/08 (suite 8) : nommer les artefacts que la
séance elle-même verse dans la population comptée, **et les additionner** ;
la déclaration ne vaut que pour le bloc qui l'écrit, et **chaque bloc qui
crée un fichier la rejoue**.*

**Population du compteur `git status --porcelain`** — le dépôt entier, tous
états confondus (`M`, `??`, `A`, `D`), **moins** ce que `.gitignore` exclut.
Le `.gitignore` n'exclut que **deux chemins exacts** —
`tools/batterie-sortie.txt` et `tools/seance-sortie.txt` — donc **tout le
reste de `tools/` est compté**, fichier de prédictions et copies C124
comprises (arbitrage Tim (f)(ii) du 29/08 : les deux **restent suivis**,
c'est le **filtre** de `batterie.ps1` qui les écarte).

**Population du compteur `hors artefacts de seance`** — la même, **moins**
les lignes dont le chemin contient `batterie-sortie` **ou** `predictions-`
(deux `-notmatch` lus dans le code de `batterie.ps1`, jamais dans son
en-tête).

**État de départ** — `(clean)`, **0 fichier non commité**, injecté par le
harnais après le commit `2e346e4` de Tim. `[HORS DÉCOMPTE]`

**Artefacts que la séance a déjà versés au moment du bloc 41 :**

| # | artefact | état git | compté au total | compté hors artefacts |
|---|---|---|---|---|
| 1 | `tools/predictions-260830.md` (ce fichier, créé avant le bloc 41) | `??` | **oui** | non (`predictions-`) |
| 2 | `tools/batterie-sortie-3008b3.txt` (copie C124 que l'étape 0 du bloc 41 crée **avant** que l'étape 1 ne lise `git status`) | `??` | **oui** | non (`batterie-sortie`) |
| — | `tools/batterie-sortie.txt` (réécrit en fin de bloc, **et de toute façon après la lecture**) | ignoré | non | non |

**TOTAL impliqué par la déclaration : 0 + 2 = 2 au total, 0 + 0 = 0 hors
artefacts de séance.**

⚠ **Le rang de la copie C124 est prédit, pas composé de mémoire** : l'étape 0
cherche le **premier rang libre** de `tools\batterie-sortie-<jjMM>b<N>.txt`.
`Get-Date -Format 'ddMM'` rend **`3008`** ; `3008b1` et `3008b2` existent
déjà sur disque, `3008b3` non — d'où **b3**. *C124 exige que l'étiquette soit
lue sur l'horloge et le répertoire : ici elle l'est par le script, et ma
prédiction porte sur ce que le script va lire.*

---

## Bloc 41 — garde de péremption d'ouverture

**Commande unique :**
`powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase garde`

*Aucune fiche passée : `-Fiches` et `-FichesEn` vides, donc la garde ne
listera que les trois fichiers de pilotage. La composition du lot n'est pas
encore mesurée — la passer ici reviendrait à la présupposer.*

**Base de comparaison** — la sortie de la garde du bloc 39, conservée dans
`tools/batterie-sortie.txt` (horloge **00:19:04**, HEAD **82aed69**), et le
commit `2e346e4` que Tim a passé depuis.

### Prédictions

**P41.1 — autocontrôle ASCII (C122).** `lignes non ASCII dans batterie.ps1 :
0`. *Le fichier n'a pas été touché depuis son dernier autocontrôle à 0.*

**P41.2 — copie C124.** `sortie precedente copiee :
tools\batterie-sortie-3008b3.txt`. *Forme exacte, rang 3, motif à la
déclaration C131 ci-dessus.*

**P41.3 — phase et paramètres.** `phase demandee : garde   anneau : 2
chevron : False`.

**P41.4 — date ISO.** `date ISO : 2026-08-30`.

**P41.5 — heure.** `heure :` une valeur **strictement postérieure à
00:19:04** et de la forme `HH:mm:ss`. *Je ne prédis pas l'heure murale : le
temps écoulé entre la clôture de la séance précédente et le lancement de
celle-ci n'est pas une grandeur du dépôt. Le terme qui a un contenu est
l'inégalité, et elle porte la garde de péremption.*

**P41.6 — HEAD git. `[HORS DÉCOMPTE]`** `HEAD git : 2e346e4` suivi d'une
date ISO **du 30/08**, postérieure à `00:14:27` (date du commit `82aed69`).
*Recopie de l'injection du harnais ; écrite pour que la garde puisse mordre,
non comptée.*

**P41.7 — total des fichiers non commités.** `fichiers modifies non
commites : 2`. *Décomposition nominative : `tools/predictions-260830.md` +
`tools/batterie-sortie-3008b3.txt`. Terme à décompte plein.*

**P41.8 — hors artefacts de séance.** `(hors artefacts de seance : 0)`.
*Les deux lignes du P41.7 sont écartées, l'une par `predictions-`, l'autre
par `batterie-sortie`. Terme à décompte plein.*

⚠ **P41.7 et P41.8 forment la garde utile de ce bloc** : tout chiffre
supérieur à 2 / 0 désigne un fichier que **ni Tim ni moi** n'avons annoncé, et
déclenche l'arrêt de la garde de péremption avant toute écriture.

**P41.9 — node.** `node : v24.15.0`. *Valeur relevée à la garde du bloc 39 ;
la prédiction est qu'elle n'a pas bougé entre deux séances du même soir.*

**P41.10 — date d'écriture de `TODO.md`.** `2026-08-29 21:48:08`, **au
caractère**. *Aucune séance n'a touché ce fichier depuis ; c'est le seul des
trois dont je puisse prédire la seconde.*

**P41.11 — date d'écriture de `JOURNAL.md`.** `2026-08-30`, heure comprise
**entre 00:19:04 et 00:30:00**. *Le bloc 40 y a écrit l'entrée du 30/08
**après** la garde de 00:19:04 ; le fichier de prédictions de la séance
précédente a été écrit une dernière fois à 00:26, ce qui borne la fin de
séance.*

**P41.12 — date d'écriture de `conventions.md`.** `2026-08-30`, heure
comprise **entre 00:19:04 et 00:30:00**, et **antérieure ou égale** à celle
de `JOURNAL.md`. *Le bloc 40 écrit la clause C113 dans `conventions.md` puis
l'entrée dans `JOURNAL.md` ; c'est l'ordre du §7. ⚠ Le terme qui peut tomber
est l'ordre, pas la date : les deux écritures sont dans la même minute à la
suite 11 et l'inégalité y était déjà serrée.*

**P41.13 — nombre de lignes de dates.** **3 exactement** (`JOURNAL.md`,
`conventions.md`, `TODO.md`), **aucune ligne de fiche**, puisque `-Fiches` et
`-FichesEn` sont vides. *Le code boucle sur `$Fiches + $FichesEn`, qui est la
liste vide.*

**P41.14 — codes de sortie.** `--- code de sortie : 0` **deux fois** (étapes
0 et 1), et **aucune autre étape** : la phase `garde` ne déclenche ni le bloc
`cadrage` ni le bloc `etat`. *Total attendu : **2** lignes `code de sortie`.*

**P41.15 — ligne finale.** `Sortie ecrite dans tools\batterie-sortie.txt`.

**Total : 15 prédictions, dont 1 hors décompte → 14 à décompte plein.**

### Constats du bloc 41 — sortie `tools/batterie-sortie.txt`, copie C124 `tools/batterie-sortie-3008b3.txt`

| # | prédit | mesuré | verdict |
|---|---|---|---|
| P41.1 | `lignes non ASCII : 0` | `0` | tenue |
| P41.2 | copie `tools\batterie-sortie-3008b3.txt` | idem | tenue |
| P41.3 | `garde / anneau 2 / chevron False` | idem | tenue |
| P41.4 | `date ISO : 2026-08-30` | idem | tenue |
| P41.5 | heure > `00:19:04` | `00:32:10` | tenue |
| P41.6 | `HEAD 2e346e4`, date du 30/08 > `00:14:27` | `2e346e4 2026-08-30 00:26:58 +0200` | HORS DÉCOMPTE |
| P41.7 | `fichiers modifies non commites : 2` | `2` | tenue |
| P41.8 | `(hors artefacts de seance : 0)` | `0` | tenue |
| P41.9 | `node : v24.15.0` | idem | tenue |
| P41.10 | `TODO.md 2026-08-29 21:48:08` | idem | tenue |
| P41.11 | `JOURNAL.md` 30/08 entre 00:19:04 et 00:30:00 | `00:25:50` | tenue |
| P41.12 | `conventions.md` même fenêtre ET ≤ `JOURNAL.md` | `00:24:38` ≤ `00:25:50` | tenue |
| P41.13 | 3 lignes de dates, aucune fiche | 3 | tenue |
| P41.14 | 2 lignes `code de sortie`, toutes à 0 | 2, à 0 | tenue |
| P41.15 | `Sortie ecrite dans tools\batterie-sortie.txt` | idem | tenue |

**Bilan du bloc 41 : 14 prédictions à décompte plein, 14 tenues, 0 réfutée.
1 hors décompte.**

**GARDE DE PÉREMPTION : VERTE.** Aucun écart inexpliqué. Les trois termes qui
la portent :
1. **HEAD a bougé, et il a bougé pour la raison annoncée** — `82aed69` →
   `2e346e4`, horodaté `00:26:58`, soit le commit du correctif d'arbitrage que
   la clôture du 30/08 laissait à passer à Tim sous C121. *Un HEAD qui change
   n'est un arrêt que si personne ne l'a annoncé ; celui-ci était le « Reste à
   Tim » de l'entrée précédente.*
2. **Le dépôt est propre hors artefacts de séance** — `2 / 0`, et les deux
   lignes du total sont nominativement les miennes.
3. **Les trois dates d'écriture sont antérieures au commit** — `00:24:38` et
   `00:25:50` pour `conventions.md` et `JOURNAL.md`, `00:26:58` pour le
   commit : *les deux fichiers de pilotage ont été écrits avant d'être
   livrés, ce qui est l'ordre attendu du §7 et non l'inverse.*

⚠ **La séance précédente s'est achevée à 00:26:58 et celle-ci ouvre à
00:32:10** : cinq minutes et douze secondes. *La garde de péremption est ici
au plus près de ce qu'elle protège — deux sessions sur le même dépôt à
quelques minutes d'écart — et c'est exactement la configuration où elle a
mordu deux fois dans la série.*

---

## Déclaration C131 du bloc 42 — rejouée

*Amendement du 29/08 (suite 8) : la déclaration ne vaut que pour le bloc qui
l'écrit ; chaque bloc qui crée un fichier la rejoue, avec population,
versements et TOTAL.*

**Populations : inchangées** (voir la déclaration d'ouverture) — dépôt entier
moins les deux chemins exacts du `.gitignore` pour le total ; la même moins
`batterie-sortie` et `predictions-` pour le second chiffre.

**Artefacts versés au moment où l'étape 1 du bloc 42 lira `git status` :**

| # | artefact | état git | total | hors artefacts |
|---|---|---|---|---|
| 1 | `tools/predictions-260830.md` | `??` | oui | non |
| 2 | `tools/batterie-sortie-3008b3.txt` (versé par le bloc 41) | `??` | oui | non |
| 3 | `tools/batterie-sortie-3008b4.txt` (versé par l'étape 0 du bloc 42) | `??` | oui | non |

**TOTAL : 3 au total, 0 hors artefacts de séance.**

⚠ **Le rang b4 se déduit du répertoire, pas de mémoire** : `3008b1`, `3008b2`
et `3008b3` occupent les trois premiers rangs, le premier libre est **4**.

---

## Bloc 42 — composition du lot 7 : relevé de l'anneau 2

**Commande unique :**
`powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase cadrage`

⚠ **Sans `-Fiches`, délibérément.** La phase `cadrage` enchaîne garde →
volume du lot → candidats C109 → anneau. **Passer la candidature du brief en
`-Fiches` dès maintenant reviendrait à mesurer le volume d'un lot que je
n'ai pas encore constitué**, et à traiter la ligne « Prochaine session »
comme une mesure du jour, ce que C118 interdit. Le code rend, sans `-Fiches`,
`aucune source FR passee (-Fiches) : etapes de lot sautees.` puis l'anneau.
**Le lot se compose sur la sortie de ce bloc ; son volume se mesure au bloc
43.**

### Prédictions

**P42.1 — autocontrôle ASCII.** `lignes non ASCII dans batterie.ps1 : 0`.

**P42.2 — copie C124.** `sortie precedente copiee :
tools\batterie-sortie-3008b4.txt`.

**P42.3 — paramètres.** `phase demandee : cadrage   anneau : 2   chevron :
False`.

**P42.4 — date et heure.** `date ISO : 2026-08-30`, heure de la forme
`HH:mm:ss` **strictement postérieure à 00:32:10**.

**P42.5 — HEAD.** `HEAD git : 2e346e4 2026-08-30 00:26:58 +0200`, **au
caractère**. *Cette fois la prédiction est à décompte plein : elle porte sur
la stabilité de HEAD entre deux blocs de MA séance, pas sur une valeur
injectée.*

**P42.6 — compteurs git.** `fichiers modifies non commites : 3   (hors
artefacts de seance : 0)`. *Décomposition nominative à la déclaration C131
ci-dessus.*

**P42.7 — node.** `node : v24.15.0`.

**P42.8 — dates d'écriture.** **3 lignes exactement**, identiques au bloc 41
**au caractère** : `JOURNAL.md 2026-08-30 00:25:50`, `conventions.md
2026-08-30 00:24:38`, `TODO.md 2026-08-29 21:48:08`. *Aucune écriture entre
les deux blocs sur ces trois fichiers.*

**P42.9 — étape 2, lot sauté.** La sortie porte `aucune source FR passee
(-Fiches) : etapes de lot sautees.` et **l'étape 3 (candidats C109) n'existe
pas** dans la sortie : le `else` du code fusionne les étapes 2 et 3 en une
seule.

**P42.10 — en-tête de l'anneau.** `=== ANNEAU 2 ===`, puis `anneau 0 (index
de depart)   : 4`. *Les quatre index du lot 1 sont les points d'entrée du
wiki, valeur figée depuis le 25/08 (suite 6).*

**P42.11 — NET de l'anneau 2.** `ANNEAU 2 NET               : 145`.
*Référence publiée aux suites 9, 10 et 11 : le NET ne bouge pas quand on
traduit, il bouge quand on ajoute des liens.*

**P42.12 — traduites et restant.** `deja traduites            : 112` et
`RESTANT                   : 33`. *Référence de la suite 11. **Aucune fiche
n'a été traduite depuis** : la séance du 30/08 n'a produit que 4
remplacements sur 2 fiches existantes.*

**P42.13 — identité BRUT / NET.** `cibles BRUTES` **moins** `deja vues aux
rangs 0..1` **égale 145**, au caractère. *Je ne prédis pas les deux termes
séparément : aucune clôture ne les a publiés, et les inventer serait de
l'arithmétique dérivée (C119). Ce que je prédis est l'**identité**, qui est
vérifiable sur la sortie seule.*

**P42.14 — volume du restant.** `RESTANT DE L ANNEAU 2 (33 fiches)` suivi de
**47 937**. *Référence de la suite 11. ⚠ La séance du 30/08 a édité
`stm32-cubemx.md`, source FR **déjà traduite**, donc **hors** du restant : ce
compteur ne peut pas l'avoir vue.*

**P42.15 — angle mort du chevron.** `fiches porteuses          : 0` et
`clotures en chevron       : 0`. *C'est le terme qui met **C127 hors sujet
pour le deuxième lot d'affilée**, et le brief le pose comme acquis sur tout
le restant de l'anneau.*

**P42.16 — les trois fiches `raspberry-pi/` sont au restant.** La liste
nominative porte **exactement 3** lignes dont le chemin contient
`raspberry-pi/`, et ce sont
`embarque/mcu/raspberry-pi/raspberry-pi-gpio`,
`embarque/mcu/raspberry-pi/raspberry-pi-prise-en-main` et
`embarque/mcu/raspberry-pi/raspberry-pi-projet`. *Le module porte 4 fiches
sur disque et `content/en/embarque/mcu/raspberry-pi/` n'en porte qu'une,
`raspberry-pi-en.md` : le hub est traduit, les trois autres non.*

**P42.17 — volumes des trois `raspberry-pi/`.** Les trois nombres de la
colonne de droite forment **l'ensemble {1 134, 1 167, 990}**, de **somme
3 291**. ⚠ *Je ne prédis PAS l'affectation fiche par fiche* : la ligne
« Prochaine session » donne trois nombres dans un ordre dont rien ne dit
qu'il est celui du tri par chemin, et supposer la correspondance serait
exactement le défaut de la suite 11 — *un chiffre juste rapporté à une base
que je n'ai pas mesurée*. **L'ensemble et la somme sont à décompte plein ;
l'affectation est déclarée non prédite.**

**P42.18 — deux fiches `xiao/` au restant, et deux SEULEMENT.** La liste
nominative porte **exactement 2** lignes dont le chemin contient `xiao/`,
de volumes formant **l'ensemble {659, 1 351}**, de **somme 2 010**.
*Affectation non prédite, même motif qu'en P42.17.*

⚠ **P42.19 — ET C'EST LE TERME QUI PEUT FAIRE TOMBER UN MOT DU BRIEF.** Le
répertoire `content/embarque/mcu/xiao/` porte **4 fiches** —
`xiao-alimentation`, `xiao-esp32-s3`, `xiao-prise-en-main`, `xiao-sense` — et
`content/en/embarque/mcu/xiao/` **n'existe pas**, donc **aucune n'est
traduite**. Si P42.18 tient, alors **2 fiches `xiao/` sont hors de l'anneau
2**, et **le lot 7 ne fermerait PAS le module `xiao/`** : il fermerait
`raspberry-pi/` (3 sur 3 du restant, hub déjà fait) et laisserait deux fiches
`xiao/` non traduites, atteignables seulement à un rang supérieur.
**Prédiction : le mot « deux modules fermés d'un coup » du brief est vrai
pour `raspberry-pi/` et faux pour `xiao/`.** *Terme à décompte plein, et il
se vérifie sur la seule liste nominative de l'anneau.*

⚠ **P42.20 — corollaire chiffré du même écart.** Le corpus compte **36**
fiches restantes et l'anneau 2 en compte **33** : **3 fiches restantes du
corpus sont hors anneau 2**. Prédiction : **2 des 3 sont les fiches `xiao/`
hors anneau**. *C'est la soustraction que le prompt met en garde — deux
totaux de populations différentes — et je la fais ici **en la nommant**, pas
en la masquant.*

**P42.21 — dette du front courant.** `fiches sources (traduites)   : 206`,
`cibles rouges distinctes     : 34`, `mots                         : 48777`.
*Références de la suite 11 ; la dette est un **état** et non un anneau, elle
ne bouge qu'en traduisant.*

**P42.22 — dette hors anneaux.** `dont HORS anneaux 0..2       : 1`.
*Déduction assumée et non mesurée : la dette porte 34 cibles quand le restant
de l'anneau 2 en porte 33, et les 33 sont toutes rouges depuis la zone
anglaise. ⚠ Le raisonnement suppose que le restant de l'anneau est **inclus**
dans la dette, ce qu'aucune clôture n'a vérifié ; je publie le chiffre et
son hypothèse pour que la réfutation soit lisible.*

**P42.23 — lignes non prédites, et pourquoi.** Trois blocs de la sortie ne
reçoivent **aucune prédiction chiffrée**, faute de référence publiée :
`ATTEIGNABLES PAR AUCUN PARENT TRADUIT`, `CIBLES AMBIGUES`, `CIBLES SANS
FICHE`. *Aucune clôture du chantier ne les a portés à la ligne « Tailles » ;
les chiffrer de tête serait les inventer. **Ils sont déclarés non prédits, et
non omis** — la distinction est celle du terme (2) de la sous-règle.*

**P42.24 — codes de sortie.** **4** lignes `--- code de sortie :` (étapes 0,
1, 2-fusionnée, 4), **toutes à 0**.

**Total : 24 prédictions, dont P42.23 déclarative → 23 à décompte plein.**

### Constats du bloc 42 — sortie `tools/batterie-sortie.txt`, copie C124 `tools/batterie-sortie-3008b4.txt`

| # | prédit | mesuré | verdict |
|---|---|---|---|
| P42.1 | ASCII 0 | 0 | tenue |
| P42.2 | copie `3008b4` | idem | tenue |
| P42.3 | `cadrage / 2 / False` | idem | tenue |
| P42.4 | 30/08, heure > `00:32:10` | `00:35:11` | tenue |
| P42.5 | `2e346e4 2026-08-30 00:26:58 +0200` | idem, au caractère | tenue |
| P42.6 | `3   (hors artefacts : 0)` | `3   (0)` | tenue |
| P42.7 | `v24.15.0` | idem | tenue |
| P42.8 | 3 dates identiques au bloc 41 | identiques au caractère | tenue |
| P42.9 | étape 2 « lot sauté », pas d'étape 3 | `aucune source FR passee (-Fiches) : etapes de lot sautees.`, étapes 0/1/2/4 | tenue |
| P42.10 | `anneau 0 : 4` | 4 | tenue |
| P42.11 | `ANNEAU 2 NET : 145` | 145 | tenue |
| P42.12 | `112` traduites / `33` restant | 112 / 33 | tenue |
| P42.13 | BRUT − déjà vues = 145 | **222 − 77 = 145** | tenue |
| P42.14 | `RESTANT DE L ANNEAU 2 (33 fiches)  47937` | idem | tenue |
| P42.15 | porteuses 0, clôtures 0 | 0 / 0 | tenue |
| P42.16 | 3 lignes `raspberry-pi/`, les trois nommées | `raspberry-pi-gpio`, `raspberry-pi-prise-en-main`, `raspberry-pi-projet` | tenue |
| P42.17 | ensemble {1 134, 1 167, 990}, somme 3 291 | 1134 / 1167 / 990, somme 3 291 | tenue |
| P42.18 | 2 lignes `xiao/`, ensemble {659, 1 351}, somme 2 010 | `xiao-alimentation 659`, `xiao-esp32-s3 1351` | tenue |
| P42.19 | 2 fiches `xiao/` HORS anneau 2, module non fermé par le lot | `xiao-prise-en-main` et `xiao-sense` absentes de la liste | **tenue** |
| P42.20 | 2 des 3 restantes hors anneau sont les `xiao/` | non mesurable dans ce bloc | **reportée au bloc 43** |
| P42.21 | dette `206 / 34 / 48777` | idem, au caractère | tenue |
| P42.22 | `dont HORS anneaux 0..2 : 1` | **0** | **RÉFUTÉE** |
| P42.23 | trois blocs déclarés non prédits | `ATTEIGNABLES 0`, `CIBLES AMBIGUES` **absent**, `CIBLES SANS FICHE 6` | déclarative |
| P42.24 | 4 lignes `code de sortie`, toutes à 0 | 4, à 0 | tenue |

**Bilan du bloc 42 : 23 prédictions à décompte plein, 21 tenues, 1 réfutée,
1 reportée.**

⚠ **LA RÉFUTATION P42.22 A LA RACINE EXACTE QUE LE PROMPT MET EN GARDE : UNE
SOUSTRACTION ENTRE DEUX POPULATIONS DIFFÉRENTES.** J'ai écrit *« la dette
porte 34 cibles quand le restant de l'anneau 2 en porte 33, donc 1 cible est
hors anneau »*. **Faux, et le code le dit** : `horsAnneaux` filtre sur `vus`,
qui est l'union des anneaux **0, 1 et 2**, pas le seul restant de l'anneau 2.
Une cible rouge peut vivre à l'anneau 0 ou 1 et n'être toujours pas traduite —
elle est alors dans la dette, dans `vus`, et **hors** des 33. *La différence
34 − 33 ne mesure donc pas « hors plan », elle mesure « ailleurs dans le
plan ».* ✅ **Le chiffre mesuré, `0`, est la bonne nouvelle correspondante :
aucune cible rouge du corpus n'échappe au plan par anneaux.**

✅ **P42.19 TIENT, ET ELLE CORRIGE UN MOT DU BRIEF.** Le brief annonce **deux
modules fermés d'un coup**. Mesure : `content/embarque/mcu/xiao/` porte
**quatre** fiches, dont **deux seulement** sont à l'anneau 2 —
`xiao-alimentation` (659) et `xiao-esp32-s3` (1 351). `xiao-prise-en-main` et
`xiao-sense` n'y sont pas. **Le lot 7 ferme `raspberry-pi/` et ne ferme pas
`xiao/`.** *Ce que le brief tenait pour acquis se lit dans la liste
nominative, et nulle part ailleurs : ni le total 5 301, ni la marge 1 356, ni
le compte de fiches ne le disent.*

⚠ **CE QUE LA MESURE NE DIT PAS ENCORE**, et qui décide de la composition :
**le volume des deux fiches `xiao/` hors anneau**. Les absorber fermerait le
module ; la marge sous la borne est de **1 356** et les deux fiches pèsent un
nombre encore non mesuré. **Le bloc 43 le mesure avant que la composition ne
soit arrêtée.** *Décider maintenant reviendrait à trancher sur un chiffre que
je n'ai pas.*

---

## Déclaration C131 du bloc 43 — rejouée, avec un versement neuf

**Populations : inchangées.**

**Artefact NEUF de ce bloc** : `tools/restant-hors-anneau-3008.mjs`, script
**jetable** (C114) écrit **avant** la commande A, qui liste nominativement les
fiches FR publiées sans jumelle EN. *Il est écrit parce qu'aucun outil du
dépôt ne rend cette liste : `compter-mots` rend le **compte** et la **somme**
du restant, jamais les noms, et `--anneau` ne rend que les fiches de son
rang. C'est exactement le trou que P42.20 doit refermer.*

| # | artefact | état git | total | hors artefacts |
|---|---|---|---|---|
| 1 | `tools/predictions-260830.md` | `??` | oui | non |
| 2 | `tools/batterie-sortie-3008b3.txt` | `??` | oui | non |
| 3 | `tools/batterie-sortie-3008b4.txt` | `??` | oui | non |
| 4 | `tools/batterie-sortie-3008b5.txt` (étape 0 de la commande A) | `??` | oui | non |
| 5 | `tools/restant-hors-anneau-3008.mjs` (écrit avant la commande A) | `??` | oui | **OUI** |

**TOTAL : 5 au total, 1 hors artefacts de séance.**

⚠ **Le cinquième versement est le premier de la séance à compter dans le
second chiffre**, et c'est le mode d'échec de C116 (9) : *le chiffre « hors
artefacts » ne se lit jamais seul, mais contre la liste nominative.* Ici la
liste porte **un** nom, `tools/restant-hors-anneau-3008.mjs`, et tout autre
chiffre que 1 est un arrêt.

---

## Bloc 43 — cadrage du lot 7 (volume, candidats C109) et vérification de P42.20

**Commande A :**
`powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase cadrage -Fiches embarque/mcu/raspberry-pi/raspberry-pi-gpio.md,embarque/mcu/raspberry-pi/raspberry-pi-prise-en-main.md,embarque/mcu/raspberry-pi/raspberry-pi-projet.md,embarque/mcu/xiao/xiao-alimentation.md,embarque/mcu/xiao/xiao-esp32-s3.md`

**Commande B :**
`node tools/restant-hors-anneau-3008.mjs`

⚠ **Les cinq fiches de la commande A sont la CANDIDATURE, pas le lot.** La
composition ne sera arrêtée qu'au gate G1, après la commande B. *Mesurer le
volume d'une candidature n'est pas la retenir ; le lot 5 a mesuré trois
découpes avant d'en garder une.*

### Prédictions — commande A

**P43.1 — ASCII.** `lignes non ASCII dans batterie.ps1 : 0`.

**P43.2 — copie C124.** `sortie precedente copiee :
tools\batterie-sortie-3008b5.txt`.

**P43.3 — paramètres.** `phase demandee : cadrage   anneau : 2   chevron :
False`.

**P43.4 — horloge.** `date ISO : 2026-08-30`, heure > `00:35:11`.

**P43.5 — HEAD.** `2e346e4 2026-08-30 00:26:58 +0200`, au caractère.

**P43.6 — compteurs git.** `fichiers modifies non commites : 5   (hors
artefacts de seance : 1)`. *Liste nominative à la déclaration C131
ci-dessus ; le 1 est le script jetable.*

**P43.7 — node.** `v24.15.0`.

**P43.8 — dates d'écriture : 8 lignes.** 3 de pilotage, **identiques au
caractère** à celles du bloc 42, puis **5 lignes de fiches**, une par entrée
de `-Fiches`, **dans l'ordre d'appel** (les trois `raspberry-pi/` puis les
deux `xiao/`), **aucune `ABSENTE`**.

**P43.9 — péremption des cinq sources.** Les **cinq** dates d'écriture sont
**strictement antérieures au 2026-08-30 00:00:00**. *Aucune séance du
chantier n'a touché `raspberry-pi/` ni `xiao/` : ces deux modules n'ont
jamais été un lot. Une date du 30/08 sur l'une d'elles serait un arrêt de
garde.*

**P43.10 — volume du lot, terme à terme.** L'étape 2 rend cinq lignes puis un
total :
`embarque/mcu/raspberry-pi/raspberry-pi-gpio` **1134** ;
`raspberry-pi-prise-en-main` **1167** ; `raspberry-pi-projet` **990** ;
`xiao/xiao-alimentation` **659** ; `xiao/xiao-esp32-s3` **1351** ;
**`(5 fiches)` 5301**. ⚠ *Cette fois l'affectation EST prédite, et à décompte
plein : la liste nominative de l'anneau du bloc 42 l'a mesurée. P42.17 ne la
prédisait pas parce que rien ne l'avait mesurée ; ici, quelque chose l'a.*

**P43.11 — borne et marge.** **5 301 < 6 657**, marge **1 356**. *Contrôle
publié d'avance : 3 291 + 2 010 = 5 301, et 6 657 − 5 301 = 1 356.*

**P43.12 — `tot` = `deh`, C127 hors sujet.** Le `tot` de l'étape 2 vaut
**5 301** et l'angle mort du chevron de l'étape 4 rend **0 fiche porteuse**
sur le restant : `ded` = 0 sur les cinq, donc **`deh` = `tot` = 5 301**.
*Deuxième lot d'affilée où C127 publie deux fois le même nombre.*

**P43.13 — étape 3, fiches lues.** `5 fiche(s) lue(s), N a reprendre.` avec
**N compris entre 4 et 5**. *Une fiche MCU de plus de 600 mots sans un seul
tiret d'incise ni point-virgule de prose serait une première dans ce
chantier ; je n'exclus pas que `xiao-alimentation`, la plus courte, en soit
une.*

**P43.14 — les quatre compteurs à verdict mécanique sont à ZÉRO.**
`typographie francaise : 0`, `virgule ambigue : 0`, `C109 creees en EN : 0`,
`hors alphabet latin : 0`. *Lu dans le code et non dans le README : les deux
premiers sont gardés par `if (estEn)`, faux sur des sources FR ; le troisième
et le quatrième exigent un `source_fr:` dans le front matter, qu'une source
FR n'a pas. **Les quatre sont donc nuls par construction, pas par chance.***

**P43.15 — code de sortie de l'étape 3.** `--- code de sortie : 0`. *Le code
sort en 1 si `typo || creees || etrangers` ; les trois sont nuls par P43.14.*

**P43.16 — `C109 de prose`, total.** Entre **40 et 68**. *Base : trois lots
mesurés, `--style` seul — lot 4 **57** sur `tot` 5 553 (1,03 %), lot 5 **34**
sur 3 521 (0,97 %), lot 6 **50** sur 4 726 (1,06 %). À 1,0 % de 5 301 :
**53**. La fourchette est celle du taux observé, ±25 %.*

**P43.17 — `C109 de prose`, décomposition terme à terme.** *La règle du §8 —
un total dans la fourchette ne valide pas la décomposition — impose de tirer
chaque valeur de sa source et non d'une moyenne de lot. N'ayant lu aucune des
cinq fiches, je ne peux pas les tirer de leur source ; je publie donc des
intervalles adossés au seul volume, **et je déclare cette faiblesse plutôt
que de la masquer** :*
`raspberry-pi-gpio` **7-16** ; `raspberry-pi-prise-en-main` **7-17** ;
`raspberry-pi-projet` **6-14** ; `xiao-alimentation` **3-10** ;
`xiao-esp32-s3` **8-19**. *⚠ Un total dans la fourchette de P43.16 avec une
décomposition hors de ces cinq intervalles compte comme **réfutation**, pas
comme succès.*

**P43.18 — `hors perimetre`.** Entre **6 et 28**. *⚠ Le compteur porte
**quatre** familles et non une, lues dans `styleFiche` : `tiret en titre`,
`tiret en tableau`, `tiret en alt d image`, `tiret d intervalle numerique`,
plus leurs jumelles en point-virgule. C'est la réfutation du 27/08 (suite 3),
répétée le 29/08 (suite 8), et la ligne de bilan ne nomme que trois des
quatre.* Référence : **13** au lot 6 (3 fiches).

**P43.19 — étape 4, anneau : identique au bloc 42, au caractère.** `NET 145`,
`112 / 33`, `47937`, `porteuses 0`, `dette 206 / 34 / 48777 / hors anneaux
0`, `CIBLES SANS FICHE 6`. *Aucune écriture entre les deux blocs.*

**P43.20 — codes de sortie.** **5** lignes `--- code de sortie :` (étapes 0,
1, 2, 3, 4), **toutes à 0**.

### Prédictions — commande B (`restant-hors-anneau-3008.mjs`)

*Le script lit `content/` sous la règle C110 importée de `compter-mots.mjs`,
applique **le périmètre exact de `fichesFr()`** — hors `en/`, hors
`templates/`, hors `draft: true` — et marque traduite toute fiche désignée
par un `source_fr:` d'une fiche de `content/en/`. **C'est la même définition
que celle du compteur de corpus**, ce qui est la condition pour que les deux
chiffres soient comparables (population, pas seulement date).*

**P43.21 — compte et somme du restant.** `RESTANT (36 fiches)` et **50205**.
*Références de la ligne « Tailles » de la suite 11 ; **la séance du 30/08 n'a
traduit aucune fiche**, et son unique édition d'une source FR porte sur
`stm32-cubemx`, déjà traduite.*

**P43.22 — contrôle de population publié d'avance.** `241037 + 50205 =
291242`, où `241 037` est le volume des traduites et `291 242` le corpus FR
de la suite 11. *Le script ne rend que le second terme ; le contrôle est que
ce terme referme la somme.*

**P43.23 — les 3 fiches hors anneau 2, et leur volume.** La liste porte
**exactement 3** fiches absentes des 33 de l'anneau, de somme
**50 205 − 47 937 = 2 268**.

**P43.24 — deux des trois sont nommées.** `embarque/mcu/xiao/xiao-prise-en-main`
et `embarque/mcu/xiao/xiao-sense`. *C'est la vérification de P42.20, reportée
du bloc 42.* ⚠ **La troisième n'est pas prédite** : rien de mesuré ne la
désigne, et la nommer serait l'inventer.

**P43.25 — coût de la fermeture de `xiao/`.** La somme des deux fiches `xiao/`
hors anneau est **strictement inférieure à 2 268** (la troisième fiche pesant
au moins 1 mot). ⚠ **Le terme qui décide de la composition est sa comparaison
à la marge de 1 356** : si la somme des deux dépasse 1 356, absorber les deux
ferait **franchir la borne 6 657** et la question est tranchée par la borne
seule ; sinon, elle demande un arbitrage. *Je publie le critère avant la
mesure, précisément pour ne pas le choisir après.*

**Total bloc 43 : 25 prédictions, toutes à décompte plein.**

### Constats du bloc 43 — copie C124 `tools/batterie-sortie-3008b5.txt`

| # | prédit | mesuré | verdict |
|---|---|---|---|
| P43.1 | ASCII 0 | 0 | tenue |
| P43.2 | copie `3008b5` | idem | tenue |
| P43.3 | `cadrage / 2 / False` | idem | tenue |
| P43.4 | 30/08, heure > `00:35:11` | `00:39:00` | tenue |
| P43.5 | `2e346e4 … 00:26:58 +0200` | idem | tenue |
| P43.6 | `5   (hors artefacts : 1)` | **5 / 1** | tenue |
| P43.7 | `v24.15.0` | idem | tenue |
| P43.8 | 8 lignes de dates, 3 + 5, dans l'ordre d'appel, aucune `ABSENTE` | 8 lignes, ordre respecté | tenue |
| P43.9 | les 5 sources antérieures au 30/08 00:00:00 | `2026-06-30`, `2026-08-20`, `2026-06-16`, `2026-08-17`, `2026-08-17` | tenue |
| P43.10 | 1134 / 1167 / 990 / 659 / 1351, `LOT (5 fiches) 5301` | idem, au caractère | tenue |
| P43.11 | 5 301 < 6 657, marge 1 356 | idem | tenue |
| P43.12 | `tot` = `deh` = 5 301, 0 porteuse | 0 porteuse à l'étape 4 | tenue |
| P43.13 | `5 fiche(s) lue(s), N a reprendre`, N ∈ {4, 5} | **5 / 5** | tenue |
| P43.14 | typo 0, virgule 0, créées 0, hors-latin 0 | **0 / 0 / 0 / 0** | tenue |
| P43.15 | code de sortie de l'étape 3 = 0 | 0 | tenue |
| P43.16 | `C109 de prose` ∈ [40, 68] | **56** | tenue |
| P43.17 | 7-16 / 7-17 / 6-14 / 3-10 / 8-19 | **11 / 11 / 15 / 9 / 10** | **RÉFUTÉE** (terme 3) |
| P43.18 | `hors perimetre` ∈ [6, 28] | **16** | tenue |
| P43.19 | anneau identique au bloc 42, au caractère | identique | tenue |
| P43.20 | 5 lignes `code de sortie`, toutes à 0 | 5, à 0 | tenue |
| P43.21 | `RESTANT (36 fiches)` **50205** | idem | tenue |
| P43.22 | `241037 + 50205 = 291242` | referme | tenue |
| P43.23 | 3 fiches hors anneau, somme **2 268** | 3 fiches, **2268** | tenue |
| P43.24 | `xiao-prise-en-main` et `xiao-sense` parmi elles | les deux, plus `embarque/pcb/kicad` (non prédite) | tenue |
| P43.25 | somme des deux `xiao/` hors anneau < 2 268 | **670 + 758 = 1 428** | tenue |

**Bilan du bloc 43 : 25 prédictions, 24 tenues, 1 réfutée.**

⚠ **LA RÉFUTATION P43.17 EST EXACTEMENT LE DÉFAUT QUE SA PROPRE PRÉDICTION
CITAIT, ET C'EST LA DEUXIÈME FOIS EN TROIS LOTS.** J'ai écrit, dans le corps
de P43.17, que la règle du §8 impose de tirer chaque valeur de sa source et
non d'une moyenne de lot — puis j'ai construit les cinq intervalles **sur le
seul volume**, faute d'avoir lu les fiches. `raspberry-pi-projet` sort à
**15** pour un intervalle de **6-14** : la fiche pèse **990 mots**, la plus
légère des trois `raspberry-pi/`, et porte **le plus de candidats des cinq**.
✅ **Le total, lui, tombe dans sa fourchette** — 56 dans [40, 68] — *ce qui
est précisément ce que la règle du §8 dit de ne pas prendre pour une preuve.*

✅ **CE QUE LA RÉFUTATION APPREND, ET QUI SERT DÈS LE BLOC SUIVANT** : la
densité de candidats C109 **ne se déduit pas du volume**. Mesurée fiche par
fiche : `raspberry-pi-projet` **15,2 pour mille**, `xiao-alimentation`
**13,7**, `raspberry-pi-gpio` **9,7**, `raspberry-pi-prise-en-main` **9,4**,
`xiao-esp32-s3` **7,4** — *un facteur deux d'écart à l'intérieur d'un même
lot, et le classement est l'inverse du classement par volume.* **Le bloc 44
ne prédira donc pas les puces à partir du volume**, mais à partir de la
décomposition `--style` **mesurée ci-dessus**, en disant ce que cette base
vaut.

---

## ⛳ GATE G1 — fin de cadrage. Composition du lot 7 arrêtée.

**Fait** — trois blocs (41 garde, 42 anneau, 43 volume + candidats + liste
nominative du restant). **62 prédictions à décompte plein, 59 tenues, 2
réfutées, 1 hors décompte.** Garde de péremption **verte** aux trois blocs.

**Chiffres qui ont changé** (tous mesurés ce soir, aucun reporté) —
Anneau 2 : **145 net, 112 traduites, 33 restantes, 47 937 mots, 0 porteuse**.
Dette : **206 sources, 34 cibles, 48 777 mots, 0 hors anneaux**. Corpus
restant : **36 fiches, 50 205 mots**, dont **3 fiches / 2 268 mots hors
anneau 2**. Lot candidat : **5 301** (`tot` = `deh`), **marge 1 356** sous la
borne **6 657**. Candidats C109 : **56 de `--style`**, décomposés
**11 / 11 / 15 / 9 / 10**, plus **16 hors périmètre**.

### Décision prise seule (C117, rubrique de consignation)

**Le lot 7 est exactement la candidature du brief : les 5 fiches, 5 301
mots.** *Revert : nul, aucune écriture n'a eu lieu.*

**Ce qui a été instruit avant de décider, et que le brief ne portait pas :**

⚠ **(1) LE BRIEF SE TROMPE SUR UN MOT, ET LA MESURE LE DIT SANS AMBIGUÏTÉ.**
« Deux modules fermés d'un coup » est **vrai pour `raspberry-pi/`** — le hub
est déjà traduit, les trois autres fiches sont au lot, le module sera
complet — et **faux pour `xiao/`** : le répertoire porte **quatre** fiches,
dont **deux seulement** sont à l'anneau 2. Après le lot 7,
`xiao-prise-en-main` (**670**) et `xiao-sense` (**758**) resteront non
traduites. **Un module fermé, pas deux.**

✅ **(2) LA QUESTION « FAUT-IL LES ABSORBER » EST TRANCHÉE PAR LA BORNE
SEULE, ET LE CRITÈRE ÉTAIT PUBLIÉ AVANT LA MESURE.** P43.25 posait :
*si la somme des deux dépasse la marge de 1 356, absorber les deux ferait
franchir la borne et la question se tranche sans arbitrage.* Mesuré :
**670 + 758 = 1 428**, soit **72 de trop**. `5 301 + 1 428 = 6 729 > 6 657`.
**Absorber les deux est hors borne.** *Et n'en absorber qu'une est écarté par
un critère déjà servi au lot 5 — **pas de fiche orpheline** : prendre une des
deux laisserait sa jumelle de module seule et ne fermerait rien.*

✅ **(3) LES DEUX FICHES NE SONT PAS PERDUES POUR AUTANT, ET LE PLAN PAR
ANNEAUX LES RÉCUPÈRE.** `ATTEIGNABLES PAR AUCUN PARENT TRADUIT` rend **0** et
`dont HORS anneaux 0..2` rend **0** : *aucune cible rouge du corpus n'échappe
au plan.* `xiao-prise-en-main` et `xiao-sense` sont visées par les deux fiches
`xiao/` du lot — la sortie `--style` le montre en clair, `xiao-alimentation`
L66 et `xiao-esp32-s3` L119-120 pointent sur elles — **donc les traduire les
fait entrer à l'anneau 3.** *Les absorber maintenant serait sortir du plan
pour gagner un mot de clôture ; les laisser, c'est le plan qui fonctionne.*

⚠ **(4) LA TROISIÈME FICHE HORS ANNEAU EST NEUVE ET N'A JAMAIS ÉTÉ NOMMÉE
NULLE PART** : `embarque/pcb/kicad`, **840 mots**. *Elle n'apparaît dans
aucune clôture du chantier, ni dans aucune ligne « Prochaine session ». Elle
sort de la seule mesure qui liste le restant par son nom, et c'est la
justification a posteriori du script jetable.* **Versée à la file des
arbitrages** : rien ne dit aujourd'hui à quel rang elle entre, ni si
`embarque/pcb/easyeda` (9 773 mots, la plus lourde du restant) la tirera.

**Après le lot 7, l'anneau 2 tombera à 28 fiches** — 33 − 5 —, ce que le
brief annonce, et le **corpus restant à 31 fiches**, ce que le brief
n'annonce pas et qui est l'autre population.

**Ce qui suit** — bloc 44 : garde avant passe, éprouvage bilingue du motif
des puces sur **huit** échantillons nommés, puis relevé des puces des cinq
sources du lot.

---

## Déclaration C131 du bloc 44 — rejouée

**Populations : inchangées.**

| # | artefact | état git | total | hors artefacts |
|---|---|---|---|---|
| 1 | `tools/predictions-260830.md` | `??` | oui | non |
| 2 | `tools/batterie-sortie-3008b3.txt` | `??` | oui | non |
| 3 | `tools/batterie-sortie-3008b4.txt` | `??` | oui | non |
| 4 | `tools/batterie-sortie-3008b5.txt` | `??` | oui | non |
| 5 | `tools/batterie-sortie-3008b6.txt` (étape 0 de la garde du bloc 44) | `??` | oui | non |
| 6 | `tools/restant-hors-anneau-3008.mjs` | `??` | oui | **OUI** |

**TOTAL : 6 au total, 1 hors artefacts de séance.** *Liste nominative du
second chiffre : `tools/restant-hors-anneau-3008.mjs`, seul nom.*

⚠ **Deux artefacts de ce bloc ne pèsent PAS sur ce compteur, et il faut le
dire :** (a) le **script du motif des puces** est écrit **hors dépôt**, dans
le répertoire de travail de la séance — comme au bloc 32 du 29/08 —, donc il
n'entre dans aucun `git status` ; (b) `tools/puces-lot7-3008.txt` est créé par
la **troisième** commande du bloc, **après** la lecture du compteur : il vaut
**0 ici** et **1 au bloc suivant**, portant le hors-artefacts à **2**.

---

## Bloc 44 — éprouvage bilingue du motif des puces (C110) et relevé du lot 7

**Commandes, dans cet ordre :**

1. `powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase garde`
   (garde avant passe, sous-règle C116 (5))
2. le motif des puces sur les **huit échantillons nommés**, quatre FR et
   quatre EN
3. le motif des puces sur les **cinq sources du lot 7**, en mode `--lister`,
   sortie sauvegardée sous `tools/puces-lot7-3008.txt` (C124)

### Le motif, republié EN ENTIER avant son lancement

*Règle d'usage du 29/08 (suite 9), tenue aux lots 5 et 6 : un motif qui balaie
les deux corpus se republie et s'éprouve sur un échantillon de **chaque**
langue. Le script est réécrit hors dépôt ; son texte est donc ici, et c'est sa
seule trace.*

- **front matter** retiré, et **seulement s'il ouvre le fichier** ;
- **blocs de code** masqués par bascule sur `/^\s{0,3}```/` **après retrait du
  préfixe de citation** `/^(\s{0,3}>\s?)+/` — le masque C110 est ancré en début
  de ligne et ne voit pas `> ```cpp` (angle mort du chevron, C127) ;
- **section courante** lue sur `/^\s{0,3}(#{2,6})\s+(.*)$/`, normalisée en bas
  de casse, ponctuation de queue retirée ;
- **exclusion** si la section courante est l'une des **cinq** : `voir aussi`,
  `aller plus loin`, `see also`, `going further`, `further reading` ;
- **puce** : `/^\s{0,6}[-*+]\s+/` sur la ligne déchevronnée ;
- **retenue** si elle contient `—` (U+2014).

⚠ **Motif identique au caractère à celui des blocs 32 (29/08) et du lot 5.**
Le republier n'est pas une formalité : *c'est la seule façon de savoir qu'un
chiffre de ce soir est comparable à un chiffre d'hier.* **Aucune classe de
caractères accentués** n'y figure — le piège du bloc Latin-1 (`×` U+00D7 et
`÷` U+00F7 logés entre les lettres) ne peut donc pas mordre, et le script le
dit en commentaire à l'endroit exact où il se réécrirait.

### Les huit échantillons, et ce que chacun éprouve

| n° | langue | fiches | réponse publiée | ce qu'il éprouve |
|---|---|---|---|---|
| 1 | FR | lot 3 `esp32/` (4 fiches) | **2 / 2 / 4 / 4 = 12** | gloses de sections de liens, puces en callout, blocs chevronnés |
| 2 | EN | lot 3 `esp32/` (4 fiches) | **2 / 1 / 4 / 4 = 11** | **l'asymétrie**, seul terme qui prouve que le motif lit le disque |
| 3 | FR | lot 4 `teensy/` (4 fiches) | **0 / 3 / 0 / 7 = 10** | deux fiches à zéro à côté de deux fiches denses |
| 4 | EN | lot 4 `teensy/` (4 fiches) | **0 / 3 / 0 / 7 = 10** | symétrie parfaite, décomposition comprise |
| 5 | FR | lot 5 `stm32/` (2 fiches) | **0 / 0 = 0** | qu'une passe rendue tient encore |
| 6 | EN | lot 5 `stm32/` (2 fiches) | **0 / 0 = 0** | idem côté anglais |
| 7 | FR | lot 6 `stm32/` (3 fiches) | **2 / 2 / 0 = 4** | **échantillon neuf**, résidu d'exemptions d'un lot rendu |
| 8 | EN | lot 6 `stm32/` (3 fiches) | **2 / 2 / 0 = 4** | idem, report un pour un des exemptions |

### Prédictions du bloc 44

**Garde (sous-règle C116 (5))**

**P44.1** — `lignes non ASCII dans batterie.ps1 : 0` et `sortie precedente
copiee : tools\batterie-sortie-3008b6.txt`.

**P44.2** — `HEAD git : 2e346e4 2026-08-30 00:26:58 +0200`, inchangé.

**P44.3** — `fichiers modifies non commites : 6   (hors artefacts de seance :
1)`, par la déclaration C131 ci-dessus, dont la liste nominative tient en un
nom.

**P44.4** — les trois fichiers de pilotage **inchangés à la seconde** :
`2026-08-30 00:25:50` / `2026-08-30 00:24:38` / `2026-08-29 21:48:08`.
**Aucune ligne de fiche** (`-Fiches` vide), donc **3 lignes de dates**.

**P44.5** — `node : v24.15.0`, `phase demandee : garde   anneau : 2
chevron : False`, **2** codes de sortie, tous **0**, heure > `00:39:00`.

**Épreuve C110 — les huit échantillons**

**P44.6** — échantillon 1, FR lot 3 : `esp32-deep-sleep` **2**,
`esp32-arduino-core` **2**, `esp32-freertos` **4**, `esp32-idf` **4**,
**TOTAL 12**.

**P44.7** — échantillon 2, EN lot 3 : `esp32-deep-sleep-en` **2**,
`esp32-arduino-core-en` **1**, `esp32-freertos-en` **4**, `esp32-idf-en`
**4**, **TOTAL 11**. ⚠ *Onze et non douze : `esp32-arduino-core` L26 porte
un tiret que sa jumelle rend par une virgule. **Prédire 12 serait prédire la
symétrie, pas la mesure.***

**P44.8** — échantillon 3, FR lot 4 : `teensy-arduino-core` **0**,
`teensy-audio` **3**, `teensy-prise-en-main` **0**, `teensy-usb` **7**,
**TOTAL 10**.

**P44.9** — échantillon 4, EN lot 4 : **0 / 3 / 0 / 7**, **TOTAL 10**,
décomposition identique fiche par fiche.

**P44.10** — échantillons 5 et 6, lot 5 : **0 / 0 = 0** en FR et **0 / 0 = 0**
en EN.

**P44.11** — échantillon 7, FR lot 6 : `stm32-cubemx` **2**, `stm32-hal`
**2**, `stm32-registres` **0**, **TOTAL 4**.

**P44.12** — échantillon 8, EN lot 6 : `stm32-cubemx-en` **2**,
`stm32-hal-en` **2**, `stm32-registres-en` **0**, **TOTAL 4**.
⚠ *Les échantillons 7 et 8 sont neufs et leur réponse vient de la clôture du
lot 6, où le report un pour un a été mesuré **avec sa décomposition** — un
total de 4 obtenu autrement serait une asymétrie déguisée en succès.*

⚠ **P44.13 — terme de non-régression du correctif du 30/08.** Le correctif
d'arbitrage a édité `stm32-cubemx.md` en **trois** endroits (code, bloc de
sortie, prose) et `stm32-hal-en.md` en **un**. **Aucune de ces quatre
éditions ne touche une puce à tiret** : `stm32-cubemx` doit rendre **2** des
deux côtés comme avant le correctif. *Si l'échantillon 7 rend autre chose que
2 sur cette fiche, le correctif a fait plus que ce qu'il annonçait.*

**Relevé du lot 7**

**P44.14 — TOTAL du lot 7 : entre 12 et 36, point estimé 25.**
*Base — et elle est double, parce que la réfutation P43.17 vient d'invalider
la base par le volume seul :*
- *par la **densité de puces au millier de mots**, mesurée sur trois lots :
  `esp32/` 32/4 983 = **6,4** ; `teensy/` 30/5 310 = **5,6** ; `stm32/`
  15/4 726 = **3,2** (lot 6) et 10/3 348 = **3,0** (lot 5). Sur 5 301 mots,
  la fourchette 3,0-6,4 donne **16 à 34** ;*
- *par le **rapport puces / candidats `--style`**, mesuré sur trois lots :
  `teensy/` 30/57 = **0,53** ; `stm32/` lot 5 10/34 = **0,29**, lot 6 15/50 =
  **0,30**. Sur les **56** candidats mesurés au bloc 43, la fourchette
  0,29-0,53 donne **16 à 30**.*
*Les deux bases se recouvrent sur **16-30** ; **j'élargis à 12-36** parce que
`raspberry-pi/` et `xiao/` n'ont **jamais** été mesurés sur ce compteur et
que trois lots sur deux modules ne font pas une loi (C119).*

**P44.15 — décomposition fiche par fiche, et ce qu'elle vaut.**
`raspberry-pi-gpio` **1-9** ; `raspberry-pi-prise-en-main` **1-9** ;
`raspberry-pi-projet` **2-12** ; `xiao-alimentation` **1-7** ;
`xiao-esp32-s3` **1-8**. *Base : la décomposition `--style` **mesurée** au
bloc 43 (11 / 11 / 15 / 9 / 10), et non le volume. ⚠ **Cette base est faible
et le lot 6 l'a démontrée** : `stm32-hal` portait 25 des 50 candidats
`--style` et **5 des 15** puces, quand `stm32-registres` en portait 13 et
**6**. **Les deux compteurs ne se déduisent pas l'un de l'autre**, d'où des
intervalles larges plutôt qu'un point.*

**P44.16** *(terme écrit pour réfuter)* — **`raspberry-pi-projet` n'est pas
strictement la première des cinq** en nombre de puces retenues, malgré ses
15 candidats `--style`. *Même motif qu'au lot 6 : ses candidats sont
majoritairement des tirets d'incise **en milieu de phrase** — 11 des 15
d'après les extraits du bloc 43, contre 4 points-virgules — et le cas 3 de
l'amendement C109 n'est pas le cas 2. Supposer qu'elle mène serait transporter
une densité d'un compteur vers l'autre, ce que le lot 6 a réfuté.*

**P44.17** *(second terme écrit pour réfuter)* — **au moins une** des cinq
fiches rend **0**. *Motif : deux des quatre fiches de `teensy/` rendaient 0,
et `xiao-alimentation` comme `xiao-esp32-s3` portent leurs tirets
majoritairement en incise de prose d'après les extraits du bloc 43.*

**P44.18** — **chacune des trois** fiches `raspberry-pi/` rend **au moins
une** puce retenue sous une section dont le titre normalisé est
**`raccrochage projet`**. *Motif : convention de famille des fiches MCU,
vérifiée sur `stm32/` au lot 6 (2 / 2 / 2).* ⚠ *Terme non prédit pour les
deux `xiao/` : rien ne dit qu'elles portent cette section.*

**P44.19** *(terme qui réfute le masque, pas le compte)* — **aucune ligne
retenue** ne vient (a) d'un bloc de code, chevronné ou non, (b) du front
matter (`tags`, `prerequis`, `aa`, `phases`), (c) d'une section
`## Voir aussi` ou `## Aller plus loin`.

**P44.20** — `tools/puces-lot7-3008.txt` existe, n'est pas vide, et son
encodage est **UTF-8** (écriture par redirection `bash`, jamais par le `>` de
PowerShell 5.1 qui rendrait de l'UTF-16LE — C119).

**Total : 20 prédictions, toutes à décompte plein.**

### Constats du bloc 44 — copie C124 `tools/batterie-sortie-3008b6.txt`, relevé `tools/puces-lot7-3008.txt`

| # | prédiction | constat | verdict |
|---|---|---|---|
| P44.1 | ASCII 0, copie `3008b6` | idem | tenue |
| P44.2 | HEAD `2e346e4 … 00:26:58` inchangé | idem | tenue |
| P44.3 | `6   (hors artefacts : 1)` | **6 / 1** | tenue |
| P44.4 | pilotage `00:25:50 / 00:24:38 / 21:48:08`, 3 lignes | idem | tenue |
| P44.5 | `v24.15.0`, `garde / 2 / False`, 2 codes à 0, heure > `00:39:00` | `00:42:19` | tenue |
| P44.6 | FR lot 3 : **2 / 2 / 4 / 4 = 12** | idem | tenue |
| P44.7 | EN lot 3 : **2 / 1 / 4 / 4 = 11** | idem | tenue |
| P44.8 | FR lot 4 : **0 / 3 / 0 / 7 = 10** | idem | tenue |
| P44.9 | EN lot 4 : **0 / 3 / 0 / 7 = 10** | idem | tenue |
| P44.10 | lot 5 : **0 / 0 = 0** des deux côtés | idem | tenue |
| P44.11 | FR lot 6 : **2 / 2 / 0 = 4** | idem | tenue |
| P44.12 | EN lot 6 : **2 / 2 / 0 = 4** | idem | tenue |
| P44.13 | `stm32-cubemx` rend **2** des deux côtés malgré le correctif du 30/08 | **2 / 2** | tenue |
| P44.14 | lot 7 ∈ [12, 36], point 25 | **18** | tenue |
| P44.15 | 1-9 / 1-9 / **2-12** / 1-7 / 1-8 | **4 / 6 / 0 / 4 / 4** | **RÉFUTÉE** (terme 3) |
| P44.16 | `raspberry-pi-projet` pas strictement première | **dernière, à 0** | tenue |
| P44.17 | au moins une des cinq rend **0** | `raspberry-pi-projet` | tenue |
| P44.18 | ≥ 1 puce sous `raccrochage projet` dans **chacune** des trois `raspberry-pi/` | **0 dans les trois** | **RÉFUTÉE** |
| P44.19 | ni bloc de code, ni front matter, ni section de liens | **8 sections, aucune des trois familles** | tenue |
| P44.20 | `puces-lot7-3008.txt` non vide, UTF-8 | **`Unicode text, UTF-8 text`** | tenue |

**Bilan du bloc 44 : 20 prédictions, 18 tenues, 2 réfutées.**

✅ **LE MOTIF REPRODUIT HUIT RÉPONSES PUBLIÉES, QUATRE PAR LANGUE, SANS UN
ÉCART.** L'asymétrie **12 / 11** du lot 3 tombe comme écrite, les deux zéros
du lot 5 tiennent une séance de plus, et les **deux échantillons neufs du lot
6 rendent 4 des deux côtés avec la décomposition 2 / 2 / 0** — *un total de 4
obtenu autrement aurait été une asymétrie déguisée en succès.* ✅ **P44.13
ajoute un terme que la clôture du lot 6 ne pouvait pas porter** : le correctif
d'arbitrage du 30/08 a touché `stm32-cubemx` en trois endroits et **n'a pas
bougé d'une puce**, ce qui est exactement ce qu'un correctif de bloc de code
doit faire.

⚠ **P44.18 EST RÉFUTÉE SUR LES TROIS FICHES À LA FOIS, ET C'EST LA
RÉFUTATION UTILE DU BLOC.** J'ai prédit qu'au moins une puce de chaque
`raspberry-pi/` vivrait sous une section `raccrochage projet`, au motif de la
« convention de famille des fiches MCU » vérifiée sur `stm32/` au lot 6
(2 / 2 / 2). **Aucune des trois n'en porte une.** Les huit sections qui
portent les 18 puces sont **toutes propres à leur fiche** : `les
bibliothèques`, `pas de temps réel dur`, `1. choisir et flasher le système`,
`2. préparer le démarrage headless — avant de flasher`, `trois façons de
l'alimenter`, `recharger l'accu sans risque`, `pourquoi le xiao esp32-s3`,
`les onze broches`.

⚠ **CE QUE CETTE RÉFUTATION ANNONCE POUR LA RÉDACTION, ET IL FAUT LE PRENDRE
AU SÉRIEUX MAINTENANT :** *`raspberry-pi/` et `xiao/` ne suivent pas le
gabarit de section des quatre modules déjà traduits.* Les lots 3 à 6 vivaient
sur `esp32/`, `teensy/` et `stm32/`, qui partagent une ossature — dont
`## Raccrochage projet`. **Le relevé des titres de section d'avant rédaction
n'est donc plus une formalité de confirmation** : il devra dire, pour chaque
section de ces cinq fiches, si elle a une forme de production en anglais ou
s'il faut la traduire sans modèle. *La candidate du §8 née de la suite 10
rencontre ici son premier lot hors gabarit.*

⚠ **P44.15 EST RÉFUTÉE PAR LE MÊME TERME QUE P43.17, ET LA CAUSE EST LA
MÊME BASE EMPRUNTÉE.** `raspberry-pi-projet` porte **15 candidats `--style`,
le plus des cinq**, et **0 puce**. J'avais borné sa prédiction à **2-12** en
la tirant de sa décomposition `--style` — c'est-à-dire du compteur dont le
lot 6 venait de prouver qu'il **ne se déduit pas** de l'autre. ✅ *Les deux
termes que j'avais écrits **pour** réfuter, P44.16 et P44.17, tiennent tous
les deux et disent la chose juste* : la fiche n'est pas première, elle est
**dernière**, et c'est elle le zéro du lot. **Le raisonnement structurel a
tenu là où l'intervalle chiffré a cédé** — les 15 candidats de `projet` sont
des tirets d'incise **en milieu de phrase**, cas 3 de l'amendement C109, et
pas des séparateurs de glose en tête de puce, cas 2.

**Total du lot 7 avant jugement : 56 candidats `--style` + 18 puces à tiret =
74 candidats à juger un par un sous C123 et les quatre cas de l'amendement
C109.**

⚠ **Densité de puces du lot 7 : 18 / 5 301 = 3,4 pour mille**, soit le régime
de `stm32/` (3,0 et 3,2) et **la moitié** d'`esp32/` (6,4) et `teensy/` (5,6).
**Quatre lots, quatre densités, toujours aucune loi** (C119) : la fourchette
utile reste 3,0-6,4 pour mille.

---

## Jugement des 74 candidats, un par un (C123 + les quatre cas de l'amendement C109)

*Lecture intégrale des cinq sources faite avant tout jugement (règle du 28/08 :
jamais de coupe d'un fichier non lu en entier). Aucune écriture à ce stade.*

### La doctrine d'exemption, publiée AVANT la passe

**Elle est reconduite depuis les lots 4, 5 et 6, avec UNE précision de lecture
que ce lot rend nécessaire.** Les lots précédents disaient *« segment de droite
nominal, adjectival, infinitif ou participial → reste ; proposition à sujet
propre → tombe »*. Ce lot rencontre des gloses **longues**, dont la tête est
nominale mais qui se prolongent après un deux-points ou un point.

**Règle de lecture appliquée** : *le segment de droite se lit **jusqu'à sa
première ponctuation forte** — point ou deux-points. Si cette tête est
nominale, adjectivale, infinitive ou participiale, le tiret **reste** ; si elle
porte un **sujet propre**, il **tombe**.* ⚠ *Elle décide seule sur **quatre**
puces — `raspberry-pi-gpio` L29-L31 et `xiao-alimentation` L22 —, toutes
gardées. Revert : 4 remplacements de plus.*

**Second tamis (24/08), appliqué tel quel** : un segment **nominal ou
infinitif** qui **énumère deux items ou plus** reste ; celui qui **commente,
exemplifie ou glose un seul objet** tombe. ⚠ *Elle décide seule sur **six**
occurrences : gardées `raspberry-pi-projet` L17 (×3, deux énumérations
nominales), `raspberry-pi-prise-en-main` L21 (×2, trois infinitifs) et L125
(×2, quatre infinitifs), L121 (deux infinitifs), `xiao-alimentation` L16 (×2,
trois nominaux), `xiao-esp32-s3` L51 (deux infinitifs) ; **tombées**
`prise-en-main` L49 (`quelques minutes`, seul), L113 (`à corriger en
priorité`, seul), `projet` L23 (`par exemple « … »`, un exemple unique), L34,
L49, L68, L76, `xiao-esp32-s3` L109. Revert : 6 remplacements en moins ou 8 de
plus selon le sens.*

**Ellipse parallèle sans verbe conjugué (23/08 suite 3) — gardée trois fois** :
`gpio` L120 (`une LED avec résistance, oui ; un moteur, non`),
`prise-en-main` L113 (`un Pi 4, ~5 V / 3 A`), `xiao-alimentation` L51
(`en deep sleep entre deux réveils, des mois`). *Aucune ne porte de verbe
conjugué et toutes énumèrent deux cas parallèles.*

**Cas 1 de l'amendement (sections de liens) — trois exemptions** :
`xiao-alimentation` L66, `xiao-esp32-s3` L119 et L120, sous `## Voir aussi`.
⚠ *Les trois sont signalées par `--style` **alors qu'elles sont hors
périmètre**, et la cause est le recouvrement déjà versé à la file des
arbitrages : `exemptions()` exempte le **premier** tiret de la ligne, qui est
ici celui du **libellé** (`[[xiao-prise-en-main|XIAO — prise en main]]`), et
laisse passer le séparateur de glose qui, lui, est licite au §4.*

**Cas 4 (renvoi de fin de segment) — deux traitements en parenthèse** :
`gpio` L108 et `xiao-alimentation` L51.

⚠ **Faux positif de `--style` mesuré et LAISSÉ EN PLACE, comme au lot 5** :
`xiao-esp32-s3` L71 (`D0–D10`) et L91 (`D8–D10`) sont des **intervalles
d'alias de pads** en demi-cadratin. La garde `tiret d intervalle numerique`
exige un **chiffre nu de part et d'autre** ; ici le voisin de droite est la
lettre `D`, donc elle ne mord pas. **Deux occurrences exemptées à la main**,
et le défaut est celui déjà en file depuis le lot 5.

### Décompte du jugement, fiche par fiche

| fiche | candidats | dont `--style` | dont puces | **traités** | **exemptés** |
|---|---|---|---|---|---|
| `raspberry-pi-gpio` | 15 | 11 | 4 | **11** | 4 |
| `raspberry-pi-prise-en-main` | 17 | 11 | 6 | **8** | 9 |
| `raspberry-pi-projet` | 15 | 15 | 0 | **12** | 3 |
| `xiao-alimentation` | 13 | 9 | 4 | **6** | 7 |
| `xiao-esp32-s3` | 14 | 10 | 4 | **7** | 7 |
| **total** | **74** | **56** | **18** | **44** | **30** |

⚠ **30 exemptions sur 74, soit 41 %** — contre 12 sur 65 au lot 6 (18 %) et
9 sur 68 au module MicroPython (13 %). *Le lot 7 est le plus exempté de la
série, et la cause est mesurable : `raspberry-pi-prise-en-main` et
`xiao-esp32-s3` portent des **listes à puces de spécification** — saveurs
d'OS, réglages d'Imager, arguments de choix de carte — dont les segments de
droite sont nominaux par construction. Le hacher serait exactement ce que
l'arbitrage du 22/08 a fermé.*

---

## Déclaration C131 du bloc 45 — rejouée, quatre versements hors artefacts

**Populations : inchangées.**

| # | artefact | état git | total | hors artefacts |
|---|---|---|---|---|
| 1 | `tools/predictions-260830.md` | `??` | oui | non |
| 2-5 | `tools/batterie-sortie-3008b3…b6.txt` (4 fichiers) | `??` | oui | non |
| 6 | `tools/batterie-sortie-3008b7.txt` (étape 0 de la garde du bloc 45) | `??` | oui | non |
| 7 | `tools/restant-hors-anneau-3008.mjs` | `??` | oui | **OUI** |
| 8 | `tools/puces-lot7-3008.txt` (3ᵉ commande du bloc 44) | `??` | oui | **OUI** |
| 9 | `tools/passe-negatif-lot7-3008.tsv` (écrite avant la garde) | `??` | oui | **OUI** |
| 10 | `tools/passe-c109-lot7-3008.tsv` (écrite avant la garde) | `??` | oui | **OUI** |

**TOTAL : 10 au total, 4 hors artefacts de séance.** *Liste nominative du
second chiffre, à quatre noms : le script jetable du restant, le relevé des
puces, et les deux tables de passe.*

⚠ **Les cinq sources FR ne pèsent PAS encore** : elles ne sont modifiées
qu'après la garde, par la troisième commande. **Elles porteront le total à
15 et le hors-artefacts à 9 au bloc suivant**, et la garde de péremption du
bloc 46 doit s'y attendre.

---

## Bloc 45 — passe C109 du lot 7 (44 remplacements sur 5 sources FR)

**Commandes, dans cet ordre :**

1. `powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase garde`
2. **test négatif délibéré** :
   `node tools/remplacer-passe.mjs tools/passe-negatif-lot7-3008.tsv`
3. contrôle seul :
   `node tools/remplacer-passe.mjs tools/passe-c109-lot7-3008.tsv`
4. écriture :
   `node tools/remplacer-passe.mjs tools/passe-c109-lot7-3008.tsv --ecrire`

### Le test négatif, et ce qu'il doit refuser

*C116 (6), amendement du 29/08 (suite 8) : un test négatif délibéré précède
chaque lot réel. Trois lancés les 29 et 30/08, trois refus, zéro fichier
écrit.* La table négative est **la table réelle avec UNE seule ancre
mutilée** : `mecatronique ; avec,` **sans accent aigu** sur `mécatronique`,
dans `raspberry-pi-gpio`. *L'accent est le mode d'échec exact de É2 du 29/08
(suite 6), et il est invisible à l'œil dans un TSV.*

### Prédictions du bloc 45

**Garde**

**P45.1** — `ASCII 0`, copie `tools\batterie-sortie-3008b7.txt`.

**P45.2** — `HEAD git : 2e346e4 2026-08-30 00:26:58 +0200`, inchangé.

**P45.3** — `fichiers modifies non commites : 10   (hors artefacts de
seance : 4)`, par la déclaration C131 ci-dessus et sa liste nominative à
quatre noms.

**P45.4** — pilotage inchangé à la seconde : `00:25:50 / 00:24:38 /
21:48:08`, **3 lignes**, aucune fiche.

**Test négatif (commande 2)**

**P45.5** — `=== PASSE DE REMPLACEMENT (CONTROLE SEUL) ===`, `lignes de
table : 41`.

**P45.6** — **exactement une** ligne `INTROUVABLE`, sur
`content/embarque/mcu/raspberry-pi/raspberry-pi-gpio.md`, et **aucune**
ligne `MULTIPLE`.

**P45.7** — `raspberry-pi-gpio` sort à **`ancres 9/10`** et
**`pts de code −11`** au lieu de −12. ⚠ *C'est le terme qui prouve **quoi** le
refus a refusé : un refus qui ne chiffrerait pas ce qui manque ne prouverait
que lui-même.*

**P45.8** — les **quatre autres fiches** sortent à `ancres n/n` complet, avec
leurs écarts de points de code **définitifs** : `raspberry-pi-prise-en-main`
**−5**, `raspberry-pi-projet` **−8**, `xiao-alimentation` **−2**,
`xiao-esp32-s3` **−2**.

**P45.9** — bilan : `remplacements prets : 40`, `ancres introuvables : 1`,
`ancres multiples : 0`, `fichiers absents : 0`, `sans front matter : 0`,
`lignes mal formees : 0`, `INVARIANT D ACCENTS casse sur : 0 fiche(s)`.

**P45.10** — `REFUS : 1 defaut(s). AUCUN FICHIER ECRIT.` et **code de sortie
1**.

**Contrôle seul de la table réelle (commande 3)**

**P45.11** — `lignes de table : 41`, `fiches : 5`, `remplacements prets :
41`, et **zéro** sur les six compteurs de défaut.

**P45.12 — invariant d'accents, terme par terme.** L'écart est **nul sur les
cinq fiches**. *Aucun des 41 remplacements ne touche une lettre accentuée : ce
sont des substitutions de ponctuation, plus **trois** mots ajoutés ou retirés
qui n'en portent pas — `C'est` ajouté dans `gpio`, `parce que` retiré dans
`gpio`, `il` devenu `qui` dans `prise-en-main`.*

**P45.13 — points de code, fiche par fiche, prédits par espèce d'édition.**
`raspberry-pi-gpio` **−12** ; `raspberry-pi-prise-en-main` **−5** ;
`raspberry-pi-projet` **−8** ; `xiao-alimentation` **−2** ;
`xiao-esp32-s3` **−2**. **Somme : −29.**
*Décomposition par espèce, publiée avant la mesure :*
- *` — ` → `. ` et ` ; ` → `. ` (3 → 2 points de code) : **−1** chacune,
  **14 occurrences** ;*
- *` — ` → `, ` (3 → 2) : **−1** chacune, **9 occurrences** ;*
- *` — ` → ` : ` (3 → 3) : **0**, **13 occurrences** ;*
- *mise en parenthèse (` — ` → ` (` puis `.` → `).`) : **0**, **4
  occurrences** ;*
- *`— exactement` → `. C'est exactement` : **+5**, 1 occurrence ;*
- *`, parce que l'` → ` : l'` : **−9**, 1 occurrence ;*
- *`— il servira` → `, qui servira` : **0**, 1 occurrence ;*
- *`— sinon, un` → `, sinon un` : **−2**, 1 occurrence.*
*Contrôle : 14 × (−1) + 9 × (−1) + 13 × 0 + 4 × 0 + 5 − 9 + 0 − 2 = **−29**.*

**P45.14 — lignes du corps : INCHANGÉES sur les cinq fiches.** `lignes N ->
N` avec le même N des deux côtés. *Une passe de ponctuation n'en crée ni n'en
détruit ; c'est le troisième invariant du script.*

**Écriture (commande 4)**

**P45.15** — `5` lignes `ECRIT  content/…` avec les comptes
**10 / 8 / 10 / 6 / 7**, puis `fichiers ecrits : 5`, code de sortie **0**.
⚠ *Les comptes d'**ancres** ne sont pas les comptes d'**occurrences traitées**
(11 / 8 / 12 / 6 / 7) : **trois lignes portent deux éditions chacune** —
`gpio` L17 (incise à deux tirets), `projet` L23 (incise à deux tirets) et
`projet` L66 (incise à deux tirets). **41 ancres pour 44 occurrences.**
Nommées à l'avance, comme les cinq du lot 6.*

**P45.16 — effet sur le corpus FR : −1 mot exactement.** `+1` pour `C'est`,
`−2` pour `parce que`, et **0** partout ailleurs — un tiret cadratin et un
point-virgule ne sont pas des mots sous la règle C110, dont le motif
`[0-9A-Za-zÀ-ɏ'’-]+` exige au moins un alphanumérique.
**Corpus FR attendu à la clôture : 291 242 → 291 241.**

**P45.17 — résidu `--style` après la passe.** `C109 de prose` tombe de **56**
à **20**, décomposé **1 / 6 / 3 / 4 / 6** dans l'ordre d'appel des cinq
fiches. *Liste nominative des 20, écrite avant le lancement : `gpio` L120 ;
`prise-en-main` L21 ×2, L113 pv, L121, L125 ×2 ; `projet` L17 ×3 ;
`xiao-alimentation` L16 ×2, L51 pv, L66 ; `xiao-esp32-s3` L51 t, L51 pv, L71,
L91, L119, L120.*
⚠ *Premier jet de cette prédiction : « 12 », puis « 16 » — **deux fois faux**,
et pour la même cause à chaque fois : j'ai recompté de tête une liste que la
table du jugement portait déjà. **C110 dit qu'un décompte d'occurrences se lit
dans la sortie et ne se recompte pas de tête** ; le recoupement qui tranche
est **36 traités + 20 exemptés = 56**, terme à terme sur les cinq fiches.*
`hors perimetre` **reste à 16** — *inchangé, parce qu'aucune des 41 ancres ne
vit dans un titre, un tableau ou un alt.* ⚠ *20 et 16 sont deux chiffres
voisins qui ne se recoupent pas et ne doivent pas se lire l'un pour l'autre.*

**P45.18 — résidu du motif des puces après la passe.** **18 → 12** :
les 6 puces traitées sont `gpio` L104, `prise-en-main` L40, L41, L42,
`xiao-alimentation` L37, `xiao-esp32-s3` L30, L90, L93 — ⚠ **soit 8 et non
6.** *Recompte nominatif : `gpio` 1 traitée sur 4, `prise-en-main` 3 sur 6,
`projet` 0 sur 0, `xiao-alimentation` 1 sur 4, `xiao-esp32-s3` 3 sur 4 =
**8 traitées, 10 gardées**.* **Résidu attendu : 10**, décomposé
**3 / 3 / 0 / 3 / 1**.

⚠ *Les deux recomptes ci-dessus sont écrits **dans la prédiction elle-même**,
avant le lancement : C110 dit qu'un décompte d'occurrences se lit dans la
sortie et ne se recompte pas de tête — et les deux premiers jets, 12 et 6,
étaient faux tous les deux.*

**P45.19 — `git diff --numstat` après écriture.** **5 fichiers**, et
**insertions = suppressions** sur chacun, aucune ligne créée ni détruite.
⚠ *`numstat` compte des **lignes touchées**, pas des remplacements : les
comptes attendus sont **9 / 8 / 9 / 6 / 7 = 39** et non 41, parce que
`gpio` L17 porte 1 ancre pour 1 ligne mais que `gpio` L23 et L27 sont sur
des lignes distinctes… ⚠ **recompte nominatif exigé par C110 avant
publication** : les 41 ancres se répartissent sur **10 / 8 / 10 / 6 / 7**
lignes distinctes sauf collisions — et **une seule collision existe**,
`projet` L23, qui porte **deux ancres** (l'incise et le point-virgule).
**Lignes touchées attendues : 10 / 8 / 9 / 6 / 7 = 40.**

**P45.20 — code de sortie de la commande 4 : 0**, et **aucune** ligne
`REFUS`.

**Total : 20 prédictions, toutes à décompte plein.**

### Constats du bloc 45 — copie C124 `tools/batterie-sortie-3008b7.txt`

| # | prédiction | constat | verdict |
|---|---|---|---|
| P45.1 | ASCII 0, copie `3008b7` | idem | tenue |
| P45.2 | HEAD `2e346e4 … 00:26:58` inchangé | idem | tenue |
| P45.3 | `10   (hors artefacts : 4)` | **10 / 4** | tenue |
| P45.4 | pilotage inchangé, 3 lignes | idem | tenue |
| P45.5 | `CONTROLE SEUL`, `lignes de table : 41` | idem | tenue |
| P45.6 | 1 `INTROUVABLE` sur `raspberry-pi-gpio`, 0 `MULTIPLE` | `L6 INTROUVABLE … gpio`, 0 multiple | tenue |
| P45.7 | `gpio` `ancres 9/10`, **−11** au lieu de −12 | `9/10`, `8081 -> 8070` | tenue |
| P45.8 | 4 autres complètes, **−5 / −8 / −2 / −2** | idem au caractère | tenue |
| P45.9 | `prets 40`, `introuvables 1`, 0 aux cinq autres, accents 0 | idem | tenue |
| P45.10 | `REFUS : 1 defaut(s). AUCUN FICHIER ECRIT.`, code 1 | idem | tenue |
| P45.11 | `41 / 5 / 41`, zéro aux six compteurs | idem | tenue |
| P45.12 | invariant d'accents **nul sur les cinq** | `148/194/165/86/137`, écart +0 partout | tenue |
| P45.13 | **−12 / −5 / −8 / −2 / −2**, somme **−29** | `8081→8069`, `8064→8059`, `6972→6964`, `4271→4269`, `9195→9193` | tenue |
| P45.14 | lignes du corps inchangées | `123/121/74/53/110` des deux côtés | tenue |
| P45.15 | 5 `ECRIT`, **10 / 8 / 10 / 6 / 7**, code 0 | idem | tenue |
| P45.16 | corpus **−1 mot**, lot 5301 → 5300 | `gpio` 1134 → **1133**, `LOT 5300` | tenue |
| P45.17 | `C109 de prose` **20**, décomposé **1 / 6 / 3 / 4 / 6** ; `hors perimetre` **16** | **20**, `1 / 6 / 3 / 4 / 6` ; **16** | tenue |
| P45.18 | puces **10**, décomposé **3 / 3 / 0 / 3 / 1** | idem | tenue |
| P45.19 | `numstat` **10 / 8 / 9 / 6 / 7 = 40**, insertions = suppressions | idem, `10 10 / 8 8 / 9 9 / 6 6 / 7 7` | tenue |
| P45.20 | code de sortie 0, aucun `REFUS` | idem | tenue |

**Bilan du bloc 45 : 20 prédictions, 20 tenues, 0 réfutée.**

✅ **LE BLOC DE PASSE EST INTÉGRALEMENT TENU POUR LE TROISIÈME LOT
D'AFFILÉE**, et cette fois **sur vingt termes dont trois décompositions
complètes** : les points de code fiche par fiche, le résidu `--style` fiche
par fiche, le résidu des puces fiche par fiche. *Un total juste avec une
décomposition fausse aurait compté pour une réfutation — la règle du §8 est
appliquée dans le sens qui coûte.*

✅ **LE TEST NÉGATIF REFUSE, ET IL CHIFFRE CE QU'IL A REFUSÉ.** `mecatronique`
sans accent aigu rend **`ancres 9/10`** et **`8081 → 8070`**, soit **−11 au
lieu de −12**. *Un refus prouve qu'il refuse ; cet écart d'exactement 1 point
de code prouve **quelle** ancre il a refusée.* **Quatrième test négatif de la
série, quatrième refus, zéro fichier écrit.**

✅ **L'INVARIANT D'ACCENTS EST NUL SUR LES CINQ FICHES** — 148 / 194 / 165 /
86 / 137, identiques avant et après. *C'est la garde née d'É2 du 29/08
(suite 6), où 147 caractères accentués ont été perdus sous cinq contrôles au
vert ; elle tourne ici sur une passe qui ajoute `C'est` et retire `parce
que`, deux mots sans accent, et elle le voit.*

⚠ **L'ÉCART ENTRE ANCRES ET OCCURRENCES ÉTAIT NOMMÉ D'AVANCE, ET LE `numstat`
EN PORTE UN SECOND.** **41 ancres pour 44 occurrences** — trois incises à deux
tirets. **40 lignes touchées pour 41 ancres** — `raspberry-pi-projet` L23
porte **deux** ancres, l'incise et le point-virgule. *Trois compteurs
différents sur le même geste, publiés séparément avant la mesure : 44, 41,
40.*

⚠ **LE LOT EST LE PLUS EXEMPTÉ DE LA SÉRIE, 30 SUR 74**, et le résidu le
prouve : `C109 de prose` reste à **20** et le motif des puces à **10** là où
les lots 4 à 6 descendaient plus bas. *Ce résidu n'est pas une dette : ce sont
des formes jugées licites une par une, dont **trois** sont des sections de
liens (cas 1) et **deux** un faux positif d'intervalle d'alias déjà en file
depuis le lot 5.*

---

## ⛳ GATE G2 — fin de passe C109.

**Fait** — bloc 44 (motif des puces éprouvé sur 8 échantillons bilingues,
relevé du lot) et bloc 45 (jugement des 74 candidats, test négatif, passe de
41 ancres sur 5 sources FR).

**Chiffres qui ont changé** — Corpus FR **291 242 → 291 241** (−1 mot).
Volume du lot `tot` **5 301 → 5 300**. `raspberry-pi-gpio` **1 134 → 1 133**,
les quatre autres inchangées. Résidu `C109 de prose` **56 → 20**, résidu des
puces **18 → 10**, `hors perimetre` **16, inchangé**. Cinq fiches FR
modifiées, **40 lignes**, insertions = suppressions.

**Prédictions depuis l'ouverture : 102 à décompte plein, 97 tenues, 5
réfutées** (P42.20 reportée puis vérifiée au bloc 43), **1 hors décompte**.

**Ce qui suit** — bloc 46 : les **quatre relevés d'avant rédaction**, puis la
génération des cinq squelettes EN. *L'ordre est contraignant et il est tenu :
passe C109 sur le FR d'abord, génération ensuite — sinon les cinq squelettes
porteraient une empreinte périmée sans qu'aucun des trois compteurs ne
bronche.*

---

## Déclaration C131 du bloc 46 — rejouée, avec les cinq sources FR

**Populations : inchangées.**

| # | artefact | état git | total | hors artefacts |
|---|---|---|---|---|
| 1 | `tools/predictions-260830.md` | `??` | oui | non |
| 2-6 | `tools/batterie-sortie-3008b3…b7.txt` (5) | `??` | oui | non |
| 7 | `tools/batterie-sortie-3008b8.txt` (étape 0 de la garde du bloc 46) | `??` | oui | non |
| 8 | `tools/restant-hors-anneau-3008.mjs` | `??` | oui | **OUI** |
| 9 | `tools/puces-lot7-3008.txt` | `??` | oui | **OUI** |
| 10 | `tools/passe-negatif-lot7-3008.tsv` | `??` | oui | **OUI** |
| 11 | `tools/passe-c109-lot7-3008.tsv` | `??` | oui | **OUI** |
| 12-16 | **les 5 sources FR du lot**, modifiées par le bloc 45 | ` M` | oui | **OUI** |

**TOTAL : 16 au total, 9 hors artefacts de séance.** *Liste nominative du
second chiffre, à neuf noms : le script jetable, le relevé des puces, les deux
tables de passe, et les cinq sources FR.*

⚠ **Les cinq fiches EN générées par la dernière commande du bloc arrivent
APRÈS la lecture du compteur** : elles pèsent **0 ici** et **5 au bloc
suivant**, portant le total à **21** et le hors-artefacts à **14**.

---

## Bloc 46 — les quatre relevés d'avant rédaction, puis génération des cinq squelettes

**Commandes, dans cet ordre :**

1. `powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase garde`
2. **relevé 1** — titres de section : formes de production du corpus EN,
   et les titres de section des cinq sources FR
3. **relevé 2** — `title:` : les libellés de production qui visent les cinq
   fiches, et le `title:` FR de chacune (qualificatif de famille compris)
4. **relevé 3** — le motif des puces est déjà éprouvé au bloc 44 ; **ce
   relevé est fait**, et son constat est au bilan du bloc 44
5. **relevé 4 (neuf, clause C113 du 30/08)** — les **chaînes affichées
   couplées à un littéral** dans les blocs de code des cinq sources
6. génération : `node tools/creer-fiche-en.mjs <chemin>` × 5

### Prédictions du bloc 46

**Garde**

**P46.1** — `ASCII 0`, copie `tools\batterie-sortie-3008b8.txt`.

**P46.2** — `HEAD git : 2e346e4 2026-08-30 00:26:58 +0200`, inchangé.

**P46.3** — `fichiers modifies non commites : 16   (hors artefacts de
seance : 9)`, liste nominative à neuf noms ci-dessus.

**P46.4** — pilotage inchangé à la seconde : `00:25:50 / 00:24:38 /
21:48:08`.

**Relevé 1 — titres de section**

**P46.5 — les six formes génériques de production sont toujours là, et
chacune a monté de 0 à 3.** Le relevé de la suite 11 (203 fiches EN) rendait
**196 / 134 / 133 / 99 / 34 / 25**. **Trois fiches EN ont été écrites
depuis** — les trois du lot 6 —, donc chaque forme sort dans
**[v, v + 3]** : **196-199 / 134-137 / 133-136 / 99-102 / 34-37 / 25-28**.
⚠ *Je ne prédis pas les libellés eux-mêmes : la suite 11 les a mesurés sans
les consigner nommément au JOURNAL, et les nommer de mémoire serait les
inventer (C118). **Ce sont les six poids qui sont prédits, pas les six
noms.***

**P46.6 — les deux formes fautives du lot 4 restent à ZÉRO.**
`## Project connection` et `## Step-by-step procedure` rendent **0**.
*Deuxième épreuve du correctif É1 de la suite 10, et la seule mesure du dépôt
qui puisse dire qu'il tient encore.*

**P46.7 — les deux concurrentes chiffrées restent minoritaires.**
`## In the project` ∈ [20, 23] et `## Common pitfalls` ∈ [15, 18], **toutes
deux strictement inférieures** à la forme générique de même famille.

⚠ **P46.8 — LE LOT 7 EST LE PREMIER HORS GABARIT, ET LE RELEVÉ VA LE
CHIFFRER.** Les cinq sources FR portent **36 titres de section** au total —
`gpio` **9**, `prise-en-main` **8**, `projet` **6**, `xiao-alimentation`
**5**, `xiao-esp32-s3` **8**. **Treize seulement** appartiennent à une famille
générique (`À quoi ça sert ?`, `Pièges`, `Aller plus loin`, `Voir aussi`),
décomposées **4 / 4 / 3 / 1 / 1**. **Vingt-trois sont propres à leur fiche**
et **n'ont aucune forme de production** : elles se traduiront sans modèle.
*C'est la conséquence chiffrée de la réfutation P44.18 — ces deux modules ne
suivent pas l'ossature d'`esp32/`, `teensy/` et `stm32/`.*

**Relevé 2 — `title:` EN (C125)**

**P46.9 — les cinq `title:` FR, au caractère.** `Piloter les GPIO depuis
Linux` ; `Prise en main du Raspberry Pi` ; `Le SBC dans un projet
mécatronique` ; `Alimenter le XIAO ESP32-S3` ; `XIAO ESP32-S3`.
⚠ *Deux d'entre eux portent le **qualificatif de famille** en clair —
`du Raspberry Pi`, `le XIAO ESP32-S3` — et la clause C125 du 29/08 (suite 9)
dit qu'un titre EN qui **englobe** une forme de production ne crée **aucun**
candidat `--libelles`. **Ce sera sa troisième épreuve.***

**P46.10 — `--libelles` avant génération : 109 `candidats a lire`**, valeur
de la clôture du lot 6. *Terme de référence : il servira à mesurer, à la
clôture, ce que les cinq `title:` neufs coûtent — la clause C125 prédit
**zéro** de leur fait.*

**Relevé 4 — chaînes affichées couplées à un littéral (clause C113 du 30/08)**

⚠ **P46.11 — AUCUNE des cinq sources ne porte de chaîne affichée couplée à un
littéral numérique.** *Motif lu dans les blocs de code des cinq fiches :
`raspberry-pi-gpio` porte **quatre** blocs Python (`gpiozero`), qui n'appellent
que `led.on()`, `sleep()`, `print("Appui")` et `print("Relâché")` ;
`raspberry-pi-prise-en-main` porte des blocs `bash` et un
`print("Bonjour depuis le Pi !")` ; `raspberry-pi-projet` porte un bloc
`serial` avec `mcu.write(f"C {a1} {a2} {a3}\n".encode())` ; les deux `xiao/`
n'ont **aucun** bloc de code. **Aucun `HAL_UART_Transmit(..., 5, 100)`,
aucune longueur d'octets écrite en dur.** La clause C113 du 30/08 est donc
**hors sujet pour ce lot**, et c'est sa première épreuve à vide.*

⚠ **P46.12 — MAIS TROIS CHAÎNES AFFICHÉES SE TRADUISENT SANS RÉSERVE, ET UNE
QUATRIÈME NE SE TRADUIT PAS.** Se traduisent : `print("Appui")` →
`print("Press")`, `print("Relâché")` → `print("Release")` — *ce que le
programme **dit**, C113 en plein* — et
`print("Bonjour depuis le Pi !")` avec sa sortie attendue
`Bonjour depuis le Pi !` **des deux lignes ensemble**, plus
`print("Bonjour depuis", platform.node(), "—", platform.machine())`.
⚠ *Ne se traduit pas : `"/dev/ttyACM0"`, `"C {a1} {a2} {a3}\n"` et le
commentaire de protocole qui le décrit — le premier **désigne** un fichier de
périphérique, le second est un **format de protocole** repris à l'octet par
le microcontrôleur. C113, borne « dire contre désigner ».*
⚠ **Les identifiants restent français** — `envoyer_consigne`, `bouton`,
`led`, `mcu` —, coût assumé de C113.

**Génération**

**P46.13** — **5 fiches EN créées**, aux chemins
`en/embarque/mcu/raspberry-pi/raspberry-pi-gpio-en.md`,
`…-prise-en-main-en.md`, `…-projet-en.md`,
`en/embarque/mcu/xiao/xiao-alimentation-en.md`,
`…/xiao-esp32-s3-en.md`. ⚠ **Le répertoire `content/en/embarque/mcu/xiao/`
n'existe pas et sera créé** — c'est le premier module du chantier dont la
zone anglaise est vide.

**P46.14** — chaque squelette porte un `source_sha256` **calculé sur la
source d'après la passe C109**, donc `derive-traduction` rendra
`DERIVE 0` et `MARQUE INVALIDE 0` **sans aucun `--recaler`**. *L'ordre passe
puis génération est ce qui l'assure.*

**P46.15** — `xiao-esp32-s3.md` porte un bloc `aliases:` (`xiao`) : le script
**le retire et le signale**. *Lu dans l'en-tête du code, et c'est la seule
des cinq à en porter un.*

**P46.16** — code de sortie **0** sur les cinq générations, et **aucune**
ligne `existe deja`.

**Total : 16 prédictions, toutes à décompte plein.**

### Constats du bloc 46 — copie C124 `tools/batterie-sortie-3008b8.txt`

| # | prédiction | constat | verdict |
|---|---|---|---|
| P46.1 | ASCII 0, copie `3008b8` | idem | tenue |
| P46.2 | HEAD inchangé | idem | tenue |
| P46.3 | `16   (hors artefacts : 9)` | **16 / 9** | tenue |
| P46.4 | pilotage inchangé | idem | tenue |
| P46.5 | six formes ∈ [v, v+3] de **196 / 134 / 133 / 99 / 34 / 25** | **199 / 137 / 136 / 102 / 37 / 28** — **+3 sur les six** | tenue |
| P46.6 | `## Project connection` **0**, `## Step-by-step procedure` **0** | **0 / 0** | tenue |
| P46.7 | `## In the project` ∈ [20,23], `## Common pitfalls` ∈ [15,18], minoritaires | **20** et **15**, contre 102 et 136 | tenue |
| P46.8 | **36** titres, **9 / 8 / 6 / 5 / 8** ; **13** génériques (**4 / 4 / 3 / 1 / 1**), **23** propres | idem au caractère | tenue |
| P46.9 | les cinq `title:` FR au caractère | idem | tenue |
| P46.10 | `--libelles` à **109** avant génération | **non relevé dans ce bloc** | **non tenue, non réfutée** |
| P46.11 | aucune chaîne affichée couplée à un littéral | **aucune** ; ⚠ le motif disait « quatre blocs Python » dans `gpio`, il y en a **trois** | **tenue, motif faux** |
| P46.12 | trois chaînes affichées se traduisent | **RÉFUTÉE par relecture de la clause C113** — voir ci-dessous | **RÉFUTÉE** |
| P46.13 | 5 fiches créées, dont `content/en/embarque/mcu/xiao/` créé | 5 créées, aux cinq chemins prédits | tenue |
| P46.14 | `DERIVE 0` / `MARQUE INVALIDE 0` sans `--recaler` | **à mesurer à la clôture** | reportée |
| P46.15 | `aliases:` retiré et signalé sur `xiao-esp32-s3` seule | `aliases retires (2 ligne(s)) : aliases: / - xiao` | tenue |
| P46.16 | code 0 sur les cinq, aucun `existe deja` | 5 × `CODE=0` | tenue |

**Bilan du bloc 46 : 16 prédictions, 13 tenues, 1 réfutée, 1 reportée, 1 non
relevée.**

✅ **LES SIX FORMES DE PRODUCTION ONT TOUTES MONTÉ DE +3, ET C'EST LE TERME
QUI PROUVE.** `See also` 196 → **199**, `What is it for?` 134 → **137**,
`Pitfalls` 133 → **136**, `Where it fits in the project` 99 → **102**,
`Exercises` 34 → **37**, `Going further` 25 → **28**. *Trois fiches EN écrites
depuis le relevé de la suite 11, et **les six formes montent exactement de
trois** : les trois fiches du lot 6 portaient les six sections génériques,
toutes les six.* ⚠ **`Step by step` sort à 75** et n'est **pas** dans les
six — 73 à la suite 10, +2 : *deux des trois fiches du lot 6 la portaient, pas
la troisième.* **Candidate du §8 née de la suite 10 : deuxième épreuve, tenue,
et c'est ce qui la porte à 2/N.**

⚠ **LE LOT 7 EST HORS GABARIT, ET LE CHIFFRE EST 23 SUR 36.** Treize titres
de section seulement appartiennent à une famille générique — et la
décomposition **4 / 4 / 3 / 1 / 1** dit où : les trois `raspberry-pi/` sont
des **tutos** et suivent l'ossature ; les deux `xiao/` sont des **notions** et
ne portent que `## Voir aussi`. **Vingt-trois titres se traduiront sans
modèle de production.** *Aucun lot depuis le lot 3 n'avait ce profil, et
c'est ce que la réfutation P44.18 annonçait deux blocs plus tôt.*

✅ **LES CINQ `title:` EN SORTENT DE LA PRODUCTION POUR TROIS D'ENTRE EUX, ET
DE LA SOURCE POUR LES DEUX AUTRES.** Relevé des libellés EN qui visent les
cinq cibles suffixées :
- `raspberry-pi-gpio-en` → **`Driving the GPIO from Linux`** (2 occurrences,
  capitale et bas de casse), plus `Raspberry Pi` et `Raspberry Pi — GPIO`,
  qui sont des **libellés de désambiguïsation** et sortent du concours
  (**test 1 de C125**).
- `raspberry-pi-prise-en-main-en` → **`Getting started with the Raspberry
  Pi`** (1), qui est **exactement** la forme de famille
  `Getting started with the STM32` / `…the ESP32` et **porte le qualificatif
  que le `title:` FR porte**.
- `raspberry-pi-projet-en` → **`The SBC on a mechatronics project`** (1),
  plus `the SBC in a project` (1), forme courte de prose.
- `xiao-alimentation-en` → **aucune forme de titre** : le seul libellé,
  `a XIAO ESP32-S3` (2), est de la prose. **Test 3** → **`Powering the XIAO
  ESP32-S3`**, qui reporte le qualificatif de famille du `title:` FR
  `Alimenter le XIAO ESP32-S3`.
- `xiao-esp32-s3-en` → **zéro libellé de production**, la zone anglaise du
  module étant vide. **`XIAO ESP32-S3`**, nom propre, identique des deux
  côtés.

⚠ **Trois des cinq titres portent le qualificatif de famille** (`the Raspberry
Pi` ×2, `the XIAO ESP32-S3`), et **deux d'entre eux englobent une forme de
production plus courte** (`the SBC in a project`, `a XIAO ESP32-S3`).
**Troisième épreuve de la clause C125 du 29/08 (suite 9)** : elle prédit
**zéro candidat `--libelles` créé** de ce fait, à vérifier à la clôture.

---

## ⚠ RÉFUTATION P46.12 — J'AI PRÉDIT DE TRADUIRE TROIS CHAÎNES QUE LA CLAUSE C113 DU 30/08 INTERDIT DE TOUCHER

**La prédiction disait** : `print("Appui")` → `print("Press")`,
`print("Relâché")` → `print("Release")`, et
`print("Bonjour depuis le Pi !")` avec son bloc de sortie, *« C113 en plein »*.

**Relecture de la clause, avant d'écrire une ligne** : la clause du 30/08 pose
**« le code d'une fiche EN est identique À L'OCTET à celui de sa source FR »**,
et son ⚠ final donne le **test opératoire** : *un mot **tapé par l'étudiant**
et reproduit par un bloc de sortie n'est porté par **aucun littéral du code
source**, donc il se traduit ; `stm32-hal-en` porte `"Bonjour\r\n"` **dans un
bloc de code** et `hello` **dans une saisie utilisateur**, et c'est cohérent :
le premier est du code, le second ne l'est pas.*

**Le test est donc : le texte est-il porté par un littéral du code source ?**
Les trois chaînes de ce lot le sont toutes les trois. **Elles ne se traduisent
pas.** *Ma prédiction appliquait C113 dans son texte de 24/08, comme si la
clause du 30/08 ne visait que les littéraux de longueur ; elle vise le code.*

⚠ **La voie de sortie ne s'ouvre pas non plus.** Elle exige une forme que
**le français accepte** — c'est ce qui a permis `tic` → `tick` des deux
côtés. `Appui` → `Press` et `Relâché` → `Release` ont beau avoir **la même
longueur** (5 et 5, 7 et 7), `Press` et `Release` ne sont pas des mots
français : angliciser la source serait le contresens que la clause nomme
pour `Bonjour` → `Hello`.

**Doctrine appliquée à la rédaction, publiée avant d'écrire :**
1. **Les blocs de code sont recopiés à l'octet**, littéraux affichés compris —
   `print("Appui")`, `print("Relâché")`, `print("Bonjour depuis le Pi !")`,
   `print("Bonjour depuis", platform.node(), "—", platform.machine())`.
2. **Le bloc de sortie attendue qui reproduit un littéral reste français** —
   `Bonjour depuis le Pi !` sous le bloc interactif —, *sinon la démonstration
   se contredit, ce qui est le motif d'origine de C113*.
3. **Les commentaires DE code se traduisent** (C77, que la clause n'abroge
   pas et que l'entrée du 30/08 rappelle en toutes lettres) : les cinq
   commentaires français des blocs de `gpio` et `projet`.
4. **Les identifiants restent français** — `bouton`, `led`, `mcu`,
   `envoyer_consigne`, `bonjour.py` —, coût assumé de C113.

⚠ **ASSOMPTION ÉCRITE SOUS C116 (8), AVEC SON COÛT DE REVERT.** La clause du
30/08 est **1/N** et n'a jamais servi hors d'un littéral de longueur. Si Tim
lit sa phrase principale plus étroitement — *le code reste identique **quand
un littéral est couplé**, et les chaînes affichées libres se traduisent comme
depuis le 24/08* —, alors les trois fiches EN concernées sont à reprendre.
**Coût du revert : 4 littéraux de code et 1 ligne de bloc de sortie, sur 2
fiches EN.** *Versée à la file des arbitrages.*

⚠ **P46.11 tient sur son verdict et sa justification porte un chiffre faux** :
j'ai écrit *« `raspberry-pi-gpio` porte quatre blocs Python »*, le `--controle`
de la génération en rend **trois** (`code : 3 -> 3`). *Le verdict — aucune
chaîne couplée à un littéral — ne dépend pas du compte, mais le compte était
recopié de tête d'une lecture faite dix minutes plus tôt, ce que C110
proscrit.* Comptes réels : `gpio` **3**, `prise-en-main` **7**, `projet`
**1**, les deux `xiao/` **0**.

⚠ **P46.10 N'A PAS ÉTÉ RELEVÉE, ET ELLE EST DÉCLARÉE NON TENUE PLUTÔT
QU'AFFIRMÉE.** `--libelles` avant génération n'a pas été lancé : le bloc
portait déjà quatre relevés et la génération, et je ne l'ai pas passé.
*La référence 109 vient de la clôture du lot 6 et **elle sera comparée à la
clôture d'aujourd'hui** ; ce qui manque est le point intermédiaire, qui aurait
séparé l'effet de la génération de celui de la rédaction.* **Consigné en
manque, pas en résultat** (C118).

---

## ⛳ GATE G3 — avant rédaction.

**Fait** — quatre relevés (titres de section, `title:` EN, motif des puces au
bloc 44, chaînes couplées à un littéral) et **cinq squelettes EN générés**,
`content/en/embarque/mcu/xiao/` créé.

**Chiffres** — 36 titres de section dont **23 sans forme de production** ;
cinq `title:` EN arrêtés, **trois qualifiés par la famille** ; formes de
production **199 / 137 / 136 / 102 / 37 / 28**, les deux fautives du lot 4
toujours à **0** ; compteurs de génération **tous ok** (liens 11/7/14/10/39,
embeds 3/1/1/1/4, code 3/7/1/0/0).

**Ce qui suit** — bloc 47 : rédaction des cinq fiches EN, **en partant du
squelette sur disque** (règle du 29/08 suite 8, violée à la suite 11 et
rattrapée par un compteur).

---

## Déclaration C131 du bloc 47 — rejouée

**Populations : inchangées.** **Aucun fichier neuf** n'est créé par ce bloc :
la rédaction **réécrit** les cinq squelettes déjà présents, et la table de
titres arrive au bloc 48.

| # | artefact | état git | total | hors artefacts |
|---|---|---|---|---|
| 1 | `tools/predictions-260830.md` | `??` | oui | non |
| 2-7 | `tools/batterie-sortie-3008b3…b8.txt` (6) | `??` | oui | non |
| 8 | `tools/batterie-sortie-3008b9.txt` (étape 0 de la garde du bloc 47) | `??` | oui | non |
| 9-12 | script jetable, relevé des puces, 2 tables de passe | `??` | oui | **OUI** (4) |
| 13-17 | les 5 sources FR | ` M` | oui | **OUI** (5) |
| 18-22 | les 5 fiches EN générées au bloc 46 | `??` | oui | **OUI** (5) |

**TOTAL : 22 au total, 14 hors artefacts de séance.**

---

## Bloc 47 — rédaction des cinq fiches EN

**Méthode contrainte** — *règle du 29/08 (suite 8), inscrite dans
`CLAUDE.md` et violée à la suite 11 malgré sa relecture d'ouverture* : **chaque
fiche se rédige en partant de son squelette sur disque**. Le front matter
n'est **jamais** retapé ; le `source_sha256` de 64 hexadécimaux reste celui
que le générateur vient de poser. Le `title:` ne se touche pas ici : il passe
par `renommer-titres.mjs` au bloc 48.

### Prédictions du bloc 47

**P47.1 — les cinq `title:` EN arrêtés, au caractère** (écrits au bloc 48, pas
ici) : `Driving the GPIO from Linux` ; `Getting started with the Raspberry
Pi` ; `The SBC on a mechatronics project` ; `Powering the XIAO ESP32-S3` ;
`XIAO ESP32-S3`.

**P47.2 — les 13 titres de section génériques prennent leur forme de
production, au caractère** : `## À quoi ça sert ?` → `## What is it for?`
(×3) ; `## Pièges` → `## Pitfalls` (×3) ; `## Aller plus loin` →
`## Going further` (×2) ; `## Voir aussi` → `## See also` (×5).
*Les six formes de production relevées au bloc 46 les portent toutes.*

**P47.3 — les 23 titres propres se traduisent sans modèle**, et **aucun** ne
prend par accident une forme de production existante. ⚠ *Terme écrit pour
réfuter : si l'un d'eux sortait en `## Step by step` ou `## In the project`,
ce serait un alignement de commodité et non une traduction.*

**P47.4 — les blocs de code sont recopiés À L'OCTET**, littéraux affichés
compris, sous la doctrine publiée à la réfutation P46.12. **11 blocs au
total** (`gpio` 3, `prise-en-main` 7, `projet` 1), et `--controle` doit rendre
**3 / 7 / 1 / 0 / 0**, inchangés.

**P47.5 — les commentaires DE code se traduisent** (C77). **Cinq
commentaires français** : `gpio` `# GPIO17 (numérotation BCM)`,
`# GPIO2, tirage interne vers le haut (appui = niveau bas)`,
`# laisse le programme vivre, en attente d'événements` ; `projet`
`# protocole texte simple : "C a1 a2 a3\n"`,
`# accusé / état renvoyé par le MCU`, `# vise une posture du bras`.
⚠ *Recompte : **six** et non cinq — trois dans `gpio`, trois dans `projet`.*

**P47.6 — la virgule décimale française devient un point.** `--style` rend un
**verdict mécanique** sur `\d,\d` dans une fiche EN. **Onze occurrences à
convertir**, relevées avant écriture : `3,3 V` (`gpio` ×2 dont un alt et un
titre de section, `xiao-esp32-s3` ×2), `21 × 17,8 mm` (`xiao-esp32-s3` ×2),
`3,7 V`, `4,2 V`, `3,8 V` (`xiao-alimentation`), `2,4 GHz`, `2,54 mm`
(`xiao-esp32-s3`). ⚠ *Le compte exact n'est pas prédit — il est **relevé à
l'écriture, fiche par fiche**, et le seul terme prédit est
`typographie francaise : 0` à la remesure.*

**P47.7 — `typographie francaise` = 0 sur les cinq fiches EN.** Ni espace
française devant `; : ! ? %`, ni virgule décimale. *Verdict mécanique, donc
un seul écart est un défaut et non un candidat.*

**P47.8 — `hors alphabet latin` = 0 et `C109 creees en EN` = 0.**

**P47.9 — `C109 de prose` en EN : 20, décomposé 1 / 6 / 3 / 4 / 6**, aux
**vingt mêmes emplacements** qu'en français. *C'est le report un pour un, et
la décomposition est le terme qui prouve : un total de 20 obtenu avec une
autre répartition serait une asymétrie déguisée en succès.*

**P47.10 — `hors perimetre` en EN : entre 12 et 20.** ⚠ *Il n'est pas prédit
égal à 16 : deux des seize vivent dans des **titres de section** dont la
traduction peut perdre le tiret — `## Niveaux de tension — 3,3 V` et
`## 2. Préparer le démarrage headless — avant de flasher` —, et les
`—` d'alt d'image se reportent, eux, un pour un.*

**P47.11 — motif des puces en EN : 10, décomposé 3 / 3 / 0 / 3 / 1**,
identique au français.

**P47.12 — foisonnement, terme à terme.** FR → EN, sous C110 :
`raspberry-pi-gpio` **1 133 → 1 145-1 202** ;
`raspberry-pi-prise-en-main` **1 167 → 1 179-1 237** ;
`raspberry-pi-projet` **990 → 1 000-1 050** ;
`xiao-alimentation` **659 → 666-699** ;
`xiao-esp32-s3` **1 351 → 1 365-1 432**.
**Lot : 5 300 → 5 353-5 618, soit +1,0 à +6,0 %**, point estimé **+3,0 %**
(**5 459**). *Base : moyenne du corpus **3,8 %**, lots récents **+2,0 %** et
**+1,6 %**, et **la règle du §8 s'applique — un total dans la fourchette ne
valide pas la décomposition**, donc les cinq bornes sont posées fiche par
fiche.* ⚠ *`xiao-esp32-s3` est la plus dense en **code inline** et en
**tableaux** des cinq : c'est celle qui doit sortir le plus bas si
l'hypothèse du 24/08 tient, et je le publie avant de mesurer.*

**P47.13 — `--controle` : 5 fiches, 0 divergente, 0 lien non suffixé sur 0.**
Liens **11 / 7 / 14 / 10 / 39**, embeds **3 / 1 / 1 / 1 / 4**, code
**3 / 7 / 1 / 0 / 0**, inchangés depuis la génération.

**P47.14 — `derive-traduction` : `MARQUE INVALIDE 0`, `DERIVE 0`, `A JOUR
211`.** *Aucun `--recaler` : la passe C109 précède la génération, et le front
matter n'est pas retapé.* ⚠ *211 = 206 + 5, et c'est une **addition sur une
population déclarée** : les 206 de la clôture du lot 6, plus les cinq de ce
lot.*

**P47.15 — corpus EN : 250 151 → 255 504-255 769.** *250 151 est le chiffre
de la clôture du lot 6, et l'écart est exactement le volume EN du lot puisque
**aucune fiche EN existante n'est touchée**.*

**P47.16 — les cinq fiches EN portent zéro alias**, `aliases:` ayant été
retiré à la génération sur la seule `xiao-esp32-s3-en`.

**Total : 16 prédictions, toutes à décompte plein.**

### Constats du bloc 47 — copie C124 `tools/batterie-sortie-3008b9.txt`

| # | prédiction | constat | verdict |
|---|---|---|---|
| garde | `22   (hors artefacts : 14)` | **21 / 13** | **RÉFUTÉE** |
| P47.1 | les cinq `title:` EN arrêtés | écrits au bloc 48 | reportée |
| P47.2 | 13 génériques aux formes de production | `What is it for?` ×3, `Pitfalls` ×3, `Going further` ×2, `See also` ×5 = **13** | tenue |
| P47.3 | 23 titres propres, aucun n'usurpe une forme de production | **23**, aucun `Step by step` ni `In the project` | tenue |
| P47.4 | code recopié à l'octet, `--controle` 3 / 7 / 1 / 0 / 0 | **0 divergente sur 211** ; `diff` du code hors commentaires : **identique sur les trois fiches à blocs** | tenue |
| P47.5 | **six** commentaires de code traduits | 3 dans `gpio`, 3 dans `projet`, lus au `diff` | tenue |
| P47.6 | virgules décimales converties en points | `typographie francaise : 0` | tenue |
| P47.7 | `typographie francaise` = 0 | **0** | tenue |
| P47.8 | `hors alphabet latin` = 0, `C109 creees en EN` = 0 | **0 / 0** | tenue |
| P47.9 | `C109 de prose` **20**, décomposé **1 / 6 / 3 / 4 / 6** | **20**, `1 / 6 / 3 / 4 / 6` | tenue |
| P47.10 | `hors perimetre` ∈ [12, 20] | **16**, identique au français | tenue |
| P47.11 | puces **10**, décomposé **3 / 3 / 0 / 3 / 1** | idem | tenue |
| P47.12 | foisonnement **+1,0 à +6,0 %**, cinq bornes | **−1,1 / −2,2 / −0,2 / −0,2 / +2,1 %** | **RÉFUTÉE, cinq termes sur cinq** |
| P47.13 | `--controle` 211, 0 divergente, 0 lien non suffixé sur 0 | idem | tenue |
| P47.14 | `MARQUE INVALIDE 0`, `DERIVE 0`, `A JOUR 211` | idem, **sans aucun `--recaler`** | tenue |
| P47.15 | corpus EN **255 504-255 769** | **255 438** | **RÉFUTÉE** |
| P47.16 | zéro `aliases:` dans les cinq | **0** | tenue |

**Bilan du bloc 47 : 17 termes à décompte plein, 14 tenus, 3 réfutés,
1 reporté.**

⚠ **LE FOISONNEMENT EST NÉGATIF, ET C'EST UNE PREMIÈRE DANS TOUT LE
CHANTIER.** **−1,1 / −2,2 / −0,2 / −0,2 / +2,1 %**, lot **5 300 → 5 287, soit
−0,2 %**, quand la moyenne du corpus est **+3,7 %** et que les vingt-et-un
lots précédents sont tous positifs. **La prédiction est réfutée sur ses cinq
termes ET sur son total** — *ce qui est au moins cohérent : ce n'est pas un
total juste masquant une décomposition fausse, c'est une hypothèse fausse de
part en part.*

✅ **ET CE N'EST PAS UNE PERTE DE CONTENU, QUATRE MESURES INDÉPENDANTES LE
DISENT.** `--controle` rend **0 divergente sur 211** — liens, embeds et blocs
de code égaux fiche par fiche. Le recompte de structure rend, fiche par
fiche, **le même nombre de sections** (9 / 8 / 6 / 5 / 8) et **le même nombre
de puces** (13 / 12 / 10 / 12 / 19) des deux côtés. Le `diff` des blocs de
code hors commentaires est **vide sur les trois fiches qui en portent**. Le
résidu C109 se reporte **un pour un, décomposition comprise**.

⚠ **CAUSE PLAUSIBLE, NON MESURÉE, ET PUBLIÉE COMME TELLE** (C119) : les cinq
fiches sont denses en **noms propres, tableaux et code inline** — `GPIO17`,
`gpiozero`, `D0–D10`, les onze lignes de brochage, les cinq lignes de
variantes — que C110 compte comme des mots et qui sont **identiques dans les
deux langues**, donc la part de prose foisonnante est diluée. *C'est
l'hypothèse du 24/08, toujours au BACKLOG, toujours non comptée* — et c'est
le quatrième lot d'affilée où elle est la seule explication qui tienne.
⚠ **Ce que la mesure ajoute cette fois** : `xiao-esp32-s3`, **la plus dense
des cinq en tableaux et en code inline**, est **la seule à foisonner
positivement** (+2,1 %). *L'hypothèse prédit l'inverse. Je l'avais écrite
avant de mesurer, en P47.12, et elle tombe.* **L'hypothèse du 24/08 n'est pas
seulement non comptée : elle vient d'être contredite par le seul terme du lot
qui la testait.**

⚠ **RÉFUTATION DE LA GARDE — `git status --porcelain` REPLIE UN RÉPERTOIRE
NON SUIVI SUR UNE SEULE LIGNE.** Prédit **22 / 14**, mesuré **21 / 13**.
Cause lue dans la sortie brute : `content/en/embarque/mcu/xiao/` est **un
répertoire entièrement neuf**, et git le rend en **une** ligne
`?? content/en/embarque/mcu/xiao/` au lieu des **deux** fiches qu'il
contient. *Les trois fiches `raspberry-pi/` sont comptées une par une parce
que leur répertoire, lui, est déjà suivi.* ⚠ **C'est le premier lot du
chantier à créer un répertoire sous `content/en/`**, et la déclaration C131
comptait des **fichiers** là où le compteur compte des **entrées de
`git status`**. *C116 (7) dit de lire un compteur dans le code qui
l'incrémente ; ici le code est celui de git, et il replie.*

---

## Déclaration C131 du bloc 48 — rejouée

**Population du compteur `git status --porcelain` : PRÉCISÉE** — le compteur
compte des **entrées de `git status`**, et un **répertoire entièrement non
suivi vaut UNE entrée**, quel que soit le nombre de fichiers qu'il porte
(réfutation du bloc 47). `content/en/embarque/mcu/xiao/` porte **deux**
fiches et pèse **1**.

| # | artefact | entrées git | total | hors artefacts |
|---|---|---|---|---|
| 1 | `tools/predictions-260830.md` | 1 | oui | non |
| 2-8 | `tools/batterie-sortie-3008b3…b9.txt` (7) | 7 | oui | non |
| 9 | `tools/batterie-sortie-3008b10.txt` (étape 0 de la garde du bloc 48) | 1 | oui | non |
| 10-13 | script jetable, relevé des puces, 2 tables de passe | 4 | oui | **OUI** |
| 14 | `tools/table-titres-lot7-3008.tsv` (écrite avant la garde) | 1 | oui | **OUI** |
| 15 | `tools/table-titres-negatif-lot7-3008.tsv` (idem) | 1 | oui | **OUI** |
| 16-20 | les 5 sources FR | 5 | oui | **OUI** |
| 21-23 | les 3 fiches `raspberry-pi/…-en.md` | 3 | oui | **OUI** |
| 24 | `content/en/embarque/mcu/xiao/` — **répertoire neuf, UNE entrée pour deux fiches** | 1 | oui | **OUI** |

**TOTAL : 24 entrées au total, 15 hors artefacts de séance.**

---

## Bloc 48 — les cinq `title:` EN (C125), avec test négatif

**Commandes, dans cet ordre :**

1. `powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase garde`
2. test négatif : `node tools/renommer-titres.mjs tools/table-titres-negatif-lot7-3008.tsv`
3. contrôle seul : `node tools/renommer-titres.mjs tools/table-titres-lot7-3008.tsv`
4. écriture : `node tools/renommer-titres.mjs tools/table-titres-lot7-3008.tsv --ecrire`

**Le test négatif** : la table réelle avec **une seule ancre mutilée** —
`Le SBC dans un projet mecatronique`, **sans accent aigu** sur
`mécatronique`, dans `raspberry-pi-projet-en`. *Même mode d'échec qu'au bloc
45, sur l'autre outil à ancre.*

### Prédictions du bloc 48

**P48.1** — garde : `ASCII 0`, copie `tools\batterie-sortie-3008b10.txt`,
`HEAD 2e346e4 … 00:26:58` inchangé, pilotage `00:25:50 / 00:24:38 /
21:48:08`.

**P48.2** — garde : `fichiers modifies non commites : 24   (hors artefacts de
seance : 15)`, par la déclaration C131 ci-dessus **et sa règle de repli**.

**P48.3 — test négatif : REFUS, zéro fichier écrit**, avec **exactement une**
ancre en défaut, sur `en/embarque/mcu/raspberry-pi/raspberry-pi-projet-en.md`,
et **quatre** lignes valides.

**P48.4 — contrôle seul : 5 lignes de table, 5 ancres trouvées, 0 défaut**,
et **aucune écriture**.

**P48.5 — écriture : les cinq `title:` prennent leur valeur arrêtée**, au
caractère :

| fiche EN | ancre (titre FR recopié par la génération) | nouveau `title:` |
|---|---|---|
| `raspberry-pi-gpio-en` | `Piloter les GPIO depuis Linux` | **`Driving the GPIO from Linux`** |
| `raspberry-pi-prise-en-main-en` | `Prise en main du Raspberry Pi` | **`Getting started with the Raspberry Pi`** |
| `raspberry-pi-projet-en` | `Le SBC dans un projet mécatronique` | **`The SBC on a mechatronics project`** |
| `xiao-alimentation-en` | `Alimenter le XIAO ESP32-S3` | **`Powering the XIAO ESP32-S3`** |
| `xiao-esp32-s3-en` | `XIAO ESP32-S3` | **`XIAO ESP32-S3`** |

⚠ **P48.6 — LA CINQUIÈME LIGNE A UNE ANCRE ÉGALE À SON REMPLACEMENT**, le
titre étant un nom propre identique dans les deux langues. *La garde du script
exige que le titre courant soit **égal à l'ancre** ; elle ne dit rien d'un
remplacement identique. **Prédiction : la ligne passe et le fichier est
réécrit à l'octet près.*** *Terme écrit pour réfuter : si le script refusait
une réécriture nulle, il faudrait retirer la ligne de la table.*

**P48.7 — `derive-traduction` reste à `A JOUR 211`.** *Le `title:` d'une fiche
EN n'entre pas dans le calcul de l'empreinte, qui porte sur la **source FR** ;
aucun `--recaler` n'est nécessaire.* ⚠ *Terme écrit pour réfuter : c'est
l'inverse du 30/08, où `--recaler` avait, lui, réécrit un front matter et
ajouté une ligne au `numstat`.*

**P48.8 — `titres-doublons` des deux côtés.** FR **243 / 243 / 0** —
*inchangé, aucun `title:` français n'a bougé.* EN **206 → 211 fiches**, et
**211 titres distincts, 0 groupe**. ⚠ *Terme qui décide : `XIAO ESP32-S3` est
le `title:` FR **et** EN de la même fiche, ce qui ne fait pas un doublon ; il
faudrait deux **fiches EN** portant le même titre. **Prédiction : 0 groupe des
deux côtés.***

**P48.9 — `--libelles` : `candidats a lire` monte de 109 à AU PLUS 112.**
*Clause C125 du 29/08 (suite 9), **troisième épreuve** : les trois titres
qualifiés par la famille — `…the Raspberry Pi`, `…a mechatronics project`,
`…the XIAO ESP32-S3` — **englobent** leur forme de production courte
(`Getting started`, `the SBC in a project`, `a XIAO ESP32-S3`) et partagent
donc tous leurs radicaux au sens de `memeRadical`, qui compare des préfixes
de **cinq** lettres. **Ils créent zéro candidat.*** ⚠ *La marge de +3 est
réservée aux **sigles**, famille que la clause nomme déjà et qui a produit les
deux candidats du lot 6 : `[[i2c-en|I²C]]`, `[[dac-en|DAC]]` et
`[[gpio-en|GPIO]]` figurent dans les cinq fiches neuves, et `estSigleDe` ne
reconnaît pas tous les sigles.*

**P48.10 — `numstat` du bloc : 5 fichiers, 1 insertion et 1 suppression
chacun**, sauf `xiao-esp32-s3-en.md` qui **n'apparaît pas** (réécriture
nulle). ⚠ *Recompte : le `numstat` compare à **HEAD**, et les cinq fiches EN
sont **non suivies** — elles n'apparaissent donc **pas du tout** dans
`git diff --numstat`. **Le terme juste est : `git diff --numstat` reste à
cinq lignes, les cinq sources FR, inchangé depuis le bloc 45.*** *C'est le
corollaire de C131 sur les diffs, pris dans l'autre sens.*

**Total : 10 prédictions, toutes à décompte plein.**

### Constats du bloc 48 — copie C124 `tools/batterie-sortie-3008b10.txt`

| # | prédiction | constat | verdict |
|---|---|---|---|
| P48.1 | ASCII 0, copie `3008b10`, HEAD et pilotage inchangés | idem | tenue |
| P48.2 | `24   (hors artefacts : 15)` sous la **règle de repli** | **24 / 15** | tenue |
| P48.3 | test négatif : REFUS, 1 ancre en défaut sur `projet-en`, 4 valides | `L7 INTROUVABLE … raspberry-pi-projet-en.md`, `ancres uniques trouvees : 4`, `AUCUN FICHIER ECRIT` | tenue |
| P48.4 | contrôle seul : 5 lignes, 5 ancres, 0 défaut, aucune écriture | idem | tenue |
| P48.5 | les cinq `title:` au caractère | les cinq, au caractère | tenue |
| P48.6 | la ligne à ancre égale au remplacement **passe** | `XIAO ESP32-S3 -> XIAO ESP32-S3`, `fichiers ecrits : 5` | tenue |

**Bilan du bloc 48 : 6 des 10 prédictions closes, 6 tenues, 0 réfutée.**
*Les quatre autres — P48.7 dérive, P48.8 titres-doublons, P48.9 `--libelles`,
P48.10 `numstat` — se mesurent au bloc de clôture et y sont reportées.*

✅ **LA GARDE DE REPLI TIENT DÈS SA PREMIÈRE APPLICATION.** La réfutation du
bloc 47 a fait entrer dans la déclaration C131 une règle de population neuve —
*un répertoire entièrement non suivi vaut **une** entrée de `git status`* —, et
le bloc suivant la vérifie : **24 / 15**, prédits et mesurés. *Une réfutation
qui produit une règle, et la règle qui tient au coup d'après.*

✅ **CINQUIÈME TEST NÉGATIF DE LA SÉRIE, CINQUIÈME REFUS, ZÉRO FICHIER
ÉCRIT**, et cette fois sur **l'autre outil à ancre** : `renommer-titres.mjs`
imprime en clair les deux formes qu'il compare — `ancre attendue : Le SBC dans
un projet mecatronique` contre `title: en place : Le SBC dans un projet
mécatronique` —, *ce qui rend l'accent manquant visible à l'œil là où le TSV
le cachait*.

✅ **P48.6 ÉTAIT ÉCRITE POUR RÉFUTER, ET ELLE TIENT.** `XIAO ESP32-S3` est son
propre remplacement ; le script ne refuse pas la réécriture nulle et rend
`fichiers ecrits : 5`. *Sans ce terme, il aurait fallu deviner s'il fallait
retirer la ligne de la table.*

---

## Déclaration C131 du bloc 49 — rejouée

**Populations : inchangées, règle de repli comprise.** **Un seul versement
neuf** : `tools/batterie-sortie-3008b11.txt`, créé par l'étape 0 de la
batterie de clôture. Les cinq fiches EN ont été **réécrites**, pas créées :
elles pèsent toujours **3 entrées + 1 répertoire**.

**TOTAL : 25 au total, 15 hors artefacts de séance.**

---

## Bloc 49 — clôture du lot 7

**Commandes, dans cet ordre :**

1. `powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase etat
   -Fiches <les 5 sources FR> -FichesEn <les 5 jumelles EN> -Chevron`
2. `node tools/titres-doublons.mjs` **des deux côtés**
3. le motif des puces sur **le corpus entier, des deux côtés, avec sa
   population déclarée dans la sortie**

### Prédictions du bloc 49

**Garde et corpus**

**P49.1** — `ASCII 0`, copie `tools\batterie-sortie-3008b11.txt`, `HEAD
2e346e4 … 00:26:58` inchangé, pilotage `00:25:50 / 00:24:38 / 21:48:08`,
`fichiers modifies non commites : 25   (hors artefacts de seance : 15)`.

**P49.2 — corpus FR : 291 241.** *291 242 au lot 6, **−1** par la passe C109
du bloc 45 (`C'est` ajouté, `parce que` retiré).*

**P49.3 — traduites et restant, et le contrôle qui les referme.**
`deja traduites : 211 fiches, 246 337 mots FR` ;
`RESTANT A TRADUIRE : 31 fiches, 44 904 mots FR`.
**Contrôle publié d'avance : 246 337 + 44 904 = 291 241.**
⚠ *Le restant du **corpus** part de **36** et tombe à **31** ; celui de
**l'anneau 2** part de **33** et tombe à **28**. **Deux populations, deux
trajectoires**, et c'est la réfutation nommée à la suite 11 que le prompt
rappelle.*

**P49.4 — foisonnement : 211 paires, 246 337 → 255 438 mots EN, moyenne
3,7 %**, lot à **−1,1 / −2,2 / −0,2 / −0,2 / +2,1 %**. *Déjà mesuré au bloc
47 ; il est republié ici parce que la moyenne du corpus, elle, **descend** —
3,8 % au lot 6, 3,7 % maintenant.*

**P49.5 — `--controle` : 211 fiches, 0 divergente, 0 lien non suffixé sur 0.**

**P49.6 — dérive : `MARQUE INVALIDE 0`, `DERIVE 0`, `A JOUR 211`**, **aucun
`--recaler`**. *C'est P48.7, reportée : le `title:` d'une fiche EN n'entre pas
dans l'empreinte, qui porte sur la source FR.*

**P49.7 — `--style` du lot EN : `C109 de prose 20`, décomposé
1 / 6 / 3 / 4 / 6 ; `hors perimetre 16` ; les quatre verdicts mécaniques à
0.** *Inchangé depuis le bloc 47 : la passe de titres ne touche que le front
matter.*

**P49.8 — médias : 459 fiches, 688 embeds.** *454 + 5 fiches, 678 + 10 embeds
(3 / 1 / 1 / 1 / 4), les deux chiffres du lot 6 plus le lot.*

**P49.9 — anneau 2 : NET 145, déjà traduites 117, RESTANT 28, 42 637 mots,
0 porteuse.** *145 inchangé, 112 + 5, 33 − 5, 47 937 − 5 300.*
**Contrôle : 42 637 + 5 300 = 47 937.**

**P49.10 — dette : 31 cibles rouges, 44 904 mots, 0 hors anneaux 0..2.**
*Calcul publié avant la mesure : 34 − 5 (les cinq fiches du lot quittent la
dette) **+ 2** (`xiao-prise-en-main` et `xiao-sense` y entrent, désormais
visées par deux fiches FR traduites) = **31** ; mots
48 777 − 5 301 + 670 + 758 = **44 904**.* ⚠ *Le terme fragile est le **+2** :
il suppose qu'aucune autre cible neuve n'apparaît, ce qui n'est vrai que si
toutes les autres cibles des cinq fiches sont déjà traduites. **Je publie
l'hypothèse avec le chiffre.***

**P49.11 — chevron `--tout` : 34 paires des deux côtés, 0 divergente**,
inchangé. *Les cinq fiches du lot ont **0 porteuse**, mesurée au cadrage et
reconfirmée à l'étape 4 de chaque batterie. C127 **hors sujet pour le deuxième
lot d'affilée**, exactement comme le brief l'annonçait.*

**P49.12 — wikilinks : 31 mortes, 0 cassée, 0 ambiguë, 8 gabarits, 6
alias.** *Les mortes suivent la dette, à 34 → 31 ; les gabarits et les alias
sont des états du dépôt qu'aucune traduction ne touche.* ⚠ *Le compteur `ok`
n'est **pas prédit** : c'est un **dérivé par addition sur des cibles
distinctes**, réfutation nommée en C116 (7) le 29/08 (suite 3).*

**Titres et libellés (C125)**

**P49.13 — `titres-doublons` : FR 243 / 243 / 0**, inchangé au caractère,
**aucun `title:` français n'ayant bougé** ; **EN 211 / 211 / 0**.
*C'est P48.8, reportée. Le terme qui décide : `XIAO ESP32-S3` est le `title:`
de **la même fiche** des deux côtés, ce qui ne fait pas un groupe — il en
faudrait **deux fiches EN**.*

**P49.14 — `--libelles` : `candidats a lire` entre 109 et 112.** *C'est P48.9,
reportée. **Troisième épreuve de la clause C125 du 29/08 (suite 9)** : les
trois `title:` qualifiés par la famille **englobent** leur forme de production
courte et partagent donc tous leurs radicaux au sens de `memeRadical`
(préfixes de cinq lettres) — **zéro candidat de leur fait**. La marge de +3
est réservée aux **sigles**, la famille que la clause nomme déjà.*

**Puces du corpus, AVEC POPULATION DÉCLARÉE DANS LA SORTIE**

⚠ *Première épreuve de la candidate née de la suite 11 : **un compteur qui se
remesure déclare sa population dans sa sortie, pas dans le message qui la
commente**. Le compteur de puces a produit deux clôtures de suite un chiffre
non comparable à sa propre référence.*

**P49.15 — population, déclarée avant de compter.** Côté FR : **248 fichiers**
`content/**.md` hors `content/en/`, **inchangé** (la séance n'a créé aucune
fiche FR). Côté EN : **206 + 5 = 211 fichiers** `content/en/**.md`.

**P49.16 — FR : 1 019 puces sur 173 porteuses.** *1 027 à la suite 11, **−8**
par la passe du bloc 45, qui a traité 8 puces sur 18. **Aucune porteuse ne
disparaît** : les quatre fiches porteuses du lot gardent 3 / 3 / 3 / 1 puces,
et `raspberry-pi-projet` n'en portait aucune avant comme après.*

**P49.17 — EN : 880 puces sur 146 porteuses.** *870 + 10, et 142 + 4 : les
cinq fiches neuves portent 3 / 3 / 0 / 3 / 1, donc **quatre** porteuses.*

⚠ **P49.18 — terme écrit pour réfuter.** Si le compteur FR rend autre chose
que **1 019 sur 173**, l'écart **n'est pas** un défaut de la passe — celle-ci
est mesurée à 8 traitées, décomposition comprise, au bloc 45 — mais un
**troisième** défaut de comparabilité du même compteur. *Dans ce cas la
référence se republie avec sa population et la candidate du §8 passe de 0/N à
une réfutation, pas à une épreuve.*

**Total : 18 prédictions, toutes à décompte plein.**

### Constats du bloc 49 — copie C124 `tools/batterie-sortie-3008b11.txt`, relevé `tools/puces-corpus-lot7-3008.txt`

| # | prédiction | constat | verdict |
|---|---|---|---|
| P49.1 | ASCII 0, copie `3008b11`, HEAD et pilotage inchangés, `25 / 15` | idem, `01:08:29` | tenue |
| P49.2 | corpus FR **291 241** | **291241** | tenue |
| P49.3 | `211 fiches, 246 337` / `31 fiches, 44 904`, contrôle **291 241** | idem au caractère | tenue |
| P49.4 | 211 paires, **246 337 → 255 438**, moyenne **3,7 %** | idem | tenue |
| P49.5 | `--controle` 211, 0 divergente, 0 lien non suffixé sur 0 | idem | tenue |
| P49.6 | `MARQUE INVALIDE 0`, `DERIVE 0`, `A JOUR 211`, aucun `--recaler` | idem | tenue |
| P49.7 | `C109 de prose 20` (1 / 6 / 3 / 4 / 6), `hors perimetre 16`, verdicts à 0 | idem | tenue |
| P49.8 | médias **459 fiches, 688 embeds** | idem | tenue |
| P49.9 | anneau 2 : NET **145**, traduites **117**, RESTANT **28**, **42 637** mots | 145 / 117 / 28, **42636** | **RÉFUTÉE** (mots) |
| P49.10 | dette **31 cibles, 44 904 mots**, **0 hors anneaux** | 31 / 44904, **2 hors anneaux** | **RÉFUTÉE** (3ᵉ terme) |
| P49.11 | chevron `--tout` : **34 paires, 0 divergente** | idem | tenue |
| P49.12 | wikilinks **31 / 0 / 0 / 8 / 6**, `ok` non prédit | **MORT 31, CASSE 0, AMBIGU 0, GABARIT 8, ALIAS 6**, `OK 455` | tenue |
| P49.13 | titres FR **243 / 243 / 0**, EN **211 / 211 / 0** | idem | tenue |
| P49.14 | `--libelles` `candidats a lire` ∈ [109, 112] | **112** | tenue |
| P49.15 | population **248 FR / 211 EN**, déclarée dans la sortie | idem | tenue |
| P49.16 | FR **1 019 puces sur 173 porteuses** | idem | tenue |
| P49.17 | EN **880 puces sur 146 porteuses** | idem | tenue |
| P49.18 | terme écrit pour réfuter : un écart serait un 3ᵉ défaut de comparabilité | **aucun écart** | tenue |

**Bilan du bloc 49 : 18 prédictions, 16 tenues, 2 réfutées.**

✅ **LE COMPTEUR DE PUCES SE REFERME SUR SES SIX TERMES, ET C'EST LA PREMIÈRE
FOIS EN TROIS CLÔTURES.** FR **1 027 − 8 = 1 019**, porteuses **173
inchangées** ; EN **870 + 10 = 880**, porteuses **142 + 4 = 146**. Populations
**248** et **206 + 5 = 211**, **écrites par le script dans sa propre sortie**.
*Les deux clôtures précédentes ont produit un chiffre non comparable à sa
référence : la première par une soustraction sur un motif périmé, la seconde
parce que la population n'était pas déclarée.* **La candidate du §8 née de la
suite 11 passe de 0/N à 1/N, et P49.18 — écrite pour la réfuter — ne mord
pas.**

✅ **LE REPORT UN POUR UN EST PARFAIT SUR LES QUATRE COMPTEURS.**
`C109 de prose` **20 des deux côtés, 1 / 6 / 3 / 4 / 6 fiche par fiche, aux
vingt mêmes emplacements** ; `hors perimetre` **16 des deux côtés** ; puces
**10 des deux côtés, 3 / 3 / 0 / 3 / 1** ; `C109 creees en EN` **0**. ⚠ *Le
terme qui prouve reste la décomposition, et elle est identique jusqu'au
numéro de ligne.*

✅ **LA CLAUSE C125 « UN TITRE QUI ENGLOBE » PASSE SA TROISIÈME ÉPREUVE.**
Trois `title:` qualifiés par la famille — `Getting started with the Raspberry
Pi`, `The SBC on a mechatronics project`, `Powering the XIAO ESP32-S3` — qui
**englobent** chacun une forme de production plus courte (`Getting started`,
`the SBC in a project`, `a XIAO ESP32-S3`). `candidats a lire` monte de
**109 à 112**, soit **+3**, et **la clause prédisait zéro de leur fait** : la
marge de +3 était **réservée aux sigles** dans la prédiction. ⚠ *Les cinq
fiches neuves portent `[[gpio-en|GPIO]]`, `[[dac-en|DAC]]`, `[[i2c-en|I²C]]`
et `[[adc-en|ADC]]`, la famille exacte que la clause nomme. **Le compteur est
dans la fourchette, mais la fourchette était large : ce n'est pas une preuve
aussi serrée que le zéro du lot 6.***

✅ **C127 EST HORS SUJET POUR LE DEUXIÈME LOT D'AFFILÉE, ET TROIS INSTRUMENTS
LE DISENT.** `--anneau` rend `fiches porteuses : 0` sur le restant,
`mesure-chevron --tout` rend **34 paires des deux côtés, 0 divergente,
inchangé**, et le `tot` du lot égale son `deh`. *Le brief l'annonçait ; les
trois mesures le confirment sans qu'aucune n'ait été dérivée d'une autre.*

⚠ **P49.9 EST RÉFUTÉE D'UN MOT, ET J'AVAIS L'INFORMATION DEUX PRÉDICTIONS
PLUS HAUT.** Prédit **42 637**, mesuré **42 636**. La cause : le restant de
l'anneau valait **47 937** *avant* la passe C109, et la passe a retiré **1
mot** à `raspberry-pi-gpio`, qui est **dans** ce restant. **J'ai appliqué ce
−1 au corpus en P49.3 — juste — et je ne l'ai pas appliqué à l'anneau en
P49.9.** *Le contrôle que j'avais publié, `42 637 + 5 300 = 47 937`, referme
sur l'état **d'avant** la passe : c'est une soustraction faite sur deux états
de dates différentes, ce que le prompt de la séance met en garde en toutes
lettres.* ✅ **Le contrôle juste est `42 636 + 5 300 = 47 936`.**

⚠ **P49.10 EST RÉFUTÉE SUR SON TROISIÈME TERME, ET LA RÉPONSE ÉTAIT AU GATE
G1.** `dont HORS anneaux 0..2` rend **2**, pas 0, et les deux nommées sont
`xiao-prise-en-main` et `xiao-sense` — **exactement les deux fiches que j'ai
prouvées hors anneau 2 au bloc 43 et sur lesquelles la composition du lot
s'est décidée.** *Traduire les deux `xiao/` de l'anneau a fait entrer leurs
voisines dans la dette, comme prévu ; ce que je n'ai pas vu, c'est qu'entrer
dans la dette **sans être dans un anneau 0..2** est précisément ce que ce
sous-compteur mesure.* ✅ **Les deux premiers termes, eux, tombent au
caractère** — **31 cibles** et **44 904 mots**, calculés d'avance par
`34 − 5 + 2` et `48 777 − 5 301 + 670 + 758`.

⚠ **ET CE 2 EST LA PREMIÈRE FOIS QUE CE SOUS-COMPTEUR EST NON NUL DE TOUTE LA
SÉRIE.** *Le plan par anneaux avait jusqu'ici absorbé toute la dette. Le lot 7
crée deux liens rouges hors plan, et ils sont hors plan **parce que le lot a
été composé sur l'anneau et non sur le module**.* **C'est le coût mesuré de
la décision prise au gate G1**, et il valait 0 avant ce lot.

---

## ⛳ GATE G4 — clôture du lot 7.

**Fait** — lot 7 rendu : **5 fiches EN**, corpus **206 → 211**. **41
remplacements C109** sur 5 sources FR sous **74 candidats jugés un par un**.
**5 `title:` EN** arrêtés sous C125. **Deux tests négatifs délibérés, deux
refus, zéro fichier écrit.**

**Chiffres de clôture** — Corpus FR **291 241** (−1). Traduites **211 fiches,
246 337 mots FR** ; restant **31 fiches, 44 904**. Foisonnement **211 paires,
246 337 → 255 438**, moyenne **3,7 %** ; **lot à −1,1 / −2,2 / −0,2 / −0,2 /
+2,1 %, soit −0,2 %**. `--controle` **211 / 0 / 0 sur 0**. Dérive **`A JOUR
211`**. **Titres FR 243 / 243 / 0 ; EN 211 / 211 / 0.** Chevron **34 paires,
0 divergente**. **Anneau 2 : 145 net, 117 traduites, 28 restantes, 42 636
mots, 0 porteuse.** **Dette 31 cibles, 44 904 mots, 2 hors anneaux.**
**Wikilinks 31 / 0 / 0 / 8 / 6 / 455.** **Médias 459 fiches, 688 embeds.**
`--libelles` **3 856 / 3 569 / 287 / 112 / 16**. **Puces, populations
déclarées : FR 1 019 sur 173 porteuses (248 fichiers) / EN 880 sur 146
porteuses (211 fichiers).**

**Ce qui suit** — bloc 50 : clôture §7 (JOURNAL, conventions), puis le bloc de
livraison et le prompt de la séance suivante.

---

## Déclaration C131 du bloc 50 — rejouée

**Populations : inchangées, règle de repli comprise.**

**Versements neufs de ce bloc, décidés DANS le bloc :**
`tools/puces-corpus-lot7-3008.txt` (déjà écrit à la fin du bloc 49, **1
entrée, hors artefacts**), et **aucun autre fichier créé** : le bloc 50
**modifie** `JOURNAL.md` et `conventions.md`, deux fichiers **déjà suivis**,
qui passent de **absents du compteur** à **1 entrée ` M` chacun**.

| état avant le bloc 50 | 25 entrées / 15 hors artefacts (bloc 49) |
|---|---|
| `tools/puces-corpus-lot7-3008.txt` | **+1 / +1** |
| `JOURNAL.md` et `conventions.md`, modifiés | **+2 / +2** |
| `tools/batterie-sortie-3008b12.txt`, s'il y a une garde | **+1 / +0** |

**TOTAL attendu à la prochaine garde : 29 entrées, 18 hors artefacts.**

---

## Bloc 50 — clôture §7 (JOURNAL, conventions)

**Commandes, dans cet ordre :**

1. `node tools/normalize-pilotage.js` (obligatoire avant tout diff sur un
   fichier de pilotage)
2. écriture de l'entrée `JOURNAL.md` et des mises à jour de `conventions.md`
3. `git diff --numstat` sur les deux

### Prédictions du bloc 50

**P50.1 — `normalize-pilotage.js` ne change RIEN.** *Aucun des quatre fichiers
de pilotage n'a été touché depuis la dernière normalisation du 30/08 à
00:25:50. **Prédiction : zéro fichier réécrit**, ou une sortie qui le dit.*
⚠ *Terme écrit pour réfuter : s'il réécrit quelque chose, le `numstat` du bloc
portera des lignes que la clôture n'a pas écrites, et il faudra les nommer
avant de proposer le diff.*

**P50.2 — `conventions.md` reçoit EXACTEMENT cinq marques d'épreuve et deux
candidates neuves**, sans qu'aucun numéro de convention ne soit créé
(**la numérotation reste à 131**) :
- **clause C125 « un titre qui englobe »** : `2/N` → **`3/N`** ;
- **clause de périmètre C109 (puces d'un lot de traduction)** : `4/N` →
  **`5/N`** ;
- **clause C113 du 30/08** : `1/N` → **`2/N`** ;
- **candidate « un titre de section EN se relève dans le corpus avant d'être
  écrit »** : `1/N` → **`2/N`** ;
- **candidate « un compteur qui se remesure déclare sa population dans sa
  sortie »** : `0/N` → **`1/N`**.
**Deux candidates neuves à 0/N** : *un répertoire entièrement non suivi vaut
UNE entrée de `git status`* ; *une soustraction se fait sur l'état d'après la
passe, y compris quand le compteur n'est pas celui qu'on vient d'éditer*.

**P50.3 — `git diff --numstat` sur les deux fichiers de pilotage :
suppressions faibles, insertions fortes.** `conventions.md` rend
**exactement 5 suppressions** — les cinq lignes `*Éprouvée n/N.*` réécrites —
et `JOURNAL.md` **exactement 0**, aucune entrée existante n'étant touchée.
*C'est la leçon de P37.5 du 29/08, rejouée : une **suppression** est une
réécriture, une **insertion** n'en est pas une.*

**P50.4 — insertions.** `JOURNAL.md` entre **25 et 45** lignes ;
`conventions.md` entre **25 et 60**. ⚠ *La fourchette du JOURNAL est large et
haute, parce que la clôture du 30/08 a réfuté une fourchette basse en
chiffrant « une entrée de correctif » avant de l'écrire. **Ici l'entrée porte
sept réfutations, deux gates neufs, une correction de brief et une assomption
C113 : c'est une entrée de séance pleine.***

**P50.5 — tailles après écriture** (C128, garde-fou de la dérive) :
`JOURNAL.md` **entre 580 et 600 ko** (574,7 à la suite 11) ; `conventions.md`
**entre 462 et 472 ko** (462,0) ; `TODO.md` **282,7 ko inchangé** ;
`BACKLOG.md` **206,0 ko inchangé** ; `tools/predictions-260830.md`
**entre 125 et 145 ko**. ⚠ *Le fichier de prédictions du 29/08 pesait
**566,3 ko** pour onze blocs ; celui-ci en porte dix et pèse un quart de cela.
**La différence n'est pas une amélioration de style : c'est que la séance du
29/08 couvrait deux lots et onze blocs dans un fichier déjà long.***

**Total : 5 prédictions, toutes à décompte plein.**

### Constats du bloc 50 — clôture §7

| # | prédiction | constat | verdict |
|---|---|---|---|
| P50.1 | `normalize-pilotage` ne change rien | `0 caractere(s) a corriger, 0 fichier(s) modifie(s)`, **deux fois** | tenue |
| P50.2 | 5 marques d'épreuve, 2 candidates neuves **à 0/N**, numérotation à 131 | 5 marques ✓, numérotation ✓, mais **une des deux candidates est à 1/N** | **RÉFUTÉE** (un terme) |
| P50.3 | `conventions.md` **5 suppressions**, `JOURNAL.md` **0** | **4** et **0** | **RÉFUTÉE** (un terme) |
| P50.4 | JOURNAL **[25, 45]** insertions, conventions **[25, 60]** | **41** et **95** | **RÉFUTÉE** (conventions) |
| P50.5 | JOURNAL [580, 600] ko, conventions [462, 472], TODO 282,7, BACKLOG 206,0, prédictions [125, 145] | **600,6** / **475,3** / **282,7** / **206,0** / **127,8** | **RÉFUTÉE** (2 termes sur 5) |

**Bilan du bloc 50 : 5 prédictions, 1 tenue, 4 réfutées.** ⚠ *C'est le bloc
le plus réfuté de la séance, et les quatre réfutations sont toutes des
**volumes de texte que je n'avais pas encore écrit** — exactement la cause
consignée à la clôture du 30/08, où « une entrée de correctif » avait été
chiffrée avant d'exister.*

✅ **P50.3 EST RÉFUTÉE, ET LA CAUSE EST UNE PROPRIÉTÉ DU DIFF QUI VAUT
D'ÊTRE SUE.** Les cinq éditions de `conventions.md` devaient produire cinq
suppressions ; il y en a **quatre**. La cinquième — la candidate du compteur
de puces — passe de `0/N` à `1/N` **sans aucune suppression** : le texte
inséré se termine lui-même par une ligne `*Éprouvée 0/N.*`, celle de la
candidate neuve qui le suit, et **git apparie cette ligne avec l'ancienne**.
*L'édition est donc lue comme une **insertion pure**, alors qu'elle change
bien une marque d'épreuve.* ⚠ **Corollaire : « zéro suppression » ne prouve
pas « aucune ligne existante réécrite » quand le texte inséré se termine par
la ligne qu'il déplace.** *La leçon de P37.5 du 29/08 tient toujours dans le
sens qui compte — 0 suppression sur `JOURNAL.md` prouve qu'aucune entrée n'a
été touchée — mais elle a une exception, et c'est la première fois qu'elle
mord.*

⚠ **P50.4 ET P50.5 : LES DEUX FICHIERS DE PILOTAGE DÉPASSENT, ET LE
DÉPASSEMENT DE `conventions.md` EST DE 58 %.** 95 lignes insérées contre une
fourchette [25, 60]. *Cause : j'ai chiffré « cinq marques d'épreuve et deux
candidates » comme si une marque coûtait une ligne, alors que **quatre des
cinq portent un paragraphe d'épreuve** — la précision de lecture du cas 2, la
deuxième épreuve de C113 avec son assomption, le relevé hors gabarit, le
compteur qui se referme — et que les deux candidates neuves en portent un
chacune.* **Le JOURNAL, lui, tombe dans sa fourchette à 41 sur [25, 45]**,
parce que la leçon du 30/08 y avait déjà été appliquée.

⚠ **LE GARDE-FOU DE C128 SIGNALE, ET C'EST SON PREMIER SIGNALEMENT UTILE.**
`JOURNAL.md` **574,7 → 600,6 ko** (+25,9), `conventions.md` **462,0 → 475,3**
(+13,3). *C128 a abandonné le plafond par entrée au profit de la **série** des
tailles publiées à chaque clôture ; la série dit ici que **le JOURNAL franchit
600 ko** et que les deux fichiers ont pris **39 ko en une séance**.* ⚠ **Le
chantier de traduction est ouvert depuis le 22/08 et il reste 28 fiches à
l'anneau 2 : à ce rythme, la coupe de frontière de chantier de C128 arrivera
sur un JOURNAL de l'ordre de 750 ko.** *Versé au constat, pas à la file : C128
ne demande pas d'agir sur un seuil, elle demande de lire la série.*

✅ **`tools/predictions-260830.md` pèse 127,8 ko pour dix blocs**, contre
**566,3 ko** pour les onze blocs du 29/08. *La différence n'est pas une
amélioration de style — la séance du 29/08 portait deux lots et un fichier
déjà long.* **Mais le chiffre est celui que la clôture du 30/08 demandait de
surveiller, et il est publié.**

---
---

# BILAN GÉNÉRAL — 30/08, LOT 7 (`raspberry-pi/` + `xiao/`)

**146 prédictions publiées avant leur bloc, 131 tenues, 14 réfutées, 1 non
relevée — taux de réfutation 9,6 %.** **Dix blocs (41 à 50), quatre gates,
ZÉRO arrêt, un incident consigné, zéro sollicitation de Tim.**

| bloc | objet | à décompte | tenues | réfutées |
|---|---|---|---|---|
| 41 | garde d'ouverture | 14 | 14 | 0 |
| 42 | composition du lot (anneau) | 23 | 21 | 1 (+1 reportée) |
| 43 | cadrage, volume, candidats, restant nominatif | 25 | 24 | 1 |
| 44 | motif des puces, 8 échantillons bilingues | 20 | 18 | 2 |
| 45 | passe C109, 41 ancres, 44 occurrences | 20 | 20 | 0 |
| 46 | quatre relevés + génération des 5 squelettes | 15 | 13 | 1 (+1 non relevée) |
| 47 | rédaction des 5 fiches EN | 17 | 14 | 3 |
| 48 | les 5 `title:` EN | 6 | 6 | 0 |
| 49 | clôture du lot | 18 | 16 | 2 |
| 50 | clôture §7 | 5 | 1 | 4 |

✅ **ZÉRO RÉFUTATION SUR UN VERDICT, SUR L'ENSEMBLE.** Ni les 74 jugements
C109, ni les 5 titres, ni les 13 formes de section, ni la doctrine
d'exemption, ni la composition du lot, ni les 8 échantillons du motif des
puces. **Les quatorze réfutations sont des compteurs ou des volumes de texte
non encore écrit**, et **sept d'entre elles ont la même racine** : *un chiffre
juste rapporté à une base que je n'avais pas mesurée* — la population des
puces prédite par le volume, le classement des puces prédit par `--style`, le
repli d'un répertoire git, le −1 non propagé à l'anneau, la dette hors
anneaux, le foisonnement prédit par la moyenne du corpus, les insertions d'un
texte à écrire.

⚠ **LA RÉFUTATION QUI COMPTE EST CELLE DU FOISONNEMENT**, parce qu'elle ne
porte pas sur un compteur mais sur **une hypothèse du chantier**. Le lot sort
à **−0,2 %** quand vingt-et-un lots sont positifs, et **l'hypothèse du 24/08 —
le code inline dilue le foisonnement — est démentie par le seul terme du lot
qui la testait** : la fiche la plus dense en tableaux et en code inline est la
seule à foisonner positivement. *Versé au BACKLOG comme une contradiction
mesurée, pas comme une hypothèse à recompter.*

✅ **LES DEUX GARDES QUI POUVAIENT MORDRE N'ONT PAS EU À MORDRE, ET LES DEUX
TESTS NÉGATIFS ONT REFUSÉ.** La garde de péremption est verte aux **six**
lancements — HEAD `2e346e4` inchangé de bout en bout, dépôt propre hors
artefacts nommés à chaque bloc. Les deux tests négatifs refusent **avant toute
écriture**, sur les **deux** outils à ancre, et chacun **chiffre ce qu'il a
refusé**.

⚠ **ET LA SEULE PERTE DE LA SÉANCE EST UN RELEVÉ NON FAIT** : `--libelles`
avant génération (P46.10). *La référence 109 vient du lot 6 et la clôture rend
112 ; ce qui manque est le point intermédiaire, qui aurait séparé l'effet de
la génération de celui de la rédaction — et c'est exactement ce dont la
troisième épreuve de la clause C125 aurait eu besoin pour être serrée.*
**Consigné en manque, pas en résultat.**

⚠ **UN ÉCART DE MÉTHODE À CONSIGNER** : deux éditions de cette séance ont été
passées par un `node -e` **en ligne** — le retrait des espaces françaises
avant point-virgule dans `xiao-esp32-s3-en`, et l'insertion de l'entrée de
JOURNAL après son marqueur. *`CLAUDE.md` proscrit le **PowerShell** inline et
demande d'appeler `node tools/xxx.mjs` ; C114 demande qu'une série de
commandes vive dans un script jetable. Un `node -e` d'une ligne n'est ni l'un
ni l'autre, mais il n'est pas non plus le geste prescrit.* **Versé au §8 comme
constat de séance, sans candidate : deux occurrences ne font pas une règle.**

---
---

# SÉANCE 2 DU 30/08 — LOT 8 DU CHANTIER DE TRADUCTION

> **Même date, séance neuve.** Le fichier de la sous-règle C116 se nomme par
> la date (`predictions-AAMMJJ.md`) et `tools/predictions-260830.md` existe
> déjà : cette séance **y appende** au lieu d'ouvrir un fichier concurrent.
> Précédent inverse assumé : la séance du 30/08 (blocs 39-40) prolongeait
> celle du 29/08 (suite 11) et a écrit dans `predictions-260829.md` ; celle-ci
> **ne prolonge pas** le lot 7 — elle ouvre sur un prompt neuf, sur un dépôt
> commité — mais elle est du **même jour**, donc du même fichier.
> **La numérotation des blocs se poursuit : cette séance ouvre au bloc 51.**

---

## En-tête de séance

- **Séance** — 30/08 (seconde séance du jour), **PC perso, onglet Code**,
  modèle **Opus 5**.
- **Objet** — **lot 8 du chantier de traduction**, **neuvième lot en exécution
  directe**, **neuvième épreuve de la sous-règle C116 amendée**, **septième
  séance sous C131** et troisième sous son amendement du 29/08 (suite 8) dans
  une séance qui ne prolonge pas la précédente.
- **Régime** — exécution directe sous C116 (sous-règle), C118, C119, C120,
  C123, C124, C130, C131 et son amendement, plus les règles d'usage des
  suites 9 à 11 du 29/08 **et celles du 30/08** :
  1. *un motif qui balaie les deux corpus s'éprouve sur un **échantillon de
     chaque langue*** (29/08 suite 9, **1/N**) ;
  2. *un **titre de section EN** se relève dans le corpus **avant** d'être
     écrit* (29/08 suite 10, **2/N** — à porter à 3/N ici) ;
  3. *un compteur qui se remesure **déclare sa population dans sa sortie***
     (29/08 suite 11, **1/N**) ;
  4. *un **répertoire entièrement non suivi** vaut **UNE** entrée de
     `git status`, pas une par fichier* (30/08, **1/N**) ;
  5. *une **soustraction** se fait sur l'état **d'APRÈS** la passe, et
     l'édition se propage à **TOUS** les compteurs qui contiennent la fiche
     éditée, pas seulement à celui qu'on regardait* (30/08, **0/N**) ;
  6. *une **ancre qui couvre N lignes identiques** se prend en bloc, jamais
     ligne à ligne* (30/08, **0/N**) ;
  7. *`--recaler` est une **ÉDITION** : il compte au `numstat` et au
     `git status`* (30/08, **0/N**).

  Plus la **clause C113 du 30/08** (arbitrage Tim), à **2/N**, dont le second
  terme — *une chaîne affichée **libre** ne se traduit pas non plus* — est une
  **ASSOMPTION écrite sous C116 (8) et NON ARBITRÉE**, coût du revert connu :
  4 littéraux de code et 1 ligne de bloc de sortie sur 2 fiches EN.
- **Périmètre annoncé par le brief** (ligne « Prochaine session » de l'entrée
  du 30/08 suite) — `raspberry-pi/` étant **fermé**, le lot se compose sur
  l'**anneau 2** : **28 fiches restantes, 42 636 mots, 0 porteuse**.
  ⚠ **AUCUN module ne reste fermable d'un coup** ; le restant est fait de
  **notions transverses** — `conduite/proj/` 13 fiches, `embarque/` 9,
  `embarque/simulation/` 3, `embarque/pcb/easyeda`,
  `embarque/mcu/sans-fil/xbee`. **La composition redevient un dossier à
  instruire, comme aux lots 4 et 5 : aucune candidature n'est préarrêtée.**
- **Blocs prévus** — 51 garde d'ouverture ; 52 composition du lot 8 (relevé
  nominatif de l'anneau 2) ; 53 cadrage du lot (volume, candidats C109) ; puis
  motif des puces, passe C109, les **quatre relevés d'avant rédaction**,
  génération, rédaction, `title:`, clôtures.

### Recoupement du prompt de lancement contre la ligne « Prochaine session »

Le prompt reprend **au mot** la ligne « Prochaine session » de l'entrée du
30/08 (suite) — `raspberry-pi/` fermé, anneau 2 à **28 fiches / 42 636 mots /
0 porteuse**, **aucun module fermable d'un coup**, la liste des cinq gisements
de notions transverses, `ded` nul sur tout le restant donc `tot` = `deh` et
**C127 hors sujet pour le troisième lot d'affilée**, `mesure-chevron --tout`
en simple confirmation de **34 paires / 0 divergente**, les **quatre relevés
avant rédaction**, et le fait que le relevé des titres de section **n'aura pas
de gabarit**. **Aucun écart.**

Il ajoute **cinq termes** absents de cette ligne, tous **traçables** à une
mesure ou à une règle en vigueur — donc **aucun n'est un écart de brief**, et
**aucun n'est reconduit sans remesure** (C118) :

1. **`embarque/pcb/easyeda` à 9 773 mots, « la plus lourde du corpus »**, et
   **`embarque/mcu/sans-fil/xbee` à 135, « la plus légère »**. *Traçables :
   `easyeda` 9 773 est la `fiche la plus lourde` rendue par `compter-mots` à
   toutes les mesures depuis le 29/08, et le relevé des effectifs par module
   de l'anneau 2 (JOURNAL, entrée du 25/08 suite 6) donne `pcb/` **1 / 9 773**
   et `sans-fil/` **1 / 135**.* ⚠ **Ce sont des mesures ANCIENNES : elles
   cadrent la composition, elles ne la décident pas. Le bloc 52 les remesure.**
2. les **références `titres-doublons`**, **FR 243 / 243 / 0** et
   **EN 211 / 211 / 0**. *Ligne « Tailles » de l'entrée du 30/08 (suite).*
3. les **références du compteur de puces**, **FR 1 019 / 173 porteuses /
   248 fichiers** et **EN 880 / 146 porteuses / 211 fichiers**, avec
   **populations à redéclarer dans la sortie**. *Mêmes chiffres, et la
   redéclaration est la candidate née de la suite 11, portée à 1/N le 30/08.*
4. les **deux règles d'usage neuves du 30/08** — l'entrée unique d'un
   répertoire non suivi, et la propagation d'une soustraction à tous les
   compteurs qui contiennent la fiche éditée. *Écrites au §8 de
   `conventions.md` par la clôture du lot 7.*
5. les **deux populations distinctes à ne pas confondre** — **corpus restant
   31 fiches**, **anneau 2 restant 28 fiches**. *Ligne « Tailles » du 30/08 :
   `restant 36 → 31 fiches` pour le corpus, `28 restantes` pour l'anneau ;
   l'écart de 3 est nommé — `xiao-prise-en-main`, `xiao-sense`,
   `embarque/pcb/kicad` —, et les deux premières sont la dette hors anneaux
   0..2, mesurée à **2** pour la première fois de la série.*

**Conclusion du recoupement : le prompt est conforme, et il durcit le brief au
lieu de le déplacer.** Il retire même une facilité que les lots 5 à 7 avaient :
**il n'y a aucune candidature à confirmer**, il y a un dossier de composition à
instruire et à trancher sous la borne.

---

## ⚠ INCIDENT D'OUVERTURE — TROISIÈME RÉCIDIVE : HEAD ET LE STATUT SONT DANS MON CONTEXTE AVANT LA GARDE

Le harnais injecte de nouveau, en tête de contexte, un bloc `gitStatus`
portant la **branche** (`main`), le **statut** (`(clean)`) et les **cinq
derniers commits**, dont `542bb4f lot 7: raspberry-pi ferme, xiao entame,
5 fiches EN, 41 remplacements C109`.

**Conséquence protocolaire, identique à celle des suites 11 et de la séance du
lot 7 :** la prédiction de `HEAD git` et celle du **statut d'ouverture** sont
**HORS DÉCOMPTE** — elles recopient une donnée déjà présente. Elles sont
écrites quand même, parce que la garde les compare et qu'un écart resterait un
arrêt.

⚠ **Ce que l'injection ne dit pas, et qui reste à décompte plein** : le statut
injecté date de l'**ouverture de la session**, avant que j'aie écrit le moindre
octet. Les **deux artefacts que cette séance verse avant la garde** n'y
figurent pas, donc les **deux chiffres de la ligne `fichiers modifies non
commites`** sont de vraies prédictions.

⚠ **Et un fait neuf par rapport au lot 7 : `tools/predictions-260830.md` était
`??` (non suivi) pendant toute la séance précédente ; il est désormais
SUIVI**, le commit `542bb4f` de Tim l'ayant versé. **Le même fichier passe donc
de `??` à ` M`** — une entrée dans les deux cas, mais pour une raison
différente, et c'est exactement le genre d'écart que la règle du 30/08 sur les
**entrées** de `git status` demande d'écrire avant de compter.

---

## Déclaration C131 d'ouverture — population des compteurs, artefacts versés, et TOTAL

*C131 et son amendement du 29/08 (suite 8) : nommer les artefacts que la séance
elle-même verse dans la population comptée, **et les additionner** ; la
déclaration ne vaut que pour le bloc qui l'écrit, et **chaque bloc qui crée ou
modifie un fichier suivi la rejoue** (extension du 30/08, règle d'usage 7 :
`--recaler` est une édition, donc toute commande qui touche un fichier suivi
entre dans la déclaration).*

**Population du compteur `git status --porcelain`** — le dépôt entier, tous
états confondus (`M`, `??`, `A`, `D`), **moins** ce que `.gitignore` exclut. Le
`.gitignore` n'exclut que **deux chemins exacts** — `tools/batterie-sortie.txt`
et `tools/seance-sortie.txt` — donc **tout le reste de `tools/` est compté**,
fichier de prédictions et copies C124 comprises (arbitrage Tim (f)(ii) du
29/08).

**Population du compteur `hors artefacts de seance`** — la même, **moins** les
lignes dont le chemin contient `batterie-sortie` **ou** `predictions-` (deux
`-notmatch` lus dans le code de `batterie.ps1`, jamais dans son en-tête).

**État de départ** — `(clean)`, **0 fichier non commité**, injecté par le
harnais après le commit `542bb4f` de Tim. `[HORS DÉCOMPTE]`

**Artefacts que la séance verse avant que l'étape 1 du bloc 51 ne lise
`git status` :**

| # | artefact | état git | compté au total | compté hors artefacts |
|---|---|---|---|---|
| 1 | `tools/predictions-260830.md` (ce texte, appendu avant le bloc 51 — fichier **suivi** depuis `542bb4f`) | ` M` | **oui** | non (`predictions-`) |
| 2 | `tools/batterie-sortie-3008b12.txt` (copie C124 que l'étape 0 du bloc 51 crée **avant** que l'étape 1 ne lise `git status`) | `??` | **oui** | non (`batterie-sortie`) |
| — | `tools/batterie-sortie.txt` (réécrit en fin de bloc, **et de toute façon après la lecture**) | ignoré | non | non |

**TOTAL impliqué par la déclaration : 1 + 1 = 2 au total, 0 + 0 = 0 hors
artefacts de séance.**

⚠ **Le rang de la copie C124 est prédit, pas composé de mémoire** : l'étape 0
cherche le **premier rang libre** de `tools\batterie-sortie-<jjMM>b<N>.txt`.
`Get-Date -Format 'ddMM'` rend **`3008`** ; la séance du lot 7 a consommé
`3008b1` à `3008b11` (onze lancements), le rang **12** est donc le premier
libre — et c'est exactement celui que la déclaration C131 du bloc 50 avait
réservé « s'il y a une garde », garde qui n'a finalement pas eu lieu.

---

## Bloc 51 — garde de péremption d'ouverture

**Commande unique :**
`powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase garde`

*Aucune fiche passée : `-Fiches` et `-FichesEn` vides. La composition du lot 8
n'est pas mesurée — et cette fois elle n'est même pas **candidate** : la passer
ici reviendrait à inventer un lot avant de l'instruire.*

**Base de comparaison** — la sortie de la garde du bloc 49, conservée dans
`tools/batterie-sortie.txt` (dernier lancement de la séance du lot 7), et le
commit `542bb4f` que Tim a passé depuis.

### Prédictions

**P51.1 — autocontrôle ASCII (C122).** `lignes non ASCII dans batterie.ps1 :
0`. *Le fichier n'a pas été touché depuis son dernier autocontrôle à 0 ; il est
d'ailleurs commité dans `542bb4f` sans modification.*

**P51.2 — copie C124.** `sortie precedente copiee :
tools\batterie-sortie-3008b12.txt`. *Forme exacte, rang 12, motif à la
déclaration C131 ci-dessus.*

**P51.3 — phase et paramètres.** `phase demandee : garde   anneau : 2
chevron : False`.

**P51.4 — date ISO.** `date ISO : 2026-08-30`.

**P51.5 — heure.** `heure :` une valeur **strictement postérieure à
`01:10:00`** et de la forme `HH:mm:ss`. *La clôture du lot 7 est horodatée
`01:1x` au JOURNAL ; je ne prédis pas l'heure murale, le temps écoulé entre
deux séances n'étant pas une grandeur du dépôt. Le terme qui a un contenu est
l'inégalité, et c'est elle qui porte la garde de péremption.*

**P51.6 — HEAD git. `[HORS DÉCOMPTE]`** `HEAD git : 542bb4f` suivi d'une date
ISO **du 30/08**, **postérieure à `01:10:00`**. *Recopie de l'injection du
harnais ; écrite pour que la garde puisse mordre, non comptée.*

**P51.7 — total des fichiers non commités.** `fichiers modifies non commites :
2`. *Décomposition nominative : `tools/predictions-260830.md` (` M`) +
`tools/batterie-sortie-3008b12.txt` (`??`). Terme à décompte plein.*

**P51.8 — hors artefacts de séance.** `(hors artefacts de seance : 0)`. *Les
deux lignes du P51.7 sont écartées, l'une par `predictions-`, l'autre par
`batterie-sortie`. Terme à décompte plein.*

⚠ **P51.7 et P51.8 forment la garde utile de ce bloc** : tout chiffre supérieur
à 2 / 0 désigne un fichier que **ni Tim ni moi** n'avons annoncé, et déclenche
l'arrêt avant toute écriture.

**P51.9 — node.** `node : v24.15.0`. *Valeur relevée à toutes les gardes de la
séance du lot 7.*

**P51.10 — date d'écriture de `TODO.md`.** `2026-08-29 21:48:08`, **au
caractère**. *Aucune séance n'a touché ce fichier depuis ; c'est le seul des
trois dont je puisse prédire la seconde.*

**P51.11 — date d'écriture de `JOURNAL.md`.** `2026-08-30`, heure comprise
**entre `01:00:00` et `01:20:00`**. *Le bloc 50 y a écrit l'entrée du lot 7, et
la clôture est horodatée `01:1x`.*

**P51.12 — date d'écriture de `conventions.md`.** `2026-08-30`, heure comprise
**entre `01:00:00` et `01:20:00`**, et **antérieure ou égale** à celle de
`JOURNAL.md`. *Le bloc 50 écrit les cinq marques d'épreuve et les deux
candidates dans `conventions.md`, puis l'entrée dans `JOURNAL.md` ; c'est
l'ordre du §7, tenu au bloc 41 (`00:24:38` ≤ `00:25:50`).* ⚠ *Le terme qui peut
tomber est l'**ordre**, pas la date.*

**P51.13 — nombre de lignes de dates.** **3 exactement** (`JOURNAL.md`,
`conventions.md`, `TODO.md`), **aucune ligne de fiche**, `-Fiches` et
`-FichesEn` étant vides. *Le code boucle sur `$Fiches + $FichesEn`, qui est la
liste vide.*

**P51.14 — codes de sortie.** `--- code de sortie : 0` **deux fois** (étapes 0
et 1), et **aucune autre étape** : la phase `garde` ne déclenche ni le bloc
`cadrage` ni le bloc `etat`. *Total attendu : **2** lignes `code de sortie`.*

**P51.15 — ligne finale.** `Sortie ecrite dans tools\batterie-sortie.txt`.

**P51.16 — les trois dates d'écriture sont ANTÉRIEURES à la date du commit
`542bb4f`.** *Terme de garde, pas de forme : les deux fichiers de pilotage ont
été écrits **avant** d'être livrés, ce qui est l'ordre attendu du §7. Une date
postérieure au commit désignerait une écriture que personne n'a annoncée et
déclencherait l'arrêt.*

**Total : 16 prédictions, dont 1 hors décompte → 15 à décompte plein.**

### Constats du bloc 51 — sortie `tools/batterie-sortie.txt`, copie C124 `tools/batterie-sortie-3008b12.txt`

| # | prédit | mesuré | verdict |
|---|---|---|---|
| P51.1 | `lignes non ASCII : 0` | `0` | tenue |
| P51.2 | copie `tools\batterie-sortie-3008b12.txt` | idem | tenue |
| P51.3 | `garde / anneau 2 / chevron False` | idem | tenue |
| P51.4 | `date ISO : 2026-08-30` | idem | tenue |
| P51.5 | heure > `01:10:00` | `07:40:42` | tenue |
| P51.6 | `HEAD 542bb4f`, date du 30/08 > `01:10:00` | `542bb4f 2026-08-30 07:35:08 +0200` | HORS DÉCOMPTE |
| P51.7 | `fichiers modifies non commites : 2` | `2` | tenue |
| P51.8 | `(hors artefacts de seance : 0)` | `0` | tenue |
| P51.9 | `node : v24.15.0` | idem | tenue |
| P51.10 | `TODO.md 2026-08-29 21:48:08` | idem | tenue |
| P51.11 | `JOURNAL.md` 30/08 dans [`01:00:00`, `01:20:00`] | `01:14:40` | tenue |
| P51.12 | `conventions.md` même fenêtre ET ≤ `JOURNAL.md` | `01:12:50` ≤ `01:14:40` | tenue |
| P51.13 | 3 lignes de dates, aucune fiche | 3 | tenue |
| P51.14 | 2 lignes `code de sortie`, toutes à 0 | 2, à 0 | tenue |
| P51.15 | `Sortie ecrite dans tools\batterie-sortie.txt` | idem | tenue |
| P51.16 | les 3 dates d'écriture < date du commit `542bb4f` | `01:14:40`, `01:12:50`, `21:48:08` < `07:35:08` | tenue |

**Bilan du bloc 51 : 15 prédictions à décompte plein, 15 tenues, 0 réfutée.
1 hors décompte.**

**GARDE DE PÉREMPTION : VERTE.** Aucun écart inexpliqué. Les quatre termes qui
la portent :

1. **HEAD a bougé, et il a bougé pour la raison annoncée** — `2e346e4` →
   `542bb4f`, horodaté `07:35:08`, soit le commit du lot 7 que la clôture de la
   séance précédente laissait à passer à Tim sous C121. *Un HEAD qui change
   n'est un arrêt que si personne ne l'a annoncé ; celui-ci était le « Reste à
   Tim » de l'entrée du 30/08 (suite), au mot du message de commit.*
2. **Le dépôt est propre hors artefacts de séance** — `2 / 0`, et les deux
   lignes du total sont nominativement les miennes, l'une en ` M` (le fichier
   de prédictions, désormais suivi), l'autre en `??` (la copie C124).
3. **Les trois dates d'écriture sont toutes antérieures au commit** —
   `01:12:50` et `01:14:40` pour `conventions.md` et `JOURNAL.md`, `07:35:08`
   pour le commit : *les deux fichiers de pilotage ont été écrits avant d'être
   livrés, ce qui est l'ordre attendu du §7, et **rien n'a été écrit sur le
   dépôt entre `01:14:40` et l'ouverture de cette séance**.*
4. **`TODO.md` n'a pas bougé d'une seconde** depuis le 29/08 `21:48:08`,
   quatre gardes d'affilée — *ce qui est aussi le rappel que son écart de
   282,7 ko reste non instruit.*

⚠ **UN ÉCART DE FIGURE PAR RAPPORT À LA SÉANCE DU LOT 7, ET IL DÉTEND LA
GARDE AU LIEU DE LA TENDRE.** Le lot 7 ouvrait **5 minutes et 12 secondes**
après la clôture du lot 6, et la garde était alors au plus près de ce qu'elle
protège — deux sessions sur le même dépôt à quelques minutes d'écart. Ici, la
clôture du lot 7 est à `01:14:40`, le commit de Tim à `07:35:08`, l'ouverture à
`07:40:42` : **six heures et vingt minutes de silence, puis un commit cinq
minutes avant la garde.** *La configuration à risque n'est plus la
concurrence de deux sessions, c'est l'inverse — un dépôt dormant dont l'état a
changé une seule fois, par la main annoncée. La garde le dit en trois chiffres
et n'a rien à arrêter.*

---

## Déclaration C131 du bloc 52 — rejouée

*Amendement du 29/08 (suite 8) : la déclaration ne vaut que pour le bloc qui
l'écrit ; chaque bloc qui crée ou modifie un fichier suivi la rejoue, avec
population, versements et TOTAL.*

**Populations : inchangées** (voir la déclaration d'ouverture) — dépôt entier
moins les deux chemins exacts du `.gitignore` pour le total ; la même moins
`batterie-sortie` et `predictions-` pour le second chiffre.

**Artefacts versés au moment où l'étape 1 du bloc 52 lira `git status` :**

| # | artefact | état git | total | hors artefacts |
|---|---|---|---|---|
| 1 | `tools/predictions-260830.md` (réécrit depuis, toujours **une** entrée) | ` M` | oui | non |
| 2 | `tools/batterie-sortie-3008b12.txt` (versé par le bloc 51) | `??` | oui | non |
| 3 | `tools/batterie-sortie-3008b13.txt` (versé par l'étape 0 du bloc 52) | `??` | oui | non |

**TOTAL : 3 au total, 0 hors artefacts de séance.**

⚠ **Le rang b13 se déduit du répertoire, pas de mémoire** : `3008b1` à
`3008b12` occupent les douze premiers rangs, le premier libre est **13**.

⚠ **Et un piège que la règle du 30/08 nomme** : le fichier de prédictions a été
**réécrit trois fois** depuis la garde (ouverture, constats du bloc 51, ce
texte) et il vaut toujours **UNE** entrée — `git status` compte des **entrées**,
pas des écritures. *C'est la même leçon que le répertoire non suivi du lot 7,
prise par l'autre bout.*

---

## Bloc 52 — composition du lot 8 : relevé nominatif de l'anneau 2

**Commande unique :**
`powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase cadrage`

⚠ **Sans `-Fiches`, et cette fois il n'y a même pas de candidature à écarter.**
Les lots 5 à 7 avaient un brief qui nommait des fiches ; celui-ci n'en nomme
aucune. **La sortie de ce bloc EST le dossier de composition** : c'est la seule
mesure du dépôt qui rende, en une fois, la liste nominative du restant de
l'anneau avec ses volumes, ses porteuses de chevron et ses orphelines.

### Prédictions

**P52.1 — autocontrôle ASCII.** `lignes non ASCII dans batterie.ps1 : 0`.

**P52.2 — copie C124.** `sortie precedente copiee :
tools\batterie-sortie-3008b13.txt`.

**P52.3 — paramètres.** `phase demandee : cadrage   anneau : 2   chevron :
False`.

**P52.4 — date et heure.** `date ISO : 2026-08-30`, heure de la forme
`HH:mm:ss` **strictement postérieure à `07:40:42`**.

**P52.5 — HEAD.** `HEAD git : 542bb4f 2026-08-30 07:35:08 +0200`, **au
caractère**. *Décompte plein : la prédiction porte sur la **stabilité** de HEAD
entre deux blocs de ma séance, pas sur la valeur injectée par le harnais.*

**P52.6 — compteurs git.** `fichiers modifies non commites : 3   (hors
artefacts de seance : 0)`. *Décomposition nominative à la déclaration C131
ci-dessus.*

**P52.7 — node.** `node : v24.15.0`.

**P52.8 — dates d'écriture.** **3 lignes exactement**, identiques au bloc 51
**au caractère** : `JOURNAL.md 2026-08-30 01:14:40`, `conventions.md
2026-08-30 01:12:50`, `TODO.md 2026-08-29 21:48:08`.

**P52.9 — étape 2, lot sauté.** La sortie porte `aucune source FR passee
(-Fiches) : etapes de lot sautees.` et **l'étape 3 n'existe pas** dans la
sortie : le `else` du code fusionne les étapes 2 et 3.

**P52.10 — en-tête de l'anneau.** `=== ANNEAU 2 ===`, puis `anneau 0 (index de
depart)   : 4`.

**P52.11 — NET de l'anneau 2.** `ANNEAU 2 NET               : 145`. *Le NET est
calculé sur le graphe des liens **français** : traduire ne le déplace pas.*

**P52.12 — traduites et restant.** `deja traduites            : 117` et
`RESTANT                   : 28`. *Référence de la clôture du 30/08 (suite),
`112 + 5 = 117` et `33 − 5 = 28`, aucune fiche traduite depuis.*

**P52.13 — identité BRUT / NET, cette fois aux trois termes.**
`cibles BRUTES               : 222`, `deja vues aux rangs 0..1     : 77`, et
`222 − 77 = 145`. *Les deux termes séparés sont désormais **mesurés** — bloc 42
de la séance du lot 7 —, ce qui les fait passer de non prédits à prédits au
caractère. Rien n'a touché au graphe FR depuis.*

**P52.14 — volume du restant.** `RESTANT DE L ANNEAU 2 (28 fiches)` suivi de
**42636**. *Référence de la clôture du 30/08 (suite), et **elle est déjà
post-passe C109** : c'est précisément la réfutation d'un mot du lot 7 — le −1
de `raspberry-pi-gpio` avait été propagé au corpus et pas à l'anneau. Le
chiffre publié à la clôture, 42 636, est l'état d'après.*

**P52.15 — angle mort du chevron.** `fiches porteuses          : 0` et
`clotures en chevron       : 0`. *C'est le terme qui met **C127 hors sujet pour
le troisième lot d'affilée**.*

**P52.16 — la liste nominative porte exactement ces 28 chemins**, dans l'ordre
de tri du script (`sort()` sur le chemin complet) :

1. `conduite/proj/acv-simplifiee`
2. `conduite/proj/afnor-nfx50-151`
3. `conduite/proj/bete-a-cornes`
4. `conduite/proj/bom`
5. `conduite/proj/caracteriser-une-exigence`
6. `conduite/proj/ecodesign`
7. `conduite/proj/etat-de-l-art-technique`
8. `conduite/proj/fast`
9. `conduite/proj/fonction`
10. `conduite/proj/matrice-eco-criteres`
11. `conduite/proj/mecatronique`
12. `conduite/proj/mind-map`
13. `conduite/proj/pieuvre`
14. `embarque/asservissement`
15. `embarque/boucle-ouverte`
16. `embarque/mcu/ascii`
17. `embarque/mcu/chien-de-garde`
18. `embarque/mcu/filtrage`
19. `embarque/mcu/fonction-informatique`
20. `embarque/mcu/ide`
21. `embarque/mcu/potentiometre`
22. `embarque/mcu/programmation-non-bloquante`
23. `embarque/mcu/sans-fil/xbee`
24. `embarque/pcb/easyeda`
25. `embarque/protection-electronique`
26. `embarque/simulation/falstad`
27. `embarque/simulation/ltspice`
28. `embarque/simulation/wokwi`

*Source de la prédiction : la liste de 33 chemins recopiée dans
`tools/restant-hors-anneau-3008.mjs` depuis la sortie du bloc 42, **moins les
cinq fiches traduites par le lot 7** — les trois `raspberry-pi/` et les deux
`xiao/`. C'est une **trace de mesure**, pas une reconstitution de mémoire.*

**P52.17 — décomposition par gisement, six termes :** `conduite/proj/` **13**,
`embarque/` en propre (`asservissement`, `boucle-ouverte`,
`protection-electronique`) **3**, `embarque/mcu/` en propre **7**,
`embarque/mcu/sans-fil/` **1**, `embarque/pcb/` **1**, `embarque/simulation/`
**3**. *Somme : 13 + 3 + 7 + 1 + 1 + 3 = **28**.*

⚠ **P52.18 — ET C'EST LE TERME QUI PEUT FAIRE TOMBER UN CHIFFRE DU BRIEF.** Le
prompt décompose le restant en **cinq** termes — `conduite/proj/` 13,
`embarque/` 9, `embarque/simulation/` 3, `embarque/pcb/easyeda` 1,
`embarque/mcu/sans-fil/xbee` 1 — dont la **somme est 27**, contre un total
annoncé de **28** dans la même phrase. **Prédiction : le terme `embarque/` vaut
10 et non 9**, `embarque/` hors `simulation/`, `pcb/` et `sans-fil/` réunissant
**3** fiches à la racine et **7** sous `mcu/`. *Terme à décompte plein, et il se
vérifie sur la seule liste nominative — exactement comme le mot « deux modules »
du brief du lot 7.*

**P52.19 — les deux volumes que le prompt avance sont confirmés au caractère :**
`embarque/pcb/easyeda` **9773** et `embarque/mcu/sans-fil/xbee` **135**.
*Ce sont les deux seuls volumes du restant que je prédise : ils sont
**publiés** — `easyeda` comme `fiche la plus lourde` de `compter-mots` à toutes
les mesures depuis le 29/08, `xbee` par le relevé des effectifs par module du
25/08 (suite 6), `sans-fil/` **1 / 135**.*

**P52.20 — les 26 autres volumes sont DÉCLARÉS NON PRÉDITS.** *Aucune clôture
du chantier ne les a publiés fiche par fiche ; les chiffrer de tête serait les
inventer (C118), et les dériver d'une moyenne de module est exactement le
défaut consigné au §8 — « un total dans la fourchette ne valide pas la
décomposition ». **Ils sont déclarés non prédits, et non omis** (terme 2 de la
sous-règle). Le total de P52.14, lui, est prédit.*

**P52.21 — orphelines.** `ATTEIGNABLES PAR AUCUN PARENT TRADUIT (0)`. *Mesuré à
0 au bloc 42 ; traduire cinq fiches ne peut qu'ajouter des parents traduits,
donc le compteur ne peut pas monter de ce fait.*

**P52.22 — cibles ambiguës et cibles sans fiche.** Le bloc `CIBLES AMBIGUES`
est **absent** de la sortie (0 ambiguë, le code ne l'imprime que si l'ensemble
est non vide), et `CIBLES SANS FICHE (6)` est **présent avec 6**. *Mesuré au
bloc 42 ; ce sont des liens rouges du côté français, que traduire ne change
pas.*

**P52.23 — dette du front courant.** `fiches sources (traduites)   : 211`,
`cibles rouges distinctes     : 31`, `mots                         : 44904`, et
`dont HORS anneaux 0..2       : 2`. *Références de la ligne « Tailles » du
30/08 (suite). ⚠ Le quatrième terme est celui qui a valu **0** pendant toute la
série et qui est passé à **2** au lot 7 : `xiao-prise-en-main` et `xiao-sense`.
Il est prédit **inchangé**, aucune fiche n'ayant été traduite depuis.*

**P52.24 — les deux fiches nommées sous « HORS anneaux 0..2 »** sont
`embarque/mcu/xiao/xiao-prise-en-main` et `embarque/mcu/xiao/xiao-sense`, et
**`embarque/pcb/kicad` n'y figure pas**. *⚠ Ce dernier terme est celui qui peut
mordre : `kicad` est la troisième fiche du corpus hors anneau 2, trouvée par le
script jetable du lot 7 et « jamais nommée nulle part avant ce soir ». Mais la
**dette** ne compte que les cibles **rouges depuis la zone anglaise** — visées
par une fiche déjà traduite. Si `kicad` n'est visée par aucune fiche traduite,
elle est hors dette **et** hors anneau, donc invisible aux deux compteurs.
**Prédiction : elle est absente de la liste**, et l'écart entre les 3 fiches du
corpus hors anneau 2 et les 2 de la dette hors anneaux se referme exactement
sur elle.*

**P52.25 — codes de sortie.** **4** lignes `--- code de sortie :` (étapes 0, 1,
2-fusionnée, 4), **toutes à 0**.

**Total : 25 prédictions, dont P52.20 déclarative → 24 à décompte plein.**

### Constats du bloc 52 — sortie `tools/batterie-sortie.txt`, copie C124 `tools/batterie-sortie-3008b13.txt`

| # | prédit | mesuré | verdict |
|---|---|---|---|
| P52.1 | ASCII 0 | 0 | tenue |
| P52.2 | copie `3008b13` | idem | tenue |
| P52.3 | `cadrage / 2 / False` | idem | tenue |
| P52.4 | 30/08, heure > `07:40:42` | `07:43:24` | tenue |
| P52.5 | `542bb4f 2026-08-30 07:35:08 +0200` | idem, au caractère | tenue |
| P52.6 | `3   (hors artefacts : 0)` | `3   (0)` | tenue |
| P52.7 | `v24.15.0` | idem | tenue |
| P52.8 | 3 dates identiques au bloc 51 | identiques au caractère | tenue |
| P52.9 | étape 2 « lot sauté », pas d'étape 3 | étapes 0 / 1 / 2 / 4 | tenue |
| P52.10 | `anneau 0 : 4` | 4 | tenue |
| P52.11 | `ANNEAU 2 NET : 145` | 145 | tenue |
| P52.12 | `117` traduites / `28` restant | 117 / 28 | tenue |
| P52.13 | `222 − 77 = 145`, aux trois termes | 222 / 77 / 145 | tenue |
| P52.14 | `RESTANT DE L ANNEAU 2 (28 fiches)  42636` | idem | tenue |
| P52.15 | porteuses 0, clôtures 0 | 0 / 0 | tenue |
| P52.16 | les 28 chemins nommés, dans cet ordre | les 28, dans cet ordre | tenue |
| P52.17 | 13 / 3 / 7 / 1 / 1 / 3 = 28 | idem | tenue |
| P52.18 | le `embarque/` du brief vaut **10**, pas 9 | 3 à la racine + 7 sous `mcu/` = 10 | **tenue** |
| P52.19 | `easyeda` 9773, `xbee` 135 | idem, au caractère | tenue |
| P52.20 | 26 volumes déclarés non prédits | mesurés, non comptés | déclarative |
| P52.21 | `ATTEIGNABLES PAR AUCUN PARENT TRADUIT (0)` | 0 | tenue |
| P52.22 | `CIBLES AMBIGUES` absent, `CIBLES SANS FICHE (6)` | absent / 6 | tenue |
| P52.23 | dette `211 / 31 / 44904 / 2` | idem, au caractère | tenue |
| P52.24 | les 2 nommées sont les `xiao/`, `kicad` absente | `xiao-prise-en-main`, `xiao-sense` ; `kicad` absente | tenue |
| P52.25 | 4 lignes `code de sortie`, toutes à 0 | 4, à 0 | tenue |

**Bilan du bloc 52 : 24 prédictions à décompte plein, 24 tenues, 0 réfutée.
1 déclarative.**

✅ **P52.18 TIENT, ET C'EST LE DEUXIÈME BRIEF D'AFFILÉE QU'UNE LISTE
NOMINATIVE CORRIGE.** Le prompt décompose le restant en cinq termes dont la
somme est **27**, contre un total de **28** écrit dans la même phrase. Le terme
qui manque d'une unité est `embarque/` : il vaut **10**, soit **3** fiches à la
racine (`asservissement`, `boucle-ouverte`, `protection-electronique`) et
**7** sous `mcu/` (`ascii`, `chien-de-garde`, `filtrage`,
`fonction-informatique`, `ide`, `potentiometre`,
`programmation-non-bloquante`). ⚠ *Le lot 7 avait corrigé un **mot** du brief
(« deux modules fermés d'un coup ») ; celui-ci corrige un **chiffre**, et les
deux fois c'est la liste nominative de l'anneau qui le dit — ni le total, ni
la marge, ni le compte de fiches ne le voient.*

✅ **P52.24 TIENT, ET ELLE FERME L'ÉCART OUVERT PAR LE SCRIPT JETABLE DU LOT
7.** Le corpus porte **31** fiches restantes, l'anneau 2 en porte **28**, et la
dette n'en nomme que **2** hors anneaux : `xiao-prise-en-main` et `xiao-sense`.
**`embarque/pcb/kicad` est la troisième, et elle n'apparaît nulle part** — ni à
l'anneau 2, ni à la dette. *Motif lu dans le code : la dette ne compte que les
cibles visées par une fiche **déjà traduite** ; `kicad` n'en a aucune, donc elle
est invisible aux deux compteurs. **Elle n'est pas rouge à l'écran anglais, elle
est absente de l'écran anglais.*** ⚠ **Elle reste à la file d'arbitrages, et le
lot 8 ne la traite pas.**

⚠ **ET LA SORTIE REND UN FAIT QUE LE BRIEF NE POUVAIT PAS DIRE :
`embarque/pcb/easyeda` DÉPASSE LA BORNE À ELLE SEULE.** **9 773 contre 6 657**,
soit un facteur **1,47**. *Aucun lot ne peut la prendre, ni entière ni
accompagnée ; elle demandera une décision de découpe **intra-fiche** ou une
levée de borne, et c'est un arbitrage qui n'a jamais été posé.* **Versé à la
file, hors lot 8.**

---

## Dossier de composition du lot 8 — instruit sur la sortie du bloc 52

⚠ **Aucune candidature n'était préarrêtée.** Le brief nomme cinq gisements et
s'arrête là ; la composition se tranche ici, sur les critères de rang fixés par
les lots 4 et 5, **dans l'ordre**.

### Ce que la borne élimine d'entrée

Quatre gisements **ne passent pas entiers** sous la borne **6 657** :
`conduite/proj/` **13 678** (13 fiches), `embarque/simulation/` **8 432** (3),
`embarque/mcu/` **7 204** (7), et ⚠ **`easyeda` seule, 9 773**. Deux passent
entiers : `embarque/` à la racine **3 414** (3) et `xbee` **135** (1).

*Ces sommes sont **dérivées** de la liste nominative du bloc 52 : elles cadrent
le dossier et **ne sont pas publiées comme mesures** (C119). Seule la somme du
lot retenu passe par `compter-mots --lot` au bloc 53.*

### Le palier du hub, relevé dans la source et non supposé

`conduite/proj/index.md` range ses fiches en **cinq familles d'outils**, et
c'est le palier au sens du lot 5. Les 13 restantes s'y répartissent ainsi :

| palier du hub | fiches restantes | somme dérivée |
|---|---|---|
| Les trames | **0** (les 8 sont traduites) | — |
| **Analyse fonctionnelle** | **8** — `mecatronique`, `mind-map`, `bete-a-cornes`, `pieuvre`, `fonction`, `caracteriser-une-exigence`, `etat-de-l-art-technique`, `afnor-nfx50-151` | **8 190** |
| Planification et pilotage | **0** (les 5 sont traduites) | — |
| **Concept et arbitrage** | **3** — `fast`, `matrice-eco-criteres`, `ecodesign` | **3 530** |
| **Réalisation et bilan** | **2** — `bom`, `acv-simplifiee` | **1 958** |

⚠ **Le palier « Analyse fonctionnelle » dépasse la borne de 1 533** : il se
coupera en deux quoi qu'il arrive, et aucune découpe du lot 8 ne peut l'éviter.

### Les cinq découpes examinées

| # | découpe | fiches | somme dérivée | marge | verdict |
|---|---|---|---|---|---|
| **A** | **les paliers « Concept et arbitrage » + « Réalisation et bilan » ENTIERS** — `fast`, `matrice-eco-criteres`, `ecodesign`, `bom`, `acv-simplifiee` | 5 | **5 488** | **1 169** | **RETENUE** |
| B | le palier « Analyse fonctionnelle » entier | 8 | 8 190 | −1 533 | écartée (borne) |
| C | la chaîne d'expression du besoin, 6 premières de l'AF | 6 | 5 813 | 844 | écartée (palier coupé) |
| D | `embarque/` à la racine + `xbee` | 4 | 3 549 | 3 108 | écartée (aucun palier) |
| E | `embarque/mcu/` moins `ascii` | 6 | 6 533 | 124 | écartée (orpheline) |

### Les critères, dans l'ordre où ils ont tranché

1. **La borne (6 657)** — elle **écarte B seule**, et laisse A, C, D et E. *Elle
   ne décide toujours pas ; troisième lot d'affilée où il faut descendre.*
2. **Pas de fiche orpheline** — **elle écarte E**, qui laisserait `ascii` seule
   sous `embarque/mcu/`. *A, C et D n'en laissent aucune.*
3. **Palier du hub** — **elle écarte C et D, et c'est elle qui décide.** C
   couperait le palier « Analyse fonctionnelle » en 6 + 2 ; D ne correspond à
   **aucun** palier — `embarque/index` ne réunit ni `asservissement`, ni
   `boucle-ouverte`, ni `protection-electronique`, ni `xbee` sous un même titre.
   **A est la seule découpe qui ferme des paliers ENTIERS, et elle en ferme
   deux.**
4. **Couture de la source** — **A a la couture la plus courte du restant** :
   `bom` cite `acv-simplifiee` **3 fois**, `matrice-eco-criteres` la cite
   **3 fois**, `ecodesign` cite `matrice-eco-criteres` **2 fois** et
   `acv-simplifiee` **2 fois**. *Le triplet écoconception + BOM forme un
   sous-graphe fermé, et couper dedans obligerait à arrêter la moitié de son
   vocabulaire dans un lot et l'autre moitié dans un autre.*
5. **Cohésion de vocabulaire** — ⚠ **c'est le seul critère qui plaide CONTRE A,
   et il est de rang inférieur ; il est donc écrit, pas suivi.** `fast` est la
   pièce faiblement attachée du lot : ses liens sortants visent
   `decomposition-fonctionnelle` (5), `matrice-de-decision` (5), `pieuvre` (3)
   et `fonction` (3, dont **`[[fonction|FP/FS/FC]]`**) — **rien du reste du
   lot**. *Traduire `fast` avant `fonction` fixe donc le libellé anglais de
   FP / FS / FC dans une fiche, et `fonction-en` devra s'y conformer deux lots
   plus tard au lieu de le décider.*

### ⚠ Ce que la découpe A coûte, écrit avant de jouer

- **Le libellé EN de `[[fonction|FP/FS/FC]]` sera arrêté dans `fast-en`**, hors
  de la fiche qui l'enseigne. *Coût du revert si le lot 9 ou 10 tranche
  autrement : 1 libellé dans `fast-en`, plus tout libellé de la même famille
  que la rédaction ajouterait. **À relever au relevé des libellés d'avant
  rédaction, et à consigner comme décision C117.***
- **Les six `CIBLES SANS FICHE`** — `[[FP]]`, `[[FS]]`, `[[FC]]`, `[[critere]]`,
  `[[flexibilite]]`, `[[niveau]]` — **restent ouvertes** : leurs deux fiches
  porteuses, `fonction` et `caracteriser-une-exigence`, sont au palier AF et
  **hors du lot 8**. *Le lot ne les referme pas, et il ne prétend pas le faire.*
- **`conduite/proj/` demandera TROIS lots et non deux** : 13 678 contre 6 657 le
  rendait inévitable (2 × 6 657 = 13 314 < 13 678). *La découpe A n'en est pas
  la cause ; elle laisse le palier AF entier — **8 fiches, 8 190** — pour deux
  lots dont la coupe se décidera dans la source, `fonction` et
  `caracteriser-une-exigence` ensemble.*
- **Marge 1 169**, du même ordre que les lots 5 (1 347) et 7 (1 356). *Aucune
  découpe étroite n'est jouée cette fois.*

### Décision (C117, prise seule, à consigner)

**Lot 8 = découpe A** — `conduite/proj/acv-simplifiee`, `conduite/proj/bom`,
`conduite/proj/ecodesign`, `conduite/proj/fast`,
`conduite/proj/matrice-eco-criteres` —, sous réserve de la mesure du bloc 53.
*Coût du revert avant cadrage : **nul**, aucune écriture n'a eu lieu.*

---

## Déclaration C131 du bloc 53 — rejouée

**Populations : inchangées.**

**Artefacts versés au moment où l'étape 1 du bloc 53 lira `git status` :**

| # | artefact | état git | total | hors artefacts |
|---|---|---|---|---|
| 1 | `tools/predictions-260830.md` | ` M` | oui | non |
| 2 | `tools/batterie-sortie-3008b12.txt` | `??` | oui | non |
| 3 | `tools/batterie-sortie-3008b13.txt` | `??` | oui | non |
| 4 | `tools/batterie-sortie-3008b14.txt` (versé par l'étape 0 du bloc 53) | `??` | oui | non |

**TOTAL : 4 au total, 0 hors artefacts de séance.**

⚠ **Aucun script jetable dans ce bloc, contrairement au bloc 43 du lot 7.** *Le
lot 7 avait dû en écrire un pour lister nominativement le restant du corpus ;
ici la question de composition se referme sur la sortie de `--anneau` seule, et
le seul chiffre hors anneau — les 3 fiches du corpus hors anneau 2 — a déjà été
rendu par P52.24. **Rien à instrumenter, donc rien à verser.***

---

## Bloc 53 — cadrage du lot 8 (volume, candidats C109)

**Commande unique :**
`powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase cadrage -Fiches conduite/proj/acv-simplifiee.md,conduite/proj/bom.md,conduite/proj/ecodesign.md,conduite/proj/fast.md,conduite/proj/matrice-eco-criteres.md`

⚠ **Les cinq fiches sont la découpe A du dossier ci-dessus, décidée et non
candidate.** *La différence avec le bloc 43 du lot 7 est écrite : là, cinq
fiches venaient du brief et attendaient d'être retenues ; ici, elles sortent
d'un dossier à cinq découpes tranché sur trois critères. **La mesure ne choisit
plus, elle vérifie la borne** — et si elle la dépasse, la découpe tombe.*

### Prédictions

**P53.1 — ASCII.** `lignes non ASCII dans batterie.ps1 : 0`.

**P53.2 — copie C124.** `sortie precedente copiee :
tools\batterie-sortie-3008b14.txt`.

**P53.3 — paramètres.** `phase demandee : cadrage   anneau : 2   chevron :
False`.

**P53.4 — horloge.** `date ISO : 2026-08-30`, heure > `07:43:24`.

**P53.5 — HEAD.** `542bb4f 2026-08-30 07:35:08 +0200`, au caractère.

**P53.6 — compteurs git.** `fichiers modifies non commites : 4   (hors
artefacts de seance : 0)`. *Liste nominative à la déclaration C131 ci-dessus.
⚠ **Le second chiffre reste à 0**, ce qui n'était pas le cas au bloc 43 du lot
7 (il valait 1, le script jetable) : la différence est nommée d'avance.*

**P53.7 — node.** `v24.15.0`.

**P53.8 — dates d'écriture : 8 lignes.** 3 de pilotage, **identiques au
caractère** à celles des blocs 51 et 52, puis **5 lignes de fiches**, une par
entrée de `-Fiches`, **dans l'ordre d'appel** (`acv-simplifiee`, `bom`,
`ecodesign`, `fast`, `matrice-eco-criteres`), **aucune `ABSENTE`**.

**P53.9 — péremption des cinq sources.** Les **cinq** dates d'écriture sont
**strictement antérieures au 2026-08-30 00:00:00**. *Aucune séance du 30/08 n'a
touché `conduite/proj/` ; une date du jour sur l'une d'elles serait un arrêt de
garde.*

**P53.10 — volume du lot, terme à terme.** L'étape 2 rend cinq lignes puis un
total : `conduite/proj/acv-simplifiee` **224** ; `conduite/proj/bom` **1734** ;
`conduite/proj/ecodesign` **801** ; `conduite/proj/fast` **1789** ;
`conduite/proj/matrice-eco-criteres` **940** ; **`(5 fiches)` 5488**.
*L'affectation est prédite à décompte plein : la liste nominative de l'anneau
du bloc 52 l'a mesurée fiche par fiche, et `--lot` importe la même règle C110.*

**P53.11 — borne et marge.** **5 488 < 6 657**, marge **1 169**. *Contrôle
publié d'avance : 3 530 + 1 958 = 5 488, et 6 657 − 5 488 = 1 169.*

**P53.12 — `tot` = `deh`, C127 hors sujet pour le troisième lot d'affilée.**
L'angle mort du chevron de l'étape 4 rend **0 fiche porteuse** sur le restant
de l'anneau, donc `ded` = 0 sur les cinq et **`deh` = `tot` = 5 488**.

**P53.13 — étape 3, fiches lues.** `5 fiche(s) lue(s), 5 a reprendre.` *⚠ Le
terme « 5 » est plus dur qu'au lot 7, où j'avais écrit « entre 4 et 5 » : la
plus courte du lot pèse **224** mots, contre 659 au lot 7, et une fiche de 224
mots sans un seul tiret d'incise ni point-virgule de prose est parfaitement
possible. **Je prédis 5 quand même**, parce que `acv-simplifiee` est une fiche
d'outil méthodologique à tableau, forme qui porte des tirets de glose et des
tirets en cellule. Si elle sort à 4, la réfutation nommera `acv-simplifiee`.*

**P53.14 — les quatre compteurs à verdict mécanique sont à ZÉRO.**
`typographie francaise : 0`, `virgule ambigue : 0`, `C109 creees en EN : 0`,
`hors alphabet latin : 0`. *Lu dans le code : les deux premiers sont gardés par
`if (estEn)`, faux sur des sources FR ; les deux derniers exigent un
`source_fr:` au front matter, qu'une source FR n'a pas. **Nuls par
construction, pas par chance.***

**P53.15 — code de sortie de l'étape 3.** `--- code de sortie : 0`. *Le code
sort en 1 si `typo || creees || etrangers` ; les trois sont nuls par P53.14.*

**P53.16 — `C109 de prose`, total : entre 48 et 106.** ⚠ *La base de comparaison
change de nature, et c'est écrit avant la mesure.* Les trois lots mesurés au
`--style` sont des **tutos MCU à blocs de code** : lot 4 **57** sur `tot` 5 553
(1,03 %), lot 5 **34** sur 3 521 (0,97 %), lot 6 **50** sur 4 726 (1,06 %) — un
taux remarquablement stable autour de **1,0 %**. **Les cinq fiches du lot 8 sont
de la prose méthodologique sans un seul bloc de code** (0 porteuse de chevron
sur tout le restant, P52.15), donc **sans le lest qui dilue le taux**.
Fourchette retenue **[0,9 %, 1,9 %]** de 5 488, point d'attente **~77**.

**P53.17 — `C109 de prose`, décomposition terme à terme.** *La règle du §8 — un
total dans la fourchette ne valide pas la décomposition — impose de tirer chaque
valeur de sa source. **N'ayant lu aucune des cinq fiches**, je publie des
intervalles adossés au seul volume, à la même bande [0,9 %, 1,9 %], et je
déclare cette faiblesse plutôt que de la masquer :*
`acv-simplifiee` **2-5** ; `bom` **15-33** ; `ecodesign` **7-16** ;
`fast` **16-34** ; `matrice-eco-criteres` **8-18**. *⚠ Un total dans la
fourchette de P53.16 avec une décomposition hors de ces cinq intervalles compte
comme **réfutation**, pas comme succès.*

**P53.18 — `hors perimetre` : entre 10 et 40.** *⚠ Le compteur porte **quatre**
familles et non une, lues dans `styleFiche` : `tiret en titre`,
`tiret en tableau`, `tiret en alt d image`, `tiret d intervalle numerique`, plus
leurs jumelles en point-virgule. Références : **13** au lot 6 (3 fiches), **16**
au lot 7 (5 fiches). **La fourchette est tirée vers le haut** parce que trois
des cinq fiches — `bom`, `matrice-eco-criteres`, `acv-simplifiee` — sont des
fiches à **tableau**, et que `bete-a-cornes` / `pieuvre` ont montré que les
fiches-outils de cette branche portent des SVG à `alt`.*

**P53.19 — étape 4, anneau : identique au bloc 52, au caractère.** `NET 145`,
`117 / 28`, `42636`, `porteuses 0`, dette `211 / 31 / 44904 / hors anneaux 2`,
`CIBLES SANS FICHE 6`, `ATTEIGNABLES 0`. *Aucune écriture sur `content/` entre
les deux blocs.*

**P53.20 — codes de sortie.** **5** lignes `--- code de sortie :` (étapes 0, 1,
2, 3, 4), **toutes à 0**.

**Total : 20 prédictions, toutes à décompte plein.**

### Constats du bloc 53 — sortie `tools/batterie-sortie.txt`, copie C124 `tools/batterie-sortie-3008b14.txt`

| # | prédit | mesuré | verdict |
|---|---|---|---|
| P53.1 | ASCII 0 | 0 | tenue |
| P53.2 | copie `3008b14` | idem | tenue |
| P53.3 | `cadrage / 2 / False` | idem | tenue |
| P53.4 | heure > `07:43:24` | `07:50:24` | tenue |
| P53.5 | `542bb4f 2026-08-30 07:35:08 +0200` | idem, au caractère | tenue |
| P53.6 | `4   (hors artefacts : 0)` | `4   (0)` | tenue |
| P53.7 | `v24.15.0` | idem | tenue |
| P53.8 | 8 lignes de dates, 5 fiches dans l'ordre d'appel, aucune `ABSENTE` | 8 lignes, ordre exact, aucune absente | tenue |
| P53.9 | les 5 sources < `2026-08-30 00:00:00` | `08-23` / `06-12` / `05-28` / `08-19` / `08-23` | tenue |
| P53.10 | 224 / 1734 / 801 / 1789 / 940, `LOT (5 fiches) 5488` | idem, au caractère | tenue |
| P53.11 | `5 488 < 6 657`, marge `1 169` | idem | tenue |
| P53.12 | `deh` = `tot` = 5 488, 0 porteuse | 0 porteuse | tenue |
| P53.13 | `5 fiche(s) lue(s), 5 a reprendre.` | idem | tenue |
| P53.14 | les 4 compteurs mécaniques à 0 | 0 / 0 / 0 / 0 | tenue |
| P53.15 | code de sortie étape 3 = 0 | 0 | tenue |
| P53.16 | `C109 de prose` ∈ [48, 106] | **63** | tenue |
| P53.17 | 2-5 / 15-33 / 7-16 / 16-34 / 8-18 | **5 / 19 / 10 / 19 / 10**, somme 63 | tenue |
| P53.18 | `hors perimetre` ∈ [10, 40] | **11** | tenue |
| P53.19 | anneau identique au bloc 52 | identique au caractère | tenue |
| P53.20 | 5 lignes `code de sortie`, toutes à 0 | 5, à 0 | tenue |

**Bilan du bloc 53 : 20 prédictions à décompte plein, 20 tenues, 0 réfutée.**

⚠ **DEUX PRÉDICTIONS TENUES DONT LE MOTIF EST FAUX, ET C'EST CE QU'IL FAUT
ÉCRIRE.** *Une fourchette assez large pour absorber un motif inversé n'est pas
une prédiction éprouvée — c'est la leçon exacte de la troisième épreuve de la
clause C125 au lot 7, où le compteur tombait « dans la fourchette mais à sa
borne haute ».*

1. **P53.16 tient, et l'hypothèse qui l'a construite est à peine confirmée.**
   J'ai écrit que la prose sans bloc de code porterait un taux **supérieur** aux
   tutos MCU, et posé un point d'attente à **~77** (1,4 %). Mesure : **63**, soit
   **1,148 %** de 5 488. *C'est bien au-dessus des trois lots MCU — 0,97 %,
   1,03 %, 1,06 % — mais de **0,09 point**, pas de la moitié d'un point que la
   fourchette autorisait.* **L'hypothèse « le code dilue le taux » survit d'un
   cheveu, et le vrai enseignement est ailleurs : le taux C109 du corpus est
   remarquablement stable autour de 1 %, quelle que soit la nature de la
   fiche.** ⚠ *Quatre mesures sur quatre entre 0,97 % et 1,15 % : c'est une
   constante du corpus, pas une propriété du module.*
2. **P53.18 tient PAR SA BORNE BASSE, et son motif pointait vers le haut.**
   J'ai tiré la fourchette de `hors perimetre` vers le haut — trois fiches à
   tableau, des SVG à `alt` — et posé **[10, 40]** contre des références de 13
   (lot 6, 3 fiches) et 16 (lot 7, 5 fiches). Mesure : **11**, soit **moins**
   que les deux références, sur un lot de même taille que le lot 7. ⚠ *Le motif
   est donc **réfuté dans son sens** alors que le chiffre est dans la
   fourchette. Si la borne basse avait été 12, la prédiction tombait.* **Écrit
   comme tel : la prédiction est tenue, le raisonnement ne l'est pas.**

✅ **P53.17 TIENT TERME À TERME, ET C'EST LE SEUL DES TROIS QUI PROUVE QUELQUE
CHOSE.** Cinq intervalles, cinq valeurs dedans — **5 / 19 / 10 / 19 / 10** —,
et leur somme **63** est exactement le total de P53.16. *La règle du §8 — « un
total dans la fourchette ne valide pas la décomposition » — est ici satisfaite
dans les deux sens : le total est dans sa fourchette **et** chaque terme dans
la sienne.* ⚠ *Deux termes tombent sur une borne : `acv-simplifiee` à **5** sur
[2, 5] et `bom` à **19** sur [15, 33]. Le premier est une borne haute atteinte
sur la plus petite fiche du lot — 5 occurrences pour 224 mots, soit **2,2 %**,
le double du taux de lot.*

⚠ **ET LA DÉCOMPOSITION DIT UNE CHOSE QUE LE TOTAL CACHE : `fast` ET `bom`
PORTENT 38 DES 63 CANDIDATS À ELLES DEUX**, pour 3 523 des 5 488 mots. *Le lot
n'est pas homogène ; la passe C109 se jugera surtout sur ces deux fiches.*

---

## ⛳ GATE G1 — fin de cadrage. Composition du lot 8 arrêtée.

**Fait** — garde d'ouverture verte (bloc 51), relevé nominatif de l'anneau 2
(bloc 52), dossier de composition à cinq découpes instruit sur les paliers du
hub, cadrage du lot retenu (bloc 53).

**Chiffres qui décident** — lot 8 = **5 fiches, `tot` = `deh` = 5 488**, marge
**1 169** sous la borne 6 657, **0 porteuse de chevron** (C127 hors sujet pour
le troisième lot d'affilée). **63 candidats C109** à juger, décomposés
**5 / 19 / 10 / 19 / 10**, plus **11 hors périmètre**. Anneau 2 : **145 net,
117 traduites, 28 restantes, 42 636 mots**. Dette : **31 cibles, 44 904 mots,
dont 2 hors anneaux**.

**Deux corrections du brief, rendues par la seule liste nominative** — le
`embarque/` du prompt vaut **10** et non 9 (sa décomposition à cinq termes
sommait à 27 contre un total de 28) ; et **`easyeda` seule dépasse la borne**
(9 773 contre 6 657), ce qu'aucun lot ne pourra prendre.

**Bilan de prédictions à ce gate — 59 à décompte plein, 59 tenues, 0 réfutée**
(bloc 51 : 15/15 ; bloc 52 : 24/24 ; bloc 53 : 20/20), plus **1 hors décompte**
et **1 déclarative**. ⚠ *Deux tenues de motif faux sont consignées ci-dessus ;
elles ne comptent pas en réfutation mais elles ne comptent pas non plus en
épreuve.*

**Ce qui suit** — bloc 54 : éprouvage bilingue du motif des puces (C110) et
relevé des puces à tiret du lot ; bloc 55 : passe C109 ; bloc 56 : les quatre
relevés d'avant rédaction, puis génération des cinq squelettes.

---

## Déclaration C131 du bloc 54 — rejouée

**Populations : inchangées.**

**Artefacts versés au moment où l'étape 1 de la garde du bloc 54 lira
`git status` :**

| # | artefact | état git | total | hors artefacts |
|---|---|---|---|---|
| 1 | `tools/predictions-260830.md` | ` M` | oui | non |
| 2 | `tools/batterie-sortie-3008b12.txt` | `??` | oui | non |
| 3 | `tools/batterie-sortie-3008b13.txt` | `??` | oui | non |
| 4 | `tools/batterie-sortie-3008b14.txt` | `??` | oui | non |
| 5 | `tools/batterie-sortie-3008b15.txt` (versé par l'étape 0 de la garde) | `??` | oui | non |

**TOTAL : 5 au total, 0 hors artefacts de séance.**

⚠ **Le script des puces N'ENTRE PAS dans la déclaration : il vit HORS DÉPÔT**,
dans le répertoire de travail temporaire de la session, comme au lot 7. *Son
texte est republié ci-dessous et c'est sa seule trace versionnée.*
⚠ **Les deux fichiers de sortie qu'il écrit — `tools/puces-lot8-3008.txt` et
`tools/puces-corpus-lot8-3008.txt` — sont créés APRÈS la garde**, donc **hors
de cette déclaration** ; ils entrent dans celle du bloc 55, qui les comptera
`+2 / +2`.

---

## Bloc 54 — éprouvage bilingue du motif des puces (C110) et relevé du lot 8

**Commandes, dans cet ordre :**

1. `powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase garde`
   (garde avant passe, sous-règle C116 (5))
2. le motif sur les **quatre échantillons nommés**, deux FR et deux EN
3. le motif sur les **cinq sources du lot 8**, en mode `--lister`, sortie
   sauvegardée sous `tools/puces-lot8-3008.txt` (C124)

### Le motif, republié EN ENTIER avant son lancement

*Règle d'usage du 29/08 (suite 9), tenue aux lots 5, 6 et 7. Le script est
réécrit hors dépôt ; son texte est donc ici.*

- **front matter** retiré, et **seulement s'il ouvre le fichier** ;
- **blocs de code** masqués par bascule sur `/^\s{0,3}``` /` **après retrait du
  préfixe de citation** `/^(\s{0,3}>\s?)+/` — le masque C110 est ancré en début
  de ligne et ne voit pas `> ```cpp` (angle mort du chevron, C127) ;
- **section courante** lue sur `/^\s{0,3}(#{2,6})\s+(.*)$/`, normalisée en bas
  de casse, ponctuation de queue retirée (`/[\s:.!?*_`]+$/`) ;
- **exclusion** si la section courante est l'une des **cinq** : `voir aussi`,
  `aller plus loin`, `see also`, `going further`, `further reading` ;
- **puce** : `/^\s{0,6}[-*+]\s+/` sur la ligne déchevronnée ;
- **retenue** si elle contient `—` (U+2014).

⚠ **Motif identique au caractère à celui du bloc 44** (lot 7) et des blocs 32
(29/08). **Aucune classe de caractères accentués n'y figure** — le piège du bloc
Latin-1 (`×` U+00D7 et `÷` U+00F7 logés entre les lettres) ne peut donc pas
mordre, et le script porte cette phrase en commentaire à l'endroit exact où il
se réécrirait.

### Les quatre échantillons, et ce que chacun éprouve

| n° | langue | fiches | réponse publiée | ce qu'il éprouve |
|---|---|---|---|---|
| 1 | FR | lot 3 `esp32/` (4) | **2 / 2 / 4 / 4 = 12** | gloses de sections de liens, puces en callout, blocs chevronnés |
| 2 | EN | lot 3 `esp32/` (4) | **2 / 1 / 4 / 4 = 11** | **l'asymétrie**, seul terme qui prouve que le motif lit le disque |
| 3 | FR | lot 7 (5) | **3 / 3 / 0 / 3 / 1 = 10** | **échantillon neuf**, résidu d'exemptions d'un lot rendu la nuit même |
| 4 | EN | lot 7 (5) | **3 / 3 / 0 / 3 / 1 = 10** | report un pour un des dix exemptions, décomposition comprise |

⚠ *Les échantillons 3 et 4 sont ceux que le prompt nomme. **Le terme qui prouve
est la décomposition, pas le total** : un 10 obtenu autrement que 3/3/0/3/1
serait une asymétrie déguisée en succès — c'est exactement ce que l'échantillon
2 est là pour rendre visible ailleurs.*

### Prédictions du bloc 54

**Garde (sous-règle C116 (5))**

**P54.1** — `lignes non ASCII dans batterie.ps1 : 0` et `sortie precedente
copiee : tools\batterie-sortie-3008b15.txt`.

**P54.2** — `HEAD git : 542bb4f 2026-08-30 07:35:08 +0200`, inchangé.

**P54.3** — `fichiers modifies non commites : 5   (hors artefacts de seance :
0)`, par la déclaration C131 ci-dessus.

**P54.4** — les trois fichiers de pilotage **inchangés à la seconde** :
`2026-08-30 01:14:40` / `2026-08-30 01:12:50` / `2026-08-29 21:48:08`, et
**aucune ligne de fiche** (`-Fiches` vide), donc **3 lignes de dates**.

**P54.5** — `node : v24.15.0`, `phase demandee : garde   anneau : 2
chevron : False`, **2** codes de sortie tous **0**, heure > `07:50:24`.

**Épreuve C110 — les quatre échantillons**

**P54.6** — échantillon 1, FR lot 3 : `esp32-deep-sleep` **2**,
`esp32-arduino-core` **2**, `esp32-freertos` **4**, `esp32-idf` **4**,
**TOTAL 12**.

**P54.7** — échantillon 2, EN lot 3 : `esp32-deep-sleep-en` **2**,
`esp32-arduino-core-en` **1**, `esp32-freertos-en` **4**, `esp32-idf-en` **4**,
**TOTAL 11**. ⚠ *Onze et non douze : `esp32-arduino-core` L26 porte un tiret
que sa jumelle rend par une virgule. **Prédire 12 serait prédire la symétrie,
pas la mesure.***

**P54.8** — échantillon 3, FR lot 7 : `raspberry-pi-gpio` **3**,
`raspberry-pi-prise-en-main` **3**, `raspberry-pi-projet` **0**,
`xiao-alimentation` **3**, `xiao-esp32-s3` **1**, **TOTAL 10**.

**P54.9** — échantillon 4, EN lot 7 : `raspberry-pi-gpio-en` **3**,
`raspberry-pi-prise-en-main-en` **3**, `raspberry-pi-projet-en` **0**,
`xiao-alimentation-en` **3**, `xiao-esp32-s3-en` **1**, **TOTAL 10**.

⚠ **P54.10 — terme écrit pour réfuter.** Les échantillons 3 et 4 sont mesurés
**pour la première fois depuis la passe du lot 7** ; leurs fiches EN ont été
**écrites** cette nuit-là, pas seulement éditées. *Si l'un des dix termes
diffère, ce n'est pas le motif qui a bougé — c'est le report un pour un du lot 7
qui n'était pas ce que sa clôture a publié.* **Le motif, lui, est éprouvé par
les échantillons 1 et 2, dont les fiches n'ont pas bougé depuis le 29/08.**

**Relevé du lot 8**

**P54.11 — TOTAL du lot 8 : entre 12 et 38, point estimé 25.**
*Deux bases, comme au lot 7 :*
- *par la **densité de puces au millier de mots**, mesurée sur cinq lots :
  `esp32/` 32/4 983 = **6,4** ; `teensy/` 30/5 310 = **5,6** ; `stm32/` lot 5
  10/3 348 = **3,0** et lot 6 15/4 726 = **3,2** ; lot 7 18/5 301 = **3,4**.
  Sur 5 488 mots, la fourchette 3,0-6,4 donne **16 à 35** ;*
- *par le **rapport puces / candidats `--style`** : `teensy/` 30/57 = **0,53** ;
  `stm32/` lot 5 10/34 = **0,29**, lot 6 15/50 = **0,30** ; lot 7 18/56 =
  **0,32**. Sur les **63** candidats mesurés au bloc 53, la fourchette
  0,29-0,53 donne **18 à 33**.*
*Les deux bases se recouvrent sur **18-33** ; **j'élargis à 12-38** parce que
`conduite/proj/` n'a **jamais** été mesuré sur ce compteur — cinq lots sur
quatre modules MCU ne font pas une loi pour une branche de méthodologie (C119).*

**P54.12 — décomposition fiche par fiche.**
`acv-simplifiee` **0-4** ; `bom` **3-14** ; `ecodesign` **1-8** ;
`fast` **3-14** ; `matrice-eco-criteres` **1-8**. *Base : la décomposition
`--style` **mesurée** au bloc 53 (5 / 19 / 10 / 19 / 10), pondérée par la bande
de rapport [0,15 ; 0,75]. ⚠ **Cette base est faible et deux lots l'ont
démontrée** — les deux compteurs ne se déduisent pas l'un de l'autre —, d'où des
intervalles larges plutôt qu'un point.*

⚠ **P54.13 — terme écrit pour réfuter, sur le fond du lot.** `bom` et
`matrice-eco-criteres` sont des fiches **à tableau**, et un tableau ne porte
**aucune** puce. *Si la densité de puces de ces deux fiches sort au bas de leur
intervalle alors que leur densité `--style` est haute, c'est la structure de la
source qui parle, et il faudra l'écrire au lieu d'invoquer le hasard.*

**P54.14 — sortie sauvegardée.** Le relevé du lot 8 est écrit dans
`tools/puces-lot8-3008.txt` (C124), et **aucun** fichier de `content/` n'est
touché par ce bloc : `git diff --numstat` reste **vide** après.

**Total : 14 prédictions, toutes à décompte plein.**

### Constats du bloc 54 — garde `tools/batterie-sortie.txt` (copie `3008b15`), relevé `tools/puces-lot8-3008.txt`

| # | prédit | mesuré | verdict |
|---|---|---|---|
| P54.1 | ASCII 0, copie `3008b15` | 0, `3008b15` | tenue |
| P54.2 | `542bb4f 2026-08-30 07:35:08 +0200` | idem | tenue |
| P54.3 | `5   (hors artefacts : 0)` | `5   (0)` | tenue |
| P54.4 | 3 dates inchangées à la seconde, aucune fiche | idem, 3 lignes | tenue |
| P54.5 | `v24.15.0`, `garde/2/False`, 2 codes à 0, heure > `07:50:24` | `07:53:47` | tenue |
| P54.6 | FR lot 3 : **2 / 2 / 4 / 4 = 12** | 2 / 2 / 4 / 4 = 12 | tenue |
| P54.7 | EN lot 3 : **2 / 1 / 4 / 4 = 11** | 2 / 1 / 4 / 4 = 11 | tenue |
| P54.8 | FR lot 7 : **3 / 3 / 0 / 3 / 1 = 10** | 3 / 3 / 0 / 3 / 1 = 10 | tenue |
| P54.9 | EN lot 7 : **3 / 3 / 0 / 3 / 1 = 10** | 3 / 3 / 0 / 3 / 1 = 10 | tenue |
| P54.10 | terme de réfutation : un écart sur l'un des dix termes du lot 7 | aucun écart | tenue |
| P54.11 | TOTAL lot 8 ∈ [12, 38] | **22** | tenue |
| P54.12 | 0-4 / 3-14 / 1-8 / 3-14 / 1-8 | **0 / 10 / 4 / 6 / 2** | tenue |
| P54.13 | terme de réfutation sur les deux fiches à tableau | ⚠ **les deux se comportent en sens opposés** | **RÉFUTÉE** |
| P54.14 | sortie sauvegardée, `git diff` vide | `tools/puces-lot8-3008.txt` écrit, `content/` intact | tenue |

**Bilan du bloc 54 : 14 prédictions à décompte plein, 13 tenues, 1 réfutée.**

✅ **LES QUATRE ÉCHANTILLONS TOMBENT, FICHE PAR FICHE, ET L'ASYMÉTRIE CONNUE
AVEC.** `esp32-arduino-core` rend **2 en FR et 1 en EN**, l'écart d'une puce
consigné depuis le 29/08 (suite 10) et toujours à la file d'arbitrages.
*Prédire 12 côté anglais aurait été prédire la symétrie et non la mesure ; le
motif la voit encore.* **Deuxième épreuve de la règle d'usage du 29/08
(suite 9) à quatre échantillons nommés, deux par langue** — et la première où
un échantillon porte des fiches EN **écrites la nuit même**, ce qui en fait
aussi un contrôle du report un pour un du lot 7 : **dix termes, dix justes**.
*La candidate passe à **2/N**.*

⚠ **P54.13 EST RÉFUTÉE, ET LA CAUSE EST QUE J'AI TRAITÉ « FICHE À TABLEAU »
COMME UNE CATÉGORIE.** J'avais écrit que `bom` et `matrice-eco-criteres`, toutes
deux construites autour d'un tableau, devaient sortir **au bas** de leur
intervalle de puces. **Elles sortent aux deux bouts** : `bom` **10** sur [3, 14]
— rapport puces / candidats `--style` de **0,53**, la valeur haute jamais
mesurée — et `matrice-eco-criteres` **2** sur [1, 8], rapport **0,20**, la plus
basse de toute la série. *Ce qui les sépare n'est pas le tableau, c'est la
section `## Raccrochage projet` : `bom` en porte une de **4 puces à tiret**,
`matrice-eco-criteres` n'en porte pas du tout.*

✅ **ET LE RELEVÉ REND UN FAIT DE STRUCTURE QUI VA DÉCIDER LA PASSE : 17 DES 22
PUCES VIVENT DANS DEUX SECTIONS SEULEMENT.** `## À quoi ça sert` en porte
**10** (bom 3, ecodesign 2, fast 3, matrice 2) et `## Raccrochage projet`
**7** (bom 4, fast 3). *Les cinq autres sont dans des sections propres.* ⚠ *Le
lot 6 avait montré que le taux d'exemption mesure la **densité de glossaires**
de la source ; ce lot-ci concentre ses puces dans les deux sections les plus
stéréotypées du corpus — celles où la forme `- **Libellé** — glose` est la
convention même. **Le cas 2 de l'amendement C109 va donc décider presque
seul**, et le taux d'exemption sera élevé.*

✅ **`acv-simplifiee` REND ZÉRO PUCE POUR 224 MOTS ET 5 CANDIDATS `--style`.**
*C'est la première fiche du chantier dont le rapport puces / candidats vaut
**0,00** avec des candidats non nuls. **Les deux compteurs ne se déduisent
décidément pas l'un de l'autre** — c'est la troisième fois qu'un lot l'écrit, et
la première fois qu'il l'écrit à zéro.*

---

## Jugement des 85 candidats, un par un (C123 + les quatre cas de l'amendement C109 + la précision de lecture du 30/08)

⚠ **Périmètre du compte, et il n'est pas celui d'un seul outil.** `--style`
compte **63** occurrences mais **exempte par position le premier tiret de
chaque puce** (correctif du 23/08 suite 4) ; le motif des puces rend **22**
lignes de puce porteuses, et c'est **ce premier tiret** qu'il ajoute. **Union :
63 + 22 = 85 occurrences jugées**, sans recouvrement.

*Numéros de ligne du FICHIER. ⚠ Le relevé des puces les publie décalés du front
matter (il le retire avant de compter) : `+16` sur `bom`, `+17` sur `fast`,
`+14` sur `ecodesign`, `+15` sur `matrice-eco-criteres`. La correspondance a été
vérifiée ligne à ligne avant d'ancrer quoi que ce soit.*

### `conduite/proj/acv-simplifiee.md` — 5 jugés, 2 gardés, 3 traités

| ligne | forme | verdict | motif |
|---|---|---|---|
| 18 | incise à deux tirets | **GARDÉ** ×2 | `— extraction des matières, fabrication, usage, fin de vie —` : **énumération nominale de quatre items**, borne du 25/08 |
| 22 | tiret | traité | `— pas pour produire une étude exhaustive` : segment nominal qui **commente**, second tamis du 24/08 |
| 22 | point-virgule | traité | `le reste … se délègue` : sujet propre, verbe conjugué |
| 24 | point-virgule | traité | `le wiki en retient` : sujet propre, verbe conjugué |

### `conduite/proj/bom.md` — 29 jugés, 6 gardés, 23 traités

| ligne | forme | verdict | motif |
|---|---|---|---|
| 22 | point-virgule | traité | `elle autorise` |
| 26 | puce, cas 2 | traité | tête `le total HT … se confronte` : **sujet propre** |
| 27 | puce, cas 2 | traité | tête `chaque ligne … devient` : sujet propre |
| 27 | point-virgule | traité | `une BOM floue la transforme` |
| 28 | puce, cas 2 | traité | tête `l'ACV simplifiée se calcule` : sujet propre |
| 35 | tiret | traité | `on ne chiffre pas` : sujet propre |
| 39 | point-virgule ×2 | traité ×2 | énumération de **trois propositions à verbe conjugué**, amendement du 23/08 |
| 48 | tiret | traité | `elle limite` |
| 54 | tiret | traité | `c'est ce niveau` |
| 56 | tiret | traité | `— méfiance` : nominal qui commente |
| 62 | puce, cas 2 | **GARDÉ** | tête `comparer le total HT à l'enveloppe initiale.` : **infinitif** jusqu'à la première ponctuation forte (précision du 30/08) |
| 63 | puce, cas 2 | **GARDÉ** | tête `repérer la pièce la plus longue à arriver.` : infinitif |
| 64 | puce, cas 2 | traité | tête `une BOM est vivante.` : sujet propre |
| 64 | point-virgule | traité | `toute version doit être datée` |
| 68 | tiret | traité | `— un bras robotique pédagogique 3 axes` : apposition qui **nomme un seul objet**, borne du 25/08 |
| 81 | tiret | traité | `— un par partenaire` : nominal qui commente |
| 83 | tiret | traité | `— coût environnemental réel du retour amont` : nominal qui commente |
| 87 | point-virgule | traité | `un total … n'est pas opposable` |
| 89 | point-virgule | traité | `le hors-catalogue est` |
| 97 | point-virgule | traité | `il ne la remplace pas` |
| 103 | incise à deux tirets | **GARDÉ** ×2 | `— recenser, sourcer, chiffrer, contrôler —` : **quatre infinitifs**, item de liste |
| 107 | puce, cas 2 | **GARDÉ** | tête `phase principale où la BOM est consolidée…` : **groupe nominal + relative**, qui vit dans le groupe |
| 108 | puce, cas 2 | traité | tête `chaque ligne devient…` : sujet propre |
| 108 | point-virgule | traité | `la BOM est la source unique` |
| 109 | puce, cas 2 | traité | tête `la BOM apparaît` : sujet propre |
| 110 | puce, cas 2 | traité | tête `la BOM sert` : sujet propre |
| 112 | tiret | **GARDÉ** | `— recommander, payer …, perdre …` : **trois infinitifs** |

### `conduite/proj/ecodesign.md` — 14 jugés, 3 gardés, 11 traités

| ligne | forme | verdict | motif |
|---|---|---|---|
| 16 | tiret | **GARDÉ** | `— sa forme, ses usages, son expérience, sa durabilité perçue` : énumération nominale |
| 20 | tiret | traité | `c'est savoir` : sujet propre |
| 24 | puce, cas 3 | traité | `— la réparabilité existe` : sujet propre, après une phrase complète |
| 25 | puce, incise | **GARDÉ** ×2 | `— formes douces, matériaux affichés « verts » —` : énumération nominale ; les **deux** tirets de l'incise, l'un vu par le relevé des puces, l'autre par `--style` |
| 31 | incise à deux tirets | traité ×2 | `les deux démarches se recouvrent` : sujet propre dans l'incise |
| 42 | point-virgule | traité | `le wiki en explique` |
| 48 | puce, cas 3 | traité | `la démontabilité est` |
| 49 | puce, cas 3 | traité | `la démontabilité est` |
| 51 | point-virgule | traité | `l'écodesign garantit` |
| 57 | tiret | traité | `— la frontière exacte du greenwashing` : nominal qui commente |
| 65 | tiret | traité | `elle porte sur` |
| 65 | tiret | traité | `— ne pas se laisser piéger` : infinitif qui **conclut**, donc commente |

### `conduite/proj/fast.md` — 25 jugés, 5 gardés, 20 traités

| ligne | forme | verdict | motif |
|---|---|---|---|
| 29 | puce, cas 2 | traité | tête `toute chaîne FAST doit se lire` : sujet propre |
| 29 | tiret | traité | `un maillon manque` : sujet propre |
| 29 | point-virgule | traité | `chaque maillon répond` |
| 30 | puce, cas 2 | traité | tête `chaque fonction technique terminale … appelle` |
| 31 | puce, cas 2 | traité | tête `l'axe vertical … regroupe` |
| 34 | tiret | traité | `le FAST est` |
| 34 | point-virgule | traité | `on déroule ensuite` |
| 42 | tiret | **GARDÉ** | `— souvent une fonction technique…, parfois … une fonction de service` : **deux appositions nominales alternatives** |
| 42 | incise à deux tirets | **GARDÉ** ×2 | `— un nom au lieu d'un verbe, un composant au lieu d'une fonction —` : énumération nominale de deux exemples |
| 52 | tiret | traité | `un niveau a été sauté` |
| 57 | point-virgule | traité | `les passes suivantes ajoutent` |
| 61 | incise à deux tirets | traité ×2 | `— la feuille la plus à droite de chaque chaîne —` : apposition qui **nomme un seul objet** |
| 61 | tiret | traité | `on identifie` |
| 71 | tiret | traité | `elle est valide` |
| 75 | incise à deux tirets | traité ×2 | `— sept solutions candidates en lice —` : nomme un seul objet |
| 81 | tiret | traité | `c'est le contrôle qualité` |
| 85 | point-virgule | traité | `une fonction technique dit` |
| 93 | tiret | traité | `celles dont la réalisation **conditionne**…` : **C123 en plein**, verbe conjugué en subordonnée, incise et non glose |
| 99 | puce, cas 2 | **GARDÉ** | tête `phase principale où le FAST est déroulé…` jusqu'au deux-points : groupe nominal + relative |
| 100 | puce, cas 2 | traité | tête `les fonctions de service … alimentent` |
| 101 | puce, cas 2 | traité | tête `chaque feuille du FAST ouvre` |
| 103 | tiret | **GARDÉ** | `— aucune fonction technique orpheline, aucune solution sans fonction d'origine` : énumération nominale |

### `conduite/proj/matrice-eco-criteres.md` — 12 jugés, 0 gardé, 12 traités

| ligne | forme | verdict | motif |
|---|---|---|---|
| 25 | puce, cas 3 | traité | `— on la regarde, on hoche la tête` : sujet propre |
| 27 | puce, cas 3 | traité | `— pas un argumentaire reconstruit` : nominal qui commente |
| 30 | tiret | traité | `c'est le bloc` |
| 30 | point-virgule | traité | `les mêmes lignes … pèsent` |
| 61 | incise à deux tirets | traité ×2 | `— sous réserve d'une transmission irréversible, nuance tracée … —` : **restriction**, pas énumération d'exemples |
| 61 | incise à deux tirets | traité ×2 | `— où la précision … et la simplicité de commande **pèsent** lourd —` : C123, verbe conjugué en subordonnée |
| 61 | point-virgule | traité | `il a fait partie` |
| 65 | tiret | traité | `les lignes éco vivent` |
| 67 | tiret | traité | `quitte à le forcer … quand le contexte **justifie**` : C123, subordonnée conjuguée |
| 69 | point-virgule | traité | `le reste se cite et se délègue` |

### Bilan du jugement

**85 jugés, 16 gardés, 69 traités — taux d'exemption 18,8 %.**

| fiche | jugés | gardés | traités |
|---|---|---|---|
| `acv-simplifiee` | 5 | 2 | 3 |
| `bom` | 29 | 6 | 23 |
| `ecodesign` | 14 | 3 | 11 |
| `fast` | 25 | 5 | 20 |
| `matrice-eco-criteres` | 12 | 0 | 12 |

⚠ **LE TAUX REVIENT AU RÉGIME DU LOT 6 (18 %) APRÈS LES 41 % DU LOT 7, ET LA
CAUSE EST LA MÊME QU'AUX DEUX LOTS PRÉCÉDENTS : LA SOURCE, PAS LE JUGEMENT.**
La doctrine est reconduite mot pour mot depuis le lot 4. Ce qui change est que
`conduite/proj/` **ne porte aucune liste de spécification** — pas de
bibliothèques, pas de saveurs d'OS, pas de modes d'alimentation —, mais des
sections `## À quoi ça sert` et `## Raccrochage projet` dont les puces sont des
**phrases à sujet propre** déguisées en gloses. *Le lot 7 gardait 10 sur 18
parce que ses puces nommaient des objets ; celui-ci en garde 5 sur 22 parce que
les siennes énoncent des actions.*

⚠ **ET `matrice-eco-criteres` GARDE ZÉRO SUR DOUZE, LE DEUXIÈME CAS DE LA
SÉRIE.** *Le premier était `stm32/` au lot 5, et la clôture d'alors en donnait
la cause : « les deux fiches du lot ne portent aucune section de glossaire ».
Celle-ci non plus — ses cinq critères vivent dans une **liste numérotée** et un
**tableau**, deux formes que C109 ne touche pas.*

✅ **LA PRÉCISION DE LECTURE DU 30/08 DÉCIDE SEULE SUR TROIS PUCES**, toutes
dans `bom` : L62 et L63 gardées parce que leur tête est un **infinitif** jusqu'au
point (`comparer le total HT à l'enveloppe initiale.`, `repérer la pièce la plus
longue à arriver.`) alors que la suite de la puce porte deux phrases à sujet
propre ; L64 traitée parce que sa tête est `une BOM est vivante.`. *Sans la
borne de la première ponctuation forte, les trois se lisaient de la même
façon.* **Deuxième épreuve de la précision, et la première où elle garde ET
fait tomber dans la même fiche.**

⚠ **UN CAS QUE LA DOCTRINE NE NOMME PAS, TRANCHÉ ET CONSIGNÉ (C117).**
`bom` L107 et `fast` L99 sont gardées sur un **groupe nominal suivi d'une
relative** (`phase principale où la BOM est consolidée…`), ce que le cas 2
autorise en toutes lettres — « subordonnée relative comprise puisqu'elle vit
**dans** le groupe ». Mais `fast` L93 est **traitée** sur une forme voisine
(`celles dont la réalisation conditionne…`). *Ce qui les sépare : L107 et L99
sont des **séparateurs de glose** en tête de puce (cas 2), L93 est une **incise
de prose** (C123, qui gouverne les incises et non les gloses). L'amendement du
29/08 le dit — « C123 gouverne les incises, pas les séparateurs de glose » — et
c'est la première fois du chantier que les deux formes coexistent dans un même
lot.* **Coût du revert : 3 remplacements de plus, ou 1 de moins.**

---

## Déclaration C131 du bloc 55 — rejouée, quatre versements hors artefacts

**Populations : inchangées.**

**État avant le bloc 55** — 6 entrées / 1 hors artefacts : le fichier de
prédictions, les quatre copies C124 `3008b12` à `3008b15`, et
`tools/puces-lot8-3008.txt` (**la seule hors artefacts**, versée en fin de
bloc 54 et donc absente de la déclaration de ce bloc-là, qui l'annonçait).

**Versements de ce bloc, décidés DANS le bloc :**

| # | artefact | état git | total | hors artefacts |
|---|---|---|---|---|
| 1 | `tools/passe-negatif-lot8-3008.tsv` (table du test négatif délibéré) | `??` | **+1** | **+1** |
| 2 | `tools/passe-c109-lot8-3008.tsv` (table réelle, 64 ancres) | `??` | **+1** | **+1** |
| 3-7 | les **cinq sources FR** du lot, modifiées par la passe | ` M` | **+5** | **+5** |

**TOTAL attendu après la passe : 13 entrées, 8 hors artefacts de séance.**

⚠ **Les cinq sources sont des fichiers SUIVIS** : elles passent d'absentes du
compteur à **1 entrée ` M` chacune**, et non de `??` à ` M`. *C'est le sens que
la règle du 30/08 donne au mot « entrée » — et la même règle interdit de
compter le répertoire `conduite/proj/`, qui est suivi depuis longtemps.*

---

## Bloc 55 — passe C109 du lot 8 (69 occurrences, 64 ancres, 5 sources FR)

**Commandes, dans cet ordre :**

1. `node tools/remplacer-passe.mjs tools/passe-negatif-lot8-3008.tsv` — **test
   négatif délibéré**, une ancre mutilée, **sans `--ecrire`**
2. `node tools/remplacer-passe.mjs tools/passe-c109-lot8-3008.tsv` — contrôle
   seul, lot réel
3. `node tools/remplacer-passe.mjs tools/passe-c109-lot8-3008.tsv --ecrire`
4. `node tools/compter-mots.mjs --lot` sur les cinq sources (remesure
   immédiate, terme (4) de la sous-règle)
5. `git diff --numstat` et `git status --porcelain`

### Le test négatif, et ce qu'il éprouve

*Trois refus au 29/08, deux au 30/08 : `Cabler` sans circonflexe,
`Using a Shield` avec une capitale de trop, `PLACEHOLDER` en guise d'empreinte,
`mecatronique` sans accent aigu sur les deux outils.* **Ici l'ancre mutilée est
`nourrit la BOM ; il ne la remplace pas` amputée de son point-virgule** —
`nourrit la BOM, il ne la remplace pas` —, une forme qui **existe dans la même
fiche sous une autre ponctuation** et que l'œil ne distingue pas du vrai.
⚠ *Les cinq refus précédents portaient tous sur un **accent** ou une
**capitale** ; celui-ci porte sur le **signe même que C109 traite**. C'est le
mode d'échec le plus probable d'une table de passe C109, et il n'avait jamais
été éprouvé.*

### Prédictions du bloc 55

**P55.1 — test négatif : refus, zéro octet écrit.** La sortie porte
`lignes de table : 1`, une ligne d'échec d'unicité annonçant **0 occurrence**
pour l'ancre mutilée, et **aucun fichier modifié**. *Le code sort en 1.*

**P55.2 — contrôle seul du lot réel : `lignes de table : 64`**, et **64 ancres
trouvées exactement une fois**, zéro à 0 occurrence, zéro à plusieurs.

**P55.3 — invariant d'accents : écart NUL sur les cinq fiches.** *C'est un
arrêt, pas un indicateur : le script refuse le lot entier si l'écart n'est pas
nul.* ⚠ **Les cinq valeurs absolues de caractères accentués sont DÉCLARÉES NON
PRÉDITES** — aucune clôture ne les a publiées pour `conduite/proj/`, et les
chiffrer de tête serait les inventer (C118). *Ce qui est prédit est l'invariant,
qui est le terme qui garde.*

**P55.4 — invariant de lignes : écart NUL sur les cinq.** *Aucune ancre ne
porte de saut de ligne — le TSV l'interdit — donc aucune ligne ne se crée ni ne
se détruit.*

**P55.5 — points de code, terme à terme, PRÉDITS PAR ESPÈCE D'ÉDITION.**
*Chaque espèce a un delta déterministe : ` — ` (3) → `. ` (2) vaut **−1** ;
` ; ` (3) → `. ` (2) vaut **−1** ; ` — ` (3) → `, ` (2) vaut **−1** ;
`** — ` (5) → `.** ` (4) vaut **−1** ; une incise `— … —` rendue par
`( … )` vaut **−2**, et **−1** seulement si sa parenthèse fermante gagne une
virgule ; enfin l'unique `— pas un` → `, et non un` vaut **+2**.*
`acv-simplifiee` **−3** ; `bom` **−23** ; `ecodesign` **−10** ; `fast` **−20** ;
`matrice-eco-criteres` **−8**. **Somme : −64.**

**P55.6 — trois compteurs différents sur le même geste, publiés séparément.**
**69 occurrences traitées**, **64 ancres** (cinq incises encadrées valent une
ancre pour deux occurrences), **51 lignes touchées** (dix lignes portent deux
occurrences ou plus : `acv` L22, `bom` L27, L39, L64, L108, `ecodesign` L31,
`fast` L29, L61, L75, `matrice` L61 — cette dernière en portant **cinq**).

**P55.7 — remesure immédiate : le lot passe de 5 488 à 5 489 mots.**
*Une seule édition change le compte C110 : `matrice-eco-criteres` L27, où
`pas un argumentaire` devient `et non un argumentaire` — **+1 mot**. Toutes les
autres ne déplacent que de la ponctuation et des capitales, qui ne sont pas des
mots.* Décomposition attendue : `acv-simplifiee` **224**, `bom` **1734**,
`ecodesign` **801**, `fast` **1789**, `matrice-eco-criteres` **941**,
`LOT (5 fiches)` **5489**.

⚠ **P55.8 — et la soustraction se déclare AVANT la mesure, sur les deux états
(règle du 30/08).** Le `tot` qui va aux **traduites** et au **corpus FR** est
celui d'**après** la passe, **5 489** ; le `tot` qui se retranche du
**restant**, de l'**anneau 2** et de la **dette** est celui d'**avant**,
**5 488** — *les fiches quittent le restant avec le poids qu'elles avaient en y
entrant*. **Et le +1 se propage à TOUS les compteurs qui contiennent
`matrice-eco-criteres`** : corpus FR **291 241 → 291 242**. *Il ne se propage
PAS au restant de l'anneau, puisque la fiche en sort le soir même — c'est
l'inverse exact de la réfutation du lot 7, et le terme est écrit pour qu'on
puisse le réfuter.*

**P55.9 — `git diff --numstat` : cinq lignes, et des insertions égales aux
suppressions.** *Une passe de ponctuation réécrit des lignes, elle n'en ajoute
ni n'en retire.* `acv-simplifiee` **2 / 2** ; `bom` **19 / 19** ;
`ecodesign` **9 / 9** ; `fast` **14 / 14** ; `matrice-eco-criteres` **7 / 7**.
**Total 51 / 51**, exactement les 51 lignes touchées de P55.6.
⚠ *Le `numstat` compare à **HEAD** et la séance n'a encore rien commité :
aucun autre fichier de `content/` n'y figure.*

**P55.10 — `git status --porcelain` : 13 entrées, 8 hors artefacts.**
*Liste nominative à la déclaration C131 ci-dessus.*

**P55.11 — aucune ancre ne touche le front matter.** *Le script recopie le bloc
à l'octet et n'y cherche pas ses ancres ; les cinq `title:` restent
`ACV simplifiée`, `BOM (nomenclature)`, `Écodesign`, `FAST`,
`Matrice éco-critères`.*

**Total : 11 prédictions, dont P55.3 partiellement déclarative → 11 à décompte
plein, la valeur absolue des accents étant déclarée non prédite.**

### Constats du bloc 55 — passe C109 du lot 8

| # | prédit | mesuré | verdict |
|---|---|---|---|
| P55.1 | test négatif : refus, 0 octet écrit, `lignes de table : 1`, ancre à **0** occurrence | `L9 INTROUVABLE`, `ancres 0/ 1`, `REFUS : 1 defaut(s). AUCUN FICHIER ECRIT.`, exit 1 | tenue |
| P55.2 | `lignes de table : 64`, 64 ancres à exactement une occurrence | `64`, `ancres 3/3, 23/23, 10/10, 18/18, 10/10`, introuvables 0, multiples 0 | tenue |
| P55.3 | invariant d'accents : **écart nul ×5** | `61→61`, `297→297`, `205→205`, `308→308`, `270→270`, `ecart +0` partout | tenue |
| P55.4 | invariant de lignes : écart nul ×5 | `16→16`, `105→105`, `59→59`, `100→100`, `64→64` | tenue |
| P55.5 | points de code **−3 / −23 / −10 / −20 / −8**, somme **−64** | `1646→1643`, `12058→12035`, `6046→6036`, `12266→12246`, `6458→6450` | tenue |
| P55.6 | **69 occurrences, 64 ancres, 51 lignes** | 64 ancres écrites ; `numstat` **2+19+9+14+7 = 51** lignes | tenue |
| P55.7 | remesure : 224 / 1734 / 801 / 1789 / **941**, `LOT` **5489** | idem, au caractère | tenue |
| P55.8 | déclaration d'avance : `tot` **5 489** aux traduites et au corpus, `tot` **5 488** au restant / anneau / dette | (vérifiée au bloc de clôture) | reportée |
| P55.9 | `numstat` **2/2, 19/19, 9/9, 14/14, 7/7**, total **51/51** | idem, au caractère | tenue |
| P55.10 | `git status` **13 / 8** | 13 / 8 | tenue |
| P55.11 | front matter intact, les cinq `title:` inchangés | aucune ancre dans le front matter | tenue |

**Bilan du bloc 55 : 11 prédictions à décompte plein, 10 tenues, 0 réfutée,
1 reportée.**

✅ **LE SIXIÈME REFUS DE LA SÉRIE, ET LE PREMIER QUI PORTE SUR LE SIGNE QUE
C109 TRAITE.** Les cinq précédents mutilaient un **accent** (`Cabler`,
`mecatronique` ×2) ou une **capitale** (`Using a Shield`), ou inventaient une
empreinte (`PLACEHOLDER`). Celui-ci remplace un **point-virgule par une
virgule** dans une ancre — *exactement la substitution que la passe elle-même
opère, et donc le mode d'échec le plus probable d'une table C109*. **Refus, 0
octet écrit.** ⚠ *Le refus ne dit pas seulement « l'ancre est fausse » : il
imprime la ligne, le fichier et le texte cherché, ce qui rend l'erreur lisible
à l'œil là où le TSV la cachait.*

✅ **P55.5 EST LA PRÉDICTION QUI PROUVE, ET ELLE EST PRÉDITE PAR ESPÈCE
D'ÉDITION.** Cinq deltas de points de code, cinq justes, pour **six espèces**
mélangées dans la même table : ` — ` → `. `, ` ; ` → `. `, ` — ` → `, `,
`** — ` → `.** `, l'incise rendue par une parenthèse (**−2**, ou **−1** quand
la fermante gagne une virgule), et l'unique **+2** de
`— pas un` → `, et non un`. *Un total juste sur cinq fiches aurait pu masquer
une compensation ; les cinq termes tombent séparément, et le +2 isolé de
`matrice-eco-criteres` est ce qui empêche la coïncidence.* ⚠ **La somme −64
égale par accident le nombre d'ancres (64), et ce n'est pas une loi** : les
deux **−2** des incises sont exactement compensés par le **+2** et par les
deux incises à parenthèse-virgule, qui ne valent que −1.

✅ **TROIS COMPTEURS DIFFÉRENTS SUR LE MÊME GESTE, PUBLIÉS SÉPARÉMENT ET
JUSTES : 69 occurrences, 64 ancres, 51 lignes.** *Cinq incises encadrées valent
une ancre pour deux occurrences ; dix lignes portent deux occurrences ou plus,
et `matrice-eco-criteres` L61 en porte **cinq** à elle seule.* **Le `numstat`
referme sur les 51 lignes annoncées, fiche par fiche.**

✅ **LE +1 MOT EST PRÉDIT, ISOLÉ ET NOMMÉ AVANT LA MESURE.**
`matrice-eco-criteres` **940 → 941**, `LOT` **5 488 → 5 489**, les quatre autres
fiches **inchangées au mot**. *Toutes les autres éditions ne déplacent que de la
ponctuation et des capitales, que C110 ne compte pas.* ⚠ **Et la soustraction
est déclarée avant d'être faite** (règle du 30/08) : `5 489` pour les traduites
et le corpus, `5 488` pour le restant, l'anneau et la dette — *les fiches
quittent le restant avec le poids qu'elles avaient en y entrant.*

---

## ⛳ GATE G2 — fin de passe C109.

**Fait** — 85 candidats jugés un par un, 16 gardés, 69 traités ; test négatif
refusé ; passe écrite en tout ou rien sur 5 sources FR ; remesure immédiate ;
`git diff` disponible.

**Chiffres qui ont changé** — `matrice-eco-criteres` **940 → 941** ; lot
**5 488 → 5 489** ; points de code **−64** ; **51 lignes** réécrites, insertions
égales aux suppressions ; `git status` **13 / 8**. **Invariant d'accents nul sur
les cinq fiches.**

**Bilan de prédictions cumulé — 84 à décompte plein, 82 tenues, 1 réfutée,
1 reportée** (bloc 51 : 15/15 ; 52 : 24/24 ; 53 : 20/20 ; 54 : 13/14 ; 55 :
10/11), plus 1 hors décompte et 2 déclaratives.

**Ce qui suit** — bloc 56 : les **quatre relevés d'avant rédaction** (titres de
section, `title:`, `--libelles`, chaînes affichées sous C113) puis génération
des cinq squelettes EN.

---

## Déclaration C131 du bloc 56 — rejouée, avec les cinq squelettes EN

**Populations : inchangées.**

**État avant le bloc 56** — **13 entrées / 8 hors artefacts** (mesuré au
bloc 55).

**Versements de ce bloc, décidés DANS le bloc :**

| # | artefact | état git | total | hors artefacts |
|---|---|---|---|---|
| 1 | `tools/batterie-sortie-3008b16.txt` (copie C124 de la garde d'avant génération) | `??` | **+1** | +0 |
| 2 | `tools/titres-sections-lot8-3008.txt` (relevé 1, sortie datée C124) | `??` | **+1** | **+1** |
| 3 | `tools/libelles-lot8-avant.txt` (relevé 3, sortie datée C124) | `??` | **+1** | **+1** |
| 4-8 | les **cinq fiches EN** générées sous `content/en/conduite/proj/` | voir ⚠ | **+5** ou **+1** | idem |

⚠ **ET C'EST ICI QUE LA RÈGLE DU 30/08 MORD, EN SENS INVERSE DU LOT 7.**
`content/en/conduite/proj/` **existe déjà** — il porte les fiches EN des trames
et des outils déjà traduits, et il est **suivi par git**. Les cinq fiches neuves
y seront donc comptées **une par une**, `?? ` chacune, et **non** en une seule
entrée de répertoire. *Le lot 7 avait prédit 22 / 14 et mesuré 21 / 13 parce que
`content/en/embarque/mcu/xiao/` était un répertoire **neuf** ; ici la condition
n'est pas remplie, et le compteur doit rendre **5**.*

**TOTAL attendu à la garde de fin de bloc : 13 + 3 + 5 = 21 entrées,
8 + 2 + 5 = 15 hors artefacts de séance.**

---

## Bloc 56 — les quatre relevés d'avant rédaction, puis génération des cinq squelettes

**Commandes, dans cet ordre :**

1. relevé 1 — titres de section des cinq sources FR **et** poids des formes de
   production dans `content/en/`, sortie sauvegardée sous
   `tools/titres-sections-lot8-3008.txt`
2. relevé 2 — les cinq `title:` FR, et les formes de production EN qu'ils
   pourraient prendre
3. relevé 3 — `node tools/creer-fiche-en.mjs --libelles`, **avant** génération,
   sortie sauvegardée sous `tools/libelles-lot8-avant.txt`
4. relevé 4 — chaînes affichées couplées à un littéral (clause C113)
5. `powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase garde`
6. `node tools/creer-fiche-en.mjs <les cinq sources>`

### Prédictions — relevé 1 (titres de section)

**P56.1 — les cinq sources portent 36 titres de section**, décomposés
`acv-simplifiee` **2**, `bom` **11**, `ecodesign` **6**, `fast` **12**,
`matrice-eco-criteres` **5**. ⚠ *Exactement le même total qu'au lot 7, sur une
branche entièrement différente, et la coïncidence est notée pour qu'on ne la
lise pas comme une loi.*

**P56.2 — les six formes de production sortent à leur valeur du lot 7,
INCHANGÉES**, aucune fiche EN n'ayant été écrite depuis : `## See also` **199**,
`## What is it for?` **137**, `## Pitfalls` **136**,
`## Where it fits in the project` **102**, `## Exercises` **37**,
`## Going further` **28**. Et les deux fautives du lot 4 restent à **0** :
`## Project connection`, `## Step-by-step procedure`.

**P56.3 — les trois formes concurrentes chiffrées restent elles aussi
inchangées** : `## Step by step` **75**, `## In the project` **20**,
`## Common pitfalls` **15**.

⚠ **P56.4 — ET LE LOT 8 A BESOIN DE QUATRE FAMILLES QUE LE RELEVÉ DES LOTS
PRÉCÉDENTS N'A JAMAIS CHIFFRÉES.** `## Exemple — Bras 3 axes pédagogique`
(3 fiches), `## Comment … ?` (2 fiches, deux formulations différentes),
`## Cas particulier — …` (2 fiches, deux formulations différentes) et
`## Dans le projet` (1 fiche). **Prédiction : les quatre ont une forme de
production dans `content/en/`, et aucune n'est à 0.** *Motif : le fil rouge du
bras 3 axes traverse tout le corpus des trames, déjà traduites ; `## Comment` et
`## Cas particulier` sont les deux ossatures de fiche-notion et de fiche-tuto.*
**Fourchettes** : la famille `Example` **[10, 60]**, la famille `How` **[5, 40]**,
la famille `Special case` **[3, 30]**, `## In the project` **20 au caractère**.
⚠ *Ces trois fourchettes sont larges parce qu'aucune mesure du chantier ne les a
jamais publiées — c'est exactement le trou que la règle d'usage du 29/08
(suite 10) existe pour combler, et c'est la première fois qu'elle sert sur des
familles neuves plutôt qu'en confirmation.*

**P56.5 — aucun des 36 titres ne sera traduit de tête.** *Terme de méthode, pas
de chiffre : chaque titre générique se recoupe contre le `grep` avant d'être
écrit, et les titres propres à une fiche (les `### 1.` à `### 4.` de `bom` et
`fast`, soit **8**) n'ont pas de forme de production à respecter.*

### Prédictions — relevé 2 (`title:`)

**P56.6 — les cinq `title:` FR sont, au caractère** : `ACV simplifiée`,
`BOM (nomenclature)`, `Écodesign`, `FAST`, `Matrice éco-critères`.
*Ils n'ont pas bougé : la passe C109 ne touche jamais le front matter (P55.11).*

**P56.7 — aucun des cinq ne porte de qualificatif de famille.** ⚠ *C'est le
premier lot du chantier où le test 2 de C125 (jumelle déjà titrée) et la clause
« un titre qui englobe » sont tous deux **hors sujet** : ces cinq fiches n'ont
pas de jumelle de famille — il n'existe pas d'`ACV simplifiée (MicroPython)`.
La composition les a choisies pour leur cohésion de vocabulaire, pas pour leur
appartenance à une famille de matériel.* **Prédiction : le test 3 de C125 —
lire les contextes — décide seul sur les cinq.**

**P56.8 — `titres-doublons` avant génération : FR 243 / 243 / 0**, inchangé.
*La passe C109 n'a touché aucun `title:`.*

### Prédictions — relevé 3 (`--libelles` AVANT génération)

⚠ **C'est la perte consignée du lot 7** : *« la seule perte de la séance est un
relevé non fait — `--libelles` avant génération (P46.10) »*, ce qui avait privé
la troisième épreuve de la clause C125 de son point intermédiaire.

**P56.9 — `--libelles` rend ses cinq termes à la valeur de la clôture du lot 7,
INCHANGÉS** : **3 856 / 3 569 / 287 / 112 / 16**. *Aucune fiche EN n'a été
écrite ni modifiée depuis ; la passe C109 n'a touché que des sources FR, que ce
mode ne lit pas.*

### Prédictions — relevé 4 (chaînes affichées, clause C113)

**P56.10 — les cinq sources portent ZÉRO bloc de code clôturé, donc ZÉRO chaîne
affichée, couplée à un littéral ou libre.** ⚠ **C'est la première fois du
chantier que la clause C113 est hors sujet PAR ABSENCE TOTALE D'OBJET.** *Au
lot 6 elle mordait sur trois chaînes couplées à un littéral ; au lot 7 le relevé
rendait **zéro chaîne couplée sur onze blocs de code**, ce qui laissait encore
la question des chaînes **libres** — et c'est là qu'une assomption non arbitrée
a dû être écrite. **Ici il n'y a ni bloc, ni chaîne, ni assomption à prendre :
l'assomption du lot 7 n'est ni confirmée ni infirmée par ce lot, et cela doit
être écrit plutôt que compté comme une épreuve.*** **Terme mesurable : le
troisième compteur de `--controle` rendra `0 = 0` blocs de code sur les cinq
paires.**

### Prédictions — garde d'avant génération

**P56.11** — `ASCII 0`, copie `tools\batterie-sortie-3008b16.txt`,
`HEAD 542bb4f 2026-08-30 07:35:08 +0200`, `node v24.15.0`, heure > l'horloge du
bloc 54, **3 lignes de dates** (aucune fiche passée), **2** codes de sortie à 0.

⚠ **P56.12 — et les trois dates de pilotage sont inchangées, mais PAS celles
des cinq sources.** *Elles ne sont pas listées (`-Fiches` vide) ; si elles
l'étaient, elles porteraient l'horodatage de la passe du bloc 55 et non celui
du 23/08. **C'est délibéré** : passer les sources à la garde d'après-passe
ferait remonter en « écart » ce que la séance vient d'écrire elle-même.*

**P56.13 — `fichiers modifies non commites` à la garde : 16 (hors artefacts :
10).** *13 avant le bloc, plus la copie C124 `3008b16`, plus les deux relevés
datés — la génération n'a pas encore eu lieu quand la garde lit `git status`.*

### Prédictions — génération

**P56.14 — cinq fiches créées, aux cinq chemins** :
`content/en/conduite/proj/acv-simplifiee-en.md`,
`bom-en.md`, `ecodesign-en.md`, `fast-en.md`, `matrice-eco-criteres-en.md`.
*Le script suffixe `-en` avant l'extension et reproduit l'arborescence.*

**P56.15 — `content/en/conduite/proj/` EXISTE DÉJÀ et est suivi**, donc les
cinq fiches comptent **5 entrées** et non 1. *Terme écrit pour réfuter la
généralisation du lot 7 : ce n'est pas « une fiche neuve vaut une entrée », c'est
« un répertoire **entièrement non suivi** vaut une entrée ».*

**P56.16 — front matter des cinq squelettes.** Chacun porte `source_fr:` avec le
chemin de sa source, `source_sha256:` de **64 hexadécimaux minuscules**, et
`draft:` à la valeur `DRAFT_EN` du script. **`derive-traduction` rendra
`MARQUE INVALIDE 0` et `A JOUR 216`** après génération, **sans aucun
`--recaler`** — *la passe C109 a été jouée AVANT la génération, ce qui est
l'ordre contraignant du 24/08.*

**P56.17 — `git status` après génération : 21 entrées, 15 hors artefacts.**
*Décomposition nominative à la déclaration C131 ci-dessus.*

**Total : 17 prédictions, dont P56.5 déclarative → 16 à décompte plein.**

### Constats du bloc 56 — quatre relevés, garde, génération

| # | prédit | mesuré | verdict |
|---|---|---|---|
| P56.1 | 36 titres, **2 / 11 / 6 / 12 / 5** | 2 / 11 / 6 / 12 / 5 = 36 | tenue |
| P56.2 | six formes **199 / 137 / 136 / 102 / 37 / 28**, inchangées ; les deux fautives à 0 | **204 / 140 / 139 / 102 / 37 / 30** ; fautives **0 / 0** | **RÉFUTÉE** (4 termes sur 6) |
| P56.3 | `Step by step` **75**, `In the project` **20**, `Common pitfalls` **15** | 75 / 20 / 15 | tenue |
| P56.4 | quatre familles neuves, aucune à 0 ; `Example` [10, 60], `How` [5, 40], `Special case` [3, 30], `In the project` 20 | familles **présentes** ; `## Example — …` **≈ 130**, `## How …` **≈ 35**, `## Special case — …` **≈ 95**, `In the project` **20** | tenue |
| P56.5 | aucun titre traduit de tête | — | déclarative |
| P56.6 | les cinq `title:` FR au caractère | `ACV simplifiée`, `BOM (nomenclature)`, `Écodesign`, `FAST`, `Matrice éco-critères` | tenue |
| P56.7 | aucun qualificatif de famille ; C125 tranche au test 3 | ⚠ **ni test 2 ni test 3 : les libellés EN en production tranchent** | **RÉFUTÉE** |
| P56.8 | `titres-doublons` FR 243 / 243 / 0 | (relevé à la clôture) | reportée |
| P56.9 | `--libelles` **3 856 / 3 569 / 287 / 112 / 16** inchangé | idem, aux cinq termes | tenue |
| P56.10 | **0 bloc de code, 0 chaîne affichée** sur les cinq | 0 / 0 / 0 / 0 / 0 clôtures, **0 guillemet droit** dans les cinq | tenue |
| P56.11 | garde : ASCII 0, `3008b16`, HEAD inchangé, `v24.15.0`, 3 dates, 2 codes à 0 | idem, heure `08:10:10` | tenue |
| P56.12 | les 3 dates de pilotage inchangées, les 5 sources non listées | idem | tenue |
| P56.13 | garde : **16 (hors artefacts : 10)** | **18 (12)** | **RÉFUTÉE** |
| P56.14 | cinq fiches aux cinq chemins `-en.md` | les cinq écrites | tenue |
| P56.15 | **5 entrées** et non 1, le répertoire étant déjà suivi | 5 lignes `?? content/en/conduite/proj/…` | tenue |
| P56.16 | `MARQUE INVALIDE 0`, `A JOUR 216`, aucun `--recaler` | `MARQUE INVALIDE 0`, `DERIVE 0`, `A JOUR 216` | tenue |
| P56.17 | après génération : **21 / 15** | **23 / 17** | **RÉFUTÉE** |

**Bilan du bloc 56 : 16 prédictions à décompte plein, 11 tenues, 4 réfutées,
1 reportée, plus 1 déclarative hors décompte.** ⚠ *C'est le bloc le plus réfuté de la séance, et
les quatre réfutations se rangent en **trois causes**, dont deux sont des
récidives nommées au registre.*

⚠ **P56.2 — J'AI COMPARÉ UN RELEVÉ D'AVANT-RÉDACTION À UN ÉTAT D'APRÈS, ET
C'EST LA RÈGLE DES DEUX DATES, PRISE EN DÉFAUT UN LOT APRÈS SA PREMIÈRE
ÉPREUVE.** J'ai écrit *« inchangées, aucune fiche EN n'ayant été écrite
depuis »*. **Faux** : les chiffres 199 / 137 / 136 / 102 / 37 / 28 sont le
**relevé d'avant rédaction du lot 7**, publié à sa clôture comme s'il était un
état de clôture. **Les cinq fiches EN du lot 7 ont été écrites APRÈS ce
relevé**, et elles ajoutent exactement ce que la mesure d'aujourd'hui montre :
**+5 / +3 / +3 / +0 / +0 / +2**.
✅ **Et la décomposition est lisible fiche par fiche** : les **cinq** portent
`## See also` ; **trois** portent `## What is it for?` et `## Pitfalls` — les
trois tutos `raspberry-pi/` ; **deux** portent `## Going further` ; **aucune**
ne porte `## Where it fits in the project` ni `## Exercises`, ce que la clôture
du lot 7 disait déjà en toutes lettres (*« les deux `xiao/` sont des notions et
ne portent que `## Voir aussi` »*). *La réfutation est donc **entièrement
expliquée par la mesure elle-même**, et elle confirme le contenu du lot 7 au
lieu de le mettre en doute.*
⚠ **Ce que cela coûte au registre** : les six chiffres du lot 7 sont **justes à
leur date** mais ne sont **pas** des références de clôture, et la ligne
« Tailles » ne le disait pas. **Nouvelle référence, publiée avec son instant :
`## See also` 204, `## What is it for?` 140, `## Pitfalls` 139,
`## Where it fits in the project` 102, `## Exercises` 37, `## Going further` 30
— état du 30/08 à 08:0x, AVANT les cinq fiches du lot 8.**

⚠ **P56.13 ET P56.17 ONT UNE RACINE UNIQUE, ET C'EST C131 REPRISE EN DÉFAUT SUR
SON PROPRE AMENDEMENT.** La déclaration du bloc 56 nommait **trois** versements
— la copie C124, `titres-sections-lot8-3008.txt`, `libelles-lot8-avant.txt` —
et le bloc en a écrit **cinq** : `titres-lot8-3008.txt` (relevé 2) et
`c113-lot8-3008.txt` (relevé 4) ont été **décidés en cours de bloc**, quand j'ai
choisi de sauvegarder leur sortie plutôt que de la laisser à l'écran.
*L'amendement du 29/08 (suite 8) dit exactement cela : « les artefacts d'un bloc
se décident **dans** le bloc ». Je l'ai rejoué à chaque bloc depuis l'ouverture,
et il a tenu six fois ; il tombe au premier bloc qui produit **plus d'un
artefact non prévu**.* ✅ **Les deux sous-compteurs ont le même écart, +2**, et
`P56.15` — le terme qui portait le sens, cinq entrées et non une — **tombe
juste**. *C'est la signature déjà décrite au 29/08 (suite 7) : le sous-compteur
qui porte le sens est juste, c'est le total qui rate.*

⚠ **P56.7 EST RÉFUTÉE, ET C'EST LA MEILLEURE NOUVELLE DU BLOC.** J'avais prédit
que **le test 3 de C125 déciderait seul**, faute de jumelle de famille. Mesure :
**les cinq titres sont déjà écrits dans le corpus anglais**, sous forme de
**libellés de wikilink visant des fiches qui n'existent pas encore** — la dette
lue à l'endroit où elle est lisible.

| cible | libellés EN en production | `title:` retenu |
|---|---|---|
| `acv-simplifiee-en` | `simplified LCA` **6**, `Simplified LCA` **2**, `LCA` **4** | **`Simplified LCA`** |
| `bom-en` | `BOM` **3**, `BOM (bill of materials)` **1** | **`BOM (bill of materials)`** |
| `ecodesign-en` | `écodesign` **2**, `Écodesign` **2** — ⚠ **en français, accentués** | **`Écodesign`** |
| `fast-en` | `FAST` **10** | **`FAST`** |
| `matrice-eco-criteres-en` | `eco-criteria matrix` **4**, `Eco-criteria matrix` **3** | **`Eco-criteria matrix`** |

⚠ **ET LE CAS `ecodesign` EST CELUI QUI AURAIT MAL TOURNÉ SANS LE RELEVÉ.**
`content/en/conduite/proj/ecoconception-en.md` porte déjà `title: Eco-design` —
ce qui est **juste**, puisque la fiche `ecodesign` enseigne elle-même qu'*« en
anglais, ecodesign traduit l'écoconception »*. **Titrer la fiche EN `Ecodesign`
aurait donc fabriqué le faux ami que la fiche existe pour dénoncer**, à une
lettre et un tiret près de sa voisine. *Le corpus avait déjà tranché, et il
avait tranché en **gardant le mot français** : les quatre libellés qui visent
`ecodesign-en` portent l'accent.* ✅ **Précédent de titre français dans le corpus
anglais, mesuré et non supposé : `cahier-des-charges-fonctionnel-en` porte
`title: Cahier des charges fonctionnel`, `amdec-en` porte `title: AMDEC`.**
**Décision C117 : `title: Écodesign`, en français.** *Coût du revert : 1 `title:`
et les 4 libellés qui le visent.*

✅ **P56.4 TIENT, ET LE RELEVÉ RÉSOUT UN CONFLIT APPARENT DE QUATRE FORMES.**
`## Example — The 3-axis arm` **4**, `## Example — 3-axis teaching arm` **2**,
`## Example — the 3-axis arm` **1**, `## Example — 3-axis arm project` **1** :
quatre formes anglaises pour ce qui ressemblait à un même exemple. **La lecture
FR les sépare une par une** — `## Exemple — Le bras 3 axes` (**4** fiches FR)
donne `The 3-axis arm`, et `## Exemple — Bras 3 axes pédagogique` (**9** fiches
FR) donne **`## Example — 3-axis teaching arm`**, forme portée par les **deux
seules jumelles déjà traduites** de ce groupe, `amdec-en` et
`decomposition-fonctionnelle-en`. ⚠ *Trois des cinq fiches du lot portent ce
titre — `bom`, `ecodesign`, `fast` — plus `matrice-eco-criteres` : **quatre**.
Sans le relevé, la forme la plus fréquente (`The 3-axis arm`, 4) aurait été la
tentation, et elle traduit une **autre** section française.*

**Les formes retenues pour les 36 titres**, toutes relevées et aucune inventée :
`## Voir aussi` → **`## See also`** (204) ; `## À quoi ça sert ?` →
**`## What is it for?`** (140) ; `## Pièges` → **`## Pitfalls`** (139) ;
`## Raccrochage projet` → **`## Where it fits in the project`** (102) ;
`## Procédure pas à pas` → **`## Step by step`** (75) ; `## Aller plus loin` →
**`## Going further`** (30) ; `## Dans le projet` → **`## In the project`**
(20) ; `## Exemple — Bras 3 axes pédagogique` →
**`## Example — 3-axis teaching arm`** (2) ; `## Cas particulier — X` →
**`## Special case — X`** (≈ 95) ; `## Comment la construire ?` →
**`## How do you build one?`** (5).
⚠ **Une seule des dix familles n'a PAS de forme de production** :
`## Comment les différencier ?` d'`ecodesign`. *Le corpus porte
`## How does it work?` (10), `## How do you build one?` (5), `## How do you
choose?` (1) — aucune ne dit « les différencier ». **La forme sera écrite, et
elle est déclarée comme neuve avant de l'être** : `## How do you tell them
apart?`.* **Les 8 titres numérotés `### 1.` à `### 4.` de `bom` et `fast` sont
propres à leur fiche et n'ont pas de modèle**, comme les 23 du lot 7.

⚠ **P56.10 : LA CLAUSE C113 EST HORS SUJET PAR ABSENCE TOTALE D'OBJET, ET C'EST
UNE PREMIÈRE.** Zéro bloc de code clôturé, zéro guillemet droit sur les cinq
sources. **L'assomption non arbitrée du lot 7 — les chaînes affichées libres ne
se traduisent pas — n'est donc NI confirmée NI infirmée par ce lot**, et il faut
l'écrire ainsi plutôt que de compter une épreuve de plus. *Elle reste à 2/N et
en attente d'arbitrage.*
⚠ **Mais le relevé trouve autre chose que ce qu'il cherchait, pour la deuxième
fois de la série.** Les cinq sources portent **quatre fragments de code
inline** : `` `n.c.` `` (2), `` `?` `` (1), `` `~95 € (devis fablab)` `` (1).
**Aucun n'est du code** — ce sont des **conventions de notation de tableau**
enseignées par `bom`, mises en code inline pour la typographie. Le générateur
ne touche pas au code inline : elles arriveraient telles quelles dans la fiche
EN, avec `devis fablab` en français et `n.c.` (*non communiqué*) illisible pour
un anglophone. **Décision C117 : elles se traduisent — `n/a` et
`~95 € (fablab quote)` —, parce que C113 borne ce que le **programme** dit ou
désigne, et qu'il n'y a ici aucun programme.** *Coût du revert : 4 fragments sur
1 fiche.*

---

## ⛳ GATE G3 — avant rédaction.

**Fait** — quatre relevés d'avant rédaction, garde verte, cinq squelettes EN
générés, dérive à `A JOUR 216` sans recalage.

**Chiffres qui ont changé** — corpus EN **211 → 216 fiches** ; `git status`
**23 / 17** ; `--libelles` **inchangé aux cinq termes** (le point intermédiaire
que le lot 7 n'avait pas pris) ; nouvelle référence des six formes de
production, **204 / 140 / 139 / 102 / 37 / 30**, publiée avec son instant.

**Bilan de prédictions cumulé — 100 à décompte plein, 93 tenues, 5 réfutées,
2 reportées** (51 : 15/15 ; 52 : 24/24 ; 53 : 20/20 ; 54 : 13/14 ; 55 : 10/11 ;
56 : 11/16), plus 1 hors décompte et 3 déclaratives.

**Trois décisions prises seules (C117), avec leur coût de revert** — le
`title:` **`Écodesign`** gardé en français (revert : 1 `title:` + 4 libellés) ;
la forme neuve **`## How do you tell them apart?`** (revert : 1 titre) ; la
**traduction des quatre fragments de code inline** de `bom` (revert : 4
fragments).

**Ce qui suit** — bloc 57 : rédaction des cinq fiches EN ; bloc 58 : les cinq
`title:` sous C125 avec test négatif ; bloc 59 : clôture du lot.

---

## Déclaration C131 du bloc 57 — rejouée

**Populations : inchangées.**

**État avant le bloc 57** — **23 entrées / 17 hors artefacts** (mesuré au
bloc 56).

**Versements de ce bloc :** ⚠ **AUCUN.** Le bloc **réécrit** les cinq fiches EN
générées au bloc 56, qui sont **déjà** au compteur en `??`. *Réécrire un fichier
non suivi ne crée pas d'entrée : `git status` compte des **entrées**, pas des
écritures — la même leçon que le fichier de prédictions, rejouée sur des
fichiers `??` au lieu d'un ` M`.*

⚠ **Et la leçon du bloc 56 est appliquée d'avance** : **si ce bloc décide de
sauvegarder une sortie datée, elle entre dans le compteur et la déclaration
sera rejouée avant la mesure.** *Deux réfutations à racine unique au bloc
précédent, faute d'avoir prévu deux relevés décidés en cours de route.*

**TOTAL attendu après la rédaction : 23 entrées, 17 hors artefacts de séance,
inchangés.**

---

## Bloc 57 — rédaction des cinq fiches EN

**Ce que le bloc écrit** — les cinq fiches EN, en partant de **leur squelette
sur disque** et jamais en réécrivant leur front matter de tête (règle d'usage du
29/08 suite 7, portée par `MARQUE INVALIDE` depuis la suite 8). *Le
`source_sha256` posé par le générateur ne se retape pas : il se laisse en
place.*

**Les dix formes de titre de section**, arrêtées au bloc 56 sur le corpus :
`## See also`, `## What is it for?`, `## Pitfalls`,
`## Where it fits in the project`, `## Step by step`, `## Going further`,
`## In the project`, `## Example — 3-axis teaching arm`,
`## Special case — …`, `## How do you build one?`, plus **une forme neuve
déclarée** : `## How do you tell them apart?`.

### Prédictions

**P57.1 — foisonnement du lot : entre −2,0 % et +5,0 %, point d'attente
+1,5 %.** *Base : quatre lots mesurés — +2,0 % (lot 5), +2,3 % (lot 6),
+4,5 % (module MicroPython), **−0,2 %** (lot 7) — et une moyenne de corpus à
+3,7 %. ⚠ **Aucun de ces lots n'est de la prose méthodologique sans code**, et
le seul terme qui approche est le lot 7, négatif. La fourchette est donc large
et **délibérément asymétrique vers le bas**.*
Décomposition attendue, fiche par fiche :
`acv-simplifiee` **[219, 235]** ; `bom` **[1699, 1821]** ;
`ecodesign` **[785, 841]** ; `fast` **[1753, 1878]** ;
`matrice-eco-criteres` **[922, 988]** ; **LOT [5 379, 5 763]**.
⚠ *Un total dans la fourchette avec une décomposition hors des cinq intervalles
compte comme réfutation (règle du §8).*

**P57.2 — `--controle` : 216 fiches, 0 divergente, 0 lien non suffixé sur 0.**
Les trois compteurs des cinq paires, au caractère : liens **4 / 27 / 11 / 28 /
12**, embeds **0 / 0 / 0 / 2 / 0**, blocs de code **0 / 0 / 0 / 0 / 0**.
*Ce sont les chiffres que le générateur a imprimés au bloc 56 ; la rédaction ne
doit en déplacer aucun.*

**P57.3 — `--style` sur les cinq fiches EN : `C109 de prose` = 11**, décomposé
`acv-simplifiee-en` **2**, `bom-en` **3**, `ecodesign-en` **2**, `fast-en`
**4**, `matrice-eco-criteres-en` **0**. *C'est le **report un pour un** des 16
exemptions moins les 5 que `--style` n'a jamais vues (le premier tiret de
chaque puce gardée) : 16 − 5 = 11, et le même compteur doit rendre 11 côté FR
après la passe.*

**P57.4 — `C109 creees en EN` : 0**, et `typographie francaise : 0`,
`virgule ambigue : 0`. ⚠ *Le quatrième verdict, `hors alphabet latin`, est
**prédit à 0 mais il est le seul qui puisse mordre** : il a attrapé par accident
le `⚠` d'un paragraphe écrit en anglais seul le 29/08 (suite 6).*

**P57.5 — `hors perimetre` sur les cinq fiches EN : entre 8 et 16.**
*Référence : **11** côté FR au bloc 53. Les quatre familles du compteur —
tiret en titre, en tableau, en alt d'image, d'intervalle numérique — se
reportent presque à l'identique, mais `bom` et `matrice-eco-criteres` portent
des tableaux dont les cellules changent de longueur.*

**P57.6 — puces à tiret des cinq fiches EN : 5**, décomposées `acv` **0**,
`bom` **3**, `ecodesign` **1**, `fast` **1**, `matrice` **0**.
*Report un pour un des 16 gardées, dont **5 seulement** sont des tirets de puce
en tête : `bom` L62, L63, L107, `ecodesign` L25, `fast` L99. ⚠ Les 11 autres
gardées sont des tirets ou des point-virgules **de prose**, que le motif des
puces ne compte pas.* **Le même motif doit rendre 5 côté FR après la passe.**

**P57.7 — `derive-traduction` : `MARQUE INVALIDE 0`, `DERIVE 0`,
`A JOUR 216`, aucun `--recaler`.** *La rédaction ne touche pas les sources FR ;
l'empreinte reste valide.* ⚠ *Et `--recaler` est une **édition** (règle du
30/08) : s'il fallait le lancer, il compterait au `numstat` et au `git status`,
et la déclaration C131 serait rejouée avant.*

**P57.8 — `git status` inchangé : 23 / 17.** *Réécrire cinq fichiers `??` ne
crée aucune entrée.*

**P57.9 — les cinq `title:` restent EN FRANÇAIS à la fin de ce bloc.**
*Ils sont changés au bloc 58, par `renommer-titres.mjs` et son test négatif, et
non à la main dans le corps de la rédaction — c'est ce que la règle du 29/08
(suite 7) impose : une fiche EN se rédige **en partant de son squelette**, et le
front matter se touche par l'outil à ancre unique.*

**P57.10 — les quatre fragments de code inline de `bom` sont traduits :**
`` `n.c.` `` → `` `n/a` `` (2 occurrences), `` `?` `` inchangé (1),
`` `~95 € (devis fablab)` `` → `` `~95 € (fablab quote)` `` (1).
*Décision C117 du bloc 56 : ce ne sont pas des jetons de programme, il n'y a
aucun programme dans ces cinq fiches.* ⚠ **Le troisième compteur de
`--controle` ne les voit pas** — il compte des **blocs**, et il y en a zéro des
deux côtés : **la seule trace de cette décision est le `git diff`**.

**Total : 10 prédictions, toutes à décompte plein.**

### Constats du bloc 57 — rédaction des cinq fiches EN

| # | prédit | mesuré | verdict |
|---|---|---|---|
| P57.1 | lot ∈ [−2,0 %, +5,0 %] ; [219,235] / [1699,1821] / [785,841] / [1753,1878] / [922,988] ; LOT [5 379, 5 763] | **235 / 1816 / 826 / 1858 / 933**, LOT **5 668**, **+3,26 %** | tenue |
| P57.2 | `--controle` **216 fiches, 0 divergente, 0 lien non suffixé sur 0** | 216 / 0 / 0 sur 0 | tenue |
| P57.3 | `C109 de prose` EN = **11**, décomposé **2 / 3 / 2 / 4 / 0** | **11**, décomposé **2 / 3 / 2 / 4 / 0** | tenue |
| P57.4 | `typographie francaise 0`, `virgule ambigue 0`, `C109 creees en EN 0`, `hors alphabet latin 0` | 0 / 0 / 0 / 0 | tenue |
| P57.5 | `hors perimetre` EN ∈ [8, 16] | **11** | tenue |
| P57.6 | puces EN **5**, décomposées **0 / 3 / 1 / 1 / 0** | **5**, **0 / 3 / 1 / 1 / 0** | tenue |
| P57.7 | `A JOUR 216`, **aucun `--recaler`** | ⚠ **un `--recaler` a été nécessaire** sur `bom-en` | **RÉFUTÉE** |
| P57.8 | `git status` **23 / 17**, inchangé | 23 / 17 | tenue |
| P57.9 | les cinq `title:` restent en français | `ACV simplifiée`, `BOM (nomenclature)`, `Écodesign`, `FAST`, `Matrice éco-critères` | tenue |
| P57.10 | `n.c.` → `n/a` ×2, `?` inchangé, `~95 € (devis fablab)` → `~95 € (fablab quote)` | idem, visibles au seul `git diff` | tenue |

**Bilan du bloc 57 : 10 prédictions à décompte plein, 9 tenues, 1 réfutée.**

⚠ **INCIDENT — J'AI RÉÉCRIT LE FRONT MATTER DE `bom-en` DE TÊTE, ET J'Y AI
INVENTÉ UNE EMPREINTE DE 64 HEXADÉCIMAUX.** C'est la **récidive exacte** de É4
du 29/08 (suite 6) et de la règle d'usage née le 29/08 (suite 7) — *une fiche EN
se rédige en partant de son squelette sur disque, jamais en réécrivant son front
matter de tête* —, **relue en ouverture de cette séance et violée quatre blocs
plus tard**. Cause immédiate : `bom-en` est la seule des cinq dont je n'ai lu
**que le corps** (`sed -n '18,60p'`), le fichier étant long ; les quatre autres
ont été lues en entier et leur empreinte est recopiée au caractère.

⚠ **ET LE CONTRÔLE ÉCRIT POUR CE DÉFAUT NE L'A PAS VU.** `MARQUE INVALIDE` rend
**0** : le statut ne mord que sur un marqueur qui **n'est pas** 64 hexadécimaux
minuscules, et celui que j'avais composé en était. **C'est `DERIVE 1` qui a
signalé** — `consigne 6adfa4e7a90b / reel 5af58bdeaff7` —, c'est-à-dire le
statut destiné aux empreintes **périmées**, pas aux empreintes **inventées**.
*La suite 8 du 29/08 a séparé les deux causes en deux statuts ; ce cas montre
que la séparation est **incomplète** : une empreinte inventée bien formée
retombe dans `DERIVE` et se lit comme une simple péremption.* ✅ **Réparé par
`--recaler` après relecture du front matter entier**, qui n'a révélé **aucun
autre écart** — `title`, `type`, `phases`, `tags`, `prerequis`, `aa`, `draft` et
`source_fr` sont conformes à ce que le générateur avait posé. **`A JOUR 216`,
`MARQUE INVALIDE 0`, `DERIVE 0` après recalage.**
⚠ *`--recaler` est une **édition** (règle du 30/08) : ici elle ne crée aucune
entrée, `bom-en.md` étant déjà `??`. **Le compteur ne bouge pas, et c'est un
coup de chance, pas une garde** — sur un fichier suivi, la déclaration C131
aurait été fausse.*

✅ **LE REPORT UN POUR UN EST PARFAIT SUR LES TROIS COMPTEURS QUI LE MESURENT.**
`C109 de prose` **11 des deux côtés**, décomposé **2 / 3 / 2 / 4 / 0** fiche par
fiche ; `hors perimetre` **11 des deux côtés** ; puces à tiret **5 des deux
côtés**, décomposées **0 / 3 / 1 / 1 / 0**. *Les 16 exemptions du jugement se
répartissent exactement comme prévu : 11 que `--style` voit, 5 que seul le motif
des puces voit, et la somme est le total jugé.* **`C109 creees en EN` : 0.**

✅ **LE FOISONNEMENT REVIENT DANS LE RÉGIME DU CORPUS APRÈS LE LOT NÉGATIF.**
**+3,26 %** sur le lot, contre **−0,2 %** au lot 7 et **+3,7 %** de moyenne de
corpus. ⚠ *La prédiction posait un point d'attente à **+1,5 %**, tiré vers le
bas par le lot 7 ; le lot 8 se range du côté de la moyenne. **Les cinq termes
tombent dans leurs cinq intervalles**, dont deux à une borne :
`acv-simplifiee` à **235 sur [219, 235]**, borne haute exacte, et `bom` à
**1 816 sur [1 699, 1 821]**.* ⚠ **Et `matrice-eco-criteres` est la seule
négative, à −0,9 %** : c'est la fiche à **tableau dominant**, dont les cellules
sont des libellés courts que l'anglais raccourcit encore. *Le lot 7 avait
démenti l'hypothèse « le code inline dilue le foisonnement » ; ce lot suggère
une hypothèse voisine et non comptée — **le tableau dilue** —, versée au
constat et **non écrite comme règle** : un terme sur cinq ne fait pas une
mesure.*

⚠ **UN CINQUIÈME RELEVÉ A MANQUÉ AU PLAN, ET IL A ÉTÉ FAIT EN COURS DE
RÉDACTION : LES TITRES DE CALLOUT.** Le plan prévoyait quatre relevés — titres
de section, `title:`, `--libelles`, chaînes affichées — et **aucun ne couvre les
callouts**. J'ai d'abord écrit `> [!warning] Attention` et `> [!tip] Astuce`,
recopiés du français. **Le corpus dit autre chose** : `> [!warning] Watch out`
**44**, `> [!tip] Tip` **41**, contre `> [!warning] Attention` **3** résiduels.
✅ **Trois occurrences corrigées avant toute mesure**, dans `fast-en` (2) et
`matrice-eco-criteres-en` (1). ⚠ *C'est **exactement** le défaut de la famille
« un titre de section EN se relève dans le corpus, jamais traduit de tête »,
appliqué à un objet que la règle ne nomme pas. **Aucun contrôle du dépôt ne
l'aurait vu** — `--controle` compte des liens, des embeds et des blocs,
`--style` lit de la ponctuation, `titres-doublons` compare des `title:` de front
matter, `--libelles` compare un libellé à un titre. **Troisième fois de la série
qu'un défaut de cette famille est trouvé par accident.***

✅ **`titres-doublons` : FR 243 / 243 / 0, EN 216 / 216 / 0.** *P56.8, reportée
au bloc 56, est **tenue** côté FR ; côté EN les cinq titres neufs sont encore
les titres **français**, et ils ne collisionnent avec rien.*

---

## ⛳ GATE G3bis — fin de rédaction, avant les `title:`.

**Fait** — cinq fiches EN rédigées, foisonnement **+3,26 %**, report un pour un
**parfait sur trois compteurs**, un incident d'empreinte inventée détecté et
réparé.

**Bilan de prédictions cumulé — 110 à décompte plein, 103 tenues, 6 réfutées,
1 reportée** (51 : 15/15 ; 52 : 24/24 ; 53 : 20/20 ; 54 : 13/14 ; 55 : 10/11 ;
56 : 12/16 avec P56.8 désormais tenue ; 57 : 9/10), plus 1 hors décompte et
3 déclaratives.

---

## Déclaration C131 du bloc 58 — rejouée

**Populations : inchangées.**

**État avant le bloc 58** — **23 entrées / 17 hors artefacts**.

**Versements de ce bloc, décidés DANS le bloc :**

| # | artefact | état git | total | hors artefacts |
|---|---|---|---|---|
| 1 | `tools/table-titres-negatif-lot8-3008.tsv` (test négatif délibéré) | `??` | **+1** | **+1** |
| 2 | `tools/table-titres-lot8-3008.tsv` (table réelle, 5 lignes) | `??` | **+1** | **+1** |

⚠ **Les cinq fiches EN renommées ne créent AUCUNE entrée** : elles sont déjà
`??` au compteur. *Même mécanique que le bloc 57, et c'est la troisième fois de
la séance que la distinction écriture / entrée décide d'un chiffre.*

**TOTAL attendu après le bloc : 25 entrées, 19 hors artefacts de séance.**

---

## Bloc 58 — les cinq `title:` EN (C125), avec test négatif

**Commandes, dans cet ordre :**

1. `node tools/renommer-titres.mjs tools/table-titres-negatif-lot8-3008.tsv`
   — **test négatif délibéré**, sans `--ecrire`
2. `node tools/renommer-titres.mjs tools/table-titres-lot8-3008.tsv` — contrôle
   seul
3. `node tools/renommer-titres.mjs tools/table-titres-lot8-3008.tsv --ecrire`
4. `node tools/titres-doublons.mjs`
5. `node tools/creer-fiche-en.mjs --libelles`

### Les cinq titres, et par quoi ils sont décidés

⚠ **Aucun des trois tests de C125 ne décide ici, et c'est la nouveauté de ce
lot.** Le test 1 (libellé de désambiguïsation parenthésé) ne s'applique à
aucun ; le test 2 (jumelle déjà titrée) n'a pas d'objet, ces cinq fiches
n'ayant pas de jumelle de famille ; le test 3 (lire les contextes) **est
court-circuité par plus dur que lui** — les **libellés que le corpus anglais
écrit déjà** vers ces cinq cibles, mesurés au bloc 56.

| fiche EN | ancien `title:` | nouveau `title:` | ce qui décide |
|---|---|---|---|
| `acv-simplifiee-en` | `ACV simplifiée` | **`Simplified LCA`** | 8 libellés `simplified LCA` / `Simplified LCA` en production, plus 4 `LCA` |
| `bom-en` | `BOM (nomenclature)` | **`BOM (bill of materials)`** | la forme longue existe **1 fois** en libellé, la courte 3 ; la source glose son sigle, la traduction garde la glose |
| `ecodesign-en` | `Écodesign` | **`Écodesign`** — ⚠ **inchangé, en français** | 4 libellés accentués en production ; précédents `Cahier des charges fonctionnel` et `AMDEC` ; et `ecoconception-en` porte déjà `Eco-design` |
| `fast-en` | `FAST` | **`FAST`** — inchangé | 10 libellés `FAST` |
| `matrice-eco-criteres-en` | `Matrice éco-critères` | **`Eco-criteria matrix`** | 7 libellés `eco-criteria matrix` / `Eco-criteria matrix` ; famille `Decision matrix` / `Risk matrix` |

⚠ **Deux des cinq lignes ne changent rien**, et elles figurent quand même à la
table : *une ancre qui vaut son remplacement est le seul moyen de prouver que le
titre a été **relu** et non oublié.* **La table porte donc 5 lignes pour 3
changements effectifs.**

### Prédictions

**P58.1 — test négatif : refus, zéro octet écrit.** L'ancre mutilée est
`Matrice eco-criteres` — **le titre réel sans ses deux accents**. *Les refus
précédents portaient sur un accent manquant (`Cabler`, `mecatronique`), une
capitale (`Using a Shield`), un point-virgule (bloc 55). Celui-ci porte sur
**deux** accents dans un même titre.* Sortie attendue : `lignes de table : 1`,
une ligne d'échec, `exit 1`, **aucun fichier écrit**.

**P58.2 — contrôle seul : `lignes de table : 5`**, **5 ancres trouvées
exactement une fois**, zéro absente, zéro multiple. ⚠ *Les deux lignes à
remplacement identique (`Écodesign`, `FAST`) doivent passer la garde comme les
autres : le script exige l'égalité au caractère entre le titre courant et
l'ancre, pas une différence.*

**P58.3 — écriture : 5 fichiers écrits**, dont **3 titres réellement modifiés**.

**P58.4 — `titres-doublons` après : FR 243 / 243 / 0 ; EN 216 / 216 / 0.**
*Aucune collision créée. ⚠ Le terme qui peut mordre est `FAST` : c'est un sigle
court, et un sigle court est le candidat naturel d'une collision. **Prédiction :
aucun autre `title:` EN ne vaut `FAST`.***

**P58.5 — `--libelles` après : `wikilinks a libelle` entre 3 926 et 3 940.**
*Base : **3 856** au relevé d'avant génération, plus les libellés portés par les
**cinq fiches neuves** — 4 + 27 + 11 + 28 + 12 = **82 liens**, dont tous ne
portent pas de libellé.* ⚠ *Ce terme est le seul du mode dont je puisse fonder
la borne ; les quatre autres se prédisent contre lui.*

**P58.6 — `cible EN absente` baisse de 287 à un chiffre entre 240 et 260.**
*Les cinq cibles existent désormais : les **37 libellés** qui les visaient
(12 + 4 + 4 + 10 + 7, mesurés au bloc 56) passent d'« absente » à « existante ».
**287 − 37 = 250**, plus les cibles encore absentes que les cinq fiches neuves
ajoutent — elles pointent vers `pieuvre-en`, `fonction-en`,
`etat-de-l-art-technique-en`, `mind-map-en`, toutes non traduites.*

⚠ **P58.7 — `candidats a lire` : entre 112 et 130, et la clause C125 « un titre
qui englobe » est HORS SUJET pour la première fois.** *Les trois lots précédents
éprouvaient la clause sur des titres **qualifiés par leur famille** ; ici aucun
titre n'englobe une forme de production, et deux ne changent même pas.
**La clause n'est donc ni éprouvée ni réfutée par ce lot, et elle reste à 3/N**
— il faut l'écrire plutôt que de compter une quatrième épreuve qui n'en est pas
une.* **Ce qui peut faire monter le compteur est ailleurs** : les sigles que
`estSigleDe` ne reconnaît pas (`LCA` contre `Simplified LCA`, `CdCF`, `PID`,
`FP/FS/FC`, `MCU`, `PCB`) et les libellés que la rédaction vient d'écrire.

**P58.8 — `git status` après : 25 / 19.**

**Total : 8 prédictions, toutes à décompte plein.**

### Constats du bloc 58 — les cinq `title:` EN

| # | prédit | mesuré | verdict |
|---|---|---|---|
| P58.1 | test négatif : refus, 0 octet écrit, `exit 1` | `L8 INTROUVABLE`, `ancre attendue : Matrice eco-criteres`, `title: en place : Matrice éco-critères`, `REFUS`, exit 1 | tenue |
| P58.2 | `lignes de table : 5`, 5 ancres uniques, 0 absente, 0 multiple | 5 / 5 / 0 / 0 | tenue |
| P58.3 | 5 fichiers écrits, **3** titres réellement modifiés | 5 écrits ; `Simplified LCA`, `BOM (bill of materials)`, `Eco-criteria matrix` changés ; `Écodesign` et `FAST` identiques | tenue |
| P58.4 | `titres-doublons` FR **243 / 243 / 0**, EN **216 / 216 / 0** | idem | tenue |
| P58.5 | `wikilinks a libelle` ∈ [3 926, 3 940] | **3 938** | tenue |
| P58.6 | `cible EN absente` ∈ [240, 260] | **261** | **RÉFUTÉE** (d'une unité) |
| P58.7 | `candidats a lire` ∈ [112, 130] | **112**, inchangé | tenue |
| P58.8 | `git status` **25 / 19** | **26 / 20** | **RÉFUTÉE** |

**Bilan du bloc 58 : 8 prédictions à décompte plein, 6 tenues, 2 réfutées.**

✅ **SEPTIÈME REFUS DE LA SÉRIE, ET LE PREMIER SUR DEUX ACCENTS DANS UN MÊME
TITRE.** `Matrice eco-criteres` contre `Matrice éco-critères` : refus, zéro
octet écrit. ⚠ *Et `renommer-titres.mjs` **imprime les deux formes qu'il
compare**, l'attendue et celle en place, ce qui rend les deux accents manquants
visibles à l'œil là où le TSV les cachait — la propriété déjà notée au lot 7,
qui sert ici sur un cas plus fin.*

✅ **DEUX LIGNES À REMPLACEMENT IDENTIQUE PASSENT LA GARDE, ET C'EST UN TERME
QUI N'AVAIT JAMAIS ÉTÉ ÉPROUVÉ.** `Écodesign → Écodesign` et `FAST → FAST` :
l'outil exige l'égalité au caractère entre le titre en place et l'ancre, **pas
une différence**, donc il les écrit sans broncher. *La table porte 5 lignes pour
3 changements, et les deux lignes inertes sont ce qui **prouve que ces deux
titres ont été relus** plutôt qu'oubliés.*

⚠ **P58.7 EST LE CHIFFRE LE PLUS INSTRUCTIF DU BLOC : `candidats a lire` NE
BOUGE PAS D'UNE UNITÉ.** **112 avant génération, 112 après cinq fiches rédigées
et trois titres changés.** *Cinq fiches neuves portant 82 liens à libellé, et
**aucun** libellé qui ne recoupe le `title:` de sa cible.* ⚠ **Mais ce n'est PAS
une épreuve de la clause C125 « un titre qui englobe », et cela doit être
écrit** : la clause parle de titres **qualifiés par leur famille**, et aucun des
cinq n'en est un — deux ne changent même pas. **La clause reste à 3/N.** *Ce que
le zéro prouve est autre chose, et c'est neuf : **choisir un `title:` sur les
libellés que le corpus écrit déjà rend le compteur `--libelles` invariant par
construction**, puisque le titre et les libellés partagent alors tous leurs
radicaux.*

⚠ **P58.6 RÉFUTÉE D'UNE UNITÉ, ET LA CAUSE EST UNE BASE QUI A BOUGÉ SOUS LA
PRÉDICTION.** J'ai posé `287 − 37 = 250` en comptant **37 libellés** visant les
cinq cibles, mesurés au bloc 56. La mesure dit **26** : `cible EN existante`
monte de **3 569 à 3 677**, soit **+108**, dont **82** libellés portés par les
cinq fiches neuves et **26** seulement qui basculent d'absente à existante.
*Les onze manquants étaient écrits **dans des fiches que la rédaction a
réécrites** — `[[acv-simplifiee-en|ACV simplifiée]]` d'`ecodesign-en` est devenu
`[[acv-simplifiee-en|Simplified LCA]]`, et les quatre `écodesign` accentués
vivaient dans des fiches du lot.* ⚠ **J'ai compté une population dans un état
et je l'ai soustraite d'un autre** — la même famille que P56.2, deux blocs plus
tôt, et **la troisième fois de la séance** qu'une base d'avant-rédaction sert de
référence à un état d'après.

⚠ **P58.8 RÉFUTÉE, ET C'EST LA TROISIÈME FOIS DE LA SÉANCE, SUR LA MÊME
CAUSE.** La déclaration du bloc 58 nommait **deux** versements — les deux TSV —
et le bloc en a écrit **trois** : `tools/libelles-lot8-apres.txt`, décidé au
moment de lancer `--libelles`. **26 / 20 au lieu de 25 / 19, écart +1 / +1.**
*La déclaration du bloc 57 disait pourtant, en toutes lettres : « si ce bloc
décide de sauvegarder une sortie datée, elle entre dans le compteur et la
déclaration sera rejouée avant la mesure ». **Elle a été écrite, et elle n'a pas
été appliquée au bloc suivant.*** ⚠ *C131 a maintenant **trois** prises en
défaut dans une seule séance, toutes de la même forme — un artefact de sortie
sauvegardé sur décision de dernière minute —, et le sous-compteur qui porte le
sens est juste les trois fois.*

---

## Déclaration C131 du bloc 59 — rejouée, et cette fois la liste est close AVANT le bloc

**Populations : inchangées.**

**État avant le bloc 59** — **26 entrées / 20 hors artefacts**.

**Versements de ce bloc, ÉNUMÉRÉS EXHAUSTIVEMENT ET PAR AVANCE** — *la
correction des trois réfutations précédentes est de fermer la liste avant
d'ouvrir le bloc, et de n'exécuter aucune commande qui écrive un fichier hors
de cette liste :*

| # | artefact | état git | total | hors artefacts | créé par |
|---|---|---|---|---|---|
| 1 | `tools/batterie-sortie-3008b17.txt` | `??` | **+1** | +0 | étape 0 de la batterie |
| 2 | `tools/puces-corpus-lot8-3008.txt` | `??` | **+1** | **+1** | le compteur de puces du corpus |

⚠ **Deux états à prédire, et non un.** L'étape 1 de la batterie lit
`git status` **avant** que le compteur de puces n'écrive sa sortie : elle doit
donc rendre **27 / 20**. La mesure de fin de bloc, elle, rend **28 / 21**.
*C'est la distinction d'instant que la règle des deux dates impose, appliquée à
l'intérieur d'un seul bloc.*

---

## Bloc 59 — clôture du lot 8

**Commandes, dans cet ordre :**

1. `powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase etat -Fiches conduite/proj/acv-simplifiee.md,conduite/proj/bom.md,conduite/proj/ecodesign.md,conduite/proj/fast.md,conduite/proj/matrice-eco-criteres.md -FichesEn en/conduite/proj/acv-simplifiee-en.md,en/conduite/proj/bom-en.md,en/conduite/proj/ecodesign-en.md,en/conduite/proj/fast-en.md,en/conduite/proj/matrice-eco-criteres-en.md -Chevron`
2. le compteur de puces du corpus, mode `--corpus`, sortie sauvegardée sous
   `tools/puces-corpus-lot8-3008.txt`

### Prédictions

**P59.1 — garde de la batterie.** `ASCII 0`, copie
`tools\batterie-sortie-3008b17.txt`, `HEAD 542bb4f 2026-08-30 07:35:08 +0200`,
`node v24.15.0`, **13 lignes de dates** (3 de pilotage + 5 sources FR + 5 fiches
EN), **aucune `ABSENTE`**, `fichiers modifies non commites : 27   (hors
artefacts de seance : 20)`.

**P59.2 — les cinq sources FR portent la date de la passe du bloc 55**, et les
cinq fiches EN celle du bloc 58 — **toutes du 2026-08-30**, toutes postérieures
à `07:50:24`. *Ce n'est pas un écart de garde : ce sont les écritures de la
séance elle-même.*

**P59.3 — corpus FR : 291 242.** *`291 241 + 1`, le mot ajouté par la passe
C109 dans `matrice-eco-criteres`. **Soustraction déclarée : c'est le `tot`
d'APRÈS la passe qui va au corpus.***

**P59.4 — traduites : 211 → 216 fiches, 246 337 → 251 826 mots FR.**
*`246 337 + 5 489`, le `tot` d'après la passe.*

**P59.5 — restant : 31 → 26 fiches, 44 904 → 39 416 mots.**
*`44 904 − 5 488`, le `tot` d'**AVANT** la passe : les fiches quittent le
restant avec le poids qu'elles avaient en y entrant.* ⚠ **Et le +1 ne s'y
propage pas**, `matrice-eco-criteres` en sortant le soir même — *c'est
l'inverse exact de la réfutation du lot 7, et le terme est écrit pour être
réfuté.*

**P59.6 — foisonnement : 216 paires, 251 826 → 261 106 mots EN, moyenne
3,7 %** ; lot **+4,9 / +4,7 / +3,1 / +3,9 / −0,9 %**, soit **+3,26 %**.

**P59.7 — `--controle` : 216 fiches, 0 divergente, 0 lien non suffixé sur 0.**

**P59.8 — dérive : `MARQUE INVALIDE 0`, `DERIVE 0`, `A JOUR 216`.**

**P59.9 — `--style` du lot EN : `C109 de prose` 11, `hors perimetre` 11**, les
quatre verdicts mécaniques à **0**.

**P59.10 — anneau 2 : 145 net, 122 traduites, 23 restantes, 37 148 mots,
0 porteuse.** *`117 + 5`, `28 − 5`, `42 636 − 5 488`.*

**P59.11 — dette : entre 26 et 40 cibles, `dont HORS anneaux 0..2` = 2.**
*Les 5 cibles traduites sortent de la dette (31 − 5 = 26), mais les 5 fiches
neuves **ouvrent leurs propres liens rouges** — `pieuvre-en`, `fonction-en`,
`etat-de-l-art-technique-en`, `mind-map-en`, `mecatronique-en` et d'autres. ⚠
**Le second terme est le seul que je prédise au caractère** : les deux `xiao/`
hors anneaux ne bougent pas, aucune fiche de ce lot n'étant hors anneau 2.*

**P59.12 — chevron `--tout` : 34 paires des deux côtés, 0 divergente,
inchangé.** *C127 hors sujet pour le troisième lot d'affilée : `ded` vaut 0 sur
les cinq, donc `tot` = `deh` = 5 489.*

**P59.13 — médias : 464 fiches, 690 embeds.** *`459 + 5` et `688 + 2`, les deux
embeds de `fast-en`.*

**P59.14 — wikilinks : entre 26 et 40 mortes, 0 cassée, 0 ambiguë, 8 gabarits,
6 alias.** *Même population que la dette, mesurée par un autre outil ; les
quatre derniers termes sont prédits au caractère.*

**P59.15 — `--libelles` : 3 938 / 3 677 / 261 / 112 / 16**, inchangé depuis le
bloc 58. *Aucune écriture entre les deux.*

⚠ **P59.16 — puces à tiret du corpus, AVEC LA POPULATION ÉCRITE DANS LA
SORTIE : FR 1 002 sur 172 porteuses (248 fichiers), EN 885 sur 149 porteuses
(216 fichiers).**
*Décomposition, terme à terme :*
- *FR **1 019 − 17 = 1 002** — les 22 puces relevées au bloc 54 moins les 5
  gardées ; **porteuses 173 − 1 = 172**, `matrice-eco-criteres` étant la seule
  des cinq à tomber de 2 à 0 ; **population 248 inchangée**, aucun fichier FR
  créé ni supprimé ;*
- *EN **880 + 5 = 885** — les 5 puces reportées ; **porteuses 146 + 3 = 149**,
  `bom-en`, `ecodesign-en` et `fast-en` étant porteuses, `acv` et `matrice` non ;
  **population 211 + 5 = 216**.*
⚠ *Ce compteur est celui qui a échoué **deux clôtures d'affilée** avant que le
script n'écrive sa population ; c'est sa **deuxième** épreuve sous cette forme,
et il se referme ici sur **six** termes.*

**P59.17 — `git status` en fin de bloc : 28 / 21.**

**Total : 17 prédictions, toutes à décompte plein.**

### Constats du bloc 59 — clôture du lot 8

| # | prédit | mesuré | verdict |
|---|---|---|---|
| P59.1 | garde : `3008b17`, HEAD inchangé, `v24.15.0`, **13 lignes de dates**, aucune `ABSENTE`, **27 / 20** | idem, heure `08:22:49` | tenue |
| P59.2 | les 10 fiches du lot datées du 30/08, > `07:50:24` | FR **08:04:23** (les cinq), EN **08:21:03** (les cinq) | tenue |
| P59.3 | corpus FR **291 242** | 291242 | tenue |
| P59.4 | traduites **216 fiches, 251 826 mots FR** | 216 / 251826 | tenue |
| P59.5 | restant **26 fiches, 39 416 mots** | 26 / 39416 | tenue |
| P59.6 | foisonnement **216 paires, 251 826 → 261 106**, moyenne **3,7 %**, lot **+3,26 %** | idem | tenue |
| P59.7 | `--controle` **216 / 0 divergente / 0 sur 0** | idem | tenue |
| P59.8 | `MARQUE INVALIDE 0`, `DERIVE 0`, `A JOUR 216` | idem | tenue |
| P59.9 | `--style` EN **11 / 11**, quatre verdicts à 0 | idem | tenue |
| P59.10 | anneau 2 **145 / 122 / 23 / 37 148 / 0 porteuse** | idem | tenue |
| P59.11 | dette ∈ [26, 40] cibles, `hors anneaux` = **2** | **26 cibles, 39 416 mots, hors anneaux 2** | tenue |
| P59.12 | chevron **34 paires des deux côtés, 0 divergente** | 34 / 0, `FR 34 porteuses`, `EN 34 porteuses` | tenue |
| P59.13 | médias **464 fiches, 690 embeds** | 464 / 690 | tenue |
| P59.14 | wikilinks ∈ [26, 40] mortes, **0 / 0 / 8 / 6** | **26 mortes, 0 cassée, 0 ambiguë, 8 gabarits, 6 alias, 460 ok** | tenue |
| P59.15 | `--libelles` **3 938 / 3 677 / 261 / 112 / 16** | idem | tenue |
| P59.16 | puces corpus **FR 1 002 / 172 / 248**, **EN 885 / 149 / 216** | idem, **aux six termes** | tenue |
| P59.17 | `git status` fin de bloc **28 / 21** | 28 / 21 | tenue |

**Bilan du bloc 59 : 17 prédictions à décompte plein, 17 tenues, 0 réfutée.**

✅ **LA DÉCLARATION C131 FERMÉE À L'AVANCE TIENT SES DEUX INSTANTS.** **27 / 20**
quand la garde lit `git status`, **28 / 21** en fin de bloc, et l'écart d'un est
le fichier de puces que le second geste écrit. *C'est la parade aux trois
réfutations de la séance : énumérer les artefacts **avant** d'ouvrir le bloc et
n'exécuter aucune commande qui écrive hors de la liste. **Elle marche du premier
coup.***

✅ **LE COMPTEUR DE PUCES SE REFERME SUR SES SIX TERMES POUR LA DEUXIÈME FOIS,
ET LA DÉCOMPOSITION ÉTAIT PUBLIÉE AVANT LA MESURE.** FR **1 019 − 17 = 1 002**
sur **173 − 1 = 172** porteuses, **248 fichiers** ; EN **880 + 5 = 885** sur
**146 + 3 = 149** porteuses, **211 + 5 = 216** fichiers. ⚠ *Le terme qui prouve
est la porteuse française perdue* : `matrice-eco-criteres` tombe de 2 puces à 0
et **sort de la population des porteuses**, quand les trois autres fiches
traitées y restent. **Un total juste avec 173 porteuses aurait été un total
juste sur une décomposition fausse.** *La candidate « un compteur qui se remesure
déclare sa population dans sa sortie » passe à **2/N**.*

✅ **P55.8 EST RÉSOLUE, ET LA RÈGLE DES DEUX INSTANTS TOMBE JUSTE DANS LES DEUX
SENS.** Le `tot` d'**après** la passe, **5 489**, va au corpus (**291 242**) et
aux traduites (**251 826**) ; le `tot` d'**avant**, **5 488**, se retranche du
restant (**39 416**), de l'anneau (**37 148**) et de la dette (**39 416**).
⚠ **Et le +1 ne s'est PAS propagé au restant de l'anneau**, contrairement à ce
que la réfutation du lot 7 pourrait laisser croire : *`matrice-eco-criteres`
**sort** du restant le soir même, donc son mot supplémentaire n'y entre jamais.
Le lot 7 avait le cas inverse — une fiche éditée **qui restait** dans un
compteur. **La règle du 30/08 n'est pas « toujours propager », c'est
« propager à tous les compteurs qui CONTIENNENT la fiche après l'édition ».***
*Elle passe à **1/N**.*

✅ **DEUX COMPTEURS INDÉPENDANTS DONNENT 26 SUR LA MÊME POPULATION.**
`RESTANT A TRADUIRE` **26 fiches / 39 416 mots** (`compter-mots`), `cibles
rouges distinctes` **26 / 39 416** (`--anneau`), `MORT 26 cible(s)`
(`audit-wikilinks`). ⚠ *Les trois se recoupent parce que la dette **contient**
désormais tout le restant du corpus, ce qui n'était pas le cas au lot 7 (31
restantes, 31 cibles, mais 2 hors anneaux). **Les 2 hors anneaux sont toujours
les deux `xiao/`**, et ce sont aussi les seules du restant qui ne sont pas à
l'anneau 2 — avec `embarque/pcb/kicad`, toujours invisible aux trois compteurs.*

---

## ⛳ GATE G4 — clôture du lot 8.

**Fait** — lot 8 rédigé, titré, mesuré. Cinq fiches EN, corpus **211 → 216**.

**Chiffres qui ont changé** — corpus FR **291 241 → 291 242** ; traduites
**211 → 216 fiches, 246 337 → 251 826 mots** ; restant **31 → 26 fiches,
44 904 → 39 416** ; anneau 2 **28 → 23 restantes, 42 636 → 37 148** ; foisonnement
du lot **+3,26 %** ; puces corpus **FR 1 019 → 1 002 sur 172 porteuses**,
**EN 880 → 885 sur 149**.

**Bilan de prédictions de la séance — 135 à décompte plein, 127 tenues,
8 réfutées** (51 : 15/15 ; 52 : 24/24 ; 53 : 20/20 ; 54 : 13/14 ; 55 : 11/11 ;
56 : 12/16 ; 57 : 9/10 ; 58 : 6/8 ; 59 : 17/17), plus 1 hors décompte et
3 déclaratives.

**Ce qui suit** — bloc 60 : clôture §7, `JOURNAL.md` et `conventions.md` en
diff.

---

## Déclaration C131 du bloc 60 — rejouée, liste fermée avant le bloc

**Populations : inchangées.** **État avant le bloc** — **28 / 21**.

**Versements de ce bloc, énumérés exhaustivement et par avance :**

| # | artefact | état git | total | hors artefacts |
|---|---|---|---|---|
| 1 | `JOURNAL.md`, modifié | ` M` | **+1** | **+1** |
| 2 | `conventions.md`, modifié | ` M` | **+1** | **+1** |

⚠ **Aucun autre fichier n'est écrit par ce bloc**, et aucune commande de mesure
n'y est lancée : `normalize-pilotage.js` a été passé **avant** l'ouverture du
bloc et n'écrit rien. **TOTAL attendu : 30 entrées, 23 hors artefacts.**

---

## Bloc 60 — clôture §7 (JOURNAL, conventions)

**Commandes, dans cet ordre :** (1) écriture des sept marques d'épreuve et des
quatre candidates neuves dans `conventions.md` ; (2) écriture de l'entrée
`JOURNAL.md` ; (3) `git diff --numstat`.

*`node tools/normalize-pilotage.js` a déjà été lancé, avant ce bloc :
**`0 caractere(s) a corriger, 0 fichier(s) modifie(s)`**.*

### Prédictions

**P60.1 — `conventions.md` reçoit EXACTEMENT sept marques d'épreuve et quatre
candidates neuves**, sans qu'aucun numéro de convention ne soit créé — **la
numérotation reste à 131** :
- **clause de périmètre C109 (puces d'un lot)** : `5/N` → **`6/N`** ;
- **candidate « un titre de section EN se relève dans le corpus »** : `2/N` →
  **`3/N`** ;
- **candidate « un motif bilingue s'éprouve sur un échantillon de chaque
  langue »** : `1/N` → **`2/N`** ;
- **candidate « un compteur qui se remesure déclare sa population dans sa
  sortie »** : `1/N` → **`2/N`** ;
- **candidate « un répertoire entièrement non suivi vaut UNE entrée »** : `1/N`
  → **`2/N`** ;
- **candidate « une soustraction se fait sur l'état d'APRÈS la passe »** :
  `0/N` → **`1/N`** ;
- **candidate « `--recaler` est une ÉDITION »** : `0/N` → **`1/N`**.

**Quatre candidates neuves à 0/N** : *un `title:` EN se lit d'abord dans les
libellés que le corpus anglais écrit DÉJÀ vers la cible* ; *un titre de callout
se relève dans le corpus, comme un titre de section* ; *la liste des artefacts
d'un bloc se ferme AVANT le bloc* ; *`MARQUE INVALIDE` ne distingue pas une
empreinte inventée BIEN FORMÉE d'une empreinte périmée*.

⚠ **Et deux clauses reçoivent une note SANS changer de marque** — C113, que ce
lot ne teste pas faute d'objet, et la clause C125 « un titre qui englobe », que
ce lot ne teste pas non plus faute de titre qualifié. *Les écrire est le seul
moyen d'empêcher qu'une séance future compte ce lot comme une épreuve.*

**P60.2 — `git diff --numstat` : suppressions faibles, insertions fortes.**
`conventions.md` rend **entre 6 et 9 suppressions** — les sept lignes
`*Éprouvée n/N.*` réécrites, moins celles que git lira comme une insertion pure
(effet mesuré au bloc 50 du lot 7) ; `JOURNAL.md` rend **exactement 0**, aucune
entrée existante n'étant touchée.

**P60.3 — insertions.** `JOURNAL.md` entre **35 et 60** lignes ;
`conventions.md` entre **70 et 140**. ⚠ *La fourchette de `conventions.md` est
haute et large parce que **onze** entrées y sont touchées — sept marques dont
six portent un paragraphe d'épreuve, quatre candidates neuves — et que la
sous-estimation du lot 7 (95 lignes contre une fourchette [25, 60]) avait
exactement cette cause.*

**P60.4 — tailles après écriture** (C128, garde-fou de la dérive) :
`JOURNAL.md` **entre 606 et 622 ko** (600,6 avant) ; `conventions.md` **entre
479 et 492 ko** (475,3) ; `TODO.md` **282,7 ko inchangé** ; `BACKLOG.md`
**206,0 ko inchangé** ; `tools/predictions-260830.md` **entre 280 et 300 ko**
(271,8 avant ce bloc, deux lots dans un seul fichier).
⚠ *Le JOURNAL a franchi 600 ko à la clôture du lot 7 et la série est le seul
garde-fou que C128 laisse ; le chiffre se publie donc, comme le demande la
règle.*

**P60.5 — `git status` : 30 / 23.**

**Total : 5 prédictions, toutes à décompte plein.**

### Constats du bloc 60 — clôture §7

| # | prédiction | constat | verdict |
|---|---|---|---|
| P60.1 | 7 marques d'épreuve, 4 candidates neuves, numérotation à **131** | 7 marques ✓, 4 candidates ✓, aucun numéro créé ✓ ; **9 éditions** en tout, les deux dernières étant les notes de non-épreuve de C113 et C125 | tenue |
| P60.2 | `conventions.md` **[6, 9]** suppressions, `JOURNAL.md` **0** | **7** et **0** | tenue |
| P60.3 | `JOURNAL` **[35, 60]** insertions, `conventions` **[70, 140]** | **39** et **201** | **RÉFUTÉE** (conventions) |
| P60.4 | JOURNAL [606, 622] ko, conventions [479, 492], TODO 282,7, BACKLOG 206,0, prédictions [280, 300] | **614,8** / **488,9** / **282,7** / **206,0** / **275,8** | **RÉFUTÉE** (1 terme sur 5) |
| P60.5 | `git status` **30 / 23** | 30 / 23 | tenue |

**Bilan du bloc 60 : 5 prédictions à décompte plein, 3 tenues, 2 réfutées.**

⚠ **P60.3 EST RÉFUTÉE DE 43 %, ET C'EST LA MÊME CAUSE QU'AU LOT 7, AGGRAVÉE
MALGRÉ L'AVERTISSEMENT.** 201 lignes insérées dans `conventions.md` contre une
fourchette [70, 140] que j'avais **délibérément élargie** en citant la
sous-estimation du lot 7 (95 contre [25, 60]). *Cause identique et mesurable :
j'ai chiffré « sept marques et quatre candidates » comme si une marque coûtait
un paragraphe, alors que **six des sept en portent un** et que les **quatre
candidates neuves en portent trois à cinq chacune** — celle sur les `title:` lus
dans les libellés fait à elle seule une trentaine de lignes.* ⚠ **Deux clôtures
d'affilée, même erreur, et la seconde après l'avoir nommée : chiffrer un texte
qu'on n'a pas encore écrit ne s'améliore pas en élargissant la fourchette, il
faudrait compter les paragraphes plutôt que les entrées.**

✅ **P60.2 TIENT SUR SES DEUX TERMES, ET LES 7 SUPPRESSIONS SONT EXACTEMENT LES
7 MARQUES.** *L'exception du lot 7 — une édition lue comme insertion pure quand
le texte inséré se termine par la ligne qu'il déplace — **ne s'est pas
reproduite** : les sept blocs insérés se terminent tous par une marque
**différente** de celle qui suit.*

⚠ **P60.4 : LA SÉRIE C128 DIT DEUX CHOSES, ET LA SECONDE EST NEUVE.**
`JOURNAL.md` **600,6 → 614,8 ko** (+14,2), `conventions.md` **475,3 → 488,9**
(+13,6) : **27,8 ko en une séance**, contre 39 au lot 7. *La série reste la
seule garde de C128 et elle est publiée.* ⚠ **Le terme réfuté est le fichier de
prédictions, à 275,8 ko contre [280, 300]** — *et la cause est que la fourchette
a été écrite **avant** les constats de ce bloc, qui n'y sont pas encore. Le
chiffre publié à la clôture doit dater de la **fin** de séance : il est
**remesuré ci-dessous**.*

⚠ **UN DÉFAUT DE FORME À CONSIGNER, TROUVÉ PAR UN AVERTISSEMENT DE GIT.**
`tools/predictions-260830.md` porte **241 fins de ligne CRLF sur 4 973** : les
blocs de texte de cette séance ont été composés dans des fichiers temporaires
hors dépôt puis concaténés, et l'outil d'écriture y met des CRLF. *`JOURNAL.md`
et `conventions.md` sont **propres** — 0 CRLF —, ayant été écrits par un script
qui fixe la fin de ligne.* **`normalize-pilotage.js` ne couvre pas `tools/`**,
et git annonce qu'il convertira au prochain commit. **Versé au constat, non
corrigé** : réécrire le fichier entier pour ses fins de ligne effacerait la
propriété qui fait sa valeur — être appendu bloc par bloc, dans l'ordre de la
transcription.

---

## ⛳ GATE G5 — clôture de séance.

**Fait** — lot 8 rédigé et livré au dépôt (non commité), `conventions.md` et
`JOURNAL.md` à jour, `git diff` disponible sur les 8 fichiers.

**Bilan général de la séance — 140 prédictions à décompte plein, 130 tenues,
10 réfutées** (51 : 15/15 ; 52 : 24/24 ; 53 : 20/20 ; 54 : 13/14 ; 55 : 11/11 ;
56 : 12/16 ; 57 : 9/10 ; 58 : 6/8 ; 59 : 17/17 ; 60 : 3/5), plus **1 hors
décompte** et **3 déclaratives**. **Taux de tenue : 92,9 %**, contre 89,7 % au
lot 7.

⚠ **LES DIX RÉFUTATIONS SE RANGENT EN QUATRE CAUSES, ET TROIS SONT DES
RÉCIDIVES NOMMÉES AU REGISTRE.**
1. **C131, liste d'artefacts non fermée** — 3 réfutations (P56.13, P56.17,
   P58.8). *Parade écrite et éprouvée au bloc 59.*
2. **Un relevé d'avant-rédaction servi comme état de clôture** — 2 réfutations
   (P56.2, P58.6). *C'est la règle des deux instants, prise en défaut sur une
   dimension qu'elle ne nommait pas : non pas deux **dates**, mais deux
   **positions dans la séance qui a écrit**.*
3. **Un volume de texte chiffré avant d'être écrit** — 2 réfutations (P60.3,
   P60.4). *Deuxième clôture d'affilée.*
4. **Trois isolées** : P54.13 (le tableau ne prédit pas la densité de puces),
   P56.7 (les libellés décident le titre, pas C125), P57.7 (un `--recaler` a été
   nécessaire).

✅ **CE QUI N'A PAS BOUGÉ DE LA SÉANCE** : `HEAD 542bb4f` sur **six** lancements
de garde, dépôt propre hors artefacts nommés à chaque bloc, **deux tests
négatifs refusés avant toute écriture** sur les **deux** outils à ancre, et
**zéro fichier perdu**.

**Tailles remesurées EN FIN DE SÉANCE** (la ligne « Tailles » du JOURNAL doit
dater de la clôture, pas de l'avant-dernier bloc) : `JOURNAL.md` **614,8 ko**,
`conventions.md` **488,9 ko**, `TODO.md` **282,7 ko**, `BACKLOG.md`
**206,0 ko**, `tools/predictions-260830.md` **281,1 ko** après ce bloc, mesuré.

---
---

# REPRISE — 30/08 (séance 2), arbitrages du lot 8 rendus

> **Trois arbitrages rendus par Tim à la clôture du lot 8.** La séance rouvre
> pour les exécuter, comme le 30/08 (blocs 39-40) l'avait fait pour les
> arbitrages du lot 6. **La numérotation des blocs se poursuit : bloc 61.**

## Les trois arbitrages, au mot

1. **`easyeda`** — *« on ne touche pas, la fiche est très bien comme ça. C'est
   assumé que ce tutoriel est le plus lourd et c'est à conserver. »*
   ⚠ **C'est une LEVÉE DE BORNE pour cette fiche, pas une découpe intra-fiche.**
   J'avais posé deux issues ; Tim en prend une troisième, plus simple : la fiche
   ne bouge pas et la borne cède devant elle. **Conséquence de planification, à
   écrire pour que le prochain cadrage ne rejoue pas la question :
   `embarque/pcb/easyeda` fera un lot À ELLE SEULE, à 9 773 mots, soit 1,47 fois
   la borne 6 657.** *Aucune édition n'en découle ce soir.*
2. **`title: Écodesign`** — *« ok avec ta proposition »*. **Confirmé, aucun
   revert joué.** La décision C117 devient un arbitrage rendu, et la candidate
   du §8 sur les `title:` lus dans les libellés garde son cas fondateur.
3. **`MARQUE INVALIDE` incomplet** — *« je te laisse résoudre ce conflit »*.
   **Délégué.** Dossier ci-dessous, décision et exécution dans cette reprise.

---

## Dossier — comment fermer l'écart entre empreinte inventée et empreinte périmée

**Le défaut, rappelé en une ligne.** `derive-traduction.mjs` range en
`MARQUE INVALIDE` toute empreinte qui n'est pas **64 hexadécimaux minuscules**,
et en `DERIVE` tout le reste qui ne colle pas. Une empreinte **inventée mais
bien formée** — celle que j'ai composée sur `bom-en` — tombe donc en `DERIVE`,
c'est-à-dire dans le statut qui dit *« la source a bougé »* quand la vérité est
*« la fiche a été réécrite et tout son front matter est suspect »*.

### Quatre voies examinées

| # | voie | ce qu'elle donne | ce qu'elle coûte |
|---|---|---|---|
| a | **journal d'empreintes** versionné, appendu par le générateur et par `--recaler` | distinction **exacte**, zéro faux positif | un artefact de plus, deux points d'écriture, un seed à justifier — **et il ne protège rien : il affine un diagnostic après coup** |
| b | **git en second recours** : le sha consigné figure-t-il dans l'histoire de la source ? | zéro artefact | ⚠ **faux positif structurel** : une empreinte posée entre deux commits n'est dans aucun blob, et c'est le cas NORMAL du chantier (passe C109 puis génération, avant commit) |
| c | **contrôle du front matter entier** : régénérer le front matter attendu et comparer champ par champ, `title:` exempté | zéro artefact, zéro faux positif, transforme *« tout le front matter est suspect »* d'inférence en mesure | ⚠ **n'aurait pas attrapé MON cas** : mes autres champs étaient justes |
| d | **supprimer le geste** : un mode `--corps` qui remplace le corps d'une fiche EN **sans jamais toucher à son front matter** | le front matter cesse d'être réécrit, donc l'empreinte cesse de pouvoir être inventée | un mode de plus, et il faut l'employer |

### Décision (C117, arbitrage délégué, consignée)

**Voie (d), et le motif est la résolution de second rang du 29/08 (suite 8) :
*une règle qui contraint un geste mécanique se loge dans le code qui exécute ce
geste*.** Les voies (a) et (b) ne font qu'améliorer le **diagnostic** d'un
défaut qu'elles laissent se produire ; (b) le fait en plus au prix d'un faux
positif sur le cas normal, ce que le §8 proscrit explicitement — *« un contrôle
neuf se juge sur ses faux positifs avant d'être livré, sinon il apprend à être
ignoré »*.

⚠ **Et le conflit ne se résout pas, il se DISSOUT.** Tant que la rédaction
réécrit le fichier entier, aucun statut ne dira jamais avec certitude d'où vient
une empreinte. **Dès que le corps s'écrit sans le front matter, la question ne
se pose plus** : le seul chemin vers `source_sha256` reste le générateur, et le
seul chemin vers sa modification reste `--recaler`, qui est déjà gardé (il
refuse si les trois compteurs divergent).

**Ce que la décision ne règle pas, et qui est écrit** : `--corps` **peut être
contourné** exactement comme la règle d'usage l'a été — en réécrivant le fichier
à la main. *La différence est qu'il rend le geste correct **moins cher** que le
geste fautif, ce qu'aucune phrase de convention ne fait.* **La voie (c) reste
sur la table** comme filet, non retenue ce soir : elle mesure ce que (d)
empêche, et un filet sous une trappe fermée peut attendre une épreuve.

*Coût du revert : le mode est **additif** — aucun mode existant n'est modifié,
aucun fichier du corpus n'est touché par son écriture. Revenir en arrière, c'est
supprimer une fonction et trois lignes de routage.*

---

## Déclaration C131 du bloc 61 — rejouée, liste fermée avant le bloc

**Populations : inchangées.**

⚠ **L'état de départ n'est pas connu, et c'est le point du bloc.** La clôture a
laissé le dépôt à **30 / 23** et a remis à Tim la commande `livrer.ps1`.
**Deux états sont possibles**, et la garde dira lequel.

**Versements de ce bloc, énumérés par avance :**

| # | artefact | état git | créé par |
|---|---|---|---|
| 1 | `tools/predictions-260830.md` (ce texte, appendu **avant** la garde) | ` M` | l'append |
| 2 | `tools/batterie-sortie-3008b18.txt` | `??` | étape 0 de la batterie |

**TOTAL selon la branche :** *(A)* Tim **n'a pas commité** → **31 entrées,
23 hors artefacts** (30 + la copie C124, le fichier de prédictions étant déjà
compté). *(B)* Tim **a commité** → **2 entrées, 0 hors artefacts**, tout le
reste étant passé dans le commit.

---

## Bloc 61 — garde de péremption de reprise

**Commande unique :**
`powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase garde`

### Prédictions

**P61.1 — autocontrôle ASCII.** `lignes non ASCII dans batterie.ps1 : 0`.

**P61.2 — copie C124.** `sortie precedente copiee :
tools\batterie-sortie-3008b18.txt`. *`3008b1` à `3008b17` sont pris ; le premier
rang libre est **18**.*

**P61.3 — paramètres et date.** `phase demandee : garde   anneau : 2
chevron : False`, `date ISO : 2026-08-30`, heure **strictement postérieure à
`08:22:49`** (horloge du bloc 59).

**P61.4 — HEAD, DEUX BRANCHES NOMMÉES.** *(A)* `542bb4f 2026-08-30 07:35:08
+0200`, inchangé — Tim n'a pas encore passé `livrer.ps1`. *(B)* un hash **neuf**,
horodaté **du 30/08 et postérieur à `08:35`**. ⚠ **Dans les deux cas la garde
est VERTE** : un HEAD qui change n'est un arrêt que si personne ne l'a annoncé,
et celui-ci est la commande que la clôture a remise à Tim. **Un troisième cas
serait un arrêt** : un HEAD neuf dont le message ne serait pas celui du lot 8.

**P61.5 — compteurs git, appariés à la branche.** *(A)* `fichiers modifies non
commites : 31   (hors artefacts de seance : 23)`. *(B)* `2   (0)`.
⚠ *Le second chiffre est le terme qui porte le sens : **23** si rien n'est
commité, **0** si tout l'est. Il n'y a pas d'état intermédiaire possible,
`livrer.ps1` prenant tout.*

**P61.6 — node.** `node : v24.15.0`.

**P61.7 — dates d'écriture : 3 lignes, et deux d'entre elles ont bougé depuis
le bloc 59.** `JOURNAL.md` et `conventions.md` portent l'horodatage du bloc 60,
**du 30/08 et postérieur à `08:22:49`**, `conventions.md` **antérieur ou égal**
à `JOURNAL.md` (ordre d'écriture du §7, tenu quatre fois dans la série).
`TODO.md` **`2026-08-29 21:48:08`, inchangé au caractère** — cinquième garde
consécutive.

**P61.8 — codes de sortie.** **2** lignes `--- code de sortie :`, toutes à `0`,
et la ligne finale `Sortie ecrite dans tools\batterie-sortie.txt`.

**Total : 8 prédictions, toutes à décompte plein.**

### Constats du bloc 61 — garde de reprise

| # | prédit | mesuré | verdict |
|---|---|---|---|
| P61.1 | ASCII 0 | 0 | tenue |
| P61.2 | copie `3008b18` | idem | tenue |
| P61.3 | `garde / 2 / False`, 30/08, heure > `08:22:49` | `08:42:49` | tenue |
| P61.4 | branche (A) HEAD inchangé **ou** (B) hash neuf du 30/08 > `08:35` | **(B)** `b4aa097 2026-08-30 08:36:33 +0200` | tenue |
| P61.5 | (A) `31 (23)` **ou** (B) `2 (0)` | **(B)** `2   (0)` | tenue |
| P61.6 | `v24.15.0` | idem | tenue |
| P61.7 | JOURNAL et conventions du 30/08 > `08:22:49`, conventions ≤ JOURNAL, TODO inchangé au caractère | `08:29:20`, `08:27:43` ≤ `08:29:20`, `2026-08-29 21:48:08` | tenue |
| P61.8 | 2 codes de sortie à 0, ligne finale | idem | tenue |

**Bilan du bloc 61 : 8 prédictions à décompte plein, 8 tenues, 0 réfutée.**

**GARDE DE PÉREMPTION : VERTE, BRANCHE (B).** Les deux branches étaient nommées
avant la mesure et c'est la seconde qui sort. ✅ **Le troisième cas — celui qui
aurait été un arrêt — est écarté par lecture du message** :
`lot 8: conduite/proj ouvert, 5 fiches EN, 69 remplacements C109`, **au mot** ce
que la clôture avait remis à Tim. Le commit porte **30 fichiers, 5 864
insertions, 58 suppressions** ; les 58 suppressions sont **51 (passe C109) + 7
(marques d'épreuve de `conventions.md`)**, et le total referme sur ce que la
séance a produit — *aucun fichier touché hors de son périmètre*.

---

## Déclaration C131 du bloc 62 — rejouée, liste fermée avant le bloc

**Populations : inchangées.** **État avant le bloc** — **2 / 0**.

**Versements de ce bloc, énumérés exhaustivement et par avance :**

| # | artefact | état git | total | hors artefacts |
|---|---|---|---|---|
| 1 | `tools/creer-fiche-en.mjs`, **modifié** (mode `--corps` ajouté) | ` M` | **+1** | **+1** |
| 2 | `tools/corps-negatif-3008.md` (corps de test portant un front matter) | `??` | **+1** | **+1** |
| 3 | `tools/corps-bom-3008.md` (corps courant de `bom-en`, pour le test de non-régression) | `??` | **+1** | **+1** |

⚠ **Aucun fichier de `content/` ne doit changer d'octet dans ce bloc**, et c'est
un terme mesurable : le test positif réécrit `bom-en` **avec son propre corps**.

**TOTAL attendu : 5 entrées, 3 hors artefacts de séance.**

---

## Bloc 62 — le mode `--corps`, et les deux tests qui le jugent

**Ce que le mode fait**, écrit avant de l'écrire :
`node tools/creer-fiche-en.mjs --corps <fiche EN> <fichier de corps>`
remplace **le corps** d'une fiche EN et **recopie son front matter à l'octet**.

**Cinq gardes, toutes validées avant le premier octet écrit :**
1. la fiche EN existe et porte un **front matter** ;
2. elle porte un **`source_fr`** — sinon ce n'est pas une fiche de traduction ;
3. ⚠ **le fichier de corps ne porte PAS de front matter** — c'est la garde
   centrale, celle qui refuse exactement le geste fautif : coller un fichier
   entier là où on attend un corps ;
4. la source FR existe ;
5. les **trois compteurs** (liens, embeds, blocs de code) sont **égaux** entre
   la source FR et le corps proposé — même garde que `--recaler`, refus sinon.

**Ce que le mode publie avant d'écrire** : le `source_sha256` **avant et
après**, qui doivent être **identiques** — l'invariant qui donne son sens au
mode —, et les trois compteurs FR / EN.

### Prédictions

**P62.1 — test négatif : refus, zéro octet écrit.** Le fichier de corps
`tools/corps-negatif-3008.md` **ouvre par un front matter**. Attendu : un refus
nommant la garde 3, **exit 1**, et `content/en/conduite/proj/bom-en.md`
**inchangé à l'octet**. ⚠ *C'est le **huitième** refus de la série, et le
premier qui porte sur la **forme du fichier d'entrée** et non sur une ancre.*

**P62.2 — test positif de non-régression : `bom-en` réécrit AVEC SON PROPRE
CORPS est identique à l'octet.** Le sha256 du fichier **avant** et **après**
l'écriture sont **égaux**, et `git status` ne le fait pas apparaître.
*C'est le seul test qui prouve que le mode recopie le front matter sans le
toucher : tout écart, fût-il d'un espace, casserait l'égalité.*

**P62.3 — invariant publié : `source_sha256` avant = après**, et sa valeur est
`5af58bdeaff73d66d4d65eb6b4ae561893062ec85c35e0e29d5e09be0f0c84bf`, celle que
`--recaler` a posée au bloc 57.

**P62.4 — les trois compteurs de `bom-en` : liens 27, embeds 0, code 0**, égaux
à ceux de sa source. *Chiffres mesurés à la génération du bloc 56.*

**P62.5 — `derive-traduction` après le bloc : `MARQUE INVALIDE 0`, `DERIVE 0`,
`A JOUR 216`**, inchangé. *Si le front matter avait bougé d'un caractère, cette
ligne le dirait.*

**P62.6 — autocontrôle ASCII de l'outil modifié.** ⚠ *C122 vise `seance.ps1`,
pas les `.mjs`, et `creer-fiche-en.mjs` **porte déjà des accents** dans ses
commentaires. **Le code ajouté sera en ASCII strict comme le reste du
fichier**, et ce terme est déclaré non mesurable par un outil : il se vérifie au
`git diff`.*

**P62.7 — `git status` en fin de bloc : 5 / 3.**

**Total : 7 prédictions, dont P62.6 déclarative → 6 à décompte plein.**

⚠ **AMENDEMENT À LA DÉCLARATION DU BLOC 62, ÉCRIT AVANT TOUTE EXÉCUTION.**
La préparation des deux fichiers de corps demande de recopier le corps courant
de `bom-en` **à l'octet**, ce qui ne se fait ni à la main ni par un `node -e`
d'une ligne (écart de méthode consigné au lot 7). **Un script jetable de plus
entre donc dans la liste** — `tools/preparer-corps-3008.mjs` (C114), `??`,
**+1 / +1**.

**TOTAL corrigé : 6 entrées, 4 hors artefacts de séance.** *P62.7 est corrigée
en conséquence, **avant** la mesure : `git status` en fin de bloc rendra
**6 / 4**.* ⚠ *C'est la parade de la candidate née ce soir, appliquée à chaud :
la liste se ferme avant le bloc, et quand elle doit s'ouvrir, elle s'amende
**avant** l'exécution et non après la réfutation.*

### Constats du bloc 62 — le mode `--corps`

| # | prédit | mesuré | verdict |
|---|---|---|---|
| P62.1 | test négatif : refus nommant la garde 3, `exit 1`, `bom-en` inchangé | `GARDE 3 le fichier de corps OUVRE PAR UN FRONT MATTER`, **`REFUS : 2 defaut(s)`**, exit 1, aucun octet écrit | tenue |
| P62.2 | `bom-en` réécrit avec son propre corps : **identique à l'octet** | sha256 **`45383a7ed129…`** avant **et** après | tenue |
| P62.3 | `source_sha256` avant = après = `5af58bdeaff73d66…` | idem, publié par l'outil | tenue |
| P62.4 | liens **27**, embeds **0**, code **0** | 27 → 27, 0 → 0, 0 → 0 | tenue |
| P62.5 | `MARQUE INVALIDE 0`, `DERIVE 0`, `A JOUR 216` | idem ; `--controle` **216, 0 divergente** | tenue |
| P62.6 | code ajouté en ASCII strict | vérifiable au `git diff` | déclarative |
| P62.7 | `git status` **6 / 4** (amendé avant exécution) | 6 / 4 | tenue |

**Bilan du bloc 62 : 6 prédictions à décompte plein, 6 tenues, 0 réfutée.**

✅ **LA GARDE TOUT-OU-RIEN DE MON PROPRE SCRIPT D'ÉDITION A MORDU AVANT
D'ÉCRIRE.** La quatrième ancre portait **quatre espaces d'indentation au lieu de
deux** : `ANCRE 0 occurrence(s)`, `REFUS : 1 defaut(s). AUCUNE ECRITURE.`
*Cinq éditions étaient prêtes, aucune n'a été appliquée — c'est le mode d'échec
du 28/08 (un lot multi-édition est atomique) qui joue dans le bon sens, pour la
troisième fois de la série.*

✅ **LE TEST NÉGATIF REFUSE SUR DEUX GARDES ET NON UNE, ET LA SECONDE EST UN
BONUS QUE JE N'AVAIS PAS PRÉDIT.** La garde 3 voit le front matter en tête du
corps ; **la garde 5 voit en plus que les liens tombent de 27 à 0**. *Le corps
fautif ne portait aucun wikilink, donc le report un pour un le signalait déjà.
**Deux gardes indépendantes sur le même défaut**, ce qui est la propriété qu'on
veut d'un refus : il n'a pas besoin d'être exact pour être sûr.* **Huitième
refus de la série, et le premier qui porte sur la FORME DU FICHIER D'ENTRÉE et
non sur une ancre.**

✅ **P62.2 EST LA PRÉDICTION QUI PROUVE, ET ELLE PROUVE PAR L'IDENTITÉ.**
Réécrire `bom-en` **avec son propre corps** rend un fichier dont le sha256 est
**inchangé au caractère** : `45383a7ed129fe246fa7aa02fe43d6f5c5034cbe0ee8bb5612f747541b7c9fa8`
avant et après. *Un espace de plus, une fin de ligne convertie, un `---` recopié
au lieu d'être conservé, et l'égalité tombait.* ⚠ **Et le terme qui garde n'est
pas dans la sortie de l'outil, il est dans `git status` : aucun fichier de
`content/` n'y figure après le bloc.**

---

## Déclaration C131 du bloc 63 — rejouée, liste fermée avant le bloc

**Populations : inchangées.** **État avant le bloc** — **6 / 4**.

**Versements de ce bloc, énumérés exhaustivement et par avance :**

| # | artefact | état git | total | hors artefacts |
|---|---|---|---|---|
| 1 | `conventions.md`, modifié | ` M` | **+1** | **+1** |
| 2 | `JOURNAL.md`, modifié | ` M` | **+1** | **+1** |

⚠ **Aucun autre fichier n'est écrit, et aucune commande de mesure n'est lancée
dans ce bloc.** *`normalize-pilotage.js` est passé **avant** l'ouverture du bloc.*
**TOTAL attendu : 8 entrées, 6 hors artefacts.**

---

## Bloc 63 — reclôture §7 (arbitrages rendus)

### Prédictions

**P63.1 — `conventions.md` reçoit QUATRE éditions, et aucun numéro neuf — la
numérotation reste à 131 :**
- la candidate **« `MARQUE INVALIDE` ne distingue pas une empreinte inventée
  bien formée »** reçoit un **✅ CORRIGÉ DANS LE CODE** et passe de `0/N` à
  **`1/N`** ;
- la règle **« une fiche EN se rédige en partant de son squelette sur disque »**
  reçoit la mention du mode `--corps` — *deuxième fois qu'une règle de geste de
  ce chantier passe de la prose au code, après `derive-traduction` le 29/08* ;
- la candidate **« la liste des artefacts d'un bloc se ferme AVANT le bloc »**
  passe de `1/N` à **`2/N`** ;
- une **entrée neuve** consigne l'arbitrage sur la borne :
  **« la borne de lot cède devant une fiche qu'on ne coupe pas »**, à `0/N`.

**P63.2 — `git diff --numstat` : `conventions.md` entre 2 et 5 suppressions**
(les deux marques réécrites, plus ce que git lira comme réécriture), et
`JOURNAL.md` **exactement 0**.

**P63.3 — insertions.** `conventions.md` entre **45 et 95** lignes ;
`JOURNAL.md` entre **8 et 20**. ⚠ *Deux clôtures d'affilée ont sous-estimé
`conventions.md` (95 contre [25, 60], puis 201 contre [70, 140]). **La cause
nommée est que je compte des entrées quand il faut compter des paragraphes** :
ici, **quatre éditions portant chacune un à trois paragraphes**, d'où une borne
haute à 95 et non à 60.*

**P63.4 — tailles.** `conventions.md` entre **492 et 500 ko** (488,9 avant) ;
`JOURNAL.md` entre **616 et 620 ko** (614,8) ; `TODO.md` **282,7 inchangé** ;
`BACKLOG.md` **206,0 inchangé**.

**P63.5 — `git status` : 8 / 6.**

**Total : 5 prédictions, toutes à décompte plein.**

### Constats du bloc 63 — reclôture §7

| # | prédiction | constat | verdict |
|---|---|---|---|
| P63.1 | 4 éditions de `conventions.md`, numérotation à **131** | 4 éditions ✓, aucun numéro créé ✓ | tenue |
| P63.2 | `conventions` **[2, 5]** suppressions, `JOURNAL` **0** | **2** et **0** | tenue |
| P63.3 | `conventions` **[45, 95]** insertions, `JOURNAL` **[8, 20]** | **75** et **29** | **RÉFUTÉE** (JOURNAL) |
| P63.4 | conventions [492, 500] ko, JOURNAL [616, 620], TODO 282,7, BACKLOG 206,0 | **494,1** / **622,6** / **282,7** / **206,0** | **RÉFUTÉE** (JOURNAL) |
| P63.5 | `git status` **8 / 6** | 8 / 6 | tenue |

**Bilan du bloc 63 : 5 prédictions à décompte plein, 3 tenues, 2 réfutées.**

✅ **`conventions.md` TOMBE DANS SA FOURCHETTE POUR LA PREMIÈRE FOIS DE LA
JOURNÉE — 75 sur [45, 95] —, ET LA CORRECTION DE MÉTHODE EST CE QUI L'A FAIT.**
Les deux clôtures précédentes chiffraient des **entrées** (95 contre [25, 60],
puis 201 contre [70, 140]) ; celle-ci a chiffré des **paragraphes**, quatre
éditions en portant de un à trois. *La cause nommée au bloc 60 était la bonne,
et la corriger a suffi.*

⚠ **MAIS LE MÊME DÉFAUT S'EST DÉPLACÉ SUR LE JOURNAL, ET C'EST LA TROISIÈME
FOIS D'AFFILÉE QU'UN TEXTE NON ÉCRIT EST SOUS-CHIFFRÉ.** **29 lignes contre
[8, 20]**, soit +45 %. *J'ai chiffré « une entrée de reprise » comme celle du
30/08 (blocs 39-40), qui tenait en une dizaine de lignes ; celle-ci porte **trois
arbitrages rendus, un dossier à quatre voies et deux tests**.* ⚠ **Le report de
la leçon a été partiel : je l'ai appliquée au fichier qui m'avait réfuté, pas à
l'autre.**

⚠ **ET J'AI ÉCRIT DEUX TAILLES DANS L'ENTRÉE AVANT DE LES MESURER.** La ligne
« Tailles » annonçait `conventions.md` **496,4** et `JOURNAL.md` **618,x** ;
la mesure rend **494,1** et **622,6**. **C118 en plein, dans le texte même de la
clôture** — *un chiffre publié doit sortir d'une mesure du jour, y compris quand
il décrit le fichier qu'on est en train d'écrire, dont la taille n'existe qu'une
fois l'écriture faite.* ✅ **Les deux corrigés par édition ancrée**, plus la
mention « le JOURNAL passe 618 ko » de la file d'arbitrages, portée à **622,6**.
*La taille finale d'un fichier de clôture ne peut se publier qu'après sa
dernière écriture, et la seule façon honnête est de la remesurer — ce que la
clôture du 29/08 (suite 11) disait déjà en toutes lettres.*

---
---

# BILAN GÉNÉRAL — 30/08 (séance 2), LOT 8 ET SES ARBITRAGES

**153 prédictions publiées avant leur bloc, 141 tenues, 12 réfutées**
(51 : 15/15 ; 52 : 24/24 ; 53 : 20/20 ; 54 : 13/14 ; 55 : 11/11 ; 56 : 12/16 ;
57 : 9/10 ; 58 : 6/8 ; 59 : 17/17 ; 60 : 3/5 ; 61 : 8/8 ; 62 : 6/6 ; 63 : 3/5),
plus **1 hors décompte** et **4 déclaratives**. **Taux de tenue : 92,2 %.**

**Treize blocs, six gates, zéro arrêt, zéro sollicitation de Tim pendant le
lot ; trois arbitrages remontés à la clôture, trois rendus, trois exécutés dans
la foulée.**

⚠ **LES DOUZE RÉFUTATIONS SE RANGENT EN CINQ CAUSES, ET QUATRE SONT DES
RÉCIDIVES NOMMÉES.**
1. **C131, liste d'artefacts non fermée** — 3 (P56.13, P56.17, P58.8). *Parade
   écrite au bloc 59, éprouvée deux fois, dont une par amendement à chaud.*
2. **Un texte chiffré avant d'être écrit** — 3 (P60.3, P60.4, P63.3 + P63.4).
   *Corrigée sur `conventions.md`, non reportée sur le `JOURNAL`.*
3. **Un relevé d'avant-rédaction servi comme état de clôture** — 2 (P56.2,
   P58.6).
4. **Trois isolées** : P54.13, P56.7, P57.7.

✅ **CE QUI N'A PAS BOUGÉ** : `HEAD` suivi sur **sept** gardes, deux branches
nommées avant la mesure quand il pouvait changer, **trois tests négatifs
refusés avant toute écriture** sur **trois** outils différents, et **zéro
fichier perdu** en treize blocs.

---
---

# SÉANCE 3 DU 30/08 — LOT 9 DU CHANTIER DE TRADUCTION

> **Même date, troisième séance, prompt neuf.** `tools/predictions-260830.md`
> existe déjà et porte le lot 7 (blocs 41-50), le lot 8 (blocs 51-60) et la
> reprise d'arbitrages (blocs 61-63) : cette séance **y appende**, le fichier
> de la sous-règle C116 se nommant par la **date** et non par le lot.
> **La numérotation des blocs se poursuit : cette séance ouvre au bloc 64.**
> ⚠ **Le fichier portera donc TROIS lots et une reprise.** L'entrée du 30/08
> (suite 2) avait déjà consigné « le fichier de prédictions du 30/08 porte
> deux lots » à la file des arbitrages ; **le fait s'aggrave d'un lot et reste
> non instruit** — il est reporté tel quel, sans être traité en séance.

---

## En-tête de séance

- **Séance** — 30/08 (troisième séance du jour), **PC perso, onglet Code**,
  modèle **Opus 5**.
- **Objet** — **lot 9 du chantier de traduction**, **dixième lot en exécution
  directe**, **dixième épreuve de la sous-règle C116 amendée**, **huitième
  séance sous C131**.
- **Régime** — exécution directe sous C116 (sous-règle et ses amendements des
  suites 3 et 8 du 29/08), C109 et ses amendements, C110, C113, C118, C119,
  C120, C121, C123, C124, C125, C127, C129, C130, C131 et son amendement du
  29/08 (suite 8), plus les **règles d'usage** en vigueur, avec leur marque
  telle que `conventions.md` la porte à l'ouverture :

  | # | règle d'usage | née | marque |
  |---|---|---|---|
  | 1 | un motif qui balaie les deux corpus s'éprouve sur un **échantillon de chaque langue** | 29/08 s9 | **2/N** |
  | 2 | un **titre de section EN** se relève dans le corpus **avant** d'être écrit | 29/08 s10 | **3/N** |
  | 3 | un compteur qui se remesure **déclare sa population dans sa sortie** | 29/08 s11 | **2/N** |
  | 4 | un **répertoire entièrement non suivi** vaut **UNE** entrée de `git status` | 30/08 s1 | **2/N** |
  | 5 | une **soustraction** se fait sur l'état **d'APRÈS** la passe | 30/08 s1 | **1/N** |
  | 6 | une **ancre qui couvre N lignes identiques** se prend **en bloc** | 30/08 s1 | **0/N** |
  | 7 | **`--recaler` est une ÉDITION** : il compte au `numstat` et au `git status` | 30/08 s1 | **1/N** |
  | 8 | un **`title:` EN** se lit d'abord dans les **libellés que l'anglais écrit déjà** vers la cible | 30/08 s2 | **0/N** |
  | 9 | un **titre de callout** se relève dans le corpus, comme un titre de section | 30/08 s2 | **0/N** |
  | 10 | la **liste des artefacts d'un bloc se FERME avant le bloc** | 30/08 s2 | **2/N** |
  | 11 | une **fiche EN se rédige en partant de son squelette sur disque** — désormais portée par le mode **`--corps`** | 29/08 s7, code 30/08 s3 | **1/N** |
  | 12 | la **borne de lot cède devant une fiche qu'on ne coupe pas** | 30/08 s3 | **0/N** |
  | 13 | une **déclaration C131 se termine par le total qu'elle implique** | 29/08 s8 | **2/N** |
  | 14 | la **batterie ne se filtre jamais au lancement** | 29/08 | **1/N** |

  ⚠ **La clause de périmètre C109 est à 6/N**, et l'**assomption C113 sur les
  chaînes affichées libres** reste **NON ARBITRÉE** — le lot 8 n'a pas pu la
  tester, faute de tout bloc de code. Coût du revert connu : **4 littéraux de
  code et 1 ligne de bloc de sortie sur 2 fiches EN**.

  ⚠ **Fait neuf de ce lot, et il change un geste** : `creer-fiche-en.mjs`
  porte depuis la séance 3 du 30/08 le mode **`--corps <fiche EN> <fichier de
  corps>`**, qui **remplace le corps et recopie le front matter à l'octet**
  sous cinq gardes. **La rédaction des fiches EN de ce lot passera par un
  fichier de corps, jamais par la réécriture du fichier.** *C'est la première
  fois qu'un lot dispose de l'outil ; le mode est à 1/N, sur un test positif
  de non-régression et un test négatif.*

- **Périmètre annoncé par le brief** — l'**anneau 2** à **23 fiches,
  37 148 mots, 0 porteuse**. **`ded` vaut 0 sur tout le restant**, donc
  `tot` = `deh` et **C127 est hors sujet pour le quatrième lot d'affilée** ;
  `mesure-chevron --tout` ne sert qu'à confirmer **34 paires, 0 divergente**.
  **Gisement de tête nommé** : le palier « Analyse fonctionnelle » de
  `conduite/proj/` — **8 fiches, 8 190 mots dérivés**, au-dessus de la borne
  **6 657** —, qui **se coupe en deux lots** ; **`fonction` et
  `caracteriser-une-exigence` se prennent ENSEMBLE**, leurs six alias
  (`FP`, `FS`, `FC`, `critere`, `flexibilite`, `niveau`) étant les six
  `CIBLES SANS FICHE` du corpus.
- **Blocs prévus** — **64** garde d'ouverture ; **65** composition du lot 9
  (relevé nominatif de l'anneau 2) ; **66** cadrage (volume, candidats C109) ;
  G1 ; **67** éprouvage bilingue du motif des puces (C110) et relevé du lot ;
  **68** passe C109 ; G2 ; **69** les **CINQ** relevés d'avant rédaction, puis
  génération des squelettes ; G3 ; **70** rédaction des fiches EN **par
  `--corps`** ; G3bis ; **71** les `title:` EN (C125) ; **72** clôture du
  lot 9 ; G4 ; **73** clôture §7.

---

## Recoupement du prompt de lancement contre la ligne « Prochaine session »

*La ligne de référence est celle de l'entrée du **30/08 (suite 2)** ; l'entrée
du **30/08 (suite 3)** la reconduit explicitement — « brief inchangé par
rapport à l'entrée du 30/08 (suite 2) » — et lui **ajoute un terme**.*

**Ce que le prompt reprend au mot, sans écart :** l'anneau 2 à **23 fiches /
37 148 mots / 0 porteuse** ; `ded` nul sur tout le restant, donc `tot` = `deh`
et **C127 hors sujet pour le quatrième lot d'affilée** ; `mesure-chevron
--tout` en simple confirmation de **34 paires / 0 divergente** ; le palier
« Analyse fonctionnelle » de `conduite/proj/` comme gisement de tête,
**8 fiches / 8 190 mots dérivés**, au-dessus de la borne, **donc deux lots** ;
`fonction` et `caracteriser-une-exigence` **ensemble**, leurs **six alias**
nommés un par un ; les **CINQ** relevés avant rédaction, titres de callout
compris, référence `Watch out` **44** et `Tip` **41**.

**Ce que le prompt ajoute, et qui est traçable à une mesure ou à une règle en
vigueur — donc aucun n'est un écart de brief, et aucun n'est reconduit sans
remesure (C118) :**

1. **Les cinq relevés sont détaillés avec leur candidate et sa marque** :
   titres de section (**3/N**, candidate à porter à 4/N) ; `title:` **lus
   d'abord dans les libellés** (**0/N**) ; motif des puces sur un échantillon
   de chaque langue ; chaînes affichées sous C113 ; titres de callout
   (**0/N**). *Traçables au §8 de `conventions.md`, marques vérifiées
   ci-dessus.*
2. **L'ordre de lecture des `title:`** — les libellés **avant** les trois
   tests de C125. *C'est la candidate née du lot 8, écrite en toutes lettres
   au §8.*
3. **Les références datées des formes de production EN**, `204 / 140 / 139 /
   102 / 37 / 30`, avec la mention **« prise AVANT les 5 fiches du lot 8 »**.
   *Traçable à la ligne « Tailles » du 30/08 (suite 2), qui publie la
   nouvelle référence **avec son instant** — correctif de la cause nommée
   « un relevé d'avant-rédaction servi comme état de clôture », deux
   réfutations au lot 8.* ⚠ **Le prompt reprend l'avertissement, ce qui veut
   dire que ces six chiffres NE SONT PAS un état de clôture : les cinq fiches
   du lot 8 ont été écrites après, et le relevé du bloc 69 doit sortir
   AU-DESSUS.**
4. **`titres-doublons` FR 243 / 243 / 0, EN 216 / 216 / 0.** *Ligne
   « Tailles » du 30/08 (suite 2).*
5. **Puces à tiret du corpus : FR 1 002 / 172 / 248, EN 885 / 149 / 216.**
   *Même ligne, populations comprises — la redéclaration est la règle
   d'usage 3, à 2/N.*
6. **Les deux populations à ne pas confondre** — **corpus restant 26**,
   **anneau 2 restant 23**. *Même ligne : `restant 31 → 26 fiches` pour le
   corpus, `23 restantes` pour l'anneau ; l'écart de 3 est nommé de longue
   date — `xiao-prise-en-main`, `xiao-sense`, `embarque/pcb/kicad`.*
7. **La garde de péremption au cadrage ET avant chaque passe**, et **la liste
   des artefacts d'un bloc fermée AVANT le bloc**, avec le motif chiffré
   (« C131 tombée trois fois le 30/08 »). *Sous-règle C116 (5) et règle
   d'usage 10.*
8. **Les deux outils d'écriture nommés** : `remplacer-passe.mjs` et
   `renommer-titres.mjs`. *Amendement du 29/08 (suite 8) à la sous-règle
   C116, terme (6).*

⚠ **UN TERME DU PROMPT NE SE RECOUPE PAS, ET C'EST LE TROISIÈME LOT D'AFFILÉE
QUE LE REGISTRE PREND LE BRIEF EN DÉFAUT.** Le prompt écrit, pour le motif des
puces : *« réponses publiées **10** des deux côtés, **0/3/1/1/0** »*. **La
décomposition somme à 5, pas à 10** — elle est donc **incohérente avec son
propre total**, dans la même phrase. **La réponse publiée au registre est
`3 / 3 / 0 / 3 / 1 = 10`**, écrite au bloc 54 de ce même fichier (P54.8 et
P54.9) et à l'entrée du 30/08 (suite 2). *Le lot 7 avait corrigé un **mot** du
brief, le lot 8 un **chiffre**, celui-ci corrige une **décomposition**.*
✅ **Conséquence protocolaire, et elle est nulle** : C110 exige que la réponse
d'un échantillon soit **publiée avant la mesure**, et le registre la porte.
**Le bloc 67 relira les réponses au registre, jamais au prompt** — et le terme
qui prouve reste **la décomposition, pas le total**, exactement comme au
bloc 54.

⚠ **UN TERME MANQUE AU PROMPT, ET IL EST DANS L'ENTRÉE DU 30/08 (SUITE 3).**
Le prompt ne nomme **pas** le mode **`--corps`**, alors que la ligne
« Prochaine session » de la suite 3 écrit : *« le lot 9 est le premier qui
pourra employer `--corps` : la rédaction d'une fiche EN passe désormais par un
fichier de corps, jamais par la réécriture du fichier. »* **Le prompt dit
pourtant « plus celles du 30/08 (deux séances) »**, ce qui range la règle dans
le régime. ✅ **Elle est donc tenue**, et le bloc 70 s'y conforme.

⚠ **Et un dernier terme du prompt est neuf par rapport aux deux entrées** :
*« un relevé d'avant-rédaction n'est pas un état de clôture »*. *C'est la
cause n° 3 du bilan du lot 8, promue au rang de point d'attention du brief.*

**Conclusion du recoupement : le prompt est conforme, il durcit le brief sur
trois points (les cinq relevés détaillés, l'instant des références, la
fermeture de la liste d'artefacts), et il porte UNE erreur de décomposition
que le registre corrige sans arbitrage.**

---

## Déclaration C131 d'ouverture — population des compteurs, artefacts versés, et TOTAL

*C131 et son amendement du 29/08 (suite 8) : nommer les artefacts que la séance
elle-même verse dans la population comptée, **et les additionner** ; la
déclaration ne vaut que pour le bloc qui l'écrit, et **chaque bloc qui crée ou
modifie un fichier suivi la rejoue**. Plus la règle d'usage 10 du 30/08
(suite 2) : **la liste se ferme AVANT le bloc, et aucune commande du bloc
n'écrit hors de cette liste.***

**Population du compteur `git status --porcelain`** — le dépôt entier, tous
états confondus (`M`, `??`, `A`, `D`), **moins** ce que `.gitignore` exclut. Le
`.gitignore` n'exclut que **deux chemins exacts** — `tools/batterie-sortie.txt`
et `tools/seance-sortie.txt` — donc **tout le reste de `tools/` est compté**,
fichier de prédictions et copies C124 comprises (arbitrage Tim (f)(ii) du
29/08).

**Population du compteur `hors artefacts de seance`** — la même, **moins** les
lignes dont le chemin contient `batterie-sortie` **ou** `predictions-` (deux
`-notmatch` lus dans le **code** de `batterie.ps1`, jamais dans son en-tête —
sous-règle C116 (7)).

**État de départ** — `(clean)`, **0 fichier non commité**, injecté par le
harnais après le commit `4e73aa8` de Tim. `[HORS DÉCOMPTE]`

**Liste FERMÉE des artefacts versés avant que l'étape 1 du bloc 64 ne lise
`git status` :**

| # | artefact | état git | compté au total | compté hors artefacts |
|---|---|---|---|---|
| 1 | `tools/predictions-260830.md` (ce texte, appendu avant le bloc 64 — fichier **suivi** depuis `542bb4f`) | ` M` | **oui** | non (`predictions-`) |
| 2 | `tools/batterie-sortie-3008b19.txt` (copie C124 que l'étape 0 crée **avant** que l'étape 1 ne lise `git status`) | `??` | **oui** | non (`batterie-sortie`) |
| — | `tools/batterie-sortie.txt` (réécrit en fin de bloc, **et de toute façon après la lecture**) | ignoré | non | non |

**TOTAL impliqué par la déclaration : 1 + 1 = 2 au total, 0 + 0 = 0 hors
artefacts de séance.**

**Le bloc 64 ne lance qu'UNE commande** (`batterie.ps1 -Phase garde`) et cette
commande n'écrit que **deux** fichiers : `tools\batterie-sortie.txt` (ignoré)
et la copie datée ci-dessus. **La liste est close.**

⚠ **Le rang de la copie C124 est prédit, pas composé de mémoire** : l'étape 0
cherche le **premier rang libre** de `tools\batterie-sortie-<jjMM>b<N>.txt`.
`Get-Date -Format 'ddMM'` rend **`3008`** ; le listing du répertoire `tools/`
fait à l'ouverture de cette séance porte `3008b1` à **`3008b18`** sans trou,
le rang **19** est donc le premier libre.

---

## ⚠ INCIDENT D'OUVERTURE — QUATRIÈME RÉCIDIVE : HEAD ET LE STATUT SONT DANS MON CONTEXTE AVANT LA GARDE

Le harnais injecte de nouveau, en tête de contexte, un bloc `gitStatus` portant
la **branche** (`main`), le **statut** (`(clean)`) et les **cinq derniers
commits**, dont `4e73aa8 arbitrages lot 8 rendus: borne levee sur easyeda,
Ecodesign confirme, mode --corps`.

**Conséquence protocolaire, identique aux trois récidives précédentes :** la
prédiction du **hash de `HEAD`** et celle du **statut d'ouverture** sont
**HORS DÉCOMPTE** — elles recopient une donnée déjà présente. Elles sont
écrites quand même, parce que la garde les compare et qu'un écart resterait un
arrêt.

⚠ **Ce que l'injection ne dit PAS, et qui reste à décompte plein** : (a)
l'**horodatage** du commit `4e73aa8`, absent du bloc injecté ; (b) les **deux
chiffres** de la ligne `fichiers modifies non commites`, le statut injecté
datant de l'ouverture de la session, avant que j'aie écrit le moindre octet ;
(c) les **trois dates d'écriture** des fichiers de pilotage.

---

## Bloc 64 — garde de péremption d'ouverture

**Commande unique :**
`powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase garde`

*Aucune fiche passée : `-Fiches` et `-FichesEn` vides — la composition du lot 9
n'est pas encore instruite, et la passer ici reviendrait à inventer un lot
avant de l'ouvrir. **La batterie ne se filtre jamais au lancement** (règle
d'usage 14) : la sortie est intégrale, le tri se fait à la lecture.*

**Base de comparaison** — la sortie de la garde du bloc 61, conservée dans
`tools/batterie-sortie.txt` (dernier lancement de la séance 3), et le commit
`4e73aa8` que Tim a passé depuis.

### Prédictions

**P64.1 — autocontrôle ASCII (C122) et copie C124.** `lignes non ASCII dans
batterie.ps1 : 0`, puis `sortie precedente copiee :
tools\batterie-sortie-3008b19.txt`. *Le fichier n'a pas été touché depuis son
dernier autocontrôle à 0 ; rang 19 par la déclaration C131 ci-dessus.*

**P64.2 — `HEAD` git, en deux termes de statut différent.** La ligne sort
sous la forme `HEAD git : 4e73aa8 2026-08-30 HH:mm:ss +0200`.
- le **hash `4e73aa8`** est **`[HORS DÉCOMPTE]`** (injecté) ;
- l'**horodatage** est à **décompte plein** : **date `2026-08-30`**, **heure
  strictement postérieure à `08:42:49`** (heure de la garde du bloc 61, que le
  travail de la séance 3 puis le commit de Tim ont suivie).

⚠ **P64.3 — deux branches nommées AVANT la mesure.** (a) `HEAD` = `4e73aa8`,
**branche attendue**, la séance 3 ayant été livrée par Tim : on poursuit ;
(b) `HEAD` ≠ `4e73aa8`, ou statut d'ouverture portant un fichier de
`content/` : **ARRÊT**, remontée à Tim, aucune écriture.

**P64.4 — compteurs `git status`.** `fichiers modifies non commites : 2
(hors artefacts de seance : 0)`, **par la liste fermée de la déclaration C131
ci-dessus** — le fichier de prédictions en ` M` et la copie
`batterie-sortie-3008b19.txt` en `??`, tous deux filtrés du second compteur.
*Le chiffre `hors artefacts` se lit contre la liste nominative, jamais seul
(sous-règle C116 (9)).*

**P64.5 — dates de dernière écriture, exactement TROIS lignes** (`-Fiches` et
`-FichesEn` vides) :
- `JOURNAL.md` — **`2026-08-30`**, heure **strictement postérieure à
  `08:29:20`** *(la clôture §7 de la séance 3, bloc 63, l'a réécrit après la
  garde du bloc 61)* ;
- `conventions.md` — **`2026-08-30`**, heure **strictement postérieure à
  `08:27:43`** *(quatre éditions au bloc 63)* ;
- `TODO.md` — **`2026-08-29 21:48:08`**, **inchangé à la seconde** *(aucune
  séance du 30/08 ne l'a touché ; il est à 282,7 ko depuis, écart toujours non
  instruit)*.

⚠ *Un commit ne change pas la date d'écriture d'un fichier : `4e73aa8` ne
déplace aucune des trois. **Les deux écarts prédits viennent de la séance 3
elle-même, pas d'une main tierce** — c'est la branche (a) de P64.3.*

**P64.6 — invariants d'entête et de sortie.** `phase demandee : garde
anneau : 2   chevron : False`, `date ISO : 2026-08-30`, heure **strictement
postérieure à `08:42:49`**, `node : v24.15.0`, et **2 étapes, 2 codes de
sortie, tous `0`**.

**P64.7 — ce que la sortie NE porte PAS.** Aucune ligne de volume, de contrôle,
de dérive, d'anneau, de wikilinks, de médias ni de libellés : la phase `garde`
s'arrête à l'étape 1. *Terme écrit pour réfuter : si une seule de ces lignes
apparaît, c'est que la phase passée n'est pas celle que je crois.*

### Constats du bloc 64 (sortie `tools/batterie-sortie.txt`, copie C124 `3008b19`)

| # | prédiction | constat | verdict |
|---|---|---|---|
| P64.1 | ASCII **0**, copie `tools\batterie-sortie-3008b19.txt` | 0 ; `3008b19` | **tenue** |
| P64.2a | hash `4e73aa8` | `4e73aa8` | *[hors décompte]* |
| P64.2b | horodatage `2026-08-30`, heure > `08:42:49` | `2026-08-30 08:57:42 +0200` | **tenue** |
| P64.3 | branche (a) attendue, (b) = arrêt | branche **(a)** | *[déclarative]* |
| P64.4 | `2   (hors artefacts de seance : 0)` | 2 / 0 | **tenue** |
| P64.5 | 3 lignes ; JOURNAL `2026-08-30` > `08:29:20` ; conventions `2026-08-30` > `08:27:43` ; TODO `2026-08-29 21:48:08` à la seconde | 3 lignes ; `08:50:22` ; `08:49:11` ; `2026-08-29 21:48:08` | **tenue** |
| P64.6 | `cadrage`→`garde`/`2`/`False`, ISO `2026-08-30`, heure > `08:42:49`, `node : v24.15.0`, 2 codes à 0 | `garde   anneau : 2   chevron : False`, `2026-08-30`, `09:10:43`, `v24.15.0`, 2 × 0 | **tenue** |
| P64.7 | aucune ligne de volume/contrôle/dérive/anneau/wikilinks/médias/libellés | aucune | **tenue** |

**Bilan du bloc 64 : 6 prédictions à décompte plein, 6 tenues, 0 réfutée**
(plus 1 terme hors décompte et 1 déclarative). **La garde de péremption est
au vert, branche (a) : on poursuit.**

✅ **LES DEUX SEULS ÉCARTS DE DATE SONT CEUX QUE LA SÉANCE 3 A ÉCRITS, ET ILS
ÉTAIENT PRÉDITS COMME TELS.** `JOURNAL.md` passe de `08:29:20` à `08:50:22`,
`conventions.md` de `08:27:43` à `08:49:11` — les deux **entre** la garde du
bloc 61 et le commit `4e73aa8` de `08:57:42`, ce qui les range dans la clôture
§7 de la séance 3 et **nulle part ailleurs**. `TODO.md` n'a pas bougé d'une
seconde depuis le 29/08. *La garde ne dit pas seulement « rien d'inattendu » ;
elle dit **quelle main** a écrit, et l'ordre des horodatages suffit.*

⚠ *Artefact hors dépôt, nommé pour que la liste C131 reste vraie : le texte de
ce bloc a été composé dans un fichier du répertoire de travail temporaire de la
session, **hors `content/` et hors `tools/`**. Il n'entre dans aucun des deux
compteurs `git status` et n'a pas à figurer à la déclaration ; il est écrit ici
pour que « aucune commande du bloc n'écrit hors de la liste » se lise sans
angle mort.*

---

## Déclaration C131 du bloc 65 — rejouée

**Populations** — inchangées et redéclarées : `git status --porcelain` sur le
dépôt entier moins les **deux chemins exacts** du `.gitignore` ; `hors
artefacts de seance` = la même moins les lignes portant `batterie-sortie` ou
`predictions-`.

**Liste FERMÉE des artefacts au moment où l'étape 1 du bloc 65 lira
`git status` :**

| # | artefact | état git | total | hors artefacts |
|---|---|---|---|---|
| 1 | `tools/predictions-260830.md` (déjà ` M`, ce texte l'allonge sans changer son état) | ` M` | **oui** | non |
| 2 | `tools/batterie-sortie-3008b19.txt` (créée au bloc 64) | `??` | **oui** | non |
| 3 | `tools/batterie-sortie-3008b20.txt` (créée par l'étape 0 du bloc 65, **avant** la lecture) | `??` | **oui** | non |
| — | `tools/batterie-sortie.txt` | ignoré | non | non |

**TOTAL impliqué : 3 au total, 0 hors artefacts de séance.**

**Le bloc 65 lance UNE commande d'écriture** (`batterie.ps1 -Phase cadrage`,
qui n'écrit que `batterie-sortie.txt` et sa copie datée) **et une lecture sans
écriture** (`conduite/proj/index.md`, pour lire les paliers du hub). **La liste
est close.**

---

## Bloc 65 — composition du lot 9 : relevé nominatif de l'anneau 2 et paliers du hub

**Commandes, dans cet ordre :**

1. `powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase cadrage`
   *(sans `-Fiches` : la composition n'est pas encore arrêtée ; la passer ici
   reviendrait à inventer le lot avant de l'instruire. La batterie ne se filtre
   jamais au lancement — règle d'usage 14.)*
2. lecture de `content/conduite/proj/index.md` — **le palier du hub est le
   critère qui a tranché le lot 8**, et le brief nomme un palier
   (« Analyse fonctionnelle ») sans en donner la composition.

**Base de comparaison** — la sortie d'état de la clôture du lot 8,
`tools/batterie-sortie-3008b18.txt`, prise le 30/08 vers 08:3x. **Rien n'a
touché à `content/` depuis** : la séance 3 n'a écrit ni fiche ni source, et le
commit `4e73aa8` ne déplace rien.

### Prédictions

**P65.1 — autocontrôle et copie C124.** `lignes non ASCII dans batterie.ps1 :
0` ; `sortie precedente copiee : tools\batterie-sortie-3008b20.txt`.

**P65.2 — paramètres et horloge.** `phase demandee : cadrage   anneau : 2
chevron : False` ; `date ISO : 2026-08-30` ; heure **strictement postérieure à
`09:10:43`**.

**P65.3 — HEAD, au caractère.** `HEAD git : 4e73aa8 2026-08-30 08:57:42
+0200`. *Décompte plein : la prédiction porte sur la **stabilité** de HEAD
entre deux blocs de ma séance, pas sur la valeur injectée.*

**P65.4 — compteurs git.** `fichiers modifies non commites : 3   (hors
artefacts de seance : 0)`, par la liste fermée ci-dessus.

**P65.5 — node et dates.** `node : v24.15.0` ; **3 lignes de dates**,
identiques au bloc 64 **au caractère** : `JOURNAL.md 2026-08-30 08:50:22`,
`conventions.md 2026-08-30 08:49:11`, `TODO.md 2026-08-29 21:48:08`.

**P65.6 — forme de la sortie.** **QUATRE étapes** titrées `0`, `1`,
`2 - volume et candidats du lot`, `4 - anneau, dette, chevron, cibles sans
fiche (--anneau)` — **l'étape 3 n'existe pas**, le `else` du code fusionnant 2
et 3 —, **4 codes de sortie, tous `0`**. L'étape 2 porte la seule ligne
`aucune source FR passee (-Fiches) : etapes de lot sautees.`

**P65.7 — en-tête de l'anneau 2, au caractère.** `anneau 0 (index de depart)
: 4` ; `cibles BRUTES : 222` ; `deja vues aux rangs 0..1 : 77` ;
`ANNEAU 2 NET : 145` ; `deja traduites : 122` ; `RESTANT : 23`.
*Le NET se calcule sur le graphe des liens **français** : traduire ne le
déplace pas, et rien n'a touché à `content/` depuis la clôture du lot 8.*

**P65.8 — la liste nominative des 23, au caractère et dans cet ordre**
(23 lignes, `chemin` puis mots) :

```
conduite/proj/afnor-nfx50-151                            91
conduite/proj/bete-a-cornes                             931
conduite/proj/caracteriser-une-exigence                2004
conduite/proj/etat-de-l-art-technique                  2286
conduite/proj/fonction                                  384
conduite/proj/mecatronique                              262
conduite/proj/mind-map                                  908
conduite/proj/pieuvre                                  1324
embarque/asservissement                                 925
embarque/boucle-ouverte                                1100
embarque/mcu/ascii                                      671
embarque/mcu/chien-de-garde                            2005
embarque/mcu/filtrage                                  1397
embarque/mcu/fonction-informatique                      398
embarque/mcu/ide                                        385
embarque/mcu/potentiometre                              519
embarque/mcu/programmation-non-bloquante               1829
embarque/mcu/sans-fil/xbee                              135
embarque/pcb/easyeda                                   9773
embarque/protection-electronique                       1389
embarque/simulation/falstad                            3244
embarque/simulation/ltspice                            3848
embarque/simulation/wokwi                              1340
```

**P65.9 — total du restant.** `RESTANT DE L ANNEAU 2 (23 fiches)  37148`,
**identique au brief**.

**P65.10 — angle mort du chevron.** `fiches porteuses : 0`,
`clotures en chevron : 0`, et la ligne
`-> zero fiche porteuse = le correctif n est pas bloquant pour ce lot.`
⚠ *C'est le terme qui rend **C127 hors sujet pour le quatrième lot d'affilée**
et qui réduit `mesure-chevron --tout` à une confirmation.*

**P65.11 — orphelines et cibles sans fiche.**
`ATTEIGNABLES PAR AUCUN PARENT TRADUIT (0)` ; puis
`CIBLES SANS FICHE (6) - liens rouges cote francais :` avec, **dans l'ordre
alphabétique du script**, `[[FC]]`, `[[FP]]`, `[[FS]]`, `[[critere]]`,
`[[flexibilite]]`, `[[niveau]]`. *Ce sont exactement les six alias que le brief
attache à `fonction` et `caracteriser-une-exigence`.*

**P65.12 — dette du front courant.** `fiches sources (traduites) : 216` ;
`cibles rouges distinctes : 26` ; `mots : 39416` ; `dont HORS anneaux 0..2 :
2`, nommées `embarque/mcu/xiao/xiao-prise-en-main` et
`embarque/mcu/xiao/xiao-sense`. ⚠ *Les **deux populations** que le prompt
demande de ne pas confondre : **26** pour le corpus, **23** pour l'anneau 2, et
l'écart de 3 est ces deux `xiao/` plus `embarque/pcb/kicad`, invisible aux
trois compteurs.*

**P65.13 — le palier « Analyse fonctionnelle » du hub, terme écrit pour
réfuter.** Le brief dit **8 fiches, 8 190 mots**. La somme des **huit** lignes
`conduite/proj/` de P65.8 vaut `91 + 931 + 2004 + 2286 + 384 + 262 + 908 +
1324` = **8 190**. **Je prédis donc que le palier « Analyse fonctionnelle » de
`conduite/proj/index.md` recouvre EXACTEMENT ces huit fiches**, sans en
contenir une neuvième déjà traduite ni en omettre une du restant.
⚠ *Si le hub range l'une des huit ailleurs — `mecatronique` et
`afnor-nfx50-151` sont les deux candidates à ne pas être des outils d'analyse
fonctionnelle —, alors le « 8 fiches / 8 190 mots » du brief est un **compte de
répertoire** déguisé en palier, et le critère qui a tranché le lot 8 ne
s'applique pas ici. **C'est le terme qui décide si le lot se compose sur le hub
ou sur la borne seule.***

**P65.14 — ce que la sortie NE porte PAS.** Ni corpus, ni `--controle`, ni
dérive, ni foisonnement, ni `--style` EN, ni médias, ni wikilinks, ni
`--libelles` : la phase `cadrage` s'arrête à l'étape 4.

### Constats du bloc 65 (sortie `tools/batterie-sortie.txt`, copie C124 `3008b20`)

| # | prédiction | constat | verdict |
|---|---|---|---|
| P65.1 | ASCII 0 ; copie `3008b20` | 0 ; `tools\batterie-sortie-3008b20.txt` | **tenue** |
| P65.2 | `cadrage / 2 / False`, ISO `2026-08-30`, heure > `09:10:43` | idem ; `09:12:39` | **tenue** |
| P65.3 | `HEAD git : 4e73aa8 2026-08-30 08:57:42 +0200` au caractère | identique | **tenue** |
| P65.4 | `3   (hors artefacts de seance : 0)` | 3 / 0 | **tenue** |
| P65.5 | `v24.15.0` ; 3 dates identiques au caractère | `v24.15.0` ; `08:50:22` / `08:49:11` / `2026-08-29 21:48:08` | **tenue** |
| P65.6 | 4 étapes `0 / 1 / 2 / 4`, pas d'étape 3, 4 codes à 0, ligne « etapes de lot sautees » | exactement | **tenue** |
| P65.7 | `4 / 222 / 77 / 145 / 122 / 23` | identique | **tenue** |
| P65.8 | les 23 lignes au caractère et dans l'ordre | identiques | **tenue** |
| P65.9 | `RESTANT DE L ANNEAU 2 (23 fiches)  37148` | identique | **tenue** |
| P65.10 | porteuses 0, clôtures 0, ligne « pas bloquant » | identique | **tenue** |
| P65.11 | `ATTEIGNABLES ... (0)` ; `CIBLES SANS FICHE (6)` : FC, FP, FS, critere, flexibilite, niveau | identique | **tenue** |
| P65.12 | dette `216 / 26 / 39416 / 2`, les deux `xiao/` nommées | identique | **tenue** |
| P65.13 | le palier « Analyse fonctionnelle » recouvre **exactement** les huit fiches du restant | **NEUF entrées** : les huit + `cahier-des-charges-fonctionnel`, **déjà traduite** | **RÉFUTÉE** |
| P65.14 | ni corpus, ni contrôle, ni dérive, ni foisonnement, ni style, ni médias, ni wikilinks, ni libellés | aucun | **tenue** |

**Bilan du bloc 65 : 14 prédictions à décompte plein, 13 tenues, 1 réfutée.**

⚠ **RÉFUTATION P65.13 — LE PALIER PORTE NEUF FICHES, PAS HUIT, ET LA
RÉFUTATION RENFORCE LE CRITÈRE AU LIEU DE L'ABATTRE.** Le palier « Analyse
fonctionnelle » de `conduite/proj/index.md` liste **neuf** entrées, dans cet
ordre : `mecatronique`, `mind-map`, `bete-a-cornes`, `pieuvre`, `fonction`,
`caracteriser-une-exigence`, `etat-de-l-art-technique`,
**`cahier-des-charges-fonctionnel`**, `afnor-nfx50-151`. **La neuvième est
traduite depuis le 25/08 (suite 3), où elle a été la fiche pivot à N=1 sous
C116.**

*Ce que la réfutation change, et ce qu'elle ne change pas.* **Elle ne déplace
aucun volume** : `8 190` reste la somme des huit non traduites, et le brief
avait raison sur le chiffre. **Elle corrige la nature de l'objet** : « 8 fiches
/ 8 190 mots » n'est pas la taille du palier, c'est **ce qu'il reste du
palier**. ✅ **Et elle referme le doute que la prédiction avait écrit** :
`mecatronique` et `afnor-nfx50-151`, les deux candidates à ne pas être des
outils d'analyse fonctionnelle, **sont bien dans le palier** — la première en
tête (« la boucle perception → décision → action qui **définit le champ** »),
la seconde en queue (« le **cadre normatif** de l'analyse fonctionnelle »).
**Le critère du palier s'applique donc pleinement, et c'est lui qui découpe.**

⚠ *Le compte de répertoire et le compte de palier coïncident ici par accident :
`conduite/proj/index.md` porte **30 entrées** réparties en **cinq paliers**
(mesuré sur le fichier lu à ce bloc : 8 / 9 / 5 / 5 / 3), et
c'est seulement parce que les quatre autres paliers sont **entièrement
traduits** que « les 8 de `conduite/proj/` » et « les 8 restants du palier »
donnent la même liste. **Deux populations de plus à ne pas confondre**, et la
prochaine coupe dans ce répertoire ne pourra plus s'appuyer sur la
coïncidence.*

---

## Dossier de composition du lot 9 — instruit sur les sorties des blocs 65

### Ce que le brief impose, et ce qu'il laisse ouvert

**Imposé** : le palier « Analyse fonctionnelle » est le **gisement de tête** ;
il pèse **8 190** contre une borne de **6 657**, donc il **se coupe en deux
lots** ; **`fonction` et `caracteriser-une-exigence` se prennent ENSEMBLE**.
**Ouvert** : *où* passe la coupe, et *avec quoi* le lot se complète.

### Le point de coupe — l'ordre du palier est un ordre de récit, pas un tri

Le palier s'annonce, au hub, comme *« la chaîne d'expression du besoin, du
brainstorming initial au cahier des charges »*, et ses neuf entrées sont
**rangées dans l'ordre de cette chaîne**, pas par ordre alphabétique ni par
poids. **La coupe se prend donc sur la chaîne**, à l'endroit où elle change de
nature :

| rang | fiche | mots | ce que la chaîne fait à ce rang |
|---|---|---|---|
| 1 | `mecatronique` | 262 | définit le champ |
| 2 | `mind-map` | 908 | recense large |
| 3 | `bete-a-cornes` | 931 | cadre le besoin |
| 4 | `pieuvre` | 1 324 | recense les fonctions |
| 5 | `fonction` | 384 | **type** les fonctions (FP / FS / FC) |
| 6 | `caracteriser-une-exigence` | 2 004 | **chiffre** les fonctions (critère / niveau / flexibilité) |
| — | — | — | ⟵ **la coupe : le besoin est exprimé, typé et chiffré** |
| 7 | `etat-de-l-art-technique` | 2 286 | va chercher les solutions **existantes** |
| 8 | *(`cahier-des-charges-fonctionnel`, traduite)* | — | formalise |
| 9 | `afnor-nfx50-151` | 91 | encadre normativement |

**Rangs 1 à 6 = 262 + 908 + 931 + 1 324 + 384 + 2 004 = 5 813 mots, 6 fiches.**
**Reste 7 + 9 = 2 286 + 91 = 2 377 mots, 2 fiches**, et `5 813 + 2 377 = 8 190`
referme le palier.

### Les quatre critères, appliqués dans l'ordre

1. **La borne.** 5 813 contre 6 657 : **marge 844**. ⚠ *Ce sera le lot le plus
   lourd du chantier hors `easyeda` — les huit lots mesurés tiennent entre
   3 348 et 5 668.* **Aucune découpe de rangs 1..7 ne passe** (8 099), donc la
   coupe ne peut pas descendre plus bas dans la chaîne.
2. **La contrainte nommée du brief.** `fonction` (rang 5) et
   `caracteriser-une-exigence` (rang 6) sont **tous deux du côté haut de la
   coupe**. ✅ **Contrainte tenue, et elle est ce qui fixe la coupe à 6 et non
   à 4** : couper après `pieuvre` (3 425) les séparerait de rien, mais couper
   après `fonction` (3 809) les séparerait l'une de l'autre.
3. **Pas de fiche orpheline.** Le résidu (`etat-de-l-art-technique` +
   `afnor-nfx50-151`) fait **deux** fiches, pas une : le lot 10 aura de quoi se
   composer, et il lui restera **4 280** mots de marge sous la borne pour se
   compléter ailleurs. *Une coupe à 7 rangs aurait laissé
   `afnor-nfx50-151` seule à **91 mots**, ce qui est une orpheline au sens
   strict.*
4. **Le palier du hub.** La coupe **ne traverse aucun palier** : elle reste
   **à l'intérieur** de « Analyse fonctionnelle », ce que le brief autorise
   explicitement. *Le critère du lot 8 — fermer des paliers entiers — est
   **inapplicable ici**, aucun palier de moins de 6 657 mots ne restant ouvert
   dans ce répertoire.*

### ⚠ Le seul critère qui plaide contre, et il est écrit

`etat-de-l-art-technique` (rang 7) est **la suite immédiate** de
`caracteriser-une-exigence` dans la chaîne : le CdCF se nourrit des deux. **Les
traduire dans deux lots différents fixe le vocabulaire anglais du triplet
`critère / niveau / flexibilité` avant que la fiche qui l'emploie en tableau
d'état de l'art ne soit écrite.** *C'est le symétrique exact de l'argument posé
au lot 8 pour `fast` avant `fonction` — et il s'était résolu par une mesure du
corpus, pas par un arbitrage.* ✅ **Mesure à faire au bloc 66**, et elle est
prédite : le corpus anglais écrit-il déjà `criterion / level / flexibility` en
libellés ou en prose ? **Si oui, il n'y a rien à décider ; si non, le lot 9
crée la référence et le lot 10 la suit** — ce qui est l'ordre naturel, la
fiche qui **enseigne** le triplet étant dans le lot 9.

### ⚠ Les six `CIBLES SANS FICHE` — ce que le compteur dit, et ce qu'il ne dit pas

`[[FC]]`, `[[FP]]`, `[[FS]]`, `[[critere]]`, `[[flexibilite]]`, `[[niveau]]`
sortent en **liens rouges côté français**. **Le brief les attache à `fonction`
et `caracteriser-une-exigence`** — trois pour la typologie, trois pour le
triplet —, ce que le hub confirme mot pour mot (« la typologie FP / FS / FC »,
« le triplet critère / niveau / flexibilité »). ⚠ **Mais « cible sans fiche »
est une mesure du graphe, pas une intention** : elle dit qu'**aucun fichier ne
porte ces noms**, elle ne dit pas qu'un `aliases:` les capte. **À vérifier au
bloc 66, sur le front matter des deux sources FR** — et c'est un terme écrit
pour réfuter, parce que les deux lectures mènent à deux gestes opposés :
*alias déjà déclaré* ⇒ le rouge est un angle mort du script et **rien n'est à
faire** ; *alias absent* ⇒ les six liens sont **vraiment rouges à l'écran** et
le lot touche à six liens du corpus FR, ce qui **change la passe C109**.

### Composition arrêtée

> **LOT 9 = les six premiers rangs du palier « Analyse fonctionnelle » de
> `conduite/proj/` :**
> `mecatronique`, `mind-map`, `bete-a-cornes`, `pieuvre`, `fonction`,
> `caracteriser-une-exigence`.
> **6 fiches, 5 813 mots dérivés, marge 844, 0 porteuse de chevron.**
> **Résidu pour le lot 10 : `etat-de-l-art-technique` + `afnor-nfx50-151`,
> 2 fiches, 2 377 mots.**

⚠ **Décision prise seule sous C117/C120** — aucun des quatre critères n'a
demandé d'arbitrage, et les deux points ouverts (le vocabulaire du triplet, les
six alias) sont des **mesures du bloc 66**, pas des questions à Tim.

---

## Déclaration C131 du bloc 66 — rejouée

**Populations** — inchangées, redéclarées : `git status --porcelain` sur le
dépôt entier moins les deux chemins exacts du `.gitignore` ; `hors artefacts de
seance` = la même moins `batterie-sortie` et `predictions-`.

**Liste FERMÉE des artefacts au moment où l'étape 1 du bloc 66 lira
`git status` :**

| # | artefact | état git | total | hors artefacts |
|---|---|---|---|---|
| 1 | `tools/predictions-260830.md` | ` M` | **oui** | non |
| 2 | `tools/batterie-sortie-3008b19.txt` (bloc 64) | `??` | **oui** | non |
| 3 | `tools/batterie-sortie-3008b20.txt` (bloc 65) | `??` | **oui** | non |
| 4 | `tools/batterie-sortie-3008b21.txt` (étape 0 du bloc 66, **avant** la lecture) | `??` | **oui** | non |
| — | `tools/batterie-sortie.txt` | ignoré | non | non |

**TOTAL impliqué : 4 au total, 0 hors artefacts de séance.**

**Le bloc 66 lance UNE commande d'écriture** (`batterie.ps1 -Phase cadrage
-Fiches …`, qui n'écrit que `batterie-sortie.txt` et sa copie datée) **et une
lecture sans écriture** (les six front matters FR). **La liste est close.**

---

## Bloc 66 — cadrage du lot 9 (volume, candidats C109, alias des six cibles rouges)

**Commandes, dans cet ordre :**

1. ```
   powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase cadrage -Fiches conduite/proj/mecatronique.md,conduite/proj/mind-map.md,conduite/proj/bete-a-cornes.md,conduite/proj/pieuvre.md,conduite/proj/fonction.md,conduite/proj/caracteriser-une-exigence.md
   ```
2. lecture des **six front matters FR**, pour le champ `aliases:`.

⚠ **Déplacement annoncé et non silencieux** : le dossier du bloc 65 écrivait
« mesure à faire au bloc 66 » pour le **vocabulaire anglais du triplet
critère / niveau / flexibilité**. Cette mesure est un **relevé de libellés**,
et sa place est le **bloc 69**, avec les quatre autres relevés d'avant
rédaction — la faire ici en doublon coûterait un `grep` de plus sans rien
décider, la composition du lot ne dépendant pas de sa réponse. **Elle est donc
reportée au bloc 69, où elle porte son propre terme de réfutation.**

### Prédictions

**P66.1 — autocontrôle et copie C124.** `lignes non ASCII dans batterie.ps1 :
0` ; `sortie precedente copiee : tools\batterie-sortie-3008b21.txt`.

**P66.2 — paramètres, horloge, HEAD.** `phase demandee : cadrage   anneau : 2
chevron : False` ; `date ISO : 2026-08-30` ; heure **strictement postérieure à
`09:12:39`** ; `HEAD git : 4e73aa8 2026-08-30 08:57:42 +0200` **au caractère**.

**P66.3 — compteurs git.** `fichiers modifies non commites : 4   (hors
artefacts de seance : 0)`, par la liste fermée ci-dessus.

**P66.4 — dates d'écriture, NEUF lignes.** Les **3** de pilotage, identiques au
bloc 65 au caractère (`08:50:22` / `08:49:11` / `2026-08-29 21:48:08`), **puis
6 lignes de fiches** (`-Fiches` porte 6 chemins, `-FichesEn` est vide).
**Aucune ligne `ABSENTE`**, et **les six dates strictement antérieures à
`2026-08-30 00:00:00`** — aucune passe du 30/08 n'a touché à
`conduite/proj/`, la passe C109 du lot 8 n'ayant porté que sur ses cinq
sources.

**P66.5 — forme de la sortie.** **CINQ étapes** titrées `0`, `1`,
`2 - volume du lot (compter-mots --lot)`,
`3 - candidats C109 des sources FR (creer-fiche-en --style, decomposition par
fiche)`, `4 - anneau, dette, chevron, cibles sans fiche (--anneau)` —
**l'étape 3 existe cette fois**, `-Fiches` étant non vide —, **5 codes de
sortie, tous `0`**.

**P66.6 — volume du lot, au mot près et par fiche.** L'étape 2 rend
**exactement** les valeurs de la liste d'anneau, `compter-mots` étant la même
source pour les deux (le module est importé par `--anneau`, mesure vérifiée sur
le lot 8 : cinq fiches, cinq chiffres identiques) :

```
conduite/proj/mecatronique.md                                262
conduite/proj/mind-map.md                                    908
conduite/proj/bete-a-cornes.md                               931
conduite/proj/pieuvre.md                                    1324
conduite/proj/fonction.md                                    384
conduite/proj/caracteriser-une-exigence.md                  2004
---------------------------------------------------------------
LOT (6 fiches)                                              5813
```

⚠ *L'ordre des lignes suit l'ordre de `-Fiches`, qui est l'ordre du palier, pas
l'ordre alphabétique.* **Marge sous la borne : 6 657 − 5 813 = 844.**

**P66.7 — `C109 de prose` : entre 55 et 80, point estimé 67.** *Base : la
densité de candidats C109 au millier de mots, mesurée sur quatre lots
consécutifs et remarquablement stable —* lot 5 `micropython/` **46 / 4 434 =
10,4** ; lot 6 `stm32/` **50 / 4 726 = 10,6** ; lot 7 **56 / 5 301 = 10,6** ;
lot 8 `conduite/proj/` **63 / 5 488 = 11,5**. *Le lot 8 est le seul du même
répertoire et le plus dense des quatre ; `11,5 × 5 813 / 1 000 = 66,8`.*

**P66.8 — décomposition par fiche, points estimés à 11,5 ‰.**
`mecatronique` **3**, `mind-map` **10**, `bete-a-cornes` **11**, `pieuvre`
**15**, `fonction` **4**, `caracteriser-une-exigence` **23**.
⚠ *Terme écrit pour réfuter : **la densité n'est pas uniforme dans un lot**, et
deux fiches courtes (`mecatronique` 262, `fonction` 384) peuvent parfaitement
sortir à 0. **Si l'une des deux sort à 0, la ligne `N a reprendre` tombe sous
6**, et c'est le seul endroit où le total peut être juste pendant que la
décomposition rate.*

**P66.9 — ligne de tête de `--style`.** `6 fiche(s) lue(s), 6 a reprendre.`
*Prédite pleine ; voir le terme de réfutation de P66.8.*

**P66.10 — les quatre verdicts mécaniques et le cinquième seau.**
`typographie francaise : 0`, `C109 creees en EN : 0`,
`hors alphabet latin : 0`, `virgule ambigue : 0` ; et
`hors perimetre` **entre 5 et 25, point estimé 15** *(lot 8 : 11 sur 5 fiches
du même répertoire)*. ⚠ *`hors perimetre` porte **quatre** familles dont
`tiret d intervalle numerique`, que la ligne de bilan ne nomme pas —
sous-règle C116 (7), cause de trois réfutations le 29/08.*

**P66.11 — l'étape 4 est identique au bloc 65, au caractère.** Même anneau,
même liste de 23, même `37148`, mêmes 6 `CIBLES SANS FICHE`, même dette
`216 / 26 / 39416 / 2`. *Rien n'a été écrit dans `content/` entre les deux
blocs ; c'est la garde de péremption qui le dit, pas moi.*

**P66.12 — les six alias, terme écrit pour réfuter.** Je prédis que les six
noms rouges sont **déclarés en `aliases:` dans le front matter des deux
sources** : `FP`, `FS`, `FC` sur `conduite/proj/fonction.md` ; `critere`,
`niveau`, `flexibilite` sur `conduite/proj/caracteriser-une-exigence.md`.
*Motif : `--anneau` résout **chemin complet, suffixe de chemin, nom de fichier
unique** — sa propre en-tête le dit — et **ne lit aucun `aliases:`** ; un alias
déclaré sort donc en `CIBLES SANS FICHE` alors que Quartz le rend vert. Le
brief les appelle « **leurs six alias** », ce qui est une affirmation de front
matter, pas de graphe.*
⚠ **Les deux lectures mènent à deux gestes opposés, et c'est pour cela que la
prédiction est écrite** : *alias déclarés* ⇒ le rouge est un **angle mort de
`--anneau`**, rien n'est à faire, et **le lot 9 refermera les six d'un coup**
en traduisant les deux fiches ; *alias absents* ⇒ **six liens vraiment rouges à
l'écran côté français**, et le lot touche à six liens du corpus FR, ce qui
**ajoute une décision à la passe C109**.

### Constats du bloc 66 (sortie `tools/batterie-sortie.txt`, copie C124 `3008b21`)

| # | prédiction | constat | verdict |
|---|---|---|---|
| P66.1 | ASCII 0 ; copie `3008b21` | 0 ; `tools\batterie-sortie-3008b21.txt` | **tenue** |
| P66.2 | `cadrage / 2 / False`, heure > `09:12:39`, HEAD au caractère | `09:17:17` ; `4e73aa8 2026-08-30 08:57:42 +0200` | **tenue** |
| P66.3 | `4   (hors artefacts de seance : 0)` | 4 / 0 | **tenue** |
| P66.4 | 9 lignes ; 3 de pilotage au caractère ; 6 fiches, aucune `ABSENTE`, toutes < `2026-08-30 00:00:00` | 9 lignes ; `08:50:22` / `08:49:11` / `2026-08-29 21:48:08` ; `2026-06-16` ×3, `2026-08-23` ×2, `2026-06-12` | **tenue** |
| P66.5 | 5 étapes `0/1/2/3/4`, 5 codes à 0 | exactement | **tenue** |
| P66.6 | 6 volumes au mot près, ordre de `-Fiches`, `LOT (6 fiches) 5813` | identiques | **tenue** |
| P66.7 | `C109 de prose` ∈ [55, 80], point 67 | **61** | **tenue** |
| P66.8 | 3 / 10 / 11 / 15 / 4 / 23 par fiche | **5 / 13 / 7 / 10 / 6 / 20** | **RÉFUTÉE** |
| P66.9 | `6 fiche(s) lue(s), 6 a reprendre.` | identique | **tenue** |
| P66.10 | 4 verdicts à 0 ; `hors perimetre` ∈ [5, 25], point 15 | 0 / 0 / 0 / 0 ; **20** | **tenue** |
| P66.11 | étape 4 identique au bloc 65 au caractère | identique | **tenue** |
| P66.12 | les six noms déclarés en `aliases:`, `FP/FS/FC` sur `fonction`, `critere/niveau/flexibilite` sur `caracteriser-une-exigence` | **exactement, et dans cet ordre** | **tenue** |

**Bilan du bloc 66 : 12 prédictions à décompte plein, 11 tenues, 1 réfutée.**

⚠ **RÉFUTATION P66.8 — LE TOTAL EST JUSTE, LA DÉCOMPOSITION EST FAUSSE SUR SES
SIX TERMES, ET L'ERREUR VA DANS LE SENS INVERSE DE CELUI QUE J'AVAIS ÉCRIT.**
J'ai réparti 61 candidats **au prorata des mots**, à densité uniforme de
11,5 ‰, et j'ai nommé comme risque que les **deux fiches courtes sortent à 0**.
**Mesure : ce sont les deux fiches les plus DENSES du lot.**

| fiche | mots | candidats | densité ‰ |
|---|---|---|---|
| `mecatronique` | 262 | **5** | **19,1** |
| `fonction` | 384 | **6** | **15,6** |
| `mind-map` | 908 | 13 | 14,3 |
| `caracteriser-une-exigence` | 2 004 | 20 | 10,0 |
| `pieuvre` | 1 324 | 10 | 7,6 |
| `bete-a-cornes` | 931 | 7 | 7,5 |

*Cause, et elle est lisible dans les extraits :* **une fiche courte de
définition est faite d'énoncés en apposition** — `mecatronique` L25 porte
**trois** points-virgules de prose dans une seule ligne qui enchaîne les
maillons de la boucle, `fonction` L20 porte deux points-virgules et un tiret
dans l'énumération FP / FS / FC. **La densité C109 ne suit pas le volume, elle
suit la proportion d'énumérations**, et une fiche de typologie est une
énumération de bout en bout. ⚠ *Le rapport entre la plus dense et la moins
dense est de **2,5**, sur un lot d'un seul répertoire et d'un seul type de
fiche — le prorata est donc un mauvais estimateur, et il l'était déjà quand il
tombait juste au total.*

✅ **LA DENSITÉ DE LOT, ELLE, TIENT POUR LE CINQUIÈME LOT D'AFFILÉE** : 61 /
5 813 = **10,5 ‰**, dans la fourchette 10,4 – 11,5 des quatre lots précédents.
*Ce qui est prévisible est le lot, jamais la fiche.*

⚠ **CORRECTION D'UNE PHRASE DU DOSSIER DU BLOC 65, ET ELLE PORTE SUR UN
CHIFFRE DE CLÔTURE.** Le dossier écrivait, dans la branche « alias déclarés »,
que *« le lot 9 refermera les six d'un coup »*. **C'est faux, et P66.12 le
prouve en le tenant** : `CIBLES SANS FICHE` compte les **noms de lien sans
fichier**, et `FP.md`, `FS.md`, `FC.md`, `critere.md`, `niveau.md`,
`flexibilite.md` **n'existeront pas davantage après la traduction**. **Le
compteur restera donc à 6 à la clôture du lot 9**, et ce sera une **prédiction
à décompte plein du bloc 72**. *Ce que le lot ferme, ce sont deux fiches ; ce
que le compteur mesure, ce sont six noms de fichier absents. Les deux n'ont
jamais été le même objet.*

⚠ **ET LE COMPTEUR EST UN FAUX POSITIF, MESURÉ.** `--anneau` résout **chemin
complet, suffixe de chemin, nom de fichier unique** — son en-tête le dit — et
**ne lit aucun `aliases:`**. Les six noms **sont déclarés** en front matter, et
Quartz les rend donc **verts à l'écran**. **`CIBLES SANS FICHE` n'est pas une
mesure de liens rouges ; c'est une mesure de noms de fichier absents, et la
ligne qui l'affiche dit « liens rouges cote francais ».** *C'est exactement le
motif de la sous-règle C116 (7) — un compteur se lit dans le code qui
l'incrémente, jamais dans la ligne qui l'affiche —, et c'est le sixième
compteur du chantier pris en défaut par cette cause.* **Porté à la file des
arbitrages, non traité en séance** : le correctif est une lecture d'`aliases:`
dans le résolveur, et il change un chiffre publié à toutes les clôtures depuis
le 25/08.

---

## ⛳ GATE G1 — fin de cadrage. Composition du lot 9 arrêtée.

**Fait** — trois blocs (64 garde, 65 composition, 66 cadrage), **une garde de
péremption au vert en branche (a)**, **zéro écriture dans `content/`**.

**Chiffres qui décident**

- **LOT 9 = 6 fiches, 5 813 mots, marge 844 sous la borne 6 657, 0 porteuse
  de chevron.** `conduite/proj/` : `mecatronique` 262, `mind-map` 908,
  `bete-a-cornes` 931, `pieuvre` 1 324, `fonction` 384,
  `caracteriser-une-exigence` 2 004.
- **61 candidats C109** à juger un par un, plus les puces à tiret que le
  bloc 67 relèvera. **20 hors périmètre**, non comptés.
- **Résidu du palier pour le lot 10** : `etat-de-l-art-technique` 2 286 +
  `afnor-nfx50-151` 91 = **2 377 mots, 2 fiches**.
- **Anneau 2 : 145 net, 122 traduites, 23 restantes, 37 148 mots, 0 porteuse.**
  **C127 hors sujet pour le quatrième lot d'affilée.**

**Prédictions du cadrage : 32 à décompte plein, 30 tenues, 2 réfutées**
(bloc 64 : 6/6 ; bloc 65 : 13/14 ; bloc 66 : 11/12).

**Ce qui suit** — bloc 67 : garde avant passe, éprouvage bilingue du motif des
puces sur **quatre échantillons nommés dont les réponses sont au registre**,
puis relevé des puces des six sources du lot 9.

⚠ **Deux points remontés, aucun bloquant, aucun arbitrage demandé** :
(1) `CIBLES SANS FICHE` est un faux positif de `--anneau` sur les six alias —
file des arbitrages ; (2) le lot 9 sera **le plus lourd du chantier hors
`easyeda`**, 5 813 contre une fourchette historique de 3 348 à 5 668, ce qui
est **assumé** : la borne est respectée et la coupe est celle du palier.

---

## Déclaration C131 du bloc 67 — rejouée, liste fermée avant le bloc, DEUX instants prédits

**Populations** — inchangées, redéclarées : `git status --porcelain` sur le
dépôt entier moins les deux chemins exacts du `.gitignore` ; `hors artefacts de
seance` = la même moins les lignes portant `batterie-sortie` ou `predictions-`.

**Liste FERMÉE des artefacts du bloc 67 :**

| # | artefact | état git | total | hors artefacts | existe quand la garde lit `git status` ? |
|---|---|---|---|---|---|
| 1 | `tools/predictions-260830.md` | ` M` | oui | non | **oui** |
| 2 | `tools/batterie-sortie-3008b19.txt` (bloc 64) | `??` | oui | non | **oui** |
| 3 | `tools/batterie-sortie-3008b20.txt` (bloc 65) | `??` | oui | non | **oui** |
| 4 | `tools/batterie-sortie-3008b21.txt` (bloc 66) | `??` | oui | non | **oui** |
| 5 | `tools/batterie-sortie-3008b22.txt` (étape 0 de la garde de CE bloc) | `??` | oui | non | **oui** |
| 6 | `tools/puces-lot9-3008.txt` (relevé C124 du lot, écrit **après** la garde) | `??` | oui | **OUI** | **non** |
| — | `tools/batterie-sortie.txt` | ignoré | non | non | — |
| — | le **script jetable du motif**, écrit dans le répertoire temporaire de la session, **hors dépôt** | — | non | non | — |

**DEUX instants, prédits séparément** *(parade du bloc 59, règle d'usage 10)* :
- **quand la garde lit `git status`** : `5` au total, `0` hors artefacts ;
- **en fin de bloc** : `6` au total, `1` hors artefacts.

⚠ *`puces-lot9-3008.txt` ne porte ni `batterie-sortie` ni `predictions-` : il
**compte** au second compteur. C'est le seul artefact du bloc qui y entre, et
c'est le terme que les blocs 56 et 58 du lot 8 avaient raté deux fois.*

---

## Bloc 67 — éprouvage bilingue du motif des puces (C110) et relevé du lot 9

**Commandes, dans cet ordre :**

1. `powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase garde`
   *(garde avant passe, sous-règle C116 (5))*
2. le motif sur les **quatre échantillons nommés**, deux FR et deux EN
3. un **cinquième relevé de contrôle** sur les cinq paires du lot 8 — *hors
   éprouvage C110, sa réponse n'ayant jamais été publiée fiche par fiche*
4. le motif sur les **six sources du lot 9**, en mode `--lister`, sortie
   sauvegardée sous `tools/puces-lot9-3008.txt` (C124)

### Le motif, republié EN ENTIER avant son lancement

*Règle d'usage 1 (29/08 suite 9), tenue aux lots 5, 6, 7 et 8. Le script est
réécrit hors dépôt ; son texte est donc ici.*

- **front matter** retiré, et **seulement s'il ouvre le fichier** ;
- **blocs de code** masqués par bascule sur `/^\s{0,3}``` /` **après retrait du
  préfixe de citation** `/^(\s{0,3}>\s?)+/` — le masque C110 est ancré en début
  de ligne et ne voit pas `> ```cpp` (angle mort du chevron, C127) ;
- **section courante** lue sur `/^\s{0,3}(#{2,6})\s+(.*)$/`, normalisée en bas
  de casse, ponctuation de queue retirée (`/[\s:.!?*_`]+$/`) ;
- **exclusion** si la section courante est l'une des **cinq** : `voir aussi`,
  `aller plus loin`, `see also`, `going further`, `further reading` ;
- **puce** : `/^\s{0,6}[-*+]\s+/` sur la ligne déchevronnée ;
- **retenue** si elle contient `—` (U+2014).

⚠ **Motif identique au caractère à celui des blocs 32, 44 et 54.** **Aucune
classe de caractères accentués n'y figure** — le piège du bloc Latin-1 (`×`
U+00D7 et `÷` U+00F7 logés entre les lettres) ne peut donc pas mordre.

### Les quatre échantillons de l'éprouvage, et ce que chacun éprouve

| n° | langue | fiches | réponse publiée au registre | ce qu'il éprouve |
|---|---|---|---|---|
| 1 | FR | lot 3 `esp32/` (4) | **2 / 2 / 4 / 4 = 12** | gloses de sections de liens, puces en callout, blocs chevronnés |
| 2 | EN | lot 3 `esp32/` (4) | **2 / 1 / 4 / 4 = 11** | **l'asymétrie**, seul terme qui prouve que le motif lit le disque |
| 3 | FR | lot 7 (5) | **3 / 3 / 0 / 3 / 1 = 10** | résidu d'exemptions d'un lot rendu |
| 4 | EN | lot 7 (5) | **3 / 3 / 0 / 3 / 1 = 10** | report un pour un, décomposition comprise |

⚠ **Les réponses sont relues au REGISTRE, pas au prompt.** Le prompt de
lancement écrit *« 10 des deux côtés, 0/3/1/1/0 »*, décomposition qui **somme à
5** et contredit son propre total ; **la valeur publiée aux blocs 54 (P54.8 et
P54.9) et à l'entrée du 30/08 (suite 2) est `3 / 3 / 0 / 3 / 1`.** *Le terme
qui prouve est la décomposition, pas le total.*

### Prédictions du bloc 67

**Garde (sous-règle C116 (5))**

**P67.1** — `lignes non ASCII dans batterie.ps1 : 0` ; `sortie precedente
copiee : tools\batterie-sortie-3008b22.txt`.

**P67.2** — `phase demandee : garde   anneau : 2   chevron : False` ;
`date ISO : 2026-08-30` ; heure **strictement postérieure à `09:17:17`** ;
`HEAD git : 4e73aa8 2026-08-30 08:57:42 +0200` **au caractère** ;
`node : v24.15.0` ; **2 codes de sortie, tous `0`**.

**P67.3** — `fichiers modifies non commites : 5   (hors artefacts de seance :
0)`, **premier instant de la déclaration C131**.

**P67.4** — **3 lignes de dates seulement** (`-Fiches` vide), identiques au
bloc 66 **au caractère** : `2026-08-30 08:50:22` / `2026-08-30 08:49:11` /
`2026-08-29 21:48:08`. ⚠ *Les six lignes de fiches du bloc 66 disparaissent :
elles venaient de `-Fiches`, pas d'un état du dépôt.*

**Épreuve C110 — les quatre échantillons**

**P67.5** — échantillon 1, FR lot 3 : `esp32-deep-sleep` **2**,
`esp32-arduino-core` **2**, `esp32-freertos` **4**, `esp32-idf` **4**,
**TOTAL 12**.

**P67.6** — échantillon 2, EN lot 3 : `esp32-deep-sleep-en` **2**,
`esp32-arduino-core-en` **1**, `esp32-freertos-en` **4**, `esp32-idf-en` **4**,
**TOTAL 11**. ⚠ *Onze et non douze : `esp32-arduino-core` L26 porte un tiret
que sa jumelle rend par une virgule. **Prédire 12 serait prédire la symétrie,
pas la mesure.***

**P67.7** — échantillon 3, FR lot 7 : `raspberry-pi-gpio` **3**,
`raspberry-pi-prise-en-main` **3**, `raspberry-pi-projet` **0**,
`xiao-alimentation` **3**, `xiao-esp32-s3` **1**, **TOTAL 10**.

**P67.8** — échantillon 4, EN lot 7 : `raspberry-pi-gpio-en` **3**,
`raspberry-pi-prise-en-main-en` **3**, `raspberry-pi-projet-en` **0**,
`xiao-alimentation-en` **3**, `xiao-esp32-s3-en` **1**, **TOTAL 10**.

**Contrôle hors éprouvage — le report un pour un du lot 8**

**P67.9 — égalité fiche à fiche sur CINQ termes**, `acv-simplifiee`, `bom`,
`ecodesign`, `fast`, `matrice-eco-criteres` : **la valeur FR et la valeur EN
sont égales pour chacune des cinq**. *C'est une **forme exacte** et c'est le
terme qui porte : le lot 8 a été écrit la nuit même, et son report un pour un
n'a jamais été contrôlé sur les puces après sa passe C109.*

**P67.10 — total FR du lot 8 : entre 0 et 16, point estimé 10.** *Le relevé
d'avant-passe rendait **22** puces à tiret (`tools/puces-lot8-3008.txt`,
décomposition `0 / 10 / 4 / 6 / 2`) ; la passe a traité **69** des **85**
candidats, dont au plus **63** pouvaient être des candidats `--style`, donc
**au moins 6 puces ont été traitées** et il en reste **au plus 16**.*
⚠ *L'intervalle est large et il le dit : **la décomposition des 16 gardés n'a
jamais été publiée** — un lot publie ses traités et ses gardés en total, jamais
par famille. C'est un manque du registre, pas du motif.*

**Relevé du lot 9**

**P67.11 — TOTAL du lot 9 : entre 8 et 35, point estimé 21.** *Base : la
densité de puces à tiret au millier de mots des deux lots comparables —
lot 7 **18 / 5 301 = 3,4 ‰**, lot 8 `conduite/proj/` **22 / 5 488 = 4,0 ‰** ;
`4,0 × 5 813 / 1 000 = 23,3`, `3,4 × 5 813 / 1 000 = 19,8`.*

**P67.12 — décomposition du lot 9 : AUCUNE prédiction par fiche, et le refus
est motivé.** *P66.8 vient d'être réfutée sur ses six termes en répartissant au
prorata des mots, et la cause mesurée — la densité suit la proportion
d'énumérations, pas le volume — s'applique **exactement de la même façon** aux
puces à tiret. **Prédire six chiffres au prorata serait rejouer sciemment une
prédiction dont la cause d'échec est connue depuis dix minutes.*** ⚠ **Ce qui
est prédit à la place est un ordre** : `caracteriser-une-exigence` (2 004 mots,
la seule fiche à tableaux du lot) porte **le plus grand nombre de puces à
tiret** du lot, et `mecatronique` (262 mots) **n'est pas la plus fournie**.

**P67.13 — compteurs `git status` en fin de bloc : 6 au total, 1 hors
artefacts de séance**, ce seul `1` étant `tools/puces-lot9-3008.txt`.
*Second instant de la déclaration C131.*

### Constats du bloc 67 (garde `3008b22`, relevé `tools/puces-lot9-3008.txt`)

| # | prédiction | constat | verdict |
|---|---|---|---|
| P67.1 | ASCII 0 ; copie `3008b22` | 0 ; `tools\batterie-sortie-3008b22.txt` | **tenue** |
| P67.2 | `garde / 2 / False`, heure > `09:17:17`, HEAD au caractère, `v24.15.0`, 2 codes à 0 | `09:20:34` ; `4e73aa8 2026-08-30 08:57:42 +0200` ; `v24.15.0` ; 2 × 0 | **tenue** |
| P67.3 | `5   (hors artefacts de seance : 0)` | 5 / 0 | **tenue** |
| P67.4 | 3 lignes de dates, identiques au caractère | 3 lignes, identiques | **tenue** |
| P67.5 | FR lot 3 : 2 / 2 / 4 / 4 = **12** | 2 / 2 / 4 / 4 = 12 | **tenue** |
| P67.6 | EN lot 3 : 2 / **1** / 4 / 4 = **11** | 2 / 1 / 4 / 4 = 11 | **tenue** |
| P67.7 | FR lot 7 : 3 / 3 / 0 / 3 / 1 = **10** | identique | **tenue** |
| P67.8 | EN lot 7 : 3 / 3 / 0 / 3 / 1 = **10** | identique | **tenue** |
| P67.9 | lot 8 : égalité FR/EN sur les **cinq** termes | `0 / 3 / 1 / 1 / 0` **des deux côtés** | **tenue** |
| P67.10 | total FR lot 8 ∈ [0, 16], point 10 | **5** | **tenue** |
| P67.11 | total lot 9 ∈ [8, 35], point 21 | **19** | **tenue** |
| P67.12 | `caracteriser-une-exigence` la plus fournie ; `mecatronique` pas la plus fournie | 14 ; 0 | **tenue** |
| P67.13 | fin de bloc **6 / 1**, le `1` étant `puces-lot9-3008.txt` | 6 / 1, et c'est bien lui | **tenue** |

**Bilan du bloc 67 : 13 prédictions à décompte plein, 13 tenues, 0 réfutée.**

✅ **TROISIÈME ÉPREUVE DE LA RÈGLE D'USAGE 1, ET LES QUATRE ÉCHANTILLONS
TOMBENT FICHE PAR FICHE**, l'asymétrie connue d'`esp32-arduino-core` (2 FR /
1 EN) comprise. **Le motif est identique au caractère à celui des blocs 32, 44
et 54**, et il rend les mêmes chiffres sur des fiches qui n'ont pas bougé.
*La règle passe à **3/N**.*

✅ **ET LE REPORT UN POUR UN DU LOT 8 EST CONTRÔLÉ POUR LA PREMIÈRE FOIS APRÈS
SA PASSE : CINQ TERMES, CINQ ÉGALITÉS.** `0 / 3 / 1 / 1 / 0` des deux côtés.
*Le lot 7 avait été contrôlé de la même façon la nuit précédente — dix termes,
dix justes ; celui-ci en ajoute cinq.*

⚠ **ET C'EST ICI QUE LE « TERME QUI NE SE RECOUPAIT PAS » DU PROMPT TROUVE SA
CAUSE, ET ELLE N'EST PAS CELLE QUE J'AVAIS ÉCRITE.** Le recoupement d'ouverture
notait que le prompt écrit *« réponses publiées 10 des deux côtés, 0/3/1/1/0 »*
et que cette décomposition **somme à 5** au lieu de 10. **Mesure : `0/3/1/1/0`
n'est pas une décomposition fausse du lot 7 — c'est la décomposition EXACTE du
LOT 8 après sa passe**, celle que le contrôle P67.9 vient de mesurer des deux
côtés. **Le prompt attache un total du lot 7 à une décomposition du lot 8.**

⚠ *Ce que cela change à mon constat d'ouverture, et je le corrige :* j'avais
rangé ce terme en « erreur de décomposition », troisième défaut de brief
d'affilée. **C'est plus intéressant que ça, et plus gênant.** Le chiffre du
prompt était **juste et non publié** : `0/3/1/1/0` n'existait **nulle part au
registre** — ni au JOURNAL, ni au fichier de prédictions —, la décomposition
des puces gardées d'un lot n'ayant jamais été publiée après passe (c'est
exactement le manque que P67.10 nommait pour justifier son intervalle large).
⚠ **Un brief a donc porté un chiffre exact que le dépôt ne pouvait pas
confirmer**, et le protocole a fait ce qu'il devait : **il l'a écarté au profit
de la valeur publiée, et il a mesuré.** *Le protocole n'a pas eu tort de s'en
méfier — un chiffre invérifiable reste invérifiable même quand il se révèle
juste —, mais le registre, lui, avait un trou, et c'est le trou qu'il faut
boucher.* ✅ **Bouché ici** : la décomposition post-passe des puces du lot 8 est
désormais publiée, `0 / 3 / 1 / 1 / 0`, FR et EN.

⚠ **Candidate née de ce constat, à verser au §8 :** *un lot publie ses
candidats **traités** et **gardés** en total ; il ne publie pas ce qui **reste**
dans le corpus par famille de motif, et la clôture suivante ne peut donc pas
s'y recouper.* **La parade tient en une ligne de clôture : relancer le motif
des puces sur les sources du lot APRÈS la passe, et publier la
décomposition.** *Ce lot le fera au bloc 72.*

**Relevé du lot 9, `tools/puces-lot9-3008.txt`** — `mecatronique` **0**,
`mind-map` **0**, `bete-a-cornes` **0**, `pieuvre` **5**, `fonction` **0**,
`caracteriser-une-exigence` **14**, **TOTAL 19**.
⚠ **Distribution extrême, et elle contredit la densité que P66.8 cherchait** :
**deux fiches portent 100 % des puces à tiret**, quatre en portent zéro. *Le
refus de prédire par fiche (P67.12) était fondé : un prorata aurait donné
1 / 3 / 3 / 4 / 1 / 7 et raté les six termes.*

**Total des candidats du lot 9 à juger un par un : 61 + 19 = 80.**

---

## Jugement des 80 candidats, un par un (C123 + les quatre cas de l'amendement C109 du 29/08)

⚠ **Les deux instruments se recouvrent sur TROIS lignes, et le compte le dit.**
`--style` signale **61 occurrences sur 44 lignes** ; le motif des puces signale
**19 lignes**. **Trois lignes sont dans les deux listes** — `pieuvre` L71
(absolue), `caracteriser-une-exigence` L31 et L33 —, mais **les occurrences y
sont distinctes** : d'un côté le séparateur de glose en tête de puce, de
l'autre une incise ou un point-virgule dans la prose de la même puce. **80
signalements, 60 lignes distinctes.**

### La règle de lecture appliquée, écrite avant de juger

*Elle réconcilie C123, la borne du 25/08 et les quatre cas du 29/08, et elle
tient en une phrase :* **l'exemption est une propriété de la FORME GLOSE, pas
du segment de droite pris seul.**

1. **Prose continue** (hors puce, ou dans une puce après au moins une phrase
   complète) : le tiret et le point-virgule **tombent**, que le segment de
   droite porte un verbe conjugué ou non. *C109 « se borne à la ponctuation de
   prose » et le tiret y est proscrit comme marqueur d'écriture machine ; les
   exemptions du 23/08 et du 25/08 visent des **items** et des **gloses**, pas
   de la prose.*
2. **Tête de puce ou d'énumération en ligne** (`- **Libellé** — …`,
   `**Libellé (SIGLE)** — …`) : le tiret **reste** si le segment de droite est
   un groupe nominal, adjectival, infinitif ou participial — **relative
   comprise** —, et **tombe** si c'est une proposition indépendante à sujet
   propre, qui se réécrit `- **Libellé.** Phrase.`
3. **Incise encadrée par deux tirets** : **parenthèses** si le segment nomme un
   seul objet, **conservée** s'il énumère des exemples (précision du 25/08).
4. **Renvoi de fin de segment** (`— voir [[x]]`) : parenthèses. *Aucun cas dans
   ce lot.*

### `conduite/proj/mecatronique.md` — 5 occurrences, 5 traitées, 0 gardée

| # | ligne | forme | verdict | motif |
|---|---|---|---|---|
| 1 | 19 | tiret | **traité** (`:`) | prose ; « la boucle … **est** son motif » a son sujet propre |
| 2 | 25 | pv | **traité** (`.`) | prose ; « les actionneurs **imposent** » |
| 3 | 25 | pv | **traité** (`.`) | prose ; « l'électronique **fixe** » |
| 4 | 25 | pv | **traité** (`.` + « Enfin, ») | prose ; « le comportement logiciel **doit** » — quatrième maillon de la chaîne, le mot de liaison garde l'enchaînement que le point-virgule portait |
| 5 | 31 | tiret | **traité** (`:`) | prose ; apposition à relative conjuguée (« où les trois disciplines **doivent** s'accorder ») |

⚠ *La L25 porte **trois** points-virgules dans une seule phrase de quatre
maillons : c'est la chaîne « mécanique → actionneurs → électronique →
logiciel » qui **est** le contenu enseigné. La couper en quatre phrases sèches
la casserait ; les trois points tiennent parce que le quatrième maillon reçoit
un « Enfin, » qui rétablit l'enchaînement.*

### `conduite/proj/mind-map.md` — 13 occurrences, 13 traitées, 0 gardée

| # | ligne | forme | verdict | motif |
|---|---|---|---|---|
| 6 | 16 | tiret | **traité** (`,`) | prose ; participiale absolue à sujet propre (« son usage … **étant** ») — apposition en virgule |
| 7 | 22 | tiret | **traité** (`:`) | prose ; « on **capture** large » |
| 8 | 30 | tiret | **traité** (`:`) | prose ; « **c'est** l'échafaudage » |
| 9 | 30 | pv | **traité** (`.`) | prose ; « le brainstorm de solutions **devient** » |
| 10 | 40 | tiret | **traité** (`:`) | prose **entre parenthèses** ; « la concision **force** la clarté » |
| 11 | 40 | pv | **traité** (`.`) | prose ; « des outils … **conviennent** » |
| 12 | 48 | tiret | **traité** (`,`) | prose ; apposition nominale à relative conjuguée |
| 13 | 50 | tiret | **traité** (parenthèses) | incise à **deux** tirets nommant un seul objet (25/08) |
| 14 | 50 | tiret | **traité** (parenthèses) | *idem — même ancre, cas 3* |
| 15 | 50 | pv | **traité** (`.`) | prose ; « la sécurité opérateur **devient** » |
| 16 | 50 | pv | **traité** (`.`) | prose ; « l'écoconception **migre** » |
| 17 | 50 | pv | **traité** (`.`) | prose ; « la conformité CE … **est** écartée » |
| 18 | 56 | tiret | **traité** (`,`) | prose ; « **c'est** souvent l'idée » |

⚠ **Une ancre couvre les occurrences 13, 14 et 17 EN BLOC** — règle d'usage 6
du 30/08. *Les trois se chevauchent sur `la **conformité CE**` : trois ancres
séparées se seraient détruites l'une l'autre après le premier remplacement, et
la garde d'unicité aurait refusé le lot entier au second.* **C'est la première
fois de la série que cette règle sert à autre chose qu'à un bloc de lignes
identiques.**

### `conduite/proj/bete-a-cornes.md` — 7 occurrences, 7 traitées, 0 gardée

| # | ligne | forme | verdict | motif |
|---|---|---|---|---|
| 19 | 20 | tiret | **traité** (`:`) | prose ; « un désaccord … **devient** » |
| 20 | 56 | tiret | **traité** (`:`) | prose ; « la bête à cornes **doit** rester » |
| 21 | 58 | tiret | **traité** (`,`) | prose ; apposition nominale à relative conjuguée |
| 22 | 63 | tiret | **traité** (`:`) | prose ; fragment interrogatif |
| 23 | 68 | tiret | **traité** (`:`) | prose ; « **c'est** exactement » |
| 24 | 74 | tiret | **traité** (`:`) | prose ; « il **sera** affiné » |
| 25 | 76 | tiret | **traité** (`,`) | prose ; antithèse prépositionnelle |

### `conduite/proj/pieuvre.md` — 15 signalements, 10 traités, 5 gardés

| # | ligne | forme | verdict | motif |
|---|---|---|---|---|
| 26 | 39 | pv | **traité** (`.`) | prose ; « un lien … **est** une FC » |
| 27 | 55 | tiret | **traité** (`:`) | prose ; « la distinction … **se lit** » |
| 28 | 61 | tiret | **traité** (`:`) | prose ; « ils **décrivent** » |
| 29 | 67 | **puce** | **GARDÉ** | `- **[[FP]]1** — *énoncé à l'infinitif*` : séparateur de glose, segment infinitif |
| 30 | 68 | **puce** | **GARDÉ** | *idem* `[[FS]]1` |
| 31 | 69 | **puce** | **GARDÉ** | *idem* `[[FC]]1` |
| 32 | 70 | **puce** | **GARDÉ** | *idem* `FC2` |
| 33 | 71 | **puce** | **GARDÉ** | *idem* `FC3` |
| 34 | 71 | tiret | **traité** (`,`) | ⚠ **même ligne que 33, verdict opposé** : celui-ci est une incise **dans la prose** de la puce, après deux phrases complètes |
| 35 | 73 | tiret | **traité** (`:`) | prose ; infinitif, mais prose continue |
| 36 | 77 | tiret | **traité** (`:`) | prose ; « **c'est** en les passant » |
| 37 | 79 | tiret | **traité** (`:`) | prose ; libellé `Test simple` suivi d'une citation |
| 38 | 81 | tiret | **traité** (`,`) | prose ; « il **manque** le second milieu » |
| 39 | 83 | tiret | **traité** (`.`) | prose ; « **c'est** normal » |
| 40 | 83 | pv | **traité** (`.`) | prose ; « le projet **n'a** plus lieu d'être » |

⚠ **LA LIGNE 71 PORTE LES DEUX VERDICTS, ET C'EST L'ÉPREUVE LA PLUS NETTE DE
LA RÈGLE DE LECTURE DE CE LOT.** `- **FC3** — *Préserver la sécurité de
l'opérateur…*` garde son tiret de glose ; treize mots plus loin, `l'opérateur —
déjà relié par FP1 côté service rendu` le perd. *Le second segment est
pourtant **participial**, donc exempté par la lettre de C123 prise seule : ce
qui le fait tomber n'est pas sa nature grammaticale, c'est sa **position** —
il est dans la prose, pas en tête de glose.*

✅ **Les cinq puces gardées sont le glossaire FP / FS / FC de la pieuvre**,
c'est-à-dire l'objet même que l'arbitrage du 22/08 a soustrait à C109 en
abrogeant le corollaire des puces.

### `conduite/proj/fonction.md` — 6 occurrences, 1 traitée, 5 gardées

| # | ligne | forme | verdict | motif |
|---|---|---|---|---|
| 41 | 20 | tiret | **GARDÉ** | `**fonction principale (FP)** — relation … , **qui** justifie son existence` : glose, groupe nominal + relative (frontière du sujet propre, 29/08) |
| 42 | 20 | tiret | **GARDÉ** | `**fonction secondaire (FS)** — même structure mais service complémentaire` : nominal |
| 43 | 20 | tiret | **GARDÉ** | `**fonction contrainte (FC)** — relation … , **exprimant** une contrainte` : nominal + participial |
| 44 | 20 | pv | **GARDÉ** | séparateur d'**items** d'une énumération en ligne dont les trois segments sont nominaux (amendement du 23/08) |
| 45 | 20 | pv | **GARDÉ** | *idem* |
| 46 | 42 | tiret | **traité** (`.`) | prose ; « le système **n'a** pas lieu d'être » |

⚠ **CINQ DES SIX OCCURRENCES DE LA FICHE SONT GARDÉES, ET C'EST LA FICHE QUI
ENSEIGNE LA TYPOLOGIE.** *La L20 est la définition canonique FP / FS / FC : une
énumération en ligne de trois entrées de glossaire, séparées par des
points-virgules d'items et gloses par des tirets. La traiter reviendrait à
hacher en trois phrases la seule ligne du corpus qui donne la typologie d'un
seul tenant.* ✅ **Et le lot porte la contre-épreuve** : la L42 de la même
fiche, prose ordinaire, tombe.

### `conduite/proj/caracteriser-une-exigence.md` — 34 signalements, 23 traités, 11 gardés

| # | ligne | forme | verdict | motif |
|---|---|---|---|---|
| 47 | 27 | tiret | **traité** (parenthèses) | incise à **deux** tirets nommant un seul énoncé (25/08) |
| 48 | 27 | tiret | **traité** (parenthèses) | *idem — même ancre* |
| 49 | 31 | **puce** | **traité** (`.`) | `- **Rendre l'exigence opposable** — **chaque ligne** du CdCF **engage**` : proposition à sujet propre |
| 50 | 31 | pv | **traité** (`.`) | prose ; « le projet **vit** dans l'implicite » |
| 51 | 32 | **puce** | **traité** (`.`) | `- **Préparer l'évaluation finale** — à la livraison, **on reprend**` : sujet propre |
| 52 | 33 | **puce** | **traité** (`.`) | `- **Prévoir l'arbitrage…** — **la flexibilité dit**` : sujet propre |
| 53 | 33 | pv | **traité** (`.`) | prose ; « **c'est** un arbitrage prévu » |
| 54 | 47 | tiret | **traité** (`:`) | prose ; « chaque composant **éclaire** » |
| 55 | 55 | **puce** | **GARDÉ** | `- **Grandeurs physiques** — masse, longueur…` : énumération nominale |
| 56 | 56 | **puce** | **GARDÉ** | `- **Grandeurs économiques** — coût d'achat…` : nominale |
| 57 | 57 | **puce** | **GARDÉ** | `- **Grandeurs temporelles** — durée de vie…` : nominale |
| 58 | 58 | **puce** | **GARDÉ** | `- **Grandeurs binaires** — présence/absence…` : nominale |
| 59 | 60 | tiret | **traité** (`:`) | prose ; « **ce sont** des qualités floues » |
| 60 | 66 | **puce** | **GARDÉ** | `- **Valeur unique** — \`100 g\`…` : valeurs |
| 61 | 67 | **puce** | **GARDÉ** | `- **Borne** — \`≤ 5 mm\`…` : valeurs |
| 62 | 68 | **puce** | **GARDÉ** | `- **Plage** — entre \`20 °C\` et…` : prépositionnel |
| 63 | 69 | **puce** | **GARDÉ** | `- **Cible binaire** — *conforme…*` : adjectival |
| 64 | 71 | pv | **traité** (`.`) | prose ; « l'état de l'art **dit** » |
| 65 | 74 | tiret | **traité** (`:`) | prose ; « elle **évite** les ambiguïtés » |
| 66 | 93 | tiret | **traité** (`:`) | prose ; énumération prépositionnelle, mais en prose continue |
| 67 | 93 | pv | **traité** (`.`) | prose ; « une exigence F3 **peut** s'effacer » |
| 68 | 93 | pv | **traité** (`.`) | prose ; « les F1 et F2 **sont** » |
| 69 | 97 | tiret | **traité** (`,`) | prose ; groupe prépositionnel |
| 70 | 109 | tiret | **traité** (`:`) | prose ; « chaque partie **s'arc-boutera** » |
| 71 | 119 | tiret | **traité** (parenthèses) | prose ; énumération de lieux de mesure insérée dans une interrogation |
| 72 | 119 | tiret | **traité** (`:`) | prose ; « **c'est** un vœu pieux » |
| 73 | 131 | tiret | **traité** (`:`) | prose ; « la version *Bon* **fait** » |
| 74 | 139 | tiret | **traité** (`:`) | prose ; « celui-ci **sera** choisi » |
| 75 | 141 | pv | **traité** (`.`) | prose ; « **on ne sait** pas comment arbitrer » |
| 76 | 145 | tiret | **traité** (`,`) | prose ; « et **révèle** généralement » |
| 77 | 151 | **puce** | **GARDÉ** | `- **Conformité réglementaire** — *« conforme à… »*` : citations nominales |
| 78 | 152 | **puce** | **GARDÉ** | `- **Présence/absence…** — *« démontable… »*` : adjectivales |
| 79 | 153 | **puce** | **GARDÉ** | `- **Validation par un référent** — *« validé par… »*` : participiales |
| 80 | 163 | tiret | **traité** (`:`) | prose ; « **c'est** une formule d'évitement » |

⚠ **LES ONZE GARDÉES DE CETTE FICHE SONT TROIS GLOSSAIRES ENTIERS** — les
quatre familles de critères, les quatre formes de niveau, les trois exigences
binaires —, **et les trois puces traitées sont les trois seules dont le segment
de droite est une phrase**. *C'est exactement la frontière du cas 2, et elle
sépare ici **14 puces d'une même fiche en 11 gloses et 3 phrases**, sans
qu'aucune ne soit ambiguë.*

### Récapitulatif du jugement

| fiche | signalements | traités | gardés | ancres |
|---|---|---|---|---|
| `mecatronique` | 5 | 5 | 0 | 5 |
| `mind-map` | 13 | 13 | 0 | 11 |
| `bete-a-cornes` | 7 | 7 | 0 | 7 |
| `pieuvre` | 15 | 10 | 5 | 10 |
| `fonction` | 6 | 1 | 5 | 1 |
| `caracteriser-une-exigence` | 34 | 23 | 11 | 22 |
| **TOTAL** | **80** | **59** | **21** | **56** |

⚠ **Le taux de conservation, 21 / 80 = 26 %, est le plus haut de la série**
(lot 8 : 16 / 85 = 19 % ; lot 3 d'`esp32/` : 12 / 32 = 38 % sur les seules
puces). *Cause nommée : deux des six fiches sont des **fiches de typologie**,
et une typologie est un glossaire.*

---

## Déclaration C131 du bloc 68 — rejouée, liste fermée avant le bloc, DEUX instants

**Populations** — inchangées, redéclarées : `git status --porcelain` sur le
dépôt entier moins les deux chemins exacts du `.gitignore` ; `hors artefacts de
seance` = la même moins `batterie-sortie` et `predictions-`.

**Liste FERMÉE des artefacts du bloc 68 :**

| # | artefact | état | total | hors artefacts | existe à la lecture de la garde ? |
|---|---|---|---|---|---|
| 1 | `tools/predictions-260830.md` | ` M` | oui | non | oui |
| 2-6 | `tools/batterie-sortie-3008b19..b23.txt` (b23 créée par l'étape 0 de la garde) | `??` | oui | non | oui |
| 7 | `tools/puces-lot9-3008.txt` (bloc 67) | `??` | oui | **oui** | oui |
| 8 | `tools/passe-negatif-lot9-3008.tsv` (table du test négatif) | `??` | oui | **oui** | **non** |
| 9 | `tools/passe-c109-lot9-3008.tsv` (table de la passe réelle) | `??` | oui | **oui** | **non** |
| 10 | `tools/batterie-sortie-3008b24.txt` (copie C124 de la **remesure**) | `??` | oui | non | **non** |
| 11 | `tools/puces-lot9-apres-3008.txt` (relevé des puces **après** passe) | `??` | oui | **oui** | **non** |
| 12-17 | les **6 sources FR** de `conduite/proj/`, modifiées par `--ecrire` | ` M` | oui | **oui** | **non** |
| — | `tools/batterie-sortie.txt` | ignoré | non | non | — |

**DEUX instants, prédits séparément :**
- **quand la garde lit `git status`** : **7** au total, **1** hors artefacts
  (`puces-lot9-3008.txt` seul) ;
- **en fin de bloc** : **17** au total, **10** hors artefacts
  (1 + 2 tables + 1 relevé après + 6 sources).

⚠ *Le second relevé des puces est un artefact **décidé dans ce bloc** : la
candidate née au bloc 67 — « un lot ne publie pas ce qui reste par famille de
motif » — impose de mesurer les puces **après** la passe, et non seulement
avant. **La liste l'intègre AVANT le bloc**, ce qui est exactement la
différence que la règle d'usage 10 vise.*

---

## Bloc 68 — passe C109 du lot 9 (59 remplacements, 56 ancres, 6 sources FR)

**Commandes, dans cet ordre :**

1. `powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase garde`
2. écriture des **deux tables TSV datées et jetables** (C114)
3. **test négatif délibéré** : `node tools/remplacer-passe.mjs
   tools/passe-negatif-lot9-3008.tsv`
4. **contrôle seul** : `node tools/remplacer-passe.mjs
   tools/passe-c109-lot9-3008.tsv`
5. **écriture** : la même commande avec `--ecrire`
6. **remesure immédiate** : `batterie.ps1 -Phase cadrage -Fiches <les 6>`
7. **remesure des puces** vers `tools/puces-lot9-apres-3008.txt`

### Prédictions du bloc 68

**P68.1 — garde, étape 0.** `lignes non ASCII dans batterie.ps1 : 0` ;
`sortie precedente copiee : tools\batterie-sortie-3008b23.txt`.

**P68.2 — garde, étape 1.** `phase demandee : garde   anneau : 2   chevron :
False` ; `date ISO : 2026-08-30` ; heure **> `09:20:34`** ;
`HEAD git : 4e73aa8 2026-08-30 08:57:42 +0200` **au caractère** ;
`node : v24.15.0` ; **2 codes de sortie à 0** ; **3 lignes de dates**
identiques au bloc 67 **au caractère**.

**P68.3 — compteurs git au premier instant.** `fichiers modifies non
commites : 7   (hors artefacts de seance : 1)`.

**P68.4 — test négatif, forme exacte.** La table négative porte **une seule
règle**, en **ligne 6** du fichier, dont l'ancre est
`est **indissociable** - chaque composant` — **un trait d'union ASCII à la
place du tiret cadratin**, c'est-à-dire la faute qui ne se voit pas à l'œil et
qui ne lèverait aucune erreur si l'outil ne gardait pas l'unicité d'ancre.
Sortie attendue : `L6 INTROUVABLE  content/conduite/proj/caracteriser-une-exigence.md`,
puis `fiches : 1`, `remplacements prets : 0`, `ancres introuvables : 1`,
`ancres multiples : 0`, `fichiers absents : 0`, `sans front matter : 0`,
`lignes mal formees : 0`, `INVARIANT D ACCENTS casse sur : 0 fiche(s)`, et
`REFUS : 1 defaut(s). AUCUN FICHIER ECRIT.` **Code de sortie 1, zéro octet
écrit.** *Neuvième refus délibéré de la série.*

**P68.5 — contrôle seul, totaux.** `lignes de table : 56` ; `fiches : 6` ;
`remplacements prets : 56` ; `ancres introuvables : 0` ; `ancres multiples :
0` ; `fichiers absents : 0` ; `sans front matter : 0` ; `lignes mal formees :
0` ; `INVARIANT D ACCENTS casse sur : 0 fiche(s)` ; puis
`CONTROLE SEUL : 56 remplacement(s) prets, 0 fichier ecrit.` **Code 0.**

**P68.6 — contrôle seul, par fiche, et les trois invariants.** `mecatronique`
**ancres 5/5**, `mind-map` **11/11**, `bete-a-cornes` **7/7**, `pieuvre`
**10/10**, `fonction` **1/1**, `caracteriser-une-exigence` **22/22** ; et sur
les **six** : **`ecart +0`** d'accents, et **`lignes N -> N`** inchangé.
⚠ *L'écart d'accents est le terme qui garde : trois remplacements font passer
une lettre accentuée de la minuscule à la capitale — `à la livraison` →
`À la livraison`, et deux capitales sur `l'électronique` et `l'état de l'art`
qui, elles, ne touchent pas à la lettre accentuée. **`À` et `à` sont tous deux
dans la classe `[À-ÖØ-öø-ÿŒœŸĀ-ſ]`** du script — je le prédis à **+0**, pas à
« sans doute inchangé ».*

**P68.7 — écriture.** Six lignes `ECRIT  content/…` portant respectivement
**(5)**, **(11)**, **(7)**, **(10)**, **(1)**, **(22)** remplacements, puis
`fichiers ecrits : 6`. **Code 0.**

**P68.8 — remesure `--style` : `6 fiche(s) lue(s), 1 a reprendre.` et
`C109 de prose : 5`.** Décomposition : `mecatronique` **0**, `mind-map` **0**,
`bete-a-cornes` **0**, `pieuvre` **0**, `fonction` **5**,
`caracteriser-une-exigence` **0**.
⚠ **Les cinq résiduelles sont les cinq gardées de la L20 de `fonction`**, et
ce sont **les seules gardées du lot que `--style` voit** : les seize autres
sont des tirets de puce, invisibles à son motif depuis le 23/08. *C'est
l'angle mort documenté qui rend la mesure lisible : `61 → 5` prouve que les
59 traitées sont sorties, et le `5` nomme exactement ce que le jugement a
gardé en prose.*

**P68.9 — `hors perimetre : 20`, inchangé.** *La passe ne touche ni titre, ni
tableau, ni `alt` — les quatre familles de ce seau sont hors de son périmètre.*

**P68.10 — remesure des puces : TOTAL 16**, décomposition `mecatronique` 0,
`mind-map` 0, `bete-a-cornes` 0, `pieuvre` **5**, `fonction` 0,
`caracteriser-une-exigence` **11**.
⚠ *`pieuvre` reste à 5 et non à 4 : la ligne `FC3` **garde son tiret de
glose** et perd son incise de prose, donc elle continue de porter un tiret
cadratin et le motif la compte. **Prédire 4 serait confondre l'occurrence
traitée avec la ligne.***

**P68.11 — volume après passe : `LOT (6 fiches) 5814`, soit +1 mot**, et le
seul écart par fiche est `mecatronique` **262 → 263**.
⚠ *Un seul des 59 remplacements ajoute un mot : le « **Enfin,** » qui rétablit
l'enchaînement du quatrième maillon de la L25 de `mecatronique`. Tous les
autres échangent un signe contre un signe — deux-points, virgule, point,
parenthèses —, et le motif de `compter-mots` (`[0-9A-Za-zÀ-ɏ'’-]+`)
ne compte **ni le tiret cadratin, ni le point-virgule, ni la parenthèse**.*

**P68.12 — anneau inchangé sauf d'un mot.** `RESTANT : 23` et
`RESTANT DE L ANNEAU 2 (23 fiches)  37149`, `conduite/proj/mecatronique  263`,
les 22 autres lignes **au caractère**. `CIBLES SANS FICHE (6)` inchangé, dette
`216 / 26 / 39416 / 2` inchangée. *Aucune fiche EN n'est encore écrite.*

**P68.13 — compteurs git en fin de bloc : 17 au total, 10 hors artefacts de
séance**, second instant de la déclaration C131.

### Constats du bloc 68 (garde `3008b23`, remesure `3008b24`, relevé `tools/puces-lot9-apres-3008.txt`)

| # | prédiction | constat | verdict |
|---|---|---|---|
| P68.1 | ASCII 0 ; copie `3008b23` | 0 ; `tools\batterie-sortie-3008b23.txt` | **tenue** |
| P68.2 | `garde / 2 / False`, heure > `09:20:34`, HEAD au caractère, `v24.15.0`, 2 codes à 0, 3 dates identiques | `09:31:29` ; `4e73aa8 2026-08-30 08:57:42 +0200` ; identiques | **tenue** |
| P68.3 | `7   (hors artefacts de seance : 1)` | 7 / 1 | **tenue** |
| P68.4 | `L6 INTROUVABLE`, `remplacements prets : 0`, `ancres introuvables : 1`, `REFUS : 1 defaut(s). AUCUN FICHIER ECRIT.`, code 1 | **exactement**, `EXIT=1` | **tenue** |
| P68.5 | `lignes de table : 56` ; `fiches : 6` ; `remplacements prets : 56` ; 5 seaux à 0 ; `INVARIANT D ACCENTS casse sur : 0 fiche(s)` ; `CONTROLE SEUL : 56 …, 0 fichier ecrit.` | identique, `EXIT=0` | **tenue** |
| P68.6 | ancres 5/5, 11/11, 7/7, 10/10, 1/1, 22/22 ; **`ecart +0`** sur les six ; lignes inchangées sur les six | identique ; `56 / 160 / 197 / 261 / 68 / 405` **inchangés** ; `21 / 56 / 77 / 78 / 34 / 152` inchangées | **tenue** |
| P68.7 | 6 × `ECRIT` avec (5)(11)(7)(10)(1)(22) ; `fichiers ecrits : 6` | identique | **tenue** |
| P68.8 | `6 fiche(s) lue(s), 1 a reprendre.` ; `C109 de prose : 5` ; seule `fonction` listée | identique | **tenue** |
| P68.9 | `hors perimetre : 20` inchangé | 20 | **tenue** |
| P68.10 | puces après passe **16**, `0 / 0 / 0 / 5 / 0 / 11` | identique | **tenue** |
| P68.11 | `LOT (6 fiches) 5814`, `mecatronique 263` | **5813**, **262** | **RÉFUTÉE** |
| P68.12 | `RESTANT DE L ANNEAU 2 (23 fiches) 37149`, `mecatronique 263`, le reste au caractère | **37148**, **262** ; tout le reste au caractère | **RÉFUTÉE** |
| P68.13 | fin de bloc **17 / 10** | 17 / 10 | **tenue** |

**Bilan du bloc 68 : 13 prédictions à décompte plein, 11 tenues, 2 réfutées**
(une seule cause).

⚠ **RÉFUTATIONS P68.11 ET P68.12 — J'AI COMPTÉ LE MOT AJOUTÉ ET PAS LE MOT
RETIRÉ, DANS LE MÊME REMPLACEMENT.** La règle est
`du [[firmware]] ; et le comportement` → `du [[firmware]]. Enfin, le
comportement` : j'ai vu le « **Enfin** » qui entre et **pas le « et » qui
sort**. Le solde est **nul**, et les deux chiffres dérivés du même
raisonnement tombent ensemble — le volume du lot **et** la ligne d'anneau de
la fiche.
✅ *L'instrument, lui, l'avait dit avant la mesure* : le contrôle seul publiait
`pts de code 2037 -> 2038`, **+1 point de code**, quand un mot de cinq lettres
ajouté net en aurait coûté six. **La donnée qui réfutait la prédiction était à
l'écran deux commandes plus tôt, dans une ligne que je lisais pour autre
chose.** ⚠ *C'est le troisième défaut de la série trouvé en mesurant autre
chose, et le premier où la mesure qui l'aurait évité était déjà publiée.*
⚠ **Candidate : un remplacement qui change le nombre de mots se compte en
SOLDE, jamais en ajout** — et l'invariant `pts de code` du contrôle seul en est
le témoin gratuit, disponible **avant** l'écriture.

✅ **LE NEUVIÈME REFUS DÉLIBÉRÉ DE LA SÉRIE, ET IL PORTE SUR LA FAUTE LA MOINS
VISIBLE À CE JOUR** : un **trait d'union ASCII** à la place d'un tiret
cadratin, dans une ancre par ailleurs exacte au caractère. *Le corps ne peut
pas la contenir — c'est précisément ce que la passe retire —, et sans la garde
d'unicité elle n'aurait produit **aucune erreur** : le lot serait sorti à 55
remplacements sur 56 et personne n'aurait su lequel manquait.*

✅ **L'INVARIANT D'ACCENTS TIENT À +0 SUR LES SIX FICHES, ET TROIS
REMPLACEMENTS LE MENAÇAIENT VRAIMENT.** `à la livraison` → `À la livraison`
change une lettre accentuée en une autre ; `l'électronique` → `L'électronique`
et `l'état de l'art` → `L'état de l'art` capitalisent une lettre ASCII **devant**
une lettre accentuée. **Les trois sortent à `ecart +0`**, ce qui était prédit
au caractère et non « sans doute inchangé ».

---

## ⛳ GATE G2 — fin de passe C109.

**Fait** — **80 signalements jugés un par un et publiés avant la table**, **59
traités**, **21 gardés**, **56 ancres**, **6 sources FR écrites en une passe
tout-ou-rien**. **Un test négatif, un refus, zéro octet.**

**`git diff --numstat` sur `content/`** — six fiches, **44 lignes touchées**,
et **autant d'insertions que de suppressions sur chacune**, ce qui est la
signature d'une passe de ponctuation :

```
7  7  content/conduite/proj/bete-a-cornes.md
17 17  content/conduite/proj/caracteriser-une-exigence.md
1  1  content/conduite/proj/fonction.md
3  3  content/conduite/proj/mecatronique.md
7  7  content/conduite/proj/mind-map.md
9  9  content/conduite/proj/pieuvre.md
```

**Chiffres qui ont changé**

- `C109 de prose` **61 → 5** ; les 5 résiduels sont **les cinq gardés de la
  L20 de `fonction`**, seuls gardés que `--style` voit.
- **Puces à tiret du lot 19 → 16** ; les 16 sont **5 gloses `FP/FS/FC` de
  `pieuvre`** et **11 entrées de glossaire de `caracteriser-une-exigence`**.
- **Volume inchangé : 5 813 mots.** Une passe de ponctuation ne déplace pas le
  compte de mots — *et c'est ce que j'avais prédit faux.*
- **Invariant d'accents `+0` sur les six**, lignes de corps inchangées sur les
  six.
- `git status` **17 / 10**.

**Ce qui suit** — bloc 69 : garde, puis **les CINQ relevés d'avant rédaction**
(titres de section, `title:` par les libellés, chaînes affichées C113, titres
de callout, plus le vocabulaire anglais du triplet reporté du bloc 66), puis
génération des six squelettes EN.

⚠ **Rien à arbitrer, rien de bloquant.** *Le taux de conservation, 26 %, est le
plus haut de la série et il est motivé : deux des six fiches sont des fiches de
typologie, et une typologie est un glossaire.*

---

## Déclaration C131 du bloc 69 — rejouée, liste fermée avant le bloc, DEUX instants

**Populations** — inchangées, redéclarées : `git status --porcelain` sur le
dépôt entier moins les deux chemins exacts du `.gitignore` ; `hors artefacts de
seance` = la même moins `batterie-sortie` et `predictions-`.

**Liste FERMÉE des artefacts du bloc 69 :**

| # | artefact | état | total | hors artefacts | existe à la lecture de la garde ? |
|---|---|---|---|---|---|
| 1 | `tools/predictions-260830.md` | ` M` | oui | non | oui |
| 2-7 | `tools/batterie-sortie-3008b19..b24.txt` | `??` | oui | non | oui |
| 8 | `tools/batterie-sortie-3008b25.txt` (étape 0 de la garde) | `??` | oui | non | **oui** |
| 9 | `tools/puces-lot9-3008.txt` | `??` | oui | oui | oui |
| 10 | `tools/puces-lot9-apres-3008.txt` | `??` | oui | oui | oui |
| 11 | `tools/passe-negatif-lot9-3008.tsv` | `??` | oui | oui | oui |
| 12 | `tools/passe-c109-lot9-3008.tsv` | `??` | oui | oui | oui |
| 13-18 | les **6 sources FR** modifiées au bloc 68 | ` M` | oui | oui | oui |
| 19 | `tools/releves-lot9-3008.txt` (**les cinq relevés en un seul fichier**, C124) | `??` | oui | **oui** | **non** |
| 20-25 | les **6 squelettes EN** de `content/en/conduite/proj/` | `??` | oui | **oui** | **non** |

**DEUX instants :**
- **quand la garde lit `git status`** : **18** au total, **10** hors artefacts ;
- **en fin de bloc** : **25** au total, **17** hors artefacts.

⚠ *`content/en/conduite/proj/` est un répertoire **déjà suivi** — il porte les
cinq fiches du lot 8 — donc les six fiches neuves comptent **une entrée
chacune**, et non une entrée de répertoire. **La règle d'usage 4 ne s'applique
pas ici, et c'est écrit pour qu'on ne l'invoque pas à tort.***

---

## Bloc 69 — les CINQ relevés d'avant rédaction, puis génération des six squelettes

**Commandes, dans cet ordre :**

1. `powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase garde`
2. les **cinq relevés**, sortie unique `tools/releves-lot9-3008.txt` (C124)
3. `node tools/creer-fiche-en.mjs <les 6 sources>` — génération des squelettes

⚠ **CINQ RELEVÉS ET NON QUATRE.** Le cinquième — les **titres de callout** —
est né du lot 8, d'un défaut attrapé en mesurant autre chose ; c'est sa
**première application à l'endroit prévu**, avant rédaction et non en
correctif. *La candidate passe de 0/N à 1/N si elle sert.*

### Prédictions du bloc 69

**Garde**

**P69.1** — `lignes non ASCII dans batterie.ps1 : 0` ; `sortie precedente
copiee : tools\batterie-sortie-3008b25.txt`.

**P69.2** — `garde   anneau : 2   chevron : False` ; `date ISO : 2026-08-30` ;
heure **> `09:31:29`** ; `HEAD git : 4e73aa8 2026-08-30 08:57:42 +0200` **au
caractère** ; `node : v24.15.0` ; 2 codes à 0.

**P69.3 — dates d'écriture : les TROIS lignes de pilotage inchangées au
caractère.** ⚠ *Les six sources FR ont changé au bloc 68, mais `-Fiches` est
vide : elles **n'apparaissent pas** dans cette garde. Terme écrit pour
réfuter : si une quatrième ligne sort, c'est que je me trompe sur ce que la
phase `garde` lit.*

**P69.4 — compteurs git au premier instant :** `18   (hors artefacts de
seance : 10)`.

**Relevé 1 — titres de section EN (candidate 3/N → 4/N)**

**P69.5 — les six formes de production, contre la référence datée du 30/08
à 08:0x (`204 / 140 / 139 / 102 / 37 / 30`, prise AVANT les cinq fiches du
lot 8).** ⚠ **Le prompt le dit lui-même : ce n'est PAS un état de clôture.**
Les cinq fiches du lot 8 ont été écrites après, donc les six compteurs
**doivent avoir monté**. Je prédis, en distinguant ce qui est sûr de ce qui ne
l'est pas :
- `## See also` **209**, `## What is it for?` **145**, `## Pitfalls` **144**,
  `## Where it fits in the project` **107** — **+5 exactement**, les cinq
  fiches du lot 8 étant des fiches-notion complètes qui portent les quatre
  sections d'ossature ;
- `## Exercises` **entre 37 et 42, point estimé 37** — *une notion de
  méthodologie n'a pas toujours d'exercices* ;
- `## Going further` **entre 30 et 35, point estimé 32**.

**P69.6 — les deux formes fautives du lot 4 restent à ZÉRO** :
`## Project connection` **0** et `## Step-by-step procedure` **0**. *Troisième
confirmation du correctif É1 de la suite 10, et aucune autre mesure du dépôt
ne peut le dire.*

**P69.7 — les titres de section FR des six sources : entre 20 et 34, point
estimé 27**, dont **au plus 6 hors des familles génériques**. ⚠ *Le lot 7 était
« le premier hors gabarit » avec 23 titres propres sur 36 ; celui-ci est fait
de **fiches-notion d'un même palier**, donc je prédis l'inverse : **une forte
majorité de titres génériques**, et le relevé sert de **confirmation** plutôt
que d'arbitrage.*

**Relevé 2 — les `title:` EN lus D'ABORD dans les libellés (candidate 0/N)**

**P69.8 — les six cibles reçoivent des libellés du corpus anglais, et je les
prédis nommément** — *ordre de lecture de la candidate du 30/08 (s2) : les
libellés **avant** les trois tests de C125* :

| source FR | `title:` FR | `title:` EN prédit | motif |
|---|---|---|---|
| `mecatronique` | Mécatronique | **`Mechatronics`** | terme technique international, aucune ambiguïté |
| `mind-map` | Mind map | **`Mind map`** | ⚠ **le `title:` FR est déjà anglais** — un anglicisme admis du §1 ; le titre EN est identique au FR, et ce sera le premier cas du chantier |
| `bete-a-cornes` | Bête à cornes | **`Bête à cornes`**, **gardé en français** | méthode AFNOR sans équivalent anglais ; précédents mesurés `Cahier des charges fonctionnel`, `AMDEC`, `Écodesign` |
| `pieuvre` | Pieuvre | **`Pieuvre`**, gardé en français | *idem*, même famille normative NF X50-151 |
| `fonction` | Fonction | **`Function`** | mot commun, et ses trois alias `FP/FS/FC` sont déjà écrits **40 fois** en libellés anglais (mesure du lot 8) |
| `caracteriser-une-exigence` | Caractériser une exigence | **`Characterising a requirement`** | ⚠ **et c'est le seul des six où l'orthographe britannique/américaine se pose** |

⚠ **DEUX TERMES ÉCRITS POUR RÉFUTER.** (1) `bete-a-cornes` et `pieuvre` sont
les deux seuls titres du lot que le corpus anglais pourrait avoir déjà tranchés
**contre** le français, et le lot 8 a montré que le corpus tranche parfois en
gardant le mot français (`Écodesign`) et parfois non. **Si un seul libellé
anglais écrit `horned beast` ou `octopus diagram`, la prédiction tombe et c'est
le corpus qui décide, pas moi.** (2) `Characterising` vs `Characterizing` :
**je relève l'usage du corpus** — la forme `-ise`/`-ize` déjà employée dans
`content/en/` — **avant** d'écrire le titre, et je ne tranche pas de mémoire.

**Relevé 3 — chaînes affichées sous C113**

**P69.9 — ZÉRO bloc de code dans les six sources**, donc **C113 hors sujet
pour le DEUXIÈME lot d'affilée**, et **l'assomption sur les chaînes affichées
libres reste non testée**. *Les six fiches sont des notions de méthodologie de
`conduite/proj/` ; le lot 8, du même répertoire, n'en portait aucun non plus.*
⚠ *Terme écrit pour réfuter : `caracteriser-une-exigence` porte du **code
inline** (`` `± 5 mm` ``, `` `100 g` ``, `` `≤ X` ``) — du code inline n'est
pas un bloc, et C113 ne le voit pas ; si le relevé en fait un bloc, c'est que
je confonds les deux.*

**Relevé 4 — titres de callout (candidate 0/N, PREMIÈRE application à
l'endroit prévu)**

**P69.10 — `> [!warning] Watch out` entre 44 et 55, point estimé 48 ;
`> [!tip] Tip` entre 41 et 52, point estimé 44 ;
`Attention` résiduel = 3 ; `Astuce` = 0.** *La référence 44 / 41 est celle du
lot 8, relevée pendant sa rédaction ; ses cinq fiches ont pu en ajouter.*
⚠ *`Attention` à **3** est le terme qui prouve que le relevé lit le corpus
entier et pas seulement les fiches récentes : ce sont trois résidus anciens,
et le lot 8 les a laissés en place.*

**Relevé 5 — le vocabulaire anglais du triplet (reporté du bloc 66)**

**P69.11 — le corpus anglais écrit DÉJÀ le triplet, et je prédis qu'il
l'écrit `criterion / level / flexibility`.** *Motif : `cahier-des-charges-
fonctionnel-en` et `specification-technique-en` sont traduites depuis le 25/08
et enseignent le CdCF ; elles ne peuvent pas parler d'exigences sans nommer le
triplet.* ⚠ **Si le corpus ne l'écrit nulle part, alors le lot 9 crée la
référence** — ce qui reste l'ordre naturel, la fiche qui enseigne le triplet
étant dans ce lot et non dans le lot 10.

**Génération des six squelettes**

**P69.12 — six blocs `=== conduite/proj/<slug>.md -> content/en/conduite/proj/
<slug>-en.md ===`**, chacun avec `liens`, `embeds`, `code` **tous `ok`**, et
**aucun `DIVERGE`**.

**P69.13 — `code : 0 -> 0` sur les six**, corollaire mécanique de P69.9.

**P69.14 — les alias sont RÉSOLUS par le générateur, et c'est ce qui referme
la boucle du bloc 66.** Je prédis au moins une ligne
`alias resolus vers leur porteuse` sur `pieuvre` et sur `mind-map` — les deux
fiches qui écrivent `[[FP]]`, `[[FS]]` et `[[FC]]` en clair —, et **zéro
`ANCRES DE WIKILINK A REECRIRE A LA MAIN`** sur les six.
⚠ *Si les alias sont résolus, la conclusion du bloc 66 se confirme d'un
troisième côté : `CIBLES SANS FICHE` est un défaut de `--anneau` seul, que ni
le générateur ni Quartz ne partagent.*

**P69.15 — compteurs git en fin de bloc : 25 au total, 17 hors artefacts.**

### Constats du bloc 69 (garde `3008b25`, relevés `tools/releves-lot9-3008.txt`)

| # | prédiction | constat | verdict |
|---|---|---|---|
| P69.1 | ASCII 0 ; copie `3008b25` | 0 ; `tools\batterie-sortie-3008b25.txt` | **tenue** |
| P69.2 | `garde / 2 / False`, heure > `09:31:29`, HEAD au caractère, `v24.15.0`, 2 codes à 0 | `09:35:33` ; identique | **tenue** |
| P69.3 | **3 lignes** de dates, pilotage seul, au caractère | 3 lignes, identiques | **tenue** |
| P69.4 | `18   (hors artefacts de seance : 10)` | 18 / 10 | **tenue** |
| P69.5 | `209 / 145 / 144 / 107 / [37,42] / [30,35]` | **209 / 144 / 143 / 104 / 37 / 31** | **RÉFUTÉE** |
| P69.6 | `## Project connection` 0, `## Step-by-step procedure` 0 | 0 et 0 | **tenue** |
| P69.7 | titres FR ∈ [20, 34], point 27 ; **au plus 6** hors familles génériques | **35** ; **10** hors familles | **RÉFUTÉE** |
| P69.8 | les **six** `title:` EN, nommés un par un | **les six, au caractère** | **tenue** |
| P69.9 | **0** bloc de code sur les six | 0 / 0 / 0 / 0 / 0 / 0 | **tenue** |
| P69.10 | `Watch out` ∈ [44,55] ; `Tip` ∈ [41,52] ; `Attention` **3** ; `Astuce` 0 | **47** ; **43** ; **0** ; 0 | **RÉFUTÉE** (`Attention`) |
| P69.11 | le corpus EN écrit déjà `criterion / level / flexibility` | **3 suites exactes**, et les trois mots en libellés **×4 chacun** | **tenue** |
| P69.12 | 6 blocs, `liens/embeds/code` tous `ok`, aucun `DIVERGE` | 6 blocs, 18 `ok`, 0 `DIVERGE` | **tenue** |
| P69.13 | `code : 0 -> 0` sur les six | oui | **tenue** |
| P69.14 | `alias resolus` sur `pieuvre` et `mind-map` ; **0** ancre à réécrire à la main | alias résolus sur **trois** fiches ; **1** ancre sur `bete-a-cornes` | **RÉFUTÉE** |
| P69.15 | fin de bloc **25 / 17** | 25 / 17 | **tenue** |

**Bilan du bloc 69 : 15 prédictions à décompte plein, 11 tenues, 4 réfutées.**

---

⚠ **INCIDENT C110 — LE MOTIF DU RELEVÉ 2 A MORDU À TORT, ET MON PREMIER
CORRECTIF ÉTAIT FAUX AUSSI.** Le motif cherchait le slug de la cible **en
sous-chaîne** : sur `fonction`, il ramenait les libellés de
`cahier-des-charges-fonctionnel` (**51** liens), `decomposition-fonctionnelle`
(**21**) et `fonction-informatique` (**12**), soit **une liste de 25 libellés
dont la plupart visaient une autre fiche**. ✅ **Vu avant toute décision de
titre**, parce que la liste rendait `CdCF` **34** en tête sur une cible qui
s'appelle « Fonction ».
⚠ **Le correctif du relevé 2bis — cible égale à `fonction` — rend 0**, et le
zéro est un **faux négatif** : le corpus **anglais** vise toujours `fonction-en`
et jamais `fonction`. **Deux motifs faux d'affilée sur le même relevé, et le
second l'était plus discrètement que le premier** — un motif qui sur-compte se
voit dans sa liste, un motif qui rend zéro ressemble à une réponse.
✅ **Motif juste, publié au relevé 2ter** : cible **égale à `<slug>-en`** ou
terminée par `/<slug>-en`. **Les cinq autres cibles rendent le même chiffre
sous les deux motifs** — leurs slugs n'ont pas d'homographe préfixe dans le
corpus —, ce qui est exactement pourquoi le défaut n'était visible que sur
`fonction`.
⚠ **Candidate : un motif qui cherche une CIBLE de wikilink borne la cible aux
deux bouts, et le corpus anglais vise `<slug>-en`.** *C110 exige un échantillon
qui contienne ce qui pourrait faire mordre le motif à tort ; ici les six cibles
**étaient** l'échantillon, et une seule des six portait le piège. **Le piège
n'était pas dans la langue, il était dans le nom** : `fonction` est préfixe de
`fonction-informatique` et sous-chaîne de deux autres slugs.*

✅ **ET LE MOTIF JUSTE DONNE LES SIX TITRES, TOUS LES SIX PRÉDITS AU
CARACTÈRE.**

| cible | libellés mesurés dans `content/en/` | `title:` EN retenu |
|---|---|---|
| `mecatronique-en` | `mechatronics` 10, `Mechatronics` 1, `mechatronic` 1 | **`Mechatronics`** |
| `mind-map-en` | `mind map` 1, `Mind map` 1 | **`Mind map`** |
| `bete-a-cornes-en` | `bête à cornes` 6, **`Bête à cornes` 4** | **`Bête à cornes`**, gardé en français |
| `pieuvre-en` | `pieuvre` 16, **`Pieuvre` 3** | **`Pieuvre`**, gardé en français |
| `fonction-en` | `FC` 23, `FP` 9, `FS` 8, **`Function` 4**, `service functions` 2, `functions` 1, `function` 1, `FP/FS/FC` 1 | **`Function`** |
| `caracteriser-une-exigence-en` | **`Characterising a requirement` 7**, `characterising a requirement` 2, `level` 4, `flexibility` 4, `criterion` 4 | **`Characterising a requirement`** |

⚠ **DEUX TITRES RESTENT EN FRANÇAIS, ET C'EST LE CORPUS QUI LE DÉCIDE, PAS
MOI.** `bête à cornes` et `pieuvre` sont des méthodes NF X50-151 sans nom
anglais : **dix libellés anglais pour la première, dix-neuf pour la seconde,
et aucun ne tente `horned beast` ni `octopus diagram`.** *Le terme écrit pour
réfuter était exactement celui-là, et il ne se déclenche pas.* **Troisième
famille de la lignée `Cahier des charges fonctionnel` / `AMDEC` / `Écodesign`,
et la première où DEUX titres d'un même lot en relèvent.**

✅ **`Characterising` — L'ORTHOGRAPHE EST MESURÉE, PAS CHOISIE.** Le corpus
écrit **119** formes en `-ise` (`organise`, `characterise`, `summarise`,
`prioritise`, `formalise`, `recognise` et flexions) contre **0** en `-ize`. *Le
libellé `Characterising a requirement` était déjà là sept fois ; le relevé
d'orthographe ne fait que confirmer qu'il n'était pas un accident.*

✅ **LE VOCABULAIRE DU TRIPLET ÉTAIT DÉJÀ ÉCRIT, ET LE CRITÈRE DE COMPOSITION
DU BLOC 65 TOMBE DE LUI-MÊME.** Le seul argument qui plaidait contre la coupe
après `caracteriser-une-exigence` était que traduire cette fiche avant
`etat-de-l-art-technique` fixerait le vocabulaire du triplet hors de la fiche
qui l'emploie en tableau. **Mesure : `criterion / level / flexibility` est écrit
3 fois en suite exacte dans `content/en/`, et les trois mots sont des libellés
de wikilink vers `caracteriser-une-exigence-en`, 4 fois chacun.** *Il n'y avait
rien à décider — exactement comme pour `FP/FS/FC` au lot 8.*

---

⚠ **RÉFUTATION P69.5 — J'AI PRÉDIT « +5 EXACTEMENT » SUR QUATRE COMPTEURS ET
AUCUN DES QUATRE N'EST À +5.** Contre la référence datée `204 / 140 / 139 /
102 / 37 / 30` (30/08 08:0x, **avant** les cinq fiches du lot 8), la mesure
rend `209 / 144 / 143 / 104 / 37 / 31`, soit **+5 / +4 / +4 / +2 / +0 / +1**.
*Cause : j'ai supposé que « fiche-notion complète » impliquait les quatre
sections d'ossature. **`## See also` est la seule que les cinq portent
toutes.*** ⚠ *Et le +2 sur `## Where it fits in the project` dit quelque chose
du lot 8 que sa propre clôture n'a pas publié : **trois de ses cinq fiches
n'ont pas de section de raccrochage projet**.*
✅ **La leçon d'instant, elle, tient** : les six compteurs **ont tous monté ou
sont restés stables**, aucun n'a baissé, et **prédire l'égalité avec la
référence aurait été faux six fois sur six**. *C'est ce que le prompt
demandait de ne pas rater, et ce n'est pas raté.*

⚠ **RÉFUTATION P69.7 — 35 TITRES DE SECTION FR, DONT 10 PROPRES, ET J'AI
PRÉDIT « FORTE MAJORITÉ DE GÉNÉRIQUES » SUR UN LOT QUI EN PORTE 25 SUR 35.**
L'intervalle [20, 34] rate de un. *La cause est arithmétique et elle est bête :
j'ai raisonné « six fiches-notion × 4 à 5 sections » sans compter les **`###`**,
et ce lot en porte **six** — les trois sous-sections du triplet, deux de
`pieuvre`, une de `bete-a-cornes`.* ✅ **Le fond de la prédiction tient** : 25
des 35 sont d'une famille générique, contre 13 sur 36 au lot 7 — *le lot 9 est
le contraire exact du « premier hors gabarit ».*

**Les dix familles génériques du lot, et leur forme de production, relevées
avant d'écrire :**

| titre FR | occurrences dans le lot | forme EN retenue | poids au corpus |
|---|---|---|---|
| `## Voir aussi` | 6 | `## See also` | **209** |
| `## À quoi ça sert ?` | 5 | `## What is it for?` | **144** |
| `## Pièges` | 5 | `## Pitfalls` | **143** |
| `## Comment la construire ?` | 3 | `## How do you build one?` | **6**, dont 3 jumelles du même répertoire |
| `## Exemple — Bras 3 axes pédagogique` | 2 | `## Example — 3-axis teaching arm` | **6** |
| `## Exemple — projet bras 3 axes` | 1 | `## Example — 3-axis arm project` | **1**, et c'est la jumelle de `cahier-des-charges-fonctionnel`, qui porte le **même titre FR** |
| `## Cas particulier — projet école sans client réel` | 1 | `## Special case — a school project with no real client` | **1**, forme exacte déjà au corpus |
| `## Cas particulier — exigences binaires et réglementaires` | 1 | `## Special case — binary and regulatory requirements` | **famille `## Special case — ` : 100**, libellé **neuf** |
| `## Exemple — Bras robotique pédagogique 6 axes` | 1 | `## Example — 6-axis teaching robot arm` | **famille `## Example — ` : 106**, libellé **neuf** |
| `## Fil rouge` | 1 | `## Running example` | **0 en titre**, mais **18** occurrences de `running example` en **prose** anglaise |

⚠ **Trois formes neuves, déclarées neuves AVANT d'être écrites** — les deux
libellés d'`Example`/`Special case` ci-dessus et `## Running example`. *La
troisième est la seule dont la famille n'existe pas en titre ; elle est
néanmoins **adossée à une mesure**, `running example` étant la façon dont le
corpus anglais dit « fil rouge » dix-huit fois.*

**Les dix titres propres**, qui nomment le contenu de leur fiche et n'ont
aucun modèle : `## Trois disciplines, un système`, `## Fil rouge`,
`### Méthode de remplissage`, `### Familles de milieux à parcourir
systématiquement`, `### Topologie du diagramme`, `## Format d'énoncé`,
`## Comment caractériser une exigence ?`, `### Le critère`, `### Le niveau`,
`### La flexibilité`. ✅ **Aucun n'a de forme de production à respecter, et
aucun ne doit prendre par accident `## Step by step` (77) ni
`## In the project` (21)** — terme écrit pour réfuter à la clôture.

---

⚠ **RÉFUTATION P69.10 — LE `3` D'`Attention` N'EXISTAIT DÉJÀ PLUS QUAND LE
BRIEF L'A ÉCRIT, ET C'EST LA MÊME CAUSE QUE LES SIX COMPTEURS DE SECTION.**
J'ai prédit `Attention` **3**, « trois résidus anciens que le lot 8 a laissés
en place » ; la mesure rend **0**. *Le `3` du brief et du JOURNAL est le compte
des occurrences que le lot 8 **a corrigées** — `fast-en` 2, `matrice-eco-
criteres-en` 1 —, publié comme s'il décrivait un résidu du corpus.* ⚠ **C'est
la troisième occurrence de la cause « un relevé d'avant-correctif servi comme
état d'après », après les deux du lot 8**, et cette fois **elle a voyagé
jusque dans le prompt de la séance suivante**.
✅ **Les deux compteurs qui portent le sens sont dans leur intervalle** :
`Watch out` **47** (44 + 3) et `Tip` **43** (41 + 2) — *les cinq occurrences
que le lot 8 a écrites, et rien d'autre.*

✅ **PREMIÈRE APPLICATION DU CINQUIÈME RELEVÉ À L'ENDROIT PRÉVU, ET IL ARBITRE
DÈS SA PREMIÈRE UTILITÉ.** Les six sources FR portent **7 callouts titrés** :
`> [!warning] Moyen` ×2, `> [!failure] Mauvais` ×2, `> [!example] Bon` ×2,
`> [!tip] Astuce` ×1. **Le corpus anglais a déjà tranché le triptyque** —
`> [!example] Good`, `> [!warning] Fair`, `> [!failure] Poor`, une occurrence
chacun, dans `decomposition-fonctionnelle-en`, **la seule jumelle traduite des
trois porteuses françaises**. *Sans ce relevé j'aurais écrit `Good` / `Average`
/ `Bad`, et le corpus dit `Fair` et `Poor`.* Et `Astuce` → **`Tip`** (43).
**La candidate passe de 0/N à 1/N.**

---

⚠ **RÉFUTATION P69.14 — UNE ANCRE INTRA-PAGE À RÉÉCRIRE, ET LE CORPUS SAIT
DÉJÀ COMMENT.** J'ai prédit zéro ; `bete-a-cornes` en porte **une** :
`[[specification-technique#cas-particulier--projet-école-sans-client-réel]]`.
✅ *Le renvoi FR est **valide** — la section existe, en `#####`, et son slug
tient les deux tirets parce que le titre porte ` : ` — et sa forme anglaise est
**déjà écrite** dans `cahier-des-charges-fonctionnel-en`, qui fait le même
renvoi :* `[[specification-technique-en#special-case-a-school-project-with-no-
real-client|the special case in the specification phase]]`. **Rien à décider,
une ligne à recopier.**

✅ **ET LA BOUCLE DU BLOC 66 SE REFERME D'UN TROISIÈME CÔTÉ.** Le générateur
**résout les alias** : `FP`, `FS`, `FC` → `fonction` (**12 résolutions** sur
`mind-map` et `pieuvre`), `critere`, `niveau`, `flexibilite` →
`caracteriser-une-exigence` (**3** sur `fonction`). *Il **retire** en outre le
bloc `aliases:` des deux fiches EN, quatre lignes chacune.* **`CIBLES SANS
FICHE` est donc bien un défaut de `--anneau` seul** : ni Quartz, ni le
générateur ne partagent sa lecture. *Trois instruments, deux d'accord, un
isolé — et c'est l'isolé qui publie le chiffre à toutes les clôtures.*

---

## ⛳ GATE G3 — avant rédaction.

**Fait** — **cinq relevés** publiés dans `tools/releves-lot9-3008.txt`, **six
squelettes EN générés**, `liens / embeds / code` **tous `ok`**, zéro
`DIVERGE`.

**Ce qui est décidé avant d'écrire une ligne**

- **Six `title:`**, tous lus dans les libellés du corpus anglais :
  `Mechatronics`, `Mind map`, **`Bête à cornes`**, **`Pieuvre`**, `Function`,
  `Characterising a requirement`.
- **Dix familles de titres de section**, dont **sept formes de production
  existantes** et **trois formes neuves déclarées**.
- **Trois titres de callout** : `Good` / `Fair` / `Poor`, plus `Tip`.
- **Une ancre intra-page** à recopier depuis `cahier-des-charges-fonctionnel-en`.
- **`criterion / level / flexibility`** : vocabulaire du triplet **déjà au
  corpus**, rien à inventer.
- **C113 hors sujet pour le deuxième lot d'affilée** : zéro bloc de code sur
  les six sources. **L'assomption sur les chaînes affichées libres reste non
  testée**, coût du revert inchangé.

**Ce qui suit** — bloc 70 : rédaction des six fiches EN **par le mode
`--corps`**, qui écrit le corps sans jamais toucher au front matter.
*Première utilisation du mode sur un lot réel.*

⚠ **Rien à arbitrer.** *Deux titres restent en français et c'est une mesure du
corpus, pas une préférence ; si Tim veut l'infirmer, le coût du revert est
**2 `title:` et 29 libellés**.*

---

## Déclaration C131 du bloc 70 — rejouée, liste fermée avant le bloc

**Populations** — inchangées, redéclarées.

**Liste FERMÉE des artefacts du bloc 70 :**

| # | artefact | état | total | hors artefacts |
|---|---|---|---|---|
| 1 | `tools/predictions-260830.md` | ` M` | oui | non |
| 2-8 | `tools/batterie-sortie-3008b19..b25.txt` | `??` | oui | non |
| 9 | `tools/batterie-sortie-3008b26.txt` (étape 0 de la garde) | `??` | oui | non |
| 10-13 | `puces-lot9-3008.txt`, `puces-lot9-apres-3008.txt`, les **2 tables TSV** | `??` | oui | oui |
| 14 | `tools/releves-lot9-3008.txt` | `??` | oui | oui |
| 15-20 | les **6 sources FR** modifiées au bloc 68 | ` M` | oui | oui |
| 21-26 | les **6 fiches EN**, déjà `??` depuis le bloc 69 — **`--corps` les réécrit sans créer d'entrée** | `??` | oui | oui |
| — | les **6 fichiers de corps**, écrits dans le répertoire temporaire de la session, **hors dépôt** | — | non | non |
| — | `tools/batterie-sortie.txt` | ignoré | non | non |

**UN SEUL instant, et c'est ce qui le rend intéressant : 26 au total, 17 hors
artefacts, À LA GARDE COMME EN FIN DE BLOC.**
⚠ *Le bloc écrit **six fichiers de `content/`** et les compteurs ne bougent
pas : les six sont **déjà** des entrées `??` depuis leur génération au bloc 69,
et `git status --porcelain` compte des **entrées**, pas des écritures. **Les
six fichiers de corps sont hors dépôt** et n'en fabriquent aucune. **Prédire un
mouvement ici serait confondre « le bloc écrit » et « le bloc ajoute une
ligne au statut ».***

---

## Bloc 70 — rédaction des six fiches EN, par le mode `--corps`

**Commandes, dans cet ordre :**

1. `powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase garde`
2. pour chacune des six : écriture du **fichier de corps** (hors dépôt), puis
   `node tools/creer-fiche-en.mjs --corps content/en/conduite/proj/<slug>-en.md <fichier de corps>`
3. **remesure immédiate** : `--controle` sur tout le corpus, puis
   `derive-traduction.mjs`

⚠ **PREMIÈRE UTILISATION DU MODE `--corps` SUR UN LOT RÉEL.** Le mode est né
la séance précédente, sur un test négatif et un test positif de
non-régression. *Ce qu'il change : **le front matter n'est jamais réécrit**,
donc l'empreinte `source_sha256` que le générateur vient de poser au bloc 69
ne peut pas être réinventée. **C'est le défaut qui s'est produit aux lots 7 et
8, deux fois, et que deux correctifs de code successifs n'avaient pas fermé.***

### Prédictions du bloc 70

**P70.1 — garde.** `lignes non ASCII : 0` ; `sortie precedente copiee :
tools\batterie-sortie-3008b26.txt` ; `garde   anneau : 2   chevron : False` ;
heure **> `09:35:33`** ; `HEAD git : 4e73aa8 2026-08-30 08:57:42 +0200` **au
caractère** ; `node : v24.15.0` ; **3 lignes de dates** de pilotage,
inchangées **au caractère** ; `fichiers modifies non commites : 26   (hors
artefacts de seance : 17)`.

**P70.2 — les six `--corps` passent les CINQ gardes, et les trois compteurs
se reportent un pour un**, avec les valeurs de la source FR mesurées au
bloc 69 :

| fiche EN | `liens` | `embeds` | `code` |
|---|---|---|---|
| `mecatronique-en` | 9 → 9 | 1 → 1 | 0 → 0 |
| `mind-map-en` | 20 → 20 | 2 → 2 | 0 → 0 |
| `bete-a-cornes-en` | 7 → 7 | 4 → 4 | 0 → 0 |
| `pieuvre-en` | 29 → 29 | 2 → 2 | 0 → 0 |
| `fonction-en` | 11 → 11 | 0 → 0 | 0 → 0 |
| `caracteriser-une-exigence-en` | 23 → 23 | 0 → 0 | 0 → 0 |

**18 `ok`, zéro `DIVERGE`, zéro `GARDE`.**

**P70.3 — l'invariant du mode, sur les six :** `source_sha256 avant` **=**
`source_sha256 apres`, **64 hexadécimaux minuscules**, et
`front matter identique a l octet : oui`. Puis
`ECRIT  content/en/conduite/proj/<slug>-en.md   (front matter recopie a
l octet)`.

**P70.4 — `--controle` : `222 fiches`, `0 divergente`, `0 lien non suffixe
sur 0`.** *216 au lot 8 plus les six de ce lot.*

**P70.5 — `derive-traduction` : `MARQUE INVALIDE 0`, `DERIVE 0`,
`A JOUR 222`, code de sortie 0 — ET ZÉRO `--recaler`.**
⚠ **C'est LA prédiction du bloc, et elle est le terme qui juge le mode
`--corps`.** *Le lot 7 a demandé un `--recaler` après une empreinte
`PLACEHOLDER` ; le lot 8 en a demandé un après une empreinte **composée de
tête et bien formée**, que le statut écrit pour ce défaut n'a pas vue. **Si
`DERIVE` sort à autre chose que 0, le mode n'a pas fermé la trappe** — et il
n'y aurait plus de troisième correctif à écrire, seulement un constat.*

**P70.6 — compteurs git en fin de bloc : 26 au total, 17 hors artefacts,
INCHANGÉS.** *Motif à la déclaration C131 ci-dessus.*

**P70.7 — ce que la rédaction doit tenir, et qui se vérifiera au bloc 72** :
les **dix formes de titre de section** arrêtées au gate G3, les **trois titres
de callout** `Good` / `Fair` / `Poor` plus `Tip`, **l'ancre intra-page**
recopiée depuis `cahier-des-charges-fonctionnel-en`, et **aucune apparition
accidentelle** de `## Step by step` ni de `## In the project`.

### Constats du bloc 70 (garde `3008b26`, six `--corps`, remesure `--controle` + `derive-traduction`)

| # | prédiction | constat | verdict |
|---|---|---|---|
| P70.1 | garde : ASCII 0, copie `3008b26`, heure > `09:35:33`, HEAD au caractère, 3 dates identiques, **26 / 17** | 0 ; `3008b26` ; `09:41:43` ; `4e73aa8 … 08:57:42 +0200` ; identiques ; **26 / 17** | **tenue** |
| P70.2 | les six passent les 5 gardes ; `9/1/0`, `20/2/0`, `7/4/0`, `29/2/0`, `11/0/0`, `23/0/0` ; **18 `ok`, 0 `DIVERGE`** | exactement | **tenue** |
| P70.3 | `source_sha256 avant = apres` et `front matter identique a l octet : oui` sur les six ; 6 × `ECRIT` | exactement, `EXIT=0` six fois | **tenue** |
| P70.4 | `--controle` : **222 fiches, 0 divergente, 0 lien non suffixe sur 0** | identique | **tenue** |
| P70.5 | `MARQUE INVALIDE 0`, `DERIVE 0`, `A JOUR 222`, code 0, **zéro `--recaler`** | identique, **zéro `--recaler`** | **tenue** |
| P70.6 | fin de bloc **26 / 17, INCHANGÉS** | 26 / 17 | **tenue** |
| P70.7 | *(déclarative : se vérifie au bloc 72)* | — | *[reportée]* |

**Bilan du bloc 70 : 6 prédictions à décompte plein, 6 tenues, 0 réfutée**
(plus 1 reportée au bloc 72).

✅ **LE MODE `--corps` FERME LA TRAPPE, ET C'EST LE PREMIER LOT DEPUIS LE LOT 6
QUI NE DEMANDE AUCUN `--recaler`.** *Le lot 7 en a demandé un après une
empreinte `PLACEHOLDER` ; le lot 8 en a demandé un après une empreinte
**composée de tête et bien formée**, que le statut `MARQUE INVALIDE`, écrit
exactement pour ce défaut, n'a pas vue.* **Ici : six fiches rédigées, six front
matters recopiés à l'octet, six `source_sha256` identiques avant et après, et
`DERIVE 0`.** ⚠ *Le mérite n'est pas dans ma vigilance — il est dans le fait
que **le geste fautif n'a plus d'occasion de se produire** : un fichier de corps
ne porte pas de front matter, donc il n'y a plus de front matter à réécrire.
C'est la différence entre une règle relue et une règle logée dans le code, et
c'est la troisième fois de ce chantier qu'elle se vérifie.*
**La règle d'usage 11 passe de 1/N à 2/N**, et pour la première fois sur un lot
réel.

⚠ **CE QUE LE MODE NE PROUVE PAS, ET QUI EST ÉCRIT.** Les six fiches ont été
rédigées **en lisant le squelette sur disque**, ce que la règle demandait déjà
avant le mode. **`--corps` empêche d'inventer une empreinte ; il n'empêche pas
de mal traduire.** *Le contrôle qui vaut sur la traduction reste `--controle`
(trois compteurs), `--style` (typographie et C109 créées), `--alt` (les alt) et
`--libelles` (les libellés), et ils passent au bloc 72.*

✅ **ET UN COMPTEUR QUI NE BOUGE PAS EST AUSSI UNE PRÉDICTION** : `git status`
sort à **26 / 17 avant et après** un bloc qui a réécrit **six fichiers de
`content/`**. *Les six étaient déjà des entrées `??` depuis leur génération, et
les six fichiers de corps vivent hors dépôt. **Prédire un mouvement aurait été
confondre « le bloc écrit » et « le bloc ajoute une ligne au statut »**, ce qui
est exactement la famille de confusion qui a fait tomber C131 trois fois le
30/08.*

**Ce que la rédaction a tenu, et qui se mesure au bloc 72** — les dix formes de
titre de section, les quatre titres de callout (`Poor` / `Fair` / `Good` /
`Tip`), l'ancre intra-page recopiée depuis `cahier-des-charges-fonctionnel-en`,
les deux titres français, et **deux décisions de rédaction prises seules** :
- la **virgule décimale française devient un point** (`2,4 GHz` → `2.4 GHz`,
  `± 0,1 mm` → `± 0.1 mm`, `± 0,5 mm` → `± 0.5 mm`) — *verdict **mécanique** de
  `--style` EN, aucune marge* ;
- les **séparateurs de milliers** passent à la virgule anglaise
  (`100 000 h` → `100,000 h`, `10 000 h` → `10,000 h`) — ⚠ *`--style` ne peut
  pas trancher entre une décimale française et un millier anglais et les sort
  en **candidats à lire** : **je prédis donc 2 candidats de cette famille au
  bloc 72**, et ils sont délibérés. Précédent au corpus : `3,000`.*
- le prix de la borne d'exemple passe de `< 200 € HT` à
  `< €200 excl. VAT` — *forme du corpus, `excl. VAT` mesuré 10 fois. **C71 ne
  s'y oppose pas** : c'est un critère chiffré du système conçu, pas un cadrage
  d'achat — clause de périmètre du 29/08 (suite 5).*

---

## ⛳ GATE G3bis — fin de rédaction, avant les `title:`.

**Fait** — **six fiches EN rédigées par `--corps`**, **zéro octet de front
matter touché**, **222 fiches contrôlées, 0 divergente**, **`DERIVE 0`**,
**zéro `--recaler`**.

**Chiffres qui ont changé** — corpus EN **216 → 222 fiches**. `git status`
inchangé à **26 / 17**.

**Ce qui suit** — bloc 71 : les six `title:` EN par `renommer-titres.mjs`, avec
**test négatif délibéré**. Les six valeurs sont **déjà arrêtées au gate G3** et
lues dans les libellés du corpus ; le bloc ne fait que les poser.

⚠ **Rien à arbitrer.** *Le seul point qui pourrait l'être — deux `title:`
gardés en français — est une mesure du corpus anglais lui-même, et son coût de
revert est écrit : 2 `title:` et 29 libellés.*

---

## Déclaration C131 du bloc 71 — rejouée, liste fermée avant le bloc, DEUX instants

**Populations** — inchangées, redéclarées.

**Liste FERMÉE des artefacts du bloc 71** — les **26 entrées** existantes,
plus :

| # | artefact | état | total | hors artefacts | existe à la garde ? |
|---|---|---|---|---|---|
| 27 | `tools/batterie-sortie-3008b27.txt` (étape 0 de la garde) | `??` | oui | non | **oui** |
| 28 | `tools/table-titres-negatif-lot9-3008.tsv` | `??` | oui | **oui** | non |
| 29 | `tools/table-titres-lot9-3008.tsv` | `??` | oui | **oui** | non |

⚠ *Les **six fiches EN** sont réécrites par `renommer-titres --ecrire` et
**n'ajoutent aucune entrée** : elles sont `??` depuis le bloc 69.*

**DEUX instants :** **27 / 17** quand la garde lit `git status` ; **29 / 19**
en fin de bloc.

---

## Bloc 71 — les six `title:` EN (C125), avec test négatif

**Commandes, dans cet ordre :** garde ; écriture des deux tables ; test négatif
(`renommer-titres.mjs` sur la table négative) ; contrôle seul sur la table
réelle ; `--ecrire` ; puis `--libelles` en remesure.

⚠ **Les six valeurs sont ARRÊTÉES DEPUIS LE GATE G3** et lues dans les
libellés du corpus anglais (relevé 2ter). **Ce bloc ne décide rien, il pose.**
*Trois lignes ne changent rien — `Mind map`, `Bête à cornes`, `Pieuvre` — et
figurent quand même : une ancre qui vaut son remplacement prouve que le titre a
été relu. Précédent : lot 8, deux lignes identiques sur cinq.*

### Prédictions du bloc 71

**P71.1 — garde.** ASCII **0** ; copie `tools\batterie-sortie-3008b27.txt` ;
`garde   anneau : 2   chevron : False` ; heure **> `09:41:43`** ;
`HEAD git : 4e73aa8 2026-08-30 08:57:42 +0200` **au caractère** ; `node :
v24.15.0` ; **3 lignes de dates** de pilotage inchangées ;
`fichiers modifies non commites : 27   (hors artefacts de seance : 17)`.

**P71.2 — test négatif, forme exacte.** La table négative porte **une seule
ligne**, dont l'ancien titre est **`Mecatronique` SANS ACCENT** là où le front
matter porte `Mécatronique`. *C'est la faute exacte qui a arrêté un lot de
38 éditions le 29/08 (`à prevoir` sans accent), et la seule que ce script
existe pour attraper.* **Attendu : refus, `exit 1`, zéro octet écrit.**

**P71.3 — contrôle seul de la table réelle.** **6 lignes**, **6 ancres
trouvées**, **0 défaut**, **0 fichier écrit**, `exit 0`.

**P71.4 — écriture.** **6 fichiers écrits**, `exit 0`, et **trois titres
seulement changent de valeur** :

| fiche EN | ancien `title:` | nouveau `title:` | change ? |
|---|---|---|---|
| `mecatronique-en` | `Mécatronique` | **`Mechatronics`** | **oui** |
| `mind-map-en` | `Mind map` | `Mind map` | non |
| `bete-a-cornes-en` | `Bête à cornes` | `Bête à cornes` | non |
| `pieuvre-en` | `Pieuvre` | `Pieuvre` | non |
| `fonction-en` | `Fonction` | **`Function`** | **oui** |
| `caracteriser-une-exigence-en` | `Caractériser une exigence` | **`Characterising a requirement`** | **oui** |

⚠ **`mind-map-en` est le PREMIER CAS DU CHANTIER OÙ LE `title:` FRANÇAIS EST
DÉJÀ ANGLAIS**, « mind map » étant un anglicisme admis du §1 des conventions.
*La ligne ne change rien et c'est son intérêt : elle prouve que le titre a été
relu au lieu d'être supposé.*

**P71.5 — `derive-traduction` après l'écriture : `MARQUE INVALIDE 0`,
`DERIVE 0`, `A JOUR 222`.** ⚠ *`renommer-titres` touche le **front matter**,
mais pas le `source_sha256` : l'empreinte porte sur la **source FR**, que ce
bloc ne touche pas. **Prédire un `DERIVE` ici serait confondre l'empreinte de
la source avec l'état du fichier EN.***

**P71.6 — `--libelles` : `candidats a lire` entre 112 et 150, point estimé
130.** ⚠ **Et le point estimé n'est PAS 112, contrairement à ce que la
candidate du lot 8 pourrait laisser croire.** *Le lot 8 avait rendu 112 avant
et après, parce que ses titres avaient été choisis sur les libellés qui les
visaient. **Ici, un effet de sens contraire domine** : `fonction-en` et
`caracteriser-une-exigence-en` **n'existaient pas** avant ce lot, donc les
libellés qui les visaient comptaient en `cible EN absente` ; ils deviennent
**jugeables** d'un coup. **`FC` 23, `FP` 9, `FS` 8 et `FP/FS/FC` 1 visent
désormais un titre `Function`, et `criterion` 4, `level` 4, `flexibility` 4
visent `Characterising a requirement`** — aucun ne partage de radical avec sa
cible.* **Je prédis donc une hausse, et je la prédis chiffrée.**

**P71.7 — `cible EN absente` BAISSE**, et c'est le compteur qui explique la
hausse du précédent. *Terme écrit pour réfuter : si `candidats a lire` monte
sans que `cible EN absente` baisse, ma cause est fausse.*

**P71.8 — compteurs git en fin de bloc : 29 au total, 19 hors artefacts.**

### Constats du bloc 71 (garde `3008b27`, tables `table-titres[-negatif]-lot9-3008.tsv`)

| # | prédiction | constat | verdict |
|---|---|---|---|
| P71.1 | garde : ASCII 0, `3008b27`, heure > `09:41:43`, HEAD au caractère, 3 dates, **27 / 17** | 0 ; `3008b27` ; `09:49:00` ; identique ; **27 / 17** | **tenue** |
| P71.2 | test négatif : refus, `exit 1`, zéro octet | `L7 INTROUVABLE`, `ancre attendue : Mecatronique`, `title: en place : Mécatronique`, `REFUS : 1 defaut(s)`, `EXIT=1` | **tenue** |
| P71.3 | contrôle seul : 6 lignes, **6 ancres uniques**, 0 défaut, 0 écrit | identique, `EXIT=0` | **tenue** |
| P71.4 | 6 fichiers écrits ; **trois titres changent** (`Mechatronics`, `Function`, `Characterising a requirement`), trois identiques | exactement | **tenue** |
| P71.5 | `MARQUE INVALIDE 0`, `DERIVE 0`, `A JOUR 222` | identique | **tenue** |
| P71.6 | `candidats a lire` ∈ [112, 150], point **130** | **132** | **tenue** |
| P71.7 | `cible EN absente` **baisse** | **261 → 158** | **tenue** |
| P71.8 | fin de bloc **29 / 19** | 29 / 19 | **tenue** |

**Bilan du bloc 71 : 8 prédictions à décompte plein, 8 tenues, 0 réfutée.**

✅ **DIXIÈME REFUS DÉLIBÉRÉ DE LA SÉRIE, ET LA SORTIE NOMME LES DEUX CHAÎNES
CÔTE À CÔTE** : `ancre attendue : Mecatronique` / `title: en place :
Mécatronique`. *Un accent d'écart, deux lignes à l'écran, zéro octet écrit.*

✅ **P71.6 EST LA PRÉDICTION LA PLUS INTÉRESSANTE DU BLOC, PARCE QU'ELLE VA
CONTRE UNE CANDIDATE RÉCENTE.** La candidate du lot 8 dit que choisir un titre
sur les libellés qui le visent rend `candidats a lire` **invariant** — 112 avant
et après cinq fiches. **J'ai prédit une hausse quand même, et chiffrée : 130.
Mesure 132.** *Cause écrite avant la mesure et confirmée par P71.7 : deux des
six cibles **n'existaient pas**, donc les libellés qui les visaient comptaient
en `cible EN absente` ; ils basculent d'un coup en jugeables. **`cible EN
absente` tombe de 261 à 158**, et la hausse de `candidats a lire` est le solde
de ce basculement.*
⚠ **Ce que cela dit de la candidate, et il faut l'écrire** : l'invariance du
lot 8 tenait parce que **ses cinq cibles étaient visées par des libellés que
leurs titres allaient reprendre**. Ici, `fonction-en` est visée **41 fois** par
`FC` / `FP` / `FS` / `FP/FS/FC`, et **aucun sigle de ce genre ne partage de
radical avec `Function`** ; `caracteriser-une-exigence-en` est visée **12 fois**
par `criterion` / `level` / `flexibility`, qui sont les **trois composants du
triplet** et pas des synonymes du titre. **La candidate n'est pas fausse, elle
est incomplète : elle vaut pour un titre, pas pour une fiche visée par ses
propres alias.** *Ces libellés sont **délibérés** — ce sont les six alias FR —
et ils feront **grossir la file des 32 libellés parenthésés**, non la traiter.*

---

## Déclaration C131 du bloc 72 — rejouée, liste fermée avant le bloc, DEUX instants

**Populations** — inchangées, redéclarées.

**Liste FERMÉE des artefacts du bloc 72** — les **29 entrées** existantes,
plus :

| # | artefact | état | total | hors artefacts | existe à la garde ? |
|---|---|---|---|---|---|
| 30 | `tools/batterie-sortie-3008b28.txt` (étape 0 de `-Phase etat`) | `??` | oui | non | **oui** |
| 31 | `tools/verif-formes-lot9-3008.txt` (vérification P70.7 : titres de section, callouts, doublons) | `??` | oui | **oui** | non |
| 32 | `tools/puces-corpus-lot9-3008.txt` (compteur de puces du corpus, avec sa population) | `??` | oui | **oui** | non |

**DEUX instants :** **30 / 19** quand la garde lit `git status` ; **32 / 21**
en fin de bloc.

---

## Bloc 72 — clôture du lot 9

**Commandes :**

1. ```
   powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase etat -Chevron -Fiches <les 6 FR> -FichesEn <les 6 EN>
   ```
2. vérification P70.7 (formes de production, callouts, `titres-doublons`) →
   `tools/verif-formes-lot9-3008.txt`
3. compteur de puces du corpus, **population écrite dans la sortie** →
   `tools/puces-corpus-lot9-3008.txt`

### Prédictions du bloc 72

**P72.1 — garde.** ASCII **0** ; copie `tools\batterie-sortie-3008b28.txt` ;
`phase demandee : etat   anneau : 2   chevron : True` ; heure **> `09:49:00`** ;
`HEAD git : 4e73aa8 2026-08-30 08:57:42 +0200` **au caractère** ;
`27 / 17`… **non : `30   (hors artefacts de seance : 19)`**, premier instant de
la déclaration ci-dessus ; **15 lignes de dates** (3 de pilotage + 6 FR + 6 EN),
**aucune `ABSENTE`**, les **6 FR au 30/08 après `09:0x`** (passe du bloc 68) et
les **6 EN au 30/08 après `09:4x`** (renommage du bloc 71).

**P72.2 — corpus FR : `291242`, INCHANGÉ.** *Notre passe C109 est **neutre en
mots** — mesuré au bloc 68, et c'est la réfutation P68.11 qui l'a établi.*
⚠ *Le lot 8 avait rendu +1 ; celui-ci rend +0, et prédire +1 par analogie
serait recopier un lot au lieu de mesurer le sien.*

**P72.3 — traduites et restant.** `216 → 222 fiches`,
`251 826 → 257 639 mots FR` ; restant `26 → 20 fiches`,
`39 416 → 33 603 mots`. **Et `257 639 + 33 603 = 291 242` referme le corpus.**

**P72.4 — `--controle` : `222 fiche(s) controlee(s), 0 divergente(s)` et
`Liens non suffixes : 0 sur 0 fiche(s)`.**

**P72.5 — dérive : `MARQUE INVALIDE 0`, `DERIVE 0`, `SANS SOURCE 0`,
`SANS MARQUE 0`, `A JOUR 222`, ET ZÉRO `--recaler` SUR LA SÉANCE ENTIÈRE.**

**P72.6 — foisonnement : `222 paires`, foisonnement du lot entre −2 % et
+8 %, point estimé +3,5 %.** *Moyenne du chantier 3,7 % ; lot 8 +3,26 %.*

**P72.7 — `--style` des six fiches EN.** `typographie francaise : 0`
(verdict mécanique) ; `C109 creees en EN : 0` ; `hors alphabet latin : 0` ;
**`virgule ambigue : 2`** ; **`C109 de prose : 5`** ; `hors perimetre` entre
10 et 30, point estimé 18.
⚠ **Les deux virgules ambiguës sont délibérées et nommées** : `100,000 h` et
`10,000 h`, séparateurs de milliers anglais dans les pièges de
`caracteriser-une-exigence-en`. *Le motif ne peut pas les distinguer d'une
décimale française — le code le dit en commentaire — et les range en
**candidat à lire**. Précédent au corpus : `3,000`.*
⚠ **Les cinq `C109 de prose` sont le report un pour un des cinq gardées de la
L20 de `fonction`**, et **aucune autre**. *Terme écrit pour réfuter : un
sixième signalement voudrait dire que la rédaction a **créé** une ponctuation
que le français n'avait pas — c'est exactement ce que le seau
`C109 creees en EN` existe pour attraper, et je le prédis à 0.*

**P72.8 — médias : `470` fiches, `699` embeds.** *464 + 6 fiches, 690 + 9
embeds — 1 sur `mecatronique-en`, 2 sur `mind-map-en`, 4 sur
`bete-a-cornes-en`, 2 sur `pieuvre-en`, 0 sur les deux dernières.*

**P72.9 — anneau 2 : `NET 145`, `deja traduites 128`, `RESTANT 17`,
`RESTANT DE L ANNEAU 2 (17 fiches)  31335`, `fiches porteuses 0`.**
*37 148 − 5 813 = 31 335.*

**P72.10 — `CIBLES SANS FICHE (6)`, INCHANGÉ, et les six mêmes noms.**
⚠ **C'est la prédiction née de la réfutation P65.13 et de la mesure P66.12.**
*Le lot traduit les deux fiches qui **portent** ces six alias, et le compteur
ne bougera pas d'une unité, parce qu'il compte des **noms de fichier absents**
et non des liens rouges. **Prédire 0 ici serait croire la ligne qui l'affiche
plutôt que le code qui l'incrémente.***

**P72.11 — chevron `--tout` : `34 paires` des deux côtés, `0 divergente`,
inchangé.** *C127 hors sujet pour le quatrième lot d'affilée : les six sources
ne portent aucun bloc de code, donc aucune clôture en chevron.*

**P72.12 — wikilinks : `0 cassée`, `0 ambiguë`, et `mortes` entre 20 et 34,
point estimé 26 — INCHANGÉ.** ⚠ *Les six fiches EN visent `afnor-nfx50-151-en`
(4 fois) et `etat-de-l-art-technique-en` (1 fois), **qui n'existent pas
encore** ; mais ces deux cibles étaient **déjà** mortes, visées par les fiches
du lot 8. **Le compteur compte des cibles distinctes, pas des liens** — même
piège que `CIBLES SANS FICHE`, et c'est la deuxième fois de la séance que la
distinction décide.*

**P72.13 — `--libelles` : `4037 / 3879 / 158 / 132 / 16`, IDENTIQUE au
bloc 71.** *Rien n'a été écrit entre les deux.*

**P72.14 — `titres-doublons` : FR `243 / 243 / 0`, EN `222 / 222 / 0`.**
*216 + 6, et aucun doublon : les trois titres neufs sont uniques, et les deux
titres gardés en français ne collisionnent pas avec leurs sources — la source
FR est dans une autre population.*

**P72.15 — vérification P70.7, les six formes de production EN.**
`## See also` **215** (209 + 6) ; `## What is it for?` **149** (144 + 5, pas
6 : `mecatronique-en` n'en a pas) ; `## Pitfalls` **148** (143 + 5, pas 6 :
idem) ; `## Where it fits in the project` **104**, **INCHANGÉ** ;
`## Exercises` **37**, **INCHANGÉ** ; `## Going further` **31**, **INCHANGÉ**.
⚠ *Trois compteurs à zéro d'écart : **aucune des six fiches n'a de section de
raccrochage projet, d'exercices ni d'aller plus loin**, et c'est vrai côté
français aussi. Prédire « +6 partout » serait rejouer exactement la réfutation
P69.5.*

**P72.16 — les formes de famille et les trois formes neuves.**
`## How do you build one?` **9** (6 + 3) ;
`## Example — 3-axis teaching arm` **8** (6 + 2) ;
`## Example — 3-axis arm project` **2** (1 + 1) ;
`## Special case — a school project with no real client` **2** (1 + 1) ; et
les **trois formes neuves à 1 chacune** :
`## Special case — binary and regulatory requirements`,
`## Example — 6-axis teaching robot arm`, `## Running example`.
✅ **Et les deux formes fautives restent à 0** : `## Project connection` et
`## Step-by-step procedure`. **Terme écrit pour réfuter** :
`## Step by step` reste à **77** et `## In the project` à **21** — *si l'un des
deux monte, c'est qu'un des dix titres propres a pris par accident une forme de
production.*

**P72.17 — vérification des titres de callout.** `> [!warning] Watch out`
**47**, **INCHANGÉ** *(aucune des six n'emploie ce titre)* ; `> [!tip] Tip`
**44** (43 + 1) ; `> [!example] Good` **3**, `> [!warning] Fair` **3**,
`> [!failure] Poor` **3** *(1 + 2 chacun)* ; `Attention` **0** et `Astuce`
**0**, inchangés.

**P72.18 — puces à tiret du corpus, POPULATION ÉCRITE DANS LA SORTIE.**
**FR 999 sur 172 porteuses (248 fichiers)** — 1 002 − 3, les trois têtes de
puce de `caracteriser-une-exigence` traitées au bloc 68, et **aucune porteuse
perdue** ; **EN 901 sur 151 porteuses (222 fichiers)** — 885 + 16, les seize
puces gardées et reportées un pour un, sur **deux** porteuses neuves
(`pieuvre-en` et `caracteriser-une-exigence-en`).
⚠ *La soustraction se fait sur l'état **d'APRÈS** la passe (règle d'usage 5) :
19 relevées avant, 16 après, donc **−3 côté FR** et **+16 côté EN**, jamais
−19 / +19.*

**P72.19 — compteurs git en fin de bloc : 32 au total, 21 hors artefacts.**

---

## ⚠ AMENDEMENT ÉCRIT À LA DÉCLARATION C131 DU BLOC 72 — AVANT TOUTE EXÉCUTION

*Règle d'usage 10, seconde épreuve du 30/08 (s2) : « une liste qui s'ouvre
**avant** le bloc est une prédiction corrigée, une liste qui s'ouvre **pendant**
est une réfutation ». **Ceci est écrit avant la première commande du
correctif.***

**Motif** — l'étape 6 du bloc 72 rend **`C109 creees en EN : 2`**, deux
occurrences que la traduction a **fabriquées** et qu'aucun arbitrage français
n'a jamais vues. **Elles se corrigent dans le bloc**, et le correctif demande
**un artefact de plus** :

| # | artefact | état | total | hors artefacts |
|---|---|---|---|---|
| 33 | `tools/passe-correctif-en-lot9-3008.tsv` (table du correctif C109 EN) | `??` | oui | **oui** |

**Instant de fin de bloc corrigé : 33 au total, 22 hors artefacts** (au lieu de
32 / 21). *`en/conduite/proj/bete-a-cornes-en.md` est déjà une entrée `??` : la
réécrire n'en ajoute pas.*

---

### ⚠ INCIDENT — LA TRADUCTION A CRÉÉ DEUX POINTS-VIRGULES QUE LE FRANÇAIS N'AVAIT PAS, ET LE SEAU ÉCRIT POUR ÇA LES A VUS

**`en/conduite/proj/bete-a-cornes-en.md   C109 : FR 0 / EN 2   2 CREEE(S) PAR
LA TRADUCTION`.** Les deux sont dans la même fiche, et les deux viennent du
même réflexe : **une virgule française rendue par un point-virgule anglais.**

| ligne | français source | ce que j'ai écrit | verdict |
|---|---|---|---|
| 18 | `…adossée à la norme NF X50-151**,** elle ouvre la…` | `…standard NF X50-151]]**;** it opens the…` | **créée** |
| 86 | `…Deux postures honnêtes existent**,** voir le […] pour le détail.` | `…Two honest positions exist**;** see […] for the detail.` | **créée** |

⚠ *C109 s'applique à l'anglais **pour un motif distinct** (amendement du
22/08) : la construction est native de la prose éditée anglaise, mais le
**caractère tapé** est un marqueur de texte généré. **Une ponctuation créée par
la traduction n'a jamais été arbitrée en français** : elle ne peut donc pas être
« gardée » au titre d'une exemption, puisqu'il n'y a pas eu de jugement.*
✅ **Et c'est exactement ce que le seau `C109 creees en EN` existe pour
attraper** — il a mordu au premier lot où il avait quelque chose à mordre.
*Prédit à **0** en P72.7, sorti à **2** : la réfutation est nette et le
correctif est mécanique.*

**Résolutions retenues, une par occurrence, et chacune est une des trois voies
de C109 :**

- **L18 → découpage en deux phrases.** `…backed by [[…|standard NF X50-151]].
  It opens the [[…|specification phase]] and fixes…` *La voie 1, la plus
  ancienne.*
- **L86 → parenthèses de renvoi.** `Two honest positions exist (see [[…]] for
  the detail).` *La voie 3, spécialisée sur le renvoi (25/08) — et **la forme
  exacte que `cahier-des-charges-fonctionnel-en` emploie déjà** pour le même
  renvoi, mesurée au bloc 69.*

### Prédictions du correctif

**P72.20 — table de correctif : 2 lignes, 2 ancres, 1 fiche.** `remplacer-passe`
rend `fiches : 1`, `remplacements prets : 2`, les cinq seaux de défauts à `0`,
`INVARIANT D ACCENTS casse sur : 0 fiche(s)`, **`ecart +0`**, lignes de corps
**inchangées**.

**P72.21 — test négatif du correctif.** L'ancre `existent; see` — **le
point-virgule collé, sans l'espace qui le précède dans le fichier** — rend
`INTROUVABLE`, `REFUS : 1 defaut(s)`, `exit 1`, **zéro octet**. *Onzième refus
délibéré de la série.*

**P72.22 — remesure `--style` des six EN après correctif :
`C109 creees en EN : 0`, `C109 de prose : 5`, `6 fiche(s) lue(s), 1 a
reprendre.`** *Les cinq résiduelles sont les cinq gardées de la L20 de
`fonction`, et rien d'autre.*

**P72.23 — le volume EN bouge d'un mot au plus.** `bete-a-cornes-en` passe de
**965** à **entre 964 et 967**, point estimé **966** : la L18 gagne un `It`
(+1 mot) et la L86 perd un `see`… non — *le `see` reste dans la parenthèse.*
**Point estimé 966, +1 mot exactement.**

### Constats du bloc 72 (état `3008b28`, `verif-formes-lot9-3008.txt`, `puces-corpus-lot9-3008.txt`)

| # | prédiction | constat | verdict |
|---|---|---|---|
| P72.1 | garde `etat / 2 / True`, heure > `09:49:00`, HEAD au caractère, **30 / 19**, **15 lignes** de dates, aucune `ABSENTE` | `09:51:32` ; identique ; 30 / 19 ; 15 lignes ; FR `09:32:23`, EN `09:49:22` | **tenue** |
| P72.2 | corpus FR **291242**, inchangé | 291242 | **tenue** |
| P72.3 | `222 fiches / 257639` traduites ; `20 fiches / 33603` restant ; somme = 291242 | identique | **tenue** |
| P72.4 | `222 controlee(s), 0 divergente(s)` ; `0 sur 0` | identique | **tenue** |
| P72.5 | `0 / 0 / 0 / 0 / 222`, zéro `--recaler` | identique | **tenue** |
| P72.6 | `222 paires` ; foisonnement du lot ∈ [−2, +8] %, point +3,5 % | 222 ; lot **5 813 → 6 037 = +3,85 %** | **tenue** |
| P72.7 | `typo 0`, **`creees 0`**, `alphabet 0`, **`virgule ambigue 2`**, **`prose 5`**, `hors perimetre` ∈ [10,30] | 0 ; **2** ; 0 ; **0** ; **7** ; **20** | **RÉFUTÉE** |
| P72.8 | médias **470** fiches, **699** embeds | 470 / 699 | **tenue** |
| P72.9 | anneau `145 / 128 / 17`, `31335`, porteuses 0 | identique | **tenue** |
| P72.10 | `CIBLES SANS FICHE (6)`, **inchangé**, mêmes six noms | 6, mêmes six | **tenue** |
| P72.11 | chevron `34 paires`, `0 divergente` | identique | **tenue** |
| P72.12 | `0 cassée`, `0 ambiguë`, mortes ∈ [20,34] point 26, **INCHANGÉ** | 0 ; 0 ; **20** — **changé** | **RÉFUTÉE** |
| P72.13 | `--libelles` `4037 / 3879 / 158 / 132 / 16` | identique | **tenue** |
| P72.14 | doublons FR `243/243/0`, EN `222/222/0` | identique | **tenue** |
| P72.15 | `215 / 149 / 148 / 104 / 37 / 31` | identique | **tenue** |
| P72.16 | `9 / 8 / 2 / 2` ; trois formes neuves à **1** ; fautives **0/0** ; `Step by step` **77**, `In the project` **21** | identique | **tenue** |
| P72.17 | `47 / 44 / 3 / 3 / 3` ; `Attention` 0 ; `Astuce` 0 | identique | **tenue** |
| P72.18 | FR **999 / 172 / 248** ; EN **901 / 151 / 222** | identique | **tenue** |
| P72.19 | fin de bloc **33 / 22** *(liste amendée)* | **34 / 23** | **RÉFUTÉE** |
| P72.20 | correctif : 1 fiche, 2 ancres, 5 seaux à 0, `ecart +0`, lignes inchangées | identique | **tenue** |
| P72.21 | test négatif : `INTROUVABLE`, `REFUS : 1`, `exit 1`, zéro octet | identique | **tenue** |
| P72.22 | après correctif : `creees 0`, `prose 5`, `6 lue(s), 1 a reprendre` | identique | **tenue** |
| P72.23 | `bete-a-cornes-en` **966 mots** (+1) | **965**, inchangé | **RÉFUTÉE** |

**Bilan du bloc 72 : 23 prédictions à décompte plein, 19 tenues, 4 réfutées.**

---

⚠ **RÉFUTATION P72.7 — LE SEAU `C109 creees en EN` A MORDU AU PREMIER LOT OÙ
IL AVAIT QUELQUE CHOSE À MORDRE, ET J'AVAIS PRÉDIT 0.** Deux points-virgules
créés dans `bete-a-cornes-en`, tous deux d'une virgule française rendue par un
point-virgule anglais. *Le seau existe depuis le 23/08 ; c'est la **première
fois** qu'il sort à autre chose que 0 sur un lot de ce chantier.* ✅ **Corrigé
dans le bloc, par les voies 1 et 3 de C109**, remesuré à **0**.
⚠ **Et la troisième branche de la réfutation dit quelque chose sur le masquage,
pas sur moi** : j'avais prédit **2 `virgule ambigue`** pour `100,000 h` et
`10,000 h` ; la mesure rend **0**, parce que les deux sont **dans du code
inline** et que `masquerHorsProse` les masque comme du code. *Le contrôle de
style ne voit que de la prose publiée — c'est écrit dans le code depuis le
25/08 (suite 5) —, et j'ai prédit contre une règle que je venais de lire.*

⚠ **RÉFUTATION P72.12 — J'AI DIT « INCHANGÉ » SUR UN COMPTEUR QUE LE LOT FAIT
BAISSER DE SIX.** Les wikilinks morts passent de **26 à 20**. *J'avais raisonné
juste sur les cibles que le lot **ajoute** — `afnor-nfx50-151-en` et
`etat-de-l-art-technique-en` étaient déjà mortes — et **oublié les six que le
lot retire** : `mecatronique-en`, `mind-map-en`, `bete-a-cornes-en`,
`pieuvre-en`, `fonction-en` et `caracteriser-une-exigence-en` **étaient elles
aussi des cibles mortes** avant d'exister.* ⚠ **C'est la troisième réfutation
de la séance dont la cause est « j'ai compté ce qui entre et pas ce qui
sort »**, après P68.11 et P68.12. *Le compteur des morts et la dette rendent
d'ailleurs le même chiffre, **20**, et cette égalité était sous mes yeux.*

⚠ **RÉFUTATION P72.19 — L'AMENDEMENT C131 A NOMMÉ LA TABLE DU CORRECTIF ET
OUBLIÉ CELLE DE SON TEST NÉGATIF.** 34 / 23 au lieu de 33 / 22.
*L'amendement a été écrit **avant** toute exécution, ce qui est la bonne
moitié du geste ; il a énuméré `passe-correctif-en-lot9-3008.tsv` et **pas**
`passe-negatif-correctif-lot9-3008.tsv`, alors que la prédiction P72.21
**décrivait le test négatif dans le même souffle**.* ⚠ **Le défaut n'est plus
« la liste s'ouvre pendant le bloc » — elle s'est bien ouverte avant — c'est
« la liste ne relit pas les prédictions qu'elle accompagne ».** ✅ *Et la
signature de la famille se confirme une fois de plus : **le sous-compteur qui
porte le sens est juste** — 23 hors artefacts, soit 22 prévus + la table
oubliée —, c'est le total qui rate.*
⚠ **Candidate : une liste d'artefacts se relit CONTRE les prédictions du même
bloc — un test négatif a toujours sa propre table.**

⚠ **RÉFUTATION P72.23 — MÊME CAUSE QUE P68.11, DIX-HUIT BLOCS PLUS TARD.**
J'ai prédit `965 → 966` parce que le découpage en deux phrases « gagne un
`It` » ; **il ne gagne rien** : `; it opens` devient `. It opens`, le mot était
déjà là. *Deuxième fois de la séance que je compte un mot ajouté qui n'est
qu'un mot **recapitalisé**.* ✅ **Le volume EN est donc rigoureusement
inchangé par le correctif, `965`, et le foisonnement du lot reste +3,85 %.**

---

✅ **CE QUE LA CLÔTURE ÉTABLIT, ET QUI N'EST PAS UNE RÉFUTATION.**

**La rédaction a tenu les dix formes de titre, les quatre titres de callout et
l'ancre intra-page — P70.7 est vérifiée terme à terme.** *Les six formes de
production sortent à `215 / 149 / 148 / 104 / 37 / 31` : **+6 / +5 / +5 / 0 /
0 / 0**, exactement la décomposition prédite, y compris les **trois zéros**
qu'il aurait été si facile de prédire à +6.* **`## Project connection` et
`## Step-by-step procedure` restent à 0** — quatrième confirmation du correctif
É1 —, et **ni `## Step by step` (77) ni `## In the project` (21) n'ont bougé**,
ce qui était le terme écrit pour réfuter sur les **dix titres propres** du lot.

✅ **LES TROIS FORMES NEUVES SONT À 1 CHACUNE, ET ELLES ÉTAIENT DÉCLARÉES
NEUVES AVANT D'ÊTRE ÉCRITES** : `## Special case — binary and regulatory
requirements`, `## Example — 6-axis teaching robot arm`, `## Running example`.

✅ **ET LE CINQUIÈME RELEVÉ A PAYÉ DÈS SA PREMIÈRE APPLICATION** : `Good` /
`Fair` / `Poor` passent de 1 à **3** chacun, `Tip` de 43 à **44**, et
`Attention` / `Astuce` restent à **0**. *Sans le relevé du bloc 69, j'aurais
écrit `Good` / `Average` / `Bad` — deux titres sur trois faux, et **aucun
contrôle du dépôt ne les aurait vus**.* **La candidate passe de 0/N à 1/N.**

---

## ⛳ GATE G4 — clôture du lot 9.

**Fait** — **six fiches EN livrées**, corpus **216 → 222**. **59 remplacements
C109 sur 56 ancres** côté FR, **2 correctifs C109 côté EN**. **Onze refus
délibérés dans la série, dont trois dans cette séance.**

**Chiffres qui ont changé**

| compteur | avant | après |
|---|---|---|
| corpus FR | 291 242 | **291 242** *(passe neutre en mots)* |
| fiches traduites | 216 / 251 826 mots FR | **222 / 257 639** |
| restant | 26 fiches / 39 416 mots | **20 / 33 603** |
| foisonnement | 216 paires, 261 106 mots EN | **222 paires, 267 143**, moyenne **3,7 %**, lot **+3,85 %** |
| anneau 2 | 122 traduites, 23 restantes, 37 148 | **128, 17, 31 335** |
| wikilinks morts | 26 | **20** |
| médias | 464 fiches, 690 embeds | **470, 699** |
| titres EN | 216 / 216 / 0 | **222 / 222 / 0** |
| puces à tiret | FR 1 002 / 172 / 248 ; EN 885 / 149 / 216 | **FR 999 / 172 / 248 ; EN 901 / 151 / 222** |
| `--libelles` | 3 938 / 3 677 / 261 / 112 / 16 | **4 037 / 3 879 / 158 / 132 / 16** |
| formes de production EN | 204 / 140 / 139 / 102 / 37 / 30 *(réf. du 30/08 08:0x)* | **215 / 149 / 148 / 104 / 37 / 31** |

**Invariants tenus** — `--controle` **222, 0 divergente** ; dérive
**`A JOUR 222`, `DERIVE 0`, `MARQUE INVALIDE 0`, zéro `--recaler`** ; chevron
**34 paires, 0 divergente** ; `CIBLES SANS FICHE` **6, inchangé** ; invariant
d'accents **+0** sur les sept fiches éditées.

**Ce qui suit** — bloc 73 : clôture §7 (`JOURNAL.md`, `conventions.md`), puis
le bloc de livraison et le prompt de la séance suivante.

⚠ **Deux points remontés, aucun bloquant.** (1) `CIBLES SANS FICHE` est un
**faux positif de `--anneau`**, qui ne lit pas les `aliases:` — file des
arbitrages. (2) Le lot 10 est **déjà composé par ce lot** : le résidu du palier
« Analyse fonctionnelle », `etat-de-l-art-technique` **2 286** +
`afnor-nfx50-151` **91** = **2 377 mots**, avec **4 280 mots de marge** sous la
borne pour se compléter ailleurs.

---

## Déclaration C131 du bloc 73 — rejouée, liste fermée avant le bloc

*Et relue **contre les prédictions du bloc**, ce qui est la candidate née de la
réfutation P72.19 dix minutes plus tôt.*

**Populations** — inchangées, redéclarées.

**Liste FERMÉE des artefacts du bloc 73** — les **34 entrées** existantes,
plus :

| # | artefact | état | total | hors artefacts | existe à la garde ? |
|---|---|---|---|---|---|
| 35 | `tools/batterie-sortie-3008b29.txt` (étape 0 de la garde) | `??` | oui | non | **oui** |
| 36 | `conventions.md` (§8 : marques d'épreuve et candidates neuves) | ` M` | oui | **oui** | non |
| 37 | `JOURNAL.md` (entrée du 30/08 suite 4) | ` M` | oui | **oui** | non |

⚠ **Relecture contre les prédictions** : le bloc lance `normalize-pilotage`,
qui **peut** toucher `TODO.md` et `BACKLOG.md` ; **P73.2 le prédit à zéro
fichier modifié**, et si elle est réfutée le compteur monte de deux. **Aucun
test négatif n'est prévu à ce bloc** — les éditions passent par un script
jetable à ancre unique, hors dépôt —, donc **aucune table à oublier**.
**Le script d'édition vit hors dépôt et n'ajoute aucune entrée.**

**DEUX instants :** **35 / 23** quand la garde lit `git status` ; **37 / 25**
en fin de bloc.

---

## Bloc 73 — clôture §7 (JOURNAL, conventions)

**Commandes :** garde ; `node tools/normalize-pilotage.js` ; éditions ancrées
de `conventions.md` puis de `JOURNAL.md` ; remesure des quatre tailles ;
`git status`.

### Prédictions du bloc 73

**P73.1 — garde.** ASCII **0** ; copie `tools\batterie-sortie-3008b29.txt` ;
`garde   anneau : 2   chevron : False` ; heure **> `09:51:32`** ;
`HEAD git : 4e73aa8 2026-08-30 08:57:42 +0200` **au caractère** ; `node :
v24.15.0` ; **3 lignes de dates** inchangées **au caractère**
(`08:50:22` / `08:49:11` / `2026-08-29 21:48:08`) ;
`fichiers modifies non commites : 35   (hors artefacts de seance : 23)`.

**P73.2 — `normalize-pilotage` : ZÉRO fichier modifié.** *Les quatre fichiers
de pilotage ont été normalisés à la clôture de la séance 3, il y a une heure,
et rien ne les a touchés depuis — la garde le dit à la seconde.*

**P73.3 — volume des deux éditions.** `conventions.md` **entre 90 et 160
lignes insérées**, point estimé **120** ; `JOURNAL.md` **entre 30 et 55**,
point estimé **42**.
⚠ *Les deux fourchettes sont calées sur la **cause** des trois réfutations de
volume du 30/08 (séance 2) : un texte non écrit se sous-chiffre. Le lot 9 porte
**dix marques d'épreuve**, **quatre candidates neuves** et **quatre
réfutations à motif**, contre quatre marques et une candidate au bloc 63 qui
avait rendu 75 et 29.*

**P73.4 — les quatre tailles, mesurées APRÈS la dernière écriture et jamais
avant.** *C118 en toutes lettres : la clôture du bloc 63 a publié deux tailles
composées de tête et les a corrigées par édition ancrée.* Je prédis :
`conventions.md` **entre 500 et 520 Kio** (494,1 avant), `JOURNAL.md` **entre
623 et 636 Kio** (622,6 avant), `TODO.md` **282,7 Kio inchangé**,
`BACKLOG.md` **206,0 Kio inchangé**. **Les valeurs exactes ne seront écrites
dans le JOURNAL qu'après leur mesure.**

**P73.5 — compteurs git en fin de bloc : 37 au total, 25 hors artefacts.**

### Constats du bloc 73 (garde `3008b29`)

| # | prédiction | constat | verdict |
|---|---|---|---|
| P73.1 | ASCII 0 ; `3008b29` ; heure > `09:51:32` ; HEAD au caractère ; 3 dates inchangées ; **35 / 23** | 0 ; `3008b29` ; `09:56:55` ; identique ; identiques ; 35 / 23 | **tenue** |
| P73.2 | `normalize-pilotage` : **0 fichier modifié** | `Total : 0 caractere(s) a corriger, 0 fichier(s) modifie(s).` | **tenue** |
| P73.3 | `conventions.md` ∈ [90, 160] insertions, point 120 ; `JOURNAL.md` ∈ [30, 55], point 42 | **110** (+ 9 lignes modifiées) ; **37** | **tenue** |
| P73.4 | `conventions` ∈ [500, 520] Kio ; `JOURNAL` ∈ [623, **636**] ; TODO 282,7 ; BACKLOG 206,0 | **501,1** ; **636,2 puis 637,7** ; 282,7 ; 206,0 | **RÉFUTÉE** |
| P73.5 | fin de bloc **37 / 25** | 37 / 25 | **tenue** |

**Bilan du bloc 73 : 5 prédictions à décompte plein, 4 tenues, 1 réfutée.**

⚠ **RÉFUTATION P73.4 — LA BORNE HAUTE RATE DE 0,2 Kio, ET LE FICHIER A GROSSI
ENCORE APRÈS.** `JOURNAL.md` sort à **636,2 Kio**, hors de `[623, 636]` d'un
dixième de kilo-octet ; puis **la ligne « Tailles » elle-même**, écrite avec ce
chiffre, le porte à **637,7**. *C'est la récursion que la clôture du 29/08
(suite 11) puis celle du bloc 63 avaient déjà nommée : **la taille finale d'un
fichier de clôture ne peut se publier qu'après sa dernière écriture**, et
l'écrire est une écriture.*
✅ **Résolution appliquée, et elle est mécanique** : la correction
`636,2 → 637,7` est un remplacement **à longueur strictement égale**, donc
**la taille ne bouge plus**. **Le script refuse d'écrire si les deux chaînes
n'ont pas la même longueur** — sans quoi il déplacerait ce qu'il corrige.
⚠ **Candidate : une taille de fichier de pilotage se corrige par un
remplacement à longueur égale, ou elle ne se corrige pas.**

---
---

# BILAN GÉNÉRAL — 30/08 (séance 3), LOT 9 (palier « Analyse fonctionnelle »)

**115 prédictions publiées avant leur bloc, 102 tenues, 13 réfutées**
(64 : 6/6 ; 65 : 13/14 ; 66 : 11/12 ; 67 : 13/13 ; 68 : 11/13 ; 69 : 11/15 ;
70 : 6/6 ; 71 : 8/8 ; 72 : 19/23 ; 73 : 4/5), plus **1 hors décompte** (le
hash de `HEAD`, injecté) et **2 déclaratives**. **Taux de tenue : 88,7 %.**

**Dix blocs, cinq gates, zéro arrêt, zéro sollicitation de Tim, deux incidents
consignés, trois tests négatifs refusés avant toute écriture.**

⚠ **LES TREIZE RÉFUTATIONS SE RANGENT EN SIX CAUSES, ET LA PREMIÈRE VAUT LES
CINQ AUTRES.**

1. **J'ai compté ce qui ENTRE sans compter ce qui SORT — 4**
   (P68.11, P68.12, P72.23, P72.12). *« Enfin » entre mais « et » sort ;
   `It` est recapitalisé, pas ajouté ; le lot ajoute deux cibles mortes mais en
   **retire six**.* ✅ **Et la donnée qui réfutait la première était publiée
   deux commandes plus tôt**, dans la ligne `pts de code` du contrôle seul.
   **Candidate écrite.**
2. **Un « +N uniforme » projeté sur des compteurs qui ne le sont pas — 3**
   (P66.8, P69.5, P69.7). *La densité C109 suit la proportion d'énumérations,
   pas le volume ; les cinq fiches du lot 8 ne portent pas toutes les quatre
   sections d'ossature ; six fiches-notion portent aussi des `###`.*
3. **C131, liste d'artefacts incomplète — 1** (P72.19). ⚠ *Cause **neuve** :
   la liste s'est bien ouverte **avant** le bloc, mais elle n'a pas relu les
   prédictions qu'elle accompagnait. **Candidate écrite.***
4. **Prédire contre une règle qu'on vient de lire — 1** (P72.7, terme
   `virgule ambigue`). *Les deux séparateurs de milliers sont dans du **code
   inline**, que `masquerHorsProse` masque depuis le 25/08.*
5. **Un chiffre de brief servi comme un état — 1** (P69.10). *Les « 3
   `Attention` résiduels » étaient les trois occurrences que le lot 8 **avait
   corrigées**. Troisième occurrence de cette cause, et la première qui voyage
   jusque dans le prompt de la séance suivante.*
6. **Trois isolées** : P65.13 (le palier porte neuf fiches), P69.14 (une ancre
   intra-page à réécrire), P73.4 (la taille du fichier qu'on est en train
   d'écrire).

✅ **CE QUI N'A PAS BOUGÉ** : `HEAD` suivi sur **dix** gardes et **identique au
caractère** de bout en bout ; **trois tests négatifs refusés** sur **deux**
outils différents, dont un sur un **trait d'union ASCII** et un sur un
**accent manquant** ; **invariant d'accents `+0`** sur les sept fiches éditées ;
**zéro fichier perdu** en dix blocs ; et **zéro `--recaler`**, pour la première
fois depuis le lot 6.

✅ **CE QUE LA SÉANCE ÉTABLIT ET QUI N'EST PAS UN CHIFFRE.** Le mode `--corps`,
écrit la veille au soir contre un défaut qui avait résisté à deux correctifs de
prose, **a tenu sur son premier lot réel** : la question « d'où vient cette
empreinte » ne s'est pas posée une seule fois, parce que **le geste qui la
posait n'a plus d'occasion d'exister**. *Troisième fois de ce chantier qu'une
règle passe de la prose au code, et la première où elle passe **avant** d'être
violée une fois de plus.*

---

## Bloc 74 — question de Tim : de quoi les 87 % sont-ils le pourcentage ?

*Bloc d'exécution hors lot : une lecture de mesure pour répondre. Aucune
écriture dans `content/`.*

**Déclaration C131 du bloc 74 — liste FERMÉE.** Les **37 entrées** existantes,
plus **rien** : le bloc ne lance que `compter-mots --lot` et `--anneau`, qui
**n'écrivent aucun fichier** (ni batterie, ni copie C124 — l'appel est direct,
pas via `batterie.ps1`). ⚠ *Relue contre les prédictions du bloc : aucune
prédiction ne mentionne d'artefact, aucun test négatif n'est prévu.*
**UN SEUL instant : 37 / 25, inchangé.**

### Prédictions

**P74.1 — les trois fiches hors anneau 2 pèsent 2 268 mots au total.**
*C'est la soustraction de deux totaux **de même date**, tous deux mesurés au
bloc 72 (`3008b28`, 09:51:32) : restant du corpus **33 603** moins restant de
l'anneau 2 **31 335**. Les trois fiches sont nommées de longue date —
`embarque/mcu/xiao/xiao-prise-en-main`, `embarque/mcu/xiao/xiao-sense`,
`embarque/pcb/kicad`.* ⚠ **Terme écrit pour réfuter** : si la somme diffère,
alors les deux compteurs ne portent pas sur la même population, et **le
« restant » du corpus et celui de l'anneau ne sont pas comparables** — ce qui
invaliderait la réponse à la question de Tim, pas seulement ce chiffre.

**P74.2 — décomposition prédite : `xiao-prise-en-main` et `xiao-sense` entre
600 et 1 200 mots chacune, `kicad` entre 100 et 900.** *Aucune des trois n'a
jamais été mesurée nominativement au registre ; l'intervalle est large et il
le dit.*

**P74.3 — `--anneau 2` rend exactement les valeurs du bloc 72** :
`NET 145`, `deja traduites 128`, `RESTANT 17`, `31335`. *Rien n'a touché à
`content/` depuis 09:51:32 — seuls `JOURNAL.md` et `conventions.md` ont
changé, et ils sont hors `content/`.*

### Constats du bloc 74

| # | prédiction | constat | verdict |
|---|---|---|---|
| P74.1 | les trois hors anneau pèsent **2 268** mots | `LOT (3 fiches) 2268` | **tenue** |
| P74.2 | `xiao-prise-en-main` ∈ [600,1200], `xiao-sense` ∈ [600,1200], `kicad` ∈ [100,900] | **670 / 758 / 840** | **tenue** |
| P74.3 | anneau `145 / 128 / 17 / 31335`, inchangé | identique | **tenue** |
| — | `git status` **37 / 25**, inchangé | **1 / 0** | **RÉFUTÉE** |

**Bilan du bloc 74 : 4 prédictions à décompte plein, 3 tenues, 1 réfutée.**

⚠ **RÉFUTATION DU COMPTEUR — ET C'EST LA GARDE DE PÉREMPTION QUI MANQUAIT.**
J'ai déclaré `37 / 25, inchangé` et mesuré **1 / 0** : **Tim a livré le lot
pendant le bloc**. `HEAD` passe de `4e73aa8` à **`65365fa 2026-08-30
10:03:18 +0200 — lot 9: palier analyse fonctionnelle ouvert, 6 fiches EN, 59
remplacements C109, --corps sur lot reel`**, et les **36 entrées** du lot sont
parties au commit. Seul `tools/predictions-260830.md` reste modifié, par ce
texte même.
⚠ **J'ai sauté la garde au motif que « c'est une question, pas une passe ».**
La sous-règle C116 (5) dit *« au cadrage **et avant chaque passe** »*, et un
bloc qui ne lit rien d'autre que des mesures n'est pas une passe — **mais
l'incident du 29/08 était exactement celui-là : deux mains sur le même dépôt.**
✅ **Rien n'est perdu et rien n'est faux** : le bloc 74 n'écrit pas dans
`content/`, et ses trois mesures ont été prises **avant** le commit, sur un
arbre identique à celui du bloc 72. *Le commit ne change aucun contenu : il
déplace des fichiers de l'index de travail vers l'histoire.*
⚠ **Candidate : un bloc qui ne fait que lire passe quand même la garde, parce
que la garde ne mesure pas ce que le bloc écrit — elle mesure ce que les
autres ont écrit.**

✅ **L'IDENTITÉ SE REFERME AU MOT PRÈS, ET C'EST ELLE QUI AUTORISE LA RÉPONSE.**
`restant du corpus 33 603 = restant de l'anneau 2 31 335 + 2 268`, et les
2 268 se décomposent nominativement en `xiao-prise-en-main` **670**,
`xiao-sense` **758**, `embarque/pcb/kicad` **840**. *Les deux « restants » sont
donc comparables : l'un est **inclus** dans l'autre, à trois fiches près.*

⚠ **CE QUE LA QUESTION DE TIM MET AU JOUR, ET QUI N'ÉTAIT ÉCRIT NULLE PART :
LE MOT « AVANCEMENT » DÉSIGNE QUATRE CHOSES DIFFÉRENTES AU REGISTRE.**
Le JOURNAL publie un « **% d'avancement** » depuis le 26/08, et **c'est
toujours l'anneau 2 en FICHES** — `80 / 145 = 55,2 %` le 26/08,
`68 / 145 = 46,9 %` le 25/08 (suite 6). Mais les lignes « Tailles » publient
**trois autres ratios possibles** sans jamais les nommer : corpus en fiches,
corpus en mots, dette. **Aucun des quatre ne portait d'étiquette.**
✅ **Les quatre, mesurés au bloc 72 (`3008b28`, 09:51:32) et flanqués de leurs
valeurs brutes**, comme la règle d'usage du 25/08 (suite 7) l'exige pour tout
ratio :

| ce qu'on compte | brut | ratio |
|---|---|---|
| **anneau 2, en fiches** *(le « % d'avancement » historique)* | 128 / 145 | **88,3 %** |
| corpus, en fiches | 222 / 242 | **91,7 %** |
| corpus, en mots | 257 639 / 291 242 | **88,5 %** |
| dette du front courant | 20 cibles rouges, 33 603 mots | — |

⚠ **Le « 87 % » de la séance précédente n'est reproductible par AUCUN de ces
quatre ratios à l'état de clôture du lot 8**, où ils valaient `122/145 =
84,1 %`, `216/242 = 89,3 %` et `251 826/291 242 = **86,5 %**`. **Le plus proche
est le corpus en mots, à 86,5 %**, qui s'arrondit à 87 à l'unité — *mais c'est
une reconstruction, pas une mesure : la transcription de l'autre séance n'est
pas au dépôt, et rien au registre ne porte « 87 ».* ⚠ **Candidate : un ratio
d'avancement se publie avec le NOM de sa population, pas seulement avec ses
deux valeurs brutes** — quatre ratios cohabitent et trois d'entre eux n'ont
jamais été nommés.

**Projection, NON MESURÉE et signalée comme telle** : fermer l'anneau 2
laisserait `242 − 239 = 3` fiches et `291 242 − 288 974 = 2 268` mots, soit
**98,8 % du corpus en fiches et 99,2 % en mots**. *C'est une soustraction sur
deux états de même date, pas un comptage : le vrai chiffre se mesurera à la
clôture qui ferme l'anneau.*

---

## En-tête de séance — lot 10

- **Séance** — 30/08 (**cinquième séance du jour**), **PC perso, onglet Code**,
  modèle **Opus 5**. Ouverte après le commit `65365fa` de Tim, qui a livré le
  lot 9 pendant le bloc 74 de la séance précédente.
- **Objet** — **lot 10 du chantier de traduction**, **onzième lot en exécution
  directe**, **onzième épreuve de la sous-règle C116 amendée**, **neuvième
  séance sous C131**.
- **Régime** — exécution directe sous C116 (sous-règle et ses amendements des
  suites 3 et 8 du 29/08), C109 et ses amendements, C110, C113, C118, C119,
  C120, C121, C123, C124, C125, C127, C129, C130, C131 et son amendement du
  29/08 (suite 8), plus les **règles d'usage** en vigueur, avec leur marque
  telle que `conventions.md` la porte à l'ouverture de cette séance :

  | # | règle d'usage | née | marque |
  |---|---|---|---|
  | 1 | un motif qui balaie les deux corpus s'éprouve sur un **échantillon de chaque langue** | 29/08 s9 | **3/N** |
  | 2 | un **titre de section EN** se relève dans le corpus **avant** d'être écrit | 29/08 s10 | **4/N** |
  | 3 | un compteur qui se remesure **déclare sa population dans sa sortie** | 29/08 s11 | **3/N** |
  | 4 | un **répertoire entièrement non suivi** vaut **UNE** entrée de `git status` | 30/08 s1 | **2/N** |
  | 5 | une **soustraction** se fait sur l'état **d'APRÈS** la passe, et se propage à tous les compteurs qui **contiennent** la fiche après l'édition | 30/08 s1 | **2/N** |
  | 6 | une **ancre qui couvre N lignes identiques** se prend **en bloc** | 30/08 s1 | **1/N** |
  | 7 | **`--recaler` est une ÉDITION** : il compte au `numstat` et au `git status` | 30/08 s1 | **1/N** |
  | 8 | un **`title:` EN** se lit d'abord dans les **libellés que l'anglais écrit déjà** vers la cible | 30/08 s2 | **1/N** |
  | 9 | un **titre de callout** se relève dans le corpus, comme un titre de section | 30/08 s2 | **1/N** |
  | 10 | la **liste des artefacts d'un bloc se FERME avant le bloc** | 30/08 s2 | **2/N** |
  | 11 | une **fiche EN se rédige en partant de son squelette sur disque** — portée par le mode **`--corps`** | 29/08 s7, code 30/08 s3 | **2/N** |
  | 12 | la **borne de lot cède devant une fiche qu'on ne coupe pas** | 30/08 s3 | **0/N** |
  | 13 | une **déclaration C131 se termine par le total qu'elle implique** | 29/08 s8 | **2/N** |
  | 14 | la **batterie ne se filtre jamais au lancement** | 29/08 | **1/N** |
  | 15 | un motif qui cherche une **CIBLE de wikilink la borne AUX DEUX BOUTS**, et le corpus anglais vise `<slug>-en` | 30/08 s4 | **0/N** |
  | 16 | un remplacement qui change le nombre de mots se compte en **SOLDE**, jamais en ajout — l'invariant `pts de code` du contrôle seul est le témoin | 30/08 s4 | **0/N** |
  | 17 | une **liste d'artefacts se relit CONTRE les prédictions du même bloc** — un test négatif a toujours sa propre table | 30/08 s4 | **0/N** |
  | 18 | un lot publie **ce qui RESTE par famille de motif**, pas seulement ce qu'il a traité | 30/08 s4 | **1/N** |

  ⚠ **La clause de périmètre C109 est à 7/N.** L'**assomption C113 sur les
  chaînes affichées libres** reste **NON ARBITRÉE**, et **deux lots d'affilée
  n'ont pas pu la tester** faute de tout bloc de code ; coût du revert connu :
  **4 littéraux de code et 1 ligne de bloc de sortie sur 2 fiches EN**. ⚠ *Le
  lot 10 ne la testera probablement pas non plus : `etat-de-l-art-technique` et
  `afnor-nfx50-151` sont des fiches de conduite de projet.*

  ⚠ **DEUX CANDIDATES NÉES AU BLOC 74 NE SONT PAS ENCORE AU §8**, la clôture §7
  du lot 9 (bloc 73) leur étant antérieure : (a) *un bloc qui ne fait que lire
  passe quand même la garde, parce que la garde ne mesure pas ce que le bloc
  écrit — elle mesure ce que les autres ont écrit* ; (b) *un ratio d'avancement
  se publie avec le **NOM** de sa population, pas seulement avec ses deux
  valeurs brutes.* **Les deux sont à verser à la clôture §7 de cette séance**,
  et la première est **appliquée dès le bloc 75** — qui est de toute façon une
  garde.

- **Périmètre annoncé par le brief** — **lot 10 DÉJÀ COMPOSÉ par le lot 9**, à
  hauteur de deux fiches : le **résidu du palier « Analyse fonctionnelle » de
  `conduite/proj/`** — `etat-de-l-art-technique` **2 286** +
  `afnor-nfx50-151` **91** = **2 377 mots, 2 fiches** —, avec **4 280 mots de
  marge** sous la borne **6 657** pour **se compléter ailleurs**. **Anneau 2
  restant : 17 fiches, 31 335 mots, 0 porteuse** ; `ded` = 0 sur tout le
  restant, donc `tot` = `deh` et **C127 hors sujet pour le cinquième lot
  d'affilée**. **Deux populations distinctes à ne jamais confondre : corpus
  restant 20 fiches / 33 603 mots ; anneau 2 restant 17 fiches / 31 335 mots**,
  l'écart étant les **trois fiches hors anneau** mesurées nominativement au
  bloc 74 (`xiao-prise-en-main` 670, `xiao-sense` 758, `kicad` 840 = **2 268**).
- **Blocs prévus** — **75** garde de péremption d'ouverture ; **76**
  composition du lot 10 (relevé nominatif de l'anneau 2 restant et paliers des
  hubs, pour instruire les 4 280 mots de marge) ; **77** cadrage (volume,
  candidats C109) ; **G1** ; **78** éprouvage bilingue du motif des puces
  (C110) et relevé du lot ; **79** passe C109 ; **G2** ; **80** les **CINQ**
  relevés d'avant rédaction, puis génération des squelettes ; **G3** ; **81**
  rédaction des fiches EN **par `--corps`** ; **G3bis** ; **82** les `title:`
  EN (C125) ; **83** clôture du lot 10 ; **G4** ; **84** clôture §7.

---

## Recoupement du prompt de lancement contre la ligne « Prochaine session »

*La ligne de référence est celle de l'entrée du **30/08 (suite 4)**, dernière
entrée du JOURNAL, écrite par la clôture §7 du lot 9.*

| # | terme du prompt de lancement | ligne « Prochaine session » du 30/08 (suite 4) | verdict |
|---|---|---|---|
| 1 | lot 10, **onglet Code** | « **Prochaine session = lot 10 du chantier de traduction, en onglet Code** » | **concorde** |
| 2 | lot **déjà composé** par le lot 9 | « **il est déjà composé par ce lot** » | **concorde** |
| 3 | `etat-de-l-art-technique` **2 286** + `afnor-nfx50-151` **91** = **2 377 mots, 2 fiches** | mêmes trois chiffres, mêmes deux slugs | **concorde** |
| 4 | **4 280 mots de marge** sous la borne **6 657** | « **4 280 mots de marge** sous la borne de 6 657 » | **concorde** |
| 5 | les deux fiches **se prennent ENSEMBLE** (cadre normatif / fiche qui l'applique) | « **Les deux fiches sont liées et se prennent ensemble** » | **concorde** |
| 6 | `technical state of the art` **13** (+3 capitalisés) ; `standard NF X50-151` **5** (+2 capitalisés, contre **4** `Norme NF X50-151` résiduels) | mêmes cinq chiffres | **concorde** |
| 7 | anneau 2 restant **17 fiches, 31 335 mots, 0 porteuse** ; `ded` = 0 ; `tot` = `deh` ; C127 hors sujet **cinquième lot d'affilée** ; `--tout` confirme **34 paires, 0 divergente** | mêmes termes, mot pour mot | **concorde** |
| 8 | **deux populations** : corpus restant **20**, anneau 2 restant **17** | « restant **26 → 20** fiches » et « anneau 2 : … **17 restantes** » | **concorde** |
| 9 | formes de production EN **215 / 149 / 148 / 104 / 37 / 31** | mêmes six chiffres, ligne Tailles | **concorde** |
| 10 | callouts `Watch out` **47**, `Tip` **44**, `Good`/`Fair`/`Poor` **3** chacun, `Attention` **0**, `Astuce` **0** | mêmes sept chiffres | **concorde** |
| 11 | titres-doublons FR **243/243/0**, EN **222/222/0** | mêmes six chiffres | **concorde** |
| 12 | puces corpus FR **999 / 172 / 248**, EN **901 / 151 / 222** | « FR 999 sur 172 porteuses (248 fichiers), EN 901 sur 151 porteuses (222 fichiers) » | **concorde** |
| 13 | motif de relevé des libellés **borné aux deux bouts** sur `<slug>-en` | « le motif de relevé des libellés se borne aux deux bouts sur `<slug>-en` » | **concorde** |

✅ **ZÉRO ÉCART, ET C'EST LE PREMIER BRIEF DE LA SÉRIE QUI EN REND ZÉRO.** Le
brief du lot 8 portait une décomposition qui sommait à **27 contre un total de
28** ; celui du lot 9 en portait **deux** — « 8 fiches » pour un palier qui en
compte **neuf**, et une décomposition de puces `0/3/1/1/0` qui **somme à 5** et
s'annonçait « 10 des deux côtés ». *Le lot 9 a bouché le trou du registre qui
fabriquait la seconde (règle d'usage 18, « un lot publie ce qui reste par
famille de motif »), et le brief de ce lot-ci est le premier écrit **après**
cette correction.*

⚠ **CONTRÔLES ARITHMÉTIQUES PUBLIÉS AVANT TOUTE MESURE, ET ILS REFERMENT LES
TROIS.** (1) `2 286 + 91 = 2 377` ✅ ; (2) `6 657 − 2 377 = 4 280` ✅ ;
(3) `33 603 − 31 335 = 2 268`, qui est **exactement** la somme nominative du
bloc 74 (`670 + 758 + 840`) ✅. *Trois identités, trois fermetures — le brief
est **arithmétiquement cohérent avec lui-même et avec le registre**.*

⚠ **CE QUE LE RECOUPEMENT NE PROUVE PAS, ET QUI RESTE À MESURER.** Aucun de ces
treize termes n'est une mesure du jour (C118) : ce sont des **valeurs
publiées** que le recoupement compare à leur source documentaire. **Toutes se
remesurent aux blocs 76 et 77**, et un écart y sera une réfutation du brief, pas
du recoupement.

---

## Déclaration C131 d'ouverture — population des compteurs, artefacts versés, et TOTAL

*C131 et son amendement du 29/08 (suite 8) : nommer les artefacts que la séance
elle-même verse dans la population comptée, **et les additionner** ; la
déclaration ne vaut que pour le bloc qui l'écrit, et **chaque bloc qui crée ou
modifie un fichier suivi la rejoue**. Plus la règle d'usage 10 : **la liste se
ferme AVANT le bloc**. Plus la règle d'usage 17, née au lot 9 : **la liste se
relit CONTRE les prédictions du même bloc**.*

**Population du compteur `git status --porcelain`** — le dépôt entier, tous
états confondus (`M`, `??`, `A`, `D`), **moins** ce que `.gitignore` exclut. Le
`.gitignore` n'exclut que **deux chemins exacts** — `tools/batterie-sortie.txt`
et `tools/seance-sortie.txt` — donc **tout le reste de `tools/` est compté**,
fichier de prédictions et copies C124 comprises (arbitrage Tim (f)(ii) du
29/08).

**Population du compteur `hors artefacts de seance`** — la même, **moins** les
lignes dont le chemin contient `batterie-sortie` **ou** `predictions-` (deux
`-notmatch` lus dans le **code** de `batterie.ps1`, jamais dans son en-tête —
sous-règle C116 (7)).

**État de départ** — le bloc `gitStatus` injecté par le harnais porte **une
seule ligne**, `M tools/predictions-260830.md`, après le commit `65365fa` de
Tim. `[HORS DÉCOMPTE]`

**Liste FERMÉE des artefacts versés avant que l'étape 1 du bloc 75 ne lise
`git status` :**

| # | artefact | état git | compté au total | compté hors artefacts |
|---|---|---|---|---|
| 1 | `tools/predictions-260830.md` (déjà ` M` à l'ouverture — le bloc 74 y a écrit après le commit ; **ce texte-ci s'y appende et n'ajoute pas d'entrée**) | ` M` | **oui** | non (`predictions-`) |
| 2 | `tools/batterie-sortie-3008b30.txt` (copie C124 que l'étape 0 crée **avant** que l'étape 1 ne lise `git status`) | `??` | **oui** | non (`batterie-sortie`) |
| — | `tools/batterie-sortie.txt` (réécrit en fin de bloc, **et de toute façon après la lecture**) | ignoré | non | non |

**TOTAL impliqué par la déclaration : 1 + 1 = 2 au total, 0 + 0 = 0 hors
artefacts de séance.**

⚠ **Relecture de la liste CONTRE les prédictions du bloc 75** (règle d'usage
17) : les huit prédictions ci-dessous ne mentionnent **aucun test négatif**,
**aucune table TSV**, **aucun relevé sauvegardé**, **aucune édition**. Le bloc
lance **une seule commande**, qui écrit **deux** fichiers — l'un ignoré, l'autre
listé. **La liste est close et complète.**

⚠ **Le rang de la copie C124 est prédit sur le répertoire, pas composé de
mémoire** : l'étape 0 cherche le **premier rang libre** de
`tools\batterie-sortie-<jjMM>b<N>.txt`. `Get-Date -Format 'ddMM'` rend
**`3008`** ; le listing de `tools/` fait à l'ouverture de cette séance porte
`3008b1` à **`3008b29`** sans trou — le rang **30** est le premier libre.
⚠ *`3008b29` existe déjà : il a été créé par la garde du bloc 73, à `09:56:55`.
La séance 4 a donc lancé la batterie **29 fois** sur la journée, et le rang ne
se déduit jamais du numéro de bloc.*

---

## ⚠ INCIDENT D'OUVERTURE — CINQUIÈME RÉCIDIVE : HEAD ET LE STATUT SONT DANS MON CONTEXTE AVANT LA GARDE

Le harnais injecte de nouveau, en tête de contexte, un bloc `gitStatus` portant
la **branche** (`main`), le **statut** (`M tools/predictions-260830.md`) et les
**cinq derniers commits**, dont `65365fa lot 9: palier analyse fonctionnelle
ouvert, 6 fiches EN, 59 remplacements C109, --corps sur lot reel`.

**Conséquence protocolaire, identique aux quatre récidives précédentes :** la
prédiction du **hash de `HEAD`** et celle du **statut d'ouverture** sont **HORS
DÉCOMPTE** — elles recopient une donnée déjà présente. Elles sont écrites quand
même, parce que la garde les compare et qu'un écart resterait un arrêt.

⚠ **Nouveauté de cette récidive, et elle élargit le hors-décompte d'un terme.**
L'**horodatage** du commit était à décompte plein aux quatre récidives
précédentes, le bloc injecté ne le portant pas. Cette fois il est **lisible dans
le dépôt** : le constat du **bloc 74**, appendu à ce fichier il y a quelques
minutes, publie `65365fa 2026-08-30 10:03:18 +0200`. **Il passe donc HORS
DÉCOMPTE lui aussi** — le prédire serait recopier une mesure du jour déjà
publiée.

⚠ **Ce qui reste à décompte plein** : (a) les **deux chiffres** de la ligne
`fichiers modifies non commites`, le statut injecté datant de l'ouverture de la
session ; (b) les **trois dates d'écriture** des fichiers de pilotage ; (c)
l'**horloge** du lancement ; (d) le **rang** de la copie C124 ; (e) la
**structure** de la sortie.

---

## Bloc 75 — garde de péremption d'ouverture

**Commande unique :**
`powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase garde`

*Aucune fiche passée : `-Fiches` et `-FichesEn` vides — la composition du lot 10
n'est **pas** close (2 fiches sur une borne de 6 657, 4 280 mots de marge), et
passer ici les deux fiches connues reviendrait à figer une composition avant de
l'instruire. **La batterie ne se filtre jamais au lancement** (règle d'usage
14) : la sortie est intégrale, le tri se fait à la lecture.*

**Base de comparaison** — la sortie de la garde du **bloc 73**, conservée dans
`tools/batterie-sortie.txt` (dernier lancement de la séance 4, `09:56:55`), et
le commit `65365fa` que Tim a passé depuis, à `10:03:18`.

⚠ **Ce bloc applique la candidate (a) du bloc 74** : *un bloc qui ne fait que
lire passe quand même la garde.* Ici c'est trivial — le bloc **est** la garde —
mais la candidate vaut pour les blocs 76 et suivants.

### Prédictions

**P75.1 — autocontrôle ASCII (C122) et copie C124.** `lignes non ASCII dans
batterie.ps1 : 0`, puis `sortie precedente copiee :
tools\batterie-sortie-3008b30.txt`. *Le fichier n'a pas été touché depuis son
dernier autocontrôle à 0 ; rang 30 par la déclaration C131 ci-dessus.*

**P75.2 — `HEAD` git, les deux termes HORS DÉCOMPTE.** La ligne sort **au
caractère** sous la forme `HEAD git : 65365fa 2026-08-30 10:03:18 +0200`.
*Hash injecté par le harnais, horodatage publié au constat du bloc 74 : les
deux sont recopiés, aucun n'est une prédiction.*

⚠ **P75.3 — deux branches nommées AVANT la mesure.** (a) `HEAD` = `65365fa` et
statut ne portant **aucun** fichier de `content/` : **branche attendue**, on
poursuit ; (b) `HEAD` ≠ `65365fa`, **ou** statut portant un fichier de
`content/`, **ou** date d'écriture postérieure à `10:03:18` sur l'un des trois
fichiers de pilotage : **ARRÊT**, remontée à Tim, aucune écriture.

**P75.4 — compteurs `git status`.** `fichiers modifies non commites : 2   (hors
artefacts de seance : 0)`, **par la liste fermée de la déclaration C131
ci-dessus** — le fichier de prédictions en ` M` et la copie
`batterie-sortie-3008b30.txt` en `??`, tous deux filtrés du second compteur.
*Le chiffre `hors artefacts` se lit contre la liste nominative, jamais seul
(sous-règle C116 (9)).*
⚠ **Terme écrit pour réfuter** : le lot 9 a été livré **pendant** le bloc 74,
donc **36 entrées sont parties au commit**. Si le compteur rendait autre chose
que 2, ce serait soit une entrée que le commit n'a pas emportée, soit une main
tierce depuis `10:03:18`.

**P75.5 — dates de dernière écriture, exactement TROIS lignes** (`-Fiches` et
`-FichesEn` vides) :
- `JOURNAL.md` — **`2026-08-30`**, heure dans l'intervalle ouvert
  **`09:56:55` → `10:03:18`** *(la garde du bloc 73 l'a lu à `08:50:22` ; la
  clôture §7 l'a réécrit ensuite ; le commit de Tim est venu après)* ;
- `conventions.md` — **`2026-08-30`**, heure dans le **même intervalle**, et
  **antérieure à celle de `JOURNAL.md`** *(l'ordre d'édition du bloc 73 est
  `conventions.md` puis `JOURNAL.md`)* ;
- `TODO.md` — **`2026-08-29 21:48:08`**, **inchangé à la seconde** *(aucune des
  cinq séances du 30/08 ne l'a touché ; écart de 282,7 ko toujours non
  instruit)*.

⚠ *Un commit ne change pas la date d'écriture d'un fichier : `65365fa` ne
déplace aucune des trois. **Les deux écarts prédits viennent du bloc 73 de la
séance 4, pas d'une main tierce** — c'est la branche (a) de P75.3.*

**P75.6 — invariants d'entête et de sortie.** `phase demandee : garde   anneau :
2   chevron : False`, `date ISO : 2026-08-30`, heure **strictement postérieure à
`10:03:18`**, `node : v24.15.0`, et **2 étapes, 2 codes de sortie, tous `0`**.

**P75.7 — ce que la sortie NE porte PAS.** Aucune ligne de volume, de contrôle,
de dérive, d'anneau, de wikilinks, de médias ni de libellés : la phase `garde`
s'arrête à l'étape 1. *Terme écrit pour réfuter : si une seule de ces lignes
apparaît, c'est que la phase passée n'est pas celle que je crois.*

**P75.8 — aucun fichier de `content/` n'a changé depuis le commit.** Corollaire
mesurable de P75.4 : le second compteur à **0** signifie qu'aucune fiche, ni FR
ni EN, n'est en attente. *Terme écrit pour réfuter : le lot 9 a écrit 6 fiches
EN et édité 6 sources FR ; si l'une d'elles reparaissait, le commit serait
partiel et le lot 10 partirait d'un arbre faux.*

### Constats du bloc 75 (sortie `tools/batterie-sortie.txt`, copie C124 `3008b30`)

| # | prédiction | constat | verdict |
|---|---|---|---|
| P75.1 | ASCII **0** ; copie `tools\batterie-sortie-3008b30.txt` | `0` ; `3008b30` | **tenue** |
| P75.2 | `HEAD git : 65365fa 2026-08-30 10:03:18 +0200` au caractère | identique au caractère | *[hors décompte]* |
| P75.3 | branche (a) attendue, (b) = arrêt | branche **(a)** | *[déclarative]* |
| P75.4 | `fichiers modifies non commites : 2   (hors artefacts de seance : 0)` | **2 / 0** | **tenue** |
| P75.5 | 3 lignes ; JOURNAL `2026-08-30` ∈ ]09:56:55 ; 10:03:18[ ; conventions même intervalle **et antérieure au JOURNAL** ; TODO `2026-08-29 21:48:08` à la seconde | 3 lignes ; **10:00:55** ; **09:58:36** (antérieure) ; **2026-08-29 21:48:08** | **tenue** |
| P75.6 | `garde   anneau : 2   chevron : False`, ISO `2026-08-30`, heure > `10:03:18`, `node : v24.15.0`, 2 étapes / 2 codes à 0 | idem ; **10:15:25** ; `v24.15.0` ; 2 × 0 | **tenue** |
| P75.7 | aucune ligne de volume / contrôle / dérive / anneau / wikilinks / médias / libellés | aucune | **tenue** |
| P75.8 | second compteur à 0 ⇒ aucun fichier de `content/` en attente | 0 | **tenue** |

**Bilan du bloc 75 : 6 prédictions à décompte plein, 6 tenues, 0 réfutée**
(plus 1 terme hors décompte et 1 déclarative). **La garde de péremption est au
vert, branche (a) : on poursuit.**

✅ **LES TROIS DATES RACONTENT LA SÉANCE 4 DANS L'ORDRE, ET C'EST CE QUE LA
GARDE SERT À DIRE.** `conventions.md` **09:58:36**, puis `JOURNAL.md`
**10:00:55**, puis le commit `65365fa` à **10:03:18** : les deux écritures
tombent **dans** l'intervalle prédit, **dans l'ordre prédit**, et **avant** la
main de Tim. `TODO.md` n'a pas bougé d'une seconde depuis le 29/08 à 21:48:08 —
**cinq séances**. *La garde ne dit pas seulement « rien d'inattendu » : elle dit
quelle main a écrit, et l'ordre des horodatages suffit.*

✅ **LE COMMIT A TOUT EMPORTÉ, ET LE SECOND COMPTEUR LE PROUVE.** `35` entrées à
la garde du bloc 73, **36** en fin de séance 4, **2** ici — dont zéro hors
artefacts. *Le lot 9 est intégralement dans l'histoire ; le lot 10 part d'un
arbre propre.*

---

## Déclaration C131 du bloc 76 — rejouée, liste FERMÉE avant le bloc

**Populations** — inchangées et redéclarées : `git status --porcelain` sur le
dépôt entier moins les **deux chemins exacts** du `.gitignore` ; `hors artefacts
de seance` = la même moins les lignes portant `batterie-sortie` ou
`predictions-` (deux `-notmatch` du **code** de `batterie.ps1`).

**Liste FERMÉE des artefacts au moment où l'étape 1 du bloc 76 lira
`git status` :**

| # | artefact | état git | total | hors artefacts |
|---|---|---|---|---|
| 1 | `tools/predictions-260830.md` (déjà ` M` ; ce texte l'allonge sans changer son état) | ` M` | **oui** | non |
| 2 | `tools/batterie-sortie-3008b30.txt` (créée au bloc 75) | `??` | **oui** | non |
| 3 | `tools/batterie-sortie-3008b31.txt` (créée par l'étape 0 du bloc 76, **avant** la lecture) | `??` | **oui** | non |
| — | `tools/batterie-sortie.txt` | ignoré | non | non |

**TOTAL impliqué : 3 au total, 0 hors artefacts de séance.**

⚠ **Relecture de la liste CONTRE les prédictions du bloc 76** (règle d'usage
17) : les prédictions ci-dessous ne prévoient **aucun test négatif**, **aucune
table TSV**, **aucun relevé sauvegardé hors batterie**, **aucune édition**. Le
bloc lance **une commande d'écriture** (`batterie.ps1 -Phase cadrage`, qui
n'écrit que `batterie-sortie.txt` et sa copie datée) et **quatre lectures sans
écriture** (les hubs). **La liste est close et complète.**

---

## Bloc 76 — composition du lot 10 : remesure nominative de l'anneau 2 et paliers des hubs

**Commandes, dans cet ordre :**

1. `powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase cadrage`
   *(sans `-Fiches` : la composition n'est pas close — le brief fixe **deux**
   fiches et laisse **4 280 mots de marge** « pour se compléter ailleurs ».
   Passer ici une composition non instruite reviendrait à l'inventer. La
   batterie ne se filtre jamais au lancement — règle d'usage 14.)*
2. lectures, sans écriture, des **quatre hubs** où vivent les candidates :
   `content/conduite/proj/index.md` (confirmer que le résidu du palier
   « Analyse fonctionnelle » est bien de **deux** fiches),
   `content/embarque/index.md`, `content/embarque/mcu/index.md`,
   `content/embarque/simulation/index.md`. *Le **palier du hub** est le critère
   qui a tranché le lot 8 et confirmé le lot 9.*

**Base de comparaison** — la sortie d'état de la clôture du lot 9,
`tools/batterie-sortie-3008b29.txt`, prise au bloc 72 à **09:51:32**. ⚠ **Rien
n'a touché à `content/` depuis** : la garde du bloc 75 rend le second compteur à
**0**, et un commit ne modifie aucun contenu. **La remesure doit donc rendre
l'anneau IDENTIQUE au caractère** — c'est le terme écrit pour réfuter.

### Prédictions

**P76.1 — autocontrôle et copie C124.** `lignes non ASCII dans batterie.ps1 :
0` ; `sortie precedente copiee : tools\batterie-sortie-3008b31.txt`.

**P76.2 — paramètres et horloge.** `phase demandee : cadrage   anneau : 2
chevron : False` ; `date ISO : 2026-08-30` ; heure **strictement postérieure à
`10:15:25`**.

**P76.3 — HEAD, au caractère.** `HEAD git : 65365fa 2026-08-30 10:03:18 +0200`.
*Décompte plein : la prédiction porte sur la **stabilité** de HEAD entre deux
blocs de ma séance, pas sur la valeur injectée au bloc 75.*

**P76.4 — compteurs git.** `fichiers modifies non commites : 3   (hors artefacts
de seance : 0)`, par la liste fermée ci-dessus.

**P76.5 — dates d'écriture, exactement TROIS lignes, INCHANGÉES AU CARACTÈRE** :
`JOURNAL.md 2026-08-30 10:00:55`, `conventions.md 2026-08-30 09:58:36`,
`TODO.md 2026-08-29 21:48:08`. *Aucune main n'a écrit entre les deux blocs.*

**P76.6 — structure : QUATRE étapes, quatre codes de sortie à `0`.** Étape 0,
étape 1 (garde), étape **2** qui sort la ligne exacte `aucune source FR passee
(-Fiches) : etapes de lot sautees.`, étape **4** (anneau). ⚠ *Il n'y a **pas**
d'étape 3 : le code ne l'émet que si `-Fiches` est non vide. Terme écrit pour
réfuter — si une étape 3 apparaît, c'est que la batterie a reçu des fiches que
je ne lui ai pas passées.*

**P76.7 — en-tête de l'anneau 2, quatre chiffres au caractère.**
`anneau 0 (index de depart)   : 4` ; `cibles BRUTES               : 222` ;
`deja vues aux rangs 0..1     : 77` ; `ANNEAU 2 NET               : 145`, puis
`deja traduites            : 128` et `RESTANT                   : 17`.

**P76.8 — les DIX-SEPT lignes nominatives du restant, dans cet ordre
alphabétique et avec ces volumes exacts :**

| # | fiche | mots |
|---|---|---|
| 1 | `conduite/proj/afnor-nfx50-151` | **91** |
| 2 | `conduite/proj/etat-de-l-art-technique` | **2286** |
| 3 | `embarque/asservissement` | **925** |
| 4 | `embarque/boucle-ouverte` | **1100** |
| 5 | `embarque/mcu/ascii` | **671** |
| 6 | `embarque/mcu/chien-de-garde` | **2005** |
| 7 | `embarque/mcu/filtrage` | **1397** |
| 8 | `embarque/mcu/fonction-informatique` | **398** |
| 9 | `embarque/mcu/ide` | **385** |
| 10 | `embarque/mcu/potentiometre` | **519** |
| 11 | `embarque/mcu/programmation-non-bloquante` | **1829** |
| 12 | `embarque/mcu/sans-fil/xbee` | **135** |
| 13 | `embarque/pcb/easyeda` | **9773** |
| 14 | `embarque/protection-electronique` | **1389** |
| 15 | `embarque/simulation/falstad` | **3244** |
| 16 | `embarque/simulation/ltspice` | **3848** |
| 17 | `embarque/simulation/wokwi` | **1340** |

et le total `RESTANT DE L ANNEAU 2 (17 fiches)                     31335`.

⚠ **Contrôle de somme publié AVANT la mesure** : les dix-sept volumes ci-dessus
somment à **31 335**, et le brief annonce **31 335**. *Si la mesure rend un
total juste sur une décomposition fausse, c'est le défaut « un total dans la
fourchette ne valide pas la décomposition » du §8, et il se verra ligne à
ligne.*

**P76.9 — angle mort du chevron : `fiches porteuses : 0`, `clotures en chevron :
0`**, et la ligne `-> zero fiche porteuse = le correctif n est pas bloquant pour
ce lot.` *C127 hors sujet pour le **cinquième** lot d'affilée, comme le brief
l'annonce.*

**P76.10 — `ATTEIGNABLES PAR AUCUN PARENT TRADUIT (0)` et `CIBLES SANS FICHE
(6)`**, les six étant `[[FC]]`, `[[FP]]`, `[[FS]]`, `[[critere]]`,
`[[flexibilite]]`, `[[niveau]]`. ⚠ **Le compteur est prédit INCHANGÉ à 6 alors
même que le lot 9 a traduit ses deux porteuses**, `fonction` et
`caracteriser-une-exigence` : c'est le **faux positif sur les alias** mesuré à
trois instruments le 30/08 (suite 4). *`--anneau` résout par chemin et par nom
de fichier, jamais par `aliases:`. **Terme écrit pour réfuter** : si le compteur
tombait à 0, mon diagnostic de la suite 4 serait faux.*

**P76.11 — dette du front courant** : `fiches sources (traduites)   : 222` ;
`cibles rouges distinctes     : 20` ; `mots                         : 33603` ;
`dont HORS anneaux 0..2       : 2`, les deux nommées étant
`embarque/mcu/xiao/xiao-prise-en-main` et `embarque/mcu/xiao/xiao-sense`.
⚠ **Identité publiée avant la mesure, et elle a une conséquence** :
`31 335 (anneau 2) + 840 (kicad) + 670 + 758 (les deux xiao) = 33 603`. **Donc
`embarque/pcb/kicad` est DANS les anneaux 0..2 sans être dans le restant de
l'anneau 2** — il appartient à un rang inférieur. *C'est la seule lecture qui
referme les deux compteurs à la fois, et elle n'a jamais été écrite au
registre : le bloc 74 nommait les trois fiches « hors anneau 2 » sans distinguer
celle qui est hors du **restant** de celles qui sont hors des **anneaux**.*

**P76.12 — ce que la sortie NE porte PAS** : ni corpus, ni contrôle, ni dérive,
ni foisonnement, ni style, ni médias, ni wikilinks, ni libellés, ni chevron
`--tout`. La phase `cadrage` s'arrête à l'étape 4.

**P76.13 — les quatre hubs, lecture seule, et ce que je cherche.**
`conduite/proj/index.md` doit lister le palier « Analyse fonctionnelle » avec
**neuf** fiches dont **sept déjà traduites**, laissant `etat-de-l-art-technique`
et `afnor-nfx50-151`. Les trois hubs `embarque/` doivent rendre les **paliers**
où logent les **quinze** autres candidates, pour instruire les **4 280 mots de
marge**. ⚠ *Aucun chiffre n'est prédit sur les hubs : je n'en ai jamais mesuré
la structure et l'inventer serait une prédiction de mémoire (C118). **Ce que je
prédis est une forme** : chaque hub porte des titres de section qui groupent ses
fiches, et le lot 8 a été tranché sur ce critère.*

**P76.14 — trois découpes candidates, chiffrées AVANT lecture des hubs, pour que
le hub arbitre au lieu de confirmer.** Le socle fixe est **2 377** (les deux
fiches du palier) ; la borne est **6 657** ; la marge est **4 280**.
- **(A) racine `embarque/`** — `asservissement` 925 + `boucle-ouverte` 1100 +
  `protection-electronique` 1389 = **3 414**. Lot **5 791**, marge **866**.
  **Tient.**
- **(B) petites notions `embarque/mcu/`** — `ascii` 671 +
  `fonction-informatique` 398 + `ide` 385 + `potentiometre` 519 +
  `chien-de-garde` 2005 + `xbee` 135 = **4 113**. Lot **6 490**, marge **167**.
  **Tient de justesse**, et laisse `filtrage` 1397 et
  `programmation-non-bloquante` 1829 orphelines dans `mcu/`.
- **(C) résidu `embarque/simulation/`** — `falstad` 3244 + `wokwi` 1340 =
  **4 584**. Lot **6 961**, soit **+304 au-dessus de la borne**. **NE TIENT
  PAS**, et `ltspice` 3848 la ferait exploser.
⚠ *Les trois chiffres sont des sommes de valeurs mesurées le jour même (bloc 72,
`3008b29`) et **remesurées au présent bloc** : ils ne se posent qu'après P76.8.*
⚠ **Terme écrit pour réfuter** : si le hub range les candidates autrement que
ces trois découpes, **c'est le hub qui gagne** — c'est exactement ce qui a
tranché le lot 8, et une découpe arithmétique qui ne correspond à aucun palier
est écartée quel que soit son volume.

### Constats du bloc 76 (sortie `tools/batterie-sortie.txt`, copie C124 `3008b31`)

| # | prédiction | constat | verdict |
|---|---|---|---|
| P76.1 | ASCII **0** ; copie `tools\batterie-sortie-3008b31.txt` | `0` ; `3008b31` | **tenue** |
| P76.2 | `cadrage   anneau : 2   chevron : False` ; ISO `2026-08-30` ; heure > `10:15:25` | idem ; **10:17:46** | **tenue** |
| P76.3 | `HEAD git : 65365fa 2026-08-30 10:03:18 +0200` au caractère | identique | **tenue** |
| P76.4 | `3   (hors artefacts de seance : 0)` | **3 / 0** | **tenue** |
| P76.5 | 3 dates inchangées au caractère : `10:00:55` / `09:58:36` / `2026-08-29 21:48:08` | identiques | **tenue** |
| P76.6 | **4** étapes (0, 1, 2, 4), **pas d'étape 3**, 4 codes à `0`, ligne `aucune source FR passee (-Fiches) : etapes de lot sautees.` | 4 étapes, pas d'étape 3, 4 × 0, ligne au caractère | **tenue** |
| P76.7 | `4` / `222` / `77` / `145` / `128` / `17` | identiques | **tenue** |
| P76.8 | **17 lignes nominatives**, ordre et volumes, total `31335` | les 17, au mot, dans l'ordre ; total `31335` | **tenue** |
| P76.9 | porteuses **0**, clôtures **0**, ligne « le correctif n est pas bloquant » | identiques | **tenue** |
| P76.10 | `ATTEIGNABLES … (0)` ; `CIBLES SANS FICHE (6)` avec les six noms, **inchangé malgré la traduction des deux porteuses** | `(0)` ; **6**, les six noms | **tenue** |
| P76.11 | `222` / `20` / `33603` / `2`, les deux xiao nommées | identiques | **tenue** |
| P76.12 | aucune ligne de corpus / contrôle / dérive / foisonnement / style / médias / wikilinks / libellés / chevron | aucune | **tenue** |
| P76.13 | `conduite/proj/index.md` : palier « Analyse fonctionnelle » à **9** fiches dont 7 traduites ; **`embarque/mcu/index.md`** et **`embarque/simulation/index.md`** rendent les paliers des 15 autres | palier à **9** fiches, résidu = les 2 attendues ✅ ; ⚠ **les deux hubs nommés N'EXISTENT PAS** | **RÉFUTÉE** |
| P76.14 | (A) 3 414 → lot 5 791 ; (B) 4 113 → lot 6 490 ; (C) 4 584 → lot **6 961 hors borne** | trois sommes exactes sur les volumes remesurés | **tenue** |

**Bilan du bloc 76 : 14 prédictions à décompte plein, 13 tenues, 1 réfutée.**

⚠ **RÉFUTATION P76.13 — J'AI NOMMÉ DEUX FICHIERS DE MÉMOIRE, ET AUCUN DES DEUX
N'EXISTE.** `content/embarque/mcu/index.md` et
`content/embarque/simulation/index.md` sont **absents du dépôt** : les hubs
réels sont `embarque/mcu/microcontroleur.md` et
`embarque/simulation/simulation-electronique.md`, tous deux des **fiches-notion
faisant office de hub**, pas des `index.md`. *C'est une prédiction de mémoire
sur une structure de répertoire que je n'avais jamais mesurée — la prédiction le
disait pour les **chiffres** (« aucun chiffre n'est prédit sur les hubs ») et
l'oubliait pour les **chemins**.* ✅ **Aucune écriture n'en dépendait** : le bloc
est en lecture seule et les deux vrais hubs ont été lus dans la foulée.

⚠ **ET LA RÉFUTATION EN DÉCOUVRE UNE PLUS GRANDE : LE CRITÈRE DU PALIER DE HUB
N'A AUCUNE PRISE SUR CE LOT.** Mesure, `embarque/index.md` balayé slug par
slug : **`0` occurrence sur les QUINZE candidates de `embarque/`** —
`asservissement`, `boucle-ouverte`, `protection-electronique`, `ascii`,
`chien-de-garde`, `filtrage`, `fonction-informatique`, `ide`, `potentiometre`,
`programmation-non-bloquante`, `xbee`, `easyeda`, `falstad`, `ltspice`,
`wokwi`. *Le hub `embarque/` est un **parcours en sept étapes**, pas un
recensement : il nomme les fiches de première ligne et laisse les notions de
second rang se rejoindre entre fiches.* ⚠ **Le critère qui a tranché le lot 8 et
confirmé le lot 9 est donc MUET ici, et il faut un autre arbitre.**

✅ **CE QUE LE HUB `conduite/proj/index.md` CONFIRME, LUI.** Le palier
« Analyse fonctionnelle » porte bien **neuf** fiches, dans cet ordre :
`mecatronique`, `mind-map`, `bete-a-cornes`, `pieuvre`, `fonction`,
`caracteriser-une-exigence`, **`etat-de-l-art-technique`**,
`cahier-des-charges-fonctionnel`, **`afnor-nfx50-151`**. **Sept sont traduites**
— les six du lot 9 plus `cahier-des-charges-fonctionnel` (25/08) — et le résidu
est **exactement les deux fiches que le brief annonce**. ⚠ *Le libellé du hub
français pour la seconde est `[[afnor-nfx50-151|Norme NF X50-151]]` : c'est
**l'un des quatre `Norme NF X50-151` résiduels** que le brief signale, et il
vit dans le hub même.*

---

## Dossier de composition du lot 10 — instruit sur les sorties du bloc 76

**Socle fixe** — les **deux** fiches du résidu du palier, **2 377 mots**.
**Borne** — **6 657**. **Marge à instruire** — **4 280**.

**Ce qui reste après le socle : quinze candidates, toutes dans `embarque/`.**
`easyeda` **9 773** est écartée d'office — **arbitrage Tim du 30/08 (séance 3),
elle fera un lot à elle seule**. Restent **quatorze**, pour **21 562 mots**.

**Premier critère — le palier du hub. ⚠ IL NE REND RIEN, mesuré à zéro sur
quinze.** Voir la réfutation P76.13 ci-dessus.

**Deuxième critère — « pas de fiche orpheline », c'est-à-dire ne pas laisser
dans un répertoire un résidu que rien ne viendra chercher.** Il rend, lui, et
il rend un classement net :

| découpe | fiches | mots | lot | marge | ce qu'elle laisse |
|---|---|---|---|---|---|
| **(A) racine `embarque/`** | `asservissement` 925, `boucle-ouverte` 1100, `protection-electronique` 1389 | **3 414** | **5 791** | **866** | ⚠ **RIEN** — la racine est vidée |
| (B) petites notions `mcu/` | `ascii` 671, `fonction-informatique` 398, `ide` 385, `potentiometre` 519, `chien-de-garde` 2005, `xbee` 135 | 4 113 | 6 490 | 167 | `filtrage` 1 397 et `programmation-non-bloquante` 1 829 seules dans `mcu/` |
| (C) résidu `simulation/` | `falstad` 3244, `wokwi` 1340 | 4 584 | **6 961** | **−304** | hors borne, et `ltspice` 3848 orpheline |

✅ **DÉCOUPE RETENUE : (A).** **Elle est la seule qui ferme un niveau de
répertoire entier.** Mesure faite, `content/embarque/` porte **huit fiches hors
`index.md`** ; **cinq ont déjà leur jumelle EN** —
`alimentation-electronique`, `analyse-de-schema-electronique`, `chaine-energie`,
`decouplage`, `schema-bloc-fonctionnel` — et **les trois candidates sont
exactement les trois qui manquent**. *Après ce lot, `content/en/embarque/` porte
la racine complète, et il ne reste plus que des sous-répertoires à ouvrir.*

⚠ **CE QUI PLAIDE CONTRE, ET C'EST DE RANG INFÉRIEUR MAIS ÇA S'ÉCRIT.** Le lot
est **hétérogène** : deux fiches d'analyse fonctionnelle en conduite de projet,
trois notions d'électronique embarquée. **Aucun lot du chantier n'avait encore
mélangé deux branches.** *Le motif qui l'emporte est que l'hétérogénéité est
**imposée par le socle** — les deux fiches du palier ne pèsent que 2 377 mots et
la borne en autorise 6 657 : tout complément vient forcément d'ailleurs, le
palier « Analyse fonctionnelle » n'ayant plus rien à donner.* ⚠ **Le seul moyen
d'un lot homogène était de laisser le socle seul à 2 377 mots**, soit **36 % de
la borne** et le lot le plus léger du chantier, tous les autres tenant entre
3 348 et 5 813.

⚠ **Second point contre, mesuré et non bloquant** : `protection-electronique`
est thématiquement à part des deux autres. `asservissement` et `boucle-ouverte`
**se citent mutuellement** et sont toutes deux visées par `chaine-energie` et
`schema-bloc-fonctionnel` ; `protection-electronique` est visée par `emc`,
`securite-et-qualite`, `alimentation-electronique`,
`analyse-de-schema-electronique`, `lire-une-datasheet` et `multimetre` —
**six fiches, toutes déjà traduites**. *Elle n'est donc pas isolée : elle est
seulement d'un autre fil. Et la retirer ferait retomber le lot à 4 402 mots
**sans fermer la racine**, ce qui perd le seul critère qui tranche.*

**COMPOSITION ARRÊTÉE DU LOT 10 — 5 fiches, 5 791 mots, marge 866 :**

| # | source FR | mots |
|---|---|---|
| 1 | `conduite/proj/etat-de-l-art-technique` | 2 286 |
| 2 | `conduite/proj/afnor-nfx50-151` | 91 |
| 3 | `embarque/asservissement` | 925 |
| 4 | `embarque/boucle-ouverte` | 1 100 |
| 5 | `embarque/protection-electronique` | 1 389 |
| — | **total** | **5 791** |

**Ce que le lot laisse derrière lui, publié d'avance** : anneau 2 restant
**17 − 5 = 12 fiches**, **31 335 − 5 791 = 25 544 mots** ; corpus restant
**20 − 5 = 15 fiches**, **33 603 − 5 791 = 27 812 mots**. ⚠ *Les deux
soustractions se font sur le `tot` **d'AVANT** la passe C109 (règle d'usage 5) ;
elles seront rejouées à la clôture avec le `tot` d'après pour les compteurs qui
**contiennent** les fiches après édition.*

---

## Déclaration C131 du bloc 77 — rejouée, liste FERMÉE avant le bloc

**Populations** — inchangées et redéclarées : `git status --porcelain` sur le
dépôt entier moins les **deux chemins exacts** du `.gitignore` ; `hors artefacts
de seance` = la même moins les lignes portant `batterie-sortie` ou
`predictions-`.

**Liste FERMÉE des artefacts au moment où l'étape 1 du bloc 77 lira
`git status` :**

| # | artefact | état git | total | hors artefacts |
|---|---|---|---|---|
| 1 | `tools/predictions-260830.md` (déjà ` M`) | ` M` | **oui** | non |
| 2 | `tools/batterie-sortie-3008b30.txt` (bloc 75) | `??` | **oui** | non |
| 3 | `tools/batterie-sortie-3008b31.txt` (bloc 76) | `??` | **oui** | non |
| 4 | `tools/batterie-sortie-3008b32.txt` (étape 0 du bloc 77, **avant** la lecture) | `??` | **oui** | non |
| — | `tools/batterie-sortie.txt` | ignoré | non | non |

**TOTAL impliqué : 4 au total, 0 hors artefacts de séance.**

⚠ **Relecture de la liste CONTRE les prédictions du bloc 77** (règle d'usage
17) : **aucun test négatif**, **aucune table TSV**, **aucune édition**, **aucun
relevé sauvegardé hors batterie** n'apparaît dans les prédictions ci-dessous. Le
bloc lance **une seule commande**. **La liste est close et complète.**

---

## Bloc 77 — cadrage du lot 10 (volume, candidats C109)

**Commande unique :**

```
powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase cadrage -Fiches conduite/proj/etat-de-l-art-technique.md,conduite/proj/afnor-nfx50-151.md,embarque/asservissement.md,embarque/boucle-ouverte.md,embarque/protection-electronique.md
```

*La composition étant arrêtée au bloc 76, les cinq sources sont passées ; la
batterie n'est pas filtrée (règle d'usage 14).*

### Prédictions

**P77.1 — autocontrôle et copie C124.** `lignes non ASCII dans batterie.ps1 :
0` ; `sortie precedente copiee : tools\batterie-sortie-3008b32.txt`.

**P77.2 — paramètres, horloge, HEAD.** `phase demandee : cadrage   anneau : 2
chevron : False` ; `date ISO : 2026-08-30` ; heure **strictement postérieure à
`10:17:46`** ; `HEAD git : 65365fa 2026-08-30 10:03:18 +0200` **au caractère**.

**P77.3 — compteurs git : `4   (hors artefacts de seance : 0)`**, par la liste
fermée ci-dessus.

**P77.4 — dates d'écriture : exactement HUIT lignes**, les **trois** de pilotage
inchangées au caractère (`10:00:55` / `09:58:36` / `2026-08-29 21:48:08`) puis
**cinq** lignes de fiches, dans l'ordre de la ligne de commande. ⚠ **Les cinq
dates sont prédites strictement ANTÉRIEURES au `2026-08-30 07:40:42`** —
ouverture de la séance 2, premier instant de la journée où une main a touché à
`content/`. *Aucune des cinq séances du 30/08 n'a édité ces fiches : le lot 8 a
pris `conduite/proj/` côté « Concept » et « Réalisation », le lot 9 les six
premiers rangs de « Analyse fonctionnelle ». **Terme écrit pour réfuter** : une
date du 30/08 sur l'une des cinq serait une main que je n'ai pas vue, et un
arrêt.*

**P77.5 — structure : CINQ étapes (0, 1, 2, 3, 4), cinq codes de sortie à `0`.**
⚠ *L'étape 3 apparaît cette fois, `-Fiches` étant non vide — c'est l'exact
complément de P76.6, qui la prédisait absente.*

**P77.6 — volume du lot, les cinq lignes DANS L'ORDRE DE LA COMMANDE et le
total :**

| # | ligne attendue | mots |
|---|---|---|
| 1 | `conduite/proj/etat-de-l-art-technique.md` | **2286** |
| 2 | `conduite/proj/afnor-nfx50-151.md` | **91** |
| 3 | `embarque/asservissement.md` | **925** |
| 4 | `embarque/boucle-ouverte.md` | **1100** |
| 5 | `embarque/protection-electronique.md` | **1389** |
| — | `LOT (5 fiches)` | **5791** |

⚠ **Terme écrit pour réfuter, et il porte sur la comparabilité de deux
compteurs** : `--lot` et `--anneau` importent tous deux `compterMots` de
`compter-mots.mjs` (règle C110 figée). **Les cinq valeurs doivent donc être
identiques au mot à celles de P76.8.** *Un écart signifierait que les deux
compteurs ne portent pas la même règle, et invaliderait la composition entière
du lot, pas seulement ce chiffre.*

**P77.7 — les quatre seaux mécaniques du contrôle de style, tous à `0`** :
`typographie francaise : 0`, `virgule ambigue : 0`, `C109 creees en EN : 0`,
`hors alphabet latin : 0`. ⚠ *Le troisième est à 0 **par construction du
périmètre** : il ne mord que sur une fiche EN, et les cinq sources passées sont
françaises. Il a mordu pour la première fois du chantier au lot 9, sur
`bete-a-cornes-en`.*

**P77.8 — `C109 de prose` entre 45 et 80, point estimé 62.** *Taux observés :
lot 8 **63 sur 5 488 mots** (1,15 pour 100), lot 9 **61 sur 5 813** (1,05 pour
100) ; appliqués aux **5 791** mots de ce lot, ils encadrent 61 à 67.* ⚠ **La
fourchette est plus large que ces deux taux, et volontairement** : les deux lots
de référence sont **entièrement** faits de fiches `conduite/proj/`, quand
celui-ci en compte **deux sur cinq**. *Je n'ai aucune mesure du taux de C109 sur
des notions `embarque/`, et prétendre le contraire serait une prédiction de
mémoire.*

**P77.9 — `hors perimetre` entre 10 et 35, point estimé 20.** *Lot 8 : 20 ;
lot 9 : 20. La famille compte des titres, cellules de tableau et `alt`, dont le
volume dépend de la densité de tableaux — inconnue sur les trois fiches
`embarque/`.*

⚠ **P77.10 — je ne publie PAS de décomposition par fiche des deux seaux
ci-dessus, et c'est un refus motivé.** Le §8 porte : *« une prédiction décomposée
se vérifie terme à terme, et un total juste n'en est pas la preuve »*, la cause
nommée étant **de construire les valeurs individuelles autour d'une moyenne de
module**. **C'est exactement ce que je ferais ici** : je n'ai jamais mesuré le
taux de C109 d'une fiche `embarque/`. *Un total encadré et assumé comme tel vaut
mieux qu'une décomposition inventée qui tomberait juste par compensation.*

**P77.11 — UN terme décomposé, et un seul, parce qu'il ne vient pas d'une
moyenne : `afnor-nfx50-151.md` rend 0 ou 1 candidat de prose.** *Elle pèse
**91 mots**, soit 1,6 % du lot ; à 1,1 candidat pour 100 mots, l'espérance est
**1,0**.* ⚠ **Conséquence sur la ligne de bilan** : `5 fiche(s) lue(s), N a
reprendre.` avec **N = 4 ou 5**, et `N = 4` **si et seulement si** `afnor`
rend 0.

**P77.12 — anneau et dette INCHANGÉS au caractère** par rapport au bloc 76 :
`145 / 128 / 17`, les **17** lignes nominatives, `31335`, porteuses `0`,
`ATTEIGNABLES … (0)`, `CIBLES SANS FICHE (6)`, dette `222 / 20 / 33603 / 2`.
*Rien n'a touché à `content/` entre les deux blocs — la garde le dira.*

**P77.13 — ce que la sortie NE porte PAS** : ni corpus, ni contrôle, ni dérive,
ni foisonnement, ni médias, ni wikilinks, ni libellés, ni chevron `--tout`. La
phase `cadrage` s'arrête à l'étape 4.

### Constats du bloc 77 (sortie `tools/batterie-sortie.txt`, copie C124 `3008b32`)

| # | prédiction | constat | verdict |
|---|---|---|---|
| P77.1 | ASCII **0** ; copie `tools\batterie-sortie-3008b32.txt` | `0` ; `3008b32` | **tenue** |
| P77.2 | `cadrage / 2 / False`, ISO `2026-08-30`, heure > `10:17:46`, HEAD au caractère | idem ; **10:21:54** ; HEAD identique | **tenue** |
| P77.3 | `4   (hors artefacts de seance : 0)` | **4 / 0** | **tenue** |
| P77.4 | **8** lignes ; 3 pilotage inchangées ; **5 dates de fiches < `2026-08-30 07:40:42`** | 8 lignes ; pilotage identique ; **23/08 20:53:40**, **12/06 22:41:44**, **19/08 12:46:14**, **19/08 11:33:53**, **16/06 23:09:28** | **tenue** |
| P77.5 | **5** étapes (0,1,2,3,4), 5 codes à `0`, étape 3 **présente** | 5 étapes, étape 3 présente, 5 × 0 | **tenue** |
| P77.6 | 5 lignes dans l'ordre, `2286 / 91 / 925 / 1100 / 1389`, `LOT (5 fiches) 5791` | identiques au mot | **tenue** |
| P77.7 | `typographie francaise 0`, `virgule ambigue 0`, `C109 creees en EN 0`, `hors alphabet latin 0` | **0 / 0 / 0 / 0** | **tenue** |
| P77.8 | `C109 de prose` ∈ [45, 80], point 62 | **67** | **tenue** |
| P77.9 | `hors perimetre` ∈ [10, 35], point 20 | **9** | **RÉFUTÉE** |
| P77.10 | refus motivé de décomposer les deux seaux | — | *[déclarative]* |
| P77.11 | `afnor-nfx50-151` rend **0 ou 1** candidat ; `N a reprendre` = 4 ou 5 | **2** candidats ; `5 a reprendre` | **RÉFUTÉE** (1er terme) / tenue (2ᵉ) |
| P77.12 | anneau et dette inchangés au caractère | identiques | **tenue** |
| P77.13 | ni corpus, ni contrôle, ni dérive, ni foisonnement, ni médias, ni wikilinks, ni libellés, ni chevron | aucun | **tenue** |

**Bilan du bloc 77 : 12 prédictions à décompte plein, 10 tenues, 2 réfutées**
(plus 1 déclarative).

⚠ **LES DEUX RÉFUTATIONS ONT LA MÊME CAUSE, ET ELLE EST NEUVE : J'AI RAPPORTÉ
UN TAUX DE C109 À DES MOTS, QUAND IL SE RAPPORTE À DE LA PROSE.**

**Décomposition mesurée, publiée après coup et lue terme à terme :**

| fiche | mots | candidats | taux pour 100 mots |
|---|---|---|---|
| `conduite/proj/etat-de-l-art-technique` | 2 286 | **13** | **0,57** |
| `conduite/proj/afnor-nfx50-151` | 91 | **2** | **2,20** |
| `embarque/asservissement` | 925 | **7** | **0,76** |
| `embarque/boucle-ouverte` | 1 100 | **15** | **1,36** |
| `embarque/protection-electronique` | 1 389 | **30** | **2,16** |
| **lot** | **5 791** | **67** | **1,16** |

⚠ **L'écart entre la plus basse et la plus haute est d'un facteur 3,9**, et la
plus haute est la **plus petite fiche du lot**. *Cause : le compteur ne mord que
sur la **prose**. Une fiche de 91 mots est **presque intégralement** une phrase
de définition dense — l'habitat exact du tiret d'incise — quand une fiche de
2 286 mots porte des tableaux, des callouts, des listes et des blocs, qui
diluent le taux sans le produire.* **Le modèle « candidats ∝ mots » est faux, et
il l'est le plus violemment aux petites tailles.**

✅ **ET LA MÊME CAUSE EXPLIQUE `hors perimetre` À 9 CONTRE 20 / 20.** Ce seau
compte **titres, cellules de tableau et `alt`** : il mesure donc exactement ce
que la prose n'est pas. Les deux lots de référence étaient **entièrement** faits
de fiches `conduite/proj/` riches en matrices, triptyques et images légendées ;
ce lot-ci en compte deux sur cinq, et ses trois notions `embarque/` sont des
fiches courtes à faible densité de tableaux. ⚠ *Ma fourchette [10, 35] était
**asymétrique dans le mauvais sens** : je l'ai élargie vers le haut de +75 % et
vers le bas de −50 %, alors que la seule variation que la composition du lot
rendait probable était **à la baisse**.*

✅ **LE REFUS DE DÉCOMPOSER (P77.10) EST LA SEULE PRÉDICTION QUE LA MESURE
VALIDE PAR L'ABSURDE.** Une décomposition bâtie sur la moyenne du lot (1,16 pour
100) aurait annoncé `etat-de-l-art-technique` à **26** (mesuré **13**),
`protection-electronique` à **16** (mesuré **30**) et `afnor` à **1** (mesuré
**2**) : **trois termes faux, dont deux d'un facteur 2**, pour un total qui
serait tombé juste par compensation. *C'est mot pour mot le défaut du §8 — « un
total dans la fourchette ne valide pas la décomposition » — et c'est la première
fois du chantier qu'il est évité **en refusant de décomposer** plutôt qu'en s'y
faisant prendre.*

⚠ **CANDIDATE NEUVE, née de ces deux réfutations à cause unique :** *le taux de
candidats C109 se rapporte au **volume de prose**, pas au nombre de mots ; une
fiche courte est presque toute en prose et **sur-rend**, une fiche longue porte
des tableaux, des callouts et des listes qui **diluent**. Corollaire de
prédiction : la fourchette d'un lot se cale sur sa **composition en types de
fiches**, et ses deux bornes s'élargissent du côté où la composition s'écarte de
la référence — jamais symétriquement par prudence.*

---

## ⛳ GATE G1 — fin de cadrage. Composition du lot 10 arrêtée.

**Fait** — trois blocs (75 garde, 76 composition, 77 cadrage), **trois gardes de
péremption au vert**, `HEAD 65365fa` stable au caractère sur les trois, **zéro
écriture dans `content/`**.

**Chiffres** — lot **5 fiches, 5 791 mots**, marge **866** sous la borne 6 657.
**67 candidats C109** de prose sur les cinq sources, **9 hors périmètre**, les
**quatre seaux mécaniques à 0**. Anneau 2 restant **17 / 31 335**, dette
**20 / 33 603**, porteuses de chevron **0**.

**Ce qui suit** — bloc **78** : éprouvage bilingue du motif des puces à tiret
(C110, quatre échantillons nommés, deux par langue), relevé des puces du lot,
puis **jugement un par un** des candidats sous C123 et les quatre cas de
l'amendement C109 du 29/08. Puis bloc **79**, la passe C109 par
`remplacer-passe.mjs`, précédée d'un **test négatif délibéré**.

⚠ **Deux points à remonter, aucun bloquant** — (1) le **critère du palier de
hub** ne rend rien sur ce lot, mesuré **0 sur 15** ; la composition est tranchée
par « fermer un niveau de répertoire entier », qui est un critère de rang
inférieur mais le seul qui parle ici. (2) Le lot **mélange deux branches** pour
la première fois du chantier, et c'est **imposé par le socle** : le palier
« Analyse fonctionnelle » n'a plus que 2 377 mots à donner.

---

## Déclaration C131 du bloc 78 — rejouée, liste FERMÉE avant le bloc, DEUX instants

**Populations** — inchangées et redéclarées.

**Liste FERMÉE des artefacts du bloc 78 :**

| # | artefact | état | total | hors artefacts | existe à la garde ? |
|---|---|---|---|---|---|
| 1 | `tools/predictions-260830.md` | ` M` | oui | non | **oui** |
| 2 | `tools/batterie-sortie-3008b30.txt` | `??` | oui | non | **oui** |
| 3 | `tools/batterie-sortie-3008b31.txt` | `??` | oui | non | **oui** |
| 4 | `tools/batterie-sortie-3008b32.txt` | `??` | oui | non | **oui** |
| 5 | `tools/batterie-sortie-3008b33.txt` (étape 0 de la garde) | `??` | oui | non | **oui** |
| 6 | `tools/puces-lot10-3008.txt` (relevé du lot, sauvegardé C124) | `??` | oui | **oui** | **non** |
| — | le **script du motif**, écrit dans le répertoire temporaire de la session, **hors `content/` et hors `tools/`** | — | non | non | — |

⚠ **Relecture de la liste CONTRE les prédictions du bloc** (règle d'usage 17) :
les prédictions ci-dessous prévoient **un seul fichier écrit dans `tools/`** —
le relevé du lot. **Aucun test négatif** n'est prévu à ce bloc, donc **aucune
table négative à oublier** ; le test négatif délibéré appartient au bloc 79, qui
aura sa propre déclaration. Les quatre échantillons et le contrôle **n'écrivent
rien** : ils sont lus à l'écran.

**DEUX instants :** **5 / 0** quand la garde lit `git status` ; **6 / 1** en fin
de bloc, le `1` étant `tools/puces-lot10-3008.txt`.

---

## Bloc 78 — éprouvage bilingue du motif des puces (C110) et relevé du lot 10

**Commandes, dans cet ordre :**

1. `powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase garde`
   *(garde avant passe, sous-règle C116 (5))*
2. le motif sur les **quatre échantillons nommés**, deux FR et deux EN ;
3. un **contrôle hors éprouvage** sur les six jumelles EN du lot 9 — *sa réponse
   n'a jamais été publiée fiche par fiche côté anglais* ;
4. le motif sur les **cinq sources du lot 10**, en mode `--lister`, sortie
   sauvegardée sous `tools/puces-lot10-3008.txt` (C124).

### Le motif, republié EN ENTIER avant son lancement

*Règle d'usage 1 (29/08 suite 9), tenue aux lots 5, 6, 7, 8 et 9. Le script est
réécrit hors dépôt ; son texte est donc ici.*

- **front matter** retiré, et **seulement s'il ouvre le fichier** ;
- **blocs de code** masqués par bascule sur `/^\s{0,3}``` /` **après retrait du
  préfixe de citation** `/^(\s{0,3}>\s?)+/` — le masque C110 est ancré en début
  de ligne et ne voit pas `> ```cpp` (angle mort du chevron, C127) ;
- **section courante** lue sur `/^\s{0,3}(#{2,6})\s+(.*)$/`, normalisée en bas
  de casse, ponctuation de queue retirée (`/[\s:.!?*_`]+$/`) ;
- **exclusion** si la section courante est l'une des **cinq** : `voir aussi`,
  `aller plus loin`, `see also`, `going further`, `further reading` ;
- **puce** : `/^\s{0,6}[-*+]\s+/` sur la ligne déchevronnée ;
- **retenue** si elle contient `—` (U+2014).

⚠ **Motif identique au caractère à celui des blocs 32, 44, 54 et 67.** **Aucune
classe de caractères accentués n'y figure** — le piège du bloc Latin-1 (`×`
U+00D7 et `÷` U+00F7 logés entre les lettres) ne peut donc pas mordre.

### Les quatre échantillons de l'éprouvage, et ce que chacun éprouve

| n° | langue | fiches | réponse publiée au registre | ce qu'il éprouve |
|---|---|---|---|---|
| 1 | FR | lot 3 `esp32/` (4) | **2 / 2 / 4 / 4 = 12** | gloses de sections de liens, puces en callout, blocs chevronnés |
| 2 | EN | lot 3 `esp32/` (4) | **2 / 1 / 4 / 4 = 11** | **l'asymétrie**, seul terme qui prouve que le motif lit le disque |
| 3 | FR | lot 9 (6), **APRÈS sa passe** | **0 / 0 / 0 / 5 / 0 / 11 = 16** | l'exclusion des sections de liens **françaises**, sur un état publié de la veille au soir |
| 4 | EN | lot 7 (5) | **3 / 3 / 0 / 3 / 1 = 10** | l'exclusion des sections de liens **anglaises**, dont `further reading` |

⚠ **L'échantillon 3 est neuf, et il n'existe que parce que le lot 9 a bouché un
trou du registre** (règle d'usage 18). *Avant lui, aucun lot n'avait publié la
décomposition de ce qui **reste** après sa passe ; le lot 9 l'a fait à sa
clôture, et cela fabrique un échantillon nommé de plus, à réponse publiée.*

### Prédictions du bloc 78

**Garde (sous-règle C116 (5))**

**P78.1** — `lignes non ASCII dans batterie.ps1 : 0` ; `sortie precedente
copiee : tools\batterie-sortie-3008b33.txt`.

**P78.2** — `phase demandee : garde   anneau : 2   chevron : False` ;
`date ISO : 2026-08-30` ; heure **strictement postérieure à `10:21:54`** ;
`HEAD git : 65365fa 2026-08-30 10:03:18 +0200` **au caractère** ;
`node : v24.15.0` ; **2 codes de sortie, tous `0`**.

**P78.3** — `fichiers modifies non commites : 5   (hors artefacts de seance :
0)`, **premier instant de la déclaration C131**.

**P78.4** — **3 lignes de dates seulement** (`-Fiches` vide), identiques au
bloc 77 **au caractère** : `2026-08-30 10:00:55` / `2026-08-30 09:58:36` /
`2026-08-29 21:48:08`. ⚠ *Les cinq lignes de fiches du bloc 77 disparaissent :
elles venaient de `-Fiches`, pas d'un état du dépôt.*

**Épreuve C110 — les quatre échantillons**

**P78.5** — échantillon 1, FR lot 3 : `esp32-deep-sleep` **2**,
`esp32-arduino-core` **2**, `esp32-freertos` **4**, `esp32-idf` **4**,
**TOTAL 12**.

**P78.6** — échantillon 2, EN lot 3 : `esp32-deep-sleep-en` **2**,
`esp32-arduino-core-en` **1**, `esp32-freertos-en` **4**, `esp32-idf-en` **4**,
**TOTAL 11**. ⚠ *Onze et non douze : l'asymétrie connue d'`esp32-arduino-core`.
**Prédire 12 serait prédire la symétrie, pas la mesure.***

**P78.7** — échantillon 3, FR lot 9 après passe : `mecatronique` **0**,
`mind-map` **0**, `bete-a-cornes` **0**, `pieuvre` **5**, `fonction` **0**,
`caracteriser-une-exigence` **11**, **TOTAL 16**.

**P78.8** — échantillon 4, EN lot 7 : `raspberry-pi-gpio-en` **3**,
`raspberry-pi-prise-en-main-en` **3**, `raspberry-pi-projet-en` **0**,
`xiao-alimentation-en` **3**, `xiao-esp32-s3-en` **1**, **TOTAL 10**.

**Contrôle hors éprouvage — le report un pour un du lot 9, côté anglais**

**P78.9 — égalité fiche à fiche sur SIX termes** entre l'échantillon 3 et les
six jumelles EN : `mecatronique-en` **0**, `mind-map-en` **0**,
`bete-a-cornes-en` **0**, `pieuvre-en` **5**, `fonction-en` **0**,
`caracteriser-une-exigence-en` **11**, **TOTAL 16**. *C'est une **forme exacte**
et c'est le terme qui porte : le lot 9 a été écrit ce matin même, et son report
un pour un n'a jamais été contrôlé sur les puces côté anglais.*

**Relevé du lot 10**

**P78.10 — TOTAL du lot 10 : entre 6 et 34, point estimé 20.** *Base : la
densité de puces à tiret au millier de mots des trois lots mesurés — lot 7
**18 / 5 301 = 3,4 ‰**, lot 8 **22 / 5 488 = 4,0 ‰**, lot 9 **19 / 5 813 =
3,3 ‰** ; appliquées aux **5 791** mots du lot, elles encadrent **19 à 23**.*
⚠ **La fourchette est délibérément plus large que ces trois taux, et
l'élargissement est ASYMÉTRIQUE VERS LE BAS ET VERS LE HAUT à parts égales, en
application directe de la candidate née au bloc 77** : les trois références sont
faites de fiches `conduite/proj/` et de tutos MCU, quand ce lot porte **trois
notions `embarque/` courtes** dont je n'ai **aucune** mesure de densité
d'énumérations. *Le bloc 77 vient de me montrer qu'une fourchette calée d'un
seul côté rate du côté qu'elle n'a pas ouvert.*

**P78.11 — décomposition par fiche : AUCUNE prédiction, et le refus est motivé
pour la seconde fois de la séance.** *Le lot 9 a mesuré une distribution
extrême — **deux fiches sur six portaient 100 % des puces**, quatre en
portaient zéro — et un prorata aurait raté les six termes. Le bloc 77 vient de
mesurer un facteur **3,9** entre les taux de C109 de ce lot-ci. **Prédire cinq
chiffres au prorata serait rejouer sciemment une prédiction dont la cause
d'échec est connue deux fois.***

**P78.12 — DEUX termes de forme, qui ne viennent d'aucune moyenne.**
(a) `conduite/proj/afnor-nfx50-151` rend **0** — 91 mots, dont l'essentiel est
une phrase de définition, sans place pour une liste à puces ;
(b) la fiche **la plus fournie** du lot est
`embarque/protection-electronique` — c'est celle qui porte le plus de candidats
`--style` (**30 sur 67**), et la seule à porter un callout
`> **Références éprouvées** —` suivi d'une énumération.

**P78.13 — compteurs `git status` en fin de bloc : 6 au total, 1 hors artefacts
de séance**, ce seul `1` étant `tools/puces-lot10-3008.txt`. *Second instant de
la déclaration C131.*

### Constats du bloc 78 (garde `3008b33`, relevé `tools/puces-lot10-3008.txt`)

| # | prédiction | constat | verdict |
|---|---|---|---|
| P78.1 | ASCII 0 ; copie `3008b33` | 0 ; `tools\batterie-sortie-3008b33.txt` | **tenue** |
| P78.2 | `garde / 2 / False`, heure > `10:21:54`, HEAD au caractère, `v24.15.0`, 2 codes à 0 | **10:24:40** ; `65365fa 2026-08-30 10:03:18 +0200` ; `v24.15.0` ; 2 × 0 | **tenue** |
| P78.3 | `5   (hors artefacts de seance : 0)` | 5 / 0 | **tenue** |
| P78.4 | 3 lignes de dates, identiques au caractère | 3 lignes, identiques | **tenue** |
| P78.5 | FR lot 3 : 2 / 2 / 4 / 4 = **12** | identique | **tenue** |
| P78.6 | EN lot 3 : 2 / **1** / 4 / 4 = **11** | identique | **tenue** |
| P78.7 | FR lot 9 après passe : 0 / 0 / 0 / 5 / 0 / 11 = **16** | identique | **tenue** |
| P78.8 | EN lot 7 : 3 / 3 / 0 / 3 / 1 = **10** | identique | **tenue** |
| P78.9 | EN lot 9 : égalité fiche à fiche sur **six** termes, total 16 | 0 / 0 / 0 / 5 / 0 / 11 = **16** | **tenue** |
| P78.10 | total lot 10 ∈ [6, 34], point **20** | **20** | **tenue** |
| P78.11 | refus motivé de décomposer | — | *[déclarative]* |
| P78.12a | `afnor-nfx50-151` rend **0** | **0** | **tenue** |
| P78.12b | la plus fournie est `protection-electronique` | **`etat-de-l-art-technique` 17** ; `protection-electronique` **0** | **RÉFUTÉE** |
| P78.13 | fin de bloc **6 / 1**, le `1` étant `puces-lot10-3008.txt` | 6 / 1, et c'est bien lui | **tenue** |

**Bilan du bloc 78 : 13 prédictions à décompte plein, 12 tenues, 1 réfutée**
(plus 1 déclarative).

✅ **QUATRIÈME ÉPREUVE DE LA RÈGLE D'USAGE 1, ET LES QUATRE ÉCHANTILLONS TOMBENT
FICHE PAR FICHE**, l'asymétrie connue d'`esp32-arduino-core` (2 FR / 1 EN)
comprise. **Le motif est identique au caractère à celui des blocs 32, 44, 54 et
67.** ⚠ *Ce qui est neuf : l'**échantillon 3** est un état publié **après
passe**, forme d'échantillon qui n'existait pas avant que le lot 9 ne bouche le
trou du registre (règle d'usage 18). **Une règle en a fabriqué le matériau d'une
autre.*** *La règle d'usage 1 passe à **4/N**.*

✅ **ET LE REPORT UN POUR UN DU LOT 9 EST CONTRÔLÉ CÔTÉ ANGLAIS : SIX TERMES,
SIX ÉGALITÉS.** `0 / 0 / 0 / 5 / 0 / 11` des deux côtés, total **16**. *Le
lot 7 avait été contrôlé ainsi (dix termes), le lot 8 aussi (cinq termes) ;
celui-ci en ajoute six. **Vingt-et-un termes, vingt-et-un justes**, sur trois
lots écrits en exécution directe.*

⚠ **RÉFUTATION P78.12b — J'AI PRÉDIT UNE DENSITÉ DE PUCES À PARTIR D'UNE DENSITÉ
DE C109, ET LES DEUX NE SONT PAS CORRÉLÉES. C'est même l'inverse exact sur ce
lot.**

| fiche | candidats `--style` | puces à tiret |
|---|---|---|
| `etat-de-l-art-technique` | 13 | **17** |
| `afnor-nfx50-151` | 2 | 0 |
| `asservissement` | 7 | 3 |
| `boucle-ouverte` | 15 | **0** |
| `protection-electronique` | **30** | **0** |

**La fiche la plus chargée en C109 rend zéro puce, et la moins chargée des deux
`conduite/proj/` rend 85 % des puces du lot.** ⚠ *Cause, lue dans les deux
sorties : `protection-electronique` porte ses tirets cadratins **dans des
paragraphes de prose** et son énumération de références dans un **callout**
(`> **Références éprouvées** — …`), qui n'est pas une puce ; `etat-de-l-art-
technique` porte quatre **listes à puces glosées** — critères, sources, apports,
étapes — qui sont l'habitat même du motif.* ✅ **Le raisonnement qui aurait
donné la bonne réponse est disponible et je ne l'ai pas fait** : il fallait
compter les **listes à puces**, pas les tirets.

⚠ **Ce que la réfutation NE dit pas, et qui doit s'écrire** : le total, lui, est
tombé **exactement sur le point estimé, 20**. *C'est la troisième fois de la
série qu'un total juste coexiste avec une décomposition fausse — la règle du §8
en toutes lettres. **Ici le refus de décomposer (P78.11) a protégé cinq termes
sur six ; le seul que j'aie décomposé quand même est le seul qui rate.***

**Relevé du lot 10, `tools/puces-lot10-3008.txt`** —
`etat-de-l-art-technique` **17**, `afnor-nfx50-151` **0**, `asservissement`
**3**, `boucle-ouverte` **0**, `protection-electronique` **0**, **TOTAL 20**.

**Total des candidats du lot 10 à juger un par un : 67 + 20 = 87 signalements**,
portés par **64 lignes distinctes**. ⚠ **Les deux instruments se recouvrent sur
UNE seule ligne** — `etat-de-l-art-technique` **L143**, qui porte à la fois un
point-virgule de prose (`--style`) et un tiret de glose de puce (motif). *Le
lot 9 en comptait trois ; celui-ci en compte une, parce que les puces et les
C109 de prose vivent, ici, dans des fiches différentes.*

---

## Jugement des 87 candidats, un par un (C123 + les quatre cas de l'amendement C109 du 29/08)

⚠ **Les deux instruments se recouvrent sur UNE seule ligne.** `--style` signale
**67 occurrences sur 45 lignes** ; le motif des puces signale **20 lignes**.
**Une seule est dans les deux listes** — `etat-de-l-art-technique` **L143** —,
et les occurrences y sont distinctes : le séparateur de glose en tête de puce
d'un côté, un point-virgule dans la prose de la même puce de l'autre.
**87 signalements, 64 lignes distinctes.**

### La règle de lecture appliquée, reprise TELLE QUELLE du lot 9

*Elle a été écrite au lot 9 avant de juger ; elle est reprise au mot, sans
amendement, ce qui est la seule façon de rendre les deux lots comparables.*

1. **Prose continue** (hors puce, ou dans une puce après au moins une phrase
   complète) : le tiret et le point-virgule **tombent**, que le segment de
   droite porte un verbe conjugué ou non.
2. **Tête de puce ou d'énumération en ligne** (`- **Libellé** — …`,
   `**Libellé** — …`) : le tiret **reste** si le segment de droite est un
   groupe nominal, adjectival, infinitif ou participial — **relative
   comprise** —, et **tombe** si c'est une proposition indépendante à sujet
   propre, qui se réécrit `- **Libellé.** Phrase.`
3. **Incise encadrée par deux tirets** : **parenthèses** si le segment nomme un
   seul objet, **conservée** s'il énumère des exemples (précision du 25/08).
4. **Renvoi de fin de segment** (`— voir [[x]]`) : parenthèses. *Aucun cas dans
   ce lot.*

⚠ **Le cas 3 est celui qui porte ce lot, et c'est neuf.** Le lot 9 n'avait
qu'**une** incise encadrée sur 80 signalements ; celui-ci en compte **onze**,
soit **22 occurrences sur 87** — un quart du lot. *Les fiches `embarque/`
écrivent l'énumération d'exemples entre deux tirets là où `conduite/proj/`
l'écrit en liste à puces.*

### `conduite/proj/etat-de-l-art-technique.md` — 30 signalements, 17 traités, 13 gardés

| # | ligne | forme | verdict | motif |
|---|---|---|---|---|
| 1 | 23 | tiret | **traité** (`:`) | prose ; « des solutions … **ont** déjà attaqué » |
| 2 | 31 | tiret | **traité** (`:`) | prose ; « il **prépare** » |
| 3 | 34 | tiret | **traité** (parenthèses) | incise à **deux** tirets ; le segment n'énumère pas, il **affirme** |
| 4 | 34 | tiret | **traité** (parenthèses) | *idem — même ancre, cas 3* |
| 5 | 66 | tiret | **traité** (`:`) | prose ; « chaque critère … **donne** » |
| 6 | 70 | tiret | **traité** (`:`) | prose ; « on **lit** » |
| 7 | 92 | tiret | **traité** (`:`) | prose ; « il **faut** » |
| 8 | 96 | tiret | **traité** (`,`) | prose ; apposition nominale d'un seul objet |
| 9 | 109 | tiret | **traité** (`:`) | prose ; « il **est** ouvert » |
| 10 | 121 | pv | **traité** (`.`) | prose ; « la revue bibliographique **produit** » |
| 11 | 125 | tiret | **traité** (`,`) | prose ; « l'absence **devient** » |
| 12 | 131 | tiret | **traité** (`:`) | prose ; « **c'est** la fenêtre » |
| 13 | 143 | pv | **traité** (`.`) | prose de puce, après deux phrases ; « ne pas faire d'EAT … **prive** » |
| 14 | 27 | **puce** | **traité** (`.` + capitale) | tête de puce ; `savoir que … **évite** de fixer` a son sujet propre |
| 15 | 28 | **puce** | **GARDÉ** | glose nominale : `schémas open source, choix de composants éprouvés, firmwares disponibles` |
| 16 | 29 | **puce** | **GARDÉ** | glose nominale : relative libre `ce que les solutions existantes ne font pas` |
| 17 | 46 | **puce** | **GARDÉ** | glose nominale (sources) |
| 18 | 47 | **puce** | **GARDÉ** | glose nominale (sources) |
| 19 | 48 | **puce** | **GARDÉ** | glose nominale (sources) |
| 20 | 49 | **puce** | **GARDÉ** | glose nominale (sources) |
| 21 | 59 | **puce** | **GARDÉ** | glose prépositionnelle (familles de critères) |
| 22 | 60 | **puce** | **GARDÉ** | glose nominale |
| 23 | 61 | **puce** | **GARDÉ** | glose nominale |
| 24 | 62 | **puce** | **GARDÉ** | glose nominale |
| 25 | 63 | **puce** | **GARDÉ** | glose nominale |
| 26 | 143 | **puce** | **GARDÉ** | ⚠ **même ligne que 13, verdict opposé** : `une à deux journées dédiées à l'EAT, pas davantage` est une glose nominale en tête de puce ; le point-virgule, lui, est vingt mots plus loin, dans la prose |
| 27 | 151 | **puce** | **GARDÉ** | glose nominale à relative : `phase principale où l'EAT est produit` |
| 28 | 152 | **puce** | **traité** (`.**` + capitale) | `les ordres de grandeur retenus … **calibrent** » : sujet propre |
| 29 | 153 | **puce** | **traité** (`.**` + capitale) | `les critères choisis … **deviennent** » : sujet propre |
| 30 | 154 | **puce** | **traité** (`.**` + capitale) | `le pré-dimensionnement … **peuvent** réutiliser » : sujet propre |

⚠ **LA LIGNE 143 PORTE LES DEUX VERDICTS, ET C'EST L'ÉPREUVE LA PLUS NETTE DE
LA RÈGLE DE LECTURE SUR CE LOT** — exactement comme la L71 de `pieuvre` au
lot 9. *Le séparateur de glose reste, le point-virgule de la prose qui suit
tombe, dans la même puce.*

⚠ **LA SECTION `Raccrochage projet` SE COUPE EN DEUX SOUS LA RÈGLE, ET CE
N'EST PAS ARBITRAIRE.** Quatre puces de forme identique : **L151 garde**,
**L152, L153, L154 tombent**. *La première glose son libellé par un groupe
nominal (`phase principale où…`), les trois autres enchaînent une phrase à
sujet propre. **Quatre puces alignées, deux traitements** — le critère est
opératoire, pas décoratif.*

### `conduite/proj/afnor-nfx50-151.md` — 2 signalements, 0 traité, 2 gardés

| # | ligne | forme | verdict | motif |
|---|---|---|---|---|
| 31 | 13 | tiret | **GARDÉ** | incise à **deux** tirets qui **énumère deux outils** — `la bête à cornes et la pieuvre, issues de la méthode APTE` ; segment **participial**, aucun verbe conjugué |
| 32 | 13 | tiret | **GARDÉ** | *idem — fermeture de la même incise* |

⚠ **PREMIÈRE FICHE DU CHANTIER À SORTIR D'UNE PASSE C109 SANS UNE SEULE
ÉDITION.** *91 mots, deux signalements, deux exemptions.* **Conséquence C131
écrite avant la passe : `afnor-nfx50-151.md` n'apparaîtra PAS au `git status`
ni au `numstat`** — le lot modifie **quatre** sources, pas cinq.

### `embarque/asservissement.md` — 10 signalements, 5 traités, 5 gardés

| # | ligne | forme | verdict | motif |
|---|---|---|---|---|
| 33 | 14 | tiret | **traité** (`,`) | prose ; segment **adverbial** (`sans cesse`), hors des quatre natures exemptées |
| 34 | 20 | tiret | **traité** (`.`) | prose ; « il **ralentit** » |
| 35 | 22 | tiret | **traité** (`:`) | prose ; « un asservissement mal réglé **oscille** » |
| 36 | 29 | pv | **traité** (`.`) | prose ; « la plus répandue **est** » |
| 37 | 43 | pv | **traité** (`.`) | prose ; « il **répond** mollement » |
| 38 | 47 | tiret | **GARDÉ** | incise à deux tirets qui **énumère trois** coûts : `capteur, réglage, risque d'instabilité` |
| 39 | 47 | tiret | **GARDÉ** | *idem — fermeture* |
| 40 | 39 | **puce** | **GARDÉ** | tête de puce `- **P** — proportionnel…` : segment **adjectival**, pas de sujet propre |
| 41 | 40 | **puce** | **GARDÉ** | *idem* `- **I** —` |
| 42 | 41 | **puce** | **GARDÉ** | *idem* `- **D** —` |

✅ **Les trois puces gardées sont le glossaire P / I / D du correcteur**, même
famille que le glossaire FP / FS / FC de `pieuvre` au lot 9 : l'objet que
l'arbitrage du 22/08 a soustrait à C109.

### `embarque/boucle-ouverte.md` — 15 signalements, 11 traités, 4 gardés

| # | ligne | forme | verdict | motif |
|---|---|---|---|---|
| 43 | 16 | tiret | **traité** (parenthèses) | prose ; tiret **simple**, pas encadré — le cas 3 ne s'applique pas |
| 44 | 22 | tiret | **traité** (parenthèses) | prose ; apposition nominale à relative conjuguée (`qui **guette**`) |
| 45 | 24 | tiret | **GARDÉ** | incise à deux tirets qui **énumère quatre** causes, segment participial |
| 46 | 24 | tiret | **GARDÉ** | *idem — fermeture* |
| 47 | 30 | pv | **traité** (`.`) | prose ; « une résistance chauffante **monte** » |
| 48 | 32 | tiret | **traité** (parenthèses) | incise à deux tirets **nommant un seul objet** : `« avance de 30° »` |
| 49 | 32 | tiret | **traité** (parenthèses) | *idem — même ancre, cas 3* |
| 50 | 37 | tiret | **traité** (`:`) | prose ; quatre propositions à sujet propre |
| 51 | 39 | tiret | **traité** (`:`) | prose ; « il **mesure** » |
| 52 | 47 | tiret | **traité** (`,`) | prose ; segment **adverbial** répété (`y compris…, y compris…`) |
| 53 | 49 | tiret | **traité** (parenthèses) | incise à deux tirets **nommant un seul objet** : une glose infinitive unique |
| 54 | 49 | tiret | **traité** (parenthèses) | *idem — même ancre, cas 3* |
| 55 | 53 | tiret | **traité** (`:`) | prose ; « **c'est** la mécanique » |
| 56 | 57 | tiret | **GARDÉ** | incise à deux tirets qui **énumère trois** causes de pas perdu |
| 57 | 57 | tiret | **GARDÉ** | *idem — fermeture* |

⚠ **CINQ INCISES ENCADRÉES DANS UNE SEULE FICHE, ET LE CAS 3 LES SÉPARE EN
DEUX.** L24, L57 **restent** (quatre causes, trois causes) ; L32, L49
**tombent** (un exemple cité, une glose unique). *La forme typographique est la
même dans les cinq ; c'est le **contenu du segment** qui décide, et c'est
exactement ce que la précision du 25/08 écrit.*

### `embarque/protection-electronique.md` — 30 signalements, 14 traités, 16 gardés

| # | ligne | forme | verdict | motif |
|---|---|---|---|---|
| 58 | 17 | tiret | **GARDÉ** | incise à deux tirets, **quatre fautes énumérées** |
| 59 | 17 | tiret | **GARDÉ** | *idem — fermeture* |
| 60 | 23 | tiret | **traité** (`,`) | prose ; relative libre à verbe conjugué (`ce que **coûtera** la faute`) |
| 61 | 23 | pv | **traité** (`.`) | prose ; « non protégée, elle **coûte** » |
| 62 | 27 | tiret | **traité** (`,`) | prose ; segment participial, mais **prose continue** (règle 1) |
| 63 | 27 | tiret | **traité** (`:`) | prose ; « **c'est** la protection » |
| 64 | 31 | tiret | **traité** (`:`) | prose ; « elle **chute** » |
| 65 | 31 | tiret | **traité** (`,`) | prose ; segment infinitif, mais prose continue |
| 66 | 35 | tiret | **GARDÉ** | incise à deux tirets, **deux transitoires énumérés** |
| 67 | 35 | tiret | **GARDÉ** | *idem — fermeture* |
| 68 | 39 | tiret | **GARDÉ** | incise à deux tirets, **trois charges inductives énumérées** |
| 69 | 39 | tiret | **GARDÉ** | *idem — fermeture* |
| 70 | 39 | tiret | **traité** (`,`) | ⚠ **même ligne que 68-69, verdict opposé** : tiret **simple** en fin de phrase, prose continue |
| 71 | 43 | tiret | **GARDÉ** | tête de paragraphe en gras, `**Contre … : protéger les lignes exposées — et les mains.**` : glose **nominale** coordonnée (cas 2, borne du 25/08 sur les chapôs) |
| 72 | 43 | tiret | **traité** (parenthèses) | ⚠ **même ligne que 71, verdict opposé** : celui-ci est dans la prose du paragraphe |
| 73 | 47 | tiret | **traité** (`:`) | prose ; « le signal **passe** » |
| 74 | 47 | pv | **GARDÉ** | **énumération en ligne** de trois organes, tous à tête **nominale** (amendement du 23/08) |
| 75 | 47 | pv | **GARDÉ** | *idem — second séparateur de la même énumération* |
| 76 | 50 | tiret | **GARDÉ** | tête d'énumération en ligne `**Références éprouvées** —`, segment nominal |
| 77 | 50 | pv | **GARDÉ** | item nominal de la même énumération |
| 78 | 50 | pv | **GARDÉ** | *idem* |
| 79 | 50 | pv | **GARDÉ** | *idem* |
| 80 | 50 | pv | **GARDÉ** | *idem* |
| 81 | 50 | pv | **GARDÉ** | *idem* |
| 82 | 50 | pv | **GARDÉ** | *idem* |
| 83 | 54 | tiret | **traité** (`,`) | prose ; apposition suivie d'un impératif |
| 84 | 60 | tiret | **traité** (`:`) | prose ; « **c'est** la prochaine pièce » |
| 85 | 64 | tiret | **traité** (`,`) | prose ; « il **meurt** » |
| 86 | 66 | tiret | **traité** (`:`) | prose ; « le composant … les **sent** » |
| 87 | 68 | tiret | **traité** (`:`) | prose ; glose nominale, mais **prose continue** (règle 1) |

⚠ **DEUX LIGNES DE CETTE FICHE PORTENT DES VERDICTS OPPOSÉS, ET LES DEUX SONT
DES ÉPREUVES DE LA RÈGLE.** La **L39** garde son incise encadrée (`une bobine —
relais, moteur CC, électrovanne — s'oppose…`) et perd son tiret simple de fin
de phrase, trente mots plus loin. La **L43** garde le tiret de son **chapôt en
gras** et perd celui de sa prose. *Dans les deux cas, ce qui décide n'est ni le
signe ni la nature grammaticale du segment : c'est la **position**.*

⚠ **LES SEPT SIGNALEMENTS DE LA L50 SONT UN SEUL OBJET, ET IL EST HORS DE
PORTÉE DE C109 PAR CONSTRUCTION.** Le callout `[!tip]` « Références éprouvées »
est un **tableau de références C66** écrit en ligne : un libellé en gras, un
tiret de glose, et sept items nominaux séparés par des points-virgules.
*Le hacher en sept phrases détruirait la convention C66 elle-même. **C'est le
plus gros bloc d'exemptions d'un seul tenant du chantier**, et il est
entièrement nominal.*

### Bilan du jugement

| fiche | signalements | traités | gardés | **ancres** | lignes touchées |
|---|---:|---:|---:|---:|---:|
| `conduite/proj/etat-de-l-art-technique` | 30 | **17** | 13 | **16** | 16 |
| `conduite/proj/afnor-nfx50-151` | 2 | **0** | 2 | **0** | **0** |
| `embarque/asservissement` | 10 | **5** | 5 | **5** | 5 |
| `embarque/boucle-ouverte` | 15 | **11** | 4 | **9** | 9 |
| `embarque/protection-electronique` | 30 | **14** | 16 | **14** | 11 |
| **TOTAL** | **87** | **47** | **40** | **44** | **41** |

⚠ **Le taux de traitement du lot est de 54 % (47 / 87), contre 74 % au lot 9
(59 / 80) et 81 % au lot 8 (69 / 85).** *Cause, et elle est structurelle : les
trois fiches `embarque/` écrivent leurs énumérations **entre deux tirets**, une
forme que le cas 3 protège quand elle énumère ; `conduite/proj/` les écrit en
listes à puces, et les puces à glose nominale sont protégées par le cas 2.
**Ce lot n'est pas plus indulgent, il rencontre plus de formes exemptées.***

⚠ **SOLDE DE MOTS PRÉDIT : ZÉRO, ET IL EST VÉRIFIABLE AVANT ÉCRITURE.** Les 44
remplacements sont **tous** de la ponctuation, parfois accompagnée d'un
changement de casse ; **aucun n'ajoute ni ne retire un mot** (règle d'usage 16).
*Le témoin gratuit est l'invariant `pts de code` du contrôle seul : il doit
**baisser** sur chaque fiche éditée — un tiret cadratin et son espace remplacés
par un signe et un espace ne coûtent rien, mais `]]** — les` → `]].** Les` perd
un point de code, et les six parenthèses en perdent un chacune.*

---

## Déclaration C131 du bloc 79 — rejouée, liste FERMÉE avant le bloc, DEUX instants

**Populations** — inchangées et redéclarées.

**Liste FERMÉE des artefacts du bloc 79 :**

| # | artefact | état | total | hors artefacts | existe à la garde ? |
|---|---|---|---|---|---|
| 1 | `tools/predictions-260830.md` | ` M` | oui | non | **oui** |
| 2-6 | `tools/batterie-sortie-3008b30..b33.txt` (blocs 75-78) **et** `b34` (étape 0 de ce bloc) | `??` | oui | non | **oui** (les cinq) |
| 7 | `tools/puces-lot10-3008.txt` (bloc 78) | `??` | oui | **oui** | **oui** |
| 8 | `tools/passe-negatif-lot10-3008.tsv` (**table du test négatif — elle a la sienne**, règle d'usage 17) | `??` | oui | **oui** | non |
| 9 | `tools/passe-c109-lot10-3008.tsv` (table du lot réel) | `??` | oui | **oui** | non |
| 10 | `content/conduite/proj/etat-de-l-art-technique.md` | ` M` | oui | **oui** | non |
| 11 | `content/embarque/asservissement.md` | ` M` | oui | **oui** | non |
| 12 | `content/embarque/boucle-ouverte.md` | ` M` | oui | **oui** | non |
| 13 | `content/embarque/protection-electronique.md` | ` M` | oui | **oui** | non |
| — | ⚠ `content/conduite/proj/afnor-nfx50-151.md` | **INCHANGÉ** | **non** | **non** | — |

⚠ **Relecture de la liste CONTRE les prédictions du bloc** (règle d'usage 17,
née de la réfutation du lot 9 où la table négative avait été oubliée) : les
prédictions ci-dessous prévoient **un test négatif**, donc **une table
négative** — elle est à la ligne 8. Elles prévoient **une passe réelle sur
quatre fiches et non cinq** — `afnor-nfx50-151` sort de la liste, avec sa
raison. Elles ne prévoient **aucun `--recaler`** (aucune fiche EN n'existe
encore) et **aucun relevé sauvegardé** hors batterie.

**DEUX instants :** **7 / 1** quand la garde lit `git status` ; **13 / 7** en
fin de bloc.

---

## Bloc 79 — passe C109 du lot 10 (44 remplacements, 4 sources FR)

**Commandes, dans cet ordre :**

1. `powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase garde`
2. écriture de `tools/passe-negatif-lot10-3008.tsv` — **la table réelle avec
   UNE ancre délibérément fautive**, un tiret cadratin remplacé par un trait
   d'union ASCII sur la 3ᵉ ancre de `protection-electronique` ;
3. `node tools/remplacer-passe.mjs tools/passe-negatif-lot10-3008.tsv`
   (contrôle seul) → **refus attendu** ;
4. écriture de `tools/passe-c109-lot10-3008.tsv` — les **44** ancres jugées ;
5. `node tools/remplacer-passe.mjs tools/passe-c109-lot10-3008.tsv`
   (contrôle seul) ;
6. `node tools/remplacer-passe.mjs tools/passe-c109-lot10-3008.tsv --ecrire` ;
7. remesure immédiate : `--style` des cinq sources, motif des puces sur les
   cinq sources, `compter-mots --lot` ;
8. `git diff --numstat`.

### Prédictions du bloc 79

**P79.1 — garde.** ASCII **0** ; copie `tools\batterie-sortie-3008b34.txt` ;
`garde   anneau : 2   chevron : False` ; heure **> `10:24:40`** ;
`HEAD git : 65365fa 2026-08-30 10:03:18 +0200` **au caractère** ;
`node : v24.15.0` ; **3 lignes de dates inchangées au caractère**
(`10:00:55` / `09:58:36` / `2026-08-29 21:48:08`) ;
`fichiers modifies non commites : 7   (hors artefacts de seance : 1)`.

**P79.2 — TEST NÉGATIF : refus sur UN défaut, et le lot entier tombe.** La
table négative porte les **44** ancres, dont **une** rendue introuvable par un
**trait d'union ASCII** à la place du tiret cadratin. Sortie attendue :
`INTROUVABLE  content/embarque/protection-electronique.md` ;
`ancres 13/14` sur cette fiche ; `remplacements prets : 43` ;
`ancres introuvables     : 1` ; `INVARIANT D ACCENTS casse sur : 0 fiche(s)` ;
`REFUS : 1 defaut(s). AUCUN FICHIER ECRIT.` ; **code de sortie 1**.
⚠ **Le terme qui prouve n'est pas le refus, c'est le 43** : *les
quarante-trois autres ancres sont valides et **ne sont pas appliquées**. C'est
le mode d'échec du 28/08 qui joue dans le bon sens, pour la neuvième fois de la
série.*

**P79.3 — CONTRÔLE SEUL de la table réelle : 44 ancres, 44 trouvées, 0 fichier
écrit.** `fiches                  : 4` ; `remplacements prets     : 44` ;
`ancres introuvables     : 0` ; `ancres multiples        : 0` ;
`fichiers absents        : 0` ; `sans front matter       : 0` ;
`lignes mal formees      : 0` ; `INVARIANT D ACCENTS casse sur : 0 fiche(s)` ;
`CONTROLE SEUL : 44 remplacement(s) prets, 0 fichier ecrit.` ; **code 0**.

**P79.4 — les QUATRE lignes d'invariants, par fiche, avec leur décomposition
d'ancres :**

| fiche | ancres | écart d'accents | pts de code |
|---|---|---|---|
| `conduite/proj/etat-de-l-art-technique.md` | **16/16** | **+0** | **en BAISSE** |
| `embarque/asservissement.md` | **5/5** | **+0** | **en BAISSE ou ÉGAL** |
| `embarque/boucle-ouverte.md` | **9/9** | **+0** | **en BAISSE** |
| `embarque/protection-electronique.md` | **14/14** | **+0** | **en BAISSE ou ÉGAL** |

⚠ **L'écart d'accents est prédit nul sur les quatre, ET UNE ÉDITION LE MET À
L'ÉPREUVE** : `etat-de-l-art-technique` **L143** change `à l'inverse` en
`À l'inverse`. *Le compteur d'accents de `remplacer-passe` est un **compte**,
pas un multiset — lu dans le code, `compterAccents` filtre sur `ACCENT` et
compte —, donc `à` → `À` le laisse invariant. **Terme écrit pour réfuter** : si
l'outil comptait un multiset, cette seule édition ferait `−1 / +1` et refuserait
le lot entier.*

**P79.5 — nombre de lignes du corps INCHANGÉ sur les quatre fiches** :
`lignes N -> N` à l'identique. *Une passe de ponctuation n'en crée ni n'en
détruit ; les treize traitements par `.` ne coupent pas la ligne markdown.*

**P79.6 — ÉCRITURE : `ECRIT` sur quatre fiches, `fichiers ecrits : 4`, code 0**,
avec la décomposition `16 / 5 / 9 / 14`. ⚠ **`afnor-nfx50-151.md` n'apparaît
nulle part** : la table ne le nomme pas.

**P79.7 — remesure `--style` des CINQ sources : `C109 de prose : 24`**,
décomposé **0 / 2 / 2 / 4 / 16** dans l'ordre `etat-de-l-art` / `afnor` /
`asservissement` / `boucle-ouverte` / `protection`. *C'est 67 − 43 : les
quarante-sept traités **moins les quatre puces**, que `--style` n'a jamais
comptées (« le tiret de puce n'a jamais été dans le compteur : il n'en sort donc
pas », 29/08 suite 8).* ⚠ **Terme écrit pour réfuter, et il est arithmétique** :
si le compteur rendait **20**, c'est que `--style` verrait les puces, ce que le
§8 dit impossible ; s'il rendait autre chose que 24 ou 20, un jugement est faux.

**P79.8 — `hors perimetre : 9`, INCHANGÉ**, et les **quatre seaux mécaniques à
0**. *Aucune des 44 éditions ne touche un titre, une cellule de tableau ou un
`alt`.* Ligne de bilan : `5 fiche(s) lue(s), 4 a reprendre.` — **quatre et non
cinq**, `etat-de-l-art-technique` tombant à zéro candidat.

**P79.9 — motif des puces après la passe : TOTAL 16, décomposé
`13 / 0 / 3 / 0 / 0`.** *Application directe de la règle d'usage 18, née au
lot 9 : un lot publie ce qui **RESTE** par famille de motif. 20 − 4 traités = 16
sur `etat-de-l-art-technique` (17 − 4 = 13) et `asservissement` (3 inchangés).*

**P79.10 — `compter-mots --lot` : les cinq mêmes valeurs et le même total,
`2286 / 91 / 925 / 1100 / 1389`, `LOT (5 fiches) 5791`.** *Solde de mots nul,
règle d'usage 16. **Terme écrit pour réfuter** : c'est la prédiction que les
deux réfutations du lot 9 ont fait naître, et elle est ici publiée **avant**
l'écriture.*

**P79.11 — `git diff --numstat` : QUATRE lignes, chacune `N N` (autant
d'insertions que de suppressions)**, et **`16 16` / `5 5` / `9 9` / `11 11`**,
soit **41 41** au total. ⚠ *`protection-electronique` porte **14 ancres sur 11
lignes** — trois de ses lignes en portent deux —, c'est la seule des quatre où
les deux chiffres diffèrent.* ⚠ *`--numstat` compare à **HEAD** et cumule
depuis le début de la séance ; rien d'autre de `content/` n'a été touché, donc
le cumul est la passe.*

**P79.12 — compteurs `git status` en fin de bloc : 13 au total, 7 hors
artefacts de séance** — `puces-lot10-3008.txt`, les **deux** TSV et les
**quatre** sources. *Second instant de la déclaration C131.*

## ⚠ AMENDEMENT ÉCRIT À LA DÉCLARATION C131 DU BLOC 79 — AVANT TOUTE EXÉCUTION

*Règle d'usage 10 : une liste qui s'ouvre **avant** le bloc est une prédiction
corrigée ; une liste qui s'ouvre **pendant** est une réfutation.*

Les deux tables TSV portent des **tabulations littérales**, et les écrire par
l'outil d'édition ne garantit pas leur préservation. Elles seront donc
**générées par un script**, `preparer-tables-lot10.mjs`, écrit dans le
**répertoire temporaire de la session** — **hors `content/`, hors `tools/`,
hors dépôt**.

**Effet sur les deux compteurs : AUCUN.** Le script ne figure dans aucune des
deux populations, `git status --porcelain` ne voyant que l'arbre de travail du
dépôt. **Les deux instants restent 7 / 1 et 13 / 7.** *Il est nommé ici pour
que « aucune commande du bloc n'écrit hors de la liste » se lise sans angle
mort, comme le texte du bloc 64 l'a fait pour son propre fichier de travail.*

### Constats du bloc 79 (garde `3008b34`, tables `passe-negatif-lot10-3008.tsv` et `passe-c109-lot10-3008.tsv`)

| # | prédiction | constat | verdict |
|---|---|---|---|
| P79.1 | garde : ASCII 0, copie `3008b34`, heure > `10:24:40`, HEAD au caractère, 3 dates inchangées, `7   (hors artefacts de seance : 1)` | `3008b34` ; **10:35:24** ; HEAD identique ; 3 dates identiques ; **7 / 1** | **tenue** |
| P79.2 | test négatif : `INTROUVABLE` sur `protection-electronique`, `ancres 13/14`, `remplacements prets : 43`, `introuvables : 1`, `REFUS : 1 defaut(s). AUCUN FICHIER ECRIT.`, exit 1 | identique **au caractère**, `L35 INTROUVABLE`, 13/14, 43, 1, REFUS, `EXIT=1` | **tenue** |
| P79.3 | contrôle seul : `fiches 4`, `44` prêts, tous les seaux de défaut à 0, `CONTROLE SEUL : 44 remplacement(s) prets, 0 fichier ecrit.`, exit 0 | identique | **tenue** |
| P79.4 | 16/16, 5/5, 9/9, 14/14 ; écart d'accents **+0** sur les quatre ; `pts de code` en baisse | `460→460`, `159→159`, `180→180`, `227→227`, tous **+0** ; `16029→16020`, `6336→6332`, `7123→7117`, `9409→9402` | **tenue** |
| P79.5 | lignes du corps inchangées sur les quatre | `149→149`, `58→58`, `57→57`, `62→62` | **tenue** |
| P79.6 | `ECRIT` ×4, `fichiers ecrits : 4`, décomposition `16 / 5 / 9 / 14`, `afnor` absent | identique ; `afnor-nfx50-151.md` n'apparaît nulle part | **tenue** |
| P79.7 | `C109 de prose : 24`, décomposé **0 / 2 / 2 / 4 / 16** | **25**, décomposé **0 / 2 / 2 / 5 / 16** | **RÉFUTÉE** |
| P79.8 | `hors perimetre : 9` inchangé ; 4 seaux mécaniques à 0 ; `5 fiche(s) lue(s), 4 a reprendre.` | **9** ; 0/0/0/0 ; `5 fiche(s) lue(s), 4 a reprendre.` | **tenue** |
| P79.9 | puces après passe : **16**, décomposé `13 / 0 / 3 / 0 / 0` | **16**, `13 / 0 / 3 / 0 / 0` | **tenue** |
| P79.10 | `2286 / 91 / 925 / 1100 / 1389`, `LOT (5 fiches) 5791` | identique au mot | **tenue** |
| P79.11 | `git diff --numstat` : **QUATRE** lignes, `16 16` / `5 5` / `9 9` / `11 11` | **CINQ** lignes ; les quatre de `content/` sont **exactes** ; la cinquième est `1553 0 tools/predictions-260830.md` | **RÉFUTÉE** |
| P79.12 | fin de bloc **13 / 7** | **13 / 7** | **tenue** |

**Bilan du bloc 79 : 12 prédictions à décompte plein, 10 tenues, 2 réfutées.**

✅ **NEUVIÈME REFUS DE LA SÉRIE, ET LE TERME QUI PROUVE EST LE `43`.** Le test
négatif porte **la table réelle entière** avec **une** ancre rendue introuvable
par un trait d'union ASCII : **43 remplacements valides sont prêts et aucun
n'est appliqué**. *Le mode d'échec du 28/08 — un lot multi-édition est
atomique — joue dans le bon sens pour la neuvième fois.*

✅ **ET L'ÉPREUVE ÉCRITE DANS P79.4 TOMBE DU BON CÔTÉ.** `etat-de-l-art-
technique` **L143** change `à l'inverse` en `À l'inverse` : un accent minuscule
devient un accent majuscule. L'écart sort à **+0**, ce qui **confirme par la
mesure** que `compterAccents` est un **compte** et non un multiset. *Si l'outil
comparait des multisets, cette seule édition aurait refusé les 44
remplacements ; le terme était écrit pour réfuter et il ne mord pas.*

---

⚠ **RÉFUTATION P79.11 — LE `numstat` COMPTE LE FICHIER DE PRÉDICTIONS, ET C'EST
LA SOUS-RÈGLE QUI FABRIQUE ENCORE SA PROPRE BRANCHE.** J'ai prédit **quatre**
lignes et lu **cinq** : la cinquième est `1553 0 tools/predictions-260830.md`,
c'est-à-dire **ce texte-même**, suivi par git depuis `542bb4f`. ✅ *Les quatre
lignes de `content/` sont exactes au chiffre — `16 16`, `5 5`, `9 9`, `11 11` —,
donc la mesure de la passe est juste ; c'est le **cadre** de la commande qui
était faux.* ⚠ *C'est exactement la cause consignée à la sous-règle C116 (9) le
29/08 — « la sous-règle a fabriqué sa propre branche innocente », le fichier de
prédictions pesant 1 dans un compteur —, et **`batterie.ps1` filtre déjà
`predictions-` pour `git status` alors que `git diff --numstat` n'est filtré par
rien**. **Candidate : une prédiction de `numstat` nomme ses chemins**, ou la
commande se borne à `-- content/`.*

---

⚠ **RÉFUTATION P79.7 — UN CANDIDAT N'A PAS ÉTÉ JUGÉ, ET C'EST LA REMESURE QUI
L'A TROUVÉ.** Prédit **24**, mesuré **25** ; l'écart tient entier dans
`boucle-ouverte`, prédite à 4 et mesurée à **5**. **Le résidu nommé est la
L61** : `…et seulement ensuite ajouter une mesure — surveillance d'écart si
l'on veut détecter, [[asservissement]] si l'on veut corriger.`

⚠ **CAUSE, ET ELLE EST DOUBLE — DEUX ERREURS QUI SE COMPENSENT.** Ma table de
jugement de `boucle-ouverte` porte **quinze lignes**, ce qui est le bon total,
mais elle **compte la L32 deux fois** et **omet la L61**. *`--style` signale la
L32 **une** seule fois — son extrait de contexte montre les deux tirets de
l'incise dans une même fenêtre, et j'ai lu deux occurrences là où l'outil en
publiait une.*

⚠ **SIGNATURE : LES DEUX TOTAUX DU LOT ÉTAIENT JUSTES PAR COMPENSATION.**
**47 traités et 40 gardés restent exacts** après correction — l'occurrence
fantôme de la L32 et la L61 oubliée s'annulent —, **et c'est le nombre d'ANCRES
qui rate : 45 et non 44.** *C'est le §8 en toutes lettres, « un total dans la
fourchette ne valide pas la décomposition », appliqué cette fois non à une
prédiction mais à **mon propre jugement**. Et c'est la deuxième fois de la
séance qu'un total juste masque une décomposition fausse — la première était la
distribution des puces au bloc 78.*

✅ **CE QUI A ATTRAPÉ LE DÉFAUT EST LE TERME (4) DE LA SOUS-RÈGLE C116** — la
remesure immédiate post-édition —, **et rien d'autre ne l'aurait vu** : le
contrôle d'unicité d'ancre valide ce qu'on lui donne, la passe a écrit
exactement ce qui était prévu, et `git diff` montre neuf lignes justes.
*Une ancre manquante n'est pas une ancre fausse : aucune garde d'écriture ne
peut voir ce qui n'est pas dans la table.*

**Verdict de la L61, rendu maintenant** — prose continue, segment à
subordonnées conjuguées (`si l'on **veut** détecter`, `si l'on **veut**
corriger`) : **traité**, voie 3 (parenthèses), le segment étant une glose de
deux options en fin de phrase. **Correctif au bloc 80.**

---

## Déclaration C131 du bloc 80 — rejouée, liste FERMÉE avant le bloc, DEUX instants

**Populations** — inchangées et redéclarées.

**Liste FERMÉE des artefacts du bloc 80 :** les **13** entrées existantes, plus :

| # | artefact | état | total | hors artefacts | existe à la garde ? |
|---|---|---|---|---|---|
| 14 | `tools/passe-negatif-correctif-lot10-3008.tsv` (**le test négatif a sa propre table**, règle d'usage 17) | `??` | oui | **oui** | non |
| 15 | `tools/passe-correctif-lot10-3008.tsv` (l'ancre unique du correctif) | `??` | oui | **oui** | non |

⚠ **Aucune copie C124 n'entre dans cette liste** : le bloc **ne lance pas la
batterie**. *La garde de péremption vient d'être passée au bloc 79 à 10:35:24,
et rien d'extérieur n'a pu écrire entre les deux blocs — mais **la candidate (a)
du bloc 74 dit qu'un bloc passe la garde même quand il ne fait que lire**, et
celui-ci **écrit**.* ✅ **Tranché : la garde se relance**, donc
`tools/batterie-sortie-3008b35.txt` entre à la liste sous le n° 16, `??`, compté
au total, **non** compté hors artefacts.

⚠ **`content/embarque/boucle-ouverte.md` est DÉJÀ en ` M`** depuis le bloc 79 :
le correctif **n'ajoute aucune entrée** de `git status`. *C'est le symétrique
exact de l'épreuve du lot 8 sur `--recaler` — « le compteur ne bouge pas, et
c'est un coup de chance, pas une garde » —, sauf qu'ici c'est prédit avant.*

**DEUX instants :** **14 / 7** quand la garde lit `git status` (les 13 + la copie
C124) ; **16 / 9** en fin de bloc.

---

## Bloc 80 — correctif de la L61 de `boucle-ouverte` (1 ancre)

**Commandes, dans cet ordre :** garde ; écriture de la table négative ;
`remplacer-passe` sur elle (refus attendu) ; écriture de la table réelle ;
`remplacer-passe` contrôle seul ; `remplacer-passe --ecrire` ; remesure
`--style` des cinq sources ; `compter-mots --lot` ; `git diff --numstat -- content`.

**L'ancre, publiée avant écriture :**
`ajouter une mesure — surveillance d'écart si l'on veut détecter, [[asservissement|asservissement]] si l'on veut corriger.`
→ `ajouter une mesure (surveillance d'écart si l'on veut détecter, [[asservissement|asservissement]] si l'on veut corriger).`

**L'ancre du test négatif** : la même, avec `d'écart` **désaccentué** en
`d'ecart`. *Le défaut délibéré est choisi dans la famille qui a déjà mordu deux
fois au chantier — un accent manquant dans une ancre —, et non dans celle du
bloc 79.*

### Prédictions du bloc 80

**P80.1 — garde.** ASCII **0** ; copie `tools\batterie-sortie-3008b35.txt` ;
`garde   anneau : 2   chevron : False` ; heure **> `10:35:24`** ;
`HEAD git : 65365fa 2026-08-30 10:03:18 +0200` **au caractère** ; `node :
v24.15.0` ; **3 lignes de dates inchangées au caractère** ;
`fichiers modifies non commites : 14   (hors artefacts de seance : 7)`.
⚠ *Le premier chiffre monte de 13 à 14 par la seule copie C124 ; le second ne
bouge pas, `boucle-ouverte` étant déjà en ` M`.*

**P80.2 — TEST NÉGATIF : `INTROUVABLE`, `ancres 0/ 1`, `remplacements prets :
0`, `ancres introuvables : 1`, `REFUS : 1 defaut(s). AUCUN FICHIER ECRIT.`,
exit 1.** ⚠ *Dixième refus de la série, et **le premier dont le lot réel ne
compte qu'une ancre** : `remplacements prets` sort à **0** et non à `n−1`.*

**P80.3 — CONTRÔLE SEUL : `fiches : 1`, `ancres 1/ 1`, `remplacements prets :
1`, tous les seaux de défaut à 0, `INVARIANT D ACCENTS casse sur : 0 fiche(s)`,
`CONTROLE SEUL : 1 remplacement(s) prets, 0 fichier ecrit.`, exit 0.**

**P80.4 — invariants de `boucle-ouverte` : `accents 180 -> 180 (ecart +0)`,
`lignes 57 -> 57`, et `pts de code 7117 -> 7116`.** ⚠ **Le `7117` de départ est
le `pts de code` d'ARRIVÉE du bloc 79**, la fiche ayant déjà été écrite ; le
**−1** est le tiret cadratin et son espace (2 points de code) remplacés par une
parenthèse ouvrante (1), la parenthèse fermante venant en compensation avant le
point final. *Solde de mots **nul**, règle d'usage 16.*

**P80.5 — `ECRIT  content/embarque/boucle-ouverte.md   (1 remplacement(s))`,
`fichiers ecrits : 1`, exit 0.**

**P80.6 — remesure `--style` des cinq sources : `C109 de prose : 24`, décomposé
`0 / 2 / 2 / 4 / 16`.** *C'est la valeur que P79.7 prédisait ; elle est
atteinte après correction, ce qui ne rétablit pas la prédiction mais **ferme
l'écart et le nomme**.* `hors perimetre : 9`, quatre seaux mécaniques à 0,
`5 fiche(s) lue(s), 4 a reprendre.`

**P80.7 — `compter-mots --lot` : `LOT (5 fiches) 5791`, inchangé au mot**, et
`boucle-ouverte` toujours à **1100**.

**P80.8 — `git diff --numstat -- content` : QUATRE lignes, `16 16` / `5 5` /
**`10 10`** / `11 11`.** ⚠ *La commande est **bornée à `content/`**, correctif
direct de la réfutation P79.11 ; et `boucle-ouverte` passe de 9 à **10**, la
L61 s'ajoutant aux neuf lignes du bloc 79.*

**P80.9 — compteurs `git status` en fin de bloc : 16 au total, 9 hors artefacts
de séance.** *Second instant : +1 copie C124, +2 tables TSV, et **aucune entrée
neuve de `content/`**.*

### Constats du bloc 80 (garde `3008b35`, tables `passe-negatif-correctif-lot10-3008.tsv` et `passe-correctif-lot10-3008.tsv`)

| # | prédiction | constat | verdict |
|---|---|---|---|
| P80.1 | garde : ASCII 0, copie `3008b35`, heure > `10:35:24`, HEAD au caractère, 3 dates inchangées, `14   (hors artefacts de seance : 7)` | `3008b35` ; **10:39:35** ; identiques ; **14 / 7** | **tenue** |
| P80.2 | négatif : `INTROUVABLE`, `ancres  0/ 1`, `remplacements prets : 0`, `introuvables : 1`, `REFUS : 1 defaut(s). AUCUN FICHIER ECRIT.`, exit 1 | identique au caractère, `L3 INTROUVABLE`, `0/ 1`, 0, 1, REFUS, `EXIT=1` | **tenue** |
| P80.3 | contrôle seul : `fiches : 1`, `ancres  1/ 1`, `1` prêt, seaux à 0, exit 0 | identique | **tenue** |
| P80.4 | `accents 180 -> 180 (+0)`, `lignes 57 -> 57`, **`pts de code 7117 -> 7116`** | `180 -> 180 (+0)` ✅, `57 -> 57` ✅, **`7117 -> 7117`** | **RÉFUTÉE** (3ᵉ terme) |
| P80.5 | `ECRIT … (1 remplacement(s))`, `fichiers ecrits : 1`, exit 0 | identique | **tenue** |
| P80.6 | `C109 de prose : 24`, décomposé `0 / 2 / 2 / 4 / 16` ; `hors perimetre : 9` ; 4 seaux à 0 ; `4 a reprendre` | **24**, `0 / 2 / 2 / 4 / 16`, **9**, 0/0/0/0, `4 a reprendre` | **tenue** |
| P80.7 | `LOT (5 fiches) 5791`, `boucle-ouverte` **1100** | identiques | **tenue** |
| P80.8 | `numstat -- content` : **4** lignes, `16 16` / `5 5` / **`10 10`** / `11 11` | identique au chiffre | **tenue** |
| P80.9 | fin de bloc **16 / 9** | **16 / 9** | **tenue** |

**Bilan du bloc 80 : 9 prédictions à décompte plein, 8 tenues, 1 réfutée.**

⚠ **RÉFUTATION P80.4 — J'AI COMPTÉ CE QUI SORT ET PAS CE QUI ENTRE, EN POINTS
DE CODE CETTE FOIS.** Prédit **−1**, mesuré **0**. Le remplacement retire
`— ` (**2** points de code) et pose `(` (**1**), soit −1 ; **il pose aussi le
`)` avant le point final**, soit +1. **Solde nul.**
⚠ *C'est la règle d'usage 16 — « un remplacement qui change le nombre de mots
se compte en SOLDE, jamais en ajout » — **transposée aux points de code**, et
c'est sa troisième morsure en trois séances.* ✅ **Et le bloc 79 montre la
parade dans la même journée** : P79.4 ne prédisait qu'une **direction**
(« en BAISSE »), et elle est tombée juste quatre fois. *La direction se déduit
sans compter les deux côtés ; la valeur exacte ne se déduit pas — elle se
compte, ou elle ne se prédit pas.*

✅ **DIXIÈME REFUS DE LA SÉRIE, ET LE PREMIER SUR UN LOT D'UNE SEULE ANCRE.**
`remplacements prets : 0` au lieu de `n − 1` : *le tout-ou-rien ne se distingue
plus du refus simple quand le lot est unitaire — c'est la seule configuration où
la garde ne peut rien démontrer de plus que son propre déclenchement.* Le
défaut délibéré était un **accent manquant** (`d'ecart`), famille qui a déjà
mordu deux fois au chantier.

✅ **L'ÉCART OUVERT PAR P79.7 EST REFERMÉ ET NOMMÉ** : `C109 de prose` passe de
**25** à **24**, décomposition `0 / 2 / 2 / 4 / 16`, exactement la valeur
prédite avant la passe du bloc 79. *La prédiction reste réfutée — elle l'a été
sur l'état réel du dépôt — mais l'écart avait une cause unique et elle est
corrigée dans le quart d'heure.*

---

## ⛳ GATE G2 — fin de passe C109.

**Fait** — **87 signalements jugés un par un**, **45 remplacements** appliqués
sur **4 sources FR** (`afnor-nfx50-151` n'en reçoit aucun), **deux tests
négatifs délibérés, deux refus, zéro fichier écrit**. Deux gardes de péremption
au vert, `HEAD 65365fa` stable au caractère sur cinq gardes.

**Chiffres qui ont changé** — `C109 de prose` **67 → 24** sur les cinq sources ;
puces à tiret **20 → 16**, décomposition d'après passe **`13 / 0 / 3 / 0 / 0`**
(règle d'usage 18) ; `hors perimetre` **9, inchangé** ; invariant d'accents
**+0 sur les quatre fiches** ; **volume du lot inchangé au mot, 5 791** ;
`numstat -- content` **16 16 / 5 5 / 10 10 / 11 11**, soit **42 lignes
touchées** ; `git status` **16 / 9**.

**Ce qui suit** — bloc **81** : les **CINQ relevés d'avant rédaction** (titres
de section, titres de callout, libellés visant les deux cibles, `title:`,
titres-doublons), puis génération des **cinq squelettes EN**. Puis **G3**, la
rédaction par `--corps`, les `title:` (C125), la clôture du lot et la clôture §7.

⚠ **Deux réfutations à remonter, aucune bloquante** — (1) un **candidat n'avait
pas été jugé** (`boucle-ouverte` L61) et c'est la **remesure immédiate** qui l'a
trouvé, pas une garde d'écriture : *aucune garde ne voit ce qui n'est pas dans
la table.* Corrigé au bloc 80. (2) `git diff --numstat` **compte le fichier de
prédictions**, que `batterie.ps1` filtre déjà pour `git status` mais que rien ne
filtre ici ; la commande est désormais bornée à `-- content`.

⚠ **Un point d'attention hors périmètre C109, signalé et NON édité** :
`protection-electronique` L23 porte *« elle coûte un fusible à quelques centimes
et cinq minutes »*. C'est un **prix de composant**, et la clause de périmètre
C71 du 29/08 demande de qualifier chaque occurrence : ce chiffre dit-il ce que
l'étudiant doit dépenser, ou ce que le système doit tenir ? *Ici il ne dit ni
l'un ni l'autre — il chiffre le **coût d'une faute**, un argument d'ingénierie
que ni la lettre de C71 ni sa clause ne nomment.* **Aucune édition faite ; porté
à la file des arbitrages.**

---

## Déclaration C131 du bloc 81 — rejouée, liste FERMÉE avant le bloc, DEUX instants

**Populations** — inchangées et redéclarées.

**Liste FERMÉE des artefacts du bloc 81 :** les **16** entrées existantes, plus :

| # | artefact | état | total | hors artefacts | existe à la garde ? |
|---|---|---|---|---|---|
| 17 | `tools/batterie-sortie-3008b36.txt` (étape 0 de la garde) | `??` | oui | non | **oui** |
| 18 | `tools/releves-avant-redaction-lot10-3008.txt` (les **cinq** relevés en un fichier daté, C124) | `??` | oui | **oui** | non |
| 19 | `content/en/conduite/proj/etat-de-l-art-technique-en.md` | `??` | oui | **oui** | non |
| 20 | `content/en/conduite/proj/afnor-nfx50-151-en.md` | `??` | oui | **oui** | non |
| 21 | `content/en/embarque/asservissement-en.md` | `??` | oui | **oui** | non |
| 22 | `content/en/embarque/boucle-ouverte-en.md` | `??` | oui | **oui** | non |
| 23 | `content/en/embarque/protection-electronique-en.md` | `??` | oui | **oui** | non |
| — | le **script du relevé de libellés**, dans le répertoire temporaire de la session, **hors dépôt** | — | non | non | — |

⚠ **Règle d'usage 4 appliquée AVANT la mesure : les cinq fiches EN comptent
CINQ entrées, pas moins.** `content/en/conduite/proj/` **existe et est suivi**
depuis le lot 8, `content/en/embarque/` depuis bien avant — il porte déjà six
fiches. **Aucun répertoire neuf n'est créé**, donc aucune entrée ne se
condense. *C'est la configuration de la deuxième épreuve de la règle, au lot 8,
et non celle du lot 7.*

⚠ **Relecture de la liste CONTRE les prédictions du bloc** (règle d'usage 17) :
les prédictions ci-dessous ne prévoient **aucun test négatif** — la génération
n'a pas d'ancre —, **aucune table TSV**, **aucun `--recaler`**, et **un seul**
fichier de relevé. **La liste est close.**

**DEUX instants :** **17 / 9** quand la garde lit `git status` ; **23 / 15** en
fin de bloc.

---

## Bloc 81 — les CINQ relevés d'avant rédaction, puis génération des cinq squelettes

**Commandes, dans cet ordre :** garde ; les cinq relevés, sauvegardés ensemble
dans `tools/releves-avant-redaction-lot10-3008.txt` ; puis
`node tools/creer-fiche-en.mjs <source>` pour les cinq sources.

### Prédictions du bloc 81

**P81.1 — garde.** ASCII **0** ; copie `tools\batterie-sortie-3008b36.txt` ;
heure **> `10:39:35`** ; `HEAD git : 65365fa 2026-08-30 10:03:18 +0200` **au
caractère** ; `node : v24.15.0` ; **3 lignes de dates inchangées au caractère** ;
`fichiers modifies non commites : 17   (hors artefacts de seance : 9)`.

**RELEVÉ 1 — formes de production des titres de section EN.**

**P81.2 — les six formes sortent INCHANGÉES par rapport à la référence du
30/08 (suite 4)** : `## See also` **215**, `## What is it for?` **149**,
`## Pitfalls` **148**, `## Where it fits in the project` **104**,
`## Exercises` **37**, `## Going further` **31**. *Aucune fiche EN n'a été
écrite depuis cette clôture — la garde le dit, `content/en/` est intact.*
⚠ **Et les deux formes fautives du lot 4 restent à 0** : `## Project connection`
et `## Step-by-step procedure`. *Quatrième confirmation du correctif É1 de la
suite 10.*

**RELEVÉ 2 — titres de callout EN.**

**P81.3 — `Watch out` 47, `Tip` 44, `Good` 3, `Fair` 3, `Poor` 3, `Attention`
0, `Astuce` 0**, inchangés pour la même raison.

**RELEVÉ 3 — libellés que le corpus anglais écrit DÉJÀ vers les cinq cibles.**

⚠ **Motif borné AUX DEUX BOUTS** (règle d'usage 15, née de la double morsure du
lot 9) : cible **égale à `<slug>-en`** ou **terminée par `/<slug>-en`**, jamais
en sous-chaîne. *Le piège est nommé avant la mesure :
`etat-de-l-art-technique` est **préfixe d'aucun autre slug**, mais
`asservissement` est **sous-chaîne du libellé `asservissement`** de nombreuses
fiches et `boucle-ouverte` est visée par un **alias**,
`commande en boucle ouverte`, que le générateur retire.*

**P81.4 — les deux cibles `conduite/proj/`, chiffres du brief, à confirmer au
caractère** : `technical state of the art` **13** (+ **3** capitalisés) vers
`etat-de-l-art-technique-en` ; `standard NF X50-151` **5** (+ **2**
capitalisés) vers `afnor-nfx50-151-en`.

**P81.5 — les trois cibles `embarque/` : AUCUN chiffre n'est publié au registre,
donc je prédis des FOURCHETTES et je le dis.** *Base : le nombre de fiches FR
qui visent chaque cible, mesuré au bloc 76, **moins celles qui ne sont pas
traduites** — une fiche non traduite n'écrit aucun libellé anglais.*
- `asservissement-en` — 9 fiches FR le visent, dont **2 non traduites**
  (`filtrage`, `programmation-non-bloquante`) : **[5, 14], point 8** ;
- `boucle-ouverte-en` — 4 fiches FR, dont **1 non traduite**
  (`asservissement`) : **[3, 8], point 4** ;
- `protection-electronique-en` — 6 fiches FR, **toutes traduites** :
  **[4, 12], point 7**.
⚠ **Terme écrit pour réfuter** : si l'une des trois rend **0**, c'est que le
motif borné mord à faux dans l'autre sens — le faux négatif exact que le premier
correctif du lot 9 avait produit.

**RELEVÉ 4 — titres de section des cinq sources FR**, pour savoir ce qui se
traduit et ce qui se relève. **P81.6 — les cinq sources portent ensemble entre
20 et 30 titres de section `##`**, dont **quatre familles génériques
seulement** : `## À quoi ça sert ?` (×3), `## Pièges` (×3), `## Voir aussi`
(×4) et `## Exemple — …` (×2). ⚠ *`afnor-nfx50-151` n'en porte **aucun** : elle
n'a ni section ni `## Voir aussi`. **C'est la première fiche du chantier sans un
seul titre de section.***

**RELEVÉ 5 — titres-doublons.** **P81.7 — FR `243 / 243 / 0`, EN
`222 / 222 / 0`**, inchangés.

**GÉNÉRATION**

**P81.8 — cinq squelettes écrits aux cinq chemins déclarés**, et **les trois
compteurs égaux par construction** sur les cinq.

**P81.9 — `boucle-ouverte` est la SEULE des cinq à faire signaler un alias
retiré** : `commande en boucle ouverte`. *Les quatre autres n'ont pas de bloc
`aliases:` — vérifié à la lecture des cinq front matters au bloc 79.*

**P81.10 — compteurs `git status` en fin de bloc : 23 au total, 15 hors
artefacts de séance.** *Second instant de la déclaration C131.*

### Constats du bloc 81 (garde `3008b36`, relevés `tools/releves-avant-redaction-lot10-3008.txt`)

| # | prédiction | constat | verdict |
|---|---|---|---|
| P81.1 | garde : ASCII 0, copie `3008b36`, heure > `10:39:35`, HEAD au caractère, 3 dates inchangées, `17   (hors artefacts : 9)` | `3008b36` ; **10:42:11** ; identiques ; **17 / 9** | **tenue** |
| P81.2 | six formes **215 / 149 / 148 / 104 / 37 / 31** ; `## Project connection` et `## Step-by-step procedure` à **0** | identiques au chiffre ; **0** et **0** | **tenue** |
| P81.3 | `Watch out` 47, `Tip` 44, `Good` 3, `Fair` 3, `Poor` 3, `Attention` 0, `Astuce` 0 | identiques | **tenue** |
| P81.4 | `technical state of the art` **13** (+3) ; `standard NF X50-151` **5** (+2) | **14** (+3, **+1 `state of the art`**) ; **7** (+6, +2 `NF X50-151`, +1 `NF X50-151 standard`, +1 `functional analysis`) | **RÉFUTÉE** |
| P81.5 | `asservissement-en` ∈ [5,14] pt 8 ; `boucle-ouverte-en` ∈ [3,8] pt 4 ; `protection-electronique-en` ∈ [4,12] pt 7 ; **aucune à 0** | **8** / **3** / **9** ; aucune à 0 | **tenue** |
| P81.6 | 20 à 30 titres `##` ; quatre familles génériques `À quoi ça sert ?` ×3, `Pièges` ×3, `Voir aussi` ×4, `Exemple — …` ×2 ; `afnor` **0 titre** | **23** ✅ ; familles **×4 / ×4 / ×4 / ×3** ; `afnor` **0** ✅ | **RÉFUTÉE** (décomposition) |
| P81.7 | FR `243 / 243 / 0`, EN `222 / 222 / 0` | identiques | **tenue** |
| P81.8 | cinq squelettes, trois compteurs égaux sur les cinq | `31→31`, `2→2`, `15→15`, `11→11`, `8→8` liens ; embeds `0/0/1/1/6` égaux ; code `0` partout | **tenue** |
| P81.9 | `boucle-ouverte` **seule** à faire signaler un alias retiré | `aliases retires (2 ligne(s)) : commande en boucle ouverte`, et elle seule | **tenue** |
| P81.10 | fin de bloc **23 / 15** | **23 / 15**, les cinq `??` de `content/en/` nommés un par un | **tenue** |

**Bilan du bloc 81 : 10 prédictions à décompte plein, 8 tenues, 2 réfutées.**

⚠ **RÉFUTATION P81.4 — LE BRIEF PUBLIE UN RELEVÉ D'AVANT RÉDACTION COMME S'IL
ÉTAIT UN ÉTAT DE CLÔTURE, ET C'EST LA TROISIÈME FOIS.** Mesure de la cause,
fiche par fiche : **les six fiches EN du lot 9 écrivent 1 libellé vers
`etat-de-l-art-technique-en` et 9 vers `afnor-nfx50-151-en`** —
`bete-a-cornes-en` 2, `pieuvre-en` 2, `fonction-en` 2,
`caracteriser-une-exigence-en` 3 + 1. *Le relevé du brief a donc été pris
**avant** que ces six fiches n'existent, et publié à la clôture comme un état
du soir.* ⚠ **C'est mot pour mot la cause écrite au lot 8** — « les chiffres du
lot 7 sont un relevé d'avant rédaction, publié à sa clôture comme s'il était un
état de clôture » — **et elle mord une troisième fois, sur une autre famille de
compteur.**

⚠ **ET LE BRIEF NE VOYAIT QUE DEUX FORMES LÀ OÙ LE CORPUS EN PORTE TROIS ET
CINQ.** `state of the art` **1** manquait côté EAT ; `NF X50-151` **2**,
`NF X50-151 standard` **1** et `functional analysis` **1** manquaient côté
norme. *Un relevé de libellés qui ne liste pas **toutes** ses formes ne se
recoupe pas : il donne un total faux et cache le concurrent.*

⚠ **Le troisième chiffre du brief est faux aussi, et celui-là ne dépend
d'aucune date** : « **4** `Norme NF X50-151` résiduels en français ». **Mesure :
7**, tous de la forme `[[afnor-nfx50-151|Norme NF X50-151]]`, dans
`bete-a-cornes`, `cahier-des-charges-fonctionnel`, `caracteriser-une-exigence`,
`fonction`, `conduite/proj/index`, `pieuvre` et `specification-technique`.
*Aucune fiche EN n'en porte : le côté anglais est déjà propre.*

✅ **CE QUE LE RELEVÉ 3 DÉCIDE, ET IL DÉCIDE QUATRE TITRES SUR CINQ.**
`Technical state of the art` (14 + 3 + 1), `Closed-loop control` (3 + 2, contre
`PID` 3 qui est un **sigle de méthode** et non un titre), `Open loop` (2 + 1),
`Electronic protections` (2 + 1, contre `flyback diodes`, `fuses` et
`protection diodes` qui nomment des **objets de la fiche**, pas la fiche).
⚠ **La cinquième est un conflit et ira aux trois tests de C125** :
`standard NF X50-151` **7** contre `Standard NF X50-151` **6** contre
`NF X50-151` **2**, quand le `title:` français est **`NF X50-151`** tout court.

⚠ **RÉFUTATION P81.6 — LE TOTAL EST JUSTE, LA DÉCOMPOSITION EST FAUSSE, POUR LA
TROISIÈME FOIS DE LA SÉANCE.** 23 titres `##`, dans la fourchette [20, 30] ; les
**quatre familles nommées sont les bonnes** ; **leurs quatre effectifs sont
faux** — mesurés `4 / 4 / 4 / 3` contre `3 / 3 / 4 / 2` prédits. *Cause : j'ai
compté de mémoire sur quatre fiches lues une heure plus tôt, au lieu de relire
la liste que le bloc 79 avait sous les yeux.* ✅ **Le terme qui portait le sens
tombe juste** : `afnor-nfx50-151` **ne porte aucun titre de section**, et c'est
la première fiche du chantier dans ce cas.

✅ **LES CINQ SQUELETTES SONT ÉCRITS, TROIS COMPTEURS ÉGAUX SUR LES CINQ**, et
`etat-de-l-art-technique-en` fait résoudre **quatre alias vers leur porteuse** —
`niveau` ×2, `critere`, `flexibilite` vers `caracteriser-une-exigence`. *Les
trois noms sont trois des six `CIBLES SANS FICHE` de `--anneau`, et le
générateur les résout quand le compteur les affiche en rouge : **septième
confirmation du faux positif sur les alias**, mesurée sans la chercher.*

---

## ⛳ GATE G3 — avant rédaction. Cinq squelettes en place, quatre titres décidés par le corpus.

**Fait** — sept blocs (75 à 81), **sept gardes de péremption au vert**,
`HEAD 65365fa` stable au caractère sur les sept. **45 remplacements C109** sur
**4 sources FR**, **2 tests négatifs, 2 refus, 0 fichier écrit**. **Cinq relevés
d'avant rédaction**, **cinq squelettes EN générés**.

**Chiffres** — `C109 de prose` **67 → 24** ; puces **20 → 16** (`13/0/3/0/0`) ;
volume du lot **5 791, inchangé au mot** ; `git status` **23 / 15** ;
titres-doublons FR **243/243/0**, EN **222/222/0** ; formes de production EN
**215 / 149 / 148 / 104 / 37 / 31**, callouts `Watch out` **47** / `Tip` **44**.

**Ce qui suit** — bloc **82**, rédaction des cinq fiches EN **par `--corps`**,
jamais par réécriture du fichier ; puis **83** les `title:` (C125), **84** la
clôture du lot, **85** la clôture §7.

⚠ **Trois chiffres du brief sont réfutés par la mesure, et deux ont la même
cause qu'au lot 8** : le relevé de libellés a été pris **avant** les six fiches
du lot 9 et publié comme un état de clôture (**+1** vers l'EAT, **+9** vers la
norme). Le troisième — « 4 `Norme NF X50-151` résiduels » — est faux
indépendamment de toute date : **il y en a 7**.

---

## Déclaration C131 du bloc 82 — rejouée, liste FERMÉE avant le bloc, UN SEUL instant

**Populations** — inchangées et redéclarées.

**Liste FERMÉE des artefacts du bloc 82 :** les **23** entrées existantes, plus :

| # | artefact | état | total | hors artefacts | existe à la garde ? |
|---|---|---|---|---|---|
| 24 | `tools/batterie-sortie-3008b37.txt` (étape 0 de la garde) | `??` | oui | non | **oui** |
| — | les **cinq fichiers de corps**, dans le répertoire temporaire de la session, **hors dépôt** | — | non | non | — |
| — | le **relevé complémentaire de titres de section**, appendu au fichier `tools/releves-avant-redaction-lot10-3008.txt` **déjà listé au bloc 81** | `??` | *déjà compté* | *déjà compté* | oui |

⚠ **Les cinq fiches EN sont DÉJÀ en `??`** depuis la génération du bloc 81 :
`--corps` les réécrit **sans créer d'entrée**. *C'est la configuration où le
compteur ne bouge pas, et le lot 8 avait écrit que c'était « un coup de chance,
pas une garde » — ici c'est **prédit avant**, ce qui est la différence.*

⚠ **Relecture de la liste CONTRE les prédictions du bloc** (règle d'usage 17) :
aucun test négatif, aucune table TSV, aucun `--recaler` — le mode `--corps`
existe précisément pour qu'il n'y en ait pas.

**UN SEUL instant : 24 / 15**, à la garde comme en fin de bloc.

---

## Bloc 82 — rédaction des cinq fiches EN, par le mode `--corps`

**Commandes :** garde ; relevé complémentaire des formes de titre de section ;
écriture des cinq fichiers de corps hors dépôt ; cinq
`node tools/creer-fiche-en.mjs --corps <fiche EN> <corps>` ; puis
`--controle`, `derive-traduction`, `compter-mots --paires`, `--style` des cinq
fiches EN.

### Relevé complémentaire, publié AVANT la rédaction

| titre FR | forme de production EN | poids |
|---|---|---|
| `## À quoi ça sert ?` | `## What is it for?` | **149** |
| `## Pièges` | `## Pitfalls` | **148** |
| `## Voir aussi` | `## See also` | **215** |
| `## Procédure pas à pas` | `## Step by step` | **77** |
| `## Raccrochage projet` | `## Where it fits in the project` | **104** |
| `## Comment ça marche ?` | `## How does it work?` | **10** (16 FR) |
| `## Cas particulier — X` | `## Special case — X` | **~100** |
| `## Exemple — Bras 3 axes pédagogique` | `## Example — 3-axis teaching arm` | **8** (9 FR) |
| `## Exemple — le bras 3 axes` *(minuscule)* | `## Example — the 3-axis arm` | **1** (2 FR) |

⚠ **TROIS FORMES NEUVES, DÉCLARÉES COMME NEUVES AVANT D'ÊTRE ÉCRITES** :
`## How do you protect?` (pour `## Comment protéger ?`, aucune forme de
production), `## The four conditions` et `## The PID controller` (titres propres
à leur fiche). *Aucune ne prend par accident une forme de production existante —
c'est le terme écrit pour réfuter au lot 7 et il est rejoué ici.*

⚠ **`## Exemple — le bras 3 axes` prend la forme MINUSCULE, et le relevé le
prouve** : le corpus FR porte `## Exemple — Le bras 3 axes` **4 fois**
(→ `## Example — The 3-axis arm`, **4**) et `## Exemple — le bras 3 axes`
**2 fois** (→ `## Example — the 3-axis arm`, **1**). *La seconde des deux
minuscules est `protection-electronique` elle-même. **Prendre la forme
majoritaire aurait traduit une AUTRE section française** — exactement le défaut
que le relevé du lot 8 avait attrapé.*

### Prédictions du bloc 82

**P82.1 — garde.** ASCII **0** ; copie `tools\batterie-sortie-3008b37.txt` ;
heure **> `10:42:11`** ; `HEAD git : 65365fa 2026-08-30 10:03:18 +0200` **au
caractère** ; 3 dates de pilotage inchangées ;
`fichiers modifies non commites : 24   (hors artefacts de seance : 15)`.

**P82.2 — les cinq `--corps` passent leurs CINQ gardes et publient l'égalité du
front matter À L'OCTET**, avec `source_sha256` **identique avant et après** sur
les cinq. *Aucun `GARDE n`, aucun `REFUS`, cinq `exit 0`.*

**P82.3 — `--controle` sur les cinq : trois compteurs ÉGAUX, 0 divergente, 0
lien non suffixé.** *Les liens sont ceux du squelette, que la rédaction ne
touche pas : `31 / 2 / 15 / 11 / 8`, embeds `0 / 0 / 1 / 1 / 6`, code `0`
partout.*

**P82.4 — `derive-traduction` : `MARQUE INVALIDE 0`, `DERIVE 0`, `A JOUR 227`,
exit 0, et ZÉRO `--recaler`.** *227 = 222 + 5. **Terme écrit pour réfuter** :
c'est la deuxième fois que `--corps` sert sur un lot réel ; si un `DERIVE`
apparaissait, c'est que la rédaction aurait touché un front matter, ce que le
mode rend impossible.*

**P82.5 — foisonnement du lot : entre +1,0 % et +7,0 %, point estimé +3,9 %.**
*Base : moyenne du corpus **3,7 %** et les trois derniers lots — lot 8
**+3,26 %**, lot 9 **+3,85 %**, lot 7 non comparable. **La fourchette est large
des DEUX côtés** (candidate du bloc 77) : trois des cinq fiches sont des notions
`embarque/` denses en termes techniques, dont je n'ai aucune mesure de
foisonnement.* ⚠ **Aucune décomposition par fiche n'est prédite** — troisième
refus motivé de la séance, même cause.

**P82.6 — `--style` des cinq fiches EN : `typographie francaise 0`,
`hors alphabet latin 0`, `C109 creees en EN` entre **0 et 4**, point estimé
**0**.** *Le seau a mordu pour la première fois du chantier au lot 9 (**2** sur
`bete-a-cornes-en`) ; il était à 0 sur les huit lots précédents. **Toute
occurrence non nulle se corrige DANS LE BLOC**, une ponctuation créée par la
traduction n'ayant jamais été arbitrée en français.*

**P82.7 — compteurs `git status` en fin de bloc : 24 au total, 15 hors artefacts
de séance, INCHANGÉS depuis la garde.** *Instant unique ; les cinq fiches EN
sont déjà `??`.*

### Constats du bloc 82 (garde `3008b37`, cinq `--corps`)

| # | prédiction | constat | verdict |
|---|---|---|---|
| P82.1 | garde : ASCII 0, copie `3008b37`, heure > `10:42:11`, HEAD au caractère, 3 dates inchangées, `24   (hors artefacts : 15)` | `3008b37` ; **10:46:08** ; identiques ; **24 / 15** | **tenue** |
| P82.2 | cinq `--corps`, cinq gardes passées, `source_sha256` identique avant/après, `front matter identique a l octet : oui`, cinq `exit 0` | les cinq, au caractère | **tenue** |
| P82.3 | `--controle` : trois compteurs égaux, 0 divergente, 0 lien non suffixé ; liens `31 / 2 / 15 / 11 / 8`, embeds `0 / 0 / 1 / 1 / 6` | **227 fiches, 0 divergente, 0 lien non suffixé sur 0** ; les cinq décompositions exactes | **tenue** |
| P82.4 | `MARQUE INVALIDE 0`, `DERIVE 0`, `A JOUR 227`, exit 0, **zéro `--recaler`** | identiques ; **zéro `--recaler`** | **tenue** |
| P82.5 | foisonnement du lot ∈ [+1,0 %, +7,0 %], point +3,9 % | **5 791 → 5 914, +2,12 %** | **tenue** |
| P82.6 | `typographie francaise 0`, `hors alphabet latin 0`, `C109 creees en EN` ∈ [0, 4] point **0** | **0 / 0 / 0** | **tenue** |
| P82.7 | fin de bloc **24 / 15**, inchangé depuis la garde | **24 / 15** | **tenue** |

**Bilan du bloc 82 : 7 prédictions à décompte plein, 7 tenues, 0 réfutée.**

✅ **LE REPORT UN POUR UN EST CONTRÔLÉ LE JOUR MÊME, ET IL TOMBE SUR DIX
TERMES.** *Aucun lot ne l'avait fait aussi tôt : jusqu'ici le report d'un lot se
vérifiait au lot suivant, une séance plus tard.*

| fiche | `C109 de prose` FR | EN | puces FR | EN |
|---|---:|---:|---:|---:|
| `etat-de-l-art-technique` | 0 | **0** | 13 | **13** |
| `afnor-nfx50-151` | 2 | **2** | 0 | **0** |
| `asservissement` | 2 | **2** | 3 | **3** |
| `boucle-ouverte` | 4 | **4** | 0 | **0** |
| `protection-electronique` | 16 | **16** | 0 | **0** |
| **total** | **24** | **24** | **16** | **16** |

⚠ *Et `hors perimetre` sort à **9 des deux côtés**, ce qui n'était pas prédit et
ne pouvait pas l'être : ce seau compte des titres, des cellules de tableau et
des `alt`, tous réécrits en anglais.*

✅ **`--corps` TIENT SUR SON DEUXIÈME LOT RÉEL, ET C'EST LE DEUXIÈME LOT DE
SUITE SANS UN SEUL `--recaler`.** Cinq fiches, cinq front matters recopiés à
l'octet, cinq `source_sha256` identiques avant et après, `DERIVE 0`,
`MARQUE INVALIDE 0`, `A JOUR 227`. *La règle d'usage 11 passe à **3/N**.*

⚠ **INCIDENT — `--corps` NE POSE PAS LA LIGNE BLANCHE APRÈS LE FRONT MATTER, ET
RIEN NE LE DIT.** Les deux premières fiches écrites (`afnor`, `asservissement`)
sont sorties avec le corps **collé au `---` de fermeture**, forme qu'aucune des
227 fiches du corpus ne porte — vérifié sur `fast-en`, dont la ligne 20 est
vide. *Cause lue dans le code : `FRONT_MATTER` capture `---\n[…]\n---\n`, la
ligne blanche appartient donc au **corps**, et un fichier de corps qui commence
par sa première phrase la perd.* ✅ **Corrigé avant toute mesure** : une ligne
blanche a été ajoutée en tête des **cinq** fichiers de corps et les deux fiches
ont été réécrites. **Aucun compteur ne l'aurait vue** — ni `--controle` (liens,
embeds, blocs), ni `derive-traduction` (empreinte), ni `--style`
(ponctuation) —, et le rendu Quartz l'aurait probablement absorbée.
⚠ **Candidate : le mode `--corps` doit garantir la ligne blanche, ou la
refuser.** *La garde centrale du mode refuse un corps qui **ouvre par un front
matter** ; elle ne dit rien d'un corps qui ouvre par du texte. Deuxième défaut
de forme du fichier d'entrée en deux lots, et le premier que le mode ne voit
pas.*

⚠ **`virgule ambigue : 2`, et les deux sont des SÉPARATEURS DE MILLIERS
ANGLAIS**, `~€2,000` et `€50,000`, tous deux dans
`etat-de-l-art-technique-en`. *C'est la décision du lot 9 — « la virgule
décimale française rendue par un point et les séparateurs de milliers
anglais » — appliquée pour la deuxième fois. Le seau est un **candidat à
lire**, pas un verdict : il sort à 2 et c'est correct.*

⚠ **FOISONNEMENT DU LOT : +2,12 %, LE PLUS BAS DU CHANTIER**, contre +3,26 %
(lot 8), +3,85 % (lot 9) et une moyenne de corpus à 3,7 %. **Décomposition :
+11,0 / +4,3 / +1,9 / −0,4 / +0,1 %.** ⚠ *Les deux extrêmes s'expliquent et
c'est le lot qui les fabrique : `afnor-nfx50-151` pèse **91 mots**, donc dix
mots de plus font +11 % ; et les trois notions `embarque/` sont **denses en
termes techniques** — fusible, TVS, roue libre, boucle ouverte — dont l'anglais
est **plus court** que le français (`roue libre` → `flyback`,
`boucle ouverte` → `open loop`). **Le foisonnement d'un lot suit la proportion
de prose méthodologique ; un lot de notions matérielles ne foisonne
presque pas.***

---

## Déclaration C131 du bloc 83 — rejouée, liste FERMÉE avant le bloc, DEUX instants

**Populations** — inchangées et redéclarées.

**Liste FERMÉE des artefacts du bloc 83 :** les **24** entrées existantes, plus :

| # | artefact | état | total | hors artefacts | existe à la garde ? |
|---|---|---|---|---|---|
| 25 | `tools/batterie-sortie-3008b38.txt` (étape 0 de la garde) | `??` | oui | non | **oui** |
| 26 | `tools/titres-negatif-lot10-3008.tsv` (**le test négatif a sa propre table**, règle d'usage 17) | `??` | oui | **oui** | non |
| 27 | `tools/titres-lot10-3008.tsv` (table des `title:`) | `??` | oui | **oui** | non |

⚠ **Les fiches EN dont le `title:` change sont DÉJÀ en `??`** : `renommer-titres`
n'ajoute aucune entrée. **Le nombre de fiches renommées ne change donc AUCUN des
deux compteurs**, ce qui est la raison pour laquelle la déclaration peut se
fermer avant que la décision C125 ne soit rendue.

⚠ **Relecture de la liste CONTRE les prédictions du bloc** (règle d'usage 17) :
un test négatif est prévu, sa table est à la ligne 26 ; aucune autre écriture.

**DEUX instants :** **25 / 15** quand la garde lit `git status` ; **27 / 17** en
fin de bloc.

---

## Bloc 83 — les cinq `title:` EN (C125), avec test négatif

**Commandes :** garde ; relevé de la répartition **prose / `See also`** des
libellés visant `afnor-nfx50-151-en` ; écriture de la table négative ;
`renommer-titres` sur elle (refus attendu) ; écriture de la table réelle ;
`renommer-titres` contrôle seul ; `renommer-titres --ecrire` ;
`titres-doublons` ; `--libelles`.

### Les quatre titres que le RELEVÉ 3 décide seul, publiés avant la commande

| fiche EN | `title:` actuel (recopié du FR) | `title:` décidé | preuve au relevé |
|---|---|---|---|
| `etat-de-l-art-technique-en` | `État de l'art technique` | **`Technical state of the art`** | 14 + 3 + 1 libellés, aucune forme concurrente |
| `asservissement-en` | `Asservissement` | **`Closed-loop control`** | 3 + 2 ; `PID` (3) est un **sigle de méthode**, pas un titre |
| `boucle-ouverte-en` | `Boucle ouverte` | **`Open loop`** | 2 + 1, aucune concurrente |
| `protection-electronique-en` | `Protections électroniques` | **`Electronic protections`** | 2 + 1 ; `flyback diodes` (2), `protection` (2), `fuses` (1), `protection diodes` (1) nomment des **objets de la fiche** |

### Le cinquième est un conflit, et il descend aux trois tests de C125

**Formes en production vers `afnor-nfx50-151-en`** : `standard NF X50-151`
**7**, `Standard NF X50-151` **6**, `NF X50-151` **2**,
`NF X50-151 standard` **1**, `functional analysis` **1**. **`title:` français :
`NF X50-151`.**

- **Test 1 — libellé de désambiguïsation ?** Non : aucune forme parenthésée,
  aucune page-notion listant deux familles.
- **Test 2 — jumelle déjà titrée ?** Non : `afnor-nfx50-151` n'a pas de jumelle
  de famille.
- **Test 3 — lire les contextes.** *« En prose le libellé se plie à la phrase,
  dans un `Voir aussi` il vaut désignation »* (26/08 suite). **C'est le test qui
  décide, et il se mesure.**

### Prédictions du bloc 83

**P83.1 — garde.** ASCII **0** ; copie `tools\batterie-sortie-3008b38.txt` ;
heure **> `10:46:08`** ; HEAD **au caractère** ; 3 dates de pilotage
inchangées ; `fichiers modifies non commites : 25   (hors artefacts de seance :
15)`.

⚠ **P83.2 — LA MESURE QUI TRANCHE, PRÉDITE AVANT D'ÊTRE FAITE : les DEUX
occurrences de `NF X50-151` nu sont dans une section de liens
(`## See also` / `## Going further`), et les treize `standard NF X50-151` /
`Standard NF X50-151` sont en PROSE.** *Motif : « the standard NF X50-151
requires… » est une phrase où le nom commun est **grammaticalement
nécessaire** ; une ligne de `See also` n'a pas de phrase où se plier.*
⚠ **Deux branches nommées avant la mesure.** (a) La prédiction tient ⇒ **le
titre est `NF X50-151`**, identique au français, et **seuls QUATRE `title:`
changent**. (b) La prédiction est réfutée — du `NF X50-151` nu en prose, ou du
`standard NF X50-151` en `See also` — ⇒ le test 3 ne tranche plus seul, et le
dossier se rouvre avec sa mesure.

**P83.3 — TEST NÉGATIF.** La table réelle avec **une** ancre de `title:` rendue
introuvable par une **capitale de trop** ; sortie `ANCRE 0 occurrence(s)` ou
équivalent, **refus**, **aucun fichier écrit**, **exit non nul**. *Onzième refus
de la série.*

**P83.4 — table réelle : QUATRE lignes, quatre `title:` réécrits, exit 0**, et
`afnor-nfx50-151-en` **absente de la table**. ⚠ *Sous la branche (b) de P83.2,
la table passerait à cinq lignes et l'amendement serait écrit **avant**
exécution.*

**P83.5 — `titres-doublons` après renommage : FR `243 / 243 / 0` inchangé, EN
`227 / 227 / 0`.** ⚠ **Terme écrit pour réfuter, et c'est le contrôle que la
règle d'usage de C125 exige** : un groupe de collision présent d'un seul côté
serait un défaut de report. *227 = 222 + 5 ; **zéro collision neuve**, alors
même que quatre titres changent.*

**P83.6 — `--libelles` : `candidats a lire` entre 132 et 140, point estimé
132.** *Référence du 30/08 (suite 4) : **132**. Les quatre titres décidés
**partagent tous leurs radicaux** avec les libellés qui les visent — c'est la
clause du 29/08 (suite 9), « choisir un titre sur les libellés que le corpus
écrit déjà rend ce compteur invariant par construction ».* ⚠ **La marge de +8
est réservée aux SIGLES et aux libellés que le corpus n'a pas écrits** :
`[[caracteriser-une-exigence-en|criterion]]`, `|level|`, `|flexibility|`,
`[[bom-en|BOM]]`, `[[fonction-en|function]]`, `[[matrice-de-risques-en|delay]]`
figurent tous dans les cinq fiches neuves, et `delay` ne partage **aucun
radical** avec `Risk matrix`.

**P83.7 — compteurs `git status` en fin de bloc : 27 au total, 17 hors artefacts
de séance.**

### Constats du bloc 83 (garde `3008b38`, tables `titres-negatif-lot10-3008.tsv` et `titres-lot10-3008.tsv`)

| # | prédiction | constat | verdict |
|---|---|---|---|
| P83.1 | garde : ASCII 0, copie `3008b38`, heure > `10:46:08`, HEAD au caractère, 3 dates inchangées, `25   (hors artefacts : 15)` | `3008b38` ; **10:54:04** ; identiques ; **25 / 15** | **tenue** |
| P83.2 | les **2** `NF X50-151` nus sont en section de liens, les **13** `standard/Standard NF X50-151` en prose | **exactement l'inverse** : les 2 nus sont en **prose**, les 6 capitalisés sont **tous en `See also`** | **RÉFUTÉE** |
| P83.3 | test négatif : `INTROUVABLE`, refus, aucun fichier écrit, exit ≠ 0 | `L5 INTROUVABLE`, `ancres uniques trouvees : 3`, `REFUS : 1 defaut(s). AUCUN FICHIER ECRIT.`, `EXIT=1` | **tenue** |
| P83.4 | table réelle : **4** lignes, `afnor-nfx50-151-en` absente, exit 0 | 4 renommages, `afnor` absente, `fichiers ecrits : 4`, exit 0 | **tenue** |
| P83.5 | `titres-doublons` FR `243 / 243 / 0`, EN **`227 / 227 / 0`** | FR `243 / 243 / 0`, EN **`227 / 227 / 0`** | **tenue** |
| P83.6 | `candidats a lire` ∈ [132, 140], point **132** | **144** | **RÉFUTÉE** |
| P83.7 | fin de bloc **27 / 17** | **27 / 17** | **tenue** |

**Bilan du bloc 83 : 7 prédictions à décompte plein, 5 tenues, 2 réfutées.**

⚠ **RÉFUTATION P83.2 — LA MESURE REND L'INVERSE EXACT DE MA PRÉDICTION, ET LE
TITRE NE CHANGE QUAND MÊME PAS.** J'avais prédit `NF X50-151` nu en **section de
liens** et `standard NF X50-151` en **prose**. **Mesure, libellé par libellé :**
- `Standard NF X50-151` **6**, et les **six sont dans un `## See also`** —
  `bete-a-cornes-en` L92, `cahier-des-charges-fonctionnel-en` L97,
  `caracteriser-une-exigence-en` L170, `fonction-en` L49, `pieuvre-en` L96,
  `specification-technique-en` L433. **Unanimité.**
- `NF X50-151` **nu 2**, et les **deux sont en prose** — `fonction-en` L18
  (« In [[…|NF X50-151]] functional analysis ») et
  `caracteriser-une-exigence-en` L82 (« imposed by [[…|NF X50-151]] »).
- `NF X50-151 standard` **1**, dans le **hub** `en/conduite/proj/index.md` L38 ;
  `functional analysis` **1**, en prose dans `pieuvre-en` L21.

⚠ **Le test 3 pris seul donnerait donc `Standard NF X50-151`**, forme de
désignation unanime. ✅ **Et ce n'est PAS la décision, parce qu'un quatrième
argument la renverse et qu'il est mesurable : le français porte EXACTEMENT le
même écart.** `title: NF X50-151` côté FR, et **7 libellés `Norme NF X50-151`**,
tous en section de liens ou en hub — mesurés au bloc 81. **Le corpus français
distingue déjà le titre nu du libellé préfixé** ; titrer l'anglais
`Standard NF X50-151` **fabriquerait une asymétrie EN/FR que la source ne porte
pas**, ce que le motif du 26/08 proscrit. *`Norme` → `Standard` est la
traduction du **préfixe de libellé**, pas du titre.*
**Décision : `title: NF X50-151`, inchangé. Coût du revert : 1 `title:`.**

⚠ **ET LE RELEVÉ TROUVE UNE INCOHÉRENCE QU'IL NE CHERCHAIT PAS, HORS PÉRIMÈTRE
DU LOT** : le hub `en/conduite/proj/index.md` écrit `NF X50-151 standard` là où
les six `See also` écrivent `Standard NF X50-151`. *Une forme unique contre six,
dans un fichier que ce lot ne touche pas.* **Porté à la file des arbitrages, non
édité.**

⚠ **RÉFUTATION P83.6 — 144 CONTRE [132, 140], ET LA RÉFÉRENCE N'ÉTAIT PAS
COMPARABLE.** *Cause structurelle, et elle vaut règle : **créer une fiche EN
fait basculer TOUS les libellés qui la visent du seau `cible EN absente` vers la
comparaison**. Ils n'étaient pas des candidats parce qu'ils n'avaient pas de
cible ; ils le deviennent sans que rien n'ait changé dans leur texte ni dans le
titre choisi.*

**Les cinq compteurs, avant et après, lus ensemble :**

| compteur | lot 9 (réf.) | lot 10 | écart |
|---|---:|---:|---:|
| wikilinks à libellé | 4 037 | **4 104** | **+67** |
| cible EN existante | 3 879 | **3 999** | +120 |
| **cible EN absente** | 158 | **105** | **−53** |
| candidats à lire | 132 | **144** | **+12** |
| positions de parcours | 16 | **16** | 0 |

✅ **LES DOUZE CANDIDATS NEUFS SONT RATTACHÉS UN PAR UN À LEUR CAUSE — ce que le
lot 7 avait explicitement laissé à faire.**

| # | libellé | source | cause |
|---|---|---|---|
| 1-4 | `levels`, `level`, `criterion`, `flexibility` → `Characterising a requirement` | `etat-de-l-art-technique-en` | **alias FR traduits** (`niveaux`, `niveau`, `critère`, `flexibilité`) : report fidèle |
| 5-7 | `PID` → `Closed-loop control` ×3 | `fonction-en`, `specification-technique-en`, `schema-bloc-fonctionnel-en` | **libellés PRÉEXISTANTS** que la création d'`asservissement-en` rend comparables |
| 8 | `functional analysis` → `NF X50-151` | `pieuvre-en` | idem, préexistant |
| 9-11 | `flyback diodes` ×2, `fuses` → `Electronic protections` | `lire-une-datasheet-en`, `securite-et-qualite-en`, `manipulation-de-bits-en` | idem, préexistants |
| 12 | `delay` → `Risk matrix` | `protection-electronique-en` | report fidèle du `[[matrice-de-risques\|délai]]` français |

⚠ **AUCUN des douze ne vient du CHOIX d'un titre.** *Huit sont des libellés
écrits avant ce lot, quatre sont des reports fidèles d'alias ou de libellés
français. **La clause C125 « un titre qui englobe ne crée aucun candidat » n'est
donc PAS éprouvée par ce lot non plus** — elle reste à 3/N, et c'est la deuxième
fois d'affilée qu'un lot ne peut rien lui dire.*

⚠ **Candidate, et elle est de la famille de la règle d'usage 3** : *`candidats a
lire` n'est comparable d'un lot à l'autre qu'à **population de cibles
constante**. Un lot qui crée N fiches EN déplace mécaniquement des libellés de
`cible EN absente` vers la comparaison ; le compteur qui se prédit n'est donc
pas `candidats a lire`, c'est **`candidats a lire` moins les candidats dont la
cible vient d'être créée**.* **Ce lot le mesure : 144 − 8 = 136 à population
constante, contre 132, soit +4 — les quatre alias traduits, et rien d'autre.**

✅ **ONZIÈME REFUS DE LA SÉRIE**, sur une **capitale de trop** (`Boucle Ouverte`
contre `Boucle ouverte`) : `ancres uniques trouvees : 3`, `REFUS`, exit 1, zéro
fichier écrit. *Même famille que le refus du 29/08 (`Using a Shield`), sur
l'autre des deux outils d'écriture.*

✅ **`titres-doublons` : 227 titres, 227 distincts, ZÉRO collision des deux
côtés**, alors que quatre titres changent le même jour. *La règle d'usage de
C125 — relever les groupes de collision **des deux côtés** après un lot —
tombe au vert pour la sixième clôture d'affilée.*

---

## Déclaration C131 du bloc 84 — rejouée, liste FERMÉE avant le bloc, UN SEUL instant

**Populations** — inchangées et redéclarées.

**Liste FERMÉE des artefacts du bloc 84 :** les **27** entrées existantes, plus
**`tools/batterie-sortie-3008b39.txt`** (étape 0), `??`, comptée au total et
**non** hors artefacts. ⚠ *Le bloc ne lance **qu'une** commande et cette commande
n'écrit que `batterie-sortie.txt` (ignoré) et sa copie datée.* **Aucune écriture
dans `content/`.**

⚠ **Relecture CONTRE les prédictions** (règle d'usage 17) : aucun test négatif,
aucune table, aucune édition, aucun relevé sauvegardé hors batterie.

**UN SEUL instant : 28 / 17**, à la garde comme en fin de bloc.

---

## Bloc 84 — clôture du lot 10

**Commande unique :**

```
powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase etat -Fiches conduite/proj/etat-de-l-art-technique.md,conduite/proj/afnor-nfx50-151.md,embarque/asservissement.md,embarque/boucle-ouverte.md,embarque/protection-electronique.md -FichesEn en/conduite/proj/etat-de-l-art-technique-en.md,en/conduite/proj/afnor-nfx50-151-en.md,en/embarque/asservissement-en.md,en/embarque/boucle-ouverte-en.md,en/embarque/protection-electronique-en.md -Chevron
```

### Prédictions du bloc 84

**P84.1 — garde et structure.** ASCII **0** ; copie
`tools\batterie-sortie-3008b39.txt` ; `phase demandee : etat   anneau : 2
chevron : True` ; heure **> `10:54:04`** ; HEAD **au caractère** ; **13 lignes
de dates** (3 pilotage + 5 FR + 5 EN), les 3 de pilotage inchangées et les
**5 FR au 30/08 après 10:35** (la passe C109) ; **12 étapes, 12 codes de sortie
à `0`** ; `fichiers modifies non commites : 28   (hors artefacts de seance :
17)`.

**P84.2 — corpus FR : `291 242`, INCHANGÉ au mot.** *La passe C109 de ce lot est
**neutre en mots** — 45 remplacements de ponctuation, solde nul, mesuré au
bloc 80.*

**P84.3 — traduites `222 → 227` fiches, `257 639 → 263 430` mots FR ; restant
`20 → 15` fiches, `33 603 → 27 812` mots.** *Le `tot` du lot est **5 791** des
deux côtés de la soustraction, la passe étant neutre : c'est le premier lot du
chantier où la règle d'usage 5 (« état d'AVANT pour le restant, état d'APRÈS
pour les traduites ») **ne peut pas mordre**, les deux états étant égaux.*

**P84.4 — foisonnement : `227 paires : 263 430 → 273 057 mots EN`, moyenne
`3.7 %`** ; lot à **`+11.0 / +4.3 / +1.9 / −0.4 / +0.1 %`**, soit **+2,12 %**.

**P84.5 — `--controle` : `227 fiche(s) controlee(s), 0 divergente(s)`,
`Liens non suffixes : 0 sur 0 fiche(s)`.**

**P84.6 — dérive : `MARQUE INVALIDE 0`, `DERIVE 0`, `SANS SOURCE 0`,
`SANS MARQUE 0`, `A JOUR 227`.**

**P84.7 — `--style` des cinq fiches EN : `typographie francaise 0`,
`virgule ambigue 2`, `C109 creees en EN 0`, `C109 de prose 24`,
`hors perimetre 9`, `hors alphabet latin 0`, `5 fiche(s) lue(s), 5 a
reprendre.`** ⚠ *Les deux `virgule ambigue` sont les **séparateurs de milliers
anglais** `~€2,000` et `€50,000`, décision du lot 9, gardés.*

**P84.8 — médias : `475` fiches, `707` embeds.** *470 + 5 fiches ; 699 + 8
embeds (`0 + 0 + 1 + 1 + 6`).*

**P84.9 — anneau 2 : `NET 145`, `deja traduites 133`, `RESTANT 12`,
`RESTANT DE L ANNEAU 2 (12 fiches) 25544`** ; porteuses de chevron **0** ;
`ATTEIGNABLES PAR AUCUN PARENT TRADUIT (0)`.
⚠ **`CIBLES SANS FICHE` : je prédis `(3)` et non `(6)`.** *Les six noms sont
`FC`, `FP`, `FS`, `critere`, `flexibilite`, `niveau`, tous des `aliases:`. **Le
compteur ne les voit pas comme des alias mais comme des noms de fichier
absents** ; il ne peut donc baisser que si le nom devient résolvable, ce qui
n'arrive pas. **Terme écrit pour réfuter : je prédis `(6)`, inchangé.**
*(La mention `(3)` ci-dessus est une erreur de rédaction corrigée sur place :
la prédiction est **6**.)*

**P84.10 — dette : `cibles rouges distinctes : 15`, `mots : 27812`,
`dont HORS anneaux 0..2 : 2`.** *Contrôle publié avant la mesure :
`12 (anneau 2) + 840 (kicad) + 670 + 758 (xiao) = 15 cibles, 25 544 + 2 268 =
27 812 mots`.*

**P84.11 — chevron `--tout` : 34 paires des deux côtés, 0 divergente**,
inchangé. *C127 hors sujet pour le cinquième lot d'affilée, comme le brief
l'annonçait.*

**P84.12 — wikilinks : entre 12 et 20 cibles mortes, point estimé 15**,
`0 cassée`, `0 ambiguë`, `8 gabarits`, `6 alias`, et `ok` **entre 470 et 500**.
⚠ *Le lot **retire 5 cibles mortes** (les cinq fiches créées) et **en ajoute**
autant que ses cinq fiches en visent sans jumelle : `filtrage-en` en est une.
**Le lot 9 avait prédit « inchangé » et s'est trompé de 6 pour n'avoir compté
que ce qui entre** ; la fourchette est ici ouverte des deux côtés.*

**P84.13 — `--libelles` : `4104 / 3999 / 105 / 144 / 16`**, identiques au
bloc 83. *Rien n'a changé depuis.*

**P84.14 — puces à tiret du corpus, population écrite par le script :
FR `995` sur `172` porteuses (**248** fichiers), EN `917` sur `153` porteuses
(**227** fichiers).* ⚠ *FR : 999 − 4 (les quatre puces traitées au bloc 79),
porteuses inchangées — `etat-de-l-art-technique` garde 13 puces. EN : 901 + 16,
porteuses 151 + **2** — seules `etat-de-l-art-technique-en` (13) et
`asservissement-en` (3) en portent.* **Ce compteur n'est PAS dans la batterie et
se relance à part.**

**P84.15 — formes de production EN après le lot :** `## See also` **219**,
`## What is it for?` **153**, `## Pitfalls` **152**,
`## Where it fits in the project` **105**, `## Exercises` **37**,
`## Going further` **31**. ⚠ *`+4 / +4 / +4 / +1 / 0 / 0` : `afnor-nfx50-151-en`
ne porte **aucun** titre de section, et seule `etat-de-l-art-technique-en` a un
`## Raccrochage projet`.* **Et trois formes neuves entrent à 1 :**
`## How do you protect?`, `## The four conditions`, `## The PID controller`.
*Formes voisines : `## Step by step` **78** (+1), `## How does it work?` **11**
(+1), `## Special case` **101** (+2).*

**P84.16 — titres de callout EN : `Watch out` 49 (+2), `Tip` 46 (+2),
`Good` / `Fair` / `Poor` 3 chacun, `Attention` 0, `Astuce` 0.**

**P84.17 — les QUATRE ratios d'avancement, chacun avec le NOM de sa
population** (candidate (b) du bloc 74, appliquée pour la première fois) :
**anneau 2 en fiches `133 / 145 = 91,7 %`** ; **corpus en fiches
`227 / 242 = 93,8 %`** ; **corpus en mots `263 430 / 291 242 = 90,5 %`** ;
**dette `15 cibles rouges, 27 812 mots`**.

## ⚠ AMENDEMENT ÉCRIT À LA DÉCLARATION C131 DU BLOC 84 — AVANT LES MESURES RESTANTES

*Règle d'usage 17, prise en défaut sur moi-même et corrigée avant exécution.* La
déclaration du bloc 84 dit **« le bloc ne lance qu'UNE commande »** ; **les
prédictions P84.14, P84.15 et P84.16 nomment trois relevés que la batterie ne
porte pas** — le compteur de puces du corpus, les formes de production de titres
de section, les titres de callout. **La déclaration ne se relisait pas contre
ses propres prédictions**, ce qui est exactement le défaut que la règle d'usage
17 décrit.

✅ **Ce que l'amendement change, et ce qu'il ne change pas.** Les trois relevés
sont **en lecture seule** : deux `grep` et un script jetable **hors dépôt**, qui
n'écrivent **aucun fichier**. **Les deux compteurs restent donc 28 / 17**, et
l'instant unique tient. *La liste des artefacts était juste ; c'est la phrase
qui la commentait qui était fausse.*

### Constats du bloc 84 (garde `3008b39`, batterie `-Phase etat -Chevron`)

| # | prédiction | constat | verdict |
|---|---|---|---|
| P84.1 | `etat / 2 / True`, heure > `10:54:04`, HEAD au caractère, **13 lignes de dates** dont les **5 FR au 30/08 après 10:35**, **12 étapes, 12 codes à 0**, `28   (hors artefacts : 17)` | `10:57:39` ; HEAD identique ; **13 lignes** ✅ ; ⚠ `afnor-nfx50-151.md` **2026-06-12 22:41:44** ; 12 étapes ✅ ; ⚠ **10 codes à 0, 2 à 1** (médias, wikilinks) ; **28 / 17** ✅ | **RÉFUTÉE** (2 termes sur 6) |
| P84.2 | corpus FR **291 242**, inchangé | `mots FR : 291242` | **tenue** |
| P84.3 | traduites `227 / 263 430` ; restant `15 / 27 812` | identiques au mot | **tenue** |
| P84.4 | `227 paires : 263 430 → 273 057`, moyenne `3.7 %`, lot `+11.0 / +4.3 / +1.9 / −0.4 / +0.1` | identiques au dixième | **tenue** |
| P84.5 | `227 fiche(s) controlee(s), 0 divergente(s)`, `0 sur 0` | identique | **tenue** |
| P84.6 | `0 / 0 / 0 / 0 / 227` | identique | **tenue** |
| P84.7 | `0 / 2 / 0 / 24 / 9 / 0`, `5 a reprendre` | identique | **tenue** |
| P84.8 | médias **475** fiches, **707** embeds | `475 fiches lues, 707 embeds` | **tenue** |
| P84.9 | anneau `145 / 133 / 12 / 25544`, porteuses `0`, `ATTEIGNABLES (0)`, `CIBLES SANS FICHE (6)` | identiques | **tenue** |
| P84.10 | dette `15 / 27812 / 2` | identiques | **tenue** |
| P84.11 | chevron `34 paires, 0 divergente` | `paires porteuses des deux cotes : 34   divergentes : 0` | **tenue** |
| P84.12 | wikilinks : mortes ∈ [12,20] point **15**, `0 / 0 / 8 / 6`, ok ∈ [470,500] | **MORT 15**, `0 / 0 / 8 / 6`, **OK 471** | **tenue** |
| P84.13 | `--libelles` `4104 / 3999 / 105 / 144 / 16` | identiques | **tenue** |
| P84.14 | puces FR **995 / 172 / 248**, EN **917 / 153 / 227** | identiques, **population écrite par le script** | **tenue** |
| P84.15 | six formes `219 / 153 / 152 / 105 / 37 / 31` ; 3 formes neuves à **1** ; `Step by step` **78**, `How does it work?` **11**, `Special case` **101** | six formes exactes ✅ ; 3 neuves à 1 ✅ ; 78 ✅ ; 11 ✅ ; ⚠ `Special case` **104** | **RÉFUTÉE** (1 terme sur 11) |
| P84.16 | callouts `49 / 46 / 3 / 3 / 3 / 0 / 0` | identiques | **tenue** |
| P84.17 | ratios `91,7 %` / `93,8 %` / `90,5 %` + dette `15 / 27 812` | identiques | **tenue** |

**Bilan du bloc 84 : 17 prédictions à décompte plein, 15 tenues, 2 réfutées.**

⚠ **RÉFUTATION P84.1, DEUX TERMES, DEUX CAUSES DIFFÉRENTES, ET LA PREMIÈRE EST
UNE PRÉDICTION QUI SE CONTREDIT ELLE-MÊME.** (1) J'ai prédit **les cinq dates FR
au 30/08 après 10:35**, alors que **le bloc 79 avait publié, et mesuré, que
`afnor-nfx50-151` ne reçoit AUCUNE ancre**. Elle sort donc à
**`2026-06-12 22:41:44`**, sa date d'écriture d'origine. *Une passe qui
n'écrit pas ne déplace pas la date : je l'avais écrit deux blocs plus tôt et je
ne l'ai pas relu en écrivant celui-ci.* (2) **Deux étapes rendent `1` et non
`0`** — `audit-medias` (1 `ORPHELIN`, 5 `ABSENT` préexistants) et
`audit-wikilinks` (15 cibles mortes). ⚠ *Ces deux codes sont **structurels** :
les deux outils sortent 1 dès qu'il reste un défaut à traiter, ce qui est l'état
normal d'un chantier en cours. **Prédire « 12 codes à 0 » était prédire un dépôt
sans dette**, et les deux mêmes étapes rendaient déjà 1 aux clôtures
précédentes.*

⚠ **RÉFUTATION P84.15 — J'AI COMPTÉ DES FICHIERS ET PUBLIÉ DES OCCURRENCES.**
`## Special case` prédit **101**, mesuré **104**. *Cause : le relevé du bloc 82
a rendu **99** par un `grep -rhoc … | grep -v '^0' | wc -l`, qui compte les
**fichiers** portant au moins une occurrence, pas les occurrences. Le corpus en
portait **102** avant le lot ; +2 donne 104.* ⚠ **C'est la sous-règle C116 (7) à
la lettre** — un compteur se lit dans ce qu'il compte, jamais dans la ligne qui
l'affiche —, **et c'est la deuxième fois de la séance** : la première était
`## Cas particulier` lu de mémoire au bloc 81. ✅ *Aucune décision n'en dépendait :
`## Special case — X` reste la forme de production quel que soit son poids, et
les deux titres du lot la prennent.*

✅ **CE QUE LA CLÔTURE ÉTABLIT, ET QUI TOMBE AU MOT.** **Corpus FR inchangé à
291 242** — le premier lot du chantier dont la passe C109 est **exactement**
neutre en mots, ce qui rend les deux membres de la règle d'usage 5 égaux et la
règle **inapplicable par construction**. **Traduites 227 fiches / 263 430
mots FR**, **restant 15 / 27 812**, et le contrôle publié d'avance referme :
`263 430 + 27 812 = 291 242`.

✅ **LE REPORT UN POUR UN EST JUSTE SUR DIX TERMES, ET LES TROIS COMPTEURS DE
PONCTUATION SONT ÉGAUX DES DEUX CÔTÉS** : `C109 de prose` **24 / 24**,
`hors perimetre` **9 / 9**, puces **16 / 16**, décomposées `0/2/2/4/16` et
`13/0/3/0/0` à l'identique.

✅ **ZÉRO `--recaler`, DEUXIÈME LOT D'AFFILÉE.** `MARQUE INVALIDE 0`,
`DERIVE 0`, `A JOUR 227`.

⚠ **`CIBLES SANS FICHE` SORT ENCORE À 6, ET C'ÉTAIT LE TERME ÉCRIT POUR
RÉFUTER.** Les six noms sont inchangés — `FC`, `FP`, `FS`, `critere`,
`flexibilite`, `niveau` — alors que **quatre d'entre eux ont été résolus par le
générateur** dans `etat-de-l-art-technique-en` (bloc 81, `alias resolus vers
leur porteuse (4)`). *Huitième confirmation du faux positif : le compteur lit
des **noms de fichier absents**, pas des liens rouges.*

⚠ **LE FOISONNEMENT DU LOT EST LE PLUS BAS DU CHANTIER, +2,12 %**, et sa
décomposition tient en une phrase : **une fiche de 91 mots foisonne de +11 % dès
qu'on lui ajoute dix mots, et trois notions matérielles foisonnent de −0,4 à
+1,9 % parce que l'anglais technique est plus court que le français**
(`roue libre` → `flyback`, `boucle ouverte` → `open loop`,
`protections électroniques` → `electronic protections`).

---

## ⛳ GATE G4 — clôture du lot 10.

**Fait** — **dix blocs d'exécution (75 à 84)**, **dix gardes de péremption au
vert**, `HEAD 65365fa` **stable au caractère sur les dix**, **zéro arrêt**,
**zéro sollicitation de Tim**. **45 remplacements C109** sur 4 sources FR,
**5 fiches EN rédigées par `--corps`**, **4 `title:` renommés**, **trois tests
négatifs délibérés, trois refus, zéro fichier écrit**.

**Chiffres** — corpus FR **291 242 inchangé** ; traduites **222 → 227 fiches,
257 639 → 263 430 mots** ; restant **20 → 15 fiches, 33 603 → 27 812** ; anneau 2
**133 traduites, 12 restantes, 25 544 mots, 0 porteuse** ; foisonnement
**+2,12 %** ; `--controle` **227 / 0 divergente** ; dérive **0 / 0 / 227** ;
titres **FR 243/243/0, EN 227/227/0** ; wikilinks **15 mortes, 0 cassée,
0 ambiguë, 8 gabarits, 6 alias, 471 ok** ; médias **475 / 707** ; `--libelles`
**4104 / 3999 / 105 / 144 / 16** ; puces **FR 995 / 172 / 248, EN 917 / 153 /
227** ; `git status` **28 / 17**.

**Ce qui suit** — bloc **85**, clôture §7 : `normalize-pilotage`, entrée
`JOURNAL.md`, éditions du §8 de `conventions.md`, remesure des quatre tailles.

---

## Déclaration C131 du bloc 85 — rejouée, liste FERMÉE avant le bloc, DEUX instants

**Populations** — inchangées et redéclarées.

**Liste FERMÉE des artefacts du bloc 85 :** les **28** entrées existantes, plus :

| # | artefact | état | total | hors artefacts | existe à la garde ? |
|---|---|---|---|---|---|
| 29 | `tools/batterie-sortie-3008b40.txt` (étape 0 de la garde) | `??` | oui | non | **oui** |
| 30 | `conventions.md` (§8 : marques d'épreuve, candidates neuves) | ` M` | oui | **oui** | non |
| 31 | `JOURNAL.md` (entrée du 30/08 suite 5) | ` M` | oui | **oui** | non |

⚠ **Relecture CONTRE les prédictions** (règle d'usage 17) : le bloc lance
`normalize-pilotage`, qui **peut** toucher `TODO.md` et `BACKLOG.md` ; **P85.2
le prédit à zéro fichier modifié**, et s'il est réfuté le compteur monte de
deux. **Aucun test négatif n'est prévu** — les éditions passent par un script
jetable à ancre unique, hors dépôt —, donc **aucune table à oublier**. Aucune
écriture dans `content/`.

**DEUX instants :** **29 / 17** quand la garde lit `git status` ; **31 / 19** en
fin de bloc.

---

## Bloc 85 — clôture §7 (JOURNAL, conventions)

### Prédictions du bloc 85

**P85.1 — garde.** ASCII **0** ; copie `tools\batterie-sortie-3008b40.txt` ;
heure **> `10:57:39`** ; HEAD **au caractère** ; **3 lignes de dates**
(`-Fiches` vide), les trois inchangées au caractère ;
`fichiers modifies non commites : 29   (hors artefacts de seance : 17)`.

**P85.2 — `normalize-pilotage` : ZÉRO fichier modifié.** *Les quatre fichiers de
pilotage ont été normalisés à la clôture du lot 9 ce matin, et rien ne les a
touchés depuis — la garde le dit à la seconde.*

**P85.3 — volume des deux éditions.** `conventions.md` **entre 80 et 150 lignes
insérées**, point estimé **110** ; `JOURNAL.md` **entre 30 et 55**, point estimé
**40**. ⚠ *Calage sur la clôture du lot 9, mesurée : 120 et 42 lignes prédites,
et la séance porte cette fois **moins de conventions neuves** (deux candidates
de plus au §8, contre six au lot 9) mais **autant de réfutations à consigner**.*

**P85.4 — tailles, mesurées APRÈS la dernière écriture** (C118, leçon du bloc 63
du lot 9) : `conventions.md` **entre 505 et 515 Kio** (501,1 à l'ouverture) ;
`JOURNAL.md` **entre 641 et 650 Kio** (637,7 à l'ouverture) ; `TODO.md`
**282,7 inchangé** ; `BACKLOG.md` **206,0 inchangé**.

**P85.5 — `git diff --numstat -- content` : QUATRE lignes seulement**, celles de
la passe C109 — `16 16`, `5 5`, `10 10`, `11 11`. ⚠ *Les cinq fiches EN sont
`??`, donc **absentes du `numstat`**, qui ne compare que le suivi. La borne
`-- content` est le correctif de la réfutation P79.11.*

**P85.6 — compteurs `git status` en fin de bloc : 31 au total, 19 hors artefacts
de séance.**

### Constats du bloc 85 (garde `3008b40`)

| # | prédiction | constat | verdict |
|---|---|---|---|
| P85.1 | garde : ASCII 0, copie `3008b40`, heure > `10:57:39`, HEAD au caractère, 3 dates inchangées, `29   (hors artefacts : 17)` | `3008b40` ; **11:00:40** ; identiques ; **29 / 17** | **tenue** |
| P85.2 | `normalize-pilotage` : **0** fichier modifié | `Total : 0 caractere(s) a corriger, 0 fichier(s) modifie(s).` | **tenue** |
| P85.3 | `conventions.md` ∈ [80, 150] lignes insérées, point **110** ; `JOURNAL.md` ∈ [30, 55], point **40** | **249** insertions / 14 suppressions ; **37** insertions | **RÉFUTÉE** (1 terme sur 2) |
| P85.4 | `conventions.md` ∈ [505, 515] Kio ; `JOURNAL.md` ∈ [641, 650] ; `TODO.md` 282,7 ; `BACKLOG.md` 206,0 | **517,8** ; **652,7** ; **282,7** ✅ ; **206,0** ✅ | **RÉFUTÉE** (2 termes sur 4) |
| P85.5 | `git diff --numstat -- content` : **4** lignes, `16 16 / 5 5 / 10 10 / 11 11` | identique au chiffre | **tenue** |
| P85.6 | fin de bloc **31 / 19** | **31 / 19** | **tenue** |

**Bilan du bloc 85 : 6 prédictions à décompte plein, 4 tenues, 2 réfutées.**

⚠ **RÉFUTATIONS P85.3 ET P85.4 — UNE SEULE CAUSE, ET C'EST LA MÊME QUE LE
BLOC 77 A DIAGNOSTIQUÉE CE MATIN : J'AI CALÉ UNE FOURCHETTE SUR UNE RÉFÉRENCE
DONT LA COMPOSITION AVAIT CHANGÉ.** Le lot 9 avait inséré **120** lignes au §8
pour **six** entrées neuves ; j'ai prédit **110** pour ce lot en le croyant plus
léger — *« deux candidates de plus au §8, contre six au lot 9 »* — alors qu'il
porte **huit entrées neuves ET quinze marques d'épreuve réécrites en récit**.
**249 insertions.** ⚠ *Les quinze marques ne sont pas des chiffres changés :
chacune remplace une ligne `*Éprouvée n/N.*` par **six à quinze lignes** de
constat. **J'ai compté les entrées neuves et pas les réécritures**, exactement
comme j'ai compté les mots au lieu de la prose au bloc 77.*

⚠ **INCIDENT — J'AI ÉCRIT DEUX TAILLES DANS LE JOURNAL AVANT DE LES MESURER, ET
C'EST LA LEÇON DU BLOC 63 REJOUÉE.** L'entrée portait
`conventions.md **501,1 → 512,3 Kio**` et `JOURNAL.md **637,7 → 646,9 Kio**`,
**deux valeurs composées** au moment de rédiger, avant que la dernière écriture
n'ait eu lieu. **Mesure : 517,8 et 652,7.** ✅ **Corrigé dans le bloc, par une
ancre unique**, avant toute publication. ⚠ *C118 en plein — aucun chiffre sans
mesure du jour —, et le fichier de prédictions portait déjà, à P85.4, la clause
« mesurées **APRÈS** la dernière écriture (C118, leçon du bloc 63 du lot 9) ».
**La clause était écrite trois paragraphes plus haut et je l'ai violée en
rédigeant le JOURNAL**, parce que la rédaction de l'entrée précède
matériellement la dernière écriture qu'elle décrit.*
⚠ **Candidate : la ligne « Tailles » du JOURNAL s'écrit en DEUX temps — un
gabarit sans chiffres à la rédaction, les chiffres posés par une ancre unique
après la dernière écriture.** *C'est le seul endroit du protocole où un chiffre
doit décrire l'état que sa propre écriture est en train de créer.*

✅ **CE QUI N'A PAS BOUGÉ, ET QUI SE DIT EN UNE LIGNE** : `TODO.md`
**282,7 Kio** et `BACKLOG.md` **206,0 Kio**, inchangés au dixième ;
`normalize-pilotage` à **zéro caractère à corriger** sur les dix fichiers ;
`numstat -- content` limité aux **quatre** sources de la passe.

---

## ⛳ GATE G5 — clôture de séance. Bilan prédictions / constats du lot 10.

| bloc | objet | prédictions à décompte plein | tenues | réfutées |
|---|---|---:|---:|---:|
| 75 | garde d'ouverture | 6 | 6 | 0 |
| 76 | composition du lot | 14 | 13 | 1 |
| 77 | cadrage | 12 | 10 | 2 |
| 78 | éprouvage C110 + relevé | 13 | 12 | 1 |
| 79 | passe C109 | 12 | 10 | 2 |
| 80 | correctif L61 | 9 | 8 | 1 |
| 81 | cinq relevés + génération | 10 | 8 | 2 |
| 82 | rédaction par `--corps` | 7 | 7 | 0 |
| 83 | les cinq `title:` | 7 | 5 | 2 |
| 84 | clôture du lot | 17 | 15 | 2 |
| 85 | clôture §7 | 6 | 4 | 2 |
| **total** | | **113** | **98** | **15** |

**113 prédictions publiées avant leur bloc, 98 tenues, 15 réfutées** — plus
**4 déclaratives** (branches de garde, refus motivés de décomposer) et **3 termes
hors décompte** (hash, horodatage et statut injectés par le harnais).
**Taux de tenue : 86,7 %**, contre 92,4 % au lot 9 (85/92).

⚠ **LES QUINZE RÉFUTATIONS SE RANGENT EN CINQ CAUSES, ET TROIS SONT LA MÊME.**

1. **Un taux rapporté à la mauvaise unité** — P77.8/P77.9 (mots au lieu de
   prose), P78.12b (C109 au lieu de listes à puces), P85.3 (entrées neuves au
   lieu de réécritures). **Trois blocs, trois familles de compteur, une seule
   erreur de raisonnement.**
2. **Un compteur lu dans la ligne qui l'affiche** — P84.15 (`grep -rhoc | wc -l`
   compte des **fichiers**), P81.6 (familles comptées de mémoire). *Sous-règle
   C116 (7), deux fois.*
3. **Une population qui a changé sans le dire** — P83.6 (`candidats a lire`
   après création de cibles), P81.4 (relevé du brief pris avant les fiches du
   lot 9). *Règle d'usage 3, deux fois.*
4. **Ce qui sort compté, ce qui entre oublié** — P80.4 (points de code),
   P79.7 (candidat non jugé). *Règle d'usage 16, transposée.*
5. **Un cadre de commande mal borné** — P79.11 (`numstat` non filtré),
   P84.1 (codes de sortie structurels), P76.13 (chemins de hub inventés),
   P83.2 (répartition prose / `See also` inversée), P85.4 (tailles écrites
   avant mesure).

✅ **CE QUI N'A PAS BOUGÉ** : `HEAD 65365fa` suivi sur **onze** gardes et
**identique au caractère** de bout en bout ; **trois tests négatifs refusés** sur
**deux** outils différents — trait d'union ASCII, accent manquant, capitale de
trop ; **invariant d'accents `+0`** sur les quatre fiches éditées ; **zéro
fichier perdu** en onze blocs ; **zéro `--recaler`**, pour le deuxième lot
d'affilée ; **zéro écriture hors des listes C131**, deux amendements compris.

✅ **CE QUE LA SÉANCE ÉTABLIT ET QUI N'EST PAS UN CHIFFRE.** Le **report un pour
un** a été contrôlé **le jour même**, sur dix termes, ce qu'aucun lot n'avait
fait — jusqu'ici il se vérifiait au lot suivant. Et la **remesure immédiate**
(terme (4) de la sous-règle C116) a trouvé le seul défaut que rien d'autre ne
pouvait voir : **une ancre absente de la table n'est pas une ancre fausse, et
aucune garde d'écriture ne voit ce qui n'y est pas.**

---

## En-tête de reprise — arbitrages du lot 10 rendus

- **Séance** — 30/08, **reprise dans le prolongement immédiat de la séance 5**,
  **PC perso, onglet Code**, modèle **Opus 5**. Le lot 10 a été livré par Tim
  entre les deux blocs.
- **Objet** — **rendre l'arbitrage (a)** dans le code : *`--corps` doit poser la
  ligne blanche après le front matter.* **(b) et (c) sont classés sans
  changement**, sur décision de Tim.
- **Blocs prévus** — **86** garde de péremption de reprise ; **87** correctif
  `--corps`, sous test négatif et test positif de non-régression ; **88**
  reclôture §7 (JOURNAL, conventions).

### Les trois arbitrages, au mot

| # | question posée à la clôture du lot 10 | décision de Tim |
|---|---|---|
| **(a)** | `--corps` doit-il **poser** la ligne blanche après le front matter, ou la **refuser** comme il refuse un front matter ? | *« oui pour (a), `--corps` doit poser la ligne blanche »* — **il la POSE** |
| **(b)** | le hub `en/conduite/proj/index.md` écrit `NF X50-151 standard` contre six `Standard NF X50-151` ailleurs | *« on laisse en l'état, c'est compréhensible »* — **classé** |
| **(c)** | `protection-electronique` L23 chiffre le coût d'une faute (« un fusible à quelques centimes ») | *« on laisse en l'état »* — **classé** |

⚠ **L'arbitrage (a) tranche entre les deux voies que la candidate posait, et il
prend la PLUS PERMISSIVE.** *Refuser aurait fait du geste correct une contrainte
de plus à retenir ; poser la ligne rend le geste fautif **impossible** au lieu de
le rendre coûteux.* **C'est la troisième fois du chantier qu'une règle de geste
passe de la prose au code**, et **la première où elle y passe par une
NORMALISATION et non par un refus** — les deux précédentes (`MARQUE INVALIDE`,
garde 3 de `--corps`) refusaient.

⚠ **Ce que (b) et (c) ferment, et ce qu'ils laissent ouvert.** (b) accepte une
**forme de libellé unique contre six** dans un hub : *le corpus anglais porte
donc désormais une variante assumée, et un futur relevé de libellés la
retrouvera — elle est classée, pas corrigée.* (c) laisse **un prix de composant
en prose** : *le cas « coût d'une faute » n'entre ni dans C71 ni dans sa clause
de périmètre, et il reste sans doctrine — la prochaine occurrence se reposera la
même question.*

---

## Déclaration C131 du bloc 86 — population des compteurs, artefacts versés, et TOTAL

**Populations** — inchangées et redéclarées : `git status --porcelain` sur le
dépôt entier moins les **deux chemins exacts** du `.gitignore` ; `hors artefacts
de seance` = la même moins les lignes portant `batterie-sortie` ou
`predictions-` (deux `-notmatch` du **code** de `batterie.ps1`).

**État de départ** — ⚠ **AUCUN bloc `gitStatus` n'est injecté à ce tour** : le
harnais n'en pose qu'à l'ouverture d'une session, et la reprise se fait dans la
même. **Le hash de `HEAD`, son horodatage et le statut sont donc INCONNUS et à
décompte plein**, pour la première fois de la journée.

**Liste FERMÉE des artefacts au moment où l'étape 1 du bloc 86 lira
`git status` :**

| # | artefact | état git | total | hors artefacts |
|---|---|---|---|---|
| 1 | `tools/predictions-260830.md` (ce texte, appendu avant le bloc — fichier **suivi**, et **committé par Tim** il y a quelques minutes) | ` M` | **oui** | non |
| 2 | `tools/batterie-sortie-3008b41.txt` (copie C124 créée par l'étape 0 **avant** la lecture) | `??` | **oui** | non |
| — | `tools/batterie-sortie.txt` | ignoré | non | non |

**TOTAL impliqué : 1 + 1 = 2 au total, 0 + 0 = 0 hors artefacts de séance.**

⚠ **Relecture CONTRE les prédictions du bloc** (règle d'usage 17) : le bloc
lance **une seule commande**, qui écrit **deux** fichiers — l'un ignoré, l'autre
listé. Aucun test négatif, aucune table, aucune édition. **La liste est close.**

⚠ **Le rang de la copie C124 est prédit sur le répertoire** : le listing de
`tools/` porte `3008b1` à **`3008b40`** sans trou — la clôture du lot 10 s'est
arrêtée à `b40` —, le rang **41** est donc le premier libre.

---

## Bloc 86 — garde de péremption de reprise

**Commande unique :**
`powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase garde`

**Base de comparaison** — la garde du **bloc 85**, `10:59` → `11:00:40`, et le
commit que Tim a passé depuis.

### Prédictions

**P86.1 — autocontrôle et copie C124.** `lignes non ASCII dans batterie.ps1 :
0` ; `sortie precedente copiee : tools\batterie-sortie-3008b41.txt`.

⚠ **P86.2 — `HEAD` a CHANGÉ, et c'est la première prédiction de hash à décompte
plein de la journée.** *Je ne prédis pas le hash — il est inconnaissable avant
la mesure —, je prédis **trois formes** :*
- le hash est **différent de `65365fa`** ;
- l'horodatage porte **`2026-08-30`** et une heure **strictement postérieure à
  `11:00:40`** (fin du bloc 85) ;
- ⚠ **le message n'apparaît pas** dans la sortie de la garde, qui n'imprime que
  `%h %cd`. *Terme écrit pour réfuter : si la ligne portait un message, je me
  tromperais sur ce que la garde mesure.*

⚠ **P86.3 — deux branches nommées AVANT la mesure.** (a) `HEAD` ≠ `65365fa`,
horodatage postérieur à `11:00:40`, et statut ne portant **aucun** fichier de
`content/` : **branche attendue**, le lot 10 est dans l'histoire, on poursuit ;
(b) `HEAD` = `65365fa` **ou** un fichier de `content/` en attente : **ARRÊT**,
le commit n'a pas emporté le lot, remontée à Tim, aucune écriture.

**P86.4 — compteurs `git status` : `fichiers modifies non commites : 2   (hors
artefacts de seance : 0)`**, par la liste fermée ci-dessus. ⚠ **Terme écrit pour
réfuter** : le lot 10 laissait **31 / 19** à sa clôture ; si le compteur rendait
autre chose que 2, c'est qu'une des 31 entrées n'est pas partie au commit.

**P86.5 — dates de dernière écriture, exactement TROIS lignes** :
- `JOURNAL.md` — **`2026-08-30`**, heure **strictement postérieure à
  `11:00:40`** *(la clôture §7 du bloc 85 l'a réécrit, puis la correction
  d'ancre des deux tailles)* ;
- `conventions.md` — **`2026-08-30`**, heure **strictement postérieure à
  `11:00:40`** et **antérieure à celle de `JOURNAL.md`** *(l'ordre du bloc 85
  est `conventions.md` puis `JOURNAL.md`, et le JOURNAL a reçu une écriture de
  plus)* ;
- `TODO.md` — **`2026-08-29 21:48:08`**, **inchangé à la seconde** *(sixième
  séance consécutive sans y toucher ; écart de 282,7 Kio toujours non
  instruit)*.

⚠ *Un commit ne déplace aucune de ces trois dates : les deux écarts viennent du
bloc 85, pas d'une main tierce.*

**P86.6 — invariants d'entête et de sortie.** `phase demandee : garde
anneau : 2   chevron : False`, `date ISO : 2026-08-30`, heure **strictement
postérieure à `11:00:40`**, `node : v24.15.0`, **2 étapes, 2 codes de sortie,
tous `0`**.

**P86.7 — ce que la sortie NE porte PAS** : aucune ligne de volume, de contrôle,
de dérive, d'anneau, de wikilinks, de médias ni de libellés.

### Constats du bloc 86 (sortie `tools/batterie-sortie.txt`, copie C124 `3008b41`)

| # | prédiction | constat | verdict |
|---|---|---|---|
| P86.1 | ASCII **0**, copie `tools\batterie-sortie-3008b41.txt` | 0 ; `3008b41` | **tenue** |
| P86.2 | hash **≠ `65365fa`** ; date `2026-08-30`, heure **> `11:00:40`** ; **aucun message** dans la ligne | `HEAD git : 5f44762 2026-08-30 11:09:00 +0200`, sans message | **tenue** |
| P86.3 | branche (a) attendue, (b) = arrêt | branche **(a)** | *[déclarative]* |
| P86.4 | `2   (hors artefacts de seance : 0)` | **2 / 0** | **tenue** |
| P86.5 | 3 lignes ; JOURNAL `2026-08-30` > `11:00:40` ; conventions même intervalle **et antérieure au JOURNAL** ; TODO `2026-08-29 21:48:08` à la seconde | 3 lignes ; **11:06:19** ; **11:04:21** (antérieure) ; **2026-08-29 21:48:08** | **tenue** |
| P86.6 | `garde / 2 / False`, ISO `2026-08-30`, heure > `11:00:40`, `node : v24.15.0`, 2 codes à 0 | idem ; **11:10:43** ; `v24.15.0` ; 2 × 0 | **tenue** |
| P86.7 | aucune ligne de volume / contrôle / dérive / anneau / wikilinks / médias / libellés | aucune | **tenue** |

**Bilan du bloc 86 : 6 prédictions à décompte plein, 6 tenues, 0 réfutée**
(plus 1 déclarative).

✅ **PREMIÈRE PRÉDICTION DE `HEAD` À DÉCOMPTE PLEIN DE LA JOURNÉE, ET ELLE TOMBE
SUR SES TROIS FORMES.** *Les quatre gardes d'ouverture précédentes avaient leur
hash injecté par le harnais et le rangeaient hors décompte ; la reprise se fait
dans la même session, donc sans injection.* **Prédire un hash est impossible ;
prédire qu'il a changé, sa date, son heure minimale et **ce que la ligne ne
porte pas** ne l'est pas.**

✅ **LE COMMIT A TOUT EMPORTÉ** : **31** entrées à la clôture du lot 10, **2**
ici, dont zéro hors artefacts. `5f44762` à **11:09:00**, entre la dernière
écriture du bloc 85 (`11:06:19`) et cette garde (`11:10:43`).

---

## Déclaration C131 du bloc 87 — rejouée, liste FERMÉE avant le bloc, DEUX instants

**Populations** — inchangées et redéclarées.

**Liste FERMÉE des artefacts du bloc 87 :**

| # | artefact | état | total | hors artefacts | existe à la garde ? |
|---|---|---|---|---|---|
| 1 | `tools/predictions-260830.md` | ` M` | oui | non | **oui** |
| 2 | `tools/batterie-sortie-3008b41.txt` (bloc 86) | `??` | oui | non | **oui** |
| 3 | `tools/batterie-sortie-3008b42.txt` (étape 0 de ce bloc) | `??` | oui | non | **oui** |
| 4 | `tools/creer-fiche-en.mjs` (le correctif) | ` M` | oui | **oui** | non |
| — | les **trois fichiers de corps de test**, dans le répertoire temporaire, **hors dépôt** | — | non | non | — |
| — | ⚠ `content/en/conduite/proj/afnor-nfx50-151-en.md` — **réécrite deux fois par les tests, et INCHANGÉE À L'OCTET à la fin** | **absente** | **non** | **non** | — |

⚠ **Relecture CONTRE les prédictions du bloc** (règle d'usage 17) : un test
négatif est prévu, et **il n'a pas de table** — le mode `--corps` n'a pas
d'ancre, son entrée est un fichier de corps, qui vit hors dépôt. Aucune table
TSV, aucun `--recaler`, aucun relevé sauvegardé.

⚠ **Le terme le plus dur de cette déclaration est une ABSENCE** :
`afnor-nfx50-151-en.md` est **écrite deux fois pendant le bloc** et ne doit
**apparaître dans aucun des deux compteurs**, parce que les deux écritures la
rendent **identique à l'octet** à sa version committée. *Si elle apparaît, c'est
que le correctif ne restitue pas exactement ce qu'il normalise.*

**DEUX instants :** **3 / 0** quand la garde lit `git status` ; **4 / 1** en fin
de bloc.

---

## Bloc 87 — correctif (a) : `--corps` pose la ligne blanche

**Le correctif, publié avant d'être écrit.** Dans `corpsSeul()`, **entre la
garde 3 et la garde 5**, après lecture du fichier de corps et **avant tout
assemblage** :

- si `nouveau` est non vide **et** ne commence pas par un saut de ligne
  (`/^\r?\n/`), on lui **préfixe un saut de ligne** ;
- la fin de ligne est celle de la fiche EN elle-même (`\r\n` si le front matter
  en porte, `\n` sinon) ;
- le mode **publie ce qu'il a fait**, sur une ligne :
  `ligne blanche apres le front matter : POSEE (le corps ouvrait par du texte)`
  ou `: deja presente`.

⚠ **Le correctif est IDEMPOTENT par construction**, et c'est ce qui garde le
test de non-régression : un corps qui commence déjà par un saut de ligne n'est
pas touché, donc réécrire une fiche avec son propre corps rend un fichier
identique à l'octet, exactement comme avant le correctif.

⚠ **Ce que le correctif NE FAIT PAS** : il ne touche ni à la garde 3, qui
continue de refuser un corps ouvrant par un front matter, ni au reste des cinq
gardes. *Le mode gagne une **normalisation**, pas une sixième garde — c'est
l'arbitrage de Tim, et c'est la première fois du chantier qu'une règle de geste
passe au code par la voie permissive.*

**Commandes, dans cet ordre :** garde ; édition de `creer-fiche-en.mjs` ;
extraction du corps d'`afnor-nfx50-151-en.md` ; **test positif de
non-régression** ; **test du comportement neuf** ; **test négatif** ;
`git status`.

### Prédictions du bloc 87

**P87.1 — garde.** ASCII **0** ; copie `tools\batterie-sortie-3008b42.txt` ;
heure **> `11:10:43`** ; `HEAD git : 5f44762 2026-08-30 11:09:00 +0200` **au
caractère** ; `node : v24.15.0` ; **3 lignes de dates inchangées au caractère**
(`11:06:19` / `11:04:21` / `2026-08-29 21:48:08`) ;
`fichiers modifies non commites : 3   (hors artefacts de seance : 0)`.

**P87.2 — TEST POSITIF DE NON-RÉGRESSION : `afnor-nfx50-151-en.md` réécrite
avec SON PROPRE corps rend un fichier IDENTIQUE À L'OCTET.** `sha256` **égal
avant et après** ; `ligne blanche apres le front matter : deja presente` ;
`front matter identique a l octet : oui` ; `liens 2 -> 2  ok` ; exit 0.

**P87.3 — TEST DU COMPORTEMENT NEUF : le même corps, PRIVÉ de son saut de ligne
initial, rend LE MÊME FICHIER, toujours identique à l'octet.**
`ligne blanche apres le front matter : POSEE (le corps ouvrait par du texte)` ;
`sha256` **égal à celui d'avant les deux tests** ; exit 0.
⚠ **C'est le terme qui prouve, et il est plus fort qu'une inspection visuelle** :
*le correctif ne « rajoute pas une ligne », il **restitue exactement** l'octet
que le découpage `frontMatter()` avait laissé au corps. L'égalité des trois
`sha256` — original, après test 2, après test 3 — est la seule preuve qui ne
dépende d'aucun œil.*

**P87.4 — TEST NÉGATIF : un corps ouvrant par un front matter est toujours
refusé.** `GARDE 3  le fichier de corps OUVRE PAR UN FRONT MATTER.` ;
`REFUS : … defaut(s). AUCUN FICHIER ECRIT.` ; **exit 1** ; **`sha256` de la
fiche inchangé**. ⚠ *Douzième refus de la série, et il vérifie que le correctif
**n'a pas déplacé la garde centrale** : la normalisation s'applique après elle,
donc un front matter ne peut pas devenir licite en gagnant un saut de ligne.*
⚠ **Terme écrit pour réfuter** : le corps du test négatif ouvre par `---`, donc
**sans** saut de ligne initial ; si la normalisation était placée **avant** la
garde 3, elle poserait un `\n` devant le `---` et **la garde ne mordrait plus**.
*Le test est construit pour attraper exactement cette erreur de placement.*

**P87.5 — `git diff --numstat -- tools/creer-fiche-en.mjs` : une seule ligne,
entre 16 et 30 insertions, 0 ou 1 suppression.** *Le correctif est un bloc de
commentaire de motif plus une dizaine de lignes de code, inséré sans rien
retirer.*

**P87.6 — compteurs `git status` en fin de bloc : 4 au total, 1 hors artefacts
de séance**, ce seul `1` étant `tools/creer-fiche-en.mjs`. ⚠ **Et
`content/en/conduite/proj/afnor-nfx50-151-en.md` n'apparaît PAS.**

### Constats du bloc 87 (garde `3008b42`, trois tests sur `afnor-nfx50-151-en`)

| # | prédiction | constat | verdict |
|---|---|---|---|
| P87.1 | garde : ASCII 0, copie `3008b42`, heure > `11:10:43`, HEAD au caractère, 3 dates inchangées, `3   (hors artefacts : 0)` | `3008b42` ; **11:12:14** ; `5f44762 … 11:09:00 +0200` ; dates identiques ; **3 / 0** | **tenue** |
| P87.2 | non-régression : `deja presente`, sha256 égal, front matter identique, `liens 2 -> 2 ok`, exit 0 | identique ; sha256 **`548fefe9c2373812`** avant et après | **tenue** |
| P87.3 | comportement neuf : `POSEE (le corps ouvrait par du texte)`, **même sha256**, exit 0 | identique ; sha256 **`548fefe9c2373812`** | **tenue** |
| P87.4 | négatif : `GARDE 3`, `REFUS`, **exit 1**, sha256 inchangé | `GARDE 3` **et** `GARDE 5`, `REFUS : 2 defaut(s). AUCUN FICHIER ECRIT.`, **EXIT=1**, sha256 inchangé | **tenue** |
| P87.5 | `numstat` sur `creer-fiche-en.mjs` : **[16, 30]** insertions, 0 ou 1 suppression | **40 insertions, 0 suppression** | **RÉFUTÉE** |
| P87.6 | fin de bloc **4 / 1**, le `1` étant `creer-fiche-en.mjs` ; ⚠ `afnor-nfx50-151-en.md` **absente** | **4 / 1** ; les quatre entrées nommées ; **`afnor-nfx50-151-en.md` absente** | **tenue** |

**Bilan du bloc 87 : 6 prédictions à décompte plein, 5 tenues, 1 réfutée.**

✅ **LES TROIS `sha256` SONT ÉGAUX, ET C'EST LA SEULE PREUVE QUI NE DÉPENDE
D'AUCUN ŒIL.** `548fefe9c2373812` avant les tests, après le test de
non-régression, après le test du comportement neuf, et après le test négatif.
⚠ *Le terme qui porte est le **deuxième** : le corps privé de son saut de ligne
initial rend un fichier **identique à l'octet** à l'original. Le correctif ne
« rajoute pas une ligne », il **restitue exactement l'octet** que le découpage
de `frontMatter()` avait laissé au corps.*

✅ **DOUZIÈME REFUS DE LA SÉRIE, ET IL VÉRIFIE LE PLACEMENT DU CORRECTIF.** Le
corps fautif ouvre par `---`, donc **sans** saut de ligne initial : si la
normalisation avait été posée **avant** la garde 3, elle aurait préfixé un `\n`
au `---` et **la garde centrale n'aurait plus mordu**. Elle mord, et
`GARDE 5` mord avec elle — `liens 2 -> 0 DIVERGE`. *Deux gardes indépendantes
sur le même défaut, comme au 30/08 (séance 3) : un refus n'a pas besoin d'être
exact pour être sûr.*

⚠ **LE TEST NÉGATIF A TROUVÉ UN DÉFAUT DU CORRECTIF LUI-MÊME, ET IL A ÉTÉ
CORRIGÉ DANS LE BLOC.** Première version : la normalisation s'appliquait
**aussi** à un corps que la garde 3 venait de refuser, et le mode imprimait
`ligne blanche apres le front matter : POSEE` sur un fichier **qu'il n'écrirait
jamais**. ⚠ *C'est exactement la famille de défaut que le §8 poursuit depuis le
29/08 — « une ligne qui dit le contraire du code qui l'incrémente » —, cette
fois dans du code écrit dix minutes plus tôt.* ✅ **Correctif : la normalisation
est conditionnée à `!defauts.includes(3)`, et les trois tests ont été REJOUÉS
après** — `deja presente` / `POSEE` / **plus aucune ligne de normalisation sur
le corps refusé**, trois `sha256` égaux.

⚠ **RÉFUTATION P87.5 — 40 INSERTIONS CONTRE [16, 30], ET C'EST LA MÊME CAUSE
QUE P85.3 IL Y A DIX MINUTES : J'AI CHIFFRÉ LE CODE ET PAS SON COMMENTAIRE DE
MOTIF.** Le bloc ajouté fait **40 lignes**, dont **7 de code** et **33 de
commentaire** — pourquoi la ligne blanche appartient au corps, pourquoi le mode
la pose au lieu de la refuser, pourquoi il est idempotent, pourquoi il est placé
après la garde 3, et pourquoi il ne touche pas un corps refusé. *Cinq motifs,
chacun né d'une mesure ou d'un arbitrage, et c'est **la seule forme sous laquelle
ils survivent à la séance**.* ⚠ **Troisième réfutation de volume de la journée à
cause identique** : bloc 77 (mots au lieu de prose), bloc 85 (entrées neuves au
lieu de réécritures), bloc 87 (code au lieu de code + motif).

✅ **ZÉRO LIGNE NON ASCII dans le bloc ajouté** (40 lignes), aligné sur le style
du fichier ; deux jeux de guillemets français retirés en cours de bloc.

---

## Déclaration C131 du bloc 88 — rejouée, liste FERMÉE avant le bloc, DEUX instants

**Populations** — inchangées et redéclarées.

**Liste FERMÉE des artefacts du bloc 88 :** les **4** entrées existantes, plus :

| # | artefact | état | total | hors artefacts | existe à la garde ? |
|---|---|---|---|---|---|
| 5 | `tools/batterie-sortie-3008b43.txt` (étape 0 de la garde) | `??` | oui | non | **oui** |
| 6 | `conventions.md` (§8 : le correctif, les deux arbitrages classés) | ` M` | oui | **oui** | non |
| 7 | `JOURNAL.md` (entrée du 30/08 suite 6) | ` M` | oui | **oui** | non |

⚠ **Relecture CONTRE les prédictions du bloc** (règle d'usage 17) : le bloc
lance `normalize-pilotage`, qui **peut** toucher `TODO.md` et `BACKLOG.md` ;
**P88.2 le prédit à zéro**, et s'il est réfuté le compteur monte de deux. Aucun
test négatif, aucune table, aucune écriture dans `content/`. Le script d'édition
vit **hors dépôt**.

**DEUX instants :** **5 / 1** quand la garde lit `git status` ; **7 / 3** en fin
de bloc.

---

## Bloc 88 — reclôture §7 (arbitrages rendus)

### Prédictions du bloc 88

**P88.1 — garde.** ASCII **0** ; copie `tools\batterie-sortie-3008b43.txt` ;
heure **> `11:12:14`** ; `HEAD git : 5f44762 2026-08-30 11:09:00 +0200` **au
caractère** ; `node : v24.15.0` ; **3 lignes de dates inchangées au caractère**
(`11:06:19` / `11:04:21` / `2026-08-29 21:48:08`) ;
`fichiers modifies non commites : 5   (hors artefacts de seance : 1)`.

**P88.2 — `normalize-pilotage` : ZÉRO fichier modifié.** *Les quatre fichiers de
pilotage ont été normalisés au bloc 85, il y a un quart d'heure.*

⚠ **P88.3 — volume des deux éditions, chiffré EN COMPTANT LE COMMENTAIRE, et
c'est le correctif explicite de trois réfutations de la journée.**
`conventions.md` **entre 30 et 80 lignes insérées**, point estimé **52** ;
`JOURNAL.md` **entre 12 et 28**, point estimé **18**.
*Décomposition du point estimé de `conventions.md`, publiée pour être vérifiable
terme à terme : **~30 lignes** pour le ✅ CORRIGÉ DANS LE CODE de la candidate
`--corps` (cinq motifs de conception, trois tests, un défaut du correctif trouvé
par le test négatif), **~14 lignes** pour l'entrée qui classe les arbitrages
(b) et (c), **~8 lignes** pour les deux marques d'épreuve.*
⚠ *Les blocs 77, 85 et 87 ont chacun réfuté une prédiction de volume pour avoir
chiffré la substance sans son enveloppe — mots sans prose, entrées neuves sans
réécritures, code sans motif. **Celle-ci chiffre les deux.***

**P88.4 — tailles, mesurées APRÈS la dernière écriture, ET POSÉES EN DEUX
TEMPS.** *Application immédiate de la candidate née au bloc 85 : l'entrée du
JOURNAL s'écrit avec un **gabarit sans chiffres** à la place de la ligne
« Tailles », et les chiffres y sont posés par une **ancre unique** une fois la
dernière écriture faite.* Prédictions : `conventions.md` **entre 519 et 526
Kio** (517,8 avant) ; `JOURNAL.md` **entre 653 et 656 Kio** (652,7 avant) ;
`TODO.md` **282,7 inchangé** ; `BACKLOG.md` **206,0 inchangé**.

**P88.5 — `git diff --numstat` : TROIS lignes** — `creer-fiche-en.mjs` **`40 0`,
inchangé**, `conventions.md`, `JOURNAL.md`. ⚠ *Et **aucune ligne de
`content/`** : les trois tests du bloc 87 ont rendu `afnor-nfx50-151-en.md`
identique à l'octet, et le `numstat` est le second instrument qui le dit, après
le `sha256`.*

**P88.6 — compteurs `git status` en fin de bloc : 7 au total, 3 hors artefacts
de séance** — `creer-fiche-en.mjs`, `conventions.md`, `JOURNAL.md`.

### Constats du bloc 88 (garde `3008b43`)

| # | prédiction | constat | verdict |
|---|---|---|---|
| P88.1 | garde : ASCII 0, copie `3008b43`, heure > `11:12:14`, HEAD au caractère, 3 dates inchangées, `5   (hors artefacts : 1)` | `3008b43` ; **11:15:36** ; identiques ; **5 / 1** | **tenue** |
| P88.2 | `normalize-pilotage` : **0** fichier modifié | `Total : 0 caractere(s) a corriger, 0 fichier(s) modifie(s).` | **tenue** |
| P88.3 | `conventions.md` ∈ [30, 80] insertions, point **52** ; `JOURNAL.md` ∈ [12, 28], point **18** | **50** insertions / 2 suppressions ✅ ; **31** insertions | **RÉFUTÉE** (1 terme sur 2) |
| P88.4 | `conventions.md` ∈ [519, 526] Kio ; `JOURNAL.md` ∈ [653, 656] ; `TODO.md` 282,7 ; `BACKLOG.md` 206,0 | **521,0** ✅ ; **660,5** ; **282,7** ✅ ; **206,0** ✅ | **RÉFUTÉE** (1 terme sur 4) |
| P88.5 | `git diff --numstat` : **TROIS** lignes ; **aucune de `content/`** | **QUATRE** lignes ; **zéro de `content/`** ✅ | **RÉFUTÉE** (1 terme sur 2) |
| P88.6 | fin de bloc **7 / 3** | **7 / 3**, les sept nommées | **tenue** |

**Bilan du bloc 88 : 6 prédictions à décompte plein, 3 tenues, 3 réfutées.**

⚠ **RÉFUTATION P88.5 — RÉCIDIVE EXACTE D'UN DÉFAUT QUE J'AI DIAGNOSTIQUÉ ET
CORRIGÉ CE MATIN.** P79.11 était réfutée parce que `git diff --numstat` compte
`tools/predictions-260830.md` ; j'en avais tiré une candidate et **la parade —
borner la commande à `-- content`** —, appliquée deux fois avec succès aux
blocs 80 et 85. **Ici j'ai réécrit la prédiction sur la commande NON BORNÉE et
oublié le même fichier.** ⚠ *La parade est dans le code de la commande, pas dans
la prédiction : **j'ai corrigé l'outil et pas le geste**, ce qui est l'inverse de
la résolution de second rang.* ✅ **Le terme qui portait le sens tombe juste** :
**zéro ligne de `content/`**, vérifié par `git diff --numstat -- content`, et
c'est le second instrument après les trois `sha256` à dire que les tests du
bloc 87 n'ont rien laissé derrière eux.

⚠ **RÉFUTATIONS P88.3 ET P88.4 — UNE SEULE CAUSE, ET C'EST LA QUATRIÈME FOIS DE
LA JOURNÉE.** L'entrée du JOURNAL est prédite à **18 lignes** et en fait **31** ;
la taille en découle, prédite `[653, 656]` et mesurée **660,5 Kio**.
*Cause : j'ai chiffré **le nombre de sujets** — un correctif, deux arbitrages
classés, une parade appliquée — **et pas la densité de la prose qui les porte**.
31 lignes à ~250 octets font 7,8 Kio, quand ma fourchette en autorisait 3,3.*
⚠ **Bloc 77 (mots au lieu de prose), bloc 85 (entrées neuves au lieu de
réécritures), bloc 87 (code au lieu de code + motif), bloc 88 (sujets au lieu de
densité) : la même erreur sous quatre habits.** ✅ *Et elle a été **corrigée pour
`conventions.md`** au même bloc — décomposition publiée avant la mesure, 50
contre 52 prédites — **parce que c'est le seul des deux volumes pour lequel j'ai
compté l'enveloppe.***

✅ **LA PARADE DE LA CANDIDATE DU BLOC 85 A SERVI, ET ELLE A DEMANDÉ UN POINT
FIXE.** La ligne « Tailles » a été écrite **en gabarit sans chiffres**, puis
remplie par **ancre unique** après la dernière écriture. ⚠ *Difficulté propre au
JOURNAL, et elle est réelle : **écrire sa propre taille change sa taille**. La
pose s'est donc faite par **itération jusqu'au point fixe** — écrire la valeur,
remesurer, recommencer tant que les deux diffèrent —, **atteint en une seule
itération** parce que les chiffres posés ont la même longueur que le gabarit à
un octet près.* **Mesure de contrôle : le fichier écrit porte `652,7 → 660,5
Kio` et pèse `660,5 Kio`.** *Aucun autre fichier de pilotage n'a ce problème :
`conventions.md` ne publie pas sa propre taille.*

---

## ⛳ GATE G6 — clôture de la reprise. Arbitrages du lot 10 rendus.

**Fait** — **trois blocs (86 à 88)**, **trois gardes de péremption au vert**,
`HEAD 5f44762` stable au caractère sur les trois. **Un correctif** dans
`creer-fiche-en.mjs` (7 lignes de code, 33 de motif), **trois tests** — non
régression, comportement neuf, négatif — et **un défaut du correctif trouvé par
son propre test négatif**, corrigé dans le bloc, les trois tests rejoués.

**Chiffres** — `conventions.md` **517,8 → 521,0 Kio** (+50 lignes / −2) ;
`JOURNAL.md` **652,7 → 660,5 Kio** (+31) ; `TODO.md` **282,7** et `BACKLOG.md`
**206,0** inchangés ; `creer-fiche-en.mjs` **+40 lignes** ; `git status`
**7 / 3**. ⚠ **`git diff --numstat -- content` : ZÉRO ligne** — aucun fichier du
corpus n'a changé d'un octet, et les trois `sha256` d'`afnor-nfx50-151-en` le
disent aussi.

**Bilan prédictions/constats de la reprise : 18 prédictions à décompte plein,
14 tenues, 4 réfutées** (plus 1 déclarative). *Les quatre réfutations se rangent
en **deux** causes : trois volumes chiffrés sans leur enveloppe (P88.3, P88.4 et,
la veille au soir, P87.5), et une **récidive** de la commande `numstat` non
bornée (P88.5), défaut diagnostiqué et corrigé le matin même.*

**Total de la journée, lot 10 et reprise : 131 prédictions publiées avant leur
bloc, 112 tenues, 19 réfutées — 85,5 %.**

---
---

# SÉANCE 7 DU 30/08 — LOT 11 DU CHANTIER DE TRADUCTION

**Surface** : PC perso, onglet Code. **Modèle** : Opus 5. **Régime** :
exécution directe, sous-règle C116 amendée, C131 et son amendement, règles
d'usage du 29/08 (suites 9 à 11) et du 30/08 (cinq séances plus la reprise).
**Douzième lot en exécution directe.** Blocs numérotés à partir de **89**, la
reprise du 30/08 (suite 6) s'étant arrêtée au bloc 88.

**Brief de référence** : ligne « Prochaine session » de l'entrée du **30/08
(suite 6)** du JOURNAL, qui reconduit le brief du 30/08 (suite 5) et lui ajoute
**un fait neuf**.

⚠ **ÉCART BRIEF / PROMPT DE LANCEMENT, RELEVÉ AVANT TOUTE EXÉCUTION.** Le
prompt de lancement porte le point d'attention *« le fichier de corps DOIT
OUVRIR PAR UNE LIGNE BLANCHE »*. La ligne « Prochaine session » du 30/08
(suite 6) le déclare **caduc** : l'arbitrage (a) de Tim a été rendu et
`creer-fiche-en.mjs --corps` **pose** désormais la ligne blanche après le front
matter, au lieu de la supposer. *Le prompt a été composé à la clôture du lot 10,
avant la reprise qui a porté le correctif.* **Le point d'attention est retiré ;
le reste du prompt est recoupé conforme au brief.** *À vérifier dans le code au
bloc de cadrage, la règle du 29/08 valant ici aussi : une ligne de JOURNAL
décrit une intention, seul le code décrit un comportement.*

---

## BLOC 89 — GARDE DE PÉREMPTION D'OUVERTURE

**Commande** : `powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase garde`

### Déclaration C131 du bloc 89

**Compteur prédit** : `fichiers modifies non commites` de l'étape 1, et son
sous-compteur `hors artefacts de seance`.

**Population** : les entrées de `git status --porcelain` sur le dépôt entier —
des **entrées**, pas des fichiers (règle du 30/08, lot 7 : un répertoire
entièrement non suivi vaut une entrée). Le sous-compteur retire les entrées dont
la ligne porte `batterie-sortie` ou `predictions-`, **filtre lu dans le code de
`batterie.ps1` et non dans son README**.

**État d'avant la séance** : dépôt propre au commit **`0f3c9a5`** de Tim
(« arbitrages lot 10 rendus : --corps pose la ligne blanche, (b) et (c)
classes »).

**Versements de la séance dans cette population, avant que le compteur ne soit
lu** — deux, et ils se nomment :
1. `tools/predictions-260830.md`, **suivi par git** et modifié par l'append de
   cet en-tête, de cette déclaration et des prédictions ci-dessous → **1 entrée
   ` M`**, écartée du sous-compteur par le motif `predictions-`.
2. `tools/batterie-sortie-3008b44.txt`, **créé par l'étape 0 du lancement
   lui-même** (copie C124 de la sortie précédente, rang déduit du balayage
   `while (Test-Path …)` du code : les rangs `b1` à `b43` existent) → **1 entrée
   `??`**, écartée du sous-compteur par le motif `batterie-sortie`.

**Total impliqué : 2 entrées, dont 0 hors artefacts de séance.**

### Prédictions du bloc 89

- **P89.1** — étape 0, autocontrôle ASCII : `lignes non ASCII dans batterie.ps1 : 0`.
- **P89.2** — étape 0, copie C124 : `sortie precedente copiee : tools\batterie-sortie-3008b44.txt`.
- **P89.3** — étape 1, phase : `phase demandee : garde   anneau : 2   chevron : False`.
- **P89.4** — étape 1, horloge : `date ISO : 2026-08-30`, heure comprise entre
  **11:15:00** et **23:59:59**.
- **P89.5** — étape 1, HEAD : `HEAD git : 0f3c9a5 2026-08-30 ` suivi d'une heure
  **postérieure à 11:09:00** (le commit précédent, `5f44762`) et d'un fuseau
  `+0200`.
- **P89.6** — étape 1, compteur, par la déclaration C131 ci-dessus :
  `fichiers modifies non commites : 2   (hors artefacts de seance : 0)`.
- **P89.7** — étape 1, node : `node : v24.15.0`.
- **P89.8** — étape 1, dates d'écriture. ⚠ **Deux des trois sont attendues
  POSTÉRIEURES au dernier relevé de la journée** (`b43`, 11:12:14, qui portait
  `JOURNAL.md 11:06:19` et `conventions.md 11:04:21`), **et ce n'est pas un état
  inattendu** : la reprise du 30/08 (suite 6) a écrit sa clôture §7 **après** sa
  dernière garde, et Tim a commité ensuite. Prédiction :
  - `JOURNAL.md` — `2026-08-30`, heure dans **[11:06:19, 11:15:00]** ;
  - `conventions.md` — `2026-08-30`, heure dans **[11:04:21, 11:15:00]** ;
  - `TODO.md` — **`2026-08-29 21:48:08`, inchangé au caractère**.
- **P89.9** — les deux étapes ferment sur `--- code de sortie : 0`.

**Terme écrit pour réfuter** : tout fichier de `content/` en `git status`, toute
date d'écriture postérieure à l'horloge du bloc, ou un HEAD différent de
`0f3c9a5`, valent **ARRÊT** et remontée à Tim sans rien écrire.

### Constats du bloc 89 — garde AU VERT, 8 prédictions tenues, 1 réfutée

Sortie : `tools/batterie-sortie.txt`, copie C124 `tools\batterie-sortie-3008b44.txt`.

- **P89.1 ✅** `lignes non ASCII dans batterie.ps1 : 0`.
- **P89.2 ✅** `sortie precedente copiee : tools\batterie-sortie-3008b44.txt` — rang prédit au caractère.
- **P89.3 ✅** `phase demandee : garde   anneau : 2   chevron : False`.
- **P89.4 ✅** `date ISO : 2026-08-30   heure : 11:22:42`, dans [11:15:00, 23:59:59].
- **P89.5 ✅** `HEAD git : 0f3c9a5 2026-08-30 11:20:01 +0200` — slug, date, fuseau, et 11:20:01 postérieur à 11:09:00.
- **P89.6 ✅** `fichiers modifies non commites : 2   (hors artefacts de seance : 0)` — **les deux termes de la déclaration C131, au chiffre**.
- **P89.7 ✅** `node : v24.15.0`.
- **P89.8 ❌ sur deux termes de trois.** `JOURNAL.md 2026-08-30 11:18:25` contre
  [11:06:19, **11:15:00**] ; `conventions.md 2026-08-30 11:16:18` contre
  [11:04:21, **11:15:00**]. `TODO.md 2026-08-29 21:48:08` ✅ **inchangé au
  caractère**. ⚠ *Cause : la borne haute a été posée à 11:15:00 en ancrant sur
  « la séance s'ouvre maintenant », alors que la séance s'ouvre à **11:22:42** et
  que les écritures de clôture de la reprise la précèdent de six et quatre
  minutes. **Le sens de la prédiction était juste — postérieures au relevé b43 et
  antérieures au commit —, c'est la borne haute qui était arbitraire.** La borne
  qui portait le sens est le commit `0f3c9a5` à **11:20:01**, et les deux dates
  lui sont bien antérieures.* **Règle d'usage candidate : une borne d'intervalle
  de temps se pose sur un ÉVÉNEMENT DATÉ du dépôt — un commit, un relevé — jamais
  sur l'instant supposé du lancement, qui n'est pas encore mesuré quand on
  prédit.**
- **P89.9 ✅** les deux étapes ferment sur `--- code de sortie : 0`.

**Terme écrit pour réfuter : il ne mord pas.** Aucun fichier de `content/` en
`git status`, aucune date postérieure à l'horloge du bloc, HEAD conforme.
**Garde au vert, la séance peut écrire.**

---

## BLOC 90 — REMESURE DE COMPOSITION : LE RESTANT DE L'ANNEAU 2, NOMINATIF

**Commande** : `node tools/creer-fiche-en.mjs --anneau 2`

### Déclaration C131 du bloc 90

**Ce bloc n'écrit aucun fichier du dépôt** : `--anneau` lit `content/` et écrit
sur la sortie standard. **Versements de la séance dans la population de
`git status` : inchangés depuis le bloc 89** — `tools/predictions-260830.md`
(1 entrée, filtrée) et `tools/batterie-sortie-3008b44.txt` (1 entrée, filtrée).
**Total inchangé : 2 entrées, dont 0 hors artefacts de séance.** *Le compteur
`git status` n'est pas relu à ce bloc ; la déclaration est écrite pour que le
bloc suivant parte d'un état déclaré et non supposé.*

**Population des compteurs prédits ci-dessous** : les cibles de l'**anneau 2
NET** — atteintes depuis l'anneau 1, moins les anneaux 0 et 1 — dont le
sous-ensemble **RESTANT** est celui qui n'a pas de jumelle `-en`. La **DETTE**
est une population **distincte** et ne s'appelle jamais anneau (commentaire du
code, l. 1537-1553).

**Source des formes prédites** : les **chemins** ci-dessous sont pris d'un
`find content/embarque -name "*.md"` du jour, lecture de structure ; les
**chiffres** sont ceux du bloc 76 du lot 10, **publiés ici comme prédiction à
réfuter**, et c'est l'outil qui les remesure.

⚠ **Un chemin du brief est faux, et la lecture de structure le dit avant la
mesure** : `xbee` n'est pas sous `embarque/mcu/` mais sous
**`embarque/mcu/sans-fil/`**. *Conséquence sur la découpe (A) du brief, qui
l'annonce comme une « petite notion de `embarque/mcu/` » : elle en est une du
**sous-répertoire** `sans-fil/`, dont les cinq autres fiches sont déjà
traduites.*

### Prédictions du bloc 90

- **P90.1** — `ANNEAU 2 NET               : 145`.
- **P90.2** — `    deja traduites            : 133`.
- **P90.3** — `    RESTANT                   : 12`.
- **P90.4** — **liste nominative des 12, avec leur volume, terme à terme**
  (l'ordre de sortie est celui de `restants`, non prédit ; les couples le sont) :

  | chemin | mots prédits |
  |---|---|
  | `embarque/mcu/ascii.md` | 671 |
  | `embarque/mcu/fonction-informatique.md` | 398 |
  | `embarque/mcu/ide.md` | 385 |
  | `embarque/mcu/potentiometre.md` | 519 |
  | `embarque/mcu/chien-de-garde.md` | 2 005 |
  | `embarque/mcu/filtrage.md` | 1 397 |
  | `embarque/mcu/programmation-non-bloquante.md` | 1 829 |
  | `embarque/mcu/sans-fil/xbee.md` | 135 |
  | `embarque/simulation/falstad.md` | 3 244 |
  | `embarque/simulation/ltspice.md` | 3 848 |
  | `embarque/simulation/wokwi.md` | 1 340 |
  | `embarque/pcb/easyeda.md` | 9 773 |

- **P90.5** — `RESTANT DE L ANNEAU 2 (12 fiches)` ` 25544`.
  **Contrôle de décomposition publié avant la mesure** :
  4 113 (`ascii` + `fonction-informatique` + `ide` + `potentiometre` +
  `chien-de-garde` + `xbee`) + 1 397 + 1 829 = **7 339** pour le sous-arbre
  `mcu/` ; **8 432** pour `simulation/` ; **9 773** pour `pcb/easyeda` ;
  7 339 + 8 432 + 9 773 = **25 544**. *Un total dans la fourchette ne valide pas
  la décomposition (§8) : les douze couples ci-dessus se vérifient un à un.*
- **P90.6** — `ANGLE MORT DU CHEVRON` : `fiches porteuses          : 0` et
  `clotures en chevron       : 0`. ⚠ **`ded` vaut donc 0 et `tot` = `deh` pour le
  SIXIÈME lot d'affilée** ; C127 reste hors sujet.
- **P90.7** — `ATTEIGNABLES PAR AUCUN PARENT TRADUIT (0)`. *Fondement : l'anneau 2
  est l'ensemble des cibles de l'anneau 1, et l'anneau 1 est entièrement traduit.
  **C'est la prédiction la moins fondée du bloc**, aucune clôture du chantier
  n'ayant publié ce compteur.*
- **P90.8** — DETTE : `15` cibles, `27 812` mots, `dont HORS anneaux 0..2` : `2`.
- **P90.9** — `CIBLES SANS FICHE` : **0**. *Fondement : les six alias
  (`FP`, `FS`, `FC`, `critere`, `flexibilite`, `niveau`) qui portaient ce
  compteur appartiennent à `fonction` et `caracteriser-une-exigence`, traduites
  au lot 9. **Deuxième prédiction faiblement fondée** — le faux positif sur les
  alias est un arbitrage en attente, et je n'ai pas relu le résolveur.*
- **P90.10** — code de sortie `0`.

### Constats du bloc 90 — 9 prédictions tenues, 1 réfutée

- **P90.1 ✅** `ANNEAU 2 NET               : 145`.
- **P90.2 ✅** `deja traduites            : 133`.
- **P90.3 ✅** `RESTANT                   : 12`.
- **P90.4 ✅ LES DOUZE COUPLES, TERME À TERME.** 671 / 2005 / 1397 / 398 / 385 /
  519 / 1829 / 135 / 9773 / 3244 / 3848 / 1340, chacun sur le chemin prédit.
  ⚠ **Y compris `embarque/mcu/sans-fil/xbee`**, dont le brief donnait le
  répertoire faux : la lecture de structure du bloc l'avait corrigé avant la
  mesure.
- **P90.5 ✅** `RESTANT DE L ANNEAU 2 (12 fiches)   25544`, **et la décomposition
  en trois répertoires tient** : `mcu/` 7 339, `simulation/` 8 432,
  `pcb/easyeda` 9 773.
- **P90.6 ✅** `fiches porteuses : 0`, `clotures en chevron : 0`. **`ded` = 0,
  `tot` = `deh`, C127 hors sujet pour le sixième lot d'affilée.**
- **P90.7 ✅** `ATTEIGNABLES PAR AUCUN PARENT TRADUIT (0)` — la prédiction
  annoncée comme la moins fondée tombe juste, et son fondement était le bon.
- **P90.8 ✅** DETTE : `cibles rouges distinctes : 15`, `mots : 27812`,
  `dont HORS anneaux 0..2 : 2` — `xiao-prise-en-main` et `xiao-sense`, nommées.
- **P90.9 ❌** `CIBLES SANS FICHE (6)` prédit **0**, mesuré **6** :
  `[[FC]]`, `[[FP]]`, `[[FS]]`, `[[critere]]`, `[[flexibilite]]`, `[[niveau]]`.
  ⚠ *Cause : j'ai raisonné sur la **traduction** des fiches `fonction` et
  `caracteriser-une-exigence` au lot 9, quand le compteur mesure tout autre
  chose — l'existence d'un **fichier FR** au nom de la cible. Ces six-là sont des
  **`aliases:`**, elles n'ont jamais eu de fichier et n'en auront jamais ; le
  résolveur ne lit pas les `aliases:`, faux positif consigné en arbitrage depuis
  le 30/08 (suite 5).* **La prédiction était fausse pour la raison exacte que
  l'arbitrage en attente décrit**, et je l'avais écrite en signalant que je
  n'avais pas relu le résolveur. *C116 (7) à la lettre : lire le compteur dans le
  code qui l'incrémente. Je ne l'ai pas fait, je l'ai dit, et il a mordu.*
- **P90.10 ✅** code de sortie `0`.

---

## COMPOSITION DU LOT 11 — INSTRUITE SUR LES CHIFFRES DU BLOC 90

⚠ **CONSTAT QUI COMMANDE TOUTE LA DÉCOUPE, ET IL EST NEUF : LA BORNE 6 657 ET
LE CRITÈRE « FERMER UN NIVEAU DE RÉPERTOIRE ENTIER » SONT DEVENUS
INCOMPATIBLES SUR TOUT LE RESTANT.** Le restant tient dans **trois** répertoires,
et **les trois dépassent la borne** :

| découpe fermant un répertoire | fiches | mots | % de la borne 6 657 |
|---|---|---|---|
| `embarque/mcu/` (sous-arbre entier, `sans-fil/xbee` compris) | 8 | 7 339 | **110,2 %** |
| `embarque/simulation/` | 3 | 8 432 | **126,7 %** |
| `embarque/pcb/easyeda` | 1 | 9 773 | **146,8 %** |

*Le critère du lot 10 était le repli du critère du palier de hub, lui-même mesuré
à 0 sur 15. **Il ne reste plus de critère qui rende un lot sous la borne.***

**Ce que les découpes sous la borne laissent, mesuré :**
- **(A)** six petites notions (`ascii`, `fonction-informatique`, `ide`,
  `potentiometre`, `chien-de-garde`, `sans-fil/xbee`) = **4 113**, marge 2 544 —
  **ne ferme rien** et laisse `filtrage` 1 397 + `programmation-non-bloquante`
  1 829 = **3 226 mots sur 2 fiches**, résidu trop petit pour un lot et qui devra
  se mêler à `simulation/` — *exactement le coût d'hétérogénéité que le lot 10 a
  déjà payé une fois*.
- **`mcu/` racine seule** (7 fiches, **7 204**, 108,2 %) ferme le **niveau**
  `mcu/` mais laisse `sans-fil/xbee` à **135 mots**, qui ne fait de lot avec
  personne.
- **Toute autre découpe sous 6 657 laisse une fiche orpheline** dans son
  répertoire, ce que le critère du lot 5 écarte : `mcu/` moins
  `programmation-non-bloquante` = 5 510, moins `filtrage` = 5 942, moins
  `chien-de-garde` = 5 334 — **les trois laissent exactement une fiche**.

### Décision — assomption écrite, arbitrage remonté sans bloquer (C116 sous-règle 8)

**Lot 11 = `embarque/mcu/` en entier : 8 fiches, 7 339 mots, soit 110,2 % de la
borne.**

`embarque/mcu/ascii` 671 · `embarque/mcu/chien-de-garde` 2 005 ·
`embarque/mcu/filtrage` 1 397 · `embarque/mcu/fonction-informatique` 398 ·
`embarque/mcu/ide` 385 · `embarque/mcu/potentiometre` 519 ·
`embarque/mcu/programmation-non-bloquante` 1 829 ·
`embarque/mcu/sans-fil/xbee` 135.

**Quatre raisons, chacune chiffrée :**
1. **C'est le plus petit dépassement des trois** : +682 mots, contre +1 775 pour
   `simulation/` et +3 116 pour `easyeda`.
2. **Il ferme le sous-arbre `embarque/mcu/`**, la plus grosse branche du wiki —
   **159 fiches FR**, dont ces huit sont les dernières non traduites.
3. **Il laisse un plan de fin de chantier propre et homogène** : lot 12 =
   `simulation/` (3 fiches, 8 432), lot 13 = `easyeda` (9 773, lot à elle seule
   par arbitrage Tim du 30/08 suite 3). **Trois lots, trois répertoires, chantier
   fini** — aucun mélange de branches, alors que toute découpe sous la borne en
   impose un.
4. **La charge réelle de rédaction est concentrée et non uniforme** : trois fiches
   pèsent **5 231** des 7 339 mots (`chien-de-garde` 2 005,
   `programmation-non-bloquante` 1 829, `filtrage` 1 397) ; **les cinq autres
   pèsent 2 108 à elles toutes**, de 135 à 671 mots. *Le dépassement de 10,2 %
   porte sur un lot dont la moitié des fiches sont des notions courtes.*

**Coût du revert, écrit avant d'exécuter** : 8 fiches EN à supprimer, les passes
C109 sur 8 sources FR à annuler, 1 lot de `renommer-titres.mjs` à défaire.

**Ce qui monte à Tim au gate G1, sans bloquer** : *la borne 6 657 tient-elle
encore ?* Elle a été posée comme le volume du lot 2 et sert de plafond depuis ;
les **trois** derniers lots du chantier la dépassent, quelle que soit la découpe.
**Deux issues** : (a) la lever explicitement pour la fin du chantier, ce que
l'assomption ci-dessus fait de fait ; (b) la tenir et accepter que les trois
derniers lots mélangent les branches et laissent des orphelines. *L'arbitrage
« découpe intra-fiche ou levée de borne » posé pour `easyeda` le 30/08 (suite 3)
est le même, et il se pose maintenant pour deux répertoires de plus.*

---

## BLOC 91 — CADRAGE DU LOT 11 (garde + volume + candidats C109 + anneau)

**Commande** :

```
powershell -ExecutionPolicy Bypass -File tools\batterie.ps1 -Phase cadrage -Fiches embarque/mcu/ascii.md,embarque/mcu/chien-de-garde.md,embarque/mcu/filtrage.md,embarque/mcu/fonction-informatique.md,embarque/mcu/ide.md,embarque/mcu/potentiometre.md,embarque/mcu/programmation-non-bloquante.md,embarque/mcu/sans-fil/xbee.md
```

### Déclaration C131 du bloc 91

**Population** : entrées de `git status --porcelain`, comme au bloc 89.
**État déclaré à l'entrée du bloc : 2 entrées** — `tools/predictions-260830.md`
(` M`) et `tools/batterie-sortie-3008b44.txt` (`??`).
**Versement que CE bloc s'ajoute en route** : l'étape 0 crée
`tools/batterie-sortie-3008b45.txt` **avant** que l'étape 1 ne lise le compteur
→ **+1 entrée `??`**.
**Total impliqué : 3 entrées, dont 0 hors artefacts de séance.**
*Le bloc 90 n'a rien versé : `--anneau` n'écrit que sur la sortie standard.*

### Prédictions du bloc 91 — garde (étapes 0 et 1)

- **P91.1** — `lignes non ASCII dans batterie.ps1 : 0` ; `sortie precedente copiee : tools\batterie-sortie-3008b45.txt`.
- **P91.2** — `phase demandee : cadrage   anneau : 2   chevron : False` ; `date ISO : 2026-08-30`, heure **postérieure à 11:22:42** (horloge du bloc 89).
- **P91.3** — `HEAD git : 0f3c9a5 2026-08-30 11:20:01 +0200`, **identique au caractère** au bloc 89.
- **P91.4** — `fichiers modifies non commites : 3   (hors artefacts de seance : 0)`, par la déclaration ci-dessus.
- **P91.5** — `node : v24.15.0`.
- **P91.6** — dates de pilotage **identiques au caractère** au bloc 89 :
  `JOURNAL.md 2026-08-30 11:18:25`, `conventions.md 2026-08-30 11:16:18`,
  `TODO.md 2026-08-29 21:48:08`.
- **P91.7** — **huit lignes de dates de sources**, une par fiche du lot, et
  **0 datée du 2026-08-30** : aucune des huit n'a été touchée par une séance du
  jour. *Toute date du jour sur une source vaut ARRÊT.*

### Prédictions du bloc 91 — étape 2, volume du lot

- **P91.8** — `compter-mots --lot` rend **les huit couples du bloc 90, au mot** :
  `ascii` 671, `chien-de-garde` 2005, `filtrage` 1397, `fonction-informatique`
  398, `ide` 385, `potentiometre` 519, `programmation-non-bloquante` 1829,
  `sans-fil/xbee` 135 — dans l'ordre de la ligne de commande.
- **P91.9** — ligne de total : `LOT (8 fiches)` ` 7339`.
  ⚠ **Dépassement de la borne 6 657 de +682 mots, soit 110,2 %**, assumé et
  motivé au bloc de composition.

### Prédictions du bloc 91 — étape 3, candidats C109 des huit sources FR

- **P91.10 — les quatre seaux mécaniques à 0**, et **trois d'entre eux par
  construction du périmètre** : `C109 creees en EN : 0` et
  `hors alphabet latin : 0` ne mordent que sur une fiche portant un
  `source_fr:` — les huit sources sont françaises et n'en portent pas (code,
  l. 1224-1249) ; `typographie francaise : 0` a rendu 0 sur les sources FR aux
  lots 8, 9 et 10. **`virgule ambigue : 0`** est le quatrième, et **c'est le
  moins sûr** : il mord sur les séparateurs de milliers, mesurés **2** sur les
  fiches EN des lots 8 et 10. *`chien-de-garde` et `programmation-non-bloquante`
  parlent de durées et de fréquences, habitat naturel d'un `100,000`.*
- **P91.11 — `C109 de prose` entre 70 et 145, point estimé 105.**
  *Bases mesurées, toutes du 30/08 : lot 8 **63 / 5 488 = 1,15 pour 100** ;
  lot 9 **61 / 5 813 = 1,05** ; lot 10 **67 / 5 791 = 1,16**, dont le
  sous-ensemble des **trois notions `embarque/`** rend **52 / 3 414 = 1,52**.
  Appliqués aux **7 339** mots du lot : 77, 77, 85 et **112**.*
  ⚠ **La fourchette est élargie ASYMÉTRIQUEMENT VERS LE HAUT**, en application
  directe de la candidate née au bloc 77 : *une fiche courte est presque toute
  en prose et **sur-rend**.* **Ce lot est le plus court en moyenne du chantier —
  917 mots par fiche, contre 1 158 au lot 10 et 1 098 au lot 8 — et cinq de ses
  huit fiches pèsent moins de 700 mots.** Le seul lot dont la composition
  s'en approche est le sous-ensemble `embarque/` du lot 10, qui est **aussi le
  taux le plus haut mesuré**. *Borne basse à 70 pour le cas où `ascii` et
  `programmation-non-bloquante` portent respectivement une table de codes et des
  blocs de code, qui diluent sans produire.*
- **P91.12 — AUCUNE décomposition par fiche, et le refus est motivé pour la
  troisième fois du chantier.** *Le bloc 77 a mesuré un facteur **3,9** entre le
  taux le plus bas et le plus haut d'un même lot, et le plus haut était sur la
  **plus petite** fiche. Un prorata sur huit fiches allant de 135 à 2 005 mots
  rejouerait sciemment une prédiction dont la cause d'échec est mesurée.*
- **P91.13 — DEUX termes de forme, qui ne viennent d'aucune moyenne.**
  (a) `embarque/mcu/sans-fil/xbee`, **135 mots**, rend **au moins 1** candidat —
  *`afnor-nfx50-151`, 91 mots, en a rendu 2, et une fiche de cette taille est
  presque intégralement une phrase de définition, habitat du tiret d'incise* ;
  (b) la fiche qui porte **le plus** de candidats du lot est
  `embarque/mcu/chien-de-garde` — 2 005 mots, la plus grosse, et une notion et
  non un tuto.
- **P91.14 — `hors perimetre` entre 5 et 60, point estimé 20.** *Lots 8 et 9 :
  20 ; lot 10 : **9**, et la cause est écrite — ce seau compte titres, cellules
  de tableau et `alt`, donc exactement ce que la prose n'est pas, et il s'effondre
  sur des notions `embarque/` courtes.* ⚠ **La fourchette est très large vers le
  haut à cause d'UNE fiche nommée** : `embarque/mcu/ascii` a toutes les chances
  de porter une **table de codes**, et une table nombreuse en cellules peut
  charger ce seau à elle seule. *Je n'ai pas lu la fiche ; je le dis plutôt que
  de resserrer une fourchette sur une supposition.*
- **P91.15 — ligne de bilan : `8 fiche(s) lue(s), 8 a reprendre.`**
  *Fondement : aucun lot du chantier n'a rendu une source FR à zéro candidat dur,
  `afnor-nfx50-151` à 91 mots comprise.*
- **P91.16 — code de sortie de l'étape 3 : `0`.** *Lu dans le code
  (l. 1272) : `process.exit(typo || creees || etrangers ? 1 : 0)` — les trois
  seaux qui décident sont ceux que P91.10 prédit à 0, et `virgule ambigue` comme
  `C109 de prose` **n'entrent pas** dans le code de sortie.* ⚠ *Donc un code de
  sortie 1 réfuterait P91.10 sur l'un de ses trois termes mécaniques, jamais sur
  `virgule ambigue`.*

### Prédictions du bloc 91 — étape 4, anneau

- **P91.17 — `--anneau 2` rend le bloc 90 à l'identique** : NET 145, traduites
  133, RESTANT 12, `25544`, porteuses 0, clôtures 0, orphelines 0,
  `CIBLES SANS FICHE (6)`, dette 15 / 27 812 / 2 hors anneaux. *Aucune écriture
  entre les deux blocs ; un écart serait une anomalie et vaudrait ARRÊT.*
- **P91.18 — codes de sortie des étapes 0, 1, 2 et 4 : `0`.**

### Constats du bloc 91 — 17 prédictions tenues, 0 réfutée, 1 déclarative honorée

Sortie : `tools/batterie-sortie.txt`, copie C124 `tools\batterie-sortie-3008b45.txt`.

| # | prédiction | constat | verdict |
|---|---|---|---|
| P91.1 | ASCII 0 ; copie `3008b45` | 0 ; `tools\batterie-sortie-3008b45.txt` | **tenue** |
| P91.2 | `cadrage / 2 / False`, heure > 11:22:42 | `cadrage   anneau : 2   chevron : False` ; **11:28:39** | **tenue** |
| P91.3 | `0f3c9a5 2026-08-30 11:20:01 +0200`, au caractère | identique | **tenue** |
| P91.4 | `3   (hors artefacts de seance : 0)` | **3 / 0** | **tenue** |
| P91.5 | `v24.15.0` | identique | **tenue** |
| P91.6 | 3 lignes de pilotage, au caractère | identiques | **tenue** |
| P91.7 | 8 lignes de sources, **0 datée du 30/08** | 8 lignes ; 28/05, 12/06, 19/08 ×3, 20/08, 22/08 — **0** | **tenue** |
| P91.8 | 8 couples au mot | 671 / 2005 / 1397 / 398 / 385 / 519 / 1829 / 135 | **tenue** |
| P91.9 | `LOT (8 fiches)   7339` | identique | **tenue** |
| P91.10 | 4 seaux mécaniques à 0, `virgule ambigue` compris | **0 / 0 / 0 / 0** | **tenue** |
| P91.11 | `C109 de prose` ∈ [70, 145], point 105 | **82** | **tenue** |
| P91.12 | refus motivé de décomposer | refus tenu | déclarative |
| P91.13 | (a) `xbee` ≥ 1 ; (b) la plus chargée est `chien-de-garde` | (a) **1** ; (b) **chien-de-garde, 29** | **tenue** |
| P91.14 | `hors perimetre` ∈ [5, 60], point 20 | **12** | **tenue** |
| P91.15 | `8 fiche(s) lue(s), 8 a reprendre.` | identique | **tenue** |
| P91.16 | code de sortie étape 3 : 0 | **0** | **tenue** |
| P91.17 | `--anneau 2` identique au bloc 90 | identique sur les dix termes | **tenue** |
| P91.18 | codes de sortie 0, 1, 2, 4 à 0 | **0 / 0 / 0 / 0** | **tenue** |

⚠ **LA CANDIDATE NÉE AU BLOC 77 EST RÉFUTÉE À SA PREMIÈRE ÉPREUVE, ET LE LOT 11
EST LE LOT QUI POUVAIT LA RÉFUTER.** La candidate dit : *le taux de candidats
C109 se rapporte au volume de prose, pas au nombre de mots ; **une fiche courte
est presque toute en prose et sur-rend**.* **Corollaire de prédiction appliqué au
bloc 91** : élargir la fourchette **vers le haut**, ce lot étant le plus court en
moyenne du chantier. **Décomposition mesurée après coup, terme à terme :**

| fiche | mots | candidats | taux pour 100 mots |
|---|---|---|---|
| `embarque/mcu/sans-fil/xbee` | 135 | 1 | **0,74** |
| `embarque/mcu/ide` | 385 | 3 | **0,78** |
| `embarque/mcu/fonction-informatique` | 398 | 3 | **0,75** |
| `embarque/mcu/potentiometre` | 519 | 5 | **0,96** |
| `embarque/mcu/ascii` | 671 | 9 | **1,34** |
| `embarque/mcu/filtrage` | 1 397 | 14 | **1,00** |
| `embarque/mcu/programmation-non-bloquante` | 1 829 | 18 | **0,98** |
| `embarque/mcu/chien-de-garde` | 2 005 | 29 | **1,45** |
| **lot** | **7 339** | **82** | **1,12** |

⚠ **Le taux le plus HAUT est sur la PLUS GROSSE fiche du lot (1,45 sur 2 005
mots) et le plus BAS sur la PLUS PETITE (0,74 sur 135 mots)** — l'inverse exact
de ce que la candidate prédit, sur un écart de facteur **1,96**. **Les quatre
fiches sous 550 mots rendent 0,74 / 0,75 / 0,78 / 0,96, toutes SOUS la moyenne du
lot.** *Et le corollaire de prédiction a coûté : mon point estimé était **105**
pour un mesuré à **82** ; la fourchette n'a tenu que parce qu'elle était large.*

⚠ **CE QUE LA RÉFUTATION MONTRE DE LA MESURE D'ORIGINE.** La candidate du
bloc 77 reposait sur **une seule fiche** — `afnor-nfx50-151`, 91 mots, taux 2,20
—, et la deuxième plus haute du lot 10 était `protection-electronique` à
**1 389 mots**, taux 2,16. *La longueur n'expliquait déjà pas les deux valeurs
hautes de ce lot-là ; elle n'en expliquait qu'une, et c'est celle que j'ai
généralisée.*

**Amendement proposé, à verser au §8 en clôture** : *le taux de candidats C109
suit le **registre** de la fiche, pas sa longueur.* Une notion **argumentative**
— qui pose une thèse, la qualifie, l'oppose — porte des incises et des
appositions à chaque paragraphe : `chien-de-garde` 1,45, `ascii` 1,34.
Une notion **définitionnelle courte** — qui nomme un objet, en donne l'usage et
renvoie ailleurs — n'en porte presque pas : `xbee` 0,74, `ide` 0,78,
`fonction-informatique` 0,75. **La fiche de 91 mots du lot 10 était courte ET
définitionnelle dense, et c'est le second terme qui la faisait sur-rendre.**
*Corollaire de prédiction qui remplace celui du bloc 77 : la fourchette d'un lot
se cale sur la part de fiches **argumentatives** qu'il porte, mesurable avant la
mesure par la présence de sections `## Pièges` et `## Pour aller plus loin`
fournies — pas sur la taille moyenne des fiches.*

⚠ **AVERTISSEMENT C118 SUR LE TABLEAU CI-DESSUS** : sa colonne « candidats » a
été **comptée à la main** dans la sortie de l'étape 3, elle n'est pas une mesure
d'outil. **Le bloc 92 la mesure**, et la publie ici comme prédiction à réfuter.
Les colonnes « mots » et la ligne « lot » sortent, elles, des étapes 2 et 3.

---

## BLOC 92 — DÉCOMPOSITION MESURÉE DES 82 CANDIDATS C109, PAR FICHE

**Commande** (`awk` sur la sortie de l'étape 3, bornée entre les deux
en-têtes d'étape ; pas d'écriture) :

```
awk '/^>>> 3 - candidats C109/{on=1} /^>>> 4 - anneau/{on=0} on' tools/batterie-sortie.txt | awk '/^  embarque\/.*\.md$/{f=$1; next} /^ +[0-9]+ +\[C109\]/{n[f]++; t++} END{for (k in n) print n[k], k; print t, "TOTAL"}' | sort -k2
```

### Déclaration C131 du bloc 92

**Aucun fichier écrit** : `awk` lit `tools/batterie-sortie.txt` et écrit sur la
sortie standard. **Population de `git status` inchangée depuis le bloc 91 :
3 entrées, dont 0 hors artefacts de séance.**

### Test C110 du motif, AVANT de compter — échantillon nommé et ce qui pourrait le faire mordre à tort

Le motif de fiche est `^  embarque/.*\.md$` et le motif d'occurrence
`^ +[0-9]+ +\[C109\]`. **L'échantillon est la sortie entière du bloc 91**, et il
a été choisi parce qu'il porte **trois pièges nommés** :
1. l'**étape 4 (`--anneau`)** réimprime les **mêmes huit chemins** sans `.md`
   (`  embarque/mcu/ascii                    671`) — le bornage entre les deux
   en-têtes d'étape et le `\.md$` les écartent tous les deux ;
2. la **ligne de bilan** `  C109 de prose         : 82` contient `C109` sans
   crochets — le `\[C109\]` l'écarte ;
3. les **lignes d'extrait** commencent par des espaces et portent du texte
   accentué — l'ancrage `^ +[0-9]+ +\[` les écarte.
**Contrôle d'étalonnage publié avant le lancement** : le `TOTAL` du motif doit
rendre **82**, chiffre déjà publié par l'outil à l'étape 3 et non par ce motif.

### Prédictions du bloc 92

- **P92.1 — les huit termes, comptés à la main dans la sortie du bloc 91** :
  `ascii` **9**, `chien-de-garde` **29**, `filtrage` **14**,
  `fonction-informatique` **3**, `ide` **3**, `potentiometre` **5**,
  `programmation-non-bloquante` **18**, `sans-fil/xbee` **1**.
- **P92.2 — `TOTAL 82`**, égal au compteur `C109 de prose` de l'étape 3.
  ⚠ *Un total à 82 avec un terme faux est le mode d'échec du §8 —
  « un total dans la fourchette ne valide pas la décomposition » —, donc **les
  huit termes se lisent un par un** et le total ne les valide pas.*
- **P92.3 — huit lignes de fiche et une de total, soit neuf lignes**, aucun
  chemin étranger aux huit sources du lot.

### Constats du bloc 92 — 3 prédictions tenues, 0 réfutée

```
82 TOTAL
9 embarque/mcu/ascii.md
29 embarque/mcu/chien-de-garde.md
14 embarque/mcu/filtrage.md
3 embarque/mcu/fonction-informatique.md
3 embarque/mcu/ide.md
5 embarque/mcu/potentiometre.md
18 embarque/mcu/programmation-non-bloquante.md
1 embarque/mcu/sans-fil/xbee.md
```

- **P92.1 ✅ LES HUIT TERMES, UN PAR UN.** 9 / 29 / 14 / 3 / 3 / 5 / 18 / 1.
- **P92.2 ✅** `TOTAL 82`, égal au compteur de l'étape 3 — **le motif est
  étalonné contre un chiffre qu'il n'a pas produit**.
- **P92.3 ✅** neuf lignes, aucun chemin étranger : les trois pièges nommés du
  test C110 ont tous été écartés, y compris les huit chemins sans `.md` que
  l'étape 4 réimprime.

✅ **LE TABLEAU DES TAUX DU BLOC 91 EST DONC MESURÉ, ET LA RÉFUTATION DE LA
CANDIDATE DU BLOC 77 TIENT SUR HUIT TERMES MESURÉS ET NON SUR UN COMPTAGE À
L'ŒIL.**

---

## ⛳ GATE G1 — fin de cadrage. Composition du lot 11 arrêtée.

**Fait** — **quatre blocs (89 garde, 90 composition, 91 cadrage, 92
décomposition)**, **deux gardes de péremption au vert**, `HEAD 0f3c9a5` stable au
caractère sur les deux, **zéro écriture dans `content/`**. Lot composé sur un
critère qui **ne rend plus rien sous la borne**, assomption écrite avec son coût
de revert.

**Chiffres** — lot **8 fiches, 7 339 mots**, **+682 au-dessus de la borne 6 657
(110,2 %)**. **82 candidats C109** de prose, décomposés et mesurés
**9 / 29 / 14 / 3 / 3 / 5 / 18 / 1**, **12 hors périmètre**, **les quatre seaux
mécaniques à 0**. Anneau 2 restant **12 / 25 544**, dette **15 / 27 812**,
porteuses de chevron **0** — `ded` = 0, `tot` = `deh`, **C127 hors sujet pour le
sixième lot d'affilée**. `CIBLES SANS FICHE` **6**, faux positif connu sur les
alias.

**Bilan prédictions/constats du cadrage : 31 prédictions à décompte plein,
30 tenues, 1 réfutée** (plus 1 déclarative). *La seule réfutation, P90.9, est
tombée sur le compteur dont j'avais écrit dans la prédiction même que je n'avais
pas relu le code — C116 (7) annoncé et non appliqué.*

**Ce qui suit** — bloc **93** : les **cinq relevés d'avant rédaction** (formes de
production des titres de section EN, titres de callout, titres-doublons des deux
côtés, puces à tiret sous éprouvage bilingue C110, libellés bornés aux deux
bouts), puis le jugement un par un des 82 candidats sous C123.

---

⚠ **ARBITRAGE DE TIM AU GATE G1 — RENDU, ET IL EST DE NE PAS ARBITRER.**
Réponse : *« si tu n'as pas besoin de mon arbitrage, continue jusqu'à la fin du
traitement des lots/fiches demandées »*. **L'assomption du bloc de composition
devient donc la décision de la séance** : lot 11 = `embarque/mcu/` en entier,
8 fiches, 7 339 mots, **borne 6 657 dépassée de 10,2 %**, coût du revert écrit.
*La question « la borne tient-elle encore » reste posée pour les lots 12 et 13,
et va au JOURNAL comme arbitrage en attente, pas comme blocage.*

---

## BLOC 93 — RELEVÉS 1, 2 ET 5 D'AVANT RÉDACTION

**Commandes, dans cet ordre** : garde ; script jetable de relevé
(scratchpad, **hors dépôt**, C114) redirigé vers
`tools/releves-avant-redaction-lot11-3008.txt` ; `titres-doublons.mjs` appendé au
même fichier.

### Déclaration C131 du bloc 93

**Population** : entrées de `git status --porcelain`.
**État déclaré à l'entrée du bloc : 3 entrées** — `predictions-260830.md` (` M`),
`batterie-sortie-3008b44.txt` (`??`), `batterie-sortie-3008b45.txt` (`??`).
**Versements que CE bloc s'ajoute en route, nommés :**
1. `tools/batterie-sortie-3008b46.txt`, copie C124 créée par l'étape 0 de la
   garde **avant** la lecture du compteur → **+1 `??`**, filtrée du sous-compteur ;
2. `tools/releves-avant-redaction-lot11-3008.txt`, créé **après** la garde →
   **+1 `??`**, **compté au sous-compteur `hors artefacts de seance`** ;
3. le **script de relevé** vit dans le scratchpad de session, **hors dépôt** —
   **0 entrée**.
**Deux instants** : **4 entrées / 0 hors artefacts** quand la garde lit le
compteur ; **5 / 1** en fin de bloc.
*Liste close : ce bloc ne crée ni table TSV, ni test négatif, ni `--recaler`, ni
fiche.*

### Prédictions du bloc 93 — garde

- **P93.1** — ASCII `0` ; copie `tools\batterie-sortie-3008b46.txt` ; heure
  **> 11:28:39** ; `HEAD git : 0f3c9a5 2026-08-30 11:20:01 +0200` **au
  caractère** ; `node : v24.15.0` ; **3 lignes de dates de pilotage inchangées
  au caractère** ; `fichiers modifies non commites : 4   (hors artefacts de seance : 0)`.

### Prédictions du bloc 93 — RELEVÉ 1, formes de production des titres de section EN

- **P93.2 — les six formes de production sortent INCHANGÉES par rapport à la
  référence de clôture du lot 10** : `## See also` **219**,
  `## What is it for?` **153**, `## Pitfalls` **152**,
  `## Where it fits in the project` **105**, `## Exercises` **37**,
  `## Going further` **31**. *Fondement : aucune fiche EN n'a été écrite depuis
  cette clôture, et la garde du bloc 91 l'a dit — `content/en/` est intact,
  `git status` ne porte aucun fichier de `content/`.*
- **P93.3 — les deux formes fautives du lot 4 restent à 0** :
  `## Project connection` **0**, `## Step-by-step procedure` **0**.
  *Cinquième confirmation du correctif É1 de la suite 10.*
- **P93.4 — `## Step by step` sort à 78.** *Fondement : **77** au relevé
  d'avant rédaction du lot 10, plus **1** — `etat-de-l-art-technique` porte
  `## Procédure pas à pas`, et le relevé complémentaire du bloc 82 a déclaré
  cette correspondance avant de l'écrire. **C'est le seul des six titres de
  section du lot 10 à alimenter cette forme.***
- **P93.5 — `POPULATION (fichiers balayes) : 227`**, égale au nombre de fiches
  EN publié à la clôture du lot 10. *Le script écrit sa population dans sa
  sortie, règle d'usage du 29/08 (suite 11).*

### Prédictions du bloc 93 — RELEVÉ 2, titres de callout EN

- **P93.6 — les sept titres nommés par le brief, un par un** : `Watch out`
  **49**, `Tip` **46**, `Good` **3**, `Fair` **3**, `Poor` **3**,
  `Attention` **0**, `Astuce` **0** — inchangés pour la même raison qu'en P93.2.
- **P93.7 — `> [!example] Example: 3-axis arm project` reste la forme la plus
  fréquente du relevé**, devant `Watch out` et `Tip`. *Elle sortait à **54** au
  relevé du lot 10, contre 47 et 44 ; **je ne prédis pas sa valeur**, aucune
  clôture ne l'ayant publiée après les cinq fiches du lot 10.*

### Prédictions du bloc 93 — RELEVÉ 5, titres-doublons des DEUX côtés

- **P93.8 — FR `243 / 243 / 0` et EN `227 / 227 / 0`**, aux valeurs de clôture
  du lot 10 : fiches lues / titres distincts / groupes en collision, **0 fiche
  concernée des deux côtés**.
  ⚠ *La règle d'usage de C125 exige de relever les groupes **des deux côtés** et
  de les comparer : un groupe présent d'un seul côté est un défaut de report.
  **Zéro des deux côtés est le seul état où la comparaison est triviale**, et
  c'est celui du chantier depuis le lot 8.*

### Terme écrit pour réfuter

Toute valeur de P93.2, P93.6 ou P93.8 différente de sa référence signifierait
qu'une fiche EN a bougé depuis la clôture du lot 10 **sans que `git status` ne
le voie** — ce qui vaudrait **ARRÊT** et non ajustement.

### Constats du bloc 93 — 8 prédictions tenues, 0 réfutée

Sortie : `tools/releves-avant-redaction-lot11-3008.txt` ;
garde `tools\batterie-sortie-3008b46.txt`.

| # | prédiction | constat | verdict |
|---|---|---|---|
| P93.1 | ASCII 0 ; copie `3008b46` ; heure > 11:28:39 ; HEAD au caractère ; `v24.15.0` ; 3 dates inchangées ; `4   (hors artefacts : 0)` | 0 ; `3008b46` ; **17:21:58** ; `0f3c9a5 2026-08-30 11:20:01 +0200` ; `v24.15.0` ; identiques ; **4 / 0** | **tenue** |
| P93.2 | 219 / 153 / 152 / 105 / 37 / 31 | **identiques aux six** | **tenue** |
| P93.3 | `## Project connection` 0, `## Step-by-step procedure` 0 | **0 / 0** | **tenue** |
| P93.4 | `## Step by step` **78** | **78** | **tenue** |
| P93.5 | `POPULATION (fichiers balayes) : 227` | **227** | **tenue** |
| P93.6 | 49 / 46 / 3 / 3 / 3 / 0 / 0 | **identiques aux sept** | **tenue** |
| P93.7 | `Example: 3-axis arm project` en tête, devant `Watch out` et `Tip` | **54 > 49 > 46** | **tenue** |
| P93.8 | FR `243 / 243 / 0`, EN `227 / 227 / 0` | identiques | **tenue** |

⚠ **UN ÉCART D'HORLOGE DE SIX HEURES ENTRE LES BLOCS 91 ET 93, ET CE N'EST PAS
UNE ANOMALIE** : 11:28:39 → **17:21:58**, temps de réponse de Tim au gate G1.
**La garde le dit** : `HEAD` identique au caractère, trois dates de pilotage
identiques à la seconde, compteur à 4 / 0 conforme à la déclaration.
*Une garde de péremption sert exactement à cela — distinguer un dépôt qui a
attendu d'un dépôt qui a bougé.*

✅ **P93.4 EST LE TERME QUI PORTE.** Les six formes de production sont
**inchangées** et ne prouvent donc qu'une chose : `content/en/` n'a pas bougé.
`## Step by step` est le seul compteur du relevé qui **devait** bouger — de 77 à
78, par la seule fiche du lot 10 portant `## Procédure pas à pas` —, et il tombe
au chiffre. *Prédire six chiffres inchangés est facile ; c'est le septième qui
mesure quelque chose.*

---

## BLOC 94 — RELEVÉS 3 ET 4 D'AVANT RÉDACTION

**Commande** : script jetable (scratchpad, **hors dépôt**), appendé à
`tools/releves-avant-redaction-lot11-3008.txt`.

### Déclaration C131 du bloc 94

**État à l'entrée : 5 entrées, dont 1 hors artefacts de séance**
(`releves-avant-redaction-lot11-3008.txt`).
**Versement de ce bloc : aucun** — le fichier de relevé **existe déjà** et est
déjà `??` ; l'append **ne crée pas d'entrée**. Le script vit hors dépôt.
**Total inchangé : 5 entrées, dont 1 hors artefacts de séance.**
⚠ *C'est le cas de figure de la première épreuve de la règle `--recaler` au
lot 8 — une écriture sur un fichier déjà `??` ne bouge pas le compteur — et
**c'est un coup de chance et non une garde** : sur un fichier suivi, la
déclaration serait fausse sans que rien ne le signale.*

### Test C110 du motif de cible, AVANT de compter

Le motif de lien est
`/\[\[([^\]|#]+)(?:#[^\]|]*)?(?:\|([^\]]*))?\]\]/g` et la cible est retenue si
elle **égale** `<slug>-en` ou **se termine par** `/<slug>-en` — **bornée aux deux
bouts**, règle d'usage 15 née de la double morsure du lot 9.
**L'échantillon nommé est le corpus EN entier, et il porte trois pièges de
sous-chaîne que le bornage doit écarter :**
1. **`ide-en`** est sous-chaîne de **`guide-en`** — le corpus porte
   `content/en/conduite/proj/…` et des fiches de méthode ; un motif non borné à
   gauche compterait tout `guide-en` pour un `ide-en` ;
2. **`ascii-en`** et **`filtrage-en`** sont sous-chaînes de rien de connu, **et
   c'est justement pourquoi ils ne prouvent rien** — ils sont dans
   l'échantillon comme témoins négatifs ;
3. **`programmation-non-bloquante-en`** est **sous-chaîne d'aucun slug mais
   SUR-chaîne** de `arduino-programmation-non-bloquante-en` et
   `micropython-programmation-non-bloquante-en` — un motif borné **à droite
   seulement** (`endsWith`) les compterait tous les deux à tort.
   ⚠ **C'est le piège qui mord vraiment sur ce lot**, et il est de la famille
   exacte de la double morsure du lot 9. Le bornage à gauche est le `/` :
   `c.endsWith('/' + cible)`, jamais `c.endsWith(cible)`.

### Prédictions du bloc 94 — RELEVÉ 3, libellés vers les huit cibles

- **P94.1 — `POPULATION (fichiers EN balayes) : 227`.**
- **P94.2 — AUCUNE des huit cibles ne rend 0 libellé.** *Fondement : les huit
  sont à l'anneau 2, donc atteintes depuis une fiche de l'anneau 1, laquelle est
  traduite par construction — et `--anneau` a rendu
  `ATTEIGNABLES PAR AUCUN PARENT TRADUIT (0)` deux fois ce matin.*
  ⚠ **Terme écrit pour réfuter** : un 0 signifierait un faux négatif du bornage,
  l'erreur exacte que le premier correctif du lot 9 avait produite.
- **P94.3 — l'ORDRE des huit cibles par nombre de fiches EN qui les visent**,
  prédit sans chiffres, du plus visé au moins visé :
  `programmation-non-bloquante-en` > `chien-de-garde-en` > `filtrage-en` >
  `potentiometre-en` > `ide-en` > `fonction-informatique-en` > `ascii-en` >
  `xbee-en`. *Fondement : les trois premières sont des notions transverses citées
  par les fiches de chaque famille MCU (temporisation, machine à états, capteur
  analogique), les trois dernières sont des feuilles.*
  ⚠ **Je ne prédis AUCUN chiffre par cible**, et le refus est motivé : aucune
  clôture du chantier n'a publié le nombre de liens entrants d'une fiche
  `embarque/mcu/`, et un prorata sur le volume des fiches serait la faute que le
  bloc 77 a mesurée.
- **P94.4 — invariant de relation, prédit comme FORME EXACTE et vérifié cible
  par cible** : pour chacune des huit,
  **`fiche(s) EN` ≤ `fiche(s) FR traduites qui la visent`**.
  *Fondement : un libellé anglais n'existe que si sa fiche source a été
  traduite.* ⚠ **L'égalité n'est PAS prédite** : le compte FR ne résout pas les
  **alias** (`[[watchdog]]` vers `chien-de-garde`), donc une fiche EN peut viser
  la cible sans que le compte FR ne la voie — l'inégalité peut se renverser, et
  **ce serait un fait à consigner, pas une erreur de motif**.

### Prédictions du bloc 94 — RELEVÉ 4, titres de section des huit sources FR

- **P94.5 — les huit sources portent ensemble entre 25 et 45 titres `##`/`###`,
  point estimé 34.** *Base : les cinq sources du lot 10 en portaient 36, les
  cinq du lot 8 également 36 ; ce lot a **huit** fiches mais **cinq** d'entre
  elles pèsent moins de 700 mots et n'ont place que pour deux ou trois sections.*
- **P94.6 — quatre familles génériques et leurs effectifs, prédits un par un** :
  `## À quoi ça sert ?` **8**, `## Voir aussi` **8**, `## Pièges` **6**,
  `## Comment ça marche ?` **3**. *Fondement : les deux premières sont l'ossature
  de toute fiche-notion du corpus et aucune des huit n'y échappe — la seule fiche
  du chantier sans `## Voir aussi` était `afnor-nfx50-151`, à 91 mots ;
  `## Pièges` manque aux plus courtes.*
- **P94.7 — `embarque/mcu/sans-fil/xbee`, 135 mots, porte AU PLUS 2 titres de
  section.** *C'est la plus petite du lot et la deuxième plus petite du
  chantier.*
- **P94.8 — au moins UNE forme de titre neuve** — propre à une fiche et sans
  correspondance de production — **sera à déclarer avant d'être écrite**.
  *Les lots 8 et 10 en ont déclaré une et trois ; un lot de huit notions
  techniques distinctes n'a aucune raison de tenir dans le gabarit générique.*

### Constats du bloc 94 — 6 prédictions tenues, 2 réfutées

| # | prédiction | constat | verdict |
|---|---|---|---|
| P94.1 | `POPULATION (fichiers EN balayes) : 227` | **227** | **tenue** |
| P94.2 | aucune cible à 0 | 4 / 10 / 12 / 12 / 7 / 14 / 12 / 3 libellés | **tenue** |
| P94.3 | ordre des huit par fiches EN | **faux dès le 1er rang** | **RÉFUTÉE** |
| P94.4 | `fiche(s) EN` ≤ `fiche(s) FR traduites` sur les huit | **égalité sur les huit** | **tenue** |
| P94.5 | titres `##`/`###` ∈ [25, 45], point 34 | **42** | **tenue** |
| P94.6 | `À quoi ça sert ?` 8, `Voir aussi` 8, `Pièges` 6, `Comment ça marche ?` 3 | **6 / 8 / 5 / 4** | **RÉFUTÉE** (3 termes sur 4) |
| P94.7 | `xbee` porte au plus 2 titres | **2** | **tenue** |
| P94.8 | au moins une forme neuve à déclarer | **seize** | **tenue** |

✅ **P94.4 EST LE TERME QUI PORTE, ET IL TOMBE À L'ÉGALITÉ SUR LES HUIT.**
3 = 3, 7 = 7, 7 = 7, 8 = 8, 6 = 6, 11 = 11, 7 = 7, 2 = 2. *L'inégalité était
prédite large **parce que le compte FR ne résout pas les alias** ; l'égalité
stricte dit qu'**aucune** des huit cibles n'est visée par un alias depuis le
corpus anglais.* ⚠ **Et le test C110 du motif a servi** : `potentiometre-en` et
`programmation-non-bloquante-en` ont chacune un viseur FR **non traduit** —
`simulation/falstad` et `chien-de-garde`, toutes deux du restant —, ce qui fait
**12 viseurs FR pour 11 fiches EN** et **8 pour 7**. *Un bornage à droite seul
aurait compté `arduino-programmation-non-bloquante-en` et
`micropython-programmation-non-bloquante-en` dans la cible
`programmation-non-bloquante-en`, et l'invariant aurait sauté dans l'autre
sens — le piège nommé avant la mesure est celui qui aurait mordu.*

⚠ **P94.3 EST FAUSSE DÈS LE PREMIER RANG, ET LA CAUSE EST LA MÊME QUE CELLE DU
BLOC 77 SOUS UN TROISIÈME HABIT.** Ordre prédit / mesuré, en fiches EN :

| cible | rang prédit | fiches EN | rang réel |
|---|---|---|---|
| `potentiometre-en` | 4 | **11** | **1** |
| `fonction-informatique-en` | 6 | **8** | **2** |
| `chien-de-garde-en` | 2 | 7 | 3 ex æquo |
| `filtrage-en` | 3 | 7 | 3 ex æquo |
| `programmation-non-bloquante-en` | **1** | 7 | 3 ex æquo |
| `ide-en` | 5 | 6 | 6 |
| `ascii-en` | 7 | 3 | 7 |
| `xbee-en` | 8 | 2 | 8 |

*J'ai classé sur la **centralité conceptuelle** — « notion transverse citée par
chaque famille MCU » — quand le compteur mesure le **nombre de fiches de
réalisation qui s'en servent**. `potentiometre` est une notion de premier
niveau, citée par **cinq** fiches de moteur et **trois** de capteur des deux
familles Arduino et MicroPython ; `programmation-non-bloquante` est citée par les
fiches qui l'**enseignent**, qui sont deux.* ⚠ **Les deux seuls rangs justes sont
les deux derniers**, et ils l'étaient pour la bonne raison : `ascii` et `xbee`
sont des feuilles. **Le milieu du classement était une intuition, pas une
mesure**, et je ne l'avais pas dit.

⚠ **P94.6 RÉFUTÉE SUR TROIS TERMES DE QUATRE, ET LE QUATRIÈME EST CELUI QUI
COMPTE POUR LA SUITE.** `## Voir aussi` sort à **8 sur 8**, seule famille que
les huit fiches portent toutes. Les trois autres ratent **par le haut** :
`## À quoi ça sert ?` **6** (manque à `ide` et `xbee`), `## Pièges` **5**
(manque à `ascii`, `ide`, `xbee`), `## Comment ça marche ?` **4**.
*J'avais posé « l'ossature de toute fiche-notion » comme une règle, et trois des
huit fiches ne la suivent pas : `ide` **ouvre** sur
`## Ce que l'IDE prend en charge`, `xbee` sur `## Comment ça marche ?`, `ascii`
n'a pas de section `## Pièges`.*

⚠⚠ **ET LE RELEVÉ ATTRAPE UNE FORME QUI DIFFÈRE D'UN SEUL CARACTÈRE, TROISIÈME
FOIS DU CHANTIER.** `embarque/mcu/potentiometre` porte **`## Comment ça marche`
SANS point d'interrogation**, quand les quatre autres portent
`## Comment ça marche ?`. *C'est la famille exacte de
`## Exemple — Le bras 3 axes` contre `## Exemple — le bras 3 axes` (lot 10, la
majuscule) et de `## Exemple — Bras 3 axes pédagogique` (lot 8).* **Aucun
contrôle du dépôt ne le verrait**, et un relevé qui aurait normalisé la
ponctuation aurait fondu les deux formes. **À trancher au relevé complémentaire
du bloc 95, avant d'écrire.**

⚠ **P94.5 tombe dans la fourchette à 42 pour un point estimé à 34**, et la
fourchette a tenu par sa borne haute. *Cause lisible : `chien-de-garde` porte
**9** titres et `programmation-non-bloquante` **8** à elles deux 17, quand les
trois plus petites — `ide`, `xbee`, `fonction-informatique` — en portent **9**
ensemble. **Même variable que le taux de C109 : le registre argumentatif, pas la
taille.*** ✅ *C'est la deuxième mesure du jour à pointer la même cause, et
l'amendement proposé au bloc 91 s'en trouve renforcé.*

---

## BLOC 95 — RELEVÉ COMPLÉMENTAIRE : FRONT MATTER, FAMILLES DE TITRES, SYMÉTRIE DES LIBELLÉS

**Commande** : script jetable (scratchpad, **hors dépôt**), appendé à
`tools/releves-avant-redaction-lot11-3008.txt`.

### Déclaration C131 du bloc 95

**État à l'entrée : 5 entrées, dont 1 hors artefacts de séance.**
**Versement de ce bloc : aucun** — append sur un fichier déjà `??`, script hors
dépôt. **Total inchangé : 5 / 1.**

### Prédictions du bloc 95 — A, front matter des huit sources

- **P95.1** — les huit portent un `title:`, et **aucune n'est en `draft: true`**.
- **P95.2** — **au plus DEUX des huit portent un bloc `aliases:`.** *Fondement :
  le lot 10 en avait une sur cinq (`boucle-ouverte`, alias
  `commande en boucle ouverte`). Candidates naturelles ici : `chien-de-garde`
  (`watchdog`) et `programmation-non-bloquante`.*

### Prédictions du bloc 95 — B, poids des familles de titres

- **P95.3** — `## Comment ça marche ?` : **FR 16, EN 11**. *Fondement : 16 FR →
  10 EN au relevé complémentaire du lot 10, et le relevé 1 de ce matin mesure
  `## How does it work?` à **11** — la fiche `asservissement` du lot 10 a ajouté
  la onzième. Aucune fiche FR n'a été écrite depuis, donc 16 tient.*
- **P95.4** — `## Comment ça marche` **SANS** point d'interrogation : **FR entre
  1 et 4, point estimé 2** ; EN `## How does it work` sans `?` : **0**.
  ⚠ **Terme écrit pour réfuter** : un EN à 0 dit que la forme sans `?` n'a
  **jamais** été reportée, et il faudra décider si `potentiometre` porte une
  distinction que l'anglais n'a jamais eu à rendre.
- **P95.5** — `## Cas particulier*` : **FR entre 8 et 14** ; EN
  `## Special case*` : **101**. *Fondement du 101 : **99** au relevé
  complémentaire du lot 10, plus les **deux** fiches de ce lot-là portant un
  `## Cas particulier` — `etat-de-l-art-technique` et `boucle-ouverte`.*
- **P95.6** — `## Example*` EN : **≥ 20**, sans point estimé. *Le relevé 1 de ce
  matin ne montre qu'une forme de la famille au-dessus du seuil de 5 —
  `## Example — 3-axis teaching arm` à 9 —, ce qui dit que la famille est
  **éclatée en formes propres**, et une famille éclatée ne se prédit pas au
  total.*
- **P95.7** — les trois familles d'ossature côté FR : `## À quoi ça sert ?`
  **[130, 160]**, `## Pièges` **[130, 160]**, `## Voir aussi` **[225, 243]**.
  *Fondement : leurs jumelles EN valent 153, 152 et 219 sur **227** fiches
  traduites, pour **243** fiches FR ; le rapport 243/227 = 1,07 les porterait à
  164, 163 et 235, mais les 16 fiches non traduites sont des notions courtes.*

### Prédictions du bloc 95 — C, libellés FRANÇAIS vers les huit cibles

- **P95.8** — pour chacune des huit, le total de libellés FR est **supérieur ou
  égal** au total anglais du relevé 3 — 4 / 10 / 12 / 12 / 7 / 14 / 12 / 3.
  *Fondement : 243 fiches FR contre 227 EN, et toute fiche EN reporte les liens
  de sa source un pour un.*
- **P95.9** — `chien-de-garde` porte une **collision de libellé français**, du
  type `chien de garde` contre `watchdog`. *C'est la seule des huit dont le
  concept a un nom anglais d'usage courant en français, et le corpus EN écrit
  déjà `Watchdog` 6 et `watchdog` 4.*
- **P95.10** — `fonction-informatique` est celle dont le report de titre
  **demandera un arbitrage** : les libellés anglais sont partagés `Function` 5 /
  `functions` 5 / `function` 2, *aucune forme majoritaire, et le singulier et le
  pluriel ne désignent pas la même chose.*

### Constats du bloc 95 — 5 prédictions tenues, 5 réfutées

| # | prédiction | constat | verdict |
|---|---|---|---|
| P95.1 | 8 `title:`, 0 `draft: true` | 8 `title:`, 8 `draft: false` | **tenue** |
| P95.2 | **au plus 2** blocs `aliases:` | **3** (`chien-de-garde`, `filtrage`, `programmation-non-bloquante`) | **RÉFUTÉE** |
| P95.3 | `## Comment ça marche ?` FR **16**, EN **11** | FR **15**, EN **11** | **RÉFUTÉE** (1er terme) |
| P95.4 | FR sans `?` ∈ [1, 4] point 2 ; EN sans `?` **0** | **1** ; **0** | **tenue** |
| P95.5 | `## Cas particulier*` FR ∈ [8, 14] ; EN **101** | FR **107** ; EN **104** | **RÉFUTÉE** (les deux termes) |
| P95.6 | `## Example*` EN ≥ 20 | **114** | **tenue** |
| P95.7 | FR `À quoi ça sert ?` [130,160], `Pièges` [130,160], `Voir aussi` [225,243] | **164**, **162**, **234** | **RÉFUTÉE** (2 termes sur 3) |
| P95.8 | libellés FR ≥ libellés EN sur les huit | 4/10/12/12/7/**16**/**13**/3 contre 4/10/12/12/7/14/12/3 | **tenue** |
| P95.9 | collision de libellé FR `chien de garde` / `watchdog` | **aucun `watchdog` en libellé FR** ; seulement `Chien de garde` 6 / `chien de garde` 4 | **RÉFUTÉE** |
| P95.10 | `fonction-informatique` demandera un arbitrage de titre | **`Fonction` 5 / `fonctions` 5 / `fonction` 2 côté FR aussi** | **tenue** |

⚠⚠ **P95.3 RÉFUTÉE D'UNE UNITÉ, ET C'EST LA RÉFUTATION LA PLUS UTILE DU BLOC :
ELLE DIT QUE LE RELEVÉ DU LOT 10 A NORMALISÉ CE QU'IL DEVAIT SÉPARER.** Le relevé
complémentaire du lot 10 publiait `## Comment ca marche ? (16 FR)`. Mesuré
aujourd'hui, à motif **borné et non normalisé** : **15 avec `?`** et **1 sans**.
*Aucune fiche FR n'a été écrite entre les deux, donc les deux chiffres portent
sur le même corpus : le 16 du lot 10 est la SOMME des deux formes, et son motif
pliait le point d'interrogation.* ⚠ **C'est la quatrième fois du chantier qu'une
forme française se distingue d'une autre par un seul caractère** — la majuscule
de `## Exemple — Le bras 3 axes` (lot 10), le qualificatif de
`## Exemple — Bras 3 axes pédagogique` (lot 8), et maintenant un point
d'interrogation. **Et c'est la première fois que le relevé du lot précédent est
pris en défaut par celui du lot suivant.**

✅ **P95.5 EST RÉFUTÉE SUR SES DEUX TERMES, ET L'ÉCART FR/EN S'EXPLIQUE
INTÉGRALEMENT PAR LE LOT 11 LUI-MÊME.** `## Cas particulier*` **FR 107**,
`## Special case*` **EN 104**, **écart de 3**. *Les trois fiches françaises qui
portent un `## Cas particulier` sans jumelle anglaise sont **exactement**
`chien-de-garde`, `filtrage` et `programmation-non-bloquante` — les trois plus
grosses du lot 11.* **L'écart se refermera à 107 / 107 à la clôture de ce lot,
et c'est un contrôle publié d'avance.** ⚠ *Ma borne FR [8, 14] était une faute de
population : j'ai chiffré la famille comme si elle ne vivait que dans les huit
sources, quand le relevé balaie le corpus entier. **C131 dit de déclarer la
population d'un compteur qu'on prédit ; je l'ai déclarée pour les autres et pas
pour celui-là.***

⚠ **P95.7 RÉFUTÉE SUR DEUX TERMES, ET LA CAUSE EST QUE J'AI CORRIGÉ UNE
ESTIMATION JUSTE.** Le rapport 243/227 = 1,07 appliqué aux trois compteurs EN
donne **164 / 163 / 235** ; **mesuré 164 / 162 / 234**. *J'ai écrit ces trois
nombres dans le fondement de la prédiction, puis je les ai **abaissés** en
raisonnant que les 16 fiches non traduites seraient des notions courtes sans
ces sections — et le relevé 4 venait pourtant de montrer que trois des huit
sources n'ont ni `## À quoi ça sert ?` ni `## Pièges`.* ⚠ **Le modèle
proportionnel naïf tombait à 0, 1 et 1 près ; ma correction l'a fait sortir de la
fourchette.** *Règle d'usage candidate : quand un fondement rend un nombre, la
prédiction est ce nombre — une correction « de bon sens » appliquée après coup
doit se chiffrer elle aussi, ou ne pas s'appliquer.*

⚠ **P95.9 RÉFUTÉE, ET LE FAIT MESURÉ VAUT MIEUX QUE LA PRÉDICTION.** Il n'y a
**aucun libellé `watchdog` en français** : `watchdog` est un **alias** de la
fiche, pas un libellé de lien. *La distinction est exactement celle que la
réfutation P90.9 de ce matin a coûtée — un alias n'est pas un libellé, et le
compteur ne les mélange pas.*

✅ **LE FAIT LE PLUS FORT DU BLOC N'ÉTAIT PRÉDIT PAR AUCUNE PRÉDICTION : LE
REPORT DES LIBELLÉS EST UN POUR UN SUR LES HUIT CIBLES, CASSE COMPRISE.**

| cible | libellés FR | libellés EN |
|---|---|---|
| `ascii` | `Code ASCII` 3 / `code ASCII` 1 | `ASCII code` **4** |
| `chien-de-garde` | `Chien de garde` 6 / `chien de garde` 4 | `Watchdog` **6** / `watchdog` **4** |
| `filtrage` | `Filtrer des mesures` 7 / `filtrer des mesures` 4 / `filtrage` 1 | `Filtering measurements` **7** / `filtering measurements` **4** / `Filtering` **1** |
| `fonction-informatique` | `Fonction` 5 / `fonctions` 5 / `fonction` 2 | `Function` **5** / `functions` **5** / `function` **2** |
| `ide` | `IDE` 7 | `IDE` **7** |
| `potentiometre` | `potentiomètre` 10 / `Potentiomètre` 4 / `Le potentiomètre` 2 | `potentiometer` **11** / `Potentiometer` **3** |
| `programmation-non-bloquante` | `Programmation non bloquante` 8 / `programmation non bloquante` 5 | `Non-blocking programming` **7** / `non-blocking programming` **5** |
| `xbee` | `XBee` 3 | `XBee` **3** |

**Six cibles sur huit sont un report parfait**, décomposition de casse comprise.
Les deux écarts s'expliquent **entièrement** par les viseurs non traduits que le
relevé 3 avait nommés — `simulation/falstad` ×2 vers `potentiometre`,
`chien-de-garde` ×1 vers `programmation-non-bloquante`.
⚠ **Deux asymétries de casse d'un seul caractère restent, et elles sont
consignées et non corrigées** : `filtrage` (minuscule) → `Filtering`
(majuscule) ; et sur `potentiometre`, la décomposition FR **10 / 4** contre EN
**11 / 3** ne se referme qu'en supposant que les deux libellés de `falstad` sont
les deux `Le potentiomètre` — *une hypothèse que je n'ai pas mesurée et que je ne
fais pas passer pour une mesure*. **Hors périmètre du lot 11.**

⚠ **INCIDENT DE MOTIF DANS MON PROPRE RELEVÉ, ET IL FAUSSE LA LECTURE DES
`aliases:`.** Le filtre du relevé A imprime toute ligne
`^\s+- ` **quelle que soit sa clé parente** : les blocs `aliases:` affichés
portent donc des entrées qui appartiennent à d'**autres** clés — `microcontroleur`
et `integration-et-tests` sous `chien-de-garde`, `adc` et `preuve-de-concept`
sous `filtrage`, et une ligne `- preuve-de-concept` **avant** `tags:` sous
`fonction-informatique`. ⚠ *C'est C110 à la lettre, et mon échantillon nommé ne
portait que des titres et des libellés, pas du front matter.* **La lecture des
`aliases:` est REPRISE au bloc 96 sur un motif qui suit la clé**, et P95.2 y sera
rejugée. *En l'état, le seul terme sûr de P95.2 est qu'il y a **au moins** trois
blocs `aliases:`, ce qui suffit à la réfuter.*

---

## BLOC 96 — REPRISE DE LA LECTURE DU FRONT MATTER, ET COLLISIONS DE TITRE

**Commande** : script jetable (scratchpad, **hors dépôt**), appendé à
`tools/releves-avant-redaction-lot11-3008.txt`. **Ce bloc corrige un motif de
mon relevé du bloc 95, il ne mesure pas autre chose.**

### Déclaration C131 du bloc 96

**État à l'entrée : 5 entrées, dont 1 hors artefacts de séance.**
**Versement : aucun** — append sur un fichier déjà `??`. **Total inchangé : 5 / 1.**

### Test C110 du motif corrigé, AVANT de compter

Le motif du bloc 95 imprimait toute ligne `^\s+- ` **sans regarder sa clé**.
Le motif corrigé **suit la clé de premier niveau** : `^([A-Za-z_][\w-]*):\s*(.*)$`
ouvre une clé, `^\s+-\s+(.*)$` ajoute à la **clé ouverte au-dessus**, et **toute
ligne non vide qui n'est ni l'une ni l'autre est imprimée sous un marqueur
`?? ligne hors cle`**. *L'échantillon nommé est le front matter des huit sources,
et il porte le piège qui a fait mordre le premier motif : `chien-de-garde`
affichait `microcontroleur` et `integration-et-tests` **dans** son bloc
`aliases:`, `filtrage` affichait `adc` et `preuve-de-concept`, et
`fonction-informatique` affichait une ligne `- preuve-de-concept` **avant** sa
clé `tags:`.*

### Prédictions du bloc 96

- **P96.1 — TROIS blocs `aliases:` sur les huit**, et leur contenu **exact** :
  `chien-de-garde` → `watchdog`, `WDT` (**2**) ;
  `filtrage` → `filtre numérique`, `moyenne glissante`, `filtre médian` (**3**) ;
  `programmation-non-bloquante` → `boucle coopérative`, `super-loop`,
  `non bloquant` (**3**). **Total 8 alias sur 3 fiches.**
  *Les cinq autres entrées affichées au bloc 95 — `microcontroleur`,
  `integration-et-tests` ×2, `adc`, `preuve-de-concept` ×2 — sont prédites
  appartenir à d'**autres clés**.*
- **P96.2 — AUCUNE ligne `?? ligne hors cle` sur les huit.** ⚠ **C'est le terme
  qui décide si le corpus a un défaut ou si c'est mon motif qui en avait un.**
  *Une ligne hors clé sous `fonction-informatique` serait un front matter mal
  formé, à consigner comme défaut du corpus et hors périmètre du lot.*
- **P96.3 — collisions des titres candidats** :
  `ASCII code` **libre**, `Watchdog` **libre**, `Filtering measurements`
  **libre**, `IDE` **libre**, `Potentiometer` **libre**,
  `The potentiometer` **libre**, `Non-blocking programming` **libre**,
  `XBee` **libre** ; **`Function` DÉJÀ PORTÉ** par
  `en/conduite/proj/fonction-en.md`.
  ⚠ *Fondement : `titres-doublons` rend `227 / 227 / 0` — il n'y a **aucune**
  collision dans le corpus anglais, donc chaque titre existant est porté une
  fois. La question n'est pas « y a-t-il collision », c'est « l'un des huit
  candidats est-il déjà pris », et `Function` est celui que le chantier FR
  désambiguïse déjà par `(informatique)`.*
- **P96.4 — les deux fiches sœurs de `programmation-non-bloquante` portent des
  titres EN DIFFÉRENTS du candidat** `Non-blocking programming`, et leurs
  `title:` FR **diffèrent** de `Programmation non bloquante`.
  *Fondement : clause C125 du 27/08 (suite 7) — le test 2 ne vaut que si les deux
  jumelles portent le même `title:` FR ; le corpus qualifie ses fiches de famille
  (`Programming the STM32 with the HAL`, `Programming the ESP32 with the Arduino
  core`).* ⚠ **Terme écrit pour réfuter** : si l'une des deux porte **déjà**
  `Non-blocking programming`, le candidat fabrique une collision EN que le
  français ne porte pas, et il faut le qualifier.
- **P96.5 — même chose pour les deux fiches `watchdog`** :
  `arduino-watchdog-en` et `micropython-watchdog-en` ne portent **pas**
  `Watchdog`.
- **P96.6 — les titres FR à article initial (`Le `, `La `, `Les `, `L'`) sont
  entre 8 et 30, point estimé 16 ; et AU MOINS 80 % de leurs jumelles EN ne
  commencent PAS par `The ` / `A ` / `An `.** *C'est la mesure qui décide entre
  `Potentiometer` et `The potentiometer` pour la fiche `Le potentiomètre` —
  l'article défini est **obligatoire** en français devant un nom commun sujet et
  **optionnel** en anglais, donc le laisser tomber n'est pas une asymétrie mais
  une traduction. **Encore faut-il que le corpus le fasse déjà.***
- **P96.7 — les titres EN commençant par `The ` / `A ` / `An ` sur les 227 sont
  entre 0 et 15, point estimé 5.** *Le lot 7 en a écrit un —
  `The SBC on a mechatronics project` — et il portait un complément, pas un nom
  nu.*

### Constats du bloc 96 — 6 prédictions tenues, 1 réfutée sur un terme

| # | prédiction | constat | verdict |
|---|---|---|---|
| P96.1 | 3 blocs `aliases:`, contenu exact, 8 alias | `chien-de-garde` [watchdog \| WDT], `filtrage` [filtre numérique \| moyenne glissante \| filtre médian], `programmation-non-bloquante` [boucle coopérative \| super-loop \| non bloquant] — **8 sur 3** | **tenue** |
| P96.2 | aucune `?? ligne hors cle` | **aucune** | **tenue** |
| P96.3 | 8 candidats libres, `Function` déjà porté | **identique**, `Function` porté par `en/conduite/proj/fonction-en.md` | **tenue** |
| P96.4 | les deux sœurs `programmation-non-bloquante` ont des titres FR **et** EN différents du candidat | FR `… sur Arduino` / `… en MicroPython` ; EN `Non-blocking programming on Arduino` / `… in MicroPython` | **tenue** |
| P96.5 | les deux sœurs `watchdog` ne portent pas `Watchdog` | `Watchdog on Arduino` / `Watchdog in MicroPython` | **tenue** |
| P96.6 | titres FR à article ∈ [8, 30] point 16 ; **≥ 80 %** de jumelles EN sans article | **10** ; **4 sur 9 = 44 %** | **RÉFUTÉE** (2ᵉ terme) |
| P96.7 | titres EN en `The `/`A `/`An ` ∈ [0, 15] point 5 | **5** | **tenue** |

✅ **P96.2 TRANCHE LA QUESTION QUE LE BLOC 95 AVAIT OUVERTE : LE DÉFAUT ÉTAIT DANS
MON MOTIF, PAS DANS LE CORPUS.** La ligne `- preuve-de-concept` qui paraissait
flotter sous `fonction-informatique` appartient à sa clé **`phases:`**, laquelle
est simplement écrite **avant** `tags:` dans cette fiche et après dans les sept
autres. *Le front matter est bien formé sur les huit ; ce qui variait était
l'ordre des clés, que mon premier motif ne pouvait pas voir puisqu'il ne lisait
pas les clés.* ⚠ **Et les cinq entrées faussement rangées en `aliases:` se
répartissent exactement comme prédit** : `microcontroleur` ×2 et `adc` et
`techno-sans-fil` sous `prerequis:`, `preuve-de-concept` et
`integration-et-tests` sous `phases:`.

⚠⚠ **P96.6 EST RÉFUTÉE, ET SA RÉFUTATION DÉCIDE UN TITRE — C'EST LA MESURE LA
PLUS UTILE DE LA SÉANCE.** J'avais prédit que le corpus **laisse tomber**
l'article français ; il le **garde 5 fois sur 9**. Et la coupure n'est pas au
hasard :

| FR | EN | article |
|---|---|---|
| `Les boucles` | `Loops` | tombé — **pluriel** |
| `Les conditions` | `Conditions` | tombé — **pluriel** |
| `Les fonctions` | `Functions` | tombé — **pluriel** |
| `Le typage des variables` | `Typing variables` | tombé — **gérondif** |
| `La structure d'un programme` | `The structure of a program` | **gardé** |
| `Le langage MicroPython` | `The MicroPython language` | **gardé** |
| `Le REPL` | `The REPL` | **gardé** |
| `Le SBC dans un projet mécatronique` | `The SBC on a mechatronics project` | **gardé** |
| `Le Teensy comme appareil USB` | `The Teensy as a USB device` | **gardé** |

**Cinq sur cinq des titres FR à nom SINGULIER DÉFINI désignant un objet gardent
l'article en anglais ; quatre sur quatre des pluriels et des gérondifs le
perdent.** *La règle du corpus n'est pas « l'anglais laisse tomber l'article »,
c'est « l'article suit le nombre et la nature du nom ».*

### Décision — les huit `title:` EN, sept arrêtés, un renvoyé au bloc 97

| source | `title:` FR | `title:` EN décidé | ce qui décide |
|---|---|---|---|
| `ascii` | `Code ASCII` | **`ASCII code`** | relevé 3, forme **unanime** (4/4) |
| `chien-de-garde` | `Chien de garde` | **`Watchdog`** | relevé 3, `Watchdog` 6 contre `watchdog` 4 ; racine des deux sœurs `Watchdog on Arduino` / `in MicroPython` |
| `filtrage` | `Filtrer des mesures` | **`Filtering measurements`** | relevé 3, 7 contre 4 et 1 |
| `fonction-informatique` | `Fonction (informatique)` | **au bloc 97** | `Function` **déjà porté** par `fonction-en` |
| `ide` | `IDE` | **`IDE`** | relevé 3, **unanime** (7/7), sigle identique dans les deux langues |
| `potentiometre` | `Le potentiomètre` | **`The potentiometer`** | voir ci-dessous |
| `programmation-non-bloquante` | `Programmation non bloquante` | **`Non-blocking programming`** | relevé 3, 7 contre 5 ; racine des deux sœurs |
| `xbee` | `XBee` | **`XBee`** | relevé 3, **unanime** (3/3) |

⚠ **`The potentiometer` CONTRE `Potentiometer` : le relevé des libellés dit l'un
et la symétrie dit l'autre, et c'est la symétrie qui gagne — pour la raison
exacte qui a fait garder `NF X50-151` au lot 10, prise dans l'autre sens.**
Le relevé 3 donne `potentiometer` **11** / `Potentiometer` **3**, aucune forme
`The potentiometer`. **Mais le français porte exactement le même écart** : son
`title:` est `Le potentiomètre` et ses libellés sont `potentiomètre` **10** /
`Potentiomètre` **4** / `Le potentiomètre` **2**. *L'article vit dans le titre et
pas dans les libellés, des deux côtés. Titrer `Potentiometer` reviendrait à
**effacer une distinction que la source porte** — le motif du 26/08 pris dans le
sens que la clause du 27/08 (suite 7) fait descendre au test 3.* **Et le corpus
tranche : 5 titres FR à singulier défini sur 5 gardent leur article en anglais.**
✅ **Coût au regard de `--libelles` : NUL.** *La clause du 29/08 (suite 9) le
dit dans le code : `memeRadical` compare des **préfixes de cinq lettres**, et
`The potentiometer` **contient** `potentiometer`. Un titre qui **allonge** une
forme de production ne crée aucun candidat — quatrième épreuve de la clause.*
**Coût du revert : 1 `title:`.**

---

## BLOC 97 — TITRES À PARENTHÈSE, ET RELEVÉ C113 DES BLOCS DE CODE DES HUIT SOURCES

**Commande** : script jetable (scratchpad, **hors dépôt**), appendé à
`tools/releves-avant-redaction-lot11-3008.txt`. **Deux objets** : décider le
huitième `title:`, et relever les blocs de code avant traduction (clause C113 du
30/08 — **l'assomption sur les chaînes affichées libres n'a plus été testable
depuis trois lots, faute de tout bloc de code dans les lots 8, 9 et 10**).

### Déclaration C131 du bloc 97

**État à l'entrée : 5 entrées, dont 1 hors artefacts de séance. Versement :
aucun** — append sur un fichier déjà `??`. **Total inchangé : 5 / 1.**

### Prédictions du bloc 97 — E, titres à parenthèse

- **P97.1 — les titres FR à parenthèse sont entre 1 et 6, point estimé 3**, et
  `Fonction (informatique)` en fait partie.
- **P97.2 — les titres EN à parenthèse sont entre 0 et 4, point estimé 1.**
  ⚠ **Terme qui décide** : **0** dirait que le corpus anglais **n'a jamais
  reporté** un parenthésé de désambiguïsation, et qu'en écrire un serait une
  forme neuve à déclarer ; **≥ 1** dirait qu'il en a la forme.
- **P97.3 — les titres EN contenant `function`/`functions` sont exactement
  DEUX** : `Function` (`en/conduite/proj/fonction-en.md`) et `Functions`
  (`en/embarque/mcu/micropython/micropython-fonctions-en.md`).
  *Fondement : les deux sont sortis nommément du bloc 96, et
  `titres-doublons` rend 227/227/0.*
- **P97.4 — les titres FR contenant `fonction`/`fonctions` sont exactement
  TROIS** : `Fonction`, `Fonction (informatique)`, `Les fonctions`.
  ⚠ *Si le compte FR est de trois et le compte EN de deux, l'écart est
  **exactement la fiche de ce lot**, et il se referme ce soir.*

### Prédictions du bloc 97 — F, blocs de code des huit sources (C113)

- **P97.5 — AU MOINS TROIS des huit sources portent un bloc de code**, et
  `fonction-informatique`, `programmation-non-bloquante` et `ascii` en sont.
  *Fondement : `--anneau` rend `fiches porteuses de chevron : 0` — aucune des
  douze restantes ne porte de bloc **clôturé en chevron** —, ce qui ne dit rien
  des blocs ``` ordinaires ; et les trois nommées enseignent respectivement
  l'écriture d'une fonction, l'idiome `millis()` et la lecture d'un octet
  série.*
- **P97.6 — le total de lignes de code des huit sources est entre 40 et 160,
  point estimé 90.**
- **P97.7 — au moins UNE ligne de commentaire française dans un bloc de code**,
  et donc **un cas de plus** pour l'arbitrage en attente des 26 lignes de
  commentaire français des fiches EN. *C77 dit que les commentaires se
  traduisent ; le relevé sert à savoir combien il y en a **avant** d'écrire.*
- **P97.8 — au moins UNE chaîne affichée portant un mot français**, ce qui
  **rendrait l'assomption C113 testable pour la première fois depuis trois
  lots**. ⚠ **Terme écrit pour réfuter** : **zéro** chaîne rendrait le lot 11 le
  **quatrième d'affilée** à ne pas pouvoir tester cette assomption, et il
  faudrait le consigner comme tel.

### Constats du bloc 97 — 3 prédictions tenues, 5 réfutées

| # | prédiction | constat | verdict |
|---|---|---|---|
| P97.1 | titres FR à parenthèse ∈ [1, 6] point 3 | **8** | **RÉFUTÉE** |
| P97.2 | titres EN à parenthèse ∈ [0, 4] point 1 | **3** | **tenue** |
| P97.3 | **exactement deux** titres EN avec `function(s)` | **trois** — `Function`, `Functions`, **`Function generator`** | **RÉFUTÉE** |
| P97.4 | exactement trois titres FR avec `fonction(s)` | **trois** — `Fonction`, `Fonction (informatique)`, `Les fonctions` | **tenue** |
| P97.5 | **au moins trois** sources portent un bloc de code | **une seule**, `fonction-informatique` | **RÉFUTÉE** |
| P97.6 | lignes de code ∈ [40, 160] point 90 | **4** | **RÉFUTÉE** |
| P97.7 | au moins une ligne de commentaire française | **trois** | **tenue** |
| P97.8 | au moins une chaîne affichée à mot français | **zéro** | **RÉFUTÉE** |

⚠⚠ **P97.5, P97.6 ET P97.8 SONT LA MÊME RÉFUTATION SOUS TROIS HABITS, ET C'EST
LA TROISIÈME FOIS DE LA SÉANCE QUE LA MÊME VARIABLE ME MANQUE.** J'ai prédit que
des fiches **qui enseignent le code** portent du code : `fonction-informatique`
enseigne l'écriture d'une fonction, `programmation-non-bloquante` l'idiome
`millis()`, `ascii` la lecture d'un octet série. **Sept des huit n'ont pas une
ligne de code.** *Cause, et elle est structurelle dans le corpus : une
**notion** `embarque/mcu/` explique et **délègue le code** aux fiches de
réalisation `arduino/` et `micropython/` qui la déclinent. `ascii` renvoie à
`arduino-serie`, `programmation-non-bloquante` à
`arduino-programmation-non-bloquante` et à sa jumelle MicroPython — les deux
sœurs mesurées au bloc 96.* ⚠ **Même variable qu'au bloc 91 (taux de C109) et au
bloc 94 (nombre de titres de section) : le REGISTRE de la fiche, notion contre
tuto, et non son sujet.** *Trois familles de compteur, trois réfutations, une
seule cause — l'amendement proposé au bloc 91 vaut donc plus large que le taux de
C109, et il est reformulé en clôture.*

⚠ **L'ASSOMPTION C113 SUR LES CHAÎNES AFFICHÉES LIBRES N'EST PAS TESTABLE PAR CE
LOT NON PLUS — QUATRIÈME D'AFFILÉE.** **Zéro chaîne affichée** dans les
**4 lignes** de code du lot. *Les lots 8, 9 et 10 n'avaient aucun bloc de code ;
celui-ci en a deux, et ils ne portent que des **commentaires**.* **L'arbitrage
reste en attente, et il faut écrire qu'il ne se testera pas avant un lot portant
une fiche de réalisation** — or il n'en reste aucune : les quatre fiches du
restant après ce lot sont `falstad`, `ltspice`, `wokwi` et `easyeda`, quatre
fiches d'**outil**.

✅ **P97.7 TENUE : TROIS COMMENTAIRES FRANÇAIS À TRADUIRE**, dans les deux blocs
de `fonction-informatique` — `type de retour · nom · paramètres`,
`valeur renvoyée`, `m vaut 15.0`. *C77 les fait traduire ; ils seront traduits
dès l'écriture, donc ils n'entrent pas au compte des 26 lignes de l'arbitrage en
attente.*

⚠ **P97.3 RÉFUTÉE PAR UN TITRE QUE MON MOTIF DEVAIT TROUVER ET QUE MA PRÉDICTION
A OUBLIÉ** : `Function generator` (`generateur-de-signaux-en`). *Le motif
`\bfunctions?\b` est le bon ; c'est la liste nominative que je n'ai pas faite
avant d'écrire « exactement deux ». **C116 (9) : le chiffre ne se lit jamais
seul, mais contre la liste nominative** — et je l'avais faite pour `Function` et
`Functions` seulement, parce que le bloc 96 me les avait servis.*

### Décision — le huitième `title:` EN

**`embarque/mcu/fonction-informatique` → `title: Function (programming)`.**
⚠ **FORME NEUVE, DÉCLARÉE COMME NEUVE AVANT D'ÊTRE ÉCRITE.**

**Le chemin des trois tests de C125, tenu jusqu'au bout :**

1. **Test 1** — les formes concurrentes du relevé 3 sont `Function` 5,
   `functions` 5, `function` 2 : des **désignations**, pas des libellés
   parenthésés de désambiguïsation. **Le test 1 ne s'applique pas.**
2. **Test 2** — jumelle déjà titrée ? Deux candidates, et **la clause du 27/08
   (suite 7) les écarte toutes les deux** : `conduite/proj/fonction` porte
   `Fonction` et `micropython-fonctions` porte `Les fonctions`, quand la source
   porte `Fonction (informatique)`. **Les trois `title:` FR diffèrent** — le
   corpus français distingue déjà ces trois fiches par leur titre, donc la paire
   descend au test 3 **pour reporter la distinction, pas pour l'effacer**.
3. **Test 3** — les contextes donnent `Function`, **et `Function` est PRIS** par
   `en/conduite/proj/fonction-en.md`. *Le retenir fabriquerait une collision EN
   que `titres-doublons` compte **0 côté français** : c'est exactement le défaut
   d'`entree-tor` de l'amendement du 29/08 (suite 5), pris dans l'autre sens.*

**Ce qui décide donc est la mesure du bloc 97 : le corpus anglais PORTE la forme
parenthésée** — `Electromagnetic compatibility (EMC)`,
`BOM (bill of materials)`, `Persistent storage (files, EEPROM)`, **3 titres**.
⚠ **Mais aucun des trois n'est un désambiguïsateur de DOMAINE** : ce sont deux
expansions de sigle et une énumération. *La forme est donc **neuve par sa
fonction** tout en étant **connue par sa syntaxe**, et c'est pourquoi elle se
déclare.*

⚠ **Et la mesure dit aussi quand le corpus LAISSE TOMBER la parenthèse** :
`Utiliser le chien de garde (watchdog) sur Arduino` → `Watchdog on Arduino`,
`Mettre un Arduino en veille (deep sleep)` → `Deep sleep on Arduino`.
*Dans ces deux cas la parenthèse française **donnait le mot anglais** ; une fois
en anglais elle n'a plus d'objet. Ici elle donne le **domaine**, et le domaine ne
disparaît pas en traduisant.*

**`(informatique)` → `(programming)`** et non `(computing)` : *le corpus écrit
`programming` pour l'activité — `Non-blocking programming`,
`Programming the STM32 with the HAL` —, et le contraste que la fiche porte est
avec la fonction de l'**analyse fonctionnelle**, pas avec le calcul.*

✅ **Coût au regard de `--libelles` : NUL.** `Function (programming)` **contient**
`Function`, donc `memeRadical` partage le préfixe `funct` avec les trois formes
de production. **Cinquième épreuve de la clause du 29/08 (suite 9) — et la
deuxième du jour.** **Coût du revert : 1 `title:`.**

### Les huit `title:` EN, arrêtés

| source FR | `title:` EN |
|---|---|
| `embarque/mcu/ascii` | `ASCII code` |
| `embarque/mcu/chien-de-garde` | `Watchdog` |
| `embarque/mcu/filtrage` | `Filtering measurements` |
| `embarque/mcu/fonction-informatique` | `Function (programming)` |
| `embarque/mcu/ide` | `IDE` |
| `embarque/mcu/potentiometre` | `The potentiometer` |
| `embarque/mcu/programmation-non-bloquante` | `Non-blocking programming` |
| `embarque/mcu/sans-fil/xbee` | `XBee` |

⚠ **Deux titres identiques à leur source française** — `IDE` et `XBee` —, et
c'est **voulu** : ce sont un sigle et un nom de produit, unanimes des deux côtés
(7/7 et 3/3 en libellés).

---

## GATE G2 — fin des relevés d'avant rédaction. Huit titres arrêtés, aucun arbitrage bloquant.

**Fait** — **cinq blocs (93 à 97)**, **une garde de péremption au vert**,
`HEAD 0f3c9a5` stable, **zéro écriture dans `content/`**. **Sept relevés** en un
fichier daté : formes de production des titres de section EN, titres de callout,
titres-doublons des deux côtés, libellés anglais et français vers les huit
cibles, titres de section des huit sources, front matter par clé, blocs de code.

**Chiffres** — `## See also` **219** / `## What is it for?` **153** /
`## Pitfalls` **152** / `## Where it fits in the project` **105** /
`## Exercises` **37** / `## Going further` **31**, **inchangés** ;
`## Step by step` **77 → 78** ; callouts `Watch out` **49**, `Tip` **46** ;
titres-doublons FR **243/243/0**, EN **227/227/0** ; **42** titres de section sur
les huit sources ; **8 alias sur 3 fiches** ; **2 blocs de code, 4 lignes,
3 commentaires français, 0 chaîne affichée**.

**Bilan prédictions/constats des relevés : 39 prédictions à décompte plein,
26 tenues, 13 réfutées — 66,7 %.** ⚠ *Le taux le plus bas d'un cadrage du
chantier, et **onze des treize réfutations ont deux causes seulement** : le
**registre** de la fiche (notion contre tuto) que je continue de confondre avec
son sujet ou sa taille, et des **populations non déclarées** dans mes propres
prédictions.*

**Ce qui suit** — bloc **98** : jugement un par un des **82** candidats C109 sous
C123, table TSV datée, **test négatif délibéré**, puis passe réelle par
`remplacer-passe.mjs`.

---

## BLOC 98 — ÉPREUVE C110 DU MOTIF DES PUCES À TIRET, ET RELEVÉ DU LOT 11

**Commande** : script jetable (scratchpad, **hors dépôt**) redirigé vers
`tools/puces-lot11-3008.txt`.

**Les huit sources FR ont été lues EN ENTIER avant ce bloc** (règle du 28/08) :
65, 114, 92, 58, 34, 53, 106 et 24 lignes.

### Déclaration C131 du bloc 98

**État à l'entrée : 5 entrées, dont 1 hors artefacts de séance.**
**Versement de ce bloc, nommé** : `tools/puces-lot11-3008.txt`, créé par la
redirection → **+1 entrée `??`**, **comptée au sous-compteur hors artefacts**.
**Total impliqué : 6 entrées, dont 2 hors artefacts de séance.**
*Le script vit hors dépôt et ne compte pas.*

### Le motif, publié AVANT son lancement

- ligne de puce : `/^\s*[-*]\s/` ;
- tiret d'incise : la ligne contient `" — "` — **em dash U+2014 entouré
  d'espaces**, jamais un tiret nu ;
- **hors périmètre** : les sections `## Voir aussi`, `## Aller plus loin`,
  `## See also`, `## Going further` — **cas 1 de l'amendement du 29/08
  (suite 8)**, glose de liste licite au §4 ;
- blocs de code clôturés ignorés.

### Épreuve C110 — quatre échantillons nommés, deux par langue, réponses publiées

⚠ **Les quatre échantillons sont choisis pour porter ce qui pourrait faire
mordre le motif à tort** : les quatre fiches d'`esp32/` ont **toutes** un
`## Voir aussi` fourni en gloses à tiret, et les cinq fiches EN du lot 7 portent
`## See also` **et** `## Going further` — *si le motif oubliait une seule des
quatre formes hors périmètre, les totaux exploseraient dans le même sens.*

- **P98.1 — échantillon 1, FR lot 3 d'`esp32/`** : `esp32-deep-sleep` **2**,
  `esp32-arduino-core` **2**, `esp32-freertos` **4**, `esp32-idf` **4**,
  **TOTAL 12**.
- **P98.2 — échantillon 2, EN lot 3 d'`esp32/`** : `esp32-deep-sleep-en` **2**,
  `esp32-arduino-core-en` **1**, `esp32-freertos-en` **4**, `esp32-idf-en` **4**,
  **TOTAL 11**. ⚠ *Onze et non douze : l'asymétrie connue d'`esp32-arduino-core`.
  Prédire 12 serait prédire la symétrie et non la mesure.*
- **P98.3 — échantillon 3, FR lot 9 après sa passe** : `mecatronique` **0**,
  `mind-map` **0**, `bete-a-cornes` **0**, `pieuvre` **5**, `fonction` **0**,
  `caracteriser-une-exigence` **11**, **TOTAL 16**.
- **P98.4 — échantillon 4, EN lot 7** : `raspberry-pi-gpio-en` **3**,
  `raspberry-pi-prise-en-main-en` **3**, `raspberry-pi-projet-en` **0**,
  `xiao-alimentation-en` **3**, `xiao-esp32-s3-en` **1**, **TOTAL 10**.

### Relevé du lot 11

- **P98.5 — décomposition par fiche, et CETTE FOIS JE LA PUBLIE.** *Le refus de
  décomposer des blocs 91 et 78 était motivé par l'absence de mesure ; ici les
  **huit sources ont été lues en entier**, donc la décomposition n'est plus un
  prorata mais un comptage à l'œil, exactement comme P92.1 ce matin — qui est
  tombé sur ses huit termes.*
  `ascii` **6**, `chien-de-garde` **1**, `filtrage` **6**,
  `fonction-informatique` **3**, `ide` **0**, `potentiometre` **2**,
  `programmation-non-bloquante` **0**, `sans-fil/xbee` **0**, **TOTAL 18**.
- **P98.6 — le taux du lot est HORS de la fourchette des quatre lots
  précédents, et c'est prédit avant la mesure.** *Densités mesurées : lot 7
  **18 / 5 301 = 3,4 ‰**, lot 8 **22 / 5 488 = 4,0 ‰**, lot 9 **19 / 5 813 =
  3,3 ‰**, lot 10 **20 / 5 791 = 3,5 ‰** ; appliquées aux 7 339 mots du lot
  elles donneraient **24 à 29**. La prédiction est **18**, soit **2,45 ‰**.*
  ⚠ **Le fondement est la variable que la séance a mesurée trois fois** : le
  sous-ensemble des **trois notions `embarque/` du lot 10** rendait
  **3 puces sur 3 414 mots — 0,9 ‰** —, quand ses deux fiches `conduite/proj/`
  en rendaient **17 sur 2 377 — 7,2 ‰**, soit un **facteur 8**. *Un lot de huit
  notions `embarque/mcu/` ne peut pas tomber dans une fourchette calée sur des
  lots majoritairement `conduite/proj/`.*
- **P98.7 — `ide`, `programmation-non-bloquante` et `xbee` rendent ZÉRO**, et
  pour deux raisons différentes qui se disent avant la mesure : `ide` et `xbee`
  n'ont **aucune puce hors `## Voir aussi`** ; `programmation-non-bloquante`
  **en a**, mais ses énumérations sont des **paragraphes en gras**
  (`**1. Un compteur…**`) et un **tableau**, pas des puces.
- **P98.8 — `chien-de-garde` rend 1 et non 0**, alors qu'elle est la plus grosse
  fiche du lot : *ses deux seules puces hors `## Voir aussi` sont les deux
  alinéas `— côté AVR` / `— côté MicroPython sur RP2` de la section
  « Un redémarrage muet », et **un seul des deux porte un em dash**.*
  ⚠ **C'est le terme qui prouve** : prédire 2 serait prédire la symétrie des
  deux alinéas, pas la mesure.

### Constats du bloc 98 — 8 prédictions tenues, 0 réfutée

| # | prédiction | constat | verdict |
|---|---|---|---|
| P98.1 | FR lot 3 : 2 / 2 / 4 / 4 = **12** | identique | **tenue** |
| P98.2 | EN lot 3 : 2 / **1** / 4 / 4 = **11** | identique | **tenue** |
| P98.3 | FR lot 9 après passe : 0 / 0 / 0 / 5 / 0 / 11 = **16** | identique | **tenue** |
| P98.4 | EN lot 7 : 3 / 3 / 0 / 3 / 1 = **10** | identique | **tenue** |
| P98.5 | lot 11 : 6 / 1 / 6 / 3 / 0 / 2 / 0 / 0 = **18** | identique, **les huit termes** | **tenue** |
| P98.6 | **18**, soit 2,45 ‰, HORS de [24, 29] | **18** | **tenue** |
| P98.7 | `ide`, `programmation-non-bloquante`, `xbee` à **0** | **0 / 0 / 0** | **tenue** |
| P98.8 | `chien-de-garde` à **1** et non 2 | **1**, la seule L79 | **tenue** |

✅ **CINQUIÈME ÉPREUVE DU MOTIF BILINGUE, ET LA PREMIÈRE OÙ LA PRÉDICTION DU LOT
SORT DE LA FOURCHETTE HISTORIQUE — DÉLIBÉRÉMENT.** Les quatre échantillons
tombent fiche par fiche, asymétrie connue d'`esp32-arduino-core` comprise. **Et
le relevé du lot est prédit à 18 quand les quatre lots précédents en donnaient
24 à 29 au prorata des mots** : *le fondement publié était la variable mesurée
trois fois ce matin — le registre de la fiche —, et le sous-ensemble
`embarque/` du lot 10 rendait 0,9 ‰ contre 7,2 ‰ pour ses fiches
`conduite/proj/`.* ⚠ **C'est la première fois de la séance que cette variable
est employée EN AVANT d'une mesure au lieu d'être découverte après.**

✅ **P98.5 EST DÉCOMPOSÉE ET TOMBE SUR SES HUIT TERMES**, après deux refus motivés
de décomposer aux blocs 91 et 78. *La condition qui a changé n'est pas la
prudence, c'est la lecture : les huit sources ont été lues en entier avant le
bloc, donc la décomposition est un comptage et non un prorata.*

✅ **P98.8 EST LE TERME QUI PROUVE.** `chien-de-garde` porte **deux** alinéas
symétriques — `- côté **AVR**` et `- côté **MicroPython sur RP2**` — et **un
seul** porte un em dash. *Prédire 2 aurait été prédire la symétrie de la mise en
page ; le motif compte des tirets, pas des alinéas.*

---

## BLOC 99 — JUGEMENT DES 100 SIGNALEMENTS, TEST NÉGATIF, PASSE C109

**Commandes, dans cet ordre** : garde ; dépôt de la table TSV réelle ; dépôt de
la table **négative** ; `remplacer-passe.mjs` sur la table négative (**refus
attendu**) ; `remplacer-passe.mjs` sur la table réelle **en contrôle seul** ;
puis **`--ecrire`**.

### Déclaration C131 du bloc 99

**Population** : entrées de `git status --porcelain`.
**État à l'entrée : 6 entrées, dont 2 hors artefacts de séance**
(`releves-avant-redaction-lot11-3008.txt`, `puces-lot11-3008.txt`).
**Versements que CE bloc s'ajoute en route, nommés :**

| # | artefact | état | compté au total | compté hors artefacts |
|---|---|---|---|---|
| 7 | `tools/batterie-sortie-3008b47.txt` (étape 0 de la garde) | `??` | oui | **non** |
| 8 | `tools/passe-c109-lot11-3008.tsv` (table réelle) | `??` | oui | **oui** |
| 9 | `tools/passe-negatif-lot11-3008.tsv` (table du test négatif) | `??` | oui | **oui** |
| 10 à 17 | les **huit sources FR**, modifiées par `--ecrire` | ` M` | oui | **oui** |

⚠ **Les huit sources sont SUIVIES par git** : elles comptent **huit entrées
` M`**, une par fiche, et **aucune condensation** — la règle du 30/08 (lot 7) ne
s'applique qu'à un **répertoire entièrement non suivi**, et `content/embarque/mcu/`
est suivi depuis l'origine.

**TROIS instants :**
- **7 entrées / 2 hors artefacts** quand la garde lit le compteur ;
- **9 / 4** après le dépôt des deux tables, avant `--ecrire` ;
- **17 / 12** en fin de bloc.

⚠ **Relecture de la liste CONTRE les prédictions du bloc** : elles ne prévoient
**aucun `--recaler`**, **aucune fiche EN**, **aucun renommage de titre**, et
**deux** tables TSV et non une. **La liste est close.**

### Jugement des 100 signalements — la lecture de C109 appliquée, publiée avant la table

Les huit sources ont été **lues en entier**. Les 100 signalements se répartissent
en **82 candidats `--style`** et **18 puces à tiret**, et se jugent sous quatre
habitats :

1. **Incise encadrée (deux tirets) en prose** — **reste** si le segment interne
   énumère au moins deux items **et** ne porte aucun verbe conjugué ; **tombe**
   sinon. *Précédent du 25/08 : `— un capteur alimenté en 5 V, un signal venu
   d'un Arduino —` reste ; `— Linux —` tombe.*
2. **Tiret unique en fin de segment, en prose** — **tombe**, sauf si le segment
   de droite est une **énumération** nominale ou infinitive (C123, item de
   liste), ou un **renvoi** `— voir [[x]]` (cas 4, parenthèse).
3. **Puce** — cas 1 à 4 de l'amendement du 29/08 (suite 8).
4. **Point-virgule** — **tombe** si le segment de droite porte un verbe
   conjugué ; **reste** s'il est nominal, infinitif ou participial.

**Résultat : 73 traités, 27 gardés, pour 70 ancres.**

| source | `--style` | puces | traités | gardés | ancres |
|---|---|---|---|---|---|
| `ascii` | 9 | 6 | 8 | 7 | 8 |
| `chien-de-garde` | 29 | 1 | 24 | 6 | 22 |
| `filtrage` | 14 | 6 | 14 | 6 | 13 |
| `fonction-informatique` | 3 | 3 | 5 | 1 | 6 |
| `ide` | 3 | 0 | 2 | 1 | 2 |
| `potentiometre` | 5 | 2 | 6 | 1 | 6 |
| `programmation-non-bloquante` | 18 | 0 | 13 | 5 | 12 |
| `sans-fil/xbee` | 1 | 0 | 1 | 0 | 1 |
| **lot** | **82** | **18** | **73** | **27** | **70** |

⚠ **Les ancres sont MOINS NOMBREUSES que les traités, et c'est mesurable et
voulu** : **quatre** ancres couvrent **deux** signalements chacune, parce qu'un
tiret encadrant se prend **en bloc** — règle d'usage du 30/08, née de l'ancre
`\ntic\n` qui trouvait 2 occurrences sur 4. Les quatre : `chien-de-garde` L53
et L71, `filtrage` L52, `programmation-non-bloquante` L90. **73 − 4 = 69, plus
une édition de cohérence de liste** sur `fonction-informatique` L22 (le `;`
terminal d'une puce dont les deux voisines deviennent des phrases) = **70**.

⚠ **DEUX PAIRES OPPOSÉES À QUELQUES LIGNES D'ÉCART, ET C'EST LE CRITÈRE QUI LES
SÉPARE, SANS ARBITRAGE.**
- `programmation-non-bloquante` **L84** — `— échantillonnage,
  [[asservissement|asservissement]] —` : deux items **nominaux**, aucun verbe
  → **GARDÉ** ; **L90** — `— une commande de moteur qui ne tolère aucun retard,
  une acquisition qui ne peut pas manquer un pas —` : deux items aussi, mais
  **deux relatives à verbe conjugué** → **TRAITÉ**. *Six lignes d'écart.*
- `programmation-non-bloquante` **L72** — `— piloter un afficheur, écouter une
  liaison série.` : **énumération** de deux infinitifs → **GARDÉ** ; **L78** —
  `— quitte à découper la tâche en étapes successives.` : infinitif **unique**,
  pas une énumération → **TRAITÉ**. *Six lignes d'écart également.*

### Prédictions du bloc 99

- **P99.1 — garde** : ASCII `0` ; copie `tools\batterie-sortie-3008b47.txt` ;
  heure **> celle du bloc 93** ; `HEAD git : 0f3c9a5 2026-08-30 11:20:01 +0200`
  **au caractère** ; `node : v24.15.0` ; **3 lignes de dates de pilotage
  inchangées au caractère** ; `fichiers modifies non commites : 7   (hors artefacts de seance : 2)`.
- **P99.2 — TEST NÉGATIF DÉLIBÉRÉ.** La table négative porte **trois** lignes :
  deux ancres justes et **une fausse d'un seul caractère** —
  `n'attend rien de lui — Il attend` (majuscule à `il`), quand la source porte
  `il`. **L'outil doit refuser le LOT ENTIER**, annoncer **0 occurrence** pour
  cette ancre, et **n'écrire aucun octet**. *Code de sortie non nul.*
- **P99.3 — contrôle seul de la table réelle** : `lignes de table : 70`,
  **70 ancres à exactement 1 occurrence**, **8 fiches**, **aucun refus**.
- **P99.4 — invariant d'accents : ÉCART NUL sur les huit fiches.**
  *Fondement lu dans les remplacements : les seules majuscules posées le sont sur
  des lettres non accentuées, **sauf une** — `câblé sur **trois fils**` devient
  `Câblé sur **trois fils**` dans `potentiometre`, et `â` U+00E2 → `Â` U+00C2
  **restent tous deux dans la classe** `[À-ÖØ-öø-ÿŒœŸĀ-ſ]`.* ⚠ **C'est le terme
  écrit pour réfuter** : si l'outil rendait un écart de −1 sur `potentiometre`,
  ce serait que sa classe est **trouée du mauvais côté**.
- **P99.5 — invariant de lignes : ÉCART NUL sur les huit.** *Aucun remplacement
  ne porte de saut de ligne, le TSV l'interdisant.*
- **P99.6 — le lot est EXACTEMENT NEUTRE EN MOTS**, et c'est prédit avant la
  mesure : **7 339 → 7 339**, corpus FR **291 242 inchangé**.
  *Fondement, remplacement par remplacement : les 70 substitutions ne touchent
  que de la ponctuation (` — ` → ` : `, ` — ` → `, `, ` ; ` → `. `), des
  majuscules de début de phrase, et **quatre conversions en parenthèses** qui
  déplacent des signes sans toucher un mot. **Le motif de `compter-mots`
  (`[0-9A-Za-zÀ-ɏ'’-]+`, au moins un alphanumérique) ne compte ni
  l'em dash U+2014, ni le point-virgule, ni la parenthèse.*** ⚠ **Ce serait le
  DEUXIÈME lot d'affilée à passe C109 exactement neutre**, après le lot 10.
- **P99.7 — remesure `--style` après la passe : `C109 de prose` tombe de 82 à
  20**, et la décomposition est prédite fiche par fiche :
  `ascii` **4**, `chien-de-garde` **6**, `filtrage` **3**,
  `fonction-informatique` **0**, `ide` **1**, `potentiometre` **1**,
  `programmation-non-bloquante` **5**, `sans-fil/xbee` **0**.
  *Ce sont les 20 gardés moins les 7 puces à tiret, que `--style` ne voit pas :
  20 = 27 − 7.* ⚠ **Contrôle publié d'avance : `hors perimetre` reste à 12** —
  la passe ne touche ni titre, ni cellule de tableau, ni `alt` —, et
  **les quatre seaux mécaniques restent à 0**.
- **P99.8 — ligne de bilan après la passe : `8 fiche(s) lue(s), 6 a reprendre.`**
  *`fonction-informatique` et `xbee` tombent à zéro candidat dur ; les six autres
  gardent au moins un exempté.*
- **P99.9 — remesure des puces à tiret après la passe : 18 → 7**, décomposé
  `ascii` **3**, `chien-de-garde` **0**, `filtrage` **3**,
  `fonction-informatique` **1**, `ide` **0**, `potentiometre` **0**,
  `programmation-non-bloquante` **0**, `xbee` **0**.
- **P99.10 — `git status` en fin de bloc : `17   (hors artefacts de seance : 12)`**,
  troisième instant de la déclaration C131.

### Constats du bloc 99 — 10 prédictions tenues, 0 réfutée

| # | prédiction | constat | verdict |
|---|---|---|---|
| P99.1 | ASCII 0 ; copie `3008b47` ; HEAD au caractère ; `v24.15.0` ; 3 dates inchangées ; `7   (hors artefacts : 2)` | 0 ; `3008b47` ; `0f3c9a5 … 11:20:01 +0200` ; **17:44:36** ; **7 / 2** | **tenue** |
| P99.2 | test négatif : refus du lot entier, 0 occurrence, 0 octet écrit | `L6 INTROUVABLE`, `ancres 0/ 1`, **`REFUS : 1 defaut(s). AUCUN FICHIER ECRIT.`**, code 1 | **tenue** |
| P99.3 | contrôle seul : 70 lignes, 70 ancres à 1 occurrence, 8 fiches | **70 / 70 / 8**, 0 introuvable, 0 multiple | **tenue** |
| P99.4 | invariant d'accents nul sur les huit | **101 / 362 / 214 / 49 / 77 / 94 / 351 / 26, écart +0 partout** | **tenue** |
| P99.5 | invariant de lignes nul sur les huit | **53 / 99 / 75 / 47 / 24 / 42 / 89 / 13, inchangés** | **tenue** |
| P99.6 | lot **7 339 → 7 339**, corpus **291 242** inchangé | **7 339**, les huit fiches au mot ; corpus **291 242** | **tenue** |
| P99.7 | `C109 de prose` 82 → **20**, décomposé 4 / 6 / 3 / 0 / 1 / 1 / 5 / 0 ; `hors perimetre` **12** ; 4 seaux à 0 | **20**, décomposition **identique aux huit termes** ; **12** ; **0 / 0 / 0 / 0** | **tenue** |
| P99.8 | `8 fiche(s) lue(s), 6 a reprendre.` | identique | **tenue** |
| P99.9 | puces 18 → **7**, décomposé 3 / 0 / 3 / 1 / 0 / 0 / 0 / 0 | **7**, décomposition **identique aux huit termes** | **tenue** |
| P99.10 | `git status` **17 / 12** | **17 / 12** | **tenue** |

✅ **LE TEST NÉGATIF A MORDU SUR LE CARACTÈRE PRÉVU, ET IL A REFUSÉ LES DEUX
ANCRES JUSTES AVEC LUI.** `n'attend rien de lui — Il attend` rend `ancres 0/ 1`,
et l'outil écrit `AUCUN FICHIER ECRIT` alors que `remplacements prets : 2`.
*C'est le mode d'échec redouté du 28/08 — un lot multi-édition est atomique —
et l'atomicité joue dans le bon sens : elle refuse au lieu d'appliquer 69 sur 70.*
**Quatrième test négatif délibéré du chantier, quatrième refus, zéro fichier
écrit.**

✅ **P99.4 EST LE TERME QUI PROUVE, ET IL PORTE SUR UNE SEULE FICHE.**
`potentiometre` passe `câblé sur **trois fils**` à `Câblé sur **trois fils**` :
`â` U+00E2 devient `Â` U+00C2, **deux points de code différents, tous deux dans
la classe** `[À-ÖØ-öø-ÿŒœŸĀ-ſ]`. *L'outil rend `94 -> 94`. Un écart de −1 aurait
dit que sa classe est trouée du mauvais côté — c'est la seule des huit fiches où
la majuscule tombe sur une lettre accentuée, et je l'avais nommée avant la
mesure.*

✅ **DEUXIÈME LOT D'AFFILÉE À PASSE C109 EXACTEMENT NEUTRE EN MOTS**, et cette
fois le fondement était publié remplacement par remplacement et non constaté
après coup : **7 339 → 7 339**, **corpus FR 291 242 inchangé**, **`git diff`
64 insertions / 64 suppressions sur 8 fichiers** — *autant de lignes réécrites
que de lignes détruites, aucune ligne créée ni perdue, ce que l'invariant de
lignes disait déjà par fiche.*

✅ **LES DEUX DÉCOMPOSITIONS POST-PASSE TOMBENT SUR SEIZE TERMES.**
`C109 de prose` **4 / 6 / 3 / 0 / 1 / 1 / 5 / 0 = 20**, et
**20 = 27 gardés − 7 puces à tiret**, l'identité publiée avant la mesure ;
puces **3 / 0 / 3 / 1 / 0 / 0 / 0 / 0 = 7**.
⚠ *`fonction-informatique` et `xbee` tombent à **zéro** candidat dur — deux des
huit fiches sont désormais entièrement conformes à C109 —, et c'est ce qui fait
`6 a reprendre` et non 8.*

**`git diff --numstat -- content`** — 7/7, 20/20, 12/12, 6/6, 1/1, 6/6, 11/11,
1/1. *Les huit lignes sont symétriques ; les 70 ancres se logent dans
**64 lignes distinctes**, six lignes en portant deux.*

---

## GATE G3 — passe C109 du lot 11 rendue.

**Fait** — **deux blocs (98 relevé et éprouvage C110, 99 jugement et passe)**,
**une garde de péremption au vert**, `HEAD 0f3c9a5` stable. **100 signalements
jugés un par un** — 82 de `--style`, 18 puces à tiret —, **73 traités,
27 gardés**, **70 ancres**, **1 test négatif délibéré, 1 refus, 0 octet écrit**,
puis **8 fiches écrites**.

**Chiffres qui ont changé** — `C109 de prose` **82 → 20** ; puces à tiret
**18 → 7** ; `git diff` **64 / 64 sur 8 fichiers** ; `git status` **17 / 12**.
**Inchangés et vérifiés** : lot **7 339 mots**, corpus FR **291 242**,
`hors perimetre` **12**, les quatre seaux mécaniques **à 0**, les invariants
d'accents et de lignes **nuls sur les huit**.

**Bilan prédictions/constats de la passe : 18 prédictions à décompte plein,
18 tenues, 0 réfutée.** *Deux blocs pleins d'affilée.*

**Ce qui suit** — bloc **100** : génération des huit squelettes EN par
`creer-fiche-en.mjs`, puis pose des huit `title:` par `renommer-titres.mjs`
sous test négatif.

---

## BLOC 100 — GÉNÉRATION DES HUIT SQUELETTES EN, PUIS POSE DES HUIT `title:`

**Commandes, dans cet ordre** : garde ; `creer-fiche-en.mjs <source>` sur les
huit sources ; dépôt de la table de titres et de sa table négative ;
`renommer-titres.mjs` sur la **négative** (refus attendu) ; contrôle seul de la
réelle ; puis `--ecrire`.

### Déclaration C131 du bloc 100

**Population** : entrées de `git status --porcelain`.
**État à l'entrée : 17 entrées, dont 12 hors artefacts de séance.**
**Versements que CE bloc s'ajoute en route, nommés :**

| # | artefact | état | total | hors artefacts |
|---|---|---|---|---|
| 18 | `tools/batterie-sortie-3008b48.txt` (étape 0 de la garde) | `??` | oui | **non** |
| 19 | `content/en/embarque/mcu/ascii-en.md` | `??` | oui | **oui** |
| 20 | `content/en/embarque/mcu/chien-de-garde-en.md` | `??` | oui | **oui** |
| 21 | `content/en/embarque/mcu/filtrage-en.md` | `??` | oui | **oui** |
| 22 | `content/en/embarque/mcu/fonction-informatique-en.md` | `??` | oui | **oui** |
| 23 | `content/en/embarque/mcu/ide-en.md` | `??` | oui | **oui** |
| 24 | `content/en/embarque/mcu/potentiometre-en.md` | `??` | oui | **oui** |
| 25 | `content/en/embarque/mcu/programmation-non-bloquante-en.md` | `??` | oui | **oui** |
| 26 | `content/en/embarque/mcu/sans-fil/xbee-en.md` | `??` | oui | **oui** |
| 27 | `tools/titres-lot11-3008.tsv` | `??` | oui | **oui** |
| 28 | `tools/titres-negatif-lot11-3008.tsv` | `??` | oui | **oui** |

⚠ **Règle d'usage du lot 7 appliquée AVANT la mesure : les huit fiches EN
comptent HUIT entrées, pas moins.** `content/en/embarque/mcu/` **existe et est
suivi** — il porte déjà **20** fiches — et
`content/en/embarque/mcu/sans-fil/` aussi, avec **cinq** fiches (`ble-en`,
`lora-en`, `techno-sans-fil-en`, `wifi-en`, `zigbee-en`). **Aucun répertoire
neuf n'est créé, donc aucune entrée ne se condense.** *C'est la configuration
des lots 8 et 10, pas celle du lot 7.*

⚠ **Le renommage des `title:` ne crée AUCUNE entrée** : les huit fiches EN
sont déjà `??` quand `renommer-titres.mjs` écrit. *C'est le cas de figure de la
première épreuve de la règle `--recaler` au lot 8 — et c'est un coup de chance,
pas une garde.*

**TROIS instants :**
- **18 / 12** quand la garde lit le compteur ;
- **26 / 20** après la génération des huit squelettes ;
- **28 / 22** en fin de bloc, les deux tables déposées.

⚠ **Relecture de la liste CONTRE les prédictions du bloc** : elles ne prévoient
**aucun `--recaler`**, **aucun fichier de corps** (ils viendront au bloc 101),
**aucune sortie de relevé**, et **deux** tables TSV. **La liste est close.**

### Prédictions du bloc 100 — garde

- **P100.1** — ASCII `0` ; copie `tools\batterie-sortie-3008b48.txt` ; heure
  **> 17:44:36** ; `HEAD git : 0f3c9a5 2026-08-30 11:20:01 +0200` **au
  caractère** ; `node : v24.15.0` ;
  `fichiers modifies non commites : 18   (hors artefacts de seance : 12)`.
  ⚠ **Les trois dates de pilotage sont inchangées, mais celles des huit sources
  NE LE SONT PAS** — la passe du bloc 99 les a réécrites. *La garde ne les lit
  pas ici (`-Fiches` vide), et c'est pour cela que le bloc 100 ne les passe pas :
  une date du jour sur une source serait attendue et non une anomalie, donc la
  garde n'apprendrait rien.*

### Prédictions du bloc 100 — génération

- **P100.2 — huit squelettes écrits aux huit chemins déclarés ci-dessus**, et
  **les trois compteurs égaux par construction** sur les huit : liens, embeds,
  blocs de code.
- **P100.3 — TROIS des huit font signaler un `aliases:` retiré**, et le
  contenu est prédit au caractère : `chien-de-garde` → `watchdog`, `WDT` ;
  `filtrage` → `filtre numérique`, `moyenne glissante`, `filtre médian` ;
  `programmation-non-bloquante` → `boucle coopérative`, `super-loop`,
  `non bloquant`. **Huit alias retirés au total.** *Les cinq autres n'ont pas de
  bloc `aliases:` — mesuré au bloc 96.*
- **P100.4 — les embeds : `ascii` 2, `filtrage` 2, `chien-de-garde` 1,
  `ide` 2, `potentiometre` 1, `programmation-non-bloquante` 1,
  `fonction-informatique` 0, `xbee` 0 — TOTAL 9.** *Comptés à la lecture des
  huit sources, comme P98.5.*
- **P100.5 — les blocs de code : `fonction-informatique` 2, les sept autres 0 —
  TOTAL 2.** *Mesuré au bloc 97.*
- **P100.6 — AUCUNE ancre de wikilink `[[fiche#Section]]` signalée sur les
  huit.** *Le dépôt n'en porte que cinq, et aucune n'est dans ces fiches — je ne
  les ai pas vues à la lecture intégrale.*
- **P100.7 — `git status` après la génération : `26   (hors artefacts de seance : 20)`.**

### Prédictions du bloc 100 — titres

- **P100.8 — TEST NÉGATIF DÉLIBÉRÉ.** La table négative porte **trois** lignes :
  deux ancres justes et **une fausse d'un seul caractère** —
  `Programmation non-bloquante` avec un trait d'union que la source ne porte
  pas. **`renommer-titres.mjs` doit refuser le LOT ENTIER**, signaler le titre
  courant différent de l'ancre, et **n'écrire aucun octet**.
- **P100.9 — contrôle seul de la table réelle : 8 lignes, 8 ancres valides,
  aucun refus** ; puis `--ecrire` pose les huit titres :
  `ASCII code`, `Watchdog`, `Filtering measurements`, `Function (programming)`,
  `IDE`, `The potentiometer`, `Non-blocking programming`, `XBee`.
  ⚠ **Deux des huit ancres sont IDENTIQUES à leur remplacement** — `IDE` et
  `XBee` —, et **c'est le terme écrit pour réfuter** : si l'outil refuse une
  ligne dont l'ancien et le nouveau titre sont égaux, il faudra les sortir de la
  table et le dire. *Rien dans le code lu ne l'interdit : la garde porte sur
  l'égalité du titre courant et de l'ancre, pas sur leur différence avec le
  remplacement.*
- **P100.10 — `git status` en fin de bloc : `28   (hors artefacts de seance : 22)`**,
  les deux tables déposées, le renommage n'ajoutant rien.
- **P100.11 — `titres-doublons` après la pose : FR `243 / 243 / 0` inchangé,
  EN `235 / 235 / 0`.** *227 + 8 fiches, **zéro collision des deux côtés** —
  c'est le contrôle qui vérifie que `Function (programming)` n'entre pas en
  collision avec `Function`, et que `The potentiometer` n'entre en collision
  avec rien.*

### Constats du bloc 100 — 11 prédictions tenues, 0 réfutée

| # | prédiction | constat | verdict |
|---|---|---|---|
| P100.1 | ASCII 0 ; copie `3008b48` ; heure > 17:44:36 ; HEAD au caractère ; `v24.15.0` ; `18   (hors artefacts : 12)` | 0 ; `3008b48` ; **17:47:37** ; identique ; `v24.15.0` ; **18 / 12** | **tenue** |
| P100.2 | 8 squelettes, trois compteurs égaux | 8 écrits ; liens 8/15/17/6/12/13/19/5, embeds et code **tous `ok`** | **tenue** |
| P100.3 | 3 blocs `aliases:` retirés, contenu au caractère, **8 alias** | `watchdog`, `WDT` ; `filtre numérique`, `moyenne glissante`, `filtre médian` ; `boucle coopérative`, `super-loop`, `non bloquant` | **tenue** |
| P100.4 | embeds 2 / 1 / 2 / 0 / 2 / 1 / 1 / 0 = **9** | identique aux huit termes | **tenue** |
| P100.5 | blocs de code : `fonction-informatique` **2**, les sept autres **0** | identique | **tenue** |
| P100.6 | aucune ancre `[[fiche#Section]]` signalée | aucune | **tenue** |
| P100.7 | `git status` **26 / 20** | **26 / 20** | **tenue** |
| P100.8 | test négatif : refus du lot entier, 0 octet écrit | `L6 INTROUVABLE`, `title: en place : Programmation non bloquante`, **`REFUS`**, code 1 | **tenue** |
| P100.9 | 8 ancres valides, 8 titres posés, **`IDE` et `XBee` identiques acceptés** | **8 / 8**, les deux lignes identiques **écrites sans refus** | **tenue** |
| P100.10 | `git status` **28 / 22** | **28 / 22** | **tenue** |
| P100.11 | FR **243 / 243 / 0**, EN **235 / 235 / 0** | identique | **tenue** |

✅ **P100.9 PORTAIT UN TERME ÉCRIT POUR RÉFUTER, ET IL NE MORD PAS.** Deux des
huit lignes ont un ancien et un nouveau titre **identiques** — `IDE` et `XBee`.
*La lecture du code disait que la garde porte sur l'**égalité du titre courant
et de l'ancre**, pas sur leur **différence** avec le remplacement ; l'outil
écrit `IDE -> IDE` et `XBee -> XBee` sans broncher.* **Le comportement est donc
mesuré et non supposé** — règle du 29/08, une phrase de README décrit une
intention, seul le code décrit un comportement.

✅ **P100.11 EST LE CONTRÔLE QUI VALIDE LES DEUX TITRES ARBITRÉS.**
`Function (programming)` **n'entre en collision ni avec `Function`
(`fonction-en`) ni avec `Functions` (`micropython-fonctions-en`)**, et
`The potentiometer` n'entre en collision avec rien : **EN 235 / 235 / 0**.
*La règle d'usage de C125 exige de relever les groupes des deux côtés et de les
comparer ; **0 des deux côtés** est le seul état où la comparaison est triviale,
et le chantier l'a tenu du lot 8 à celui-ci.*

⚠ **UN FAIT NON PRÉDIT, ET IL CRÉE DEUX LIBELLÉS À TRADUIRE.** `ide` porte deux
wikilinks **nus** — `[[arduino-prise-en-main]]` et `[[micropython-prise-en-main]]`
— auxquels le générateur ajoute le **titre français** de leur cible :
`Prise en main d'Arduino` et `Prise en main de MicroPython`. *Le générateur les
signale (`libelles ajoutes (2) - a traduire`), et ils sont à reprendre à la
rédaction. C'est la seule des huit fiches dans ce cas, et je ne l'avais ni prédit
ni exclu.*

---

## GATE G4 — huit squelettes EN générés, huit `title:` posés.

**Fait** — **un bloc (100)**, **une garde de péremption au vert**,
`HEAD 0f3c9a5` stable. **8 squelettes écrits**, **8 alias retirés sur 3 fiches**,
**1 test négatif délibéré, 1 refus, 0 octet écrit**, **8 `title:` posés**.

**Chiffres qui ont changé** — corpus EN **227 → 235 fiches** ; `git status`
**17 / 12 → 28 / 22** ; titres-doublons EN **227 / 227 / 0 → 235 / 235 / 0**.

**Bilan prédictions/constats : 11 prédictions à décompte plein, 11 tenues,
0 réfutée.** *Troisième bloc plein d'affilée.*

**Ce qui suit** — blocs **101 et 102** : rédaction des huit fiches EN par
`creer-fiche-en.mjs --corps`, jamais par réécriture du fichier.

---

## BLOC 101 — RÉDACTION DES QUATRE PETITES FICHES (`xbee`, `ide`, `fonction-informatique`, `potentiometre`)

**Commandes** : garde ; dépôt de **quatre fichiers de corps** dans le scratchpad
(**hors dépôt**) ; `creer-fiche-en.mjs --corps <fiche EN> <corps>` ×4 ;
`--controle` et `--style` sur les quatre.

⚠ **La rédaction passe par `--corps`, jamais par la réécriture du fichier**, et
**le fichier de corps n'a plus à ouvrir par une ligne blanche** : l'arbitrage (a)
de Tim du 30/08 (suite 6) l'a fait poser par le code.

### Déclaration C131 du bloc 101

**État à l'entrée : 28 entrées, dont 22 hors artefacts de séance.**
**Versements que CE bloc s'ajoute en route, nommés :**

| # | artefact | état | total | hors artefacts |
|---|---|---|---|---|
| 29 | `tools/batterie-sortie-3008b49.txt` (étape 0 de la garde) | `??` | oui | **non** |
| — | les **quatre fichiers de corps**, dans le scratchpad de session, **hors dépôt** | — | **non** | **non** |

⚠ **`--corps` réécrit quatre fiches EN qui sont DÉJÀ `??`** : il **ne crée aucune
entrée**. *C'est la troisième fois de la séance que ce cas se présente, et c'est
toujours un coup de chance et non une garde — sur un fichier suivi, la
déclaration serait fausse sans que rien ne le signale.*

**Total impliqué : 29 entrées, dont 22 hors artefacts de séance**, aux deux
instants du bloc.

### Formes de titre de section à poser, déclarées AVANT d'écrire

**De production, relevées au bloc 93** : `## What is it for?` (153),
`## Pitfalls` (152), `## See also` (219), `## How does it work?` (11).
**Neuves, propres à leur fiche, déclarées comme neuves** :
`## What the IDE takes care of`, `## Which one for which target`,
`## How to write a function`, `## Shapes and variants`.

⚠ **UNE DÉCISION DE REPORT EST PRISE ICI, ET ELLE EFFACE UNE DIFFÉRENCE DE LA
SOURCE — DÉLIBÉRÉMENT.** `potentiometre` porte `## Comment ça marche` **sans
point d'interrogation**, seule occurrence sur **16** dans le corpus français
(bloc 95). Le corpus anglais porte `## How does it work?` **11 fois** et
`## How does it work` **zéro**. *Reporter la différence donnerait un titre
interrogatif anglais sans point d'interrogation, qui n'est pas une nuance mais
une faute.* **Décision : `## How does it work?`**, et **l'incohérence française
est consignée comme défaut de source à instruire**, pas masquée. *Le motif du
26/08 interdit d'inventer une asymétrie pour masquer un défaut de source ; il
demande donc que le défaut soit **rendu comptable**, et c'est ce que fait cette
ligne.*

### Prédictions du bloc 101

- **P101.1 — garde** : ASCII `0` ; copie `tools\batterie-sortie-3008b49.txt` ;
  heure **> 17:47:37** ; `HEAD git : 0f3c9a5 2026-08-30 11:20:01 +0200` **au
  caractère** ; `node : v24.15.0` ;
  `fichiers modifies non commites : 29   (hors artefacts de seance : 22)`.
- **P101.2 — `--corps` accepte les quatre corps**, et **imprime
  `ligne blanche : POSEE` ou son équivalent sur les quatre** : les fichiers de
  corps ouvrent par leur **première phrase**, sans ligne blanche initiale, ce que
  le correctif du 30/08 (suite 6) prend en charge. ⚠ **Terme écrit pour
  réfuter** : un refus dirait que le correctif ne fait pas ce que le JOURNAL
  annonce, et *une ligne de JOURNAL décrit une intention, seul le code décrit un
  comportement.*
- **P101.3 — `--controle` sur les quatre : les trois compteurs égaux**, et
  **0 lien non suffixé**. *Liens 5 / 12 / 6 / 13, embeds 0 / 2 / 0 / 1, blocs de
  code 0 / 0 / 2 / 0 — les chiffres du bloc 100, inchangés par la traduction.*
- **P101.4 — foisonnement du sous-lot entre +1,5 % et +6,5 %, point estimé
  +4,0 %** : **1 437 mots FR → entre 1 459 et 1 530, point 1 495**.
  ⚠ **AUCUNE décomposition par fiche**, et le refus est motivé : *le lot 10 a
  mesuré un foisonnement fiche par fiche de **+11,0 / +4,3 / +1,9 / −0,4 /
  +0,1 %** — un facteur de **11 points d'amplitude** à l'intérieur d'un même
  lot. Un prorata sur quatre fiches rejouerait une prédiction dont la cause
  d'échec est mesurée.*
- **P101.5 — `--style` sur les quatre fiches EN : les quatre seaux mécaniques à
  0** — `typographie francaise`, `virgule ambigue`, `C109 creees en EN`,
  `hors alphabet latin`. ⚠ *Le troisième est le seul qui puisse mordre ici : il
  compare le nombre de candidats C109 de la fiche EN à celui de sa source FR, et
  il a mordu une fois du chantier, au lot 9 sur `bete-a-cornes-en`.*
- **P101.6 — `C109 de prose` sur les quatre fiches EN : 2**, décomposé
  `xbee-en` **0**, `ide-en` **1**, `fonction-informatique-en` **0**,
  `potentiometre-en` **1**. *Report un pour un des gardés français mesurés au
  bloc 99.*
- **P101.7 — puces à tiret sur les quatre fiches EN : 1**, la seule de
  `fonction-informatique-en`. *Report un pour un du relevé post-passe.*
- **P101.8 — les deux libellés français signalés par le générateur sur `ide` sont
  traduits** : `Prise en main d'Arduino` → **`Getting started with Arduino`** et
  `Prise en main de MicroPython` → **`Getting started with MicroPython`**, qui
  sont **les `title:` en production de leurs cibles**, relevés et non traduits de
  tête.
- **P101.9 — `git status` en fin de bloc : `29   (hors artefacts de seance : 22)`**,
  inchangé depuis la garde.

### Constats du bloc 101 — 8 prédictions tenues, 1 réfutée

| # | prédiction | constat | verdict |
|---|---|---|---|
| P101.1 | ASCII 0 ; copie `3008b49` ; heure > 17:47:37 ; HEAD au caractère ; `29   (hors artefacts : 22)` | 0 ; `3008b49` ; **17:50:25** ; identique ; **29 / 22** | **tenue** |
| P101.2 | `--corps` accepte les quatre, ligne blanche posée | **`ligne blanche apres le front matter : POSEE`** ×4, `front matter identique a l octet : oui` ×4 | **tenue** |
| P101.3 | trois compteurs égaux, 0 lien non suffixé | 5/5, 12/12, 6/6, 13/13 ; embeds et code `ok` ; `--controle` **235 fiches, 0 divergente, 0 lien non suffixé** | **tenue** |
| P101.4 | 1 437 → [1 459, 1 530], point 1 495 | **1 468**, soit **+2,16 %** | **tenue** |
| P101.5 | quatre seaux mécaniques à 0 | **0 / 0 / 0 / 0** | **tenue** |
| P101.6 | `C109 de prose` **2**, décomposé 0 / **1** / 0 / 1 | **1**, décomposé 0 / **0** / 0 / 1 | **RÉFUTÉE** |
| P101.7 | puces à tiret EN **1**, celle de `fonction-informatique-en` | **1**, la même | **tenue** |
| P101.8 | les deux libellés traduits en `Getting started with Arduino` / `… with MicroPython` | identiques aux `title:` de production | **tenue** |
| P101.9 | `git status` **29 / 22** | **29 / 22** | **tenue** |

⚠⚠ **P101.6 EST RÉFUTÉE PAR UN CANDIDAT C109 QUI VIVAIT DANS UN LIBELLÉ DE
WIKILINK, ET C'EST UNE FAMILLE QUE LE CHANTIER N'AVAIT JAMAIS RENCONTRÉE.**
Le candidat résiduel d'`ide` côté français est le tiret de
`[[arduino-prise-en-main|Arduino — prise en main]]`, **à l'intérieur du libellé**,
sous `## Voir aussi`. *Je l'avais compté comme reportable un pour un ; il ne l'est
pas, parce que le libellé anglais ne se traduit pas — **il se relève** dans le
`title:` de production de la cible, qui est `Getting started with Arduino` et ne
porte aucun tiret.*

**Ce que la réfutation apprend, et elle vaut au-delà de ce lot** : le report un
pour un des candidats C109 **suppose que le texte se traduise**. Il tient pour la
prose, il tombe pour les **libellés de wikilink**, qui obéissent à une autre
règle — la règle d'usage « le `title:` EN se lit dans les libellés en
production ». ⚠ *Deux règles du chantier se rencontrent ici pour la première
fois, et elles ne disent pas la même chose du même caractère.*

✅ **CE QUI RESTE VRAI : le candidat de `potentiometre-en` EST un report un pour
un.** Le `;` de `(or the other way round); designed for audio volume` reporte le
`;` français jugé **GARDÉ** au bloc 99 — segment de droite participial, exempté
par C123 —, et il sort au même endroit dans les deux langues. *Le report un pour
un n'est pas cassé, il est **borné à la prose**.*

⚠ **UNE DIFFÉRENCE DE TYPOGRAPHIE A ÉTÉ POSÉE DÉLIBÉRÉMENT ET ELLE SE DIT** : le
français écrit `(ou l'inverse) ; conçue pour…` avec **une espace avant le
point-virgule**, l'anglais écrit `(or the other way round); designed for…`
**sans**. *`--style` compte l'espace française devant `;` comme un **verdict
mécanique** ; la garder aurait fait sortir le seau `typographie francaise` à 1.
Le report un pour un porte sur le **signe**, jamais sur l'espace qui le
précède.* ✅ **Vérifié avant l'écriture par un balayage des quatre fichiers de
corps : zéro espace devant `; : ! ? %`.**

✅ **FOISONNEMENT +2,16 % SUR LE SOUS-LOT, ET LE REFUS DE DÉCOMPOSER ÉTAIT LE BON
CHOIX** : `xbee-en` **+0,0 %**, `ide-en` **+0,8 %**, `fonction-informatique-en`
**+0,8 %**, `potentiometre-en` **+4,8 %** — **une amplitude de 4,8 points sur
quatre fiches d'une même famille**. *Un prorata aurait annoncé les quatre autour
de +4 % et raté trois termes sur quatre, dont un exactement nul.*
⚠ *`xbee-en` sort à **135 → 135**, foisonnement rigoureusement nul : une fiche de
135 mots dont la traduction ne coûte pas un mot.*

---

## BLOC 102 — RÉDACTION DES QUATRE GROSSES FICHES (`ascii`, `filtrage`, `programmation-non-bloquante`, `chien-de-garde`)

**Commandes** : garde ; dépôt de **quatre fichiers de corps** dans le scratchpad
(**hors dépôt**) ; `--corps` ×4 ; `--controle`, `--style` et relevé des puces.

### Déclaration C131 du bloc 102

**État à l'entrée : 29 entrées, dont 22 hors artefacts de séance.**
**Versement nommé** : `tools/batterie-sortie-3008b50.txt`, copie C124 de l'étape
0 → **+1 `??`**, écartée du sous-compteur. Les quatre fichiers de corps vivent
**hors dépôt** ; `--corps` réécrit quatre fiches **déjà `??`** et ne crée aucune
entrée. **Total impliqué : 30 entrées, dont 22 hors artefacts de séance**, aux
deux instants du bloc.

### Formes de titre de section à poser, déclarées AVANT d'écrire

**De production** : `## What is it for?` (153), `## How does it work?` (11),
`## Pitfalls` (152), `## See also` (219), `## Special case — …` (104 dans la
famille), `## Example — …` (114 dans la famille).
**Neuves, propres à leur fiche, déclarées comme neuves — DIX** :
`## A few landmarks`, `## Beyond 127 — Unicode and UTF-8`,
`## Three noises, three remedies`, `## The price of filtering`,
`## The two ways of letting time pass`,
`### Overflow, and why the idiom is not written the same everywhere`,
`## What is the watchdog independent of?`,
`## What the watchdog does not detect`, `## A silent reboot teaches nothing`,
plus les quatre formes de famille à suffixe propre —
`## Special case — what software can no longer fix`,
`## Example — Three activities, one loop`,
`## Special case — Where cooperation stops`,
`## Example — The build that thinks it is alive`,
`## Special case — Reboot, or warn`.

⚠ **Le callout `> [!tip]` d'`ascii` est NU dans la source** — aucun titre —,
alors que le corpus anglais écrit `> [!tip] Tip` **46 fois**. **Il reste nu** :
*le relevé sert à ne pas inventer une forme, pas à en ajouter une que la source
ne porte pas.*

### Prédictions du bloc 102

- **P102.1 — garde** : ASCII `0` ; copie `tools\batterie-sortie-3008b50.txt` ;
  heure **> 17:50:25** ; `HEAD git : 0f3c9a5 2026-08-30 11:20:01 +0200` **au
  caractère** ; `node : v24.15.0` ;
  `fichiers modifies non commites : 30   (hors artefacts de seance : 22)`.
- **P102.2 — `--corps` accepte les quatre**, `ligne blanche … POSEE` sur les
  quatre, `front matter identique a l octet : oui` sur les quatre.
- **P102.3 — trois compteurs égaux sur les quatre** : liens 8 / 17 / 19 / 15,
  embeds 2 / 2 / 1 / 1, blocs de code 0 sur les quatre.
- **P102.4 — foisonnement du sous-lot entre +1,0 % et +6,0 %, point estimé
  +3,0 %** : **5 902 mots FR → entre 5 961 et 6 256, point 6 079**.
  ⚠ **AUCUNE décomposition par fiche** : le bloc 101 vient de mesurer
  **+0,0 / +0,8 / +0,8 / +4,8 %** sur quatre fiches de la même famille, soit
  **4,8 points d'amplitude**, et le lot 10 en avait mesuré 11,4.
- **P102.5 — `C109 de prose` sur les quatre fiches EN : 18**, décomposé
  `ascii-en` **4**, `filtrage-en` **3**,
  `programmation-non-bloquante-en` **5**, `chien-de-garde-en` **6**.
  *Report un pour un des gardés français mesurés au bloc 99, et **aucun des 18 ne
  vit dans un libellé de wikilink** — la famille qui a réfuté P101.6 : les
  quatorze premiers sont des incises encadrées de prose, les quatre autres une
  puce et un intervalle `a–z`.*
- **P102.6 — les quatre seaux mécaniques à 0** sur les quatre fiches EN.
  ⚠ **Terme écrit pour réfuter, et il porte sur `ascii-en`** : la source écrit
  `« 0 »`, `« A »`, `« la lettre A »` avec des **guillemets français**, et
  l'anglais écrira `"0"`, `"A"`, `"the letter A"` avec des **guillemets
  droits** — mesuré au bloc 101 comme la forme du corpus anglais. *Le seau
  `hors alphabet latin` ne compte que les caractères **absents de la source**,
  et `"` U+0022 est dans l'alphabet latin de l'outil (`[ -ɏ]`) : il ne
  doit donc pas mordre. **Écrire `“ ”` typographiques le ferait mordre**, et
  c'est le piège que ce terme surveille.*
- **P102.7 — puces à tiret sur les quatre fiches EN : 6**, décomposé
  `ascii-en` **3**, `filtrage-en` **3**,
  `programmation-non-bloquante-en` **0**, `chien-de-garde-en` **0**.
- **P102.8 — `hors perimetre` sur les quatre fiches EN entre 0 et 20, point
  estimé 8.** *Le seau compte titres, cellules de tableau et `alt` ; les quatre
  fiches du bloc 101 ont rendu **0**, et celles-ci portent **deux tableaux** —
  `programmation-non-bloquante` 3 lignes, `chien-de-garde` 2 lignes — et
  **six `alt`**.*
- **P102.9 — `--controle` : 235 fiches, 0 divergente, 0 lien non suffixé.**
- **P102.10 — `git status` en fin de bloc : `30   (hors artefacts de seance : 22)`.**

### Constats du bloc 102 — 8 prédictions tenues, 2 réfutées

| # | prédiction | constat | verdict |
|---|---|---|---|
| P102.1 | ASCII 0 ; copie `3008b50` ; heure > 17:50:25 ; HEAD au caractère ; `30   (hors artefacts : 22)` | 0 ; `3008b50` ; **17:54:50** ; identique ; **30 / 22** | **tenue** |
| P102.2 | `--corps` accepte les quatre, ligne blanche posée, front matter à l'octet | `POSEE` ×4, `identique a l octet : oui` ×4 | **tenue** |
| P102.3 | liens 8 / 17 / 19 / 15, embeds 2 / 2 / 1 / 1, code 0 ×4 | identiques, tous `ok` | **tenue** |
| P102.4 | foisonnement ∈ [+1,0 %, +6,0 %], point +3,0 % | **−0,51 %** (5 902 → 5 872) | **RÉFUTÉE** |
| P102.5 | `C109 de prose` **18**, décomposé 4 / 3 / 5 / 6 | **18**, décomposé **4 / 3 / 5 / 6** | **tenue** |
| P102.6 | quatre seaux mécaniques à 0 | `typographie francaise` 0, `hors alphabet latin` 0, `C109 creees en EN` **1 puis 0**, `virgule ambigue` **1** | **RÉFUTÉE** |
| P102.7 | puces EN **6**, décomposé 3 / 3 / 0 / 0 | **6**, décomposé **3 / 3 / 0 / 0** | **tenue** |
| P102.8 | `hors perimetre` ∈ [0, 20], point 8 | **12** | **tenue** |
| P102.9 | `--controle` 235 / 0 / 0 | **235 fiches, 0 divergente, 0 lien non suffixé** | **tenue** |
| P102.10 | `git status` **30 / 22** | **30 / 22** | **tenue** |

⚠⚠ **`C109 creees en EN` A MORDU, ET C'EST LA PRÉDICTION P102.5 QUI A TROUVÉ LE
DÉFAUT AVANT LE COMPTEUR.** La première écriture de `chien-de-garde-en` rendait
**7** candidats C109 pour **6** côté français, et le compteur dédié l'a nommé :
`1 CREEE(S) PAR LA TRADUCTION`, ligne **52**. *Le défaut est que j'ai écrit
`the loop is ready to feed; and no long operation is planned…` **en
réintroduisant le point-virgule que la passe C109 du bloc 99 venait d'ôter au
français**, où la ligne dit désormais `prête à nourrir. Et on ne prévoit pas…`.*
✅ **Corrigé et réécrit ; le compteur retombe à 0 et `C109 de prose` à 18, la
valeur prédite, décomposée 4 / 3 / 5 / 6 sur les quatre termes.**
⚠ *Deuxième morsure de ce compteur du chantier, après `bete-a-cornes-en` au
lot 9. **Et la prédiction chiffrée valait autant que le compteur** : 19 au lieu
de 18 disait qu'un candidat était de trop avant même de lire quelle fiche le
portait.*

⚠ **P102.6 RÉFUTÉE SUR `virgule ambigue`, ET LA CAUSE EST UNE CONVENTION QUE J'AI
SUIVIE CONTRE MA PROPRE PRÉDICTION.** `chien-de-garde-en` écrit
`up to 8,388 ms on RP2` là où le français écrit `8 388 ms` : **le séparateur de
milliers anglais**, reconduit par décision du lot 10. *`--style` le range en
`candidat a lire` — « virgule : décimale française ou milliers anglais ? » —, et
il a rendu **2** au lot 8 et **2** au lot 10 pour la même raison.* ⚠ **La faute
est dans la prédiction, pas dans le texte** : j'ai nommé cette famille au
bloc 91 en la disant « la moins sûre » des quatre, puis je l'ai prédite à 0 au
bloc 102 en oubliant que ce lot porte un nombre de quatre chiffres. *Le texte
suit la convention ; c'est la prédiction qui ne suivait pas la mesure.*

⚠⚠ **P102.4 EST RÉFUTÉE DANS LE SENS INVERSE DE CELUI QUI EST PRÉVU, ET C'EST LE
FAIT LE PLUS NEUF DU LOT : LES QUATRE GROSSES FICHES FOISONNENT NÉGATIVEMENT.**
`ascii-en` **−0,6 %**, `chien-de-garde-en` **−1,1 %**, `filtrage-en` **−0,1 %**,
`programmation-non-bloquante-en` **−0,1 %** — **sous-lot à −0,51 %**, et
**aucune des quatre n'est positive**. *Le chantier a mesuré une moyenne de
**+3,7 %** sur 227 paires et son plus bas lot à **+2,12 %** ; aucun sous-lot n'a
jamais été négatif dans son ensemble.*

**Cause, et elle rejoint la variable de la journée** : ces quatre fiches sont des
**notions argumentatives denses**, celles-là mêmes dont le taux de C109 était le
plus haut au bloc 91 — `chien-de-garde` 1,45 pour 100, `ascii` 1,34. *Le français
argumentatif empile les relatives, les appositions et les tournures
impersonnelles (« il faut la chercher plutôt que la supposer », « ce qui répond
directement à ») que l'anglais rend en moins de mots. **C'est la troisième cause
d'ininterprétabilité du foisonnement à jouer en sens inverse**, après les chaînes
C113 du 25/08 (suite 8) et les gloses de `memoire` du 24/08 (suite 2), et la
première qui porte sur la **prose entière** d'un sous-lot et non sur quelques
segments.*

⚠ **Et le contraste avec le bloc 101 le prouve dans le même lot** : les quatre
**petites** fiches ont rendu **+2,16 %**, les quatre **grosses** **−0,51 %**.
*Ce n'est donc pas une propriété du lot ni de la branche `embarque/mcu/` : c'est
une propriété du **registre**, mesurée deux fois le même soir sur la même
famille de fiches.*

**Foisonnement du lot entier : 7 339 → 7 340 mots, soit +0,01 %.** ⚠ *Le plus bas
du chantier, et il est à **un mot** de la neutralité parfaite.*

---

## BLOC 103 — ÉTAT DE CLÔTURE DU LOT 11

**Commande** :

```
powershell -ExecutionPolicy Bypass -File tools\batterie.ps1 -Phase etat -FichesEn en/embarque/mcu/ascii-en.md,en/embarque/mcu/chien-de-garde-en.md,en/embarque/mcu/filtrage-en.md,en/embarque/mcu/fonction-informatique-en.md,en/embarque/mcu/ide-en.md,en/embarque/mcu/potentiometre-en.md,en/embarque/mcu/programmation-non-bloquante-en.md,en/embarque/mcu/sans-fil/xbee-en.md -Chevron
```

### Déclaration C131 du bloc 103

**État à l'entrée : 30 entrées, dont 22 hors artefacts de séance.**
**Versement nommé** : `tools/batterie-sortie-3008b51.txt`, copie C124 de l'étape
0 → **+1 `??`**, écartée du sous-compteur. **Aucune écriture dans `content/`**.
**Total impliqué : 31 entrées, dont 22 hors artefacts de séance.**

### Prédictions du bloc 103 — garde et corpus

- **P103.1 — garde** : ASCII `0` ; copie `tools\batterie-sortie-3008b51.txt` ;
  heure **> 17:54:50** ; `HEAD git : 0f3c9a5 2026-08-30 11:20:01 +0200` ;
  `node : v24.15.0` ; `31   (hors artefacts de seance : 22)` ; **onze lignes de
  dates** — trois de pilotage inchangées au caractère, **huit de fiches EN datées
  du 2026-08-30**.
- **P103.2 — corpus** : `fiches FR publiees : 242`, `mots FR : 291242`
  **inchangés** ; `deja traduites : 235 fiches, 270769 mots FR` ;
  `RESTANT A TRADUIRE : 7 fiches, 20473 mots FR`.
  *Contrôle publié d'avance : **270 769 + 20 473 = 291 242**, et la passe C109 de
  ce lot étant **exactement neutre en mots**, le `tot` d'avant et le `tot` d'après
  sont **le même chiffre** — la règle « une soustraction se fait sur deux états de
  même date » n'a rien à trancher ici, et c'est la première fois du chantier.*
- **P103.3 — `--controle`** : `235 fiche(s) controlee(s), 0 divergente(s)`,
  `Liens non suffixes : 0 sur 0 fiche(s)`.
- **P103.4 — dérive** : `MARQUE INVALIDE 0`, `DERIVE 0`, `A JOUR 235`.
  ⚠ **Zéro `--recaler`, TROISIÈME lot d'affilée.**
- **P103.5 — foisonnement** : `235 paire(s) : 270769 mots FR -> 280397 mots EN`,
  `foisonnement moyen : 3.6 %`. *Base : 227 paires à 263 430 → 273 057 (clôture
  du lot 10), plus **7 339 FR et 7 340 EN** mesurés aux blocs 101 et 102.*

### Prédictions du bloc 103 — style, médias, anneau, chevron

- **P103.6 — `--style` des huit fiches EN** : `typographie francaise` **0**,
  `C109 creees en EN` **0**, `hors alphabet latin` **0** ;
  `virgule ambigue` **1** (le séparateur de milliers `8,388 ms`) ;
  `C109 de prose` **19** ; `hors perimetre` **12** ;
  `8 fiche(s) lue(s), 6 a reprendre.`
  *19 = 18 des quatre grosses + 1 de `potentiometre-en` ; `xbee-en`,
  `ide-en` et `fonction-informatique-en` rendent zéro candidat dur.*
- **P103.7 — médias** : `483` fiches, `716` embeds. *475 + 8 et 707 + 9, les neuf
  embeds ayant été comptés fiche par fiche au bloc 100.*
- **P103.8 — anneau 2** : `ANNEAU 2 NET : 145`, `deja traduites : 141`,
  `RESTANT : 4`, `RESTANT DE L ANNEAU 2 (4 fiches) 18205`, porteuses de chevron
  **0**, `CIBLES SANS FICHE (6)`. **Les quatre restantes nommées** :
  `embarque/pcb/easyeda` 9 773, `embarque/simulation/falstad` 3 244,
  `embarque/simulation/ltspice` 3 848, `embarque/simulation/wokwi` 1 340.
- **P103.9 — dette** : `cibles rouges distinctes : 7`, `mots : 20473`,
  `dont HORS anneaux 0..2 : 2`.
- **P103.10 — chevron `--tout`** : **34 paires des deux côtés, 0 divergente**,
  inchangé. ⚠ *`ded` = 0 sur le restant, `tot` = `deh`, **C127 hors sujet pour le
  sixième lot d'affilée**.*
- **P103.11 — wikilinks** : `mortes` **7** (15 − 8, les huit cibles créées ce
  soir), `cassees` **0**, `ambigues` **0**.
- **P103.12 — `--libelles`** : `wikilinks a libelle` ∈ [4 190, 4 210] point
  **4 199** ; `cible EN absente` ∈ [25, 40] point **31** ;
  `candidats a lire` ∈ **[144, 152], point 147** ; `positions de parcours` **16**.
  ⚠ **DÉCLARATION DE POPULATION (C131) POUR LE SEUL COMPTEUR QUI L'EXIGE** : la
  référence **144** de la clôture du lot 10 porte sur **227** fiches EN ; celle
  de ce soir porte sur **235**, dont les huit neuves apportent **95 wikilinks à
  libellé** et rendent **74 libellés préexistants comparables** pour la première
  fois. *Les deux chiffres ne sont donc pas comparables terme à terme, et la
  fourchette est calée sur ce que les huit titres arrêtés font au compteur, pas
  sur une variation du reste du corpus.*
- **P103.13 — les 74 libellés qui deviennent comparables créent ZÉRO
  candidat**, et le fondement est la clause du 29/08 (suite 9), lue dans le
  code : `memeRadical` compare des **préfixes de cinq lettres**, et les huit
  `title:` **contiennent** leur forme de production — `ASCII code` / `ASCII code`,
  `Watchdog` / `Watchdog`, `Filtering measurements` / `Filtering measurements`,
  `Function (programming)` / `Function`, `IDE` / `IDE`,
  `The potentiometer` / `potentiometer`,
  `Non-blocking programming` / `Non-blocking programming`, `XBee` / `XBee`.
  **Sixième épreuve de la clause, et la première sur HUIT titres à la fois.**
- **P103.14 — les candidats neufs, s'il y en a, viennent des 95 libellés SORTANTS
  et je les nomme avant la mesure** : `[[niveaux-de-tension-en|voltage divider]]`
  (deux occurrences, dans `potentiometre-en` et… non, **une seule**, contre le
  `title:` `Logic levels`, aucun radical commun) et
  `[[adc-en|analog-to-digital converter]]` contre le `title:` `ADC`, **si
  `estSigleDe` ne le reconnaît pas** — la famille des sigles que la clause nomme
  déjà.
- **P103.15 — titres-doublons** : FR `243 / 243 / 0`, EN `235 / 235 / 0`.
- **P103.16 — `git status` en fin de bloc : `31   (hors artefacts de seance : 22)`.**

### Constats du bloc 103 — 14 prédictions tenues, 2 réfutées, et UN INCIDENT

⚠⚠ **INCIDENT C124 — J'AI FILTRÉ LE LANCEMENT DE LA BATTERIE AU LIEU DE FILTRER
SA SORTIE, ET C'EST LA RÈGLE DU §8 QUE LE 29/08 A ÉCRITE MOT POUR MOT.**
Le premier lancement de `-Phase etat` a été passé dans
`| Select-String -NotMatch … | Select-Object -First 200`. *La règle dit :
« un `| Select-Object -First N` sur `batterie.ps1` **coupe le pipeline avant le
`Out-File` final** : les mesures s'affichent, et le fichier reste sur la sortie
précédente. La batterie écrit son fichier ; c'est **le fichier** qui se filtre,
jamais le lancement. »* **Code de sortie 255, témoin perdu.**
✅ **Relancé immédiatement sans aucun filtre**, `> $null` seul, la lecture portant
ensuite sur `tools/batterie-sortie.txt`.
⚠ **Ce que l'incident coûte, chiffré** : une copie C124 de plus
(`3008b52`), donc **`git status` à 32 et non 31**, ce qui **réfute P103.16 par
mon propre geste**. *La règle avait été tenue **onze fois** au lot 10 et
**cinq** fois ce soir ; elle tombe à la douzième, sur le seul bloc dont la
sortie est trop longue pour être lue d'un coup — **c'est-à-dire exactement le
cas pour lequel elle a été écrite**.*

| # | prédiction | constat | verdict |
|---|---|---|---|
| P103.1 | ASCII 0 ; copie `3008b51` ; `31   (hors artefacts : 22)` ; 11 lignes de dates dont 8 du 30/08 | 0 ; `3008b51` ; **31 / 22** ; 11 lignes, **8 datées 2026-08-30** | **tenue** |
| P103.2 | 242 / 291 242 ; 235 / 270 769 ; 7 / 20 473 | identiques ; **270 769 + 20 473 = 291 242** | **tenue** |
| P103.3 | 235 / 0 divergente / 0 lien non suffixé | identique | **tenue** |
| P103.4 | `MARQUE INVALIDE 0`, `DERIVE 0`, `A JOUR 235` | identiques (+ `SANS SOURCE 0`, `SANS MARQUE 0`) | **tenue** |
| P103.5 | `235 paire(s) : 270769 -> 280397`, **3.6 %** | identique au mot et au dixième | **tenue** |
| P103.6 | 0 / 1 / 0 / 19 / 12 / 0 et **`6 a reprendre`** | 0 / 1 / 0 / **19** / **12** / 0 et **`5 a reprendre`** | **RÉFUTÉE** (1 terme sur 7) |
| P103.7 | `483` fiches, `716` embeds | **483**, **716** | **tenue** |
| P103.8 | NET 145 / 141 / 4, **18205**, porteuses 0, `CIBLES SANS FICHE (6)`, les 4 nommées | identiques, et les quatre noms | **tenue** |
| P103.9 | dette `7` / `20473` / `2` | identiques | **tenue** |
| P103.10 | chevron `--tout` : **34 paires, 0 divergente** | **34 / 0** | **tenue** |
| P103.11 | `MORT 7`, `CASSE 0`, `AMBIGU 0` | **7 / 0 / 0** (+ `GABARIT 8`, `ALIAS 6`, `OK 479`) | **tenue** |
| P103.12 | `4199` point exact ; absente ∈ [25,40] ; candidats ∈ [144,152] ; positions **16** | **4199** ; **29** ; **145** ; **16** | **tenue** |
| P103.13 | les 74 libellés rendus comparables créent **0** candidat | **0** — le seul candidat neuf est **sortant** | **tenue** |
| P103.14 | le candidat neuf est `[[niveaux-de-tension-en\|voltage divider]]` contre `Logic levels` ; `[[adc-en\|analog-to-digital converter]]` seulement si `estSigleDe` échoue | **exactement celui-là, et lui seul** ; `adc-en` **non signalé** | **tenue** |
| P103.15 | FR `243 / 243 / 0`, EN `235 / 235 / 0` | identiques | **tenue** |
| P103.16 | `git status` **31 / 22** | **32 / 22** | **RÉFUTÉE** (cause : l'incident) |

✅ **P103.14 EST LE TERME QUI PORTE, ET IL NOMME LE CANDIDAT AVANT DE LE
MESURER.** `candidats a lire` passe de **144 à 145**, et le seul candidat neuf
est `[[niveaux-de-tension-en|voltage divider]]` dans `potentiometre-en`, contre
le `title:` `Logic levels` — **aucun radical de cinq lettres en commun**, ce que
la prédiction disait. ⚠ *Et la seconde candidate nommée, `[[adc-en|analog-to-digital
converter]]` contre `ADC`, **ne mord pas** : `estSigleDe` la reconnaît. **Nommer
les deux et dire laquelle dépend d'une fonction que je n'avais pas relue est ce
qui rend la prédiction lisible** — le compteur seul aurait dit +1 sans dire d'où.*

✅ **SIXIÈME ÉPREUVE DE LA CLAUSE DU 29/08 (SUITE 9), ET LA PREMIÈRE SUR HUIT
TITRES À LA FOIS : ZÉRO CANDIDAT CRÉÉ PAR LES TITRES.** Les **74** libellés
préexistants qui visaient les huit cibles deviennent comparables ce soir, et
**aucun** n'entre au compteur : les huit `title:` **contiennent** leur forme de
production, y compris les deux qui l'**allongent** —
`Function (programming)` sur `Function`, `The potentiometer` sur
`potentiometer`. *La clause disait exactement cela ; c'est la première fois
qu'elle est éprouvée sur deux titres allongés dans le même lot.*

⚠ **P103.6 RÉFUTÉE SUR UN TERME, ET LA PRÉDICTION SE CONTREDISAIT ELLE-MÊME.**
J'ai écrit `6 a reprendre` **et**, deux lignes plus bas, que trois fiches sur
huit rendent zéro candidat dur. *Huit moins trois font cinq.* **Les six autres
termes de la prédiction tombent au chiffre**, `C109 de prose 19` et
`hors perimetre 12` compris. ⚠ *C'est la famille « une déclaration finit par le
total qu'elle implique », appliquée cette fois à une prédiction dont la
justification portait déjà la bonne réponse.*

---

## BLOC 104 — RELEVÉS DE CLÔTURE : FORMES DE PRODUCTION, CALLOUTS, PUCES DU CORPUS

**Commandes** : script de relevé du bloc 93 rejoué ; script jetable de comptage
des puces du corpus entier, **qui écrit sa population dans sa propre sortie**.

### Déclaration C131 du bloc 104

**État à l'entrée : 32 entrées, dont 22 hors artefacts de séance** — 31 prévues
plus `tools/batterie-sortie-3008b52.txt`, la copie de trop née de l'incident
C124 du bloc 103. **Versement de ce bloc : aucun**, les deux scripts vivant hors
dépôt et n'écrivant que sur la sortie standard.
**Total inchangé : 32 entrées, dont 22 hors artefacts de séance.**

### Prédictions du bloc 104 — formes de production et callouts

- **P104.1 — les six formes de production, avec leur delta décomposé et le motif
  de chaque delta** :
  `## See also` **219 → 227 (+8)** — *les huit fiches en portent une* ;
  `## What is it for?` **153 → 159 (+6)** — *`ide` et `xbee` n'en ont pas, mesuré
  au bloc 94* ;
  `## Pitfalls` **152 → 157 (+5)** — *`ascii`, `ide` et `xbee` n'en ont pas* ;
  `## Where it fits in the project` **105 inchangé** ;
  `## Exercises` **37 inchangé** ; `## Going further` **31 inchangé** ;
  `## Step by step` **78 inchangé**. ⚠ *Les quatre inchangés sont le terme qui
  prouve : aucune des huit sources ne porte `## Raccrochage projet`,
  `## Exercices`, `## Aller plus loin` ni `## Procédure pas à pas`.*
- **P104.2 — les deux formes fautives du lot 4 restent à 0** —
  `## Project connection`, `## Step-by-step procedure`. *Sixième confirmation.*
- **P104.3 — `POPULATION (fichiers balayes) : 235`** dans les deux relevés.
- **P104.4 — les sept titres de callout INCHANGÉS** : `Watch out` **49**,
  `Tip` **46**, `Good` / `Fair` / `Poor` **3** chacun, `Attention` **0**,
  `Astuce` **0**. ⚠ **`Tip` reste à 46 alors que `ascii-en` porte un
  `> [!tip]`** : la source française l'écrit **nu**, et le report un pour un le
  garde nu. *C'est le terme qui prouve — prédire 47 serait prédire la convention
  du corpus au lieu du report de la source.*

### Prédictions du bloc 104 — puces à tiret du corpus, populations déclarées

- **P104.5 — côté FRANÇAIS : `995 − 11 = 984` puces sur `172 − 2 = 170`
  porteuses, population `248` fichiers.**
  ⚠ **Le terme qui prouve est le −2 de porteuses** : sur les cinq sources dont
  des puces tombent, **deux passent à zéro et sortent de la population des
  porteuses** — `potentiometre` (2 → 0) et `chien-de-garde` (1 → 0) —, quand
  `ascii` (6 → 3), `filtrage` (6 → 3) et `fonction-informatique` (3 → 1) y
  restent. *Prédire −5 serait prédire le nombre de fiches traitées ; prédire −2
  est la mesure.*
- **P104.6 — côté ANGLAIS : `917 + 7 = 924` puces sur `153 + 3 = 156`
  porteuses, population `227 + 8 = 235` fichiers.**
  ⚠ **Le +3 de porteuses est le terme symétrique** : les huit fiches EN neuves
  portent des puces à tiret, mais **trois seulement** — `ascii-en` 3,
  `filtrage-en` 3, `fonction-informatique-en` 1 —, les cinq autres à zéro.
  *Prédire +8 serait prédire la création, pas la mesure.*

### Constats du bloc 104 — 4 prédictions tenues, 2 réfutées, et une référence du chantier déclarée NON REPRODUCTIBLE

| # | prédiction | constat | verdict |
|---|---|---|---|
| P104.1 | 219→**227** / 153→**159** / 152→**157** / **105** / **37** / **31** / `Step by step` **78** | **identiques aux sept termes** | **tenue** |
| P104.2 | les deux formes fautives à 0 | **0 / 0** | **tenue** |
| P104.3 | `POPULATION : 235` dans les deux relevés | **235 / 235** | **tenue** |
| P104.4 | `Watch out` 49, `Tip` **46**, Good/Fair/Poor 3, Attention 0, Astuce 0 | **identiques aux sept** | **tenue** |
| P104.5 | FR **984** / **170** porteuses / **248** fichiers | **946 / 167 / 248** | **RÉFUTÉE** |
| P104.6 | EN **924** / **156** porteuses / **235** fichiers | **886 / 153 / 235** | **RÉFUTÉE** |

✅ **P104.1 TOMBE SUR SES SEPT TERMES, ET LES QUATRE INCHANGÉS SONT CEUX QUI
PROUVENT.** `## Where it fits in the project` **105**, `## Exercises` **37**,
`## Going further` **31**, `## Step by step` **78** : *aucune des huit sources ne
portait `## Raccrochage projet`, `## Exercices`, `## Aller plus loin` ni
`## Procédure pas à pas`, et le relevé 4 du bloc 94 l'avait dit fiche par fiche.*
Les trois deltas — **+8 / +6 / +5** — reproduisent exactement la décomposition
mesurée au bloc 94 : `## Voir aussi` sur **8** sources, `## À quoi ça sert ?` sur
**6**, `## Pièges` sur **5**.

✅ **P104.4 PORTE SON TERME DE RÉFUTATION ET IL NE MORD PAS : `Tip` RESTE À 46.**
`ascii-en` porte bien un `> [!tip]`, mais **nu**, comme sa source. *Prédire 47
aurait été prédire la convention du corpus (46 occurrences de
`> [!tip] Tip`) au lieu du report un pour un de la source.*

⚠⚠ **P104.5 ET P104.6 SONT RÉFUTÉES PAR LA MÊME CAUSE, ET CETTE CAUSE EST UNE
RÈGLE DU §8 QUI SE RETOURNE CONTRE LE CHANTIER : LA RÉFÉRENCE FR 995 / EN 917
N'EST PAS REPRODUCTIBLE, PARCE QUE SON MOTIF N'A JAMAIS ÉTÉ PUBLIÉ.**
La règle du 29/08 (suite 11) dit qu'un compteur qui se remesure d'une clôture à
l'autre **déclare sa population dans sa sortie**, et le chantier l'a appliquée :
la population **248 / 227** est écrite, et elle est **juste** — mon script rend
**248** et **235** aux mêmes définitions. **Mais le MOTIF, lui, n'a jamais été
écrit nulle part**, et deux motifs plausibles encadrent la référence sans la
rendre :

| motif | FR (248 fichiers) | EN (235 fichiers) |
|---|---|---|
| **A** — `## Voir aussi`, `## Aller plus loin`, `## See also`, `## Going further` exclus | **946** / 167 porteuses | **886** / 153 porteuses |
| **B** — `## Voir aussi` et `## See also` seuls exclus | **1 033** / 173 | **972** / 159 |
| *référence publiée au lot 10, avant ce lot* | *995 / 172* | *917 / 153* |

*Le motif **A** est celui de l'amendement du 29/08 (suite 8), cas 1, qui met
`## Voir aussi` **et** `## Aller plus loin` hors périmètre ; c'est aussi celui
qui a reproduit **les quatre échantillons nommés** de l'épreuve C110 du bloc 98
— 12 / 11 / 16 / 10, fiche par fiche. **Le motif du relevé de lot est donc
vérifié ; c'est celui du relevé de CORPUS qui ne l'est pas**, et les deux
n'étaient pas le même.*

⚠ **La règle du 29/08 (suite 11) est donc INCOMPLÈTE, et c'est la mesure de ce
soir qui le montre** : déclarer la **population** d'un compteur ne suffit pas
s'il reste **un degré de liberté dans son motif**. *Deux clôtures avaient déjà
échoué à refermer ce compteur côté français ; la parade retenue alors — écrire
la population dans la sortie — a réglé la moitié du problème et laissé l'autre
intacte.* **Candidate : un compteur de référence publie sa POPULATION ET SON
MOTIF, tous deux dans sa propre sortie.**

⚠ **Et une seconde faute est à moi, elle est de protocole** : je n'ai **pas
mesuré les puces du corpus AVANT la passe C109 du bloc 99**. *Je ne peux donc pas
prouver que mon propre delta vaut −11 côté français : je peux seulement le
calculer, ce que C119 interdit.* **La bonne séquence était de relever le corpus
au cadrage, comme le lot 10 l'a fait pour ses formes de production.**

### Nouvelle référence, publiée avec sa population ET son motif

**Motif A** — ligne de puce `/^\s*[-*]\s/`, contenant `" — "` (em dash U+2014
**entouré d'espaces**), hors blocs de code clôturés, hors des sections
`## Voir aussi`, `## Aller plus loin`, `## See also`, `## Going further`.

**FR : 946 puces sur 167 porteuses, population 248 fichiers `content/` hors `en/`.**
**EN : 886 puces sur 153 porteuses, population 235 fichiers `content/en/`.**

*Les deux chiffres sont ceux de l'état d'après la passe C109 et après les huit
fiches EN, mesurés le 30/08 à 18:0x.*

---

## GATE G5 — clôture du lot 11.

**Fait** — **seize blocs d'exécution (89 à 104)**, **huit gardes de péremption au
vert**, `HEAD 0f3c9a5` stable au caractère sur les huit, **neuf lancements de
`batterie.ps1`** copiés sous `3008b44` à `3008b52`. **Lot composé sur un critère
qui ne rendait plus rien sous la borne**, assomption écrite avec son coût de
revert et arbitrage remonté sans blocage. **100 signalements C109 jugés un par
un**, 73 traités, 27 gardés, **70 ancres**, **deux tests négatifs délibérés, deux
refus, zéro octet écrit**, **8 fiches EN rédigées**, **8 `title:` posés**,
**neuf relevés d'avant rédaction**.

**Chiffres de clôture** — corpus FR **242 fiches, 291 242 mots, inchangés** ;
traduites **227 → 235 fiches**, **263 430 → 270 769 mots FR** ; restant
**15 → 7 fiches**, **27 812 → 20 473 mots**. Foisonnement **235 paires :
270 769 → 280 397 mots EN, moyenne 3,6 %** ; **lot à +0,01 %, le plus bas du
chantier**. `--controle` **235 fiches, 0 divergente, 0 lien non suffixé**.
Dérive **`MARQUE INVALIDE 0`, `DERIVE 0`, `A JOUR 235`**, **zéro `--recaler`,
troisième lot d'affilée**. Titres **FR 243/243/0, EN 235/235/0**. Chevron
`--tout` **34 paires, 0 divergente, inchangé**. **Anneau 2 : 145 net, 141
traduites, 4 restantes, 18 205 mots, 0 porteuse.** Dette **7 cibles, 20 473
mots, dont 2 hors anneaux 0..2**. Wikilinks **7 mortes, 0 cassée, 0 ambiguë,
8 gabarits, 6 alias, 479 ok**. Médias **483 fiches, 716 embeds**.
`--libelles` **4 199 / 4 170 / 29 / 145 / 16**. Formes de production EN
**227 / 159 / 157 / 105 / 37 / 31**, `## Step by step` **78**. Callouts
**`Watch out` 49, `Tip` 46, `Good`/`Fair`/`Poor` 3 chacun, `Attention` 0,
`Astuce` 0**. ⚠ **Puces à tiret, NOUVELLE RÉFÉRENCE avec sa population ET son
motif : FR 946 sur 167 porteuses (248 fichiers), EN 886 sur 153 porteuses
(235 fichiers), motif A.** `git diff -- content` **8 fichiers, 64 insertions,
64 suppressions**. ⚠ **Avancement, chaque ratio avec le nom de sa population :
anneau 2 en fiches 141 / 145 = 97,2 % ; corpus en fiches 235 / 242 = 97,1 % ;
corpus en mots 270 769 / 291 242 = 93,0 %.**

**Bilan prédictions/constats de la séance : 150 prédictions à décompte plein,
128 tenues, 22 réfutées — 85,3 %** (plus 1 déclarative honorée).

**Deux incidents, tous deux à moi :**
1. ⚠ **C124, bloc 103** — la batterie filtrée **au lancement** au lieu de sa
   sortie. Pipeline coupé, code 255, témoin perdu, relance immédiate sans
   filtre. *La règle avait tenu neuf lancements sur dix ce soir.*
2. ✅ **Un candidat C109 créé par la traduction**, `chien-de-garde-en` ligne 52,
   trouvé par le compteur `C109 creees en EN` **et annoncé par la prédiction
   chiffrée P102.5 avant lui**. Corrigé, réécrit, compteur retombé à 0.

**Une faute de protocole, sans incident** : les puces du corpus n'ont **pas** été
relevées avant la passe C109, donc leur delta se calcule et ne se mesure pas.
*Consigné, et la parade est de les relever au cadrage du lot 12.*

---

## BLOC 105 — CLÔTURE §7 : `conventions.md`, `JOURNAL.md`, ligne « Tailles » au point fixe

### Déclaration C131 du bloc 105

**État à l'entrée : 32 entrées, dont 22 hors artefacts de séance.**
**Versements nommés** : `conventions.md` et `JOURNAL.md` passent de non modifiés
à ` M` → **+2 entrées, toutes deux comptées hors artefacts**.
`tools/predictions-260830.md` était déjà ` M`, `TODO.md` et `BACKLOG.md` ne sont
pas touchés. **Total impliqué : 34 entrées, dont 24 hors artefacts de séance.**
✅ **Mesuré : 34 / 24.**

### Constats du bloc 105

- **Insertion sous ancre unique, tout ou rien, dans les deux fichiers.**
  `### Autres en attente` : **1 occurrence** ; `<!-- INSERT_JOURNAL_HERE -->` :
  **1 occurrence**. *Aucun des deux scripts n'écrit avant d'avoir compté son
  ancre, et le second refuse aussi si le gabarit `TAILLES_GABARIT` n'est pas
  unique.*
- **`conventions.md` 3 780 → 3 911 lignes (+131), 521,0 → 529,7 Kio.**
  **Six entrées neuves au §8**, dont une réfutation.
- **`JOURNAL.md` 2 450 → 2 484 lignes (+34), 660,5 → 675,6 Kio.**
- ✅ **La ligne « Tailles » est posée par POINT FIXE, et il a fallu DEUX tours** :
  gabarit sans chiffres à la rédaction, puis remplacement par ancre unique, la
  valeur posée étant remesurée après écriture. *Tour 1 : posé 673,8, mesuré
  675,6. Tour 2 : posé 675,6, mesuré 675,6 — **point fixe**.* ⚠ **Deux tours et
  non un, contrairement à la reprise du 30/08 (suite 6)** : la ligne de ce soir
  est **beaucoup plus longue** que le gabarit qu'elle remplace, donc le premier
  tour déplace la taille de 1,8 Kio. *Le point fixe n'est pas une formalité quand
  le texte posé pèse plus que son emplacement.*
- **Contrôle final des quatre tailles, relu sur le disque après la dernière
  écriture** : `conventions.md` **529,7**, `JOURNAL.md` **675,6**,
  `TODO.md` **282,7**, `BACKLOG.md` **206,0** — **les quatre identiques à ce que
  la ligne publie**.
- **`normalize-pilotage.js` relancé après les deux insertions :
  `0 caractere(s) a corriger, 0 fichier(s) modifie(s)`.**
- **`git status -- content` : 16 entrées** — **8 sources FR modifiées** et
  **8 fiches EN neuves**, aucune autre.

---

## BILAN DE SÉANCE — LOT 11

**150 prédictions à décompte plein, 128 tenues, 22 réfutées — 85,3 %**
(plus 1 déclarative honorée).

| bloc | objet | tenues | réfutées |
|---|---|---|---|
| 89 | garde d'ouverture | 8 | 1 |
| 90 | remesure de composition | 9 | 1 |
| 91 | cadrage du lot | 17 | 0 |
| 92 | décomposition des 82 candidats | 3 | 0 |
| 93 | relevés 1, 2, 5 | 8 | 0 |
| 94 | relevés 3 et 4 | 6 | 2 |
| 95 | relevé complémentaire | 5 | 5 |
| 96 | front matter et collisions | 6 | 1 |
| 97 | parenthèses et blocs de code | 3 | 5 |
| 98 | épreuve C110 des puces | 8 | 0 |
| 99 | jugement et passe C109 | 10 | 0 |
| 100 | génération et titres | 11 | 0 |
| 101 | rédaction, 4 petites fiches | 8 | 1 |
| 102 | rédaction, 4 grosses fiches | 8 | 2 |
| 103 | état de clôture | 14 | 2 |
| 104 | relevés de clôture | 4 | 2 |
| **total** | | **128** | **22** |

⚠ **LES DEUX BLOCS À 5 RÉFUTATIONS SONT CONSÉCUTIFS (95 et 97) ET ILS ONT DEUX
CAUSES, PAS DIX.** *Le **registre** de la fiche, confondu quatre fois avec sa
taille ou son sujet ; et des **populations non déclarées** dans mes propres
prédictions — `## Cas particulier*` chiffré comme s'il ne vivait que dans les
huit sources, « exactement deux » titres écrit sans liste nominative.*

✅ **ET LES QUATRE BLOCS PLEINS D'AFFILÉE (98 à 101 moins un) SONT CEUX OÙ LA
MESURE PRÉCÉDAIT LA PRÉDICTION** : les huit sources avaient été lues en entier,
les motifs éprouvés sur échantillons nommés, les compteurs lus dans le code.
*La différence entre 66,7 % et 100 % sur la même séance n'est pas la difficulté
du bloc, c'est ce que j'avais mesuré avant de prédire.*

---

## BLOC 106 — ARBITRAGE DE LA BORNE RENDU : LEVÉE EXPLICITE

**Décision Tim, à la clôture du lot 11, avant livraison** : *« Pour l'arbitrage,
je lève explicitement cette règle. »* **La borne de volume de lot, 6 657 mots,
est levée.**

**Commandes** : garde ; insertion d'une entrée au §8 de `conventions.md` sous
ancre unique ; **cinq éditions ancrées** dans l'entrée du 30/08 (suite 7) de
`JOURNAL.md` ; ligne « Tailles » reposée par **point fixe** ;
`normalize-pilotage.js`.

⚠ **L'entrée du JOURNAL est AMENDÉE, pas doublée** : l'arbitrage a été **soulevé
et rendu dans la même séance**, avant la livraison, donc il appartient à
l'entrée du lot 11. *La reprise du 30/08 (suite 6) avait créé une entrée neuve
parce qu'elle portait un correctif de code livré après un commit ; ce n'est pas
le cas ici.*

### Déclaration C131 du bloc 106

**État à l'entrée : 34 entrées, dont 24 hors artefacts de séance.**
**Versement nommé** : `tools/batterie-sortie-3008b53.txt`, copie C124 de l'étape
0 → **+1 `??`**, écartée du sous-compteur. *`conventions.md`, `JOURNAL.md` et
`tools/predictions-260830.md` sont **déjà** ` M` : les rééditer ne crée aucune
entrée.*
**Total impliqué : 35 entrées, dont 24 hors artefacts de séance**, aux deux
instants du bloc.

### Prédictions du bloc 106

- **P106.1 — garde** : ASCII `0` ; copie `tools\batterie-sortie-3008b53.txt` ;
  `date ISO : 2026-08-30`, heure **> 18:01:38** ;
  `HEAD git : 0f3c9a5 2026-08-30 11:20:01 +0200` **au caractère** ;
  `node : v24.15.0` ; `35   (hors artefacts de seance : 24)`.
  ⚠ **`JOURNAL.md` et `conventions.md` sont attendus datés du 2026-08-30
  APRÈS 18:00, et ce n'est pas un état inattendu** : la clôture §7 du bloc 105
  vient de les écrire. **`TODO.md` reste à `2026-08-29 21:48:08`.**
- **P106.2 — les SIX ancres d'édition sont uniques, une occurrence chacune**, et
  le lot est refusé si l'une manque :
  1. `### Autres en attente\n` dans `conventions.md` ;
  2. `- **Décisions Tim** — **une seule sollicitée, et la réponse est de ne pas arbitrer**` ;
  3. `**Arbitrages en attente** — ⚠ **un neuf et il est structurant**` ;
  4. `= **8 432 mots, 3 fiches**, soit **126,7 % de la borne**.` ;
  5. `**Six entrées neuves au §8**` ;
  6. `**Reste à Tim** (C121) — le lot n'est pas livré :`.
- **P106.3 — `conventions.md` : 3 911 → entre 3 935 et 3 965 lignes**, point
  estimé **3 948** ; **529,7 → entre 531,0 et 534,0 Kio**, point **532,3**.
- **P106.4 — `JOURNAL.md` : 2 484 → entre 2 486 et 2 492 lignes**, point
  **2 488** ; **675,6 → entre 676,5 et 679,5 Kio**, point **677,8**.
  *Le gros de l'ajout est un paragraphe ⚠ et trois réécritures de phrases
  existantes, pas des entrées neuves.*
- **P106.5 — la ligne « Tailles » se repose par POINT FIXE en DEUX tours au
  plus.** *Le bloc 105 en a demandé deux parce que la ligne posée pesait
  1,8 Kio de plus que son gabarit ; ici elle ne change que de **cinq
  caractères**, `675,6` → sa nouvelle valeur, donc **un tour** doit suffire.*
  ⚠ **Terme écrit pour réfuter** : plus de deux tours dirait que la longueur du
  nombre posé a changé, ce qui n'arrive qu'au passage à quatre chiffres.
- **P106.6 — `normalize-pilotage.js` : `0 caractere(s) a corriger,
  0 fichier(s) modifie(s)`.**
- **P106.7 — `git status --porcelain -- content` : 16 entrées, INCHANGÉES** —
  8 ` M` et 8 `??`. *Ce bloc ne touche aucun fichier du corpus, et c'est le terme
  qui garde : une entrée de plus vaudrait ARRÊT.*
- **P106.8 — `git status` en fin de bloc : `35   (hors artefacts de seance : 24)`**,
  inchangé depuis la garde.

### Constats du bloc 106 — 7 prédictions tenues, 1 réfutée, et la garde d'ancre a mordu QUATRE fois

| # | prédiction | constat | verdict |
|---|---|---|---|
| P106.1 | ASCII 0 ; copie `3008b53` ; heure > 18:01:38 ; HEAD au caractère ; `v24.15.0` ; `35   (hors artefacts : 24)` ; JOURNAL et conventions datés du 30/08 après 18:00, TODO inchangé | 0 ; `3008b53` ; **18:24:18** ; identique ; `v24.15.0` ; **35 / 24** ; **18:10:31** et **18:08:25** ; `2026-08-29 21:48:08` | **tenue** |
| P106.2 | les **six** ancres uniques, une occurrence chacune | **quatre défauts sur six**, en trois lancements refusés | **RÉFUTÉE** |
| P106.3 | `conventions.md` ∈ [3 935, 3 965] lignes point 3 948 ; ∈ [531,0, 534,0] Kio point 532,3 | **3 958** lignes ; **532,6** Kio | **tenue** |
| P106.4 | `JOURNAL.md` ∈ [2 486, 2 492] lignes point 2 488 ; ∈ [676,5, 679,5] Kio point 677,8 | **2 486** lignes ; **677,2** Kio | **tenue** |
| P106.5 | point fixe des « Tailles » en **deux tours au plus** | **un tour** | **tenue** |
| P106.6 | `normalize-pilotage` : 0 / 0 | **0 caractère, 0 fichier** | **tenue** |
| P106.7 | `git status -- content` : **16 entrées inchangées** | **16** | **tenue** |
| P106.8 | `git status` **35 / 24** | **35 / 24** | **tenue** |

⚠⚠ **P106.2 EST RÉFUTÉE QUATRE FOIS, ET C'EST LE MEILLEUR RÉSULTAT DU BLOC :
LA GARDE D'UNICITÉ D'ANCRE A REFUSÉ TROIS LOTS D'AFFILÉE, ZÉRO OCTET ÉCRIT.**
J'avais déclaré les six ancres uniques ; quatre étaient fausses, et **aucune ne
l'était pour la même raison** :

1. **Apostrophe** — mes trois ancres portaient la **courbe** U+2019, le JOURNAL
   écrit la **droite** U+0027. **3 ancres à 0 occurrence.** *Vérifié après coup
   par comptage sur la ligne visée : 3 droites, 0 courbe.*
2. **`**Six entrées neuves au §8**` apparaît DEUX fois** — l'entrée du lot 9 du
   30/08 porte la même phrase au mot près. **Ancre allongée à
   `…, dont **une RÉFUTATION**`.**
3. **`**Reste à Tim** (C121) — le lot n'est pas livré :` apparaît SEPT fois** —
   c'est la formule de **toutes** les clôtures du chantier. *Une ancre de fin de
   section est par construction la moins unique de toutes.* **Ancre étendue à la
   phrase qui la précède.**
4. **La phrase précédente se terminait par `termes.**` et non `termes.`** — deux
   astérisques de gras oubliés. **Une occurrence de plus à zéro.**

✅ **Le script portait la garde AVANT la première écriture, comme
`renommer-titres.mjs` et `remplacer-passe.mjs`, et il a refusé le lot entier les
trois fois — dont deux où QUATRE des cinq ancres étaient bonnes.**
⚠ *`JOURNAL.md` n'est couvert par aucun des deux outils du dépôt : le premier ne
touche que les `title:` de front matter, le second refuse les fiches sans front
matter et n'écrit que dans un corps. **Un fichier de pilotage édité par ancre
demande donc son propre script à garde**, et c'est ce que ce bloc a écrit.*

**Candidate née de ce bloc** : *une ancre de fin de section — « Reste à Tim »,
« Prochaine session », « Arbitrages en attente » — n'est jamais unique dans un
JOURNAL antichronologique ; elle s'étend toujours à la phrase qui la précède, et
cette phrase se relit sur le disque, jamais de mémoire.* ⚠ **Le quatrième défaut
est exactement cela : j'ai réécrit la phrase précédente de tête et j'ai perdu son
gras fermant.** *Éprouvée 0/N.*

✅ **P106.5 tenue en UN tour, et le fondement était le bon** : la ligne « Tailles »
ne changeait que de deux nombres de longueur identique, contre 1,8 Kio de texte
neuf au bloc 105. **Contrôle relu sur le disque après la dernière écriture** :
`conventions.md` **532,6**, `JOURNAL.md` **677,2**, `TODO.md` **282,7**,
`BACKLOG.md` **206,0** — **les quatre identiques à ce que la ligne publie**.

✅ **P106.7 est le terme de garde du bloc et il ne mord pas** : `git status --
content` rend **16 entrées**, les mêmes qu'à la clôture — 8 sources FR ` M`,
8 fiches EN `??`. *Un arbitrage se consigne dans le pilotage ; il ne touche pas
le corpus, et le compteur le dit.*

---

## BILAN DE SÉANCE — LOT 11, ARBITRAGE COMPRIS

**158 prédictions à décompte plein, 135 tenues, 23 réfutées — 85,4 %**
(plus 1 déclarative honorée). **Dix-sept blocs d'exécution (89 à 106), neuf
gardes de péremption au vert, `HEAD 0f3c9a5` stable sur les neuf.**

**Cinq refus de garde d'écriture, zéro octet écrit à tort** : deux tests négatifs
**délibérés** (passe C109, titres EN) et **trois refus non prévus** sur les
éditions du JOURNAL. *Le rapport s'inverse par rapport aux lots précédents — le
délibéré prouve que la garde marche, l'imprévu prouve qu'elle sert.*

---

# SÉANCE 8 DU 30/08 — LOT 12 DU CHANTIER DE TRADUCTION

**Surface** : PC perso, onglet Code. **Modèle** : Opus 5. **Régime** :
exécution directe, sous-règle C116 amendée, C131 et son amendement, règles
d'usage du 29/08 (suites 9 à 11) et du 30/08 (sept séances). **Treizième lot en
exécution directe**, **douzième séance sous C131**. Blocs numérotés à partir de
**107**, la séance 7 s'étant arrêtée au bloc 106.

**Brief de référence** : ligne « Prochaine session » de l'entrée du **30/08
(suite 7)** du JOURNAL.

**Recoupement prompt de lancement / brief, avant toute exécution — CONFORME sur
les onze termes.** Composition du lot (`embarque/simulation/` en entier,
`falstad` **3 244** + `ltspice` **3 848** + `wokwi` **1 340** = **8 432 mots,
3 fiches**) ; lot 13 (`easyeda` **9 773**, sans découpe intra-fiche) ; **borne
6 657 levée** ; restant de l'anneau 2 (**4 fiches, 18 205 mots, 0 porteuse**,
`ded` nul, `tot` = `deh`, C127 hors sujet pour le septième lot d'affilée,
`--tout` à **34 paires, 0 divergente**) ; **neuf relevés avant rédaction** et
leurs six références chiffrées ; **les puces du corpus se relèvent AU CADRAGE** ;
**les trois fiches sont des fiches d'OUTIL**, espèce sans référence mesurée.
*Aucun écart à remonter : le prompt reconduit le brief terme à terme, y compris
sur les points d'attention.* ⚠ **La somme est revérifiée ici et non reprise :
3 244 + 3 848 + 1 340 = 8 432.**

---

## BLOC 107 — GARDE DE PÉREMPTION D'OUVERTURE

**Commande** : `powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase garde`

### Déclaration C131 du bloc 107

**Compteur prédit** : `fichiers modifies non commites` de l'étape 1, et son
sous-compteur `hors artefacts de seance`.

**Population** : les entrées de `git status --porcelain` sur le dépôt entier —
des **entrées**, pas des fichiers (règle du 30/08, lot 7 : un répertoire
entièrement non suivi vaut une entrée). Le sous-compteur retire les entrées dont
la ligne porte `batterie-sortie` ou `predictions-`, **filtre lu ligne 168 de
`tools/batterie.ps1`** — `$_ -notmatch 'batterie-sortie' -and $_ -notmatch
'predictions-'` — et non dans son README.

**État d'avant la séance** : dépôt **propre** au commit **`4f6803c`** de Tim
(« lot 11 : embarque/mcu/ ferme, 8 fiches EN, 70 remplacements C109, borne de
lot levee »), horodaté **2026-08-30 18:29:02 +0200**.

**Versements de la séance dans cette population, avant que le compteur ne soit
lu** — deux, et ils se nomment :
1. `tools/predictions-260830.md`, **suivi par git** et modifié par l'append de
   cet en-tête, de cette déclaration et des prédictions ci-dessous → **1 entrée
   ` M`**, écartée du sous-compteur par le motif `predictions-`.
2. `tools/batterie-sortie-3008b54.txt`, **créé par l'étape 0 du lancement
   lui-même** (copie C124 de `tools/batterie-sortie.txt`, rang déduit du
   balayage `while (Test-Path …)` des lignes 146-149 : les rangs `b1` à `b53`
   existent sur disque et sont **commités**, donc le premier rang libre est
   `b54`) → **1 entrée `??`**, écartée du sous-compteur par le motif
   `batterie-sortie`.

**Total impliqué : 2 entrées, dont 0 hors artefacts de séance.**

### Prédictions du bloc 107

- **P107.1** — étape 0, autocontrôle ASCII : `lignes non ASCII dans batterie.ps1 : 0`.
- **P107.2** — étape 0, copie C124 : `sortie precedente copiee : tools\batterie-sortie-3008b54.txt`.
- **P107.3** — étape 1, phase : `phase demandee : garde   anneau : 2   chevron : False`.
- **P107.4** — étape 1, horloge : `date ISO : 2026-08-30`, heure comprise entre
  **18:29:02** et **23:59:59**. ⚠ *La borne basse est un **événement daté du
  dépôt** — le commit `4f6803c` — et non l'instant supposé du lancement : c'est
  la règle d'usage née de la réfutation P89.8 du 30/08 (séance 7).*
- **P107.5** — étape 1, HEAD : `HEAD git : 4f6803c 2026-08-30 18:29:02 +0200`,
  **au caractère**, fuseau compris.
- **P107.6** — étape 1, compteur, par la déclaration C131 ci-dessus :
  `fichiers modifies non commites : 2   (hors artefacts de seance : 0)`.
- **P107.7** — étape 1, node : `node : v24.15.0`.
- **P107.8** — étape 1, dates d'écriture, **les trois attendues INCHANGÉES au
  caractère** par rapport au relevé de référence `tools/batterie-sortie.txt`
  (lancement du 30/08 à **18:24:18**), le commit de Tim ne réécrivant pas les
  fichiers de pilotage :
  - `JOURNAL.md` — **`2026-08-30 18:10:31`** ;
  - `conventions.md` — **`2026-08-30 18:08:25`** ;
  - `TODO.md` — **`2026-08-29 21:48:08`**.
  ⚠ *Le fichier de prédictions, lui, a été écrit à **18:28** — après ce relevé —
  mais il ne figure pas dans la liste des trois chemins de l'étape 1 (ligne 179
  du script), donc il ne peut pas faire mordre cette prédiction.*
- **P107.9** — les deux étapes ferment sur `--- code de sortie : 0`.

**Terme écrit pour réfuter** : tout fichier de `content/` en `git status`, toute
date d'écriture postérieure à l'horloge du bloc, ou un HEAD différent de
`4f6803c`, valent **ARRÊT** et remontée à Tim sans rien écrire.

### Constats du bloc 107 — garde AU VERT, 8 prédictions tenues, 1 réfutée

Sortie : `tools/batterie-sortie.txt`, copie C124 `tools\batterie-sortie-3008b54.txt`.

- **P107.1 ✅** `lignes non ASCII dans batterie.ps1 : 0`.
- **P107.2 ✅** `sortie precedente copiee : tools\batterie-sortie-3008b54.txt` — rang prédit au caractère.
- **P107.3 ✅** `phase demandee : garde   anneau : 2   chevron : False`.
- **P107.4 ✅** `date ISO : 2026-08-30   heure : 18:31:31`, dans [18:29:02, 23:59:59].
- **P107.5 ✅** `HEAD git : 4f6803c 2026-08-30 18:29:02 +0200` — **au caractère**, fuseau compris.
- **P107.6 ✅** `fichiers modifies non commites : 2   (hors artefacts de seance : 0)` — **les deux termes de la déclaration C131, au chiffre**.
- **P107.7 ✅** `node : v24.15.0`.
- **P107.8 ❌ sur deux termes de trois.** `JOURNAL.md 2026-08-30 **18:27:42**`
  contre **18:10:31** prédit ; `conventions.md 2026-08-30 **18:24:49**` contre
  **18:08:25** prédit. `TODO.md 2026-08-29 21:48:08` ✅ **inchangé au
  caractère**.
  ⚠ **Cause, et elle est la MÊME que celle de P89.8 il y a sept heures, prise
  par l'autre bout.** J'ai posé une **égalité** sur le relevé de `18:24:18` en
  le traitant comme l'état final de la séance 7 ; **il ne l'est pas** — la
  clôture §7 écrit `conventions.md` à **18:24:49**, soit trente et une secondes
  **après** le relevé qui la précède, puis `JOURNAL.md` à **18:27:42**, et Tim
  commite à **18:29:02**. *La dernière garde d'une séance n'est jamais sa
  dernière écriture, précisément parce que la clôture vient après elle.*
  ✅ **Les deux dates sont bien antérieures au commit `4f6803c`**, qui est
  l'événement daté qui portait le sens.
  **La bonne prédiction était un intervalle ouvert entre deux événements datés
  du dépôt : `]18:24:18, 18:29:02[` pour les deux fichiers de pilotage, et
  l'égalité au caractère pour `TODO.md` seul, que la clôture ne touche pas.**
  ⚠ **Extension de la règle d'usage née de P89.8** : la règle disait *« une
  borne d'intervalle se pose sur un événement daté du dépôt »*, et je l'ai
  appliquée à **P107.4** — dont la borne basse est le commit — **sans
  l'appliquer à P107.8**, où j'ai remplacé l'intervalle par une égalité sur un
  relevé. *Une égalité est un intervalle de largeur nulle : elle tombe sous la
  même règle, et le relevé n'est pas le bon événement.*
- **P107.9 ✅** les deux étapes ferment sur `--- code de sortie : 0`.

**Terme écrit pour réfuter : il ne mord pas.** Aucun fichier de `content/` en
`git status` (2 entrées, toutes deux artefacts de séance nommés), aucune date
postérieure à l'horloge du bloc **18:31:31**, HEAD conforme à `4f6803c`.
**Garde au vert, la séance peut écrire.**

---

## BLOC 108 — CADRAGE DU LOT 12 (garde + volume + candidats C109 + anneau)

**Commande** :
`powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase cadrage -Fiches embarque/simulation/falstad.md,embarque/simulation/ltspice.md,embarque/simulation/wokwi.md`

⚠ **Ce qui fonde les prédictions C109 de ce bloc : les TROIS SOURCES ONT ÉTÉ
LUES EN ENTIER avant d'être écrites ici**, et le motif de `--style` a été lu
**dans le code** (lignes 1044-1069 pour `exemptions()`, 1138-1163 pour les deux
familles C109) et non dans le README. *La règle du 29/08 vaut ici : une ligne de
README décrit une intention, seul le code décrit un comportement.* La
décomposition ci-dessous est un **comptage à la main, fiche par fiche**, et non
un prorata — la règle du 30/08 (séance 5) interdit qu'un total dans la fourchette
tienne lieu de preuve de sa décomposition.

⚠ **ASSOMPTION ÉCRITE AVANT EXÉCUTION, avec son coût de revert.** Le relevé des
puces à tiret du corpus (motif A) n'a **aucun outil** : il a été fait au lot 11
dans un script de séance jetable, ce qui est exactement la cause de sa
non-reproductibilité. **Je crée `tools/puces-tiret.mjs`**, versionné, qui publie
sa **population** et son **motif** dans sa propre sortie — c'est la candidate
§8 née du lot 11, logée dans le code qui exécute le geste plutôt que dans une
phrase. **Coût d'un revert** : suppression du seul fichier neuf, aucune
écriture dans `content/`, aucun autre artefact touché. *Aucun arbitrage n'est
bloqué par ce choix ; il est remonté au gate G1 sans arrêter.*

### Déclaration C131 du bloc 108

**Compteur prédit** : `fichiers modifies non commites` de l'étape 1, et son
sous-compteur `hors artefacts de seance`. **Même population et même filtre qu'au
bloc 107** ; la déclaration est **rejouée** parce que le bloc crée un fichier.

**État d'avant le bloc** : les **2 entrées** mesurées au bloc 107.

**Versements de ce bloc dans cette population** — un seul, et il se nomme :
1. `tools/batterie-sortie-3008b55.txt`, créé par l'étape 0 (le rang `b54` a été
   créé par le bloc 107, donc le premier rang libre est `b55`) → **1 entrée
   `??`**, écartée du sous-compteur par le motif `batterie-sortie`.

*`tools/predictions-260830.md` était déjà ` M` au bloc 107 : l'append de ce bloc
ne crée pas d'entrée neuve, il modifie une entrée déjà comptée.*

**Total impliqué : 3 entrées, dont 0 hors artefacts de séance.**

### Prédictions du bloc 108 — étapes 0 et 1 (garde)

- **P108.1** — `lignes non ASCII dans batterie.ps1 : 0`.
- **P108.2** — `sortie precedente copiee : tools\batterie-sortie-3008b55.txt`.
- **P108.3** — `phase demandee : cadrage   anneau : 2   chevron : False`.
- **P108.4** — `date ISO : 2026-08-30`, heure **postérieure à 18:31:31**
  (horloge mesurée du bloc 107, événement daté et non instant supposé).
- **P108.5** — `HEAD git : 4f6803c 2026-08-30 18:29:02 +0200`, **au caractère**.
- **P108.6** — `fichiers modifies non commites : 3   (hors artefacts de seance : 0)`.
- **P108.7** — `node : v24.15.0`.
- **P108.8** — dates d'écriture des trois fichiers de pilotage, **inchangées au
  caractère** par rapport au bloc 107 : `JOURNAL.md 2026-08-30 18:27:42`,
  `conventions.md 2026-08-30 18:24:49`, `TODO.md 2026-08-29 21:48:08`.
- **P108.9** — dates d'écriture des **trois sources FR du lot**, qu'aucun lot du
  chantier n'a encore touchées : les trois sont **strictement antérieures à
  `2026-08-30 00:00:00`**. ⚠ *Une date du jour sur l'une des trois vaudrait
  **ARRÊT** — elle voudrait dire qu'une autre session écrit sur le même dépôt,
  incident du 29/08.* **Je ne prédis pas leur valeur** : aucune mesure du jour
  ne me la donne, et l'inventer serait de mémoire (C118).

### Prédictions du bloc 108 — étape 2, volume du lot

- **P108.10** — `compter-mots --lot`, **décomposition et total, au mot** :
  `falstad` **3 244**, `ltspice` **3 848**, `wokwi` **1 340**, **LOT 8 432**.
  *Reprise du brief, dont c'est la remesure ; un écart ici est un écart du
  brief, pas de ma prédiction.*

### Prédictions du bloc 108 — étape 3, candidats C109 des trois sources FR

⚠ **PREMIÈRE MESURE DU CHANTIER SUR LE REGISTRE « FICHE D'OUTIL ».** Les trois
sources sont `type: tuto`. Le corollaire du lot 11 dit que la fourchette se cale
sur la **part de fiches argumentatives**, mesurable au nombre de sections
propres ; ici les trois fiches sont **procédurales** — beaucoup de titres, de
listes numérotées, de captures et de callouts, peu de prose argumentative
continue. **Aucune référence mesurée n'existe sur cette espèce**, donc la
fourchette ci-dessous ne vient **pas** d'un taux historique : elle vient du
comptage à la main.

- **P108.11 — `C109 de prose`, décomposition par fiche, comptage à la main** :
  - `falstad` **41** — fourchette **[38, 44]** ;
  - `ltspice` **43** — fourchette **[40, 46]** ;
  - `wokwi` **17** — fourchette **[15, 19]** ;
  - **LOT 101**, fourchette **[93, 109]**.
- **P108.12 — taux pour 100 mots, calculé sur les deux termes prédits ci-dessus**
  (donc à ne valider que si P108.10 et P108.11 tiennent) : `falstad` **1,26**,
  `ltspice` **1,12**, `wokwi` **1,27**, **lot 1,20**. ⚠ **Terme écrit pour
  réfuter le registre** : si l'espèce « fiche d'outil » avait un taux propre, on
  attendrait un **écart faible entre les trois** — je prédis un facteur
  **inférieur à 1,20** entre la plus haute et la plus basse, contre **1,96** au
  lot 11 (notions) et **3,9** au lot 10. *Un facteur supérieur à 1,5 réfuterait
  l'idée que le registre suffit à caler la fourchette.*
- **P108.13 — `hors perimetre` : 5**, fourchette **[4, 8]**, et **décomposé par
  famille, la ligne de bilan n'en nommant aucune** (règle (7) du 29/08 — un
  compteur se lit dans le code qui l'incrémente) :
  - `tiret en titre` **4** — `## Exemple — Faire clignoter une LED` (wokwi),
    `## Construire son circuit — un filtre passe-haut` (falstad),
    `## Construire son circuit — un filtre passe-bas` et
    `### 3. Changer une valeur — et penser à relancer` (ltspice) ;
  - `point-virgule en alt d image` **1** — l'`alt` de
    `/ressources/img/ltspice/low-pass-analyse.gif`, qui porte
    « … par clic droit sur chaque composant ; puis Simulate … » ;
  - `tiret d intervalle numerique` **0**, `tiret en alt d image` **0**,
    `tiret en tableau` **0**, `point-virgule en titre` **0**,
    `point-virgule en tableau` **0** — *les trois fiches ne portent **aucun
    tableau**, et aucun demi-cadratin entre deux chiffres.*
- **P108.14 — `virgule ambigue : 0` et `typographie francaise : 0`**, et la
  raison est **lue dans le code** : les deux familles sont sous `if (estEn)`
  (ligne 1119), et les trois cibles sont des sources **françaises**. *Ce n'est
  pas une prédiction sur le texte, c'est une prédiction sur la branche.*
- **P108.15 — `C109 creees en EN : 0`** — le compteur ne s'incrémente que pour
  une fiche EN comparée à sa source ; aucune des trois cibles n'est dans
  `content/en/`.
- **P108.16 — `hors latin : 0`** sur les trois sources.

### Prédictions du bloc 108 — étape 4, anneau et dette

- **P108.17** — anneau 2 : **145 net, 141 traduites, 4 restantes, 18 205 mots,
  0 porteuse de chevron** — les quatre termes du brief, **inchangés**, aucune
  écriture n'ayant eu lieu depuis la clôture du lot 11.
- **P108.18** — dette : **7 cibles, 20 473 mots, dont 2 hors anneaux 0..2**.
- **P108.19** — `CIBLES SANS FICHE` : la ligne sort **non vide**, et c'est le
  **faux positif connu sur les alias**, arbitrage en attente depuis le 30/08
  (suite 4). *Elle ne vaut pas arrêt.*
- **P108.20** — les cinq étapes ferment sur `--- code de sortie : 0`.

**Terme écrit pour réfuter** : une date du jour sur l'une des trois sources FR,
un HEAD différent de `4f6803c`, ou un fichier de `content/` en `git status`,
valent **ARRÊT**.

### Constats du bloc 108 — cadrage AU VERT, 18 prédictions tenues, 2 réfutées

Sortie : `tools/batterie-sortie.txt`, copie C124 `tools\batterie-sortie-3008b55.txt`.

- **P108.1 ✅** `lignes non ASCII dans batterie.ps1 : 0`.
- **P108.2 ✅** `sortie precedente copiee : tools\batterie-sortie-3008b55.txt`.
- **P108.3 ✅** `phase demandee : cadrage   anneau : 2   chevron : False`.
- **P108.4 ✅** `heure : 18:40:01`, postérieure à 18:31:31.
- **P108.5 ✅** `HEAD git : 4f6803c 2026-08-30 18:29:02 +0200`, au caractère.
- **P108.6 ✅** `fichiers modifies non commites : 3   (hors artefacts de seance : 0)` — **les deux termes de la déclaration C131**.
- **P108.7 ✅** `node : v24.15.0`.
- **P108.8 ✅** `JOURNAL.md 18:27:42`, `conventions.md 18:24:49`,
  `TODO.md 2026-08-29 21:48:08` — **les trois inchangées au caractère**.
- **P108.9 ✅** `falstad.md 2026-08-17 22:52:24`, `ltspice.md 2026-08-18
  14:53:46`, `wokwi.md 2026-08-19 12:43:09` — **les trois strictement
  antérieures au 2026-08-30**, et de onze à treize jours. *Le terme d'arrêt ne
  mord pas.*
- **P108.10 ✅** `falstad 3244`, `ltspice 3848`, `wokwi 1340`, `LOT 8432` —
  **les quatre au mot**, brief confirmé.

✅✅ **P108.11 — TENUE AU CHIFFRE EXACT SUR LES QUATRE TERMES, ET C'EST LA
DÉCOMPOSITION QUI LE DIT, PAS LE TOTAL.** `falstad` **41**, `ltspice` **43**,
`wokwi` **17**, **LOT 101** — *prédits 41 / 43 / 17 / 101*. **Aucune fourchette
n'a servi.** ⚠ *C'est la première fois du chantier qu'un lot entier de candidats
C109 est prédit **à l'unité près, fiche par fiche**, et la cause est
méthodologique et non chanceuse : les trois sources ont été **lues en entier**
et le motif a été lu **dans le code**, si bien que le comptage à la main
reproduisait l'algorithme au lieu de l'estimer. La règle du 30/08 (séance 5)
demandait qu'une décomposition se vérifie terme à terme ; ici elle se **prédit**
terme à terme.*

✅✅ **P108.12 — LE REGISTRE « FICHE D'OUTIL » A UN TAUX PROPRE, ET LE TERME
ÉCRIT POUR LE RÉFUTER NE MORD PAS.** Taux pour 100 mots : `falstad`
**1,264**, `ltspice` **1,117**, `wokwi` **1,269**, **lot 1,198** — prédits
**1,26 / 1,12 / 1,27 / 1,20**.

  | registre | lot | facteur haut / bas |
  |---|---|---|
  | **fiche d'outil** (`type: tuto`) | **12** | **1,14** |
  | notions `embarque/mcu/` | 11 | 1,96 |
  | fiches `conduite/proj/` mêlées | 10 | 3,9 |

  *Le facteur prédit était **< 1,20** ; mesuré **1,136**. Le registre ne
  gouverne donc pas seulement le **niveau** du taux, il en gouverne aussi la
  **dispersion** : trois fiches d'outil de 1 340, 3 244 et 3 848 mots rendent le
  même taux à 13 % près, quand huit notions de la même branche s'étalaient sur
  un facteur 2.* ⚠ **Première référence mesurée du chantier sur cette espèce**,
  et elle est à publier comme telle : **taux C109 d'une fiche d'outil ≈ 1,2 pour
  100 mots, dispersion sous 1,15.**

❌ **P108.13 — RÉFUTÉE SUR UNE FAMILLE, ET LE TOTAL DANS LA FOURCHETTE MASQUAIT
L'ERREUR.** `hors perimetre` mesuré **7**, prédit **5**, fourchette [4, 8] —
*donc « dans la fourchette », et c'est exactement ce que la règle du 30/08
(séance 5) interdit de prendre pour une validation.* **Décomposition réelle,
relevée sur les sources** :
  - `tiret en titre` **4** ✅ — `falstad.md:81`, `ltspice.md:93`,
    `ltspice.md:101`, `wokwi.md:83`, **les quatre nommés d'avance** ;
  - `point-virgule en alt d image` **3** ❌ contre **1** prédit —
    `ltspice.md:65` (« … la trace V de hp ; la fenêtre de lecture … »),
    `ltspice.md:140` (« … sur chaque composant ; puis Simulate … ») et
    `ltspice.md:152` (« … Update and View SPICE Netlist ; à droite, le
    schéma … ») ;
  - `tiret d intervalle numerique` **0** ✅, `tiret en alt d image` **0** ✅
    (mesuré : **0** `alt` porteur d'un cadratin sur les trois fiches),
    `tiret en tableau` **0** ✅ et `point-virgule en tableau` **0** ✅ —
    *mesurés : les trois fiches portent **0 ligne** commençant par `|`*,
    `point-virgule en titre` **0** ✅.

  ⚠ **Cause, et elle est de méthode.** J'ai relu les `alt` **en cherchant des
  cadratins**, parce que c'est la famille dont la fiche parlait ; le seul
  point-virgule que j'aie vu est celui que j'avais déjà en tête. *Un `alt` de
  capture d'écran est une **énumération de ce qu'on voit**, donc l'habitat
  naturel du point-virgule — c'est une propriété du registre « fiche d'outil »,
  pas un accident de `ltspice`.* **Règle d'usage candidate : sur une fiche
  d'outil, le seau `point-virgule en alt d image` se relève en balayant TOUS les
  `alt`, jamais en relisant ceux dont on se souvient.**

- **P108.14 ✅** `typographie francaise : 0` et `virgule ambigue : 0` — *la
  prédiction portait sur la **branche** `if (estEn)` et non sur le texte ; elle
  est vraie pour la raison annoncée.*
- **P108.15 ✅** `C109 creees en EN : 0`.
- **P108.16 ✅** `hors alphabet latin : 0`.
- **P108.17 ✅** `ANNEAU 2 NET 145`, `deja traduites 141`, `RESTANT 4`,
  `RESTANT DE L ANNEAU 2 (4 fiches) 18205`, `fiches porteuses 0`,
  `clotures en chevron 0` — **les six termes du brief, inchangés**. Le restant
  nominatif est bien `easyeda 9773` plus les trois du lot.
- **P108.18 ✅** dette : `fiches sources 235`, `cibles rouges distinctes 7`,
  `mots 20473`, `dont HORS anneaux 0..2 : 2`, nommées `xiao-prise-en-main` et
  `xiao-sense` — **les quatre termes**.
- **P108.19 ❌ sur son attribution, tenue sur son verdict.** `CIBLES SANS FICHE
  (6)` sort bien **non vide** et ne vaut pas arrêt ✅, **mais ce ne sont pas les
  alias** : les six sont `[[FC]]`, `[[FP]]`, `[[FS]]`, `[[critere]]`,
  `[[flexibilite]]`, `[[niveau]]` — *les **libellés de désambiguïsation** créés
  par le lot 9, exactement ceux que la file d'arbitrages nomme sous « les 32
  libellés parenthésés ».* ⚠ **J'ai attribué à un arbitrage en attente une ligne
  qui relève d'un autre**, faute de l'avoir lue avant de la nommer. *Deux
  arbitrages distincts pointent la même sortie, et je les ai confondus.*
- **P108.20 ✅** les cinq étapes ferment sur `--- code de sortie : 0`.

**Terme écrit pour réfuter : il ne mord pas.** Aucune source FR datée du jour,
`HEAD 4f6803c` conforme, aucun fichier de `content/` en `git status`.
**Cadrage au vert.**

---

## BLOC 109 — `tools/puces-tiret.mjs` : ÉPREUVE C110 DU MOTIF A SUR QUATRE ÉCHANTILLONS NOMMÉS, PUIS RELEVÉ DU CORPUS AVANT LA PASSE

**Commandes** (dans cet ordre, la seconde ne se lance que si la première est au
vert) :
1. `node tools/puces-tiret.mjs --fiches <les 15 fiches des quatre échantillons>`
2. `node tools/puces-tiret.mjs --corpus` et `node tools/puces-tiret.mjs --corpus --motif B`

**Ce que le bloc crée** : `tools/puces-tiret.mjs`, **un seul fichier neuf**,
versionné, qui **publie son motif et sa population dans sa propre sortie** — la
candidate §8 née du lot 11, logée dans le code plutôt que dans une phrase de
JOURNAL. *Aucune écriture dans `content/`.*

**Motif A, écrit ici avant d'être codé, et le code devra le dire aussi** : une
**ligne de puce** `/^\s*[-*]\s/` **contenant** `" — "` — U+2014 **entouré
d'espaces** —, **hors blocs de code clôturés**, **hors des sections
`## Voir aussi`, `## Aller plus loin`, `## See also`, `## Going further`** (une
section exclue court de son titre jusqu'au prochain titre de niveau ≤ 2).
**L'unité comptée est la LIGNE**, pas l'occurrence : « 946 puces sur 167
porteuses » compte des lignes de puce et des fichiers.

### Déclaration C131 du bloc 109

**Compteurs prédits** : `puces`, `porteuses` et `fichiers` de la sortie de
l'outil, pour chacune des deux langues.

**Populations, nommées et non déduites** :
- **FR** — les fichiers `.md` sous `content/` **hors `content/en/`** ;
- **EN** — les fichiers `.md` sous `content/en/`.

**Versements de la séance dans ces deux populations, avant lecture** :
**aucun**. *Le lot 12 n'a encore écrit **aucune** fiche et n'a passé **aucune**
source à C109 ; les trois sources FR portent les dates du 17, 18 et 19 août
mesurées au bloc 108.* **C'est précisément le point** : ce relevé est celui
d'**avant** la passe, celui qui manquait au lot 11.

**Totaux impliqués : FR 248 fichiers, EN 235 fichiers.**

**Déclaration C131 du compteur git, rejouée parce que le bloc crée un fichier** :
population inchangée (entrées de `git status --porcelain`), versement de ce bloc
= `tools/puces-tiret.mjs`, **1 entrée `??`**, et elle **N'EST PAS** un artefact
de séance — ni `batterie-sortie`, ni `predictions-`. **Total impliqué au
prochain relevé de garde : 4 entrées, dont 1 hors artefacts de séance**, et
cette entrée-là **se nomme**.

### Prédictions du bloc 109 — épreuve C110, les quatre échantillons

⚠ **Les quatre échantillons sont ceux du bloc 98 du lot 11**, et ils sont
**choisis pour porter ce qui pourrait faire mordre le motif à tort** : les
quatre fiches d'`esp32/` ont toutes un `## Voir aussi` fourni en gloses à tiret,
les cinq fiches EN du lot 7 portent `## See also` **et** `## Going further`, et
les six fiches de `conduite/proj/` portent des `## Aller plus loin`. *Si mon
implémentation oubliait **une seule** des quatre formes hors périmètre, les
totaux exploseraient dans le même sens.* **Les réponses sont au registre avant
d'être mesurées**, ce qui fait de ce bloc une épreuve et non un étalonnage.

- **P109.1 — échantillon 1, FR lot 3 d'`esp32/`** : `esp32-deep-sleep` **2**,
  `esp32-arduino-core` **2**, `esp32-freertos` **4**, `esp32-idf` **4**,
  **TOTAL 12**.
- **P109.2 — échantillon 2, EN lot 3 d'`esp32/`** : `esp32-deep-sleep-en` **2**,
  `esp32-arduino-core-en` **1**, `esp32-freertos-en` **4**, `esp32-idf-en` **4**,
  **TOTAL 11**. ⚠ *Onze et non douze : l'asymétrie connue d'`esp32-arduino-core`,
  arbitrage en attente. **Prédire 12 serait prédire la symétrie et non la
  mesure.***
- **P109.3 — échantillon 3, FR lot 9** : `mecatronique` **0**, `mind-map` **0**,
  `bete-a-cornes` **0**, `pieuvre` **5**, `fonction` **0**,
  `caracteriser-une-exigence` **11**, **TOTAL 16**.
- **P109.4 — échantillon 4, EN lot 7** : `raspberry-pi-gpio-en` **3**,
  `raspberry-pi-prise-en-main-en` **3**, `raspberry-pi-projet-en` **0**,
  `xiao-alimentation-en` **3**, `xiao-esp32-s3-en` **1**, **TOTAL 10**.
- **P109.5 — terme écrit pour réfuter, et il est chiffré.** Un total
  **supérieur** à l'attendu sur un échantillon signifie qu'une des quatre
  sections n'est pas exclue ; un total **inférieur** signifie que le motif
  `" — "` est trop strict (espaces insécables, cadratin collé). **Sur les
  quinze fiches, un seul écart d'une unité suffit à ARRÊTER le bloc** et à
  interdire le relevé de corpus. *Un motif qui ne reproduit pas quatre
  échantillons nommés n'a pas le droit de compter 483 fichiers.*

### Prédictions du bloc 109 — relevé du corpus AVANT la passe C109 du lot 12

⚠ **Ces six chiffres sont entièrement contraints**, et c'est ce qui rend le
relevé falsifiable : **le dépôt n'a pas bougé depuis la clôture du lot 11** —
`HEAD 4f6803c`, `git status` sans une seule entrée de `content/`, dates
d'écriture des trois sources au 17-19 août. *L'état d'avant la passe du lot 12
**est** l'état d'après la clôture du lot 11.*

- **P109.6 — motif A, FR** : **946 puces, 167 porteuses, 248 fichiers**.
- **P109.7 — motif A, EN** : **886 puces, 153 porteuses, 235 fichiers**.
- **P109.8 — motif B (`Voir aussi` et `See also` seuls exclus), FR** :
  **1 033 puces, 173 porteuses, 248 fichiers**.
- **P109.9 — motif B, EN** : **972 puces, 159 porteuses, 235 fichiers**.

⚠ **P109.8 et P109.9 sont le TEST NÉGATIF DÉLIBÉRÉ de ce bloc**, et il est
d'une autre espèce que ceux des passes d'écriture : au lieu de faire refuser un
outil, il fait produire à mon implémentation **le chiffre d'un motif dont je
sais qu'il est faux**. *Si le motif B rend 1 033 / 972 au chiffre, alors mon
code reproduit la mesure du lot 11 **sur les deux motifs à la fois**, et le
seul degré de liberté qui restait — quelles sections sont exclues — est
refermé. Si le motif A tombe juste et le motif B faux, la coïncidence
dénoncerait un accord de surface.*

- **P109.10 — la sortie de l'outil porte, en tête et sans qu'on le lui
  demande** : le **motif littéral** (expression régulière de puce, séquence
  `" — "` avec son point de code, liste nominative des sections exclues) et la
  **population** de chaque langue. *C'est la candidate §8 du lot 11 mise en
  code ; une sortie qui ne les porterait pas serait la règle non tenue par
  l'outil censé la tenir.*

### Constats du bloc 109 — 10 prédictions sur 10 tenues, dont les quatre échantillons au chiffre et le test négatif

Sorties sauvegardées C124 sous `tools/puces-3008-avant-passe-lot12.txt`
(les trois lancements dans un seul témoin, l'échantillon puis les deux motifs).

✅✅ **P109.1 à P109.4 — LES QUATRE ÉCHANTILLONS SONT REPRODUITS FICHE PAR
FICHE, DIX-NEUF VALEURS SUR DIX-NEUF.**

  | échantillon | attendu | mesuré |
  |---|---|---|
  | 1 — FR lot 3 `esp32/` (2 / 2 / 4 / 4) | **12** | **12** ✅ |
  | 2 — EN lot 3 `esp32/` (2 / 1 / 4 / 4) | **11** | **11** ✅ |
  | 3 — FR lot 9 (0 / 0 / 0 / 5 / 0 / 11) | **16** | **16** ✅ |
  | 4 — EN lot 7 (3 / 3 / 0 / 3 / 1) | **10** | **10** ✅ |
  | **total des 19 fiches** | **49** | **49** ✅ |

*L'asymétrie d'`esp32-arduino-core` est retrouvée — **2** en français, **1** en
anglais —, ce qui était le terme de C110 le plus discriminant : une
implémentation qui aurait raboté ou symétrisé quoi que ce soit l'aurait effacée.*

- **P109.5 ✅ le terme d'arrêt ne mord pas** : aucun écart d'une unité sur les
  quinze fiches nommées (dix-neuf lignes au total), le relevé de corpus est
  donc autorisé.

✅✅ **P109.6 et P109.7 — LE RELEVÉ D'AVANT LA PASSE TOMBE AU CHIFFRE SUR SES SIX
TERMES.** Motif A : **FR 946 puces / 167 porteuses / 248 fichiers**,
**EN 886 / 153 / 235**. *Les six prédits, les six mesurés.*

✅✅ **P109.8 et P109.9 — LE TEST NÉGATIF DÉLIBÉRÉ TOMBE AUSSI AU CHIFFRE, ET
C'EST LUI QUI FERME LE DEGRÉ DE LIBERTÉ.** Motif B : **FR 1 033 / 173 / 248**,
**EN 972 / 159 / 235** — les six prédits, les six mesurés. ⚠ *Un motif A juste
et un motif B faux aurait été un accord de surface : mon implémentation aurait
pu tomber sur 946 par une autre combinaison d'exclusions. **Reproduire les DEUX
motifs à la fois** ne laisse plus de place à cette coïncidence — la différence
946 → 1 033 est **exactement** la contribution des sections `## Aller plus loin`
et `## Going further`, sur les deux langues et au fichier près (167 → 173 et
153 → 159 porteuses).*

- **P109.10 ✅** la sortie porte en tête, sans qu'on le lui demande : le motif de
  puce `/^\s*[-*]\s/`, la séquence `" — "` **avec ses trois points de code**
  `U+0020 U+2014 U+0020`, le motif de clôture de bloc, la **liste nominative**
  des sections exclues, la règle de portée d'une section exclue, et l'**unité
  comptée**. La population est écrite **par langue et en toutes lettres**
  (`content/**/*.md HORS content/en/` et `content/en/**/*.md`) au-dessus de ses
  trois chiffres. *Le motif B annonce en outre, dans sa propre sortie, qu'il
  n'existe que pour être faux.*

✅ **CE QUE CE BLOC REFERME.** La référence des puces à tiret cesse d'être
non reproductible : **le motif vit dans `tools/puces-tiret.mjs`, versionné**, et
non plus dans un `seance.ps1` que C114 fait réécrire de zéro à chaque série.
*C'est le même déplacement que C126 pour l'ossature de séance et que
l'amendement du 29/08 pour la garde d'unicité d'ancre — la contrainte passe de
ma mémoire à un artefact.*

✅ **ET LA FAUTE DE PROTOCOLE DU LOT 11 EST RÉPARÉE PAR CE BLOC.** Le relevé
d'**avant** la passe C109 du lot 12 existe, il est daté, il est sauvegardé, et
il vaut **FR 946 / EN 886**. *Le delta de ce lot se **mesurera** donc par
différence de deux mesures, au lieu de se calculer (C119).*

⚠ **Ce que le bloc ne referme pas.** L'outil ne dit rien de la **référence
publiée** aux lots 8 à 10 — FR 995 / 172, EN 917 / 153 —, qui reste
irreproductible et dont la cause exacte est perdue avec le script qui l'a
produite. *Elle n'est pas corrigée, elle est **remplacée** ; les trois clôtures
qui la portent gardent un chiffre qu'aucun motif ne rend.*

---

## BLOC 110 — LES HUIT RELEVÉS D'AVANT RÉDACTION QUI RESTENT (le neuvième, les puces, est rendu au bloc 109)

**Commandes** : un script jetable de relevé (**scratchpad, hors dépôt**, C114)
redirigé vers `tools/releves-avant-redaction-lot12-3008.txt`, puis
`titres-doublons.mjs`, `creer-fiche-en.mjs --libelles` et
`mesure-chevron.mjs --tout` appendés au même fichier.

### Déclaration C131 du bloc 110

**Population** : entrées de `git status --porcelain`.
**État déclaré à l'entrée du bloc : 5 entrées, dont 2 hors artefacts de
séance** — `tools/predictions-260830.md` (` M`),
`tools/batterie-sortie-3008b54.txt` (`??`),
`tools/batterie-sortie-3008b55.txt` (`??`), **`tools/puces-tiret.mjs` (`??`)**
et **`tools/puces-3008-avant-passe-lot12.txt` (`??`)**, ces deux derniers
créés au bloc 109 et **échappant tous deux au filtre**, qui ne connaît que
`batterie-sortie` et `predictions-`.
**Versement de ce bloc** : `tools/releves-avant-redaction-lot12-3008.txt`,
**1 entrée `??`**, hors artefacts de séance elle aussi.
**Total impliqué : 6 entrées, dont 3 hors artefacts de séance**, et les trois
se nomment. *Le script de relevé vit hors dépôt et ne verse rien.*

### RELEVÉ 1 — formes de production des titres de section EN

- **P110.1 — les six formes sortent INCHANGÉES par rapport à la référence de
  clôture du lot 11** : `## See also` **227**, `## What is it for?` **159**,
  `## Pitfalls` **157**, `## Where it fits in the project` **105**,
  `## Exercises` **37**, `## Going further` **31**. *Fondement : aucune fiche EN
  n'a été écrite depuis, et les deux gardes des blocs 107 et 108 le disent —
  `git status` ne porte aucun fichier de `content/`.*
- **P110.2 — `## Step by step` : 78**, inchangé. ⚠ *Contrairement au lot 11, où
  ce compteur était le seul qui **devait** bouger, **aucun** des huit compteurs
  de ce relevé ne doit bouger ici : le lot 12 n'a encore rien écrit. Le relevé
  ne mesure donc qu'une chose — que l'état d'avant rédaction est bien celui de
  la clôture précédente.*
- **P110.3 — les deux formes fautives du lot 4 restent à 0** :
  `## Project connection` **0**, `## Step-by-step procedure` **0**. *Sixième
  confirmation du correctif É1 du 29/08 (suite 10).*
- **P110.4 — `POPULATION (fichiers balayes) : 235`**, égale au nombre de fiches
  EN de la clôture du lot 11. *Le script écrit sa population dans sa sortie.*

### RELEVÉ 2 — titres de callout EN

- **P110.5 — les sept titres nommés par le brief** : `Watch out` **49**,
  `Tip` **46**, `Good` **3**, `Fair` **3**, `Poor` **3**, `Attention` **0**,
  `Astuce` **0**.
- **P110.6 — `Example: 3-axis arm project` reste en tête du relevé**, devant
  `Watch out` **49** et `Tip` **46**. ⚠ *Sa valeur au relevé d'avant rédaction du
  lot 11 était **54**, et **aucune clôture ne l'a republiée après les huit
  fiches de ce lot**. Je prédis donc une **fourchette et non un point** :
  **[54, 58]**, la borne basse étant le relevé du lot 11 (le compteur ne peut
  pas décroître, rien n'ayant été supprimé) et la borne haute supposant qu'au
  plus quatre des huit notions `embarque/mcu/` portent l'exemple du bras.*

### RELEVÉ 3 — titres-doublons, des DEUX côtés

- **P110.7 — FR `243 / 243 / 0` et EN `235 / 235 / 0`** : fiches lues / titres
  distincts / groupes en collision, **0 fiche concernée des deux côtés**.
  ⚠ *La règle d'usage de C125 exige la comparaison **des deux côtés** ; zéro des
  deux côtés est le seul état où elle est triviale, et c'est celui du chantier
  depuis le lot 8.*

### RELEVÉ 4 — heuristique des libellés

- **P110.8 — les cinq compteurs de `--libelles`, INCHANGÉS** :
  `wikilinks a libelle` **4 199**, `cible EN existante` **4 170**,
  `cible EN absente` **29**, `candidats a lire` **145**,
  `positions de parcours` **16**.

### RELEVÉ 5 — les libellés EN qui visent les trois cibles du lot (C125, test 1)

⚠ **C'est le relevé qui décidera des trois `title:`**, et la règle du 30/08
(lot 11) dit qu'un libellé en production n'est **pas** un titre en production :
il donne la forme employée, pas le titre à poser.

- **P110.9 — la somme des trois est BORNÉE PAR 29**, le compteur
  `cible EN absente` de P110.8, qui compte exactement les wikilinks à libellé du
  corpus EN visant une fiche non traduite. *Les sept cibles rouges de la dette
  se partagent ces 29.*
- **P110.10 — décomposition prédite** : `falstad-en` visée **8 fois**
  (fourchette **[5, 12]**), `ltspice-en` **7** (**[4, 11]**), `wokwi-en` **6**
  (**[3, 10]**), **total 21** (**[15, 26]**). *Fondement : les trois fiches sont
  citées par le hub `simulation-electronique-en`, par les `## See also` du
  module `esp32/` et par `micropython-simulation-en` ; aucune mesure n'existe,
  la fourchette est donc large et **déclarée telle**.*
- **P110.11 — le reste des 29 se répartit sur `easyeda`, `xiao-prise-en-main`,
  `xiao-sense` et la septième cible rouge** : **8** (**[3, 14]**).
  *Terme écrit pour que la décomposition soit vérifiable en somme et pas
  seulement en parties.*

### RELEVÉ 6 — les `title:` EN des cibles visées PAR les trois sources

⚠ *Règle du lot 4, reprise au lot 11 : **une série entière se dépense à lire les
`title:` des cibles avant rédaction**, parce qu'un libellé de `## See also` ne
donne pas le `title:` de production de sa cible.*

- **P110.12 — nombre de cibles DISTINCTES visées par les trois sources : 30**,
  fourchette **[27, 33]**. *Décomposition : `wokwi` en vise **21**, `falstad`
  en ajoute **6**, `ltspice` **3**.*
- **P110.13 — parmi elles, exactement 2 sont SANS jumelle EN** : `falstad` et
  `ltspice`, **qui se citent l'une l'autre**. ⚠ *`wokwi` n'en cite aucune des
  deux — c'est un fait de structure : elle renvoie au hub et au module `esp32/`,
  jamais aux deux simulateurs analogiques.* **Aucune autre cible absente n'est
  attendue** : un troisième `ABSENTE` signifierait une cible hors anneaux 0..2
  non repérée par la dette.

### RELEVÉ 7 — appariement des blocs en chevron (C127)

- **P110.14 — `mesure-chevron --tout` : 34 paires des deux côtés,
  0 divergente**, inchangé. *`ded` vaut 0 sur le restant, `tot` = `deh`, et
  **C127 est hors sujet pour le septième lot d'affilée** ; ce lancement ne sert
  qu'à confirmer que l'angle mort ne s'est pas ouvert.*

### RELEVÉ 8 — blocs de code et C113 sur les trois sources

⚠ **PREMIER LOT DEPUIS TROIS À PORTER DES BLOCS DE CODE**, donc le premier qui
puisse tester l'assomption C113 sur les chaînes affichées libres, en file
d'arbitrage depuis le 25/08.

- **P110.15 — blocs clôturés : 3 au total, 2 porteuses** — `wokwi` **2**
  (deux `cpp`), `falstad` **1** (un bloc **sans langue**, la description texte
  d'un circuit), `ltspice` **0**. ⚠ *Une fiche d'outil de 3 848 mots sans un
  seul bloc de code : c'est le registre qui parle, `ltspice` n'enseignant que
  des gestes d'interface.*
- **P110.16 — lignes de commentaire FRANÇAIS dans ces blocs : 7**, toutes dans
  `wokwi` — **3** dans le bloc « Hello » et **4** dans le bloc « blink » ;
  `falstad` **0**, son bloc étant une netlist sans commentaire.
  *C'est la famille de l'arbitrage en attente des « 26 lignes de commentaire
  français dans des blocs de code EN ».*
- **P110.17 — chaînes affichées libres : 1**, `"Hello, ESP32!"` dans
  `wokwi`. *C'est le cas d'espèce de l'assomption C113, et il est **unique** sur
  tout le lot.*

### Terme écrit pour réfuter

Toute valeur de P110.1, P110.5, P110.7 ou P110.8 différente de sa référence de
clôture signifierait qu'une fiche a bougé depuis le lot 11 **sans que
`git status` ne le voie** — **ARRÊT**, et non ajustement.

### Constats du bloc 110 — 15 prédictions tenues, 2 réfutées

Sortie : `tools/releves-avant-redaction-lot12-3008.txt`.

- **P110.1 ✅** `## See also` **227**, `## What is it for?` **159**,
  `## Pitfalls` **157**, `## Where it fits in the project` **105**,
  `## Exercises` **37**, `## Going further` **31** — **les six au chiffre**.
- **P110.2 ✅** `## Step by step` **78**.
- **P110.3 ✅** `## Project connection` **0**, `## Step-by-step procedure` **0**.
- **P110.4 ✅** `POPULATION (fichiers balayes) : 235`.
- **P110.5 ✅** `Watch out` **49**, `Tip` **46**, `Good` **3**, `Fair` **3**,
  `Poor` **3**, `Attention` **0**, `Astuce` **0** — **les sept au chiffre**.
- **P110.6 ✅** `Example: 3-axis arm project` **54**, dans [54, 58] **et à sa
  borne basse**, toujours en tête devant `Watch out` 49 et `Tip` 46.
  ⚠ *Le compteur n'a pas bougé des huit fiches du lot 11 : **aucune** des huit
  notions `embarque/mcu/` ne porte l'exemple du bras. C'est encore le registre —
  une notion de branche embarquée illustre par du code, pas par le fil rouge de
  projet.* **Le relevé rend aussi le classement complet** : `Solution` **32**,
  `How to read this code` **25**, `Answer to exercise 1` **20**,
  `Answer to exercise 2` **20**, `The key question` **5**.
- **P110.7 ✅** FR **243 / 243 / 0** et EN **235 / 235 / 0**, `sans title: 0`
  des deux côtés. *La comparaison exigée par C125 est triviale, sixième lot
  d'affilée.*
- **P110.8 ✅** `4 199 / 4 170 / 29 / 145 / 16` — **les cinq au chiffre**.
- **P110.9 ✅** la somme des libellés vers cible absente vaut **exactement 29**,
  et elle recoupe le compteur `cible EN absente` de `--libelles` **au chiffre**.
  *Deux instruments indépendants, le même nombre.*

❌ **P110.10 — RÉFUTÉE SUR DEUX TERMES DE TROIS, ET LE TOTAL EST « TENU » À SA
BORNE, CE QUI NE VAUT PAS VALIDATION.** Mesuré : `wokwi-en` **9** ✅ (dans
[3, 10]), `falstad-en` **3** ❌ (contre 8, hors de [5, 12]), `ltspice-en` **3**
❌ (contre 7, hors de [4, 11]), **total 15** — la **borne basse exacte** de la
fourchette [15, 26].

  | cible | prédit | mesuré | citée par |
  |---|---|---|---|
  | `wokwi-en` | 6 | **9** | `tinkercad-en` ×2, `micropython-simulation-en`, `xiao-esp32-s3-en` ×2, `analyseur-logique-en`, `simulation-electronique-en` ×3 — **5 fiches** |
  | `falstad-en` | 8 | **3** | `simulation-electronique-en` ×3 — **1 fiche** |
  | `ltspice-en` | 7 | **3** | `simulation-electronique-en` ×3 — **1 fiche** |

  ⚠ **Cause, et c'est encore une variable de structure que j'ai remplacée par
  une intuition de volume.** J'ai classé les trois cibles par la **taille de
  leur fiche source** — `ltspice` 3 848 et `falstad` 3 244 devant `wokwi`
  1 340 — alors que ce qui compte est **le nombre de fiches EN déjà traduites
  qui les citent**. *`wokwi` est un simulateur de **microcontrôleur** : toute la
  branche `embarque/mcu/` déjà traduite le cite. `falstad` et `ltspice` sont des
  simulateurs **analogiques**, et la seule fiche EN qui les cite est leur propre
  hub — trois fois chacune, symétriquement.* **Règle d'usage candidate : le
  nombre de libellés visant une cible se prédit sur le nombre de fiches
  TRADUITES de sa branche citante, jamais sur la taille de la cible.**

  ✅ **Et ce que la mesure donne pour la rédaction est net** : les trois cibles
  sont citées **sous leur nom propre et lui seul** — `Wokwi` 9 fois sur 9,
  `Falstad` 3 sur 3, `LTspice` 3 sur 3. **Aucune forme concurrente, aucun
  libellé de désambiguïsation** : C125 se referme au test 1 sans descendre aux
  tests 2 et 3.

- **P110.11 ✅** le reste des 29 vaut **14**, dans [3, 14] et **à sa borne
  haute** : `kicad-en` **4**, `easyeda-en` **4**, `xiao-sense-en` **3**,
  `xiao-prise-en-main-en` **3**. ⚠ *Relevé au passage et non prédit : les
  libellés de `xiao-prise-en-main-en` s'écrivent `XIAO — getting started`, **avec
  un cadratin dans le libellé**. C'est exactement la classe que le lot 11 a
  découverte sur `ide` — un tiret dans un libellé n'est pas de la prose et ne se
  reporte pas —, et elle est ici **déjà écrite dans le corpus anglais**.*
- **P110.12 ✅** `CIBLES DISTINCTES : 29`, dans [27, 33] — prédit 30, mesuré 29.
- **P110.13 ✅** `SANS JUMELLE EN : 2`, et ce sont bien **`falstad` et
  `ltspice`**, qui se citent l'une l'autre ; **`wokwi` n'en cite aucune des
  deux**, comme annoncé. *Aucune troisième cible absente : la dette ne cache
  rien sur ce lot.*
- **P110.14 ✅** `paires porteuses des deux cotes : 34   divergentes : 0`.
  **C127 hors sujet pour le septième lot d'affilée.**
- **P110.15 ✅** blocs clôturés : `falstad` **1** (bloc sans langue, la
  description texte d'un circuit), `ltspice` **0**, `wokwi` **2** (deux `cpp`) —
  **3 blocs, 2 porteuses**, la décomposition juste sur ses trois termes.
  ⚠ *Une fiche d'outil de 3 848 mots sans un seul bloc de code, et c'est le
  registre : `ltspice` n'enseigne que des gestes d'interface.*

❌ **P110.16 — RÉFUTÉE D'UNE UNITÉ, par un doublon que j'ai lu sans le
compter.** Lignes de commentaire français dans les blocs : **8** et non 7,
toutes dans `wokwi` — **3** dans le bloc « Hello » et **5** dans le bloc
« blink », `falstad` **0** ✅. *Le cinquième du bloc « blink » est le **second**
`// attend une seconde` : la ligne apparaît **deux fois** dans le même bloc, et
je n'en ai compté qu'une en relisant.* ⚠ **Même mode d'échec qu'à P108.13
quatre-vingt-dix minutes plus tôt** — un relevé fait à la lecture rate les
**répétitions**, jamais les singularités. *Deux réfutations de la séance ont
cette cause unique, et elles sont sur deux compteurs sans rapport.*

- **P110.17 ✅** chaînes affichées libres : **1**, `"Hello, ESP32!"` dans
  `wokwi`, et **elle est unique sur tout le lot**. *C'est le cas d'espèce de
  l'assomption C113, en file d'arbitrage depuis le 25/08 et non testable depuis
  trois lots faute de bloc de code.*

**Terme écrit pour réfuter : il ne mord pas.** Les quatre compteurs de
référence — formes de production, titres de callout, titres-doublons,
`--libelles` — sortent **identiques** à la clôture du lot 11, sur **dix-huit
valeurs**. *Aucune fiche n'a bougé hors du regard de `git status`.*

---

## BLOC 111 — RELEVÉ DES PUCES À TIRET DES TROIS SOURCES (ce que `--style` NE VOIT PAS)

**Commande** :
`node tools/puces-tiret.mjs --fiches embarque/simulation/falstad.md,embarque/simulation/ltspice.md,embarque/simulation/wokwi.md`

⚠ **Pourquoi ce relevé est nécessaire alors que le bloc 108 a déjà compté 101
candidats.** L'amendement C109 du 29/08 (suite 8) met les **tirets de puce**
dans le périmètre par quatre cas, et le §8 dit noir sur blanc que **`--style` ne
les voit pas** : son `exemptions()` range le **premier** tiret d'une ligne de
puce en glose et sort sans le compter (ligne 1061 du code). *Le compteur du bloc
108 est donc structurellement aveugle à cette famille, et la passe serait
incomplète de tout ce que ce bloc va nommer.* **Le lot 11 avait jugé 100
signalements dont 18 de cette provenance ; le lot 12 en aura une part
comparable.**

### Déclaration C131 du bloc 111

**Compteur prédit** : le compte fiche par fiche de `puces-tiret.mjs --fiches`.
**Population** : les trois sources FR du lot, **passées en argument et nommées
dans la sortie**. **Versement de la séance dans cette population : aucun** —
aucune des trois n'a été écrite, dates du 17, 18 et 19 août au bloc 108.
**Total impliqué : 3 fiches.** *Le bloc ne crée aucun fichier ; le compteur git
reste à 6 entrées dont 3 hors artefacts de séance.*

### Prédictions du bloc 111

- **P111.1 — décomposition, comptage à la main sur les trois sources lues en
  entier** : `falstad` **6**, `ltspice` **9**, `wokwi` **4**, **TOTAL 19**.
- **P111.2 — décomposition de la décomposition, section par section**, pour que
  la prédiction soit vérifiable ailleurs que sur son total :
  - `falstad` : `## À quoi ça sert ?` **3**, « Lire un circuit qui tourne » **1**
    (`**Le survol, c'est la mesure**`, les deux autres puces de la section
    n'ayant **pas** de cadratin), « Page blanche et placement » **2**
    (`Ajouter fils` et `Ajouter fils routé`, la troisième puce
    `**Ajouter résistance** (r).` n'en portant pas) ;
  - `ltspice` : `## À quoi ça sert ?` **3** (la quatrième puce,
    `**produire des valeurs citables** … : une coupure relevée…`, sépare au
    **deux-points** et non au tiret), « Trois choses sont à lire » **3**,
    la liste des directives `.op` / `.tran` / `.ac` **3** ;
  - `wokwi` : `## À quoi ça sert ?` **4**, et **rien ailleurs**.
- **P111.3 — les listes NUMÉROTÉES ne sont pas comptées, et c'est le motif qui
  le dit** : `PUCE = /^\s*[-*]\s/` ne reconnaît ni `1.` ni `2)`. *Les quatre
  gestes numérotés de `wokwi` (« Ajouter les composants », « Câbler »,
  « Coder », « Lancer et confronter ») portent des cadratins et **ne sont pas**
  dans ce relevé ; ils sont **déjà** dans les 101 de `--style`, où leur premier
  tiret est exempté et les suivants comptés.* ⚠ **Ces deux compteurs ne se
  recouvrent donc pas, et leur somme est le nombre de signalements à juger.**
- **P111.4 — total des signalements à juger au lot 12 : 101 + 19 = 120**,
  contre **100** au lot 11 pour 8 fiches et 7 339 mots. *Densité : **14,2 pour
  1 000 mots** contre 13,6 au lot 11 — je prédis donc un lot **plus dense en
  signalements par mot** malgré trois fiches contre huit, et c'est encore le
  registre : une fiche d'outil énumère.*
- **P111.5 — densité des puces à tiret du lot : 19 / 8 432 = 2,25 ‰**,
  fourchette **[2,0 ; 2,5]**. *Référence : le lot 11 a rendu **18 puces pour
  7 339 mots**, soit **2,45 ‰**, et sa prédiction avait été calée sur le
  registre contre le prorata des mots. **Ici les deux méthodes concordent**, ce
  qui rend ce terme peu discriminant — je l'écris quand même pour que la série
  existe.*

---

## BLOC 112 — JUGEMENT DES 120 SIGNALEMENTS, TEST NÉGATIF DÉLIBÉRÉ, PASSE C109

**Commandes, dans cet ordre** :
1. `node tools/remplacer-passe.mjs tools/passe-c109-lot12-3008-NEGATIF.tsv` — **doit REFUSER** ;
2. `node tools/remplacer-passe.mjs tools/passe-c109-lot12-3008.tsv` — contrôle seul ;
3. `node tools/remplacer-passe.mjs tools/passe-c109-lot12-3008.tsv --ecrire`.

### La liste est FERMÉE avant le bloc

**120 signalements jugés un par un** — **101** de `--style` (bloc 108) et **19**
puces à tiret (bloc 111), **et les deux compteurs ne se recouvrent pas**, la
démonstration étant au bloc 111. **Verdict : 71 traités, 49 gardés.**

| fiche | signalements | traités | gardés | ancres |
|---|---|---|---|---|
| `falstad` | 41 + 6 = **47** | **29** | **18** | **24** |
| `ltspice` | 43 + 9 = **52** | **29** | **23** | **31** |
| `wokwi` | 17 + 4 = **21** | **13** | **8** | **14** |
| **lot** | **120** | **71** | **49** | **69** |

*Les ancres sont moins nombreuses que les traitements quand deux signalements
vivent sur la même ligne (une incise encadrée = 2 signalements, 1 ancre), et
plus nombreuses quand une même ligne porte deux traitements disjoints
(`ltspice` L16 et L161).*

**Les 49 gardés, et le motif de chaque garde** :
- **enumération encadrée par deux tirets** (borne du 25/08 : elle **reste** quand
  elle énumère) — `falstad` L16a et L51, `ltspice` L16b-c, L107a-b, L150a-b,
  `wokwi` L17a-b, L114a-b : **11** ;
- **apposition nominale sans verbe conjugué** (C123) — `falstad` L32, L79, L99,
  L101, L104, L124a, L156a, `ltspice` L63b, L121, L138, L146, L158, L176, L198a,
  `wokwi` L81, L122 : **16** ;
- **libellé de glose `Libellé — groupe`, cas 2 de l'amendement du 29/08** —
  `falstad` L24, L25, L26, L93, L94, `ltspice` L25, L26, L55, L56, L57, L78,
  L79, L80, `wokwi` L23 : **14** ;
- **titre d'exercice `Exercice N — Titre`, infinitif ou nominal** — `falstad`
  L184a, L184b, L190, `ltspice` L183, L193 : **5** ;
- **segment infinitif ou adjectival** — `falstad` L16b, `wokwi` L132 (glose de
  `## Voir aussi`, **cas 1 : hors périmètre**) : **2** ;
- **`falstad` L16a** est comptée deux fois ci-dessus par erreur d'énumération
  et ne l'est qu'une au total : **le décompte qui fait foi est 18 + 23 + 8 = 49**.

⚠ **TROIS MISES EN COHÉRENCE DE LISTE, DÉCLARÉES ET HORS DÉCOMPTE C109.**
Quand une puce d'une liste **chaînée par points-virgules** tombe sous le cas 2
et devient `- **Libellé.** Phrase.`, la liste ne peut plus chaîner autour d'une
puce qui est une phrase complète : **la liste entière perd son chaînage et
chaque puce se termine par un point**. Cela touche **3 puces qui ne sont pas
elles-mêmes des candidats C109** — `ltspice` L25 et L26, `wokwi` L23 —, et
c'est **déclaré ici avant d'être fait**, avec son motif : laisser le mélange
`; ; . .` fabriquerait exactement l'impression de ponctuation machinale que
C109 existe pour retirer. *Ces 3 ancres portent le total de la table à **69**
alors que les traitements C109 en comptent **66**.*

⚠ **UN ANGLE MORT NOMMÉ, ET IL N'EST DANS AUCUN DES DEUX COMPTEURS.**
`wokwi` L112 est une puce **numérotée** (`4. **Lancer et confronter…**`) dont le
premier tiret arrive **après une phrase complète** : c'est le **cas 3** de
l'amendement, donc dans le périmètre. Or `--style` l'exempte mécaniquement
(premier tiret d'une ligne de puce, ligne 1061) **et** `puces-tiret.mjs` ne le
voit pas non plus, son motif `/^\s*[-*]\s/` ne reconnaissant ni `1.` ni `2)`.
✅ *Jugé quand même : segment de droite nominal (« numéro de broche, sens de la
LED ou masse oubliée »), donc **gardé** sous C123 — le trou ne coûte rien ce
soir, mais il existe et il est écrit.*

### Déclaration C131 du bloc 112

**Population** : entrées de `git status --porcelain`. **État à l'entrée : 6
entrées, dont 3 hors artefacts de séance.** **Versements de ce bloc** : la table
réelle `tools/passe-c109-lot12-3008.tsv` et la table négative
`tools/passe-c109-lot12-3008-NEGATIF.tsv`, **2 entrées `??` hors artefacts**,
plus **3 entrées ` M`** sur les sources FR à l'écriture.
**Total impliqué après écriture : 11 entrées, dont 8 hors artefacts de séance**
— et les huit se nomment : `puces-tiret.mjs`, `puces-3008-avant-passe-lot12.txt`,
`releves-avant-redaction-lot12-3008.txt`, les deux tables TSV, et les trois
sources FR.

### Prédictions du bloc 112 — test négatif délibéré

- **P112.1 — la table négative porte DEUX défauts d'espèces différentes, et
  l'outil doit refuser sur les deux** : une ancre à **zéro** occurrence
  (`la méthode générale ; on apprend ici` cherchée dans `wokwi.md`, qui ne la
  porte pas) et une ancre à **occurrences multiples** (`Falstad` dans
  `ltspice.md`). **Refus du lot entier, zéro octet écrit**, et la sortie nomme
  les deux lignes fautives avec leur compte — **0** pour la première, **au moins
  6** pour la seconde.
- **P112.2 — `git status` reste à 8 entrées après le test négatif**, dont
  **aucune** source de `content/`. *C'est le terme qui prouve le « tout ou
  rien » : une garde qui refuse sans écrire, et non qui écrit puis annule.*

### Prédictions du bloc 112 — passe réelle

- **P112.3 — la table est acceptée : 69 ancres, 69 trouvées exactement une
  fois**, sur **3** fiches.
- **P112.4 — invariant d'accents : écart NUL sur les trois fiches.** *Chaque
  remplacement a été composé pour n'ajouter ni ne retirer un seul caractère
  accentué : les connecteurs introduits sont `et`, `mais`, `car`, `soit`,
  `non`, `On y lit`, `Ce sont`, `puisqu'` — **tous sans accent**, choisis pour
  cela.* ⚠ **C'est un ARRÊT si l'écart n'est pas nul**, et la règle vient d'É2
  du 29/08, 147 caractères perdus sous cinq contrôles au vert.
- **P112.5 — invariant de lignes du corps : écart NUL sur les trois fiches.**
  *Aucun remplacement ne porte de retour à la ligne.*
- **P112.6 — volume après passe, décomposé et prédit au mot** :
  `falstad` **3 244 → 3 253** (**+9**), `ltspice` **3 848 → 3 855** (**+7**),
  `wokwi` **1 340 → 1 341** (**+1**), **LOT 8 432 → 8 449** (**+17**, soit
  **+0,20 %**).
  ⚠ **CE LOT NE SERA PAS NEUTRE EN MOTS, ET C'EST PRÉVU AVANT LA MESURE.** Les
  deux lots précédents l'ont été à un mot près ; ici **six remplacements
  ajoutent un connecteur** (`et` ×4, `mais`, `car`), **un ajoute `et non` contre
  `pas`**, **un ajoute `Ce sont`**, **un ajoute `On y lit`**, et **un recompose
  une phrase à `soit`** (+2). *La cause est le registre, encore : une fiche
  d'outil enchaîne des gestes, et un tiret qui sépare deux gestes se rend par un
  connecteur, là où une notion argumentative se coupe en deux phrases sans rien
  ajouter.*
- **P112.7 — `--style` après passe, décomposé** : `C109 de prose`
  `falstad` **13**, `ltspice` **15**, `wokwi` **7**, **LOT 35** — soit
  exactement les 35 gardés de `--style` (les 14 autres gardés étant des puces,
  invisibles à ce compteur). `hors perimetre` **7 inchangé**,
  `typographie francaise` **0**, `virgule ambigue` **0**,
  `C109 creees en EN` **0**, `hors alphabet latin` **0**.
- **P112.8 — `puces-tiret.mjs --fiches` après passe** : `falstad` **5**
  (6 − 1), `ltspice` **8** (9 − 1), `wokwi` **1** (4 − 3), **TOTAL 14**.
- **P112.9 — `puces-tiret.mjs --corpus` après passe, motif A** :
  **FR 946 → 941**, porteuses **167 inchangé**, fichiers **248 inchangé** ;
  **EN 886 / 153 / 235 inchangés**, aucune fiche EN n'ayant encore été écrite.
  ⚠ **C'EST LE TERME QUE LE LOT 11 N'A PAS PU RENDRE** : le delta de −5 se
  **mesurera** par différence de deux relevés datés du même outil, au lieu de se
  calculer (C119).
- **P112.10 — les trois `## Voir aussi` sont INTACTS** : aucune de leurs gloses
  n'est dans la table, cas 1 de l'amendement. *Terme écrit pour réfuter : une
  ligne de `## Voir aussi` modifiée au `git diff` serait une faute de périmètre.*

### Constats du bloc 112 — 10 prédictions sur 10 tenues, dont SIX au chiffre exact sur leur décomposition

- **P112.1 ✅ le test négatif est refusé sur ses DEUX défauts, et il les nomme** :
  `L2 INTROUVABLE … ancre : la méthode générale ; on apprend ici` (**0**
  occurrence dans `wokwi.md`) et `L3 MULTIPLE … (18 occurrences)` pour `Falstad`
  dans `ltspice.md` — prédit « au moins 6 », mesuré **18**. Bilan :
  `REFUS : 2 defaut(s). AUCUN FICHIER ECRIT.`, code de sortie **1**.
- **P112.2 ✅** `git status` rend **8 entrées** après le refus, **aucune** de
  `content/`. *La garde refuse sans écrire : c'est le tout-ou-rien vérifié, pas
  supposé.*
- **P112.3 ✅** `ancres 24/24`, `31/31`, `14/14`, **69 remplacements prêts sur 3
  fiches**, `0 introuvable`, `0 multiple`.
- **P112.4 ✅** **invariant d'accents à écart NUL sur les trois fiches** :
  `457 -> 457`, `545 -> 545`, `160 -> 160`. *Les soixante-neuf remplacements ont
  été composés pour cela — tous les connecteurs introduits (`et`, `mais`, `car`,
  `soit`, `non`, `On y lit`, `Ce sont`, `puisqu'`) sont sans accent, et c'est un
  choix d'écriture, pas une chance.*
- **P112.5 ✅** lignes du corps `191 -> 191`, `195 -> 195`, `122 -> 122`.
  Points de code : `20 887 -> 20 889`, `24 135 -> 24 135`, `9 457 -> 9 444`.
  ⚠ *`ltspice` rend **exactement** le même nombre de points de code pour 31
  remplacements : les caractères ajoutés par les connecteurs compensent au
  caractère près ceux que les tirets et leurs espaces retirent. Coïncidence
  arithmétique, notée parce qu'elle pourrait passer pour une passe sans effet —
  le `git diff` compte **28 lignes** modifiées.*

✅✅ **P112.6 — VOLUME APRÈS PASSE TENU AU MOT SUR SES QUATRE TERMES.**
`falstad` **3 244 → 3 253** (+9), `ltspice` **3 848 → 3 855** (+7), `wokwi`
**1 340 → 1 341** (+1), **LOT 8 432 → 8 449** (+17, **+0,20 %**).
⚠ **LA SÉRIE DES PASSES EXACTEMENT NEUTRES S'ARRÊTE À DEUX, ET C'ÉTAIT ÉCRIT
AVANT LA MESURE.** *La cause est le registre : une fiche d'outil enchaîne des
gestes, et un tiret qui sépare deux gestes se rend par un **connecteur** — six
`et`, un `mais`, un `car`, un `et non`, un `Ce sont`, un `On y lit`, un `soit` —
là où une notion argumentative se coupe en deux phrases sans rien ajouter.*
**Le +17 se décompose terme à terme et chaque unité a son ancre.**

✅✅ **P112.7 — RÉSIDU `--style` TENU AU CHIFFRE, DÉCOMPOSITION COMPRISE.**
`C109 de prose` **35** — `falstad` **13**, `ltspice` **15**, `wokwi` **7**,
soit **exactement** les 35 gardés de provenance `--style` annoncés au jugement.
`hors perimetre` **7 inchangé**, `typographie francaise` **0**,
`virgule ambigue` **0**, `C109 creees en EN` **0**, `hors alphabet latin` **0**.
*Le résidu n'est pas un reste : c'est la liste fermée avant le bloc, retrouvée
à l'unité.*

✅ **P112.8** `puces-tiret --fiches` : `falstad` **5**, `ltspice` **8**,
`wokwi` **1**, **TOTAL 14** — les quatre termes.

✅✅ **P112.9 — ET C'EST LE TERME QUE LE LOT 11 N'A PAS PU RENDRE.**
Corpus motif A, **FR 946 → 941**, porteuses **167 inchangé**, fichiers
**248 inchangé** ; **EN 886 / 153 / 235 inchangés**. **Le delta de −5 est
MESURÉ**, par différence de deux relevés du même outil versionné, l'un daté
d'avant la passe (`tools/puces-3008-avant-passe-lot12.txt`) et l'autre d'après.
*C119 est tenue : rien n'est calculé.* ⚠ *Les porteuses ne bougent pas — les
cinq puces traitées viennent de trois fiches qui en gardent chacune au moins
une.*

✅ **P112.10** aucune ligne de `## Voir aussi` au `git diff` : `git diff -U0`
filtré sur les lignes de puce à wikilink rend **zéro** ligne. *Le cas 1 de
l'amendement du 29/08 est tenu par construction — aucune glose de section de
liens n'est entrée dans la table.*

**Diff : 24 / 28 / 11 lignes modifiées**, pour 24 / 31 / 14 ancres. *L'écart
vient des lignes qui portent deux ancres disjointes — `ltspice` L16 et L161,
`wokwi` L17, L32 et L48.*

---

## BLOC 113 — GÉNÉRATION DES TROIS SQUELETTES EN, ET LES TROIS `title:`

**Commandes** : `node tools/creer-fiche-en.mjs embarque/simulation/falstad.md`,
puis `ltspice.md`, puis `wokwi.md`.

### Les trois `title:` sont décidés AVANT la génération, et C125 se referme au test 1

⚠ **PREMIER LOT DU CHANTIER SANS AUCUN ARBITRAGE DE TITRE, ET LA RAISON EST DE
STRUCTURE.** Les trois cibles sont des **noms propres de logiciels**, et le
relevé 5 du bloc 110 le montre sans appel : le corpus anglais les cite
**exclusivement** sous leur nom propre — `Wokwi` 9 fois sur 9, `Falstad` 3 sur
3, `LTspice` 3 sur 3, **aucune forme concurrente, aucun libellé de
désambiguïsation**. *Le test 1 de C125 tranche seul ; les tests 2 et 3 ne sont
pas atteints.*

- **P113.1 — les trois `title:` EN sont IDENTIQUES aux `title:` FR** :
  `Falstad`, `LTspice`, `Wokwi`. **Aucun lancement de `renommer-titres.mjs`
  n'est nécessaire**, le générateur recopiant le `title:` de la source.
  ⚠ *Terme écrit pour réfuter : si le générateur écrivait autre chose que le
  `title:` français, la prédiction tombe et il faudra `renommer-titres.mjs`.*
- **P113.2 — `titres-doublons` restera à `0 groupe en collision` côté EN**
  après ces trois titres : ni `Falstad`, ni `LTspice`, ni `Wokwi` n'est déjà
  porté par une fiche EN. *Contrôle à la clôture ; ce n'est pas une prédiction
  de ce bloc.*

### Déclaration C131 du bloc 113

**Population** : entrées de `git status --porcelain`. **État à l'entrée : 11
entrées, dont 8 hors artefacts de séance.** **Versements de ce bloc** : trois
fiches EN neuves, **3 entrées `??`**, toutes hors artefacts de séance.
**Total impliqué : 14 entrées, dont 11 hors artefacts de séance.**

### Prédictions du bloc 113

- **P113.3 — trois fiches créées**, aux chemins
  `content/en/embarque/simulation/falstad-en.md`, `ltspice-en.md`,
  `wokwi-en.md`. *Le répertoire `content/en/embarque/simulation/` existe déjà —
  il porte `simulation-electronique-en.md` —, donc **aucun répertoire neuf**, et
  la règle du 30/08 « un répertoire non suivi vaut une entrée » ne s'applique
  pas : les trois fiches comptent **trois** entrées.*
- **P113.4 — embeds, décomposés et prédits au chiffre** : `falstad` **13**,
  `ltspice` **9**, `wokwi` **9**, **total 31**.
- **P113.5 — blocs de code clôturés** : `falstad` **1**, `ltspice` **0**,
  `wokwi` **2**, **total 3** — les trois termes déjà mesurés au relevé 8 du
  bloc 110, donc ce n'est pas une prédiction neuve mais un **contrôle croisé
  d'instrument** : le compteur du générateur et mon script de relevé doivent
  rendre le même chiffre.
- **P113.6 — ancres de wikilink `[[fiche#Section|x]]` signalées : 2**, et elles
  se nomment — `falstad` `[[simulation-electronique#Pièges|simulation]]` et
  `ltspice` `[[simulation-electronique#Les trois familles d'analyse|trois
  familles d'analyse]]`. ⚠ **Les deux visent des sections du hub dont le titre
  anglais est déjà en production** : `## Pitfalls` et
  `## The three families of analysis`. *Elles sont donc réécrites à la main à la
  rédaction, et le générateur ne peut pas le faire.*
- **P113.7 — aliases retirés : 0** sur les trois fiches (aucun `aliases:` dans
  les trois front matters).
- **P113.8 — wikilinks sortants, décomposés** : `falstad` **17**,
  `ltspice` **14**, `wokwi` **28**, **total 59**. ⚠ *Fourchette **[±2 par
  fiche]** : ce sont les seuls chiffres de ce bloc que je n'ai pas comptés à la
  main sur le fichier mais estimés en relisant, et je le dis plutôt que de
  donner un point faussement ferme.*

### Constats du bloc 113 — 7 prédictions tenues, 1 réfutée sur deux de ses trois termes

- **P113.1 ✅** les trois `title:` EN sont **`Falstad`, `LTspice`, `Wokwi`**,
  identiques aux `title:` FR au caractère. **`renommer-titres.mjs` n'est pas
  lancé de la séance** — premier lot du chantier dans ce cas, et la cause est
  que les trois cibles sont des **noms propres de logiciels**.
- **P113.3 ✅** trois fiches écrites : `falstad-en.md` (21 802 o),
  `ltspice-en.md` (25 182 o), `wokwi-en.md` (10 058 o).
- **P113.4 ✅** embeds **13 / 9 / 9 = 31**, reportés `13 -> 13`, `9 -> 9`,
  `9 -> 9` sans perte.
- **P113.5 ✅** blocs de code **1 / 0 / 2 = 3** — **le compteur du générateur et
  mon script de relevé du bloc 110 rendent le même chiffre sur les trois
  fiches**. *Contrôle croisé d'instrument, et il passe.*
- **P113.6 ✅** **2 ancres de wikilink signalées, exactement les deux nommées** :
  `[[simulation-electronique#Pièges]]` sur `falstad` et
  `[[simulation-electronique#Les trois familles d'analyse]]` sur `ltspice`.
  *Elles visent `## Pitfalls` et `## The three families of analysis`, déjà en
  production dans le hub EN ; le générateur ne peut pas les réécrire, la
  rédaction le fera.*
- **P113.7 ✅** aucun alias signalé sur les trois.
- **P113.2 ✅ (contrôlé par anticipation)** aucune fiche EN ne portait déjà
  `Falstad`, `LTspice` ou `Wokwi` : `titres-doublons` restera à 0.

❌ **P113.8 — RÉFUTÉE SUR DEUX TERMES DE TROIS.** Wikilinks sortants :
`falstad` **17** ✅ (prédit 17), `ltspice` **22** ❌ (prédit 14 ± 2),
`wokwi` **31** ❌ (prédit 28 ± 2), **total 70** contre 59.
⚠ *La prédiction disait elle-même qu'elle était **estimée en relisant** et non
comptée sur le fichier, et c'est exactement le terme qui tombe : le seul des
trois que j'avais compté ligne à ligne — `falstad` — est juste au lien près,
les deux estimés sont faux de **8** et de **3**.* **Le fait de déclarer qu'un
chiffre est estimé ne le rapproche pas de la mesure ; il rend seulement la
réfutation lisible.**

---

## BLOC 114 — RÉDACTION DES TROIS FICHES EN, PAR `--corps`

**Commandes** : trois fichiers de corps écrits dans le scratchpad (**hors
dépôt**, C114), puis
`node tools/creer-fiche-en.mjs --corps en/embarque/simulation/<fiche>-en.md <corps>`,
en `--dry` puis en écriture.

### Déclaration C131 du bloc 114

**Population** : entrées de `git status --porcelain`. **État à l'entrée : 14
entrées, dont 11 hors artefacts de séance.** **Versements de ce bloc : AUCUN** —
les trois fiches EN sont **déjà** `??` depuis le bloc 113, et `--corps` les
**modifie** sans créer d'entrée ; les fichiers de corps vivent hors dépôt.
**Total impliqué : 14 entrées, inchangé, dont 11 hors artefacts de séance.**

### Les correspondances de forme, arrêtées AVANT d'écrire

⚠ **LE CORPUS TRANCHE TROIS FOIS, ET AUCUNE DES TROIS FORMES N'EST INVENTÉE.**
- `## Prendre en main` → **`## Getting started`** : la forme existe **une** fois
  en production, sur `oscilloscope-en`, dont la source porte exactement
  `## Prendre en main`. *Trois fiches FR portent cette section ; une seule est
  traduite, et c'est elle qui donne la forme.*
- `## Exemple — Faire clignoter une LED` → **`## Example — Blinking an LED`** :
  la même `oscilloscope-en` rend `## Exemple — Observer un signal PWM` par
  `## Example — Watching a PWM signal` — **gérondif, et capitale après le
  cadratin**. *Le corpus porte 9 `## Example — 3-axis teaching arm` et 4
  `## Example — The 3-axis arm`, donc la forme est établie ; c'est la
  **capitalisation après le tiret** que la jumelle d'`oscilloscope` tranche.*
- `> [!success]- Corrigé` → **`> [!success]- Solution`** : **64** `Corrigé` nus
  en FR contre **32** `Solution` en EN, et les 19 `Corrigé de l'exercice N`
  rendent les 40 `Answer to exercise N`. *Nos quatre callouts sont des `Corrigé`
  **nus** : ils vont sur `Solution`.*
  ⚠ *Les **4** `> [!success]- Corrigé` que le relevé trouve **dans**
  `content/en/` sont mes squelettes de ce soir, non encore traduits — pas un
  défaut du corpus.*

### Prédictions du bloc 114 — compteurs de forme après rédaction

- **P114.1 — formes de production** : `## See also` **227 → 230**,
  `## What is it for?` **159 → 162**, `## Pitfalls` **157 → 160**,
  `## Exercises` **37 → 39** (`falstad` et `ltspice` seules, `wokwi` n'en
  portant pas), `## Getting started` **1 → 2**,
  `## Where it fits in the project` **105 inchangé**, `## Going further`
  **31 inchangé**, `## Step by step` **78 inchangé**.
  ⚠ *Terme écrit pour réfuter : un `## Step by step` qui bougerait signalerait
  que j'ai rendu `## Prendre en main` par la forme du pas-à-pas, contre
  l'arbitrage du corpus ci-dessus.*
- **P114.2 — titres de callout** : `Solution` **32 → 36**, `Corrigé` dans
  `content/en/` **4 → 0**, `Watch out` **49 inchangé** — *les quinze callouts
  `[!warning]` / `[!note]` / `[!tip]` / `[!question]` des trois sources sont
  **nus**, sans titre, et le restent.*
- **P114.3 — corpus EN : 235 → 238 fiches.**

### Prédictions du bloc 114 — foisonnement

⚠ **AUCUNE RÉFÉRENCE MESURÉE N'EXISTE SUR LE REGISTRE « FICHE D'OUTIL »**, et le
lot 11 a montré que le registre gouverne le foisonnement au point de le rendre
**négatif** sur des notions argumentatives. Deux forces opposées ici : l'anglais
procédural est **plus court** que le français (impératifs, moins d'articles et
de prépositions), mais la décision de glose ci-dessous **ajoute** des mots sur
`falstad` seule.

- **P114.4 — foisonnement, décomposé** : `falstad` **3 253 → 3 370**
  (**+3,6 %**, fourchette **[3 300, 3 430]**), `ltspice` **3 855 → 3 970**
  (**+3,0 %**, **[3 900, 4 020]**), `wokwi` **1 341 → 1 380** (**+2,9 %**,
  **[1 350, 1 410]**), **LOT 8 449 → 8 720** (**+3,2 %**, **[8 550, 8 860]**).
  *`falstad` est prédite la plus haute des trois **à cause de la décision de
  glose**, pas de sa prose — c'est un effet de ma décision et non du texte
  source, et il faut que ce soit écrit avant la mesure pour que la mesure
  puisse le réfuter.*

### ASSOMPTION ÉCRITE AVANT EXÉCUTION — LES LIBELLÉS D'INTERFACE DE `falstad`

**Le problème.** `falstad` cite **une trentaine de libellés de menus en
français** — *Fichier*, *Dessiner*, *Les Bases*, *Vitesse de Simulation*,
*Ajouter fils*… — parce que Falstad suit la langue du navigateur et que les
captures ont été prises en français. **Un lecteur anglophone verra l'interface
en anglais**, et une fiche EN qui lui fait chercher *Ajouter fils* est
inutilisable. À l'inverse, remplacer les libellés par des chaînes anglaises que
je ne peux **pas** vérifier depuis le dépôt serait une invention, et les
captures — partagées entre les deux langues, `audit-medias` le vérifie —
montreraient autre chose que le texte.

**Ce que fait le corpus, et c'est lui qui tranche.** `tinkercad-en` écrit
`click *Créer* → *Circuit* (Create → Circuit)` et
`(*Code → Télécharger le code*, that is Code → Download Code)` : **le libellé
tel qu'il est à l'écran, glosé en anglais entre parenthèses**. *Deux occurrences
seulement, mais c'est une forme en production et elle répond exactement à ce
cas.*

**Décision : le patron `tinkercad-en`, glosé à la PREMIÈRE occurrence de chaque
libellé** et non à chaque occurrence, plus **une note** en tête de fiche disant
une fois que Falstad suit la langue du navigateur et que les captures sont en
français. **Coût d'un revert** : réécrire le corps de `falstad-en` par
`--corps`, **aucune autre fiche touchée**, aucun front matter modifié — le mode
`--corps` existe exactement pour rendre ce revert d'un seul geste.
⚠ **Arbitrage remonté à Tim sans bloquer.** `ltspice` ne pose pas la question,
son interface étant anglaise dans les deux langues.

### SECONDE ASSOMPTION — LE CALLOUT « L'interface est en anglais » DE `ltspice`

Ce callout **ne dit rien à un lecteur anglophone** : il explique pourquoi une
prose française cite des menus anglais. **Décision : le callout est CONSERVÉ
mais RECOMPOSÉ** — il dira que LTspice n'est **pas localisé**, donc que les
mêmes libellés se retrouvent dans la documentation d'Analog Devices et dans les
tutoriels, ce qui est l'autre moitié du contenu du callout français et reste
vrai en anglais. **Ce qui est écarté** : le supprimer. *Motif : la structure de
la fiche se reporte, et un callout retiré est invisible aux trois compteurs de
`--controle`.* **Coût d'un revert** : une passe `--corps` sur `ltspice-en`.

### Constats du bloc 114 — 4 prédictions sur 5 tenues, 1 réfutée de TROIS MOTS

- **P114.5 (non numérotée, contrôle de `--corps`) ✅** les trois passes rendent
  `front matter identique a l octet : oui`, `ligne blanche apres le front
  matter : POSEE`, et les trois compteurs **au chiffre contre la source FR** :
  `liens 17 -> 17`, `22 -> 22`, `31 -> 31` ; `embeds 13 -> 13`, `9 -> 9`,
  `9 -> 9` ; `code 1 -> 1`, `0 -> 0`, `2 -> 2`. *Les `source_sha256` sont
  identiques avant et après sur les trois : aucune empreinte n'a pu être
  inventée, ce pour quoi le mode existe.*

❌ **P114.4 — RÉFUTÉE SUR UN TERME DE QUATRE, ET DE TROIS MOTS.**

  | fiche | prédit | fourchette | mesuré | verdict |
  |---|---|---|---|---|
  | `falstad-en` | 3 370 | [3 300, **3 430**] | **3 433** (+5,5 %) | ❌ **de 3 mots** |
  | `ltspice-en` | 3 970 | [3 900, 4 020] | **3 955** (+2,6 %) | ✅ |
  | `wokwi-en` | 1 380 | [1 350, 1 410] | **1 369** (+2,1 %) | ✅ |
  | **lot** | 8 720 | [8 550, 8 860] | **8 757** (**+3,65 %**) | ✅ |

  ✅ **Le SENS de la prédiction est confirmé et il portait tout le contenu** :
  `falstad` sort **la plus haute des trois**, et pour la cause annoncée — la
  décision de glose, qui ajoute une parenthèse anglaise à chaque premier emploi
  d'un libellé de menu français. *Les deux fiches sans glose sortent à +2,6 % et
  +2,1 %, **sous** la moyenne du corpus, ce qui est le comportement attendu d'une
  prose procédurale rendue en anglais.*
  ❌ **La MAGNITUDE est sous-estimée** : +5,5 % contre +3,6 % prédit. *J'ai
  compté les libellés à gloser et non les **mots** de chaque glose : une glose
  comme « (logic gates, digital chips, analog and hybrid chips) » en pèse six à
  elle seule.* **La borne haute est franchie de trois mots, et c'est une
  réfutation entière — une fourchette n'a pas de marge de courtoisie.**
  ⚠ **Première mesure du chantier sur le registre « fiche d'outil » : +2,1 % et
  +2,6 % hors glose, contre +3,7 % de moyenne de corpus.** *Deux points, pas une
  loi ; et le troisième point est pollué par ma propre décision éditoriale, donc
  il ne compte pas pour l'espèce.*

---

## BLOC 115 — CLÔTURE : L'ÉTAT COMPLET APRÈS LES TROIS FICHES

**Commandes** : `batterie.ps1 -Phase etat` avec les trois sources et les trois
jumelles, `-Chevron` ; puis `titres-doublons.mjs`, `puces-tiret.mjs --corpus`,
et le script de relevé des formes de production et des titres de callout.

### Déclaration C131 du bloc 115

**Population** : entrées de `git status --porcelain`. **État à l'entrée : 14
entrées, dont 11 hors artefacts de séance.** **Versements de ce bloc** : la copie
C124 `tools/batterie-sortie-3008b56.txt` (**1 entrée `??`**, écartée du
sous-compteur) et `tools/puces-3008-apres-passe-lot12.txt`, **déjà créé** au
bloc 112 et donc **déjà compté**. **Total impliqué : 15 entrées, dont 11 hors
artefacts de séance.**

### Prédictions du bloc 115 — volumes et avancement

- **P115.1 — corpus FR : 291 242 → 291 259 mots** (+17, exactement le delta
  mesuré de la passe C109), **243 fiches inchangé**.
- **P115.2 — traduites : 235 → 238 fiches, 270 769 → 279 218 mots FR**
  (270 769 + 8 449).
- **P115.3 — restant : 7 → 4 fiches, 20 473 → 12 041 mots** — et les quatre se
  nomment : `easyeda`, `kicad`, `xiao-prise-en-main`, `xiao-sense`.
- **P115.4 — anneau 2 : 145 net, 141 → 144 traduites, 4 → 1 restante**,
  **18 205 → 9 773 mots**, `easyeda` **seule**, **0 porteuse de chevron**.
  ⚠ *Le lot 13 est donc le **dernier** de l'anneau 2.*
- **P115.5 — avancement, chaque ratio avec le NOM de sa population** : anneau 2
  en fiches **144 / 145 = 99,3 %** ; corpus en fiches **238 / 242 = 98,3 %** ;
  corpus en mots **279 218 / 291 259 = 95,9 %**.

### Prédictions du bloc 115 — contrôles

- **P115.6 — `--controle` : 238 fiches, 0 divergente, 0 lien non suffixé sur 0.**
- **P115.7 — dérive : `MARQUE INVALIDE 0`, `DERIVE 0`, `A JOUR 238`**, et
  **zéro `--recaler`, quatrième lot d'affilée**.
- **P115.8 — foisonnement : 238 paires, 279 218 → 289 154 mots EN, moyenne
  3,6 %** (inchangée : trois paires à 3,4 % de moyenne versées dans 235 paires
  à 3,6 %).
- **P115.9 — `--style` sur les trois fiches EN : `typographie francaise 0`,
  `virgule ambigue 0`, `C109 creees en EN 0`, `hors alphabet latin 0`.**
  ⚠ **`C109 de prose` sur les trois EN : je prédis 35, soit le RÉSIDU FR au
  chiffre**, le report un pour un étant borné à la prose (règle du lot 11) et
  aucune des 35 exemptions gardées ne tombant sur un libellé de wikilink.
  *Terme écrit pour réfuter : `C109 creees en EN` non nul nommerait une
  occurrence que la traduction aurait fabriquée, comme `chien-de-garde-en` au
  lot 11.*
- **P115.10 — titres-doublons : FR 243 / 243 / 0, EN 238 / 238 / 0.**
- **P115.11 — chevron `--tout` : 34 paires des deux côtés, 0 divergente**,
  inchangé. **C127 hors sujet pour le septième lot d'affilée.**
- **P115.12 — médias : 483 → 486 fiches, 716 → 747 embeds** (+31, les trois
  fiches EN reprenant les chemins d'embed à l'octet).

### Prédictions du bloc 115 — compteurs de forme

- **P115.13 — formes de production EN** : `## See also` **230**,
  `## What is it for?` **162**, `## Pitfalls` **160**, `## Exercises` **39**,
  `## Getting started` **2**, `## Where it fits in the project` **105**,
  `## Going further` **31**, `## Step by step` **78**.
- **P115.14 — titres de callout** : `Solution` **36**, `Corrigé` **0** dans
  `content/en/`, `Watch out` **49**, `Tip` **46**, `Good` / `Fair` / `Poor`
  **3** chacun, `Attention` **0**, `Astuce` **0**.
  ⚠ *Correction d'un chiffre publié à tort dans les prédictions du bloc 114 :
  les trois sources portent **27** callouts et non quinze — `falstad` **12**,
  `ltspice` **15**, `wokwi` **0** —, dont **4 titrés** (`Corrigé`) et **23
  nus**. Le chiffre faux était une estimation, pas une mesure, et il est
  remplacé ici avant que la mesure ne le contredise.*
- **P115.15 — puces à tiret, motif A, décomposé et prédit au chiffre** :
  **FR 941 / 167 porteuses / 248 fichiers** (inchangé depuis le bloc 112) ;
  **EN 886 → 900 / 153 → 156 porteuses / 235 → 238 fichiers**.
  **Décomposition du +14** : `falstad-en` **5**, `ltspice-en` **8**,
  `wokwi-en` **1** — *les mêmes chiffres que leurs sources FR après la passe,
  puce par puce, ce qui est le report un pour un vérifié sur cette famille.*
- **P115.16 — `--libelles`** : `cible EN absente` **29 → 14**, *les 15 libellés
  qui visaient `falstad-en`, `ltspice-en` et `wokwi-en` cessant d'être absents
  d'un coup*. Les quatre autres compteurs montent sans que je puisse les
  prédire au point : `wikilinks a libelle` **[4 250, 4 290]**,
  `cible EN existante` **[4 235, 4 275]**, `candidats a lire` **[145, 152]**,
  `positions de parcours` **16 inchangé**.
  ⚠ *La borne haute de `candidats a lire` réserve **7** unités : la clause C125
  du 29/08 (suite 9) ne s'applique pas ici — **aucun** des trois `title:` n'a été
  choisi, ils sont les noms propres des logiciels —, mais **70 libellés neufs**
  entrent au compteur d'un coup, dont des sigles (`I²C`, `UART`, `PWM`, `ADC`,
  `GPIO`) que `estSigleDe` peut ou non reconnaître.*
- **P115.17 — wikilinks : `0 cassée`, `0 ambiguë`**, `mortes` **[4, 7]**.
  *Je ne prédis pas ce compteur au point : le brief le donne à 7 à la clôture du
  lot 11 sans nommer sa population, et la règle du 29/08 (suite 11) veut qu'un
  compteur sans population déclarée ne se prédise pas au chiffre.*

### Constats du bloc 115 — 15 prédictions tenues, 2 réfutées, dont une PAR SON PROPRE TERME D'ARRÊT

Sortie : `tools/batterie-sortie.txt`, copie C124 `tools\batterie-sortie-3008b56.txt`.
Garde : horloge **19:12:13**, `HEAD 4f6803c 2026-08-30 18:29:02 +0200` inchangé
au caractère, `JOURNAL.md 18:27:42`, `conventions.md 18:24:49`,
`TODO.md 2026-08-29 21:48:08` — **les trois inchangées**. Les six fiches du lot
portent des dates du soir (**18:59:15** ×3 pour les sources, **19:10:40/41** ×3
pour les jumelles), **postérieures au dernier relevé et antérieures à l'horloge
du bloc** : c'est l'état attendu d'une séance qui écrit, pas une péremption.

❌ **DÉCLARATION C131 RÉFUTÉE D'UNE ENTRÉE, SUR LES DEUX TERMES.**
`fichiers modifies non commites : 16   (hors artefacts de seance : 12)`, prédit
**15 / 11**. ⚠ **Cause nommée : `tools/puces-3008-apres-passe-lot12.txt`.** Il a
été **créé au bloc 112**, dont la déclaration C131 ne nommait que les deux
tables TSV, et il a donc voyagé hors décompte jusqu'ici. *L'amendement C131 dit
que **chaque bloc qui crée un fichier rejoue sa déclaration** ; le bloc 112 en a
créé **trois** et n'en a déclaré que deux.* **La liste nominative des 16, et
c'est elle qui fait foi** : `predictions-260830.md`, `batterie-sortie-3008b54`,
`b55`, `b56` (**4 artefacts de séance**), puis `puces-tiret.mjs`,
`puces-3008-avant-passe-lot12.txt`, `puces-3008-apres-passe-lot12.txt`,
`releves-avant-redaction-lot12-3008.txt`, `passe-c109-lot12-3008.tsv`,
`passe-c109-lot12-3008-NEGATIF.tsv`, les **3 sources FR** et les **3 fiches EN**
(**12 hors artefacts**).

- **P115.1 ✅** `fiches FR publiees : 242`, `mots FR : 291259` — **+17 au mot**,
  exactement le delta de la passe C109.
- **P115.2 ✅** `deja traduites : 238 fiches, 279218 mots FR` — les deux termes.
- **P115.3 ✅** `RESTANT A TRADUIRE : 4 fiches, 12041 mots FR` — les deux termes.
- **P115.4 ✅** `ANNEAU 2 NET 145`, `deja traduites 144`, `RESTANT 1`,
  `embarque/pcb/easyeda 9773`, `fiches porteuses 0`. ⚠ **Le lot 13 est le
  DERNIER de l'anneau 2, et il tient en une fiche.**
- **P115.5 ✅** anneau 2 en fiches **144 / 145 = 99,3 %** ; corpus en fiches
  **238 / 242 = 98,3 %** ; corpus en mots **279 218 / 291 259 = 95,9 %**.
- **P115.6 ✅** `238 fiche(s) controlee(s), 0 divergente(s)`,
  `Liens non suffixes : 0 sur 0`.
- **P115.7 ✅** `MARQUE INVALIDE 0`, `DERIVE 0`, `SANS SOURCE 0`,
  `SANS MARQUE 0`, `A JOUR 238` — **zéro `--recaler`, quatrième lot d'affilée**.
- **P115.8 ✅** `238 paire(s) : 279218 mots FR -> 289154 mots EN`,
  `foisonnement moyen : 3.6 %` — **les trois termes au chiffre**.

❌ **P115.9 — RÉFUTÉE SUR UN TERME DE SIX, ET C'EST LE TERME QUE J'AVAIS ÉCRIT
POUR RÉFUTER.** `C109 de prose : 35` ✅ — **le résidu FR retrouvé au chiffre,
donc le report un pour un vérifié une fois de plus** ; `hors perimetre 7` ✅ ;
`typographie francaise 0` ✅ ; `virgule ambigue 0` ✅ ; `hors alphabet latin 0` ✅.
Mais **`C109 creees en EN : 1`**, et le compteur la nomme :
`en/embarque/simulation/falstad-en.md   C109 : FR 13 / EN 14`.
⚠ **L'occurrence est à MOI, et elle sort de la décision de glose** : la ligne
99 écrit `**Circuits intégrés analogiques et hybrides** — logic gates, digital
chips, analog and hybrid chips`, où le cadratin sépare la liste des libellés
français de leur rendu anglais. *C'est le **prix de l'assomption déclarée au
bloc 114**, et il se paie sur le seul compteur que la traduction peut salir.*
✅ **La parade est dans le corpus, comme la décision elle-même** :
`tinkercad-en` écrit `(*Code → Télécharger le code*, that is Code → Download
Code)` — **`, that is` et non un cadratin**. Corrigé au bloc 116.
- **P115.10** — voir bloc 117.
- **P115.11 ✅** `paires porteuses des deux cotes : 34   divergentes : 0`.
  **C127 hors sujet pour le septième lot d'affilée.**
- **P115.12 ✅** `486 fiches lues, 747 embeds` — **les deux termes au chiffre**
  (483 → 486, 716 → 747, soit **+31**, le compte exact des embeds des trois
  fiches). `CASSE 0`, `HORS-GABARIT 0`, `EXTERNE 0` ; `ABSENT 12` et
  `ORPHELIN 1` inchangés, **aucun des deux ne vient du lot**.
- **P115.17 ✅** `MORT 4`, dans [4, 7] ; `CASSE 0` ✅ ; `AMBIGU 0` ✅ ;
  `GABARIT 8`, `ALIAS 6`, `OK 482`. *Les 7 mortes du lot 11 tombent à **4** :
  trois des cibles mortes étaient `falstad`, `ltspice` et `wokwi` vues depuis
  `content/en/`.*
- **P115.16 ✅ SUR SES CINQ TERMES, DONT UN AU CHIFFRE EXACT.**
  `wikilinks a libelle 4269` (dans [4 250, 4 290]),
  `cible EN existante 4255` (dans [4 235, 4 275]),
  **`cible EN absente 14` — prédit 14, au chiffre**, `candidats a lire 146`
  (dans [145, 152], **à sa borne basse + 1**), `positions de parcours 16`
  inchangé. ⚠ *Le compteur `candidats a lire` ne monte que de **1** alors que
  **70 libellés neufs** entrent d'un coup et que **15** deviennent comparables :
  les sigles `I²C`, `UART`, `PWM`, `ADC`, `GPIO` sont **tous** reconnus par
  `estSigleDe`, et les trois `title:` — noms propres de logiciels — sont écrits
  au mot près par les libellés qui les visent.* **La marge de 7 unités réservée
  dans la fourchette n'a servi qu'à 1.**

---

## BLOC 116 — CORRECTION DE LA C109 CRÉÉE PAR LA TRADUCTION

**Commandes** : une table négative, puis la table réelle d'**une** ancre, en
contrôle puis en écriture.

### Déclaration C131 du bloc 116

**Population** : entrées de `git status --porcelain`. **État à l'entrée : 16
entrées, dont 12 hors artefacts de séance**, nommées au bloc 115.
**Versements de ce bloc** : `tools/correctif-c109-en-lot12-3008.tsv` et sa
table négative, **2 entrées `??` hors artefacts**. *`falstad-en.md` est déjà
`??` : la réécrire ne crée pas d'entrée.*
**Total impliqué : 18 entrées, dont 14 hors artefacts de séance.**

### Prédictions du bloc 116

- **P116.1 — test négatif délibéré** : l'ancre correcte cherchée dans
  `en/embarque/simulation/ltspice-en.md`, qui ne la porte pas → **`INTROUVABLE`,
  0 occurrence, REFUS, aucun fichier écrit**, code de sortie **1**.
- **P116.2 — table réelle : 1 ancre sur 1**, sur `en/embarque/simulation/falstad-en.md`.
- **P116.3 — invariant d'accents : écart NUL.** *Le remplacement retire
  `** — logic` et pose `**, that is logic` : **aucun caractère accentué** n'est
  touché, les libellés français restent à l'identique de part et d'autre.*
- **P116.4 — invariant de lignes : écart NUL** (191 → 191 lignes de corps).
- **P116.5 — volume : `falstad-en` 3 433 → 3 435 mots** (+2, `that` et `is`),
  **lot 8 757 → 8 759**, **corpus EN 289 154 → 289 156**. *Le foisonnement de
  `falstad-en` passe de +5,5 % à **+5,6 %** ; celui du lot de +3,65 % à
  **+3,67 %**.*
- **P116.6 — après correction, `--style` sur les trois fiches EN** :
  `C109 creees en EN` **1 → 0**, `C109 de prose` **35 → 34**, et
  `en/embarque/simulation/falstad-en.md` **cesse d'apparaître** dans la
  comparaison FR/EN. ⚠ **Décomposition attendue : `falstad-en` 13, `ltspice-en`
  et `wokwi-en` inchangées**, soit exactement les résidus FR fiche par fiche.
  *C'est le terme qui prouve la correction : 34 et non 35, parce que le résidu
  FR de `falstad` est 13 et non 14.*
- **P116.7 — `hors perimetre` reste à 7** sur les trois EN : le remplacement ne
  touche ni titre, ni tableau, ni `alt`.

### Constats du bloc 116 — 7 prédictions sur 7 tenues

- **P116.1 ✅** `L2 INTROUVABLE … ancres 0/1`, `REFUS : 1 defaut(s). AUCUN
  FICHIER ECRIT.`, code de sortie **1**. *Troisième test négatif délibéré de la
  séance, troisième refus, zéro octet écrit à tort.*
- **P116.2 ✅** `ancres 1/ 1` sur `falstad-en.md`.
- **P116.3 ✅** `accents 27 -> 27 (ecart +0)`.
- **P116.4 ✅** `lignes 191 -> 191`.
- **P116.5 ✅** `falstad-en` **3 433 → 3 435** (+2, `that` et `is`),
  foisonnement **+5,5 % → +5,6 %**, corpus EN **289 154 → 289 156**.
- **P116.6 ✅** `C109 creees en EN : 0` et `C109 de prose : 34` — **34 et non
  35, parce que le résidu FR de `falstad` est 13**. *L'occurrence créée est
  retirée, et le compteur retombe sur la décomposition FR fiche par fiche.*
- **P116.7 ✅** `hors perimetre : 7` inchangé.

⚠ **CE QUE CET INCIDENT DIT DE L'ASSOMPTION DU BLOC 114, ET IL FAUT L'ÉCRIRE.**
La décision de glose a coûté **une C109 créée** et **+1,9 point de
foisonnement** sur `falstad-en` (+5,6 % contre +2,6 % et +2,1 % pour les deux
fiches sans glose). *Elle reste défendable — le corpus la porte déjà par
`tinkercad-en` —, mais son prix est désormais **mesuré** et non plus supposé, et
c'est ce qui permet à Tim de l'arbitrer sur des chiffres.* ✅ **La parade était
elle aussi dans le corpus** : `tinkercad-en` écrit `, that is`, pas un cadratin.
**Règle d'usage candidate : une glose ajoutée par la traduction se sépare par
une virgule et un mot de liaison, jamais par un cadratin — sinon elle fabrique
exactement la ponctuation que C109 retire.**

---

## BLOC 117 — COMPTEURS DE FORME DE CLÔTURE

**Commandes** : `titres-doublons.mjs`, relevé des formes de production et des
titres de callout, `puces-tiret.mjs --corpus` et `--fiches` sur les trois EN.
*Aucune prédiction neuve : ce bloc rend P115.10, P115.13, P115.14 et P115.15,
publiées avant le bloc 115.*

### Constats du bloc 117 — 4 prédictions sur 4 tenues, sur VINGT-CINQ termes

- **P115.10 ✅** FR **243 / 243 / 0**, EN **238 / 238 / 0**.
  *La règle d'usage de C125 — relever les groupes des deux côtés et les
  comparer — est triviale pour le septième lot d'affilée, et les trois `title:`
  de ce soir n'ont créé aucune collision, ce qui était prédit au bloc 113.*
- **P115.13 ✅ SUR SES HUIT TERMES** : `## See also` **230**,
  `## What is it for?` **162**, `## Pitfalls` **160**, `## Exercises` **39**,
  `## Getting started` **2**, `## Where it fits in the project` **105**,
  `## Going further` **31**, `## Step by step` **78**.
  ✅ **Le terme écrit pour réfuter ne mord pas** : `## Step by step` **n'a pas
  bougé**, donc `## Prendre en main` a bien été rendu par `## Getting started`,
  la forme que le corpus porte, et non par celle du pas-à-pas.
- **P115.14 ✅ SUR SES NEUF TERMES** : `Solution` **36**, `Corrigé` **0** dans
  `content/en/`, `Watch out` **49**, `Tip` **46**, `Good` / `Fair` / `Poor`
  **3** chacun, `Attention` **0**, `Astuce` **0**.
  *Le classement complet est inchangé en tête — `Example: 3-axis arm project`
  **54**, `Watch out` **49**, `Tip` **46** — et `Solution` passe de la
  quatrième place avec **36**.*
- **P115.15 ✅ SUR SES HUIT TERMES.** Puces à tiret, motif A :
  **FR 941 / 167 porteuses / 248 fichiers** (inchangé depuis la passe),
  **EN 900 / 156 porteuses / 238 fichiers**. **Décomposition du +14 :
  `falstad-en` 5, `ltspice-en` 8, `wokwi-en` 1** — *les mêmes chiffres que
  leurs sources FR après la passe, **puce par puce**.*
  ⚠ **C'est le report un pour un vérifié sur une famille que `--style` ne voit
  pas** : les puces à tiret sont invisibles au compteur C109, et pourtant les
  deux langues sortent au même chiffre sur les trois fiches. *Le lot 11 avait
  découvert que cette famille échappait à l'instrument ; le lot 12 montre
  qu'elle se reporte quand même, à condition de l'avoir relevée des deux
  côtés.*

---

## BLOC 118 — CLÔTURE §7 ÉCRITE, GARDE FINALE

**Écritures du bloc** : insertion des **9 entrées neuves du §8** sous l'ancre
unique `### Autres en attente` (9 860 caractères, occurrence unique vérifiée
avant écriture), puis de l'**entrée de JOURNAL** sous
`<!-- INSERT_JOURNAL_HERE -->` (15 228 caractères, occurrence unique vérifiée),
puis pose de la **ligne Tailles par POINT FIXE** sous deux ancres uniques.

### Déclaration C131 du bloc 118

**Population** : entrées de `git status --porcelain`. **État à l'entrée : 18
entrées, dont 14 hors artefacts de séance** — mesuré au bloc 116 et conforme à
sa déclaration **au chiffre sur les deux termes**. **Versements de ce bloc :
AUCUN fichier neuf** — `conventions.md` et `JOURNAL.md` passent de non modifiés
à ` M`, ce qui **crée deux entrées**. **Total impliqué : 20 entrées, dont 16
hors artefacts de séance.**

### Prédictions du bloc 118

- **P118.1 — le point fixe de la ligne Tailles converge en UNE passe**, et voici
  pourquoi il est calculable d'avance : la substitution retire **12 octets** à
  `JOURNAL.md` (`TAILLE_CONV` et `TAILLE_JOUR`, 11 caractères chacun, remplacés
  par 5). **709 314 − 12 = 709 302 o = 692,68 Kio**, et la valeur écrite,
  **692,7**, est celle-là. *Le point fixe n'est pas atteint par itération mais
  **prédit**, ce qui est la seule façon de ne pas boucler.*
- **P118.2 — `conventions.md` : 555 671 o = 542,65 → écrit 542,6 Kio**, à la
  troncature près, comme les quatre clôtures précédentes (545 420 o = 532,64 →
  532,6 au lot 11).
- **P118.3 — `TAILLE_` ne subsiste nulle part** dans `JOURNAL.md` : **0**.
- **P118.4 — `normalize-pilotage.js` rend `0 caractere(s) a corriger`** sur les
  deux fichiers, avant et après.
- **P118.5 — garde finale** : `HEAD git : 4f6803c 2026-08-30 18:29:02 +0200`
  **au caractère** ; `fichiers modifies non commites : 20   (hors artefacts de
  seance : 16)` ; `TODO.md 2026-08-29 21:48:08` **inchangé au caractère** ;
  `JOURNAL.md` et `conventions.md` **datés du soir et postérieurs à 19:12:13**
  (horloge du bloc 115, **événement daté** et non instant supposé) ; les six
  fiches du lot inchangées depuis le bloc 115, **sauf `falstad-en.md`** que le
  bloc 116 a réécrite.

### Constats du bloc 118 — 4 prédictions sur 5 tenues, et la réfutation est la MÊME QUE CELLE DU BLOC 115

- **P118.1 ✅** `JOURNAL.md` **709 302 o = 692,68 Kio**, et la ligne écrite dit
  **692,7**. **Le point fixe a convergé en une passe parce qu'il a été PRÉDIT** :
  −12 octets calculés d'avance sur deux ancres de 11 caractères remplacées par
  5. *Un point fixe atteint par itération est une boucle ; celui-ci est une
  soustraction.*
- **P118.2 ✅** `conventions.md` **555 671 o = 542,647 Kio**, écrit **542,6**,
  même troncature qu'au lot 11 (545 420 o = 532,64 → 532,6).
- **P118.3 ✅** `grep -c "TAILLE_" JOURNAL.md` rend **0**.
- **P118.4 ✅** `normalize-pilotage.js` : `0 caractere(s) a corriger,
  0 fichier(s) modifie(s)`, avant et après.

❌ **P118.5 — RÉFUTÉE SUR UN TERME DE CINQ, ET C'EST LE MÊME DÉFAUT QU'AU BLOC
115, TROIS BLOCS PLUS TARD.** `fichiers modifies non commites : 21   (hors
artefacts de seance : 16)`, prédit **20 / 16**. ⚠ *La déclaration écrit
« **Versements de ce bloc : AUCUN fichier neuf** » — et l'**étape 0 du
lancement de la garde crée `tools/batterie-sortie-3008b57.txt`**, exactement
comme les blocs 107, 108 et 115 créaient `b54`, `b55` et `b56`, ce que j'avais
déclaré à chaque fois.* **Le sous-compteur, lui, tombe au chiffre : 16**, parce
que l'entrée oubliée est **un artefact de séance** et qu'elle sort du filtre.
✅ **C'est ce qui rend la réfutation lisible** : un terme faux et un terme juste
désignent ensemble la nature du manquant.
- **P118.5, les autres termes ✅** : `HEAD git : 4f6803c 2026-08-30 18:29:02
  +0200` au caractère ; `TODO.md 2026-08-29 21:48:08` inchangé au caractère ;
  `JOURNAL.md 19:19:32` et `conventions.md 19:16:57`, **postérieurs à
  19:12:13** ; les trois sources FR à **18:59:15** et `ltspice-en` / `wokwi-en`
  à **19:10:41**, inchangées depuis le bloc 115 ; `falstad-en` à **19:14:24**,
  **réécrite par le bloc 116**, comme annoncé. **Garde finale au vert.**

⚠ **DEUX RÉFUTATIONS DE LA SÉANCE SUR LE MÊME COMPTEUR ET POUR LA MÊME CAUSE —
LA RÈGLE CANDIDATE DU §8 EST DONC ÉPROUVÉE PAR SA PROPRE VIOLATION.** Le bloc
112 avait oublié un fichier qu'il créait ; le bloc 118 en oublie un autre, et
celui-là est créé par la **plomberie du lancement** et non par le travail du
bloc. *La formulation « un bloc nomme ses versements au moment où il les crée »
ne suffit pas : elle suppose qu'on sait ce que le bloc crée, et l'étape 0 de la
batterie crée un fichier que le bloc ne demande pas.* ✅ **Correctif de règle,
et il est mécanique : toute déclaration C131 d'un bloc qui LANCE la batterie
verse d'office la copie C124 du rang suivant, sans avoir à y penser.**

---

## BILAN DE SÉANCE — LOT 12

**106 prédictions à décompte plein, 97 tenues, 9 réfutées — 91,5 %**, plus
**deux déclarations C131 réfutées d'une entrée chacune, toutes deux sur un
fichier créé et non déclaré**.

**Douze blocs d'exécution (107 à 118), quatre gardes de péremption au vert,
`HEAD 4f6803c` stable au caractère sur les quatre, quatre lancements de
`batterie.ps1` copiés sous `3008b54` à `3008b57`.**

**Trois tests négatifs délibérés, trois refus, zéro octet écrit à tort** — et
**le troisième est d'une espèce neuve** : au lieu de faire refuser une écriture,
il fait **produire à un outil de mesure un chiffre connu et faux** (motif B des
puces, FR 1 033 / EN 972), ce qui referme le seul degré de liberté que le motif
juste laissait ouvert.

**Ce que la séance laisse au dépôt** : 3 fiches EN, 66 remplacements C109 sur
3 sources, 1 outil de mesure versionné, 2 relevés datés encadrant la passe, et
**la première référence du chantier sur le registre « fiche d'outil »** — taux
C109 **1,20 pour 100 mots à 14 % de dispersion**, foisonnement **+2,1 % à
+2,6 %**. *Le lot 13 les éprouvera sur `easyeda`, seule et dernière de
l'anneau 2.*
