import { ImageResponse } from "next/og";
import { logoMarkDataUrl } from "@/lib/logo-data";

// Apple touch icon (iOS home-screen bookmark) using the real WI emblem.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
        }}
      >
        {mark ? (
          <img src={mark} alt="Wadhwa Institute" width={150} height={112} style={{ objectFit: "contain" }} />
        ) : null}
      </div>
    ),
    { ...size }
  );
}
