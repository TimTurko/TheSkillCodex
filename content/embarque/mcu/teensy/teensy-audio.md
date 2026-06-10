---
title: Traiter de l'audio avec le Teensy
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
  - teensy
prerequis:
  - teensy
  - teensy-arduino-core
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

La **Teensy Audio Library** fait du Teensy une plateforme de **traitement audio temps réel** : synthèse, filtrage, mélange, effets, FFT. On y construit une **chaîne d'objets** (oscillateurs, filtres, mixeurs, entrées/sorties) reliés par des **cordons**, que l'on câble *graphiquement* dans l'**Audio System Design Tool** avant que l'outil n'en génère le code. C'est la signature du Teensy, et l'apport qui justifie le plus souvent de le choisir. Cette fiche enseigne à **assembler et piloter** une chaîne audio, pas à concevoir un filtre : la théorie du traitement du signal relève d'un cours dédié.

## À quoi ça sert ?

Faire de l'audio « à la main » sur un microcontrôleur (échantillonner, filtrer, sortir le son sans accroc, le tout en respectant la cadence) est difficile. La bibliothèque résout ce problème par une **abstraction par objets** :

- **Composer plutôt que coder le DSP.** On choisit des **objets** (un oscillateur, un filtre, un mixeur…) et on les **relie** ; chaque objet encapsule son traitement, optimisé pour le Teensy.
- **Le temps réel est géré pour vous.** Le son est traité **en tâche de fond**, par paquets d'échantillons, porté par le DMA — la boucle `loop()` reste libre.
- **Concevoir en cliquant.** L'**Audio System Design Tool** (interface web de PJRC) permet de poser les objets et tracer les cordons, puis **génère le code** correspondant.

## Les objets et les cordons

Trois briques structurent toute chaîne audio :

- **les objets** — des blocs de traitement : entrées (`AudioInputI2S`, `AudioInputUSB`…), générateurs (`AudioSynthWaveform`…), traitements (`AudioFilterStateVariable`, `AudioMixer4`, `AudioEffectReverb`…), sorties (`AudioOutputI2S`, `AudioOutputUSB`…) ;
- **les cordons** (`AudioConnection`) — qui relient la sortie d'un objet à l'entrée d'un autre, comme des câbles de patch ;
- **la mémoire** — `AudioMemory(n)` réserve `n` blocs d'échantillons partagés par la chaîne ; **à appeler dans `setup()`**, sans quoi rien ne sonne.

![Une chaîne audio Teensy : une entrée USB audio passe dans un filtre, un synthétiseur génère une forme d'onde, les deux sont combinés par un mixeur dont la sortie part en I2S vers l'Audio Shield. Les objets sont reliés par des cordons (patch cords). Le traitement tourne en tâche de fond, porté par le DMA, indépendamment de la boucle loop().](/ressources/img/teensy-audio-flux.svg)

## L'Audio System Design Tool

Plutôt que d'écrire à la main les déclarations d'objets et de cordons, on les **dessine** : l'**Audio System Design Tool** (sur `pjrc.com`) propose tous les objets en bibliothèque ; on les glisse sur le plan de travail, on tire les cordons, et un clic sur *Export* **génère le bloc de code** (déclarations + `AudioConnection`) à coller dans le sketch. Le même graphe que le SVG ci-dessus produit ainsi quelques lignes prêtes à l'emploi. C'est l'outil de référence pour concevoir une chaîne audio Teensy.

Prendre capture d'écran de *l'Audio System Design Tool dans le navigateur, avec quelques objets posés (waveform, filter, i2s) et des cordons tracés entre eux*.

## Le traitement tourne en tâche de fond

Point clé : une fois la chaîne déclarée, **le son est traité automatiquement**, par interruptions et DMA, indépendamment de `loop()`. On ne « pousse » pas les échantillons soi-même. Le rôle de `loop()` se réduit à **piloter les paramètres** : changer une fréquence, un gain, déclencher une note. C'est la même idée que les modes asynchrones d'un périphérique — le travail se fait en arrière-plan, le programme principal ne fait que le diriger.

