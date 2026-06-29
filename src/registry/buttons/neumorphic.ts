import type { ParametricButtonDef } from "../types";

export const neumorphic: ParametricButtonDef = {
  id: "neumorphic",
  name: "Neumorphism",
  category: "Soft UI",
  description:
    "A soft, extruded button that looks pressed into the surface. Subtle, tactile, monochrome by nature.",
  tags: ["neumorphism", "soft-ui", "minimal"],
  label: "Continue",
  kind: "parametric",
  accentMode: "neumorphic",
  defaultAccent: "#a1a1aa",
  supportsBlur: false,
};
