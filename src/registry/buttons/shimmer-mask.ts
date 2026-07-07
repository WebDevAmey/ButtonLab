import type { ComponentButtonDef } from "../types";
import { ShimmerMaskComponent } from "./shimmer-mask-component";

export const shimmerMask: ComponentButtonDef = {
  id: "shimmer-mask",
  name: "Shimmer Mask",
  category: "Optical",
  description: "Theme-aware button with dual-layer shimmer: text shine mask and border gleam with synchronized Framer Motion animations.",
  tags: ["shimmer", "shine", "text-mask", "optical", "theme-aware", "framer-motion"],
  label: "Browse Components",
  kind: "component",
  Component: ShimmerMaskComponent,
  prompt: "A React component button using Framer Motion for dual-layer shimmer effects. Text content is masked with a linear-gradient that animates the --mask-x CSS variable from 100% to -100%, creating a diagonal light sweep. A border overlay gleams in sync with the text shine using the --shine CSS variable, which adapts to dark/light mode via Tailwind dark: classes. Both layers animate with 1s duration, repeat infinitely with 1s repeatDelay, and use spring transitions on hover/tap (scale 1.01/0.97).",
};