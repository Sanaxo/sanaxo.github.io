import os
import json
from PIL import Image
from PIL.PngImagePlugin import PngImageFile

# Funktion, um die Metadaten aus einer PNG-Datei zu extrahieren
def extract_metadata(png_file):
    try:
        with Image.open(png_file) as img: 
            # Extrahieren der PNG-Metadaten (z.B. Text oder andere benutzerdefinierte Daten)
            metadata = img.text
            return metadata
    except Exception as e:
        print(f"Fehler beim Extrahieren der Metadaten von {png_file}: {e}")
        return None

# Funktion, um die Metadaten in das JSON-Format zu konvertieren
def create_comfyui_workflow(metadata):
    # Hier nehme ich an, dass die Metadaten in einem Dictionary vorliegen und wir sie in ein ComfyUI-kompatibles Format umwandeln müssen
    workflow = {
        "input": {
            "prompt": metadata.get("prompt", ""),
            "seed": metadata.get("seed", 0),
            "width": metadata.get("width", 512),
            "height": metadata.get("height", 512),
            "steps": metadata.get("steps", 20),
            # Weitere Werte basierend auf den verfügbaren Metadaten ergänzen
        },
        "output": {
            "output_file": metadata.get("output_file", "generated_image.png")
        }
    }
    return workflow

# Hauptfunktion, die alle PNG-Dateien im angegebenen Ordner durchgeht und eine JSON-Datei erstellt
def generate_workflow_from_png_folder(folder_path, output_json):
    workflows = []

    # Durch alle PNG-Dateien im Ordner gehen
    for filename in os.listdir(folder_path):
        if filename.endswith(".png"):
            png_path = os.path.join(folder_path, filename)
            metadata = extract_metadata(png_path)
            if metadata:
                workflow = create_comfyui_workflow(metadata)
                workflows.append(workflow)

    # Speichern der Workflows in einer JSON-Datei
    with open(output_json, "w") as json_file:
        json.dump(workflows, json_file, indent=4)
    print(f"Workflows wurden erfolgreich in {output_json} gespeichert.")

# Beispielaufruf
folder_path = "./src/assets/sd-images"  # Ersetzen mit dem Pfad zu deinem Ordner
output_json = "comfyui_workflows.json"  # Der Name der Ausgabe-JSON-Datei
generate_workflow_from_png_folder(folder_path, output_json)
