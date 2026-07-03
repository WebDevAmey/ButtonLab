import type { ParametricButtonDef } from "../types";

export const gradient: ParametricButtonDef = {
  id: "gradient",
  name: "Gradient",
  category: "Fill",
  description:
    "A vibrant two-tone gradient button with a soft ambient shadow. Great for primary calls to action.",
  tags: ["gradient", "primary", "cta"],
  label: "Get Started",
  prompt:
    "Create a button labeled \"Get Started\" with a 135deg linear gradient background from #6366f1 to a darker shade of the same hue, white text, 600 font weight, 10px border radius, no border, and a soft ambient drop shadow tinted the accent color at 60% opacity. On hover, raise the brightness by 8% and enlarge the shadow. On press, dim the brightness by 4%.",
  kind: "parametric",
  accentMode: "gradient",
  defaultAccent: "#6366f1",
  supportsBlur: false,
};
