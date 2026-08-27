# seance-modele.ps1 - OSSATURE VERSIONNEE des brouillons de seance.
# Arbitrage Tim (b) du 28/08.
#
# ------------------------------------------------------------------------
# CE QUE CE FICHIER EST, ET CE QU IL N EST PAS
# ------------------------------------------------------------------------
# C114 impose que tools\seance.ps1 soit reecrit DE ZERO a chaque serie, et
# le .gitignore l exclut du depot par son chemin exact. Consequence mesuree
# le 28/08 : le script ne traverse jamais d un poste a l autre, chaque
# machine a sa propre lignee, et la plomberie regresse a chaque bascule.
# Trois symptomes ont ete rattaches a cette seule cause : la redirection
# shell obligatoire sur un poste et pas sur l autre, la commande de copie
# C124 manuelle d un cote et pliee dans le script de l autre, et le
# mojibake des accents de node dans les sorties d un seul des deux postes.
#
# Ce fichier porte L OSSATURE SEULE : encodage, journalisation, autocontrole,
# sauvegarde, ecriture finale. Il ne porte AUCUNE etape metier, AUCUNE
# prediction, AUCUN chemin de fiche.
#
# C114 CONTINUE DE S APPLIQUER AU CONTENU. On ne relance jamais ce fichier.
# On le COPIE en tools\seance.ps1, on ecrit les predictions dans l en-tete
# et les etapes metier a la place du marqueur, et on lance la copie.
#
# ------------------------------------------------------------------------
# CONTRAINTES QUE L OSSATURE FAIT TENIR
# ------------------------------------------------------------------------
#   C114  ASCII strict - aucun caractere non-ASCII dans le script.
#         Dans un bloc Etape, TOUJOURS Write-Output, jamais Write-Host.
#         Le bloc le plus verbeux se place EN DERNIER.
#   C122  Le script balaie son propre source en etape 0 et publie le
#         nombre de lignes non ASCII. Une contrainte relue cede ; une
#         contrainte mesuree laisse une trace datee dans la sortie.
#   C124  La sortie precedente est copiee sous un nom date AVANT tout
#         ecrasement. Renseigner $ETIQUETTE ci-dessous.
#   C119  La sortie est ecrite en UTF-8 par le script lui-meme, jamais par
#         une redirection shell : le > de PowerShell 5.1 ecrit en UTF-16LE.
#         Le lancement est donc le meme sur tous les postes :
#           powershell -ExecutionPolicy Bypass -File tools\seance.ps1
#
# ------------------------------------------------------------------------
# PREDICTIONS - a ecrire ICI, avant lancement, decomposees fiche par fiche.
# Nommer aussi l issue INNOCENTE, pas seulement la cause attendue.
# ------------------------------------------------------------------------
#   (bloc a remplir a chaque serie)

$ErrorActionPreference = 'Continue'

# Racine du depot deduite de l emplacement du script : aucune ligne
# dependante de la machine, le modele vaut pour les deux postes.
Set-Location (Split-Path -Parent $PSScriptRoot)

# Sans cette ligne, la sortie UTF-8 de node est decodee avec la page de
# codes de la console et les accents sortent en mojibake.
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$SORTIE = 'tools\seance-sortie.txt'

# Etiquette de la sauvegarde C124 : date et rang de serie, par exemple
# '2808s1'. Mettre a jour a chaque serie destinee a etre comparee.
$ETIQUETTE = 'AAMMJJsN'

$lignes = New-Object System.Collections.Generic.List[string]

function Dire($texte) {
  $lignes.Add($texte)
  Write-Host $texte
}

function Etape($titre, $bloc) {
  Dire ""
  Dire "=============================================================="
  Dire ">>> $titre"
  Dire "=============================================================="
  $global:LASTEXITCODE = 0
  $res = & $bloc 2>&1
  foreach ($l in $res) {
    if ($l -is [System.Management.Automation.ErrorRecord]) {
      Dire ("[err] " + $l.Exception.Message)
    } else {
      Dire ($l.ToString())
    }
  }
  Dire "--- code de sortie : $LASTEXITCODE"
}

Etape "0 - autocontrole ASCII (C122) et sauvegarde de la sortie (C124)" {
  $moi = 'tools\seance.ps1'
  $src = Get-Content -Path $moi -Encoding UTF8
  $n = 0
  for ($i = 0; $i -lt $src.Count; $i++) {
    if ($src[$i] -cmatch '[^\x00-\x7F]') {
      $n = $n + 1
      Write-Output ("  ligne " + ($i + 1) + " : " + $src[$i])
    }
  }
  Write-Output ("lignes non ASCII dans seance.ps1 : " + $n)
  if (Test-Path $SORTIE) {
    $copie = 'tools\seance-sortie-' + $ETIQUETTE + '.txt'
    Copy-Item -Path $SORTIE -Destination $copie -Force
    Write-Output ("sortie precedente copiee : " + $copie)
  } else {
    Write-Output "aucune sortie precedente a copier"
  }
}

# ==========================================================================
# ETAPES METIER - a ecrire ICI, une Etape par mesure.
#
# Rappels d usage acquis en incident :
#   - filtrer a la source plutot que relire : Select-Object -First / -Last,
#     et --quiet quand l outil le porte (audit-medias) ;
#   - un motif a joker se teste sur un echantillon nomme AVANT de compter
#     (sous-regle de C110, 27/08) ;
#   - un wikilink en cellule de tableau a son pipe echappe : le motif doit
#     accepter une contre-oblique optionnelle, jamais le pipe nu ;
#   - toute ecriture est precedee d une garde Test-Path.
#
# LE BLOC LE PLUS VERBEUX SE PLACE EN DERNIER.
# ==========================================================================

# (etapes a ecrire)

# ==========================================================================

$lignes | Out-File -FilePath $SORTIE -Encoding utf8
Write-Host ""
Write-Host ("Sortie ecrite dans " + $SORTIE)
