import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          background:
            "radial-gradient(circle at top, rgba(59,130,246,0.25), transparent), #020617",
          color: "#f8fafc",
          padding: "60px",
          fontFamily: "Geist, Geist Sans, sans-serif",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ fontSize: 36, letterSpacing: 4, textTransform: "uppercase", opacity: 0.6 }}>
          Unified AI API Platform
        </div>
        <div style={{ fontSize: 78, fontWeight: 700, lineHeight: 1.05, maxWidth: "900px" }}>
          Pai Keys routes every request to the smartest model automatically.
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 28,
            color: "rgba(226,232,240,0.9)",
          }}
        >
          <span>GPT • Claude • Gemini • Mistral • Stable Diffusion • Whisper</span>
          <span style={{ fontWeight: 600 }}>paikeys.ai</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
