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

## 3. Publication — arbitrage révisé le 22/08 (suite 2)

**Les fiches EN sont créées en `draft: false` et publiées immédiatement.** Arbitrage Tim, contre ma recommandation. Motifs retenus : le wiki n'est connu que de son auteur, et un aller-retour `build --serve` par fiche coûte plus cher en rythme que ne coûtent quelques liens rouges. Le script porte la valeur dans sa constante `DRAFT_EN`.

⚠ **À rebasculer sur `draft: true` quand le corpus EN dépasse la vingtaine de fiches.** Le coût de la publication anticipée n'est pas la réputation, c'est **l'index de recherche** : chaque fiche EN publiée y entre. À 4 fiches sur 246, rien ne bouge dans la bande top-3 ; à 100, taper `concept` remontera systématiquement le doublon anglais. Observation de Tim qui borne l'objection : le **vocabulaire général diverge** assez pour limiter les doublons (`project` ne rend aucune fiche FR), **mais le lexique technique se recouvre exactement** — `concept`, `interface`, `module`, `PID`, `GPIO`, `PWM`, `I2C`, `firmware`, `PCB`, `GRAFCET` — et c'est celui des requêtes réelles.

**`RemoveDrafts` est désormais conditionnel** dans `quartz.config.ts` : un build lancé avec `QUARTZ_DRAFTS=1` rend les fiches `draft: true` visibles en local **sans les publier**, le build de publication les excluant toujours. Cela sépare « pas publié » de « pas constructible en local », et resservira à la rebascule.

