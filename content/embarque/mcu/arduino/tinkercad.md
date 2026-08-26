---
title: Tinkercad
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
prerequis:
  - arduino
aa: [RA-PROJET-C03-3/PROJ/5]
draft: false
---

**Tinkercad Circuits** est un simulateur de circuits électroniques accessible gratuitement dans le navigateur (tinkercad.com). Il permet de monter un circuit [[arduino|Arduino]], d'écrire le code, et de simuler son fonctionnement sans aucun matériel physique. C'est la rampe d'accès idéale avant d'avoir reçu sa carte, et le bac à sable sans risque pour tester un montage avant de risquer un composant réel.

## À quoi ça sert ?

Tinkercad résout trois problèmes courants en projet étudiant :

- **Démarrer sans matériel** — quand la carte n'est pas encore commandée, ou en attendant la séance de TP, on peut quand même écrire et tester son code.
- **Tester un câblage risqué avant de l'assembler** — un mauvais câblage de moteur, de pont H ou d'alimentation peut détruire un composant en un instant. La simulation ne coûte rien.
- **Partager facilement** — un projet Tinkercad est partageable par URL, sans envoyer de fichier (pratique pour montrer un montage à un encadrant, ou demander de l'aide à distance).

L'outil reste limité : tous les composants ne sont pas simulés, le timing n'est pas réaliste à la microseconde près, et certains modules (capteurs spécialisés, écrans complexes) sont absents. **Tinkercad ne remplace pas le montage réel. Il accélère la phase d'idéation et fiabilise la première mise sous tension.**

La **méthode** générale de simulation (choisir l'analyse adaptée à la question, placer les sondes, confronter le résultat à un ordre de grandeur attendu) et le panorama des autres simulateurs sont portés par le hub [[simulation-electronique|simulation électronique]].

## Procédure pas à pas

Quatre étapes : ouvrir un projet, poser les composants, écrire le code, simuler.

### 1. Créer un compte et ouvrir un nouveau circuit

Rendez-vous sur [tinkercad.com](https://www.tinkercad.com/) et créez un compte gratuit (un compte Google ou un compte établissement Autodesk Education fonctionne aussi). Dans le tableau de bord, cliquez sur *Créer* → *Circuit*. Un plan de travail vide s'ouvre.

![Tableau de bord Tinkercad, bouton « Créer un nouveau Circuit » visible|600](/ressources/img/tinkercad/creer-circuit.png)

### 2. Poser les composants

À droite du plan de travail, une **barre latérale de composants** présente toutes les pièces disponibles : Arduino Uno, breadboard, résistances, LEDs, capteurs, modules... Filtrez par catégorie (*De base* / *Tous*) ou cherchez par mot-clé (« Arduino », « LED », « DHT »).

Glissez-déposez les composants dans le plan de travail. Cliquez-droit pour faire pivoter une pièce. Pour câbler, cliquez sur une broche : un fil démarre, suivez en cliquant à chaque coude, terminez par un clic sur la broche cible. Les valeurs (résistance, tension) se définissent en cliquant sur le composant et en éditant le panneau qui apparaît.

![Plan de travail Tinkercad : Arduino Uno, LED et résistance câblées, barre latérale des composants à droite|600](/ressources/img/tinkercad/plan-de-travail.png)

### 3. Écrire le code

Cliquez sur **Code** en haut à droite. Deux modes sont disponibles :

- **Blocs** — programmation visuelle façon Scratch : on assemble des instructions à la souris, sans écrire de syntaxe. C'est adapté à la découverte au collège ou au lycée, mais **ce mode n'a pas cours dans le monde professionnel**. On ne l'utilise pas ici.
- **Texte** — éditeur [[cpp|C++]] Arduino classique. **C'est le mode à utiliser dès le départ** : c'est exactement le code qu'on retrouvera sur la vraie carte et dans l'industrie.

Au-dessus de l'éditeur, un bouton permet de basculer entre les deux modes. Tinkercad génère le code C++ équivalent au montage en blocs quand on passe du graphique au texte, utile une fois pour voir la correspondance, mais on reste ensuite en mode Texte (revenir aux blocs efface le code édité, voir *Pièges*).

![Bascule du mode Blocs vers le mode Texte dans le volet Code de Tinkercad|600](/ressources/img/tinkercad/editeur-code-texte.png)

### 4. Lancer la simulation et observer

Cliquez sur **Démarrer la simulation**. Tinkercad téléverse virtuellement le code dans l'Arduino simulé. Les LEDs s'allument, les moteurs tournent, les afficheurs affichent (selon le code et le câblage).

Un bouton **Moniteur série** (en bas du volet code) permet de voir les `Serial.print()` au fil de l'exécution, comme dans l'IDE réel (voir [[arduino-serie|moniteur série]]).

Pour arrêter, cliquez sur **Arrêter la simulation**. Vous pouvez modifier le code ou le câblage à chaud, puis relancer.

## Exemple — Blink simulé avec bouton

Reprise du Blink mais déclenché par un bouton-poussoir externe, pour montrer comment Tinkercad gère une entrée numérique en plus d'une sortie.

**Câblage** : LED sur la broche 13 via résistance 220 Ω vers GND ; bouton entre la broche 2 et GND, configuration `INPUT_PULLUP` (pas besoin de résistance de tirage externe, la résistance interne suffit).

```cpp
const int LED = 13;
const int BOUTON = 2;

void setup() {
  pinMode(LED, OUTPUT);
  pinMode(BOUTON, INPUT_PULLUP);
}

void loop() {
  if (digitalRead(BOUTON) == LOW) {   // bouton appuyé (pullup = inverse)
    digitalWrite(LED, HIGH);
  } else {
    digitalWrite(LED, LOW);
  }
}
```

Démarrez la simulation, cliquez sur le bouton dans le plan de travail : la LED s'allume tant qu'il est maintenu. Si le câblage est faux (ex. bouton entre 5 V et la broche au lieu de GND), la LED ne s'allume jamais, quel que soit l'appui. La broche reste tirée à HIGH par le pull-up, et la simulation reproduit fidèlement l'erreur sans rien casser.

![Simulation Tinkercad en cours d'exécution, LED allumée sur le plan de travail|600](/ressources/img/tinkercad/simulation-en-cours.png)

## Pièges

**« Ça marche dans Tinkercad » ≠ « ça marche en vrai ».** Tinkercad simule un modèle idéalisé : pas de bruit, pas de rebonds de contact, pas de chutes de tension réalistes, timing approximatif. Un [[arduino-entree-tor|anti-rebond logiciel]] peut paraître inutile en simulation et indispensable sur le vrai bouton. **Valider en simulation est une étape, pas la dernière.**

**Composants absents.** Beaucoup de capteurs réels du commerce (DHT22, MPU6050, capteur de courant ACS712, modules sans-fil) ne sont pas dans la bibliothèque Tinkercad. Vérifier la disponibilité avant de baser une PoC simulée dessus.

**Timing peu fidèle.** Les fonctions `millis()`, `micros()`, et tout code temps-réel critique ne se comportent pas comme sur du matériel. Ne pas y caler une mesure de fréquence ou un asservissement chronométré sans valider sur vrai matériel.

**Pas de PWM réaliste.** L'`analogWrite()` est rendu graphiquement (la LED change d'intensité), mais l'oscilloscope virtuel et la mesure fine ne valent pas un vrai oscilloscope sur un signal carré modulé.

**Bascule blocs → texte à sens unique.** Le passage des blocs au texte génère le C++ équivalent, mais l'inverse n'est pas vrai. Une fois le code édité en texte, revenir au mode blocs **efface les modifications**. Passer en texte tôt, et ne plus revenir aux blocs.

**Sauvegarde automatique avec latence.** Tinkercad sauvegarde en continu, mais après une perte de réseau ou de session, les dernières secondes peuvent être perdues. Pour un travail important, exporter le code régulièrement (*Code → Télécharger le code*).

**Connexion internet requise.** L'outil est 100 % en ligne. Sans réseau, pas de Tinkercad. Pour un usage hors-ligne, Wokwi (alternative web) ou un simulateur installé localement sont les options de repli.

## Cas particulier — Wokwi pour ESP32 et microcontrôleurs avancés

Tinkercad gère bien Arduino Uno / Mega et quelques composants standards. Pour simuler de l'[[esp32|ESP32]] (Wi-Fi, BLE, écran SSD1306, pilotage de modules avancés), regardez [[wokwi|Wokwi]] (wokwi.com), simulateur web complémentaire qui couvre un parc bien plus large de cartes et de modules. Même logique d'usage, interface proche.

## Raccrochage projet

- **Étape 1 de la [[preuve-de-concept|phase de preuve de concept]]** — Tinkercad sert à prototyper rapidement le câblage et la logique avant la première séance de TP. On arrive avec un sketch déjà validé en simulation, on gagne sur la première mise sous tension réelle.
- **Étape 2 de la [[preuve-de-concept|phase de preuve de concept]]** — quand un capteur ou un module ne fonctionne pas en vrai, simuler à part le même câblage dans Tinkercad permet d'isoler un problème de logique d'un problème de matériel.
- **Démonstration et support de cours** — la simulation, projetable et partageable par URL, est un excellent support pour expliquer une logique sans toucher de matériel.

Une demi-heure de simulation avant la première mise sous tension du vrai circuit réduit drastiquement le risque de griller un composant par mauvais câblage initial, un compromis très favorable.

## Aller plus loin

- [tinkercad.com](https://www.tinkercad.com/) — l'outil lui-même.
- [wokwi.com](https://wokwi.com/) — simulateur alternatif, plus large couverture (ESP32, STM32, Raspberry Pi Pico).
- [Tinkercad Learning Center](https://www.tinkercad.com/learn) — tutoriels officiels guidés.

## Voir aussi

- [[arduino|Arduino]] — hub des tutoriels Arduino
- [[arduino-prise-en-main|Prise en main d'Arduino]] — l'équivalent sur du matériel réel
- [[simulation-electronique|Simulation électronique]] — le hub méthode : choisir une analyse, lire et confronter les résultats
- [[wokwi|Wokwi]] — simulateur de cartes MCU plus riche (ESP32, sans-fil)
- [[arduino-serie|Moniteur série]] — observable aussi dans Tinkercad
- [[microcontroleur|Microcontrôleur]] — panorama des familles MCU
