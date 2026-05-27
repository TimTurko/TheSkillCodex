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
  - RA-PROJET-C03-3/PROJ/3   # Réaliser structure mécanique avec élec et énergie — étapes 1+2 (fabriquer + valider niveau 0). Amendement passe A 26/05 suite 3.
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

**Bilan** : 8 Couvert + 6 Effleuré + 3 Hors scope = 14 critères touchés sur 54 cartographiables (57 – 3 hors scope du référentiel détectés ici, amendement passe A 26/05 suite 3 : ajout PROJ-C03-3/PROJ/3). Moyenne stable parmi les trames du V après normalisation hors scope (spec-tech 11, concept 16, PoC 12, dossier-tech 17, integration 14).

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

### afnor-nfx50-151.md

```yaml
couvert: []
effleure:
  - RA-PROJET-C04-4/PROJ/1  # Analyse fonctionnelle — norme citée comme cadre, outils délégués (Wikipédia)
  - RA-PROJET-C04-4/PROJ/7  # Performances désirées — triplet critère/niveau/flexibilité mentionné comme apport de la norme
```

**Bilan** : 0 Couvert + 2 Effleuré = 2/57 critères touchés. Fiche-stub purement référentielle (cadre méthodo cité, norme payante AFNOR). Pas un trou : le contenu pédagogique est porté par les fiches outils (bête à cornes, pieuvre, fonction, caractériser-une-exigence).

---

### bete-a-cornes.md

```yaml
couvert:
  - RA-PROJET-C04-4/PROJ/1  # Analyse fonctionnelle — bête à cornes = 1er geste d'AF (à qui / sur quoi / dans quel but)
effleure: []
```

**Bilan** : 1 Couvert + 0 Effleuré = 1/57 critère touché. Fiche-notion mono-critère par construction — outil canonique d'expression du besoin, premier amont de l'AF. Multi-couverture avec specification-technique, cahier-des-charges-fonctionnel, pieuvre et fonction — l'AA `RA-PROJET-C04-4/PROJ/1` est porté collectivement par cet ensemble.

---

### cahier-des-charges-fonctionnel.md

```yaml
couvert:
  - RA-PROJET-C04-4/PROJ/1  # Analyse fonctionnelle — section 4 « cœur NF X50-151 » du CdCF école
  - RA-PROJET-C04-4/PROJ/2  # Solutions existantes — section 3 état de l'art (complément école)
  - RA-PROJET-C04-4/PROJ/7  # Performances désirées — chaque exigence chiffrée par triplet critère/niveau/flexibilité
effleure:
  - RA-PROJET-C04-4/PROJ/4  # Schéma bloc fonctionnel — cité dans la matière agrégée, renvoi à phase concept
  - RA-PROJET-C04-4/PROJ/5  # Différencier écoconception/écodesign — écoconception transversale mentionnée + piège « écoconception en addendum »
  - RA-PROJET-C04-4/PROJ/6  # Interactions entre blocs — issues de la pieuvre agrégée en section 4
  - RA-PROJET-C07-1/PROJ/2  # Outils GP — section 5 planification (WBS, Gantt, matrice de risques)
hors_scope:
  - RA-PROJET-C04-4/PROJ/3  # Terminologie technique écrit/oral — le CdCF mobilise terminologie technique mais évaluation transversale enseignants
```

**Bilan** : 3 Couvert + 4 Effleuré + 1 Hors scope = 8/57 critères touchés. Document agrégateur de la phase 1 — couvre l'essentiel de l'AA `RA-PROJET-C04-4` (CdCF) plus pointes vers GP et planification. Multi-couverture forte avec specification-technique (qui produit la matière) et bête à cornes / pieuvre / fonction (qui portent les outils méthodo amont).

---

### fonction.md

```yaml
couvert:
  - RA-PROJET-C04-4/PROJ/1  # Analyse fonctionnelle — typologie FP/FS/FC = grille structurante de l'AF
effleure:
  - RA-PROJET-C04-4/PROJ/7  # Performances désirées — triplet critère/niveau/flexibilité mentionné comme aval
```

