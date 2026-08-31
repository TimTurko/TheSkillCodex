- **`.length` d'une chaîne JS compte des unités UTF-16, pas des octets — et une
  ligne d'outil qui dit « octets » peut compter des caractères.**
  *Née le 30/08 (séance 12), quatrième chute du même mode d'échec en une
  séance.* `inserer-pilotage.mjs` affiche `+N octets` en calculant
  `remplacant.length - ancre.length`. **Sur du français accentué, l'écart est
  systématique** : `+7631` prédits contre **`+7356`** affichés, `+1440` contre
  **`+1381`**, `+147` contre **`+130`**, `+2816` contre **`+2738`** — quatre
  termes sur quatre, toujours dans le même sens.
  ✅ *La prédiction des **tailles finales**, elle, tombe à l'octet — **594 016**
  et **218 392** — parce que l'écriture, elle, passe par `Buffer.byteLength`.
  **Le même outil compte juste là où il écrit et faux là où il commente.***
  ⚠ **Règle qui en sort, et elle est mécanique** : *dans ce dépôt, un volume se
  mesure par `Buffer.byteLength(s, 'utf8')` et jamais par `s.length` ; une
  ligne d'affichage qui dit « octets » se vérifie sur son expression avant
  d'être prédite.* *Éprouvée 0/N, contre elle.*
- **Une prédiction de MONDE adossée à une mesure du jour se comporte comme une
  prédiction d'INSTRUMENT — et c'est ce qui déplace le taux, pas la qualité du
  travail.**
  *Née le 30/08 (séance 12), deuxième point de mesure de la coupe née à la
  séance 11.* Séance 12 : **instrument 95 sur 100, 95,0 %** ; **monde 13 sur
  16, 81,3 %**. La forme de la coupe tient — l'instrument reste au-dessus —
  **mais le taux de monde est le double des 41,9 % de la séance 11**.
  ✅ **Le motif est lisible et il est méthodologique** : presque toutes les
  prédictions de monde de la séance 12 sont **adossées à une reconnaissance
  mesurée le soir même**. Le seau de glose a été estimé par un script jetable
  avant d'être écrit dans l'outil, et il est tombé **juste aux huit termes** ;
  les fourchettes publiées autour de ces huit valeurs n'ont **rien couvert**.
  ⚠ *À l'inverse, les trois réfutations de monde de la séance portent toutes
  sur des valeurs **non reconnues d'abord** : le `+2` de `hors perimetre`, et
  le « au moins une ligne en sens inverse dans chaque langue » qui supposait
  une symétrie de population que le corpus n'a pas.*
  ⚠ **Ce que la règle ne dit pas** : *si une reconnaissance préalable était
  toujours possible, la prédiction de monde n'aurait plus d'objet. Elle ne
  l'est pas — la séance 11 interrogeait un corpus dont aucun instrument ne
  rendait la réponse. **La coupe utile n'est donc peut-être pas instrument /
  monde mais reconnu / non reconnu**, et il faudra un troisième point de
  mesure pour trancher.* *Éprouvée 1/N.*

