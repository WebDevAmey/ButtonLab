import type { CustomButtonDef } from "../types";

export const softEmboss: CustomButtonDef = {
  id: "soft-emboss",
  name: "Soft Emboss",
  category: "Material",
  description: "A neumorphic button carved from its own background using only dual soft shadows, inverting to a pressed-in look on click.",
  tags: ["neumorphism", "soft-ui", "emboss", "material"],
  label: "Submit",
  kind: "custom",
  html: `
<div class="soft-emboss-wrap">
  <button class="soft-emboss-btn">
    <span class="soft-emboss-btn__label">Submit</span>
  </button>
</div>
  `,
  css: `
.soft-emboss-wrap {
  display: inline-block;
  padding: 20px;
  background: #e6e9ee;
  border-radius: 20px;
}

.soft-emboss-btn {
  padding: 14px 34px;
  background: #e6e9ee;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  box-shadow:
    6px 6px 12px #c3c7cd,
    -6px -6px 12px #ffffff;
  transition: box-shadow 0.18s ease;
}

.soft-emboss-btn:hover {
  box-shadow:
    7px 7px 14px #c3c7cd,
    -7px -7px 14px #ffffff;
}

.soft-emboss-btn:active {
  box-shadow:
    inset 4px 4px 8px #c3c7cd,
    inset -4px -4px 8px #ffffff;
}

.soft-emboss-btn__label {
  font-family: system-ui, sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #4a5568;
}
  `,
  prompt: "A neumorphic button matching its wrapping background color exactly, with no border and no gradient — depth comes entirely from a light shadow (top-left, near-white) paired with a dark shadow (bottom-right, muted gray-blue) at equal offset and blur, implying a light source from the upper-left. On press, both shadows flip to inset versions at a tighter offset, so the same shape reads as pressed into the surface rather than sitting above it.",
};