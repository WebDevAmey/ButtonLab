import type { ParametricButtonDef } from "../types";

export const outline: ParametricButtonDef = {
  id: "outline",
  name: "Outline",
  category: "Minimal",
  description:
    "A quiet, minimal button that fills in on hover. Ideal for secondary actions next to a primary button.",
  tags: ["outline", "minimal", "secondary"],
  label: "Learn More",
  prompt:
    "Create a button labeled \"Learn More\" that is transparent with a 1.5px solid dark border (#27272a) and dark text of the same color, 10px border radius, no shadow. On hover, fill the background solid with that same dark color and switch the text to a readable contrasting color (white). On press, dim the brightness slightly.",
  kind: "parametric",
  accentMode: "border-tint",
  defaultAccent: "#27272a",
  supportsBlur: false,
};
