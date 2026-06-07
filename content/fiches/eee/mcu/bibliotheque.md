---
title: Bibliothèque
type: notion
tags:
  - eee
  - mcu
  - notion
prerequis: []
aa: []
draft: false
---

Une **bibliothèque** (*library*) est un ensemble de code déjà écrit et empaqueté, qu'on ajoute à son projet pour piloter un composant ou un protocole à travers une interface simple — sans réécrire soi-même le code de bas niveau.

## À quoi ça sert

Faire parler un capteur I²C, afficher du texte sur un écran OLED ou commander un moteur pas-à-pas demande un code de pilote souvent long et délicat (registres, *timings*, protocole). Une bibliothèque encapsule ce travail : on appelle `display.print("...")` ou `capteur.lire()` sans connaître le détail du composant. C'est le même principe de réutilisation que les modules d'un langage, appliqué au matériel.

## Installer et choisir

La plupart des IDE intègrent un **gestionnaire de bibliothèques** qui les télécharge et les met à jour en quelques clics (voir [[ide|IDE]]). Deux réflexes de prudence : vérifier que la bibliothèque est **maintenue** (commits récents) et **compatible avec la carte cible** — une bibliothèque écrite pour Arduino Uno ne fonctionne pas toujours sur ESP32 — et **figer sa version** sur un projet d'équipe pour éviter qu'une mise à jour change le comportement en cours de route.

## Voir aussi

- [[ide|IDE]] — d'où l'on installe les bibliothèques
- [[microcontroleur|Microcontrôleur]] — la cible qui exécute le code
