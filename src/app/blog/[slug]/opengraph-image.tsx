import { ImageResponse } from "next/og";
import { blogPosts } from "@/lib/blog";
import { logoDataUrl } from "@/lib/logo-data";

export const alt = "Wadhwa Institute — IB guide";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

// Per-article branded share card. Makes every blog link preview show the
// article's own title (big CTR win when shared on WhatsApp / Instagram / X).
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  const title = post?.title ?? "IB Guides";
  const logo = logoDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(900px 500px at 85% -10%, rgba(127,217,0,0.20), transparent 60%), #050505",
          color: "#f5f5f0",
          padding: "64px 72px",
          fontFamily: "sans-serif",
          border: "2px solid rgba(127,217,0,0.35)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {logo ? (
            <img src={logo} alt="Wadhwa Institute" width={108} height={80} style={{ objectFit: "contain" }} />
          ) : null}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 26, letterSpacing: 6, textTransform: "uppercase" }}>
              Wadhwa Institute
            </div>
            <div style={{ display: "flex", fontSize: 18, color: "rgba(245,245,240,0.6)", letterSpacing: 2 }}>
              IB Guides · Gurugram
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", fontSize: 22, letterSpacing: 4, color: "#7FD900", textTransform: "uppercase" }}>
            Free IB Guide
          </div>
          <div style={{ display: "flex", fontSize: 64, fontWeight: 800, lineHeight: 1.08, maxWidth: 1040 }}>
            {title}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 56, height: 4, background: "#7FD900" }} />
          <div style={{ display: "flex", fontSize: 26, color: "rgba(245,245,240,0.75)" }}>
            wadhwa-institue-ib.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
