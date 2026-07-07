import type { CustomButtonDef } from "../types";

export const fogWipe: CustomButtonDef = {
  id: "fog-wipe",
  name: "Fog Wipe",
  category: "Optical",
  description: "A label hidden under an opaque fog layer that clears in a wiped streak following the cursor, like steam wiped off a mirror.",
  tags: ["fog", "wipe", "mirror", "optical"],
  label: "Reveal",
  kind: "custom",
  html: `
<button class="fog-wipe-btn" onmousemove="
  const r = this.getBoundingClientRect();
  const x = ((event.clientX - r.left) / r.width) * 100;
  this.style.setProperty('--fog-wipe-x', x + '%');
">
  <span class="fog-wipe-btn__label">Reveal</span>
  <span class="fog-wipe-btn__fog"></span>
</button>
  `,
  css: `
.fog-wipe-btn {
  position: relative;
  overflow: hidden;
  padding: 14px 32px;
  background: #101820;
  border: none;
  border-radius: 4px;
  font-family: system-ui, sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #eaf2f5;
  cursor: pointer;
  --fog-wipe-x: 0%;
}

.fog-wipe-btn__label {
  position: relative;
  z-index: 0;
}

.fog-wipe-btn__fog {
  position: absolute;
  inset: 0;
  background: #7c8a91;
  z-index: 1;
  clip-path: circle(38px at var(--fog-wipe-x) 50%);
  -webkit-clip-path: circle(0px at var(--fog-wipe-x) 50%);
  clip-path: circle(0px at var(--fog-wipe-x) 50%);
  transition: clip-path 0.15s ease-out;
  pointer-events: none;
}

.fog-wipe-btn:hover .fog-wipe-btn__fog {
  clip-path: circle(0px at var(--fog-wipe-x) 50%);
}

.fog-wipe-btn:not(:hover) .fog-wipe-btn__fog {
  clip-path: circle(60px at var(--fog-wipe-x) 50%);
  transition: clip-path 0.6s ease-in;
}
  `,
  prompt: "A button covered by a flat, opaque fog-colored layer (no blur/backdrop-filter — solid color only, to avoid glassmorphism). Mouse movement updates a CSS variable tracking cursor x-position, which a clip-path circle uses to punch a clear hole in the fog exactly where the cursor is, and the fog re-forms when the cursor leaves.",
};