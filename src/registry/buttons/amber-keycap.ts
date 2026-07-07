import type { CustomButtonDef } from "../types";

export const amberKeycap: CustomButtonDef = {
  id: "amber-keycap",
  name: "Amber Keycap",
  category: "Material",
  description: "A warm-toned keycap button whose top-edge highlight vanishes under press, as if the rounded edge catching light flattens under load.",
  tags: ["keycap", "3d", "press", "accent"],
  label: "Continue",
  kind: "custom",
  html: `
<button class="amber-keycap-btn">
  <span class="amber-keycap-btn__edge"></span>
  <span class="amber-keycap-btn__body">
    <span class="amber-keycap-btn__label">Continue</span>
  </span>
</button>
  `,
  css: `
.amber-keycap-btn {
  position: relative;
  padding: 0;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  background: transparent;
}

.amber-keycap-btn__edge {
  position: absolute;
  top: 1px;
  left: 12px;
  right: 12px;
  height: 1px;
  background: rgba(255, 235, 200, 0.55);
  border-radius: 1px;
  z-index: 2;
  transition: opacity 0.15s ease;
}

.amber-keycap-btn:active .amber-keycap-btn__edge {
  opacity: 0;
}

.amber-keycap-btn__body {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 13px 30px;
  border-radius: 12px;
  background: linear-gradient(180deg, #e0913f, #c46e26);
  box-shadow: 0 3px 0 #9c581c, 0 6px 10px rgba(0,0,0,0.35);
  transition: box-shadow 0.15s ease, transform 0.15s ease;
}

.amber-keycap-btn:hover .amber-keycap-btn__body {
  box-shadow: 0 4px 0 #9c581c, 0 8px 14px rgba(0,0,0,0.3);
  transform: translateY(-1px);
}

.amber-keycap-btn:active .amber-keycap-btn__body {
  box-shadow: 0 1px 0 #9c581c;
  transform: translateY(2px);
}

.amber-keycap-btn__label {
  font-family: system-ui, sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #fff8ee;
}
  `,
  prompt: "A warm-gradient button using a solid offset box-shadow (not blurred) as a hard ledge beneath it, simulating physical thickness. On hover it lifts slightly with a taller ledge; on active it compresses down until the ledge nearly disappears, while a thin top highlight line — present only at rest — fades out under press, as if the light-catching bevel flattens under load.",
};