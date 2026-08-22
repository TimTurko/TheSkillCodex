---
title: EasyEDA
type: tuto
tags:
  - eee
  - tuto
prerequis:
  - pcb
aa: []
phases:
  - preuve-de-concept
  - dossier-technique
draft: false
---

**EasyEDA** est un logiciel de conception de circuits imprimés : on y dessine le schéma d'un montage, puis on transforme ce schéma en une carte de cuivre réelle, prête à fabriquer. Tout tient dans la même fenêtre, du premier trait au fichier qu'on remet à l'atelier.

C'est l'outil qu'on utilise à l'école, et cette fiche va jusqu'au bout du parcours : jusqu'à la carte gravée sur la fraiseuse du labo, celle que vous repartirez souder. Les contraintes décrites ici sont donc les siennes, et pas celles d'un fabricant extérieur. Le hub [[pcb|circuit imprimé]] porte le flux général et le vocabulaire ; ici, on apprend les **gestes**, dans l'ordre où on les fait. Gardez le logiciel ouvert à côté.

> [!note]
> **L'interface parle deux langues.** Les menus principaux sont en français — *Fichiers*, *Placer*, *Réglages* — mais beaucoup d'entrées sont restées en anglais, parfois dans le même déroulant : *Design*, *Check DRC*, *Copper Area*, *Run Mode Setting*. Ne cherchez pas de logique, il n'y en a pas. Les chemins sont écrits ici exactement comme ils s'affichent, mélange compris.

## À quoi ça sert ?

Une carte ne se dessine pas d'un bloc. On y va par étapes, et EasyEDA les tient toutes :

- **dessiner le schéma**, et le rendre lisible — en nommant les liaisons plutôt qu'en tirant des fils d'un bout à l'autre de la feuille ;
- **donner une empreinte** à chaque composant, c'est-à-dire la place qu'il occupera vraiment sur le cuivre — et la dessiner soi-même quand elle n'existe pas ;
- **placer et router**, sous les règles de la machine qui gravera la carte ;
- **faire vérifier** le routage par le logiciel, avant que le cuivre soit entamé ;
- **sortir le fichier** que l'atelier consommera.

Sa particularité tient en une phrase : **le composant que vous posez arrive avec son empreinte**. Sur [[kicad|KiCad]], vous choisissez d'abord un symbole, puis vous allez lui chercher une empreinte dans une autre bibliothèque — et si vous vous trompez, vous le découvrez une fois la carte gravée, quand la pièce n'entre pas dans ses trous. Ici, le symbole et l'empreinte voyagent ensemble, et toute une famille d'erreurs disparaît d'un coup.

Ne prenez pas ça pour un cadeau. Vous devenez dépendant de ce que les catalogues contiennent, et le jour où votre composant n'y est pas, vous aurez plus de travail qu'ailleurs. On verra comment s'en sortir.

Un mot sur ce que cette fiche ne fera pas : EasyEDA embarque un simulateur, et on n'y touchera pas. Pour éprouver un montage *avant* de le router, [[falstad|Falstad]] et [[ltspice|LTspice]] font ça mieux, et le hub [[simulation-electronique|simulation électronique]] vous y emmène.

## Installer et se mettre en mode hors ligne

Rendez-vous sur le site d'EasyEDA et cliquez sur **`Download Desktop`**. Vous arrivez sur un tableau à deux colonnes, une par édition, avec les liens de téléchargement par système. **Prenez la colonne de droite, `EasyEDA Std Edition`**, et le lien qui correspond à votre machine.

![Page d'accueil du site easyeda.com dans un navigateur. En haut, une bannière bleue annonce EasyEDA PCB Design Software avec deux boutons, Design online et Download Desktop ; ce dernier est encadré en rouge et une grosse flèche rouge pointe vers le bas. En dessous, un tableau Desktop Client à deux colonnes : à gauche EasyEDA Pro Edition, surmontée d'une étiquette Recommended ; à droite EasyEDA Std Edition, encadrée en rouge. Les lignes Windows, Linux et Mac donnent pour chaque édition les fichiers à télécharger.|640](/ressources/img/easyeda/download-website.jpg)

