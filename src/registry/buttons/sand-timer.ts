import type { CustomButtonDef } from "../types";

export const sandTimer: CustomButtonDef = {
  id: "sand-timer",
  name: "Sand Timer",
  category: "Physics",
  description: "A button whose color drains downward like sand falling through an hourglass on press.",
  tags: ["sand", "hourglass", "drain", "physics"],
  label: "Process",
  kind: "custom",
  html: `
<button class="sand-timer-btn" onmousedown="this.classList.add('is-draining')" onmouseup="this.classList.remove('is-draining')" onmouseleave="this.classList.remove('is-draining')">
  <span class="sand-timer-btn__fill"></span>
  <span class="sand-timer-btn__label">Process</span>
</button>
  `,
  css: `
.sand-timer-btn {
  position: relative;
  overflow: hidden;
  padding: 14px 32px;
  background: #2a2a2a;
  border: none;
  border-radius: 4px;
  font-family: system-ui, sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #efe9dc;
  cursor: pointer;
}

.sand-timer-btn__fill {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  background: #c9a86a;
  transform: translateY(0);
  transition: transform 1.6s linear;
  z-index: 0;
}

.sand-timer-btn.is-draining .sand-timer-btn__fill {
  transform: translateY(100%);
}

.sand-timer-btn__label {
  position: relative;
  z-index: 1;
  mix-blend-mode: difference;
}
  `,
  prompt: "A button filled edge-to-edge with a solid sand color. On mousedown, the fill slides straight down and out of view over ~1.6s at constant linear speed like sand draining, using mix-blend-mode on the label so text stays legible against both the sand and the base color without any gradient.",
};