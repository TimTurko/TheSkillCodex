# Couverture des acquis d'apprentissage — en cours

> Fichier de travail privé (non publié). Capitalise les cartographies fiche par fiche pendant la **passe B** (lecture en aveugle), avant écriture des champs `aa:` dans les front matter (faite en une passe groupée une fois le pattern stabilisé sur 2-3 fiches).
> Source de vérité : `referentiel-normalise.md` (57 critères distincts, 12 AA, 5 domaines).

## Convention de granularité (3 niveaux)

- **Couvert** : critère qui est l'objet central d'une fiche dédiée OU d'une section H2/H3 dédiée au sein d'une trame/transverse.
- **Effleuré** : critère mentionné en passant (H4, dans un `[!example]`, via un wiki-link uniquement, ou en posture/pièges sans traitement central).
- **Non couvert** : pas du tout présent, mais qui devrait l'être. Se déduit par différence avec l'ensemble du référentiel (pas listé fiche par fiche, calculé en synthèse finale). Identifie un trou à combler.
- **Hors scope** (acquise 26/05 suite 2) : critère du référentiel école que le projet TheSkillCodex ne traite pas par choix pédagogique, parce qu'il relève de l'évaluation transversale des étudiants (soft skills, engagement, participation, terminologie professionnelle évaluée en revue par les enseignants) plutôt que du contenu enseigné par le wiki. À distinguer de **Non couvert** : pas un trou, une décision éditoriale. Cas identifiés : `RA-PROJET-C04-4/PROJ/3` (terminologie technique écrit/oral), `RA-PROJET-C07-1/PROJ/4` (participer aux tâches), `RA-PROJET-C07-1/PROJ/6` (participer aux événements).

## Grille de lecture par phase du wiki (acquise 26/05 suite 2)

La cartographie se lit en distinguant deux phases du wiki :

- **Phase 1 du wiki** (terminée à ce jour : 5 trames du V + 3 transverses) couvre principalement les domaines **PROJ + MEO + ESE** (démarche projet, gestion de projet, écoconception, sécurité-qualité). Un critère PROJ/MEO/ESE non couvert ou effleuré dans la phase 1 = **vrai trou à interroger** (oubli ou mauvais rattachement).
- **Phase 2 du wiki** (à venir : fiches-tutos/notions disciplinaires) couvrira la majorité des critères **EEE + MME**. Un critère EEE/MME non couvert ou effleuré dans la phase 1 = **trou prévu**, sans problème, devient input de priorisation pour la phase 2.

**Convention pédagogique actée 26/05 suite 2** : pour les critères en lien avec **EEE et info embarquée**, une fiche-tuto par critère ou par groupe cohérent en phase 2. Pas de critère EEE qui reste en effleurage permanent — chacun doit avoir un endroit nommé dans le wiki phase 2. Quand un critère cite plusieurs solutions (ex. logigramme/MAE/grafcet/chronogramme pour `EEE/5`), 1 fiche par solution plutôt qu'une fiche regroupante.

La synthèse globale (en fin de passe B+A) séparera ces deux familles de trous pour orienter la suite du travail.

## Convention de format des entrées

```yaml
fiche: <nom-fiche>
couvert:
  - code_crit  # commentaire bref localisant le critère dans la fiche
effleure:
  - code_crit  # idem
```

---

## Cartographies par fiche

### specification-technique.md

