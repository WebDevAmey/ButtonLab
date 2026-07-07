import React from "react";

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
  /**
   * A self-contained natural-language prompt that, given to an AI coding
   * assistant, reproduces this exact button (layout, colors, effect).
   */
  prompt: string;
};

/**
 * Driven by `computeStyleSet` (src/lib/codegen.ts). Pick this when the
 * button's look can be expressed as accent color + a handful of knobs.
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
 */
export type CustomButtonDef = BaseButtonDef & {
  kind: "custom";
  html: string;
  css: string;
  js?: string;
};

/**
 * A React component button. Use this for interactive buttons that require
 * React hooks, Framer Motion, or complex stateful behavior.
 */
export type ComponentButtonDef = BaseButtonDef & {
  kind: "component";
  Component: React.ComponentType<any>;
};

/**
 * Serializable button data — no `Component` reference, safe to pass from
 * Server Components to Client Components.
 */
export type SerializableButtonDef = ParametricButtonDef | CustomButtonDef | (BaseButtonDef & { kind: "component" });

export type ButtonDef = ParametricButtonDef | CustomButtonDef | ComponentButtonDef;
