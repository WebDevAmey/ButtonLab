import type { CustomButtonDef } from "../types";

export const shredder: CustomButtonDef = {
  id: "shredder",
  name: "Shredder",
  category: "Effect",
  description:
    "A button whose label splits into two color-clipped strips that shear apart vertically on hover, like paper through a shredder.",
  tags: ["shred", "clip-path", "tailwind"],
  label: "SHREDDER",
  kind: "custom",
  html: `<button class="group relative inline-block cursor-pointer overflow-hidden rounded border-2 border-neutral-800 bg-neutral-900 px-8 py-3 text-xl font-black tracking-wider text-transparent">
  SHREDDER
  <span class="absolute inset-0 flex items-center justify-center bg-neutral-900 text-rose-500 transition-transform duration-300 ease-out [clip-path:polygon(0_0,_100%_0,_100%_33%,_0_33%,_0_66%,_100%_66%,_100%_100%,_0_100%)] group-hover:translate-y-2">
    SHREDDER
  </span>
  <span class="absolute inset-0 flex items-center justify-center bg-neutral-900 text-cyan-400 transition-transform duration-300 ease-out [clip-path:polygon(0_33%,_100%_33%,_100%_66%,_0_66%,_0_100%,_100%_100%)] group-hover:-translate-y-2">
    SHREDDER
  </span>
</button>`,
  css: "",
  prompt:
    "Using Tailwind CSS, create a bold tracked-out button labeled \"SHREDDER\" with a neutral-900 background, 2px neutral-800 border, and transparent base text (so the base label is invisible, just reserving layout space). Layer two absolutely-positioned copies of the same label on top, both on a neutral-900 background: the first in rose-500, clipped with clip-path to only show the top and bottom thirds of the label (polygon covering 0-33% and 66-100% vertically); the second in cyan-400, clipped to only show the middle third (33-66%). On hover, translate the first (rose) copy down 2px and the second (cyan) copy up 2px, so the label appears to shear apart into offset colored strips like paper being shredded.",
};
