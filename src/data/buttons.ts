export type AccentMode =
  | "gradient"
  | "neumorphic"
  | "border-tint"
  | "glow-outline"
  | "solid-step"
  | "solid-pill"
  | "retro-gradient";

export type ButtonDef = {
  id: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  label: string;
  accentMode: AccentMode;
  defaultAccent: string;
  supportsBlur: boolean;
};

export const buttons: ButtonDef[] = [
  {
    id: "gradient",
    name: "Gradient",
    category: "Fill",
    description:
      "A vibrant two-tone gradient button with a soft ambient shadow. Great for primary calls to action.",
    tags: ["gradient", "primary", "cta"],
    label: "Get Started",
    accentMode: "gradient",
    defaultAccent: "#6366f1",
    supportsBlur: false,
  },
  {
    id: "neumorphic",
    name: "Neumorphism",
    category: "Soft UI",
    description:
      "A soft, extruded button that looks pressed into the surface. Subtle, tactile, monochrome by nature.",
    tags: ["neumorphism", "soft-ui", "minimal"],
    label: "Continue",
    accentMode: "neumorphic",
    defaultAccent: "#a1a1aa",
    supportsBlur: false,
  },
  {
    id: "glass",
    name: "Glassmorphism",
    category: "Translucent",
    description:
      "A frosted, translucent button that picks up the color of whatever sits behind it. Pairs well with rich backgrounds.",
    tags: ["glass", "translucent", "blur"],
    label: "Sign In",
    accentMode: "border-tint",
    defaultAccent: "#ffffff",
    supportsBlur: true,
  },
  {
    id: "outline",
    name: "Outline",
    category: "Minimal",
    description:
      "A quiet, minimal button that fills in on hover. Ideal for secondary actions next to a primary button.",
    tags: ["outline", "minimal", "secondary"],
    label: "Learn More",
    accentMode: "border-tint",
    defaultAccent: "#f5f5f7",
    supportsBlur: false,
  },
  {
    id: "neon",
    name: "Neon",
    category: "Glow",
    description:
      "A glowing outline button with a soft text-shadow that intensifies on hover. Built for dark, playful interfaces.",
    tags: ["neon", "glow", "playful"],
    label: "Play Now",
    accentMode: "glow-outline",
    defaultAccent: "#00e0b0",
    supportsBlur: false,
  },
  {
    id: "press",
    name: "3D Press",
    category: "Tactile",
    description:
      "A tactile button with a hard drop shadow that compresses on click, simulating a physical key press.",
    tags: ["3d", "tactile", "skeuomorphic"],
    label: "Click Me",
    accentMode: "solid-step",
    defaultAccent: "#00b894",
    supportsBlur: false,
  },
  {
    id: "gooey",
    name: "Gooey",
    category: "Playful",
    description:
      "A bubbly pill button that stretches and softens its corners on hover for a playful, elastic feel.",
    tags: ["gooey", "playful", "pill"],
    label: "Subscribe",
    accentMode: "solid-pill",
    defaultAccent: "#f59e0b",
    supportsBlur: false,
  },
  {
    id: "retro",
    name: "Retro",
    category: "Skeuomorphic",
    description:
      "A warm, embossed button with an inset highlight and a hard shadow step, reminiscent of early UI chrome.",
    tags: ["retro", "skeuomorphic", "warm"],
    label: "Download",
    accentMode: "retro-gradient",
    defaultAccent: "#f5a524",
    supportsBlur: false,
  },
];

export function getButton(id: string) {
  return buttons.find((b) => b.id === id);
}
