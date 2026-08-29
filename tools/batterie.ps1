# batterie.ps1 - BATTERIE DE MESURE VERSIONNEE. Arbitrage Tim (a)+(b) du
# 29/08 (seance annexe) : extension de C126.
#
# ------------------------------------------------------------------------
# CE QUE CE FICHIER EST, ET CE QU IL N EST PAS
# ------------------------------------------------------------------------
# Les etapes de MESURE d une seance sont un repertoire fini (controle,
# style, recette, anneau, libelles, lot, wikilinks, medias, chevron,
# horloge, peremption). Les reecrire a chaque serie (C114) coutait un
# aller-retour par mesure et a coute deux lancements perdus le 29/08,
# le script n etant pas encore ecrit quand la commande etait donnee.
#
# Ce fichier fige ces mesures. Il est VERSIONNE : toute modification se
# relit en diff git, ce qui est plus tracable qu une reecriture de
# memoire. Il ne porte AUCUNE prediction (C116 : les predictions se
# publient AVANT le lancement, dans la conversation ou dans
# tools/predictions-AAMMJJ.md) et AUCUNE etape d edition.
#
# C114 et C126 CONTINUENT DE S APPLIQUER a tools\seance.ps1 pour tout ce
# qui n est pas une mesure du repertoire ci-dessous : passes ad hoc,
# balayages ponctuels, coupes. La batterie ne remplace pas la seance,
# elle en retire les mesures repetitives.
#
# ------------------------------------------------------------------------
# USAGE
# ------------------------------------------------------------------------
#   powershell -ExecutionPolicy Bypass -File tools\batterie.ps1 -Phase etat
#   powershell -ExecutionPolicy Bypass -File tools\batterie.ps1 -Phase garde
#   powershell -ExecutionPolicy Bypass -File tools\batterie.ps1 -Phase cadrage `
#     -Fiches embarque/mcu/micropython/micropython-servomoteur.md,embarque/mcu/micropython/micropython-pid.md
#   powershell -ExecutionPolicy Bypass -File tools\batterie.ps1 -Phase etat `
#     -FichesEn en/embarque/mcu/micropython/micropython-pid-en.md -Chevron
#
#   -Phase garde    : horloge + HEAD git + version node + dates d ecriture.
#                     A lancer au cadrage ET avant chaque passe : un ecart
#                     avec le releve precedent = ARRET (incident du 29/08,
#                     deux sessions sur le meme depot).
#   -Phase cadrage  : garde + volume du lot + candidats C109 des sources
#                     FR + anneau/dette/chevron.
#   -Phase etat     : garde + corpus + controle + derive + foisonnement +
#                     style EN du lot + medias + anneau + wikilinks +
#                     libelles. Cloture type.
#   -Fiches         : sources FR du lot, chemins relatifs a content/,
#                     separes par des virgules.
#   -FichesEn       : jumelles EN du lot, memes conventions.
#   -Anneau         : rang de l anneau courant (defaut 2).
#   -Chevron        : ajoute mesure-chevron --tout (lot a porteuses, C127).
#
# ------------------------------------------------------------------------
# CONTRAINTES TENUES (memes que seance-modele.ps1)
# ------------------------------------------------------------------------
#   C122  autocontrole ASCII du script en etape 0.
#   C124  la sortie precedente est copiee sous une etiquette AUTO, lue
#         sur l horloge et le repertoire (jamais composee de memoire) :
#         batterie-sortie-<jjMM>b<N>.txt, N = premier rang libre.
#   C119  sortie ecrite en UTF-8 par le script lui-meme, jamais par une
#         redirection shell (le > de PowerShell 5.1 ecrit en UTF-16LE).
#   Le bloc le plus verbeux (--libelles) se place EN DERNIER.

param(
  [Parameter(Mandatory = $true)]
  [ValidateSet('garde', 'cadrage', 'etat')]
  [string]$Phase,
  [string[]]$Fiches = @(),
  [string[]]$FichesEn = @(),
  [int]$Anneau = 2,
  [switch]$Chevron
)

