---
title: Wi-Fi avec l'ESP32
type: tuto
phases:
  - preuve-de-concept
tags:
  - eee
  - tuto
  - esp32
prerequis:
  - esp32
  - esp32-prise-en-main
aa:
  - RA-PROJET-C03-3/PROJ/5
draft: false
---

Le **Wi-Fi** est l'argument décisif de l'ESP32 : un objet connecté sans module radio externe. Avec quelques lignes, la carte rejoint un réseau (mode **station**) ou crée le sien (mode **point d'accès**), puis échange des données — interroger une API, exposer une page web de pilotage, publier des mesures. C'est une capacité que l'Arduino classique n'a pas, et le cœur de ce que la famille ESP32 apporte. Le concept général de liaison sans fil est traité dans [[techno-sans-fil|technologies sans fil]] et [[wifi|Wi-Fi]] ; cette fiche en donne l'incarnation ESP32.

## À quoi ça sert ?

Le Wi-Fi de l'ESP32 ouvre trois usages typiques en projet :

- **Relier le système à Internet** — récupérer l'heure, une météo, une consigne depuis une API ; envoyer des mesures vers un serveur ou un tableau de bord. La carte est *client*.
- **Offrir une interface sans écran** — l'ESP32 héberge une petite page web ; on pilote le système et on lit son état depuis un navigateur, téléphone ou PC. La carte est *serveur*.
- **Se passer d'infrastructure** — en mode point d'accès, l'ESP32 crée son propre réseau auquel on se connecte directement, sans box ni routeur (configuration sur le terrain, démonstration).

> [!warning]
> **Wi-Fi actif = ADC2 indisponible.** Dès que le Wi-Fi tourne, les broches du convertisseur ADC2 ne lisent plus rien. Tout capteur analogique d'un projet connecté doit être sur **ADC1** (`GPIO32-39`) — voir [[esp32-gpio|configurer les GPIO]].

## Deux modes : station et point d'accès

Tout part de la bibliothèque `WiFi.h`, incluse dans le cœur ESP32.

- **Station (STA)** — l'ESP32 se connecte à un réseau existant (votre box). C'est le mode courant pour accéder à Internet.
- **Point d'accès (AP)** — l'ESP32 crée un réseau auquel d'autres appareils se connectent. Pratique pour une configuration locale.

![Les deux modes Wi-Fi de l'ESP32 : en station (STA) la carte rejoint une box existante ; en point d'accès (AP) elle crée son propre réseau auquel un téléphone ou un PC se connecte|640](/ressources/img/esp32-wifi/sta-vs-ap.svg)

```cpp
#include <WiFi.h>

const char* ssid = "MonReseau";
const char* motDePasse = "********";

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, motDePasse);            // mode station
  Serial.print("Connexion");

  int tentatives = 0;
  while (WiFi.status() != WL_CONNECTED && tentatives < 20) {  // 20 x 500 ms = 10 s max
    delay(500);
    Serial.print(".");
    tentatives++;
  }
  Serial.println();

  if (WiFi.status() != WL_CONNECTED) {     // echec : on le signale, on ne fige pas
    Serial.println("Echec de connexion - verifier SSID et mot de passe");
    return;
  }
  Serial.print("Connecte, IP = ");
  Serial.println(WiFi.localIP());          // adresse attribuée par la box
}

void loop() {}
```

L'attente est **bornée** : au bout d'une dizaine de secondes, la carte renonce et le dit, au lieu de rester figée sur un SSID mal tapé. Les exemples suivants gardent la forme courte pour ne pas noyer leur sujet — en projet, reprendre ce motif borné.

Pour le mode **point d'accès**, deux lignes suffisent : la carte crée le réseau au lieu de le rejoindre.

```cpp
#include <WiFi.h>

void setup() {
  Serial.begin(115200);
  WiFi.softAP("ESP32-Demo", "motdepasse");   // reseau cree par la carte
  Serial.print("Point d'acces actif, IP = ");
  Serial.println(WiFi.softAPIP());           // 192.168.4.1 par defaut
}

void loop() {}
```

On rejoint le réseau `ESP32-Demo` depuis un téléphone, puis on ouvre `192.168.4.1` — pratique en démonstration sur table, sans box ni routeur. Le mot de passe doit faire **au moins 8 caractères** : en dessous, `softAP()` échoue et le réseau n'apparaît pas.

> [!warning]
> **L'ESP32 (hors C5) est en 2,4 GHz seulement.** Il ne se connecte pas à un réseau diffusé uniquement en 5 GHz. Sur une box bi-bande, vérifier que le 2,4 GHz est actif et que le SSID visé est bien le réseau 2,4 GHz.

## Exemple — Piloter une LED depuis un navigateur

L'usage le plus parlant : l'ESP32 rejoint le réseau, héberge une page web minimale, et pilote une LED selon le lien cliqué. Un téléphone sur le même réseau ouvre l'adresse IP et commande la carte.

*Câblage : LED sur `GPIO16` — voir le montage de [[esp32-gpio|configurer les GPIO]].*

```cpp
#include <WiFi.h>
#include <WebServer.h>

const char* ssid = "MonReseau";
const char* motDePasse = "********";
const int LED = 16;

WebServer serveur(80);   // serveur HTTP sur le port 80

void pageAccueil() {
  String html = "<h1>ESP32</h1>"
                "<p><a href=\"/on\">Allumer</a> | "
                "<a href=\"/off\">Eteindre</a></p>";
  serveur.send(200, "text/html", html);
}

void allumer() {
  digitalWrite(LED, HIGH);
  serveur.send(200, "text/html", "LED allumee. <a href=\"/\">Retour</a>");
}

void eteindre() {
  digitalWrite(LED, LOW);
  serveur.send(200, "text/html", "LED eteinte. <a href=\"/\">Retour</a>");
}

void setup() {
  Serial.begin(115200);
  pinMode(LED, OUTPUT);

  WiFi.begin(ssid, motDePasse);
  while (WiFi.status() != WL_CONNECTED) { delay(500); Serial.print("."); }
  Serial.print("\nOuvrez http://");
  Serial.println(WiFi.localIP());   // l'URL à taper dans le navigateur

  serveur.on("/", pageAccueil);     // associer chemins -> fonctions
  serveur.on("/on", allumer);
  serveur.on("/off", eteindre);
  serveur.begin();
}

void loop() {
  serveur.handleClient();           // traiter les requêtes en continu
}
```

Téléversez, ouvrez le [[esp32-serie|moniteur série]] (115200) pour lire l'adresse IP affichée, puis tapez `http://<cette IP>` dans un navigateur du même réseau. La page propose deux liens qui allument et éteignent la LED. On a une **interface de pilotage sans écran ni application** en une cinquantaine de lignes.

Prendre capture d'écran de *le navigateur affichant la page « ESP32 » avec les liens Allumer / Eteindre, et le moniteur série montrant l'adresse IP attribuée*.

## Pièges

**Capteur analogique muet en Wi-Fi.** Une mesure `analogRead` qui devient nulle dès la connexion : la broche est sur ADC2. Migrer le capteur sur ADC1 (`GPIO32-39`).

**Réseau 5 GHz.** L'ESP32 (sauf C5) ne voit pas un SSID diffusé en 5 GHz uniquement. Activer/cibler le 2,4 GHz.

**Boucle de connexion infinie.** Le `while (WiFi.status() != WL_CONNECTED)` bloque indéfiniment si le SSID ou le mot de passe est faux. En projet, borner l'attente (compteur + message d'échec) plutôt que de figer la carte.

