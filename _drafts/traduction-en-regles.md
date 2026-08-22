# Traduction EN — règles de transformation et glossaire figé

> Fichier privé (non publié). Cadre du chantier de version anglaise, arbitré le 22/08.
> **Le français reste la source de vérité.** Toute correction de fond s'écrit d'abord côté FR.

---

## 1. Architecture

- **Un dépôt, une branche, un build.** Pas de branche `en`, pas de second dépôt.
- Arborescence miroir sous `content/en/` : `content/embarque/mcu/gpio.md` → `content/en/embarque/mcu/gpio-en.md`.
- **Tous les slugs EN portent le suffixe `-en`.** Motif : `markdownLinkResolution: "shortest"` résout un wikilink par son dernier segment de chemin ; deux fichiers `gpio.md` seraient ambigus et Quartz en choisirait un silencieusement. Le suffixe rend la cible unique **sans toucher à la configuration**, donc sans aucun risque pour le site français.
- **Exception mesurée : les huit `index.md` ne sont pas suffixés** (arbitrage Tim du 22/08 suite 2). `content/en/conduite/index.md` garde son nom et sert donc l'URL `/en/conduite/`. Suffixer l'aurait fait servir par une `FolderPage()` auto-générée, comme sur `ressources/` le même jour. Sans risque d'ambiguïté : **aucun des 4 323 wikilinks du dépôt ne vise `[[index]]` en forme courte**, les 37 qui visent un index passent tous par le chemin complet.
- **Les médias ne sont ni copiés ni traduits.** Les fiches EN pointent les mêmes chemins absolus `/ressources/img/<slug>/<fichier>`. Arbitrage Tim du 22/08 : les schémas restent en français, les étudiants Erasmus viennent aussi apprendre la langue.
- **Coûts assumés** : la recherche `Ctrl+K` et le graphe mélangent les deux langues ; le `locale` de Quartz étant global, le chrome du site (« Rechercher », « Rétroliens », « Graphe ») reste français pour tout le monde.

## 2. Ce qui se traduit, ce qui ne bouge pas

| Élément | Traitement |
|---|---|
| Prose, titres de section, corps des callouts | traduit |
| `title:` du front matter | traduit |
| `tags`, `aa`, `phases`, `draft` | **inchangés** |
| `prerequis:` | slugs suffixés `-en` |
| `aliases:` | traités au cas par cas (6 alias actifs seulement) |
| `[[slug\|Libellé]]` | slug suffixé `-en`, **libellé traduit** |
| `[[slug]]` sans libellé | devient `[[slug-en\|Libellé anglais]]` |
| `![alt](/ressources/img/…)` | **chemin inchangé à l'octet**, alt traduit |
| Blocs de code | code inchangé, **commentaires traduits** (C77) |
| Type de callout `[!warning]`, `[!tip]`… | inchangé |
| Mentions de capture C29 | traduites, la description reste celle de l'écran français |
| `[[fiche#Section]]` | ancre **conservée telle quelle et signalée**, à réécrire à la main (5 dans le dépôt) |
| `[texte](#section)` intra-page | **non vu par le suffixage**, à réécrire après traduction des titres (14 dans le dépôt) |
| `[texte](https://…)` | inchangé (43 liens externes) |

**Contrôle mécanique de fin de fiche** : le fichier EN doit porter exactement le même nombre de wikilinks, d'embeds et de blocs de code que sa source FR. Trois compteurs, trois égalités.

## 3. Publication différée

Les fiches EN sont créées en **`draft: true`** et le restent jusqu'à ce que les 243 existent. Motif : densité de 17,7 liens sortants par fiche — toute fiche EN publiée avant la fin serait truffée de liens rouges vers des cibles non encore créées. La convention « approche A » (le lien rouge sert de TODO list) vaut pour l'auteur, pas pour un étudiant qui n'a que cette version. Un balayage unique publie l'ensemble à la fin.

## 4. Style de la version anglaise

**C109 s'applique aussi côté EN, pour un motif différent.** En français, le tiret d'incise est proscrit comme marqueur d'écriture machine. En anglais, la construction est native de la prose éditée — mais le **caractère em-dash tapé** est rare dans l'écrit courant (forums, messages, documentation communautaire), où l'on emploie la virgule, les parenthèses ou le point. Il est en outre devenu un marqueur reconnaissable de texte généré. Conclusion : **pas d'em-dash en incise dans la prose EN**, ni de point-virgule de milieu de phrase. Une phrase, une idée, comme en français.

