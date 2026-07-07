import type { CustomButtonDef } from "../types";

export const depthFlip: CustomButtonDef = {
  id: "depth-flip",
  name: "Depth Flip",
  category: "Impossible",
  description: "A static button whose bevel shading swaps on hover, flipping its perceived depth from raised to recessed with zero actual movement.",
  tags: ["illusion", "bevel", "depth", "impossible"],
  label: "Toggle",
  kind: "custom",
  html: `
<button class="depth-flip-btn">
  <span class="depth-flip-btn__label">Toggle</span>
</button>
  `,
  css: `
.depth-flip-btn {
  padding: 16px 34px;
  background: #d7d2c3;
  border: none;
  border-radius: 6px;
  font-family: system-ui, sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #2b2b2b;
  cursor: pointer;
  box-shadow:
    inset 2px 2px 0 rgba(255,255,255,0.8),
    inset -2px -2px 0 rgba(0,0,0,0.25);
  transition: box-shadow 0.15s linear;
}

.depth-flip-btn:hover,
.depth-flip-btn:focus-visible {
  box-shadow:
    inset -2px -2px 0 rgba(255,255,255,0.8),
    inset 2px 2px 0 rgba(0,0,0,0.25);
}

.depth-flip-btn__label {
  position: relative;
}
  `,
  prompt: "A button with hard (non-blurred) inset box-shadow bevels: light on the top-left edge and dark on the bottom-right edge at rest, reading as convex/raised. On hover, the two shadow positions swap instantly (light moves to bottom-right, dark to top-left) with no size, position, or shape change at all — purely inverting which edges appear lit, making the same flat shape suddenly read as concave/pressed-in.",
};