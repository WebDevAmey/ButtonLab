import type { ParametricButtonDef } from "../types";

export const neumorphic: ParametricButtonDef = {
  id: "neumorphic",
  name: "Neumorphism",
  category: "Soft UI",
  description:
    "A soft, extruded button that looks pressed into the surface. Subtle, tactile, monochrome by nature.",
  tags: ["neumorphism", "soft-ui", "minimal"],
  label: "Continue",
  prompt:
    "Create a button labeled \"Continue\" on a dark #1c1d22 background with light gray #d4d4d8 text, 10px border radius, no border, and a neumorphic soft-extruded shadow using two offset shadows: 6px 6px 14px of a darker tone (#0a0a0c) and -6px -6px 14px of a lighter tone (#28292f). On hover, change the text color to a light gray accent. On press, flip the shadow to an inset version of the same two shadows so the button looks pressed into the surface.",
  kind: "parametric",
  accentMode: "neumorphic",
  defaultAccent: "#a1a1aa",
  supportsBlur: false,
};
