---
title: Lire une datasheet
type: tuto
tags:
  - eee
  - tuto
prerequis:
  - microcontroleur
  - niveaux-de-tension
  - gpio
aa:
  - RA-PROJET-C03-3/EEE/1
  - RA-EEE-C03-2/EEE/1
  - RA-EEE-C03-2/EEE/3
  - RA-EEE-C03-2/EEE/4
  - RA-MME-C02-1/MME/6
phases:
  - concept
  - preuve-de-concept
  - dossier-technique
draft: false
---

**Lire une datasheet**, c'est savoir extraire d'un document technique de fabricant les informations dont on a besoin pour câbler, dimensionner et piloter un composant sans le détruire : son **brochage**, ses **niveaux logiques**, ses **courants et tensions maximaux**, ses **conditions de fonctionnement** et son **schéma d'application** type. C'est une **compétence de lecture transverse** — la même méthode s'applique à un capteur, un régulateur ou un microcontrôleur. Cette fiche en pose la méthode générique, puis l'incarne sur le L298N, un double pont en H qui pilote deux moteurs à courant continu.

![Anatomie d'une datasheet : de haut en bas, les sections types (première page, boîtier, brochage, table des fonctions, Absolute Maximum Ratings, conditions de fonctionnement, caractéristiques électriques et thermiques, schéma d'application) et, en regard, la question à laquelle chacune répond.](/ressources/img/lire-une-datasheet-generique.svg)

## À quoi ça sert ?

La datasheet est le **contrat du fabricant** : tout ce que le composant garantit — et tout ce qu'il interdit — y est écrit. La lire avant de câbler, c'est éviter trois écueils classiques : griller un composant en dépassant une limite, le sous-exploiter en ignorant une fonction, ou perdre des heures à déboguer un montage que la datasheet rendait évident.

Concrètement, savoir lire une datasheet permet de :

- **choisir** un composant en connaissance de cause — c'est la matière première de l'aide au choix du hub [[microcontroleur|microcontrôleur]] et d'une [[matrice-de-decision|matrice de décision]] ;
- **câbler** correctement, en distinguant les broches de commande des broches de puissance ;
- **dimensionner** l'alimentation et le refroidissement à partir des valeurs garanties ;
- **piloter** le composant par un programme qui respecte sa table de fonctions.

Cette fiche suppose quelques bases acquises : ce qu'est un [[microcontroleur|microcontrôleur]] et ses [[gpio|GPIO]], la notion de [[niveaux-de-tension|niveau de tension]] logique, et les grandeurs élémentaires tension / courant / puissance (la puissance dissipée vaut le produit d'une tension par un courant). Ce sont les prérequis listés en tête de fiche.

## Procédure pas à pas

Une datasheet a une structure prévisible. Lire efficacement, ce n'est pas tout parcourir de la première à la dernière page : c'est savoir quelle section répond à quelle question, et s'y rendre directement.

### 1. Trouver la bonne datasheet

Avant de lire, trouver le bon document. Une référence de composant correspond à un **fabricant** et à une **révision** précise ; les versions diffèrent, et un module du commerce n'a souvent pas de datasheet propre (voir étape suivante).

- partir de la référence exacte sérigraphiée sur le composant ;
- privilégier le site du fabricant — la révision la plus récente fait foi ;
- se méfier des PDF agrégés par des revendeurs, parfois tronqués ou périmés.

