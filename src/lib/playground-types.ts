export type Size = "sm" | "md" | "lg";

export type Controls = {
  radius: number;
  size: Size;
  accent: string;
  shadow: boolean;
  speed: number;
  blur: number;
  glow: boolean;
};

export const sizePresets: Record<Size, { paddingY: number; paddingX: number; fontSize: number }> = {
  sm: { paddingY: 8, paddingX: 18, fontSize: 13 },
  md: { paddingY: 12, paddingX: 26, fontSize: 14 },
  lg: { paddingY: 16, paddingX: 34, fontSize: 16 },
};

export const defaultControls = (accent: string): Controls => ({
  radius: 10,
  size: "md",
  accent,
  shadow: true,
  speed: 200,
  blur: 8,
  glow: false,
});
