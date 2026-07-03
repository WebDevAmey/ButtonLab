import type { CustomButtonDef } from "../types";

export const outlineScale: CustomButtonDef = {
  id: "outline-scale",
  name: "Outline Scale",
  category: "Minimal",
  description:
    "A simple black-outlined button that scales up slightly and shifts to orange with a lifted shadow on hover.",
  tags: ["outline", "scale", "tailwind"],
  label: "Outline Button",
  kind: "custom",
  html: `<button class="rounded-full border border-black px-4 py-2 text-black shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:border-orange-600 hover:text-orange-600 hover:shadow-lg">
  Outline Button
</button>`,
  css: "",
};
