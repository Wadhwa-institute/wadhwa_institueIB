#!/usr/bin/env python3
"""
Premium dark-theme posters for Wadhwa Institute.

Faces are never altered. The only operation on a teacher photo is background
removal (rembg, done earlier); this script composites the existing cutout pixels
onto a designed background. No generative model touches the person.

Design goals (from client feedback): clean dark theme, the real WI logo is
prominent, and EVERY piece of text is high-contrast and legible (all copy sits
on a solid dark panel, never floating over the photo).

Run:  . .venv-posters/bin/activate && python tools/make_posters.py
Output: 1080x1350 PNGs in public/assets/posters/.
"""

from PIL import Image, ImageDraw, ImageFont, ImageFilter
import numpy as np
import os

W, H = 1080, 1350
GREEN = (143, 240, 0)
GREEN_DEEP = (90, 150, 0)
GREEN_DARK = (24, 44, 0)
BASE = (7, 7, 7)
PANEL = (10, 10, 10)
WHITE = (255, 255, 255)
DIM = (205, 210, 200)

FONTS = "/tmp/fonts"
CUT = "/tmp/cutouts"
OUT = "public/assets/posters"
os.makedirs(OUT, exist_ok=True)

ANTON = lambda s: ImageFont.truetype(f"{FONTS}/Anton.ttf", s)
OSWALD = lambda s: ImageFont.truetype(f"{FONTS}/Oswald.ttf", s)
MONT = lambda s: ImageFont.truetype(f"{FONTS}/Montserrat.ttf", s)


def text_s(d, xy, text, f, fill, shadow=(0, 0, 0), off=(3, 3), anchor=None):
    """Text with a hard drop shadow for guaranteed legibility."""
    x, y = xy
    d.text((x + off[0], y + off[1]), text, font=f, fill=shadow, anchor=anchor)
    d.text((x, y), text, font=f, fill=fill, anchor=anchor)


def radial(size, center, max_r, color, max_alpha, steps=30):
    layer = Image.new("RGBA", size, (0, 0, 0, 0))
    dr = ImageDraw.Draw(layer)
    cx, cy = center
    for i in range(steps, 0, -1):
        rad = int(max_r * i / steps)
        a = int(max_alpha * (1 - i / steps) ** 1.4)
        dr.ellipse([cx - rad, cy - rad, cx + rad, cy + rad], fill=color + (a,))
    return layer.filter(ImageFilter.GaussianBlur(60))


def base_canvas():
    img = Image.new("RGBA", (W, H), BASE + (255,))
    img.alpha_composite(radial((W, H), (int(W * 0.9), int(H * -0.02)), 820, GREEN, 46))
    d = ImageDraw.Draw(img)
    d.rounded_rectangle([16, 16, W - 16, H - 16], radius=28, outline=GREEN + (150,), width=3)
    return img


def load_logo():
    return Image.open(f"{CUT}/logo-mark.png").convert("RGBA")


def top_brand_bar(img, logo):
    """Solid dark top strip with the real logo + wordmark, always legible."""
    bar_h = 200
    strip = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    sd = ImageDraw.Draw(strip)
    for y in range(bar_h):
        a = int(235 * (1 - y / bar_h) ** 1.3)
        sd.line([(0, y), (W, y)], fill=(4, 4, 4, a))
    img.alpha_composite(strip)

    lh = 100
    lw = int(logo.width * (lh / logo.height))
    img.alpha_composite(logo.resize((lw, lh), Image.LANCZOS), (56, 44))
    d = ImageDraw.Draw(img)
    tx = 56 + lw + 22
    text_s(d, (tx, 52), "WADHWA INSTITUTE", OSWALD(40), WHITE, off=(2, 2))
    d.text((tx, 104), "PREMIUM IB COACHING  ·  GURUGRAM", font=OSWALD(24), fill=GREEN)
    return tx, 52


def head_metrics(cutout):
    a = np.array(cutout)[..., 3]
    ys, xs = np.where(a > 30)
    top = ys.min(); h = ys.max() - top
    band = top + int(h * 0.10)
    row = np.where(a[band] > 30)[0]
    head_w = (row.max() - row.min()) if len(row) else cutout.width
    head_cx = (row.max() + row.min()) // 2 if len(row) else cutout.width // 2
    return top, head_w, head_cx


