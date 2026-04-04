#!/usr/bin/env python3
"""Ensure first <picture> per file is LCP-friendly; others are lazy-loaded."""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

PICTURE_RE = re.compile(
    r'<picture><source srcset="([^"]+)" type="image/webp" />\s*<img([^>]*?)\s*/></picture>',
    re.IGNORECASE,
)


def fix_html(html: str) -> str:
    parts: list[str] = []
    last = 0
    first = True
    for m in PICTURE_RE.finditer(html):
        parts.append(html[last : m.start()])
        srcset, attrs = m.group(1), m.group(2)
        attrs = re.sub(r"\s+loading=\S+", "", attrs)
        attrs = re.sub(r"\s+fetchpriority=\S+", "", attrs)
        attrs = attrs.strip()
        if first:
            attrs += ' fetchpriority="high"'
            first = False
        else:
            attrs += ' loading="lazy"'
        parts.append(f'<picture><source srcset="{srcset}" type="image/webp" /><img {attrs} /></picture>')
        last = m.end()
    parts.append(html[last:])
    return "".join(parts)


def main() -> None:
    for f in sorted(list(ROOT.glob("*.html")) + list((ROOT / "blog").glob("*.html"))):
        text = f.read_text(encoding="utf-8")
        new = fix_html(text)
        if new != text:
            f.write_text(new, encoding="utf-8")
            print("fixed", f.relative_to(ROOT))


if __name__ == "__main__":
    main()
