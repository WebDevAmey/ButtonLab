import type { ParametricButtonDef } from "../types";

export const outline: ParametricButtonDef = {
  id: "outline",
  name: "Outline",
  category: "Minimal",
  description:
    "A quiet, minimal button that fills in on hover. Ideal for secondary actions next to a primary button.",
  tags: ["outline", "minimal", "secondary"],
  label: "Learn More",
  kind: "parametric",
  accentMode: "border-tint",
  defaultAccent: "#27272a",
  supportsBlur: false,
};
