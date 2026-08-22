# Liste de captures — `easyeda` (tutoriel scénarisé C88)

> Fichier de travail privé (hors `content/`, non publié). Établi le **21/08**.
> **Hors manifeste** (`_drafts/feuille-de-route-captures.md`), qui reste fermé :
> 27 déposées, 0 restante, 30 reportées, 1 supprimée.
> Numérotation **E1..E50**, indépendante du manifeste, pour éviter toute collision.

## Sources et mesures

Base de travail : `Tuto_PCB.docx` de Tim (créé le 27/01/2026, EasyEDA Std 6.5.23,
mode hors ligne), déjà éprouvé avec des étudiants.

Inventaire **mesuré** sur les originaux du `.docx`, pas sur le PDF :

| Grandeur | Valeur |
|---|---|
| Placements d'image dans le document | 92 |
| Fichiers média uniques | 83 |
| Dont pastilles décoratives OK/KO (9 placements) | 2 |
| **Médias réels** | **81** |
| Largeur médiane | 606 px |
| >= 900 px (marge suffisante à 600 px d'affichage) | 21 |
| 600-899 px (1:1, sans marge) | 22 |
| < 600 px (agrandissement obligatoire) | 38 |

Deux constats qui commandent le tri :

1. **L'export Word n'avait rien dégradé.** Médiane 606 px dans le `.docx` contre
   492 px dans le PDF, 10 images >= 1200 px contre 9. L'hypothèse d'une perte à
   l'export était fausse.
2. **La cause est la nature des prises.** Écran 1920x1080 à 100 % de mise à
   l'échelle : une fenêtre pleine sort à 1920 px, un dialogue recadré sort à sa
   taille réelle (400-600 px), une vignette de panneau sort à 126 px. Ce n'est pas
   un défaut de prise, c'est la taille de l'objet à l'écran.

## Règle d'échelle pour la séance

**Passer Windows à 150 % de mise à l'échelle avant de shooter.** Le même dialogue
sort alors autour de 900 px sans rien changer d'autre, et la bande basse devient
utilisable. Les captures de fenêtre pleine restent à 1920 px, donc rien n'est perdu.

200 % est écarté : l'espace de travail logique tomberait à 960 px, trop étroit pour
un éditeur de PCB.

⚠ **Le zoom du lecteur n'est pas un substitut.** Zoomer une image ne crée pas de
pixels : cela agrandit le flou. Le zoom rend service quand le fichier contient plus
de pixels que la boîte d'affichage — c'est un argument **pour** monter l'échelle, pas
contre.

## Statuts

- **RÉEMPLOI** — l'image héritée part telle quelle (>= 900 px, contenu inchangé).
- **REPRISE** — à reshooter à 150 %. Motif indiqué : définition, prix C71, menu
  susceptible d'avoir bougé entre 6.5.23 et 6.5.51.
- **NEUVE** — n'existe pas dans le document.
- **SVG** — territoire schéma plutôt que capture (C33), Claude produit.
- **CALLOUT** — devient une sémantique de callout, pas une image (triptyque 27/05).

Critère de vérification héritée : **une capture de canevas** (schéma, chevelu,
routage, plan de masse) se réemploie sans regarder ; **une capture de menu, de
dialogue ou de panneau latéral** se regarde avant, les builds les déplacent.

⚠ **Aucune version d'EasyEDA ne doit apparaître dans la fiche** (décision Tim,
précédent `ltspice`) : un numéro affiché fabrique le blocage qu'il prétend éviter.

---

## Temps 1 — `installer`

| # | Ce que le média montre | Largeur | Statut |
|---|---|---|---|
| E1 | La page de téléchargement du client de bureau | 640 | NEUVE |
| E2 | L'écran de choix du mode hors ligne au premier lancement | 640 | NEUVE |
| S1 | **Les deux modes** : ce que chacun autorise, et le symptôme qui trahit l'erreur | 640 | ✅ **produit** — `easyeda/modes.svg` (5,93 ko) |
| S2 | **Revenir en hors ligne à tout moment** : `Réglages > Desktop edition setting > run mode setting`, puis `Projects Offline mode` et `Apply` | 560 | ✅ **produit** — `easyeda/revenir-hors-ligne.svg` (4,08 ko) |

