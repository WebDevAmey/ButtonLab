import type { CustomButtonDef } from "../types";

export const risingTide: CustomButtonDef = {
  id: "rising-tide",
  name: "Rising Tide",
  category: "Effect",
  description:
    "A button that fills from the bottom with a scalloped, wave-edged tide of color on hover.",
  tags: ["water", "wave", "tailwind"],
  label: "Fill Up",
  kind: "custom",
  html: `<button class="group relative isolate inline-flex h-14 w-40 items-center justify-center overflow-hidden rounded-lg border border-sky-700 bg-sky-950 font-semibold text-sky-100">
  <span class="absolute inset-x-0 bottom-0 z-0 h-0 bg-[radial-gradient(circle_at_10px_-6px,transparent_12px,#0ea5e9_13px)] bg-[length:20px_20px] bg-repeat-x transition-[height] duration-700 ease-out group-hover:h-3/5"></span>
  <span class="relative z-10">Fill Up</span>
</button>`,
  css: "",
  prompt:
    "Using Tailwind CSS, create a dark blue button (sky-950 background, sky-700 border, rounded-lg, sky-100 semibold text, overflow hidden) labeled \"Fill Up\". Add a full-width absolutely-positioned layer pinned to the bottom, starting at 0 height, whose background is a repeating radial-gradient (a transparent circle cut out near the top edge every 20px, backed by solid sky-500/#0ea5e9) so its top edge reads as a scalloped wave silhouette. On hover, animate that layer's height to 60% of the button over 700ms ease-out, so a wavy tide of blue rises up from the bottom to fill the button.",
};
