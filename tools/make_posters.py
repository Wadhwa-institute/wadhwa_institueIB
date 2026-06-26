#!/usr/bin/env python3
"""
Premium, elegant dark-theme posters for Wadhwa Institute (v3).

Faces are never altered. The only operations on a teacher photo are background
removal (rembg, done earlier) and cropping/scaling for framing. No generative
model touches the person.

Design goals: elegant + aspirational (warm dark theme, refined serif accents,
prominent WI logo), bold-but-legible text, and consistent PORTRAIT framing so
both teachers appear equally large regardless of their original selfie pose.

Run:  . .venv-posters/bin/activate && python tools/make_posters.py
Output: 1080x1350 PNGs in public/assets/posters/.
"""

from PIL import Image, ImageDraw, ImageFont, ImageFilter
import numpy as np
import os

W, H = 1080, 1350
GREEN = (150, 240, 30)
GREEN_DEEP = (95, 155, 10)
BASE = (9, 10, 9)
OFFWHITE = (244, 244, 239)
DIM = (200, 205, 196)

FONTS = "/tmp/fonts"
CUT = "/tmp/cutouts"
OUT = "public/assets/posters"
os.makedirs(OUT, exist_ok=True)

ANTON = lambda s: ImageFont.truetype(f"{FONTS}/Anton.ttf", s)
OSWALD = lambda s: ImageFont.truetype(f"{FONTS}/Oswald.ttf", s)
MONT = lambda s: ImageFont.truetype(f"{FONTS}/Montserrat.ttf", s)
SERIF = lambda s: ImageFont.truetype(f"{FONTS}/Cormorant.ttf", s)


def text_s(d, xy, text, f, fill, shadow=(0, 0, 0), off=(2, 2)):
    x, y = xy
    d.text((x + off[0], y + off[1]), text, font=f, fill=shadow)
    d.text((x, y), text, font=f, fill=fill)


