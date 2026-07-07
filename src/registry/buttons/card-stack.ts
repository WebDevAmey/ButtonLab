import type { CustomButtonDef } from "../types";

export const cardStack: CustomButtonDef = {
  id: "card-stack",
  name: "Card Stack",
  category: "Impossible",
  description: "Three solid cards that rise and tilt into place from the bottom edge in a staggered 3D cascade, like cards being dealt upward, before the label swaps beneath them.",
  tags: ["cards", "3d", "stack", "hover"],
  label: "Hover me",
  kind: "custom",
  html: `
<button class="card-stack-btn">
  <span class="card-stack-btn__label card-stack-btn__label--idle">Hover me</span>
  <span class="card-stack-btn__label card-stack-btn__label--active">Explore!</span>
  <span class="card-stack-btn__card card-stack-btn__card--1"></span>
  <span class="card-stack-btn__card card-stack-btn__card--2"></span>
  <span class="card-stack-btn__card card-stack-btn__card--3"></span>
</button>
  `,
  css: `
.card-stack-btn {
  position: relative;
  overflow: hidden;
  width: 150px;
  height: 52px;
  padding: 0;
  background: #101010;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  perspective: 300px;
  font-family: system-ui, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #fff;
}

.card-stack-btn__card {
  position: absolute;
  inset: 0;
  transform: translateY(100%) rotateX(30deg);
  transform-origin: bottom center;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.card-stack-btn__card--1 { background: #ffffff; transition-delay: 0ms; z-index: 3; }
.card-stack-btn__card--2 { background: #c084fc; transition-delay: 60ms; z-index: 2; }
.card-stack-btn__card--3 { background: #6b21a8; transition-delay: 120ms; z-index: 1; }

.card-stack-btn:hover .card-stack-btn__card {
  transform: translateY(0%) rotateX(0deg);
}

.card-stack-btn__label {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;
  transition: opacity 0.15s ease;
}

.card-stack-btn__label--active { opacity: 0; }
.card-stack-btn:hover .card-stack-btn__label--idle { opacity: 0; }
.card-stack-btn:hover .card-stack-btn__label--active {
  opacity: 1;
  transition-delay: 0.25s;
}
  `,
  prompt: "A button containing three solid-color card layers, each starting translated fully below the button and tilted 30deg via rotateX inside a perspective container. On hover, all three animate to translateY(0) rotateX(0deg) with staggered transition-delays (0/60/120ms), so they rise and flatten out like cards being dealt upward rather than sliding in flat. The label swap is delayed until after the stack fully lands, so the new text only appears once the cards have visually settled.",
};