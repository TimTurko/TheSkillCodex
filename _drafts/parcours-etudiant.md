# Parcours étudiant — traversées

> Fichier de travail (non publié). État vivant de la session : se remplit **au fil**.
> Ouvert le 20/08 (suite 2). Sessions 1 à 3.

## Régime de travail

**Les douze scénarios se lisent d'abord. Aucune correction n'est appliquée avant que
les douze soient traversés.** Motif : un défaut systémique ne se voit que sur
l'ensemble, et corriger au fil de l'eau dissoudrait un motif qui se répète sur trois
scénarios. On consigne, on ne corrige pas — même un lien évident, même une faute.

- **Session 1** — script + premières traversées.
- **Session 2** — fin des traversées + traversée de Tim au rendu.
- **Session 3** — arbitrage global et corrections.

## Règles de traversée

- Ne suivre **que** les liens visibles sur la page où l'on se trouve. Pas de saut par
  chemin de fichier, pas de `search_files`, pas de « je sais que la fiche existe ».
- Écrire le scénario **avant** de traverser.
- Noter « ici il manquerait une image » **sans** s'arrêter pour la spécifier.
- Consigner le chemin **même quand il aboutit vite** — un succès en deux clics est une
  mesure, pas un non-événement.

## Ce que cette traversée ne teste pas — la part de Tim

Popovers au survol, recherche, vue graphe, fil d'Ariane, listings de dossier générés
par Quartz, panneau de backlinks, rendu mobile. Invisibles depuis les fichiers, et
c'est par là qu'un étudiant navigue vraiment. À mener sur **les mêmes scénarios** :
les écarts entre les deux traversées sont la matière la plus intéressante.

## Grille de verdict

| Verdict | Sens |
|---|---|
| **Abouti** | La fiche qui répond est atteinte, et elle répond. |
| **Abouti de justesse** | Atteinte, mais par un lien qui ne l'annonçait pas. |
| **Dévié** | Le chemin mène ailleurs, et l'ailleurs n'est pas absurde. |
| **Cul-de-sac** | Le chemin s'arrête sans réponse. |
| **Aucune porte** | Rien sur le chemin ne nomme le besoin de l'étudiant. |

---

# Les douze scénarios (rédigés avant traversée)

Les **neuf à cible nommable** (1, 2, 4, 5, 6, 7, 8, 9, 11) sont aussi mesurés
mécaniquement par `tools/parcours-etudiant.mjs` — mesure objective, immunisée contre
ce que Claude sait du wiki. Les **trois autres** (3, 10, 12) ne se mesurent pas : la
question n'est pas « combien de clics » mais « existe-t-il une porte depuis un
**symptôme** ». Un wiki rangé par technologie peut n'en avoir aucune.

**Ordre de lecture retenu : 6, 10, 12 d'abord** — les trois frontières (entre les deux
branches, avec les cours des collègues, entre symptôme et organisation). Un défaut de
frontière ne se répare pas par un lien : il peut demander une fiche, un hub refondu, un
arbitrage de périmètre. Autant les découvrir tôt. Ensuite, l'ordre que la sortie du
script désignera comme le plus suspect.

### 1 — « On me demande un cahier des charges, je ne sais pas ce que c'est »
Début de projet. L'énoncé dit « rendre un CdCF ». L'étudiant n'a jamais vu le sigle.
Il arrive sur l'accueil sans savoir dans quelle branche chercher.
**Cible :** `cahier-des-charges-fonctionnel`.

### 2 — « Quel microcontrôleur pour mon projet ? »
L'équipe a un concept, il faut choisir une carte. L'étudiant connaît le mot Arduino et
rien d'autre. Il cherche un critère de choix, pas un tutoriel de prise en main.
**Cible :** `choisir-le-materiel`, à défaut `microcontroleur`.

### 3 — « Mon capteur renvoie n'importe quoi » — *sans cible nommable*
Le montage tourne, les valeurs sautent. L'étudiant ne sait pas si c'est le câblage,
l'alimentation, le code, le capteur ou la mesure elle-même. Il n'a **aucun mot** à
taper : « n'importe quoi » n'est pas une entrée d'index.
**Question :** existe-t-il une porte depuis le symptôme ?

### 4 — « Mon code ne compile pas »
Message d'erreur rouge dans l'IDE. L'étudiant veut savoir lire l'erreur, pas apprendre
le C++. Il est dans la branche embarquée.
**Cible :** `cpp-logs`, à défaut `arduino-debug`.

### 5 — « Le dossier technique, il contient quoi ? »
Rendu de fin de phase annoncé. L'étudiant cherche une liste de pièces à produire.
**Cible :** `dossier-technique`.

### 6 — « Ma PoC élec marche, et après ? » — *frontière embarqué / conduite*
Le montage fait ce qu'on lui demande sur la paillasse. L'étudiant est dans la branche
embarquée depuis trois semaines et n'a plus regardé la conduite de projet. La question
qu'il se pose est une question de **phase**, posée depuis une fiche **technique**.
**Cible :** `preuve-de-concept`, puis `specification-technique`.

### 7 — « On est au milestone PoC, je n'ai pas écouté le prof, le wiki peut m'aider ? »
Symétrique du 6 : l'étudiant part du **jalon** et cherche ce qu'il doit produire.
Il arrive par l'accueil, avec le mot du prof en tête et rien d'autre.
**Cible :** `preuve-de-concept`.

