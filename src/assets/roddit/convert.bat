@echo off
setlocal enabledelayedexpansion

echo Konvertiere WebP-Dateien zu PNG...

for %%f in (*.webp) do (
    set "filename=%%~nf"
    echo Verarbeite: !filename!.webp
    ffmpeg -i "%%f" "!filename!.png"
)

echo.
echo Fertig! Alle Dateien wurden konvertiert.
pause