---
title: Faire communiquer
type: trame
tags:
  - eee
  - trame
  - realisation
prerequis:
  - choisir-le-materiel
aa: []
draft: false
---

**Faire communiquer**, c'est la cinquième étape de la [[fiches/eee/index|réalisation du sous-système embarqué]]. Dès que plusieurs composants doivent échanger des données — entre puces d'une même carte, ou vers l'extérieur (un PC, un réseau, un opérateur) — il faut **choisir comment ils dialoguent** : un bus filaire à l'intérieur, une liaison sans fil ou câblée vers le dehors. Le livrable est un **choix de technologies de communication** justifié et testé.

Cette étape est **optionnelle selon le projet**. Un sous-système bâti autour d'un seul microcontrôleur, dont tous les capteurs et actionneurs sont reliés en direct (entrées-sorties, voies analogiques, signaux PWM), n'a pas de bus interne à choisir : il lui reste seulement, parfois, une liaison vers l'extérieur. Recense d'abord les échanges (étape 1) ; si elle ne révèle aucun échange entre puces ni besoin de liaison externe, l'étape se réduit à presque rien.

## Posture attendue

La tentation est d'ajouter de la communication parce qu'elle est disponible : un bus parce que la carte en a un, du Wi-Fi parce que la puce le propose. Chaque liaison a pourtant un coût — des fils, du code, de la consommation, des sources de panne. Ne retiens un bus ou une liaison que si un **échange réel** le demande, et choisis-le sur des critères concrets : nombre de participants, débit, distance, direction. Le plus simple qui suffit est le bon.

## Objectif de l'étape

Produire un **choix de communication** justifié qui :

- recense tous les **échanges** nécessaires, internes et externes ;
- retient, pour les échanges entre puces, le **bus** adapté (ou aucun, si tout est en direct) ;
- retient, pour le lien vers l'extérieur, une **liaison** filaire ou sans fil adaptée ;
- est **testé** au moins sur une liaison de bout en bout.

## Démarche

### 1. Recenser les échanges

Avant de choisir une technologie, liste **qui doit parler à qui**. Distingue les échanges **internes** (entre la carte et une puce périphérique : capteur sur bus, afficheur, mémoire) des échanges **externes** (vers un PC, un téléphone, un autre système, un réseau). Pour chacun, note la **donnée** échangée, le **débit** nécessaire, la **distance** et le nombre de **participants**. C'est cette carte des échanges qui dira de quels bus et de quelle liaison tu as réellement besoin — et, souvent, que tu en as moins que prévu.

> [!example] Exemple : projet bras 3 axes
> Recensement des échanges du bras : les trois capteurs d'angle sont **analogiques** (lus en direct par le convertisseur, pas de bus), les trois drivers reçoivent des signaux **PWM et logiques** en direct, les fins de course sont des **entrées logiques**. Aucun échange entre puces : il n'y a donc **pas de bus interne** à choisir. Reste un seul échange : recevoir les consignes de l'opérateur et lui renvoyer l'état.
>
> **Sortie** : zéro bus interne, une liaison externe (opérateur). Pour ce projet, l'étape se concentre sur cette unique liaison — illustration directe du caractère optionnel des bus.

> [!livrable] Livrable 1/3 — Carte des échanges
> - La liste des échanges internes et externes, avec donnée, débit, distance et nombre de participants

### 2. Choisir les bus internes

Pour chaque échange **entre puces**, choisis le bus selon les critères recensés. L'**[[i2c|I²C]]** relie plusieurs composants avec deux fils, à débit modéré — idéal pour quelques capteurs et un afficheur. Le **[[spi|SPI]]** est plus rapide mais demande plus de fils — pour une mémoire ou un écran exigeant. L'**[[uart|UART]]** est une liaison série simple, point à point. La fiche [[bus-de-communication|bus de communication]] détaille leurs principes et leurs limites. S'il n'y a aucun échange entre puces, cette étape est vide — c'est un résultat valable, pas un oubli.

> [!warning] Attention
> **Multiplier les bus ou en choisir un par réflexe complique le système sans le servir.** Un bus se justifie par un échange réel et par ses critères (participants, débit, distance) — pas par sa présence sur la carte. Trois capteurs analogiques lus en direct n'ont pas besoin d'un bus ; un afficheur ajouté plus tard ira, lui, naturellement sur l'I²C déjà disponible.

> [!example] Exemple : projet bras 3 axes
> Le bras n'a aucun échange entre puces : pas de bus interne. À titre de contre-exemple, si tu lui ajoutais un **afficheur d'état** et un capteur de couple numérique, tous deux iraient sur un même bus **I²C** (deux fils partagés, débit suffisant) plutôt que de câbler chacun séparément.
>
> **Sortie** : aucun bus interne pour le bras tel quel ; l'I²C serait le choix par défaut en cas d'ajout de composants numériques.

