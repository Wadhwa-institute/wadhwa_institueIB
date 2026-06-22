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