**Identifiants en clair dans le code.** SSID et mot de passe écrits dans le sketch finissent dans le binaire et dans Git. Pour un livrable, les sortir du code (fichier de configuration non versionné, ou portail de configuration).

**Brown-out à l'émission.** L'émission Wi-Fi appelle des pointes de courant ; sur une alimentation USB faible, la tension chute et la carte redémarre (`Brownout detector was triggered`). Alimentation et câble soignés.

**Page web qui ne répond plus.** Oublier `serveur.handleClient()` dans `loop()`, ou bloquer la boucle avec un `delay` long, gèle le serveur. La boucle doit tourner librement.

## Exercices

> [!question] Exercice 1 — Scanner les réseaux
> Au démarrage, listez au moniteur série tous les réseaux Wi-Fi détectés, avec leur puissance de signal (RSSI). Quelle fonction de `WiFi.h` ?

> [!success]- Corrigé
> `WiFi.scanNetworks()` renvoie le nombre de réseaux trouvés ; on lit ensuite chaque entrée par index.
> ```cpp
> #include <WiFi.h>
>
> void setup() {
>   Serial.begin(115200);
>   WiFi.mode(WIFI_STA);          // mode station pour scanner
>   int n = WiFi.scanNetworks();
>   Serial.print(n);
>   Serial.println(" reseaux :");
>   for (int i = 0; i < n; i++) {
>     Serial.print(WiFi.SSID(i));
>     Serial.print("  ");
>     Serial.print(WiFi.RSSI(i));  // dBm, plus proche de 0 = plus fort
>     Serial.println(" dBm");
>   }
> }
>
> void loop() {}
> ```
> Le RSSI (en dBm, négatif) renseigne sur la portée : ~-50 dBm est excellent, ~-80 dBm est faible.

