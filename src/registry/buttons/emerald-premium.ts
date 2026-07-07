import type { CustomButtonDef } from "../types";

export const emeraldPremium: CustomButtonDef = {
  id: "emerald-premium",
  name: "Emerald Premium",
  category: "Material",
  description: "A gradient-framed premium badge button in emerald tones with a backdrop-blurred inner panel and a subtly shimmering crown icon.",
  tags: ["premium", "gradient", "badge", "shimmer"],
  label: "Premium",
  kind: "custom",
  html: `
<button class="emerald-premium-btn">
  <span class="emerald-premium-btn__panel">
    <span class="emerald-premium-btn__content">
      <svg class="emerald-premium-btn__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 8l4 3 5-6 5 6 4-3-2 10H5L3 8z"></path>
        <path d="M5 21h14"></path>
      </svg>
      <span class="emerald-premium-btn__label">Premium</span>
    </span>
  </span>
</button>
  `,
  css: `
.emerald-premium-btn {
  position: relative;
  padding: 4px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  background: linear-gradient(135deg, #0f5132, #34d399, #0f5132);
  transition: transform 0.35s ease, box-shadow 0.35s ease, background 0.5s ease;
}

.emerald-premium-btn:hover {
  transform: rotate(2deg) scale(1.04) translateY(-2px);
  box-shadow: 0 14px 26px rgba(16, 185, 129, 0.35);
  background: linear-gradient(135deg, #34d399, #0f5132, #34d399);
}

.emerald-premium-btn__panel {
  display: block;
  padding: 10px 26px;
  border-radius: 12px;
  background: rgba(4, 12, 9, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.emerald-premium-btn__content {
  display: flex;
  align-items: center;
  gap: 8px;
}

.emerald-premium-btn__icon {
  width: 20px;
  height: 20px;
  color: #34d399;
  animation: emerald-premium-shimmer 2.6s ease-in-out infinite;
  transition: color 0.35s ease;
}

@keyframes emerald-premium-shimmer {
  0%, 100% { opacity: 0.75; }
  50% { opacity: 1; filter: drop-shadow(0 0 3px rgba(52, 211, 153, 0.7)); }
}

.emerald-premium-btn:hover .emerald-premium-btn__icon {
  color: #6ee7b7;
}

.emerald-premium-btn__label {
  font-family: system-ui, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #6ee7b7;
  transition: color 0.35s ease;
}

.emerald-premium-btn:hover .emerald-premium-btn__label {
  color: #a7f3d0;
}
  `,
  prompt: "A badge-style button matching the reference Premium button's structure (gradient outer frame, blurred dark inner panel, icon + label row), but recolored to an emerald palette, using a crown outline icon instead of a sparkle icon, with the icon given its own slow continuous opacity/drop-shadow shimmer loop independent of hover, and the hover state combining a slight rotate with scale AND an upward lift plus a growing colored shadow, rather than rotate/scale alone.",
};