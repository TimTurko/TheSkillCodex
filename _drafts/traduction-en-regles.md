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

**C112 s'applique aussi côté EN, et c'est là qu'elle se voit le plus.** Traduire mot lourd par mot lourd est le réflexe par défaut : *opposable* et *défendable* sont devenus **14 occurrences de *defensible*** dans le premier jet de `preuve-de-concept-en`. Une fois la source variée, l'anglais retombe seul sur *holds up*, *stand behind*, *verifiable*, *makes the proof stick*, *checkable by someone else*. Le test est le même que côté français, appliqué aux forums anglophones : *un développeur écrirait-il ça sur Stack Overflow, ou seulement dans un livrable ?* Corollaire identique : **le verbe survit, l'adjectif tombe** (*to defend a decision* reste, *a defensible decision* tombe).

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
| Continu (sous-liste de `[!livrable]` transverse) | — | Ongoing |
| Jalonné (sous-liste de `[!livrable]` transverse) | — | At milestones |
| fil transverse (substantif) | — | cross-cutting thread |
| *(transverse)* (marqueur d'index) | — | *(cross-cutting)* |
| *(fil transverse)* (glose de *Voir aussi*) | — | *(cross-cutting thread)* |
| `[!failure] Mauvais` / `[!warning] Moyen` / `[!example] Bon` | 3 | `[!failure] Poor` / `[!warning] Fair` / `[!example] Good` |
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
| `[!info] À retenir` | — | `[!info] Worth knowing` |

**Le pluriel du callout `[!livrable]` se traduit.** `Livrables N/X` donne `Deliverables N/X`, `Livrable N/X` donne `Deliverable N/X` : la fiche alterne les deux selon le nombre d'items, et l'anglais suit. De même `Exemple : projet couveuse` donne `Example: incubator project`, sur le patron déjà figé du fil rouge.

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
| sûreté de fonctionnement | dependability |
| fonction technique | technical function |
| parade (organe de sécurité) | safeguard |
| sobriété énergétique | energy frugality |
| sobriété logicielle | software frugality |
| démontabilité | demountability |
| durée de vie (composant) | service life |
| matrice éco-critères | eco-criteria matrix |
| plan de revues | review plan |
| compte-rendu (de réunion, de revue) | minutes |
| registre d'engagements | commitment log |
| point hebdomadaire | weekly meeting |
| revue de phase | phase review |
| carter | guard |
| butée mécanique | mechanical hard stop |
| arrêt d'urgence | emergency stop |
| sérigraphie (PCB) | silkscreen |
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
| asservissement | closed-loop control |
| asservir (une grandeur) | to control in closed loop |
| réguler, régulation | to control, control |
| régulateur, correcteur | controller |
| consigne | setpoint |
| grandeur réglée | controlled variable |
| erreur résiduelle | steady-state error |
| emballement / anti-emballement | windup / anti-windup |
| dépassement (asservissement) | overshoot |
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
| Gantt, diagramme de Gantt | Gantt chart |
| lot (WBS) | work package |
| état de l'art technique | technical state of the art |
| matrice de risques | risk matrix |
| ACV / analyse du cycle de vie | LCA / life-cycle assessment |
| DEEE | WEEE |
| incertitude (objet de travail du projet) | unknown |
| incertitude (métrologie, résiduelle) | uncertainty |
| énoncé testable | testable statement |
| critère de succès | success criterion |
| banc (de test) | test bench |
| répétabilité | repeatability |
| encadrant | supervisor |
| responsable projet | project coordinator |
| équipier | teammate |
| constater / statuer | to observe / to rule |
| retour amont | upstream return |
| chaîne amont / aval (du V) | descending / ascending branch |
| fonction de service | service function |
| cahier de bord | logbook |
| revue à blanc | dry-run review |
| tour de table | round-table |
| masse étalonnée | calibrated mass |
| bras de levier | lever arm |
| platine d'ancrage | mounting plate |
| matage (d'un logement) | crushing |
| verrou technologique | technological barrier |
| partie prenante | stakeholder |
| note de cadrage | scoping note |
| matière d'œuvre | object acted on |
| milieux environnants (pieuvre) | surrounding media |
| fonction principale / secondaire / contrainte | main / secondary / constraint function |
| critère (triplet NF X50-151) | criterion |
| niveau (triplet NF X50-151) | level |
| flexibilité (triplet NF X50-151) | flexibility |
| F0 / F1 / F2 / F3 | Mandatory / Barely negotiable / Negotiable / Very negotiable |
| négociabilité | negotiability |
| sur-spécification | over-specification |
| probabilité x gravité (risque) | likelihood x severity |
| parade (risque) | response |
| revue de CdCF | CdCF review |
| bon de commande | purchase order |
| nomenclature (disciplinaire) | parts list |
| BOM (agrégée) | BOM |
| enveloppe budget | budget envelope |
| hors catalogue | off catalogue |
| HT / TTC | excl. VAT / incl. VAT |
| lead time | lead time (inchangé) |
| validateur | approver |
| plans cotés | dimensioned drawings |
| schéma câblé | wiring schematic |
| routage PCB | PCB layout |
| portée de roulement | bearing seat |
| alésage d'axe | shaft bore |
| visserie | fasteners |
| gabarit (de vérification) | check jig |
| essai à blanc d'assemblage | dry-fit assembly |
| réception (livraison) | goods-in |
| bon de livraison | delivery note |
| non-conformité | non-conformity |
| pyramide de tests | test pyramid |
| butée logicielle | software limit |
| à-coup | judder |
| bilan (de clôture) | assessment |
| soutenance, jury | final presentation, panel |
| matrice de décision | decision matrix |
| grandeur dimensionnante | sizing figure |
| marge de calcul | compute headroom |
| entrées-sorties | I/O |
| fin de course (le composant) | limit switch |
| fin de course (la position) | travel limit |
| entrée TOR / sortie TOR | on/off input / on/off output |
| adaptation de niveau | level shifting |
| porte (d'entrée d'un module, C56) | door |
| Arduino-core | Arduino core |
| noyau (d'un core de famille) | core |
| base installée | installed base |
| programmateur | programmer |
| ordonnanceur | scheduler |
| arbre d'horloge | clock tree |
| schéma cinématique | kinematic diagram |
| liaison (mécanique) | joint |
| liaison pivot | revolute joint |
| liaison glissière | prismatic joint |
| encastrement | fixed joint |
| bâti | frame |
| degré de liberté (ddl) | degree of freedom (DOF) |
| calcul de mobilité | mobility calculation |
| torseur cinématique | kinematic screw |
| simulation électronique | circuit simulation |
| point de fonctionnement | operating point |
| analyse transitoire | transient analysis |
| analyse fréquentielle | frequency analysis |
| sonde (de simulation) | probe |
| pont diviseur | voltage divider |
| bande passante | bandwidth |
| fréquence de coupure | cut-off frequency |
| temps de montée | rise time |
| constante de temps | time constant |
| régime établi | steady state |
| label de net | net label |
| effecteur | end effector |
| frontière du système | system boundary |
| alléger (une géométrie) | to lighten |
| nervure / nervurer | rib / to rib |
| évider | to hollow out |
| axe neutre | neutral axis |
| raideur | stiffness |
| flèche (flexion) | deflection |
| entretoise | spacer |
| équerre | bracket |

**⚠ *Controller* reçoit une TROISIÈME source française, et la collision est mesurée à zéro (26/08 suite 4).** Le mot rend déjà `maître (bus)` ; il rend désormais aussi **correcteur** et **régulateur**, qui sont le terme du domaine : *PID controller* n'a pas de synonyme utilisable, *compensator* désignant autre chose et *corrector* étant un gallicisme. **Balayage avant écriture : aucune fiche du corpus ne porte à la fois `correcteur` et `maître`.** Les six fiches à `correcteur` sont `asservissement`, `schema-bloc-fonctionnel`, `filtrage`, `arduino-pid`, `micropython-pid` et `programmer-l-embarque`, et aucune ne parle de bus. La collision est donc **inter-fiche et jamais intra-fiche**, ce qui la rend invisible au lecteur. ⚠ **À rejouer si une fiche de bus reçoit un jour une boucle fermée.**

**Le rendu `closed-loop control` est LU, pas décidé.** `chaine-energie-en` écrit déjà `[[asservissement-en|Closed-loop control]]` dans son *See also*, et `arduino-moteur-cc-en` intitule une section *Special case - a motor with an encoder for closed-loop control*. Mon premier jet écrivait *feedback control* : il aurait créé un second libellé pour une cible qui n'existe pas encore, et divergé de l'entrée `boucle fermée → closed loop` déjà figée.

**Périmètres mesurés avant écriture**, hors `en/` : `asservi*` **127 occurrences sur 47 fiches**, `consigne` **154 sur 37**, `boucle fermée` **25 sur 11**, `boucle ouverte` **25 sur 6**, `correcteur` **10 sur 6**, `emballement` **15 sur 4**. ⚠ **`réguler` n'a PAS de périmètre mesuré** : le motif de balayage employé fusionnait `réguler` / `régulation` / `régulateur` avec `régulier` / `régulièrement`, bien plus fréquent dans le corpus embarqué. Le chiffre obtenu ne mesurait pas ce qu'il prétendait, il n'est donc pas reporté (C118). Même réserve sur `dépassement`, qui compte l'*overshoot* et le dépassement de budget.

**⚠ La glose d'un sigle anglophone disparaît en traduction (23/08), et le cas symétrique existe aussi (25/08).** Sur `stm32`, le français écrit « repérées *FT*, pour *five-volt tolerant*, dans la datasheet » : la glose y est **déjà en anglais**, parce que le sigle l'est. En anglais elle redoublerait le sigle qu'elle explique, exactement comme la glose d'`adc`. Elle tombe donc, et l'italique de citation avec elle, le segment devenant une simple apposition : *marked FT, for five-volt tolerant*. Vaut pour tout sigle dont la source française donne déjà la forme développée anglaise.

**⚠ Un terme de structure garde un rendu unique sur tous ses emplois, même quand la métaphore se ramifie (25/08).** « Porte » désigne un chemin de programmation dans les hubs de famille (marque C56 du lean-Bases) et non une image de passage. `esp8266` en porte un emploi isolé, `stm32` en porte trois articulés — *deux portes*, *porte de continuité*, *porte du métier* — et `teensy` reprend *porte unique*. Rendre les trois de `stm32` différemment aurait effacé le fait qu'il s'agit du même concept. Rendu retenu : **door**, sur tous les emplois du corpus.

**⚠ Un mot lourd rendu par un mot lourd est le réflexe à surveiller, y compris hors du vocabulaire de rapport (25/08).** Deux cas du lot des hubs. « Une puce moins-disante », entre guillemets et commentée dans `esp8266`, ne devient pas *less capable* mais *asks for less and gives less* : la formulation est parlée et garde le geste de la mise entre guillemets. « Un C++ outillé », dans `stm32`, ne devient pas *a tooled C++*, qui ne se dit pas, mais *C++ with a layer of helpers on top*. C112 vaut pour ces mots-là comme pour *opposable*, et le test est le même : un développeur écrirait-il ça sur un forum ?

**⚠ « Incertitude » désigne deux objets, comme « contrôleur » (23/08).** Dans les trames du V et les fiches de conduite de projet, le mot désigne **l'objet de travail** — la question ouverte que la preuve de concept doit fermer — et se rend par **unknown**, forme déjà en production dans `en/conduite/index`. En contexte de mesure, il désigne l'**incertitude métrologique** et se rend par *uncertainty* : « une marge calculée à 5 % sur une mesure dont la précision est de 10 %, c'est une incertitude résiduelle » donne *residual uncertainty*, jamais *residual unknown*. Le test est le contexte, pas le mot : **si l'incertitude figure dans une liste que le projet doit fermer, c'est un *unknown*.**

**⚠ C112 est un contre-cas du glossaire, et le seul.** Le glossaire impose **une forme unique** là où une dérive serait visible. C112 impose l'inverse sur les mots de rapport : les 9 « opposable » de `preuve-de-concept` portaient quatre sens et ont reçu neuf formulations. **« Opposable » et « défendable » n'ont donc pas d'entrée ici, et ne doivent pas en recevoir** : figer *defensible* comme rendu unique reproduirait exactement le défaut que C112 corrige.

**⚠ Corollaire trouvé le 23/08 (suite 3) sur `specification-technique` : quand « opposable » est l'objet enseigné, il faut le gloser en anglais, et la glose n'est pas facultative.** L'anglais *opposable* est un **faux ami complet** : il veut dire « préhensile », comme dans *opposable thumb*, et n'a aucun sens juridique. Le mot ne peut donc ni se traduire ni se laisser nu. Forme retenue à la première occurrence, *made quantifiable, measurable and opposable, that is, capable of being held against the supplier if it is not met*, puis déclinaison selon le sens exact de chaque emplacement (*a requirement that cannot be held against anyone*, *a document that holds up*). Conséquence de dimensionnement : **C112 retire de la glose côté FR et en crée côté EN**, ce qui ne se voyait pas quand la règle a été écrite. Vaut pour les 16 occurrences « objet enseigné » des 4 fiches concernées.

**⚠ La glose se DÉCLINE sur le sens de la fiche et ne se recopie pas d'une fiche à l'autre (25/08 suite 3).** `specification-technique-en` oppose le document **au fournisseur** — *capable of being held against the supplier if it is not met*. `cahier-des-charges-fonctionnel` écrit « chaque exigence chiffrée engage les deux parties », donc sa glose devient *capable of being held against **either party***. Recopier la première aurait rétréci l'idée de la seconde. **Et la nominalisation ne survit pas en prose** : *Opposability* existe en production, mais **uniquement en libellé** (en-tête de colonne *Opposability, CdCF* dans `concept-en`) ; en prose, on passe par le mécanisme — *being able to hold the document against someone*. Sur le CdCF, les deux occurrences vivent **dans la même puce**, à trois lignes l'une de l'autre, ce qui rend l'écart de traitement visible d'un coup d'œil. **État : `specification-technique`, `concept` et `cahier-des-charges-fonctionnel` sont faites ; seule `caracteriser-une-exigence` reste, et elle porte 6 des 16.**

**⚠ « Valider » désigne deux actes distincts, et l'anglais les sépare (23/08 suite 3).** Troisième mot français à deux objets du chantier, après « contrôleur » et « incertitude ». Dans `dossier-technique`, trois interlocuteurs **engagent leur responsabilité sur un périmètre** et l'encadrant **prononce un verdict de revue** : le français emploie le même verbe pour les deux. Rendus par **sign off** (l'acte de responsabilité segmentée, d'où *approver* pour le validateur et *sign-off round* pour la multi-validation) et par **approve** (le verdict de revue, cohérent avec *approved / approved with conditions* des cinq trames). Sans cette séparation, la phrase centrale de la phase, « signé en parties, approuvé en ensemble », devient une répétition.

**⚠ « Fin de course » désigne deux objets, et c'est le quatrième mot du chantier dans ce cas (24/08).** Après « contrôleur », « incertitude » et « valider ». Le français emploie la même expression pour le **composant** qui détecte la butée et pour la **position** de butée elle-même. Rendus par **limit switch** quand c'est le contact qu'on câble et qu'on lit, et par **travel limit** quand c'est l'extrémité de course qu'on sécurise. Sur `choisir-le-materiel`, les trois emplacements se répartissent deux contre un. *End stop*, mon premier jet, couvre l'usage des imprimantes 3D mais pas l'anglais industriel, où *limit switch* est le terme du composant.

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

**⚠ Les guillemets français deviennent des guillemets droits (24/08 suite 2).** « 0 » devient `"0"`, « écrire du code » devient `"write code"`. Même motif que l'espace insécable ci-dessus : **ce qui disparaît, c'est la typographie française**, et les chevrons n'ont pas cours dans l'écrit anglais courant. Motif technique en renfort : les chevrons français portent **deux insécables internes**, qui déclencheraient le verdict mécanique de typographie de `--style`.

**⚠ Le séparateur de milliers ne se transpose pas, il se supprime ou s'écrit en toutes lettres (24/08 suite 2).** Le français écrit `65 535`, `2 000 mAh`, `7 200 heures` avec une espace fine. La forme anglaise attendue serait `65,535`, mais **une virgule entre deux chiffres est exactement le motif que traque le contrôle de virgule décimale** : elle y produirait un faux positif à chaque occurrence. Deux rendus retenus, selon le rôle du nombre. **Valeur technique → sans séparateur** : `65535`, `2000 mAh`, `7200 hours`, forme d'ailleurs courante dans l'écrit embarqué et déjà en production (`1024` dans `adc-en`). **Ordre de grandeur en prose → en toutes lettres** : « un rapport de l'ordre de 10 000 » donne *a ratio of the order of ten thousand*.

**⚠ La glose française d'un terme anglophone tombe, comme celle d'un sigle (24/08 suite 2).** La règle écrite pour `adc` et `pwm` vaut pour **tout terme**, pas seulement pour les sigles : quand le français glose un mot anglais conservé, la glose **redouble en anglais le mot qu'elle explique**. Cinq occurrences sur le lot des notions transverses : *General Purpose Input/Output, entrée/sortie à usage général* (`gpio`), *Interrupt Service Routine* après « routine d'interruption » (`interruption`), « le prédiviseur (*prescaler*) » (`timer`), « le **deep sleep** (sommeil profond) » et « la **veille légère** (*light sleep*) » (`deep-sleep`). **Effet de mesure à connaître** : ces suppressions **font baisser le compte de mots EN sous le FR** et le décompte C109 avec elles quand la glose portait un tiret. Ce n'est ni une perte ni une création — le différentiel ne signale que les créations, il ne bronchera donc pas, mais une relecture ultérieure pourrait lire la baisse comme un oubli.

**⚠ Une cible peut porter PLUSIEURS libellés en production, et le titre se prend sur la forme qualifiée (26/08).** Jusqu'ici lire la production rendait un rendu unique et la lecture tranchait. Sur les 32 cibles du module Arduino, **une cible en porte jusqu'à quatre**. La distribution est lisible et non aléatoire : le **hub de famille** porte la forme **courte** (*Memory management*, *Hardware timers*, *Interrupts*), qui désigne une **position dans un parcours** — même nature que le patron `step N` qu'exempte `--libelles` ; les **fiches-notion sœurs** portent la forme **qualifiée** (*Managing memory on Arduino*, *timers on Arduino*, *I2C on Arduino*), qui désambiguïse la fiche Arduino de la notion générique. **Le `title:` se prend sur la forme qualifiée**, qui coïncide avec la traduction du `title:` français. ⚠ **Le cas non résolu est `arduino-temporisation`**, dont le titre français `Temporiser` est un infinitif nu que rien ne dicte et dont les trois libellés en production ne convergent pas.

**Orthographe : anglais britannique par défaut** (*centimetres*, *organise*, *metres*), **sauf sur les termes techniques dont la forme américaine domine la littérature du domaine** — *analog* et non *analogue*, *caliper* et non *calliper*. Motif identique à celui du « stepper » du §1, pris dans l'autre sens : l'étudiant tape `analogRead()`, lit *analog input* sur ses datasheets et voit `ANALOG IN` sérigraphié sur sa carte. Écrire *analogue* créerait un décalage avec ce qu'il a sous les yeux.

**La glose d'un sigle anglophone disparaît en traduction.** `adc` ouvre en français sur « *Analog-to-Digital Converter*, convertisseur analogique-numérique » : la seconde moitié n'a plus d'objet en anglais, où elle répéterait le sigle qu'elle explique. Vaut pour `adc`, `pwm`, `ble`, `led`, `gpio` et tous les sigles anglophones glosés en français. **Ne touche aucun compteur**, et un traducteur mécanique laisserait la redondance.

**Typographie des listes.** Les listes numérotées gardent leur ponctuation mécanique (point-virgule de fin d'item, tiret de glose), C109 ne les visant pas. En revanche l'**espace insécable française disparaît** : en anglais le point-virgule et le deux-points se collent au mot. Ajustement de typographie, pas de ponctuation.

**Les séparateurs décimaux basculent** : `4,7 kΩ` devient `4.7 kΩ`, `3,3 V` devient `3.3 V`, y compris dans les alt d'images.

**Le pourcentage se colle, les unités gardent leur espace.** Le français met une insécable devant `%` ; l'anglais courant écrit `60%`, `5%`, `10%` sans espace. En revanche les unités SI conservent la leur des deux côtés : `2 h`, `60 °C`, `1.2 N·m`, `100 mm`, `1.22 kg`. Même motif que la règle précédente : ce qui disparaît, c'est la typographie française, pas la convention SI qui est internationale.

**AMDEC est promue au §5.2** (arbitrage Tim du 23/08, option c), glose recalée en *the French acronym for FMEA*. 41 occurrences sur 6 fiches. Report fait dans `en/conduite/index`.

## 6. Menus de logiciels — arbitrage 12 (b)

Les tutos d'outils citent des chemins d'interface en français, parce que le logiciel de l'école l'est. En version EN : **libellé français d'abord, anglais entre parenthèses**.

> *Fichier → Nouveau circuit vide* (File → New Blank Circuit)

Motif : traduire seul rendrait la fiche inutilisable devant l'écran de l'école ; garder le français seul priverait l'étudiant de toute prise pour chercher de l'aide en ligne. Concerne principalement `falstad`, `easyeda`, `kicad`, les fiches `*-prise-en-main` et `ide`.

**Deuxième application, `tinkercad` (26/08 suite 4).** **Huit chemins glosés, un seul laissé nu** : le bouton `Code`, dont la forme anglaise coïncide à zéro caractère près, ce qui est exactement la borne textuelle du 25/08. Deux gloses vivaient **déjà dans une parenthèse** (`(*De base* / *Tous*)` et `(*Code → Télécharger le code*)`) et prennent la forme `..., that is ...` plutôt qu'une parenthèse dans une parenthèse, sur le précédent d'`esp8266` du 25/08 (suite 8). ⚠ **Les alt d'images ne sont pas concernés** : ils gardent le libellé français seul (C108), puisqu'ils décrivent un écran français - mais **leur typographie, elle, bascule**, et c'est là que le report un pour un a mordu le 26/08 (suite 4).

## 7. Ordre des lots — arbitrage révisé le 22/08 (suite 2)

**Progression par proximité de lien, plus module par module.** Arbitrage Tim. Le front de traduction reste connexe : un anglophone ne rencontre pas de lien mort tant qu'il ne quitte pas la zone traduite. Conséquence directe du passage en `draft: false` — les liens rouges sont désormais visibles.

⚠ **Le premier anneau depuis les quatre index fait 82 fiches, mesuré par `--front` le 25/08.** Le « 79 » écrit ici le 22/08 et le « 78 » mesuré le 24/08 étaient l'un et l'autre faux, le second par construction — sa règle résolvait un wikilink par son dernier segment de chemin, ce qui écrase les huit `index.md` sur une cible unique. **Le chiffre se lit désormais dans l'outil**, avec sa règle de résolution réimprimée à chaque lancement. « Aucun lien mort depuis l'accueil » reste ce qu'il était : **le tiers du corpus**, mesuré avant engagement.

1. **Lot 1 — les quatre index. FAIT le 22/08 (suite 2), 2 939 mots.**
2. **Lot 2a — les 23 fiches courtes du front, 5 791 mots** (6 476 avec les trois index de branche, remesuré le 23/08 sous la règle C110 du §8 ; **6 515 après la passe C109**, qui a coûté 39 mots)**. FAIT — 26 fiches traduites, 6 996 mots EN, dont 5 340 le 23/08 et 1 656 le 23/08 (suite).** `i2c`, `spi`, `uart`, `adc`, `pwm`, `wifi`, `ble`, `lora`, `zigbee`, `memoire`, `cpp`, `micropython-langage`, les six `meca`, les cinq `conduite/meo`, `conduite/ese/index`, `conduite/proj/index`. **Meilleur rapport liens fermés par mot traduit de tout le chantier** : 23 liens fermés pour le prix d'une seule trame. Rode le glossaire à bas coût, comme le prévoyait le lot 2 d'origine.
3. **Lot 2b — les cinq trames du V. FAIT le 23/08 (suites 2 et 3). 28 684 mots FR → 30 318 mots EN, foisonnement mesuré +5,7 %.**

    | Fiche | Mots FR | Mots EN | Foisonnement |
    |---|---:|---:|---:|
    | `preuve-de-concept` | 6 413 | 6 689 | +4,3 % |
    | `specification-technique` | 6 081 | 6 529 | +7,3 % |
    | `concept` | 5 817 | 6 259 | +7,6 % |
    | `dossier-technique` | 5 329 | 5 669 | +6,4 % |
    | `integration-et-tests` | 5 044 | 5 172 | +2,5 % |

    Mots FR mesurés après passes C109 et C112, règle C110. C'est là que se jugeait la compensation du registre C65 perdu (§4) : elle tient.

    ⚠ **Le foisonnement ne se prédit pas fiche par fiche. Seule la moyenne de lot est un instrument.** L'hypothèse de la densité de gloses, écrite le 23/08 (suite 3), **explique les extrêmes et pas le milieu** : `integration-et-tests` ne porte qu'une glose et sort au plancher à +2,5 %, mais `concept` et `preuve-de-concept` en portent deux chacune et sortent à +7,6 % et +4,3 %. Le +4,3 % du 23/08 (suite 2) était un plancher, le +7,6 % un plafond, et l'écart entre fiches d'un même lot atteint **un facteur trois**. **Pour dimensionner les 252 851 mots restants, compter +5,7 %**, moyenne mesurée sur les cinq trames. Décomposition : 288 050 après le lot 1, moins 6 515 (lot 2a), moins 28 684 (lot 2b).
4. **Lot 2c — le reste de l'anneau 1.** **Outillé le 23/08 (suite 4)** : `--style` relit le jet EN pour lui-même, `--libelles` relit les libellés de wikilink, `compter-mots.mjs --lot` dimensionne le lot avant de l'ouvrir. **Augmenté le 25/08** de `--front`, qui **mesure le périmètre au lieu de le déduire** : le lot ne se cite plus par un chiffre hérité mais par la sortie du mode.

    | Sous-lot | État | Reste |
    |---|---|---:|
    | `embarque/realisation/` (5) + les trois du callout | fait 24/08 (suite) | — |
    | `embarque/algorithme/` (5) | fait 24/08 (suite) | — |
    | **les 7 hubs de famille** | **fait 25/08** | — |
    | **notions transverses — `gpio`, `timer`, `interruption`, `firmware`, `deep-sleep`** | **fait 24/08 (suite 2)** | — |
    | notions transverses, les huit restantes (`manipulation-de-bits`, `niveaux-de-tension`, `debugger-embarque`, `microcontroleur`, `bus-de-communication`, `techno-sans-fil`, `lire-une-datasheet`, `cpp-logs`) | à faire | **≈ 11 000, dérivé** |
    | `embarque/mesure/` (3) | à faire | — |
    | les lourdes de `conduite/proj` (`securite-et-qualite` 4 051, `ecoconception` 3 284, `gestion-de-projet` 2 740…) | à faire | — |
    | **anneau 1** | **82 cibles, 76 traduites** | **6 fiches, 14 582 mots** |

    **État au 25/08 (suite 3).** L'anneau 1 ne porte plus que **six fiches**, et **cinq sont dans `conduite/proj/`** : `amdec` 1 741, `decomposition-fonctionnelle` 1 926, `ecoconception` 3 284, `gestion-de-projet` 2 740, `securite-et-qualite` 4 051, plus `kicad` 840. `cahier-des-charges-fonctionnel` est faite (25/08 suite 3, fiche pivot traitée seule sous C116). **`securite-et-qualite` est la deuxième tête de liste C109 du corpus** (44 candidats, chiffre hérité à remesurer) et **`kicad` attend sa refonte C88 post-rentrée** — la traduire avant créerait une dérive certaine et non un risque. Les lots précédents : `embarque/mesure/` (6 fiches, 25/08 suite), groupe schémas/simulation (6 fiches, 25/08 suite 2), `cahier-des-charges-fonctionnel` (1 fiche, 25/08 suite 3).

    ⚠ **Le ≈ 11 000 des huit restantes est une soustraction, pas un comptage** (17 127 mesurés pour les treize, moins 6 127 pour les cinq faites), et il est cité comme ordre de grandeur au sens de C110. **`lire-une-datasheet` en porte à elle seule 3 263**, soit le double de la médiane du lot. Le chiffre ferme se lira dans `compter-mots.mjs --lot` à l'ouverture de la prochaine séance.

    ⚠ **C'est le premier lot à porter des blocs de code**, donc le premier où le troisième compteur mord, et il concentre les **29 wikilinks à libellé en backticks** — le correctif de segmentation du 23/08 (suite) est éprouvé depuis le module MicroPython du 24/08.
5. **Anneau 2 — le dernier, et il se découpe MODULE PAR MODULE.** Mesuré le 25/08 (suite 6) : **145 cibles nettes**, dont **113 restantes / 154 886 mots** au 26/08. Le restant du corpus étant de 128 fiches, **il n'y aura pas de campagne d'anneau 3** : le wiki est profond de deux clics depuis l'accueil. **Effectifs par module mesurés le 26/08** (série 4, recoupement exact à 113 / 154 886) :

    | Module | Fiches | Mots | Chevron |
    |---|---:|---:|---:|
    | `embarque/mcu/arduino/` | 32 | 45 047 | 0 |
    | `embarque/mcu/micropython/` | 20 | 21 071 | 0 |
    | `embarque/mcu/esp32/` | 12 | 17 691 | 44 |
    | `conduite/proj/` | 13 | 13 678 | 0 |
    | `embarque/pcb/` | 1 | 9 773 | 0 |
    | `embarque/mcu/cpp/` | 7 | 9 356 | 32 |
    | `embarque/simulation/` | 3 | 8 432 | 0 |
    | `embarque/mcu/stm32/` | 5 | 8 245 | 8 |
    | `embarque/mcu/` | 7 | 7 204 | 0 |
    | `embarque/mcu/teensy/` | 4 | 5 539 | 16 |
    | `embarque/` | 3 | 3 414 | 0 |
    | `embarque/mcu/raspberry-pi/` | 3 | 3 291 | 0 |
    | `embarque/mcu/xiao/` | 2 | 2 010 | 0 |
    | `embarque/mcu/sans-fil/` | 1 | 135 | 0 |

    **Ordre arbitré le 26/08, Tim (b) : `embarque/mcu/arduino/` en premier**, 32 fiches et six lots. ⚠ **La colonne chevron isole exactement quatre modules** — `cpp/`, `esp32/`, `stm32/`, `teensy/`, **80 484 mots** — dont les comptes de mots incluent le contenu des blocs en chevron sous une règle que C110 gèle. **L'arbitrage C110 est dû avant d'y entrer**, sans quoi leurs foisonnements ne mesureront rien. `arduino/` est à **zéro chevron**. ⚠ **`conduite/proj/` est le seul module qui ferme une branche** (`conduite/` entière) et il porte les six liens rouges du triplet NF X50-151, dont l'arbitrage se posera quand il reviendra. ⚠ **`easyeda` seule pèse 9 773 mots** : elle se planifie comme une séance à part, jamais comme la queue d'un lot.

*Rédaction antérieure, conservée pour trace — l'ordre était : parcours d'entrée, puis les 53 fiches courtes du corpus entier (16 000 mots), puis module par module dans l'ordre de `_drafts/relecture-ordre.md`.*

## 8. Procédé par fiche

1. Passe **C109** sur la fiche française (ponctuation seule, puces exclues).
2. Génération du **squelette EN** par script : arborescence, suffixage, marqueur de source.
3. **Traduction** phrase par phrase, glossaire ouvert.
4. **Trois compteurs** : liens, embeds, blocs de code — égalité FR/EN.
5. **Clic-test** en fin de lot.

**Volumétrie — les chiffres ne s'écrivent plus ici, ils sortent de `tools/compter-mots.mjs`** (23/08 suite 4). La règle de comptage était publiée depuis le 22/08 et **elle n'a pas suffi** : deux implémentations conformes à la même phrase divergent de 0,5 à 1,6 % par fiche, soit −499 mots sur dix mesures des trames du lot 2b. **Amendement à C110** : le compteur se publie, pas sa description. Le script réimprime la règle à chaque lancement, et sa sortie se cite telle quelle.

| Grandeur | Valeur au 23/08 (suite 4) | Chiffre hérité |
|---|---:|---:|
| Fiches FR publiées | 242 | 242 |
| Mots FR | **291 123** | 291 099 |
| Médiane par fiche | 1 089 | 1 088 |
| Fiche la plus lourde (`easyeda`) | 9 773 | 9 775 |
| **Restant à traduire** | **253 245** sur 207 fiches | 252 851 |

⚠ **Le restant est un COMPTAGE des fiches sans jumelle EN, pas une soustraction.** Le 252 851 hérité valait 288 050 − 6 515 − 28 684 : juste dans sa forme, mais une somme se compense et un comptage non. `easyeda` vaut toujours deux sessions à elle seule.

**Rythme mesuré** : le nombre de mots traduits ouvre chaque entrée du JOURNAL depuis le 22/08 (suite 2). La trajectoire se lira d'elle-même au bout de trois sessions, plutôt que de se discuter.

## 9. Outillage à écrire avant la fiche 1

**Les trois sont faits (22/08 suite 2).**

- `tools/creer-fiche-en.mjs` — génère le squelette EN depuis une fiche FR (§2). Le squelette n'est **pas** une traduction : c'est la fiche française avec les seules transformations structurelles appliquées, ce qui rend les trois compteurs égaux par construction et fait porter le contrôle de fin de fiche sur ce que la traduction a cassé, pas sur ce que le script aurait perdu. Recette mesurée sur les 243 fiches : **4 323 liens, 395 embeds, 376 blocs de code, 0 fiche divergente**. Options `--dry`, `--force`, `--recette`.
- `tools/derive-traduction.mjs` — liste les fiches EN dont la source FR a bougé. **Le remède à la dérive n'est pas la synchronisation, c'est la détection.** Options `--tout`, `--manquantes`.
- Ajouté aux `TARGETS` de `tools/normalize-pilotage.js`.

**Deux modes ajoutés en cours de lot 1, parce que le procédé du §8 n'était outillé nulle part.**

- `--controle` compare chaque fiche EN à sa source sur les trois compteurs. À la génération l'égalité est vraie par construction : c'est **après la traduction** qu'un lien disparaît dans une reformulation, et c'était précisément le moment où rien ne regardait.
- `--recaler <fiche EN>` reconsigne le marqueur **sans toucher à la traduction**, après qu'une retouche FR a été reportée à la main. Sans lui, la seule sortie était de régénérer le squelette, donc d'écraser la traduction — un sha256 ne s'écrit pas à la main. **Garde-fou : le recalage est refusé si les trois compteurs divergent**, sinon il ferait disparaître la dérive de l'écran sans l'avoir traitée.

**Deux modes ajoutés le 23/08 (suite 4), avant le lot 2c.**

- `--style [fiche...]` relit **le jet EN pour lui-même**, ce qu'aucun contrôle ne faisait. Deux verdicts mécaniques (typographie française, C109 créées par la traduction) et deux listes de candidats (virgule ambiguë, C109 de prose, où le critère du verbe conjugué ne se décide qu'à la lecture). Sans argument il lit tout `content/en/` ; sur une fiche FR, seul le volet C109 s'active, ce qui sert aux passes du lot 2c.
- `--libelles` liste les libellés de wikilink qui ne recoupent **aucun mot significatif** du `title:` de leur cible, motif `Welding` du 23/08 (suite). Bruyant par construction, donc il rend une liste à lire et jamais un verdict.

**Un quatrième outil, hors chantier anglais** : `tools/compter-mots.mjs`, où vit désormais la règle de comptage de C110. Voir le §8.

**Le marqueur de source est un `source_sha256` du contenu FR, pas un hash de commit** (arbitrage Tim du 22/08 suite 2). Motif : la fiche EN se crée **après** la passe C109, donc sur un fichier FR pas encore committé. `git log -1` y rendrait le commit d'*avant* la passe, et la totalité du lot serait signalée comme dérivée dès le premier push — le piège que le §8 voulait éviter, refermé un cran plus loin. Une empreinte de contenu est en outre indifférente au rythme de commit.
