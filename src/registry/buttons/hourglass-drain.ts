import type { CustomButtonDef } from "../types";

export const hourglassDrain: CustomButtonDef = {
  id: "hourglass-drain",
  name: "Hourglass Drain",
  category: "Effect",
  description:
    "A button whose top half is a triangle of color that drains away on hover while the bottom half fills up, mimicking sand falling through an hourglass.",
  tags: ["hourglass", "clip-path", "novel"],
  label: "Wait",
  kind: "custom",
  html: `<button class="btn-hourglass">
  <span>Wait</span>
</button>`,
  css: `.btn-hourglass {
  position: relative;
  padding: 14px 30px;
  border-radius: 8px;
  border: 1px solid #78350f;
  background: #1c1917;
  color: #fbbf24;
  font-weight: 600;
  cursor: pointer;
  overflow: hidden;
}

.btn-hourglass span {
  position: relative;
  z-index: 1;
}

.btn-hourglass::before,
.btn-hourglass::after {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  background: #f59e0b;
  transition: clip-path 1.2s ease, height 1.2s ease;
}

.btn-hourglass::before {
  top: 0;
  height: 50%;
  clip-path: polygon(0 0, 100% 0, 50% 100%);
}

.btn-hourglass::after {
  bottom: 0;
  height: 0%;
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
}

.btn-hourglass:hover::before {
  clip-path: polygon(0 0, 100% 0, 50% 0);
}

.btn-hourglass:hover::after {
  height: 50%;
}`,
  prompt:
    "Create a dark button (background #1c1917, 1px #78350f border, 8px radius, amber bold text, overflow hidden) labeled \"Wait\" wrapped in a span with z-index above the effect. Add a before: pseudo-element covering the top half, colored amber (#f59e0b), clipped to a downward-pointing triangle (clip-path polygon 0 0, 100% 0, 50% 100%). Add an after: pseudo-element covering the bottom, same amber color, starting at 0 height, clipped to an upward-pointing triangle (polygon 50% 0, 100% 100%, 0 100%). On hover, collapse the top triangle's clip-path to a flat line at the top (as if the sand drained out) and grow the bottom pseudo-element's height to 50% (as if sand collected there), both animated over 1.2s, so the button looks like an hourglass emptying from top to bottom.",
};