$ErrorActionPreference = 'Continue'

# Un lancement par -File passe une liste a virgules comme UNE SEULE
# chaine (mesure du 29/08, seance annexe) : on eclate ici, pour que
# -Fiches a.md,b.md marche dans tous les modes d appel.
function Eclater($liste) {
  $sortie = @()
  foreach ($e in $liste) {
    foreach ($m in ($e -split ',')) {
      $t = $m.Trim()
      if ($t -ne '') { $sortie += $t }
    }
  }
  return ,$sortie
}
$Fiches = Eclater $Fiches
$FichesEn = Eclater $FichesEn

# Racine du depot deduite de l emplacement du script : aucune ligne
# dependante de la machine.
Set-Location (Split-Path -Parent $PSScriptRoot)

# Sans cette ligne, la sortie UTF-8 de node est decodee avec la page de
# codes de la console et les accents sortent en mojibake.
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$SORTIE = 'tools\batterie-sortie.txt'

$lignes = New-Object System.Collections.Generic.List[string]

function Dire($texte) {
  $lignes.Add($texte)
  Write-Host $texte
}

function Etape($titre, $bloc) {
  Dire ""
  Dire "=============================================================="
  Dire (">>> " + $titre)
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
  Dire ("--- code de sortie : " + $LASTEXITCODE)
}

Etape "0 - autocontrole ASCII (C122) et sauvegarde de la sortie (C124, etiquette auto)" {
  $moi = $PSCommandPath
  $src = Get-Content -Path $moi -Encoding UTF8
  $n = 0
  for ($i = 0; $i -lt $src.Count; $i++) {
    if ($src[$i] -cmatch '[^\x00-\x7F]') {
      $n = $n + 1
      Write-Output ("  ligne " + ($i + 1) + " : " + $src[$i])
    }
  }
  Write-Output ("lignes non ASCII dans batterie.ps1 : " + $n)
  if (Test-Path $SORTIE) {
    $jjMM = Get-Date -Format 'ddMM'
    $rang = 1
    while (Test-Path ('tools\batterie-sortie-' + $jjMM + 'b' + $rang + '.txt')) { $rang = $rang + 1 }
    $copie = 'tools\batterie-sortie-' + $jjMM + 'b' + $rang + '.txt'
    Copy-Item -Path $SORTIE -Destination $copie
    Write-Output ("sortie precedente copiee : " + $copie)
  } else {
    Write-Output "aucune sortie precedente a copier"
  }
}

Etape "1 - garde de peremption : horloge, HEAD git, dates d ecriture" {
  Write-Output ("phase demandee : " + $Phase + "   anneau : " + $Anneau + "   chevron : " + [bool]$Chevron)
  Write-Output ("date ISO : " + (Get-Date -Format 'yyyy-MM-dd') + "   heure : " + (Get-Date -Format 'HH:mm:ss'))
  Write-Output ""
  $tete = ''
  try { $tete = (& git log -1 --date=iso "--format=%h %cd" 2>$null) } catch { $tete = '' }
  if ($tete) {
    Write-Output ("HEAD git : " + $tete)
    $etatGit = @()
    try { $etatGit = @(& git status --porcelain 2>$null) } catch { $etatGit = @() }
    $sale = ($etatGit | Measure-Object).Count
    $saleHors = ($etatGit | Where-Object { $_ -notmatch 'batterie-sortie' } | Measure-Object).Count
    Write-Output ("fichiers modifies non commites : " + $sale + "   (hors sorties batterie : " + $saleHors + ")")
  } else {
    Write-Output "git indisponible ; lecture directe de .git\HEAD :"
    if (Test-Path '.git\HEAD') { Write-Output ("  " + (Get-Content '.git\HEAD' -First 1)) }
  }
  $noeud = ''
  try { $noeud = (& node --version 2>$null) } catch { $noeud = '' }
  if ($noeud) { Write-Output ("node : " + $noeud) } else { Write-Output "node : INTROUVABLE" }
  Write-Output ""
  Write-Output "dates de derniere ecriture (peremption : tout ecart avec le"
  Write-Output "releve precedent = ARRET avant d ecrire) :"
  foreach ($p in @('JOURNAL.md', 'conventions.md', 'TODO.md')) {
    if (Test-Path $p) {
      Write-Output ("  " + $p.PadRight(50) + "  " + (Get-Item $p).LastWriteTime.ToString('yyyy-MM-dd HH:mm:ss'))
    }
  }
  foreach ($f in ($Fiches + $FichesEn)) {
    $chemin = 'content\' + ($f -replace '/', '\')
    if (Test-Path $chemin) {
      Write-Output ("  " + $f.PadRight(50) + "  " + (Get-Item $chemin).LastWriteTime.ToString('yyyy-MM-dd HH:mm:ss'))
    } else {
      Write-Output ("  " + $f.PadRight(50) + "  ABSENTE")
    }
  }
}

