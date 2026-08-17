---
title: Falstad
type: tuto
tags:
  - eee
  - tuto
prerequis:
  - simulation-electronique
aa: []
phases:
  - concept
  - preuve-de-concept
draft: false
---

**Falstad** (du nom de son auteur, Paul Falstad — *Circuit Simulator*, sur `falstad.com/circuit`) est un simulateur de circuits **analogiques** qui tourne dans le navigateur, gratuitement et **sans compte**. Sa signature : il **montre le courant circuler** sous forme de points animés et la tension par un code couleur. C'est l'outil pour *comprendre* un montage et l'explorer vite — moins pour le dimensionner finement (voir [[ltspice|LTspice]]). Cette fiche est un tuto-outil du hub [[simulation-electronique|simulation électronique]], qui porte la méthode générale ; on apprend ici les **gestes**, en trois temps : **lire** un circuit qui tourne, en **modifier** un, puis en **construire** un. À suivre l'écran sous les yeux.

![Fenêtre de Falstad à l'ouverture : le circuit RLC d'accueil animé au centre, la barre de menus en haut, la colonne de commandes à droite et les trois oscilloscopes en bas.|640](/ressources/img/falstad/interface.png)

## À quoi ça sert ?

On l'ouvre pour :

- **voir** ce qu'un schéma fait — le courant qui accélère dans une branche quand on baisse sa résistance, une tension qui s'effondre sous une charge trop lourde ;
- **explorer en temps réel** — modifier une valeur et observer l'effet immédiatement, sans relancer ;
- **démarrer sans rien installer** — ni logiciel, ni compte, ce qui le rend idéal en cours ou pour un premier essai.

Contrepartie : ses composants sont **idéaux et génériques**. Pour confirmer un dimensionnement, on passe à [[ltspice|LTspice]].

## Lire un circuit qui tourne

La page s'ouvre sur un circuit **déjà en marche** — un circuit RLC, avec ses trois oscilloscopes déjà posés en bas de fenêtre. Avant de toucher à quoi que ce soit, il faut savoir lire l'écran : c'est là que Falstad donne le plus.

- **La couleur, c'est la tension** : vert pour une tension positive, gris pour le potentiel de référence, rouge pour une tension négative, la teinte suivant l'amplitude. Un fil qui vire au rouge n'est pas en défaut, il est sous tension négative.
- **Les points, c'est le courant** : ils se déplacent dans le sens conventionnel, et **leur vitesse est proportionnelle à l'intensité**. Une branche où les points rampent conduit peu ; une branche figée ne conduit pas.
- **Le survol, c'est la mesure** : pointer un composant remplit le panneau **en bas à droite** — sa nature, le courant `I` qui le traverse, la tension `Vd` à ses bornes, sa valeur et la puissance `P` qu'il dissipe. C'est le multimètre de Falstad, sans sonde à câbler.

