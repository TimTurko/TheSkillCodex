---
title: PCB — circuit imprimé
type: notion
tags:
  - eee
  - notion
prerequis:
  - analyse-de-schema-electronique
aa:
  - RA-PROJET-C03-3/EEE/5
phases:
  - preuve-de-concept
  - dossier-technique
draft: false
---

**Un circuit imprimé** (PCB, *printed circuit board*) est le support qui remplace le câblage volant : une plaque isolante sur laquelle des **pistes de cuivre** relient des composants soudés à demeure. Concevoir un PCB, c'est transformer un [[analyse-de-schema-electronique|schéma]] fonctionnel en une **carte physique fabricable** — fiable, compacte et reproductible. Cette fiche est le **hub d'entrée** vers la conception de carte : elle pose le **flux** commun (du schéma aux fichiers de fabrication) et oriente vers l'outil de conception. La **fabrication** elle-même (gravure, perçage, métallisation) relève de l'atelier et du cours dédié — le wiki la pointe sans l'approfondir.

## À quoi ça sert ?

Une *breadboard* (plaque d'essai) ou une plaque à pastilles suffisent pour prototyper, mais montrent vite leurs limites : contacts intermittents, encombrement, montage non reproductible, parasites sur les signaux rapides. Passer au PCB apporte :

- **fiabilité** — des liaisons soudées, pas des fils qui se débranchent ;
- **compacité** — un montage dense, intégrable dans un boîtier ;
- **reproductibilité** — la même carte, à l'identique, autant de fois que voulu ;
- **qualité des signaux** — pistes maîtrisées, plan de masse, indispensable au-delà de quelques kHz ;
- **production** — la seule voie réaliste pour fabriquer plusieurs exemplaires.

On conçoit un PCB **une fois le prototype validé** sur breadboard et en [[simulation-electronique|simulation]] : la carte fige une solution éprouvée, elle ne sert pas à expérimenter.

## Du schéma à la carte : le flux

Quel que soit l'outil, la conception suit le même enchaînement.

1. **Saisir le schéma** — placer les composants et leurs liaisons logiques (*schematic capture*), comme un [[analyse-de-schema-electronique|schéma]] propre, puis le soumettre au **contrôle des règles électriques** (*ERC*, Electrical Rules Check), qui repère broches oubliées et incohérences avant d'aller plus loin.
2. **Associer les empreintes** (*footprints*) — à chaque composant du schéma correspond une **empreinte** physique (la forme des pastilles et le pas réels du boîtier). Une empreinte fausse = un composant qui ne rentre pas.
3. **Placer les composants** sur la surface de la carte — regrouper par fonction, soigner l'ergonomie (connecteurs en bord de carte, dissipation).
4. **Router les pistes** — tracer le cuivre qui réalise les liaisons du schéma, manuellement ou avec l'aide d'un routeur automatique.
5. **Vérifier les règles de conception** (*DRC*) — largeur de piste, isolation minimale, pastilles : un contrôle automatique attrape les erreurs avant la fabrication.
6. **Générer les fichiers de fabrication** — les **Gerber** (couches de cuivre, sérigraphie, masque) et le fichier de **perçage**, qui décrivent la carte au fabricant.
7. **Fabriquer** — gravure et perçage en atelier, ou commande chez un fabricant. *Cette étape sort du périmètre du wiki (voir le cours/atelier de fabrication).*

![Le flux de conception d'une carte : schéma, empreintes, placement, routage, DRC, Gerber, puis la fabrication (atelier, hors wiki), séparée par la frontière des fichiers Gerber.|640](/ressources/img/pcb/flux.svg)

## Mono, double ou multicouche

Le nombre de **couches de cuivre** dépend de la densité et des signaux.

- **Simple face (1 couche)** — la plus simple à fabriquer, suffisante pour un montage peu dense ; routage parfois acrobatique (ponts).
- **Double face (2 couches)** — le standard d'un projet étudiant : deux plans de routage, possibilité d'un plan de masse, bon compromis.
- **Multicouche (4 couches et plus)** — pour la haute densité et les signaux rapides (couches de masse et d'alimentation internes) ; rarement nécessaire à l'échelle d'un projet école.

## Choisir un outil

Un logiciel d'EDA (*Electronic Design Automation*) couvre tout le flux, de la saisie du schéma à l'export Gerber.

| Outil | Particularité | Cas d'usage |
| --- | --- | --- |
| [[kicad\|KiCad]] | libre, gratuit, complet, multiplateforme, standard | conception de carte sérieuse, projet et au-delà |
| [[easyeda\|EasyEDA]] | l'empreinte arrive avec le composant, mode hors ligne | l'outil de l'école, jusqu'à la gravure au labo |

Pour un projet destiné à un fabricant extérieur, [[kicad|KiCad]] est le choix par défaut : libre, sans limite, et largement documenté. Pour une carte gravée à l'école, c'est [[easyeda|EasyEDA]] qui est utilisé, et sa fiche va jusqu'au fichier remis à l'atelier.

> [!note]
> **Concevoir n'est pas fabriquer.** Le wiki couvre la **conception**, du schéma jusqu'aux fichiers remis à celui qui grave. La **fabrication** physique de la carte (gravure du cuivre, perçage, métallisation des trous, sérigraphie) relève de l'atelier et du cours de fabrication. La frontière est le **fichier de fabrication** : ce que produit le concepteur, ce que consomme le fabricant. Son format dépend de qui fabrique. Chez un fabricant extérieur, ce sont les **Gerber**. À l'école, l'atelier travaille à partir d'un **`.json` EasyEDA** accompagné du schéma (voir [[easyeda|EasyEDA]]).

## Pièges

**Router avant d'avoir figé le schéma.** Toute modification du schéma après routage oblige à reprendre les pistes. On ne route qu'un schéma vérifié (ERC).

**Empreinte fausse.** Associer la mauvaise empreinte (mauvais boîtier, mauvais pas) donne une carte où le composant réel ne se soude pas. Vérifier chaque empreinte contre la [[lire-une-datasheet|datasheet]] du composant.

**Oublier le plan de masse.** Une masse routée en fil fin, partagée maladroitement, génère du bruit et des références flottantes. Un plan de masse (surface de cuivre dédiée) stabilise les signaux.

**Sous-dimensionner une piste de puissance.** Une piste trop fine pour le courant qu'elle transporte chauffe, voire fond. Les pistes d'alimentation et de puissance sont plus larges (voir les abaques de largeur de piste).

**Commander sans relire le rendu.** Un visualiseur de Gerber montre la carte telle qu'elle sera gravée. Une dernière relecture évite d'engager toute une série de cartes fausses. À l'école, le même contrôle se fait en imprimant la carte à l'échelle 1:1 et en posant les composants dessus.

## Raccrochage projet

- **Phase de [[preuve-de-concept|preuve de concept]]** — on **valide d'abord** le montage sur breadboard et en [[simulation-electronique|simulation]] ; le PCB vient *après*, pour figer la solution retenue.
- **Phase de [[dossier-technique|dossier technique]]** — la conception de la carte (RA-PROJET-C03-3/EEE/5) y prend place : c'est ici qu'on **conçoit et réalise** la carte qui intègre [[microcontroleur|microcontrôleur]], capteurs et actionneurs (voir [[chaine-energie|chaîne d'énergie et d'information]]).
- **Interface fabrication** — le fichier de fabrication est le livrable transmis à l'atelier ou au fabricant, frontière avec le cours de fabrication. Gerber chez un fabricant extérieur, `.json` et schéma à l'atelier de l'école.

## Voir aussi

- [[kicad|KiCad]] — l'outil libre pour concevoir une carte (tuto outil)
- [[easyeda|EasyEDA]] — l'outil de l'école, du schéma jusqu'à la carte gravée au labo (tuto outil)
- [[analyse-de-schema-electronique|Analyser un schéma électronique]] — le schéma qu'on saisit avant de router (prérequis)
- [[simulation-electronique|Simulation électronique]] — valider le montage avant de tracer la carte
- [[lire-une-datasheet|Lire une datasheet]] — d'où viennent empreintes et contraintes des composants
- [[microcontroleur|Microcontrôleur]] — souvent le cœur de la carte conçue
- [[chaine-energie|Chaîne d'énergie et d'information]] — ce que la carte réalise physiquement
- [[dossier-technique|Dossier technique]] — où la conception de la carte est consignée