Restent licites, comme en français : le deux-points d'annonce, le point-virgule séparateur d'items de liste, le tiret de glose des listes `See also`.

**Le registre C65 ne survit pas à la traduction, et c'est accepté.** Le français oppose le « on » des trames du V au « tu » des fiches de réalisation ; l'anglais n'a qu'un « you ». Le contraste disparaît, la traduction s'en trouve simplifiée. Compensation minimale, sans effort : côté V, préférer les tournures impersonnelles (*the team documents…*, *the goal is to…*) ; côté réalisation, l'impératif direct (*wire the sensor…*).

**Les puces ne sont pas reprises**, ni en FR ni en EN. La liste est le lieu où l'écriture mécanique est légitime ; c'est la prose continue qui doit être naturelle.

## 5. Glossaire figé

Le glossaire n'est **pas** un dictionnaire mot à mot. C'est une liste fermée de trois registres, là où une dérive serait visible ou nuisible.

### 5.1 Chaînes structurelles — traduction unique, sans exception

Ce sont les plus répétées du wiki : une dérive s'y voit immédiatement. Comptages relevés sur les 243 fiches le 22/08.

| Français | Occurrences | Anglais |
|---|---:|---|
| Voir aussi | 234 | See also |
| À quoi ça sert ? | 164 | What is it for? |
| Pièges | 162 | Pitfalls |
| Raccrochage projet | 107 | Where it fits in the project |
| Procédure pas à pas | 76 | Step by step |
| Exercices | 39 | Exercises |
| Aller plus loin | 31 | Going further |
| Dans le projet | 21 | In the project |
| Comment ça marche ? | 15 | How does it work? |
| Pièges fréquents | 15 | Common pitfalls |
| Posture attendue | 13 | The right mindset |
| Démarche | 13 | Method |
| Conclusion | 13 | Wrap-up |
| Prendre en main | 10 | Getting started |
| Pendant cette phase, côté équipe | 8 | During this phase, on the team side |
| Tutoriels | 7 | Tutorials |
| Apprendre les bases | 6 | Learning the basics |
| Notions avancées | 6 | Advanced topics |
| Niveau ingénieur | 6 | Engineer level |
| Écosystème | 6 | Ecosystem |
| Panorama des cartes | 5 | Board overview |
| Objectif de l'étape | 5 | Goal of this step |
| Objectif de la phase | 5 | Goal of this phase |
| Ce qui relève d'ailleurs | 5 | What belongs elsewhere |

**Titres de callout** — mêmes contraintes, encore plus répétés.

| Français | Occurrences | Anglais |
|---|---:|---|
| `[!success] Corrigé` | 60 | `[!success] Solution` |
| `[!example] Exemple : projet bras 3 axes` | 54 | `[!example] Example: 3-axis arm project` |
| `[!warning] Attention` | 49 | `[!warning] Watch out` |
| `[!tip] Astuce` | 46 | `[!tip] Tip` |
| `[!info] Comment lire ce code` | 25 | `[!info] How to read this code` |
| `[!livrable] Livrable N/X — <phase>` | — | `[!livrable] Deliverable N/X — <phase>` |
| `[!question] Question centrale` | 5 | `[!question] The key question` |

### 5.2 Termes qui ne se traduisent pas

Outils et documents de la tradition française d'ingénierie, que l'étudiant Erasmus rencontrera dans la bouche de ses coéquipiers et dans les documents de l'école. Les angliciser l'isolerait de son équipe — l'inverse du but. **Terme français conservé, glosé en anglais à la première occurrence de chaque fiche.**

- **bête à cornes** — *the "horned beast" diagram, the French need-statement tool*
- **pieuvre** — *the "octopus" diagram, the French function-mapping tool*
- **GRAFCET** — sigle normalisé, inchangé
- **CdCF** / **cahier des charges fonctionnel** — *functional requirements specification*
- **NF X50-151**, **AFNOR** — références normatives, inchangées
- **FP / FS / FC** — inchangés, glosés une fois
- **Datron**, **Labo02** — noms propres de l'école

Même logique que la convention §1 qui conserve « stepper » pour exposer le vocabulaire fr/eng : ici on l'expose dans l'autre sens.

### 5.3 Traduction imposée — vocabulaire technique

Une seule forme admise dans tout le wiki. Liste à compléter au fil des lots, **jamais à improviser en cours de fiche**.

