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

**EasyEDA** est une suite de conception de circuits imprimés (EDA) qui couvre tout le flux dans une seule fenêtre : saisie du schéma, association des empreintes, routage des pistes, contrôles automatiques et export des fichiers de fabrication. C'est l'outil employé à l'école, et cette fiche décrit le parcours complet **jusqu'à la carte gravée sur la fraiseuse du labo** — donc avec ses contraintes à elle, qui ne sont pas celles d'un fabricant extérieur. Elle est un tuto-outil du hub [[pcb|circuit imprimé]], qui porte le flux général ; on apprend ici les **gestes**, dans l'ordre où on les fait : **installer**, puis **construire** une carte de bout en bout, puis **échanger** son travail. À suivre l'écran sous les yeux.

> [!note]
> **L'interface est à moitié traduite.** Les menus principaux sont en français (*Fichiers*, *Placer*, *Format*) mais beaucoup d'entrées restent en anglais (*Design*, *Check DRC*, *Copper Area*, *run mode setting*), parfois dans le même menu. Les chemins sont donc cités **tels qu'ils s'affichent**, mélange compris : c'est ce que vous aurez sous les yeux, et c'est aussi ce que vous retrouverez dans la documentation de l'éditeur, qui est en anglais.

## À quoi ça sert ?

On l'ouvre pour mener une carte du schéma à la gravure :

- **saisir un schéma** et le rendre lisible, en nommant les liaisons plutôt qu'en tirant des fils d'un bout à l'autre de la feuille ;
- **associer une empreinte** à chaque composant — et, quand elle n'existe pas, la dessiner ;
- **placer et router** la carte, sous les règles de la machine qui la gravera ;
- **vérifier** automatiquement le routage avant de graver quoi que ce soit ;
- **produire le fichier** que l'atelier consommera.

Sa particularité tient en une phrase : **le composant qu'on place porte déjà son empreinte**. Là où [[kicad|KiCad]] demande d'associer, à chaque composant du schéma, l'empreinte physique correspondante — étape 2 du flux, et l'erreur la plus coûteuse du hub —, EasyEDA propose des catalogues où le symbole et l'empreinte voyagent ensemble. Une classe entière d'erreurs disparaît. En échange, on dépend de ce que les catalogues contiennent, et le composant qui n'y est pas demande plus de travail qu'ailleurs. C'est un troc, pas un avantage net, et savoir de quel côté on est tombé fait partie du métier.

Contrepartie de périmètre : EasyEDA embarque un simulateur, dont cette fiche ne parle pas. Pour éprouver un montage avant de le router, on reste sur [[falstad|Falstad]] et [[ltspice|LTspice]], qui font ça mieux et que le hub [[simulation-electronique|simulation électronique]] documente.

## Installer, et choisir son mode

C'est la marche la plus courte de la fiche, et **celle sur laquelle le plus d'étudiants tombent**. Pas parce qu'elle est difficile : parce que l'erreur ne se voit pas au moment où on la commet.

### 1. Récupérer le client de bureau

EasyEDA existe en version navigateur et en **client de bureau**. C'est le client qu'il vous faut : lui seul sait travailler sans connexion.

Prendre capture d'écran de *la page de téléchargement d'EasyEDA, montrant l'entrée du client de bureau au milieu des autres versions proposées*.

### 2. Les deux modes, et ce qui les sépare

Une fois installé, le logiciel tourne dans l'un de **deux modes**, et ils ne donnent pas accès aux mêmes choses.

