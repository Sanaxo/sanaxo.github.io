import os
import re
import json
from PIL import Image

BASE_DIR = "src/assets/ai-images"
OUTPUT_JSON = "index.json"


def safe_value(value):
    """Macht jeden Metadatenwert JSON-kompatibel"""
    if isinstance(value, bytes):
        try:
            return value.decode("utf-8")
        except UnicodeDecodeError:
            return value.hex()
    if isinstance(value, (tuple, list)):
        return list(value)
    return value

def decode_exif_hex(hex_string):
    try:
        raw_bytes = bytes.fromhex(hex_string)
    except ValueError:
        return None

    decoded = []

    # Versuche mehrere Encodings
    for encoding in ("utf-8", "utf-16", "latin1"):
        try:
            text = raw_bytes.decode(encoding, errors="ignore")
            decoded.append(text)
        except Exception:
            pass

    return decoded
    
def extract_json_blocks(text):
    blocks = []
    stack = []
    start = None

    for i, char in enumerate(text):
        if char == "{":
            if not stack:
                start = i
            stack.append("{")
        elif char == "}":
            if stack:
                stack.pop()
                if not stack and start is not None:
                    blocks.append(text[start:i + 1])
                    start = None
    return blocks

def extract_metadata(image_path):
    with Image.open(image_path) as img:
        metadata = {
            "format": img.format,
            "mode": img.mode,
            "size": list(img.size),
            "raw": {},
            "decoded": []
        }

        for key, value in img.info.items():
            if isinstance(value, bytes):
                # Bytes → Hex sichern
                hex_value = value.hex()
                metadata["raw"][key] = hex_value

                # Falls EXIF → dekodieren
                decoded_texts = decode_exif_hex(hex_value)
                if decoded_texts:
                    for text in decoded_texts:
                        json_blocks = extract_json_blocks(text)
                        for block in json_blocks:
                            try:
                                metadata["decoded"].append(json.loads(block))
                            except json.JSONDecodeError:
                                pass
            else:
                metadata["raw"][key] = value

        return metadata


def build_index():
    index = {
        "title": "Index",
        "model": []
    }

    for model_name in sorted(os.listdir(BASE_DIR)):
        model_path = os.path.join(BASE_DIR, model_name)

        if not os.path.isdir(model_path):
            continue

        model_entry = {
            "name": model_name,
            "images": []
        }

        for file in sorted(os.listdir(model_path)):
            if not file.lower().endswith((".png", ".webp")):
                continue

            image_path = os.path.join(model_path, file)
            web_path = f"/src/assets/ai-images/{model_name}/{file}"
            print(extract_metadata(image_path))

            image_entry = {
                "path": web_path,
                "metadata": extract_metadata(image_path)
            }

            model_entry["images"].append(image_entry)

        index["model"].append(model_entry)

    return index


if __name__ == "__main__":
    index_data = build_index()

    with open(OUTPUT_JSON, "w", encoding="utf-8") as f:
        json.dump(index_data, f, indent=2, ensure_ascii=False)

    print("✅ index.json erfolgreich erstellt")
