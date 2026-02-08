import os
import json
from PIL import Image

INPUT_DIR = "src/assets/ai-images"
OUTPUT_DIR = "exported-workflows"


def decode_bytes(raw_bytes):
    texts = []
    for encoding in ("utf-8", "utf-16", "latin1"):
        try:
            texts.append(raw_bytes.decode(encoding, errors="ignore"))
        except Exception:
            pass
    return texts


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


def extract_workflow_from_image(image_path):
    candidates = []

    with Image.open(image_path) as img:
        for value in img.info.values():
            if isinstance(value, bytes):
                raw_bytes = value
            elif isinstance(value, str):
                try:
                    raw_bytes = bytes.fromhex(value)
                except ValueError:
                    raw_bytes = value.encode()
            else:
                continue

            for decoded in decode_bytes(raw_bytes):
                for block in extract_json_blocks(decoded):
                    try:
                        data = json.loads(block)
                        if isinstance(data, dict):
                            candidates.append(data)
                    except json.JSONDecodeError:
                        pass

    if not candidates:
        return None

    # 💡 NUR der größte JSON-Block gewinnt
    return max(candidates, key=lambda x: len(json.dumps(x)))


def export_workflows():
    for model in os.listdir(INPUT_DIR):
        model_path = os.path.join(INPUT_DIR, model)
        if not os.path.isdir(model_path):
            continue

        output_model_dir = os.path.join(OUTPUT_DIR, model)
        os.makedirs(output_model_dir, exist_ok=True)

        for file in os.listdir(model_path):
            if not file.lower().endswith((".png", ".webp")):
                continue

            image_path = os.path.join(model_path, file)
            workflow = extract_workflow_from_image(image_path)

            if workflow is None:
                print(f"⚠️ Kein Workflow gefunden: {image_path}")
                continue

            base_name = os.path.splitext(file)[0]
            output_path = os.path.join(
                output_model_dir,
                f"{base_name}.workflow.json"
            )

            with open(output_path, "w", encoding="utf-8") as f:
                json.dump(workflow, f, indent=2, ensure_ascii=False)

            print(f"✅ Workflow exportiert: {output_path}")


if __name__ == "__main__":
    export_workflows()
