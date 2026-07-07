import type { CustomButtonDef } from "../types";

export const circuitTrace: CustomButtonDef = {
  id: "circuit-trace",
  name: "Circuit Trace",
  category: "Mechanical",
  description: "A trace line that draws itself on hover, followed by a pulse traveling its exact length, igniting the corner nodes it passes through.",
  tags: ["circuit", "trace", "pulse", "mechanical"],
  label: "Connect",
  kind: "custom",
  html: `
<button class="circuit-trace-btn">
  <svg class="circuit-trace-btn__svg" viewBox="0 0 220 70" preserveAspectRatio="none">
    <path class="circuit-trace-btn__path" pathLength="1" d="M6,6 L60,6 L82,35 L138,35 L160,64 L214,64" />
  </svg>
  <span class="circuit-trace-btn__node circuit-trace-btn__node--a"></span>
  <span class="circuit-trace-btn__node circuit-trace-btn__node--b"></span>
  <span class="circuit-trace-btn__pulse"></span>
  <span class="circuit-trace-btn__label">Connect</span>
</button>
  `,
  css: `
.circuit-trace-btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 70px;
  padding: 0;
  background: #14171a;
  border: 1px solid #2a2f34;
  border-radius: 6px;
  cursor: pointer;
  overflow: hidden;
}

.circuit-trace-btn__svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.circuit-trace-btn__path {
  fill: none;
  stroke: #46514a;
  stroke-width: 2;
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  transition: stroke-dashoffset 0.6s linear;
}

.circuit-trace-btn:hover .circuit-trace-btn__path,
.circuit-trace-btn:focus-visible .circuit-trace-btn__path {
  stroke-dashoffset: 0;
}

.circuit-trace-btn__pulse {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #e0a83c;
  offset-path: path('M6,6 L60,6 L82,35 L138,35 L160,64 L214,64');
  offset-distance: 0%;
  opacity: 0;
  z-index: 1;
  transition: offset-distance 0.5s linear 0.6s, opacity 0.05s linear 0.55s;
}

.circuit-trace-btn:hover .circuit-trace-btn__pulse,
.circuit-trace-btn:focus-visible .circuit-trace-btn__pulse {
  offset-distance: 100%;
  opacity: 1;
}

.circuit-trace-btn__node {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #3a413c;
  z-index: 1;
  transition: background 0.15s ease;
}

.circuit-trace-btn__node--a { top: 2px; left: 2px; transition-delay: 0.55s; }
.circuit-trace-btn__node--b { bottom: 2px; right: 2px; transition-delay: 1.05s; }

.circuit-trace-btn:hover .circuit-trace-btn__node--a,
.circuit-trace-btn:hover .circuit-trace-btn__node--b,
.circuit-trace-btn:focus-visible .circuit-trace-btn__node--a,
.circuit-trace-btn:focus-visible .circuit-trace-btn__node--b {
  background: #e0a83c;
}

.circuit-trace-btn__label {
  position: relative;
  z-index: 2;
  font-family: system-ui, sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #dfe6e0;
  letter-spacing: 0.5px;
}
  `,
  prompt: "A fixed-size button with an SVG path using pathLength=\"1\" so stroke-dasharray/dashoffset can be normalized without JS length measurement. On hover the dashoffset animates 1→0 to draw the trace, a separate dot animates along the same path string via offset-path/offset-distance starting after the draw completes, and two corner nodes change from muted to accent color at transition-delays matching exactly when the pulse departs and arrives — three layers synced on one shared timeline rather than a single hover effect.",
};