```yaml
couvert:
  - RA-PROJET-C04-4/PROJ/1  # Analyse fonctionnelle — étape 1 (bête à cornes) + étape 3 (pieuvre)
  - RA-PROJET-C04-4/PROJ/2  # Solutions existantes — étape 2 (état de l'art)
  - RA-PROJET-C04-4/PROJ/7  # Performances désirées — étape 4 (critère/niveau/flexibilité)
  - RA-PROJET-C07-1/PROJ/2  # Outils GP (Gantt/PERT/WBS/livrables) — étape 5
  - RA-MEO-C10-3/MEO/1      # Outils de planification et gestion d'équipe — étape 5
effleure:
  - RA-PROJET-C04-4/PROJ/4  # Schéma bloc fonctionnel — mentionné étape 3, renvoi à concept
  - RA-PROJET-C04-4/PROJ/5  # Différencier écoconception/écodesign — étape 6 intégration transversale (fiche `ecodesign` à créer)
  - RA-PROJET-C04-4/PROJ/6  # Interactions entre blocs depuis CdCF — étape 4
  - RA-PROJET-C07-1/PROJ/1  # Tableau de bord et indicateurs — étape 5 matrice de risques
  - RA-MEO-C10-3/MEO/2      # Répartir les tâches — étape 5 WBS
  - RA-MEO-C08-6/MEO/1      # Transmettre informations équipe — section Équipe
```

**Bilan** : 5 Couvert + 6 Effleuré + 1 Hors scope = 11/57 critères touchés (après retrait `PROJ/3` reclassé hors scope). L'AA central `RA-PROJET-C04-4/PROJ` (CdCF) reste intégralement balayé hors hors scope (6/6 critères non hors-scope, dont 4 Couvert et 2 Effleuré).

---

### concept.md

```yaml
couvert:
  - RA-EEE-C03-2/EEE/1       # Choisir capteurs/actionneurs — étape 2 (matrice élec)
  - RA-EEE-C03-2/EEE/2       # Choisir contrôleurs — étape 2 (matrice élec)
  - RA-MME-C02-1/MME/1       # Choisir matériaux adaptés — étape 2 (branche méca) + étape 4
  - RA-PROJET-C04-4/PROJ/4   # Schéma bloc fonctionnel — étape 1 (décomposition)
  - RA-PROJET-C04-4/PROJ/6   # Définir interactions entre blocs — étapes 1 (FAST) et 3 (interfaces 2 à 2)
  - RA-ESE-C09-2/ESE/4       # Évaluer bénéfices d'amélioration — étape 2 (score écoconception pondéré)
  - RA-ESE-C09-2/ESE/5       # Sélectionner améliorations et justifier — étape 2 (matrice + arbitrage)
effleure:
  - RA-EEE-C03-2/EEE/3       # Sources d'énergie + dim alimentation — étape 2 + étape 4 (marge courant)
  - RA-PROJET-C03-3/EEE/2    # Analyser comportement sous-ensemble — étape 4 (pré-dim courant/dissipation, partiel)
  - RA-MME-C02-1/MME/4       # Identifier sollicitations mécaniques — étape 4 (pré-dim couple, flèche, transitoires)
  - RA-MME-C02-1/MME/6       # Caractéristiques mécaniques actionneurs — étape 2 + étape 4
  - RA-MME-C03-1/MME/2       # Note de calcul dimensionnement transmission — étape 4 (pré-dim méca, pas note formelle)
  - RA-MME-C03-1/MME/4       # Paramètres dynamiques du système — étape 4 (modèle simplifié transitoire)
  - RA-ESE-C09-2/ESE/3       # Proposer améliorations cycle de vie — étape 2 (écoconception comme critère)
  - RA-PROJET-C07-1/PROJ/2   # Outils GP (Gantt/WBS) — section Équipe (revue inscrite au rétroplanning)
  - RA-MEO-C08-6/MEO/1       # Transmettre informations équipe — section Équipe (interfaces métiers)
```

**Bilan** : 7 Couvert + 9 Effleuré + 1 Hors scope = 16/57 critères touchés (après retrait `PROJ/3` reclassé hors scope). La phase concept couvre nettement plus large que spec-tech (16 vs 11) parce qu'elle mobilise les 3 disciplines (élec / méca / info) simultanément. Les effleurements EEE/MME sont attendus : ils renvoient implicitement vers les futures fiches phase 2 du wiki.

---

### preuve-de-concept.md

