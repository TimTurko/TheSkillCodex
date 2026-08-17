---
title: Le Teensy comme appareil USB
type: tuto
phases:
  - preuve-de-concept
  - dossier-technique
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

Le Teensy peut **s'énumérer comme presque n'importe quel appareil USB** : port série, clavier, souris, manette, instrument MIDI, carte audio… Le type est **choisi à la compilation**, dans le menu *Tools → USB Type*, et le Teensy apparaît auprès de l'ordinateur comme l'appareil sélectionné. C'est une capacité du **matériel USB** et de la pile logicielle PJRC — pas une simple bibliothèque — et l'une des signatures du Teensy : il devient une interface homme-machine ou un contrôleur musical en quelques lignes. La structuration générale du programme relève de [[firmware|firmware]].

## À quoi ça sert ?

Transformer un montage en périphérique USB reconnu sans pilote ouvre des usages directs en projet :

- **Interface homme-machine.** Un Teensy *clavier* tape du texte ou des raccourcis ; un Teensy *souris* déplace le curseur ; un Teensy *manette* (joystick) pilote un jeu ou une simulation.
- **Contrôleur musical.** Un Teensy *MIDI* envoie des notes et des contrôles à un logiciel audio — la base d'un contrôleur ou d'un instrument.
- **Carte son.** Un Teensy *audio* échange du son avec l'ordinateur (voir [[teensy-audio|l'audio Teensy]]).

Le tout **sans pilote** sur les systèmes courants : l'ordinateur reconnaît un périphérique USB standard.

## Le menu USB Type

Tout part de *Tools → USB Type*. Le choix est fait **avant la compilation** et détermine comment le Teensy se présente :

- **Serial** (défaut) — un port série (USB CDC), pour le moniteur série ;
- **Keyboard / Mouse / Joystick** — un périphérique d'interface humaine (HID) ;
- **MIDI** (ou MIDIx16) — un instrument MIDI ;
- **Audio** — une carte son ;
- **MTP Disk**, **Raw HID**, **Flight Sim Controls**… — d'autres profils spécialisés ;
- des **combinaisons** : *Serial + MIDI*, *Serial + Keyboard + Mouse + Joystick*… — qui cumulent plusieurs identités, dont Serial pour garder le débogage.