À toi de chercher la datasheet du composant étudié : [Datasheet L298N (à rechercher)](https://letmegooglethat.com/?q=Datasheet+L298n+pdf). Garde-la ouverte, on s'y réfère à chaque étape.

### 2. Identifier le composant et son boîtier

La première page donne l'essentiel : une **description** (à quoi sert le composant), un schéma fonctionnel, et le ou les **boîtiers** (*package*) disponibles. Le boîtier conditionne la façon de souder et d'intégrer le composant.

- lire la description : fonction, tensions et courants annoncés en résumé ;
- repérer les boîtiers proposés : **traversant** (DIP, Multiwatt…), soudable à la main, ou **CMS** (montage en surface, *SMD*), qui demande un équipement que tous les ateliers n'ont pas.

> [!warning] Attention
> **L'atelier de l'école ne soude pas le CMS.** Un composant disponible uniquement en boîtier CMS n'est pas montable à la main dans nos conditions : vérifier dès cette étape qu'une version traversante existe, ou se rabattre sur un module tout prêt.

### 3. Lire le brochage et la table des fonctions

Le **brochage** (*pinout*) associe chaque broche à un rôle ; la table des broches le détaille. Premier réflexe utile : trier les broches en familles — **alimentation**, **commande** (signaux logiques), **puissance** (sorties).

La **table des fonctions** (ou table de vérité) dit quel comportement résulte de quelle combinaison d'entrées : c'est le **contrat que ton programme devra respecter**.

- repérer les broches d'alimentation et leurs tensions respectives ;
- séparer les broches de commande — les signaux logiques venant du [[microcontroleur|microcontrôleur]] — des broches de puissance ;
- lire la table des fonctions comme une spécification du code à écrire.

> [!tip] Astuce
> **La table des fonctions précède le code.** Avant d'écrire la moindre ligne, recopie-la : elle dit exactement quels états mettre sur quelles broches pour obtenir chaque comportement. La mise en œuvre est traitée dans [[arduino-moteur-cc|piloter un moteur CC]].

### 4. Lire les limites : maximum ratings ou conditions de fonctionnement

Deux tableaux à ne **jamais** confondre :

- les **Absolute Maximum Ratings** — les valeurs à ne **jamais** dépasser, même un instant ; au-delà, destruction possible. Ce ne sont pas des conditions d'usage ;
- les **Recommended Operating Conditions** — la **plage d'usage normale**, celle où le composant se comporte comme spécifié.

Travailler au ras des maximum ratings, c'est concevoir une panne. La marge se prend sur les conditions de fonctionnement, pas sur les limites absolues.

> [!warning] Attention
> **Un maximum absolu n'est pas une cible.** « Tension d'alimentation max 46 V » ne veut pas dire « alimenter en 46 V », mais « au-delà de 46 V, on casse ». La tension d'usage se lit dans les conditions de fonctionnement, avec une marge.

### 5. Caractéristiques détaillées et schéma d'application

Reste le cœur quantitatif de la datasheet :

- **niveaux logiques** — à partir de quelle tension une entrée est vue comme un « 1 », en dessous de quelle tension comme un « 0 ». C'est ce qui décide de la compatibilité avec un microcontrôleur 3,3 V ou 5 V → [[niveaux-de-tension|niveaux de tension]] ;
- **courants et chutes de tension** — le courant de sortie garanti, et la tension perdue *dans* le composant : la charge ne reçoit pas toute la tension d'alimentation ;
- **caractéristiques thermiques** — résistance thermique et puissance dissipable : combien le composant chauffe, et s'il faut un **dissipateur** ;
- **schéma d'application** — un montage de référence proposé par le fabricant, à lire comme un point de départ, et non comme le schéma final du projet → [[analyse-de-schema-electronique|analyse d'un schéma]] pour l'étude d'un schéma complet.

> [!tip] Astuce
> **Le schéma d'application n'est pas ton schéma.** Le fabricant montre le composant en situation idéale ; ton montage devra y ajouter ce que ton projet impose. Sers-t'en comme d'un modèle, pas d'un copier-coller.

## Exemple — L298N : piloter deux moteurs CC

Le **L298N** est un *double pont en H* : un seul composant capable de piloter **deux moteurs à courant continu** indépendamment, chacun dans les deux sens de rotation. C'est un bon cas d'école pour lire une datasheet, parce qu'il vit dans **deux mondes** à la fois.