### 8 — « Comment j'alimente mon montage ? »
Trois modules, un moteur, une carte. L'étudiant a un bloc secteur et un doute.
**Cible :** `alimentation-electronique`.

### 9 — « On me demande une AMDEC »
Sigle inconnu, livrable imposé. Même profil que le scénario 1, plus tard dans le projet.
**Cible :** `amdec`.

### 10 — « Mon moteur manque de couple » — *frontière avec la Méca*
Le bras se lève à vide et cale en charge. La cause peut être le moteur, la réduction,
le dimensionnement mécanique, l'alimentation ou la commande. Une partie de la réponse
appartient aux **cours des collègues**, et le wiki est une interface vers eux.
**Question :** le wiki oriente-t-il, ou laisse-t-il croire qu'il répond ?

### 11 — « Je dois faire un PCB, par où je commence ? »
Fin de projet, passage de la platine d'essai au circuit imprimé.
**Cible :** `pcb`, puis `kicad`.

### 12 — « Mon robot marche parfois, comment améliorer la reproductibilité ? » — *sans cible, le cas pur*
Le montage fonctionne une fois sur trois. Ce n'est ni une panne, ni une question de
techno : c'est une question de **méthode**. Le mot « reproductibilité » n'est
probablement pas dans le wiki, et l'étudiant ne sait pas que sa question est une
question d'organisation autant que d'électronique.
**Question :** existe-t-il une porte depuis un symptôme intermittent ?

---

# Sortie du script — lancement du 20/08 (suite 2)

Recette tenue : **242 fiches indexees**, **26 couples**. Lancé par Tim, sortie collée.
**4 290 liens sortants**, soit ~17,7 par fiche.

## Santé du graphe — le réseau est sain, et c'est une mesure

Une seule et même fiche est à la fois **cul-de-sac**, **orpheline** et
**inatteignable depuis l'accueil** : `ressources/index`. Sur 242 fiches, **241 sont
atteignables depuis l'accueil et reçoivent au moins un lien entrant**. Les arcs de
liens rouges de juin et les lots de maillage d'août ont donc tenu. `ressources/index`
est vraisemblablement une page technique (dossier des médias) et non une fiche — **à
vérifier en session 3 avant de la traiter comme un défaut**.

## Les 70 liens morts étaient 1 — mon script avait tort

Le premier lancement a rendu **70 liens morts**. Vérification faite fiche ouverte :
`fonction.md` porte `aliases: [FP, FS, FC]` et `caracteriser-une-exigence.md` porte
`aliases: [critere, niveau, flexibilite]`. Obsidian **et** Quartz résolvent les alias ;
`[[FC]]` est un lien parfaitement valide. **69 faux positifs sur 70** — FC 26, FS 12,
FP 12, niveau 7, critere 6, flexibilite 6.

C'est exactement le motif du 18/08 (*un audit qui ignore une convention du dépôt
produit du bruit à hauteur de ce qu'il ignore*, 67 liens morts annoncés pour 5 réels
faute de C62), commis cette fois par moi. **Ce qui l'a arrêté n'est pas la prudence
mais l'incohérence** : `audit-wikilinks.mjs` annonçait 5 liens morts le 18/08, et deux
audits du même dépôt ne peuvent pas différer d'un facteur quatorze. **Un chiffre qui
contredit un chiffre déjà mesuré est une hypothèse à vérifier, pas une trouvaille.**
Le script a été corrigé (lecture du front matter `aliases:`, deux formes YAML) et sa
recette rouvre à **1 lien mort**, publiée avec sa décomposition.

**Le lien mort réel : `microcontroleur -> xiao`.** `[[xiao]]` n'a ni fichier ni alias —
le hub de famille s'appelle `xiao-esp32-s3`. Ce n'est pas un détail de graphe : c'est
une **porte de famille cassée sur le hub MCU**, là où le scénario 2 envoie l'étudiant.
Huit familles listées, une inatteignable. À corriger en session 3.

## Les neuf couples mesurés

| # | Depuis l'accueil | Depuis le hub de branche |
|---|---|---|
| 1 CdCF | 2 | 1 |
| 2 MCU | 2 | 1 |
| **4 compilation** | **3** | **2** |
| 5 dossier technique | 2 | 1 |
| 6 PoC | 2 | 1 |
| 7 milestone PoC | 2 | 1 |
| 8 alimentation | 2 | 1 |
| **9 AMDEC** | **3** | **2** |
| 11 PCB | 2 | 1 |

**Sept scenarios sur neuf tiennent en deux clics depuis l'accueil.** Deux sortent :
**#9 (AMDEC)** et **#4 (compilation)**, tous deux à trois clics parce qu'ils passent par
un hub intermédiaire — `securite-et-qualite` pour l'AMDEC, `cpp` ou `arduino` pour la
compilation. **Ce sont donc les deux prochaines traversées**, l'ordre étant celui que la
sortie désigne comme le plus suspect.

**Le détour de #9 est le plus intéressant des deux.** `conduite/index` ne cite pas
`amdec` : l'étudiant à qui on demande une AMDEC doit deviner qu'elle se range sous
*sécurité et qualité*. Or son scénario est le jumeau exact du #1 (sigle inconnu,
livrable imposé), qui aboutit en un clic parce que le CdCF, lui, est nommé sur le hub.
**Deux questions de même forme, deux traitements** — à vérifier à la traversée.

