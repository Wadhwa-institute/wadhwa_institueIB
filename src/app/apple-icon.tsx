import { ImageResponse } from "next/og";

// Apple touch icon (home-screen bookmark on iOS) — same WI brand mark, larger.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#050505",
        }}
      >
        <div
          style={{
            fontSize: 104,
            fontWeight: 800,
            letterSpacing: -6,
            color: "#7FD900",
            fontFamily: "sans-serif",
            display: "flex",
            lineHeight: 1,
          }}
        >
          WI
        </div>
        <div
          style={{
            marginTop: 8,
            fontSize: 15,
            letterSpacing: 4,
            color: "#9aa0a6",
            fontFamily: "sans-serif",
            display: "flex",
          }}
        >
          INSTITUTE
        </div>
      </div>
    ),
    { ...size }
  );
}
