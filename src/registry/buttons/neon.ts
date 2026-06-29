import type { ParametricButtonDef } from "../types";

export const neon: ParametricButtonDef = {
  id: "neon",
  name: "Neon",
  category: "Glow",
  description:
    "A glowing outline button with a soft text-shadow that intensifies on hover. Built for dark, playful interfaces.",
  tags: ["neon", "glow", "playful"],
  label: "Play Now",
  kind: "parametric",
  accentMode: "glow-outline",
  defaultAccent: "#00e0b0",
  supportsBlur: false,
};
