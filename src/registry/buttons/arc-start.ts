import type { CustomButtonDef } from "../types";

export const arcStart: CustomButtonDef = {
  id: "arc-start",
  name: "Arc Start",
  category: "Material",
  description: "A 3D-pressable CTA button with a thin spinning conic-gradient ring that appears on hover, and an arrow that leaves a fading ghost trail as it slides.",
  tags: ["cta", "gradient", "3d", "arrow"],
  label: "Let's get started",
  kind: "custom",
  html: `
<button class="arc-start-btn">
  <span class="arc-start-btn__border"></span>
  <span class="arc-start-btn__face">
    <span class="arc-start-btn__label">Let's get started</span>
    <span class="arc-start-btn__arrow-wrap">
      <svg class="arc-start-btn__arrow-ghost" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>
      <svg class="arc-start-btn__arrow" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>
    </span>
  </span>
</button>
  `,
  css: `
.arc-start-btn {
  position: relative;
  padding: 0;
  border: none;
  background: transparent;
  border-radius: 14px;
  cursor: pointer;
}

.arc-start-btn__border {
  position: absolute;
  inset: -1.5px;
  border-radius: 15px;
  padding: 1.5px;
  background: conic-gradient(from 0deg, #2dd4bf, #3b82f6, #a855f7, #2dd4bf);
  opacity: 0;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  transition: opacity 0.4s ease;
  animation: arc-start-spin 3s linear infinite paused;
}

.arc-start-btn:hover .arc-start-btn__border {
  opacity: 1;
  animation-play-state: running;
}

@keyframes arc-start-spin {
  to { transform: rotate(360deg); }
}

.arc-start-btn__face {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 13px 24px;
  border-radius: 12px;
  background: #0b0b0d;
  box-shadow:
    0 1px 0 rgba(255,255,255,0.05) inset,
    0 3px 0 #000000,
    0 8px 18px rgba(0,0,0,0.4);
  transform: translateY(0);
  transition: transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.15s ease;
}

.arc-start-btn:active .arc-start-btn__face {
  transform: translateY(3px);
  box-shadow:
    0 1px 0 rgba(255,255,255,0.02) inset,
    0 0px 0 #000000,
    0 2px 6px rgba(0,0,0,0.3);
}

.arc-start-btn__label {
  font-family: system-ui, sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #f4f4f5;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.arc-start-btn:hover .arc-start-btn__label {
  transform: translateX(2px);
}

.arc-start-btn__arrow-wrap {
  position: relative;
  width: 16px;
  height: 16px;
}

.arc-start-btn__arrow,
.arc-start-btn__arrow-ghost {
  position: absolute;
  inset: 0;
  width: 16px;
  height: 16px;
  color: #f4f4f5;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease;
}

.arc-start-btn__arrow-ghost {
  opacity: 0;
  color: #a855f7;
}

.arc-start-btn:hover .arc-start-btn__arrow {
  transform: translateX(5px);
}

.arc-start-btn:hover .arc-start-btn__arrow-ghost {
  opacity: 0.4;
  transform: translateX(10px);
  transition-delay: 0.06s;
}
  `,
  prompt: "A CTA button with real shadow-depth 3D press (offset drop shadow collapsing on active, not scale), a thin conic-gradient ring masked to only its outline via mask-composite: exclude that fades in and starts spinning only on hover (animation-play-state toggling from paused to running), and an arrow icon paired with a duplicate ghost copy behind it that lags on a slight transition-delay and lower opacity as both slide right on hover — producing a comet-trail motion instead of a single icon translating.",
};