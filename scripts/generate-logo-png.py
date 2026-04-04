#!/usr/bin/env python3
"""Raster logo for Organization schema (Google prefers raster logo, min ~112px)."""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw

SIZE = 512
SCALE = SIZE / 32.0
R_CARD = int(8 * SCALE)
BAR_RX = max(2, int(1.2 * SCALE))

# Match favicon.svg colors
C_TOP = (0x0D, 0x6B, 0x4D)
C_BOTTOM = (0x08, 0x3D, 0x2C)


def lerp_color(t: float) -> tuple[int, int, int]:
    return tuple(int(C_TOP[i] + (C_BOTTOM[i] - C_TOP[i]) * t) for i in range(3))


def main() -> None:
    root = Path(__file__).resolve().parents[1]
    out = root / "images" / "logo.png"

    img = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    pix = img.load()
    for y in range(SIZE):
        t = y / max(SIZE - 1, 1)
        r, g, b = lerp_color(t)
        for x in range(SIZE):
            pix[x, y] = (r, g, b, 255)

    mask = Image.new("L", (SIZE, SIZE), 0)
    ImageDraw.Draw(mask).rounded_rectangle(
        [0, 0, SIZE - 1, SIZE - 1], radius=R_CARD, fill=255
    )
    img.putalpha(mask)

    draw = ImageDraw.Draw(img)
    white = (255, 255, 255, 255)
    bars = [
        (6.5, 18, 5, 8),
        (13.5, 12, 5, 14),
        (20.5, 6, 5, 20),
    ]
    for bx, by, bw, bh in bars:
        x0 = int(bx * SCALE)
        y0 = int(by * SCALE)
        x1 = int((bx + bw) * SCALE) - 1
        y1 = int((by + bh) * SCALE) - 1
        draw.rounded_rectangle([x0, y0, x1, y1], radius=BAR_RX, fill=white)

    out.parent.mkdir(parents=True, exist_ok=True)
    img.save(out, "PNG", optimize=True)
    print(f"Wrote {out} ({SIZE}x{SIZE})")


if __name__ == "__main__":
    main()
