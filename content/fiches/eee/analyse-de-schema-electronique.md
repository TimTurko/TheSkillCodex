---
title: Analyser un schéma électronique
type: tuto
phases:
  - concept
  - preuve-de-concept
  - dossier-technique
tags:
  - eee
  - tuto
prerequis:
  - schema-bloc-fonctionnel
  - lire-une-datasheet
aa:
  - RA-PROJET-C03-3/EEE/1
  - RA-PROJET-C03-3/EEE/2
draft: false
---

**Analyser un schéma électronique**, c'est lire un schéma de principe pour comprendre *ce que fait le montage* : identifier ses fonctions, suivre le parcours des signaux et de l'énergie, et vérifier sa cohérence — avant de câbler, de déboguer ou de valider un choix. C'est une compétence de **lecture**, complémentaire du [[schema-bloc-fonctionnel|schéma bloc fonctionnel]] (qui dit *quelles fonctions*) et de la [[lire-une-datasheet|datasheet]] (qui détaille *chaque composant*).

![Anatomie d'un schéma : un bloc Alimentation en haut alimente un bloc MCU central, un bloc Capteur à gauche envoie une mesure en entrée, le MCU commande un bloc Actionneur à droite ; annotations rappelant que l'alimentation est en haut, la masse en bas, les entrées à gauche et les sorties à droite.](/ressources/img/analyse-de-schema-generique.svg)

## À quoi ça sert ?

En projet, on croise des schémas en permanence : la documentation d'un module, le *circuit d'application* d'une datasheet, le dessin d'un coéquipier. Savoir le lire permet de :

- **câbler un module correctement** plutôt que de copier broche à broche sans comprendre ;
- **déboguer** — quand rien ne fonctionne, le schéma dit où le courant *devrait* passer ;
- **valider une conception** avant de commander une carte ou des composants ;
- **exploiter une datasheet** — son circuit type est un schéma qu'il faut savoir décoder pour utiliser le composant.

Sans cette compétence, on raccorde des fils en espérant que ça marche, et le moindre problème devient indiagnosticable. Lire un schéma, c'est transformer un dessin en compréhension du fonctionnement.

## Méthode pas à pas

Une lecture efficace suit toujours le même ordre : on cadre l'alimentation, on découpe en fonctions, on identifie, on suit les signaux, on vérifie.

### 1. Repérer l'alimentation et la masse

Tout montage vit **entre deux potentiels** : l'alimentation (VCC, dessinée en haut par convention) et la masse (GND, en bas). Commencer par les localiser et **noter la tension** (3,3 V ? 5 V ? 12 V ?) : c'est le cadre dans lequel tout le reste se lit, et la première source d'incompatibilité (voir [[niveaux-de-tension|niveaux de tension]]).

### 2. Découper en blocs fonctionnels

Regrouper mentalement les composants par **fonction** : alimentation, traitement (le [[microcontroleur|MCU]]), entrées (capteurs), sorties (actionneurs). C'est le [[schema-bloc-fonctionnel|schéma bloc fonctionnel]] appliqué à un schéma réel — on retrouve les mêmes quatre fonctions, mais en composants concrets.

### 3. Identifier chaque composant

Chaque symbole est un composant avec une **référence** (R1, C2, U1, D1) et une **valeur** (10 kΩ, 100 nF). Reconnaître les symboles courants — résistance, condensateur, diode et [[del|LED]], transistor, circuit intégré. Pour un circuit intégré, le rôle de chaque broche se lit dans sa [[lire-une-datasheet|datasheet]].

### 4. Suivre les signaux : entrée → traitement → sortie

Suivre les fils. Par convention, l'information circule **de gauche à droite** : les entrées à gauche, les sorties à droite. On trace un signal depuis sa source (un capteur) jusqu'à sa destination (un actionneur), en passant par le traitement. Attention aux **labels de net** : deux fils portant le même nom sont reliés, même si aucun trait ne les joint sur le dessin.

### 5. Vérifier la cohérence

