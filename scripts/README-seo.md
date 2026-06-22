# SEO scripts

## `npm run seo:submit-sitemap`

Submits `sitemap.xml` to Google Search Console via the API. Zero npm dependencies.

> ⚠️ You normally only need to do this **once**. Google re-reads your sitemap on its
> own after that. This script exists for convenience, not because you must run it often.

### One-time setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/) → create/select a project.
2. **APIs & Services → Library** → enable **"Google Search Console API"**.
3. **APIs & Services → Credentials → Create credentials → Service account**.
4. Open the service account → **Keys → Add key → JSON** → download it.
5. Save the file in this project as `gsc-key.json` (it's git-ignored — never commit it).
6. Copy the service account email (looks like `name@project.iam.gserviceaccount.com`).
7. In [Search Console](https://search.google.com/search-console) → **Settings →
   Users and permissions → Add user** → paste that email → role **Owner** (or Full).

### Run

```bash
GOOGLE_APPLICATION_CREDENTIALS=./gsc-key.json \
GSC_SITE_URL=https://www.wadhwa-institue-ib.com \
npm run seo:submit-sitemap
```

If it prints `403 Forbidden`, you skipped step 7 — add the service-account email as a
user on the property.

### What you still do manually (no API for it)

- **Request Indexing** of individual pages (Search Console deliberately keeps this
  manual + rate-limited). Do it once per important page; Google recrawls after that.

---

## 📈 Weekly SEO report (automatic — your minimum-effort option)

A GitHub Action runs **every Monday by itself** and writes a plain-English report to
**`seo-report.md`** at the repo root. Your only ongoing job: **open that file and read it.**

### One-time setup (≈3 min) — uses the SAME key from above

1. Open `gsc-key.json` (the service-account key you downloaded) and copy its **entire
   contents** (the whole `{ ... }` block).
2. On GitHub → your repo → **Settings → Secrets and variables → Actions → New
   repository secret**.
3. Name it exactly **`GSC_KEY_JSON`**, paste the JSON as the value, save.

That's it. The report appears/updates weekly.

- **Run it right now** instead of waiting: GitHub → **Actions** tab → *Weekly SEO
  Report* → **Run workflow**.
- **Run it locally** (optional):
  ```bash
  GOOGLE_APPLICATION_CREDENTIALS=./gsc-key.json \
  GSC_SITE_URL=https://www.wadhwa-institue-ib.com \
  npm run seo:report
  ```

> New site = the report may say "no data yet" for the first few weeks. That's normal —
> Google needs time. Once data appears, focus on terms with **high impressions but a
> weak position** (number above ~10): those are pages worth improving next.
