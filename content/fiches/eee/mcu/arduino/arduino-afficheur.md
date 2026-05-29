---
title: Afficheur LCD / OLED
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
prerequis:
  - arduino-i2c
  - arduino-bibliotheques
aa: []
draft: false
---

Un **afficheur** permet à un projet embarqué de présenter ses mesures, son état ou son menu sans passer par un PC. Deux familles cohabitent dans l'écosystème Arduino : **LCD à caractères** (16×2 ou 20×4 caractères, technologie historique) et **OLED graphiques** (128×64 pixels sur SSD1306, plus modernes). Cette fiche couvre les deux via leur version la plus pédagogique — branchées en I2C, qui n'occupe que deux broches.

## À quoi ça sert ?

L'afficheur intervient au moment où un projet quitte le banc d'essai branché au PC pour devenir autonome :

- **Démonstration** — montrer les mesures du capteur en direct sur le boîtier, sans ordinateur.
- **Interface utilisateur** — menu, choix de mode, paramétrage.
- **Indicateur d'état** — heure, niveau de batterie, présence d'erreur.
- **Datalogger embarqué** — voir les dernières valeurs sans ouvrir un fichier.

Comparaison rapide :

| Type | Coût | Lisibilité | Graphique | Consommation |
|---|---|---|---|---|
| LCD 16×2 I2C (HD44780 + PCF8574) | 3-5 € | excellente même en plein soleil | aucun | ~20-50 mA (rétroéclairage allumé) |
| OLED 0,96″ I2C SSD1306 (128×64) | 3-7 € | très contrastée, faible angle | ✅ | ~20 mA |
| TFT 2,4″ SPI (ILI9341) | 8-15 € | couleur, lent | ✅ | ~80-150 mA |
| E-paper 2,9″ SPI | 15-30 € | léger consommation nulle hors refresh | ✅ | refresh lent (2 s) |

## Procédure pas à pas

Quatre étapes : choisir l'afficheur, câbler en I2C, installer la bibliothèque, écrire le code.

### 1. Choisir l'afficheur

Pour un premier projet école : **OLED SSD1306 128×64 I2C**. Petit, lisible, graphique simple, ~5 €.

Pour de l'affichage texte robuste, avec lecture facile à distance : **LCD I2C 16×2** (étiquette PCF8574 sur l'arrière). Pas de graphique mais texte parfait, et plus grand.

### 2. Câbler en I2C

Identique pour les deux types — 4 fils.

| Module | Arduino Uno |
|---|---|
| VCC | 5 V (ou 3,3 V pour certains OLED) |
| GND | GND |
| SDA | A4 |
| SCL | A5 |

L'OLED SSD1306 grand public accepte 3,3 V et 5 V (régulateur intégré). Vérifier sur l'étiquette du module. Le LCD I2C est conçu pour 5 V uniquement.

Prendre capture d'écran ou photo de *un afficheur OLED SSD1306 0,96″ I2C câblé sur les broches A4/A5 d'une carte Arduino Uno, avec un texte affiché à l'écran*.

### 3. Installer la bibliothèque

**Pour OLED SSD1306** : *Adafruit SSD1306* via le gestionnaire de bibliothèques. Installer également *Adafruit GFX Library* (dépendance, propose les primitives graphiques) et *Adafruit BusIO* (dépendance bus).

**Pour LCD I2C** : *LiquidCrystal I2C* (par Frank de Brabander) via le gestionnaire. Plusieurs forks existent — celui-ci est fiable. Alternative : *hd44780* (par Bill Perry), plus moderne mais à syntaxe légèrement différente.

### 4. Écrire le code

**OLED SSD1306** :

```cpp
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

#define LARGEUR 128
#define HAUTEUR 64
Adafruit_SSD1306 ecran(LARGEUR, HAUTEUR, &Wire, -1);  // -1 = pas de broche reset

void setup() {
  Serial.begin(115200);
  if (!ecran.begin(SSD1306_SWITCHCAPVCC, 0x3C)) {  // 0x3C trouvé au scanner I2C
    Serial.println("OLED introuvable");
    while (1);
  }
  ecran.clearDisplay();
  ecran.setTextColor(SSD1306_WHITE);
  ecran.setTextSize(1);
  ecran.setCursor(0, 0);
  ecran.println("Hello !");
  ecran.println("Ligne 2");
  ecran.display();
}

void loop() {
  ecran.clearDisplay();
  ecran.setCursor(0, 0);
  ecran.print("Temps : ");
  ecran.print(millis() / 1000);
  ecran.println(" s");
  ecran.display();
  delay(500);
}
```

`ecran.display()` est obligatoire — la bibliothèque met à jour un buffer interne, et seul cet appel l'envoie réellement à l'écran. Oublier `display()` = écran qui reste vide.

**LCD I2C 16×2** :

```cpp
#include <Wire.h>
#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27, 16, 2);  // adresse, colonnes, lignes

void setup() {
  lcd.init();
  lcd.backlight();
  lcd.setCursor(0, 0);
  lcd.print("Hello LCD !");
  lcd.setCursor(0, 1);
  lcd.print("Ligne 2");
}

void loop() {
  lcd.setCursor(0, 1);
  lcd.print("Temps : ");
  lcd.print(millis() / 1000);
  lcd.print(" s   ");  // espaces pour effacer les chiffres précédents
  delay(500);
}
```

Le LCD n'a pas de buffer — chaque `lcd.print()` apparaît immédiatement. Mais il **ne réécrit pas les pixels au-delà du texte** — pour effacer un ancien affichage, écrire des espaces ou appeler `lcd.clear()` (lent, à utiliser parcimonieusement).

