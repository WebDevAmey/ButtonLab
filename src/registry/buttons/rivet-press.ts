import type { CustomButtonDef } from "../types";

export const rivetPress: CustomButtonDef = {
  id: "rivet-press",
  name: "Rivet Press",
  category: "Tactile",
  description:
    "A dark, industrial button with four corner rivets that light up in sequence on hover.",
  tags: ["rivet", "industrial", "tailwind"],
  label: "RIVETED",
  prompt:
    "Using Tailwind CSS, create a 56px-tall, 176px-wide button labeled \"RIVETED\" in bold tracked-out neutral-300 text on a dark vertical gradient background (neutral-800 to neutral-900) with a 2px neutral-700 border and rounded-md corners. Place four small 8x8px circular \"rivets\" (neutral-600) absolutely positioned in each corner. On hover of the button, turn each rivet amber-400 with a soft amber glow shadow, staggering each corner's transition with delays of 0ms, 75ms, 150ms, and 200ms, and change the label text to amber-300.",
  kind: "custom",
  html: `<button class="group relative inline-flex h-14 w-44 items-center justify-center rounded-md border-2 border-neutral-700 bg-gradient-to-b from-neutral-800 to-neutral-900 font-bold tracking-wide text-neutral-300">
  <span class="absolute left-1.5 top-1.5 h-2 w-2 rounded-full bg-neutral-600 transition-all delay-0 duration-300 group-hover:bg-amber-400 group-hover:shadow-[0_0_6px_2px_rgba(251,191,36,0.8)]"></span>
  <span class="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-neutral-600 transition-all delay-75 duration-300 group-hover:bg-amber-400 group-hover:shadow-[0_0_6px_2px_rgba(251,191,36,0.8)]"></span>
  <span class="absolute bottom-1.5 left-1.5 h-2 w-2 rounded-full bg-neutral-600 transition-all delay-150 duration-300 group-hover:bg-amber-400 group-hover:shadow-[0_0_6px_2px_rgba(251,191,36,0.8)]"></span>
  <span class="absolute bottom-1.5 right-1.5 h-2 w-2 rounded-full bg-neutral-600 transition-all delay-200 duration-300 group-hover:bg-amber-400 group-hover:shadow-[0_0_6px_2px_rgba(251,191,36,0.8)]"></span>
  <span class="relative z-10 transition-colors duration-300 group-hover:text-amber-300">RIVETED</span>
</button>`,
  css: "",
};