⚠ **Le hors ligne est le point d'échec numéro un chez les étudiants**, et il casse
**à plusieurs endroits selon le profil** (observation Tim, C99). Ce n'est donc pas une
antichambre expédiée : E1, E2, S1, S2, E4 et E51 portent un seul geste.

**Le symptôme est indirect, et c'est tout le problème.** L'étudiant passé en ligne ne
voit aucun message : il doit se connecter, et il **perd l'accès aux empreintes de la
communauté**. Tim ne le détecte qu'au moment de la recherche de composant, quand il
**manque une option dans la fenêtre de recherche** — soit trois étapes et un quart
d'heure après la faute.

**Mais l'auto-test est bien plus simple que ça, et il était sous nos yeux : le mode
est écrit dans la barre de titre**, en haut à gauche. Il figure déjà dans une
dizaine de captures du document. L'auto-test se réduit donc à *lire le bandeau*, et
ne coûte **aucune prise neuve** — un recadrage d'une image existante suffit.

⚠ **Conflit tranché (d) : la version reste visible.** Le bandeau porte le numéro entre
le nom et le mode ; peu d'étudiants le liront sur une image. **Aucun masquage, aucun
recadrage contraint, aucune déclaration C102.** Borne à retenir pour ne pas rouvrir la
question : **la règle « aucune version » porte sur la prose, pas sur les pixels** —
même structure que le traitement des prix d'interface tierce.

⚠ **Le comportement communauté/hors ligne est contre-intuitif et confirmé par Tim**
(observé sur plusieurs promotions). La fiche énonce **ce qui se passe, pas pourquoi** :
aucun mécanisme causal ne sera inventé — précédent `falstad`, où une explication
plausible tirée d'une doc a été démentie par un test au clavier.

⚠ **Borne C108 sur S1.** Je produis un diagramme **conceptuel** des modes et de leurs
transitions. Je ne dessine **aucun écran que je n'ai pas vu** : S2 s'appuie désormais
sur un chemin de menu fourni par Tim, pas sur une interface reconstituée.

## Temps 2 — `construire`

### 2.1 Le projet et la feuille

| # | Ce que la capture montre | Largeur | Statut |
|---|---|---|---|
| E3 | `Fichiers > Nouveau > Projet`, menu déroulé | 600 | REPRISE (652 px, menu) |
| E4 | Dialogue de création, **sélecteur `Folder` déployé sur `Offline Project`** | 600 | REPRISE (673 px, dialogue) |
| E51 | **Le bandeau de titre**, mode lisible — recadrage d'une capture existante | 480 | RÉEMPLOI recadré |
| E52 | **L'écran qui réclame connexion et bascule en ligne** après Alt+U — le moment où l'étudiant doit refuser | 600 | NEUVE (arbitrée (a) le 21/08) |
| E5 | Arbre de projet avec `Sheet_1` | 400 | REPRISE (307 px) |
| E6 | Le **cartouche** seul, recadré en bas à droite de la feuille — l'image pleine (1410 px) est à 90 % vide et rend le bloc illisible à 640 px | 480 | RÉEMPLOI **recadré** — `image4.png` |

### 2.2 Placer les composants

| # | Ce que la capture montre | Largeur | Statut |
|---|---|---|---|
| E7 | `Placer > Symbole`, menu déroulé | 600 | REPRISE (569 px, menu) |
| E8 | Fenêtre Library sur NE555, les quatre classes, aperçu symbole + empreinte | 640 | RÉEMPLOI — `image9.png` (970 px), ⚠ colonne *Owner* à arbitrer (C101) |
| E9 | Library sur résistance traversante, colonne Empreinte et `Stock` | 640 | REPRISE — **recadrer hors zone de prix (C71)** |
| E10 | Library sur condensateur film | 640 | REPRISE — **recadrer hors zone de prix (C71)** |

### 2.3 L'empreinte (coeur de la fiche)

| # | Ce que la capture montre | Largeur | Statut |
|---|---|---|---|
| E11 | Le NE555 : brochage, boîtier réel, empreinte | 600 | RÉEMPLOI photo + SVG brochage |
| E12 | Traversant contre CMS, même composant | 600 | **SVG** — les vignettes héritées font 126 et 134 px, irréductibles |
| E13 | Quatre photos : bonne/mauvaise soudure, horizontal et vertical | 2x300 | RÉEMPLOI (photos) |
| E14 | La planche des familles de condensateurs | 480 | RÉEMPLOI (344 px, photo de planche) |

