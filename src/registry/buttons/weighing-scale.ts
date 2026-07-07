import type { CustomButtonDef } from "../types";

export const weighingScale: CustomButtonDef = {
  id: "weighing-scale",
  name: "Weighing Scale",
  category: "Physics",
  description: "A counterweight and label balanced on a shared bar that tips around its center pivot on hover, like a scale settling under load.",
  tags: ["scale", "balance", "pivot", "physics"],
  label: "Balance",
  kind: "custom",
  html: `
<button class="weighing-scale-btn">
  <span class="weighing-scale-btn__bar">
    <span class="weighing-scale-btn__weight"></span>
    <span class="weighing-scale-btn__beam"></span>
    <span class="weighing-scale-btn__label">Balance</span>
  </span>
</button>
  `,
  css: `
.weighing-scale-btn {
  padding: 18px 36px;
  background: #292420;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.weighing-scale-btn__bar {
  display: flex;
  align-items: center;
  gap: 14px;
  transform-origin: center center;
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.weighing-scale-btn:hover .weighing-scale-btn__bar,
.weighing-scale-btn:focus-visible .weighing-scale-btn__bar {
  transform: rotate(-7deg);
}

.weighing-scale-btn__weight {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #a9a296;
  flex-shrink: 0;
}

.weighing-scale-btn__beam {
  width: 46px;
  height: 1px;
  background: #6b6459;
  flex-shrink: 0;
}

.weighing-scale-btn__label {
  font-family: system-ui, sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #f0ece0;
  white-space: nowrap;
}
  `,
  prompt: "A button whose content is a single flex row (counterweight dot, thin beam line, label) with transform-origin set to its own center. On hover, the entire row rotates together a few degrees with an elastic overshoot easing, so the dot and label move as one rigid pivoting bar rather than as independent elements, mimicking a scale tipping under the label's added weight.",
};