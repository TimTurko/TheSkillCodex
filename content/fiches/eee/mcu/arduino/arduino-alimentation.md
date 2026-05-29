---
title: Alimenter la carte Arduino
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
prerequis:
  - arduino-prise-en-main
aa: []
draft: false
---

**Alimenter une carte Arduino** consiste à lui fournir la tension et le courant nécessaires pour qu'elle démarre, exécute son programme, et alimente les composants externes qui en dépendent. Trois voies d'alimentation cohabitent sur une Uno : **USB** (depuis un PC ou un chargeur), **jack DC** (alimentation externe 7-12 V), **broche Vin** (équivalent du jack mais en pin). Choisir la bonne — et la dimensionner — est la première chose à vérifier quand un projet redémarre tout seul ou refuse de démarrer.

## À quoi ça sert ?

Tant qu'un projet tient sur la breadboard, alimenté par le PC en USB, tout va bien. Dès qu'on ajoute des moteurs, des relais, des modules sans-fil ou un display TFT, le courant grimpe — et l'alimentation USB de l'Arduino (500 mA partagés sur un PC) atteint ses limites. La maîtrise des trois voies d'alimentation et de leurs contraintes permet de :

- **Choisir la PSU adaptée** à la consommation totale prévue (logique + actionneurs + accessoires).
- **Séparer les alimentations** quand les actionneurs perturbent la logique (motors).
- **Anticiper les pics de consommation** (Wi-Fi en émission, démarrage de moteur, attaque de relais).

## Procédure pas à pas

Quatre étapes : choisir la voie, estimer le courant, câbler, vérifier la stabilité.

### 1. Choisir la voie d'alimentation

| Voie | Tension d'entrée | Régulateur | Limite typique | Cas d'usage |
|---|---|---|---|---|
| **USB** (port type B Uno R3, USB-C Uno R4) | 5 V (fourni par PC ou chargeur) | aucun (passe-plat) | 500 mA depuis PC, jusqu'à 1-2 A depuis chargeur USB-C | Programmation et tests, projets sans actionneurs |
| **Jack DC** | 7-12 V (max 20 V brièvement) | régulateur linéaire LM7805 (Uno R3) ou switching (Uno R4) | ~1 A en sortie 5 V théorique, ~500 mA en pratique sans dissipation | Projets mobiles, démonstration sans PC |
| **Broche Vin** | 7-12 V (mêmes contraintes que le jack) | mêmes | ~500-800 mA | Alimentation par bornier ou breadboard, équivalent fonctionnel du jack |
| **Broche 5 V (entrée)** | 5 V régulés | aucun (bypass du régulateur) | dépend de la PSU externe | Alim 5 V externe stable, pas de réserve |
| **Broche 3,3 V (entrée)** | 3,3 V régulés | aucun (bypass) | rarement utilisé en entrée, ~150 mA en sortie | Compatibilité fine, à éviter en entrée |

**Règle de base** : USB tant que ça suffit, jack DC quand on a besoin d'autonomie ou de plus de courant.

### 2. Estimer le courant total

Sommer les consommations :

- **Arduino Uno R3 seul** : ~50 mA (LED de la carte allumée).
- **Capteurs simples** (DHT11, HC-SR04) : 1-15 mA chacun.
- **Servomoteur SG90 au repos** : 10 mA, **en mouvement** : 100-200 mA, **bloqué** : jusqu'à 500 mA.
- **Module relais 5 V** : 70-80 mA quand le relais colle.
- **Moteur CC standard** : 100 mA à plusieurs ampères selon la taille.
- **Wi-Fi ESP-01 en émission** : 250-300 mA en pic.
- **Bandeau LED RGB** (60 LEDs WS2812B en blanc plein) : 3-5 A — alimentation dédiée obligatoire.
- **Afficheur LCD 16×2 (rétroéclairage)** : 20-50 mA.
- **Afficheur OLED 0,96″ SSD1306** : ~20 mA.

Méthode rapide : **estimer haut** chaque composant et sommer. Comparer à la capacité de la voie choisie. Marge de sécurité 1,5×.

