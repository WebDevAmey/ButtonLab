import type { CustomButtonDef } from "../types";

export const dominoRow: CustomButtonDef = {
  id: "domino-row",
  name: "Domino Row",
  category: "Mechanical",
  description: "Five standing bars in front of the label that tip over in a staggered sequence on hover, like a row of falling dominoes.",
  tags: ["domino", "stagger", "mechanical", "fall"],
  label: "Continue",
  kind: "custom",
  html: `
<button class="domino-row-btn">
  <span class="domino-row-btn__label">Continue</span>
  <span class="domino-row-btn__row">
    <span class="domino-row-btn__tile"></span>
    <span class="domino-row-btn__tile"></span>
    <span class="domino-row-btn__tile"></span>
    <span class="domino-row-btn__tile"></span>
    <span class="domino-row-btn__tile"></span>
  </span>
</button>
  `,
  css: `
.domino-row-btn {
  position: relative;
  overflow: hidden;
  padding: 16px 36px;
  background: #1c1c1e;
  border: none;
  border-radius: 6px;
  font-family: system-ui, sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #f0eee6;
  cursor: pointer;
}

.domino-row-btn__label {
  position: relative;
  z-index: 0;
}

.domino-row-btn__row {
  position: absolute;
  inset: 0;
  z-index: 1;
  display: flex;
  perspective: 400px;
}

.domino-row-btn__tile {
  flex: 1;
  height: 100%;
  background: #c9c4b6;
  border-right: 1px solid rgba(0,0,0,0.25);
  transform-origin: bottom center;
  transform: rotateX(0deg);
  transition: transform 0.22s ease-in;
}

.domino-row-btn__tile:nth-child(1) { transition-delay: 0ms; }
.domino-row-btn__tile:nth-child(2) { transition-delay: 75ms; }
.domino-row-btn__tile:nth-child(3) { transition-delay: 150ms; }
.domino-row-btn__tile:nth-child(4) { transition-delay: 225ms; }
.domino-row-btn__tile:nth-child(5) { transition-delay: 300ms; }

.domino-row-btn:hover .domino-row-btn__tile,
.domino-row-btn:focus-visible .domino-row-btn__tile {
  transform: rotateX(90deg);
}
  `,
  prompt: "A button covered by five adjacent vertical tiles spanning its full width, each with transform-origin at its own bottom edge inside a perspective container. On hover, each tile rotates 90deg on the X-axis to 'fall flat,' with each successive tile delayed 75ms behind the last, so they tip in a left-to-right sequence like dominoes rather than all at once.",
};