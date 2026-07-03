import type { CustomButtonDef } from "../types";

export const outlineScale: CustomButtonDef = {
  id: "outline-scale",
  name: "Outline Scale",
  category: "Minimal",
  description:
    "A simple black-outlined button that scales up slightly and shifts to orange with a lifted shadow on hover.",
  tags: ["outline", "scale", "tailwind"],
  label: "Outline Button",
  prompt:
    "Using Tailwind CSS, create a pill-shaped button labeled \"Outline Button\" with a 1px black border, black text, rounded-full corners, and a medium drop shadow. On hover, scale the button up to 105%, change the border and text color to orange-600, and intensify the shadow to large, all animated over 300ms ease-in-out.",
  kind: "custom",
  html: `<button class="rounded-full border border-black px-4 py-2 text-black shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:border-orange-600 hover:text-orange-600 hover:shadow-lg">
  Outline Button
</button>`,
  css: "",
};
