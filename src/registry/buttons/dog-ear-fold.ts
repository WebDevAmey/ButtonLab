import type { CustomButtonDef } from "../types";

export const dogEarFold: CustomButtonDef = {
  id: "dog-ear-fold",
  name: "Dog-Ear Fold",
  category: "Material",
  description: "A button corner that peels and folds over like a dog-eared page, revealing a second label printed on its underside.",
  tags: ["paper", "fold", "corner", "material"],
  label: "Save Draft",
  kind: "custom",
  html: `
<button class="dog-ear-btn">
  <span class="dog-ear-btn__label">Save Draft</span>
  <span class="dog-ear-btn__corner">
    <span class="dog-ear-btn__corner-back">Saved</span>
  </span>
</button>
  `,
  css: `
.dog-ear-btn {
  position: relative;
  padding: 16px 36px 16px 20px;
  background: #fbfaf6;
  border: 1px solid #ddd6c6;
  border-radius: 2px;
  font-family: system-ui, sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #2c2c2c;
  cursor: pointer;
}

.dog-ear-btn__corner {
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 22px 22px 0;
  border-color: transparent #ddd6c6 transparent transparent;
  transform-origin: top right;
  transition: transform 0.3s ease, border-width 0.3s ease;
  overflow: hidden;
}

.dog-ear-btn__corner-back {
  position: absolute;
  top: -22px;
  right: -22px;
  width: 44px;
  font-size: 8px;
  font-weight: 700;
  text-align: center;
  color: #7a7460;
  transform: rotate(45deg);
}

.dog-ear-btn:hover .dog-ear-btn__corner,
.dog-ear-btn:focus-visible .dog-ear-btn__corner {
  border-width: 0 40px 40px 0;
}
  `,
  prompt: "A button with a CSS border-triangle in its top-right corner simulating a folded page corner. Behind the fold sits a tiny rotated word only visible once the triangle grows large enough on hover to expose it, like lifting a dog-eared page to see what's underneath.",
};