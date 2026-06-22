#!/usr/bin/env node
/**
 * Weekly SEO report from Google Search Console — written for a human to read.
 *
 * Zero npm dependencies. Signs the Google service-account JWT with node:crypto,
 * then queries the Search Analytics API for the last 28 days and writes a plain
 * markdown report to seo-report.md at the repo root.
 *
 * Credentials (either works):
 *   GOOGLE_APPLICATION_CREDENTIALS — path to the service-account JSON key (local)
 *   GSC_KEY_JSON                   — the raw JSON key as a string (CI secret)
 * Plus:
 *   GSC_SITE_URL — e.g. https://www.wadhwa-institue-ib.com
 *
 * Run locally:  npm run seo:report
 */

import { readFileSync, writeFileSync } from "node:fs";
import { createSign } from "node:crypto";

const SITE_URL = process.env.GSC_SITE_URL?.replace(/\/$/, "");

function fail(msg) {
  console.error(`\n❌ ${msg}\n`);
  process.exit(1);
}

if (!SITE_URL) fail("Set GSC_SITE_URL, e.g. https://www.wadhwa-institue-ib.com");

function loadKey() {
  if (process.env.GSC_KEY_JSON) {
    try {
      return JSON.parse(process.env.GSC_KEY_JSON);
    } catch (e) {
      fail(`GSC_KEY_JSON is not valid JSON: ${e.message}`);
    }
  }
  const path = process.env.GOOGLE_APPLICATION_CREDENTIALS;
  if (!path) fail("Set GSC_KEY_JSON (raw JSON) or GOOGLE_APPLICATION_CREDENTIALS (file path).");
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch (e) {
    fail(`Could not read/parse key at ${path}: ${e.message}`);
  }
}

const key = loadKey();
if (!key.client_email || !key.private_key) {
  fail("Key is missing client_email / private_key — is it a service-account JSON key?");
}

const base64url = (input) =>
  Buffer.from(input).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");

async function getAccessToken() {
  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claim = base64url(
    JSON.stringify({
      iss: key.client_email,
      scope: "https://www.googleapis.com/auth/webmasters.readonly",
      aud: "https://oauth2.googleapis.com/token",
      iat: now,
      exp: now + 3600,
    })
  );
  const signingInput = `${header}.${claim}`;
  const signature = createSign("RSA-SHA256")
    .update(signingInput)
    .sign(key.private_key, "base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: `${signingInput}.${signature}`,
    }),
  });
  const data = await res.json();
  if (!res.ok) fail(`Token request failed: ${JSON.stringify(data)}`);
  return data.access_token;
}

function ymd(d) {
  return d.toISOString().slice(0, 10);
}

async function query(token, body) {
  const endpoint = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(
    SITE_URL
  )}/searchAnalytics/query`;
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (res.status === 403) {
    fail(
      `403 Forbidden. Add the service account (${key.client_email}) as a user on the ` +
        `Search Console property "${SITE_URL}" → Settings → Users and permissions.`
    );
  }
  const data = await res.json();
  if (!res.ok) fail(`Query failed (${res.status}): ${JSON.stringify(data)}`);
  return data.rows ?? [];
}

const fmt = (n) => Math.round(n).toLocaleString("en-IN");
const pos = (n) => n.toFixed(1);

function table(rows, label) {
  if (rows.length === 0) return `_No ${label} data in this period yet._\n`;
  const head = `| ${label} | Clicks | Impressions | Avg. position |\n|---|---:|---:|---:|\n`;
  const body = rows
    .map((r) => `| ${r.keys[0]} | ${fmt(r.clicks)} | ${fmt(r.impressions)} | ${pos(r.position)} |`)
    .join("\n");
  return head + body + "\n";
}

const token = await getAccessToken();

const end = new Date();
end.setDate(end.getDate() - 2); // GSC data lags ~2 days
const start = new Date(end);
start.setDate(start.getDate() - 28);
const range = { startDate: ymd(start), endDate: ymd(end) };

const [queries, pages] = await Promise.all([
  query(token, { ...range, dimensions: ["query"], rowLimit: 25 }),
  query(token, { ...range, dimensions: ["page"], rowLimit: 15 }),
]);

const totalClicks = queries.reduce((s, r) => s + r.clicks, 0);
const totalImpr = queries.reduce((s, r) => s + r.impressions, 0);

const generated = new Date().toLocaleDateString("en-IN", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

let summary;
if (totalImpr === 0) {
  summary =
    "No search data yet for this period. This is normal for a new website — Google can take " +
    "a few weeks to start showing your pages. Keep the sitemap submitted and check back next week.";
} else {
  summary =
    `In the last 28 days, your site appeared in Google search **${fmt(totalImpr)} times** ` +
    `and got **${fmt(totalClicks)} clicks**. The keywords and pages below are where that came ` +
    `from — focus on the ones with high impressions but low clicks or weak position (closer to ` +
    `1 is better).`;
}

const report = `# 📈 Weekly SEO Report — Wadhwa Institute

_Generated ${generated} · data from ${range.startDate} to ${range.endDate} · source: Google Search Console_

${summary}

## 🔑 Top search terms people used to find you

${table(queries, "Search term")}
## 📄 Top pages in Google

${table(pages, "Page")}
---
**How to read this:** *Impressions* = how often you showed up in Google. *Clicks* = how often
people clicked through. *Avg. position* = your average ranking (1 = top of page 1). Terms with
lots of impressions but a position above ~10 are pages worth strengthening next.
`;

writeFileSync("seo-report.md", report, "utf8");
console.log(`\n✅ Wrote seo-report.md (${fmt(totalImpr)} impressions, ${fmt(totalClicks)} clicks over 28 days)\n`);
