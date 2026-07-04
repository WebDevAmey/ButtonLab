import type { CustomButtonDef } from "../types";

export const stickerPeel: CustomButtonDef = {
  id: "sticker-peel",
  name: "Sticker Peel",
  category: "Tactile",
  description:
    "A sticky-note colored button whose bottom-right corner lifts and curls like a peeling sticker on hover.",
  tags: ["peel", "sticker", "novel"],
  label: "Peel",
  kind: "custom",
  html: `<button class="btn-peel">Peel</button>`,
  css: `.btn-peel {
  position: relative;
  padding: 14px 34px;
  border-radius: 4px;
  background: #fefce8;
  color: #713f12;
  font-weight: 600;
  border: 1px solid #eab308;
  cursor: pointer;
  overflow: hidden;
}

.btn-peel::after {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 22px 22px;
  border-color: transparent transparent #fde047 transparent;
  transform-origin: bottom right;
  transition: transform 0.35s ease, border-width 0.35s ease;
  filter: drop-shadow(-2px -2px 3px rgba(0, 0, 0, 0.2));
}

.btn-peel:hover::after {
  border-width: 0 0 34px 34px;
  transform: rotate(-10deg) translate(3px, -3px);
}`,
  prompt:
    "Create a sticky-note colored button (background #fefce8, 1px #eab308 border, 4px radius, brown-yellow bold text, overflow hidden) labeled \"Peel\". Add an ::after pseudo-element in the bottom-right corner shaped as a small triangle (using border-width trick: 0 0 22px 22px with the bottom-left border colored #fde047 and the rest transparent), with a drop-shadow to look like a lifted paper edge. On hover, grow the triangle's border-width to 0 0 34px 34px and rotate it -10 degrees while nudging it up and left 3px, so the corner appears to peel further open like a sticker being lifted, animated over 0.35s.",
};
