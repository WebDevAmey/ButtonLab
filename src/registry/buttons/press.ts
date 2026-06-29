import type { ParametricButtonDef } from "../types";

export const press: ParametricButtonDef = {
  id: "press",
  name: "3D Press",
  category: "Tactile",
  description:
    "A tactile button with a hard drop shadow that compresses on click, simulating a physical key press.",
  tags: ["3d", "tactile", "skeuomorphic"],
  label: "Click Me",
  kind: "parametric",
  accentMode: "solid-step",
  defaultAccent: "#00b894",
  supportsBlur: false,
};
