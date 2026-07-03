import type { CustomButtonDef } from "../types";

export const doubleBorder: CustomButtonDef = {
  id: "double-border",
  name: "Double Border",
  category: "Effect",
  description: "A button with a second offset border that snaps into place on hover.",
  tags: ["border", "offset", "tailwind"],
  label: "Double Border",
  kind: "custom",
  html: `<button class="relative rounded-md border-2 border-zinc-900 bg-white px-6 py-3 font-medium text-zinc-900 outline outline-2 outline-offset-4 outline-zinc-900/0 transition-[outline-offset,outline-color] duration-300 hover:outline-offset-2 hover:outline-zinc-900/100">
  Double Border
</button>`,
  css: "",
  prompt:
    "Using Tailwind CSS, create a button labeled \"Double Border\" with a white background, a 2px solid zinc-900 border, rounded-md corners, and zinc-900 text. Add a second 2px outline in zinc-900 that starts fully transparent and offset 4px from the button. On hover, fade the outline to full opacity and reduce its offset to 2px over 300ms, so a second border snaps in closer to the first.",
};