## Exemple — Un oscillateur vers l'Audio Shield

Cette chaîne minimale joue un *la* à 440 Hz. Elle suppose l'**Audio Shield** (codec SGTL5000) branché sur le Teensy, relié par le bus [[bus-de-communication|I2S]] (données) et I2C (contrôle).

```cpp
#include <Audio.h>

AudioSynthWaveform   forme;       // un oscillateur
AudioOutputI2S       sortie;      // sortie I2S vers l'Audio Shield
AudioControlSGTL5000 codec;       // controle du codec de l'Audio Shield

AudioConnection cordonG(forme, 0, sortie, 0);   // forme -> canal gauche
AudioConnection cordonD(forme, 0, sortie, 1);   // forme -> canal droit

void setup() {
  AudioMemory(8);                 // reserver 8 blocs audio (sinon : pas de son)
  codec.enable();
  codec.volume(0.5);
  forme.begin(WAVEFORM_SINE);
  forme.frequency(440);           // la 440 Hz
  forme.amplitude(0.3);
}

void loop() {
  // le son joue en tache de fond ; loop() ne fait que piloter les parametres
}
```

Les déclarations d'objets et les deux `AudioConnection` sont **exactement** ce que l'Audio Design Tool génère. **Sans Audio Shield**, on reste autonome en remplaçant `AudioOutputI2S` par **`AudioOutputUSB`** et en réglant *USB Type* sur **Audio** (voir [[teensy-usb|le Teensy comme appareil USB]]) : le Teensy devient une carte son et joue le signal dans l'ordinateur.

Prendre capture d'écran ou enregistrement de *l'Audio Shield branché sur le Teensy, casque connecté, jouant le 440 Hz*.

## Pièges

**Oublier `AudioMemory()`.** Sans réservation de blocs dans `setup()`, la chaîne ne dispose d'aucune mémoire de travail : **aucun son**. C'est l'oubli n°1.

**Attendre du son analogique sur une broche (Teensy 4.x).** Les Teensy 4.x **n'ont pas de DAC intégré** : la sortie analogique passe par l'Audio Shield (I2S), par l'USB audio, ou par la sortie MQS (qualité moyenne sur 2 broches). Les anciens Teensy 3.x avaient une broche DAC ; ce n'est plus le cas.

**Sous-dimensionner la mémoire.** Trop peu de blocs `AudioMemory()` provoque des coupures. Surveiller `AudioMemoryUsageMax()` (et `AudioProcessorUsageMax()` pour la charge CPU) et ajuster.

**Vouloir traiter l'audio dans `loop()`.** Le traitement est en tâche de fond ; `loop()` ne fait que régler les paramètres. Tenter d'y manipuler les échantillons à la main casse la cadence.

**Câblage de l'Audio Shield.** Les broches I2S sont fixes et le codec se contrôle en I2C : oublier `codec.enable()` laisse le shield muet.

## Exercices

> [!question] Exercice 1 — Une sirène
> À partir de l'exemple, faites **varier la fréquence** dans le temps (par exemple un balayage de 300 à 1000 Hz puis retour), pour entendre une sirène. Où écrit-on ce code, et pourquoi est-ce possible sans interrompre le son ?

> [!success]- Corrigé
> Le balayage s'écrit dans `loop()` — qui **pilote les paramètres** pendant que le son joue en tâche de fond :
> ```cpp
> void loop() {
>   for (int f = 300; f <= 1000; f += 5) { forme.frequency(f); delay(5); }
>   for (int f = 1000; f >= 300; f -= 5) { forme.frequency(f); delay(5); }
> }
> ```
> C'est possible parce que `forme.frequency()` ne fait que **changer un réglage** de l'objet ; la génération du signal continue en arrière-plan, sans coupure. On ne touche jamais aux échantillons.

