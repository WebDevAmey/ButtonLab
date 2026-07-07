import type { CustomButtonDef } from "../types";

export const spiritLevel: CustomButtonDef = {
  id: "spirit-level",
  name: "Spirit Level",
  category: "Impossible",
  description: "A button frame that tilts on hover while its label and level-vial stay perfectly horizontal, defying the housing around them like a real spirit-level bubble.",
  tags: ["level", "gravity", "tilt", "impossible"],
  label: "Level Up",
  kind: "custom",
  html: `
<button class="spirit-level-btn">
  <span class="spirit-level-btn__vial">
    <span class="spirit-level-btn__bubble"></span>
  </span>
  <span class="spirit-level-btn__label">Level Up</span>
</button>
  `,
  css: `
.spirit-level-btn {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 34px;
  background: #d8cbb0;
  border: 2px solid #8a7454;
  border-radius: 4px;
  font-family: system-ui, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #3a2f1d;
  cursor: pointer;
  transform: rotate(0deg);
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}

.spirit-level-btn:hover,
.spirit-level-btn:focus-visible {
  transform: rotate(-9deg);
}

.spirit-level-btn__vial {
  position: relative;
  display: inline-block;
  width: 34px;
  height: 12px;
  flex-shrink: 0;
  border-radius: 6px;
  background: #efe6d3;
  border: 1px solid #8a7454;
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}

.spirit-level-btn:hover .spirit-level-btn__vial,
.spirit-level-btn:focus-visible .spirit-level-btn__vial {
  transform: rotate(9deg);
}

.spirit-level-btn__bubble {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  margin: -4px 0 0 -4px;
  border-radius: 50%;
  background: #7fae6a;
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}

.spirit-level-btn:hover .spirit-level-btn__bubble,
.spirit-level-btn:focus-visible .spirit-level-btn__bubble {
  transform: translateX(6px);
}

.spirit-level-btn__label {
  display: inline-block;
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}

.spirit-level-btn:hover .spirit-level-btn__label,
.spirit-level-btn:focus-visible .spirit-level-btn__label {
  transform: rotate(9deg);
}
  `,
  prompt: "A button that rotates -9deg on hover, as if being picked up crooked. Its label and a small level-vial (a pill containing a dot) each carry an equal and opposite counter-rotation (+9deg), so their net on-screen rotation is exactly 0deg — they stay perfectly horizontal while the visible frame around them tilts. The bubble dot inside the vial also drifts slightly toward one end, as a residual gravity cue, so something still visibly responds to the tilt even though the vial itself refuses to rotate.",
};