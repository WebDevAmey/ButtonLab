import type { ButtonDef } from "../types";
import { gradient } from "./gradient";
import { neumorphic } from "./neumorphic";
import { glass } from "./glass";
import { outline } from "./outline";
import { neon } from "./neon";
import { press } from "./press";
import { gooey } from "./gooey";
import { retro } from "./retro";
import { shine } from "./shine";

// Add your button's import above and slot it into this array — that's
// the only line that needs to change to register a new button.
export const buttons: ButtonDef[] = [
  gradient,
  neumorphic,
  glass,
  outline,
  neon,
  press,
  gooey,
  retro,
  shine,
];

export function getButton(id: string) {
  return buttons.find((b) => b.id === id);
}

export type { ButtonDef, ParametricButtonDef, CustomButtonDef, AccentMode } from "../types";