## Exemple — Thermomètre OLED avec icône thermomètre

Cas complet : lire la température sur un BMP280 (voir [[arduino-i2c|I2C sur Arduino]]), l'afficher sur l'OLED en gros chiffres avec une icône.

**Câblage** : BMP280 + OLED tous deux en I2C sur A4/A5 (le bus supporte plusieurs devices à adresses différentes — BMP280 = `0x76`, OLED = `0x3C`).

```cpp
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include <Adafruit_BMP280.h>

#define LARGEUR 128
#define HAUTEUR 64
Adafruit_SSD1306 ecran(LARGEUR, HAUTEUR, &Wire, -1);
Adafruit_BMP280 bmp;

void setup() {
  Serial.begin(115200);
  ecran.begin(SSD1306_SWITCHCAPVCC, 0x3C);
  bmp.begin(0x76);
  ecran.setTextColor(SSD1306_WHITE);
}

void loop() {
  float t = bmp.readTemperature();

  ecran.clearDisplay();
  ecran.setTextSize(1);
  ecran.setCursor(0, 0);
  ecran.println("Temperature");

  ecran.setTextSize(3);  // gros caractères
  ecran.setCursor(10, 20);
  ecran.print(t, 1);  // 1 décimale
  ecran.print(" C");

  ecran.display();
  delay(500);
}
```

Souffler sur le BMP280 — la température affichée monte de 1-2 °C par seconde. Démo simple, visuellement satisfaisante, qui combine deux modules I2C sur un même bus.

## Pièges

**Adresse I2C incorrecte.** Le SSD1306 est presque toujours en `0x3C`, parfois en `0x3D`. Le LCD est en `0x27` ou `0x3F` selon le module. **Toujours lancer un scanner I2C** (voir [[arduino-i2c|I2C sur Arduino]]) avant de mettre une adresse en dur.

**Bibliothèque obsolète ou incompatible.** Les bibliothèques SSD1306 sont nombreuses (Adafruit, U8g2, SH1106 pour les variants). Si rien ne s'affiche, vérifier qu'on utilise bien la bibliothèque correspondant au contrôleur de l'écran (SSD1306 vs SH1106 — étiquette sur le module).

**OLED sans appel à `display()`.** La bibliothèque Adafruit dessine dans un buffer interne ; seul `display()` envoie au matériel. Oublier l'appel = écran blanc malgré le code qui semble correct.

**LCD qui n'efface pas l'ancien contenu.** Le LCD écrit caractère par caractère sans effacer le reste. Si on affiche `"42"` puis `"7"`, on voit `"72"` — il faut écrire `"7 "` (avec espace) ou appeler `lcd.clear()`.

**Texte trop grand pour l'écran.** Sur OLED 128×64 en `setTextSize(3)`, un caractère fait ~18 pixels de large × 24 de haut — soit 7 caractères max par ligne. Au-delà, le texte sort à droite ou écrase l'affichage. Calibrer la taille selon la longueur attendue.

**Plusieurs devices I2C avec mêmes pull-ups.** Le LCD I2C et certains OLED intègrent leurs pull-ups SDA/SCL. Sur un bus avec plusieurs modules à pull-ups, la résistance équivalente devient trop faible — le bus arrête de fonctionner. Désactiver les pull-ups sur tous les modules sauf un.

**Backlight LCD qui consomme trop.** Le rétroéclairage d'un LCD I2C 16×2 tire ~50 mA. Sur un projet alimenté par batterie ou USB d'un PC déjà bien chargé, ça compte. `lcd.noBacklight()` éteint le rétroéclairage et économise.

**Rafraîchissement lent qui scintille.** Effacer tout l'écran à chaque frame (`clearDisplay()` + tout redessiner) à 50 Hz est OK. À plus, ça peut scintiller — préférer redessiner uniquement la zone qui a changé.

## Cas particulier — Polices personnalisées et caractères accentués

Les caractères accentués (`é`, `è`, `à`, `ç`) ne sont **pas dans la police par défaut** de la bibliothèque Adafruit GFX. Trois options :

- Remplacer mentalement : `"Temperature"` à la place de `"Température"`.
- Importer une police étendue (`fonts/` dans Adafruit GFX, polices avec accents).
- Utiliser **U8g2** — bibliothèque alternative qui supporte natively UTF-8 et propose des centaines de polices.

Pour un projet francophone qui doit afficher proprement les accents, U8g2 est l'option recommandée.

## Raccrochage projet

- **Étape 3 de la [[preuve-de-concept|phase de preuve de concept]]** — premier affichage embarqué pour observer les mesures sans PC.
- **Étape 3 de la [[integration-et-tests|phase d'intégration et tests]]** — l'afficheur intégré au démonstrateur sert d'IHM pour les tests pyramidaux (mode courant, valeurs réelles).
- **Étape 1 de la [[mise-en-service|phase de mise en service]]** — l'afficheur est le canal principal d'information à l'utilisateur final, à valider en condition.

Un afficheur, même simple, transforme un projet du *« regarder le moniteur série »* en *« voir l'état directement »* — saut qualitatif en démonstration qui justifie largement les ~5 € de matériel.

## Voir aussi

- [[arduino|Arduino]] — hub des tutoriels Arduino
- [[arduino-i2c|I2C sur Arduino]] — prérequis (câblage bus)
- [[arduino-bibliotheques|Utiliser une bibliothèque]] — prérequis (Adafruit GFX, LiquidCrystal_I2C)
- [[arduino-spi|SPI sur Arduino]] — pour écrans TFT et e-paper
