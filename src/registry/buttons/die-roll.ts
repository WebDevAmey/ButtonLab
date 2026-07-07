import type { CustomButtonDef } from "../types";

export const dieRoll: CustomButtonDef = {
  id: "die-roll",
  name: "Die Roll",
  category: "Impossible",
  description: "A button rendered as a cube face in real 3D space that tumbles 90° on hover to reveal a different face and label.",
  tags: ["cube", "3d", "roll", "impossible"],
  label: "Roll",
  kind: "custom",
  html: `
<button class="die-roll-btn">
  <span class="die-roll-btn__cube">
    <span class="die-roll-btn__face die-roll-btn__face--front">Roll</span>
    <span class="die-roll-btn__face die-roll-btn__face--bottom">Again?</span>
  </span>
</button>
  `,
  css: `
.die-roll-btn {
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  perspective: 300px;
}

.die-roll-btn__cube {
  position: relative;
  display: block;
  width: 140px;
  height: 52px;
  transform-style: preserve-3d;
  transition: transform 0.5s cubic-bezier(0.6, 0, 0.35, 1.2);
}

.die-roll-btn:hover .die-roll-btn__cube,
.die-roll-btn:focus-visible .die-roll-btn__cube {
  transform: rotateX(-90deg);
}

.die-roll-btn__face {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-family: system-ui, sans-serif;
  font-weight: 700;
  font-size: 14px;
  backface-visibility: hidden;
}

.die-roll-btn__face--front {
  background: #232323;
  color: #f0eee2;
  transform: rotateX(0deg) translateZ(26px);
}

.die-roll-btn__face--bottom {
  background: #eae4d3;
  color: #232323;
  transform: rotateX(90deg) translateZ(26px);
}
  `,
  prompt: "A button built as two faces on a cube using transform-style: preserve-3d and translateZ to physically separate front and bottom faces by half the cube's depth, inside a perspective container. On hover, the whole cube rotates -90deg on the X-axis, so the front face swings away and the bottom face rotates into view, reading as a genuine tumbling die rather than a flat cross-fade.",
};