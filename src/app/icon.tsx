import { ImageResponse } from "next/og";
import { logoMarkDataUrl } from "@/lib/logo-data";

// App-router favicon. Uses the real WI emblem (green swoosh mark) so the actual
// brand logo shows in browser tabs and Google search results.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  const mark = logoMarkDataUrl();
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
          borderRadius: 12,
        }}
      >
        {mark ? (
          <img src={mark} alt="WI" width={56} height={42} style={{ objectFit: "contain" }} />
        ) : null}
      </div>
    ),
    { ...size }
  );
}