*Les pastilles OK/KO héritées passent en **CALLOUT** : `[!example]` et `[!failure]`.*

### 2.4 Créer sa propre empreinte

| # | Ce que la capture montre | Largeur | Statut |
|---|---|---|---|
| E15 | `Fichiers > Nouveau > Empreinte` | 600 | NEUVE |
| E16 | L'éditeur d'empreinte, pastilles cotées depuis la datasheet | 640 | NEUVE |
| E17 | L'association de l'empreinte au symbole | 640 | NEUVE |

*Second manque nommé par Tim. Entièrement à produire.*

### 2.5 Alimentations, fils, nets

| # | Ce que la capture montre | Largeur | Statut |
|---|---|---|---|
| E18 | Barre `Outils de Câblage` | 400 | REPRISE (218 px) |
| E19 | Schéma avec VCC et GND posés | 640 | RÉEMPLOI (1917 px) |
| E20 | Schéma câblé, **avec l'erreur volontaire** | 640 | RÉEMPLOI (1020 px) |
| E21 | Schéma en labels `Net` | 640 | RÉEMPLOI (1283 px) |
| E22 | Deux labels de même nom, non reliés visuellement | 640 | RÉEMPLOI (1284 px) |
| E23 | Schéma final avec LED et résistance de protection | 640 | RÉEMPLOI (1284 px) |
| E24 | Le bornier ajouté, raccordé par les seuls labels | 640 | REPRISE (871 px) |

### 2.6 Conversion — et le piège

| # | Ce que la capture montre | Largeur | Statut |
|---|---|---|---|
| E25 | Menu `Design` **entièrement déroulé**, `Convertir` et `Mettre à jour le PCB` visibles ensemble | 640 | REPRISE — **capture critique** |
| E26 | Dialogue `Nouveau PCB` : unités, 2 couches, dimensions | 600 | REPRISE (755 px, dialogue) |
| E27 | Le chevelu à l'arrivée | 640 | RÉEMPLOI (1508 px) |

⚠ **E25 porte le piège central de la fiche, et le test du 21/08 en a changé la
nature.** `Mettre à jour le PCB` (Alt+U) est la ligne immédiatement sous celle qu'il
faut cliquer, et décrit mieux que `Convertir` ce que l'étudiant croit vouloir faire.

**Comportement réel, mesuré par Tim :** Alt+U exige d'abord un **DRC** ; si le DRC
passe, le logiciel demande de **se connecter et de basculer en mode en ligne** pour
effectuer la mise à jour.

Ce n'est donc **pas** un piège de perte de données, comme annoncé avant le test
(« au mieux rien, au pire écrasement du PCB »). C'est **l'entonnoir vers l'erreur de
mode** : l'étudiant qui obtempère bascule en ligne, et perd vingt minutes plus tard
l'accès aux empreintes de la communauté, sans jamais faire le lien avec ce clic.
**Les deux problèmes de la fiche n'en font qu'un**, et la section conversion renvoie
donc à l'antichambre.

**Conséquence doctrinale, et elle vaut mieux que la consigne du TP.** En mode hors
ligne, la mise à jour incrémentale **n'existe pas**. Refaire `Convertir` depuis une
page blanche n'est donc pas une précaution pédagogique mais **le seul chemin
disponible** — d'où la règle : figer le schéma avant de convertir.

La capture doit montrer **les deux entrées dans le même cadre**, sinon le piège ne se
voit pas.

### 2.7 Règles de dessin

| # | Ce que la capture montre | Largeur | Statut |
|---|---|---|---|
| E28 | `Design > Règle de dessin`, menu déroulé | 600 | REPRISE (443 px) |
| E29 | Le tableau des règles avec les valeurs de la Datron | 640 | REPRISE (564 px) |

### 2.8 Pastilles, perçage, repères

| # | Ce que la capture montre | Largeur | Statut |
|---|---|---|---|
| E30 | Propriétés de pastille, rectangle 3 x 1,5 mm | 640 | RÉEMPLOI (1489 px) |
| E31 | Perçage à 1 mm, diamètre de l'outil | 600 | REPRISE (930 px, panneau) |
| E32 | Trous de fixation à 3 mm | 640 | RÉEMPLOI (1170 px) |
| E33 | Origine de la zone de travail en bas à gauche | 640 | RÉEMPLOI (1090 px) |

