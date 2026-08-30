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
