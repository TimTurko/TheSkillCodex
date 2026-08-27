# tools/ — Scripts de maintenance TheSkillCodex

Scripts hors MCP, exécutés manuellement (ou via git hook) sur le poste de travail.

---

## normalize-pilotage.js

Nettoie les fichiers de pilotage privés (TODO, JOURNAL, conventions, BACKLOG, couverture) des caractères invisibles qui font échouer les anchors `edit_file` des outils MCP filesystem.

### Origine du problème

Obsidian applique automatiquement la typographie française : il insère des NBSPs fines (U+202F) devant `:` `;` `!` `?` `%` `»` et autour des flèches `→`. Ces caractères sont **invisibles à l'œil** mais distincts d'un espace normal. Combinés à des line endings mixtes (CRLF Windows / LF de MCP) sur des fichiers édités alternativement par Obsidian et par MCP, ils créent des anchors `edit_file` qui paraissent matcher visuellement mais échouent en réalité.

Les fichiers de pilotage ne sont jamais publiés (privés, hors Quartz). La typo française n'a aucune utilité dessus.

### Caractères traités

| Caractère | Code | Action |
|---|---|---|
| NBSP fin | U+202F | → espace normal |
| NBSP normal | U+00A0 | → espace normal |
| ZWSP | U+200B | retiré |
| BOM | U+FEFF | retiré (en tête uniquement) |
| CRLF / CR isolé | — | → LF |

### Fichiers ciblés (codés en dur dans le script)

- `TODO.md`
- `BACKLOG.md`
- `JOURNAL.md`
- `JOURNAL-archive.md`
- `conventions.md`
- `_drafts/referentiel/couverture-en-cours.md`

Pour ajouter un fichier : éditer la constante `TARGETS` en tête du script.

### Ce que le script ne touche PAS

Les fiches publiables (`content/**.md`) : elles gardent leur typo française pour le rendu Quartz.

### Usage

```bash
# Corrige les fichiers et reporte ce qui a été modifié
node tools/normalize-pilotage.js

# Rapport seul, sans modification (exit 1 si invisibles trouvés)
node tools/normalize-pilotage.js --check
```

Idempotent : relancer sans changement = 0 modification.

---

## audit-medias.mjs

Audite les embeds de medias de `content/` contre le systeme de fichiers reel.

### Origine du problème

Deux défauts sont **invisibles en local et fatals en production** : un embed qui pointe un fichier absent, et un embed dont la **casse** diffère du nom réel du fichier. Windows est insensible à la casse, GitHub Pages sert sous Linux qui ne l'est pas — `circuit-RC.gif` s'affiche en local et renvoie un 404 en ligne. Le piège s'est manifesté 4 fois sur le projet, dont une sans aucune erreur remontée.

La détection ne peut donc pas reposer sur `fs.existsSync()`, qui répondrait « vrai » sous Windows. L'index est construit par `readdir()`, qui renvoie les noms réels, et la comparaison se fait par égalité stricte de chaînes.

### Statuts

| Statut | Signification |
|---|---|
| `ABSENT` | aucun fichier correspondant |
| `CASSE` | fichier trouvé à la casse près → 404 en ligne |
| `HORS-GABARIT` | chemin ne commençant pas par `/ressources/`, ou embed `![[...]]` Obsidian |
| `EXTERNE` | URL http(s), non vérifiée |
| `OK` | conforme |

Le script liste en outre les **orphelins** — fichiers de `content/ressources/` référencés par aucune fiche. **Il ne supprime jamais rien** : la liste est arbitrable.

### Usage

```bash
# Rapport complet, trié par fiche
node tools/audit-medias.mjs

# Ne montrer que les défauts
node tools/audit-medias.mjs --quiet
```

Exit 1 si au moins un `ABSENT` ou un `CASSE` est trouvé.

---

## audit-wikilinks.mjs

Extrait tous les `[[...]]` de `content/` et vérifie que leur cible existe.

### Résolution