> [!warning]
> **Le site vous pousse vers la mauvaise édition.** La colonne de gauche, *Pro Edition*, porte une étiquette `Recommended` : c'est la recommandation du site, pas la nôtre. Les deux éditions n'ont ni la même interface, ni les mêmes menus, et **leurs fichiers ne s'échangent pas**. Tout ce tutoriel est écrit pour la *Std Edition* — celle de la colonne encadrée en rouge sur l'image. Si vous installez la Pro, rien de ce qui suit ne ressemblera à votre écran.

Au premier lancement, une fenêtre `Run Mode Setting` vous demande dans quel mode travailler. **Choisissez `Project Offline Mode`, puis `Apply`.** Le logiciel réclame ensuite un redémarrage : acceptez.

![Fenêtre Run Mode Setting d'EasyEDA proposant trois modes. Team Work Mode, projets stockés sur le serveur. Project Offline Mode, projets stockés sur votre ordinateur : c'est celui qui est coché, encadré en rouge et désigné par une grosse flèche rouge. Full Offline Mode, projets et composants stockés sur votre ordinateur, grisé et inaccessible. En bas, une mention indique qu'un redémarrage est nécessaire après changement de mode, et les boutons Apply et Cancel.|560](/ressources/img/easyeda/select-offline-mode.png)

C'est tout ce qu'il y a à faire ici, et c'est la seule chose à ne pas rater. Une fois le choix posé, la mention `Projects Offline mode` s'affiche en haut à gauche, à côté du nom du logiciel. Si elle y est, vous êtes prêt.

![Haut de la fenêtre d'EasyEDA. Dans la barre de titre, la mention Projects Offline mode est encadrée en rouge et désignée par une grosse flèche rouge. En dessous, le menu Réglages est déroulé et l'entrée Desktop Edition Setting est sélectionnée, ouvrant une cascade où figure Run Mode Setting, également en surbrillance.|640](/ressources/img/easyeda/verifier-changer-mode-offline.png)

Si elle n'y est pas, la même fenêtre se rouvre par *Réglages → Desktop Edition Setting… → Run Mode Setting…*, comme ci-dessus.

## Construire la carte

On apprend à réaliser un PCB complet, de la feuille blanche sur le logiciel à la réalisation de la carte électronique que vous allez vous-même souder. Aujourd'hui, le tutoriel vous montre comment faire avec un montage nommé **astable à NE555** : un circuit qui fait clignoter une LED, six composants, tous traversants. Il est choisi parce qu'il se route sans difficulté, et parce qu'à la fin — la carte entre les mains, le fer à côté — vous verrez la LED clignoter pour de vrai. Comprendre la théorie de l'astable n'est pas nécessaire pour suivre : ici, le sujet est la carte.

### 1. Le projet, la feuille et le cartouche

*Fichiers → Nouveau → Projet…* Jetez un œil au passage à la même cascade : elle propose aussi *Schéma*, *Circuit* et *Empreinte*. Retenez où elles sont, on reviendra chercher la dernière.

Donnez un titre à votre projet et **laissez le dossier sur `Projet Hors Ligne`**.

![Menu Fichiers d'EasyEDA déroulé sur Nouveau, dont la cascade propose Projet, Schéma, Circuit, Symbole, Empreinte, Modèle 3D, Symbole Spice, Module Schématique et Module PCB. En bas, la fenêtre Créer un nouveau projet avec un champ Dossier renseigné à Projet Hors Ligne, un champ Titre renseigné à My_First_PCB, et les boutons Enregistrer et Annuler.|640](/ressources/img/easyeda/fichier-nouveau-projet.png)

Votre projet contient une feuille, `Sheet_1`. C'est là que le schéma se dessine, et ça ressemble beaucoup à ce que vous avez vu en cours d'électronique. Un **cadre rouge** en délimite l'espace de travail, bordé de repères — des chiffres en haut et en bas, des lettres sur les côtés. Ils servent à désigner un endroit du schéma à l'oral : « regarde en B3 ». Dans le coin **en bas à droite** se loge le **cartouche**, ou *title block*.

**Remplissez-le tout de suite.** C'est une minute de travail et ça vous suivra tout le projet : le nom du projet, votre numéro de groupe, la date, votre nom.

![Cartouche d'une feuille de schéma EasyEDA, en bas à droite du cadre. Le champ TITLE porte la mention RENSEIGNEZ ICI LE NOM DU PROJET, le champ Company porte NUMERO DU GROUPE, le champ Date porte JJ slash MM slash AAAA, le champ Drawn By porte VOTRE NOM. À droite, le champ REV vaut 1.0 et le champ Sheet vaut 1 sur 1.|640](/ressources/img/easyeda/cartouche-projet.png)

Ça n'a rien d'un formulaire administratif. En bureau d'études, le cartouche est ce qui rend un document **traçable** : sans lui, personne ne sait, trois semaines plus tard, quelle version du schéma il a sous les yeux ni à qui la demander. L'**indice de révision** (*REV*) est là pour ça — vous le ferez passer à 1.1, puis à 1.2, à mesure que le schéma évolue. C'est la même exigence que sur toute pièce versée à un [[dossier-technique|dossier technique]].

> [!tip]
> **Gardez les conventions de placement de vos cours d'électronique.** Les entrées à gauche de la feuille, les sorties à droite, les alimentations positives en haut, les masses en bas, et les composants utiles au centre. Ce n'est pas une question d'esthétique : un schéma qui respecte ces conventions se lit sans effort par quelqu'un qui ne l'a pas dessiné — votre binôme, votre encadrant, ou vous-même après les vacances. Voir [[analyse-de-schema-electronique|analyser un schéma électronique]].

### 2. Chercher un composant, et lire ce qu'on trouve

*Placer → Symbole*, ou plus vite `Shift+F`, ouvre la fenêtre de recherche. Tapez le nom du composant — il en faut **au moins trois caractères** pour que la recherche démarre.

![Fenêtre Librairie d'EasyEDA sur le terme NE555, annotée de trois flèches rouges légendées Search, Symbol et Footprint. Une ligne Types propose Symbole, Empreinte, Symbole Spice, SCH Module, Module PCB et Modèle 3D. En dessous, la ligne Classes affiche LCSC quarante-neuf, Assemblé par JLCPCB quarante-cinq, Système sept, et Contributions des utilisateurs neuf cent quatre-vingt-dix-neuf ou plus. La liste centrale donne les références avec leur empreinte associée, du DIP-8 et du SOIC-8. Le panneau de droite montre l'aperçu du symbole en haut, avec ses huit broches nommées, et celui de l'empreinte en dessous, avec ses huit pastilles.|640](/ressources/img/easyeda/search-ne555.png)

La ligne *Types* décide **ce que vous cherchez** : un *Symbole*, une *Empreinte*, un modèle 3D. Restez sur *Symbole* — c'est lui qui se pose sur le schéma, et l'empreinte vient avec.

Juste en dessous, les résultats sont rangés en **classes**, chacune avec son nombre de trouvailles. Elles ne se valent pas :

- *LCSC* et *Assemblé par JLCPCB* sont tenues par des professionnels. Ce qu'on y trouve est fiable et complet ;
- *Système* rassemble les composants génériques livrés avec le logiciel ;
- *Contributions des utilisateurs* est remplie par les autres utilisateurs. C'est de très loin la plus fournie — sur `NE555`, elle affiche **999+** là où les trois autres réunies en donnent **cent une** — et c'est aussi un grenier : il y a du très bon, du bâclé, du complet et de l'inachevé, tout mélangé.

Vous finirez pourtant souvent par y chercher, faute de trouver ailleurs. D'où le réflexe, à prendre dès maintenant et à garder : **regardez le panneau de droite et vérifiez que la référence a bien un symbole *et* une empreinte**. Le symbole s'affiche en haut, l'empreinte en dessous.

> [!warning]
> **Un composant sans empreinte ne se voit pas au schéma.** Il se pose normalement, se câble normalement, tout a l'air d'aller. La faute n'apparaît qu'au moment de passer à la carte, quand il manque une empreinte là où les autres en ont une. Le coup d'œil au panneau de droite vous coûte deux secondes ; le découvrir plus tard vous coûtera une reprise complète.

> [!tip]
> **Pour les composants passifs, servez-vous de l'arborescence de gauche.** Elle range les résistances, les condensateurs, les connecteurs et le reste par famille et par technologie. C'est plus rapide que de deviner un nom de référence, et ça vous montre au passage tout ce qui existe sous un même mot.

### 3. L'empreinte, et pourquoi la référence compte moins qu'elle

C'est le point où se joue la réussite de votre carte, et il tient dans une distinction que beaucoup font trop tard.

**Le symbole** est ce que vous posez sur le schéma : un rectangle, un triangle, un zigzag, avec des broches nommées. Il dit **ce que le composant fait**. **L'empreinte** — *footprint* — est ce qui apparaîtra sur le cuivre : des pastilles, à telle distance les unes des autres, percées ou non. Elle dit **la place que le composant prend et la façon dont il se soude**.

![Un symbole, deux empreintes. En haut, un unique symbole de résistance, le même quelle que soit la technologie. En dessous, deux voies. À gauche le traversant : vu de côté, le corps est au-dessus de la carte et ses fils la traversent, la soudure se faisant dessous ; vue de dessus, deux pastilles percées largement écartées. À droite le monté en surface : le corps repose sur le cuivre et se soude du même côté ; vue de dessus, deux pastilles pleines sans trou et rapprochées.|640](/ressources/img/easyeda/traversant-cms.svg)

La conséquence surprend au début : **la référence exacte compte beaucoup moins que l'empreinte**. Vous ne trouverez pas votre condensateur de 10 µF au catalogue avec le bon diélectrique, la bonne tension et la bonne marque — et ce n'est pas grave. Ce qu'il vous faut, c'est une empreinte qui **corresponde au composant que vous avez en main** : deux trous au bon écartement, et vous souderez dedans le vrai condensateur. La valeur écrite sur le schéma ne pilote rien du cuivre.

> [!warning]
> **Une empreinte fausse ne se rattrape pas.** Une valeur mal saisie, vous la corrigez au fer en changeant le composant. Un écartement de pastilles faux vous donne une carte où la pièce **n'entre pas**, et il n'y a rien à faire. C'est la seule erreur de cette fiche qui coûte une plaque de cuivre. Vérifiez contre les cotes de la [[lire-une-datasheet|fiche technique]], ou à défaut au pied à coulisse sur l'exemplaire que vous avez sous la main.

À chaque composant, une seule question à vous poser : *ce que je vais souder, est-ce que ça rentre là-dedans ?*

### 4. Câbler le schéma

Posez vos composants sur la feuille : les deux résistances, les deux condensateurs, le NE555. Ne cherchez pas encore la disposition parfaite — vous les déplacerez.

Il vous faut aussi les **alimentations**. Elles ne se dessinent pas comme des composants : la barre d'outils de câblage propose des symboles dédiés, `VCC` et `GND`, à poser sur la feuille comme le reste.

![Feuille de schéma EasyEDA avec les composants posés mais aucun fil tiré. En haut à gauche, deux condensateurs C1 et C2 de 10 nanofarads. En dessous, deux résistances R1 et R2 portant la référence MFR100FTE52-2K. Au centre, le circuit intégré U1, un NE555, avec ses broches GND, TRIG, OUT et RESET numérotées 1 à 4 sur son flanc gauche, et VCC, DISCH, THRES et CONT numérotées 8 à 5 sur son flanc droit. À droite, isolés, les deux symboles d'alimentation VCC et GND.|640](/ressources/img/easyeda/schema-composants-poses.png)

> [!warning]
> **Ces symboles d'alimentation ne sont pas décoratifs.** C'est par eux que le logiciel comprend qu'un fil est une masse ou une alimentation. Si vous vous contentez de tirer des fils entre les broches sans jamais poser de `VCC` ni de `GND`, tout aura l'air correct à l'écran, et ça coincera plus loin — au moment de passer à la carte, quand il faudra recommencer le câblage depuis le début.

Reste à relier tout ça. L'outil **`Wire`** tire les fils d'une broche à l'autre ; là où deux fils se rejoignent réellement, un **point rouge** apparaît. C'est la seule marque qui distingue un croisement d'une connexion, alors regardez-la.

![Le même schéma, cette fois entièrement câblé en fils verts. Les points de jonction sont marqués de petits carrés rouges. Le tracé passe entre les composants et sous le NE555, et plusieurs fils se croisent, ce qui rend la lecture difficile.|640](/ressources/img/easyeda/schema-cable-erreur.png)

C'est correct, et c'est illisible. Imaginez maintenant le même travail avec un microcontrôleur à quarante broches : le schéma devient un plat de nouilles où personne ne retrouve rien.

> [!question]- Une erreur s'est glissée dans ce câblage. Saurez-vous la retrouver ?
> À compléter — la réponse sera donnée ici.

### 5. Nommer les liaisons plutôt que tirer des fils

La parade s'appelle le **label de réseau**, l'outil `Net`. Le principe est simple et il change tout : **deux fils qui portent le même nom sont connectés**, même s'ils ne se touchent pas à l'écran.

![Le même montage, redessiné avec des labels de réseau. À gauche, une colonne isolée : VCC, R1, un point nommé Disch, R2, un point nommé Trig slash Tresh, C1, puis GND. À droite, le NE555 séparé du reste, dont chaque broche porte un label au lieu d'un fil : GND sur la broche 1, Trig slash Tresh sur la broche 2, VCC sur la broche 4, VCC sur la broche 8, Disch sur la broche 7, Trig slash Tresh sur la broche 6. La broche 5 est reliée au condensateur C2, lui-même relié à GND. Plus aucun fil ne traverse la feuille.|640](/ressources/img/easyeda/schema-labels-net.png)

Comparez les deux images : c'est le même circuit. Le second se lit en un coup d'œil, parce qu'il est découpé en morceaux qu'on peut comprendre séparément — la chaîne R1, R2, C1 d'un côté, le composant de l'autre.

Et le nom que vous donnez fait la moitié du travail. `Disch`, `Trig/Tresh` : chaque label dit **à quoi le fil sert**, pas où il va. Un lecteur qui voit `Trig/Tresh` sur la broche 6 sait immédiatement qu'elle rejoint le point milieu du réseau RC, sans avoir à suivre quoi que ce soit du doigt.

> [!tip]
> **Une liaison nommée s'ajoute sans rien redessiner.** Besoin de brancher quelque chose de plus sur l'alimentation ? Posez un label `VCC` dessus, et c'est connecté. C'est ce qui rend un schéma modifiable — et vous le modifierez, plusieurs fois.

## Pièges

> [!failure]- Il me manque une classe entière dans la recherche de composants
> Vous êtes repassé en mode connecté sans le voir. Le logiciel ne prévient pas : il vous laisse travailler, et le manque n'apparaît que plus tard, au moment de chercher un composant — *Contributions des utilisateurs* a disparu de la ligne des classes.
>
> **Regardez la barre de titre**, en haut à gauche : la mention `Projects Offline mode` doit y figurer. Si elle n'y est pas, repassez par *Réglages → Desktop Edition Setting… → Run Mode Setting…*, choisissez `Project Offline Mode`, `Apply`, et redémarrez le logiciel.
