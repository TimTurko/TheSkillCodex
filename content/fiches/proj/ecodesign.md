---
title: Écodesign
type: notion
phases:
  - specification
tags:
  - proj
  - notion
  - ecoconception
prerequis: []
aa:
  - RA-PROJET-C04-4/PROJ/5
draft: false
---

L'**écodesign** (ou *éco-design*) est l'approche qui intègre l'enjeu environnemental dans la **démarche de design** d'un produit — sa forme, ses usages, son expérience, sa durabilité perçue. Il se distingue de l'**[[ecoconception|écoconception]]**, démarche d'**ingénierie** quantifiée et centrée cycle de vie : là où l'écoconception *mesure et réduit* l'impact par des choix techniques, l'écodesign *oriente la conception* par le regard du designer. Les deux sont **complémentaires**, pas concurrents.

## À quoi ça sert ?

Différencier les deux n'est pas un exercice de vocabulaire pour soutenance — c'est savoir **quel levier on actionne** quand on cherche à rendre un produit plus responsable. Les confondre conduit à croire qu'on a couvert l'enjeu environnemental alors qu'on n'en a traité qu'une moitié.

Le point clé est leur **complémentarité** :

- Une [[ecoconception|écoconception]] sans écodesign produit un système techniquement sobre mais que personne n'a envie de garder, de réparer ou de démonter — la réparabilité existe sur le papier, mais l'usage ne la mobilise jamais. L'impact réel n'est pas réduit.
- Un écodesign sans écoconception produit un objet *qui a l'air* responsable — formes douces, matériaux affichés « verts » — sans aucune réduction d'impact mesurée. C'est la porte ouverte au **greenwashing**.

Un produit réellement responsable mobilise les deux : la rigueur d'ingénierie qui chiffre et réduit, et le design d'usage qui fait que cette réduction est effectivement vécue par l'utilisateur.

## Comment les différencier ?

La distinction se lit sur quelques axes. Elle reste **poreuse** — les deux démarches se recouvrent en pratique — mais les centres de gravité sont nets.

| Axe | Écoconception | Écodesign |
| --- | --- | --- |
| **Discipline d'origine** | ingénierie, normalisation (ISO 14006) | design produit / industriel |
| **Question centrale** | quel est l'impact, comment le réduire ? | comment rendre l'objet désirable, durable, sobre à l'usage ? |
| **Périmètre** | cycle de vie complet, multicritère | forme, usage, expérience, comportement utilisateur |
| **Méthode** | quantifiée ([[acv-simplifiee\|ACV]], [[matrice-eco-criteres\|matrice éco-critères]], indicateurs) | qualitative et créative, orientée usage |
| **Livrables** | matrices, ACV, annexe d'arbitrages | concepts, maquettes, scénarios d'usage |
| **Dans ce wiki** | trame [[ecoconception\|écoconception]] (portée en propre) | déléguée en partie aux cours de design |

En projet [[mecatronique|mécatronique]] élec et info embarquée, l'**écoconception est le terrain porté en propre** : c'est elle que la trame dédiée détaille (sobriété énergétique, durée de vie composants, démontabilité [[pcb|PCB]], sobriété logicielle). L'**écodesign penche vers les disciplines voisines** (design, ergonomie, matériaux) ; le wiki en explique la logique et l'articulation, mais en délègue la pratique aux cours concernés.

## Exemple — Bras 3 axes pédagogique

Le même objet, regardé par les deux lentilles, sur un point commun : la **démontabilité**.

- **Par l'écoconception** (ingénierie) : connectique JST plutôt que soudures directes, carte modulaire, visserie standard — la démontabilité est *techniquement possible et chiffrable* (temps de démontage, nombre d'outils, taux de pièces récupérables).
- **Par l'écodesign** (design d'usage) : un carter dont la forme **invite** à l'ouverture, une signalétique de tri sérigraphiée sur les pièces, une préhension qui évite la casse au démontage — la démontabilité est *effectivement utilisée* parce que l'objet la rend évidente et désirable.

Les deux servent le même but. L'écoconception garantit que démonter le bras est *faisable* ; l'écodesign garantit que l'utilisateur *le fera* plutôt que de jeter l'ensemble. Une réparabilité technique que le design rend dissuasive (vis cachées, forme close) est une réparabilité morte.

## Pièges

**Croire que les deux s'opposent.** Ce ne sont pas deux écoles rivales mais deux leviers complémentaires. Le projet responsable les mobilise ensemble, chacun couvrant l'angle mort de l'autre.

**Réduire l'écodesign à « faire vert ou joli ».** Un objet aux formes organiques et aux couleurs naturelles n'est pas écodesigné s'il ne réduit aucun impact réel. Sans ancrage dans l'usage et la durabilité effective, c'est de l'habillage — la frontière exacte du greenwashing.

**Croire que l'écoconception technique suffit.** Un système optimisé en consommation et en réparabilité mais dont l'usage réel n'a pas été pensé (personne ne sait qu'il est réparable, ou ne veut le garder) rate son objectif environnemental. La sobriété technique ne se transforme en impact réduit que si l'usage suit.

**Empiéter sur le design en croyant le porter en interne.** L'écodesign relève de compétences (design produit, ergonomie, scénarios d'usage) que l'équipe élec/info ne maîtrise pas forcément. Le réflexe : citer l'enjeu, articuler avec les cours de design, ne pas improviser un argumentaire design non validé.

## Cas particulier — le faux ami anglais

Attention en lisant des sources anglophones : en anglais, **ecodesign traduit l'écoconception**, pas l'écodesign au sens français. La **directive européenne *Ecodesign*** est officiellement la *directive Écoconception* en français — elle porte sur l'efficacité énergétique et l'impact cycle de vie des produits, pur registre d'ingénierie. Le terme français *écodesign*, lui, garde sa connotation **design-discipline**. Un texte anglo-saxon qui parle d'*ecodesign* parle donc presque toujours de ce que ce wiki appelle écoconception — ne pas se laisser piéger par la ressemblance.

## Voir aussi

- [[ecoconception|Écoconception]] — la démarche d'ingénierie quantifiée, portée en propre par le wiki
- [[matrice-eco-criteres|Matrice éco-critères]] — outil d'évaluation environnementale de l'écoconception
- [[acv-simplifiee|ACV simplifiée]] — méthode quantifiée déléguée aux cours dédiés
- [[specification-technique|Spécification technique]] — phase où la distinction est posée, à l'intégration transversale du CdCF
