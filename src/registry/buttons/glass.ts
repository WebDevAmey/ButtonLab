import type { ParametricButtonDef } from "../types";

export const glass: ParametricButtonDef = {
  id: "glass",
  name: "Glassmorphism",
  category: "Translucent",
  description:
    "A frosted, translucent button that picks up the color of whatever sits behind it. Pairs well with rich backgrounds.",
  tags: ["glass", "translucent", "blur"],
  label: "Sign In",
  kind: "parametric",
  accentMode: "border-tint",
  defaultAccent: "#ffffff",
  supportsBlur: true,
};
