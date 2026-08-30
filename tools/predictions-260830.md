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