> [!question] Exercice 2 — Page d'état d'un capteur
> Modifiez l'exemple pour que la page web affiche la valeur d'un capteur analogique (sur `GPIO34`, ADC1) au lieu de piloter une LED. La valeur doit être à jour à chaque rechargement de la page.

> [!success]- Corrigé
> La valeur est lue **dans le gestionnaire de page**, donc relue à chaque requête.
> ```cpp
> #include <WiFi.h>
> #include <WebServer.h>
>
> const char* ssid = "MonReseau";
> const char* motDePasse = "********";
> const int CAPTEUR = 34;          // ADC1
>
> WebServer serveur(80);
>
> void pageAccueil() {
>   int valeur = analogRead(CAPTEUR);          // relu à chaque requête
>   String html = "<h1>Capteur</h1><p>Valeur : ";
>   html += valeur;
>   html += " / 4095</p>";
>   serveur.send(200, "text/html", html);
> }
>
> void setup() {
>   Serial.begin(115200);
>   WiFi.begin(ssid, motDePasse);
>   while (WiFi.status() != WL_CONNECTED) { delay(500); }
>   Serial.println(WiFi.localIP());
>   serveur.on("/", pageAccueil);
>   serveur.begin();
> }
>
> void loop() {
>   serveur.handleClient();
> }
> ```
> Recharger la page dans le navigateur affiche la mesure courante. Pour une mise à jour automatique sans recharger, on ajouterait un rafraîchissement HTML (`<meta http-equiv="refresh">`) ou du JavaScript.

## Cas particulier — La carte comme client (interroger une API)

L'autre direction : l'ESP32 va chercher une donnée sur Internet. La bibliothèque `HTTPClient` fait une requête en quelques lignes.

```cpp
#include <WiFi.h>
#include <HTTPClient.h>

void requete() {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    http.begin("http://exemple.com/api/mesure");  // URL en http simple
    int code = http.GET();                         // > 0 = réponse reçue
    if (code > 0) {
      Serial.println(http.getString());            // corps de la réponse
    }
    http.end();
  }
}
```

Pour une URL **en HTTPS** (la majorité des API publiques aujourd'hui), il faut un client sécurisé (`WiFiClientSecure`) et, en toute rigueur, le certificat du serveur — sujet plus avancé, à voir dans la documentation Espressif. En interne (capteur vers serveur local), le HTTP simple suffit souvent.

## Raccrochage projet

- **Étape 4 de la [[preuve-de-concept|phase de preuve de concept]]** — si le projet est un objet connecté, valider tôt la connexion Wi-Fi et un premier échange (page d'état, publication d'une mesure) lève l'incertitude principale de la PoC. C'est la brique qui justifie souvent le choix de l'ESP32 plutôt qu'un Arduino.
- **Interface d'exploitation** — une page web hébergée par la carte sert d'IHM de secours ou de configuration sur le terrain, sans développer d'application dédiée.

Sortir les identifiants du code et borner les tentatives de connexion dès le prototype évite de transformer une démo en livrable fragile (mot de passe versionné, carte figée si le réseau change).

## Aller plus loin

- [[techno-sans-fil|Technologies sans fil]] · [[wifi|Wi-Fi]] — le concept, comparé à BLE / Zigbee / LoRa (transverse).
- [[esp32-ble|Bluetooth LE]] — l'autre radio de la famille, pour les liaisons courte portée.
- [Documentation Wi-Fi de l'Arduino-ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/wifi.html) — modes, événements, reconnexion.
- Protocoles applicatifs au-dessus : MQTT (publier/souscrire des mesures), WebSocket (temps réel), bibliothèques `PubSubClient` / `AsyncWebServer`.

## Voir aussi

- [[esp32|ESP32]] — hub des tutoriels ESP32
- [[esp32-prise-en-main|Prise en main de l'ESP32]] — prérequis (IDE + support + premier téléversement)
- [[esp32-ble|Bluetooth LE]] — radio courte portée de l'ESP32
- [[esp32-gpio|Configurer les GPIO]] — contrainte ADC2 / Wi-Fi
- [[techno-sans-fil|Technologies sans fil]] — panorama des radios (transverse)
