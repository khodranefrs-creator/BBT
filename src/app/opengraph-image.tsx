import { ImageResponse } from "next/og";

export const alt = "Building the Bond - One Bond. Many Voices. One Movement.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "linear-gradient(135deg, #0D1B2A 0%, #18324A 100%)",
          color: "#F6F2EA",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 24, letterSpacing: 6, textTransform: "uppercase", color: "#C9A227" }}>
          Building the Bond™
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 72, lineHeight: 1.05, maxWidth: 900 }}>One Bond. Many Voices. One Movement.</div>
          <div style={{ fontSize: 28, color: "rgba(246,242,234,0.78)", maxWidth: 760 }}>
            Leadership, wealth, voice, and meaningful connection.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#C9A227" }}>By ShoulderUP</div>
      </div>
    ),
    size,
  );
}