![Le L298N en deux mondes : à gauche le monde logique 5 V (entrées IN1 à IN4 pour le sens, ENA/ENB pour la marche et la vitesse en PWM, alimentation logique), commandé par le microcontrôleur ; à droite le monde puissance jusqu'à 46 V, où deux ponts en H pilotent chacun un moteur à courant continu dans des sens indépendants, avec échauffement et dissipateur à prévoir.](/ressources/img/lire-une-datasheet-l298n.svg)

**Un monde logique, un monde puissance.** D'un côté, des entrées **numériques** en 5 V : IN1 à IN4 fixent le sens de chaque moteur, ENA et ENB activent chaque pont. C'est le côté que touche le microcontrôleur, et il se lit dans le brochage et les niveaux logiques. De l'autre, un étage de **puissance** : une alimentation moteur qui peut grimper à plusieurs dizaines de volts, des courants de plusieurs ampères, des sorties OUT vers les moteurs. Les grandeurs y sont **analogiques et continues** (tensions, courants, chutes de tension, échauffement) et se lisent dans les maximum ratings et les caractéristiques thermiques. La datasheet décrit ces deux mondes dans des sections différentes : savoir de quel côté on se trouve évite bien des confusions.

**Le lien avec l'algo C : la table des fonctions.** Entre ces deux mondes, la datasheet donne une table des fonctions qui relie l'état des entrées au comportement des sorties. Pour un moteur : une combinaison d'entrées donne « avant », la combinaison inverse donne « arrière », une troisième donne « arrêt ». Faire tourner les deux moteurs **dans des sens opposés**, c'est donc commander un pont dans un sens et l'autre dans le sens inverse. Cette table *est* la spécification du programme : le code en C se contente de poser les bons niveaux sur IN1 à IN4 et de moduler ENA/ENB. La vitesse se règle en envoyant un signal [[arduino-sortie-pwm|PWM]] sur l'enable, et le pilotage complet est traité dans [[arduino-moteur-cc|piloter un moteur CC]].

**Les limites à lire en priorité.** Deux valeurs comptent avant d'alimenter quoi que ce soit : la tension d'alimentation maximale (un maximum absolu, pas une consigne) et le courant maximal par pont. Un piège propre à ce composant : la **chute de tension** introduite par le pont. Le moteur ne reçoit pas la tension d'alimentation, mais cette tension *moins* ce que le L298N consomme au passage — à intégrer dans le dimensionnement, sous peine d'un moteur plus mou que prévu.

**La chauffe et le dissipateur.** Cette tension perdue ne disparaît pas : elle se transforme en chaleur. Sous courant soutenu, le composant peut atteindre sa température de coupure et décrocher. La datasheet donne la résistance thermique nécessaire pour estimer s'il faut un **dissipateur** — et, le cas échéant, sa taille. Conséquence à anticiper tôt : un dissipateur occupe de la place et se prévoit dès le tracé du circuit, pas une fois la carte gravée.

**Module ou composant nu.** Le L298N existe en composant nu (boîtier traversant) et sous forme de **module** tout prêt. Les deux ne se câblent pas pareil, et ne s'intègrent pas pareil sur une carte :

- le **module** embarque déjà le dissipateur, les diodes de protection et parfois un régulateur 5 V ; il se branche au fil à fil, sans soudure, et convient au prototypage — mais c'est une petite carte à part entière, peu intégrable dans un circuit dédié, et encombrante ;
- le **composant nu** se soude sur ta propre carte ; à toi d'ajouter alors les diodes de roue libre, le découplage et le dissipateur que le module portait. Plus de travail de conception, mais une intégration compacte et maîtrisée — à condition de disposer d'un boîtier traversant, puisque l'atelier ne soude pas le CMS.

Le choix module / nu se lit donc en partie dans la datasheet (boîtier, éléments externes requis) et se tranche selon la phase du projet : module pour valider vite, composant nu pour la carte finale.

## Pièges

**Confondre maximum ratings et conditions de fonctionnement.** Les premiers sont des limites de destruction, les seconds une plage d'usage. Dimensionner sur les premiers, c'est concevoir une panne.

**Prendre le module pour le composant.** Le module embarque des éléments (diodes, dissipateur, parfois régulateur) que le composant nu exige d'ajouter soi-même. Lire la datasheet du composant ne suffit pas à connaître le module.

**Oublier la chute de tension du pont.** La charge ne reçoit pas la tension d'alimentation : le L298N en perd une part. Un moteur alimenté « en 12 V » via le pont en voit nettement moins.

**Ignorer le dissipateur.** Sous courant soutenu, sans dissipateur, le composant atteint sa coupure thermique et décroche — un défaut intermittent difficile à diagnostiquer. À prévoir aussi par sa place sur la carte.

**Oublier les diodes de roue libre.** Piloter une charge inductive — un moteur — sans diodes de protection détruit le pont. Le module les intègre, le composant nu non : à ajouter soi-même.

**Lire une valeur « typique » pour une valeur garantie.** Les colonnes min / typ / max ne disent pas la même chose. Dimensionner sur le pire cas, pas sur le typique.

**Télécharger n'importe quel PDF.** Une révision ancienne, ou la fiche d'un clone documenté à part, peut donner des valeurs fausses. La datasheet du fabricant fait foi.

## Cas particulier — Les modules sans datasheet propre

Beaucoup de modules du commerce — les cartes « L298N » génériques en sont un cas typique — n'ont pas de datasheet officielle : seul le composant central en possède une. La bonne pratique : lire la datasheet du **composant** monté sur le module, puis repérer sur la carte ce que le module ajoute (régulateur, diodes, connectique, cavaliers d'enable). Quand le vendeur fournit le schéma de la carte, il complète utilement cette lecture.

## Raccrochage projet

- **Phase de [[concept|concept]]** — la lecture de datasheets alimente le choix des composants et la [[matrice-de-decision|matrice de décision]] : on compare des références sur leurs valeurs garanties, pas sur des impressions.
- **Phase de [[preuve-de-concept|preuve de concept]]** — avant d'acheter ou de tester, vérifier sur la datasheet que le composant tient les contraintes du projet (tension, courant, niveaux logiques).
- **Phase de [[dossier-technique|dossier technique]]** — les valeurs lues figent le dimensionnement (alimentation, dissipateur) et la [[bom|nomenclature]] ; la place du dissipateur s'anticipe dès le tracé du circuit.
- **Phase d'[[integration-et-tests|intégration et tests]]** — en cas de comportement anormal, la datasheet est la première référence pour distinguer une faute de câblage d'une limite atteinte.

Quelques minutes de lecture en amont épargnent un composant grillé ou des heures de débogage : c'est l'un des réflexes professionnels les plus rentables de l'électronique embarquée.

## Voir aussi

- [[microcontroleur|Microcontrôleur]] — hub d'entrée ; la datasheet est la matière première de l'aide au choix
- [[niveaux-de-tension|Niveaux de tension]] — interpréter et adapter les niveaux logiques lus (3,3 V / 5 V)
- [[arduino-moteur-cc|Piloter un moteur CC (pont en H)]] — mettre en œuvre la table de fonctions en code
- [[arduino-sortie-pwm|Piloter une sortie PWM]] — commande de vitesse via l'enable
- [[analyse-de-schema-electronique|Analyse d'un schéma électronique]] — étudier un schéma de projet complet, au-delà du schéma d'application
