import type { ButtonDef, ParametricButtonDef } from "@/registry/buttons";
import { Controls, defaultControls, sizePresets } from "@/lib/playground-types";
import { hexToRgba, readableTextColor, shade } from "@/lib/color";

export type StyleMap = Record<string, string | number>;

export type StyleSet = {
  base: StyleMap;
  hover: StyleMap;
  active: StyleMap;
};

export function computeStyleSet(button: ParametricButtonDef, controls: Controls): StyleSet {
  const { radius, size, accent, shadow, speed, blur, glow } = controls;
  const preset = sizePresets[size];

  const base: StyleMap = {
    fontWeight: 600,
    paddingTop: preset.paddingY,
    paddingBottom: preset.paddingY,
    paddingLeft: preset.paddingX,
    paddingRight: preset.paddingX,
    fontSize: preset.fontSize,
    borderRadius: radius,
    cursor: "pointer",
    border: "none",
    transitionProperty: "all",
    transitionDuration: `${speed}ms`,
    transitionTimingFunction: "ease",
  };

  switch (button.accentMode) {
    case "gradient": {
      base.background = `linear-gradient(135deg, ${accent}, ${shade(accent, 40)})`;
      base.color = readableTextColor(accent);
      base.boxShadow = shadow ? `0 8px 20px -8px ${hexToRgba(accent, 0.6)}` : "none";
      if (glow) base.boxShadow = `${base.boxShadow !== "none" ? base.boxShadow + ", " : ""}0 0 24px ${hexToRgba(accent, 0.55)}`;
      return {
        base,
        hover: { filter: "brightness(1.08)", boxShadow: `0 10px 24px -6px ${hexToRgba(accent, 0.7)}` },
        active: { filter: "brightness(0.96)" },
      };
    }
    case "neumorphic": {
      base.background = "#1c1d22";
      base.color = "#d4d4d8";
      base.boxShadow = shadow ? "6px 6px 14px #0a0a0c, -6px -6px 14px #28292f" : "none";
      return {
        base,
        hover: { color: accent },
        active: { boxShadow: "inset 4px 4px 10px #0a0a0c, inset -4px -4px 10px #28292f" },
      };
    }
    case "border-tint": {
      if (button.supportsBlur) {
        base.background = hexToRgba(accent, 0.08);
        base.border = `1px solid ${hexToRgba(accent, 0.18)}`;
        base.backdropFilter = `blur(${blur}px)`;
        base.color = readableTextColor(accent);
      } else {
        base.background = "transparent";
        base.border = `1.5px solid ${accent}`;
        base.color = accent;
      }
      if (glow) base.boxShadow = `0 0 ${10 + blur}px ${hexToRgba(accent, 0.35)}`;
      return {
        base,
        hover: button.supportsBlur
          ? { background: hexToRgba(accent, 0.14) }
          : { background: accent, color: readableTextColor(accent), borderColor: accent },
        active: { filter: "brightness(0.96)" },
      };
    }
    case "glow-outline": {
      base.background = "transparent";
      base.border = `1.5px solid ${accent}`;
      base.color = accent;
      base.textShadow = `0 0 6px ${hexToRgba(accent, 0.6)}`;
      base.boxShadow = glow ? `0 0 ${8 + blur}px ${hexToRgba(accent, 0.5)}` : "none";
      return {
        base,
        hover: { background: accent, color: readableTextColor(accent), boxShadow: `0 0 18px ${hexToRgba(accent, 0.8)}` },
        active: { filter: "brightness(0.95)" },
      };
    }
    case "solid-step": {
      const step = shade(accent, -30);
      base.background = accent;
      base.color = readableTextColor(accent);
      base.boxShadow = shadow ? `0 6px 0 ${step}` : "none";
      return {
        base,
        hover: { transform: "translateY(2px)", boxShadow: shadow ? `0 4px 0 ${step}` : "none" },
        active: { transform: "translateY(6px)", boxShadow: shadow ? `0 0 0 ${step}` : "none" },
      };
    }
    case "solid-pill": {
      base.background = accent;
      base.color = readableTextColor(accent);
      base.boxShadow = glow ? `0 0 20px ${hexToRgba(accent, 0.5)}` : "none";
      return {
        base,
        hover: { transform: "scale(1.06)", borderRadius: 14 },
        active: { transform: "scale(0.96)" },
      };
    }
    case "retro-gradient": {
      const border = shade(accent, -25);
      const text = shade(accent, -75);
      base.background = `linear-gradient(180deg, ${shade(accent, 40)}, ${accent})`;
      base.border = `1px solid ${border}`;
      base.color = text;
      base.fontWeight = 700;
      base.boxShadow = shadow
        ? `inset 0 1px 0 rgba(255,255,255,0.6), 0 3px 0 ${border}`
        : "inset 0 1px 0 rgba(255,255,255,0.6)";
      return {
        base,
        hover: {},
        active: {
          transform: "translateY(2px)",
          boxShadow: shadow
            ? `inset 0 1px 0 rgba(255,255,255,0.6), 0 1px 0 ${border}`
            : "inset 0 1px 0 rgba(255,255,255,0.6)",
        },
      };
    }
  }
}

const PX_KEYS = new Set([
  "paddingTop",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
  "fontSize",
  "borderRadius",
]);

function toKebab(key: string) {
  return key.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());
}

function cssValue(key: string, value: unknown) {
  if (typeof value === "number" && PX_KEYS.has(key)) return `${value}px`;
  return String(value);
}

function styleToCssLines(style: StyleMap) {
  return Object.entries(style)
    .filter(([, v]) => v !== undefined)
    .map(([k, v]) => `  ${toKebab(k)}: ${cssValue(k, v)};`)
    .join("\n");
}

export function buildCss(button: ParametricButtonDef, controls: Controls) {
  const { base, hover, active } = computeStyleSet(button, controls);
  const blocks = [`.btn-${button.id} {\n${styleToCssLines(base)}\n}`];
  if (Object.keys(hover).length) blocks.push(`.btn-${button.id}:hover {\n${styleToCssLines(hover)}\n}`);
  if (Object.keys(active).length) blocks.push(`.btn-${button.id}:active {\n${styleToCssLines(active)}\n}`);
  return blocks.join("\n\n");
}

// Custom buttons are hand-written snippets; most are authored as plain CSS,
// but some are authored directly in Tailwind (empty `css`) — those copy
// their HTML instead.
// Component buttons return their prompt since they're React components.
export function getCode(button: ButtonDef): string {
  if (button.kind === "component") return button.prompt;
  if (button.kind === "custom") return button.css.trim() ? button.css : button.html;
  return buildCss(button, defaultControls(button.defaultAccent));
}
