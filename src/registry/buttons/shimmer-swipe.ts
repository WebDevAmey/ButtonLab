import type { CustomButtonDef } from "../types";

export const shimmerSwipe: CustomButtonDef = {
  id: "shimmer-swipe",
  name: "Shimmer Swipe",
  category: "Effect",
  description:
    "A vivid indigo button with a soft light band that swipes across it on hover.",
  tags: ["shimmer", "swipe", "tailwind"],
  label: "Shimmer Swipe",
  kind: "custom",
  html: `<button class="group relative overflow-hidden rounded-xl bg-indigo-600 px-10 py-4 font-semibold text-white shadow-lg transition hover:scale-105 hover:shadow-indigo-500/40">
  <span class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition duration-700 ease-out group-hover:translate-x-full"></span>
  <span class="relative z-10">Shimmer Swipe</span>
</button>`,
  css: "",
};