**#11 confirme un fait de structure** : depuis l'accueil, le plus court chemin vers
`pcb` passe par **`conduite/index`**, pas par la branche embarquée. Le hub du cycle en V
cite le routage PCB dans sa phase 4. Les deux valent 2 clics, mais l'étudiant qui
choisit « Système embarqué » et celui qui choisit « Conduite de projet » arrivent au
même endroit — rare, et bon signe.

**Ce que le script ne dit pas et que la traversée a dit.** Le couple #6 sort à **1 clic**
depuis `embarque/index`, alors que la traversée conclut à *abouti de justesse*. Les deux
sont vrais : le lien existe bien sur le hub, mais il est à l'étape 6 et l'étudiant est
à l'étape 3. **Le BFS mesure la distance ; il ne mesure pas si l'étudiant a une raison
de cliquer.** C'est l'argument même du régime à deux traversées.

---

# Traversées

<!-- INSERT_TRAVERSEE_HERE -->

## Scénario 6 — « Ma PoC élec marche, et après ? »

**Point d'entrée retenu : `concevoir-l-electronique`.** C'est là que vit la PoC élec
d'un étudiant : le hub embarqué annonce pour cette étape « la simulation des parties
incertaines (**preuve de concept simulée**) ». Partir du hub aurait été plus commode
et moins honnête — l'étudiant qui pose cette question ne revient pas au sommaire, il
est sur la fiche où il vient de finir quelque chose.

### Chemin suivi

| Clic | Page | Ce qui a décidé du clic |
|---|---|---|
| — | `concevoir-l-electronique` | Le mot « preuve de concept » **n'y figure pas une seule fois**. La *Conclusion* propose deux suites : `programmer-l-embarque` (« la suite ») et `dossier-technique` (« le pilotage de cette étape »). |
| 1 | `dossier-technique` | C'est le seul lien qui parle du **projet** et non de la technique. |
| 2 | `preuve-de-concept` | Première phrase de la fiche : « l'architecture validée en concept et **confirmée par la preuve de concept** ». Le `prerequis:` du front matter dit la même chose. |

**Verdict : abouti de justesse, en 2 clics.** La réponse existe et elle est juste — la
phase qui suit la PoC est bien le dossier technique — mais elle est atteinte par un
lien étiqueté *pilotage*, pas par un lien qui répondait à « et après ? ».

### Constats

**Le mot « preuve de concept » est employé deux fois sur le hub embarqué sans être un
lien, et le seul lien qui existe est posé trois étapes trop loin.** Le hub écrit
« preuve de concept simulée » (livrable 3/7) et « typiquement une preuve de concept sur
breadboard » (livrable 5/7) : dans les deux cas, texte nu. Le seul `[[preuve-de-concept]]`
de la page est à l'étape 6, sous *Fiabiliser et déboguer* — c'est-à-dire là où
l'étudiant n'est pas encore quand sa PoC vient de marcher. **La porte est là où le mot
n'est pas, et le mot est là où la porte n'est pas.**

**« Preuve de concept » désigne deux choses différentes dans le wiki, et rien ne le
dit.** Côté V, c'est la **phase 3**, un jalon avec son livrable et sa revue. Côté
embarqué, c'est un **montage minimal qui prouve**, employé aux étapes 3 et 5 — deux
étapes que le hub rattache explicitement au **dossier technique**, donc à la phase 4.
Un étudiant dont la « PoC élec marche » peut donc être en phase 3 ou en phase 4 selon
ce qu'il appelle PoC, et aucune des pages traversées ne l'aide à trancher.

**`concevoir-l-electronique` répond bien à « et après ? », mais seulement en technique.**
Sa *Conclusion* enchaîne sur la programmation et la réalisation physique. La question de
phase est déléguée en une incise (« Le pilotage de cette étape … est porté par le
dossier technique »). La délégation est conforme au cadrage — le calendrier appartient
aux collègues — mais elle suppose que l'étudiant sache que sa question est une question
de pilotage. C'est précisément ce qu'il ne sait pas.

**`specification-technique` n'est atteignable par aucun lien du hub embarqué.** Relevé
sur les trois pages traversées (`embarque/index`, `concevoir-l-electronique`,
`fiabiliser-et-deboguer`) : le hub cite `concept`, `dossier-technique`,
`integration-et-tests` et `preuve-de-concept`, jamais la phase 1. Le CdCF, lui, est
rattrapé à l'étape 6 (`fiabiliser-et-deboguer` renvoie au
`cahier-des-charges-fonctionnel` pour dériver le protocole de tests). **Quatre phases
du V sur cinq sont donc citées depuis la branche embarquée ; la première manque.**

*Ici il manquerait une image* : rien ne montre où les sept étapes embarquées tombent sur
les cinq phases du V. Les deux colonnes sont déclarées orthogonales en prose, jamais
superposées.

---

## Scénario 10 — « Mon moteur manque de couple » *(frontière avec la Méca)*

**Point d'entrée retenu : `arduino-moteur-pas-a-pas`.** Le fil rouge est un bras à
steppers ; l'étudiant qui constate que son axe cale en charge est sur la fiche de son
actionneur, pas sur un hub.

### Chemin suivi

| Clic | Page | Ce qui a décidé du clic |
|---|---|---|
| — | `arduino-moteur-pas-a-pas` | Le symptôme **est nommé** : piège *« Perte de pas sous charge »*, avec sa description exacte (« la position calculée ne correspond plus à la position réelle », « décalage cumulatif »). |
| — | *(arrêt)* | Le mot **couple** apparaît quatre fois sur la page et **n'est jamais un lien**. La *Voir aussi* propose cinq fiches, toutes Arduino, plus `arduino-alimentation`. Aucune ne sort de l'électronique. |

