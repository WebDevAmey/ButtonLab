import type { CustomButtonDef } from "../types";

export const mercuryBead: CustomButtonDef = {
  id: "mercury-bead",
  name: "Mercury Bead",
  category: "Material",
  description: "Two separate metallic droplets that coalesce into a single bead and slide together on hover, like liquid mercury merging.",
  tags: ["mercury", "droplet", "merge", "material"],
  label: "Combine",
  kind: "custom",
  html: `
<button class="mercury-bead-btn">
  <span class="mercury-bead-btn__label">Combine</span>
  <span class="mercury-bead-btn__bead mercury-bead-btn__bead--a"></span>
  <span class="mercury-bead-btn__bead mercury-bead-btn__bead--b"></span>
</button>
  `,
  css: `
.mercury-bead-btn {
  position: relative;
  padding: 14px 32px;
  background: #1a1c1e;
  border: none;
  border-radius: 40px;
  font-family: system-ui, sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #dcdcdc;
  cursor: pointer;
  filter: url(#mercury-bead-goo);
}

.mercury-bead-btn__bead {
  position: absolute;
  top: 50%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #b7bcc2;
  transform: translateY(-50%);
  transition: left 0.5s cubic-bezier(0.5, 0, 0.2, 1);
  z-index: 0;
}

.mercury-bead-btn__bead--a { left: 14px; }
.mercury-bead-btn__bead--b { left: 34px; }

.mercury-bead-btn:hover .mercury-bead-btn__bead--a,
.mercury-bead-btn:focus-visible .mercury-bead-btn__bead--a { left: 22px; }

.mercury-bead-btn:hover .mercury-bead-btn__bead--b,
.mercury-bead-btn:focus-visible .mercury-bead-btn__bead--b { left: 26px; }

.mercury-bead-btn__label {
  position: relative;
  z-index: 1;
}
  `,
  prompt: "A button with a goo/blob SVG filter applied (feGaussianBlur + feColorMatrix contrast) so two small solid gray circles positioned near its left edge visually merge into one teardrop shape as they slide toward each other on hover, mimicking mercury bead coalescence. Note: requires an SVG filter defined elsewhere in the page with id='mercury-bead-goo' — flag to the user that this needs a one-time global SVG def since ButtonPreview injects HTML/CSS only.",
};