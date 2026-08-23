# tools/draft-en.ps1 -- bascule le flag draft des fiches EN.
# Usage :
#   powershell -ExecutionPolicy Bypass -File .\tools\draft-en.ps1 -Etat true
#   powershell -ExecutionPolicy Bypass -File .\tools\draft-en.ps1 -Etat false -Fiches i2c-en,spi-en,uart-en
#   powershell -ExecutionPolicy Bypass -File .\tools\draft-en.ps1 -Etat true -DryRun
#
# Par defaut, agit sur toutes les fiches de content/en/ SAUF les quatre index
# du lot 1 (deja traduits et publies), qui servent de reference a la mesure C105.
# Ecriture en UTF-8 sans BOM et en fins de ligne LF : ne pas passer par
# Set-Content, qui reintroduirait un BOM et des CRLF dans content/.
# Fichier volontairement sans accents.

param(
  [Parameter(Mandatory=$true)][ValidateSet('true','false')][string]$Etat,
  [string[]]$Fiches,
  [string[]]$Exclure = @(
    'content/en/index.md'
    'content/en/conduite/index.md'
    'content/en/embarque/index.md'
    'content/en/meca/index.md'
  ),
  [switch]$DryRun
)

$repo = Split-Path $PSScriptRoot -Parent
Set-Location $repo
$racine = Join-Path $repo 'content\en'
if (-not (Test-Path $racine)) { Write-Host "ECHEC : content/en introuvable"; exit 1 }

$tous = Get-ChildItem -Path $racine -Filter *.md -Recurse
$exclSet = @{}
foreach ($e in $Exclure) { $exclSet[($e -replace '/','\')] = $true }

$cibles = @()
foreach ($f in $tous) {
  $rel = $f.FullName.Substring($repo.Length + 1)
  if ($exclSet.ContainsKey($rel)) { continue }
  if ($Fiches) {
    $garde = $false
    foreach ($p in $Fiches) { if ($f.Name -like "*$p*") { $garde = $true } }
    if (-not $garde) { continue }
  }
  $cibles += $f
}

$utf8 = New-Object System.Text.UTF8Encoding($false)
$modifiees = 0
$deja = 0
$sansFlag = @()

foreach ($f in $cibles) {
  $rel = $f.FullName.Substring($repo.Length + 1)
  $txt = [System.IO.File]::ReadAllText($f.FullName, [System.Text.Encoding]::UTF8)
  if ($txt -notmatch '(?m)^draft:\s*(true|false)\s*$') { $sansFlag += $rel; continue }
  $actuel = [regex]::Match($txt, '(?m)^draft:\s*(true|false)\s*$').Groups[1].Value
  if ($actuel -eq $Etat) { $deja++; continue }
  $neuf = [regex]::Replace($txt, '(?m)^draft:\s*(true|false)\s*$', "draft: $Etat", 1)
  if (-not $DryRun) { [System.IO.File]::WriteAllText($f.FullName, $neuf, $utf8) }
  $modifiees++
  Write-Host "  $rel  $actuel -> $Etat"
}

Write-Host ''
Write-Host '===== BASCULE DRAFT EN ====='
if ($DryRun) { Write-Host 'MODE : -DryRun (aucune ecriture)' }
Write-Host "Cible          : draft: $Etat"
Write-Host "Fiches vues    : $($cibles.Count)"
Write-Host "Basculees      : $modifiees"
Write-Host "Deja a l'etat  : $deja"
Write-Host "Exclues        : $($Exclure.Count)  (reference C105)"
if ($sansFlag.Count -gt 0) {
  Write-Host "SANS FLAG draft : $($sansFlag.Count)"
  $sansFlag | ForEach-Object { Write-Host "  $_" }
}
Write-Host '===== FIN ====='
