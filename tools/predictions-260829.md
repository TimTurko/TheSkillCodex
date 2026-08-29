# Prédictions — 2026-08-29, pilote Claude Code, lot 6 de `micropython/`

> Sous-règle C116 « exécution directe » (arbitrage Tim (c) du 29/08, séance
> annexe) : les prédictions s'**appendent ici avant chaque bloc d'exécution**,
> l'ordre des appels dans la transcription faisant foi. Une prédiction sans
> nombre ni forme exacte est réputée absente. Chaque gate se ferme sur un
> bilan prédictions/constats.
>
> Horloge d'ouverture lue avant tout lancement : **2026-08-29 14:15:21**
> (lecture d'horloge, pas une mesure du dépôt).

---

## Bloc 1 — `batterie.ps1 -Phase garde` (relevé de référence du cadrage)

Commande prévue :
`powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase garde`

### Étape 0 — autocontrôle ASCII (C122) + sauvegarde C124

1. **Lignes non ASCII dans `batterie.ps1` : 0.** Le script a été relu en
   entier ; ses commentaires sont désaccentués.
2. **`tools/batterie-sortie.txt` existe** (vu au listage du répertoire avant
   toute prédiction) ⇒ ligne « sortie precedente copiee ».
3. **Nom exact de la copie : `tools\batterie-sortie-2908b3.txt`.**
   `ddMM` = `2908` ; `b1` et `b2` existent déjà, premier rang libre = 3.

### Étape 1 — garde de péremption

4. **`date ISO : 2026-08-29`**, **heure entre 14:15:21 et 14:35:00**.
5. **`HEAD git` : `5b0617f`**, commit « seance annexe 29/08: cloture
   (JOURNAL, TODO, BACKLOG, C129), batterie corrigee », daté du
   **2026-08-29**.
6. **`fichiers modifies non commites : 1   (hors sorties batterie : 0)`.**
   ⚠ **Issue innocente nommée d'avance n° 1 — l'auto-comptage de la copie
   C124 du lancement courant.** L'étape 0 vient de créer
   `tools/batterie-sortie-2908b3.txt`, qui est **suivi** (le `.gitignore`
   n'exclut que `tools/batterie-sortie.txt`, chemin exact) ; `git status
   --porcelain` le rend donc en `??`. Le compteur brut monte à 1 **du fait
   du lancement lui-même**. **Le chiffre comparable est « hors sorties
   batterie » = 0**, et c'est le seul à lire. Branche manquée deux fois le
   29/08, nommée ici avant lancement.
7. ⚠ **Issue innocente nommée d'avance n° 2 — l'arbre déjà commité.** Un
   « hors sorties batterie : 0 » est l'**état attendu**, pas un défaut de
   mesure : Tim a passé le bloc de clôture de la séance annexe (HEAD
   `5b0617f`). Zéro fichier modifié **n'est pas** un signal d'alerte ici.
8. **`node` : présent, forme `v<majeur>.<mineur>.<correctif>`**, jamais
   `INTROUVABLE`. Valeur non prédite : jamais mesurée dans cette session,
   et je ne la déduis pas (C118).
9. **Trois fichiers de pilotage listés et trois seulement** — `JOURNAL.md`,
   `conventions.md`, `TODO.md` — aucune ligne de fiche, `-Fiches` et
   `-FichesEn` étant vides en phase `garde`.
10. **Dates de dernière écriture des trois : 2026-08-29, entre 12:00:00 et
    14:15:21.** Ce sont les livrables de la séance annexe close ce matin ;
    aucune ne doit être postérieure à l'horloge d'ouverture. **Toute date
    postérieure à 14:15:21, ou d'un autre jour, vaut ARRÊT.**
11. **Aucune étape 2 ni suivante** : la phase `garde` s'arrête à l'étape 1.
12. **Codes de sortie : 0** aux deux étapes.

### Ce qui vaudrait ARRÊT sur ce bloc

- `hors sorties batterie` different de 0 (fichier modifié inexpliqué).
- `HEAD` different de `5b0617f`.
- mtime d'un fichier de pilotage postérieur à l'horloge d'ouverture.
- `node : INTROUVABLE`.

### Constats du bloc 1 (sortie `batterie-sortie.txt`, horloge 14:16:43)

| # | Prédit | Constaté | Verdict |
|---|---|---|---|
| 1 | non ASCII = 0 | 0 | ✅ |
| 2 | copie faite | « sortie precedente copiee » | ✅ |
| 3 | `batterie-sortie-2908b3.txt` | idem, au caractère près | ✅ |
| 4 | 2026-08-29, 14:15:21–14:35:00 | 2026-08-29 **14:16:43** | ✅ |
| 5 | HEAD `5b0617f`, 2026-08-29 | `5b0617f 2026-08-29 14:13:30 +0200` | ✅ |
| 6 | `1 (hors sorties batterie : 0)` | **`2 (hors sorties batterie : 1)`** | ❌ |
| 7 | arbre commité = état attendu | confirmé (aucune modif de contenu) | ✅ |
| 8 | node présent, `v<M>.<m>.<c>` | **`v24.15.0`** | ✅ |
| 9 | 3 lignes de pilotage, 0 fiche | 3 et 3 seulement | ✅ |
| 10 | pilotage du 2026-08-29, avant 14:15:21 | 14:06:42 / 14:06:54 / 14:07:37 | ✅ |
| 11 | pas d'étape 2 | s'arrête à l'étape 1 | ✅ |
| 12 | codes de sortie 0 | 0 et 0 | ✅ |

⚠ **INCIDENT n° 1 — TROISIÈME BRANCHE INNOCENTE, ET C'EST LE PROTOCOLE
LUI-MÊME QUI LA FABRIQUE.** Prédiction 6 réfutée. `git status --porcelain`
rend **deux** entrées :

```
?? tools/batterie-sortie-2908b3.txt      <- branche n° 1, nommée d'avance
?? tools/predictions-260829.md           <- NON NOMMÉE
```

La sous-règle C116 « exécution directe » **impose** d'écrire
`tools/predictions-AAMMJJ.md` avant chaque bloc ; ce fichier est **suivi**
(aucune ligne du `.gitignore` ne le couvre) ; il est donc **présent dans le
compteur « hors sorties batterie » dès la première prédiction et jusqu'au
commit de clôture**. J'avais nommé les deux branches manquées le 29/08 et
manqué celle que la règle du jour venait de créer. *La garde a été écrite
avant l'artefact qu'elle allait devoir ignorer.*

**Conséquence de dispositif, valable pour tout le reste de la séance :**
**la valeur de référence de « hors sorties batterie » est 1, pas 0**, et elle
monte à mesure que les éditions du lot s'accumulent. Chaque garde suivante
se lit contre le relevé précédent **et contre la liste nominative des
fichiers attendus**, jamais contre le seul chiffre.

**Non bloquant** : aucun fichier de **contenu** n'est modifié, aucune date
d'écriture n'est postérieure à l'horloge, HEAD est celui attendu. **Pas
d'ARRÊT.**

**Relevé de référence du cadrage (C124, copie `batterie-sortie-2908b3.txt`) :**
HEAD `5b0617f` · node `v24.15.0` · JOURNAL 14:06:42 · conventions 14:06:54 ·
TODO 14:07:37 · hors sorties batterie **1** (`predictions-260829.md`).

---

## Bloc 2 — `batterie.ps1 -Phase cadrage -Fiches <les quatre>` (G1)

Commande prévue :

```
powershell -ExecutionPolicy Bypass -File tools/batterie.ps1 -Phase cadrage `
  -Fiches embarque/mcu/micropython/micropython-servomoteur.md,embarque/mcu/micropython/micropython-moteur-pas-a-pas.md,embarque/mcu/micropython/micropython-pid.md,embarque/mcu/micropython/micropython-watchdog.md
```

*Les quatre sources ont été lues en entier avant l'écriture de ces prédictions.*

### Étape 0

13. **non ASCII = 0** ; copie **`tools\batterie-sortie-2908b4.txt`** (b1–b3
    pris, premier rang libre = 4).

### Étape 1 — garde, relue contre le relevé de référence

14. **HEAD inchangé `5b0617f`** ; **node `v24.15.0`** ; **mtimes de pilotage
    identiques au relevé** (14:06:42 / 14:06:54 / 14:07:37, à la seconde).
15. **`fichiers modifies non commites : 3   (hors sorties batterie : 1)`.**
    Décomposition nominative attendue : `batterie-sortie-2908b3.txt` (bloc 1),
    `batterie-sortie-2908b4.txt` (ce lancement), `predictions-260829.md`.
    **Le 1 « hors sorties » est le fichier de prédictions**, branche nommée
    au bloc 1.
16. **Quatre lignes de fiche, aucune `ABSENTE`**, avec ces mtimes exacts :
    `micropython-servomoteur.md` **2026-06-30 12:28**,
    `micropython-moteur-pas-a-pas.md` **2026-06-30 12:42**,
    `micropython-pid.md` **2026-08-20 23:08**,
    `micropython-watchdog.md` **2026-08-19 15:09**.
    *(Reportés d'un listage du répertoire fait avant prédiction ; la garde
    doit les rendre à la seconde près, et l'année est prédite 2026 pour les
    deux dates de juin — un `ls` sans année ne la donne pas.)*

### Étape 2 — `compter-mots --lot` (règle C110 : hors front matter, hors blocs de code clôturés, inline inclus)

17. Décomposition **tirée de chaque source** (octets de prose hors blocs de
    code, lus fiche par fiche), **pas d'une moyenne de module** :

    | fiche | mots prédits | fourchette |
    |---|---|---|
    | `micropython-servomoteur.md` | **1 330** | 1 230 – 1 430 |
    | `micropython-moteur-pas-a-pas.md` | **950** | 870 – 1 030 |
    | `micropython-pid.md` | **1 055** | 970 – 1 140 |
    | `micropython-watchdog.md` | **1 095** | 1 010 – 1 180 |
    | **LOT (4 fiches)** | **4 430** | **4 300 – 4 560** |

    ⚠ **Faiblesse de méthode nommée d'avance** : les quatre valeurs sont
    tirées de leurs octets de prose respectifs, mais **converties par un
    ratio octets/mot unique** — donc une moyenne de module se cache dans le
    dernier pas. C'est exactement le mécanisme du 28/08 (« un total dans la
    fourchette ne valide pas la décomposition »). **Le bilan se lit terme à
    terme, et un total juste ne vaudra pas preuve.**
18. **Chiffre hérité à vérifier : le brief du 29/08 annonce 4 434 mots.** Il
    n'est **pas** ma prédiction, il est l'objet du test (C118 : à remesurer,
    rien ne se déduit). **Confirmé si le LOT tombe à 4 434 ± 0** ; toute
    autre valeur réfute le chiffre du brief, et c'est la mesure qui fait foi.
19. **Ordre des lignes = ordre passé en `-Fiches`**, une ligne par fiche puis
    un filet et la ligne `LOT (4 fiches)`.

### Étape 3 — `creer-fiche-en --style` sur les quatre sources FR

20. **Trois compteurs mécaniquement nuls, par construction** : les contrôles
    de typographie ne s'arment que sur `en/` (note d'outillage du 24/08).
    Donc **`typographie francaise : 0`**, **`C109 creees en EN : 0`**,
    **`hors alphabet latin : 0`**.