Un lien est résolu s'il correspond à un chemin de fiche complet (`[[embarque/mcu/gpio]]`), à un nom de fichier sans extension (`[[gpio]]`), ou à un **alias** déclaré en front matter (`[[xiao]]` → `xiao-esp32-s3`). Un alias n'est pas un lien mort : il est reporté séparément.

### Statuts

| Statut | Signification |
|---|---|
| `MORT` | aucune cible, aucun alias → lien rouge en production |
| `CASSE` | cible trouvée à la casse près |
| `AMBIGU` | le nom court désigne plusieurs fiches |
| `ALIAS` | résolu par un alias front matter |

La distinction **mort** vs **volontairement rouge** (approche A : le rouge sert de TODO list) n'est pas mécanisable et reste à l'arbitrage.

### Usage

```bash
# Liens non résolus + alias, groupés par cible avec les fiches sources
node tools/audit-wikilinks.mjs

# Ajoute la liste des liens sains
node tools/audit-wikilinks.mjs --tout
```

Exit 1 si au moins un `MORT` ou un `CASSE` est trouvé.

---

## audit-portes-famille.mjs

Relève les liens émis par une fiche **non-famille** (trame, notion `[T]`, hub transverse) vers une fiche **de famille** (`arduino-*`, `micropython-*`, `esp32-*`, `esp8266-*`, `stm32-*`, `teensy-*`, `raspberry-pi-*`, `xiao-*`).

### Origine du problème

Une fiche transverse qui a besoin d'un concept mais n'a pas de notion `[T]` au-dessus **se rabat sur une famille**. Le lien fonctionne, aucun audit de liens morts ne le voit, et le parcours enseigne à un lecteur MicroPython un geste Arduino. Le motif a été repéré le 19/08 après deux occurrences ; le balayage complet en a rendu trente.

### Les deux formes

| Forme | Symptôme | Correction |
|---|---|---|
| **Créneau vide** | aucune notion `[T]` ne porte le concept | **créer** la notion |
| **Porte borgne** | la notion `[T]` existe mais ne cite qu'une famille | **ajouter** le lien jumeau |

Une porte est **légitime** quand la fiche cite *toutes* les familles qui portent le concept : renvoyer vers un module est le rôle du parcours, pas un défaut. C'est le seul critère mécanisable ; le partage créneau vide / porte borgne reste à l'arbitrage.

### Faux positifs écartés

Trois classes sont exclues par construction, chacune pour une raison structurelle et non de confort :

- **`cpp/*`** — le C++ *est* l'écosystème Arduino ; réclamer un jumeau MicroPython à `cpp-boucles` n'a pas de sens.
- **suffixe `arduino-core`** — `esp8266-arduino-core` et `stm32-arduino-core` partagent le suffixe sans partager le sujet.
- **`ide.md`** — apparie deux *langages*, pas huit familles de cartes.

Sans ces exclusions le script rend 45 résultats pour 30 réels. C'est la leçon du 18/08 : *un audit qui ignore une convention du dépôt produit du bruit à hauteur de ce qu'il ignore*, et ce bruit coûte des arbitrages inexistants.

### Usage

```bash
# Candidats à arbitrer, faux positifs comptés par motif
node tools/audit-portes-famille.mjs

# Ajoute le détail des faux positifs et la liste des portes légitimes
node tools/audit-portes-famille.mjs --tout
```

Le script rapporte toujours le **nombre de fiches balayées** avant le nombre de résultats. Exit 0 en toutes circonstances : aucun de ces constats ne bloque une publication.

---

## git-hooks/pre-commit

Hook pré-commit qui bloque tout commit introduisant des caractères invisibles dans les fichiers de pilotage.

### Activation (à faire une fois par poste)

```bash
git config core.hooksPath tools/git-hooks
```

Après activation, chaque `git commit` lance le check. Si invisibles détectés, le commit est refusé. Lancer `node tools/normalize-pilotage.js` pour corriger, puis recommit.

### Désactivation

```bash
git config --unset core.hooksPath
```

### Bypass ponctuel (déconseillé)

```bash
git commit --no-verify
```

À n'utiliser qu'en cas d'urgence (le problème NBSP reviendra à la session suivante).

---

