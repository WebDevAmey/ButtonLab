import type { CustomButtonDef } from "../types";

export const compassNeedle: CustomButtonDef = {
  id: "compass-needle",
  name: "Compass Needle",
  category: "Mechanical",
  description: "A label that swings off-axis like a disturbed compass needle and slowly settles back to center.",
  tags: ["compass", "needle", "settle", "mechanical"],
  label: "Navigate",
  kind: "custom",
  html: `
<button class="compass-needle-btn">
  <span class="compass-needle-btn__needle">Navigate</span>
</button>
  `,
  css: `
.compass-needle-btn {
  padding: 14px 32px;
  background: #f5f3ee;
  border: 1px solid #cfc8b8;
  border-radius: 50px;
  font-family: system-ui, sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #2c2c2c;
  cursor: pointer;
}

.compass-needle-btn__needle {
  display: inline-block;
  transform-origin: 50% 50%;
  transition: transform 2.2s cubic-bezier(0.16, 1.4, 0.3, 1);
}

.compass-needle-btn:hover .compass-needle-btn__needle {
  transform: rotate(14deg);
  transition: transform 0.15s ease-out;
}

.compass-needle-btn:not(:hover) .compass-needle-btn__needle {
  transform: rotate(0deg);
}
  `,
  prompt: "A pill-shaped button whose label rotates quickly a few degrees off-axis on hover-enter (like a needle knocked off course), then on hover-exit slowly oscillates back to 0deg over ~2 seconds using an elastic cubic-bezier so it overshoots slightly before settling, mimicking magnetic needle physics rather than a simple hover-rotate.",
};