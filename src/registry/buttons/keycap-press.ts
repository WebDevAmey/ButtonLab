import type { CustomButtonDef } from "../types";

export const keycapPress: CustomButtonDef = {
  id: "keycap-press",
  name: "Keycap Press",
  category: "Material",
  description: "A layered mechanical keycap with a beveled body and inner face that compresses with a real shadow-depth curve on press.",
  tags: ["keycap", "3d", "press", "gradient"],
  label: "Get Started",
  kind: "custom",
  html: `
<button class="keycap-press-btn">
  <span class="keycap-press-btn__body">
    <span class="keycap-press-btn__face">
      <span class="keycap-press-btn__label">Get Started</span>
    </span>
  </span>
</button>
  `,
  css: `
.keycap-press-btn {
  padding: 4px;
  background: linear-gradient(180deg, #3a3d42, rgba(58,61,66,0));
  border: none;
  border-radius: 16px;
  cursor: pointer;
}

.keycap-press-btn__body {
  display: block;
  padding: 3px;
  border-radius: 13px;
  background: linear-gradient(180deg, #4b4f56, #34373c);
  box-shadow: 0 3px 6px rgba(0,0,0,0.55), 0 1px 0 rgba(255,255,255,0.06) inset;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.keycap-press-btn:hover .keycap-press-btn__body {
  box-shadow: 0 5px 10px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.08) inset;
}

.keycap-press-btn:active .keycap-press-btn__body {
  box-shadow: 0 0px 1px rgba(0,0,0,0.7) inset;
  transform: scale(0.985) translateY(1px);
}

.keycap-press-btn__face {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 11px 26px;
  border-radius: 10px;
  background: linear-gradient(180deg, #3d4046, #2c2f34);
}

.keycap-press-btn__label {
  font-family: system-ui, sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #f2f3f5;
  letter-spacing: 0.2px;
}
  `,
  prompt: "A three-layer keycap button: an outer frame with a soft top-lit gradient fading to transparent, a middle beveled body with a subtle top-highlight inset shadow, and an inner face with a slightly darker gradient. On hover, the body's drop shadow grows softly outward for lift; on active, the shadow collapses to a tight inset shadow and the whole body scales down 1.5% with a 1px downward shift, reading as genuine mechanical compression rather than a flat opacity/scale hover.",
};