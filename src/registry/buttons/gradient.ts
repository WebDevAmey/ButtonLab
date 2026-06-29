import type { ParametricButtonDef } from "../types";

export const gradient: ParametricButtonDef = {
  id: "gradient",
  name: "Gradient",
  category: "Fill",
  description:
    "A vibrant two-tone gradient button with a soft ambient shadow. Great for primary calls to action.",
  tags: ["gradient", "primary", "cta"],
  label: "Get Started",
  kind: "parametric",
  accentMode: "gradient",
  defaultAccent: "#6366f1",
  supportsBlur: false,
};