## creer-fiche-en.mjs

Outil central du chantier de version anglaise. Six modes. Aucun n'écrit hors
de `content/en/`, sauf `--recaler` qui ne touche qu'une ligne de front matter.

### Génération

```bash
node tools/creer-fiche-en.mjs conduite/proj/concept.md [--dry] [--force]
```

Produit le **squelette** EN : la fiche française avec les seules
transformations structurelles appliquées (arborescence, suffixage `-en`,
`prerequis`, `draft`, marqueur `source_sha256`). Ce n'est pas une traduction.
Conséquence voulue : les trois compteurs sont égaux **par construction**, et
le contrôle de fin de fiche porte donc sur ce que la traduction a cassé.

### Contrôles

```bash
node tools/creer-fiche-en.mjs --recette     # compteurs sur tout content/, n'écrit rien
node tools/creer-fiche-en.mjs --controle    # chaque fiche EN contre sa source FR
node tools/creer-fiche-en.mjs --style       # typographie EN et ponctuation C109
node tools/creer-fiche-en.mjs --libelles    # libellé de wikilink contre title: de la cible
node tools/creer-fiche-en.mjs --front       # anneau 1 depuis les quatre index
node tools/creer-fiche-en.mjs --anneau 2    # anneau de rang N, plus la dette du front courant
```

`--front` et `--anneau` dimensionnent le chantier de traduction. `--anneau N`
généralise `--front` à la ligne près ; `--anneau 1` doit rendre le même chiffre
**brut** que `--front`, et c'est son banc de non-régression. **Brut** = cibles
atteintes depuis l'anneau précédent, **net** = brut moins les anneaux
`0..N-1` : un lot se dimensionne sur le net. La **dette** s'imprime à côté et
ne s'appelle jamais un anneau — c'est un état, pas un périmètre, et il grossit
à chaque fiche traduite. Le bloc **chevron** et les **cibles sans fiche**
sortent dans la même page.

⚠ **`--anneau` ignore la table d'alias** (mesure du 27/08 suite 4). Sa
résolution va du chemin complet au nom de fichier unique, sans lire le champ
`aliases:` du front matter. Ses six « cibles sans fiche » — `FC`, `FP`, `FS`,
`critere`, `flexibilite`, `niveau` — **ne sont pas des liens rouges** : ce sont
les six alias que `audit-wikilinks.mjs` résout correctement. À déduire du
bloc « cibles sans fiche » de l'anneau, que l'outil étiquette « liens rouges
côté français » — le compteur de **dette**, lui, n'est pas touché.

`--controle` compare les trois compteurs (liens, embeds, blocs de code) et
signale les **wikilinks non suffixés**, qui renvoient le lecteur anglophone
vers la fiche française sans qu'aucun compteur ne bronche.

`--style` prend zéro, une ou plusieurs fiches ; sans argument il lit tout
`content/en/`. Il rend **deux verdicts et deux listes de candidats** :

| Famille | Nature | Ce qui est signalé |
|---|---|---|
| typographie | verdict | espace française devant `; : ! ? %`, virgule décimale |
| virgule ambiguë | candidat | `1,000`, séparateur de milliers anglais ou décimale française |
| C109 créées en EN | verdict | la fiche EN porte plus d'occurrences que sa source FR |
| C109 de prose | candidat | tiret d'incise et point-virgule, le verbe conjugué décide |

Exemptions : blocs de code et code inline, titres de section et de callout,
lignes de tableau, texte alternatif d'embed (pour C109 seulement, sa
typographie reste contrôlée), premier tiret et point-virgule de fin d'item
sur une puce, et l'encart de langue C111 des deux accueils, qui est du
français délibéré.

`--libelles` est **bruyant par construction** : une reformulation légitime le
déclenche. Il rend une liste à lire, jamais un verdict. Les faux positifs de
morphologie (*machined* / *Machining*) et de sigle (*PoC* / *Proof of
concept*) sont écartés.

### Recalage

```powershell
$p = "en/conduite/proj/concept-en.md"
node tools/creer-fiche-en.mjs --recaler $p
```

