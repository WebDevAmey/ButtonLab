import type { CustomButtonDef } from "../types";

export const punchWindow: CustomButtonDef = {
  id: "punch-window",
  name: "Punch Window",
  category: "Optical",
  description: "A tracking hole punched through the button's surface that follows the cursor, exposing a patterned depth underneath.",
  tags: ["cutout", "hole", "depth", "optical"],
  label: "Inspect",
  kind: "custom",
  html: `
<button class="punch-window-btn" onmousemove="
  const r = this.getBoundingClientRect();
  this.style.setProperty('--punch-x', ((event.clientX - r.left)) + 'px');
  this.style.setProperty('--punch-y', ((event.clientY - r.top)) + 'px');
">
  <span class="punch-window-btn__depth"></span>
  <span class="punch-window-btn__hole"></span>
  <span class="punch-window-btn__label">Inspect</span>
</button>
  `,
  css: `
.punch-window-btn {
  position: relative;
  overflow: hidden;
  padding: 16px 34px;
  background: #e7e3d8;
  border: none;
  border-radius: 4px;
  font-family: system-ui, sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #2b2b2b;
  cursor: pointer;
  --punch-x: 50%;
  --punch-y: 50%;
}

.punch-window-btn__depth {
  position: absolute;
  inset: -20px;
  background-image:
    linear-gradient(#b5ae99 1px, transparent 1px),
    linear-gradient(90deg, #b5ae99 1px, transparent 1px);
  background-size: 8px 8px;
  background-color: #26241d;
  z-index: 0;
}

.punch-window-btn__hole {
  position: absolute;
  inset: 0;
  background: #e7e3d8;
  z-index: 1;
  clip-path: circle(0px at var(--punch-x) var(--punch-y));
  transition: clip-path 0.08s linear;
}

.punch-window-btn:hover .punch-window-btn__hole {
  clip-path: circle(16px at var(--punch-x) var(--punch-y));
}

.punch-window-btn__label {
  position: relative;
  z-index: 2;
}
  `,
  prompt: "A button whose base surface hides a dark grid-pattern layer beneath it (representing depth, not a gradient). A top layer matching the button's own background sits over it; on hover a small circular clip-path hole opens in that top layer at the exact cursor position, revealing the grid underneath as if a hole were punched through the surface.",
};