```yaml
couvert:
  - RA-PROJET-C05-3/PROJ/3   # Concevoir protocoles de test — étape 1 (triplet hypothèse/critère/protocole)
  - RA-PROJET-C05-3/PROJ/4   # Réaliser les tests — étape 3 (montage banc, exécution)
  - RA-PROJET-C05-3/PROJ/5   # Analyser les résultats des tests — étape 4 (confronter, synchroniser, statuer)
  - RA-PROJET-C05-3/PROJ/2   # Proposer axes d'amélioration prototype — étape 4 (statuer ajustement/retour amont, voies de résolution explorées)
  - RA-MEO-C08-6/MEO/3       # Routines travail collectif — étape 4 (synchronisation en réunion d'équipe complète, format tour de table)
effleure:
  - RA-PROJET-C04-4/PROJ/7   # Performances désirées — étape 1 (critère en miroir CdCF)
  - RA-EEE-C03-2/EEE/1       # Capteurs/actionneurs via moyens prototypage rapide (Arduino) — étape 2 (moyens mobilisés)
  - RA-PROJET-C07-1/PROJ/2   # Outils GP (Gantt/WBS) — section Équipe (rétroplanning, intégration des aléas)
  - RA-PROJET-C07-1/PROJ/3   # Gérer le budget — étape 2 (validation acquisition exceptionnelle)
  - RA-ESE-C09-2/ESE/2       # Interpréter ACV — étape 4 + section Équipe (révision avec mesures réelles)
  - RA-ESE-C09-2/ESE/3       # Proposer améliorations cycle de vie — section Équipe (mesures réelles)
  - RA-MEO-C08-6/MEO/1       # Transmettre informations équipe — section Équipe
```

