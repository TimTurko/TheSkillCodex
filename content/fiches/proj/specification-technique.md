---
title: Spécification technique
type: trame
phase: 1
phases:
  - specification
tags:
  - proj
  - trame
  - phase-1
prerequis: []
aa:
  - RA-PROJET-C04-4/PROJ/1
  - RA-PROJET-C04-4/PROJ/2
  - RA-PROJET-C04-4/PROJ/7
  - RA-PROJET-C07-1/PROJ/2
  - RA-MEO-C10-3/MEO/1
draft: false
---

La **spécification technique** est la première phase du projet [[mecatronique|mécatronique]] : elle transforme un besoin formulé en langage courant ("on aimerait un robot qui...") en un document de référence chiffré et opposable — le [[cahier-des-charges-fonctionnel|cahier des charges fonctionnel]]. C'est la phase qui décide *ce qu'on doit faire*, avant tout choix de solution technique.

## Posture attendue

La tentation, à ce stade, est de sauter directement aux composants : "il nous faudrait un ESP32, un capteur de température, un moteur pas-à-pas". Résistez. Cette étape ne demande pas d'imaginer la solution, elle demande de **comprendre le problème**. Plus vous serez précis ici, moins vous reviendrez en arrière plus tard. Un cahier des charges bâclé coûte deux à cinq fois plus cher en temps passé à le corriger à la fin du projet qu'au début.

## Objectif de la phase

Produire un cahier des charges fonctionnel (CdCF) qui :

- formule sans ambiguïté **ce que le système doit faire** (et pas comment)
- chiffre chaque exigence ([[critere|critère]], [[niveau|niveau]], [[flexibilite|flexibilité]])
- intègre les contraintes d'[[ecoconception|écoconception]]
- s'appuie sur un [[etat-de-l-art-technique|état de l'art technique]]
- est validé par le client ou commanditaire du projet

Ce document servira de **référence pendant tout le projet** et de **grille d'évaluation finale** : à la livraison, on reprend le CdCF point par point pour valider ou non chaque exigence.

## Démarche

### 1. Analyser le besoin

Avant tout schéma ou choix de composant, il faut comprendre **ce qu'on cherche vraiment à faire et pour qui**. Cette étape est la plus tentée d'être bâclée, et la plus pénalisante quand elle l'est : un besoin mal compris produit un système qui fonctionne mais qui ne sert à rien.

L'analyse du besoin se mène en trois temps : contextualiser, formuler avec la bête à cornes, valider.

*Selon les projets, une note de cadrage peut être fournie par les enseignants. Dans ce cas, vous ne « découvrez » pas le besoin — vous le **reformulez** pour montrer que vous l'avez compris, et vous le **précisez** sur ce qui n'est pas explicite. La démarche reste la même.*

#### Contextualiser

Le contexte répond à la question : **pourquoi ce projet existe ?**

À traiter dans le rapport :

- **Origine du projet** — qui le demande, pourquoi maintenant, quelle situation initiale le motive
- **Parties prenantes** — qui est concerné (utilisateur final, client, mainteneur, fabricant, voisinage, environnement)
- **Verrous technologiques** — quels obstacles techniques ou scientifiques le projet cherche à dépasser

> [!warning] Attention
> **Verrou technologique ≠ difficulté personnelle.** « Nous n'avons jamais fait de [[pcb|PCB]] » n'est pas un verrou technologique, c'est un manque d'expérience qu'on va combler. Un vrai verrou : « détecter un gaz inflammable avec une concentration < 50 [[ppm|ppm]] avec un composant à moins de 10 € en grande série ». Si votre projet n'a pas de verrou technologique fort, dites-le honnêtement et déplacez l'enjeu ailleurs (intégration système, contraintes industrielles, performances).

#### Formuler le besoin avec la bête à cornes

La [[bete-a-cornes|bête à cornes]] est l'outil canonique de [[afnor-nfx50-151|la norme NF X50-151]] pour exprimer un besoin de manière formelle. Elle force trois réponses :

- **À qui le système rend-il service ?** → l'utilisateur (au sens large)
- **Sur quoi agit-il ?** → la matière d'œuvre, l'objet ou le milieu sur lequel il opère
- **Dans quel but ?** → le service rendu

![Bête à cornes — schéma générique](/ressources/img/bete-a-cornes-generique.svg)

> [!example] Exemple : projet couveuse
>
> - **À qui** : éleveur amateur en autoconsommation
> - **Sur quoi** : œufs de poule fécondés
> - **But** : assurer le développement embryonnaire jusqu'à l'éclosion sans surveillance permanente

##### Cas particulier : projet école sans client réel

Beaucoup de projets pédagogiques n'ont pas de client externe et seront démontés après soutenance (robot solveur de labyrinthe, robot sumo, etc.). La [[bete-a-cornes|bête à cornes]] paraît alors tourner à vide.

Deux postures honnêtes selon le projet :

