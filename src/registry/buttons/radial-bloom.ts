import type { CustomButtonDef } from "../types";

export const radialBloom: CustomButtonDef = {
  id: "radial-bloom",
  name: "Radial Bloom",
  category: "Effect",
  description:
    "An outlined rose button whose fill blooms outward from the center on hover via a scaling pseudo-element circle.",
  tags: ["bloom", "radial", "tailwind"],
  label: "Radial Bloom",
  prompt:
    "Using Tailwind CSS, create a button labeled \"Radial Bloom\" that is transparent with a 2px rose-600 border, rose-600 text, and rounded-lg corners. Add a before: pseudo-element behind the button (z-index -1): a small 32x32px rose-600 circle centered inside the button, scaled to 0. On hover, scale that circle up to 6x its size (well beyond the button's bounds) over 300ms ease-out so it blooms outward and fills the button, and transition the text color to white over 500ms.",
  kind: "custom",
  html: `<button class="relative z-10 inline-block cursor-pointer overflow-hidden rounded-lg border-2 border-rose-600 bg-transparent px-6 py-3 text-lg font-semibold text-rose-600 transition-colors duration-500 before:absolute before:left-1/2 before:top-1/2 before:z-[-1] before:h-8 before:w-8 before:-translate-x-1/2 before:-translate-y-1/2 before:scale-0 before:rounded-full before:bg-rose-600 before:transition-transform before:duration-300 before:ease-out before:content-[''] hover:text-white hover:before:scale-[6]">
  Radial Bloom
</button>`,
  css: "",
};