**Verdict : aucune porte.** Le symptôme est reconnu, la fiche s'arrête au bord et ne
dit pas qu'il y a un bord.

### Constats

**Le symptôme est bien identifié — c'est la réponse qui est amputée.** Les remèdes
proposés sont « réduire la vitesse, augmenter le couple (driver plus puissant,
microstepping plus fin, ressort de rappel mécanique) ». Trois remèdes électroniques, un
quatrième mécanique glissé entre parenthèses. **Le dimensionnement — couple nécessaire,
rapport de réduction, inertie, bras de levier — n'est ni traité, ni délégué, ni même
mentionné comme existant.** Une fiche qui répond partiellement sans dire qu'elle répond
partiellement est plus trompeuse qu'une fiche muette : l'étudiant repart en croyant
avoir la liste complète des causes.

**Défaut de fond — la fiche se contredisait sur le microstepping. CORRIGÉ le 20/08
(suite 2), exception (c) au gel.** Le piège *Perte de pas sous charge* donnait
« microstepping plus fin » comme moyen d'**augmenter le couple** ; la section *Cas
particulier*, quarante lignes plus bas, écrivait l'inverse : « couple effectif réduit
aux positions intermédiaires ». La seconde est la bonne — le remède proposé aggravait
le symptôme qu'il prétendait traiter.

> **Motif de l'exception.** Le gel a été posé pour qu'un motif de *parcours* ne se
> dissolve pas sous des corrections au fil de l'eau. Une erreur *technique* publiée
> n'a pas ce statut : la geler ne révèle aucun motif, elle laisse seulement une
> fausseté en production trois sessions de plus. **Arbitrage Tim : (c), exception
> bornée à ce cas.** Une seconde erreur factuelle rouvrirait la question au lieu de
> se réclamer de celle-ci.

Deux éditions. Le piège ordonne désormais les remèdes — **ralentir d'abord** (le couple
d'un pas-à-pas chute quand la fréquence de pas monte, l'inductance des bobines
empêchant le courant de s'établir), rampe d'accélération ensuite, puis seulement la
recherche de couple — et énonce que **le microstepping n'est pas un remède au manque de
couple**. La section *Cas particulier* porte la réciproque explicite. Les deux passages
se renvoient l'un à l'autre : c'est le contraste qui enseigne, pas la correction
silencieuse.

**Ce qui n'a PAS été corrigé, et pourquoi.** La frontière Méca reste ouverte : aucune
porte ajoutée, aucune section *Ce qui relève d'ailleurs*, aucun renvoi vers
`meca/index`. C'est un défaut de **parcours**, exactement ce que le gel protège — et il
se répète peut-être sur les neuf traversées restantes. Le mot « réduction » figure
désormais dans le piège en texte nu : **c'est une cible de lien toute trouvée pour la
session 3**, pas une porte posée aujourd'hui.

**Aucune des pages traversées ne pointe vers la branche Méca.** Ni le hub embarqué (qui
cite `conduite/index` quatre fois et jamais `meca/index`), ni `concevoir-l-electronique`,
ni `arduino-moteur-pas-a-pas`. **L'accueil est le seul endroit rencontré où la branche
Méca existe.** Un étudiant entré par l'embarqué et descendu de trois clics n'a plus
aucun moyen de savoir qu'elle est là. Formulation prudente assumée : relevé **sur les
pages traversées**, pas sur les 242.

**Les fiches-étape ont une section *Ce qui relève d'ailleurs* ; `arduino-moteur-pas-a-pas`
n'a rien d'équivalent.** Elle a une *Voir aussi* horizontale (les autres actionneurs
Arduino) et un *Raccrochage projet* vertical (les phases du V), mais **rien pour la
frontière latérale** avec les cours des collègues. J'ai d'abord écrit que c'était
structurel — le gabarit tuto n'aurait pas de case pour ça. **La traversée 3 a démenti
cette explication** : `arduino-capteur-analogique` n'a pas non plus de section dédiée, et
délègue pourtant vers quatre fiches hors de son périmètre, **depuis ses pièges**. Le
mécanisme n'est donc pas la section, c'est **le fait que les pièges portent des liens
sortants** — ceux de `arduino-moteur-pas-a-pas` n'en portent qu'un, vers `potentiometre`.
Correction de mon propre constat : ce n'est pas le gabarit, c'est la fiche.

*Ici il manquerait une image* : rien ne montre la chaîne couple moteur → réduction →
charge, ni où le pas se perd.

---

## Scénario 12 — « Mon robot marche parfois, comment améliorer la reproductibilité ? » *(le cas pur)*

**Point d'entrée retenu : l'accueil**, puis le hub embarqué. C'est le scénario où
l'étudiant a le moins de vocabulaire : il ne sait pas si sa question est technique ou
méthodologique, donc il repart du haut.

### Chemin suivi

| Clic | Page | Ce qui a décidé du clic |
|---|---|---|
| — | `index` | Trois branches. Rien ne nomme un symptôme ; l'étudiant choisit **Système embarqué** parce que son robot est électronique. |
| 1 | `embarque/index` | Étape 6, *Fiabiliser et déboguer* : « **Un montage qui marche au premier essai n'est pas fiable pour autant.** » C'est sa phrase, écrite avant lui. |
| 2 | `fiabiliser-et-deboguer` | La fiche s'ouvre sur la même phrase et porte un piège intitulé *« Confondre “marche une fois” et “fiable” »*. |

