import { ImageResponse } from "next/og";

export const alt = "Uwi_Dev — Software built around the way your business works";
export const size = {
  width: 1200,
  height: 637,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: "#05070F",
          fontFamily:
            "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        }}
      >
        <div
          style={{
            width: 64,
            height: 2,
            background: "#3D5AFE",
            marginBottom: 40,
          }}
        />
        <div
          style={{
            fontSize: 64,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "#FFFFFF",
          }}
        >
          Uwi_Dev
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#8B93A7",
            marginTop: 16,
            maxWidth: 760,
          }}
        >
          Software built around the way your business works.
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#8B93A7",
            marginTop: 48,
            fontFamily:
              "ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace",
          }}
        >
          Custom Business Systems · Web · Mobile · Integrations
        </div>
      </div>
    ),
    { ...size }
  );
}