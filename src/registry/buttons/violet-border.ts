import type { CustomButtonDef } from "../types";

export const violetBorder: CustomButtonDef = {
  id: "violet-border",
  name: "Violet Border",
  category: "Effect",
  description:
    "A violet outlined button whose bottom border flips to the top on hover, with a brightness lift and a press-down opacity dip.",
  tags: ["violet", "border", "tailwind"],
  label: "Hover Me",
  kind: "custom",
  html: `<button class="group relative overflow-hidden rounded-md border border-b-4 border-violet-400 bg-violet-950 px-4 py-2 font-medium text-violet-400 outline-none duration-300 hover:border-b hover:border-t-4 hover:brightness-150 active:opacity-75">
  Hover Me
</button>`,
  css: "",
};
