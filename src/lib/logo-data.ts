import { readFileSync } from "node:fs";
import { join } from "node:path";

// Reads the real WI logo (public/assets/logo.jpg) as a base64 data URL so it can
// be embedded directly inside next/og ImageResponse cards (favicon, OG share
// images, etc). Runs server-side at build time only.
//
// This guarantees the *actual* brand logo (the green WI emblem) appears in
// browser tabs, Google results, and WhatsApp/Instagram link previews, instead
// of a generated "WI" text mark.
let cached: string | null = null;
let cachedMark: string | null = null;

export function logoDataUrl(): string {
  if (cached) return cached;
  try {
    const file = join(process.cwd(), "public", "assets", "logo.jpg");
    cached = `data:image/jpeg;base64,${readFileSync(file).toString("base64")}`;
    return cached;
  } catch {
    return "";
  }
}

// Transparent-background WI emblem (green swoosh mark), ideal for favicons and
// app icons where the dark square of logo.jpg would blend into dark UI.
export function logoMarkDataUrl(): string {
  if (cachedMark) return cachedMark;
  try {
    const file = join(process.cwd(), "public", "assets", "logo-mark.png");
    cachedMark = `data:image/png;base64,${readFileSync(file).toString("base64")}`;
    return cachedMark;
  } catch {
    return "";
  }
}
