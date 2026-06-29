export type AccentMode =
  | "gradient"
  | "neumorphic"
  | "border-tint"
  | "glow-outline"
  | "solid-step"
  | "solid-pill"
  | "retro-gradient";

type BaseButtonDef = {
  id: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  label: string;
};

/**
 * Driven by `computeStyleSet` (src/lib/codegen.ts). Pick this when the
 * button's look can be expressed as accent color + a handful of knobs —
 * it gets the live playground (color, radius, blur, etc.) for free.
 */
export type ParametricButtonDef = BaseButtonDef & {
  kind: "parametric";
  accentMode: AccentMode;
  defaultAccent: string;
  supportsBlur: boolean;
};

/**
 * A hand-written, self-contained snippet — the cssbuttons.io model. Pick
 * this for designs that don't reduce to a single accent color (gooey
 * filters, multi-layer pseudo-elements, keyframe animations, icons...).
 * No playground; the HTML/CSS tabs show exactly what you wrote.
 */
export type CustomButtonDef = BaseButtonDef & {
  kind: "custom";
  html: string;
  css: string;
};

export type ButtonDef = ParametricButtonDef | CustomButtonDef;
