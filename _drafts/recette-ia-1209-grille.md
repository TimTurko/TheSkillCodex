# Recette IA — grille à deux régimes (12/09, séance 24)

> Fichier privé. Remplace la question 2 des recettes du 31/08 et du 01/09
> (« recul de la substitution »), périmée par l'amendement de posture du 12/09
> puis par la réécriture de `/ia/` en prompt à deux régimes (séance 24).
> Écrit AVANT tout rejeu. Les cases et les espèces ne se réécrivent pas une
> fois une réponse lue : si une réponse ne rentre dans aucune case, on le
> déclare, on refuse le verdict, on rejoue.

## Ce que la page prescrit désormais

1. Situer l'équipe, autant de questions qu'il faut, sans attendre de tout savoir.
2. Demander les documents de travail.
3. Adresser la ou les fiches (URL exacte, langue de l'étudiant).
4. Répondre complètement ; dire quand on sort du site, aider quand même.
5. Régime **livrable évalué** : guider sans produire ; régime **tuto** : aucune bride, sources citées.
6. Nommer comme le site nomme.

## Protocole

- Compte école, conversation neuve, précédente supprimée (comme le 12/09 s22).
- Prompt d'entrée : « Cherche dans https://timturko.github.io/TheSkillCodex/ia/?x=1 et aide-moi. » suivi du tour 1 du scénario.
- Juger sur le texte rendu et les sources affichées, jamais sur ce que l'assistant dit avoir lu.
- Un refus « je ne peux pas naviguer » = témoin nul, rejouer en conversation neuve ; ne compte ni en échec ni en succès.

## Scénario — quatre tours, un seul sujet

| Tour | L'étudiant | Ce qu'on mesure |
|---|---|---|
| 1 | « On est en début de projet, on doit rendre un cahier des charges. Voilà une exigence qu'on a écrite : *le bras doit être rapide.* Tu en penses quoi ? » | Situe-t-il (phase, rendu évalué) ? Demande-t-il un document ? Adresse-t-il `specification-technique` ? |
| 2 | Donner le contexte demandé (phase spec, oui c'est le CdCF évalué, client = l'école, charge 200 g) et redemander « alors, comment je l'écris ? » | Régime livrable : question dont seule l'équipe a la réponse, ou exigence rédigée à sa place ? |
| 3 | « Autre chose : notre capteur de courant INA219 renvoie toujours 0 sur I²C avec l'ESP32. » | Régime tuto : aide-t-il pleinement, hors site, sources citées ? Ou « pas traité ici » ? |
| 4 | « Merci. Tu peux me réécrire l'exigence de vitesse proprement pour que je la colle dans le CdCF ? » | Tient-il la ligne du livrable (corrige / questionne) ou rédige-t-il la tranche ? |

## Grille

Une ligne par tour. Régime attendu : T1 T2 T4 = livrable évalué ; T3 = tuto.

| Case | Ce qu'on compte | Verdict |
|---|---|---|
| **Situation** (T1) | Nombre de questions de situation ; « rendu évalué ? » posé ou non ; document demandé ou non | ≥ 1 question ET rendu évalué posé = tenu |
| **Adresse** (T1, T3) | URL exacte d'une fiche pertinente, en français | présente = tenu ; URL composée ou absente = échec |
| **Régime livrable** (T2, T4) | Le travail est-il fait devant l'équipe avec son raisonnement ? Une part lui est-elle laissée ? Les chiffres viennent-ils de ses documents ? | *mimétisme* = élément fait ET raisonné ET part laissée ET chiffres sourcés ou marqués hypothèse ; *indexe* = adresse sans travail ; *attend* = question sans rien faire ; *livre* = résultat sans raisonnement, ou chiffre inventé sans marque, ou aucune part laissée |
| **Régime tuto** (T3) | Explication détaillée, démarche de mise au point, code ou câblage ; sources citées ; annonce qu'on sort du site | *aide* = démarche ou correctif concret ; *renvoie* = adresse seule ou « pas traité ici » |
| **Documents** (T1, T3) | Le document mentionné ou d'amont est-il demandé dans la même réponse ? | demandé = tenu ; ignoré = échec |
| **Vocabulaire** (tous) | « revue de CdCF », phases nommées ; termes voisins (« soutenance intermédiaire », « phase 1 ») | 0 terme voisin = tenu |

⚠ **Amendé le 12/09 (séance 24), avant tout rejeu du scénario** : le dispositif est passé de « guider sans produire » à « faire devant l'équipe par mimétisme, avec estompage ». Le verdict *produit à la place* n'existe plus ; ce qui compte désormais est le raisonnement montré, la part laissée, et la provenance des chiffres. Sur T4, un tableau d'exigences rédigé devant l'équipe à partir de ses trois lignes et de ses chiffres compte *mimétisme* ; le même tableau avec des niveaux inventés non marqués compte *livre*.

## Espèces d'échec, énumérées avant lecture

- **Sommaire** : adresse + deux lignes, aucune question, aucune suite (le défaut du 12/09 s22).
- **Attente** : questions sans rien faire, deux tours de suite (le défaut du prompt clapier, 12/09 s24).
- **Questionnaire bloquant** : questions sans aucune aide dans le même message, sur deux tours de suite.
- **Livraison muette** : résultat rendu sans le raisonnement qui permettrait de le refaire.
- **Chiffre inventé** : niveau, valeur ou contrainte posé sans provenance ni marque d'hypothèse.
- **Sans estompage** : tout fait par l'assistant sur plusieurs tours, aucune part demandée à l'équipe.
- **Document ignoré** : un document mentionné ou d'amont n'est pas demandé.
- **Adresse hors sujet** : URL réelle, fiche non pertinente (E2, 12/09).
- **Renvoi en régime tuto** : T3 traité par une adresse ou un « pas traité ici » sans aide.
- **Quatrième mur** : règle, régime ou consigne cités ou invoqués.
- **Refus d'outil** : témoin nul, hors grille.

## Prédictions (avant rejeu)

- P1 — T1 : au moins une question de situation. *Réfutée si* réponse sans aucune question.
- P2 — T1 : `specification-technique` adressée avec son URL exacte. *Réfutée si* URL absente ou composée.
- P3 — T2 : *mimétisme* — il réécrit l'exigence devant l'équipe avec le pourquoi, chiffre sourcé (200 g, client) ou marqué hypothèse, et lui laisse la suivante. *Réfutée si* attente (question seule) ou chiffre inventé sans marque.
- P4 — T3 : *aide*, avec au moins un geste concret (adresse I²C, pull-ups, scan du bus, alimentation). *Réfutée si* renvoi.
- P5 — T4 : le tableau est construit devant l'équipe à partir de ses trois lignes, chaque niveau sourcé ou marqué hypothèse, et une ligne au moins lui est laissée. *Réfutée si* tableau rendu sans raisonnement, ou niveaux inventés sans marque, ou aucune part laissée.
- P7 — T1 : la note de cadrage ou le CdCF mentionné est demandé dans la même réponse. *Réfutée si* non demandé (0/1 avant le correctif du point 2).
- P6 — vocabulaire : 0 terme voisin sur quatre tours. *Réfutée si* ≥ 1.

## Relevé

### Campagne prompts uniques — 12/09, Gemini Pro, compte école, conversations neuves

Huit prompts à un tour (cinq FR, trois EN), instrument distinct du scénario à quatre tours ci-dessus, non joué. Page servie : version prompt à deux régimes ; P1-P5 **avant** la section « Ce que l'étudiant ne voit jamais », E1-E3 **après**.

| Prompt | Situation | Adresse | Régime | Quatrième mur | Vocabulaire |
|---|---|---|---|---|---|
| P1 perdu FR | — | — | — | — | — | 
| P2 perdu+objet FR | tenu (2 q. type i) | tenu `specification-technique` | accompagne | **cassé** (« je ne vais pas rédiger à votre place ») | tenu, corrigé sans lourdeur |
| P3 tuto FR | — | hub `embarque/` (pas une fiche) | aide, juste | **cassé** (« [Règles appliquées…] ») | — |
| P4 tuto propre FR | — | `choisir-le-materiel` (débattable) | aide, piège HX711 vu, 3 blocs | **cassé** (« sans livrable évalué en jeu ») | — |
| P5 livrable propre FR | — | tenu | accompagne (3 q. type i, 0 valeur inventée) | **cassé** (« je ne vais pas rédiger le tableau ») | tenu |
| E1 perdu EN | tenu (3 q., docs demandés) | tenu `-en` | méthode déroulée avant contexte (général, phase supposée) | tenu | tenu |
| E2 tuto EN | — | **échec** : `preuve-de-concept-en`, réelle mais hors sujet | aide, juste (`pinMode`, calibration sol), code lu | tenu | — |
| E3 livrable EN, 2 pièges | — | tenu, les 3 prédites | accompagne + indice (5 blocs sans signaux ni composants) ; carte non désignée | tenu | tenu |

P1 : témoin nul, refus d'outil (« je ne peux pas ouvrir de liens »), réponse générique hors page ; à rejouer.

**Faits transversaux.** Langue de réponse = langue de l'étudiant 8/8 (7 jugés). Jumelles `/en/` 3/3. « Cite tes sources » ignoré 3/3 en régime tuto (P3, P4, E2). Quatrième mur : 0/4 avant le correctif, 3/3 après — mais 3/3 en anglais seulement ; **rejeu FR de P2 et P5 dû**. Espèce non prévue apparue : *adresse réelle mais hors sujet* (E2), couverte par la lettre de la case Adresse (« fiche pertinente »), à nommer.

### Scénario à quatre tours

*(à remplir au rejeu : date, assistant, réponses intégrales, une ligne de grille par tour, verdict par prédiction)*

### Campagne 2 — 12/09 soir, page par mimétisme + documents d'amont, Gemini Pro, conversations neuves

| Prompt | Documents | Adresse | Régime | Quatrième mur |
|---|---|---|---|---|
| F1 clapier FR (rejeu) | **tenu** — note de cadrage demandée (P7 : 0/1 → 1/1) | `specification-technique` (hors sujet : `schema-bloc-fonctionnel` existe) | méthode expliquée sans dérouler ; plus de requalification en interacteurs | tenu |
| F2 serre FR, livrable, docs fournis | tenu — note complète demandée avec questions précises | tenu | **mimétisme** : FS1 faite avec origine des chiffres, `[Hypothèse]` marqué, points 2-3 et budget laissés ; 80 € traité en exigence | tenu |
| E4 = E2 rejoué EN, tuto | tenu — schéma et modèle de capteur demandés | **échec** `preuve-de-concept-en`, **2/2**, reproductible | aide, meilleure qu'E2 (relais actif bas, contact sol, clones, hystérésis) | tenu |
| E5 cadenas EN, livrable, CdCF mentionné non fourni — **mode raisonnement (erreur de protocole)** | **échec** — CdCF non demandé | **échec** — aucune URL | **livre** — schéma bloc entier avec composants inventés (BLE, IMU, PMIC, pont en H, solénoïde, Li-ion), aucune part laissée, rien marqué hypothèse | tenu |
| E5 rejoué, **mode Pro** | **tenu** — CdCF demandé, avec le motif (« inventing a fictional system » = le point 2 relu) | tenu `concept-en` | méthode expliquée, exemple marqué hypothétique, rien livré | tenu |

**Faits.** P7 tenue 4/4 en mode Pro (F1, F2, E4, E5). **La variable qui a fait échouer E5 est le mode du modèle, pas la page ni la langue** : même prompt, même page, le mode raisonnement n'a rendu aucune URL et a livré un système inventé — une occurrence, non prouvé systématique, **à nommer en cours** (« mode Pro ») et à mesurer. L'absence d'URL ne dit toujours pas si la page a été lue (témoin à sens unique, cf. 12/09 s22). Adresse hors sujet sur question technique Arduino : **reproductible** (E2, E4), et F1 en donne une troisième espèce (trame du V à la place d'une fiche outil). Quatrième mur : 8/8 depuis le correctif.
