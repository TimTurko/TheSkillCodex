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

![Haut de la fenêtre d'EasyEDA. Dans la barre de titre, la mention Projects Offline mode est encadrée en rouge et désignée par une grosse flèche rouge. En dessous, le menu Réglages est déroulé et l'entrée Desktop Edition Setting est sélectionnée, ouvrant une cascade où figure Run Mode Setting, également en surbrillance.|640](/ressources/img/easyeda/verifier-changer-mode-offline.jpg)

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

Les trois se regardent bien côte à côte sur le NE555 :

![Trois représentations du même NE555, alignées. À gauche, le symbole : un rectangle encoché en haut, avec ses huit broches numérotées et nommées GND, TRIG, OUT et RESET à gauche, VCC, DISCH, THRES et CONT à droite. Au centre, une photo du composant réel, un boîtier noir marqué NE555N dont les huit pattes métalliques descendent en deux rangées. À droite, l'empreinte : sur fond noir, huit pastilles percées disposées en deux rangées de quatre, avec le repère NE555 au centre.|640](/ressources/img/easyeda/NE555-schema-footprint.png)

Le symbole dit à quoi sert chaque broche. La photo montre l'objet que vous tiendrez. L'empreinte, elle, ne connaît que des trous et des distances — elle ignore complètement qu'il s'agit d'un NE555.

![Un symbole, deux empreintes. En haut, un unique symbole de résistance, le même quelle que soit la technologie. En dessous, deux voies. À gauche le traversant : vu de côté, le corps est au-dessus de la carte et ses fils la traversent, la soudure se faisant dessous ; vue de dessus, deux pastilles percées largement écartées. À droite le monté en surface : le corps repose sur le cuivre et se soude du même côté ; vue de dessus, deux pastilles pleines sans trou et rapprochées.|640](/ressources/img/easyeda/traversant-cms.svg)

La conséquence surprend au début : **la référence exacte compte beaucoup moins que l'empreinte**. Vous ne trouverez pas votre condensateur de 10 µF au catalogue avec le bon diélectrique, la bonne tension et la bonne marque — et ce n'est pas grave. Ce qu'il vous faut, c'est une empreinte qui **corresponde au composant que vous avez en main** : deux trous au bon écartement, et vous souderez dedans le vrai condensateur. La valeur écrite sur le schéma ne pilote rien du cuivre.

> [!tip]
> **Poussez le raisonnement jusqu'au bout : une empreinte n'appartient à personne.** Une résistance traversante et un condensateur traversant, c'est « deux trous » dans les deux cas. Si vous ne trouvez pas d'empreinte satisfaisante pour l'un, **prenez celle de l'autre** — pourvu que l'écartement corresponde à ce que vous allez souder. Le cuivre ne sait pas ce qui viendra se poser dessus, et il s'en moque.
>
> Une seule précaution, et elle arrive au fer à souder : la sérigraphie de la carte affichera alors `R4` à l'endroit où vous devez souder un condensateur. Notez-le quelque part, sinon vous vous tromperez vous-même trois semaines plus tard.

> [!warning]
> **Une empreinte fausse ne se rattrape pas.** Une valeur mal saisie, vous la corrigez au fer en changeant le composant. Un écartement de pastilles faux vous donne une carte où la pièce **n'entre pas**, et il n'y a rien à faire. C'est la seule erreur de cette fiche qui coûte une plaque de cuivre. Vérifiez contre les cotes de la [[lire-une-datasheet|fiche technique]], ou à défaut au pied à coulisse sur l'exemplaire que vous avez sous la main.

À chaque composant, une seule question à vous poser : *ce que je vais souder, est-ce que ça rentre là-dedans ?*

Et cette question est moins évidente qu'elle n'en a l'air, parce qu'un même mot recouvre des objets très différents. « Un condensateur », par exemple :

![Planche photographique d'une douzaine de condensateurs traversés, tous de formes différentes : un électrochimique noir cylindrique à pattes axiales, des boîtiers plats bleus, un petit céramique bleu à deux pattes, un gros condensateur industriel blanc à cosses, trois disques céramiques rouges de tailles décroissantes, un tantale vert en forme de goutte, un électrochimique noir de grande taille, et plusieurs petits cylindres gris. Les encombrements vont de quelques millimètres à plusieurs centimètres.|560](/ressources/img/easyeda/differents-types-condensateurs.png)

Chimique, céramique, film, tantale ; quelle taille, quel écartement de pattes, quelle tension ? À ce stade, vous n'en savez probablement rien — et ce n'est pas grave. Prenez celui que vous avez en main, mesurez l'écartement de ses pattes, et cherchez une empreinte qui lui corresponde.

Ce que ça change se voit à la soudure :

![Quatre photos légendées. En haut à gauche, soudure et empreinte parfaites en version horizontale : une rangée de résistances repérées R15 à R22, collées à la carte verte, pattes droites dans leurs trous. En haut à droite, version verticale : deux résistances dressées sur une carte bleue, une patte repliée proprement en épingle. En bas à gauche, mauvaise empreinte en version horizontale : une grosse résistance de deux watts dont les pattes sont écartées en arc pour atteindre des trous trop éloignés. En bas à droite, mauvaise empreinte en version verticale : une rangée dense de transistors et de résistances aux pattes tordues et repliées dans tous les sens.|640](/ressources/img/easyeda/impact-footprint-sur-soudure.jpg)

Une empreinte juste donne un composant qui se pose et se soude sans effort. Une empreinte fausse donne des pattes tordues, écartées de force, parfois cassées — et une carte qu'on n'a pas envie de montrer.

### 4. Traversant, et rien d'autre

Voilà la règle la plus importante de cette fiche, et celle qui fait le plus de dégâts quand elle est oubliée.

**Vos composants doivent être traversants.** Pas montage en surface, pas CMS, pas SMD. Ce n'est pas une préférence de style : **on n'a pas le matériel pour souder du CMS à l'école**. Un composant CMS choisi par distraction donne une carte que vous ne pourrez pas assembler, et vous ne le découvrirez qu'une fois le cuivre gravé, la carte en main et le fer allumé.

![Deux photos côte à côte. À gauche, cochée d'une marque verte, une résistance traversante bleue à anneaux de couleur, munie de deux longs fils, posée sur un fond quadrillé gradué en centimètres. À droite, barrée d'une croix rouge, une résistance CMS : un petit rectangle noir marqué 10R0, sans aucun fil, à peine plus gros qu'un grain de riz.|640](/ressources/img/easyeda/resistance-traversante-ok-cms-pas-ok.png)

![Trois vignettes. À gauche, cochée d'une marque verte, un condensateur traversant vert à deux longs fils. Au centre et à droite, barrées chacune d'une croix rouge, deux condensateurs CMS montrés avec leur empreinte au-dessus : dans les deux cas, l'empreinte est faite de deux pastilles pleines sans le moindre trou, et le composant est un petit bloc sans fils.|640](/ressources/img/easyeda/condensateur-traversant-ok-cms-pas-ok.jpg)

Trois façons de vérifier, de la plus sûre à la plus rapide :

1. **Regardez l'aperçu de l'empreinte**, dans le panneau de droite. Des pastilles **percées** : c'est traversant. Des pastilles **pleines**, sans trou : c'est du CMS. C'est le critère le plus fiable, parce qu'il montre la chose elle-même.
2. **Lisez le nom de l'empreinte**, dans la colonne du milieu. `RES-TH_`, `CAP-TH_`, `DIP-8`, `PDIP-8` — le `TH` est là pour *through hole*, et un boîtier `DIP` est traversant par construction. À l'inverse, `SOIC-8`, `SOP-8`, `MSOP-8`, `DFN-8`, ou un code à quatre chiffres comme `0603`, `0805`, `1206`, désignent du CMS.
3. **Servez-vous de l'arborescence de gauche**, qui range déjà les familles par technologie.

> [!warning]
> **Ne vous fiez pas à la pastille `SMT` de la liste.** Elle apparaît aussi sur des références parfaitement traversantes — elle parle d'un service d'assemblage, pas de la technologie du composant. Le trou dans la pastille, lui, ne ment pas.

À chaque référence que vous sélectionnez, le réflexe est donc double, et il tient en deux secondes : **est-ce qu'il y a une empreinte ? est-ce qu'elle a des trous ?**

### 5. Câbler le schéma

Posez vos composants sur la feuille : les deux résistances, les deux condensateurs, le NE555. Ne cherchez pas encore la disposition parfaite — vous les déplacerez.

Il vous faut aussi les **alimentations**. Elles ne se dessinent pas comme des composants : la barre **`Outils de Cablâge`**, en haut à droite de la feuille, propose des symboles dédiés — `VCC`, `+5V`, la masse — à poser comme le reste.

![Barre d'outils flottante intitulée Outils de Cablâge, sur deux rangées d'icônes. La première rangée propose le fil, la connexion, la ligne, le label de réseau marqué d'un N encadré, la masse, et deux formes de port. La seconde rangée propose un symbole VCC, un symbole plus cinq volts, une balise sans connexion en forme de croix, une sonde de tension, une broche et un bloc.|400](/ressources/img/easyeda/outils-de-cablage.png)

![Feuille de schéma EasyEDA avec les composants posés mais aucun fil tiré. En haut à gauche, deux condensateurs C1 et C2 de 10 nanofarads. En dessous, deux résistances R1 et R2 portant la référence MFR100FTE52-2K. Au centre, le circuit intégré U1, un NE555, avec ses broches GND, TRIG, OUT et RESET numérotées 1 à 4 sur son flanc gauche, et VCC, DISCH, THRES et CONT numérotées 8 à 5 sur son flanc droit. À droite, isolés, les deux symboles d'alimentation VCC et GND.|640](/ressources/img/easyeda/placement-des-composants-sur-sch.png)

> [!warning]
> **Ces symboles d'alimentation ne sont pas décoratifs.** C'est par eux que le logiciel comprend qu'un fil est une masse ou une alimentation. Si vous vous contentez de tirer des fils entre les broches sans jamais poser de `VCC` ni de `GND`, tout aura l'air correct à l'écran, et ça coincera plus loin — au moment de passer à la carte, quand il faudra recommencer le câblage depuis le début.

Reste à relier tout ça. L'outil **`Wire`** tire les fils d'une broche à l'autre ; là où deux fils se rejoignent réellement, un **point rouge** apparaît. C'est la seule marque qui distingue un croisement d'une connexion, alors regardez-la.

![Le même schéma, cette fois entièrement câblé en fils verts. Les points de jonction sont marqués de petits carrés rouges. Le tracé passe entre les composants et sous le NE555, et plusieurs fils se croisent, ce qui rend la lecture difficile.|640](/ressources/img/easyeda/cabler-composant-sur-sch-avec-erreur.png)

C'est correct, et c'est illisible. Imaginez maintenant le même travail avec un microcontrôleur à quarante broches : le schéma devient un plat de nouilles où personne ne retrouve rien.

> [!question]- Une erreur s'est glissée dans ce câblage. Saurez-vous la retrouver ?
> Regardez le fil qui porte `TRIG` et `THRES`, les broches 2 et 6, jusqu'au condensateur **C2**. Il y a un **point rouge** à leur croisement, donc une connexion — et cette connexion emmène `TRIG` et `THRES` sur la broche 5, `CONT`.
>
> Cette liaison n'existe pas dans le montage de référence. Les deux fils **doivent se croiser sans se toucher**. Un point rouge de trop, et le circuit ne fait plus ce qu'on lui demande.
>
> C'est tout le problème du câblage à la main : le point de jonction est minuscule, il apparaît d'un simple clic mal placé, et rien ne le signale. Le logiciel vous croit sur parole.

### 6. Nommer les liaisons plutôt que tirer des fils

La parade s'appelle le **label de réseau**, l'outil `Net`. Le principe est simple et il change tout : **deux fils qui portent le même nom sont connectés**, même s'ils ne se touchent pas à l'écran.

![Le même montage, redessiné avec des labels de réseau. À gauche, une colonne isolée : VCC, R1, un point nommé Disch, R2, un point nommé Trig slash Tresh, C1, puis GND. À droite, le NE555 séparé du reste, dont chaque broche porte un label au lieu d'un fil : GND sur la broche 1, Trig slash Tresh sur la broche 2, VCC sur la broche 4, VCC sur la broche 8, Disch sur la broche 7, Trig slash Tresh sur la broche 6. La broche 5 est reliée au condensateur C2, lui-même relié à GND. Plus aucun fil ne traverse la feuille.|640](/ressources/img/easyeda/utiliser-netlabel-sur-sch.png)

Comparez les deux images : c'est le même circuit. Le second se lit en un coup d'œil, parce qu'il est découpé en morceaux qu'on peut comprendre séparément — la chaîne R1, R2, C1 d'un côté, le composant de l'autre.

![Agrandissement du même schéma, annoté pour montrer le fonctionnement des labels. À gauche, le point de jonction entre R2 et C1 porte un label Trig slash Tresh, entouré d'un ovale bleu. À droite, la broche 2 TRIG du NE555 porte un label Trig slash Tresh identique, lui aussi entouré d'un ovale bleu. Un trait bleu en pointillés relie les deux ovales pour figurer la liaison, alors qu'aucun fil ne les joint sur la feuille.|640](/ressources/img/easyeda/explication-fonctionnement-netlabel.png)

Et le nom que vous donnez fait la moitié du travail. `Disch`, `Trig/Tresh` : chaque label dit **à quoi le fil sert**, pas où il va. Un lecteur qui voit `Trig/Tresh` sur la broche 6 sait immédiatement qu'elle rejoint le point milieu du réseau RC, sans avoir à suivre quoi que ce soit du doigt.

> [!tip]
> **Une liaison nommée s'ajoute sans rien redessiner.** Besoin de brancher quelque chose de plus sur l'alimentation ? Posez un label `VCC` dessus, et c'est connecté. C'est ce qui rend un schéma modifiable — et vous le modifierez, plusieurs fois.

### 7. Une sortie qu'on peut voir

En l'état, la broche `OUT` du NE555 ne va nulle part. Le circuit oscille, et rien ne le montre. Ajoutons donc **une LED**, qui rendra le clignotement visible — avec sa **résistance de protection** en série, sans laquelle la LED ne survivrait pas longtemps.

![Schéma complet du montage, en trois groupes séparés. À gauche, la chaîne VCC, R1, le point Disch, R2, le point Trig slash Tresh, C1 et GND. Au centre, le NE555 dont chaque broche porte son label, avec C2 sur la broche CONT. À droite, un troisième groupe isolé : un label OUT entre dans la résistance R3, qui alimente la diode D1 repérée LED-10, elle-même reliée à GND. Aucun fil ne relie les trois groupes entre eux.|640](/ressources/img/easyeda/sch-complet-sans-connecteurs.png)

Regardez comment la sortie s'est branchée : **un label `OUT` sur la broche 3, un label `OUT` devant R3, et c'est fait.** Aucun fil n'a traversé la feuille, et le nouveau bloc se lit tout seul.

> [!note]
> **Changer une valeur au schéma ne change rien au cuivre.** Vous pouvez écrire ce que vous voulez sur R1 ou C1 : la carte gravée sera la même, seules comptent les empreintes. Le montage réel ne dépendra que des composants que vous **souderez** dessus — vous pourrez donc ajuster la vitesse de clignotement au fer, sans retoucher la carte.

### 8. Faire entrer le courant

Il reste une question qu'on oublie facilement : **d'où vient le courant ?** Les symboles `VCC` et `GND` disent au logiciel ce qu'est une alimentation, mais ils ne fabriquent pas d'électricité. Il faut un endroit physique où arrive le câble.

Cherchez un **connecteur à deux broches**. Un bornier fait parfaitement l'affaire pour du prototypage.

![Fenêtre de recherche de composants sur les mots deux pins connector. La liste rend une quinzaine de résultats aux noms très inégaux, allant de SimpleConnector2Pins à CONNECTOR CIRCULAR 8 POSITIONS, en passant par des connecteurs à cinq, six, huit ou vingt-quatre broches qui n'ont rien à voir avec la demande. La ligne sélectionnée porte le nom 2 pins connector et l'empreinte 2 PINS CONNECTOR. Le panneau de droite montre le symbole, deux broches numérotées 1 et 2, et l'empreinte en dessous : deux pastilles percées.|640](/ressources/img/easyeda/recherche-connecteurs.png)

Profitez-en pour observer la qualité des résultats : la recherche rend des connecteurs à cinq, six, huit et vingt-quatre broches pour une demande à deux. C'est le grenier dont on parlait — **c'est à vous de trier**, et l'aperçu d'empreinte est votre meilleur outil pour le faire.

![Schéma complet du montage. En haut à gauche, encadré en rouge, le bornier U1 à deux broches : la broche 1 rejoint un symbole VCC, la broche 2 un symbole GND. En dessous, la chaîne R1 de 1 kilohm, R2 de 100 kilohms et C1 de 10 microfarads. Au centre, le NE555 repéré U2 avec ses labels. À droite, la résistance R3 de 520 ohms et la LED D1.|640](/ressources/img/easyeda/sch-complet-avec-connecteur.png)

Et voilà tout l'intérêt des labels : **ajouter le bornier n'a demandé de retoucher aucune autre partie du schéma.** Deux symboles d'alimentation sur ses broches, et il est relié à tout ce qui porte `VCC` ou `GND`.

Ce bornier n'est qu'un point d'entrée ; ce que vous branchez dessus reste ouvert.

![Quatre photos légendées montrant des façons d'amener le courant sur une carte. En haut à gauche, deux câbles rouge et noir soudés directement sur les pastilles d'un circuit imprimé vert. En haut à droite, un assortiment de connecteurs blancs à verrouillage, du type qu'on trouve dans les ordinateurs. En bas à gauche, un éventail de câbles terminés par des connecteurs de modélisme identifiés Bare leads, JST, Futaba, XT60, T Plug, Tamiya, Mini tamiya et EC3. En bas à droite, une planche de borniers à vis verts et bleus, en versions deux et trois broches.|640](/ressources/img/easyeda/differents-types-connecteurs.jpg)

> [!tip]
> **Le bornier à vis est le bon choix en prototypage.** Il tient mécaniquement, et surtout il se **redémonte** : changer un câble ne demande ni fer à souder ni tresse à dessouder. Souder les fils directement sur la carte fonctionne aussi et ne demande aucune pièce, mais ce que vous avez soudé, vous devrez le dessouder.

### 9. Passer du schéma à la carte

Le schéma est fini. *Design → Convertir le Schéma en PCB*.

![Menu Design d'EasyEDA déroulé, contenant quatre entrées. La première, Convertir le Schéma en PCB, raccourci Alt plus P, est en surbrillance. La deuxième, juste en dessous, est Mettre à jour le PCB, raccourci Alt plus U. Suivent Update Components from Library et Reset Component Unique ID.|640](/ressources/img/easyeda/convertir-sch-en-pcb.png)

> [!danger]
> **Ne prenez jamais `Mettre à jour le PCB`.** C'est la ligne juste en dessous, elle décrit mieux que l'autre ce que vous voudrez faire, et c'est un piège. En mode hors ligne, la mise à jour n'existe pas : le logiciel lance un contrôle, puis vous demande de **vous connecter et de repasser en ligne**. Si vous acceptez, vous perdez l'accès aux bibliothèques de la communauté — et vous ne ferez le lien avec ce clic que bien plus tard.
>
> Pour reporter une modification du schéma sur la carte, il n'y a qu'un chemin : **refaire `Convertir le Schéma en PCB`**, qui repart d'une page blanche.

D'où une conséquence à prendre au sérieux : **votre schéma doit être juste avant de convertir.** Tout ce que vous ferez ensuite sur la carte — placement, routage, plan de masse — sera perdu si vous devez reconvertir. Relisez-le une dernière fois maintenant.

Une fenêtre vous demande les caractéristiques de la carte. **Vous n'avez rien à y changer.**

![Fenêtre Nouveau PCB. Le champ Unités vaut millimètres, le champ Copper Layer vaut deux, le champ Board Outline vaut Rectangulaire. En dessous, Start X vaut 7 millimètres et Start Y 97 millimètres, Largeur vaut 39 millimètres et Hauteur 26 millimètres. En bas, les boutons Appliquer et Annuler.|560](/ressources/img/easyeda/parametres-nouveau-pcb.png)

### 10. Le chevelu, et le placement

Un nouveau fichier s'ouvre, et il ne ressemble à rien de connu. Un **cadre violet** délimite la surface de votre future carte. En dessous, les **empreintes** de vos composants, en vrac. Et entre elles, une toile de fils fins qui partent dans tous les sens.

![Vue PCB d'EasyEDA sur fond noir. En haut, un rectangle violet vide délimite le contour de la carte. En dessous, hors du cadre, les empreintes des composants sont posées en vrac : le boîtier NE555 repéré U2 avec ses huit pastilles percées, la diode D1, les résistances R1, R2 et R3 dessinées en rectangles jaunes avec leurs deux pastilles, les condensateurs C1 et C2, et le bornier U1. Des dizaines de fins traits bleus relient les pastilles entre elles en se croisant dans tous les sens.|640](/ressources/img/easyeda/chevelu.png)

Ces fils s'appellent le **chevelu**. Ce ne sont pas des pistes : ce sont les liaisons que votre schéma a déclarées, et que **vous devrez tracer en cuivre**. Le chevelu est votre liste de courses. Chaque fil bleu que vous ferez disparaître est une connexion faite.

Commencez par entrer les composants dans le cadre violet. Rien n'oblige à les placer intelligemment tout de suite — la seule contrainte pour l'instant est qu'**ils ne se chevauchent pas**.

Posez d'abord le bornier `U1`. Il apporte le courant, alors donnez-lui un bord de carte : le câble doit arriver de l'extérieur.

![Coin supérieur gauche du contour violet de la carte. Le bornier U1 y est posé seul, contre le bord gauche, avec ses deux pastilles percées entourées de jaune. Un unique fil bleu du chevelu part de lui vers le bas et sort du cadre.|470](/ressources/img/easyeda/placement-premier-composant-bornier-a-droite.png)

Puis rentrez le reste.

![Le contour violet de la carte, cette fois entièrement occupé. Le NE555 repéré U2 est debout au centre haut, le bornier U1 contre le bord gauche, la LED D1 contre le bord droit, le condensateur C2 en haut à droite et C1 en bas à gauche. Les trois résistances R1, R2 et R3 sont empilées au centre, leurs rectangles jaunes se superposant les uns aux autres. Les fils bleus du chevelu se croisent abondamment.|640](/ressources/img/easyeda/premiere-tentative-de-placement.png)

> [!tip]
> **Gardez la même logique qu'au schéma : ce qui entre d'un côté, ce qui sort de l'autre.** Le bornier d'alimentation contre un bord, la LED contre le bord opposé. Une carte dont on devine le sens en la regardant est une carte qu'on câble sans se tromper.

### 11. Les règles de la machine

Avant de tracer la moindre piste, il faut dire au logiciel **ce que la fraiseuse sait faire**. *Design → règle de dessin*.

![Menu Design d'EasyEDA déroulé, où l'entrée règle de dessin est en surbrillance, sous Importer les changements et Check DRC. En dessous, le tableau des règles : la ligne Default donne une largeur de piste minimale de 1 millimètre, un isolement minimal de 0,5 millimètre, un diamètre de via minimal de 1,2 millimètre et un diamètre de perçage de via minimal de 1 millimètre. La colonne de longueur maximale de piste est vide.|640](/ressources/img/easyeda/reglage-regles-de-dessin.png)

Ces nombres ne sont pas des préférences. Chacun décrit une limite physique de l'outil qui gravera votre carte :

| Règle | Valeur | Ce que ça veut dire |
|---|---|---|
| `Track Width (min)` | 1 mm | La piste la plus fine que la fraise sait tracer |
| `Clearance (min)` | 0,5 mm | L'écart minimal entre deux cuivres qui ne doivent pas se toucher |
| `Via Diameter (min)` | 1,2 mm | Le diamètre minimal d'une pastille de traversant |
| `Via Drill Diameter (min)` | 1 mm | Le diamètre du foret monté sur la machine |

> [!note]
> **Ces valeurs sont beaucoup plus larges que dans l'industrie.** Un fabricant professionnel descend dix fois plus bas. Ce n'est pas un handicap, c'est une contrainte de conception comme une autre — et concevoir sous contrainte connue vaut mieux que concevoir sans contrainte du tout. Vous verrez : à 1 mm de piste, la place manque vite, et c'est là que le placement devient intéressant.

### 12. Des pastilles qu'on puisse souder

Une dernière préparation avant de router, et elle vient de l'expérience du fer à souder : **plus la zone de cuivre est grande, plus la soudure est facile**. Les pastilles par défaut sont petites et rondes.

![Vue PCB très agrandie sur le bornier U1. Ses deux pastilles, marquées VCC et GND, sont de grands carrés blancs percés d'un trou central gris. Le panneau de droite affiche les propriétés du composant : préfixe U1, nom Bornier, empreinte 2 PINS CONNECTOR, position et rotation.|640](/ressources/img/easyeda/pad-composants-taille-de-base.png)

Cliquez sur une pastille, et son panneau de propriétés s'ouvre à droite. **Passez-la en rectangle de 3 mm sur 1,5 mm**, et **réglez son perçage à 1 mm**. Le rectangle est un réglage éprouvé par les promotions précédentes : assez large pour qu'un fer à souder chauffe la pastille sans peine, assez étroit pour ne pas manger la place des pistes voisines. Le millimètre, lui, est le diamètre du foret monté sur la machine.

![La même pastille après réglage. Le panneau de droite montre les propriétés de la pastille : couche Multi-Layer, forme Rectangle, connexion GND, et les champs Largeur à 3 millimètres et Hauteur à 1,5 millimètre, encadrés en rouge et désignés par une grosse flèche rouge. Le champ Perçage vaut 1 millimètre. Sur le canevas, les deux pastilles sont devenues des rectangles allongés nettement plus larges que le trou.|640](/ressources/img/easyeda/pad-composants-avec-taille-recommandee.png)

À faire sur **toutes** les pastilles de la carte. Votre carte ressemble alors à ceci — mêmes composants, même placement provisoire, mais des pastilles sur lesquelles un fer à souder a de la prise :

![Vue PCB de la carte, tous composants à l'intérieur du contour violet. Les pastilles sont devenues des rectangles gris allongés, nettement plus grands que les pastilles rondes du départ. Le bornier U1 est à gauche, le circuit intégré U3 en haut au centre, le condensateur C2 et la LED D1 à droite, C1 en bas à gauche, et les résistances R1, R2 et R3 empilées au centre. Les fils bleus du chevelu se croisent encore abondamment.|640](/ressources/img/easyeda/seconde-tentative-de-placement-avec-les-bonnes-tailles-de-pads.png)

> [!warning]
> **Dessinez les trous à la taille qu'ils auront réellement.** La routine d'usinage de l'atelier impose ses propres diamètres — 1 mm pour les pastilles, 3 mm pour les trous de fixation — quoi que contienne votre fichier. Ce que vous saisissez ne pilote donc pas la machine.
>
> Mais ça pilote **ce que le logiciel vous montre et ce qu'il vérifie**. Un trou dessiné plus petit qu'il ne sera percé vous cache une collision bien réelle : à l'écran la piste passe à côté, et sur la carte le foret la coupe. Vous ne le découvrirez qu'une fois le cuivre entamé.
>
> Règle simple : **le dessin doit dire la vérité sur la géométrie**, même quand quelqu'un d'autre tient la fraise.

> [!tip]
> **Le rectangle a un sens.** Selon l'orientation du composant, il faudra peut-être échanger largeur et hauteur — 3 mm dans le sens où la piste arrive, 1,5 mm dans l'autre. Une pastille allongée perpendiculairement à sa piste ne sert à rien.

### 13. Router la première piste

On y est. L'outil **`Wire`**, raccourci `W`, trace le cuivre d'une pastille à l'autre. Une seule chose à vérifier avant de commencer : que vous dessinez bien sur la couche **`Côté Cuivre`**, celle qui sera gravée.

![Deux panneaux côte à côte. À gauche, la barre Outils de Circuits, dont le premier icône, celui du fil, est encadré en rouge. À droite, le panneau Layers and Objects listant les calques Côté Composants en rouge, Côté Cuivre en bleu et Sérigraphie côté Composants en jaune ; la ligne Côté Cuivre est encadrée en rouge et porte l'icône de crayon indiquant le calque actif.|560](/ressources/img/easyeda/tracer-fils-cote-cuivre.png)

Avant de vous lancer, un réflexe qui vous épargnera des heures : **bougez les composants pour que le fil du chevelu soit droit**. Deux pastilles à relier qui ne sont pas alignées vous obligeront à des détours ; alignées, la piste se trace d'un trait.

![Vue PCB agrandie. Le bornier U1, à gauche, a ses deux pastilles décalées vers le bas par rapport aux pastilles du composant de droite. Les fils bleus du chevelu qui les relient sont obliques.|420](/ressources/img/easyeda/deux-pads-non-alignes.png)

![La même zone après déplacement du bornier U1 vers le haut. Sa pastille supérieure est maintenant à la même hauteur que celle du composant de droite, et le fil bleu qui les relie est parfaitement horizontal.|420](/ressources/img/easyeda/correction-alignement-pads.png)

Tracez maintenant la liaison. Le fil bleu du chevelu **disparaît** et une piste de cuivre apparaît à sa place.

![Vue PCB agrandie sur une piste fraîchement tracée. Une bande bleue épaisse relie horizontalement une pastille du bornier U1 à une pastille du composant voisin. Autour, les autres fils du chevelu, fins et obliques, sont toujours là.|420](/ressources/img/easyeda/premier-cable.png)

Vérifiez sa **largeur** : cliquez sur la piste, et lisez le panneau de droite. Elle doit être à **1 mm**, la valeur minimale que la fraise sait tracer.

![Vue PCB avec une piste sélectionnée, désignée par une grosse flèche rouge partant d'une légende Click cable. Le panneau des propriétés des pistes, à droite, montre la couche Côté Cuivre et le champ Largeur à 1 millimètre, encadré en rouge. En dessous figurent la connexion VCC, les coordonnées de début et de fin, et une longueur de 14,351 millimètres.|640](/ressources/img/easyeda/changer-taille-premier-cable.png)

Puis recommencez, chevelu après chevelu. La touche `R` fait pivoter un composant, et le chevelu se réorganise à mesure que vous déplacez les pièces — il vaut souvent mieux bouger un composant que contourner un obstacle.

> [!tip]
> **Laissez `GND` pour la fin.** C'est le réseau qui touche presque tous les composants, et donc celui qui gênera le plus si vous le tracez trop tôt. On le traitera autrement, à la toute fin.

### 14. Deux virages à 45° valent mieux qu'un angle droit

Tôt ou tard, une piste devra tourner. Faites-la tourner **en deux fois à 45°** plutôt qu'une fois à 90°.

![Deux vues PCB côte à côte. À gauche, barrée d'une croix rouge, une piste bleue part d'une pastille marquée OUT, file horizontalement puis remonte d'un seul coup à angle droit. À droite, cochée d'une marque verte, la même liaison est tracée avec deux cassures à quarante-cinq degrés au lieu de l'angle droit.|640](/ressources/img/easyeda/piste-45-deg-ok-pas-ok.png)

**Sur votre carte, l'angle droit ne posera aucun problème.** Autant le dire tout de suite : à la vitesse à laquelle clignote une LED, la forme des virages n'a strictement aucun effet. Si on vous demande quand même le 45°, c'est pour deux raisons.

La première est historique. Les cartes gravées à l'acide gardaient du produit piégé dans l'angle rentrant, qui continuait à ronger le cuivre après coup — le fameux *piège à acide*. Votre carte étant **fraisée** et non gravée, ce problème n'existe pas ici.

La seconde est celle qui compte : **c'est un réflexe de métier**, et un réflexe s'acquiert là où il ne coûte rien. Le jour où vous routerez une carte qui communique — Wi-Fi, radio, un bus rapide — la géométrie des pistes cessera d'être cosmétique, et vous n'aurez pas à apprendre le geste ce jour-là.

> [!note]
> **Une piste devient une antenne par sa longueur, pas par ses coudes.** L'antenne Wi-Fi d'un module ESP est une piste de cuivre repliée en accordéon : ce sont les repliements qui font tenir dans un petit espace une longueur accordée sur la fréquence émise. Ce qui rayonne, c'est cette longueur. Une piste courte et anguleuse ne rayonne pas ; une longue piste bien droite, si.

### 15. Passer là où il n'y a pas la place

Votre carte n'a **qu'une seule face de cuivre**. Deux pistes ne peuvent donc pas se croiser : elles se toucheraient. Le routage devient vite un casse-tête, et deux astuces le débloquent.

La première : **passez sous un composant**. Une carte est un assemblage en trois dimensions ; entre les pattes d'un boîtier, il y a du vide, et une piste peut y passer sans rien toucher.

![Vue PCB agrandie. Une piste bleue traverse horizontalement l'espace compris entre les deux rangées de pastilles d'un composant, sans toucher aucune d'elles. D'autres pistes contournent la zone.|560](/ressources/img/easyeda/astuce-passer-sous-un-autre-composant.png)

La seconde : **ajoutez une pastille intermédiaire** quand plusieurs pistes doivent se rejoindre. Plutôt que d'accumuler des cassures autour d'un point de rencontre, on pose une pastille et tout converge dessus proprement.

![Vue PCB agrandie. Trois pistes bleues convergent vers une pastille ronde grise placée au milieu du parcours, qui sert de point de jonction. La résistance R2 est visible à droite, et le bord violet de la carte longe le côté.|560](/ressources/img/easyeda/pad-pour-croisement.png)

### 16. Le strap, quand il faut vraiment passer par-dessus

Quand aucun contournement ne marche, il reste le **strap** : un fil qu'on soudera **par-dessus** la carte, entre deux pastilles, pour franchir une piste existante. La liaison ne passe plus dans le cuivre, elle passe dans les airs.

Dans le logiciel, on le dessine en trichant : on trace le morceau de liaison sur la **face composants** — celle où il n'y a pas de cuivre — et deux pastilles servent d'ancrage aux extrémités. À l'écran, ce segment apparaît d'une autre couleur.

![Vue PCB agrandie. Une piste bleue arrive de la gauche sur une pastille ronde, puis un segment rouge la prolonge horizontalement jusqu'à une seconde pastille ronde, d'où la piste repart en bleu vers la droite. Une autre piste bleue, verticale, traverse la zone entre les deux pastilles sans toucher le segment rouge.|560](/ressources/img/easyeda/astuce-strap.png)

Ce rouge n'existera pas sur la carte gravée : c'est **à vous de souder un bout de fil** entre les deux pastilles, une fois la carte en main. Rien de sorcier, et le procédé est aussi vieux que l'électronique grand public.

![Trois photos de cartes électroniques anciennes. À gauche, une carte beige piquée de dizaines de pontets de fil nu formant un réseau dense au-dessus du circuit. Au centre, une carte peuplée de résistances et de gros condensateurs électrochimiques, avec des pontets courts entre certains composants. À droite, une carte verte portant la référence 5764-12206-00, sur laquelle un long fil rouge isolé relie deux points éloignés en passant au-dessus des pistes.|640](/ressources/img/easyeda/astuce-strap-visualisation-realisation-pcb.png)

> [!tip]
> **Visez moins de dix straps.** Ce n'est pas un seuil physique, c'est un objectif de qualité de placement : chaque strap est un fil soudé à la main, donc du temps d'assemblage et un point de fragilité mécanique de plus. Au-delà d'une dizaine, c'est le signe que vos composants sont mal disposés — et il est souvent plus rapide d'en déplacer deux que de souder huit fils.

### 17. Les trous de fixation et l'origine machine

Deux détails de finition, tous deux indispensables.

D'abord, **les trous de fixation** : ceux qui laisseront passer les vis pour tenir la carte dans un boîtier ou sur un assemblage mécanique. Posez-en aux quatre coins, et **réglez leur perçage à 3 mm**, le diamètre que la machine leur donnera.

![Vue PCB complète, carte entièrement routée. Une grosse flèche rouge part de l'outil de trou dans la barre Outils de Circuits, encadré en rouge, et pointe vers un trou placé dans le coin supérieur droit de la carte, dessiné comme un grand cercle barré d'une croix. À droite, le panneau Hole Properties montre un champ Perçage à 3 millimètres, désigné par une seconde flèche rouge.|640](/ressources/img/easyeda/reglage-taille-trous-de-percage.png)

C'est ici que l'avertissement de la section 12 prend tout son sens : un trou dessiné plus petit qu'il ne sera percé laisserait croire que la piste voisine passe, alors que le foret la couperait.

Ensuite, **l'origine de la zone de travail**. La fraiseuse a besoin d'un point de référence pour savoir où commencer : placez-le **en bas à gauche** de la carte.

![Vue PCB complète. Une grosse flèche rouge part d'un outil encadré en rouge dans la barre Outils de Circuits et descend jusqu'au coin inférieur gauche du contour violet de la carte, où l'origine doit être posée. La carte est entièrement routée, avec ses quatre trous de fixation aux angles.|560](/ressources/img/easyeda/reglage-origine-machine-outil.png)

### 18. Le plan de masse

Vous avez laissé `GND` de côté depuis le début. Le voici. En regardant la carte, il reste des fils de chevelu non tracés : ce sont eux.

![Vue PCB de la carte routée. Toutes les liaisons sont tracées en pistes bleues épaisses, sauf quelques fins traits blancs qui subsistent entre le bornier U1, le condensateur C1, le circuit intégré et la LED D1 — les liaisons de masse, encore à faire. Les quatre trous de fixation sont en place aux angles.|640](/ressources/img/easyeda/masse-pas-connectee-preparation-plan-de-masse.png)

On ne va pas les router un par un. À la place, on remplit **tout le cuivre restant** avec de la masse : c'est le **plan de masse**. L'outil `Copper Area`, raccourci `E`, demande de cliquer les quatre coins de la carte, puis `Échap` pour fermer. Une boîte demande alors à quel réseau rattacher la zone : **`GND`**.

![Boîte de dialogue Propriétés ne contenant qu'un champ, Connexion, réglé sur GND et sélectionné en bleu, avec les boutons OK et Annuler. Derrière, la barre Outils de Circuits et le panneau des calques : Côté Composants, Côté Cuivre, Sérigraphie côté Composants.|540](/ressources/img/easyeda/creer-plan-de-masse.png)

Tout l'espace libre devient du cuivre relié à la masse, et les liaisons `GND` se font toutes seules.

> [!warning]
> **Vérifiez qu'il n'en reste qu'un seul.** Selon votre placement et l'isolement réglé dans les règles de dessin, le remplissage peut se retrouver **coupé en plusieurs îlots** que rien ne relie. Chacun est un plan de masse séparé, et les liaisons entre eux ne sont pas faites — le chevelu reste visible, c'est le signe.

![Deux vues de la même carte, plan de masse rempli en bleu. En haut, barrée d'une croix rouge : le remplissage est divisé en deux zones numérotées 1 et 2, la zone 2 étant enfermée le long du bord gauche par les pistes qui la ceinturent, sans jamais toucher la zone 1 ; de fins traits de chevelu subsistent au centre. En bas, cochée d'une marque verte : le même remplissage forme une seule zone continue sur toute la carte, et plus aucun chevelu n'est visible.|560](/ressources/img/easyeda/plan-de-masse-ok-pas-ok.png)

Sur l'exemple du haut, la zone **2** est enfermée le long du bord gauche par les pistes qui la ceinturent : elle n'atteint jamais la zone **1**. Trois sorties, dans cet ordre de préférence : **déplacer un composant** pour ouvrir un passage, **retracer une piste** autrement, ou en dernier recours **réduire l'isolement** dans les règles de dessin — sans jamais descendre sous 0,5 mm, qui est la limite de la fraise.

> [!tip]
> **Le plan de masse se refait à chaque modification.** Dès que vous bougez un composant ou une piste, supprimez-le et recréez-le : c'est instantané, et un plan de masse calculé sur l'ancien routage ne veut plus rien dire.

### 19. Faire vérifier la carte par le logiciel

*Design → Check DRC*. Le **DRC** — *Design Rule Check* — relit votre carte et la confronte aux règles de dessin réglées en section 11.

![Menu Design d'EasyEDA déroulé, entrée Check DRC en surbrillance. À gauche, le panneau de projet affiche trois lignes : Composants zéro sur zéro, Nets zéro sur zéro, et DRC Errors zéro, cette dernière sélectionnée.|640](/ressources/img/easyeda/check-drc.png)

S'il trouve quelque chose, la liste s'affiche à gauche et **chaque erreur est matérialisée par une croix sur la carte**. Cliquez une ligne pour vous rendre à l'endroit fautif.

![À gauche, le panneau DRC Errors indiquant quatre erreurs : trois lignes espacement entre pastille et piste, dont la première est encadrée en rouge, et une ligne Exists incomplete connection. Une grosse flèche rouge relie cette première ligne à la vue de la carte, à droite, où une croix jaune marque l'endroit où une piste passe trop près d'une pastille du condensateur C1.|640](/ressources/img/easyeda/exemple-erreur-drc.png)

Deux familles reviennent tout le temps :

- **`espacement (Pastille - Piste)`** — deux cuivres sont trop proches l'un de l'autre. À corriger en écartant la piste, pas en desserrant la règle ;
- **`Exists incomplete connection`** — il reste une liaison du chevelu que vous n'avez pas tracée. Souvent un îlot de masse isolé : relisez la section précédente.

> [!warning]
> **Le DRC ne contrôle que le dessin.** Il vérifie des distances et des liaisons manquantes — rien d'autre. Il ne vous dira **jamais** que votre montage est faux, que vous avez inversé deux broches ou choisi une résistance absurde. Un DRC à zéro erreur signifie « cette carte est fabricable », jamais « ce circuit fonctionne ».

Corrigez, **refaites le plan de masse**, relancez le DRC. Recommencez jusqu'à zéro.

### 20. Le tirage papier, dernier filet avant le cuivre

Avant de lancer la gravure, il reste une vérification qui ne coûte qu'une feuille : **imprimer la carte à l'échelle 1:1 et poser les vrais composants dessus**. Mieux vaut perdre une feuille A4 qu'une plaque de cuivre.

*Fichiers → Exporter → PDF*.

![Menu Fichiers d'EasyEDA déroulé, entrée Exporter sélectionnée, ouvrant une cascade qui propose PDF, PNG et SVG. L'entrée PDF est en surbrillance. En dessous du menu figurent Exporter la nomenclature et Generate PCB Fabrication File en Gerber.|560](/ressources/img/easyeda/export-pdf-menu.png)

La fenêtre d'export demande quelles couches sortir. Ce qui compte : **`Taille 1:1`**, le type **`Couche fusionnée`**, la couleur **`Noir sur blanc`**, et les couches **`Côté Cuivre`**, **`BoardOutLine`** et **`Trous`** cochées.

![Fenêtre Exporter document. Le format de sortie est PDF, la taille est 1:1. Le moteur est Local, les graphiques en Full Graphics, le type en Couche fusionnée, la couleur en Noir sur blanc. Le tableau des couches montre Côté Cuivre, Sérigraphie côté Cuivre, les couches de masque, BoardOutLine, Multi-couches et Trous cochées à l'export, tandis que Côté Composants, Sérigraphie côté Composants et Document ne le sont pas. La case Mirroir est cochée en haut de sa colonne. En bas, une note en rouge indique un zoom à 100 pour cent et la possibilité d'imprimer pour créer son typon.|600](/ressources/img/easyeda/export-pdf-reglages.png)

À l'impression, un seul réglage compte, et c'est celui que tout le monde rate : **cochez `Taille réelle`**, jamais `Ajuster`. Une carte imprimée « au mieux » dans la page ne prouve strictement rien.

![Fenêtre d'impression Windows. Dans la section Dimensionnement et gestion des pages, l'option Taille réelle est sélectionnée et encadrée en rouge, au-dessus des options Ajuster et Échelle personnalisée. L'aperçu de droite montre la carte, très petite, centrée sur une page A4, et indique un document de 50,4 sur 36 millimètres.|640](/ressources/img/easyeda/parametres-imprimante-pour-test-impression.png)

Posez ensuite vos composants sur la feuille, par transparence contre une vitre ou une lampe, et vérifiez que **les pattes tombent dans les trous**. C'est le contrôle d'empreinte de la section 3, en vrai, et c'est le dernier moment où une erreur est encore gratuite.

![Une main tient un boîtier noir à huit broches posé sur une feuille de papier imprimée, éclairée par-derrière. Le tracé du circuit apparaît par transparence : les pistes en blanc, les pastilles et leurs trous alignés. Les pattes du composant tombent exactement en face de la rangée de pastilles prévue pour lui.|560](/ressources/img/easyeda/verification-footprint-sur-impression.jpg)

Le composant est à sa taille réelle, le tirage aussi : si les pattes tombent en face, elles tomberont en face sur le cuivre. Si elles ne tombent pas, vous venez d'économiser une plaque.

### 21. Pourquoi vous travaillez en miroir depuis le début

Un point qui déconcerte, et qu'il vaut mieux avoir compris avant de souder.

Le cuivre est **sous** la carte ; les composants se posent **dessus**. Ce que vous regardez à l'écran depuis le début du TP est donc la face cuivre vue **à travers** la carte, c'est-à-dire en miroir par rapport à la face où vous poserez les pièces.

C'est pour ça que l'atelier retourne le dessin avant de graver : une fois la carte sortie de la machine, elle est dans le bon sens pour être soudée. Vous n'avez rien à faire — juste à le savoir, pour ne pas être surpris en découvrant que votre carte semble « à l'envers ».

![Deux photos. À gauche, une carte de cuivre nu vue de dessous pendant la soudure : la panne d'un fer chauffe une pastille tandis qu'un fil d'étain arrive dessus, au milieu d'un réseau de pistes cuivrées et de trous alignés. À droite, une carte terminée vue de dessus : sur le côté composants, on ne voit aucune piste, seulement un gros circuit intégré à quarante broches, des résistances, des condensateurs, des LED rouges et un quartz posés sur la face nue de la plaque.|640](/ressources/img/easyeda/soudure-cote-cuivre-et-exemple-pcb-termine.jpg)

Les soudures se font donc **du côté du cuivre**, et une fois la carte retournée, plus aucune piste n'est visible : elles sont toutes dessous.

## Échanger un projet

Votre carte est finie. Reste à la faire sortir du logiciel.

En mode hors ligne, **tout vit dans un dossier sur votre machine** : rien n'est sauvegardé ailleurs, rien ne se partage tout seul. Le même geste sert donc trois usages — **rendre** votre travail, **le passer** à un binôme, et **le sauvegarder** avant de faire une bêtise.

*Fichiers → Exporter → EasyEDA*, qui produit un fichier `.json`.

![Menu Fichiers d'EasyEDA déroulé, entrée Exporter sélectionnée, ouvrant une cascade qui propose PDF, PNG, SVG, DXF, Modèle 3D, Altium Designer, EasyEDA, Routage automatique du fichier et Source SVG. L'entrée EasyEDA est en surbrillance.|560](/ressources/img/easyeda/derniere-etape-export-json.png)

Ce `.json` est autonome : il embarque **les symboles et les empreintes** de vos composants, y compris ceux venus de *Contributions des utilisateurs*. Celui qui l'ouvre n'a donc rien à télécharger, même s'il n'a jamais vu ces références.

> [!note]
> **Ce n'est pas un Gerber.** Le format d'échange standard de l'industrie, c'est le Gerber — et vous le trouverez d'ailleurs dans le même menu. Mais l'atelier de l'école travaille à partir du `.json` EasyEDA, alors c'est celui-là qu'on transmet. Voir [[pcb|le hub circuit imprimé]] pour le vocabulaire général de la fabrication.

Joignez-y **votre schéma**, sans quoi personne ne peut relire ce que la carte est censée faire.

> [!tip]
> **Exportez avant chaque grosse modification.** Le mode hors ligne n'a pas d'historique : si vous cassez votre carte en voulant l'améliorer, il n'y a pas de bouton pour revenir en arrière une fois le logiciel refermé. Un `.json` daté dans un coin de votre disque, c'est la seule sauvegarde dont vous disposiez.

## Et après

Vous avez mené une carte du premier trait de schéma au fichier de fabrication. Ce qui reste à faire ne se passe plus devant un écran : la plaque sort de la fraiseuse, vous soudez vos composants, vous branchez le bornier — et la LED clignote, ou pas.

Si elle ne clignote pas, la faute n'est presque jamais dans la carte : elle est dans une soudure froide, une LED montée à l'envers, ou une valeur de résistance qui n'est pas celle que vous croyiez. La carte, elle, a déjà été vérifiée trois fois — au DRC, au tirage papier, et par l'atelier.

## Voir aussi

- [[pcb|Circuit imprimé]] — le hub : vocabulaire, flux général, et le choix d'un outil de conception
- [[kicad|KiCad]] — l'autre outil du parcours, orienté fabrication externe
- [[lire-une-datasheet|Lire une fiche technique]] — pour vérifier les cotes d'une empreinte
- [[analyse-de-schema-electronique|Analyser un schéma électronique]] — conventions de lecture et de placement
- [[simulation-electronique|Simulation électronique]] — éprouver un montage avant de le router
- [[soudure|Soudure]] — la suite, une fois la carte gravée

## Pièges

> [!failure]- Ma carte est gravée, mais je n'arrive pas à souder un composant
> Vérifiez son empreinte : elle n'a probablement **pas de trous**. Vous avez choisi une référence CMS, montée en surface, et l'atelier ne dispose pas de quoi la souder.
>
> Il n'y a pas de rattrapage propre à ce stade. Reprenez le schéma, remplacez la référence par un équivalent traversant — empreinte en `TH` ou `DIP`, pastilles percées à l'aperçu — et refaites la carte.
>
> C'est la deuxième source d'erreur la plus fréquente sur ce TP, juste après le mode en ligne. Elle se prévient en deux secondes au moment de choisir le composant, et coûte une plaque de cuivre quand on l'oublie.

> [!failure]- Il me manque une classe entière dans la recherche de composants
> Vous êtes repassé en mode connecté sans le voir. Le logiciel ne prévient pas : il vous laisse travailler, et le manque n'apparaît que plus tard, au moment de chercher un composant — *Contributions des utilisateurs* a disparu de la ligne des classes.
>
> **Regardez la barre de titre**, en haut à gauche : la mention `Projects Offline mode` doit y figurer. Si elle n'y est pas, repassez par *Réglages → Desktop Edition Setting… → Run Mode Setting…*, choisissez `Project Offline Mode`, `Apply`, et redémarrez le logiciel.
