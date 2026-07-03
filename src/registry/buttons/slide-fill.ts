import type { CustomButtonDef } from "../types";

export const slideFill: CustomButtonDef = {
  id: "slide-fill",
  name: "Slide Fill",
  category: "Effect",
  description:
    "A bordered button whose fill color slides up from below on hover, built with a single pseudo-element and Tailwind's before: utilities.",
  tags: ["slide", "fill", "tailwind"],
  label: "Get in touch",
  prompt:
    "Using Tailwind CSS, create a button labeled \"Get in touch\" with a 2px black border, rounded corners, amber-500 background, black text, and overflow hidden. Add a full-size pseudo-element behind the text (before:) filled emerald-500 and translated fully down (translate-y-full) with a 300ms transition. On hover, translate that pseudo-element to y-0 so it slides up to fill the button, and change the text color to white.",
  kind: "custom",
  html: `<button class="relative z-10 overflow-hidden rounded border-2 border-black bg-amber-500 px-8 py-3 text-black transition-colors duration-300 before:absolute before:inset-0 before:-z-10 before:bg-emerald-500 before:translate-y-full before:transition-transform before:duration-300 hover:text-white hover:before:translate-y-0">
  Get in touch
</button>`,
  css: "",
};
