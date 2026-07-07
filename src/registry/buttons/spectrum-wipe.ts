import type { CustomButtonDef } from "../types";

export const spectrumWipe: CustomButtonDef = {
  id: "spectrum-wipe",
  name: "Spectrum Wipe",
  category: "Impossible",
  description: "Three clip-path color wedges sweep from the corner in a stagger, then the revealed label's letters cascade in one at a time.",
  tags: ["sweep", "wedge", "cascade", "hover"],
  label: "Hover me",
  kind: "custom",
  html: `
<button class="spectrum-wipe-btn">
  <span class="spectrum-wipe-btn__label spectrum-wipe-btn__label--before">Hover me</span>
  <span class="spectrum-wipe-btn__label spectrum-wipe-btn__label--after">
    <span style="transition-delay:0ms">E</span><span style="transition-delay:40ms">x</span><span style="transition-delay:80ms">p</span><span style="transition-delay:120ms">l</span><span style="transition-delay:160ms">o</span><span style="transition-delay:200ms">r</span><span style="transition-delay:240ms">e</span>
  </span>
  <span class="spectrum-wipe-btn__wedge spectrum-wipe-btn__wedge--1"></span>
  <span class="spectrum-wipe-btn__wedge spectrum-wipe-btn__wedge--2"></span>
  <span class="spectrum-wipe-btn__wedge spectrum-wipe-btn__wedge--3"></span>
</button>
  `,
  css: `
.spectrum-wipe-btn {
  position: relative;
  overflow: hidden;
  width: 150px;
  height: 52px;
  padding: 0;
  background: #0e0e10;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-family: system-ui, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #fff;
}

.spectrum-wipe-btn__wedge {
  position: absolute;
  inset: 0;
  clip-path: polygon(0% 100%, 0% 40%, 130% 100%);
  transform: scale(0);
  transform-origin: 0% 100%;
  transition: transform 0.55s cubic-bezier(0.65, 0, 0.35, 1);
}

.spectrum-wipe-btn__wedge--1 { background: #ffffff; transition-delay: 0ms; }
.spectrum-wipe-btn__wedge--2 { background: #c084fc; transition-delay: 90ms; }
.spectrum-wipe-btn__wedge--3 { background: #7e22ce; transition-delay: 180ms; }

.spectrum-wipe-btn:hover .spectrum-wipe-btn__wedge {
  transform: scale(1);
}

.spectrum-wipe-btn__label {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.spectrum-wipe-btn__label--before {
  transition: opacity 0.2s ease;
}

.spectrum-wipe-btn:hover .spectrum-wipe-btn__label--before {
  opacity: 0;
}

.spectrum-wipe-btn__label--after {
  pointer-events: none;
}

.spectrum-wipe-btn__label--after span {
  display: inline-block;
  opacity: 0;
  transform: translateY(6px);
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.spectrum-wipe-btn:hover .spectrum-wipe-btn__label--after span {
  opacity: 1;
  transform: translateY(0);
}
  `,
  prompt: "A button covered by three solid-color wedges built with clip-path polygon (not rotated rectangles), each scaling from 0 to 1 from the bottom-left corner with a staggered transition-delay. The hidden label beneath is wrapped letter-by-letter in individual spans, each with its own transition-delay, so once the wedges clear, the new word cascades in character-by-character rather than fading in as a single block.",
};