### 3. Câbler

**USB** : un câble de qualité (data, pas charge-only). Sur Uno R3, port USB type B ; sur Uno R4, USB-C ; sur Nano, mini-USB.

**Jack DC** : adaptateur secteur 9 V continu, polarité **positive au centre** (norme Arduino). Le `0,5 A` ou `1 A` indiqué sur l'adaptateur est sa capacité maximale.

**Broche Vin** : alimenter par cette broche est l'équivalent du jack DC en moins encombrant. Toujours référencer GND.

**5 V externe** : si on a déjà une alimentation 5 V stable (bus 5 V de l'installation), alimenter directement par la broche `5V`. **Ne pas alimenter en 5 V via le jack ou Vin** — le régulateur LM7805 a besoin d'au moins 7 V en entrée pour fournir 5 V en sortie stable.

Prendre capture d'écran ou photo de *une carte Arduino Uno avec trois alimentations possibles visibles : câble USB type B, jack DC 9 V branché, et fil Vin/GND sur breadboard*.

### 4. Vérifier la stabilité

Une fois alimenté, mesurer au multimètre :

- **Tension entre 5 V et GND sur l'Arduino** : doit être ~5,0 V (4,8-5,2 V tolérables).
- **Tension entre 3,3 V et GND** : doit être 3,3 V (3,2-3,4 V).
- **Sous charge** (actionneur activé) : la tension 5 V ne doit pas chuter en dessous de 4,5 V — sinon, le microcontrôleur peut se reset.

Symptôme typique d'une alimentation faible : **l'Arduino reboote à chaque fois qu'un actionneur s'active**. Le pic de courant fait chuter la tension, le watchdog déclenche un reset, le programme repart.

## Exemple — Projet sur batterie : Arduino + 3 modules

Cas type : alimenter un Arduino Uno avec un module DHT11, un module OLED SSD1306, et un servo SG90, sur **batterie LiPo 7,4 V** pour démonstration mobile.

**Estimation** :
- Arduino : 50 mA
- DHT11 : 2,5 mA
- OLED : 20 mA
- Servo en mouvement : 200 mA pointe
- **Total** : ~270 mA en pic

**Choix** : alimentation par jack DC depuis batterie 7,4 V via un connecteur jack mâle. La batterie LiPo 1000 mAh permet ~3 h d'autonomie au régime estimé.

**Câblage** :
- Batterie 7,4 V → jack DC sur Arduino.
- DHT11 et OLED : alimentés via le `+5 V` régulé de l'Arduino (≤ 30 mA chacun, OK).
- Servo : alimenté via le `+5 V` régulé… ou via une alimentation séparée si la chute de tension est observée.

```cpp
#include <Servo.h>
Servo monServo;

void setup() {
  monServo.attach(9);
  Serial.begin(115200);
}

void loop() {
  for (int a = 0; a <= 180; a += 10) {
    monServo.write(a);
    delay(100);
  }
  // ... lecture capteurs, affichage OLED
}
```

Au premier essai, l'Arduino redémarre toutes les 5 secondes au moment où le servo bouge — la chute de tension sur le 5 V régulé est trop forte. **Solution** : alimenter le servo directement par la batterie 7,4 V via un régulateur 5 V externe dédié, en gardant GND commun avec l'Arduino. Ou réduire la vitesse de balayage du servo. Voir [[arduino-servomoteur|piloter un servomoteur]] pour les bonnes pratiques d'alimentation servo.

## Pièges

**Brancher 5 V sur Vin (ou jack).** Le régulateur LM7805 a besoin d'au moins ~7 V à l'entrée pour fournir 5 V stables (chute de tension de ~2 V). Brancher 5 V sur Vin donne une tension régulée à ~3 V, l'Arduino devient instable. Si on veut alimenter en 5 V, brancher sur la broche `5V` directement (en bypass du régulateur).

**Brancher 12 V (ou plus) sur la broche 5 V.** Destruction immédiate du microcontrôleur (l'alimentation passe direct, le LM7805 ne protège pas). Trois fois plus que le maximum supporté.

**USB d'un PC à 500 mA pour des actionneurs.** Symptôme : l'Arduino reboote quand on active un actionneur. Diagnostic à faire **avant** de chercher un bug logiciel. Solution : alimentation externe.

**Polarité jack DC inversée.** La norme Arduino est positif au centre, négatif en couronne. Un adaptateur 9 V à polarité inversée n'allume pas l'Arduino (ou pire, abîme la carte si la protection inverse a été shuntée). Vérifier le symbole sur l'adaptateur.

**Pic d'émission Wi-Fi non anticipé.** Un ESP-01 ou un module Wi-Fi tire des pointes courtes (1-10 ms) à 300 mA pendant l'émission, pas visibles au multimètre. Un condensateur de découplage 470 µF à 1000 µF près du module absorbe la pointe et stabilise l'alimentation. Voir notes de l'ESP-01.

**GND non commun entre Arduino et charge externe.** Quand on a deux alimentations (une pour l'Arduino, une pour les moteurs), GND doit être *commun*. Sinon les signaux logiques n'ont pas la même référence, le système ne marche pas, et selon le différentiel des courants peuvent passer là où ils ne devraient pas.

**Régulateur Uno R3 qui chauffe.** Le LM7805 dissipe (Vin − 5 V) × I_total. À 12 V en entrée et 500 mA en sortie : (12-5) × 0,5 = 3,5 W — assez pour atteindre 80 °C en quelques minutes sans dissipateur. Symptôme : odeur, chaleur palpable. Réduire la tension d'entrée à 7-9 V (chute moindre, dissipation plus basse) ou alimenter en 5 V régulés via la broche 5 V.

## Cas particulier — Alimentation par batterie pour projets autonomes

Trois pistes selon contraintes :

- **Pile 9 V (PP3)** : 500-600 mAh, peu adapté aux projets gourmands (autonomie ridicule). Acceptable pour démos courtes.
- **Pile de piles AA en série** (4× 1,5 V = 6 V, ou 6× 1,5 V = 9 V) : 1500-3000 mAh. Bon rapport coût/autonomie pour projets école.
- **Batterie LiPo 7,4 V** (2 cellules en série) : 1000-5000 mAh, mais nécessite chargeur dédié et précautions (équilibrage des cellules, protection contre la sur-décharge).

Voir [[deep-sleep|deep sleep]] et [[arduino-deep-sleep|deep sleep sur Arduino]] pour économiser sur batterie quand les périodes d'inactivité sont longues.

## Raccrochage projet

- **Étape 4 de la [[concept|phase de concept]]** — l'EAT et l'arbitrage entre architectures intègrent l'alimentation comme critère (USB vs autonome, démo branchée vs démo mobile).
- **Étape 2 de la [[preuve-de-concept|phase de preuve de concept]]** — au premier ajout d'un actionneur de puissance, estimer la consommation et redimensionner la PSU si nécessaire.
- **Étape 4 de la [[dossier-technique|phase de dossier technique]]** — la PSU finale du démonstrateur (avec marge de sécurité) fait partie du BOM.
- **Étape 2 de la [[integration-et-tests|phase d'intégration et tests]]** — vérification que la tension 5 V tient en charge sur le système intégré (mesure au multimètre, observation à l'oscilloscope).

L'alimentation est l'élément le plus sous-estimé d'un projet débutant — ignoré quand tout va bien, accusé à tort quand un autre bug survient. Le mesurer au multimètre au premier symptôme suspect évite des heures d'errance.

## Voir aussi

- [[arduino|Arduino]] — hub des tutoriels Arduino
- [[arduino-prise-en-main|Prise en main d'Arduino]] — où l'alimentation USB est la première vue
- [[arduino-deep-sleep|Deep sleep sur Arduino]] — réduire la consommation pour autonomie batterie
- [[arduino-shield|Utiliser un shield]] — l'empilage qui peut doubler la consommation totale
- [[niveaux-de-tension|Niveaux de tension]] — pour la cohabitation 3,3 / 5 V
- [[lire-une-datasheet|Lire une datasheet]] — pour repérer les courants nominaux des composants
