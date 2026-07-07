import type { CustomButtonDef } from "../types";

export const detachedShadow: CustomButtonDef = {
  id: "detached-shadow",
  name: "Detached Shadow",
  category: "Optical",
  description: "A shadow that separates from the button and resettles in a new position independently, as if the button briefly cast a shadow of where it's about to go.",
  tags: ["shadow", "detach", "optical", "lag"],
  label: "Lift",
  kind: "custom",
  html: `
<button class="detached-shadow-btn">
  <span class="detached-shadow-btn__shadow"></span>
  <span class="detached-shadow-btn__label">Lift</span>
</button>
  `,
  css: `
.detached-shadow-btn {
  position: relative;
  padding: 14px 32px;
  background: #f2f0ea;
  border: 1px solid #2b2b2b;
  border-radius: 4px;
  font-family: system-ui, sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #2b2b2b;
  cursor: pointer;
}

.detached-shadow-btn__shadow {
  position: absolute;
  inset: 0;
  background: #2b2b2b;
  border-radius: 4px;
  z-index: -1;
  transform: translate(0, 0);
  transition: transform 0.35s cubic-bezier(0.3, 0, 0.2, 1) 0s;
}

.detached-shadow-btn:hover .detached-shadow-btn__shadow,
.detached-shadow-btn:focus-visible .detached-shadow-btn__shadow {
  transform: translate(8px, 8px);
  transition: transform 0.35s cubic-bezier(0.3, 0, 0.2, 1) 0s;
}

.detached-shadow-btn__label {
  position: relative;
  transition: transform 0.35s cubic-bezier(0.3, 0, 0.2, 1) 0.08s;
}

.detached-shadow-btn:hover .detached-shadow-btn__label,
.detached-shadow-btn:focus-visible .detached-shadow-btn__label {
  transform: translate(-3px, -3px);
}
  `,
  prompt: "A button with a solid hard-edged shadow layer (not blurred box-shadow) sitting directly behind it. On hover, the shadow layer moves first and fastest to an offset position; the button's label/content follows a fraction of a second later with a shorter transition-delay, so the shadow appears to lead the motion rather than trail it — inverting the normal shadow-follows-object relationship.",
};