- **L'étudiant devient son propre client** : le service rendu est l'acquisition de compétences ciblées (« développer une chaîne d'asservissement, intégrer une carte électronique sur mesure, manipuler une régulation [[pid|PID]] »). Le « à qui » est l'équipe elle-même, le « but » est explicitement pédagogique. C'est défendable en école, **pas en projet professionnel**.
- **L'équipe se donne un client fictif crédible** : pour le robot labyrinthe, on peut imaginer un cas d'usage (« robot d'inspection de canalisations enterrées »). L'analyse fonctionnelle devient cohérente, et l'exercice prend une dimension d'ingénierie réaliste.

Choisissez explicitement l'une des deux postures et tenez-la pendant toute la rédaction du CdCF.

> [!example] Exemple : projet bras 3 axes
> Le projet fil rouge de ce tutoriel — un bras robotique pédagogique 3 axes — relève de la **posture étudiant-client-de-lui-même** : le commanditaire est l'enseignant de mécatronique lui-même, et le service rendu est explicitement pédagogique (un support démontable et reproductible pour enseigner la chaîne d'asservissement complète).
>
> - **À qui** : enseignant de mécatronique souhaitant un support pédagogique réutilisable
> - **Sur quoi** : objets légers (≤ 100 g) à déplacer dans un volume de travail accessible
> - **But** : illustrer une démarche projet mécatronique complète sur un système simple, démontable et reproductible

#### Valider la compréhension du besoin

Une fois la [[bete-a-cornes|bête à cornes]] formulée, **confrontez-la** :

- **Mode sujet ouvert** (besoin construit par l'équipe) : la valider auprès du [[relation-client|client]] réel ou de son représentant. Si la formulation surprend le client, c'est qu'on a mal compris.
- **Mode sujet cadré** (note de cadrage fournie) : la confronter au document. Y a-t-il des éléments du cadrage qui n'apparaissent pas dans la bête à cornes ? Des choix qu'on a faits qui ne sont pas justifiés par le cadrage ?

Cette validation laisse une trace écrite (mail, compte-rendu de réunion, ou section dédiée du CdCF). C'est la preuve que la compréhension est partagée — sans elle, vous travaillez sur des suppositions.

> [!tip] Astuce
> **La bête à cornes paraît triviale, et c'est précisément là sa puissance.** Trois questions, trois réponses : ça semble enfantin. Mais formuler en trois lignes ce qu'on croyait évident révèle les désaccords cachés dans l'équipe ou avec le client. Le moment où deux équipiers répondent différemment au « à qui » est exactement le moment où l'outil paye son utilité.

> [!livrable] Livrables 1/6 — Spécification technique
> - Texte de contextualisation du projet (origine, parties prenantes, verrous technologiques)
> - Schéma de la [[bete-a-cornes|bête à cornes]] du projet
> - Trace écrite de validation du besoin (mail, compte-rendu de réunion, ou section dédiée du CdCF)

---

### 2. Étudier l'existant

**Le besoin est compris et validé.** Avant de chiffrer ce que votre système doit faire, regardez ce qui existe déjà. Personne ne conçoit dans le vide : pour presque tout projet mécatronique, des solutions commerciales, des projets open source ou des projets école antérieurs ont déjà réalisé un projet similaire. Les étudier permet d'identifier des briques réutilisables, de calibrer les ordres de grandeur réalistes, et d'éviter de réinventer ce qui marche déjà.

Ce travail produit un **[[etat-de-l-art-technique|état de l'art technique]]** : une comparaison chiffrée de solutions existantes selon des critères choisis. Il se mène en trois temps : recenser les solutions, définir les critères, comparer et conclure.

> [!warning] Attention
> **État de l'art technique ≠ revue bibliographique.** La revue bibliographique consiste à lire (articles, datasheets, normes, livres) et à produire des notes. L'état de l'art technique consiste à recenser ce qui existe et qui marche, et à produire une **comparaison chiffrée orientée décision**. Les deux se nourrissent — la biblio fournit la matière — mais ce n'est pas le même livrable. Un état de l'art qui n'est qu'une liste d'articles lus n'est pas un état de l'art.

#### Recenser les solutions existantes

Identifier **3 à 6 références comparables** qui adressent un besoin proche du vôtre, même partiellement. Pas plus : au-delà, l'analyse se dilue. Pas moins : avec 1 ou 2 solutions, on n'a pas de quoi comparer.

Sources à explorer systématiquement :

- **Produits commerciaux** — catalogues fabricants, sites de distributeurs, fiches techniques
- **Projets open source** — GitHub, Hackaday, Thingiverse, Instructables, Open Hardware Repository
- **Publications académiques courtes** — papiers de conférence, mémoires de fin d'études, articles de vulgarisation technique
- **Projets école antérieurs** — archives de l'établissement, retours d'expérience disponibles

Noter pour chaque référence retenue : nom, source/URL, principaux chiffres connus, statut (en production, en projet, abandonné). Cette première passe peut être large : on filtre ensuite par pertinence.

#### Définir les critères de comparaison

Choisir **5 à 8 critères chiffrables** qui font sens pour votre projet, ancrés sur le besoin formulé à l'étape 1. Les critères doivent permettre de **discriminer les solutions entre elles** : un critère sur lequel toutes les solutions ont la même valeur n'apporte rien.

Familles de critères à considérer :

- **Coût** — d'achat, de fabrication, de maintenance (presque toujours présent)
- **Performance principale** — la grandeur cible du système (précision, débit, autonomie, charge utile selon le projet)
- **Contraintes d'usage** — encombrement, masse, consommation, robustesse, sécurité
- **[[ecoconception|Écoconception]]** — origine et recyclabilité des matériaux, durabilité, démontabilité, réparabilité
- **Ouverture** — disponibilité du [[bom|BOM]], du firmware, des schémas (déterminant pour réutiliser des briques)

Les critères retenus ici préfigurent ceux que vous chiffrerez à l'étape 4 dans le CdCF. Bien choisis, ils rendent l'étape 4 nettement plus simple.

#### Comparer en tableau

Croiser solutions et critères dans un **tableau N solutions × M critères** (en général solutions en colonnes, critères en lignes pour la lisibilité). Valeurs chiffrées (« 250 g », « 0,1 mm », « 180 € »). Pas de cellule vide : une donnée manquante se note « n.c. » (non communiqué) ou « ? », et son absence devient elle-même une information.

Le tableau seul ne suffit pas. Conclure en quelques lignes : **qu'est-ce qu'on retient ?** Quelles solutions inspirent l'architecture envisagée ? Lesquelles écarte-t-on, pourquoi ? Quels ordres de grandeur émergent de la comparaison et serviront à calibrer le CdCF ?

> [!example] Exemple : projet bras 3 axes
> Trois références comparables retenues :
>
> | Critère | Niryo One | uArm Swift Pro | BCN3D Moveo |
> |---|---|---|---|
> | Coût | ~3 000 € | ~600 € | ~300 € (matériaux) |
> | Charge utile | 500 g | 500 g | 250 g (estimé) |
> | Répétabilité | 0,5 mm | 0,2 mm | 1-2 mm (estimé) |
> | Ouverture (BOM/firmware) | partiellement ouvert | fermé | totalement ouvert |
>
> Ce qu'on retient : **Moveo** est la référence la plus inspirante (ouvert, démontable, abordable, structure imprimable 3D). On en reprend la logique générale mais on simplifie 6 axes → 3 axes pour rester sur un scope pédagogique. Ordres de grandeur calibrés pour le CdCF : viser ~300 € de matériaux, charge utile 100 g (réduction assumée du fait des 3 axes), précision ± 5 mm en bout (acceptable pour un support pédagogique de démonstration).

> [!livrable] Livrable 2/6 — Spécification technique
> - État de l'art technique : tableau comparatif chiffré de 3 à 6 solutions × 5 à 8 critères, accompagné d'un paragraphe de synthèse (« ce qu'on retient ») et d'une bibliographie courte des sources consultées.

### 3. Formaliser les fonctions

Le besoin est compris et l'existant est balisé. Il faut maintenant **formaliser ce que le système doit faire**, sans présumer encore *comment*. L'outil canonique de [[afnor-nfx50-151|la norme NF X50-151]] pour cette formalisation est la **[[pieuvre|pieuvre]]**. Elle force à identifier d'abord *avec quoi* le système interagit (les milieux environnants), puis *quels services* il doit rendre, en distinguant trois catégories de fonctions : principales ([[FP]]), secondaires ([[FS]]) et contraintes ([[FC]]).

![Pieuvre — schéma générique](/ressources/img/pieuvre-generique.svg)

#### Identifier les milieux environnants

Recenser tous les éléments extérieurs avec lesquels le système est en contact : matière, énergie, information, humain, environnement physique. Méthode : construire une [[mind-map|mind map]] du système en situation réelle, en partant du système au centre et en listant tout autour les éléments qui le touchent, l'alimentent, l'observent ou le subissent. Pas de filtre à ce stade — un milieu oublié est une fonction qui n'apparaîtra pas dans le CdCF.

Quelques familles de milieux à parcourir systématiquement :

- **Utilisateurs** — opérateur, mainteneur, personne tierce exposée
- **Matière d'œuvre** — l'objet ou la substance sur laquelle le système agit
- **Énergies** — alimentation électrique, fluide, ressource consommable
- **Environnement physique** — température, humidité, vibrations, supports
- **Réglementaire** — normes applicables, contraintes de sécurité ou d'[[ecoconception|écoconception]]

#### Énoncer les fonctions principales, secondaires et contraintes

Une fois les milieux identifiés, tracer les liens du diagramme. Chaque lien est une fonction, à formuler en **verbe à l'infinitif + complément** et à numéroter pour pouvoir y référer ensuite.

- **[[FP]] (Fonction Principale)** — relie **deux milieux** à travers le système, et **justifie son existence**. C'est la raison d'être du produit. Sans [[FP]], le système n'a pas lieu d'être.
- **[[FS]] (Fonction Secondaire)** — relie également **deux milieux** à travers le système, mais répond à un **service complémentaire souhaité**, pas essentiel à la mission. Sans [[FS]], le système remplit sa mission ; avec [[FS]], il la remplit mieux.
- **[[FC]] (Fonction Contrainte)** — relie le système à **un seul milieu**. Exprime une **contrainte d'adaptation** (« résister à », « s'adapter à », « être compatible avec »). Les normes, l'écoconception, les contraintes d'usage se traduisent souvent en [[FC]].

> [!warning] Attention
> **Une fonction exprime un besoin, jamais une solution.** Le piège classique est d'écrire FP1 = « utiliser un Raspberry Pi pour piloter les moteurs ». Ce n'est pas une fonction, c'est un choix technique prématuré. La bonne formulation serait : « commander les actionneurs en réponse aux consignes de l'utilisateur ». Règle pratique : **si on peut citer une marque, un composant ou une technologie dans l'énoncé, on a dérapé**.

> [!example] Exemple : projet bras 3 axes
> *La pieuvre porte sur le système physique (le bras et ses interactions). La bête à cornes de l'étape 1 portait, elle, sur la commande pédagogique au-dessus (l'enseignant comme commanditaire, le service rendu étant l'illustration d'une démarche projet). Ces deux niveaux coexistent dans la posture étudiant-client-de-lui-même et ne se contredisent pas — ils ne décrivent simplement pas le même système.*
>
> ![Pieuvre du bras 3 axes](/ressources/img/pieuvre-bras-3-axes.svg)
>
> **Milieux environnants identifiés** : objet à déplacer, opérateur, poste informatique, alimentation électrique, environnement pédagogique (fablab, moyens de fabrication accessibles).
>
> **Fonctions énoncées** :
>
> - **FP1** — Permettre à l'opérateur de manipuler le robot pour positionner un objet léger en un point du volume de travail.
> - **FS1** — Permettre à l'opérateur de programmer une séquence de mouvements depuis un poste informatique.
> - **FC1** — S'adapter à l'alimentation électrique disponible (secteur 230 V via adaptateur).
> - **FC2** — Être démontable et reproductible avec les moyens d'un fablab école (imprimante 3D, perceuse, tournevis).

L'énoncé des fonctions ne dit rien des **niveaux attendus** ni des **flexibilités**. À ce stade, FP1 dit qu'il faut « positionner un objet léger », pas combien il pèse ni à quelle précision. C'est précisément le rôle de l'étape suivante — caractériser chaque fonction par un triplet [[critere|critère]] / [[niveau|niveau]] / [[flexibilite|flexibilité]].

La pieuvre donne le *quoi*. Le *comment* — par quelles fonctions techniques le système réalisera ces fonctions de service — sera décliné via [[fast|FAST]] en phase suivante, [[concept|concept]], au moment du choix d'architecture.

> [!livrable] Livrables 3/6 — Spécification technique
> - Diagramme de pieuvre du système (milieux environnants + fonctions tracées)
> - Liste des fonctions [[FP]] / [[FS]] / [[FC]] numérotées (FP1…FPn, FS1…FSm, FC1…FCk) avec énoncé au format verbe + complément

### 4. Caractériser les fonctions

Énoncer une fonction ne suffit pas — encore faut-il la rendre **chiffrable, mesurable et opposable**. Cette étape transforme chaque fonction ([[FP]], [[FS]], [[FC]]) issue de la pieuvre en exigence chiffrée, par l'application systématique du triplet [[critere|critère]] / [[niveau|niveau]] / [[flexibilite|flexibilité]] de [[afnor-nfx50-151|la norme NF X50-151]]. C'est l'étape la plus structurante de la phase : sans caractérisation chiffrée, le CdCF n'est qu'un texte de bonnes intentions, et l'évaluation finale du projet devient impossible.

Trois questions à poser pour chaque fonction. La méthode détaillée est portée par la fiche-tuto [[caracteriser-une-exigence|caractériser une exigence]].

#### Énoncer le critère

Le **critère** est l'attribut chiffrable et observable sur lequel on jugera la fonction. Bon test à l'écriture : *peut-on imaginer un dispositif de mesure ?* Si non, le critère est mal choisi.

Familles de critères mobilisables :

- **Grandeurs physiques** — masse, longueur, vitesse, précision, température, puissance, autonomie
- **Grandeurs économiques** — coût d'achat, coût de maintenance, ROI
- **Grandeurs temporelles** — durée de vie, MTBF, temps de réponse
- **Grandeurs binaires** — présence/absence, conformité réglementaire

Choisir le critère qui **discrimine vraiment**, pas un proxy abstrait. « Ergonomie », « agréable », « performant » ne sont pas des critères — ce sont des intentions qu'il faut traduire en grandeurs mesurables (« force d'actionnement < 5 N », « temps d'apprentissage < 10 min »).

#### Fixer le niveau

Le **niveau** est la valeur cible chiffrée que doit atteindre le critère. **Toujours chiffré**, **toujours avec une unité**. Le niveau se construit à l'intersection de deux sources :

- **Le besoin formulé à l'étape 1** — ce que le système doit faire pour son utilisateur
- **Les ordres de grandeur identifiés à l'étape 2** — ce que les solutions existantes savent déjà faire

Le niveau prend plusieurs formes selon le critère : valeur unique (`100 g`), borne (`≤ 5 mm`, `≥ 50 mm/s`), plage (`entre 20 °C et 30 °C`).

Précaution : ne pas être plus précis que le besoin réel. Un niveau à `± 0,1 mm` quand `± 5 mm` suffit n'apporte rien d'utilisable et fait exploser le coût.

#### Définir la flexibilité

La **flexibilité** dit deux choses : **quelle marge** est tolérable autour du niveau, et **dans quelle mesure** cette marge est négociable. Deux composantes complémentaires :

- **La tolérance numérique** — l'écart concret admis autour du niveau (`± 0,5 mm`, `± 5 %`)
- **Le niveau de négociabilité Fn** — échelle qualitative à 4 crans de NF X50-151 :
    - **F0 — Impérative** : non négociable. Si le niveau n'est pas atteint, on ne livre pas. Typique des exigences de sécurité ou de conformité réglementaire.
    - **F1 — Peu négociable** : un écart est tolérable contre une compensation forte (gain substantiel sur un autre critère).
    - **F2 — Négociable** : un écart est acceptable s'il est justifié et arbitré.
    - **F3 — Très négociable** : valeur de confort, un écart n'est pas bloquant.

Le rôle pratique du `Fn` est de dire **comment on arbitrera** en cas de conflit (entre exigences, contre le budget, contre le calendrier). Sans flexibilité explicite, chaque écart en cours de projet devient une crise — avec elle, c'est un arbitrage prévu.

> [!warning] Attention
> **Niveau non chiffré = exigence non opposable.** Un CdCF qui énonce *« le système doit être précis »* ou *« le coût doit être raisonnable »* est inutilisable. À la livraison, comment évalue-t-on ? Précis selon qui, raisonnable comparé à quoi ? L'exigence n'est ni mesurable, ni contractuelle, ni évaluable. Chaque ligne du CdCF doit être chiffrée — c'est cette discipline qui transforme un texte de bonnes intentions en document opposable, qui servira à la fois de boussole en cours de projet et de grille d'évaluation finale.

> [!tip] Astuce
> **Les exigences chiffrées s'écrivent en [[unite-si|unités SI]].** Tolérances symétriques : `± X mm`. Bornes : `≤ X` ou `≥ X`. Plages : `entre X et Y`. Cette discipline n'est pas une coquetterie d'écriture — elle évite les ambiguïtés (`100mm` mal coupé en bout de ligne, `100m m` ressaisi sans relire) et rend les exigences directement comparables en revue.

> [!example] Exemple : projet bras 3 axes
> Caractérisation complète de **FP1** — *« Permettre à l'opérateur de manipuler le robot pour positionner un objet léger en un point du volume de travail »* :
>
> - **Critère** — précision de positionnement en bout de bras
> - **Niveau** — ± 5 mm dans tout le volume de travail accessible
> - **Flexibilité** — F1, tolérance jusqu'à ± 10 mm si gain de coût substantiel
>
> Justification : ± 5 mm est calibré sur la comparaison de l'étape 2 (le bras Moveo descend à 1-2 mm mais avec une complexité hors scope pédagogique, le bras uArm Swift Pro à 0,2 mm est inatteignable dans le budget). F1 traduit la centralité de la précision pour l'objectif démonstratif tout en autorisant un assouplissement si le surcoût mécanique pour aller plus fin devient disproportionné face au bénéfice pédagogique.
>
> Ce triplet bien posé permet, en fin de projet, une évaluation simple : on mesure la précision réelle du prototype, on la confronte au ± 5 mm cible, et l'écart documenté (mesuré, expliqué, arbitré) devient la matière du rapport final — pas un échec, mais une donnée d'ingénierie.

> [!livrable] Livrable 4/6 — Spécification technique
> - Tableau des fonctions caractérisées : pour chaque fonction de l'étape 3 ([[FP]], [[FS]], [[FC]]), le triplet critère / niveau / flexibilité documenté ligne à ligne.

### 5. Planifier le projet

Le *quoi* est posé : ce que le système doit faire et comment on l'évaluera. Reste à organiser le *quand* et le *qui*. La planification du projet se construit à la **fin de la spécification technique**, parce qu'on ne peut pas planifier ce qu'on n'a pas encore défini — mais elle vit ensuite pendant toute la durée du projet, et se met à jour à chaque revue de phase.

En projet école, la planification présente une spécificité : la **date de fin est imposée** par le calendrier scolaire (revue finale du CdCF, soutenance, calendrier d'examens). On ne planifie pas en partant d'aujourd'hui pour estimer une date d'arrivée — on planifie en partant de la date d'arrivée connue pour remonter à aujourd'hui. C'est un **rétroplanning**.

#### Décomposer en WBS

Le [[wbs|WBS]] (*Work Breakdown Structure*) découpe le projet en éléments traçables, du livrable global vers les tâches élémentaires. Deux à trois niveaux de profondeur suffisent en école : phase → sous-livrable → tâche concrète. Au-delà, on s'égare en gestion administrative et on perd la vue d'ensemble. Le WBS sert de **référence partagée** pour répartir le travail dans l'équipe et pour s'assurer qu'aucune tâche structurante n'a été oubliée.

#### Planifier dans le temps

Une fois les tâches identifiées via le WBS, trois outils complémentaires les inscrivent dans le calendrier.

Les [[jalons]] sont les points de validation qui rythment le projet. Ils marquent la transition entre deux phases du cycle en V (CdCF validé, PoC concluant, dossier technique validé, intégration livrée, soutenance finale) et **conditionnent le passage** à la suite. Un jalon raté ne se rattrape pas en travaillant plus la semaine suivante — il décale tout l'aval.

Le [[retroplanning|rétroplanning]] consiste à poser d'abord les jalons sur le calendrier (en partant de la fin et en remontant), puis à inscrire les tâches du WBS entre ces jalons. C'est le squelette temporel du projet.

Le [[gantt|Gantt]] matérialise visuellement le rétroplanning : tâches en lignes, calendrier en colonnes, barres horizontales qui montrent durées et chevauchements. Sa force pédagogique : il fait apparaître les **dépendances** (telle tâche en attend une autre) et les **goulots** (telle semaine concentre trop de travail).

Côté outils, plusieurs options sont mobilisables : Excel ou papier (rapides à mettre en place, suffisants pour un Gantt simple), **GanttProject** (logiciel libre dédié, gère bien les dépendances), **Trello** (en ligne, pratique pour le WBS et le suivi des tâches au quotidien). Choisir un outil et s'y tenir — le pire est d'éparpiller la planification entre trois supports désynchronisés.

#### Maîtriser les risques

Tout projet rencontre des aléas — composant indisponible, panne d'imprimante 3D, équipier absent, brique technique qui s'avère plus dure que prévu. La [[matrice-de-risques|matrice de risques]] consiste à les anticiper avant qu'ils surviennent : identifier les principaux risques, les coter selon leur **probabilité** et leur **gravité**, et décider pour chacun d'une parade (prévention, atténuation, plan B).

En école, 5 à 10 risques majeurs suffisent. Plus que la liste exhaustive, c'est l'**actualisation régulière** qui compte — la matrice de risques se relit à chaque revue de phase et se met à jour quand un risque nouveau apparaît ou qu'un ancien est levé.

> [!warning] Attention
> **Un planning qu'on ne met pas à jour ment.** La planification n'est pas un livrable de début de phase qu'on archive ensuite — c'est un outil vivant, qui n'a de valeur que s'il reflète l'état réel du projet. Une équipe qui produit un beau Gantt en semaine 2 et ne le rouvre plus jusqu'à la semaine 14 a perdu son temps. Inversement, un Gantt actualisé chaque semaine, même imparfait, devient un outil de pilotage puissant : il révèle les dérives tôt, quand on peut encore agir.

> [!tip] Astuce
> **Poser d'abord la date de soutenance, puis remonter à rebours en gardant une marge.** Le rétroplanning naïf cale les tâches bout à bout jusqu'à la veille de la soutenance — il suffit d'un imprévu (et il y en a toujours) pour que tout déborde. Garder **au moins deux semaines de marge** avant la date butoir, dédiées à la finalisation du rapport et à la répétition de la soutenance, change la nature du projet : le stress n'est plus systémique mais ponctuel.

> [!example] Exemple : projet bras 3 axes
> **Jalons posés** (sur un projet de 15 semaines) :
>
> - S3 — Revue de CdCF
> - S6 — PoC concluant (steppers synchronisés, tenue mécanique d'une articulation validée)
> - S11 — Dossier technique validé, commandes passées
> - S14 — Intégration et tests terminés
> - S15 — Soutenance finale
>
> **WBS niveau 2** (extrait) : Mécanique (structure articulée, liaisons, montage), Électronique (carte de pilotage, câblage, alimentation), Informatique (commande des steppers, IHM PC, communication PC–carte), Projet (CdCF, dossier technique, rapport final).
>
> **Risques majeurs identifiés** (5) :
>
> 1. Tenue mécanique des articulations imprimées 3D — *probabilité moyenne × gravité élevée* → sur-dimensionner et tester au plus tôt sur une articulation isolée.
> 2. Synchronisation des 3 steppers — *probabilité moyenne × gravité moyenne* → valider l'interface logiciel/driver dès le PoC.
> 3. Indisponibilité fablab en période d'examens — *probabilité élevée × gravité moyenne* → caler les impressions critiques avant S10.
> 4. IHM PC plus complexe qu'estimé — *probabilité moyenne × gravité faible* → version minimale (ligne de commande) en plan B.
> 5. Équipier indisponible (stage, maladie) — *probabilité faible × gravité élevée* → binômage sur les tâches critiques pour éviter le mono-référent.

> [!livrable] Livrables 5/6 — Spécification technique
> - WBS du projet (2 à 3 niveaux de profondeur)
> - Rétroplanning matérialisé en Gantt, avec les jalons clés du cycle en V
> - Matrice de risques (5 à 10 risques majeurs, cotés probabilité × gravité, avec parade associée)

### 6. Rédiger le CdCF

Les cinq étapes précédentes ont produit l'ensemble du matériau du [[cahier-des-charges-fonctionnel|cahier des charges fonctionnel]] : analyse du besoin, état de l'art, [[pieuvre|pieuvre]], fonctions caractérisées, planification. Reste à les **agréger** en un document unique, structuré, opposable et présentable en revue. Cette étape ne produit pas de matière nouvelle — elle organise et met en forme ce qui existe déjà, pour produire le **document de référence** du projet.

La version enseignée ici est une **version école simplifiée**, dérivée reconnaissable de [[afnor-nfx50-151|la norme NF X50-151]]. Elle agrège dans un même document les livrables des cinq étapes précédentes, en distinguant explicitement le **cœur normatif** (l'analyse fonctionnelle au sens strict) et les **compléments école** (état de l'art, planification) qui n'appartiennent pas formellement au CdCF en contexte professionnel mais en font partie ici par cohérence pédagogique.

#### Structurer le document

Le CdCF école simplifié s'organise en cinq sections, qui suivent l'ordre des cinq étapes précédentes :

1. **Présentation du projet** — contexte, parties prenantes, frontière système *(matière de l'étape 1)*
2. **Expression du besoin** — [[bete-a-cornes|bête à cornes]], validation du besoin *(matière de l'étape 1)*
3. **Étude de l'existant** *(complément école)* — [[etat-de-l-art-technique|état de l'art technique]], tableau comparatif, synthèse *(matière de l'étape 2)*
4. **Analyse fonctionnelle** *(cœur NF X50-151)* — [[pieuvre|pieuvre]], tableau des fonctions caractérisées *(matière des étapes 3 et 4)*
5. **Planification du projet** *(complément école)* — [[wbs|WBS]], [[gantt|Gantt]], [[matrice-de-risques|matrice de risques]] *(matière de l'étape 5)*

L'**ordre suit le déroulé pédagogique** de la phase, ce qui rend la lecture naturelle pour le lecteur qui découvre le projet. Les sections sont **explicitement labellisées** — « cœur NF X50-151 » sur la section 4, « complément école » sur les sections 3 et 5 — pour que l'étudiant, et son lecteur, distinguent le cœur normatif des compléments.

Un **template Word pré-rempli** est fourni dans le dépôt pour démarrer la rédaction : [[cdcf-ecole-template.docx|cdcf-ecole-template.docx]]. Il reprend la TdM en 5 sections, avec page de garde, sommaire automatique, et les tableaux pré-structurés (bête à cornes, EAT comparatif, caractérisation des fonctions, matrice de risques) ; il suffit de compléter les placeholders entre crochets.

> [!info] À retenir
> **En contexte professionnel, le CdCF NF X50-151 strict se limite à l'analyse fonctionnelle** (sections 2 et 4 ci-dessus). L'état de l'art technique et la planification sont des livrables **séparés**, produits en parallèle et destinés à des interlocuteurs différents (équipe technique, direction de projet). Le « cadre de réponse » formel de NF X50-151 — chapitre dédié à la manière dont le fournisseur doit répondre à l'appel d'offres — n'a pas d'équivalent direct en école : la planification du projet en tient le rôle pratique, elle cadre la suite à défaut d'organiser une consultation fournisseur.

#### Rédiger chaque section

Le matériau de chaque section est déjà produit. Le travail consiste ici à l'agréger en un document unique et cohérent, en soignant trois choses :

- **La mise en forme.** Sommaire, pagination, en-tête de page, numérotation des sections, tableaux propres, schémas légendés. Le fond est validé par les étapes précédentes ; la forme communique le sérieux du travail et facilite la lecture en revue.
- **La cohérence inter-sections.** Une exigence chiffrée à l'étape 4 doit être cohérente avec l'ordre de grandeur retenu dans l'état de l'art à l'étape 2. Un risque identifié à l'étape 5 doit faire écho à une [[FC]] de la pieuvre ou à un point dur évoqué dans l'analyse du besoin. La rédaction du CdCF est l'occasion de **relire l'ensemble** et de corriger les incohérences résiduelles que les étapes successives n'avaient pas exposées.
- **L'intégration de la démarche [[ecoconception|écoconception]].** L'écoconception n'est pas une section ajoutée à la fin — elle est **intégrée transversalement** dans chaque section : dans l'analyse du besoin (parties prenantes : environnement), dans l'état de l'art (critère écoconception du tableau comparatif), dans la pieuvre ([[FC]] sur les matériaux ou la fin de vie), dans la planification (jalons d'éco-vérification). Le CdCF est l'occasion de vérifier que cette intégration est présente partout, et pas en addendum cosmétique.

#### Faire valider en revue de CdCF

Le document terminé est présenté en **revue de CdCF**, [[jalons|jalon]] de fin de spécification technique dans le calendrier projet. La revue est conduite par les enseignants — qui jouent ici, dans la posture école, le rôle du client en contexte professionnel. Elle a deux fonctions : **valider le document** (qualité, cohérence, chiffrabilité de chaque exigence) et **autoriser le passage** en [[concept|concept]].

Pour s'y préparer :

- Faire une **dernière auto-relecture systématique**, en se mettant à la place du lecteur qui découvre le document.
- Vérifier que **chaque exigence est chiffrée** ([[critere|critère]] mesurable, [[niveau|niveau]] avec unité, [[flexibilite|flexibilité]] explicite). Une exigence non chiffrée est le premier point qui sera questionné en revue.
- **Anticiper les questions** : pourquoi ce niveau et pas un autre ? pourquoi cette flexibilité ? que se passe-t-il si une [[FC]] n'est pas tenue ?

À l'issue de la revue, deux issues sont possibles : **CdCF validé** — passage en concept ; **CdCF à reprendre** — corrections demandées avant nouvelle présentation. Dans les deux cas, le retour de la revue se consigne par écrit (compte-rendu de réunion, ou commentaires sur le document) et **engage le projet** : ce qui a été validé en revue ne se rediscute plus ensuite — c'est précisément la fonction du jalon.

> [!warning] Attention
> **Un CdCF n'est pas un copier-coller des livrables intermédiaires.** La tentation, quand cinq étapes ont produit cinq lots de pages, est d'agrafer le tout et de poser une page de garde. Ce qui en sort est une compilation — pas un document. Les répétitions ne sont pas résorbées, les transitions manquent, les incohérences entre sections passent inaperçues. Le geste de l'étape 6 est précisément de **relire l'ensemble** et de réécrire ce qui doit l'être pour que les cinq sections forment un **récit cohérent**, pas une juxtaposition.

> [!example] Exemple : projet bras 3 axes
> Le CdCF du bras 3 axes s'organise en 5 sections suivant la TdM standard. La section 1 reprend la posture étudiant-client-de-lui-même actée à l'étape 1 (commanditaire = enseignant de mécatronique, but pédagogique explicite). La section 4 — cœur NF X50-151 — agrège la pieuvre et le tableau de fonctions caractérisées : 1 FP, 1 FS, 2 FC, toutes chiffrées (précision ± 5 mm en F1, programmation depuis poste informatique en F2, alimentation 230 V en F0, démontabilité fablab en F0).
>
> La démarche écoconception est intégrée transversalement : critère « ouverture / réparabilité » dans le tableau de l'état de l'art (section 3), FC2 sur la démontabilité dans la pieuvre (section 4), risque « disponibilité fablab » dans la matrice de risques (section 5). Pas de section écoconception dédiée — l'enjeu environnemental traverse le document.
>
> Le CdCF est présenté en **revue de CdCF**, validé par les enseignants, et le projet bascule officiellement en [[concept|concept]].

> [!livrable] Livrable 6/6 — Spécification technique
> - Cahier des charges fonctionnel complet, structuré en 5 sections (présentation, besoin, existant, analyse fonctionnelle, planification), soigné en forme et en cohérence inter-sections, **présenté et validé en revue de CdCF**.

---

## Pièges fréquents

- **Sauter à la solution avant d'avoir formulé le besoin.** Le réflexe « il nous faudrait un ESP32, un capteur de température… » dès la semaine 1 produit des CdCF orientés solution qui se révèlent inadaptés quand la vraie analyse du besoin émerge plus tard. La discipline est de tenir le *quoi* séparé du *comment* jusqu'à la fin de la phase.
- **Confondre verrou technologique et difficulté d'équipe.** *« Nous n'avons jamais fait de [[pcb|PCB]] »* n'est pas un verrou, c'est une lacune à combler. Un vrai verrou résiste même à une équipe compétente et bien outillée — c'est ce qui justifie un projet d'ingénierie plutôt qu'un simple assemblage.
- **Niveau non chiffré.** *« Le système doit être précis »*, *« le coût doit être raisonnable »* : sans valeur ni unité, l'exigence n'est pas opposable. Elle ne peut être ni évaluée en fin de projet ni arbitrée en cours de route. Chaque ligne du CdCF doit porter un chiffre.
- **Critère subjectif ou non mesurable.** *« Ergonomique »*, *« agréable »*, *« robuste »* ne sont pas des critères mais des intentions. À reformuler systématiquement en grandeur mesurable (force d'actionnement maximale, MTBF, plage de température admissible, temps d'apprentissage…).
- **Sur-spécification.** Fixer un niveau plus précis que le besoin réel (`± 0,1 mm` quand `± 5 mm` suffit) n'apporte rien d'utilisable, fait exploser le coût et complique inutilement l'arbitrage en cours de projet. Le bon niveau est *celui qui permet au système de remplir son service*, pas le plus serré qu'on sait écrire.
- **Confondre F3 avec une absence d'exigence.** F3 ne veut pas dire « pas important » : c'est une exigence formellement chiffrée dont l'écart est tolérable et négociable. Une exigence sans `Fn` du tout, en revanche, est non opposable — la flexibilité est une donnée à part entière du triplet, pas une option.

## Pendant cette phase, côté équipe

**Interfaces métiers — mécanique et fabrication.** La spécification technique se fait sur papier, mais les contraintes de fabrication doivent être anticipées dès maintenant. Un dialogue précoce avec les enseignants de mécanique et de fabrication permet de caler des [[FC]] réalistes (« compatible avec les moyens du fablab école », « usinable sur tour à commande numérique disponible », « imprimable 3D en un seul morceau de moins de 200 mm ») et d'éviter de découvrir en phase de [[dossier-technique|dossier technique]] que l'architecture pré-dimensionnée en [[concept|concept]] n'est pas fabricable. Sans aller jusqu'à figer la solution, l'équipe a tout intérêt à **valider les ordres de grandeur** des matériaux et procédés disponibles avec les enseignants concernés avant la revue de CdCF.

**Gestion de projet.** La fin de cette phase lance toute la mécanique de pilotage du projet. La planification (étape 5) ne se limite pas à produire un Gantt — elle structure le travail de l'équipe : qui suit quel sous-livrable, qui maintient le rétroplanning, qui actualise la matrice de risques. Les premiers points hebdomadaires se calent à ce moment, sur un format léger (15 minutes, tour de table, points bloquants) qui se solidifiera au fil du projet. La fiche-trame [[gestion-de-projet|gestion de projet]] détaille la pratique transversale.

**Écoconception.** L'[[ecoconception|écoconception]] n'est pas un fil séparé à activer plus tard — elle s'**ancre dès la spécification technique** par des graines réparties dans les livrables : critère écoconception dans le tableau comparatif de l'état de l'art, [[FC]] sur les matériaux ou la fin de vie dans la pieuvre, risques liés à la disponibilité ou à la durabilité dans la matrice de risques. Un CdCF sans aucun ancrage écoconception à ce stade produit un projet qui ne pourra pas rattraper cet oubli plus tard sans réouvrir le CdCF lui-même. La fiche-trame [[ecoconception|écoconception]] détaille la démarche transversale.

**Sécurité et qualité.** La sécurité et la qualité commencent dès cette phase par un **repérage réglementaire** : quelles normes s'appliquent au système envisagé (basse tension, machines, public exposé, conformité CE) ? Quels seuils de sécurité sont incontournables ? Ces éléments se traduisent en [[FC]] dans la pieuvre à l'étape 3, avec une flexibilité F0 (impérative) sur tout ce qui relève de la réglementation. Le faire dès cette phase, c'est s'épargner de découvrir en [[integration-et-tests|intégration]] une norme bloquante qui aurait dû orienter le concept. La fiche-trame [[securite-et-qualite|sécurité et qualité]] détaille la pratique transversale.

## Conclusion

À ce stade, le besoin est compris et validé, l'existant est balisé, les fonctions sont formalisées et caractérisées de manière chiffrée, et le projet est planifié. Le **cahier des charges fonctionnel** est rédigé et opposable : il servira de référence pendant tout le projet et de grille d'évaluation finale. La suite du travail bascule en [[concept|concept]] pour transformer ce *quoi* en *comment* — choix d'architecture, matrices de décision, pré-dimensionnement.

## Voir aussi

- [[index|Hub du parcours projet]]
- [[cdcf-ecole-template.docx|Template CdCF école à compléter]] *(document Word fourni)*
- [[cahier-des-charges-fonctionnel|Cahier des charges fonctionnel]] *(notion fondatrice — à créer)*
- [[bete-a-cornes|Bête à cornes]] *(à créer)*
- [[afnor-nfx50-151|Norme NF X50-151]] *(stub)*
- [[relation-client|Relation client]] *(tuto à créer)*
- [[archivage-projet|Archivage projet]] *(tuto à créer)*
- Étape suivante : [[concept|Concept]]