![Comparaison des deux modes d'EasyEDA. À gauche le mode hors ligne : aucun compte demandé, projets dans un dossier local, recherche de composants complète avec les bibliothèques du système et User Contributed. À droite le mode en ligne : connexion exigée, projets dans l'espace en ligne, et la classe User Contributed absente de la recherche de composants. Au centre, deux flèches marquent les moments où l'on bascule sans le vouloir : le choix fait à l'installation, et l'entrée Mettre à jour le PCB. En pied, la barre de titre où le mode est écrit.|640](/ressources/img/easyeda/modes.svg)

Le mode à choisir est **`Projects Offline mode`**. Il ne demande aucun compte, garde vos projets dans un dossier sur la machine — et, contre toute attente, c'est **lui** qui donne accès à la bibliothèque *User Contributed*, celle qu'alimentent les autres utilisateurs. En mode en ligne, il faut se connecter, et **la classe *User Contributed* n'apparaît plus** dans la fenêtre de recherche de composants.

Prendre capture d'écran de *l'écran de choix du mode au premier lancement du client, avec l'entrée « Projects Offline mode » sélectionnée*.

> [!warning]
> **Le mode en ligne ne dit rien.** Aucun message, aucun avertissement : vous travaillez, et tout se passe apparemment bien. Le manque n'apparaît que trois étapes plus loin, au moment de chercher un composant — la classe *User Contributed* a disparu de la fenêtre de recherche, et rien ne relie ce symptôme à un choix fait vingt minutes plus tôt. C'est ce décalage qui rend l'erreur coûteuse, pas sa gravité.

### 3. L'auto-test : lire la barre de titre

Il n'y a pas besoin d'ouvrir quoi que ce soit pour savoir où vous en êtes. **Le mode est écrit dans la barre de titre**, en haut à gauche de la fenêtre, à la suite du nom du logiciel.

Prendre capture d'écran de *la barre de titre de la fenêtre EasyEDA, où se lit la mention « Projects Offline mode » à la suite du nom du logiciel*.

Prenez le réflexe d'y jeter un œil en ouvrant le logiciel, et de nouveau chaque fois qu'un comportement vous surprend. C'est une vérification de deux secondes qui évite une séance perdue.

### 4. Revenir en hors ligne sans réinstaller

Si la barre de titre vous dit que vous êtes en ligne, rien n'est perdu : le mode se change à tout moment, sans toucher à l'installation.

![Séquence en cinq étapes pour rebasculer en mode hors ligne. Étape 1, lire la barre de titre : sans la mention Projects Offline mode, on travaille en ligne. Étape 2, ouvrir le menu Réglages. Étape 3, Desktop edition setting. Étape 4, run mode setting, qui ouvre une nouvelle fenêtre. Étape 5, sélectionner Projects Offline mode puis cliquer sur Apply. En pied, la barre de titre est ce qui confirme que le changement a pris.|560](/ressources/img/easyeda/revenir-hors-ligne.svg)

> [!tip]
> **Rien ne confirme le changement à part la barre de titre.** Pas de message, pas de redémarrage annoncé. Après *Apply*, relisez le bandeau : c'est la seule confirmation que vous aurez.

Un dernier avertissement, dont vous comprendrez la raison au moment de convertir votre schéma en carte : **le logiciel vous proposera lui-même de repasser en ligne**, à un endroit où ça semblera parfaitement légitime. Vous saurez alors qu'il faut refuser.

## Construire la carte

On monte une carte complète, de la feuille blanche au fichier remis à l'atelier : un **astable à NE555** qui fait clignoter une LED. Le circuit est choisi pour ce qu'il coûte à router, pas pour ce qu'il fait — six composants, tous **traversants**, et un résultat qu'on voit clignoter une fois la carte soudée. Comprendre la théorie de l'astable n'est pas nécessaire pour suivre : ici, le sujet est la carte.

### 1. Le projet, la feuille et le cartouche

*Fichiers → Nouveau → Projet*. La cascade qui s'ouvre contient aussi les entrées *Schéma*, *Circuit* et *Empreinte* — retenez leur emplacement, on reviendra chercher la dernière.

Prendre capture d'écran du *menu Fichiers déroulé sur Nouveau, avec la cascade ouverte montrant les entrées Projet, Schéma, Circuit et Empreinte*.

Donnez un nom à votre projet et **laissez le dossier sur `Offline Project`**. C'est le second endroit où le mode se joue : un projet créé ailleurs part dans l'espace en ligne, avec les conséquences décrites plus haut.

Prendre capture d'écran du *dialogue de création de projet, sélecteur Folder déployé et posé sur Offline Project*.

Le projet contient une feuille, `Sheet_1` : c'est là que le schéma se dessine. À l'ouverture, un **cadre rouge** délimite l'espace de travail, avec ses repères de zone — chiffres en haut et en bas, lettres sur les côtés, pour désigner un endroit du schéma à l'oral (« en B3 »). Dans son coin **en bas à droite** se loge le **cartouche**, ou *title block*.

![Cartouche d'une feuille de schéma EasyEDA, en bas à droite du cadre : champ TITLE renseigné à Sheet_1, champ REV à 1.0, champ Company à Your Company, champ Sheet à 1 sur 1, un champ Date et un champ Drawn By laissé vide.|480](/ressources/img/easyeda/cartouche.png)

On ne le remplira pas ici, mais il faut savoir ce qu'il est : en bureau d'études, le cartouche assure la **traçabilité** du document. Il porte le titre, le nom du concepteur (*Drawn By*), la date et l'**indice de révision** (*REV*) — sans quoi personne ne sait, trois semaines plus tard, quelle version du schéma il a sous les yeux. C'est la même exigence que sur toute pièce versée à un [[dossier-technique|dossier technique]]. Notez que les champs arrivent **pré-remplis de valeurs de démonstration** — *Your Company*, une date qui n'est pas celle du jour : un cartouche non touché ment, il ne se contente pas d'être vide.

> [!tip]
> **Gardez les conventions de placement de vos cours d'électronique.** Les entrées à gauche de la feuille, les sorties à droite, les alimentations positives en haut, les masses en bas, et les composants utiles au centre. Ce n'est pas de l'esthétique : un schéma qui respecte ces conventions se lit sans effort par quelqu'un qui ne l'a pas dessiné — votre binôme, votre encadrant, ou vous-même après les vacances. Voir [[analyse-de-schema-electronique|analyser un schéma électronique]].

### 2. Chercher un composant, et lire ce qu'on trouve

*Placer → Symbole*, ou le raccourci `Shift+F`, ouvre la fenêtre de recherche. Tapez le nom du composant — il faut **au moins trois caractères** pour que la recherche parte.

![Fenêtre de recherche de composants d'EasyEDA sur le terme NE555. Une ligne Types propose Symbol, Empreinte, Symbole Spice, SCH Module, Module PCB et 3D Model. En dessous, la ligne Classes affiche LCSC entre parenthèses trente, JLPCB Assembled vingt-trois, System sept et User Contributed neuf cent quatre-vingt-dix-neuf ou plus. La liste centrale donne les références avec leur empreinte associée et le nom du contributeur ; la ligne sélectionnée est NE555-LA. Le panneau de droite montre l'aperçu du symbole en haut, avec ses huit broches nommées, et celui de l'empreinte en dessous, avec ses huit pastilles.|640](/ressources/img/easyeda/recherche-ne555.png)

Une première ligne, *Types*, choisit **ce qu'on cherche** : un *Symbol*, une *Empreinte*, un modèle 3D. On reste sur *Symbol* — c'est le symbole qui se pose sur le schéma, l'empreinte venant avec lui.

La ligne suivante organise les résultats en **classes**, chacune avec son nombre de résultats, et elles ne se valent pas :

- *LCSC* et *JLCPCB Assembled* sont tenues par des professionnels. Ce qu'on y trouve est fiable et complet ;
- *System* rassemble les composants génériques fournis avec le logiciel ;
- *User Contributed* est alimentée par les autres utilisateurs. C'est de très loin la plus fournie — sur `NE555`, elle affiche **999+** quand les trois autres réunies en donnent **soixante** — et c'est aussi un fourre-tout : on y trouve du solide et du bâclé, du complet et de l'incomplet.

C'est pourtant là que vous finirez souvent par chercher, faute de trouver ailleurs. D'où le réflexe à prendre à chaque fois : **vérifier dans le panneau de droite que la référence a bien un symbole *et* une empreinte**. L'aperçu du symbole s'affiche en haut, celui de l'empreinte en dessous. Une référence sans empreinte se place sur le schéma sans broncher, et bloque tout au moment de passer à la carte.

> [!warning]
> **Un composant sans empreinte ne se voit pas au schéma.** Il s'y place normalement, se câble normalement, et la faute n'apparaît qu'à la conversion en carte, quand il manque une empreinte là où les autres en ont une. Le contrôle coûte un coup d'œil au moment où vous sélectionnez la référence — c'est cent fois moins cher que de le découvrir après.

La colonne **`Stock`** de la liste dit combien d'exemplaires de la référence sont disponibles chez le distributeur. Ce n'est pas un détail commercial : une référence à zéro est une référence qu'on ne pourra pas se procurer, et **la disponibilité est un critère de conception** au même titre que les caractéristiques électriques. Un montage conçu autour d'un composant introuvable est un montage à refaire.

> [!tip]
> **Pour les composants passifs, cherchez dans *LCSC* et servez-vous de l'arborescence.** Le panneau de gauche classe les résistances, condensateurs, connecteurs et le reste par famille et par technologie. C'est plus rapide que de deviner un nom de référence, et ça montre au passage la variété de ce qui existe sous un même mot.
