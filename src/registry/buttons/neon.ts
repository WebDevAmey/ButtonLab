import type { ParametricButtonDef } from "../types";

export const neon: ParametricButtonDef = {
  id: "neon",
  name: "Neon",
  category: "Glow",
  description:
    "A glowing outline button with a soft text-shadow that intensifies on hover. Built for dark, playful interfaces.",
  tags: ["neon", "glow", "playful"],
  label: "Play Now",
  prompt:
    "Create a button labeled \"Play Now\" on a dark background, transparent fill, a 1.5px solid border in a bright cyan-green (#00e0b0), text in the same color with a 6px text-shadow glow at 60% opacity, and 10px border radius. On hover, fill the background solid with that color, switch the text to a contrasting readable color, and add an 18px glow box-shadow at 80% opacity. On press, dim the brightness slightly.",
  kind: "parametric",
  accentMode: "glow-outline",
  defaultAccent: "#00e0b0",
  supportsBlur: false,
};
