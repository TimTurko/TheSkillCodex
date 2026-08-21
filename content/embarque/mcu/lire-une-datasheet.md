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

![Anatomie d'une datasheet : de haut en bas, les sections types (première page, boîtier, brochage, table des fonctions, Absolute Maximum Ratings, conditions de fonctionnement, caractéristiques électriques et thermiques, schéma d'application) et, en regard, la question à laquelle chacune répond.](/ressources/img/lire-une-datasheet/generique.svg)

**Dans cette fiche** — deux parties :

1. [Lecture d'une datasheet](#lecture-dune-datasheet) — la méthode générique : quelle section répond à quelle question ;
2. [Lecture de la datasheet du L298N](#lecture-de-la-datasheet-du-l298n) — la méthode appliquée, document sous les yeux : boîtiers, brochage et table de vérité, de la table à l'algorithme, maximum ratings, chauffe et radiateur, module ou composant nu.

## À quoi ça sert ?

La datasheet est le **contrat du fabricant** : tout ce que le composant garantit — et tout ce qu'il interdit — y est écrit. La lire avant de câbler, c'est éviter trois écueils classiques : griller un composant en dépassant une limite, le sous-exploiter en ignorant une fonction, ou perdre des heures à déboguer un montage que la datasheet rendait évident.

Concrètement, savoir lire une datasheet permet de :

- **choisir** un composant en connaissance de cause — c'est la matière première de l'aide au choix du hub [[microcontroleur|microcontrôleur]] et d'une [[matrice-de-decision|matrice de décision]] ;
- **câbler** correctement, en distinguant les broches de commande des broches de puissance ;
- **dimensionner** l'alimentation et le refroidissement à partir des valeurs garanties ;
- **piloter** le composant par un programme qui respecte sa table de fonctions.

Cette fiche suppose quelques bases acquises : ce qu'est un [[microcontroleur|microcontrôleur]] et ses [[gpio|GPIO]], la notion de [[niveaux-de-tension|niveau de tension]] logique, et les grandeurs élémentaires tension / courant / puissance (la puissance dissipée vaut le produit d'une tension par un courant). Ce sont les prérequis listés en tête de fiche.

## Lecture d'une datasheet

Une datasheet a une structure prévisible. Lire efficacement, ce n'est pas tout parcourir de la première à la dernière page : c'est savoir quelle section répond à quelle question, et s'y rendre directement.

### 1. Trouver la bonne datasheet

Avant de lire, trouver le bon document. Une référence de composant correspond à un **fabricant** et à une **révision** précise ; les versions diffèrent, et un module du commerce n'a souvent pas de datasheet propre (voir étape suivante).

- partir de la référence exacte sérigraphiée sur le composant ;
- privilégier le site du fabricant — la révision la plus récente fait foi ;
- se méfier des PDF agrégés par des revendeurs, parfois tronqués ou périmés.

À vous de chercher la datasheet du composant étudié : [Datasheet L298N (à rechercher)](https://letmegooglethat.com/?q=Datasheet+L298n+pdf). Gardez-la ouverte, on s'y réfère à chaque étape.

### 2. Identifier le composant et son boîtier

La première page donne l'essentiel : une **description** (à quoi sert le composant), un schéma fonctionnel, et le ou les **boîtiers** (*package*) disponibles. Le boîtier conditionne la façon de souder et d'intégrer le composant.

- lire la description : fonction, tensions et courants annoncés en résumé ;
- repérer les boîtiers proposés : **traversant** (DIP, Multiwatt…), soudable à la main, ou **CMS** (montage en surface, *SMD*), qui demande un équipement que tous les ateliers n'ont pas.

> [!warning] Attention
> **L'atelier de l'école ne soude pas le CMS.** Un composant disponible uniquement en boîtier CMS n'est pas montable à la main dans nos conditions : vérifier dès cette étape qu'une version traversante existe, ou se rabattre sur un module tout prêt.

### 3. Lire le brochage et la table des fonctions

Le **brochage** (*pinout*) associe chaque broche à un rôle ; la table des broches le détaille. Premier réflexe utile : trier les broches en familles — **alimentation**, **commande** (signaux logiques), **puissance** (sorties).

La **table des fonctions** (ou table de vérité) dit quel comportement résulte de quelle combinaison d'entrées : c'est le **contrat que le programme devra respecter**.

- repérer les broches d'alimentation et leurs tensions respectives ;
- séparer les broches de commande — les signaux logiques venant du [[microcontroleur|microcontrôleur]] — des broches de puissance ;
- lire la table des fonctions comme une spécification du code à écrire.

> [!tip] Astuce
> **La table des fonctions précède le code.** Avant d'écrire la moindre ligne, recopiez-la : elle dit exactement quels états mettre sur quelles broches pour obtenir chaque comportement. La mise en œuvre est traitée dans [[arduino-moteur-cc|piloter un moteur CC]].

### 4. Lire les limites : maximum ratings ou conditions de fonctionnement

Deux tableaux à ne **jamais** confondre :

- les **Absolute Maximum Ratings** — les valeurs à ne **jamais** dépasser, même un instant ; au-delà, destruction possible. Ce ne sont pas des conditions d'usage ;
- les **Recommended Operating Conditions** — la **plage d'usage normale**, celle où le composant se comporte comme spécifié.

Travailler au ras des maximum ratings, c'est concevoir une panne. La marge se prend sur les conditions de fonctionnement, pas sur les limites absolues.

> [!warning] Attention
> **Un maximum absolu n'est pas une cible.** « Power supply : 50 V » dans les maximum ratings ne veut pas dire « alimenter en 50 V », mais « au-delà de 50 V, on casse ». La tension d'usage se lit dans les conditions de fonctionnement — pour le même composant, « jusqu'à 46 V » — avec une marge.

### 5. Caractéristiques détaillées et schéma d'application

Reste le cœur quantitatif de la datasheet :

- **niveaux logiques** — à partir de quelle tension une entrée est vue comme un « 1 », en dessous de quelle tension comme un « 0 ». C'est ce qui décide de la compatibilité avec un microcontrôleur 3,3 V ou 5 V → [[niveaux-de-tension|niveaux de tension]] ;
- **courants et chutes de tension** — le courant de sortie garanti, et la tension perdue *dans* le composant : la charge ne reçoit pas toute la tension d'alimentation — lire la colonne **min** ou **max** selon le pire cas, jamais la colonne *typ* ;
- **caractéristiques thermiques** — résistance thermique et puissance dissipable : combien le composant chauffe, et s'il faut un **dissipateur** ;
- **schéma d'application** — un montage de référence proposé par le fabricant, à lire comme un point de départ, et non comme le schéma final du projet → [[analyse-de-schema-electronique|analyse d'un schéma]] pour l'étude d'un schéma complet.

