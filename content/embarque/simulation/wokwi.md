---
title: Wokwi
type: tuto
tags:
  - eee
  - tuto
prerequis:
  - simulation-electronique
  - arduino-prise-en-main
aa:
  - RA-PROJET-C03-3/PROJ/5
phases:
  - preuve-de-concept
draft: false
---

**Wokwi** (`wokwi.com`) est un simulateur en ligne de cartes à **microcontrôleur** — Arduino, ESP32, Raspberry Pi Pico, STM32 — avec un large catalogue de capteurs, afficheurs et modules. On y **écrit le code et on simule le circuit** ensemble, sans matériel : la LED clignote, le capteur renvoie une valeur, le moniteur série défile, le tout dans le navigateur. C'est le complément de [[tinkercad|Tinkercad]], plus riche en composants et en cartes — notamment l'[[esp32|ESP32]] et le sans-fil, là où Tinkercad se limite à l'univers Arduino. Cette fiche est un tuto-outil du hub [[simulation-electronique|simulation électronique]].

*Prendre capture d'écran de l'interface de Wokwi : à gauche l'éditeur de code, à droite une carte ESP32 avec un potentiomètre et une LED câblés, et en bas le moniteur série affichant les valeurs ; le bouton de lancement démarre la simulation.*

## À quoi ça sert ?

Wokwi sert à **valider un montage à microcontrôleur avant le matériel** :

- **tester le code sur le circuit simulé** — vérifier qu'un programme lit bien un capteur ou pilote un actionneur, sans attendre la carte ni risquer un composant ;
- **prototyper de l'ESP32 et du sans-fil** — Wokwi simule l'ESP32 et certains scénarios Wi-Fi, hors de portée de Tinkercad ;
- **partager en un lien** — un projet Wokwi s'envoie par URL, pratique pour demander de l'aide ou montrer un montage à l'équipe.

C'est un outil de [[preuve-de-concept|preuve de concept]] : il valide la **logique** du programme et du câblage. Il ne dispense pas du passage sur matériel réel (voir *Pièges*).

## Prendre en main

1. **Ouvrir** `wokwi.com` et créer un projet en choisissant une **carte** (Arduino Uno, ESP32…).
2. **Ajouter des composants** depuis la palette (bouton `+`) : capteurs, LED, afficheurs, résistances.
3. **Câbler** en reliant les broches, exactement comme sur une vraie carte — en respectant les contraintes réelles, dont les [[niveaux-de-tension|niveaux de tension]] (l'ESP32 raisonne en 3,3 V).
4. **Écrire le code** dans l'éditeur intégré ; les bibliothèques Arduino courantes sont disponibles.
5. **Lancer la simulation** : la carte « exécute » le programme, les composants réagissent, et le **moniteur série** affiche les sorties.

## Exemple — Lire un potentiomètre et piloter une LED

Un montage classique de premier projet, simulé de bout en bout : lire une entrée analogique, afficher la mesure, déclencher une sortie au-delà d'un seuil.

1. **Câbler** : un potentiomètre sur une entrée analogique, une LED (avec sa résistance) sur une sortie.
2. **Coder** : lire la valeur avec `analogRead`, l'afficher au moniteur série, et allumer la LED quand elle dépasse un seuil.

```cpp
const int POT = A0;
const int LED = 13;
const int SEUIL = 512;        // moitié de l'échelle 0..1023

void setup() {
  pinMode(LED, OUTPUT);
  Serial.begin(115200);
}

void loop() {
  int valeur = analogRead(POT);          // lit l'entrée analogique
  Serial.println(valeur);                // affiche au moniteur série
  digitalWrite(LED, valeur > SEUIL);     // LED allumée au-dessus du seuil
  delay(100);
}
```

3. **Lancer** : tourner le potentiomètre dans la simulation fait varier la valeur affichée au moniteur, et la LED s'allume au passage du seuil.
4. **Confronter à l'attendu** : la valeur doit balayer 0 à 1023, et la LED basculer pile à mi-course (512). Si elle bascule ailleurs, le seuil ou le câblage est en cause — diagnostic fait **sans toucher au matériel**.

L'apport de Wokwi : on valide ensemble le **code** ([[cpp|C++]]) et le **circuit** avant de souder ou de commander quoi que ce soit.

## Pièges

**Simulation ≠ réalité.** Wokwi simule la logique, pas finement l'électrique : courants réels, temps de montée, rebonds de boutons ou bruit d'un capteur ne sont pas tous reproduits. Un montage qui marche sous Wokwi reste **à valider sur matériel**.

**Croire tous les composants disponibles.** Le catalogue est large mais pas exhaustif : un capteur exotique peut manquer ou n'être que partiellement modélisé. Vérifier que le composant clé du projet est bien simulé avant de tout bâtir dessus.

**Négliger les contraintes réelles.** Le simulateur laisse parfois passer un câblage que le vrai matériel ne pardonnerait pas — typiquement un signal 5 V sur une broche [[esp32|ESP32]] 3,3 V. Câbler dans Wokwi comme on câblerait pour de vrai.

**Oublier le passage sur matériel.** Wokwi fait gagner du temps en amont, mais le code devra être **téléversé et revalidé** sur la carte physique : c'est une étape de preuve de concept, pas la fin du chemin.

## Voir aussi

- [[simulation-electronique|Simulation électronique]] — le hub : méthode et lecture des résultats
- [[tinkercad|Tinkercad]] — l'équivalent côté Arduino débutant, sans ESP32
- [[esp32|ESP32]] — la famille que Wokwi simule, sans-fil compris
- [[cpp|Le langage C++]] — écrire le code exécuté dans la simulation
- [[niveaux-de-tension|Niveaux de tension]] — respecter le 3,3 V / 5 V, même en simulation
