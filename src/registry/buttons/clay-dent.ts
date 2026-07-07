import type { CustomButtonDef } from "../types";

export const clayDent: CustomButtonDef = {
  id: "clay-dent",
  name: "Clay Dent",
  category: "Material",
  description: "A button that dents inward at the exact point you press, then slowly rises back to flat like soft clay recovering.",
  tags: ["clay", "dent", "press", "material"],
  label: "Press",
  kind: "custom",
  html: `
<button class="clay-dent-btn" onmousedown="
  const r = this.getBoundingClientRect();
  this.style.setProperty('--clay-dent-x', (event.clientX - r.left) + 'px');
  this.style.setProperty('--clay-dent-y', (event.clientY - r.top) + 'px');
  this.classList.add('is-pressed');
" onmouseup="this.classList.remove('is-pressed')" onmouseleave="this.classList.remove('is-pressed')">
  <span class="clay-dent-btn__dent"></span>
  <span class="clay-dent-btn__label">Press</span>
</button>
  `,
  css: `
.clay-dent-btn {
  position: relative;
  overflow: hidden;
  padding: 16px 34px;
  background: #d9d2c1;
  border: none;
  border-radius: 6px;
  font-family: system-ui, sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #33301f;
  cursor: pointer;
  --clay-dent-x: 50%;
  --clay-dent-y: 50%;
}

.clay-dent-btn__dent {
  position: absolute;
  left: var(--clay-dent-x);
  top: var(--clay-dent-y);
  width: 10px;
  height: 10px;
  margin: -5px 0 0 -5px;
  border-radius: 50%;
  background: #b6ab8f;
  box-shadow: inset 0 2px 3px rgba(0,0,0,0.35);
  transform: scale(0);
  transition: transform 1.1s cubic-bezier(0.22, 1, 0.36, 1);
  z-index: 0;
}

.clay-dent-btn.is-pressed .clay-dent-btn__dent {
  transform: scale(4.5);
  transition: transform 0.1s ease-out;
}

.clay-dent-btn__label {
  position: relative;
  z-index: 1;
}
  `,
  prompt: "A button that tracks the exact mousedown coordinates into CSS variables, then scales a small circle (positioned there, shaded only with a solid color + inset box-shadow for depth — no radial gradient) instantly up to a large size on press, and slowly scales it back down to zero over ~1.1s on release, simulating a dent that gradually recovers like clay or memory foam.",
};