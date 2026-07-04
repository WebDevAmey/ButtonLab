import type { CustomButtonDef } from "../types";

export const dominoCascade: CustomButtonDef = {
  id: "domino-cascade",
  name: "Domino Cascade",
  category: "Playful",
  description:
    "A button with a row of small tiles that tip over one after another like falling dominoes on hover.",
  tags: ["domino", "cascade", "tailwind"],
  label: "Cascade",
  kind: "custom",
  html: `<button class="group inline-flex h-14 w-48 items-center justify-center gap-1 rounded-md border border-stone-700 bg-stone-900 px-4 font-semibold text-stone-100">
  <span class="mr-2">Cascade</span>
  <span class="h-6 w-1.5 origin-bottom bg-stone-300 transition-transform delay-0 duration-300 group-hover:[transform:rotateZ(70deg)]"></span>
  <span class="h-6 w-1.5 origin-bottom bg-stone-300 transition-transform delay-100 duration-300 group-hover:[transform:rotateZ(70deg)]"></span>
  <span class="h-6 w-1.5 origin-bottom bg-stone-300 transition-transform delay-200 duration-300 group-hover:[transform:rotateZ(70deg)]"></span>
  <span class="h-6 w-1.5 origin-bottom bg-stone-300 transition-transform delay-300 duration-300 group-hover:[transform:rotateZ(70deg)]"></span>
</button>`,
  css: "",
  prompt:
    "Using Tailwind CSS, create a dark button (stone-900 background, stone-700 border, rounded-md, stone-100 semibold text) labeled \"Cascade\" followed by four thin 6px-wide, 24px-tall stone-300 tiles standing upright side by side, each with its rotation origin at the bottom. On hover, rotate each tile 70 degrees clockwise (rotateZ) with staggered delays of 0ms, 100ms, 200ms, and 300ms, so they tip over in sequence like a row of falling dominoes.",
};
