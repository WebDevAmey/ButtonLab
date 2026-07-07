import type { CustomButtonDef } from "../types";

export const neonTubeIgnite: CustomButtonDef = {
  id: "neon-tube-ignite",
  name: "Neon Tube Ignite",
  category: "Optical",
  description: "A neon outline that flickers unevenly to life around the button's perimeter on hover, like a real tube warming up, and flickers off on exit.",
  tags: ["neon", "ignite", "flicker", "optical"],
  label: "Power On",
  kind: "custom",
  html: `
<button class="neon-tube-btn"
  onmouseenter="this.classList.remove('is-extinguishing'); void this.offsetWidth; this.classList.add('is-igniting');"
  onmouseleave="this.classList.remove('is-igniting'); void this.offsetWidth; this.classList.add('is-extinguishing');"
>
  <svg class="neon-tube-btn__svg" viewBox="0 0 200 64" preserveAspectRatio="none">
    <rect class="neon-tube-btn__path" x="3" y="3" width="194" height="58" rx="14" pathLength="1" />
  </svg>
  <span class="neon-tube-btn__label">Power On</span>
</button>
  `,
  css: `
.neon-tube-btn {
  position: relative;
  padding: 16px 40px;
  background: #0b0b0d;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  overflow: visible;
}

.neon-tube-btn__svg {
  position: absolute;
  inset: -3px;
  width: calc(100% + 6px);
  height: calc(100% + 6px);
  pointer-events: none;
  overflow: visible;
}

.neon-tube-btn__path {
  fill: none;
  stroke: #ff5fd8;
  stroke-width: 2.5;
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  opacity: 0;
  filter: drop-shadow(0 0 4px #ff5fd8) drop-shadow(0 0 10px rgba(255,95,216,0.6));
}

.neon-tube-btn.is-igniting .neon-tube-btn__path {
  animation: neon-tube-ignite 0.6s cubic-bezier(0.3,0,0.4,1) forwards;
}

@keyframes neon-tube-ignite {
  0%   { stroke-dashoffset: 1; opacity: 0; }
  8%   { opacity: 1; }
  14%  { opacity: 0.2; }
  20%  { opacity: 1; stroke-dashoffset: 0.7; }
  30%  { opacity: 0.3; }
  38%  { opacity: 1; stroke-dashoffset: 0.4; }
  50%  { opacity: 0.5; }
  58%  { opacity: 1; stroke-dashoffset: 0.15; }
  100% { opacity: 1; stroke-dashoffset: 0; }
}

.neon-tube-btn.is-extinguishing .neon-tube-btn__path {
  animation: neon-tube-off 0.35s ease-in forwards;
}

@keyframes neon-tube-off {
  0%   { opacity: 1; stroke-dashoffset: 0; }
  30%  { opacity: 0.15; }
  45%  { opacity: 0.8; }
  100% { opacity: 0; stroke-dashoffset: 1; }
}

.neon-tube-btn__label {
  position: relative;
  z-index: 1;
  font-family: system-ui, sans-serif;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1px;
  color: #837f88;
  transition: color 0.4s ease, text-shadow 0.4s ease;
}

.neon-tube-btn:hover .neon-tube-btn__label {
  color: #ffe3fa;
  text-shadow: 0 0 8px rgba(255,95,216,0.8);
}
  `,
  prompt: "A button outlined by an SVG rect using pathLength=\"1\" so its stroke-dashoffset can be driven from 1 (invisible) to 0 (fully drawn) via a keyframe animation, rather than a smooth transition. That keyframe interleaves the dashoffset draw with several opacity dips at uneven intervals early on, simulating a real neon tube's uneven warm-up flicker before settling fully lit. Leaving triggers a separate shorter keyframe that flickers once more before extinguishing, rather than a plain fade-out.",
};