def green_rim(person):
    alpha = person.split()[3]
    halo = Image.new("RGBA", person.size, (0, 0, 0, 0))
    halo.paste(Image.new("RGBA", person.size, GREEN + (255,)), (0, 0), alpha)
    halo = halo.filter(ImageFilter.GaussianBlur(24))
    halo.putalpha(halo.split()[3].point(lambda p: int(p * 0.55)))
    return halo


def chip(d, x, y, text, f, padx=26, pady=14):
    tw = d.textlength(text, font=f)
    h = f.size + pady * 2
    d.rounded_rectangle([x, y, x + tw + padx * 2, y + h], radius=999,
                        fill=(6, 6, 6, 240), outline=GREEN, width=3)
    d.text((x + padx, y + pady - 4), text, font=f, fill=GREEN)
    return tw + padx * 2


def chips(d, x, y, items, f, gap=14):
    cx = x
    for it in items:
        cx += chip(d, cx, y, it, f) + gap


def wrap(d, text, f, max_w):
    out, cur = [], ""
    for w in text.split():
        if d.textlength((cur + " " + w).strip(), font=f) <= max_w:
            cur = (cur + " " + w).strip()
        else:
            out.append(cur); cur = w
    if cur:
        out.append(cur)
    return out


# ---------------------------------------------------------------------------
def teacher_poster(logo, cut_file, name, role, subjects, line, out_name):
    img = base_canvas()

    # photo, normalized by head width, bleeding from the right
    cutout = Image.open(cut_file).convert("RGBA")
    TARGET_HEAD_W = 300
    top, head_w, head_cx = head_metrics(cutout)
    scale = TARGET_HEAD_W / head_w
    person = cutout.resize((int(cutout.width * scale), int(cutout.height * scale)), Image.LANCZOS)
    head_cx_s = int(head_cx * scale); head_top_s = int(top * scale)
    anchor_x = int(W * 0.72)
    eyes_from_top = int(H * 0.40)
    eyes_in = head_top_s + int(TARGET_HEAD_W * 0.62)
    px = anchor_x - head_cx_s
    py = eyes_from_top - eyes_in
    img.alpha_composite(green_rim(person), (px, py))
    img.alpha_composite(person, (px, py))

    # SOLID lower panel so all text is legible (the key fix). Starts higher and
    # is fully opaque under the text so nothing competes with the photo.
    panel_top = 760
    panel = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    pd = ImageDraw.Draw(panel)
    feather = 130
    for y in range(panel_top, H):
        if y < panel_top + feather:
            a = int(252 * (y - panel_top) / feather)
        else:
            a = 252
        pd.line([(0, y), (W, y)], fill=(8, 8, 8, a))
    img.alpha_composite(panel)

    top_brand_bar(img, logo)
    d = ImageDraw.Draw(img)

    # Lay the text block out bottom-up so the pitch never collides with the footer.
    x = 60
    name_f, role_f, line_f = ANTON(100), OSWALD(34), MONT(30)
    line_wrapped = wrap(d, line, line_f, 640)

    footer_y = H - 120          # phone + site
    line_block_h = len(line_wrapped) * 44
    line_y = footer_y - 36 - line_block_h
    role_y = line_y - 56
    name_y = role_y - name_f.size - 6
    chips_y = name_y - 78

    chips(d, x, chips_y, subjects, OSWALD(26))
    text_s(d, (x, name_y), name.upper(), name_f, WHITE, off=(4, 4))
    text_s(d, (x + 2, role_y), role, role_f, GREEN, off=(2, 2))
    ly = line_y
    for ln in line_wrapped:
        text_s(d, (x + 2, ly), ln, line_f, WHITE, off=(2, 2))
        ly += 44

    d.line([x + 2, footer_y + 20, x + 70, footer_y + 20], fill=GREEN, width=7)
    text_s(d, (x + 92, footer_y - 6), "+91 8010436968", ANTON(42), WHITE, off=(2, 2))
    d.text((x + 92, footer_y + 50), "wadhwa-institue-ib.com", font=OSWALD(26), fill=GREEN)

    img.convert("RGB").save(f"{OUT}/{out_name}")
    print(out_name)


