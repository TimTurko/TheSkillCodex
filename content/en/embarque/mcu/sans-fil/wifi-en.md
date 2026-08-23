---
title: Wi-Fi
type: notion
tags:
  - eee
  - notion
prerequis:
  - techno-sans-fil-en
aa: []
phases: []
draft: true
source_fr: embarque/mcu/sans-fil/wifi.md
source_sha256: 70b2ff73aaf945bbfb1e51fc2a81b666cdc4880a029d54be08da4667b68bf01d
---

Le **Wi-Fi** est une [[techno-sans-fil-en|technologie sans-fil]] à **haut débit** et **courte portée** (l'échelle d'un bâtiment), qui relie un système à un réseau local et, au-delà, à **internet**. C'est le choix naturel dès qu'un objet doit envoyer ou recevoir des données depuis un serveur ou le *cloud*.

## Comment ça marche ?

Le Wi-Fi s'organise en **étoile** autour d'un point d'accès (box, routeur), qui assure la liaison vers le réseau. En contrepartie de son débit, il **consomme beaucoup**, ce qui le rend peu adapté à un objet sur pile censé durer des mois. Et pas seulement en moyenne. L'émission provoque des **pics de courant** de plusieurs centaines de mA en rafale. Une [[alimentation-electronique-en|alimentation]] sous-dimensionnée s'écroule alors, et le contrôleur redémarre sans message clair. Sur microcontrôleur, il est intégré nativement à certaines familles, l'[[esp32-en|ESP32]] en tête, ce qui évite un module radio séparé. La mise en œuvre est traitée dans [[esp32-wifi-en|Wi-Fi avec l'ESP32]]. Son prédécesseur l'[[esp8266-en|ESP8266]] ne sait faire que ça (pas de Bluetooth) et reste très répandu dans le matériel existant. Son API est si proche que le code se transpose presque tel quel, comme le montre [[esp8266-arduino-core-en|programmer l'ESP8266]].

## Voir aussi

- [[techno-sans-fil-en|Technologies sans-fil]] — hub : situer le Wi-Fi face aux autres
- [[esp32-wifi-en|Wi-Fi sur ESP32]] — la mise en œuvre concrète
- [[ble-en|BLE]] — alternative courte portée à très basse consommation
- [[alimentation-electronique-en|Alimentation électronique]] — dimensionner pour les pics d'émission
- [[esp32-en|ESP32]] — microcontrôleur à Wi-Fi (et BLE) intégré
- [[esp8266-en|ESP8266]] — le prédécesseur à Wi-Fi seul, API quasi identique
