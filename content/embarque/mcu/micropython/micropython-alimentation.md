---
title: Alimenter la carte
type: tuto
phases:
  - concept
  - preuve-de-concept
  - dossier-technique
  - integration-et-tests
tags:
  - eee
  - tuto
  - micropython
prerequis:
  - micropython-prise-en-main
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

**Alimenter un Pico** consiste à lui fournir la tension et le courant nécessaires pour démarrer, exécuter son programme, et alimenter les composants externes. Le schéma diffère d'un Arduino : pas de jack ni de régulateur linéaire 7805, mais trois broches clés — **VBUS** (5 V de l'USB), **VSYS** (entrée système 1,8–5,5 V) et **3V3(OUT)** (sortie 3,3 V régulée) — autour d'un régulateur *buck-boost* qui fabrique le 3,3 V interne. Choisir la bonne voie — et la dimensionner — est la première chose à vérifier quand un projet redémarre tout seul ou refuse de démarrer.

## À quoi ça sert ?

Tant qu'un projet tient sur breadboard alimenté en USB, tout va bien. Dès qu'on ajoute moteurs, relais, modules sans-fil ou écran, le courant grimpe — et la sortie 3,3 V du Pico atteint vite ses limites. Maîtriser les voies d'alimentation permet de **choisir la source adaptée**, **séparer les alimentations** quand les actionneurs perturbent la logique, et **anticiper les pics** (Wi-Fi en émission, démarrage moteur).

## Procédure pas à pas

Quatre étapes : choisir la voie, estimer le courant, câbler, vérifier la stabilité.

### 1. Choisir la voie d'alimentation

| Broche | Rôle | Plage | Usage |
|---|---|---|---|
| **VBUS** (pin 40) | 5 V issu de l'USB | 5 V (si USB branché) | relayer le 5 V de l'USB vers un module 5 V |
| **VSYS** (pin 39) | entrée système (vers le régulateur interne) | **1,8 – 5,5 V** | alimenter le Pico par batterie ou source externe |
| **3V3(OUT)** (pin 36) | **sortie** 3,3 V régulée | 3,3 V, courant limité | alimenter des capteurs/modules 3,3 V (peu gourmands) |
| **3V3_EN** (pin 37) | activation du régulateur 3,3 V | relier à GND = **éteint** | interrupteur logiciel d'alimentation |

**Règle de base** : USB tant que ça suffit ; sinon, **VSYS** (1,8–5,5 V) pour une source externe ou une batterie. La broche `3V3(OUT)` est une **sortie**, pas une entrée — on n'y injecte pas de tension.

### 2. Estimer le courant total

Sommer les consommations (estimées **haut**) :

- **Pico seul** : ~25–40 mA.
- **Capteurs simples** (DHT11, HC-SR04) : 1–15 mA chacun.
- **Servo SG90** : 10 mA au repos, 100–200 mA en mouvement, jusqu'à 500 mA bloqué.
- **Module relais** : 70–80 mA quand il colle.
- **Moteur CC** : 100 mA à plusieurs ampères.
- **Wi-Fi (Pico 2 W) en émission** : pointes de plusieurs centaines de mA.
- **Bandeau LED WS2812** : 3–5 A en blanc plein — alimentation dédiée obligatoire.

La sortie **3V3(OUT)** ne fournit que quelques centaines de mA (partagés avec le Pico lui-même) : **ne pas y brancher de grosse charge**. Au-delà, alimenter la charge séparément (depuis VBUS/5 V ou une alimentation dédiée). Pour la méthode générale de dimensionnement (bilan de puissance, marges), voir [[alimentation-electronique|concevoir une alimentation]].

### 3. Câbler

**USB** : câble de données. Branche le 5 V sur VBUS, qui alimente VSYS via une diode (VSYS ≈ 4,7 V), puis le régulateur fabrique le 3,3 V.

