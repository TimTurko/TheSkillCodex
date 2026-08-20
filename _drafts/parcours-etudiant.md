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

**Défaut de fond à corriger en session 3 : la fiche se contredit sur le microstepping.**
Le piège *Perte de pas sous charge* donne « microstepping plus fin » comme moyen
d'**augmenter le couple** ; la section *Cas particulier — Microstepping et lissage*,
quarante lignes plus bas, écrit l'inverse : « **couple effectif réduit** aux positions
intermédiaires ». La seconde formulation est la bonne. Le remède proposé aggrave le
symptôme qu'il prétend traiter. **Ce n'est pas un défaut de parcours, c'est un défaut
technique** — relevé ici parce que le parcours y mène, consigné pour la session 3.

**Aucune des pages traversées ne pointe vers la branche Méca.** Ni le hub embarqué (qui
cite `conduite/index` quatre fois et jamais `meca/index`), ni `concevoir-l-electronique`,
ni `arduino-moteur-pas-a-pas`. **L'accueil est le seul endroit rencontré où la branche
Méca existe.** Un étudiant entré par l'embarqué et descendu de trois clics n'a plus
aucun moyen de savoir qu'elle est là. Formulation prudente assumée : relevé **sur les
pages traversées**, pas sur les 242.

**Les fiches-étape ont une section *Ce qui relève d'ailleurs* ; les fiches-tuto de
famille n'en ont pas.** `concevoir-l-electronique` délègue proprement la fabrication et
l'écoconception. `arduino-moteur-pas-a-pas` n'a pas d'équivalent — elle a une *Voir
aussi* horizontale (les autres actionneurs Arduino) et un *Raccrochage projet* vertical
(les phases du V), mais **rien pour la frontière latérale** avec les cours des collègues.
C'est structurel, pas accidentel : le gabarit tuto n'a pas de case pour ça.

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

