import type { CustomButtonDef } from "../types";

export const underlineHover: CustomButtonDef = {
  id: "underline-hover",
  name: "Underline Hover",
  category: "Minimal",
  description: "A plain text button with an underline that grows in from the left on hover.",
  tags: ["underline", "text", "tailwind"],
  label: "Hover Me",
  kind: "custom",
  html: `<button class="group px-6 py-3 text-lg font-medium text-indigo-600">
  <span class="relative inline-block">
    Hover Me
    <span class="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-indigo-600 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
  </span>
</button>`,
  css: "",
};