> [!livrable] Livrable 2/3 — Bus internes retenus
> - Pour chaque échange entre puces, le bus retenu et sa justification (ou la mention explicite « aucun bus nécessaire »)

### 3. Choisir la liaison externe

Pour le lien vers l'extérieur — un PC opérateur, un téléphone, un réseau — choisis entre **filaire** et **sans fil**. Le filaire (USB-série) est simple, fiable et alimente parfois la carte, mais attache le système. Le sans-fil ouvre la mobilité : **[[wifi|Wi-Fi]]** pour un débit élevé et un réseau existant, **[[ble|BLE]]** pour de petits échanges économes, **[[zigbee|Zigbee]]** pour un maillage de capteurs, **[[lora|LoRa]]** pour la longue portée à très bas débit. La fiche [[techno-sans-fil|technologies sans fil]] aide à arbitrer. Garde à l'esprit qu'une liaison de **console série** (USB) reste presque toujours utile pour le débogage, quelle que soit la liaison opérateur retenue.

> [!tip] Astuce
> **Le sans-fil est séduisant, mais il a un coût : consommation, fiabilité, sécurité.** Si le système reste à portée de câble pendant son usage, une liaison filaire est souvent plus sûre et plus simple. Réserve le sans-fil aux cas où la mobilité ou la distance le justifient vraiment.

> [!example] Exemple : projet bras 3 axes
> L'opérateur doit pouvoir piloter le bras à distance : la liaison retenue est le **Wi-Fi** (intégré à l'ESP32, débit largement suffisant pour des consignes et un retour d'état). En parallèle, la **console USB-série** reste branchée en phase de mise au point, pour observer le firmware.
>
> **Sortie** : une liaison opérateur en Wi-Fi, une console série de débogage. C'est l'unique « communication » réelle du bras.

> [!livrable] Livrable 3/3 — Liaison externe retenue
> - La technologie retenue pour le lien externe (filaire ou sans fil), justifiée, et la liaison de débogage conservée

## Conclusion

Tes communications sont arrêtées : les échanges sont recensés, les bus internes choisis (ou écartés à raison), la liaison externe retenue et testée. La suite consiste à **fiabiliser** l'ensemble à l'[[fiabiliser-et-deboguer|étape 6]]. Les choix de communication sont versés au [[dossier-technique|dossier technique]] du cycle en V.

---

## Pièges fréquents

**Ajouter de la communication parce qu'elle est disponible.** Un bus ou une liaison se justifie par un échange réel, pas par sa présence sur la carte. Le plus simple qui suffit est le bon.

**Choisir le sans-fil par réflexe.** Quand un câble suffit pendant l'usage, le filaire est plus simple, plus fiable et souvent plus sûr. Le sans-fil se justifie par la mobilité ou la distance.

**Ignorer le nombre de participants, le débit et la distance.** Ces trois critères décident du bus. Les sauter, c'est choisir au hasard entre I²C, SPI et UART.

**Oublier la liaison de console.** Une liaison série de débogage reste presque toujours utile en mise au point, même quand la liaison opérateur est sans fil.

**Négliger la robustesse d'une liaison sans fil.** Une liaison radio se perd, se brouille, s'écoute. Un système qui en dépend doit prévoir la perte de lien et, si les données sont sensibles, leur protection.

## Ce qui relève d'ailleurs

**Le pilotage, c'est le cycle en V.** Les choix de communication figurent au [[dossier-technique|dossier technique]] — cette fiche produit l'artefact, le V l'inscrit dans le projet.

*La sécurité des liaisons* (chiffrement, intégrité, authentification), dès que les données échangées sont sensibles, est une dimension de [[securite-et-qualite|sécurité et qualité]] arbitrée au niveau projet.

## Voir aussi

- [[fiches/eee/index|Réalisation du sous-système embarqué]]
- Étape précédente : [[programmer-l-embarque|Programmer]]
- Étape suivante : [[fiabiliser-et-deboguer|Fiabiliser et déboguer]]
- [[bus-de-communication|Bus de communication]] — [[uart|UART]], [[i2c|I²C]], [[spi|SPI]]
- [[techno-sans-fil|Technologies sans fil]] — [[wifi|Wi-Fi]], [[ble|BLE]], [[zigbee|Zigbee]], [[lora|LoRa]]
- [[dossier-technique|Dossier technique]] *(pilotage, cycle en V)*
- [[securite-et-qualite|Sécurité et qualité]] *(fil transverse)*
