import type { ComponentButtonDef } from "../types";
import { RainbowButton } from "@/components/ui/rainbow-button";

export const rainbowButton: ComponentButtonDef = {
  id: "rainbow-button",
  name: "Rainbow Button",
  category: "Magic",
  description: "A button with an animated rainbow gradient border and a soft glow underneath.",
  tags: ["rainbow", "gradient", "animated", "glow"],
  label: "Get Started",
  kind: "component",
  Component: RainbowButton,
  prompt: "A dark button with an animated rainbow gradient running along its border and a soft blur glow underneath. The gradient cycles horizontally with a smooth animation, creating a vibrant, magical border effect.",
};