**Bilan** : 5 Couvert + 7 Effleuré + 1 Hors scope = 12/57 critères touchés (après retrait `PROJ/3` reclassé hors scope). Ratio Couvert plus équilibré que première proposition grâce à deux montées (PROJ/C05-3/2 axes d'amélioration et MEO/C08-6/3 routines collectives).

**Trou phase 2 identifié** : `RA-PROJET-C03-3/EEE/2` (Analyser le comportement d'un sous-ensemble d'un schéma jusqu'au composant) ressort de PoC — à traiter dans une fiche-tuto dédiée (nom proposé `analyse-de-schema-electronique`, ajout TODO).

---

### dossier-technique.md

```yaml
couvert:
  - RA-PROJET-C03-3/PROJ/4   # Adapter, modifier conception/matériaux/procédés et docs — étape 1 (propagation PoC→dossier)
  - RA-PROJET-C03-3/EEE/5    # Concevoir/réaliser carte électronique — étape 2 (schémas câblés + routage PCB)
  - RA-PROJET-C04-4/PROJ/6   # Définir interactions entre blocs — étape 2 (interfaces, revue cohérence inter-disciplines)
  - RA-EEE-C03-2/EEE/4       # Intégrer circuits électroniques (acquisition/traitement/transmission/conversion) — étape 2
  - RA-MME-C03-1/MME/3       # Créer assemblage CAO — étape 2 (plans cotés, fichiers STL/DXF/STEP)
  - RA-MME-C03-1/MME/5       # Réaliser nomenclature à partir d'une CAO — étape 3 (BOM agrégée)
  - RA-ESE-C09-2/ESE/1       # Mener l'ACV — étape 3 (ACV simplifiée sur BOM réelle)
  - RA-ESE-C09-2/ESE/2       # Interpréter ACV — étape 3 (contributeurs dominants identifiés)
  - RA-PROJET-C07-1/PROJ/2   # Outils GP (Gantt/WBS) — étape 3 (rétroplanning approvisionnement)
  - RA-PROJET-C07-1/PROJ/3   # Gérer budget — étape 3 + étape 5 (consolidation, arbitrages, émission)
effleure:
  - RA-PROJET-C04-4/PROJ/4   # Schéma bloc fonctionnel — étape 2 (réutilisé en carte d'interfaces, central en concept)
  - RA-EEE-C03-2/EEE/3       # Sources d'énergie + dim alim — étape 3 (alim 12V/5A référencée BOM, dim central en concept)
  - RA-EEE-C03-2/EEE/5       # Concevoir système de commande par algorithme — étape 2 (archi logicielle UML/modules)
  - RA-MME-C02-1/MME/2       # Procédés d'assemblage — étape 2 (procédé fabrication spécifié)
  - RA-MME-C03-1/MME/6       # Optimiser conception — étape 2 (choix matériau et procédé argumenté)
  - RA-PROJET-C07-1/PROJ/1   # Tableau de bord indicateurs — étape 5 (tableau suivi commandes/livraisons)
  - RA-MEO-C08-6/MEO/1       # Transmettre infos équipe — étapes 1 et 4 (synthèse écrite, sous-dossiers ciblés)
```

**Bilan** : 10 Couvert + 7 Effleuré + 1 Hors scope = 17/57 critères touchés (après retrait `PROJ/3` reclassé hors scope). Reste le pic de couverture parmi les 4 trames cartographiées jusque-là (spec-tech 11, concept 16, PoC 12). Cohérent : dossier-technique consolide toutes les disciplines + budget + ACV + planning en simultané.

**Trous phase 2 identifiés** :
- `RA-EEE-C03-2/EEE/5` (commande par algorithme : logigramme/MAE/grafcet/chronogramme) — 4 fiches-tuto à créer, 1 par méthode (ajout TODO).
- `RA-MME-C03-1/MME/6` (optimisation conception) — fiche-tuto `optimisation-mecanique` à créer (ajout TODO).

**Trou phase 1 à vérifier sur `gestion-de-projet.md`** : `RA-MEO-C10-3/MEO/5` (proposer outils de prise de décision collective). Si absent là-bas aussi, vrai trou à corriger.

---

### integration-et-tests.md

```yaml
couvert:
  - RA-PROJET-C03-3/EEE/2    # Analyser comportement sous-ensemble jusqu'au composant — étape 2 (validation chaîne élec, niveau 0)
  - RA-PROJET-C03-3/PROJ/6   # Valider inter-opérabilité sous-ensembles réalisés — étape 3 (niveaux 2-3 composition + système complet)
  - RA-PROJET-C05-3/PROJ/1   # Réaliser tests d'intégration — étape 3 (cœur de l'étape, niveaux 1-4)
  - RA-PROJET-C05-3/PROJ/2   # Proposer axes d'amélioration prototype — étape 4 (bilan technique, pistes documentées)
  - RA-PROJET-C05-3/PROJ/3   # Concevoir protocoles de test — étape 3 (multi-couverture PoC + ici, tutoriel gonflé OK)
  - RA-PROJET-C05-3/PROJ/4   # Réaliser tests — étape 3 (multi-couverture PoC + ici)
  - RA-PROJET-C05-3/PROJ/5   # Analyser résultats des tests — étape 3 niveau 4 (multi-couverture)
effleure:
  - RA-PROJET-C04-4/PROJ/7   # Performances désirées — étape 3 niveau 4 (confrontation aux critères CdCF)
  - RA-PROJET-C07-1/PROJ/2   # Outils GP — étape 4 (planning effectif vs rétroplanning de phase 1)
  - RA-PROJET-C07-1/PROJ/3   # Gérer budget — étape 4 (budget consommé vs prévu, multi-couverture)
  - RA-ESE-C09-2/ESE/2       # Interpréter ACV — étape 4 (ACV réelle vs estimée, 3ᵉ contexte)
  - RA-ESE-C09-2/ESE/3       # Proposer améliorations cycle de vie — étape 4 (multi-couverture)
  - RA-MEO-C08-6/MEO/3       # Routines travail collectif — étape 4 (REX en réunion dédiée, multi-couverture PoC)
hors_scope:
  - RA-PROJET-C04-4/PROJ/3   # Terminologie technique écrit/oral — étape 5 (rapport + soutenance). Évaluation transversale enseignants, pas contenu wiki.
  - RA-PROJET-C07-1/PROJ/4   # Participer aux tâches — évaluation transversale, hors périmètre tutoriel.
  - RA-PROJET-C07-1/PROJ/6   # Participer aux événements — évaluation transversale, hors périmètre tutoriel.
```

**Bilan** : 7 Couvert + 6 Effleuré + 3 Hors scope = 13 critères touchés sur 54 cartographiables (57 – 3 hors scope du référentiel détectés ici). Moyenne stable parmi les trames du V après normalisation hors scope (spec-tech 11, concept 16, PoC 12, dossier-tech 17, integration 13).

**Reclassement majeur sortie de session** : `RA-PROJET-C03-3/EEE/2` (analyser comportement sous-ensemble jusqu'au composant) **était identifié trou phase 2** en PoC. Reclassé en Couvert ici car le critère est matériellement traité par l'étape 2 de la trame. La fiche-tuto `analyse-de-schema-electronique` conservée au TODO **avec motivation reformulée** : tuto pédagogique propre (popover depuis integration-et-tests étape 2), pas trou AA.

---

### gestion-de-projet.md

```yaml
couvert:
  - RA-PROJET-C07-1/PROJ/1   # Tableau de bord et indicateurs — bloc 2 (Gantt + matrice + registre engagements)
  - RA-PROJET-C07-1/PROJ/2   # Outils GP (Gantt/PERT/WBS/livrables) — blocs 1 et 2 (cadence + outillage)
  - RA-PROJET-C07-1/PROJ/3   # Gérer le budget — bloc 2 (suivi budgétaire ajouté patch 26/05 suite 2 comme 6ᵉ outil canonique)
  - RA-MEO-C10-3/MEO/1       # Outils planification et gestion d'équipe — bloc 1 (cadence à 3 niveaux)
  - RA-MEO-C10-3/MEO/2       # Répartir les tâches — bloc 3 (animation, registre, qui fait quoi)
  - RA-MEO-C10-3/MEO/5       # Outils de prise de décision collective — bloc 3 (3 options + règle pour dépassement)
  - RA-MEO-C10-3/MEO/6       # Organiser documents partagés — bloc 2 (drive partagé, convention nommage)
  - RA-MEO-C08-6/MEO/1       # Transmettre informations équipe — bloc 3 (CR, traçabilité, alertes)
  - RA-MEO-C08-6/MEO/3       # Routines travail collectif — bloc 3 (point hebdo créneau fixe, animation, OdJ veille)
hors_scope:
  - RA-PROJET-C07-1/PROJ/4   # Participer aux tâches — évaluation transversale
  - RA-PROJET-C07-1/PROJ/5   # Être force de proposition — évaluation transversale (par analogie /4 et /6)
  - RA-PROJET-C07-1/PROJ/6   # Participer aux événements — évaluation transversale
```

**Bilan** : 9 Couvert + 0 Effleuré + 3 Hors scope = 12 critères touchés. **Densité Couvert exceptionnelle** — cohérent avec le rôle structurant de la trame transverse : tout y est central, rien n'est en passant.

**Trous phase 1 résolus en session** :
- `RA-MEO-C10-3/MEO/5` (proposer outils de prise de décision collective) : **vérifié présent** (bloc 3, 3 options + règle pour dépassement = outil structurant de décision).
- `RA-PROJET-C07-1/PROJ/3` (gérer le budget) : **patché en session** — ajout du suivi budgétaire comme 6ᵉ outil canonique dans le bloc 2, mention dans le livrable 2/3.

---

### ecoconception.md

```yaml
couvert:
  - RA-ESE-C09-2/ESE/3       # Proposer améliorations cycle de vie — bloc 2 (4 fronts : sobriété énergétique, durée de vie, démontabilité, sobriété logicielle)
  - RA-ESE-C09-2/ESE/4       # Évaluer bénéfices d'amélioration — bloc 1 (matrice EAT pondérée intégrée aux matrices de décision)
  - RA-ESE-C09-2/ESE/5       # Sélectionner améliorations et justifier — blocs 1 et 3 (matrice EAT + annexe dossier technique)
  - RA-PROJET-C03-3/PROJ/7   # Garantir la démontabilité du projet — bloc 2 (démontabilité PCB, connectique JST, carte modulaire)
effleure:
  - RA-ESE-C09-2/ESE/1       # Mener l'ACV — bloc 1 (cité et délégué explicitement aux cours collègues, central en dossier-tech)
  - RA-ESE-C09-2/ESE/2       # Interpréter ACV — bloc 1 (cadence d'évaluation aux jalons, multi-couverture)
  - RA-EEE-C03-2/EEE/3       # Sources d'énergie + dim alim — bloc 2 (dimensionnement juste besoin, multi-couverture)
```

**Bilan** : 4 Couvert + 3 Effleuré = 7 critères touchés. Densité plus faible que gestion-de-projet, cohérent : ecoconception est focalisée ESE + délègue beaucoup aux cours collègues.

**Critère bien attribué découvert en session** : `RA-PROJET-C03-3/PROJ/7` (Démontabilité du projet) n'apparaissait dans aucune fiche cartographiée antérieurement. Couvert ici via la démontabilité PCB / connectique JST / carte modulaire (bloc 2). Pas un trou.

---

### securite-et-qualite.md

```yaml
couvert: []
effleure:
  - RA-PROJET-C04-4/PROJ/1   # Analyse fonctionnelle — bloc 1 (FC sécurité-utilisateur dans la pieuvre, mention)
  - RA-PROJET-C03-3/EEE/5    # Concevoir/réaliser carte électronique — bloc 3 (Rev A/B sérigraphiée PCB, multi-couverture dossier-tech)
  - RA-PROJET-C07-1/PROJ/2   # Outils GP (jalons, revues) — bloc 3 (plan de revues posé en jalons, multi-couverture spec-tech/GP)
  - RA-PROJET-C05-3/PROJ/3   # Concevoir protocoles de test — bloc 1 (tests sécurité au niveau 4 de qualification, multi-couverture PoC/integration)
  - RA-PROJET-C05-3/PROJ/4   # Réaliser tests — bloc 1 (tests sécurité en conditions réelles, multi-couverture PoC/integration)
```

**Bilan** : 0 Couvert + 5 Effleuré = 5 critères touchés. Densité la plus basse parmi les trames cartographiées (gestion-de-projet 12, ecoconception 7, securite-et-qualite 5).

**Insight structurant** : cette trame ne porte pratiquement **aucun critère AA central** du référentiel école I3.5/I3.6. C'est **attendu et cohérent**, pas une défaillance. La sécurité-qualité est un domaine de **posture / culture professionnelle** qui prépare les étudiants à des enjeux (sécurité produit AMDEC + arrêt d'urgence + parades, sécurité projet 3 règles + EPI + formations, qualité documentaire Git tags + revue de code + sérigraphie PCB + plan de revues, normatif pointu CE/EMC/ISO 12100 délégué) **non explicitement capturés par les AA techniques du référentiel**.

La fiche conserve toute sa valeur pédagogique (culture sécurité, traçabilité, articulation responsables) mais elle ne sert pas la cartographie AA. **À noter en synthèse globale** : le cadre AA n'est pas le seul critère de pertinence d'une fiche.

---

## Synthèse globale (à compléter en fin de passe B+A)

*Cette section sera générée une fois toutes les fiches cartographiées. Servira à identifier les trous (critères non couverts) qui nécessitent soit une nouvelle fiche, soit l'ajout d'une section dans une fiche existante.*
