#!/usr/bin/env python3
"""Import raw iPhone screenshots into public/screenshots/iphone/*.webp."""

from __future__ import annotations

import subprocess
import sys
from pathlib import Path

from PIL import Image

ASSETS_DIR = Path(__file__).resolve().parent / "iphone-screenshot-sources"
OUT_DIR = Path(__file__).resolve().parents[1] / "public" / "screenshots" / "iphone"
TARGET_W, TARGET_H = 720, 1560

# Filenames from capture time -> site asset key
FILES: dict[str, str] = {
    "Screenshot_iPhone_18_Pro_2026-09-24_at_11.04.26_PM-6d7eeed6-9663-45c8-9453-2dfd8abfd8a5.jpg": "home",
    "Screenshot_iPhone_18_Pro_2026-09-24_at_11.04.53_PM-d02a89be-84b7-4ab2-b1e1-539fd61bb0d9.jpg": "earnings",
    "Screenshot_iPhone_18_Pro_2026-09-24_at_11.05.47_PM-0d9f13cd-60f8-41e9-9196-c59ee67675e6.png": "records",
    "Screenshot_iPhone_18_Pro_2026-09-24_at_11.06.08_PM-f82423cc-eb09-43e1-b37e-a64e861620fb.png": "profiles",
    "Screenshot_iPhone_18_Pro_2026-09-24_at_11.06.26_PM-4afcbc0e-5e6b-4abe-8da5-a224b14ae3ae.png": "goals",
    "Screenshot_iPhone_18_Pro_2026-09-24_at_11.06.34_PM-d762397f-1b1a-4bcf-bbc5-3371a95b1553.png": "modes",
    "Screenshot_iPhone_18_Pro_2026-09-24_at_11.07.03_PM-b998c884-204a-4356-b5ea-f7fa5aa9574a.png": "session-setup",
    "Screenshot_iPhone_18_Pro_2026-09-24_at_11.07.37_PM-48585d4e-2331-4317-b7a7-32867cc5f934.png": "expense",
    "Screenshot_iPhone_18_Pro_2026-09-24_at_11.10.27_PM-edde3a25-8396-49c2-bfac-d8322deeac4e.png": "fitness",
    "Screenshot_iPhone_18_Pro_2026-09-24_at_11.12.14_PM-e80dddc8-cd46-4e4d-ab5a-ba8c100da8c2.png": "pay-schedule",
}

ALIASES = {
    "home-goals": "goals",
    "records-analytics": "records",
    "records-activity": "expense",
    "weekly-chart": "fitness",
    "sessions": "session-setup",
    "income-goal": "goals",
    "heatmap": "records",
}


def to_webp(src: Path, dest: Path) -> None:
    im = Image.open(src).convert("RGB")
    if im.size != (TARGET_W, TARGET_H):
        im = im.resize((TARGET_W, TARGET_H), Image.Resampling.LANCZOS)
    tmp = dest.with_suffix(".png")
    im.save(tmp)
    subprocess.run(
        ["cwebp", "-q", "90", "-m", "6", str(tmp), "-o", str(dest)],
        check=True,
        capture_output=True,
    )
    tmp.unlink(missing_ok=True)


def main() -> int:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    produced: dict[str, Path] = {}

    for filename, key in FILES.items():
        src = ASSETS_DIR / filename
        if not src.is_file():
            print(f"Missing: {src}", file=sys.stderr)
            return 1
        out = OUT_DIR / f"{key}.webp"
        to_webp(src, out)
        produced[key] = out
        print(f"Wrote {out.name}")

    for alias, source in ALIASES.items():
        dest = OUT_DIR / f"{alias}.webp"
        dest.write_bytes(produced[source].read_bytes())
        print(f"Aliased {dest.name} -> {source}.webp")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