**Batterie / source externe** : relier la source (1,8–5,5 V) à **VSYS** et sa masse à **GND**. Une cellule **LiPo** (3,0–4,2 V) ou un pack **2–3 piles AA** (3–4,5 V) entrent directement dans la plage VSYS. *Si l'USB peut aussi être branché en même temps, alimenter VSYS au travers d'une diode Schottky* (la source la plus haute l'emporte sans conflit) — voir la note « Powering Pico » de la datasheet.

**Module 5 V** : l'alimenter depuis **VBUS** (5 V, USB présent), GND commun, et adapter ses signaux de sortie vers le Pico ([[niveaux-de-tension|niveaux de tension]]).

![Les deux entrées d'alimentation d'un Pico : l'USB en 5 V arrive sur VBUS et traverse une diode interne avant VSYS, qui vaut alors environ 4,7 V ; une source externe de 1,8 à 5,5 V se raccorde directement sur VSYS et GND, au travers d'une diode Schottky si l'USB peut être branché en même temps. Les deux chemins se rejoignent sur VSYS, qui alimente le régulateur 3,3 V et la broche 3V3(OUT).|640](/ressources/img/micropython-alimentation/deux-sources.svg)

### 4. Vérifier la stabilité

Au multimètre : **3V3(OUT)** doit être ~3,3 V (3,2–3,4 V) ; **sous charge** (actionneur activé), il ne doit pas chuter. Symptôme typique d'une alimentation faible : **le Pico reboote dès qu'un actionneur s'active** (le pic de courant fait chuter la tension sous le seuil — *brown-out* — la carte se réinitialise puis repart).

## Exemple — Projet sur batterie : Pico + 3 modules

**Estimation** : Pico 30 mA + DHT11 2,5 mA + OLED 20 mA + servo 200 mA pointe ≈ **250 mA** en pic.

**Choix** : batterie LiPo 1 cellule (3,0–4,2 V) sur **VSYS** ; DHT11 et OLED alimentés par **3V3(OUT)** (≤ 30 mA chacun, OK) ; servo alimenté **séparément** (sa pointe ferait chuter le 3,3 V).

```python
from machine import Pin, PWM
servo = PWM(Pin(15)); servo.freq(50)   # servo sur GP15, 50 Hz
# ... lecture capteurs, affichage OLED, pilotage servo
```

Au premier essai, alimenter aussi le servo par 3V3(OUT) fait rebooter le Pico quand il bouge. **Solution** : alimenter le servo par une source 5 V dédiée (ou VBUS si USB présent), **GND commun** avec le Pico. Voir [[micropython-servomoteur|servomoteur]] pour les bonnes pratiques d'alimentation servo.

![Alimentation séparée du servo avec masse commune : le servo est alimenté par une source 5 V dédiée (VBUS ou alim externe), seul le signal vient de GP15 du Pico, et toutes les masses (Pico, source, servo) sont reliées — GND commun.|560](/ressources/img/micropython-alimentation/alimentation-separee.svg)

## Pièges

**Injecter une tension sur 3V3(OUT).** C'est une **sortie** : y appliquer une tension peut endommager le régulateur. Pour alimenter le Pico en externe, passer par **VSYS**.

**Dépasser 5,5 V sur VSYS.** La plage VSYS est 1,8–5,5 V. Appliquer du 7–12 V (réflexe « jack Arduino ») détruit la carte. Pas de régulateur d'entrée façon 7805 ici.

**USB d'un PC pour des actionneurs.** Reboot quand un actionneur s'active → diagnostic à faire **avant** de chercher un bug logiciel. Solution : alimentation externe.

**Charge gourmande sur 3V3(OUT).** Cette sortie est limitée (quelques centaines de mA, partagés avec le Pico). Une grosse charge la fait chuter → brown-out. Alimenter la charge séparément.

**Pic d'émission Wi-Fi non anticipé** (Pico 2 W). Pointes courtes invisibles au multimètre. Un condensateur de découplage près de l'alimentation absorbe la pointe et stabilise.

**GND non commun.** Avec deux alimentations (Pico + charge), GND doit être *commun*, sinon les signaux n'ont pas la même référence et le système ne marche pas.

## Cas particulier — Batterie pour projets autonomes

- **2–3 piles AA** (3–4,5 V) → directement sur VSYS, bon rapport coût/autonomie ;
- **LiPo 1 cellule** (3,0–4,2 V) → directement sur VSYS, mais nécessite un chargeur dédié et des précautions (sur-décharge) ;
- pour économiser sur batterie pendant les longues inactivités, voir [[deep-sleep|deep sleep]] et [[micropython-deep-sleep|deep sleep en MicroPython]].

## Raccrochage projet

- **Étape 4 de la [[concept|phase de concept]]** — l'alimentation est un critère d'arbitrage (USB vs autonome, démo branchée vs mobile).
- **Étape 2 de la [[preuve-de-concept|phase de preuve de concept]]** — au premier actionneur de puissance, estimer la consommation et redimensionner.
- **Étape 4 de la [[dossier-technique|phase de dossier technique]]** — l'alimentation finale du démonstrateur (avec marge) fait partie du BOM.
- **Étape 2 de la [[integration-et-tests|phase d'intégration et tests]]** — vérifier que le 3,3 V tient en charge sur le système intégré.

L'alimentation est l'élément le plus sous-estimé d'un projet débutant — ignoré quand tout va bien, accusé à tort quand un autre bug survient. Le mesurer au multimètre au premier symptôme suspect évite des heures d'errance.

## Voir aussi

- [[micropython|MicroPython]] — hub du module
- [[micropython-prise-en-main|Prise en main]] — où l'alimentation USB est vue en premier
- [[micropython-deep-sleep|Deep sleep]] — réduire la consommation pour l'autonomie
- [[micropython-shield|Carte d'extension]] — l'enfichage qui augmente la consommation
- [[niveaux-de-tension|Niveaux de tension]] — cohabitation 3,3 / 5 V
- [[alimentation-electronique|Concevoir une alimentation]] — les principes transverses appliqués ici
- [[lire-une-datasheet|Lire une datasheet]] — repérer les courants nominaux des composants
- [[arduino-alimentation|Alimenter la carte Arduino]] — l'équivalent (USB / jack / Vin)
