import type { CustomButtonDef } from "../types";

export const hoverArrow: CustomButtonDef = {
  id: "hover-arrow",
  name: "Hover Arrow",
  category: "Effect",
  description:
    "A pill button that swaps its label for an arrow on hover, sliding the old text out and the arrow in from opposite sides.",
  tags: ["arrow", "swap", "tailwind"],
  label: "Hover",
  prompt:
    "Using Tailwind CSS, create a 52px-tall, at-least-120px-wide pill button (rounded-full) with a 2px blue-600 border, white background, and overflow hidden, labeled \"Hover\" in blue-600 text. Add a second absolutely-positioned full-size span containing a right-arrow (→) on a blue-600 background with white text, starting translated fully off-screen to the left and invisible. On hover of the button, translate the \"Hover\" label fully to the right and fade it out, while translating the arrow span to x-0 and fading it in, both over 300ms, so the label appears to swap for an arrow.",
  kind: "custom",
  html: `<button class="group relative h-[52px] min-w-[120px] overflow-hidden rounded-full border-2 border-blue-600 bg-white px-8 py-3 font-medium text-white">
  <span class="block transform text-blue-600 transition-all duration-300 group-hover:translate-x-full group-hover:opacity-0">
    Hover
  </span>
  <span class="absolute inset-0 flex -translate-x-full transform items-center justify-center bg-blue-600 text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
    →
  </span>
</button>`,
  css: "",
};
