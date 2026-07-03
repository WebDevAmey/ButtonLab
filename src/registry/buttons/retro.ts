import type { ParametricButtonDef } from "../types";

export const retro: ParametricButtonDef = {
  id: "retro",
  name: "Retro",
  category: "Skeuomorphic",
  description:
    "A warm, embossed button with an inset highlight and a hard shadow step, reminiscent of early UI chrome.",
  tags: ["retro", "skeuomorphic", "warm"],
  label: "Download",
  prompt:
    "Create a button labeled \"Download\" with a warm amber vertical gradient background (lighter amber #f5a524 tint at top, base amber at bottom), a 1px border in a darker shade of amber, dark amber-brown bold text, 10px border radius, an inset top highlight (inset 0 1px 0 rgba(255,255,255,0.6)), and a hard 3px drop shadow in the darker amber shade below the button (no blur). On press, move the button down 2px and shrink the drop shadow to 1px while keeping the inset highlight.",
  kind: "parametric",
  accentMode: "retro-gradient",
  defaultAccent: "#f5a524",
  supportsBlur: false,
};