![Un même Teensy s'énumère en port série, clavier, souris, manette, instrument MIDI ou carte son, selon le type choisi dans Tools puis USB Type.|640](/ressources/img/teensy-usb/personnalites.svg)

Selon le type choisi, des objets globaux deviennent disponibles dans le sketch : `Keyboard`, `Mouse`, `Joystick`, `usbMIDI`… On les utilise comme n'importe quelle API Arduino.

## Exemple — Un bouton qui tape au clavier

Ce montage envoie un texte à l'ordinateur quand on appuie sur un bouton. Il suppose *USB Type* réglé sur **Keyboard** (ou une combinaison incluant le clavier, par ex. *Serial + Keyboard + Mouse + Joystick* pour garder le moniteur série).

![Montage de l'exemple : le bouton relie la broche 2 du Teensy à la masse GND. Aucune résistance externe n'est nécessaire, le tirage interne étant activé par INPUT_PULLUP dans le code ; la broche est donc au niveau haut au repos et tombe au niveau bas à l'appui.|560](/ressources/img/teensy-usb/montage-bouton.svg)

```cpp
const int BOUTON = 2;
bool dejaAppuye = false;

void setup() {
  pinMode(BOUTON, INPUT_PULLUP);   // appui = niveau bas
}

void loop() {
  bool appuye = (digitalRead(BOUTON) == LOW);

  if (appuye && !dejaAppuye) {     // détection de front : agir une seule fois par appui
    Keyboard.print("Teensy!");     // tape le texte sur l'ordinateur
  }
  dejaAppuye = appuye;

  delay(10);                       // anti-rebond simple
}
```

La **détection de front** (`appuye && !dejaAppuye`) garantit qu'on tape **une seule fois** par appui, pas en rafale — indispensable pour un périphérique qui agit sur l'ordinateur. Pour un **contrôleur MIDI**, le principe est le même avec `usbMIDI` : par exemple `usbMIDI.sendControlChange(7, valeur, 1)` envoie un volume MIDI depuis un potentiomètre.

Prendre capture d'écran ou vidéo de *un éditeur de texte sur l'ordinateur recevant « Teensy! » à chaque appui sur le bouton câblé au Teensy*.

## Pièges

**Oublier de régler le USB Type.** Si le code utilise `Keyboard` ou `usbMIDI` mais que *USB Type* est resté sur *Serial*, la compilation échoue (objet inconnu) ou le périphérique n'apparaît pas. Régler le type **avant** de compiler.

**Perdre le moniteur série.** Choisir un type **sans** Serial (ex. *Keyboard* seul) supprime le port série de débogage. Pour garder les deux, choisir une **combinaison** *Serial + …*.

**Un HID qui s'emballe au démarrage.** Un Teensy *clavier* ou *souris* qui envoie des événements en boucle dès le branchement perturbe l'ordinateur (frappe ou curseur incontrôlés). **Toujours conditionner** l'action à un événement (bouton, capteur) via une détection de front.

**Ne plus pouvoir reprogrammer un HID récalcitrant.** Si un Teensy devenu clavier/souris s'emballe, l'IDE peut peiner à le reprogrammer : **appuyer sur le bouton** de la carte pour forcer le mode programmation (voir [[teensy-prise-en-main|prise en main]]).

**Oublier `usbMIDI.read()` en réception.** Pour *recevoir* du MIDI (et pas seulement en envoyer), il faut appeler `usbMIDI.read()` régulièrement dans `loop()`.

## Exercices

> [!question] Exercice 1 — Un raccourci clavier
> Modifiez l'exemple pour qu'un appui envoie le raccourci **Ctrl + C** (copier) au lieu d'un texte. Indice : il faut *presser* puis *relâcher* des touches.

> [!success]- Corrigé
> On utilise `Keyboard.press()` / `Keyboard.release()` (ou `Keyboard.releaseAll()`), au lieu de `print()` :
> ```cpp
> if (appuye && !dejaAppuye) {
>   Keyboard.press(MODIFIERKEY_CTRL);
>   Keyboard.press('c');
>   delay(10);
>   Keyboard.releaseAll();
> }
> dejaAppuye = appuye;
> ```
> `print()` convient pour taper du texte ; un **raccourci** demande de maintenir une combinaison, donc `press` + `release`. La détection de front reste indispensable pour ne pas spammer le raccourci.

> [!question] Exercice 2 — Un potentiomètre MIDI
> Transformez un potentiomètre (sur une entrée analogique) en **contrôleur MIDI** : envoyez un *Control Change* uniquement **quand la valeur change**, pour ne pas inonder la liaison. Quel *USB Type* faut-il ?

![Montage de l'exercice 2 : les deux extrémités du potentiomètre vont à la broche 3,3 V et à la masse GND, son curseur va à l'entrée analogique A0 du Teensy. Le potentiomètre forme un diviseur de tension réglable dont l'ADC lit la position.|560](/ressources/img/teensy-usb/montage-potentiometre.svg)

> [!success]- Corrigé
> *USB Type* sur **MIDI** (ou *Serial + MIDI* pour garder le débogage). On lit le potentiomètre, on ramène la valeur sur 0–127, et on n'émet qu'au **changement** :
> ```cpp
> int dernier = -1;
>
> void loop() {
>   int v = analogRead(A0) >> 3;          // 0..1023 -> 0..127 (12 bits : ajuster)
>   if (v != dernier) {
>     usbMIDI.sendControlChange(7, v, 1); // CC 7 = volume, canal 1
>     dernier = v;
>   }
>   usbMIDI.read();                        // bonne pratique : vider la file MIDI entrante
> }
> ```
> N'émettre **qu'au changement** évite de saturer la liaison MIDI avec des messages identiques. (Le décalage `>> 3` suppose une lecture sur 10 bits ; avec `analogReadResolution(12)`, adapter la mise à l'échelle.)

## Cas particulier — Types combinés et Raw HID

- **Types combinés** — *Serial + MIDI*, *Serial + Keyboard + Mouse + Joystick* : cumulent plusieurs identités. Le réflexe utile en développement est de **garder Serial** pour déboguer un périphérique qui, seul, n'exposerait pas de port série.
- **Raw HID** — pour un protocole **sur mesure** entre le Teensy et un logiciel maison, sans passer par les profils standards. Plus avancé, mais très souple.

## Raccrochage projet

- **Étape 4 de la [[preuve-de-concept|phase de preuve de concept]]** — pour un projet d'interface (pupitre de commande, contrôleur, périphérique sur mesure), valider tôt que le Teensy est **reconnu** comme le bon appareil USB et **réagit** à un événement physique conditionne toute l'ergonomie aval.
- **Sécurité d'usage** — un périphérique HID agit sur l'ordinateur ; conditionner systématiquement ses actions (détection de front, bouton d'armement) évite les comportements parasites, à documenter dans le [[dossier-technique|dossier technique]].

Comprendre que l'identité USB est un **choix de compilation** — et que les actions HID doivent être déclenchées, jamais subies — donne la grammaire du Teensy comme interface : un montage physique qui devient, au choix, clavier, manette ou instrument.

## Aller plus loin

- [Documentation USB Types de PJRC](https://www.pjrc.com/teensy/td_usbtypes.html) — la liste des profils et leurs API.
- [[teensy-audio|Traiter de l'audio avec le Teensy]] — le profil *Audio*, pour une carte son.
- [[firmware|Firmware]] — structurer un programme qui pilote un périphérique USB (transverse).

## Voir aussi

- [[teensy|Teensy]] — hub des tutoriels Teensy
- [[teensy-arduino-core|Programmer avec l'Arduino-core]] — le core qui expose `Keyboard`, `usbMIDI`…
- [[teensy-audio|Traiter de l'audio avec le Teensy]] — le *USB Type → Audio*
- [[teensy-prise-en-main|Prise en main du Teensy]] — le bouton de programmation, utile si un HID s'emballe
- [[firmware|Firmware]] — structurer le code embarqué (transverse)
