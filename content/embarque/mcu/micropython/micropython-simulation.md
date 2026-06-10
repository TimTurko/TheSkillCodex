---
title: Simuler avec Wokwi
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
  - micropython
prerequis:
  - micropython
aa: [RA-PROJET-C03-3/PROJ/5]
draft: false
---

**Wokwi** est un simulateur de circuits accessible gratuitement dans le navigateur (`wokwi.com`) qui sait simuler le **Raspberry Pi Pico en MicroPython** : on câble un montage, on écrit le `main.py`, et on observe l'exécution **sans matériel physique**. C'est la rampe d'accès idéale avant d'avoir une carte, et le bac à sable sans risque pour valider un câblage avant de risquer un composant réel. (À la différence de [[tinkercad|Tinkercad]], centré Arduino, Wokwi couvre le Pico et MicroPython — c'est l'outil adapté à ce module.)

## À quoi ça sert ?

Wokwi résout trois problèmes courants en projet étudiant :

- **Démarrer sans matériel** — quand la carte n'est pas encore là, on écrit et teste quand même son code MicroPython ;
- **Tester un câblage risqué avant de l'assembler** — un mauvais branchement de moteur, de pont H ou d'alimentation peut détruire un composant ; la simulation ne coûte rien ;
- **Partager facilement** — un projet Wokwi se partage par URL, pratique pour montrer un montage à un encadrant ou demander de l'aide à distance.

L'outil reste limité : tous les composants ne sont pas simulés, le timing n'est pas réaliste à la microseconde, et certains modules manquent. **Wokwi ne remplace pas le montage réel — il accélère l'idéation et fiabilise la première mise sous tension.**

## Procédure pas à pas

Quatre étapes : créer un projet Pico/MicroPython, poser les composants, écrire le code, simuler.

### 1. Créer un projet Pico en MicroPython

Sur `wokwi.com`, créez un compte gratuit, puis un **nouveau projet** en choisissant **Raspberry Pi Pico** et le langage **MicroPython**. L'éditeur s'ouvre avec un `main.py` vierge et un Pico déjà posé sur le plan.

Prendre capture d'écran de *la page de création de projet Wokwi, avec « Raspberry Pi Pico » + « MicroPython » sélectionnés*.

### 2. Poser et câbler les composants

Le bouton **+** ajoute des composants (LED, bouton, résistance, capteurs, écran SSD1306…). On câble en **cliquant d'une broche à l'autre**. Le câblage se reflète dans un fichier `diagram.json` que l'on peut aussi éditer à la main.

Prendre capture d'écran de *un plan Wokwi avec un Pico, une LED et un bouton câblés, le sélecteur de composants ouvert*.

### 3. Écrire le `main.py`

Dans l'éditeur de code, écrivez votre programme MicroPython exactement comme sur une vraie carte (mêmes modules `machine`, `time`…). C'est le même code que celui qui tournera sur le Pico physique.

Prendre capture d'écran de *l'éditeur Wokwi avec un main.py MicroPython (blink) à gauche et le Pico simulé à droite*.

### 4. Lancer la simulation et observer

Cliquez sur **▶ (Play)**. Wokwi charge le firmware MicroPython simulé et exécute le `main.py`. Les LEDs s'allument, les afficheurs affichent. Une **console série** (panneau en bas) montre les `print()` et donne accès au REPL, comme sur le matériel. Le bouton **■ (Stop)** arrête ; on modifie à chaud puis on relance.

Prendre capture d'écran de *une simulation Wokwi en cours, LED allumée et console série affichant un print*.

## Exemple — Bouton + LED simulés

Le Blink, mais déclenché par un bouton — pour montrer une entrée numérique en plus d'une sortie.

**Câblage** : LED sur **GP15** via résistance 220 Ω vers GND ; bouton entre **GP14** et GND, en `PULL_UP` (la résistance interne suffit, pas de tirage externe).

```python
from machine import Pin

bouton = Pin(14, Pin.IN, Pin.PULL_UP)   # pull-up : 0 = appuye
led = Pin(15, Pin.OUT)

while True:
    if bouton.value() == 0:    # bouton appuye
        led.on()
    else:
        led.off()
```

Lancez la simulation et cliquez sur le bouton : la LED s'allume tant qu'il est maintenu. Si le câblage est faux (bouton vers 3,3 V au lieu de GND), le comportement change — la simulation reproduit fidèlement l'erreur **sans rien casser**.

Prendre capture d'écran de *la simulation Wokwi du circuit bouton + LED, bouton en cours d'appui et LED allumée*.

## Pièges

**« Ça marche dans Wokwi » ≠ « ça marche en vrai ».** La simulation idéalise : pas de bruit, pas de rebonds de contact, pas de chutes de tension réalistes, timing approximatif. Un [[micropython-entree-tor|anti-rebond logiciel]] peut sembler inutile en simulation et s'avérer indispensable sur le vrai bouton. **Valider en simulation est une étape, pas la dernière.**

**Composants absents.** Beaucoup de capteurs du commerce ne sont pas dans la bibliothèque Wokwi. Vérifier la disponibilité avant de baser une PoC simulée dessus.

**Timing peu fidèle.** `time.ticks_ms()`/`ticks_us()` et le code temps-réel critique ne se comportent pas comme sur le matériel. Ne pas y caler une mesure de fréquence ou un asservissement chronométré sans valider en réel.

**LED intégrée : GP25 en simulation.** Sur le Pico simulé (non-W), la LED intégrée est **GP25** ; le raccourci `Pin("LED")` des cartes Pico W peut ne pas être reconnu. En simulation, écrire `Pin(25, Pin.OUT)`.

**Connexion internet requise.** Wokwi est 100 % en ligne — sans réseau, pas de simulation.

## Cas particulier — Tinkercad et simulation locale

- **Tinkercad** simule bien l'[[arduino|Arduino]] (Uno/Mega) mais **pas le Pico/MicroPython** : pour ce module, c'est **Wokwi** qu'il faut.
- **Port Unix de MicroPython** — pour tester de la *logique pure* (sans matériel simulé), MicroPython existe en version PC : utile pour valider un algorithme, pas un câblage.

## Raccrochage projet

- **Étape 1 de la [[preuve-de-concept|phase de preuve de concept]]** — Wokwi sert à prototyper câblage et logique avant la première séance de TP : on arrive avec un `main.py` déjà validé, on gagne sur la première mise sous tension.
- **Étape 2 de la [[preuve-de-concept|phase de preuve de concept]]** — quand un module ne fonctionne pas en vrai, simuler le même câblage isole un problème de logique d'un problème de matériel.
- **Démonstration et support de cours** — la simulation, projetable et partageable par URL, illustre une logique sans toucher de matériel.

Une demi-heure de simulation avant la première mise sous tension réduit nettement le risque de griller un composant par mauvais câblage initial.

## Aller plus loin

- [wokwi.com](https://wokwi.com/) — l'outil, avec des exemples Pico + MicroPython prêts à forker.
- [[micropython-prise-en-main|Prise en main de MicroPython]] — l'équivalent sur du matériel réel.

## Voir aussi

- [[micropython|MicroPython]] — hub du module
- [[micropython-prise-en-main|Prise en main de MicroPython]] — sur du matériel réel
- [[tinkercad|Tinkercad]] — l'équivalent pour Arduino (ne couvre pas le Pico)
- [[microcontroleur|Microcontrôleur]] — panorama des familles MCU
