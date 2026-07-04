import type { ButtonDef } from "../types";
import { gradient } from "./gradient";
import { neumorphic } from "./neumorphic";
import { glass } from "./glass";
import { outline } from "./outline";
import { neon } from "./neon";
import { press } from "./press";
import { retro } from "./retro";
import { shine } from "./shine";
import { slideFill } from "./slide-fill";
import { rivetPress } from "./rivet-press";
import { shimmerSwipe } from "./shimmer-swipe";
import { xrayScanner } from "./xray-scanner";
import { underlineHover } from "./underline-hover";
import { tallyStrike } from "./tally-strike";
import { scanRing } from "./scan-ring";
import { violetBorder } from "./violet-border";
import { radialBloom } from "./radial-bloom";
import { slideText } from "./slide-text";
import { hoverArrow } from "./hover-arrow";
import { liquidFill } from "./liquid-fill";
import { splitCurtain } from "./split-curtain";
import { pulseSeismograph } from "./pulse-seismograph";
import { outlineScale } from "./outline-scale";
import { ghostFade } from "./ghost-fade";
import { statusDot } from "./status-dot";
import { skewPress } from "./skew-press";
import { doubleBorder } from "./double-border";
import { letterSpacing } from "./letter-spacing";
import { orbitPing } from "./orbit-ping";
import { terminalType } from "./terminal-type";
import { stickerPeel } from "./sticker-peel";
import { hourglassDrain } from "./hourglass-drain";
import { morseSos } from "./morse-sos";

// Add your button's import above and slot it into this array — that's
// the only line that needs to change to register a new button.
export const buttons: ButtonDef[] = [
  gradient,
  neumorphic,
  glass,
  outline,
  neon,
  press,
  retro,
  shine,
  slideFill,
  rivetPress,
  shimmerSwipe,
  xrayScanner,
  underlineHover,
  tallyStrike,
  scanRing,
  violetBorder,
  radialBloom,
  slideText,
  hoverArrow,
  liquidFill,
  splitCurtain,
  pulseSeismograph,
  outlineScale,
  ghostFade,
  statusDot,
  skewPress,
  doubleBorder,
  letterSpacing,
  orbitPing,
  terminalType,
  stickerPeel,
  hourglassDrain,
  morseSos,
];

export function getButton(id: string) {
  return buttons.find((b) => b.id === id);
}

export type { ButtonDef, ParametricButtonDef, CustomButtonDef, AccentMode } from "../types";