*Rédaction antérieure, conservée pour trace — les fiches EN devaient rester `draft: true` jusqu'à ce que les 243 existent, au motif d'une densité de 17,7 liens sortants par fiche.*

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
| Sur le fil | 3 | On the wire |
| En pratique | 3 | In practice |
| La mise en œuvre est traitée dans X côté Y | — | Putting it to work is covered in X for Y |
| *(→ notion [[x]])* (marqueur C32) | — | *(→ concept page [[x]])* |
| *(transverse)* | — | *(cross-cutting)* |
| Notions couvertes | — | Concepts covered |

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
- **AMDEC** — *the French acronym for FMEA*. Même méthode, même tableau, sigle traduit terme à terme. **Ne pas gloser « the French FMEA »**, qui laisserait croire à une variante nationale là où il n'y a qu'un sigle traduit : un étudiant qui a déjà pratiqué la FMEA doit la reconnaître, pas croire à autre chose.
- **GRAFCET** — sigle normalisé, inchangé
- **CdCF** / **cahier des charges fonctionnel** — *functional requirements specification*
- **NF X50-151**, **AFNOR** — références normatives, inchangées
- **FP / FS / FC** — inchangés, glosés une fois
- **Datron**, **Labo02** — noms propres de l'école
- **écodesign** — *the French design-discipline sense of the word*. **Terme français conservé** (arbitrage Tim du 23/08 suite, option a), parce que l'anglais *ecodesign* désigne ce que le wiki appelle **écoconception** : la directive européenne *Ecodesign* est officiellement la directive Écoconception en français, et la fiche `ecodesign` consacre une section à ce faux ami. Traduire le mot **inverserait le sens de la fiche qui l'enseigne**. Glose à la première occurrence, *eco-design* restant réservé à `ecoconception`.

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
| maître (bus) | controller |
| esclave (bus) | peripheral |
| tirage (pull-up / pull-down) | pull-up / pull-down |
| boucle ouverte / fermée | open loop / closed loop |
| machine à états | state machine |
| logigramme | flowchart |
| chronogramme | timing diagram |
| carte / carte fille | board / shield |
| fraisage, gravure mécanique | milling |
| simple face | single-sided |
| moniteur série | serial monitor |
| dossier technique | technical design file |
| soutenance | final presentation |
| REX / retour d'expérience | lessons learned |
| écart (de qualification) | deviation |
| décomposition fonctionnelle | functional breakdown |
| schéma bloc fonctionnel | functional block diagram |
| chaîne d'énergie / d'information | energy chain / information chain |
| pré-dimensionnement | rough sizing |
| plan de qualification | qualification plan |
| ordinateur monocarte | single-board computer |
| schéma de principe | schematic |
| carte fabricable | manufacturable board |
| contrôleur (= le microcontrôleur) | microcontroller |
| comparateur | dial indicator |
| pied à coulisse | vernier caliper |
| battement (métrologie) | runout |
| jeu (d'une articulation) | play |
| étalonnage | calibration |
| cote (dimension) | dimension |
| usinage | machining |
| brut | blank |
| gammes d'usinage | process plans |
| état de surface | surface finish |
| EPI | PPE |
| soudure (à l'étain) | soldering |
| carte à pastilles | perfboard |
| CMS | SMD |
| impression 3D | 3D printing |
| fabrication additive / soustractive | additive / subtractive manufacturing |
| remplissage (impression) | infill |
| s'écrouler (alimentation) | to sag |
| sur pile | battery-powered |
| débit (radio) | data rate |
| rapport cyclique | duty cycle |
| fréquence de hachage | switching frequency |
| résolution / précision | resolution / accuracy |
| précision, justesse, fidélité | accuracy, trueness, precision |
| gestion de projet | project planning and tracking |
| démarche projet | project method |
| parcours projet | project path |
| commanditaire | sponsor |
| relation client | client relationship |
| archivage projet | project archiving |
| revue de code | code review |
| unité SI | SI unit |
| animation (domaine MEO) | facilitation |
| entraxe | centre distance |
| faisceau (câblage) | harness |
| rétroplanning | backward planning |
| lot (WBS) | work package |
| état de l'art technique | technical state of the art |
| matrice de risques | risk matrix |
| ACV / analyse du cycle de vie | LCA / life-cycle assessment |
| DEEE | WEEE |

**Les quatre entrées `dossier technique`, `soutenance`, `REX`, `écart` sont validées en bloc** (arbitrage Tim du 23/08, option a). Périmètres mesurés avant validation, hors `templates/` et hors `en/` : `dossier technique` 224 occurrences sur 50 fiches, `écart` 103 sur 39, `soutenance` 63 sur 13, `REX` et « retour d'expérience » 26 sur 5.

Trois formes dérivées figées à cette occasion, parce qu'elles ne se déduisent pas de l'entrée mère :

| Forme dérivée | Anglais | Motif |
|---|---|---|
| dossier technique CE | CE technical file | *technical file* seul est le terme réglementaire du marquage CE, employé par `marquage-ce` ; c'est le qualificatif *design* de l'entrée mère qui évite la collision |
| séance de REX | lessons learned review | déjà en production dans `en/conduite/index` |
| soutenance finale | final presentation | le *final* ne se redouble pas |

**« Maître » et « esclave » passent en *controller* et *peripheral*** (arbitrage Tim du 23/08, option b). 37 occurrences sur 9 fiches. Motif : les spécifications actuelles ont basculé, NXP disant *controller* et *target* pour l'I²C, la plupart des sources SPI *controller* et *peripheral*. Une paire unique est retenue pour les deux bus, parce que `i2c`, `spi` et `uart` sont des fiches sœurs lues à la suite depuis le même hub et qu'un lecteur n'a pas à apprendre deux vocabulaires pour un même concept.

**Le terme historique se mentionne une fois par fiche**, parce que l'étudiant le rencontrera partout ailleurs : dans les datasheets, dans les noms de fonctions des bibliothèques Arduino et MicroPython, et dans les schémas français du wiki, qui gardent « maître ». Forme retenue : *the controller (historically called the master)*, à la première occurrence, puis *controller* seul.

**⚠ « Contrôleur » ne se traduit pas toujours par *controller* (23/08).** Le mot français désigne **deux objets distincts** dans le corpus : le **maître du bus** dans `i2c` et `spi`, et le **microcontrôleur lui-même**, abrégé, dans `wifi`, `lora` et les hubs de famille. Traduire les deux par *controller* produit, dans une même branche du wiki, une phrase où « le contrôleur redémarre » se lit comme « le maître du bus redémarre ». **Rendre le second par *microcontroller*, systématiquement.**

**Orthographe : anglais britannique par défaut** (*centimetres*, *organise*, *metres*), **sauf sur les termes techniques dont la forme américaine domine la littérature du domaine** — *analog* et non *analogue*, *caliper* et non *calliper*. Motif identique à celui du « stepper » du §1, pris dans l'autre sens : l'étudiant tape `analogRead()`, lit *analog input* sur ses datasheets et voit `ANALOG IN` sérigraphié sur sa carte. Écrire *analogue* créerait un décalage avec ce qu'il a sous les yeux.

**La glose d'un sigle anglophone disparaît en traduction.** `adc` ouvre en français sur « *Analog-to-Digital Converter*, convertisseur analogique-numérique » : la seconde moitié n'a plus d'objet en anglais, où elle répéterait le sigle qu'elle explique. Vaut pour `adc`, `pwm`, `ble`, `led`, `gpio` et tous les sigles anglophones glosés en français. **Ne touche aucun compteur**, et un traducteur mécanique laisserait la redondance.

**Typographie des listes.** Les listes numérotées gardent leur ponctuation mécanique (point-virgule de fin d'item, tiret de glose), C109 ne les visant pas. En revanche l'**espace insécable française disparaît** : en anglais le point-virgule et le deux-points se collent au mot. Ajustement de typographie, pas de ponctuation.

**Les séparateurs décimaux basculent** : `4,7 kΩ` devient `4.7 kΩ`, `3,3 V` devient `3.3 V`, y compris dans les alt d'images.

**AMDEC est promue au §5.2** (arbitrage Tim du 23/08, option c), glose recalée en *the French acronym for FMEA*. 41 occurrences sur 6 fiches. Report fait dans `en/conduite/index`.

## 6. Menus de logiciels — arbitrage 12 (b)

Les tutos d'outils citent des chemins d'interface en français, parce que le logiciel de l'école l'est. En version EN : **libellé français d'abord, anglais entre parenthèses**.

> *Fichier → Nouveau circuit vide* (File → New Blank Circuit)

Motif : traduire seul rendrait la fiche inutilisable devant l'écran de l'école ; garder le français seul priverait l'étudiant de toute prise pour chercher de l'aide en ligne. Concerne principalement `falstad`, `easyeda`, `kicad`, les fiches `*-prise-en-main` et `ide`.

## 7. Ordre des lots — arbitrage révisé le 22/08 (suite 2)

**Progression par proximité de lien, plus module par module.** Arbitrage Tim. Le front de traduction reste connexe : un anglophone ne rencontre pas de lien mort tant qu'il ne quitte pas la zone traduite. Conséquence directe du passage en `draft: false` — les liens rouges sont désormais visibles.

⚠ **Le premier anneau depuis les quatre index fait 79 fiches et 104 000 mots, soit le tiers du corpus.** « Aucun lien mort depuis l'accueil » n'est donc pas un petit lot connexe : c'est le prix réel de la navigabilité, mesuré avant engagement.

1. **Lot 1 — les quatre index. FAIT le 22/08 (suite 2), 2 939 mots.**
2. **Lot 2a — les 23 fiches courtes du front, 5 791 mots** (6 476 avec les trois index de branche, remesuré le 23/08 sous la règle C110 du §8 ; **6 515 après la passe C109**, qui a coûté 39 mots)**. FAIT — 26 fiches traduites, 6 996 mots EN, dont 5 340 le 23/08 et 1 656 le 23/08 (suite).** `i2c`, `spi`, `uart`, `adc`, `pwm`, `wifi`, `ble`, `lora`, `zigbee`, `memoire`, `cpp`, `micropython-langage`, les six `meca`, les cinq `conduite/meo`, `conduite/ese/index`, `conduite/proj/index`. **Meilleur rapport liens fermés par mot traduit de tout le chantier** : 23 liens fermés pour le prix d'une seule trame. Rode le glossaire à bas coût, comme le prévoyait le lot 2 d'origine.
3. **Lot 2b — les cinq trames du V, ≈ 28 600 mots**, dans l'ordre réel de poids : `preuve-de-concept` (6 382 mots, **la plus lourde**), `specification-technique`, `concept`, `dossier-technique`, `integration-et-tests`. C'est là que se juge la compensation du registre C65 perdu (§4).
4. **Lot 2c — le reste du front, ≈ 70 000 mots**, dominé par `securite-et-qualite` (4 080), `lire-une-datasheet` (3 308), `ecoconception` (3 301).
5. **Anneaux suivants**, recalculés depuis le front atteint.

*Rédaction antérieure, conservée pour trace — l'ordre était : parcours d'entrée, puis les 53 fiches courtes du corpus entier (16 000 mots), puis module par module dans l'ordre de `_drafts/relecture-ordre.md`.*

## 8. Procédé par fiche

1. Passe **C109** sur la fiche française (ponctuation seule, puces exclues).
2. Génération du **squelette EN** par script : arborescence, suffixage, marqueur de source.
3. **Traduction** phrase par phrase, glossaire ouvert.
4. **Trois compteurs** : liens, embeds, blocs de code — égalité FR/EN.
5. **Clic-test** en fin de lot.

**Volumétrie, remesurée le 23/08.** Règle : mots hors front matter, hors blocs de code clôturés, code inline inclus, un mot étant une suite de caractères alphanumériques, apostrophes et traits d'union. Périmètre : les 242 fiches FR publiées, hors `templates/`, hors `en/`, hors `ressources/index` en `draft: true`.

| Grandeur | Valeur | Chiffre hérité |
|---|---:|---:|
| Fiches FR publiées | 242 | 243 |
| Mots FR | **291 099** | 319 000 |
| Médiane par fiche | 1 088 | 1 192 |
| Fiche la plus lourde (`easyeda`) | 9 775 | 13 028 |

Les chiffres hérités étaient tous hauts de 8 à 25 %, l'écart venant de ce que leur règle n'était pas écrite. Reste à traduire après le lot 1 : **288 050 mots**. `easyeda` vaut toujours deux sessions à elle seule.

**Rythme mesuré** : le nombre de mots traduits ouvre chaque entrée du JOURNAL depuis le 22/08 (suite 2). La trajectoire se lira d'elle-même au bout de trois sessions, plutôt que de se discuter.

## 9. Outillage à écrire avant la fiche 1

**Les trois sont faits (22/08 suite 2).**

- `tools/creer-fiche-en.mjs` — génère le squelette EN depuis une fiche FR (§2). Le squelette n'est **pas** une traduction : c'est la fiche française avec les seules transformations structurelles appliquées, ce qui rend les trois compteurs égaux par construction et fait porter le contrôle de fin de fiche sur ce que la traduction a cassé, pas sur ce que le script aurait perdu. Recette mesurée sur les 243 fiches : **4 323 liens, 395 embeds, 376 blocs de code, 0 fiche divergente**. Options `--dry`, `--force`, `--recette`.
- `tools/derive-traduction.mjs` — liste les fiches EN dont la source FR a bougé. **Le remède à la dérive n'est pas la synchronisation, c'est la détection.** Options `--tout`, `--manquantes`.
- Ajouté aux `TARGETS` de `tools/normalize-pilotage.js`.

**Deux modes ajoutés en cours de lot 1, parce que le procédé du §8 n'était outillé nulle part.**

- `--controle` compare chaque fiche EN à sa source sur les trois compteurs. À la génération l'égalité est vraie par construction : c'est **après la traduction** qu'un lien disparaît dans une reformulation, et c'était précisément le moment où rien ne regardait.
- `--recaler <fiche EN>` reconsigne le marqueur **sans toucher à la traduction**, après qu'une retouche FR a été reportée à la main. Sans lui, la seule sortie était de régénérer le squelette, donc d'écraser la traduction — un sha256 ne s'écrit pas à la main. **Garde-fou : le recalage est refusé si les trois compteurs divergent**, sinon il ferait disparaître la dérive de l'écran sans l'avoir traitée.

**Le marqueur de source est un `source_sha256` du contenu FR, pas un hash de commit** (arbitrage Tim du 22/08 suite 2). Motif : la fiche EN se crée **après** la passe C109, donc sur un fichier FR pas encore committé. `git log -1` y rendrait le commit d'*avant* la passe, et la totalité du lot serait signalée comme dérivée dès le premier push — le piège que le §8 voulait éviter, refermé un cran plus loin. Une empreinte de contenu est en outre indifférente au rythme de commit.
