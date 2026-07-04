import type { CustomButtonDef } from "../types";

export const compassLock: CustomButtonDef = {
  id: "compass-lock",
  name: "Compass Lock",
  category: "Effect",
  description:
    "A circular icon button styled like a compass, with four tick marks and a needle that swings around on hover.",
  tags: ["compass", "needle", "tailwind"],
  label: "Compass",
  kind: "custom",
  html: `<button class="group relative inline-flex h-16 w-16 items-center justify-center rounded-full border border-neutral-700 bg-neutral-950">
  <span class="absolute top-1 h-2 w-[1px] bg-neutral-600"></span>
  <span class="absolute bottom-1 h-2 w-[1px] bg-neutral-600"></span>
  <span class="absolute left-1 h-[1px] w-2 bg-neutral-600"></span>
  <span class="absolute right-1 h-[1px] w-2 bg-neutral-600"></span>
  <span class="absolute h-0 w-0 origin-center border-x-[5px] border-b-[14px] border-x-transparent border-b-rose-500 transition-transform duration-500 ease-out [transform:rotate(20deg)] group-hover:[transform:rotate(200deg)]"></span>
  <span class="absolute h-1.5 w-1.5 rounded-full bg-neutral-300"></span>
</button>`,
  css: "",
  prompt:
    "Using Tailwind CSS, create a 64x64px circular icon button with a neutral-700 border and neutral-950 background, styled like a compass. Add four thin 1px tick marks at the top, bottom, left, and right edges (neutral-600). Add a rose-500 triangular needle (built from a 0x0 div with transparent horizontal borders and a colored bottom border, forming a pointed shape) centered in the button, resting rotated 20 degrees. Add a small 6px neutral-300 dot centered on top as the needle's pivot. On hover, rotate the needle to 200 degrees over 500ms ease-out, so it swings around like a compass needle finding a new direction.",
};
