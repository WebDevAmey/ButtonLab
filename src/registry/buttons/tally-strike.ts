import type { CustomButtonDef } from "../types";

export const tallyStrike: CustomButtonDef = {
  id: "tally-strike",
  name: "Tally Strike",
  category: "Playful",
  description:
    "A monospace button that draws four tally marks in sequence on hover, the last one struck through.",
  tags: ["tally", "mono", "tailwind"],
  label: "TALLY",
  kind: "custom",
  html: `<button class="group inline-flex h-14 w-44 items-center justify-center gap-1.5 rounded-md border border-neutral-700 bg-neutral-950 font-mono text-sm text-neutral-200">
  <span class="relative z-10 mr-2">TALLY</span>
  <span class="h-5 w-[2px] origin-bottom scale-y-0 bg-rose-500 transition-transform delay-0 duration-200 group-hover:scale-y-100"></span>
  <span class="h-5 w-[2px] origin-bottom scale-y-0 bg-rose-500 transition-transform delay-100 duration-200 group-hover:scale-y-100"></span>
  <span class="h-5 w-[2px] origin-bottom scale-y-0 bg-rose-500 transition-transform delay-200 duration-200 group-hover:scale-y-100"></span>
  <span class="h-5 w-[2px] origin-bottom rotate-[20deg] scale-y-0 bg-rose-500 transition-transform delay-300 duration-200 group-hover:scale-y-100"></span>
</button>`,
  css: "",
};