### 2.9 Placement

| # | Ce que la capture montre | Largeur | Statut |
|---|---|---|---|
| E34 | Composants placés, sans chevauchement | 640 | RÉEMPLOI (1383 px) |
| E35 | Chevelu oblique puis chevelu aligné (paire) | 2x320 | RÉEMPLOI (1008 px) + REPRISE |

### 2.10 Routage

| # | Ce que la capture montre | Largeur | Statut |
|---|---|---|---|
| E36 | Outil `Wire`, une piste tracée, le chevelu qui disparaît | 600 | REPRISE (570 px) |
| E37 | Angle droit contre deux angles à 45 degrés (paire) | 2x320 | REPRISE (416 et 476 px) |
| E38 | L'antenne MIFA de l'ESP8266 | 400 | REPRISE (225 px) — **motif réécrit** |
| E39 | Une piste passant entre les pattes d'un composant | 640 | RÉEMPLOI (1218 px) |
| E40 | Un strap, en vue logiciel | 600 | REPRISE (667 px) |
| E41 | Trois photos de cartes à straps | 3x260 | RÉEMPLOI (photos) |

⚠ **E38 change de démonstration (arbitrage 5b).** L'antenne de l'ESP8266MOD est une
MIFA : ce qui rayonne est une **longueur accordée** sur 2,4 GHz, le méandre n'est
qu'un pliage pour la loger. La légende ne doit plus dire que les coudes créent
l'antenne. Et sur une carte **fraisée**, rien n'impose le 45 degrés — le piège à
acide n'existe qu'en gravure chimique : on l'applique quand même, pour que le geste
soit acquis quand il comptera.

### 2.11 Plan de masse

| # | Ce que la capture montre | Largeur | Statut |
|---|---|---|---|
| E42 | Outil `Copper Area` et dialogue de connexion sur GND | 600 | REPRISE (752 px) |
| E43 | Plan de masse en deux zones isolées, puis plan correct (paire) | 2x320 | RÉEMPLOI (1037 px) |

### 2.12 DRC

| # | Ce que la capture montre | Largeur | Statut |
|---|---|---|---|
| E44 | `Design > Check DRC`, panneau à 0 erreur | 600 | REPRISE (657 px) |
| E45 | Panneau à 4 erreurs, et la croix correspondante sur le PCB | 2x320 | REPRISE (405 et 602 px) |

### 2.13 Tirage 1:1

| # | Ce que la capture montre | Largeur | Statut |
|---|---|---|---|
| E46 | `Fichiers > Exporter > PDF` et le dialogue de couches | 600 | REPRISE (669 px, dialogue) |
| E47 | Dialogue d'impression, `Taille réelle` cochée | 600 | REPRISE (1037 px, dialogue Windows) |
| E48 | Le composant posé sur le tirage papier, par transparence | 640 | **RÉEMPLOI (2596 px)** — meilleure image du lot |

### 2.14 Miroir

| # | Ce que la capture montre | Largeur | Statut |
|---|---|---|---|
| E49 | Côté cuivre soudé / côté composants (paire de photos) | 2x300 | RÉEMPLOI (photos) |

## Temps 3 — `échanger`

| # | Ce que la capture montre | Largeur | Statut |
|---|---|---|---|
| E50 | `Fichiers > Exporter > EasyEDA`, l'entrée `.json` | 600 | REPRISE (657 px, menu) |

*Un `.json` embarque symboles et empreintes — confirmé par Tim, qui convertit les
`.json` étudiants en Gerber gravables. La section couvre les trois usages du même
geste : rendre, se passer une carte dans le groupe, sauvegarder.*

---

## Bilan

⚠ **Le premier bilan de ce fichier était faux** : il annonçait 19 + 22 + 5 + 1 = 47
pour un total de 50, en oubliant les deux entrées mixtes. Chiffre donné sans sa
décomposition — motif recurrent, corrigé ci-dessous par recomptage entrée par entrée.

### Avant filtre C29 (dérivation brute du scénario)

| Statut | Nombre |
|---|---|
| RÉEMPLOI | 19 |
| REPRISE | 23 |
| NEUVE | 5 |
| SVG | 1 |
| Mixte (E11, E35) | 2 |
| **Total E1..E50** | **50** |

### Après filtre C29

