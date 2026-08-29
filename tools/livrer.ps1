# livrer.ps1 - LIVRAISON DE FIN DE SEANCE EN UNE INSTRUCTION.
# Demande Tim du 29/08 (suite 3).
#
# ------------------------------------------------------------------------
# CE QUE CE FICHIER FAIT, ET CE QU IL NE FAIT PAS
# ------------------------------------------------------------------------
# Le bloc C121 de fin de seance est toujours le meme quatuor :
#   node tools/normalize-pilotage.js
#   git add -A
#   git commit -m "<message>"
#   git push
# Ce script l enchaine, avec les gardes que le collage a la main n avait
# pas. Il NE decide de rien : c est Tim qui le lance, qui lit ce qui va
# etre commite, et qui confirme. C121 reste entier - Claude ne commite
# jamais, il fournit la ligne.
#
# GARDES, dans l ordre ou elles s appliquent :
#   1. depot     : on refuse de tourner hors du depot TheSkillCodex.
#   2. message   : obligatoire, ASCII strict (l historique git du projet
#                  est en ASCII), au moins 10 caracteres.
#   3. hook      : on signale si core.hooksPath n est pas arme, car c est
#                  lui qui bloque les caracteres invisibles (pre-commit).
#   4. normalize : si le script d hygiene echoue, ON S ARRETE - il tourne
#                  AVANT le add, sinon ses corrections ne sont pas prises.
#   5. revue     : la liste nominative des fichiers est affichee et la
#                  confirmation est demandee. Pas de confirmation, pas de
#                  commit. -Oui saute cette etape, a n utiliser que pour
#                  un contenu deja relu.
#   6. rien a faire : arbre propre = on s arrete sans commit vide.
#   7. push      : signale distinctement, car c est la seule etape qui
#                  sort de la machine. -SansPush s arrete apres le commit.
#
# ------------------------------------------------------------------------
# USAGE
# ------------------------------------------------------------------------
#   powershell -ExecutionPolicy Bypass -File tools\livrer.ps1 "mon message"
#   powershell -ExecutionPolicy Bypass -File tools\livrer.ps1 "message" -Oui
#   powershell -ExecutionPolicy Bypass -File tools\livrer.ps1 "message" -SansPush

param(
  [Parameter(Mandatory = $true, Position = 0)]
  [string]$Message,
  [switch]$Oui,
  [switch]$SansPush
)

$ErrorActionPreference = 'Continue'

Set-Location (Split-Path -Parent $PSScriptRoot)
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

function Stop-Ici($texte) {
  Write-Host ""
  Write-Host ("ARRET : " + $texte) -ForegroundColor Red
  exit 1
}

Write-Host ""
Write-Host "=== LIVRAISON DE FIN DE SEANCE ==="
Write-Host ("depot  : " + (Get-Location).Path)
Write-Host ("heure  : " + (Get-Date -Format 'yyyy-MM-dd HH:mm:ss'))

# --- garde 1 : le bon depot ---
if (-not (Test-Path 'JOURNAL.md') -or -not (Test-Path 'tools\compter-mots.mjs')) {
  Stop-Ici "ce repertoire n est pas le depot TheSkillCodex."
}

# --- garde 2 : le message ---
if ($Message.Length -lt 10) {
  Stop-Ici "message de commit trop court (10 caracteres minimum)."
}
if ($Message -cmatch '[^\x00-\x7F]') {
  Write-Host ""
  Write-Host "ARRET : le message porte des caracteres non ASCII." -ForegroundColor Red
  Write-Host "  L historique git du projet est en ASCII (pas d accents)."
  Write-Host "  Message recu : $Message"
  exit 1
}

# --- garde 3 : le hook d hygiene ---
$hooks = (& git config core.hooksPath 2>$null)
if ($hooks -ne 'tools/git-hooks') {
  Write-Host ""
  Write-Host "AVIS : core.hooksPath n est pas arme sur ce poste." -ForegroundColor Yellow
  Write-Host "  Le pre-commit qui bloque les caracteres invisibles ne tournera pas."
  Write-Host "  Pour l armer une fois pour toutes : git config core.hooksPath tools/git-hooks"
}

# --- garde 4 : hygiene AVANT le add ---
Write-Host ""
Write-Host "--- 1/4  hygiene des fichiers de pilotage (normalize-pilotage) ---"
& node tools/normalize-pilotage.js
if ($LASTEXITCODE -ne 0) {
  Stop-Ici "normalize-pilotage a rendu un code non nul. Rien n a ete commite."
}

# --- garde 6 : y a-t-il quelque chose a livrer ---
$etat = @(& git status --porcelain)
if ($etat.Count -eq 0) {
  Write-Host ""
  Write-Host "Rien a livrer : l arbre est propre. Aucun commit." -ForegroundColor Green
  exit 0
}

# --- garde 5 : revue nominative ---
Write-Host ""
Write-Host ("--- 2/4  ce qui va etre commite (" + $etat.Count + " entree(s)) ---")
foreach ($l in $etat) { Write-Host ("  " + $l) }
Write-Host ""
Write-Host ("message : " + $Message)

if (-not $Oui) {
  Write-Host ""
  $rep = Read-Host "Confirmer le commit et le push ? (o/N)"
  if ($rep -notmatch '^[oOyY]$') {
    Write-Host "Abandon a la demande. Rien n a ete commite." -ForegroundColor Yellow
    exit 0
  }
}

# --- add + commit ---
Write-Host ""
Write-Host "--- 3/4  git add -A + git commit ---"
& git add -A
if ($LASTEXITCODE -ne 0) { Stop-Ici "git add a echoue." }

& git commit -m $Message
if ($LASTEXITCODE -ne 0) {
  Stop-Ici "git commit a echoue (hook pre-commit ? rien d indexe ?). Rien n est pousse."
}

# --- push ---
if ($SansPush) {
  Write-Host ""
  Write-Host "--- 4/4  push SAUTE (-SansPush). Le commit est local. ---" -ForegroundColor Yellow
} else {
  Write-Host ""
  Write-Host "--- 4/4  git push ---"
  & git push
  if ($LASTEXITCODE -ne 0) {
    Stop-Ici "git push a echoue. Le commit est LOCAL : relancer le push a la main."
  }
}

$tete = (& git log -1 --date=iso "--format=%h %cd %s" 2>$null)
Write-Host ""
Write-Host "=== LIVRE ===" -ForegroundColor Green
Write-Host ("HEAD : " + $tete)
