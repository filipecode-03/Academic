import { ImageResponse } from "next/og";

export const alt = "Nortea Digital — Tecnologia que dá direção ao seu negócio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        background: "#123D2E",
        color: "#F4F5F0",
        padding: "70px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "18px", fontSize: 34, fontWeight: 700 }}>
          <div style={{ display: "flex", width: 52, height: 52, border: "4px solid #F4F5F0", alignItems: "center", justifyContent: "center" }}>N</div>
          Nortea Digital
        </div>
        <div style={{ display: "flex", maxWidth: 900, fontSize: 76, lineHeight: 0.98, letterSpacing: "-4px", fontWeight: 600 }}>
          Tecnologia que dá direção ao seu negócio.
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#CBD2CC" }}>
          <span>Websites, e-commerces e sistemas sob medida.</span>
          <span>N / 001</span>
        </div>
      </div>
      <svg width="460" height="300" viewBox="0 0 460 300" style={{ position: "absolute", right: 0, top: 70 }}>
        <path d="M-30 252C70 204 34 96 144 95c96-1 70 101 164 91 73-8 58-100 149-129" stroke="#CBD2CC" strokeWidth="3" strokeDasharray="10 12" fill="none" />
        <circle cx="144" cy="95" r="8" fill="#F4F5F0" />
        <circle cx="308" cy="186" r="8" fill="#F4F5F0" />
      </svg>
    </div>,
    size,
  );
}
