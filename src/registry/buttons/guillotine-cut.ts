import type { CustomButtonDef } from "../types";

export const guillotineCut: CustomButtonDef = {
  id: "guillotine-cut",
  name: "Guillotine Cut",
  category: "Mechanical",
  description: "A blade that drops through the label, holds for a beat, then retracts on every click, replaying identically on repeated presses.",
  tags: ["blade", "cut", "mechanical", "drop"],
  label: "Cut",
  kind: "custom",
  html: `
<button class="guillotine-cut-btn" onclick="
  this.classList.remove('is-cutting');
  void this.offsetWidth;
  this.classList.add('is-cutting');
">
  <span class="guillotine-cut-btn__label">Cut</span>
  <span class="guillotine-cut-btn__blade"></span>
</button>
  `,
  css: `
.guillotine-cut-btn {
  position: relative;
  overflow: hidden;
  padding: 14px 32px;
  background: #f2efe6;
  border: none;
  border-radius: 4px;
  font-family: system-ui, sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #23231f;
  cursor: pointer;
}

.guillotine-cut-btn__label {
  position: relative;
  z-index: 0;
}

.guillotine-cut-btn__blade {
  position: absolute;
  inset-inline: 0;
  top: 0;
  height: 100%;
  z-index: 1;
  background: #2b2b28;
  transform: translateY(-100%);
}

.guillotine-cut-btn.is-cutting .guillotine-cut-btn__blade {
  animation: guillotine-cut-drop 0.6s cubic-bezier(0.6, 0, 0.4, 1);
}

@keyframes guillotine-cut-drop {
  0%   { transform: translateY(-100%); }
  45%  { transform: translateY(0%); }
  55%  { transform: translateY(0%); }
  100% { transform: translateY(-100%); }
}
  `,
  prompt: "A button with a solid blade layer positioned above it (translateY(-100%) at rest, fully hidden). On every click, a class toggled via remove/reflow/add triggers a keyframe animation where the blade drops to fully cover the label, holds in place for a short pause (45%-55% of the animation), then retracts back up and out of view — the hold is what sells 'cutting through' rather than a simple wipe.",
};