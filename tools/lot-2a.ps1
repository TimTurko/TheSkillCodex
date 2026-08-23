# tools/lot-2a.ps1 -- generation groupee des squelettes EN du lot 2a.
# Usage depuis n'importe ou :
#   powershell -ExecutionPolicy Bypass -File .\tools\lot-2a.ps1
#   powershell -ExecutionPolicy Bypass -File .\tools\lot-2a.ps1 -DryRun
# Sortie : un resume court a recopier tel quel.
# Fichier volontairement sans accents (compatibilite console Windows).

param([switch]$DryRun, [switch]$Force)

$ErrorActionPreference = 'Continue'
$repo = Split-Path $PSScriptRoot -Parent
Set-Location $repo

$outil = 'tools/creer-fiche-en.mjs'
if (-not (Test-Path $outil)) { Write-Host "ECHEC : $outil introuvable depuis $repo"; exit 1 }

$fiches = @(
  'content/embarque/mcu/bus/i2c.md'
  'content/embarque/mcu/bus/spi.md'
  'content/embarque/mcu/bus/uart.md'
  'content/embarque/mcu/adc.md'
  'content/embarque/mcu/pwm.md'
  'content/embarque/mcu/memoire.md'
  'content/embarque/mcu/cpp/cpp.md'
  'content/embarque/mcu/micropython/micropython-langage.md'
  'content/embarque/mcu/sans-fil/wifi.md'
  'content/embarque/mcu/sans-fil/ble.md'
  'content/embarque/mcu/sans-fil/lora.md'
  'content/embarque/mcu/sans-fil/zigbee.md'
  'content/meca/comparateur.md'
  'content/meca/pied-a-coulisse.md'
  'content/meca/pla.md'
  'content/meca/impression-3d.md'
  'content/meca/usinage.md'
  'content/meca/soudure.md'
  'content/conduite/meo/revue-de-code.md'
  'content/conduite/meo/unite-si.md'
  'content/conduite/meo/archivage-projet.md'
  'content/conduite/meo/cable-management.md'
  'content/conduite/meo/relation-client.md'
  'content/conduite/meo/index.md'
  'content/conduite/ese/index.md'
  'content/conduite/proj/index.md'
)

$flags = @()
if ($DryRun) { $flags += '--dry' }
if ($Force)  { $flags += '--force' }

$manquantes = @()
foreach ($f in $fiches) { if (-not (Test-Path $f)) { $manquantes += $f } }
if ($manquantes.Count -gt 0) {
  Write-Host "ECHEC : $($manquantes.Count) source(s) FR introuvable(s)"
  $manquantes | ForEach-Object { Write-Host "  $_" }
  exit 1
}

$ok = 0
$echecs = @()
$signale = @()

foreach ($f in $fiches) {
  $sortie = & node $outil @flags $f 2>&1
  $code = $LASTEXITCODE
  $txt = ($sortie | Out-String).Trim()
  if ($code -eq 0) {
    $ok++
    # l'outil signale les ancres intra-page et les libelles remplis avec le titre FR :
    # on remonte le bloc entier, pas seulement sa ligne d'en-tete.
    if ($txt -match 'ancre|anchor|attention|warn|traduire') {
      $signale += "--- $f"
      foreach ($l in ($txt -split "`r?`n")) { if ($l.Trim()) { $signale += "    $l" } }
    }
  } else {
    $echecs += [pscustomobject]@{ Fiche = $f; Code = $code; Message = $txt }
  }
}

Write-Host ''
Write-Host '===== LOT 2a -- GENERATION ====='
if ($DryRun) { Write-Host 'MODE : --dry (aucune ecriture)' }
Write-Host "Generees : $ok / $($fiches.Count)"

if ($echecs.Count -eq 0) {
  Write-Host 'Generation : OK'
} else {
  Write-Host "ECHECS : $($echecs.Count)"
  foreach ($e in $echecs) {
    Write-Host "  --- $($e.Fiche)  (exit $($e.Code))"
    foreach ($l in ($e.Message -split "`r?`n")) { if ($l.Trim()) { Write-Host "      $l" } }
  }
}

if ($signale.Count -gt 0) {
  Write-Host ''
  Write-Host "SIGNALEMENTS (fiches concernees) :"
  $signale | ForEach-Object { Write-Host "  $_" }
}

Write-Host ''
Write-Host '===== CONTROLE DES TROIS COMPTEURS ====='
if ($DryRun) {
  Write-Host 'Ignore en mode --dry.'
} else {
  $ctrl = & node $outil --controle 2>&1
  $codeCtrl = $LASTEXITCODE
  ($ctrl | Out-String).Trim() -split "`r?`n" | ForEach-Object { Write-Host $_ }
  if ($codeCtrl -eq 0) { Write-Host 'Controle : OK' } else { Write-Host "Controle : DIVERGENCES (exit $codeCtrl)" }
}

Write-Host ''
Write-Host '===== FIN ====='
if ($echecs.Count -gt 0) { exit 1 } else { exit 0 }
