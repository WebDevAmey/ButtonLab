import type { CustomButtonDef } from "../types";

export const statusDot: CustomButtonDef = {
  id: "status-dot",
  name: "Status Dot",
  category: "Minimal",
  description: "A quiet button with a small dot that pulses awake on hover.",
  tags: ["dot", "status", "tailwind"],
  label: "Available",
  kind: "custom",
  html: `<button class="group inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-700 transition-colors duration-300 hover:border-zinc-400">
  <span class="h-2 w-2 rounded-full bg-emerald-500 transition-transform duration-300 group-hover:scale-125"></span>
  Available
</button>`,
  css: "",
  prompt:
    "Using Tailwind CSS, create a pill-shaped button labeled \"Available\" with a white background, zinc-300 border, zinc-700 text, and a small 8x8px emerald-500 rounded-full dot to the left of the label. On hover, darken the border to zinc-400 and scale the dot up to 125%, both over 300ms.",
};
