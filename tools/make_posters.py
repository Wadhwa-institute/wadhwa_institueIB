#!/usr/bin/env python3
"""
Generate premium, 3D-style, share-ready posters for Wadhwa Institute.

IMPORTANT — faces are never altered. The only operation on a teacher photo is
background removal (rembg alpha matting, done earlier). This script only
*composites* the existing cutout pixels onto a designed background and scales /
crops them. No generative model touches the person.

Run inside the venv:
    . .venv-posters/bin/activate
    python tools/make_posters.py
Outputs 1080x1350 PNGs into public/assets/posters/.
"""

from PIL import Image, ImageDraw, ImageFont, ImageFilter
import numpy as np
import os

W, H = 1080, 1350
GREEN = (143, 240, 0)          # brighter, glossier green
GREEN_DEEP = (70, 120, 0)
GREEN_DARK = (28, 50, 0)
BLACK = (4, 4, 4)
WHITE = (255, 255, 255)
DIM = (200, 205, 198)

FONTS = "/tmp/fonts"
CUT = "/tmp/cutouts"
OUT = "public/assets/posters"
os.makedirs(OUT, exist_ok=True)


def font(path, size):
    return ImageFont.truetype(path, size)


ANTON = lambda s: font(f"{FONTS}/Anton.ttf", s)
MONT = lambda s: font(f"{FONTS}/Montserrat.ttf", s)
MONT_SB = lambda s: font(f"{FONTS}/Montserrat.ttf", s)


# ---------------------------------------------------------------------------
# TEXT with 3D extrusion + shadow for legibility and depth
# ---------------------------------------------------------------------------
def text_3d(d, xy, text, f, fill, depth=0, depth_color=(0, 0, 0),
            shadow=True, stroke=0, stroke_fill=(0, 0, 0)):
    x, y = xy
    if shadow:
        d.text((x + 4, y + 5), text, font=f, fill=(0, 0, 0))
    # extrusion layers (down-right), darkening toward the back
    for i in range(depth, 0, -1):
        t = i / max(depth, 1)
        c = tuple(int(depth_color[k] * (0.4 + 0.6 * t)) for k in range(3))
        d.text((x + i, y + i), text, font=f, fill=c)
    if stroke:
        d.text((x, y), text, font=f, fill=fill, stroke_width=stroke, stroke_fill=stroke_fill)
    else:
        d.text((x, y), text, font=f, fill=fill)


# ---------------------------------------------------------------------------
# BACKGROUND
# ---------------------------------------------------------------------------
def radial(size, center, max_r, color, max_alpha, steps=30):
    layer = Image.new("RGBA", size, (0, 0, 0, 0))
    dr = ImageDraw.Draw(layer)
    cx, cy = center
    for i in range(steps, 0, -1):
        rad = int(max_r * i / steps)
        a = int(max_alpha * (1 - i / steps) ** 1.4)
        dr.ellipse([cx - rad, cy - rad, cx + rad, cy + rad], fill=color + (a,))
    return layer.filter(ImageFilter.GaussianBlur(60))


def vignette(size, strength=150):
    layer = Image.new("RGBA", size, (0, 0, 0, 0))
    dr = ImageDraw.Draw(layer)
    w, h = size
    for i in range(40):
        a = int(strength * (i / 40))
        inset = int(i * 9)
        dr.rectangle([inset, inset, w - inset, h - inset], outline=(0, 0, 0, a), width=10)
    return layer.filter(ImageFilter.GaussianBlur(30))


def base_canvas():
    img = Image.new("RGBA", (W, H), BLACK + (255,))
    # vertical tone: slightly green-tinted black top, deep black bottom
    grad = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    gd = ImageDraw.Draw(grad)
    for y in range(H):
        t = y / H
        g = int(14 * (1 - t))
        gd.line([(0, y), (W, y)], fill=(6, 10 + g, 6, 255))
    img.alpha_composite(grad)
    img.alpha_composite(radial((W, H), (int(W * 0.9), int(H * -0.04)), 900, GREEN, 70))
    img.alpha_composite(radial((W, H), (int(W * 0.08), int(H * 1.02)), 760, GREEN, 42))
    img.alpha_composite(vignette((W, H), 170))
    d = ImageDraw.Draw(img)
    d.rounded_rectangle([16, 16, W - 16, H - 16], radius=30, outline=GREEN + (120,), width=3)
    return img


