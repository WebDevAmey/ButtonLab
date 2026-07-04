import type { CustomButtonDef } from "../types";

export const paperFan: CustomButtonDef = {
  id: "paper-fan",
  name: "Paper Fan",
  category: "Playful",
  description:
    "A button with four stacked blades behind the label that unfold outward like a hand fan opening on hover.",
  tags: ["fan", "unfold", "tailwind"],
  label: "Unfold",
  kind: "custom",
  html: `<button class="group relative inline-flex h-14 w-40 items-center justify-center overflow-visible rounded-md border border-rose-300 bg-rose-50 font-semibold text-rose-700">
  <span class="pointer-events-none absolute bottom-1 left-1/2 h-10 w-2 origin-bottom -translate-x-1/2 rounded-t-full bg-rose-300 transition-transform duration-300 ease-out group-hover:[transform:translateX(-50%)_rotate(-40deg)]"></span>
  <span class="pointer-events-none absolute bottom-1 left-1/2 h-10 w-2 origin-bottom -translate-x-1/2 rounded-t-full bg-rose-400 transition-transform duration-300 ease-out group-hover:[transform:translateX(-50%)_rotate(-13deg)]"></span>
  <span class="pointer-events-none absolute bottom-1 left-1/2 h-10 w-2 origin-bottom -translate-x-1/2 rounded-t-full bg-rose-400 transition-transform duration-300 ease-out group-hover:[transform:translateX(-50%)_rotate(13deg)]"></span>
  <span class="pointer-events-none absolute bottom-1 left-1/2 h-10 w-2 origin-bottom -translate-x-1/2 rounded-t-full bg-rose-300 transition-transform duration-300 ease-out group-hover:[transform:translateX(-50%)_rotate(40deg)]"></span>
  <span class="relative z-10">Unfold</span>
</button>`,
  css: "",
  prompt:
    "Using Tailwind CSS, create a light rose button (rose-50 background, rose-300 border, rounded-md, rose-700 semibold text, overflow visible) labeled \"Unfold\". Behind the label, stack four thin rounded-top blades (2px wide, 40px tall, alternating rose-300/rose-400), all centered at the bottom, resting overlapped with no rotation. On hover, rotate them to -40, -13, 13, and 40 degrees respectively (each pivoting from its bottom-center origin), so they fan out symmetrically behind the label like a hand fan opening, animated over 300ms ease-out.",
};
