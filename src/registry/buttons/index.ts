import type { ButtonDef } from "../types";
import { gradient } from "./gradient";
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
import { compassLock } from "./compass-lock";
import { eclipse } from "./eclipse";
import { gradientLink } from "./gradient-link";
import { playNow } from "./play-now";
import { shredder } from "./shredder";
import { chamberDoor } from "./chamber-door";
import { risingTide } from "./rising-tide";
import { dominoCascade } from "./domino-cascade";
import { paperFan } from "./paper-fan";
import { softPress } from "./soft-press";
import { inkAbsorption } from "./ink-absorption";
import { slidingHole } from "./sliding-hole";
import { gravityDrop } from "./gravity-drop";
import { slidingSlot } from "./sliding-slot";
import { inkStamp } from "./ink-stamp";
import { coinSlot } from "./coin-slot";
import { sandTimer } from "./sand-timer";
import { drawerPull } from "./draw-pull";
import { fogWipe } from "./fog-wipe";
import { dogEarFold } from "./dog-ear-fold";
import { tapeRetract } from "./tape-retract";
import { punchWindow } from "./punch-window";
import { apertureIris } from "./aperture-iris";
import { marionetteThread } from "./marionette-thread";
import { clayDent } from "./clay-dent";
import { depthFlip } from "./depth-flip";
import { dominoRow } from "./domino-row";
import { guillotineCut } from "./guillotine-cut";
import { dieRoll } from "./die-roll";
import { pinwheelSpin } from "./pinwheel-spin";
import { parallaxTilt } from "./parallax-tilt";
import { circuitTrace } from "./circuit-trace";
import { cipherDecode } from "./cipher-decode";
import { radarLock } from "./radar-lock";
import { shardBurst } from "./shard-burst";
import { amberKeycap } from "./amber-keycap";
import { frostedPane } from "./frosted-pane";
import { softEmboss } from "./soft-emboss";
import { magneticFilings } from "./magnetic-filings";
import { kintsugiSeam } from "./kintsugi-seam";
import { returnCarriage } from "./return-carriage";
import { spectrumWipe } from "./spectrum-wipe";
import { shimmerMask } from "./shimmer-mask";
import { emberCore } from "./ember-core";
import { neonTubeIgnite } from "./neon-tube-ignite";
import { starlightGenerate } from "./starlight-generate";
import { flashcardFlip } from "./flashcard-flip";
import { arcStart } from "./arc-start";
import { expandingPillSend } from "./expanding-pill";
import { emeraldPremium } from "./emerald-premium";
import { rainbowButton } from "./rainbow-button";

// Add your button's import above and slot it into this array — that's
// the only line that needs to change to register a new button.
export const buttons: ButtonDef[] = [
  gradient,
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
  compassLock,
  eclipse,
  gradientLink,
  playNow,
  shredder,
  chamberDoor,
  risingTide,
  dominoCascade,
  paperFan,
  softPress,
  inkAbsorption,
  slidingHole,
  gravityDrop,
  slidingSlot,
  inkStamp,
  coinSlot,
  sandTimer,
  drawerPull,
  fogWipe,
  dogEarFold,
  tapeRetract,
  punchWindow,
  apertureIris,
  marionetteThread,
  clayDent,
  depthFlip,
  dominoRow,
  guillotineCut,
  dieRoll,
  pinwheelSpin,
  parallaxTilt,
  circuitTrace,
  cipherDecode,
  radarLock,
  shardBurst,
  amberKeycap,
  frostedPane,
  softEmboss,
  magneticFilings,
  kintsugiSeam,
  returnCarriage,
  spectrumWipe,
  shimmerMask,
  emberCore,
  neonTubeIgnite,
  starlightGenerate,
  flashcardFlip,
  arcStart,
  expandingPillSend,
  emeraldPremium,
  rainbowButton,
];

export function getButton(id: string) {
  return buttons.find((b) => b.id === id);
}

/**
 * Server-safe version — strips `Component` so it can be passed from Server
 * Components to Client Components without serialization errors.
 */
export const serializableButtons = buttons.map((b) => {
  if (b.kind === "component") {
    const { Component: _, ...rest } = b;
    return rest;
  }
  return b;
});

export type { ButtonDef, ParametricButtonDef, CustomButtonDef, AccentMode, SerializableButtonDef } from "../types";