def promo_poster(logo):
    img = base_canvas()
    img.alpha_composite(radial((W, H), (int(W * 0.1), int(H * 1.02)), 700, GREEN, 30))
    top_brand_bar(img, logo)
    d = ImageDraw.Draw(img)

    d.text((60, 360), "BOOK A FREE CONSULTATION", font=OSWALD(30), fill=GREEN)
    text_s(d, (56, 410), "SCORE YOUR", ANTON(150), WHITE, off=(5, 5))
    text_s(d, (56, 572), "PERFECT 7", ANTON(190), GREEN, off=(5, 5))

    text_s(d, (62, 820), "Mentor led IB tuition.", OSWALD(44), WHITE, off=(2, 2))
    d.text((62, 880), "Online and in person, across Gurugram.", font=OSWALD(34), fill=DIM)

    chips(d, 62, 1040, ["English", "French", "Business", "Economics", "Maths AA / AI"], OSWALD(26))

    fy = 1190
    d.line([62, fy + 20, 130, fy + 20], fill=GREEN, width=7)
    text_s(d, (150, fy - 6), "+91 8010436968", ANTON(48), WHITE, off=(2, 2))
    d.text((150, fy + 52), "wadhwa-institue-ib.com", font=OSWALD(28), fill=GREEN)

    img.convert("RGB").save(f"{OUT}/promo.png")
    print("promo.png")


def quote_poster(logo):
    img = base_canvas()
    img.alpha_composite(radial((W, H), (W // 2, int(H * 0.42)), 760, GREEN, 30))

    lw = 340
    lh = int(logo.height * (lw / logo.width))
    big = logo.resize((lw, lh), Image.LANCZOS)
    halo = Image.new("RGBA", big.size, (0, 0, 0, 0))
    halo.paste(Image.new("RGBA", big.size, GREEN + (255,)), (0, 0), big.split()[3])
    halo = halo.filter(ImageFilter.GaussianBlur(30))
    halo.putalpha(halo.split()[3].point(lambda p: int(p * 0.4)))
    logo_top = 150
    img.alpha_composite(halo, ((W - lw) // 2, logo_top))
    img.alpha_composite(big, ((W - lw) // 2, logo_top))

    d = ImageDraw.Draw(img)
    def ctext(cy, text, f, fill, off=(2, 2)):
        tw = d.textlength(text, font=f)
        text_s(d, ((W - tw) // 2, cy), text, f, fill, off=off)

    ctext(logo_top + lh + 28, "WADHWA INSTITUTE", OSWALD(40), WHITE)
    ctext(logo_top + lh + 84, "PREMIUM IB COACHING  ·  GURUGRAM", OSWALD(24), GREEN)

    ctext(690, '"', ANTON(150), GREEN, off=(4, 4))
    qf = ANTON(78)
    lines = ["EXCELLENCE MUST", "BE CHASED,", "SCORES AND GOOD", "FORTUNE WILL FOLLOW."]
    qy = 838
    for i, ln in enumerate(lines):
        ctext(qy, ln, qf, GREEN if i >= 2 else WHITE, off=(4, 4))
        qy += 94

    qy += 26
    d.line([(W // 2 - 46, qy), (W // 2 + 46, qy)], fill=GREEN, width=6)
    ctext(qy + 26, "wadhwa-institue-ib.com", OSWALD(30), DIM)

    img.convert("RGB").save(f"{OUT}/quote.png")
    print("quote.png")


def main():
    logo = load_logo()
    quote_poster(logo)
    promo_poster(logo)
    teacher_poster(
        logo, f"{CUT}/teacher-maths-cutout.png",
        "Harshika Lakhina", "IB Mathematics  ·  AA SL & AI SL",
        ["Maths AA SL", "Maths AI SL"],
        "Builds real understanding that holds up under exam pressure, across both AA SL and AI SL.",
        "maths-mentor.png",
    )
    teacher_poster(
        logo, f"{CUT}/teacher-french-cutout.png",
        "Himani Anand", "IB French  ·  15+ Years",
        ["Ab Initio", "French B", "French A"],
        "Fifteen years of turning nervous beginners into confident French speakers.",
        "himani-anand.png",
    )


if __name__ == "__main__":
    main()
