import type { CustomButtonDef } from "../types";

export const chamberDoor: CustomButtonDef = {
  id: "chamber-door",
  name: "Chamber Door",
  category: "Effect",
  description:
    "A button split into two halves that fold open in 3D like a pair of blast doors, revealing a glowing chamber behind them on hover.",
  tags: ["3d", "doors", "tailwind"],
  label: "OPEN CHAMBER",
  kind: "custom",
  html: `<button class="group relative inline-block h-14 w-48 cursor-pointer bg-transparent [perspective:1000px] [transform-style:preserve-3d]">
  <div class="absolute inset-0 z-0 rounded bg-cyan-400 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"></div>

  <span class="absolute left-0 top-0 z-10 flex h-[50%] w-full origin-top items-end justify-center overflow-hidden border-x-2 border-t-2 border-white bg-neutral-900 font-bold text-white transition-transform duration-300 group-hover:[transform:rotateX(60deg)]">
    <span class="translate-y-[50%]">OPEN CHAMBER</span>
  </span>

  <span class="absolute bottom-0 left-0 z-10 flex h-[50%] w-full origin-bottom items-start justify-center overflow-hidden border-x-2 border-b-2 border-white bg-neutral-900 font-bold text-white transition-transform duration-300 group-hover:[transform:rotateX(-60deg)]">
    <span class="-translate-y-[50%]">OPEN CHAMBER</span>
  </span>
</button>`,
  css: "",
  prompt:
    "Using Tailwind CSS, create a 56px-tall, 192px-wide transparent button with 3D perspective enabled (perspective: 1000px, transform-style: preserve-3d). Behind everything, add a full-size cyan glow layer (blurred, invisible by default). Split the button's face into two neutral-900 halves, each showing the label \"OPEN CHAMBER\" (clipped so only its half is visible): the top half has a top+side white border and rotates from its top edge, the bottom half has a bottom+side white border and rotates from its bottom edge. On hover, fade in the cyan glow behind them, rotate the top half 60 degrees around the x-axis and the bottom half -60 degrees, so the two halves fold open in 3D like a pair of blast doors revealing a glowing chamber behind.",
};
