import type { CustomButtonDef } from "../types";

export const rubberSnap: CustomButtonDef = {
  id: "rubber-snap",
  name: "Rubber Snap",
  category: "Physics",
  description: "A button that stretches like a pulled rubber band on click and whips back through several decaying oscillations before settling.",
  tags: ["rubber", "snap", "wobble", "physics"],
  label: "Snap",
  kind: "custom",
  html: `
<button class="rubber-snap-btn" onclick="
  this.classList.remove('is-snapping');
  void this.offsetWidth;
  this.classList.add('is-snapping');
">
  <span class="rubber-snap-btn__label">Snap</span>
</button>
  `,
  css: `
.rubber-snap-btn {
  padding: 14px 34px;
  background: #d33f3f;
  border: none;
  border-radius: 30px;
  font-family: system-ui, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #fff4f0;
  cursor: pointer;
}

.rubber-snap-btn:active {
  transform: scale(1.35, 0.7) skewX(-8deg);
  transition: transform 0.15s ease-out;
}

.rubber-snap-btn.is-snapping {
  animation: rubber-snap-wobble 0.7s cubic-bezier(0.36, 0.07, 0.19, 0.97);
}

@keyframes rubber-snap-wobble {
  0%   { transform: scale(1.35, 0.7) skewX(-8deg); }
  20%  { transform: scale(0.85, 1.2) skewX(6deg); }
  40%  { transform: scale(1.12, 0.9) skewX(-3deg); }
  60%  { transform: scale(0.96, 1.05) skewX(2deg); }
  80%  { transform: scale(1.03, 0.98) skewX(-1deg); }
  100% { transform: scale(1, 1) skewX(0deg); }
}
  `,
  prompt: "A pill-shaped button that stretches wide and flat with a skew while actively pressed (mousedown), simulating tension. On click-release, a keyframe animation takes over that overshoots in the opposite direction, then oscillates through progressively smaller scale/skew swings — each pass smaller than the last — before settling flat, mimicking a rubber band whipping back and forth after release rather than a single clean bounce.",
};