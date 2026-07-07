import type { CustomButtonDef } from "../types";

export const frostedPane: CustomButtonDef = {
  id: "frosted-pane",
  name: "Frosted Pane",
  category: "Material",
  description: "A restrained glassmorphism button: a translucent blurred pane with a thin inner light border and a subtle press-dip.",
  tags: ["glass", "glassmorphism", "blur", "material"],
  label: "Sign In",
  kind: "custom",
  html: `
<button class="frosted-pane-btn">
  <span class="frosted-pane-btn__label">Sign In</span>
</button>
  `,
  css: `
.frosted-pane-btn {
  padding: 13px 34px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(14px) saturate(140%);
  -webkit-backdrop-filter: blur(14px) saturate(140%);
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 12px;
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.35) inset,
    0 8px 20px rgba(0, 0, 0, 0.18);
  cursor: pointer;
  transition: background 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease;
}

.frosted-pane-btn:hover {
  background: rgba(255, 255, 255, 0.18);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.4) inset,
    0 10px 24px rgba(0, 0, 0, 0.2);
}

.frosted-pane-btn:active {
  transform: scale(0.98);
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25) inset;
}

.frosted-pane-btn__label {
  font-family: system-ui, sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #000000;
  letter-spacing: 0.2px;
}
  `,
  prompt: "A single-layer glass button using backdrop-filter: blur() with saturate() over a translucent white background (no gradient), a thin semi-transparent border, and one inset top highlight line to suggest a lit glass edge. On press, background opacity drops slightly and the shadow flips to a soft inset, avoiding the common heavy-glow over-styled glassmorphism look — restrained enough to sit over any photo or colored backdrop.",
};