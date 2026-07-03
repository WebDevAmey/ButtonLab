import type { CustomButtonDef } from "../types";

export const violetBorder: CustomButtonDef = {
  id: "violet-border",
  name: "Violet Border",
  category: "Effect",
  description:
    "A violet outlined button whose bottom border flips to the top on hover, with a brightness lift and a press-down opacity dip.",
  tags: ["violet", "border", "tailwind"],
  label: "Hover Me",
  prompt:
    "Using Tailwind CSS, create a button labeled \"Hover Me\" with a violet-950 background, violet-400 text, rounded-md corners, and a violet-400 border that is 4px thick on the bottom only (border-b-4) with no outline. On hover, flip the thick border to the top instead (border-t-4, border-b back to 1px) and increase the brightness by 50%, all animated over 300ms. On press, drop the opacity to 75%.",
  kind: "custom",
  html: `<button class="group relative overflow-hidden rounded-md border border-b-4 border-violet-400 bg-violet-950 px-4 py-2 font-medium text-violet-400 outline-none duration-300 hover:border-b hover:border-t-4 hover:brightness-150 active:opacity-75">
  Hover Me
</button>`,
  css: "",
};
