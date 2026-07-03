import type { CustomButtonDef } from "../types";

export const letterSpacing: CustomButtonDef = {
  id: "letter-spacing",
  name: "Letter Spacing",
  category: "Minimal",
  description: "A quiet uppercase button whose letters spread apart on hover.",
  tags: ["typography", "tracking", "tailwind"],
  label: "Explore",
  kind: "custom",
  html: `<button class="rounded-none border-b border-zinc-900 bg-transparent px-1 py-2 text-sm font-semibold uppercase tracking-widest text-zinc-900 transition-all duration-300 hover:tracking-[0.3em] hover:text-zinc-500">
  Explore
</button>`,
  css: "",
  prompt:
    "Using Tailwind CSS, create a minimal uppercase text button labeled \"Explore\" with no background, a bottom border only (border-b) in zinc-900, semibold zinc-900 text, and a wide letter-spacing (tracking-widest). On hover, increase the letter-spacing further (tracking to 0.3em) and fade the text to zinc-500, both animated over 300ms.",
};