**Bilan** : 1 Couvert + 1 Effleuré = 2/57 critères touchés. Fiche-notion étroite (typologie + format d'énoncé). Multi-couverture avec pieuvre, bête à cornes et CdCF — la typologie FP/FS/FC est mobilisée à travers tout l'outillage de l'AF.

---

### pieuvre.md

```yaml
couvert:
  - RA-PROJET-C04-4/PROJ/1  # Analyse fonctionnelle — pieuvre = outil canonique d'AF (recense fonctions face aux milieux)
  - RA-PROJET-C04-4/PROJ/6  # Interactions entre blocs — la pieuvre formalise les interactions système / milieux
effleure:
  - RA-PROJET-C04-4/PROJ/7  # Performances désirées — chaque fonction tracée renvoie au triplet aval
```

**Bilan** : 2 Couvert + 1 Effleuré = 3/57 critères touchés. Fiche-notion approfondie (post-25/05 suite 2). Multi-couverture sur `RA-PROJET-C04-4/PROJ/1` avec bête à cornes et fonction. Cas net où la fiche-notion porte le contenu, pas la trame (spec-tech effleure et renvoie).

---

### gantt.md

```yaml
couvert:
  - RA-PROJET-C07-1/PROJ/2  # Outils GP — Gantt explicite dans la liste « Gantt, PERT, WBS, livrables »
effleure:
  - RA-PROJET-C07-1/PROJ/1  # Tableau de bord et indicateurs — Gantt = outil de pilotage et support de revue
  - RA-MEO-C10-3/MEO/1      # Outils planification et gestion d'équipe — multi-couverture avec spec-tech et GP
```

**Bilan** : 1 Couvert + 2 Effleuré = 3/57 critères touchés. Fiche-tuto outil de planification. Multi-couverture forte avec wbs / jalons / retroplanning sur l'AA `RA-PROJET-C07-1` — chaque outil porte un morceau de l'AA.

---

### jalons.md

```yaml
couvert:
  - RA-PROJET-C07-1/PROJ/2  # Outils GP — jalons = « livrables » explicites dans la liste « Gantt, PERT, WBS, livrables »
effleure:
  - RA-MEO-C10-3/MEO/1      # Outils planification — jalons structurent la cadence projet
```

**Bilan** : 1 Couvert + 1 Effleuré = 2/57 critères touchés. Fiche-notion centrale du couple jalons / retroplanning — pas d'outil de planification sans points fixes.

---

### retroplanning.md

```yaml
couvert:
  - RA-PROJET-C07-1/PROJ/2  # Outils GP — rétroplanning = méthode de planification à rebours (planification listée implicitement dans « livrables »)
effleure:
  - RA-MEO-C10-3/MEO/1      # Outils planification — rétroplanning = outil de planification équipe
```

**Bilan** : 1 Couvert + 1 Effleuré = 2/57 critères touchés. Fiche-tuto qui matérialise la pose des jalons en calendrier vivant.

---

### wbs.md

```yaml
couvert:
  - RA-PROJET-C07-1/PROJ/2  # Outils GP — WBS explicite dans la liste « Gantt, PERT, WBS, livrables »
effleure:
  - RA-MEO-C10-3/MEO/1      # Outils planification — WBS = socle amont des outils de planification
  - RA-MEO-C10-3/MEO/2      # Répartir les tâches — WBS = référence pour la répartition du travail
```

**Bilan** : 1 Couvert + 2 Effleuré = 3/57 critères touchés. Fiche-notion socle des outils de planification (WBS → rétroplanning → Gantt).

---

### matrice-de-decision.md

```yaml
couvert: []
effleure:
  - RA-ESE-C09-2/ESE/4      # Évaluer bénéfices d'amélioration — écoconception entre comme critère pondéré dans la matrice
  - RA-ESE-C09-2/ESE/5      # Sélectionner améliorations et justifier — la matrice trace l'arbitrage écrit
  - RA-EEE-C03-2/EEE/1      # Choisir capteurs/actionneurs — matrice appliquée par sous-système élec
  - RA-EEE-C03-2/EEE/2      # Choisir contrôleurs — idem
  - RA-MME-C02-1/MME/1      # Choisir matériaux adaptés — idem côté méca
```

**Bilan** : 0 Couvert + 5 Effleuré = 5/57 critères touchés. **Insight structurant** : la matrice de décision est un **outil pivot transverse** — elle ne porte aucun critère AA en propre, mais elle est l'outil par lequel passent les critères de choix EEE/MME/ESE en phase concept. Pas un trou, une caractéristique. Multi-couverture potentielle quand les fiches-tuto phase 2 EEE/MME seront produites (chaque fiche disciplinaire mobilisera la matrice).

---

### matrice-de-risques.md

```yaml
couvert:
  - RA-PROJET-C07-1/PROJ/1  # Tableau de bord et indicateurs — la matrice de risques est l'indicateur d'aléas du projet
effleure:
  - RA-PROJET-C07-1/PROJ/2  # Outils GP — matrice de risques mentionnée dans le sillage Gantt/WBS/livrables comme outil de pilotage
```

**Bilan** : 1 Couvert + 1 Effleuré = 2/57 critères touchés. Fiche-notion outil de pilotage projet. Multi-couverture avec gestion-de-projet (où la matrice est intégrée à la cadence) et avec spec-tech (où elle est posée la première fois en étape 5).

---

### schema-bloc-fonctionnel.md

```yaml
couvert:
  - RA-PROJET-C04-4/PROJ/4  # Schéma bloc fonctionnel — objet central de la fiche (capteurs/actionneurs/effecteurs/contrôleurs, boucle ouverte/fermée)
  - RA-PROJET-C04-4/PROJ/6  # Définir interactions entre blocs depuis CdCF — méthode en 5 questions partant du CdCF
effleure:
  - RA-EEE-C03-2/EEE/1      # Choisir capteurs / technologie actionneurs — capteurs et actionneurs identifiés dans le schéma
  - RA-EEE-C03-2/EEE/2      # Choisir contrôleurs — contrôleur identifié dans le schéma
  - RA-EEE-C03-2/EEE/4      # Intégrer circuits électroniques (acquisition/traitement/transmission) — sous-fonctions élec représentées
```

**Bilan** : 2 Couvert + 3 Effleuré = 5/57 critères touchés. **Seule fiche-notion EEE existante en phase 1** — porte 2 critères AA centraux (PROJ/4 et PROJ/6) et effleure 3 critères EEE. Multi-couverture avec concept (étape 1 décomposition) et dossier-technique (étape 2 carte d'interfaces).

---

### hub/index.md

```yaml
couvert: []
effleure: []
```

**Bilan** : 0 Couvert + 0 Effleuré = 0/57 critères touchés directement. **Page d'index méta** — recense les 5 phases et 3 transverses, ne porte aucun contenu pédagogique au sens AA. Tous les critères AA sont portés par les fiches-trame et fiches-notion en aval. Cohérent avec son rôle de point d'entrée. Comparable à l'insight `securite-et-qualite` (0 critère central) mais pour une raison différente : le hub est méta-structure, pas posture professionnelle.

---

## Passe A — Cartographie inverse par domaine

> Croisement des 21 cartographies fiche-par-fiche (passe B) pour identifier, pour chaque critère du référentiel, l'ensemble des fiches qui le portent. Permet de repérer trous phase 1, trous phase 2 prévus, et amendements à apporter à la passe B.
>
> Légende : **C** = Couvert / **E** = Effleuré / **HS** = Hors scope / **NC** = Non couvert (= absent des fiches existantes).

### EEE (10 critères)

**RA-PROJET-C03-3 [EEE]** — *Analyser / Fabriquer un sous-ensemble fonctionnel électrique et électronique*

- **/1** *Identifier composants schéma et rôles* — **NC**. Trou phase 2 prévu : fiche-tuto `analyse-de-schema-electronique` (déjà au TODO, couvre /2 ET /1).
- **/2** *Analyser comportement sous-ensemble jusqu'au composant* — **C** : integration-et-tests étape 2 (chaîne élec niveau 0). **E** : concept étape 4 (pré-dim partiel).
- **/3** *Effectuer simulation système électronique* — **NC**. Trou phase 2 nouveau : fiche-tuto `simulation-electronique` à ajouter au TODO (couple /3 et /4).
- **/4** *Interpréter résultats simulation* — **NC**. Idem /3 : à couvrir par `simulation-electronique`.
- **/5** *Concevoir/réaliser carte électronique* — **C** : dossier-technique étape 2 (schémas câblés + routage PCB). **E** : securite-et-qualite bloc 3 (Rev A/B sérigraphie).

**RA-EEE-C03-2 [EEE]** — *Mettre en œuvre démarche de conception système contrôle/commande*

- **/1** *Choisir capteurs/actionneurs via prototypage rapide* — **C** : concept étape 2 (matrice élec). **E** : preuve-de-concept étape 2 (Arduino), schema-bloc-fonctionnel, matrice-de-decision.
- **/2** *Choisir contrôleurs* — **C** : concept étape 2. **E** : schema-bloc-fonctionnel, matrice-de-decision.
- **/3** *Sources d'énergie + dim alim* — **E** : concept étapes 2+4, dossier-technique étape 3, ecoconception bloc 2. Pas de fiche centrale, traitement diffus mais récurrent.
- **/4** *Intégrer circuits électroniques (acquisition/traitement/transmission/conversion)* — **C** : dossier-technique étape 2. **E** : schema-bloc-fonctionnel.
- **/5** *Concevoir système de commande par algorithme* — **E** : dossier-technique étape 2 (archi logicielle UML). Trous phase 2 prévus : 4 fiches-tuto (`logigramme`, `machine-a-etats`, `grafcet`, `chronogramme`) déjà au TODO.

**Bilan EEE** : 5 C + 2 E + 0 HS + **3 NC** sur 10 critères (/1, /3, /4 du RA-PROJET-C03-3). Tous les NC tombent en phase 2. Conforme à la nature EEE (cœur disciplinaire couvert par les fiches-tuto à venir).

---

### ESE (5 critères)

**RA-ESE-C09-2 [ESE]** — *Évaluer et sélectionner des améliorations dans une démarche d'écoconception*

- **/1** *Mener l'ACV* — **C** : dossier-technique étape 3 (ACV simplifiée sur BOM réelle). **E** : ecoconception bloc 1 (cadre + délégation).
- **/2** *Interpréter ACV* — **C** : dossier-technique étape 3 (contributeurs dominants). **E** : preuve-de-concept étape 4, integration-et-tests étape 4, ecoconception bloc 1.
- **/3** *Proposer améliorations cycle de vie* — **C** : ecoconception bloc 2 (4 fronts : sobriété/durée/démontabilité/sobriété logicielle). **E** : concept étape 2, preuve-de-concept Équipe, integration-et-tests étape 4.
- **/4** *Évaluer bénéfices d'amélioration* — **C** : concept étape 2 (matrice EAT), ecoconception bloc 1. **E** : matrice-de-decision.
- **/5** *Sélectionner améliorations et justifier* — **C** : concept étape 2, ecoconception blocs 1 et 3. **E** : matrice-de-decision.

**Bilan ESE** : 5 C + 0 NC sur 5 critères. **Domaine entièrement couvert phase 1**. Multi-couverture systématique sur tous les critères (3 fiches en moyenne par critère). Pas de fiche phase 2 ESE prévue ni nécessaire à ce stade.

---

### MEO (6 critères)

**RA-MEO-C10-3 [MEO]** — *Utiliser des outils d'animation d'équipe en présentiel et à distance*

- **/1** *Outils planification et gestion d'équipe* — **C** : specification-technique étape 5, gestion-de-projet bloc 1. **E** : gantt, jalons, retroplanning, wbs.
- **/2** *Répartir les tâches* — **C** : gestion-de-projet bloc 3. **E** : specification-technique étape 5, wbs.
- **/5** *Outils de prise de décision collective* — **C** : gestion-de-projet bloc 3 (3 options + règle pour dépassement).
- **/6** *Organiser documents partagés* — **C** : gestion-de-projet bloc 2 (drive partagé + convention de nommage).

**RA-MEO-C08-6 [MEO]** — *Développer conditions favorables aux interactions et engagement en équipe*

- **/1** *Transmettre informations équipe* — **C** : gestion-de-projet bloc 3. **E** : concept Équipe, preuve-de-concept Équipe, dossier-technique étapes 1+4, specification-technique Équipe.
- **/3** *Routines travail collectif* — **C** : preuve-de-concept étape 4 (tour de table), gestion-de-projet bloc 3 (point hebdo). **E** : integration-et-tests étape 4 (REX).

**Bilan MEO** : 6 C + 0 NC sur 6 critères. **Domaine entièrement couvert phase 1**. Multi-couverture forte (5 fiches en moyenne par critère). Pas de fiche phase 2 MEO prévue ni nécessaire.

---

### MME (11 critères)

**RA-MME-C02-1 [MME]** — *Analyser matériaux et phénomènes mécaniques mis en jeu et sollicitations associées*

- **/1** *Choisir matériaux adaptés* — **C** : concept étapes 2+4. **E** : matrice-de-decision.
- **/2** *Procédés d'assemblage* — **E** : dossier-technique étape 2. **NC central** : pas de fiche centrale, à interroger (délégation cours collègues ?).
- **/4** *Identifier sollicitations mécaniques* — **E** : concept étape 4 (pré-dim couple, flèche, transitoires). **NC central**.
- **/5** *Schéma cinématique* — **NC**. Wiki-link rouge déjà posé dans hub/index. Trou phase 2 nouveau : fiche-tuto `schema-cinematique` à ajouter au TODO (statut à trancher : délégation cours collègues ou fiche dans le wiki ?).
- **/6** *Caractéristiques mécaniques actionneurs* — **E** : concept étapes 2+4. **NC central**.

**RA-MME-C03-1 [MME]** — *Concevoir des structures et systèmes mécaniques*

- **/1** *Lister outils designers* — **NC**. Critère possiblement délégué entièrement cours collègues (design). À interroger avec hiérarchie : hors scope par délégation ou trou phase 2 ?
- **/2** *Note de calcul dimensionnement transmission* — **E** : concept étape 4. **NC central** : note de calcul formelle absente (effleurée seulement, traitement diffus).
- **/3** *Créer assemblage CAO* — **C** : dossier-technique étape 2 (plans cotés, fichiers STL/DXF/STEP).
- **/4** *Paramètres dynamiques* — **E** : concept étape 4 (modèle simplifié transitoire). **NC central**.
- **/5** *Nomenclature à partir CAO* — **C** : dossier-technique étape 3 (BOM agrégée).
- **/6** *Optimiser conception* — **E** : dossier-technique étape 2. Trou phase 2 prévu : fiche-tuto `optimisation-mecanique` déjà au TODO.

**Bilan MME** : 3 C + 6 E + 0 HS + **2 NC structurels** (/5 schéma cinématique et C03-1/1 outils designers) sur 11 critères. **4 critères « NC central avec effleurement seulement »** (C02-1/2, /4, /6 et C03-1/2, /4) méritent une réflexion : effleurement récurrent mais pas de fiche centrale. Domaine **partiellement délégué aux cours collègues** (mention explicite dans hub/index). Stratégie cohérente, mais nécessite confirmation avec hiérarchie pour clarifier le statut des « NC central » : hors scope par délégation ou trous phase 2 à combler dans le wiki ?

---

### PROJ (25 critères)

**RA-PROJET-C03-3 [PROJ]** — *Réaliser un système ou sous-ensemble incluant moyens numériques de prototypage rapide*

- **/1** *Sketchs main d'un produit* — **NC**. Croquis/design probablement délégué cours collègues. À interroger avec hiérarchie.
- **/2** *Prendre en compte design dans réalisation prototype* — **NC**. Idem /1 — possible délégation design.
- **/3** *Réaliser structure mécanique avec élec et énergie* — **C amendement** : integration-et-tests étapes 1+2 (fabriquer + valider niveau 0). **Non explicité en passe B sur integration-et-tests, à amender** (voir section Amendements ci-dessous).
- **/4** *Adapter, modifier conception et docs* — **C** : dossier-technique étape 1 (propagation PoC→dossier).
- **/5** *Programmer/paramétrer contrôleur numérique* — **NC**. Trou phase 2 prévu : fiches-tuto `microcontroleur` + `firmware` déjà au TODO.
- **/6** *Valider inter-opérabilité sous-ensembles* — **C** : integration-et-tests étape 3 (niveaux 2-3 composition + système complet).
- **/7** *Garantir démontabilité* — **C** : ecoconception bloc 2 (démontabilité PCB, connectique JST, carte modulaire).

**RA-PROJET-C04-4 [PROJ]** — *Établir cahier des charges fonctionnel et technique*

- **/1** *Analyse fonctionnelle* — **C** : specification-technique étapes 1+3, cahier-des-charges-fonctionnel section 4, bete-a-cornes, fonction, pieuvre.
- **/2** *Solutions existantes* — **C** : specification-technique étape 2, cahier-des-charges-fonctionnel section 3.
- **/3** *Terminologie technique écrit/oral* — **HS** : 6 fiches (spec-tech, concept, PoC, dossier-tech, integration-et-tests, cahier-des-charges-fonctionnel). Hors scope par décision éditoriale (C15).
- **/4** *Schéma bloc fonctionnel (capteurs/actionneurs/effecteurs/contrôleurs, boucle ouverte/fermée)* — **C** : concept étape 1 (décomposition), schema-bloc-fonctionnel. **E** : specification-technique étape 3, dossier-technique étape 2, cahier-des-charges-fonctionnel.
- **/5** *Différencier écoconception/écodesign* — **E** : specification-technique étape 6, cahier-des-charges-fonctionnel. Trou phase 2 prévu : fiche-notion `ecodesign` déjà au TODO.
- **/6** *Définir interactions entre blocs depuis CdCF* — **C** : concept étapes 1+3, schema-bloc-fonctionnel, dossier-technique étape 2. **E** : specification-technique, cahier-des-charges-fonctionnel, pieuvre.
- **/7** *Performances désirées du système* — **C** : specification-technique étape 4 (caractériser-une-exigence). **E** : preuve-de-concept étape 1, integration-et-tests étape 3, cahier-des-charges-fonctionnel, fonction, pieuvre, afnor-nfx50-151.

**RA-PROJET-C05-3 [PROJ]** — *Évaluer intégration et interopérabilité des sous-ensembles*

- **/1** *Réaliser tests d'intégration* — **C** : integration-et-tests étape 3 (cœur, niveaux 1-4).
- **/2** *Proposer axes amélioration prototype* — **C** : preuve-de-concept étape 4, integration-et-tests étape 4.
- **/3** *Concevoir protocoles de test* — **C** : preuve-de-concept étape 1, integration-et-tests étape 3. **E** : securite-et-qualite bloc 1.
- **/4** *Réaliser tests* — **C** : preuve-de-concept étape 3, integration-et-tests étape 3. **E** : securite-et-qualite bloc 1.
- **/5** *Analyser résultats tests* — **C** : preuve-de-concept étape 4, integration-et-tests étape 3.

**RA-PROJET-C07-1 [PROJ]** — *Mettre en œuvre outils de projet*

- **/1** *Tableau de bord et indicateurs* — **C** : gestion-de-projet bloc 2, matrice-de-risques. **E** : specification-technique étape 5, dossier-technique étape 5, gantt.
- **/2** *Outils GP (Gantt/PERT/WBS/livrables)* — **C** : specification-technique étape 5, gestion-de-projet blocs 1-2, gantt, jalons, retroplanning, wbs. **E** : concept Équipe, preuve-de-concept Équipe, dossier-technique étape 3, integration-et-tests étape 4, cahier-des-charges-fonctionnel, matrice-de-risques.
- **/3** *Gérer le budget* — **C** : gestion-de-projet bloc 2 (patch 26/05 suite 2), dossier-technique étapes 3+5. **E** : preuve-de-concept étape 2, integration-et-tests étape 4.
- **/4** *Participer aux tâches* — **HS** (C15, évaluation transversale enseignants).
- **/5** *Être force de proposition* — **HS** (C15).
- **/6** *Participer aux événements* — **HS** (C15).

**Bilan PROJ** : 17 C + 1 E + 4 HS + **3 NC** sur 25 critères (/1 sketchs, /2 prise en compte design, /5 programmer contrôleur du RA-C03-3 ; +1 amendement C03-3/3 à confirmer en passe B). Domaine **majeur du wiki phase 1** (25/57 = 44 %). Tous les trous phase 1 « NC » sont identifiés et adressés : /1+/2 par délégation possible, /5 par fiches phase 2 (microcontroleur + firmware au TODO).

---

### Bilan passe A — récapitulatif global

**Couverture globale (57 critères) :**

| Domaine | C | E | HS | NC | Total |
|---|---|---|---|---|---|
| EEE | 5 | 2 | 0 | 3 | 10 |
| ESE | 5 | 0 | 0 | 0 | 5 |
| MEO | 6 | 0 | 0 | 0 | 6 |
| MME | 3 | 6 | 0 | 2 | 11 |
| PROJ | 17¹ | 1 | 4 | 3 | 25 |
| **Total** | **36** | **9** | **4** | **8** | **57** |

¹ Y compris amendement C03-3/3 (sans amendement : 16 C / 4 NC, total global 35 C). **Règle de comptage** : un critère a UN seul statut dominant (C > E > HS > NC). Si un critère est Couvert dans une fiche et Effleuré dans une autre, il compte C, pas C+E.

- **Couverts** : 36/57 = **63 %** (35 sans amendement = 61 %)
- **Effleurés** : 9/57 = 16 %
- **Hors scope** : 4/57 = 7 % (4 critères tous PROJ : terminologie + participation, C15)
- **Non couverts (NC)** : 8/57 = 14 %, dont :
  - **Trous NC déjà adressés au TODO** : 2 critères (EEE/PROJ-C03-3/1 via `analyse-de-schema-electronique`, EEE/PROJ-C03-3/5 programmer via `microcontroleur` + `firmware`)
  - **Trous NC à adresser par fiches phase 2 nouvelles** : 3 critères (EEE/PROJ-C03-3/3 et /4 couple → nouvelle fiche-tuto `simulation-electronique` ; MME-C02-1/5 schéma cinématique → nouvelle fiche-tuto `schema-cinematique`, statut wiki vs délégation à trancher)
  - **NC à interroger avec hiérarchie** : 3 critères relevant du **design produit** (PROJ-C03-3/1 sketchs, PROJ-C03-3/2 prise en compte design, MME-C03-1/1 outils designers) — délégation cours collègues possible, **catégorie « Hors scope par délégation »** à instaurer ?
  - **Critères effleurés centraux à renforcer phase 2** (hors NC, mais NC central avec effleurement) : EEE-C03-2/5 commande par algorithme (4 fiches commande au TODO), MME-C03-1/6 optimisation (`optimisation-mecanique` au TODO), PROJ-C04-4/5 différencier écoconception/écodesign (`ecodesign` au TODO)

**Amendements à appliquer à la passe B** (cohérence avec passe A) :

1. **integration-et-tests** : ajouter `RA-PROJET-C03-3/PROJ/3` (réaliser structure méca avec élec et énergie) en Couvert via étapes 1+2 (fabriquer + valider niveau 0). Bilan passerait de 7 C à 8 C, total 14 → 15.

**Fiches phase 2 à ajouter au TODO** :

1. **`simulation-electronique`** (fiche-tuto EEE) — couvre `RA-PROJET-C03-3/EEE/3` (simulation) + `/4` (interpréter résultats). Conforme à C16 (1 fiche-tuto par groupe cohérent EEE : ici /3 et /4 sont indissociables).
2. **`schema-cinematique`** (fiche-tuto MME) — couvre `RA-MME-C02-1/MME/5`. Déjà mentionné comme wiki-link rouge dans hub/index. **Statut à trancher** : délégation cours collègues (alors retrait du wiki-link rouge dans hub/index) ou fiche-tuto dans le wiki ?

**Décisions à porter en niveau D** :

- Statut de `MME-C03-1/1` (lister outils designers) et `PROJ-C03-3/1+2` (sketchs + prise en compte design) : 3 critères qui relèvent du **design produit** et peuvent être entièrement délégués aux cours collègues. **Catégorie « Hors scope par délégation »** à instaurer ? Différente de la **Hors scope C15** (évaluation transversale enseignants). À acter avec hiérarchie en session ultérieure.
- Statut des 4 « NC central avec effleurement » MME (C02-1/2, /4, /6 et C03-1/2, /4) : effleurement récurrent dans concept et dossier-technique mais pas de fiche centrale. Hors scope par délégation cours collègues, ou fiches-tuto MME phase 2 à ajouter ? Le hub mentionne explicitement « MME — Matériaux, mécanique (renvoie vers les cours collègues) » — piste forte de délégation, à confirmer.

**Insights structurants** :

1. **ESE et MEO sont entièrement couverts par la phase 1 du wiki** (0 NC, 0 trou phase 2). Cohérent avec leur nature transverse (portés par les 3 fiches-trame transverses + multi-couverture forte avec les trames du V).
2. **EEE et MME ont des trous structurés** : adressés par les fiches phase 2 déjà au TODO ou à ajouter. Conforme à la grille de lecture phase 1 vs phase 2 actée en début de cartographie.
3. **PROJ est le domaine majeur** du wiki phase 1 (25/57 = 44 %) avec une couverture **forte** : 17 C + 1 E + 4 HS = 22 critères traités, les 3 NC restants se ventilant entre design délégable (2) et programmation phase 2 (1).
4. **La convention C16** (1 fiche-tuto par critère EEE/info embarquée ou groupe cohérent) **est validée empiriquement** : les 5 critères EEE attendus en phase 2 (PROJ-C03-3/1, /3, /4, /5 NC + EEE-C03-2/5 effleurement central) sont chacun adressés par 1 ou plusieurs fiches-tuto dédiées (`analyse-de-schema-electronique` pour /1, `simulation-electronique` pour /3+/4 groupés, `microcontroleur` + `firmware` pour /5, 4 méthodes commande pour EEE-C03-2/5). Soit 1 à 4 fiches par critère selon la granularité du critère source.
5. **3 fiches phase 1 sans critère AA central** identifiées (securite-et-qualite, matrice-de-decision, hub/index) chacune pour une raison distincte (posture professionnelle, outil pivot transverse, méta-structure). Le cadre AA n'est pas le seul critère de pertinence d'une fiche — à acter en synthèse globale.

---

## Synthèse globale

### Bilan en chiffres

| Domaine | C | E | HS | NC | Total |
|---|---|---|---|---|---|
| EEE | 5 | 2 | 0 | 3 | 10 |
| ESE | 5 | 0 | 0 | 0 | 5 |
| MEO | 6 | 0 | 0 | 0 | 6 |
| MME | 3 | 6 | 0 | 2 | 11 |
| PROJ | 17 | 1 | 4 | 3 | 25 |
| **Total** | **36** | **9** | **4** | **8** | **57** |

Lecture : la phase 1 du wiki (5 trames du V + 3 transverses, 21 fiches) couvre **directement** près des deux tiers du référentiel école (63 %), en effleure une part complémentaire (16 %), et identifie clairement les 8 trous restants (14 %) — dont 5 ont déjà une fiche phase 2 prévue au TODO et 3 relèvent d'un arbitrage hiérarchique. Règle de comptage : statut dominant (C > E > HS > NC), pas de double comptage.

### Lecture par domaine

**ESE** (5/5) et **MEO** (6/6) sont couverts à 100 % par la phase 1. Cohérent avec leur nature transverse : portés par les 3 trames transverses (gestion-de-projet, ecoconception, securite-et-qualite) avec multi-couverture forte depuis les trames du V. Pas de fiche phase 2 ni nécessaire ni prévue dans ces domaines.

**PROJ** est le domaine majeur du wiki (25/57 = 44 %), couvert par 17 C + 1 E sur les 21 critères non-HS (les 4 HS étant des critères de participation et terminologie évalués transversalement). Couverture forte sur l'analyse fonctionnelle (RA-PROJET-C04-4), le cycle en V (C03-3 + C05-3), la gestion de projet (C07-1) et l'écoconception. Les 3 NC restants tombent en zone design (sketchs, prise en compte design) et programmation contrôleur (phase 2).

**EEE** (5 C / 10) a 3 NC structurés, tous adressés par fiches phase 2 déjà listées au TODO (`analyse-de-schema-electronique`, `simulation-electronique`, `microcontroleur` + `firmware`, 4 méthodes commande). Conforme à la grille phase 1 vs phase 2 : EEE = cœur disciplinaire à venir.

**MME** (3 C / 11) est le domaine le moins couvert en phase 1 — partiellement délégué aux cours collègues (mention explicite dans `hub/index`). Effleurement récurrent dans concept et dossier-technique sans fiche centrale (4 critères concernés) + 2 NC structurels (schéma cinématique, outils designers). Stratégie de délégation à confirmer avec hiérarchie.

### Lecture par catégorie

- **Couvert (36)** : critères qui ont un endroit nommé dans le wiki — section H2/H3 dédiée d'une trame, ou fiche-notion/tuto dédiée. C'est l'objet pédagogique principal.
- **Effleuré (9)** : critères mentionnés en passant (H4, `[!example]`, wiki-link, posture/piège). Ne créent pas de trou si le critère est par ailleurs Couvert dans une autre fiche. Effleurements purs = signal d'enrichissement possible mais pas urgent.
- **Hors scope (4)** : critères `RA-PROJET-C04-4/PROJ/3` (terminologie technique écrit/oral) et `RA-PROJET-C07-1/PROJ/4/5/6` (participation, force de proposition, événements). Décision éditoriale : évalués transversalement par les enseignants, pas contenus pédagogiques.
- **Non couvert (8)** : trous identifiés, ventilés en section suivante.

### Trous NC : adressés vs à arbitrer

**5 NC adressés au TODO phase 2** :

- `RA-PROJET-C03-3/EEE/1` (identifier composants schéma) → `analyse-de-schema-electronique`
- `RA-PROJET-C03-3/EEE/3` + `/4` (simulation électronique + interprétation) → `simulation-electronique` (1 fiche pour 2 critères groupés, conforme C16)
- `RA-PROJET-C03-3/EEE/5` (programmer contrôleur) → `microcontroleur` + `firmware`
- `RA-MME-C02-1/MME/5` (schéma cinématique) → `schema-cinematique` (statut wiki vs délégation à trancher, voir section suivante)

**3 NC à arbitrer avec hiérarchie** : `RA-PROJET-C03-3/PROJ/1` (sketchs main d'un produit), `RA-PROJET-C03-3/PROJ/2` (prendre en compte design dans prototype), `RA-MME-C03-1/MME/1` (lister outils designers). Les 3 relèvent du **design produit** et sont probablement délégables aux cours collègues.

### Décisions niveau D ouvertes

Trois questions à porter en revue avec la hiérarchie en session ultérieure :

1. **Instaurer la catégorie « Hors scope par délégation »** (distincte de HS C15) pour les 3 critères design ci-dessus. Officialise la délégation sans la confondre avec l'évaluation transversale enseignante.
2. **Statut des 4 critères MME effleurés sans fiche centrale** : `RA-MME-C02-1/MME/2` (procédés d'assemblage), `/4` (sollicitations mécaniques), `/6` (caractéristiques actionneurs), `RA-MME-C03-1/MME/2` (note de calcul transmission), `/4` (paramètres dynamiques). Effleurement récurrent dans concept et dossier-technique mais pas de fiche centrale. Délégation cours collègues MME ou fiches-tuto phase 2 à ajouter ?
3. **Statut de `schema-cinematique`** : wiki-link rouge déjà posé dans `hub/index`. Fiche-tuto à produire dans le wiki, ou délégation entière cours collègues MME (auquel cas retrait du wiki-link rouge) ?

Ces trois décisions structurent la finalisation de la stratégie de couverture. Tant qu'elles ne sont pas arbitrées, le bilan ci-dessus reste provisoire sur ses marges (8 NC affichés pourraient devenir 5 NC + 3 HS par délégation).

### Ambition au-delà du référentiel

Le wiki dépasse délibérément le scope AA : **mieux trop que pas assez**. Le référentiel école n'est pas un plafond, c'est un socle minimal (cf. prompt projet § 3 : *« aller au-delà du référentiel sans le contredire »*). Cette posture vaut tant pour les fiches qui ont des critères AA centraux (et qui peuvent les déborder) que pour les fiches qui n'en ont aucun.

Trois fiches phase 1 illustrent cette ambition en ne portant aucun critère AA central, chacune pour une raison distincte mais légitime :

- **`securite-et-qualite`** : trame de **posture professionnelle** — sécurité produit (AMDEC, arrêt d'urgence, parades), sécurité projet (3 règles non négociables, EPI, formations), qualité documentaire (Git tags, revue de code, plan de revues), normatif délégué (CE, EMC, ISO 12100). Domaine essentiel à la formation d'ingénieur mécatronicien, non explicitement capturé par les AA techniques du référentiel.
- **`matrice-de-decision`** : **outil pivot transverse** — ne porte aucun critère en propre, mais constitue l'outil par lequel passent les critères de choix EEE/MME/ESE en phase concept. Sa valeur tient à la consolidation méthodologique, pas à l'adressage AA direct.
- **`hub/index`** : **méta-structure** — point d'entrée du parcours pédagogique, ne porte pas de contenu pédagogique au sens AA.

Implication directe : la cartographie sert à identifier les trous, pas à filtrer le contenu produit. Une fiche qui déborde ou qui n'adresse aucun critère central reste légitime si elle sert le projet pédagogique.

### Phase 2 elec/info — cœur du wiki (cadrage 26/05 suite 5)

L'ambition au-delà du référentiel se matérialise en phase 2 dans une posture éditoriale délibérément large côté **électronique et informatique embarquée**. Cadrage stratégique acté 26/05 suite 5 (niveau D) : la phase 2 elec/info devient le **cœur du wiki**, ~50-60 fiches assumées, plusieurs mois de travail revendiqués.

**Architecture en deux strates** :

- **Squelette transverse** — fiches indépendantes du choix techno (datasheet, analyse de schéma, chronogramme, méthodes algorithmiques, oscilloscope, multimètre, firmware, PCB générique, bus de communication, sans-fil). Couvre **tous les AA EEE pour n'importe quel chemin technologique** suivi par l'étudiant. **Socle pédagogique publiable**.
- **Embranchements technologiques** — modules autonomes par famille MCU (Arduino + tinkercad, ESP32 + wokwi + arduino-core + IDF, Raspberry Pi, ESP8266, puis priorité 2 STM32/Teensy/PIC). Chaque famille = hub fille + tutos d'utilisation, complétable au fil de l'eau au rythme des projets étudiants.

Un étudiant suivant un seul chemin (100 % ESP32 par exemple) doit pouvoir traverser tout le V et couvrir tous les AA via squelette + module ESP32. Pareil pour Arduino, Raspberry Pi. **Conséquence opérationnelle** : publication du site possible à la rentrée scolaire dès que squelette transverse complet + ≥1 embranchement complet (idéalement Arduino, le plus utilisé à l'ICAM).

**Trois cercles de priorité publication** :

| Cible | Périmètre | Volume estimé | Délai cible |
|---|---|---|---|
| **MVP strict** (AA 100 %) | Clôture phase 1 GP + squelette critique AA + embranchement Arduino | ~21 sessions | 2-3 mois |
| **MVP étendu** | + squelette pro (oscillo, multimètre, firmware, PCB, bus) + embranchement ESP32 | ~35 sessions | 3-4 mois |
| **Cible complète** | + reste squelette (sans-fil, simu pure, finitions) + tous embranchements MCU + alimentation continue post-rentrée | ~70 sessions | plusieurs mois |

**Cinq mini-hubs imbriqués** à structurer en phase 2 (convention C18 candidate éprouvable) : `microcontroleur` (hub mère panorama → hubs filles familles → tutos utilisation, 2 niveaux), `algorithme` (hub → 3 fiches-notion logigramme/MAE/grafcet), `pcb` (hub léger → kicad/easyeda), `bus-de-communication` (hub → uart/i2c/spi), `techno-sans-fil` (hub → wifi/ble/xbee/zigbee/lora).

**Convention C19 candidate** — fiche transverse multi-techno : certaines fiches du squelette (typiquement `firmware`, `analyse-de-schema-electronique`, `lire-une-datasheet`) couvrent des notions valables sur plusieurs familles MCU. Trois options de structuration à éprouver (callouts par techno côte à côte ; tableau comparatif ; exemple unique générique en prose + renvois vers les modules MCU spécifiques). Formalisation prévue après 2-3 fiches transverses produites.

### Conventions méthodo validées par la cartographie

La cartographie a éprouvé empiriquement quatre conventions, désormais stables (consolidées dans `conventions.md` § 7 *Référentiel AA* depuis le 26/05 suite 4) :

- **C15 — catégorie Hors scope** : 4 cas identifiés (terminologie technique + participation), tous propres et défendables. Distincte de NC : pas un trou, une décision éditoriale revendiquée.
- **C16 — 1 fiche-tuto par critère EEE/info embarquée ou groupe cohérent** : validée empiriquement — les 5 critères EEE attendus phase 2 sont chacun adressés par 1 à 4 fiches dédiées selon la granularité du critère source.
- **Multi-couverture** : un tutoriel gonflé peut couvrir plusieurs critères. Cas `RA-PROJET-C05-3/PROJ/3+/4+/5` couvert simultanément en `preuve-de-concept` + `integration-et-tests` validé sur décision utilisateur.
- **Granularité critère + statut dominant** : cartographie au niveau du critère (pas seulement de l'AA) + règle C > E > HS > NC quand un critère apparaît dans plusieurs fiches. Tenue sur les 21 fiches sans incohérence.

### Suite des opérations

Trois chantiers ouverts, dans l'ordre logique :

1. **Arbitrer les 3 décisions niveau D** avec la hiérarchie (catégorie HS par délégation, 4 critères MME effleurés, `schema-cinematique`). Bloque la finalisation de la stratégie de couverture sur les marges.
2. **Reprendre la rédaction des fiches** selon TODO : `caracteriser-une-exigence` (prioritaire), `pcb`, `amdec`, puis fiches-notion outils, puis fiches phase 2 EEE/MME selon priorisation.
3. **Valider les conventions C15/C16 et multi-couverture sur les premières fiches-notion phase 2 produites**. Promotion vers le template `fiche-tuto.md` (à produire) une fois la stabilité confirmée sur 2-3 fiches.

Le chantier cartographie AA est clos : la couverture est mesurée, les trous sont nommés, les conventions méthodo sont stables. La phase 1 du wiki est close côté cadre AA.
