import type { ParametricButtonDef } from "../types";

export const retro: ParametricButtonDef = {
  id: "retro",
  name: "Retro",
  category: "Skeuomorphic",
  description:
    "A warm, embossed button with an inset highlight and a hard shadow step, reminiscent of early UI chrome.",
  tags: ["retro", "skeuomorphic", "warm"],
  label: "Download",
  kind: "parametric",
  accentMode: "retro-gradient",
  defaultAccent: "#f5a524",
  supportsBlur: false,
};
