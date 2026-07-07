import type { CustomButtonDef } from "../types";

export const tapeRetract: CustomButtonDef = {
  id: "tape-retract",
  name: "Tape Retract",
  category: "Physics",
  description: "A label that stretches outward while held and snaps back with a whip on release, like a measuring tape retracting.",
  tags: ["tape", "measure", "snap", "physics"],
  label: "Measure",
  kind: "custom",
  html: `
<button class="tape-retract-btn">
  <span class="tape-retract-btn__label">Measure</span>
</button>
  `,
  css: `
.tape-retract-btn {
  padding: 14px 30px;
  background: #d6c33a;
  border: none;
  border-radius: 3px;
  font-family: system-ui, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #1c1c1c;
  cursor: pointer;
  overflow: hidden;
}

.tape-retract-btn__label {
  display: inline-block;
  transform-origin: left center;
  transform: scaleX(1);
  transition: transform 0.25s cubic-bezier(0.7, 0, 0.85, 0.3);
}

.tape-retract-btn:active .tape-retract-btn__label {
  transform: scaleX(1.35);
  transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.3, 1);
}

.tape-retract-btn:not(:active) .tape-retract-btn__label {
  transition: transform 0.18s cubic-bezier(0.9, 0, 1, 0.4);
}
  `,
  prompt: "A button whose label stretches horizontally from its left edge while pressed (mousedown), simulating tape being pulled out under tension with a slowing ease. On release it snaps back to scaleX(1) sharply and fast — noticeably quicker than the pull-out — replicating the asymmetric tension/snap-back of a retracting tape measure.",
};