if ($Phase -eq 'cadrage') {

  if ($Fiches.Count -eq 0) {
    Etape "2 - volume et candidats du lot" {
      Write-Output "aucune source FR passee (-Fiches) : etapes de lot sautees."
    }
  } else {
    Etape "2 - volume du lot (compter-mots --lot)" {
      node tools/compter-mots.mjs --lot $Fiches
    }
    Etape "3 - candidats C109 des sources FR (creer-fiche-en --style, decomposition par fiche)" {
      node tools/creer-fiche-en.mjs --style $Fiches
    }
  }
  Etape "4 - anneau, dette, chevron, cibles sans fiche (--anneau)" {
    node tools/creer-fiche-en.mjs --anneau $Anneau
  }
}

if ($Phase -eq 'etat') {

  Etape "2 - corpus FR publie, traduit / restant (compter-mots)" {
    node tools/compter-mots.mjs
  }
  Etape "3 - controle des trois compteurs (--controle, seules les lignes hors [ok] et le bilan)" {
    $res = node tools/creer-fiche-en.mjs --controle 2>&1
    $res | Where-Object { $_ -notmatch '^\s*\[ok\]' }
  }
  Etape "4 - derive des sources (derive-traduction)" {
    node tools/derive-traduction.mjs
  }
  Etape "5 - foisonnement (compter-mots --paires : paires du lot, puis resume)" {
    $res = node tools/compter-mots.mjs --paires 2>&1
    if ($FichesEn.Count -gt 0) {
      $motif = ($FichesEn | ForEach-Object { [regex]::Escape((Split-Path $_ -Leaf)) }) -join '|'
      $res | Where-Object { $_ -match $motif }
      Write-Output "  ..."
    }
    $res | Select-Object -Last 3
  }
  if ($FichesEn.Count -gt 0) {
    Etape "6 - style C109 du lot EN (--style)" {
      node tools/creer-fiche-en.mjs --style $FichesEn
    }
  } else {
    Etape "6 - style C109 du lot EN" {
      Write-Output "aucune fiche EN passee (-FichesEn) : etape sautee."
    }
  }
  Etape "7 - medias (audit-medias --quiet)" {
    node tools/audit-medias.mjs --quiet
  }
  Etape "8 - anneau, dette, chevron, cibles sans fiche (--anneau)" {
    node tools/creer-fiche-en.mjs --anneau $Anneau
  }
  if ($Chevron) {
    Etape "9 - appariement chevron FR/EN (mesure-chevron --tout, C127)" {
      node tools/mesure-chevron.mjs --tout
    }
  }
  Etape "10 - wikilinks (audit-wikilinks)" {
    node tools/audit-wikilinks.mjs
  }
  Etape "11 - libelles a lire (--libelles) - bloc le plus verbeux, en dernier" {
    node tools/creer-fiche-en.mjs --libelles
  }
}

$lignes | Out-File -FilePath $SORTIE -Encoding utf8
Write-Host ""
Write-Host ("Sortie ecrite dans " + $SORTIE)
