import { ImageResponse } from "next/og";

// App-router favicon. Replaces the default Next/Vercel icon shown in browser tabs
// and Google search results with the Wadhwa Institute "WI" brand mark.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#050505",
          borderRadius: 14,
        }}
      >
        <div
          style={{
            fontSize: 34,
            fontWeight: 800,
            letterSpacing: -2,
            color: "#7FD900",
            fontFamily: "sans-serif",
            display: "flex",
          }}
        >
          WI
        </div>
      </div>
    ),
    { ...size }
  );
}
