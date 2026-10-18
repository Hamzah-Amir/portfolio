import { ImageResponse } from "next/og";

export const alt = "Hamza Amir — Full-Stack Developer & Automation Engineer";
export const size = { width: 1200, height: 630 };
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
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0B0F14",
          color: "#E8EDF2",
          fontFamily: "sans-serif",
        }}every
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 32, fontWeight: 700 }}>
          <div style={{ width: 18, height: 18, borderRadius: 9, background: "#FF9F1C" }} />
          <span>hamza</span>
          <span style={{ color: "#8793A1", fontWeight: 400, marginLeft: -14 }}>.dev</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 76, fontWeight: 700, lineHeight: 1.1 }}>
          <span>I build software that works</span>
          <span style={{ color: "#FF9F1C" }}>while you don&apos;t.</span>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#4FD1C5", letterSpacing: 2 }}>
          FULL-STACK DEVELOPER · AUTOMATION ENGINEER · KARACHI, PK
        </div>
      </div>
    ),
    size
  );
}
