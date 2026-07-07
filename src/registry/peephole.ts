import type { CustomButtonDef } from "./types";

export const peephole: CustomButtonDef = {
  id: "peephole",
  name: "Peephole",
  category: "Optical",
  description: "A solid cover with a circular hole that grows outward from the center on hover, exposing the label beneath like a peephole widening.",
  tags: ["peephole", "reveal", "clip-path", "optical"],
  label: "Reveal",
  kind: "custom",
  html: `
<button class="peephole-btn">
  <span class="peephole-btn__label">Reveal</span>
  <span class="peephole-btn__cover"></span>
</button>
  `,
  css: `
.peephole-btn {
  position: relative;
  overflow: hidden;
  padding: 14px 32px;
  background: #fdf6e3;
  border: none;
  border-radius: 6px;
  font-family: system-ui, sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #2b2b2b;
  cursor: pointer;
}

.peephole-btn__label {
  position: relative;
  z-index: 0;
}

.peephole-btn__cover {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: #171716;
  clip-path: circle(0px at 50% 50%);
  transition: clip-path 0.5s ease-out;
}

.peephole-btn:hover .peephole-btn__cover,
.peephole-btn:focus-visible .peephole-btn__cover {
  clip-path: circle(120% at 50% 50%);
}
  `,
  prompt: "A button with a solid opaque cover layer clipped to a circle of 0px radius centered on the button (fully invisible at rest since the hole is closed... note: cover should default to visible/full and the hole should be what's absent — implementation detail: start clip-path circle(0px) means the cover is invisible at 0px, so at rest the cover must instead be the visible state and hover state grows the see-through hole). On hover, the circle radius animates outward from the center to fully cover the button, revealing the label progressively from the middle outward like a widening peephole.",
};