21. **`virgule ambigue` : 0**, fourchette 0 – 2.
22. **`fiche(s) lue(s) : 4`** ; **`a reprendre : 4`** (les quatre portent des
    tirets de prose, aucune n'est à résidu nul).
23. **Décomposition C109 de prose, par fiche** (prédiction de décomposition,
    licite ; le **total** reste ce que seule la machine atteint — corollaire
    du 25/08 suite 2) :

    | fiche | C109 prédits | fourchette |
    |---|---|---|
    | `micropython-servomoteur.md` | **17** | 13 – 21 |
    | `micropython-moteur-pas-a-pas.md` | **10** | 7 – 14 |
    | `micropython-pid.md` | **10** | 7 – 14 |
    | `micropython-watchdog.md` | **10** | 7 – 14 |
    | **total** | **47** | **34 – 63** |

24. **Chiffre hérité à vérifier : le brief annonce 46 candidats.** Même statut
    qu'au point 18 — objet du test, pas prédiction.
25. **`hors perimetre` (titres, tableaux et alt) : 10**, fourchette 5 – 20.
    Les quatre fiches portent **trois tableaux** et **quatre alt d'image**
    dont plusieurs à tiret.
26. **Forme de sortie** : pour chaque fiche à reprendre, un en-tête `  <rel>`
    puis des lignes `  <no ligne>  [<cat>] <detail>` suivies de l'extrait.
    **Pas de ligne `-> content/en/...`** : `--style` ne génère rien.

### Étape 4 — `creer-fiche-en --anneau 2`

27. **Anneau 2 : 54 fiches / 79 412 mots, 18 porteuses / 68 clôtures** —
    valeurs de la batterie `2908b2` du 29/08 13:47, **inchangées**, aucun
    contenu n'ayant bougé depuis (HEAD `5b0617f`, mtimes de fiches de juin et
    d'août).
28. **Dette : 59 cibles / 84 686 mots / 4 hors anneaux**, et ces **4 hors
    anneaux sont exactement les quatre fiches du lot 6**.
29. **Aucune des quatre n'apparaît comme porteuse de chevron.** Lecture des
    quatre sources : les blocs de code y sont tous en clôture ```` ``` ````,
    **zéro bloc en chevron `>`**. **C127 ne s'applique pas à ce lot**, et
    `-Chevron` n'est pas passé.

### Ce qui vaudrait ARRÊT sur ce bloc

- HEAD, node ou mtimes de pilotage différents du relevé de référence.
- `hors sorties batterie` supérieur à 1, ou une entrée autre que les trois
  nommées au point 15.
- une fiche `ABSENTE`, ou un mtime de fiche différent du point 16.
- code de sortie non nul à une étape.

### Points hors mesure relevés à la lecture des sources, à porter au gate G1

30. ⚠ **C71 — `micropython-moteur-pas-a-pas.md` porte un prix.** Deux
    emplacements : « réducteur 1:64 …, module ULN2003 avec 4 LEDs qui suivent
    les phases. **3–5 € le couple.** » et « arbitrage pas-à-pas / servo /
    moteur CC + encodeur selon précision + couple + **budget** ». Test de
    C71 appliqué (« que reste-t-il quand je l'enlève ») : la puce garde son
    argumentaire technique entier ⇒ **reformulation, pas reconstruction**.
    **Les trois autres fiches sont propres en C71.**
31. ⚠ **`micropython-pid.md` porte une consigne de production non exécutée**,
    en clair dans la prose du § *4. Régler les gains* : « Prendre capture
    d'écran du *traceur de Thonny affichant deux courbes…* ». Ce n'est ni du
    C109, ni du C71, ni un compteur : **aucun des contrôles ne le voit**, et
    une traduction au report un pour un l'emporterait telle quelle dans
    l'anglais. Même famille que le défaut du 26/08 (suite 3) attrapé en
    lisant la production.

### Constats du bloc 2 (sortie `batterie-sortie.txt`, horloge 14:19:36)

| # | Prédit | Constaté | Verdict |
|---|---|---|---|
| 13 | 0 non ASCII ; copie `…2908b4.txt` | 0 ; `tools\batterie-sortie-2908b4.txt` | ✅ |
| 14 | HEAD `5b0617f`, node `v24.15.0`, mtimes pilotage identiques | identiques à la seconde | ✅ |
| 15 | `3   (hors sorties batterie : 1)` | `3   (hors sorties batterie : 1)` | ✅ |
| 16 | 4 mtimes exacts, année 2026 | 12:28:37 / 12:42:37 / 23:08:58 / 15:09:46, 2026 | ✅ |
| 17 servo | 1 330 (1 230–1 430) | **1 375** | ✅ (+3,4 %) |
| 17 pas-à-pas | 950 (870–1 030) | **876** | ✅ (−7,8 %) |
| 17 pid | 1 055 (970–1 140) | **1 055** | ✅ **exact** |
| 17 watchdog | 1 095 (1 010–1 180) | **1 128** | ✅ (+3,0 %) |
| 17 LOT | 4 430 (4 300–4 560) | **4 434** | ✅ (+4) |
| 18 | brief = 4 434, à confirmer ou réfuter | **4 434** | ✅ **confirmé au mot** |
| 20 | typo 0, créées 0, hors latin 0 | 0 / 0 / 0 | ✅ |
| 21 | virgule ambiguë 0 (0–2) | 0 | ✅ |
| 22 | 4 lues, 4 à reprendre | 4 et 4 | ✅ |
| 23 servo | 17 (13–21) | **15** | ✅ |
| 23 pas-à-pas | 10 (7–14) | **8** | ✅ |
| 23 pid | 10 (7–14) | **10** | ✅ **exact** |
| 23 watchdog | 10 (7–14) | **13** | ✅ |
| 23 total | 47 (34–63) | **46** | ✅ |
| 24 | brief = 46, à confirmer ou réfuter | **46** | ✅ **confirmé à l'unité** |
| 25 | hors périmètre 10 (5–20) | **30** | ❌ |
| 26 | forme de sortie `--style` | conforme | ✅ |
| 27 | anneau 2 : 54 / 79 412, 18 / 68 | 54 / 79 412, 18 / 68 | ✅ **exact** |
| 28 | dette 59 / 84 686 / 4 = le lot | 59 / 84 686 / 4, les quatre nommées | ✅ **exact** |
| 29 | 0 porteuse de chevron dans le lot | aucune des quatre ne porte de chevron | ✅ |

**Score : 25 tenues sur 26. Une réfutation.**

⚠ **INCIDENT n° 2 — J'AI PRÉDIT LE SEAU « HORS PÉRIMÈTRE » SUR SON ÉTIQUETTE,
ET L'ÉTIQUETTE MENT — CE QUI ÉTAIT ÉCRIT NOIR SUR BLANC DEPUIS LE 27/08.**
Prédit **10** sur la lecture de la ligne de bilan (« titres, tableaux et alt »),
constaté **30**, soit **trois fois**. Cause lue **dans le code** après coup
(`creer-fiche-en.mjs`, lignes 888-901) : le seau porte **quatre** familles et
non trois, et la quatrième est `tiret d intervalle numerique` — que la ligne
de bilan **ne nomme pas**. Or les quatre sources du lot 6 sont saturées
d'intervalles : `4,8–6 V`, `9–11 kg·cm`, `0–180°`, `0–65535`, `200–300 mA`,
`1–1,7 A`, `12–24 V`, `1/2 … 1/256`.

*C'est mot pour mot la réfutation du 27/08 (suite 3) — « l'étiquette du seau
ment, elle annonce titres, tableaux et alt et contient aussi des plages
numériques » — et la règle du 29/08 : **une phrase de README décrit une
intention, seul le code décrit un comportement**. Je l'ai lue en ouverture et
j'ai quand même prédit sur l'étiquette.* **Deuxième fois du chantier que la
réfutation était déjà écrite dans ce que je venais de lire.**

⚠ **Non mesuré (C118)** : la **décomposition des 30** entre les quatre
familles. `--style` n'imprime pas les lignes `hors-perimetre` (filtre `dur`,
ligne 961), donc le chiffre existe sans son détail. **Non bloquant** : le
mode d'échec est unilatéral et `hors périmètre` n'est pas la charge de
travail. Rien codé, rien édité.

**Correctif de méthode, appliqué à partir d'ici : tout compteur dont je
publie une prédiction se lit dans le code qui l'incrémente, jamais dans la
ligne qui l'affiche.**

### Points hors mesure — vérifications du gate G1

32. **BILAN wikilinks coché** dans `tools/seance-sortie-2908s17.txt`
    (dernière sortie `etat`, ligne 65) : **MORT 65 / CASSE 0 / AMBIGU 0 /
    GABARIT 8 / ALIAS 6 / OK 425** — **identique à la référence du brief**.
    Le point ⚠ « BILAN wikilinks non relu » du JOURNAL du 29/08 est **soldé**.
33. **CIBLES SANS FICHE (6)** rendues par `--anneau` : `[[FC]] [[FP]] [[FS]]
    [[critere]] [[flexibilite]] [[niveau]]` — ce sont exactement les **six
    liens rouges du triplet NF X50-151** déjà en file d'arbitrage. Aucun neuf.
34. **Titres EN arrêtés sous C125**, lus dans les `title:` en production
    (jamais déduits d'un libellé) :

    | source FR | `title:` FR | jumelle Arduino FR | jumelle Arduino EN | test | **titre EN retenu** |
    |---|---|---|---|---|---|
    | `micropython-servomoteur` | Piloter un servomoteur | **Piloter un servomoteur** (identique) | `Driving a servo` | **2** | **`Driving a servo`** |
    | `micropython-moteur-pas-a-pas` | Piloter un moteur pas-à-pas | **Piloter un moteur pas-à-pas** (identique) | `Driving a stepper motor` | **2** | **`Driving a stepper motor`** |
    | `micropython-pid` | Réguler avec un PID **en MicroPython** | Réguler avec un PID **sur Arduino** (diffère) | `PID control on Arduino` | **3** | **`PID control in MicroPython`** |
    | `micropython-watchdog` | Utiliser le chien de garde (watchdog) **en MicroPython** | … **sur Arduino** (diffère) | `Watchdog on Arduino` | **3** | **`Watchdog in MicroPython`** |

    **Test 2 (servo, pas-à-pas)** : la clause du 27/08 (suite 7) est
    satisfaite — les deux `title:` FR sont **identiques au caractère près**,
    donc la jumelle titrée arbitre. ⚠ **Deux collisions de titre, assumées
    par C125** ; ces deux paires sont **déjà** dans le chantier FR de nommage
    (« dix paires », TODO l. 16), la résolution est côté FR et hors de ce lot.
    **Corroboration indépendante pour `servo`** : `micropython-sortie-pwm-en`
    l. 132 écrit déjà en production `[[micropython-servomoteur-en|Driving a
    servo]]` — les deux arbitres concordent.
    **Test 3 (pid, watchdog)** : les `title:` FR **diffèrent**, la paire
    descend au test 3. Le patron **« sur Arduino » / « en MicroPython »** est
    celui arbitré par Tim (b) le 27/08 (suite 4) et déjà appliqué à 20
    titres ; sa forme anglaise en production est **`in MicroPython`**, lue sur
    **14 `title:`** de `content/en/embarque/mcu/micropython/` (`Deep sleep in
    MicroPython`, `I2C in MicroPython`, `Timers in MicroPython`, `Driving a DC
    motor in MicroPython`, …). Racine alignée sur la jumelle, qualificatif de
    famille distinguant : **aucune collision** sur ces deux-là.
    ⚠ **Conflit nommé et tranché sur `moteur-pas-a-pas`** : les *Voir aussi*
    en production écrivent `Stepper motor` (rang 3) là où la jumelle titrée
    dit `Driving a stepper motor` (rang 2). **C125 ordonne le test 2 au-dessus
    du test 3** : `Driving a stepper motor`.

35. **Correction de mon point 31 — ce n'est pas un défaut, c'est une
    convention de placeholder du dépôt, et elle a un rendu EN en production.**
    Motif `Prendre capture d'écran d[eu] *…*` : **30 lignes sur 13 fiches**
    dans `content/` (échantillon nommé, liste complète relevée), dont **11
    dans `micropython/`** et **une seule dans le lot 6** (`micropython-pid`
    l. 88). Les jumelles EN déjà livrées rendent la forme
    **`Take a screenshot of *…*`** — 10 occurrences. **Précédent exact pour
    le lot 6** : `micropython-timers-en` l. 67 rend « traceur de Thonny » par
    **``Thonny's plotter (`Traceur`)``**, l'étiquette d'interface française
    gardée et glosée (C113).
    ⚠ **Écart avec le TODO l. 529, non instruit (C118)** : il annonce
    « restent **3** placeholders dans `content/` : les trois KiCad ». Le motif
    ci-dessus en rend **30**. Soit les deux comptages ne portent pas sur le
    même motif, soit l'un des deux est faux. **Hors périmètre du lot 6**,
    versé au gate.
36. ⚠ **DÉFAUT TROUVÉ DANS UNE FICHE DÉJÀ LIVRÉE, ET AUCUN CONTRÔLE NE LE
    VOIT.** `micropython-debug-en.md` l. 93 : « Take a screenshot of *Thonny
    en débogage pas-à-pas d'un script MicroPython, les valeurs des variables
    visibles*. » — **la description italique est restée intégralement en
    français**, seule des onze. Ni compteur, ni typographie, ni C109, ni
    hors-latin : même classe que le défaut du 26/08 (suite 3), attrapé en
    lisant la production. **Hors périmètre du lot 6**, versé au gate.

---

## Bloc 3 — G2 : garde avant passe, puis passes C109 sous C123 sur les sources FR

*Les 46 emplacements ont été relus un par un dans leur ligne complète avant
l'écriture de ces prédictions. Arbitrages du gate G1 non rendus par Tim
(« enchaîne jusqu'à G5 ») : **C71 appliqué** (règle absolue, retrait
mécanique, précédent d'arbitrage Tim (b) du 26/08 suite 5) ; **trouvailles
hors périmètre versées au gate sans édition** ; **diff de rédaction par lot**.*

### 3a — `batterie.ps1 -Phase garde` avant passe

37. **HEAD `5b0617f`**, **node `v24.15.0`**, **pilotage 14:06:42 / 14:06:54 /
    14:07:37** — identiques au relevé de référence.
38. **`fichiers modifies non commites : 4   (hors sorties batterie : 1)`** :
    `2908b3`, `2908b4`, `2908b5` (créé par l'étape 0 de ce lancement) et
    `predictions-260829.md`. Copie attendue : **`batterie-sortie-2908b5.txt`**.
39. **Heure entre 14:20:00 et 14:50:00**, date **2026-08-29**.

### 3b — Passes C109 sous C123 : classement des 46, décidé avant l'édition

40. **Décomposition traités / exemptés, fiche par fiche :**

    | fiche | candidats | **traités** | **exemptés** |
    |---|---|---|---|
    | `micropython-servomoteur` | 15 | **13** | **2** |
    | `micropython-moteur-pas-a-pas` | 8 | **6** | **2** |
    | `micropython-pid` | 10 | **8** | **2** |
    | `micropython-watchdog` | 13 | **11** | **2** |
    | **total** | **46** | **38** | **8** |

41. **Les huit exemptions, nommées et motivées** (C123 : segment de droite
    sans aucun verbe conjugué, second tamis « énumère » et non « commente ») :
    - `servomoteur` l. 44, **deux points-virgules** : `**rouge** → +5 V (…) ;
      **marron/noir** → GND ; **orange/jaune** → la broche de signal` —
      énumération en ligne de trois items **strictement nominaux**.
    - `moteur-pas-a-pas` l. 153, **un point-virgule** : `alimentation séparée
      (au moins pour NEMA17), **GND commun**` — deux consignes nominales.
    - `moteur-pas-a-pas` l. 157, **un point-virgule** : `trop haut →
      surchauffe` — nominal, second membre d'une paire de cas.
    - `pid` l. 21, **un tiret** : `réguler une vitesse, une température, une
      position` — **infinitif énumératif**, il énumère et reste.
    - `pid` l. 86, **le premier point-virgule** : `**monter `Ki`** pour effacer
      l'erreur résiduelle sans réintroduire d'oscillation lente` — trois
      infinitifs, **zéro verbe conjugué**.
    - `watchdog` l. 18, **les deux tirets de l'incise encadrée** : `— boucle
      infinie, attente sans fin, capteur figé —` — énumération nominale pure,
      `figé` participial. *C'est le cas `— Teensy LC, 3.2, 3.5 et 3.6 —` du
      25/08 : le contenu décide, pas la forme.*
42. ⚠ **La discrimination la plus fine du lot est entre `watchdog` l. 18 et
    l. 22, et elle est prédite avant l'édition.** Les deux sont des incises
    encadrées de trois items. **L. 18 reste** (`boucle infinie, attente sans
    fin, capteur figé` : aucun verbe). **L. 22 tombe** (`une bibliothèque qui
    **attend** une réponse, un capteur qui **fige** le code, une boucle sans
    sortie` : deux relatives conjuguées). **C123 tranche « y compris dans une
    subordonnée ».** Si l'outil rend un résidu de 4 sur `watchdog` au lieu de
    2, c'est cette lecture qui est fausse.
43. **Coût en mots, fiche par fiche** (règle C110, sortie de
    `compter-mots --lot`, publié même nul) :

    | fiche | avant | **après prédit** | delta |
    |---|---|---|---|
    | `micropython-servomoteur` | 1 375 | **1 375** | **0** |
    | `micropython-moteur-pas-a-pas` | 876 | **872** | **−4** |
    | `micropython-pid` | 1 055 | **1 057** | **+2** |
    | `micropython-watchdog` | 1 128 | **1 128** | **0** |
    | **LOT** | **4 434** | **4 432** | **−2** |

    Les **−4** sont la correction C71 (`3–5 € le couple.` retiré : les jetons
    `3`, `5`, `le`, `couple`). Les **+2** sont deux mots ajoutés par les
    résolutions de `pid` : **`est`** (l. 25, `**P** (proportionnel` →
    `**P** est proportionnel`) et **`Enfin`** (l. 86). **Toutes les autres
    résolutions sont à coût nul par construction** : virgule, parenthèse,
    découpage en phrases, suppression pure.
44. **Résidu attendu après passes**, `--style` relancé sur les quatre sources :
    **C109 de prose = 8**, décomposé **2 / 2 / 2 / 2**. `typographie
    francaise 0`, `virgule ambigue 0`, `C109 creees en EN 0`, `hors alphabet
    latin 0`. **`hors perimetre` : 30, inchangé** — aucune édition ne touche
    un intervalle numérique, un titre, un tableau ni un alt.
    ⚠ **Sauf sur `moteur-pas-a-pas` l. 36** : le retrait de `3–5 €` **supprime
    un intervalle numérique**, donc **`hors perimetre` doit tomber de 30 à 29**.
    Prédiction ferme : **29**.
45. **`4 fiche(s) lue(s), 4 a reprendre`** — les quatre gardent au moins une
    exemption, donc aucune ne passe à zéro.
46. **Nombre d'éditions : 33** (31 pour C109, une intention par ligne touchée ;
    2 pour C71). Fourchette 30 – 36.
47. **Aucun lien, embed ni bloc de code déplacé** : les 33 éditions sont de la
    ponctuation et deux retraits de prose. `--controle` reste à **181 / 0 / 0**
    au gate G5 pour les fiches déjà traduites.

### Ce qui vaudrait ARRÊT sur ce bloc

- Garde divergente du relevé de référence.
- Une ancre d'édition qui ne mord pas, ou qui mord plus d'une fois.
- Un résidu C109 différent de 8 sans explication tenue par la lecture.

### 3c — Constats des éditions, avant remesure

48. **38 éditions appliquées**, contre **33 prédites (fourchette 30 – 36)** au
    point 46. ❌ **Prédiction réfutée.** Cause : j'avais compté **une édition
    par ligne touchée**, et j'ai exécuté **une édition par groupe
    d'occurrences**. Trois lignes portaient plusieurs occurrences résolues
    séparément (`moteur-pas-a-pas` l. 18 en 2, `watchdog` l. 22 en 3,
    `watchdog` l. 77 en 2). *Le classement des 46 était juste ; c'est l'unité
    de compte des éditions qui ne l'était pas.*
49. ⚠ **UNE ANCRE SUR 38 N'A PAS MORDU, ET LE LOT A REFUSÉ D'ÉCRIRE.**
    Édition 38 : j'avais tapé `à prevoir` sans accent pour `à prévoir`. Le
    contrôle d'unicité a rendu **0 occurrence** et le script s'est arrêté
    **avant toute écriture** — les 37 autres ancres étaient uniques.
    *C'est la protection de C114 conservée sous exécution directe : le lot
    multi-édition est atomique, une seule ancre fausse annule les trente-sept
    autres au lieu d'en appliquer trente-sept sur trente-huit.* Corrigée,
    relancée, **38/38**.

### Bloc 4 — remesure : `batterie.ps1 -Phase cadrage -Fiches <les quatre>`

50. **Garde** : HEAD `5b0617f`, node `v24.15.0`, pilotage inchangé.
    **`fichiers modifies non commites : 9   (hors sorties batterie : 5)`** —
    les **quatre sources FR modifiées** plus `predictions-260829.md` ;
    copie **`batterie-sortie-2908b6.txt`**. **Les mtimes des quatre fiches
    sont maintenant du 2026-08-29, postérieurs au relevé de référence : c'est
    l'effet attendu de mes propres éditions, pas une péremption.**
51. **Volumes et résidus** : voir points **43**, **44**, **45** ci-dessus,
    publiés avant l'édition. Rappel : LOT **4 432**, résidu C109 **8**
    (2/2/2/2), `hors perimetre` **29**, `4 a reprendre`.
52. **Anneau 2 et dette inchangés** : 54 / 79 412, 18 / 68 ; 59 / 84 686 / 4.
    Les passes ne touchent aucun wikilink.

### Constats du bloc 4 (sortie `batterie-sortie.txt`, horloge 14:31:00)

| # | Prédit | Constaté | Verdict |
|---|---|---|---|
| 50 garde | HEAD / node / pilotage inchangés | inchangés | ✅ |
| 50 git | `9   (hors sorties batterie : 5)` | `9   (hors sorties batterie : 5)` | ✅ |
| 50 copie | `batterie-sortie-2908b6.txt` | idem | ✅ |
| 43 servo | 1 375 | **1 375** | ✅ |
| 43 pas-à-pas | 872 | **872** | ✅ |
| 43 pid | 1 057 | **1 057** | ✅ |
| 43 watchdog | 1 128 | **1 128** | ✅ |
| 43 LOT | **4 432** (−2) | **4 432** | ✅ **exact, terme à terme** |
| 40/44 résidu | 8, décomposé 2 / 2 / 2 / 2 | **8**, 2 / 2 / 2 / 2 | ✅ |
| 41 | les huit exemptions, nommées une par une | **les huit rendues sont exactement celles-là** | ✅ |
| 42 | `watchdog` l. 18 reste, l. 22 tombe | résidu `watchdog` = les deux tirets de l. 18 | ✅ |
| 44 | typo 0 / virgule 0 / créées 0 / hors latin 0 | 0 / 0 / 0 / 0 | ✅ |
| 44 | `hors perimetre` **29** (de 30, par le retrait C71) | **29** | ✅ |
| 45 | `4 fiche(s) lue(s), 4 a reprendre` | idem | ✅ |
| 52 anneau | 54 / 79 412, 18 / 68 | 54 / 79 412, 18 / 68 | ✅ |
| 52 dette | 59 / **84 686** / 4 | 59 / **84 684** / 4 | ❌ sur le terme « mots » |

**Le coût des passes est publié : −2 mots sur le lot** (−4 C71, +2 C109),
**0 mot sur `servomoteur` et `watchdog`**, où les treize et onze résolutions
sont toutes à coût nul par construction.

⚠ **INCIDENT n° 3 — J'AI DÉCLARÉ UNE LIGNE ENTIÈRE INCHANGÉE PARCE QUE SON
MÉCANISME PRINCIPAL L'ÉTAIT.** Prédiction 52 : « dette inchangée », motif
« les passes ne touchent aucun wikilink ». Le motif est **vrai** — 59 cibles
et 4 hors anneaux n'ont pas bougé — mais la ligne porte **un troisième terme
qui n'est pas un compte de liens** : les **mots** des cibles, qui incluent
les quatre fiches du lot. Elle tombe donc de **84 686 à 84 684, exactement le
delta du lot**. *Même famille que le 28/08 : une prédiction agrégée se vérifie
terme à terme, et un mécanisme juste sur un terme ne couvre pas les autres.*
Non bloquant, et la cause est entièrement expliquée par mes propres éditions.
**L'anneau 2, lui, est bien inchangé** — les quatre fiches en sont **hors**,
ce que la ligne « dont HORS anneaux 0..2 : 4 » dit depuis le cadrage.

**Diff des passes : 4 fichiers, 33 insertions, 33 suppressions**, aucune
ligne ajoutée ni retirée. **Score du bloc : 15 tenues sur 16.**

---

## Bloc 5 — G3 : garde de génération, puis les quatre `creer-fiche-en.mjs`

53. **Garde de génération (corollaire C116)** — les quatre cibles EN sont
    **ABSENTES** avant appel. Vérifié au cadrage : `content/en/embarque/mcu/
    micropython/` porte **35 fichiers**, aucun `micropython-servomoteur-en.md`,
    `-moteur-pas-a-pas-en.md`, `-pid-en.md`, `-watchdog-en.md`.
    **Jamais de `--force`.** Si une cible existe, on n'appelle pas.
54. **Les trois compteurs sont égaux par construction** : chaque génération
    rend `liens N -> N  ok`, `embeds N -> N  ok`, `code N -> N  ok`. **Aucune
    ligne `DIVERGE`.**
55. **Embeds, fiche par fiche** : servo **2**, pas-à-pas **1**, pid **1**,
    watchdog **1**. **Total 5.**
56. **Blocs de code clôturés** : **4 par fiche**, **total 16**.
57. **`prerequis suffixes`** : servo **1**, pas-à-pas **1**, pid **4**,
    watchdog **2**. **Total 8.**
58. **`draft:` inséré : 0 fois** — les quatre portent déjà `draft: false`.
    **`aliases retires` : 0** sur les quatre. **`ANCRES DE WIKILINK` : 0.**
    **`ANCRES INTRA-PAGE` : 0.**
59. **`libelles ajoutes` : 1 au total**, et un seul lien nu dans tout le lot —
    **`[[adc]]`** dans `micropython-servomoteur` § *Lire la position (retour
    analogique)*. Les trois autres fiches sont à **0 lien nu**.
    ⚠ **Rappel de mesure (24/08 suite 3)** : remplir le libellé d'un lien nu
    **gonfle le compte EN** sous C110 — `[[adc-en|Convertisseur
    analogique-numérique]]` fait quatre jetons là où `[[adc]]` en fait un.
    **+3 mots de foisonnement qui ne sont pas du texte**, à défalquer à la
    lecture du taux au gate G5.
60. **Corpus EN : 181 → 185 fiches.**
61. **`--controle` après génération : `185 fiche(s) controlee(s), 0
    divergente(s)`, `Liens non suffixes : 0 sur 0`.**
62. **Quatre lignes `Ecrit : content/en/... (N o)`**, N compris entre
    **7 000 et 13 000** octets par fiche.

### Constats du bloc 5 (G3, génération)

| # | Prédit | Constaté | Verdict |
|---|---|---|---|
| 53 | 4 cibles ABSENTES, 35 fichiers EN | 4 ABSENTES, 35 | ✅ |
| 54 | 3 compteurs égaux, 0 `DIVERGE` | 12 lignes `ok`, 0 `DIVERGE` | ✅ |
| 55 | embeds 2 / 1 / 1 / 1, total 5 | 2 / 1 / 1 / 1 | ✅ **exact** |
| 56 | code 4 / 4 / 4 / 4, total 16 | 4 / 4 / 4 / 4 | ✅ **exact** |
| 57 | prérequis 1 / 1 / 4 / 2, total 8 | 1 / 1 / 4 / 2 | ✅ **exact** |
| 58 | draft 0, aliases 0, ancres 0 et 0 | aucune ligne rendue | ✅ |
| 59 | 1 libellé ajouté, `[[adc]]` de `servomoteur` | `adc -> ADC`, et lui seul | ✅ |
| 59 bis | « +3 mots » de gonflement | **+1** (`adc-en` + `ADC` = 2 jetons contre 1) | ❌ |
| 60 | corpus EN 181 → 185 | **185** | ✅ |
| 61 | `185 / 0 divergente`, `0 sur 0` | idem | ✅ |
| 62 | 7 000 – 13 000 o par fiche | 11 886 / 8 890 / 10 142 / 8 760 | ✅ |

**Dérive : 0, sans source 0, sans marque 0, à jour 185.** L'ordre contraignant
du 24/08 (passe C109 **puis** génération) est tenu : les quatre empreintes
sont prises sur les sources **après** passes.

⚠ **Défaut mineur de prédiction (59 bis)** : j'annonçais que le libellé
injecté serait le `title:` FR complet, donc `Convertisseur
analogique-numérique` et **+3 jetons**. Le `title:` de `adc` est **`ADC`**, et
le gonflement non textuel vaut **+1 jeton**, pas +3. *J'avais lu le libellé
`[[adc|Convertisseur analogique-numérique]]` du Voir aussi et pris un libellé
pour un titre — la faute exacte que C125 interdit, commise ici sur un compte
de mots et non sur un titre.* Non bloquant ; le correctif de lecture est le
même : **le `title:` se lit dans le front matter de la cible, jamais dans un
libellé qui la vise.**

**Score du bloc : 11 tenues sur 12.**

---

## Bloc 6 — G4/G5 : rédaction, puis `batterie.ps1 -Phase etat -FichesEn <les quatre>`

### Décisions de rédaction prises seules (C117, sous la ligne du § 8), consignées

63. **`Demarrage` → `Startup`.** La chaîne affichée de `micropython-watchdog`
    est écrite **sans accent** dans la source française. La **troisième borne
    de C113** (25/08 suite 8) exempte les chaînes *dont la forme porte une
    contrainte matérielle*. **Elle n'est pas invoquée ici**, pour deux motifs
    mesurables : (1) **tout le bloc de code est désaccentué**, commentaires
    compris (`# chien arme APRES l'init`), donc l'absence d'accent est la
    **convention de code du module** et non un marqueur porté par cette
    chaîne ; (2) la production traduit les chaînes affichées — **24
    occurrences relevées** dans `content/en/embarque/mcu/micropython/`
    (`"Obstacle" if obstacle else "Clear"`, `"Press detected!"`,
    `"woke up from deep sleep"`…). **Traduite, donc, et propagée aux trois
    emplacements solidaires** : le `print()`, le bloc de sortie REPL, et les
    deux mentions de prose. *Si Tim tranche l'inverse, c'est un revert de
    quatre occurrences dans un seul fichier.*
64. **Les quatre titres EN sont posés** tels qu'arrêtés au gate G1 :
    `Driving a servo`, `Driving a stepper motor`, `PID control in
    MicroPython`, `Watchdog in MicroPython`.
65. **`micropython-watchdog-en` s'aligne sur `arduino-watchdog-en` en
    production**, jumelle stricte : le chapô, les gloses de *Voir aussi* et le
    vocabulaire (`feed`, `arm`, `pats the dog`, `last-resort`) sont repris au
    mot près **là où le français des deux fiches coïncide**, et divergent
    partout où ma passe C109 a modifié ma source (l'incise du § *À quoi ça
    sert* passée en parenthèses, le point-virgule scindé).

### Prédictions du bloc 6

66. **Garde** : HEAD `5b0617f`, node `v24.15.0`, pilotage inchangé ; copie
    **`batterie-sortie-2908b7.txt`** ;
    **`fichiers modifies non commites : 14   (hors sorties batterie : 9)`** —
    4 sources FR modifiées, 4 fiches EN neuves, `predictions-260829.md`.
    Les huit fiches portent des mtimes du **2026-08-29**, effet de mes
    éditions.
67. **Corpus FR : 242 fiches / 291 215 mots** (291 217 au 29/08, **−2** par
    les passes de ce lot).
68. **Déjà traduites : 185 fiches / 209 535 mots FR** (205 103 + 4 432).
    **Restant : 57 fiches / 81 680 mots.**
69. **`--controle` : 185 contrôlées, 0 divergente, liens non suffixés 0 sur 0.**
70. **Dérive : 0, sans source 0, sans marque 0, à jour 185.**
71. **Foisonnement du lot** (prédit **par lot et non par fiche** — règle du
    24/08 suite 3) : **+2,0 %**, fourchette **+1,0 % à +3,0 %**, soit
    **4 432 → environ 4 521 mots EN**.
    *Motif : le 25/08 (suite 8) a mesuré le foisonnement le plus bas du
    chantier sur les tutos d'actionneur Arduino — `servomoteur` +1,1 %,
    `moteur-pas-a-pas` +1,2 %, `moteur-cc` **négatif** — avec pour hypothèse
    non mesurée que ces fiches procèdent par chaînes nominales que l'anglais
    soude. Trois des quatre fiches d'ici sont de cette famille.*
    ⚠ **Si le lot sort au-dessus de +3 %, l'hypothèse de famille tombe** et
    le repère du 25/08 ne se cite plus.
72. **Foisonnement du corpus, 185 paires : +3,9 %**, fourchette 3,8 – 4,0.
73. **Style EN du lot : C109 8**, décomposé **2 / 2 / 2 / 2**, aux mêmes
    emplacements qu'en français. **typographie française 0**, **C109 créées
    par la traduction 0**, **virgule ambiguë 0**, **hors alphabet latin 0**,
    **hors périmètre 13**. *(Déjà mesuré à la rédaction ; la batterie doit
    rendre les mêmes chiffres.)*
74. **Médias : 12 absents, 0 cassé, 623 ok, 1 orphelin.** Les cinq embeds des
    quatre fiches EN visent des SVG **existants** (chemins recopiés à
    l'octet), donc `ok` monte de 618 à 623 et `ABSENT` ne bouge pas.
75. **Anneau 2 inchangé : 54 / 79 412, 18 porteuses / 68 clôtures**, les
    quatre fiches en étant hors.
76. **Dette : cibles rouges 55** (59 − 4), fourchette 55 – 58 ;
    **mots environ 80 252**, fourchette 79 500 – 84 000 ;
    **`dont HORS anneaux 0..2` : 0**, prédiction **ferme** — les quatre seules
    cibles hors anneaux étaient ce lot.
77. **Wikilinks : MORT 61** (65 − les quatre cibles désormais existantes),
    fourchette 60 – 63 ; **CASSE 0**, **AMBIGU 0**, **GABARIT 8**,
    **ALIAS 6** — les quatre fermes. **OK : 445**, fourchette 435 – 455.
78. **`--libelles` : 112**, fourchette 105 – 125. *Rappel du 25/08 (suite 4) :
    traduire une fiche rend jugeables d'un coup **tous les liens qui
    pointaient déjà vers elle**, donc le chiffre monte de plus que les
    libellés des quatre fiches neuves.*

### Constats du bloc 6 (sortie `batterie-sortie.txt`, horloge 14:41:37)

| # | Prédit | Constaté | Verdict |
|---|---|---|---|
| 66 | HEAD / node / pilotage inchangés | inchangés | ✅ |
| 66 | `14   (hors sorties batterie : 9)` | idem | ✅ |
| 66 | copie `batterie-sortie-2908b7.txt` | idem | ✅ |
| 67 | corpus FR **242 / 291 215** | 242 / **291 215** | ✅ |
| 68 | traduites **185 / 209 535** | 185 / **209 535** | ✅ |
| 68 | restant **57 / 81 680** | 57 / **81 680** | ✅ |
| 69 | `--controle` 185 / 0 / 0 sur 0 | idem | ✅ |
| 70 | dérive 0 / 0 / 0, 185 à jour | idem | ✅ |
| **71** | **foisonnement du lot +2,0 % (1,0 – 3,0)** | **+4,81 %** (4 432 → 4 645) | ❌ |
| 72 | corpus 185 paires **+3,9 %** | 209 535 → 217 746, **+3,9 %** | ✅ |
| 73 | style EN **8**, 2 / 2 / 2 / 2 | **8**, 2 / 2 / 2 / 2 | ✅ |
| 73 | typo 0, créées 0, virgule 0, latin 0 | 0 / 0 / 0 / 0 | ✅ |
| 73 | hors périmètre **13** | **13** | ✅ |
| 74 | médias 12 / 0 / **623** / 1 | 12 / 0 / **623** / 1 | ✅ |
| 75 | anneau 2 : 54 / 79 412, 18 / 68 | idem | ✅ |
| 76 | dette cibles **55** | **55** | ✅ |
| 76 | dette mots ~**80 252** | **80 252** | ✅ **exact** |
| 76 | `dont HORS anneaux` **0** (ferme) | **0** | ✅ |
| 77 | MORT **61** (60 – 63) | **61** | ✅ |
| 77 | CASSE 0, AMBIGU 0, GABARIT 8, ALIAS 6 | 0 / 0 / 8 / 6 | ✅ |
| **77** | **OK 445 (435 – 455)** | **429** | ❌ |
| 78 | `--libelles` **112** (105 – 125) | **112** | ✅ **exact** |

**Score du bloc : 20 tenues sur 22.**

⚠ **INCIDENT n° 4 — L'HYPOTHÈSE DU 25/08 SUR LES TUTOS D'ACTIONNEUR EST
RÉFUTÉE, ET ELLE L'EST PAR SA PROPRE CLAUSE.** J'avais prédit **+2,0 %,
fourchette +1,0 à +3,0**, en écrivant d'avance que **« si le lot sort
au-dessus de +3 %, l'hypothèse de famille tombe »**. Le lot sort à
**+4,81 %**. Décomposition, qui est le vrai enseignement :

| paire | FR | EN | foisonnement |
|---|---|---|---|
| `micropython-servomoteur` | 1 375 | 1 397 | **+1,6 %** |
| `micropython-watchdog` | 1 128 | 1 155 | **+2,4 %** |
| `micropython-moteur-pas-a-pas` | 872 | 941 | **+7,9 %** |
| `micropython-pid` | 1 057 | 1 152 | **+9,0 %** |
| **lot** | **4 432** | **4 645** | **+4,81 %** |

**L'écart interne est de 7,4 points**, et il ne se range **pas** par famille
d'actionneur : `servomoteur` et `moteur-pas-a-pas` sont deux tutos
d'actionneur de la même page-notion, à **6,3 points d'écart**. *La cause
supposée le 25/08 — « les tutos d'actionneur procèdent par chaînes nominales
que l'anglais soude » — ne classe pas ces quatre paires.* **Quatrième fois
que la liste des causes échoue à classer, et première fois qu'elle échoue à
l'intérieur d'une même famille.** **Cause non mesurée (C118)** ; le repère du
25/08 (suite 8) **ne se cite plus**, comme la charge C109 rapportée au volume
avant lui.
⚠ **Ce que la prédiction a bien fait** : elle a nommé son critère de
réfutation **avant** la mesure, donc la réfutation est nette et ne se
renégocie pas.

⚠ **DÉFAUT n° 5, DE MÉTHODE — J'AI DÉRIVÉ `OK` AU LIEU DE LE PRÉDIRE.**
`OK 445` a été obtenu en ajoutant « 425 + une vingtaine de liens résolus » :
c'est une **arithmétique dérivée** sur un compteur de **cibles distinctes**,
et non de liens. Les quatre cibles neuves résolvent bien 4 entrées de MORT
(65 → 61, prédit juste), mais `OK` compte les cibles **distinctes atteintes**
et les quatre fiches neuves n'en ajoutent que celles que personne ne visait
encore. Constaté **429**, soit **+4**, exactement les quatre fiches.
*C119 interdit l'arithmétique dérivée ; je l'ai appliquée à MORT, où le
mécanisme était juste, et pas à OK, où il ne l'était pas.* Non bloquant.

---

## BILAN GÉNÉRAL DES PRÉDICTIONS — LOT 6

| bloc | prédictions | tenues | réfutées |
|---|---|---|---|
| 1 — garde de référence | 12 | 11 | **1** |
| 2 — cadrage | 26 | 25 | **1** |
| 3a — garde avant passe | 3 | 3 | 0 |
| 3b — nombre d'éditions | 1 | 0 | **1** |
| 4 — remesure après passes | 16 | 15 | **1** |
| 5 — génération | 12 | 11 | **1** |
| 6 — clôture | 22 | 20 | **2** |
| **total** | **92** | **85** | **7** |

**Les sept réfutations, et ce qu'elles ont en commun.** Aucune ne porte sur un
**verdict** — pas un classement C109 faux, pas une exemption mal jugée, pas un
titre déduit d'un libellé. Six portent sur la **valeur d'un compteur** et une
sur une **unité de compte**. Trois d'entre elles ont la même cause exacte :
**j'ai lu l'étiquette d'un agrégat au lieu de son mécanisme** (le seau
`hors perimetre`, la ligne `dette`, le compteur `OK`). *Le correctif est écrit
au bloc 2 et il a tenu ensuite : tout compteur dont je publie une prédiction
se lit dans le code qui l'incrémente.*

---
---

# Prédictions — 2026-08-29 (suite), pilote Claude Code, module `esp32/`

> Deuxième séance sous la sous-règle C116 « exécution directe », avec ses
> amendements 6 à 9 du 29/08 (suite 3). Même journée d'horloge que le lot 6,
> donc **même fichier** (nom lu sur `batterie.ps1 -Phase garde`, date ISO
> **2026-08-29**, heure **15:35:43** — non déduite).
>
> Horloge d'ouverture lue avant tout lancement de ce bloc : **15:35:43**.

## Bloc G — `batterie.ps1 -Phase garde` (lecture d'ouverture, CLAUDE.md étape 3)

Prédictions publiées **dans la transcription avant l'appel** et recopiées ici
après ; le fichier de prédictions ne pouvait pas être nommé avant que
l'horloge ne soit lue (C119 : la date ne se déduit pas). Consigné en décision
C117 au gate G0.

| # | prédiction | constat | verdict |
|---|---|---|---|
| G-1 | lignes non ASCII dans `batterie.ps1` = **0** | 0 | tenue |
| G-2 | copie C124 = `tools\batterie-sortie-2908b8.txt` | idem | tenue |
| G-3 | `phase demandee : garde   anneau : 2   chevron : False` | idem | tenue |
| G-4 | date ISO **2026-08-29**, heure **> 15:32:56** | 15:35:43 | tenue |
| G-5 | HEAD = `e65192b 2026-08-29 15:32:56 +0200` | idem | tenue |
| G-6 | non commités **1**, hors artefacts **0**, liste nominative hors artefacts **vide** | 1 (hors : 0) | tenue |
| G-7 | `node : v24.15.0` | idem | tenue |
| G-8 | JOURNAL / conventions / TODO au 2026-08-29, heure **entre 15:15:00 et 15:33:00** | 15:23:47 / **15:07:47** / 15:18:56 | **réfutée** |

**Réfutation G-8.** Fenêtre construite autour de l'horloge de clôture lue au
JOURNAL (15:15) au lieu d'être bornée par le début de la séance chat (14:55).
`conventions.md` a été écrit à 15:07:47, dans la séance, avant la clôture.
*Une fenêtre se borne sur les deux horloges publiées, pas sur la dernière.*
Sans effet sur la garde : les trois dates sont antérieures au commit `e65192b`,
l'arbre est propre hors artefacts, aucun état inattendu, aucune écriture bloquée.

---

## Bloc 0 — INSTRUCTION DE L'ÉCART DE COMPTAGE DES PLACEHOLDERS DE CAPTURE

Objet : le motif `Prendre capture d'écran d[eu]` rend **30 lignes sur 13
fiches** dans `content/` (mesure du 29/08 suite 2), dont **11 dans
`micropython/`**, quand le TODO annonce « restent **3** placeholders dans
`content/` : les trois KiCad ». Verdict demandé : quelle population chacun
compte, lequel est faux. **Aucune édition dans ce bloc** (arbitrage Tim (c)
du 29/08 : instruire, pas corriger).

### Échantillon nommé (C110, avant tout comptage)

`content/embarque/mcu/micropython/micropython-debug.md` **l. 91** :
`Prendre capture d'écran de *Thonny en débogage pas-à-pas d'un script
MicroPython, les valeurs des variables visibles*.`
Apostrophe **ASCII U+0027** vérifiée à `od -c`, **pas** U+2019. La forme est
une **ligne de prose autonome**, jamais un lien d'image `![…](…)`.
Jumelle EN l. 93 : `Take a screenshot of *…*.`

### Formes balayées, étiquetées séparément (sous-règle de C110, 29/08)

`F1 Prendre capture d'écran` (ASCII) · `F2 Prendre une capture` ·
`F3 Prendre capture d’écran` (U+2019) · `F4 [Cc]apture d['’]écran` (large FR) ·
`F5 Take a screenshot` · `F6 screenshot` (large EN, insensible à la casse) ·
`F7 [Pp]rendre (une )?photo` (famille prise de vue, distincte) ·
`F8 TODO|PLACEHOLDER|À PRENDRE|A PRENDRE` (marqueurs explicites).
Chaque forme comptée séparément sur `content/` **hors** `content/en/` et sur
`content/en/` **séparément**.

### Prédictions chiffrées

1. **F1 sur `content/` entier : 30 lignes, 13 fiches distinctes.** Le motif du
   JOURNAL portait `d[eu]` en plus ; sans cette contrainte, F1 ≥ 30.
   Fourchette : **30 à 34 lignes**, **13 à 15 fiches**. Réfutation : < 30.
2. **F1 restreint à `content/embarque/mcu/micropython/` : 11 lignes**, sur
   **5 à 8 fiches** distinctes.
3. **F3 (apostrophe U+2019) : 0 ligne** sur tout `content/`. L'échantillon dit
   ASCII. Réfutation : ≥ 1.
4. **F2 : 0 à 3 lignes.**
5. **F1 restreint à `content/en/` : 0 ligne** — sauf la classe de défaut du
   26/08 (suite 3), dont le seul cas connu (`micropython-debug-en` l. 93) a été
   traduit le 29/08 (suite 3). Réfutation : ≥ 1 ⇒ défaut de traduction résiduel
   à verser au gate.
6. **F5 sur `content/en/` : 15 à 30 lignes**, sur **8 à 15 fiches**.
   Critère : les jumelles EN des 13 fiches FR, dont toutes n'existent pas
   encore (185 paires sur 242 fiches FR au 29/08).
7. **F4 (large FR) : 35 à 75 lignes** — strictement **> F1**, l'écart étant de
   la prose qui *parle* de captures d'écran sans être un placeholder.
   Réfutation : F4 = F1 (⇒ aucune prose sur le sujet, invraisemblable).
8. **F1 restreint à `content/embarque/mcu/esp32/` : 0 à 2 lignes.** Ce chiffre
   entre dans le cadrage du lot 1 (G1) : un placeholder dans le périmètre est
   une contrainte de rédaction, pas une correction.
9. **`audit-medias.mjs --quiet` : 12 absents, 0 cassé, 623 ok, 1 orphelin** —
   valeurs du 29/08 (suite 2), aucune édition de média depuis. Réfutation :
   tout écart ⇒ mesure du jour fait foi (C118) et l'écart s'instruit.
10. **Le passage du TODO portant le 3 contient les chaînes `KiCad` et
    (`3 placeholders` ou `trois placeholders`)**, et **restreint sa population**
    par un qualificatif nommé (répertoire, campagne, lot ou type de média).
    Réfutation : si la ligne écrit « dans `content/` » sans aucune restriction,
    **c'est le TODO qui est faux** et l'écart devient une dette de production.
11. **VERDICT PRÉDIT : les deux comptages ne portent pas sur la même
    population, et aucun des deux n'est arithmétiquement faux.** Le motif
    compte des **lignes de prose tenant lieu d'image**, présentes que l'image
    soit prévue ou non ; le TODO compte un **reste-à-faire de production**
    borné à une campagne. Chiffre qui tranche : **le nombre de médias absents
    (prédit 12) est différent de 30 et différent de 3** — trois populations
    emboîtées, pas deux comptages du même objet.
    ⚠ **Clause de réfutation écrite avant la mesure** : si les 30 lignes
    correspondent **une pour une** à 30 entrées d'image absentes de
    `audit-medias`, alors les deux motifs comptent bien le même objet et **le
    TODO est faux** — la prédiction 11 tombe et l'écart devient un arbitrage
    de production à remonter à Tim.
12. **Aucune des 13 fiches ne porte à la fois une ligne F1 et un lien d'image
    absent au même emplacement** : **0 recouvrement exact**. Réfutation : ≥ 1.

### Garde de ce bloc

Lecture seule. **Zéro écriture dans `content/`, zéro écriture dans les
fichiers de pilotage.** Si le verdict conclut que le TODO ment sur un
reste-à-faire de production, c'est un **arbitrage remonté à Tim**, pas une
correction (brief G0, et point (8) de la sous-règle : une escalade non rendue
deviendrait une assomption écrite avec son coût de revert).

### Bilan du bloc 0 — 12 prédictions, 7 tenues, 5 réfutées

| # | prédiction | constat | verdict |
|---|---|---|---|
| 1 | F1 sur `content/` : 30–34 lignes, 13–15 fiches | **29 lignes, 15 fiches** | **réfutée** (lignes) / tenue (fiches) |
| 2 | F1 dans `micropython/` : 11 lignes, 5–8 fiches | **11 / 7** | tenue |
| 3 | F3 (U+2019) : 0 | 0 | tenue |
| 4 | F2 `Prendre une capture` : 0–3 | 0 | tenue |
| 5 | F1 dans `content/en/` : 0 | 0 | tenue |
| 6 | F5 `Take a screenshot` : 15–30 lignes, 8–15 fiches | **11 / 7** | **réfutée** |
| 7 | F4 large : 35–75 lignes, > F1 | **30 lignes / 16 fiches**, > F1 | **réfutée** (valeur) / tenue (ordre) |
| 8 | F1 dans `esp32/` : 0–2 | **0** | tenue |
| 9 | `audit-medias --quiet` : 12 / 0 / 623 / 1 | **12 / 0 / 623 / 1** | tenue |
| 10 | le passage du TODO **restreint** sa population | il la **généralise** : « seuls placeholders résiduels du corpus » | **réfutée** |
| 11 | verdict : populations différentes, aucun des deux faux | **même population, le quantificateur du TODO est faux** | **réfutée** |
| 12 | recouvrement placeholders / médias absents : 0 | **0** | tenue |

**Réfutation 1 — le motif du JOURNAL ne se reproduit à aucun commit.**
`Prendre capture d'écran d[eu]` rend **29 lignes / 15 fiches** dans `content/`
à HEAD **et aux sept commits précédents** (`git grep` sur chacun). La paire
publiée au 29/08 (suite 2), **30 / 13**, est fausse sur **ses deux termes**.
J'avais construit une fourchette 30–34 en tenant le 30 pour un plancher, donc
en tenant la mesure du pilote pour acquise ; C118 dit l'inverse. *Le brief
demandait d'instruire un écart entre deux comptages, et le premier chiffre
faux était dans celui qui servait de référence.*

**Réfutation 6 — les 11 `Take a screenshot` sont les jumelles EN de
`micropython/` et de personne d'autre.** J'avais dimensionné sur les 13 fiches
FR annoncées ; seul `micropython/` est traduit parmi les cinq modules porteurs
(`kicad`, `teensy`, `stm32`, `raspberry-pi` ne le sont pas). 11 / 7 en EN =
11 / 7 en FR, au chiffre près. *Le report un pour un est intact sur cette
forme.*

**Réfutation 7 — F4 ne dépasse F1 que d'une ligne, et elle est dans un
template.** `content/templates/fiche-tuto.md` **l. 107**, prose de gabarit.
J'attendais 6 à 46 lignes de prose parlant de captures ; il y en a **une**.
*La forme placeholder est la seule occurrence du syntagme dans tout le corpus
rédigé — F1 est un motif propre, pas un motif à débruiter.*

**Réfutations 10 et 11 — et c'est la première réfutation de VERDICT du
protocole.** Le pilote du lot 6 sortait à 7 réfutations sur 92 dont *aucune
sur un verdict*. Ici le verdict prédit tombe au premier bloc de la séance qui
devait être le vrai test. **Ce que la prédiction 11 a mal fait** : elle a
supposé que deux chiffres écrits par le dépôt devaient l'un et l'autre vouloir
dire quelque chose, et elle a construit trois populations emboîtées pour les
sauver tous les deux. La cause réelle est plus simple, et **elle était écrite
dans la source que le brief me donnait** : `TODO.md` **l. 472** publie depuis
le 22/08 « `3 placeholders C29, tous dans kicad` **en vaut 29** ». La clause de
réfutation avait raison sur l'issue et **tort sur son critère** — elle pariait
sur une correspondance une pour une avec les médias absents, qui est **nulle**
(recouvrement 0, prédiction 12 tenue).
*Dixième fois du chantier que la réfutation est dans ma source, et la première
où elle est dans le fichier que le brief cite comme partie au litige.*

---

## Bloc 1 — PASSE DE CORRECTION DU PILOTAGE VIVANT (arbitrage Tim (B) du 29/08)

Périmètre arbitré : **quatre emplacements**, aucun dans une fiche.
`TODO.md` l. 537 (quantificateur faux) ; `TODO.md` l. 18, `JOURNAL.md` l. 49 et
l. 75 (paire 30/13 fausse). **Les trois lignes de `_drafts` restent en trace
datée**, hors périmètre par arbitrage. `_drafts` n'est donc **pas** touché,
alors même que `normalize-pilotage.js` le couvre.

### Garde de péremption avant la passe (point (5) de la sous-règle)

1. `batterie.ps1 -Phase garde` : lignes non ASCII **0** ; copie
   **`tools\batterie-sortie-2908b9.txt`** ; date **2026-08-29**, heure
   **> 15:35:43** ; HEAD **`e65192b 2026-08-29 15:32:56 +0200`**, inchangé.
2. **Fichiers non commités : 3** *(hors artefacts de séance : **0**)*.
   Liste nominative attendue, contre laquelle le chiffre se lit (point (9)) :
   `M tools/predictions-260829.md` (filtré par `predictions-`),
   `?? tools/batterie-sortie-2908b8.txt`, `?? tools/batterie-sortie-2908b9.txt`
   (filtrés par `batterie-sortie`). **Rien d'autre.** Toute quatrième entrée
   ⇒ ARRÊT.
3. `node : v24.15.0`. Dates d'écriture **inchangées** au relevé de G0 :
   JOURNAL **15:23:47**, conventions **15:07:47**, TODO **15:18:56**.
   Tout écart ⇒ ARRÊT avant écriture.

### Normalisation (CLAUDE.md : avant tout diff sur un fichier de pilotage)

4. `node tools/normalize-pilotage.js --check` : **Total 0 caractère(s) à
   corriger, 0 fichier(s) modifié(s)**, **exit 0**, **11 cibles toutes en
   `[ok]`**, aucune `[skip]`. Mode `--check` choisi pour que la passe ne
   mélange pas une normalisation préexistante à mes quatre éditions.
   Réfutation : tout total > 0 ⇒ je lance le mode FIX **seul**, je présente son
   diff, et j'édite ensuite.

### Contrôle d'unicité d'ancre avant écriture (point (6), le terme qui a servi seul au lot 6)

Chaque ancre doit rendre **exactement 1** occurrence dans son fichier.

| ancre | fichier | occurrences prédites |
|---|---|---|
| A1 `` dans `content/`, seuls placeholders résiduels du corpus, `` | TODO.md | **1** |
| A2 `(30 lignes sur 13 fiches contre 3 annoncées)` | TODO.md | **1** |
| A3 `(30 lignes sur 13 fiches contre 3 annoncées au TODO)` | JOURNAL.md | **1** |
| A4 ``rend **30 lignes sur 13 fiches** dans `content/`,`` | JOURNAL.md | **1** |
| A5 `soit l'un des deux est faux. Non instruit (C118).**` | JOURNAL.md | **1** |

⚠ **Risque nommé sur A2.** `TODO.md` **l. 34** porte aussi la chaîne
`30 lignes` (vu au balayage de G0, ligne tronquée à l'affichage, contenu non
lu). Si elle porte la chaîne A2 entière, **A2 = 2 et l'écriture s'arrête avant
toute écriture** — les quatre autres éditions ne sont pas appliquées, et
j'étends A2 avant de relancer. *C'est le mode d'échec du lot 6, et l'atomicité
doit jouer dans le même sens : refuser, pas appliquer 4 sur 5.*
Toutes les ancres sont en **apostrophes ASCII** (`U+2019` absent des quatre
lignes, vérifié à `grep`).

### Les quatre éditions, une intention chacune

5. **É1 — `TODO.md` l. 537, retrait du quantificateur faux.** Le « 3 » est
   **conservé** (il est juste pour `kicad` seule) ; c'est « seuls placeholders
   résiduels du corpus » qui tombe, remplacé par le chiffre mesuré et sa
   décomposition. **+1 ligne de contenu, 0 ligne supprimée.**
6. **É2 — `TODO.md` l. 18 : `30 lignes sur 13 fiches` → `29 lignes sur 15
   fiches`.** Substitution sèche, aucun autre mot touché.
7. **É3 — `JOURNAL.md` l. 49 : idem.** Substitution sèche.
8. **É4a — `JOURNAL.md` l. 75 : idem** sur la paire ; le **11 de
   `micropython/` est conservé**, il est juste.
9. **É4b — `JOURNAL.md` l. 75, marque d'instruction** appendée après
   `Non instruit (C118).**` : une clause ⚠ nommant que la paire publiée était
   fausse sur ses deux termes. *Décision C117 : je substitue le chiffre au lieu
   de le laisser en trace, pour qu'aucune paire fausse ne reste greppable — la
   propagation par `grep` est exactement ce qui a coûté cette séance —, et
   j'ajoute la clause pour que l'erreur reste comptable.*
10. **Total : 5 éditions sur 2 fichiers**, `TODO.md` **2**, `JOURNAL.md` **3**.
    **0 fichier de `content/` touché**, **0 fichier de `_drafts/` touché**,
    **0 suppression de ligne**, **0 suppression de fichier**.

### Remesure immédiate après passe (point (4))

11. `grep -c "30 lignes sur 13 fiches"` : **JOURNAL.md 0**, **TODO.md 0**.
    Avant passe : JOURNAL **2**, TODO **1**.
12. La chaîne survit **uniquement** dans `tools/predictions-260829.md`, où elle
    est la citation du litige : **2 occurrences** de `30 lignes sur 13 fiches`
    (l. 345 et l. 808), inchangées.
13. `grep -c "seuls placeholders résiduels du corpus" TODO.md` : **0**
    (avant : **1**).
14. `grep -c "29 lignes sur 15 fiches"` : **JOURNAL.md 2**, **TODO.md 1**.
15. `git status --porcelain content` : **0 ligne**. `git status --porcelain
    _drafts` : **0 ligne**.
16. `git diff --stat` : **2 fichiers** (`JOURNAL.md`, `TODO.md`) plus
    `tools/predictions-260829.md`. **Aucune suppression nette** hors les
    fragments substitués.
17. Deuxième `normalize-pilotage.js --check` après édition : **Total 0**,
    exit 0 — mes éditions n'introduisent aucun caractère invisible.

### Gardes tenues dans ce bloc

Zéro `git commit`, zéro `git push`, zéro suppression de fichier, zéro coupe.
Aucun fichier n'est coupé, donc la règle du 28/08 (lecture intégrale avant
coupe) ne s'active pas. Les quatre lignes cibles ont été **lues en entier**
avant d'être ancrées.

### Amendement au bloc 1 — un cinquième emplacement, découvert par le contrôle d'unicité

⚠ **INCIDENT DE PÉRIMÈTRE, CONSIGNÉ.** Les cinq ancres rendent **1/1** comme
prédit (prédictions 5 à 9 tenues, risque nommé sur A2 **levé**). Mais le
contrôle a fait lire `TODO.md` **l. 34**, qui porte la paire fausse sous une
**autre formulation** : « écart de comptage des placeholders de capture —
**30 lignes sur 13 fiches mesurées contre 3 annoncées ci-dessous** ».
**Mon énumération de G0 en annonçait trois ; il y en a quatre.**
*Cause : au balayage de G0 j'ai coupé les lignes à 200 caractères et classé
`TODO.md` l. 34 depuis sa tête visible, sans lire la suite. C'est l'amendement
(7) transposé — lire l'affichage au lieu du contenu — et il avait été relu au
cadrage de cette séance même.*

**Décision C117, prise seule et flaguée au gate.** J'étends la passe à
`TODO.md` l. 34. Motif : l'arbitrage (B) porte sur *le pilotage vivant qui
porte la paire fausse*, et son intérêt est qu'aucune paire fausse ne reste
greppable ; l'exclure au motif que mon énumération était courte viderait
l'arbitrage de son objet. **Coût de revert : une substitution de chaîne dans
un fichier de pilotage, `git checkout -- TODO.md` la rend, aucune perte.**

**Balayage exhaustif avant écriture (sous-règle de C110 : toutes les formes en
usage, étiquetées séparément), prédictions :**

18. `30 lignes sur 13 fiches` dans les quatre fichiers de pilotage
    (`JOURNAL.md`, `TODO.md`, `BACKLOG.md`, `conventions.md`) : **4 lignes** —
    JOURNAL **2** (l. 49, l. 75), TODO **2** (l. 18, l. 34), BACKLOG **0**,
    conventions **0**.
19. Forme large `13 fiches` sur les mêmes quatre fichiers : **4 lignes**,
    les mêmes. Réfutation : ≥ 5 ⇒ un sixième emplacement, et la passe se
    réétend avant d'écrire.
20. Forme large `30 lignes` sur les mêmes quatre fichiers : **4 lignes**,
    les mêmes.
21. `JOURNAL-archive.md` : **0** sur les trois formes (le chantier y est
    antérieur à la mesure du 29/08).
22. **A6 — ancre de la cinquième édition**, `mesurées contre 3 annoncées
    ci-dessous`, dans `TODO.md` : **1** occurrence.

**É5 — `TODO.md` l. 34 : `30 lignes sur 13 fiches mesurées` → `29 lignes sur
15 fiches mesurées`.** Substitution sèche, aucun autre mot touché.
**Total de la passe porté à 6 éditions sur 2 fichiers** : `TODO.md` **3**,
`JOURNAL.md` **3**. Les prédictions 11 à 14 de la remesure sont **inchangées
en valeur** (elles portaient déjà « JOURNAL 0 / TODO 0 » après passe) sauf la
prédiction 11, dont le **avant-passe** devient **TODO 2 et non 1**, et la
prédiction 14, dont l'après-passe devient **TODO 2 et non 1**.

### Correctif É7 — la correction reproduisait la chaîne fausse

⚠ **P13 RÉFUTÉE PAR LE TEXTE DE LA CORRECTION ELLE-MÊME.** É1 remplace
« seuls placeholders résiduels du corpus » par une phrase qui **contient la
chaîne entière** (« Ce ne sont PAS les seuls placeholders résiduels du
corpus »). Le compteur rend donc **1** au lieu de **0**, et le motif que
j'avais publié — *qu'aucune formulation fausse ne reste greppable* — n'est pas
tenu : un `grep` futur retombe sur une ligne qui affirme le contraire de ce
qu'elle a l'air d'affirmer. *Même famille que P12 : les deux réfutations de la
remesure viennent de ce que j'ai écrit entre la prédiction et la mesure.*

**É7 — `TODO.md` l. 537, reformulation sans reprise de la chaîne.**
Ancre : `**Ce ne sont PAS les seuls placeholders résiduels du corpus**`,
occurrences prédites **1**.

23. Après É7 : `grep -cF 'seuls placeholders résiduels du corpus' TODO.md` =
    **0** ; `grep -cF 'placeholders résiduels' TODO.md` = **0**.
24. `git diff --stat` inchangé en nombre de fichiers : **3**
    (`JOURNAL.md`, `TODO.md`, `tools/predictions-260829.md`).
25. `git status --porcelain content` et `_drafts` : **0 ligne** chacun.
26. **P12 n'est pas réparable et ne se répare pas** : la chaîne doit vivre dans
    le fichier de prédictions, qui est la trace du litige. La prédiction était
    mal posée, pas le fichier. *Consignée telle quelle.*

### Bilan du bloc 1 — 25 prédictions, 19 tenues, 6 réfutées

| # | objet | verdict |
|---|---|---|
| 1–3 | garde de péremption (ASCII, copie b9, HEAD, 3 non commités / 0 hors artefacts + liste nominative, node, 3 mtimes) | **tenues** |
| 4 | `normalize --check` : 11 cibles en `[ok]` | **réfutée** — 10 `[ok]` + **1 `[skip]`** (`_drafts/captures-easyeda.md` introuvable) |
| 5–9 | ancres A1–A5 à **1** occurrence chacune, risque nommé sur A2 levé | **tenues** |
| 10 | 5 éditions, TODO 2 / JOURNAL 3 | **réfutée** — **7 éditions**, TODO **4** / JOURNAL **3** |
| 11 | `30 lignes sur 13 fiches` : JOURNAL 0, TODO 0 | **tenue** |
| 12 | même chaîne dans `predictions-260829.md` : 2 | **réfutée** — **10** |
| 13 | `seuls placeholders résiduels du corpus` dans TODO : 0 | **réfutée** — **1**, réparée par É7 |
| 14 | `29 lignes sur 15 fiches` : JOURNAL 2, TODO 2 | **tenue** |
| 15 | `content` 0, `_drafts` 0 | **tenue** |
| 16–17 | 3 fichiers au `--stat` ; `normalize --check` à 0 après édition | **tenues** |
| 18 | paire fausse : 4 lignes (JOURNAL 2, TODO 2, BACKLOG 0, conventions 0) | **tenue** |
| 19 | forme large `13 fiches` : 4 lignes | **réfutée** — **11** |
| 20 | forme large `30 lignes` : 4 lignes | **tenue** |
| 21 | `JOURNAL-archive.md` : 0 sur les trois formes | **réfutée** — **3** sur `13 fiches` |
| 22 | A6 à 1 occurrence | **tenue** |
| 23–25 | après É7 : 0 / 0, 3 fichiers, `content` et `_drafts` à 0 | **tenues** |

⚠ **QUATRE DES SIX RÉFUTATIONS SONT DES COMPTEURS QUI M'INCLUENT.** La 12 compte
la chaîne dans le fichier où je publie mes prédictions ; la 13 compte une
chaîne que **mon propre texte de correction** venait de réintroduire ; la 10
compte des éditions que la passe s'est ajoutées en cours de route ; la 19 et la
21 comptent une forme large que je n'avais pas balayée avant de la prédire.
*Le 29/08 (suite 2) avait nommé « un instrument qui se mesure lui-même » comme
une branche innocente ponctuelle. Ce n'est pas ponctuel : dès qu'une passe
écrit dans le même espace que celui qu'elle mesure, tout compteur prédit doit
nommer s'il s'inclut.* **À verser au bilan de la sous-règle.**

⚠ **ET LA 4 EST DE LA FAMILLE DE L'AMENDEMENT (7), UNE SÉANCE APRÈS SON
ÉCRITURE.** J'ai lu la liste `TARGETS` de `normalize-pilotage.js` — onze
entrées — **et la branche `existsSync` juste au-dessus**, puis prédit onze
`[ok]`. *Lire le code ne suffit pas : il faut lire la branche qu'on n'attend
pas.*

**Consigné, non réparé** : la clause É4b de `JOURNAL.md` l. 75 **cite** la
chaîne « seuls placeholders résiduels du corpus » entre guillemets, dans sa
réfutation. C'est la forme qu'emploie déjà `conventions.md` l. 1301 pour le
même chiffre ; elle reste greppable et c'est assumé — une citation encadrée
n'est pas une assertion. La différence avec É1 est que le TODO la portait dans
une phrase affirmative d'un item **ouvert**.

---

## Bloc 2 — G1, CADRAGE DU LOT 1 D'`esp32/`

### Composition du lot, arrêtée sur l'ordre de lecture du hub

`content/embarque/mcu/esp32/esp32.md` § *Tutoriels* classe le module en quatre
paliers de difficulté croissante. Le hub lui-même est **déjà traduit**
(`esp32-en.md`, seule jumelle du répertoire : **13 fiches FR, 1 EN**).

**Lot 1 = paliers 1 et 2, fiches propres au module, dans l'ordre du hub :**
`esp32-prise-en-main` · `esp32-gpio` · `esp32-serie` · `esp32-arduino-core`.
Les items *(transverse)* des mêmes paliers — `lire-une-datasheet`, `cpp`,
`niveaux-de-tension` — sont des fiches partagées du squelette, hors module,
**exclues**. Les paliers 3 et 4 (wifi, ble, uart, i2c, spi, deep-sleep,
freertos, idf) forment les lots suivants.

**Règle de repli publiée d'avance** : si `tot` du lot dépasse **6 657** (borne
du brief, plus haut lot du chantier), je retire `esp32-arduino-core`, dernier
du palier 2, et je remesure. Si `tot` dépasse 6 657 à trois fiches, je retire
`esp32-serie`.

### Prédictions

**Garde avant la passe**
27. Copie C124 `tools\batterie-sortie-2908b10.txt` ; HEAD **`e65192b`**
    inchangé ; date **2026-08-29**, heure **> 15:46:20** ; node **v24.15.0**.
28. Fichiers non commités : **5** *(hors artefacts de séance : **2**)*.
    Liste nominative : `M JOURNAL.md`, `M TODO.md` (les deux = mes éditions du
    bloc 1, **attendues**), `M tools/predictions-260829.md`,
    `?? tools/batterie-sortie-2908b8.txt`, `?? …b9.txt`. Toute sixième entrée
    ⇒ ARRÊT.
29. Dates d'écriture : `JOURNAL.md` et `TODO.md` **postérieures à 15:46**
    (mes éditions) ; `conventions.md` **inchangée à 15:07:47**. Une écriture
    sur `conventions.md` ⇒ ARRÊT.

**Chevron du module (C127, `mesure-chevron.mjs --lot` sur les 13 fiches)**
30. **Porteuses : 12 sur 13.** La non-porteuse est **`esp32.md`**, le hub —
    c'est une fiche-sommaire sans callout de code, et c'est aussi la seule déjà
    traduite. Réfutation : toute autre répartition.
31. ⚠ **La paire clôtures/blocs, et le brief peut se lire des deux façons.**
    Le code de `--anneau` publie `clotures en chevron` avec le commentaire
    « deux clotures = un bloc » ; le brief annonce « 22 **blocs** ».
    **Je prédis 44 clôtures et 22 blocs sur `esp32/`** — donc que le brief lit
    juste, et que les 12/22 sont bien une mesure du module, sous-ensemble des
    18 porteuses / 68 clôtures de l'anneau 2 restant.
    **Clause de réfutation** : si `mesure-chevron` rend **22 clôtures / 11
    blocs**, alors « 22 blocs » était la ligne de clôtures de l'anneau lue
    comme des blocs — l'amendement (7) une troisième fois — et **tous les
    dimensionnements en blocs du brief se divisent par deux**.
32. **Orphelines : 0. `ECART` non nul : 0 fiche** (le script publie
    `tot − deh − ded` et l'annonce nul partout).
33. **`ded` du module entier : 900 à 1 300 mots.** Base nommée : le taux de
    **50 mots par bloc mesuré sur `esp32/`** le 27/08 (suite 7) × 22 blocs =
    1 100. *Le taux est cité avec l'objet sur lequel il a été mesuré, comme la
    règle du 27/08 l'exige.* Réfutation : hors [900, 1 300].

**Volume du lot (C127 : deux volumes, jamais l'un sans l'autre)**
34. **`tot` du lot 1 : 4 800 à 6 400 mots**, donc **sous la borne 6 657**.
    Base : médiane du corpus **1 192 mots/fiche** (22/08), quatre fiches dont
    une *prise-en-main* qui est le format le plus lourd du module.
35. **`deh` du lot 1 : 4 500 à 6 100**, et **`tot` − `deh` = `ded` entre 250 et
    550** (5 à 11 blocs sur les 22 du module, à 50 mots).
36. **Décomposition par fiche, terme à terme** (règle du 28/08 : un total dans
    la fourchette ne valide pas la décomposition) — `tot` :
    `esp32-prise-en-main` **1 500 ± 400**, `esp32-gpio` **1 300 ± 400**,
    `esp32-serie` **1 100 ± 400**, `esp32-arduino-core` **1 500 ± 400**.
37. **Les 4 fiches du lot sont toutes porteuses de chevron.**

**Candidats C109 (`--style`)**
38. **Total du lot : 40 à 90 candidats.** ⚠ **Aucune base de taux valide** :
    la charge C109 rapportée au volume a été retirée le 27/08 (suite 3) après
    trois échecs, et la densité des quatre derniers lots va de **1,03 à 1,43
    pour cent mots** sans converger. La fourchette est donc large **par aveu
    d'ignorance**, pas par prudence. Réfutation : hors [40, 90].
39. **Seau `hors perimetre` : 60 à 140** — le code porte **quatre** familles
    (`titres`, `tableaux`, `alt`, **`tiret d intervalle numerique`**), la
    quatrième n'étant pas nommée sur la ligne d'affichage, et un module MCU est
    saturé de plages `3,3 V`, `0–65535`, `2,4 GHz`. *Compteur lu dans le code
    qui l'incrémente, amendement (7).*

**Anneau, dette (`--anneau 2`)**
40. **Anneau 2 : NET 54, restant 54, 79 412 mots** — inchangé depuis le 29/08
    (suite 2), aucune fiche n'ayant été traduite depuis.
41. **Angle mort du chevron sur le restant : 18 porteuses, 68 clôtures**,
    inchangé.
42. **Dette : 185 sources traduites, 55 cibles rouges, 80 252 mots, 0 hors
    anneaux.** La ligne `mots` porte un **compte de mots**, pas de cibles
    (leçon du 29/08 suite 2, réfutation 2 sur 7).

**Remesure de la paire `micropython-debug` (brief, non faite le 29/08 suite 3)**
43. **Dérive : 0 dérivée, 185 à jour.** Seule la jumelle **EN** a bougé ; la
    dérive compare le `source_sha256` de la **source FR**, inchangée.
44. **Foisonnement de la paire `micropython-debug` : entre +1,0 % et +7,0 %.**
    Fourchette large et assumée : le repère par famille est retiré depuis le
    29/08 (suite 2), le lot 6 étant sorti à +4,81 % avec **7,4 points d'écart
    interne**. **Critère de réfutation nommé avant la mesure** : hors
    [+1,0 %, +7,0 %] ⇒ la fourchette large elle-même ne tient pas, et il
    faudra cesser de prédire un foisonnement de paire isolée.
45. Le corpus EN a **augmenté** depuis les 217 746 mots du 29/08 (suite 2) :
    l'édition a remplacé une phrase française par sa traduction anglaise.
    **Delta attendu : −3 à +3 mots.**

### Garde de ce bloc
Lecture seule, **aucune édition**. Sortie de comparaison sauvegardée par la
batterie elle-même (C124).

### Complément au bloc 2 — la règle de repli se déclenche

`tot` du lot à quatre fiches = **7 392**, au-dessus de la borne **6 657**.
La règle publiée avant la mesure s'applique : **`esp32-arduino-core` est
retiré**, dernier du palier 2. **Lot 1 = `esp32-prise-en-main` ·
`esp32-gpio` · `esp32-serie`**, trois fiches.

46. **`tot` du lot à trois fiches : 6 107.** *Dérivation écrite AVANT la
    mesure, donc prédiction et non arithmétique dérivée — la portée de C119
    exclut explicitement les prédictions. Relancée à l'outil, pas publiée
    par addition.* Réfutation : toute autre valeur.
47. **`ded` du lot : 200 à 400 mots.** Les trois fiches portent **4 clôtures
    chacune** d'après la ligne `chevron:` de `--anneau`, soit **2 blocs
    chacune, 6 blocs au lot**, à **50 mots par bloc mesurés sur `esp32/`**
    (27/08 suite 7) = 300.
48. **`deh` du lot : 5 707 à 5 907.**
49. **`--style` sur les trois : C109 de prose 50 à 70** (74 aux quatre) ;
    **hors perimetre 10 à 17** (17 aux quatre) ; typographie française **0**,
    virgule ambiguë **0**, hors latin **0**, créées en EN **0**.

**`mesure-chevron.mjs --lot` sur les 13 fiches du module**
50. **porteuses 12 sur 13**, la non-porteuse étant **`esp32.md`** ;
    **44 clôtures, 22 blocs** ; **orphelines 0** ; **`ECART` 0 partout**.
51. **`ded` du module : 900 à 1 300** (prédiction 33, non tranchée).
52. **`ded` du lot de trois : identique au terme de la prédiction 47**, et la
    somme des `ded` des 13 fiches vaut le `ded` du total publié par le script.

**Remesure de la paire `micropython-debug`** — prédictions 43 à 45 inchangées.

### Bilan du bloc 2 (G1) — 26 prédictions, 18 tenues, 8 réfutées

**Cadrage arrêté.** Lot 1 = `esp32-prise-en-main` · `esp32-gpio` ·
`esp32-serie`. **`tot` 6 107, `deh` 5 836, `ded` 265** (C127 : les deux
volumes publiés ensemble, le dimensionnement se lit sur `deh`).
**12 clôtures, 6 blocs.** Candidats C109 **63**, hors périmètre **12**,
typographie française **0**, virgule ambiguë **0**, hors latin **0**.
Anneau 2 **NET 145 / restant 54 / 79 412**, angle mort **18 porteuses /
68 clôtures**. Dette **185 / 55 / 80 252 / 0 hors anneaux**. Dérive **0,
185 à jour**. Corpus FR **242 / 291 215**, traduites **185 / 209 535**,
restant **57 / 81 680**, EN **217 745**.

| # | prédiction | constat | verdict |
|---|---|---|---|
| 27 | garde : copie b10, HEAD `e65192b`, heure > 15:46, node v24.15.0 | tout conforme, 16:00:51 | tenue |
| 28 | non commités **5** (hors artefacts 2) + liste nominative | **6** (hors : **2**) | **réfutée** (total) / tenue (liste) |
| 29 | JOURNAL et TODO > 15:46, `conventions.md` inchangée | 15:48:38 / 15:49:20 / 15:07:47 | tenue |
| 30 | 12 porteuses sur 13, non-porteuse `esp32.md` | exact | tenue |
| 31 | **44 clôtures, 22 blocs** — le brief lit juste | **44 cl, 22 bl** | tenue |
| 32 | orphelines 0 ; **`ECART` 0 partout** | orphelines 0 ; **`ECART` ≠ 0 sur 11/12** | **réfutée** |
| 33 / 51 | `ded` du module 900–1 300 | **1 102** (50,1 mots/bloc) | tenue |
| 34 | `tot` du lot à 4 fiches 4 800–6 400 | **7 392** | **réfutée** |
| 35 | `deh` 4 500–6 100 / `ded` 250–550 à 4 fiches | lot abandonné par la règle de repli ; `deh` hors fourchette | **réfutée** |
| 36 | décomposition `tot` par fiche, 4 termes | 2 564 ✗ · 1 526 ✓ · 2 017 ✗ · 1 285 ✓ | **réfutée** (2/4) |
| 37 | les fiches du lot toutes porteuses | 3/3 | tenue |
| 38 | C109 de prose 40–90 (4 fiches) | **74** | tenue |
| 39 | `hors perimetre` 60–140 | **17** | **réfutée** |
| 40–42 | anneau 145/54/79 412 · 18/68 · dette 185/55/80 252/0 | exacts | tenues |
| 43 | dérive 0, 185 à jour | exact | tenue |
| 44 | foisonnement paire `micropython-debug` **+1,0 à +7,0 %** | **+8,2 %** | **réfutée, par sa clause** |
| 45 | corpus EN, delta −3 à +3 mots | **−1** (217 746 → 217 745) | tenue |
| 46 | `tot` du lot à 3 fiches = **6 107** | **6 107** | tenue |
| 47 | `ded` du lot 200–400 | **265** | tenue |
| 48 | `deh` du lot 5 707–5 907 | **5 836** | tenue |
| 49 | style à 3 fiches : C109 50–70, hors périmètre 10–17, quatre verdicts à 0 | 63 · 12 · 0/0/0/0 | tenue |
| 50 | chevron module : 12 / 44 / 22 / orphelines 0 / **ECART 0** | tout juste **sauf ECART** | **réfutée** |
| 52 | `ded` du lot cohérent avec la somme des fiches | 59 + 96 + 110 = 265 | tenue |

---

⚠ **TROUVAILLE : L'ANGLE MORT DU CHEVRON A UN QUATRIÈME SYMPTÔME, ET
L'INSTRUMENT DE C127 LE PUBLIE EN DÉCLARANT QU'IL EST IMPOSSIBLE.**
`mesure-chevron.mjs` écrit en tête « `ECART` non nul = `tot − deh − ded` ; il
doit etre 0 partout ». **Il est non nul sur 49 porteuses sur 50** —
**67 mots côté FR, 34 côté EN**.

**Mécanisme, lu dans le code et vérifié sur échantillon nommé.** Un bloc en
chevron s'ouvre sur `> ```cpp`. L'étiquette de langage `cpp` est **comptée
comme un mot de prose par C110** (le masque est ancré en début de ligne et ne
voit pas la clôture préfixée), **exclue de `deh`** (la ligne appartient au
bloc) et **absente de `ded`** (le contenu est *strictement* entre les
clôtures). Elle tombe donc entre les trois compteurs. **Preuve par le cas
négatif** : `esp32-idf` ouvre son unique bloc sur `> ``` ` **sans étiquette**
et sort à **`ECART` 0** — seule porteuse du corpus dans ce cas côté FR
(67 écarts pour 68 blocs).

**Ce que ça change, et ce que ça ne change pas.** `deh` **exclut correctement**
l'étiquette : le chiffre sur lequel C127 fait dimensionner les lots et lire le
foisonnement est **juste**. C'est `tot` qui sur-compte, de **1 mot par bloc
étiqueté** — **+67 sur 291 215 mots FR, soit 0,02 %**. *Le défaut est
négligeable en valeur et il n'est pas négligeable en nature* : l'en-tête du
script affirme une identité que le script lui-même dément à chaque ligne, et
`ECART` a été imprimé à toutes les mesures depuis le 27/08 sans être lu.
**Trois symptômes recensés au 24/08 (suite 3), il y en a quatre.**
*À verser à l'arbitrage : corriger l'en-tête, ou l'identité, ou les deux.*

⚠ **LA CLAUSE DE RÉFUTATION DU FOISONNEMENT DE PAIRE A TIRÉ.** `+8,2 %` contre
une fourchette **délibérément large** de +1,0 à +7,0. La clause disait : hors
fourchette ⇒ **cesser de prédire un foisonnement de paire isolée**. Elle
s'applique. *Et la cause est nommable ici sans mesure supplémentaire : la
paire a été éditée du côté EN seul, l'édition ajoutant de l'anglais sans
retirer de français — un foisonnement de paire dont un côté a bougé seul ne se
compare pas aux paires traduites d'un coup.* **Le repère de foisonnement du
lot 1 se lira sur le lot, jamais sur une paire.**

⚠ **LA 28 EST LA QUATRIÈME AUTO-INCLUSION DE LA SÉANCE.** J'ai énuméré cinq
fichiers non commités et oublié **la copie C124 que l'étape 0 du lancement
venait de créer**. Le chiffre hors artefacts, lui, est juste : c'est la garde
du point (9) qui a tenu, pas ma prédiction.

⚠ **LA 34 ET LA 36 ONT UNE BASE PÉRIMÉE.** J'ai dimensionné sur « médiane
**1 192** mots par fiche », valeur du 22/08 citée de mémoire ; la mesure du
jour rend **1 089**. Mais l'erreur ne va pas dans ce sens-là : les fiches
`esp32/` sont **plus lourdes** que la médiane, pas plus légères
(2 564 / 2 017). *Une base périmée m'a fait rater dans les deux directions à
la fois — le repère était faux ET le module ne s'y range pas.* **La 39 est du
même bois** : j'ai prédit 60–140 « hors perimetre » sur un module saturé de
plages numériques, il y en a **17**.

---

## Bloc 3 — G2, PASSES C109 SOUS C123

**Les 13 exemptions, nommées une par une AVANT l'édition** (pratique du lot 6 :
nommées avant, rendues une par une par l'outil après).

| fiche | l. | segment de droite | motif de l'exemption |
|---|---|---|---|
| prise-en-main | 34 | `autocomplétion, gestionnaire de cartes intégré` | nominal, énumération de deux items |
| prise-en-main | 64 | `pilote *CH341SER* depuis wch-ic.com` | nominal, aucun verbe |
| prise-en-main | 69 | `**Cas courant — le sélecteur de la barre d'outils.**` | chapô de section, forme libellé-glose (borne du 25/08) |
| prise-en-main | 75 | `**Chemin manuel — les menus *Outils*.**` | idem |
| prise-en-main | 143 ×2 | `modifier, téléverser, observer le changement attendu` | encadrée qui **énumère** trois infinitifs (précision du 25/08) |
| gpio | 19 | `lire un bouton, allumer une LED, mesurer une tension, commander un actionneur` | énumération de quatre infinitifs |
| gpio | 132 | `` `GPIO12` à HIGH = mauvaise tension Flash `` | nominal, second terme d'une énumération |
| serie | 113 | `pour lire une ligne entière, Serial.readStringUntil('\n')` | infinitif + nominal |
| serie | 183 | `moniteur ouvert, baud correct, mais sortie muette` | énumération adjectivale |
| serie | 193 | `pour un nombre, parseInt()` | infinitif + nominal |
| serie | 195 (a) | `rien, \n, \r, ou les deux` | énumération nominale |
| serie | 262 | `pour des analyses poussées, exporter vers un tableur` | infinitif |

⚠ **Trois cas nominaux traités malgré la lettre de C123**, et le motif est la
précision du 25/08 : *une encadrée qui **nomme un seul objet** tombe, une
encadrée qui **énumère** reste.* Ce sont `prise-en-main` l. 81
(`ici USB-SERIAL CH340 (COM9)`), l. 118 (`surtout les clones à pont CH340`),
l. 161 (`**2** sur la plupart des DevKit`), `serie` l. 81
(`sur puce USB native`) et l. 110 (`le menu à gauche du débit`). **C123 tranche
le doute vers le traitement**, et le précédent `un système d'exploitation
complet — Linux — là où…` est exactement cette forme.

### Prédictions

53. **50 occurrences traitées, 13 exemptées, sur 63.** Décomposition par
    fiche : `prise-en-main` **26 = 20 + 6**, `gpio` **14 = 12 + 2**,
    `serie` **23 = 18 + 5**. *Vérification terme à terme, un total juste
    n'est pas la preuve de la décomposition (règle du 28/08).*
54. **45 éditions distinctes** — cinq éditions couvrent deux occurrences
    chacune (les encadrées à deux tirets : `prise-en-main` 17 et 118,
    `serie` 81 et 110 ; plus `gpio` 63 dont les deux tirets encadrent).
    Réparties **18 / 11 / 16**.
55. **Contrôle d'unicité : les 45 ancres rendent 1 occurrence chacune.**
    Risque nommé : `gpio` porte **deux** renvois de forme
    `est transverse — voir [[…]]` (l. 72 `adc`, l. 122 `pwm`) ; les ancres
    incluent le lien. Une ancre à 0 ou ≥ 2 ⇒ **arrêt avant toute écriture**,
    les 44 autres non appliquées.
56. **Résidu C109 après passe : 13**, décomposé **6 / 2 / 5**, aux mêmes
    lignes qu'énumérées ci-dessus.
57. **Coût en mots de la passe : +4** (corollaire du 27/08 suite 3 — le coût
    en mots de toute passe FR se publie). Décomposition :
    `prise-en-main` **2 564 → 2 566** (+3 l. 59, −1 l. 87),
    `gpio` **1 526 → 1 526** (aucune réécriture, substitutions de ponctuation
    seules), `serie` **2 017 → 2 019** (+2 l. 195).
    **Lot `tot` 6 107 → 6 111.**
58. **`ded` inchangé à 265** — aucune édition ne touche l'intérieur d'un bloc
    en chevron. **`deh` 5 836 → 5 840.** **12 clôtures, 6 blocs, inchangés.**
59. **Après passe : typographie française 0, virgule ambiguë 0, hors alphabet
    latin 0, C109 créées en EN 0, `hors perimetre` 12** (inchangé : mes
    éditions ne touchent ni titre, ni tableau, ni alt, ni plage numérique).
60. **`git status --porcelain content` : 3 lignes**, les trois sources du lot.
    Aucune autre fiche touchée.

**Instrument de la passe, décision C117.** Les 45 substitutions passent par un
script **jetable écrit hors du dépôt** (répertoire de travail de session), qui
**vérifie l'unicité des 45 ancres et n'écrit rien si une seule échoue** —
mécanisme du lot 6, où l'atomicité a refusé au lieu d'appliquer 37 sur 38.
*Motif du hors-dépôt* : C114 veut le script jetable, C122 exige l'ASCII strict
et les ancres C109 sont **nécessairement accentuées** ; écrit hors du dépôt, il
reste jetable, ne laisse aucune empreinte git et ne prétend pas être le
`seance.ps1` que C122 et C126 régissent. **Coût de revert : `git checkout --`
sur les trois sources.**

### Bilan du bloc 3 (G2) — 8 prédictions, 8 tenues, 0 réfutée

| # | prédiction | constat |
|---|---|---|
| 53 | 50 traitées / 13 exemptées ; 26 = 20+6, 14 = 12+2, 23 = 18+5 | exact, terme à terme |
| 54 | 45 éditions distinctes, 18 / 11 / 16 | 45 |
| 55 | les 45 ancres à **1** occurrence | **45 / 45**, aucune écriture refusée |
| 56 | résidu **13**, décomposé **6 / 2 / 5**, aux lignes nommées | 13, aux **13 lignes exactes** nommées avant l'édition |
| 57 | `tot` 6 107 → **6 111** ; 2 566 / 1 526 / 2 019 | exact aux trois termes |
| 58 | `ded` 265 inchangé ; `deh` 5 836 → **5 840** ; 12 cl / 6 bl | exact |
| 59 | typographie 0, virgule 0, hors latin 0, créées EN 0, hors périmètre **12** | exact |
| 60 | `content` : 3 fichiers | 3 |

✅ **LES TREIZE EXEMPTIONS ONT ÉTÉ NOMMÉES UNE PAR UNE AVANT L'ÉDITION, PUIS
RENDUES UNE PAR UNE PAR L'OUTIL APRÈS.** C'est la garde qui distingue un
verdict d'un compteur : elle porte sur ce que la règle *décide*, pas sur ce
qu'un script *compte*. **Aucune réfutation de verdict sur ce bloc**, et le
coût en mots de la passe (+4) était prédit **à la fiche près**.

**Trois voies de résolution employées, dans les proportions du chantier.**
Découpage en phrases **17 fois**, virgule et mots de liaison **13 fois**,
parenthèses **11 fois** (dont **8 sur un renvoi `— voir [[x]]`**, la
spécialisation notée le 25/08), deux-points **4 fois**.

---

## Bloc 4 — G3, GÉNÉRATION DES TROIS SQUELETTES

### Les trois titres EN, arrêtés sous C125 avant la génération

**Test 1 écarté** : aucune des trois formes n'est un libellé de désambiguïsation.
**Test 2 écarté pour les trois, par la clause du 27/08 (suite 7)** : elle exige
que les deux jumelles portent le **même** `title:` français. Or le corpus FR
distingue déjà par le qualificatif de famille — `Prise en main d'Arduino` vs
`Prise en main de l'ESP32`, `Configurer les GPIO Arduino` vs `Configurer les
GPIO de l'ESP32`, `Moniteur série Arduino` vs `Moniteur série de l'ESP32`.
**Les trois descendent au test 3**, et la forme anglaise s'y lit **en
production**, jamais déduite.

| fiche | `title:` EN | forme lue sur |
|---|---|---|
| `esp32-prise-en-main-en` | **`Getting started with the ESP32`** | `Getting started with the ESP8266` — même forme, famille à chiffres avec **article défini** ; corroborée par `Getting started with Arduino` et `Getting started with MicroPython` (**3 `title:` en production**) |
| `esp32-gpio-en` | **`Configuring ESP32 GPIO`** | `Configuring Arduino GPIO` et `Configuring MicroPython GPIO` (**2 `title:`**) |
| `esp32-serie-en` | **`ESP32 serial monitor`** | `Arduino serial monitor` (**1 `title:`**) |

61. **Aucune collision de titre** — les trois portent le mot de famille. **Le
    chantier FR de nommage reste à dix paires**, il ne grossit pas.
62. **Garde de génération** : les trois cibles sont **ABSENTES**
    (`content/en/embarque/mcu/esp32/` ne porte que `esp32-en.md`).
    **Jamais de `--force`.** Une cible présente ⇒ arrêt.
63. **`--dry` d'abord, live ensuite.** Les **trois compteurs sont égaux par
    construction** (le squelette n'est pas une traduction) : **0 divergente**
    sur les trois.
64. **Le squelette porte le `title:` FRANÇAIS.** Les trois titres ci-dessus
    sont posés **à la rédaction**, pas à la génération. Réfutation : un
    `title:` anglais dans le squelette.
65. **Après génération : corpus EN 185 → 188 fiches.**
    `--controle` **188 / 0 / 0 sur 0**. Dérive **0, 188 à jour**.
66. **Blocs de code par fiche** (compteur du générateur) : `prise-en-main`
    **3 à 7**, `gpio` **4 à 9**, `serie` **5 à 10**. Chacune porte en outre
    **2 blocs en chevron**, que ce compteur **sous-compte** — c'est le
    symptôme 2 de C127, et `mesure-chevron --tout` le contrôlera à la clôture.

---

## Bloc 5 — G4, RÉDACTION DES TROIS FICHES EN

67. **Foisonnement du lot, lu sur `deh` (C127) : entre +1,5 % et +7,5 %.**
    ⚠ **Fourchette large et assumée, et son critère de réfutation est écrit
    avant la mesure.** Le repère par famille est **retiré** depuis le 29/08
    (suite 2) — lot 6 sorti à +4,81 % avec 7,4 points d'écart interne — et la
    charge C109 rapportée au volume l'a été le 27/08. Les quatre derniers lots
    vont de **+2,50 %** (`cpp` lot 2, dilué par le code inline) à **+4,81 %**.
    **Réfutation** : une valeur hors [+1,5 %, +7,5 %] ⇒ *la fourchette large
    elle-même ne tient pas*, et le foisonnement de lot cesse de se prédire,
    comme le repère de famille et la charge C109 avant lui.
68. **Écart interne entre les trois fiches : 0 à 8 points.** Aucune base pour
    prédire son rang ; le lot 6 a sorti 7,4 à l'intérieur d'une même famille.
69. **Foisonnement de `ded` : +0 % à +3 %.** Base nommée : +0,8 % mesuré le
    27/08 (suite 7) sur 9 paires porteuses, +1,45 % sur le lot `cpp` 2. Le
    contenu des blocs est quasi inerte, mais il porte des **commentaires**.
    `ded` du lot est de **265** mots, donc **265 → 265 à 273**.
70. **Report un pour un des 13 exemptions C109 : 13 en EN, aux mêmes
    emplacements**, décomposées **6 / 2 / 5**.
71. **C109 créées par la traduction : 0.** Une occurrence créée en anglais n'a
    jamais été arbitrée en français.
72. **Typographie française côté EN : 0** (verdict mécanique). ⚠ **Risque
    nommé, dixième séance consécutive** : les **alt d'image** sont recopiés du
    français avec leurs espaces avant `;` et `:`. `esp32-prise-en-main` porte
    **11 embeds**, le plus gros habitat du lot. *L'alt est hors périmètre pour
    C109 et **dans** le périmètre pour le § 5.3.* Contrôle explicite avant la
    batterie de clôture.
73. **Hors alphabet latin : 0. Virgule ambiguë : 0.**
74. **Libellés d'interface** : la production tranche. `micropython-debug-en`
    écrit `*Exécuter → Déboguer le script actuel* (Run → Debug current
    script)` — **libellé français conservé, équivalent anglais entre
    parenthèses**, parce que les captures montrent l'IDE en français. Même
    traitement pour l'IDE Arduino : `*Outils → Type de carte*`,
    `*Téléverser*`, `*Traceur série*`. Les libellés **déjà anglais dans la
    source** (`Select other board and port…`, `New Line`, `Both NL & CR`,
    `USB CDC On Boot`) restent tels quels — ils sont anglais **en
    production**, pas traduits par moi.
75. **Après rédaction : `--controle` 188 / 0 / 0 sur 0**, dérive **0, 188 à
    jour**, corpus EN **217 745 → entre 221 400 et 224 500**.
76. **`mesure-chevron --tout` à la clôture (C127) : 19 paires porteuses des
    deux côtés, 0 divergente** — 16 aujourd'hui plus les trois du lot, qui
    portent **2 blocs chacune côté FR** et doivent en porter **2 côté EN**.
    C'est le symptôme 2, celui qu'aucun autre contrôle ne voit.
77. **Aucun `title:` en collision** : les trois portent le mot de famille.

### Correctif É8 — la typographie française attrapée dans un alt, onzième séance

⚠ **PRÉDICTION 72 RÉFUTÉE, ET PAR L'HABITAT QU'ELLE NOMMAIT.** Verdict
mécanique **1** : `esp32-prise-en-main-en` **l. 124**, `100 %` avec espace
française, **dans le texte alternatif** de `done-uploading.png`. *J'ai nommé
le risque des alt au bloc 5, prédit 0, et je l'ai commis dans l'alt.* Le lot 6
l'avait vu dans un alt lui aussi ; c'est la **onzième séance consécutive** et
le deuxième alt d'affilée.

78. **É8** — ancre `` les lignes d'écriture à 100 %,`` → non : ancre anglaise
    `the writing lines at 100 %,`, **1 occurrence**, remplacée par
    `the writing lines at 100%,`. **Coût en mots : 0** (`%` n'est pas un mot
    au motif C110).
79. Après É8 : **typographie française 0**, `tot` du lot EN **inchangé**,
    C109 de prose **11**, hors périmètre **12**.

### Bilan du bloc 5 (G4 + clôture) — 13 prédictions, 10 tenues, 3 réfutées

| # | prédiction | constat | verdict |
|---|---|---|---|
| 67 | foisonnement du lot sur `deh` **+1,5 à +7,5 %** | **+3,70 %** (5 840 → 6 056) | tenue |
| 68 | écart interne 0 à 8 points | **3,63** (gpio +1,82 · prise-en-main +3,43 · serie +5,45) | tenue |
| 69 | `ded` **+0 à +3 %** | **−0,38 %** (265 → **264**) | **réfutée** |
| 70 | report un pour un **13** en EN, 6 / 2 / 5 | **11**, **5 / 1 / 5** | **réfutée** |
| 71 | C109 créées par la traduction 0 | 0 | tenue |
| 72 | typographie française **0** | **1**, dans un **alt** | **réfutée**, puis réparée (É8) |
| 73 | hors alphabet latin 0, virgule ambiguë 0 | 0 / 0 | tenue |
| 74 | libellés d'interface : forme de production, français + anglais entre parenthèses | appliquée 6 fois | tenue |
| 75 | `--controle` 188 / 0 ; dérive 0 / 188 ; corpus EN 221 400–224 500 | 188 / 0 ; 0 / 188 ; **224 071** | tenue |
| 76 | **19 paires porteuses, 0 divergente** (C127) | **19 / 0** | tenue |
| 77 | aucun `title:` en collision | aucun | tenue |
| 78–79 | É8 : ancre 1, coût 0 mot ; après : typo 0, C109 11, hors périmètre 12 | exact | tenues |

⚠ **`ded` FOISONNE NÉGATIVEMENT, PREMIÈRE FOIS DU CHANTIER.** 265 → **264**,
soit **−0,38 %**, quand les deux mesures connues donnaient **+0,8 %**
(27/08 suite 7, 9 paires) et **+1,45 %** (lot 2 `cpp`). La décomposition dit
où : `gpio` **96 → 94**, `serie` **110 → 111**, `prise-en-main` **59 → 59**.
*La règle en éprouvage — « `ded` se prédit avec une marge, pas comme une
constante » — est confirmée, et sa marge doit désormais **inclure le négatif**.
Un commentaire de code français rendu plus court en anglais suffit à faire
descendre le compteur, et rien dans les deux mesures antérieures ne le laissait
prévoir.*

⚠ **LA 70 EST UNE RÉFUTATION DE VERDICT, ET LA RÈGLE QUI M'A MANQUÉ ÉTAIT
DÉJÀ ÉCRITE.** J'ai prédit un report un pour un des 13 exemptions ; il y en a
**11**, parce que **deux point-virgules ont été traités à coût nul** — la règle
d'usage sous C123 du 27/08 (suite 3) : *traiter aussi à coût nul l'exemption
qui porterait une typographie française en anglais, là où la virgule est non
ambiguë*. Elle s'applique à `prise-en-main` l. 64 et `gpio` l. 132 ; elle ne
s'applique **pas** aux deux point-virgules de `serie` (l. 113 et 193), dont les
segments portent déjà des virgules. **Les 11 restants sont rendus aux 11 lignes
exactes prévues.** *J'ai écrit la prédiction avant d'avoir relu la règle, et la
règle était dans le fichier que j'avais ouvert le matin même.*

---

## BILAN GÉNÉRAL DE LA SÉANCE — LOT 1 D'`esp32/`

| bloc | prédictions | tenues | réfutées |
|---|---|---|---|
| G — garde d'ouverture | 8 | 7 | **1** |
| 0 — instruction de l'écart | 12 | 7 | **5** |
| 1 — correction du pilotage (arbitrage B) | 25 | 19 | **6** |
| 2 — G1 cadrage | 26 | 18 | **8** |
| 3 — G2 passes C109 | 8 | **8** | **0** |
| 4 — G3 génération | 6 | **6** | **0** |
| 5 — G4 rédaction et clôture | 13 | 10 | **3** |
| **total** | **98** | **75** | **23** |

**Taux de réfutation 23,5 %, contre 7,6 % au lot 6.** ⚠ *Et c'est le résultat
attendu, pas une dégradation : le lot 6 était « le lot le plus facile du plan,
quatre fiches, zéro porteuse de chevron ». `esp32/` était annoncé comme le vrai
test ; il a réfuté trois fois plus.*

**Où les réfutations se concentrent, et où elles disparaissent.** Les blocs
**3 et 4 — les passes C109 et la génération, c'est-à-dire les blocs de
verdict — sortent à 14 prédictions et 0 réfutation.** Les 23 réfutations sont
toutes dans les blocs de **mesure** et de **cadrage**. *Le protocole se trompe
sur ce qu'un compteur va rendre, pas sur ce que la règle décide.*

**Deux réfutations de verdict sur 23**, et les deux ont la même forme : **la
règle qui aurait donné la bonne réponse était déjà écrite dans une source que
j'avais ouverte le jour même** — le TODO l. 472 pour l'écart des placeholders
(prédiction 11), la règle d'usage sous C123 du 27/08 pour le report un pour un
(prédiction 70).

⚠ **CINQ RÉFUTATIONS SUR 23 SONT DES COMPTEURS QUI M'INCLUENT** (12, 13, 10,
28, et la 72 qui compte une faute de mon propre alt). *Le 29/08 traitait
« l'instrument qui se mesure lui-même » comme une branche innocente
ponctuelle ; sur une séance entière il en apparaît cinq.* **Règle d'usage
proposée : sous exécution directe, tout compteur prédit déclare s'il inclut les
artefacts de la séance en cours — le fichier de prédictions, les copies C124,
et le texte des corrections elles-mêmes.**
