import type { CustomButtonDef } from "../types";

export const apertureIris: CustomButtonDef = {
  id: "aperture-iris",
  name: "Aperture Iris",
  category: "Optical",
  description: "A hexagonal iris that rotates open on hover like a camera aperture retracting to expose the label.",
  tags: ["camera", "aperture", "iris", "optical"],
  label: "Focus",
  kind: "custom",
  html: `
<button class="aperture-iris-btn">
  <span class="aperture-iris-btn__blade"></span>
  <span class="aperture-iris-btn__label">Focus</span>
</button>
  `,
  css: `
.aperture-iris-btn {
  position: relative;
  overflow: hidden;
  padding: 16px 34px;
  background: #17181a;
  border: none;
  border-radius: 4px;
  font-family: system-ui, sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #e9e6dd;
  cursor: pointer;
}

.aperture-iris-btn__blade {
  position: absolute;
  inset: 0;
  background: #3a3c40;
  z-index: 1;
  clip-path: polygon(50% -20%, 150% 50%, 50% 120%, -50% 50%);
  transform: rotate(0deg) scale(1);
  transition: transform 0.45s cubic-bezier(0.65, 0, 0.35, 1), clip-path 0.45s cubic-bezier(0.65, 0, 0.35, 1);
}

.aperture-iris-btn:hover .aperture-iris-btn__blade,
.aperture-iris-btn:focus-visible .aperture-iris-btn__blade {
  transform: rotate(35deg) scale(1.6);
  clip-path: polygon(50% 42%, 58% 50%, 50% 58%, 42% 50%);
}

.aperture-iris-btn__label {
  position: relative;
  z-index: 0;
}
  `,
  prompt: "A button covered by a single rotated diamond-shaped clip-path panel filling the whole surface. On hover, that panel simultaneously rotates ~35deg and its clip-path collapses toward a tiny center diamond, scaling up so the collapsed shape still fully clears the button edges — reading as an aperture opening rather than a shape shrinking in place.",
};