> [!tip] Astuce
> **Le schéma d'application n'est pas votre schéma.** Le fabricant montre le composant en situation idéale ; votre montage devra y ajouter ce que le projet impose. Servez-vous-en comme d'un modèle, pas d'un copier-coller.

## Lecture de la datasheet du L298N

La méthode, maintenant, document sous les yeux. Le **L298N** est un *double pont en H* : un seul composant capable de piloter **deux moteurs à courant continu** indépendamment, chacun dans les deux sens de rotation. C'est un bon cas d'école, parce qu'il vit dans **deux mondes** à la fois. Ouvrez la datasheet trouvée à l'étape 1 — on la parcourt section par section ; les extraits reproduits ci-dessous et les valeurs commentées viennent de l'édition de **janvier 2000** de la datasheet ST. Une révision plus récente renumérote les tables et change la mise en page — retrouvez les mêmes lignes dans **votre** exemplaire, c'est lui qui fait foi.

![Le L298N en deux mondes : à gauche le monde logique 5 V (entrées IN1 à IN4 pour le sens, ENA/ENB pour la marche et la vitesse en PWM, alimentation logique), commandé par le microcontrôleur ; à droite le monde puissance jusqu'à 46 V, où deux ponts en H pilotent chacun un moteur à courant continu dans des sens indépendants, avec échauffement et dissipateur à prévoir.](/ressources/img/lire-une-datasheet/l298n.svg)

**Un monde logique, un monde puissance.** D'un côté, des entrées **numériques** en 5 V : IN1 à IN4 fixent le sens de chaque moteur, ENA et ENB activent chaque pont. C'est le côté que touche le microcontrôleur, et il se lit dans le brochage et les niveaux logiques. Détail concret à y lire : un « 1 » est reconnu dès 2,3 V environ — seuil assez bas pour qu'un microcontrôleur 3,3 V pilote le L298N, alors même que sa logique est alimentée en 5 V. C'est exactement le raisonnement de [[niveaux-de-tension|niveaux de tension]]. De l'autre, un étage de **puissance** : une alimentation moteur qui peut grimper à plusieurs dizaines de volts, des courants de plusieurs ampères, des sorties OUT vers les moteurs. Les grandeurs y sont **analogiques et continues** (tensions, courants, chutes de tension, échauffement) et se lisent dans les maximum ratings et les caractéristiques thermiques. La datasheet décrit ces deux mondes dans des sections différentes : savoir de quel côté on se trouve évite bien des confusions.

### Le boîtier : CMS, traversant… ou module

La première page annonce deux boîtiers pour la même puce : le **Multiwatt15**, boîtier traversant à 15 pattes avec une semelle métallique percée — celle qui recevra le radiateur —, et le **PowerSO-20**, sa déclinaison **CMS**. Le tableau des codes de commande, en fin de document, révèle au passage que « L298N » est précisément le code du Multiwatt15 vertical : le « N » du nom courant vient de là.

- le **Multiwatt15** (traversant) se soude à la main : c'est la seule version montable dans nos conditions d'atelier ;
- le **PowerSO-20** (CMS) demande un équipement de soudure en surface — hors de portée à l'école ;
- le **module** du commerce, lui, n'apparaît nulle part dans la datasheet : c'est une petite carte construite *autour* du Multiwatt15, radiateur, borniers et diodes déjà montés (cf. le cas particulier en fin de fiche).

Le même composant existe donc sous trois formes. Avant de commander ou de câbler, on vérifie **laquelle on a en main** : c'est elle qui décide de ce qu'on peut souder et de ce qu'il reste à monter autour.

### Le brochage et la table de vérité

![Extrait de la datasheet du L298 : brochage du boîtier Multiwatt15, les quinze broches numérotées avec leur nom, et la mention indiquant que la semelle métallique est reliée à la broche 8.|600](/ressources/img/lire-une-datasheet/brochage-multiwatt15.png)

*Source : STMicroelectronics — datasheet L298, extrait non modifié.*

Quinze broches, à trier en familles avant toute chose :

- **alimentation** — Vs (broche 4, la puissance moteur), Vss (broche 9, la logique 5 V) et GND (broche 8, reliée à la semelle métallique). La datasheet impose un condensateur de 100 nF au plus près de chacune des deux alimentations, et précise **non inductif** pour celle de puissance — pas pour la logique : c'est du [[decouplage|découplage]], et il n'est pas optionnel ;
- **commande** — In1/In2 et Enable A pour le pont A, In3/In4 et Enable B pour le pont B : six signaux logiques venant du microcontrôleur ;
- **puissance** — Out1/Out2 et Out3/Out4, vers les deux moteurs ;
- deux broches **Sense** (1 et 15), prévues pour mesurer le courant de chaque pont à travers une résistance — à relier à la masse quand on ne s'en sert pas.

Vient ensuite la table de vérité du pilotage d'un moteur (« bidirectional DC motor control ») :

Le schéma des deux mondes, plus haut, situe les entrées en jeu : `En` est l'entrée de validation d'un pont, `C` et `D` ses deux entrées de sens.

| Entrées | Comportement |
| --- | --- |
| En = H · C = H ; D = L | marche avant |
| En = H · C = L ; D = H | marche arrière |
| En = H · C = D | arrêt rapide (frein) |
| En = L (C, D indifférents) | roue libre |

C et D sont les deux entrées In du pont utilisé. Deux lectures à ne pas manquer : il existe **deux arrêts différents** — le frein (les deux entrées au même niveau : le pont court-circuite le moteur, arrêt rapide) et la roue libre (pont désactivé : le moteur s'arrête sur son inertie) — et le schéma d'application entoure le moteur de **quatre diodes externes** : les [[protection-electronique|diodes de roue libre]], exigées par le fabricant pour toute charge inductive.

### De la table de vérité à l'algorithme

Cette table *est* la spécification du programme : chaque ligne devient une fonction. Rédigeons l'algorithme en français, avant toute ligne de code :

```text
FONCTION avancer(vitesse) :
    IN1 <- HAUT
    IN2 <- BAS
    ENA <- PWM(vitesse)        // vitesse = rapport cyclique, de 0 a 100 %

FONCTION reculer(vitesse) :
    IN1 <- BAS
    IN2 <- HAUT
    ENA <- PWM(vitesse)

FONCTION freiner() :
    IN1 <- BAS                 // IN1 = IN2 : arret rapide
    IN2 <- BAS
    ENA <- HAUT

FONCTION roue_libre() :
    ENA <- BAS                 // pont desactive, IN1/IN2 indifferents
```

La vitesse se règle en modulant l'enable par un signal [[pwm|PWM]] : le rapport cyclique fait la vitesse moyenne. Et le second moteur ? Mêmes fonctions sur IN3/IN4 et ENB — faire pivoter une base sur elle-même, c'est appeler « avancer » sur un pont et « reculer » sur l'autre.

Pour passer de ce pseudocode au programme réel : la démarche générale est posée dans [[algorithme|algorithme]] (et son rendu graphique dans [[logigramme|logigramme]]), le langage dans [[cpp|le module C++]], et la mise en œuvre complète — câblage et code — dans [[arduino-moteur-cc|piloter un moteur CC]].

### Les Absolute Maximum Ratings, en vrai

![Extrait de la datasheet du L298 : tableau des valeurs limites absolues, avec les tensions et courants à ne pas dépasser.|600](/ressources/img/lire-une-datasheet/absolute-maximum-ratings.png)

*Source : STMicroelectronics — datasheet L298, extrait non modifié.*

Lecture commentée des lignes qui engagent le montage :

- **Vs = 50 V** — la limite de destruction de l'alimentation moteur. La première page annonce pourtant « operating supply voltage up to 46 V » : deux nombres différents pour deux notions différentes — 46 V est la limite *d'usage*, 50 V celle au-delà de laquelle on casse. C'est exactement la distinction de l'étape 4 de la méthode ;
- **Io = 2 A par pont en continu** — 2,5 A en pointes répétitives, 3 A en pointe unique. Attention : un moteur consomme bien plus au démarrage et à l'effort qu'en régime — c'est son courant de **blocage** (*stall*) qu'il faut comparer à ces lignes, pas son courant nominal ;
- **Vi, Ven : −0,3 à 7 V** — les entrées logiques ne survivent pas au monde puissance. Ne jamais croiser les deux ;
- **Ptot = 25 W** — mais lisez la condition entre parenthèses : *boîtier maintenu à 75 °C*, autrement dit **avec un refroidissement déjà en place**. Ce chiffre ne dit pas ce que le composant dissipe à l'air libre (section suivante).

À ces limites s'ajoute, dans les caractéristiques électriques, la valeur qui surprend le plus : la **chute de tension totale** du pont — 1,8 V typique à 1 A, jusqu'à 4,9 V maximum à 2 A. Le moteur ne reçoit pas la tension d'alimentation, mais cette tension *moins* la chute : alimenté « en 12 V », un moteur tirant 1 A n'en voit qu'environ 10 — à intégrer dans le dimensionnement, sous peine d'un moteur plus mou que prévu. C'est aussi l'illustration parfaite des colonnes min / typ / max : on dimensionne sur le **max** (4,9 V), pas sur le typique.

### La chauffe : pourquoi un radiateur, et où le mettre

Cette tension perdue ne disparaît pas : elle devient chaleur. Le tableau « Thermal data » permet de faire le calcul que le « 25 W » cache :

- **sans radiateur**, la résistance thermique jonction-ambiance du Multiwatt15 vaut 35 °C/W. Avec une jonction limitée à 130 °C en fonctionnement et un local à 25 °C, le composant ne peut dissiper qu'environ **3 W** à l'air libre ;
- or deux moteurs tirant chacun 1 A, c'est déjà ≈ 1,8 W par pont, soit ≈ 3,6 W au total : la limite est franchie **avant même la moitié du courant maximal**. Sous courant soutenu, la protection thermique intégrée coupe et le pont décroche — un défaut intermittent difficile à diagnostiquer ;
- **avec radiateur**, ce sont la résistance jonction-boîtier (3 °C/W) et celle du radiateur qui comptent : un radiateur ordinaire fait remonter le budget vers 8 à 10 W.

Voilà pourquoi tous les modules L298N du commerce portent un radiateur : ce n'est pas un accessoire, c'est ce qui rend les « 2 A par pont » atteignables.

Conséquence de conception : le radiateur a un **gabarit** — une empreinte au sol, une hauteur, et de l'air à laisser autour. Il se réserve dès le placement des composants sur la carte, pas une fois le routage fini → [[pcb|concevoir un PCB]].

### Module ou composant nu

Le L298N existe en composant nu (boîtier traversant) et sous forme de **module** tout prêt. Les deux ne se câblent pas pareil, et ne s'intègrent pas pareil sur une carte :

- le **module** embarque déjà le dissipateur, les diodes de protection et parfois un régulateur 5 V ; il se branche au fil à fil, sans soudure, et convient au prototypage — mais c'est une petite carte à part entière, peu intégrable dans un circuit dédié, et encombrante ;
- le **composant nu** se soude sur votre propre carte ; à vous d'ajouter alors les [[protection-electronique|diodes de roue libre]], le [[decouplage|découplage]] et le dissipateur que le module portait. Plus de travail de conception, mais une intégration compacte et maîtrisée — à condition de disposer d'un boîtier traversant, puisque l'atelier ne soude pas le CMS.

Le choix module / nu se lit donc en partie dans la datasheet (boîtier, éléments externes requis) et se tranche selon la phase du projet : module pour valider vite, composant nu pour la carte finale.

## Pièges

**Confondre maximum ratings et conditions de fonctionnement.** Les premiers sont des limites de destruction, les seconds une plage d'usage. Dimensionner sur les premiers, c'est concevoir une panne.

**Prendre le module pour le composant.** Le module embarque des éléments (diodes, dissipateur, parfois régulateur) que le composant nu exige d'ajouter soi-même. Lire la datasheet du composant ne suffit pas à connaître le module.

**Oublier la chute de tension du pont.** La charge ne reçoit pas la tension d'alimentation : le L298N en perd une part. Un moteur alimenté « en 12 V » via le pont en voit nettement moins.

**Ignorer le dissipateur.** Sous courant soutenu, sans dissipateur, le composant atteint sa coupure thermique et décroche — un défaut intermittent difficile à diagnostiquer. À prévoir aussi par sa place sur la carte.

**Oublier les diodes de roue libre.** Piloter une charge inductive — un moteur — sans [[protection-electronique|diodes de protection]] détruit le pont. Le module les intègre, le composant nu non : à ajouter soi-même.

**Lire une valeur « typique » pour une valeur garantie.** Les colonnes min / typ / max ne disent pas la même chose. Dimensionner sur le pire cas, pas sur le typique.

**Télécharger n'importe quel PDF.** Le vrai risque n'est pas de lire une révision ancienne, c'est de **ne pas savoir laquelle on lit** — les tables se renumérotent d'une édition à l'autre, et un PDF de revendeur peut être tronqué ou décrire un clone documenté à part. Repérez la révision en pied de première page, ou la table *Revision history* en fin de document, avant de citer un chiffre.

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
- [[arduino-moteur-cc|Piloter un moteur CC (pont en H)]] · [[micropython-moteur-cc|en MicroPython]] — mettre en œuvre la table de fonctions en code
- [[arduino-sortie-pwm|Piloter une sortie PWM]] · [[micropython-sortie-pwm|en MicroPython]] — commande de vitesse via l'enable
- [[analyse-de-schema-electronique|Analyse d'un schéma électronique]] — étudier un schéma de projet complet, au-delà du schéma d'application