def watermark_logo(img, logo, size, opacity, center_y):
    lw = size
    lh = int(logo.height * (lw / logo.width))
    wm = logo.resize((lw, lh), Image.LANCZOS)
    a = wm.split()[3].point(lambda p: int(p * opacity / 100))
    wm.putalpha(a)
    img.alpha_composite(wm, ((W - lw) // 2, center_y - lh // 2))


def header_scrim(img, h=210):
    """Dark band behind the top header so logo + wordmark stay crisp over glow."""
    band = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    bd = ImageDraw.Draw(band)
    for y in range(h):
        a = int(190 * (1 - y / h))
        bd.line([(0, y), (W, y)], fill=(3, 3, 3, a))
    img.alpha_composite(band)


def place_logo(img, logo, height=88, xy=(56, 52)):
    lh = height
    lw = int(logo.width * (lh / logo.height))
    img.alpha_composite(logo.resize((lw, lh), Image.LANCZOS), xy)
    d = ImageDraw.Draw(img)
    tx = xy[0] + lw + 22
    text_3d(d, (tx, xy[1] + 6), "WADHWA INSTITUTE", MONT_SB(30), WHITE, shadow=True, stroke=1, stroke_fill=(0, 0, 0))
    text_3d(d, (tx, xy[1] + 48), "PREMIUM IB COACHING   ·   GURUGRAM", MONT(18), GREEN, shadow=True)


# ---------------------------------------------------------------------------
# PERSON: normalize by HEAD WIDTH so both teachers look equally sized
# ---------------------------------------------------------------------------
def head_metrics(cutout):
    a = np.array(cutout)[..., 3]
    ys, xs = np.where(a > 30)
    top = ys.min()
    h = ys.max() - top
    band = top + int(h * 0.10)
    row = np.where(a[band] > 30)[0]
    head_w = (row.max() - row.min()) if len(row) else cutout.width
    head_cx = (row.max() + row.min()) // 2 if len(row) else cutout.width // 2
    return top, head_w, head_cx


def framed_person(cutout, target_head_w, target_head_top):
    """Scale by head width, return (image, paste_x_anchor_for_headcx, paste_y)."""
    top, head_w, head_cx = head_metrics(cutout)
    scale = target_head_w / head_w
    nw, nh = int(cutout.width * scale), int(cutout.height * scale)
    person = cutout.resize((nw, nh), Image.LANCZOS)
    new_top = int(top * scale)
    new_cx = int(head_cx * scale)
    return person, new_cx, new_top


def green_rim(person):
    alpha = person.split()[3]
    halo = Image.new("RGBA", person.size, (0, 0, 0, 0))
    solid = Image.new("RGBA", person.size, GREEN + (255,))
    halo.paste(solid, (0, 0), alpha)
    halo = halo.filter(ImageFilter.GaussianBlur(26))
    halo.putalpha(halo.split()[3].point(lambda p: int(p * 0.6)))
    return halo


def left_panel(img, width_frac=0.60):
    panel = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    pd = ImageDraw.Draw(panel)
    edge = int(W * width_frac)
    for x in range(W):
        if x < edge - 120:
            a = 225
        elif x < edge + 120:
            a = int(225 * (1 - (x - (edge - 120)) / 240))
        else:
            a = 0
        pd.line([(x, 0), (x, H)], fill=(3, 3, 3, max(a, 0)))
    img.alpha_composite(panel)


def bottom_grad(img, h=420):
    grad = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    gd = ImageDraw.Draw(grad)
    for i in range(h):
        a = int(235 * (i / h) ** 1.2)
        gd.line([(0, H - h + i), (W, H - h + i)], fill=(3, 3, 3, a))
    img.alpha_composite(grad)


def pill(d, x, y, text, f, pad=(26, 14)):
    tw = d.textlength(text, font=f)
    h = f.size + pad[1] * 2
    bbox = [x, y, x + tw + pad[0] * 2, y + h]
    # near-solid dark fill so the green label stays high contrast over any photo
    d.rounded_rectangle(bbox, radius=999, fill=(6, 6, 6, 235), outline=GREEN, width=3)
    d.text((x + pad[0], y + (h - f.size) / 2 - 4), text, font=f, fill=GREEN)
    return bbox[2] - x


def chips(d, x, y, items, f, gap=14):
    cx = x
    for it in items:
        cx += pill(d, cx, y, it, f) + gap


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
def promo_poster(logo):
    img = base_canvas()
    watermark_logo(img, logo, 1000, 9, int(H * 0.52))
    header_scrim(img, 230)
    place_logo(img, logo)
    d = ImageDraw.Draw(img)

    text_3d(d, (60, 372), "BOOK A FREE CONSULTATION", MONT_SB(26), GREEN, shadow=True)
    text_3d(d, (56, 416), "SCORE YOUR", ANTON(150), WHITE, depth=6, depth_color=(40, 40, 40))
    text_3d(d, (56, 576), "PERFECT 7", ANTON(186), GREEN, depth=10, depth_color=GREEN_DARK)

    text_3d(d, (62, 812), "Mentor led IB tuition.", MONT(42), WHITE, depth=0)
    d.text((62, 868), "Online and in person, across Gurugram.", font=MONT(34), fill=DIM)

    chips(d, 62, 1052, ["English", "French", "Business", "Economics", "Maths AA / AI"], MONT_SB(24))

    d.line([62, 1196, 124, 1196], fill=GREEN, width=7)
    text_3d(d, (144, 1170), "+91 8010436968", ANTON(48), WHITE, depth=4, depth_color=(30, 30, 30))
    d.text((144, 1230), "wadhwa-institue-ib.com", font=MONT(28), fill=GREEN)

    img.convert("RGB").save(f"{OUT}/promo.png")
    print("promo.png")


def teacher_poster(logo, cut_file, name, role, subjects, line, out_name):
    img = base_canvas()
    watermark_logo(img, logo, 720, 8, int(H * 0.30))

    cutout = Image.open(cut_file).convert("RGBA")
    # Normalize both teachers to the same head width -> equal visual size.
    TARGET_HEAD_W = 280
    person, head_cx, head_top = framed_person(cutout, TARGET_HEAD_W, 0)

    # Anchor: head horizontal center sits at ~75% of width; eyes at ~40% of height
    # (gives headroom below the chips so the hair never touches them).
    anchor_x = int(W * 0.75)
    eyes_from_top = int(H * 0.40)
    eyes_in_person = head_top + int(TARGET_HEAD_W * 0.62)  # eyes ~0.62*headwidth below hairline
    px = anchor_x - head_cx
    py = eyes_from_top - eyes_in_person
    # keep person bleeding off bottom
    py = min(py, H - person.height + 40) if person.height + py < H else py

    img.alpha_composite(green_rim(person), (px, py))
    img.alpha_composite(person, (px, py))

    left_panel(img, 0.60)
    bottom_grad(img, 440)
    header_scrim(img, 230)

    place_logo(img, logo)
    d = ImageDraw.Draw(img)

    # subject chips under the logo
    chips(d, 58, 196, subjects, MONT_SB(24))

    # ---- lower-left text block with proper vertical rhythm ----
    x = 56
    name_f = ANTON(108)
    role_f = MONT_SB(34)
    line_f = MONT(31)

    line_wrapped = wrap(d, line, line_f, 600)
    # compute block height from the bottom up
    contact_h = 110
    block_bottom = H - 70
    line_block_h = len(line_wrapped) * 44
    name_y = block_bottom - contact_h - 24 - line_block_h - 24 - 44 - 24 - name_f.size

    text_3d(d, (x, name_y), name.upper(), name_f, WHITE, depth=7, depth_color=(35, 35, 35))
    role_y = name_y + name_f.size + 28
    text_3d(d, (x + 4, role_y), role, role_f, GREEN, shadow=True, stroke=1, stroke_fill=(0, 0, 0))
    ly = role_y + 44 + 18
    for ln in line_wrapped:
        text_3d(d, (x + 4, ly), ln, line_f, WHITE, shadow=True)
        ly += 46

    # contact footer
    fy = block_bottom - 40
    d.line([x + 4, fy + 18, x + 64, fy + 18], fill=GREEN, width=7)
    text_3d(d, (x + 84, fy - 8), "+91 8010436968", ANTON(40), WHITE, depth=3, depth_color=(30, 30, 30))
    d.text((x + 84, fy + 40), "wadhwa-institue-ib.com", font=MONT(24), fill=GREEN)

    img.convert("RGB").save(f"{OUT}/{out_name}")
    print(out_name)


def main():
    logo = Image.open(f"{CUT}/logo-mark.png").convert("RGBA")
    promo_poster(logo)
    teacher_poster(
        logo, f"{CUT}/teacher-maths-cutout.png",
        "Maths Mentor", "IB Mathematics  ·  AA SL & AI SL",
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
