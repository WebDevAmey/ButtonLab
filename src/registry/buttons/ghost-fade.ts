import type { CustomButtonDef } from "../types";

export const ghostFade: CustomButtonDef = {
  id: "ghost-fade",
  name: "Ghost Fade",
  category: "Minimal",
  description: "A borderless ghost button whose background fades in softly on hover.",
  tags: ["ghost", "fade", "tailwind"],
  label: "Ghost Fade",
  kind: "custom",
  html: `<button class="rounded-lg bg-transparent px-6 py-3 font-medium text-zinc-700 transition-colors duration-300 hover:bg-zinc-900/5">
  Ghost Fade
</button>`,
  css: "",
  prompt:
    "Using Tailwind CSS, create a simple ghost button labeled \"Ghost Fade\" that is transparent by default with zinc-700 text, rounded-lg corners, and no border. On hover, fade in a very light zinc-900 background at 5% opacity over 300ms, with no other change.",
};
