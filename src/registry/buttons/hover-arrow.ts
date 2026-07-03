import type { CustomButtonDef } from "../types";

export const hoverArrow: CustomButtonDef = {
  id: "hover-arrow",
  name: "Hover Arrow",
  category: "Effect",
  description:
    "A pill button that swaps its label for an arrow on hover, sliding the old text out and the arrow in from opposite sides.",
  tags: ["arrow", "swap", "tailwind"],
  label: "Hover",
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
