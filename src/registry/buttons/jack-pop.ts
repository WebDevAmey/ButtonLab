import type { CustomButtonDef } from "../types";

export const jackPop: CustomButtonDef = {
  id: "jack-pop",
  name: "Jack Pop",
  category: "Mechanical",
  description: "A shape that springs up out of the button on a coil, bobs twice, then drops back inside, like a jack-in-the-box popping.",
  tags: ["spring", "pop", "surprise", "mechanical"],
  label: "Surprise",
  kind: "custom",
  html: `
<button class="jack-pop-btn" onclick="
  this.classList.remove('is-popping');
  void this.offsetWidth;
  this.classList.add('is-popping');
">
  <span class="jack-pop-btn__box"></span>
  <span class="jack-pop-btn__jack"></span>
  <span class="jack-pop-btn__label">Surprise</span>
</button>
  `,
  css: `
.jack-pop-btn {
  position: relative;
  padding: 14px 34px;
  background: #2c3e2e;
  border: none;
  border-radius: 6px;
  font-family: system-ui, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #eef2e6;
  cursor: pointer;
  overflow: visible;
}

.jack-pop-btn__jack {
  position: absolute;
  top: 0;
  left: 50%;
  width: 14px;
  height: 14px;
  margin-left: -7px;
  border-radius: 3px;
  background: #e8b23d;
  z-index: 2;
  transform: translateY(0) scale(0.3);
  opacity: 0;
}

.jack-pop-btn.is-popping .jack-pop-btn__jack {
  animation: jack-pop-spring 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes jack-pop-spring {
  0%   { transform: translateY(0) scale(0.3); opacity: 0; }
  10%  { opacity: 1; }
  45%  { transform: translateY(-38px) scale(1); }
  60%  { transform: translateY(-26px) scale(1); }
  75%  { transform: translateY(-34px) scale(1); }
  90%  { transform: translateY(-4px) scale(0.7); opacity: 1; }
  100% { transform: translateY(0) scale(0.3); opacity: 0; }
}

.jack-pop-btn__label {
  position: relative;
  z-index: 1;
}
  `,
  prompt: "A button hiding a small square shape at its own top edge, invisible and scaled down at rest. On every click, a keyframe animation launches it upward past the button's top with an elastic overshoot, holds it bobbing between two heights for two small oscillations (simulating a coil settling under gravity), then pulls it back down and shrinks it away, like a jack-in-the-box popping out and being pushed back in.",
};