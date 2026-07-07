import type { CustomButtonDef } from "../types";

export const parallaxTilt: CustomButtonDef = {
  id: "parallax-tilt",
  name: "Parallax Tilt",
  category: "Impossible",
  description: "A button that tilts in real 3D toward the cursor while its label floats at a separate depth, producing genuine parallax between the two layers.",
  tags: ["parallax", "3d", "tilt", "depth"],
  label: "Explore",
  kind: "custom",
  html: `
<button class="parallax-tilt-btn" onmousemove="
  const r = this.getBoundingClientRect();
  const px = (event.clientX - r.left) / r.width - 0.5;
  const py = (event.clientY - r.top) / r.height - 0.5;
  this.style.setProperty('--tilt-x', (py * -14) + 'deg');
  this.style.setProperty('--tilt-y', (px * 14) + 'deg');
" onmouseleave="
  this.style.setProperty('--tilt-x', '0deg');
  this.style.setProperty('--tilt-y', '0deg');
">
  <span class="parallax-tilt-btn__plate">
    <span class="parallax-tilt-btn__label">Explore</span>
  </span>
</button>
  `,
  css: `
.parallax-tilt-btn {
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  perspective: 260px;
  --tilt-x: 0deg;
  --tilt-y: 0deg;
}

.parallax-tilt-btn__plate {
  display: block;
  padding: 18px 38px;
  background: #1e1e1e;
  border-radius: 8px;
  transform-style: preserve-3d;
  transform: rotateX(var(--tilt-x)) rotateY(var(--tilt-y));
  transition: transform 0.12s ease-out;
}

.parallax-tilt-btn__label {
  display: inline-block;
  font-family: system-ui, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #f2efe6;
  transform: translateZ(24px);
}
  `,
  prompt: "A button whose mousemove handler tracks cursor position relative to its own bounding box and writes the offset into two CSS variables for rotateX and rotateY. The outer plate rotates in true 3D based on those variables inside a perspective container, while the inner label sits translateZ(24px) forward on its own layer with transform-style: preserve-3d, so as the plate tilts, the label visibly shifts and separates from the plate's edges rather than staying flush — genuine depth parallax, not a flat 2D tilt-shift trick.",
};