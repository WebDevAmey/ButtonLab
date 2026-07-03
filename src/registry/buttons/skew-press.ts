import type { CustomButtonDef } from "../types";

export const skewPress: CustomButtonDef = {
  id: "skew-press",
  name: "Skew Press",
  category: "Tactile",
  description: "A solid button that leans into a slight skew on hover and snaps back on press.",
  tags: ["skew", "tactile", "tailwind"],
  label: "Skew Press",
  kind: "custom",
  html: `<button class="rounded-md bg-zinc-900 px-6 py-3 font-medium text-white transition-transform duration-200 ease-out hover:-skew-x-3 active:skew-x-0 active:scale-95">
  Skew Press
</button>`,
  css: "",
  prompt:
    "Using Tailwind CSS, create a button labeled \"Skew Press\" with a solid zinc-900 background, white text, and rounded-md corners. On hover, skew it -3 degrees on the x-axis over 200ms ease-out. On press/active, remove the skew and scale the button down to 95%.",
};
