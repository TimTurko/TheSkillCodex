# tools/ — Scripts de maintenance TheSkillCodex

Scripts hors MCP, exécutés manuellement (ou via git hook) sur le poste de travail.

---

## renommer-titres.mjs

Réécrit des `title:` de **front matter**, en **tout ou rien**, sous garde
d'unicité d'ancre (C116 (6)).

```
node tools/renommer-titres.mjs <table.tsv>            # contrôle seul, 0 écriture
node tools/renommer-titres.mjs <table.tsv> --ecrire   # applique
```

La table est un **TSV daté et jetable** — `chemin<TAB>ancien title:<TAB>nouveau
title:`, chemin relatif à `content/`, `#` en commentaire. L'ossature se
versionne, le contenu de la passe non (C126).

**Ce qu'il garantit** : l'ancre se cherche **dans le front matter seul** ; elle
doit y apparaître **exactement une fois** ; tout est validé avant que le premier
octet ne soit écrit, donc **une seule ancre absente arrête le lot entier** ;
seule la ligne `title:` change.

⚠ **La comparaison est sensible à la casse et aux accents**, là où
`titres-doublons.mjs` replie l'une et retire les autres. C'est délibéré : deux
tests négatifs du 29/08 (suite 7) — `Cabler` sans circonflexe, `Using a Shield`
avec une capitale de trop — ont chacun refusé un lot complet.

⚠ **Réécrire un `title:` FR met sa jumelle EN en dérive** (`source_sha256` porte
sur le fichier entier, front matter compris) : `creer-fiche-en.mjs --recaler`
fait partie du lot, faute de quoi la ligne « dérive 0 » ment.

---

## remplacer-passe.mjs

Passe de remplacement ancrée dans le **corps** d'une fiche, tout ou rien, avec
**invariants publiés avant écriture**. Écrit pour les passes C109.

```
node tools/remplacer-passe.mjs <table.tsv>            # contrôle seul
node tools/remplacer-passe.mjs <table.tsv> --ecrire
```

Même format de table et même garde d'unicité que `renommer-titres.mjs`, mais le
front matter est **recopié à l'octet** et n'est jamais fouillé.

**Trois invariants par fiche, imprimés avant / après** : caractères accentués,
points de code, lignes du corps. **L'invariant d'accents est un arrêt** : un
écart non nul refuse le lot. *Motif : É2 du 29/08 (suite 6), 147 caractères
accentués perdus par une passe C109, cinq contrôles au vert, trouvé par la
seule lecture.*

⚠ **Les accents se comptent en points de code sur un intervalle TROUÉ**,
`[À-ÖØ-öø-ÿŒœŸĀ-ſ]` : le bloc Latin-1 loge `×` U+00D7 et `÷` U+00F7 au milieu
des lettres. Un `grep` sur une classe de crochets compte des **octets** et rend
le double. Les deux défauts ont produit un chiffre publié faux, le second dans
la première version de ce fichier.

---

## titres-doublons.mjs

Liste les `title:` portés par plus d'une fiche, **côté FR et côté EN séparément**.
N'écrit rien.

```bash
node tools/titres-doublons.mjs
```

### Pourquoi il existe

Le chantier de nommage s'arbitre sur les paires de fiches qui portent le même
titre, et **aucun autre mode ne rend cette liste** : `--controle` compare une
fiche EN à sa source, `--libelles` compare un libellé de wikilink au `title:` de
sa cible. Ni l'un ni l'autre ne regarde deux `title:` entre eux. Le chiffre
« dix paires » a voyagé trois séances sans instrument avant d'être mesuré à
**neuf** le 29/08 (suite 5).

### Comment le lire

Le regroupement se fait sur une **forme normalisée** (accents retirés, casse
repliée, ponctuation réduite à un blanc) ; les formes **brutes** s'affichent. Un
groupe est un **candidat à lire**, jamais un verdict : deux fiches de familles
différentes peuvent légitimement porter le même titre.

⚠ **Le contrôle utile est la comparaison des deux côtés** (amendement C125 du
29/08 suite 5). Un groupe présent **d'un seul côté** est un défaut de report :
soit la traduction a inventé une distinction que la source ne porte pas, soit
elle en a effacé une. L'égalité des deux totaux ne prouve rien — mesuré le
29/08 : 9 groupes de chaque côté, **8 seulement en commun**.

`templates/` est exclu. Les fiches sans `title:` sont comptées à part et jamais
regroupées.

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

## livrer.ps1

Enchaîne en une instruction le bloc C121 de fin de séance : hygiène, `add`, `commit`, `push`.

```powershell
powershell -ExecutionPolicy Bypass -File tools\livrer.ps1 "mon message de commit"
powershell -ExecutionPolicy Bypass -File tools\livrer.ps1 "message" -Oui        # sans confirmation
powershell -ExecutionPolicy Bypass -File tools\livrer.ps1 "message" -SansPush   # commit local seul
```

### Ce qu'il ne fait pas

**Il ne décide de rien.** C121 reste entier : Claude fournit la ligne, Tim la
lance, lit la liste nominative de ce qui va être commité, et confirme. Le script
ne remplace pas la revue, il supprime le collage de quatre commandes.

### Gardes, dans l'ordre où elles s'appliquent

| # | Garde | Effet si elle mord |
|---|---|---|
| 1 | répertoire = dépôt TheSkillCodex | arrêt |
| 2 | message présent, ≥ 10 caractères, **ASCII strict** | arrêt |
| 3 | `core.hooksPath` armé sur `tools/git-hooks` | avertissement seul |
| 4 | `normalize-pilotage.js` rend 0 | arrêt **avant** le `add` |
| 5 | confirmation après lecture de la liste | abandon sans commit |
| 6 | arbre non propre | sortie 0, pas de commit vide |
| 7 | `push` réussi | arrêt, en signalant que le commit est **local** |

