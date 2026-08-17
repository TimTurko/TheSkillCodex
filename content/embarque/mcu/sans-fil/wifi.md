---
title: Wi-Fi
type: notion
tags:
  - eee
  - notion
prerequis:
  - techno-sans-fil
aa: []
phases: []
draft: false
---

Le **Wi-Fi** est une [[techno-sans-fil|technologie sans-fil]] à **haut débit** et **courte portée** (l'échelle d'un bâtiment), qui relie un système à un réseau local et, au-delà, à **internet**. C'est le choix naturel dès qu'un objet doit envoyer ou recevoir des données depuis un serveur ou le *cloud*.

## Comment ça marche ?

Le Wi-Fi s'organise en **étoile** autour d'un point d'accès (box, routeur), qui assure la liaison vers le réseau. En contrepartie de son débit, il **consomme beaucoup** — peu adapté à un objet sur pile censé durer des mois. Et pas seulement en moyenne : l'émission provoque des **pics de courant** de plusieurs centaines de mA en rafale — une [[alimentation-electronique|alimentation]] sous-dimensionnée s'écroule et le contrôleur redémarre sans message clair. Sur microcontrôleur, il est intégré nativement à certaines familles, l'[[esp32|ESP32]] en tête, ce qui évite un module radio séparé — la mise en œuvre est traitée dans [[esp32-wifi]]. Son prédécesseur l'[[esp8266|ESP8266]] ne sait faire que ça (pas de Bluetooth) et reste très répandu dans le matériel existant ; son API est si proche que le code se transpose presque tel quel — voir [[esp8266-arduino-core|programmer l'ESP8266]].

## Voir aussi

- [[techno-sans-fil|Technologies sans-fil]] — hub : situer le Wi-Fi face aux autres
- [[esp32-wifi|Wi-Fi sur ESP32]] — la mise en œuvre concrète
- [[ble|BLE]] — alternative courte portée à très basse consommation
- [[alimentation-electronique|Alimentation électronique]] — dimensionner pour les pics d'émission
- [[esp32|ESP32]] — microcontrôleur à Wi-Fi (et BLE) intégré
- [[esp8266|ESP8266]] — le prédécesseur à Wi-Fi seul, API quasi identique