| Français | Anglais |
|---|---|
| jalon | milestone |
| livrable | deliverable |
| preuve de concept | proof of concept |
| cycle en V | V-model |
| fiche / trame / notion / tuto | page / framework page / concept page / tutorial |
| fil rouge | running example |
| écoconception | eco-design |
| brochage | pinout |
| téléverser | upload |
| bibliothèque | library |
| découplage | decoupling |
| diode de roue libre | flyback diode |
| chien de garde | watchdog |
| scrutation | polling |
| rebond / anti-rebond | bounce / debouncing |
| empreinte | footprint |
| pastille | pad |
| piste | track |
| strap | wire link |
| niveau de tension | logic level |
| tirage (pull-up / pull-down) | pull-up / pull-down |
| boucle ouverte / fermée | open loop / closed loop |
| machine à états | state machine |
| logigramme | flowchart |
| chronogramme | timing diagram |
| carte / carte fille | board / shield |
| fraisage, gravure mécanique | milling |
| simple face | single-sided |
| moniteur série | serial monitor |

## 6. Menus de logiciels — arbitrage 12 (b)

Les tutos d'outils citent des chemins d'interface en français, parce que le logiciel de l'école l'est. En version EN : **libellé français d'abord, anglais entre parenthèses**.

> *Fichier → Nouveau circuit vide* (File → New Blank Circuit)

Motif : traduire seul rendrait la fiche inutilisable devant l'écran de l'école ; garder le français seul priverait l'étudiant de toute prise pour chercher de l'aide en ligne. Concerne principalement `falstad`, `easyeda`, `kicad`, les fiches `*-prise-en-main` et `ide`.

## 7. Ordre des lots — arbitrage 13

1. **Parcours d'entrée** : `index`, `conduite/index`, `embarque/index`, `meca/index`, puis les cinq trames du V. Une version EN partielle est déjà navigable.
2. **Les 53 fiches courtes** (< 600 mots, **16 000 mots au total**), toutes familles confondues. Le glossaire §5 se rode sur du volume faible, là où une dérive de vocabulaire se rattrape à bas coût.
3. **Module par module**, dans l'ordre de `_drafts/relecture-ordre.md`.

Les fiches courtes étant dispersées dans tous les modules, le lot 2 laissera des `See also` pointant des cibles non encore créées. **Sans conséquence** : tout `content/en/` reste `draft: true` jusqu'à la fin (§3), donc aucun étudiant ne voit ces liens.

## 8. Procédé par fiche

1. Passe **C109** sur la fiche française (ponctuation seule, puces exclues).
2. Génération du **squelette EN** par script : arborescence, suffixage, marqueur de source.
3. **Traduction** phrase par phrase, glossaire ouvert.
4. **Trois compteurs** : liens, embeds, blocs de code — égalité FR/EN.
5. **Clic-test** en fin de lot.

**Volumétrie** : 243 fiches, 319 000 mots (prose + alt), médiane 1 192 mots par fiche. Environ **40 à 50 sessions**. `easyeda` (13 028 mots) en vaut deux à elle seule.

## 9. Outillage à écrire avant la fiche 1

**Les trois sont faits (22/08 suite 2).**

- `tools/creer-fiche-en.mjs` — génère le squelette EN depuis une fiche FR (§2). Le squelette n'est **pas** une traduction : c'est la fiche française avec les seules transformations structurelles appliquées, ce qui rend les trois compteurs égaux par construction et fait porter le contrôle de fin de fiche sur ce que la traduction a cassé, pas sur ce que le script aurait perdu. Recette mesurée sur les 243 fiches : **4 323 liens, 395 embeds, 376 blocs de code, 0 fiche divergente**. Options `--dry`, `--force`, `--recette`.
- `tools/derive-traduction.mjs` — liste les fiches EN dont la source FR a bougé. **Le remède à la dérive n'est pas la synchronisation, c'est la détection.**
- Ajouté aux `TARGETS` de `tools/normalize-pilotage.js`.

**Le marqueur de source est un `source_sha256` du contenu FR, pas un hash de commit** (arbitrage Tim du 22/08 suite 2). Motif : la fiche EN se crée **après** la passe C109, donc sur un fichier FR pas encore committé. `git log -1` y rendrait le commit d'*avant* la passe, et la totalité du lot serait signalée comme dérivée dès le premier push — le piège que le §8 voulait éviter, refermé un cran plus loin. Une empreinte de contenu est en outre indifférente au rythme de commit.