def ctext(d, cy, text, f, fill, off=(2, 2)):
    tw = d.textlength(text, font=f)
    text_s(d, ((W - tw) // 2, cy), text, f, fill, off=off)


def radial(size, center, max_r, color, max_alpha, blur=60, steps=30):
    layer = Image.new("RGBA", size, (0, 0, 0, 0))
    dr = ImageDraw.Draw(layer)
    cx, cy = center
    for i in range(steps, 0, -1):
        rad = int(max_r * i / steps)
        a = int(max_alpha * (1 - i / steps) ** 1.4)
        dr.ellipse([cx - rad, cy - rad, cx + rad, cy + rad], fill=color + (a,))
    return layer.filter(ImageFilter.GaussianBlur(blur))


def vignette(strength=150):
    layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    dr = ImageDraw.Draw(layer)
    for i in range(40):
        a = int(strength * (i / 40))
        ins = int(i * 9)
        dr.rectangle([ins, ins, W - ins, H - ins], outline=(0, 0, 0, a), width=10)
    return layer.filter(ImageFilter.GaussianBlur(28))


def base_canvas(warm_spot=None):
    img = Image.new("RGBA", (W, H), BASE + (255,))
    # gentle vertical tone
    grad = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    gd = ImageDraw.Draw(grad)
    for y in range(H):
        g = int(10 * (1 - y / H))
        gd.line([(0, y), (W, y)], fill=(8, 12 + g, 8, 255))
    img.alpha_composite(grad)
    img.alpha_composite(radial((W, H), (int(W * 0.9), int(H * -0.02)), 820, GREEN, 40))
    if warm_spot:
        img.alpha_composite(radial((W, H), warm_spot, 520, (255, 226, 170), 26, blur=80))
    img.alpha_composite(vignette(165))
    ImageDraw.Draw(img).rounded_rectangle([16, 16, W - 16, H - 16], radius=28, outline=GREEN + (140,), width=3)
    return img


def load_logo():
    return Image.open(f"{CUT}/logo-mark.png").convert("RGBA")


def top_brand_bar(img, logo):
    bar_h = 196
    strip = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    sd = ImageDraw.Draw(strip)
    for y in range(bar_h):
        a = int(238 * (1 - y / bar_h) ** 1.3)
        sd.line([(0, y), (W, y)], fill=(5, 5, 5, a))
    img.alpha_composite(strip)
    lh = 100
    lw = int(logo.width * (lh / logo.height))
    img.alpha_composite(logo.resize((lw, lh), Image.LANCZOS), (54, 44))
    d = ImageDraw.Draw(img)
    tx = 54 + lw + 22
    text_s(d, (tx, 52), "WADHWA INSTITUTE", OSWALD(40), OFFWHITE)
    d.text((tx, 104), "PREMIUM IB COACHING  ·  GURUGRAM", font=OSWALD(24), fill=GREEN)


def soft_arc(img, cx, cy, rw, rh, color, width=6, alpha=120):
    """A graceful thin arc echoing the logo swoosh, as a subtle accent."""
    layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ld = ImageDraw.Draw(layer)
    ld.arc([cx - rw, cy - rh, cx + rw, cy + rh], start=200, end=340, fill=color + (alpha,), width=width)
    img.alpha_composite(layer.filter(ImageFilter.GaussianBlur(1)))


# ---- portrait framing: crop to head+shoulders so everyone looks equally large
def portrait_crop(cutout):
    a = np.array(cutout)[..., 3]
    ys, xs = np.where(a > 30)
    top, bot = ys.min(), ys.max()
    left, right = xs.min(), xs.max()
    h = bot - top
    band = top + int(h * 0.10)
    row = np.where(a[band] > 30)[0]
    if len(row):
        head_cx = (row.max() + row.min()) // 2
        head_w = row.max() - row.min()
    else:
        head_cx = (left + right) // 2
        head_w = right - left
    # window: ~2.4x head width, 4:5 portrait, starting slightly above hair
    win_w = int(head_w * 2.4)
    win_h = int(win_w * 1.25)
    cx = head_cx
    y0 = max(0, top - int(head_w * 0.30))
    x0 = max(0, cx - win_w // 2)
    x1 = min(cutout.width, x0 + win_w)
    y1 = min(cutout.height, y0 + win_h)
    crop = cutout.crop((x0, y0, x1, y1))
    return crop


def green_rim(person):
    alpha = person.split()[3]
    halo = Image.new("RGBA", person.size, (0, 0, 0, 0))
    halo.paste(Image.new("RGBA", person.size, GREEN + (255,)), (0, 0), alpha)
    halo = halo.filter(ImageFilter.GaussianBlur(26))
    halo.putalpha(halo.split()[3].point(lambda p: int(p * 0.5)))
    return halo


def chip(d, x, y, text, f, padx=24, pady=13):
    tw = d.textlength(text, font=f)
    h = f.size + pady * 2
    d.rounded_rectangle([x, y, x + tw + padx * 2, y + h], radius=999,
                        fill=(6, 6, 6, 235), outline=GREEN, width=3)
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
def teacher_poster(logo, cut_file, name, role, subjects, line, tagline, out_name,
                   warm_spot=(int(W * 0.72), int(H * 0.32))):
    img = base_canvas(warm_spot=warm_spot)

    # PORTRAIT framing: crop to head+shoulders, scale to a generous size.
    crop = portrait_crop(Image.open(cut_file).convert("RGBA"))
    target_h = 880                     # big, close portrait
    scale = target_h / crop.height
    person = crop.resize((int(crop.width * scale), int(crop.height * scale)), Image.LANCZOS)
    # place: head toward upper-right, bleeding off the right edge, eyes ~34% down
    px = int(W * 0.97) - person.width + int(person.width * 0.10)
    py = int(H * 0.05)
    img.alpha_composite(green_rim(person), (px, py))
    img.alpha_composite(person, (px, py))

    # solid lower panel for total legibility
    panel_top = 748
    panel = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    pd = ImageDraw.Draw(panel)
    feather = 130
    for y in range(panel_top, H):
        a = int(252 * min(1.0, (y - panel_top) / feather))
        pd.line([(0, y), (W, y)], fill=(7, 7, 7, a))
    img.alpha_composite(panel)

    top_brand_bar(img, logo)

    # subtle swoosh accent behind the name area
    soft_arc(img, int(W * 0.30), 1000, 360, 150, GREEN, width=5, alpha=70)

    d = ImageDraw.Draw(img)
    x = 60
    name_f, role_f, line_f, tag_f = ANTON(92), OSWALD(32), MONT(29), SERIF(46)

    # bottom-up layout with generous, non-overlapping gaps
    footer_y = H - 118
    line_wrapped = wrap(d, line, line_f, 640)
    line_block_h = len(line_wrapped) * 46
    line_y = footer_y - 40 - line_block_h
    role_y = line_y - 54
    rule_y = role_y - 16
    name_y = rule_y - name_f.size - 18
    tag_y = name_y - 60
    chips_y = tag_y - 64

    chips(d, x, chips_y, subjects, OSWALD(25))
    # elegant italic tagline (serif) for warmth/aspiration
    d.text((x + 2, tag_y), tagline, font=tag_f, fill=GREEN)
    text_s(d, (x, name_y), name.upper(), name_f, OFFWHITE, off=(3, 3))
    # gold-green hairline under the name
    d.line([x + 4, rule_y + 6, x + 360, rule_y + 6], fill=GREEN, width=4)
    text_s(d, (x + 2, role_y), role, role_f, GREEN)
    ly = line_y
    for ln in line_wrapped:
        text_s(d, (x + 2, ly), ln, line_f, (255, 255, 255), off=(2, 2))
        ly += 46

    d.line([x + 2, footer_y + 20, x + 68, footer_y + 20], fill=GREEN, width=7)
    text_s(d, (x + 90, footer_y - 6), "+91 8010436968", ANTON(40), OFFWHITE)
    d.text((x + 90, footer_y + 48), "wadhwa-institue-ib.com", font=OSWALD(25), fill=GREEN)

    img.convert("RGB").save(f"{OUT}/{out_name}")
    print(out_name)


def promo_poster(logo):
    img = base_canvas()
    img.alpha_composite(radial((W, H), (int(W * 0.1), int(H * 1.02)), 700, GREEN, 26))
    top_brand_bar(img, logo)
    d = ImageDraw.Draw(img)

    d.text((60, 352), "BOOK A FREE CONSULTATION", font=OSWALD(30), fill=GREEN)
    text_s(d, (56, 404), "SCORE YOUR", ANTON(148), OFFWHITE, off=(4, 4))
    text_s(d, (56, 562), "PERFECT 7", ANTON(188), GREEN, off=(4, 4))
    d.text((62, 792), "Where ambition meets a mentor who believes in you.",
           font=SERIF(46), fill=GREEN)
    text_s(d, (62, 858), "Mentor led IB tuition, online and in person.", OSWALD(36), OFFWHITE)

    chips(d, 62, 1036, ["English", "French", "Business", "Economics", "Maths AA / AI"], OSWALD(25))
    fy = 1190
    d.line([62, fy + 20, 128, fy + 20], fill=GREEN, width=7)
    text_s(d, (148, fy - 6), "+91 8010436968", ANTON(48), OFFWHITE)
    d.text((148, fy + 52), "wadhwa-institue-ib.com", font=OSWALD(28), fill=GREEN)

    img.convert("RGB").save(f"{OUT}/promo.png")
    print("promo.png")


def quote_poster(logo):
    img = base_canvas()
    img.alpha_composite(radial((W, H), (W // 2, int(H * 0.42)), 760, GREEN, 26))

    lw = 340
    lh = int(logo.height * (lw / logo.width))
    big = logo.resize((lw, lh), Image.LANCZOS)
    halo = Image.new("RGBA", big.size, (0, 0, 0, 0))
    halo.paste(Image.new("RGBA", big.size, GREEN + (255,)), (0, 0), big.split()[3])
    halo = halo.filter(ImageFilter.GaussianBlur(30))
    halo.putalpha(halo.split()[3].point(lambda p: int(p * 0.38)))
    lt = 150
    img.alpha_composite(halo, ((W - lw) // 2, lt))
    img.alpha_composite(big, ((W - lw) // 2, lt))

    d = ImageDraw.Draw(img)
    ctext(d, lt + lh + 26, "WADHWA INSTITUTE", OSWALD(40), OFFWHITE)
    ctext(d, lt + lh + 82, "PREMIUM IB COACHING  ·  GURUGRAM", OSWALD(24), GREEN)

    ctext(d, 700, '"', ANTON(140), GREEN, off=(3, 3))
    qf = ANTON(76)
    for i, ln in enumerate(["EXCELLENCE MUST", "BE CHASED,", "SCORES AND GOOD", "FORTUNE WILL FOLLOW."]):
        ctext(d, 838 + i * 92, ln, qf, GREEN if i >= 2 else OFFWHITE, off=(3, 3))
    qy = 838 + 4 * 92 + 24
    d.line([(W // 2 - 46, qy), (W // 2 + 46, qy)], fill=GREEN, width=6)
    ctext(d, qy + 24, "wadhwa-institue-ib.com", OSWALD(28), DIM)

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
        "Patient. Precise. On your side.",
        "maths-mentor.png",
    )
    teacher_poster(
        logo, f"{CUT}/teacher-french-cutout.png",
        "Himani Anand", "IB French  ·  15+ Years",
        ["Ab Initio", "French B", "French A"],
        "Fifteen years of turning nervous beginners into confident French speakers.",
        "Warm. Fluent. Endlessly encouraging.",
        "himani-anand.png",
    )


if __name__ == "__main__":
    main()
