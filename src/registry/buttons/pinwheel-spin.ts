import type { CustomButtonDef } from "../types";

export const pinwheelSpin: CustomButtonDef = {
  id: "pinwheel-spin",
  name: "Pinwheel Spin",
  category: "Mechanical",
  description: "A four-bladed pinwheel behind the label that spins fast on click and decelerates naturally to a stop, like a toy caught in a gust.",
  tags: ["pinwheel", "spin", "decelerate", "mechanical"],
  label: "Spin",
  kind: "custom",
  html: `
<button class="pinwheel-spin-btn" onclick="
  this.classList.remove('is-spinning');
  void this.offsetWidth;
  this.classList.add('is-spinning');
">
  <span class="pinwheel-spin-btn__wheel">
    <span class="pinwheel-spin-btn__blade"></span>
    <span class="pinwheel-spin-btn__blade"></span>
    <span class="pinwheel-spin-btn__blade"></span>
    <span class="pinwheel-spin-btn__blade"></span>
  </span>
  <span class="pinwheel-spin-btn__label">Spin</span>
</button>
  `,
  css: `
.pinwheel-spin-btn {
  position: relative;
  padding: 16px 36px;
  background: #f3ede0;
  border: 1px solid #d8cfb8;
  border-radius: 6px;
  font-family: system-ui, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #2b2b2b;
  cursor: pointer;
  overflow: hidden;
}

.pinwheel-spin-btn__wheel {
  position: absolute;
  top: 50%;
  left: 14px;
  width: 20px;
  height: 20px;
  margin-top: -10px;
  z-index: 0;
}

.pinwheel-spin-btn__blade {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 4px;
  margin: -2px 0 0 0;
  background: #b23a3a;
  transform-origin: 0% 50%;
}

.pinwheel-spin-btn__blade:nth-child(1) { transform: rotate(0deg); }
.pinwheel-spin-btn__blade:nth-child(2) { transform: rotate(90deg); }
.pinwheel-spin-btn__blade:nth-child(3) { transform: rotate(180deg); }
.pinwheel-spin-btn__blade:nth-child(4) { transform: rotate(270deg); }

.pinwheel-spin-btn.is-spinning .pinwheel-spin-btn__wheel {
  animation: pinwheel-spin-turn 1.6s cubic-bezier(0.15, 0.85, 0.3, 1);
}

@keyframes pinwheel-spin-turn {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(1080deg); }
}

.pinwheel-spin-btn__label {
  position: relative;
  z-index: 1;
  padding-left: 20px;
}
  `,
  prompt: "A button with a small four-bladed pinwheel (four rectangles fanned at 90deg increments from a shared transform-origin point) sitting to the left of the label. On click, the wheel rotates a full 1080deg (three turns) using an easing curve that's fast at the start and gradually slows toward the end, simulating angular momentum decaying from friction/air resistance rather than a constant-speed spin loop.",
};