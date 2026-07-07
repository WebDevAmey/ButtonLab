import type { CustomButtonDef } from "../types";

export const kintsugiSeam: CustomButtonDef = {
  id: "kintsugi-seam",
  name: "Kintsugi Seam",
  category: "Material",
  description: "A crack that fractures across the button on hover and is then slowly repaired by a gold seam flowing along the same line, like kintsugi pottery.",
  tags: ["kintsugi", "crack", "repair", "material"],
  label: "Repair",
  kind: "custom",
  html: `
<button class="kintsugi-seam-btn">
  <span class="kintsugi-seam-btn__label">Repair</span>
  <svg class="kintsugi-seam-btn__svg" viewBox="0 0 200 60" preserveAspectRatio="none">
    <path class="kintsugi-seam-btn__crack" pathLength="1" d="M0,30 L34,20 L58,40 L92,16 L126,36 L152,18 L200,30" />
    <path class="kintsugi-seam-btn__gold" pathLength="1" d="M0,30 L34,20 L58,40 L92,16 L126,36 L152,18 L200,30" />
  </svg>
</button>
  `,
  css: `
.kintsugi-seam-btn {
  position: relative;
  overflow: hidden;
  padding: 16px 40px;
  background: #2b2622;
  border: none;
  border-radius: 6px;
  font-family: system-ui, sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #e9e2d3;
  cursor: pointer;
}

.kintsugi-seam-btn__svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

.kintsugi-seam-btn__crack {
  fill: none;
  stroke: #0a0806;
  stroke-width: 2;
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  transition: stroke-dashoffset 0.4s ease-out;
}

.kintsugi-seam-btn__gold {
  fill: none;
  stroke: #d4af37;
  stroke-width: 1.4;
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  transition: stroke-dashoffset 0.55s linear 0.4s;
}

.kintsugi-seam-btn:hover .kintsugi-seam-btn__crack,
.kintsugi-seam-btn:focus-visible .kintsugi-seam-btn__crack,
.kintsugi-seam-btn:hover .kintsugi-seam-btn__gold,
.kintsugi-seam-btn:focus-visible .kintsugi-seam-btn__gold {
  stroke-dashoffset: 0;
}

.kintsugi-seam-btn:hover,
.kintsugi-seam-btn:focus-visible {
  animation: kintsugi-seam-settle 0.4s ease-out 0.95s;
}

@keyframes kintsugi-seam-settle {
  0%   { transform: scale(1); }
  40%  { transform: scale(1.015); }
  100% { transform: scale(1); }
}

.kintsugi-seam-btn__label {
  position: relative;
  z-index: 0;
}
  `,
  prompt: "A button with two identical zigzag SVG paths using pathLength=\"1\" for normalized dash math. The first (dark, thicker) draws quickly over 0.4s on hover, reading as a fracture appearing. The second (thin, gold) draws afterward via a transition-delay matching the first's duration, at a slower linear speed, reading as molten gold seam flowing into the same crack to repair it. Once both are complete, a brief scale keyframe — delayed to start exactly when the gold finishes — gives the whole button a small settle-and-release micro-motion, like the repaired material easing back into place.",
};