Dix entrées tombent, **numéros non réutilisés** (précédent #49 du manifeste).
Décomposition des retraits : 8 REPRISE, 1 RÉEMPLOI, 1 NEUVE.

| Statut | Nombre |
|---|---|
| RÉEMPLOI | 18 |
| REPRISE | 15 |
| NEUVE | 5 |
| SVG | 1 |
| Mixte | 2 |
| CALLOUT | (9 placements de pastilles OK/KO) |
| **Total actif** | **41** |

**Le travail de reprise a été divisé par deux** : 15 prises au lieu de 23, sur le
même projet et le même écran. Les 4 neuves restent concentrées sur les deux manques
que Tim a lui-même identifiés.

## Filtre C29 — les dix tombées

Critère appliqué : *une capture gagne sa place quand l'interface est opaque*, plus
les trois conversions systématiques (sortie texte → bloc de code, tableau affiché →
tableau markdown, montage trivial → prose ou schéma).

| # | Motif |
|---|---|
| E5 | Arbre de projet à trois lignes — trivial, une phrase suffit. |
| E7 | `Placer > Symbole` : menu simple, et la fiche donne le raccourci `Shift+F`. |
| E10 | Troisième instance de la même fenêtre Library après E8 et E9 — n'apprend rien de neuf. |
| E15 | Fusionnée dans **E3** : la cascade `Nouveau` montre `Projet` et `Empreinte` dans le même cadre. |
| E18 | Barre d'outils — cas cité en exemple par C29, remplacé par le réflexe « survoler un bouton, lire la barre d'état ». |
| E28 | `Design > Règle de dessin` : chemin de menu, se dit en prose. |
| E29 | **Tableau affiché à l'écran → tableau markdown.** Conversion C29 franche, et les valeurs Datron deviennent lisibles sur mobile et cherchables. |
| E31 | Fusionnée dans **E30** : le perçage se règle dans le même panneau de propriétés que la pastille. |
| E32 | Fusionnée dans **E33** : même temps de finition, trous de fixation et origine. |
| E47 | Dialogue d'impression Windows — générique, varie selon l'imprimante, et « cocher Taille réelle, jamais Ajuster » se dit mieux en prose. |

## Ce que le filtre ne doit PAS trancher — le lot photos

**E13** (quatre clichés bon/mauvais footprint) et **E41** (trois cartes à straps)
restent **au complet**, décision reportée à la relecture de la page rendue.

Motif, et il généralise : **le filtre C29 doit précéder la prise de vue seulement
pour les médias qui coûtent une prise.** Une capture à reshooter se tranche avant,
sinon on fait shooter pour rien. Une photo **déjà en main** ne coûte rien à garder
un tour de plus : son coût n'est pas la production mais la place sur la page, et
cette place ne se juge qu'une fois le texte écrit et la page rendue. Trancher
maintenant, ce serait arbitrer à l'aveugle un paramètre observable plus tard
gratuitement.

Deux populations distinctes, donc deux moments : **les prises se filtrent avant la
séance, les médias acquis se filtrent au peigne de relecture.**

## Points ouverts avant la séance

- [ ] **Passer Windows à 150 %** avant la première prise.
- [ ] **Colonne *Owner* de E8** : la liste affiche les pseudonymes des contributeurs, dont
      au moins un en forme `prénom.nom`. Masquer (C101) ou laisser ? À trancher.
- [ ] **Dépôts à faire par Tim** depuis `word/media/` du `.docx` :
      `image4.png` → `easyeda/cartouche.png` (recadré sur le cartouche) ;
      `image9.png` → `easyeda/recherche-ne555.png`.
- [ ] **Avant la clôture de session : réexpliquer E19, E34 et E44 à Tim** de zéro,
      sans renvoi à un message antérieur, pour qu'il tranche le lot « confirmation »
      sur du matériel frais.
- [ ] **S2** : chemin de menu exact pour rebasculer en hors ligne, à relever à l'écran.
- [ ] Deux noms de personnes en clair et les consignes administratives de TP sont
      à retirer de la fiche (hors captures).
- [ ] `pcb` annonce que la frontière avec la fabrication est le **Gerber** ; à
      l'école c'est un `.json` et le schéma. Fiche hub à recaler.
- [ ] Légende du bornier réécrite sur l'angle technique (C71), pas sur le coût.