Quelques contrôles de bon sens closent l'analyse. Chaque entrée a-t-elle une source, chaque sortie une charge ? Pas de liaison directe VCC–GND (court-circuit) ? Les résistances de tirage (*pull-up* / *pull-down*) et de limitation sont-elles présentes ? Les condensateurs de découplage proches des circuits intégrés ? Les **tensions sont-elles compatibles** d'un bout à l'autre (voir [[niveaux-de-tension|niveaux de tension]]) ? Un schéma cohérent passe ces cinq questions.

## Exemple commenté

Appliquons la méthode à un petit montage : un capteur lu par un MCU qui pilote une LED.

![Schéma de principe : à gauche un pont diviseur R1 (10 kΩ) et R2 (capteur variable) dont le point milieu va à l'entrée A0 du MCU U1, alimenté entre +5 V et GND ; à droite la sortie D9 commande R3 (220 Ω) en série avec la LED D1 vers la masse.](/ressources/img/analyse-de-schema-exemple.svg)

1. **Alimentation.** Deux rails : `+5 V` en haut, `GND` en bas. Tout le montage travaille en 5 V.
2. **Blocs.** Trois fonctions se dessinent : un pont diviseur à gauche (entrée capteur), `U1` au centre (traitement), la LED à droite (sortie actionneur).
3. **Composants.** `R1` (10 kΩ, fixe) et `R2` (capteur, résistance variable) ; `U1`, le MCU ; `R3` (220 Ω) ; `D1`, la LED.
4. **Signaux.** Quand la résistance du capteur `R2` varie, la **tension du point milieu** change ; cette tension est lue par l'entrée analogique `A0` du MCU (une [[adc|conversion analogique-numérique]]). Le MCU décide (sa [[logigramme|logique]]) et active la sortie `D9`, qui commande la LED.
5. **Cohérence.** `R3` limite le courant dans `D1` (pas de court-circuit qui la grillerait), et le pont diviseur ramène la tension du capteur dans la plage admissible de `A0`. Le montage tient debout.

## Pièges

**Câbler sans comprendre.** Recopier un schéma broche à broche « parce que ça marche sur l'exemple » mène à des montages qu'on ne sait pas dépanner. Lire d'abord, câbler ensuite.

**Sauter l'étape alimentation.** Tant qu'on n'a pas repéré VCC et GND ni noté la tension, on lit le schéma sans cadre. C'est par là qu'on commence, pas par les composants exotiques.

**Confondre des symboles voisins.** Une résistance fixe et une variable, un condensateur polarisé et un non polarisé, une diode et une LED : des symboles proches, des rôles différents. Dans le doute, vérifier la référence et la datasheet.

**Ignorer les labels de net.** Sur un schéma un peu fourni, beaucoup de connexions passent par des noms de signaux plutôt que par des traits. Même nom = même nœud, même s'il n'y a pas de fil dessiné.

**Oublier les composants « invisibles ».** Résistance de limitation d'une LED, pull-up d'un bouton ou d'un bus [[i2c|I2C]], découplage d'un IC : leur absence est une faute, pas un détail.

**Confondre schéma et implantation.** Le schéma de principe décrit les **liaisons électriques** (qui est relié à quoi) ; il ne dit rien du **placement physique** des composants sur la carte. Ce sont deux vues distinctes du même montage.

## Cas particulier — Schémas multi-feuilles et circuit d'application

Un schéma volumineux s'étale sur **plusieurs feuilles** reliées par des labels de net (ou connecteurs *off-page*) : aucun fil ne traverse les pages, c'est l'identité des noms qui assure la continuité. Par ailleurs, presque toute [[lire-une-datasheet|datasheet]] propose un **circuit d'application** (ou *typical application*) : un schéma prêt à lire qui montre le câblage recommandé du composant. Savoir le décoder, c'est déjà savoir se servir de la puce — la moitié du travail d'intégration.

## Voir aussi

- [[schema-bloc-fonctionnel|Schéma bloc fonctionnel]] — la vue par fonctions, en amont du schéma électrique
- [[lire-une-datasheet|Lire une datasheet]] — pour identifier le rôle des broches et lire un circuit d'application
- [[niveaux-de-tension|Niveaux de tension]] — la cohérence des tensions, contrôle clé de l'étape 5
- [[adc|Conversion analogique-numérique]] — comment le MCU lit une tension de capteur
- [[logigramme|Logigramme]] — la logique de décision derrière la commande
