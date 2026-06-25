import { ImageResponse } from "next/og";
import { logoDataUrl } from "@/lib/logo-data";

export const alt = "Wadhwa Institute — Premium IB Coaching in Gurugram";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded social share card (statically generated at build time).
export default function OpengraphImage() {
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
            "radial-gradient(900px 500px at 80% -10%, rgba(127,217,0,0.18), transparent 60%), #050505",
          color: "#f5f5f0",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          border: "2px solid rgba(127,217,0,0.35)",
        }}
      >
        {/* Top: brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {logo ? (
            <img src={logo} alt="Wadhwa Institute" width={120} height={88} style={{ objectFit: "contain" }} />
          ) : null}
          <div
            style={{
              display: "flex",
              fontSize: 30,
              letterSpacing: 8,
              textTransform: "uppercase",
              color: "#f5f5f0",
            }}
          >
            Wadhwa Institute
          </div>
        </div>

        {/* Middle: headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 800, lineHeight: 1.05 }}>
            Premium <span style={{ color: "#7FD900", marginLeft: 20 }}>IB Coaching</span>
          </div>
          <div style={{ fontSize: 40, color: "rgba(245,245,240,0.7)" }}>
            in Gurugram. Score your perfect 7.
          </div>
        </div>

        {/* Bottom: subjects */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 56, height: 4, background: "#7FD900" }} />
          <div style={{ fontSize: 28, color: "rgba(245,245,240,0.75)", letterSpacing: 1 }}>
            English · French · Business · Economics · Mathematics
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