**Verdict : abouti, en 2 clics.** C'est le meilleur résultat des trois traversées, et il
tient à une seule chose : **le hub a écrit le symptôme dans le teaser de l'étape**, pas
seulement le nom de l'étape.

### Constats

**Ce qui a marché est reproductible et mérite d'être nommé.** Les six autres étapes du
hub sont annoncées par ce qu'elles *contiennent* (« temps réel, robustesse, instruments
de mesure ») ; l'étape 6 est la seule annoncée par ce que l'étudiant *ressent*. La porte
s'est ouverte sur la formulation du symptôme, pas sur la table des matières. **C'est le
seul mécanisme de porte-depuis-symptôme observé jusqu'ici dans le wiki**, et il n'a rien
de délibéré — à confirmer sur les neuf traversées restantes avant d'en faire une règle.

**Le mot « reproductibilité » n'apparaît nulle part sur le chemin.** La fiche dit
« fiable », « fiabilité », « reproduis le défaut », « marcher à chaque fois ». Le chemin
fonctionne parce que l'étudiant a cliqué, pas parce qu'il a cherché : **un étudiant qui
tape son mot dans la recherche ne trouve rien.** Écart à confronter à la traversée de
Tim au rendu — c'est exactement le genre de divergence que les deux traversées doivent
faire apparaître.

**La moitié organisationnelle de la question n'a pas de porte.** « Marche parfois » a
deux lectures : le système est instable (traitée, et bien traitée), ou **la manip n'est
pas reproductible d'une personne et d'un jour à l'autre** — câblage refait de mémoire,
version du code incertaine, réglage non consigné. La fiche traite la première.
*Ce qui relève d'ailleurs* renvoie vers `preuve-de-concept`, `dossier-technique` et
`integration-et-tests` : **trois phases du V, aucune fiche de méthode**. Ni
`gestion-de-projet`, ni `revue-de-code`, ni `archivage-projet`.

**Piste à vérifier en session 3, hors traversée** (elle vient de l'index du script, pas
d'un lien rencontré) : `conduite/meo/cable-management` existe. Si elle traite du contact
intermittent, c'est une réponse frontale au symptôme, et **aucune porte n'y mène depuis
l'étape 6**. À ouvrir avant d'arbitrer — ne pas poser de mémoire ce qu'on n'a pas lu.

---

## Scénario 9 — « On me demande une AMDEC »

**Point d'entrée : l'accueil.** Sigle inconnu, livrable imposé, aucune idée de branche —
même profil que le scénario 1, et c'est ce qui rend la comparaison utile.

### Chemin suivi

| Clic | Page | Ce qui a décidé du clic |
|---|---|---|
| — | `index` | « AMDEC » évoque une méthode, donc **Conduite de projet**. |
| 1 | `conduite/index` | **Le mot AMDEC n'y figure pas.** Les cinq phases ne le citent nulle part. Deux entrées parlent de « risques », en para. |
| 2 | `securite-et-qualite` | Choisi pour « analyse des risques **produit** et utilisateur ». |
| 3 | `amdec` | Bloc 1 : « une **analyse de risques** type [[amdec\|AMDEC]] produit », plus l'entrée *Voir aussi*. |

**Verdict : abouti de justesse, en 3 clics.** La fiche cible est excellente et répond
entièrement. Le détour vient d'en amont.

### Constats

**Le hub propose deux portes étiquetées « risques », et une seule est la bonne.** Sous
*En parallèle de toutes les phases*, `gestion-de-projet` annonce « planning, suivi des
tâches, **gestion des risques** » et `securite-et-qualite` annonce « **analyse des
risques produit** et utilisateur ». Le seul discriminant est le mot *produit* — or
l'étudiant qui ignore ce qu'est une AMDEC ignore précisément qu'elle porte sur le
produit et non sur le projet. **Une chance sur deux de partir vers la matrice de
risques**, qui est l'autre méthode, celle qu'on ne lui demande pas.

**Et `amdec` le sait.** La fiche porte un `[!warning]` **AMDEC ≠ matrice de risques**
qui détaille exactement la confusion : deux axes contre trois, aléas du projet contre
modes de défaillance du produit. **La fiche désamorce un piège que le hub vient de
tendre** — mais elle ne le désamorce que pour qui l'a atteinte. C'est le motif du
scénario 6 sous une autre forme : la mise en garde est en aval de l'endroit où elle
servirait.

**La comparaison avec le scénario 1 est le vrai résultat.** Deux questions de forme
rigoureusement identique — sigle inconnu, livrable imposé, entrée par l'accueil — et
**deux clics d'écart**. Le CdCF aboutit en 2 parce qu'il est **nommé comme livrable** de
la phase 1 sur le hub ; l'AMDEC en 3 parce qu'elle n'est nommée nulle part. La
différence n'est pas dans la qualité des fiches, elle est dans le fait qu'**une phase du
V liste ses livrables par leur nom et l'autre non**. À vérifier sur #5 et #7, qui
testent les deux autres livrables jalonnés.

**Une contradiction de périmètre à arbitrer en session 3.** `securite-et-qualite` écrit
que « la trame ne porte pas la méthode AMDEC en détail — **elle relève des cours
dédiés** », et la phrase suivante renvoie à `amdec`, qui est un `type: tuto` de 4 temps
avec sa grille de cotation G×O×D et ses exemples. Le wiki dit qu'il délègue, puis livre.
L'une des deux affirmations est à corriger — probablement la phrase de délégation, la
fiche existant et étant bonne. **Ce n'est pas un défaut de parcours** : c'est une borne
de périmètre, du même ordre que celles que le cadrage projet arbitre.

---

## Scénario 4 — « Mon code ne compile pas »

**Point d'entrée : l'accueil**, puis le hub embarqué. L'étudiant a un bandeau rouge dans
l'IDE et veut lire l'erreur, pas apprendre le C++.

### Chemin suivi

| Clic | Page | Ce qui a décidé du clic |
|---|---|---|
| — | `index` | Le code est embarqué → **Système embarqué**. |
| 1 | `embarque/index` | **Deux étapes se disputent le clic** : étape 4 *Programmer* (« Langage : C++ ») et étape 6 *Fiabiliser et **déboguer*** (« surtout **trouver les bugs** »). |
| 2 | `cpp` | Choix de l'étape 4. Le parcours annonce en clair : **7. Lire et comprendre les erreurs — décoder les messages du compilateur pour se dépanner seul**. |
| 3 | `cpp-logs` | Évident. |

**Verdict : abouti, en 3 clics.** La cible est une des meilleures fiches traversées —
anatomie du message, `fichier:ligne:colonne`, les deux familles compilation /
téléversement, six messages fréquents, trois cas verbatim, deux exercices corrigés.

### Constats

**L'étape 6 est un piège, et c'est le constat de la traversée.** Un étudiant dont le code
ne compile pas cherche le mot **déboguer** ; il est à l'étape 6, pas à l'étape 4. Or
`fiabiliser-et-deboguer` traite le **bug d'exécution** — reproduire, isoler, observer à
l'oscilloscope — et **ne porte aucun lien vers `cpp-logs`** (vérifié fiche ouverte : ses
dix-neuf liens sortants vont aux instruments, aux notions de robustesse et aux phases du
V). Le mauvais chemin ne se signale pas comme mauvais : il mène à une fiche sérieuse qui
parle bien de débogage, et l'étudiant peut y passer dix minutes avant de comprendre
qu'elle ne parle pas de *son* problème. **Un cul-de-sac crédible coûte plus cher qu'un
cul-de-sac visible.**

