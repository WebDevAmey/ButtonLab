import type { ParametricButtonDef } from "../types";

export const glass: ParametricButtonDef = {
  id: "glass",
  name: "Glassmorphism",
  category: "Translucent",
  description:
    "A frosted, translucent button that picks up the color of whatever sits behind it. Pairs well with rich backgrounds.",
  tags: ["glass", "translucent", "blur"],
  label: "Sign In",
  prompt:
    "Create a button labeled \"Sign In\" with a glassmorphism look: background is a near-black color at 8% opacity, a 1px border of the same color at 18% opacity, backdrop-filter blur of 8px, readable text color, and 10px border radius. On hover, raise the background opacity to 14%. On press, dim the brightness slightly.",
  kind: "parametric",
  accentMode: "border-tint",
  defaultAccent: "#18181b",
  supportsBlur: true,
};
