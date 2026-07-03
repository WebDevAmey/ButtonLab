import type { ParametricButtonDef } from "../types";

export const press: ParametricButtonDef = {
  id: "press",
  name: "3D Press",
  category: "Tactile",
  description:
    "A tactile button with a hard drop shadow that compresses on click, simulating a physical key press.",
  tags: ["3d", "tactile", "skeuomorphic"],
  label: "Click Me",
  prompt:
    "Create a button labeled \"Click Me\" with a solid green (#00b894) background, white text, 10px border radius, no border, and a hard flat drop shadow offset 6px straight down in a darker shade of green (no blur, like a 3D step). On hover, move the button down 2px and shrink the shadow offset to 4px. On press/active, move the button down 6px (fully flush with the shadow) and remove the shadow entirely, simulating a physical key press.",
  kind: "parametric",
  accentMode: "solid-step",
  defaultAccent: "#00b894",
  supportsBlur: false,
};
