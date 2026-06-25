import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { siteContact, teachers } from "@/lib/site-data";

// Shared poster renderers for the static /posters/* image routes.
// Sized 1080x1350 (4:5) — ideal for WhatsApp, Instagram, and group shares.
export const posterSize = { width: 1080, height: 1350 };
export const posterContentType = "image/png";

const GREEN = "#7FD900";
const BG = "#050505";
const FONT = "sans-serif";

function dataUrl(publicPath: string): string | null {
  try {
    const file = join(process.cwd(), "public", publicPath.replace(/^\//, ""));
    return `data:image/jpeg;base64,${readFileSync(file).toString("base64")}`;
  } catch {
    return null;
  }
}

export function promoPoster() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 72px",
          background: `radial-gradient(900px 600px at 85% -5%, rgba(127,217,0,0.20), transparent 60%), ${BG}`,
          color: "#f5f5f0",
          fontFamily: FONT,
          border: "2px solid rgba(127,217,0,0.30)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 72,
              height: 72,
              borderRadius: 16,
              border: `3px solid ${GREEN}`,
              color: GREEN,
              fontSize: 38,
              fontWeight: 800,
            }}
          >
            WI
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 26, letterSpacing: 6, textTransform: "uppercase" }}>
              Wadhwa Institute
            </div>
            <div style={{ display: "flex", fontSize: 18, color: "rgba(245,245,240,0.6)", letterSpacing: 2 }}>
              Premium IB Coaching · Gurugram
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", fontSize: 110, fontWeight: 800, lineHeight: 1.0 }}>Score your</div>
          <div style={{ display: "flex", fontSize: 130, fontWeight: 800, lineHeight: 1.0, color: GREEN }}>
            perfect 7
          </div>
          <div style={{ display: "flex", fontSize: 40, color: "rgba(245,245,240,0.78)", marginTop: 10 }}>
            Mentor-led IB tuition — online & in-person
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {["English", "French", "Business", "Economics", "Maths AA/AI"].map((s) => (
              <div
                key={s}
                style={{
                  display: "flex",
                  border: `2px solid ${GREEN}`,
                  color: GREEN,
                  borderRadius: 999,
                  padding: "8px 20px",
                  fontSize: 26,
                }}
              >
                {s}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 8 }}>
            <div style={{ width: 48, height: 4, background: GREEN }} />
            <div style={{ display: "flex", fontSize: 30 }}>{`${siteContact.phone} · wadhwa-institue-ib.com`}</div>
          </div>
        </div>
      </div>
    ),
    { ...posterSize }
  );
}

export function teacherPoster(teacherId: string) {
  const teacher = teachers.find((t) => t.id === teacherId);
  if (!teacher) {
    return new ImageResponse(<div style={{ width: "100%", height: "100%", background: BG }} />, {
      ...posterSize,
    });
  }
  const photo = dataUrl(teacher.photo);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: BG,
          color: "#f5f5f0",
          fontFamily: FONT,
          position: "relative",
        }}
      >
        <div style={{ display: "flex", width: "100%", height: "62%", position: "relative" }}>
          {photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={photo}
              alt={teacher.name}
              width={1080}
              height={837}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 18%" }}
            />
          ) : (
            <div style={{ display: "flex", width: "100%", height: "100%", background: "#111" }} />
          )}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              background: "linear-gradient(to bottom, rgba(5,5,5,0) 55%, rgba(5,5,5,0.95) 100%)",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
            padding: "10px 64px 56px",
            flex: 1,
          }}
        >
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {teacher.subjects.map((s) => (
              <div
                key={s}
                style={{
                  display: "flex",
                  border: `2px solid ${GREEN}`,
                  color: GREEN,
                  borderRadius: 999,
                  padding: "6px 18px",
                  fontSize: 22,
                }}
              >
                {s}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", fontSize: 64, fontWeight: 800, lineHeight: 1.0 }}>
            {teacher.name}
          </div>
          <div style={{ display: "flex", fontSize: 28, color: GREEN, letterSpacing: 1 }}>
            {teacher.role}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: "rgba(245,245,240,0.82)",
              lineHeight: 1.35,
              marginTop: 4,
            }}
          >
            {teacher.pitch}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            top: 36,
            left: 40,
            display: "flex",
            alignItems: "center",
            gap: 14,
            background: "rgba(5,5,5,0.55)",
            borderRadius: 14,
            padding: "10px 16px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 48,
              height: 48,
              borderRadius: 12,
              border: `2px solid ${GREEN}`,
              color: GREEN,
              fontSize: 26,
              fontWeight: 800,
            }}
          >
            WI
          </div>
          <div style={{ display: "flex", fontSize: 22, letterSpacing: 4, textTransform: "uppercase" }}>
            Wadhwa Institute
          </div>
        </div>
      </div>
    ),
    { ...posterSize }
  );
}