> [!question] Exercice 2 — Insérer un filtre
> Vous voulez adoucir le son en plaçant un **filtre passe-bas** entre l'oscillateur et la sortie. Quels objets et quels cordons faut-il, et quel outil vous évite de tout écrire à la main ?

> [!success]- Corrigé
> On insère un objet **`AudioFilterStateVariable`** (qui offre une sortie passe-bas) entre la forme et la sortie, en **re-câblant les cordons** : `forme → filtre`, puis `filtre (sortie passe-bas) → sortie`.
> ```cpp
> AudioSynthWaveform        forme;
> AudioFilterStateVariable  filtre;
> AudioOutputI2S            sortie;
> AudioControlSGTL5000      codec;
> AudioConnection c1(forme, 0, filtre, 0);     // forme -> filtre
> AudioConnection c2(filtre, 0, sortie, 0);    // sortie passe-bas (port 0) -> gauche
> AudioConnection c3(filtre, 0, sortie, 1);    // -> droite
> // dans setup(): filtre.frequency(800);  // coupure a 800 Hz
> ```
> L'**Audio System Design Tool** évite d'écrire tout cela à la main : on glisse le filtre, on retire/retrace les cordons, on ré-exporte le code. C'est précisément le cas d'usage de l'outil. (La *conception* du filtre — type, pente, fréquence de coupure — relève d'un cours de traitement du signal ; ici on l'**assemble** et on le **règle**.)

## Cas particulier — Audio Shield, USB audio, sorties sans codec

- **Audio Shield (SGTL5000)** — le compagnon de référence : entrée/sortie ligne, casque, micro, le tout par I2S + contrôle I2C. La voie analogique propre.
- **USB audio** — sans aucun matériel : *USB Type → Audio* fait du Teensy une carte son (objets `AudioInputUSB`/`AudioOutputUSB`). Idéal pour expérimenter (voir [[teensy-usb|USB]]).
- **MQS / I2S externe** — sur Teensy 4.x sans shield, la sortie MQS (2 broches, qualité moyenne) ou un codec I2S externe permettent une sortie analogique ; il n'y a pas de DAC intégré.

## Raccrochage projet

- **Étape 4 de la [[preuve-de-concept|phase de preuve de concept]]** — pour un projet à dimension sonore (instrument, retour audio, analyse de son), la chaîne audio se prototype tôt : valider qu'un signal sort proprement, sans accroc, conditionne tout le reste.
- **Charge maîtrisée** — surveiller `AudioProcessorUsageMax()` dès la PoC donne une marge de calcul réaliste avant d'empiler les effets.

Comprendre que l'audio Teensy se **compose** (objets + cordons) et tourne **en tâche de fond** déplace l'effort du « comment traiter le signal » vers le « quelle chaîne assembler » — c'est ce qui rend le DSP accessible à un projet école.

## Aller plus loin

- [Audio System Design Tool (PJRC)](https://www.pjrc.com/teensy/gui/) — l'outil graphique de conception de chaînes audio.
- [Documentation de la Teensy Audio Library](https://www.pjrc.com/teensy/td_libs_Audio.html) — liste des objets et de leurs paramètres.
- [[teensy-usb|Le Teensy comme appareil USB]] — la sortie USB audio, sans matériel.
- [[firmware|Firmware]] — structurer un firmware où l'audio coexiste avec d'autres tâches (transverse).

## Voir aussi

- [[teensy|Teensy]] — hub des tutoriels Teensy
- [[teensy-arduino-core|Programmer avec l'Arduino-core]] — le core sur lequel repose la bibliothèque audio
- [[teensy-usb|Le Teensy comme appareil USB]] — *USB Type → Audio* pour une sortie sans shield
- [[bus-de-communication|Bus de communication]] — l'I2S (audio) et l'I2C (contrôle du codec) (transverse)
- [[firmware|Firmware]] — faire coexister l'audio avec le reste du programme (transverse)
