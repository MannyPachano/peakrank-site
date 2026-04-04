#!/usr/bin/env python3
"""Wrap images/*.png img tags in <picture> + WebP; rewrite absolute image URLs to .webp; keep apple-touch-icon on logo.png."""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

IMG_TAG = re.compile(r"<img\b[^>]*>", re.IGNORECASE)


def first_png_img_in_document(html: str) -> int | None:
    """First above-the-fold raster marketing image is usually the first images/*.png in file order (hero in header)."""
    for m in IMG_TAG.finditer(html):
        tag = m.group(0)
        if re.search(r'src="(?:\.\./)?images/[^"]+\.png"', tag, re.I):
            return m.start()
    return None


def patch_img_tags(html: str) -> str:
    lcp_start = first_png_img_in_document(html)

    def repl(m: re.Match[str]) -> str:
        tag = m.group(0)
        sm = re.search(r'src="((?:\.\./)?images/[^"]+\.png)"', tag, re.I)
        if not sm:
            return tag
        png_path = sm.group(1)
        webp_path = png_path[:-4] + ".webp"
        is_lcp = lcp_start is not None and m.start() == lcp_start
        if not tag.rstrip().endswith("/>"):
            return tag
        core = tag[:-2].rstrip()
        if is_lcp and "fetchpriority=" not in core:
            core += ' fetchpriority="high"'
        if not is_lcp and "loading=" not in core:
            core += ' loading="lazy"'
        new_tag = core + " />"
        return f'<picture><source srcset="{webp_path}" type="image/webp" />{new_tag}</picture>'

    return IMG_TAG.sub(repl, html)


def patch_urls(html: str) -> str:
    html = re.sub(
        r"https://peakrankingseo\.com/images/([a-z0-9_-]+)\.png",
        r"https://peakrankingseo.com/images/\1.webp",
        html,
    )
    html = re.sub(
        r'(<link rel="apple-touch-icon" href=")(?:\.\./)?images/[a-z0-9_-]+\.webp("\s*/?>)',
        r"\1images/logo.png\2",
        html,
    )
    # Blog pages use ../images/logo.png
    html = re.sub(
        r'(<link rel="apple-touch-icon" href=")(\.\./)images/logo\.png("\s*/?>)',
        r"\1\2images/logo.png\3",
        html,
    )
    return html


def fix_pricing_manny(html: str, path: Path) -> str:
    if path.name != "pricing.html":
        return html
    return html.replace(
        '<img class="pricing-founder__img" src="images/manny-pachano.png" width="500" height="400"',
        '<img class="pricing-founder__img" src="images/manny-pachano.png" width="473" height="1024"',
    )


def process_file(path: Path) -> bool:
    text = path.read_text(encoding="utf-8")
    orig = text
    text = patch_urls(text)
    text = fix_pricing_manny(text, path)
    text = patch_img_tags(text)
    if text != orig:
        path.write_text(text, encoding="utf-8")
        return True
    return False


def main() -> None:
    files = sorted(list(ROOT.glob("*.html")) + list((ROOT / "blog").glob("*.html")))
    changed = 0
    for f in files:
        if process_file(f):
            print("updated", f.relative_to(ROOT))
            changed += 1
    print(f"done; {changed} files changed")


if __name__ == "__main__":
    main()