![Le pointeur survole la résistance de 10 ohms du circuit d'accueil : le composant et son oscilloscope passent en surbrillance, et le panneau du bas à droite affiche I = 8,52 mA, Vd = 85,204 mV, R = 10 ohms et P = 725,972 microwatts.|640](/ressources/img/falstad/survol-mesure.png)

Le survol **surligne aussi l'oscilloscope** du composant pointé : c'est le pont le plus court entre le schéma et la courbe, et il vaut la peine d'être pris comme réflexe.

La simulation tourne en continu ; **RUN/stop** la fige et la relance, **Reset** repart de zéro. Trois curseurs suivent dans la colonne de droite, et les deux premiers sont régulièrement confondus.

> [!warning]
> **Vitesse de Simulation et Vitesse d'Animation ne font pas la même chose.** La *Vitesse de Simulation* règle l'écoulement du **temps simulé** — c'est elle qu'on ajuste pour observer un phénomène rapide, et elle n'a aucun effet sur un circuit purement résistif. La *Vitesse d'Animation* ne règle que le **défilement des points** : confort visuel, sans influence sur les valeurs mesurées. Ralentir les points en croyant ralentir le temps, puis conclure sur une durée, est l'erreur de lecture la plus fréquente de l'outil. Le troisième curseur, *Puissance Lumineuse*, ne touche qu'à l'éclat de l'affichage.

![Colonne de commandes de Falstad : les boutons Reset et RUN/stop, puis les curseurs Vitesse de Simulation, Vitesse d'Animation et Puissance Lumineuse.|200](/ressources/img/falstad/curseurs-vitesse.png)

## Modifier un circuit existant

Le menu **Circuits** contient une bibliothèque fournie, rangée par thème — *Les Bases*, *Circuits Alternatifs*, *Filtres Passif*, diodes, amplificateurs opérationnels, logique. Partir d'un de ces circuits et le transformer est le geste le plus rentable de l'outil : le montage est déjà juste, l'attention ne se dépense que sur ce qu'on change.

### 1. Charger le circuit et l'éditer

Ouvrir *Circuits → Les Bases → Potentiomètre*.

![Menu Circuits déroulé sur la rubrique Les Bases, avec l'entrée Potentiomètre mise en évidence parmi les circuits de base.|600](/ressources/img/falstad/ouvrir-un-circuit.png)

Le montage est particulier, et il faut le lire avant d'y toucher : **deux sources de 5 V** ont leur borne + reliée au **curseur** du potentiomètre, et chacune sa borne − reliée à une **extrémité** de la piste. Chaque demi-piste a donc les 5 V entiers à ses bornes, et forme sa propre boucle avec sa source.

Un **double-clic** sur un composant ouvre ses paramètres — c'est le geste d'édition central de Falstad. Sur le potentiomètre, la boîte annonce une résistance totale de **1 kΩ**, et le schéma affiche `500` et `500` de part et d'autre du curseur : les deux moitiés sont à égalité.

![Boîte de dialogue Edit Potentiometer ouverte par un double-clic sur le potentiomètre : le champ Resistance (Ohm) indique 1k, et le schéma affiche 500 et 500 de part et d'autre du curseur.|600](/ressources/img/falstad/potentiometre-edition.png)

Le potentiomètre reçoit aussi un **curseur de réglage dans la colonne de droite** — son libellé est le champ *Texte du curseur* de la boîte d'édition. La molette de la souris, pointeur sur le composant, fait la même chose. Et pour retirer un élément plutôt que le modifier, on le sélectionne et on appuie sur **Suppr**.

> [!question]
> **Prédire avant de balayer.** Chaque demi-piste voit 5 V à ses bornes, et déplacer le curseur redistribue les 1 kΩ entre les deux moitiés. En poussant le curseur vers une extrémité : les deux courants vont-ils simplement s'échanger, ou l'un des deux va-t-il s'emballer ? Poser sa réponse avant de bouger quoi que ce soit.

### 2. Balayer et observer

À mi-course, chaque moitié fait 500 Ω et porte 5 V : **10 mA** de chaque côté, 20 mA au total. Poussé au dixième de la course, le rapport explose — 100 Ω d'un côté laissent passer **50 mA**, les 900 Ω de l'autre n'en laissent que **5,6 mA**, soit neuf fois moins. Les points s'emballent dans une branche pendant qu'ils s'engourdissent dans l'autre.

![Animation du circuit potentiomètre : en déplaçant le curseur, les points de courant accélèrent nettement dans la demi-piste qui rétrécit et ralentissent dans celle qui s'allonge.|640](/ressources/img/falstad/potentiometre.gif)

C'est la loi d'Ohm rendue visible : à tension constante, le courant est l'inverse de la résistance. Une formule qu'on récite depuis des années devient, en quelques secondes de balayage, quelque chose qu'on a *vu*.

> [!note]
> **Ce montage est une démonstration, pas un montage de projet.** Personne ne câble deux alimentations sur le curseur d'un potentiomètre. En projet, le potentiomètre sert de **pont diviseur** — piste complète entre l'alimentation et la masse, tension prélevée au curseur et lue par un [[adc|convertisseur analogique-numérique]] : c'est l'entrée *Diviseur de Tension à Potentiomètre* du même menu, et c'est le montage décrit dans la fiche [[potentiometre|Le potentiomètre]].

## Construire son circuit — un filtre passe-haut

Reste le geste complet : partir de rien. On monte un **filtre passe-haut** RC, et on regarde ce qu'il laisse passer selon la fréquence.

### 1. Page blanche et placement

*Fichier → Nouveau circuit vide* vide la zone de dessin. Attention : **un circuit sans source de tension ne démarre pas**.

![Menu Fichier déroulé, entrée Nouveau circuit vide en tête de liste.|520](/ressources/img/falstad/nouveau-circuit-vide.png)

Les composants se posent depuis le menu **Dessiner** : on choisit le type, le pointeur devient une croix, et on trace le composant par un cliquer-glisser d'une borne à l'autre (les composants courants ont un raccourci clavier). Il faut ici une **source de tension alternative de 5 V**, un **condensateur de 10 µF** en série, une **résistance de 35 Ω** vers la masse, et la masse. La **sortie se lit aux bornes de la résistance** — c'est ce qui fait un passe-haut plutôt qu'un passe-bas.

> [!warning]
> **Le solveur refuse certaines mailles.** Une source court-circuitée, ou une boucle faite uniquement de condensateurs, déclenche un message d'erreur explicite. Ce n'est pas une erreur de physique mais une limite du calcul : Falstad ne sait pas résoudre une maille sans résistance. Ajouter la résistance manquante, même faible, débloque la simulation.

### 2. Prédire, puis balayer la fréquence

Poser un oscilloscope sur l'entrée et un sur la sortie — le menu **Oscilloscopes** et le clic droit sur un composant les gèrent — puis faire varier la fréquence de la source.

> [!question]
> **Prédire avant de balayer.** La fréquence de coupure d'un filtre RC vaut fc = 1 / (2π·R·C). Avec 35 Ω et 10 µF, où tombe-t-elle ? Et pour un passe-**haut**, la sortie sera-t-elle plus grande à 20 Hz ou à 1 kHz ?

### 3. Lire et confronter

La théorie donne fc = 1 / (2π × 35 Ω × 10 µF) ≈ **455 Hz**, pile au milieu de la plage balayée. En dessous, le filtre coupe ; au-dessus, il laisse passer.

![Animation du filtre passe-haut RC : la sinusoïde d'entrée reste à 5 V pendant que la sinusoïde de sortie, quasi nulle à basse fréquence, retrouve presque toute l'amplitude d'entrée à mesure que la fréquence monte vers 1 kHz.|640](/ressources/img/falstad/circuit-rc.gif)

À **20 Hz**, la sortie ne dépasse pas quelques centaines de millivolts — une vingtaine de fois moins que l'entrée : le filtre coupe. À **1 kHz**, elle atteint **4,55 V**, soit 91 % de l'entrée : le filtre laisse passer. Ce dernier point est celui qu'il faut confronter, parce que la théorie le prédit exactement : à f = 2,2 × fc, un passe-haut du premier ordre restitue un gain de 0,91. La simulation ne fait pas que « donner une jolie courbe », elle **tombe sur la valeur attendue** — et c'est cette confrontation, pas la courbe, qui valide la saisie.

Si la déformation défile trop vite pour être lue, c'est la *Vitesse de Simulation* qu'il faut ralentir — pas la *Vitesse d'Animation*, qui ne fera que traîner les points sur une courbe tout aussi illisible.

### 4. Garder le circuit

> [!tip]
> **Sans compte, l'export est la vraie sauvegarde.** Le menu *Fichier* propose *Exporter comme Texte…* — un fichier à ranger dans le dossier projet — et *Exporter avec Lien…*, qui encode le circuit entier dans une URL : c'est la façon d'envoyer un montage à un camarade ou à un encadrant, il n'y a rien à installer en face. *Importer depuis Texte…* fait le chemin inverse. Pour un compte rendu, *Exporter en SVG…* et *Exporter comme Image…* sortent le schéma proprement.

![Menu Fichier entièrement déroulé, montrant les entrées Enregistrer Sous, Exporter avec Lien, Exporter comme Texte, Exporter comme Image, Exporter en SVG et Récupérer l'enregistrement automatique.|440](/ressources/img/falstad/menu-fichier.png)

On vient de vérifier une fréquence de coupure sur une courbe, et la tentation est immédiate : croire le filtre **dimensionné**. Il ne l'est pas — Falstad simule dans le temps et laisse changer la fréquence à la main ; il ne trace pas de réponse en fréquence. Le jour où il faut relever une coupure au point −3 dB sur un balayage automatique, ou tenir compte de composants réels, c'est [[ltspice|LTspice]] qu'il faut ouvrir.

## Pièges

**Prendre un modèle idéal pour la réalité.** Les composants de Falstad n'ont ni tolérance, ni résistance parasite, ni échauffement : l'outil donne le bon *comportement*, pas la valeur garantie d'un composant réel — les pièges généraux de la [[simulation-electronique#Pièges|simulation]] s'appliquent ici aussi.

**Confondre les deux vitesses.** La *Vitesse d'Animation* n'affecte que le défilement des points ; seule la *Vitesse de Simulation* change l'écoulement du temps simulé. Conclure sur une durée après avoir touché le mauvais curseur donne une réponse fausse sur un écran qui semble avoir obéi.

**Compter sur l'enregistrement automatique.** *Fichier → Récupérer l'enregistrement automatique* existe et sauve parfois la mise, mais c'est un filet, pas une sauvegarde : il ne garde qu'un seul état et ne survit pas à un changement de machine. Exporter dès qu'un circuit vaut la peine d'être gardé.

**Prendre un circuit de démonstration pour un montage de projet.** La bibliothèque est faite pour montrer un phénomène, pas pour être recopiée sur une carte. Avant de transposer, se demander si le câblage a un sens hors du simulateur.

## Exercices

> [!question]
> **Exercice 1 — Déplacer la coupure.** Reprenez le filtre passe-haut et remplacez la résistance de 35 Ω par **350 Ω**. Avant de relancer : où tombe la nouvelle fréquence de coupure ? Et que devient la sortie à 20 Hz — plus grande ou plus petite qu'avant ? Vérifiez ensuite à l'écran.

> [!success]- Corrigé
> fc = 1 / (2π × 350 Ω × 10 µF) ≈ **45,5 Hz**, dix fois plus bas : multiplier R par dix divise la coupure par dix. À 20 Hz on n'est plus très loin sous la coupure, et la sortie monte à **environ 2 V** au lieu de 0,3 V. Le filtre coupe moins bas, donc il laisse passer davantage de basses fréquences — ce qui est bien le comportement attendu quand on abaisse la coupure d'un passe-haut.

> [!question]
> **Exercice 2 — Fabriquer un 3,3 V à partir d'un 5 V.** Sur une page blanche, montez un pont diviseur qui délivre **3,3 V** à partir d'une source continue de 5 V, avec des résistances de valeurs courantes. Vérifiez la tension au survol, puis dites à quelle condition ce montage est utilisable dans un vrai projet.

> [!success]- Corrigé
> Un diviseur **10 kΩ** (côté source) et **20 kΩ** (côté masse) donne 5 V × 20 / (10 + 20) = **3,33 V**, et consomme 5 V / 30 kΩ ≈ 0,17 mA.
>
> La condition tient à ce courant : le montage ne vaut que s'il attaque une **entrée à haute impédance** — celle d'un [[adc|convertisseur analogique-numérique]], par exemple — qui ne consomme quasiment rien. Dès qu'une charge appelle du courant au point milieu, elle se met en parallèle avec la résistance basse et **affaisse la tension**. Un diviseur n'alimente jamais un composant. Voir [[niveaux-de-tension|niveaux de tension]].

## Voir aussi

- [[simulation-electronique|Simulation électronique]] — le hub : méthode, types d'analyse et lecture des résultats
- [[ltspice|LTspice]] — l'outil du dimensionnement précis, quand les valeurs comptent
- [[potentiometre|Le potentiomètre]] — le composant de la section 2, dans son câblage de projet
- [[chronogramme|Chronogramme]] — lire une forme d'onde, idéale comme réelle
- [[niveaux-de-tension|Niveaux de tension]] — pourquoi un diviseur ne remplace pas une alimentation
- [[analyse-de-schema-electronique|Analyser un schéma électronique]] — le schéma que Falstad fait vivre