⚠ **L'ordre 4 avant 5 n'est pas cosmétique** : `normalize-pilotage` corrige des
fichiers, donc il doit tourner **avant** `git add -A`, sinon ses corrections
restent hors du commit. C'est l'ordre du bloc C121 d'origine, figé ici.

⚠ **`-Oui` saute la revue**, et c'est la seule garde que le script laisse
désarmer. À réserver à un contenu déjà relu dans la même minute.

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

Outil central du chantier de version anglaise. Sept modes. Aucun n'écrit hors
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
node tools/creer-fiche-en.mjs --alt         # alt d'embed EN contre alt FR de même rang
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

`--alt` est le **quatrième tamis**, ouvert le 29/08 (suite 6) sur l'arbitrage Tim ③(c). Jusque-là l'alt d'un embed n'était balayé **que par un tamis sur quatre** : `--style` le range en *hors périmètre* pour les candidats C109 et n'y fait mordre que la typographie française, `audit-medias.mjs` le capture dans son motif mais n'audite que le **chemin**, `--controle` ne compare que des **nombres** d'embeds. **Un alt français à typographie propre ne déclenchait donc rien** — les deux seuls trouvés jusqu'au 29/08 l'ont été à la main, en deux séances.

Le mode compare l'alt EN à l'alt FR de **même rang** dans la source et rend **trois verdicts mécaniques** :

| Verdict | Ce qui est signalé |
|---|---|
| `IDENTIQUE` | l'alt EN reproduit l'alt FR **à l'octet** — alt non traduit |
| `VIDE` | l'alt EN est vide une fois le suffixe de taille `\|NNN` retiré |
| `MOT FR` | lettre latine **accentuée**, ou mot d'une **liste nommée** de mots-outils français |

Le suffixe de taille `|600` fait partie de l'alt **brut**, donc du test `IDENTIQUE`, et sort des deux autres — sans quoi un alt réduit à `|600` passerait pour rempli. La liste `MOTS_FR` est **purgée des homographes anglais** (`a`, `an`, `on`, `in`, `son`, `ton`, `plus`, `car`, `or`, `pas`, `no`, `aux`, `mode`, `note`, `page`, `sale`, `train`), faute de quoi le motif crierait sur de l'anglais correct.

⚠ **`À-ÿ` n'est pas un intervalle de lettres.** Le premier jet du motif d'accent s'écrivait `/[À-ÿŒœŸ]/u` ; l'intervalle **contient `×` U+00D7 et `÷` U+00F7**, deux signes mathématiques logés au milieu du bloc Latin-1, et il a crié sur deux alt anglais irréprochables (« 3 solutions × 5 weighted criteria »). Il s'écrit `/[À-ÖØ-öø-ÿŒœŸ]/u`.

**Exemptions nommées.** `EXEMPTIONS_ALT` est une `Map` d'une entrée par fiche, **motif écrit à côté**. La première est `tinkercad-en` : les formes françaises qui y subsistent — `Créer un nouveau Circuit`, `Blocs`, `Texte` — sont des **libellés d'interface incrustés dans la capture**, donc du **C113 appliqué à l'image**, et l'arbitrage Tim du 29/08 (suite 5) est que rien ne bouge, alt compris. Sans l'entrée, le mode remonterait la paire à chaque lancement.

⚠ **Ce que le mode ne sait pas séparer.** Mesure d'ouverture du 29/08 (suite 6), sur 188 fiches EN et 245 embeds : **1 `IDENTIQUE`, 0 `VIDE`, 14 `MOT FR`**. Sur les 15, **un seul est un défaut vrai** — et c'est celui que `IDENTIQUE` attrapait déjà. Les treize autres sont la classe `tinkercad` : neuf libellés d'IDE ou de Windows, trois étiquettes de SVG citées, un nom français de méthode. **`MOT FR` n'a trouvé aucun défaut que `IDENTIQUE` ne trouvait pas**, et il remontera ces treize à chaque lancement tant qu'ils ne sont pas exemptés nommément.

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
| `etiq` | mots des **étiquettes de langage** des ouvertures appariées — mesurées sur les étiquettes elles-mêmes, pas déduites de `tot − deh − ded` |
| `ECART` | `tot − deh − ded`. **Ne s'imprime que s'il diffère de `etiq`** ; il est alors suivi de `(etiq N)` |

⚠ **`ECART` n'est pas un défaut.** Le troisième terme de la partition est la **ligne de clôture elle-même**, dont l'ouvrante porte l'étiquette de langage (`cpp`, `python`), que `compterMots` compte comme un mot. Une ouvrante sans étiquette rend 0. La contribution totale d'un bloc au `tot` vaut donc `ded + 1`.

**L'identité vraie, et ce que l'en-tête en dit depuis le 29/08 (suite 6)** — arbitrage Tim ①(b) du 29/08 (suite 5). L'en-tête écrivait « `ECART` doit être 0 partout » et `ECART` était non nul sur **49 porteuses sur 50** : c'était l'en-tête qui avait tort. Il énonce désormais

```
tot − deh − ded = etiq
```

et le script **compte** les étiquettes au lieu de les supposer. `ECART` n'apparaît donc plus que lorsqu'il s'écarte de `etiq` — clôture orpheline, texte après une clôture, ouverture qui n'est pas un fence. **Mesuré le 29/08 (suite 6)** sur les 53 porteuses : `etiq` **67 FR / 40 EN**, égal aux sommes d'`ECART` du relevé précédent, **zéro ligne signalée**, et `cl / bl / tot / ded / deh` **inchangées sur les 53** (banc de non-régression, sorties `chevron-2908-avant.txt` et `chevron-2908-apres.txt`).

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
