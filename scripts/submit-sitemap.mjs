#!/usr/bin/env node
/**
 * Submit the sitemap to Google Search Console — manual, on-demand.
 *
 * Zero npm dependencies: signs the Google OAuth2 service-account JWT with Node's
 * built-in `crypto`, then calls the Search Console API.
 *
 * SETUP (one-time):
 *   1. In Google Cloud Console, create a project (or use an existing one).
 *   2. Enable the "Google Search Console API".
 *   3. Create a Service Account → add a JSON key → download it.
 *   4. In Search Console (search.google.com/search-console) → Settings → Users
 *      and permissions → add the service account's email (xxx@xxx.iam.gserviceaccount.com)
 *      as an Owner or Full user.
 *   5. Save the downloaded JSON somewhere safe and point GOOGLE_APPLICATION_CREDENTIALS at it.
 *
 * RUN:
 *   GOOGLE_APPLICATION_CREDENTIALS=./gsc-key.json \
 *   GSC_SITE_URL=https://www.wadhwa-institue-ib.com \
 *   npm run seo:submit-sitemap
 *
 * Optional env:
 *   SITEMAP_URL  — full sitemap URL (default: <GSC_SITE_URL>/sitemap.xml)
 */

import { readFileSync } from "node:fs";
import { createSign } from "node:crypto";

const KEY_PATH = process.env.GOOGLE_APPLICATION_CREDENTIALS;
const SITE_URL = process.env.GSC_SITE_URL?.replace(/\/$/, "");
const SITEMAP_URL = process.env.SITEMAP_URL || (SITE_URL ? `${SITE_URL}/sitemap.xml` : undefined);

function fail(msg) {
  console.error(`\n❌ ${msg}\n`);
  process.exit(1);
}

if (!KEY_PATH) fail("Set GOOGLE_APPLICATION_CREDENTIALS to your service-account JSON key path.");
if (!SITE_URL) fail("Set GSC_SITE_URL, e.g. https://www.wadhwa-institue-ib.com");

let key;
try {
  key = JSON.parse(readFileSync(KEY_PATH, "utf8"));
} catch (e) {
  fail(`Could not read/parse key file at ${KEY_PATH}: ${e.message}`);
}
if (!key.client_email || !key.private_key) {
  fail("Key file is missing client_email / private_key — is it a service-account JSON key?");
}

const base64url = (input) =>
  Buffer.from(input).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");

async function getAccessToken() {
  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claim = base64url(
    JSON.stringify({
      iss: key.client_email,
      scope: "https://www.googleapis.com/auth/webmasters",
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
  const assertion = `${signingInput}.${signature}`;

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
  });
  const data = await res.json();
  if (!res.ok) fail(`Token request failed: ${JSON.stringify(data)}`);
  return data.access_token;
}

async function submitSitemap(token) {
  const endpoint = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(
    SITE_URL
  )}/sitemaps/${encodeURIComponent(SITEMAP_URL)}`;
  const res = await fetch(endpoint, {
    method: "PUT",
    headers: { Authorization: `Bearer ${token}` },
  });
  if (res.status === 204 || res.ok) {
    console.log(`\n✅ Submitted sitemap: ${SITEMAP_URL}\n   for property:    ${SITE_URL}\n`);
    return;
  }
  const body = await res.text();
  if (res.status === 403) {
    fail(
      `403 Forbidden. The service account (${key.client_email}) is not added as a user on the ` +
        `Search Console property "${SITE_URL}". Add it under Settings → Users and permissions.`
    );
  }
  fail(`Submit failed (${res.status}): ${body}`);
}

const token = await getAccessToken();
await submitSitemap(token);