Reconsigne le marqueur de source **sans toucher la traduction**, après qu'une
retouche FR a été reportée à la main. Refusé si les trois compteurs divergent.
Passer par une variable : un chemin long se coupe à l'affichage et PowerShell
exécute le résidu comme une commande.

---

## derive-traduction.mjs

```bash
node tools/derive-traduction.mjs [--tout] [--manquantes]
```

Liste les fiches EN dont la source FR a bougé, en comparant le
`source_sha256:` du front matter à l'empreinte du fichier source. Le remède à
la dérive n'est pas la synchronisation, c'est la détection.

---

## compter-mots.mjs

```bash
node tools/compter-mots.mjs                # corpus FR publié, traduit / restant
node tools/compter-mots.mjs --paires       # foisonnement FR → EN, fiche par fiche
node tools/compter-mots.mjs --lot a.md b.md
node tools/compter-mots.mjs --fiche conduite/proj/concept.md
```

**Tout chiffre de mots publié dans un prompt, un JOURNAL ou une clause de TODO
sort d'ici**, et se cite par le nom du script.

### Pourquoi un script plutôt qu'une phrase

C110 impose qu'une mesure de volume se publie avec sa règle de comptage. La
session du 23/08 (suite 4) a montré que la règle **écrite** ne suffit pas : deux
implémentations conformes à la même phrase divergent de 0,5 à 1,6 % par fiche,
soit **499 mots sur dix mesures** des trames du lot 2b, dont les fichiers
n'avaient pas bougé. Un script est la seule forme de règle qui ne puisse pas
diverger d'elle-même. Il réimprime la règle et son motif à chaque lancement,
pour que la sortie soit citable telle quelle.

### Périmètre par défaut

Les fiches FR **publiées** : hors `en/`, hors `templates/`, et hors toute fiche
en `draft: true` — c'est ce qui sort `ressources/index` depuis le 22/08. Le
restant à traduire est un **comptage** des fiches sans jumelle EN, pas une
soustraction : une somme se compense, un comptage non.

---

## parcours-etudiant.mjs

Construit le graphe des wikilinks de `content/` et mesure, depuis un point
d'entrée réaliste (l'accueil ou un hub de branche), **combien de clics**
séparent l'étudiant de la fiche qui répond à sa question — et si le chemin
existe. Douze scénarios sont tabulés ; **neuf ont une cible nommable** et sont
mesurés, trois partent d'un symptôme et se traversent à la main.

```bash
node tools/parcours-etudiant.mjs              # rapport complet
node tools/parcours-etudiant.mjs --scenarios  # scénarios seuls
node tools/parcours-etudiant.mjs --json       # sortie machine
```

Il connaît C62 (pipe échappé en cellule de tableau), les alias de front
matter, et exclut embeds, code, commentaires HTML et `templates/`.

### ⚠ Ses compteurs de santé ne se citent plus (27/08 suite 4)

La recette de référence — 242 fiches indexées, 1 lien mort, 0 cul-de-sac,
0 orpheline, 0 inatteignable — date du **20/08**, avant l'existence de
`content/en/`. Rien dans le script n'exclut la zone anglaise : la mesure du
27/08 rend **407 fiches indexées, 449 liens morts, 164 inatteignables** et
`en/index` **orpheline**.

Ce n'est pas un défaut du corpus. La bascule de langue des deux accueils
s'écrit en **chemin absolu** (`index -> /en/`, `en/index -> /`), forme que la
résolution du script ne suit pas : la seule porte vers l'anglais lui est
invisible, donc **tout le corpus EN sort isolé**. C'est le mécanisme des
69 faux positifs sur 70 du 20/08, sur un autre outil.

**Ce qui reste citable** : le bloc des scénarios, dont les entrées et les
cibles sont françaises. **Ce qui ne l'est pas** : fiches indexées, liens
morts, et les trois compteurs de santé, tant que la bascule de langue n'est
pas résolue.

---

## mesure-chevron.mjs

Pèse **l'angle mort du chevron** : les blocs de code clôturés à l'intérieur d'un callout, que le masquage de `compter-mots.mjs` ne voit pas.