**Le partage compiler / exécuter est enseigné partout sauf là où l'étudiant choisit.**
`cpp-logs` ouvre dessus (« deux étapes distinctes, donc deux familles d'erreurs »),
`cpp-execution` le porte, la capture #50 a même ajouté la phrase où l'IDE l'explique
lui-même. Le seul endroit où il n'apparaît pas est le **teaser de l'étape 6**, qui est
précisément le point de décision.

**Ma cible de repli était la mauvaise, et la traversée le dit.** La table du script donne
`arduino-debug` en seconde cible de #4 (2 clics depuis le hub). C'est faux :
`cpp-logs` renvoie à `arduino-debug` en écrivant « **au-delà des erreurs de
compilation**, traquer les bugs d'exécution ». Les deux fiches savent où passe la
frontière ; c'est ma table qui ne le savait pas. **Le chiffre était bon, la cible ne
l'était pas** — à corriger dans `SCENARIOS` en session 3, et rappel que le script mesure
ce qu'on lui demande de mesurer.

**Friction mineure, signée.** `cpp` s'annonce comme un parcours « à suivre dans l'ordre :
chaque étape suppose la précédente », et l'item 7 porte `prerequis: cpp-execution`.
L'étudiant bloqué arrive dans un **cours** là où il cherche un **dépannage**. Le titre de
l'item 7 est assez explicite pour qu'il passe outre — constaté, pas un blocage.

*Ici il manquerait une image* : rien sur le chemin ne montre les deux familles d'erreurs
côte à côte, là où l'étudiant doit trancher.

---

## Scénarios 1, 5 et 7 — les trois livrables nommés

Traités ensemble : ils testent la même hypothèse, sortie du scénario 9. Entrée par
l'accueil pour les trois.

| # | Chemin | Clics | Verdict |
|---|---|---|---|
| 1 CdCF | `index` > `conduite/index` > `cahier-des-charges-fonctionnel` | 2 | **Abouti** |
| 5 dossier technique | `index` > `conduite/index` > `dossier-technique` | 2 | **Abouti** |
| 7 milestone PoC | `index` > `conduite/index` > `preuve-de-concept` | 2 | **Abouti** |

Dans les trois cas, le clic depuis `conduite/index` est pris dans le **callout
`[!livrable]` de la phase**, qui nomme la fiche cible en toutes lettres. Aucune
hésitation, aucun détour, aucun intermédiaire.

### Constats

**L'hypothèse tient : trois sur trois.** *Un livrable nommé dans le callout de sa phase
est atteint en un clic depuis le hub ; un livrable non nommé ne l'est pas.* Le hub porte
cinq callouts `[!livrable]`, un par phase, et **les trois qu'on a testés aboutissent
tous**. L'AMDEC, elle, n'apparaît dans aucun — parce qu'elle n'est pas un livrable de
phase mais une **méthode mobilisée dans deux phases** (`phases: [concept,
dossier-technique]` à son front matter). **Le hub est indexé par livrable, et l'étudiant
arrive avec un nom de méthode.** C'est la formulation utile du défaut : ni un lien
manquant, ni une faute d'auteur, mais **un axe d'indexation unique** là où les questions
des étudiants en suivent deux.

**Les trois cibles répondent vraiment, et pas de la même façon.** `cahier-des-charges-fonctionnel`
répond à *« je ne sais pas ce que c'est »* par trois rôles (référence partagée, document
opposable, grille d'évaluation finale) avant toute procédure — c'est le bon ordre pour
un sigle inconnu. `dossier-technique` répond à *« il contient quoi »* dès sa première
phrase par l'énumération des pièces. `preuve-de-concept` répond à *« je n'ai pas écouté
le prof »* par une *Posture attendue* qui énonce le contresens exact que ferait un
étudiant non prévenu (« on a le matériel, on monte, on verra »). **Trois formats
différents pour trois questions différentes** — le wiki ne sert pas le même gabarit à
tout le monde, et ça se voit à la lecture.

**Un détail qui compte pour la traversée de Tim** : `cahier-des-charges-fonctionnel`
porte `aliases: [CdCF]`. Un étudiant qui tape « CdCF » dans la recherche tombe dessus,
là où « reproductibilité » (scénario 12) ne rend rien. **Les alias sont une seconde
porte, invisible depuis les liens** — à relever systématiquement au rendu.

---

## Scénarios 2, 8 et 11 — les trois étapes de la colonne embarquée

Même regroupement : trois questions dont la réponse est une **étape** de la colonne
embarquée, et non un livrable du V.

| # | Chemin | Clics | Verdict |
|---|---|---|---|
| 2 quel MCU | `index` > `embarque/index` > `choisir-le-materiel` | 2 | **Abouti** |
| 8 alimentation | `index` > `embarque/index` > `alimentation-electronique` | 2 | **Abouti** |
| 11 PCB | `index` > `embarque/index` > `pcb` | 2 | **Abouti** |

### Constats

**Le hub embarqué est indexé par étape ET par objet, et c'est ce qui le sauve.** Chaque
étape porte une liste à puces qui nomme les fiches (« Microcontrôleur — panorama des
familles », « Concevoir une alimentation », « Circuit imprimé »). L'étudiant n'a pas
besoin de savoir à quelle étape il en est : il **scanne les noms**. C'est exactement ce
qui manque au hub du V, où seul le livrable est nommé. **Deux hubs, deux stratégies
d'indexation, et celle de l'embarqué est la plus robuste à l'ignorance du lecteur.**

**#2 confirme le lien mort du script sur le terrain.** `choisir-le-materiel` renvoie au
hub `microcontroleur` pour l'aide au choix ; c'est là que `[[xiao]]` ne résout pas. Un
étudiant qui compare les huit familles en trouve **sept**.

**#8 et #11 sont atteints par deux étapes chacun.** `alimentation-electronique` est citée
à l'étape 2 *et* à l'étape 3 ; `pcb` à l'étape 3 *et*, depuis l'autre branche, dans la
phase 4 du V. La redondance n'est pas du bruit : elle rattrape l'étudiant qui s'est
trompé d'étape. **À ne pas « nettoyer » en session 3.**

**Trouvaille latérale pour le scénario 12.** `pcb` énumère les limites de la platine
d'essai en ouvrant par « **contacts intermittents** », et `alimentation-electronique`
écrit « pour que le microcontrôleur **ne se réinitialise pas** ». Ce sont deux réponses
frontales à *« mon robot marche parfois »*, dans deux fiches que rien ne désigne comme
réponses à ce symptôme. **Le wiki a la matière ; il ne l'a pas indexée par symptôme.**

---

## Scénario 3 — « Mon capteur renvoie n'importe quoi » *(sans cible nommable)*

**Point d'entrée : `arduino-capteur-analogique`**, la fiche que l'étudiant suivait quand
les valeurs se sont mises à sauter. C'est l'entrée honnête — il ne repart pas du
sommaire, il est déjà sur la page.

### Chemin suivi

| Clic | Page | Ce qui a décidé du clic |
|---|---|---|
| — | `arduino-capteur-analogique` | **Sept pièges**, dont deux nomment le symptôme : « bruit sur les mesures » (±1 à ±3 LSB) et « câbles trop longs sans masse — **Symptôme : la mesure oscille de ±20 LSB sans rien faire** ». |
| 1 | `filtrage` ou `precision-de-mesure` | Les deux sont citées **depuis les pièges**, pas seulement en *Voir aussi*. |

**Verdict : abouti — mais depuis la fiche, pas depuis le wiki.** Si l'étudiant est sur sa
fiche, la réponse est sous ses yeux. S'il repart de l'accueil, **il n'y a aucune porte
depuis le symptôme** : ni l'accueil ni le hub embarqué ne portent le mot « capteur »
ailleurs que dans l'étape *Choisir le matériel*, qui parle d'achat et non de panne.

### Constats

**C'est le contre-modèle exact du scénario 10, et c'est la trouvaille de la traversée.**
Deux fiches-tuto Arduino, même gabarit, même section *Pièges*. Celle du capteur énumère
sept causes ordonnées (confusion d'API, brochage, résolution, référence de tension,
bruit, hors-plage, longueur de câble), **nomme les symptômes** et **sort quatre fois de
son périmètre** (`filtrage`, `precision-de-mesure`, `niveaux-de-tension`,
`lire-une-datasheet`). Celle du moteur énumère huit pièges et **ne sort qu'une fois**,
vers `potentiometre`. **Le gabarit est le même ; la différence est éditoriale.** Ce que
la session 3 doit corriger sur `arduino-moteur-pas-a-pas` a donc un modèle dans le wiki,
deux dossiers plus loin.

**Un diagnostic différentiel existe, mais il s'appelle « Pièges ».** Les sept causes sont
rangées dans l'ordre où un auteur les écrit, pas dans l'ordre où un étudiant les teste —
et les deux entrées qui portent explicitement un symptôme sont en **6ᵉ et 7ᵉ position**.
L'étudiant doit lire sept paragraphes et apparier lui-même. Ça marche, mais ça ne
s'annonce pas : **le titre de la section ne promet pas de répondre à une panne.**

**La question « n'importe quoi » en cache deux, et le wiki traite les deux sans les
séparer.** Une mesure **instable** (bruit, antenne 50 Hz, masse) et une mesure **fausse
mais stable** (mauvaise pleine échelle, référence à 4,8 V, capteur 3,3 V sur ADC 5 V,
mauvaise loi de conversion) n'ont ni les mêmes causes ni les mêmes parades. Les deux
sont couvertes — aucune n'est étiquetée. **Le tri « ça saute » / « c'est décalé » est
le premier geste de diagnostic, et il n'est écrit nulle part.**

*Ici il manquerait une image* : rien ne montre côte à côte une mesure bruitée et une
mesure biaisée.

---

# Synthèse — fin de la session 1

**Les douze scénarios sont traversés côté fichiers.** Reste la traversée de Tim au rendu
(session 2), puis l'arbitrage et les corrections (session 3). **Aucune correction de
parcours n'a été appliquée** ; la seule édition de la session est l'exception (c) sur le
microstepping, qui est une erreur technique et non un défaut de chemin.

| Verdict | Scénarios |
|---|---|
| **Abouti** | 1, 2, 4, 5, 7, 8, 11, 12 — et **3** depuis sa fiche |
| **Abouti de justesse** | 6, 9 |
| **Aucune porte** | 10 — et **3** depuis l'accueil |

**Le motif principal, tenu sur les douze : le wiki relie bien, il étiquette mal.** Le
graphe est sain (241 fiches atteignables sur 242, 4 290 liens, 1 lien mort). Aucun
scénario n'échoue faute de lien. Les trois qui échouent ou peinent échouent parce que
**le mot que l'étudiant a en tête n'est pas sur la porte** : « preuve de concept » écrite
deux fois sans lien et liée trois étapes plus loin (6), « AMDEC » absente du hub (9),
« déboguer » posé sur l'étape qui ne répond pas (4), « couple » jamais lié (10).

**Le second motif est un axe d'indexation manquant.** Les deux hubs indexent par
**étape** (embarqué, qui nomme aussi les objets — le plus robuste) et par **livrable**
(le V — trois sur trois quand le livrable est nommé, échec quand il ne l'est pas).
**Aucun des deux n'indexe par symptôme**, alors que quatre des douze questions en sont
(3, 4, 10, 12). La seule porte-depuis-symptôme du wiki est un accident heureux : le
teaser de l'étape 6 du hub embarqué.

**Ce que la matière existante permet.** Le wiki **a** les réponses aux quatre questions de
symptôme — pièges de `arduino-capteur-analogique`, `filtrage`, `precision-de-mesure`,
`cpp-logs`, « contacts intermittents » de `pcb`, « ne se réinitialise pas » de
`alimentation-electronique`, `fiabiliser-et-deboguer`. **Rien de tout ça n'est à écrire ;
tout est à désigner.** C'est le matériau d'une décision de session 3 — pas d'un lot de
liens.

**Ce qui ne se répare pas par une étiquette** : la frontière Méca (10). Aucune des pages
traversées dans les douze scénarios ne pointe vers `meca/index`. L'accueil reste le seul
endroit rencontré où la troisième branche existe.

## À verser à la session 3 — relevés hors parcours

- `microcontroleur → [[xiao]]` : lien mort, porte de famille cassée. Huit familles
  listées, sept atteignables.
- `securite-et-qualite` écrit déléguer la méthode AMDEC « aux cours dédiés », et le wiki
  la livre en tuto complet. Borne de périmètre à trancher.
- **`ressources/index` — vérifié le 20/08 (suite 2) : ce n'est pas un défaut.** Trois
  lignes, page d'atterrissage du dossier de médias, aucun lien par construction. Elle
  fausse en revanche les trois compteurs du script (cul-de-sac, orpheline,
  inatteignable) sans rien signaler — candidate à l'exclusion, au même titre que
  `templates/`, et **à poser sur le tuple le plus étroit** (C97) : exclure la fiche,
  pas le dossier `ressources/`.
- Table `SCENARIOS` du script : `arduino-debug` est une mauvaise cible de repli pour #4.
- **`conduite/meo/cable-management` — ouverte le 20/08 (suite 2) : elle répond
  frontalement au scénario 12.** « Une cause classique de pannes **intermittentes**
  (faux contacts, fils arrachés) », plus le repérage des deux extrémités et le *strain
  relief* — et elle incarne le fil rouge (« évite que le mouvement n'arrache une
  liaison »). **Sa seule porte entrante est la ligne MEO du hub du V**, où un étudiant ne
  cherchera jamais un problème de câblage. C'est le cas le plus net du motif de la
  session : *la réponse existe, elle est bonne, et rien ne la désigne*.

