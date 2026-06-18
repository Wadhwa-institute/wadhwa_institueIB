import { existsSync } from "node:fs";
import { join } from "node:path";

/**
 * Server-only helper. Returns `preferred` if that file exists in /public,
 * otherwise `fallback`. Runs at build time for statically prerendered pages,
 * so dropping the real asset into public/ and rebuilding swaps it in with no
 * code change — and avoids the client-side onError race for SSR'd <img>s.
 *
 * Do NOT import this from a Client Component (it uses node:fs).
 */
export function resolveAsset(preferred: string, fallback: string): string {
  try {
    const filePath = join(process.cwd(), "public", preferred.replace(/^\//, ""));
    return existsSync(filePath) ? preferred : fallback;
  } catch {
    return fallback;
  }
}