### Origine du problème

Le masque de C110 est `/^```[\s\S]*?^```[^\n]*$/gm`, **ancré en début de ligne**. Une clôture préfixée par `> ` lui échappe, donc le contenu d'un bloc de code placé dans un callout est compté **comme de la prose**. `creer-fiche-en.mjs --anneau` signale les fiches concernées depuis le 25/08 (fonction `cloturesEnChevron`) mais ne pèse pas ce qu'elles contiennent. Ce script pèse.

**Trois symptômes pour un seul défaut**, et **trois expressions régulières distinctes** — donc trois correctifs et non un :

1. mots comptés en trop → volume de lot et foisonnement faussés ;
2. le **troisième compteur de `--controle` sous-compte** ces blocs → une jumelle EN peut en perdre un sans qu'aucun contrôle ne le voie ;
3. faux positifs C109 en aval dans `--style`.

Ce script mesure le 1 et **instrumente le 2** par l'appariement FR / EN de `--tout`.

### Ce qu'il ne réimplémente pas

`compterMots` est **importé** de `compter-mots.mjs`, où vit la règle figée de C110 : deux implémentations justes sous la même phrase divergent (499 mots sur dix mesures, 23/08 suite 4). Et le prédicat de clôture est une **copie verbatim** de `cloturesEnChevron` — son compteur par fiche **doit** rendre les mêmes valeurs que le bloc `chevron:` de `--anneau`, et c'est son banc de non-régression. Une divergence est un défaut de la copie, jamais une mesure.

### Colonnes

| Colonne | Sens |
|---|---|
| `cl` | clôtures ; **deux clôtures = un bloc**, un total impair signale une clôture orpheline |
| `tot` | mots C110 de la fiche, règle en vigueur, **inchangée** |
| `ded` | mots **dans** les blocs, contenu strictement entre les deux clôtures |
| `deh` | mots **hors** les blocs — **mesuré sur le texte privé des blocs, jamais soustrait** |
| `ECART` | `tot − deh − ded`, qui vaut **1 par bloc** et non 0 |

⚠ **`ECART` n'est pas un défaut.** Le troisième terme de la partition est la **ligne de clôture elle-même**, dont l'ouvrante porte l'étiquette de langage (`cpp`, `python`), que `compterMots` compte comme un mot. Une ouvrante sans étiquette rend 0. La contribution totale d'un bloc au `tot` vaut donc `ded + 1`.

### Usage

```bash
node tools/mesure-chevron.mjs --lot <chemin> ...     # fiches nommées
node tools/mesure-chevron.mjs --tout                 # tout content/, FR et EN, plus l appariement
node tools/mesure-chevron.mjs --extraits --lot ...   # entête de chaque bloc
node tools/mesure-chevron.mjs --montrer <chemin>     # les blocs en entier
```

`--tout` exclut `templates/`. **Le script n'écrit rien.**

### Sous C127

**Tout lot contenant une porteuse publie deux volumes** : `tot` pour la continuité historique, `deh` pour le dimensionnement et la lecture du foisonnement. Et `--tout` se relance **à chaque clôture de lot portant une porteuse**, pour que le symptôme 2 reste mesuré au lieu d'être supposé.

**État au 27/08 (suite 7)** : 34 porteuses FR, 68 blocs, 2 175 mots — 4,9 % des fiches concernées, 0,77 % du corpus. Côté EN, 9 porteuses, 18 blocs, **0 divergente sur 9 paires**. Toutes les porteuses sont dans `embarque/mcu/`, et **`arduino/` n'en porte aucune**.

---

## Notes Windows

- Git for Windows fournit Git Bash, donc le hook `#!/bin/sh` fonctionne sur les deux PC (pro et perso).
- Le script Node tourne sous Windows sans adaptation (chemins via `path.join`).
- Sur PC perso (chemin `C:\Users\turko\Documents\TheSkillCodex\`) comme sur PC pro (chemin `C:\Users\timothe.turko.ICAMAD\Documents\TheSkillCodex\`), l'activation est à faire indépendamment.
